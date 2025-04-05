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
    "Qa3gWX9L5zzj9PbdYNrwqmihLqjgwE4n9U92RxuCERHiLsiYddgu7fwUYTfjg2mzrVZxh97EhFxwwWDhgAmBQgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKWfKxBoyrn7onK8ud1gWoq7Hj5bBGh8eupvb7KDuvW9kJE7WnoasJ6nPPV2KntTkUKmw1DdFkUUTo58pk3HP1o",
  "key1": "26TecNmAj44xLPS2gSma1bkASsHpKp1J3XNNRXrW6f5rd1mNtEEgNW9p36AS4dGwNg9NANuRFhPgJFHnuEHYdwEN",
  "key2": "AEi4Me7RNXz4aGk9PAupRKyGG6GzmmJJufWyP8Xyasbc7NvXt91jzTMYYyvuYttvu9DwusNv8UwXVbxw1tx8D3f",
  "key3": "4wHxTgtvXpg1XPg8L2uSneuhZBA4NBgQeEdKQeBeCoG6zDxNeUqVwLzQGokrvYMXeWbHfMfTRQVCAcrLJ5iyiruM",
  "key4": "49PK2okVKWFLQbYeqndJ3aLP4NNiwbq2jkeVDf39HYMTmq9tET5EDX5PnchdWiDftBzvn8ZB9u11X9WYakbHnmNS",
  "key5": "LzQoJUdVyJFuMFXxCJCjVKn1LmWciHmg3GduZRGM8BAAFRsXBA823hT8RfHQAWBAyutD2TxqdSwZV1Rt9ti6b2G",
  "key6": "4xxw4RTrkvBRC9CRWdCmYV7JUGBFrB56ArmjvPH7Ze5UsbGkxcSTLP8x5F4WQcAK13nUx5Lw5qN3CCJTr6EWG5Y5",
  "key7": "5rzEeyMFESStVwCmcE5sD6CCq1asUzw67PmEzRSa9V7o9JGUS46uSKDaNeSyGfnXj2fcBPvjPsAaAsyBtc7XHNUa",
  "key8": "4Sso6rdegryoQVkA81TboxjyfmLx7LGHtktbydN8FXYJwJxB1Gpntf8V9hn5y8nSTTea6HXEaEJX7Qz5r5kobFb9",
  "key9": "tVpKRPbtMHHGPDaJadbNESoXJBgwXopUW7ExVcPcYWgG3SAXizPqdYszPiHcDGEY6NLECmKCZYT5c1tsXE9pWVB",
  "key10": "hDYTimxboAmFZvEaSpny42GyZU6V3gSxqRKsYX1YL19AcubeN79QMR9eRoEsTy1Sgj9ZRc9LPeXHQgSaPh9yyzk",
  "key11": "5GjBHNGNVeqHRVmPDynSZgToNiDTHYQbeS2r3nJyG6Vt8HojcJcDNHK796NGNHsxQA72SCWjJeb8om8kwNnD2mtT",
  "key12": "wifzKBsNrWSUM5QaEdwJkFW9ifCYsQiNDB4MvNb7K5c6wjaEhAyvJTbUxCTk8nPmnZ5BoeNy5VwiYzE274oG8qf",
  "key13": "3sqirQdVxP7pUTgC3AVH29zwAUANa24inHijA3ei6eTGFwBTt5RTTutcr9bZjJJHsqwPkyk2jBqPFkekucC8yr7Q",
  "key14": "2X2oqsH6ZEc7qVRSn6cNr1v2mUkochzDuVjEJ7zYGpLiu9YprRfyrgn4aHpzWiew1zn77CxmoUkhAXzoVrFYNhQV",
  "key15": "5k2dLZA8NpWuWaQVyV8JfVhszviLxbBvmm2hBuAxDq3gARmHTWAfaguDYFKa5iNHcYrJXmpNrNpWfFKXvSaBTgPk",
  "key16": "49ZC2D51Xno4V2gAi7NvYnYQAwVJadN6kiWRanL3URffhocbzjGUzPRrsRKRZgkeizMEj3t4M7saEhjZ5eZbemen",
  "key17": "25rJ3Cq3kVsVP47jFmWh5tz4E6WaFT7L9uoUFd59wx4qakufo7itwKTJ4piY9ZyycVWmtDRL3mXg7QK9ZXTq2JxA",
  "key18": "28CmacZCwvELy4a3yCrTeeKjL9TSc6FKSezxRA1cibMfeKZ5VyWhg9FLcaW1cfLiFJPdMFvGnDPievYQzcyoEwr2",
  "key19": "5FcGenFxHjHN2KS8kZboj7UsnsEpgL4E9kdMzktDtUuD7GAfLNXhYFoWr37xUoKtr42nuHKoHbcftoR4TwXCRS8r",
  "key20": "4ReMv4VTdaUbDV8SjLixYSUFYfdkTe56odKPuKhp3RwWUwZ4kDkbi5tpbuDEKSVYnAn1Fere5EsbnpYYAWNtHSbr",
  "key21": "ezgtBw48a2wu8j6ESLheLxotWeAPZHjxP1K5eZWMBm2o4484kKonrMMMSRdXC1BKiVvkSaNkCKnZG7cne9g63jw",
  "key22": "cu28ap62f3bvC3CxZZXN5yLMuw5B8yssBri1APiw3pK4i94hs39Myhp97vj4ccnF4GkQD9NDRThZWHnwojx74LN",
  "key23": "4RE4gov4t5RZJJxnaffMQ7gpwUq7HX83FuLJvpFGUwHxYYXcfxz1cRRU7mmt9fa9Q6sFj9fN5rCKQKhWsYmsBZmX",
  "key24": "35CtBV18WJfrJ1La2TKtNKjLYk6fuyMHtLjsHZrJW1DEB7fub9u8FKPczXERA2LsTGvuYZ6QEjuzDLvJnUNmKQUf",
  "key25": "3b6txQDDaonJQ8tNaiMZmpY3TeJ8uBsrcgKdSJk8grTvj65SxAD1nKFuLHuyVVeu8MmZSx43XFRMLSyKqLckhVi",
  "key26": "2xfiYGBgHZoVuSn7KrGYz59DaNGsF7eL4zDPSWdoG5sLnAXMhBQbGQukfuxTfFAoKBqkeNG8Q4XoE7rSjUNC3ETD",
  "key27": "2CqHCJXUqn4dhCKgA4atbAkpLV48EoWud6yTvTXSGRbWko3H5PVw6xQfi5nWyZYZPiBkxagGjsjFW6bvmawH36za",
  "key28": "3wqy1U4mQ5JeBp2HhGW3EzHv9NJTg1fm8uDJkwMDA3RGs8N1stn6axMnBN2Rywa9xRCdGQETGgJkGYifUJmRp3ZN",
  "key29": "2b5uUgwAdAg77d3GhdrQZsGH4tmLpxym7NSbzfavXxeh1VoaaWMMVPNyKk6TJQsq1YX6naLj6k2xgUxYhacZ8rPp",
  "key30": "2mRYrKzRKxF9M5fFChZJfG8iCW7TxxFH9qESiRw7cX3xmka6xgu3qxGYkvS5835BX7dMfrkQZJBjYMM2SVhvEofu",
  "key31": "2WRkHfikLyFc9PM9F5BMA5HEbxVWtE9GcKmpjFQiAzLumPhi9Nc15khLhLMPSHsYujG35HpQZXGg79ZcbtUQ2z6J",
  "key32": "5Fa2DV4f26QNuojfTB2f3tdiZf8zVcb67y6asDRvTJKXayd1EH5q4Nma4H72TnKWW7Myix5HrMBDwYZJBiyYXj7n",
  "key33": "52HCpdYz19RKpkiej49YHpggEYyrTGwM5mgvErYz97CqrW6uLUXnkGjZeuvQZoGqAeKbiccvZaq2aw7vVE3pudzy",
  "key34": "3Nsk4oD1HQXKcss7mkCQnEFpk4Bv1wWWi7pfeK2qKoV5XFtgkWhodSEF1rWmNLWUuyUitzcEGehthL2UEsvWD5Qy",
  "key35": "2mpmwDqLznk32ncP65yMctXPC2bG7uy26oBHMiVXvyaQfpyXeR4XXS2nvCpEqrU3sPCBE2GqY7x6JqmreHucRGQd",
  "key36": "5mzYFVgb1oiV5jqsLAjANV4LNRADkhvbGytnYiUQrfvvZKae42MAfPLrYwTpGscKc9y6hhc9C2U8kZuVX4StaZAw"
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
