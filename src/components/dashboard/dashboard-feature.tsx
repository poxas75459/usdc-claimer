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
    "4gf94rrm3xVD4oJ4dYsi2HrPwnVKBdxkVGjyz6NVUziXwaUAZo16GfzpJ6ruRzQMD5E4wUv1pi5yLcxWzr9y1PNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bpLL3dtHLrQZUGc37oBRdLwqtGiNLh4uvEGVTksh1FKq7XfJDVQxuE4q1VaahUk9BuotAp6yXmhTXxCqHB43tWR",
  "key1": "5GcAG8qU8ETSYbV2GfcToY8uvdrTzKh88tALMNSH58RgriNGWCnYttC8mfZSRPaeMbqo3gH1wZGerStT7LNYEAiw",
  "key2": "9xDsyvBKBt8JgTKm6Wfqq6fF8vBXwJ1PAQ5ANrZVGqNkGzxdzMHDnEBYNaKHyEkpw1jka7j2qRfSCRkFxzEPCJb",
  "key3": "4B2aaKkvEX13tvKufqhMx2oAGdHCb4iUCvGEVGTXNfW8uDmnAujdQuRKnVmWnajWKUTcyHesruSwVNTtwYizrVMy",
  "key4": "63YqabrE9cP3r5MdZo5Kp7u9n4spjxCPvV7Gh71tW8r6VPeGCVs81FWvueFteT7WKmQoVVGcPqon2ARMhmZJcc6F",
  "key5": "PTbqGzRQqNHTSEsxQjiwebM6cJPCZ8PV3UJrhjN5eh2kmyD3kP7Ypdfb1H7DaiyH694mggY6w99HnwRTpDkbJnM",
  "key6": "3actZXypDPopStP5nQEqp2z8ZMbXzXhNiVTS2ZomVSCkBpNT8Mg6DvKQEkpjh2YnzsXqbYzUiqhnKfBdevX8F3U9",
  "key7": "3QKjYqmBSDWBQWmh3fY1ge7BBg3urTB6yURnytuwYhEzAVuKKRDT5zURiFckHqvf1mJyBjp6KjDr43Rzgg6cs5Pr",
  "key8": "3n2YUa9WmCAo8yndi3yBKN4xEphVoAhn3WvqGYE7jDQgWHp4swPsnBaYbwwJpvmJymF3ktM4J8DWK2MmXfphFCMo",
  "key9": "2huQ8NxKxQqEmjDo6pNHLQL5EAKghwgB8DEMSPTU9QN8pessZyctxU4VoVMqnp88PGqN6GmR5vLvd3NewU13Vf61",
  "key10": "5tKd5cuVpx39VhQZ7Jz2A3HgNWBsJAkmAjuMaf21ZmXxwFg4SvTsEk3k2WgS8eayWQ7nXzFoy8RiWPwc2d7H6SNC",
  "key11": "3rgoXrAnuMJgcooL3UGktV6Qm6ePYwkXrfgHPon3aPLfp1Rx53TADbKUmyNeZTq6ahrJ8mbacLNnuw9E4YGnJbv9",
  "key12": "4C8The2dH9o7XNgJLdw97Uk4bcbBboVbjP25Z6PYm8BgcM99LRv9VUzbMRbGRc5hrC9hX1biyWQSnggxK5ST5VSt",
  "key13": "Vko9MrLsjEs3kK3vTyC3CVkLDSTk2J3v1m6KpjSzQQYM9YK3EPJwUnbURVE9U51HnL2iKuqUrKpifYjCUtGHfmv",
  "key14": "5KZDRDwVjGW2zLywSoPiwZq2vEnKkV96QH6rmkrCMkfCAWV6313k4HocTkvfmU6GE1gM8quVYgDpWVFhq96rDptJ",
  "key15": "iznLKe3o5DqVae2tQoLGd2FBtbopbiajV18NJJ3WPcMesSeciGM6hp7LcZyZiiApDKdBzWBcUjF2ce8msaMx45S",
  "key16": "7ZyRjDDezR1VBrJeD2wJa8mENiFTTkDVrfcfa2YU52v7g2Mo5aci8JzTkCHiFNUp7iFdBp9Nk1SYutCL2We1iS6",
  "key17": "vrNVigt7vUWY3ZCaKDCsxDKEaqpD4t5bJ1CzY9yRQyqEgbdcr5W4mB7Sxh8mmMMKGgjU7nMeKure97yRonsicEE",
  "key18": "5QV7V74XrMKFD8q4R7mK85WuzAT29teWxDcxqASTRwRdLBUjhj8mA9ksX6Z2xCK66jEFzy3bJygNYx699qP7nUip",
  "key19": "3XcyaoVuGW2rfQAhc3xvQKKzyqmgtqiw8a3Z953qcaqRFRbPCncUWm51RrkReGWzVhuSLj47Scs5QtN3RHv7emp2",
  "key20": "36JisHdUdcd65xK3BjNdMCVpiai1asoH8LgX5win4mBk6kKWEudgbT9LtE2oWaj8J1WC1cQVWwkVZxZVPjwrcMvK",
  "key21": "Dycr3927fnLPgkVGaiHNgBfENK8MzZSYUceH65Jnq2Y7CN3GioK2kVJxDmBoKyPBXmkbuHLMxghLrM3zYbCnshA",
  "key22": "33xVj2TvYENFXuvwPQdQukK554QoJ1zpxUDL1fq78yMevc31xBurGegmifz84WV6mGZAWkmqkoAWcHFNzRaaXY9k",
  "key23": "4uzSEK5jkC8187mR5wM38jKhoMaWT41m8iLt7xhDnMY9hvir2fFKVtidmom1KmGPEDh17nL8YPypb1Z5VB6oxwcF",
  "key24": "3Fuj8hJ4tows3EaYRbM7JiouiAtRPjB2izBGMaSF2GUacvkNR9aHjcGVi4z16RiLDxP3LHsRAKrrwaZ6j9x86TLL",
  "key25": "3H6UEtmCM31JjJzWeay8cg86okH5rV8EZKuZnhNu2L4eRmSsia2M4iDqDPYDUdm3BT5e4HUvT3HcWLMZ1ACuyM4f",
  "key26": "MC81XzQroK4vgHYBb5Frwb8PCi4WZhB3guQHShkAzX6ggEDpYjoD6aR1DuwhWjvHCcRgZn2p2y5wbX7zfdE9hSC",
  "key27": "4VkkH8tkUahqiDDXbUsaB7y2J2oz5SKaxbvwN72DGCU95f3eKR4dWusdY61gcDsRbokkeGd7qCYaVFCH1u7insbD",
  "key28": "5pcWp7qQ8Dhu12HYFzJXosd2ZdtjW2kE3vm1u5orVdQ1cSHTDxAS5PvY1HpDQFHemxP3TRv7KxPvwcrvQMHypupT",
  "key29": "PkXcMw76sGTvZEE3o3fuqR4AJB6MvbcALaegnqPmNyqgWirTxFnF7vuaRmCg5dXsDeAhSrB6TVscsjNXpgefsXe",
  "key30": "3EFtrQMw2HBpSYNabF1DmteHJr8m5S4pg6C95gqMo2mMdhm5LXdirFu9Nx4x3xHoQw3Bt4nWsRCLHKqHbkqiQzrf",
  "key31": "5d25NsKBMK9FZsTqvZuXscPvkLVNg2N9jnex27HVAYqE9Ud9HboYr1pJrxrwfZ2mK2GTPbchqioUCFAiEsdmHQe2",
  "key32": "sMDsAs79RwYdJb5Hjq7fwos8btj3FhFNKpz4L5D19qgZMQkKFeo3SNP2vUDEo4w1xcPC4qrMNopHi1fBAkcH13L",
  "key33": "3gt5cE8VgyvJp8nJ3RoQUfrMVvC5rrKM6YCsbHnSjBadJLWoBrerTvwD4xLvmwSANovpKTcS3EXk4gQNcjaeqdyV",
  "key34": "2tiS94AHQkc7nzVe8vxYUNVWj9bPHEmfkZkhmtSYewXdmATcugqsAy6RXarkvSkUsZFo4hfb3C1J9hvZxhjDHe2W",
  "key35": "3Lpk1FUQ1FY3oMy9yqohwE6cTJpz5mCHdJ1VbEs8SdyMWY1mNoJqBqvnYrBiK8ept5Nk84fRusXKkFvChoZwDuY6",
  "key36": "5DUEHwqUg1QakS4LXzebSzuZYSukqCSTBH8PCErvmtnWDDcnzVGDCrfbV8L4jZgeWmHWdKMLHVC7NHDcNaeGVDuJ",
  "key37": "eyBxhdWx423WBeEH8MPZpseYRJ5dNfvw4FvMrrYzXz6tk46W5wNUd59QYKg6hYqS4P1Uz5Hnai49nys3myCeYxE",
  "key38": "SVyiK85D6mYhiUVHDU4sDqV1FLYnPTUhGw3d6VT1WpE7rCRyUMsxbQ1aEXjfpujQiwvLvGJJjueM3itDvn7i66x",
  "key39": "8KBiE4MvsKqqWM5Y1DABv3uYPcXJTRkh4vibparkE66G8E5XZXyDBmjrtiLmT85rorkCcmntTR92cZ2Xvm5Dau2",
  "key40": "55p1WaPMJWKteifds3ojdpMZYk9amwrYBqFKvGYcnVKwaw4q3Kqd5VitaXiMmamv4vakCDRn741tEbDGeuJjCsjv",
  "key41": "z6uB6KU6dQM8zJm5P8tRZFe1xHnZpwfzLkiMbjUDdtgNxL9EsM4t66GFVf6Fsbv2RY1RdThkTdXaxysKVRnj12e",
  "key42": "3V67dHo6NzfCA2zkXS5H251MW5zUwdA4SxgJEL1dSjcrNAuU3mE6moDypF35vKtw7mQb3T21HjZvjV4jEjinVv4G",
  "key43": "65r6vcTWF28WRwtXHoyr3oSux8AmG9yxmYQpkFbGoU7RRrJFJtvQTu3vPcP67EbHKnPwB6ru3U7BxdktJkBx13ox",
  "key44": "4q78fc2dscL4pQUDiB9WYRD4iau88FsqL5Uu9dQZp7rvfp5L85g93ErMJeVZekE39UmH8H2pH6GQCg6HL6nbFCzG"
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
