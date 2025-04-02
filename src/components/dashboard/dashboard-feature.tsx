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
    "26dV8H1tVWqJSkfiHzrAbR2Cyx9QkYmT5K4JVyr1VbPp3SuH7Tbz2BftRpaPDSiTLUwVkfA538Eg7awsSBiXEqAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDmQcP93eDgX4ebbnQhL1UeDvfj5r7sCD326ywxGPxkXs1zqiMuzk6VJdQfp7qeUJatQn2fRDEXTrbdw1rb5q3m",
  "key1": "2CRnkV2MzkWZ2GyogE1VdE8jAh883HhTB1oFt9CX2gbtVaSNmvZV26UVvkucqTfW5w5KcAf7nUivGUkKa5L8gZ1a",
  "key2": "1zpdV1bRQAjTJagSMBtbVg1sTGy7jEAXDYxg4vFLxpkM3tWPesDwPerb16etam6yUjD2wnr2eUXPSWmdsYL43uv",
  "key3": "4TDaJf47qrUjouREYYheMmtm9inVeFkq1LMtLyaNunPVcaanHD1CxAgQfuTuFwhiqpPYUyti6mkLg4F9798rdmaL",
  "key4": "4pHMqoPQJxtXnhWYd6CDRsZE2DME2hFA8hDwf1muF78VmBoz1XmctQLnqj2jgWnMbFpgrjMYfnzyXvEcRutrnjBF",
  "key5": "Q5AEZzBhoxCyA639fV5Rt5LSdWcUwNUGraY9tBfUPfcFyQ9t2nQVKd5rXNuWNJ2HQ96FjMjXPZPEhCa7uWsgDNS",
  "key6": "5NEZPLvDivBqkmbvN6B8iMxPgX8oGpRkEMeUPvriBhdka4cMjf9949dKD8RT1AtXXXnLqBzHsT3eYBvrjxzdHVER",
  "key7": "2cyteYQXT6dUgAQsJjSFkYLvcsrTW8HVUzh8hknvUizVwyZsww2SF6xtCNipmQ2rXD4i5Z2114JcfNx6kCRfX1ZG",
  "key8": "4BdxCAsoiKyNYKCB2wQA5i3ozQjvahLy7v9b4e3d5UfYfAHybbbEXRKbGP4AA4jWeVDAfdajJRZRyA7WboAXzUkg",
  "key9": "4GZ4bCxFCUqa9cEXK4yo5oR4R6Q825yL39pjAcFh3L3asJsgr6rDmjq8B7MCgs3rL4rBTndnX3N8wFSLNtGBTekc",
  "key10": "3YWeDK5d8hf6jhNpbnjWocZWqKudQE6GAzSur2auzsmewnF27yoXZbFbv8rg92W75vhtDxdfcPvnxwdJaN6cruGH",
  "key11": "3YYyHLx27UD3bppv2c8JTwfH8stSK7SqHcqxiYi2xabnVoZWSYsq8bLM87GDbz3f5JazEce8KQ6RHgqv1c4fZ7rV",
  "key12": "4dBBihFMX4EZf2VDzJVrAMrbFMtVepjwxkVxJGb3K1p5fo6DPGvCNHfpUipJQa7zY1WLZhe7hyT1emxUg8z9yaRF",
  "key13": "3FFonBkEshppHvAJ2QLzSRb6jzoq2XyPuoUQ7893htr2s2emdFqVT24tpnr9GLkjH7LNyuCc5WyxyhNc9xKKvr59",
  "key14": "4KgCPevm4BFniCoy6WGPtBdhv3nRmF9VwwLBYiGksnxkjssDnnNyQqZLNB8VTJBj3HDhQevFHAVSfmt8rqg7VUNo",
  "key15": "26gEmahitCZBzWu7CS1N7xSRY9jNZ6TFvvxspqvv7Qz7avuQ5qG3j3JjzzcRVmPK3dgsaxgXdRZXerYHQ7dKBW4S",
  "key16": "482GzEDdmWge53V7MRAh3Lo5DDkkjLK7PT72Do1yxNawnmqKnztLfuhn2GRGMDWPidQ23XtKWi4AEcFBDKGavgmq",
  "key17": "2Ny264sLZmEmfR3tBTausUU9Q9EuKUxcP2JusvaAD1YA9cQu8GgxDW7j1eqRGKzxHpkLPNDbBgSeVVXqegyyZY6",
  "key18": "3ZoicH82piyDnrK1jcPofB9kcHJBwR3cpv8d9YtN26vwfh3TUA27XvmS5YRpBMuWosVfyGoDv2yiRgZKvTciDGuN",
  "key19": "2p9ptiQ1DGAE4VjeTTtxHGMYvn8VLWgQyb4aGV8siWGUG6TX3FXn3mSoL1x5Qb3V2zygzKiba8TwECXrmfHR5cwF",
  "key20": "3XxMVtKeJ3cUiuVcP7uEhcfe8QaJUJ6fmuqGvBYGLVXQtVkScRwp6iNaBbF4aUnsBiYbGxmQ8cukFzdgarHHx2RV",
  "key21": "5yJNGDXpNU1WWv4fhTbN8PF3eqU4C7TWAfEmCQV6irpUpWYFtKtGtWhrGW1aZsd8bdqWCgGKsWzuT1t3zFKESkSB",
  "key22": "5s22ev2HH5VQ1sVUSmtbD6rKP6mhJPzVTvCCQAe7uMKzmCgZrXw9RHgp2E94GP4LGfTrwiSebP2LC8cbWQKmGgfN",
  "key23": "4CV971sqK6FcJq8vcpQfFTvjz9jJe2snxfpLC76nkSd1Qh26R5CBMWkXB2xw9vSU9ZTupqpGNSv2GF168RdcYsWC",
  "key24": "5fjhkhEjUvkvHw7trUaFnTddMis8cpKZtpvc7P1uvqMXZeW7kH3yX6fD2vGRhC6JLUFx9XRu6R8T4sbsrp4rVEZx",
  "key25": "3z9Qg4tZDAeeVHbZDpCM6EGXpcB2VSnFq68cc97P92StDu3KScXNDVvZzwHqqhKuBYq4PXgSrtCFA1pbpGAvXCPZ",
  "key26": "T6pcG1BLaXqqpRcmCii48EDQRXMkB3xK7iVBcBSLo8YRy6NJdinD5V3F1tgJWo7qGbfPawQ2m4RYbxFkzoLJvc9",
  "key27": "2CvdAFkQz385J8XyJPyFuR9ZD9SYL38N2F2Rak8T7ZuX7QAxKmEzLtnhDm2iHPMKuVTbx9gJS5trwRxeEx7iXVbg",
  "key28": "213TLYkqFt4Fz6SnJ7iprY6YkB23v8R62ERYpjMGiHEQ28YFqzBbZpgBz46ZLSaV1sVm7BsB7RJVEYkTfVrRK85g",
  "key29": "HxSSynZWWbCADBa5Eoq5WfV4v8eSBVXtZJCEBmZf4ssuTsQQb66tJsxW4PJrRwn2ZG1h7GKwB1b3v1mca8ouuR7",
  "key30": "2WLF3p5wReLNY3JnVZEvaS7uj3gXTgDN3i2frmDr5TqRoFkXHB42pzowzTCu3FpZNu3VzePatBskdZhxoLTynPJo",
  "key31": "5AtJRjNUGJKhcRGJhRXdEd73pHxKMQPc2Z6z9vp9cvbyxR7ZzwWzmxE5LtZT4n93aTz8VY98WLkiYvjmbdasjThX",
  "key32": "64C1K3NVNVsE5joUm6qJiVG7GMyJ5BXWcg7fYgKgnEtomHdmYxqte8LPTxLBK4CoQ3dqiT3xQCNEhfNvU2ohjfie",
  "key33": "Hp52aGsAjNGnv5qWzUagu8BCdimfXBUsZ5VQwkT2SDYXj1C3ZoQAAVQBvg3mn9NUyyzkpaGAFud9zWF4sZhmaYn",
  "key34": "3bTzd6hQ7Jxy8vm4LfwZiyKdhQwsNxHsosuz9TR87ydxh157FJ6tvf1pLz3yQVnXnSRMWnwXhLeBcTQXTppp6hAm",
  "key35": "2L4tNeKdgZSf2KHJXoxQsqa6jscMwBrL8r1UVSxrLbFmz4sXw1g2j2krnEcNheFoj4VN1T8fjnZGbqRfbcbF9dNe",
  "key36": "5hTcrFb9C1FSxn5wJ8rqnyLdyzBA4xX9Bcj7CHBembRMKZrABvEBj83uEhGpo4i6fx429AL5AKX4gjbjVPrj4Unz",
  "key37": "5ovUAn7VjcTA3J7TXeBVnkzY3byX6HVesW12sTaMmnp2TJvAJaG7ovwdpKxagE81z54vGYGKCoXCrFjM18Rd27J2",
  "key38": "5QMZCzLZUgqyQAbM67FxEfcX6JEQ8LUmVpjy7182qCoGGT52p8gfrkobC8Zp7vrVusJqo5XxkGUnFdF9k5Zr11Kh",
  "key39": "2Qswju3dZqwnuXihCqh5Yzc2aJoDAVUEVGg9He9s6xYpY1q3h7aw45JwBbUXesQgn3owpbTdLRYKFp7rCoFChamt",
  "key40": "orrWeTcbaQTCXzM191ixAU9Yy2c8KPqeZdbsMCk2UyRcvJNSxBEyiX2okPagJi12ZT3D7QSwF3gnu9hATKuGJr4",
  "key41": "5xTwAYQDoNU1z8Hgro9xGreuhaeCD35KZzhcoHzWgG2gBvNGTsRHQoAcsYRgjo4Ju3rxnNHZgGbuM6mz8rLMuJF8"
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
