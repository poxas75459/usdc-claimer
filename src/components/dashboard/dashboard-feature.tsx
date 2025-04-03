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
    "63UNrxmJPwMcMgy3bK4FiXDuqX4HbHGcn38BWhdoLR3oqmm3Zbq8HvfYL3bYpx3AbZomLpcnDbtstVXiNxFCZskf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZhR8gByHmeGA69wvq6ZAsvG7T2GvYNt8Y1VVZ6upSYGtafFuUYSxPdn8UQ87JXYrg5rKd9bQT2ZxHB56epcRFg",
  "key1": "4oJTTM8xYQRZEmBXQTdSP74zBwgHLUMUFL9aFXbByo2Y4bZ7bqungWHuQNhf4E4tmRL15P6aRdCd5YuhuYNaiF68",
  "key2": "4CR9U2RVL49sbcijvQvKnxDZARiSTC1dWHjV2BgjXFwKLRoHRax817LHeveTYJQ8F7fWWTTx92YnbhzPYKv8js1E",
  "key3": "2TseRyrKx2QEc4p94hPnFLWV9wBCrXPDv7x5aijM4FwpveaoDb4gnqDat7ihTuzrwvtaawphY4CPo6WDQznTpHin",
  "key4": "4UdsSQ5ZpmipLti7mikJH32Xhkeu38jpWD5gxn4puLSh4Jo2sZnGRD4iFfH8C6Auu7hxJxV6F6X5qSbnBZNFuBX3",
  "key5": "2toDm95hYHM6t6Leax6YRPJcQton7112fuqfBxrReS6nWsesiJGmMgLRGHi2k46K7pgw9JB6nL3aJy7JmcqCz5LU",
  "key6": "3QinPJ5TS7mAK7m9E8QsinRcGBTsemFCfyNahYHKJw74QsVSuSq3BEN97Kvm33oFqYhBurPYP7Psj7XxDnHbu9EJ",
  "key7": "5VG7WSHzUTt3swiZ3oa455dG1Soqu1tR45X58G4y6gxnhFMEtX6XnkirUXX14P98jJMipAVscM954hdsmRPZwdqS",
  "key8": "3yToQriW3AZdhBFZDAPJR6BYutGwfXRBdzMrRB7nyXEXdZ8PBFPoWDsYYeFoanVX8MP3i87hq7RBxudTgARjwdNq",
  "key9": "5HfX2Ht6gJXGZsZSofaSJkbBS5ryqUT7TCGJieSmFXHw8XGHSEZRKGMMjLRNd1xYYgegpV49rNEaby7k15daHzXB",
  "key10": "3haynoXjYfMFA7mKaJmktsn6VCAbbCm5C9Zx8TStPEKDbiMStSVQFag7DkZziCwcqJCcCWFtwpDr4kuj2qkymaik",
  "key11": "3cSX5Qqyr7Qur2EPSPVWS3k8YUNTe5TMJ65qBFWLacq8iHTqA25dQsiTLkAjpWR4S1FkZBb8xe1gfUQA52rvVymB",
  "key12": "3WtQJzyvaQtKsTQ5pQyjSy2H8NJfjaTqQkHL1VooL3Vo2QRhsEbyNb5XapeFQFxqLYXLR6vB6NvsE2ztB6j9VAYE",
  "key13": "2SZvhBDVs3ovrpp7cDPpjA3bc3LWp4BnVT7GmNv2eV1MigVRFiowfjJzuKNEdpDWSqrhPRGA8FnVhwo4FXBLP7ek",
  "key14": "3DVmJBzLtaZtBn7eg9BjjQNSYAjyHG7xLL6B2TAfbERVNDwJueRC2kTDCbLfw5v5v2bJnNDUnxoCcfqWCR7mAD15",
  "key15": "5ASaYfHFGE1D222zyDHSobk8DNg9Et3P7A2A1HwJ7KsV4dsZRhCHh5ChhHo7S8efw6EWMRYJWKZpUAT1GBWqvdDx",
  "key16": "RTbNuP8AKMEYmteVrARo6AUYW2MVBzfkwYLaYu7hyK6HZ4MrYw3aNmRBfibXXBGxV26pwoo5SsToST44YYKqTcm",
  "key17": "p47vN95omRYwuZBUn97nuAHkgw9M92gcMmuvLF1p8HcmCcCEKnnAdPhZ3uZ2DQhBStFeECp2pmmV9sEvzmU3C7q",
  "key18": "2x2m8PQinZofkE9BNkNcmzQnmR6LEaNeFiNcEg32tRharw5NbRFBFPaeRZn4mjn6h1vAHgnu9CRzp8K5KuQTA4w4",
  "key19": "3YjuL4CWd6xEJkmuc44SYKvwYciyHk4nDamM8rSgWbwt86n78pL1SjrtcnT7A4uNGx5gqhkWh3LKCm6ZpQUraxij",
  "key20": "2C8SiHnGbT86gGRHCu9dnbB9FeSQXEsLTHYjMaWeQ5ynA28b8MbEANyUM4Jscwwvx8ihQEgB15475QgjoXvSUYx8",
  "key21": "3w3vU7gZBvmuXWssYQrqz4D6eAU5gyp55EzuRtyfJDbkDFyaUkLdqvjU1a6C8cTjqurbBPRgNRF2c2hok2J7boBu",
  "key22": "1H3FYjgFrQknW5h8g4QdZizJXFKbcQzUZyDF416tZzcmth4X2H1LPmFHLMuY6Rqh1MJztkTiBRAnzSLuqw8Q3gu",
  "key23": "5DQHZpv968VZppEgMtDWqGdB5Lsvca1xD1H1Lzz1Ar7TxNqD8FAmkAyhM3UePDZAWSdzw9UshvNV4dFapFJ5YmgF",
  "key24": "rX3EEqJVupuVMagmFCssrpntqMjeFoJz4i5JJ7QBUK88oFeHKq59FSxuiCeVhGHArZgRsCyqFiu9D7qsJRaWo68",
  "key25": "5WRpjKzJg2zzGDGm6HufBjXkjH8vEwcRp8ymhZbsfag7NrgqpLRrGq4SFxbF4o6G7oUcyPdosV72qK87wiv3K8Uq",
  "key26": "hcngPLvDasHaK7XsrDosJh62mQU3Lr4wsaM4VgEBCQxdRAbra8EtckVtNDxR6EbcJSd1rSuww44HvFTnMmVWMgC",
  "key27": "aAn5QyMw4JSoXLz4zxemBrcLQoQBLSyGk6VinZ5SGaUdSMmuCfqyLk2MPbYBwTiq3nnPaauBKRWs3ufQhHx8CzC",
  "key28": "3GAHHQaNNQ3oZNv7UBtM8mxgufDtUyRvZurobkgXafkp9zo1n3xLNnSqFpGHnwSoXjamBfqMCJAo7NsAfJoJ5jP1",
  "key29": "3uDBFQVMyDhdfV4dDzd3vD3qsXEVQAABxEhxgPNCorp6pwUGbih1thkkrgMKemtYDipvS4BNwn7eU7wCuhwg9A3F",
  "key30": "5XD4vydSCmzGvJtUs2vswRBiiPDahmB8Y32bcWy69qvpNyRf761D4R6nhZWd1Bv9ofj71Y5b6oyjprYPM3CppSy2",
  "key31": "25Spy1qib1JZsBF8fvfy7Q78vUkjfkn4Vy7DwwSPiicBoPSvfpAfE3fvPTWgQ3UqQcddkFjPffMocvLUTkVU4Cjg",
  "key32": "FLnUENWTpt8PfyhcRF34w2FNPafwJExLib4Uti61rCvbCPi3o5hvSVFsgbquEVKxJcLEqxAcuQvjY75w8vFwUHB",
  "key33": "5P71zfbWf24DZBnFRXtUN27F5KDpXe9ayeZ3Wnv9sUGB1XG7NZ2qyHT28kTqpwnPYiHUjLf7mVgin8Fk1Uk1D9Kk",
  "key34": "5drkWKaS3CsqCRE1bZh3iJExENoB1qzsSLE5GG5kuK2yNdpxci7Sug2yUoPDbxvugeKbWmkGTZBir3STSRadAMJs",
  "key35": "5r6Sp2kiej2t16spXnoHmizWXwd8Q9sQYdQ787FFTWueE1sL2bzHf7qjizBmNA58XThKnmqsVLrnxpssPveajFmr",
  "key36": "61CPorrZGLUjAXFixrg7AfyC2jm7kxgD2JwV1jD8phPyxXsW4f2wRNguyRdYfgi8XYyKE5u4DVQ6Z9kaSbrpk1un",
  "key37": "W1wEeFgqoQ1pzXpb94SFPYfqLv5szmbbe2SbWRYP55DTJLC3gvEge11MHejyjQLtzKKXBDdhuChUZ59djZKyoLg",
  "key38": "4Z1KXdXhwPECzBZYx7UsUaZ2MJR6TL1uVdF4wDEeA14QNeGQAUFXY6Le13wa6SqGkhJHrXPMZxqRgXfXKhGiUanv",
  "key39": "2m2LBVwQJD7wtugRF2LSpxWmj7ijgTeawZ7Lyecfoqfmq1aHiHAZ2cvsD5ZpLrZQpK7fd7Hxv61canfMLt8oXkoR",
  "key40": "3SJa1B2iZkZwybbmCHoDpeAUcF6rXHPVfxNsRV4QcFvwy85Vd4fUdX25V25TopASNaNdqsw16JC7BS1rd36Rq5Vn",
  "key41": "2Z5Z8ETDmXCjJBo9DDAPud7qD7f1pThgtgYTCygBkKHUSXJEPBYFDPEBWenEC6UJy7wPZgs7tBWuPcHfbUePBbCX",
  "key42": "maRTK7YXDuAcrvVZMwDiNMpzPSxL5Au9rQkipai1oDzM3J7DDwFjNkNrVZjFNCt7rHCUsXEUrBK1u8o8FSRAnT4",
  "key43": "2CQXsyQnMkn7gw8gPwgZSxogHRZ9sHoveKKdGBusUuyhPCRmuX4S6oVJ6VV4drFUEEw2f7iWBMYpkAo6cMgELKH1",
  "key44": "64LkhVCsbQq3EQzHQgoUNBKBb9P8qSPAmMxf3S57r1TAyLTFwXyN5hb8JKudNpjyg5ENJYDKg9iLVq6fq7pcqk4t"
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
