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
    "NBFGkTtVYUN1WGSksEZc2mTobZSHje2eM3x4FJ5yWdHZKV6YVPjjwSziYu4FU8Qc5dNKj4yH2uPKQnM4tSMbC7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eFoYAhosbTncK5gxzb27wfRpw2jkoTzSW77rVyo8Dc2GEKoZA42p9hNU8cnEXKHHLmYd6VkE6eT5Z6pjqgs8XP",
  "key1": "4Doh2H8UoxCMqYqcEPqhQU9fC8QXM6t3sSqHBapGmwrcGJGyZkVJbaS1vcFK9ZpZxAEXXBjviKmUsSxXN46Uwg71",
  "key2": "3X86ab6FcmCsX7GGVjX7eShBUTsXGjQqM8qRZtmyBZ7P2hvjAcueaZZD1z7bqWTgdru18JJnawjnqxFFwsxUYUNH",
  "key3": "GoWc7Sd1NrHDhHTYbBHD9pD9CbGBacYyRYj2LtDCCo4peEkfAg7njmwqfw8nB1gCfxujxMWp8ak4y4CjjThiEf4",
  "key4": "4Hqf6RcDcBDwDAhugeBmdwjNirTU7uscJFzZyVw4hBnsFTS5spsUGm9PfD8zmAyswSMVkpnfFdgysrEugciee37Z",
  "key5": "4qhykDzyrtxgk3pgnmm1S2yurh9k7g9P68L6JZpS3HRgJfSumQqT9jr9GGpvH7buZnWm9uvJP8CnnT4qQKAksu6M",
  "key6": "yj5TsUN7U5gDSCvvE9k7qQAFbfCQVoQ9ktLKHW14ypK1xTPn6YesZs9yir3adqPtzArkox7z2mBoSyah2vYPNYL",
  "key7": "Tgm5BxfFgdw4mthUt9pfyDgF8ZntMczy1bnjTFMcdFkQgY3tr9dqsYcamCXrynYvXZ3cnt2xHusQBXCFoZExoB9",
  "key8": "3YzTUFpqsV5JrBnPKQTqH7MnWPuidmRv8wM1kDvgGiKwvDuL4CW5dpB2Yj49uM5QK74i44kumyuesZKCcFihDDzc",
  "key9": "5syqkURK5hw4gUFXi4aXh7RD3MYm5RTM5dheEPhjvA1YjVeTbbwoYPeiHymfRViLHR15Ay2shMzpP7qxo2FBTEqu",
  "key10": "5tyGz3me7Jk1z8vUAUrriKwAbKXNnz2ReBcmafbYY6ShSsCevf911wsZHrXeGDyX8X2FRCiJvH4QcGYB69Y4hHj6",
  "key11": "3j9syngDJkr7f2LRoD9i2wRDKVkpxNNRjS2sUFuSoh6JsWhL49ZDjg8Z5DML5QzDqQ5ZuWMRSuVyz13wAhHjdd4b",
  "key12": "ncuVgwjqqAaq9HJR6oWqydyosNxZ7KEaw4Jc3X43UsV3QrxLci3NKiXLxww5d8cTYSppV4PoThwT9XtuG3eZKQ9",
  "key13": "5hG48UjiVU6BQZDefchwQABpJpC5jGmPVpKvhQVHL5Jj7UC72BeJf7ii38pivPGv8f3MxRCHaNQVUs4Yt549c8nu",
  "key14": "VqBr5cAR41jnDNpqhk6vDarrwqXxdNz185sVgiLP4JriTCKYyPvKn7DZK7QWXCTnGgc4iyuUx7fDmA1qCRzbhPE",
  "key15": "2VHnpoN146UYNjMC5vEeFBPwpBNSAiFCjf7dyjtFhh8ercCb5JvaPiEvQ2P9J55Rr4Dz7tsAygFeqRkV65zwKRds",
  "key16": "2kx7HGfNUZRtezBZcyY7RfRpQhjbwsbzqaZbDWymrx8xPzaxbi6e9ZWMzf76CxdEBBZCwDz1bpRsHA7c8imdaNTP",
  "key17": "4VAsAZxZRZWD644Y4kgjS4fWZTZHSEz8uTpqLK8imqCvP9j62wGTJ4Psswtw1phJNtZ9Hc8grF9gFKDwjYetPAZE",
  "key18": "4y7F6WvcHUR6xZtzJsK8fkXsDZiujdw8TAx5x9wfuUhfrAsZgVBfQLiwxUFrjt6BUSaezqjpvX4KGGdSurPVDfjP",
  "key19": "3RpFcq5M2qroBJ83bHU7N7qyYgEvJTeXrkpEtgU57T1yAtrUVYNz7Tii71ZWeNJWkJ1s18dhrigxWzwwxfY4BAYy",
  "key20": "nytcosxXwAxwosCgvcwaXGheXxM9K4ujquNyGN5MwkzEeELoa11M2TzkipDmhQeCQjXfFYEPwoQFShBJgGFuTRq",
  "key21": "2a2JBYc1nMA4f3Fk8Kk3T2zv4tPqzHuBoCLUVnCEvsbMz2Pcd3G1FhbGQNcqscK4CMJXXy97o1bxowgcQuSXJ5E9",
  "key22": "3PWNuugui5wEM6pgfEd6jsjjSDp6CyyrmWBgraGpSuvYqd1Lo1YfiRM5XCMvxTFzBSbs1X7aEMyMJY3dmTAaPRCo",
  "key23": "3kVtZcaD6QBgJchjSgiL73J3ChYGonVRfSaY4tQFYSQP4P6Bw7fPh7P2xsnE3uV7S43JwQCJf9p2Rii7qaXTBjXS",
  "key24": "4vQkQFenAfi1N71fiV9Zt3aUjCeyZPvY1dDivJs6Yj6DcQYQNMW3LGtJ3Zz2w518daUyX3AvCQGBjmf5EPJUV3mc",
  "key25": "4nMxb1u58vU5J6LpL3HBpoF2CBY7e8GcJ9qEKX5eyCjmfHRS3cgsMorK2kyzra9e2frFFWw3EvnHETP3tQZv1Pw5",
  "key26": "2B2BguZBGu6TenutUGniGWyH7gSiUWNR5t3ifMUcEUNPFSRqzVaDsv6SERJc43HwhgWTE7AX4FxERKwE2a5f2vKQ",
  "key27": "5xRfrEuPVHh9cAmAmHeoKGMbB5ai5GNLQKtSNG9kXcZ4DWvBGQAMfGxqE6EYjkpHjQP6CUJvTu1gA1xZX8fFZvrB",
  "key28": "UDMt25skLJ6Fyued8HsBEZ3ovdFqY9cXhjWT7H4hEkJb5UpizHKfAkchXMujG6JGTDw6HVGhPn8tZpiujSocg2u",
  "key29": "2WDx6VkE2kEssUfpzMRYxTSUko1DtmGhxFVgU2TJeB6qhqHVha39pmW6KiH4NES3JJoB8EeGSrXPbbHnVzkYYGfB",
  "key30": "4inLQT2jmHTYY8iUXUY2iXvNEuhbmYGsCEwfpiAMg1hQpBGsCvNDBDED9j4oG9eBvx76AhrHG4MnDVDFSD83xw5u",
  "key31": "42cQpJdUFmqMUtosiwxJqndqWFBJtAe6yxGj2UUveTz4jzR2XPdRSAiiet4CyvhKYLQqJLStyVLk6EzADweRuvuv",
  "key32": "2F2ep96gX8y5T4AkKgd1V1m2nsRRy9A88HBDxiEbdg5wSX2VjjdDfWEt3yEbQvW5HfnugR6RJ5914QHABREypAGS",
  "key33": "yHzU3uRAqMYBMSdhg1WWE6kEf3v7rVNyd6JQeYNhg3wQ3WboxMjWbEzSyDHZZT6LK3n4qyJtYq2s7avEYh7GRPu",
  "key34": "65xeaCeZZRPo75jJiTFeM5dvNrTBgiMuuckU4bJ88B9nAyYz1Xkr2xCZdshyXg89KYcogJTNF1jxt6NShnTTndeP",
  "key35": "4nE9Qe7r92VDs1ujbbnnTwZv9A8Mm91Lrqp6eHGYywxoyEgChxmHL43yqrrm4drpk234m4V7vbxVyVvGkwwuyGGv",
  "key36": "2gP3d3TuAduPUCUUAVwuxhqBoYa9WWWb34NxUpS6W5DainZzwvR9LnnRdKBQ52xVnAm2ex2cgUHCPBEmvHyhs5hv",
  "key37": "4yPwxz7JDU4pWtTVXBoFEgx7BzDgbRqrise9MTguyWXgR7J5zzbhHrwMyxYpWqNuVyWZ67v5r8wNSw6KhaKQ9kRJ",
  "key38": "2bawNekqt86Ee9KQJ736QaiN6r8HP82CiGRLSv21u1iumaeJFyCPqSwfxo4rUQztzEr4XAuhtPWbqhtNZQM2tRH8",
  "key39": "7oeGDR3bPDYEB1MUFa2Vz1n5aKUUa21J2q45BFqj1Y3xDW7MGFYKwSE8WJ1nKYPDJbQZqPAY5RySXT9HMaUAsV2",
  "key40": "4XwMqjykvw7sVrj9B2VswNGxgnaZ8YexXP8vxn77P1XX3YAabAj6xei8DbnC4zXpLRnhDZZnTsmhGYyNfMsEyxM1",
  "key41": "5Mpcm8vnzxz9qsvrNDS2nSfP5r46XJHTfFSb9ooAQvdiYDbLGGAMUXiDPvWhaK7bSzJvDRe7Kkb8ADn3acyX5a3Q",
  "key42": "3FTtfzHMCKGM3U8eaXZcpCU6Ge9Wgd4521cn7f2wE6DTQtY4pSCnohdwbJTE8CFr1ajgvPb7zHXb6AxZt86VV8Ly",
  "key43": "43UDps676EcnCf2z6MacJ9APt2Gv61ezon166ue2k3Ws72afwaGjy6rkpjAUjHzJm8JhCS66qv3TvK8vH1Ux1Csy",
  "key44": "3cm8RQyePyNeAagrA1zn6BLP4o5Enspg4osNipUU3bR1qvDAZ2oqKBsgRM5njacQjq62B2aU5X3zSkjeYCEbXu4Z",
  "key45": "QuzsufT8V9VhwfhxqeEbqEAtnxGoQtMiUXKhfuEr5TuzEwTCZHFMcqtPbCeT756hd4GTypywQRLKiFyjYpxBJoG",
  "key46": "2KDFt6ASweR9Ai4BmaKwLr1ncVbhYcc1n4uxgwkMvW1Bswumh2VkpCYqy3YVfzz97ufwUwK2C1zfMHU89HciCFxr",
  "key47": "i7AQGDessxz4Ja75ax8ociVYqnd4CP9zvZpmukEQi7i46gb93ozGR7GT16ez4M4MSjy5T8quSm1P2vC7RZ8YLnP",
  "key48": "2NxZVbHEGvFCLCWR2mhMqfENnMcHAERx1z5W1CpvgmKBAdN2g4RRegyNucwEc7d1PbEtJWKmDuva2fLZQJDG7Fba"
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
