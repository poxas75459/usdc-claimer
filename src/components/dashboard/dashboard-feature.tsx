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
    "598bz9Pqgu1HSaotz7SXPc89eZPm6eFAD5y3Qqk34BuVsSTZh4zhtKRn7CLjCQwifLDntZsxPu2fYFaVQnDXDSJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1srKg2UYZ53if6MQQBZikkiWSkZifcuNEfXpB4cvb8XJXjcUd8Q5FeABNQtnmC6dbHd6ME6yz7n89QkiViVxjE",
  "key1": "aeX1wkgAi3qRsrP6cWjyjhpMVuM9XzunxHgJhkJLsmfGQ9wtZhPfydz16ogqRpaA8EmfuLiqhMsMQU5QFwoLeow",
  "key2": "5SkL6DQ1AYq775u3Yr3JJ6Tu5Dnb4ypSV2pWmy6siZyCjymGvfDKvKkimwSZJKDf8jqymqssa1YLLoUMRdG9B8TB",
  "key3": "3hatuY9Cp474tJvSpJRexJbe1PYFY9GQGQCTAXehNqQcPjMDFLm1W596JvQS9Qtzh84cEW7usAk4Xk61qUqkxnLi",
  "key4": "2uwd5KKQJ18RgJCaiPJAvJ925tAw2nGfRvabtscniY5qGQ8bgUVU9g52zXUceaunL19XYfJTuz8s7FbcHmXDvLjh",
  "key5": "2Nttq3MYrqg9ap42QifMfibiNuhiNceyD5P83aQuLU35vvyDwzVnqQoq24Tn9G9Jj71dJc16JBvoVzeWvj7Tnmfe",
  "key6": "2XpQusgafuGJAFP2gXg2J5CYGdJVzL9gadZQs25aBMQBNSwLHkdvwRmLQW7ENGAnxJw7yi1AjywxgCzpwyrzMJCi",
  "key7": "5jGwgfo6e4ja2VUDxAMuvqUhn5K3Ha5HtTu8JY3g7t85wjvpmvYXerJ9biqgGUDNQmKVJ67mh6XC9ZHBdVmfiVjg",
  "key8": "2N9LktgpfPnc6Q5ZhXMJEyuk5FPhFXoFkb6NKBVAgywHnftyyjCeMLXv1ncoBtoeQnz1XuHVEeeuYTYPJ5ZG7xzi",
  "key9": "3LtjPV25DCP7Jam2swkzSdCtpH2tsnW8KpVyCVANridR6uD3jZJuxNDKxmzUTX33cNSMSC1zbTi6LR42VoB5nzuY",
  "key10": "4867tD738JRUstfKpAkoqbSrRVv6x99DXsnFuKqkWeub922Uc1jMCYrZ8Frbd7onA9GXMs9b11D3x53wh32VED8y",
  "key11": "53MBe6E1EDRPoZk3dRaddmFbDEErNJg8QJovPGKeWDCTgBqBosfhyNdVQG6FeZXgCFXEDC1gVkVmZxSH1PJZyixY",
  "key12": "5NSsD5zhU4WymfYpYhofn2TH5a4as4nbb9bd6YjivTE5rr1jPrGXgAnUkNjdmi7kLooQTyVFCHihpaUHTdqkhsHG",
  "key13": "5Z26oCMt4nxG4eKf7v74LwGiXyUnfyt89fR94Yf33fszV176sQkqLTDihF6mAgRovcXoWaHYicgHhued31LC4mja",
  "key14": "27h4LuecwXMYeHLQHH2fuMH7zuSc94gkabLZhtZePP8E1c2nWLyuLtB3dEpZMXfgFygBoZAFuepSvErY2fq3vd3N",
  "key15": "35QfZ9YdrmAX6f3ALJQL4L1hUp7KPfXB44ic7i15PUcLyv72f8t9LYbyihXpUgprqjVkgBoHwyGJSYwRxKFTieUK",
  "key16": "3QkKStjymCVTe9VSQhUyxSFhzk11FX7y7Hd2pe1jRKgj3kx83RAHXVxgpaDCH4LHBLVHuAGxeKYvMn3d6HbNbS9a",
  "key17": "3WWexpReyhVZqoUVtDy3HwTTjUz6Ku4BgKyvFxcSLN5MFmXmedm7wxzMDnDsimQ597Q3bfF1nBBtUYeq9KLDs1Zi",
  "key18": "3RFMiST31ivym4VcWRw9xcPjkLf9efkY2cXQuDBNXM9rsnGzxdw6LxWRDPqYJp9t15b69amMGEfBF9ZWLDFc68wS",
  "key19": "3iGQuaVJT4M4Ad2A4j4iznAPCH2t4r3KD4bRJPizVyMF6enVvdTN3Ysz8eXNcPREN6BVBSUyVh8aX1deFNEnS4DW",
  "key20": "5QYtiU1B8gECUWD6cHx6V8ARmGrXNevCJK7xAhCez4Z3fyssTYSkX23zCC3NE23jXXtSBJ6EQT8A7izY92Ai8nKN",
  "key21": "4ZkHH1bbu8VUFewKp2VxRETNxaT2sLPwmgthRLH6xShHnchEKiNMUhQ7vkn2kZipF5wpUJBEFTjwCZMANRyYFb1q",
  "key22": "2NRSGUoN5b3qCRSvXLoKvt9HUWzFgsJj3xKM8EtD8FPWzpPTwbbRE3MCS17LqhpcAMMRcdfZcmTujwhcmNoDRhgW",
  "key23": "4ghEw1wpS2JDSV5SMKXxGtFEZeyRAvfB4X7yxgbApXcy5HEwmC8hibs3vxPBc1XUavP4Lgb77x7D8LQaQSX6byQu",
  "key24": "5nksrtiAu7u3upW1xzKP1fHfauKqyHDxLKwPLKGahSeUeU4vALDNGsK4dG9Yzt8uscaGXmdZNLeypCmpzDu8tckt",
  "key25": "4W83u26Y8gvbXqKstkPbm1t67FRxDkWAcmfYzf1tnHZBRGhwDkJvXRqCQBaymtAnPBhGnq1J7hht8bNp7FP9YWGo",
  "key26": "2EQxiqeQvwHgUEctyvuykvRUJ8HVxpkrtqPbWm3okX8e6JszDzzHrZGSh9Z2ZxZ2EMiq3XVKWygWUcZzjR78hUBo",
  "key27": "4vXf1nUKjPCRr23hLB7opvd42ogkkAbzihXCnNodXR9nZk13RWrqp83sLoxxAzMQ2yk7LqVpzjyyWcUqBr63BSNW",
  "key28": "4n3JxmcmBWTAfEefyGrPi4Wr6Ca7nEqZLdunJPfm2jvdikjYBRn8ucfFHf81CvGZikpxKRsqCYaGPLxNngrAAjHK"
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
