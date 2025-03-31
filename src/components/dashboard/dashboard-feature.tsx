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
    "2NAUrBuSUidir5Mo8RffDf9odDQq39GYUq4478ha6uSiBqVB9u9sWhBjHnRxoPjXD7NRMQkjKS9JqRYzJ4wnGgBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NJYAcu3ht7vCz9mM1nDrnneMbjfwTxMkXcdr3WAT1tBfYVBJHfYjfazYcYQuhJy2B5ZmwhqoP7d4JZ4Q3ZT3gRA",
  "key1": "2AmyfNxuaD2MWfhnfoBY7GwXMTCAfmbgXVdQamiD7batETDcJ13z14zPDbwdTAF7yuUSgHX3kXe9MDksaQ1oSXGo",
  "key2": "5zBX4GdyxsG4rowdJrQ7GMYdMYJwAWAUnUzs8YLxHFa3Z2TCBLxZUrc61cWWhzfp3BzLnBPqCV2VUs9pdbZ4bfjw",
  "key3": "44xU1VmjDDmrrMXLbGFg7RpGFRdPSZsbwnEFCq7AJXYVrtQVFdKiWeqWENyoFVXv4TRqnseVfoV1kdxqhLUgU6Zy",
  "key4": "3YZpAGsywVLZEg6QvkpZeDLGv7fTZcJpt9HwibKM5oaTMJ8bYJWADFEv4AcYdtuTCXThQCzdYs4ECebzP5zywfNe",
  "key5": "pgmEhfoQTaNf8PpZNsj68kpErFSYHGDpcH6hiHKWPycCwAkEjcFvBovbUgcsa3dFfXBnDCkjRQNRTtZxpnuPetR",
  "key6": "3oLv1BqpMWysxxYZvAdnAaRBFgVtpQCHpb6X1Y6y1cT5WHPe3RgMa7Sym8PtGPwuzBAy92BKZJMMUPmXeRBtc6id",
  "key7": "2qYwLaAMVoZSZsEqcSWaatAYMinfi1E5AxW5GiXDqKLdRhRF6nyTvvXCmEfPor3Q4sg74JGRVaCpAi2BwRJHw3B5",
  "key8": "HSCTFc4EDVc5GTUB2Mx4oEzptm9M16qxTQBmNViA6qTg6p1Cg43WgbVwLyUXpcymDVsWeMNEMKNLTXaGp4T4j8L",
  "key9": "2wfcWBtbUmzLh4b3LKyhEDXiqdPcmAVxj3h3TaPaBZiPnNE7GWo5Wp3v8kRrng3emJuZzTk3TfwkATwMDvVgmYMS",
  "key10": "TLPHoZeuxXgpzo2kzVyjmrAosSgAu5AEE9nUaw95pAUVoUhDTADN1Hpn1UuZqRrQbw5bb8wvgLZ8gDvW9cpPpTC",
  "key11": "2RnskSFgcrnbXs1q1d8b7rLGmmBMDy1eF3tTjjrMgov5cg5pNCcuW4LbTJibE3wF2fVhW45CBpyuSzzZbko4HAFe",
  "key12": "4xGJN2jeGbbDbKYvupRy2AETdf6RKZ1y9MWvkXmcjkT4AizstiRXhzbGNZYd5MbwC3HGxh7JLZJ8A2semMpVtsFr",
  "key13": "2dvLaKNjpf1xqEkBAV2nzw7Ls3nVcVeeAcxmUevpn5VkYbTXEFnwwH5HiXTcvb7bxJHtNYZ9ebZCcjj18YpWwjLw",
  "key14": "568oeeAhu8vvhxiVyApNHgq6C5nqam9uxR9kF7KjMGhTG2DBdxwLAci75DruKmQaaufB3DiC41D9CX7FSPVUKH2M",
  "key15": "3WP4z5yJ7AWVM8qzcCRBgUWDind9AqQFXC68jYokZfw2rCDqxsb9evj6WDCK38gp7umasrX6RewaWtoKYq52NpXk",
  "key16": "YEru7Mkupn6tc9rdhpqgwXryjSrKd7kQMRdhPkfUMDPL7Yvh32JXqXZpybGsmrWwpASh5h2jkFosrjZjMLDSZ1S",
  "key17": "5QzRfKyo2n92hVVCUPRi6ytuxdt3Ug5bTupf9gGCXBxte8f3J1EBps8morF2eh5otuiL9mJDadNTEJC7JZ6Tzq9D",
  "key18": "55BHqeKUsF3ze4w4pSXZ95hfGjfQeQSEjQQgVwVhunTeeaJjcWiRxzSKDi4a2fpCcapAx7PtBpp9JXwxnuh4oCe1",
  "key19": "2Wa5svecVebFxTG8JFAfMXUuftrPVw453wGdxbfyp7MKVyGAVyfg51syvoS9JmpxwAtE13ZaLTAjmVXHzjvJGsXg",
  "key20": "4ffZbdYtLRAcy8uH27kvdPeCZ6vMDkCj8LaQMpAqSQ2myDCv4uykQac6nMJgXoM145tTSLTAcLUiPuACBW9fCLxP",
  "key21": "5ffhu8N5gupRJ3yVRh8U3Gkq9zF6A1pwA6mrEDwKf2FakwtJ21U1ih1fbDUy3De6pURN316WkffoHTCFh8vBc7FL",
  "key22": "4CAwucVC92X429F6WRRQXiDHKKT4wgcVwJ6hLqk5MATkgbo6yg4Usi7SfaMHZ2FiCBvMt6HfMKc95iCxDMDies2i",
  "key23": "5Fyw1oFEpWxEWVsysfXs65XzAjFpHosVAPkcatysAGxGbwo91wNSTvfWMtBeu1wStRWZzf8XjKX3GbspaBmtPR6",
  "key24": "4NrhAKkT2EkrFKCUQn6XwBvNTgE8w9mMdyzaCJAvLP5cbhh4fqo6mz8918b7htYSQjV4TnTxJp9RvqdfuT297ia9",
  "key25": "Xhq36uVf1gW4mbzj18CdzpNANRezJMjhauWJGz7u9xC9bEYd5xdXffiKZKt1efRFXVnp9incnSwxo7WDbZNkFAi",
  "key26": "2Ah8G4rLZb4w1jRpMSW2i2hkvS3At6nC4KgykDmnL6xKM8F3pX7sD3kY2cXZEUX2FvwvY1rkmyPpvXZcK1zAUMpb",
  "key27": "TwezPHo6G6GUxNgCYkoM8SNjHDnADoYmd1sptGEhDtiUMDFPgCeqgMFk2frYrrc3v1XWh5X6Rn1Rn3VCBs8rbXi",
  "key28": "2v9HkQFSQP7SvhDxgzAiHmVE1u3AwuwcbpAF3JLAbpb2E2KN8VYT1ZfzPXuiQDRuv6RjVVDkVBpvHuHkrLS7PK9W",
  "key29": "3i3Xhncqy58d1K1ZvD7D6hSxkV6iYgMKKXft3bEV7tV91svTCL5KywSvySVpyDtXr4gnkGgEvz3aTcgP4ZRNwAhT",
  "key30": "47rY366LWzYVZ4CNYJCYEXRXYCquRBJFz6y6P3sC4PSDuMMYbeu8Z5Q7eMJPj84t87rVp7Q1iqxPkJAutP24JWFG",
  "key31": "5to3UatCgKJLKj17LZGV9y95Hhk7EGiYmWmTynyMKUGLhguQaEZ19jCErJczK1wMTD2BwToightqeM8MGEfBYt6V",
  "key32": "2fa56zGVS9rscH7bY9jGckhX3Afp4cKcPABGEEEyJo4pb4Byh1jFxy1r1iMfrSnELHeheMDvyEE3FhEqWQbXAi9C",
  "key33": "3jAqEFkuQ67qup636SVntcrAjjiDRYtd1xNFUhLAnW9XsFLVJNRwvMLFbbb5BUvmVxU2ciXkZStNqrruNABjw8MT",
  "key34": "2eoyMeAeePnGcLWzoLwP7B9auFKVpvWoQXHi6mhpLn9KsdLBTtVvQQmez7HieqEYv8oVsJuTP3u46orQzdLBjjn1",
  "key35": "5nDYTNJJwEHbajJYAKCg4vT6vXN5bRvRghpE3Pey7wPDFE9VEGwUccAMMvy3Zie1fpZvWCoAJUAFhwe93d9A1epS",
  "key36": "fN69WMbiodUu937SMU1C2bVkr1GBxHEt6P8SiNSMhrGi4NjqTizFNDDv2X1TpT6hGRFqZ3ggMCgiAuMH9vWFNG4",
  "key37": "wrab7AfaQQamSgRRrahmq6ZnNHBggeZscg8i121ruvBpNkjAnDEdX8bNMdwshjw2UGP5gnna2p77bZEgWE5omKr",
  "key38": "4WzERn26GnAgQnBGK2UhZh53JYsgHKCSowVFNURcCKR6zEURvNocTYna4fEnH5rzpohzMKYtoG9DagCw5is6xdBX",
  "key39": "CFnsog6hpWDWduPVniXYi7Z3NmzntxnLgkAWzBf8KoNqCKiwuEwFg24YYUqaesoVYgrWpD6djdZD5FZY16MsDKE",
  "key40": "2o8Mw3kT7VjibDd8kEur6X14pn8DMLqMEDMdoRa2FVoQ5b64KQx3ggYLuHBVouGYoXWD4v66SGi4ZhTzU3mzbsJs",
  "key41": "5kvs98FTCqNHYS6ZeDhA5EUfb1YtnCLgzux3HWWHvNej7ZPG1ag3S943TNWz4eNkHrQ9fb6QgqGCKvfh41N6ds9g",
  "key42": "3Lyc3bt4fmiiPDsQu3mis6wtuAnRAcU52oLb1wxU8GziZ6iGcAmhs1JaQLYaPWDnCM34cQwj1mqc12roVq2M8LZr"
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
