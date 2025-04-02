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
    "4TTNh7VgcELD14Z15CrfmzVsXLNSRPtNHq1Rw2481RTrSzp52yAQyv3zNjXaGEUnDGP3Xy5aKgydrm8GU7c4Tbcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XnYnRSYsHACPjy9CDyA4aU82FzgH7WzcqVa2PMHWaNGNjH7aESxC2YGHykSYLN3u4L2K1WuErqb1GmForcNQS6K",
  "key1": "3U9RqBnNSdW8VbrsCP9b7ijTyaKLtoodikviNZr5PXDL6EqzVjV6KuGaeJC5ARYTAJtjY8EjUUXsyJX9WTSf5ECf",
  "key2": "B2aGLwBHumnsZQJ6VAF5zwPK1JwDFNkprv8vtxK9MXdH59kG1Xo9qrs39zoENUdwjKUJnG3ZrboHsnEX8D56kv8",
  "key3": "3MRfwYnhQjQ4mU52jwneeJPZChc5EN6reaHVLeDKfUNQCwNkCreFzdYJxDp8FhjbwdAmLLyCgJ4X1nBxoaAU6V4o",
  "key4": "4psC4uNz7qw8vmJdgN12CFcEn5axkEkqhGe5kDAJ5hTuV1hF8YhrxBjZACZsjmRffvoSMrZTGLNuxKVtMiLepSJC",
  "key5": "7c3jcXGqsEwW9cNBD37jQ9geUpKcjwX5gUjBr1nNT3KKoUnYhtyg7dXRS9SivnohDhK6FizVpKFxk2gktMXaK8k",
  "key6": "58Ha8ENU4gQD5tc9WKgcRZsFNW1DEpEkKVowyy1uSFRGFg2FvZj1oZj1443J4uCzHGJVipAkMGY3DYhRDobP93qQ",
  "key7": "b8NngnTrunGWKz9cHmYBxzr58VRoDMrwweaRhHes7sjpYZc9X9a586NGgsAMezhdXWJWsAzQa2jCPSRGZEGnb3Q",
  "key8": "482ZwvhHghR3hVTuLKhUo7TwcUtZGET9rXozUaCwtQHyk5fS8C9uZwYFKcxWfzES2Rsx7M4ZDhGifWJhH8PrL6hC",
  "key9": "44UbDT6t5M2SR1cXLJDyJWiLGZBbg9SgwhR1Wsor2MJsAp6sdmpiJXSR8UmawevrDcDGyjK8bh9eVsC6pxcUDsgm",
  "key10": "3vQxKCrod2Uhsvin5yLARetmGVY8JpYHkPrvjuw1KR3qV15ezBA2AzdWhKGVp6u9p7f12SQSx3sWFBxgZv3xuVua",
  "key11": "NWiBbmiiFzchrcRcjekkpm5D9BEV9TXTKbpyECnht7XXtsmPQx9vYBy8H1MZerBGFuu4JNfhvmDAZhM7QcguoRA",
  "key12": "2i6Wnhie4mACHAUwctBPC7qKz7FSdp4uZkWzaSHZfaBoFm9FXbKK7EXTEniTy4wMAKAzaR3Njsp7GUrkUZq1nNTj",
  "key13": "5R2u4wKzPYezzryXjMuRVwqdWoFMdvAwjmGHrVM1ak9STunfuuo3CVZ3V6fSuEFS9cAJ5BQ8WUrDNdpGXhYhaRyn",
  "key14": "4D9oEH7kzQoh1dAJWM3i8sgBSzPkEqcxMMKRvLM61RKsNmannDvBnoyoq7VpbkntqWzbCY1RqUNk7t83VKudeybN",
  "key15": "3G1Ni8TKcvvtsDDYLsvfvYY7or8d4J7jWnvhGuEyc6ic5aZeyYyVgQTD25oVSeJ4DKiL7w1unahg7UPRXc66VzZh",
  "key16": "2ujGqJu1bfThxyzvc7ii4wraXpxHTmgsVY7Ji1t4uTD1mxb8G91fLAakgDYptQ8F3nF1E82tQrNxoPDGjiSNMSkq",
  "key17": "2KUQR1rqCzUBBw7pade1CSxgKK3kytVvN93i3VW7Mg6WoMnLiK5eyMeJ6fkNvihJoV9K3ftLLJ9MF1vj62ZCt8P2",
  "key18": "2sMXfbF6Q7azj6B6b4LbcfeKpvhFEYLmz6VXYcZoWwfE9E5GwMf28NDdyHPRpayQuFhWpepfHMBTnt8rkRdJiHev",
  "key19": "2xiB8Ps3tsLo9mNmvEAE8He61NTZBeGh97a3aoLWfBLddr4Ahw8vTpXeuCRKRUbymtN84dSnUXQEPrQ5vzhZ8vVd",
  "key20": "JNBpiKsUEK32k6DRpoGyGr4DHZdFxCrYSH6KQfRjCqzVujXrwgSmPE1d3c8U2Av6LZ5AXELL1wynvGUcXKYWkuP",
  "key21": "2wxeMDd5cTAvyPTDMFbPi8Ea3bfmZNL8GT9YXMZZfTjfwUnqhvszJSg8hNwDYrHaEiNsdktFiKMpszXYgMdSRtD4",
  "key22": "4A84K9K8XfayDDxHR7QzGgUMbXdtjHmZ29y6ZAye5boSgWG1jjTdoMSUw1mhai8VJc4zRXiZ4MLUkprNNA9CSjzt",
  "key23": "31TFyydQQF1r1bPqGJopkNXgxqnK7JsHG7V2TGLxt9fao6w73wJp2J8V1ugeVYsxpEC3mG8KX3V3JTdnEH1f7Gzo",
  "key24": "5xFg7AMwGsKnwkRxyze2JfF5pMzXGPUQcmhETfVREQUJeBqgyqjpRv9dWUQvMnaReRZh3JYandF9U8pHCiZCpt3f",
  "key25": "Ftjzd5W72f9fnJcz71g4Ke5vFSZu1egaGopRgHLdxp5yjxKTN8RMijWUiL8QyeTEwDUQpVhe2KrutFZYzfnmfdz",
  "key26": "5Lx85pyD1jVRjFvzJTK6gPLaSiuLUWD232Nq1WxJezayfiGhm8GCrNxkU4qHLWwW4oKJja4MYjonHoYoecrpAKM1",
  "key27": "4ZsYnyzQQufeKjX81voGSkZnQWBQzv9Xta9yP8v7RvUFwowCeTeU8Qqwmge5qPcoMwuU4Bt9duNePYp8thrHjUzk",
  "key28": "64FSvK884qFgXas6o2s5fkUCZPy7pqK1ux4yBcuiN8Zcy2dod7Gfz1nxk2hSX1q7jhRStts1fPz7GvGJrEXcb3EH",
  "key29": "3YMjFco7vM7Zfr1koiR7pMtTJFL6qKwLzjFqLtgrkjMzXt3vvVGgQxoyhsUYo6csTV9n3iUkzQaHEWWtFu1LCK8C",
  "key30": "2ASCRdTrYxHrQuysbiwAHJCjCZXhFKE8UtUtD5vdFXeKy21aWCuyrPVFi7aBtRhYVPkYuRzqG1N1XdFWewTBHLt8"
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
