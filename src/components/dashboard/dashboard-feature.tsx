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
    "5pkfDXQzvuLjk4yiTLfL69CKQZGdVzgKJxwkS6eHbv1LQd7KRWq1Qg2GAvYxGXixehGzKDBXmnDjc9LC72u2yCf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmifXzkYcvGrbZciNELpgeoyvMPwoJKGUPkixXywrYEqVY9gFBAZGHuQJuaPwT5K8SGG4MwQ9sXesDrpD9xyuJz",
  "key1": "4343DTxCF2PW14K6ruuiiQGxCsXzuw3GJ2VSAjiSPwHsZV5L88zUcmb83KVJN5KoGhYie1ji3NpsLE1a2DmL7Wmh",
  "key2": "62enneG74VDYALovEZipUHme2PbWVg8DY5VHxybmbLgPb5uukv1brt8wKHuiPCD1JAxt5psYLUaBvw8MNLtLvfpe",
  "key3": "2p3gFX27rGqqBxh84YhVU5XCV3uobRBgKUPqbVV87sr8pgQQepS6aPACMmWyJ5ad4xt36mwy64cWbEQAFowFv2n4",
  "key4": "4DZ6SEVtbwJvzVaf5bseX7QKbcdNBkVtqQL3qoftUWzAWguE87RW8SswMKUywxSaG61zkh2CgNfUtSFhwH9xUgza",
  "key5": "32wsnVXfJhcuv2NLcQJX9BpUz8qXkafCeXj5iva3svtwgiuzHGUphLf9gcNgA6bue4sXHd8pMKVzUG5d4g3EPG3q",
  "key6": "vh1yQhctitSqdiuni64zNhPgeyqU8DN8jAPDqVvMfoGsd2ZiESbo6R2d5NSV8ou6TCwahrbv5svtdFABXyEZGqy",
  "key7": "5Fu95JRyHYrnGX4JP8oatVgUgpfNDqqP1UdAASUYmsH5L7Psquj1w4v63V1GZXVRRFfr6GWSn6uNk7iWJLgyrnh8",
  "key8": "4YSKVfsZoXjyYx98Ew3onL4rD5Gv3uTcrVrDCSs9K1KSVXVu82gsKQUQ5dLuy8ffgBLHymcziq7fU1WNyCWtE6u9",
  "key9": "33BvJsPRYLzgebfheDUqP4NXVRrdv17pjM9aXfgQAPFMBZxSLQres4EDeENxqWi2z9T3QQjobr22kukrFo8nRBK4",
  "key10": "5EXcME98h8zaDkLntWoYNEQqHqtiJGC8fBrxgzNRL6cCVguQ3d8fwyB7FxSzwoPmccqy1qiomihKx7R1iMTgAveL",
  "key11": "4Di3wtsFCEAoaFEbMZYx19z3fRRrYoG6vFzm2V3K7hqyg7faoiMKEYCAnooBywiTsWAXLhFMNjqZ4noPxw5ugK6k",
  "key12": "66Bx8m6F4AhDxpatB4RDZ6r7tQX2n5xgH6MVMYNG5VVxCqg3MwFPmCZeMhEWd1yJrGf9sk8oJY6ZwzSZF7o2h6Mu",
  "key13": "23Hh8GYfSDzWNuvymE5BrwCLuHzYk493VpeaK8ftQS5TYYThfpKvMMoA2n84QhdFwuxb9tFcGCmSCVUPKTv9z1pw",
  "key14": "i6FRf9bYDGziF4u8URn9DReQyNHtAKvT7BPXVpvr7Agfk5488Qb7zge4WApQeYN3oaSKDzZVWes5mjEQuahjeTE",
  "key15": "3PMvB5UKanQYXzwfRGgM3whHgnA3yQYvmWPVMDYT9WqVRWbvVyBLkthShZjdvduQhvhZku9E2kQsfiUU4YDTSXTj",
  "key16": "62qS43PzGdMENUXkrZnoWg76CEBF61fDxqUJmwtc8kDnTkpCpwJYPzibKDdc41HSvW6UJ7SAWMEKwUhRssy85T7b",
  "key17": "2odPPArUBsMD2BuTgSBmDFZuwBVDNvBtDLW35TkSH75T4YviuLPC8EMSQKQXtXubEd1dSqpqgZ1K4QYTman3r1dk",
  "key18": "3N3VzqGqYSVw5W2cKFXBdXHwzhcU77C1RSk6YYthCxwRM3HaW7iejrPM1Ffqp3Sdmzq5RN44RsPyuVjDiq1LJoe8",
  "key19": "2saQMPNgCcRg8EU46aAjbaDFtZRjdhxmFcqHHD3qjUyVZahdGV6jDzcqT3yXVVXmUJvgKVcbZ9HQFm4hjxqBFhRw",
  "key20": "3WV1BUVUjnehZf7N3SfVKAemiU3hKCipaTFPsjpVgP3qirssAYZvviMwddyiLaGCvDfh4n83CNrboi6WFWyn546S",
  "key21": "ReY9TMn7yLcmDDpJ6K3WqBmGfkHKgoPGm2jqugSmXh2ReQVZ8q9Y1FCsndoKhEqyUA9bfPDJcwi1ASvFFiBBC94",
  "key22": "5p7EsWbs2myQ3Xj68rFhYUP5gMUDxm4YEFzZSrgC1dHtXSg2mb3b21VpT6qABNUvY4CJczZnyzqdPqTAr5tTDyfi",
  "key23": "2kvEuEYhepKuLvK1zYygEg4aJ8bjUpCrTtTN4zErEL9TucNuK9NAXQiaaNDQD8tntwYBGfCrK483r6SWgp2XYvDG",
  "key24": "4cpnoC4c9duSQu7RzQW2dWiPC1ALgkKqXRS42YBap2noWi8SDzP83nHnCRe2xoeN9Dx7v8URpMRmXLVnBLmC7XRE",
  "key25": "vBgEnB3fxvQThtJogxLJdujfU9f6hm1o3BwePLvGU5imuzfxVfxyn3pMLVag6Svk3WkTfSFnLDrHtkLPRQVGnhR",
  "key26": "AiNntpE8tqd9KtfZuTZWKMf94gkJrWDvjVPVgvdBqDCAeBrGvtyo5rccF7xwe12J5YLh2zV4kfy3cihKMDsb5Y4",
  "key27": "2dEwxV9Cpw7q3qa6d99GQHcE7zjjntEMuEPuLLyBYe8XvFbPnFTQYjRZz9yHk25VuctBnrKsJEYRd3VsRk45jtT8",
  "key28": "3KRcMWKB5Yi2wmqXZGAStsuiPcEnrcC5M6AkdNmz4Tj9x8oELNDNRZgnvoJCAn2oHLxaCee76YwUTDRGJ3S9eNkg",
  "key29": "4sPdFF8gMFchcJQMQhHUnhiRzibmQAmXDn9hHKAFw2Upy5wUWHTuZN67mZra7roJAUSGrdESBwp5T7WGSgnVLPtg",
  "key30": "2QJoET2wc8juU5MKvRYSN8HDKSQ6onHuq5XMzHHT7qxw88NFn5xWJKQv5v5aUoiWpPfMieTnBWPk6X8ZdRJtpDfQ",
  "key31": "275ZEWUGodC1w1G8fmtviHNTjF8fayiopyFwLFyw8xAiTA9HH11mQvRk3BEXmsQkM5DPdujEnrmi3XZefqW8Lktd",
  "key32": "4b7qCrqninvEMCMiQ7HVfW3Wqp89aJdMAHrTGuGzAL6tNjFv436kfAcKccqfngrz99266oAqmsuTTwyr1Jectuka",
  "key33": "2KzUECZLdejr2jcZM1LTsF4aEYvp3m7bYDu8RMp7gjuvpnjUYrFb5sxwGPuokQpGqcweZ6cMDvCC7vAjj3H76BCC",
  "key34": "3Zn7HafRdFBAVxCCjUhgSDhNCn3UKw7giHU48hQKyB4LsWVAtzTA1MZw4Z7dav2Df1SxzrD4rYv7HWquxsJL6iwi",
  "key35": "4NsHGH51Taim1QKTyyyUP1G5QrnMdK6VbNLSgZzLQLKEqTUqJ1zXA5M384LCnmqgYhqPs92895rtuDhSzSk74Lc1",
  "key36": "34EVPG3VJGjbJE7NjgRWTd51LQFY8L3KBLrb8Tzk9hy8rqLvMRNzWzXMfNq5M81zWFPGWAFz2WvEqQ7jVrKJnFaf",
  "key37": "2VYB13hmrX6E9Z1VRHq7J4QWFt53Uj6Aty296T9j14vEwi3Un5AB58iV5QjRg1dzLhLZCk7Fk1nZrH2HzF39ZwCy",
  "key38": "3dHwhJqqzeV1DPUPbM6xcSsMiuW8mgSume1MFjyq4HVDpTJnyeyEa1yVZ6fDWMTqqDejtdow15u8sabvkmus88Ak",
  "key39": "5fuhvxadCcZDorPDd7bGKcUZYCe16Nk8MheXvNyYQ6zgcG9jhQyEHRdTERzdS7FTxbe7Dhdf6EKokqAzsDECDsHr",
  "key40": "Bq1fVZTPECBFLjXZs2PYGBmvqAcLmY4HbsGnbJ9Q9hFKMYN9tvTnrad5WrWhA5JAXkjToN4vhkrgbbhG3gEYNoQ",
  "key41": "2Lxt3GP3JETDrepM2YDeKJ1Pffk9cPiQHV6aqE5BMzPG1ZmZV7vteeN2qnHiRnyqgD99wej3MLvALJbiprGfCrhY",
  "key42": "38qDFx4Ee9rTbRK16493ctuLT8L4C892ABaQq95BEDvpVpcGNupPRousuhrdKXzYMcvK4rYFRwqyi9Tqx5xnL9ZP",
  "key43": "snbL9UXKyudrFkWHoS5Efrvh1ejyjbCvuwx99jZXjhojqeFbbtqwPKS5ygdNbV6gCnuj38ZysjqtzHUChTfXW7H",
  "key44": "42p8bJVeagxhx3pNLvLn9x6iT4UBany1w5ruFk1iHJoA1Qco1MGMqA5ApSiFSZqeZmKgBMoYSZahVFRXEz2Fta3j"
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
