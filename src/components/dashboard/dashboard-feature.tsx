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
    "49eK4B4BZxR4ru2Bifm4rS4eRc4SrYvpT2SLz48JQqShXA1Qb8xenuEmJcbeBeKqoRtXc2YknPYvu59pSfqhiN8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7MZkk9XYti923hkotUaBs3KnyakSy3CAFb3yGqMUe94bdhtfZYzJXZxfutktnZHQTmFRGqcPbQexkiag2wDTz4",
  "key1": "23A2CtTbvER1xcmaDCoTxsBKTtaWoPFo5jtd9KbRsvNnzxZ2FBvLzTwsVsj4YJo8R9AryFd4EKTQJMfAQTTJUHJC",
  "key2": "4AA7vskHJZtyzc9zaCfZM2qLBBjo4psJbZCU1M4szQnnugwrgmSnsaReWu1ukkjhFELE41fvVXSABAwTt61ZXDiA",
  "key3": "5jryvzPjvtGueo7Z2KhD9pQBySU3SC4dBXGktdvBxymr8VdSdNC8sc1h1gX7LrhUECkYmmQ1ze9XmyXQ8Htpq8tW",
  "key4": "3CLreMzh2H56h6WCp4o6hR2rDUr5SfKY5X1Cfyomc3PxU3giBCpFugkTS8WPwymKMqa2qwP9Fm1vq9hDwm7fiBrr",
  "key5": "2ZoyTgj9E4GXSdniS97WBpAhP3LUPKS1AbL7Dn7wZ2PfecbaTrzzP6tZHg8z8MjeQL8GSDKj4wj4CYgp1ay4XWdk",
  "key6": "2q1uyMoinrFioVuSJdS4NcBzvdqxnagvvfzjbHVh6HmeTM1HzZSvicacCyVJmDxxhWhuYVZrSmoJyfhze4tXP2C3",
  "key7": "2hzErYxSG8zchb3B1PFAfLyGzwaL1LHAQCsZPf21JJX8Ddokn4D4y5i8pwxDTA14vDAc2syiShhFvHh4GtqwYMJm",
  "key8": "4KMANEo25FrXc5cWHYiY85zbui6uuPvmZKromeUUFWPaCh6erWh7vkPFv5ugdhhUpDLxvwfigK4Jty8bckvscGhj",
  "key9": "53Akz7XAgfbLrY7cJB3R7cQsDKuP3KqfyKpZkQpnCNvEBDHwxJsZkoQ8kHAp6xtwYSHc4S4AW7kFxMkwSEaS4EkX",
  "key10": "2LM4za2mDAZEHkaBW1Ff4uzb4d57SGjSxXgwy3EhHd3vmq6StXESvWX1vGQgHARLnqE5Ft7i28135HVqisLMoRPj",
  "key11": "5KyC4SSUZbQnsCDrJHYYrV3JRAhmixf5E2CkjwPok31H845Ru9AWR2wQA7sLQfb5seDVh21xzMDRZspePf2CxHA4",
  "key12": "2gVjoqN7GRf1tbSnCRsnTKEg74fkZe4M7tfey5KxXFVtsiejoQYVT7h99J7rE3S87M1NGD11cPE6uwzk6GEfAtck",
  "key13": "JBaNTcKbPUnzMsXENoSX1WdE5SnhCTRiaowP5oK3Z4EfCHmMK2Lr6c8r1J4mLhHfN2fCJDjTx3RCByf7PEEFwjK",
  "key14": "ALe3qek45icUDLUuaQCkGFAMu6nccZREbaXL6QgPaxMgXMi5r6Q3MUTS8JoMS6jGfFq6DhUWS681ZsWh8f3am1i",
  "key15": "524AvZmf9HN8ipxm7x7Mg4X3KdKeY4GoJudw6RVZqAbcFwaRbvbcBTSrefgFw7kSNcdYpC3Js99Z2WPAFfdVoesq",
  "key16": "tr71YUUTVJ2oHZnCS8PvXRUF9ZV4o8kXZwb3DEWr2nqr91zYkeFc7yq5U1TosQ7WqVBPUwa1vfh652TKjTPSDw1",
  "key17": "5Fc9fiR4A3RetchqQq5GMpFjzUAKUbZpUhRKZeu5baXSsEbeoWJtqkTU1UShoMWMuGqrqoNQ13MRbKLahmLmkXUa",
  "key18": "3p5v1tu23bNoiWsi2rmsRrAiEoX3uN3ZHtoyn8p8WSXr2NxMbJWSYaUwjhj4P5UqvceYtQYsVifCfe5oFdiPvRAb",
  "key19": "iS8JdV6DfAs2dM89AzUSFWeZBhdrPB5yxhma5gUGKFRPB68YLLdHTwe9wUuxEsUxPmgT7efqLwiANVtKWkj5eX9",
  "key20": "5MNL4kkAjZwM38UxdTWv8jQSBtiTXDQGFBum8ZSoX3vbUPxhTkNaXp5N3NLGfGJTM9qrtYPmpeKDVMhHdrqCqPdz",
  "key21": "5hDqMgFz4ZBi6w5zdy1XCvY1GoxuBtNW3FD3krGNt7e1kTZ59HT8uHZS11jLy8tHCrmw1N2C5bncYUorSpAdu3HP",
  "key22": "2vmvnYmyNvroMHEdLY9A1mq3BFe51qbm9oHBJD774x7VXhACw9e2BxYtcuPx1RshgUGxRDGFkZaovUYh2BAq7g8e",
  "key23": "3zUYaKFDb6VfqL8T4y1FfFkwEWGS91gWZttc8Jn38no6qXvjZrRaeZnc8VHt1WjRiA8XNa8QwV7ZQkYEkJ4Y8Bz8",
  "key24": "4RJUGWNFfDGqwG9TRojAuRCoTNyQ5zFNboiU74pdc6Jr41zxqovaJ3no1wZ4cGMQM6HVG5FFTsMBFWXnquzoPKkB",
  "key25": "3LpMKQFBzjhxQi7iYe3CBTEZdu4p2QaUzhazhb8xfiVkSgkG6SPs8Sv8pgsvRpm8pJ65QbXpriV92qTqXEoj4dVa",
  "key26": "4d75meFrarV4BZdNfrnMrpe7LvrpFq7FrXcWE7YjR3HR5MKN5J2YoL8i2yxHVRMdRWtHnoQrphmGCB3DWyNq3PGb",
  "key27": "3mM5jY2iGfgeFNSHEfvdyTqAsM3A3adHDWndLy36CsDeK2eKks48ETAFHSc8XB9XZ9enQTkdtCJW5tntxKKguGQ5"
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
