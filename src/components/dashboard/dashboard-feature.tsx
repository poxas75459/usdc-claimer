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
    "3QkRX2BUu9Vt8Mq8dwA5NE5u55U6mcUVMKyiDUVTCKQCZZQPLRNdc8BMNDodE2EAbYTq8hJDLVfq37mJ8bE8xt9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGQkBW2fw55hTcyuzQmkWRLE3jv5MnrFbTwXt2gDUutf2bdwp98GaRcvhwPs8sYzC6H193CjhpvG4VzZ99fXM67",
  "key1": "5qadpNDhzCqmHvgqmb1S15UN3TfoUgb5msDmqD8e5njsWP8ghMv3tPdLR6yxVhqWvFY59UgQLhGoKjW8BxxDVQB7",
  "key2": "5HphtAoZBNppB8C2UVSTfdrMziapybVTE2CNFYUqAdhXssKMDLqy2fgDeUodPcSzhxrRZzXXgfHx7GCSAP8n4MHC",
  "key3": "4UAXaVB3RgBcQrPiEaG15vo6FdmC7dQqcqktNdcuub1KxDtiY9ykLDFT72h6xAkHxekBwZGjwYECNvNez5scsGJA",
  "key4": "2Q3yh7d5rdBqKGes72KAczjDv8bnqWQMkr639emoPG5rzLETypfwzv1cgYco18Cg5cZrkPzuQcjcVcFBAsUdEdQB",
  "key5": "uTDBaBWSsuLCDsb6Kdufh5pG6Qd7acwYe3LP33dq61hw9MNv616G7THVknqwUBamR4aqZhmrtDNdjqxprw8G2kt",
  "key6": "4sXsShaiePhDWsSarTMfiakmB3pbwk9XYo5FUPoJYHoiNSUWwCL3YYAz4BUU646zFR2Gopo7Dq4GPcisAUKyDdi7",
  "key7": "464KQvVF8ZAEavW4m3FM42jWnJBhiQBgZeUK3WB8AroJxnofvYBSQNJ2ssAxqajZjNvkXLyw4BYH4Mmph8evf29k",
  "key8": "4PEu5UuW3iKZLfdvLJX3d8QWgakR7ocf1bRuGEhEGD9Ank7zziot7T4Zesju98Br3aGtS5wkixRX8XznDAE5BemY",
  "key9": "5Z1hmrKz6ECs1viP77gK5ix1S1DGMCb92N6bJew43VtPvM3SNzkK8eMh4FEdhSvZ8CEeaVeatPwVvzgFX6tEnZLs",
  "key10": "5CdmrJSGkchhxx9FGJrPSHbaQP6Xeaw7Jxmgj54j43QB1HJhRDkCSyTVrP9KVKgzjmxPteVCVMqUVgL2FxpoqPCv",
  "key11": "3DDzxh7dbXJR3hntvEgkaGGk7siirj4F4Us5yD8dTtgnVP3kmmsykVESD2stVFsoHRd2vugxEMtvANGfYjGagqed",
  "key12": "3s5dcyuT7ZzqiXpAF8PF5E1PFxXby6n6ngbQchp9x8KsaNE7H8DHkwceBbLHDYH1SMgurVcpauDkQ6PApX69nJry",
  "key13": "2GHSV5AZjyCDtTuCPA5beZQu44PYVtnamvA9JUECHKCTJHTLHwygF6HkwL2VJsoaZBCp73cd4DorcTjs3Ets2uKg",
  "key14": "XSUQdei9Af7hp7PFk7c2feKBYJWm7nPTPUy9unnhfJgLuPg7WqMqPVQRVdcsfWXeqwXvQ5UYPWdrmoLsh386LEs",
  "key15": "2SwzHgok45Ld8JyZ1FB5TW1a5xihWe1yviQGY7B1QRwrkZcT3Xz2qGcqtmusiiNjisseGM35QJKbdfKc8xBpy1bu",
  "key16": "4PDYGbbjAEmE6KvdEXtjRi8nA5nUnAPE66gUVtgG5xK4bgRm3MB6LQF9UT9Eyyjr5kykW96KLUF72xbWVCkpwHLG",
  "key17": "4tWfkmX6P7DPRfPEiqgmRKeL488tJow45RMKn8i5Ti6J4g1QQ2x6g7TxXxA7HhUoC9zdjbTYd9pu4evenxf1VgzX",
  "key18": "AYFxErG6rxqJhYPbtHqeawnLpeNYzPMoyW761UoVjpmDSZWieDLRYYDagQTjHqi8y9gMdJuKFBcshBJyzJF4yfQ",
  "key19": "3U9PWXdBiRCSrsLGndVgnDiuDZYgCUhuQRwJGWyjWiChy84gXs7NL7qxDCqJyciraSo4tLFG7L9TS71xT19rKPLs",
  "key20": "4C7RuY1EnYaVPG5LCt3iQNJvZuixbTWzcMinMJ4Leqqfx7vmc6S4ND6Td24WDevxNMvmXyS3NgfiouTiDanKpENT",
  "key21": "4cq6yiLNXuaEJAF37g7JpprAWu9k2uoNoL7g9cxt9udCKaPByDnDeA8xCerBXGyYevXNwQKdPz6o9U7bwVTgmkoy",
  "key22": "35pRBVAwhaTftnhts8Hrsvq3Dbv3x6uPJaFstKXmu4ZA8WkP8tcSRBDPAKFQwfQx6sYe7xHtuNZoxXGdkxiVHUTs",
  "key23": "4NUW5RieNqPK5LmS3Mo49Vo5fJSnRXwcdyKaZ2STsYkjrQAotuLzamQKyDABJEAFkRzqLv8kcHHnnN4esfD9ZnwJ",
  "key24": "2ocsm9HfXSvMXPWzQXkB6q7hQ2BhW35RCzA1bQiUtsu8pn421o6kQ6vjyEcJgLnHJP5VxrnHDmWLMzFLK9LfoEUZ",
  "key25": "32eh1p1C2A35Lkfy2gqbFwr2FpSCF1tcc2g8o5KHrFYDH1GCVUjhNs1SpAF1gqJ7zEG5mnUQ4EHYRJrcacwzBMZ2",
  "key26": "Fn9bjvP1ynx76YmksbGYctzqNKaQyZ8eCNzEVSJwE8Ymjk3QLVTsAToeyYoEz8An8nYNC6yKq9Kup2t7YCN2QNC",
  "key27": "29apFudKfggrdZK3APRJQFz8M7tSYi5qYXzKZZG7Zgage3jRDAZba1vziVVABL9agg7Xnt7Nx7UuXzR7vVr1MU79",
  "key28": "kjfGD5sy3aoPCGMKRyasLMVvfY8bFB5J5tfU7ryRSPmDch4BnnjLDMe5hwoiBmCXLhRv8cBFPJz8EGEvRMUhp1R",
  "key29": "5X4RUriboZoUB3BzEM43aqmS3vpT4RF3VqeFSMQehzDusNuJQ97xn1YxXUoQkhGEPQanWCHje6mnenpoRduHDwUL",
  "key30": "3JWkDUXM3g6hfn4oRsW13QC9Gj6ngNpo7bZgU2NJ5WiWDRQy7ih8PFAUBBotqXuMX5kv534umRhynBkqRVPSTeFC",
  "key31": "4Uqfwi8NMrvwi9ov4oTZHr6jyVyjHmeY94pUbTzp2LtP59RQ5ZTFGYokvV9N1JfwZm5f2wthzFJzuTzqhYEqUVsV",
  "key32": "4oG1GfcMyDwUVPwfcEBRJnaWdmM3K1U4F5PLvUEUKYrB2fQDSf3LpqMBiMRYrHw9o6ftEjatpYXG6xTz98Sd4mqU",
  "key33": "SHEcCCa7NHgowPCJid3iT642TJP2fbaDGhkq2w9i6uhsBwbrQ6UPAddqRw4gJY2mEaeAaPBLiXqnyES79fLFGVx",
  "key34": "24E5EqPMS6XLuQZGRPzVNEkLqQZo5WRu5wBPu5BszXCr6XSnxMebxbWE5qjtxd8dDVprFQNy3PA2poAmCQEE5im1",
  "key35": "5uJ2PCzK9UE8MHGR62qoTRfoXJhwf3ZWopTMLZVQTn8XTtyShHS3KE2KA46A6iTSbn5GNj5i1JZ5mfDMPWmJWr32",
  "key36": "4muMjqkADtqghYnb4zcE6v1r6B1RAUtnvjY5xtBb6uhmLCyMRAearMMFs4CKFZ598KS2ytPpBWQnuYF55C827DMz",
  "key37": "4N7fBNU2yHpGjXJ1hffvCv5ig7GHUZU6XSFiTJFdDnWAaa1zary4amXfXQJMao9y4j4qcYZMwx8MSW4MYNAekLeW",
  "key38": "35SaxygSQ7qHd2k5DfVPzbuFNoehGFX1pWcUNxDwN9cXvhKa39qBHhzUz6nZHyefQ4UZqZYKefExf7AC9pEu4K53",
  "key39": "3EQvQXgpL2VPzbu3VGCuB24JwMagySvAS3LcVmNSkQGqhwRTB2vuf8zv6ATYDX6ub7Z2RAoM8BhhJa11FgHGRHDP",
  "key40": "gSAjQnCeZohyFZ92UZQpTkChLChMkR5mgDGsmupLfePkmZZJRTFZmp9rsP9KThyAiqZVibYUhJMaC4LHJVdF98V",
  "key41": "4iN9Le1a4eGt4uR1a15SRAr7dRzVCnvmWGyxNpKcfcVYYp7d7wGf4ur5zxi9oSWkFdCqpZ6ZbvHFrSUqs8v9ciu1",
  "key42": "3UCvNYvSADm4hBJqcbCcwXMj4JMSHAGfremP45hwHgKB2VvUGZvT5ygiMHQ58smCcrjipb2oUbVNQUiUsNHi3v1K"
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
