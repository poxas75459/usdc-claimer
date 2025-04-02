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
    "3krmA18da9hLUUqYqZiseU8TTxaTHJUZHgnQqtBxTNr6Ms97HH3KxpJLxgdtVuQrTfbYq1XNkDsYcsxJ4MCxp1r6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMztuBHZ4oXuCeFyMoReDkzayPevuVyNfib8pC3HuC1HsVFw8LCd8KGcr7hphoeQLy7nkqWKW6x61nZhfmZBak4",
  "key1": "cyAGwkyRwd8dTfnMwqqUp73xQj8oPzAv98UvF3Vpo1KRLGnY415aK96jJjStCDa89kkeZbLtuC5zrzPso6wbqfH",
  "key2": "2o9EDQk7ASZHY9phnuwVeCVYGrkoEDYwQWgH2a8pYBKM1eLxzJAg2iipuycoWfThEhEe2tYfBXiREyfbJcyBHYU",
  "key3": "67G48c9WhJrsbnpsZZW61BT3ABoo3r38mWNDskpy7V4KyeSKahf6BbU1Pf72ctVvgM7EKamNN4FrRspddJrFRjjd",
  "key4": "2mH6hX5MQFqejH5D3VtyaHnGfwFi9DDnr9orEdHvDXudzCNneWxHLn2NNf5EHAYuApoULdz5ti56i4288phKCgEJ",
  "key5": "351m1Nnq9T6iWCk8niZw7o5uDah4f8314iAaazxoxaRYL778zTavpaNEQgU8m6Lame2jKvJ3rXcphxjrLV6um9EG",
  "key6": "5dNPoxCqBhf9FZJuQzZJ93iVvxHSTXAjRVN2TjN6TvcXfSZRpH2HhJ9FW4StdHGAkxW2aEYoJPAfDPWMgNcydkBt",
  "key7": "2bc1qYMiG4UgY5SUTVPNmEKzWSwKuWsPS9d22nEHGR3oeLnGBngAXQp45Wvo13ZHdK3jszjY1ymgPEjX1wJEXCVK",
  "key8": "41gqUQunrAHESZhkwiHkhYWHqCcfh5UhU8CjeRzAsdkCSgYZ1Gw6TMz7KYFLc9RVC599cp1eANMgcc2HviBxHVVv",
  "key9": "5ixBwY1uMoXyyb5QF8Hgjy1KgRWZagrk61J6CawznfqV5NLbcNYx147YfZKkgRztZduavXPB5kMfCA8MSnhWm9mX",
  "key10": "4ELVLkPLXSt7bHMM32BGyXg1vmmGhTE2XTFKLaRey3Z67NfzLvP45D94y1NG3QZ8vvt8gwE6SuSJKvQa87G3LhYT",
  "key11": "5Dn5vFmqeE72vUjW4FsNBaQdZxSdJFEJaBy4YuksPD4CJyvdTG5tVpzzZq758w6Fs1Njq79eSVvs2aQjzoQcspZi",
  "key12": "3JVUcEg7jniojrWfhXcsuX5tkY6NdWgsv2HMHxppnTnrnGXDque3dV5n4i5HNnk2Vz1nuqdWP2pxfiZoMESKFqTA",
  "key13": "ksUEJEraCQ5yv3mNyX39uv9s2oZEAEaEJtX54RMR2UrZ9RBqJJA4A59FZthUt5rNGi1XchRukiusfwgRjdLLdHp",
  "key14": "5rMufUb3W7C2H79XY5Eu33kH4Z6wk3HdSE6xeytGsJWsdCoAR14yw37D6Qvpspohp7SwJEzc4AXh9QF4aVTrwtbn",
  "key15": "3jb37yM6D2bLbUMgnYvZQ8ZYp2jntQXoJEPrKaahNVejFEMTst9jyKzJVrPbepR3kMGFr65XtroofM2gmNnKAG6h",
  "key16": "4wJQzxBc5cjeeqF5Mu8iRYZQyrtFotAfCXb2oUp38WP7vFoFccnJYUneqWFLuek4cppgr8cMpUfkorEwizsmsLQc",
  "key17": "5NDM3NxRGsBxn32MwaNGmqqB6SdAu1kV8Y8GvAKVQRzb5gNouYy5Q3QiqjsQEULUwDkKZjr7yhaw9Jt6wgY6f2Pu",
  "key18": "5FnYhwtjAYttGP16ACXS8eDHBfneF1bCg43BjecUnnADhF4C8ShLqMEFUY1bahyVHTYUkBMU3NGd2ZhfMkXJivyG",
  "key19": "4wR1qoWf5pUaei6zwx334Kqo2RGCDsP4omwj2Q5q8Cu9qSxDuo7pUc5YfJLaGkbJ7HQTayTJGcnYAgrzNqZKjBqe",
  "key20": "47XHD2mm4SChVckTGsdiLXHXEPo4Vn2KeY8D9511mQ6EcmBuHFKjcfp6WjJQwr4XVH86onM27tFcSfnei9R5GDK9",
  "key21": "tCJkp76HmS5e83Ks5cLA1q8cLtHtnmJRvHSqXP21zczszrENuem233seK9iDPsn9JpdRXZa3Gxnb8mFQb8r7onf",
  "key22": "4yBvFsnaSVLU7y7Q6Jnq8hjck7ff1AUxNViLbd2jpo4bPzRbPZDYPm7oDyodiVth5LLYYab5uC5DPa4tbpi9Gsjs",
  "key23": "3DZ9Fm4YacuGCcaxKaqWRW9xwbdPr25SNEMqDDpmLyWr9P37Ky8powESGsuzspPAarkC5bxpvXfFvroVsbzixt1c",
  "key24": "5AutRK6zLS25ukXvaPD6AU4Wt6ZyLzarnZ12hFTuoqBfStcJ2mnWZoQtGjki1tcyfXRS938oyaWKaQrj7cNL4dFb",
  "key25": "5v5xpx8T8SEYC4CbQCnibJzUVfJaNYZxCv2KhNQSazuPZsX3vbHJJVLPhX1RVYskoZiS9ocR2ptBRo1nyJqVyexu",
  "key26": "4w69YNkXbgfKG7QyDwLcPcuid8ffbD1aes6bCmLWNbEGsEqDKgTzS8tprLdCgPEUKh1yaFxvaoHA7eEuPHkQpAx6",
  "key27": "4ph8QvnGjySU66Fi1AeSA8pjqXAZ3zyLJYtcBB7JP2wUggi2ymVF8MEK43Dm4bq6WF3t5rpnAzrvvykc8YnEpJ3",
  "key28": "4JWP5TYCexVc1q9SPtQhbpiYvZdQEenC24ZBxRtEyfjJ3CU2oqHUtcNfJPtxqJ2hdkeMtakCFXD9vMazLacu2W4Q",
  "key29": "3jTDewej2nzyornQjy7TGFz9HsrgoK7U17PPq2GfX7zZyz9JgVd5xt57teJJEskLNZV8ytyqzRgzJ2qo95wu8GcE",
  "key30": "2qFxeBF5D8usjGDsoBiiL6QWfBNSoeWiHP1qm1bKhQbPs4hYLyL6DHSRMdFuMxwRGyQqxN5KudqBaWGby72LgxUW",
  "key31": "7mrD3d4PSq2z2MDvgmrnRuMtdE4WsGWAfPunpqJC7CLfjdT9R4RbWkwFfSdLCLboKLeameCebSExgMGnHvxQrpL",
  "key32": "4SJpL6PTHguvmweBHyjUHciuB3BcqUd883ooj582eK9N1xFA2rPbf6gv9UC3u6iJ1SGafUk5uz7GUBNkCHD5yAzJ"
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
