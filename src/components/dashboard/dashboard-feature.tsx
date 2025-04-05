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
    "4KPhAS6aVaojKiBo1wBffYUBDdeCDBSvAHQAvC5ywxC4xT4MTyDReWw492rER3ogXzVoh4Aj6UCxmnF1kS5gSdyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzxXJihS7F1UaVXyoi2qbnGiR5LMzhpfFMrbqzQhbHCTMvG1ph4G19JTwZnCigtdGZ2pLUoHLWiBpxZvJaSwqUM",
  "key1": "unwQkyrBBRzhv89MMEYT88pjAbKn4PiceWpQHGcrSh4wNGrR4YYTvvRmgXxbeXAdANsgVi2PEYjg6D9NSpzRCP4",
  "key2": "43aTEoCRiD95YhpsSuvR5USJbNG1b64wvZncaYJDXQyj6mJxfhEPEHCV9dsRypJe8fgC65xbjN8Uj7AZtpBZjbsN",
  "key3": "2gvoB7xmT1TX44Uc1sYoYp6tAwFbaFPciCB1MmXdwMFp1QsmAG7TnkDQzGavJZHCTJ1TxGPKjydLa8kWy7H9RMBn",
  "key4": "4sjUbDoornZQvFgrkszNCtZ57AoyZ2GyaaMh2SYWNCBAwhUKGW9JkKXUsvgpbhStGJ8v5ctnxQ3X9vXV2goVDk15",
  "key5": "2pbtFjZvJcoJTLwicXg4AoPxAdV9HrGosQrsXMfA1qTiT7hUiqz44YR6iuRvQM1jbnJFxkuNsnwGf2GoQVLCuBeF",
  "key6": "5eCjGQVZi4ahL5n4f24rf1HYm9a7mc1hEwAVD9zM8SuSG18euR2eNaDDwQKEqiueViAhsABnxEdwAiVx1toY26b6",
  "key7": "4YanGWanZpGxgDEnqEiSfkd9BqtMte2Ms3gRUMdLnmYbmPqBWidmsV7wCEXZAbp8eiy5yKfhHkziu9uJijjuyy8C",
  "key8": "3jt47pcUs1uoc2UEhXR9g9y3qDdeztFiRfijGV31oNa4HCCA4nJJaLCReoU9UsHZmkcUQ6Td1rPrkSkyYPQk5Ek9",
  "key9": "42qPP7XsxLrESEGREvEFWAiTqj9Gb88uojeTys4z8iFD5k81fTBZMyUbKWACKGEp7W9DNqstJT7EjjyGKeBFVNa",
  "key10": "3be7pmsmh8Hw3y7zrpBxyUDTJcKm5kR1yppwcXqAEN3mdyvp8jyPqncHo868fVcGXAfkvC84xc46JTT31fgjJyVN",
  "key11": "2Nu6yiC5jL375KLCzavsLH32c3ak5KtDsPXKo6mTudHyjTjBMYduibUwe6opxGv35Xr1VzbYAANdirqMbL6KF82B",
  "key12": "2zuiRLSh3agvyV9tpT4Tbm1hZwWig3wVPAjBt8faZAcdh4khr5Kt4KiEucgJMpDRDgqcyLQyiqjE7m3LdJiaT9t1",
  "key13": "4XV8iy7qe9Lz1UzPQpHwfsAYUqBBKjJboWCoiL7uP4z1LBXWMinH5R6Kb6Z8G9RjRJpHtxnwG2KUxhoXrw1par8e",
  "key14": "4WKhjKgjJWDvyvBzTFyT6ZXYSonhk7yo3y7hBvmyQuzZFvkNKhVkbtRc728cb25anMQSyk9WXsfcMbygAybqe1JT",
  "key15": "4h7RU5zbnCccZq3fUwhiZcy1388KRoTtpQV5wHkU8PPvmKVKQk6WvS58yqWAGavXobitjYxU5UNruq3uNDnVQ8xZ",
  "key16": "2BB75cYz3Pz5XHS9Rj7hGeX6NDUBL83DgSiAVVS9bkFEgVAvk5PRcZdoJQm9YbSrjS84VFiEb9edCqXCs8LgVBp9",
  "key17": "21BPEHgeAg22Ucwsydgd6CidCbiPjXa2iUyWrnki54v7L5pCRgZWDKCMxLiQPJr93X82oVEFaHr7AtmYDAkaTM15",
  "key18": "2QmoJSZAzkTE1xdMEBSDCc4ECiBjhs1j7hB9y1JJ9j2b67nnuWreeAh5j9icjqHRAt8CQAQb3vwpBpmc3XoS9nem",
  "key19": "dxj3RXN2VyUNiHzJwYXCVgxiQPx2tUzK733inTJdNp2aJL6UQ76TAP6tUauS5A7W4bCbRj686nQaVaQsexsAjjg",
  "key20": "2uLYmqZTbjQVGviyRfFMsKMdwGJcDBYcKnGrUzg4zKgJ6YsTeHK47qT8xsLXL1Vb847Qhaa3taaPGZGNyF6UCVot",
  "key21": "XSWjCFhFJc5XUBu2oZ6TMnFGdPnxCcnpwtmiR43qwmS4JNxvzJ2ZeQBiKAhZz6rbyuvFwabd11H8hxfjWsfiwkN",
  "key22": "49gimozzyi3qT58JMcHUQTkBaGxmgbBwCcjhiCzvzY4X3JSu8dRz7w1W11qTbTR5qEp45KHzBV8agnN4Qy29NstE",
  "key23": "eEmJz8M3HX9sezyhamh8DmP5VdVNSnkohtPH5fwWuniuq9Y5pVXJ5pNrJputB6S9qYgzjSVH1ZB464MCwjnz7YH",
  "key24": "4m2MuDvEsWez2kLJCbCq2qDLz8CU1VUgF7AykHFJHgQVjQoaXbLcwQt7wdevu4qByKtRVea1sevdsWawaKwMV3y2",
  "key25": "g9Cci2w1EwpmjWQ2fPjg6jEDQEgGfNN1UTDoKqbefsuAAQMqdjUFjLeRhCJv7rx4DUdphmjiSJoXavvU3XXiszK",
  "key26": "4vua8zXqG2qBVGHpwFkyhiAysWuRMmpjwoyzwfsagCrty8tCroJzLAKd2DBsfy8w5rxJuBrTaesvJZ44btTyVxFq",
  "key27": "55eNy8tG875iTZ5aG5vH5KLc4XduSvDNDxcgdusBzWydpzXo3a7DCyLzi1cwRqrFTEVxY3jCawFiuAkiN1Z2Gdqq",
  "key28": "5ESWoam2jSDZ3txtFVRYYMqLgRYCprnLvwrMugsDj6K4ktosdA484xv5gHvxfGDxw77NcDZPpnuL2Gm9VdSXwLm",
  "key29": "3Sa4pT343HbrunpYrWr3P8mfxvErvNNPL4XgtaEujixhZYTLzDbX2VtZdhKtEzKnZTXfhwGnePSnjjK4ZihQ94AW",
  "key30": "3aTfV541e9Dq8gg3aEH31c9aP2Be2XNsvZ4BfVb1xtNLDyYGYAu4T7MjDAijZiiQ7dMdLiHaCXLyhWpeEwCdAeBB",
  "key31": "5hmCok792nwmuPJhMJw7wt2VpK4AzhcNy6gUwJh6KAbWExb2TKFciDZWFosVLrJyKeJVC5ZXSYDUTrn3mZd7i6JG"
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
