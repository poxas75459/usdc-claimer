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
    "2b74qagVYy5ju1GKMmMxorfWjWFTaTxcBvfp9dedRMZ1kjggtAPKgda4vZYCXC37j8Rxw8YtoXb6idySQoXBZ4Y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64zvNvx3hftJ5Qz6Jk7aqKWc788bzNJfKSpPQcL8CUEAzatWhR5bM7SJEWma22gjwYETrMCGEaq9nSiJVWFdBe47",
  "key1": "5NfgRXJpdQWgv6m2HN12n9zM5ZJNvePiUkHHvfvAJbtpEAUB57ja7QFgi7ArA3UeRUMx51NRYn3h7bfjDjCNimm",
  "key2": "5G8VHD9LLhMxmkf84m7cnaX4b46Vu2qMbaRJ9X2eGke7mqgRELYPVfSC9qqV7apzFV7FFw4NZqRK1f9YLGjsWRBf",
  "key3": "n7PHtypYZqdktqhmWwRgktcd9v2KM1gmfj7fPDLxMNv2DxnBGLeSGy9Qx4oSoAyn5ZAWJDc31UVZ63LvdjuMMEm",
  "key4": "5CaiVaaBb3etbeUwE1MCQzRRpfamPtuqDJE58r8iD3EawznxDwWuSdwHchKU7DX5tQeFaXKfc92N9xikxmCEDcQR",
  "key5": "3a3pp25xEtyzPix86RuHcJNeYWvgxmZxhseRF7Usjt7h6TDbushMEkttNgL2P4f2qsZKoXAr45wj9ibsUr89cCek",
  "key6": "4hv8D1ZbsALHz59XsCWKAThwrqh5B85CdWzbCSrfjtxKvgJmmyxy1irYasqRRDGkxfrzAbHeyLcQJ9hRYHCmYd1w",
  "key7": "3JRbiuD8xhw9QttdBhSc9mWBvVZ1kzyrHVjR2arseGgWahLJQcJNzC1DcgneykUc6frArbybLUqLobk4RJUnhzwE",
  "key8": "3QJCcN3d43dq3YELD5jAbbEzf6hPuFUZvbhGhUW5tX4zCqWU1SRbCwVJF6oqHWedJbCS218GUYtAMQsSk51rNjyP",
  "key9": "44EyBjPU154yPoFJX13jFtVGAvcANDj7Qq5c66wYzizApKDQN3RqAeMkVCrde7KN5gGk3ojoAGfJvoMo3xQkT2zp",
  "key10": "4heAfwpRERTRCG89dS2p6pifN8dniTRdvGAKcA9a6Jf56hbvVbzaTNipcNznLeNpa9i1Kg49eXa62FNCZuFH4r9u",
  "key11": "2rFEW3Lt1L7W2SgncZG6rwc9zc5SoUrKd7vPs6waU8wZPYaM5UUN4W4XPLfpv3HCM6iz3hDLfchSpaMcp2fYor3",
  "key12": "3CVV4huCjdr3A6wwmWMoNCHgXc9ompxaJDdWSSqwvaKzacBjmPRZw5Hk7k63NxRg5yiWURBXSLjrXEmXwUjyau89",
  "key13": "R59HNVukVLX9nuLL9M9smSZDBAJJqBVhRPk1RgUKT88THsDR3bEnhzhYjEPzChAJh6vsGAmHEMgnL98nVBUBWQF",
  "key14": "4ra68PGWA4Kequ3EewaXBbxRk53dE5m4jAZMNiJjPwdkMQTcqjQCphtEDM34rx5YNFSaXNDEbJTWu2yuf28yU5gZ",
  "key15": "nWGEV8tGFYhr2ajEwCSLNrtufw3rdqua8FHZsPFQXT7Ho6UNB9FnnNxCJ6raZK498D5AWbrrxqHnvRM2wJUHQaN",
  "key16": "4wVwisQ6d6wKhTycGUcCuoB5kwsfj2iqwWw4bQ9UarMpCm2y4wdHXCXYT9mvNU1imTJXfZaGVKXHuW7trWLfxucu",
  "key17": "37ixpiMDcnqBtYcFtfRN7ocyzSzVCD7282AeM4Jn3P2PHfwvMGjhkBe3DUgsmgiNjDQnNy7bKDYGJBrHeeQnVfBE",
  "key18": "2iRKLRUzpmZBKSV5h2Urqsq67L4BMopHGjtSFme94eSLLA3FVXoVgM6QjtAzfbFeD5JokMZ9tAey5wyqoxojrRkN",
  "key19": "4SbPUtbHZNbPQUQLSc5kBSvu4ZBarABs8vLPMELCme8VaYbZvwbmyqoQYgmwbkU4jaeQU5QpcCAtPC4U2L31HaPg",
  "key20": "42YTThNBaBCENcpVwHkEEkXocmEFY4UQkmjKU8YyaZYGkj5pf1zYQypc9KeDB3GoFq5JkXT93mCXcBPXsKRSTees",
  "key21": "4EhnH34PviUpVDeuqXuQUgyqiFYxmUxvfQ1RBRuicKxbwXAi1cUxKPhjxks6jcezUHagje4N79Nvz73yxEq9z55Q",
  "key22": "39BpQ6e9E44n9MUAPpQJZ4xfL8dF7NbYpk4mATho5qMvoLFncvTGSE2EL75DZSEFeLuDnabx2FbbgPSUzrQyRCK4",
  "key23": "3zhxee3zDBfFV8tsUUSMnDzGSfkH3joFanCP4VLfdGqowLWiLehcBSTbvfHCN9XyXjdJQ3Sai78rWBDoAe7HJPDk",
  "key24": "5vB31ZL3naajZ24nZdMEZwCaYSAPedKawSHe1xkrZTmv6R7fLsgbdKVJHJp6PRqr1VHr31hv1Gcyte5hzJgwnHdP",
  "key25": "2bc81jDwMRxkzNwb3VdsUx1bieeSvPUgoBZHa8cY6Ap2JstBqAuxRi5Wyr89GupGFCmmw8QoK9Naeyb54d6nadkj",
  "key26": "4n7gG97MpgjDGnpV6VNMaXcaBnaj13BTmCPJG9LUZ5SWfiF9cqJVQcYX1kysCUSmpbxLw3szaGPGYHr64zmTdwwK",
  "key27": "4rG8HMjGTQMBmsFL8MurfQrF1WgMqbrASVsJeApqYvo8WGCLiwWuLF4CDBQJBtaQQ3YMLzsbjtVtGB2RJQeiohnY",
  "key28": "93huNYaqCdimpeFgjtkd69nyJs8uhHiC3MhctGeEELgspzcF593GtFh12BAJK92gZjUJEmCrm9mVj5DjrEuKdUY",
  "key29": "V7iRZ8FZCb1bAd1ZRFrWKu7pPtxrH8s6DNuxcYJdDb6Be6UTe3x9undFe7fwMaZZWJ21gruvT8Rqk1kG8Ft714E",
  "key30": "4yQ32xCei7SctbaZ9wn22nraQtPj7mYxVfL1CbTbL97wpRvKRFHn17v97LUqXSck91NJpZ6unsn3fHtYYBVXnqK6",
  "key31": "2jhZcVqiL8WeaSJCxAHjuUFZn12AK7SUUeVKRXjyhRHkXHAet7ZevkopGNvrquu6NgzNuD86XYGkfgX7G8X1XW2N",
  "key32": "5tPutYNua1Ps5fe6PXxuKYxcCyb2qMfQVQFj4YQmjGwCtSbwhLfuoJjojs3V9hhHbs5zHZgVsoqkhdH1PTJqqYFt",
  "key33": "Kiw9svKrnfSVHwZquH4JKZA1YEx381oeYXXgvMguiCnHsiBiZhoS7HmBkNZZnixWmiRTEy5KqgXXE39cUGaTma6",
  "key34": "64PRu7qcSubCXU6Xq4zn3PcS7oSRHzjnp4cC7ALEkLLNCsxEMBugeeCxBYJcxV3fGMdWGzKQyiqXRRqgD1RY1SEH",
  "key35": "h5wBh1TtzmwS7pes225wAbQe8UaAThXVpRuE9Li2fptNssxHTDtbKun8oaE5GSvmX55VQgiJMJq9p1uRvf6FESd",
  "key36": "53MardsjZRE4PReGBc216MXyhdpV2VmsGAkodynCHQ1MQjfPjZxQJGtVT1fwLBgrZwE8znMqPY9HRRRz5HNX79nZ",
  "key37": "2DgCMn2kSXFuW911MBZEjpN21UKoMj5B6m86ZgyW4sWVEWKnoMjjTkPb4x8j35c2Nc2KkKzL45rjmbRGQqRfJLwW",
  "key38": "4Bpxp2GFT1sTNsXoG8fxUdGk22FeudYMrQ2Bx3Qokd6LjykuNGgenHmWLf39HGqbXH4398ededWrQwPYjZuv6Mqo",
  "key39": "7ZwYZa2dCh9L8b34mDU7HKuSXnkhMc6jFGAk4hnWe5FAwvq1BsFawJGBTxsibXJmUAgAAuzWCNt81u53DUCxQDF",
  "key40": "2gth752nLbyLNPPi78aHrzfCHbFmkWmJt7PFQRMAcohoqA5rkndXmCTUmgA4paKNdD5aD8a6u58zXPwUk61cCQBX",
  "key41": "5yaDH8yx6xg8Q5BNBwA3qUpWxJ2L2YqyaoDMHyU4foKfRBVCXp2wertJmsZqW3q7JiN6Fs6eDqE8YyTyV9QCwf7x",
  "key42": "2H41wkxE5KqTZpXjSVvt7KZ2gQpNdd3ci1JZ5FVaDXVcGRJWt2ka7FBtqkkWE8BvvVWusHbv1sWoha1ND1XFQHWA"
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
