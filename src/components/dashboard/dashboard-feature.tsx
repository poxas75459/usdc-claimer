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
    "2bzncPMpFATrA6RqTGLvkuthJZLrA6qGmkPhWLJt5kWjRn2zFknkagY7kDBrDCNNXgopx7bEL9Sfh18WykEXUdy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LykeNzVCyJyKLiCrQTkTFXxoBXAz4fnJiKeAGMYz6xeh2u8aNnU3QJJVxeL6pzCpYxV1YqAjuyvZK6S1FEUysrF",
  "key1": "2utG7wPifuQ1Z8fzpM1iaDSs4uTY18Pan2BgeNF21gfQmMVrsYohbmGdzYWktXYq2v1hrhVrgfd2Vm1QrJ6ojJU6",
  "key2": "5qZZVWq5VSRmT6967FTRKSPff5CPpNbiH2W1pTp5cv8X6CNkSZ6Zvf29z8NqJLiMmZNGACbDC1QzJJsXQNXPX3Ey",
  "key3": "5Dn2CAJJRY2omnUg5hTazWS2b3SR53tnTxzrFTwYttN1i1AZmvgifgfWRwcafSddGV3CRnL5dsNTXkCqHpb5fjBT",
  "key4": "4yBK5xSj3Nov1j79z6TZptscHe422qDvmoreDEdpsvJHCYURzmuqSiWHWqGwosYnLR1Mb4NrxHXn6r4LBf3Mncaa",
  "key5": "CjyAZ3Q1tJ8GcwUy4RB3ATp6NGCjWXzy8G4mMt2p2EvaMF9gsk9GmkcDHGYc2XZhrF3chdjS7NxtdoyNAC61KH6",
  "key6": "491HfRGmLQxyg7xnUrkDpgVY4LhXtFXMNANxkbrhRbgbem1nnzEp4VRfqyp7oWUsXAz9RFhuLXPrR1dsZCTCMUmD",
  "key7": "2tAYRKVQFt4L2NBma6a6DxWc6nXj75wQr8Jvdme88vvJW8UW5BXoaxde7iMzF1tU8Gg52RPVrQub6FwqKxvZqA5",
  "key8": "5yqq6c4s2ksHz53eh7xKFviSbhT12X7cy3dBkGHQPoLDEXyzfo3fjk5s65WnbymzK2N1eREn8iN1bGFawx8FmRAF",
  "key9": "29brvaaF1AtXnqDgfGjgJeurBkpmn1WwFF93T138qXX1DtuNTWtGjLangm66TjB4DT1dygyAg3EnuGhXfB55PPmM",
  "key10": "2rFmpdzmSj9UL4bb2JoLix8QDqazh52QYpNZnrjx2KudtakYiKgJJ2AEoVdv8LRM2PkMAqSbaou3wzDbjn5hubo1",
  "key11": "3yRFtjf7Ly9mvkEdJznbM7ZyBPa6JLjdM8NRvPSMduH4e7igN8aBBcadopbex44dL6M9NSxQFUMtMVeQD2e5HrpP",
  "key12": "31QevR177nB88RwEAt4QuosP2ZVYgfMtBaspaNwfsN5Eb5sb5wJ2nkPAJE1a7aKri4cGCfDTMA2JHUdKjCM6mMvV",
  "key13": "4YBKSBfCGqwspvfwBzGC16qkFs6k3DbutzRtyNic16Cirmp38kjmSzDkn8uxLmPDVA4Jzad6RfDaqom76qQcYj67",
  "key14": "3rfMg1Ypiz42XgHpLXB3Z6eYku4o7ryyy6q3TP7NzzKWqg7GcJMpuH226dk4aCBxvAjGrQtRxg7oG5yrH9RovUpU",
  "key15": "5xLLSD6s4uRXn9A4oFaxaU8wVLTfw1J7PRBJ75qpAbtqjzv3cgEexRgEQUMyLg2f3o4wdxNCz7D9yJzpwfMLBbgu",
  "key16": "psKuFm9DTts4b6uTqydXZBTVxv6pPCJkmPb1UtMbgoNd4fjMNQHGyvfeKZT8srEKadHMZxrscgoPB4RS4SYf5eb",
  "key17": "47GpgKV9zsSJ14bzSgPU9boK9SrBiEzRoNgLJKhDaLSXMuDw9PVhasyWF2b4aJzuorScoU7HvmXfJaSXPpfkUw8j",
  "key18": "4nfMtLHcbEBJcAUJW5LDEE79G47YggAwPddPswy5ujVumTfTUshtgjEUixo1kAupZLPdPz8a97SVkARouuvHLrZf",
  "key19": "23TnsjhHUJexNitJkigyUrZmn8JVSce1SKzWJrb2w8emHs5f13K9ikVhwAiCWZDRbyNY24ayHi9eFbVz5FzRwM4b",
  "key20": "55manRd6HpdotbFB4xyi9pCRE3UGez6foWYKVT6JkEtNxzKJecnZ2kL3t6nR17qiq58Rt7815yrj85Gzgq5yNmAH",
  "key21": "58czjFi6rvf8Vc3bLoa1ghywe3BnF1C3XCKDy6c2rycT9XWkU12LqWv8JMDZNGr2atQMURifn2A5K4U47uTx8BZY",
  "key22": "FkRRRHm3mR8Cy1cJwxzVzh6vrh8AXH7EZaFNCQ8FDisJn5GMCTssXMpdDZHJ9GLcDnwJ1Nbqt5AouR9xXbMUk6H",
  "key23": "XA63Wo2feGQLZMuCF1WMdNnkatrbxw4DZtkV6ACMSMUBWEZ2WW26StiEwTrhfCXcXJQaVEadshcEJF3DAKoQ6Ao",
  "key24": "pxqTEYgie8w8MyEsMGzJZFULG6VD3eq4CBGcJgxwDtNgeaF1ZNYkVr2z2MeaHVM9qag6A67Xy5aHFuKEXX8urbn",
  "key25": "bPAB2K3XTeRPBhbPDkbPdU9odciyeb8QUKNvDtVc8GHSAzYf4ejHaw5ZeXzZDbWEyffHAAYUEw5iR8dDgecrXdR",
  "key26": "5QndJXC899XwY3Y8Lc5VvrbdBEwmp14n8ShSphgGqzF2fmWDrZHeKMnsg6FTD4npamQHtMragPU1eyv1RWDcMQjQ",
  "key27": "4SVom79HSPeTqYDSf4EbMtqAucRjDE1w3wQQrk48YfKMxPuhVhiWRqdHUb2DDgLzemCcVznGt3iCYSPDaQKAQu7g",
  "key28": "U6cGjsumsApN3x3K71oY5RGnypQ2r6LmKFzZ4Khyd7FW4Ed4LgsgpFPS74hwMJffbhfyCjpioMXgQcXJj94oghS",
  "key29": "235gjFmmu57mhXXfxhEwpkEcqjFLKFTqC1Cgf6gscXZmTMmhr34tjhG3XVQ2avqBtzT4SNrZDPyRW5iWQr9gAFDJ",
  "key30": "si71YtS76HYeC3KZgYxJw3NknnukygVuTvHM5FF2sjrVoRVcrmTHcUAwuV3HshC7tZ9gsLbevnSZkcoG45jXhT1",
  "key31": "P5nBa2Gi1JCX9Xu3DHqZKBw1gauyS5VgHVgZzPbgd9gsarm6Ds42SS7ndn6X2z9tkKvewGCSRYBfJQPdN29uYrp",
  "key32": "62xnFnWzExS4udUuQjpmWchyerFnsLnzhviQgCtnhRD9cgSF7j9G759zuUg5mTNnL4tw4sXmNMEPi1R3QgKpvsmw"
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
