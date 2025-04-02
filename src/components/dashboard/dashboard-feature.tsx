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
    "4frKUtVvg5kn1uhUExDKb86hcuLikUEP6FQguaExBNuyzSTNpqLX7vXx7nQnch4f2vYQhpKUSphp7ANy3dVW3UHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suu6BU7q7kkaCBCiSVqTzjSNwi6AJvwsNryXQVaAbwcxNw31MTmosTiAKXi8rsNALmbcFbckhN9anGJvBRJmzmZ",
  "key1": "3ruaEzk7XSZszBGZ9qfLr56AyjjdtSHavuvtAFoY6kT1qzMd3NNHcGvxS95aF2eX3qtChTZzrXg287oWk7Mz7wAu",
  "key2": "ZYgZ2eJjPwPsHrmGdCT7siHQKSbwDPeeBQHT9yHRXK7oPgKTh1s22sALZHDNyL4j9DRoU36u3W2yKjwBbxggfXv",
  "key3": "2CmTqm3Z8utVB5wNSdmxBbgKWvjytotGzEsL21gaWYDWazS6TnvESDPd8oCJ6CmBCJaRx7PaR1x8PgfSZ6iPP9Ea",
  "key4": "hpsyLx2C2uekm7A9e21BQyZuf8gdaJGJTNakEA6ahifbpkAzcvYRQPLEmGYNs5ev6uW9Vw5SZDYBBp4CADVP5Zg",
  "key5": "5nnLbMmW5CwdEEhXKMC3L4mJD9tZwejpUNBs7ArXUFdUs3NNkSX5EvZSUTkopaGiAaDgMykdXHtptuF92oyeA3cU",
  "key6": "3iqDYjzkAmP5taYPbqt7FpFvsPR95RHtrY34ucsCqG5TBPL1FeCowMVHFagpum9gtLfuNHhFxi9fDGFMS5M2Nneq",
  "key7": "3KYbcqw16FmjXtGYLHiipqUBAtsS5SQuYemSzV34n3TyzoVfg7K2qrDmdke9Ue9r88FPt6kwi5SADvrUX4RhHjuW",
  "key8": "4DDUdybpv3DApY4AMje5zVFwJ7zBWTxgGMuszSyecu4FdbTMTKDNntRSZR8z892wDVvgpCbtTN1yey12D6j7ZRWn",
  "key9": "4v8W8cQGFTazcC2qcs8wSojtESpfXZR71B9DJqieUByKGY5N8G9nWmvdegU2SHq82vcKZC3w9UhV7XvBGPujtLLW",
  "key10": "5Qj9a6ie5NzQaEdyGqXwLqbzKD71zBfffyEYzwRMFDdhr898HzQvLQTYfr8TENByfGxrtqePC2eFWCsPT4ChaBkj",
  "key11": "5VKXzPfh1CZmKBT2EDwFCPxQAV5dLZuHGzLrSjmfgJKD2WNFWJeh2HpDiSGstC29A1Te4ahLL8rECWhVx2TpqnPi",
  "key12": "FhEhjGMevRYYJAXwU2NoYrsqosJcpNX4EXcjtAqXr1vD1oti75z4pM1TGs57AGjZ8dhtiSwRgPVx4sJqQhmGcLm",
  "key13": "342Yp7d4NtcNEbv3tsGHMr7r7FcvGwE4mDdPbwRZfSyhSoUSuVxZAMUPGEJpycjLLkidy449G7B244AZi4x5WENu",
  "key14": "3o34TwsTXdDyb4QmSQnaZPqj3yABfrEUZWWztbcdAqZFNeuqzWaci8MxZ71coqC8tEkSG5nPVttxmAT8xyD5NZzV",
  "key15": "4RwvGRSzNLp8sVXL8ta7jccMytCsfEJYdeASeyz36gFfbeqzBjtrjVa3hq14Ewngfg5u35goxAh8K9HWQwf1nHsj",
  "key16": "3W5u26SFPLvhqeL6HUGGU1LzBiVkS3nfcmeYeGMJYgEQGSTXWFkBJ4Cb6YBTUWbY2eqfFR6YPiiJU6NdZ8rLxyRH",
  "key17": "3zpNswxCormsrPQxihtWYW8TFN6bqEM2Wucggio5tkQCnvLeT3NQ4uFfH5vUDxPd1cNzYtgNyU9ae7gCd15hD9yv",
  "key18": "51xaD7iX8y1qs6in6vQgN49a6kD7VsYU9YMNm4BTNeH2XAGfZFuioLLKXTAaZQJbeefgnSxEjd4wRYKThRJVjFEr",
  "key19": "5qDU7i4PzL2UrxQqBCHsGe18E6j7mVX1u1CPCSgMJn2KRAZQUFMB254YWsr7msJq5TTuqbujNJW2YVHfVGV4i5p",
  "key20": "4WsVNmPXvg1rignov3GjDuE4wU1SDYPi5KWouCXYiEEewecYZWdLjXCkc2Jomrr5nf1pX231dAwd93WKQsazKkPD",
  "key21": "5nyD4g2HMBfPPotoCZKYfgpHnzQNggbkwnZtm6F9AFA6GZsffbNLBdgFW6FtS5FXmnWaGgPduvcwvYFQkLFeyC2q",
  "key22": "4Uqj4Hd2CMdu5LbrVSyKtdHXPVCsUpaRYPxpQn3rzEDKtZYFFqfo4DHeyEZVDiZE7unf2ixSc4ECT6dAvw9TmCZ2",
  "key23": "4eGb5t4QHpZTJ5tZLgV5gR7NZoJWbGyLS7RfgaZUgUZNrvz1JFGwiLXLGL7ryvbHZZGntG1cCWbucA7eTxnKYgus",
  "key24": "4qY7Rk4yzN2UE2cQReLuxLDWuvWFLikQeQ3bp8fSZwXesRpLCcWFbAs4A6dbRtndtT9UAWMQF33CpPrR2HnyEXuf",
  "key25": "52rtmCA72E14mfnqHRun9GtrmNcn4cvcHQXDcxCj6fKab5cMw5vG1D7V2c5BsYMZic8AjqCE3y7oYddrUCX9hKcN",
  "key26": "5mXfN3VWZsdjdWGxeF1zE7ToPC9T4oyrMC4fekrPAf3xuhvXfSpayYMfJf6MYckBDbRHrvD4CfLNfE2UbimJhuCq",
  "key27": "4UsR1hzNhYqx8vbZtTfRCi3YZ6e5RRKz2ifZRgY74xxC5bGX6Ai8rZGFczBzH23AzocQNt7SYtHpgPdLxzK6TuXS"
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
