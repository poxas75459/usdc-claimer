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
    "29LEQHQSucg9saJy28Cw8D9KRCq8TamfyKtfQNVqT5zdd8ZeCUGxHY3b4phGC6ggrNyZ6ssPqpohyvWMBKuK8pQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ln4b1dQuRaYENM4rNDQ7qCoPS55ua39ko2HwpvkaUVrhSREdeZrQZRqiN27LSQWP265Yd11NqCFbRUQkp1hrAuS",
  "key1": "kjAGvidNoEVKBo28VqU9qFZ26wvu9YNi2jLKcDBPuHWCzg8bGkG1baLrQ6tbDuZCsuKDh18Hu8m6QeDPTVED7DA",
  "key2": "5P6bkosMs4gqMth7myE5w5EnkZcSK425xxB4PUjRBmi9W6PbtTFYGkb3iDp9f2VZcugfM4AtNzpNymVr7FsGQaap",
  "key3": "2FwXuEhaaYury3Xm5g893yUxXa3sWpt3MyA3pWx6bCrYRx29uxgzTjoxUgSdjLyAGzVHUrUmRia89KA1dcrynFuk",
  "key4": "8a9iMP23NU13FXafLnfvTERB229UvzfJrb1PoeDJUvMV12yofx2xLGR9JX9kajWGhXwGRpFUe6NGkwpf6RCuX3t",
  "key5": "36gTPVGWQ8oswtfQU8tjUXjxLbUF5hNzkqND5jLU9HFULciVuTKpdbpX9d95oJbsSigazSXxzhKQxeGKj9Zy4c76",
  "key6": "2wPZ8eCkcZhLvM4DqfT1taGMYtBqAM7zNG799crqaEvomVxzNCRhsGQ9JqHmdhsriRCJVQFnsxhcpvnci1aLUNYE",
  "key7": "SAPEzzHcEanrBA2SRQY6BqhJaMVXNEToZuHegJ9gavizb8vDELgZFuf38pMW8Y9xrEWtQazLhiQq5yXQsFArr2n",
  "key8": "25efJH5YTAqykADt4jkgheJd2N9Xhix8sHcAkZN16G2JxBygjEQHsqsLQihwVUGjWcGEhWR6unzTi1DY1L9ZjNcx",
  "key9": "2tXZuW7F1SRMNKRDbdBnRdQTwdBVAm9xPqbHv3a8TF7d9FhGWuzSHNhRzYhCUQuBMARwfu28tK3iyS37d4Ny29iL",
  "key10": "4Hqo46CYPmfyscTqiQD9LDQmeJDbdhvygBWGrmLQcBnhbRpXvAtqyj4pAAYDzPW2PEnK5ob59Yp28p7au2eXadDm",
  "key11": "5eSQSDrb7aU5y6k2m3c6QF1guKG6H9ZTnJotE5CFNFCQH4XHLJg8RuFZ1jTXTAFsoteLnUcAcECtxqqPzR14egWZ",
  "key12": "2CE9BhGPZSJEhS1nhBcX9Kmfnc4PJ3s6A87Cq4nhoWPxKKUnnYhJvdBG7nmAvovUsZQ4sQnB9jkcXtKSxDCCP5mX",
  "key13": "aTYrTduWvNP2d2af89bg3fg6kUrhc4Mo9H9G4ozqxmTFnPYs4Tm6nh4V2xAw3DaGLtp59qpC17TdeXrcfqxewom",
  "key14": "27dj9hGxGg7Ka5AU1vUSJYscVL6dvrYhJd5apyGnwEWpbyFzfvBsgRJqubMFK7C3RYpPmuuDnJwdyYBpReG6mEmU",
  "key15": "3b8nLVm2d8tgywC7dzkKZvvK944hcct2JcwpzYQHBS3Ee5D3EiU5Ykf3c5YfvWj2gmcC9cxV57Fk9wf8kUf4xrei",
  "key16": "5z1JrUN2GWoBM4Fpw72aPdQhHdhxSoVMFUzEMwTzwv3nA2JyfbDStSBJszQNPXhf7rJ6YSzuoVMH1N3tqUFgPJ3c",
  "key17": "5U7WDyeNZSko2kQUuNkKhwCUMgGU79TCeXDF4qMEhfi95qcz9i14DCzWwdWsBy7V4G9RtQZZWcjgA7dNhbYr4YPY",
  "key18": "2jrQsmjbJNouUE4kVAoJCcwUexgG3L7UrZrju3UsX5BeBibBY3Vkh6BQzyjge2nV2UnhsoBKYjLw2HsCGYjY36dU",
  "key19": "5m9FCWCWVpvH6XJRooN4dpBDipdLKSSNDntQhWYwtZ3fTL3AVqE4hNVDT2fDvdCEyJkQpAXTRVHiKd5CMxEYeCy4",
  "key20": "2pH7v6GswarKFkxdyJhpSwrbM46WbPJTzFwNydWsp93dwd3ftz7KGdmHEZDmEsDpy43jqVt3K6mH17mLJmr9ngYC",
  "key21": "2aipEuTn47qDViXsNda2HGkHsQ6saDE9KiasdHd1iPyK2NEBVnAHxsa1mZSEdXLxTKP53i7i3FFPzxrN86UEUPL4",
  "key22": "4KMiqEMuwdMVyTEioEuSRJvGedVG8LSDzZudkRZWvTCkbrdJ2sRsvpPPyHAuJAbxceYg27vDUQRreUbejHha5J7u",
  "key23": "2L3AzTcZdzepBSf7RAchkUjf6JMWtzssEfaN3ckoeAKbxLxj3J9LhkwA4rGsMaLTazTWk1zD3z4S16GKthx5ddHi",
  "key24": "51jqoejuxCYAfCdk6pgeLg9H2GSerAA3xcyCTjVoFRcKisrYMamYebZ9qkeNG3xKPVenMWcyy21zr5LGcDj9QLEa",
  "key25": "5pVVeWijbmXJnct8CRmz8DNkUcT48AMy2X9opUxUAhFMBc8iUjw8UBpquuaVrxDNB4a6UrqR7cmVL5hm26GhuXFf",
  "key26": "4HkopQ6QoFL52cdDQxHNvpY1vA3mXmXX3715JYtUtHfDcwafkqmmJ8AcXJwYpHnNc5yGewhf4cJJcrWoVxMUhq94",
  "key27": "3suAWw3uMbTC2waVhUfe7VAR4E2PMaj7pe8oo6V2UL9JD7hLAHAU4v5s3QdAdv2GH1vPmjmiggtAtPecbMC3Y3pT",
  "key28": "3HZrcLzXbPRNzaxJooXKEqjmnQ2R5ky83u2huqAK8sCAbURLMkb2BXQscVCV25W75UAL7V3GEKN56vJJCJPC1uow",
  "key29": "KiKPizGVVdmKsFheh12XnDttTY1pjt7xLyzrPqd5j68hfaGQXFeRDJXBxqWD3bLLexNc4XrtnDZCHrGU8w22xZc",
  "key30": "3g5i1RvfgmbMFFES5o8NkdjyfAhiVKfaZkizwCHa1rBSiXZAbEYiZpyc9A8BYK2dMaDKFYA8wRcfbE3UeRVLw5Wk",
  "key31": "48QhFDe7Mnu96mPXWBNyTU7L3ycvAsU6rKm4f58Nm6xQYNEML8wDtzT3zVkf5vsw9wiREQxQMFJKtSSGXuvEyf3n",
  "key32": "5tuVNpe6VTHvnXQUQGduwL1qSkyBg4wgN98cDSb4ntn8791hZVRV5zxo5EBLm3Rv6u8hNdffBDLNzuvmH4V1sF9B",
  "key33": "3NPEeewFFTQ2LJ2f4EXm3qXZMf8QAQBaNptwnhb4LLy8NQ4cwUcMdwtEZnXKDVoK5RMmNobqTifS7jcGeFf7r44E",
  "key34": "5xnz1H3wrR1ygxcbTQ3RBVDzP8259h7r8UvbjS7Deiemz8ZsHReZaQGMxm7ju88rBHw8uT5d1NGCKSFC2F8FuFB1",
  "key35": "LzVMGMLj884amZHx4utXwpdSxMCVRFNominh8r3inKaj4cxeTpMkjGjPhgyxJibqQ7k7ejP6PhuHDZjQiVhociU",
  "key36": "4QGpy3TkBUJJ2MEthRiq8K6hi8eSYqWFgwBN2fiE1bah3gPhVJk2nVomy4xhKUDaTQuSR9Bdc7Q1ac9EmP4yzwJy",
  "key37": "3c8wD5wWKMAv9gFUAtC3RjtZu4dJBVDQ2DygoJrckwd7dNQr8YmavseSwk6Z754mPK9mMtPYb1vjBsWVrNLikxDS",
  "key38": "tj4GUpAX3B9cFUxdXx3vU9ePRpD9YWDDPcnuanQUDCB7KZ5kAGD9szAway1REYQR5tCzDb51mhnK7z7JvBkQBww",
  "key39": "MLHXayjtB1xWBz8n8c5u9VpkyZaXKsfVpaiucvunPGhqxGY6kJEojZAj2rLmGT41CJPRcQt81VbokhCccdEJduF",
  "key40": "4e2iFntPJXY2RUxgUu3jhGw9FxShD9HEWMAFnhD2BUvY84LwTE6xWJuWTASpGzKrrsBcuCApt3No8WFjstTfvD1i",
  "key41": "2vpdYAiTiuLrPyZdsCiuuVfVh2VKTcB7AngRY3cVSPzu8ouQ3jVkvuSJ8CSXsMEqHjbEHPsvrCgNoQBSzp9LNphF"
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
