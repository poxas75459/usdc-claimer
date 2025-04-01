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
    "5sFWnxubYjR5aCZT1Dhfsv4vNitbTrQRWLddfrxRwkxk3hyHQcrFybk661hZ4y2i9MXZtDANrSvccpY3aCLEDzHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Be9yUPEeXbRC2LcGY6HjNTqbPGzhofjmfxfnE4UChGcUYVjwNrX4YBbwqkvp37QdHMSCvgjcQUDXfGA8P1mJnbZ",
  "key1": "bWroQZ89yAsPXf2VJWpRpbyimCByNwiLQH9ySJA9Vfpdp1Jn9FHSYJsBwMQAYdC4w69qfKdYKwQe6jeLjpSDKJA",
  "key2": "2dzmseoCiivqXyQ8Kf4kAXWWawT3r2DsvuTgCzsoNDkpCCzbYaRJ2dLHjuiL7jbNhZsRzQ95mvRcqPde7B6BwQN",
  "key3": "PH7dWaxPniPV2WaUbYUayAowA2XYvEQe1RWkrt5TUbZX71KyEZCdaitX6kMjRABAYpkLViDnzb2PAGU1ajLzpAf",
  "key4": "2mcLisr7dwpw7ChDWDNLbVeDesve9jU2w6n3YbAkMyLmzVExXCQCoqNnbuHsCJJ6b3USyLpykuD1YpM3CLF8NXmQ",
  "key5": "4z71cqxt5hss21NETZjhA72vfuYAqbgjCngipP9Qvy1G3vd5b5WTVhoA5PC1FYpY2mNK6NUKr2NNvBjgQUq5E77a",
  "key6": "YunNaWssT1kPJoaBGJh535P6S9o1Z5AX9GnvLNhgjAZGyX2i5gcPc7sY3QVTaY1Xwn2PLTBrRHSvk6emzQiqtes",
  "key7": "2H96btsCk8v3BdyPDfEbGfiTuBtXfic4WzNW1n3NHVyoGhdrnEJr6Ezs1ZPyNBUM7sePsNK3xQDkqPeyRCJcrFxH",
  "key8": "2BQcwcuFv8b97eEfqzcaQUf8ofzyrannWeWQcCiFhRWpYeG8A9YP4yTvcofG6TcetTCViy2cX72enabEwFFfHJcQ",
  "key9": "38aAWVPrgZhydthTL8tmVoXUkXSyNraLxaextULeY73nguhEMVSCPu3Ha7nEnepwFhLiioVCsNJtpZ6k9dHJgLF6",
  "key10": "vLipFRnnoJYMnBVdB9DMFPpE9zNQp6GLd4sv1Xb985EtKFuuVEKWPTxPXTwnz7nuirnkMfCo1aKkUGxs3uDh2dL",
  "key11": "3dHHfjr2RzA69NQ8YEMAzMu1gWvwmZFHdadNMNigVrsL4eoKhHckSzrhZUJFhnP8xkFKqZ4FpWPTyidMz2yVFf9H",
  "key12": "ADsUCPJzhrm16wPTkBDjhn4GC77jBVKh4EiBp2S2Yy2KkcDcMXEmqqxGmK1ApRFUBKMsGTzW5o3KGPji4PeDNnL",
  "key13": "4J1X54xWTW6Xiez3NpUv22cUcBGdojfbQ34c7Z5qBh5AUXVRmK3DLoE2kQgvaPUT9Vk9Mc9r7oaCEFbKzcAPwHrj",
  "key14": "49mDZNAJLAfEWDaCMLJDMgrKTymR9PtwkcmvkfeEFLasYcqB5gZjB2j2Qz7wEAg79ZrHCsi3ZRz7UUppbEWMnyfC",
  "key15": "2ArM3qLkKUyGTugXyeAX9PNnMYvQgoFGL1cchPDnogZcdQoRVk7w6AxHXC8NVsqrKTpQ6gLqDkP1qdftafsTp31B",
  "key16": "4D7b6mqk4fVNbXbjF6amWJPb7dJLyk7oBPCY5RPZyCv9vg8vn8cTJtX6aw5jtpYPtR5nr3retjRwh1pKEVYSnAX8",
  "key17": "3c7fCXKj5cvaR5VuHsDrb7kuTQjDz8eCrcGResC9LYc36SSRkGz4JhePCBAvPm3NvspoxQuiqE9ZzwXocbsJG679",
  "key18": "5ZEKWyBaHGP9HA6WQm3wgPNGryDvkthRnyiqyWvNsraejuznk2ShdRucMkZPqcw8izk2xnx5TH5PFskz7tYYRBNT",
  "key19": "56VTHTftZLSNf74gKg9suD6BEyqABLP7RzDC5WBKq26QjANAYKGFVAEHkWkv9MQk8zFRmxezNnrKTwd5e9UC1uCp",
  "key20": "BCHeT133RGd71mgnFYSBGjhFN64w5kqnMAFmETVcD8D4qvJ6fBbDMrKgB8o7PKrcRXqxp6RMsoDtvz3EbN7HWou",
  "key21": "4p5VQdgiKZTc9cg8y2mLTemSdJiSrJsVwCWqp5mGnzyxXB6S7cShy7A9ykEkuy14j74vNnoBjh9FnnMBAho1FXjj",
  "key22": "3cvVwHpu9EP3c8ibnNYLLXCPojDeFJfc67V25prBmhJgKTBMosdV8RQcHeyx7nH4NrHuKAzVqaDyynFCFe2sgVas",
  "key23": "3GjdWqkXotQkh6jHPiQS3rJWpWepz3GT8eZn8YE5KAjfSZA8JGowKc92wiXZxfG6LBuau3REQvBRFfmV1LsV2Dcy",
  "key24": "4ZfEGf2SNb3ZixYRRXkSMr6aRYEwAz7fNUmCatqnnWEBq6miBzkVt3NxcPjVYHN5DkCfZg8AjjP76G5Y3Yegfciq",
  "key25": "5oyYAoyztdBiYX8ARbaPerCoyQK5iBnqmdjnekDMitJk5WkKurgCxGspeFNG16xEhFi7EnLdhVe3wDhAYezzrcDE",
  "key26": "5pJhyiqgWF1GAvBcBgC41fG6hLswK3FMx39VU18kMYu9XdwKegPRQmaqwSWgb2GnwF9AHuKcG9WRjbWso4rDPHoR",
  "key27": "5L2EQ349U574wE1yfmtm53SsxHCzCmydzfeB56ok4u15jrfqB7x2SiNywmERS5Mhrgt1qZcit9TN9vJD69XYszA6",
  "key28": "tHFfmR8FKcDcv8Ud4Hyq7Jmeq9q9THsHemr12aY29AR5zkLadbjuq9tUvKZqGrdHeTLbrnzVovfGWEbw3mYEKgq",
  "key29": "61AfzHHXDVsooeJrNQ6smNTVaE85653ZGuV3FCr8C5q61MQX1rVrT45zxCHdVkrsMKW4tKZkfNYVTgkMQZSedke1",
  "key30": "2yydLuhwcrZaHEEaSLeqDM2kpAfgDJFaGnTNfF5w2ToTHkedWyPVWCSuooxoxDtf2Yz5qZ93PmF5RMEoKMvjenYW",
  "key31": "5XHQmtz4pd1f4TFGsdJHQEYyvRasc5dHwAkGbzPbyBeogmxdhdbw9D1YczuUuEUwUNHgySkoQvyd8Txy6M6HyniC",
  "key32": "2xiCy5r8vqsyGhCbBpZ1DaoyE5JR4vfP9251rCFSL6v3ZQiiBN9VvBuKu5UADGgVFrFURW4RaRDd3qV8HBnxpwkU",
  "key33": "gcj7FkeukLkzSuypCntrDXpjjKvdLCkYQsBZbP4CLVT1VdyJiHVegJDXhort7mXUdqtzK4XhQmsTWJE2xKg86pW",
  "key34": "2o9waPKtFipUpXiqoiirHz78pTM37WHMXs3BW6VfXjUCP1bKd28HJbd9opeH4pPAMFQW13JwDixvaTwAhBS6jXrW",
  "key35": "2CAP6iYRJFosaRUGYXmBkky1qmbVsTgvWASVfXjjAHBkxPjuTxGJuzJPYWqtzoUhcSp1RSUhFPkpVBaTTsxJ5n2K",
  "key36": "4mZLR2enSjHCKrknJNniKEyR8Fn197yC8bZ9Mn9mfq83MAfKtnTEuQCMripLLsLWUZHrPL6TYdJg1Tmeg38ZqUTL",
  "key37": "3EveW5qDwc1w7o5FQRQyUs7VTADWBqYwwqR4LnMtXfbYWtmEqpFHKYvCJ2dj7mx2c2MiXdPVvKZHdz4oys1GCinh",
  "key38": "5xZrzNbVoYLZdmxWxdB2PxmN61EfEkqXhZEaADuYFyJXuMUCRSWoKquJbx7hLCXxcJJa5N33TzuBu753TSkwLER6",
  "key39": "4dX1ECuHL5NYLAbeekZB4mKeBmxTxSKrQw5UrWMmHAhLVztApN1Ms9WNfLA2cNBFqxetf43wkkbah5kGsJL26YLF",
  "key40": "4E5TduDfxuwU5FUUJVizDiKfQs8LQmLhpYQXRmXtGRTNBJAJQLSuLpwHEYoZZu1s5z53z9yihAPY2CHpC9Hd96A7",
  "key41": "2YDSD15GJ2dGNenEjudPKjKh6R9789iBGHLxP9p95r58ybmX8e3fugzxWUWnAec4GniDrLfqDNE618PX9unwK5Uv",
  "key42": "5mBAer9jy54FSt6nYbJqannWbzSodyP1h6WE23Jopx7YNSA4NbN6QkP3FymA8wgzuu2DvGbFuAM3yvWvBPf3tg7H",
  "key43": "4XHMrFVmgx6hWqf9HFySZNLzjNfrjkpyjkuJjsJn9jru6HsV7v94SU2Gj3GmebHTZmUeqHgpgAPMqXwj33uJAppJ",
  "key44": "5hLX2WoE4xCbTn1AA8d27ygqN3SwgV88ziAQj6p1THhMdsCYbfEsxKbGQyLgrXSRKPgm7pfH2fH54Yb3EShHsgCD",
  "key45": "7TM3FjmkMMLxxUn97sBpHPXtVSMkThKKbXTkZ5cukGr2CvcSJEvWbz2C6hiQ1Z4rH7hvosZgWMDABxkTrDYkqbj",
  "key46": "2YE9i3jx1sG3Ci9NehDBLfCUV7Z3tKKsUGWSyknsFox2mSxCkkDw6d28wDFc3bqBYAHrv7x7iCxBvjfbEsL3HXvx"
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
