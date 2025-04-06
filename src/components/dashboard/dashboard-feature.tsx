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
    "WUmiACz5EtdezTFApHszeTcgiMcyU8s1vJeWZQDMLuHyMiDEAXboLN9eeMdfhgQ24d6fKBKP37shTgxEPgQs5TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "waK4x4g3K8soQpxwiWw5TmcgtS3Wd3eeU7ETgsbBhgpSNkFuUujRGTbyMcYJGBu2Fy2HCitRDygKnwr1cNMAjky",
  "key1": "4fG8p8y2n9nBUHVtMbtszZJxVcMuh82HBpqigxqXXnyBKkJ7i1aucofCfBVKHqJF2XpAT3KwgNcK9pqkALVsyVWw",
  "key2": "5jA8ET5CDyarQCAWJGx6cBPooJe4Aa7FDDNLi9fM32C5eifyR4MqSjXLWUf6H92PQzrPtXMs9jbNDdn3TVXTcayM",
  "key3": "39K17Zq98yfyWpz4rbHPrJ4EkLSanKAAmorZJ9WK9ykDL5Z3ZZoCscHDaZ6XJKtGD15opy6rfyDZgDcnJgUB25zW",
  "key4": "565u2ieN32ho8fvgT2FGYVeqyfNL8JU3kLHECAGXQkMK38BZt2WG7qyc7J4e7nCyo7r16h6QoUbDpxFs2NwvsEWH",
  "key5": "4L6mMCqKQx8tnBNgiYCsnghneSChLdnuWAuhp7fAkGGdhFCBNMjk1q7NBhkeZRKPvQaZf3QZRqkKepD9EYSVePDc",
  "key6": "4i8XkCpnBeqEqz8NYb1DbM8vr55LxeqfLzaNPpaNLUCgNonyFHkUNaBnZ92zjK7EkuuQLERajRg99gXvLUcmG2Rg",
  "key7": "5pzWjSNFYBReftBE1KmiaanF7VnYayL7sP2okvx6BvtpFFB5s824ZWFZbU3fpTHdEyYQ9EJg59YAGqZFfx7CjPiT",
  "key8": "4zKJjrdgEnwqi3qZUpxUqszMEhkcjo8K7D5s3fg1pcaktViSW6sVHWVBHeuYLpaDcK1xwMnNQP2DGpAr66UpLCZt",
  "key9": "35TRGCU7ckTMSgitsqskfPqo8XidWZdLqHajGT6L5MKWGGKoRpC6ZMqaLsEAgLtrwaquKRSuf4KoZkg2YsrguNK7",
  "key10": "5UuW5hC1XDojiqPo9C5qkUS132vzBmoCD8uTXNGKFtkom72kSXcJqWe8pA38VxXoqKjjH7wV6J5528jCpiJ6SrHo",
  "key11": "2iWhonZAFE4mBBCPPWoRixQRbfNs4uBM7w2Q49BPhtwUAzVztVXcibRE7gUxZQwLH1huJx6M4hRZANicGXJ85aYR",
  "key12": "2SBQJ7GfJoA4xbTuTncxJPRB8BY2gLAqFvaSB4J9owbdrw9atbzUUKdNYSGq7J5wdhZSc59Z7by16YQcMRepg8pe",
  "key13": "uk4sHsy4jp8577D4T8xUPR3gV2jXkLg1qaJMj7qdXkmivVPQGv6mRgrTj4nuCiK5RhzDA8ajUEByU2yLZSZxEtf",
  "key14": "2wVgHEYjy1jZ1Wwvkcu7DrxgKpCr7f9vJDpa5a1ZDzFoF3PfEpDZEmaoVcngAtn3f96Qeag3UmVkS44Xq51djCtM",
  "key15": "45bh879yZARDbfHrkXSu9huVBzMgBjSXBC4vgSth2F9ywQLqaX48evBQcCjRJUMT3VTsiY3PXPN4TzgFtrcZ5QBw",
  "key16": "5GRYwjXNhH5AKmGBdvLHXwtKk2WWs8LhSbJoRQoFhckFruMBubPQ3AVY77pvW7REbL7K8F67NMqkrpm6BZxnhTnj",
  "key17": "RKgzvNNmmjU7Hfwz5XbocCroZFwqCeYtwXfyLW5SKmUBC2qGxUKAoPiT1F67QPVGcJmspxf1My2QmH9Uq84iC5q",
  "key18": "2i7K5fYLjEJiYPXzjLfn5yRJdMUAzGBgeSHY6MJFYzMkXArTGDrLGEZabKu7FNxjU21o67j5vBX6ziviRH3tvieM",
  "key19": "3PNNTSqEqLmrAa5ot6dMYVrNS2gTcQnki9vNANfuSgfRRFJ6BsxbmbxqxDXAtjpuC5UPdqeLkCStC66epQtcjSj7",
  "key20": "5TaGUGCftay19ZK8tLuqgc1nXRFA3q4mbjnGtAE9egD5BCaapwbh7e9WHpP6tWSBPVFqdRFqRFDYVEmc5gewAQmy",
  "key21": "gWPHQjFceSw1YtcgNA5JcMG4qaRHHVXBFhhXfSYQZL64emBCXGBmn2kqELm1RnYsV1ZfcQANPEsF5wK65we8Szz",
  "key22": "kRseEFQ8pEoQHDRUREUUPbkZJG22hURk9w3MdS14cW1ZfrJZYRVjDBPvvqJ7zmykqgwDTJfP59prDhWZPQ6TxjZ",
  "key23": "DASDFySiQiTPhjPwH2YJffx6CrtTK1oK9TjKPazcfgPvv4JRUPhZC2cyawnag6aNjMnPQ3JGvvXcjwp1GkJ8M81",
  "key24": "3UUrnvjBuurPV9CcixaXeeT7aynjma75GRYAzzQ7tUf7Bi9uGJrX9QYsBBxGfPU2CEW7N2tFy5WZVwMaq5qPdycS",
  "key25": "5dzmwpe4rYSW1Z2cDBgEMWokPy5BQKHzN4HvX4cVyA8uqiREABmVKrzWyGo9skipcxfJXKgb5jRFcwPw3FEh2upm",
  "key26": "44vWqZEAe34iA4n6VonkpMXiKamA8Qm76cPKhpRDmUPJHkXXa5d31d4jtUX7UoychfARrPk1tkL74khnLg2ftVS7",
  "key27": "2ubnnWag2knpmHWFp749WEX2RZGpZzuJCJxzWU3keAhvZdY9w6UTwiHX36Go2h3MyqirfsiDmTLG9yUxA7PMcqs1",
  "key28": "3X5uiPPq3V66skYbkbiJ5x6GzsU541n37kp4HdpTCY33j1vJRRmSCpAeroJoh8tMnwzB7nVmT7aqFrKTzAR9N38",
  "key29": "CAb2VagZUM1h6CSXNQUEGTyU8s8J91irpk2cU4rXs8aqinke6YivkmKCend4U678LcP3x7jWS88gwF8EhFr1QL3",
  "key30": "3Eb63nYRwBB15Bwpxp5EeRdPSuCTLutWkMdk1W5yh2HvoK1mFKHqoUXdqCq4555t7DwExQxpJukNrrEepUZvAHA5",
  "key31": "5p16Eor8gdN3QC5goCK5bqGvsBEvjs7jsQDvmWXAQKAw7vMc7tCd8c7b2dmiackrgtCTMWxsLhkXeCyVkdVTN6YR",
  "key32": "2qXsu5RTfzdVrd6N81seL89QM7Z96L7dr3g5R3qubhPPEvxE91puCmkZRgDToPk4jgd88FEmDpidq5iMhBecLJNm",
  "key33": "4yfnaTPLpPoA9LoBQ225r6PbzPvzC2fZwMNmgmDnhcZVojty4kTMikixa7y5j8kARszwaojVXsRhpAebPhrsLXfs",
  "key34": "YbUeDyNQ7XWoV3LJH1CtsvAumYmiUzHBzaq42e2iMM8cqu9rsFgnr72iGfrZvopHdeJzXNrjsJMQs1P1TYL4yRC",
  "key35": "3xpiGpv7Mh27DzZkiuzhDwdFGaxu9Tf7AY95sXapkQQGcVdEqtFA6pZTKcsajuZgcrjraerWfaAZK7qcpL6Az539",
  "key36": "f7fYmvGzb8y3YUcEVrQbPRFv6AbEguEMYmPZt6VGz9tPYQgFjtDVVemoz23H9tPuJ48WyzkJMGBFE6jB9LibGXW",
  "key37": "4vwTRFHMRt4vvAXZW83FxVoa57jwNPnG6Uco7gsDdE21PjscbtBahr1rbehsM6sEGnfcbThG3JNeoDKeSNF7vxC3",
  "key38": "5Ghdpx9bdyHktud5HTqFBNQoUCEgMpHNnbY2xFS81FoVzdXBH5XYLmijuiYtQwbojVKKpWuni3dbLXq9A8C6zqVa",
  "key39": "3KuA4FGRQAdNRf5fDHbNLAShQHT9sFFf4saNnAvHiiJ2ueSxBe7nyn75dKkTB1oMBQky6URUvpEbezSjL5vahKdN",
  "key40": "2kKchrrZZJm79qqoRbQpaTmQ7pBocHd4FU2Wuv5AMUkoFf81C21wixrqYNirRVAVwYM419RTatq9bAe46RRRaXNU"
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
