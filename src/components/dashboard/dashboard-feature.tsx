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
    "59yjMg5J89vo3Aws1LmfHsQsvAzDh8pKAjm1Juu1i1eySJozr35UKXUHi8ReYQzzaY7friYdNeRw6cAipehrCSvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Ztm9JK5JyjpsH76UrmCXqDEP9Q2yrufD2qu1rjJsPPW9VCqp3zcKgpK921bLHHDvE51LndwP2jm4D4YfQEzq1R",
  "key1": "5RVzD47nBuz6ab5AewiQmS2nqQwwfnY4sgbm9SmCgnpAtrMEbuxLW4yiuCDvGM9hb8sYkjbPqEaTioBYe7aUmjTc",
  "key2": "5TKEPEMNMcVEngbv9ghL7d1m2Extepx1wwzjVNxNZVxUmzmxcbWxEezbiJxF5RP4xLbW4qomk1NatYoCwvMoLu65",
  "key3": "3DADZRRx3vZ4USRWxQctAD5FG8wdrHseCisqSEqCWFG2iY8jraPoA3NhJpMfNUx3wnCkheJrdEMaApx5cyvRWKxh",
  "key4": "NRxreDu57rG7cbE9MDZ245z1oFKfNehupyNfkofovq581idoT4SMDVTAUWHNEhSa3F9ueufB9dXqoBsLCL4Gk2k",
  "key5": "3Ke78XHnT6WmhHyGkXs2NApichNrXUBTWog42gSqZfvDtAkd8C5hBskbpdH69mhFNJa5VoKiJDTxDSKY7a1zAMc1",
  "key6": "GkRG7EDvSxeFysbgSSETz2ggVjbNFx4PZj68WCa2GnDpBxvSRsFpyefkgTLEaTxVsu87FQFQ6yNa5qSW9CrvgaW",
  "key7": "3TCGE16qtW228TtnuT8qbJ3Ag86vPgZRDNdRD8iriLEy2kh3tY6YVXHy5eX6DfRt21hSZ8cMA52EiZGaW7KRfsYS",
  "key8": "4NoZrC2hJ9J9Csq4FcA26znPhg2CXa7ndcyLLuX9WBVXf2ZnKWhY6dsMC1MTZZoL2GVaphVNvVcT3FnD5TAweXpb",
  "key9": "5NTfHmgqkfDrZB82G9FLx5Q6scmWK9U7GjbwAKMr1Df2BLM7rGbeYWwPMaRfpUmHMZ9epFZE55agMgDWMKBTf7EP",
  "key10": "4gHSSS29vsheMg4Wq6PJ1d3D1JrpUBQSnpnT58ofJjzdzVLs3CMqtRNd7HvHcsFY3wkE9e2VxcEfRrKmER2zc4C7",
  "key11": "4bb4Ju2aUL9ikC3bCaDZfPzfqyYATEzupZGNyhmCKAYqqD4U29bHCxC5KTkDPoCkEbXfh54S29JufD7o6mP7VTSa",
  "key12": "3N4fZfhK3PhggAffTTK67xdCA485CEqD46pdFLYLwsFZdPCMMHGj8H8qYLFa2iqpYgDX6qvs9W3C5PU2zf7dpb1E",
  "key13": "2hRRJGJ8HhPv21KDTB3ae9ctTuJ8fS1zSiuKFvkzJp4n6wsdnzfnr8tgU9taor66RsfxUY7xRoJy1FSr2CsxQbkj",
  "key14": "64Gyc88FtqXCoWLhJJVELETfYUQxH6ADSenu4AAnD2FzznMA7yZn1AeK3oa3sjqjLzkMbiPvtCJv8zZjFxUwsaNm",
  "key15": "21WaAjkBfVuMiyP2yZD2xFcHMPHYg5sjymyakms64AKJ6zKQiaimRJ4nhs31cMnr9uQaT12dXcKekFXFq9sKANYb",
  "key16": "5hz1AgQ9VW7uBQj3TBytFkSniBebfWGdMqSU2CsTKW9n125CB1nWFvyLR9kh3MLXve9b5iyMbVre2KWe9T7EjKUm",
  "key17": "5T67qTrsjS9X1dXK2Lw7MVqMZdeGvC4CGP5dkNT69jdMXCcWaJ3XjKcrzNxiNChWFMvpBMRFpsx6S9XNaUs6WPdB",
  "key18": "732Ai4MpWm7f1Kun2GcW4pDxCkQZownQPLGLmJ848BewzWVAop3U4xLzb8xGNs5Q3qPUnm7pi5UeBsZKG7T9DR1",
  "key19": "PhYM8D3PYpSvJ4S7DUMH2i7yuw1J6wG72BmppVsaBG6CWr9cn2WxLBeoC2q5qomdNdA8GQPwaraSNy2ryuA2gBc",
  "key20": "39rLTg7qirA2PGfjzGtc2spMAjEL8hRff9WJp8YCTdF3AZsknA89WsQS5dL1h2dbttdnP3B6nWmshSX9pyyopnpi",
  "key21": "5aN3ahNmcFbkdqWgLy7DzRB92J94QnBAkr2RSf8wMrs6PwWv25HKEHbEfSREnanCXpDWEZE1e2sXGBwjzaMNVMg8",
  "key22": "4zneRs6rumZQCmZcxvr6bTXnVJZHNzSY5UyATdx4BmGbyaYBProxNH9WVy1tgBW5aQHvRQ5gJr8N55VB9XKd6GPw",
  "key23": "5H1W5V7RGSoKe6MZVQ12G4NeQtPhuCLrW5KLCCtJrwTpn8Q5GRnvBkMXe9mBLy2f58y2TdG8PGAXhHHxdF2QidTs",
  "key24": "2vRt3EbHzNfDvSvYdtYtkk46SGLYK1KxGTyHvZRjQBkcZvMth66PmxteUDcc4RLXaEd7vfQjPHHqmRZGzRitzEWo",
  "key25": "4D5r4E1hQN8b6HhiuWcuHBLrzZgqcpPaDQK44C7gXmav93EixHLJUkKPbJnUjim9JoMMuZH1Q7F7BiqZxuVeHKzB",
  "key26": "5gNYaREwq2c4m63P5pa63JeRZwbaTHCshMaUrazcMF6KvfWJYaoJ4A769Qm7S8kHsg1C4hwQ2h22VkqFv9kwboJX",
  "key27": "4L5QpfAvzVGc4gV1yGLj7HpM5eMXKymX8Z6mJGQ1JFyk3jgRSLPimAu3E1u6kCcZiKFYikGn1BW7wvakrfcDN1dF",
  "key28": "5TMf9t6JbxsmRa1Ue4EyNfDvYsPhiXirwKz8aGWUCnRxEAaxYMaoFEuS4VoSwixspu1BELszZdtqaBba5EHfXqyk",
  "key29": "3LnHhihSMcQkueHWPC9mfp3iK4X6HCiVvb35pHSGJ9enU8eRNh1dBLqLUQVwC89Kgs3wsVEruXK9BpdBZLgnHPYW",
  "key30": "5d6EMVHPr9BTbb2cQSvQw39jFGpRat8UvxiSVQfwBBPNfotkja5rZqTnZpp7Ztnsvk6QEwR6b1EuRTQfhCCQSuxj",
  "key31": "2HPpzRpQyRYZ6tvjDsLkiax7AKEE5U4W8FTX86NXDfdcXMsPXBeoWUYfe36a4xVzxd2W8553vjKUyKbZ3meRfzr6",
  "key32": "ojuGCmMCTbtMuW6yWHH1YJ86UwKDiwcivUNaL5bWyibxmaJjJHwi13QReg6BvmAs6j9izMow43A1sJ2bTh2XXrm",
  "key33": "4rJhVUWdgtP9FixLb6CHGJwenVF4DoehKU7cS2xAi6qkGiDKecYN3McF8kAije2V4faEPaFT7KN54hkktm8teHq9",
  "key34": "2DwrqxuoVKBJgjHhMDkf4w61RMS4GXTiZpuzuNGgKn8ajVMeVwPJbD85tvRNY5gNFd9hRuLfHvVPCNybvF6XQBDK",
  "key35": "33ELvqCUHqRQpEzDqTamDs6VGTd4imzE5QBVkygAzMVh9DhtVTWGRrKeQt1nkUcodMFvoZnyo4CzxLXwEoZ68DMk",
  "key36": "5zpdDZZ6TdJjUqYr8VwQsvnWsBnaGy1fH3pMdSarwQaU6m8hLcgNmafPcSD4TriB2dTTE6Ns98j2Y8Qs7zf8kFxR",
  "key37": "343JnRmG89otgRS7n4aHJXPuSAoxJxUH4LwcfdT5LtqKLFEVn6C4UngSm9sjJ3mn8vvfRWb7shCCZNYV91sCcPen",
  "key38": "UUA9qDcfxUMU7hhT5288F2XE9rwFH6SYcxfYavQ5Gitb7aCrjD5TBJmNP34PdUac2mP8f5PYWc86uUgvKCZqATE",
  "key39": "4hvnETLUqRA7QrVoptomFpr6VQH6GkHsk2rNSge1FQSpKab9W8mu6QULxGHdW6RMg4U15k8j62ZEqGrH16zmUMCU",
  "key40": "2HPYgBJKTRm5wKt6c6XVAb8zEhzLZMtxX5jNhgUXKQ7nvNA7M1HTdgAEq5778EugR5t6feUJbvttc9uK1nmdWe3h",
  "key41": "2vbLfZ6tjNPJUss6QZUEuu1fTZLeJShiaATdin7oE42aNz6SF8sD8vMi9JeQYtakeBnS2mAvCKpcRMz1WmcUGkp2",
  "key42": "3TnphVusA8182csSTKNuabSTfXe9vakYB3yxJVeU95Ys1yw9e8WLSSco6PrnygMfNtjZyPk3UMiwVVgxbpGamu8w",
  "key43": "2EGADuYZ7thKyxYPwW3hqsrMhTHPD3sz1bHrvKhDbYHH8mEfmTLZ4L7CkfTRXPG9eXU8cAbKa9qsQNJTj97z1cLF"
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
