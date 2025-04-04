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
    "L2FdhcAXSdBDQNi39dyZSuLLdgb6q8UCmGZMsTjQmwAWVR9xdVcbgeS7eeEfhoGjyibQ4BtiMRPrS54Fz8Ame5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hjVH4Cbbq1nzFMHuCX7W4SjU4ZSq8sDyKaZmkExt2LTfEF4c29emEmLT8xEruS1sXQa2xgsY2fsKVXr2szyUMdV",
  "key1": "2Z9LiYdg5d72QfyKSmZFAhVngwiJ8bhoJZWGK56FYE7PfWYSTxYk4er49qhjB6zQtG5GBVmXvmwarEEPjtJLTozL",
  "key2": "48SQUjaik8WdZAQdmyiTGnT1SnUMHUw29j7V6zJeaogvfRevCkNstFGfGwgshLxa69CcUK86vFxat8a7p2EpZVoy",
  "key3": "4o3oQJidWi6BvhaonnDFFYtykkDmvyrA6HAnsZjjTp1jzuqgR4uiYMbjBq5fKfbNJhN7hVyXvT6urLMRVprnfY6P",
  "key4": "HXQeWrQZjaxGhxQ1PE9Gfv292ke69XvtbDsAAf5dRFdwXQdx6etwXabmvgCVqzKunQN1tNJ2yi2J1GxBfCkYfBq",
  "key5": "5zK7msdpQfRJ9iw9T6YEfD9nLHD2NdrkvMHWhZzTE1vWeC3H22HAYRwhFrvHx9DVgiqM568PfMLie62f8Reb5jNi",
  "key6": "5wuUggLeiHBQMnUFwDKxABDo2r86ZUGj3DdoTJXun7LM3CMPww7mBGXQVZjnT6ckakQuujyiLGbtiHwYbca8SbLU",
  "key7": "3RFyXBdKYSkvSA1mERhDpnU6aDaAooDqNBpyLu15iEyCg9Q4uPPtywaxGzk472u3ELsVpyAbo666sXnaE1ooGhAZ",
  "key8": "57UKbxQrRg4yYTQzdRYRCZkZvmcyVFmGfgsqwrj2dN6ibDhr6MaaJcmdteZ1pEWXMWfoX8TrqDUwtpAELzkcedZh",
  "key9": "4guBaUrbjXrgdx9UprvY4E8NRXpH1zq87uKuCpvYrfh3PwnbraCW8vtXahvpXLv4oyWNKwi8B4wKvHawPK5Mcyws",
  "key10": "5cBRR9GA9UxN1KE7SvF7kAXXbeooZxG1hgvegm8ond3X3wKUHLqnfLkVgFsMJB71A73YRcRYRgCdF98EozaPZCoV",
  "key11": "2uudwtVm1rQPn3Rzc974mC75yqyhntNjAevwTgfMx8EnidRhmGkLNvQEr8ru6gH12pgyG8ko7EEsyrehc7tjb7wg",
  "key12": "3AmGymDUXvjtw8q4y5YL4CbUwoAfDbaagdfVPbg1QXGNv569yAcAR1M6eaGXqhuNT6MeEKLHsWMJAYisLBev8cpS",
  "key13": "7eCvBnv8QT5yQsCgerNmT8uuG3cERJtsWNTyYQhjUiN3xeGqNmN6q7CXLLfReoPQDLcDXtM5QdNzPg1HMPGKQ1m",
  "key14": "LNJuz3T7cBU8ndY6WSiKCWTxeCHU93ytro9Gnu92tnysmSr36Bjmf6s85B7eBqBa8Vbt6p85JkQpMn5FyudpHgG",
  "key15": "45yUAABhdRUE94AB8hmRR1nPjpVZysYG8ZNNoi3Dh7vt1BtdXxuE9KpMLdcWQujqHF6ENRX6JX6TFqFCPmb42sDp",
  "key16": "2iA5YyJ6jyixokAGoPcAKCEjjF1gasxWSxEzbQhEmVcq4JL2D97t7rpFmtB8XXyMB2eCcX1YhqqCyWRsmTznHoPp",
  "key17": "2HZ5La7W1k7E1tAyf3A5Zy9sxtqamnQqjEdJAXTM2yS3tNoPNXPcBNw3wA5N12Pq1fb9Tu2jo5SVwegihNXCoQYt",
  "key18": "2r6E3jER6vf3XZnX6kgdJZAJXJsdN2pUYcyzTwj5f2pXHuXjZcNyJU3BWYCq32TXsoYwWqdfztYzGYkT2ZoW2ZNX",
  "key19": "3ANf6v7F6EqmrQJPR6EXUfuYv9prEdcw5q7xPmCmBWDTswwHPUbwjdDFExumWzVvvGTe5LSNu4EfBFoDkNPtGDCT",
  "key20": "4Aeu1HGLWzY6P9119rqWidnj6GKEhnntMZ1AzZDBVkq5fr6H2XypEx99reHmGzKnujx7GKPu9zrTzDKmV3AomymL",
  "key21": "2D7HyMJVnbS95amnTFfD5dtWeCvvLVJcVkL4GXtSt7w2jADP9pu4yBrDZeavhid9SSxsVP5oQ2BeB3S9Xwmn9g8R",
  "key22": "2pAe9p6no56rkSwgihd7dud9stHFhprksWMoC4FMjaLHeT6NspKC3UctTDKUtfjCe3AJjBQEv7moG9eCkj9BHt2z",
  "key23": "4X17wa4jCrWsmwpaNyaQbgoa7xZyQiTFRzBeNz7xCzVS5UsMfVojbtoZ4EbMqvV3peLNgxZkHtkGJVRS5MGLZddb",
  "key24": "PP4t63AGRZd34jFPWXEEjjtkj8YzBndSX97ZYqQue776shqQzQADRELLbnX3okgXDrpgT1TAaBiWfDGgA38zPet",
  "key25": "bJtHwKu3RhqLN8c39T8iz8GuJTcGEFnZk63dU1Pp1mqZ32ZwAJpfzvmB4VVk8TqbKyoQYCpNXeSxDENFeCYG8af",
  "key26": "3BQmyr1K2jVJg29ck3fJkv1YLZow1aJcATU9bchrT8BU17toWGxDMx9KhEqUtEvWmakJLPWikTFbndgyDXNPuj2g",
  "key27": "wbzNoQYj3xobPnE7kJimM9771n2God2r2FyzpGkJoXCNMGF6ZrguiZ6D1ckGSv2qqVpnczovXH3pynkL5mwWE2Y",
  "key28": "4bAnBL2LsVPbYN4t29n1B7wBi8q3wsMNy8g75UM2TkRxF9cE211qKUqpdPwaW6jJD9ibyAqh4YsjJEWh3m41G9Ys",
  "key29": "8jHGWFEQTpLLPEcFn9LZnLyQZmdfyPDDosJQscuKARVruc2BijiuuBZZQ8y7v96gYDq2aFNvB4GULr3VJVYA6a8",
  "key30": "2UDEVXFpMuLYmfCCaG27Sq4RVqYV3b8fJMDD7CBbgsSqY3d9c6k42WFZqpf3XPjCHpoxrhEukBAUrS2fwmsXqMk5",
  "key31": "57waQWeX3dWKEVJbWDuNHLptjmdcQWo3d9KhRYr3ME2KEzriX4poWEGzuRnChsDzBywsby4xc9g3pJTMv4v1M6dC",
  "key32": "3DTFYktnQ59Qds2onFzgNvvJ3LDHmg6zTnZjBWxUjGuy6P1Tfv3NnZeG9DNEnRWFfDDwyiAeMkDbs3S87jhxQQtT",
  "key33": "2v4crHuq1a2mj3YyJX4pxrxfr7QPQoFzYGznUrWwFk2FR5ABv2Nd6UtVBHXJCqN3iyP8McXDEQSUjvufxr6v1Cy3",
  "key34": "5RWNWkmvaRLr4vbF6P1pQf7N35sDx9CmhD15UizHWHXinQrnFTrS6pddVEtNNPdirfi83Ti9XrY2gTXUVB2G4VWo",
  "key35": "4c29X599tqNc35eJ6UkyXPuYQeDTgpm36Kc6i3qMge5ZbrkJPN64ud8jRVu9WQoomsfL2X9okJXTmRSRRWWkPa6w",
  "key36": "5Ut8P2QdC63qV3LdUXDgteMLtcFMLe8z7oar3eY1SjMUYVvUjpRbagc1U97v14LkBXSjTV7Y5ar4ajbt8m8f5xVX",
  "key37": "4qFuKvKiySpbcE1Eyxum8KWeeQ5wofRCpGdf6uyrz2FaofRgz63b2yEV8x2d1zVae3ekd1m77EUDMticZgMFqVXy",
  "key38": "3cZCrXpVCzNFYSTnj8tHGSSYREFoYLBiJwJddAdpvECrMoDf9panwrigrgoNoBz2Efi3WQbqjHFEKtL9rqvTMQXZ",
  "key39": "2foweeWb7KsQ71i3eXs5xmoPiCQxpw8SX8cFLzUg6pkYezKbmeyiKqMbZzm9enRfGAKdXQgHZ578wQPu7vaxfZG",
  "key40": "2T65sWF1bbJtB8StCSypgfWWjLz2MPb7anQBnZrjBJBNTVyZJn9oq2f5qegzWXkFheeNGwXUunQQgCef83hbwv5N"
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
