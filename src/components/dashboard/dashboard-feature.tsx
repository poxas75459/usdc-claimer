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
    "5LvNFr9JsJMttayAFe4rsb3149g9MS8ni2pjhRcoaMFnVUJPFt9rfeJ9reh2u7L4MfhHEVuBBQcHbMP3M4dohKBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V4ixGDxbHqr3E23tTRMzxvubNoQQDg3riT5sWs4KM7oQxsozkRkN8APZTxbbcwNCA7JwFTYqJXUGT1iiFKKp62h",
  "key1": "U1nRyc9gX2CfrGHFTSmUPbixZaqaEeU7YvYYAu74weQynihJCqFyBh6rpt3BVgWhK3Yj9phhKkYjqr6sMPBNTBe",
  "key2": "2fZwb29Ue5NFr9taSVuerU7JSaALvtj7SA8F2b56WUaDnwRD7iGnqH3LLQMP683aGM5CpYAc5325puUsTqXLv4Ep",
  "key3": "3hjjuK5FYE8Uu6XkX9cjWJ6t9HtpRDxVscUT6tqCkDqTSp188sCrNsMtAoTA5GpfgrB75jdZPHrcYtZCcyihe8ui",
  "key4": "vcDNQjwhheYgcr6M7bZPgc3sPeGh9RLgustHaCSzvC93vTwDUxDEDjigDZLuv71EkbaDwW1m1AsUxSUveENLeZU",
  "key5": "28Zv56JJ12AN9znS3E7gtYgwrttiBkGwFb53rRHBN19fGrZcf3i2JZU4RnoMy4RDJTdvv2rXXBTQnY6619Yyujrq",
  "key6": "29vs8vofQ8jg3wW17bSy328r8HrRGkXBRSjHds8v27sQAKkgXf7dNLCAAcDzTLwC3WaDiepeDp4AJFWRVLRHxDB2",
  "key7": "2aeJcp3qS5xHm4mjXdCr5YcrWXV543DPyTMXxb56ZrKdLvqqK828ZBcPt6uasaymaN3T2oGUTczj8cP9dy5rEjnQ",
  "key8": "2upay3YjUPsZ4qeRo7PgoBieD2RG4yJams3LnT9RGZLDcmfomg1ngPU5m4MdwcpYPs1GY2ynxyNryYLKmEKbNuqf",
  "key9": "3jq3ocGnug8fnUninsdr5VVSnPaSG1GX6XZVBUDpxkhFK3h9rzKKpdHPee9NdHHAwcC4hsUW9WmqVBh3Yv5cDLRf",
  "key10": "5ANxoKnozThvbjwM2s2W1muWNx45KExi3XbP2XfcsYZKUG4BJP9p5h4TYEJH68RmPpbMJWZfMMS6bo3JAGdSMtSP",
  "key11": "veXHtt8Ser4q1S8vSFGMnUu151FaPFwohUy6Hjde43L5fgBE9em7hgUy8dHdgHjaA3NhBYT942ZiTCVypJ7Ttyz",
  "key12": "4rCn9baqa6SSZgSV6xGXmcCEVEXrMMNNCXgwrzxP3ZfW2t38m8APV8vCaomG99kfDSLSkwW1bmbupu7oPAhWmdKk",
  "key13": "5Y4XdJ3ad78UZ5ESteQ8anWk5tbQd8e4KcYhQYJTm1BsvMJEmuEkfeVHrLDLpeBGnWP99sFgm8rMWxHUMshyf2fZ",
  "key14": "3E8VMaMgM1dNvWcmjmYTqdAA7kxLbxzZGTJCDXapP5VgauGT1s6JJHiQdXiC4LCyn9f697M9R341UFuPNj4xjejH",
  "key15": "4fSw9HCnAnRrweGDLooAWn1S6NBxLnCDzYwDfL2bQFiku41WR8LBShgJXQMgVCXCrebR3At1mDemLEcKsiqhXSkA",
  "key16": "4XzEBw1LHyq1zz1mo2FAHnGvvBmi2Fcdnkkc9iy816ChPCFRWdZaVmd1p5ZCKMfYAJihU6fUpMyVjNARFVHqHdHQ",
  "key17": "5SKXYQb4CDg2uLHwYNjNbVLyDffnG46Nzh9E85QXaZeLPXmTr87aLMtRkG5wJA4RuWV5C3kZxGh4JjhGAGdSRPyH",
  "key18": "5MytKButpmHd1rmyQvKtuGeTUuipw6SUEKGTG9Ridppp4z8NPmHWKrEm7nWRj5eNabLwa6ndTNNav1KAoVTBqMRh",
  "key19": "2epWJEivNNkTgx892SnCJ1unwrWNirgAeZPrSVX5hUyoqi7TC87rbq8FrcA1M9TX3cmohrm2GWA8NE32kBqFUQiT",
  "key20": "WyFbdFtZYDLBBADAd2GBqVnP8QBoAJ3PMctzEZV9KzmaV75mRWtDhQENDEwsEKLMQ3rNYKcCv5hhbNV5Tu1t2wW",
  "key21": "4LtuokEeceAu36MsjRbVitsv8K5S9Fg4Ut6oRx1DwHZTPZYvVCQNmKPsYfK11iMBgyg5T2Fmpa1D2nJ84fyUbVj3",
  "key22": "KpzyoWWJPqpAVWFuD43KUJrJugF5jCa6jW5msbxKgNw6SMihjZxE821Y7y5EbuMAPkeZLYNmishq7H9PPHZuWEP",
  "key23": "2BHPVXLAXDk3RfjkNAMAGBi5tkMQ64pZ41GnY1U3i7YFEmwTDJ842Nz8eoJTyX3ZQGL8cthP2Ejdmpc9rV5cF6YH",
  "key24": "3kCtWbjrwuN57zKWfLG6ZzVEFidtWK2oxtXJdrXWcRoC7y6TkS23Qcft9vcQB2qu7AVywqzMMQtHENV8vrunnbhg",
  "key25": "BKBu6UoG3ygJ3qdma6H6fgDZiN7LKCh48dRYgd8wTGiGnVmGx3NakndBCG8TY8udYK6ZsvnaKNU4Z2zBEScx4iL",
  "key26": "3V8ffN5ozjQjrWpMzmV2mRJqFAe8DeKjYW5f9u8QT3R3DdfV5CMrQgNNxNhiJvfS6XAHe5x6xiefMBB5H6d5gFLb",
  "key27": "2YQXGoJjNnt5VovDrnpLhfFcUGbvtUnCz8HdDFJ6h4S6nzBU5knH7rRUvF6n7thbGRigoJFiH8dBiMtjJmaHSWAQ",
  "key28": "5cvhd9KtMWs9e8dnMtHwPxFMR1nbX47Dh1gSiraan7D1SmFhZ1kc1jTmirwunmdbZZcRigWXvEoueppEaxBCuTD5",
  "key29": "2ThWC8v3Ft1L9YPAkawtmeWYiuatVHFNxjd1546jaS6M9h9jWiLYXxAinj6v8JAy6UzG7vxL2byCLDT8KbR7KoHr",
  "key30": "bGT8a7i15r58Y1ippEHEzk6AknJ85prHGn6gGaNYPGj21JRQj7rDYn2rhQmSsbYBbJqjgohqgWGGa9TyiuAawom",
  "key31": "xLLB4LfFv3WjTPJgPrckEpX86LGYwvZyY9EPiWtYrv5pKM1pQKmduufQoZGABRAn67YT6onz7Hdrxwa64NTe3YK",
  "key32": "5MP7jy3Kbv6DeJt6mnnJPvoPBe3LJR76hMj5zpJG4BLS3YkH4jPbPQzXvjE7A9erQibGb46CYTRXjKYMuTLfVsnq",
  "key33": "CZ7RGfMNskX2WzAojp7Q5atDRnPqCpKFfreqnGbqVf2e6ZJgTP8xRW7V7nqB82oVm7qeRQs9o8KtTeKQ9FcobnM",
  "key34": "5Sw3npENbt2wx6EwXjqwGdRRqUynpp3yfMyrvwbu4Bdwzt2V3XsS5cuGuWKWTrQiZo6XjWURabdPfMm76EfMYwHq",
  "key35": "jJzYJf1wHDcqekwAM4cRHxWnWiqFDtRPyrbSrYpGffPatTT1PLmoytWx71EkSgqv1JsA7k2TYKGwpuhbp3jvx4v",
  "key36": "29cazC4RK8EkWS7eJN2gL1Fs9LGhBbrNBZhgvBaoQgmWuwSyevc9HjosjC7CnxobKSPLvgPYhPFmx32TFtGoWN3b",
  "key37": "GtRb3Vo4xh66jobgD6Yg5XdjafNdYbvVHV6Vf5cWLoL7iMN377Ujf67JXbA2CBtunoPt9d1EfmvrtvXi1avK614",
  "key38": "627tiBp1nLkmSTotXpAru4GE1L9tcHAB6kfmrzqew8ztsj3iBJ8oivFGSiN6XE8MHdTXmH8X4qo6KpaaVmXGiNp7",
  "key39": "2Q5NRTZ36FX2mNnCdtw4GwGW6fkQcNyZunBz6yWa1du8vUGF9JQdA9JdxPdofNvAuzSESQNyFiLkXyTmRc2Fo5C4",
  "key40": "scR65BvouFmYDEw6pDuf1wekkZECPxwefkfgEsobVFJLDG48KGMhXAL41CexGs2PvtKTsuaaxNQy5pKFu8MToxP",
  "key41": "CRAd3AUcKT7AfTxTY23bZow6xxXKRdqL2uRCmt92sGe42JCYqpmZioRokEejasTCbCeZsSYPQmbCkT75ihr9CjB",
  "key42": "4fGPjdGqWBXGoGfMhLa49Ceed324m2rHAg6hSPq4JvUshZAg4b845nfd5XkdQSKZM8u4V98zSsR52m4ECkynuvjK",
  "key43": "Sh1P4vdYZZEQpznbFxpajUnMwGxmkvWvR9HzJ3KHwmwzn3dcuAuCVpDwLQBgpsDCoTriDQTCmdFYPxugQRScduF",
  "key44": "fugHVdMcKRrRYZhvzWdt5LL4haDUQ1YQLmysQsD8GPkDQtJjbfs3QuX7nmPRQkcd5yLQeyd7NSSwW1dLWnKoQcH"
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
