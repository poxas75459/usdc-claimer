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
    "4hJNw6enksJHF9d9TR4ivNaNkC8SBYyGQ8NkEq3ER1yTL4zyAQN7cT8pAsCEX9NtKWMdsjA4Bh35nVsk4wQk3wbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ej83GwrNdXFF69j6Jrge14iHMb1P21zXWDsji5QMtubEXyvQ6X12JFogkdLHiMZ3C1AVgvVpRB2ewK18db9Z12s",
  "key1": "24CcHyST9gZzKcqP59vjKjnCpFUk8keUvruBqMwmBmXrx5tvhLAxVB74vNXGfHEh2yXGk46anjT1eqmVxBLx1kCe",
  "key2": "2JuLFhhvQYkwWps6d5D26M5AeZfwkGMQ1HCcpLpzpwDUcL4xWkkkCHca6W6RiFR6yT3Pt2fH12reqpCmoj549ofG",
  "key3": "2MRbFKX9hQtmgUGSv1JncbLR2FyGU7WkyYWcw3estPAfzZ55U6mKUAH9ywe3aJjYEgh1VasUWRxYdajCu1p2tFAv",
  "key4": "3EBTC1WaDviUG1sDecXJeJisqoFXWWUQvrvp5japa6paQQarep2cQVjV49BTTK78JSwSGkXwVeiMdqmSkGmpKTZP",
  "key5": "4ykjUNd2nG8QdZR9N63h8VytNU82G2i1X67exTHdWoUT4yRsCVjwmFEj4sZaNVwsDvaZKYQd2LgXdzBHWRvPvPj5",
  "key6": "QgY7NpTkP7Pr2k3bXxeYZvK9tprxspNVhwxSpyQ4j6srmNenH52eiZPyNqmorXofBeAM2KrpU2ctHU77oaLsKgd",
  "key7": "3du2afpF9BS8nCmtkmuNCFDJg4s7qinTXhSz8YoBKvWcJ9vgxFoEvqySyZS2MYyr7BCTcMVKkBCU3CoeEknSMnpe",
  "key8": "3SbNLyh3e5bemEYpkkpfh8JJ3QUtQdEKk73AVdmWdV2ei7uxH5LT7vv1MVntWPbvd9jnUkGZ1rjYvjHYWioh5ytg",
  "key9": "2vhUnQEpto7BfHwuhoJu2XgttehDW4YZS7Ag33URJqQJ9MXBcdU3cok5CQwfQTReaVd3aDgzKfuHpucbqRa3goPG",
  "key10": "wxESiHjwLd7A9JRHWoQREq3rjBJRk6SN23DNY9upDCm2bWXzxqBkRPyr2uPEsqGrehHiMSonkiss7j8HfzBq79J",
  "key11": "4DzZRyL5tpSdGRonFwTdJXYaLnyk6LuwHntrt8Yc2isSPHCTgpFJsZXB2z2RNKBd9mtdYBzYsUgmPekQPPQD7oxJ",
  "key12": "675hbCEHhueKXMrge5jBuYRtnzuQwd4tCBERUPqPrPBbVw64a7cfbyGFFwEeGyAFXMHvL27xjH4NbA3jUTAqcxVU",
  "key13": "KqLKziV4BGb6Jime25Lk4qWc9HZF8KAjFiLFiZ3pmW6PK8CXiD8qwzRio6HDdKN4k1FVFroaxsP87YCcH1akxVq",
  "key14": "66h8HWJpVXbYGBDMR1D1dki6iNLpTn64VbmkSq1FWN1xZow1HRTzd9sZhPJFkegmoUoMDGGeywNapSGpW8X3qvWU",
  "key15": "2wNBnXZZqxHraEiR1HxaHb4S8T7Rs3oCjkuSmxSwNHoqEeNzF5YdFCszpxjm3ApAaJqGV8L954CDZEaHYVxQvrer",
  "key16": "3L8ANFdwHESnTekHkqWGp552VyWaoBKKJ6aQTr9TCyE5xrCBvQqFNQnSMMTHQemmzWYajhBWcz1KYCN47Azkne6y",
  "key17": "KJjYfWhZ8KE2mxcPPCvd1w55DqjMWas7EZ3sQpj6Vt3vZAPvCCHKV8x6oqM3scXQp5dTwJ9acPDLFiJ8Ahd1xME",
  "key18": "63bzHSJo1b8zvFGiy8ds7Zs2uPFysD4jGWEhD3YYw8iNuNP4Cj3Ayvwie47UiF9sP4HAjCGeqni9i6Q6AxSFjcKZ",
  "key19": "5q7DrY1qUHJu2zS3VQnvPJ3qCpYQ7bFp158E6zPQBmwkVCLyMiAQtJUqzo5dYMfrvVf7HyFznLqUTV34if82D1tL",
  "key20": "JeF49v1NVjJMdVgZYHxtXihTRcvuypL3z2xsywhNwMNJkGRxWqdnmtUH1EA87nT3FawqHaPiNKDQR7RWR31VLeV",
  "key21": "48pMDMMqez1aZoStuSjUAZscRww228UUuSEcu3QkonPFB2fkb3kZ4aZesnZH5oKqNopaDaB5dfUB7BkYfU6P6uoV",
  "key22": "6539fC7VYm1yruKanDigsoJCYd6pSaf7CWhCyUD18g8XQaJS9itK8Np6NYbhTvS3yfCCQJemAnjjNdLMSSuoYEsW",
  "key23": "2jNFTVog7SUiNYgWPH3aGbzawSG54ZBLWRYW8AryNdCJ9fK19MXJQcpgdNmTJMndRKgqLkbhTkhFAgCzWXgzFfBw",
  "key24": "3NWjKxvUa7cdUAA5FwYQHYMiqGb6qKXS9VerWDAxsVcX7gCswHmwt51jJM9ERyUUdQPyeGWuyHFApye9jbNa4QcC",
  "key25": "4VqnGsmaeffoN6RE8mciu1SFRJwawawf9Wxy4LeCQvLNotvHnKPvymhVLVVoHApbxVEViVPuH5E8DTT5zakhm3Hu",
  "key26": "4VYou4zzkYgzxG9SGM9FABq5UxgjMaeMceodmN9boigARp4oTMpTADvHtVnzUUcxdvhtVyPnCLtpkzWsmGNekfZK",
  "key27": "3pBX3uJgA1Ked7dDi1KV4GQB8e2TDvVB7Hc2WmY8iwN1gSbbZ959inQJWh5uiMLyGpPEku9WxWGoa3ZDYWD6nada",
  "key28": "2YyqHQR5fmxoSvUGwEnT8X3jaxReJw2pispF7KWgWrPTyo2tePVPKggXDP9smCBXYZTESWmZHvYa7vVwdPCVkW79",
  "key29": "5kDoTSuvHbKSNLpGhmTK2j5jZXvM67WRZ19eAtb8iz8FS9684dByBk5gwk4Cum9J7DzM4QRvQUoJKNSbN4fq7NaX"
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
