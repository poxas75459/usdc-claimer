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
    "2Dts8gf8bg7wohSnhsbnN3KCJ9Fzfc9NtWV4kgXCgUVeDpi5oyWQVfXuTeo9F4gpmUEMfCV9cfVvt5YM9P1DB2wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pn9yvNLrqDBoSuJXcdhX4GthjpcAUCNimCkUyFSrqfSs2YmMzURiFjEQX67KNb91c2u644aCKHvNyRYFfYfHJ85",
  "key1": "5ukkafyxxtzT7La54qnD3i6vJ1R3ZrSNF3KHRrcnBfY3LnqiV1NkezqxCMkMRubiGgY6v1HuL26TjSyjSiw9Qkp4",
  "key2": "iioVfP4UyWNSZH5FR7JxYDKgbjfLARqSLpcWkEqLCMskBaZzRpen8tBQyTPQELaozQuRSp2piFQ8yFLkxQ8UXer",
  "key3": "4a1EKFEVNA1ZzbKKc5FsT9mq6iE8MTTU5TQKvfWmiXQfVRpSAwK8iC69gp6wmhb1kWYrQBez6inSBw3Nr6t9gjsW",
  "key4": "58N3rMU9CbtipXt4LzhC3r7UsV2QJbowSjF2CCT5s84Pwy6d4rCVjn4oS1m1zMhzb4R44h715PGmQBHhir3p2kQU",
  "key5": "tyHCDJXrfh3PVN5H1yYWCaY4FkFNrsYwEVyw1fCxvtjUSHqAgyCALVgJhWELFhYZ9cMGznVmrjqvjfisNJwGDtb",
  "key6": "91fhviZkp7NB4gjU4fpMuwK6Ry9bCnVjDkFAyss1ueap9wRv2vqwwBoSiVqPUeAhsxRQtmGwHGx6KsHPTdkUj9m",
  "key7": "4z3QFeN1az2HQ2X79AcTQTo2gELvLNpwCE3dFqw3Mha3UtVMMtjMkfxjNmRUQibmXgWhjDHzCBRro1hf4sXNcQam",
  "key8": "4CC52MD3hidv8aPBEcAFPYYtpfzmE7wd8cHYonATgkvY66m39H5XmxPPViVyutmBL42yGmQgzyympmNUbHXM1VMS",
  "key9": "rSbRenESHLwn3VdGfcUxTUcALr6oUiSq9uFK8UG5Q5ntvV8VLzP26gcyyPSxvGWjVQCXmuATx9fn9dftSL8pk1t",
  "key10": "5yRNWQtfHJ1Ro8Sk9GoMfDCHdeJxrksPMUehkf8tnEeiYNABRmQm1MyZYJxwKBhK7eMYmVtkZeMTyFEM3iBCswBm",
  "key11": "4ePZ9U3aE6gcfbsLfedGtmvdrsxkw49eRNfs6tATBNDPofC9fyP7zBbsYXcVoWgsRPwe1k9sffDATQiTNSXFryQM",
  "key12": "23UhVufSANaGBGzTw9gBahxDnegMiZTQ9GRXLg9uK8M2JzTvpCNEQbcpH8xMPRX6LKRCakiXtRbJ7gbowtp6sQEu",
  "key13": "3PsZ3Bv9C1brAfh1fsyY7k8XVwb7DKy4SfM1bcYe2R9HSo4WRMJiP52KaVS4kDvEyWPabjH4KvCcF5UtmvFokrnx",
  "key14": "421ZzWvPXcPWzsgxfCyCsBKM8VF2ydAtgeCQUQdVRgemDRVnMibQXokgq6LxvriS6tXWwiGRVshPNzJabpz24HD2",
  "key15": "3zgxXBiZcFWkW7TfTJEVXuZbbrWDicwMBsHBBVb53oxuLJfScHrCPD4obD2zARKsun29mT5wMGbsD9WpR4xkgcvw",
  "key16": "fPapPFqRDEHNGixCbVRN9VpFR5BJyCCH34d9ZuLazWcPXhZ3nRD3bMv46HCUFqPpJAn1ms4ptjuAxTbtbxFaXeo",
  "key17": "X7t8EAupYyqRfa5wVkpKKVzScHut73LSPoU6MtGb9STz3i8V3AtLZ76ghQrmVzYWSygBHgakzzdgdd3Ntc95AC1",
  "key18": "3orANceZzmuZyn84rXQdzC82XuPhwuGKJjXRANwr6FLw3wd7yNh8Tf7ub7dhCzYfD4UJGikiGXXCkanpZRvZ8akJ",
  "key19": "RpkyQFKsAiFHjDTrUKGNcu8jAGgVdEBt4AdLPDVYVrZTyxkMiQqeqaKasBZSssFAvH8UCSBHJSZmay5BLa4PbUr",
  "key20": "Qyu9cDDw3jnUrz1jcTCgGuq33zAQB6pBu3UpnQjfEizNwpM5LXu8jkLAEfjxUoypsSpvbQShBZ9JH4PbMS9CKPE",
  "key21": "fEfBGphxybQY8XdricorWdMDP3PCP2dzoRwPSAWTTztqRbTsZ7hRpHh1UH9GSVn2viKCHiVpRArbDzWn4J5HuYd",
  "key22": "4YBjnRaZf7SFKEdxnBApNZM81y4MWTzzVuMk91wa3RAKYKg7Kbmni7R6ho2Fu8G7d72ePz3MMdMBqrKiLCZG9pto",
  "key23": "2PNzUtXt9UZRbPk5AyXmMMFncrPrAGEAVLt9DP5Yxf9Ky16T6Cp8Wui15CZ1efemD5eu2GSxQPZWZtHNiu5GQTRG",
  "key24": "2tYrDbV5WVdbw4tXZ2HrqGizzCdhjfXAuaVqXVuZNCtUoJaXqCgWGvHu9tHy8i5zf9y2nMCiqWPvjoudQnhwNzpV",
  "key25": "4P9ceq756cSuZSLjoryVpqHkhYNbx2cHGaeHaMymeiYbZdVpY8qZSbgYWn4VZNqZheSQFAjJ9gHuuz4XkewLVv4p",
  "key26": "51PrP9mooSC9p7hdpHbUFX65RYU4rM9YB827LiGFeDyQ6drmiMMw6K8LmW3C11KzAYLdyLLTxG1f56pJNNApGGp2",
  "key27": "whGivT8xhridjTUc6XwLg1vJQ899D6iY1UFHJGM8eN4UeTDPJ1gRVW3yhKsiUTcEW5TUKzHj5BmxDbuaakEDfP8",
  "key28": "27DQXkHQryjEkRGiXPKTAW4vFjRHof5WrbZoeHLTSSeBvFEuMQnpgzw9yobheyueGntJwAEGES6y6YjwjDTDFuvB",
  "key29": "5mnKyUYeg8UzS4HHHpttpude1zHwj7rauQcFLpic7yHFN5kXWxyQK6Kgx7ZXcz8YypMcxgep1z7qyUjgvVY3P7yX",
  "key30": "2YV4NECadvsHP8bmrbrtc3wSNxWXyxx36SVtkDpQg4r8BCfaz4VAwqgvzLemgxUi1axE7krV4eu1FoxQoZ42PUsh",
  "key31": "4eGM7x5SphN9cyqgm2sDPwMBHUWiziM2uV1cxVLUW7dnQQGFzcMH8A51HekZ9U7t2SVgEaqK4UnWDhdyWfmRFK6u",
  "key32": "2XfBAYX83Rp6BScAv3bPosGtziBhVFh5LAFh55jHGDQe6kCioRj6XwHNcrRPm58bay2yXNPdY5suBYD4bUeZAHx6",
  "key33": "5T934sY6GAhR4eSLc8io6smU7dd4k6fmth5otn5MNBEGNhkPQwJ5n1TbTpyEsKb3fsAbM5VdKYQ6LC7wEo8S96uQ",
  "key34": "61WkdVn4rBPU9eavUGUVE3dFcicTQ9cGSD5J4wr7BjctLFerwVHwrzmU4oAtVXaN3D2G8TyRkSmH9HaEUNn7Rnvm"
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
