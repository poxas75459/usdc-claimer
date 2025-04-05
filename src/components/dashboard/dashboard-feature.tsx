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
    "3xRRjgMPpy6BL1nQYMt61qe1JYCvg2UfpxfueRHVFHUMiNe7JQS2RP2XVhnBMdKVgWnuur1DgvmyfGNFmgpSF6vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDXKVgK4Y6hpDnX1U23LP9BBCTFSLwdWnhnNaLActcdKmNugvXUqid2udvGJikWB7ootpcCU5TrSUWweEyafCLt",
  "key1": "2qsw2c4ZdVZ5SgLtwNmYHRt5ifb7nxB8cTvX24hCPGW6iJEofJJk2zqgHQSvkT97RGoQ1TxXPh6rvudzs6aNzr5z",
  "key2": "26288ySSJAcBiUuZ8Zr24WqsskcjSB3HsGf97yZZvhqzMWhHLtS9pAZ7cWAy6A1RajNuUCRNn75Wk2hjt9mmh4f5",
  "key3": "oU1qz6GrYYE472aGLUSM3ohuJXbADetsVBNybiU71C14acujHinXR6Q1LM5KKvq5u5dWbWKWqW6bqqs1ThGyTfD",
  "key4": "51LVWsJ19pYVWzADrRLX6gnBMi7n2LKAZ5BxMB82sKWzsKGLR9sejxfVdeRjCDNvYPipPsq843cRoxsLtkmKgocN",
  "key5": "Nt1ekgAz1LJsrvjVAHzZKJLUXEcFwbeJKor73oS2LwSFsRATEBVFs7cA5SeX9qS1mMWsZrGkjiffMasGNAiiBaM",
  "key6": "5oW799embn7dMz27BkhJyf5Qy1dyMHX34i9oQCtWfsjKw4bXXnn7H7VZWWaRDwFBmhQJqrSF9ENCcsNR91a1mi1o",
  "key7": "4u5gejNZ7VHLnqkutCshbHC71gM7CPAhCHhnf5BHngcTQdUN2Xo1LC8ri5LFSLrEEUMT3Jsw9NK42DsZNuznWNsX",
  "key8": "4MJpN61AHhqKRJ8yDANHfHLG2LxLBUwATtyuj8hgaeqK7QEbMuc6DUfFTHMH37rB32hFKjTjanGG6X4Wtg6HNdsD",
  "key9": "5RXe6MDC8AxEzsjURPKmMMQHvk2WdV6psdgi4VRwKMNP93WFU1hpQT7PMZT8uXVKvoNpPXz2873V4QdqV4Nw8cY9",
  "key10": "5z3o5YwPvumHy48oXdFgSJr29G1LiJCgb9tKhvyWRjXyXU1sh6tL4KW1UkbQHJsLFkUhwb5P5LoeUcXPmpVpRC2z",
  "key11": "2gk9A2odXkgsgTP84X6vHMDHjwFMQkcSpKxwQ3HvEUMrDwHNU56odV3PNk8Lw8qYUNVVdKYf4KpTV9v8EgPezBmW",
  "key12": "64BCnKKGeGdAgJUtDHDVdNkNb6d7zsdTDmpi2KwVz6qrNDBrPgHBgkxz6KHn43msCw2xswHhcv2ZVoSZqRz5SJU5",
  "key13": "2VCQi7hMQNi1VtJ1kRzojbnQ7kRa5qRQLZ2CrgwqaEy3ZB1HYBY9N3AUkJJz2Gb2H9bVKonjfu7YNntjGJEjoXYM",
  "key14": "5Agqt6KSD9vn6SJU7it8Nk3evkHbFsZFtKrNxBsnUTrGxpJ15KCQMLDmGc1gKebbD9CerYxzfepagzk9xaZ1TbdF",
  "key15": "QG5wKXGXGQATcjBJpx4QZb9GW4uSNghB7GzhdPtsgCUcw9hWYtHsRSGtfj5bpQB7NrWVBV8DLCq5LQJn3L5hzSD",
  "key16": "4N23fbEvyqjhhJu6piFrGyga73QQHpRgVxoCeUdNX4idudk5GMx1Q5rdSWWatrrTVSUgg4gmF7GiouuKH7yCFUaW",
  "key17": "5emXi62QCGebHV8QjVSNZvzyxGKzGjFfRB9ztZ5V1ZYHqpSvf1sSnXHRgSnKePn5rUi2WHmD5wTPsz2hXEya1PEy",
  "key18": "5RTeqSgtQKwtB2cmYx25Rmgs18UceyE8ig5r4W3HKfxTXp1L3QGN3gQrFNzj59fn6sFFm8D1vz38xXVBjZpR9txy",
  "key19": "3H3wSa6SQcDUXusUnT4jvXDnapCpi62RtF1eMBzxSbejyuE2v59dMnj4jmNPiFjRHgibNz1yTWbHZitpSapm3c8y",
  "key20": "5VNhp9bC2bCT25Ntd8MyhZzZzamEQSsvT4G1tF3BVMVo2ytG5qgMHb7w5PBYZkmGgH9fR6q9hKhL9z3q5rM764TT",
  "key21": "4EdebEPNCTMxCWDw87XgXZfui3QJEqPN4edo6KSk1Fpok4eKHpLjQfbmWDbx1HSCqeq5BKSEKCmfVQdXR7KaAZcU",
  "key22": "bR9jHaRaZUDrAzmtzBzN6vh3X6awQW79qaaDhn6tq41MBGeiPyU2pTtrj5sxMEerYRGRwPe3MjLQGmzWtPGGzaE",
  "key23": "E1nQPqMxZCEXoBJuhh5fX2ss7C3i5enko45icgzAYaaytYHcMYpvZw2witf36GrkYNGm28Xx5qcGJwjoMhYnL3K",
  "key24": "E8mZAJaJGtwDAUsZMQqrYb3fsohaYkmrJKXnwynY8PzYCcwCDhCUpBfG8EuJJC1Q2jtYrsdYmWbWpfueN9Fyxxf",
  "key25": "NetagE8qeuJeeAfKHDWdJ3oFP5axR9PsPJ12oa1YNLzFyDEwL9kqUp8DzuNziBi2HLmWGueHRV74srxKP6wSSjR",
  "key26": "3xDYBHDLyoWozh2dA8MNXd5BBcJQyRT9VTh3M1KuY5wbth3ZVvyvTSSNTDoGtajT8fZhA2DN3KoMSTKpZAHtZdhe"
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
