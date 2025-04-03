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
    "42g3SqoFuukJVZiyae149eiy3HstzhEHSu1ZdLC8siREG3fnz3dQ7NTutfHqSSAki14Dp8bHG9aPk3Gt9DytDw2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "taTXVdWbKkU6sC5t1zqN3iLokyGMsoWwPbHLm4NmGeYXQ3YjDi7qndo4uZdZoYds7hAA69AmLzgH51X7nHigoBr",
  "key1": "3fSFhvimCLhLsTrmod215wCbxqQ9oN95NXsDFpNRQM7k2LFCo2fU4hvCBEVw2Y2fS4RDkb5SLwjrMPzTqEXsW6qu",
  "key2": "5sCYVCQGMMKMsfkCawaczirxiLvPzwiHsVWDmudjzQvn1kSsGdkdTjjaZqRCZvU4uuuyWBXuiGgAedawT3G9X5Vv",
  "key3": "4sKvNPTELEena3eH7JzGt1oAsMt3Kr6Ry2xhcNGpvrfqpyqVgAYDDyQD2xcDux23zNU8iTUtaYrgiKQ1SvZiBv88",
  "key4": "1fSqy9ZHEKB6866TzgoWMaqLZHLsvQHrYveJy4VzDTtLjur9ECa56CbFuoDBya2Tzhg9tqpovztTdHfWxKDA7xT",
  "key5": "3qtBRqorRrSGfBiqpMnfwfMQnqxJKXAREgLPPGbrEevH8Mm9zPi5DzaTFoLQGxd9TuquQXv24KqAeUkjnU3yiEvk",
  "key6": "52ixqqFQUasmhhZx2FbQZS8uYGWgVjQp6MgARAF2uzvuV9Aqp5ZDQWfnL6eYvYsr1ugyjsAPYpMUyDn145T5TLSY",
  "key7": "4kufiWhdryd4rcrNsx2shKM2QwrRddcTL3LxsLFux4DcxcaaakzfR53tWAgH2yD7sQS6XocKBDzZyCS67mtC7oby",
  "key8": "5CGtqe6KQiKwxx8pde8qYAemUfUb4RojCPk6kvGSRyCzxLXJGpW2qK7PtrNbLr5DtMerBtxPCCN6JckDogPFJx5C",
  "key9": "2QzGqew2PuHp9AVpUR1wkEYmceAGA2vUAyReBcJVi9WDZxR9Bbdyv97m2XJY1Z4nc2Yzeo2QNpbBerxXqXxPSL3d",
  "key10": "53T2qKdvDzM9km5zzA563qCrZL3pGVTQkCUHXsoWAzgsEKahaa194CSPLrGeQXUPTnw78w1ChcLdbdxAX2k52SNB",
  "key11": "4d7vc2ujgkxwDaAyCwDgTmhxjyydXHkQaMHGd4acN5yXck6u9cuAG7GEDPJ7XiFAobQtq9GvmMwFFYYUf313s1Az",
  "key12": "2PHkyxFmqC99VRw9aXh1TXD4XTeaKohG5RH4rx7jU5QhmXSKj3VzwypmrpeRLrEHWwmh3Pss1cQeXKCwBTRt7izE",
  "key13": "27JYrpQ5gCyPZ95TxTK3aCBhKByA21j69Y5R3HpeG3srttfc5JHGLmJeXfe4PFBzUXszZVpK6L6ucVhR7HqT3MrE",
  "key14": "2Bi9sFUozjmZYPDBf2GN3zAXDBGhxUXeYaA2zv2QpceKBtCGAo613Sq6LQZVhB2GcwDUsyeZm6aMtX6rzLcga6AE",
  "key15": "3vGcJHaqnfwvfBMnDYL7voUGkMC2WX5n7rBt5HDXFGUzSFpVShYFC5RPgk78ygVCUX5jBBATnBVA5YNQsbZPekHY",
  "key16": "5dmGSn81ZdDcajSD1QVdDnSzWzZY1zrxYxXS3xUiKk8Pfqv22mwDJ2CSXQTY5w7QNZGmq361zCPicjzQjtsEdNxu",
  "key17": "2fHBZ24vpZLRSKtDuc4Hwqn29V7iRjUD79qMuVTrS8Je2KbpCHiCktjahUB3i7fKKu42DdHaYJh5yVhqh5YhTbyK",
  "key18": "4e879EXBdfRfyyHeUEVBXAes6WNvxBpkvxma19fwgbc6x1fWrxf7uY72jC4JkVKtXimheKzXLT2P7XwZNWBsLXqH",
  "key19": "ybtwxxUStJnij8pMeb95TTJt6GZT1ZrfWz7wm6n9w4Bg3eGJy5Mw5yLx6Z2MpngMGExJaj8jwWqU8z5grxKrGnG",
  "key20": "2TSAb84pMCFqw6T316irb4PEFdyMMg2ajnJxq3Nk4iqVhgVNAzEWDWjEVGhAFu44HDoeUQ2nLABgz5m4kDB4JvYd",
  "key21": "636pwDcnknxrWBCj7Gmr15j5nzMvb21H8eK8zgmniPd9KUw6sjMXuMQ7DnP7hHkqy3rhUXpt76YTAjWJFXDv8mvB",
  "key22": "4YBqkm9ij5h29P9ryQ8LAxkhXw17bnZUyvkuDBxzv6kM69jfLepAvSDKW8z54omWVidSmwRZAtV7cccrfv538W3N",
  "key23": "5W3oT4UAM17J9YBdqthqiW7humKWibMrUPdCY9mwqLoT38WrwX5YSZnrmoKCEsGN7482AQGYRSHkcoz4davrx9uR",
  "key24": "3yz81QbuFomv8G9sd8AxGJSk5TJpVwyEfc8CZUBhuqaPhieXwLmpVDyz48RjgPCrLUR3o6ytXFbkBe9uCFVhSEpN"
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
