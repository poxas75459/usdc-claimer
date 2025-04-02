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
    "3SebdycVZJJtAX8wbYms3XQv3YQb3TtnZN9xQvekvfWbXdhA2HMu5JWjDsFCJLD6UKRV3YkPNvivXLQ413rusuAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLWe5CVdH4PN3Hi7pBKBjNtMgiKwEuMFUHidjeuAGjdPzUY2snDjEZxp9wDghZ7fJhWEz9feiqRYqV5nNZGEXai",
  "key1": "2JdUfNgVrT7XEjqioVfW4dom3U4e1WgNVT2rFw2txETvgYowEKjV4vM6Mn88BW1a2SxqMLPjXFbMPk6AAUR65fau",
  "key2": "2MM6FsXRsDy2Ac8MxFUjyLyP5yTUNirQFQZ3p4naxV1ahUvHCEkzZCuVmvqVAVxXnDLPyhkKVML1v6D42ouQfBjs",
  "key3": "4oUK3VvYZMp9tmZdMT8NP9VgUQ9naZGGJwMq1E3LP1k2LRGVx4y27SViPZFW9b6MWAvH5bSGKJmJhYLrrufzjEHp",
  "key4": "2NizxbG4wGkyn5bLbjE5j4P7WcukCeckupzXuhAsGSEatpCAcrMMeMQDtR2dD7MpEmQtzy65wL8X4R5YnbFHdpke",
  "key5": "oKA75XZ5e96yhkCM3Qmzckp92hXpkEgGEGor286E6h45vtheKWpj4LZheKPDa29U6sfaTSeDBt6mMTgLHmXsDhr",
  "key6": "4psg56vj2PK5fx15EoxZshoD94PcjHj8oJp6312kga7G4rsyKtMHPyxWxNQnwdPMiGe7dcTBSX6tcL3VXFpt25NS",
  "key7": "16q2rFDnMGDkfj69Mz2XkGWHstKqiJuT5PiPeQ82Ezz935qkmE1wPrhSPMjtSNyG8XDEHXNrmhCvAvczLTn8UjE",
  "key8": "2QTkX1RW6robSmancZ27fEzATH2odMSELVCvqE8Sc82fg2dFqdzawF9ETC4hHJhGNVU2waGs6uCokSX95Wsts1w8",
  "key9": "52u5Fo8G7dfB8owx57EzB7FmhCvEsvvJTkygXC9eT5x8F9csS2hEK3TEAy7dNNcoxfR4sX3yxt8cvLDfe5Kxadks",
  "key10": "45Kbh6LXwq7LXpvM4ohkTKx7J7M7g4PH5UKqDbC1MRPoKb3Jb2PKgrVVh7W89QMryx17414yHisSpy65UuDAxEk7",
  "key11": "2gh4SbV1JRkf38VfPGU1fpZn1AJfDVQsDQDGsHkHgYwz5MAaVTBGpii9Wbj2ccDC15Lx4tQDANV5Eb4zfKN91iZ7",
  "key12": "2pm9PfZ2uEQ4sSLxX7wowns9wQ1EmdveetRT33tR7hmnzeTKXWRpQ9teCyTRxY8SG8bGUTBn12UQNtUB48wyNbqE",
  "key13": "2BDfzskHwWfYrMjRNPn9LRJsq8inxzQ4DX7SUykAsztkj3daZhERGjR7uVUzaasYEthe8kmS3Zq4EKwDLJghRXbq",
  "key14": "2Y8LSb4Z8a3t4djPboZ9eu6fNwaRUMxUBy7opRdnauxgLsqU5o3ZJmsdtm4gcTnb3V9yoB91os87uSa73cHbygUj",
  "key15": "56UtyJBKP7WyTfKXVpnfvxtRdvdcCbPetCcmtAUQY9n4PNRQGyNYLuidajWY83MWX7hAqB1LZr3bpSAAcw8iyDCf",
  "key16": "58ghMLNjXszDTqBf9Yo3ennWsRqmhu3JWDvcHHJyQeduZp1KdHucRZJFJjpdR4aFLuGCFM2DsKEeJZdbwvXpyeRL",
  "key17": "jTeKUc84XHxiduz622UCmxT6CEff8gGSYnTWX3PhSpgu4cXMWTrEBZs2T1hNE8DKSbMMuThRNpyQke16Ne4Ln6i",
  "key18": "31WrKyMyDjBcsrVAEw5z4Qh4MGp4MzA9WMjUq4MCGRVSu5hi3nJwxtn5i8SteeDioTCBwd4wHPwVCe4KTyNtmgCa",
  "key19": "313fcGyWpu93nKyLKcMr21hpqtMwEUaDxokx3Yt4z5AiXB8K1C7QD7xeDmx36LS4SU1L7JBFAzdszo7esKGaQxGk",
  "key20": "3aDGPa2Xdn5QBndhRvvUV28LGuVD39Dap4mvgxS5Akrk9GTM8APpc9KFkjyjPT1eigiyqgGVJN98QJ9EmBgi2Zn",
  "key21": "ePbCibYcR9yhytZiRcHKr5LQtd53nnyHpPsRYZPce6NkhixMgdrNhQnN1XNGas5cWeJTWeQXHQg7PVEG9ggt2Ux",
  "key22": "5dgjmCY9Lc8qEfq297Vt3otZxH4MPTq6adDd4cvTGu8v5jiztjiDb6JyNX3gyZ4U94WzB2FYdLWcsQ9g5DnQzjwN",
  "key23": "5iJ5smuC1S8o5aKozoFFMdRirq4fv9WWa8WnFfh3t9ybpKzsbVQgyPMU1d6bHAYkbinAAuTkGCz2ySb3ZSrA36AL",
  "key24": "ot6gN7BBTBeK5XUAukmHyFQDnrpCvNKnpo9uwHSdev6YnX21nivrxCdzFsta8NaR4zwZok3qWJT2qj2RwPTXZqW",
  "key25": "2G1vUmkrWTFD57Erdu1Wn7F66amyGjASmEuf3LFLnjWzWhMq7bGkm9aCJGESUje77gBPyuMZYi4TpucEvhVJ55FW",
  "key26": "4doQRTs4JYdJqagk3qNy9mrdyS7rJKh5aHhfKmztTsQDU5dSJEiYaWZdBkc6HP72eexaiDDqFKxS9BRHrNQQQzNy",
  "key27": "3QVfUzcZdesaSEuhvuTGfCdQswwJotgbTjtLdci46FCSZQg3tGP4irGcyARXZsvCoksZFGh3EzZc755nSse6ruy7",
  "key28": "42HDTbGmk8T1xPEpiFHtBpvJVzqCVQwgTfMEZMg5DzSpY6bAqP1fLmQKQ2F4GjGdWT3PmegaNvSufZokGsdXeSCh",
  "key29": "Bt3F6repCvEAaQjSUgRQRYuoUT4FSRE4EhopXH2dPKkCy6pb5V88kACp95U14wEgTT2RkwzFwVAMVrZncwRhFmK",
  "key30": "2hJNmVPDibncY1BxGuszT4EAaqBC77sd75Wp5psGs7iCNeDDsktz9gfWcn51QFv1D7fGKcdaZji1aLnHnwgXhGhZ",
  "key31": "42mL91WWatdZssiUoXv1w9eApt21YR7fnvkvB7CkkRA3h5Jk8GWpeViZVrR5Jqnaq8tCcu4xznUHk43fhnfx5PRS",
  "key32": "3gD4hYXvUpabnHUoFEbPN5gvmPioGTJFcZhsgWzUE9TKCxvrzjTR9bUFCfW3gybv4UUJNZJafX5aMkqBrT33dUQz",
  "key33": "5HyhsFQJAvNNE4NvFNPJGZ1yNKR2dXfboBoRYx7ekPeaNM3P7h6ZjSP5u4Cee6FwqP2ekiv2wc81s16WUk9XLu7g",
  "key34": "AxCMLuuv3mHTpDkcqCmeLrsrbTG3s2tYctbpyhsapwJ4ELAhWPxkK3RKZEJLWt6ruzdX7smGHfiQ8onjvxJxdXt",
  "key35": "5ANTKz9LpSLxSH7ni2uyzt8zfwQ53G8hTwnaMJj7yR8dG9GUjjXRyNnv8Zej4RUfV1ybnmpjtsrRGP55UM1VDyfe",
  "key36": "2rUQAxTvGtP5bzYNd6MawXEaypQgYwyWFYAxi8bf8Fuxo8oCqhfEccuXaeaLCoRJtxt2mpaM3iDJN4WvLZWFR6Up",
  "key37": "61P9usc32JXZqFL8XVwmXq8CHahSoUPFj7rfkp2uNWnoPkRFZB7LbsWmoHk68PGBjQmVmJwb8JQiJCwjK6rs2N8X",
  "key38": "3CJQhPgXag6bn3nBkxbAw6ZWTaP8hLaomhEhFPEh3KLn6UD2SjCDxmJWt9CYuerDBxtaZWo2vvmkyHJ2W8F7DmFt",
  "key39": "5agAXz1aMnoqVwypEJHz5oTWQnkzzwTMXn2TMNpusMS6CHQe45NMeSqS1VJ43vWu9exbz2wBYqnLDHLmjSZs6ioB",
  "key40": "2nwgVNXxYNJtLrgdJroW9qmebNKMboKZieD5QrF3gbSopuTKuPmWDu2L2Wc6KZyQXVt4NUrNSytYV7Ta4g8eZ13H",
  "key41": "2UEx3P6qvqbLtPFEXducWpRgCNaCEXKrEUKFAAd7WCLCpZzZLDD5G2KyLMbdtDtsdzSRKqpZKjqfuvJSHfesMncj",
  "key42": "3Fh1zhAC2AFRZFSwYmwaQ1FrYrkxRF9C24xKz1159AFamx4sBF5LRpnasrse1mJv8kacDjbknEygVR9TugAVuy85",
  "key43": "3Gwp3JX8jdRJLUeXrnaRwnbYWnSKnnhRSVqqMnXgnTJQxCWn86YWhmS15tDTQYpu1GHAFUFq9g5nidcYiwrdZYYC"
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
