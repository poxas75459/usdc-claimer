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
    "3u7PbRVaGp4SbUtvZuhiWiCVKjhfP8qCqGZE5Qpc2GJJAS6XU2ukuUn8hwjUZ5KrSRWLw1BiVuZjYkfGnRgnEdGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w8GT5SctosH1FGUL5pV5kyfwSgeSWusjTgF5qy9qfwrreMuguNs9ziGHbx3zxfohhoKuwza16F2uaKB5nwM9wPT",
  "key1": "4RwuajJT63XUSUjFWricCssrXiDCwcbh2nywnsimHpmMVW4MNhUgZdQhqD5NdKeKtUX2V6A4hK727meQEDsy5KSL",
  "key2": "C8PTo6JzK3GNrgXgiHXSf1csmw8dLghJJpsDXyuywWzj4CFXNtUPSND46zHB95joBZWrZNeeaTcxKaE8JNJDTuH",
  "key3": "4DKaYup4H1RoHJ5aoeBUy1oJnANjiaGQhwwvsnUDVQu49T4fDC9gy7EaiXfjsV9tEBYo8X1ji3KEae1jwzA2EsQJ",
  "key4": "2BZhaV4VdbbDcG5CyuGqy3g7KYfMzCig62eSKgZUmzkEK2pdJeV6yFTfy4Vcrqggk1fWbj8MpUxMwkTQfYFrrxHh",
  "key5": "3EVwnNaJwwLa8vN8npNyid3Y12aARg3P6kEVj31m5AX6MXpYPQUm4KGURqB7G6Vh4P4DCfq5pndn4M1mj3gZk3eK",
  "key6": "3QiXS29FZvmsLRfthpZYfKn2xo3LBfNkYxS3Au2QF81b9AdvArr5s6tbxniA3W1pvE8ZjgpH9kzUsnFMLLKjEsnm",
  "key7": "4sojpC3LQdoQc53h9NRpDdoXXj5eHv1LF7B9xJKfXfAdvmmiKsm5d3YnaMerdcJgSSNeLH6eSLNnk147d4g7MTxN",
  "key8": "3cike2DjFdfXdu1TX9RjuH3XVx1aTr9B1jzwZc74abxSnahLhgfuHsCF9apQhUwEGGmpRvWLMo5thgnGc4Eqvt7Y",
  "key9": "2DRm7qAAS54fzMbjHmwhMWHVr1vDnq3yhZArdfpVfGAKyNhTedAZJZN85EEqyAnizgY42p6mEQ8TwoMeHqTZfWBk",
  "key10": "DQuzUv9K79YuwKbpyYZf455tGhh8kkwhcxNhdsZnqnYcNft7m3cgABeVPqrKgB6tsxVpFqtGfEtCFgFsszBQ7RS",
  "key11": "66R9kDZuVUi4kJfZHU7cLwK4CR8RoLDC2CZ8JX3K7vUPn7Lptpsn7Y8j6nydzjjWCF6nc7DiBxXrfdzy6ir6u99t",
  "key12": "46wcAJfqVAYMsXw1J3UL9b3zYojtBSQgPGSkYUG8rfSyKT1UjqzL3qS6RpRhcvrP5VsuvtuhhJcrDuAfGHKyCK2w",
  "key13": "5qQNbnXsoZji8orfPCC8Mwa5B6TVTFDZXVdBh3NdgF1zjdMkQ8LVdp7k9Vk1oa4Z6eZujVH86exxgcKM1s3Gseg5",
  "key14": "3kkti2smZFLbGae9JsLVL7XvNc613GokZpZKqpYe57zcwHAcX9xoUpxRGnRUgukRbxbnhAW14XnPrGVXhe5yXmB2",
  "key15": "4VwXBFL7bvaVEX24R8rEcwURiZZeyRh6q4PLFWCyCeQ3fw5UyLRfQbTqktSuWFxnpSwyEEPKJveBCpd4DXrppU6z",
  "key16": "2AoP24LQCJbWJ8RLi8pVSjhn9Pyk2KzaPL95rvwSc7JmCBWTGJrE7LHyAMcp6zvtPVuT5sGpXEazoNXWLXXeTB4M",
  "key17": "5YK2nsRSdCnVRnqFRMWaW867WJD8ywPenapn4m92RDWPGaWq46oGzfughbsQ1K3e57ZG1D4AZbXP1PaQ98W6qbEQ",
  "key18": "2P8tVeaKwDYuhStLDTwCHf2nymzCnkejTxoKwz7PX4bV34qzSMPE7V8QVJB1wbiUCjzd9Eyw2u7GY8xStt1sadZp",
  "key19": "25huxv5zbZRpz5uxYUqeQaFjWWwRRZKYMvp8oeT7xoTRU6iiJMS1ANG32y4hXVoTsGjE5czTzm1nFmNfWqECF6ug",
  "key20": "3VUK2jtWFuLivgYqzbbd6njdRFsa22QnMVcZWRCDDs4CkTVnJPjz4Ubf817X38gZjM9Gno4sB3feDpPU7q3iSypQ",
  "key21": "5K6T6mxTuHLvemMkCuYF8n3GVgWBCMyHM45TTabJqiu3U3NxbmPi48QjoxQsnpN1rdmD5zTHmMS6DkNCTCYVundd",
  "key22": "5qeWfCqH4yRXdp6H69ntzmp7vCGfCgYUu4EGPPup8BsRfk4P8vdhMZ2kGwPKSosLW28h4z7bQwVo2EUjGscZLe3h",
  "key23": "4moUu6EJjjUstBc8zAhHZtsSJvHNMWdVyEp9GTsL9BiPPPsSkk6vCQ5zaz9DDTohsAXwz4kcvKtM6AdCZn8uqtU8",
  "key24": "5oJNhibYzJUNwParm1gKNAEjs9Koeiz8RbrYHMStzEBcFf6gfwFHkxWoZDe698M3X7uZoBVA9ovKXF5D3GS1gGHX",
  "key25": "2pFcX1zHBL9GW1CgasojWzSBBAUVJTPTm5ZRuTaxJNr7DnbySvCwdwAVyMtF8QQQFJ9gGzszY6rQn7Gziks2uz2T",
  "key26": "3C3ZtVMsgPqUo7UMe1tkjqYx6Yau2z9vqgWBF2nVgPTbknT6Aeuvmr66Hh8ZAj1PAguFAXP6L7m4SWmPjnWdRH7g",
  "key27": "3vwpt6tQ6vDsHxz5gPRPHfFJhzxmsN7vTJRB5eCg3kNmf31qz3ATNwcL1zyjjfuq9vNdQmm9efgVgs8WG2iY8G1x",
  "key28": "67eH86o5oFgAffoQ1F5F9sfkqVsaBo3KR2iC85c2p4efYKschFPvDCj8t817dDZuxgvnr3qzjrxDteg9RbtGo3nr"
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
