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
    "uiPcpEubnqGAuX92P4xhWGwsBudKvPeZ8uJf9vtg3hCWodqVbBERwZtVwCXCMAcCUj3Qi4NiSGPcMLvXVp2K7AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QK34sWgciAGCScTprpfvHuyt8Tw9vBYcaX6QPFfGh9nkBMGW17TnzMoyqtdd2msr3HYjxM6aDr4KnD3F47V9f4a",
  "key1": "3VFzj9KWjmSoa5GphbdG8cRUWrQrPWDf37bPGZJbLi2ndt83p9nKpSUzYpJNZvnRnxnWA7Fyhb1BCemc7RmMNubu",
  "key2": "56TffSjZkxg8WCcLv1hr7BhVoZS8UURdUZMMot1BAvNLJ83YVtjVQf7TYujJiU2xwsp6RuRRs6NA87K3GSDsTjfu",
  "key3": "5f2kkmRNwUDAfHGkRnzGfyAxg87HP8jzXh3MMXZZYSKzuuxezhEdAVNksLjt24eoJdTTcSgrcBnkXuZRjFZxcRCX",
  "key4": "4z2j7HSnJFijnSh7FvGPsVUduZUp6M7q4MotA1pq1f6QS9QX7w6pXpQtxdY8xiBQs4PuMiiz9rWrbvG8xq2UTtbr",
  "key5": "2WZnKFYSU2jhB6KyhKXuNMfddsUMuiF75fQWv1JRXesBGfE9zrVvZFDukL3XbEt52oHnVwvKbctUAGqP4xYzeav5",
  "key6": "3HsckoiqmQCL4o7ZwGKwhmFkQkmBTNoU4WyFMnnrH3eVBMjW7vCMbTUmJYosJ1wAzyNEQGDD56fpxY8MLCgmvmRh",
  "key7": "46583EHD8vULJF7cKmfo5wFGs1nHgJHRnXfTiuAjjwtn29SQQx48WMBRbBnTujFLj39BYt4bRLjaDWC8vCjero9s",
  "key8": "WxVPBQJywzJA6PN5qZDnJkHXxgpjE9oNkLiSiDa8mdZNWawktiqcrF5t5yABZVFfvwQsc6jd5d5XCSJhw8zFBx2",
  "key9": "5z3TTpZBsZi2sxDy3uumuyuyhv7qfaUsqpyGUXbsLGzZSSiqd56cyAGQKbnYFCxdhXNFWuS4jCG2qeCyQuBpzHvH",
  "key10": "4C1NkqqhBtFwB6m3s9Y2spuFix2YW9X3AhXYFcncAEksYyDXxaAucRjdLy1Mw47c89skJCZK7uspTA1q7aoN2xC1",
  "key11": "2JJ9JnMfVKYLfEkc53pDAAmigCEsW8hEYDn9y9Lm8yvGps9VAZeEQGXDxR1MeBCAWKBiemiBMH1bBZHfFBnPJ9Ek",
  "key12": "5kWfrGo5wuaoaCCcpHjHuagsvY6X8dYng9vGQLBNyADujJohRvv2f3KHee57LtqY4xsY5ZD7etSct8KTdaLNsukF",
  "key13": "4CofFFuyLN7rg6bPrKKzLGSFiUrRyUk3NQFAbnEqoEHq6dTCsGfWLPmkMihppE3224FxnvWWYtmQaRjFpVupqk3M",
  "key14": "5BWeXPtZDJMqpkFAhht7mKb9xSTRPBspjestSsQjyAZUbjNCfAZGCXgTssyTJtuMboXwuF4nPY3hgSk3YKTd8Q5B",
  "key15": "5KYJCVPDF6MFfmHddNPSfxojstoUd4WwR7zxfum6e1aR2GGpCuv7ZbEpHASSjBUTLfVN5xWon8m77qAR9jAgGXJ6",
  "key16": "3fv46Jks66UxL9oTWRfPVsd5tN3DTUgkNhHvFWDn7YkuXx7nBvd7HNyraoEeWbg6xMauuzZHuTk7az4oJKxbrAjq",
  "key17": "4iZbiFGQqaC8FZKXQUURqUZbKhT619PL7njDvwK2AQYumtBnKjXawfGUK4gvtMQkU5V6eE6HcijwmWe2x14qQsN6",
  "key18": "234eKGgr6PiQvJVMJuVMLuMLa7XFS1kbu9NKvqvazTU3SG4RF5YyxgCRrrukcF7wRGucM6ugxokEFYM9fpe6Sxkt",
  "key19": "5A62f3ru4c9bm2ZcJgFEgZRZUszv2iVc6CCEzaVVgof8PPFr7ZmH6K9V7rzSr561mN4gYFUHXcuiJ2yjYnNnrMXV",
  "key20": "2iJ1vmSx2FMwpXdLaaU6kYqLpyocHLFzjohTKpRcSAnxJ13sCkSKhQzFyc7BsLfx4CfrRoZ32MBP5mPNGKSjUzLd",
  "key21": "4X27REjkmFK7xCt8EdBcR7R4aUKg37Y9ZRRewj2MZfrnS9byASnDD9opqjpMiGg9hvLc5wqzs5JzdkYsgocWGUjf",
  "key22": "2nMQw3EiNXUrz2axSTM3siFJhxoczPPjieG46RF11yXReQ5CZk566hFeFHDQywLAhGRm963HdXqN3YTdqb5MZC4P",
  "key23": "31tYwMHSafKdkeEzxUVEF2KD8mVqhboCMYSH3hrBYgitD8tKZUkJrzQsbRT8hRi98e5RnZN2fnXCgak9Bu6n1iUg",
  "key24": "39U3rHB8MA1YCuVv7xH1WaNfkwwtMWz1MG52MXiWrbeDUrqbVMNexngyTvePxfmXGNcf4gGm9XjPnnghb87C2iNb",
  "key25": "2BpCJfWoxfwcbzaHqmKd4ySVoD8bzwogqraJAmYxE7CP8Wapc4uvEnSJUJLaqxtigfKCRdgwpVAmGr1nURkQmHmi",
  "key26": "4oBUCmFQNyhi7N3SAB6Sv1NBTiPtQHq9WSgRuRviUSSzuTn6yuCM7nXTbPGpBQRMBBpFP7KELYBY3TT8LkLUtBBn",
  "key27": "T4jDC1DwuAZjKdgwMocUcNbWFUHFZHtrWYA9hoDBf5ovutJi1yPPQYrMA8YKPuEZ5G1uEDL47XhExTeKFPp3HrT",
  "key28": "4ME9X8C5sWrEFqXbGp1r8DUXhCga8n5GGmvrwd5gwsKvSpYuh33tJrf9guCPKYoaehPiyzZ6jAvbTPau5dsDCf1X",
  "key29": "29CjFDLMzJod72ySLdmKL3MQtD6ARSKmK96WM8WioVqep8Do6X6NPrViZFZYanEr5E48PZgeHnzU63aLvcUvwSyB",
  "key30": "5jLgurZgCRSDFTHhfzL8WDSH8jxXfy8Mq79N4iTDXjyXWB7XjAE8aHQywcBFz6UBcjAZTLHm6NYmXLFEE15UMYyW",
  "key31": "2bkk82XP5phovgW64wRrUNEue64FjNTdn1TqJ8GWYEZbHvQBgKMP9kpL7HK5ozxSrqjK3Wbgv1g1enpoVkVt3L6R",
  "key32": "4ypsbuMWXKzSvWHR9J3jBDbVohNwu6qPB8a8Qgc2M1cGh5SoWaZ7eiLgeNkmUCPgLDodEGANfbSb7B5a3K8NpB8A",
  "key33": "5E2sUQPkqHHi8u9aENsNhvvNjWexMpJXMmXzJH3vAeVmPzWwibave4Ewkit1JkrD6En7UFKFu1Afbn39ZoUGk9dz",
  "key34": "5s227ZeXQ2bgzBKvGugxEnEsvB5ZpF4njVsmJn9AUjaUMGxf9PkNqCr4Qt4SyNwxqe7EjhzfN1WPFiZyBVTwsBTo",
  "key35": "63G3Eknh8JVeUqmYKy5x8vfxNVEdiDwiA947nWZadmA1iFDP1Ud7oHG5sPE9yGvZsBUT2jNyL4sE2iDasyUQ8Epu",
  "key36": "2TAWNjqeYYTit3ZzQctNnT75EL42NtazYaPtQBdfRfujQQsQf12RYXmeAB3YoZ43YHQuBssLe7q73XPbYVnt4YRH",
  "key37": "5veXJ5AWuhCYA1WS6WdgG1SvaiuhLxKKny5CtMP5x4isQdXMcB5VsiiZoxLebL829QQyeQyqzo2XkbqJCYBPZ2i4",
  "key38": "S1trTLzh7278QVLSFexSnwKX8eDr49rgFJCMTck1bEifEjaHudFUrCowg5gxNeNYtjgcyet3yeadrNeqjsDuqqp",
  "key39": "4toR7KB9YmhMALuaoJ2uRdRY5XLJuxpos7oaYeiAP2muRB9Khs9YUBPnH1G7EnYAKqAsAza1QDPBjACxqrhHwyJ1",
  "key40": "2prjxxt3mLcBYknDhBbFJN8mUUCQK71qVoAQcN7sxsMebUhXvnuLnhrLg2arQs7zxEHh5ZxsX1FsjhUeTR2WdCNC",
  "key41": "XvrBr9zLPi4oyKaowy36vJ6mVKNUKWNHbZaZeE6MUvYMDqNXnrLusxHn8M3rdqVfpnYrKK8Md4WCdNHgrB7PkHz",
  "key42": "5wEqKcRFgXm7fmZmL5EaCzN9dYcdVFYFV5Xh7teR24pzhEvzmdHopxiEjJHvJeakuWBmhZHDddsY1a3DbBwGn4qT",
  "key43": "26cPgVzCp2yjrN9A3Ux5GHoeSPnecNR4wUyGUa2XjS4QShquvFzommzNLLLjo3KvyRcGorwmU4Ww7wzaaCjyan45",
  "key44": "61jRT4rwxmuK2c53xo4Gxbe51Zb7JsVQfATHjRNdL3rUGJEG98YsQturbUHt2ZYvmP7nVgdrAsmudAH5yMijWQ72"
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
