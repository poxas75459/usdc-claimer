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
    "4KKAUSzjAKtXsNERJTcpp9dSnhSKvL6sYZSnAJS9WtE4dkwGEsfmskAdJunL5VDPddoDLBKfx35HQmeV5EdQfLR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QLJdCMdehziUWV7iywXTZ4j1d5xfRbvyabuuc8DeHpFhktkaXAGB5JctUmaRf4ZN7E3axiSoXeNHCN1bsYZdoWe",
  "key1": "5LCwpVQFnevk91eUh7LqbA8gw2DejJhoA5sMHUmS5bQd3AK2Zu6JSVCWddN3cqrmKfPLhYPp2Ka9KYxQzBVnjVCZ",
  "key2": "2wNuf2qaowiqFUC5u8oEVH8gg33iJ1zzPJvcEbfykiysN9RX47s6j1oicYh7eGFdfSVXaXqDRPinANvtE3zEANWF",
  "key3": "2nStjA85dGXczG77pTxd22Tu4fZUkhe2t1CopMAskwHG7cW4bWv98mZPJ2UnLnzqS2y8wtfDKBQKEoFk3PqwzLLa",
  "key4": "5bMttTtxbf4Epo7XryU5tQDoyeb3V5gjCZbKjVLmZacpPHAwEdMgbErkcr6vdnjk5wXqb6CrhrzDZiUe7JUGLDxg",
  "key5": "66h8U2PRhiVw1N7j4CKLfLAuH3H2NAisbo41Q4ANNKCTWwxNAskQsZNczCrCysfTKGsKAetyVN4s6WAaCZm2oz6z",
  "key6": "42VkoNHeWAXXk4wopZJY54PD2Z5dVHQxYvyoZn4e8kKjjwKuKBUwrNUczDzVP7L5CDXC3QxXkWHrACyP1brwwjaa",
  "key7": "2FfZ4S1TSgjHsYBfnkm4yLapHyCjEttef4DvDLNDmY9ed8c3uvkMVZXKsDJsFBvA6648cWogLjVDGUr18sNFgK4C",
  "key8": "294AdSTdKNKeW5ev5HoLFNkNK4oZCayN3CSeTzhMPLVVYuij2z5pY7rkRHJyyKBKvJsyTrMtbVGroRnhdAd1p3e6",
  "key9": "2CVSmUDbRpxAN8TmZQPrzVd1PDk8EAQkuR6nVmx9KkFT1Uh82TuM4MEUmkuthoK1vuwawsFDMFaNp9sXEZxhtuhu",
  "key10": "25mAGbpfC5394oacv91yDf72rnS1rjVAhUfoWwFfYbhSQwCaDzduUwzeadBmY9PBH5PnAbzERmkGJgdfNK3WkCnQ",
  "key11": "xxvUMvxQKNgJ8LstKmGrrhey4RoGn85X5sBmj2AFNCuggxJKaXs8k8DLe2TiHFLBRS5DdwqYYy3vbi6DRh9H7hY",
  "key12": "3QxD5tJpj4pR6tSg7RwTH5tpCuH1xE2iGBfopnQRBaBzA7g4ebYggMNXYHgUvjNaM6eURYc4j6fV9hutYKSvXoMH",
  "key13": "ATqoZyiqscjskp1um7Gu1UEuKikzHcmdrsRMUpKgtMJ8gpnqKoUmPa4z7FRanripMKd5H1ZAp661W4hXtTNynsf",
  "key14": "4ZBys1bP7nKJttigWVFnTjKhbJGva7UwmMW5hzya17cbgkhNk41YLPgCFQG6hxScwZx4B8vvJkgQxJVAGVz4Xje3",
  "key15": "4mAebWfU437DnQbuqembSxGor9dkvX1C19fjAFBBkvViyMFhW2GLVuwqJCnPLKANk1PX4ZdCuKWr2m9H2zhQ4eFJ",
  "key16": "5QQ6MnEpw4zjcTfVTgxq2VoktwHjnyF6WgDrGmasHwzHuHDYW3ni9sFq1U67scZiB3JMDdS9aUhURRrsybPbWxSx",
  "key17": "4nYkSNidTXQSRAvsBdxj24WNCksmc8ebmbm1oXbWNmvLV3DLZEZxVtX1jmqcsEtjgWBgp6y2Dhu9zrvRx7SDUcJ",
  "key18": "422DLeTRkQ7gC6fkTkx6GkbJ5ZSPDcGygCKDFWSnPX6NceoRbLXb9KLE4jjDsftGhKb7B3ZsCSqvUe2JPqLmLU1N",
  "key19": "4w1tJRqECkCqXZbN6b5n9j3Fb9p1qGq1VebQunubNRZn8b2oAK4n2XJRnSerMSRdPcHeceFTve25BCXA3XJ9EiQG",
  "key20": "jm6BuUzy1aTSUCR6hao99H2Nxi1bzUNd37HjRjLG5zVStYDkTRKZd7KobpQrWeJp2Ezs3kMKRbWU4eUkPJTfweG",
  "key21": "uqcyBPokWfpvxYiyaNhb8s2e3fJqBr2wSZ7hmi7ZJUviHigbppChWcHLTBxSV7tw8ge578PM8zptqKz6wWs3YfR",
  "key22": "4mpfYs37Hf3oBnDKDuLqjuWfxZjNvSBEQn6wJuxFYBXnfAAy7dP22YktRCo9HrME77iRQqpokntKU15kB1Y9ZFRj",
  "key23": "4gdnHS1n1TtzQDZTq8SdPJqdc9k1oMfBHzPthiysp9o7gaitPXXtPH7PzQe9zWsivkvCTsiJDA1zN8wQZvc3th1K",
  "key24": "4GtiPhGotD3ZtmF3C7p92UxR1BPjEmf4KYupdQQ3xD2kuJWtezhNo9f45gvP5TcVCN57B9BB5FVrjeC1S4n9K28T",
  "key25": "3T2wN26T3hE77VDVn4ExKKDD8tkcepwXwtddaf9hdKcRsZwFJnXemZfWE8Pa65a74ZbTpYhYD6XRnLrNxagPKkJh",
  "key26": "3yGm1aQbnXf3dNaG79tZ9xUnyeCdvkCQypJKji9zqeCnEVgWGvcZXESYF9GAXoZ5pWKWi8Ctj8qepdVTEZDvaGqj",
  "key27": "4PpFbqcQS856bGEcZizEd3h99rctNTf8svekS2xLufLxzBda7rG6M5joMmFNni9A5aST6shNLxeyE1uNH5qw3WQW",
  "key28": "b6saiLbmwonYPqHARkx5e9XstFTwBnGquApe9rAaBd6HEjVtEQR7vYtNJqv665pxNxQMS2fDbWQSy7ShLuuy3if",
  "key29": "2d1JjcmNUkqNLhW2MT5UBQTem43Q16qSU6VqJfg1aNZjzGzA5w6e7Y7VoDP8yjzWYGpLTCjKzZCjH6kKbKyhPWJn",
  "key30": "2RvvmacSxzkwCLG8oBpMKNMRD6DW68iqciki6kLBoNnYuuoLZpRetJX1zeUMZGManPhypjcDRw8P9CYxgR5WPFsP",
  "key31": "5E91u2oqcDwB8xBo3WSw8AosQ3NZ3KaE3hCqWhdr6wfr4eKDia31qMkayFuRYCCeKdWZKowtAU511CxndmFXZXG6",
  "key32": "kTCuUZMVnZ4Ty4jjetEQDUiLY1Wbi1BMBwcmwHQ1KbUtw9ww6NfqtY8qYUMiQ6zUcGZWRkFjYWs4eVQzkN5Ebaj",
  "key33": "3kythSmSAFE9tisskTqD3yFyfxSLjc1ueqpv3XA4ctFbGSMPTscUfzdpJnQcFL39WSNtYPm1HQsHsyQYJX3eDDTA",
  "key34": "2KJfqKcTfWMXmWoDaGgzuGCG6YVUaCXHGUiaMPFfSNqzUpLwT6uWgwoPNC1Q72wdRBg4bgyf1VccL4N3Z4S6JCAq",
  "key35": "55V4X63if9yG64R8S7Ee5GoXwjuDJk4h3WeAABe4rcWbCbBjxZ7M5M3cPykYosrFbEM7H5eU2zZ9LhQ3G8HCcZqu",
  "key36": "2LdKsCvHavN4XTsp25jJMKyakxpYnqzWSwe8bfjGdRgfEYwPmSKsxzHndTpWhAtiHKQTdfo5ZFUiD3Q2GTu7nHMf",
  "key37": "2A6QvNzfZFT59FsyntXLatbHGQWwjnnvcAxjW7fngYjmHGkJFDP3T6DjFvh2BjuuaWcBgUMkYUGmHa8N8XDLTLAv",
  "key38": "3bNgLpCxMfSCJE6QaHhSZFnouyuFCfkTATVZERUbLBFawbqXdp12VSuukrrKY5jLE4pSWE4X6vg2XVBtZEFto2Bg",
  "key39": "4wgYHNLPDJ6q7VrvveZQTdhNSCj7hib8MKU9nqrzBjTtU8k33vqjLjxD5Tr7EzzAFktGJ7R6rD1VmCZHgXqBE8KP",
  "key40": "67NUdMKxYHEJ9yhK3dgTGZUrh1era435E9DLJUDZyQaGJf9qjW9kwkmNTBkf7gKhiLbu31mCrvndYNudijBd6N2m",
  "key41": "5bdUotLJemy88P2Ve6WNbki3txxWeYXTUPLFGaLSUWkAnLa6t97nFqbyenUpcvXFYUWwkmULpXwdX46hmoCe3VPk"
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
