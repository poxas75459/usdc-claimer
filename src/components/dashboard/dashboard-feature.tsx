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
    "65QbJfYFSmHVAbUT8hFqzTXCjdgM82GVW6AvPuSQhQEbBz6XuMRJn5KTr8DeeCmthoqz2k1AwTVFJ1QzxkFpkS2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CrBbzCzvftUVX7ipHSFaibpLuuXFE2MEct6mJ9MbUDJKHdkoTVAHPxLkX5Wvvc4y342Bc7CBpMzwuQjvgKTgrW",
  "key1": "5v41KYZzjzmCQQqvkG28KV1jN53MDHpUYET2kFAzwZ5eGzbaF5wvCR1QBgkAbDkcvDFcBoMiUBx2JHPpnUpRXdoa",
  "key2": "5LG5eQY7w3ahRgQBEtzMku86DVzZS7AtFGgjvZKHbio3Qk535AM1be5Zs35wGtBatrDsQ6myxAzcCmRhroWD4YnF",
  "key3": "2JxvvSfjGTnV6C5MZt8KmynGTJ6SuuCkRFTFJPfopdqA8uHRuZ6aEaZQAacaeJcR39U29zz7zZ7DUoApvEygNfsE",
  "key4": "3vAxisu7EwwvZ7YvQXb61sgGLCtjwCgP2T8L8Xtexq5gsS2EnPN7fAjEf42BfFKJx8iotvKPaBSyijjEs7HqeeV5",
  "key5": "3GcPN1YynDzkYEMDPQ6F7Uqf2bZ4Ps664HJhGTPEH7TvergaHBKzEJmUavyEeVtNuSDsJZY5k56FqtASNP4WtcJb",
  "key6": "5QZBkS2oFmzcuCDeUdRboZc3DBVHS3zmZixLZP8mwzxo2d6HDrg5KaPjfXi4qwdpgYn7Hckk1NC4yyXPSW8pKCjx",
  "key7": "59Sefz8kuDNZnWZvV3r9y4rffuAux3zhYU4J1RuEqnCV3k7YyBVxHuWXpKMW7JuqoU2DSJkRDKyC3osyw9YgNVc7",
  "key8": "66xiB29rZMYJjBPPkNhGbcdJdeiLtGvUarZwb5UwLuyyKF9SyaRRJ5GBdS1zxnGznKEW2PgB2hT9DxLRATvfZwzA",
  "key9": "5S9DzVboVQewbqJgZn6gmtiEfLa2rB5P9eaSfhcdb4ZhAP7LijQ2LYsSqGyuyVyZLHfuFuGPDDdqeLt81zvWYfxk",
  "key10": "f519netnWvMFUgYPNYiBzu3PV5iy9nJs1nLju6ntq7wVXnRXngh6e9b4kmEuxvWG5xRcYvgPqMua5QSufpzRQta",
  "key11": "5soLLEP4TqHimm1aZea7JozK9hbytHZuxNG9vkiD1qRR5e7nLocNstGczEAedTC9HWGfvseWxzKgFvMbsyXvJNpJ",
  "key12": "Vkk7GVKhbfnh5eS9sFv4kdkrqEZ6KTwNgdan3j5EuoAVD2YjLwVkjSMc1Hf4pB6wYwUbdHoAHqVDQAueiJNGi9G",
  "key13": "5KmSzz7nLX2xaBdU3NyRaXKpTXyQqoahZc1utZKMmZNWkGxtJmiJtHJ5tAYc91QG57fTH19tRQbYTHuH9ZbEfBxa",
  "key14": "39e4QmxvL5WH4EhkWyQgnzgR4euaucHqtfPj7xp8pjWXw8X8mg5Y4TgaX1UuXeBVFvD9iJjRpkwyz6EvDrukJpBB",
  "key15": "26KEWJMshdCBZksjoukH9VhtyRL81z9stkEsBSTCHqLUmK8zt5TXkuL4jPHx7zMEE4fFvNMsR8GRQWu1MPReqFBp",
  "key16": "5HDkL8E4RN5QXKu65P7sKZXsDifqdTiqcaEKCHWxD5yuxtujsdtKGCGnPEBbufxrF4mrNJ1vVJxnt3y2tuk4qmyC",
  "key17": "4nR5gfqoksHF2CRpHzQ9jBEr5synzEgTziy9jddS83BDzzSZnXg6R34kq96J7q2Sfu4LZuusDzh8rgLyGnGUm7XQ",
  "key18": "2jxLzL7zKrjUpxevJBgSWhdoZG74gyJ8A9ESNibQEzmGcELoGnzhvnxkSRdYbX7MzXZD2aaw8BHbXnifz5QhBrN4",
  "key19": "KeaLPM8yoTYCqRRR6XR1xVMsCqnBWy8AzVX12AvAgGenePeP1iwkQ1JJuWneVvJEsa4SLe6mu86rYqii9WpGUjA",
  "key20": "DcRkXiHahEEURgiduFhQciXRA4DLNSFMsvfYoyxdkLsusVp7tkqQQgHbr1D4LD2PKArQizLXL8vq8Jpa4LLeKCk",
  "key21": "5j92xHakP6GdS1yizd7gfTGjioJnnhBPK9gtHKoohibvjmUyW7v4up2i5QHAmNPUeWtyhR32YpBWD51ZbbBer5Lv",
  "key22": "5eVmKaQUDtbWKrXaMNRoGNaZsBrxkmWmZbcb6x6LbjzGJSrqqi6qZRoBH9JiCqV4Hv8fJ5xqMvBAoioSLwgY2BdL",
  "key23": "4tA3JaBxWd7Q2npsPF6hoeWoCTVx5n5KGjArTYx1Uq6ye867sUGFmi6pGjdqXGdoE77JJCahD2vqvNDRL5NbbEfv",
  "key24": "2ZX8Ubu1Cd5C8WmjWXQ2yCRKUVhCb3dQ3BHXBQ46HJoxy1n1rzXoqWmcHe3pNnto1X1DHbehUpwKYSAei2cz8PpB",
  "key25": "4AbTcsfXucbNQjyhJyW1KXryeSfUJSVUMJK4Rj6HkFH21CUxbnz6GpjAquU4su1Hx5yAioQ54BsRVi7FL3G76bFQ",
  "key26": "5AvQcHRx6dwEsmop35a9CCmdvAoHeQup32kxNGYPgQDbXhhBwSu9v3ynDCg6JVzGLet4rSHqFmVC8JsFVsiHpigA",
  "key27": "5Q8Eg3r61sUG8pwFLfUJcLT1CDpdCe7zmJv9AB39x8vGhXFfUQDTpoBEufL2DPRkaMdi6wHbRPRf4rEbGHPz8eoD",
  "key28": "5A5SpYbjoFRD55ZTcw4VGZrRBuy5mU9EA3raKvXoTLj1M55SqmmxZoe7ZzKNRbbg6bQmkWrQKGAvAsQ8xwo4PWfm",
  "key29": "5EgbWPA1dsaE7TyfQN9FMb3fF354JdVznH8M3w8U1e4pNC88LTju8H8aHG58SZ3GdhyoAnrsrJ45fHdW7mHJEXj3",
  "key30": "4cTH7JXQwBsvEqvU2TGHjtBtDUKbnbyNGUrn7bqywnyzbj483UavFe257YaZ1MFiUVwQUThSciiddK1PNPhM5Nhz",
  "key31": "57Ce7N7qvP1AvkyUrydsVy9UiKBLvL7cY5ZTiMJorUMnD4hzyexCkdZjMzZbQ37M6wxJz2qxTDcCH8teDbbonXzu",
  "key32": "Mw3J53ENiJGtQcnN6NqKFb22p2bYUNBYLpK54TXceS4SR7zVmU77WgBka4t3WiFktYezkKViTkYa2dLzvCjoKz6",
  "key33": "2NNnK7h2cCF3SgoaLHsFPhfwnDgJ9U419QX9HV9Me6hJnMp9vDYss4ZfVPQWYMduWUTTyAVyWKQNCCcpxNg4fxNZ"
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
