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
    "4tWfYzV6JWeayWMx56TykqtVVQiTFDZEzuMGf7kumgJKui6jzKkShd4oEYLFbmjsGdbY7sDysVq372zaPW1XEjgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25KAG6S9K2TMjs8aLF253WJvJxaVFxNR4PMT6aPGMrBvdp17LzgB7wN4i9UmUMySg3hyBG9j8oM7uexUPJfCbn7P",
  "key1": "4DidWp93p56rpy3NgYL9A2e7pwk4bHPBJC7t3nv4J9ax1kcyRnua4uuXXU6ivJx6oT4afNsMA63s1B5Mbr3wJWwe",
  "key2": "Wy21U7x6fzepgWD6PfvibK4pJi7BQMzunq3VxScmHnT7ubEj7MvSYN1HEwkKbgxZJCDCicmLiFx1jHzHvPaw2Hd",
  "key3": "3SBw4jdWis1AJGRJRhBSZtwxnu4pzJGoJT5Q1AZnLpcjc3Nr7iEhAjPZYFDrL23RdDAtRdxtzfAKRXakDsAoJc5m",
  "key4": "H9LjQkbAZPc9ktXsP5Xys8YXoHUGodzTSXreb54Dy1Mmi7urTpYSiDtRuQF5S5gbxEmonhKAdKjtPWJkkx2akfo",
  "key5": "42PjCSxSAw7bdR1zsSb23zQsmVNMtrEi1donXh7UT4GN4vyZ84tFXD21gKtdumW4YF9hnbY69r8pDt4ADriUap8t",
  "key6": "35ZdUJDKRAdzCPGymM1VCW7zJcLidyuNeS97p7GAyM7Z8EFc6pWd2nwyyHmVhkjdMmMsoSBC9t9GoSzvMKoGzRnF",
  "key7": "5VtiY88XfGEzGc5THJ8SQ482DnP1ZsZbFCsJcxnW47SCpGFhCXpHeYVb5f7i1MjzfKaSE33qYeCdQux8bDHrKpvD",
  "key8": "5qDGKp75gkQca3vJKw4vjgBDiZPN8zGg68rSfzw2ndCwo3dSv1D6uccb9zF1QefA8gKKgZ647eqvWPWnLDxuRmai",
  "key9": "4gn4LQZr2yjdxHD6stbGWoaeuxq8qZDt24uEKqNifXqgD47jTEyZeV2zVUhjTg34NxXWXkLiiceTLaZiT5th8W7g",
  "key10": "5cKJHYPCk2XFToHReMJcTRZph6wJBUN2MG2RU9rLLMXH9RWMjXrCCDppfsGBPvZnMQXgqUPeeyfJUaxhxREBGtEw",
  "key11": "ArZ9tceZqJaKpUYaLRbRAfQXZTW7PQX61KvVk4Sivftuu89k6wxzyjP9hPAQqqKxj16cEEHRsYnSjjXHASxGxgV",
  "key12": "4L9icVPnMqSK2wN29o7hMcdV5VBVCTnuGScijWiyUWeX7LLXnLJFxyZASExuBhTHNwRWZWvxjLRG9tztX4mXwCnU",
  "key13": "2pYnwCsUB5oTW9K7CFNt6BLD6G2rG6T3Hmu7RjmmTAFXN7V3gM99ufmP38kTMMh9EcpG3KyyYKMfGx6rBCCxZZyN",
  "key14": "3i1Mvg2uMGA94SEtft4LXSZSYNtx6rjpxJe7ZksVHuRbZHRNSBzuNkuES47JhK6WxjuHC3kEphPTt4qP3PWNZZAt",
  "key15": "4auBeYuQhobkAzbfA514mJ1rcwSKfRcMCCqDBftfpKwDkNm9SY29saieRieM898kHN1cHnTUF3GiEmb73Fa1JeBY",
  "key16": "ifMr5Zma5kvau757Edhf7ipzRRiWy4uUV74LYBWrVPFXuRixyXBQ4K46KtrhNbJkZFJdBGze3VqRUfxBcrCUNVV",
  "key17": "3vmT54KD3FmZcATJKhEgFYXeoQbHkJhoi9BeQxpzmZT3epa6TiDrJGu6aVMU4RvvVwL7nqhaDuHZJ3F5TUghqnor",
  "key18": "3AUSqCnBGYgTEy9tW27jM2Gz68GTbbg4kXEmZFCY3u8s5BhxfvijJKuz9F4S3giTbdKrh3ii3gDW1wLdBA47cR4G",
  "key19": "4dT1qb7Mv2CWiL1Sy45qxvYkQeR3UEPq45b2jfmYfrKYZQ2DRxxjXjsGKMDiQwMv5UjtZnky6UYbwmk3pF6Kod8P",
  "key20": "48p6jrpivh6pdEkMAM4GjxpGhsktrTPD8hxUSnTmkJzs7ASaca6aUTssmT4R4yRCwodMiMXWbDoTGNtqjJ44cZYR",
  "key21": "2xGZG13f2sLuMLffHfSsESYeiWN22AjFDPzeY4Y2dVEy4UqEdeDjq8vLrNs66tzSRJdHqo5WjEtCg4rfaY4f3TwM",
  "key22": "2MYiSG3Ec32a9fuBVBsfvZ2j6DR7jTdBJWUqcmGCcLiA1XavjDviMGjazNa7oU5mjnfVbbYg21hDrjK9SEyBJoyD",
  "key23": "5TFXh7Zmj1htaaZGRSqd4vyF3guCPXEBE4zdUXSaBEeP6wZsaQMQ7faEZGEuvpY2QFBJCpn9nhhttHH2mWTNhEq1",
  "key24": "4AHSHpXBgV9VYk1uRJE2Sa4y96DPvo2fnZempCHQ48xcdGLgVPwbn7r7ou2jFdDtaQbBpANG6weCiH7gVjTgfrxv"
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
