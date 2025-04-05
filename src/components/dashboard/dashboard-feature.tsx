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
    "4zckjByo979nTzwAeh8tLWytg2s4DvyK2c1771wsbtKYnxAz8CWvwKHC4H1VpihidP9PkNJaZVXXxmwrzZ8x91xG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48kAW3Vv2o19t8AspAHjWn39E5UHw1WJRTNnELb74pLNLc7BsGwqNCqtDDZwj4mfj14VVcNLGUCqsMA921Zpqzod",
  "key1": "32KtXLSHp2RbQN9TN4aK6P3XcZ8rcwbJy43eJi5mnb4gT5C6BPRXi29whnhWD4X2do2ncKYqwgvtRD3LT9iLD3SF",
  "key2": "4RtQJQqFMx4NC3mECo5Lyva48t49adpwXSZGscmpgaCQeEfoK5DMUcQ6Kbt1z5L8MHDFGmoeUHL8d6u4KvjTRHNa",
  "key3": "3c67JAHkfGjUGVamVpaPtcut4Ti1zrRx4BVaUf9uxDM7pePhhP8HQSik5mo6yYqn2b47bNyoisktAhu5wRfHWEGz",
  "key4": "Wi75XzEM41rwSLAy4zEzcZL8zKiCtosbRoEmdxnbz3u7Dg8ANdA1uL5pasq1y7NqjM7YYzJ4a6o28vsbKXodt7w",
  "key5": "2rmwuFZxhJg3P3vNcvuZdbMDyXRrKkigmCUz9MLVcvwcYr67GQWKW7jA1j6y4FJ4AuqhDGa2wTTkuMCf5XaRgug1",
  "key6": "54rWP3PefaGTBTqyYAXkFHypBHXkVPXJnB55hq9myB7xsk4RAmmgpDiUhVT3ya7PcEfohzwvtMwAynFupqjJ85EB",
  "key7": "29sT2Q9hY3rnbevtLV6V1kKQrPLiX6ss61nEMBeqFU7iiZ1cR4R8rc58tYJ2UDJYLT5q2LPJzgYD3ava8m2yRay3",
  "key8": "34dscDWLQeLaQ31XR54NKUCbQGBhTH383ubP7dLuuJkEerE6uXibf7sgrdPQA8uqXY9EW19VdVawkXZkviSTHRH8",
  "key9": "4VxGiCAFf9zd8nu4CdnPTJeME6RSKQL3G9Vg9veZcKQPjjpPibyeySw3AHQ34VuevqFca9txjnuhvEDJ1eW2RYee",
  "key10": "4695WCrJKRU4tJ3e3PyVDzzpcSuDwUcy3KVD218R2RktDyvZYN3L9d4W2n97TWj9CT9h5o83ibW5KhC7Wzd2979r",
  "key11": "294ZWEu1n7yBxTb5ydjM1t15y9wbaFwivhzjsNCgCzSfTKkV5R1uZpo8U3QnF8QpuoB4x9Pk23iukYo1QP5csQwA",
  "key12": "61JGFjRBikKZbGfLMUmcvJa3gUxgd5Jy2tPUNRprLjRwHdqkBxomtGfuhwS4whcZcV5AXkdhK9VBDzuMQwcfgwok",
  "key13": "2Jp6bwDz9PJpWGeCJbVw81wsdMpBtJ6Lo6YqHP9xE9NHWepEfE5MK1yNbcoAW4AL3JWBfhwexR8Xpr59gpt6TKyz",
  "key14": "5RGbbfsZdJuQ1CZWJYdwdNBQoMMme4cyWQy6Uvq6EcfjibJJia5Sw39xonvPDf6wEc8CutM7CoRFmnnuC22Uki6U",
  "key15": "571QyJQiL9XzUqfCaRjxHmVEHsa3XJzHargXKRmchtQ3XgpJ6tDNmXRrsuvQphNjYpXDwyb6x7WAmKxKbSzELLPu",
  "key16": "5sPeKUnZW3FZmAficEvEtJrGBQpZcDeLWWxsJZiZ6dp2DE8b1t4mE4QVF98uwnJqvrxHniVN7yx4Df97eaNNrT7h",
  "key17": "JW5RGhsyzAiyytSSMFazrKxcMYt6eqm2RDq75zfisjWSw7HBmgvQ7FAnfTkukmoFTaJXofviszYwn6GHqNK6KVL",
  "key18": "2M4KTh9Hei2CYwBwgtm9HLcMbRvWy1ajpGZbt8Xm1Mqu7GwiEq8eZz89QmSXMHe3zcsP84vyHdbvt5tp8uufSALf",
  "key19": "36ZasiwqLcug7M5ndwBp4s8d6vbK77hSECymYDPMgKCwfEKoQwR34kLHWAcNJSoGrfQqRbLaTnLtgy97buJEvj3o",
  "key20": "29tp7CcA7vriuKvVQHXNYnMUxZ9fMnkFfsoyUvgpV1Ng2EXvYyzfE8imAdDFBw1t5eGM5NdDtRsBttvdCCG8Ubyr",
  "key21": "4D1Xyz3NAcGMeRBej4X3JCsFnC4fpXkLuMjBAWduKkP4S1PVhifGxL44G4w1Ltkzv6oRvbYWiQUAGiX9MhkUPTxN",
  "key22": "2YzxsjjNQ62GtjLozR1eMmq2CCfmdCRWahMWjWs4NQzQiMTt8a599VUjVL7svA87VHz6ko3UVKpWnkbTpekB1TU4",
  "key23": "4E3iwshMPuVriUEYxjE1SEKXM3dfGxaWygZqYJWEeq2vyeex4rfkQU4rS6ZkfgL9L6tNEzTLM1EGUugAgw48rurT",
  "key24": "2c69AZD5RhP1wZM3tedfuwkK4SEcLcnAnF5oAB3RDBvVCYP4Wq38jyQiZrS4B8UuSMxTrAhDXjkioPWXnsDmGVwP",
  "key25": "y9UddDp22DZCafCrL68G4mvhBkeoe1zyaKXFaHY8GXbKetvZSK9k7xAw54ztZBqAJxJR3zBvdxc5c9zcYw6xhyJ"
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
