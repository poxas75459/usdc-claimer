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
    "TkuKAysEcCrTPxNr6uWBMGzh8XoAidPcXww1fVm9vjpcfcA6F5EY56V3XgdyxtSZqLFv4hBhc9R2f5L9De4t91a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcHp2g1bper9s96wZv4dnyib8sHVA1bXUs2AshjkLWNQY3T1oUmFyXDkNHu4YBv3wUheAsogZvzYtobg99iUENR",
  "key1": "38GfUoH9Ua7AF4HhZX1i5nNwmKDuTHdcLicZicVxXQRhVLiqUJFAyp589EC9ruq6NCcnm8qHyK2WqgcbqttAQqsL",
  "key2": "CwpG12wkksRZqq7rowtFXGkrKA59Yy8whWFp6wuMjEebeKmNcCf8RgLwNnWQU3fe7Vdn7U96MgugH9vH7YUruH2",
  "key3": "UKTRYXEwVhNAFHcAQtzgVEC8EarxvkckFgeBTpdhUn2p8qDykNE286Hnu2PMpkFweWEa6ZwP5jGf8rwkw5xKS5o",
  "key4": "3rGtpF26WbsYaJcVoooz5vd2imZ1qDXwFi3AW68mZHEMqP1rYTzprMJPkUXDCjFyVL6ueB6FUJQEtX7KR9d4V6oG",
  "key5": "3yeCAzrpno9uK8kz7GMmqFNfFCmPHihwSorW5wjkx6fjqhTYzQ5r3mmKsStLFSrNdz2vNxE6Xy5YKCUqdN986j7q",
  "key6": "63haqYyqko8quPdMQbguBi7iyNUodifmw6j8LyPW5rqYCF8RwP7eEXNjQRLmFHpayUpLhaCd2DLP7NYaHuEFnUGM",
  "key7": "5cFDmqnAZ6yrc8DwNceUMQc4DDKks3eKAqZivEJ1KjRLdZqnAiGPe8Ei58bu8g65JVDA29U1XQZHJvJqgZkFdsNw",
  "key8": "2Pn6PTdDev48utefQFir2RzpE8k8ugw7qczs2nPfVNnap4FVRFF6wszfF3dp54ykg22YsNGvXZ2KqE6JYiD5cJpx",
  "key9": "5QUKHXJ8bFjrsW4nRA6wdDuQcbQGo5rXz7veRHKk5HFv5Sk7MtLdL1jkJdE6VgPC4tTezg14n4fQ1Y34bQRR5b4s",
  "key10": "4abFm5TCyAnPKaufB7mHwVEucGCKUodQF2SWvewqhAgndG474WMhskwVfe13nwoJS6Ud3xhWizsE9HCNiVX12QDC",
  "key11": "3EFNDb4vSpYPKTRMtKSpJsmEfbh6PsLifuYXCiLu8CaeZmge2DdzU75qSDhdXhvGeQ9TKpvSCiF6KBfzbPnNFRqy",
  "key12": "4DsUJSUCaaMZesKXUEWULwcPqCkgHwxyHgFGGtZ8irwkitDjo9yEzBnwRJeTfCE1N3RpHVRXTQnzjttdU7WL4VSz",
  "key13": "21ShXgQqEFTb36VvRz8nEPhQJo9CtFJu7KuUJ3RvuCd9CU6KT2w7oFqYRxikb9NvasNkJuwpHjGxCt34daAbAxg1",
  "key14": "azwEd7KxKhbfYDXNfuCX935gptrdJGAFivqJaQeXbG5wUUYUUYBYKS7HWTLTwrxfpq6fi9iumHBRHHxWcAjSewU",
  "key15": "3itMUg2dKvgg7BtnYUKzQtfj8ZquwipsQG4MBV3zRJ1P8Hv2VkZffXnutGzCCcnkiS4vdXP5M8r37YjdqSYKQLR2",
  "key16": "3fpPmVsX1N1JRYns9fNaoaoddvUPd8PEdNbfRH5gGehEE32pRBn6iTYe6nS43ifoM1hESTT2kACe8kNKNxRjccuY",
  "key17": "3NXV3bvtrTR5DZH3X7kk25a7AFiUESqkKrtKhmQqT5kh8jCXWX35D5re24MBDEvjevDhSU7syKgLTViFcmh1oDTN",
  "key18": "2QakoVSgGPN5BABxzGGvaerSUBEZvf13hLT2fUpViedAWAqBTZE9CwWgTwK1J5SCP3Ghq42SDA7uYPF7SCGWiAkr",
  "key19": "4DRE4pJT8BeRqrQgKz8ghupzWqZfLXFY12CzN5MUorb2rxtRN82CDsbRoL3gjgPaTyCrLt2dQyrhp3jNCybvKKod",
  "key20": "2cwy2t9K56qyE69k4Uixwj2kaRQqT8cSjgMqk3Qrofcc7weWF97VXuYu17s7aMs8zCC85aR9fCiGFS3ojhQkNEDo",
  "key21": "242gCsyXRaLEPmCUsUR3K4hWCe6pQuqbwAD6tSPNmLMu7RwsfMaerZun36uadBLHz7EsFjBpSHxpcTCyEtgF2J6L",
  "key22": "3bvDaFhvh5zF7JqibvsYUWVEq7YFhicy7UYWVCaaPhYPstQZmiDquyuRNkiXtEnifoUpFhnmFncbQepEpgDvHPRe",
  "key23": "4yvGm9UuNnVdnhR94ijW75gozWCz657NC8rsqNnx2oiVQbNn5tXNmTHWbXCAZP6XesLX5wAdgNuxoiEkJJUFdqah",
  "key24": "2SCdoXvve1reEtLCRCa67Ys18SwKKVfJ44v9P4qTZGCZVvZAkTeAC8ebFCGFUV7Fi3RML9jKU2g2UAE3w25k1DtN",
  "key25": "5pxXmBFeJ7B7HhFcN3jRXSQBoqArqrNmT7rAXvjN3BPmNrwBMzjSoTqX469TaFx6eSVeUZGr72QCJ4Lr5R4fvSxL",
  "key26": "b7haxDKtLQ7kydNNjUfLTsNqoZrLnacVXTs9qynVqn1uYekY6KYGk8DiecUnhPqgr1GCwE1JRE4EPTMSdbKCLaL",
  "key27": "CE83KnHeWwRCAJ1KbYbvLhbGmMnirP2bf3YEozozXpHqw7VtovidUE5gagpv9SocvzCRxQXCeTq7s7dsFU2EUop",
  "key28": "2aVGczrw9Wb4pptaxbV3mhgmVDTc8Hi81aWbLADmWv6xcNfNXAmMEW8BrBxsV2bTC9aDdP5eAJpdeBSohpMBmXAV",
  "key29": "3j8hSnXcteKWeQkDE87RwbSJ2PbBw28GUJ7Cnm8QahYSAwR5aWfZxei1LQBDcWNYtJUScM2YKnuZ6MXUwTu3GfLT"
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
