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
    "23X2a9DGG5VHMf1yfqxJuYigkExsLsn8cmferGuvcxUTnSc4ksULKTFyxsWcKbJ4LJ6doqnRa7mU81j9zU8cXFYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qNexiDoP97Y7tjJ3Hb9K51RfsV6cvryvUrFisvd26RPyFR7wRuyYE7pLzCcoFxitnnSKxvNvBKy9uWFeZbnwTXW",
  "key1": "5eWc1ZZpdPqrFWCYpZvDNqBJyCLyDEqYDYGfHpEYdTL2WA716MqdkibaexUJLjpCHSjpaH5Y9q1izzxVj8qmGPze",
  "key2": "41tfNPr5Fn5UporEgRoukYtctSYYcuz491EY4RXadMWfetmV8USCiWynRD456GkS6DqSX6aCZFEvksSL5GA2vCBu",
  "key3": "46CdgzJAm6TsE8S2wpziL7iFH2BzRaZPQoRykznvs9MtoKjHLXZHhbsEx8pqWCCsbFyUjkjWQQgdiCn9wtoZ2r15",
  "key4": "4cf8rSE2CDWZhQq1b1j9j8L4Ry8zUQMRPpHKLtk8y3P7R5WFbWAvNmT7x9v6ADbFpFuVVPH3oQaKT3nfuMUDNUHS",
  "key5": "PaGB2daA5A9zHcvfciVrkF19UiRfrTUsf51AsvMPNzLP6jj6oDDKVmufEBiiLft7vLPxSG5o26fkuzpJLT9Q5sQ",
  "key6": "5Kk3tBQMgoievrrRTYJiKF5V8W4E4FeTkuEQ4FpzzRGy7RwwQYvghmxSmgwpBbhC4kEBLSXSXW2CsxaMZ2EPWeFW",
  "key7": "2M8KZDgyw8m3srr3vgYqLEV6wif54RrjqHd21Vx68BWBVN3H21ZLMTt94PdwmtsVVHQDnQfgNnR6VmXw7rLX8NoR",
  "key8": "23zit29mVfKQoP3mZzr52zzHLJSetkahxZ2rGTWtB4sXmMnmSHjEZUKDL9B49zT5dzQahUN3ZyozqPNBLc55haTj",
  "key9": "46vVXo7XfDfDervQFF2ditAXCvyJDd6PhU38GHd9GEeYo8LWXNCg2sfZxiycQtEtHCErHDxjTW9eEdVwQ5KMygfL",
  "key10": "4mkuj4bP8MCLM3j3yBSHi4J2kxXyJwRj1hBQjEYznC8ewbrnyiqX1wUxdRmCiqMypeAZWc3peadxPdXpN1RwmBBg",
  "key11": "5soks2Q7NQS8fwG9NDsq4AoBvypteVwEnkRBYq8jTpvzhLiR6ffL4ZF3TYRyfeku5dDMXWimBPdiJkr4ULNPwVFn",
  "key12": "2uqPGtQF6azCQoiZTj1j5JmyGFv1rfpnaQ5LDQ95sHD7Mg7gp4KwmaJcCyfbdQ5T1jiTWh1gWNxswsjTQYW7opxT",
  "key13": "5ruWq6Wr8KoYf71H9U7oTBSHySXBm51hiQvoB9QHihao1uMuNcsvV5i8wWfJkrRA99pSV9EovB8SR4mzgw3mZXEz",
  "key14": "N6JCdfeq47cAYgRvdj4xkqwh9RmbmP9SoRw4zeGBNLW4Gr5R9G4A6kWtywnr8eBk5Fdam6Jb1ths6vzyTCMXkTd",
  "key15": "3CeDggM2pwTJeF7FmpHEthYdnoYsMNap68m8gFYwUDUcBdfzG6XMACRzX5oAfZxJtVNwmwg98Fe8eStcJfrRPMLE",
  "key16": "2H8dZ4SiArQaLJncQDRKmVaseau4vGPKDLEvaHtX9BahX5wzS1o9sddXvA7LRHfgR8hk6AZCT8xFHUDbrAWT8jck",
  "key17": "38TZAbYDp4kaJiXa5YJXH1hGpGSMXFUMGd7sXrD4V3mfuWkDTMPwktLMSvRPK6fjmjDMqWC3jNCHG3WyBkdf9BHA",
  "key18": "23yQr3z9Wk3soHM4rQYLrwhPeLA2xNDgnZVEYae97bvYfhGYzGafuRxSeAvpGaAP9UsQxU6s4xtCJmUdSgC7noTw",
  "key19": "4Hn6DwW7t8SZTj9sEGXwJWFymZgHtmUarnbdzDsdc7ceSSs2T7tgieGYkmnhZXhuK7ccJF7aTb7vitRRcBSGks8f",
  "key20": "5bsaGvJpHCsb1xX6MntQhDWwUNPYsjBAgpXJQmUXjNG5PuwjpRQqCa7c1adGdUV9mpLnyL45Wt89iVwajgpkTUhV",
  "key21": "2p4966j77CdAnTDXpAkGy7bCCdH2cRMwsHpes35jeNvf7ZDiV14jHGZp8CADJ154kGvkFVYFHZoUxNo1HceJ2mnw",
  "key22": "37mhtWZYixvWsGzmfg9Lz8w3Xcgc5UA3LiANHFZ4NpmPe72uZvHuFyQjxAJ5HxJP8zgu9dQpJxMsniqP8qGEnvUA",
  "key23": "4BWNPiHTeQv159sPpwFVuf6YGPjSvcb8URaArXP8qWiRF3KNXPpA8ejc6URCQhBM8YEZ8MSFVSS2H8c7AS5hYCwV",
  "key24": "4KKpJe6mzXyruEF3qRXw6uL98wjkwBuyzaNTnRzMyNWtDmNWP1pCuoHcD1RxPA3cWN7xYMkWEXBsKaxPcFTpEhTc",
  "key25": "3Qyeg837GurrFPnF1XAaStX1Mk4sZJyM7KwuDQacKZ5NhaNNS8Bf5R6y36djzkgGTfqxbbZeaG9yyncJ7uN7DhEb",
  "key26": "36iYtATUxxz8e9qEW52n4SeLr3tt3yoiyqJZUVaVC4y8ACqDG6dg55V4ZYvkK3BpdaYjxRTBvRYwg84fBanhF3Rb",
  "key27": "5zxDaeZWTjYCDi5TPuydccrsFGCWyH3CuE632DUFK8PcQnghfTUDMJ6yYZfiqvqnAS1N59PtrtxhiGW4Y6DSwL9Y",
  "key28": "4J8brSXM2zYpTRRgeBgNSuVeEhycv6vFyGqc779doHFbn6gPMvn3BAp5sWHkodrCxK3pPydsmpR8GSTdqJHFo9KJ",
  "key29": "67jYkRzhiDVoMZTHG9qobXxCjUHuP6zkPu6c2m3XXUwaW9BrHUbKm1XqrXuvdsgh3dTFtuzJswRTAhB9rXhB4VE8",
  "key30": "3SDMp2RC2ndERVc5hoBqar2d4KrN5iWZ456wf1y4nw6tCczBrmcuPVDUNp1bCV5sFtkHzmdAiR9xyUjwMYWhBSqN",
  "key31": "HrqSLpVewn3da721mv11fx2spkoBbCHUPdAQVq5LfKjyfRCcw7U4ZsJecghPerHw2ZeZmTLFC3QCxWFgJd4TQo1",
  "key32": "2Nvz75YhTvu8MJ6Qe9rrUSrsWYiz4Bwahz5T4UcyV9aKPvhsPYFFbeo93LjsZ2jntr6ngJAsm6JxBoYdhYAp5P3",
  "key33": "5kTshJ9HRYFJFZ4XY23jr54xDPFgcuMwur73nePABtwJjWdE3exU6jzVbGxpxCLUkXV9FnPRXHqmNXeMcGFcfdRp",
  "key34": "2zAB6QaAHuLuRnwqYm7s2LrPNZ47rm156dN5rZaWMnpF2AtRhwc2RuyYFhH5JTTe2sR1n4adY3e5MGyGav8RSs11",
  "key35": "59nFo21aw2iBd89aRbzis7eBc14hPhP6KcdY6KWMBWLk8KHc6uMYibvGUg9RAjs2ti3a7vDAn11wfQkkdpqdnsPx"
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
