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
    "2Tr85cXxYcEtGs44qfZK5bg85EnxFdw9pXEkAFyFkjXWth7HCPr2bvyDGauAgbRCDQG98bAGeWMVeHd9XoRJgTva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBUyTGaaUa4kAxUCc9pSXT1AkFHdCJEYbfW9ZqRFotnZeZdRPiyzVTznUASwNVYfoj3Kpa216cXjxYKg4aNbamP",
  "key1": "2tF6PDB8oAvxF7zerXUFss7nujnNSUJwCbzKXpKFVmn1MB3iX5dLhV7yiYWcEEZpvhLqZ7VZnpXf4gFYAZE52PVo",
  "key2": "5jcHxmPFkWQNXR75FDYWodNsJ5YAypXABScwVYpYAqhBK3ooUEczqvyTt9qWXnY9GVSdgktDNeR3QaDSTD27knoj",
  "key3": "4kChWWDo9SpfUMscLNVJn1Qnm6ndguFBZnPY69XuNmc1MeB7TEf2JHKV96gK37ShevHzvBSR4QbQcDrKN1quDU6A",
  "key4": "4iE4cZHHXRtVvb9sTkAwT24bYzBdTjQuDbqXtqZcBafu5femoeC8qqmCR5dnXW8UveMYb8D7qXZtqEJmRP7Zr377",
  "key5": "3KBbLCVcFHQSKxoMDsZdnqEZ8Zz36FD72HpiuKUt2exD1sfwbTBakFpXUXwFVtRoccKqNgytZJm1wKXbt6fQYoaL",
  "key6": "2sL6DNzcHpbF8V2aWkPqu4un9RvTj9ZkLfbGmEEDUzngwCSuhApsCyjhK2GByABqhs83RhvmE119hePWwaMMjHhd",
  "key7": "rB29P6EziSnwPm5x7fUuYHF7123VDEBgS14tKYD9zTLaJMR3raGAb7QP7r27g9Dsy6VY9YzzFvtuie73CrXYbk2",
  "key8": "5BSfCUup74nyYPTQixW6jsCaWhUiHD6nSVHANLRTwVuPL23pVTrhRTwXBcWnmHgQ6xTNPit2Bf1gLgvYTS8AuPZ1",
  "key9": "Fna7oNsP47qRmaSkgxmuPCYbmHUrFqyA6XhtREMwoic5NXojK4ELMj5kpQSc8mdArJVE2WFKFH3yN7dvsMJBKjE",
  "key10": "3ez5eVWuMS5nAcoH9praRrD3cr1SKw2xYZQ3WDARUDhbDNS9bcb4shMy6zf3qjhJ9S5J2Mjuj7zc3ptPtETdg5g4",
  "key11": "4hyV66uxpU1ZCnRLrZdLmBpbCHr6YVVqX2ujUFD6WH3poPYRvudd9DUZ23KiWEr9ukd6fsYDQFYpTJhVTfqSoc4C",
  "key12": "5Kgn8Xx3LTjoDgK5KKQnrHhExMXRXf9WVbNmD1fZpikn4PgCKay2QmD9Qosr7SJ4b1XseVk5ktAvkndrAiLPvU94",
  "key13": "3ESqyFr22oqTSPUW7r8DECoev1Lc2BLzBpY4pfaYCV7TaCrfkxsWXa2Uqs49GvzodGiuKSb98nRs29GNcBAYRF9v",
  "key14": "2KBJoLmQZpmnQUTQG7Xv5gXx5Q1NU77zazo17SJeP7BjRNYoQtDB8Pe9m8JsAuBmRC8mFHYQ8jGZHqwhdsraEEKa",
  "key15": "25j2ELgxSawVszadeEZNvARVNSFozJraZQpmN3kc4useVLsJTx13P822cL87DGAGHY6tEMsLGkPa9Cu3fxS9gJ78",
  "key16": "2SBSUMXeREJwsQrJD6DRqUCnXFtrCMgBjthMomTRgmtDKvFJqQDKjoRRk3YospX8rkxYgvrdDaCAaBZD9XiNcCTa",
  "key17": "2iTiYYEF7ARfHsFkL5PJbAHYwYm7kcGVQnp5USoEoPiMZ8GU2oRfWgJ8ikWYHfCmigXZiLQhWTnQLnoSNMHunAtJ",
  "key18": "253ZtQiDn4nbPPdxaGdy6g4T2FxeuBQM9pMdHVqGDiknVxnjeCFzGmYVPUt2WkMezDLNWK653rAMquLdE2WZLE5F",
  "key19": "55UEqrMzg6h79p4iA6k6r46nYobed6QXQ59bkqMWgPPAz8Ubq15aynxRxSVQysXbhFC5HmCZXPLBDu7KMHRtnh8y",
  "key20": "3XmW17wE9t7Jryeaca1sMuq2QxW6wWYsT9PrnZyToN1AtyqsxpsHJhUqE2RmxReVdqrAxB2xxYo9pVLbs49gTKyB",
  "key21": "4mTPLq4yjnrYDSeVyKsV73MkRriiR2oXqvXWan27LruC2m9wGMKqS4EJks8V6WjRqkeCqcR99anmZ1o5CSWhe8gS",
  "key22": "4CB5MMjdXt4WkMG47qD3qun5zg46EjhA2tvSRq5J7q8uavKuraxehurQ1eupUE9Rzeqtr2Q6k8euBXPmbUAgDEo4",
  "key23": "2f5q2UFoa8AzvQ9r6ePu3PfUKR3sjQDtBKQDVj9mip4DxBK6NEsNUz4v64AgjWJdEdLeZAKjo931NoJgfhDxUhbz",
  "key24": "3jcX5iJL4wbdp1A1mhnNu3JbxnBKyie1u5Dz4gphcncpDgFaxaqAUR46wBQ87tRUjG4bDiBTMQhDwYy4R24KqcBv",
  "key25": "6zC4BMtRAn2BHxkpSAuyfQt4DDYJ9nNmJrZwKcw3b2WJA4Smz2pexdGUEhLmtjvyZSTsYPrSS1o4rDZx5YhPuix",
  "key26": "23BQVDBJeSGV1MXrUKfswhSLXcrzDHg8W3Hwiyhiy7v5QKG5oV2CNMK9rnG7Lv49Piq6A1FsERnkbEzev6ditF2Y",
  "key27": "mSwLbidHaS2b5kqUqgc9QRZ25s1Pw82kVppHWBVEwekMxuoNQEw7DyYVd1UmrorANanVAqwRDRjGSriZ34Rk976"
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
