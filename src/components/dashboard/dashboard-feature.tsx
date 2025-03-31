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
    "QBKEDeiSCV1N2fEXh9scqnZamJrTJPUwfPmVqBX3rgxJajFcXRsx4hnYjQBy1XYXQfozw61jtFmVGS1xRZa7nBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39zcsg1VeB3f63yadyczeKZtBNqcMnipMhHVGww2NL51854JHrezejmLSxQ8KBb3ye2GMEj1iRVNR83WGYJaEpDB",
  "key1": "5YzegM5XVyR3APXNnFoPzs6uQT8TePptmUobSANqL1uxKcQrHkDxwqD81szWGuQys7HcopRh5iH8jdDZ4NPUjVMZ",
  "key2": "4hJ9C8W9oggVaPHWTivQfzpM5q2hWRtdhvPBuxi2XLuWpi9Ma9k3UimNTHC97RkTKaw91vZdKWbjVTGwm2mTWipr",
  "key3": "3BcDXfi28mAQSEnAADvQkWTzFgP2UsFJQfddHKhiqVPvEmDuZucxYs81KLawVhngxGrRMSVmPQaq5cHcfP34ZAeQ",
  "key4": "56UvuTbBnGGu4VadHVtXpeBMTpfuV3xiHdZqjxy22z5VEWAr7bEdBrbCJm7WijF9T75caDhYC9Wtz4Sx1XKEzvAw",
  "key5": "PJnULmJDZwhnT1yD3v3eZRh7Hwn9HTyhupcgzjTySQkKJoyveVEtKBQJ2Dj9b4FnX99rC9rSXRi6wnjTWKXTMen",
  "key6": "2fLkehUUA82rr1PXktP64ARwW6aXveFe37tML12R9fhkKEX6v5qTXRGwDyYAxKiSXLBDBKKEzxbGrXA8r3QhmAU",
  "key7": "9x5NwzWWX3aD8T8npVMF5dQJ8G9biaArGYYbVG3CCJ2838PvrTYef5cTjDu3YfdJYjd5TXD7CtP4JKkhKbJF8gR",
  "key8": "5WcjA3YGzo3RFeYF8hHHN6DZuACWs9uSKuzDA5juf34Tr2NnrypLhbMwMZEvFrrrGgdpmXCEDxsdpihZrhEe9wok",
  "key9": "4KYTq2ryKbL949mAnzB3zHRV1YVM8tGeDrRFvsq3rCj1r5qCoKj3dDWjVPRm5p3X6xh7abS7y34qgJPZro1w2JzB",
  "key10": "4FSPds1k8uq9ppu8dvpUKgVPSxAExDZBq354WSu9A3SDy6NuAecH7paNF4mh1yN6TNWiL8vSN4aaxQUUSVPPT3QR",
  "key11": "tbLYBu999Eew2nDMsCfJaAafoBo1yiuc9xgKvuEc3FbEjmTa9G8JAZ9mgLcRk5ucyVawpyg5ZAtnHcTtyouP8UR",
  "key12": "2jfbfNHigWfbVuiZvYMo3Pz5WcTzosPUWymCEELcZvNFvKyoqPDy8dSoDgjhSJUJW9ziNBeS9YVPDuybvCJP7UHm",
  "key13": "31J7xv87YxzrvBsPdLiuThpy3usb5pRUDzy5P4b8BFPLqanmtcNZchWF5krL77BwkAc3jr3pfwWnzpUJKa5r5y4G",
  "key14": "4dGCq4yCgZREyxgJHw7DDSPPLNDipdvTSfNMd9t474fgRJ93R5XuC7AwwaEgPzkLRf1pbzrUNgXofQJRBhE1Uk9c",
  "key15": "2F5mTLAUYRn56tPXYj4FhhSeF3rBAmtezqrzRXbkyFwvot9oqi68W4abgoZUTfmxd28qkT3v95n4crFrSQFSWVXu",
  "key16": "63516DAPAWYvTqf8g2dyEDQCqD3sbAPnthwzdPLiv8EWK8QynrC9cnUKfiKxJzDUnz5Q6nM15bjY8JKqQm79ZmYh",
  "key17": "3gw2W7snVT4L5JtFivFSz67DbrnBqFZ3UvsDniSyy3oTiyT8A7c1s27ScXoTr4B9mi38jtf9BU3NzvJcSDSAWKak",
  "key18": "sBQtFRSBXQ5C5jKr8Pr3brWZZYijonfYcN5kmd9dSBVKZa5XphNV7LAYkLszYisx3P8QzQh9VbMryR5aokrZvis",
  "key19": "u3H8FgzrzLR6HsiSbjfT5yEfEcxeEhM9vpKDN3hpBu4iHXbv4Ty9HykQXP2pizGA1zHaorUyqWwKN3VRCXzE51F",
  "key20": "3a4kzf3sGsidp5kgvwFBs62iENoziL8FUai2cmD3B6k97zwMczUDHDwozf7Q7BUNpd8dR2wSFfym99ZFLWmQJgAS",
  "key21": "4wQyRt4KPNr1ftsY4QpSnBorRsMa8YxF47qKJZVfGdFkb4qKYT1AB3TEcqSg49yivbmdmW96tnxLP63x1tm9eGXd",
  "key22": "5HjTB2yxntGbE2oWqvGi4M5MZZHgbbu8iMyhD4EeK1deU8hJ2P4ffA1wfjSyYyEenTtAc2QKRc6ouTPHayCrRyp7",
  "key23": "Czfj4JmCFtx2BUNTsxGmH9UJThUBCEnNfUfnLveDkQQQfRCjv7jEZ7yFXeHwkVoZywZMDEBuXV9Y4ZBiYczFB8e",
  "key24": "5Xe9TKW1m3PNm2VXBr1ww8xo18URzKZG97EQQovCQvLEPeobnMaHA4ivqy95ZjFsBdChLBVatEaYmfaqEphkccAN",
  "key25": "5vX62YGNeqJ3jmrkJ37xjDxnnqS7crjTpivq6Sj9QPciPH1KyUtZ9Qw4nSJyAR89RLhoSDJuJDDtFXrrFPaD4n6x",
  "key26": "53iDhWEZxHgxMfBAzyzyjeKBDnbQxwadCy4XcTR4GfmTtRkUdfM63j4PCd8AEe6HAVjGDNCq7M5T3rLmEJ9EPnL9",
  "key27": "2Pru9UcZivyAYeYRPB8Hiou9M1F2UPNkYwgPPdMweHq8s5h7bTA3Ckg2sSL5D1QSfjCZfjQmXr6qHL1y9Zmz7bAX"
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
