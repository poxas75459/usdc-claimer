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
    "5sHJ3wjsGT9qmGTinCPFceXpV5KP6CZNnSgezJWh5ZoKytk5rPLzdoBk5zLDN8zpaTHkDUFe636rDCzZLg58v5Jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yLX1qwxU8SwhTXKJacvPiw66fgubVu2Da2Hu4fXGskDWtvFhnjkwj6HXE8KQAYsuKwe2wrh6RZJUGuC2EnEfEic",
  "key1": "Q8QvabsziNXHQCsCxih7mepQbXJZ9TSf7uLAZAyGw4Ccoi18rsmWprcRKNdufAnGHRBriRbfNJxCZp2jkAsGnH1",
  "key2": "4Ezkn2H33C6Z5VP5MvrwPfHZ3BFHzqNfMs9cHFrMxNtBzTfcwjcSYw38RAN7u4kWecnh5aaM2PifiMQuU4ZEeLWk",
  "key3": "4Hh7qY2RwEYNZ3sPZFJKr7sHeCP21NuBJmz2KrCvvbXunPEmizcPEcCi3LJeEnvW93ZmQFB5EPuuLR3uGwN1ALQB",
  "key4": "28YgqeD6vFcEkdLtQ5mGqbyNfdZRE7XMZitQwKhcTtkUvvywVEPvvYWPrTrhZMNSTo98XiUkAN3T6kNuaCqHXbQc",
  "key5": "4bYsKVsnMYtYXXZzzztxorAyH8rmm1q3jiCm3fN9JVPm5u5vh3uhcxZ1iiBdttv2GaX8AdsSo8VsQDgej2tD9NPd",
  "key6": "bY8rJvnhxdcZYP4kgAEN4sXphhMTbBtiTBa8D6MeDTqRjVdB8YFwBd8LC43qZqie2GGfPw51YsaFQNEH6qKVU7M",
  "key7": "31LJe8coZA2utViMJd7E1uTsxqZWVAv7QRskvP1YMk7dcqsvtnUxdCj3wGSuS6AVAQPoQoykUxrfoCndTpMfdm9P",
  "key8": "4X8BgZBSJ23PU8QoUZRqS6uMuhBvgsZmoQcEa6551GkHsnQAm913u7kYaz3LvEWtqzvbApYkD1qHPHx15g7Dr3Ys",
  "key9": "4rB7qQTFhdSjVuqgb22EawkFroma4niN5mbEqQ1MDWXv9izeSdqj7NMGYJeM6eweSNsbVThUM3D1haTvK7pnhgAW",
  "key10": "4ohCLNnwCu8cXENn5PRwQ46W6RCdtonY48fJmsiMpSUMfMXZnfjFDL7uWjZ4SdwFzDuxFWaZfW8M7fHTiZgKwEer",
  "key11": "2D6cjhhNLLSkrdmgkBYgj93qnCKjXZxbWN5WTuzUCjgXuVKZWsPVwbLWWexMrx4vKLqVQdNWtv8LZktumzbXHQrT",
  "key12": "4NQ7rHzZGwSpPo8jv6mgxW7kMLmXLAzrSArBhZ4xYJmXwPUupALxqktDrJ97UwKZu2m4kqLv8qbGq36Jjs5Qs4kj",
  "key13": "5FrAa8LGk22Fj6oPaEfwWBoqVyR39qdXMXRMvHNJ8KtEpvi9PizCAXVN22LN2VbWz5ofCt7tPJnPQVfTZpHDkFom",
  "key14": "3yzigYLskpt8DBgvMzvX17tPuSmgdNgVSssjF6DqJzXQfzFCVNzSQKvijKTueyurcqaDjPaUKBeZ5JRqEKNHqkLo",
  "key15": "4fLFLS8bqsx4AvT7UUDN8D3Wot7tfMkEZypgAuvntVVuEwGSifE4gUZNVy9TGn9WSE7wXisboxnN95fp923Rk2C4",
  "key16": "3oaaVj5MoeAhst9n1mqgTwNJgf8cTxktHPd2MvCnpbvexFJPzR4PBV6xW5LQL1PcHviZGmyVjMXZnr3mtTrWFrzZ",
  "key17": "2pRvK7vS1ZaHJV72JPdNeTN1R3RmLz5g6nz8aurS2sPbfWsdp348kkqvynmpBYJjFecT7b4ExWDQfss3hYHhya7E",
  "key18": "P55V7QwPPGWohrZqWpCDqsAQFyURUBZsNhs3LCx36UcWhvF4h9UwPHioyN1Szz1CAwWeJEThKpKU12vatka5Bqz",
  "key19": "66o64oKZTnUwgTvPBTDQ7DJAyfwYWbUTmNKgyFQQ1kjXuyYcBjBeJDCZy9TCTcM4hDjj2GqFJGKXTKWAQnW4F9L3",
  "key20": "2gKQEc1xTzF4TwpMQKWZtmNRMjrWM3hN4pjkQhQa5rtt7ULuMMk8YX3wzfnbhBkg9wKYQQcbhkyiR6aV359nJ7VE",
  "key21": "5GNqVkTkmeNAknn22VuwUvatvUELNq44HRQ6EuZENGwoKGq2mfrez2xcPJ4U6sDP2ZK65EnT2AfHE6aUayhb3QFe",
  "key22": "2oitue2g2s1URYjHkB3WJnM6vWBF4SFaduPTyVUk27bBioeBJ3k6kx8SnoNrrNBkn4rSXouuGr54etKm3abNjsk5",
  "key23": "DPMhaBXZkjeuTp4AeWjPd7U53Xd1u9L5AtSUecmAWjmbZc4i7m5csiinmKSZ4s8jMAaHzabqZrgUM9jUxXJna82",
  "key24": "3R48Yh6aEy9KmZs4tQKUyq8GBneRqj7ov23R7a8Mz3WyBL3VhdV9YwDDnrH4MQBZPoT84KbxNJx2h6giMNJBNQcY",
  "key25": "32z9tecSVwojhKe9qjXHL4qXBQjo67bGzE1v4PZNkyYHGq3YPyKYkqCnxeBxqKbnQLwWiaU8BjZMWoE6mzMzWqDF",
  "key26": "5zo1BJTyrUqQDrgTqg2qNoFJbAnzRhpBzdY7uobYqp3cYkGtjTbYy6oVANykrHsLcWq7xcUZfCK7NCiAfKPFsvr7",
  "key27": "4McapjL3GVpqRTDfEe1zr6JcBYvqJhnEZEJPMVym52xWpfPHq2Hdb3rGe9AWGNhmXjEFyX2GrM2JAxxakbhNFD7L",
  "key28": "3pGqS47g4pAn8Hrmkqv4hzzyibmGMAFSGsy9e4RNMDTr3tQAfXJTspCN3GPG847SQD2y3MHpxXu4ub6WSFm1n2wM",
  "key29": "3rqoeR5r98qMtzmmtJhubXBNF6GC4wSRnS3yXu6Zq9vFoXSwEWQ2j829KDxCcvePixknrw4f5p8ewcEWVa1s9FKB",
  "key30": "5EdwnK441UwPGBxGvEfPrEph6wQ5te4znEZHoQw6vmmj7ueBUfSoESnsSCQQbiZ9XfG9Bnv2kGFip9dLzpumQnZG",
  "key31": "2fPA5r5Bo9BCUN4ajFEzDSPY2Uz9jvy9Kng1JtLQBw14VFYbdUPHZJSL2LwRiTFZ4LxhVfBobAcEffpTSCmdJduT",
  "key32": "2SkA5bCydohpbN9mad3WfPo6ziCLtjUMVeU6fMzfdrK79u8YMR83fU6D57Z9qgAG2tQkCXXPtdWFXSqeCtPi6Gp",
  "key33": "5sMaMpgDTYnBPqkBneLwed4cJNqWBTYkMwk9bsHX7zUHHysSkNWkd5uqAWyH7UbCNfGciSQdd8uDJCz1p2YLdBi4",
  "key34": "2u2SNkz2GfeCNFLaeqWsHvUqea5gGuEBjYwRKm3rKR3FEGyk2TDKJwwht8YmMMSViAaocdLYtVboiT5VozRTpLvE",
  "key35": "5Upm6vMyqQLVvgGrvgZrfj5CMUz5VjJHZcMzDP9cFJL4GvCRWgzQoXT9toooXhBo6vF1wffSa6Z6TY2R9YixPtVJ",
  "key36": "4hctUMwZkw2eiFY6RQTQ59gDxbpQ1yQTRX5JMNX8A2uYh5aTfd1cuEnEANpcDoSycAxYboJ7aLrbiyFrWVCfmoV9",
  "key37": "jJakpR2x45mc2eYMi1HZf69g2NkbwxNf36KaTdgzF7ivKVeznoc5JFP6Gs92ENUKJREKo7VNXFbDgYbuSTYtCt2",
  "key38": "5WFvX6TTkvhiuYBs8x5zij7hPLcKxJDHe8nJNXaunUtsFWNytL1tUHwVE6Gv1tcAnEdM9Cy4NRFHRXgtGcz8BiWV",
  "key39": "5w42DxYkTH48JApmrAqATHcsiJt4cPDcfx7gzJcTvyh54rQiB1W9Sc9hcynLg9PAFtEM2oxhEd3jPwwr2JA8G3hD",
  "key40": "uNnZ58wNMtPwztgUDvmbXcgydeHJJUy3KYr5UxSPUY4RvAR2Yxd7MTgbAVAuqMAUzcP17twFk7LzidRk5vPXqqZ",
  "key41": "ckb47kuJJreKP1J9ri1RWghF5FjtGLt6W3EFoT8X51bneJKkuVSmXKkNPzmDABg6FRQBpkLwTfqvRTomgmJtCUz",
  "key42": "4LUV1bhCRYULBftkkoHmoy8BhWsxixo2CDseamDnbQ2MajqhGF6UniZc191ka23E9RbmHCek3S5Nu1oXfBkzCZJi",
  "key43": "466jxjPUtH5aapBoa9C6KniDyWuxXzaKtTDLPosCXpB9axCT5tibVdFNGfuqrPR4AZRaQYNeHQAVJa9EpPZARu7W"
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
