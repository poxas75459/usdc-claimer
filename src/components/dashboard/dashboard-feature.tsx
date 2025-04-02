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
    "3caVDJQbV6UooMNeFBEFuzNf3aT4ZccQykp1C9nCg7ua46xVkTGpSnep4tukJbhvV2Aj1YtyMiRZUnf9z7eEzb1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PZM1j3e2UpE4JBrDz4JkuZCbNmcBZxJZaqkd7xAJVgydZUEHDoySwxSggHFeEjRtUDTT5nWwtGK35ssTkFjMpG9",
  "key1": "3GT3wprTJcXstCFoLcoaUGcvVwucuL2qDxmWup9bBmbJy32vbzfa8JZG13PKFJ9CRMKsLyRp6fATho6QxdPYE4Dt",
  "key2": "41ckErJUcs974ShghFHeK7XhBD1QH2ypHk6h9tTaPewcCcMrqMfNBVs23u5ZpDiL9f3Sza54Fv4eysCbjjrFciRJ",
  "key3": "y6qrhQ9HcyvNX5XVXzL8jhLYdeY8eeFPjDeAgJWT5SQGRtDt7ntjysSziQXHsd91pzuKvP8CeK88XoGWfgsLXzD",
  "key4": "cJSur39tJLwuGSx2FR7kPJK2oTM7PbxSBkrbe4deEUpsamH7AWnW8ngvouwifYPyA52i7oyJXThfe2n7xHkyjvF",
  "key5": "4vWkyXr7sztGqRqUyUHkTsYUCsvMg2K8q5rrFQ3M7V2ynGGADibLJk8BLu4YJXio6HUuA9icDw3VGTkm3Z1joVRv",
  "key6": "3JheGcDkcf6t9hGypYDjC21n9rPqLgMazc4PRSnj5x7QzeLivxJATZzT5C7HMQYPbNvkvKNBFfBKHQwtTWmey4c5",
  "key7": "44GVS16vCP5a7uTGnKMsCRpnXwcaQkMhCkZ3kpm19fg8FtZ35ATXriqqCzD9C7oSsFvXRwbP5RtVtvkZxb2WaGjv",
  "key8": "2BoSZ7vp1E6CAPogHyEoRryXooEv81S7K1idUxMHn9dfam9V8psLv1tq71ReihTfb66JFcmqRrzvpTaKEQT6BdZR",
  "key9": "4HXFv57eXNphojkGe1g6zjhJBGJETjkDhEQkmEb8XCWdWv3rcgzNLtCndUwhdi12JTNw6EuSyHdrzYHQqeVGZuhu",
  "key10": "2RnzW1ds9GV4Z7wcrj8XrNqz5aZFbRePFAUuP2yoZkDdXvHiZuMZ19auXMc7jf1Nb6gKumyfanXhc7hUCspmJKX",
  "key11": "2zqv6SwMDpCbWSLvAP46452mLbCKfAJeob3qriQceRTZZ15wn2aDgeRoYDhLM5m9Mr7SSSQ7U2vFddXQiJcHAjCo",
  "key12": "3CxNzEJGxzotFeazMV74eqdX4NSpj7HxoPeCiSmwLsxKW1kewSEoigQgZDXTx24jMwgVP2wHHu2Dz3mNX6Q4qwBg",
  "key13": "3d9BDDpaNxS6cwdTF1zMdLi7bsX6xKgkFmpMxVMgpab5MGZ68LnvNzYpVrv2SYB3Sbm6kmyCULJEbGu6JhEtC67n",
  "key14": "66v1NTvg2h5skAPn8n5Cr6jFd2yyVHE2vF1YJJBqR7Cy5mT8Rxvfaz6tSs1enkd2oWHEijBDwycMeLTDsuphXQq",
  "key15": "uCdUQsNZFdkZ9Hgn3JaeJaX3MZHjaSDAtaduRMegtXZcy4Cms3mKKBmGPCJT9RpcpdiUbqvYFEMSii4iZ9HQYhP",
  "key16": "raaoApt5yETr6GFXPTivjNroHrAnyDvpoLg2jSPFymJCCLyAuvsb5di9D3CooQ7d2WTueFTm5gpEM7cRBbBT7Wi",
  "key17": "3M2f2xya6ZJE1NG4ZmnZMtvaDktTne7uWYPQBRE6cHz5jfFYQBFQRw2XTL4iEL1iEDB49dFjxDen9LaNTJDA5hw3",
  "key18": "64xeFVM5wAunPhi3Bc7iTQfXtYAM7SDU822deWbeDh1CuZqeghzugX17pHS26T1LU2hGDKeymj7aLfTTVaqQLGX9",
  "key19": "4hUkEpZHKtp4q5hfJYw4se8ki8AmsjMDHbutxuNwVcLFcA6E6YTKRCRJzDuLLPehPemx9LozqDDncuTQD5Wj3BFE",
  "key20": "3aeDwNT1EDQwt3WBfwx476qkHzX6Hix58z5xdbfG8Kyih2JAgssKebaHEUv82YPpQHCXM9wXfKbmJj7g2TZnuT7v",
  "key21": "4UbKF8twz3jcNfqpKJhdGcinjKoxkQ77TrEnuRBXr5tzr5McrT5uWrgtTHkrFrSTrzLUxAUQh61goAaNRe4HH1P",
  "key22": "3F6NSKAEqzxt2NPt8K6kq8YNyQxKZUKfpBLm7ASjwuyMR2iinz9GVMc6s2ioWQqRPkN7hEDHEYiK3i5GDDJjTURS",
  "key23": "fmD3UXAnxHgvkm5kzST1jcq2kdBrcScPix8tyGnp6E3QaWXqvJg3QGQR716wmQhUMzT9P3CsNJnpAyk1rVKukz2",
  "key24": "4H4Wp3wESbz7LgDK33uL2M917Zxo7G3v1TVFjFa1oMrtJTYz8KUraKG581SVTiXhjdGFdHPn4fegBouBEYmi4Ydg"
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
