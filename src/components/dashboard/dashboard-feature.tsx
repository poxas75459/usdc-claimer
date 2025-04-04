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
    "5aCLzR92G8hCBgfJUZsi1f6efr4FJKdgRYwEH86wgNrsyHgwc5aTg5SFLQDiTvPJPHxGe8vc1ogTBdt9P2qBFZNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ho147YRMFXeBcWzApTYcx45bMiWqh5ahZEaLeZL83xn9LbdJcQFm95vYDkxx9TdsLU1YekM66ExAeHbrUyPbaJZ",
  "key1": "XZsjq7qVxUcJPN6LN9ucR7yz4xAQgf3toFbE3RB6iWgKMBdrXoECDHcbRzMv5UG1CsEeHj2Ds6y3KUq1jFKoEbL",
  "key2": "5ZqSzE5gizsdtU93uSdto2kRGcRdsey5GoqZ5wQYJhFfEYwvQVMKqrhmkuo9WusthB8jRox3joSgTYknr9daH78Q",
  "key3": "3QpSXvepBVHzmJAEwjF2LwBYyb4wn9hWeaenfzX4qngUg36TPUURzYWcS873n576q1D4VtdmAHWCG9bDebYTghbv",
  "key4": "4Xf1uvhbVaCC6XE1PbFETNGiFEJuMX9epQb7vFprKFqtt2HAXYznaQJSAwj9hJvDdZuKg9hUJGqsMdpsbySctM5J",
  "key5": "5X7t95CLrkiqzvppe1aY6cfwuwDnC5dGK8mg1wfrTEBbPys5VVGEpPMKqjD1qJEDXsauVMuVrmZxvfH74dVUh8Cn",
  "key6": "5N5bJtcvym9DmRYy7V6RBve2LsYSdtsoKcRSR91t9DFyRCicHTzWs9dTbwg1qHav3thSmnwik86ccM8pCdquqrgM",
  "key7": "36MGkR3VaA9KVCF9RNVSBCxk2eUS359YjoSUxPXGZDYo72r2vzNXu7Fhki8rHL7aGtuDSFeQxpZG3QVZCgRBfz1t",
  "key8": "4C58ZLa4H7ekjAt7ssDUa7oKKqsypnugEgu2RxXoBbhhmwVzJpABwTmkspmEBKLPEtVz97ofZBEw1KWisLzjmnQq",
  "key9": "5ATq1JvgLNdunXsPCzwRDnhjfHn7oijxhCnS8Lq1wg7PVCN325DdwBJVb9xHxvQ4WeakyvimiMM6CC82ciAqaiWa",
  "key10": "49cHG3DxUT6nPW2fvDXNp6aMZDi719MjzyVzNjNiz2WrTD2gC1yFbSf8YVNq33hW4DzHvLrQwt8Wk2QnWR4oKRjX",
  "key11": "29JXbJ71ZQA2a3JiYGmhBhRKpfNmX6KmjahPNxqyPHkkcEtDJzurEMZ6zQh7Lyo1Sg2hzHWsmTadAH8cqAKoq4W3",
  "key12": "LWn91zTvYQaFqT9wWq6bBEBUC7w9mLEaMDnfUrCcHmWgjQwpWN2VBpiyyFcZju4nG7TqtDBjbC9T17XAPy3UzwS",
  "key13": "59tbinzTJrNAXgLk2DvyFa36Q8hGTha6gpALsddWwV5hWExVLNp8TLuu3RtiWiYsrQdPRkV4UzAvpf3cD5E5SSo5",
  "key14": "3VBjCrt1XXDur9PRMCtnmKEf67g8NTnaEBrt5NT9maeXuWMdMZdBW5sVrY8tK8HQ4MbHZ3UBePka3PGSAWr9bp8U",
  "key15": "P5dUoN4MW7RAM19h6N4KcGmEfoa9Jwkg3voGLvqvwDNCmijRRSF2SwHhRzv3S1N1zaTptP79eSiHjEMY5vebSEk",
  "key16": "4p3EC7RVBJ5W5vw9mUJ2kvszDFHrpjqo71GGZ9xN34AgRNGEEJoQEPpfRrRjA5ADFUWe9Re9pyXqNGGS4nqdLkit",
  "key17": "5sYuhfkaQGQd5NYPtuwFNeBN1J6HTsXeMm3JXzbHu8et6WfrzM17zNf8S2gFdVjA3r2Bag2nAwDYetL74HmBkxPE",
  "key18": "5KQTm8hTfJWazrGUXA2sou8ePiSPxGCzdHsk6e7yVf6hPDGcheXPXmqk9HYci9DtaQCefWGh39Zu2Ew1jLiXVLwr",
  "key19": "5v9RhszKfdjwaWdpQ5t7QmF7vE3ZPo1zvq26Tchtb6ca2XXbVWQWFySLTpKPVdg6fiq9Wnui4MQTJ3jNrhupJNYV",
  "key20": "4Df6k3RLTMoXnnXzDQxuATGXDNgSoPVz8io4yYste2xaUxyWkv3bKvqcu4fvupFubN2NWVKiYskNfdfqCcfWxJWh",
  "key21": "41F3U4LiZcpUJYsWzVi7wroVp3qnAMgZ7S5yed5EJAR9fdHhjffFsBgQ6TUdbAZYkfi7Qxkdbrh75d2CgK3L6yxu",
  "key22": "63dGiW4p1CTih6XNmv8iZVE5aDGmW8JrWNC9EtEJur4zCo2PYfU2iXRGa8SLDng9Dgm5uCYZDvyjnj5E23ru4EKp",
  "key23": "wDzzcuXJ1ekq8cuAj3xyZnXeLTeptB4pVmGm8DZGFLN4MJSrxWZan9zKXozB5oyuewMKFP4uBivXFNUHk1SHQwW",
  "key24": "3ygEDz1b3wob8UMgmcSVWfU5qZU4KYJBuaNx2ddWRhw1xNeb81TRJp2txiHXXuj2EKxuULb2z4CRr2zQjFW8YorC",
  "key25": "3zfjZrinAstbKjX2ocBDbdoxQRAT63AvmqxACy46U2AdSxjTEhTNkR53aS6NYdC4U3QfDn5bjYz2sLD69sE63gEA",
  "key26": "24ERTPqgekzSmwrTDmro2jSjWzozW6gC1FFdSuGugWJy4E5kREZowkhuztatF1iszCCTkohdfa2J3ZQv4KWt2CEB",
  "key27": "2M1dfEzQK6USduEDFmkXGZmQdFdZV8Gwcs99ABMxKjzqUjReK2JUMrRD2rZRf8HQBkxh5kpJ2Tz1dvrZXr44K6us",
  "key28": "5RXrW7JwUDqt4dFHCTzxGVD6CZafFwQES7hYsv98rTciKZpNEDagAakpG7kKAdEJ6w3k6EupkLmbib94XnhtKtTQ",
  "key29": "21s8gMP9UsJEwnrNWpWTtgihJPyR7efqEhgpFBRZVirzhZCQ7f6NNnKCWapkPqSKj2461iVZixiq56u95b3a77EY",
  "key30": "5xAjcXS97jRtPyHQiSSL7wSsmeJXLaEQc6zNaYa4yYk3eCCapkf4YLzwCKyiPu9yWic2FuuA4FhrPW9tRTeBd5p3",
  "key31": "5XvHmVGLKhawiLFrnhXGR1WyJQ7wr6R76AYersKuefmNoQjUhczUYWsyZayAB1KavtuZnDbTfVn4sRR7NBAWY5UL",
  "key32": "2QgY3AkuSTTevaYNxSaYHbZpLDszKLe1g3mLm7aF9dqKiiVvB21kNEtFQtcf4fXgM6KadmUkRQta2iT5HZNmYgbw",
  "key33": "Uh2KrMNszLP2TVqH8mTvZtMMwb5v6qcB9o3jjhR729zS8etUwpGVwhfr2zgkhHuNWAPfZgkR7SDMW1zwyovz3Ca",
  "key34": "2RCVqkWs6nWjt1gz7Xjooz42EGt7BYDsdoZJbZqh5rkHjfdG8E49jw3Y62inzpXXm4bMfN6hZWgRF8pMTT8bAuxy",
  "key35": "aBN9jMm7QUEbDCcyB1ukUsPteTQsJzRHcM9vf1fSCV8Nivuy2eZCsueLCkk1DhufVhKyX1Jditb63h43oPDuw3m",
  "key36": "2bYriRamsBKpTd3upZWwPdBGdy1UpZiu2gtvYvKAMbQDQSxmapVfc3cHEEVcB69B4ASkTLJWu5kmFFM1oEcCNxwo",
  "key37": "pwHCDCYY9sJzCrAVxBRRNhj78iX5HV6444jWxAEX3HtjvujivDw6avipBmNfMD9i9AgBpfQbDCeLe68AeEG57bG",
  "key38": "4fFK6jtzwzxmNKbBffmEZ97KFYiZXsTmKkGaSWzEPzJuRm8VxSreBpf6RgEvx7nL1BhmAV6AAWFCBxLSWW1DvqTi",
  "key39": "6oLAreCxsupPUcR5sBjtpV7a3uLWt45DZeqJLvCAT1RDNoD25mrZpvDqzQxUxowE3zEtFeDGdUePz5Mb323bxra",
  "key40": "4mkLuBx9kPBJePEyKRdbYP8Gy8Qsq73Lkx9u8JPbH7S1ynSZqos5wTAtQLRFRY7t9ZqywsEY8U5WhmG2WJkKgq5w",
  "key41": "4qEAUQYNr6DaoD5Kp2VAbBsmkZRHP8T3WcfBLAAQ4gsJy6rPPbSjujBEh1MGgo5xUd7zppi7RSGHMWEkSpLS91fj",
  "key42": "4Bt4qeQh2KJvBuKbLzzPYq5VC79cnynzHUpke3HSzGWPZZs2WTjJLLTdnS8Ngck8m4JcGpDy8iHfXcbdc7TF3Q4D",
  "key43": "5WvCBsUfDdAAYRrTVuPgACdJQjPjWpX1gP1jnNvQJZV5vkj5XMwTnbF2W1T4RjepQtx7in9SHnGiDbTc9HYSD3vs",
  "key44": "v3Wuy5Xry2XHZZvr9CsPy9LkZNPGUDZXjRkTuG9pfX4gn7aFhKXUp1LYoZcocaXnKAnsy8xKX8UgaXoBEmbsnq4",
  "key45": "3Ni2ZmaohbwR3mFNmP15VgncW1X4sXr1qBepa8grKzkyvMcEEPCajsejRvEau9agNcracweibsMosUNaj8H6vDoJ",
  "key46": "2MbVq5kKBYCGDzaPminhxBkem6DVNFoSwgaduA7wWyX38zQi8ZVEhqWpAKQhqsdt8DXoefjdzAGSWhNixz6c4fAi",
  "key47": "W4uBKLVVTck9eeoVZrYudzVzCdsvDpExSqVVWUFRLFF9Zmb5dcdtbSq8946Tng4rpoMqMdF4Fn9rcWqcCor7mhA",
  "key48": "4nreHGDwpGgAJzAejH152YH2T9PhjCg5yHuGie1ekVTqYbND5Pyr8jLQv6ibxTkwSwQtPW8AzkKucEmjkgCwvBbq",
  "key49": "a7taWEev31oT8iVTCeKqcaNcgKWZKppDAydAWwWoKiaewmHLnJFUAp2zXBPgSoiofsPDz5k6EG8Lt1JVmVQMoEK"
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
