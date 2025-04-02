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
    "4dWk2E8iUvi2P82WEPvWUVX9C5cfyrpgBuwuxBWsx2zQpZiz2bjeMHtZfFiXrtngLy7nRPzQAD2oAReQcZW9EA76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YoTJ6b9q5UsdAVtZBvdE3jiuukMzS8ktqronJfHTKyvGrB1t5R4soiNwT1bFiDrpknsyXAfZYjqhgSTW3z9JaAg",
  "key1": "5r7etqnLWhPUBYp9Zh7rg22vUjfiyKMFhoF3TBYrGEUNfdwsqu7hhsv63TzCXPM1fzbaiv1fYHUhzXmtRpNTRATs",
  "key2": "5nvRaYZzoiCLob5zcsUCNkzMi8yaskcr35QavE7gt7oSNRuYyKbJvdwLe9vy3xNBfi3qp1wGZyt3arBoF6AB2cwN",
  "key3": "3F29w9jfXbCvMqdCG3tS5xwVvkrySh6xHXwiKFimdddncmYCpB5WTz9pUrMM6Z6TRhgK9RuJBCdTDBtMZiUnd4sb",
  "key4": "5bVGGrwiyjdck8yTJCmhyk8kgpKd69qY2zFfHdKPnhyBMap8rVLD31iCWKuhaCUEpfeJ6Gk2QDL9WQbe8Gvgb7cy",
  "key5": "3WmkGpDuemwJQucvRhBnj4h3pyxFe8HU2YFJXR6gHqo88NxyVEDrCvzDZEvW5RGzH9p4QbFqZdXf3NorKoizioa8",
  "key6": "2xV8yHqVSFHtczpLAnP5dD3AzSHbszFvPu23Wm4yDXcy8MjoivA3ABv27i1ymYV3P1LbyifbEdNDig2Vkp9GhUpe",
  "key7": "EUfgmq9bfCqT2EkgFHUEZ6ZDRZuva9kGwCvbBY9JxTFpoq3Zqz4AtZrixHCos7W8Vfs55sjSxuy1U5DDeHK28pD",
  "key8": "3tkRyj4CshfBW9M1vqXknJMocf8mpEZ76LuET29J62MoyJ1zALuF2a3CFgg7GYPkWUgQBDJncKVbZByNJWEpEcu4",
  "key9": "5WtdoUqGEsF15m157UXgJVQFvZdfLQ3C5burZ5Kjc7DtpAJrsP2SnEA1xhJ7Q4HuXEwv9Yo7DxswL9H4r3Qnfjnb",
  "key10": "3GgCvkNEFEFs5CA4sNoUq9tbCqALAwb2njoqYTSVhMSydxwUc7ekd6zbMKG1DmnDNVJ8gNh4DvfMBRZoKySF8vHV",
  "key11": "2PRdkfygQmUQm6fdXjA1ovcXB8L51meY9xw7GqVE4QrwPwme3TYotUm39cLYSm79KbqB1TL4AMKnAGSaEBQ3e4v5",
  "key12": "5EewykP98dK9dhnVNj6HESgmjYco9xa14mCnGbRL2kwqLY924LQPkAs6LQ2tqYbTAbHmEw9vgNpsu4N4wxu8PRC7",
  "key13": "3Hc2X6Y1EFYKUy3gK7msHCuEgeCwwfXq1MixVJJmKEUVjnw13iCSiAw3ZDbiVBXuHZ49YneJppuwVr7DBqS8HxMt",
  "key14": "22MScH9hczVZp8bjaMFPHqVg16uE8o7sN9xLT8V5qQA6Gi21dWQy7mkx5ojGDQiXzh2JYnuRH5dWtfzZhTcCQmob",
  "key15": "5tWKX5owDbGdM2sgC6rhrQnYfxMHWEFEnkAmNVoxZGs2f2hvpGxqQD3h63LsdXHKZeEWM4KGXDNkntHnCkiTfVmQ",
  "key16": "3GcxycAGsW926gZfjKx7GC1XKZYFjrjPiqYbtk2oEPTRYebEBYX8qptyXAeohbmdvrrJbMEUXmjj5zrjzqoUL2g8",
  "key17": "5jEFfbPS2m1B4RTWTTwbaDBwCfbqicvyLtf21QVyRoxrPijsbECC21iNMMYros1KkfQn9tATqXX98sUs2NbAp8JP",
  "key18": "276cWoxHkGMNmRaFMz9SXGuxRnxpvDKYnJLVCZQX9XsPVB6aGNydD9tFg6fqo8TAw9rGUqmnhvd6H2i64p5p6cGp",
  "key19": "2cdcSWtXcgb3mRGh6f5p5E1RHWZX996mCo4qNpgXFCigiEFTEuxpsdiLbT5ymPeZQsafonFrWvd2ZVvEmRixus3P",
  "key20": "21yDfJRSEPvD2q1XnTYJyuBr1t43Xr8AUnK76sa4xE453xX35ktVeK2nUmj66deo5eqXhWu8fGrvX9bVQ2ouH9Em",
  "key21": "5zdFd9tURcLcgJAH8C4xYyxUrT3LYqF6npe9dsMa8iB9ZJd9akSqEnP3rEScGa1PS7E7ucbrWoZgskuKopytFNBQ",
  "key22": "51dKCgvtrhkRcMSCv4exkAv9ukqxGYnM2cXJDM63XTitn6RS4XZReDVJCQGA5GRrmE72b8nUhR5bzLWNacFSFuFp",
  "key23": "61Q5C3beA2kzH9P5gucXS6eG7JfCjHFg2jZRkEqyuVnNYQVYfsccNZTjs729x9f8iodUE2QyzC3jFDkyA9p5cKpC",
  "key24": "4LW13LDbfuBM76CbTnMALNu9M2RkZEkU2PdC5w263PkD85X1Umr3seKbNrhWF7SA8o77cGNx8nZqhEjHqjPrb277",
  "key25": "3QRCWcozc3g5WKCsCtrK45ZJUT7Krtjzod63h2MLti6ycvTscUxFxWMN81dvpdpcDkny5CWQaytFvbSCFdfcgF7u",
  "key26": "5j4xS9aE63rZenJFptZWaFcrYeiV2wFS6XWCddpbFMQS1V9q1syVw3DZzApUuxzehyVLo4urrozzKmZXUqNRGbPb",
  "key27": "3Ni28zs9KhTPfZo2JU1fEChCdLpHhh2QptsXtzP24gMBngXW2tN6vkWCkWh4tPPGfS3L6oGk1wDe4ZreNxVgth2K",
  "key28": "5xBCvdQYFAD8fEyFXNpakWxrWTgMFuLq3iYts9DcRvNX717GYMkB1L8dDQSxUJKfYarzNd3oMWeZX7Sij8eFgSaZ",
  "key29": "34Bdyr4DsYvY93iz3MqJ9nhaTTnbiQqud1Ay98F76ZZtSvBwxRmTRU9J6oz1kaj4gtKbcZZc6FyFAW3oULpkpmUv",
  "key30": "3Nd2gWF3qgshizdnyNfuQwFpzTVT4HNd8VRQJFRg4Wc9iBanyMoQ3irEDE38D5ZMM5ZYv74Q5Lu7UwkAvXaJD9PY",
  "key31": "Rk6SrtK5AC7hdxmNWB4K9A9x1GvFpkXSEHqjZwmxNUMRujJp3C6ugaoTNebEk77Ukt4xcQaE3M8P7SvT29taGXQ",
  "key32": "5dc2WGaRZS6s4NQKezjUeazsPCWD2c6tQTrUccrNMDwE99e6yvksMBcbpk2FWDSrjPeSF8fA7XFg9qk6Fc9sbs1P",
  "key33": "3NzV2pJWGQftubYsePHtZyP2cnpLxU5sxUvaPyXaXDYP56MNkFs5zDhsVaxP2oB3LfD4aRZomwj91DKCB9bPkkZY",
  "key34": "ANTKdJGQJCRGKYD7Mvz5p6ca3MxfLfmAGzx7t3k7Paxw1xcZDk79HSSJ3sUKVoNJsB8bvjB4RrcyxMsMXfj7Tyd",
  "key35": "2cwfF88PVDrSdfHqRqXnxTj7qLTVN7AuJRNeuy6XdfCtLRG251wbGNGmQoSftC1ASF47D7q17Qu9qxbz4b29bpvY"
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
