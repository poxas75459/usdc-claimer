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
    "44a5AGdoUrFLDGeLh9uVSsvrTQ4GN5g1AD5oPe11KD8kDF49SpzNjMJtMZAhTEhhCcW4PFp4YXstWveEoTYGwnQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uGVXNmhMic456PxYvnKrPhYsWBRpWUxqc8f8QgB8HAE8dzvkevZuMLy1SRVCHSa62pyDLLANuRiExfdG27HpaLb",
  "key1": "4BsL2avPiURgSjsLX93pds7cRARRL8LLAcZ31qAa4FbnoyK7JeSyxFBKxWeJ2vPYxEAgPAedUdYHUBuRWKKqzzXd",
  "key2": "5UyrntDmRaci7w68t1xXMDMD6KqsTqFkL89FGU72A6oy7oMzFFLACWMkenPehiWPE9HhHXvvrvnJhprdYWmcqw96",
  "key3": "2Z9cKs2naWBYdA311Pv6Dn4txieDbHCokeG49MKSpCLhCmbMycodn2E4GoqjQufD9Gj2M76o9mbFSjN5Y9rjXj6v",
  "key4": "59CV6XFEXK9t24jKRMXJVmms39vQMCCB5bmSmnjjVQ4grTEs7zn6Y8ZNqMvWsp7gvKFstLM6hktahmZTntj8fese",
  "key5": "51NDJWJ8ALvXBvPB7MdZTi56LfgjgUhgXiy5GZfkPCv579PT4ic5WAWccd3U7asUF5qGbf1tf8zM15hG5FtZHB9t",
  "key6": "5th7ySetEkLY662Zp5Xto2MRuS6yhat5LSzPZWxpXmRLmtDK7nHRf95uTa6QTWN3cR6EvEwJZ9NBKMjpa81aEYvs",
  "key7": "47PVGEP6BWZUzup5uZSZeDdjEaNki3VYbQ7sGfcsj1U3f35ZU1X8oXSQJuY414svPHFknmwT4eB2bEmSJ4e6YL5F",
  "key8": "XFCGz6oQwB6d498yNApp1tYJUFRwctRn96AryUDKynhPa17Ce25JkarwWGsWpdCvPzq8qMjrtLutWAEYzKbQTea",
  "key9": "329VGwapZPheVjwjG511QfdwJJ8MJ7F93TBgJuhCUR9XE1KxD9VHoxHocyfEqSsypmLGbk9ZC7vyPFdR6Q7hr6Zj",
  "key10": "YWudqbv2xT2imi2LTbqrP99UKd6TbQPSJv9Tz9vZwQvNVXPgd6jyG9EMVfizPx4TJfJmqRQe9Dh8aC6bLJXC9Uu",
  "key11": "5ffFkdswfKx9XkUhCNXiWskRVnFPYstBxUdG9cYceSZKrMV5gbmm8L3dTY2fh2kwBVXkV4z4nMSKSZ3qAouY2jBq",
  "key12": "46pD1nJkNWJzbhJhtoEY9Ltmj3NRZjUkCTJ6E6HHKfGqiDbWxsEkir4RF2qxgbwCuUeEFJ9m1r6JQX3VJ1gK9X78",
  "key13": "45KWxU8BLiK8X16F2Q6ujFqx7nQx5spDy1KeHyNo7eLuSfvnMEmmppWrBt3CPy5dj7Be4yYLSLJL86JoEYW2pLKk",
  "key14": "5TwvzDd8DEfne7uz2FjYXbtSYXVGQSLvZWayZM8Apyy5tjV8aqLyGkbqSgPSRnPjmGM5ftR3fetRMUw6SDcqaMKP",
  "key15": "54PuE91fgwkCMJhfMNMDLjLNGUXDGTRn4eJvK8V3ckwfzLHEsYty4AFwsJVToLSyP8zhg5G6DUEn7xtXQEpDKV2J",
  "key16": "dKA16LDKTLjufEpeMFA84mirBjuQsEa14Cky7HCAUybkFPJq4GY7XBcAJehF6HeShtxcjNuZTYq5wTJnrc3XdnV",
  "key17": "41ptFurHNJfED5xMvqjUj17L19bairoxETA79vtZRQMiaVFwN6FErWRZG9JNYzvpsWp9cuwJSSF7VarYVpjWf7t",
  "key18": "2wCJv2Fq59uFGRxFFiY36dXZepXCHJ2iQwzpwNUPHEpvF7DqmaK59BbkJrLvnmyjok2ycA6hGcz5GatYKG8fVPtA",
  "key19": "4dAts3JrTG61wQyTL6htFoBSynhhMNJvNghkqtZvEMoHaALREFdPj9EBEB5J7zdetbEH6wru7r5By78ddyuYfSmg",
  "key20": "3SvveQy7Xc1Gk7KaMwZU8tu8VrTjXsELTeKu3eN8Y92xJTvWjVxhVrsLJF6pE7debBnUCPHTHTK5Xrbn8b8AVeS",
  "key21": "wfXgEmU6xCRtNWXuSPsA8qBo5N87YQHnQxXbbjLLg8wELj2Fu6nb1tZe5cBLACFb4q2w9aVQ5bueBmeSWs7PjpF",
  "key22": "2qrcgLVwztPLPYxrQm6uFsw83wkGYsUdM9nFyTeBkoNst45iTcFRKEVLFLpqXrqSifKZcCV1Uxv7zbZ4KGWmLrV8",
  "key23": "3JZrjxaT7hzHPjEwJAr3gi67cuYJTjehtfrfYFwjFjcGHqbXCcE41zai2aA4Z5PT3o4JrSrLUEufNA5d1PsKRAiZ",
  "key24": "5KjSHMnXK352GbTrNe4JJefz1dpcYQN3cutmk37BRBfCHvG39q9oTtTS19s8jTwr3PLbZpcziXcqyf4oXPyzW3zC",
  "key25": "65Vz9m99Brr7KQ4kxi13q1QuBBG21ywULkQthNmye9nCQG4mcC2MYub3rBtHhqNgASviK6ooWEHGmArbq8HBaSyQ",
  "key26": "5AZqqG6AqUKBGWoDgFxUAM2Vh7x74x8UfwZcFZW7zm1cmg8ErMsVbVGAdEUxCZauuq6ufinjcYst1BEwJHiiJYW3",
  "key27": "nRPBJagtgkjstYgNLxg3D4F28r6qn8ZpRPhHYCXkmkv7PmvbepxdxaxCGyrHkTBJBXJRUYmd31HxKnDoLxrf3BT",
  "key28": "VC9c71DXT4UXpeRqZi4WgRtfMaEZrduw3R3tC7qGHG9fHKpH1sVqWZp3NBepADZwRvvhCW9BgvQcPgfKwzKam3t",
  "key29": "2p92924NDQLRqFgthW9jdy15XWersmK1ghtwTk8nrmzuv7x4LTCfSDQsxQtMaB6Pn9RwcfY7QvmJvNGap7sKhSDb",
  "key30": "4urKMUw7DJNwwHDV7BAoLiSi1d2evhHgRRzo7kxgrwUiEhCuRG2m9e1GV8bz3wdckAZvaZ8FbS83JqEzHVZ8piP1",
  "key31": "5BvntThnHZMLLT3CLjhXmvegT1hYobuYiB1ZN2h1yy8EdSZfeLW88rqgms3oRFwj8fFnhcpmGife8fuwf2ss9ykD",
  "key32": "TyfpDWtJBeafKxDT2wq9a5yDDvtzUtBEtTRZHU9n1HpmucbimS3Vkx1jaG9SppLRLYa3dRszGxiC7et5m1bgKSd",
  "key33": "4Jgsw35UbiJrLPtsChwBGRWDKKuby43vGGGoMEjSEzBcitD7NjjUGkbzRmDGvUmXGr1jM1JyrSNEvp4YHDrjd3Vk",
  "key34": "5MbX2XMZkTpfrjYDiCCZse8RUzoLbmof5mKWYvQwGLXYwjWTDASRHT9FziRje5kVS97MYZ9bjC94FyD5eJM3ac3P",
  "key35": "3cbFLqZBZLpwmBrCXizkVggVPomAMWkeBerKvoGC5zVV6xHrGuws6V1t32cFv3aEGRt9BDeaVB4JvvPQ7ZfCR4tK",
  "key36": "66imfcNSdNQDTQWyN6tbXbMaTubLoyi8ujvtZ6vbEgeqrgFGdJAKHxekEn1SCCL8yB7EuCkPgU9uB7MK9JDhbpC",
  "key37": "2mPSeuEZi8ftxvWgocdD4dM8ogtnQmiTe2Dve48mbpxcXWrmxwPkQAHjSoorLqMsZUw8n3aK9mm9jShcxHXqFt1S",
  "key38": "5aMmRskwhfaYqzNVyA2PNSw8221oDx7AbjbEDVVYckgBetdfygBCkk4wuXiUjCiC5JXSyeKxjicL38ocPjtkvwqW",
  "key39": "2XMBfoxpxhxnX5aSTMQieGUFzpHFPFHazLLiXGLPSVggEZjncHRSGaESjF2yx9W1p7MGzHRF6dBX2R4bnAPW2BL9",
  "key40": "35bPsPviKNsept1WYaTTZ9GV8iwkKmGwhZXEkyHqFNiQsDN6RKq16AwUyyMddRhnf1RmE9KfYp6nXkFCBgTNFYRA",
  "key41": "3ScTjmaERURbKShtcEtiPv8YXFeGdWJCWaAr62LoFmjGAsZ72PvxrH5vHwMKLZCkzSNoHSNozgpxocXHqiQxsCzB",
  "key42": "4n3zfmVLawjAp32refJXkMtJreQ9Wsq5d3dJm1jhwkVZ2nXm9bxepp9EGMGYYDLGCpq4wCteUmWsYBzPpVBGUJHS",
  "key43": "4brvXRjWdewepFV7Mucn6upP3mMbTzJGVMcMMW7gwKUEkc6wNcnBzztqWEgcdRxiTq9PRub6vMGB1YxNj6wHX78v"
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
