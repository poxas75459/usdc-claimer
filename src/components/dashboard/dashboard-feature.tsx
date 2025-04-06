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
    "2Kcsfj4i2MrRSSsw2xsJgeCadjeQTcYNZbN4AKm6dTVwL2TYCbgMjVHkRipn9nx4YoYQtTQS8NwFMmjL7JeeYWCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33R18176oyKdAm5LkMAGEs3n4vtei8SX68q3HNGRNkjWh8JmYcgWnE1GefLjVspZno2uMV7SLaG3XQhxL4EEV4Cb",
  "key1": "3CyLqnA74FEdyHxhvPzqFyfX8nBgGL2MW3KpStGCWPYo1AAPaYKepttm5hdejcoFVDnwL2bWQzA5brH1HLj4wbn9",
  "key2": "YkGZNN1Tz9tFCEwhMTXuvffVmrZHyGL222CM6E6k8iFxmaTL8xobD9nh1zQpDQpW3ES4ZCCor8GjAr3uMw7VPfx",
  "key3": "3UDqqy8pVhS6RqejiprPDdY5et3Gdw6VpGxwBMaJLNqUDMu8LupP2EAs5DhXz36seE47TqsxKsv5UWUo8m9PiVbF",
  "key4": "3DTa2e24kRmB2G2pXVhu2hjUAYPndkpbJRXaBjwHM4EEhbotbi4fwkw4hjWJuXVXXqJomfA61vKaJCo6vKScvCEL",
  "key5": "4yHyXLBUKoTfxAReLAW1MwZpimMBVJj2ZyPEUgAwRq9Yz1VxzR7fiCmvpnaeL3maC9j8fwCS5DFfoKLk8tGtn1T4",
  "key6": "44zaskfTSzJDVcPTpRaPsQKcCs8CrSYwdj2A1JtQtxjjLFai2HT3RyZLQ6Bz8j3HrFTEjiGv9t3twDWBTBW8MCK1",
  "key7": "3VJaMbVvGvSvKk9RQxvDpiR77t5Yks2vkghQU8E32BgxCCYUnaihEHhsyEdBzogDvTPvYAGci3nyiDADFcLUnQ2Y",
  "key8": "QzzQ6DnmxE9HpHmh1sGEPj5qR5tXDoC9eEpbTW9S5ow36LNFKu9EPtbLxjumEL1zt149TxxtmKvFWqJLjw8HePh",
  "key9": "4CBL3cNoKFxmTBBxrGZ9KR7uRaaKYRZsKaso1CuMdv6mQg3mokiu5FVbPXjUn1B3aUciJefv11gD23cC6uWyMQMP",
  "key10": "4tWdpDBSNBzE53k3qvGTTKe6c9rMhwaJdPUA8Qr6dPpRiWteqQfWA1ee6UUSE22SifXSauXLqjsWFJi7RKyZkGh9",
  "key11": "3RttAiYSU5A6dv64ejoJ2BuohFyLKjZGyiGHh6pf48oVaTmju2Uyef3WakKkB5SnXbosGbc7JRyj58dHyixSirLU",
  "key12": "5TDexr4EeZfcQPHp9MpBAz898dLVmYhgceMY8CZPpC4C42yCv9dhdr6C2GwpUS1TXgkis93h4n7FeigyMU2FWMXb",
  "key13": "38EohrTBp3w5NyMuNaazhnNsejt6xQZWLZsmEAoetWugXGZ4XCYQgxrbEvMY4szZq6qXHKBBk5HHgsbeB769Cgf2",
  "key14": "3Q7jg7Gfi8pqVSN1wy2bd6Kxu8i1RFuD6u5K7otDmMqZegTx7fx4VTFA7aoVxGeW2gvRJiSgTSCW3yMtTiUBSAtN",
  "key15": "4x9fxLu94KWDbBAcCNTVMa2GUa9A4BwtrZChBeYFhEbFkpQmH1gebNEHdqBcaqNW5bes6rgE3VvAjs9PBFqE1K3M",
  "key16": "2taz8daS2QK3bHYDqLF6sbmHF9CvNwsbbCtF5VX1XnHoCRE2QTs8nQi9QDzvpjyVUjEyCKNJeXSdQgVqgn2sYYcE",
  "key17": "5JUPAXMhFDE4jN9CXjoco1zvodLk7J92wtTbGYr7U6rg8eGoLCSWBbTeajTy2FKfM9JNFrbw35TMGgje2tZboAyp",
  "key18": "RBWGRf3pS4Yuw4J8e7MR3Y6xsxMfJc8e5ALE72fEPWL3tMeHsWYXFRvmAVQsMWXFsT2HeDprDMbsP3SKc3unaQQ",
  "key19": "2LVTVBUcavnGuQcHwFDSJajyzNXzBvsXhtGKZWi8XLnfnRVPkuXwDsJzN164xgnhmqgEdcmDtQdsvFov7jxPxrg5",
  "key20": "52oQ7gjT5Mf99oo5WsxapJAJ7DdmSktUnGG561zYH7kzw4gq7PB7TqLmTpxqZY2s3DdidjdsMWLSBotG41VCXkTj",
  "key21": "4mQgocqY9p8fLcZDa11TdnzyoQHRUSGDNM3FcLYNyG4QdA6UX5wBb3tbcQUxAnRxwwMwPAg9jTM4X1WiixYaQXJ8",
  "key22": "636w1yoqMHGUybvE1TjPFf3NshkGrda6aUeWff2hUNjc6QTQ1upZ8pTfaLVW5TSyy6csuHDp4nH867TgeXAuPYpM",
  "key23": "vTe8DRsytum8Aepa2BMitU3yHVGWiuaUoJPAX72ynzeeUz1fSYoSqheUy1L2tDbtKyW97HwVCGQby8LNcxCofMy",
  "key24": "32BmovDJcb3KaKsJ95bNPZMfJigMWrAHgxB1HhG7ShYC4bGKrr8C5kzjdVXze5xtvkQVVrk9xdonvDPeZRnv6DSx",
  "key25": "5jdqwULzWG2GeaeCjb7xP88H3pYdYkEEEmhwNnTe18a5uyoQbtevUw58JddjC5PKkUGqKguvPFGMqcfeua75q25b",
  "key26": "4QEDQ9NXwwkSXKKhkprzngmbUhaiwnZGpcfC3gDZQ4Bs7FbizDzvpNUFUHbXt5HrarfR9wiPkxnqB2GbpzznAjqM",
  "key27": "ZrCTQnqAnbsFQ66Jtae4BZREMNofVM4mAmMUNYnZ6LY1ms8sa8wP8mzLjGSg6XTCPt7FPwT6BuZYVKiJQ4FVmvd",
  "key28": "5omCLfFmHQC9rUGnX8D3mMPY5Gxax94ZK9GDASMb4snWxpTWCk67BgbR7tBJ6qq428NqfstY1GsUtkfEXvA6CkdY",
  "key29": "3mBVjRHM6TH3vGMPhtbF6EdWY6A7k1PLJqwwuug2nA6ZpF39JpM1gtrYVfcijwmEbMXP8eikwATLCu28BHaF2ccJ",
  "key30": "4aciTE2WywqfuQF81iLTXP2b7rL3gZvzGpPNeP1SGxcdDGoFhpjtUdA6azxHjRPX6gzr2qGVsYfG5WJmzHXthiWd",
  "key31": "2v1MCE6gFrEbeRg2XMcUvJaRbCNQRxMwYZT24G6v7WUNRRbcAWVq5nCUsbS99UPLcjctkwshqg6ESxUStmEdq7cA",
  "key32": "4Vio5rrxHJmzp6qDsekRrTFMWRjxGH2uDEcSNSpvoD2y7WZR2Mi42F9FE7KpYCL3xL4WQPTTZzqaFoUAHYswwy1E",
  "key33": "5UTnoYUERNrRSwaMneiwd4PERRTqA2H7UKTmo3Sfqw7ZxyqbbWmVYUKpxFrX8MdH2XeWaDehiR84kAySCrobgvVQ",
  "key34": "2XM2m9719Dru3EZNWVGEWU4hmkvJufYD3EJVPzZUxnttBVJMDFpVCPC5oxEdL6MTLBjUUC8UZaKzKuqo74yGZxJv",
  "key35": "tcD26EUtje6iCdE7S1W6jmCkaee6rfjK9EZyyTpMQU81otGeWwL3b7yB2BipSQhitidQGeekwQ18p4V4uEMfN12",
  "key36": "4J3ZoMCWFaqdabbvsMriGW5rzkLoiLRVU8nz5NoVZdGMRr1NGnSbr3wRAXtw4pDr52Y6PyUwHnAksqm9EDaTpsmK"
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
