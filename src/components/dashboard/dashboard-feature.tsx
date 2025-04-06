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
    "3EMKPzGf2kRKzJyEdh76MEpb3mySwb46Hsq2Nz3Te48Uhp2hWWy2ChTCzkejJwizXCNsbe4gVjdqtAa9cQiZeNsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPrPECH1b6ZttsofZq8ksS2nJ8husbJupohaM5ZAWYwT2YuBr8LvL71oGDyWrUt7L2NPoEZbpNeQpvdgt1YjmH2",
  "key1": "5QB9LiJZ3w5AJGBc2aim5KsAKjXtBeYbsNLR2TorHpZ8AAPbFUCHHVTeW7avqtMDYJxWDSENTafJ59SpXFXC7LSz",
  "key2": "VY5GMhDmYyS5BY6gt1RzkaETBP6TNMdSH9AqwNKPb4qGfG3udd7HGrubsd1m71JQcZujsSq5daZNdUi8J3j4pWW",
  "key3": "3D8S4rouT2LCifLxCro7LHmPoucaoVLnkWf5LPWP4jsttcx9pBDk8xEQqsyQbYekG1X4zHLpL9W9XSJhK4YFWyP1",
  "key4": "2hD1HUjsXNBx7eyH5Pk1SasMq1WsoGzbpPfcCnAPG7mxDjXGbEbuyWC4YsvEtp51UTbzWLsWRqZHYHVSedjRtasV",
  "key5": "2YdGphuPPyT9Ty8G9Wh5z9nuLQcYPQBueXK4GUTiGcpyXzmtdriuSw4LFyz6jc2wABtSEjLy7rP7NEFsQXuEY7kr",
  "key6": "3agJHwGt4Rcqo68RqAB6tqiyUaPRkCN1CLpmgNbrMtGgEUkvkEDw5qDuqpXv3FtCpfX4S8UHk2Aa8pAMvWgWfpjN",
  "key7": "q13kKSrfTojHiKUU1MUx9VjL2wMr1gi7MGJWwbHeQihYSdu7p3AByg9Jux2PDyb7gyQtvBTAvCMsnzZAL6jVd6W",
  "key8": "2sjHUEsEqjMhbtWKVtmUY8ZptVVY7WVBNpvFX4ZpPEhxFdjMvCUNN2u2J17kxKNpDBMmvWVotUnVWhQ2yWuATq7f",
  "key9": "3YRiwCpmcgcib2hTcVJZRAyBsXRkUgNiW9V1bkB127kPHKKULrfK1bxh813Nh1fwq2vAx6C83yaeEsnGvUxsovsu",
  "key10": "3xGZ2gUQUagar4xEQgQEbkHKnhWq64QJST2oHQ2pQEQzS6vfAtiXr3YswrjJFqKEKG1wqC5RkwnHy3xmitzPzgCQ",
  "key11": "3baSzhYfgnMBa62dVwxNWBh6wrNZxKaPNqDiaAPcGygPz7tz9ZrHm7oRGVuXedPmAxGD6yyFH4wGkcyMgRc76pVF",
  "key12": "NFUwyV7odiCKFQssg5GjasUstnVp83mFnZXUXa7dzneuq4gpeUo2JrMuFRShyoJ9pdgqRYBR5soos99up1HpeuK",
  "key13": "39zyj3KXn87YjvdxiKV2Hpibmpc6XJSv424YdtPR7q5orMDKSy6RVjEUiG4qsjUZrwWszLF8ZssBxfAY6BudStqS",
  "key14": "5G3KedAx7ZpEbfvZp4PebaMv5YyoJq128f6EtMqZGpZSLHawPdqfAg8HzHCXR4QSbY1zEXdAmBZ1tq7wWjXJJ8NU",
  "key15": "3N7RTUn6y2Swa6uXCYEAGsRGj2URiPMfpHVLkHs4txUdv7RDZUzcGoJXHHNuATAKwj9VBug4JsDQMHy3g4KGJghg",
  "key16": "4E5DLDhUiC72op5WZXpKwqNQcsBi4wWr4Csb1QLknfLCA6h3J1KH2WGGdZPRR67t5tV781vkDrqv5bV4mbPxwTUN",
  "key17": "54nZbGFQ2ZP7KkaVmr1h1hKxUkmDN8yy53igxsv4QZS5sF7V1tQpAz8JPeDNiM2tDW6yg86QnaR8FTMtzqcBi7Zb",
  "key18": "4myxCxT7RnfMrcg8B81gYhEoPejbJCVzRdb15so4cDBTifpx13aZks1Kz3YoUsKEzn2rZXzQZriUecHQUyb7zNUL",
  "key19": "4USQU1cjxUvHhvakvY29ZvYpYavBk8UfKHLo2h6ScKLSAc3aKUhbSk7mziKLj9yz5HUiDz75WyWqrcYByjzr14GW",
  "key20": "26F9i4t4yzPKRiLmCBgkqGY1mAMpfgTb4ecJGtASNpdpF82Cer7sZo5YM5pTqRt7g2kG1Yz4tLPa3Vf9w8TEQc5w",
  "key21": "4oYU2esy6zQkm3fqVZyiBspBLXHuL4KMBaVmVWMGd58YHCPstan63jjByy4hTJ4oJwJ6DtXEX1CajXDXcccLecuM",
  "key22": "3Gx9g67iuc2gVknUH5BK5ikTD8F2th1jhZCik5FreN9g3Tf7XyrdPdB4sjqFh9yggmBjXdFQGjomrZwHgY367GR7",
  "key23": "2ubLDZY7YaU6SRHfGPVPQY1Kk8xxa9bzArCoe3r2Av5V4ucRyd6tX51cgriRptdVyxDJDzUSmo8PP6L4bzJs4EV5",
  "key24": "4cD8dqjbh7dqNUV9WkmzajmhcojTnF51evab1qjtjj4UUw2zYcsyfG9NPFqMxwAX1HcMekEcogHprcg37JmSb3UL",
  "key25": "4N2gcWBo7RsaXY3FeRJqiMS3kMDerqNsPinNFMrMBN48GrtHiQ2xSfrseZKKiu59QjQKV27vaKRFGV3QpA1kymR6",
  "key26": "4DoGfzv5Y8qiQr9TCwTKUhzSeLfLRtmQuZaxkiixsvxzFf51tEtppfQkVEcAK74aMm86JiHe5eBbsnr3LUKZVnCH",
  "key27": "3b45z53UzpXTJ1urWPDNAivGHNWazEVyb5UadRmyVE6nT2mQ4uF11TeiWAAGjwfGpaFA8V5JvtJz3grMVUftPtdQ",
  "key28": "4wEsGYqUMsLkjNQ2fC5JsFGp2Tdi8cVmE4raah5gkrqF8cY8rZbyq4XbxAC8FPJmfftvZdTqtbxxksbnSYuQdsJ4",
  "key29": "KcQx1JTWSmKRQL4E1BinJZsj8kMrmfok9RHbZmeFqQrVLRasGiWBQ93FvwKRq24yYUbJ4Cq9SzcX4E1Ut5x4SXd",
  "key30": "4aoy2HLZ2jWxRiFx4SSrGJg27PQt4mvQFzz1iaLJwojCAXq85D7QzBjmhKQXLSvA1uVbnHHasvar6AnZvJzCr8Sj",
  "key31": "RCuvmLENdX1wayziWa2FDQZKpPQSpB5RH8Q2Yz9k8HGPJ4yqB6yLShNgB5BeZwaZHZ4JPonDxfatugdamWEdogs",
  "key32": "wK5EywbguZte2wHvrC5kXaoa712AQdXbXk9rNJTHWB73mAn2yRM9wu3LPDrtQc5DL4ee51Smg5Y4GrUewXHhihX",
  "key33": "5jc1EidZPX1ot989EeKs1GJQBpQrKeSkCuQzV5G6dshXdqvpk7pft66gnrkWZ6V6CrQ21TQCYg4svvyoKoGuBYoF",
  "key34": "4BAWbcpziBoq37YFUHaZwKzBjeEA6Vy7KU8iC16o5FQLxGhScqJoYceRi1t3nhfs6eyojaiXGZKwmqgX8a3gWocv",
  "key35": "3Lw1CK6yDrkKhHVH7iNHTp994K1MSwsu17H6dENzBqVhb32pLppsQTAeSvM7Ub9qNoqVfZLuYecrJEV3fZkMVgXd",
  "key36": "3yo21p6X3Afp8y4xUkjQ4V7NDU8awcXrBU2bUHiiJtQm37udgLRVQv3nJS2eaSpSYjdDprnU8b4JYKWX92v1BdYY",
  "key37": "GrrNmxhPr2pEP4LPRP5XTdW5ySQyPE9TnCWPaCbWPzVMxfV7zasFZzNNu7ZAAm76UzFpU8t9hXXue4GbJrJ5249",
  "key38": "35x7wvT2ToyJPigqTyDUGsmsCMB2d87c9gj12dpcZYBuPw6y74gjEBsZX4T38YTTXCLcGGDWitC18kusJhhNJkU5"
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
