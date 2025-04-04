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
    "51WPToih5pDE4K3yYFgAkVfYKNFLB1YpqEWJkJSHWyipGdvj7PPQqWvi44QNNkYLewLvseSoGeA9QsvdocoRki1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h5SL3V6mXm9ULKKPK4bKozQt2vHwS4gjwDsy77xyDx8kHqGZkStzrnaCibUXjYJNTWqXQTvC2Hd5Dwc2SCNBgyv",
  "key1": "4Nfe51MLseUMhtg784bzr2uBdSvchYAL97Z76r3w93kJSew4MwNE66sA2nipTu5VHVVMt5EJz9gQRqAAhsXJr8np",
  "key2": "3brw4W6qWWrBRTAfn6sfGxYf75kxHXKZ8mnNazRpfsfXQeq2e8kgGtiJvgRPyNeFKnQyQvmx5G75rTsGmb1gNiaG",
  "key3": "C8pvShqgtwBSArVUPguAFstjRQagRfCSZJukP73uLQkubwLiD9jsTYHxTabfnkR31HuNPNNxHnmnmfBy983B96u",
  "key4": "3Dv4yE9SBEr2i4sws5JCd7d4zBCq7eYZU1ArUbrdqWi1FyTFKFP3Rs3zLgjRyUyDAPLTfWW1d8RCmANw7Wpyzkqy",
  "key5": "4PBB13zYTrpvskvBUm958ayWEwrTjSF8j7nmdh4VCt5fV2UX38yKTedCuDajiRsvTcZhWcbsJxs9kafy4RENKFAC",
  "key6": "3rdorqaMMKzNM3rSBrvKDPa1P9E4MGUSB16qBFVamsTmopqzr3EiWT8iH3BDVqPxXv6LMXokrp9CBZoozkTLP64v",
  "key7": "3fw4E3wdCjbdaSyzVa1cxEUTooUFTMABEQTvhZeWRfrMTXwX3fmB4fF1iNr76wNLEVfeBxFjKJQ5KPztnguvtJvP",
  "key8": "gYeLorktgr9vr3u6DSzcBZxEktPWnKdpqzw5pwF9wxJt2UhHcRWqf1DDGRQKFDG1GFBN8VNcPiMuE6mPJKjCQL4",
  "key9": "3CJpeFZLw51Hq1nVCicjxsufDusjnhnLT4NFqWQqmeLvYizgkhypcRVWSPKiDLeSzajdUMdM5ycoxRTYTVoxBSSL",
  "key10": "4ua64dsecDCR3u4h7biUeMqx9p5TsPvJJ8zAsyrQrqHCogZXANzjMzr1oNCcaPz8kMFjXhrXRGzzVZ9UEg95nyrx",
  "key11": "3Hf8N5JKjProT81piu8vEGATy6tezEndrsmaTPGJkcgr2jAfAJotWBw6DE5hLqgRUcX35Vdmowgho27xJntFt6Ex",
  "key12": "tzriDk8RCos1Cc2o8UQZ5S7vrNekUHQAhj1aPsvY8kvYuEgJBzTexx252PYXbxdffiXsFayqbdeTvZbbsjphKZU",
  "key13": "3Z2WZfwcaCNCmJT4MJ4Nd7RY9dgZNg4Hmw3Ub71jkjzMGCzm6KTjzrN2TR4n6N11MVGXfKNUV581g2JmpUNMeNHi",
  "key14": "E4gYFp21b81XY5hTivhnaANmJ3SMCWoPgSZz1XcCxhSvXnLGvfdSxM9fywMyvb94kztjjNSZpAReFn5irj3QVjN",
  "key15": "aFdUL8gvYpC4Fxr91JGXUdBCa1H4S5gyMEaYZU5kcBUYx6gPRVXUqcvRKpeaKaY4uH5CKnEpTqRaxuR12t7vPSu",
  "key16": "4mWeGsTR2MxD8zmhQbGgPMayYnKJDG9EFeT61CVSg1nxeVrsReDERKAsXfkvsdh66Gu4RZw2MUMiCURVy1mapMx5",
  "key17": "2a2zYLVH76DL5PKJAjb6GMLCnCmsn2HBGTfY1s56LN2Dq4JQLpQGtFKLPLUVdQtkbYFfVuvZkGeyNpABZzA4Dc7H",
  "key18": "2iyyyX6ymGRbB5ZdyNtn11CnkXyyiFXZhn8EsbMhqaTFwJgRCnrsicWH1ddnhDSw86ML1FawGgjKBkZvL426oMYx",
  "key19": "4neuVcww5txNCREKV9AKLX7wbv7Vg2s6vbjTQYGXbchHWfsde7xqH9Z8XLq1ZFP7SwztiYhZmJ5Bq1vAN6WTrkYL",
  "key20": "53oQuXvrKPYv1aGTLtEbbZuPwkUWcSkPgidn2FKH3GYtqxD2GUNSEsGeUXHfdfEECwYfic4GGs2cJNJHJX9n8GKW",
  "key21": "495JHrqZWLabFrCUdtyK2Euynd5RM8NBhvjrUZa1fkCgnTiPoe89pPohxU8VrKGL3GDFN9B69cN2vQYpcwcAMZ3m",
  "key22": "5SUpZAegeqv7s29ZqfuZqbros469Sn81dxZqd4D6jST6Mw7g26HgKGGBqiu2EwpGxfHMDrqeRCZoVwhJXiNqL9Vx",
  "key23": "5CJgTGdPXJcyHzTDQ5yx1PLgjrZRPiPPcM5YvWsDHrhL248pjx1So53ucArJGuVNLvExa9gw6C7wddSMHHZNMucr",
  "key24": "61af817NAJuaSXW1PC7iUTVxhCFZuMySoNr4wnuuD5qHv5Lr9Xypf23cXzoARGXybupz6KXqTNzgsudpFr9g1pR5",
  "key25": "3Xeb9cGRC3hGDnopVFwpwjRAaAY9RM6UcbK2tuRi2o8vorCiJSjet8PCf9tkmkd529zdFmChkJqX1NiFYdFhgaSp",
  "key26": "2JdQLXBGyeRw73Vfw3uvrn17KNWwZNANDG4s7F7kNUoyR3Vdx6qRdkoaReNXkDXEBPHMeuuSkRf843ew3mAZeJTv",
  "key27": "4RAjZQtTrQUDUHxwmpMEKJthVgLW9CUmmHFgLnUvXTi3f2wrQRjip13aJJNqTnZNcqcUen7iUBopVSi5xfehgj8F",
  "key28": "sFDA4GERcEpqfU4dHH9JyVZB57FFFndQLZuVVH7h9NwqnzmRC8g59n227jcHgooeyPLY4PPFETSx8zreUZ1dBR2",
  "key29": "BtjX1rNe4WNro4sbGQqrAibQ2VRz1EVJZvwZN4ntJGy1inbygT2ifmB7cgbyoT2L8xfTCbjTHXSENf2Hrs711Yi",
  "key30": "5tvzBJJirRWXGrHxmcLsjhVagqpUAT6TZQw6JhGXKjfoxz3WubMijNV3yhxYDyJQhNffBTB7gE32V7EgwbX9zqEu",
  "key31": "5bQY5qCgXkH1HdG18PfHVoHzsgiDtsa5ZhEyyxAVgXX3ykk8BWaf5KaD3aewWudJus9sExVUcvJZsdek5Ac5MAW7"
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
