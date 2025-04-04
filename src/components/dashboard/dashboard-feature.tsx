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
    "ELtwiX6BuApZ2PBibZhqkiA4MvkkMmCgykmhZJxjpdD2pAN6ziXYgCL7LC4ZDXpLjp8GfciezpLEtbqnVCThiYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JhMxnBYvbttfCGZADhmEh29MzwbDj298diGvT91E55NMGQSgKxJZyieGumjJ8gfuJuZEUsDkLBi3RgKmkRGypd3",
  "key1": "3PczyckXzBVmgoMm18bo4roeBtWmgiWhfKxUstVfNdzRcsHTxtKrpPXKx4pKhWcwdWXa272X7keWXpEV8pwka7T4",
  "key2": "2QDJ6gr6GqEUVCQf9muzxG2Ns5o5bTDpA6Qyzejaa1qbzANwyQrtd2UNU2VbP5DeTv4SRQVuJrRKDuEXcez7ksaw",
  "key3": "4ohexgPgifHjxd9B3KhmGyrUFTBoiX9KwqiDaDLBTZkuMKWUqv6sz6qjumRFNz8hJj7zXPu7ubF7xM6iJsfudgEW",
  "key4": "3onaTQ1iPKQHhNL5mbGuLAWyMq9EJGqQVrHCzSgLYxkkkPYHTX2GDz4i6pqD5o9qXpJndmdCRwpRfxHzYv4R2vpJ",
  "key5": "2RJb7WLdE7vS3cbf84QRDGXZ628Y9ahyvwwRugeupqGExjm6ExUvqVFm7W1f2AfGY4LFJwmLFohJbduKhA9nEht6",
  "key6": "59WNvW1tSgfnSEh1B2SAVS4HfYdVNAymsDbQfm2F2vedYo5BK4hCJgaZWsPXXUMusd7muXq8PhjQfn2xWXfY7m9y",
  "key7": "4kP9qhMKG5kFzoT5srwVjjN1avK9BoEc9JEGdBbkVvTcdk8fiW1p9wfT8ggPrqVbcA7Nqb3HwUggEnkYffyHVpsV",
  "key8": "2wMcX2X45zz3aR7uMo3NeGJLxvCck6kSh5QUivMKyHNdqM9NyfssmSTXVstum4tFdcEJsSgtiPc84pi2M4dzxpRq",
  "key9": "5uSnFYFUo1DLTvAXoKmztLemxguVR5j5BrTYReALfYLSJiVeD5BsPHhDd8s4cHdZuVzj37JFk3SHmJL1XAj6sfRp",
  "key10": "3xyWFdJXRD83PYXBfhGB8mU4K8VkuGKNEanevrVnqwiuQBm49dshqt91mp865Z9M5vznQxxisP5TgdqY8dRWBdEf",
  "key11": "5GbxMPBzzQUwAuV7v2eFA2ZkoFbi6aKMyrbcVCJf9k4N61issuvfEBHubp9TdFHkvyhPuhgmkaBxRgujUv5fpDRq",
  "key12": "2PkZxCSDaFTMAyMod7yDgrqEHui4zSEQGVzZUJt2dyhnL65uoLSHVPp9Td2NkC6g6kVSu3Ty646XqZMkyVGGmx8P",
  "key13": "3pa13ntxkLBx3Cvat95SrM1YtQbF459PrtNynnfk9pTsVqCT9PhkvtHwUyEoizbUbyT8EzM5NNhJfPdn8sC7kNuM",
  "key14": "C5RRz2bYkrgX34LwCBCTLRUfCzmG1RzLuubKJtM1QpLk5T23LXU7AsU23MhCBNjaM3xKLX1txLuXoFMgfsnuzTo",
  "key15": "N8s51YhG9BKmGET7hjgetGE6LiDR63AmYvcWCQLL7Sc6XQwvaWqhPpf5sEemhy1sx83wR12JwzWSGArDLzFdXLr",
  "key16": "66msW7zEib6YKTnhkxdTMpspS64FtVWQDBvKvDajDkCAp9hBj5uNK2Fx6TUTJMNaX6ATU2XiykSUFcKg14Y11zBi",
  "key17": "52pDrNNsBxAMqoAHHyycBE7AKNXnYGyjFmKZKh1tf4PRpAEoReoEzenLbRGFMZeCHkCAvwm58cjiK9texSEyVWJo",
  "key18": "2MefZTXua5Hr85HgBoENpCsRU9iBFETeQScpmDP5kZkPuMA8LgkQkqZDc2p3Q7NvW1jE5qvGY8LmJYM5ayKxu4oy",
  "key19": "3jiYcLeCq368iiG4q9EdziGcFKe9zzQW3VMYX4D7rpLHZ8Yzry2DaW68oPNvr5oN9L1PnFrWf9wTj4Yr7TPKuoRt",
  "key20": "zWJGR3nMo9RNE4yMFDox1bSoQZHa6c9peWAFhyXXpdFXzhi9Nm2CNrVE2je2imkDjaWs33NuKcVV5UmHQeBMkVL",
  "key21": "5wzBJ9LsXjLaxwi6hofA38v6a9vk4R2fYZWzLjj1dPvdbfJW7BL8ZHAwozaHXdkeLpxTiaoo1PPBTokj1UhiWPbq",
  "key22": "5dLHfs9hJUL24YoeryXZBMYuEZjHfN8DcpNixMF5cCQmPrxFVqor4dcysPqMWk7TMwgh25eKqReu9pu24r8GYvoC",
  "key23": "4hWq6aktwMbhJgy5tmEjKosD9VPxfq8B5urCGWGbrCSrYVrQMaMTC4UGpvi34LwnmK3qata7ivPfHV8yCMFq7qgx",
  "key24": "5CCiqSfE73yTcwgt7iWXNrkX3NPMRP4Vm4Tq6sub3gDk8jaXTe5N7KrsxHtGXiVDvLdx9YFu8MGE7zJbTdxbhDgU"
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
