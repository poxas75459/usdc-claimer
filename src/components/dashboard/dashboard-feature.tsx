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
    "2SjwT7skov8xi9US9AqftfQLknegpd4AEyxPPjAeLmqJjjpayfrFPtVpLbB7b1gHWvtaVKmzW3u9VymWBeCestF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcZJ6omGrxRiBJoct3Y4mknV6UmGaMFyytgSYDEBBmwz5JmuNYfHW23DX5dMaLJLqrSJNfa2nLL75EEpqELjP4C",
  "key1": "2PKtMoHjkAz56q5FLafLZ6Zs2NgK3MVSjCEdDoC79Ky1yKgTipxM6fWStSeDpUGaRTLXgsp6geiEJzuzg9ufYrxX",
  "key2": "5fEQc6dv85a2Tzz8aGLaHqBSw2hU9rGJeFmNFiMoZuYYVMciF7ksUPzJmsJAemzY6i6HvbyJifDF2N7MijYMayJg",
  "key3": "2edsD2GxF99Sjzrn3Bz2BytsyoXNjzcYw6Qe7Q44q3F5RwwoxDhYiHiENA1FHCBe6umFgmP9PMPHVVhfn2RtvHp3",
  "key4": "5BWah9wqED6t3V2C3UszNMR8QTd2do2XaXrvdmx3J3mFSZKcZSamHPGFtTuEwp6qaK7ZQYV22hP2BKSEowxneaQN",
  "key5": "eWvF8zxJ4RMu2UPVg6Qv7oTzt7AvAGvmYvMfJqf8rVzA69MhKCw64fw98TM1u2VQ6uPaoAG6SjVhZUS5AiLFto2",
  "key6": "5CwjbPrqLuX8F5qcEartjnDNsJxbWaXBTki9PutNhGQBzn7QG3JGD5GYWUqWzjSBjMBc5k5HFcKqSYd4n8CmvAoV",
  "key7": "5siA3eYfvTo2dvLzKr7sVHzFk9wc9s7jzQCqRtaPww9digDDVNQ55WZXVt8coyDKVPDz2JXgHpYK2GbCJFahtgEG",
  "key8": "1P1XVTeU5BzLdFvpn9dJfuTYCDdiXmqBNDh4qhxsmYo6eYmu9mJe49rBudZ83VtiygJPGNFqDs9QQutFsAiP4X6",
  "key9": "JzDy38ECsYUdMJshRXbSF7A2Fe6kZxumsazo2U6xs6gYdJnNA3TnSxUVkHiCVozLA1wG443h4nN4Rf8vLZtzDNx",
  "key10": "528ThQxHzktQKUoe1bQ6uyC1LkynPugadiJTJTdjR29CzPsKpgCjDijurqUkwuPH7AggACVn1ECj17Y3bH1xaMhX",
  "key11": "mB5v2FjEsmL6yZ6VBYDb8vkVDcQEfFfswxFssgXHrANuXUa9uu5vVdKCQ2oE6iaMGqFd8vnHNfHJYzfTsXDbAEy",
  "key12": "1wnHuMpC7M6axrhfCNQYUEzeLTjLn8zu6264ZXCAouXuDiBDCY4zKQ46AXYCWeJDM7QScvNaT1UfLWD8i8t2s5X",
  "key13": "67prrEpF98HmRw4SEgtWhMKJ3xTixh3doVXqGj5MZ5C7F9jkRZB9dz5qvUZY8fJCoT3v64xeMHMQyyJS6rdvGGk8",
  "key14": "3CZaSuYeWMsj9n48g2YgVs2GT3UVAMg7ApiGgKy6i2GoQVSDYb4c7C1b6VetQ5M7Gdkkh3ket6WCZVHEsZxZWVX9",
  "key15": "4NXSSBi12vU84BEBL86NaGEhSpUsvkig5MCDdZ3KQ3KF2Z7rwAvn9iPMm3qugaSMcQpL5K7mdQswaqERtsqKKigU",
  "key16": "4eXMBy6PEdEC5qgH1s5JQGbyfLGCLBGBimKsKiii5FprGVM1m8RkV7Vj9T9LEkANhujReWt9zv74W9ZyiMFxoiHJ",
  "key17": "3s1hW23owZJSxRHLXTYdmJ4QuU7tFsAJA2y843eH4CaqinJizvcSVLvZeuQoymdVhUSPtsKDbNjneaVuktX4Z8VR",
  "key18": "2DqWFF8zjtpSppjo8D61QDJ6QXV1RciP7QPtcSU5TYLHGqVa9mr4uMfaw6JtYTLGMae7QVh1iXpvkDdva879bLU8",
  "key19": "4hwednsiDqVHr6Q1ucCUaTdpDnTPtRZSXZqmbaWMXMur5R3e2FJxdcQA2tbx1mjjkHm3ThA7JVunFGqkNN1i1TsP",
  "key20": "2scDRjbmemGNNq15ACetVUfhx88K6aDdHnezzctFbMD6tr6S8z8D196owy348efhC1aASwXQEFReKaawVhLc8B8E",
  "key21": "5B3so7wWxv7WDE8fvMrQAWapCNwsFQH8eu6HLPvoQVJZuzLaVJcTSCZ1Qpzew56sFe7uNhB219qQ6BUQb7JN4e6J",
  "key22": "5kqgLX4neDBXyJ7ykXZhxu754z915EfyFtZ2sJu7XGNdGmg87kYpLXMrbdsv5dEAAaYRSxZUWRa7Ph1Kf3MGraVN",
  "key23": "5YBkTPwcQrL6L9Pxvp8LhW33vgbyvyzbiEHnNGFcafkbkxK5pSRxxyvJTi2YAokND2YjhFzXNjEzPmCEtgVUWGaz",
  "key24": "5Z8P32qGuUERUYgsVBSwNMNCCiUeNiKjc7kCnC5mUBBcfDvitccjPqN2orojcfqwDhpcMM8ryaZZJ1J2jzymn4M5",
  "key25": "35jnjrxfJjqGe95e1AXat5RKWTHCRwiifhy7UgxnRczkkNUZ2ztV78rbStBajiGm8MvyrgpKBCRLcLhVv7EKa2XE",
  "key26": "5doPPjhbtiEDLvqjfG7AN4jrDhTAgXa7R4fG1tk7jPuVR1KRbJ6Rkqq3Q3AifyEtf71FEjozZHzCTgoLYP7ZYZjm"
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
