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
    "6qiRo6A1xJ7npuGbyYQC45ZdPnfZT8yk5oXBnfaQPcWkLjXvKWBckN4sL4tReY92LchnU8m4TNUGAzhUmVDXM8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x55sLCLUUybdsnkZumr9ZWnrkES2KMrAV7PKpbswtv6hqya3ZUEnWeMfkrbb8CqqsAkYJGuVrsT3D3yYmeHGUDp",
  "key1": "3rT3fPKc9euzTjmiG1yM3koCumY82kM33feL6MGdDhaBQz1mndZ1hTakjuhsRotuWmUSvmWNNyws2wKwKUootUQc",
  "key2": "33wu3ME6sCUCZMjonyk5H2BrX16GkZnYuB5jBqQegAhziprjUfpJ5RLsd9avZfi62A74UUcxn7uQ79EnJskfGr3Z",
  "key3": "5cgUeyGUnfDuNaYRDS7jYjqMFgES1wYJ5NfKL7Z2JXridjfz1SeE9ZvJYWpPX3HttjRHBuiKpyQB2fRc1TfYDjnA",
  "key4": "4LCN1KY7XCDotQ73BJ76rcQ6BVr9mFSHeyNAhFNNzubgssAafTK4jqrfbbuUmghscjxEtzLC5o6pRNY1f6isMzhM",
  "key5": "3HbZLsp2JWLRuTeFAmquAfSzc11AT32XMRWrQAcLigMYs6kYy84t9kg5e6xD1XTy9CMKMEb4KaGpebMKcyJ9K1Hu",
  "key6": "yriJ6YJTvVbafdsAZjBqjphNABQQxcrxncezY8uaXZeLqLc16yMeC6HmZCXWhkGtjBSE9mvJaRVWHKcijJf2eBE",
  "key7": "4J5A7Yx1okpdyBCsommx4dRrrMjYbfXNmTYaYg9KhCxv3kpqc4yWpe38gJEGQnTXcAjAdLcZzFeqnSiFqFZLkceb",
  "key8": "iVocWjEtx2iYxUvGT1VFmqV1Fx4GJLkGvn5MhmbgThUB9x7fki3zbrjg8j8Ra6714mKY6F769SQHTrwxoyochq1",
  "key9": "3Jay39mRoneK4zzEmURPume3db8qaL6L1FyRhFfLBNG5n53L5P72t8Ygvo7aUNLt9P2LWbtBqk2xMA9DmYhJGygF",
  "key10": "65Tt5Xez81eArsDhuFqFzqs6fbnQ4WqFA8N1cMiiJdQEfM2vYMccAf5ZHF7ktW8LrrLdEFaEZwKcGqzBSzcsafZg",
  "key11": "3VufPgNFmuaTm1wsWzLJfGo1pyS17Km6nCgmgnyagjfBquWBoaZTYV18jJr1p2mfeGShhMzSPL9uzvguxeuqhGXP",
  "key12": "Kdt9d1VC9Lwq2nruSEj7NVc67qvUshe1Pz1u1iNM3wnstcXpQPqTvVoESHuNGkFuho8qcJGpZznaN1XaSK9kgsz",
  "key13": "3MMF8k5Mh2ydpeQwZFwS8vCMPCL4uAH2XSx8JjtAz1gtU1otL6CpJ2MZLPGG3GA8UXGN4deHGycmkN9beVVfL1Tg",
  "key14": "ESTvAGmR7nCsJ1sEKC2L7Vu1c8p7CT3MRFvQNGVR4PLgxfzm3K3wGbvDLcVAgNvzREZBEaLsfcVATcWjdbkTsud",
  "key15": "2y5rk1wQ22YTa1gv3ZDxbZmgBqXVL2SCzzDQZEyEQPTQGgrqmdz7ow2PC5zDEu8pBWAbPPeQnUNkWo76MPpAk675",
  "key16": "3bjMLhLKCpWZKWEqEkVV3r1BL8jxeAM9JZoZurbTdW2y5YnUb44b7fFxRKxjmXUqxp5Pu95YBme7xNT4fsmKHcqL",
  "key17": "1MQyd7Vs6sB9mmFHx21MPW6YqXu94bL2J6zntyiAFtpN2qDK6iFjhfp2tcF7J8hQ7bX3L7erATGM35znL9aWrq4",
  "key18": "KD9pZrd3HDnGdBjFX7bu32NkgkpAwhwbM7x7vSHmgXMBJTabWMdoPZymUJjJ5vn2W3u73Jy88hb2RGKE1gRg1iH",
  "key19": "2ve81Eiw6NpAJXoyvdqJNTJ2bavyc6yFVSucb7D7J9EnCKgNdy1DcniLwJ796DaaF2kpwnM8XfUNz9UufXhew6Lv",
  "key20": "3gpYxthTuETBZoaGYASRTEmC7u9gvjEzS3Qo2rDh1cApEW8yksE15niXfJH4FteLCzPJHt1BPxtQrWDCjTpJVDWH",
  "key21": "64pY8CSUnczapiM4Rp6brQXtJKynXuNjo9muesJedgVBoN25Zn1LYieGmXoBDhFh8pCRV9VyqtZt7onpVegKoV8p",
  "key22": "4PuKMQRCgYXaexUempLFowSQhV9iabF6g8dCYCeNoBVx77rHZemgFpSLe4id2xEKu18NHcq7G3n2tGyARWbxG5dN",
  "key23": "4hK5wH9KHbQfvsvEhBLyohbF7Ye6bEQ9LFNG1i3x3hRsvmjcur4LCTrYx8nWzR69cAbnMvTuFRbERf2TiTKCvGQu",
  "key24": "3JR4WfUEfBYKcDJq5EfYqow8XPAsSRQFWxMrSBmYx16teEhmJGzkfomcNViZVHeXwmB4Qcb2ZKzjVwpTz2RupLtb",
  "key25": "58RuZBiEjD9pG86GMWiZNxebZKZCcg46mhBYCXCZPpAji2PR3by5EAKjZTUeuxzRCYbt78dFrxnrk7WK3ZwC2qs9"
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
