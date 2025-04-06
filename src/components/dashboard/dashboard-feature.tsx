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
    "21XuPaGPnLJxJYvMdQkzjctwkL9QdiAxtv37meqx9hmxdRbsdaCqa8zBq2GwD42NfAgX2d6vAeJC8vKHeQvneC5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HH8BAfJmS5Kyh6jTRVTripWK3zDAfyTX3xcJPQZV3kD22hbLc4M2rZQJ2LimPW8CsdmRk4iSe79BqPwuLBBCEc3",
  "key1": "3k6THqhWBg2EhbmuSFho49U6o9nhknUbhfiPe5hmW3gvNFSdpN1Y1EworbxBodeZqGXzoJnULaS2f2goFMziuwGe",
  "key2": "4o2x2MZYdmzcCWkbfLrBLG93ZEcpyKeQme3HhAnT7WJor3PkvS8YmFcU7HejfrYVaVfeHTEf9pRFCArusf94LHdv",
  "key3": "tGW59kmaH2ULjskBAyAdy4XRq92xdWTc2dbfucKe2doehcqvRJT69ojTJdyEzjKP777wse58nBr2qBVABY1ezXm",
  "key4": "5azf2DoX4sZbXqpSzwLwfTsSZzygoTHbWiyNPoz8HksJMo2gBMT142Zwc8HjTg86mSvJ7zExqPoBfdUmEJMAHRiy",
  "key5": "3TNdDbK6nuyaMuSEDuBUywAXtGSA2BAg4nHntEDu9sviEmLcNeK6mc9rdkAL51TkxkGCcsXnze1tVmXZucGMi4ST",
  "key6": "2JyGaF5ADsAN39wV4XVytPWZBiZnJNwHjmMt5PDKQAi34TA6wJTvqE71Lx1KJ42icomtnqi8k7WtFwLxPGEqAyGa",
  "key7": "2zopMwHEAeYJskLX4gnuwxS1vYRDUV7JL1bWRn9oReTipQGKvWRbmPvvuXq3y3vAnxTsRnvifcUXPVMYUqsVQDJz",
  "key8": "2z6PGn8x6aAV3YCeYwwqCorZJXmPZXbnqvfx2GbGkxo5qRd4HLuqZTi2W4Bz5VuSL559ruZzgENXgYrVGp5j1z8w",
  "key9": "4e8EXPbsGfJ1WfiuLQVYYHH1D1avjAGsLWrXWtysHBoAFUx2CA8W2goNKkU1gBtYbzx6dj559SgFMjJLbpG8wbcN",
  "key10": "2Q75ZaZAeSbYY6RQq5qfgvX2WTNmfjyjthNwERXTWx34JUVyKZmD4H6zy79cJX4X8Mfp6RTz68MaZVsgemzCGMkr",
  "key11": "54SFszMyWmkL8QDrtsEf9KBAbPvtNWKyTi92W6QQraw612dBfEv8SWJdrNFJSAj5Jzx1MC716wKVzE3Qrr5i4vJm",
  "key12": "5sebc6uY8zNi74J7q9QAYMYdEgSE61spGdwXDAFA3zRBW275EbCoh3fkQx9KvLasMFQv5Ck8nh3kgf2WVCFMJXQE",
  "key13": "R77TnGVdbmjN9mhWJzCrZbqZZJbnm3HdMAgzVWfU8y2kRZh3qLAwuPZg1aFXAoKAwKkDnTvMZShgh1qMyqgZ5W6",
  "key14": "2a3QdasFPznM75SQ2VyP8mzmiFef4cxK2xzoKFmvr5xT72WoG5YMa13maNc6Q453KY9wcvxad9RsD77GmgsWBW53",
  "key15": "vXTURPH6PSebpPBMb9WBkGqkKPKmJoRyXse8FQkRFQUF7YRb6Mr3h4mnuveoj32gtxCKTAuRDjfKe9uf96sXmza",
  "key16": "DpBbLfvs51cmZZueUeAFqjjs7caAHznXgukZztZduM9dBcVgPquQSHULyRSq2nE4M6y6LTCpPdCaW7bNmmbj1Y9",
  "key17": "E7yd2mndMYBF6yA18kejWQkcu4qQAHTinEnD18kfgnszSviKqtS4nx5Qhp7W4cK1N4HAPDzihSmmRMNKkvoRfk1",
  "key18": "badBd8QxFJcqTiAAgjQbWirzTn4KmTC6rzQYSanmqvd1FT3i5CyWSkc2othhDEFv1emdJ6rFD4po3K83hBDrUEf",
  "key19": "66uQokaKMrc7saEy4rDpg7qujn8VwShztK3XB2VAkMfEJDfqbqAJfYdqUFXKpuJbS3BwFtN9JDFmnDBH76Pa8uWb",
  "key20": "4y2Au8Gaqzn9iKh18uSAvBLR4tEzgjZLqAenfcr4XEzcyQuzEY2bNH4D3hwE5ZELdWZgKCYNMjzF9V6quyUwYYz4",
  "key21": "Ka7VTPqgXRntCMDy26XxTxGoPMA34dDCkQrCuKKmQj9qErKmCNFadww6rgWXSpMcES9kdfyYFe2A4Q1ceAXEBrT",
  "key22": "41RHyrGmXNPhfGWcjxaXon228mPuvP3cpc3wpDgcrsHXZqLMtw95zVaZ82XpvQHGxDJptDjaLEwbdYH9H9LR8L2q",
  "key23": "4kLyFD4DtNoEJxce3c82JaNotrcF5aPVymDMD3vieT6vWt7i7eoWmbsF4S8UVq9D7LNBoZrLCftLDjjLRzDE3TZw",
  "key24": "2PiMi2KknYvakjiBNGnwpZbdtghuCVbS8ZghK1TfetqRvrqWrd9gujS7rBYozvodRKQ9kk6Zn7X9TwmyGMbFrSC9"
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
