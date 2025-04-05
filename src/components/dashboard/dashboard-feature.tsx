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
    "5RBvmLQUNnodehfVhGQ4jxRoKmKVjw33MjizYLqPviMZGDqHyTT94xiunoYXmMWzYMEHMPcer8z9BuN6QdXYmS9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1DnzDKFRuyiTmetU49paboqG9HWf2RrcJW83J9cFkQqsNEvMPoMoCv8tNRf38TDXTCdKRSJhEgwnTgPQYMN85A",
  "key1": "4xu8bCTd5Cwzy7YpPdJXAzheLvbFhUXdFXspCJXGnf23FX15LuH1R2v5kpzwXAvbL1kCVT23NnzzuUnk5FPtRy1V",
  "key2": "3sgA28cPzTdwsNYRvopYxsBcgkJtNBYgAs59kdDWozaP9hTvkSNtAQP7KWw7mr4J9pqeUiMTpxSYm2bWvkdRzbuj",
  "key3": "422yDaG3cm5rDByxtHvhiGM91ppJynGoSwaJrBcFQ1iDvURxvwutt1574KdXJnxGE767oEyAmL1EWUMFdujXnSmk",
  "key4": "3yfcetE8kM51TgvkzWZLLPnJcevmSMPExhkXvtaL5KESTUMJSpgv78skZJFEyGC1ELVUHZiwsahiyrsosgN7ZyRu",
  "key5": "5ioB3L6dFHDUT8K3RTbyTdkVejnzofxQwxUQ7kUKjwXJXLwWfeJ6x67q35m1sHhxuUtRDZQF3vi6rxY5Q3PMdkdP",
  "key6": "kpHGYFYxkBn8gKgEpQ2gahfSazcYPju9sHP1KMES9rWXNdbXLSKKUVitZvJDabch97hcYjPjUcNA6qGueMGEcms",
  "key7": "3xkmx9VguMUcBK476dSbJ5E8PoWZ5gmfAYExSDMG3bVyWrmfVGiGmN9KK4qR9H2qJ5J2cK93g3JWo9xJWaj8n6Lv",
  "key8": "5MoFQVJMLEK3iq41PKx3iMHhCRaAZPYJBdsYVrzqjMMqShLSv86voNqRRc2ecHFZqXf2XmTxiCSdBDm4mcmUCAMw",
  "key9": "2cRSZcjZM4fPgMd3gVVxNE182j5GY3y5CryJy6f3YpvFf6ch6kDMYvCeTNWu3QTJ3krR3rkqFfsKodSidEKREnB7",
  "key10": "3YhcidoEtz4vfQQAzGEuid5K3nh9kEvcomwf6oba2XEPqv5zX6PtcVVoACQRjCPVJUtN7XyqTKFG8CARNXd4hFyx",
  "key11": "3bs5qmF6F2Be7GMg84A6Nqe6DJAaWWXSzFNM9G2jc6KwGHkX6vcfm5WbFHfa4hhb51DvNTWNkR4DcwcpgRCsT59j",
  "key12": "5Dr3j3AiX6z1f32tEm6FyCLcC2CmocrpajWhxGH1RhdLT5gMacFsjQQ4BRxkPqf8VzTMi6PAn6vQE2Z8wBswCoJ7",
  "key13": "4mNHgYsbUZHqFhN9aKjEkhkQxAgR8549gTKPaHMjbhizDYJtvW9kjzvC7DVXSsAhKkd4DuT1DzqpN6FbNDJJ7yZE",
  "key14": "45iiQnRHx1Bvmyg4J9oswiHEujFGXV57aPGACVCn9tdf7fixNDrhZr8woyua4fSwEMDY8vkNsB5YVBD3qky2rYgP",
  "key15": "qBshXbzL7SgST4F9RRdMYR4eJPaMFcKtR3Su75aZUvgH8Bp2Cc961e8MdTEDo8qVZS4JmrgyZhYpcz6tHVdiDXS",
  "key16": "2obwkNGyUEg6oM1CVH7Sr4KA9nxop3GAaNcC6YFxkaRG14HdecfX1795SCEuEWtNhx2oeSfFwvfnbGMGQfZ4JiCq",
  "key17": "5fAenm7ADr8rv9LiD4oKPDX2YhQZ6K1GjcS6kwRpBXSMpDpSYq6LZAH5ENvmgJrCwZS8vpSk1ogh2M8DhRTc65cX",
  "key18": "4p38GLMTjN5ZM6ufXiyYxKEtXrxUnHi4V4F4UqtF5HGdu6fegFEyMWvZsUzFdewPRGUL9Us6AcyWLkKhsYgnF7Z9",
  "key19": "kMU7EBsg6qt68d5qbN6TEi4iVu16RbomnTnvcFxbtLSCz9mHdWfQsnNYv3bY4xLuSLTh62UD9VewyadMppzQkkj",
  "key20": "5e4r7Ruckwj37JXC95YuGfjzdXWFT4KrrAVUTQkFkzUk65vRU5zRucmQMd6Zb2RiWLSRCYGG1ofbZBbPWYPTgTGL",
  "key21": "37CeuCqZTsPujfWHGfsARZvqrVsknEtGBBb9SbozPr6uhqCdXeryt8qxgFCfGMw9b8vrm6Uv2Dxp2wAmwgRDVpxm",
  "key22": "5AGCRd1YuXsQR7zp8MsNMh5qUyWZgM3mhqstanLLnuu767qXgFhvbRPgxNH6QnryeXueFzZrTVBiy6zXhxTEy2zr",
  "key23": "4E3S3NXPasMZGLbzF9uwcjVYeqLL49Jz2UgBPiCCvqtZYGUypbbAsGsDYNAh9fAC48263kkAwN4avQjgLNpZJLnn",
  "key24": "fjMKPeARMpvtrn34jpaZwyCDVs1KysyR4kvjxrRbCwAPwCjGYbMZSEqpRXBsQ1J6jCFQTQWKavBS4WZkMbGAp3r",
  "key25": "44yPm62FPVMpn4k1frGdjHR3Yxa3sdxK7ZWq8mAFLZY2qXDEmyuUHn4fcGFZQ68ukoYFA5mCT6vpFTRVqMSGthbb",
  "key26": "29XYZrq5hHZZzq5CifMZ1caZSd4tRoQDLoZvwgZn6upSJpSAndDZDdVTdQjU99xjii2c7RfoemE8p3LAdvXDPn3U",
  "key27": "2jugS8unHzBAqxhc7AfAwJ3bBAqRzLMnT7TYtmUcg8TFnJ8Vt8L4GnuLY6Hh7j82q2KyXDuy5sL8wwTrpSNv65dt",
  "key28": "2R46Un1dQiqgh2c7MmrGf4xZbpD5sDKQq44TU26KJ4rzQLLStFA4JtBJ6zZHzQ4STrbT3HhcBxpFJQgyMJZ46gXv",
  "key29": "3gGBJHvADNuSqwbKKv3N2junhX8RJWNWo4khBCHiV1QVDjeLeVNTYzaS9qYjL9zGmPPWDWGgfdTtKmGW3ZeByQaa",
  "key30": "2au1MddUbT6A7iciG8snz8XAoRbMEQQFT4di6U6abyhwHGb8Wk9pxH3Ddp1jj9aqR1iyxeMWMkxQSXr8HqBS1kqQ",
  "key31": "364SCu368HJtD8fWQcMtZ8u1xRRyK3KoLNgtv6VmnxtTN59Fc6H8GViu3NbH4rWGxgFYcixxLsSLuT9EVq2rU9ep",
  "key32": "4YBwJb2LURqvz6QPK4tmbGzr9zoeXLkoL5XDoK5mdBfJwmsvctbjzDpHdVivJ9yLK3Y7dX24upPGHZJsZsdvjiND",
  "key33": "3YPVX1rj4wydSU7mQik7wh71qvajDYZYpp3senx9GFHR3K2ymxrVBUvq66hSAJmnNJWiZsYADsVQaitXVWJMKu91",
  "key34": "4JsPDWQfs9VmkQrzhCX9thbT4ds8AfpBFrT9ZuMGjZk3986HFcxYWxvyzvz7KJFbd2B8hMTN7gFiBjKBZrLTr3y6",
  "key35": "3CA9QyKsGbGFSx8acMS9osvRaDKdLXGK7AJaWvUoDz8e8i2mwh9capLBqUejnDAxhUbrTFKMZtWR7W1VQqd5TqES",
  "key36": "pSeHKWTMdpc59z7cbVFiV8r1S5N8jtAsF3LWyg356DqjzWm9GunqEvYHFTHA7r5EWhYJmXk1mT92Zh3CZPJz5pX",
  "key37": "3TbHdQrpiHYrR3DGYv3qfRAsBgqiaTsnHAthsXUN4VYJwPnygEdqQBcrtMU2QYHMCXz7845v7A8V5xzEYQ8RuhNG",
  "key38": "uBAANq5S61Uz5jzrc3M7uMskdRBJLLT3YJXpxRYRwAdPacGTfzCNcf4qjZMnMjNzU5mMDEbDbYRTb3cmRM8TWmA",
  "key39": "5w2oHWJX3jJ4Wxui2qCwC2rDBzWdQCMBc8gj6kD7adNiEKEbptwR1yygxp3qKhMKv6asxZCXmNn56nbQt5uzGxR6",
  "key40": "U46VqPgTvgk5k7UBJtWzo8zsbufxJgpAkGqzoUJJZ14YcDFA6FkHkxGrDcApQB4mqasZ6pjSpxMdWqDrQrz1Uqd",
  "key41": "kcM2TNSzPeeozgTbtp5mYsouEnqALcFvC4665Ez6QkB38saXCgxgCvp7JcKUEqBDZqkw2iNweEsWh474XzWFtoa",
  "key42": "A5jbLSizcHd23yhhu1zBTK6Ssq2Xe1WctZYA7Q3VE9G1QBNMDV4YAUM81rmYuZ32omUJauVNp48F73xexdvTC15",
  "key43": "k7U63kGwUtTpLMxwyJ8q5PyXDe6x1D22oGu1a77dD1zSpKt1eTSExpHGBvn3TPz2WwAqovQYwiXi3qafmL9y9ER",
  "key44": "5zvYtZvGnVSCGCT7FR6kQiLiZzmnNm4Xfs7WJLMPjpe6DPpVNjew8zMkM6DvtWzh6mnnTBJc9GW5p6TGhMrWQE2t"
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
