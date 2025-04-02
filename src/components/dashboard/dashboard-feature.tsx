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
    "5rzyLN457xLsJFZm2yjxrQnssZNmR5QLRbeSR9Cv7wfQgx1TfL6odDFBZfM4G4rk1Yh1Aath77mQwhcU5k7rdYnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62KvCx1SHfL2ap8ACrz7fqFcPwwfoTsB3DPCbAy9kUaMPxF95MckBY5ds45EYTHgy3EdJiX6X7qB7UeGUGAgDACT",
  "key1": "2rZgzJHTHarbuhUZBjRgMMNthUjhaz2eQvJVGrmN8JcKKmr3TVVZm8aFEGaJW8f3n3keqKLTcNbg7sFuKb4KzKD8",
  "key2": "3n1Szp2mmw9SMnxDdyer4WPDHUSJKEDA8JUUdP5kkDYDm5a4wxzEmqLqmYYu4nctzbrmftkbCcm7yLZcCQom356V",
  "key3": "3zRATATfSfCYFmNGTHQMPZdsBjssKggX9oLwsEBij6zV9T31Nm7XBrQ4aquPeCx9z2M6VonfpzZnMDeUx1cQCMNy",
  "key4": "4M2eVw8ivvFcaKbeM2DWxGLwa1mUCx3CUGqVQyNveh4tYm7yFSCQG9vNzjyeHgDYgMsAMTzdu3kxGP4URBFGFJb7",
  "key5": "2VQ17ELwg2dGn7uhwUgmRqQY1LZGHuV4Y6LohEhr8wvpK891qETA6hNfyu6B7bWhWX9ydd8Xdw7NzoYrizNZChvz",
  "key6": "129gPvN5WomicUN6FN69PsB9CgUTyXbeKK3CiLEAfGgN2hUfzdgMkLSE3Zv66j4YM2p2RnJoWLRrX6bpMxe8JS3L",
  "key7": "3b3RXxdyxZuMQ4AjZPBhDTJh3gVY9WvycfTXrgoEfxgEnRGQMkxdnZ5zyx22vyb6mqtoVTKF64HgKkYz9AqX2dgo",
  "key8": "3PJNuGd6WhMnmMpFV5Xo8i3RkL5jSuC3Fudb1SCanPF6KxEHaD4qBdHtCUJtajRxVwWNuBUjZsH4ENsQvAoiV8uc",
  "key9": "37FD1ptgkxyFnG2sZ8a2bDEjKpBzuXAWu2NPiMAzBgrcxxdRpM5pqeL2KbuxXMwS2ic7qNkS1yJjukKjdocfXx3n",
  "key10": "42VzREFbhFqJyszxYQCnqgvQA7TtryHdTuAZLHgb28CCPSW3uYv4iw4jqzV7XNMf8T6FuzcMrnCYR4TnUEX4m4Hg",
  "key11": "2m8m1tDTsduLo92QfyFfa5xyRMDKDKPz63H3SSt1x2P69zqe125dqh4nMJsFchhtQtkJZtNxPntXqCRWzMx8XaBs",
  "key12": "43kyDCSaJvkdy5K4YpPJvvrRE3yWt8HJ2tbwiQGjUsS3wgxTKupysDNKNcHqa3Kuan3Qf4UcuADr92Q3MZWgw759",
  "key13": "2w2qwe9VgEQvzfkeUZfwHw41uiaadskAu8DWzHSpqvPVH8oc2qGB6x5oWdzLCHAMotYMryjAq1tcRCnf2vmaH4kh",
  "key14": "3qSQYrubZBURKRTTGRxgkRzRaH8RoXRtSnRUUEcSmgkSyvwohjgikBwNSM6b6dsWKhXpFNY5qbZXuw1HLjJnW1Vg",
  "key15": "4yZEtUZMZ5kQnur5EudMQoz8C1UuBjKrfEBtrvhUf9o8RpuNewMie2sfwGdE85ndJSKLW6L4tja2DGBK8mo8mRc",
  "key16": "4taRDyB4WHZghJfv1WiwcidVwm8tXbBGJnUY3xaq22Cykg2ciuYkqF2zpFXjcJ34PKVffBgbD9v4SawKYwxgY1dE",
  "key17": "42PoTEcZFx4gdyFkCmDz8fcAp4gRbSBbbnfrT4Qx3us82CTjCQViwJGcqxsrJR4yvhegMBRXZPomDSZP69swraUx",
  "key18": "51nC5VoKA5ALRwBK8rKa1uBe3xT2B6i3Cc5aUP2xnddpjgkDGarEVc3zugx2MrH6JQQSyEafjr2gKuNbDpPsrmFT",
  "key19": "51jXxZAuPpmNbUCrsKoD8qBsARJUUDt66wGBti297KUsMTxZ4FVs3u29NqsjoQeRDo3vxCrX7DexUfDzkNNdXaTt",
  "key20": "3MFiz8LqHKjBkTzanzrW88dFcnPzGzLxBbscpPM6xCKwcDcrz4rmooNhcmsJxsZE3m4uWNmN3MyePysUPXtvAmAM",
  "key21": "2X8iNJ3r1hm7ntwLLBka7wB7sf5CNLYUM2TwiV7UaGfrhLzyJBJXfU6jGYfygbFRz6MYCC7fNNDhHkZSNWK7Umz5",
  "key22": "3hfhJVVvWqNJqozeAViDf51T9W7bat5iireQGTCPwjULauuA2cVC5yEV71phb92xy9hyv2UzcTsfmEkEGCVXQSvg",
  "key23": "4LRKDXD1yLeihndgPguBdqE8qrGMQxxPVBMSuc16tJeY3pFRFo7xajTxGKttwuJN5byXFi6DS393jUB5EsxfZtZ4",
  "key24": "fHnqpPMsdyXyhZPRTjN8wKbZifckkZexnFoE9w6rosz5v5P4VBPJW4MUtvU1nanyCitEG2RMTcMoyDwnZZmFtGt",
  "key25": "4RbZg95QAnNS6TcWTce13Pep2aDZtcToMBmEngCrhoeUhGvfTLfbs3FXxwCNfGBonz97U68RMvSBP4Z5Mno8EY8i",
  "key26": "2ka4vf2gBrKPZvNqRdAUfL4r7BmhbWEMWZ4v5KSwpmYPFNg3RE7AEderMDCZYS1JnG57JC5R2ZoUEboCLUqB1Q5",
  "key27": "5vD71b2BNcLbAzLe46U8CjFuF9ADwhTsn8Jg3ZLvZ5oAQ7Xo6iFQZwCjwZ7gzC8NSDkbjbDgq2AEnFJ9pvW4gWz5",
  "key28": "4PM7wWPwyxPQQowEN44yCx1zTZhrmsYRDoPqSLUsirGnPJa7PLRwJATtMQ91aoUjT8JzemmXaVYtoisDSAqqnhx5",
  "key29": "TkDSMuQaNmZz43k8aaBBhk4zuBhsqzKebrHJX3dd8sy6LjFFWAUxztLDTskwLnSyxKowQEqeEzG6fxg5dkcXSoW",
  "key30": "5CzS2KTtyNvqP2m5XbTFZYEkeuJ8j4Bx7bbcnaf7Qunj6ue39cvysFiqE2VnyX9FX5m8tUzyd2twe2eu7GyJ7tCq",
  "key31": "32TA5rAThXhz8UNySknqboBUnButo77VZkLzGF73FJ3vviUPapd6PhjKqqXwuzpYhSTht8Bbnw54LYAykUmY98tV",
  "key32": "5siHhXzY6oHQKqzuhyd5pPpVFbZyTtwFV1Cz6DPG7tts9ouR2MdLzvNy5WyKABD5XzpeiUNf1Js4aKxMi7A9kECc",
  "key33": "2CAXFS8ZVsHA8aoQ1QqWcsCysxA6Vsr6ZTWLuwDn8YQB9CB6cPPhqs5mHGA8eufgYLQns2Pdcf2tNnpS5FpvjMUt",
  "key34": "5ePGHNvnHSf5jjQoEK7BmN2LrqT86AJQa2BNAGZNrExoVPigLgMF7kGCCrjRSP4dkayR9m3A6Wv17i4QYkPb7Qtx",
  "key35": "3wyfC4r2PZd4VoRun9EfW65SEfG3naJ4uN9t1QUyXsS5Y37snrcUBWyHZPdeJxWgd33u8kgN2NZpCrABTNvhuZ1Q",
  "key36": "fYuYDQXwAXLUJb2ARxsQbDSFCWq5eF7BXkRnEYcqYXnTdwm2sr1X1Xpm4yuvcZQesK5k6zn2of4X5MkawrjbmRF",
  "key37": "3BWvVDJWuiBgrvAEp8RXf8dPeatyHxUdM9hiU8xJijyVuJqd4mD6CvDUNaDsYwuEyAjeozrsR4J4bXd6FzxDVU56",
  "key38": "42Xyj3fTwD9rLmSiJsZnGCdB48PQjifvuiCwV8WZNxSV6KpULSsCrkLfBmFndhGe8YMS8kozG8m29uLvrkCtisSM",
  "key39": "n1ViaZBYP5chNkNtLRRtu8UKdRGgJiUF9V8opB1Zop1T26hbtq2ePFdsJDVEpheqUdYUsS6mSRRXWMdyjLLpPE9",
  "key40": "237qxZC99HX96YAsw9f72NnMJybUkx5rXpRuEmzpEvTJgGRUErxKbD2YAisCmvm5rVUNKjRxpkEW3RBQpBeW4dx8"
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
