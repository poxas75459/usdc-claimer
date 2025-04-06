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
    "BfNm5EPH8n1psQt7XdTXJMor7r6veZAGN1415scYmeodvgVhBLMN5ysp7mnN3JR3eckL6T5PQTnDmfs3S6VQSZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egpAFbiHXoAPkjZbzxC9FNgUyTshL5pwU3sfkrG9gXTNAT1derwtBs4FnhhBCE2iJd8sLgruGjHCfd451sMT7kV",
  "key1": "2QaYPdLYVmLys1jL2ky2LbCTZgZBe5eebCXbHaKuRTZgEYYiuMnFa6YwWntgrLmG6KsaQ66PwPSC2Ecefssqe7gN",
  "key2": "4ApANgpnsk2CDi1HfaqDsYekoUJJ52tcDu3My3fjwzSAD8Npzz4Mw1ewmWpvv3GSACNuu7X4R2qvcitmvv1UX9Va",
  "key3": "2fwxNJsWsd396buibmqAi4ceUiL97s39wgnrV87EziQrpv8oukMnYD9Ph6k8ryt28z7v3SYVBp3oZuezvsYkG54p",
  "key4": "377uzrRNhbkXagd2ZMY24tF1FrhhDY8Wfv381N9Cd8uxtm6buTyMiVdZoomiC32GAvV3QtkSndPQWcJKu2BLxSNy",
  "key5": "4EFcL5YUx39XMYYW84cxzPUxa8onELbv6Pq3riY1v7go46DMDKtQChC76xs6BgoqoZiULTtrxwsJDMi8Bo6N8CwL",
  "key6": "4aQff9T71c3W1hcWkbtDMXo53HZhejUFcbSqrqkKHa8f2wxAxdt1Z1mZTMcCEo9fPW4suXnxqCXjySxYJK9rTaAJ",
  "key7": "35NXMdycVepwiPD7JQWF9umTDJPdhWBSNNpsQk6wSYn3kpwpMGpLp8zx2DFftNYzGQM3P8qV6ALEPSEkXbUYSXhf",
  "key8": "2WDWitBhoJxQHfboC4kZbFNWWH2rtaH2WqZAvPWgxCvSwAviQGcNM98zscMBRgmpfQAdTXw25LyLyb3ucbFamaGm",
  "key9": "3MVvh795XTEiyPrhAJWSrwADj1zMd76zgfWnmGXBkgZjpE9xzURpr3p6RyzhA5Epbd8bsAAcZuhog5UHV1T1Ga5v",
  "key10": "2bbTrBRppcUPR5ZTpZo3MppMgXxSR8VW6ZwR5tarAbXYGgH5wd8E9yTGjRdf6i6b3zXVYp8bW1m74odHkdU1RDgh",
  "key11": "2NqmuYuaaztYbSZM5DVmbtbYRFkCoKtzRjXzFMZ224MmzYNtMziFHGA6gQUeHiT9GTBu7rAVac6HSXYFiifNSjXA",
  "key12": "496ZtKNzqm7HtgQsT691SHe6dwa4kreZ35rXAJ4uf6vu6tizKDjWwz4wbFfzAsJzU38aLuxvm5QTSTPnxwW6UoMK",
  "key13": "4Y5tsPfAMKEQmNNv13tKB5czfZ5XCvmjEG6dV8p4oKBHVrz7c9kiKTbh1rthgiGKMcw6A95vkXr7r9PmeGHpG3PK",
  "key14": "2Uuv9MEbSguB7faJPxzrmen2fxZdwS1NyS7LPbY6Scc7g4UKxHTToZ8ahyWqaE9XKgVaM5mmWqq5AFqaszmLwc3o",
  "key15": "44xPAcreGspiK1DJjbtQTN9ncWpg6tso33hqK8geM4eehW6kmPPATMGv23JNmaf2bqkCEqSa7KYmUiTrHSvAqMCq",
  "key16": "4mQ9WuY1BfyDoTv9e2VV42mRj31TNKyeNZzLwqaJpj4f14ePf3HMuDJDzdyYs7qdhXm1FFFUV4DEws7AL2ZQYDfG",
  "key17": "4UDDRTADdjvc3wy14BtCxRGxLdKwxrvfHagwwNbtW2tEdGusKhNeoqFcNz3W7WWExtpUi2VU1TtFgCaABGE6ez2U",
  "key18": "3Nr9zZ2j945YvwYPprfAw94pyCr6THxcZt9K4npDTrMstHCCQS4M13yeeSMvbjgPdTZDthTRFWgB9z7KoBZF292z",
  "key19": "5NcS5D6W5ykt9m8X7jLDzghJXezBzwBWwDJ8vFVeJb4CTZWp5bazbT1bBy3QF5T1Tqm3NZDyutma9GSAKezxv9jy",
  "key20": "5h1qoAPhEnBDWXALNqfw1osgSih7Z3dcDv9FMxXj1f3Z2Ui9zu8m7VF1q9yosEjtgswJrcb2L5BojfZK17rvJH7q",
  "key21": "YSGNweSZYzcqerHQcLZzqKBfnHXKVn9S2JCMGUPfUWZ6RrbX4h2ADkChTwntQuVPZvdcAanLQBCk6NLTLfvujrv",
  "key22": "2JKViRurHRBnpmvGTg4Af1h32YGwASL5REqdJr6FJ2EVZBinUPwVB6kexwupfSEzugyT3xcLssxrakZhtx8tA84r",
  "key23": "PupXjcaknrEPpNgtVhcH3q9Sb43f9wtTuCb7eECrpiLyL35f6EA2j4veQsww56oP5b65hJMWRyZdFY84oQgFChG",
  "key24": "vKFq8yHwT3QjSVa4n6DBTPGavxfMgGXkMAUYkv25KGoAUukAUa2epTX5m1Vt9kjenX6fSfTiPRLTK7X65cYg8rc",
  "key25": "3nnpBLXDuWkJTni1sTp5jPCg4n1NzaMxypf3eCWsSztP6aQ3xeBBdkvZ33AyMeFUaydjCnUvf7DtLamzco1MB6br",
  "key26": "54dW88YqiB6NAqRfUg9MMnv6Ds8iN9xQii61uRfdz1qsfaPfk7UZ6EshzHQF3Dpdaxcesq4CxzNXKRMgFPxJKtt8",
  "key27": "5k7wioX6mqJcugaWhvDbnNZ9RYqUmcVn1WwjsZykHiLtfwSRbNzn8BoQKcPMgZuTMQgkP4DBicbNxiCUiAX9Xfbi",
  "key28": "5FBMk5gGuqg9DTxc4wSN54BrQK66fYw31bqvUB7inpyA1ZkxDmATfXD8dWBKBe9MLnTy4sBuPeSvpLUtmfyv9MWC",
  "key29": "3issaEkezVpKgDinDJWNcRVadEvzwLzPdUFzyWevmmZLTSt5gD1GgnAYZG2yMHAWCj4MUti5GP4bRX7qvaRaMsKL",
  "key30": "42tqMiG7jBkUgqwGR8s4RujM5RaJi9g6qpLPhdwXyruBKcFxnLoEfEw7RJqgYSrdwGzZQ5DupZu94QXYaR46kJPV",
  "key31": "3ms1ZCJdXEbxUHRejtbShd4ZP7JJwpDaCoUuQ4sKfPJEdhHPTtBuxB326eHVS5WmmWS4myMHo4jPBeBYfm6VkXnX",
  "key32": "XYe7bAXNY1GAzRn7DUpBsCbygcHViQeoBk2583kRqqAHSEZye1hgLpuy96RdoDQWJBEhfzz7PegDYGexKVrA1RZ"
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
