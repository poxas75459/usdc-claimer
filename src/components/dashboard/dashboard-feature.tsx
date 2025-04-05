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
    "4XWVKthtEdr25dL2ezGqN4UWT8JuB8eQHSpTeGtxSwMXnTyfChXaHvKtVnZpHHbaZu8pL9EYfcn4e94BbbxFV325"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPLbyi3axzVCvUhFZitpPnDB4o6q5hxkrshHQJQ4X1WWW9LjRWn1pVRGMYbsYeQoz4Y66FkXA2xYtXb952VQN9",
  "key1": "3sPSjESabp6LUD4SvjZ3vc8f7aZ1THCChgwp54FaV3R59yKQ436wegFJERkRSqALJRip7pjef8DZogRwatDkkgzB",
  "key2": "36YdL5Shv92t5bGW9P4acatanFZ54Dh2M9p5ZbMaUnm9dsYU85Q7TSmQ44KThfAb3SCX3CLwmDwBShCFVUHDqAh4",
  "key3": "5g88pnYr5bmR1WBU96uWMGSXdP41gZJD78ibr55SKDfBCSrZvU2qH7mMU1T2vDqTWWZpngAP7Vs6rkCBmgYtzbfP",
  "key4": "sWx5wif1efiXxFLr2jPRjVps9aXC652gJfFM2hqgo8WfNRRg4YrctAe7y2h7e8mH1FPGRyYMLeDbQgYLC6a7PtF",
  "key5": "5Ki9JendyCS2U2sKoi8isDNvmz31yzYwMNYRzDyvWvMmBLfcTVoGWqsAWMfwtpVa2kCVYDBR6NpqF5ezVetBvsZA",
  "key6": "2gpweub7si1Hznivby8q9FBGVqicUebLjdcCJ7h57x62LmjcoEHRxWGSshEePi2SFJVXW3i6LLEvHomMBHDREvDv",
  "key7": "2vh1FFtmpGzxdsj3K3NrDEidzPaHsiJRcQPkzZQo9GB43pmryUAYqFYVR9pC4TpMQzBVtZG9N13Rw1XBRtvdiomB",
  "key8": "62Yuuvo9N3DaV4d2bsALdNk2PfpHom8HSJsxWpxUoXks6vRVAuhY2LBGVeFXLgWZQLyKuKXrNLKzCXrk5Csuqjtv",
  "key9": "4VAYsL7Zh2LUA6MTkLZQvS4PBgdWkVxhCzrPUfUhJNcFYPMK6Mm6EoQLKofjafBtBa949DVVGiWfpNNUazhGeMEs",
  "key10": "3fY31jxadg2Bh8iw1sykDM9EAh6rm7ASg3engjbHzFxng98NeiLKuNUto5tM2518vDLbRHxoHjBBVB9a8SDcj1s3",
  "key11": "212ggzJ1E9tmX7uGXypztGsgEcYwiW723Bdg7aB3Bmq3XtSMKJREhFfcR5SJDaPGSqqMZr3iey2ttmgWHbDWUKcY",
  "key12": "2jwqn5rFmQ4CWqd965MRvgoT7EDgEJVesADm5GQBNEysB5FRZNYpV5ExEqxsM3bD58uu1ygskEMTZPYVpuCRQyi3",
  "key13": "5byzTHuHGJP1znxXc7T9k4Jgv4BQLEe6Y5hDSDW61WoyaLK6uyiAnXSbhupSzwJJiz7UWQS1AM7f3XJV458CkHs7",
  "key14": "64JivGqZ3cbgygfDQYtjDNETb53g61RaP9TQ3z4WeZPQiuVYdCmW6f7355bALYqNb2oZX1wo5xrrNX8FFcs6Dony",
  "key15": "kgWBkumS2UYHQsgZ3kq5WVgd7DB9KTmwgpvEYrimNorhA9CLc6gYpHkQeCQVPjG95z6PYChinaZcw7RJZ7hDgVC",
  "key16": "2tc1rYhhjEoB2n3QnhhngH1RgbrqcP7u3UZHm7UmpuUC4YLiBJnc1cFEABAXdAePomoyV2qUyWLSnz6F5WvYHHAy",
  "key17": "5BhCsxVCh9mpRaeamFDPvz5SsheSPNsdH8dFUXhWMgqjM915Pg8Wou6h5HT2BXFAQteWeemBrAguaC42CnyxdxJw",
  "key18": "2AiCeNtEsgkqQM3HA2pqmKMiMdb1Sq4nnyQ76BFqnuPMGdjpSUtpSBLG7cdcHrCUGttPmQkWLKTA7wNNDw1XQ99E",
  "key19": "3fczU6sx9Q85g7TCTbUPPRMmRZ2snCGhKEAAvxguetnpB6PSSyK5NuaMPh41V5AipsTfcCDhPcARsU9hA9L4tXDo",
  "key20": "3qzavyVEzLKADTx9THphTDvDdXKdEgwcgH5U86kcAhqJEcxb7pD6no8BMZmkPHiGKvAWn8UCn4Wn9aCGT1ev4jMK",
  "key21": "61np6PA1A2dtN6dSPDFpJScsLoegAdbwZUe4LEDmn5h4DderbkwatnymFSz3utK9SbPEVkWfZqZ7UZqPAWKcUxDK",
  "key22": "3NDRUuyN9HEwU74rCpaSQr7SbNiWqAk69pvCvC7FA2BCecZh4gsHmmifaByQAErm69ruUnNrikG6x1iWCtM8PWFT",
  "key23": "3PAuz9toSQYoSvNuhbvAiRH3V7jAQNWsDJhU2Pw4RdN5BnzxqGeNSeihGGUaJva5ugPFgGHMaV7Aca2dSV2bhze5",
  "key24": "2u16WrBqoZThKCssxhZk4zAZobVgGCDxjqJBAQBqsSa3bRgxyYrrMyKuKJV8qtmKk5RwLgur5SbzQybLxJLw9aUk",
  "key25": "34jqwaB1L1iBAtAjmYyyN2R5PHsaErj5uzusHb7b9XV1BmEkjDqQ4ZZh6G8dxhWUrXpiw9s6GHksaXwWov2iJV63",
  "key26": "4wGAozgVKf4RiKwg1hj1hFB5uDst8Ese9xMSyubYbcQkpf8o3d4HgbXTB19NMJWGjq8GabJyLvqsqiUn7occyj4K",
  "key27": "3G7HZT1iUopgUgBuAggR9xctgeZM9N2UkNZ1JXbHPKNDXXBXVgoaX4dEJJiMThSxYvPQxtZPmT5Ep737un77MdtR",
  "key28": "5dLs5U7Uep4Fbk8LD2tQ7MsL3ir27LbQsGzevyP6ZSEYB18UztKNBNC6Mb66R5CRhC5s8oerz2aFBusidamZWZ66",
  "key29": "2nmayKycn6wQ6x7L24srNpghgXzy3aB5zv6nDRP2mXesYjFLK36soE5C7sxvDPNWWjwvViWBiZAy9h9GYCLtj3Wm",
  "key30": "QQC7VgArqpemi22pgheX4LdRtBWrAuYFwdM4dh4n9LDzjQrEjUmtEEW2J7daoeXYwPyZtN6QRXeGneqNEvjC1kU",
  "key31": "3TzRsNvNPYJYSveGQiaUZeHnCzXshxGM3fUqNAKKbLwSbkQa1zm1UkHLcvAoDX6uwngsDAgFHbjQwykNjXk7KuhB",
  "key32": "3hRz5VPhqCKrN4T4c3xd1hupVx8cYGjiU5yDku3b3vrXSk5DVd4Ttumgc2hW45nREvnoT7YGhz1VGstCSwCCfUko",
  "key33": "3kh3GudT5V4vjERwKTHTMmq9AtrhuftDmjFxGf4LEn6otbTs4ZmHZWSUKTphESzCovhrpfSqaWqYjJih8Y1qVQQt",
  "key34": "38b2kEbHCPzpsfK4haaPu6j1LrP8QR43nVFcL3CHY77PgBPBGwifPYJdhQ3oTA9vdsu7sjZgRzqhmUT44sxS5zjx",
  "key35": "2s2B2pcgCHWMGtYdvg4hZAiztWDKuv8XPVXZLj7W1tgFETYEv3NDMQPPSHfcsUhG1D4obgs4hhe7w6hZFCGqpQCK",
  "key36": "2NgoqKdNERyqdtJHkKAMWqkbD5og9zp3A6F7kakpwZdWJnmQD3C3XzRFWLfwG759xGqqNEEEEHzENwUW27NPa1L5"
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
