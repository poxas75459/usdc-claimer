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
    "58odyyAify9jR7F27rchC9RjDWZyt3DeXadgngsAw2fSnevDKfYVQN9v2j2JvKmxe7pNadP3sjV6unwtcPgE5ug8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y5FP97bHWYEPvyoyik8hvtt6QPuViwoDoApzRDQfb18JZKhPStC67uvmLBwgo3ydwg8PGP7gS1fpeewc9vtthFU",
  "key1": "3ZL2yzsQFDCuLF44aQ5joqnHo2wHMDrgQtbzGv6XPjbGoYZA82qHC5geHHZiQuKFRbWBD6JUCTTxFnpsG28bwnXs",
  "key2": "276ao6oQEVdqFbqfKpnfy5cWf8Y3mjeTWYraRb6wteU7hqUpawVHCR9LkSNvzTnDpHKPeu9RpA1NuVzEmQxiFbcM",
  "key3": "5SHGn3GybwBhksRj8SAbLH2tg28hCDWrEqex5i6xPuVCMaQKXDFHYBMLNksSv9UQYNf37Sq7voCqmdatQn7cb81T",
  "key4": "5r33FuPFRCaKLSzj7HEPsD6d3VgDp4QJE5XuDxKrzqMbAGxaxTp63qbUAbQmEWiWxtduAZBa95mx4de47Vn6YgKH",
  "key5": "5PTYisYnzHFNawQEJowC4CD3iLGPxoaFeaZ7zTt9Gv3qzMGyRkthKvNzBfZ9Q1S4oz6aTxFo5UQEcB6QQXwZfnBv",
  "key6": "3i251VeL9omjh5qyzpqfkSeZ3pLwPGyLHpv1vaCeknPGQnKw357yj6T1CKKMTvjKaMMf9tAaDKSdEbRDh1nTPRM2",
  "key7": "2mvP9Pu7JHpwUwELftapifwFmpMQYMyPm7L2xdw8eDJihjf8MsdzQgkVxqBQMCMwhCiWx94etNqkGschuZfQmrJU",
  "key8": "4T1t7QBqbDLNBew5AVQ7ZLJumkqzavZ2yxBvAcXoxRTsXxBuqe3wJLmBC4U1Hda5Cgiv1EbQa8L3jVsHGbr4YcyK",
  "key9": "5JHm2xdenSupD33YjDF1Z1sa5Gnm1f2W5PbHNH9RjeGto7rgxBmF2me1k4LNWmHW2XCJHn5UPufkKY2dR3nestpS",
  "key10": "48x7L6KUnU1fupD8MGvV6QhFUDdXL7cvdYJh97snQH3cT8o6ENzdFy2wXy7uN29x4XTCdfQno9BLaQ9JHmiL7vji",
  "key11": "2ZYeC4uGqHai6jd4UvHRsf4RgYkyzR8TSoKLBGejyGoHDqdYxLCnSVjqL3uxDWyNzHqGnpBxCBVTiMHahNgCQuaM",
  "key12": "2zsTahKWSZosV75whJKFJhMajhgSMHD5kYu1j1LxP5KnxXkwxWs5YBeJpZbp4BAX92uyn9K8GR1YqoDhResEgFqF",
  "key13": "3g4wDf3hiVV7DuxusDk1fZuKW4YomAmxVgzo5zcQabEyrNahjptD4F2zcJqDkifK5uTZgcS6GS1fh3cbqL19XUSy",
  "key14": "oA5STEaSGPcEBVYUjdg8AvXjmix3VfotobWx1VSywMMEY9rGbELGNyCDWdaxSJpCumedTgc47rknpqFPXGKHqfy",
  "key15": "37UGdaGHuk65KQVrq4TZt4uciCrR7Bu8a1u3cgFpUL7KbRC5vqRP2aSK82tqvYzyW5UwF8MfAxeE2oik4snJ49vk",
  "key16": "48FgHhu3ddUCAMcXdi8NoSaVcKqfoeCxM9XMyRJKx6tjHVkw8WLskjvYniXp2pm1VKpYEYw2n17cfzGY1ForqTwR",
  "key17": "RnzGfCoFpQdnYUhdQQWyvStEjgdhJ8KUk1URXFGQ5uMtMvLGTznRH5WYnw3DBx8mBCyE7SF7HYuQog32ZSpfEcC",
  "key18": "3eWofEuME4sbP2fYNn4nY4nb5qvsagw836zSNsqtyurfX5nYFXZKJEERogGYPaf75x5mqVdBXhQmBpQgzmCUz4fE",
  "key19": "RuzrKX3LgdKzkKpzUVrnp62T2thdBwcGV6ezwxwm6rv4JDwyNygXHunSsQNTC2Xd55nzQZNPDXLqhigErEDjvwy",
  "key20": "vDsB47eqLny9YyRFHEVhrX446zzddBrAKUHXS4hbeGED7NeabFfAJcFjWeQw1cgpZoNvu9RJgVVMmyLwPNcdPQi",
  "key21": "3xejxtDJ7AhqiY7hSpa4mYrjLr6z9BMecwA6vhN1ECayFLhX1zRbEn2yYiR4XWTCy2pViUKcAD5PwoxohdZJDbDc",
  "key22": "3qePUVxtup2q5WnNMLgtuYW1PxebGtRKGMQVh6jYRFkiUFoxgTCnYKvb5qw4avgs4LpzrVGRmkKwne5encEPch2P",
  "key23": "14SXuaYD5HAPSUR6LM7LEB2SRDVkqDmLKj4Nj3emQtZMCXrJhMdQd7pohdoUqYrqffNLUsaqePgBfLGDPtA31zX",
  "key24": "UTK1xt5VgpAuLn3WHGgMwrrc7su4eFespSphMtDhbTZLm4AABtAXpeFawxSvqeeDWoAXJRizQfLdW9njQQXxczt",
  "key25": "551uxbKSBTJTP6tnjoXhBsrsEjKug7qjJjzXB7Dskp4rvhoyK2zYXhoD8bbB6hWvvk1eaEwtp1Cbqv67QoqSSnRK",
  "key26": "57XSeLt9Qr61jfnrbE8UfuCBiPrhxKbXLSFh5xiDVVpYvXtpQnMKUYudoX3xmek3eJyx59wG2qWkCbLWFF192SkY",
  "key27": "2JBMEWtNxXJCZLgz4fEPauaWqRJjNgmFwKWjT5B8C8hyG4W6qd88XBSorFdbZ8XvmkoMfikeofHR383Fp6btzCDr",
  "key28": "2gz93fQMsuZF5ejacA1o4T4TdbbHDK7gWEFP9RNmSTHjuFfu24Ca4o3hC2umuVEnWfQ6LeRprKM4h6npeu71qQvy",
  "key29": "44CgisEb9jF98VpXekGDmJtuoSvKW9XLCN7gKz5XqjJTw541JgrJhDEDf4vV2QdECEWfSwfdurasT25znQ2Ep3tf",
  "key30": "33R6KuCpkJ65V3HJ48ShSC86UNKFrxP1FbA2UssfK2Zv2VvAU8J9xz5SkFXVE6WsVvxWRuxsJorbUoL52YeRP4RJ",
  "key31": "tfnuHaStZ1drjyBvcWWzwp7qeBmEQ2E3cHmrDrWAWe91XxamJbHbPa1a1LruKNMGA9w7qLmxKxGRkD6A66A6Sic",
  "key32": "37t4W7fa6qxjtRxFRYbUbFQctMUhUrTX9zceJ9kLXKApDuV1if3dHChDqGuTDG4DS96q3RjxmrhBn1Yr3w9KnDKN",
  "key33": "4dHd6cuEpMoJNvMA9rt4LLGKby4cGtAxANQkQPibtJ1ppuesw1uRNJQkVyndxzX3CF1WN3Z7wYuSX9UDEKrWuVFM",
  "key34": "EM8kLci8yV7nYjhmbMdkEPAr3gBevKPgLTWYTuxyGmHZPdQAquW83x9ywDUHS7duZ8AGXWoNKHEDoRXfbxN6naz",
  "key35": "5fLya3JjkzQj158bWp3gGFwcWqgae5iNKcdhb3qNnkEVJQ5Vh5mWVVsbLvK9kqYAqaCpQbeA9fweEyizNrmjfhCw",
  "key36": "528g4Sxj1qi9pz62HcSiy2FVFg1R7EQMCVAGkzfxrdEjGUJQvBVSodMFAR6oxGTvd5KiXAKeTqWuuEcUEy72KxnD",
  "key37": "4SiNDEmGkK4Jc8yEUXtooDdvDjQAK6k3VsKayqyfiMGRbJANThPdvhYobFkLjQrSvwbFsQgomDXbXtDMNaeG8vDS",
  "key38": "2CWZ39ykKdXPV3vtf2m3aXKYCPB6bSJMXN7KihBj8NfdVC5TW2UNbwY3mmEjtsDEtGourMV1CUMPaaB3E5hQK233",
  "key39": "43X9sZ47XbbqaQBvAuGPF15EbGtFDnaxHqgSaEcuQa9QhpTqeYqQ8JoNj4RpcKr3G7ehmqSQkwdtAW4oLZntzpQ2",
  "key40": "5wTVLpbHySp1BPgeB178apUosEs87nh3Em5MYMhKhzYD5T1KQfQ53HBYkuGZGAFB63JRnyjRSNMhw5FqtBWorZvW",
  "key41": "44ncMcsXEyhiuFvAm4Dg4yea4opegJWc8rd2jKBBeXFF3NRR1wWab781XBz81uwT8WvazBRuMWFP6yihpjcJiYam",
  "key42": "37j6WZwGoCxjGrggYP2sDHYNFPvhVAzPVxkpKSfPiiBhg1FuGJCmK4tFKNcgRpt4GuGVKk3JRvrMV3qFWeocFtK6",
  "key43": "4qDtha6zeyieVscBdmDLXuLZqAUJJb4aHvvZKwiDLrpjyyGgPLEXJtGnUGf4ECz1a8Cq2TNnrEZyWaHaP7NiwDy4",
  "key44": "5TR6yWfnsXJEaJmxvbBRyMqKq1tvE7fAY6ZrsVVVJm3hZR6TNmYSobe7YrPzW8YNrjGaJrue1sjn7DbynNNgHzEF",
  "key45": "5iFCaUQjbF82md38uKnhrptbupKqu1eJSS8ox6HFPr9HZP7RKRuf6jyVTjEQR6LBQiAEgifxoNoJF8whz1y1JyWh",
  "key46": "4e6vwiPVMf8geoEyYHFsVWwa7D47HtssdW3d8w4m9GrR93gBKYx6QaSqcutD7JSUAKx2t6a35cwLTS2KvLYoBoY2"
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
