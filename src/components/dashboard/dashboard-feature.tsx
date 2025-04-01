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
    "mpZxt3zA8ww2hAUSXZW1MepsSFA45nuQFBNpjqKyABTF9HCRmdkFb27akPknnkMA5TbEUkUynCwYDvHwrq52Hfo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAWdPAoFTg5cPX8JHnvaWj13mAVYPXXS7Z2RRqUSJ4SZKFCf6abpegiL8BbfjgiJhs11Rw6mGfHcRRRTYRMHa54",
  "key1": "65HpokqgA9oJUqxLvCtHZtcnYdLySVLuDgDaVAaWswoJUpu5yYg8onR2afKYxeQTS7skWRbuH9FDi8wK6QHVvhbs",
  "key2": "jEkH6RUkue8FzECiJC8z35bNpV28ayLZzYEQHkzYLNSYpCPhsPf4kkoRH9jpoVGwmoDJEeiDsXrBxbMGbvqZF2J",
  "key3": "4nWFJvgtt8xKK184mMKeC2Jxhbkmbij5guNtR8mu4zVbXhinMP1TbDXz6WnxxSjPJUyVK94Pa21x2guDGh742T1d",
  "key4": "4X2Qb5uuNiVGhFb97DSDaMWfuSbNTWJ43b8GequtUom4H271Y3DccwHepda6RAj9i7R9fAPT8ox7KfQwHt1AteJh",
  "key5": "5pgZCUzqCrVZDZNwCZnCnbVxK1skJcLKUqHaBw2RisrNXidRSTcYdQCdKjedKR1zmi9CUX2QZv37M4NLwiT86xDj",
  "key6": "2dPDZKPSBFkRUVtyaFgEpuPfbs4JgBo3z2vQerpVefj4PC9G9xQHP5UxAMMxHqnJucYQnRxDVCPoWn9D3ftqxdzA",
  "key7": "3P3hXsgwpZCrtuoLoWyGJDL2H48r91wmy2ugVHEC4QJidc8ut6n3xaVnFbWsEPchF8Rv8VHDB15EYrGyZZPBJWVu",
  "key8": "4LgCmkQumNgo95QYVat2cdfnKvPVbyjCD4QnkJczixxBVCv55pF2jiqqVJhmXCzqZDUzSdZjN2Xa6SiZLf1k5xCo",
  "key9": "4qJ4gggXK1e1PuUgg1QjLNVfHuy4MN8oQJCb4H6YnWZ9sQkRCJjoFehQx37CDt1nuxgPkqFReYPCPChi9Wh1gXCv",
  "key10": "BLKDV537Jjdh2WPNYynYmW9vKDAqBdk5ELwgMNdiyXHE682nxMYTNia5VmDBAsTPcc42YKG4rGDr9Q3fFf4H3zt",
  "key11": "2TQKkrXwspaaTB7qgTtt35gS7Xypp85QvZPXeX7aGcsudRwnD7d2YV6xiCLV4cse4ny45sACUN4fdaTr5smrRJTD",
  "key12": "h6sSUJi1MEs92T6PzW4AqWCamzRiwxiwj1uTEctqUotBCQHGiqBqXcuF3TtW27xiaKGGFUbaR3Xfdom3UoHwvzs",
  "key13": "132QiYNbW6nTwuXvSxiQfJEuRW5i1TNxY667CLdBjG7afYqxEBU24jUNB1DC43A1KHootAMV3ZvihQw8Sip6Dmr",
  "key14": "4FFZDnZsPZpZVju1GrrejrjZm2HTuTGVYBz9SzUfELhaKkiPJezvyzodgMNid4HykjJhTbCWEHvAskeQhmSzdqHC",
  "key15": "55AEDQ2a2eRtAuXPL3moxjzEjDCdbTQNAgrAcznJzcCZZPs7cu6qw1L2HhCR3PgzXT1nm3eCdEoQiYLh299ZQ3W3",
  "key16": "3HX18qaC62jJLJX9RyuMK4iuX5tPir9ctUNmf7oyp4TBbobGd58pT9MwyW23q5ochRUygo1AdgpckNhRZN6U7Jjb",
  "key17": "2W1vqbGPDjNYJo6s45PCqGpthsu1G6cYkL9bgcYPVoyfMaF6E2JqARgXNzh1pSHSfoik2rxMwcKQkUWBS5FMiyGH",
  "key18": "45V3hELRqY57yzf9j3gnnTFfNffgDWUt1TGd9XDCymUKbW9sRm8Ci9tJK5F2rfpwbfmCwApsqtzshtKwi2ynVmmn",
  "key19": "36TARe9saQJeGrpSwn1RMDwTRssQyMAojgT1YTcyMsAruxv1M6rb9uHvYJdkhg5Nocu7LE61ybL97ryjeWskkych",
  "key20": "4tcJQNnpcDqLAJgmu1SG4GA4BgM9mykuXsqqwpmuxqwUy9qztR56LBSCJtRkM3bHu4niPKsiN5TK3Hs8XMsjTqHE",
  "key21": "MKmmwBjJ7PLnxwezmXwnaExwRPnH24bhSwqVkUDBYdAhHQoPs3Vb9gguuvTttuYJfkLr95hsDjetQdejvqJ363A",
  "key22": "4Guk8nDsitpQnQJG6skZn8EjU8j8JfLPr9hRgqBz6MpBDBbWjdrWidqW3HyYZczijZSBCK5bUhU3apeRxhFggVhz",
  "key23": "3zQFKTXaNhJVioV3CJV73M1LGa8Fe35zMf2n8hvbnJNjJbpsVsZXQhQ9pgry2Rn6FsnbYoyE3a9VGXEd2BRQyVTd",
  "key24": "3Ps3UFyJG25Aqi7LeeVcLEYCEX9P4ptiEqTQpDuyj3CPgbJBCv1455pk9cPkVU5CFAg29S7jwP9mkMdFzBPh8Sqt",
  "key25": "37csbYsKbFgMp7Z9gG4aJcBX8GZN6Fi2C8Vms6BcvLfdEB3Xk1gVZyyKJkAxDWjaULL9LTiY12bBaTHwy6UwbWqR",
  "key26": "59WKNKCCBF3b1q7kDaeTK44kB6C7n5jbzXGE6nXtDWBae2XcsykehR5pbkqpUgckZKmY8nid97QNFSvK2KXAw3eu",
  "key27": "62iwUmSWx1bvtfRgh1rBibqpdK9NNAzSj7t6Yp3qPBcpy2PjGf7vvnoULBUeoUNzucrrAv1Hzuy4SnTF9cQKZyQt",
  "key28": "2d6LfasadbvYmzbkYnpg3mk9HBob79tVJu1BsY5vszM9RqPqaXUPnX26NMhFjxdQA9746zD5Fsj76QbK9zXSQ6hJ",
  "key29": "5nBQEoPDWmQC4YxKRZQSEyT5AL9nJEyWhSuUxeJxRX6JrMQzBnWeqziGb2HcTauQzN5P6MSFzMG76yCUkfY9PZy5",
  "key30": "n2RLNuc6yF9Gubaj4bsAS84JMpCqGdccULC7FUXod6zsyrSKm39DeGW5nrcfMsDELY2DUFKEMNZZrY7NkX4gKip"
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
