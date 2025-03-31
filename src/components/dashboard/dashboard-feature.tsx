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
    "3WhHGrx7qfpYJmB4bYeb5wJyGzbrN6mX9CP6BcbihV4FRg8mpNkXq48fSNvJPNRfBQrEhKoCUFdRi3tBRzmEoeZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x3zSz6xF9U5kaEgFpjokd3yub3bp8oFbmZ9ktgQA1gaxVJAEmFd9Uxta6wB2PkTed7xTsnE2HWbxu5XK7NXCfkL",
  "key1": "ZGdF9j9ZKEdEMM8jDFgn4iwUSRoQ6xZYW7Tn5TJgBjDAQruAjbLFV1aC5RxkQ9qzn6RTHBMzEV3667Sx85mGxfV",
  "key2": "377WaQwsLiphjQX76L5JzgbsC12fji1nCz3723sXUbNEZEUkoLsrKK22DyXvGweU4XGme6TmfT3kVWeq6SBV2m8h",
  "key3": "zsQ7rSzrSTZGBqsKe2rDwzw2FSCueaCsopFkpjm98y8uAVqmSYtw1zz69Ph9eivwXNpgBTZ5uCt38z3HfWz2XL2",
  "key4": "5xxnCXLeEWBb4zpbqrJUUp7EM38aeFHNiUjGqSYKjhhiGuUVrYNKQjcV4Bjpsn9FS6HMShUZ5CGbDxvZgsq4QTMJ",
  "key5": "VZTRmXKHR1MMfrugXxg4raWWctdShFoY58bLWxz5fmtHjVNC6Kds4Bwvjv76KYN2TwcZXaatNYc2xiCqPVmhktR",
  "key6": "c67rcM7QkeEbGzNvSDtSStUX34gNwvbYhDKfgeYkS9t1gzrW5dkxNDAk6UGQvvm6p4eSzaBKunM5Z8U6KA7puYZ",
  "key7": "3iZ8MJSDfvQXmndFR2etkcQLtxi7CJbPdksHdSbiMztApRhjip1b8yeGT8SmLFtb8wbWU1UX1KjX9NtFtA6MgMTR",
  "key8": "ZoBdKZSeSDiiu2C6DQeQ7wvJgrSGRZHeb1VHF3tcuCL6B2xAaVMZ5eh4zSQBXAoqErp1djpFtX2cWhhAjuPS3cN",
  "key9": "4ESkF3wjRv3BSZmh5sf3aZvaSxp3QfB1msep2NBw4QqsFLotbmgdVUJDh7GUn2vaepoXpxdR7SVNcCSrR57CojGo",
  "key10": "5AoMQpwMua8A8HT1sAUuhRdVXun2U7Vy22XD2pH2Hscj8YxmLnrCttoZkY5cK1sFUXC59Hwh3Vbjv39mvdMxht45",
  "key11": "5zJiJtBqcs1sFgB7227Lp2auzUFv23napFuWx6QabMP9XEihWySUBzzZJm3Wk5qtY4u1NjXVN4Uo4hBrVipJCreT",
  "key12": "SqhyzcsCXbZhVQyFKzszFjB9ptqwbTSuxLJDdqyWjTHYWCht24M7JKZNE15buk8wayobexE8RfiJviaK3kwnXQi",
  "key13": "244cGo6ukWcurt9HvkC7VuVtyKEpPV19eQscm9gQEid9RTRsDm9ijK74bcvReANFGQu6LyHdnWNnEHADMq2dMFC2",
  "key14": "3Yb2LfUqskyfLE5aYMtvMSZoMDpJoAHCyQaLqxW25MSLdQdWsVTegTqLxTjqu7KZbzKjM1iZjcBtnemLnGGsQ2hb",
  "key15": "32u7QNeQ8ViHxpeHFLXF81qpYNdxaHbPMbwvQYfTT8k8F9geHDPTHnWdCuCRAgd91sdRBfr3WHc4N5jx5hQmVN2m",
  "key16": "EM5fBDdte38xWi7Zj19wwnQtw2iFEBvoKUMtDaQDS8gftvAawU4VY151YPepJ5stCPd3bxWNzLj1HtKMwrCasGF",
  "key17": "28PmWydJKhZoUSXSdPrA2wovbcx2mdrpbNK9DiwiGegz3ghdqqEZbJ8x8UP8vghQZhk3z8b1dyXtstPu6J8iQoMd",
  "key18": "H9ShvdMGdz6jHD7z29qP6B6SgyaGa6xwDBF732kb69AzYkWMhoFiccM4SaqLT3Tmmc1XfHA6Q9MxbxiPhUkNRi1",
  "key19": "4t4DbDGUZ64H8VX3j3jyAbT4yu4yJUcRakoBk4zp7zuDHFFU2JCm6pML9yUfw4SMZGwjgJN7SFU3Bwg18WpZxfbv",
  "key20": "5uonYPEri4GqeWWQbfR2gsZExMuT2iLL3AQQ1z2hP4upvr7wyzhc5WLXK4BTtf4RxAMLah6fGPG15f1S7axPDtey",
  "key21": "24AXYZrAgmBRzJwGirKfHSokzV8ifJshfpbVd8PRF2xsGoURbho5qV5JXhC9SPCPVkyaYar9BEaQt4zugebtrgPk",
  "key22": "4sAD177WxxLR5XNBZXzCoDEdNv5LGP6LANFdGsPfNtPkGt9rLPkCjHk8uG4ot5FwCwNPUywq1eMxiAx7mS8rxLaW",
  "key23": "34PEKo1if52XwH9vD8m9HoMdqbMs8B7sme8jmJ9X9wKmmEZ2Q1YBWjJQj9ZFEYSsYyMAcHDzHCAEhAHmuP47uPGB",
  "key24": "2sWzLgYRrJqsrBoevpyJ18Xqu6ehRYo37VxXXmRpb46qSzREjpXxo9p6Krbrqricvh9kXgVNE5oEh6fEWFZwjLtz",
  "key25": "2fwme6fYbxC4BvvgZJ3XpL4n9tbzDu2SyFkKCzaKHgE3gcexxx7J1NMBx9NxJFgfeoqQYNbBfieygtATe75uy8Q3",
  "key26": "2N6pH9rxXcJvuPSNTDitkWzZwKLPg9rgaZtKuuasCKGUTcPr8tdCXvN9t5CTZpChkJyuM2ysC6AY192t54nB94pu",
  "key27": "4jUHAkzQGKMGyqpWuGHZ9D91vr4JHQCuZt79An9okteGkNM58sUGjE2g5iV9Adt1rHz9f3KfeRFiJ2kD6eszNbbB",
  "key28": "RwFnZ7KiRkpxEpkw4TZqtR1UbuGKgh4cdQ7mPMqXG9s1EWSqdiPdZZ4tJrvev2rCZJGM5cNM3mXBDNZpAfrAhQm",
  "key29": "TRdjY9Y4Piuw5Bbmz1Yu4EdUtX3XLottkd7VVxcuM5vkh5f96yUcqsk3SBvTM9U2GxmjSkUrG73QC1wjEsrFCDX",
  "key30": "4veYThYyTsm9uJw8Aytubeb2eiorWGNn9zArSVunYvKG5avh617YadQb7jemH18WQAut6epTHZzY5TT84NNm9A8C",
  "key31": "4cyVfTxpNAiaMsd8CMDphuBe5NhPqwCz4Dowpnr6eRCqvwiJbmEszK63dMj4YuQkaSnkzLFdMJTywngGdQLbmX7i",
  "key32": "kiZpgdALDJ2zY7HHayeRqNXzd5wx5PGf8aPVnosDq6xq9rMh6KLw6UtJ2J834wYaM5tzH6v41uYuvnDaXACa853",
  "key33": "2CwGGKRYvqnPH8YwSqsdDzgPUtEGihssW5TbmJTuMJSVPrPCYgyuXsu3hLkraGVsxdhbPBAcX9UARk7SuAsAo7jS",
  "key34": "RwWSu4BaUd1bxQupTUtXy7BsKaGWcm8intYXLw1oBpY7XqKdCqrtFnKx4i2rmHHNR3LZgsWKYjBrPiPUVTJpv5y",
  "key35": "51iboGAVgSRUyhDydmTJYTpAwW3mRES7EGkqbUQXPNhdoM1oTNmjbdNBvKd8pj45P6Dp81nhhvJ9ykpde4d45CVD",
  "key36": "P64MfkQEt8UJGgTbC5Jv3AEy79td72MnVtWQX3FTZKCemH3dicKLpFzo7eR8NDMxMFT4mXKv9cSPCvXGHXNtWaK",
  "key37": "vQbgmsrCWkgcs568uV6YcswphFF8gTEAbRgAtL4BHR6AXGuzeVrC7xfpFN8k9hF6csUTgrkbHKHiMTAN1p6FnfB",
  "key38": "5KQ4nKkUrDREsNMmt7aCM1ug7S1JCi2Jy3Xsm4nV6eUkpJbki3KPCWKr8EpxbUCr1wP594ynYR7PG32CGxMjbxMZ",
  "key39": "5atY4r8n87h3JXjG9zfsLge3S52wLvHEb4CxhN5mXod1RqbYi2SkRnB4Bg9DjbeRk1hDowzJvVz6MFLsdvYNEeZX",
  "key40": "5Kn26uzFq6Jrjad3n2oBbEG6soUkZeQTFnDwDgYxWhL7ayQ45FTCFX9P23nk3GEAUAXNthqb4rLtGBQtfEGn4xb2",
  "key41": "4J5weB4GYM9DeTvG5E7j35tGMboDLkaLLwRvMn2ni9D6Ss1qekJnfHy2qnLjBd5TcSsfvUQRJPChdeY1JVHroRTK",
  "key42": "4xDpUeXmgGi63xcmvcduyqJrNJtuqi2tYGtd41QMM3CviQBPT2B3C3z5iEbRzgzGWTUpNdSJ1vvskyAb3Pw9rFin",
  "key43": "z5rQEvFVm4GYSFxt8EUUUS53JvYtYy3RbEQS3zQXWWGArXtknq9zcqCxNMwh6vvJagD8JZSpAsvJQov3yBiud6n",
  "key44": "2D8Uu6ofHMkhNrU16xrs4TcHM3GKudVKWiFk5BcW6cB762qABtHmgdN3mwEvDjLPxmS1XANrkzkpnh6vhB1PmnXt",
  "key45": "4SaBLEwfhcDj5q29RcbAuD9DBL5LLqRkWWZXCMYs1ei5dGwQShF3AWhCcLCe3LYXzETufe2rSk4jGbnWeHKJq7SL",
  "key46": "ZW2suAC5hSzsw3KHA7QZ83nGqLadWWp1meCS5bE6fS7VHvGqnwz7sx6ZrcNw2va5ijp7W5CnCUdASQLGASFkz5a",
  "key47": "3abs8cQk7a8eh5SvrqzUWtGXZ21KrtQUc9TbVEE1b4FioY2zBM9xMSeQP5hJof927oTdwjxenMmbHoQxFWSc5HBY",
  "key48": "4zFLPag3Wn5Xr3E6dwWmLpCX5ZGyvugRshXSHkfgQHnEF4jUBqZFq1QhA7PtAKsTDF5TixVvb8AFfLSqBgtwU6bg"
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
