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
    "ynmC5DPzHFze8fefSWwWt5LWV37BeFsyfLquQEU9pdNrqD67h8tbguKHmjuve8SXsmn3Tojb9m4baV99iPtxCk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VxP5rbEw6LLoTKs4oAr4yPQpyyt2LNLU2DLAWnJzc3kGiNi54JVHowy67mNTNcdrfZLjzFzeKJpFuq6nfW6636D",
  "key1": "wMc487hGhEX9VG8qXt9QHzZbzLrxKS9GwuBGAqHGZnGaLuavrsR2o5ivkKeoasX3VXG3gRtpax57ogKJ17k3K9x",
  "key2": "49RjvyEZqtChufXA6D7GuM1v9oW1a58r16BY296bjYrC2XLGgXSGKvZq3w1MmXKLcNpBAdstL6ZAXTWiD8rwfhWU",
  "key3": "2gboZAJiWWnMuMBxGpjY9jNd1KW3YnU2e9hF5J77vC79z3XC92b7mfsqqatqv6Doai84kR9MhiadJwMABnD7heDX",
  "key4": "3r2iaaTCYSTiqNYDJAKfqe7mt6PYJGq3fra4zv9p9yiUhv3zcHa1teU6h2B4oeaB23jngCKdtHkHdTFdRE8gANuR",
  "key5": "3162mwwiBMVtFo2mQ1kpTmoZbszW7ztX2Mmi98u3vqQMP13xeoitkyvJuUcJYzGKj5Sid7RSP66K5BkuFE7f5wZA",
  "key6": "5561w8E7Fd3qoLCw7BKwPDbfmDhMN6RfUZcUrqQVNUYAddoeAdAyTiFQGuVzeGKdieVx4nUZTRHsJxcYdnDnhxEr",
  "key7": "4wSt6fZaRBZ2TCoUz4R2pMDo2GVMyciJohCuJBDWieh6wEZX8YFjzbfSmwdUUsBWPHBzLBikw2RPGPypQpo958N4",
  "key8": "scDg7LT3hWepZkhRjZ81CsrHK3DxBKBPXPVWNhHNunQEuk1EJhtqjRcKRh6AvthYqyrhsLFbjRiiBbdeaDTaY7D",
  "key9": "2PeSTyRHiap4k8CSkZKsXqAzYSSdiat3nKVcGKmoLizme8iRVd3D1WmxvukgfEyt17vMfNPMfqW3om99EMruJsse",
  "key10": "52KfSAPPjqNdnQ7DzoA2Bv6ocMJPeRrYfGQApoL68tZ1nvM14PQECBH9gSRx1w8k4zEou7AHmbEhpLEqjAuui2Ky",
  "key11": "4g6p3Jphn96QGsqyZ2QXDghnzo5ZVGT5ea3i3oafEtUBB8dXQqxFh8dcK5F2bbbkKYTV5chSrGgPANt9PzGFhBwx",
  "key12": "2gRWcMkcBD91kkqbPkWWgV7ihuHVn4y312M4dyyLDksxRk8EWCTN1thiSyzZPZDT2ZcfLJe1n9vy6JyyNKx4sFqW",
  "key13": "d4MhPJQgQMmcujWBfg9VBqcAiBSXjpras2FCRzM1mBZepCxvrqcThn1rRceMJuHjsvZMpPvhRBeYTWeKwRpNqmk",
  "key14": "4atY18hbixEsYRCo9nGBUFa9ufwghmzKbPehyBwUU599m1NZ4F1wxvwy7TW94dGt77ZssHawRV3oo6EVnRgcpjjj",
  "key15": "4HKBPJCDpd3Teq2MDbdgvhdjJ2mAWieAt2ztPzkQwigBXgvDkw88BcCCWv68HywZL5Z3wyAJ863MxXPycght5XQm",
  "key16": "5bFTQfDxy2xiqRDz41bx8L8NKFnaTLyHAKqGt1AGH5ktpsbEB2ZbnrqDEgJL824QmpsBpqtBHT7icMrEya4FFPpr",
  "key17": "49SVwTDuB2UfukC5pCCsT8zEnCV8Stt9v8uyTDSMjXt8hR73oWzQXAdSkWFcoigQ5cZQkn8kzBgyEwo8QRPXWe6t",
  "key18": "5WedWdvqghvNu4yw2xhWCiM9nPBSYeXS1ZZCoM6LuWQmFBeRGpgRJUB6XWw2N1Zfsrj4rqHQzfZFfitEj7T7w7rz",
  "key19": "5uhfYA9xWyVE7Jjxa2SfSjWwJUSUBrS6qAroyrW1A2gTpwvGHWFMnyah35XTcaByZubUhrFJP7rasv3siBteYTC",
  "key20": "5YZ9hpi486k6UyYXztkdJywaZpoySU25wG8fEtFthhg9sf49CTd3nudtEVpACHfDxsMrRUn4e1vM9x8N4vJnLPZn",
  "key21": "22M1nwn3TBebqeJ5ByysfWUyo9RSMufFt6MnsJDLhjSa5R7x1yhSMwtXLpGbH4HuSF1qqTEFXAtNQ1sjoKTXLCQ1",
  "key22": "2RU8vGBrryde9QjHPBPfSPiMpVUg1F6MiBc1b42i5T4wsmkiyQcYvzP2aU9zPnAAGYycQ67xswA8GaTnQXSE4fm9",
  "key23": "2L1Mj1yUSw4qHmz5rKHw5mVFuptHpJUjHrtujNTYMRfD38na1hjRjfySa2RWXBUjbRAigPZco35cjB1kcBwbCwTa",
  "key24": "635tXwNqT1dEDM6yMZaT6UTmDpUD52RhjLPu2eUwvPT9LTtkTs7Q5pmjLgccWhPDpTjciKDC8cnikGV7dBfukjnH"
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
