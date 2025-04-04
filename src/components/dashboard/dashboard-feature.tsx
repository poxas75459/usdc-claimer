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
    "62yzCUowSDGLguByw7NQjyfGoj8Hnc5U5K1SHKWc4d97hHYSozuv5PhYc2GkFE4bsEu2gR2Hb7x1dSXQ5A7TYCUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3evM8GCMwzuzusBBFXQDH9KxFkXMwuurYDNMQYgLbdRf6LXbSM8HPWDhvK1sE5mRmhz94tWG3qGR59w4fsCAPxfe",
  "key1": "4FdcKzNvrkTLdCsB4FJEmkt38n6bULytPS3YodSim6yRrSq2KpAsdoEMWrDnLobSzHSDy9gUZsmsxMw2JTJxdZRM",
  "key2": "4kHY3b2947QxUTiTcvAmKg8PbxDqBYw7DiKs8dkbomyWGggCrJ55zEjtpJygrtBL351Yhxhd31bL6SJidvprGPK7",
  "key3": "5NCtmGkHUwhbjAVRHScNdzTpRJmaudzDbk9Df43VTafkaQjddL5YyTXNYxULXp7E89Vj623HdZNrzHFgypvDhfaN",
  "key4": "3L8JncgaVkmNv9EZGD9FN69jZmUGviUXDEWFHDeRA9j6wqiLzDfKsZ3w5YE1qvyjesoXWbCuNyNGY9aA49SRTGAi",
  "key5": "5VV2zA2XVobDWhvMXFvLKV8zsLiBA68e2WLfQXeUAGDDCqXCEnZwQPzmdYJwCrkjtpMah646EjjY4b63qtQMrmey",
  "key6": "5TNKQjXMjkaA5mq61sFEa74eQbN1iE5vrLXWtwtBeYcJAcSs4411SkGU6CYHEKzpyGwbJFfcyvqvyA1PvYf7qtDJ",
  "key7": "sjsNKVroTLmeaYyDr54fgVbbsETj6eczPMSVFtxe1j5kP5Lb1NFi7EZheQMW2acvX1MfCue6BQbkgduXh32tDqg",
  "key8": "58gfJTiYNjRVhcEcY86Pu1HSkiCPiLmNEs1JfaRgCP7Mzn9dQ56dCzQzF96EDACpsFVSvLajvwMkA3CTx1BKdNRb",
  "key9": "SGioqEAr3rGQQwjmRU5jCjzFxy67UFct974FEhSRw3pRUTyttS6BEt6BZzgWJ71dFCkGsf6LpTYWse7qKtT9aMD",
  "key10": "52zkQCh4tLEawdonZQ9dZ66NFdnb3ETP3HWVVLGXcdJrDfYTpwy2gY3A64qBWx55ESrDWcpWgYDoecEtkAH2Hb4g",
  "key11": "es1L6oFU68LJA2UgmhW6ge9KogHXPGCymqxEp8kxrjp3KRSoh8g3g3qkirux5Sic7YDUKVwZ1a17m495539XzTh",
  "key12": "4LoewjLP4TM2V89nEAQxvK6bGJ4L3RsHM5ugcCBN7SxvBtb2MoCncpCGyQm1LL6iHxz39EXWCJC8kHJLEBBkjYmx",
  "key13": "5QbczfZfkpvDm9Xst1s7suLCMCn8TJzzbvpd9yEJWzGrequfyU9KQeycAkhByKc2y55KHy7K1JUNRkUrMXu9DbWK",
  "key14": "4HynorYoEW2Exftaw4LismudcCaCHPzqwXLFfTnne4nWFUUtPqCJMrY8GcvQcAy8MRBUCdDGSir74bGQLyeN2pVj",
  "key15": "2DQKxh84vQSpWdB3dhEXj86URhHZ2HVUwd4zYrahkZ9n4hA8L67KQNcG3sJcqJCKXjkpp5jpos9S8QXWt6vfuS2V",
  "key16": "5hXhRczeDr6FqyEbiCQDtMSm3Tb4uMbyYLsRLLxeMAN6zfJj2c9QsQba5Y7rdV6Fq2zcqRRUcG5UQMLCQGT7k58m",
  "key17": "4S7jWEarQyPwXdM36RYxgHTeCpGqearjW5TPZ6VFjCaXWAnUCdwYQfDnTL5Wb3R2zfDpxu2qR99VWpchzD8vSUZd",
  "key18": "nDSpQTYTVrjDR9hw1KfeJKfemFoCpptz5AGpTRR8xLDRgY5fRaixLE3mZv4iyrzZTvjcUNHufpz72oypo1uV5CT",
  "key19": "3aYjpfs5NMw4vUqAr1uKiyJJnwwF2siSmKD7Bckeosxjcc6832tvWX1E7qHhEfnXGWUtitND5sjX9Recnc23rTjs",
  "key20": "4u4HJkqYUyA9xKrGuJfgGzXM62FCTx72uKWPPRKbGEbpky2bd1nZbs5AqQRG42dxsPTXq1oHUTcZUvhdJFnFLoL2",
  "key21": "avGnCgp5yBZAUFE9Zp1Mn2eES3Q7UuvQhJ6TF3B8FhZEwJo5SzXLsS6jk8EVbst7kiNykkfx4gwHjbDwTGCvujF",
  "key22": "5sKWiVPS1VoQzHSwCycL21SdyYxULZexBzp9t97idWmQ8bDBGeRsAPJvZYzxbqH2tTFwWZR9Yt51asHcTXE18RRe",
  "key23": "5X8Fe3pwh39TFytvY6aBpCtRczeiRDFfM5fGsKgwWQaaR3kDwzTZ7JhKr9xukCkinHU9aMa5WN5fjXjV9m2r5uRq",
  "key24": "5aoCugAiDGtU8Em4jmsVUyZ812HQxH4utzvZVbjtK12nFYWGgYAbDmDh6N7DrtCqjCJTC7UZR1KCQRYvy5b2Bv44",
  "key25": "2SMxB4EQazivnJQF3MsdArqP2K3Kz2MNWws47SZZccVWX66TzUgM4bJgeHg8xMvq1v38SwEGBbvvBempL9D2jtNw",
  "key26": "5K79SdqnzfxqfBWsxPtmJahiPrQkRNHe4g6ajEwwAsX2gCJLcMDog3bm9cHoZsgN95f4pGCh7WD2P5DqtWWhtbWN",
  "key27": "2qfBJ2TgGjwer1bUza4jYZpKcpHRt8pjJeJvUNuqcDHV59cqx9ZqJb4oPWZJ8NTcjRMvGvh9zRvkMuGQQYUKwsVA",
  "key28": "2zekAZhu8UgFiLv2hbBUAzXacCYqB2f5UiQoZhAz4F3ZynF3gWxDMquz9kxmgx6iA8rspbdAhFbouPERVVzkM2rc",
  "key29": "2FUkSRkMbciTnkDQJxTQ6tTnDQ9DaU374WRJtq4y5ULHQEKVpWq4tR8npkRkNmymU2zRkC4WxUyozGRDWNrTXKqW",
  "key30": "4ym8z83RNXWyFdgtx6juvLuvZ9ygGB899dyg9NCmBUk7gKxtCp2xzi8C31nxkEVrmmqtYCQtu5U4xZLzp7TxohYm",
  "key31": "JJws6hbsy45twpji9qn8auAWz1k5dagMnuRuwGRj3EJXvJ2dFuW1yGdvCKdPGk8MmBoeUxP6tqLUVLSNmvjDBui",
  "key32": "4kwm52VS9cxXjzAeoEqDLwqTXGbDmXt1KhC5CywDS3jfE4nmP34ZowjkSWqGtVVGHWidWNG6F16PvPFoxcynuM2q",
  "key33": "MkNgj32KuYphaDfiL8bfPj95CD4wNYERrHpdgXMwRcenjdmesJ6ue2DV6ykBaRxeNC9mvG8245Gq45nYyvREzLP",
  "key34": "2EgSGYvPe8K2w7mHLSU4WVBZySkG2aK13njbf8hJuxCLGTPvBWbvuaYRE4h14StRcy9pg51cDTq5yVVvTFFQKWyR",
  "key35": "3hR6N9nTfaMpH9Esfb9ke99JRC9d84EDymuFnoTTkm2UUgML94YH9JMxUTtN8c5iorrAGKYLSdjFKRQrjTVxmLUU",
  "key36": "2TtqcJ6B1Dmj4YYj1bdbFEXB8YHY6LdHu5vrPxReWh2jLF5svSARQCZUBeGv4AvRRjzVpkuqP9qmY5N1iwaxHCiS"
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
