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
    "3ipGzArEmniXW5m8k5SxPAyzdhhbcYpK4aH45MXrRbg5VcxoN9bbZxcJ62EPzkogAzWpQQ6BbkNWpb98T8Cq6tHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9iVmi7Apt7AYGmTyLEp9Wb2zS6bjujUbGgJV3EMB9zMB74hDB4SvUELgvnsBiz2EE5XwJUo9LAk6LuwLGbuJRR",
  "key1": "2jAeHiUjtAJAfMJmXTveqSGqdmvVPUg9pSM7jihHxM4wmfCzyaXRE1NzV2n6wEMDKJZm2ZZnszLkCgPEfxLwKEN1",
  "key2": "GdAisKioGP4fV3JqUFbTBYVs9546iefxh1VtG7GXhZT7dbmNMQsC2QhEp1rCfMwQtr1XHEEddTcxq2Q9XEV4CDG",
  "key3": "3mTrgCp9eFoR84UACQsNP6WSEWa36WF57nD69jfc7y7Z18GEcRzZAAcYWnUcET2ftoEPNfkMccD3exwRaZe6spv1",
  "key4": "z1Bonqc3SnQeBoviBgJmQq3974jPABZNQ1xR4ZbwdgCaQh4upiFYz3vAdkmMWxeNhEShYQUx9oiZMD1t6Gdp577",
  "key5": "3Hxgj3WCAVNQ5Zv5CLRFfC5yf17ioM88di1m7axgtzSNQfUBUXFfq84zK4V7qQxTXax6Rz83rv9KNu1yKwK5jNcf",
  "key6": "3SVhnrTELvRFfH7KE29KJDnzqbLyYg6S78XDzUGhK7sy4Pa44JF3LbYTSb3JSQwzPrR8kyYj76FpigRY91LHDAzq",
  "key7": "5AmjA5dEoEvmUXSdge1pGWzJ4TE3MkZGbsTf7nWLbC24EgbDyimAVw87mR72BJu8vpLDKHfdaqqTfcFfR3vXgMgx",
  "key8": "4dAGa7WZCG3JQZfL9d7SQSP35EiLdUKsn93ovELKnfZFx6Xp3pPCS3dxK2WE3EEGQJaaRdm5UvqQCp2YizMvqrks",
  "key9": "3Yi6h9Zzi2yNY5fzKUvDufFXykd9szZW1i57cWuUYVcjGiXmPVMxSJS9JBr2sVy5iEhJfuz3kWwbodmaqGDky5hn",
  "key10": "3qq7Um35YNEQgLHMwRR9KoqpvVnShvhnFxoKC4e7koiRKFP6dkkdTv8pGZe5S9BDWM5Ad9vQzjPRzYnC1rkaHCfZ",
  "key11": "3jMBcd6o4pSbjexHU9NGXVNJqS4jgzUouVaChUX9QHrJ58Bh5wUziuQTWZehRhT4Y2LRv9ThYYGxHyVDogigmo1x",
  "key12": "36vHxXZTYnJ2rnS3eckALcugqrZ4W4BS24yccZV8DNLqDyttZXYcGpNt6di9wUBUYdPkfH5XfnZdCmN8qUn6fufv",
  "key13": "3FBuwMeZ4Ptahf6TEfsFb7famBXRkgSzJZJHquLVXBtnVn9nTCobkELuXRzxKA5wC3KcNMrxstgQaTQXZbotBBma",
  "key14": "3LeiAVs8386bL7LZURRTeNJ6HBAn6vFdF1PDSyk7YTCU7hCA7PdbJZGWBkL9ebtypWyihMFxYNJocRAeBYYxwPUV",
  "key15": "2DejwWWfNFfuQzy6q2MkwwxH3N7aHVDucdTEcQJA8bhTPoSNjci42C9KqBcAakjEZa9XUivmyKHrowLqjMVLtbpZ",
  "key16": "4fcV8x9hWHbsvnmnj7ybkt1j4uFhxuvuZpDrtCXgjczvm999WEZzNXvsff2uAyuifgsJ647Zs6mcRSnqAEWczx3Z",
  "key17": "5Zs7JimCD55erqhp5ZefMVdXn3US2rhMnbsEaBhWM9YAtSRvN7XzBic8TEtj2sCYvw2bJFhXjHdCMtGyp9PuKFGb",
  "key18": "4CkttonNrEVuANWUtsebFjRZZDmzpso8T8HEnaTf991otHQtjbxHAJcYsZfmGEdzbZ7FhtatdDZe7pSnVJ7K6TqZ",
  "key19": "3RgwMrstw22ahmGWKJE7t5VS7uRdeNC5Kik6f6mJhDWe7q9xHtJYidNVKMXnFLLGrtf2u2tG15WfrU78fxLd3cSv",
  "key20": "3cDs4U8mwgDX3ufouSohjzHqXn7qxsQrKVi7CjxKFg17g1HF27bTd8Lrpiu8dgZvUNWr2ocG59JyV15bnA5Qtkvh",
  "key21": "3oK4PUwGRP5bPyGpDmRG2tmL5Qn8xarodyaPdSKHNaFavujkwEuyXkFma4WcLjp1zGXqWpxQW2PzSgEqmnDtDKkD",
  "key22": "bGE72qp8cW3fgDu9nZJNNUkMP5fGfLS7THHRL5XNzz17JvsLnjdWZE52Asc8HwXizRj9uPQAwve4tMtEwCpKXVP",
  "key23": "3VXX9DvLDtfQV5czKBsgQSjh95RHtjJZeCYU3HtSJw3TepSr7mdk9Qo282bznAcJFGRYJbmvcQ6iNGSDjaScjSW3",
  "key24": "3ouwn9w33r77eksfjvFH72BJ7AdtPJZRKXkXBjBPfYrx9wxdeRSvAvQ14XfBY53rpGxk5tvphWhHYCc9Ts38PJxa",
  "key25": "5H7skcMGB2TsosNdZdCxbxX9aySzWMZGeL2VTKnkdN4hSnmdSkefnJLnJimvaFGUT1ph69Jx3jKSqmvjvfr3Au3j",
  "key26": "2mwCf1qQZAiJ3AYwL5wp3H5s81Y5LchgdeGiPQRgG6DSE1UR9bNxXmfuBLzK1ToJXwwY8aibftzk4EM81sHN9jyF",
  "key27": "45QMuCaCg8yx2ArepqbXJNfZo5GwpjA9uAgYtuhBoqREfYHPiGaSdeqLB75WadFE26dtu5b8iFBa8b2kotJeLwpL",
  "key28": "37vfTff96TiG1H4KpXsfjeYCVw8SGGRbazpHAmnAHd4SinydCqppDhGH4iri5ojp7NiUcXP458hH77rDjFmmeZ6q",
  "key29": "2QwXxShXsPeWXBjAzFFWFMu8Pj9VJMRabaV1F7raqrwkbhrQTfP1GDiSu9dJtdWAWhRdxKDDzwuyBLyitr89owh4",
  "key30": "3MjAGDdWpjidFPYPTJDdGuKA7NwDAiZ6Hcc69bxr6JzTpwQjwdPjoaV4SiM4ihJBRquxwGD6ygwhLMbyRgrE2mfM",
  "key31": "3k7dFWGT3izoRRq3WkGKiQd7Ce6nuS19YsizZtRjq1CztYBGk9ongJ6kfvzJ1bRYP3UewaXE3TSR6JkWX9G39u3b",
  "key32": "2DKqNkADCiEBWQtn8tNbaNj8peGhbs5356oUpmfGWApeWdAUborFcCyVTrgg95fPFPTvRikDnM4XppRYpAeUhD3A",
  "key33": "4e6A1jSomQrwGfiR689iVqCJ7XQKaQb1z9ULjxL7HL4Kw9DiyqJvpeFJ5JVBpPNgAWnZiKdXaC2657Xd61fsP792",
  "key34": "3WP5PBbYpXczNg2cFSmfKmNZRBrQCCq3uGPM4sa79CivsrHosfGKTfHDKwjVhJpD8U28xGRmN5k7pPhnVAP7bdUs",
  "key35": "3kq9t2kqrsukKtB7LjWguSxS6cNXTbU7H7qxpDWHUpx97XkU9SjbP8GSRdX13H6AkYAfuWZ3ueyhnMjct4eSg2Mt",
  "key36": "3C9bFnkqeRWS5Nnt13xTQcE73d83rFRTgPnyn4Ksb48TFioY2EbDwWs9kdbLnuevGy5GdAxUuWHMZPBQJUdu9h7x",
  "key37": "4eufAAL9kzsuyiSXctiogzX73mbdBYDvkf6qYjVSS4gkF1ZSKi6YNZjmTwp1Aav85sSeZGBHuHNDu1RxmxDxQPWt",
  "key38": "L2Hs4SB2ThGbcN1Hidt7FXVkEWaUtFtiP1vXVcmEkMfQWFyGSQcQ9fY7RJDsR7WMdQXgUfu3y9UeMii3harhrhX",
  "key39": "qLnLNfJ61ZJHeUMG318ME9im5aGRevXSqqNPZgvuV1MMsJr5f6V3yhe4hgx6EbSynrWf28AnZESahKLkadvE66A",
  "key40": "5Cr79pEWAbNyHTMCzmX1wEXVo8pfTwEpKegk4uh8ZcGF4L4qQ8ft1HCqmSvKsafjmogZP5twNx18hfkA2kTE9MuM",
  "key41": "CGH5wnTKoHw7xZPtNRD5HPodZNT7NfxQXpJUdFDfac2TM6LDQYTJ4m2WVYToigGy7M4PBctR1zgmJd5p8mJE8f1",
  "key42": "4Zi5keXTo7jym6bWYX8K9q97TEGi5bttaKhWqwe3mpFCtmz8bx6ZGHRcZyPPiWzPvQNP3F6uyTTGfc99A5AjYVoN",
  "key43": "2xYdRiDtxEMSMhrJqxRUUSXf5nP6UR7AjGwPJJ6ixkkQYeWadazHJSq7PJtj2ykmm4FUS4yJgZ1ut9nFWkniaSb2",
  "key44": "21K3Cw4hMjgzyHZKasdwFr2yBZ44adphgmyiXV16BgnySSxpiw3mprQxTS96z8pdezJ6MkAMd6k5t8zdRd3jqJRa"
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
