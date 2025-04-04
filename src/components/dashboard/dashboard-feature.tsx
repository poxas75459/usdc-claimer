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
    "395SSiTHAhaCYC3c6zkL7HE6nDz9w2vXcn2ZaYniNRckkVtuaFz61JBGDP5sPedebFMvoVHikYdh7MTpSDsSJYXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvAhGmGhn9f7vdqvzztJeJCkShy98Xg8ivT4SB2feRa1HGtSCwzRnwZE4UvkCJ7tbtssSxdvmBwLmuuEfSH6315",
  "key1": "2uesnciESZuJPbbv3JbG8XjTEtnFdwFEbP3XHL8SxjmZBBkPj3zYKtkqSFMjckViwDAPTonVJ8eumCLNBVLHeVfD",
  "key2": "2ZU1UaJXyA7tEp7BRnbZUnrrpCExeC7Zw6JzzwA3TteBgd5z275DuBooeNusbUTJFHNQG2DHD4WAiwEqMahMEHpT",
  "key3": "4PmYWLh2CfBWTHhPeBt4eRKURzf15ik6VofSMurKXDmmnfARSKiJRzYGF116DMVwCm4Tfoy6RPc8Wbp41Ga96oDC",
  "key4": "4d8UjhQGAWjwQDZ1MQ3eYRZWesBGyYeheW65kjWZfuND5EytEoWgcJsuwd8tXChc2s2LVbT4KTiNzeJCTURq6FQq",
  "key5": "26bNMzmSueX6kg25YjPn3U2xfHpMJYE4Pxv9VcqX4hRuYf5YBTCmLCzMmhbJvP7kkQDihHQ1v9Fivvp54FJHWpWu",
  "key6": "3f7FYcE5cgm2ZR9U8qiL7C5AaasYGC9yEGNciETFo93iAeELYb5n3Umy3xiTXJbiPFdasd7tF9PsA5zUwwzFpbRr",
  "key7": "25uQfRHSVjZserx7nh8esftDHsxxsASxxhSkrGYd4ePa54sYkD999a8ZuPxCGtfNN14446XxgvW79n2cdYi3dAey",
  "key8": "TU31ZTv3d586X4jWUsphNraGwCgRpzSmKR1vpSa2JLXBNbDNqCzSemqk6oBHxw9vSye1DQfpqkN7QN3R4xZxMB1",
  "key9": "2a3XN7qFfi3Rjtd5gnEGXn5pTbArMJkbdYsbzuk6k54N7KJPFfrdLLorcP6dCdDjC572Y9bZC9FfqjJUn2qKs6ey",
  "key10": "36iHSrqrFjJKx4KU5uDohWMs47zS7E1L35omMrhEcNw1mfT6yMRAs83kVdTYKWKxKNQfUPcH3V8HCWxE6djvg7C4",
  "key11": "p3NXhfX7WuyvspQES5PWpTtPqs6kjK8PLsuCEkCtLTagttPczBbZXtDBVadRvbEzFjhhfgy3zBQiPyBqY9D6UEs",
  "key12": "4igeG7vnCYQw1mEtvRPPBgwzWnJQfnrVchxfaVNVHqJ3xCBULyZAY24giYVo9HpkW2iZiEHm6h83Rr5ef7UEJWoT",
  "key13": "5tTguXryQENREoaj9mJibFL1SU84dScJopw1KEcbxoSyBqz1SLqtAtgBq4HEKPgRmTLEm4pvs94XZNVDSfwnmT6P",
  "key14": "4dnqTeWGcAWYrpMtHm6tjKVbvX5oDA1vuRGhmhbabJ7xgNNcNymhUEoDyYwaPQhzuuXmkfi6GNoykFUSWKAQSqAe",
  "key15": "5n9bDwqngqQUgSLv1zP2nTiM4RRQd9FrpyU5xAy56ZxZJYE6YjQ6vdYxRh1EVFAFVpL7NusNDWQB4vr6owtEKyE3",
  "key16": "4KGgWUCoymZfrUn1y66yshqDB4ywP83E3tPZDu3TJAzM3UBPcB5aqYndpr3kudwqtgC2N7ZZZLM2fu44S9vKAcKn",
  "key17": "294nN8q1HoNSeg3q6P1cC5Yn9aCCfcfRQih8h5t2TsNWQvqEGVMvXuksunP2UZUgpoXoypdQZyLKAhZ3BE83g5sd",
  "key18": "5EnSgobu95s4S9qWGuMT4AU3UPwzPseQAhxk52JtXG3SWpdqNmNLP5V41jdbs5P1RgR3nV4gKugMbtkbFqhBK4XL",
  "key19": "4UTRegVTNy3j5aaPJtuFFj8ifDZu8AvhXZuXPmPQK4eN7XFPHUsmk17VBUgTdeepYtqZfHY9Suhj5iBknVDY8x7m",
  "key20": "2ABk3fWumXbDg4Bv68uqNFY5qewH9aMtkGFxgDhUpaihfq6k19Won8aLKSKagX9AWNj5fUq1jQwWsHsk68z7WCsP",
  "key21": "3B6ynhRo8PKCuvTfBy23PshkUhdwXEvBwEVt4iwTtkep3RvijdZozUdSFYLcBKkLBpqdVuam2pfvUdqLAHGe5ssp",
  "key22": "5aVZFhC5aUPyUV3ZzxwFC169JBPYg4ddncDdr8idCLiru4q1JsNJpFLPS8Ns8ecrVNC4iw4iqhuUwJUR9Bqyd42S",
  "key23": "4onyCKeSEF9URtNoZMcLbJZxQhhA4XCbgjbNyzmQonHN9yuaMLpAhfvUJohBZk2ZZMz3SS4fPhyQVsgCtmxkaz9b",
  "key24": "4Mi1ajdW2cBth28qzSP9vmcKGZbiwwebS9XDVz7Jn6Nf8S2oDuGjY4BzAN2fY2ZrXw6oE5gUEYCULuJd2aiw2QEq",
  "key25": "RWhGEAvroWP1e7VwNXC6PAT7BowQ1iMGszD3JQZAdBwX7gY3v6toRV1hTM2F1oLpw2MhFNe7ope6Qe2NK2otFex",
  "key26": "VYVDEV8bAVm2V9MznHCSCJEMyDrJjshNqLZJUoG7j3BJUPR4QsnE8c2SnKCcAUHAKXkrrWWEbBgiEoKHUY3VMdB",
  "key27": "gkfPxn1rPA22vUEijPBD8uvwHEtrDHQjjwkfksVKEU3iAfbW8p9jzqGhNL1U5KxdRdyAUx7ZmXvqYX8BHhfMhC8",
  "key28": "48ft2CcAmoTtU2Tvv4S8vF2wd2Ve6f2jRZJGmYcMn7kFiDLcGkxrrMdiiq5tebzRcosaYqpeasXx7vbSGTzbHH1u",
  "key29": "3veNYhYDMTbcRznEBeRRGvxbwo8kTv5Hjh5AYwZNN5vY2DtJxwBUcyRiBZCZvJQ44CA3eXT5Y2q9ayNebuc9VPTd",
  "key30": "4PHvMjgzid8q4oP1EUy1KwdnzyVHMPSM96yW7BwotgxXnTMfLu5bJD5QVhCEHELABWsqcxoVEnEzsfZkFwJJt4oa",
  "key31": "3nRtRtcWSvQHqBwNXk4giYVzAsL1gQRipLRJ7aE8gwEsih2zP3PDswRU2zmbGWzVunNXo8BqTJVcGvp4MXUunZFt",
  "key32": "ncVgYm3b4Wcw2N7RC6hmt6p4feCDCnpeH15cdoYeyddYxGqrDneyC7Z6K2LRZ3KkjTHJxh9V2Zfx3LcPJrdnuUa",
  "key33": "2v3Fp5TWdfrD2UBHmVVhDFuF7RvVCq9t4wZYBaTHbwGHjxQvFq3SvWLUBfr4HZBXFwHNrTS3GvvbqiDqZFanKHHg",
  "key34": "HuqHJVMVQJmtb71RfSSwtWsveLYAjqgSafir3gCF1rMXXtxG5KVfmmTVne9MbkAHp4NMNkDEEvCKzvkxPzhgrGq",
  "key35": "48GY6oPBR6qBkKaoeqvB9Ck9HuKzsUMpB6CvQctoco1JyoypdVeysZVNWDt71zFXeNB7bwqLn5yfuTNThrdysHKZ",
  "key36": "3yQ12sbGoC9qCxc2VPd5WzdewuGzwewVXCRSQi53wWQyJJ3iEQiywJXJ1fHPyHmVtQsTC5XzyDeGSA6dyX8fzuDV",
  "key37": "FkVgisXSnAeGdYM5KcF1Capbn1o17EJ66YttB7tqJWWuJfs3MTXh9JWsbEEZs9rd66Rftz3K8Cv2cYBBj5sT6YY",
  "key38": "RvDTxMNd3zCoPzYNXwjHmCM1fjrXeDJPdQ64LozcQcx86XCujBGEKEgMcnicAx3Psoymno3v1CUtR4Bu3re8r7w",
  "key39": "66vfRHn2acmbt6LXF5hgQVcLamBGsheRDSBPD46WCn4YHCT2zu9mLzGqLDeT2hFUTFhpPnK7NCX2t2V6ofPJ8tHy",
  "key40": "5bSnJ2pX1K7SaSWv9YbLs2KQWwuETtkUh5wjyuQKpzm5DBGmQ8Zjb4PConG2MnjDKMktGaeNbpK2hrvAzwz7MhuX",
  "key41": "3MNQKEKmWAbJc7EdHGK7ZDQTg9j59aNyDaW8wYCBvQTvi9M5hgEqLt9PjESZbaFxFf1FTKrVmeh1KFQcQ9F9wHCN",
  "key42": "59QpVuPzgfdYAQRCM4jmYbJkTgFEB5oDwDQGxfQYiVQAKhAKWK2eNX7SDkMPjkZuH3fmcMz2uL2AsqMcvqvnES9m",
  "key43": "5ZFffL19rsok93Fzo7R6cazEaAREXDZDJtUpE3QkZ7mREdE85bjd3bH7tNi2CVjZr1riyhceRJBD8xUeDp7vV3yx",
  "key44": "q65aXtWG8QL4kg7XydTKaTwfj33PCShPBuajT8NV9qK7Jxw4WWeFgnY3m1H4qT1y78cKgordZ11FobnRZQAiY3X",
  "key45": "3fjQPrQEoQd1XNMYLYcquk85jctamm7Fs9wgWbVbcLxPUqyGoscE8JN8XYnx1YSPN52PGefZKzSnga4WThRCiESo"
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
