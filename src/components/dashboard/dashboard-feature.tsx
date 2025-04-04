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
    "5Z58HtTDJoGnG4eMJrSK32qeFdLfRpUh9K6z3rrofzEHaVuQoSLvDdfq86v4mfz59zSZkNDugvXhNDHKK4g8NCfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PabxahcZr39pdP9hmF8dupNvNwDqAXDchr9n11qpahtLop5QSgrUepadVMiezqMMCzqPvNNghT1eWPRb8Xro27Z",
  "key1": "2BohguxKLktxmgLe8sm2kESamNciwFznZu8jVLJ1STAD8XBVHmmq1TvJPPcuSTrQksFqZepucaJnERMy9CBQ1ae1",
  "key2": "4sHCtvnb15X62xEzCwb39RcTUWRnftizMFrjhSdooHwdVDLGwP4XEcq9113swY8cDLoaNhb6BdeF9UJbVy5jrQxq",
  "key3": "2xGZguL47D4zfY4TDTx53htxHBSewGGRYvC4GWvEHdAk7D5hxv4zwYg6M43XGpFVTHAf9m3L9t4JnwSkp4cbvKCk",
  "key4": "4rwCZsWMhPgT4sMmeS7wETfYTz3u8xqoevoTu32pNX24UDXL76GQbgv4Tr7bvUtp1auwowYcBrt5YT3cRZxJyYGg",
  "key5": "4ziDTUER54kwVcsB4zzyH12KVwivY78nmVPDm4Mb3TeVoKbgjqPvsDd2hx2XvNV2ahDdURSHyxFCrXzZC4He1ux3",
  "key6": "2Gaue8BG2pFstGMDfnRQaEq7UNy3mK64BwUCvEQanJBQyjhNG3WZtmUcNjwU1M592DUymz7thwkgE7peLrjWK8Cm",
  "key7": "2eWT9inN6oa1fVPSrP1796Jwi1ZCpmn6FyZ8WFQRPdsZnTiMrAKF7Src8PJKbhRCHJxPaopb61JLky5pLs53HByF",
  "key8": "emkaQb72vEQ2UgFDQ9TXVgYtX34WhSRg3VsQPipJVh1XhftEThEUCu6U4jVExHvroDER77rHfFGhA9b5bMxwE4J",
  "key9": "5FPGPFQd4vy1Pj1mz9wj9axuVdJqwpzzdfAofB3V5nRRkUexbRoBMna8nEob3Jd5KkBYUbHfeA38qYXiw4kPZHpH",
  "key10": "2wcrED4FjpofJGfQFxCzbJr5ym3LPJNmnovmRg2mtSD8J8x8L3J1cvUnmAMHTuFoCrba8PxTBkkpoChaTByqjZ4y",
  "key11": "459dU6Ymv4ax2HujpTKeWPx1VEN42U5AVDU48rNmSn23Eadz7uydHVhasbo6Q2jtv33TZCNQgEHYKj87tZ2Vvm4y",
  "key12": "27w6WFG9w2rsAH41qPYQwEBjBbjm8FJjHqokVRXPripcLu681mXbZJDkafFRVkxeyV5VaTvC4R3cuEBBfSWYLZck",
  "key13": "5dtKZac5PC3uE8PHtBkxTcy1y4ofRfVXSqWQvicdFw6JdGR1nYDo27ZWyNSZBQ9dnfb11sixMKFfR5usa4UDTbpM",
  "key14": "4z8i2vEBVVLaNwWJ8cmJ8C61pLz96PVVDWwCzN2BozVtpEAURos3k7TNSdHaXkDD3W4f8CBeP69B1b9oAffLKq34",
  "key15": "4sLoR1SfQraHtvw44d6fiwUZT7Cof4fDMGWzs1PuW64e5seCXmBiEkXk7YecKupQ981ghcDya7oopiG5L2UjKVb2",
  "key16": "5sm5qXiE8SLRmdRBrBJWiPQxcoSsGmNaS4iJdiqYPrcXssMNedmtER5bqTjBxHokCZRP7e3Wo8ccDpVZTGv2TcRt",
  "key17": "24cPRQ5Rbv4CvtXeiMxsbqyrThFgKNEA4zNkQVL1xJwczjYidCo2YhHJN22UcVapkwHtupGFfokUmGCyoEWvqeU2",
  "key18": "5zECwpDPuBRJC9hEDDbWRKBtMGQr38ANcKrEFDMWFGJjzTJQ2utyGbqJCPRaqCm6FMFX3EBfoMvPTQptFPniZqTt",
  "key19": "3ZUEqAn1S2MFqxLXNqx15vitdQTbRDyXSWUeWshDtrbr8DBWQLvqCUfabSSxTagRn5APd1uC66199EchUKYTC4J5",
  "key20": "5ap6z9SX1RfZKYaphRe6EpiWg6jLC1HDZdsPE3ea6uKL2VTLXGXjwGwrX5RMtoRHMYwA4BCA7SQGyYhBK6AyqAr3",
  "key21": "2Tjeh4Numiu5QarrsXS82rjpmZVKQ1k1LcpUtDpQUqB7CbAzuJDZWwNvHEGfsNDdiTVNUi4SitF4U7XaY9Nncg5Q",
  "key22": "2XGbMxJefFhthMCk3GQ5EBKoSk9ycfCijLb82z4i7RUen6FWnm7GbMHYgxezX54DPefFyLiz6qJpVkVb9KCJRAiw",
  "key23": "54C7dp2vNYboR8HgTaeFCMbZ9djxoSd3jzdaLAbG3zkTKF32JKQXRq5vrUDGmyHdJNsLFQQtcCbfHyqjNCtEi3oT",
  "key24": "2DqrfzNyxpEMXCDaNVhZteT16CPse1styT9eeMBU4NstLGsKEo8TPCdqQDypTDWxnHjGwDruNPmPBcwoMh8akxiF",
  "key25": "4SEWzrUJ2giN5hbnQ451Q5CcjbVhzkMjyP9vc14svTXxx6iAnzKBGekiDDqeEKWmfuocrGvsWVnENZ6rbPXd2Xhk",
  "key26": "5hoRUNx3TyfEmRYupHacdxHwMSo41vidzYPazNVdvPRa7iLUsHt3Pxsju5nVi163aZ4kdseDf2tZbVRxhEuMNktW",
  "key27": "2XfomcjCSH4ZfmWtvzH3JrpYXyNnf9pV87wGwSvMdXKNA7ktA7rEepahsmJsEYUjajW7C3TvkQwrCfgsAEEuEK33",
  "key28": "5MxEYJXpMhQyBNjjZXHdQH3UGFSUT3gdD67NG8FAzNbegpzvSbYSvmu2U9BpUxYonJLvLWZn9RoSPPuL4mgW6Eba",
  "key29": "56FHMikaVHYJXYGqGb49kgPpyVQbhdzUSvPTzwPpqnnZPFYwdyGTE3byUDNFtDw74VbjabtAHKzxVG1eKum5U5v2",
  "key30": "52ZRKaW42x5Syco3LA56q174VBkEcyBJH8eeVvZi9AmcoWZXWS6RZ2psntohE2vgwa7BYR9yvn7YFSTm8eQ1yBZT",
  "key31": "rLgqitJNttDJXFkiEFyuP3KmWh2976xEEf39ExZaNaKtkPjJwbQixfxPBgoaPMrqmQR9NKsZvTmsPUYCEKMuW34",
  "key32": "5YdSEVUGTYFfViivgUGtU6qFXJyGfAx4XZgG7jdhCNHmPnskyd6PrU2XQe7hQ8vCAUKFQ6haqnibLbvwbEWRzUFN"
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
