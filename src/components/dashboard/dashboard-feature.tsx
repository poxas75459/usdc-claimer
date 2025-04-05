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
    "3C7nvKiSaJDtsaFkiCEmBi4qybvsPtTw11G3wEvGhnJxzeamYzqhVJQt5Faq78eHLqQtStLXcr8JvD5hVPkHqYFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cnvN5paVbMJ5iNo4LvAAA1sCbinnHRCPAR7XZC68J5TP63KoJcZzMpj6XadVU6ZMQ88iWjYe92w7NekEDoafZpU",
  "key1": "3AxWcgpXzzEBQMNyEyndjZkk1iNhCtyUMiTW1CsSnzcCTTDc4GjBTmQVR24w3SSfw9WLV3SW2kvRkuPoddXqq5au",
  "key2": "4A6fJTaT3HfzKzuvfkbj2XuAexhhLYSfwDF9Jf6aubSxznxn2LEVwZfPThry2DndjQJBTrCZnkix6KXd3zTzWK7a",
  "key3": "3WDoTB9mcduErCQ4hxX5fDMzgTyAgmbbc9EdWABU3SiZenjxnvhtDUi7dNed4WBj2AkSbEEum7KUW6YCpo5DLt4r",
  "key4": "A3aJ67W1yj7L3pWvvQmA7yFVQCPeJVPkJgLh9hjpQCjpniuuDXUaZ2K9YeMAzViu3tjuKjfcbGaxxmmBQuWG5CH",
  "key5": "2mFqM6hPGbD3TTerRducPbVtC449jCU8qVxAwxWNvHxvLwZwKT1pPzYLGCBygJ8KbSMMbRkQx1Bh4gSzBPXv69Zu",
  "key6": "5ok7mkDTsz2EgKSq4JVfhVG8NJos7DASdW4Ga5VbykidvHFjthFxjuN8osdoJDikNbVed5accc5w9fFUUjGBYeRx",
  "key7": "4K7NMYK62XLhH2og8K7f4DaCyzrtCHV6Kf7Scn8kB7dqwARWUaMuCPMFzT8Szp3J2vnQ5GhSsaNetYdZjAGir3bb",
  "key8": "HhfSDZCWReafzqrzTXysw9aQtijYZt3eVUUhVNhV9geUFqp5o1NHa8txA3EApjoUReAdukzFBBwV3iQzCvkSAna",
  "key9": "5rpdWXcsAoCpX9SVJDVB5HfS2Cz3guRuPrppPtK2Ux27bNkQ2e5p2ZB93UAw9Fth2vn9ejm1eULg6teekLCqNScx",
  "key10": "3ECoRUMM4M4WVT47ogRXGDoSRNBNcXXEkNfcDXqvC6YGFk9f2ANNLout4StRyEZoCT9Ap6UEqoiqo261db8budM6",
  "key11": "upFNEVubhMTj4sg5vJerGQZJsLWjRA1xaAPx3LFU1WHwpz5enoQujCQZPr9FCUREQ3sVVxQgJ7jC5GcyBZe33dS",
  "key12": "54VDH4zVaarQX7qkoPY9zhcLMWLSvtAd4jqR5Up2G855MYciczggaCqhSDZt7Z5Pauzwb8RZhxpAnWg14A1VqVvZ",
  "key13": "J45V7L4X3UtC2HqLRHhiyfNLj85pjrbMoT2ZAnuf1TbhjKVRXu6z5FGdQVKX775AccAoB33xiwqJvBLMNJr6MvX",
  "key14": "t2xzoYbHD98wLxVVRWPjp6zwQfnx2TRn2va2PZAaw6xskZY2bU43i6GokApqHEK2notQLQ8EZ5TzYYtNU9Gk1YX",
  "key15": "22bdDdkixAhu1b4J2MEU5T1znZbvCiJF94LUjt4NZeHVnSaFSWt2AmL1yaJ7M3Mc4A3k34VhbcWmqd1gEMZGUmnp",
  "key16": "5h9LByTTCWsuMT1mzRV5UKUi9hWLg1YsW1A4813yEVYJQXHrfXbs3dXzRVsQLtxTMXBxD2Ne4D1fpzhFTgXMJTz5",
  "key17": "4UkfacgDBvnxi88wbfUgbrAgx1vpP2nRoEXNBkZcvpvKzYjP9ADpEmFUBaEuv5gNrEtCYGwNCThqdgYGZ9oTHA2m",
  "key18": "4cAjVccFsg7gwnjikMWYzDpSbfEXEmVb35Yjg47ix9JmqgGJSK3wXr68tRon5FJFkfeLnV2mSDcsvBX5bUHkpPv7",
  "key19": "4C3fxn3sQUtG6GqPPwYNPpMT6DKzME8hMj6i6xWLLtgjFJorsiJ9LExuQvg98EnmKvXaase12Z9haYGEi6WYmdJj",
  "key20": "52FGWz6Xfz5x2BzgYMqktE9PVcr6bVYYacbLXCtx3S8y7SBcoSB6skomTtcNiHWnWyMzbxMunxsC5DNE9K5txTUi",
  "key21": "4RHeWF5DTo5fkhgK41Mc3sgWYGPwftqfmfoVoCMQqCLXkdq3jVoFWdRWKSvDMB936tHoRwc8LZnqDbvziUM6v4uh",
  "key22": "3osRvWFhbswdrFtNm3vDgExwsNFPvGDU81kbC3bVfmhSfTyVZnKC76GgdXLBgC1B7bwpftbLBURwFFFjL8Y8VPGb",
  "key23": "4N2ZKR9KnYZZFfAwsR3TQ8HQb7RP63u96N32wkEYyBHbVdgYZMuNmvsHp87B5cMggK2c1SZH6PnTxGZJJVGRkkes",
  "key24": "aYC11robgCug68RnwCjTRzdVRg5BTwcBuxU9iGXMgrb4egH63BvauUiZsS1nBMuPt4LJik4Ci7AJkqd7MCabtgs",
  "key25": "5cgRvej2yFxS23ip2YF7nPEupCdNLajFEaY1Jx1GhNsCGs1tJDjk4nvL3mMTxuAhK4HhEdbnz2QE6MBM4TbiiSNR",
  "key26": "5FtYfFzA6uwa5DRpRevMuCBpSHd6kDxYLo3LxtUm1g5EJyBhRNQo7Xs7jj77a3w8CViTaPsRywcy2AR44d3kTozv",
  "key27": "2Na3MZ3Q8HGpdL7qwDhxhsWB9gMDvMh3Vi3ooftPWLZXsq24RvFz99zDBg5wofXLxyRgb6WCXt7bUMdK2N6ZtrAo",
  "key28": "4EjRke8EmAhT9me4eQdzfDmY9nKTuGPAXZzTqUms7C6K2AmbnPttZQrAHxhhZPv3SB6L1GHv391LmfNLukUT8RMv",
  "key29": "dMJU49hyaQcKyraT5YCEbrxQjXDqdAzMC7NBa8N1A7rmDQGzT7CkvVvydQDqJWNQzzhtc5sXm2g5Zg1S9SFtpDZ",
  "key30": "4xS345ZCGsqr17ocYV4dKRoXTz15jxrXHa8B5BxnV3tTnrbUDWsLYPbeGKgZ6s1oxJabWDgeNxmSn5HmjJwQzrfr",
  "key31": "oMCNh6JnBaGMwFRpQQZhTcctrJcuL9ymtpRggRdud6g3VeGmTf3MULjBHRE2wcXuNiQzcF4HEdd4dUoY9qaPtoQ",
  "key32": "t9a5Y1A5JsQfKwmZhkRb1rNNj9T85HezWWNjpJen2FaU7VdHqZL8QQH64K8SWYh4hHXx4kEzvX6zuJh4G3hEuUX",
  "key33": "4xvkf4cYgn7PJfVsikwygk8tTrJ6Lhb6L9MSPpr3mdu5RWNdagXdHCN8LnB7ui7epYjcaWXcDXbrMdLwqK9rTdEC",
  "key34": "5PbJ7oDtqKG69Y3WvUdNLu4kWP1ht4MmNZMGWppUNkBJ8xoSBxegWDKkbLt3dFTVBfDeeKdvJWHoCzM6wozS7K2",
  "key35": "53anhoTFpBa2koWu5LoLTPYXEg5QpDzQjLi9VNKZyXSbfvCnM1gKobzhyFZkzAzK54pEqMxjevM6Y2So32VugFmN",
  "key36": "4WGPmdSmgeXwAagWN1cbXT1uFQhAxS9TJxzoXsXT8Zgg9Uzh2wnEcUdnxbaWiPskp6Qvvz9PiNYQ4ACfsiccwGE6",
  "key37": "5rEMGkudDfZsLYNrVPHopCCQ9ZSyoH3SbEvTGVZkZf1YukZZGLKttM39n6GM4xYh9UmrA3UWCctsbhuKEB5Dvdeq",
  "key38": "N9McgE8rxEtWk5eD7mhGdBmLHxMSizi8LJaegEVEmveEPCstcyCREyzTaa624YjxQurLLYHCi39LMuwY8TbqHG7",
  "key39": "2e27htMTvtnyjHZzaf55v4oF96GnMMFVmKEAovpREVR3XC7PbjGDKFKGNZoyzWL49iqk9iWyR7PMKSQiL5HCJYCb",
  "key40": "3vp8bPyftagT9DEuSx1F99c8TZJf1aC9Pa18qpYyt4rKGUaw1P3tzZVfKzMFwQceGESUCAKdHQjmj7hbaTqkxtBK",
  "key41": "5wqCaGeqrQVzM8hYLikCXip78mCUkaQXnWKZiAeYQx7mT9x8fwyj5Db2VDps64AtS3FLv2ByTrXCFSer32ySKVDM",
  "key42": "2q2KV16VeHJyBBwbd4oynghDUf5unr8GvrLpXt2fydiMUoR2TKMQMhWFumpK1GHZvXHaC1vUzFw5ce1fdC5Cczge",
  "key43": "NZuYnEABsnV7rAhW3zsbMTbyiB2mJcMvfgqJkvZir3VwDAF6zYVNVks2HThYyy9Pjohnbn7LzAUXU1ZH3RmfjWC",
  "key44": "37JyZXfFZ5KzNzxxwuTjRxf3NMkmvEarYDpxKN8uam9LKxYnN8P6Bzwkrn6WkUyobuWGVceqW2stxHghHsAjBdt1",
  "key45": "3yTRN7qefawvTaSo8Gwq6v251rAgr8nsapAT2Zv3fh3M3axDrfFShfB4iw8SorKRbEUq5oPwT6bAtq1MJJ9W2LAg",
  "key46": "F9vcWuwAqMhhttvDNtYb4LfBrcoAJxMKMnutHieukUUsxnt4HM5BxKc4cQXup8FeMy5znh6EZDPK2owJhGSphGL",
  "key47": "5uUTb38gAb32kwtv2ZLjcgEnwDR87m2eRuxhpEo3Gw2kSWp48eCqzw22w7mqVEKmmFkAWAPyE2bXh2mUQs3wREjU",
  "key48": "54VGBEeeTwLhwKdNCd9oJCp74JTJYy87RdeiHaYR2QE3z5D1Z9GKDFNyzDHU4vH8n8z4uHKSqJjEKHbCHDLCQjfQ"
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
