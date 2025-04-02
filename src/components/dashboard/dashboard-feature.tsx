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
    "2Wjk9ZUN93TK3xjVKvrZPmXtx8UgF2PVC9Vm1cAFBTX7JQaPMZANxRxztHVUiVYY2oPeN24NGeEyPVLpzzcYGk52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dddem8rNVPEGqR6YZmFpMGB2Ao1G42ZXbaE2EY8uuApEVuH4eVnhovw2ZS9c2o27bLF2iAbzGNqSQjCPxKG6Zpt",
  "key1": "26un9iyu1F52STKCvd5vtLuAHaxpKRBF2vMRsE1owuJm8MiY7iNbDujxrqAB5J1ukMaQSSBa2TLhxZiDnhnVaKTD",
  "key2": "cbRgdXh22iFCwkj5bHMyWK1sKHfLvnKG9md7Pf7PMqvbq2AobKhHFsc2ekgY8WJseMugYNmxbbifXgfz9KNB5V5",
  "key3": "hMJbM9qfb2s1faU79yyK8TLMDBA5UUaiQmiNmAhPw6QGQY3abTKTp3HVBSAkhevuFUJGybPrYGH4TRoDYNAE9Cd",
  "key4": "3j8Ge4z6SKzs92GrQ5EyDBVDaazr3zeZhkhC4bGZe6CrhKXgWdpDQjnb9EANJ1a91nn4TC5TqzH8CdGKpDoJWfC9",
  "key5": "2Faz6XfU1EkiGWXfy5ZCx5fo7bbPCMzyReMfiinp3Y7AUgvEPNzxdPj8v64BEtHsDvq3WZLKkTLcL7XC2hhg59fY",
  "key6": "S1MCFHzdCTZZbZhLiTxCSKTq4ZxFjb87i4JShKVgKjRLig19picd3oko9Rp7tYoJ2izxUmmV6ncNBcTPquCKK9d",
  "key7": "2aBPxzctL8xvc5CuS4Ludp1SckkUqcEFqSBH66xAKd1onicDJChrq5gwTccTL9b7gg4LVuyhvUriML4qiScYU8WV",
  "key8": "eSx6eoce9wYMHVhuonWZBnAFZaN4GNGkh3u1TvCXnQgqs49HrzQwS3NKiAFZ29mt2sDEopFjCEWbincf6rV18kx",
  "key9": "5VyUJ5yCDHAyDEiSuw6vuXJogofcZp1agDq6KUqBgwLXM7vhnCuNYfLq8nMiw1pmeqQrXDbNcsdbJnUBrxuAG5ar",
  "key10": "2XqnnYhfvUX1PapRTCiyXrBfczgjEUpytY3mkuMnD1ug4zn2qLCsTaxZexwQ2mHZxsNTxxEmSxDhcmStZnTrEGpK",
  "key11": "2MB5rS9qfzy4GeAbV5xFYg2TmScQgXooiF4aFQSFsWsYV4JSKXvu9zPtmVoVzN3kapP1KVeEmZZARp6Yvb1VeDRR",
  "key12": "4nwoREa3Ns47ZJapbrUUESJf8jrSvDf2yAEaSo4CJxB5KvfmjCXr9vRwL7U2gTPX9pGPr2hHiz3Ta8oc3zjGdgyL",
  "key13": "5FE21qs5FkcJ636DWvwzNqzM7v5BPrUyG2wxp1mA6aBEd8eLsLLq9ZKdYVsoGFtijSk9PjPE9yKBjX5hAgHteMPQ",
  "key14": "2rYs1YUk7Bxzs55NxUELEdTw7ev1oUvR3aLVfkGvxqWXwG7s1PdXbkgz8bC3LTMeASvs7E8Sa4doy29veKN1r7m2",
  "key15": "2f3SpwCDNbJrBJNs36k5dk9LJ4HjmEUsZDLh7gRQZtq5FqdCn5LuNDJZVPdPex3oBGoSbqABJbeT9BE5PJGKsPyp",
  "key16": "5ST7pizu975jpjAu2CqgzHWtkDNPVWqT7A2VW32fcMfJuJx8fpSFqhabAPbHaXndQGHQqi8anGXuViYP2AEi4jdg",
  "key17": "2RFxDwNyAvR684dkMkpxTh8FSoVugxA5Rx1y8CPQ36ZMxCjKvkwaUAsjqwb2r4BH8hmpm9HmPiajVxAGggmo9nHd",
  "key18": "55JEN6ZaWjuDPkMebCumLY1p8Wzg5PbqQubJ5ieATzftYfmexBGXbQXVDPqi2WcTCJhEfeLMgpBNRHN2rsnXYptm",
  "key19": "5m4tpVeY1hWoemWqwMXm2o8RV1VqViqjF4TJTJC9Qgx9T1h5B9kJHXYaXxUM9z5n8aVLDfCEzGByRLkepwzYE96c",
  "key20": "2RczpUnx1XjmSrdFAULcQ1Gp9SaLXWtCybUkzcfbrvRT4rDtT5hDGMXNneqxjqmkb1RZbe4yLaWX7VVPUTM51Aq9",
  "key21": "2WK2TsuDJj5NzCSD4EnVWWvbnmi5qFqPTE82TgRcp2yoGRVmavWxAsjgVLWphsc4ZP8AUpzcoqgEZgCv5sZKxGJz",
  "key22": "6DCWSMwwpRmm7jJ67QvsUoyivaaApDqdqcxmR1Y8nEa7LRGyZmoEfy9e7dRQ5YmBj8HdEhAcYzqtaGtehZjkARU",
  "key23": "2Xq2H5gbCX31fSvSvhSR2gwRJ5gMNGTyg2XuYKPVGB1nMQJeMQRXBk8EFSvNjsU9br85CNgTo54s4WT2UUD1r3jn",
  "key24": "4VhL5CU21jXymKA2CfgKa1pV64EoqXeHuAAAwwV29bu3xosMpGzZd5tEuemqe54h6wXoTvVo15bQU8XkVUFEryf5",
  "key25": "vpDGu8USNYuSa8CHS9PYLadgCj27wP42dF1WjMHjFAt7iutFS3yZWyLnBc35oMuSMkud8huBnVzGKL5mbkHtppT",
  "key26": "3BftJoje4D1fiVGuepFpp6gAHVhqZXZ7BdzbBfioRePpxxqoCNkgFUcckKnsJrC2hXHdNXbLhzM4aHnZAHmLnsBd",
  "key27": "iWxznJMdewGS3krmrmr8tj9Ge8UxW5m522bjAwW96KPWXpYeKssNkFEuUujESda67QEgqBFqWJTeB64Hp4AGQmi"
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
