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
    "4XaLPxNg3kq6XcjmcmPyiAxscArbToFaXu6YfCoX3a8Um13vNDG2es9qFkU3tWjZDCe83k3X2b5wejDywMMTaRHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUXJzGKucB85BFzKneP4iVzrgiVah8piaT7FDZfLKE46aSa3BeD1NU2otjb8kFC2Qw6r7E4tmrCsHU78Z1yqEM2",
  "key1": "46FidJgBLResfhXcEeJAtbuzMQjQRc6DXsRfoUgJJyjAsTipUdETtYUFV7giyipSXnSLEqorzUZ3zQU9p2NH7uE3",
  "key2": "37wYGdKApoSwZZtXaRPu1sLiJhy4mX3ZxhFAgciErSi4UaKCHuWYfASUrEbV8gi8WvCdsJ7UefLQM1ZVMcN7FSTy",
  "key3": "3aUmTFsCsAkNZMeWo8359KQoid1jhQrvJ1qJ6ixiBmp7K8WNXUk4dnkCAJhYcpG49NcLiuA94Etms4P2yejfQ8Cy",
  "key4": "2wSFjMvFerCEnB3JE7WATweitwQcgG7zvhfEqYcP5jRHLF5JkbZGeLDSH66oVsTcWyFrRxGuA8fGx7ubLGsAxwi5",
  "key5": "2XaS4m7x8FGxVwyFb9sCcCy5k4Y3tGPbmMQpUrFw3cTnzFVzQaxetaZuJ63s9Rot9LnAcTzGFbvbSVRbJehcFDwV",
  "key6": "4qY9N1yFAmN2YtEgkhjLekv4c5vURE5agBE1MgaDTtfWsKSHDbJJR4Y28eBp4si6vxux3Wb4ZTfwjzAkm44h4uWq",
  "key7": "3dfQkrF5V17Nd8dg8n1udGzWroBHFEqopzYffo6tRCqPNf2YvHHi5o1UNxQ3HH6P9VNG2CVgXmmVWLSNeoyAd9WQ",
  "key8": "42uE8QSE7YCRj2M1WY1TNi31Aq4ZyypyRS5gH6aLwP63SUXZ6ebDt3R91dYUsewHUo7yESyy3kw6rsh7sUbUU7jj",
  "key9": "2xJJSJpWSsHbvJhdqbF6XCuX9eUhgEdWfgboBrQd1vmi11mCf7L4AevWK2YospVRCWHLh4L9542Skrw4ZWpVk7mZ",
  "key10": "31msV8uNQk4Rn75agaBmvPZQt9hSEzRTdgaDxh5M9CyNWrJAWYsxxS3X9Xv2E4HYwes6HdxCpzGyeQfsGz62vNiw",
  "key11": "4nxop8rgUa8yEiuPJSHo3hPZwvR3nF2P5kdrCk2ughEwyiHjmnU4rddowngj7RX1L2bHFhqpAfV9byPRRrWYGwCt",
  "key12": "2UbTgyS5HLYk7HvD8d9sm1CqCywHBR5ZxvuZqkJrmyWrP1KHcipv9FDabqNfARberAy7FCdVcvvEYZwndyQNqdYv",
  "key13": "5LQLaX1TcaA9sLXvqM2v1tyu1va2csm7YYhiTrWGczgiwzPqpqgjGpo5Eme4Mb5EKfUpTSF2t6TbFXe1C9jrurYa",
  "key14": "5NvS6UwmfWtqVixfvDvDDhcLuMePqE5Wgx9vBGfELYFxhXT91RnHXV4ojMD7YjpR1b5wtAgxikZDWMhhHZAX1H7x",
  "key15": "o3FVAmRXAhju3QdoRQf6yp21KqrQ2Kh3FDG1AQxGJaG8biCNWJwfrMEycvAVb7RUfXNj8K5DfqgDWJpW4fhHZMW",
  "key16": "4hV3gVySVuFb86yfHHPKgoSPJjNTPXeUuGxbtcDN9VnANUNRxeQ5mX2zawiwMEnoZo5vAFfQTFpKiq3KTCz5YKpG",
  "key17": "kFWD23QcuzcUgkukQnc4SSev7TzLZSRZRspdtnqZk3z7FBU2L3qNbPW9wsApM16mV68gyaVxYMQKSdzkZfo9MyQ",
  "key18": "4uFvAFbP4EYCUatjKdEpR1xAzxMpR7bTbdo85WKZDAFyKy5MH5qaLuh9ZrxRtWZM1NJD5MoHMdDoMHXCMmg36HDP",
  "key19": "3ojT57emB6hRUFekPJo6B4DMJb89PdK29orxetRewxQhnZmFhWgQhqTEg948yyZnketnzQEeqNnrSFRasbr9eC77",
  "key20": "NyAHQScfm7nDMav2C68L7zycGvXpcwQVBk4teVzUynwQLDuHKhoSS3bL5XYK5dv4m9Rwm7omhgNZPqz7Snmwd9z",
  "key21": "4WNz32QbanxhWvPeuJwerxwcNL1bDbTZpfAwwVqS4btcBzA3kQbAGSmucbtNWNUprxYhLNGosqrDtyqLmXucmLER",
  "key22": "5UpvHwKf6zkApkepRPSe2k9EyDfMXp3GhKAJ4dZiAVPWLJZsDs9EfCL4RorXgmtgXE3TtPA1dYq24rg1TRhzprfB",
  "key23": "48r6YaihbBhNmaNvhHURjKij6eQUiPDD2dqC5cXbV4WBqcQAu6mQnhqh399zU64nRZNGFjVGiZFCqC4dRRpJNWib",
  "key24": "4xy3muV4xHAY3n2xz4PZKEbQPdCP4fZzGaCLFGywovAUWbnXwjzNEAkXZBFheU2WQoQUpzBfyFXY9fKBfefmv8Xe",
  "key25": "57ewqDibyj4Te1Z8NPYyiy4rxQ543kEfDEUyf9Eundt3pSnq9ULzQv7eNJ37e88wMM52uyH4jUKCV8Gf2FzRn254",
  "key26": "pEo5nrguG5XcwpEUvVpqpFXzBLWy87e8X8o85wqnUDGFqfSqtCrJTf9A8dK3DQjTrgZrGqr1B6md69i3RVzSv5f",
  "key27": "21Q3ZCXPFvLffvikFAzMLBhrY8m9EJPzMrzKGgd6VcS2wUinwBk4Gkdkta5DCLsMUuMizGVEmbfsuTAKcj7is7Be",
  "key28": "2EzDWsK7FBZiBUPvFoDzD8uQG1SBubyhL4X4F5dH9Enq8w6XxCFPg5bpuot4F1NeF4dHMSyC6KuziT1L8Q2M2HRM",
  "key29": "27tti5GaMSk6FNDM62Hdf3L1h1g7682QfApZfNufJ6ofiNSWc8mwfMuectk22JdPDL7RL49vaqV6Y6d8qpvjDCuN",
  "key30": "23BHN8fttRByBuxfttZ1muP8UDVHsKWzzq2CJ7maeucgizHfNXXhDr4LeitdMfbu1CFf1oDn1E7aMBMt3QwDuez1",
  "key31": "wF7uV3bDxwkeUoVhuEfDbrQSEaLaM1YFDH2br7bxcyDiAXqw8SiaNwZub5gR44CJSmrjwWnuJ4qiVZuzp4Ycart",
  "key32": "5521jBdSNQfZkJ7Gxe4tePDrEVyYoiGmQQhgERcEJ1rWGA4FCeZdAaqQpiFBHfJQbJ68cZmTkqfWqrofHJHx2fwy",
  "key33": "5eoUZD3BkHcAvugsLTNWjyvt6PcfEoLqwPAowFrhBZCt1YXPHbetCYJ3yRt25eKErhpfebUkEWWFKBirk13Kh4xS",
  "key34": "3CSnZBGKgAq43H67raW66FrqzMUWv3Dc5AP9PctLcXimUeJiumvmjb2vmyJkDaJJp8btwByKQawbNEf9wVCScP8q",
  "key35": "5HahJycmbZqpwqkYH7GKht5HiU6rE4sVLWfyrBboRGAi5gzQwKHeYs7yDhpLiawsdy4rMzMQxRToW3FsEHyVjQEq"
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
