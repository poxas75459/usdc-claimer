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
    "5yWU3AYTKRyVo81mJwUkomiC4AcZDMpMFkcPTdnsqAzgtzxE8nAxo1LmJ8XkBEfpbMAYhy2rbiLttz3YnBm1BJcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XdS9en8iXnR4FC6J6oc7QT4H4RRYGD5Gws9S3CXQm2ASoiryWaLtnMnM7EgsHetipECWPnncnopKWeSiFrEqf2",
  "key1": "3TmW7Ch3R9HUoRLYg6aFAVxSegkcVLZJWtQS9Kf9rMpbNvZspaDgHH9Jdt43q8STrRXZRk54icCznGrkzfArnYmM",
  "key2": "4fMMGvrV5eaWHVop39qPpBbP3bE7BzMLuoRrkKGY2EeVah6sJn2NJfm3hZp2feX5CidvJbhZTQKvruGy2u7Cdy4R",
  "key3": "2TrxBuKtQmLQGr9VoLUFGijFB3iHzxFoto3XQgCQqFu8Lwk9fL6mW6WXJNAuPBczJM3FLGWe5GMK7frkiYiTqmck",
  "key4": "3MftiPiRrgZzB4eoFQhWSJ7bmDggvaV4zNjinxP3HyVAVPkUbeprVPBF4yeqXhAGTk4XdzPFDa8MrnYah7T6hnQ6",
  "key5": "24b4Ki43Vtzikz8ZjACZFno7sS8cmkVvaXgGw9dJXus4VoX2i5MPjdsVPEvrK8z7iBEbWjh3oGFTFsK2sduvEzdN",
  "key6": "4H8fGjPWJzpRuknhi73RFvXXbq5qFW49ix4VCHJhQbbjvMRdb3TjhPQLgPT2Jk4a79knf7JCv6tq2uw9iATEkKF7",
  "key7": "vPau4ccDPT5QZ2nuqAnZHFWbxtRaZ7uaGj82e56bs6z8FMWWLTEZsVC7ByNyqpjhjHkipfXCgZCYMT3covninKA",
  "key8": "5ANNsCQq35YC54Vx8sZpHnRCbWVqQ7qq1eUCCAeRKZRrASqf56fRALcyDeTqzxGfTbijYP4H6wMUD47ZDhveneqZ",
  "key9": "64q7u7AmEVUPYRHDr3kApy3skM7eZ6KCFrgifxcv1PqpAdaAyc3AYJZzrAUDif6fG9RBGpks115oTg38GqiXWm5x",
  "key10": "5qVvWj7t6JG9LSj1B7ptLxNpB3UpPDjaQy925EunNeVczxyAVvFBCLE4DEjXgJvBapJPc3C1sBrwcfPokT6rPHZX",
  "key11": "Jqn2dJeG2hCPeKCukxaWWp5XgLfrQ1ofrEvum15uPpwuWbi1dYrMmfr2vW5jY9dvL2Fwuaz1qsTVjewxZmceiHs",
  "key12": "3Hfp9K2XvrjM63m2edwbe8rgdvtsB3kgc8pVA1V1nRxyGrUxHBcrte26eGbUTiGiFZUELUnGzf7vq1x3YJpcwqFf",
  "key13": "4SmdasyWanXWdrR6ovDTCaSAQ4FMrc2dh9FY6Z4XJ1gP1i9usaPNgTrjfb54mLaCqVZoBFMfh8HDsJXcnKqM4pa5",
  "key14": "2p7M1UR16wo4LbkqUH7XXnoQZT31eq5988U1hB5CFSNfihCTqx8WfEusgsfFkhpHxATgR7smMBRniLfRVN64bCN2",
  "key15": "3tvxUT2CKWLx79DpoX6DLFoxVcYpDF9pExp33ZGiwFzN8N2JrB12kkFWSBmZ96ro79NqwHt6T4e8BVVmkJqK71JZ",
  "key16": "2tn3phhMGWrKCq4HrfVokAHqtZxiehtoHUGM6n21zewEUtaoej1773WkdFZHVuxgy56MgKqK2kgTqxsgK5kCAFi3",
  "key17": "m5TNt3urpJj5cE2NBsCkKNpcvBBWnFN6qiNfbc1Nc8akdJJGCspuhXuDFoa3LSYDE7CzMyX3E1P9MRVrfwK3X8Y",
  "key18": "2o2yr5B6eKb17Rowm7w6c3sXVy2F6w55E4fyV5LP6FUSk8Lsz6GLKQjXzpqhs2pR7NcCyDDrnLSuTTUBWrsK2Lm6",
  "key19": "5cFggtzd8DKHPz3WYYcJJhK8EY9aVBgqdfot1KfQB9hXTPwPrBHeZjjNsipgsSqeB9KEtufCEDSgyTj2dv77B4TR",
  "key20": "3Q9NmCKtF3bM4SSwnqsx7pqYLRGB85qhCnwEyJN8d8CUoWbm8xbTrexK55UJx1YaX4toCh2AF2k6wBsZ19R5YhHB",
  "key21": "2pkbz5aD88Nn2UkY8Mm3z5mjS2oWQHJtvJAh3ejAfpAscv35V65ZHktufZjGU4UF4EMXmSYWjdUi2g3LSfZ27php",
  "key22": "cBd3KHoi6fX3834mgp5pocqBbWG6kv2Ji7MwN9GRN26DEu4qRpCBZmMRA17baEBq6BtkFPFqHFxXney8PRMdtBp",
  "key23": "3PQUDy6rAoMb6a2hmyGMNHXTw2Y1u1wj3mHE8kgiZug1bvowEestuSxf234tm9N5uVzBQ2RwG3mAJHt6CkDhoFdU",
  "key24": "2bbNe7v96AyqiqLZ4qzX5mz8pdv9xwh6RCCtwb7bTt6ECEdeT6Ber8sE5Zs2cSwafTk8i3rvuHzzBthGnMqk6m9Y",
  "key25": "5iUBdzihD39VY7Z6fDgjjCBWLQtYCRAGoXLGTMb8keZshmutHhU79Fp8Ms5UaKPiYyuXCGpPcPwH6EEJ9Yt2ahX9",
  "key26": "R8kSnkybYbHMNYtSny1FXPhRTGxcDVf7tinxqP3TNEUePFdZyryBodyitNjpCmoGiBRB2p5sLgqzBxz1gJQgtwh",
  "key27": "3jqqBfasgTF5v3nM2sZXFavbpdxdEfGpc9PSaDgazfWjKefcx4X8L7uGsSEdRDkDMiK7X5PqB4ktF7tEdtLU2cWb",
  "key28": "2eq8vW1wMTSbjLUkZANj2s7Jx7mUmGBZag2haDnKToLAPhLVPnWwJiCt1iyqQQRKpcEfmwgKYtWPzqMxwhJfctQ3",
  "key29": "QMu6Dpk3UzDYxg7vuxM7ZcbeBvuzdHzwBVkfN1ABbdzTEWiwepuT3ivfqQt2gAyxRHENvTQMHjRggyXP7UwpW8u",
  "key30": "4g3PTJ4XAAteE72DdUR7GRnTqG7PokF1z1eX9YCqrHMc9PzJFZRH2Yuay6sMYKtPSNb34XyskTx2Mg6gmiK5EC2t",
  "key31": "SjM8RGRktDUjBAeMYfHQeFt7SpxehsnHykAhPYQ7Yce5xSb58HKjAvzqiaNa7BYg97quXm6TZEoCVthfcUgHnBb",
  "key32": "5npwtEHxi8taSb4z1U2Mnfowiv16to88PSqC7EtmKRjWedHHfih3iKmXMgYeE7RAmd4eMbFji6cbvY3mgZjm3QGN",
  "key33": "5woGJP3qkPqBCTD6UHWwNZKAnTdYPw5cTUsMasdNvMaaNYuRvE5iLWfFUN3cMrS1RBJtMmRAkqiZf28SmKWz8ZAf",
  "key34": "2q3TFGJxC88RRMftPBmmyfTaDySgmEyNCyqAE3zoGwMBWJT6eiQxjjj6VHHM8z9CocuxC3khq6vZg33cybUWgNvz",
  "key35": "52Kgq4LV69FuQwcK2XBrxtir2XSiLcUfDAquzVFr2ZV3qjv3m5qVeVH46pC7qxWJsPEP35rs9eHhDfh9nZ2Crw8u",
  "key36": "PAmNu4dhgmPT6ttXXRkjZBid7G7jbzsHxej9PwyB2SghZfBEMHRbujQWHbCMuggoLv9wgpxmUkSWZo9kkVoMiqb",
  "key37": "2RLbDHCYgubRvse6cPNGRyCe7PtB2L8pEREba8LN3BVhQPUJG5XTa2KzN1PnhPTuzwenRCEKovk4Jo5oQEdhG5ns",
  "key38": "v1BN5pyBJpX1AUcB1zPU8hGqN47KsHRXkRiqEjdGG7wK6yPuuW2J6K6WNkyg2mb7cKgfr1TJ2ZC5cTgNWSWKRiA",
  "key39": "3nxCByDYJ6GJA9NsgRbRMvRbcXNcAcaWXqqJrRrxTJ1KoH3eybVjfuQLHBSQXtkBwcgJtt9SBtrsHTtgeas7QmXG",
  "key40": "2A7YWpnEEPTFZ795v5HMN497KSSY8zuDxcsqVYaFiRQv3BR5zgaXMARTGzTogAABKbseWuuJXX2sD7sV5A3uVz9X",
  "key41": "KPrradAVsg82Zbcfv3SeBMMA3CveaYAYDFPNafMKo42YtT212N4fpfJmVcA9vhtDm23wJNQn5hKM2nk5ymwVDmP",
  "key42": "4C34PpxpDkL55NpQyA4yYtUTmbkMm1tsrEpjCuKDCBHZ6AXPbRN1tKhg4iQ9gn5HYUrKQ6ueU7g62Nkdoit9P4dr"
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
