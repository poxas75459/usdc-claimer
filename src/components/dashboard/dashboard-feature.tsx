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
    "3ZrdT4qNQe21aURccJzc8LjNMZVu6Lyy8AajufagkGtx2wd3DRSyKPgzRq6b6hEMckJmyVio3zXBZMJ7Nmty2AQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o6dyu8ictL492pP4a5L9JNoSiNNVsYCEHHnev1UTQuGJQPvaETTy7DF8EhexRmuCRDHXa4bGubKavaXoYuBz7uo",
  "key1": "2Zv2QQ4HpxZ5SDZcsznTqihyKrjgpPqqvovRdGnnhQ5ahTmBPqQnvfMFXrjt2o9i1WDq21x7YjjDoak6sQNMGucb",
  "key2": "2TXoyCzE6jtgnoypLaQo4uSCZPi9aynJWECor4h6xcrf5n8ugo6fAUbrMSbH5WK2cfLtBmyF2eWwP26k27qiseKp",
  "key3": "63voHCWTrPCmsi4qgqKvoFRohMAYgyRtVWo5reyaw2YhCsbRCYp2ArzK3CHYUf4f9icf1Sehnqsmtyo15YHDkeY8",
  "key4": "61gS2Lsdmyu4Xc8VkE1dtU2Ctwiz67MPzAKdDHck2zvk7ccSVJdswrR7wfqiRruUBKmi3ntnKLajhCWPfZfuNLq6",
  "key5": "cGy4jnWZvjN9vFP3DZ1wBygR4dnBQjkaMqPjbue686A2MjNa6isNCaMmedpbr2SaqCdoURMxbHL5PGdf47KffMv",
  "key6": "47xGBkMSeAAPtRmBq8fe7AZw2p5puUWeatDBFgKUF5FK5v2yGx7j3jfqFpPz5auofnHBKAZXL7TQvrwycJK5J9qE",
  "key7": "7BSQq3jGTpeRb3P1vLV52SWMPNgJxiSuLQ9mc8uTgiEA9VQdTDancifNhEHss36eGSCXzYEJptmRMXmpXtd9NDv",
  "key8": "4K4ijeng1rFohM6PRCTWatp55f3fe47Kr8uEajCsDfoTScHYctYcTHSakgaietzx2k5PmQX7By6KBjCgnN5L14fq",
  "key9": "2mknkc6mgp4qHVB6Yqytgg1izWXcMmCYLKM82ot73uDADhfpzy1hAQFCqj3DHCJXx9DpVoFk42nhNoHZt8Lw1YmT",
  "key10": "24ikqiCBZjjSbt7Ad5wkZ4u3FJk5zdJiJ1NWQ9bw9JmxF7yuXSJu68W5iLM5AW5J1ad2o5ZpoZPy6FEq86eaRuy3",
  "key11": "DdeF6hXoh5Q3o7Zi9WwAEJ2jKyKnnsvCKWWVSmwAZxfB655v1gGLaSvxAVWqAdSWy38ojxWtYJsp7DJYtrwBWLy",
  "key12": "3rvYKqthofwxJxw1w5sJh7DPsp24BboNubZcF6dcNDVCmBwhaaC2jk4beNF4CEN2Y9Rvuo5qDuF7CayoL29j6Y5M",
  "key13": "2TcWD8AbsvjQpdM5QmYHA2wFWDmcY4pgY55ZrgcL26Xti63hdNc9tAHidv61dTMVqcmph9nUsJ6KRwbggnBquqvx",
  "key14": "2q6LTV8kSymbhz8cq8hwANvLiDfrpTD4EFEAxHoLVBRZ4mbE1y8UMZQcrAg49rT3H8Lw29ABdthybdP5KS8s5aph",
  "key15": "4y5noExQzisXQ562TEa3FqZybD54YbsEQ4u43cUUR7Vei1R5jqoLFXATuY7qXPLU11rRqujfnHUCsUqn9v93P3Hw",
  "key16": "5ttmXBqZgw28yDLPGShsxtYtDsEEHoj96RSukduUxk4zgnGbL8tELWJRVE9uUsuvHkCU8nMfNKDHNEbgpvtTq4Pr",
  "key17": "5KM3w8Gr6MZzEir4rY34qxGQYrr635M8JMAdAyYHAsP1JPRcqrKYk7YmQXo2AZW3UpTjaoRknzyapf9P4KAdR1zm",
  "key18": "4zGeRCfrWdbiGn1DGbgsG8TaanRY8LY8kpdeM1Hus55SepvszyasGZvcF441SuM8roH8rJRXRy62eLcESwsJqnDh",
  "key19": "3dqYA368qXZSbQExvzmrF6o4LRAEWQ4zJxorcPkj4xiQ63axvjcrAWjzuK35VSGauADPXgGBeXTc4AsRbp9Yc6T9",
  "key20": "4RqXaD61v4bhPXe5uxKMPvhoyRUTsLcCHY1v7jm7RsK8eCfW7UiSFcSLQmSqq5UNZpw1STdH78ohgai3UXvhL9xC",
  "key21": "3rDGdf1CV3AXC3nJBW3a2XUBg5UihEupVNE6aoTNBbzwPvQhWsFZ9dSLKvADZCq6vtnM6ukUfN8woNtSUafEZZsK",
  "key22": "5ko8zvLYFGBsjBTHjuvE8EEvv8dVaxSC7RiJvkPJogn5qjgEPtLTAkPdk17tFN8eZ4mDSB8mbJ855RprumZSvtCA",
  "key23": "5Z5pNhGGFNim9vC1qXMpYnPr5PEH5ofcTjQuznDgQvQGa4jdWnF74stjZf6ifLbFRTQwZrVjpGTW8u21Zipkh39c",
  "key24": "4ZjFU7pjodQGSwRzub6PQgmvQWBuZLs1B82ecButKTkBdSvnm1cx3seK5qojScJQaxoWSzVdCCZHtVZ1ojJrxH88",
  "key25": "4is2vnJf227hmc55SjetvXJzp8U1jyQUoEdSdvyVZBa5mXDV2fadAVpqUUohcqGTyvkqgT1Q9mn69aWUofKdDZjC",
  "key26": "R9o79xYP1ifd6szDk6TW5yNJi8h94YqpkdTsNjxD4hzRdmsaw83fsPQnc7JMYUyUWeLSL1h5rxSbSr6zYRcSSug",
  "key27": "2SiMT4doW4UazKNRojmTCB3sXw18oa6ejvZDDudqduzZ9fCC6WFCZJpum9f6VG86oLHafKwJfdBg3bsMviSjaKni",
  "key28": "2AdVudVHcf1V36PmJirVmHkuWnNyqHoLW9LPGMDcwtUBgUjvKU3iEE91Jdnzipuz2poh1ocz14zeq6jwoAWS528D",
  "key29": "3F3WJvQ5gnKKgNwZDnVfFJZjc7As8zXWioy3bd3iUt8xiNYnL6wSsUo8kcMxwGFMBi7YhbJ3jdrL2ZZhM8xmoFyQ",
  "key30": "3iUaPRHbDZarDrPBiZYyGPYwaSFSJwDnuEWSHAkRh4x8gCK7sKGrHC6jEL1M7myFhvKEseuM7wicQRUPcJv2fnsT",
  "key31": "D4gmdU6rxMN2LCKnvCsKMBmYczdGri56t4r1aRQBxmhFbzWRu5q6eH8su546ty11mSoZoYZRyQgjEtXUNbQpqk4",
  "key32": "5Aw6GWabDoRkMzTVN7AzuhSsT1xfFxGfiu8fZSRmNHGGt4WJr76QScw3tdicVLKcrGrynyHHCXqcuz2eZH6qq38k",
  "key33": "2mLjvj5LYPAqi1ms6AUHnaeH4dQ8EeWXW4cEGbKW6E8uCtMQq2XbWMS42un3TBk3papQAPByQJn7ZRiYEnjQeccE",
  "key34": "4w9LfYhe6TaxPVK5fa6rb8tPMSufdCqzXGM2fJ1t6p69fBCzTPSy48PZURuVNj2SEgPW7kRLxnoUc626nawppqBu"
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
