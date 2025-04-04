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
    "7QRSCNfErNxsThvyMdQgRuej5BMVTgJ28qZLDWG4RbFp9J2pYrbjs9PMjncHkjUpgEbA2W8s6XGXviDML1PGPth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RG3rGtX97bD3yr4td1C4ys1iWqXKmeex57mvoWKNXWBgH1onH3JM6Pv2TQBJST8MLBozZ4szfCQSgwbG8U1uw5V",
  "key1": "goS5HyXeNrDTacsnqnmVURHsQJqDZStgbASejjHuhqWaKjwL3SQuBbnuDeCtqcB8pwyE8Lx1DDWbHNuDnaKvMNM",
  "key2": "25xju8J8BZNAHnYULGyoH3EMgKpuPuVntHWPjxyu2FhzgupZgLLJHRaWE6c8frEvb4Nmo4L6e4sF3rZigwY4Rnd4",
  "key3": "2wpvwC6uJ9UizAtuWiTon4sy3j5ip4DStRjTH12e41SYPzanAY1dy2kbaP87FJjNuP2zkHyUzyxne4VRSggQfDjs",
  "key4": "5L67cSe5znSygPwVgtKpYtRjarAHGKGntReU7JNjc4gexd4Tdfb9cGg63iCP6Zr8ZYgCZh6snc4bM15VLPKZ6mYT",
  "key5": "4xPZ9AYcnN5MKM1uGtxNon3JRh2hLyNTKSymQA1p9bFUmU5qMkzKReEr2qYtrWWWtDHXA8PTYYCYhZKJ5NSrN7zZ",
  "key6": "4mvqWZzzf2C5UZawr74C2srDQJRmvUmNFyHVYDRgK5YBznYQC1vYqCnEeAQ9YPDwkYKrX1CF1DF4FtK9KYHc36FG",
  "key7": "4NCsj313xAE5qnBVX5tPMN4xMQxpbktMoXVFBKGWMMjxBZem3oVT84NuQ2LCbdXohEDuL391fyeyc5L3RTgiq342",
  "key8": "5gF8ApgSDwXS8eey66PQifk3H5FYipQeNRmd1pSboVxdmRdVCsZS6M72TK7j1nHdm5NSRoCp7AoEMzc4tWA1qCaS",
  "key9": "3pnVvX1DAZEybyogGAFkxcncZq4CgqXVJxA2kuRqPW6Xt2j6UyhY2rLgMk13HR9DLLPSjV52soFuijmF774HN3kS",
  "key10": "4snGUqDrUM9vywoiLgpYuj519X32h64jhTujtx2YdRMkbytmxjQukgQYQj2JS45mnSuQi3rNhhEdfk7XFRcE2jg3",
  "key11": "4b7dNM5F7onccfbfvhcpwZp6g4LrXfqBfJBqsGzLkYZZViv7E2ezT1ZLDkVTNJ1VctLNKVBmsjTBnVX2tgS4bTTW",
  "key12": "2KGprhiAsFojfadtduYUFkWF2xo2Wiw8RLoyRS6JcifmAV896cKn1G3d4SUURHrxiZfoEJVFipd54G7ymnZ2aaNF",
  "key13": "zedDVavXRVb2s9QBgrxB4LpDdwyZhrY8bM7Qp6LPUtnogmTG2dybd8Yg58nqxm2SdTvdax7eeGj8NXxpzqhSNrP",
  "key14": "2T5H6AjvZa8qS8mXACEmzVdoGKo3JuXBn7rMXysN9WaokjDMy6Dr1iTdGUwwRBTiuxp8tmQAKnVrnsyFXdoDCju8",
  "key15": "3to2n29QKQqyNYQTjDRLzwXvxaS4hf1DtVzvZBJLLh1KFrc4AWvYjoDfScJqAyUALsiAQC2S1cJPTDjC3syN438m",
  "key16": "jiKwfB4gzfs18ThJ8uigiVexU3YycNGXTaK16ADqu29DRYfGyjtCPAQ3NY4XEePJokTopxKY3QWsW9sqN33f9s6",
  "key17": "5TPet7Pa7bP12LvbCAvUupLiNauUdrSAAgDZ41bx7Zwt7qQpTmovQCsFG8msUNJzXhJzpdnKRi4zuWoztyAvBZ82",
  "key18": "593tBBvg32HM6cYSvJPMw1cJ63hLWZYLEfnXrKh3QnTaA6hM64i5NzLw837thio6ty4Fdctxeds8dseiLpxqKSNU",
  "key19": "45VVCmRaJ1SdxkqipktpDWitZsZcRLzNHEY4urtmwDJWf4j2b7uZhvz3MqJauyrSAENiDuvt5Ko1tkBXPd9efdpC",
  "key20": "ejnrfrQF2AmDuhdYT6rw6soYMNL6iM39rDEZ3uAX2bk1C8rUpMLRqSJiJg13vZXrjkYLxntWw7j7utevSn3AmjW",
  "key21": "4SShXeYzRpSTwRicttFykK3u4UaaNXVGRJ7TnJSLTB1EdB8YYfaAaUwUHw9xUckizonVNUt9J9mQCYu1vfiFewpD",
  "key22": "4i1Ry24fjZYn2rnd7Daxoy2vdoesgyy5cipc9Fxxj6sm17SzwWht5NJgxpnrybpGkARh2YEMsYwtNmNb4atXenVe",
  "key23": "5KEDhPAm94SiEP2KE2Dv7KRzXAfAeYxjwsYDpN8S7KVGD3rAGBYGBCMZVt2ar1D7vxLbJEtLNLXk63rp51KaQWGu",
  "key24": "3TEgxtHoxkEA174gccP7Sp8PSMMLKmbvTWZHkwT5uJFf5BsDHTNmiBc6DjDaooNzqTfagYF1Uzc53YkmQ3nyntbD"
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
