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
    "od6mR3m9mDeY2EoQemGFmZJTbrD1p2DnioR4u4FbFGv71xdyPoW7LYbrSRNEpZ5HjJ5Xns9coGaCQoGGJf3qATM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a57t9rNygn6TkTFegaJMWJfDhmNraEDjfEi9pGCrXxCpQ3jiy2FtRJQNw7eqYxJJuphgWKERTFP1tYqbB385b1d",
  "key1": "43besEe9QFEyQQfNexCR3WRJoUt9KLVgtNrQ7UHxNpKUT4V9ZNfcRUmSdJ9pSj5LwxrhKALf67Ly2vpiMvPn3Ex1",
  "key2": "5FkST1gNNbaxif7kLAUxF23o9FAVoGJLH8CzT5bQfezkjwJM6Y3Zpvda7z6gFASnLfHK4wKDPkxwoWWtQbU53nrX",
  "key3": "3ZE3yeK7fPCeGsh8FTw79RiqmaPTHcsmFhv1QLaduKkNhozPtUBJJUEchuDvc3YMXGYtihvQCeNhcVkt6hVdvva5",
  "key4": "3jKrHxMruqoHtpb6Ef7rDSBsoA9m1dfq1hiAFWbWchgjNKY8ZKXGPPEFoBx9qkQNQ9KKnraBYaavGbj6gm3Ht4GL",
  "key5": "BCRrVSo616G5eCwi27BHEGeWHeHSEGVo13MLrovEXnjzaF4h5NYq5a83KLj36io3oyG6AsXtj3fkNF5yQNexBwW",
  "key6": "2MYusTafKVUSBtnngKijhf3dBpmJuofSpoCSVzVkgwL2sJeeXSpHnEHGWZqtZGAgwPRmnjuF5ePEWRWuDKdJgS9y",
  "key7": "5ktdToTkV2N22xrDof5VaHSvwg2bfeHyYmCbDaBogoSFK3QVQK679uhxe1NBkvRFUbiJsvXKj8E17v3eauYVaQYc",
  "key8": "3d2TS3uzsXxBVkEyDZjB9jAJeJxD9b8J7ku1EKp54XuXesCu8kBf5sQVBoVA44eiYwEqSqxeS5gBTFPwRD38LbuE",
  "key9": "2Vvxau75A9aLrQduAh27bQXaEQHBbR4i2w4bmzoWPCcdRQnE3ktwgZgQmAVBJRqqUPfUJhMsiYSxGja2s86tVtgu",
  "key10": "2UmKxQufGiYhciUMtWYQXyj7yCoP8jL72PYUKRB2SGL6ST1ykUW8ci8BVK3GEwocac3fsKNzuxJZHa2p98ZmQkN4",
  "key11": "2hXptKvSnTpt6SB76VooZt8NEDJeK2WQfeNH55YzkkCnCF1KaEjRnSbvqkLNvxAYCEMuF2cEdvTKYpBJzt7gqbwo",
  "key12": "VWFPr6mcdSwkToSCuzpevE6YGX1vmEgn393ZBgB6ngvU4NaQ7Fwb8vvYA8WezSRgiaz8WHfh6bGRudAo72LAHGF",
  "key13": "2KSiPR9XTPVfAyrEwL4uWETAazwx6ZbL3qKpZ8EDWZ8KpQ3je9aLMXDCnePb5cLJNGVJW4zQjveya7M61dcU8gih",
  "key14": "2NHYx2okd4RgDum3SDjuT3KVD5nof5kPyau6geBHEJM58CsnTKyZFv6am1vc8ZPodfpzuo5tPrH9ccw3tfjMkhrK",
  "key15": "sXj58TWAX5C92AahfSok3UABbyn266dMWDAd7nTPXJKgUwhULvmQ7Z4tV15JpUXUVdicFTnez6smScR6WibMLsN",
  "key16": "45K2rAu4BxySSFG4qgSVmCmnr9F5kn2TCvxWMRZ1mm5LAKfP5DZdSzBm3je8vXikEHAgsyiUssTodsEUFFYtr8A6",
  "key17": "2TrGf6o5AhxXVeGortYMg19oanHtBd5Ru7r9xYeYHRauBg1wQzQXUAav8mPQkGiCQ1J2ArXdNLNYAFMwVjejAgaG",
  "key18": "51F5gXSE9NdZRNmXvHUbunciqfLcZ74P76ebNTu69bSwRUsnkjuw1YiN7CoaDi3Pp7Wq4CCz8AWgWn8gKpURnn6m",
  "key19": "48VmbxjYu5d2jWvi1vXWRw8FGMkVQj5LBPKgPymBaDPH2GhrsFP6KwzZ2FgxWqv6vy9Y8bpfmMTmKqZ6mgG8z1tj",
  "key20": "612aiWrx5A7xuX4Fed77Bnezhodxgo7WxJUkQHEj1SVPTmMrJSpXxdCyeHpU3ceoaY2bUXvEfhatgftR85u4Hxpe",
  "key21": "52VWv7hmfGXavb5uqMjSsrP9d6XXVBBYvy8stmu47SgyZSkQqNNEw3pkM9DyxfoUJgYDes9bvdDPhqqSgGEniKo3",
  "key22": "2qhUraJQk5pgWUppQ6QLqJj8a54VrFWMRwHrt3TrpwsAtTMuZaPV9SPK9jmGDCAmPv1muGV1MkceNoKvBV7bvnQ9",
  "key23": "4AuutFvxmAyD8KtF1npubwdX377o7U3izea5HJiA1PG98o4znvooRqTB5ktTFUAJzVU3RBJLfYnmxv6WnhuHnTTa",
  "key24": "3BvNUkJyUXMFxQuyNJUFEh3AAnnjw5bzsSjCTCwGZxhwEbqpMyMkdA2MzCnkywWfaDPUQnngDA7Zt7b3tk8VQipV",
  "key25": "2RZdRg4kSNh9HjEWKsF8jahoZ58PsDFNp6PnqBDYXH991cNhvy9i84TdHCYk9WWVd21CvgfMpzH6MZoSGg2GJn8w",
  "key26": "jePgf2J19G72yRadApbDnGKiECdLKLuDDBFWW8XWLSFywjPJhfNegZ28wvyhUnAGTuUKKTL6ygtT65sN4npbgec",
  "key27": "4Eq4AWemSbZsUy4N1iqAkgtajw9viczNsciBGGmuudsDq9FDNUYuXM1X1e7MHqW2v3vmF9rimMxmbYY8TnbTP7Yh",
  "key28": "42d8PDak2C7VqPtHWE93KAG2KCBGQd1sjNkN1E2wJGN7gLsDb49XSSqGMWjGdyYB8h41FE5XdkQKT1zZFGokoquT",
  "key29": "2hPVjpYJ8pbrxuPqaTVebTX4PkAFjfgC3rK7DTx6hi3jaE6Kkr3ybikMcT9VasNFKDkHUZcj1Jyvtzxp3Fq43CCu",
  "key30": "4XXd68AEJiwM6JdC8Tym565RrojEfrX2MzZhjFLxcdG5RBiy292ur4K4jMo9VBfaEPViJPKhRpojDsx5McWCrTAM",
  "key31": "5zqqX3EAW32PMtbgC9nBramsfL4DiugR9hs3fB7A182ZSPkuaBP1tbpGK9mD6P5oCixsD1iv5oanpkvJ88PD8N2k",
  "key32": "E4bABhVG85ootpB4pu8JL7EUeeV6og2jf8wYDaVebvK35WdDcqRK3aXjRJUKrgbir6HYcvSB826MHKMZdgxyFQg",
  "key33": "4hE5M2nrxdwjLBZoU7L8Qd2Bn14hjZ2nJb4a8gzSf2tVd3JiBQLkV6NBGpEjbBa9tUTQqWSnZwqMuHqk4fznddBM",
  "key34": "2Y4DinVnsBPMjj1jHdQCCDjTm6eaGwd2ohQop2T2hJvScDMC3qXi3QYfBTRpindtgRttqqeyWHtAhpQc8ZPh3GPN",
  "key35": "4qPJCW6dNH4TfUqbPn8bSR4mfWFjNCuGCY8D7xZm9J5mW7JUkvrjAhKzWxjNKzwnr3czUj6BhJLQ8g6MakMtqBwi",
  "key36": "f3NXS138zA3D6rdZSJoSMkqp6nxCkj2iTQBGyMjMuwieX7mJ1BhbFRvYXu5tDAbE2SRHqaAWNAaze1iqMcfYEwv",
  "key37": "McFKVaThnPSwikg6y1DKGnVyfrSmwWUZgVtqF8HDxbovhhmzFP1fW6GT1os8qpkhGzgFBGwedmNjxh8QyjyEKX3",
  "key38": "5DtehesxFdMSuvj9X1WQt364GkmXvpL1jWgsc4Ua1WxPgQzSaQvm7mzHNCQTSjUQQdSMWr8NKxuxF5wCdgihe7E4",
  "key39": "4LZ9DQuuwq4U4DgSnCZjX7ctcbBxKRhkM1sS3xDxF2ZQFvBrzCFhAtsN4pgnzRFdJKkPTXhCJXWGtK6TiRRA4Nn",
  "key40": "64Xh4LfRRa5yYViUFBSW6jb5GZhUAJJBDSfS1xZeUUy92GVEDrHVGipxR8fGbFbaJjwXS2RXmQVT7Z3xugZuP7y6",
  "key41": "3Geit95QQwSANQzypW78T1XjdNBg5X8GpwLYeL24F1uizk6bWnsBT7PeBGSnZZVjXPW3NCdPHkqiBW6qNEPcxtDs",
  "key42": "3Q3ygazpLdA2Y5rYrkZZJ1vDq3GGTGYYRz8ew9gGFMHn21fU2KQKYDf9KMp2VvwjLpQEprG1CybXEqicu9Qhku2p",
  "key43": "3oCsCsruUMVc3VHyATGNRZHYrieBLizLRVrttzZoN1M56MGzbx8Fsppw7HjK76pcaW3auEC7oaRDwmhd8fq62A4C",
  "key44": "5caKjguVPZg8LAEicZUwy3AwqtJykAL4pajQuwV9sVhwUCUySyXbfFqWW2v4LXAjq4WJYaZLQSDawRZ14kghjeVN",
  "key45": "3bvJobMM4n51ffgMkMdB67KxmtQNJZ59AGtsgPVuoNKB27h9xwaEoX7dYXtHRQnydPmFJaSBVZjUSLm7dKeEY4AV"
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
