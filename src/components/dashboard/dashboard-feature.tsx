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
    "38DJ6mhLQ38dEecJU3fgF4FsLuUicGHRJus6oMdJtNDWBE3BxHcUs8ugJ63XqHqdMsX3U5CfsuDyhpuzXYwhZdoW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4idbK5WBHkMPw5Yo2CnepVcD6WiqRUuHYak5xTyc9CPm1T3eJYWhsMEw9FcPe27vBJ1B2KFNVdK12VMPd9uWecKD",
  "key1": "8EQXHh3r7SPhkJ7zrp2GtTdNPjkKggfRbGdimG9FUL2RsNEPzfDCyhK5ZdtRUGGdFb5QBEwSdZ47CtFcqhhKZAK",
  "key2": "F7ZSS6tkwhqHm9wHpnmXnECEnbwqUEPjH1JLpZBBauBQBgd6LnmRy7t9bX7bawXKb27Exs1uF1TJgW9EWh3JCov",
  "key3": "2wLbhF5KStN49DgrBC5rBdbm75JSC5fjCWSfBJ8qAq4u4sYErd913q3CZJgKH1Nw9HD8D3zHabvv4m1Esq2Ycqb7",
  "key4": "2z4Mxb4qvgXfkxFAg1PEnr5JTMRmjjxD2ARKp8KdX2BogrVdwzv4dNCafQLMSXyq5cb4MDnGSKoUpCDNbLEq2UNF",
  "key5": "5xTryrpe2EYYZ4b2N8Q6dzLrkQmYeiX45TmPDse1xMCifPjXzxE8ptRjCE1ZYmDKMs82v6r7meUdxRkxFntBHnDn",
  "key6": "2AyPVfYmGh1PL2MLogD5AgRrDMnBNvbfvff2QimhUVDeUY93sRGeYtdTKjpn6ZfdT8F6j4cheDbapDGFiMruLMs6",
  "key7": "5L8LgziruRxacYN3gucBfkVFnngxAXGx25YXLV8CUnFo2njoB3RxMRiQgZX3Ye43hTgWNU1eggodEDXGoZkrJ5NP",
  "key8": "4PRQTC1F6LtuswD1ie4YPJVpng6XBAnQzGiCMEk16NpUNVn9ftmPSa3vHQ9jwxbAvgYFdxWoWKx3hLBrkqLF1ofz",
  "key9": "3AuYGczmR3nvqTN58xLR9ECwfrPBqvQ2tEsNKM94iaSbnjdydhu9Ss119b3BxPCgPyimDkAhK1ZAMRVEWdYtduc6",
  "key10": "yfviykWWc7DnfzaixN5LSPJ9qayycyzsf67cydkU8zVkNG3Kvm4uXNmxW2NSuSmafn5ezaK7ykErBKoq7dLLHwx",
  "key11": "3Ng9AWLYY3EXrfPtKT46DBdhAyd5twneC5E9YXa1dBhhKAchD4z1JUpToaNwn8wuK4u3Yo8qMNXuHEatUAx2LYCh",
  "key12": "2uahZ9V5SXaxwdsZTuBrkja4xKCr5eRXRfQSdGEBGvvxt86uGs49jhwBiDyYjWLYs7W9bNg6xp2wrKvx3zz7YPyX",
  "key13": "4MfyMms61sUfK6Wn9fem1WMvDHXD2iBRTJfzxFgVoyd2e3tiMK2sNvSQjhHJ4rhvnCeoDh5jNeKumWV1x3nbLUyR",
  "key14": "5SnNvU4bCWUVsYZidWtisk3jnNn1Tmp3d31EdfeCq27q9L2fWNVQSuYveoz8jWhpoJzmBzXfTcyhPyCFuvrsZ4hq",
  "key15": "5sk8Qr3vjdfpM6DZ3SfirfAu5PgLRUBro2NysMgESsxYaumW5dV8WPJx8pPFJzWkXVdg2jodKyYPbEwbR6dgPRwm",
  "key16": "3DWMytbwbgkk3sU7yPoBMQCd2cfvzw12Vq12JCkzJvEzDdmmQ75WBH3XShvwGSMgmynBKow8ba5gLjEVPJdQDygg",
  "key17": "54XKwCkUfzVUV1R8qLeykp7TM9Yb9bWAJRgPg12vJrzeiovbmPv727U7fk2zNBPBinDVDR3EYPNJtQzEAysiGj9L",
  "key18": "3F2mvZjfD8fnTisLXE5wLLzwNmMUAEViobPUh3uTeTaq7jxVmY8HMmSGdozcTC9AbP5c4wJrkDzobB3mh5Hegk8n",
  "key19": "2hL8ufqYuWpNkCRgRcY1wfJ1noQARiYjxYAya4WcwkfiF7jHEb5WDimeJj4zJMqj7ZobSeaesEDEYN9qBxfU9Kkh",
  "key20": "3mZVNaNEngb636VM5eFfqSuzVX6hyhW7rV1Mhi7kW3547XERm5RpJi15VMQ55u7ZQPwzQ9DtRqkbe7nbXb9STrMx",
  "key21": "4hYciaipj87yDGo13sxpD3ekJphXi9e7nCTArJnjRneGAWi5P12p3bYweTrrTBJAfn58MM3YHoPQF1vUBAHjXu6u",
  "key22": "32n5difvpD5xey8TE2wm4sufnDf6BK1e8kbZPF5MEfV8JyH5EpCr82swBirJun9ToedhectjnMiURkmvhqHYbkoS",
  "key23": "5xDL3iYvnUChU2LzUWdrGVR61JyZY64CKjX8zeLwJYPeAGjyRzE9LZB7K92eeTDzorEqtaZmMNiTPxKaC91F8t6M",
  "key24": "2mMcvo5RXzibbopEmQuXehhpSm5iXbgmMfeF5JCnofmZwKMJWSCjcZNWuEHg3kzaDdKxaj8jQ6ksUUePcnooDy9D",
  "key25": "2R6wQsjf28nCct5FhzheE6p5zEWNxsVPY5YJZ13jZSz63jmbq77Nbag9JmSN6UwUjocStmTCHB6JyUSy2EnHm6us",
  "key26": "4sFTPM5er4LgZDnNt1gYvhRrW5h4BL7dUnXJr5SE8fsrw2bYoUYXzwr79aFCajX2wPrCuxCmvbZxZYMCorSUwHP6",
  "key27": "3fgoWodAxsWZrHSi5cNhoxrg6B4HfS8NdrawDMDggKRt29Q76wJL5qdW2aucyrqBk447xgMNLmxbgcNRPBzxgNZ2",
  "key28": "4gfhsvrABJWv56DHhCBnLhrdXTdngVAx1m6ms1NxTzVpBL4XFw2GM9YccbisFvLfju4vUuNiXUZ4CMP55cmwYMVR",
  "key29": "4Ey55W5xbWP5Jd5447H7Wmgz8MTsSsZYHNakhwNk2Ee2NDSKrq6fhH7NmFQnRTy12kFs7TEpdvmCGeqjx2JdZ7pY",
  "key30": "3wLND3ZY4ZeoZkUKAaqTA1qRY3wL6HT7phZWrSLLoZKSFpMAwJZDHeM8Jht3dcc29d9dPNxguYBDKVqrW6Sqz9kA",
  "key31": "4uP4Y4C2AkEAQYnqVw9rSDsQ7WP78GpH3hv6DXfLkCfRhiApBhmWium3BpCNN2akxjws4cLJcrb3AzWDBRQbUQj9"
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
