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
    "5aa1M6ZkKMnnLZVYpnLcQdiysFUQQQ3NAj8KPCwdz4pG4uBFBzJWeEmFLAzLZHvGzU7Ty72ymkDnYZYxzzzgH3rv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgQiAujNXJDoehxKr8ACcGongWrdXdtFJuTu2Mq1PfAStRmKArbiRqZr3bUg2FK1FhUSbGdf9swHWkcbbkthG2c",
  "key1": "wzTv3Fb1HAPBUPYYGDLZ42L2KdoPavXRSgXzNytqhe9zAAvyZwhTDaRuZicBfApCEdt4MxzXQPxJhTZ1peQpL2V",
  "key2": "5T14NWjPzwaRZsJVd4H29T2J11qktKu5kt5UPs16bptVsrXew8wzYJEgSWqHd3LSAA8avFPTY3DNUWqfV6wmVY2q",
  "key3": "3XcKEs9HFp7ms6fVmY88nME3HcQxMXxcNhTxj8MMbXDtZ1yTEeUSwywmu4Erz2ednMKpSfzZZN3vHAsbNvxD1fDA",
  "key4": "59EHpJLgQsrXdR4er58YkvxBgSRMdmYnKaGRb9Kv2jJQDYPA3D5CGFSx21Zkao88RZ9v5tF6RdMonCyrUA5gdBC2",
  "key5": "4n5dM9SPSqt86GiWjf7dynkXVKLCABbSMHBxACbtDNcyr3XegLsnJSCMCvX3ibXQJNzfAtGHGUDzfLTCaM73eRvA",
  "key6": "4Q6LVHhNJA6NwQp3RQi3b7eAoVgFD7qzpDJdWAqqEgJqLB1qZuXJH3uVoiWyC6XXwFzzxSwA1AuPX5vZWJ8JLZ8s",
  "key7": "4fVseicAMGYqAU7Xce4rJsyNBm3opsyegjFFKFgP2CZHro1mRDFuWft4MnMJXgVHGcNeq3xat1v4w4YBbKMqHaMo",
  "key8": "4U83gBuhj8K7TLwunWsXDrFnQfa2rccYc7xiWQdkZ5qkmkqED5mM8vjN1u2AK3NV3J4XGYvLWvLmVNuyALa8LrL6",
  "key9": "2jVNCkDcdfucpt2XoNNpXzbDdCQWLgqmc3UCNytf9PM4NyhH41rNMxqnRZbxveN949bJ1KSDTgzTuEUiugaJfTnU",
  "key10": "5tbFGDPSZYxPUmFhNW1vYCs2jiRv5gVnoDeLA39s38VJqauZ42go4fF3onCajWJV3kvQvPS9p8E8bADqsjKpjWCb",
  "key11": "ry8j4vf6Nmi8qc3CKyoNaLNfsbdzdAGNb6XSBbvAAngJh9Cw7w3mayNwzVDfAs3Twv7s9WneYmaqpVUfpqnW64w",
  "key12": "47a3pB6VfzL6R3FUKiqbVG7AsVqyf1fesaYLjeaT7s4PB2gnMqDu8hfv6iHvRKQwAnpvLspyUUcoBtHkTH33Vn6T",
  "key13": "cCMJxZuSAKTWxK7fMfvevXKULeXjfriyJmXyHcbPE3xM61avB9RPwiZhkjAFFuevmThy7T6XU2U1Q2CyiVm8bHo",
  "key14": "2g4Rbj96Br9kuQa7EE7emsvFLuteHsH5Wdv4d6z13r1o4gw3n5XrJjEPiFSVTpxnWSoRPZ2SUcLJ4p4kRsnQjByz",
  "key15": "n9jawWdzSxmX7ovdk3y39cmfYwECcHnAjfFJfnVivUv4aBqX2cH2nuYJVBcmDX9V1mCuKTQgZK52dcX3L8btDBn",
  "key16": "2n9Bc5V7KVrwSoHUh19H3MeZe1uXQ4sxqCuk4VwCTtSpC4JR77VGZAo4ZuHcYTGkYK7wHJoXu8rh6ZwPsvTXC86o",
  "key17": "5KTrzQSVZ3KjnccZXUUaMzuZ2xMk2YN8hi7VeiqNo1BpXmGg63vgpamZNyZj8kJ4DArgJSqtjqf8xHtoeaMrUtTb",
  "key18": "rpVx84FaBUhRHBj6jewqojRcEdBHfoejAnVQEjPtwVTKxDUSUWi33tjGXDZuS9itm5LLrtUewvydKCQ5AgYdbBj",
  "key19": "4KjP2Y7F6LRJdMf7xDDL2JWjoPvG9M4562KBNe4SWATeEzBdY4qEFWnhpACMNVB9fBW14tSFHcBMHgymizQUQg1t",
  "key20": "Ftt8Hft8XMrjPm5wosm1LUZNx9R5WyjfJzFGeosqpK8PWLTyiVD424dT9wfpCSF1e7MHhPhWisYYvLrJLU4tSvY",
  "key21": "3NKZDdb5SDh2BkQHVmDNjVcCgqnhuS9vijsr8WLQNQNFnUFUkvFi6yJMnD235ix1qVbNGqiNg1U89jM6n4pqvqod",
  "key22": "3zyi5nFZ1pMKkiUdLQLW1Cdo2faMBdqhUdG8XLByy2souNkn7ZbgY6v1iWsPszWxhR2Q1DzXxsNAgHQUBsjMZJEa",
  "key23": "41R8BqMWJ8RzSfxG3695HAeMQc7Vf6WWjtWyRj3GEuAzG9o9PxJ8qWwdpLJ4ph2Mt3CcdA8LkyvwJueaH1MX21w5",
  "key24": "4B1JTrZd7PQr22Re9ge52QiJjAhbvoeWaiX6oPAy1fPefqm6dMGqBHeHkjWZsRFP166MySE6SstVcmnQFrVDfDPj",
  "key25": "32WLsWk5XvPaQ76HnAk17E8cppA4cCg3DLQawrdcpYvE3f4ybi4hRQ7YdGzTgwBCK2mnmPMyuSo9tHz6JhkAb9P6",
  "key26": "2bxiNFAxRp6VxUUYpMeUvcv6dMc5dxvmJcxxTgMh5BR3hgpfvnpqwQvAEAdcychpsFXEBmR9dHwi1qFLCcPN6XVq",
  "key27": "2ZcmJrePRP7DszkbLaGRf6WxqCbPbaUEod27AhoVF89ZKYMTvYGfxbgfZhT9Ykrq9gEWYJshGvxDPDaeaWps9R6U",
  "key28": "2ui23eUcTs6D5zHBqm9FtPWfgp8sxpNxFzBFv19rbZEbwJ1Jpi3mGw4pX7WyZxHp7Ta6nwUwZJrscJpttsyfEbKZ",
  "key29": "3ZxUEHZEQqS2cCypwHziBeKjuDqHms42eVQEkQrXHgPGcerVvnPhqjeNczGV7CK6DcbJZ73nUp84N8iD4SXxAQZ4"
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
