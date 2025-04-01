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
    "KrU4Zc9TrJQeBzLfMhABmERbrtd4nZGGDu27nN1qyVPaLG3vL16hh7xM1HA5HHVp1uLjLvxvt6EGcSGTbfCa5M2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pXWXZy1FRuzJNiYWfFu2GVTsiWqpWdg47j3yjQc4iQV3sDjC9gwPC4AMy6sGvscu7goqnmdsfFqab94gemtpZpb",
  "key1": "3zAZYHoPT5SDcXG5NzX1kdRZa8xm3ypfosS2Lq88wB53YK7Zzq5DDPQkHeW1kGSJYQW3rd7GoNdNjnQsS9T486Ge",
  "key2": "aqR1HPYE6reEmZ1UzFTU1tjh1L2gWJ7gTG1pwS1NjyyJknyB5bz2KvgGtpxSFw7NQLYfARVpTxMYvpWbaGPpc22",
  "key3": "i5q16MKuueZqVWKPRV8YGBjZQJ7uynpGYwKZ2FBojpsopyv4f9EZjbanJomh9qmEgqx8q43N8idDtKnKHo6zfwP",
  "key4": "rjtpEdAzPZw1398gCCbFwKzW4XXZZ4RQbemDy71n7YXFfyeNYt8Z8m2WJE4HsyZjDEbs2zuFVTEpjTDDPY25yni",
  "key5": "5GTx4osp8U6LMVY5kYFUZ9hrPp197xK6odEvWu8WdAeZ6HrApX62LrDo8AEnXrg6EsHs9dAoFt3ax3iZpKiHo8og",
  "key6": "2HoGZDas9Sru2gBoERd78ZhekQffYDF1Cf7b6nYFrfQtgTitwbbkaFpjLfo4oPcuQXV8Gt8eSZdMj84hWjnfbDGX",
  "key7": "3pjPfXN1kBcq8M3hHfK8ayPM3zBC32xtnMqSuFbbSip6prTPmMz5d9Ww9pc3BQ2jGiZ7s8ngR7CimEtjNNq4efYD",
  "key8": "3s8aMB44JDDv6YmRE38h2sqP7h6tgFhkmM5TQyrfZebhVaiJdzQ1hPXtNQu2RDH3fbcFKhocBX1wFoxWNjNuDDSt",
  "key9": "57tobpydaPPyX2BUaWoojqpxmQaZeRMrTMQDQgEQJDJkGFSaRB1RXvQVGoDMZtW2xdk1t2iAejJfyECjUGe8Ppja",
  "key10": "5E7pSkUYe5abx5Axf4HU9JaSFPNLhyF1ipX2NJTS6osLW9KhCT7tjGg25ibh1zAG4PQ66XSKV4Sx3yDfajaforGY",
  "key11": "3KGDXmMym75xqvVhJPYSLrz4wf7R5GLFxJ759rraGBNxHQSU52Wk1ZQyhcZAVqA1NpTdfSw4JWpwt8b9MHv6UZCP",
  "key12": "4Qcdz3udF9MAsZyQSxz9Pjr6WQhF1BRR78yEQcGYMH16PBSR5qHfiyhL8JVaQfZVC3VCMF2wMS9vLmkCk2JXT1kN",
  "key13": "61JHfCrGzXJ5WUMYansKNfxwThDToqYAVV8twBsY5PBVRF9SJTcDJgU8wd4nbdkPq14pDUTxgVGC57zDUa6jemK5",
  "key14": "5Zdyc8Nuf4VLqDQktvY5hbF19WeZyHf7dwaP8HwbKH89UcbMQTAHGGLrpfK5cfei765uQFg9e1tASgMpCYJ9gEZh",
  "key15": "36WkQVwJeR4PEwzjK78Rup5goYfgaDcBLhoEjEnEbD5Xi5NXcgGo6YfqGMnzBMZf8hp8q6h2nrYVmMMrsc7qoE1c",
  "key16": "2yCUvTV5EwZmPfRqTnmsejVNa3eUcMDKkN4VPJXmygBH3ArotNuM3utAeWcYM172avQchRFiUDdSuHmiVWbTVpDr",
  "key17": "qFPY438bh1YDTM8w6QmA3UF5XYHNM17w3HSGzECey2FDxGvnhhZAFK3Tix6KQgghEfvkXsqJwCrwSK98kCDuSzT",
  "key18": "49smH5khjkNxbWYbxe3XHZwmqNPUj8pNiEPepDXRjQDGTZQB3ZZa3grHZ8HdC4DX2binWY3df3z4sD9k9UfBh6wf",
  "key19": "5qcrQRmXpMohQWNUJFcAVxMcJattbG9kpKKNx8Do7pyzWeeFnHosBGRwdKZnt9pnC6Pw7rQZgviAsPxC4vwkkUfh",
  "key20": "65qJN3bPB3EQiYSkoiEVLZWbBAyze5whEQ66qGm5KPmnDMDVp3HF6w8EquaTfSa8p3CGQSjeTuiDMiKB9e2TEmKF",
  "key21": "5eh77CFAQstNxhG55CfToSPXSHQ9xD8NiqhqW5eXcVnEUnwXCSQdtxC4k4fa8UaVLtxuQiLKxUv6LUhJfSfE2hGy",
  "key22": "5spiqXd22DRuLPQxVXD3Pp7GHfNYcVFhEA4KJbfuzgehKThQwh7bKdLfDVg5S6YW9n7pdA2kceQy7dKFZtfFnZG1",
  "key23": "2BdPWh85TmMbd2HmGHY3Hxc6R5Yu7g6Ndn7mfbcQdEfYpGFyv2STEGGdCDa64kf5Q6bHaVxzkApztM9jGWde1mpo",
  "key24": "2erNfY6LVcXFWgZHyoVvCT22rVzpABUzqe82NKEsUTMLmrcoVAsQYJkpQam2KSYfbJZfX35LWjLw9C88NG8chVVc",
  "key25": "575YzH99AWdo2ZSAsDBFruL6YSiPieeic5bKiEStZtVJJaHiLiWAWByaFqZAV53hA76Z8hXJa788TD7HiioAxVcX",
  "key26": "5MZP29rHqMpJCxUTFAh3T7aJ28sLxUJUitbZnDrspUR6jMQb5vPFrMBU2aKWpUuydhimFopnRWcvKajBHfFJMK2Q"
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
