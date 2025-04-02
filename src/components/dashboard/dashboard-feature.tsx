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
    "4jYwDy5zW7HJX7AFiYhry8iST96VNwo2n8j93TTH7PsnT4F2Q88NAjgknxdkUownGpsF51E6XLrniCGYbhmKQB2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oe5BbH5wD29B4SpLV1BRDUpnVmXFApw2tr2yBQNsDd2DoCbXq7D2jN1NVUSFLC4hHh2YSpeyB3XoiaNFyCBVAu7",
  "key1": "m7J3L4zgqAozoAPbQDLs7GEANhsjzHUb9acKeFxyAzo2AG43zXnsKKQ9gDTqUAD8Jt3CGDnc4TWQLRjKcX1T1eB",
  "key2": "38UoGre6PsLfcAEBPxbocnVGe9CsaCtrpNRvnddMHTsgkbHHFDZXBbpNFgccvihRUxiBs7WpHXFJAGHB3o23fCp",
  "key3": "4QuLZcJk9iGjaodvp97UzHGtbf7FyJLTyanururoYzG1oE1gRfRm6tuhom77QeKcB8YVJoVn4Rb1VJFJJCeiGw8M",
  "key4": "3vy1Fzf1StYnREaquMwSLv2TvT4FcAkc6RhmXuz1SfX3gYERDhH9BfUeULjju22JhnDhkRRaDdNBq9dBYGW3wVyd",
  "key5": "4BX1CmsDJDXXxvRfBwwdBbHhimHEw3wSBBKsffdjeMXmKgVW5i6KpUYgUaXr4LssFdh3BhTZ8hjpzUnoNX8Fm6qa",
  "key6": "eQYA8AtE9kLWk3NsVA4ZiZQ2kAeW7mnCSDxTpzR6Dy9bfix6jzFwqQNpzJJkVrQ1GB4QstKHK5iaEMTqU54Mm5N",
  "key7": "4WDR4NGuaxydBSWn9wRzh9kuhMZ4y3yAYkefFkX3Saifk41mR43PMdfBtSExRpvSp4rFfY46SG3NTn4Hu3YocMZi",
  "key8": "4C1reLenm6QGxrY55VAPP2LUoPp7MjBfC8CWGwcEkcbzAXADfoaTKJU66Le8n9E7r7F37ANhGAVmjcYMyndgLYtn",
  "key9": "pEhm5k4ZKBP5u2fnfnWkinAkEaHKQ5hoA9SC969zNFs43HsNcV5FV5tQFhGEtMmWvmxXja5a8QncJQjX7NMczMB",
  "key10": "c6RyRjnAF36rBj2Ps7oeKemp4YM32fq96BNCDg2ikrgrUgzgE7pSZRPiVF15fBDpXCAo3oZvsrCBi6Whks7v1pd",
  "key11": "4ecTiwZZi2v1FBnTdfwM1Bx1g8kceFzXF3Qur9hTTzQ2XR2rJeuY5nQgs7gQDobP21NgYeNWAXML9Y6LZwnjQLYd",
  "key12": "5dj4RUBCBEqguaZmpiEysuWpawKfFBms23uDuvhpdqBcLFUD8FaejBLxVSe5dKV7rcuhzV4H4DnYeQ1nGEuMeFDP",
  "key13": "5m8ghrBNsoabK96b8TW3Qggtp2YCwjThya1MmFpWLsA6YWknVuoHupdykUdaPVKeFDhp2TQ1jUKqSvR6w4ewA7LJ",
  "key14": "38J4rtAwm5AFXjy9Wk9ZY2S3nM2okHWg4KZ62b1ZVgfySrHczdx8ZoUUFMEkDRTiqNpQpY2ycLv9VqUzKmRajbU3",
  "key15": "33eWnJgnocKQwpoCJ1DhHjC2yekztiXk1x3EXXp9FviYpMkTtc6oPzPMBqH17oB3cGfmpLJee5ffogPSkmQzAzFB",
  "key16": "22Pph79TK2ALLZf1mEHepj5FhwKz7bdg7Q16df5KCe1r3FzK2QA8ZHMBpWFu4MsbSU2fS4xjuWvtRM6cfMBiE2Ci",
  "key17": "T91PAbMpFcE6QT7yXAE24CJrxJ5PvoS5Vy9mkfCLbQG1EEknDcrNjs3MKYQy3Fx4yeTLG91wcYqf36cjk7i6A56",
  "key18": "MYyG23uqdK8NGLzfFm6EuSMcfJ4ZGDrNwzyF4MUMfzFbSz9TtaXTnGjHqKLsJs6mrwk1ntN2YgMyG6buJL4a5bA",
  "key19": "2xDcCUsAtJYRomSdCAUnBv2CA7bmMz2rnijdY9pxX4CXyjCUpuGHeSvoqeRYHfh6nQEgcsanT49cAEWkcbt5L3xj",
  "key20": "X6hVmdwzj2mEKnHh6Ycxzzdf3oK49c1NM6PLAn7uDXTVrsdmmUmUDwFnnR2JrsYPz5y8MS4Fe8btD4z9qHZuniA",
  "key21": "5p53negsJwrZSsgGbyR832kQrdnzhknMs8LpEDxfxGRZcktC1Xfi8nuyZpxafGBUB8no22kki8nNsRssMtxLXVgo",
  "key22": "2HnECTKJzo2C7wSe7pt8e4DDJFYz2tdE2ksWxcbb6PJxr2533ZiKvozY9twx9uKczDJzDdnJ1t6FVi7MCJcb15mK",
  "key23": "3bZLxVXGeebn1kDhQGAG948vrvkMGtLr6mEN7z3m1owQnK333ouAdKxHeR4UdwY7kG5792NzQSSkB4rN6CZkaUkr",
  "key24": "5tRzKwAmMnztn3peNspCWcS66ymJRMi6nJXNhqrG8qj8HN2Vz64eGYLnaSxd9xtaEa3uECspNgxVEcbGxi7C4GWR",
  "key25": "2yZdxF19GPPvP4j5HCryW588Sa9JabJRCDyF7xxgJkbptc3UXtYUiGrAcdXxA3iZURVHHNtWYxR1GSQY1iohwz2m",
  "key26": "p2wHAE32zDVui2vrzdRYxyAmjqtbTxkKUm4yaU6rCn4mo6Tqp4gmDyW9qVaoEMg7T8yPpSdwDKZZhRKHA9baiiL",
  "key27": "4ZUWCHESTqYf6AARypt5PJqkYcdvkSAzDNarTgsF23LaaVStzXXTioB54AWG9GCuycQ8isyKR8pbghvr55fzurpF"
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
