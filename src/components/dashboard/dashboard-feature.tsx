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
    "EVqZgj3mAYdScNh8Pi58u5hpeg9b35fbDeXKXeAr9tEbprbXfQ684qkdQ4egqh2wKz3DYoudQ5icrEGrs2f3qfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uJJREkRp2pet59wuK3rmiao1ADR95AEPsDT93DHv1TdjFhtceJ5Tanf3hqcUiE7Uc1yUU2nxbEGopKPMh38bC1r",
  "key1": "3FCGPkqDtuf7Scx49re9fqtf3iR7Ru8T2y4jAHscrkuuaMtvLmHLMJmg1wHSaPxxq9h64Uza1Q8wMYJUJSwr4qNY",
  "key2": "3R3K4zZN4DmgyRNMwJWV8xDfydCe9R3LZsgo35qeAPSNJ3fuYKx5UhmB5xGVnfZx3q3AE5a2dkrHHqpLaYaN4g12",
  "key3": "54RCoTUTHU4FWZRzZtt7kgj6bwptKNwSJ7Hanhm8MK8ctLuWvQ6TgmnTBTGSpZCcxEMNJ3GnWGjaFiYarnzErZnA",
  "key4": "374oGKmVV5Fp3XfkytdPt5fstZAPxyJe5NpPw58iN9zpgdVMTgpr96SGEs8J8jgxuwC4JhrETnGnCQEaexnK8w89",
  "key5": "2ymXiMix5fvs5tiKRHP1hFyFR9nV3UudHgXQWQ9qcnedAsfFQrTP1qdPmKT4jp6YDzMCb4VsLrDeMX6f38oyyRqm",
  "key6": "5aeYRfCBf8XYEGK28Keyk8ub3FBBjdhjvpSdoK9tgtWrRLjLEECMw9BVETbe61uZ9e3vdKrdLqnsAbHQEqqSVJUX",
  "key7": "46jmEexQutkcc3xKBCEcENfa6SxqA1ud4SusQ51QP1T6XDjZbi54ZUFqzNTt7F5cUAWB8PYYk8q2RcC44YAd54jM",
  "key8": "5MBNzsRr8xJtx4kooP6iP86bjzVQBX3jUm5dCPsfY3GFrRjh4dw5x5HDHMaQTjPd83va12C7WpW6ZU4DoLK2Cjm8",
  "key9": "4AX9ihst9toVumKdmWZ1NKXV2DGCCsi1XpAbqHds2Hpy5WnhnaVQGXqUaj8R9KaGH6VZtQTMD3kk8aZBcKvRp7du",
  "key10": "4kdUpwhBB8FnpcB6XZRsKoo1z2ZYYwk5okDrfr3ZE75rKP3sVbEPPht63T5N4JE5G5DA63PysrtXVAHb1rfTvgbn",
  "key11": "2NvAFtJAD4hFKHkYYXJ2X9ePDLPKyjZUqy2EV48vDC6F6rqdRz8hzpuUE9CJGX7XD7m9sK6WwquG73Ty6UvumPx9",
  "key12": "3cf6entAdA6yT8zu1jQ5fyoLx2cs7dYtkiejWFPEmopKepZEnwEwFZ7FZ9p2MbVRtp7LpVUgSDnH1HM7UE4RUoXi",
  "key13": "bhPF7fukTiAU82YgQAn1nz3wx8YYHyNhg1rqn68nsWNDEfhKQsYgzwXi2Cjjuhz7JrcUhQ6HmzH8qfcdLT4ZC9X",
  "key14": "5XFQSxw7S1yLXBii1oYf5Z2WbfBzdcA74HuRkvU4Tusa7ngX2rWbCUVfPAjtb1qtyf52HSp6xY3hQX28XzSLys7Z",
  "key15": "54RkRp546SQyqWhm42pHe6K2bTtbUtMdsQhn27jh2c3LydjQJzCkqGHuafXXUZv8i8tZUQRtKWq4CunDjW1Wwi7X",
  "key16": "3So8eRBN17StbhV6puLaYnrMvzdFgF3jrK9URYvAv1CGvJkz71MiFaCSJBbFMz2zYKvaXtdyW6kgpwHvmfViZSrA",
  "key17": "3KDSEtsaiu1vgX8vU7ofoMTWXM3qJDcALfo2u4VG5j3Uu3pKSwMAgzuHs6cXxL7nNBe35wLFvPEcefpv7kscDqcv",
  "key18": "3gMtD8ry97jxmaAAPwGTgRcDaaHYRXJS4ckEUDg393rr7fbn68421p7UvKS5SvrY5iXZKzdbNrDrXYFnusA4KQyS",
  "key19": "2bDrUgqjbXLUCHwkiV7bS3BKBz6bJZRK9J2MgayCFAuHzp2oyXr8ySRaQoRYv9743HmHaFtnPQw1FGAcTBamqgkB",
  "key20": "8aRGG6nvFtjpQQHqe7toe8SqfvoWk2dJZq29rpNPqe1Nt8S69wQ3VwTLz2qatuj5Zu3Q5Jh9ESQgvXAev6jJUnF",
  "key21": "vUM3KfV1uzfpd6hLgjyYK2FKFsvt7fgQhSTU9Pr1QaecMnvVLoq3Lfh7duBcBCm4biRZWssUyjRukChpiHtmnb4",
  "key22": "dD1ktdwaqBFcF5c3hNAhUQWzaHd3u5KzrQ25vRxCjJgGVF78EnHTP3Uei8P3y4JEuxHSGBKGLi3pw9KXu4CGuoN",
  "key23": "2omds7up5zn9SgRPCZcD2Lt44vEAndtxcYkV39wLBgU527pSFhH4qq7WpHj7HUD7CSnmnQvTTaMPTBJq2g6St5jY",
  "key24": "5YaAnokWXaPmU3ZcvNcJETZneiYGjA3hxBFoxFYPeAWWTNSwM2mLfVvZX7za6BWSCyWZwn7gNP1J4B54dYx9zCb8",
  "key25": "4AQ3eC4XNmMgtnPes5VYwz4HWwUcy14Gq3zZ7fx2FSQr7duKAvw9uLRx5N4wbk6C6cpqikkLLXQzokSavj1B8W8V"
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
