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
    "3FrmZjM4EhunNYwAFfvbRUTjqoVAzcUsafBo18tqcfYSQ8AgoHKi8AQFBFSJdm1yCHxDzwrEBQy8FRTvHa2w95tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5paRUe6WXUFSgcsgtZLRdFtRgwX8koNuc5SNe9kye59J2iz8ddijRg7X6bEr2e1dce6uMsVYXeTgbjxeoy9tN8",
  "key1": "5VfwbLxwzGDiZZwskEAeY3qRUmk3irZ6PbWpyxLDTDFW9CpELu99rMoJbcTpegPjUogZ3KuXSNrfAYZD3Aror8FJ",
  "key2": "4aW64ShNFFpyzetcDGp1oVbeUmNYE5Pt6PCQZCqcDUANVrgMvkpo6aTZoaUQG1GmXAam42emBDsMk9WUKPxaMiMT",
  "key3": "MgNWfJafSE8s3SfxTeCp1G86pXxYaDeuccshYcQoW7nKwDVemj9oMeMp3WSRisSzcf858g1tMYvWbFVxsvLVab8",
  "key4": "4TepUjX3fKtUaMFtJ2Ct6kWKctBwDFCsk2bgWF6azkgQYHioFgC8tVprY1CHiPyNxDPSweYuGtLGh4D1ZdyrfACx",
  "key5": "wxrqzgnEXA5WBwQn8yfegKwxWjJ1dMeaoRHrr3drXRCekr9AzdVx5dSek9vyVdpBKX7mpwmBSBzQ2arCHhFZWeV",
  "key6": "5DY9oPvE8Lgg8DTg8ro87psGwf5sctVoAChoKv3wcJAPAu8Nc7wbkb4tJYNZzC8oobYJVhMYh9J7BGBMNrczPgtY",
  "key7": "4bDHT9pUkhneFztPtiYVyymCLBfxNSXmoycx527qqH9vZk7KjuZ848TrpqeHueqZqphgYVTYeM1YsoxHSmswFJLi",
  "key8": "4oHT2ZC9iBjdvYjbybMkv9Fp51sGwSgfNPNc5Q5tT6Pw19wPLwkKyASPCAFsEiSim9YEQuAYZu637vgTJigPEX5n",
  "key9": "3UTuzWmTQXaFvbkSooqF1JfJgA2PjkMEyY4ZU8GVf4BBmLLJzMrKhpdQQYu4tP4vc2Sr5ctNmhv6kmNjhbcwi8wV",
  "key10": "4dUM9WyUwmvKGEqoUGZThYcMBpW6H2wH1aehqWyXT3eCjhMUHoMmbxgKS8d9kJicwb3HyiBmMMQMwfeLK6LJCJix",
  "key11": "31sfNd5MCjWMNjguGWG6dyyPj2gvXRGmhVQZfnghq8NaTb8U7Vs2NSHJgNfFZkz37Ux4YJnRCMhaM515kqoctSY5",
  "key12": "4ZCyRvjybjkqMK8CsKmbVt4R3xWzhamAu2vcqnvwBac3Aw34SqmgQyG1emS6kuVCMZAhetjcU1iD39GdVrVTPFFp",
  "key13": "2isgxPhYQSL8WwchFKPmVkTKot3UJfrAfkJQswTXUbTpDcufZsxD4UR41j4USC2Gu7eDVn2DW1DLcX1fppU5Zo1T",
  "key14": "4MqDFmnQ2CcWuFtyxrGgH6VpJSPv6KwTn1SfvMN3eice7spkBiRqLRw2xioyTxVYh1DdsrkEVGH7TZ74ChQRhrvg",
  "key15": "5NBbhNXnfmku3whvBN5w2dUH6G3xRwGHMx2DTcGKZ7vu5NjZ1MrpPymJLUf4VaRWZiuKg3grGViZsHipZzP3YtyL",
  "key16": "5gfRcnuReDFE2CNWvkeMh7r6fVa5gxhh7aUgjamXaLwuui3ynqQSbLYFN5SaQpNqruztpDqRsKJcZtds62SrSWAv",
  "key17": "AdrwvNSDa1hdjwbyPGqUWRVUnuz3ALasQiJghN8gmwFaYV98tDm4TDXGGHMA3sye4WXq6LsXYn3ea6w3A7spLaF",
  "key18": "4aWh79HyXK22y4BWzA5MZbMpqCE8mxLsFKFMPYuPCunX1zu6TidTqmqMQag3z4sSKZTrXGZYhvsS499KFNvZGsQz",
  "key19": "hMxEPdNuxXPtR2q9rbyYdmnmyT78tmygvyAmxSJFWKVAJCNtPb8tMWzjN38EwTcFxrRPvTk2GarHE9md54MDaZr",
  "key20": "2S3iysggcs3RFoo7i2v9qDhS2novkLjV9wgwXxXPvfWfhHQ8G5CVGvNF1Mm8SUNWYKcQfJ99D5hPiNEYgYr4mcYn",
  "key21": "24vhj8ohBH8j9Cx8h2c9CUox8n9pWVJ9d2ieqGGej6MyeQzMajymJkfp811dirGp8aMWUH1FEfmVXNTj2dXBm2D1",
  "key22": "j9SatoocGZz9pCPmyiHvFMK6oqtA1WbiyVf9cg7yurSzBpZ8Kc2vSotkgtmrEQjhT8h8aBWjJdx3efuL9xVXa2A",
  "key23": "3AY9wpKARAqTskPxFbSxeq74Uy3AuSaxqSEWUqpkf9TYqBMeqa2jfUHCkwCYYFQ4Rz1VjiVdEAkzooP1tmi44pLK",
  "key24": "2SMTHSvnzawtnKWS217q8JSybWQQEeZRXki73h7fXn4Aigc19YBHd3v8NHadawZEiZrNprn1RjkpzdN7V5hZXLnr",
  "key25": "5x5pBW8VcLUXQkQ6HZSPzsDdmxo8pb7EeKv5t5yE64RARx3LtsNa5MustkAxaAYDVeLAiYBb9mx43Z3YkDC1jHww",
  "key26": "2R1qgZvaGVZsbu5VhNSb3R6zFa93deJCh7bTTYKWxPyi8j9mhxyHg6C4jSMtFbhKTiunaB9yhN23bwWvqcn9X8Jm",
  "key27": "64W4QHY3sJ9X6T9JqPA64fPouqEsSrogr1CzjhUyXXgXnwmF4kdrRMxHZMzRtVxuozXu7tGHT4pK6NaLnn83dLAV",
  "key28": "3LdtzNUB9KtghiyDrpFaJ3rjYz6HwVzAv4fUFZiHLkSZ7GPRaVZVfuWwyFLw9MMfaqcS4PGPuQfLFvyfLahCiVjV",
  "key29": "2sZS7SGvcjajYwytv7YnkBCBwzy9v5AuVYJzyXfe3vcyJdmWQ9z9f9bimZ7Zsq12MSWnYRVrz5JJeDNFkfUz7jNU",
  "key30": "3VBwBk618UPyRFEGtjg7q9UgKpdAKGco6A4ELhbbDzUMTeQGYS95RJs2YnGYvWT4k84j5irzmiXATDVFY5USWqb9",
  "key31": "2NmfjrEgjfepmVs7xGKQpwiNJhtdPddvMhwk7s4FCStRLdHhsu8zNnpfRE8zWZcWy654C3YZhDwLz99iF3B6tD7U",
  "key32": "3FhS3vJmH1CNdcHrENCW5UyvLHM628rgAGa6gHyEpfiQxR9depVxvfjhp1kcpnTvkPQBCDMUSb4kuG1tvGAXTzWB",
  "key33": "2RuMnuB2sbFy9aGDDDgBd8sNWQq3bPoghWMVk7uNP1EufUAukdaVa4Ko8qRejhmXSGhTkEsh2JDTyjuzE5MdUVf",
  "key34": "2dBGcdSb17XoEsdHJ8VKEHnGrQJMY7gXMBrXQuDEU4kT7Zdr7ywHc3YKPu1zLm7r3ue19skkQnXQraA6aNCismuA",
  "key35": "5K67u9QMbCVukv9eHF2W4JRHL8YUGgmsEnfEXRRpmt5hBLywk14sxKjpvmzvudgudCbRVaozpkkmEAaPvUhr2Mq",
  "key36": "5XP8eS1QHDQFBEH41AuAiTDAZqYzoAtnNzwZXdYyk8iMjdUzG4gaGTZb4HZijnmRY78uB4QyUQRNyemKAqdPXd44",
  "key37": "4WBQjxPTcjiBm52128aYxbG4wxaVXUkc8LNgCfaUQDkGCjZxFRwL8uajFDeroPk4bK4wcexqYGSfmsCvZ52Deu5d",
  "key38": "3ege4UsV9bJyrZjizrP3nCD9g1MUEeA3H2x82FwFF7jifhf6kgCCgVCogQo8mkinc5wZf4Eou3ZrpYrSTTM8jYyB",
  "key39": "RWijn9gcnZgyth7GHkzysxsLPTWHv7FqyyWp8CG9ndohnutyqmy43kXwEH455XW5heZXvMTFKZEr8CvUmUp1FLN",
  "key40": "59o76kLF8jyssVdMqGuoumEafxZcJbtK8LwKzFHyG1Z2P6E2UDov75FFH7PtcePheyJAGjqS4SXaDgEnfREVUFvh",
  "key41": "AVog57vyakE33Nzv4ZCMWYg2XURmw9sdPWGnrXEYBjEv4iM8jKHEyKp8SivamTE32YgH1NHkMjKjb7BMU477QSg",
  "key42": "LHK4q7EBhJXr99k8vjew7rREEGdunSuhdgirFDbxupwxWuHLTnuqRr3SHhz1ZJ1uWEovmqjvjRPaBUtnwmh8Kyf"
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
