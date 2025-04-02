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
    "paLStmHTi1YYczrKk5g2ULhmphXCJ7ECb7icBajAxzjxpQJGhL5nVUGC7e8T4iXyQ7C8op2md4a8o4Sb6cJq539"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WYHhzixZysNQ9QWk3zpFdyvuG4gDxSn2uFL8SzHddiHmSqAqUWwuoKXAs4uJnSYB2AnCLoQz8gM3WCdCajCNdfy",
  "key1": "2SnKQX3yeKB3ZDokUxbn78hHVRpyR9VFZXyCjEdoxxCx1BFSmetQr5E1X9zbdyWoTrFd2pgooBoVud4wJNBKgFr",
  "key2": "r6Xr6QnCqNH8uPJpYd11W2yteKTATnHCuYdj5gm8o8yqMJTU2GAA3Ybd8FtjVLYYriB5513zyTpZMprug6Q8S8Y",
  "key3": "4pABhKP6jUQH8has6c6Y1jpmc96Fj4sgbLPHNk6JtKTouvBgSunvcD3z9SNefnJuh75eG8zz468YX3ThrZZwFste",
  "key4": "3JjBZWAGxmkW8oXWHEYZ62XKemPrC5EGb2KE9uGTymytxK6R9maNLMDfHNjzkmuqkfEHJSc4eKb2A1sR2HsQYzps",
  "key5": "5ztHvNmVuot3FMpgWQAkrU7jVUELaHhrSJsZdAZjaw2TGwWGcBMkEXmp6SBaLT1Ro2a2Ykc6yzsZTmUL5qaMDd9g",
  "key6": "2EkqtUjSTeck9Z2QcCSCAvbS5DAhfNQbDFzQD6Dq6dpsNyWsPYtEeR9CNq2bXJQCB4NE1BLdHCykZXxBdbDr25P",
  "key7": "6HvquHMN1HsQuVzYJSK9hmsrgU1iAHfqmiPM8Bfcc7coz72nki2CrYVCiAiskH3cYmcg1jHo1ztURfeCw1cYHqA",
  "key8": "32cfR988kDCJrdfZJzvTbYwiBy116x9UQ7noe8gHpLfa3pJHoP6sW3GwptAGq88ZSZe48uEunQ1gZj6t4h2iiUhH",
  "key9": "3uegxz8ZPo6N8UR36as5gvUhXN21e4Z3CqBEZX4gH1wsF8FQbHGDnt3AZ57wdk32XDmMx6tQTahiCNipYUNwChaA",
  "key10": "53LpFFBoHS68nZZkMn4QbQq2j2nmxX7KfbcYB2nEdGyWsqvLBQoohTTjP8esNrKhUzKmadzUF51TPk7jWiJtzej",
  "key11": "5cSgnF7A3fyFzyju5RSiW4YtbxMMdAA948GmpxrDPUFXtBuPZghnd6ftdLkKekJwTxUDQt9cCSPBeWbvFiWXc6pt",
  "key12": "3vegAwXrH8pJhvehFs3UXjwVAZ1Yk3U4DKQNrEkQXdX3ZByZtyZJ2SoguwFu87ffMmDyTbvGiYezzzgvGn1uQw1s",
  "key13": "4L4TErjvPbLzWZrhjsTTMaYyyW6u9anj5gC26HonDNMCmiE8J9jtoCLePaSGgRRBZ1EWCPddYRt3WcqmMmuXKsck",
  "key14": "4afPDu3RaiFNjwQXTh48PfWkZbm8HwKFBHzZTnnuu8z9jNEPMQGXXknfKkKpK2699GZfuitiTahi7EYTPXUeyvZV",
  "key15": "3GC8s3SpgyHm4Qep4uLxEXiwWutjvfE51f2igkpGzARuTxo2neGzKJumyzZ2fhCy7k7ntpc8Kyj8hfGSamXDYzn9",
  "key16": "4VSwc9vsgRyUSf5t3HVKNGcBkYuXFziujbJrbL3NwY6xVhStw1tjBSZkSiCjHf9BM9gUGuihyQmd1j1uK11UYBzv",
  "key17": "3rzf4yAyWrN5By3Y7jiASZkjhUfU3sXzy1YgEfZnZptVbuKxijJCNfBXs4uGnp3piaiKamRGaFm8kDzSh5tvWmdh",
  "key18": "2ERjftZRJiUjMsyDTr7cSk6UvWuiFo3s8ABWqoymW9CJrhuYirfHpsEsDq7ZeX6Vb4mEQmw8B2DK7hGs6krPjEzc",
  "key19": "2bbWMXHwzqbou47uqMSJyjXAdUktYrLne7nbtArNCLutU9cKC9Q75Yyxg3Qjxja6KCAciTkHqrmoGqrLqQBsyy2G",
  "key20": "25MwdokGvXMDDc9xNbW2pNCzW6ysWFYC7RZLmmwSk56Yy9fwmC4msC6E76DJNChJQra53DPAKASGhZgVR47Kensv",
  "key21": "31Nzxo7XPgi4g8HBvkZhaPZZxwkKnNbU59dvSoaeiP9vr1Nz5EEofFWjmHLYH9s43zmfn7geLK6cv8EqCFxWVb7u",
  "key22": "3RkR13tVAn2y2y5XCccus49gJv3Xeg6E35E8CtTuESmqTh8X1FNXkxFF2EsRuGrTdganE8eLLhCgukDFErEDHHLZ",
  "key23": "JCQ82GJfLgpBL58Vpafr8Y5VDrmZbNMVqwGmmnM6TbyzKeCs8CC7dxGKFTbfnpHSGs3zZyEyFKvcEz2zZV25Qkx",
  "key24": "3Ts8B1gSc43GfdKZQUt2iPLEmYNj6fPYoVkoc2Fo1G4mpYyqAECqrPGWhxiqYbR5K1jTwLHfdA26h8P8nXj9RKS4",
  "key25": "Mm4dXeQyWRufER8AvAq58yCeZ2mFHN4AqMwSGNX7M5wnUCnwmayZ6yNFWPTeJYiDYA2mqknVuQekxn3TxREbB54",
  "key26": "Uk134679JjFt63jq46zAky4qxXiSsxdBrci9MGpi42g5VyvP4uaG3iURiyZJ6wB7eBJMLoxmZNwdjLo1DhWrwjK",
  "key27": "3uNGP3YG4zii4pcxaeoB4m37e9azhQkN5RfYWGHmyEUfJeWM9gGwxGEqeLNa65i9TaBZ7teygVnPRH1biPc6Ng9Y",
  "key28": "2gN3cec9uRBduBi2D9cB3v6iEkCNbUrMxBSX3FuN4nCUqRTTLg44Y6EPb383JvCBP7PQ9XyJFsXQGyJoNAedtJ2H",
  "key29": "ttF7Mg5VDqsYYYrQkQxJPMuzCQaxSUqgcBN2sy1Ep7QvAvED1G9dwwq85j9Gi477FkYAV52pC2z2PmUcMBSsvLe",
  "key30": "YyQtzjaH2C3MYYpZ8ZGxin97GpAwacEa2PRhKJwM8kaAjVSmjNTaxW8kqwCVSaw2miGiTuco9HdHuG2HB64fmVx",
  "key31": "21caHMUMeAmGTm2JVEXvGR3pmH7HcEFS3Azig4xMfY5PSwtZY2NvHCLGK4yteDpeB6u5cndw8VBoZ7qKc3kkSsj4",
  "key32": "54qSjmo2XTc2KUXtMwBhwAkk8YK4gENVRryD4cW6V5sEbEzVjRq4TK1rref3WaP5NHecqKmKnxLqoiYgVGXWBevr",
  "key33": "2mCELpvWfwUoZjR6s1ZRLb6ETxJqafFcmuDmoR7vkk17anqu5huwWhC2i172UDpsmzGUQULMRHRgoJPwUmbtR3Xd",
  "key34": "5WmL7542nfE7rP1miNwrtJg9iXiv9zjcC9ZaNyFm6umcdv4k7U6jvDofUxLHBkSFKUq3k877mDdB65wTmesFNRc7",
  "key35": "2Tcs2ZxLecj5qPZUPqNcng5hAjuj4NjnZZPiHptP2KrNFThGr8cbrruhdMkZQpZo1HaR9vaCB8Uy9zD61k6UJzLL",
  "key36": "23tkJv8DeL9WrTcVsDV8iYMMGXJVJCWgScxwhtCHhnn5G9SMd5BeJJCJ56CESRuvdHvdnXD4X7Nv65hiFrbZ64TX",
  "key37": "zPe8mXHEuNyiLUgJHqdRgXuLTufksbXkQ7QP8SaMJ7WKYpB38nv7mKy9VZiDiJTqf2gFnugvaRTq7CaVvQst59r"
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
