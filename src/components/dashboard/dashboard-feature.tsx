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
    "2pBBsTrnQnAfaTQQU8uX3X3eH7W2ZhQ2xCpBNLu47GQ5du9nrea8AuvZzCYTKds6dx6UFfuw4Du8Y7fVwUabfvUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGBTRD6kVvELLvpqr2RZih7tLtJj3Lbo3p273GDPhZcKWVBaNoHWiPqRrpTw36BR4GCYaDFi9tvAL7HMcL4KJzC",
  "key1": "3VrjAi86xDCooeUbHbsMbkzWr1e2CgYrH6d3EwwsL1RXo6QAh2WvUjypjB6jXczmQ5h1yt8JaFVfXQz7oBjpqz1C",
  "key2": "3rPe5Zdnir6sdHiY2bgzXH9QX2gzJUmjHYPLZNUq5zDzmZHtGb8onNAjAuNkMB7Bx7E4Z1S4r58RGjHu8taT59yU",
  "key3": "36hTACXxGmBSDiMM1p9uGu9rmXhSTurz5MMyA6q2dDnRJ9CBTiXVeWvSod5NhezjzLZfQiorGw1KBecbqmAyKHpt",
  "key4": "5o2qpg8KaquYJCQrE4gpWv9AfqS5tP4HrLSqrsaxLAcD9spNSVoJAXPkKSyaH5N5nSEVAZ9RC3TKema8RJAhMFTn",
  "key5": "6KdQU67gxvUBVii9fhZXnF3GAy9N95uxRxqobrS2U4DSoxyA7PUPsUujb4AUrUQCkLNWd6Eau7n1nQvMD5xr2kR",
  "key6": "21Jsa3pUghtDAsZtQWuHwXMFaKtoL8WAFZkDiYK9YsUV354jMNnvwFPcr9zZHALrLiR9dv3NpVKu53UdjQC6dESR",
  "key7": "3kSDnG1Z6W68RrTpQVEETJtjt95FYRb9X8b6DqPKE3myZbrca5Ta9xo7iZCSEHujn3gAfbVbiv5MqyLVBee1fZ6R",
  "key8": "2ZvCixPew1sn29JGUr3h76hmBNrExosoGpRUniRHdF4nhqsPa2ePK5o968heofrNPsvepSiU4L31WiYwovqcuu2a",
  "key9": "gRMmwcNcazh1Mw1KuBn2FHux6yzZBDubSyv8puqJrcAS7dyNLA7xKJufkgfPuZHQaEnvdK1jmU4DddQ8BvoYuZm",
  "key10": "YFsiAHmqiJMR6HBuXvqiKHA2r4FdNc7QRBJFTeo5qiQ1VQ2UN94x2V5mxk4XWhuqVWD2fjxPwMpHmvbjnVLS4D3",
  "key11": "52zm9AUtb8MVg3958swTGHastr3F5VEsBz4Qwvn2H8rHv4GGqFafJdSmS1BgaPBD3zGHHzywdA4dQt6X6pQ6mndk",
  "key12": "3eWKXHnU1kzd7EN8uof2NhZ9jjjgpcxNTPWu1igUMdEYVBYHx8j7b1wEfB5yTDzKNqFNpgue9Ssm47pMaFkjngw2",
  "key13": "2iHjJWAzNNU1pbELdeymPsc4KWr8MvyKCAVw4p7WVbJEiNodgLz8jopMqfEu2jeVfwxsFqR2rGtk5C7R9PabfH8e",
  "key14": "2ov31HkzZxquxfQrGFxaoigizW1tEmsfedhh4TTX5mjWsyFLvC9pzaQZVKT77WKgmgvmLh6CqMZEpTgrryuXWJpq",
  "key15": "2K1ZdrYGLxZfprKiataGQ3s54f5oqnxQWNCx7LmFmQNLKYe8UM7oxxQjmMji9Pm9pm7owuQEPpBJG554rSEFCW1V",
  "key16": "5MGCsG1aw2WzQRSgqyKeT7BnQjjAw7w8sorU5D8yCTCanCfi57D4t5fqPmgqyfXXsqwD3dXrSNDJ7n65jwsJha2B",
  "key17": "3DrQ8C5enngZyifUuP16ZzrWC2ANEXtCeYhQDnNZV8VpgonX7eLbDsQ7HfGVDhbPeQf9hqcXkTrkB4Ssn7xX14jo",
  "key18": "3dQNgZ5UbyKPxR8Lqtai4KV6naiBHCB69VWZ3RXJyEs19A7kfYyojYv3HyoK2LhtAxEpJ82Q22rzk9gQv1a5BCB1",
  "key19": "2H9DsaVGqiusR3T3SMKLt77f9ewh1RfGu2YaMhdukHErKEkdA9KieDsHpbAkL7RAWrapjv4TVKFhizWjUbtgFiS8",
  "key20": "37ps4F9xMCswdu8LDFUuznyVMDcRhXKcoBRU8o17Eo1eYwMGcGqYoKoBEgHCRbon9dFH3Rftu9kDhCzDRv3UrBhh",
  "key21": "joKwd7vGqoPRpyy6SmgE9s6ov1wuqDqHG4uwBC46YXpg6HJEBQLb1QzSC5muYhjT7ZQARyLVsHX1naBPGJ53LzD",
  "key22": "67h5KE9HD9k4ky8GiuaYVRXdGvrRHLj1CsV751s79ZrEtpXDyGQFvAYuQnjUD2uxpcfjWJZuPRUog7vKorU75bbL",
  "key23": "42ZUMR6BmctXbXtFhjQ4P67us6yS9boCGm314iDS1QKpnvuyesoJuTavfeQYuR4YdH5FBDUyTu36X78ku1R9RWVP",
  "key24": "vohpT7ihuQcjqwRE1J5n7b44N8rkacergGJvSpFqaCikwPGpyQtZREgsGTqEG4XGKYGQ96hy9oHde8yBwp7SE3L",
  "key25": "2LfkN99BdsMrWfEgG3UwZfTb2udPejhQwv5gFnZ85VUp3oKqMnNJff1iytJM1gB7SVtvN4x9jF2pnhFACuz65Toy",
  "key26": "4pTe8wu9aMoYrKKjD1ThanKnphrepd445mnwWknUhXCEgY8YYxiE6rbwZXtR1drFmcJKQWRyon4nrY5Me1SKFHuk",
  "key27": "5kYXfJoU4zE8NtHyTvGufgHNufXhPeVsHGMpj8ynAt8sU5HbRKPr9dEf4XvGKgyeUPrcMeEwybgp3WrgY6S1Udfy",
  "key28": "sGf5u7MeAyCfjhkGuJfACoSvN8ANaHsiRWtJ8KhUNmtCmYDAJfMN5ghFYvQL8tSoDwmDuAEfDote5gSjeMVc1My",
  "key29": "VZGJhy4FhWYtjy459aQ4x3MQjYDR3WKFsNRSW1Jx84ZhumSBx4psgz9pFqhVRVmoTJiGBAUzGNSwAcbud1MJTzt",
  "key30": "26NmLt9eNpMBHMaBbvPmBNr8wvgrNuWJMbGjSZexyP3P8ftTsxPNFn67RiwpsUgnfgSZMUumu1123JuDsnyCsAFh",
  "key31": "5P9ifQQELUv5Lu8xLSuDqH3112aFttnfxnffGWvQus9FYmerRax2azkasb9zPDvFttFBkZBDz1T2ATpFnGEvtNA2",
  "key32": "5TMsHYrkPoHAYpTTuS5h8BZnJJnZaZt4FDRECpSVCw4mkG5eEZ7HjByDLs2WMhTpQKGDAymARWaD6Eg3bkzqh4mw",
  "key33": "4RMif331HyfTHqxUZbcXxC3EwqoHVs13RHtB6ihRQ5AKH43WoVZ1wQD1YwBq8NLpvRXonuB9mikR8i9yJbqAU2PH"
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
