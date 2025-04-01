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
    "5rauFVAdscf1iyaPZ7QkZDBMtFkryPWAfsQsYkbLkWLgmsXnJoKnsQe4AB1KAXUVwF2L4xHpkDCJUKKo57XoP6Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBM6wTP2se4h6PXaxsXdMZnfDeTxYDgiBGWePYE1WVYvV1t9yGDZVLZjXcLfV1g284s4oQDZhtyK3JYDrrXvFeW",
  "key1": "4qkYBnC4rfotj5NAYgnezj3nzM6yAcVC2uzH5cHQ8sof7bUaS6inoKP4ykcWi3F2AE46ba7kCew8YeFMMngH79dY",
  "key2": "4W15wAHortfxGwUdp8MqvgbXmQzDVbp4YSLUByik7b295wHyfyq2SfuuKtRHM95zgcDrEr4auy1hQLLx858FrTwn",
  "key3": "ry5pBsMcW2r3mk3SDZNRrdVSZhob46xRkFsxWr9cEkmV2N1PBUKaTvQvmuFJzHT3p5uYimHqsmBc52No3GrSfdk",
  "key4": "K7ex9ky8HwYJQ9CUd8DpTSbw47nD4xxkA7vLej9j9Rr7xYn3b8c7aBMjVyMqhAv3ao3MS1Nu8hCj1oJ1XHmPBWs",
  "key5": "M87T6LNUd2E1oMvquG5nvhj7nm1BUgHM3TPFPomvRLj5y565SUXV5fPPFnZgAAaofYPu1aFzr3t2e6WfFWgixup",
  "key6": "2SiCowpN8nNa9qu182Qfu6Xbuc9aQXTmTjC3dfiXmQ5QszF58mWZxYxQPzCFoMjJhLEXoQVKtJ4gBTqd2yh4u5xE",
  "key7": "2vu8nMUAu43JmmcREwAbtgYFa53gGDGdrjECW1oLMWzw7Wpm41kR8Dkuh8Ekg9GqScejrdMMENUobvFtic8hRVNp",
  "key8": "4t1PBpsixEn8MSCe6VnSVTMHQpmFRq3q7D9Jp9LxcdoM3A3dEPjYm4SMpGdsumpGkztuwwugUc7MeYkqf1zPsF7J",
  "key9": "4mLXmqhhWTov53rzZx2a1H8bb4GJivWRWnmSMCHeNLA8pVMkFKTxSFHGZbWitCKGw28E94QPeK8m7cA5yc122RRf",
  "key10": "4UPJK1qthPRhxeV8CTeo7W6mDkqWPRTa1EQV6NxQjo6maCGfAueNwDgubV4xz29aZ3d8Ze61BS6VcE55uK2iob8s",
  "key11": "2S5m7G2cAYAi21EB5C5qMorLbywLT32Y3ta3GFDkU2QHBeT2UsFJqYv8zGdpa4DdJMQ3vRPhKA5UH7ufg2YeF8F6",
  "key12": "3aYttjTKmgWfcg3n4skR49U6XJGemoa6gDvqmFfSDr3cmARepFUYxNQvpnmPVcuXr56Fc4tARRAsXDowHDFe7FTt",
  "key13": "6stCGPGq97GWD6kkRVrNB8AeeqYpnFxzu2jsnGQUQ2g2vTmJN47RfB6LDVjxMMXG4NmcDAyZciGVjgJMtXSSmnA",
  "key14": "4yvk3Dhq54uccL6R39GYoNwdbvekgQpQKp4mfMAPatFsKS6dQzDgG15VeN5AiQA6HxLAnr66ndZM7JZ8JCxp4rqW",
  "key15": "aMhoLYzeXV9hfzoq2TPFDBNGAJmuMS1nFDkM8i6XSFZZxuei5GfjxM6ZcwrFktXZk2nUMgC652P5KWzLZ39TgQV",
  "key16": "KXsmHVcfkdoxstqELX5pp6TLjcxQHWaFnY68T3yXfWgdRdTWRKMNzRfiudgUZQtgVwWUbf1LaaPrzRyjLedJNUS",
  "key17": "2EACTEkXe2XjTb3BUb77FDNXAnN5snVFuNkTWnFnA6nRzn1GCqmnjdcc1US9xTcqF6s5V3tqnwSuJ1dnnRo84Vxo",
  "key18": "2np3pLGftSTJMJRuXu1akjbrrnPVx5JCkiMDUXGF9fpK5iPD6aGrpBMJLC1832Mtiena85c5JP9wKGkt5dVnyUxy",
  "key19": "2Pw9vnRLbPGAYohfyQ5y7uF9BEux6W4XSazTYG75Q2wuLe3yJiLe8kCjUTDJDPqVWc85YGLuyU786SrZEtdWYjE4",
  "key20": "5hVBrXDmjPvQpQX4aj92p4WrGQopDjqTmgBNDSeWendor3uffZKMaybhTAJwUCzx3oi8j1ZK14yoJ4aeufj2yVzt",
  "key21": "39seU7G8ivfdvZDpuqm74nzqZBbAuxKiQscHmi3QSjmrAC5LsGLAAN6ikz7vhPk3kxwqi3N33Y5o5qZ2CzfcGmAH",
  "key22": "2nVQ6L3PU4aESznxZr4XpVd2rJqoruz3EB1jry45uyKxiUMkUjA7UYKPYTL9sVyycDdMX5y6KStTaDCCAMb49g4S",
  "key23": "3JuoaHKhiw4Xqo7P1iM1B9XDYdRERhwyRLVjRkksN9M6kA7qfT5bbwNBTytwq6yiUuaLj4ex98jMvyEcZv5BsYEb",
  "key24": "64jjQMNj3vvvTmZET4b4E7g4TX2vJHgQHnKUwvKTGrqj3YDz37guDvZcotyxmULqCGvfGS2WPgD24pWSahReJEFN",
  "key25": "5fvmWSMUY227iqPdBCQTb5nxj53Hnj8XzYwFJTF8gR4qgmWyBVqiJD2rK1tQx8E196VD8h6N1UKQVjdYEy72a9Cm"
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
