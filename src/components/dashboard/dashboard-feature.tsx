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
    "5N4mRk6okrW739iryd3c1oq8dRLviEicrW7Zq1vxto5uWDWMoKLvUTSdJeCzgj4d9kCK9ZfAY6A8sBnmBNcPAk1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HN4WM2fugE2ewbaMYdPoNxqnZFcqbEwRTJnqAb4Nv1WKEibw22qa3fjW2XaMBR89SPzAZYLJkfKhaehfVz9quH",
  "key1": "5hSZbvbg35KuXmncfRVJfS9r4uxSzJuRdxnQ1aXP3aFwAWzUfypMJtJns2W6LNJcdpbzL39RGUvBsUh3sSFNvuiR",
  "key2": "3eDALvGM5rbkUbqXNZhYzZmAXrSpLz7jxrEYdLVbGWGzPRFEoaCKgPhSeZvNm28xUo1LjPzh86iiDR9GXmyxbogX",
  "key3": "5eH1fqtF4uF4bZkdmFjBRPkKe9YByTs4ZSMrXRcZGLEWSg4FNuEtxY41gKeAnCMfE5Y5hw8xtsmcY9S7jETGSSRH",
  "key4": "5xd4P8h5AnyfBRtKT6NFXqqsjuRAJfNBgXR76tbZ2tYSCde6cSRnyecB6JYGaQtZLqGrhStnCqnyB2EzMeQVhMGV",
  "key5": "3PQ2yLRQuBcyfYkmyH46MooWW4ff58v7zJm1p2v9VHvGWpeiYA87vFompQVP6mwZJxZuzjozZYVFPDrhigi1WnKa",
  "key6": "4rxpmU12gjUkk2ZJGegbiPAF8P199Asip2YCSXvpLu3Hh37CBspAQ52XbeyFDikmBRR7CaMZ6h1GHH8RDtwsd7Fh",
  "key7": "4zmJbgtqcEKxCnwHWMufiH8vwwmRz8CWDUQUyh6QrTtYC6FTppiikPEvDruWst61sEhYM8gEePGfUwJiSFLGquBj",
  "key8": "5fsoNzkbMAD3xXV6fAfQXGoBUNyg1CoTTuJ87iUc16XcssmNPEMquySSPCVQoVC34GbEtqSjb7D1fn4m56fsbesC",
  "key9": "3aYDtsERSQEVz3cToRPgkLnegysZBExQLGwJ3jvAMoxeG4Uiain6vDJETMHoqPmvXzPzM4rFLeAoqKQyx9cHVSdM",
  "key10": "55cqBc96fNFByKLzV28AFsUKxBDV4roycMATzp4BALp4x5ZygESjtUHEkvHPsN232ApCLqRsYk2tTSabCKCJCZSP",
  "key11": "wHXXxcUVScWt5J3MbWLEkdH1jAS7URhHWsqL7mMMdYqAo2RnVgYrCkQURZLRPJ765ePZJb7E792Zq1drKkFEXmh",
  "key12": "v1XYLWpSqtPmsYLukBmU5QsScsYHEFrc5UjrrDiXa3DAEesHVcxBQXamNhdHM7fGKuJn2cj7H1JykcKx4t2Pgj4",
  "key13": "E6XTwAUFjReurPpNWRRTVryrHNAxaiTbEj7J8kv4RsWCdbQcEJjggqApWSN98AMm9ZD4bJbvGZPXLkUQm5KW4Db",
  "key14": "4yjPWGAMW8wATz7QDwPgtPS1Z74DcMgXeXoK73kNjiW1XPAM14wquvsR8FeZyKWh8iE8egiQjkk8seaevGritSax",
  "key15": "4o57bMy2EuxUGpNpVxj6yrDDrbrSZSMiVMwceCR7PqwgNsa6rLBErPUAp921iEnwP7tsfS3ni9xErc8Uu8M9c9sK",
  "key16": "4Tug21QPdAsLnhb6f4S7kP3QMEiJPhKAup7CSART8LwM2iy6doUN3sPbbYBuBWb3MKiCGMQjoQ5XP5PjYZhQRcKs",
  "key17": "3S47G64K6EwGtxsKek3YGnSEMaMMVitzrJ1eGQkYmbWSFrd4JW9cGPUte9fXXa8rG86ewCQLQasXhQTWY9fC92kk",
  "key18": "4TdkCynBArEbUciaLziQrQG4exJ3z2571UHCFUhcXwyDLktBaM1d8TsFu8TV8NMX748Bf6qpWQtkpWsT2ofD7j3m",
  "key19": "4mArmmv25njsZMnJnvQd9ZmSascvPkJ8WDG4zB3UqRKg4HCV8yv9GG2saqcx67DsrgjnCvTsx4hHrnAE3WDQkhvp",
  "key20": "2png2YDc9KKeahqZaKiEUuay5APnPpbyGKsBfRmRRiyMMZHKgPsFR1hymqMpbXufjdpQgAWkB6oGYHZqLom6sH7W",
  "key21": "4UPZHhH5wp7UHMHsMC9innjrpBQsr2L2vAxeVVCnvAbHoGT8bFmTRYYpoh1uizfYAYXyEb6acXDbYAWTC54gCucm",
  "key22": "2U46wb5uj8gKdVKHQxEtrs5BQw2UMBFhJ1HCNyYdNjiAgvB88XF9AguhXJ4dDv5fJ3cnFvmkQjtf6hsNif831z4i",
  "key23": "4Qnm33RLkDFG9upKUjhqRL3FKGTgCj5xSKKB3G68cNussmy77TKWT1P5csxR4bSfnQ96iYXw31P6WqLHFGXBWTap",
  "key24": "6tfT1JR9gjf9bS69A4tR8t1Cw9zHEkfe638zcXnbVjG2hb58wP95VtEB83TT2uS4VqELWug6GBNUK56hp8Btjdi",
  "key25": "3oJmAmSFyTnaoHtC38qoCZwuW21EmNUZAitqqxfhe2vHudCyweKeNYeg8wmUynWFiou9sBdWWVDisvThRP28Hpft",
  "key26": "5YVMt3m9vsBCfqfKsNncfdhMRAvAS59ctx3tjq4GgF1xzCKP26U96q4bouxWnqJUJ1KHrZus2Xar6tapXrKsNAQa",
  "key27": "47Y7R1S5KCPxhj6E4yTJxHp4WMDsprCKR2L99MKyVnUR6Bmp21TSyRLdbMgB4uhjveaMf8crDNK1QyF7sudPW6q7",
  "key28": "67re35V1gnXuRfCXegD1sYDLQj7bD9tRnAnfHLhQPYTEVBuLukRqcGr4r9apxnPpEieyvQQFXcZ6Z8omkwgE92PU",
  "key29": "3GZz9CjYQX3sWqEvuyPV389sWD7oXXi5GFkF6r5s3vQoc92DMtCVQrh1xCfjuP7rA9JYNHjJbs6u7ppWL25EVtv",
  "key30": "2gS4cGSNwbFAd2CEcAZzKq7cd1MEi3zNu7tYqz4p3WvUwMP2JPSsd5dXbhyhTk9UmrDPJMcYz3nGEmDbri94Q4V1",
  "key31": "4NabkfaXZMpRvuaj5hjLiUL1SEBhEu4K3rxDEZpo8Z4Cy1fZ9tRnC4rPr15gmu2QAnRvvm3swzocqNyxQYZkLaAP",
  "key32": "4VQp6HL6fDfoBLYtPArpDWLhb49qCVcd9dTrYjvTJ8TLbDoNnRngRbvacecLpdcjWrwU1bDzJ2nLrGignvh5YW3F",
  "key33": "5fH5tR5LDYtt7Z1cPtHBrZESdGd6LziYNwEusbuxMjiBr5svuTNtGM3yNuLrdAAHQ9KoDhE8kxd3DvvfB6VKqSju"
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
