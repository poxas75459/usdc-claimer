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
    "4pCr9MPW6qKDfdd677zhFgXqRqK7oUbz994i2aQJEgk4sa8vh7zPaBAvBs3ED92UC8EUwxB9kzz1tnjN2hvmdKx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmrkAybuB3CDYvfoh42vLfA9XnnEJc43JpQ779JAWTbj9p3u71ZPC7Wbhd3Jx3xsmrmUBmUM3uF9xaWDCXkTUFT",
  "key1": "4AY4SMPCr6ctJpjUjCWBxFRGWXueRZjK2TqzWFwsvBQ5YWwVwwLKmM2FnbQLxzDErVyri5hFwPyWoRhefVQvwLfo",
  "key2": "487cXMKob4WQw96tTrKrkGDnVEWWAzyQ1gqGzEV4pWR8FUZC7iTNu8vyRrrK9gxFS7Wc5ZY2VFZKGDVrp2MJnUpg",
  "key3": "45Rpi1c2nF3xmiyjTS7TBXe5d8MXNeQiofrxKGkgtTy3RmYEtpaMTJ14mCbS37GtYZi6zyqT6ivARG8wa9WEcA1q",
  "key4": "2NHZYCwFVh2TcHxphBEadb6XPdRKQyDuSRcFj8TDciZwZMqsskdMT1Tm6t5BndzbLwvBdB6RrvgUZdsDVHHEbDT8",
  "key5": "3DhD6xMAjkTuVNPvcGRUshq3sPiwFNuVxCp1QbwKStVuxUwhtbcpz7XDVj1xMsDgSExF9hJuadTMhz6FCQzjeBmw",
  "key6": "QwpP2dDKUSNXLNroqnWWRWbEBramFz2aS3pVZDRvPrNM9fZfCpEjnsZz95HMx2nDrPLqEuMsGqkFWhWtshKbv7S",
  "key7": "3N1NLdjRyMGnTqcjJzkAPYXzqJwss1rrZThLrXatCPKePdEbca1uVLaSXp2kYdDc8GZWiBEYBzyimAxoH94X4YZC",
  "key8": "Zr3qNBJun49ZZDSTNCEgGQke7zwtVL2duo5vTLUtCpH7K1yAa6ddpBJSZAixjMUsMkaurzsRCYecHe2pTnjTRZs",
  "key9": "2hGVuFWst7jiFaf9Q3NkYHvvdHf4qgY2Qz8g913qhUwfZeG6zWrFXpToCR5TaQWPQQxMTmAiK3EbNLTLdKVDNvUA",
  "key10": "3yM61v4sVVxAbXgMVQoDXpYh7y1XVPz9BGKSJW8cnz7CVkj5sFHbFHv6WZ1Vvjg8fTvw6RrNmdhRGEmbax8WJMd3",
  "key11": "34bJSz7wejBDj3ryn8pmB2zukeEbAah6eKwGZfJuKUF7wYAR5EXBJYm1Jnu7u9idpd5h4McLJc8dRWjtAD8to1K7",
  "key12": "qchurDiH7YkGNzo87R4GrTtmVTUEVo64Wo1uLxHVFQ4cEhiHscVfNXHf8CTyme5KtB9QkuziQYqdGjHFYbA3nxc",
  "key13": "H7uFRSvvRk1gYfFf6she7AZELGev2tNLQbYhoh6utKeKkBTMak6i5LWswzeUkERK4SUYAxBUZ8pPFVdeSfif7Hv",
  "key14": "4eWQ9iktAxkJgEVYTifLvw33zZTdfBGhhqVpTmwjq5QVvYwHmqdXi64M4NSVL5JLWdh9r6q33xH4ZyNWMT5Z7WPh",
  "key15": "2iHhYhRagFnVM62wxtFbEu1LCkMGeGGsVbd638HezZvdvZYP6hH5tXkPqDetd1knthV8a6qBD2aKe6NNS8HqoYkp",
  "key16": "2xDNfjPkSEka1BVEgxHD98rVFvvMbUTWRwSB1cLK3BgyZiqQeYUUU8pZybr8GRbF75BjGXnmn3uHqxAK2srWxC7S",
  "key17": "3FjmpoahVU5oL2pJKmuV4DuzkZMDiqZmkdcCv6XYEJbvHhmHZcUYD2JUWR3HzrN4AvMxuWmFXPFtNzmrVr768M4e",
  "key18": "vgGjwRt48QvQwDCy3JTXH1ng8aqD26djcdEGGHsX8q5MCYmtSDf5G2PTu1cWfqyfFkxG8SH48e5XTQTVGstnmLR",
  "key19": "dbAoQv1EUXmWExYh3QvcQgCAJdANXGVqERri89KA2CF4QQYJpGHmtLjqyqef1xqQ3Q643YVm9A2bEENhzMc8y4h",
  "key20": "63QjM5PWeHtimDSL8Efzo4SdPy7CZhdotZPuhFeg7tLTSb6BCo91sfuWMxBwRuVXf2h8zDmVEiaaANc2J7apYjyr",
  "key21": "2MytHVqroSs7PYheTrpHhTU3HTpjbCepXgBDVvK4d55DKjAqEz671JF54EukagmbVk9MnrR3sGD1mpZC1dRRTetU",
  "key22": "28eA9BHEUkr2a31tRasbxyyoSEuhFnQzrwJZByxMbRqd67boQYbqgZJVxDjerTu7PYsUZC5mA7fJrnyrVkgg1J4c",
  "key23": "SuN8hiQHkwnEEUYYm3FhQgWGUeiLJ5bvwYVMjBTWSJavq5brqySM8Cze7y4y6uYcVfryr5ZU5nzEGbqKmabg9M7",
  "key24": "3b93t1FKCnsrZ6QMDcBvnnEFFnMuPLtDT7mHACKz43tm6T8ehywFANNGMgTy1opRabsEF99CM2isVDTivkJmJQ1V",
  "key25": "4Xe59aTsSwqKdDEMgJWGZCxGj6zAfNpgJsFSruoGp5CiQBRLV93G7gVcTDAMv5WykwLgUYYs3vT3zXv9jH1Rxqbr",
  "key26": "kzcK4rXwoaaSH7Z7sd671Zx6mencpzadhe2fvAZ8jmrbc5mWVncz8KCTDW5mpeP3pBCkDR16PULZQebuVy5TWsq",
  "key27": "55KcjMEJZMRzGCBD7muxTGp765UTbXJSzhUvxssUpnYinrzL3av5FeBZZHrDnrNF9MdPVQxbE76uxJQACKCtKWYR",
  "key28": "3RGoWnKaUkqxEsRWuUPReymXoQtr21nZJZRw315FGF2CFT4Ji74H3evy4LzhuFNYYBkmtmSv2cdwfqCeirfyDKWK",
  "key29": "5KvR8C2PSMFYr8bPAxaxQKeQu5Yva8jfpNKxxVgBADRXrNWBXJuyeBzEEFhdSNmzB3BECacS91Yh7mz4NUquEJik",
  "key30": "2RkWgqED1TxGnKCFgEAWdjuBrjQRXTMjyLUwnMyPBRp8aKQeFTPvyb8QkKZg56eTBHsgmWFCds7Sx6DNqYpAPLG1",
  "key31": "615fC9uos2mdyyNf2PG7sUWntPnJZmHt3bimHrJho19dupoT1FeSY4aPsNQi31YAPQ9BzZQdqemQDz1WnhcjzK2g",
  "key32": "4qq3wCuEEFDbfkXWuKuyYoVPACgUnrwAWg9WM92QkB8qnwzfEZwMY5fWsQge4KSZFtfqUGbVjd5yXhu5R5as6ogS"
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
