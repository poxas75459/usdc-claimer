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
    "wfVQpBv55AH7rDkeov3XfZpLLd8EoCR33THMCo5f2CzF9VugK8gSfaWdH4VZMcdv4hnVFrR6d7fWigCbxiaZrX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fBiGSDawUfawm9daA1RYMZuo43z87GdyeqZHhJof9XhpgpSbdfWSXK6Mh2mmHA2kmCxQ8xP17WR4fo7vwPBQaeW",
  "key1": "5QxvYfF9vmYrZkiLSgVz5nXEgJanpzHRU3CUpYqaQHSYvVetymRTzdAix9NgnLMB9rPXmXW5XryZABvno6sWmBsY",
  "key2": "4mitBdbowq7SjEeNaRMV3iyY8GSScLJf25LaT3h6WDofPrTkZLYZnrMK8uyQbwpvsbT1KPoeaqG1eMSBNqSKB8Nc",
  "key3": "4yTpG77x6atKwqGFRb4WhqwjqLMwijknmBmpP28VqXNqrAAivDQsjyFmyVr4xLkZsfrtsaqbXoJYBwxGw7rvZKsZ",
  "key4": "4XKMeCM92CCn87oHyGZnN3sEfBcHiw9HuWFdmtJTWUMsipw5ZeeauuBSNxJEWLqfLXUCdMrA8sENscYbooGSGfrc",
  "key5": "4rWmWau4MWLPtDBxndmuP6C3Rzq7L2brUwXiGytdzEvo9GfRB1cKzjbyxodq5Qi65kAJ3T1QBv7dr5iQ8mMfC8Y",
  "key6": "61hJMjJoNHbT8qCenDhmghRHwnoGzAvf2wBvpTfUjuc9aK3tHAqR1dwRsPRtQZnHkfBqVf1BeXoRikLd4WPYhHZY",
  "key7": "5So3cnGxQTG3nd262bHpZZmCgJRmY91cm7LQVdsto9rCseSXSqVyamaUL46A3J6WeYYiWu4Ei7hrvUiMKUiH3L1",
  "key8": "79kU3fs2eSeLYeGaN1ayK1ZBf9QuocuNKDyArZVpt1zq6E8dxUHXXx1ntAsLPAofrzwyA7qPPAsFe8iAq64K9HL",
  "key9": "5b6uRj8iLTESZ4CVhmu1P7dfLo1QmCGVbmwP5ec8uqiZ582Rype2nwB5MUKvw6Gn5Co9ic79GbdMsurRHTq2RqDQ",
  "key10": "4LpBmkZJ1ycX8eHrP2GBMRoQTdsXjtFem9QtnHHzMeSjigWoMi8fzvhf6FMbws7nBSbddpRu5kuCUMxqvrPYT4KL",
  "key11": "mUvnN28DoFzh1n5cLHDSVCW4rHBwZZ7eJkTwe9GdB2Q6Qm3NVtreaaQwtuwJUBaytKyKSjr3q1Hhw2iSqFNufAM",
  "key12": "4USmBW2YFTjmP6GjYdrDemD1VFy4wiCZ2gakykGAVALiCAqGe3F2RQi9GMpUBVvVUjRkUJ26Tib9HZvahLmKGrKm",
  "key13": "3BPjnkMWVofssJkEpf3UNGM26ZcjmDuqBRx6yqeD4EpzAUfKVGrUHeChGWxBedjTt897P5dHCwPdDQrYvkGfWVzb",
  "key14": "3RP4pmYGpujtfcBRBJxnArKTZ1pdxp5QSAqb6JP1FCnK3mrbu8ZjyrRxZWsdB1EGWjiYyPm6bdYh3AvrLeMsD6Cc",
  "key15": "2omidzoQVWuGjLrBmm9ZkjPsE27LYp38XQ8WhjgLYnRFzqP89PWskGu3q3HVGmcQMDE533txMJ97TpuSqFvuwReP",
  "key16": "2qot6MUKQnDvZFy4uhrqzoVZnBay3tysYeHhKbzVcoQDkjzxTn9e1jHELpicMf4wPTUwpe2w54XwUizHMcByvu59",
  "key17": "xMegnB2JiHV7h2iFYoQFNCPuPwX77yc4sp6xmv4kuH1VjbZznzy8QxtL2Jz7GqVrkUwh9dsRxCkBMRnFBH7fL6c",
  "key18": "5tiNsXiiVmoKWEpHHG3oXWduWauUHa42vW9LTyY4NF479TXogXgSExLYVLzvnuNR7jtUoQY4EFA1Q29PuvQdhJkn",
  "key19": "3RC6r8o313LZaFuBpSQ1LqSWgmveCgd1NPGkw8PLQCHcL6kQWZDwz5hpM1yuPZCmmSDqDvVBnauX9dLKPtiyHyUr",
  "key20": "VAqpj41DBUzvK3G79t82Cfjtr4HEmNLtoTtvucHnNstNzNiC7Z2r27CjpdAhzHjDwHpWA9AYMhjDkGRPcsJZXwK",
  "key21": "3MBmfZ4oYNHwmAFyygy9BBKWeoaL8NnNsEv96tj2DCpjfG4m3vbGTnNgynZxRMZZsaB9FvDZbr8DWUGjka8i1Sxi",
  "key22": "4ubCsA7xafUMhkJa78U98R7RWtdFYVq8WnYsGtdW4b3NXz53mJDDAiY4nEt4SL9287EXhtkkyGdtHTv6oovNWdzM",
  "key23": "51pCJs5QsUosiHxH7Y4b6kgafTyu8RrBzRFN8PHNJG9oQUcgEuetGCiUxGDHoyuQv3NqqUUMoHM2dfEXFXYC2uuS",
  "key24": "51DmdFWdmiHnhKwnUoqZ9bvAmG8MCRPs2JbvXWGDijgdWTbjHsf6JCSCj4CqroiK2LDBNBkGeaW5XGDtuXZFteY1",
  "key25": "35RXSkiwGcUm82t22DHjch1wCjsFH9ZsQ88Ee3dRQZXhWvACEa7agpKRoszrbuSdV6PSoPbaJNqkMPG3yE4F4zK3",
  "key26": "CPcc4TKy6rZugivuEMHDYaFUA231nr3Qmomc8MezpkQBJ9QpTvobitiy7785zwXgEcRbakHKaYNmVpjjPApWWpV",
  "key27": "5pjVNwDnvk3cVg8cL3WKNAqayYEEfmG9t2qLiqh66G2yhjct768a4Yc4PnvAdFhryNo7vGekq8vfcx1PxscqqV6o",
  "key28": "47Lj7FJGU9vYPsEyK6creg7PMmNibf9ZnBo7EitLAEbXJGxfF8xrcr3JasG2f2eRfd95BfQfQZSfobuR65d6Qn9h",
  "key29": "4WpW11spfR5LFL5WrUPjMnMk8fB5m5FH8pqZo3RHGyBGK8ww2ZTuaarghLWEfLLLvCJnw8bvPbR8wr5y1FKkUjdS",
  "key30": "5hWdwjvq2ZBswBvQoJuyhE7LSpQh2e56ezdAB68rPWKfSHFasX8nnMxofjDsxXmH57dzUHecMwX5SnNkU5UXBM2L"
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
