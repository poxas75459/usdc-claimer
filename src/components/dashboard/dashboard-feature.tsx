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
    "3jutcWiVNAoEU6ULm58UsmVWUcbEBLQcwcpcy9GiPuuaGLbg9zoEDQwt5CpuUd6i2HapyoZZtrgjgUu6H8T7r12L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qTw3q2i2yYbCip6ZkYauYG7ac288DKjvhbb65HiaQJk5nAhY25PY3WDMutX1kxhG368CBN3McVN6fj8w7HUTtCs",
  "key1": "5S7Jz2tYqwpdjHmrXWAVAWkpqDc581yFQzxgEtMTF3W9fT4y1Xe2uVuRC6ZQx6mcbiX8fq6cD4Nv31jqjC4hudM8",
  "key2": "3LoRwsm8amnc6sQ2wP1XNoxTYUkVHzTtU91eaXQqtUJgNMau2iVdEKRZysbnzQJ6GPJWpPexJXSk4uKMdNX5Sm4r",
  "key3": "5o9q1SYxRPfyGzZ56YrZMh5ypLwyaAA646sMgDcVk8wgfPfcjxkSEJbhcM3xaef2FB5AejyeC9bDRuDqHtMWUsWR",
  "key4": "QpT4ow9i5h6t8m1Xy6MMgqYBSrCLVLmQTE1otoWFxYBL68nn3W1zLfP4eqaZFnwM2UHR9Vxtqny1bZSEhhqnGdA",
  "key5": "5CKpbmQ2Yd4vPhM4oFFvJnsiSfbrpwd1iAE82ocDkPHb6LVrAgcHU59VXDCg3um91sLTwSwVWeLcmLodrZnUenPM",
  "key6": "5JssfS91J8fk9uFkbNp4jUj2AEY47rUnhYHSxJXQ9UNdZJmS1A8qsRvXCRDfGxfM7vt3XMMNSEWoH1cJaG4PEJRc",
  "key7": "4ak6CLVcEmM2LxwcojEb6UK3vBjBAG6kwHp7vCi89fpKYLLq4AkAwgNy2QEikxFY4EC7DQXfmn5rgJ7WdRykpL9V",
  "key8": "4R3N6oATLB17nLayf8Y9H33DiEZyrs41jxikAjfmauNbpRrBXyZ7TBBmpnuHTJpUuYxuvR78a8tDjMQumDXnp9An",
  "key9": "o13bwTzq6Awr7QtiXAyNCipSmqCKftmULXiTBf2MDsFFvtzN9UzeyX17DkDdHromYyAaFTa6jWqHbkbvFmiyMKT",
  "key10": "5Ktb5EYivekQyyLBcCdfyPZfA1uZmpoMCgb3y1Soexe1ozRrAb41gLJRvKDhdphcMYQprM8uqj6Wzo4W8PNUyAHE",
  "key11": "2KEURLqrK3cuerCSVn7dzN9dXEYwWXp8HWEhJXa4PqyfBBM5rogvehX449FHDBie1u7cNgYtviWxLTMeWF4qmbP",
  "key12": "5FiTHJPKPJqvkg5xKMF7vn5qEpVkfUgaeGvtY8HRvsRiTXxBMp7hmQ2mH3FwgSFsLXV3e2nCxErXN5ygyCtEVCTh",
  "key13": "2cqoVKVa4zHBaLQ9Wbhi39PgvyPRwS96cVYANap1iaYCvfEpQTNwrLp2xFwt2gwEr52L7YqkeLmLK5eR4rHwc7UH",
  "key14": "4cbxrq1NB8DakTdNLssipsgzff6JzpUP25SuWMTyHr5qbBCtmb7CL64QNxyh1YDQfoKRPhGu5bVFCVBFxe8WK4p2",
  "key15": "2TsDZSPg4v8e8h4ZN8PuobS961WiATArRp4PpDjWRB4yMu1jrJ4RydLxid9yEVzGjU6CjvQNHZJV7HpLcEuJDAcu",
  "key16": "4oBmATzGQsy6gGYWSBkz9CfnYZ4JsytL9quPQ3nBtd5Jxg9hHfSeP4iUtM1C9dXQXdeTD7cr5KektJVXrdWsAt4z",
  "key17": "A3w3q1GWvYk7jxTvVn8osYzHUcdD76Unfv4Uguf37siNHVf1ZkCEZmFGz3xtVHahifV4e8dfe36NMik2NC255XS",
  "key18": "3eBmYKAGBwN3Pnk8dLEEFdVn2d5TPfeaYEyxWmJj6vQNUbEiqEyKwbV3MUDUXJoLfChJE5K3LBQT9WeB3pNWFpuC",
  "key19": "2HPwe9cNVF8n4gKR1nVyV1hxomDSLJaY8MviKbftJ7raN9HPevpjT3EP8xZ8bwzXBw6b8ofHd9R2mqx2bxYy312b",
  "key20": "5Pigp9ncSrb3vZZHpBS6dWuCVfgXFnfivAFFg16iKaEien7AoPgb6zLmBJhCCngKGdr5gu57btQTVqnpR94z2NC",
  "key21": "3cUvDztUQdMQNsao3yb5gtweMPgQ7ECScZtokqjmC1H1dubcu3bNLzRaTd5WRrDUKyKwUDarwQVEERYg3t8M23Ef",
  "key22": "3ebd1QpT7AzxZNAQXNthD5iosUjDMRdZL6ZGiMxkdA69FNqrCetyeJ3eKAJzhgmwNG2HJiWrhDxU1EE5zzC1PP5T",
  "key23": "3Ed7R3aTLGQua3hngjc2vfQgnz8zPutN6a3KBDULEJZPUFhhCaxAgFY8UzVGiQZJriiRExZK4bEra2SUV1y5XcHp",
  "key24": "3kKq1AKwJXoSDzCXLCgCQFAVD2r8vs8FTeyFJBy1Wp3KPQixnoiRxEzXBkYcS337TMgN4pXwCjpeei4NPUj1RmkF",
  "key25": "2hbNXmGVZpcWPJarW9g8eEEHYxgffd2iyMhcC67zRfjUruyendehqsin7Fjb2hskHsnSTyRtcNfCt94gjEdSA1p9",
  "key26": "EEkwUUzM75Fnch1NMXVeqGL6hSo4CzgGRmM6mMFcfi7fpNiCtm52MDJKNdXicKHnmUNt1kjtK2zs2GQWoEZCwTc"
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
