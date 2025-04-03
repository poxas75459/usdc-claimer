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
    "4VjVhJkZBTFvmtsacUer1tbUVBfAu5zVaJs3fcYcDhdPQVhKb7rKsXnATfkiuFkv4NR1h664tixL4fRjHAb8AN3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dx6vpdWg9C8o6DSCtGeNhbErC7DGR1pahbgTSU44suaaZxXNHMaeKr88iaHgNYYnsqDfUf2Mfh8YUaHVFo9f9Xm",
  "key1": "3CJVswd4Qu9U9rEo9Vgs5eW6L5eFrVaxV47ZW9vpQ8j3ZQJLQW9ri5mxsZNkfDr2prJfBMEdM7rJovhbZwJ9qS9y",
  "key2": "335HMSy3aiWdaAeqxHfkmmThvJjnx71uJ5MpzWiecTQrm7tcvda2FxzPxRiVUHMe6QAq921qq4hrrc1agZdBgQU5",
  "key3": "4NWyyFt3xZtdxYL94VTAzGgwCKmmQV9jfMRfwSSayAZ9vKZKCLpjaCTvDCqbVf9Yyzo6euGXRe5bYxB7JnyrTgP2",
  "key4": "4J2MBffd4t7ATFnN5XVzbC2qMqQyGMr9Z83fyUT9U7j2op7S8BG2dqZBSsxueT81cuWjNGnc9En5xVGQJv7zqi9Y",
  "key5": "5LSAzv4Ar3GA3bdAk2ywFa6NR68UxPZjDXUVLJSPekdeo6A7T5NspfL6xHu6AZWmqaLra2z5Py5prVjMBCvLCHWs",
  "key6": "51P2jQs5cNMq2iwwdPW2S2N1rkHY6vXaBybCDo63HQgoBbPN4XkCU8PMPYVudMNahyzotroR3Mjc4GUN61YNfza4",
  "key7": "2UJuyDAK9C5wnL2Y7BFcT3RU5kJWaLD31mLuTMoTGY2EB7iH1EtR6jZzkSRXb4GhWXaedCgMPtyywcAoAYaLZk7v",
  "key8": "4W8nbXoVyJHPvJC9tNT9x5MotdcCAKftMfmNrSCPzbqhQPjeEw4n9q7ux2dJcTi21JSzjDcH6BSXMFD3BuvxQE6z",
  "key9": "2794qaKzkfzTSRVWnuURu6ssKVeD6FHtxHDYwC3wXMuGZzweJfeKKzo4fbe4x9W6gMAoTSxR6B2NWfo35oZBBaL4",
  "key10": "4uRSBpJnRoaGmBtKuiCe7adXaF94fv6mmrza5BC1bCionjYJdLSQjRcasLBoMjHk1YngsPUF9b54FkFR9tLF5Vic",
  "key11": "4fgfcFnhLEG9zqqBmCka272bakdbpqHYVaFyzufZAx6J4hUcKCK3CLfEViq9WGPhGLVBT2LoDSBLj5LBaabiGh6c",
  "key12": "34PDGbeTRxp5Th53XDavPpg75FUKDBkUmM3oT6ViRSBwUj9m8cBJDa5U4mAoWKUh5Nb6cfnnagNFdVHv6gZpPQPZ",
  "key13": "QdAzhF3ybAgLS87FBNzhZSDaW6TYDTzcuAkRR2iAWWNzABu1viN6rNwFyRzyVsbQNhd3xB1yfmhHRYDmx69qMVR",
  "key14": "nQYAjjnNTAZURsGYrtDSRQdwCiDejQBQjjyEiSyiMYExTwCoCAMuQommpN1hZRAstb5bxrh64NVAvrDmKT6zfiT",
  "key15": "2WZ8TJ8GfP737qSJsG8x5ZjGz8LcnS9EsSPbNxEKa9LHYnqfNsTa2epUdsvrBgDoURc7MucnSumXmbfD3fT4jeag",
  "key16": "4gw3cnJVqeuiWxzmECa94tozACCBRFLSbFWiQNCU9TFrb5MEHdgfAP75ryDQfNq12ZkEB5sWseq81jYYEMveUBV",
  "key17": "5H8xQn7CqGYqZAkiC9ftFd5w8XdkKuWYXBbZUR4vB33tLRDRN1fW8h6VCoC6CgrP5ty46HU8ogiZAJYQUYoAPA2t",
  "key18": "VCY3xWecUDpMMB5AhCW6XxWgd693uREcZtWsgAfxZ481DfPbhoWRX9V9A7vr1SpnUx8xbKRfHdtqf3x58iYms6J",
  "key19": "64HcMdTwok9nzWpUXx33D1PEWd2vfipUCbvtjaRax9K9u1hnoQmUQHhKAMrruaCkjr6w3mhThnyLFrF2jkDHaQD2",
  "key20": "2viWQfZdkfxBdDFSUe5wdqdxm4F9sLrUvqK8cnpKW1Snoc9Aqb2A7ViehB7MnkP8XHvtjD7QUkmnWpRLWpNdDdpe",
  "key21": "4nC2ax1e3LvmjfBVngKmsKHHFbyQzUkh6LgnQ3vQAZq2GaJbv5kMDKfPXWH2Fn1yiC3G5AqhkWdysN1wg88FBMeq",
  "key22": "x7dBpSn8zBV8k7mccmr4MAujke72owvU8YsMwN9k8qA5pEXSgRBWmgZSmrUuL5mLpkmySvgGVHEw7C27a5GRPKK",
  "key23": "5sQFYJv2LH28yGtAK2E8mq1RM9G5J8mXR5b4KuGaPUUw4VivGziW94BJprpMbDPxCDwo3wF498q3e1fd4AdHpTcR",
  "key24": "4HbC1Fnocoj2tFczBZmKxK74gC2NQCu1bBPK9ewdZs8gU9C7LM1uCLLG5Bebd2ZgByLiY6kV5d6ej9qUEuJRrsQa",
  "key25": "5bEpai2u5WrR5BGGv9qnpKtEp6dN1sAKhK2EmJUCE5WvAUoGX7xScbPSYvgRzDfyddq93fpW7sguMTriVFjYyiH8",
  "key26": "3fjmKbqLbsEWtvWso1Lcc1DcA7np4JsSRoMWNdRgTz38JqxiJtv3jhxbPFSUTA6kdivGeAE6KCTkuy24mkynJQ6F",
  "key27": "27yutxYkKm3cTJ8Ru6hPSY5nWaGpS5TJ9aj6EtT8sriMcPfw39vY35v7XaBd8ivUwuKPpWy1P3mfyYWdk5pu4W6d",
  "key28": "5EvGaWzz67GLktHfdhk1noSCe8aQqG63R6wcvorr4Vvw4DxMfsmbJ4W4z6VkwqdUbwdAoCJWAuch8qYjaq5jwsvC",
  "key29": "3tbsjwSjce6WxVavFC1ir9HKwtottv1E37E5LebzP5uBaVeRp5S9mRm4WHbwpGHJBmYToR6q9GEYknQ3jBLyq5G9",
  "key30": "4AUUTd1eBrQu8jXHs7Ejw6NfVrYkbc3My3tLyk8UDcoWokcYHmH23PBvizTq4fD1TfBSnj88TtDyRYYCxVoRntoc",
  "key31": "4vAdYg6hwJj4zDfGkMh8yjcwoHU5hCSzvPLgbEFW6aTKqcDLuBPkRhQLz5F9Ks83k21D5Xpt1Sw4LyqzG5FyHjro",
  "key32": "K1APqQqXK2uc1LykjXcdLeriKZyZTqnjuQ5T1aJ9R3tRKH9u21y4KZwZU11SHvfhcwN4kUWVwW2UFxnmPvRxq5z"
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
