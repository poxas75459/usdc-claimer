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
    "4wqEQJDkvA5qwdf6DxKM1eU57Rs4ZNtnLuPHpVpPFx9G9w9T1ewpARgRxjJc1o7aQFgbgYLT5WwFe6Sn4fKp62em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMqn8VZB3kSKq7YKyhqV4RE1xXeuFp8txKRTfSLSUkbU9AHiG5hzmtYyVCCUznBGTAnfTaRzP2QcZBS4qTVTHsb",
  "key1": "3jTM5G7XgTvtAQqqAzB97S742oV1tubv1sxMMMLDb6ewXteKAqNwmxTBT6CMG39xDCCiKANT2MSbDu2eqvrvxuiP",
  "key2": "4zYsFiXUgz49roo79mu3miPegjRcAthjQguqRDNJvBANE3n3T7xz6gU3y8E3LHtqCop8fosUTLUzqWPJpP1RJtvK",
  "key3": "Cs4M9qU5qLF3dPb9qHeYZVQWpC3Q3mdFyzjuPg1Z7BHr4B1csvz7TAiaoi5mKj3KMLq2CUkMqqeKujSvGPYqfRo",
  "key4": "2CHThv85iaShZGyCXeTXB6uuHwaQiGHJe4aX4qBtZqb1CkniUDucjkMnxcJSz9oAMmGD5r1UXZ3QTHvGm8SbpNSq",
  "key5": "497sU3QXbhinDcepE1U99H8h1hE1FENimmYdAtn3gV1asBhXtPPt85aArKKvwAA4Ara5S3oYHPeGUfRCCpxFPnoQ",
  "key6": "77KfDEq1F6TvzfM1DJTxFcnGYne5EUq9h9TrXhfizkE1U6Eeu2RcWKDPY36sv9MyU9Z4NFtkEYxS51FciZxKFPD",
  "key7": "B1SgSUKeypZPVgrPNk6FpypVT9vBdUgPHDCffL7Nvrzi2sGM8sczQPv8uary7meUDZy5yJhuRDqi5JFsLCoe6SJ",
  "key8": "3B4wM22stRBkGG8S2XqDxBR8nogWNVbk1aytR3xjLx73oSf4EgDJtp8LXH3EjxfLkha8c1dv1trpkC6EMKZuKNWq",
  "key9": "3gaynUkiate9gxei6nxmbbLAcCFBRNVHqD3FZLhtWmr9znMi6WfvU5cUpHW72gwG8RqQdm54MH2rRVaNBBpWbbGF",
  "key10": "3sWB7zRfiDVm7TnMZRr6mSaWeND5pdbfXYHsM7djChfMyBoJV4HujzbonASMFxez9sgvXzQ35XPCMErRx5BJHH3X",
  "key11": "29hRyaAdGfmXm5M3bdSxacHwm9jVXLMyVFWyxrfnNjjrqhLGa1dzFDAh9e11eXBuBPvEE4V2PXAr2kYNBA8tN8Te",
  "key12": "2eHB8PU3nD4WqChw5UtVKhKRG9sUwLDMXiF9exuZoM8h651ogS5feGdvNzc6z7W9TK9SqNBYkqeLAiCzkX8nKDYY",
  "key13": "QkgFnPFCgKjDha4UBCs61h3PJN2C44CDkbU1jaJr17jqj2YqrkescAKvcxrVk6TiFxKbygaEnXh9nex3cYFeSZU",
  "key14": "5tQKD2qYqsVuV52iyAAA3DheXjRLDqJW6LsmetB6PddacqKnmA7c4dYvgPEeMe7nd6tHoE1WJLnHoYQPAJGjdRT4",
  "key15": "KofM5vY15mcm1ABTCy9cPN9Ln4rjiMdw95BqiNiteaE8tTvcojXikkzEKRS6eWY9r79F5sxsVBb8n49xvrjFjFi",
  "key16": "2WkBEMQkgCBhyuF5bzXLgQRjB1inWdW8yRGQVEtarxoSZiCkmD26M3nbqoRuSRceSHbwRjQK7W9f8rbt7jVojjcr",
  "key17": "4jeSxg8LYqaicGudWN399rwAHAF3fSUjPMyh1HHWa1bBkH13m389BWHKM6maj6eJokPsjdSYTKadfXBS71AhQ8ZE",
  "key18": "2NcH5zU8K5ssfmXHJQPxJ9mB4kRzJoL55RG3FLcbafbuEXg4jT58w3CKpCPAFcYDreZZotsmL1mxkLY7ZUipAEPn",
  "key19": "WogijspBPeNxxPmXdZRNCSDvbk1s3PRXk6KEy6qE4o95zTo616Jogd3JVauUAzjYf4tpvx26rMpGpeLSEKgbqNF",
  "key20": "4zyRmK55B7r5EPe4bQcb7SxU5ZiMPHVDsn888WcNyQa7eF4d1J7gnqxuUhmvTn9kmiV8ECvNbPsRKybrL7yCPqS2",
  "key21": "aoWGuNjRipDdixSgC4mBFntsS1KHLy78USBCR5DwpwLHaH7BQ92huR9r3QNv58QsWUDeFFbjYg2v8CsMWnv1yMr",
  "key22": "5TikrsW5rhUTkEk9tdNjpHjho6Jh3ch8YJULM8Aaa2u6yvNyhiFCbakEFNK1kuu5zC18QTg82z6BuSXndsGmN4Aa",
  "key23": "3uKPCCDjEtX6aPKHdmwsHRwgBWhjWKbwX5VfBfzRrPeE7QgxWynwsXu9VjD54LWYjzkfAAaTEbZTFZsvkR1TwQZ7",
  "key24": "2Gm1tBHsu9HiJvKHJawggsuHyhsrFEXdsG7h7Jx6e64P1Ece5xMCmXbB6EsAgh85NDYTNMzoqhzW5CNumdiZRRGm",
  "key25": "A36GvVh4b9xbFb2hH9ju7kWckFZYgWEVPzgSNwdwJydZafyBGFYbLPeG56fkUmRTJCJYrVPbkcL34wgi6M2whcC",
  "key26": "3VL1taLrfjNefMDX9s3ZNRocJ5L41YLoDzgddGArkyhjPjQ6zo94YbJtJmFxxcbH3RvWLbV34mh1CWJLWeejAgRe",
  "key27": "3PD1Y6EYsAs3Vk6xyMi6JraUe6UP6EyExCPtG2uhuWLLiHrpDSjxNaCbSGm1fhZnG9aZ4yA5fUW8XKqsV4fjeTgb",
  "key28": "4JA9mcBdDYpMyuA4pmSr1835n6xudKvWPy9q1kWDgA6GjaxvHmsxQVpe2Aaz2dUeXEuaejujDCXz3Z8Kx68g6PGs",
  "key29": "62hyrdeyD7bw7QE2Jpz1Fki6h4SWc1Cqeor9GPcE5CdFyCf6UEoQ6LySYQnG5sTyNiH3r5Pb9HFjwCu4F4QXt6vy",
  "key30": "3UrgNUThBp1s5Mmx618AemrAJRkwxddDwKyWPixXSa27a2CtFKkabewCFPUXTCgG9LmEGo8s3Xh912ubU1LBAgtP",
  "key31": "3ksibDxtsAsrvAXCkvijb8bVjMFVnDSGDgS6my5ivwrwpMFCCLZzPC8rSGQQv2Tue4UdjFQGCC8REPiUA6kqFvpr",
  "key32": "5b26BAZH8i2pQNavKVNH5uyocwm5AmTfD8FTrow5jwBNwPDZKD2QCtnH8WKTKrfwd3RrYSvmsTxKvxSAJyEGerBM",
  "key33": "2Rqby1qz8joB6UYKaR6Yc9LajsP26bk1m6uD3NmiCndN7QX52VjxYmHeyBiB8NzVpXfC5ScCyVusujA4Ym5HCA3u",
  "key34": "3EmRzYbMgLXSf7qJgFv5NAjujQViN2ne22dHcG99Qi6s179XQsEDX91KNBwKVaMLwcmcHsx2K3Zd1FVsLK5FCed",
  "key35": "3povzg9fVKHKdH66vusWjtDv6hFKVYgrNqiiaLidEeLVdU4cjHaxG1Wa7KtCPnve9WU4nsBkby8QmxoMTeZPxy1g",
  "key36": "3EXTJXP8e2CmrExCAbJcQwbzVZzZbQL7zHNozXRbvA8RQStr4VTRW8mL3oVEzrreoTSCJ1puSBuNH1cQCtip9n9a",
  "key37": "4z7aaW9LZK8XJBZPsysyf1ni1prKqRwcpvwKSD52Ds1tvTAbHDD8Sj4J5LXa8EBaVyG1xVzbLjjpaXvbeafsx2ZP",
  "key38": "5q4A1uD88u9b6aiGmYBcS5oYfePXnFho7wxPWCvCwdkGGGQMZb3zpGPtFesgf1T9jv73mvgRzDQL8ciWBQA6ivvz",
  "key39": "2oUjNLCZaLBUWjzSVk9X1pytGSH5SyUCP5JzGorD2MqjLyEWgJUEwVTjZwheciHWJECRp3EMQAML9HgeBhp5fkMK"
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
