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
    "2a7ZrsG8P411jhPa1D5SLELk9gA1dLYNKw6Ww5qrWoMkJvjm5UgoYab5HqLBn8Df57hq8BhVWPRuSKSqGpvZoHVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YcVerfwfZWpEbrkLjEPihcHfc1uhCJWgY1anfBppx3wWxDFSss64waEWXrK5WzSRE7MuSgF6D2Mu5EcoEym66yp",
  "key1": "2pD5NE4qvN1tMF6D1E7MoT4HFzxzcBWAG1Xd2k3ZhxFBJZCTakYSdW2fWWhqymnfGB45DxMtuFcyk1BHihfvDh26",
  "key2": "4WDm65rUhXBXwF9pLmjMsgW6sLJ2cGmctzDeXiNoZHyERSM9NLwGhh6R567TXddLdgYR741ACenwF4tjHhuv4vcr",
  "key3": "HJC5CyCQezeQDAKAUheUDcZLkkvgMExYEhk1xfK4RfumkvqAh7QiM862NfSxSmXNJkn5ENCAAbngcMkx996b2zs",
  "key4": "4o3PYvHaCcyrhEj7Ba1FzmW7yJvsxVJumn3MttrA8dozxQzZMLTUBFxsSKT6yUmLsdPgxHM3DHpS6o3t6hY95vft",
  "key5": "5r5GWzPN96CWvb3yui1CWNEkoS5sUKJdBgNiN4JJTgSXZVW1RXpcEjzL9jtWDDx438e1KqbZnAbwXqebznUqqYYt",
  "key6": "35JK9DnXPGf5HHUgDPpQVDHm58FFfJuArghdmVMZMzvM2hMSqLaePqjaCKjM9beDp86qCgrXYN5Q7xRcGLgGeTHS",
  "key7": "uAcp3NVPh392jfjuvicdZkYYJhrCqkHU8QNf7RswjguMMEYoH5Sya1SaxBuUwD3KKjoQRkr8rJwjtrNzF4Dg7Ry",
  "key8": "2n7a4Q6VD4hNg53nFjZyp5fXa4hanjCsC9e2ax8ZxLPKpP3vgfViYyWhyTDZ2dvon5S9JvY7Lvf3Kb9FLdTXo2Fq",
  "key9": "QFgpJYvwk268EBCKCCJtcjxC7ok31RUfPfRopfBkcVjrMcPBBYniQcxLFFFJanPAjZ9z9FXxf3X8REASeVipubQ",
  "key10": "LFhHQxQydtDypgPuFe8hScsC8mz1CrHKDNjKYrZei3Zy5LAk3n1QEVjmFMCGYvy9mwvGLE4rN2Gi3ocEAt8xWjF",
  "key11": "48zii8Zu8dF7kQA97EKiHFzKpqvk4YZEuUwF6tooEoXznKQBEKR4F9teAUmnMbLeU9snccDTkX2auRr3sRhocqPV",
  "key12": "46fKYhvZhnHMgEBzf4Yi7urNDvpaa5taLrpSxKUswPe7nviUb5V43wF8h9jLvDXDFvZ5EhrfgUNtXWTwbgooCZXe",
  "key13": "2od7KawLNkLvHZVKWqaAKntmL5uigKLWadc5CgBAg38sdd5rY8UHiMTgFp6nBBZ1him36QLjRQxEmiWWBxDP2RD9",
  "key14": "CorTGVG8ndv3Xo9aibazbUgu9BfYiBz8EXgky8rWto659HTUSX54GHwSbWb5zpoUYv2fGLEjFHeeYnxhizxeErD",
  "key15": "3Eg3H9QjgE3HusVp42kVt9mdQWZ6NXXataQcFmTsWo2V2gLV1fgkPqpa9e3iLMkuPHCuqUWF1gs3zB2Lfob8EVHv",
  "key16": "2gBsfwXQXDHGyidjFA8d7A37ZvFN9wTT2cs2FPkQh8K3Vw38osxhc1e8RazMRU8dWK99qWa4dJqiAVJKrbh7rLCf",
  "key17": "2XELXuRzfUDjVSWtopk7VUypBCgTiZS2hWKGnSL4x4wsfP2ywCLf6m3mt5yMDa5sKKVJXgKDxZAQjih53QDfMtPS",
  "key18": "2VesGfWPvDwsm74wedQ1J69F82Zhka7U9aRjbyKPZBihygz3wQBjfXcerr37RHzuSy6t1kmSR9nHo6CHuM9eNmJn",
  "key19": "bzU1u8LjkteBwZTevbVyZddGZK9v3zjLgGbKYzSmpkFhtTqERc6k3a5bi8isBnx4fu1csQ7GGM39D9a3AVSWejj",
  "key20": "4mtM2a1zuUTeFx2zfAwifv2otFFcZt2bZPUFojGzqbJKV8wh3aAcfbYh4T47Q3vqUU6K1xW8dzcBAG5Tbq2k6Df7",
  "key21": "4XkpTCvNEtrmAu2JVXeaFTpXBZgTjbjCfZJUp21PMxF2z3Y5zJ5QLvxKkBBCcWjEBgSKZkZBAsX11W38jQWMWPre",
  "key22": "3msJNS5nj9s7zgehd9FuwQzDinoganLfnbv1yjM3ByKbHcqbhkVj9mULNtbwfvL364B7TbY2Pgd3p8dztbVAnWUj",
  "key23": "KsFv1xari9dANTK2nYdLrbgkzZeqZh1cwdYs8KPS5AxVbnaREXTj8aER41WUm3rCNL5hG9BQ2QoXSxrntuwHYSX",
  "key24": "2KFRq4zYzCR25nKBxVqMQ2v9QfRLeVoXxonTL9wBJ3ohjgA9uhM5suiAucjsWHjt1sY8cg4ravdJcNLLPCysKRNH",
  "key25": "5Uxjb8b2cREteQPvp7ZAbCUMMMZDfLRE9cR1B3m9xBRxvXNNZGVrhazJgzccjTF4QT7QTe7oEaqiKCi33ZWC1Pkz",
  "key26": "so1xbjWhJHejJYyhkYKTx8kfRYthGhXxveTismA9GRpeiWxkdjvV7SdsgXip58LwQJ9AUEBUT4RqST95FLi3pi6",
  "key27": "2MUpcXfR32YAMoFVvpMTMz4SN8tMv52yE6XKegiYDksTEfWhEKtQtCMehD9eUmJRFe6kB94PdyCmKpHdbkRtWamb"
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
