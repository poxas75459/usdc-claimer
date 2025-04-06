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
    "2K7tr8t1KbuBF4reMDeY36tHSXfqiTV6csUfH2MWbuGNJiRMofTGvheWVCSZZK2S4zpcvfhfxJTM2mAoys7Lc2u9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JC2WH3hqjZunCaHYV69oRW47wSzi7fyxSeknJDiJVaH7mj5WonsYoU6Xw6aVRM256xhFhKeUHjSyXsaxFmY2wQP",
  "key1": "4u4PJnUSyovcXpCSwNXjJvG94hpfzTNjzdNzzpX9zgQuxJu1PwBwaDQt2e5D4V7stpGbbqxCvAMWZ9VFJKq5bqT6",
  "key2": "3BtjLCvXYyCR5krv6nLUnSJGw9uVBUMVrhirT1prYG2RA3h6wyJaaTFm7QegtahrcD2vomqPv3p2bzMWvBgVuCTA",
  "key3": "Syt26832rCPcdGnP56xFqU8JvZmfDbww5cwguqqSAMJjMoEvnrKsLgRa5yMukXNJrJz4ZciX7DB4BjHMkqev29a",
  "key4": "3k1ScxKCW1ndLxw4kBj1PHZXo81SqJnY5TwHxaHpPBhxwfLxZiK74KktSMm42417Kk68yw2fmVsTCgjYbMmSCsQH",
  "key5": "2pzkxthMS4eDUYMPwKS2VstixB5S8oAC78QDNtUwrtiwXCRgi7CSLEvtm3ALHoSuCEUaMAJQUri1XvnP451x7xq",
  "key6": "2GLjQQnPcdJSoo6ok7mA8G7vjHuen3Jh3ig495uTK9vDxSZVfscLrA1hFrDHwPow4FgxpdmayXkZ2z6t2d4yEhTW",
  "key7": "37Hq7CTqdwCs5mT53JBzcuRNa8XVmqGgSRmN6rXc8iRB2rg8JryA1eCg6scC9eL3bMqxpUf3kxVX5QmyYijHSLL6",
  "key8": "5JejJ1g7CVBfgucPYG8w3uWd2VrC1GV69zydBxdf9YKPsT9YFLM6i4jP5FzKnmQSCF6uXhoisdJMCbZEYbJQgmu4",
  "key9": "2cL1tmuHBKgZRtYRSRLL51rjPLzSa675vzgKn631HtBPxmL4qwv1KroSJVXuzfmSxZsqgCWJfNwJ9ZFaJgzWpHt5",
  "key10": "2wYmt8ftC67Rh5YyFWyQEBwgdaWkPCjdtUUeoUkMhokwzsfkL3Q2qJq72DP72yMPXmAr7aU34uxw8gYvrzDXcJ1M",
  "key11": "61ZAmnxQDD5XaWqN9DYHyoF4qYo3MfZuN8ys8Q7zM3T1rfmEycxbtXZ4aqHF3GJsSgZiz2U9AeKHBbM6D2DGtnJg",
  "key12": "555yBGGrFHV3ovajkTABmMWviFBSwxnQmcKgLdpP6fYiMDkpHVYnWZNoq6SDq8rAWAY4TNCFTWKaLoKZaUxSgDrr",
  "key13": "4SJ24TPucJNsDmu4NZmLjTzDXdsRVNjaZ3pQiBYFPzxuhd1PYmuJ6QfU5Bgz7TK14ePvM7Fxt61vJucLyiQJXeAB",
  "key14": "3RNumR2To2L9N7MvzLQUCfKHJuptrc1yCSrBsTMShzS2BzW7qTdfQhE3PLPsHEi2CaWNsRLoEB9mLGB57ivr1wxB",
  "key15": "2d4o9Qk6B23NLJM2wSHu6PYtKKqs4wzjWqzbRq3YYzf6HVA8VmZ2oCQUARBNyGoXTTGFetQ1uZmKUeqnpq83nieQ",
  "key16": "3saCmc6Dw1qjCTEBtLVqPaAPDN2ZjMQb5ZeZ2AJPfKrdBwxLoTyWmpnkzsTFpodZkbwssLkU6buJM5ayX8QRrAwg",
  "key17": "3nUt9xPiSQ5ZQ883qecRJjpwJ4p2aFjGqRzfj4DeT1j4p6WV1gugqdKVx7bAmRvdkYmVUnLVNPskEuuXSLdH3w5g",
  "key18": "2iHvYmUgMfeMs5UhKUGViCRjDEmGKJKkH8LtzHfz6dfRr1JmEf8SNikPbHKKWW4wEZadEf5duPrTjZUsS1QP8qeN",
  "key19": "39GsHoACyVTVfY8ZUUAcfRrxVUDUY59hEdLGYGWHGis4KfJnMA7dkWCFyA3jnBbf3mciMhg1QgrnyhzUHvTtDiC4",
  "key20": "34R9ngatrYTs52ie1PceUgbfNMnoWga9Mq4hc38trjjye5hPSLwoBFednAfxJ7KTJa82tzVnx53rbchuABKCn5JT",
  "key21": "5sa9ByBep8XbGS71KdFNEKDTpRm2vRzrBNFTAmSsxwa6pDk53ybHrA48BJ5TQ976TLvN1qm6jwXAHTL3GRKzBCQU",
  "key22": "41wDXvSvCuti2rtayb13NqxQPvmY2zgU74BCpGpxbd2hTYHKb66r9yUjiiY9a6L6dbzdJW4HQumHYGLqRgr4fAge",
  "key23": "3PpYuR3Z4SnFXgKStmtT8Rq9y2ff3Tia9FGcvc1ZnpiiFj4u6u2eY6M2WXuTm6bPALiAuYi65MSVQdZKkShiB5MN",
  "key24": "2qU7cmvucqfdyjecPXbPVFz8rsUGvHGrhMCXnsi5gKayk9pDhEBiXB3eLetcUeakorGgWYqzByLZ8jjWbadZFs4F",
  "key25": "MftuHsrGj7WUJuW6gAkJbeN3npWFVEUf32LaDTCvnX5jSbHGkmUcMpTNACqfaHSQfo8PruNyHtz7rfkP8JejBCb",
  "key26": "3AUsuWjnJ4SFtaeAkNvC46gomWgvd6jheY1aPD1HnawnzVKmwt9AnTaQTTrL24NWjTTh832LtFznfj5U3bHgVxCo",
  "key27": "3BbKdDAANBNqhup7ChbqQK2iZknou3idgubQtvc8GfzWYwtvcUy7J3H6J2Yuz1cksxYXZc9ac1199G69h4PMt1nE",
  "key28": "65eyEUN9fZaXxAhr7mnNKLzEaSygNH933SYLcXUvowpioNMC8JamoGYPBExGHAcx2XCxNHvsWXPsDCpzb7mMH4AU",
  "key29": "4Xj5WV5SYzKed3VnkFbjSsKyCpjMf9dxY5QjUcxTTdLFSruRdpNL5LQApSobcLie9NcWdocHmdHCqdoyAg8sq6Rv",
  "key30": "52x2wr2RDzj1i9QWcxkEiD2fsgC7tdNsDMqGZwERF4ZCDTn3CVATXD4atbfxzWAxr9P6AJynECvKGjYYp6Wn9Fhe",
  "key31": "4eBgS75J3Ds6aN5YKuwem6B8CMKbmjdKtwnzBrCqNaTN1rXpPimpZ7fbFD1JzaUd3ceorSg8Qaw6cbQ4XrYN4TMP",
  "key32": "5sWdAjN3fhnZ1EYboPZY85DP7irrJdUmVShJE65ZfxMfPaCA7McHkw6G2LPDH7yTRdZhuYGYMu6FmyYMsGk9F4YR",
  "key33": "48QRVZbw38PGxNAQjeTo7o9ZGqZwYwrwqAVRR5ofAvctqF5CSBeT4xDoPP8m4csMTNWZGxM8eEeGCGp5tayQ5CM6",
  "key34": "P7FHWbpE8T1rc7wH4wqQdhFUEzVUa1mvZwYyFMWskG5dtdQqdrYFZsePRHbh6Z9Vuwum5xuk5jeo5zXgBeT22xo",
  "key35": "4TN8y6X4Tccwdz9eCaBFUe28Ef9oTKNjoKoKXxFPSaPFSPP8GpdabuPwr6CdseMmhoCikhWsDd6mxJprByaEgkpe",
  "key36": "4wyj22uCXtzZwWiLFKh6N2wKNXZ1MQmxowjk6am7UssnL9hw9kSbzkYQ3QfFvTYr9Mgj4W79vafkLxy879g9KwVp",
  "key37": "58QjWNWzQ4NVAT9aTeJnb2ESdkgjFRnKHybM1yjLRtyMVvH4EGaCqvJ9YArBQnoxkjpUQbzM5mv6kifbPXjWUtar",
  "key38": "vU17ev4dd76d7enE67f4ZgriHgL1QRJ14eZ5FQCpCB14Rw97X8Syf3W3tHG77vh4mwRwQgkXqCr6KU4z4KoQHjJ"
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
