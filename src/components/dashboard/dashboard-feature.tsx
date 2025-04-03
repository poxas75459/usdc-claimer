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
    "2SJNiH92Kk7Uomg2oh1WTjKShoX5YFkiQvxPXZsHckaNo7iuGyXK2Q4ca6oq7SGHbu819uajZvMtwNUnwQsoNRes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55e6kiq9CTnUrCdhT9TQ5N3GufS2cdfQyUPvm3wuEU5WE2AUNn9mtNdPayWnVKuqSUfZoZjFUJWUKihmNYM9YgZV",
  "key1": "3hVdqxdbmWznsz1nBoM8KAHLpcWHF5QTQFS9JF76qrWzaK54kw3h5TaSwuMEzfoyxFRFDhUSkfNMQRdgtXXQS6PW",
  "key2": "AmykGNtLnwgrKoXJnumivxj27uCKZ43F7JQ3e7Pv1yPPEGMRT6DpsbK5VfQHHwBuUiog8uPZGh49Hd8F8Mh1FfK",
  "key3": "5BGS7f8eaEHvaWffegAByU5hyjdPy91EFjLYqtLKuiuZJ5BmVfmjkpnr1prRXqrscFA8SKFAUfwB5C1FCeFPahDd",
  "key4": "5JGr9FeLCfYRb3LHWExpDvo9MQgiJZtegR34kUQBSid7wUmFvUcGQCE1QiYnrTamz9MYPiQwmXnBsbvT6Vm9pSfn",
  "key5": "34RwsDLzvcDWW9PvDgP5643AGL1uHbjr2At2uipn3FEVMJziZViQ217VBmmsgyMjmrQ9c9KdRwnm2iNr1rRF7Ni5",
  "key6": "33zU6Y9zET9uKvV1VJBe3tsCPu2vzSWmhrDExRg8CzuYZT95QekVZyHMhLUS8pCPZKeRiS62xhskebpPPi2dVVrw",
  "key7": "2GkpFCvj85wANySixYJvueH1U3tPTuua5XaqcG4TVpiNon9KpDW2ibwMtqPmUGjMHJW6uAqRDSptcdEKrzfZ8RSM",
  "key8": "5yzWkYD4hxTEbAEbTbkaB3pftAs94KDpnBqgLDe4xnrV6eXn8zQry9V6ac8tkWfkNLeG9jcHEYBtFx8TmUpY2ahB",
  "key9": "NVPrV6iA1BjRZ5g6RtVVVS35bfeD1CuPS7dsSdfgkYfVngs7WZdXvGc74dxGDHRDLMWwqJkaNRUQfP9juyzVwEZ",
  "key10": "3hk72Aejv6jUhso18H8V9JUgTfatfVav5cJQMvyUvweDgQUBSXqmCs435PCXEJqXK14x9dvqAf8hxMbmPS6XhuXm",
  "key11": "23sVEiZVEDoc5TJXuCq8ZZ2E5tMQoKhjtqhc9YaA4SJH5UPwjR4ZXFrzLuW5PtznoC97QVCo7wsyRmZgKuZcAjhv",
  "key12": "i3zS1jp7ceEVUrqtcL3x9ADRawtGTJEe3kwCtbpnZyFPN5LNSiq4DNS6SX53o3xmeH9t182ZFEXfLHZ96N6xumd",
  "key13": "44AVwJKwJouyXHmBgQx9ikdZFJkp6YN3K3ZrTEpHz4ftFcneMLDMTDqrHsoupDNTgfZn3xSVSui1pD9WDJYTnTZ4",
  "key14": "5v8UGSB44P3tCzXVHc26CWoKZZUk7dwV1hK32bxxtfSnEVc6qtKmyPURAw5w3nJQFGPUhBpV47zxcc62UpmDoVar",
  "key15": "5kWD3U3b576dDKDCJ3Cb2cQLWmYLc1eRqZuR4dW84fdphf54EUEQ7xgaHc6acaYjnZXAtVC1VYAZ5Ty2i6f2YGeW",
  "key16": "b4i2F73MSwcobJsCeRRTYYodxggXeQQbG39VNJgFvnnEHxSP3VtgXMyss5r6Bs4E55LSVKADFozbm4S2AJrEQpf",
  "key17": "fGvBQLMrY7fx8At7FaQUZAPrHbqAV2ZvrTXPNw7dgpnR99ZsKhprUAg3Reb99L2edi1ZEw6pCFGRnBPGrARgSr3",
  "key18": "n5qStPCRusjq5cQNkV3EdXgxSQTYE2MtVDLi2YfHDWBNFZYL8ZCBw9Y7NZxF45jEQxtxfif9mKtQZgJvy6ZNTMr",
  "key19": "3VtBRntzMSKNYkrAgvvw2u3FKQoEEJnudw7Z7UMaAA1d2Z5T5kGNnQ6xxPwykzLp9H5xwvaKzpXj1Lv2CKyaQZhF",
  "key20": "2JPp8Ys8QXCbopfkqBMj6qDhDiAYQ2xFegCgS4Sgw4QxVbsDZvbNiaVH4Xgdweov17q5jQ8BueuEhi7S4koHVCa9",
  "key21": "58UZY5VZ6FTjexTWgHJyFQt8STcejrWowZXPp36JQuGEZ2Ew3EJZeW2H1x6s1achGjNgmDtGZkeB9w1HwLYD3Hs2",
  "key22": "2CcW24w2ha78uJMXiDPwPdGR1zToYyHc3otiDNEM5BpzCFQ4BiKh4Z56oP6NWdDx5ttoUEZipbY9w1LHKeXto97N",
  "key23": "uCHkbUb3nNVYyK9ujuK1R4YNdL4Hir689SDQupVwgcdoETzryVvwSrooP9c5sQVa6RBDpVyfYBJrVL93dZMisvP",
  "key24": "3v2jFfKzrQz1Zauxfvv73doHVLU66Cue35PWxqQQ71uMeJuQ9U2Bk1JLhrCgTedPpdkSBiPF7xXWhXWDeSApV3Y",
  "key25": "UbhuifAwmqH9HGXrZEocfffr4zpUH6Xc4RL5bC4e3xTFE3dATuNaWtYvpb4HtBhwpLyzaWsJbHt8UwuZXbVyChd",
  "key26": "5b7wjuJiEHLm296xvMQfrDZcAfwDaMn4uKCB8Rppb5AxmJ1qoTdzn16zTnrPPtZiEtisFW9sQrs6TQk9TFhommxC",
  "key27": "262DPsZhgvH1M72zUH1dGybpHWUhpyd7wiviE3SPg5kn3EP8DnfjHK2X5wLxNw3BkrByaH2kBUthGMzVx9zzt6xG"
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
