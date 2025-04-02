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
    "5MawgBmdKAKtwRhbtxy7X8ZQshvBdFUrxJgT3HGFu1KdoRrWha4yHNtmb8nYE2nh2rrDWSeMfKeHqn5PtM16BR1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgARAHhm1nE8vVw38UHprAxj5ToCj5EQyBBg3QzUG2SpGmJcJU1jHnUJc8GHAmWH3PT2LJCBMV2VcpibQKWCMm9",
  "key1": "4hSHw9BsRVu7YVGtUY5uBbVivgqmr9Y2Fcd2nxuSUQwKd6t8u2rpGRL7WCH4ZAr6ZJpMweSi9KSeLhb8DcaT1QWc",
  "key2": "67D4jRQqPtGzWqERTXCWEKjRChPS2XQmKybNhQp8Z1z8WfbFZ5Ums466r5tqitvmVaHCKWi5vST3ZHquACy9GCSz",
  "key3": "4fLeKotCj4Z7N2uZWH6CJrV8kiMz8MBRX8NBFEC6Cf5EAiQjdnVFgrRnrkZefzGn5q231kE2RUUwL4nHJCb8TRXK",
  "key4": "4aGvEbZnnsayQXWWZyDgV3ThpNAi5Z6QbbHzMmZFXsZV87yVaE33eHubLwN5TfaSKyVt8ekySvzxG4xsfonNUzHo",
  "key5": "2uEwwmLkePEFNYArirkrDqS3fU3e3TcA2neomM2NsEneBrk1k7rYW3FvSHFYG6BHqy6zAVQBYy3b9KQVhYQus5Yi",
  "key6": "QTVFNfCQM3HfwJHVY1aGFJDjZpPnrVgE448DBQJH45J8qr4o3mRaeaqmhSHweMLQm9HcDEvXjhUJLGxyhe9mzKW",
  "key7": "45WyFrygvbDhzdhMZErq69gkRnUBvVNziXSg8sp21SB1V7R4Md6wzVuuWsjEtQHMfZNdwR5aeUUfwoxA4Y2c7VQ",
  "key8": "3E6k7FdYaWZr2Y2CxivyjZob23vzvGipkaTSgVXMsxApGDg45njHyHvJ5Uur2vmDkQ7x418tQuwXEWBPyz7znVfz",
  "key9": "4M1T19yTrXaUwx4miprQNWcyzXAAD5ECkYUoeqY1DK5rtuW1wQSYeJFf6kn3CWd9ofmekQmRHcwXjVk15AKsHBNg",
  "key10": "64vprZAeL9HFci1nXKZMv9j8kuXhkUE5nG2SFa6dy95ug3oNa84SvyM7cCw1L9NQfDKgKvkNya9Nj5pYuwWVbqsA",
  "key11": "64mTGqxDCciCjc1UAtBgFyiDuntwFrDpa9dH8VFMHPWNjU7e3e27ZdEuScqKdbXHWjmaxtKhuUsxQAad2UAcjkBd",
  "key12": "2Fqt2QLaZGKNuouH2KqPpWCtTzB5avLoQ7PunGWhJUVcEPxGae1RSVNUTMmSoTL9siSsk6CZMCxpYMKb8EgwpDL3",
  "key13": "5NpruDEYRCXMtg712JqWofu2nTsTS2dFfSwdNpxuy33AtKH9mgyxPtyQHpDshccH7ihKsF8M2ZDKBaARGkPaEnUo",
  "key14": "G2Wdh744J7da7bAVo6bZenCQHy1uq6Vu79fMSqsKnSC9TtKFPDnAFUBDczGF4xfvaRXXdQUQqb3KY3waA4jUfir",
  "key15": "2gza2EYME9GUnjTXATkj2BTjxNRCAsY6pkkr4koZ7RfEyqT4rY11oXMiDB7fu9FxYDCr7qLYfjKAJfyUvjS4HpEa",
  "key16": "4UzfXeEKdGtAdgLnGgZivzXq2CyfqpTT7mDv2WGoSZJfBiVLGrLxmSd6nYNdAqpXU9MxN3LyKSBFY5TxMDiGERFK",
  "key17": "3228UtdeMwHqCUYDVXn2xaA6cZaG3Um8sSu7tt6yau9JBwajVg2ft2VZzv2N7Jogu6cjYWwXeXX5AyzmqNaMu8Xt",
  "key18": "67W7JLoQoFtUGBPHCKKqXzGCQrrmUNybwfJosb4kFVfp2XKXX1GjGkR7tE8AWMR7cPwbf9zUsnD2PkYm8E4jNmvn",
  "key19": "6793QySutnJF9dSHwPLM6V5Gv3CrbhxQDwbqk1WCCPHsrzsdhTxgMYjoyCcXVJ8nEY7dRtsKvrQaw9sr5gndxCtJ",
  "key20": "5yDTQUxWkSh4URxB5cti11uAttNWstiszCXKRE7j2ztBtD4y1yCBAevaTdJ12pLB8oQWSnCXZaHzRFXWEhFTWYgc",
  "key21": "2MhHuhkiWr4gB6f5iRuviP8ZUrLUwA1s1QcD494vaBezMpNRDqTeU2VvnWHNmZfCyQ9DakC4Xuq1ERKBKiSn1HYa",
  "key22": "4GKHKfUnUYmmsn3ypWxqsv9EVU4SVncNUX2knzvo5iuf5Jmp1g3DyhPwg4xHU3GRgmWmZ5LezNh6KtJm8QTGAg3W",
  "key23": "52ph4PkUGZCAC1jhaLynniV4LTRXUsKnfqkKTYaVBEg75RbmoP7CcEKQUX6GiAqxL3tgxjGqshyTZGHYeQjAgvLc",
  "key24": "56jWwVha2WQECK1GYxRMdTTdqnNCHfudqtRGWxGHVE69zDjjDQzuPHpwc6ZxyS6qrgYKoRGxmH3PJ75HYc6mFNus",
  "key25": "2iZPZgZLaxkTeNjtGTcuNkuFK8kU4CHnSokGqMJ5K9WTrjS4cZAzVZ8wDoeE9nZoBcqbBpnXiDLBMNyJFJRpD9u",
  "key26": "1YLJDMWfZ5SdEmy1JxUNfZirtAGTaXoKo2LQDFaoN3EQXw9ZLkwQkZgduPR3kMvvfDkd6YwqExemzWscb6twhyh",
  "key27": "dPNVSHoJXkfKn4P2dc4Aty8XzDwstFMC6wD7CzJ9fiM4WQqH5Gadv7G8QzPDxvP1PSYSAb6BkXuebKSXc5wzxaR",
  "key28": "3CH8eerbYyFDbRsFoYkAFVRL2GgiN68vkAYUf8CYEBnnrhz7hQwMoMtBgDEqEuUCgas2cAJLJWhvwkfLexw7NAJN",
  "key29": "2c2C5s98WnH7ogXvNu5rBFqiGE7j6xnJjrd23zzgAS3BxVQSsAjjUVUHgip2JvKYzd6AxMrFBMZQAqmFiLEMvJUV",
  "key30": "4MthnsRUb7XxyJzS6FiqBaNzhfb16HzaaqG4VrmBQRRGt7NGwWNfudst3xdUjGtH6qHYtdq9dwnnKg95etVnmrY7",
  "key31": "2JddUwaMawFrZgS5ahLuBAqZoCUihdtzdFdyDjBivr1ZEUYwPtUdeBXQ2FU8e8z4swwpf2YdsLfcDvHaL92n1Syv",
  "key32": "2F9rRYNBoczd2vTAWCdWaFppz6Pp9PRUeRH2Kn8aJVGdFsKAf4N8kGPyYb3PLbTBtTmbSs191ns79XYj83jAFfYs",
  "key33": "2prJz4DyjnMyWxjYxGZuRWRABoMX9JMAeNxxUD91Z9NnCG8pZSXPMHiszCajV1Z8ht8Z39MGEpDLSztpYxiHEW5b",
  "key34": "ZqLgUgpuSJ9Gsm1T4kyjogQwLBR4E27Qga4hraLnbkPvvhe3r36ALVD8tpw351VKD5LcQ6ywJiBt9A1WETTFqnz",
  "key35": "4dMjwh6ow2BpBaEecKi5dBfTU3gkYukjhzzp8uGiADqRvgBHD2U6xivGEdLyPW5nEPXT5LifauHQ34U6FfJpA99p"
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
