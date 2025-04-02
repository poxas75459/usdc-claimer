/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4328mu5zSyk8zjSsi6HEVpyuXavUX6EoRXm2ve8fBs63G256mdZddDNHyBw4dMNhUUCcvT7bonRMj3ymQk6aiQkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k12CyJ9QyVP127wcqFBxXas57t6sLgNAd9BZNHPWH9ZgSevnMNoJHL9VmgFreJJD4Ci3mCM5p2u2dCn3rzYNELL",
  "key1": "4NQLjPeFK52M6sbJxENPKQtiYGyCUmkK4GtjKSoPwJPfkzZUsbHjAnu9nTe7jFRKLHrdmMPYibkg9mCtrmQ2nDad",
  "key2": "KacryUtDTgjM62xAYS5nzSAchqNnpCK5bmv7tcBULMvT2tVow7hyQWtCSsbzt7SuK6o2tzybkrMFjqczz1En12K",
  "key3": "48PydR55zxiGmrJYKBRLSHQyvjWPBiVWqc8cxQ2w4bszYxekyog34hGWWCR2WynvPhDNgsKziqT2HT3WXPZasDuP",
  "key4": "5sWWdsoKfhDCFgbqeN7fNY6ovfXXjF47NGHao9xGEVgVvgqB5hGDiCQRDSsfVZ8WyxazTyVgqfYfeME4EpQmVEzS",
  "key5": "63YXqg6k92B5fMsHLvSHWNaEvjJ7jPLsuvJgGF1smQ3EAAqEzDygEgy7KHm8i2EVK7PHEGLz5nCdzeuAYjJhE5Au",
  "key6": "38tjPEg81HMKX2t8gdmoB7o5bpgwKiCXG35rDymPuVrM3DbZcNyVNLxzfy4cjaPq3UKoKJuhaQYvg8pzEpFup5dD",
  "key7": "2ev4mA4ARH5EU5CaoPYsLS2Z1yKtuQKbGG6eXshVj7i3ut2zatcNV6uwA71nCAZbF5YjXkEMm3tAFzqe6CAwxHD",
  "key8": "3sumqGn1oGJvaREaceZeypax3rUDWuWe6i8KdoYdWm8KRzLdf9PhHZif6hZWq4WonCo8facQDUhTmN3txMGBfqrw",
  "key9": "549hxDuMEwypyCAe6cchLNquUqcPRoJFBq4CAsWZF45Ws9sZPmmNxernCDTSD1ND4d9BvmT6oxiNhPx7q5uWDYUJ",
  "key10": "2TtxKE8xrANGPCgEb1hbEURJSUEB8hFVei4nw4k9R45TnSdiX6pGYhxA4NLSh8NCoMskTMQVg37joEFS4F2PHnSJ",
  "key11": "AH8xFGDZwe4whWCaNAuYBFXktAstPjcccnTMsLZix8kNG4VR9BXmcoaAgQ99eAzMtMVXruWgoZgsVsMACYnMAX8",
  "key12": "2CgzWcvLc262SJHrMSraVz2CG85H8zf3YTHmTg1zYYgXCW3cDu4BMxR5Vp6ne9rXiJqiGJKzAtKpcNdhfttBfQ6b",
  "key13": "dM7VpQYGnSsCm1JUXPbaLWoKmoxXX5jLhrqLfs3J8yRnG37cVy5rqoTfYACuPCoZ9fQkZGqRSMNeSjB7rceHBGS",
  "key14": "4Zino1Uod5CDJ5v95BbcRi3LUYVn2PnnNDMCNdak5HpMr7U7rJJWnA8jFRQ3WVkk9ZsNoEZoTBZ9ubwYjHSMVuF7",
  "key15": "2jYQnRsz1AtVYjnFK7LPccgK2dM7E3wtVDHnKS2134zVdAZhP6Bu6wArmsuSwTdaddKzoo2Ezewo5UwqJZpzobN7",
  "key16": "tKadvRLdNyFMbZN5kUJZPBoGU5rPgdh7yDTKMeCxYu743gp2rhwveJGwPXkBixz37doL6FuDbbEWwb8TdgmQ3Ta",
  "key17": "4BC7j8o2PXYKvhNgFGtepGoXrEjqVPraf3vQv97nL3a5pqGVFxMgecPAtxgsrCi6XtMGMm7Vjq4yRCSNZYNbxzne",
  "key18": "3ZxJ2V74ipR4rnxfb4Yn2wbdakqLp1LKZCqTMB7HybwCAFafUEoTgR5XZHzyHA2nX1DffowJr6ctJsjFPeG18vjM",
  "key19": "4ydsvQw4jirntvHV8gpSDct4PGAaX1rGD8MJScekRmQk36Qv7ev53tHuXZq1A2gFJaspHduQXNq34v2pFzYrdATw",
  "key20": "67YSup437JP5kPfQbdjtQbosr8wBW3uHZUh4mEEVtEK9uZ9FQ5PzDoKNqAMHHe7ekAQkqLqR1AdsXRB9P5zHYbc3",
  "key21": "66rgTnDmJ8A4KScE8H25HbvFm6p4Wmev6rpm5apZ8RNpxoSbv9DSn4REX2J7vfXoZ6a3ytnSFCyao4vqENrsRQEj",
  "key22": "b9JrcZs7NNiV55fmRdAvCs4azxUCHxW8ZKBFdGxgdRpknKFzc3NUVG1QMMcPYNDpVycEU99EPDVkn7G9jCT7Zsb",
  "key23": "3Lyki6iANLMRh6FuvytUy5YP4fTPG2B7FbZWtgevjrpfUdKqEP8Fi8nbkv1pTWJwPdvBt3xPzCWjHmu8haThTrg",
  "key24": "3UzthzTwKxtZ9kioiPX1X613zSfnkD3cUSJU37fPbkfVtoVH2edPBspQonyX17SCE587C2GLoAp9U3eXcpEEK3kn",
  "key25": "CpMetnqPRi4rdbWTnMiDjZdbNyFpCF3mtgLX6jUF8KRJNjb35UmppCF9A5mkdLq7BuRTSx6ixvphxUrcM2nPRr1",
  "key26": "2mkX9YqfHvj4fzsM5Uf4otaJPuC6PgpbuVRxsSa8RZMPVZCyadMVGc9GvtRoxFMHwcegFf1AcYk2kpiDf16ZAkPg",
  "key27": "4jpsX2e5kmjuF6Rmb4x15GKBQBXTYLd9VGTomGQ3CWeTDT1zHXtJMLzw7o5yZTYuHfHrLGbAbp9dvJ47N3URp4Vc",
  "key28": "65gJbVTuf3kLzRjNC3R8qeeQt9SqqeMPW6HfJ4hVfZJ78diJt1t91AZHEoBFsR5qQzFSvAyFrvEU7CpzQ9U3tEJf",
  "key29": "3urEsSoHaUY8PxPGMEuGY5m7FCvyrMyQC9kpbdEndPzx86NadWWmPxBduU2cutcGCX5PiCMGKw1ozuVsCEhMDXqL",
  "key30": "o1s2NrhvGukkD9dodpPqBHyvFB4E3Cnmizh1LYLQgKhwLGrk2WnFqmVC7GQf1JEVLonsCKZxzDZkX2wcYLbci3F",
  "key31": "2nJyDgoKtp7dyXQFg2y9Ry6ominXXJ7uv5SHSdrW9bgrHTa6uB7zdsJNwovFpUKiZQvX3d6vURe3e3T6N5PsaoiQ",
  "key32": "3fGU7veLAUnFeCBNzQzmBkvy7SPMnUfGqoiaN3zHJhTvwnrnWM89cNaBtMZz9ftxZRTqsJnuYycWVV6suNiiA7je",
  "key33": "mWFXyymQW4Je3H4LCxxDJPi7Ee2fSDzQESDYFwEhWAdFGq1vuNihpK4u2JjGq6ziFVPyvE7U2Qam7M6SDkdFj6i",
  "key34": "2sxRzL4QJxUmUeZhbySxmQ5ww8xg7pu9XLaadQVDByZTznWSQ9vSSHyCJ9koLHvbgkfsBnqT5YkAFJkcLH8r6cj5",
  "key35": "5wxZVpeXxpwkoL78v8X3uWNgWbbPnCP4X4vb4TqwaWAdu5q5GnLoBQFxsDqbi4nou8aD4o6jaSSsyyi5fh5YfGC1",
  "key36": "4h5TQgfRuyjFvofcnrqSyszBNYVE7Y4t5PaCYMCWCFy6cZW4WKfVcKpYSaFMv3fRGCB48PB1MrSMtqMs9ZyjQtDM",
  "key37": "5Hb9YPgPVq3yTN8X3iYtDTW74SzTGziRf5Uxrhyw4yRR5XRB8AhQJTWn8RRoSGzHuzPjWmFxYL4CywtSnBwGCE15",
  "key38": "3DghgB56nRPWiMg7Za9dbk3WuowjZDPxADCh2AVBnmBshim32tLti4gXLYGq5bEWJ2iA377ZkYJP84FfvuJLfXpY",
  "key39": "36KH1kCbbCfzBTxoDZRnmYWX4vduJ3XCQpreonw6DKhfrupHp8bJq5n6TyiGEFXt6oJ9SWPqVfNhWtTVhVajp9sd",
  "key40": "BKjjuiwqh1ja26V3FrEx7aEs5xoJRFKww1JPJuUzjTJKTHpB47W5w8GSKUMAduWAfA6ZWo33hCMhzDUftng7u7D",
  "key41": "53WJjgRH3ja6sSECaRoqhw6KSKPRstMm6mYSbNqwgcFpJnKJC4hTq2zFihLJYKBhbfTDMEzzBxPVBiw69tijGmmB",
  "key42": "4hJhSda7kNYpHzqxfzncLnqRqDYhFwAEGNUnAQ8Y6FXAFTnAVCxV1wEiuHVi5QAWzGX7z5aifLYRgBsrqJWxM97U",
  "key43": "5HNWU8zQVpRzGBBWgwXq1RY5qpyc9CSDPXdf67o2hZsQABpWnnutPwy5z1XwyNdV8ojHQq9Dtx76LP2prQBFrBLb",
  "key44": "5buNpGTwTzEXXRwkv1qRfyEjUGywDSZASbthKjXrPyK8FazjB3VR6RzptUSyYfpprBBCcVPG2cqCXW3erZb8tafK",
  "key45": "dCF6PqzZwvqnqpwwBc2uXg71PUfFPJNk7CrEURfpRmop21JMk2yK9mew2TEFnJk13g86hu1wwQ2fZsm2ztqYcv9",
  "key46": "5Uu3iw63gg19ACTynttVTMc4VCyRTWh2SxFEucA1SrGi369UiMQtwRR6TwcJwn6kQnh9SkVaoHE9n2hfqs4AWczG"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
