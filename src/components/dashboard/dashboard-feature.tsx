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
    "4TVrafnZxFA33HkZLXxikcbBB7Qsw36cdb6G9ZCZCGuo9Pqs1hxSoGnvGZnrSdiR1dztS7GysDmpnWneBUfQ3exF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJgvvXZJQVCK6pTFzr7csSRQ16wd8UT9NY4ArQpfEufQ7wzx9mA8MPGtkGMJjkjCo93NsHrHXbU7ayBZ3mYWMhz",
  "key1": "7LBdpShrhhD1Xzr8RXMHditEyopVCg9LQ6P1hLSXesasRMREH8Fr1kfSpbv7AhDxEXtcoo8d7VhcMAUVs5zddDT",
  "key2": "2CmtDe1yVWXM4WmkKRXGirvpquFRmWFp9y3DLr1iQM8HbYjk2ug6M6ADGDT4F71F2HqVXRDpotiBcVzT6bCeQtMk",
  "key3": "3hKKxLMUS97nFvnAxHBtrLTrexgHpmsVYf88cWQhAv9myktrMK6pXmvqoWGWaNW85cLivb7prz1Zzm3b1fbRYWf",
  "key4": "27pH4BxjnAVCJfx7WaaogpaHz4zM1M6WAiC5JRHXK2yDBbjHrGQ2zpZJsSxz1ghCR3FciGu36SDX8v42SBqxcVND",
  "key5": "2buDXhrDVJf5QfhqYwscyBmC7pMTwqRhq7fekJJ5q3yDfFNMriysjdyx1KhGYi8JbL2rsSUNYTr4rLYH7HYMwny1",
  "key6": "65FTgvCXCPMm7bhco2MQQ7ixfkBe6SSc5Xc1wGN4bCPqU6zZyi7VQvtVZAFuKb35ZRyeY2S218sUC625wDNeCA3J",
  "key7": "44UdbxtKmN7FeKQsPgXSQiX2GJrwqUC2uVBtNRHkKMk7ERVZDjsHQkoxrw4VNDZG7z2tALfvR5NFSmwGR4FVNt6X",
  "key8": "heV4i8vLXjGF8d1GUXNX1ByB3KjtFehb8PNzLm22Nsomkhz9sHEeWjcc6T2EBEz51Ebw7dm263pVZHSdJREC9Az",
  "key9": "3Fmo3ZgxYCvsRr3BbHJBR2bDuX1PEKPJ74SSJguDmwo91z8jro8w6Np6XNcSyi8WGoyPLDwjdF3tsi76GgPthMND",
  "key10": "2afvsB2n2TAFXAoiiRC1MBnk7kcEUKPdUw1sgGuGQbdvx3ivUaPFxbS5eQVnoF67AiRNywtKcCx7p6fGeB3ugE3y",
  "key11": "2PZiJuveZLTLSAosYfcPiQGfaNufHaRXsA98ZXUHcX2C25Yeb3E9wX5R2fa3QKWnrU1gsdVnLNktdXVc4WPN6WED",
  "key12": "3tvP7pwiuwccZHUXeoaW8iLGsyivUAaA2iKhP597ryMyZPFPsXHA5RbgLU5bovqkeTFZQRb3mgc1YnYSdmji8Ptg",
  "key13": "32YDs4qih8bg7EJk2jLcTbDwW6Zg4h7vu8JZpRfiCwov3KexKfcfrLYHwssQFMUxyE1bbAa4hPx6shCQBbJwoBuU",
  "key14": "n5zDVMqEbCuFJdXkNiJcBrde4cjasD52Hr75VDsYBUJTkdZZJHnAnUzmXyj7pJfXaYMMVvZjxuVYGyvzWqUJMoY",
  "key15": "2rsimtkW3qyWaYDdBnbMyqUZQaAFmycdWkgU4UdF4AWBc8hnJ7whFomBZUX9q197C3WU1iJPKf5K3LRuKuAnz5Kt",
  "key16": "x3ionuzZo6AMD6p8qtDQwKJKSCasPsxRTgfwWtEPZs2t5zgQXnMxHwL8AcWrXxctzoMR8o28XkSjKVrbqVbVzpA",
  "key17": "4EjjwKNQEbNgST4GiHQzqPsx4HSbtyACE89X6MMqKnMRFMVgc4Md4qbec8vpLdakXwAovNyytGJsKfNnUquvgpw4",
  "key18": "3wy6CQpU7DKdjBg9taBkQ59fkzWURDkedfCjo2msaisCvXZUkkMV72KoETsK8ispiFwpsX12hfJJgn3P6wevbsuD",
  "key19": "8jbq4N8XD2UK7vCPorRxxZU9M1pecM22Nbzxb92fHdxQHBKeQXJNHtZbbdLZh2nFcR8RU55hTCdZKGJYVEJ7cNp",
  "key20": "4JHckfCjF5GUWvtA5CEmSh3HeJ3GMJrMc8bJeGuV63j5MF1EdP5pgXq9g7ZbmbgHSrdEUpaa1AaMvBCWPdnK4FaH",
  "key21": "4TjHPgrM7CuDzGB8yPud1hSaWUXPDzn7xJXpSksyX8CizBwUyNdgVw5Ax9NudyXvE3gYHo2wuBF5LyLVUC4qzdfk",
  "key22": "5Q5MZfr2yCgfsQpFirD3dhqMYAtrBVzCkWbnADo2rN4TkByRdC6i6ub98djapfkRXSQRbvUbwuwNMHWcDrKwvG8k",
  "key23": "5hAZsgRXFmBa1th95pHco13QvsmUAnumvac9Ck9FiZYhKm3kCLVdPM1spf7PWwi1KELZYYn44LFLvu8G1tnkjRCa",
  "key24": "ChwtHvDbgDvcAoU18yCjspw7jkhxFSGtYenDo6qGqAMecRZYPL9xC5F5mM2dm6UegRHY9U7XXjZ3qpiDcTb8RQs",
  "key25": "2nuqNG8rTXx9MtnJoCEmuyamNeNBeX8ENMm6jkVsL5onX7p5YupTE5soJdx87cNdodnm52kVgDUURJzGAMVUUGvZ",
  "key26": "5y59eQmdq2Ch4Y6h9CtE6BNkhkSYSxqcTBGGCWNK9sPLzTmK1KScBwWqnxsgMLF3JwjyhEPRPvVJLqneD3spngkM",
  "key27": "3YnxXz3R44MPoEBnK9SHkrNLezYvfK55j1Cpw7EA2FY9VQA8sk6RWLGa7BY2Ua26zQExzuuXsCGzY2vxisSXnr4E",
  "key28": "5oqrB2WnWaUG72doCpuifSb8MsQxpeRy3fegpsTd6KoixLF9zFFEhFvk4troY6EUNAauENTv5ec6Ck7Ru5HaXHqk",
  "key29": "4iqGRa6ws5dw1pA3CD5gJng6AXgTL1J3HgQqQxXj9q8XAbTseRPABerwV46xNTduawZ5DZpiQTRZuLinqeVDPJu9",
  "key30": "c2cDsbVEBvnzyj6DfDG9bG87iHAcGWvqTV47p1Kuxqw5mMkEL1hPA46CswWnB9e6Jvx4Pkv7oF7JMYcmGfni78y",
  "key31": "3m8pcvTJ7eyFKfXEyuSP7TWi6C8wJJLsHLF9N9NBiCFUcP7r1wFa6q9t5uZiaDCH1QvR7zHt58vQ6P7o3Ww7Me3y",
  "key32": "2q2KzpA1Uzp4NqMXeZ3B4sidyc6rw15WqJwXg3QCdA59WDtQbX239TAvo9pJyaR8qWVhnR17ude2r5aVyYQNm38"
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
