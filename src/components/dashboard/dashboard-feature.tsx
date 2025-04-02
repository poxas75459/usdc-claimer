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
    "DKZ5E6KYZh9tbkGeoRxwxdUU3u4jqyTGt3GmxYRiW4AQUq5RXF3xoyuFpiovz7WNjHKNRh2uZUdRpw7uKBbAAHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tojcHqNb4a5Tn3yDEzLZHeRYmegmo1chAVeBEZrxFR1Mu7BtZBhqtKkWoFbV6HbLAu3Kc2NH2xecD1z7wVqF72g",
  "key1": "3DaLnX6ktsfNaXFYs8kGzfM36yBYbFqaxhr7wpUG9pYx74UtWT4ZQvEqGgafUQtbqBeKbP1FML17xFRbe4jX8fsU",
  "key2": "3hTd3hZK7RYsPAYxBkuoJnP4pyVHjp3x8yF7WRaRzABFsU8mX8gYLBDBciHS4sUVGwHpNFTKhVuAWXXNvE4gcZrL",
  "key3": "F43Fyujqh9gffdVMH49WRzmmtTzNSniKydTbssznV8GyxV2YJCwQUmyZp3WEeMkNaAZoPY2AHa1C1GYPnpufpiC",
  "key4": "4KFU1k6JANzx5nDvfndc7dHUBDmPhRMNLvBhj2smwCFVQe7uGfbDwDCGwgCK1fAfhzUN36qDDx3Yk27ezL5q2CSv",
  "key5": "2jVwWWH8SgrCNQPBjieeSH9Jm5ZWqoCxutWkHN7aZsZAXmkHrxhJqTq8vKLRYEps1Vct9AEdSqxhmfX2GzSLbTMo",
  "key6": "4Nm3skPbpUEMp94rXdsJeUwFs7UQ9njyvxfCLkhMsWpYJYfcxwHCFx6Xs1WZWca6q7R3tAXcS67orQHkvbutXf24",
  "key7": "4XwdWRHTiLLgPZPtLWRdvFC3rNtfYqAvWFXHxYPJcn46XZFEvbAstyeM92WcfFnm6Le8m1CABKmj7WKFWA81Uw8j",
  "key8": "Y4LF6QotdCRaWxq8VNTyctDZkSaTpejPLrXSKSRwTn439fDaagMpNPjDQ2DTqS43AaXuAb3A3bcnTxLfxdoSQ5r",
  "key9": "5z7bEJxpEnmQLEE1iHD1WXxqNMD8HTvSjfWgLTjtAJGL8QVEcTsZZbc64xgvUQ6AuQiShcdmz6Y87AXZD4vJAPTN",
  "key10": "J1W5C1tMzrya9f5jeponJGuPa3qUdGfznoA393FJsEZfgSAqwimpqn5Qxyck8wjc4S1h7dUH9tnL6ukrHy4WGa7",
  "key11": "5bWrBhrdXwxzS7H2sb2YxsqCDGgpCxVkY36Dvy8s5TEUzY4wvFFDTVx6oCMDwmRp2YuvVmr8Yc5q8mkVLr5V5JeG",
  "key12": "3zM29GtPEsZ6cuzy9BmqjaDFyoVQRNJHnxCW9ZA9uwpqDSJdhB3PdQUsMPgmudnj1jU3sPSosP1gYHgyCwt4L9bi",
  "key13": "3wK8phdYNU5Mh6ADf4eVUb4rABdq4fqtgmAnS4LjpLYGVHRWk8T4VZ8rnK1j4Lwp4FaW9pcQJ7CosxbBxLcxChTj",
  "key14": "3nHfp5y6gmt36rrHkV39Bq6nqHdT5waYagqb6JkKzhemyuqWx69Rco3aj4iLoKKhyfoaBgMAQNnauLwKFaeWbmJw",
  "key15": "5rHtqXeCDiy8fMCKzWZbX3eU5Pc3zYN17N8LmBSwnFv99hARkTqDefHrgWftESyEtQgmWWji2kwLch1uiJErgi6G",
  "key16": "5kQ8QKaYuwwP2yzZDDnJYp3ZNC8PeazYutyku9LMHg3BKaGU8Bx8pkmkGLvF2zb27TxxmPCqvFEAMUy82QFsaipJ",
  "key17": "3Lr4v7hUccMxx9unSKwnWqAGV6UdBffDjr2jDcPVpo69qjHEogYL359rwwp5Cm7z9YoRVTnAA6UdJK47cGd5PwKj",
  "key18": "5U16N9RMY7J8Nd7oxyygJqTmKesAr4L97qoKoNyVYnFgnzNCbE3yWcU6VD3AmEkAf588Q6hQNFx8HnVKbGTogRcs",
  "key19": "3tyE6hftUdnBS6QSMqUQU2RXne2L5r37Q2nmd3FNWXtzwrByaCV41nRsiR7FJmfEGQXX3VSGGLG9ouvsKBxgbUaj",
  "key20": "4EjnnmdpxVYBU5XA3hGRhixBcd9KzWCVKqEHPw5wekFGnqhhaDP1U8Rz14bZ3Pz3ir6uHCWb4LfJSSF8MNnbnc77",
  "key21": "aTncDJFuDary1TZQTdXUmfgAeg4ZBhPLG1uzcAdftb3vQdYe4WyxowutZPJEqjAtf1Vpt5crxEkqjBDeDDAwBhx",
  "key22": "2ng2EHpzPfPPE6f2FG7MdcDzwxVs7Kfz1xchPDJRhAPktTQQ5re9a7JQxsmygY7kNeNynEmB2MZvh3JkadP8iCNc",
  "key23": "5hbwCYCS2BXFGcQgZgvncXT9LFggAjAxG1S461nTviTjP4yDXdggEokiubsdWLU8XFmyeemZn9k6XtNYWZJqUmad",
  "key24": "24uy7GBdbQKrQCX5wVm4fWUf9n7qkzCuJjM5dreyQnUf9ViAjQ2VX6tkiynQQuZrWvrdaWysFQUGnYkwEHjED1ZZ",
  "key25": "53yrHLVj5RBzEh9B7Vh3ENGrmKkYuz2mz49h5TAJtLhfNEn5QZ6SapHyJUzTssZJfk5VKvg8prvyEjetC9BntL72",
  "key26": "fb2ywWAcR4mg2owPz2rYPQBYQyC9N1gHLaKv8c1ybyyhs5ySW1ezm11ki4Z1mZqfC7Lj1QqDLtxPAo9nqRRjP26",
  "key27": "3Q68v2Ea8kBS4xExzA3GMiWW5EAKRmq7cFUS3Z1G2J8rUoJTE713JDaoyUKpMcNptQ8DiVRJivzrohRHSoAKJcy1",
  "key28": "iZVmnspyNvBQtoSzmt4JCsUHAUP1tenEbWsH6BSWnB8Vua9AQbWUz8WAHwLGL6t4EkRfra9hKqhRWSehyUfKNUg",
  "key29": "5L1DCjmdZVhk87NKCCDSgHav2ZfyEPetLuuEn3rUgwiWpD5wQYhqcpr3Uh6R84vqFJw5xyAAtdg4Qsngn5dxkcFK",
  "key30": "5QwUSYPdNax9itY6hLzFHxGCpVgVJjdtsBTE1BzkqoX1UgtmK6ejGNdKyGAjZq2aEtPUsrDFL4UhFyQsDu2qWRuq",
  "key31": "3H3qfirkxa8ehYMrzCYBb6DUfbjX6PXeFaHgUyZb1G2cmLdasziegpDRbZcbJAFKQZi541zX7XK7QtnNwteVTt92",
  "key32": "e1fpGn4iWBP6LCZv2W5HTybVihrhnTApu2W2YTveqNb2WiVkq1edUQcMasXBvFoxzTHp8dgjsmWvAZoKYyjQ8Mn",
  "key33": "2mp6FMBuqXpHQHGDwFspFPgjdEHWU3Sk5Etb5hNWEUWcd7xai8dgbb7BbV1G6Ru6Z4cRmoS7M2NcBSRULwBPDfoU",
  "key34": "4Qdw16kA5QyHb5HEm2hMkAt15eDjx8DpPhTuKUrgD1dBNQk5u3Hg1mGPFVdGoE3sdKStuWoXtkrAjqvsLXqL8r3c",
  "key35": "4XzuUJYWQz2dquvKtCMB2APd7tN5Bukz2ednJ3CuHs7ZmrJ732aAtb9uJG9nDoNqV34KWmc8Lv9i2vF5Yx8undgE",
  "key36": "3bHn1WVLjEvPsWUr5qBajQbMw9N2GMXJ4kDmEvD6XXBgaNgVEJdbSigv51UJHa6GjvTVpgLVzjVYsoy8RJHc8cvR",
  "key37": "3kKCturqQwMgbBr4yoZ1zRjYLkn2azzMjZDd4PWv6ANTJ7Vkos7kwssY2Mbv9w6uCC1CvoxLh72BKTctTeoTdFEB"
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
