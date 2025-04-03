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
    "2sCXk5BAzMHqDWzbihDLHCT7wMTizvtwSd8vc72T2bfr5D3SpcPR7FJmXZmn7asZpCqC1inRTAwcdxW1cWSZEAbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SoAKqVsFq2duErHWPVWm2SUq1aB9YqUbdtH3bcBEWbjFP84aVBVKHZ17M2KMFqiaBcCupzp7gsmD3ZoogV9MHeR",
  "key1": "5KMHgBVzr4G9jgnkKukQE5XkHs68YW8qAUBpcxH43wPJweoJhYgkcYWiUfN9MU22Am7g5ZdvKUwR6EPNKdntAG1X",
  "key2": "ivFcWu8EkxN891hwgocvyK8TFN1kqzcNj2qQmnrH5X27cBzfWSwfmFZ8qo2uLHA5wgYoVqFQfhRHHvEAwVNkYUn",
  "key3": "5adV98rdUvr9aVkaLF9uZzC5o4WeEhYNxgu4R4hSUNF3KdPwaMFi79n3iTkei7q1WtWRNReeCAAtx4t6VDYkutsH",
  "key4": "3d81VYm6WkRZCxunKuK2KgswyXmW5WZjqL9CFz898fFiVGSoh3T2aXjyBTLLetXN9ViiDkNixpEfreyM57pEs1vo",
  "key5": "KLhFPTZ3EqabtY6zwauTEpn1GKNeE7EWTri4idDJqR5Ktq49PruoCcD5LYmgCqrBPnzzUJ5Gx9E7e9xkkswzwZ4",
  "key6": "NUoYwTZ7NsAHc4oNMpjygmYrQCEU155fRbUDnpW1UEtxhKGQaxZwmiZh6fZwurnMhh7EJAjFw4MedwaPVfjDtD3",
  "key7": "2ESarxT3p6vSJ25y8qSzxVszCB1JKNjxcTpLmyH9KquLGxC7b5n7EZYZ9uLnn4XNz7vBjHqevkTucz4F2TqWtDGp",
  "key8": "38qtzJhtZiJjYyGzA9cu79qNiEmGAK1VLyaSnfFzfE7JfgLaJA1JaqpPFeVanfAdSdsSNPnRYZnskRXYd7LdbZZM",
  "key9": "5pBJrUBfCAcFqtSuH43ECXJGwmK54dvuT5bEVi7Lu4Z5y5aFEmyJxtPnyrJFZC5Cvxw5ykULpMc1U1ca9hXDNj13",
  "key10": "45gxd2vQr7hFbWf9gGNAyp5fSXmCFAZvNPc9fDjfad65vMu1FPSGvMUP7WaAY4tKLikVuXLGaQhCud6rkmmog3nV",
  "key11": "2XvQobTD5SkBTWuepeTNT5nf7KgRqPkxyuCq5V2ifsv2TvqDCpVRizHFZpqrCCKvFNAJeLRFtBxX9PJu8dHEJagM",
  "key12": "4AQCiGjZnWqZZSxqkAdWZ3oeojxBa9sE1yZpXKF1MJCWboM1yRueecBMMdLJtuUWsxhHSG2VxNJfU6cX9RT2C3eu",
  "key13": "vqkkP9e4DoS18EqardJjc2HazD4h1LgGrS3oEVdazEk25q7WCBXu1Fq4342vMEzSe3kisya8UGnf7n3fMaGo7yF",
  "key14": "JNSi9zFFnNdkRmuDZtYxVHkT3sSsHVQpNxcrnmYs1DsZP99xbceXRphEPDJbK4gnN2ZHVFxZ8Ueap622f5qt5sA",
  "key15": "3sJxnbxwvzrnU5QdC6kbxh672Bpb7PStUJLX6rEEyCx18hXUp4j5LuJMydiMzJeV8HMWwdPjsuWVfQR1mA3pHsqX",
  "key16": "2RXM3JE61VCTaoPKVjKDHi6GXizNrWJ1mHt7YHcQtRtt2Y2W3bdY2JzpLMpXsnKmH3VQAMYoBDtjdRDeADxVDLUf",
  "key17": "4sFbFfRDpeZ6UNYe6Db9ALXUUfvzLHhfDgdSyeDMXeg25bFiytJc9wj21qtV4aahPcRJLHNvQJN7kovMcFaQ7HGw",
  "key18": "2kYQDkLo8TFTruYYgrDZwExJWbC9Ea7wryntKG77ZWHSkGyqDgdPUE1eHkGx8s6qVVNraRyrdh9hVXPogQJFKN8",
  "key19": "3GDG3kMS6ywvUJMbUwe2jeJEJZNUPy1KSqdnFfSpB4ooRz2nxNB9eJxhXZPPa3U54wmcnKzfzTtuuTvXcscopPsx",
  "key20": "54NSwYRwUDnYADHTT819aMnKaMm1RUUCLtsHXQMRStxNkMb3Joj3Rpq2W1W3tDPf9CRF7LAcENVUsUV18GoVE71H",
  "key21": "2bk16391bS9gLNfrBKYzZChpFYWUq4BJYUDtenDt7y78mEaubC3MG5HMBnVRpiANgVi7Q5JmSvJQ7jtQAqdB1qVg",
  "key22": "4wEwBGAWSbY7V9vyjPrEww2MocJnMu5EsECkFoq9kbHU3n632EiKPRKkW9DhShVMyURjufDFv3CFBXzgt55S2fFx",
  "key23": "zBEFLcqqDoohkg6V3ZMRikAKwwgpJGy3hShKUhN74CFXVtc2LqKpS9MAoXyR9w8tUwJACuDZyJPbgF3kfRpyGpc",
  "key24": "48eSvMHeDW6afHmzC4RG2vs7FdAUrsPhDNQYKvEtB7jevf2uE9HsmeZs9Js8fJLgPuUnwp9gQhNdS9ixqdtdLXDk",
  "key25": "T2DuejuuwMLVxAbY9zZAtDv2u8NoUGvGGqDXzGWpZovuGSTUJddpY15PgXjP2MUyuVfvxmQBeGkKWpAW3B5Z7EH",
  "key26": "2ZrR7isVJuZiMpQYDvfaLtjZRiZrYWe44nffHGcZ2fP7RanTfso21CGhqXnHuTTRRQtM2cNsWUGS8jwswBhjVR7W",
  "key27": "4dD9xMkdoyjgZZFee4aq93GjR6mNiFx6VKpdy1ZCiKL82Qe6Hw5Ttem7MKRTVdPPYEXXBPkSaTGXhZjNYN4FVsiT",
  "key28": "jWcPSVrZXwt9hw3xr2cyzKurnEPmsE3nA1ugFQhduWHoAVY5FxnoxtieGwRK4of4y5KnM2BCrqpmxyjvKeVXNz2",
  "key29": "3NqskKem71SzNL71Fo1x2rrM4zCSqLP63Wcvf4xAH9qanxhPWyzRsRDecX9Cg8JCTRNT5Ep97g47befRHwfJqxMX",
  "key30": "2GJkkihdz8aB2tyMToZK4PZhbTS4shuua5erMKbZV1n6gMJLe3S2eMuWGk7YjWZyREJBR8QVysq42vF2nSBtrUUQ",
  "key31": "48s3dWXLSannt1VteZDL5ersXvQqsQE5BEbjDodevKjmUYHCFXdCy3c5uCRRZ8g8QDEX2pvcAPk9DFeq66WcrjnR",
  "key32": "2Ma4gzy3cCMw12471qyWHFhe2XM85GLSZVWoum3kE1Znjuh9T92HQ4DkcjUwWKCt34DidJgfnR9ascPJd651S1W5",
  "key33": "5sN8npFMXahKL5BMweXLxLDbBC78Mj2RJ4DRdtwo764vdzMdQ2YqQ43GxXytkZXKgSJaejuhyCXKjTK4UbTJAdB8",
  "key34": "58fwqVpBx8P72YVAdMR14X86RP4f8CGaGfRHFKnqVxRMhoxKnTuJ8PXVa7WEhcg9J1yLvFS67YxmWHo9iiKYAy3A",
  "key35": "2AjpN5FantmMMZoi9issfhVMcsYfyaoV2MW7hL1aKVnL2uZHf4LJ7PYRjLZZpL36sFuhXi2xNHqqFWummnJMG85M",
  "key36": "5MpriwuKj4axNYnEfxUUJTwSRKBxNGjxiwSfDUpUmuWpLYMKVzUwKrofLupC9rH8x8kuZ7TJJeSJwp9i3eMR1hLw"
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
