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
    "2Z78uvFR8xNYhXgo51TczQzNQpkjtXuymEr9asyJXghfZDfVhTY29GXbxGCppBH6rvSuiFnR4oZRZad8gtrjB3yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hsxWa1VzxeLNzy8ttkQWmMpab1233xgBGM9kM6ANLGpJYRH48b4wLb2WSzwMiSxQoVXjNDZ8HrjTN1f3EByPjPZ",
  "key1": "51XLyyeAMURTqN5EhtXy6AvKZGKphUUxcyu3eMDJo9wzEWCfkdW3XPuNGWzMXRFt7yuQTjMNTagzX7VHBacTeEVH",
  "key2": "2poQMYHX1E4fVMsWpoNZkgsW3UVRj9a2PPR2Dgdio3BCHRgaJhm9fhLY8wk5GMNEW3cmpXNA5s2PNWPz9BiKaCPT",
  "key3": "4zpyuXV67gLYp19EYysjCpxWW5Htoynx7dVQFzqXUTxsP6oAX9DCgaeK9bG9ZZM7hZzScr4gMu3qGfsEtv9sjhnB",
  "key4": "35L6NhsxbSEx2wXXveQvDjkrEA9TACPX2Jh2Nrtmmj3THESPKx41FXKicganXBfwLq6yL7DQrhgUZggeXKYEVhHR",
  "key5": "5UXpNbemkfyCSAwyTaCBnRzBm84dCSYZz1GmF66T6RaPfqdXVAVuiaDpWjV1Ke5wsmojVUgYU9J7ymZU4GqVC13S",
  "key6": "RaMk3v3yFm9211NUtjyLyEehaKM5itidc8Zg6v7EJxMzRBgxFzGnzdY5jt4fxZj3BQ22d2Gw9LWgvKTM7B5NXVg",
  "key7": "2V4VtsrJCwNcUYENhbjE3RpmpxisKdpcw9MJ71Nyt26nC3ozUp8HzQUWMRW9KHYsA8WMNFh6uMm1EFEB15m6GXy2",
  "key8": "54jzoJ1yVboKzpy4RrsiE6JcXVwvT5ZM7YKGjXBDiZ5XqBW5HPrieHRpwaSH1SzHYFUNfccLg4iDCdfmptsURg7t",
  "key9": "5efToheaSXgYKrENYxZnPEYZJPEkDib6YpWCB1gYSVazW66Xvw6XPoGNQpoUXqCqUusMQqhu9K1tzjABiQ1fikeo",
  "key10": "33yohXYVnyXrypDQekczojC8GUHxANVgydH99rC3ha2F1ZaBJQD1FfNBJP9xvkFCkA5rbjtnh2fLU5NyJGgdRYmo",
  "key11": "VpsoDxbkY9HrZgi8aa6JhxEsvyeQDiqSyR441Qouk3cqz9GmD2pYL9uHvAwX3iCn6hcCq7B2VbtVTLsQPcqXSFA",
  "key12": "4MsmqHgxu5r4w4ywCQRAyHwQRV36eoXSEYcJxWLod3gxSkCxGs1bueEi2DcQz9DXXJsaugKTNHN28ZjhwMCTZGu",
  "key13": "jPUP63WDQoRJfqNbF71vRrEghXKtx4VuirKEbLDbqzrAda52Dw9qA4jvg8vLTgsMcADztsPvM6ScebPAzb2pK2e",
  "key14": "4oZfAbkbBCaRX4uzpfDXTXDcCFBFxje6F2XVZV2RpWZAHX2RbwjXkpHiCaFmHGG3hf4xE7wWkKQyL5n758Cx5wtE",
  "key15": "4MrGC2uH6QMgaFKUcGj6Keoc9X5Xcnd4i5DayhStfCabqkvWLFHk1YG4ip5H1obUR19TNVYdtofEfTJpZpR31Dpn",
  "key16": "2wpf5NY3Fgvyv37CyyX5QU5iiz9jUQgihbNUMUvjUAWvFjc5EpZFae8hUGVoKBagGCHRrnQJCvKWN8j88gC2MPMc",
  "key17": "2F4Kxj8wHu1sqKMZr3xnKArPiQtKFcNrfG1sdGv96DdGnr85YCBRY3gTwkzVMozBGUkSURXExHPQ7P6AYH7E2dqr",
  "key18": "3UxyPjosCkamxoArETvAzPEydPorECmbMGd8p7jyECWocvNfmGFv33qa17NjrmKexfZWm2MUXBeq5YFhdPwqEzqN",
  "key19": "5BXf8wSDuWo9VULpQ237dpyoZy2RvusApnVAHPp8DXguxHNVaSno8UZaYrscTFeUiJAjNLpeYY4P8KdMqsCS8zSN",
  "key20": "4rzBoRSXnpRNU8ycZN7ku16q8u8tyx3XvnSvX2z3cHRN8NFg92PfVQzG2mRmojg9jyQsRsQLpZhP8ngNRNgHKEiJ",
  "key21": "5nFfnbMcaKzDPtGLL9gVmJwDthdtDEmCq8zC4fU4E4r4z15352wU9X33DyG1PGNxXN9Jugw9U2Wa9FqNLUC4eAAw",
  "key22": "5XpYdhQH6Ctajx6PZBuhjWwggEpFBtWRQo5thx3KSbHPNhJzRHgxoXeRxJwTh8Ly8W9WCCEKArnkudc6gjG5Ve8E",
  "key23": "3XEHQEQTQPA7GYzHgKSA1jmAY6rPK3DoBrNuw7jSFo2JBgiKgwBc9RGFrJYMfMPo8rPsk9mxht4w7P4mLXcovtzS",
  "key24": "QDF3nUS5YHBjCDzcv5gcxsmr5N3d5xXkXQhNMnzMxbejXXGtVUBcCTa7swCZiceqdxqa7wmeWbBReKNEYSn7go1",
  "key25": "4kgzZYiLahN1DKQTs8Cmw5BEyWMJMmN5xBGNsPBJCPA9CbVxKoDjUifoLz43fKTwLbmLpNg7qBnbkERFXTYmm8f9",
  "key26": "2fEAUEq2M2mJZDUtybKdTw5iWMfkbVdwi8bMPd2fbPRs9bC8jQvw3fF13Tetc3JfhANGZvhAvUkc3EkGL39r4MvJ"
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
