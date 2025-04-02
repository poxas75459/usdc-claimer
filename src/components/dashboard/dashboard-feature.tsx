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
    "3QRG4k5qjSzsB4KAv8XMSE6qBDQ9FhLB4d1qsiW9aycBS1jBw9cYpRkpTvGDpnpEDpQ4Z2gL9Hf19WMj13jwpvor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5giuasbeVoZv3rks6o5etEVdZ4Vwh8PhtaQqt3MAPqLgbPysLn3LTqt6VSUXMJPzyGLqmvmGGBXom4c9WUSstLYx",
  "key1": "5sDr5ywMR5khpJn1LUNwKifXYb3jUhG7n2Mt8jASYbzuXAKiuswNWazsJnMaLmZNVr3j5apAjVTj5hD6hnYXtNQZ",
  "key2": "4APgMGsWNrVvUt7oWMtj4HbQ88jNs7qnatULUZkEC4kQcnvYne2s3S8ngaVaN1seCSKWaCfNaB5Gr2Zibo34zyGG",
  "key3": "5djLWPqvtPCHrWXGKEsDZU1q5oFXujE6HtKDFr89bNjdHUe15bBP61ZVvmo15G2Sntcodzbk5HRPJXvsuK1XF4VB",
  "key4": "5HCZ6Pp4hfKmp7dMRukunrQR3XSn56bzbWvh47kZiXa7qK1HC2WhMJvVEKtfFu1Hdq4RfTiFHfcb2t96GmHCQBGR",
  "key5": "3gq8DzcpneV5R91DqXm8XwkkawmHao8hf9SNQf1DWewQu9XKB62ippum5DrckYM31YoKL3VzJoBAEk3KvcqQkw7A",
  "key6": "2GSrRXdLb8iLkauSEyGFVR6Hk1NcVpZ5C7zokN1y2rjSMunRU81hvdPtCkUdBBcZWbpRUb4SXANZqAGC5Whkg4Et",
  "key7": "4x1hP2L1dJCZCtVCzkiCf6Y1izVKxHM3nBYcSKgcDwEXybiLnsdU12whr2RKn2qTg5pyWea4ZHPoKWFTYPWaxMAo",
  "key8": "teGL5XSvjyB1ytpNm7zG9FdhPefRtuHrk1odjm1Kpe8dtvit2KrPFbNjFtauxQ4rNk2hAmcwtTdikzsC5x4pk3Q",
  "key9": "4H729QBZ91oMD7WKhEbS3Q9shiq1Y9uTuMYDbUaqoyVoEYdsrm1wNrSVNxky66qynDzp4bNuhH3SA1i3zRRjKhRz",
  "key10": "4QXbKoCc2QapRzwLiJX57PALuopVL8YYk38kkK6UrbBLB4NruA9m1z9CD3zniuj4sk6vxRMGkz9J32Td5CoePQVo",
  "key11": "4PeUKuXrHt5ecXJH6bk31RNjRNdHAdPwexzM7jgitV2Jcpk7VhAc1Lfs522my2ySJWgsuaBa2BviDhDmogtudBFR",
  "key12": "2L4472TJeWjhjXJzxhA5QvecSKRyhPSEGVum5SgYH4ZcZh5vDD5grZWwYQMUiiHTpjXSb64uFTswmgFx1FdYdue4",
  "key13": "z74i8LU33Z5jSHJAbppe2Fad6vPi6AGJw3zvsJvLxFKmowCcnWxSEdnnnUWndRj1upJnYTYEp2Djgm8UkTZJdM2",
  "key14": "393XLrVgg7Dd1XXccctJ4GuVuqsQdHCdPYU8UZ2RSYnhHTWZBKHXTndmaB48FWYwyf79VomCskuLEhWiUPfJ2eqg",
  "key15": "2aeWH7BgUK9j5mLayycWPoJr9CYmuHmVecfZqrL2wBnBQhdfurjYDgNfnad5PkcthPscFWR9A1ZWT3koukzmpV7W",
  "key16": "2CPzb4HMVCRu1epghpKrWTBFWswCnWvFV12KT4fALtCUnuCLs64KFw5oyzotespw3dr39pF79FHWJcNeaj2NWqyM",
  "key17": "58omcWuKg8BpnXFqaWbcapgTqHph6NRscXXBn8jJTfdbaWaZcUwq3RnCAkppoGKadKQANHwYrh9QzGA4T7oUYamj",
  "key18": "3fqwts3Qt65N1GqWCrbKPFsvFgcdGRs2Erqu63rysFJv8jHR2BzdubJvLLQG4MMTReonTHb2tDX9VUxec4nhLy9X",
  "key19": "31ZjYrPxeRjuP1pXZoC6oDycWbHX1W8nMqXvaAfY2Fk8oGeQHkY5L1F4dMhAMmpezr7tuwijVV7GDPbSK3fyrWiX",
  "key20": "5jzSQ34hWctSPmrZ2FqA4ziVFMYrpQ6kWJuvQVFWE7oLKtVP6ENAQcexckkofPmjbatpr8QWh6UZfZkbbXWje1hG",
  "key21": "5rUh7GettxDtrtyVvr6v5jBDRfy92k1KZYZNsKUAGMEXPUhj6Q2TgcH8iD18a6P33miMC8vZh5wigT24QRgSaxMp",
  "key22": "2jyE1hMGSTD753NSEXY2P4QjigY4R8F5eqTJuNVner9UJ9S42ANhYhkhcksdJ6Tr9EadoaD9k4eCP2ynuh5Vuvd4",
  "key23": "4fd2CTCJM564dw22GUtxGjX1PkFdknr3Hz4Gp3PJDwYfC5Jqrj3ahk57uhPBP3SZjirAAEAAzLjYJ89pdHcxNmok",
  "key24": "7fYRWYcnBtShunbKrUTCzoE4n6JfWDANF2QfEpN3BGjX38nhdPgiajDqQkWNnLRHmEMrVZanjaZu7SbCKwrYGg4",
  "key25": "2QTFvHYeDJ7sLWvgdPJxvx47YtgFj94JcwVybMYh85jkEyYaB7otaXPqoqwjBuD3YCQJsh1nCKJ5kR51wGcEH64r",
  "key26": "3iVWvqro5k8jU6QL9uwzn58pNtWKvaoNoWuAff75wcXS9C7R5ov1aADtpqMkUnJraRXQ9PgZ4Nc9ZyV9hpS5D1tJ",
  "key27": "4Xe8Rw2x38BiNxXThJqfPgwguvJxmnnrfKsLwCWX55hQswA5PJHzHGv83jzFW9sVndoUgixKa5GygFisTbokW2d2",
  "key28": "uru4xmDfkn2wcD5mF6WfF21K2ytUUn4vckEgizSFpYUc5fynZHAG4Tpkwubn78qtmX6FnPXrKtnzX8P8QCkFoZG",
  "key29": "gDy8K6xDQgRdQaQaUBken62NJfm8w4heyE7iwecN9ojzGfbbWkD3wD8UG2HdbwNYQCMq98HYVjHfAwnvk85bRcr"
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
