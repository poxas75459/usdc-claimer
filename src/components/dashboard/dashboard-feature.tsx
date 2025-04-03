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
    "3rDWSWUe2yPspC1E6Qy3boHiE6ZUoreV7mt8PDtqsSPXtD6yo5XGQqKcx3ks32ruY2wUHa6ukwT7ozR4E2xkcqVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31KNBiKcjFzkHcxWusYB9m9gFHRRQxDsKvezvV42aptukVonEJQKLH4NNgKQKTdQo2DYDPyhjsXp7c6jeFMrw7rT",
  "key1": "3dUxBKdePsLW6EoTfZU2QwN219RW64gUrb4QD5pHqbUz7uoecSdK2M75u5eaPe6iReAEwSWbGkp47m6mmiWdit1t",
  "key2": "3L9GwQXsfiH6PtgeDjyvUgXa1mZZeP7pppUJ25VpRLAfg1w2Apdk2Bc7mYBATxFHx2rXTJSXqbikxkQPjYfd2q1k",
  "key3": "5fomKdLUQWPZAbwsge3vQCrEmZDYmeSJsNCaqoReTcuntNiHiaQ4VQJ9y3q82iMJXtmBM1yCkLi4ivBU3oPKM5jz",
  "key4": "2QFQXEEo9wjDB1Q8CZHRWRHU2S1P5BeJwRhy5W2aEQoTcMHgRFEc3h74RkxvUc7nzHnCKZS7LBa9mrQEM7A1Suky",
  "key5": "54DrRtjDaeSA4VAJeYssw6LtdrDBimWSUdUvosSfLWBENx3TX5HeSs9fbupMhoWB8Bbr72ktPFUSGSmq4aqFq4tB",
  "key6": "TL6fVZ6iHKcGFthMRwmv6JwXhk9F7yDn1VNVuXt5tRDkuEpvXiUqpSAGe4GVqA4HP1gyF6g3TANLkvNTRkEsJfG",
  "key7": "2BDbWpG4WQZ8HTNCN7XRxCcrFpsEyGsy2xfMgUtSYJFy6Z5NAxu5yAAb9PGsWJNYgiW1KvoqeuxcQ245yjS5DQpX",
  "key8": "PpDxf6tQvDvkA7LCbumc4TgvJYbdCoaX4jgJAYzjBXiLt9eRAQcL8CUK44mPaW8wxXNV6CATtUgxNYXoymPV46z",
  "key9": "4urX3qKExf1NeNYNduEx785FAWde2Tg3fR1Xfsze8oPMNDwVZXSSzXA41gtUoK7hs9CipjyZL3WtMeVcti8dUbW4",
  "key10": "FiZnwyQNcEfohABmKKXe2naiWg3742z9ExqVrrcNVcT1VRS4pphWUbHRckvHnUhRgbb9tEg8CShwRpvRZfy5ThM",
  "key11": "45wSRowevanSskLyNFPPERzxUf7h2eW5Vt3jtUTPGGfDSZupKdF4cKrk17yCBDquabetDEboYyKbtVJhJsMHgJtn",
  "key12": "3kt7eibVqpU3z5Q3e1SgK8oxLzBnTjaM8qtCBDJDPmDPC87ACMfHg2PcXpoS5ERk5gQUuNf9HRFpdZm2YpWhvd8W",
  "key13": "5wCRbWZZh7w52zMwVgddo1TeBpVvc7zYwZTSAVq3BAgt83phYahWftw81qsUqoz8NEoaPQWDdovtNq8o2cpeGNr3",
  "key14": "53XULPZwSJSDRxZ687qY9sPBYEm3F5ChcWWmZ3v6QBqv9yq4mkUFHixpeLmPaRE6xt2YPG3suWekN2c98XaPWGR9",
  "key15": "XALRyXnETgtDufkArWsnYYhz7Wk7at6s7u5PHmahsk7Hqi3xq2DuVXuNakGtLbDpyuQkt19VvSDqNJPmS5jbVkS",
  "key16": "2YewBWj7YvDHyqhiCr2oZUsWna9yndi82NFpTavP2H4X56LErV5423YEdofRw294e7bYayog2Fc9eWTCk8bFW5P9",
  "key17": "2UHQrs4J2wwU4TzJcy5neaZHXQg3tXocRcu9Hrx1gRrrVcpXk4FcRmiokn1yXxraUrtgmx8gMeqQiMBfcyGVZaLH",
  "key18": "3XJfz3awpHCjdpbu7DpkZaesEzAASM47rLarYTUkgFEeJ9FNYgjWVen1mWv9RF5PwXSV5nTtCmXVm1iNS768TVnP",
  "key19": "3GESUv7nBwHLEsa1Q4dayrRe4iocbdsJQj7jBj8jRDPuXnj3FAMKRgE1SkrSMvyf6zivUVmeB9msxxQafDwBFNnz",
  "key20": "M6osfFPdZDXzPVArkSRfHxvHwv1AKEAvqfpi5pUwLfJa4yg4FiciBYerjjs2Zf6CuBDABvZjpgFKLQ3kgLkpWQr",
  "key21": "3UksEKoyARxB5xgJKSRzPHFMQX6QvFtijLc3iwSiF4XYdECYvd8wM65NcpW9V5MLJZNRw4a7MpbJtyT4LXn7aMPK",
  "key22": "NwvKfu2nkYXzXBivhvrhkmmKQRqzQxouVpUvpxSCgt1NFb7rfwZiqAxe8fCRYNppVZopbdG1LAxxt5jVxfywD5D",
  "key23": "52xYDxZg569dYLfhHH125VKoLEZe4nUpddAaNxTM9LuYarj7mXb1HgBumKD3eQrNyGC4kRRCphwKF7Au3QZMMHb3",
  "key24": "364MM7GY4qKNGBdbygdo7NznTtDoafoavMYVrYvhT4hEB3NktNL1cdtmchMeR1tWii9Z4LD7K2qM2G91XEfk52aL",
  "key25": "4ZHfDy34eT3a6orPHhBra8h1WRA81cwJao4LhTkCb5uUucKvPaLri83P2RjeEQcbetzuXA5mC8Erqbt1ofxvAuXe",
  "key26": "2xpaW2NorzR1qx17UmYnyyCTqVQNHtkurwC8pUUGxoKb5AvDAHddbjxDQQ1zyQENhPeDECQb4w1ya6GX481ePRSt",
  "key27": "5za6Sqq8CWs7ySLS4dfvV5ytgjyH3hEFgyeaE4BHuC9KvbjBWDxNQf9mSTgzBitDVVeZ9Aubk13cGD5PW6FW2obQ",
  "key28": "4Ebe53R4GUid8f2K6QUy9mosj5qxsgyjYuhQc44L2Mp8RCbJ89nmxFUyZFEz8kZDMBFQgSWngpAp8rDYmvxUCZDU",
  "key29": "Sf6xpyZUSdhEmqPQwgHmkkUPa2XkNVz8HWUPa8RQzUYL44xpV4jHwFymnBKjEpMSBF3Mnm62cj1NR4Kkwoq7UcU",
  "key30": "4dfkcSMQcpvF78RC7vg8FKmymwb8fcYQ2oxD72ppANHuJKSnNV3kaZmiGjx384RZWoPcATPkkL4AouZVggqasvbn",
  "key31": "ThkEbxd6ELeXj6bLS1uUfyTzsBPSxnmhA7v2DcErosmfvuYoT6uw2y91VSkbNwJeiZ4UH2zT6soQEXMBvDaygNz",
  "key32": "41XBoWLoG5kbt2Tinjcp29yAz8QU5bgeSnTa3FUWmNhEfRZAnNS9cdtUcyKwTEiRuA3SBVQMQjxWjAcMTmobMxrU",
  "key33": "36ZrCbEqJFo4bV3ccX2zw2RJQBodbXRza7uyNAuuMf7arwvUuLn9Cqv8Do2nXcYXgFmP9yRMQijPeED7nmWeuNaG",
  "key34": "3ThLpVMEoS7nLoQEY4nmEvTJNjpLzwdbpbyLiHvVFGvazVy9cQaostmVb3WakeQbHVGoouUCWShy89FZeT4gNrus",
  "key35": "PPCDcBsP5gy2u3cw2uWa31Gfj4NBQLBZ1jrDhutsyTZ4yxiZE49kMpBiwpP5DsfM9dR8VfXwbcVWLcJBunzrAoy",
  "key36": "57iQZawEWA4k7tHPPut4tKc5jsDgSt9BgnQzC7wTZRkgMusrHbCRPhaFvx5yYyAotSDbVt629Swj4voFeCyjCsHg",
  "key37": "5hVg4gwHrRZtBgwoKCLbKsxEk4DQwGGru95aquo3FExqgYdBWCP1YkdBxmy9no5T1CY5ErLXYrT5Q1T7gaUJ7FET",
  "key38": "3LWH97hhawp32Zs3hh95oZ5k7eDQph82h8CgBY2NELRPyngRuC2UoF6zXJ546vBQkRAM2FWNT2aXFycfQKG4PJ29",
  "key39": "biSmSv77LjsxZYtR5sc5Y57T5CzoBszK3nXAhBVyMBn67hVtyz2KK7DoTUo9VkXDKMHCVujoHt2DjMHs6idvWRK",
  "key40": "4sKixRotCLtiyyXK56rrD2BaJ3SsdnRib7uJoJyoBebj5aKuDsNMgfWaXTtehJWeDanfk5b1HLwRpZ63pp19TZzi",
  "key41": "3CTHtb3qzUw1tXfB5EjEL2T1N1GRTp4m5cBhgtRqZm99Myv8s1JcBUP8ftf57wGovqTUnw1uSVhwzHPuNcw29kzt"
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
