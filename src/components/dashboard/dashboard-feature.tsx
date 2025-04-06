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
    "3wQcN9sTQE4aFqcJx7BTewfNqGZ2BJoGtjD3FHRP593QHXNgf6aGYdDF1Ggqsos5c6XpNyN2HyLJTDtWFNQfA2Ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3amMpCXbEFQZvpTLWCxraHAwWeXDnTEWMXgqwuwBd9D1p8MeQXdnFNBacykQdKvfbvpsytRaHbMEbxjNfvAjDH5p",
  "key1": "5NqeFn5i25gaTJzzFQY62zzyAsuPBDMYXDRkstLNS7yN1Sdb1VAv59hJssWScZduPzchzKpr8X97C2ZLWpVMgCNa",
  "key2": "2BhoisffNu4bRBhLrzXGowAaXzedUq1P5rWpssrfX2i8nDFkFq7m5WGUYT77i6xF7Q5YEwqdbR29U1JVmmveQHTM",
  "key3": "36ditMgP9fz7FrepbJi1hSshd7oQWXbyvkgVkMe9k111K5Xd8P5brqkZ5VXjrnWWoVGkFUPjhiA9F4G2HM9n1tPS",
  "key4": "28Xhe46dxwW4rjSYNmBFigfzvbdhpaJk6AiLPdqR5Bbt4RKx7PrqECfNkKQinAHCstamYyqfJ6FPvysGHzBt6gG4",
  "key5": "noR5mtApPS3fKiWXFb5S5Vd3zm91G536vopRAvfEbg31QmNRVhXkjGSDGRArmB7HUzdY9hfJeyAJe7iRqBBTrgp",
  "key6": "5wjhxTY2x6oLMPbK8dUm151MgT219Mwy59xRTGEqizygapLby7TdACHNyp8hFJZVzDE5AhrqDcVYuLyTDURF7kQb",
  "key7": "2K2BNuLhkAgHy9oBouACYxzs7VAyt7Ujo7BVY7veVPwq2RpRaposRdqTinZ4GaeLMdcsipcuCRGCdoThMKso1tWp",
  "key8": "jpk6cmu5kT7Jxj7A9NBLu431wCkW7tcji6Hw8P174dTqTNtXk7Eh6dKXWyhmMuG7Yqe4mRuSh95rpLKwx5J3EXv",
  "key9": "5WyBsKixMxJuZBrQaDkvkaQBnA8nTKGfXPRRbBtbt1gJ5KRihBwUCDqvrextX3kvPrWKbfS8edeK2vL4MmXrkQWd",
  "key10": "2bX6Tx3wwK9k47hYst1xpzGxZSGjSBwD26viWCxVJyQwMUfa5SYZdnGc9hox1XJfN5mxsAMnT2bsicUNCH1znhc7",
  "key11": "5pvxeKASqCkWyTY2LmmFwybq51V4py78uJEypaPnuGYU2NcHXsXexTUXatx9NHDnBgFRv1qoNcqB6neYjJuVCg9g",
  "key12": "44rFPP2cCipRwzZG5FdNf8AfzRGLzpgqDguR6azaddYeRWG7vAJuAbKobzgRp1nXwHvDyeg3SUTcTXW6RiEfPNWp",
  "key13": "3YjWyZJan2aR7fMD8Bcbr7AXMEKnDGBV5xRx5t8zwT4nj6wKgu7tAA5pB4AfagpcEV3mFpnBCR236iCnbDZ7fWno",
  "key14": "5CMFNTFT3a369dCHqbt4nUR2goejPFNv8z2wn5xNfFtsbcFrjiywkweadD8eT1Mt2UgGtwh9Zy99vMFJeTxBJMsf",
  "key15": "5ajLmXy8dkmbPVpq3L4Ci1u1Mx5Cc3tD6pvBzzPCq8iUJcnUp71Q3oY6NdATghPEAXZ1gC9FBZG88N9aESdJCqPU",
  "key16": "ySfi1LSgV1a2YUYa6NxeAsgBR3Sf16qJZamKXfdQdtDaEKepzfwagmxG3dbnjbzZLfQeju51uvSacxKzQpazmzu",
  "key17": "2KxuuCd27hcrHJtExTDrPa4cxexwtidEMzKXfKojn4TgAcL38MHMPW42izGMcVfa7hWLhLYbNXdLMZbKZJAYzQp1",
  "key18": "7weWSKbpU248co5bt8mf3UGnvJ8HiLfUL6LGcZqXaG38xdKUndBBa9mcGxkxyvqLsysQs5fGkSA3nbEJb7JdaXj",
  "key19": "5KbCfJtFn6HSTRBExyhJJTTHN21JSXM9rckszStQ1qQjb1bmbUL3VU8qQqBNL2cZXWj5xzyDJfB7mcTexdXk7nmn",
  "key20": "WVceL6pWaR2pY2Hup615x3ShL4Us1Tp3ZbjWB7GRwwBCaiKxewSt3oMEniPL2oBiV6ssJawWKKWDoq33sbGXxb3",
  "key21": "219Ufdo219kH1KokQ2oYbvyw8brL6axLWtxu64r1i54voYHwEXzuZxbCwB3GKpSSBxnFZhj8sBkEH9STri3QLMSq",
  "key22": "ZcECjTT8soTK8bVxD5uBjunpMEwXQ7Z3Ev5uqVdMSFUpBJ8fbHptzZDCpAB4m1JCm5YYnMu8t5YvUSTxdHdFAjY",
  "key23": "5UfEZEzh5TYiABv7n1fYSgqvqN15DzWW7kLMNwR3ND7vdrh95XV9Yqw9VaoaS5YPb9vCrAHRutwRQLY2BihgwCaX",
  "key24": "tGvwwvH6GQMgszR76o5Zq5ojkUe2TdUA3EgqTwZiz3u87TmYYpD3WHbTUf4zzrwVtRFA3aRQTgQQBuAhfqq6hx6",
  "key25": "4R2YjtXLEiTeCUKkWH9eHyVetGEjYJynf1CNafLayyiTZqVYp2DGLu5eQseaKSV9zczDXb5e16bVJDk9vF6fqc1e",
  "key26": "5CGA9uHbdytyUuFkVLw7hJa4hjfojzsd6e5oSfe1VMjMdSB4A5PzrwxoiLYY1c3cCiTsZJNYUMGGd1piGQ851uTo",
  "key27": "oCH3YPevoY8izetZAVGhHdEqp5zL8rTVCGSb2Y1ST8QS1rgbHij6jN8Lk9c5udA1oiNXv3RFmb9uCFbFAXqjktm",
  "key28": "5MHRmvnctkKL19c6MPpnwvfd6JSGrmLLPX38YP2dmUtyPYwQNyrTqxP5UDqnvuThdekWmS5dF3WkvkLXt3LRBtMR",
  "key29": "v49syAU2oJ5XUWmJsnDPxEV1zcg7U35HbwEH925qMMD3hmEGUPU5eK5BTAB3tp19qGF7pkcdLrHyAM5MC6UG3iX",
  "key30": "667QLD1hhRdU7GCRUmvPGbrZHSuiJyQb1LYDf9TXS2hkqUnHDBLjHmhqxM9FahBKiSAU9ixYHfSMmp2Y784XuKAC",
  "key31": "3HrX1NcNQ7auXtFCSiDZu84aLipxSxHbQYbcmw6v2usEmUjiyMiQL2YyrN4KkQdPLWiP1bbkHQETjnuzbkSPkM6g",
  "key32": "3Hzxc22nnU72FS5WgCk5MWuMeaCzSE26MkSspbkSbr1PU6bScNN8RikjRQ2NVhxQBbfhQYAj2ajUajJZpKosPQGG"
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
