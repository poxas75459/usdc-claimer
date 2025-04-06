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
    "5CXLMfRYVkujLEeYXxb8Yh5cvS6qQ9x86erDGWwRPT6uno5Tv3RsavurqyH312i7FAKa66augD1ZGEhTL1J1J3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hGYpVGML4yaJtinbvgkue5AEbsvTu7XrbqGXg8QB5eWtETyeTJf1RzhuREvFZqbcULjAGeQ3EewBmHSiBdNqcyR",
  "key1": "3j5tQ7aDGpkZc31NJE6YoNqEVjih9kTPQThTXGwwiZqJxz4LBXJ3TBfwh8VxLHYLc1HkfhyMS66yeQDd7kDeovwe",
  "key2": "4WtKe2FfufdSf922ibQRRjNBKVHkBnJewzPDL3pwnqbmHqDDjaLeMcLmGvjZq68WTSmviFMtA31QteMFam4bVGmf",
  "key3": "2MA6wJN2GZkZduYtrUE5NgZN96543GBMfJnqe8cRw7nxF3RZQQJ7wRdtj1yoYQ3tnWkrqwWJwHHdq5zJQZnemWJq",
  "key4": "5RDa6B7JNhEN58eA7eNqnKGSNDZWDYonyBGJWxcMM8pJLyxYm7UZaj3gPEocN4LWUUAJYebnxuakHvvHkgtGp4Rw",
  "key5": "5jfmaoT1kCwkttiMgwYTqyjDay3nompnic8D7x2KrN7c9hSqUx5uFgAmdE18mqy8e6278TGxgeie7yLXF4eDKPB9",
  "key6": "2x6PQSyTtYQSVAMe2irCdHZqAsUj7BBDziLABRTrX2nRzmRyiUfNE78SMAdo8UvsupXHWWA5XA7KdQs82LiVNpiB",
  "key7": "2aNLqvtckeJ896puhCwaN8GEsaLFmMpji3dxkV2H8BbvDF8y5heR5ut5TSgVcdSFQimv48QjvrRSH7vZ4WSjUWTm",
  "key8": "52aQbuMUcSd3zCG3KNGUZ7T4aMfuZ8YhjLYCKQbtj1UGSgzZhs1xvt55qY3ry8QLvSmTGRduUf43LBuvmMQSJuuM",
  "key9": "3MP2CEtTy2jFmYSqxWTjH7dRCgp91Z6y7dzEDPDMUJQfTwAG3DfVwf1f66HzdgK9aabPBXiMNiY18DFAKgXQPvp6",
  "key10": "4dGTLbdMEW1TytQRSzfzB7aSJLKzMW93BEx9a3ZioYzeHXJmb9e6hLZasAWRqyBesbuCC2QYFbtn2PVzx4suTFDh",
  "key11": "4dBTn9i4oiTBqpKLrwYG76xcgozVhfKW9kDVFUS8BebQBQsUyKGjGgjbTw8HsgyuoYewgRnWsbRQzh3tbJDCttd1",
  "key12": "3itaTK4pDM63ow7vifkYTNmbCYpir61RzdWXBCeqUtXXQfU5DMasrHgSCkXdxyYy2LStuBPGKh59SB7rQCNsBYtb",
  "key13": "3RUpjeYPvVbzQyAKP8iq28AiuVW9sRFjfZwjZRL4ohyursW4LLbgkke3XVLZfe2cv3SPwRrfg22chNRas5AGZLQK",
  "key14": "3aFvWjNUxwpBXongZBUnqmdD2MC7xfkPZUJBk4shh6yvBPd1YprwtsJDYUULCT88t6EMDPVtAotjDwXgUJbKA9RZ",
  "key15": "2M4rKPrqyUR5FLF5DyJaXYvQpMVJqcCEayvR87rqfFoNS7NP5GFPSf1CcwUijqkjFDNNTzDsu2XCZeoF9JipEKb7",
  "key16": "5av7EGXTKAt8GLk5FsQX7TrtPCTybWacS9Nr9rGsyaSqXSD8vfJLFjmKJ8BZjRXFgnjStt4uSpEnCn7xGNqpE7AR",
  "key17": "5a8C1EFUDCvwTqg5UEJdsv6jBymAqMswmW4NSTo4kwfj2qGjstSQGZ5DGvdX4zncfrwtNZi6gCUmN4kJDWKjDmHS",
  "key18": "2wTM7BLTwCqjfZRHyLJgn4Fsa9KpPxpP1ShLmBZMgUMnaq7nReENstpbjPx9FDC4rzDu8Ezn9kT63hLtT8jq444o",
  "key19": "2RdUM4jbDCraMkRfBi8Vm9WC9s8BWUHVHW47b8UopQipi6ZB77WGkHMRdHENGJv7sDyftMNTFXrpyJp8xiC948Rc",
  "key20": "3vkt1UiEKPXm4GY7o5vZYxfKjLBqCgfS9Un7egDhkEk64U7qhDFWABAVbuZMLpEDzdwuHUzPG7htSRAmsKGCMeqr",
  "key21": "5HDc32ZrR9B3U4WJrRgRRAzqBEur5aAViusoV9sAyRBA7Vm7cgpXzutx4HQEQTwWLoaVjEUhkgyCcaQ8t9VZPmnC",
  "key22": "58ZkJkFjPNuXDSzvukT34rXTMj2Z5ANgtazTEM3jVFFkqX3UR2zg77o4QyxQ2ftEPAvpPLR38ZdCeQNxLHBPGZfz",
  "key23": "4P66Vmf2Pfg45an5VqPFBbwN1a2dgX9WfDXExMMR193JSwD7UbfCuL2H7RtXNR3b4gY9rtREMS73nMCyWRA82zPe",
  "key24": "teidkW6Sr2gQyU49wENjpdpMtbgYx3m3JyJtwJATtZi5iHe7VviEKjqKj79cvtXEUp5WyBh6QtdVRFD9Kmkp7sf",
  "key25": "3rF5dvmYt4zeqYusPgSMsZzm6dpRmJQWk7WMnswSTeMFnCXRhjv6xvJE9BqhmXrzpmbtjivUaukk4dFjWiJq1iZG",
  "key26": "5vBiRJeWP15QaiNoksjg4WhhaadxPQqfd9tKMKXdJiGUq6exPtEbdxdEEYjcjnxLBfBDSieStJR4nGkxMJBAc8pC",
  "key27": "4xFpnXCx8QdeoKAvzgxwGyyXhcULHNVrz11pb9ZaDHACpXwwZ9s3PEfHWr2m6ENG1tA3MRPLKMHkYXT1ekUPaTpX",
  "key28": "4ZxwJWVYNBru4MWVEgqdbnuiMXgSoXo6mn2R4YRxd4w2ggVi26Zu9bn425k7Nxf84BfH3X2L527u2RD3xqjdpFyE",
  "key29": "ddxjGF3Q8RtoMg6g3gYcZ222FBYp14BeitH5NGfTAiQYFPBdJMdnvQgXWU8JPoqWPVqqq3PggE6VmeBbmSZedrL",
  "key30": "MCdx4xfxYkmoqaHxGvjW5A1xcgBzrU37BcPr1NzrY2M43HYApr8q56BMrPypP5zQwT1Zq5oUbaTtBRBTkVD2vyB",
  "key31": "5zsciBsDWY4dHKUZ7wXRDPjKYvJW1jXeTqfie7YF7tu4jBow5gP7bh8Wbey6yukUe7MTT3wSMiWqqv7CzgFgDUkR",
  "key32": "mzWKoLjv4ECHvaSHgY2s1pk537KWeZvi2Vg4uvomzYRek5UQa4qNKWpzuH9p2mURqWTdxiwxFSx7jwdr5YchnJZ",
  "key33": "HH3FcWnxRWW7WCDgi5vr1VeAWrck9Xn6P79fQoA5kWcnamMzhvZJ53rALRPtxJPTSuT5XjrFd1my28TJRPS3GLf",
  "key34": "3xoZTP8bs6fciqkVDSQyDFjgvLfdFH7eF8AMqRxUSqhtfRpGb3paXctm6qXgYUFKP8Vz3ceuWdZS87rimQCtTTmu",
  "key35": "5yZ8m5cLGy1pUqmJ9CW29QLzzqrBhz5y8yJVteNgmNrVCaT4Xk4dxGJiAHm462cXYn4dyUekfRGVyfzMpap391E",
  "key36": "2bj47N613xX4i3Ej1QXss9g73qfoQvznNxKb2ksuUqt84peXDVyiwEovMGqPNUCHey7HHew6wkjsAVQRizPkFhSc"
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
