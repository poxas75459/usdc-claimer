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
    "HjzVkXfvcTKtc8pdgVjpAdn12RDEVwNjcjs96H9GC25dbtGVn9MWJj3vixZqzDtXCRPQS9Vnr1YCtythQ3WShi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H8YUa7tjcpM8pcuJVjXFr95E7gvSFcHnocUaMn48Mj9a8XAeLN7ou7fikoeNYnzG1ktkSv9qA7mDGx9rrAAeE4E",
  "key1": "3frRV5w854fAQZwmDfrws5DmVMP1YtfbvxesSXW6Es5bPAspoLqMikaiHBLeZoZ8jcJCcpKiwBVEVb6rYAEGvqYE",
  "key2": "XgKs9rnJUBYyG13Qy13XampUprn24naKfjdc9uzG1WQsJHQ1dqVnq8d1fcx4iXNpnp33pRos8QJ64rCt3YXiiuy",
  "key3": "wEhsFU1BYud4crtis8Lzwv3zCYSm3MnXJbUbecuUQu1mSxrKCybgXpHvhRsncLW79MZYv4skZoPYFMHbDeA2knL",
  "key4": "2SdMaZBhEUkhn6V1Yb5NyJejnB8qLqTvvZsAYYzJefVFcHz6g8b1MU9hNMNAELPTQFzHLSvJ66Ciymfa9ZYgVDmG",
  "key5": "2SFktnaix91YzUCwuzCwpK2RJeBQtNHzF1Z1teh2jez37VbZEkRkaLtEi2qh7kKSZGSnn8JNgscCmwTg7k8FX4t5",
  "key6": "2SzeqsAvwMfpUFdN6h1uKyWE3dFEr4BswhCFL8XzhP2Uq56V4RfCxFUaeo1mo9W4gRb4dW5sCgwMkjXY4rVZAhiR",
  "key7": "4pWfqTZjcotFA3cvznWu76nuQhktdGUYuYn7dPPnjbxwGGRQxtFhJ3sg38X4wEGtGTZJrgwagdHY9ZK5E8S6Qn6Q",
  "key8": "4iSWCrikRDi1tBi2mmdRSQeHXDSwpwYnUBtXhBHcnHamraESR7XF42xsrxWNGsv8hPpvXrG8SdFufUeDxhYEqfoF",
  "key9": "3BBPsCDEmG1kvwBbD2PFYLwd9Y7irFCcGPoE3Mmz9wACywqZp51eH64R4MMMc2og1FtGA4S2KjfgVKgLC4ckXkkw",
  "key10": "2ief1CxcqjE4DTdWXM426VnzNyz4CiJdpfLfi5BmZzB3y4uDcnvt3nKFxRQzG7SdDuV9hENv1BJVEswHVKTuSbib",
  "key11": "3VcGDwVeknJabgCzLwD7TNXJRUAtitucPmck7JeJ7nybqVmnX3gkP5oKNpCYtUtp7nG9zaJPYu8bi61j4g7YUVBH",
  "key12": "aRTPVwXU4qoQSVZoSrp6T8ZcSQMxKBQxxHCaGGNGtFcYQePDtvVkMm3NSPxH3ikTDwrYiYiqnDpU7XEaTitkuZV",
  "key13": "FSCUtjGXoA6z2hcXqPrfrB2iFoLZMnun3QpsrENskr9jp3NYeTTovVZYyDSvfqeQQqU6JbdhoZoduDppEk6RJbs",
  "key14": "5H8CUaBCk8LF3xnAoEwqptomDPM9gZyizaeVwNskwYrrTuSJeRdcDz3G73w4dbGCCQriGe7aG8H5rNjCfgC7Nm6M",
  "key15": "4Rfco5u1vXUNj4LAjQYCaXa7zNzKFRVSoTaiQaKG65tG2uCtyzvFDEVPi78q5tQFGjMUiVfXiFamyC6buG4Av82s",
  "key16": "5VfurMCiKqGj1wApsrYwvanVTAptA1rnRvkfwB8MTqABrj3s5haKPt3JgHGoJwNLWEM8tBEMLkCVoJT6hMnKw9t7",
  "key17": "3wu58JGs4cxkXDn3YuQ7v4aosiv33BEX9D9optxNVXLNSy2jNHiaRm249qaNwJNH1J1htcStr7KcshqjQUW2jmxo",
  "key18": "2tAstAd6K7D9D8mAiyABvmGJJxURDDMaMFo8zYpWfpPNBmn2U5vpw3xjztgdhjJnxHpv8Va6iFXPdLqWCkJry8bS",
  "key19": "3SvhjvxtzfEkH14FM9QgDMYuCnpWn2wyoGnJwiBTkJ7new8tWoyx8zz5UrJDUSzm6bbXWkpzfFA8tbP7Arhof2FS",
  "key20": "RasiaEALsqWyevKq3wt763oYi4bRjViNudFkS8dSzfJ4Dwew2iK1gpYsjbqBxs9GrtkXscvwRbzufykFdaAzJsu",
  "key21": "3PrCcPDfzjBrA3ydbzrvzaNdnjcDo9cAZiiC8VuZpkhbVZHqUP4cPKKEndSJCoy4mHi3Ge91XayhVkB1sMwiHiyZ",
  "key22": "ZdS7LcYu1NkwuEwrgp8UVpUAomTW4tjwDqJHfgZm2SxitqgN2jq3iqYTwYr14Ee9Nwhzo9vSzgu3rEG99tkw4zL",
  "key23": "b9bxAvrMtgLD8aj4bYSyPWDdhiqqucoRaHs8zuhugacDZTFzPgGvt9aYJGTU5NvKayMAjV6fj6Z1C2raw2uhqHJ",
  "key24": "2YoASzEks5zPpE4PnBdUDv9FidNLTKspDVyexn2B8CeBnXU39Ss5BMMcjuoPjDHvYbLf3vtYTJhZpUqLCeFDwQvf",
  "key25": "2YmkvsY6dbLRD7mQootBb2sEQHQrQ5Ufnx8fnWd9V7hkSMDquPq4YGcLXkrRYQXPmpGxHr6JvDW883B6n6D1XqeZ",
  "key26": "43nkE2a9VBDr6uQDRgNPYCovEwoCW4rHTd5TX6nATWEVn8o1x2vAFrbZfCfoUbhHot4Z2GPi223Z3wFeqmUNxkL4",
  "key27": "3tocwydc3y9xxiPYuC21Dmp7kFsD6cEqpKy7QotgVnx1d3kawZtFY8mvRZJRSxioEirkS8ubSfecKSMNsoo2NZNo",
  "key28": "4jwxmqHGjYCLFDXBF4asv6vg3zu6pdSMEXCy6T8R8kLnYiLQ58sY8tk6oNThd7x4P8ygATKpZ5xL6abp6uaTUr24"
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
