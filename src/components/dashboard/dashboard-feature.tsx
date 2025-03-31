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
    "4veFhTL5pXrXrhznh1cyQ7behwB9K1bXRJwKnt1Ds1R3wwvNouKwLBek3mzpr1hugW5ELkKMMGTBqPUvZwVMLvzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64kVhSpWF2U9MBbsHsEUYn7QB9o2G5zKLFTf8vEQQQdRvbiXaeyJ9t2ySHRM3hDjcUYjDw7w7yC6TbxAnnUUKDur",
  "key1": "3zpcN2mG6C7Dk7qVzN1oSFJN2PKbQv6NAmhi26iBHJzxwYTccaYm2BFSk6TkB6p5kVHYGRV1gfMVjtjo7WDGrsuP",
  "key2": "45wSA1HD5xkE3GtDtXG2iF4wAaxgwVsK3yPPvEXBhvpRky9eKNAAA56EckYUq6ENZNTnxrm6jTVPaEYD6vdh8xiJ",
  "key3": "66kConBBi3q7xn7xCgq3zCbtGXTZUCmJ6rLRYTrGs7VtxmppSuST8bNDU7f2dqGnGYLzhKVA8txjcG5dCXgH8aQm",
  "key4": "4LcT9D9dmTp8aRVeAc9hMxtCGWTk5hi1MkvCgj4rfD8QJeia8bV7GKULYqN2SPmPQHyxesLxjwh4wtvLmt4ZRZzX",
  "key5": "4KFtr4gztGrDDZVr8jDuA9EUUp2Jd2zE3mHdJQEZ2xCGXvx2xFRXVcp4cQmn4WcjRSW2Dxj1GXiSYjNyLQ6D53Fc",
  "key6": "63GSMiaSMZzPZEuf2GE2ZgqJhuALfaHt3CZd6zswCDKvcXUPDm3GZLmR9S9iY1YQL61MobZ24cEeVL9bzxmHY9rw",
  "key7": "2sGU8L1ZNRbXRXD3UaTWNBSd8RoiBuUTF2UXLmCLvQcY2CDbTeoB1gss2P2c2NgYZ118fm4R1UEHjyAd6c18nuKq",
  "key8": "5jSsYtEySVXiuLQPzTe5PvX4Et54TZgYG7fnJ5V1TagZRx7tYNWzEUFrTkWW7iEny9YHYSoTUhCsU5aSeppraH5G",
  "key9": "4UepYLG35N2rc4aCGosA4D5qgaczGhVkSChD9vjtCMAWXoGeC9JTcD5rTFaUtNDFT42TowpCsFQg1qczUPH8jrcw",
  "key10": "UnhUJpqpiTBGQ31nufS39xJZHVxcmTSpL4msrm9pVQT8vtJgAiawvZx6b74qxBxaPxidkG5PfXcSZHCNzFyCRSP",
  "key11": "4ZthBXiCejxuaevZHCosgWdCzSDZCeSkaiuAVAENFYQngYde3sVV2rNTLyAt6fBpV43wR9TSi8htwWovPoWkJ43Q",
  "key12": "eRhmrKJGuha2nya7voVQS1KeMjPCB6TcBGkEjiJyBnmzji7QzJJgGLrTm5jgdMeSvne6ECjwHcV9si9ESzZiF8p",
  "key13": "2nZR6WdmBofUMWfMetzUqZyRWTga6QUchwnSSfb9MkJTZSPn8DodaLRcUCg3nMMjbVoyLaS8GmirRbWeGJXhGCDC",
  "key14": "uGAGu6YfDQSHPDE2h2MYXVSUp9uLriXxMCuyfAtMVyWVWivASfDWTscXHDkdQfXYkdEYpZDqyPKRX7quN4CE4ou",
  "key15": "4wRrHdEq1Biut7m3HDMX1g8meV2tU86kWNowLxkARuQ92jsa3au7WGogmSQqzFKbEaQxDWdcxnydXWS2DXdu3Mey",
  "key16": "3HA5wYQLEkEgqoAmPAK5JAGQnoVCCGgBKBVUQdtaNFiyuruS7BYRcCgbMQVgGvvN2B7KA8xwELhyLhV1LZPW4eyd",
  "key17": "3mZa3XQTuwFeMXqdpAfPedYx6uPp2JkLUEvh2AQxABKXnebhkTXk5FyxPFJ3nQGyJMSc7iNAmVvZQ5aUup95jNTj",
  "key18": "29EgQybK4sY3qzAcMfokwZGEnfg3sMvY8e9c2APgYPkYGR3uyCWpsJGF47LHZdDqfwVstDFXHGy7z6FECuCecMwT",
  "key19": "4nf986jMLs3HhzaDeF1VRCKfJMeRcdEVngtQcGwshgKmubNVZcM9gkorGBFFEMFXfLetBFCj28G8YFxa6MdSsd6f",
  "key20": "4r8jdTTGSiTF2EE97A4vroC6yyxjjVBGCnAtVEqxwRj8oVNeK97Lwrv41z7aqvrALnuhPVv4JxkNMMnYwDLf6UFY",
  "key21": "31zpHjA7VsLC9NRdq5wyrBH4nifwRLTTyerm5VUP8NCqj8ZYMjway8Uge2YddHQJLqC62oYt3a1Xv1cjNSfpd2UL",
  "key22": "msbqhjStShmT26RLpBTQ3Y5XQhqh83Jtn6ZTUkb8KDtYP92v6z9HD4mc8QQnsBXJ2FdRBebHJ72NG6FAa1jUiWq",
  "key23": "3VXBrEoRLyZ9Zv8XkkGLmEWA8KGLATMjz4wiYkqDLFrgaqZpm8e36eiVTANd377yXyYVkj7RiC2LJDqA3BFGhq4S",
  "key24": "NDukm1vJs5ywoqoR9qrJm5as3X2v7uLFQmNThSHUQ1STNeFAaaGipVDBCeeJjxcHBqSYtsskibKrTwkUFz8DAm9",
  "key25": "2avqTXoBJxeDgEwtzCLEvnrPkCj1zhvcapTqtBv57gDLcix3RS491CVzJiztrvafRntCrhttvybveaqtazdg4h7W",
  "key26": "ZuUpyyocp94m2gMJitVbDddZVjbohAnLvruAMXFwKz5eMNVw5NCaJ7EDyn5rDCJyJ68nPsQWkf9mX4WfPCieh6Z",
  "key27": "4yyKwWBudLve47NMx7ZjS6nmFkPGwakopFG4wUCPrhiQZoRm8adrt9ynhnbDcxLsgDLfjCrC2w3pJDNPkpYKRP8R",
  "key28": "4TF9Qua8BaQhPtePhGWPanQpDo9qK4ktrhrfgM6WkbPqDCB6pUxcJztwqaPPtCLA8GW6kap63rrfyKUPTnwp8DNg",
  "key29": "5cF7w64HJEcWWwkremnuGmMvi1GCtFz4Devnc75rSpgasAVfEMCegtym6nGsQNWn1vK63Exim6pcjcwwsQEbp8Xu",
  "key30": "2cWbtcK33bUw6YijWCGU12WxHBDfHdzViFBzisSPVVoMTYnn6XyrH2MXif6ad2yhF5MWK96DLLzT9SaWdFqBKBLq",
  "key31": "34KYVWNoQzbaTPuMmZQECn6PSMXYDXNao5bBqVxmLGKWh82w8Jq7MWvvwyvyK8KSxpNZ1FMKjjQbkwB4RNPN36ig",
  "key32": "247KPELh45TiWcZppicpxXm6vMh6cuTbBT2rfnYxTRhohWyJ4rms6ZG7qGJcfYAtVcnpsw7GJi3CLfD7W6gYERz9",
  "key33": "4hnvT6ac2Yju9iYDnjaMHE9vrYms5q1m4BGrwefeYBg5vGjRuzqDabNGpU2GYj5mk5SjBRbmKqEjniEHCLi14L3A",
  "key34": "5G8SuixoERuA1opKvpQkMbXNYYmhk9t2rVZeQS3y8M5Hb4QGmEiXFAfDN9cxzAbJhjZn7mzB7QamWyTFpFWZmRZv",
  "key35": "4uPGufj9GRdBy9Ya8jhEfTcPAXhPhn4xVmVGM1s7thiqxDMpkD4pDLCYKUpd6toboJGPXmmXMPDnu3yr1k9WYURc",
  "key36": "3wZ3WeXstnoUDGGAghQqn42cjfGs1ndc8UtJg45YokRtjpyQXBKmoJE1htbihrAYTJ9Pru2jCddb59LjAet7HTrg",
  "key37": "4Nkn5Bx1Dza6kZDJD8ZocJ13VH65FE4WnDm4JkujSGaGwQD1UhBQmu2szaepLXEsNGBRgmePNmBioM5Fuz6kiR6t",
  "key38": "5UwUxqg1GwarkjfBdh7bmGajKEjdqZRuBu2dLzbh5SMNTm5wGdVRigwaKX2txdP2VjHjW5amjwZXsiFSYPig62Wn",
  "key39": "2ej4vv9nDZn495zR9X8YsC3ZPCQLN3RbxYHm5sKi4HZ3Y695fYht6zyoWvHHZfBNbBrMv5Vo9WtDKkr261AjjQe2"
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
