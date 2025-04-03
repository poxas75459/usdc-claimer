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
    "UPfBJEtedJVWoiCjtVgdViQBu889PV6yy8XVJDcRF59euxtuGSdoEPtoRzRrKfFNAqN1YyJaj2eaE28wpnyX3Mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4Gbg8QBAkZhj2GmBG6a6DxXVcfmPUEZXckQmcSTATKzn7p5iNpAy5ZSujicnDR25MJe6x6iaC2nZKt9y22LG1M",
  "key1": "2vknNk1VhJfJP6FDukscyneiA2syN9r4weXn2Rn3UoHiQYWP7JKxzY5BTNXbE5bJdEWL7gg5PcbptYmPvwMYZ3kf",
  "key2": "3mFiZAeJjvAFiM9tS6aJsLCk5cSrpfvWnP8RFhMZvUuCQzMKPUSRoe7rjKawneeuDfrdFcDxKQ3sQtjKbrHSNQ5P",
  "key3": "5qmbrknRjjeCUeSA7fF1vpQgWpncMHnFBTCnSoypvp9dxmHW8vpPyj1pUp8hweSZMb6UrKPs31YauGYJz14XLtAc",
  "key4": "2D1DTz18C2HtNLU75d2qreJPuP4D1rdKBdRVKs3JiDhTkkeKGoG4qag8yZoxNkvkPaUz6wyEJkbCh3kDrgk8rBYX",
  "key5": "3EfpJBaABNFFHNk3UXUBoqYYUenvsAp33JnWqbDcYqPw35cNxavea2BFXPLdcRpGiEcYAwxgbLAkoDF6vcTW4FQZ",
  "key6": "3Mu2e7CzhReQkw2B4fiSov1FNroYWK1iND5GaBVVQmVybPpvSM4A5DvjmUUzrdkrCAd9ifCf3p82ctJPMPr5AwJt",
  "key7": "4t5YWezeUtKFeHgLAp5ypHB2GTkaswZkHkmi5ConxJPcQqAoaENZY6YdwZbJvydfQxAU3YucyfEuN3iZDuxP1ZiS",
  "key8": "3NUhUExaJy5hPG86vvYw9EE4BZ1uFpKBDyoqwTFAQq8DK7nXpaGD7Xyu3wTwFEhRE12398HEmgWgQYhtTrQiXffu",
  "key9": "4QkZ8nczrsq22NmC5SkL92Vxiv4dNdBe9Ff87jr4UvFgVSYn3aZk3q82S6vEAxDt8rhXhD9qhSLcR2Y2TcNc72JK",
  "key10": "3NzHibWe2aaVCwTc7ikCRdKQyJPZ7mrWC2cNc642XjpjttzYt6mAvpnrmmC1UGfD1EuFHp6gwYfFXq5ArKMmnAZW",
  "key11": "5Eu9zJVRUMYxxBKC5Zr4DKPjwSbQ4jaTs34cW8TkuFywwQWE1SKPyYwJkQLbJkfAXp1qee1gG6M6kBMBRZ2P6zve",
  "key12": "3hYhD46oitPQMagtoBKJ3zVaN72j3vB4AfdVZbV9TgNQcyFBg1qiJSo9t4W9moLjuJshLBXSFCCQxnSwjAzaubAa",
  "key13": "JE25G8mqoANABX5iDbbKT6sMuQ3eow2Gd5YVBcxiAQjt6SXkXXPGDRdrUgi7mjevwDisVqa4mK6jE6NMJriu4ge",
  "key14": "4GtVLLr6X1TFZmbwLs9nKQ5s4iQUind2skNzz9d4ekbbGYUN5d9wB3DWbu7QGQUUYR28Btsazt1PBHaAuh1mbSfR",
  "key15": "4KXvnogKHZwEwHdeAWyGMi9DNZ5vToKriiQafnzomtMTfbU7oKiwK9hYUtJ8tMQZ4ZMvdnB8YpVXh4F8qtvt3rKB",
  "key16": "4fi4pFQDAy3xNTzvBfzuGroJA9De465j72bPs8GP8Zg7Rokh1BW2nkyG8gY7gyPccqBB2Uh4p1VjqqXwJ4Uz5TLV",
  "key17": "2jtVuCdwQXfsJf6kLjRG5ez3Xp7TGBUai4oPaA7BSvHaNWyHvtcZHYYfKbU5A3KJJRUvqTRnNZnhdTKkD8HxC7vQ",
  "key18": "DhPF8PpERKZZVK6LPjcr2FNxbTP9h19s48qh3t2huKZR3awQkiXsUFGAXtZLZzgNTqxzLi5vPbjGA39nbhj1rEx",
  "key19": "5yPaUTLfP1xBgBVvWkx1oSQo9pS6Jy9y7w8WoGWJchfPRmTL5WZKPsc9qBXsDnsYpa89zRco5J7n5ynztg24YCaF",
  "key20": "37Q4B6PeDEmeZFdwxeFHMb8hhSn9XxSU8UP3b2zaArdkfiAu5pyHX11XR3kYeykoWKm3sXP4FLUtcadYTSM3emCM",
  "key21": "5neZHHBcZjF8Eu5wQ2acbdRG9U2qVyWipiZfxWwWUAJX1AVGz41Eug3mMXz4DnMChzQwDUYT6Q6pF2kD8ZKXVBgE",
  "key22": "3pi9uQRAD9PZZhRTvD2rFMZQTWFPhda4MzzFy2qdSWVtQUJkrF6WByJKZi4yXbpUug4BqGJCZgH6aC9pQUbLbjCE",
  "key23": "23Zm7kw5czHEuTEvjK41QKVhnG2HkFPh63NXqqF2r2xUCB3McsZfHwAdojjrh7z1hnF2JNJHirjfes9ueVr4KqYn",
  "key24": "3PyRjeF838FxZkzpcfPCGCNRty77UbKsiRjAag6Cy2Mba5DxeZfhQgGv1XRuGQsGCqRUzb1k4zWPMzKkqvXHw7xK"
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
