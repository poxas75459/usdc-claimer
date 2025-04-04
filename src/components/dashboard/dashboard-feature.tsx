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
    "3CgprXdfDy6BuvL89edHvZQv99TEYwrRfZAYDi7yqiHtpapQgxhEmCki2yX8B4AxETMZrzmkqrZbWc3RACD4BTmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZbYFLXzHX5ZDrNzoAdBsUZ4DXnL8W2bBXsRB7P8h7XKBLEqqpsAtazBbnUkuJz2WtAbU8hWWppHJPXgaQC8mV6",
  "key1": "5AkArAYyB2wnixrEKpm7GWafmMKps4XxaG2EaHrsHnE9UrbK3F4Gv1NmmnoCDwET42XJcis5zLS376pjfuecFnud",
  "key2": "2Sff6JVcyURRCpDDGDyjUNKzgAVVDL9rQpon6K1YvKHps5wuK8zdBJZgMHPFx8NiqLooyn6UJTs69VThwV1VbVkL",
  "key3": "4H7EnL3eazt51eeHScWNXUQhX9oaMgfZ3B8n8HD8PGMP5Hu8PHDr7ZLkEiaSchWTrfpADGVYYMXne4RBCydMg3oL",
  "key4": "65ZgJX89riaWJLJFJdYqqq59ngv8i5bGXahhThKs1tRUxqtTcH2D5JnmL87CtDhntgGagSXUZpe9YkdDbr3bQ5eS",
  "key5": "5jRyU9ZFWxZTWiv1eW8bJXBqdFsaB8X85etWXFUaqg9QPs6ps8ouDZgz1weSDWqq3sxZzs2Pu6yBkehWaWfU3xUy",
  "key6": "4ciEJAbYvN3g9YatGg6GfkwaApLd9jn9KUdteYsUnsneuKjXtniMSbkJpwRV9CScgDw4E9szMRDG5bRtCXC71vAU",
  "key7": "2iRrmuF5LZyWpZquaTZ9AHHtL1jTbuYD33htBe3hpwP5HSLQtCZnDbHQNYKjfdYkUcL4gWg8ZyQAfDCMYihDbSWZ",
  "key8": "6AZWA3aCZSqVGnWUXc5wQyLweG8iBJUoVtk4KBJ7me5pS4nMm7tf74jeFsMdVZAhzpQbewueynjTcUuJWweNdHh",
  "key9": "bZaN6zceNLNNKZEUNgr3fVAgTLgxbSUJ5toiZMD3nbGCYU6APiudBcLgnMnLbxQjgiZ4rtxCsa8mV3bNFZcrSp9",
  "key10": "2aRzKxNTKtqSTHqRbCVSJg2yLznJM95xRd4hi6NNKDaAwEo3eYyzVQrreDWpf3SiHVQKVioWjvDnFiCjo8AaKEcb",
  "key11": "4EWpz5cP83yDpdmVW6gDu3Smsvjz5FwdejFoN88y6c2WsLqRV7XRZTNZRyKmq5oFTUcKrFjMTrgu5EenzJjTSfpZ",
  "key12": "3PKkPv28VsrQRJ3tbkatfS8ea5ygGy5KGfJWmVj35dBDLatnEpBKtSDVfHSaUeb82oxf14yk8FbKLSWLxD4J7NXN",
  "key13": "4nJwepGxXXVm4wS9fcyapur5h1uqHLsKzbpfPA8KPBaQEciMKydXt1mxvsueNHDjo1xpVz6tzyERqXZ4wRCYq6C9",
  "key14": "3q3C7rjt997fSK1sqd1BHrBGpEdzxEqnfWM5o9YLaMguBgAxJA3jf3sQMcsEsGF5HREdEfwo9jdRXcrg366EPxod",
  "key15": "3neaeg23jbpUHRFfsMv176ec54xNdZx7pYjP94S316mgLmT7VfHfpkCN7spWoB1YCv1aG5CWJkHnfUUSE6i4y14z",
  "key16": "2mdUKbyrkJzFFCvs7TKncfkYWbDzHHcW829mRECaDYqT4ZoQB7ZDnew9xmGtcUV6JRpsuTAKwWgvwP8zMZaT4Tt",
  "key17": "2gMXerLUKMzPyQgzs9KxJhN6v3UJsg8Rh3DXydsUpj97jjrQRvcxVx4HztZXg7VUfU6p7qEAiBivzkM9BRHXD2UG",
  "key18": "BjNv5636rqruK5GvJT3uVNZ4HLfF1PZt6fsCmRQDVtRzisy9DhQ27eeukFJvFirS5ieQLY96wjVD8WDPPBnLNVV",
  "key19": "DJ5frQZ8PEDQjwyEXQ7CKxVP5Noe5zD7GLWVt8LUREFruUtZKCEBhxYjBXMXAx77wZ2bnwTxaQxwdsgFTvCbR6y",
  "key20": "3WHbURXYJs2jAtsLjDa4BV3sD6rYdJ9T48bnVxrWPMxYddAwXVJb4e4PdDMtC682qwN7am59uaDpXs9YD75auuus",
  "key21": "4AgVd3rNhg52T1N4BNXpAgAmhsgdfMe42zNBCLZueGVVX5kRRmUSCVBrwzmb9a6zRMScfJb7ZWVbDJBW2BbHA5Br",
  "key22": "5EJqCq85sVxANbYsrKxRB4ewazMkrPb4dEivWJFGBK9KrXS91mo98Yrd2HE1wPw4Q36fanjhKBJsMrHRy2Q1vMzN",
  "key23": "2RsidX9gzDhyRtSDDCh3kJRNWkfXD1uspu77HwjY1Ua87FvK9QcqQWbjnRLYRdEup38qxzzUt18uCK2C8xXHUMHZ",
  "key24": "27SdMBSQ3UBoVWDVvmkL5uBoZx1b6xE5wmfuMLQTFJvA8qnizm5Q9mmfNaf4G6sqk4fQo1BtxaENVgaXxygdPtpu",
  "key25": "3vDrQSBbQJn4THP6YrtPmnmMACEX65xsLwvu5VfYhMqKSGKRAC5KoV6K2aBU7B7fpi1kKY2heoEmv6UiGJjUkMhM",
  "key26": "57ZkcYsTGYZLKj7s8zr3up8eAbMSXVJUxkGJLM98MqVhFkYyBRvoecKbcKfaHkeYdvrEPaUituS4cqucZQjTmqmP",
  "key27": "4HE8sCYFo68uGFkkLdHauENofRehYWW7jkx73dDKaNJQSWcfvZ1xncEo2ygEdeUkHebP4DX6QXejpnvZMasHZNh5",
  "key28": "NhkP2zqnZ5GQAMusYuk2vXGqA6r3tQjmBq3PuC8pwK5xvcyu3oZJ49n9Rq9hKBvhMzQsBJzUeCJjFBR74mB4HRX",
  "key29": "3XczuJjwzW2TpQQKoDcsd4pVtN8K3KHDGAFnwUPzMoCCkx97RaNc8fu3w7Ska1xriCTg1kxJ951RUdNjdzQSs9wi",
  "key30": "35sFYyznxEMYGa9ErjPi4h4GiruCqYxAS8jHmkZQjVcrtDfYVJTBh9i6CJy4FQDCbokXymakCvF1beoTJiWhPFN",
  "key31": "3S6361BXmomRP9xFNaTomQUAPxtoBX5cQP6NK72ejgXyDP8YhvMTbvq2esepoLRAgBhkfSX1fqbG1BCwfsWx2Rp2",
  "key32": "WmBDtLUnVxf3cRqVrYCGRc3gCbYsc4SKjx24HWFSwfMTLEpteMMmwQTqzcSKhNfXGd8nDxVHt6kFdxDavaHfZh4",
  "key33": "3GpNC4SgG95EBwF7A6fmvxK7t35X3i2eQgQkXmqn7puTy2uYGpWi4N3XZbCjebfQCpD2b6yGzgUahjopZEyrg3uw",
  "key34": "jXmDFKnTFhN1v1Pi7G9Nrew7zJL3HnDB3u4FmnTjdSmN5AmLF4UUWdMoww215dnAAL7JTMerEtFtYyTDV26VUkx",
  "key35": "5P2gVb5sPjjxWkTcJ8GmHzncSu1kXLVmBoRo9GKy2FzjiZSAWQvjob27W9tbBCh5U1h6T5KEAvAiPPToSif3hm9M"
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
