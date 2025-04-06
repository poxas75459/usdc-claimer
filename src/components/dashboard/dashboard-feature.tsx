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
    "2ayy2Ps1N8EJH1x3WEQRTHpuXsCuDDeSTzrPraZUoELoctga4Ymfrd9vezSqjtyzDSFpdTHx6JAqQYsprJ3nMHtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G796HVmH6piL9SMAovuUatj5xMHEn3wdMW8ZmK91QMkDmCidMknHt5omq29TvV7XWaxtm2TU993T6QzgbwtFecJ",
  "key1": "5PSTePybG6wjroQ4XCQdGMkpU42tAUs6G8qN7gQFooPkLf1ohQ1Fcqu9QFC4HN4nFeKUaRrVrEKpNjp8kEhnXRez",
  "key2": "3NtRSquZLUgxpsG5C4nBz75nMSjQ6gEcK2pHu5T8s7F6gd8jBafvU1kTa9wSVpP7tPViUvKib1LmqSQMS7wSNQiH",
  "key3": "2BKodPfeExf5raKy2zYJUhWfKS61MDAmZAsJS3vNNXhddo91XFF1ZxMhehnYpdjFK62bnsxEViN6pZRqvQWUnSbn",
  "key4": "63muaStXTFgne9ZPzUVZiHZZW7cBnUXzV7Hsff2ciniv8Em1szqWBB97bX8akxqAQNK8AwruuPayrw7VehQ2YhaN",
  "key5": "3Uya7LnxfPEuY1GVaJi19c4neWeYFw98qCA5cL2LFPyZbnWc3ymrea9wHJa8HJyU7hCbeEED5zFgm5T1beeh8kp2",
  "key6": "2fNyyQcfVBk2Y84aD8cTPYNLpfchUQpFWmmMndL42JDErTHzcMisa7nMUJqCUjPS5rVoEMELfSbBwATqHaji1TTX",
  "key7": "4g9PE4rRi8zxRDCRufhFxyVHRYyoJTgxQ8Nn6ArX8yAMSVCum3xDSSCcBtjVSAqDMMQHdauSDE5oYQiS74ZYqPgu",
  "key8": "yj4EB2jLBYsEZeyN5ZVjmrGiu9xcL2rY6xcuk6U3dXi22kUgKSaUCx3qekV9jY7cZtwBhRy7HePJG1qrU9P2JoK",
  "key9": "5hrHVYFZEjmoMzfKPTJKwhfxBCCN235YB5U2R4n2sqA3km9Mhacarpkt5zUbLmTrJdNAND4V6rGXUzQtmuP3sbKo",
  "key10": "21dWDhPA3hUYtuYwt3V9r5acKcTsj4By3MchffEDGA4VNSBmHjigCPBfpi2jZ2i72qZcAp7bEVJsLUBfUY2wrmfr",
  "key11": "2tQLMQZfKmiUhbGEvpGAd2MiCECoNtY5zJ8V9PqcBxBmC4v47tiyTGSVEwukwS3Pf9Ub4kY4qRsQTJr8PySVMdAT",
  "key12": "4AavavNALNgyJCzNi5RcMoEjvRsjTWdVTPk9jhNThQFCwt3Kq9NceqRf3YLnpz1VvN8DqbjEysWZMVFuaNd893VJ",
  "key13": "46CLpa7KLvGyT2KATjvFT3GWmMJarUXiyNwyzsa6FBJrN41JoKhAmLFzbj5yYvFCYWafrBLxMkpB4CimuPfBMffq",
  "key14": "9UiBE5UYqxR44Syyx5eRDhwfPLuh7Qh8uae8T2igjRYz6u7jJzBjznW7Doz7BJvDVK7VSQgfjJ96NYfQ8FeocmX",
  "key15": "52RkkBrStYgoRx96uax3KJciRRkrYCozGWgoSXzKXAHNrtwBXRS3zAduRosGL7RR8yeunHq1dZ9LyMgS4bZLSewA",
  "key16": "3kCfsmLEC884ABaCFyu4DmiMwEuD5utXmEhZNQL8YrucAXYhfrQtmhkuuQojmQVQKinHLdtHuKEggnu8udF7ua92",
  "key17": "TMScPBgdKPsiuqPwDZS4fwTbKD9JBG8k4jyN13DBMDDeKPxrMFiFaxVaUvNFQDEik3wvMQPHHX1vYAiC2SyWh6c",
  "key18": "qFuRifvrymuZZtnxgV36ub9mD9rtHJGTBeqgX7sgWsuFck7w16jCoWfHZrbCUzN1FffkSdY2vqWgsPKJx1W4Dj6",
  "key19": "4UtJeq3k5MVwTraZyxaAxAKAYngfVysvcn372Yw2y2B8giYMUooPUNzDny5e9xaVtSyLjzjRqwYrYCnwkXA7SM5S",
  "key20": "5d6fpPNSe5TuUthgM33Nx9cFGYy5y6V57s5wcQegQEbcpyVLz2d33Kpq31e3VTzQyYjmwjDN3iRZ7Lz737y8dM1H",
  "key21": "8SVxHhPync4cvf8y15qdEALVDmgLwrUTBjayfVTSJmMGsjjyhMWG6ByaTPtbxY3W4pNf14vhk7PKciBe8VuFDW9",
  "key22": "sYxFeS6ymu35atBNvBeBF9iKo5HRj3BMei5dywxtz3QfkcCnm7UrDBEuag2yW4Y95bbh6RFbdYsp3mffUbaP75j",
  "key23": "3E1mJcwJbFtWqjK7zVLr7doG8VvnLocigWtfZMuCFbLAct5iYDWXY1Y84ikykP9y3xZbMSZNvunq3tLLMJoGyDW5",
  "key24": "29CzNfQLHVYoRDFrzKSCXG5ZroAicUfYgd8m1MfF7HpD3svAArfnqvUC8zkTh5CdYtFBmKLzUafevgY7AqkjgUCQ",
  "key25": "66AFCYdzkaQRx3qyPaJaBWHUAGTyqnbW5SaQf8BgE5UwotakvpDsMhcsRcM6ZMevqkMGenoo95EUybLJaSBoWxqR",
  "key26": "4znKZWuAXGn4hAVLK71WGHmiHnoMjqzYtcTKoEDz5u3fEsBgxDpHntEkQ3riBMjNy2DjJCZJM8Nmr8VEtghEu35b",
  "key27": "3UtqKctHjBToP1AVSfczfsS5eHV6udSfYx4LecoEyru67fsmoAtmCDZ2rh5LfTGgRvtf7SNkv5f5vLfou9Pdr1TB"
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
