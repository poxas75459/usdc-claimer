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
    "5FcrW4RBSP47GRGmUfDaMXZQjPYoRAiSr6vJNb3RAxy6tA56axSzBGQvtk6E3znzVnL6YwdpWUdQBP2furkZnVfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zjfi7fNFnuV4ZdwbgdexDcchGNZw5E8QVz566EJAWcMuWKTQ6t9u3MbSCHHNJQ69MSknR8cnF5Si5zHchYtsSR",
  "key1": "3WtG5WGULM5m9N2G2qwLf9G6vxcuvig3jH7R4A8jDM7T7uxi5aHRTQyXhnkZfJ8rNPyGmpAfnSdNeAU6NUJxjHLs",
  "key2": "3NbZhetMr6ApFHNLaQaXUQHFBUXJhJMkvTpdgbSEyMGQCGCp66MMYSZfg6dkbEizvPZhLuZc2xNQp4zH6RvvUBrA",
  "key3": "5F7PLZ4YPXViuJTB8q1fkjTcAw3xBmNRkAyYaqkvE5g3X3HENjh3croXqJn9y1g9tW1aizAHXuNFjdnJNgRt8KaP",
  "key4": "mHqGnmQftEZhKCQ8V5Nrx9uJi9YARjZFLSFLpa5WL2YFoBsy3BhvufHaBaDw4g7f92MxW11NMfx7fiBvjjDENp2",
  "key5": "24DdeKWvTX3KPfHPErH3WHnptDBWviG32bJXjUEyAXYvQ5VZLhmtR3ugLdem5ySBTZ3MpRq6t1F5x8NED4VMpQGU",
  "key6": "2TF48ZzU26Mzz2snC6sxkBFAVR4vUGkX5t36ak7ZXtW86oG8CwBAkUpFy3cWjAFbBebbqwsUbwbct3uFLLmH1kaZ",
  "key7": "4UaKHLcs5T5mnwApzdMeRrKaCn7MZwgNjyCNCTzkbfUhtvjS6W5WUnkoaTJmczo7pgtKfE9gBRq4Gcv7oX5NjdBF",
  "key8": "3AqQY8fM5M3v1mEA9AJrjD347qoQcDcpYb9dxQWUZwcLBpGTvimfxexgoryCX9i8W2Xscdf3KNJZgkJMboamMYJF",
  "key9": "3bg8gwGH7G9uEoQkoATbvi4qWhbcbDmbzk7PFo8HRPicHnKyYYKkhmBQW1XQzG535EdL6upqxrmV22VSg21R3msa",
  "key10": "4cxcdtXGN3gyeYKRcMpzcgDoDSqe6fqZWt8djNprnAGKLxojHK3Ry45Yjeo6nG2EB21CXJ5z4S8UzHLsyy6ph3UJ",
  "key11": "4EhXjgM3M6GbYDij2Hc46EViPLUbXm1r7xwU88tPsSyijVhr3v8xTuBYoVCWDZMCLUaPCFth9Ug2Ap6oWdAMGAi7",
  "key12": "5oDinFvh4dGZEXCPm5UzuWYYBU8sJSVTfwiknC9pbDsAbAvoqLDCvakVa98EFQMe959oaS1WE99vQb8dd4SMCBxG",
  "key13": "2DevtRYzxQSb5Du9HaEwnyDkjCiFLasXxEnH5VDWr3AJ18V1ure6hSpKwfY8VsGA1uZb4x3K1A9eikZNstCL5skj",
  "key14": "4dCN9pyzxCZAp4h89ZJ7ND9ySHYUJ6PdQ7SVaK9ESXnng3QQYJANMxCpcUN7jHMK3TLDBWhtbo3QdzNeio1t2rwe",
  "key15": "DfZptZfQtbfr9RLrLk5SYKNNmPZiqz9SJQS1NudzSChirp4o1nyVCzwUFswE2vPdtmEgZtmK9FHg71H4C6MJmiz",
  "key16": "4HA24cKCXY1tEDs7ZUC5N2LTSSBxongisCUkm8LvaZ2u7fN5cfuJsCZsEiD2raVeseD8QEXCj95eFTYA6Vw2cPEX",
  "key17": "4gmntvZ1RruLS4BFUvdHvwq7j7QzUdN7MZCBFrpc9PdVgK8VDExD8aifc4MxKSUgeoByNEuCLdnV7SCDubRmGWuL",
  "key18": "4gBjHJQajSGmpdQeXKPBFSXX5pRXpC6B74q2FnS17hQM44WnNyeE4oFPsTj4g5GGXJmxSJ7DNb8zKZiSqciH3D8t",
  "key19": "YroNF78hrkDELsLiLCBYLMmc5KXpPbSA7bsoQLiXKazSihnRJzsowKQwBqQrA9UN6iHFNRCgVr9CREE6X1bzzrt",
  "key20": "4xykkyrmMMmquwUQLcZnAEAE15eV4MjiNgjJgQHMKHchWnHAwLnH1rTJvBtPKth34eNDEep7Jt6157CnN4QDpVGt",
  "key21": "5kk4vCBRPk8wEpgHLnQdngkM4jydMWXbsAjRAK5hm48Mw42VsD2Zb8tr7wwPKpRWbwwcKtcrbgXnyQFFvLjJLqXC",
  "key22": "4LgrRHbDVkxaB1Zj89Lu4BhGCPRoTaGL5H2P3kzSMmGqyzULPmEfTf5JY652G79rHDLmSHrQwH1KeXWPZXKBVqvg",
  "key23": "2v17MdvyWT4ktq77vZhtxBCNZuFxav8H2sjHybq9QH4FNDKQL8ywqrn8zD97saUNouEYWqcakceRh44v5nfeeiGa",
  "key24": "nwrGETHaPo3jeoThTMLaEfZSsUEBPdMUkmxHnXspXyaXT11EAm4coMparDEPUzHU5TPkmVaKLq3EkBXHVTu572p",
  "key25": "2m2d9AvCK5NhMoGnw3rAibMi2TaoTtAJQqqhJ1e9b63bHQfS4pj2Dq16uXpMNXTJZpfHaBhBq2LJ8KJqXRp4g5c4",
  "key26": "4iMikc5PexQE5kJkMdENY19AaJL7r5uQsCnuusjpUd1Kemyn6CadQVVyfYoB7KG1qKHUiyWkaPL3sHd9pfyyFLzY",
  "key27": "idc1i5GUxzNqB3ZvSKivomzxTrbS5rkU7HJs2N5T91HB2QWboZqgay2f4V23oy5UUTAQpmApqWZgKCQDMEqREXM",
  "key28": "2y4o93eVW4DE9QfR5zBzsH5uJ28kFghS4gVQuJuriBnX6ne5176bSfXHfyWS8Gu6EQRMfAimV5bSrQ8RWKV6We1x",
  "key29": "4LNs7U6EyUUUyrsbe9C5sUAGWdV4GpyXrfZQFK8Py1VDdzHTRjDb515vRbeZUjx9qjiVskQHFh9fqnzdNRk2KjuA",
  "key30": "GWuan7tZAggZc8mBX4GqTXnEVmF41ifR5QRBmBGvrxXSKFFq9rGamsUuYrtcTuLwaAgMFdmULyYTh2b9a2XksKu",
  "key31": "2WW9tDLZHUp8CTd3JbFe5jgTi8DGBWixzWZ8dr91ZfP684Ytdsh9aSEPwFwShFpPkwvZdvfszsZppig28ZWM1GQq",
  "key32": "51QMv37gTjGdPdViLvMADwusE5sY8ptkDjfraZFc3nWLFTt1VSqiTmgjh5H8y4LWeMuUweL5Pwa6pzt2DBLWAGYZ",
  "key33": "4BsVZ6BHmgKce9vRnzzs4G2twkuveza2EDS9ybWUWK3xYGuGzwby9ErQtJYhixBWKiRs3kp3oBHSNNAtYz8okvfJ",
  "key34": "drpKw46uNvMRewucDKZRYSSybpM8qhGbNcyRm4q64mn936krHxt118Tz2X5zEL9pPwsVx18w678C1mQKuYViVdV",
  "key35": "XHjsX4yREMb9prGVqYDPMG1TDm5vPi74emorZz3mLApWxzgdn4QSPLwW9bN8LYCnvhCvdibfb3RnpaG9TGigHDx",
  "key36": "y729hbAezkK2nz26bJF84osHQFSxXeiF4fb212Ejc96acif5Xohq1wc8ZpwJZScKetiREZFrY4PUvsfkUgnMMG7",
  "key37": "5RzQR21Qvadb4mbetDz7gBWsdWMF2zTiHqc7qdX5xXvRbQp7ntpcvxujyvbSx439k6avpBW7PmBVw4gFGvnJcypW",
  "key38": "2siiTEwsPiGGbRveCrEFNyzvFQv5J3J18zX3HHkbLxdT8wXVxWpZfwXQgWn5HDZUCvX3jLHt3Ffus9ui6S9TWnzp",
  "key39": "5fxk1Jua9Hdge17UxUXt6mPyRXKobxAmYKWSTZhohoDnpAm9BdUkoLcu1BNxXzDyGgWFZb4wndsXtrFDGkfubKx8",
  "key40": "5UPuf8qJFSsaiJVFJcCMVPZKyVNJGSoBLSfdLD8M3eLNbvJv2vExh5LZoBETrzfae9hEb1H58DKy8T13yiBgVFYP",
  "key41": "3CdGnVehvWkrN7SGyXSo5t1ifQeHmgjc8oq9qwMiZMczQLy4m7GfNsasGQLEvPcsuY8adrsARir127ySmRowTLhe",
  "key42": "4n8KbybUCRrFFAWgLvBTRTS498ZK7NmoV3TYssfgSuqxa7wWgDF5KWhygQhscTeoEQUj2rJiWykEoBAK7Yu7sPKM",
  "key43": "JjYHrpAnbw5oUcikobgbLJEpd1RmUCPW11arCRC6BjgmnUwX9BZNvdxEYCZf55CPmfZrPhQomoXaJgQhhDoMR9F",
  "key44": "42w7CJmEFfB6kkpdZ6cRjYbhmnSC529eoFhkoCRFBJjXq4sAG3kENhLX4b52WsKSwSMubKcGYtfWGMCi8ord6smd"
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
