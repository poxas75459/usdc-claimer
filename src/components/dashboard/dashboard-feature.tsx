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
    "2my6c9DkadsL24hRGm4JD3BjqVvCHgWGkB3tZsQnhEAKQnuSpTz2qup54s5nTB6ZCwNjDjgA9XiSCR6eHTvo1MJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vRQU3kCsmoCU1T2Te44sQnLfDvMeGPUypNTLyAvb2fK2EisJMXBtUqz55P6CPQJkW3cmNcbhy15NFSGsmpcaSmv",
  "key1": "F1Z1HLydXSZfYkcuJEdxkeETvuKNkvK2M3CjphT1zC9fB9evfQMYemqpkTLwQjZsS83vq4dyty27XYUEJ87WBJi",
  "key2": "xtbRpKvz2ggJ3ThU69ERrSj4nvBAaYtdBSn5enTo7ZzQcHUbPWgaCmDTebwznsRhyL3jgZAB3sfEeMSVhZgntUm",
  "key3": "cgegGinBZqphW2g6opcEWPLq5jeeQKFqK5iEZHGCapsuQiBiAFSMgVtA4PEp8cpRZQWEauBXDg7P4rdizMA7WVT",
  "key4": "5Jj5ESWfeja9s4eiRG4AR15iqdY4ezJDn2FfKFd9hHcvEuHL1GmdgwDRxGWCv78RyGfoH4U8bo8TFVxjyZntNUDk",
  "key5": "3r8BHUou8xU2hkv7FnwLsb4ALKtwubZwHT37WTTFFUQA47xhvmawAFjQkDhUABJSTgcv5BzGY5Mba9STmWvTZQgg",
  "key6": "RauwJyp5yfoCM3FKdhbwCAaf8StGLgJc64y7xRcREmVoHv18Euh9oj8AP5NTSLsd1FRPvJtEg3vW4uUgjNiqXdo",
  "key7": "9rCpqtbvqD2jZHKFsA5Gt1ejJeuQCmhMgRx3kKAhPGJYs84vviYdL3JLaxjMXUXBqHtHTAboVQHjzbfiMmP4ziG",
  "key8": "Shy6Zv6qNMgqXyGkgciPEP185zEWiMUqeYHbMHseD2NQJdih6U7byDEAH7KzqZkqnY1AquTSFRenmYpNzpjH2pq",
  "key9": "4CrcD9FPv8b3ZEEih6dfk7NeexZijUnE1FeTH2AppEi7yFW1vLpoPmNhXebfbanedhndJHGwxh317iGCnTyzbhkJ",
  "key10": "5snjgj2EVyU7UG34MVRxM7YFzVEUTVFu2TLqpB9dWAGzNenhxg9nFVkcHz4JF2s4GxosZ6tx9DVHCyexS213C4hh",
  "key11": "3b22yn96ikR7uRznw5pHpJnNpLefJc17Nagi6vtNUn5DPCKSC74cZP8mY1TonGf2Wq32Tf69QMBV4BdG1xp8cZYB",
  "key12": "2QzfC6cqYE4V8XX7JB4bJhQJdnrMdvEYjXjeEay3goomUqFFxa14Rsy4zQxxpMEhHU6v3NqftSKb5gpGeYwcPPWS",
  "key13": "26H9qmMx8yDrVWZZEHeYp8VpRZH1PJTVveapBFjJYPYenrRKsuD7dvVbTC2fE4yJQgmBDN7gkZciS7Z6gpGxC3T1",
  "key14": "r7hMvHt7wko8Drkz6Da7AtUhZ8id2mj75fFHeyt7CT2xcqKx79HEFR6QPuCPMFzChbnVJPnrZHFKz5p7widNMWg",
  "key15": "286eKSrKws3GyFtAnMWKBsmBfp8uV13WZQG9nM3PiU4gdYtzgYBgRGV52o8JNfaGaeyjBYUc7qfx4ZDEsQ27erE1",
  "key16": "dGtqQPb18iEpLTi8voaenEyhdPpe8h5ZtbkKM3CmBmnTSasSYAci4sgCJ2TVxroQ9jxm49zPhzcW7CRrK8wE8VF",
  "key17": "46nd25SLfMAjUq2to87gphLqUJZsiDbvuS7QtksxFpSYkQEViTHwA9ViUVgGQsYnEhYv5XAPeG5BS6MSLMJCqLQK",
  "key18": "5zULxmCoW8rm7KkiBx1zFRQ5Wzsk756MWThFU2jD4JcJ4EQ74jztpe9QVsq6usNFBLvxTDXmuHYQ5BA5MUfjFLM3",
  "key19": "2vMSYasaj4jseuH9wGW8TYt5TPS2qPv1W8QFRUdF7FyAjaPzMEUyo5U9PV4Adhg5h9BEE6NGt5djPzLGwY1qmttq",
  "key20": "3hQkTP4zn1VkqR29vuND97HmcBLEDQqR3mEqhfXmYxWqnDKjHWgThtVbvYNPTfDGD9jJuAWbandb7zCkMkrZuBQe",
  "key21": "44Rd3onZgNy8WSUyRQBcw9V7ypfcyN8NhSTRq3owfk2EXkHHzJ1nHM1mEtFkropitahdRmejkEhzH5ipFzCwh39u",
  "key22": "4cSjzxTgraRyvH3G7iUutoWY62HZhV4bhVRVwBYKZbL3crPBUoZJ1s2zYjG44fw4UrD9YgYaLtceoW2JcM8az2eX",
  "key23": "HMHpU6N9tPobAhnJ6ngHntffMVkBxnYAEyKXYhMnp1XQycZkvfzdPQrKumvZ2B3BmB75bZ7LqgG337XXhbheMtG",
  "key24": "39hD3EgQUMR5gnPHuDMWV42k6qaSihYuWXM3r7L8eFWdkv35xkyMMuPfE96Nk9vHxwNRUtJ5GskYq1fTvo4r9fXr"
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
