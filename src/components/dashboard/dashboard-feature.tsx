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
    "U8P8SH5WmGoGK2jn68kB2nLoMgKAHtye2QBGnDT1hHHWonoVuSGNXKqJ5cjkSdD4QWWg6Jeb2Lzpxh3BnYWD3px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVpyRDnQjDNNYEwRHyByvqYr7KmAtxmSH5jEMzXrpn8y5fyPBNDJnDEchFaC3BB23Av9CrobNoNtvkjzSCMggfV",
  "key1": "2FQgckpSwFW3K78cZt2gjPYQc8r2AFq3KkG7CFGP9kGNsHvvhthLuTRTVknPwQpq8P2ehdyJjfVAi4iHczWawhKr",
  "key2": "55wTKF1AZkYLULT4ktU3yjuoop3axtUw7KWbJ43AD4ic9YRAqh7UU38AaQbM3zk5UddxBzysTEKVjbTp8n7JwKSb",
  "key3": "zLRF5oEv47qmWFzBeqWujYztdreaLLdcobTGWmEZCcGCKceUcfGC4HGWw8GzGDYKftJydgXgsAQL4CEA41A2oWy",
  "key4": "39jbcSUsMFwqWwg3EXH6y3L3yTPryyobUBq6FXrQfRT4hX3JGn6nvK5X9AfRrFyziQz8qUud7842DjsvrwvLfdko",
  "key5": "4ZsanvTZYs7tcRqYm9TrfVcTKvBJBG6tMFfGpcn8qnvft13wi25qeFaujs6CExRnYPeopLB8dpXN8GszWcCV4NAm",
  "key6": "oQNLUE9A49SjbBAauhVfQkMfqUhUj1e6rPz5FWJpt5ZGg5GmRUy62Fm2VzBMai7rWDM9Q481KVVte5PqUaxB9GU",
  "key7": "2afq3vBVqmht3aDG8aK2cRnRq7k467aSWtw6a9RE6dtBDviG7XCGdXmEeUN1j19bLRmBhBTU21MGokTupkWewJoG",
  "key8": "5ct1qQyzsnKy6PV2tsuya6Gk3Y6g3pFYexxi5teKHvP7eRBQEfBvdeVpyHiABi9enhq927KW3e15ewvsTsTXXBEX",
  "key9": "2SYPMNoDXpoYRp64r3y9W4XeyGJdcHxGqJXzRPDenr5F8vXjVv95oVwwGanoqw4sRYZG644v8LpjHgehuoJS6NAv",
  "key10": "5XmmkBG8NaVJdeRBJwXzwL7wUnSFKteHXZHLrXzhAv6FUobhM9QTpgP8wT474jbSscug5inp3eM5PS3oxXcFL5FU",
  "key11": "3DBuyY3cueTPY2VibbE2fGtJL4uyW1G5DdFN9sfNSTYvQkMfrCQxHiRN4KXcGEWXg7cr7Q46zLWSFWRYMmdASDMH",
  "key12": "4eSudDntTCo7ZbQBNgJHhDnADjZveJ6bDxDc3UQJEXuVjD8Hr7f4AjTwiMA9oodCKX66UTHTZhdQRqhtzZA7NTNp",
  "key13": "3pBbJKspYYwPBmgJuStizaXHLbzcM2LAuH376BHCfgb4rkVQA3PNbhoLUqmZSmfvKieUntW9sfyDjC287CnJwy3z",
  "key14": "5LUgcDVhTmjHjR7KXqJCH9UCLJBPUADd93CSjV5vZQTrzA77uUbpf6cLtmANBNagGgjxnLoQmYmXwY6xzFsBmppg",
  "key15": "632nU9EzFrmAHTbywHexPPcuUBnnZU3uZ1nTnTiRwPEUjbLHWs6pWitVoMcoaQrvJ38thxa6hiLp4kYEYDfpRu3m",
  "key16": "vMqzeWrftzr8oAZjpMTvPjtufVbRUQzm427jhvjrJFbNm8TpbLHcfyLfur8HhjPbVvbsnsabMqy72tvVTNAQepn",
  "key17": "3J9w7PKjxDAQZ1cDcZ3bYdY6fujtKmfoa2QLES9wvSvcAf76Ja9mSAnK4EJLtqKhKkZmeEi445HpUvW2xL9MERu4",
  "key18": "2Leb85451EY7is97dqENLjkJZXt3KRKJfzktE5bNB8cjABWftMrp4qTfwUouhC2Gt2M9wznbz1Hcai7vMUwMQWNk",
  "key19": "5pJaNANeSUwQfHBbkTCaunWqQfhWWifACRYCapotgh2Ha7E8kVc579V64U4H8aXtcgfaz24MWhkgR4GJajtJhjH7",
  "key20": "3mGseKgWxsngi5iJqiuyx9sc3EdhVix62RPJgSGZxFxgjVz2ehuUnn8htZPZkVdCTrCevmZf8Ut4uC6RWLPndrHG",
  "key21": "3zb4bUD3mq5dT3vMqWLwhib87rGLYSoDGZD4WnRyWCbpvCg1TZmTdgDtEe8eBvwX9PzCe2vVmLAUvvMoDmdyCjJ3",
  "key22": "2YrEfNFUviPu4qdsChQEuq9G3wGU1re2tWuGEth3facuYfEpxnU5w8EWEx7FcZXxjci9LkrusZJyqFK8XPzd9X2d",
  "key23": "Mi6RZnCRxNTA2XXEKc7fQEy9XnbrMKp7rpjU2MFQv13gkW2WoMxhcL364XL1PWdtywUKJ5kqePTeE5Z2LgHtyTQ",
  "key24": "4L96ZSc7ZWn94kKymav2Y8nAigt3ZiErR4KvqjVwj9pTUrUFCNXwwLQBz9RuTeCdHCezS5MuHP9y8njBETqBCWrf",
  "key25": "4TKZENaBe9MCxtmQSNPzxw5Ui7DZfGixDn8gWAUFzxtUvVjNFGgTerSkJCPVVuLrvfWxfwdDhECyvbvTUzKVAe7r",
  "key26": "5ptqsxP5gnf56RNrVbpkSKPCYa9nzu2oFbztuWoWXRCW3yHXfHEUTdt2GZugxLXCzdV5rdyKw7Ak3PFRojrAHzAb",
  "key27": "45rHeZf2Vbp9FoduMCktUMhWatDmFkGZRDytG4FuxyXxPUn8WwHi8EYQPTawSv5MhGRyjtz4aXbVFVgwxq9hspMg",
  "key28": "593gpiiUE6mKYzHzcgXuC1NWt6EGvEu4csNmeBySELeXfhjyjf3WhjBFKd76h2NAYfuzo9cvntbBrSwHbxeLQ4Dq",
  "key29": "2miM51XGDkMtD8ag6ivZRajbkFxs4TCBXHBpuwHh3Kan3ozKNsbC9etbBfMimga6KpoKdXMNdBcv2o69VV54FdTa",
  "key30": "2p2aEXfJVXgV8qBcsXr5zhh7yDZyo6kJtTMTAqqpuQzn5hyDVQ9AZXTkdhbeZoC4hFTBa18TNs7h6iPBcD3MrFZv",
  "key31": "V1i74Zx1UDGcbnkqSKmbuqR9oJ4dFmdq778dmDxwuWHFxkp5ycyA9ASVn4u9WCkUALuwnzdeXfVEERBia3hUscu",
  "key32": "4iREZeY2dgtGHuHkccftdNi8YbFpPeboSzFiywG74NW8Jnw7uhpZiNhrqtoM4jUjYQGAf5jmEzHJzwZkida1LA42",
  "key33": "3RW4TxkXaNU1MDA1AC4Ts7VrATGRTwKsMmSDvP1rHyAeBS2muuxML2gcbqJnDZh1qWWxMc9ca5hopzjMWciamCMp",
  "key34": "HVNCgPRVSkTX21RnAM9t9A35ve9uMuSHN9smxAa2LA6JJaJQxQh7pLNV1ZfB7cJSLddwLZQ4sgUzRbmmeUyxDv3",
  "key35": "3JkySsjTe76D7FCgEwr18TS9bpxP88uiW3gnHWYfrDP7WkpErDDyV3Go3LFhZehLLo6BBuVhWcJhHNrRYL3Nd7qH",
  "key36": "3aauFoNzYsLmAw7YnhTCQyc18obGVQWVYNwkaEZoWJFQ2oeczHavkZpNZBVHaW7XKSE88TCKU3XAvVQdPVui6PiU",
  "key37": "2gXgwiELbQVcGCkQDGbRgmsnECh7JdhijuxLJsqdwSLB8DCBMotaxBag8Dxn4fDim8MqsDCzKNcytRSwdSmGVJow",
  "key38": "43Q2LHo17cxMQA44dEiMAKeRZEhfEd2YPob2yzxUqUkWSo4UtKrwdvZh1JNvCHH3E9RfNpJ4kevLdMFJjpW1sg5t",
  "key39": "rdwAC7yUGmMFaNVhzJmQiMYMYK1csZHpdHAX2wogHsjrYA12iNp5NzxBU9EatdXJEz4HcD2T9JfL6P884JBysGu",
  "key40": "2XbDU3iP69K2tmXtuD6P6GCr1X81qkaAYjTvFS59Cutu9RRn9SyNhdrjj1unoutFVxPpeyZ61YNam9wAmtzA5xyS",
  "key41": "4P3ucXASFWTty1HM67HV7gfYKQHpRSRn3QgFd3iHqq8VA4HHZTUVGZ1R6gBJsSXsYhHACJ3w9Zt8wF4zg4mWGnxb",
  "key42": "ZENY8utF5cz5x8d4mALDHcpdC9iXiLeyeEnvzn3ovPMNWJmL6e65diRCWwB47Ura5RShxTAAkgbTbM7vLBzYFnw"
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
