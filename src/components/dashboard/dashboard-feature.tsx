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
    "5hfQMdbmxZRaU4BVtF7dShY9usBHZaoV1P5j4yXFccwKSatz8v7yojWynPkYT7o7XtG2riroBEu6Y1hcRhSM1q2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgQBpTJZwK4WQntUN2zth2cvdAGJQ52gHDxFDh7Zn7RmbVtZvTx5FDiWQVcwj2rG5acFdPwP81efHACvpcDtaNw",
  "key1": "51QUheMqfa2j9N988pKGsJNCkMm55SfPRB7LKLWZyM7NFCyYi2TZr5YLP2bUPzWqM9ogtnYGDmZvmHq5nvMAK44F",
  "key2": "5qQJM5sHzbMz4jtioZb1e7JsDf75TYDYJyPvZHhfqYcK7yPW6ZpPj6XsZ8qkfDgJau1Cc4Cp7Srng8uCdhyZDtYM",
  "key3": "3PQdL88FU52H4vxJdWHU5ED41Qxvk6ekLCbrr1Gyw579AvNGSLUsc9xjmdwVSwznr6HWKtXyEto2yG2uJEtga9dA",
  "key4": "3N3AnBoHaqUJBXs1JTDrDaoSb5xFKJJCE2Sx9EqzCsguHi7c9ASLEcae7r4DtAPfjL1dZ5iffuvBbZi5ZXbkJofA",
  "key5": "ibXtkVXUm1rBmHq6BJ26hG88raRdrgwTRtTgtpsYfqk4mLiBhDSPRANbap88HSe5FTZSay5MqoHkAhFqXBW4gft",
  "key6": "3pyU7fzd4uqp8AYz8wKydEjNRL276B9J4ycMJSH2kbwQFPfMWfj69x4hBxAugUTcJzi6okgttSXEkq3buWd8r3Zr",
  "key7": "2whHp45f28B3dm1yDfvbxuQ5qpA52hnc1qP3nBvZ4ZURLFtEUYU171adymbrrKYA6T88Rrv5v5eqGmMFREN9gRL8",
  "key8": "2PEYAwP2JsgqkTCHaiEa9NFWodGQuKdu6i59wQpGQscoHfnNvAefFuboonxt3zJfk11zeY7r5TsZQu6neoez176y",
  "key9": "3ejbXru5XY4hMWCwViCsKMCHwBxRijp1K1HHod9andCLKDZV1THag9PfGU4WRTmY3XexQoq1NNEHvMZq2RB18SpL",
  "key10": "2zV3j1K7475KXMvND4sHJbR2aAwCc4FQdEhEtqvALWCeSbSW9jH9C2sJPnQKZoBsCXJ8JrQQrtznN4Uh7xUhgRQE",
  "key11": "5p9HmvWv6L9ZMN4dpVYeSNxb9zTAjH42s7tVVHoTX9ifVKvsYjZkcmmrgL3CuZc9qrQSXLrx9qB1zUchVmN9P8qZ",
  "key12": "55H8A8gqKY4JXWfPo7jPFMdpoYktktj2T6Kgb6ptLXiYuUNLDLqn4vzb3xrihA98dhEjxkx7CTGkUWZqUWszszX1",
  "key13": "63YwBxkLv8SViad2ETNeRE899g4ZPNeAZUyMZSxbGLkjwxUQRrssq5pemVYLXq1ywRwDErCXETuyELvyDJRawGsp",
  "key14": "2spxNqS3XUWfDkW4sUgxR8J7SzqvNvwPmRif5e3jaKyXqSnrAuZVHUJRdGXjdaFkSj1eXXvPUTuru8ykSjzj3CGm",
  "key15": "38NdtBsyhL139xBh1qGMikA2AzmJNyeCeW4JvHyXtKMiWqS7FxdZ7sdNGSp9JoydoTAHnUG7nXzhcEDu6PuVoKX6",
  "key16": "4i9drC8FZWABCxNF6b1JnwdnBWtkSasC86W6EoFYKfYn2DTDznrtvA7HhFxEtzRSQz4YyzWjqHN39ewVduWM6Ruo",
  "key17": "24QhndDhcRoeekVdD3CSoe4kGE76sNXZ3yEF6Dm6EPsLJB69cUaYHCqt7PJE7hXm4ULnqTWWMsHTrRZyLJ3xEm5m",
  "key18": "4WJfJHZiJRr9K219Wgp6zxLVP2Q9x7SkvkNNQ9wpKU7HShEx2HojRcGWJnkZGeqr7aEjhmHLH5jNDQSUSeoU7LPU",
  "key19": "4Lt4gNReE98f6LUuh8fhEdJvQ8crCRfjSxdNnxEbaR3i7ne7GF32whc4KCUeZyWHj1C4fUcPRBAHfkDD5nvYUS3a",
  "key20": "2QYekcznqbsg6nr7adYcpQmL6n8aU2hSAPrMseTznTJkX9db1m27tPVXxw3mNc6GpECPHLvF9aXPAXVdh1Fp2ZZ7",
  "key21": "DkukyPBRPgSNNQeLvtzTY855qPR1xn3tqtjYj2XLtrFsqCoVvip8S6FQJjDWVpyhizog4LYgP7yrZ69R5msSeKM",
  "key22": "2jYRQTakLc2mPi4AtRAhcTEVrLkiajb8qr5kt29h7u9QvZPUL6MWDa4U2RLDzqKTJBYVX8jGn45oi1aKZVoASyPm",
  "key23": "46TmgaPYD8BbUph58cegdYXu1wG5x3TC6uP7gPJJ2eMaj9oguUGQfPzzGWY1AEtH8k3mC56XM21A1Xu2Yj61vqZp",
  "key24": "B2GVh1btFJsjRgtWNpzmG8yubU73sLrQUhmaN5GH31ujSVeYDAhhxaJwopk7PpK67TjRZF7Nxo5USNSs1WUruiZ",
  "key25": "29yTNEFJn6nfaLVHYC54e8RZdCY8Q9E9mvbAB2eEDDHYtbyiJyBLqMD3L2c8st8PLXUUZwDVttSaHGv1Xc1VdatW",
  "key26": "67U1cAm4RPjiJsC5TH36NNgnLYjVj8ybcH2k92rM6BGCuKqWCy1FZRPSe4TdtDytnXo1ffnDUqNTHQ6jSvkAhjeG"
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
