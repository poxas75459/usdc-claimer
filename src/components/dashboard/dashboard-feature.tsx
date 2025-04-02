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
    "37qULk2ibQuGNXagtXfzTQeMxGm6FPsPpHEQ8uQFRNLDfxDaNyBs9uydoPdeNh15PzRBVtHdPdKZSvxR6ngeAynh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQNeT6Y7RT5ovSRQ3ou62PPncGseKRKtQLQeCVHQHcuPFvMRNQU52nRUtLka62NusSf1oJpEeF6DWcba3xVHxWA",
  "key1": "5eKBvas4bwaKqZoPPwEjTeCVHW1ZshAWSeKeB99cFMMwJ7hXhoZMbQYhprHekbSjRTybLEac551m2g85GzyiLWcg",
  "key2": "387ppPKeNJZ7rJ2yycit62sLhBDTd46cHExLgmdkeARq6QxCySdMa1WCz4Bntek1Ym54yMZKc3nuK2xifxczpDTn",
  "key3": "5xBaF91szrdMegG1bKgtLx6ofP7nAExSGqWqkjgeS59q1mNf3yo74WRebKLR1zXAomXyo8MKkrYjHQ93NWH9u8KD",
  "key4": "5Qy5VTD7znJwg9GDEM4Df4YDJoMa9ZpQyc8JphPou3Z8fMGG7Bu76SiqipKDVVEfSaX4Jyh9GpeizMtUnCnhiN1R",
  "key5": "216ZoJCSN2cCd6EAD2tgFdQVw5vefdQcxULzs4UcRDVbYJHzGB2La46NoLpsRdYKfBJq2AQSo5M4fS85U6xzGFDZ",
  "key6": "FWEreTQ8qW7DQGnHnoSeNY8SKZV3ioWgjt3CD5T5bNM1XKub2Ss2J263fxW2LFUgYFZ6hDm5JUFFdorNjeBYk22",
  "key7": "5CPWiJvhZsiv7sV5cV9gW57QBTN6k8Cdb5ffdLv41ZHvz6ZL9h8HDyT14D2SBAvmYCuqdjwDSBNd5t9ZEmzjGn3z",
  "key8": "4PPSAYtGMYL6R2XyMFa77drRPvaxCKqE7pwxwGvgBqj3bBysxRncG54JaCVSR6EEXshrumpHz7EhtZjupFg4fSMK",
  "key9": "W32VMAFcR7qZgHtxghcim58SusKMXujkjJjHz1fQ9i9Yvt4G5rYt76tze3obDYNfQiKyg9mZdiioiL8kxNSCstX",
  "key10": "4dhH4XSZkUkdLKFiYamSwwooKQAGyDajvKfYu5kvkj9WEnCUzg3pR9zSwRbWsqATMxMrx9KJhvDRjem2waNZWe5k",
  "key11": "4Tb4GoYPgCj8iWRceBNgCmEkzRYc7BHGYB4dEq4ZvqhkMtJgn59ptbebYC43bYwew43i9HMYwzWTsQpfsxPMJG5A",
  "key12": "273R2xpJNk9Pxg7h4joHt4HGuNVkMGFCm2k3ruSMAJGpcUi8jDU7fYirpVEmdpMY1wbGnLKdUSSPfCSgd4Tjz5h6",
  "key13": "4U33AKNyaoNpHzvbygqbe2R9j9h9gp7AgtKGYquRY2FFqpXBJDne4d64qoRshQJQNagobBzAuVvNYddXc5ZVLwvw",
  "key14": "XPddzPT62AJ7uSU6vjc5MQZjgV2wt8B5QkqryaDjt8uj8Ej91ryMybCS9VXGYeodUgQuXoZYWyPdKnwMqZeeXhG",
  "key15": "5tpHovtZjhRMMZnqzLnomRiNr1SwGuSKt4gmzUkwo9HJBQRniw5YefyLW9aLH3769MA3boCGfPpvB5YQ3Be35PZH",
  "key16": "2fE9HM7bDm8GDnhdpa45qkGukEt3q7emHwzrw3fwkFwyPXDAvJQmFe4BVYDXhXYNoZjqEH6duUbSL7FRuWFtjsaP",
  "key17": "67NiJV6B5ATBWdYY3zEneNwvctZMLJhLHaVW9ZxabV5PXydmLiGoUUjxJiUNwvZERaavvYWbmmGoToog8trgAVYX",
  "key18": "3KWYbikjdLWsaxb3HAAMoQX7u7xuxQ2DY6d16VCz9RfxEwtrn4xnh5C8chPrm9LMPHo119XfSQhg1fAayUNgyEAY",
  "key19": "4y2JyHR2DWDgoMRQ3sC43yF6UrDwPiGTHuBn2X9sewe72U7FQeNWtUjWVkm3zkUg4LoN3FkfnrNvNnqfDR2hadc5",
  "key20": "2T6sEr46oohcTUmy63UHQMs7j1BUe1kz9NPqVo67e9wjHpuksb58RkRcwWKbi8sxgnMPiRzGXnchshsNzEEjNNXE",
  "key21": "5Y7TFF4cBKbqMHnbkGx5wifZzNcNZVwAnroQuwQs7Kkqr3H17oxUTFXVNKVLg9eABL8qGPmMxxQDN8tZKa7KLzgD",
  "key22": "3bvLY91unDunSNqktnK3yB16Tf2QoCGQ7nJsb3b9FsmwsA5em4zLZoffH6Qj28uMeq4wMJusyMv5nBvX6AgDYQ1S",
  "key23": "36355gmiFhQGpaKz6fVRoHYgZc3PKD1s7a7doXJ2ojc7hgF1PFJv8YjPU71kJHgxfDEo2dbQQNa1bm6cEd6K2wnz",
  "key24": "RoWpBh1qehueoicA9AdcDFhghd9b9sMkHFYGyiDTwkprNGENNHcsT4qk1WbKRGu5p1MgN7RbaBBidG5R1UTz3n7",
  "key25": "3dxT7mFHK2P5gggrNCDtjuHXRgvmkrHNFRTscbeZqNo99RiP2F7o56dYLzXLGAz3SY8w68xmsKJaNTqaUNouaaCS",
  "key26": "5Cw7FHhxbQ6v9KcRJhqxaTe8AUeuufYVkDiAUWUPMkBcKxdwPeDAiANvm8M8ZojdzvV9YZCqJ4oe2RaoLP3b5PXu",
  "key27": "2Nuv3gPf7cVTVro52BoiZvtm6Qa3qtFTMdfkRVbMsQJ2AvJdjehbR52V6G9zDGopsYwUfkhQZGASDDu9dcUZwBrh",
  "key28": "5iywhes8wU5bw1v81vWViZTGDQ9Mu326mjbXXUGC3bRVhs1UjLtbLvpA7yVnWBtyEpvUJJikWn28nd2SvkJjKmNt",
  "key29": "57j12yrT8bFLNri5Uumav3ozmPfGKF15dRfTfiyukjG79f82CUAuQkW1kisffKNmuYvehZ9upHqXR8hXhjm4uFWF",
  "key30": "5uxAzb5zEadNS9YVGsBbhzGftep9x97NgfP4MxdSCzpUipdrsehc9PHp5qvfjTwWHRwrmgv6SwoitizYLFuDSLzZ",
  "key31": "5Vi69rKuNkhzTRTNeXa5qXMgoksqy6MqzBLxT3dRTiU9xiQHXMcg2xPe6AUbjTddS4PPNgjiYqUytd5ddnvKJN3B",
  "key32": "52txwhyXkSoSx9ytfQaKuyjrsLEPendZHjMmKLue4CjQJkw4jrjSiBe5hjfpSDxaSqAxoepSgEVa4Cfz6ErhKz7d",
  "key33": "4vYkFkzPWharrmWWK4SWH64Z6iTc2SfXTM31QxbiRgjmXQ19M8vqE5KeuSg2Rbn8uncKgZJz5qLrjxGeGKikuWyn",
  "key34": "5mSrGeCZ2pskm9oXHUaAEYzXQACz8q3qtBps8QyJbjRhL6YMWUTfjccZLH3CjYHJwsMYRvytSsmEYs7WqjseCoSw",
  "key35": "3di5BYA28QafJCoVAyACFu6P215fR5DkbFcyGN7vkF8zDzpnus1rDVjWPsfGxYUZvjmV7DxGaSiPuBTBUuMYoxkz",
  "key36": "2ZUhaa2qSWD2ZzjsxzCzB35qEHNEsny8im8qkYvJCTJDAk15phDnbWSAuF7CTgnfGQ3yCYQUWimQpeDWjQPjbaMt",
  "key37": "5AM5GWeTQv9X7WoNvz2FrxomGYzv4CJtrVHBuRSWLzKU843GyQY3C5ez3nxhPAvVixdhdn3aDgLdZLa6JWtvim7s",
  "key38": "WbqTfLtSXaDEDJSr8QincE6PiYcYdGviARpwETDRqgNLpFpojoFy838wkDtnzgDqipTjceSJNG32z3pmH5FL7rV",
  "key39": "ZDobTSoM4VEJUda2Z6fnjVoYncRBXG6bPNYa67HEa55SGngiUWqXopnHzvzHXNJfyM4Uov5eFBrD13Jza9W42GA"
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
