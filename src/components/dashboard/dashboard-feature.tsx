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
    "3pQXGPyPB3p4C4WjJS2gWTBZAFYa1kQnvYETz5ywTvCJ7TXrM6dCkbVZsFAVQwamwU9V8KzfDKsuPig6nK5oTJsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4TYqmmNNEs7ZGc3bwi1QDPv1mq9NPpqt972vsq2NGm4iJeUFxWj2eTCvqJsGkznykPHJuxsj2cTTt51Qd6YevY",
  "key1": "2jN5U2WnrbZ6vG1MAHQL51wfAmMbd6uG8ud9T8e613qUSkmgGyBz6WM5MKhkhpEQY3xFiqur1aMKuCMFfMrJDJg2",
  "key2": "5ndS39huChMgZkXbwxkgwVgd2zP7pzVZLN5VwHjkAkcQFWUi2hnkS3nQFuVhTtgfKhL9i2tVp6pWZqrCQC22KKFN",
  "key3": "5Q3LGns87sdxgDYRaW7ieEenueqwdfEVkerqBNhirpFxWjaGEyLpg2ZQFiv8Mt7wXJSCGyG2tSaMEkrMhgvPhLhE",
  "key4": "2fDCDKiCXexquHibywUUSpwD3p9jSXGsz6z16pCueXD2uY329NSmVYMWZU6d5KJB3USbzwLfwUVxz1fN5ynMcw4G",
  "key5": "5k46kpDnDmR49muJHK1xGVyt1RN5wB5JdaBtig37MKdPM28pVcDLN1xKkK97DFBbzkgqatk7DDewYHeeR3DWAMyA",
  "key6": "5sAG2xV9KPCu1ngxtzEnU5ZgTNpJ9jnkser6zuvg1bhUKzqs7Y3ttpGqsrH3GQbs3KoaaRKru1PPqY35rkt5o6Cn",
  "key7": "5je7WTzFA7hwVRb43oSX3bd9jHQBk6Ba1wfdCpkwTKxtPYrFuzmNBaQVWt37CRCHzuPq6JHbxXMmKYgeovB25VNu",
  "key8": "x2Av86psBosdNMFtSthZqL2R5FS5gt7iATLsucsuTt12Amp5M3udKLv8iY9TxhrUmEihQr3jf2tQaa3Zqr4mWhS",
  "key9": "2WtAANFuMryRkX8mS6MaSH1EEbaPMzv4akktJ1WiubTWUsxJCJdX4TYarujcSQCRin1D3jsXEb9k6UYWkTdZDcGS",
  "key10": "QW4axuXtYk9wC1vrhUniywnLwTZ4c3jVDCijgmycusPhvBeEYFcS6YYnL2rbsLqCxdN55j6X8pU3d6uFrc1kx9N",
  "key11": "2gXnpYUAaWDir9q5VtYddg61dfWb8uj7xuv8ziMpG7Tc6w5irJWEgSpzJfj8RxLbhKG15DEhdc9WpykTH56xVQ9c",
  "key12": "4Vimb4S9gDEaWFZ2egu9rzci7keF2Tk4SDa8J6BauTgNojRVELfUT1nppLpn63Xe8bXwpiiySaBhXUnaCMch1YRM",
  "key13": "49QwdXCzSErZQWKTjqoF5Dm9jj4MEuQi7QdyCCwo9d5YdxtGSed7kEWZHY2spTFAyMgUFg7V9HoYptrcp3Whb72e",
  "key14": "4WosZXqJ2QQ4frmvtdnchXpgETbmutEJxk28c7rTVpMnB5JA621uf5aKCWA84jNxFuyJFZuxH3WXuZ6n9fffq5Xz",
  "key15": "4S9VvwknFj8QTszf15n7wAiNZtaVrT3EKwJxVmfokmEGAuKrVpFGnqe8NBiftNe1jvycK2JdH9UiRry1emFg6mAd",
  "key16": "2WVYrc7pS1GEBvTzu4LHU1LfWi4x3hgaR2kgZSkKG5JzbwAVqXVjirK4sNg1dBWtGABLru8uc5PP4SAQ8fntWy6",
  "key17": "8QZ2EXtmprjrxWHC2NS1p1vecMp7WyWNWATqPvXi1vPKCt36UACBWPYRjxwXjqFL8NW3VzgeAa2jtq4rPYYW9oP",
  "key18": "32XvejZcDP9up9aKqBAiN4Pxk4PAPnKaeJwZDunjrgpMm2SpfeZeCrpvKWPTquNQSG3nQbXxoPJkhtfAs4V4EdGc",
  "key19": "33frGXh1QGQ9vDSw2sWPmtSVkVkjw7tH5da4NwBQJkhBungHSvxm5Je5ZjqkYn17NUK1ZwjNtWQXY4EpdVp5ayfM",
  "key20": "Atn5QG5MP912wg3Wup1PbirZzBnL5g4uErdam4wN5hQpej4dPB37R1BkaNgWd7dLz1TAuyhCermmrnadXt2Xfe4",
  "key21": "561uaKocUC7Trh7sDo4vD9c85Gvi9LuEeUToUsNnBRoHN1dRsQQHHuyoeAfTuNVX6rYdBVDL5GEVUjLhUNo19Q1u",
  "key22": "4rnSMvFRE2rFESyLbrdX1s88VMYpfDSayr3tLVy721odTvaKQEJWFU2Hpvu9pqP1oBwrHzL9z9iCMSzwheDQo1w",
  "key23": "WYQkawL4GRaM7AyiEEFZuEEVC73XSJAjVcm7SNzxXXkxJ1D5BaAuDRnZ81Y4PujWYNFxb6NynvzjDrgcbyGu8hW",
  "key24": "41EwRHzAPFefiqRmoW9wpn5f5NeeddYgCJULja2HAhZYnJByDpfWjuwQjdTQEhrtPQEQSZ3bMpByv8CCU6dkBJnj",
  "key25": "tc2fRKvLtZHKnrc2DjKUmCrR8bfeTF4DEWLg4jQy67NL9Tag6ytrzcSeqBHdUmbKqoYBtvgfbXexG9DRL8yebAP",
  "key26": "52jAG5pAMAP1chLjRaqfoTyjVwELbG4BkbicWGTQdmi624NFANDhsGhyHdUwZNEaeTSRUmzG68r2JDH7eSVbDYSm",
  "key27": "4T6yhU3AhXQqsqzT7da3RyLNv5tsWTTSRbvnhCY7KibTTGhvTx28L9sFGMrQLn2EiPrJCFG1etWNtn9Cm8ZYuAUG",
  "key28": "5xC9jZPmVwSoLyH4dEJ4XvfE27Wd79KVNVQeH5fZHZaXYtXnyskoFQFmR1dx4sMJUTE7FnTawxoLG6PpFAZvFvY6"
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
