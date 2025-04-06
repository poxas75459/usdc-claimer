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
    "64cq5hZRkK2DCnq3A5TC6VAJ3xjoRD1bXFMCRFLaaYPv9r2TnshZuVPrXapjrEDccHcQtwHPJ556ufjkAfXgp7wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nRPENkvT79QeKejeZStSS3RBtNeybaWnh1E2WtB84wNMSP4NuqufBjtJwwCLKtQAGc4qW7FKdTDtCZwq15Y3www",
  "key1": "2h4JSEoD9WShQ4YXptiMcWNCV9suffPdkVpx66AuHRrUXAaebRWaJemPYhK9GYCTy9eq6qJq72r5zWUaPKACCe3t",
  "key2": "1bP5pXG6b2RZKGMBeaWg4HQs2qBWFq7DwQEs5zavfesnqFSYViDthhgRZZ8RDy63RdTULFxhQgaBtqDv73S9xcm",
  "key3": "TUWpNeYTuLgYcDf3aeLte8z9ZCDt8VoRLm9t3ppr6NFTPqsTFwD6HTcb9QWjNwEA9ZDmUq9q6xWvk1WhMifvcP3",
  "key4": "2GG8JZMn59mktye25MK2WzeeU5D3VdsDLnT2FdiDXhqFcmqBHKLnAWJ6BsjzReccPmTAPVSZ1XhC2Hg6bES1qvS2",
  "key5": "GpJw3SCdrd24fDDn8PkE6Jy53oT4zeJMwvZPw8duhKDSUaWS4HfH3FtiqYuj8d9r9xCPRwXe8fHW4tjfF3mTapR",
  "key6": "ufJmde1jKJHpm3STDGjhAkWCpZREDVDQWEMhR7hNRea2zvZKhysphhEeJqEBcrrZhaZyFK4LYc5SNjUqKkEwX2p",
  "key7": "62s2kSx758DTw4qLaSmSaefVHJMuLV17Z63cXVix5YXbuqiuxyYwxSE5VxzGsEWH7F6QMQ89VdEmy6SxyM6Psk4X",
  "key8": "32qwZz8ifruveEPA97QbURo5Z4Wtto3AsKwCoX1gFN3rKdG3QZgAVsC97qAJnYgfEz4qc2nwctez6wntHWawRFe2",
  "key9": "36jvEST8yjLsdph2CPALyDnPKXdNKM1zR5tvNEk9KEFwnkRoBAEvVvCc1RyMEXNpSvyXN4a8DtpGi2mTLwk1aDrQ",
  "key10": "5rgwJpDqgDM9mNScc8WwsU9UuoG7SFzqDqZVggZK2nugXByHrGrNtuTeYcLhBwGpqm31HLzUZuF8Zqt6kWFEhUTG",
  "key11": "4YDzKCi5HteMEiMA3vncYjVXWx57HEqQVx9jMGjvkdnda7YTzr97GE5KoFhGhPzuaHLTXLBnFE4Y41qGzgrkidMr",
  "key12": "EuTZtNYZ88k95sa6X2GecP5iKnqvN5FN3gP1ThiqRJZ9zLh4y2UowkX6eVF1i6tcL3ucDGbwiebyU2ShX7dfc8X",
  "key13": "2m8mdqh9XWkcfLFNimPEMoJavz99MDj3XZSSJ65DzdM6rbPaxS52eUb3Xj6Pw31P2JRXvCgMcC9qFij7YEAewLdU",
  "key14": "3dQucL3m9AVcE5VajczTmcHYvdtztoBZLz4JLTyRABfXqy8Y2FKNjbU1XSy1tYpdSfoJZFzYnHtvgRsVLRamEjsM",
  "key15": "4aNBSBicYeM3f7Pabz5PM7NTGLDe953FCYS1aJx8y6DiYqgiMfuopqszkeP5EXhN5jgXPYaX63gA8nyfYim6xQaW",
  "key16": "2fsJcoYcBf2XY8XxpfidGn1H3v7XLhozSyTT7BR8jG33xjcSTM8uyXxAzFxpscTdkwZWmU1weBdUmaNCjo7DTeFW",
  "key17": "4FsFcS1QyerewUo2FGHxjgKjyhDRxS4NtfGYbSSvc8TqEkPVE5SxB69xW7ogKJpwZv46txGfaZZkXjoGHVpxYJAg",
  "key18": "5h4PRGQSaV4jVrRU8w72MgQGDpG4Y2NWFLdE5gPYuT3kbuXGZqBM92GNzuRajAuiWbGcTW3F7tbE6TNpnpECPrsq",
  "key19": "3UYT5NGCKvzNJPTXRyyPfdebzcKbCaZEcj3q41Dh8uAo5GuGdRUef1sXWNhiQZvW6TWQ6FAZo3Qx3c8SwZeHn22A",
  "key20": "3EAc2CUTKBMnDnku4p7r371t8rjcrcNF3CSz6nvMxZpN9nXTpR1AMHL8RJJYH4sBb5VgjA5ywtDB9UB6wLDiMMMa",
  "key21": "F7cHV3E1Lvd6ZJKfNNDpLjbQ94nqShoC2eSuPxZUKWVKaeAwDth19BJTQ78cHcSepq9SWE8mmMsHgMPDdjjzevz",
  "key22": "5J75mdUg9SPiP172oHRzX23uE9o3Ewpq4RAmnzNdk2S17hTW7JuHDKByg32PKtop5EJQVajqostwQo492121buT1",
  "key23": "5xB5MPBR3QQRq76fhJv99kBozzpsAWHjcbKssf3URbZT8fhACYWqRuRstcaH5eQGfPk6aensn2FbSHrq4siFxeXu",
  "key24": "56cgJEkvPCDTw1r1k1MrhvQZ36ogA1ipX53RgSnhaCZvSYxSC426LiCmksHjUKd8KuNEig93a8qh6VByXtEn28g1",
  "key25": "3V8rv6gnG2tsKvUgVp49urhS4EBZEQX7jhKWjcZisYEVsWCNLsA2F5STJiT3SWL7smfEhvkCMCr9tomDFEiUA8id",
  "key26": "44YmWSKS3zsdN9qs9DsZUWPtyTUyW7UCZGPG5RwQscc2faZ4D3ZpBmorjTPhsqTLMrRCFYAdQeZKZ3Wj32Wam89i",
  "key27": "5zgA9jTThZqdeWcWiwcrLqNpiuB5qv33SyMAM8iYi8rFTivnH2wTTzYBzaTsX2RKUHLDozx9ZbH3Ew4fAyXGu9y",
  "key28": "5J9DFkUu8np3QiH8r9qsa7ifeWgMguGq5fykW52yAcomGrQJehwjrZonMJV9wRRjKnwGEhTyrsf1FoguszPVDPby",
  "key29": "3uEiFiifGLu9gNitxg7C9PLQakMJ9pxsztu17MFAzmzJ5wkHJQcQXuKTMBEtjGUTNyDRuX1DNie3WuPreatQrmCj",
  "key30": "2qcsorVb5cmb1V7sHeLNYdejmSth6VKreJo9RTesHpkJW4uP6PatVNPhdNxaWAYte9tiLXej21SeRcFUpvMTYae3",
  "key31": "5MDjzcCrhEyriarncHX4HTr1xhAWe13bfChBuwecoVvFH7LEJvxdtsGArKyumDaxSokpFTZxYaCGpmEJPmy3tUMg",
  "key32": "x4jzwJYPL7pHBzYzrGujN8Ee966CFWE7t5UaDH1AmFwZ1GSBULR8WfyZxtU96Medbuc7BZy5W14wi2BiWGnXzNR",
  "key33": "4iAaWVRmGjJMsv6Tt8kiipYQrXhLweMMei9zFx7DNQ9ng5vtDcAp69khQdbs6GLwAdQomvGjTnZpzZTxZR7CJJjJ"
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
