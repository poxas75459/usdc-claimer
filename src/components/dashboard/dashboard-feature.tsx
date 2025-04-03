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
    "45yT6i6JSMjfQgMH2cJ1ecenz1SzCS4uxcMeupt4dgWKJ35zVTcw8YHwyQoKR8tj7zGpczRfDR5pbLnjMLT37REJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57K9ccaswF34KbrLNA9AW1y9opYM3HDKyMTGKChj5mFH5z6Db165b7RLZMZqdEPb2WNJDVg28DUUugVQxqsFNPUJ",
  "key1": "dX2MDQmeBtHozsgVTKCnPUDLFv1vFmEdhuPom63HiCDw316aacS2BYJ93c4UrLfoVXAzt49bFCXGSvdKW2yMWrY",
  "key2": "4FtqnVK7vwUQZhcgYQ17id2UvPFRz4M3G89BEaqiyEBM9axKhSLrxZf98SLAwmvuxzdoo9GnsFDucMWi8xLkN67D",
  "key3": "4E9xJWuDehxpeYi6kZGJmkJKKvPqyd6aoZXrB3EDMVtQmuW74aE8w4xPJ8B9h7EeRyVo6Wyxp23QxZECocAVbXAR",
  "key4": "3SipkDhLxFwZcj4FAimLamGT1xEPW84Ad9UmNxN6Vrovg3LrNunBYq7Sas88hogQGeHfVxpT4G2HnkekoVTk9mVN",
  "key5": "YakM86CHfcCHfWrxCR2ERh9VETsxmpWNp9myyBJjh6HC3sZwokSAdC2Bod2WZk3oVJNMBrwdAHvuK2uwYf5YM9u",
  "key6": "AvxFy3np7Cx2DzN69ZkBi2jA6eWCk5f1sgSMo6qNr9wriHaayUhFhpheT34tbfE2LeSRdPbyGxrwYeqN7uknjNJ",
  "key7": "5gmb5fJgWT4kW91dFLTWqceRvKT8ryBWApE6PwyYEUsMQ93N3nTGB7cNhP4wDTtVY4DjEdkPzNYLpmHuPbgkZpmn",
  "key8": "VzzR2MCEuL2PZQnvAFn6HcMLrxzSSSPJvGV5FkByuPFiy7JowjvxKXMbqponqsZt1uGdTUxbEFeThpuSybveZvp",
  "key9": "247xuvURpUVz3xF6S6nscs2eVQSVMAZN4V2pwau3wrwEk5untUx5s4bJs2w2vWxQXd6VAzHrQthjvNfbSeCRx8Km",
  "key10": "5b7kPLrFuVqZNMDG6PMf92krkeYF9uCsFtDKFQMVWqF4hq5QTZS9MsxcNo1bXRfYZkvoEwPMZvh1LvcekhaWaJaD",
  "key11": "5UVGXYZATf5Gk88JLp3Sb9qSPz3SstK7JBXwgFbgWNftaiqcJTL7yeuBK1r3Nx2fpihkZy1zhB7DuoYA7Br3GieX",
  "key12": "66AM28AUyNAn3UspS62eVzigJ6bpRJg29Viaf51iwoTFEB8P7nwGxCL1H2oS9uWaNCW6MBY1s6xjgRvsaRTWvaHg",
  "key13": "4w6rxZLN1EQgXeiAu3hr1SBgEXasg5XCuSdJ6zomvTSLW3Wg8SBo5PVNrLNCBxK8b1XWHPKoHLfrCe3NEn68kqCy",
  "key14": "3u22JZb1jSPr8e6nHXoaYWUoNs3GF5KbyBoDH1VLDpoBakRg9yTG2jhnXAMWH9dmmKpNTixd2tFGPf1HV8dGCpig",
  "key15": "5grhu6Voi3P5SzgYU9Yncrx5UhKEbuFzpCGDD7hJq2UBoZ1XAHpHHjFo5QAbmN9YZ4ke4ffHzEYcA91zT3YYjAK5",
  "key16": "3SovbjyHTzajQPd2TVmGHbPVQZj6BkspXS4RF3XvFaaXfV2VLqG98Qg7u6X5YQsFMtVGHdSVTG5oMSKFW2sP5xUJ",
  "key17": "38foFnczzvoJ2WHF9tmmkmr2X8RBWTA6byYQ7u3mzsf8ueaUaZEhV8MpXRdSxSVJbpcsEq6tVbKxCnB3Geqj9e8h",
  "key18": "4iSmnmebbccXbG5LxbbwMLfLiJ5H6dV9cQ9dzyhTBHRZ8cZEmNSEERw3RFCudnEmKQfVz2B6zazAie1Bpbg2KEKM",
  "key19": "4NHsjUC9FEr2zJzTmnX63hsdZGh9JdUEXPjqDiDZr3ZWAq2uCt4SqLuBJyau6sBMs1cAYZm9xjVymfzsF7LQm5Bw",
  "key20": "4A9TpCPX9dqXDRZEPsgrSzNQuk6y9T9ga6dRNuvjYs1xGZX7fkzt7AAUcfwV15wvdX15coaqpzjJssHLR6YBLfgm",
  "key21": "5Ss8xe5x1na5dinncP6iXXikgueMExZHNmv6rXYJhZQ3jRF9ySHv1VUExnQcTqn88iZxpM9L3cPH4bvRHsQMSEdc",
  "key22": "4Fh2yWxd6e5SqYwyZc9PDwKuymxnWuytdjpRcvnan6gPRLMt6RU2vm6BXjhhzXArPJaSD7qAEfZ8bQ9fjbiS6YP4",
  "key23": "3QXjQoyJyZ9KLoaBQ9iRsUXQC4vNVHeBY6AdUq7Zt9FcDrMoMuCDvUWwmoDd5KydkHX6KiKQigdM5SPu9qn5rFav",
  "key24": "5i8ZwWQnDbcB6wYBegryB8fWgaPUB6BeGcVhAgRW2skGfydEt4SERNPbFD4BsPMyUc1MFBBYofq4FHw4v9NELJ84",
  "key25": "2gijsaMhUmwjNFCQs9eKgD89dGzbtVsBGGkAXwDk3UUGWcGkkXLR3J87hHYGvR2BqtnWTVVQhp3VVBbLh2EeuwEp"
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
