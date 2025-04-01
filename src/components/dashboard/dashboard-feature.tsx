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
    "35kccTFFvmPURrM7ZGLDZyzRM2vPJGfvLSTZuByBDCk5EMssYWd8w16tzEtS9LKfqfR9GJMFwRSpFASHFjT8J5MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YL52d2LRsVVGG4E44Bf54uuJAjoeYDqiiVMRcNs8Na3eTX6NuvSiGdxqXS22bMz3yQQoqNNXiC2cEU5nSSrDJaM",
  "key1": "34zrakagK8XuR8d1PsWQjVzMm15P3ukF5EhXGAHF3Bdy2D5MdbLdUbRfyMJuPRxWaR6BoEqedmybctmfgnYtSkqh",
  "key2": "5pyjdNBsofHFxqiEpMSR39ePfzSfuY67v1Ep736K58r6b6Mgak7LxKsoaLka8muV993cSnrgu8CjaGMha6JvrSxN",
  "key3": "TqRBkuDjjKTasADbJSi9Xf4jHCN1zXbrp32gYxTg82T8k9kYDj3wAXp4hJHh6YrTULHxvbejWZm7fJCnvxuHzZm",
  "key4": "3m2zHvP7qqFLSvcRHm7xezGhv2J2BpuavKRaDABHzj6PRkHRPvw3xoFYUzF3f6k7CKXgmHy12Tp994pHsHiBXoEB",
  "key5": "q6QrJMjAKUQjXcdYotnnHJwSCqdYdwrj53XGiRuVVHfxKm3v9ZQ5wfFNLpi5PwZqkSPiprSTPgZLshnvcohxvUt",
  "key6": "vFW3jZQwg2gTZcvgD1fSuDBxxYv4fJuLu5QpHoQBajSBe1PvG5Ffoz1driwZbyQTSkcKhHcSemgAYQNzEcNJK8L",
  "key7": "3Toe1TWRgomr3cpGQWsbJCdwi6yQsKNUsj5UXgL6f23E1yBFA5JPntcu3HYMTZrGZUSkMc2VXq5iUbNuLEgjZiZ4",
  "key8": "2uhQ9UJ8aHa5WG1NBaXscr3pvcL7koyUACE3PSRi2Nd3pXWcuW8hGV55cYVA8vQEXbT24kFLo6nunNx113HzLcWz",
  "key9": "2XS4PhCtNvJJ8DSysgFHfFA9XPtSXixFE8Ny6gYRSMsnBM22QzLbyqRbpjZaJ9iWBFfJxYCDk32uvSHUYB2V7DnE",
  "key10": "57o8qr2DVqzZhzYVUxvH9GxA4vnduQ51uU9BhdkEbH1UMzHWA8ijig6EtDj5jk94VsYupE1giCKMg5icZSiaP2a7",
  "key11": "39ZEHzRXzCxXQ6Hw5p9AL8EwGfgms2TyPuUXjXAmeQmXHrGKGaYuG3opmr6Dg8xkV7ykZycYbrA5K6dNwX9TEGMR",
  "key12": "4HM5vdnS49kmxXrHy3H1XbhEkeRkPwY4EwiXABcD74crZhbeP2YEiYJLbHHMXf1JUYW4xLVjvDpXCCtVyAxehK6m",
  "key13": "aytVcaUoBmkMsvZt7DXdakjdszywbAn4bAJ4E5zFtxXTsB7w37amfkuYURiSEAyHD2ruVSQA4jUbrYJcemWb3W4",
  "key14": "48QLy3jJQcrpEx2E8u6VXTgN4NrHyEJgEg11m1mKkUjL16GktrAA1pQNCVsa8HJkNZEEmZKTqLU2rmXwmvhDfWCE",
  "key15": "BV1qSSunCJGxqGBWj9CD9ryr8xy9EjqQdmCJPvgfuy7KiZVB7uA6NrPqcfBXLN9CfsXEGVWU6RRJ7oeWuqQxQTh",
  "key16": "idF4KFiVojQdSZ2Co7ftZdCPEWS82PTMceQTp1xpJR8CuzEVyywX5hHhqzWzMTS2RhMkd3StnVuwUa6P7MtYUWV",
  "key17": "TVhA6YVKPMSAUAaxNN6HeM2NyJXF8MQfJseanbX3JJSdYHuAHJ9iGd3iNZhtwahMfsXFqawtQifzyFXziYCy4Lx",
  "key18": "2Z29DusK6Ms5rZV8Te7mTv2mB5X1J9MckArpXpFKEK73nGL9PugTug8D4V6muAWCj2AQcfrUg7pg77VNzf9DPv8R",
  "key19": "2uHaLL5fAXTffqDbbogZW7gZJ31WMJFqXYTEyBRTbL1twLgvZpMmir67FBzHJ6tbQyeGZGaPCpeV79CUrMs61Cty",
  "key20": "4txigfYyBTTVxfVbdivAQnNo5c1XUrdK5KMbDAk5pnf6ePQacgsaBky8JkidSqwgtF5KuocGsHSTmDwnxWkAJfga",
  "key21": "4EmFkL7ENNT1bb6pFtLWSBqkuTY6x2wqPZGhiijUgsHoxgRMm1ez8mCQCbjWAZvLDsoMLfaLzkGSiNo1rjubyj4D",
  "key22": "2pZ2uNLUTtt8yRzeZSLrjnFxEHdxKbiQx5bomFTbGKGB9L7fsuBErejeWRYrq1RoS2p8n29x4rrttHujoHsEJ3Ko",
  "key23": "EBzf3aRgz2xx7LQPLLvsSNqQF1FXGdBcVQgCzLc4qo32FmNApvvZT2LeUpiBUSX9uZXEHbB7bU5kxgwUCk6CZgr",
  "key24": "4HNagNsAwRtzg9wEVv1qgqpNCN84yzNjKozrePvUvoTpxYMKpPmXv759hUFpgdpHttJ9YkMKKfinbjMWTRwY21iA",
  "key25": "piEN6ikhNRR4Zrp5x5FicADvXwpdKEFFpdpDnkL8ESwNuaALSChy65h5YBZMGETo2ucCg6wzvE2yG5yeQh7FkBD",
  "key26": "T3NPPsJ4jQ1Vk9CfUm52A6j24G3sTriRfyv4YdT8uoQdyeYpHfNf9MnF4sfch7WbdNqHzmEVd8D6mNLaPdj5mNy"
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
