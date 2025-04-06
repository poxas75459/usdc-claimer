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
    "dLNWDhTckfrnbn9vqx3ywKriZUpqjRBjGnKDBGjQWDcKDDSFHdKnQpknanJMXEsBknDEGUstbDr53rTQJUQHUpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35bjQMDPaNtZJTtosu7vHNLA9Qz7HokeY3Sn5XVrMaiEzG6Nqt8hiUpHa8gVR4dY2LexFJtf6DhhBKB42r51wVnF",
  "key1": "5vthE23WZjAYu7VebZMCzWsF3xCTYEz94yFFnhwmAuf2FmhARawF5cz8sAEr8i5xFmFZii8Kfaj78HZaUCYTy8i5",
  "key2": "24aQ3LqDDTQvr6FvzaZ42hvR9zG2wtb5o78Nadryi6X5NQuk72CwR6V2S56BUWzi8hP6y1525fJufQV5CaBksuRm",
  "key3": "3C2sfQJvP6rLwSLh2vGBhRZCbEabs7vBzRFdTX7dxWfmwwYNPh6W4rqhRb4cxunxNHJ4jPkqG9e4x1iWkYruEhCF",
  "key4": "VJMZxLZzLZpbTgrC2zpyfbv2iDzcXeNwLx3mRown3P3vMiMiTo5fwwxXXemmTvPyHCpjGx9uEGqvKH3ZhSkCswX",
  "key5": "3HzcLr86ad7RnZPnBXYGh4saQn72WQT7xaDrkxKHeAonBgFnFBHTK6xUdpNHKWoFyY1cqWLP9ftnjJjKPkCN6sDV",
  "key6": "62wkBoUacCJdbQidefraYwLgaQjySKUob8pBhT3r1RaeAhqc7kvQw2nJstt7xGnRunSDLiymDcXoXMEYv4gekcuF",
  "key7": "4xjw4ZuhBjUVxic3RxvwFQLvETJouSURNQmKw1wguwjTaqDK5TqGvutk4Z514Axkno9j28P3GFGWYxWhCsj3zpkW",
  "key8": "3fLKZYTEMkQULPVZJf3FejVJZ9NLnix3HZoVQGFSKryeeW9whboB6qncBkVWXPKDkx7Re1LDsGa8sfWmvN8e7LYg",
  "key9": "4R8LRaAZs3gWq4dhsJxduqhdaVwHvfxTtRwvbkWzkbKjUFm8FRjmCFrcg1GCxa55DvoGbKdaWqVERDxCQuEKb96B",
  "key10": "3qHp3EYmGJEEz2mNyJ8Q7CnR3N6XzuKBsayoQoxJpYRadFtrWYSuYLk2uD3QZiim8pjAfEPCePX22iDTzqvnDWqi",
  "key11": "5fFdVihAVnHRmwkgBrTQUGtCh7uLi8PCYpXYL4kvR48xK2Rtafp5tqq8BsWfo36BMR8BbXoMZKHYZqBKVyHwYCQM",
  "key12": "nFSmYxFT7y9VzYqoLMN9EiitAeujpQAfKE3Ej3a8k1BJs8bSD8zQbMpe53h6iBkx4ZZFizmHeM5xwStq53sfRMw",
  "key13": "4TVmdyJVbk3LAvnXWXqom4KwwM1qW6xm4yBZwvz43nAhmdkavhqjx3jHNd8ecvQ3m3Y9QU3DHCf6SvjvxWwiHUvs",
  "key14": "3DoyFSdVHjRiKzbxa9Jsjv55RSLKvmzUUUFBWwkyq1hUGDGC7h5CntwXvJBRf5czRbQ49JccdEvx53aKfKpFnTEQ",
  "key15": "3NExYcbTgJfMgrCoctUvrnmR1gxLkBYSNKJzT2oUWjTRBfCiUASHrE8XBj4hshk8B2N4HekCi6m8PerHs9b2q9Ec",
  "key16": "3VWV73Vek3w47FjthFj95hepPLFKLof3vv1Y3hiGzppXXTzeoL648aMpmSwP1U54NA7J1u64bPevepNey8nMHnYr",
  "key17": "5safdEdy7kb4Cin3yApHeADPwvmuZN6qc6i6cNKLcK6V8HGXNdkntZuPz38Rz4dUDnGF5vBDJb3DdaM2ygPqhWgL",
  "key18": "5rBxAuJHkBrktyVazCRgpufjQTgce3CpgHZAFiG9vwEPvScseBFCTgygLSG9zBf9w6mZonmmhZ3JkoiBqAAVGy46",
  "key19": "q1DkZdPnBVbqtLPDNaLpR2A5BJSD2VqdFoXfF8SBg2UDwc2eUPLv1FHS9hngNC9TKx3pUErvYdRdaME1MEmmcdd",
  "key20": "4UtdnqEarR2o9PqKeVzrkJVjynFHrmF7aUYuHfBv8wj16nxH95bJYLooMmnufEwFQKaUgQNJf9gVWqYRab7aPoiM",
  "key21": "y2DaH3zs7wg36tx4Lj3J4AXwoJgWTnEKTvRwxAzxjLtYnuqJzQuz42fBfDaF5jLjDTkk6pTrtXCNX5QMqCkg4DP",
  "key22": "5MDsehy616ZtfF7con9enkAwFb92RXjpTWAEtXxQsDkvTrsPtPw4rFmGtpQdBMP8gj7YvrjdajED8qvTTfevKRo1",
  "key23": "25PWrv1JVHdkiSpjVrKhDoQsDZjCyYEifGvNdSmNJV57Pk3kKeK8ZGCyNc5CnTMqr2ixuiP4RPfMGjMPMFG223QN",
  "key24": "4jrQ4KbFPzRpwRDkiqiqgeBMtaRnwWWBd3o2Gx2LyPhssMUHdeoceGtRDTPQoSRpXRZjeQLbmpi2zo1UzPaCeQFM",
  "key25": "49DnzPCdjMcAjynvuXafDBUSyQTy3Fc6RFGXMX8PAiQPLa6vAXf2qAJjdRefNHwiGUNPZvXBaRC1VULNqk76Gj7Z",
  "key26": "vkGM8XVXr4Bwpw7XK1koSymDEL6F3VKJxZdZTGZQyZKTCZxDrajiF2dZVecX2ckcMcgRpvrzmy6nKV3RE2MnRbG",
  "key27": "AQZYVaSi6qdgobw3EucMgvCyyMaVVJ4yGRzvZWxwHXoRdHZSteCkAV96YvpXnLhuYzvoDKzMDafEKy3DGcU4Pem",
  "key28": "2gSYhzYWWS2dkeYBVSkSzRL98sJ29nnE5kT7mQAGvapZ1fTNw5831rVkpxqCZzgecJEKruo9pLFFti1a8hXYerTm",
  "key29": "47wi2qwszjrRt2hArcskavHpauHv8g7bzMUmHnAyXZxBZ9rzjKRRArP8KWhh1kbo3NfdRoQK3Rd59EcBnBe6PtSG",
  "key30": "2sg3VwBoy5uSeJTLKJLby4CHvUa997YpjwFLXHFrdaMviZ9HARtTrFFgLEYe315HDPjjYx2CBYob5j7Do5o6hda9",
  "key31": "2hfmMpJ3bzHyCoxmrTQcEQAueUPSZRL2kCDoxvYnSMyd54pSBaP9GQiCpyhnpVc2FLpHbVPCNgdsfVPbXwHBQBm8",
  "key32": "4QZb5ZP5pD2YeLUirwV5x1TzthA8WjQAeYpr3GXu67QEnKqsGYzBxVXGjAUDtAPeMCnzG14E5MeLa6g9EBi4mG3E",
  "key33": "47jiDNkfGCdbnZJ9fsrm5q8F6iuGciVTSXA1a4a9zp27Ap5biggwwQzzbg3xwaMaEXpevubCmzcawFi6pDCffQJH",
  "key34": "okADejiDAhNPzvPSk2Wz8sKPDCsqVagjWcdz9UhabAqxecoLzkSRMbT2rXrq9FHAa3pnc4rtkiAmKR1sw31Vf6x"
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
