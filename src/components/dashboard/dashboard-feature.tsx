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
    "2WSgfKMod7q5LTbC6EBDq8woB9p1z1dTamriTcK3wjNHLxBVEkEoLqCnjK7iZDbwFoCSxDoYm4NxuLA2zYtfr1Yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2inxTLuNim8Yd1haZPajmf5CgruCBEaV328gs6KeXVLjzjox3VUDsUKcgimNetHtt98zJMipkqHMsEUx74QYr4RF",
  "key1": "4cTpyBRvE9w5yRShXgP9vynezje85Mnsh5Eev5Z6wBwwbQbNz1gnCMxzK9fhV57McQD9dfRkzYWMHn3dkiwErA54",
  "key2": "4PCpGMG1p5deHmt6D79UVncwQ1vdhbPtayTmf1Ysm87spTWQWGdWJkJqGnE2wUs7vP3JYPYLYn18DpVwy3x44B4N",
  "key3": "2CyVALreJWQ1ySTCCrvwRnXuphQnDbQkDJFhdHC9bPGk5k72m9Wyf2KnYua7ofzzR69hvnFFupjtyuL6zVigp2Bg",
  "key4": "kFrEc17wxoMaVKTRKX3cS8HRa8FTr8fUg4gTJ8QCt9xTxZDBD1pUH5sXoPDv2MHnLRxHAFA8WSgbTRXnP9jBpv8",
  "key5": "38ScP2Bp9qjK6TEJ6oWT6ZFD6jrt44EjqUK82cNDh6APpqgny1Y9t8Ka2Q9FtuvHbcBEG1BPjW4ZRH8d9VrZLLuz",
  "key6": "SyNqfR3vmC9gF5i3WH123Adev57MnVBLFAKdzHRm2KEAdy3K4cwzFVcm7bsJjTEEuPNTHkBxaGcebZj8rgFMgk4",
  "key7": "Wm7QNshB3fHG2uEv4Zi3ypMEfYiwmtUMySiGMQN8fciVKLFmxeNr9JsYtSRH3HrsxJ77zFy4LNR6mewR7FYfAsT",
  "key8": "t8Qxwsaqz1M3CkEgYdJuGXTajTEMX7Z6SRU6CRXc8Vm4nne334FikaVyucTFadHHkgCQ874qWrEiGYDeCYrPpU2",
  "key9": "yCFfRmwjAWDq158MnxH8SNDbBa5M56Fod7jSvJzoZz2wVjhXZEpR1XfY6N1p7RmwMFi8Y3sKAnbpTp7qYq5dBmH",
  "key10": "5FuSAKsxu8vrhLWarM5eBi1WBn5VSSsBvveoXf2E8kU4Au72bCZFgQYzP7BH91bpANg7UopULDyn6Yzx7eNvtjg1",
  "key11": "64faom3LkwvCwaRWAMd1v48ESjHnWNCVtPfVKY8GruFqCSuwizGz9DxJBaHhQ9iQJxy3jD9xV72EJceK4Mo19nnb",
  "key12": "PNpF1KrRiinGCFENBVZJV5Jx6h1cK3YX14oVoACCQcmooHFHp5vDK2EAkNrfVKKB9zf8G7KPTBp7wbYDFJnuhrJ",
  "key13": "5aLKGMQk4AReZLes6vxWxvY3c5roB1jcf8Z5sTJEsMVfcUaeFnrZJy8YqgfhrbFUMDGKpC9hEEPg3wCurCwT1xbt",
  "key14": "5qsmqE9NuRWs9UuuPkzx1Ttiz8uLB8TZYsekXijcapJ3rNwcGdf8opcg3KUS2HAYeyTBHGWCRvoFdPLunSVkGzBL",
  "key15": "aGcePjgE5RxFGn2E5ZJNUSKwLukrWSBRWsrW5NDTKR11pFmTfLTceMGGX2StBchqJRHnKSDMyd5DogKYPBJHTrn",
  "key16": "5qvSo4Qmeek9QmicQDEEXco8Z6SJRKVhESEGVdMbDMXEw4oDYK2gyYHrmXgWXvf5jdZRUYnAqxTvu6JJRgXF6xPK",
  "key17": "5MF9JKuFi5oev2qwAhNf9NS6tJYYZRKt1UsVi4QGz71DWYxstyoKxF1r35NMREbvS96oZ7cnzMFiyMsygCAkHC83",
  "key18": "3BKwaGvFBPWex6n4c5WaLn9vVnYPbzwcR6ceZ2Gmxa2Ux8gJfX6T4PK58UsGV45PkbifFdhKGWkXSZEmtDffiin4",
  "key19": "2URX2pnHwsKSVY5rDkdWbQ6sRHZ7QLFMHdtSuSS9tGaFK5VqUbXryEcUReg7tunEwSJRB6m8PZPXQyWaWFV26Wss",
  "key20": "5AuieiKsFUam4SAcXnshLA4JNQq26gDu9sfmu9j8ZpkpKHUCUkkFBbm9iTWHmWbkH7aXyLCGP6oKcLc8f4PoVSpj",
  "key21": "3YTfCrWJMdH1hZDviDd6AqjpGpRzbEAxKUp9ciXQ1yfodMKqpxCKCmdcwDqq27Qk9U9BbyJk2rpmwEWrfsv4MkYp",
  "key22": "2xpWxq2csifrwx2pRZjTya7hNwqbPhaMaMG3pLeDw9kFesK29iKP5qKzxtLgjFpPZBbdyz64EZejGiwoeHTzWg7A",
  "key23": "35Y4tqBf2DWcLTnTuMzXQPeJiuqeHsVqL8wyQrAvj95LRi1xvW2cvjB28PcnaHLg92vu285UXvWZo6q7zrRtTg6v",
  "key24": "4ARsumaSxstRA6u8muLL2266CfBA77wm6x1yhBpgXJd7kgP2KrFeF6kvxiyokKJksBRoaaX71F6LwRkCR6BgLTaP",
  "key25": "45Q2aeAPuAnaHZ8L7icyzhRJWc1mKSYpyHN5UTMYfMkjr2PgQr4hDBGNSuqS5d2LGiRWwZLWJTsohpF7YYzDxmDc"
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
