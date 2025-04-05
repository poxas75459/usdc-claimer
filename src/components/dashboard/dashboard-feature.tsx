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
    "5pTG1hcFGLNE1KB8DGgoQcLTNxffAVWjk5dvmG7qFGQ31xAdiLjwqoxAaJs26v99T1oJRNubDjAXrFdGPqT7knVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBSgRJdRCpymJqDhyNKYtLFZsfM4EnFHWGKkkTi4za3xcsGnW7pdVggjtAevHFUMSC2yg6eDiHsiCJvXLqzFPpN",
  "key1": "45vEYRyR1BG8YQAgzCy6EX2y8FK4rwuYLq1rKF9YxDLBLo6YgErQBnNuVz4DNU2W5VgPd8HAqUZTJnnMbG34QVtT",
  "key2": "dVT6wc8i4YQEVyRAyi15v3Pc1JNdgdYajPahkCgPFNEtVf6g8yLs88rT5eFgqDUKqe7544U6BeMfvAF346okyBV",
  "key3": "5mbfNjf8BZQc2H7nhJVBQxawtAGTEgTLgwCBXcDwLaWokp7LYQsTLh3EhJ8W9tygb8wecRbBPEQtbadMMPxdvZNz",
  "key4": "2G5NqQzNM3m61R57ofop2CgkfYj6D2uajfbpKKExdv4qqB6En1rD26fcMKDTJ6jQJLbKcB3kcvc7a3xbyqSNeUBb",
  "key5": "2BSXv4LER2hMVnYc59bDDqNfhhbPLqsZ1xnsXGkQFDYAqC939wL4uXnvn7Q4RCyk8DBpLHuoodAhWcucwsG2TGwQ",
  "key6": "2rwNcx4v2Gmz2fXxwWR3eGYJMRWSJmuKzbiFyrwL5XQbycsbLP2nQQFUw6K6sHbTPoSKAcRmsEqXbgkTXarTGZ7t",
  "key7": "5TyF68fcvCsGQr2njncBkvPTLjh9rzt3sP7FEzEHKhHX5rUVWgLy3viBoScVRy59HGNS2euETvFJwj3EkYoAVPW5",
  "key8": "3HcJyj5EKFeTjQpMpqx8biK9gdJChTJj7oY2gditBz1vevYLKnBfrcmKWDJrDzsi3X3ADYpiwJD2Z97qpqddZUNH",
  "key9": "3T52Hhu7Bpw8mCAgee9HvGziXLuHg9d97iQNM4DTp9aTbsx4DKjMHp4h5yWaTGnMbNqby4DP8rcRDLq74oR7jEbp",
  "key10": "3b4mDH34TpVxsEAQ5ie9WsYXXkDmJUQz5d9MKTGNa2fDoTpsKZz2DsWNvShDAw2Yc5FfRXVJdNGQKQTKVjB7YDU9",
  "key11": "3gD5Yf6ES6QCgkNBf9uHtJNgCatPiyZnY6ap9ytyG4UGekiCQcuLgDbv4LCjpQ1V3GcMP7n3mQJ8Rw5FxUatG2sc",
  "key12": "2WoTRXcVBPkfuFdiYepS2YoouVTLWUTthE2rY8i6irFKQzj2ukUQ7e1N6cxgXvTfj33CEcgUspcVq6koqcS8b37",
  "key13": "45o2EfhpU62UU3XL3oBME195fQ3hzK8gVMP7kDFkJB5todjKLJsWx8scEp9nU953s1MvsnxaMRVqYhXahsdwwCx4",
  "key14": "3sQ5vGBo73EJYniP1rmJygUFQ4JeP7NPbCT4APPQJ1R7kmK45SEzQXZyVbHwhjPfMnq2QLhxgvuMQH6ZF7Ats5Tu",
  "key15": "7aaCZrhwXpPBjcBTdhqx7wDPk94XbmxGpKXFUCgJHr4atfR6vsqTSe1RDx32Usiq3qk4qJsEtq5KXoD3orfXkZc",
  "key16": "4mE645qxRAStwxxaZQVo1P87byGBDfk95k3mUk4kQnbSosoXftiqoyPuaND9VNvAAeGHgYo91GZDCD73KrTDaU7M",
  "key17": "vHbRYxfDvG9KhZ4U4sGJ2KEjwGCx9q3h3t2LadPcBWpmLs2ddhh4VaT1X5Sz9mbmbcoFzKWokaLAj8fyLnek8Xs",
  "key18": "5P12ryHvf2X5NPqRsZvC6qjixkaZUAB4SXPK8aXDr44DkxJw3aWKsPTU71bJgJdmb7TzNkcxU9L5RjNCCSPUmRWZ",
  "key19": "47BDqeQRY49ekFT29S1Qy33CGjjXF9zjj4vBwDvL4cuGf3KTpGnTc1bEau1nckgWeC4WEtomC8Si7swMUB5CsQpM",
  "key20": "3EdcLiUeyChgD5nEZMfaf2vQeyHfjafFHi3ZgpExB4tY7acsoEi4MbkfJCd3EdAJoMBgkyRCbDqAaHCT6cjNBkqZ",
  "key21": "44FpRJuCN4A2Ma1eC39Varcqrv34B2G42kN6t63rXQxeipApDrGZdmxDkaCnAmLcoSiM9XTcJWaCt6L2qC8yodQC",
  "key22": "47ZfQ5w25eTbrt5zT1jjqaSTBvELZMB1ZK2jYj1EwAZ9eiU1Araguzx7Lx9Ce2TDJZFtWTtR2qSLrHEpmUjuaUrw",
  "key23": "65EPGrvAtzmWys48pjTJg2WJbxSHx2Xjn4tZfeXDwfqCddJGipaUyzmZcjS6BfSbXcXXDY3R6Da3s6xabSepeWkD",
  "key24": "51o4CnJttT3WitpaWm4wEwQbcjB67c8kE8GKihAwMntEVaHXHqGhoJendkKaHHLDeUv1gMArnPmNyK7HSDJHES6F",
  "key25": "5jTKjEucE5nvJDiKT71t8HyafFsjUCKnss1FQ8gkwxRn463k1dKv8o9dpEYgc52LerTHYaWg1XGHGt7bhuKGVXkQ",
  "key26": "5h4fcA9HxH4Vz1QcNMbHmbWk4QZ5NGvuxSc6vtR7kecuiV4rj2uhcghEUVb7gUjYdPzf4aTCsdNV7ifWvefdAVQr",
  "key27": "Xo3c9iepKNTrpr2fTsfpAA4CJVmF1P54XPPsEo9vNHTfxRfUAcbArUXHMETn4wz6YmkiYxjar7oXCEEAgKhv5iA",
  "key28": "2DVkjLWGSnrWUhcCfazqrwA9JkiFm4gq8zTaY1knm8AKU3BJfcY5RuMzbLr7SVxkMSDHo5DEFZkWVBBSBiadQEhk",
  "key29": "52jUJGjHCKZWz4kdUP3Ux8KVx8eiXJptE9HeqNjCxQwVBRY4utGFgddpQASWAK4RkVXSttxPxaS8cMxkkSZGrUFY",
  "key30": "5d9JMAHgrirtASnRUE8v22gQHkeGQdG1fdRj8JDtmKzp3eSv5TNFeGrvnUih8eyZ8wohyaNJcHZT1uadtmhopW5S",
  "key31": "1UQBYoeGnYJj56KuJyqDxtg7Sk5toUNZKbukY2T42UKp8aThCjkbkMerk8ZGFJUpb4Ypa4LDxgc1Ewk2X2FmseV",
  "key32": "2aHHE8U2xaykVTvHxSjJiN8J6XffQp79pJDuCvoJd6a1T4Xka9TqnPPGLHyEAFZ67ZNPaC4hasAaDVhHFGy9XUfK",
  "key33": "2sFBRLJJdqQg86LULCrAXcvVmh7kHP2fyNcosumsN6NSLA2mVyenSgfst7pnRisgzS2zVtkvxK2PZW8qYEFFhMwJ"
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
