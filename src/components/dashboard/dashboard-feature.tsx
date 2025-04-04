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
    "5wD18u1hXxYxyKLEws89zzdA5H8scGEMiBNHyUYYp9NXEUzotd5yc3r4LvCAsa7BgQYUQwD9MKXZaL7JbTjhkt7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aGvVY6A4nSySxnx9Dwrv54bfDqop33ytfGsJ8CpkucVaGAKw7KU2WRMHkwCUegdk3akhiaLfNGiqpkKfQGw4n86",
  "key1": "2NjLYaCP3ubA6A3wRHUa4jMUrYtbhY4QubErcBLYgN6igJwY3nrEx7bLyLhE8N9rGASzyf2AsopJSGQvKFvSiMAu",
  "key2": "39hyrm5RVynKS66e1ExU18rqBAGpJzTYvs8Ck9meyMsG2wxqTPuNR2SnVHCBWLrGE4cf5tyQa42unwGaJSuv4G69",
  "key3": "5UMqyTZcump9QN74kTKg1J7YieK8cKxKAaK9xMzNNKwiPBDGVe3by8Ut5ReAyVtZV48DwntgD2iM1athGSFku37L",
  "key4": "4AfBrhRapeWcucynuoAttiLsUNG5q2TJ8y4BfA9wrR7A9rCv1Qpfh2WGqG5Y6kcVmSRZawMokE4xVgGk9HybjUpV",
  "key5": "5RvHgKVAxkoHGV369DEp5yqWYkhqCNYoAYNurVhACxfAuvUpyCUMuAGg6Vqse247eSnywTjaCF2j4A13iKfiQXuJ",
  "key6": "3QAQDjX5cnX2nscck5WbYvC5LgdJiVrSVK2pW5dD69U5orDsmXwfxX7BN9nMqQRgQN6qWFU4r2DjwBoA6LY31ECB",
  "key7": "VnD25aqMj7cagmQkkvWLMeLhdpWzg7rX2K1LDKKrmFbonj91vDZ6Lj7XnnfY8qrgbxAgCDt5RjH5zfxZXeJjSCf",
  "key8": "3WYwFXhnnf3HbYRZAm8oLQhZ89oS7mupi6VGspVFQuaaPM7M2xLrD89ApUZziyC4RZTyvd1sj66xuzqGsPfhttDV",
  "key9": "4AEEFCskYb7DoXEmJpUPneGsoLn5kpt48smy3si8oLDhEWVi9ffMDChjNUpVr3MtFr2p4Tgh6JMpQ5aVH19FGdFF",
  "key10": "E36bZrostVHSZb5Jgq9bAXSWwM8SRtBKArUBLyxstxTC95jPNbTK53iYN5tAopLdLCqZvwGYrnwsN8TUXd4MfGu",
  "key11": "t7RMe8eCBijsbQ1KdnGkH5XQdAmWJUwuHkCtXyS1iPB6XTLoRTChvd2QsJkeDWL3yE8dejeZUrracQAEAg9nnFw",
  "key12": "3FYAS7LnvpNQHqGZpmSoFyoKR7bLYoLVS3E1tf8CYZTuf4XjxDVozASmjEdmADR9vN9jEba6ba3hz4r5QQvQEZtL",
  "key13": "5Tik8WhMbmV9MocgCKm8q8n5Mvf4jt4jZsGMqLj5dcEvmQLLqdaJct5dZj3Uo1yHezx3BxK3wucbobsBzxsCtt1h",
  "key14": "4ezcYudMqntBgKoP5AdQR25UBdNhBtewTzvnzg5SosLybjvsd7DLfXHZpv2hcCAsGUFnkxH4n3sYfuKn8B1SGrxu",
  "key15": "49aMeGg5KAFJQNYgRnLigoy2vSSUpc5xu5YS6dx7N8rpdpJ9AmgjNuVp9fE1LDyBg6e4Rp7G7tGkd7ef2qZjsPF1",
  "key16": "38KTbEWvDCMxz2fqjh7m1kSjg93SSu38jHRTmrwrD5C2pp7iogeXzfpxtt9XczCLUEpsALmYVPxqvFRWmpusADLP",
  "key17": "2yz3CRmthFnurBkkUtzfEY4v5u461FtBs3UXYyFRVQodNGBJMQhnA6QrHyvhaGapjNsN64f5equnnmSmXDtGcNAF",
  "key18": "1Djgx4mk3ea9DfTxoR9LZcgHhM16K3TzHbYPUmw9WDrEDq1jPS6xW6wcv5QwAGBnLwcRHeVyyfQnpMWFMZKLv14",
  "key19": "3EnQv7ifkdfwV1FuCWM5shCcstMn3eYFr1oKeAp9Ndkt8sR7FHoHcufpbuFrr31ZGf2FWAGeULgKYy4xhdFiJePW",
  "key20": "L1C1zyY2DysdYVzBj2hYY8BtbgZQMXEbGsF5sDMJK3rFfaxc54B8z4uYcbzp45JCwQj2X1VfrGWaUXbZAgoHL6G",
  "key21": "VDBuKjThhsqfhLfh8Q7CpD2wsFNK2GrZRx6FKCoQk2RembFVUPEPGiYGC4qcrDbp1w1NC5HUV2HF7odcgpFLKSq",
  "key22": "4jU5XodNGQpgQUFmvPypxU8wyis1rjqUn54STbbpwU1RgQD2rJPMRHYMybTzzUnvNR1tjxZw3vpds6FJVFXF7g6r",
  "key23": "3ZwBatUSRwMYXY8UEhmCqg4o3XsdxK578aMeVrnQ3YRLE1zoDBft7i6w5Ct44GJZsbwsWNXmDMDMHe7HZ3PWoswq",
  "key24": "2M5QeBjTDzMnMixRgEvt6gbs6KUdyGZBwR4cVxcNyfxjWtdq9v9sG4KVyDZZ4VKaTNQn7AW6DxB4oKhuFubWf5bN",
  "key25": "3EQiJZYh8bx3Y5vVPH9xnZYfsqQcrjB1s2ad887BcMBu1Uv5hoXXHrJJeBU5xVYpWRGwaFggWS2LrQ4pngmePZ82",
  "key26": "2iahDK6tiXfYmE422RkNSCSyhQfDPDhueYWST51bwEwneSFV9AA15byjxDGrHaja4spTbj4KxAEyG2LWK2Tc5rNm",
  "key27": "4o9E7PADJ6Dor2s9pJWEeyxGWJUnYBVuwUMzVAT5UTB79aYLrBHGQTcJutDCkXGA8HPCEF3AgjEs5rJXrv3YRfvK",
  "key28": "rcUSjsVXwQt9NvFfBMkRph4ocGFVBLrucfuHNApEd3qPe5YXDRVmzYV9FBQKxsQSC2wa1pTBknV7PiswfGkWSTw",
  "key29": "5j5rxx5uLMTjV5SGuyFu7vxyeUK22LXCG6Qvo7W5GE7KK5XBmvncqDrmvRZFkcZaWfp2krhbyS8cGjyEuKqEdXjD",
  "key30": "51ChSJfhdtYea5QYEBxX7b3MaiKEuiAHgvJzJdB4mMhPDuaF9pF2CbeXakagQe9rexfuCey35Nwhc1z3B674Td9J",
  "key31": "497Sn1dKndFyDdimWLtfhg3tvf9GGjCsKsGUWnM3AwmNkW5v2mMgBqhQCqYxT9DKvD3JZE1MXAVEaPaCsqJo3f2V",
  "key32": "3pYRBquLEXhmv9VXfbRqcog9427gNgAPHbfLAARkHKqzjE496pY7zyua5U3dLPaguLgCgjQTuwunMMGLfPCagxKu",
  "key33": "5CCDYNAUstQ3g3JD6HUBfFBhBxS6eaBWKRAaX41B57wQcDFCK4H4kdZT2mKdHpLvLDk82DUiqaYKyW2tn8JyCZXo",
  "key34": "52MgD2KKVK6DtWazFCKNpNXRyuEaCqBbh5myptxf8XBXdbKZJ6jFrzHdFUJhDsocLZ6t4i3UkPuxsuWzFSDb4vSy",
  "key35": "5wVQ5YH4MBSUXZfkxSZEctNhLjGLvMbuaGMejCd7afXRMh3FfNGnuufV8Z8oqQS5WWwrhxspto1HXe65x7Xbtz4g",
  "key36": "4zwGau1zEdUCQwDsQ5uGKXg6qSP4pRUTbytTvHtnvDfMa6oQHtuSdVHHeegkHNtzXaUiDR4nB9cuT8ybC7cugRno",
  "key37": "2mZqYY3jRRWqcYBBQA37tG48KV5ZSo76p9f5S9khCnYuwY5hyEq1VhamxuhgYJs1FYiqkffWN6DdAEXJQ3Fhcf2k",
  "key38": "61YcCkbEkF6DtGW8KnpdZKSyo8y6Pvf5ibw2SPjoKu3fdjZtMuGzrrHrSARWo2wE2w7KLf5u8pRrdzFXNPmVQMbn",
  "key39": "3LuyCATgGHSH6nbsRHVg3Da67k9ASt4VDxQptBAvM1banfz6kxkwY4vpL1VbsVs8fyZV8zsEN3WQWjZzfP6qrxPQ",
  "key40": "3GMkqoE4KMWR5xRXGTA1Y4RKBVyENtwWem8QWkqQBFpzcj5hJKF52wMWMLjq54YTYNPYLQqcrbfFAEv1WbSfzURV"
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
