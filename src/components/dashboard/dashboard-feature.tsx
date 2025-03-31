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
    "4hiU3BLTKeHEXgXLKtU8JZzHFQMBNuAdxUmb5wZQE1BRk7SJRmFwWo7QLHiwFFcQw8svpQ1CW9PnWrno2tD8qyYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65geaA5t4VYX569fZmxNBP38rWfgscoxZ4rXb3dc2r3uucgfGGSXFtVx2rxDTYkRGkakMjmZVPLZszMQtKF6Rjou",
  "key1": "2tReTe1E3YojczL9UDAuYT1WD8WppA36NV5HzJQRKUDqtbVyrZiMv6pnRB4xc4PVn38yNqTFaChrsLekEvsEK75V",
  "key2": "25v76uUfirrWbDfVgERcoGrqfuaxRhaGDFEbU7mz3ncQGTMXHD9qvFgdYwsSiKTv1qBdozdmek2vc55VF6vFmSV2",
  "key3": "64pxJCbwYqw3RnxATDBYxoDvxGfi4eXmioCq2HfJCrQjjvbgor2fQBKtSagje7Hf6yvyXvDixSX23cBMwH9fg7w1",
  "key4": "5PtvhCqPdgBJBfskrhm27X54RSGDyti5UoAbaB8W3dwVghB5SFfqyTpRRDNK3oYSB88GgSy7RaoWxSbsLT2ySYFw",
  "key5": "3RAmtTW89teVkgjH9jxkEvHYmN8FKxxBNKiaGkrZt8AzhXpLXJeWBu9o5v4akETj8wCCqw3zuRa1RC91njD55Dfh",
  "key6": "22kvRTnGF5TGrMQ5rkxa3fqiRC22vy68g9WM5m8cK2uMooBtM6GgoFAcVFDW8hKPizPEtJ7ns2cNAicLxrLnJRog",
  "key7": "35frUGE66TsckjZPC9tPvR9y1jy69hGPM27DPzDpMzjMHYhBK7h3FH9hFTY2Y3uuZ2ERDxMeHM9Z6RoXXw6ncdhf",
  "key8": "fpzpC8oSbPbytcvbzqdjGjJvsk8DtDEfZELGymMUNZUdKu5aeZnJtAy7t4tF3gmzuD88troVpRFG4X7AAxoWd68",
  "key9": "3zD9K7Q6f5n3AXxTLVMrbBfsgQ2iiDZA81hcki6L2GM6vtwx62jwWJ4xvjcVLuH4tWH6aEDAMe7AogKa7f2xLYLd",
  "key10": "4TmKEmgf6o6vvbTjrHiVMLJ9DY7jx3sgGyL5wKRVHsfDdtX4ireugyKyeZPKz5psNNgUFQH7VzToGnJ6vYrMwWPK",
  "key11": "4tUS38M3ETrRmobkS742ZY1Vs3xGPovFgYUfuXqp32U6j6iLSn7KSPrbC2dfFCfztEbW7t6Nrdc7Nx9vJVFakCrf",
  "key12": "QoaC2RxptYWSMa25gubDZQpvfGhb8rbo4ASuGJ1a69Y6GDdsZEhjRPEAgxDMgQrpv9Jt54WK3Hm3YVZvy6WNcJY",
  "key13": "ujG1ant5CAe1xhcfEUM7z6KmPEsa9MggWxxjTWsKUytg3VHxbzXGdfmB7sQvnWMB9xCBu8WFtBpifRqg4MrZbsN",
  "key14": "2sNR8yKzzdLneP9TjiYgm6w4KU4b6Bf6ocDL6fkvHmpKeog5qqRrcjFvtJnSadw1DCXyxBGUYcxj3PFSSBP84stg",
  "key15": "Fk2DkWpDMawu15qCvWWaH1uonjCrUzsE7P4pz78JYXGcSEmBJHa94KSo3F6wqG8pBps5xoCpahMtC3Ph6Tf5iJx",
  "key16": "1EJvUGpGLWdQJrENfaTTnGNFpvX8aeqT8XjzAtb4YWqdLjdrtQjFih33f3i27tCz4feSXefWjUtwW7P34QryeE8",
  "key17": "5cncR9PhfP5hbr3pV7h3XNvc27Lu9XQLeNKc9VYPUW26kkeJP4LgLNnFSBt7wLEMpCCgbDkoarnh7eCWbrnPfcZ9",
  "key18": "3Y3R9syFMydhWiJwXGFUDAe1rs3QfsGU7Yty6MZSgaZMj27hS9zQurdHc8bNRX7cBHwB5BR2zXm5tEizK5t4bLhz",
  "key19": "4KmADRK1VtmGxU8aAHSpU1WtbTVaH6Jk9xZgUQnZtrKMVRQyn6TVwEtjohrEEfYhASw73CcANqdLNsagpQFGj5KQ",
  "key20": "Dr4wEjpAVphaYgvvPB8mweRZNUcySnG9PRnvWdBhHb76WRe2ZRXYAb2KwtGQJZBCAqijf7PFGHTUdHK2YhUxcXy",
  "key21": "5MZSg22xMPptiTSdmxxUQDu39x6CTvqeRNSqEUnwmpdQzbSGGbyBMECPbeCPzmvxQosGXpksi3Nvh5k4Zibp3aAs",
  "key22": "WNQEgfbPpQcJrfT8pJYwqRh7kKNpGTokMLG6L8kU7EMiMEffW3vRrqceDwpsm2AtmbAX5k8AtfegqJfaQjBMhxe",
  "key23": "3iu3zqStfdcqFD1jDTwaxyoyh8E4gdiaH8ebqrad7g8TZdmr96bzkZLQkR1ushdxMkcSK3GbtF1PuxAQWLzmLn17",
  "key24": "3fX3RQKDPtp33bqKKeBYKjvUAGhEyhsCE2e3t1f7XceV9i3fL89JBpRs8rapsuUwNr4sZugyf7wymFKrJoajpvrW",
  "key25": "yNWZ2tKxtwcCLyKeYH6r4Erf268B29vnbs2dNFXwWF5q3tCRunE97ewd82UxJgFeqBhjQycy4Yg3gy3LMdoDNSW",
  "key26": "HZ6vPZvi1QQT3ggDkZtZWjDD46qS697DPnBjJr33Zk7mkJVTBFwwzuaPARFnwvjUrv5MHU75SnowXe421ctyGJG",
  "key27": "a22Trq8Ag5y9SmkwqQWzVUDGbzs1DaLsv8jKkE8tFTLhGBtFMfHCo34zGSaXwfwATS34iEHyt4dHxJgTZNtXoBm",
  "key28": "2KuzhcmDUMtaF3B16BxKd7eCi4MU9RXzCRDWnLHyprf7CsmKDGuaEST85Q3CVPLaCjhtrScgWuwjyhLM9UUyPR6y",
  "key29": "4SbUFiHJWPHToUexsVzQrrgnXgYm8YkHcfaeGfQHP7Nru35PB1tk65txjY66tBdJWR4G2gBjTiK4EGEXBAWM2XU3",
  "key30": "63uPWLaTjWVeh2uwRDkhHDCLq6u8HaqPTPwcoYNBAzmf5o9kKqqc1ecPGpBmExHtRiWqXv6w1Y1kwkMffGPr6GsT",
  "key31": "3P43BbLLZ8Ga8EcfrwNRMFky5WAt39b9VhmoTUaq45pAg116JTPsNtuJw4mP7FSL9hRhZJnS9NWS5BPe5EjspkfH",
  "key32": "5jwiCvkVsY6jv2XVGJor8th9CkCLTjEjJhGysQR23o2Uua8PoACoVLHCC81ZciHunqsRHCC6Tz7uenUeEKaCmuP8",
  "key33": "2P9GMCtgsdrH2YSy7UPbTCmr6wA1wkxvDn9hcWzB22xh6aMQbbus7sMTR2Mz28LEZ8kJpkgqirgF9HANjyhwaSrA",
  "key34": "5HFHZjvGsYGCkUedjnGCCQHgse31XrP4Eyn6JL6C34iw8RdttvJ2D5AJ5n2kdrg9dfeKeQ8qGRcv9UpAq3L8Mzi8",
  "key35": "3gnkLAYYStFgzZmCqRZQsft6DZ9HTKgwLC56CWsbyrN3FrK8quswbDgLN48M6GPsfoSozGAzwvGVsGp6uKqoabyJ",
  "key36": "25kbvvTNGRUjHDsVQx188ymw3aYJHUDzd6Jvajoj5T9P7VGDsCJfdMPLnof2SWB2j6YHi6z3yoPgtVDnEnbEktXf",
  "key37": "3tDrF1CDG15GQTcND6fR11s864c49vnupEudS2TTZcLVPSfy664UXRBBenZ1T6n96VRCyD5B6Z88BBnxGxSSCgci",
  "key38": "soL5ECzQAmN9MFBqGLEY5L1M8ErUacCGaKQBTTB4jL1gSgqJK43uSj4nwAC9sTSgk1Rybz6EVsVXxEyUhPcsz2u",
  "key39": "1HACbjN7tUgT3u5BHCCCfNg152AFMpGBh1jWhd9eGJV2fsUm5sLBJnKEGRHTZg3y9F5n91D7wij3vh3g5FbwoBe",
  "key40": "JP5YckciDiKuV436PcchehjVa3WQ3onmD7yeX5nV7eteSWyN3dEQzgW2fgHLBYQXSkj3JGjFZY8eZ6QsFaUTzAt",
  "key41": "3bvQF6xe3u5QFN19giRaeX7BFW2CJB13YQMkf3ti4N2YBBTR9SjMmPjwsz2MKjSCzMtEomaYDURgWsH3FWdtse4d",
  "key42": "5P4S4ysBR8L1UmbHRN3bNyRRucCdP5RjJCFWnKkTd9xmdRXepfrD8XQEyKFSNbYqQp5wF3PwyPs1Q5DbT8WDXTtc",
  "key43": "cHvDvBismkGmZcM8AyZz1cHicvXkCRwBLep6c9QehjjnLw5KAHmQNVxLc6uj6dnrah8dN7ii1gQsTxJRL2Fdn4n"
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
