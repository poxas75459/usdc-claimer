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
    "2siggkgunMKUScGSnRCP3MiQaiTPvJ4QwkFwB6RV2xZ48p5KRV5zfe1WJ4DnXjH8p9MFEZSNK7CzdFKPqJdti1GY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mioq4KtkaQsZ5T9Z9pxhddtnQHGVQaiVVSxcPo3TbiDMRGi3zjacLJkzyDB79PXMVcr79S9xqkrsKCCsY79dVMN",
  "key1": "2MaNPA4vGLkcboDSQUD8RMbLmP4ERNHnk7FtobZxKmVPUBcPawKqmR6HnhwXswVCDUqffxPbtTvKPP7H5XLf83H2",
  "key2": "4kUtgq82utd1RKBBaKxxgYTQa3AHaxGFpTQHaXuhjNoiawZx6dHXZNqQiz5Awgurxw5wygTNkoMbuZpD1RoxQtzX",
  "key3": "KKBxv8NVvDQvfi5v2cEnsRPAA3WPxKhicNok3R6Kr8pQb6z5j5Q51MKDtZstKZwKQYU2YfBByfXTp3LnpPNwBeN",
  "key4": "3C7GiYD4DRPDgXUjcbHW1hxBj8S8RwMSFcjt5bQ5uMKS6AM6bLvLB3Hk3PHKjzRZVW2519979m4necN3PrYCVTQa",
  "key5": "7A3w6mg46SQnuJTpVzTNZHDkTpNijguyhNGy8mNCtyDtmNqKdMYRqBTBofEGKjcAdcD8EHkE3TACZf9Vfu5evoa",
  "key6": "2nPvzfuvnrC8TRko2Kz7woYQ1UZknsPu2jjHYJuAfyWTRReQd4jWxZdsWwQmo8BaDjtNjunipxygGVxspMTnU91r",
  "key7": "g6xZPD5MSw3jMWGCL8k9ki1p4ioFZN3vL7f8bFA61bGBwCTSyUrn4Vn9GccXD8xpjnv3T6DuJdYxqk3DyUum1Go",
  "key8": "3t3htPj4axtKSkofcczUgH8yapWSPLFZbjg4qFXcRf5zSonx3ovAsvsh6G22iWB3haSYXUeMLHego18efCvP8tJb",
  "key9": "4uTWspTYEwjPVV655nxdRuq5Yg1AUM8HjAcdXo8MHBo921YpJrP2zgESJdtjGqFzF1ZfVozsDWFD8eiJhfbQ7wJe",
  "key10": "31Jp1sPtEoNAs8Z9meUYPPb3LyY2kct6yn3wMg6CL3L7p6DHwRtqqACv2VEGyVQCqu1HLNdpJPCTDV44VKuihT2g",
  "key11": "RiVA3zur8tHu2Gpc92gbYVaDNvwJ4f75tpJcZhQ5zH9ZxeGNzj84YuVSXjyoxYemfkJMEnnKjyabX7sYnUyAVUB",
  "key12": "497d9vHAWaCbsBsnYyD2M1pXqCME7byDyBeG1uV9dJRnvKXftSuTFxtgNnHvA1LaWceVwKjzDdwh2svDZN1N6Mrd",
  "key13": "3EVGkAZhTZ9GZoK56615wGh9yKxxFZkAkHXFHiS8DLMWjRvzkh3r9Ed6jQnCZYHY4vitsdiAjfsESkCpK2MM3S3i",
  "key14": "42H6UZ5xDNrx3cxwW6AEYgRAU2kc1e9JSwKBkxhhbk63eubGYUi86qPfYRoR2pLrpcDtwqeziHhRCpESzZGZFx2S",
  "key15": "5Xcx2VX1sZCjLBwrDC7UrHFb9e2nVqnTd6LoLUsigH842vp9BqJEwXvjxU1HuwVX7NysC5rssiNvVn1Zi1mhs2je",
  "key16": "ApsWtJyHJcb8mBPHxu1ywu7Eo3m1MHsRahNe8Cc3oUJ4Kj7YduwS95AckgfWvQP1VTP423sK7TgVRKeMfdnXjGn",
  "key17": "ZAtsZ3Za41KL9mzL1HxNWxbC1T7Yf81yMuVWW7mRQSc5mktkG1BCTwRkcmpQYPvgihDvYEiowUm9gfH7Agy7RWU",
  "key18": "3JfYYTZvay6C3izeAGTJZBf746gnARWCqQiQFtc8rP68rfKkNEFHWEDguELofbpkBGbUT63Athi35BCkf6JfKkkz",
  "key19": "5knUKcHFVqcEWPSqrynUKQg7THQobPDSy72PS7obsNyjGpGQGHodeAPDa4gJnttmaZDRVyFW9ABTEakmCR8pFqVt",
  "key20": "37RAFU9RVFjz4tS57yNDtgjLgZ987thXNbMLRCEnB9oxNaVC84pVjFkWJ6vgFztKwN6v4VmuPvkiTvHebffj9bJ5",
  "key21": "5LuE3Amwd33QjeGVdVCygEV5pDuWtfLXDAu711U5ZiLiUD3zakbA3BRNj1DTtJQdeVrgnYrAicTh7LGEN6RsZnnM",
  "key22": "38y7tGGihToTsq8VTitknr6ina2b7fzqaQqTAdY37m4WVnNWe1NcL21W28Lydc7f3CRWSLnziGeRvXTPNf42T89v",
  "key23": "5RJqFFScKLevs1d7tSJe37R6G8GJxkmy8T2yELWmAg7LnYZwJMJckurCxdEwtdR5r6hJtBF3FDCQpxGM8cwiJrKM",
  "key24": "3N9qgX3QcvBRQnYn5NtUaExsNJuQzbEWQ4tEmJXuLfZ5zpZgudJ47LP53jM4QwExEsrcdzUuheckWuinADEcL2zd",
  "key25": "29qSGfEwbZduRFgxoJJiXn1BtUGLUyqn2BGY3Es6rPTu6G4UyrLtSvhYpD87qewGDsAipNTAmdhPV6NQ6cMU5gkL",
  "key26": "3NdAkAScAQCdQA1YvB7k7Cg4dgqtR2MN9MqHz2DVrXg7go9qgL81WdmZ7ZH8TDvucExETLJkEP83wvjyoxogGT4F",
  "key27": "3hx2eexxZSThcRgfc7WbQX67Nf8oZoR7A911pFZ5PKvFHNF8HdnGwDwiMA7SFUbBLTJKxyUrKCdYorgKLoWXzJGL",
  "key28": "3LEgZsyjCGBXGSZ3o144baa3AQoVHP21kzJCtFCkQ8GgfGpK3cTP8xnCgVVbWAJoCw5tGQYvWcV5n5V2UpdfSxJG",
  "key29": "2cBobNFYHS8hgMU8kxjxVQVQsH6VPJ6QaKeTGXX6SvQ391iszyqnxaQBw4Uqy35a7KRmtftVkSUSZcSry31NW6bN",
  "key30": "3BEVd9qeyzyBnG4WySerMTG286SAMGTzCLRhm9bryGkRC538m1RHjzyz3ZdHDTBfDaXBSPWaeQpfryv4YdUZn1e8",
  "key31": "3em3itzW1uPP7GTkRhhJLdMWbUhyq9uAW6GpRZCmykWgTDRtmNzNQDktM1vvMqr6Lcwby6zRxkZdhTnLdpmENt75"
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
