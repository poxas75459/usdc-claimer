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
    "46rFbV31sfgwmWkhz1GZRZUEwsbeKpMbHGotkaSSsDzrHQpMt6YNx7cfTQtsde377vEevTnfVaCB1mh6xGe4XzZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPD5pmj1v7CbXTYpKSKaRGSAgmwgxkHGjQRKFcBTLiHXrsftpKd4A4odRcdkSS84BWQu4qLzyiSCyJ6L6w2PfTS",
  "key1": "2mzMyRmakVePMgTkaDBPMStnGhKCyQ5LuryQXTpRfGyBNoMFcunxg5mxFrqc38NwpFgeFcjajXMMsx45gmXDPmSH",
  "key2": "5YtfHrWBGfAEHgL5qvUqKHGrGeFADCYD2zszkX59VSB1pMZ4zA4id5fcBbw6ah3usuGNuapTe39hcMHrtAGqSyEj",
  "key3": "2vJozStwDqb4AE2c2xaYRJzJLiH1toiBLFgN1mYLjvsgfxRumwrSU2vEWkkV1MKsfjq4ABAvGkxqHXS4GNvS7mTN",
  "key4": "5BJLztzsxYzo52an3R3ugXCJMeMqG8WTVfhccExuH7wLJYggnP2TJn3h4JuTXUooqF8xWHDgHBSo52HoATBifuy2",
  "key5": "2wvtCUzzt7f8Lkbe4jpjTDRC9e4vbhncManwxJHGdWBniojahxEP564HWKcsTsjPSaZviqZMLg6qZxty7pM7RDM4",
  "key6": "55nzxRqqxctM6UNLiWDNsD2sJMmuMeTUFxGP8jhb8zoHXJkGJhs4ksef4pUMTm1VkTjguCAunQsCnHm142SooPcL",
  "key7": "4RxpUB7wqcN5sgzCa39NMvkU9CLWBb4Kzokg4Dr7Zoum3ZDYtbFDUFiZG57QhdZRPg68zdJ59cykjCaB1UTJTksq",
  "key8": "2rjoqgpyyW338ArE7azPtVPJMdwkoWbnHKbHoKaHCUXF9Jdo2AE7R5bVvr5jcAmffLYkqjxpZ88wG5cwGjeXz9NR",
  "key9": "rUbDd381afhafvwfXKBvMSqw4osoACFXRNAguxdPmFsGxPaCVs2S2XajU631ApmmTntGsdqBMRoGCTzyxSm1xjq",
  "key10": "3oiumN1fyvqpv425nsCj8p6WJCgL9p59vsiJLuyspwFnzfBhTCicsPfwEzkcUVxPPDE9ot8eDFCNMnFcdSKppFtY",
  "key11": "SLZqJXRZsForfx8HcoKGBZVTsk4dYJp3dx5QENgSfz222784MGf4N5zXQQKeQmZQoxK1ygGyBinqViYd7DFT4mB",
  "key12": "3yPqmZD1GE1ZZHdJCsFLcXYDgSX91RpDT685QRzqZ9cPepN8enW4Wb5r8v7fTDonwStoqcDHhnWx5Sq4FrNUvbd1",
  "key13": "51cKLXnKzTH5ryPCtuPrAWac41vBRUKrQ1yE4n4J2kmNRtVzmM9su8FgZTwnRxfvDaeERFYXCHWGKz7LjWj4skeF",
  "key14": "2yattz8QDTd99fEGPESstgD1WD8QRpugUkEYr6CnZ3TJUxQkLHkvhB958JDvZ1KZqiPRVFSwUH6P2C8YewWrLZkb",
  "key15": "39tzw9mFEipkRc66YWgpmrNjoPtZU4U9cQeAEH2zmJoCtzicAGHC1ZPe96CBpQEayLsEgUmXftPTF8qKYRS367jY",
  "key16": "6Svj9vsHy6htCKMSsoNpDo1Deh6kHmJfYnd7xQTgG9ATXgmufz4qGCwAD9PToGyC4uQmcwGe4N3ghj2xCG75cEZ",
  "key17": "5G7GuvBR2Lf8FGjxoELdRo14kc3b7cpA2ntXXpcPvtp7PAJJYzAdJKRPycQAox6FbRiwFJ2QUDsdTHjZW9Q6WxP3",
  "key18": "ZSNxNz17WNgASxdJKm65kX9SyAwmHGd8enQTtEkjWQuEVLkWB1BtGk65rkbr9bmHfHkcjntfsaU9bqkQeawUipw",
  "key19": "5yoFQrTecnkSEwZKGTkgNQjURwYkgoBDhCurwGzJqRDAGKyZXCgWmDyXCk46zMMGHwCg5cpW6oy5GgEYuYdWG4VZ",
  "key20": "3tybdntJwG2HT8DLKgfHtMLrYYfpMALyNS3ULuoCPWae58EEEeRS25jhoy67M5TopgXbfYVfXoDcK6s8WeSmbUMW",
  "key21": "moL2MMFyqXPCBmEhmzV2vynXH85gsZYzC1pb5K7pEjLoQoce9X1oLidrw9cfJgDmBKqVUGgK8QFBLzVrobvuNRP",
  "key22": "wJGtzordmiNUgj1dpFWm6ZUtQd7Qccq9ZGSMg7Pm1GCa8tqfaUk496SUogM8dyAotMthBkt9QADeFzcJFmXQQAV",
  "key23": "2NKz2fij6kSsU6amyCppv1zgJoTLxPwyeCewJPMSv2V4Q6WVowKPfmPWeJTFHC2h6AoXnZSWmqGnZJuhwEusoDNF",
  "key24": "3Pbqxw2wMN7s2nY7rLN4sV59LsPu3nBdRLtZ4HUGzv9xqTH8hXLXCF3c8zP8gbcQQTTLBqAqpnBfhQZes8cSXSS7",
  "key25": "4BsGag6mrz9kfYhv88YoADoEk75enwbz8Ka5cVDomcZ6bwyDehrWcFnkgrvfXm87vTdugM7Q8WWnwZpGq6kAkuah",
  "key26": "cwShXmpF9ahWPNRA1cDyTF49bZ2BMzGNcLc29dvfcZdJvJJh5VvgQEffEV91sJvAijgK1v8GNkJ5cMTZFpzEAhF",
  "key27": "mvaU23MuiWtPKxsckKrzLj7ep8tC17F63qwKe6418PKoHxhXaBZNCFCT6B3S8PBFf6BearFp1pP6isYHQotA55a"
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
