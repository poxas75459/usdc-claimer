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
    "23Rc7mFAnoygZR9MQzRFEZ3YsLBkqaRARhdweReLsyx4Ut9aUCKmissfcbR83UXDkAPuriStDrdM1UfGnrmLHtHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nd8yT3jQpaCCj98YC7CmFoAMP1f1x1g8eP2eXjmE8eygXcVM3MMaRGPWEd81BFYvU1viy9jH84MpQ6gk3fpKXEh",
  "key1": "sP5ZejpvcqX81Dw75Yc1DmsS7fgkohXeNjsNVUnXdws8eZF7jVAmesEnZ9XxtX1AXEDtvZLQEsBBa3NtixdE3pv",
  "key2": "BHy2uZjvfPfsXsS6qAQ61qmzy37zVjsbJ1m2rfBWCEA1WmF2FaSRtKmURJT6EBcmhSCHAAbWLpkNYoLe1cZ6HXJ",
  "key3": "4N6mcqCabtMdSUuyGdEczY5BVwcKFkfDpUgx1YQWsbgp9mnTon5XisxdmNdkx1AELXZJRaPMkgtzKXJVaVZaP9fq",
  "key4": "5jGeiaGziZPWzzokuWxDrUYzjqc3D4NXuNznUwncoUvxNgXSTrAi8CQLJQjpHoAWutdDFZZe8s8877T65sBxtKD9",
  "key5": "2ekrUZ6zzBvyX4KieuxqQfraNoKHAYpeGsMTQcNzRwgWUAb2CjtzeJd9uxxgGAayW6XG7XtmBjX5RNGDuoCDqvE6",
  "key6": "43jwUoDmhoVieZj92eAB3ZJB1VpZVQK2zNngdgvs6sSaMAZfWuE7dJ16B1PdQ9zESZUBApA6h4Crbw63v6yLDps8",
  "key7": "4yuhwamRN48n7HJdbsLvVQoqcE8M9uWayZ56HRfCLQLA5TCZztRBS3weE6QQJTnLkNQgCjkH111nbHtxhdZW6J5u",
  "key8": "4kBuiEq4sKZaLCdi4cpLeGpzy5nG64qBeALsfjAiZMmmTwkBsbXbqs7tZsLNymtutJqjY48n2kwtENeXynvjwwjt",
  "key9": "5PtyrFcyu57xshK3KMRBhGLkpci7ywhBhvianK9oRXo4JWJj6MqUsNthz7W5fN3QV3QzNZYP6oXk18hBgVHWGWC8",
  "key10": "5VrkJGA5CbPQVBz6BHMiwz15kmTP7N15YLvWVWpTzTRn3SemDXsxtBM9KCtMft1LzF6FwpM75DYirez7LqYgn2Xv",
  "key11": "35ApU2qERLsS8eSSwiBX6DGLsF1WciHN8W39MvG4Vn2LTCKWBroavEqomrvsYW6p6rsYQbFRjxbtsT32M7PcuWxK",
  "key12": "3yNJcRRJQtJWh9N9iyb114eRiUJ8vtg55h7vjRaVY1eUmDkFy5yaJtvf3SJnn4xRHq1DuUHLbg2wP7YcXp22bAqM",
  "key13": "2g8ffGj2x4P4njmN8fdx2Wm8JBWuEBYtkp5dAYGHvD9fZK7etFCDgfWta3DADaA36mptucJ9sWx1BgefJTNwCaPH",
  "key14": "2u3dkf68rjGT3ajTUVuynyYpcHExgsj78eVZzYjeApbfXoGdGZRXoVxgn4zu57iUsVUqE8tqvHNhYrFVnyUt9q9h",
  "key15": "3BLExVZXoFcBUcdngYtNbKZJbmbe2xxLGU8L4j9Z2TeQ4rr1Vm3BDCkZVjjKLKKcsQ2u4MCqMDVCoyiRi7LBoXR5",
  "key16": "4NJmSNoCjVH1HGuUMQDz77ciBBnVy81r8RYWXWWbBCQVY3J5HKbcZJntxEMqdzXtVFtDGYSnBj1VvLnm59qFyfi1",
  "key17": "WWS7KubMFpAU4agf63DqTJBWXoDdqNzvt3hJxt1Pqc2Ahw91jcJEtC9SjoQHm1ZQpMo6oj5wsGFGqEomLBwawGv",
  "key18": "3MzB1WgfW4nNTyNWpGds3KADttYX2j7qZe2f4t3XBFTkg8jWeBzyEP4pPYa896n8X7rWs6BfFx1nMrDqj73A5UTc",
  "key19": "5juWt1mTiV887sypFCriu3beLcRFTuAEyWepvQF3dALWuYBfrAL7FmKsScQxosQZBrPNHCqHLdMdeQhDHUBuqF6t",
  "key20": "2QzA7mkvwoyZzEfhfNanFzdenVpDQsG85mJSPXNkY6KjS5q74QHzc5sn4SzXVmVrRFVCGJJkMPiqSuJbVWdexXTr",
  "key21": "TC8Z62B5z7YvHA9ituKwbDiWDgoYyAcf2u49AZ1C4kj3qgDit3bV7ojTw7t3jU3a4Dmo1YpSR7TtFAsKrvA5i71",
  "key22": "2MbaWjqMdZMjyyLHktvPsDPd1HzHKPHD414S5zHxqvhz1rAChY2XUnYvntnW9RhEMBCzLhDuNzL1fi9GCUBZNVwr",
  "key23": "E4L4uCs2Y9zEmq3JSRSPNEjRCGEUhMgJ5QmE8GfKLzfiMsss6Xsn1Y62m2g6NSRmigXdtXiu5Tr4tdxbSykSbEr",
  "key24": "39Qkjp39sAnPQF1QcCcKyT8cHGP8kGzhkDTqYaPDsD6681NmEVCPPBWKCQ85K3MqQXb4a7zG18Kdk5QRVxDCTDA7",
  "key25": "5eawcEsMhCH47Hm7EJZ3scoAW4c1qLxYpf48N6yHnqYMUyej4uMAx7ygFL5V45HyhpGPvwYFJwKFH3Z9o61rp4as",
  "key26": "4M85TvW4iGTCWsAND588rVvG1vDbzFpYaw4tchNddxTEzDkd1dD1rYTY564GEQ3w3r4frKbRoM8w3Y2rC4MVvFVx",
  "key27": "2eYdtm9PXw9NE42ufTfLcxzQJUL2vTwxNaSYXh4n9eKYL5sFJYWcn3DFCRHb3r8RCdzgpMskvXC1F6Zg6RbbPrwN",
  "key28": "5N68pZPGfMeggf4NXc6t6eDEbjXJBUjj9zqosA3QL4VurSF7oN8NcR6LojZhHRKtRB6gKPMNmLPasQGorvHE7ytD",
  "key29": "4Wp7PcSWijAQrPDD2rqK3Ahx7SrMxX2N4bpXUi3X6ioT21YqwNWoASKzUE1auZTBwBPMNsyApmRfcDs7QsEtHCej",
  "key30": "448YhLbeDo6sNoTJG8PKEHCdyM76T24GxGLBFSbbxfmDs4UqZjnGkenfmKzVhLWrPX5jnYTSrDgLPmKS23VnpE6d",
  "key31": "2R4NwrYwL6tyMrrVx6W7dKgjQbHvtwVK1irj5zaxc62ZcdhwkmL2Yzyg4Sb2Z2qxP6WZZr8ZSNCHmm6tZc2DDTzY",
  "key32": "UyKh4dcZaiQmdpgidvva15gJM3kwTfK8ftYVGqPwj1qH6a6SC7g4z5jBjYWuF3kojiRrxBHxPMFXFL7HRg28kL6",
  "key33": "3LGFfJBgYpgoupgoAuh14kT6yd737yXXu82B9gWPbA1v7DidTxQytMDrYX9scC62sS1JySqY9ziiU4iBv6xRb7Ha",
  "key34": "55oJkifJtAr2yDQjZC4Kbdp6uMCDMpxLLxDyhsbT4CdxwHyQ4R5yJmaECAPnxXzcp9ERBbS38iwvpDZNJENd9h4k",
  "key35": "4oiT3aa5aQGGgpRuHeAEnVUjZcw5ZySSYz6hA6LXu5ANaj5ycd4m77X92UTUnMiJWx7DBLLzWKautSanVbAJ2VXN",
  "key36": "5vNMurw1WYqjz85gZ8JfWkBCa6Zwkuhx7KY2tCJ87k7nZZd74QZrFofNw51R64jJA9E76yFCMUM6Bf3QxNvmbRbk",
  "key37": "4aFpmUJx31SFqw9V2P1Bvzx3MXuFh4H9yAzYbeLcRjYYfAf6a425dc1mvL5p6mFwBtudCxWgV1TNNXymnQKitKKu",
  "key38": "2ZwFxqw1tM27Kmo4W125zF51bpuiAj8YX3DrrGwE6omrxQrq3g9hwrRJ2mPLdne9bZxvM2KJS5nh51hMNxRrwYKn",
  "key39": "2CcBXtSmbB2vPyQJznfrit5gZRVknBLLPtPFWoCgD9JNZ57Hutgd1DhMjgPCkE3wXqczK4MVJpr2Qx3c9xeeMoMk",
  "key40": "4C5CiSaXWm7QMxTNZNjN8TjUzHH6yg4R7RQhmev3B2pheTSJ1fb8Rc4upPpK5ajX9bT8wh76bd4YQ8r5mW1CNfWM",
  "key41": "4xzUjxtJcwBiCihFJT9YjNeKLuyY5R2XBYRvUvdofunc8qBfRRATraDMmgZArEJDojr4pg2Br1bTxnP4FTCCS53n",
  "key42": "3GZmXio9Hd3ausGX87n4uUdPcEnkatuxExfjgYWYLLzSRJkf5tMXXD7Lub2oh78gg1YuMweehwLRZx9JSVkK8voD",
  "key43": "4M3H2Hm2azQzGwDZ1jiahj65hWemD15BPfinaagaYgtTcfTLsRr8pJkE8vt3w1k8frWQG6LLkyQqZGdriPCMEAbg",
  "key44": "xpXuiGgbWDiVLhvPmABrQegdytrug7ZHpBkJ7acocoPN4fSZcEDFW4Z6SEJRz6VayYFXX17WUGndMSo1affG4Sm",
  "key45": "57DhboJ2SUiwuJV1mKV7S4AhFVs9Xwqdtjqfi7fALGT5JWQS4AFYuLajkQ9baWoCsucHdr81JFKLhUHLoS33zFZN",
  "key46": "5t4tEU2F9ZXcUNZCmp1Br3dpPWJBGuibmeUYUxGuejqXruXX7rTYyAZKbETJ4Up2DoQDtWqzppkGN1xU1A8ErpTu",
  "key47": "2kHA1PbeuKbDj7kkDorED3DESJX4ZwAEWHsmDzA8zJDZZgcCbAQQj14EKkqjHYuuNkAMsD2WcVeXnkHj3jB716N2"
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
