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
    "2pkbf1C2DQyJgZz1xCHzvkNQ1hD9nG1SFzMFc6Gb6LTHCskFxamwLpMggyRNNEV4nKuaYBBc1sfsgUcK2irzrMsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PhEh8QdUZbPR4WnJ6FA9t1BAf6ZxWhifgSTpwL7AbPkRKmFiaxwEcDjz4zbJXN7yC7RYee4qo2aFQeyYHYkXhZv",
  "key1": "4NdJdy5AKzy5RP5Qzf4tPhwm7LYZeS9tPtx6NRB3xmLcT4pMou8voFXsiZL3txo9HhTCWLhrMxa6Y7wnTzVXadk3",
  "key2": "3VTmXMgnYUbNACXmgpS6i3m2J6Ncjj36xPdpinW2vSsfTVSQZcXjV2e71ou5bDhJq42aMNAxdFB4FJw7XqzzCgq7",
  "key3": "2rNHcUgFSfHYXG4P5hqLUgx4cYGKPRbC7tUPB7tMjGQQkMGChPuCfAAQqCceST5q4qaTEW4XnvsN5XFprEtH5J7H",
  "key4": "5jkCKQf81JaXYiuDwv1eaUR1Vr1t5f858deHWga9X6sU26GQvUfsDnsM5uX1HA4ZZT6acTiTfBmoSn93GoB1mwTF",
  "key5": "5EtRGX4F1JpezG4wzyn7mujARcKfRJdcdusWUGihnWxcQSmojEutPSjCim9q6L2Nq4oYt7gGsomMAFyj7CoadVAz",
  "key6": "3exZpGyWEK6TXfeSh1YYp92MFFnwn3WP5AaDJ9hEEsy5iL84UcgPV3AvPQetV9k5o59oUgHMA83ecTxH2RJPyCBL",
  "key7": "5YM3ux5NmQKoHJ4G3ASD54XDrm1DVYKmrL6eqogocNcL9hXXhKm12pVbwHxVtVcW1sypZA3oy58QDs4U6DyH2XGF",
  "key8": "4MRr7XBRwAjdfXGqSKm9R4nnHbHgk4RxxniHpApeEiZn4wvy8Hv1AZgg1ishYt9s1rBn5xop1B92vUtrNQzNrrRH",
  "key9": "3hxix8e88BS8AdmexgX92NxYJJjaqxVSSX53xJvLdkoCkK28hKDxkNy9AQUXCkh4oV7swjq1HMgxww5iQrhSHZtr",
  "key10": "48qMEq5cZdUfZBa3yLW8c8dWkYj22MKRxn6XfxmJd49w6t9LwLE9pVY5Y19d2RoZoRmyssVhWVdVv22RkfW45fkd",
  "key11": "5d73uqv9k1y9nhBjNmeD2jqA1aoUAsAiDA7e3gxm4mxBLo7iq7xs6SfqcooFVCdXz1jXnTeCugSfR2REsXFDu75P",
  "key12": "5Q6GCRb1xg5FYbX24QELGZtLRNVsYLvdfSQY6zjCjZkBRLDjBKifogboiainSXYgNfu8aP8FMKuLDWy7aQSWe4oG",
  "key13": "4Yaz8gn3am2Dgqi1Rr914YzT8d3gJQ3rWi5scYubiE8At4oF2L1rsM817TgBwSC9pp7qtDnz832pomv6ERqjDZ8A",
  "key14": "4gsJNnuDzLJizdyEaR28U487PaiDz5XJ9jn2bpRVUxsy8rV1VLwisGsnqtn73pMxk4cApS1SPf18bN4JdznAWUA2",
  "key15": "ew4ytsSTz7a943XbSRBYyDvupDQeUn1ywzBGuDjes2aM9vibDAPiPZ6R2xNtQ63SQFUhaZ7nR2bJKtSut6VF9uz",
  "key16": "3KYCcB5cg4qvJ6pArUWjgNsRcmQzy1XD4PJipcimmMrzWyAdMzgwASiMH3gc6bbL4pkUeAja63dti584kekLNwUz",
  "key17": "4rSxerKftGYAMxB4FXoQ7svQcsrNxoGgHH9kSSU4hYALDxhy354KCEorTDM7UH9yWyCYsW3vitim8mfdoYS7Wcs2",
  "key18": "3vV2XRevsEpSBBtD7BtPazUjfbnVTxWnrXzwe99PdFYStF3ZVGeVQyof5S8oa9k28TrBF1aBZVAqmPDuk2QLCBJd",
  "key19": "27W8KCCc7spKAoXUeBLvY2niRnZAmJXPqMWGvuBtoe2EKHo4boDX7wb8XC6CxyWnbFcz5awZwuxwWs6iLFeR5b9P",
  "key20": "2F9r6QeHGFRk6Sh5okzEDu5nCfgaBChbxscjpoZogntU4jDYc5U6JAfsvNqnkx4eep5qyndMdD8kpNPo1SZcV6g6",
  "key21": "59jSdkqm2NaF2zMLHUvEXBXYEoFgQyJw4QddVsMsj8Bh9HuMPrSDuv8ScHUv96TsLhd4DLiHLUmSjhXXNDSWC295",
  "key22": "4bPbDtictxA8oJgfNL2ErEkE9Xa1hUWKT38xpMEkunuD1YCUAyCBmjAE6yKNA1keqR6BuuGHEtMDAEbPRpYdZEo",
  "key23": "jyxzrEaMKsLnKRYexYv8BaEsk6oh4RRVFCtNFTKFgot5cM4JihCAALZMca9UBecF9Umz1juhWdqtXPcLr4a1kEt",
  "key24": "4GVHwtsoQVr3aoxEcA4TG9tce4TAtgawGRypkLTfQfKyQGNELv1sJ2vDmzNcPAyXqfVEXeyHfeWRrvfLVARbeVB",
  "key25": "3yu9ece5H3fFVgYKcQjCA1zPLyyBdPVBXGhcYyjEh2i9v8Ta174PwTdXVkmkHdtXGkfKJwjGMidSc5FttUHGT2mM",
  "key26": "4xKNswvRs57WqyqAwPPQFHLcy4DjNi632ixy9W6iSWtDzp7w6r2RF1xH3SJhzfCaux9L7GSJg6mmok4oCiAXRJmh",
  "key27": "2ADJ8UL4AiFZX4k6SonLNfdJA4Cxt9nGnhWGyfRbVTXefYkYWMRGtKMnVg9ctj1u9xAZfNB3Vc2ktELhxMTwqxGC",
  "key28": "4kjJ2YJmvkfCqf6owicXAKmyrqyiZEkCMsibjp8geD42dHDANGe2D5sfX79K7Arggfh8jGwJwX4tme16NPCAtwqJ",
  "key29": "2DEv2rHLwbQc92GXR3kCrP7pmorrFyhqVgvarGQkssDwRYrwYPUANFy2RDtGudMhar5GA7U62Po2fLivbNxttDj1",
  "key30": "5D3Uj96WbyHN997ktMtv72t9RXe16UksFPwiB7eJ6EuCm4HYsYYBVkga3DrXmxGwjffRuBL2CvuASbsF4W2qJadR",
  "key31": "61HAqirkbJWW8YPdBnNMribkKBcwBrLR52m1sJUmtJSqxdMc3Ws3wodp4Wh4ifanBKED55AE2nbbCPotSZRR9ECG",
  "key32": "4Hbne5hyscWsJigPyH1BYjZGKiSgaW83nNppe7BjSq1FyorUV7ZVyRTcasUy3EdxPpvoSB3NsmdVV9pv9WjSwgsZ"
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
