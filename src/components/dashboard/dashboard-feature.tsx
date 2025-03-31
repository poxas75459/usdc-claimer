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
    "4dosGPBDAE41vQhHCD7eiAFjGcrN17yCQ7cuX2VhcnoD6RSWtH5BfdFnXD3PQRmyVDUeUox8exZ2bRq8h1AvnrMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LK28M5kf5DkcC44j5CAQL7CCjiwfMmGKbrTnaMKdWCUpXiLnGLHNsYgVkkN38uARbN9xMy75mdjGeWCCeq84AoS",
  "key1": "3VCo9YyQxqsNRnFcEnXta8V6adpPQ9J2byN8R9PMNBNyjmbmETaHQHbcDRUjVSXuU8Xy2owaUAt1Lii86SxUaMUq",
  "key2": "2JZk5twiavb6sqDTPQFeXz72f5LK5981Cm6t4kXrQ8uB5XRKzAP1ovHFry5qGtTye7KaE6moSTBKLyttLMqUrGK3",
  "key3": "nxzSdvEJAj6iNcnY2uxzwtofdtBbovs2PusPbinwfeNgu7tVaqv74R43m6DTKxJfGTCqQpYFhcVNKx5yWfVvMNa",
  "key4": "VMuPXhaKhJifbfazMmu1fpuFpaTuxqro8MYYevzRLhSsJ6WgDX7THRNmrybK6YCtJqjQPKaaBmDkPoSB6wH1wf8",
  "key5": "3DaAkDJHLg4odY9DiJdjDoYtCYoVqxzukfTAhGY9msqNShyoQkuTPDiBZZfjmKg9Rh4fHnspBbQfHBqt7x8BQTdv",
  "key6": "5U3KXJGn5uCEFFvgCAv4uCWp9Xum31cFwtv2S9VnrcaayHXSn2YDhs5PyxF4XS2CtZYXJjAG4rJHY1cZpk17K5V9",
  "key7": "Ao69vdoR4MM2MaBZXbrKStC5mNTtZgfjBTRLMoEVTEExAci9x3M8N192gEGC8fAPvd6tGw5ZFsz7xpJHue6ANyM",
  "key8": "5gjmigVvamgTy73mWHxvW2YQy3tvJSDuZLAdNttNayjTBcDbnsLh7bMY5GZ6vsUUWMHmGS6mECfyN1xE5Z8er6pW",
  "key9": "57sfqV7y17GzHbLfjVxPDeUJfNdgzCRRtZwEwa7KBFZ6r7GSuszwHEPKDSxXx5AUMrMqHNews68o3AjYCtxuSiCa",
  "key10": "JnrzptpERCVNxDknKKT5T6gnaqFeQvqa9jw1LPWzsmTkrMMnSeVEKXcEHeWJ7aWCGqcMkXkBdYfX5FV3uyrzrgx",
  "key11": "62banDMT7x1Si4PRFYwdAPfFwmrHVayKpyzxy4j4s4BdAhqhXateEYVJ9hUhGD4N27kS8JXDqXRxs6bCiLktX9Ep",
  "key12": "5oKChhq2HFufYA5JEPQHnRpiEjYGXz2U4yEBzufQpw4aGWCjLiMeK1dcjqH4DbhME5HCfNpqN4znb9aoi9ZaMUb7",
  "key13": "tY2KaEQRqK6wZd8ocFZv5wg7eR7pudqv31SH43kidpwAHjhAR5G8Mx3wcifMaaeup3Dn2VFAadiLEeHwLgh4AYY",
  "key14": "3m55GZVgRzdCBna2dqjjRaYHKf2oHXuYtJtWTGuQyjLtAQLoUXMGLWyUaQMYU7CptLGr7bZza3G3awRQyZFStqCq",
  "key15": "4S6wpQo28BA4YDUcVqbBj9vRVyigMuLgt2QHkB6rKgpsHnokXH3uDKDtBkqh4dstYD8geSfRMYo8F8igKDVTBFx5",
  "key16": "3Wu4H2HsuX9U7tBmUZ1a1rs3CEELQb21vmu8PnJ9HtcyfsifqxwrWfjYb6BRwVjxBCZCzNbZqgnQPqbRyx6HBu2a",
  "key17": "JMGwqVeDnSkBEQLVggDVDiEKjJxhA4X8V9y9FbxdxNA1yehejnc1vzMbtueYExJBqfQeZzLS9DKGrhbbsyNeTch",
  "key18": "3TDP32Dj5BcAmosTjwfRAPiyXJWhR9gHwPCzUWTKzSdzrQWhyo8xuex8sdp6Wspoz1u1wi8szxdgZ4K36TpeHp2U",
  "key19": "39Y7vKtfkM3DWDffz7L79EaHWBZCQ27nDphLNhjoMnUp9jPz8widXquPJv8CApo5Sv9DKfy1wohEDMNbjn96Nbyo",
  "key20": "Cuai566prXUQ1mob2fcNbSyMTR8nL8D8ULz9iYgdB6MRV5qRsVKTSxBohSmrLAs1eVdJcqpEyVJnw4b27FPP7Lr",
  "key21": "4FfjXJ4ogsRU2Aa6Ryehj9y4UCVnLD54yYuW6nVkPj259qYBLzDYTsfePb9fmPo22GiurPMHHWvBr4CnDr71bPV2",
  "key22": "4NgA1VHzFALWq1QGXzQd2PumoBS41etin9GU6qQZj2sGKbjeAjccWWZpbdKiUPAR8kk6GwJzZvCqdqxCWWtNAikY",
  "key23": "3goYLArNsri4jA4YFjGniviyh4t3AtFTuJKVEzjuPEit39wzrrrnjtmRJF5r71Kf3BWmZtE835pDPZLpFqZRmP72",
  "key24": "5993bBiCNLyqEwTKYk8JFT432e3bwTWJBWp9FfQgAWNcZKxAon55KgdNoSxiXh19GSAzLK52pATbqU3P1MLtBZ7o",
  "key25": "3UKeT8Tx4i7Hg1nL2zCsfQ7XcxMAv7j9xHWBxvSXgRiQwakHa5EwtaqrGXLTqQ2RAhwSrRcGNovXQ7YwQC8UepTa",
  "key26": "5nZdSYam4oJbA2mEeRHJTv8kKYYpjyzBox3F3FXZ5EbcMXsQE1MaDSZy2etm5FAsXw4XHQEp2dGsvVkqJ6io7y29",
  "key27": "2T8uAjpUMT6uJfcdk9ZH8Xx51uSDSqzX53q6v5VscBjhFXdguvHXAgS4vuVgxmTMvntDBPQJF1JgSL29T7NPqdTT",
  "key28": "4HSaziugPcUD5MUjEmSRkPZmrZffbF1itjKAWtTFEpmfq53aP5dAzwNumo3c468L692tSx8PTBwca88ScP1ZZzA2",
  "key29": "4sxz51Q4xcnWQXWWTpoujJvVwMV5EK2zWngfzRk3sfQ3sxBid1bVhBHD3vMjXWkxn6dTjT2XhsDFkJJteyyGBC1G",
  "key30": "665Vtzd1PuMeYaVstAwFtSiTf7U1NRD8b1i2yhCaivngHWFUbthUbagLeM1fkKv3ekRci6ig4NWVz7EYZ9q5P3vt",
  "key31": "5AZWEvLaag2FSxoszQfkLEPv36tGXjCmz5sKFkb1M812uisk35Fe8Kkyn2JmJqfspbjEDuM4iLgk9XnwqBWV6sEu",
  "key32": "5FZvQ7HCFWYfqx3GPQQK7AKYgSSkhUait6wZXWb3VXNy5LJznbCcYNXH45iRDnWV7pybgQfYFELttsHbU6hoxbpx",
  "key33": "4YGfvMjPNcb9WsNCVH9TRqbKE64gjuGZZNfSJKYsMzLyuiNTUEByCwqR5rNw5wfogMbL64exJNhPvZUnMz2nA78q",
  "key34": "2kL2idK4L9MA7pvBsB8dFri1A197DmoKRKBMXXhwih8Vyx9v1TJuWFQf39LjDyr3RBoAEc1NUcaKYv1uXoXYgFHW",
  "key35": "5232r1eiCpFMZJWjTWhTmF3c3TJPAy35sYAYobeFvzNZn1oFkfgMYAxWAxwwt3AMAasDe99sAJfS2bGHju5b4xpQ",
  "key36": "455gvbqgTv6Jif3pvnTYBLZGknCM1AdTtgWzfijZynV2DpqmFEJnKbZoxUPXtTdBRXy94vGBbHWK7giXC6LXe83h",
  "key37": "4oqNGySgGYXRCkD2iS6r7ZxDWDAai8KqQzUaeRpUx9wvc2Q3TMwfW22mVvaF6Y6EtzHkLTuxsy7xo4mfPZsfXzuv",
  "key38": "5MD6nvdr757WNgW1CrPKrrJu5X2VUVC5e3Ydnzdd7PSXk57uW5denVwtYxNHC1pCfDL2wiykwymQWe1ESBVxkCSc",
  "key39": "5PXCbMaQtpyp4p1MgVJBvumNZU9yXJJBnFKtKkYYJQat4NvvHs8KyeV1SwcciarzCA65gFhAR7BYkAhuZ2eeAd6r",
  "key40": "2dTtfZwuyA1JiBD3RFTUxhVBnQ4i3dv43juciBGP6WUK2UjTndJZjR12JTKFsCe86DowJihPLHR5tr7fLUtDdJF1",
  "key41": "nKwpfoN16U9hfg2SSncbgs3i4Y9s1m3x4HaY8ykGPuDpAEyhkPRNcXFWkmZtqQFHjux653FBAZnjn7em96KjLHy"
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
