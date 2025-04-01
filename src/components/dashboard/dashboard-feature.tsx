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
    "47NK9efnRrvWAnE11GYeTnMxzvjLYwV5o7YLq6DiRspnyd344Whpa4K8UXfGX7bsfyzSsB2tW14DDWU66eaMZ4b5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61S17wYY7A2e6ieReKEfo9fn2U2WPtBdCD7YDvzDghxuZRW5neT3FN5oP6tUaaBJiRQBF5xDehRPMSnwcA5MdkRg",
  "key1": "6XnmD9qcGyh4hDByJj8T98HcLZMvqHFxVMEG6kmAS5XhWSpgSdRARsc6BAMUgyXTynHKzuZaLi7jaqMAybbAiLi",
  "key2": "4HB4dudDgNiTMdy5BPir7oBh5uCnkpdquEUWXCB8TPUk6D6Gwv156dSKGbuJ8QDGmEPVSyQknG6vN3yyXSH32H3x",
  "key3": "39Wj6hC2xUdeq6ywGrX1peAfrWJfYTJaHJL2Bea9KABFRmL45xLYjhhweuTRvxuyAPTSy6bjUw56tURURFWhw7Xk",
  "key4": "5GqAeU9AfmkshXTG4rqC1Zuryfm6szoZeQDHGaZDezTXYDinRfXqPwVPc2nPEVkc4FD1yMD7F948Q4zn7KQS62pV",
  "key5": "2cDgpVDgFQrrLAc5UwqVR4MaeK6tcJ5ggQm5Tem4zTHHFzK6y1Ev56d65XRvijWD6NtJF7dXG5Tg4kM3KXL9LgXd",
  "key6": "3dRwHmKEWEhRwqU9DGpC3fk21S8S64HgoPNrstEb5pWgWTK4foCdg2sukKde8fXKXQyDRmAY4sTA7cmLb6tUFhpK",
  "key7": "2mTPKTwmWyFi7EnpXHDv96esAkS5TjVHTCdz4gvZFyoYjr3G5KpTY3Jv3cvuzYChCxc46u6aDAXKJxqtekJemqdu",
  "key8": "3svu75EDEChTmKVYTiztZ1FE2XGAQzj6kUyo8NDqPtWAwwSrLZcrLTMXoz4Kk11mBc8U68LxML6wBeqdaP6pv8eu",
  "key9": "3xWhptkbj1XuX4kefJqRcWNyDJsPkFhe1MLoWKTA4PHbvofRyXThXLNyN7CB94sAfxkt1izhesGohKZPqSAP3wi4",
  "key10": "5CWNrn4onsuYJaWJJzskoxussuZ8DokVjxeW19TDmdjJmQJd3XXAjqJcoziNEcHYm6kfC6s7LCpNNYiSpZb5xWuf",
  "key11": "4DfZsBv3Dnf4aZEKSyGUo9wxZWsQxiSPxfzkNeauMLCp4twb9A1b5tqrM6rKGrUZ5URijnNyhXT8D48j8J7u2LLd",
  "key12": "5Aew3gUjB5Vr9W4p8jXFh6AsqSLw5g23dDU93LAik2ihNwGbgQ5FozDQbdGEzqALWxJTxNjnLwvEBgooND3P694h",
  "key13": "2ghBh1qChhiQC5pvGLD4AqrVyvWKbNkbtKQxdsgDSQ31qQ9tk8bQHmun7dUZRTqCZHGc94w5bDtE7cXedRqegcVa",
  "key14": "4aMuXh5Azcz4i4uPnRuqrzQPJxjGVHs16cRyv5i8jeThyCnSu2zGTsmcDSo5PfsUBJX4bo1e3MW9srGKQPoCz2Mg",
  "key15": "bbuKYi1iri6pJ32tzaUrAsVKwydEjqHC5buGCzAuUACVzgPqjy4ny4x9132ku6mMiX582DKqV1j2dbX1nmqK7vC",
  "key16": "4SUUwEbTuw84R7UreQbMPinz8c82w3NTGmqwRmALSA2K2rWMx6jUBrBsTgjS5nBv6WdaRXShAgYD72BhnRJaf6k1",
  "key17": "u9oUPokjSPg6jPBbHNmx5RRwEr8w5YHGQQRAQWYKhNYF2zPaTkJwx2YHqkXKa7N8cR5AXNefpMxW3PPJC5mPnYd",
  "key18": "4sX39NWfEfRkXhZwxjdUvW3nYkB4YtT6k1ZJYwGRdqnVNrad61yga83BB93xfw4v9Nmes6ep4C395W56BEVEf6hy",
  "key19": "55S3mtH5CuzYNByzkfY91dshtmeUDHyPE8iPXHA4Bk1Mk9yiuAg7W41tZtdFskhPJhRfTKyM5bRdd5RCV9x28FLJ",
  "key20": "5mnYXsX8B1Wye2iz6hruxMpU8KgSaooH8SgLoVrByxZrJHhSmbeFm5XJuD8uPUYYEFX4LVQzt6EBuoiN4of64gCp",
  "key21": "4mj2HorRo4KnQrFqRGhaQCUmWaZwmR57addqijqdNM4fYXBoDh1NW18AJ25G5ZjLHfpXrJJN65kseBd5JwTqPw9e",
  "key22": "HU1UJdBxvisXSBNa6waMz2PJiSVDwZN1tH4DnPW8o5z6dvqmFT2EttjcS1nD4QyHuRBssJY8ZPd2523dmGfJvqb",
  "key23": "29KnHV1iZX7HEbfPyaoeNLsyos8ffnb8AXHBC7onzyrWWBkzbJ47rqh6B3jNcYZUd6gsZEag4feQBpbAj68xWiBo",
  "key24": "34LUD9D6mS9tCMa9arLaKszixA8kVj4AKTbrhMJLGrBNHyT9dJtpWUQkhePXTrr9ePWPHZgrEBWRTXAbu6KiZr5m"
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
