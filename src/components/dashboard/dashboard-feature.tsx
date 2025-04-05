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
    "272BGikyxtX3qbL3oVCKk4oETPJJntEJiotKsxYhoBViD1HFNibCUkre86u1pNZZedu9xgUQrSnQhQAEr4WCEsCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XkuVX5DnCURC7dvAqs3femsZYj8kRGzkMgC7XEiiWSP9svdWK5bdFNqurDzrYpsJeWsEbJPK8MZGaJrMsCNLEEn",
  "key1": "fQawCb6UVWySj5A6MA1zNRQeZWkNhNkpyL8eSjwXzJSebchiRqmxzGpsgo6KQkSGjJpCADg55VezHwnoheingQa",
  "key2": "VcsBHYSZz2g1ihXHeNgDVwm3eSUQNrjsSE4THkyyTSb7TehxEzhA4aLH7vmDgdQCnQugu3UCYqnMbaU9bmW7CHr",
  "key3": "48ygkFMJfv6uqFtaqnYCGKct6YNQRqFwN1gobLnQSRb9zwxz8wSgAjNhDPRwa4VXnG8y8B3DjkAoW6u7NNyvScgU",
  "key4": "21F2zzhBb3gpaHMYqpun4a3LfG9SVwcREJwvvTMzaQyoJvqbAzM1LZeXy5M6PizETdkLcQMXW81rBKSLas3aAw7z",
  "key5": "hybk53RLPy1NsGKjTVd3kk3wSnDvusjzWomjdD8xUnYGGiuCfynJjxkKqHNR9bQkLCUtbrtNmPNVYbiheG7YFcd",
  "key6": "2yZ7cRsHXjg6um4b611q2dXvycjNTXDT6cPHA9UtdZgWEwnXQSbLinBaNAcJCe21aybxmFARpWJjgFkL2EomjVCc",
  "key7": "4fPFKGu26nH7svUDBcZgmsu7pJgJM3933Sv6ptuF5mCuBFgmfD5paEYhpnZojiRoix3AKguz2oHxhXJM7UhSRkEa",
  "key8": "8smtXwtdKH2eSZ6hVxnMgrDiTAxP2XYmtiiiubn4hGym11rToZVJN1Vm5QY5YnWA8P1Lm2aqbzPBEXXjwEJAPCw",
  "key9": "4a4oGXWB24nhVS5ptCCmajffPAQ9TisTCyPgFYSJ2nTFcgFmmc2bFu7yXRnb5kJbU2K1jyKMNcTqGzry4hSVeWfs",
  "key10": "5qVoJgDh7hpWePPmgBDMxEHN2A5b6AFKmRxf56iEnEZh4FuShLViZE3LH22BcGFvyEb8WABRMTPboXkLuoWQ5z6k",
  "key11": "2HTnHYLeyPWutMMGV15GAaRwZbfwfmfUyiwyJ6GfduKbCjDwYayeFEGbMYeuRWDZ3hjCdVgw9uDQvPM4xyZJXLD3",
  "key12": "38XitsGyBCKKQJhAVv9pJaHwdDBLDABK8TcQCMA9fAXaPTJYjDbYUc4wMkaW9NNPpBLcwCASJJMHYDqD58aVzCVo",
  "key13": "2pBS2AUPquomP6jWGW9v1pWZUnhkkxtpvzKvgw8MgPBbJoEi1pSEyQX35bR16rvBsbN214g4ntpPppE8ZsdsHqmt",
  "key14": "4MYRpB3oZ3yrhrwEuXFHV1bjdncfb1MUC4JCo588P2pu1MSPjqbFTBvdrYNkw3RKoGbxQdyxg55o2NkvEm2hdpbe",
  "key15": "2uQVyK5hmhHhj6uB19zFaamGq1FvUpjX6NZsUagwg6oQQw5pza7cab9pfgyRUnifvfh9yfhmVQ6YYwsu8ix5XGLz",
  "key16": "4Z6jUM8HUbh7jxWdVYv8KWu1Qwioct83n7zsryY1pMMdMHBjWyPb29S97iq82nCXjKCi6jm4TLTYqpbd1eAryfr5",
  "key17": "648VTQw8iYnvdQ7kDzbNsAS23qqEe9252hSqu5hgUWUc7xLDHGQtoeXr9QJFPef1Sw6MgerPkSNSxnWJ1m2jirDW",
  "key18": "c7c6LW5qwu6isybCGcu4pWapHDefmCkunM2wvsY28bnJbaPrjNE4X3XDFgAaiTQHjTWnxGTuDjDFasdTM1iiLi3",
  "key19": "33NSJKMC6kgZNcz5mF3SyLd14AEbenph9SX2TKzXojtmV3eXDwEiH1gJMamELdgkvjpJHLiNv7n6zYcEAoaDjwJF",
  "key20": "3rUPDYm9LAG91s31Hd1hCqcZrxcysoi9Wo5DuKsUNytNfJWHzx8xZBpC56SXJFpQr8AfnP133QeJ3iZ64JuopB8n",
  "key21": "2pjsbjujBecNQR4djcehX5KPBUZTvuKBCHnpxRU3RWvU7koPqSC4N4J2aT9Up5Yq6YXj2JXW9vH1uKf4kwhgLBt2",
  "key22": "5uxcKburudbr1EjKQiAKQ9kYR9zKvDYaHu1sFHGU5JdFBitaCP4J47mrvoMdJcvLaMHMksGBkGDfkyt9qcw3K9bS",
  "key23": "4VT5mvAHVsNP3xjzBbuWyWBqwphXxtY4EvMRigD6QoQEcazynqCCVdLQSDhDMhKqF5N6coFhWfMpuVGeJTc15UGJ",
  "key24": "5hdREnL4jNJT1Sbayi28YPGQp7oN78TTfw8NXz8NtYFfzCz8pCEGuRvmxSuNAjSq773jNZ2qtMQQZnxz4QZQadQ4",
  "key25": "5gJCae5fGd3vR23mDoTwU7X9tsHBbaAJ7AWsAYwwL85tcWXsen3yMpz9KC7jo9DceUuLSwPD3Z7EgR7HugfmcBf5"
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
