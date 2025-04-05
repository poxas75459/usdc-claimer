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
    "2WyuhJFQsnMRz7diaSQZf68EqsKechWTQUkhjth9ePyfhPaXd4D8X5BSrGADsi145zJxW7Yq1SS7bLeri6ppZkM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29VZuad9QZ2csWqmerpge5c8j76foVHa3y8hpazRUzAC8uy72XPnmPiB8KoXkYXbipkekxMyv1zEiJxnTY7NK1QY",
  "key1": "3kzP4mHpqqd2FKpHxsf77ztrK2Y9zQ2rzWF1ncp6MzSn8QPgxp1P1NFf7VKuFB1tj8DGQUncA7ojA3xohRneyCK7",
  "key2": "4EuAoHZM7iAiLrm1Fb3aemLsavtprxbCW2tK64fT6E7CVDN1W8ugFXFuyTKmcM4j6VYzLDs6XKvDbDbGJE6EFDNt",
  "key3": "4cbZCiXc2ZYkCyo2dfQ8F8kYjUjzwFMCwToGroWRmsw4ZjBJp557PYXu1tDqpVike4zohSPDvoSzCnPRs5DcLccV",
  "key4": "58VHrNRYQA8sfiRXhdfCbs6NW6KfwSskwkn4X4MiWNjf3CNbTS8YzgV6QmNK4awMX31RTu52G32KgMUb5PbdCgP8",
  "key5": "53rq9paKekEQKwxfVJZptxU65o2vbmPESrMimj9vtpiyYh66yWPDYDmd29Ppj9YHNFCyWD8d4xupA3RpqxXBCKkp",
  "key6": "4htS7tgGYw6ARRB4Ag4BKm4G3fUnQtNq72WpN8vGRybQkpmedhCCCCSAU9MfUtcg2Kgh2s63wSksCzwqYf9vGi4x",
  "key7": "5GUfxJvRA9rZW6jyJt4RGbc7SLy35tq5bEppok8CPmRRtZm2ytbNunL6pTPbMjhhrH6jkYyXAEh8nkffWSpmjgcN",
  "key8": "5LLBnDNpX8N41HzYmHGeyZjJnGA9a1Xo4QHN2ahXQ7imiVbtFtLjGj7TrKRX8RSdfidurpspQJXUc83Z5mhhM4F7",
  "key9": "EoqaA5MRd75LB9tDTmb6rSLD4qjrozfDcuFv9dy5zwh5XovMHsBZ7ZmB7BLBWTFFoK66vKzMGa9CGsLiqmJZRQj",
  "key10": "qvDQ74AfTu4vii29ddeDeEACYS9Kfcg19EcsWBfyVGDTDnzvFqXrbs7M2yZk7x9g1Ec2yUsZotmrxxeA5ukFVme",
  "key11": "2XFJiVagrnEQNtusY1c2VcFdxRyED8V8SwRgdMf3fjPafFBJS865uHg7sXrhm8hU9rEKDxVKKiGbsyGbus9Jy5Fe",
  "key12": "2G4Q7uojtf3rQGEfXr7RZVXB1NdGXifMg6ab1R3aucdSZ2bMR7uRs2A4sxA19ns9cDCUtsWtr6kWz2Xt3FmawFmH",
  "key13": "3cqCTpiq1TZPX1bomHYXJfCfReStDYkzz75cgSxJJfoMcux5HXbTah1S5CThzKs44uu6o5idahaAEom8qKq3TBoq",
  "key14": "h3tL2oywnq1BChje2JResbMb7hKn8CfATz3eMx2VsSC2DSkK1ZC7zXq4MqSubt9uE2ULKusySC9bddtnmSPwTVZ",
  "key15": "45NiXYSK9zpBwWtAvx3QsFzs8d5UY2R7C7xFKzn4t3ag2ykchGoRmz45RZS9cFEUCLnyzoom2Z3PnMkzWU9mMXuP",
  "key16": "3xjzMniS97hrK6xRCxNP1CFjw5mnMawDdD4C8ya3FDTFVKzXhC7qcRPKwC65ZqsuU9X5gVwBWg1iHUg7tKLN5M1M",
  "key17": "3ZWbaMHEryuTuxiCjBeNxELxBU2bE5ofDKFvyxXMGEYpWQE5e5NvmN6ihRSFNdiCJw2dyNJPkzsHTgeYvqCrn1op",
  "key18": "2NTFc8MbGATsrZ9PQJJC1m7UzdoZPA67354thgefUQa34DGXbCAstpnzLNZNV3vAXmYzcgmHRhqzzWkm9SAFogqm",
  "key19": "313AUQDdghVEkbe7FFKwDFCP7b8nvPiDK9Z9FQQkCv8vQL7PQeBBJCzFktT3xuAv7KPeQ5FqLoaf41FHBZkv6LjH",
  "key20": "2taerWmEtHnsSQQK1JzFRFkjKqacjqAqg2FiXHQy9nR18xNxwZrdWhrvP8pTtjyc5nufDpB22JbUZfRb4kZnbRUx",
  "key21": "3tUxWuLrse8e8f17HHHPvBHa3no7rL2xsySmAwvaTAwGBsoZNcsw8i8L3xV6xBNnBb8mwk6ZT34fpLR6XAw5pwD4",
  "key22": "3qJj3g4orrsx1j826TykHtzcfVa6oSycgg5bXFpKp6DzMvmR3eWZVv1emav6y1bER16LA3G98iJuwvwJrYPvQstH",
  "key23": "23F2BTjJkdd827FTjGByykGPuyk11sCG1hW77bijVy7zh988V3DSRFRRtf8NwatUtwhD12Xs8mXzVvqpQDWZ7GzA",
  "key24": "7wUZVsZLnV7f9ZvGu6GoprjjniafBpTckAMhzJpbV4i7fmGndShSes5ihZ6S4kZfPJHgp4JcpkBrJnPGk5G8Cbf",
  "key25": "5y9tf92EJAn39faVbVJAvuxr61psxEMcEQ5E49LtSJnxR4vHeJav53dkUJ7orKMLbjsP4GWDkyAtpytkcephR2Q4",
  "key26": "54Bx8hiwgK6xgaWB1FTvbhUpfk526HVg4LTkGCzdktALwuuajKx6GPpZo8Kag9EWVHCskiz9HvBs76rxsktXFUH8",
  "key27": "2Q87YKG2Nb8RAsRzt4mp4Dki767YjhRJdsE6TF2itytuN8geX1Ld6Xmn3Dh3n1gVvmD7v7vcUYgKT2aCqyVhTtGf",
  "key28": "5swfjvP5GhmJnsgKxrNdsx265GZF1kNzvCgxHtwKeFuUMz4W59yAvUP3ovBeVf3BNSTGQ7kAFDbGyoivaQJ971Nq",
  "key29": "3GCWuTzEAfJV7X71YkCodMBx263XrTBfLnX8wXG9iaaoqehRTYgzJguQWJDV2cvN7XS9gz6jSWfUF1da5uzRgRE8",
  "key30": "2P1h1QLtRRX5FoiXCKuHR3xsAkEts67Myz5RKkN2ppK9GjMQ64JyCcjyLkM9dNvknZMfjSzzunhKuG8nAGLZfzKH",
  "key31": "Mp6dRJ4cE84pKmUdW7mATSf9p8djmepXsthpzBH2E1pfMwsRaSMLFLvqDYJ4253bUF83fcj3SqVjVr9seYkRUM7",
  "key32": "QMY4PY7QX1ThDrHSKpbSYfp9Q7MUYzo6wYGr4JVf3HAg6NB6nwomLQMiE9V5WAZpWGgbcE4MfZeDfwW12kboafD",
  "key33": "3Yku2DWRkZjyGG8Ax6KgjtXbRKWzFHdAgJ1cBWvTCaNAYjAEZD3S4cMyyzrfGsBoUdYQGgX26H7VEB3VquTN58K7",
  "key34": "3c5g1FqEfsX81Yh7MCbJbG8TcLpnp6R3sYoXjiQtnhGGjrEdF4tfHhauY1pjiBkoYM1BRGZdLAouWzdF7F8ejy99",
  "key35": "3ms1ocFDyRKW1GtNsPCkxkaJPwrvGucbQMUehHZAbYQEewtVE1T28tYMv8cLN2zAkHVTeGjYMXJpQVK4fVKpvEh9",
  "key36": "4FCLPopwcJVbkbZBcEVH9BY5qZUE1vogyMC1SP6twEuZaroMRNaQGHQdMHD1wMJST68dYPbj7Xh4K1x2Ua4v9NCG",
  "key37": "5EzFa5Wexji2kRLLXojauAUBw4M5RKGbDT1KEPDGLJNtU1T2CBW6sjC6Jcp4m3V4B8ZYHe9Ak7d2Xsh5qESCUovm",
  "key38": "5YvmqBKrvoepXkNc4YBUC2zXdJ9xpsxCkei5outy9bwZ5WL2ZE7wEJxghT83A8hgTPQeBpaN6CtZsh77cXXrxHqy",
  "key39": "4buhunF5sfjnfKixuMUDKw7cMvnjt2p7ZNjLqeKkMWatagTFpKpDJ2u16dZWhEzvTeCK3GDAGSWVstKqH5DBbxJj",
  "key40": "4V5KXjatv4ABxnmKw71Sq1gfaS5JTjn38CkA6UVVpTbS5Kd8CM9JjjSXP6sjpoK9yobAiuWb5W6FUPjH7gnCpy53",
  "key41": "4hRyHaq1THhrE8h8MBFomJdYgGYVDC3MR5yq63c4VnoSfmStnkfyy3v8VPjegpDh8YoHkkH1keV8YADNMbv8vCM",
  "key42": "5FfmevzCAHHbXKviWYPQJvHoL76XoyWnubLXRB23rT7bCbDje7HQLZKTDX6aMwiKUDKEqUgaEvkTGFTvtC3DbKXH",
  "key43": "2ywEQSnXUuphFr5UZKaZwC8uMvCL7FN8BAZ48czYxhwnTi8iQkz64tAkv2zrno4A65oDuVvH3B4ovn5vF6SyAnos",
  "key44": "4guxbLiMYKSjW264YzXTDHad111XPHxHKYvj8aDKUWRBr4FG7EP5oW1qm1Z18HnrJtAZzWmSa41PpMzsmybgHiP7",
  "key45": "2TWsjXUvHHhhnihoXSLWipxzYMXVx87D8bT1xjQQNEB5vsREcKciiuFL7Hy7er4WAdvm9XQ65juvHdfnXhbs6Fbz",
  "key46": "2mHCBzNJxJXb8aNBvQdaE14whsBE4P7gZEMUXBCxvpQBU6QzodDrUDajYqXyfKe8QMmNvUM7DtAcjJviQJCrksR2",
  "key47": "pxizYH2b2TAjoz94cn2FgoW5d13q7ysuDXAoWNpLzLrE79TEnWVTjek542aVVg5AfTFtDX1a9BUHeSKoD2HBoXX"
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
