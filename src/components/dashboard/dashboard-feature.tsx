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
    "3z2sfmkfq5ULuidxnQNSbD6sVWWLpq8iTxnJvwLWq6C6JVrdjuR6bcdAv5RoGK9n2oD8YFGiqNxeGvos8T8mDFbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFsfvn1LnWYZJZPSCfbF7HeY8R1jRQXBm5CzwgdTTHUoq3k5UhY2oCo5ADc9qnUYTETqcE6ttXvSqSYffrBbugZ",
  "key1": "3DxCGNdKbNuFHXoF6q4F2qW57oby2JwxYMxNyftW9QVV8oypJo9Dx28bCqEesN1vy6wboDBxvKAwrYJzbcBR5mP7",
  "key2": "98SyA9uzaMVuWM388XFGoFGwurkwa6AN2q6DoRbkzeFCwxyxnj28ZViBCj8PFo31y2YPJvQ1TFMAKhtqTyeFapy",
  "key3": "5Z8ZuwQv2JmGpSTnrDVUKTgji4PjYW8mpwx8Z8BuLxfrDyyTt8CoGY9zmXQJWX8i49abuJYFxXqAwUwh7zZVPjVh",
  "key4": "4PbE335KiXxiYEkvPCyMJxsGHopzxa1kx4kTeU5umavCNr3M4gd1tBJpq5hNBxtRomcUKKHvwN1C4suX3iMoJzBA",
  "key5": "24Reb6aqbAR8c6QL1mChKEF3pFMTbioPeEchX9Wg3ZQf49KGSuRYjTYw4X42rTFrf3Nczg1yPhUfiteDm52gVxDW",
  "key6": "3HaTgiHwZH6grSLMhgmYjxZPBPdGJg1A5crW3Gtu3nFxHWEuowrXM5LWPqi6aMtrjtNQn7hTHYHivLiRCsPcrL82",
  "key7": "261ZUDVvWa4ob1wYWypHgsgtmL1pwserG3PsVWnpNG55DbBqFxL66HJg4PaRanGuXy45Sv8V3Vt2HDvNaMDWySva",
  "key8": "hW256Dj2GXeGkNHYMDXpVH5vNrUtsSz3UFNvXJqP5zc9TKAEQ8i14KcUqxcdn4561p3VFxUJevqsW74CWr2GLFD",
  "key9": "4pibih8ArHAj78jVVS9b2La7LUWEDKwAR5j7FBHpxMd8pE54rcQfrA51RbhJhWzVccM2LZrtMShUtieJuWeeeQpS",
  "key10": "C3zDSuMFBozbhq71YCMzBVGabkihjeaafbCSZWSMA6ksd4VFWoGTyx8MT8eccr6gt7ivK37MUuHsMRPCUKqYhvN",
  "key11": "h7ygtkYCYixu94uaHXgrJwtAVeRdaUuWEfZLUJz5xf3EkYszoxK4TRdFja6J8yLWWk4wvjh48tB1371HTUQYat1",
  "key12": "64bWxWKZLRgyWY3mKPfrmy6M7cTkREKpyXUy7jqzjwcAXMyj4x1yhbdNJLQBLJUH1PLX6jtS46oiTfXnVs3RafJb",
  "key13": "AxVvnb9dtWwua3aQxrVyC5PZ7W1XtGySert4fA9uBX47SFWUNM5EQR3UshoeogYeXb4D3RtDVBvcpq96EknDVcm",
  "key14": "4Wr1xFfidJ9tA497VRnjGcu5EM6CPQWK6fcE4mcMziRJT3W5PSPQFUaoXSs29RnEPf3oUrNQKHx3YS5a82CAsiDo",
  "key15": "itjBUByRKLwAXL7VZsgZTpZocEky54rKqpEYnGqnkQxUpxBivYcpBdQFMvM7QT28SArNdc97q8FfBCxzUB5MEEd",
  "key16": "4dQkkMrj6LCiCx6sh3gMFj3iseqhHKMjxduEwXQ5YF8exLXk7f4onKhfVHRwazVzwPWfPoFn1f6VvcFp26K4Naor",
  "key17": "5Z4eNeBFWKv3SApZKTBx1pzXqtDJpMRsGAX9y3nDLEgk7ZFQxKTw9Mei5awdZcqvFFSJu49bbAXkWXP1zsACsFfv",
  "key18": "67BgiKoH7v6XGVNXpQVXeaqYe4GKqyx3oxBr7wGqEPwsZxNztsi83PtYLvz2CqYdQ38FWADEzhXKNjCkAbLrwmei",
  "key19": "5r1QZ7edaLdS8Ak5AwDTjRHeL9yyssoUCifUpYZuZwmgQiVcLQDPF8EsAkSVckHZxeLiVJFXtMLkraM9bwohpANE",
  "key20": "51TdBwravffgFp5i29eDX3Ly4B2y99hYCVA2iDgWA1hwWaUeLGpis84NyrxRVkijfB6JRigtpgPfm5LHjG8dzd63",
  "key21": "3W6QgJv13KKPd3dpnCuqpwcpdVfpsqMBokqq1yE4QJwZGT3DkTQVUU7HeHNy4FrtvzCVH7uvAQkiHNfRyboc6VGx",
  "key22": "3KvZaaxsDobA5ZojtsQNQ2eJJ8E5WvXX6eV4Q6pttzEUkhuMt2JTeRobi2ULms3MiyGYBiM18BxWK1eVDVjg3xg1",
  "key23": "3yZLogmoLxdxisNpwsCvXJ16Z5mWB2xHexHyHZTh9fSVUkox6f14WLbhzv567psEiczKFCW8EP4adqx5FogHCUxX",
  "key24": "2F1DWo6pY7H6qEKRDJYKnPX9q5AtAYqk51xG9jD3gs5bHGozmC7u468iRy8DXC4BitBbsQeX6urJkKAoLPcmBENv",
  "key25": "5HaQ1X1NFChWNR7LwukGYEyGoQfQFTNtFjnkkFzfzoeYCmSDkJP75TfTvRrqkca5zboyE4scSbgHrr2HDZH6TY3m",
  "key26": "58ZuBj5ukXZv8oR7qeNo3U83mgXDTmN9FdcAz2M1LTpj31Mz7hoU6UTLJcBEgsK55EVCcEQC4YAmxFkyzfAJU5uX",
  "key27": "49na6ASrf6WuZw4HbMQjCEA1UeXcQdCEDNET2FLReBcFHvsfRMnohXHBsdDo2GQEr13h3NdWUue8K5veSk9GjfeU",
  "key28": "3e3i8R6jXq7cxYt14rW8oxjRQjRmWFu44YciM5Zy7kcthbpwgCmZQdp58noR8aJEAVKiaDt4Lrm6M86xot9CZVnP",
  "key29": "5VkZqGY95xQQXSCphtwKAtzWhbXQXRkF6cFT5FLXkkjEKCJNtD69HHMUa4v1F35BY4aD6kAqHX6HxjYn7Ch54xDX",
  "key30": "3SQo3jm1Er2fcADFfPDjN4benYaYoXh3Y6kNK84gqchNWntoPVhHpyYTAryhWGPbm5ciVpfboJxDJN8MWDaLyKQL",
  "key31": "4eevnszJpFotC4JW864g1Uj54Jmbs8pKQnKNmSnu7sUnggYuCyXYpeb35n14uUG32JSLi9n7tAJScRCEBYLds2Ez",
  "key32": "4RVCyMHUqWmMXv489WGeHrgWKrywiG9iJvTLazK34i1o2tvM7mydNWkwaXx4Mk8GezyQU6NRKDWDeEpN5NYSPdsu",
  "key33": "4vCqVFwFPh5EgQYet7NjXZZ2dPke2xNCrTvU5W4Ym9oTaoCBri1CpsKZPRg5T1bhHW1CynYRv1PYZqjpj2nou4UN",
  "key34": "peWaQQqV4LJuRmAkF8ng7RP899hX5bbUhk1wtpMLFmruCPiWwWS21FUPXCBVwRXTXXP2hwk4rvWn7ppxpLVPnkf",
  "key35": "5xZmQwVBNc5FjEyypHb5Gw98PHN4LWKsggxVYNDYUMH4GAN2943FPVxCvUHhZrwr2MBbHsmwL9tsjkbVHG5ahXxP",
  "key36": "42HE6rZ7texTkkYQzFD66bhwK3wsJyvLS9DPSSmfGHxNhNsvQmtJVZjc9sN5Rk4xodxWfEaYx9yBWBM2F2zGpUPp"
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
