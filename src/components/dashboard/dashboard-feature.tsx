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
    "4Lefz3wp8TaZsgUS2cXY1DLKdXj8KunxzMicUYbjAUAwLtKsbvHJ4czwhBsHCdCcUrQot3fMdTDhvTLZVP4dKoGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eY9VwKN6nNW4W2iWz6TSWYYoy1XVwjB9smr1iRGgD9pPdxJAngYWnKX8a1FkBCN9wQyAepANZKFC8QMsQ7QnhTo",
  "key1": "55LUUxjcmvJe8uC4gzS6Vixs3R8F34x3q7Muf2drjvMv86veYLym4HWcDqM2i4wjZ7AkJrt3p21XC9fVVX4af5mg",
  "key2": "zwQZzt8TSAq32nyeY6oSxKF6Wry8LbgAQt9PZGvEKWsstMTPGsUjhuzhxQRKrJHNCikJaCxjDhSH6TNcg7fn8Lf",
  "key3": "3LgFRqoVQfRmRu8iPGXWv5ZJEqqV7fZrCnD6RxLpr2o5zNPRPZsMdTop1QWoMzjnE9qSnCytzZig8Q99BSRKAHA5",
  "key4": "5ibaQwd6rWkmy2U895Nweb7Q92QYhUSmZi71GKoHnxx15dPDrSTsByaMAwPVDeggpJJrkbXQRYvZnZP5SMhLt7Uc",
  "key5": "4PnK8QKAVKsjKY8f2itn7Ct8tkrBkXm4ixRTPnFjSkU2MryaXPwrd1oDhBBEg99G8kiT57oTgYKNv6dT7Mv6xjcp",
  "key6": "4MYMRCrM5fosnpYNve1Jb8xqeCcU9xtaL2GvedyzAcRWQW5hvnFug2qhF51269futrH7ebBDz9KJzxHZKx1vm2Jo",
  "key7": "4NN4j5a7c5P3Bz7mtPLUuNYu7wpa9HtnkNPzVBrpQ2PoTbg3aH4CXvwbaEEASvWPbBjzG7z6AUBRVn684Vr3wMBn",
  "key8": "54KGxr5jikFnjAzsbbFfWzW5wBEmGtWtk91zPRtEShV8MpHuUPxdzjzLzZaNvTyRHWbXX6x6RG6LPttXhWaEBoS2",
  "key9": "27Sn2nnSMER2A26Jj85j8ncqNgVRUdtNU6SZ16T2g18vpWga8rXbBQTqKdF2BzdC5G2BF2BgUiiFuLkPT9vD1e6q",
  "key10": "4DPZxZh9dkNvGi3iB49iDsZmU3wRCNebeL7JFNVvjZgQi9xTf3DKJRM549dGyEnuPMmrU8Fd48f8qtj9h9KQKxLd",
  "key11": "RjN8tedRqWbk64fAWEdctHxX9mXi6A9U7x76PjbJy8syUfPYqN1JPBrPXnT2KQa87uGwmYmVSzQ1CtMbQMo6yBK",
  "key12": "PvubjS7aURzkmryrhrBWq26p11jX4VnrgnRmrid3edHsC2ZqPg1yZaB4xhxJc34Y6HrWgC3gEGXZkD3M2HcZybX",
  "key13": "8Wf16YoY5EDjkPYVgmos3nrvLEHtxWRPCA48XCTYtrkZ9ucRHUDWGhuoL1jKuYcZrUnMUbWbF1QCdqLgtoEHp4a",
  "key14": "25mrEhq7znBw8N2UvHxtf6fKuASvqvGizaw8xknGhreMD9YwdS5to3Si178MGCdNRBquoUaBGwxEymV7BJFU1EMh",
  "key15": "65hAa8Z44X9DezxFtkHNb28H53f1Mc6tBBoSMjhUEyza84yt4yyJstYCrgtR3sLCnndzKGdfMU3wZv6tehQ6pnbk",
  "key16": "4nW7qaQK5nxyFQB1AoafCUSUidB5pAcAPV4JECA3Zudj3v86FVzsoJAXhUyTSZS5t8ioE5hNzVECFM8NndkKXrNg",
  "key17": "4WBn15HEsXdzCB8d2iMbfsVLSVewmmQtjTJLVXpY1Z3oC65G4cszhizRSCNDtjhXWV1fCETvbv2Z9UTw2iToY978",
  "key18": "2Ay3TGY8U2RSbPEXDiPVRwEMSooAfrfTKpTCy8Ko43FwP5tSTNCHW4t7BzsNy2PbbtEU1QBtMaeXa17uTgGKH6wz",
  "key19": "4sTE5A9UTjLPVkr1LR2ounYgGb2m4YRjUb5EgzHu57RJruTdQHY6YSS5dd71kC3dh6YyetiAb4XdcsfBVf2vZJdu",
  "key20": "4u9qQPtDftxtPeQgGeDk2A494eQPD2PDtRzef5XEhevBfQXy6FqNUmWW3GDZ5GpUSC3Yqh72QqR5L2aSDbaDbo9u",
  "key21": "4h4Vdtd3EEzgdP7CEkZuXqgeFVwNRCKKDwreNqTexrNKzkk9AHZpVbqLzYgnpLNrhyZgxSG8Rys6ui2Y6pS7NnNJ",
  "key22": "4B3NK6ToxwGcVTLXUPo32ekZqs1hWg56QvK1Pw19h9kHYYNM6MgxEPGz6GMYpWYYvTpvZh4KypU5WXu2ZLctKMSb",
  "key23": "3C8VEfzmr4KmyxA4Ko3ncYUnG6RoFe9Pn16KDurPwvqhpkUhKMtsKtBSoCkGNzb8U9EzKaTQZ7KvLngYmXoj64jt",
  "key24": "5omDhn1SS373QnUahhbbjm8FUeFXub9zq2jCcnR74qw6CVqm9EzZcpH6h4hAW5VitiDV8XDUSDtP1EAWEbPtDw2K"
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
