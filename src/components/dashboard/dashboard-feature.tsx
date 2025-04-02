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
    "4sXqrrCyf9wLMiydsYikWpcB8eaBAApjwxCv9E7EVDpx3foLS7pTdRxJnA3vb49DKEHPLvKCsRtu6boYgkds9MRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVTGLQtZJMJEWGcMahFKsknusec1ji1ct2nfjww2Qf5tCyrf2Mk55Mnc2mFTDqzcciaYhqXiSQQtSHXCDeZRUt8",
  "key1": "67egz5GceBvzKce9W33kv69vcUYxNMmHqBKP312FVvg9Hr8sfVWz84Y9ohaQwjZmL3tQYWoiUCLZGPCGHG52uEQJ",
  "key2": "4Ks94u5K64CRcXBkuTL6geG7Bg9yuy2mQfrVcwz5miaikHH35U1yHqgYYJfXTPKZuxj8oP4Ub1iqTfmgKrWuwHy6",
  "key3": "3UaHufBiJ9H7B6L8epYpDhNzxFpvwwJapt6WLQG8jSgiTFDrfJHhrtpVZyyzQNAytC1mJeUTH2k1ELvqDWGd5jVQ",
  "key4": "63wCUzzVQ73ysMnZ1ULnCKj6zi7byHfTcbyHXbqUS3fcGD5McUbd8fma2v8zCrrUPT2KksTWAsg3RGDU8DioA9kn",
  "key5": "58o2MLkNA8DUGnbSrPErQuJT9wtmckTu3xH5ai5pum2wcGM3Q8xRcpCc5r1tqj2fj84x97VzkHRm63YqqBZFKseT",
  "key6": "3KyfUJuEzr2aWey82rzgyRah4qmZau6SQUUrirhF7hmyyGCsNfBXkxKmkJViWMzD2wG9YfNXWwFWqbuJaSczbFQx",
  "key7": "4R7Dq3Sc9ogs4FrQbsBRkZieSENP71xuEgUSy3RbjfE1KHt599rJ2XeojPqV3rZJDW3Fp5XSe3G5AusVRceE82f3",
  "key8": "2BSo7MXCJjxd5vNpZLPeagSVGb24eCZEgAPpLxSbT2QeXKZhP6xNonJavfL2bG5h6y4GQrkFw9NFJ2N6LBwKoq5p",
  "key9": "gaR9quhxmBsVuRZgbNH4QoFp7tyVGN252Z7Bjm5LegL15VWjwQyXEVX7eU5iufiYuX9JCaQJiPKKgFz179ATEmx",
  "key10": "2XmKW5dECiHyN9qVcPa1xzkKoqPeWSjmLj7bhf9h6QMoS7DfbZgAiADR7UTEvHewAv5xWAs5RaPS5UyMUfUHB6MB",
  "key11": "4YaJ7HhsLEDhoZ8vVxMUMN9dJQgB6iJXMeFaWKJ4U5J7PxSC5XnCwCrNEEPj1sozkXYAaK2EKodBxfmxER7pD6rU",
  "key12": "2m3W3tRgnY7wpJMYwgvM86uzJNBppcjkB8v4FtUE1SAABjNGNDvzcqYS2XNLTdKVmLy3mw8UdP7uWtQMDjmW9Fst",
  "key13": "44oGVp2bEJn3o7WBKW34KCMqro76CX1Brj2iVcv2qQzLtwnhN5Xx7sToYtL9e6kWd3vePovSPcczR8dac4Zwxw6C",
  "key14": "5KrVn4AUAmM3Yw9B1WvAubg1LKM9o8sapVvim3Y13fXxYTAyTJEnZSeJorGZTJ5rFzKZkwP4HtBJnzrQEtC7YT3s",
  "key15": "3Y1QXK4QDdbLgWWrunjMDKvbkx5u1wjJi88J21msvvaDdAMSjUq5dWt8AL442pVdo9QQaHXX8p3gLTRfonDvzmx9",
  "key16": "2kpDnLHdukUev2qfFu61SBK6XHafMdhWaWb5vM9MpiofHkYngBKNUjMjTSECNtJH1a7tbzQaT8iVnk7XGfWV9rCU",
  "key17": "587A24hya9uKiYkibD5MPK6bQPTFwXs4b35sVjoMKme1mNM6cuXbjdrovcYx8L275sGzhgprzEoW7dDueJZhUMyM",
  "key18": "3dbHM6PtcZsRqnCyX4RwkFQbFErusepwunhL6uwnoDckDPpMPKVPD4biJA8WDhGDKz8bzSkrKQpSNCDqh9upY8wa",
  "key19": "5rVRVPnV1Ntx6KJhBEB6dm5bbQbwVgm5ncZeSXMVmMtV2xWLxVUu9dWeCWcsizF91pRQi1qp3aWpQj41Qn9vkJzd",
  "key20": "5k49cSn6r2UHNWbLAsWRGMLvJEVYvAmqJ5q4yPRV6tjwLWroNvYRiBqmM6uXpC2wBPGjG5MPNjBNiDu3T3pNYAyU",
  "key21": "5dZon7QSj68ita6i4Cgze8cG1PpiethtrdpTKHbKvpZPu2yTmnzfVMtiu8Sk7BJcBEfFju8CpwoX93rpZ95kdoPT",
  "key22": "4o6nt6DUAp4JrofSRzZSApvS6BEEQVBsMr9MVxQmBbpv9Svf6454Q9uowhU8mVChM9bchPw86UKUPRAwErkwseJw",
  "key23": "5bmQHhPgAdrHVVsJNCFWLsq6evQpaR4mu3C7h52ydKL5X63eyHvCyLdWgeqqRGNZCa1Y87Y5LepyLQiZ8eA6ZqZ6",
  "key24": "434UH4apq19b2exA8GCUD9DY8Tbnikp3xMxua5A9QC3ryzVW7vAo8yGB4Hs2Z9zUq2Q9jbaUr41ZJYQc42kwSBBC",
  "key25": "P9wDgsV9yQbE6zJYFwaqoXmtwoT3W951jHU3o9bgbvtLTb7Q56pKZ3g3BRc4ox6bYa8A2bjBympLUALpzXLQM2q",
  "key26": "5WgthnFthm8NK6dsuyRQdmYzzESBJ3tHuBd8DUqxqD12UoLSqEV1y8KGveC9haFjade4f2Go2bGRV2tjYVwRmqUJ",
  "key27": "3iwYe5ncz1XKDRwfhUnaViaiiJXm9iX3cKaqiZ6G8iEbHKcoKgYJ67aL6zuKhS7m7xKRrPMRQ5LTvf4LYsJjMQZM",
  "key28": "4d78pS9PpFDrFyBSVfqmcYJm9WxJs7c4Y1xZbgdTVz8KL7D7LKjej5BHC749sx1cXiQMDGesyztQkDsYqvbtDKng",
  "key29": "4y8QC7FECAM14ccUh6Xwd7JZaavTQEfhh3mF15i5sZ1fJLdPW4VNHM4arU5dJSJYHo3DVXwvUKsHCnVXBw3WNxcV"
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
