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
    "5WuUFhcme2o4uzHUsoSnU5nqo5HGfMKeNumsTw5YCRyJTZUjLjJRLRwefFGNuZSYJX35fzcECJgyXkcdzYMVNYFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fH4Fsdsq98KSNN1T9v7hy7FgLcoG3MNYBhhqkGvarHkvH91CwA59GTsxrvHfUC1g64xNeU6ZmxFekDwm3yy4nmo",
  "key1": "48Xtxaskq3GZpPJmwka8HyPnznaY6LTGznMKjbjc5w3kdNXfUfTzD6EHTXbfyPijWnvCYudoTXwoHuqyXfZxukjh",
  "key2": "4XhW9Aad3R9xbQwsFhR3fycR4QgzK5cyoqfoyojeGF3ELsFJuTkVHNKBaQigHXXp7VMPprwRgym8xPLFRDgsUmPf",
  "key3": "2no7VW3JghyrEqyyx4iE8wrtvF1bqQdBqLR8vMFE5mgpaWYx6ixVk89PBo7xXBm8ShdiU7VAqPLoyf9BBWEAHisM",
  "key4": "5rmetcRcB5Sy8f8U5reYehu1jg3sSGpV9dXoDvcLa3pMBLBPKcvRQwHFoEubikkq5BgRWCr1Uicig1zrGXcupmQR",
  "key5": "5YkX57zozPCCnKKGYk4SoQpSecf2PnWjTYwe5QQACTrJJAzg65dL5TPVLavmFxWmRDPosK5Cw8sW8GqSzXmX7cge",
  "key6": "3KDrpBj1iqKj4JzP3oCn12qwU6MLSWW74WsedgP9hJua5qoQcMPDV3xNknpN58kU7VrGqVZCtHfnHVAuYuuupLdD",
  "key7": "3jfr4tDpXM3rS35NttppYKqbfntvWGgbdtZK4fFArq4GdJjGcUiMPBJV3Qb9hCxK6QrvzK6uCau5Hqfkv85iZ55n",
  "key8": "47tMR6w51wxAzS49ypFN4RekVkmqJr7TbF3XvcqScxkhpakgHtJvqxDbzoWi5gPp6z6AB1yuVyn1bbqfNLMztwyC",
  "key9": "2igZamKRK5RtP8fnUYoRCPAhGBJnkj3s6wJthh1S2raEjCUaeVF9MdhtJqpEkGjhcmLe1zbu5Gm3hnnKEo87wb75",
  "key10": "im3RSeTTGcgPiMChkQa3Tf4RczvgaATgVoA96XzxypM8R3bN3xYn8qZ8LFYLcDxUJ53y8DaHzGBm6JWqVpMkuzU",
  "key11": "BWaJfohQ3qGCMMFB9n8J8TXeNtHQfZGvNsLUDKHWcsd4LVefQdwmqujhD2qE4uC9VZ17MgBqZV94jXzc3q9BZSW",
  "key12": "eRcF2L1XuvGJdfqiaxJoZhJr72GaR1jcva3HwhH3r2CEbcGaBXFGL2mD85u2fCVM5vDB8NYD5xF7HuiDJ4SynK5",
  "key13": "5ktTqJb6SZi7AMwWhZXwW6phU2s9DG8zZsx4JKJxroNJRbQjWtDqSdLu4SM5t21oeegUv3VbYcRTYobE69Cwb7jC",
  "key14": "3jbtXgeCG4NVG6FY39p6fvttMCzbxtwrUPghNLGbmomEQEZuwNFp9Zqe87UzKm9W22nGdzmRrHAL2pMabXcWj2B6",
  "key15": "2SaS6YDPvEzv8RGX5QnyQDCepZdGB2oyutiuzAdKePPsNpK7dSbFzA3gbHvpmTgwPSMbNyMZLUppVrKcf7jD39rG",
  "key16": "oCDgHX7f4ot5KSUtgq4Vj2DhmxKkNHt3bx6D6VNTG68DcNp2MFdttztbD1tuP6cTVpocW3sF8NfD4jkZtUA6PZo",
  "key17": "3jorzA5Gjm7fujDQSqVmwBQmHunkqAduABJ8qc2B9VchEmjTZAenXMc8iVpiNWoTDG35TdvvaGdC5yUhtngz6iRM",
  "key18": "bitA7y7jMt5eN8nn5ceEqXpSYNmBxSLJvY6JgtKjM8UwJaNr2bMDe1x6wwwpeYerkSqKcaaJMaQF4oLT5ZhLdMu",
  "key19": "37GckaDbYw17em8nWnSTSmAmuyxhWaba4oBY79c5mCiueZbnPRBtaf5KXuxcP4U263ojdDrEbxescbUW83z8LoHF",
  "key20": "MAiCPez4ra26uTSzioNrNZXQx3zS2YozB7SfAbbtXYdFHAEnSFi8mCbcorrkpVWZMVq4o1gT3Uchj3W1irA5Kcv",
  "key21": "55XudH99K8rQAF3qB7QZgMx7YsVuvncGuAdKAfjA43Qon3yudRQVLtMNE3o5gCfPZtyny59JqWN2tm6xkDMW85jS",
  "key22": "4ckSBGypaaycJ3n5v7Uu6JyuK7jzbgRXUGGjzWymKPBR9zz4rDhojwuLvc3o3ANpwi3gZVU4sXbkh83y51j4L1Ai",
  "key23": "2Q7GShgpsE8sFqNpWEJXiei69k4VnjNXqroNfr5yhbbpQ4BQrNFnen1eS6qj9eJSVsLASTgLE82kZ2hXjuLdktWo",
  "key24": "wGjCSzGeZ3xyQjZbznAb7HLQGsVnHax4mrbhJtMNMYZGZSgAkDFCxNQPtu7TckmBACNQtT2H6rrggNX5sj73mb4",
  "key25": "2ZojYCcaZ8q2WXoGRVQBJq6hSB9fxAFafdSfWBkAs8qkz77M1kayuZjXEbCKGJEiTfK9gBc1XZVaZpcTyc1y2BEU",
  "key26": "3ThGEsqGdToN5D9ZXd5LuRLd4swpiiDyTcfwCU3P8fQVWJet8HhHsbPrvFTL8CiqTJgtTURsfJzNKXP1ySzZKCDq",
  "key27": "2dJoRBbLXw2iA25GvzsyKGWwShW6quAC71agBSj9GhNX72GgsfypGzix43RMCiVxzTz1v1YDhAzjzbtLe9Tpr4FK",
  "key28": "3S4aHwAtNbQGsS4rpM9b2MqDNNfXBfWG6dXMsj42urUUddR2YRkzMEyvUVoxXRd7dQfCFoK8pcbB2f4ZSyKiteJi"
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
