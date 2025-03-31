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
    "rAy7ivhdX2gRLzDDkiuox29un172EyMRbQR6sCDZq1TgMDut93EnZ5o6mdiW3MJAqKUNrmsQEQr7zbWZ4hGWsVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEiRKNe42pBHrTK4a5Y2zEwayFJeJTPZm6DR6UKpNSLxnCA4RcfG8BNcSs1KkQhnd8XqTdymrE974NSpU9c2rxA",
  "key1": "cVsBmnftAdsWLGPeXcBCBw8tdmzX4DuMBcuawPLbWVr1tsT7itEQ3a65UApTJmD8uw9fgM1Ke6c8EkKwXzxFG4Y",
  "key2": "54L5ahekZZWQ4U6M1XCUf23Fa1hwhN9YKxm7Z2pc2WGcZeGhK2AeSn4nfx19UQGs6KzebPd5qYsW7Kww165BcL7p",
  "key3": "6xTS3baC19emqYcqZt3GMpX8mVFVpnZ9yxDeusy1que3d9tjqjrYzCRCdSGnfjFMty6FGXTrXpKhHPKEDqCk8AP",
  "key4": "5PrrYX1xiW5jqNMEEVac2m45tjd24vUTA554YgdQypc4vvMm6CK1ukrPJCjebrB67aw7iqYhZDuFLPJPWb26mcuc",
  "key5": "wswcYe2TgmFZzR35vZDzpGBzdvtFHrenojTBzDZCKge6gzGqQGLvDRjW4abBkcGjxvqgQfg9gcDXY7Zj8KZamZi",
  "key6": "3RQiBAsTLKANfyg3H3h9i7ZUXq8Arc8pZ7H8aDb3CV9gdoFK1q8fgrXG9yeBRPpNpuZ1LcM1H8Sm5ExAGevvYKtx",
  "key7": "53cqEqf7NxHFR3HuH3SbnfvhtMkh6zzFqKQDXMNUfY9jpb226FMCUoMPD4mkECbieQ4TfzLa8SU4tCYwn2p9f4ai",
  "key8": "b7N5mM2fDgvr1vfAUm49yzQUcACbi7QvA3adJYuLzYutPUMzRtuHB12g54odp1V62tMPyNwg91iu37dof1wW5k9",
  "key9": "5B8y9TyPjTfZWh5dJKu2vGfzY5a2w6nFBQeQQRg3VWHhLe5jKQew6BXxAURVtnbMyG7ijSCARKGpQDS58hTqm3Wk",
  "key10": "3KtU9Wj4PysyTwJwbaeyUxDsQcA5mk8wqvCxZZEFqmxy1UHYdHXUyk8vfdB8iS3y4U884HYMnZ56fFjfDuYpCecg",
  "key11": "5UwS4DhTYTKUdgaUN9B9bgJqvntJzD7PHMtAZhXCpmnQ5i4HiuMwWuzuAKfzZcszA6xHN72zCrqJ62uPQ171EULj",
  "key12": "2GXj81B9SYQj3Vf1R9ymMp4Enpzto1rbyLX4YAF6zLZt1sKLXP16ZEFtsMT8LVDKVmjhTNwcqZtU6EMQRu5Bmv1L",
  "key13": "2tSq6DYrpdF2tznnhiVqD7hfZ9YPPh5BNsBd4kwTvEVjTzMVdFsDGaT7UAvPK3Uk7ELcRzdgZa9C5aRVe96vnUBx",
  "key14": "2YPRrPeN9og3byd2WU6e62kQcW15ePDk7JnMZAi2VrqnZNvdgE9uDFijb3X78bqe9GVzTRqb2yiPMAXa65P6HSnC",
  "key15": "2awKbXtgKQCgii29gwzXVbJVdRJdGYD2DD2niEXN2GJNirRgTYjVfMBgTyqSM293hzHGijh1JK2mZfC3udofvMXj",
  "key16": "2oJKEEqBct8Kzn7KpmvqGbsmebUd1HpjDB3SNrKqXZoP5uhigwj6L8rTq79df2R4xYn2TPZy2jFcmCaC5cf8vD1G",
  "key17": "57Pk2Z3eAHk2J63TdruafHQW5KvR4aJ75Vxyqpb94SPQuYfFE6HLCKk2bo2ckdSBki8wehFLm9pvhXUcvEk2Gvco",
  "key18": "4D9LobkEAQsUnY2ZxuoXw7HvoyZddGD3sWQKFMDeAEx9f2beJ1ijSBwwbJivscW33g35mVDw1wpC5se8fZRjxqCj",
  "key19": "2L4ZR9CCkgi3tGwAFb6eEmDkwwWSZAGJxuh2s774RMAfDG5smaKnaTc8PTFKq4b7RWADsZGzbLM8yzo9RG6GZHx1",
  "key20": "2CtPGaFHAMYCsuuspcaijnZN5Hy6MEs4NpHfbpZ2dMZsx9BJjVT2R8JcnFXa45YgvMwCooMvphGL31PyhpNUC5FH",
  "key21": "4SDTdys1EvVxk9VSULhKxhtUfXKBbmBoRfJKDgS6tW5gQER9MdftJHrbWAFfsegmN9duBdeKCX9jpn82Gxg7WTf8",
  "key22": "tmfZ7xmQ7Gd4WVTRRgcHysRSKkaKXWoFmBbtpPR41DhhcDm8ghAhwHVbnkjHcipxggQM8a1tUQk8HQnShNhqSJx",
  "key23": "4RRwK4ioEG3nXZXe7Y3xNWMq24DmryXucym91ugQFipC9oA88HVmuj2hQXieMD8JZvcxeoFnKkjMvafohWVtsgYg",
  "key24": "54Sd1kybseVE261mFQv5vmCpzYcW8CU51iMBbxFDxZdzQ8bT45749LYB3yLG6GRDKVZuP37orozKy4c9iUj2hreg",
  "key25": "46jpHTT3LdqZeyoSPCrkKQUYfyLxYyHgWXs33V4fYacgiCNfthXA4opsASDctYAMwVdDWVJnmmXKikge1rLZaDk2",
  "key26": "2UgRRuepFRH6FM9T2ApmUfX1QCC2XrPtnzVX15xFKZgkjvLrBXieHMUDv2ZM1HwL72vbvTJ5L3hQXEZXLe8N2CWc",
  "key27": "3XTy8SQ1aFeXAscj8wrmABZFj7dqxfKQimCoRd36WYmTJduSh5yJkFxAQqUN1wBp1PNUrZ9Ph6EZwp6rRKwERRww",
  "key28": "5AQ4ANs5ZKtJrkrdFJkgECkuq5Qz733RtvagLrK9fGz41vmxYkjLiLYeuA3u7FTNvt2e7V7ASKbL3iHqPSmwDwhe",
  "key29": "5yFfp9jnjJx7Cc7eJCgWuwFzfu6m15PcsNyGDfErGD7qLi4xWJ7i58jYZoRzhTwqJ2CvNYA4Fa4cwei8BoZ8dbPj"
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
