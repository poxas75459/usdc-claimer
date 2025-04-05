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
    "28AgU32nYNPb41YGMJW3hy4yo4Ab3TbZd6BF3EUzEY5n3qLJU4mUVGRjqahgRCibkpCBf1SU6CsQkrzXw9vFeybD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKpUiz5kpix8uJBmqJZF8yvzNs7CJZmSsMav8Fm7smQP4XDnnaJsRKxW7FaCQce3BBTQnaDgrBEYuRTENB4h9Vh",
  "key1": "TJETn2srWfgRh9nN9TZx2YYqE8PJSZWQi1jrY3fR1cMSzLZCHumEiB8J6TkQ31KzbR4UGvQXTX7AiT4tHJpZb2r",
  "key2": "SmU6MBknwmJENxsQ2AK2XdjHV7KfvwsDjDvNKk8Y6Z73dPAyhmWfUZ8z4VNptGAtB1EvH8oHpCcH4ePPuJLHLyk",
  "key3": "4a8TaTgYhz9cRF2CFfWkqjaZtswxqPAcodJugprC39Fe31C1SDdeGJBWcV1EAEwGeGEwj7NMv6295r7viAZcDTp4",
  "key4": "4pNqAaQSkUGHZkyaJpwkM3wFr5iMG1bQxqsegjedNCayPNHemnrk5PFuLam6mHzCrVM2fWLTrGd1nmQfq9hP7jS6",
  "key5": "28JCMXRvKApnMy9AGHTbfvJPiyzRGDB39KSfW22ABnbnwpPe95LRvQKnRWM2GVuD48AiBUK1bE32PFueMJgRiLGJ",
  "key6": "Wzs7jQCP8XQU3V4Eb6Wr7r1zaSQvHRzaU3sFgTQnLxT8uoEysa2eRzp4DAUzEbNos2TJgo2MUn87KfZHpiLxFPE",
  "key7": "2EdTvCQCmkxZhZVmBZoCwQAejL2kq7gfWurAXrER7Y4e9QNJScCaLaMPdxRjSgaSYgQwNNW6LYpReSWJ3rFW3qvg",
  "key8": "3NX2mwA3efnJ3DXHhwKZhazVoHzUcLSojkRBrrS5mNYBNo54m7rdbif4aMhwHgxkznTEx9D8hHbHUSBhmHpG3ty9",
  "key9": "2pY6dGxSTVyWvkEHanZQn5E1KRgANyS5RdUgAy19AhVnKXLkdPJqMx5xpHhSV8NBGPhe7ivrDQotpP1YVKgf9De6",
  "key10": "4HuQCAgsBRXaCivtfRbcJ1GLPfCxZmHVxuB5kBe3KpNdnGmrD4HVJ9h7fG1sAmPCXy263Y6VTNwKCAtZsFvz1NZE",
  "key11": "4sZhvAFYgHTrSRcPy3Mfh7dN2wRTEn4FjS5KDgaHy4bLU9FwoSoDGtPaasMbR2tDi5XBE6rWnbfxaZMZtZEUCtL",
  "key12": "3wA5Q7kxmb95dhx9i4WMTqM4n583pdk5YaTMSEpbg9GRmTGyqRivSoBNLYmd6gcbgzV7KmdqehfUxHnb3d6N1Tmg",
  "key13": "29NH4Bf57aPA6MYBuPdijjJtUaH8aDbayCxBfqfBGpqcTyfTjXPYK39zmotZGzyrN3TjcgtVc73V4x868Jp7NZpN",
  "key14": "2frKiV2SBsu5izUrUaRjtDYuyqnXynttdigRUfHJoaaZoow1kYg12wmm1ioNTM347Yo6qeyJ3Zsxxy4UgTtasRmF",
  "key15": "3sKVRS1Fj954eGqRP73rPZWXFMWZyc5NUpjoU7aaMh92hB6GLHxJLi6iZ6eot3FdEtr5pHvmh7G97HvV7Bjx1zV4",
  "key16": "3n7kNwMQWGearPAuiVRHyi8wMA8DrKWyKzwR9VkNPmg98Cd3RaAPYNMz7QayrRijHuK4VvfwURjks86xdXiXLheF",
  "key17": "321ktjbFLF19e4ST1n72FDWX2jYFnmPatEauXEzvjCi9qs2Vo9pdoYLb8ZvYKJDWMGdsEpnsEeB8V7vH5pu3CArF",
  "key18": "2E8wMAtYSC6dMStLHQnTLhCMi5VceSpZu9ak753v1KtHjiZF5QLZ4QAWHcRiVCazWqSLae2KmJo9qoVFZfYRrXNj",
  "key19": "3DqNxYaGuqDaQazFUfShcQPG9pLpCQcUQCLrvp9i2g5D8Z4hGjNMcEzCHfLmeaXHNz6wYfpHdYut2eFuVk7pUSaa",
  "key20": "4Ykz5QkJ5FL4yXRXh7aoNuJZw96UF9rUQzAhLeNSuX3QN1naCJkv9b2YpPxJXgrQDDzGcmMKsbpuZJiUHMh2cSi7",
  "key21": "4QjWid1skSY3JTJVuT6dw7mf5DdnSQsUpx7FLQP8ccibFXimodwEATnBhGQB4qo4zqi7v225K84CWBCWStpqNSEb",
  "key22": "3eGQTEKsxnbjP5fcX3beCpUFnqrUSAiYMLZHV5sQUWtB1D2tSWMArnKCaCyvdoYyX6n4GBcbcGhpK7LCRB7Vztkr",
  "key23": "2xzSc8ttBbLbbBC1156ZwQcEEKGte2ZaFqtrVj7m1p6LHHKiM3Dh6dZCUtgASgUGM4GaPB3qbuuVm5yZhhPf4HFX",
  "key24": "2Jp8FM2o63GSN5PSPCBBHTWVfHfGcgmyepQBdqLf6HyNnbzmFLgd1pGTqW9rtRrSsTjputWgJd2E7Zmqcba3YfpU",
  "key25": "cuxzv3p89ooxkgwCGfAYQEhehQwUEJgzjxKX6pZnafb5uzA9ELLyhnipsdYNen3nL4DHwmcWBycSwhNxNfx4Rzt",
  "key26": "4e4BjURDszeJmF8u2UCxmi7XGzKDBkhFduKcVeKXAnzDx9QtzHEBZoSWpzZSsoh516oUDU54GjGqhFF56ZsAnLsd",
  "key27": "ztYadV47C3FdDQ3ugsxccYVcJgthc2rCkrwSdJSGTcFxFuGG6CuUji5zC3rQGMAt2QjWELC6RQLuDY7RTitMWZ4",
  "key28": "3GXzBwa1gkkV4SpGS8iwRehpPPwMYje4zxoiULgNykP5nGaTKPMrXwgxDPQvucn4zRUcL8q6AGLme67U8LV7B7gq",
  "key29": "4BU8wqa4c5hQrfScrAwPbo2ni1DkLYDD4vkWddB3YMB5TE48Q3QktZGGA8MH5jjSeDQRpzFVohgAvoG9tpewqfYT"
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
