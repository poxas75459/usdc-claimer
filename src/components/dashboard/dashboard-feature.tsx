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
    "3DsLQszfaVnquJAvXKbcpmdvUyCm1pSk9nqoK9xSYAQvukvC7ukoLoKX9w6k1VdQchvrWAuECnsAtSNoGSqFWhyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q25vcryLQAj6vSSJtS4z7F94MN59V6aYrewmKgbUPBiYWNPoci2GENYmR2MCjg5Yvp8SGSniyP4PeaJ1yM5Vq6x",
  "key1": "5PTd79gsNwnVAkwFf6LdeEf9aLDiehyXv3bDpbysvYdg8y5uCK24DBErcvgbtN9DNQ7QFkRTWsjSZGhvxtZPAqXa",
  "key2": "tnMw8sT6NyfBBd2jKWU2wddBLsWE4VrZGhg53kWubHUfz3kemgaTJHyRZ3za6zNSio3DBbXZ9gUoRimgV9g8KAL",
  "key3": "4VrtJ4JijL3RvoqveoJNNAVLcrXqKCw3AWbd9E8BGpn9L4MS1gyaGvAmc3gjVgGB2FW9vPJS8CfczUobKqQvLRXc",
  "key4": "b5fESBqmFTvyq9ACiaYNfbygDWs29oQrDoLFS9DixovXRLJB1GZgfMv69TXLNJkJFDkhN5p3VWqUjQG2QZTLmv9",
  "key5": "4qMBpyXFZuakkRZgU14PTXn55H8rXW5SMaYoW7uhWMabzCQjKXZrQdtb764tH8ZBNFkQiDaHCXyPXJCA3L7WrH1i",
  "key6": "2vJ1L99pCwYzprnHiKN8Kq4jUQxcDA5jvw1GvHRh2NvFgxqx3wP599qW5x6EYbwPJERNwMktQ8fZtwJgWpKZQjMH",
  "key7": "4oLYqVfEzS7VVZR9R8C2TUpsrXzSqK17Lq1Q3UBznQkH8sgPxs91HLBwWSP2KU7rjgueCMRG6crVvAnDUZpfumbH",
  "key8": "b5F8xsccGNxuhnadziNaHBAFX9L2wsCFGjtUJmzJCbF7m6hC1j5tyZXL4xfBeiqNUSJSVyCh3Qcrgw4pAcWvqc9",
  "key9": "5cCbbhshrtePRqmyP4WsqUT9jvWkD2tGF1CPwoukV8Jc5zwNVG74cUZasDNjp3zQopzFh2qkx1bzqQmy6pTmqkKu",
  "key10": "2euJzqNoda2YgkmxH4iBMZNM5ZVsw7uBJfjA6ApMx1QPuEG8HasgPUg4BsFnFkLzWiD87R9uBZaTgtcRx89WYdMq",
  "key11": "2jd5LsQ8RNtiE5HWgCZWCWP4WAqY5NqjrT1bktm5tNuPj43QswCA51ggvDmwkk5fBCERBugZGBSziaTVK3vvt3S7",
  "key12": "4tXw5neTM5Ruj5KGpspxh5ENYKn9f2jrdFX4DjEsToFW1Cw9RN61YoHudjXaaESnjqdyk2JpiaF8eqd4syuUt835",
  "key13": "VoE1J82qpyZcb88ab3udqBk217KnMYsWoJJ2GqoUKD7sM4WvaVByQbwfV7ncofjxB8SQf9SZeZb1vSXrvuJziE9",
  "key14": "5AxEkTbEjgbN3GbDvKBewU9Mj2qUkVKjPTdCCmue7AvpZH5vYzyLik6U4VEWRr6PcV4pTz53epThycau5abKvGoQ",
  "key15": "3pmYsuL7DmfG4bGhbMN291hBZUJo82ogPn73hT66vrZVuHnhwHi8tCmreTzsAiG5c8SbkkkStxPgCdK3Lkqtf3AG",
  "key16": "5LFUeNZYqABP6VgcuodwEReXxEZ3z25PStKEm4mZQyj1rDs1NLYpH85naVWMphMBUUKXHi1mUmYniCsmjXTUpNFj",
  "key17": "5ANrD6zEk55HMGGvUU5c2ynU87T4RSZuoLYbgNkGqoUJJFBb5GCRMGiimqVvux5jA9gPdNMXmq2of81eqPPFU5cd",
  "key18": "4YDQGA6LuJspHrJacChC3P5TxNjBDwJJFpyboYpbvqZDXsp4YPnj3zfXhKnKo8bKjbgPZuEMBzHNmcHuRze3nJmg",
  "key19": "3NEuipycdisuBjJJd9gstKa2GwZEPtwPDGiUSPZCDMCAvY7LQGZdwdAgjuVQDYAwfBW4imhqx6rC2hu8Gk5B7iRQ",
  "key20": "3vhNen7nMiCapD83XpRh6r2yEwzGqYfGU7G5RN6AGbTMcnm3v7J1apcamnDWmt8msTWyG37xqrQu1ETwPc5tKMho",
  "key21": "3QWbyHVBDpxCcMSzLLoVyw7zGPWRS4qB4jbGB3nDuroTJkZHTJxTniyeppJcbZ2iN9BaLyiWpm8P73ek2A2vFtan",
  "key22": "7zmBwqixbSL4sdHwts6wGZQQNmfkNhHQm6KPoHDeDrF5n5qQSvF5Gp7Ffyc2aM47MWAeAvjg4M2KyFd1CzGSGX4",
  "key23": "4GoVv8D89T8Pf8duBbZaw7p6Q3G4RosALsaRvGNGydqdWbFSv3xqKe7dYGNQy7Wstz7dDgMakdr64Ltmjfw9MHPE",
  "key24": "5qx8tg1eshQx8RYgvGUhkHHkXxLNeYSBj4tpck5XY8bQTw4ytT36qigxDd2JHZhjEf5RwJFQHuag25JNfJYuxSKD",
  "key25": "53MHMmSCFZAGx1CLETgq2PJYTrne61wKuZ1u3N2CnSFRpofW3QWKyvzRguA3rysnGnHDdrekvGP8reYKZ5mQM89B",
  "key26": "4Ku6mS6vhGqNP8qgUAGvCDmSw7JMqxBbfRwr5GZSo8S8ogiu7gfMzUSD9EM8gp2AipQAvVN9XZ3hzj82Bp41Vx6e",
  "key27": "4Bnyk6gaQKAG1XrUouKqoZsL6mYpX3vzN4fhFzr6sUmgeBPFZz7C5wPWmChYgomirMHrRtWezWPoaKWxTLoiYeZc",
  "key28": "zve7arfN2i8YD6vmVASjADrA2L8HjP1MZeGFkKE9yHcUiHgTXGvEuafMRtixErRcfr52RiXADxi6MbPKGRvCQ9f",
  "key29": "5U6tpqn3gEaNADuAkb5mrs1TXnnswerv4NPdtT1qbKLurPBnCdVRh8UfTY6Z3ZPFE1ai9fybYCvU48tHkv1smjKm",
  "key30": "2VYWmj5o4EANkdyPoRUWSM9acywWKkHec3kERm5oeNtdjUx8LzqBGQFTQr1RN65bYzLgp3TNofGrE6qGdQbuBZQZ",
  "key31": "5Uf7VGm9oQ84qyfF1ENMXtugj51i1orMYSR7L33e5tu7LPM8BrTjbQVEhx82hWaXyhWbqEkH9KUbU2E6fQtftR6Z",
  "key32": "3Y1RMzWa9iH6id7wtaNPyoUFyZfN9szhwHi1x6cZe5mycno6CLoDF9SXXQFcCrfrYgi3MqJdtyviXZJ5HBN1G6nh",
  "key33": "uvE25sETnHmErGMSSheTNAXQHpgucDYrbL5E1jT2kitNGaU1brJ3zXergwg6dWmJQXibCxSVHPrrL5yQ32svByu",
  "key34": "24UM4LiDyRwxyRr6xRnTY6D5hT75q6F3ukx4wdj7F5dVSwuPsCoh8Edw1fRRhLwbv7WdqQQXsWECZmEpuzBdqZih"
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
