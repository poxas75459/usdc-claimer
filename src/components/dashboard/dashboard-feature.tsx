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
    "3PWCKbEddRksLtXLKBV19yaiHVX6K7xthzLt8jdctjvS9XhJdRCj8Ls5QmirasvvjMh7h2kJNQabLNcawdGpcJqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qew7dCPW5goXFk5mq15VEtQS2c465qemUtmqPVzAjXEsSDomEMHi19jzyRQjebpxEZxQdz8oUzQy5kF3FbwjE9L",
  "key1": "3XrEjZkcKahV287Njtpg6AjGsz5DbSGe5JLXduXreC6NaeRCFjL26kv28yDLFtMPt8ewtQbe3GZWdDbZxhhZhzt1",
  "key2": "3s4tLu7UBQCTAfJz11dmkzpXsgQ79g6AqR698fjdQYMKSRuBftQKUGLXBGd5jXESZ26SB6vngzydNjaZhuyiC1x2",
  "key3": "2KuSz6Fdc5jMFi5TF49jqumknVbA1ySifgb7kpTEptCi3C85zkA5JDS8G9uuy8ca2VN8CLaPsssLLdhbDaWpVdJ4",
  "key4": "5MrJkhj4iKDPr1GJuxtDxsSU8zXs7bmYe7miQ4VF9zSMNvvqGSngPmRadFBcYbkQwYkFGPJK4DwEwmV94uiDreMg",
  "key5": "43fnzvbk6yXxoFxq54aJvmQeHFisSqHL86dvfGtLarEZaBjQSt4dj3axEWssxnuXgAptFjfAUyioDwm7Aw1wgUZe",
  "key6": "4u2HWmMAAVhTaru3mPMktQ4fJaK2A9caUycB6WXKdTeYi9gjQRt9vxYd1bygqR86My8XYqRbPAVrgkyWVm1aWJZX",
  "key7": "526c78SY8y5DZhbTTLgPDk2RdiEScrALXj3vHCfbyR899rhLu1NBPzbUjc13rFfWxsVvzWBnASnZQBPZLw9fUxfz",
  "key8": "21EvKeyKCPmWJSQsPzaxeFMYhi9wyn5jcra2EkuWY4HTDDBYGUhY5tJP2rkknXXRHmKVPg6vQRGVs21d6EDLHkZN",
  "key9": "5paBW6AazU7xdfcdThHdjwwYhHrqMpF1XB81X3eCbU6znHQuQ2kKqzNjfukc7bRc5CExW9r7GvacGHGhHPxCKqZL",
  "key10": "5eE557KSfjAQTru8sHRyPkVGJTKg9G4N88geMfjp3vw8SWCZnHmHY63HCWNiagdDwEAqH2HvhobhPR6NgSMgHRfA",
  "key11": "3mqcJgURQZmvz6MBFBeZx8ZxfZ18TH6uK6H71pVcwxy5LfsweowqLxHK7N9iYYK7Teg2LBp8Ld6vD9NrzEkd2MrQ",
  "key12": "5rFoxoCnAHp6B34iE2nnqSpfPxBvsXSmM6Ya7Vw6jnUYGLMhZBdGB37M1cvF8bSKNFLQf4BzKZE2De6YT8cyFsyR",
  "key13": "3ZeroN4JeUkZQhoKXw2E31aHEEvQ3UZNDDsgcFZX3S6yus9BBXVk3WKHtUks1oXG4iBZ4fniL8oDaGSVt5G45Ldp",
  "key14": "5xei8FbZRLBJ1beewcy4Ac7qixkWpqZqm5enhS2etpox19tYqooLHzZqJuxECSvsUYEp47MgWhW2fMCP9HwDuWjB",
  "key15": "3fzWPQMGnkA82naC5unpYoo5x5YDURBNdiFPn2eJfpB3JvKzcjEnmmnn16ESpgPztUaUG8xaKahePQcsQwdgMAWM",
  "key16": "3S24KUVjYWXRYw7ajfpzwbVs38g8wNa52c5qsVghdaJxU8GH26kevdjy4w298Nc3SoCKgVgQRT2NRjt58iFzUz8x",
  "key17": "iBSR5Mjfmd8STzjGrMqzzFxkXUUdi6r2KsJ1UBGM7XMSMPzBxZnF61NaH6DQnPoVHUS286Lb5Jyg531sSLgpSYU",
  "key18": "3FY92jofni6bFLLZHdoWPgwY68KCF3WimsVybSyTV43WVwYiz6q3kJqArbTTokz5Fqx7qehqAgzSzWBC7JoAXFxu",
  "key19": "5iD4r4wyhgx2fbEJPh7uygV6S1q3PsFB2frpLz6PFbBfD6SZojX3iBY76GJZLxbuWBZ2MEZo2rRsDjPbZuHGLTtt",
  "key20": "2UhD8e7e2ZHwJsP4NPgsQLAM3szyjyFbgnmBoeXFk5V2xuLPRyV9Qkpd9PPcv1sq6evzY8Dk9xQYBZGvcjz9QeKo",
  "key21": "4xKPEqJnR4Eqa3hLJW7AnJ21FwDPFRDJWKC4K5SBWwuusStpbBtARsQx78qeFXta7z2aM5mi11F1cEjndgSeVmXD",
  "key22": "5e4qANc4WoKyi9Tc8SLExgjzjqykxjiRmmrqQhaFut3PXg4RFe11Tm8PRWWXysJbZdHXrYCniKBJdPy66j9fuwMJ",
  "key23": "3ZAvM57Fo6qSaVDW8QmwjntXjiNUBbihuNxYmZYkSucZ7jjAUi3RaCbXC2CguYFBKr7spjUy2JA8yHZXEPUzP2Cp",
  "key24": "4ykphHt6rK9Se8EHvtiQVCKos1LGedoHDwBAzZNP3iyZChhxQpbQnAXU8qF9q7D8kCUnSrhDr5eTjghf8aDHqF4q",
  "key25": "yC7mSSNiZiUREHnzVgarxcTFWDNYjVg9Uq8rUqSHkBeL3zRjm7ycqzw9EGLFm86TwWXouZUTtn1tJ7QtwifMzNL",
  "key26": "54VAyo3MieDdkDPDwmFmUvd5wTbsPzVQB7nEFA1e1VHSNiZuN5g1jt1suVKcmXTYcQAq2rhzqGiBi72nPD5cm411"
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
