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
    "e5cTt1jMQmJb83UkagMrcza3F6ZfFFhN4EtvhrqLDANGtqTss6DV5gk8WuXAeDwU8EXkQR1qn5YWxMDTZK5tdHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gEWJh8VCz6oCM9EcE1uuwqu2temYsWhfzJtDBWFUsikpEHNtYy1WvGzZtaETpE4BVeD8P2CqGy1ttM7skzFkoci",
  "key1": "3bx9trUCVgmLXhwRRLPiRpG43ceGJbb2YRocDpYo1V9jKSUHVisk2ZdQtWtjZpXv9mrykebhtWbwKzw6LUX2XPs1",
  "key2": "4aHnkvw1bY2reLryfntUtuxqeJ6dBYWyctAkaVspWVKboQCL2yaFxFmYKWacmUBPhMNp2btFcJcb5hQAhjbnWQqN",
  "key3": "5NjTpgxrV8Rp7N7TkJzLDdqG4yPCAgvQxRzdYdh6ghwJDKNutXxTK5kewuYExfCNaHpM5oQkjHEmvieAgMNApLiQ",
  "key4": "5eaf6rcJMjauZohxgBHbx7YYDiVNwPQkPwaJvacPVBSJk6cexSY36KdJ7kU9nK9boAd1T5AqU2VGHEW6kj7KSyUg",
  "key5": "4GtmoF7XwcyEBYhiTcGnfpHRmUszruT5gnaHrtqpVf2zhyKuGjkVKyj8256iaBHswrAGFj9yAGN2DaNVa925U4Wv",
  "key6": "5e8wuqck7Pt3Hw8MeGc77G9MoE6FgVBnJGb6cqRfQskfoZ3BEupJ4jU4QUyhq9qyfQLX8aUbKHJ1YheqsV8rneCd",
  "key7": "3YZdNtyX88JQsuTeKSCFGLAp7GdHf9kHM6Gqu4TrDTpwoGk6edmqZWi7kPpADdhmshVmQYJ4SkPfzexGCYSiWnLv",
  "key8": "4BWJzxfoJ2hEePLbfKZFMuXSwvor7KjBESdyPwbByTSD5CS86eDrcXTau3dSzLF8L1fguLt7yPfucJdRikUG7nK8",
  "key9": "u9VcsMB2oE9ZKvPvC3yPWmKa3po2vAwSvRG7bJbcqQUSsEXqbnQfXrJ174q8yEBD6YJrsunDFJ5iuxD6WLYmRRB",
  "key10": "5yYm4ewbypiw1kJMBfYL3RYJL2moyKquqEfTqtRz2KhxA7oaThaiQbfXgL7AJH9wCZAkeVADrHbtfCn82GVgzTyp",
  "key11": "33wu2tSaFQExcJerjFyjXwVx4ypFGwB7mCjn2SckdFGyo6Cd6M7pS9kjgq15bfKPgDXRLUFwEYGnzKP6Abm93NpG",
  "key12": "57V994i1hoSHCPp28obc2xvVmbbL5v9cMXyDuSyjz3xgEScmoJDWK3ppkEj7FFFfdQQH3nSy7p7MRtCZXJ9GXshm",
  "key13": "3vmC3CoKntACVFUKNEZgWQ8RgXA8ei8EqwqyShymYSVBZmy3ovdMYQBXpeb93gonxKGfjZUxYsipCP9q4EnrPQCY",
  "key14": "5MS1nafh3kGbVdrxxngahujm9izhMZFx9znVbUK6oRk22Kbg7pkM1e6TDj3KWsWKJ71QH5FsViCUFLKe5hEx3wch",
  "key15": "KmNAvkgetnJfrhqw1C8JLttDS6EuPg8cG6kntJwpbmHkVQwoR9vqaKLaXJGjZmrSMLsKPovqLTtQeAC56WsR9jc",
  "key16": "614F4YcQJMDu71D8yGto99MS1X6o96vGgfajAfMnsABvZm7XSdUW7ZxxjnVRVH2dvVLXv3tC2fuw6aqccY5NqxLG",
  "key17": "53emjFC5eaXQPMgpx2RuZmuRcswBxq5mNFTd2QgzcZ75Gzynt4yHYGgdC8VYpdZ8hvMDHuhyANwSMjRcteQyGBQ7",
  "key18": "4WzACziFHKqunHCMqJFdryiRqv39hgAF77q8FX3P6d97jS1Z2yNpL8bUJAmzCEqQ9BAuxJiN4qE4wKbTBry8ziJD",
  "key19": "4b7a8ytfXdH5xnm2aWmC5xdqE8RTtfiBFWXXVgBth1kT1ckz9RQ8a32gh3H5GMZTsezvEEU9vCH8PpvNKGsfc4qv",
  "key20": "4MBE8SM848kHxrQ7NYFJTjTXD2sFEhc5x2YgwRj58ZeukVpDvXusGuK6fEtthqC5wnS41Qv9p1fcCK3UpKEKkedG",
  "key21": "3AxAhXw2GHT9mjPcrfVRBXeq6smnGQ7mXA7Hdj4pj5x8dXwZqcCgeATuZgDJ2fR6JH94tKLBdKjPrcaexjFDtxt",
  "key22": "65zVhAFVRDoss8QE49pcommxyuKAJEN2SwHs6eFmfm2iC22CUf5rwQh5pni52GvZo1bgx4ESqUpPJ6KmtUfHkX8u",
  "key23": "31w7LLDd2wUhRDPcSHpb57Mbe8LFXDBB61VQPwvNoWdu4kznnXzsRTGumdJ7Pu15fZcgBaFQ7NR2f7mL3thHVzxA",
  "key24": "2visXdAFSvsFRUQPNu8d3Lid7dDdK5hNAj9WHttGjwvruSKPkT5Zn1hBVKu981bYUhXvsMQ4VFEpp3ciUpbds7hJ",
  "key25": "46G7gArZmJNJqdb5SJ7orBkhUCnCFeX2u9rerRBz3XbNKfc1rXtKQAERMfjr9PoPXC141cQYb5jMyGSDBmzru6qG",
  "key26": "PS2GuBHi4XkVWpHkofba6MTno12135H8KQKeizkxnP6t2xW3dMPJAbeKbEEH43txBrCASkP5djMiT45Jh57wV9h",
  "key27": "3qeCUrDkVU5f5GAipZiG6z5yHQaS5mJh3FhFQZX3F1Ds4Bp3ak4814tCJ5iBhQwUbz5PsFs4yPYV7fwsiLovVk1E",
  "key28": "5bCRAF9t1Qder4wQUJBe77WfWdZ8hiaWX8g3BrD3GQU1Tjwu3Lb4sDS6BoaSL3FMFzze88nJge3yuaA456j3aD1u",
  "key29": "3XfET7HMBduzodwyH6oUasmpwcLUm5FwkmwNdGE617eXq8dEsVoEgVhVJLzqQy61LFxbFnBiyUHbG61T6GUh3fuv"
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
