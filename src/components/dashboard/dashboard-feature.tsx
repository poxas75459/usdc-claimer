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
    "2yeSXrNBYFYVRsQQh7HapQMAt2UUq6e6YQ1QASG53NxrX1mNXuMRear5JDHX4Xcb2pjSZawMY9NqPeJiDG8u7bgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJ3tAWyRQYK9jKbkRzsgAsdN7XnL1ee911Y6WEVhXHxmYLeMShTfxKFeDzLtgBMMtCDtEiYjeJU65bVe8TQCgwY",
  "key1": "3fb4ejen9ymg267LLxUwBfsF5Ja1iBNmYdUzgSL3FqNJTmLU6WNhvZyQxPKnxkxU24dJnRExos2i6BNriP6BaV1V",
  "key2": "25Vmi9gt3UsQ7xxFj5nhbZg5CyeQJaFMCjixJ3R77hddGXmcxiD8kjYmUwHAB9Lbn1WWfjrA5CYkLDmCnpE2dwuJ",
  "key3": "4iCmycASZmiYr85GT4YPHbzWd7W3TAMmwU8eZTuuMAzZwKa7RuGivsMHVtoR2xDNWeCqgTS4S5BH46U54sMTE1pA",
  "key4": "28anJz7DFG6jD1ZUbr99pNhbteMphwisGAokQ82rN617sGzDvE4Rj5UAwZxT5ixHJNWrmYUmHFms9DDmRKZfYsCS",
  "key5": "4ekkqhVcMrKPgyasr94cH54Lmy27BNbwnRskBaLXxWKcACKW9cFDCesuvCL67oqEdBTBLhAkS3UiuRikqT9K8vhA",
  "key6": "zKBKFAwz9xk4pynU9L9Aw3KtyWCdBrQkdst6KH52R2f4VWuGYWB57LagtXZZFjLVtzsiNQ6aDbAH1aVz1MWXQi4",
  "key7": "3aJrMrwEkC63VbF5xEBZDNUJw1CehQePXpK89VPXt5XFJGDGSdTsTMbmvNvK5uFB1CLH5aU6TYt9bRUvT6hJSNq2",
  "key8": "3E7odsCm2Zs4Rb7dcCDM3hPGSGEMQ456sqLVpTK5DpQuUCuNB3gbYFzdF2P9VGTiWe3JnynnsGZvZGwfA9GVsnun",
  "key9": "2hxJ8mTPa1DF7ibpRFw4Maomufak2BFuV26YKBFcjMNBkT6u4xNtrYRx6JdkZPbLX7HXgqFHUCeMR2JtX9zajhvE",
  "key10": "2G4oTNFWxensriD2WtmKBmbfCVRWRo2DUaqxYpcKqzsMpREoSQ27mrH1B5x3TmhLMKRpvfSSsBFPn7NB7uiBkvJo",
  "key11": "2GN9s4SBFDajaXsnuDg2mCiMHtajfSAi7uFDDL3LxNxjkX3P19rqPvPRKosrPFvv7HWrzknUZCQpJ8nK2gVtA63A",
  "key12": "4MxrZNw3eo74a6Xoa2e4xu9og6bgtv2QoHfyEMP6MqZCRJuCQTiL3WwThf7YbvAW4Qo4f4vFmV9aWw8W9AYbn79h",
  "key13": "3jR1TCfakKTnZ3wDiqspDqUmy6S5GaZ94B5mdotpkE7W4y5M8SfG4thGaLir32REethCTLAMs2dKtxDkGczgdw91",
  "key14": "1mVQVUzAQ3Y4yQpbyyRAZ1DWnS9U1sGwgrXdsP4H37JEjwYfW84gmQeyAw6TKdSXCPdNFc9yu9ZLDukqL4iHp8C",
  "key15": "zfVdP4hQ77M5RNfxUFb5aBwW9oucLGmt59AsnYFanQTgLCRFksUsMtaDfd1txn1Mexf3XRSwoKz8gKENx2REzUR",
  "key16": "2f8U7sn5DnCJsMEqf25uuZdhvRLDsBsBVfBcEsVU1xU9S1W3VQKMvjYdMCop5X15GmRMfhPNJWFXYf9jrCwuZHKX",
  "key17": "5a2qnztiRPSN1GxBxFXYaCNH3Q1yLeLuExSAQrWyEtbAxz98DYUQLu7HhW24QyhY7y9ZDdcQZYUFp4pF5WdTAB65",
  "key18": "4HdRBhjZGLvPPZQUh3qM7R9QQ2Hp26gcCuKwguFWW8PvY8EoWZMfhBjYjX2PAgKHJCD3JBhW7d5YKJXFyLERTFH9",
  "key19": "2Mq4Zwm7gFSYfFB2uBYPpXwqoJbzei6qjHirqSjPw1CTTUEKfkig1RNacSaYwbsioAVReUjpjPjpnWXnZTrNUbA8",
  "key20": "L3n3zyZ5ig26RHai67D27wSXGphCpjAy9REVnxW1nv3AAXhMtDX8e8nac65JtPYqobPDQJCbxRq47oTZioghX7s",
  "key21": "wXeK9mHtWoUMGH8LPDWbNP5x1zNL7NQTYtdzbA8RWr5cz3Zes2T7qDdyKuLfG22TYjtEqF1RuLT72HaKnB77iKN",
  "key22": "5fgeExeh7yCN5nrargq4oajtRPn9taK7LsKAYprzNv6E6sSEAFh7XmNNm2w1NzkfGkH9rnXMYBUUYwh6i4ByUtrN",
  "key23": "64Gc8xYqyTQksUx7SGziDbDfKSauw3tQW4kV6EGZoWFisxcCXMKxzKwPTULaqdDXu5vpzgm8bnCuXGGaTeL4SUL5",
  "key24": "2EMTYFMBS6oY57sYq21PmzL12RCXntixiiPHBYegmHpHV1rRNQc56MceX1Pxng9sSSvAvPFLpxHpYCvcMTJiawQF",
  "key25": "65oXCjKNQuyCxm8Mj3Jz9aVkuPpZCMoVeyGuXmTJiatpewqnky4MyVXnYt44tk1jWZYHJhhxD3BzJ9SrwCuaVK4T",
  "key26": "4hJEJumHwU1DiVaFsPCkd72ADoZapgaresoVMCrdNna59CoRjuBtbH5VEePZCgC3CGet8uo7YxwX67cENBbjXaE"
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
