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
    "3VJkZHN8uMdZJYKXpVKKb6nKhBmBhLJeBRewzPyYnSCzf6zpioBMJztbiEdLrmPEdFcWd3iZFDDbTohuGa313TRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JaDgNQe6UACSmvXJgec8hngCzTo1C8QbBjxCCSyFPnMTS8HHFhAeEgkfTrs7DDzWgeQXgoh1DthjnyPHCucN1HR",
  "key1": "4cvM9C2vDB5PXim4MVzejCNwNmZbxAYHabzJc4ruLPRQR1bETuGSN1D6i44XQKtTHcJaekWWZpS1u8Mg2D9kygyX",
  "key2": "4DjEXXFT1TqnmmWDwubMDu13rqh3QJa1MBGoHZuyNCGgPjdyiU3vUBmLvGiKeh85suBYANmF2TheGq9nyBCr3oNy",
  "key3": "2zPX6xkdLePeoQdqkvw46KZHqSKugFUqf5g9T2n7ao1hDjjVBzaEdX13SuyxQKbyWp4jr18ruPnYprcnAESDVzTv",
  "key4": "44S6RGkhYP1i1uShfAwMads7bkDHRD6YxyAGQ6HbspGXHk33tGzmBhWLu6c7Ko7Mc4Etv9uTjRV1Bmn3iz1A1bnu",
  "key5": "4ZKNNhu4xuPsEr9uPDe6Xna8P5sjv1PJz9CjrFgR5ypYtr7ABu6zhoU8BRoXYXhDb2GVqSwvWJjCZL6xWkACorXd",
  "key6": "p4tqhM7oUHQ8HUvpUNB2fJDkuKwxqQYMa8stb29isKS3p3saWGQP2UMaxu27X9CGH8uRnyByoatU3sQgEHzj4HG",
  "key7": "5B1u1cG9DUt7p6fuiYX4BauRbGyDpHCF2h6vqMWCceJ1UtQi4Pa3zd36xbGSoGPaV9ZNqu1D2iC5ypf7E9zCZxWP",
  "key8": "2J4C7VtyyAErV2Q9EghWSaB8kcy1Ar3reb6VkAbVtUEBijEu3MaaDoa8Qrbmm5eENKHFFDz2NasZDNaxpQH648j7",
  "key9": "2mWcfXufNTsDEARpuPtNoH5FzqD86ykJizvuEfsfu4byGdrhaCkv9FsFLhLT3o4usYjmSBBhwTdyGrvV9hWqso3L",
  "key10": "2sKyNovhxo7XNLm6eFYgU84zGBMcHieiXddLWbgBysXC2EuKP8LEPJKdUN8qxg21YkF4diLrbepwakDgc7FsgUgb",
  "key11": "sFZ3Cy5dzwwmwmSrwSe4gpVyfThw8McGTRiiXedijtR1dGcPFfmAeSjipzWF7ooXkqRzGiTNyZezzryBXqH4JKA",
  "key12": "2rh8izKxPf54X7VfdDNRA57pGVmVjAq8D6WxmgAnmRAQUSx43NL1zRV3vdyM2n74CgZRwGjjmAgLvZyKpyLKJMKe",
  "key13": "5Zu3CsE8zrePDZimxuebCVSLReMcT4pwWXFhsxmGquMB4vhZ2Utft68SpwswqXQmBBu5Cdjb5WpjGGc27dUnLGBD",
  "key14": "4xcKRtvSCPSLpqRCex1yEmKK8JnTrzGGwo3RHoNcJ6tFhauae9pUhRP1XfPWMxwMazLELShm251HZgSiSexZNfBV",
  "key15": "5Zps8ZtxYFQ7Gfp9gBtAohWtGSjxMn5Vu2VphPZ2jKgGpjbwNQsK41PJDXJxyfMXBRE5y7Ujaf5eJVWyH3emRmw7",
  "key16": "Yd5vQgmf3PnXsRGwYwFrwk5aG5hk5BnzkuyvE2Rrycqmbsu3mDrT5sX3wF3XcuVafiGNt2eq2U77MGR6uXikfxw",
  "key17": "2Nswan5peofiznbhcYAq7jv9XkFupuaHUp8pHUHLSXuoTLEXH5dnCPthDgmjjoWhZ15etq7KkNtraCWUPnXu1v35",
  "key18": "3QCDrhkVXTKf9PHpe9niazPHCqiu4gkRAcAuPKUde3G3Lo8W8JRPUejbUWfkggQkDTss5JEFVhJdmPkSSyaeym4f",
  "key19": "5hyJLqbHoPnJU9cEez87hbPNg3fG7LsnjDtxDUGFwWnELKT35E8SATJu1NEv65bE3huZ9UmxbpbcQkBAvYwPAdkt",
  "key20": "2KTvjApr72DFw8nyNE2WbjxWhhoK6VVw1JSPNV74pjny8Aa32SjkhX7vrAL4HQerAT5DpEbWwb39JKuMBqzp6a3x",
  "key21": "5J1oDr8ZRNkscJCHoZDLNRXQdBcHi59Qo9Yf4dQBR6hE9xATsnVnXby3MBopXLPJN231aCRWLTzxakXt3s4djw9c",
  "key22": "xgqqo69Q1dScEhBkqDFCNinkyS3N48CGqTxEMkJpYy4r5sRKXNiwtgFFWfC3byLqFUJTY8eaHdA27SKUA7taPHM",
  "key23": "t4FA3S6sQ3UBfHU8q1bUe2mVbYSjiYqgJ84PwTmXwqer7nQLPqeExDSgsk6TEBMjrD8uxHkJek7N9EiVw2aN9wG",
  "key24": "128mXfAYjYZ2n2BmQgEWBknjyqrRkYLzzannqHtc8owJ3JjcUsxUKhcxJPZBEccQbZth1ZP49rXsmSCEywiGnZZq",
  "key25": "5sA6hR4SkC8zUzqFyqh3hXF1EX6HTX5e3w4xvkbzw6ioow86XJN8zE8VZwGhKQUpoooNpFUDXCPXQqwgUjpb1io2",
  "key26": "3YQ546v6rnui51RtgUB2d2372fLrMfLBVHcTCJQm8tRRDezwHFFaCp1pwp8affXR93DsfmXzHa8f6rgLnh4pDHmw",
  "key27": "5FN1STUynyDq8dkAka9AUx6Sgmjh7vBQkE7b8WNnzrmCbHcbBEvz3YnEK1Crt4pogFkpKsVBYLu4xHdvQAHLHfAk",
  "key28": "5SyuksGufj4EqSynnpvqatcf35MSyi6m8Rb4GX8Y4zJXP5QvTG1yWEgPsfgL6Fjkbtxfpv9wUYbPwT6vhaBBTwb4",
  "key29": "3SsZRHQovAdmt7cPoCvMmas5bFEHWx8q3mYtyxqnEUGZN54DV7KK5LCAS11zy8F7DJzNmeyua5sMoK6HdkyR8tVP",
  "key30": "ghmeWpsDg3gLW5WrJZ1akhZdrFZQJh1LNT5aEwnJiA521sSyPmXpcwFvjcKysfcreXDtTvmCNkQtRjatzz11DrJ",
  "key31": "4q85vhsMVKDWjGZunv1ZT5DpeWVZekapdM79XMGXAMEqQBftUYfPD5HJEUDjwUSKKYtqiVJZdvDUKEwoa4VgB8cz",
  "key32": "nWN6AcU8iaakB3tEdV2ibT5LPQKbiptVbAySD6j8zWpaAJttjyZbwXV82HTvefC2yaPj3rojg6BaZVPbJd5LhdJ",
  "key33": "5r3dStxEjMynkcxwdiZMZ9k4uKaA5iQsPB1hb7Myd9c2MGm6AcXjzyP1smH67qPZKoVw1wT46tjn9LvHCMzzF66W",
  "key34": "3CM5cErqPcYiiuQDH45GbSbobqYNvoRtmBNbnFtA3EgQYfaGi1L2yGZPVKrvaPTB4t2bEtH1m5HwfAFb4A18eF2J",
  "key35": "3FxSkDowQcmyZzDpXdJAi8HSpEmXLxafKjvgEvbdDL91NCX7sDbhvk6w2AgFBYxCpzD7cRSVNzkwYuVWyuy6BDvX",
  "key36": "4Ajx37bHqunF7P5cbxCT24oaS7JVgzLxcMTS2bck3qgVR7XUbyQBuCmGrtN8L8P58rZeEYYxqJxQtaqUeEmXkhhy",
  "key37": "4U6v6jL3Bee3j7cLoqcR6mij9Jh6ExW6iaQ81VqNGpSmxFu7VaDiV8tcXBcgW9br1g2ofiC6tRE7KEEhm4ejbzsa",
  "key38": "5ovGFTW6CW6HKskvtxnCggaescNAds6AafeRbZnK6Th1k34QheHckggopwiME7TKn8yZSEXeaeaZLvaz6fJDqLE4",
  "key39": "64hCB3SAj9EDtf3ZMqoyjkqHma5aExL31rnyn5a9sgCiFy9doGJhDUBCKZmN8YD82jWwn5hrnrTCHMxFkpk7wUkE",
  "key40": "5WWNUKDzA9EiApvS7yTDVNvcYvHZVHMj97PrvaXMsFm5AUWceMB4jU6JXFJ6r5CzmtGortXZgNVk6ajkE5VKKsxu",
  "key41": "5epRRVqzA1WRfY2EAWYBdKAa6WvJ9AbRjdry2AWo4sC13KPx7KBkpq9m9PEvEKv8gLxmTQd8hpE8i2a6p3mxNZVy",
  "key42": "2JMNyttd4T4mfr2kQB5pt3kj9nrKupMyMZAZKoAAohi2VAE2g786LBzWCTChmfXhyNfTes26rm4Hfr8575qMvHSh",
  "key43": "1LVHvzVa7smtEU7UTfHJVpQh9PffY8s2nR9GPSgkmFpHetkwPpiTqxmQaUYfF8hNui8YxL3FyHNdjpUBhoywL6A",
  "key44": "5fJNxfJkcAypm2sn9j4S2kCW5FfJXsj9J5BGKTpm3w1sRdbHyAjQMAApkZH3XKgctTYYbHKov8det4Cbq88pKhty"
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
