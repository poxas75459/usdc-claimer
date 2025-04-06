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
    "2iNzrFZcJKZFKRR74NkVMZdmUn9pSKiMWgXwcBz9N5K18Zh8Gxcz6ZmuE23evaamU8RuQNaeKfXj91pB332UbGnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4crRNBk96un8uSoXq4k2bQH9U7qhn9xg68MCLwFfRzE4Zrorg6zS9TphZLEwb7ibttrKYvoTSiNGx7nr6brA2DjV",
  "key1": "aNfvppcLgfJdAHZZA3UJQqcfaVPZeU9w5iv55NcnH3Yqa1XU8pdVbkn1kS2wvxMsEbS64vucucRckxocioasLJD",
  "key2": "Q7XHMVzJTuB9hS7bbKaVkxchC1oQwkcCFyx9jnpG1sd84R4wpBu3qXF4YEufECMFBUwZTBYBc1UuAKbcbcX4TcC",
  "key3": "34RkaWb6YeroB59QiQUFs1T9EWLRmEDe9icYCSU1SGnYELuwS2ZNCXwJj8Adivjo2PSN5xtpGoR8meuq2HyxALkj",
  "key4": "2QfSwkkivw8tC8HnTjv1SM9jhcbyosLVq6ASshkrvrCsVHT73dKfMyBo8Xpvh9XVXydpj7Y51maoSLCgdtN3wkjg",
  "key5": "57LhAPXc4uwfGyUqXRKkYCQMaq72p4xmbu5ei5X77eYPBoGZBnK8hvKpmbh6b7G9i1M8YcfLBZL1gKPbBMHomF4V",
  "key6": "4fDdfgbjZc61kV5nAUYLUayTeevgnxEqqyqdMYeoSLsM1C1CUeANXGEP4dKprgTHGTNUfpSHDPuGjs1vd7xDgb4k",
  "key7": "318TS2dyce4jcnKHxXhXmjkXpYy7Yez9MWzJRkb96fGm1xC82pBvpdejFvMywnxjMMY9GqFcPwAHosDCr8bf9pqF",
  "key8": "qDhSFv84X7Yqn9R1zoi281gXTPcbQGv518jRwRugor6CyUxYYBL6uPRaEMK3uXBuDNXHauDW58pogGL24PVXqLE",
  "key9": "3ovRmMVDUcKpVRvyueBwFdey8MwbNsrsm3bYAYctr7oFqLtKnqzcpLYo34D3GXycE9YngahL2AttEftAbQRzLBG8",
  "key10": "dSY6GYDdma6BfJpezb1JvQi4CR8KTKcwExirjdxD66Svd1rXQKk5Nq76iCLsXat655we2g98rDQPTFCLvf5LKWU",
  "key11": "5jh8nVF4VFVZzkVnB5JH6bUpyUyD15eN2C3yH4zzZjJkXyhGvobLQJkpKUGuJDT4HfnxyfAZTCD19u4nfhTX1UAh",
  "key12": "2G8qHQTLv9h6WMunM5eZPKHUvrLjanycVdEf7vBYmvVHPcokE2hPFcTU8WqstDvNMfFFFxFWCZrEPWbBMoBbeQh1",
  "key13": "5mZnJe2FgqVtTaBVFcFF8THCRAfpwnJF3W58TT886XBqBoUzpk5HaLsJdAN64x2gUH43Ut71ApK5NFCydhTpwufi",
  "key14": "61aQcQztwXddv3PpkkCZFWuyGY6524Z6cgYJCR3hzGpm5Q3ZYUPm8Mj3nHcamHZ9osUL2osYMhNdUvNgC1f5TuGy",
  "key15": "4UytB4d5G5Kv4SgfCzpztH3BQpS6A7qxFYYcLGQxQMSiqeSnDpCNVSaRDzYrfPmkXiW9mwUDPMrTv7EHdupsiWNB",
  "key16": "5dpFDvsEUXLdiXL1BkRJ8z19t6h2kTkB1cB1Xg4JkhAdxYGsmdWEmXAVdKBJarBP3Zrhj7sai6cjx4uVLNHwiQuF",
  "key17": "2zETS34NTjEvMwQ2BpVoKgphHzCTicrkDv3fuw8BaSURv4MLyz5jcY56Rd4S5hxjRgSQVXtvzqewndxstKJH5uzk",
  "key18": "F4nP4nEp1giA5fTdKLKr2pd8u6udRmpPQy8TEixzuojfzb2Mvr9KHwnQ75KPe64oFsBWdaa59QyP2jSgDNp7PBK",
  "key19": "5UYJ6VcgmDLMgsi2S3GyC2hRM9PkMrAmoYFBXA4GmzpZHLW83K9bPRqXbHp4YpJzNeWDu93bh8Ugrfv59QCW7KvM",
  "key20": "3yXWAWmxWtyCGoQEU8zCgACjRereqfQqUYUqLwrhZgzvkewEuCszhqGpBKm5FPFZZpzHnQiG79MniZveXEwTnkc2",
  "key21": "3gPXo4dLVtnRkPeo8xwib4U6qjomZFcKeGa7tyB46pTkehvD3hRy616T1fcarbEwfVH1f1icDvcHGu5wYLzAh9Gj",
  "key22": "7F6GeVBPyT25SieAwaJkhTyQuqY2MjJAeGYqvUhkCNrz1YXMkiqKFS6tuDAjEEBGsc7ykzCqqAkmSBrYFi3XQN5",
  "key23": "5yaD7q6fjuwY5aNYCaugMbtLMMpqTikoXJmy9Yuc4jTEQuq3sb68ya84dHGhSipMt8R1wyzCgu1Y2GSU9F1jEQmn",
  "key24": "Sd8E5p8BS21JPFKpJvNUZGeYWrvLjCNRmZRUskMM48fnoczCJeBKcHuK4hYxwREvzNFkPeG6s89w97HzWgVZRS9"
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
