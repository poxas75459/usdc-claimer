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
    "4mVksSMbZtSZt6zbo9X6FVN3WQrKZkTRuDEnQx4PDSrbKdjoHmgFLrQHWuofTEnkjFdpVK31BTghgTahM6VewA6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sKun8ZTsEA9CVDGMi6FLbwFyeMyKe9P5pu6n9PxndL96ij7WzuUiBo8XB6Nxxygh7BFrKocR3jXiiPqUyiUTRqe",
  "key1": "43C1AmjSXoeuvqe9YHWWak8Qv2xHQq51PVZoSwNgk7m7kY7bWW7n1VNHfEp7QjhjQYzXhM8mvCR5JsuSmwL1sN6B",
  "key2": "2RRq9dscUdmcpGr7cmQxZ8ngnWu14EaeawAo3WzjkPFeFbzRM1c8EebMbtTGBkpHQWr8tadSgdyToSkP6K11Zxxh",
  "key3": "7oZzmUVWbv3ZCtetsq9zaofzWfdofe3cYEQ2DgAGhrp9u8FaTSVqws7ZJVY3AePQy9NkdJnPqK3i9Q6zDjnJNE1",
  "key4": "3kv9B2q8vbV3heVr2crmB6EtdfMZN1WsZhw4AoZ6Cwscu79fqpDC2hrWNMah68UjKo9BfBES22fJo3j7aRUN4rmU",
  "key5": "42q9W1AMzKiPoNvbFRairhtw8meFfQWJ2TuDwRGByomt7MnaYQzoQfnZsc88HaazptGW2HxiVXKa3BSYmf43fPbD",
  "key6": "4yRy9NJsrATf6ep9oYQMQq93xbYRfe8m7ZE3qwnQ7HiACobugqDaHTMgFBdd1Gxwz4B7crCT7SF7Mco6K49obNP6",
  "key7": "7L51WeoiAnDPt46nmok3Hhep85wYZvCvzKFNnXdBPfDH8fLDouxSU3xj5MroYnaQt9QCrHqrrvUyk9Lad2ugscd",
  "key8": "62v5bNrFNkTSwNyraEVLPAkEsqLnd8saJ36C69dv3AV2DN8hu5ut27bZdzXJejEJh7yMS62RtsLEGrKUtRzhsYUL",
  "key9": "5ikaiNbwwTc6ysSJMswvVQHDB51VNYXCSMwa26rFZSrDv3ix6Kc1PMLaEkPNrRFPsXPAqisob1dwCAm5tHideiiE",
  "key10": "27JKkrc579UNfL59Age7beBYrXrY6N7WpiAoH9hY3MsbaMEhChFNE5dQuWDr4trA7zEjxQaCGJRZzhMPdydFZkFs",
  "key11": "zHJud1hu5XSB9u3EtJFir548eoBgibxfPre6cJuxmcVR4Sz4ymv3L8uNWvkb6H18TtB1m9jUDz355pbAzPnZYjQ",
  "key12": "gdkYm5zVUTdRCf16XRX3qN3XxnEcKEGEnPA2YERYdGgoDQAD26C46g5insgrJo5Tv6c4H1jkJa5SLLwjRpjjQrb",
  "key13": "dCkgV7jRaeTARM19ejYsnUHKCuEi927bzW3CxeKFuCA5Z3LVGE1GCa2CqfktpBnekJ8ZyzYTkUNR9YfzJWETpNo",
  "key14": "2UPytVXJxovagL4gA3VenaYzAzVio6htfU89NbJpJbZtgHHPCGFXbLfuvjb7Vu6e7Wj75VRXfUtEr8sFytmVHtYZ",
  "key15": "5phjDzQNrmj2Sg4NS6vZTcYaYmzZexiYdhH5D1q1mKr39qwGdyY6JyrT5ej2J5FrVGKJZ11QU942NUciNng4d6Vs",
  "key16": "2wTauAnPGWUDRBz23rLS4n4ukb3zeeEz9f7W5mGLw4FMN5qUcW2z4Te5sfBtwvzFTyfwMyHWLcH2Yx8yUnE2MQZU",
  "key17": "2PVpB2DWMH4CwLwrQkJe6ichhrFbPQweQPkqqfRuy7Nmurs63reF6PckWcTuJ8bnKChuuBqskMhneFJmQ6Jax1Ej",
  "key18": "3LcLVQGEuijexS9MogUMGQoq32RveYz6AfMWAUmHQuHJXvx2wxgiU94p5Xvo5bvtPRAEkMqZnXTFngAdLkpkVcXe",
  "key19": "3PiC9aGhdEyxUXVRch1w7u3uYjhViQcRYM24Gzpjpxb1jAan4mRyGGqWxUu74bJrba6t7YhZHjAi3jaF2DwDdiA1",
  "key20": "xa4BTc1RK1NRXPiUqgvVXcM19tKHAQmMr8mbvtkSjjUvoyXSKAJHgVecEknipg3Fu43Pn6JcSXMe9matNbgZgQv",
  "key21": "5VjoKbktngXuKuRqgJuv14QThsWsrkEsdmTC3rvjNzkgJwe8CGVRHHJWPYUXEr6cL5E15ZhF5uyvC9rhpE5nwmdN",
  "key22": "2nD19hMBAhL2KicYXTbcqm36bewdghzRdkm2GFv8Yvcss3xXqx5fXoo52RLYhSykzooq7YczPDtu868PSxFKPUMQ",
  "key23": "3ofMcx2DTJanavjytmTrJscSrWW3ex82bTDLDCdqP7iHbM4w6UM8cUJQ96f3gWKib6LZjTYe9qod7NXEDxXaoNa7",
  "key24": "4WM3RBbL2TjHUkzDYEH2q8WPbq7tx8nqUjrGqv4wr135B1SoFuzxRhTEBs5NHWrrMLYTGEfwpAyxafri7mNxTi1q",
  "key25": "dw6633zozGxXS8wz7Uf4cw6zTuk48u6CmvVRLsxAm1PWibzfMt4JFqB3sKthyCDynHoTDy9vNwru6MjTQEYAr2V"
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
