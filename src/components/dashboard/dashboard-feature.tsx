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
    "4q5MifzxGwCvFxzXeTwYqmvoVABjx99sX5CZ7LHKdssroGwoT4SxPR9414yrN3HrpwZMcdze2D1QpxFCrX77hPMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rqpPCpMHL5wezjDHopDZLEcefaofoMafq93FuUwnHJsMx9DYaEFFQrJQbEHQg5ni1th1ScoSnxaooumHo81ExE2",
  "key1": "2btwPskoRDWLS99nDVZAv5xAYZtjAF4tG8Lfte7WYp2LRSu2v7nWmVe3PVtP66iQN6mqQ4wExKd4GDZ3WR2k6KGi",
  "key2": "3cUAoBY7hRUVB8cfMJuwHdkMZPyMwWHn1qnwioiWFLCaScA7u6xvjE2iKY6wLgkLkKTBrqdQ2wPTFTf6HfxuGE94",
  "key3": "4veURtKQAqBBEArMaoUjikuQTYQzRMYLA7XuYRw7yAxGUpts4fdKHipBVU82sHSYPd4aURxXVAyXAvoCMiqQpep3",
  "key4": "54Tr2drYAVKtzn5MkhMS5X58sb9CJuzA7zDhqjEKiQQ4kAybJVLQd1gP72wGfDGudELnW7junMJUgycXFHVqqCbP",
  "key5": "5EWXaezoTkhx3FHGYw1CPyk3NfBNsL6Ldi9GDiUq4uJH7Rq3nZb3FJqcMsokqLcx6GxoBb2wsp8KwKRNhTGLDsqC",
  "key6": "2ZQHMzvCoJB2pKbWNCP2wuiSxD16MVLf2rEGnZpaWyZxUn6mGVLCi4YTVvTMyaJVpC1W1GfDWfc5whF3PbpdZ6b5",
  "key7": "4Scn7KeJeeMrRTaU3wL41pTJ6X9HvwgbxZiovzKeJGrPVKVsgeM4taJW2JK4BcQuuyGskEin6Dhde8sMXzbegFmR",
  "key8": "3apy3vnUufpw4SueYB6w5Q3NJ2ZZaQogwxnsTHk7sAYpbwbNa8mDuF2kut9SJqxcUJ5L1ZbBPSSKthdnXsDn5jzU",
  "key9": "57epdthFGf237e4xcWdwfB33wKypT1Tgq3NQ9qg2pdurBpLDfDq5Arvo52iDSWcMFurq7HTw7bS3DA8iQjLeUzDr",
  "key10": "19GGuNt4J2J2aaVLzWZBW1k4xLZ5fSqoxkUAmfAkYa434QXzqFBorbExNAK3biWuUJbw2tWkT2JWuSE3E8ffRGu",
  "key11": "4ypR8Xbx6wCAQB4Xw2qmv6a3q4XDxiHWH7CSmhDeaAng8HUQAGW5kNGjk21gGRwikmueQeZSN8WMa3YbJNRJXWkK",
  "key12": "8cAXCHiMLRoM3xCaZ16oSvWTJCRvfeKw3NrSKzkVti7WAUStdQmBXF4UkfJgxmk3CVe4EioYu5amVBN9Vjd7wXC",
  "key13": "5QMwN64swfs2T5vWUfACHLTjJw54JrWX6LddfsyvLgUiXAinXZDQ9SJ86PqyBsTeUdfLVtf4sS9cS8hGBq96MqVz",
  "key14": "4TJt1yJ3disso7xV5u1wPcFPEYLV3QWu4TmCKVKPGnckqNTChY4VZGH7Gd1Jcm3xmYkQsGuQ6PFVKBPv4z2qwSqn",
  "key15": "449ykecvLfcuipVHBY4udArF5pkEV9zFmnt9VdWA3TPZhZVqnrHBDR6KLpgAKv4hhJFK4HvfCUjJnTKGEfDfSc51",
  "key16": "5aR5K85YWxMdLqopNDHDvtHXQmrRbgXddX89yKsfv1bPEkwoA6yCzijKA7wqbMPvu8k3stoPijpefcNNSupmToSZ",
  "key17": "54oaxn6cUbG3t77csaNsS87wy8YuWYdHRXwMRMJueumurkkTaxHG4e6a7scaTipVZ5XpWpatYxhy4iJBGHTBv99w",
  "key18": "466BuJPkuSwFqCXNAfzg33xcupYm7ZxprzZVWtw4UPAQCB6G6JLUi41WH5HBrM51JUZL3ssUdvKE27VqfyvTVBU7",
  "key19": "jNNV8iwoqig8oTesaKNVx892sgABZJL3eUV28tLYqxoJiZY1BH7MsWCJ3MjDY8JhCT4MyTcTEta9ZknajyELeJB",
  "key20": "4dEaHnGHTixTxApKZFfz2VgKpHEKBBriB9UNk9g5uyc2LNf6GYcRVbHLXPfNgj9UCBK8r393cbfYQv8qbQfQtv5G",
  "key21": "5u3Se72jJN8gPwA6B3ctTb9xoBFQTwabKAXesMHCh4rYUdnX7BnepYGaTZuS4jQQtyquugwvRVFzUJGVdeYNic46",
  "key22": "42KdumjLKZRroVGVD9Uw9JHkMCytn8qtHeqUTeNsZ74T5qJ3YbRv6U8sjuh8JscanCv2NkfXnceXSHwwAup9Yhip",
  "key23": "4TAb6UtduC3cTAxc2U6hsAEEZLxPgcpyZMUSudTHT781yyXtz3iBKvy8K8EeujfFRxoHas67Z6bq1o1FYE5WhANH",
  "key24": "KgMLAtzf2Ak88nvJ98aWzuTFQaddMSA7fxEZH4uGViYpQ2xrYAu2Rt5Lvv37438sZeWPV1ACKmFQLQ7vGWxyrXM",
  "key25": "3nUWxohJ6d7gr43Uib7YfMRuH2iNGJjJR2S8m3JSVH9q19CaccJxW7Ucj5anqKAwNWz7a9pHstSmXScWFSuQPYmR",
  "key26": "67TLQEYkc15zmRiim1PT8LYqRxwR2mu7gDq4uez9BUPekMJZDg4dEs8jfiLKMnSVr5aSySxkcYXUG8B26acEVsgs",
  "key27": "2MyAHBv3A8BociwzZzY5EEt5fZLNUkGasNxkLVCPGtYNvcUkekSpqq3pKBJpsgnxyKAi7t4ytv2uJ8YNtU5rT1HB",
  "key28": "37sAbuYjf9y9VtH63sXSmxj8NX7728k5abvvq4iMbvREeHMw6m19c7jHmnA9pHdGFm3Sw43TwFUtSAAuRqWXKpeX",
  "key29": "4KfxeYimenaH96hq8MXjqQL7nvCaZCwWCZ34d4PFycccc3sqbErDHDsMszxtKb4Kr1Cw8nANNxeHCZr4X4bxKmj",
  "key30": "2ednGMrmtZ9p7swrqE1JxtYGKyZFVje3eytrBDLy2kGaHidpKR5hecTJjS2fzesPNAhHyUrX9gWTBH3iJoDWz5FZ",
  "key31": "2oqDtFg4Enat1YFKsCYwqJ8PG37tphtcyUcEhssADeoeVT5WKYZ6CyNDmphCSZoVsQ1YXQHEi5zBY3E751hmxuba",
  "key32": "2Jhim5cmNxtSRHymmf8r8hqU9fH7qusnhTyqY7Qq23ESNXsmeWkPpTrXQroQFWtVyeVcPteV8Tw5NcNiPrGzxmyF",
  "key33": "moQKk2BsGbbaySHnkkNHFH9qijZhEyEKwbZCukLeeVDdCtCFgxtYGo33WWtooWVDa9MGDvHUNAZ7xfQwmk7Evn1",
  "key34": "549Rb5wUTtM3oJw6eZyT6YJw23JyqRrgZ77146pFuRdg6L5kPANuMcWvChQaF3jvTu34Wuh9SbrYfzTZMJhEhLFy",
  "key35": "4Hr7ZtTdChChkBgd3MLKhJsPrjxVdTD8xRGYHwq8gcw8nMprU6jDPEXq7aLatnmexXRQwAigJmVNpNo2ebsd5K5g",
  "key36": "JNdBGqS7KbwNLeNKgMb9PDNtUbxKwY8WXzmT4AxDFmDve7Q3Jg8chwMEHJy3j5CDWPb2XEQqnM1tWxN4tNo4uzL",
  "key37": "jVeFTALAoGwieyC71tT8GshwYZWr7Sj9jb7hhNtLjV74MMUDxaSDARRnw9GGjKNP4GLNtywqsdH94RQHwrs8LCV",
  "key38": "5Yc4MpPmxe7xELAyJZrNuQEkhgDHXJzN54s3vyPmg5MnS3DfSKAzkn39pCuxQe6ZAfYvUqnN9Lxe1EjN7PDtajsH",
  "key39": "2fQa1HJisWSf1tF2gAHreErFZGoWUbrrfacpCuZz9xbTRhZZ833gB7z1iWDLaC7fZv5vAeu9iVGU7KerASjPWF2u",
  "key40": "4iNKT8XAFGny9uRRViTb2niBKmQgkVJpaEL7WLWH638xy5YiSe1ug14Y63KQD52ehHWg8tXwFrTnDqv1ku5PAH9x",
  "key41": "5rDQ3xHucWNWosij1V2ZoRGA4qBmAWGE2Z7LaerWKB7MWfdb14fT94h73QcqhWRQxdU7gLLuPKfBuspCp4MbSaLc",
  "key42": "CYzz1avPc1PoD4kqe7XdffXBo2DM48YT1VSxBgj8sfSR8j5dZPxZmuMsKbPGCYGSSYZmFcVPBokN3qJQd8ZapUF",
  "key43": "5CMsVmi55sRznsvsNvgfqrQUz6S4iquk6jPZTzMECu5Mm5qVNca67qK5wYetL1zka8xBR3m16JGV8Z53rkBfyvSe"
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
