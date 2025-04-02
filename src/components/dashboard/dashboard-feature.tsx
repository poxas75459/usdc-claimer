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
    "3vbNVZgHcHpiq3qhrSNhaPC2DcSyoMrUJQ583zE2xTBgN6YCFbLmqfnFuF9KignVWjDARVL7NrAAbSr4CaRgkvh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QV7xpJFPweR6mTCfxK8nzxSCbfjTpR6bcZTKSe6JZcYhxSmoZrnhAMEWn5STRDQYvFBYsUyxe5Ax9tb6sFQL2LZ",
  "key1": "44QdbXr6kjtLGcsJbZzZGfPmPSRYoytuVuq4XUZbent1qHki9cHnT86UpiJtZZ3dLzj45Gwb1kUDEKFaZYCaTjF3",
  "key2": "54HDeQJxLuTCQ3ocFgnnLgDuLKuQF4sPbgZZ1UHaCWQfnokvi2gsbteCjFU1opcbM3rVLW8g1Mi9MXpT9DnfX1Qo",
  "key3": "4nea4R23BnEFhGKwKJgeF7hXQq4EWHHxigkdTZmgqZYiFHK73FphWKznpCwwATzbwiycbqxqW76jvrv3vAyL4Pxc",
  "key4": "3z4FgATBVwbsDqDCSG4dnhuhRm9wtrp5xC9P15jR3VxG9XHPnTK4UfMy99TAaEEuHtZ4Dc1UBq5d4wGQQzQXiktz",
  "key5": "kfqTkVFWYTiW1MLjE5HV5XenzFo3BATyfG2LGYUxCMr55LYt3vEBhzyZXhRUcuxsxdzsfJH9FYPJdScjaCiH9eY",
  "key6": "8GMafMzBMJaaexEbwNV5iJvho2y1CxKUVBnAG837jbXvCi9oYk8xcAEJ2jWshBPoV7Wkc1rBoQdBKRCUJWxLwQo",
  "key7": "2MJVUezDgDUKouobtHdRcjh5FFFrj1nSF4BPzJPNGKPmuVBTuAPwZFJtPxozZ8M9snX4JadUwTtrcM6kwEdijRJQ",
  "key8": "2KsqYMibHUuYNfWbmChiQtMtPVHXWi61zrNcn4UMukPv17Esn4FUoTPcmJhuFRf6npacW89Kks2Fb7SJkjCZmHdL",
  "key9": "566oh4c81cZcoEhp6Ke1wzGLzQrNdLYWpahB1GQsQZjaDvkkUZrKDePC9y9yr5ekUppwhicoExXQQPcWC8ey7sMC",
  "key10": "5ob43cS2kaN29Xc2VCC5knbGo2v4Krq5YQkQz1reSjfhLcHUTB6Qki4KAEpyUfSTzW46hsNRuovARjWZtmJ5n5Mf",
  "key11": "2N7Nb7jjc5eBoTCBoLNoboYnUEh8VH1CnWkyWoHc36TSYAwYD4Ab3hdtUMmqTzTain5VxmBEidp6jVAwtY3vBzrk",
  "key12": "49E8BeGw1cquKAa1ai1aD1vENXpP1rqCTXSAHMnwGWUcdkHfPtbyAxvSr8ka77G2xVrPiNQAnvivBVHh5CnKrFbg",
  "key13": "47NGQ3mARRqkDQa7XVrW38FhoNsmNsv5JnCs3aNjuQqxaqTbk6soZHA4gYMWDtF9ZcS8g7xNFmBqntgCXryCnGQm",
  "key14": "34RxLJJQsB1pefAXxgNXJci44xetkhiKYx6nhyMiBLBLx3gq9f59RW5rKUd7QtCiJC78UPzXAxbGuXbebtKhoBp6",
  "key15": "5tNQgvkuGvDWhFzxK56RSjR6z98KbpW2meexHhNV6ZK6PjjTCWGCo6ecM7ywLS2rfgMgoraTRAs4otmtoVKtoByZ",
  "key16": "3YRjo62hVrTD1cRatZFE8ZynpT1drfZ9NZ1vVudqxpK7anhg4diduoJdoAihAs3Knieb2SWYD8xLVo4m48tPoFJC",
  "key17": "5Xj7FoHSfiCU4GhjGPHm5fU81gWqUe21Mxsd667s3sGPByRP7Jg3nrRPhXNCPGtsXBj3WxzwsL3He5SumcpEzGm4",
  "key18": "3Zuyi74RdXHMFr8QAH4qZoTxtU3oars8advxw9iNq5s5HvqopcrHqvy9p5tqJkEmS7odKxDADkpYBs3qvHGdTRfa",
  "key19": "5asrcYqQ5czpiqfw8Wgw6p3Qnp26yvGMqtTUJf6PvL842KDqNSurTrYkpx6Zd982FbsXsqc5TezwVinypNbTBusC",
  "key20": "4jrzHoDUhfnCNdoNsFcBYzdG2dCBz9u73AoF3a37KKrBL8hfkerPexHiQtnPLmxNidBzSP4q5pBPYMTsWhdCoxyd",
  "key21": "5Rf3MEn5X1yu3pKE5TDqhxg3rUJdB24RxCorfoeyeswxgVUSrUyXTvjgeK84hcxmXBepCjjDbXJx53iFz4apNhi1",
  "key22": "4pUcSr8bUtokCcP9Noegk1cKAe8XAe7DsbLuemgKo21PCaNWVPBvfRzhy4C8hkCpTRTYW9jb5PcJuCMTGbSexSgr",
  "key23": "62Qmwpo85Sg3e4VBGVyihnZ8EpbjV4dPg2hMKuHZJ6Wv2hCUe6Bx4kdShPa8pXqhWsUWbxMEcNBLrbesp2ozgGft",
  "key24": "3kUvQYjpuyrW7dXGHccuxbEtgKyAa8Kh3zu5R6mB1heFejRihNr4VRpCEWPYi2APJzWwUZgMjqTURdzc779ab6Ax",
  "key25": "hAEzzdWHEU3SwMSYKYUN8UTaPvsVXUFqSuJz7kNmQewbwc6wBjN2YshWcE7sFzPPdrMtkSU1jGcxDBhbeB74xdd",
  "key26": "2rRbZ39jTL4WyqkHMLa3VLkKtV9uCxbLERpKzhg6sCARruJhS56GWpGCYG4B6exncQuNomjAvG5LJw288e8z1Xem",
  "key27": "4urz5UXEz4zmeTNcAEy3ndeUcXjPNQPv82fxVrQPcx5icWAtq1RW1dEuRhDgJQu4EhiGafoTCpZzjTPBRW1FCS2c",
  "key28": "49vYcCCJKjbTiNftUvszwSwCLrt4oU1uRZFRMt2AhuuYzK2Nrp3R7uENqv48NqToYmcqFkzhLSdNfEXrhrAHH1FU",
  "key29": "5ptFwF7xUqgVR7vz3MfR8y5R2PTWK3KDUvnsgDefW4ygwWCqQLbPrg5g38E3i7wjgd2KKpEmhu9DsfU9mjKrzTQM",
  "key30": "JWzDHg46w2sjviFKBmU26FR2PMbWLKamwFxfechc4Cg3NLDpkYrV5hvHBp6JPQ4RdiDzeUEkm9dxXVqJnHpVrxh",
  "key31": "1NZ8A6CeHgqRAHqBvoacCfE1xq7ACuYpc6qVoSH3v5KTjNXG7qtZ6CqezZcPgtph2f8prxunua4Gea47CgzCZAa",
  "key32": "37jaJUqTpkTPD9nkXh9i6MNLkG3bVBQTwv5269Ktew1vYqBDXveDNth1FqrjxSKZhuFngv8hkPJpFEs65QAKex4k",
  "key33": "nZts5kXJ2b54JJTm3gHmqPi1ig47HRAHmhsW9XwdtYdzUMBdxmJrRgb9N43jCmyLkGqn9q9UJ7GzGjeUwCKBFts",
  "key34": "Wzko6hhBSsftZ57nRzPVimFNQnR4Dvhku5YYdyBqXyvg7Ev1orcgXteNLFExegWHJHXCrBbBVFhPXT4rZDFtENA",
  "key35": "29hqKJbdYRGPVCZMDt6y3uQtqFqWB7WB9NQhiAmnRCzB8mRNLp2QvGWsyfeBAvy4wLhhxBq2KFQMFyQLP4tpsjmN",
  "key36": "4k5gG3pnFL2y9QKgBNYwLxg7LJgyW5o5k7D6g17i56kaz6FESE4hwsBoMzQ3zZmNrQYpWHU1o8MNo7BSdoM1Rx4f",
  "key37": "25x7TN9ckgkmWSTxJ8jTnB3DfxE5hcLkAwZYNZ3J6Eg2pss3MxjfMhhnft3kL9V2FoaaS2ygNCXYajbgjxj8EFff",
  "key38": "48mGHQceknfMxGP9imC2GnpMZF68LGhRD4Uwpay3xbYRA3vRDrf1CnXViqFk2BgLPc7SWhyhhxrhL9t8FLW8nQXK"
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
