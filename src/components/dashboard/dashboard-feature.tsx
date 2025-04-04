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
    "2g4c45UhQSLWjndnm4y4DJ6TcJj1tjToHzeNiespqJMBNYuQAAJ9iPaCwVZU74iMACEd5MST5N3rseDx3bcJFnA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqthfEmx86CNZSmuBckifwgJrdqwsEcyfPh8kqwWiTok2K6PuXwDA3bB5zwhun2tMdX84TWo7naoeP9bT4ge2J2",
  "key1": "2H6ua7WZj8Ys55TGkbKatrNnEzRHAERweTuq3dFwRpfZ1vg2nX8STnnPumxYq7RNuMgnY5XEBgG7PxmSfcqFtecz",
  "key2": "4jdWxy1YkLzpuMu2TSp6HDaUgFkhz3Me8r1wEX6seXZwi42PacVQoE4jCpmWviocj94J1Yk4BsTF5ULjsazsC5Sc",
  "key3": "35EPxNLjbL34bM3E5k9XsHBJhKFwwki6kKbTBkTuqr8MJTFVnerwujZrHhT7d379QbdPXSJTaGozciJgx1ojUkGS",
  "key4": "2jvomuAPiTxdPrpqx1WSJJP32rHYnw9cKShkdL8whtxcUuZEg1G5neZwfTaMgLhPtT29d1qBqAAxFanYwvbgUEKJ",
  "key5": "3oZU5yh2MDctmUpa5xBWdkwC28Uof6ikmL6PmYo4PSSirmXzKuPF5cb82tzkaBsE1wPyANJ9ce36u4NUHT4zZxFf",
  "key6": "32BkG3DUmjnqmztnjGH9XeTmgc7XgYJAqKnh1ByXsfxABjG4HeZWqaiy5STKUH8Ddhhi2TTA3Ao46wHf9ntTxX9a",
  "key7": "2NteiaR4yGeCmNmGjt76sRa62iXNKkL8rTHiST1o9CasPohDZAJTgLGLbUKAvnDyKqG1smAkh2wsZKZKA8ZksGi9",
  "key8": "3sWHxLEktzVAgj8x5748ZWWcWuyfNZfbhxnmqTa7YzzLpnH1XFYazudhmc7zbs8kw2ijUVDAMGLcHApWtpRgQjC5",
  "key9": "4by28AsUCXEqmSrW7H3bAbPzDDDymRLsjR46utDwQ6qgn3TRrZFH9X3ChYD8AEpd3ymxm9vjjoZefeaHXv11PQ37",
  "key10": "4VurAMGPCmCrTuKBLsTnPNkPVoiXSbWsPVh7J4X764FLAGN5UK3HP4KCzx88JWfRVc9G9PuHxuJ5HW1XEAMr1CCv",
  "key11": "57yQHcnJgpCGG1XoDXufbfPGX1KsHzo3o88L6w1CiRAijcissUQbbtewmG5xfSaFF1k6xVfELZCh39J6jf4VT3QY",
  "key12": "5aCWduvdLzrNS9QrRBDgvJU9aYTeLNQQ37SmMGzdLr2PUL1dGobWNoGuFUb62mmy6xTnufmT6N12RzBTvAMJ7Pfo",
  "key13": "2aJwQLvSAaHWBcKS6fs8UvdNQtjiZtogsTqTyKe1kka4H1rVd25AnkZc9r6QnDgwTyVQhfEjND26xXznFCULG6TN",
  "key14": "3GGW77cBbPxriPobkEhThk26FZtUESpNRwdE9ndx5yuAGd7QPoBkJbpeAjJU1zwL98dNe7pQ9LNsjCwnkVoPVv8L",
  "key15": "3D5PRrjfUCN9JgY4sLwY5tznyDoeMPrGcsnENVpZs4BNGREdM1oENXkps5oD8EuUhq2qnbkouKXetWZvN9tRp6QN",
  "key16": "2Gy2HUsbAPZMtavuheqpjLizRKimjLxPByvePCbtDySYpdFqkpVWHn86jikxckFHV6jyeA6gUv8Vzou1qFs5vqaH",
  "key17": "21fFXy8T4ekc5D3Xk5qLQekEDycvbeHxAnQXqxdi9yWUyDrj3mLLysvruW3CH4MGbDPh9LJoKoCDEm6mgb2AJRz9",
  "key18": "QRHUtAD7XKWZyR2YDaYrvrGWQmHwivkDUjvDfTRcbTme3iRmddFQQSqfbAPSMXhQo8XLYpMNuLnEcxzoH9gsf5W",
  "key19": "37stYwyRtW1xWr24B5i4DG6WHnYmz1RdDU6EbFetJ5J3urV5bPhvYByJ3fk5YUetiSPfUs85EVJv5urqc4j7nv1X",
  "key20": "3YKtjd2axpWSNgYesw92hvzuXY7J3CijdxjKFxNt3fxz4HmM8iUJJuZB1rmmXwTTB3XPc8RHtNhrc1727RwPNTjv",
  "key21": "3k6yhSk3BMZNmTUsCJtHucPYQiYX6tM5VKp65YLhaRfNGUFTWvo8visRVjYuGqTtjA6x4NhZigF4RjwUfEqPqeZ9",
  "key22": "3Hu6zXyps9LUh4cLXVmEK5LTU92kMLfKnxZNppeZWHyzs3fCDwGh5uhB3Y7f5eFrAs82m3UtSCSdf5DKWDvQfNh5",
  "key23": "418KSLQ1ZxowXeBRdwcXpDh45D8DKxHDtN9EZ3zX2pWpqkwD89PdJLR1hUTaEC151PYNYXXz5MXqb3QSZgsPyLMB",
  "key24": "5BcbuhfpoSUP8H1rNRqCheABCo9CyqQzmdUfRqAU4RsYcg9suHiKa7owTMsD8h76JRjRaHxto2HAvbn1d9X1StsB",
  "key25": "3EajdYpisDzgAMKsduxQrbCvJ1Y7eiQ8v4VSWp9qikLGEAQeg1dy8G2FVEDfvoBsxFZWrV4jnr5EW9Fc9EtMqynq",
  "key26": "6Kd69E4x8DgwBgzEyabfRZrN5AYE3UiDcLzZxhGTQ7t3N9LCf5Zi9xUt2PPykGeFAKgYFbQpbWxQCxa8T4tFQ8j",
  "key27": "q88ABGsY9U4y3k86jiGvLFgAZ7MnCzR7DkdxYPazjnyy7UsMv3hKcParuZ3Jaj8D81umQB4QzfY7xaYWcUi8tfN",
  "key28": "3PMSPbxgsQ93RcEJkDZVNzXQx9kBdmqzmgMB3KyFErTusEgrhnu896ZaKupfitAyGoP95NtXKGbzhjP7wcDL7mQ3",
  "key29": "4GoGhbuzd8uEmXycRpvBXodMNn1krPyAKvHyp4aJ5SYhxc48jZwXnxnV2WfAwkCVisQUp13Pyz2BTLXswT2Uee8n",
  "key30": "46cGoJGbsYy45NyVdq5ey444WHS9xxnddSug3KSgVJqqCnb53YbCni2amCUzdvrW1QprUYorjFUxdJabDpJEYTmf",
  "key31": "3R23Dj9xDXkUtsnsfNja7PMqbYP1m3y7SEVSKRpy2busdLz12oQPkEZeWvBNB1sEHsgp6X3NwiCMuNQje6L7RYGg",
  "key32": "4XW7Qj9N6hUN3vNkqYbV5XRaH1tRbnuLvNuQeZxDFctfifp48AbUD6Tq8su3DGqTgowyGhYZP7UCgy7NoeWG7b7M",
  "key33": "2Fv9VtPB8GkR9yhL9rdm2pZRWYUzRARHho9NKAdy5zh6N3EyPWSqVxFj6YsdiGgr9TVo1xwPRZDWqg7V5bWJ2o6e",
  "key34": "MMoZaFhZNYdQcpexwWazRUabY7XkmvQou2ZxXSkQRiQPkpGbw1GU6YJFaAg7RLBvU2zVnKJjQwbihNBFYTfKSeL"
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
