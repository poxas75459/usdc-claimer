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
    "39kVhNQ6ZA5E96cT6AZdj6LAHRtdfQM1h69mu8QzjtSyuA7VVtmnRfTgBchBLwc6vmkUnXeBmvXtvhztaZ3tKCdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YRZHDCPa7mfGRhghyAZ6BfE1uCszW6kdamJnruQyHtynD2ou1VBcGgdVxNRyK3t7bF6V7TVCVsJXs6Fh9weY72X",
  "key1": "2eTA1arL3wVmYvde3tFBJk1RDqvTtXe69rpZpkxLGyMnEFbKpDeajVku3FcbYUMnhaTUuSZDBMLoMvbRtF1G6KyV",
  "key2": "KV53xRVdbWvnspUMuTPNWejRRQqR3HqLNprBfysXYYsdx8YcKGRhd1DuJeti7JhF2TM6K6tZWU3phGbwRrmh16t",
  "key3": "3F9JTSdKUB9hNRz96VbZiYeDnyxufC4pMKHrn4KXfL1vUp4vGurVQvdTsrYTS3KCRUF5C4B2zPgBQHkMtYcaotHS",
  "key4": "5AtACz3ViMffY1FbcSvRSjKLVmKbLTLmZDxzZwJ7P3Lr4VSkJBsDpFcm2VnxExpbk7Pt6SDwzbccgaMUGJjQ5GZ5",
  "key5": "5C6FZF4pa5RTKTUSKp2Uck8sTYiifR7qReNoFMnxzQTnf7n1oBbtjkYE1tFANzr6YmiPGrXTjWMpwRuQHbZ2MNKP",
  "key6": "24vy9MweENMAAne5PmoZvdNUardwKWjJtUjs7kKdmxa7HSKsJzw27hjG2V5cGNuBpPYBYABtSvZGdQ5VgXYRbzZ3",
  "key7": "2yzYsUZqBpfg44bfEeEZJT3icbijUyyUmVSkduvgTfQpGpUrybacrJ9GLxf8N3bhcSuWJtutkAHmTztFArenkym8",
  "key8": "5uiFfsWmHoop8mUp3JggkZ1sv8hJa5CEJe2crHjAVMJNV2SVpxbjqmnWa5fAbCC8oiLFnAWQb1ySnzvYFcp3ZTN1",
  "key9": "j1ZfAtdD4c1PpgXomnQJca1VvbPZvmQ5AoLCvRbM826KcTjcUP7xZ2uoFQXZc3FEL7TkjfxS7XWGhQwwa3taNKY",
  "key10": "UwHWSpqFgZrXWh4XR6SnbYpYxWVsZPdKYaU2nX12hHjXLEtyZFi8vpRuuWhTbx9LsFKzYEN9MbZHYPaUmiQgbCZ",
  "key11": "5a3WvhrFRh4EoqpEtwzR5axTcUc4G52eMdDzWSSsdRXZbE5mYBMgtqhcTbxZJhSBYX1XwR7HeQuonx79fsuiZez4",
  "key12": "4Jeqbq6YSvFBFF9jAeLzQbit2adGxdcfwyy2iyCqt1b2Ga3ZzEXMvXUwCi7EH5bD1G4Zb8kS2Dbq5NTrwg3MDsY5",
  "key13": "24E48H4KCRzNZuov549yeGQYrojRrDtp4uTGsAV4QgWVGPFbNPCKnLpWn9BXt9uCg8Svwxcf9qEUs8i17BS8AomN",
  "key14": "2XRjzeniscBvYhCeq1bd6k2mw2JuyYyGGhT4xdz7A8HmZ8VPKUYiE2fpeoi6QZARvXcqctzPLhrk22MRc384xsyU",
  "key15": "b6SRD8ntnJtqbG93KiR7NdmcXMTU9VYhAFtPKohkAt7MobQjXQFNEj8pWpX8xwTAgaTLUPFAhr8gyW87rKcRGua",
  "key16": "2svwC3FarugRqf1qq1P1EzARg2SNpL7hNwnY5nhT7C5fYqocFQ58FtQsA3PLpiX4dEAMpq3CitMTzbLMum4Pi1wr",
  "key17": "u8tGRzkyqC9jkhxQitrMWaFJP2izUX36u5ZtxskKjaw3H86GnnAVEksfKvm1qY6hH44qbKWHAqebGJKcrX73zNQ",
  "key18": "2gNtrXA2PW8MRNhjxHEEWVGoRQJFBaqdHb22TDdRCLCp46GxGsaZsJscQVVoMcq8bNX1Byi1CWMGXBqhJEfn598P",
  "key19": "4JBdNMdcMXdEeeXivhdVWcnTAZbZPJYJazfN3b2qKbRMjxDK9Jhea7hvzasP2Mj6h6ZSgcBMWeVbhd7yYM4teVrE",
  "key20": "soVSVcdHYFUCw416ndVvBMB2912v8vZrLQPAjFLfA5urBUTX69oY2Xcu5ZPNU1H47jFADCmdDMDMKd3HvgQpDoP",
  "key21": "49zrQN7wHUXe69D1THqwzQgyjYFopQCBFkAXJp9RfzhJ1TrcMATGMR4Btc6u77PH9YWFAjsZocAKcT5uf4wiDEHp",
  "key22": "271ri8MHyTZMS1edrD2VaL7ZB18xkC8fsJ6tfZ3YE1SA9Vh72RyxX2fHhALnxcJfqVtdB7c5RaFbnEuyHp96smGy",
  "key23": "5BxkJAHCtJt8Q4UK3mAWmc7SWCQesS84FPh1s4kZQFLy5CAeGQJ7vqQavVQqnXaG4FJnZFWxPHcANrZMjtyXvGZT",
  "key24": "3PcCBFueDq2ZhS3tJbZnRaxJkKCXXRXJaxzBZVcRAHJMRgMFmdHg54rfAuCmn4wnnttrbFoGUdmV4ExdhykA8f5d",
  "key25": "5skiKW9dza6vjmgk5ckf9bicuVDKL5q7iVD1b93r7XWcTEJWhgBSYkfdisYHruGKbm8J3fm7x6kVMMGRZzk12uxq",
  "key26": "44jc9f7exduSnwspPn1H9hJdkteG8quw2SED7ZiF1xKSgGvYvRXi8NjD2KbgSM9A4XwwEdQDRBBWyAB4igBeeqZB",
  "key27": "22oYuY45StsfyiE8dxSLrkpwTEJv6yFkDTAWQL12oV5vA6oUVamMakE64GdojFgHq2yS37t5rSokURpafdshsXWP",
  "key28": "2k4qobFwy5YyT3saychRfunoXPbaLJZbgeoSZbt2LngS2pkShwz725bzTa2t3gQrw5uzpwr5cxCtxpKzVVxV5bRb",
  "key29": "4A4uRfqncxR4JqbKeNwDpijpAZcQXA5G7o4WwUTjmRixk7vq494SwYRxDY6Nu5SGdTbvwqiMVQ3UEXQ1Szy1fGZ9",
  "key30": "XLAbHYF8yLt2aKUmjFCZW4TmzeH7nPosJ415o7RmCNEEhkXvxwvZ8FnV5pH8c73QTkHvhECfkP4JXkKvCgG7Yas",
  "key31": "2hxYcdAEcv6JG5ehFZEd5kkAFjNi63pUx4u7xWsTbQf8zT5xnqbgZbxc8ykiziis2wRwM3ePU3atTDphrjSCfk3p",
  "key32": "Hxcd3Aud48pavhyyCQkooc4ctqvHQse6WvKcy5NNpeRBfh464JmDBPm1rJvYonaMGkWZX2cAQr6YxiZ6FQadeEE",
  "key33": "5hjU1t5jgqjLYf8SeQ3vXjjWnG4LPcJ9WL57Jkqy7w23RX56KaQ19QvT6KV7YNVyQ8Q1njSAQNTCe4ga8p83ZiSj",
  "key34": "3qE4kTh4DTNAJPtfD3sNYCRKXMCvD9brg8UgFCxAkpbFjwYupxAd7FC7ySU9545T7jfmJHECDBnS9Xe8ik4pTFJM"
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
