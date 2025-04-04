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
    "45ktfx5aLTUyP68mfwdgxqeKXoBNgjfPjdo1UW8fc6fWctSfaHVpCy2S3HxsSWpAHEbuwhHp7fuvMsh8u6eNrLG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "StUSLY4fcNjCxcTyFU8ZG8vua2obTzVHDnYbgmX1gujFA1M9EgiZBYhLBaXdKTJfcAYh8SuK5wBNhRVKsTvVJGc",
  "key1": "2A8RAVf4q3Tk3xVdnnkEgPMCJpcdaBupW9uAztw8nw11ZijTLh4LrbUaeZSCDZB6jd7ipdQUifvJ9TZfxCaPr22U",
  "key2": "2nphKy6XArZQP4559i2MrbBz85hhK1QAvUDJsPamM7xtrrEiwfi3uxBnAD96wAzsV4wbh1Y39u8ZDQg6ZiJL4htx",
  "key3": "5YBiWRnt2WTFP7BjCMRffX75XukXD8xZ1rD5UizyeJmyYjQRc5zi9zy7mowgoQaZh4tjU3uT112DMKhR5S3DwYaM",
  "key4": "4sbq2r4iWvBZdHSBY1ei2b4aGe6wEfS5aba3qYjd8PekYwrSLKkZmJD4AEiRFdbGn4kdRZBc8puMaoTUjxmKaiX2",
  "key5": "54G8cURdTxT6WzLiaZ5r3yzwEyrfnjU6h38oupxFcBmGrkCEWrZaCuBeStwfRgRjoqTkqgrv3r3fiKKpky7oJSD",
  "key6": "4e2C7jXLjN36rBRvBexMYsHtrJov2xoSmuXoYwnx2BK77fBdoPs4euN6cahDwUjcfxC42DNdKmPiUXwxoAS3dSkg",
  "key7": "297EK9HCXzC6UnDoB4FHh9Gv6ZeQDZUDHsoHzrrM712XQVCGCEbmhFgQRoBH96Y382vWP8s4GXfGtSqyXoVfHBPm",
  "key8": "5mdc116UJ2imnREseaR9z25G95kZRWtdapHqqH168qvA48ZujGrK2NFCdxe8s9UYoy3YZmnYWc7RYRVCBxzQGxCP",
  "key9": "5JAqgrZrsbzt1jTd3rwEM4w43UH52u4Yr5eitGveCBrtsygkXr9X47B2ryrY9Ut6bQyE8fPGQoaiXqAayHaLWzoa",
  "key10": "3NmAmKC3BZUr7v9svDFRRQciZMCp9YANa1rNohjMXcp5CXxzevkLhbTvxG1LCuaU2NrNn5knyTU19QUvVQo2y6Uf",
  "key11": "m3PThdaTXwrR9etiQobYGvuvLjHFL7yjYMPxmJXFDmZ29PJAvEZd89XjJq6JEg3HA7rwYScNwKD63imv8c55wyW",
  "key12": "5gMv3kiRZL8gJ6YDaV86XvZXSaqJa6nAYtzSCVHYdESZC4XM6jTrwy3kqcmq3ESpq7urFCojfqSAKobrnfMUnVqL",
  "key13": "4YYwGJ1rHFjLrWEffMny8TjedfbKVAtbBh9gLZHsmkqfp2tSMhhEAEaw8SDppMxk1wNRErFzxVy6hjjgiFmcHXsg",
  "key14": "2BKQ37twJ3qRoVJv7Fx1PWgXRvfd3rCr55Vfp7ib4xoLdgLtRV8fvRdU6Z8BYJWvT1rsDm5oH4arSTgchxHMXvpz",
  "key15": "EfNd6mY1zk1nkqYYZ5Nk4H16yZnCueXGg9jKrWBsUgjtRAQhpNVuWgBbsU8ph77g1z93JugnCsx9S2imA6LF76D",
  "key16": "2Z3bfy8erU67gx5uobDLniqndFukjSLRZvkpcNYsLj5iifyNxzeEfemBwJMt8tYRSnG4xbn79o8FyGdmu8WChYq3",
  "key17": "22yAXpsriqZFCL5vPHeLQ95Jb4rfLTkxumCG4xhmT114uXajHn97a5QytiwCk4RvknUfEjPZfn6vHcMhYhWwcu4o",
  "key18": "4VbBP57JRSLAHVjXUm4ECbhScBsjbCpfTZ5XUv1LNUCtevPHagJeJhPiURfRNYiL4U3GM6gHLPasCHwLRZ8dVryU",
  "key19": "4mRUf5RjPhUEyM9UR8beKhJ2dGL2WvY1bMNoiTLRuUbPfKGYp87t3Xc9ywjJ5mALQb8PYgR1CrRikwJtwPDu6zW8",
  "key20": "4jP7f65RJ5CKmt5Vk9MYsdCJbDbW1ghQUKuNKo4h9dWnfz1EVq66wBUHsPMTDLPiR3qX8jNUXG2KnEqqF4xxYkbs",
  "key21": "5gAEVC7mjJ5HaDPqoLRUNsjtQJwoAkXc62NCZRJ4GiEAkMUNgsqkU8LGCLTcnjzRDSFdCay5yuUs6XT5BZ3CJXmn",
  "key22": "3xk6NdSASUV5DsoeQXxZ2jMqhBLdCXqrKZ1T7Ww5Kw1qtouLgUCpkXPZAJc3hgW9vZqNFD8v1R7dMiaCNqUkkKQa",
  "key23": "53NaDkF9tqUXy4hBjxRwSGZgnw6bruu9U2buxo1beRnwsygDK1H8xEwoWzNzisfMmB3YrY3b1b12WCdU3g3z6JLi",
  "key24": "5SRGepLt8S8WWb183L8QSG4QPf4Q6CZyNMHGsqWbwwgYQBcr7PMjbKN9Xmca2YhCyMbVV9CDyJUumCejX3CaY5ia",
  "key25": "59XetY8CH4CSyJs8cMh7EuPXvt6ceUs615cSPfJJVFy66hrDBpifcTgM3JG57V7a2F62c1i6YQG6DBoMvz9yyH7p"
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
