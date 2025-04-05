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
    "3ZJJzxzXjNsZL1Ge2bh4wauNmNJF1Ln7mSSEjmpqoavzojuRdNRCSxG6iymdNLVGfdSk2PsAbBNvTNqUhsqKj7sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fSCUJuXrkYKPmEaLPuwNEBDGFX2BMSnMTTzXQDvqYXSh3LnUBHFuXCnHm91NLRt1iWHE85f9zY7wH6cuaGJGgaA",
  "key1": "4RNGUGberyKBYTtV6qhknim2LtRj3Pq5U3ViYCcyugChZHF8abWEbodiYyeUwkPxp2CmnYZyjJTF5oHN7gLQiDJf",
  "key2": "57sRLNaMTpaoGPG1pPwgGzFb8WchkbJmYzWycWGsCCej9pA1sXeob9TfcBJTX9X6utFSwG3TopC5LjHC2gTamMjH",
  "key3": "4bVx4twQQ5WFvuPwiB7zPCtZo9rLw5MHWh6U56oKMsb9QZaPKZoXVDZ5TSzsFjuDUhR9oUFpTCzqbC7XuSkKv9YY",
  "key4": "5hKzRPjTneQZ3ZPo5y9cnsQHZsbKGJkLkR2HvZvF6RGiex2yhnWkZdcfgXwTLorEK4s4qUAdgogKYPgj5MtaTzpB",
  "key5": "3XesgVssZXZ8crUYWx6bd3iYuoAcv97pxXfSP9dCx5PDkirHNQvoBgPemVyt839h2AWUNbYn1Hzay4Jr5C87WwgE",
  "key6": "w3kyypkHUovtfLujxPuxHpi1iQ6fMkKEqCcUYr2oqPR15uUUYu7hzE2skNqjB9MFdD3sESgtkRfmwqt3R9aPmdY",
  "key7": "5LJoHTriAHQRe5wHRipDpszQRHmEeoCgJ1cWTmWTrBJmTyWVVLXkESwituGbRhkJFR1Z61NmJkwijSMWy99kSpZz",
  "key8": "MiP1ZqgPtTYrMGLDiTVFsjgR3R7msuBGPovax4nPse4yxJVgKgVndbk58Lpa6pHkNvLikSuNqwRdxzNaH1QqoXC",
  "key9": "4DfxF3qzq8FR4ju2xj6cfJ4tKyQCDjjNnx4MYmH8WRtyasfukfXtGqGMLQo9wMKhAfzyLpwmKJ2JemEiQw5vGNQv",
  "key10": "5QpkgF6HbmiDJvjNmVbvRiw3tqym8e5WRsf67WHPycj397zG92UbkL6yut9U9RdLFz2mVikRE6xBw4eomrNmz7eK",
  "key11": "2icLBJE1QUPKBd73wyWJxofbrvdAUEv9dnoveFGuiysQwe8UM33fawaih1kKoNUBJxepWz3w3GqswCDznux2TJPy",
  "key12": "yvENZVjEeYG9K7ycEPwqYgLu92MKXMw9naZhWd1YDvSJ1KrSkzPPnXjT3QCpPBKpDmp9YtjR2vbCV2aLWvjN8M6",
  "key13": "57mu7q76wBjAdF37emwjXkcWTe5n9qmQXExCkdae8LqDVZW8qkvH37st2tDm1ZUgFqU7is9TxPrEVZwnpKNC2gMq",
  "key14": "GLY8c1CqPGhv7CN1Qp4sNM1cwbM6sYTR1ELXMR8MJPQaWiW6UymFZkoomP5Qr7djiRKmbJnyqFaYA1aDzvzXegf",
  "key15": "3NvK5aYKVA9ybqEKX2hYpZq45hSUuwRDHMVBMC95VRMya5zR6EHnrak9bx3aQyDwZMu6G2AbgLedQuRwvLkqK3bS",
  "key16": "3d1EGoknbHXqxHSNKfqTD1SQiGiSBPjzwTsSSFa45CLBpsq6KMCLqsMgmPCdo6biRU2TDy44WpVabtpBLeTc6iDk",
  "key17": "4dcEZ2hGzJWCQ1ZEnWakEL2FJwPknHWRUq2ZdUf7MURq7gepqDtLKeZ1C3P2DX4aeEneHEbUj2VUBiyVwvFDn8m5",
  "key18": "5ednJzX4QS1Qo67So42Rafp4MY8fFJs7kigXBHQCivuScBLKGePtfhWTi4mzzviysVzvX8UXDGAWB8fcNXHRmUaY",
  "key19": "BgRDBAgfGPKZNjM1YRSPjoEM4Y1ye5kZKacJbe53S6Dee2xj6MZTHvrrPx6VD8fAt7enfhkTL6GowmxLABm5Ucf",
  "key20": "kCysLcCufyKgb4Qva7vddyfsac7wQ3Axn96gdMJNyetzZRFZBfFZSDvsR8CrCaosShc66DAQt4W9H5eKw3S28ah",
  "key21": "3JHJ6QjneSvwxBPetsKtf5yZLDqf5YXMhL34viNzwUYchgUKzi5JWjQ2GcTUXLbRuZgUYhLf9GRjx1rEKCAmqnG6",
  "key22": "2UbVWAg1844KCvfnHuHmAn1fjoxHzQASosdXMCZ7rKq1AvcoydF7AkDJQdGsT1ojEtXzRgxWGfz4kGszRFdHtPqt",
  "key23": "4wjbobaS6smkohCjuHjSAv3DiFSt51gnx5XSpoV5o2hJfvYK9YFm9e5vPbjmTSDabFvifyaD51Bf4k3JZU9eQXUc",
  "key24": "AUFuDZe9eVBreNE6FXYdX5niEShAJDX4VS5irkCmjYdWgAWFB5bLABFAbNii6X8FRd9TFcakGS8fXui91HbKBvK",
  "key25": "4otbBz9MkMyvVuEsVv2RYx1yiFHPCPvkS4VcRU1zFsR32CVzYLNZKmAqayr8YGoyFRdMUMPwQtz5qET4GMMBdmho",
  "key26": "5CpHZvw48TQEztxoVA8fZPuMByrKt2eNDCawpESSidkFmmuEUPTGmCeWm86fpaJPFFu5WA7XCbJkJkBz7by4Bpu",
  "key27": "4hYVXRbUC1nBkJQMMqE1UcUVKbtwWtosKcpzS2HAFkeQB2o7iwYvxwiQnz3d6XBsg7r7XrtgWZ3GVCX7Vam6n7Dv",
  "key28": "3dcBJTV6noG4R5frKxvKKeWQ7BQcaua1ToUhKXYRab9v5S6U43oTNVr59yRPw2yuvQB33Maq7zzLwa3gwujS41Fy",
  "key29": "4eds7zHASgoCuCMBbcYWuL4ZyvWgKQTYwat7xBCZxcXdhKRheCkBuLuu7E3Z7hE2AgqdSn4s8EYxwY4dhT6PFLty",
  "key30": "4n2cQQeBuomNsxM9NqqaBLmfTweGFBGCG1z832A4MScEXumFWRgneDTYvc2KpsvdDy87oLzQkFmB92ma5d3r3PJG"
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
