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
    "614CYz4VjdTfEbmo1wji7FsL5aBjP17ijaKP3E1JTE1RmJVKVax2akBeEFozhogg9CxLgiG3fGvvK9PV6MgsfTXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62H7FqUwnQAub2hnMonU3j9P4kFuRgWu46DF5sZ63hFuCpwQabXbr1jT8BCT4Y7VVuotHpvZTx77HHGiJTbjQHn9",
  "key1": "3AbFhSZ7coEhTv4b3pdW7q6pWhe6FLbWZ2Cq48feZUYQ3eyKqaCAhRfy8FCGdDn7trmhsEioaGsjmEaDFXM7Ckn2",
  "key2": "3ez5JCUTA1rhFxi2H1n5MYGTsay4347LVhDjrmjr8CkEHukUXg8J3XbZ1UmvCpW43FerTApk9Y7gnroTjZFAVdcN",
  "key3": "339rafpNhkArKsm4JdZqDZwyN3hhju5HewedttY4ANTXYnMU9XxXJsg66sLxF66vZqo3xi1uXE9vDiETMNxVNVjM",
  "key4": "4zERvTkWKuhph2tjXM9yfTnDQDMizinqXqKwj8MFxZ7mQNGUMmXov5ZgWopEMD6cpAXei6KKB9jLXaVSBMVU3TWh",
  "key5": "5yaqoTo45iHwjS3PZQN6tLhbEzNr8BbDoSmLnxTLC9hZE3WhcGRNHG36dg5zzLpU4hFciJwk9d5jX5SDHwfRGujo",
  "key6": "3PpPedufpkNkbg6SGj7jCrAQtLPkYv9tDFCPuMHwy6bA32KKDHSxhEhEGnJ4iZ7EBPYrEWvGZQWASUCLAYn4bPz6",
  "key7": "2zfQxKHP3xJ9wGyAhWSexR8nB4ehfVusChQmvAAGJcn2JUdp88YLHDiaBsjZtZQpiTHBym8fiXyPrsZEjzSDcF5e",
  "key8": "4tB3Ai66LASmiu2QYJif7wvFqT1XKe8QYt8tYhQNMqbcgr9PQcTixo6snL38ErZfX7dwJpW1gvqDSnLhum2A97Mw",
  "key9": "47WEV3gAfUg9CwdbAhkExn3fQMWcsKvy465XefATPLYW4C83iFHdKkzGHwP8e5Sesu6ouPw73SFK3XnRQbmYPH6r",
  "key10": "5sSfE44eWDS6Y6yGVfjrEutxpWuCLBQNgaxi51GEVCmFtYoFtNBtKEUteVnpurnHu18F9tjZXGLxmXsFD4QrMAdA",
  "key11": "3MX8K8isS3zGgXbvzACWQvmmQCFpFW1pUn87PfnsSNcKrMmmH3bs5JgvN9sxp434tdmkrJD5K1beDe4hzbVwm11v",
  "key12": "5NrouZCb8UTMrLr7Qwc7yuCATntt2AUZ6hsHTzG79MkANTAHN4m2kf4z2Eqyg8TysRbQcbzSsUGGoVn6hvjaoHfq",
  "key13": "2fovTsmMTanSajA61j4xXSTknoWzgHTPtJxxTvcucKoa688o4aWz1iFfa3rnGR1bZSZ2vsu2ziaBZSqVRt8dzLYi",
  "key14": "2DQeopG2uVHKNQ1vYw5ABoYAWG93CsKCx4udBSaGkXEwTrKbsV7yA9ScQGd2gweTyzkrxnnq6bHACi1RRANe6Wnh",
  "key15": "4HqLm88WtXy44wGszeerEoMH38nTSETQ2KjP8zvKdSHpwDddgSPJnzPkjMbqVGo9Zde8MuniZVuZg7XTuG9HADsr",
  "key16": "4kK1bW91knqhMbAtRbU24Lm1rTgJDZiiDkh5odarwQcPW7fnD8cHZEKiWYhdizLh1DAdbCxDGCdXBxaPrkFaN8vH",
  "key17": "3XhDtkUVJjv3ZAFw6bCS7WK9uQdFnej3ntnYaTFLqy2z91wy2HFodzgwPDBMr5EmWgfYbQubxK63gGhFxLTadRvf",
  "key18": "4KsxneMuKFfSdH2vzktGhHcoxRHp3d5hYjffghkNn3uRKqqhQWhKqPcmc5FJUuFMJtiSMbRfzM8Gc47Q73jckSFp",
  "key19": "3sWJaYDEo69yZfYMUDtgK6UF11PUEBjQNm1CGmFLE6W26yPbpuRJPNkzZgRFpaDnd12n3Qs7BapR1wd2oGyrue1k",
  "key20": "42BMCprqLBbgSVeur663u3yXeZuShqtD4EQfoNPuChiWrvnRyYufe1ZNb9z9Ww6666Rie253woQzqfRTcDQJAYrf",
  "key21": "5Kimx7bjJzs2ay3SGoa6rjQKVMdFxvS41WvZP9mqkSAQx9Vcz1mKRnpdWydSWJzHzshSpJwZnVcF3BMxMKLx7Dui",
  "key22": "tYtD9LBZKUAnfHgyu6e8NJ7bRwVBLvsX7tNwUXkUbcFKfEYmj9NFaHSKTDeGpysgwGFfNNq2Df18qYmeBp1xBrS",
  "key23": "4jihHdaJQmR1Li37p2VMvBgyi3Qja5TvvKWHSoFFtFn9UboboSyefa354HfSUzZQ4ynJJMCAHd31whwpW5EQEmvi",
  "key24": "4jcJNNhxeAoK2mf4MwuhHZgnhVpyuavdhFKovjZJzYQYB18HMAHkxrpN7JHFWs3e6peGQQTGbiLRfAw7WE9pY7tK",
  "key25": "2SzSXST1rRz4S4TMNzYLbvudDYQeidAHuUdX7RDViwV7kHUMqn2zDPvx3EHektK4UFebBAqV9hWHs1BBT3qp8CC9",
  "key26": "2kUDoZbDizM3V7Zp8zUJBhjET3o5dN1EQNWtoPwxPkHT8DXxJyWDySoQTuFP2dyFT2dzvcN8YXz2Jicck9GNgveC",
  "key27": "2LCF7pLkBZw9ctF2WPJ5iTHopSXgZrgQyEgYGA3M7MogdSnzVKuSuR7R8DrtkrTwjZDtgoakqQdC7bGzrWmXDoBT",
  "key28": "348HteUZVhrdsdCYsi6CyXpU2PXcXrqt1ppZ5EWXQifoyq8ZUkdqAvFM8fYSciJqJgAfCwepnSGDtLz4wewzrk7b"
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
