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
    "3xgWtvMCSnewb8oX9Dmi3tPxzQsswB3DdN5ipZ6PQzvo65XiEWoycdfdTxQToZGegTYh5HtbJncABty5UpwtWmnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tvQNKWsSB469vWSNQnNcwjZvLPCFFH9vFsb5EXYCANfPSsRWedr4T3qJTCYsR7YqwMjbQ1V9brDBhosSJUEX3SJ",
  "key1": "moxnjWmhfeyckFY3DGE75xYf7UC6i551DnAK2gjC4VzgcFTvE1ncxD6MAHc6tvJfJGoKesP6nSYD5ZJsHx3qJJC",
  "key2": "4c65mbmbVKRBi7rTZRyd336AkVXzzMwi5rSA9M9YwQoEwNDbFLXxFxBdK39RFtRHNckaJxVPc3SqRR1trVq81Hhp",
  "key3": "5vJMQy91QXezLYaqXdjLSHzTgD2pogJUfHd6azaoWRMcMDfMj8KStnaQbsSywD4RBHpA1TrveaD4XBaPBPeKfW8J",
  "key4": "5Egp8yL1CxQgVPgTVrcwHX1HLzgSDuteVRXikXtjpAhAvfo8zspMo62xbuin3oSvUuCcPET4rKnPMfR5i4Y4Acee",
  "key5": "2C6fgJSLRQT73hV4QPmfoAnsguwPJcM8kvAi7EVCD9AfizNNREPHCSxf5K3oht96NtDzRoFHdMeXBhAEVMRZzmDP",
  "key6": "3dpB2eVejQs4n8F9DDNqRkbBmNjB8zhw1HLGeMtBwcb6VU8oJCQRrUbrn7izGgADFnW4voNvgPFh2CgtVnr1cA8e",
  "key7": "3FgF7kxWp6FMjpLiTDpMhbsf6GWoy5oyWZtcvuKi63FaDPQyRByQqDXkJPvz5arEuBHyJUihgqsu9VXvrryPepLb",
  "key8": "3ZqGEvv4VCMXAxLYfLf99nYuVdDqpnoSjGk2eisgrzrVzFp9AZf3E5TMfAZLxcFxiuS4gTWwXh1DdYFavoNZ1oCM",
  "key9": "3UTbecVaT8ia6bYPyCsLn9K9iV4pLp1U9SugmYWgARDuk22HGNe6eyEY6wEoJNBt5N4G4NGCks11U3p6kKqQmjnY",
  "key10": "5KzqCTSAHr1ZfkJVLfLEdZMJws4kWHButx7Qs7wydJZ459A5XwRVXKLc8ZrTmv74d8BXikkkH2bpfnkf2kzNYEtH",
  "key11": "3nyJERLwRuSm78pRK1Yoh9ybeubAxGH9XM3vhQe8p9KCtRJ3bEvagLCSHH7U7XUn87JoWng1AcKM2AcjyFypEDsb",
  "key12": "64Bi71o5qdj7kbvn1SohPFxvBso2eKvRpnBrNy2rexBQm1jRAqLbUDLy9gRrZRmnFVkc4Xcxh3FTRDQHCHtZfPKN",
  "key13": "2S7q2HXH62wHH9pSfiSRQqwnsNVA2rbTPuxdJ9km2sJ8n4ELtcw1Py1N3xtX6ywUKK8UZ4Bq2zvHqyyNsPBFpn5D",
  "key14": "5vUo1fHrrUAyoxetixnbnR7Di9BmWaS43gLsRGjvcLwduhvoAzgqYDKCBCaoxcmGraopQ3QTH3mXqZS7hcaFvsLr",
  "key15": "249ZjAfZFNTVMwPM9mQ1hZouj87338oQ9i933SDNQtqzXaLtYVAQKxpQN56eo1zomuBaV3TYKZZgxo6GVcBhEi2k",
  "key16": "5MTucnuwuQLbTPGFL5ofbF6m7E94NYx8X8epaKaWGU6c5G9xysW6R9JPwYA6pwez5nu6fNN52RmnmZ9X2N1scECk",
  "key17": "591n454tWSAMy26cv1EUmedx1msLasnre8BLrBL9VVxGKamamTdLBER1sQooCqL1KAVpGQiGUYZn34pPRpwuGdUV",
  "key18": "2kyiXE7GySD2pmkhp68xVcewpbdneH8Je8VEwxASMFkK4vhRDpgVaHKVU2tAP9XRa9ppndPa16CMoZTNrMkT1eFV",
  "key19": "NHq7Ms9v3ZpzNmWYV6c74MKpZr8BmbdFP7D19GxF26pdSpycMELzqKZw39Y88Q1hUed6w9guzUDFB2cfHuYMQBB",
  "key20": "5rMNg1n124VKPB8oQwpuGM9u5XjMxfCAaxDZ8QwszbizNqBfabGFZWwUc7roSgaUmKybNdw24VJtUwnq76fNEGTG",
  "key21": "3gTtXsetAtxuGWrkWjR8xxTHxcwSmmvs9zL3dUmTBWNroC6wA8wwfuACs8vPQPTxXaM31P5iYNNCgnuLsTRJYxj5",
  "key22": "4pfx4MEFEc6KEtZGmWkDtDSc5xL9caqz44tAsG3xVh5AmS4gv4sPDJftUGg1DLWZgyzB2m1TEVqxacvvKeWsPWEE",
  "key23": "5SFZ4MEDaMnVosvecBb1wdh5fWzQSPmPdtnVB4m2wu3gW3efoKkesdP7oGTSjg3gB3RBNtzjgKjcHoqvK3mzf3ei",
  "key24": "4NA7LeEDvEkshB8jsXGXU5hTE8c31GiRJKNFnLeqwjAU39zRZRnewhbWZBMUgxjZV8R55BD6BKak8wqvdKt35DP6",
  "key25": "4yeuUNb7dzuJmiKtygLkbqXRjwq6M1dyMLV8YJgcrmwxMvFpPipnbsQjfrZvit4T9dt5frzCBGWYrGKH4VYbA3gx",
  "key26": "5gnhDVG7stknFRJiZqCF2eWgKo1mzaHyZQRrwV9HymJzcBq3RBmkX7EmyzEKJeSFRqdYvTVmyud8qe8r9kHFYrSi",
  "key27": "3fnfmHfpNH47WK6cTu1R6Jm95B6V4bZ6cb29FUjXcgJKNbvU4ZJFAN5zs6GmLzEB72nAG8Ge4rtfURhNcCHZSgM3",
  "key28": "4NpffVJrER3NPoyeMh4BJzDogQrKMm7Hz2dCoaV3XyRw9tqaQ7jBARHoRji6SGNsSXgR3tRJfEt6eeVmKJ9WSP3f",
  "key29": "5rS8QD78Yivq368QZBB9KaLmRToqoSCmHZGues5BV8fMEy5aRTjBB896W9Zp6EYEZRfo3huzh2NG2NBYAvemqF67",
  "key30": "2x3nMbUWSH19ohnY1YXmK5bXrnPi6ee8JnfTpQPhS47am9XKziwpN1kykm2EVw2xmWfmka4kJ9R84ToxnMHXVyFL",
  "key31": "3Q2XFKYbYLGbMDSsVGsX3YhJjT8UYUvZHCVNXkEU6zgUuRGEda5dN9EDkgdJ7xHc83JdZ3BC1be8vKMucPEaN4Ph",
  "key32": "5GCwsgyDn7RRLAVoWxYYM3mms1xJ7197JjTXf47agPzyqCjsHpkXifSXZEvyVXUwFJnV3jK6Li2u2EPwUu8XRy5P",
  "key33": "3CkLkmZv66C5E2Ur67x6uozxvqirBiDZ5VXbGkKujwSBsPoE2WRdUziEcWzXuZgJUWCruC28RdLi15EgBW8Shnb8",
  "key34": "3niAasZ2TNyRLZFz9AxcLDSst2n4d7BbG4bvcoE3cU1qaMedTSFVg1E8VqHNV5rcEVMaRsfD5EhAaqd9Qqb5E4Pg",
  "key35": "2cbsVBANcM2PBSFJPfEp92qVuzjnPntUtQs8EpG43mwasV4J59arSEFXsMjEtinawZDkZvZ5QhkAARAd6q8ThhGw",
  "key36": "4YSdgNEQNe4C3vF7B7eg6MFgEopwus5FXrAxKVgGhRxjvbMTQzzDr9tVmUT5x1PBQTWzV2Rw1QHwTS4Z56skEPAA",
  "key37": "5shj9VfEWkSHhqCvrYvjzSNaBH5EeDDSuDyJVbxuxhicwr8ZEEgx7punLn7HawfuMhQ4R1L3PWcgFm3Pk7NXU3my",
  "key38": "5KsixbwiF3GySUpDQGhSTsjPfS3MabQf8L9eXmrq4mwvgDhwDdChRfSRRneKWgGfBad8FoxCg7QZHmFKjTkSCkM",
  "key39": "2PhfkYQQeRoQDztmRbvPHvX2Wp3FiF7dvf95YxPDF7NokAuroS6Lu6T3LvJCRxkEemHUd1Dr28m476hLtzy6P85p",
  "key40": "3qXP7pms7hZxbGhwsuLX7hwST8ZvSUysDXZn8ptwEBErKkrRY3DW4JjBQJfgZT5NJgnSyx9JCf5F4BhFtWeWz9Z9",
  "key41": "4WmTUrsmuhGHoBePZcRAD9Ka3LgryNo9WEScbTD58dBjbPQCmyk4Ku2pSBTurZ5uWfWNUTXu2wh7aEkTN3e89zMf",
  "key42": "ZXxtSAPTUbYn7ugWoiFpX81nb3nUYnhWo2PhPnz2kpGPpWytE46wjqdkrUST4YGB7u5Tjg3FofLaiyD7mDohuvf",
  "key43": "56SAkC8p2W2S61TmVwDQGTci8pHoWckrRyVV478x7TWieQXWk8HU1T15wfTKctUQxtnQjpkU47wcnvtFS1bkmwBn",
  "key44": "4cARvXzCzjMsCyTob3of8xMSBepNJ31jziGRPywHG3vDCSXFGFmdg3PD2jznetieMw5EABDYbqjABacq6NnLd6jj"
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
