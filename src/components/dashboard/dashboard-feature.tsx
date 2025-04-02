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
    "4JpJ5XSH7SiwA7ij89aqdqmgoZKudcGLe9U3h7tkrgcjteHhgfnvts6RjXko8VWxxYWVe3hbVrEL2b5pmAnRy7dv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJ9nFWFxPSpVjK5wJPgAqgJfLawf3j3UQ6Mx2q1xwtCn8P49v4aZeimKKZUmzoTs8mv4GaerHiUcgKK47qRrcbU",
  "key1": "5yDHVwvJK1JHnGwTaumgXpFKHJcP8pbrByxH67YpKuWdHZVGQ8J9LPg4zwTmNCtn2PJ18XCcorTbMcEQ5kBEpiJ9",
  "key2": "4KzC8CqmgDgd5htiwvQfyTvjTBJEgJYkBEtt1h2YbpGD1dvb9irC8MK2JxRy3jWqifX216yUKXRKgw5yHgsA1qxV",
  "key3": "J3jd8pgwoEt26PVxe2m6jA3K1ZjHqbbmgt5mVFYhTFtDXN8tV5XpxXpbEY9wdh74Y4g8Btsp6cEU8Bx69KLuL7o",
  "key4": "yoX3Aa7odBVHBYwyYP4GeZqboM6ZFg8w6E9VNe6PMzs5ZizDbPQabCUuBTZ3RoySAknrW2wow9wjFVt69SDWiRv",
  "key5": "4mvdPdoSm6csk5avViMuak52LWejmqzvcdTUyxXeQJbfKcZTmghx9pyHnYnygmugLnT3M2w6kgLNfW4X2S7oQeiW",
  "key6": "4bzzo5JGz7zcyS4UWbDGk387xkSHmaDdXrj9B87dxhcZCgEkhBcr15g1u7exDvLxKrE1wLoY21nHJTM3sC4ZpP1a",
  "key7": "z1MUDP8c6zXCprMbwCjyq22EyNTF8fmxn5t3RFwhqA8gRipa2TfWua82uoqxqhXHKFMRQn3iVXQEGsKFyuAtpVA",
  "key8": "4tZQxqdrhMbFaTXfn31DJUSSszPjYp6ANz6MN5aATStJv4H2YnyktkAoqyCzLK1eUDrsaeXyzy8JaewSZiBQAfGX",
  "key9": "28imtNccyf4CNLNqXSCrxwB6dpVJjXLsnnnWbyMtSWPnMz6Cz9MyoBXeq4Wyx8kLPHYHFYxwMak426F4C6fKfuj4",
  "key10": "4HZ5Pg9FvnCca3AwqDJxCiLvC7Yqbavz3yqPboaHeVfuaxtVhLMR9Se2EL5uwMsB6mWfuG7FnWvYqvVc38Zta8SS",
  "key11": "3A4EyGGYHa9ZaBtztTf3dRARfKsUHSjF3nK1iwdHYZjz5RiGkF9mPGaKfXe6AasMdF2sgoATRh6QCfeRGZ7dEBYh",
  "key12": "4K3Uqm6EtBqCVxVK9D4m4Cem4oqT4Wf1Ko76iwLqjLaHayRiEBu35Hp3ZVf7HoK2gXXgsysm3sX6DA8Npd6P46r3",
  "key13": "tKkDZzcLu8DsfAe6LqEbkovmJ4V5pgB2QhpaNZJynqDhDzEMdLDy72WttNguyniMskBhYHUrBhgGSGmqFdu6pHa",
  "key14": "oQisCLvjMQ17NbPyyVbsniMYAmEVS5aaQGSWxkEu9pFMHGM4DMXXs1hhQUdjoGCs3dUTyqNk3et8zkZx643A4YP",
  "key15": "5DkHqoScT5dXXSQTGPRqTtAMPfbMDo5Dta2RVhAP66NhtU2m1znrFHhzG4AFKHM7xiRGRpZ3YBWJ3oXCdGs4vT8A",
  "key16": "dqTtYXCMBCGxnmWrrMXCZWmvsnZ7ndXTy8pXV8MPquFHSSiRZdw5SANgcbu29mApeaVRVJjfTXreRGHjf9DNrAu",
  "key17": "2aiwEPZuKvgaYMKBhwaGMyrMSgRXKWbKLpfti7vXmvta53hy8Sc72et9MUe9EezLkY7YKKMeAUtnoiKAvkvSwBZa",
  "key18": "4JP47LESfUaDHcXwbu1q3FJX71tV82vkMnuXp7wcLryBGwrad36EougWokV9XbJbUeJis97junvwcvMoewZRySPG",
  "key19": "51uCv9i6Za1sh2VFN76bPJfzPW6wzgFXKabUA1hLiJqupJBKuS3bEw6Dk2BzMWQFdyju9X1eeBAkYdC1zQMcuhc6",
  "key20": "2ex6fuP4BvboJbB3MaKF9yvk4hyZmZmRL267FTkfFASMo15wX4V9TsQjNKtDtvYqCShNZLjPr1STgUyXD47MTbnw",
  "key21": "3Nt7VSAu1f1L4YiVGx8LRgf9y84A1MxnNRsWV8KkBjzMUSEkLZcXNYt8HeSnbZ5Lzws1D5XsPJRZ8gcNK1NtYWxp",
  "key22": "B5gP3k9akX5aM5EbZuP2MP84GTTVeZpKZ3wBujuasTSXdtxbwan275xDKxM16vWnEQAHMQzGb8GRCxpAXWJi6VD",
  "key23": "uDzDWBk6gj4EyaxpKHfZNN5uG1itK68ZeYCw6jqXmtCBRELZAKCcTmgVsxiRj2RJKZyfcYQnGmdNmXDxr6iwCup",
  "key24": "bx4RXz6KvNPYa5as4myuEnVimrxVndHz2iZWFJrmxpGPKyNCLfgfRNVLi6Ej73rsRLuGAFeoEhqFgPzWH6nW5Yi",
  "key25": "3hi2UFJoawFpMW1HH3zaACqPFqkDEWcixpMKmkrtGfFSsDhxdgiULWBk4e8xntNMKFvh9jCEtddtHZnm99zdu3ev",
  "key26": "hh9AsFrtMw4gPdPwxhZgH8VsD2eMbPNPPtd83NErwSUZBCSC4HHZi8rbEFNc3r8rYTTC2q3Nfs4RqgJKc91V3q6",
  "key27": "w82kvpPfgiombQ9epoqw6rMfRkBhbsxyUsvHv6R86F5Y8DVqcaGQg7mbfz4mUKbn4rSNDg2dbtuNqrccLysMtxw",
  "key28": "3NgZSJtCZLUph96yDK5S5cQRWgVt23BFh7XAaS7HxDDGsGkfLzWiBZM1yDi8suqTep3A69prRVPvDa5dTSrT1JJe",
  "key29": "5NvUzbuAqDsUAvegYzzsr4cnohGaTkxFBLmrNWkFQE2JGDYUkZvBoLfWQU2391caAN9xvmN5KguroqLsrGASNXJE",
  "key30": "5KD1nKhLbRTLBE5WPDdCLQNrqp7UkC9JGj6hDh1KNL5Zhd4hNg6hcckKtwJQwhRAEBFCUjcJnmnCeDnVrZvtagix",
  "key31": "3P2GFjbEVBn4D3j2i9GXVGVHjPbU5vETmDSEDqka227zWnPoxzxzHb7efdzP4a5rz5i4NTkUK9jfepLMffuLDaeH",
  "key32": "5eZKuZWd9beZagnHxSr3DEBHCw4QSiWxupiJ48WA23UioFcNVYzq8zgScNRRdMVyyDZfmdvabS8GKk6ovHy6UBa"
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
