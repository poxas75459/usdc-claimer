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
    "3DsH27zXXyS6RCdrGieczjxrBtNDcGKarPaz4SuKFUySMVYNf2KL9BPuNL9wrAKuTRzbuzGbuM4vuHHucPNyvcrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UAMXFQPr8zgnx9RwqR7NUake28NnJj467duXVZBoWch3Ps25BbqB3LVhuqft9JFnYti2EsdSH8dQDvveDvNmWYh",
  "key1": "14i8YF7ADg16Bhk3b2qfXUV8nPsuBo4SRoHY32s9711JKzgHPebA3yckvKP7xPbKDWZfXb2fAW1jBwyRTzc417n",
  "key2": "5aSRLN9emKB9tt8AHBpqWeyv8g1BBNAs8iVdHjn3PhdGq4Bz63Tzxj4cDyd67XoDZGgHvWWsjw5S1Xvr3X7G8wcN",
  "key3": "5rAPKshrcNh7YevcSEq1afmgZhHYTfjzgeQx69DSnQpqNgSiYJ9Up7wdyZtXyWr9aPs7kgxU7cQQuNtXB3uHvGEf",
  "key4": "KKx4UzXVDAKeRnBzYjxT5m7ZjpM5g5eaP9et3T8AvextHW8CJTgAf6VCMN92R7v6g3iB8tr3i2Mf6YyjQ9zctUt",
  "key5": "4g49G9Mn8wZy4HVieR5Aaz9i16xo1oBNP2ca5ECGZpJX8AWtSAM6fxBFrSBf1TmQMnimmosfHpmrD21E5DZuutAv",
  "key6": "2M9E7Fu1WSsKv4fhc2iK8F4VCLqaYidCmGM2Z4FVzu2nnueLhoFFog8VQvrgLayfSwv39teaRyeyR9biCDeSq2aM",
  "key7": "3tnHshmJ3CpSKVKnLhMWJxctqHUagMQDsZVt7kbFgP1jxRkd4qrFoQe2RYMAz2vUfczTjGCS6KR617jcrRX4tDKq",
  "key8": "3nxNWk6ufaQC9KrzrqeXUnRRM9BBotXs6azo32S1VcVgukRLYR1Nqs6D5gcyoviSM1A9BV5wcuqFrKqKzxZYT1SB",
  "key9": "5AScDWkH3sbhQBzNf7tPXQYMX7rQvsqdCBua94HGjyGARAb8NPvWwMvkBZgvD3pRYhehQPiKCwpUvrkj9WGrKdZp",
  "key10": "24Di6x6fZHSKbCmxoNfFx867jyd9VABSV6fsSS1otqWwitLEG2882RtpWsEMFVm6UWnADsZqjMAYxBq2y4vew3Ne",
  "key11": "5Bbx8hdG2bXpuQnMBJS5PphWUL2gPWcu3p1Hho685EtKXjLm5wKkMpTfq1KHhpFwD4Vev3CPGW1RBuGby6CdhL4Y",
  "key12": "2VWrqNHhJ9FvNKqRRvgqaAzxuibif6oDgo9nJnj4qiejWsQQYBGg92SrFuk32fknD8RLtXiyMUYB97532AtfLVqo",
  "key13": "4wYa71u36DGSiRPTn7ieCgKNEdeHcSUwz8wSjHLEJUonDyVNMUvBCo1pVjM3AQw9rmnFPmu8qJ7ubVT2yAAR2DG8",
  "key14": "2gvTNp3HfzaXs9xVgF3aKz3P1VRZ4oKwUSiSVBzTGezPyvsMWTACFZrszcbt2cwy7eQR5fnkZuCcQLTMi3BFhPPf",
  "key15": "3Fvz5nSoNg7HhkCXZqdUqV99MaXcEzN9NnfDuKmRyiJKzdXvJE2cv7qjV7nB8WA8M1Dt4WqeGRgLzBpHAwPYiAK7",
  "key16": "4LoGgB2oVatAMKQmm3oatN8os2cL77CyTnfo33kgGomM9RtaAwFpQn4c6aHHexvaejc6xNaJVmQfdtox6vEs48hG",
  "key17": "4uamQUQNbkK36nYBrGxkJ9FxKsNaGmxi8DEWaQET8oUgzf26WwFcJWasqwjA33H4Lc1ksRm9v8PeHy8jeQqaW9v1",
  "key18": "37XkZX8YqvR58Wt4fiUS3LuPpHSqAZFhESqzDm9PksSJPbtqhFgf7DctgbGJ4nPXxjcB8hK2tPWUNBQRqMHJtfCq",
  "key19": "5sbkAk7zzWRwdHbZAQanfTSfx52oSqNTv7Qd4yRovi4mTBRcfH8HrK1Up7qKHy37s8rEg8kJpE5wNEjK4QDwfVBG",
  "key20": "4cSkZ7qzVsFQq3AxPtbgdnNupnbNJogR8JEa53fkxzjRiz1VnxBdDXn6KMWu3wHADAMXNT741Qb8ZmrFrhYyniy3",
  "key21": "29tLdkJ7eeMarqC1bJRcChogLyiiJpPVaaGUim3ctkuhL4KwDSeETfUcTYtvqbt21g7GxdpGqQhky9DEJcxE69bp",
  "key22": "3BAKibmNfwEW1ry7WfK4PNhYwSzEDiRm4wQHc9KVrdwTgLu74mR3zDpeRvXSvFgUE8F51TSjwx5tBkUf1gRbhDRC",
  "key23": "4zDPzra7w7eABqp8ctzQ9GxktVe3LjnwcxxELfd4MGJUb1M5KZFTTRNdVcwJZL669NayfNVP67RoyAaZdWH4Vh7Q",
  "key24": "brcQHK1TtjRkwDuvJFLAdUGJwazaTmr2EnTiJf1CBLiCyhb3gduSkiLdz1EfnSmBHmxFjAYDxBpZFj41YCuJ4T9",
  "key25": "2xevj4AEbvAqBMrwMimsMVG3MkJWpXi5nAW8WMte7PPBncSqiKShvCn1PbuXMi3ZoceTu14jREtQ4yaGDWvrayfn",
  "key26": "5nsn7EWYexsmg48ptcopTaXSKRzsqTKHzwNB1NjDSKXnosvoHNnF1dWVr3CWhFb2B4MGg3iNxAHu6GHMBsCj63PC"
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
