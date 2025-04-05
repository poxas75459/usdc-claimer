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
    "ffpY8RJK31NJvFUopQoDNkJ3ravr6mZ4QnPVcZX6mTSkGYAVGmxcymaJbBZkxCGtkubaBGbfDSDzB5YC2mhrao8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3KN44sAySNGWep1fz5SZBUgVvbvruahJcA1qbKa84vtL9kroKKNWEVAkcEu9gLDE8QVAxrZo63auU4HeJSDMy3",
  "key1": "56FNNz3yAhciTAGxAn1SBjjeYdakeTCp4DKZJJdE4M6FZXZCc5w7JZWDUrwC2fhedc79kky8nSAybfbv7UsBKdFy",
  "key2": "5qehvM6VdDWPd1H9HiaJNDC1A5WnxXzRLCET1TLqTqBq5PfFmvGvbJ3bPWGEyKtWi7kieQpdCDbUgHNsjtZhcaVZ",
  "key3": "4RZxS2CSzTuF8DRaqH2W6GaRFV2Eh7vftg3tkp3UnEjUNqLm8Wc2wbnUGKHejBumcAbhs5jpoP5DirKNLy4mAQ8Z",
  "key4": "4oiDL4bTrdcxLHepbwWzf1ApdHVYvFVXxHfEapwPnHTguCDvkuUUcFdfLNJA76zccBGuhXB4JYGfXqsK98pDNX3U",
  "key5": "4ss2YDpXWLK7K4QfWZRjTA9WdSGbrf76PSYsAMa29JKhXfunAeWzDGJSZbu3F9UKNJiqAhA1t6azCfJtyyfSTHTE",
  "key6": "5DwAPUWRo8cUp5q4DW8Tmw4N8J5vgr3MWMkkrF8to6nqXyuskWt3bJzxoFTUjEj1PkRB6u8DXSLHuKL9bzwCZntV",
  "key7": "3YTLwAGQXUTmNrXNpMd22XgKY6gtQNismseRs6p4CDZigNwFTdHSZfhrZxZtyx1Caonrt2zgyHYFutYVNFSo33rU",
  "key8": "3jxV8AqLwXuVmRxkzTEYbHr4tu4yujuj6jAExmWKTTxJmLkz1BN5n7vZ2HJSt8JgRqcok6Wqypr3p3oyFwNhudC9",
  "key9": "4fXTzj99cHLRhrKbQ27CaNLd6LnEuYSG1N3yzFMBBZREC5CWz8JtD3hxE9Vo43M4fmznU5UtD35gW1qheoFBKwjJ",
  "key10": "5tXCeSxcAQf9rfdH5rQYgjBjeUxoRDzAh2Dh5girAjdsxYcxo5RUHXrWmbohLNfYdqr9q8Ndunu8FXVsj8LHRjLK",
  "key11": "27Siev1S1w5CXSjMFTSpKp63NPrcDX7rYFewqEjZW5twXQDqmX6ztm9cjHysHRC9U9oCbBQuNC42DwbGLCY2ZKk1",
  "key12": "4yEbhcfSzowNckEpsZDFds1tb7voN1vwTE3Jn1LSapZi7vcMdq8J1CZ7NM3WY7BfsP4ysb5kVmNVjfdtAPpiYcch",
  "key13": "31RHqsUJDo7bYMxQyqvxGXX4KaBFXMve9Fmr87QtscEXiWN88ViDs8qsDkAsDCoCq8v1TP3yiUUefbMxEsitTE8S",
  "key14": "4j9CcofBuvN7BJex7ipHsZitN5uPr1tzUbEMxeMnTK2sJDPh1PK4jHYzqWA8zWFJogFQDbsnCn7KKSww9ov2denu",
  "key15": "4mmqoFGaPt1mT1K4b3qz6KfJwNh68grLAG7PEhAwFSueAiYdEauraDs9EtgdXnHPoiu8ZkDWrT1eyA8A8H7U3ghH",
  "key16": "jTPWvQAhP9D433WfZi9LdUy7iLPKvpiMh5Lwfoj8S4MWKqQcgJzVyhfCD3JDMRgdZugvBFRbd5TnnWRQzWSXyYE",
  "key17": "5kRzo3LoDrZXhxnV1NrLGWQ5tfqcPhWigjeR7tTvx6D2YXop7M9xqXfnuRBz298EqXmMgTLGwKQoKxQo2SJ5fBf6",
  "key18": "4z2us4GqMtNeZFAT6kvS9KdidtcNrabM9h8vBRb6fJXeQJDa9KyFz3dTBdqB62nY9P4oXh9UHdc2gXrQw4GRDHjz",
  "key19": "XziXbHSMMCjBkPrDXiU1rJyckjna1erqw2CzW5pyV1VuEB8y98bRDgYNuLMSDjNTBLBvKHSMAwz9f2Cr7gCE4vk",
  "key20": "5ofidCLkJV2k4G3QkkKSZMW8AwJgue7rEReGUm7LLrGB4Fw7SSvG9deoRxtKELK7fyLfKLzXoyMvh7VtjnirZowC",
  "key21": "3Sm9WUkSwTywNXF7pzmvmcocCkegm4SHUYABLsAo5kFEYQb8NmiiHJSRCVCbEkZmUDdGa24os2kHWjqwvVdP8tzC",
  "key22": "ZqaKSW8oDuCzmJaBgbJLQ3S81azhyd9UGBaeASmoAd4XaiZBZ3Czb3A18rG3MQvFx9zcbqg3aDcR1ewHzsXhJFP",
  "key23": "2FryHZWVNptPQVtrHgKfYiacDPphjWSWJ2NyuJq8Af4HrtBVop4dK2PqV5EL6eusKHXes5WfewSv3vZQaJqeyuAn",
  "key24": "4qPYXVxtP2MEdVoDzjGEwFNYqa8d6FfBdseTYbm8FEzm6TkVYTeonMQp9yoR5E4knzFzg4TdDuDMwWWH25h6khy8",
  "key25": "4ejeJTsX5WnqHKu1i3k7973oWyq17UEY11vfJLLGxqLAQp6rizEjNrK2gda2XX3YY1CuR8Ho4aQXSQaLYhbQSZ7Q",
  "key26": "49QnEgnpb9cMDPSB4PvUmrZgz1Nqq7ueY2p9pMoA9YdZfVYux21Zjkj8bWHtHpmBp4oruH5Mh1jy9mXUiAiVNNVr",
  "key27": "2PZ4eFaNX8kCdC1TgsJkTLB3Zdj4cUwpJDq1V54ZW8u6JJX9dsxQBVb7qarQdn28cfD34vP1PEd7BFm7BRTpzujS",
  "key28": "CNftF7A5T2Y3mmUHyddQJ2q12pXxHf6AQPcvGgSVVgGAxH45Y8zu5ptQTMGdL4unyRUhWipoKcUWkMDhs5eRBaW",
  "key29": "3fqXF5kVecH5XkspvYmyrEfncPfSWHau86Jmo4rNK852AAQbhoh9CarmMsxpBLU3YnZDGkptAeeuANv3hPyrhfTV",
  "key30": "3uiKZnYaXbHAydt7JZaAMsWviXHxyUDwKiGWBaYARoSzh4oBUaxHPfxuejax3ANbE5xaiTHZLRM6rcvBnAwYjeDr",
  "key31": "EB9aPXnKmTQtkrpNbJNjjWpTNPN458xsSQ9UjGaV2hdVFEGMDskemd2upiDY7QbUDNcwVwHc6gqvm2qsmir2hBs",
  "key32": "5VYP73Di3zNRDgkQ8UZBirLY8wUhP2CxReo4CD3hWUDqGHRQb5C1TAKsiWMzd2eQffAb9DcuTKwCs5isdQCqbtvR",
  "key33": "3NCMNmhAY8L4ioR2qJgSZEXoPT8uHvCtyuaoDAmor9eBWTjU1cg4cgGEHoSvkZQyD5fBz3r1su8AbyEoLYdHRBNp"
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
