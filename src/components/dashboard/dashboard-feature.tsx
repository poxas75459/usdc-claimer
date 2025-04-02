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
    "3qiC3SPdkVo3o1dtC8DeiLrbWCutSVBMZ8LPwJ6g4My8wuuWEE4tjefE2sSUXtXUZbKqD47xkp8KWv5DjPkg8bF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SyYkoJ2NPKmyfkzL3HYmm8a9s9dLqXrchHb8rHBYxbQGQAtLrobWhi1hopjpcmttuWTKdAxg3TJ9mTiRBk2HrLj",
  "key1": "42vUZF7JP2UGi3M7YXCbWPNfyp7VAjfxg93DVuh4QLSwYSSR6BmtnxsrPfnP4NySsjs14Rn4k8S1iDbFjiymQDJw",
  "key2": "2Bkjpk6awyzCs3CYmsk29iNZeGSzE6Z1DQPmSuzsXVRVaAqNZogzG4tJznzWpGzDHCtHy7cNWjREJKzKRA7oFXNJ",
  "key3": "mTs8BpNf1UMbrKuLqmGipsD7psaAPwekFhHTx4bdZEATNfVfMrzCe9XG6xFSNFA9MNgBhQYDKjFLnggtouckB4S",
  "key4": "2x9YETSy7zHmzjLmohiYbaV9hQiQJqJM8ruiq4Koi1cZ727CLeMucXW3xQBYwNAahjZPjxz5vL5A4mj8APbqUoii",
  "key5": "3FjhE4EJiX162N9Poq2TkWBoyNHXfG8JTMBesSoZGefTbxepxJJdLUsMRcuYPDiFkYWzqXna4qYhHsZJnz5nBeN3",
  "key6": "51XZ1XUqYtHxSFDhQswRN3gdryXrV6R5sTQo3sJVVxXX6NPfWHaWjQmK5mDfm6jCKN1LoxD1iMdi4nLpUybCbAZX",
  "key7": "4EarYvszmeRfsgv3XVer1JWwUSUMhSFq35e9bkpyDWXapGpG1gJNBU8y4aAZmAw1nM9TLwNQoMZALF5SSEjVKJw3",
  "key8": "3u7hHmmNuSSvRJBhBYXvua3CQQJcVS8PUFobdz2YUXyTe6oa1BvUQkqZpQg8Arc2AUJ5Ej8dWspc9NjLqriaajfi",
  "key9": "3fwdVd7BqtX2UUXkbVeM5YmmoiDiCeb7uKdwtmLQqLUDHDEyHmozyjdz1hrmXBMe6bAFCGgKekaDGEkSdcrVqg6f",
  "key10": "59RgTrBMaYwRadQ3HNAjiTR3wH66mVCfpDMTXfwmgwSaHzJmxyPrrAzVUsogPV3NUsLQPBC3gyCCDNUr5nZAERr",
  "key11": "4fzKxdM3qbRcXsGcRGYPmntFtH3DL1W1J75qCG9uR5YgtVn4xwbjqDDWHH52W5rNwGF9rPuaP9UeeTFdgttrwe8y",
  "key12": "3xerTrZ3dk7dTE6J2MySXAbGXUweu9vVRiofizzm3vVowXfXw3t44cDSuXjJm9uwRn5oBv7L3hVyATEmLmCWt4r8",
  "key13": "5Gkqk9rgXshh7refpFH52iMWpSvdoPxAqQsEnfiKrnc9RCuxHsTYFdAyYMLNbfnZtd71PCVXC5WnyxjQLsLMkNgf",
  "key14": "5jr5XT5HZbSpNJoMrLAzH2Es8msQ3HL3ZmFFCCB7tDMpVdD2YF5mQiFcRj9dRVtKRjndVdnjoVrH84bN6ZbxJASS",
  "key15": "3m8bubwijnj3i68hVDLvp7Aea8yooLShs2SfC1kmgLWq6vdmqBQVatCah9etUXMsKJGBNuV2Zpgpevw6PMrW6gBe",
  "key16": "d1pFZha7V7kAdJxjtDZYsmoa5JnCmgP9SGiFzjwdDvBVQrEtrrt2JxMQXutsgbnvJmEy8u27N1nz6S57oRzkrjD",
  "key17": "3xThkeDvtmy8G4ezW9u2YmzHefiHBP6khx2aBe1cZpQH6RtTa99w64jvqXpWMVbpENoPGHUJsKLJMH7F5rB6C8qN",
  "key18": "3Bd6PN4koF1N8FoQWqmkiy1EqHZ9PK1yP8iaDHjjy6Ch3vwqre6Bgw9ExurakuFbdru9G1Vpw63MPb2wgUgNtAxM",
  "key19": "39koy3yGtDx42vkm7H4bw23ruCjFqVRTi2YfFdqwh4GZFMRK5teGhdPXo2zSvb2DYSCtJZroXJCLiGsr4ifEonZN",
  "key20": "47HeGa1GaZaM4RZ8J6ayTDc5w5p261yAucsqjaa8UVNhrJkfpfKFYwgsoWY3nnXa7RwgUK6ehQw3FhAXQCGm9bm8",
  "key21": "rN8WTpzzWbco9Rsg4GjQCJVyTCZVcPgAoS2eiLQtJwyEp7L3nnAHoMyAvwsi4nhS68xr9nSjsngr3wqDPpWwFk4",
  "key22": "5emNDUFWV6JF5vRFXPshKUpX5ZaSFz5owJDTmGbAfu3nspuE7bbQx5wPBu31Bzks7CMTrfMR7uD8otr1AsaRFj4y",
  "key23": "3KQPFkE8R48zhSY29cct8TCJMgFNgxKpSYEsPAb1uYSVdwCMkhL5ZiRi2JS5Qtzw7VfDK6FSZbnLKziUwa7beuAE",
  "key24": "5kdsLobQWG5ZdSLBLN1ivb1NWp2sA3HAD1xkm1Z28pA2X9dUR9KgC8YfQ9NS8BP6DaN51KUMgi3hNmPh63WEF8nh",
  "key25": "3o2Qgj9bvcDJpKLEEkMdsuBfFLArYJRvdeEszJg1MZdhb32CckVvoNNj15RSkKCKzy7YVUkCVRjjGi5uqS17SDGk"
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
