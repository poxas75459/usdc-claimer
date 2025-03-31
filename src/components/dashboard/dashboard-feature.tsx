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
    "3tsFfxsXMrw8eQQMKjJtxaY9knXGZjYkTD68EFHVn2wPsuYkMwRRusrL5AASWpWEEMqLEkJSvecUqK2MuFNfG747"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNrKa8afkBvYZ5aUtJmv41QDnZwJRHm1nDvdVzxxFo7x3bsmwpEiG8xgfwhs3L6vrc8dK2TNw6t9o2FRRQJwCvT",
  "key1": "4e9t28Zcou6Qj3sakwGVSWbt7BrgwGTqAgrx8m3422mowBeMAdeUnY3XNwwHXn9CL6XmyA6ttsusNFWzMhM2xE5L",
  "key2": "2xnTWmR8AicsaCUDWV6fiyW2bFcVCE1GfHJLkP3HmWDFYBvHLsjWTXdy84YqfcGVDD9SrTC4tKCjTzTZBijgW59D",
  "key3": "5HSFZgBWDBckcdHFvmGozWfQy1DxYqYvhev216bD6EjHMCc3YNQ5tzZyudwaQDVvRTKr8Ui3ULLPNK7EeSDaG1T1",
  "key4": "4uW89LNmf9yByT51sbcwxheJPCVU2hfoPKFfoGtqCTAFWYo8FG2P4nb3nEJKzHLX7nfQiHUJcWngt5YcGVCth93n",
  "key5": "4QZ1qeia29ckiNscn9jRow4153hurZJYjCoJtKXGKzejvoTNqL8Ry9nJz12dcJjs8FYkpvyQcE8B1YkikZrnVM9R",
  "key6": "2edcJB28HBP2enLdQujydQuBzKBD9neYtH5yN2etaeLGDVkospr8xedq6Jdz7xUV4iDHW2JKKzHYonthC42vQ2cq",
  "key7": "C6dzFUAqhja65oxxVJwqb9tV7QcHf1rx58vzg7uZVbjXVq4WmjpmAFqNgfCRmJdXQidp5b5hyCWhiKWkGkNhz2p",
  "key8": "3yRe3z2K51VegpkqDdYversPvvvwcN3JeGkD8tUHsRKyQxHYhZnCGbBPTkFHb4TKTFGQZbw98jmQjVA33cGWzV3t",
  "key9": "3sfcst8SfWX7qdGcZtZ3k8hq7gwyMso4tPQzYD5LQh92HsgVKqwimUFNFb5X5cnfyVXa4YsSZ4mPRY4fJ86sBdms",
  "key10": "3WiLRCXQLeDxqkWHKwmCtkMRPSJxTs8BXRKchzQAZp6iKc65VGTQoqbPyWji9Q18D9H88PD7bYojTMgenBpDk4aS",
  "key11": "9ghT5nWnLyDTfS3JmfCLiXVNEAC3PMJV38W4CLShmVzedPuJxCMBe8XeiU18oa98jb8KnVRp9Jau53ikEL17Lyw",
  "key12": "4ysGXXYGzvZ4WnjbALKYxqKifwN73wGzr1gC687q5hT4PBj4vxkFpJTKS7tzccHgw6SoPhtKvSaCePGAbw9WhB3k",
  "key13": "4RdHbCZzge2wjPvaa3cRCB4iXdej1VrujHd12ZYUmFZ7p1LjeRuJ4dSe13TE7JGkn1rk95U8pmamDXuDbXBzyCgC",
  "key14": "5Tv4XPpzP9nsXUuicyq9M8es9TiHpXg4CH8dNZ3mV4mGQ46nPzy659hnvx9HYo7ccW6bM5euCQ49R8WTDVVKAJKX",
  "key15": "2ueb5Ttjh7cEqZ6uUzFsjs7Y9PU9dw3sdwxSMaGDFN9PSs3FQvZbnSu9AeaDGQEpFiGiMZyZzhpUDYa6YwLHJW6h",
  "key16": "4aZ6aBShTo8kuX25XVm7KfuqHTNWNDUBMCGzaLMHnaqK9j8Uv7WxYFsauJua1jmvvLBKTcbudfho8nWqkhkuShbB",
  "key17": "qZ8tqMtcFFLGxwRQou1J3Yzj9k1q1EiKEkJ9bh9iAWdsFmvDPmQp64cxURa7ZUmHAMtyecx7NVWTqRNDsobgEik",
  "key18": "3ihxt4YVb4cM4STsAWWduwmA7AB6PtWhSoQxcHRFXLbv8qcesW7CB8sPveAFC12X1f5qJS2dbcGuS1gTdYaGV3Cp",
  "key19": "GodagvwhRcQfNjsjSVCXfe1xW2PWJ3k2KyhV24qaABVC8WiBYt6dqm9Ppg961xmJrJRVZo79htAJCsyFinkWdH3",
  "key20": "44fdTiUoKtrWLGmG8N2WmK627B6TBe5wfsbWsdMzgCNa3aSfL4auYznE93eXsxxkJaM9iLTajxH2gn2uKuF7kFaN",
  "key21": "54qzc1XbcYJPtQZ7ezzW3fN14V5X8p2k2LvBVCftUJWwch5LGqLAKNBnsM4mY3U8fkJxQAp1SRjGs3RKVQ6RGcHA",
  "key22": "3jxmSTCZVoPJnrgw2qaVZ4M1VXzGBYEnPvEuPNH9XnBxjaUvznBAPJ6H1o96aCq1hKnRfZu935RtwZDkDTtNx3im",
  "key23": "2HYoqKX4JywsNXNv1MMpV6kEZv1H5DG6N5FF1ykxrCDzarnz2BkaZcd7ZppjdxqZzzB7k4qvKhVQ7DdhHM9scDLH",
  "key24": "4765LzYxHAffpDiPD42fV5V9NH2FoH6WBJfR9uytYMnULVnx9ThWcK8N69xqH35FKchY4ZWup2FzuHAap37Goi1M",
  "key25": "2kb9J4h7keS2kqhd2nnRxNXQCcUnBHpB9JnS2Guy1LvkxiBvZhmH3hnPkEA35K9VuXHdMKUQ3J1J6hBjD8XXmcyY",
  "key26": "577eSR6PcpVAQ5DtdiCpFew8weWKZtkHvCXRbxBrwoxcs51fRsTXf5jNXdCTjvfPDYA4ARZfPosDAuQo7MnmVDd4",
  "key27": "48GCfLdcVnyMCzbWo4KBWLTA6EiXuPHj6dkbi1vpuWT9nfY7fp9mhUyGYgVjNFbmhLFhY5QCDExtXPEQKENjAZzX",
  "key28": "4ZbFYHKbrAeUH1jq9B9Lj9pEfoFVNsJifmgka8DS3grb5HANNBvL1G8VePFELfxS5qrTGxHNun9Y5Kc9zbrAKBo7",
  "key29": "5oKnDWE3gHiJAAF6x9FAFMeKBJzHbd22oYSjD4J4mEHTj8PPyfRdbfnsFA77yzDTNbZSb8nqc6vZ9WBAxf69mm6N"
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
