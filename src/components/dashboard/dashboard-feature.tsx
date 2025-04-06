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
    "3NHawBFgRYyk23gPd9yR4LUyT9bMGnoZ9DiWziTAvSjt4sJKTdfEAmA78o7eGt45WkwW8R4xLbxSSBmeKZdthULS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yD7G2W8jfTnCHGkneDAiptrhWgaD65eziiSutoTBbHKNjX4w4fN1UMnoiZMUj16f2m2PFco4sCP5zX2rRNh52Wo",
  "key1": "3xXSXm2dECes9G9muz7BeQSg9rRiWppHvtbkAiAtGuUd8L6tP2wryeXL7ApcbFYWP69WAhxbaiwhUeANdUQ9MYUK",
  "key2": "bcHhYoZwzCSbC3oSQXX8KsnRZ3NTU2mXokygwPHTNrUUnr6ANMBDvesoSND5mppk9KYAqhFHMRVdUvBZDm5HL4t",
  "key3": "4z7p8b6TdZ9HYd4Z6MDmoCTLPFCTsfMu3ShTmt5Cpf9SbvKpgcEsPs195syipDZYKePDT1MW5A6swAYyuTmWBVWv",
  "key4": "4SXFkcGE3GtFHHcbELvnqDqPPSZDZ6PKimvkqR9xFQdNUr7Sq44XAfyiwqG82eUi1A2JdCcpU6wvpVm13tFT9D9k",
  "key5": "2jFTrvr6WnGX42iBgnVxTmRW1uRY5GPzwvGPT3U1hSHQCDAFRGM4gKhwDG4284YFjWJjfWxzMgoBBFaD6wmKSrhP",
  "key6": "Lm8uMN85A2xVEJcgJmg77MKK55EooQwcg17q58DUKcGucXt2vLNcbBKQmp5drdzH1aK4wn6ED3pXpxwdhJ93azr",
  "key7": "JKf849dXhwzxEc5vSGuBjvPxiKGP3NNKhYQgKC8tE2edqjFVs3pmGkWjHBi4hqU9oTv7dBNXd1EX3dxXxtuExzi",
  "key8": "5FL8iuM6xAKArNqQCptZRpxgjJUEmFQaHv7x277RN86dcmPTSzgcxx4Du9XC8TU66DAEE4eqMEnEj8ch4pXi7RSS",
  "key9": "B4HViEgHhXqAg9o2eHbYjxkG3rpXucDSRVwbzWLTNk1GXRFBcyrgeGU9EbJF3ZZFvfuULJE27oD7EaGVrr3Vsuk",
  "key10": "4WxCGVWakU6MftrDaXgdVYQp5aDWUB1UoDapixxb2xCT8EX9ao2fSkJnsQvPHnxCinETdYwK8bT9adSjPea7xutb",
  "key11": "3BrqV4encqLMcfJqY2MGBgcrmePHtxXSjmvf1czTq7kXysLtP5qrD7E1hk7My6UE4p2vtW1fFCsEvgzqvS23jJ83",
  "key12": "49pf4Fvw3GBc1A4FX5kD3kLntiDnFVZG9jPECs1APTuBEMiofEWgYXL4b29A494vGyVf5ceVaczhSSbfNYqj1puR",
  "key13": "avKcM7BWLQEXm1Z9YAC4aRHWkokhgfBrViJPpgQHMWQyGC8S8EBH8ddZ48TuoYkAFt5RpmgM9UpE3uHFTQjMy5X",
  "key14": "4W8Db4phtbE6JovctSvt3MUHSSj6XYCUv8PCQ8Zyi7nU3kULFybpcU2Q5iCLn6Lr4BjeUDmUtCUZEEjvKdGHg1Sg",
  "key15": "3kVNU1N4gyZYgrLQ1sVY4PhaqegVSgqoyRyzEv2fhWgFit5XEEbAhFedw6jzmBiTwcTsB3UQT8xoCWmsZtPGuvEu",
  "key16": "5qGnJJqSnrUHmK5SNYWvzAgUT9Wj6yhw6Zf4cZFUWeKCEP2fh9sqVGx6zNAgEgSoKMLjWgLwDKBSV9L4NBgYkG1f",
  "key17": "4n3v2cTUhhfAttbqSpv7M3KjyDTRTmtLkwEGvGtLVpxytggHTgNS8RqT3EgduXQ8fCMuGZW4HBB65NhQqjaBPjEa",
  "key18": "4B1S2PqhrbBvX5zrTAbZ16aMq1G2JUuP2nHZYSURpYsUQMuNVFj3kjV64fztdaDFz85o4fsrgkUe7J89xiAupyZU",
  "key19": "NnHjkmQ86cBQLqzQBxkZE7YBFzvTJXpNrPFrRzkz8w4rMJtmoCSMkoq9rWNmKtULxSSB7B9a5HUU6YuKStELRdB",
  "key20": "3FaKhtgdziaKVDYGyNTaBikf7gXacEaSuFYNJeQMHYpYe1cgrBnWxki8AxfJTUdW53hAP1779FVZSRBWE3ArNb7J",
  "key21": "4X6JYZi5Ls6riTgHx2RtYLW4aMH1tSKewRNvkREScvSS5AcV6Hwg4RoBJ9NX9SRejN98TPKsxzaBiqySfgD1j9pn",
  "key22": "saAXw8VASZk9TZ9WEE922qzJXXkRrbzPiJ3RJXNsPKn61YdovSG2CBNqUufJiaCozdtfmFkjsFtUhYMTnsVus2U",
  "key23": "5ZBqJXvxcbL685vogPJ2kyxounKW7z8Dx2Yt66bG4wKUeovgCd5pckwb2x53sn9t7UBRBqGyoAKUTncpaRLyQ49G",
  "key24": "4dxpHcEHZDtjz4yb2HftjiVX1wBiG7RcKR84y5foAENyytghh1AJzz11ZA6Qvwz4W185XmrNV4V2i7YvRsETCNVr",
  "key25": "s28PXvGMaP6ghUhksTCAoN2NVeddyWvztDTLbuZShGK93kaueHCKgtfk5LM5z9vcNoVctxtqgMQfuUxkDF6GuiH",
  "key26": "5L6QxGNUkwib3nAxGKqjpeLrGBPnTLgoMYhZwGTbYjgktgy6NBVjYCxA9qk7TszikDrhsATfbTbvdPg1b35Aev3j"
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
