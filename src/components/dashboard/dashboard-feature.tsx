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
    "5PCgY1mnrDFtvnJyZCrnVT46ZUcXJiT4eotMsYfcPDB5FBNRgwQkiqngrXbFNoqSNKkN27Zc4APBfnakWrhbrT1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64umRD9PEm73iTznb2jJbRUooXzu1YUXMvzsrnpj2VkRENvBTzeddBCZC9S8PR6CHoE3bhx7eKTfMZyUtziFLhhN",
  "key1": "5DKGypvRgxqmC1UCgkAgLAPwqRgW5fJGNXsRuDmZxKzagLJ2jeUqK55pRbiBVexayfK5Zhrk9szEWzGZAs4sa1Sr",
  "key2": "4DWZBYs4UzArwKjj6tai16auVKGisemaRM1kAGacUW3GViNb5dkcXF9fywcerhLdv3MdBFVPEsYD85GeVj27X8SV",
  "key3": "3MxPm1AxWJQSNxuZ9pYpnFy6NHgDdJuQGWGPpscEsueYZ3FJAQtLGaa71M4wCLn3oHrs3LNY1MLJKHiMG7GcVL1k",
  "key4": "hJybaF2f5ttJ5ZmvN8zQDJgJgS21FuSckAFoo3w8zNZtapqhPFSdHji89wJ8SrGYB52cnLqZFo2RN1Ueequcinj",
  "key5": "5SFJmEbvaBUemwihSmy6MzRpmYLjkVm1JeikVTdKGUNGT8cd4zE76vzuiDQQw7bxnowkeV2ynFdX1VeTiBQTzV82",
  "key6": "5jTCmCVW6j2AbfZhFwigTUfhy4noaHpUfRs6SBGAASrAf3frKE55ALdMjRHfVNFKyCoC3WeP3yf1wUGUzZeJ6WCx",
  "key7": "4APLP3YfwRrDdffoj7PUEBVeV8Az8XyHSnfjXhHo3qJJJVS9nMg2Ykkffzucn52bFSB55VWnUpk6DorgRU6t3ZNU",
  "key8": "2b2E4sJxddaVHTPwdgq9wHYmuYmcX1XV6787RxEvJzJFidsdSRZffgiVX3emcrvpXHSFDTkLLcKKwJvJHGQao7bC",
  "key9": "3RTnSDYUAXuRqnVHYruWMi8zQgjzJXHwwuiYb3fdD86t9Swd2rv4hrxSufUXcbkBcsdmhCQDHcLHqujuQkSipML9",
  "key10": "2PMRRt3xWGNgqQKxpM5MpsrcFWp7svzw6Pfn3RKQqnNYePwdiQgaWEFe2PKyxH4Tqu7HRHGu5bpMXmpsBWwsDjjb",
  "key11": "AXYzrd1UwXRnqwSrAG3EskbFWTucv5ALkNdBkUZGEYYeKTZjdnZTwdqswngtT2YKfgp7Qn4A8pwz4Q7P73ZszoD",
  "key12": "4FTKrm3jche16sZR8kqtqDR7xrXnUWoixGMAU4B3cdTkopxMpgEEgJSE1qJoxzRXZy3CU9UPeGhRKUydneWymLYj",
  "key13": "2jv5fDBatj38q1ovMN2H4mBz1ARvwxY6gXp22zG3nM7oRD4iACKRG4YmhS53SMGuypBoUPBK9Y5EaL835QUpj88",
  "key14": "2aZ8RDBhQDM6PvLTDQHW26yErebo7Z8T3ntskQNgBy1yeMvyNhzCtGD9V2ar2dCBMkv13WrQveF3YYrY7AgZTMZR",
  "key15": "tEdC2ux9cEjcwiAqQNeqJnumXXrmrN7DroAVZut1RNK5wiSUN1UykzMSzMTvehZbovD5LR8UafJh2Wnd6tdhJaa",
  "key16": "5BPh443wKru8bHGY5QUoqUFmQLoDK8Uju9xDmMbfEPZkPxd2xY1quf4n7B4Gqx9XwdsjjSNVHWuD745qk71hi8Po",
  "key17": "3D78rgrqzQoPr1iDtK7YiLFT83YY6hpGi5DNMtYYqYXFvzWQkG3DXuYQiRQuds1u41ewBMGjp9JBbjkZzQ4UrY8L",
  "key18": "4Ey7Ue3MkhGoYjX8bq8otp1FvL1NHkWhjcmQ5Lw7WjSzc8JA4Uk6HFgXszaERdumEajb65L6VfFcdehR6ddiYrjC",
  "key19": "LdYELSMjYrAifR5bqyQffZNrFDKCDvon2Gpm6RgSxkrNMNohR1LmkFXm1PttBHFAn18UspieBm2ocVNJgP49UeS",
  "key20": "3erhfFttgJZqfFxUxbaKjQrDyrihJp5p9SSHdPJP1wFztEwLRPuarnyJaqBaZy2n2ue3BfWHFnvQvgrQ3Gyz8MLn",
  "key21": "3pAB8umo4G1uP293yisYvVpxwgshnCFnX6EAgzabScM96ESHmwG8GSVKQKT1UCsH6sxQnFTeHYc7xK2nC2zFVmMt",
  "key22": "2k5zWJ34jsp8mjijgTjxFDq3YEF4eCkxnbQ6PDyfAE4hPuUCRGfGySngYNgN6MJvTBYPsAUceq6ZCLfZEJoD6Hac",
  "key23": "tNE5vYv9LsDBQaQtVb2Arv46byg7XB3W76uvkppVkFq16fzqjeEWjK5YpY9tefDjLHwruEd5f6W5KTbM5C187FV",
  "key24": "5aAvQHxhPWmKcF5GBa6N2Dvsc7ekgexvPnm4APWiEaA4HcriwyGVWi3WoXR3qKQDWLGuWnY2dSLsWaP7STkNpPN9",
  "key25": "2J3R6rugC7RL9dcsVGqqV5ogrE4nDvLmDyci3DENHCD7fXGgcrLrzaj8Jz1Tr1w3YtBFG8aS1e82CVGRjBiK3Fiw",
  "key26": "g4T8pLw8Ab3JDzfZy1srHDhsLNhtTSqS8g9AJBDaw4AuNaVqL8j6zbqSK6rSVAV8fqRMkZxTTF296ZSZSDjBjRq",
  "key27": "4unLyjACug8BntJ7YHqXJFJUB95pKepB8TVRvU83SQbzQGftSxMbZSNddS5fa1zgxZteJ54K4sfo9WyKqWCkyxid",
  "key28": "5nb7SCdfXmjHwurE4Rbkwj4hDak7N7BafveaN8F17SWUsJSAytRNkbPJxVP8hgsr58mLdeyJqoZkxScpFokyUcc9",
  "key29": "4youpALEJ3VqRMvqUPDpqGAgxdh5BG2TbfdRFVmCoQKLx2aN1sR9s4PmVPD7DTTWHzoqx3wEgrURMU9QRv1M1f6a",
  "key30": "5dbdWiEcDTx73xW6jW6y6iQmZN7KXM21aeSoQMkDKig1HuNqEXZweRXj81eo8kccP9v3Ej4hWDcfsjQNDUV5XzHC",
  "key31": "eGA3EXeNJdcuWzuhigmG8nsaed7w7JofTwzDSVxUySxPp9fGThWbUv3uUnZCAVQTatQxYvSa7V4K7Cjeyy1wc4Y",
  "key32": "2mpz8JfYs2jQ5DkGcTnnPJpChxFovM6QjUkja4JEphunMw5ivdFcMtGhVpyLRB95XbPnZ2aE2hh2CchC3EMYSaR7",
  "key33": "pA5TvqHrAQYD41wQRuJLGLHReVUre5t5vvC1PggFr7ds3xyVeJ58cEcpNydCr2oKBdH61UnibRToqYA7PmN2iMs",
  "key34": "2Dz1ke1pJCB3L8PCkRU4R6KvTXLUuJeq9ebGncrwJ6K12FCDJSH91xFqLjbrPxqMvxht77AdP7gekCNH4LkYfy9Q",
  "key35": "AFNGXQpqBWBtBcRnmM6sXYAu8dcXtW9bHJqa2wJq7iQ2f54b6bfxfuWCJx8eStBmMgYZaa9mAhhyjdWGKfQ1xMZ"
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
