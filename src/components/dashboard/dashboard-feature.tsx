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
    "4yw5X8A26JFpCPXNgkN1GXN5ReFTMGxpmBYRE8tjXvDocSTxN6vpnWknngzgpbRFTftxdQok4hAwCd3SrmfELkYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mUP37uPbpXkz9vjX13puRE2Cx5TbWXM7MoZ6FFySq7dqwbpJa63DzM5TXfGDmYVxud3rUpTukmtynWgyofAUdM2",
  "key1": "23w7skGT3RnrSdsRRN7vLxEm3LiTbuPNJKMinZ3uTY6bDneC5ayUoj5jy7ojBcnCnaqzXnU6zqQJLpWC9zfeiuAN",
  "key2": "671iWFY3hQ5HgKetZByGCDw6oSbCkdjcXmnbJjxkvXSwwNy98fYdjMJ1N73VmUhmVWG9eyGyK8RyBhJABRubjprL",
  "key3": "4KGGzjkbr3ZGCng6XoMXtrd6eSbmub6du84EZyTcLAeaRyt5vZMRukK4xQCmdcWQVtxaGRTomGXJ9noj6u3wc3fB",
  "key4": "gezEEBDjiHNzQuVYTXVwq9QfpP3J55Ndo2jV3d4r7spsSwCMwiahdSMRCnC8kiG4K5YRPWsZL6VBTaTFC22QELo",
  "key5": "5fUnL8FLMYp1FkwBVZVgh2J6z7XXDPXXfX5giUe94yre9Mioq6KxwRpvfgafgoAjsfaSdJqSziLbphTBmxn3Jn4f",
  "key6": "633mUccGmH1uhQkq4FwPppRCpk7uz6E7d9aT75zyrkHmQ4VBxZGFREqtbw6nqtKojTzCmUKLRQ1r2ixN2Lpbh2oF",
  "key7": "2JEbhchsvd3uhwy5Y3XKAapRYxDQ9d7qiAufah1FASDF7nQegHEbeUov6usFezFQanaQMciTty9sqUypyKLHuZ5b",
  "key8": "2u4gyf7naGvh2kxhbgPQc14HR247aNsCQGnDaVJxxtaJ6GTB2vvGTnC6B67abNS5rhYDeixYE4eKbDt3NNLQnJb1",
  "key9": "5ubn5ANu1vHw4ogyoEvQDbxv4bX8AbpdxjRC8zRU71VhXEGWHjAjzk5VNrhBwNuAArEpvhiCda66UtdxWop33Y1x",
  "key10": "2C9RsGu46XhsbVK97UBdxEgxfGeuqUdNZTJThpbToTkFd7kk8C3hN7d7Hc1xvbReBuWcbJYozG2K1FNLgMq7K7HK",
  "key11": "3wAdvzkv1Up1TmVzT6pRUBWYJjhujKeK5cMcb1cPynWiiP6tHDhcX6zk8qCPLpCShJ5zzD7UiVZ1mw1AFhGSQ8C4",
  "key12": "R2odUKNHFTh3nQkVSsdQJQhmLJyS8gb5iCC66VReiiu22AZdTEmvrq54KSy8VvfwkJCp1CnM1oJFJ7sLsofvf6C",
  "key13": "4f17NaGp7TpqWhzqNWuNyVLyNnN6sPYMydLAvYPQsNP5B2apsWEJ2VNzB5KcLEvkofu9rRwuzjXVZGzvgSWEN9Aj",
  "key14": "zjM1gSAgj4LSkFS3Q8S1n4yJPTiXXK6vgX4gdzbFJ23hK6wvPcvk7jVmMEBsXKH7NVHkj2s9RFqha2825W5EwVX",
  "key15": "JAMAjiyPhCoDf8PnRMfX7prnDD8j2ZGF9ofE3ecbPLxvtUFK1pNUEF54JgERTpKWNRRf8hTSSY5KhNMbdRVPjTQ",
  "key16": "5y6XocfEhsFugDH8N8yDZjPctVPC9xvhMnrMThqKzopiVViaszp8LSBeWCrWcRHZfEgS1vvXoLVDDYnZiwCiCNQe",
  "key17": "2nAbqBq2U43oKotybeP9bwPyM3m7VKsk1c6tsLGwBLgdu3BExsmVyY3tGmKpgKQdd5G3BoTQMtqyAJj6AeY1yHcx",
  "key18": "4v9fRs4v26viPNojZD4ta4QNLGgkrymKdQ1hf7UmoAev2VJhS4efrSwQXWYdLKTcsp3aekPLeNhkpaGyrwTTzkwK",
  "key19": "EfmfxSSzukKkGVSgv91iTmSaFTBUKkniTkMG6MQLFif5YK8qUo2epkaNWBPWBMU64yyYQPVmqFffZd32RBDknxd",
  "key20": "43d2KK5Sg44z5B4ceRejzEAP3oHroAT49cFp9WQUeEPr5EpFRzeenE4QhUqw6kg4kk9BU17Z2L9qN7jgiBeozhpx",
  "key21": "3xbcNGYhr3KwG6xsTAkkU2nMgJeL4Cd48kFeBPbSnVvy2kh52rpN7nKjqaXKoY4guq8V9cGocw3jwawphXsrr39K",
  "key22": "677zUbXGxTNYSfi6nyTeCwaQq8wJfNPRx6oWvCZg3fAVXCFs3uvhR11G98Ug2k1sBFECLjyvRnuvLb6NT7jRCsm2",
  "key23": "3NomTYuXLjNiT9niGCBNCHKs38DBYQ5Ys3QHTkVQjFbMtrQYMcZ3dkeSnbB7symBCBsrEw48LdmaNaFXt8x5NViq",
  "key24": "N1MGXNsc7r6Q3UE6jnLkqXtcCUiwpavCyw8ZQqEb6ezCVcrNGYxAeYoqfFoKdHJMiYhz7LgKRqw5YR6Pdt7mHME",
  "key25": "9gRvSZkkJy1xYjyR29AD66PSfPuFehQgAddqMDp3iAZaEd7WisbBwF6MCPTMQC8fvHxeQBoX5BA89Fh5QLZ2izW",
  "key26": "7id9Mut7xyAHqG2cST5wpUehd6nJQWU9qdVYypsavscwNC6iS6SiYqFtxQSe4AiXYFgoC4mP7TKLd9cbyRoRZPc",
  "key27": "5K18QsGNWEMkFruoqCNNj6FegnfE7rTZEEGFokwSHaruJsBQUeR9gZM2Vh375JeBV9jUiFvM1pwFsdEGWnHMWB2E",
  "key28": "3eivqecKefNVUoNKVYE5V2CaCd5ZoCoiAe54aQdYtBWAjpVF85jxY91qfzErKJrMsBtd3hykNqT7mDWnFTzRVuDg",
  "key29": "4smXvwMU48XKQJNSdm74FyN93ERv1ySeieMSYg7oj6KnDvji9o11VoQurGrbah8JPzodVYviSmZaZgfMxqXg1zJ3",
  "key30": "2vpjp3L6jK3jQmWrWjiYDBNdXUdBJaUfZhPKvN9CZfvotcKP18psqMS1VQrnotrTQK3H6t2ZFjDkdmSTPBxYwAjg",
  "key31": "2oHabrJTZXgjkUmDF4nth9q9N87WNqcL1qzwyZBsCYRhpQhh5zvHeRnNr6xjdDAzWZ3PvLDpqeHt8JdHAhu8VUKH",
  "key32": "35KPfUb6U6GUXin7EymiwUzM49bg6j9NuLBBqPYqRighHprxf1Fnn6bikRpfcVZUniFS1Rjg5RjVVY69BWpsmArP",
  "key33": "VGt5S4HUkzkxVvUZKmhqfsFacVXe3wvE5YVLJc2XEqUQPjtdbj7ex6PjzsnWVwgCUSmNQ8HNsxUUqcwHGnpXtK2"
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
