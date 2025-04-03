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
    "QP2wZBDwaxgec6eGksLYutBz3BcCvYQcXkvJRsEgnbLnpz9kQdp6RzShq6mG4kcv9ddwjVnuSWz89FDKJToGUi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X8d7ppDz4gV2mHDabwnki84ayYabWaMkMoNe2w834vsRNZQxhYH52iF3hxTXJ4UnQCL6mHeMVkRk6j6g42on6u6",
  "key1": "4sBPdYd6M2JJhqJfNSP82az9DzgB3iiQNuzjRXH7x8sjwPu5Lcnnfg5bMZnUfsH3XH7JyAVXK9bHchCFJuRCgYQe",
  "key2": "2Q3TDQM2EbopLtx88qJZWPDQZe2YNXG39paEMdxDckumhP2hLoSsdmu2BjSBupcTJE4dkBhtdLBGpWNGY798ayNt",
  "key3": "5bkahSrU8SVwTPBaPowbxvuK34VehVPm7p9MG4FeYdfBVKqud3mYH2mn8ApABoQLkzGVo1oVxAZYsbzuDgfnyRDz",
  "key4": "3HwJaPmxWL4JnMLhXMUDqrG3y4QcfkCFWuiCZhvNkNKnnDCnFyTZysNRXHNHFLk3ETzyz74j4TWWQigbaTKCEPAY",
  "key5": "5wVASeBzjB7t58QD6kHc24gQmAjWDYaUazg6MFDXh6L5GyVF3kxu8mjXhwVUcTPmjVqm5XMdwXGhgmuJ9LemAC1s",
  "key6": "5hY3MQq5B9LtCuuUPRn1948Jhebh1FruRf5SDdBTZhKi2GFrriqpmv7ovS48TVyoRMFJnU1dLfs8ZC9vNbJja5qg",
  "key7": "5FVVEFd3Bpsjjo7LcdaohRmucMMn7GJ97AUvT4vvmVi6uwCUAxewsXWKFi5p5sRKywieVi8EfpjqiMCeRv2g3op4",
  "key8": "rwQnDhSd6zii5FXAXrjWJ7XFB3cibW8E1XT4AkFuLjfbPFjhcdjPZuQhYbc2yNRNwkAdvLendvRuYUSL6ueXdnU",
  "key9": "5fj3CkRErydXNLZV51rBqfKRwCTvRLbJJLQLG2f9hd1ehMvfP54A6MRV9CZARFx2ypQ33FZ4byNmUotcG3HVNbMe",
  "key10": "3jv4qZ7Xp2B6n2F9oJjxLx7r46JgP3cjGEwCRDrCjbnt2kEc7BdeScaYdAwjy3DbK9TLG5zfnoxT21kg8dPd9YUF",
  "key11": "gnJKTkcTU1i8LpGmQZ3GrzbektK7Hnw1dbpr8vz9mjMitPTk5Ry6xH8H4hiaGn6YAaNPekpJu4RGsQbb8XXdh15",
  "key12": "5fjgNnZbMAAevBWWakGCnnmVtjEKtPdh6WyuJeDeWJzDnNDxWAZ5FNg4NFwyxrTkTimpRLTVFGtDEr3nh2SebUYv",
  "key13": "44CLiJ3cMPx8Rvmxtfb1fQjvShYfs9c412S9M1jZrZrzqHMgYNC4HZcHzNsi6wFgmUmvpZHpQLPo3CPvg7DVDWMC",
  "key14": "5BZb8a9RXJa1KVpmNFZTUpeANnNS9cUtgnu5QmarBZM3PasnrQ4wiaic7CCj7LHejaYuiBfU2YsFFe5CBnk1ucv1",
  "key15": "2JCrCr7JrYuJYWr7DyzFEUdLJTjHUbSFe6gT72do4zzEs5dZjXx9ndNN1CGikLcnceZ9QzHjZtrPQnjNxXYo8XKq",
  "key16": "2Q8useUNsp1QUa6LU36rW9oKRqft9PoyLqyUyGyPmmp2Lh3zvgfo5YNBhDi7zkzCLEsHSr2uskpPun74JVT5uVXX",
  "key17": "5qVNhVviuVbmjQwgzicGvPK7vCT4iMumdBQe1SRrcYiqdrj2C4uXJC9zNDSswL6HPCQJNxA4TzP6XLrW7TnrBNqk",
  "key18": "4hcXk4CMMVFWRZLALUNU8S4GDfETm332wJzu1rM6y63SBkUoXXMm199HmDP5o4edGfVpshMZV9uSqYB2ZAibmYRn",
  "key19": "2bVwkZ1morXMNHEbHkJMt5Z9r94gHKLDJCBSEchCd9cqGP25YQ4eKW7j2BtmcJ74GH9PHePV7RTj52qvrVvqe1GS",
  "key20": "4STMwwhiEScBJ9UL4hwbfiiYDAFWuuyAKEKxKeQ5pE2mHExock5kyxKF3ahyniEPEopCRHvh4TGC8uDfFkeZkxZs",
  "key21": "4ihUjkhUjcuDcVB34kq6EqAVgxd1td3ERZ4PR75yL5FgaCt4LC6x4jtEY7a6yPxtstAnaEHCsp3nPDUdspAGC4cd",
  "key22": "5jMcy5FNKWNhXiDRFrA7bNiuCLW8N7zDRBowHTDC5KXo5YU6znxtYttgemhDEtm1ErHt2Zxb6kkesYZJGz5mERpS",
  "key23": "5kGgz1b8fvJENgTkotF18uFeyoK5pvkijPiwescJQBapvYHnfNqjJHMiLDWpYAMko8mAeMgA1sxyptAZGdovDEhP",
  "key24": "3XWdsg9dWo6Y8CoVY1GEQUH7eJx2enToUAPeVqFV664WQL3gLJ6izJdQY8JKv5AyTxHcy3VwS1HmiRMyNQUvkdS9"
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
