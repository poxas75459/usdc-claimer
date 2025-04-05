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
    "4mfqvtuHsZTQLrDBgwmQ3NKZzz6py2KeFgna4YMqyuMBXqY9i3BKSG1JreQ2nM3Qip2PXNLbr9MbcW4Da6hj9JPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BCzKZZYbkRfYMwvQZmi42hTD21oa7KQTaUCLvQXvK3M9pi1mUhgcSz38H5HypGe3Y84T9qQRFfrLkM31sN7GMN",
  "key1": "3Hwa9vj2xrXtSgptTmQB8ZQWQKqxVk9WxrUaCCdpyNmjSxBeRxygCXpM5tLU89kHBJeRjCmXQXQkSDk8YgrCkaXs",
  "key2": "s4fkqhbHnTJF4dUafxRnQ2Qse6KvzevGpfenKGin6B26vpNwsKkyQiHectgAYxJdTd3FZKafjwqXHQbpi6fAi3y",
  "key3": "4fB32H9VpKhnvFkfm7MGG6pCte2kjThY4gjpcdKG97ZPTbJJkK46g75M8TqJgjv7goW8234EbMBeqigkZUB7pJWL",
  "key4": "jtuSHsmP2971ERFmAGocLQeLL1QmEWJ5wvdVVqkXYCVfPp7m1r82VZkzwBTpccRfqksoNUTPrHff1Rx9UMtEvB7",
  "key5": "4d3WkpBu6K2wNbzfKrGJC6SLfyP3F3tG4dTM2WgrUcg3pBB7eQhf8xJrtqBBPVRitLWwde7AHUtecSW7atga5B1N",
  "key6": "5SzwBkCGh1Zf3UGbDf1JTs99GBPvwXgCmMLNCGUUeXHVFbiYuSSJeX8bZCbyiazwEPctd93ZuSzLphfuyyCY3unA",
  "key7": "4PBxLP8b8MBEGNQxd5JnGaNJsYyUer3pztDjs3nhKA3eGeEdXKBUW7iyyM3wKo8LPkNjiRsEPqNmEMN2NBxW57s7",
  "key8": "5oX38P6HWn16Vt81Gv7FaBPbANiTou35Zy9aye36tG2xJv3p72vK8Q29Q3e7srWT72SneMyyg8w6n31bL4TH9W5u",
  "key9": "4XBpqZTPeozkvT6KuzC33CXPUivTSUhauaZp9tewndwBHgyWCw6PvCNwBSCMri53dMZhQbFnZLnPdPHhPB8aERUG",
  "key10": "46VxHC2mLaFN6DwGbDqFbTyvSXEyhmfpTfW1zwTgyUDA87hM36fuwBAswoPdR6iDVHoX73dETg2HZa5Px4xCaYMA",
  "key11": "3JPCHqGeToLS1vm8J28G1QxHTuyexVLxzYekDCKd9pXgTRWLUUpxjEsb8eHBewFeUd8sT8ytrR2feGQv967htvz1",
  "key12": "3vqgGwqZedUk2JbeufJEkuNqMP5ebgTDTHCFVkx5QgMDZoAuDigHp56kYTX4rW9Lhf7yEmoMMmVPtnDvghcM8mez",
  "key13": "51FWQ7xhJa4rrZcwbXvS4Brsqq76Sh6EmvfGoiFLjKaASqszu4EradyS9Mz4Wo9FCbMcBZ8EfDyuQiUx7wvyvetf",
  "key14": "3f7TrzKedC4B56BL4R5EcBYhkdtKBpq4dDh26uNSsFsNbg21S8BuFxDuSvn3qXy8NWrF6pc22ZgAkAeBgp4SRED4",
  "key15": "4eQJoy5HJ6PepX4fYaamjUgcJfj32QnRWamFrhrjF7XCHW2f9QGpj84DAMT7fzc4FWrjH3ebGgTg29f34E88hDGf",
  "key16": "21WKz62R8EqVRLXzWdfTcD9y7gtS5HmvHS5oQqQ56oZwWHxT3ut92Ktiza4KsfH72pizdgAzN8UH2apKNmuevsSV",
  "key17": "3MhF8bx8gh2gvcJEzfa6czVBoaSaWfycCrvG7ELVEpSWUovj8bZVJLRkH2xRkPUW3cNfRasF8cGK9uWbhb2SwZe8",
  "key18": "4SFHMFpA6eLXGsu3J1qvdagXCCJtESU9MauG38P498sBjBeXZsYxJvgS6a3ezrviKRzq1qkKhqXyFXEsgNYSuR65",
  "key19": "CJrKqDGVdcN1adc42RKx1FiWzSU6CRUDBi1jwJAPRmapgbFvaqDtTTjgftjAnCvWWwabNXukrZ8dn19oESdZPe5",
  "key20": "2TqXJT1Vq7gzDXmb2qHFN4okgwmuhwusu7VHj5jfXb2faaSWC4DmTi1vWxj17N5YbzFRenqdBpHwJveThdvjyDWo",
  "key21": "2rJM7RdrGYUdnRbViWLepXKbTFuBG8ugNeYVFCYgab1sEwQUQCfNH8WVtpsnqRturRLAi8e6nVKY9tGmjgM28omh",
  "key22": "bsXpvMnQyU1BbCvYE3RRNcF8MWK434XmE5Z4j6GeW8Po2f83spUABWRwV6cFjNGQMYUYw5XEoLTse4Pv92wY85i",
  "key23": "2aMLt4g6VTibDTYsSavchP4FTeo42RJCuUsLu9KYrZqxskFyLZpCQ3WnmgM8r9rsCJUHZKyUzPE4vnVRXMzkzfnt",
  "key24": "2dSqZBbfE4eNdFHMwuKRRMSuCYhgqxjk384NAmabs4RaN1WbMXJTdQffzvAHLNEsfzkcVywtTauaug24paawmJAP",
  "key25": "4drJHVgnrtJwRKC8cATsvmqyX8TBp5XWSb8nTnwJQbdcEx6FD54oh61k5GYbb8b5TxffHJmQRkJCyqbZGU6qND5A",
  "key26": "32nASC5R9MnEhYTB6aTjkbki8B8c1b8QKKmDMYxoHUNkdtxkFSTqqkZJxmTtRKBJ2mSC5onN87Zhh6dGWAofzSry"
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
