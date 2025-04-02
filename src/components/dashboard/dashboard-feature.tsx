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
    "37yZsX5stn1iAu4BfbshvYmSvqs1KQEgpAC7gUbJm6tVWuz4a9FLYucrCQtVGx5KMC6UvtQrmRycjxCGSuC8Hpc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EXjghJBspArmKY5GufqWQkkqi4VCzsFafSvXW4ECsYJFyR1pahzX5fH75dUAwTTtfiByPehjPpeAnwC96bPjaB4",
  "key1": "592fzCQ73SivVnEmG1Ceznx4e1cHcauwWFZd59CSNUFyVRsM5czbjsWJX2jFifm8tRu11nZ1j4UjSAsbSWFf2ND1",
  "key2": "3sRtUvsBVKc94VRNATEhuDXubuJPA4MsVSTXT8YYBNMBTsdcLeMw1bdLEYvUWeF1kX7VNrZizSsQKyCNTbZr7rja",
  "key3": "4UaCTAjzbR7DWA2jfASNQMg3o4vyupAY4q4j4bTzZLtKFKJanTT58yk1adnYHTWiNDYB8fjX2RhizPciYhq7SNRr",
  "key4": "8W26UPcVHaJBEYWUs27hcrohCn3jZu1LzXzVXZZT9jf7Ku4zQxbDd4CadpNmtzKqtcp4BRzCwJq4qEWWaCGjG24",
  "key5": "2X1KJ5aF8xwrenPMLd5M54Tizo5ygzFzqqyGzYPtFqrkEygBvjkq9DFCWHp5i6QFmoPFkuv25GMY7Rk9qpmUG8P4",
  "key6": "3E18XA7nfnFenDyBG2iSuaqMAgKhwovhjxU5qahWvczu3ddoY2gAEjo3Qiricn7bLHX8EtD47vg5GXVfGEpLGuNA",
  "key7": "2ABSBtoiiP1gsXJDJSMxNgrfmeW3HAtUXoezKEY3GDXvoFCJPpS8DshmHxuZhr8nYvo9VXLK1fKFevH2oskRbR2L",
  "key8": "4scBe5PDRYL5zfNz8LPeJnmEGvpih6262JmZVf34hoH93a6ihwbMwBRATbKwDnMyn12q8pSnkyz23UJam6JuZyew",
  "key9": "5dcyMS3mmLHaN4inCok7vXtBcX1JqmDrf7LU1DhSyvE8NXKViGPQyTzyZccLAeNsA33zMd59o9AucpaowSjQ3R1C",
  "key10": "5jnggmc8ot5pdmZcfGWo12pU7o2J7joUpaczmqxqnRyXgSj9Bfm3BBRrVbeTKrGZwUFGftj7gHuCCqRqYu1sUjue",
  "key11": "4XgdLxBAfDhscfWfhdfEBgMNTiSLAt21DoKvp2DRgiJN82iYk6Wywe9T2Mgo9GF1aWbHRE6hcNU5BdKbuEoesEBy",
  "key12": "r8Q32q5FTkt9saTS5cdShC9mVthR28kdL3E2EYss9s3LUEkFZTxNbX3j8NstWYAteaBACGkvHLVAZE1dC5jG6qD",
  "key13": "5jPJLYCnYm2zUow4xBhgYKqv74cophzFDdCvDKvtYEbZ5RdrVftAC7k5EkoFjkh1EekCRMTfUsvCPoogq1thhvHY",
  "key14": "5wSEopEA2XiPbfZ39KKmMdq1yLxbQ3dBZHAFTLSJjfsR3Vv5XmQRh7gg83U5VR1hraaE5viTsvS8jAkHtDrZyFMC",
  "key15": "2YHwgeKeFT97DoH3oEbjLXVcJBToBRMhs48KsPaUYKQx72uyhmLQVHeiS3AruupaxNnsb3cn5TJsUCFTFWD3P1Wv",
  "key16": "4fvJWRfepnEzuRbyE8iEGVoHxNZUAuUX3RXRRxGgZAh8L29TJH9rE9XppJRno2F3nvgUxZRfk5Xvd97sHAfecyrW",
  "key17": "3nUJFuimiwjRTm6sEuPEJYVoqvHcGNGj4Qwk5JivK2kBb4bGthoAK4ibVWACnoEK6EJANwAQn1VyHaxePp4KZuip",
  "key18": "51mfnW4SjHX66k8emxLiETeWZcSUoidfJjnsT1bNH3BSqipo6qKevXmFBW51Z147ohzesLeNNaWv3MK79YMjCtZU",
  "key19": "35kTPkkopu7jR8J1gd6c64bM4sm8tGwVypNjsM1AcieCFgySGvDyDCmehNwqUA7PxbB4nCAB2MMBp9LMiiq4cmho",
  "key20": "3re3Awf9ZgzzuxYLkakAGjrhwGvpcRXbi9MDgKvcKpvbsh2uVQDPsv8HnzTSFXXT1n1f9Biq74zqmeP6gC9kvy9t",
  "key21": "2EcMPCLDedkshtzhvWE1aXmgSv3z8kPhkKf9Yf8L6X4S14HyNSiEd4T8vYd73WokLw5KrsMyhaiZS2Su1hm1E9mP",
  "key22": "X1UhiFzfFyTAy7Pu7us9oy58u4DKrJgozjPCu8Hjgjj5spEmEhXmt8uirz5rNqF12PVHe2cWEji2LqwsYuUzhgc",
  "key23": "4pVwR2x62Hdk64MU44eHyqG7cymwSGU6zs6XvKBtnjg5aDCDpQ5HGe9ptsoTe6Epg3k2RPYwrdFUxucbQrcxFs4i",
  "key24": "5m927hBqR8Es7RVZ1Pv25Fz96WdwaUB38CRNehqPeQ5WAYPCcozNeCSeoHJMZcHU2f2hECFNRqeeAfZ3MTL2vwzN",
  "key25": "2a9iibV2UPcgopAwo2Z1zV4DHWJS7gCXVqRaCohjWiEoJwT527Qxvds7QbtCm3RtZ8hAvyWh4cc7MUUn944EBRMt"
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
