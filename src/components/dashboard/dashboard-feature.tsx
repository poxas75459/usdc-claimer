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
    "5iR8W4aJw1EPphjyx9nH5hBXB1B88aVesqzPDLhtczkDMLQbgFJcp3ky86n1xkWwp15frJQ8oVbRr69stGJwjryW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CdXVUHw6fjrUu2iz1WbKW57SjZCFvmhfQyAuKueuatos14qdRbaQJUFnzau9xXcnUmawzBjYipYHVRuWfmaJ2XR",
  "key1": "5FiskR1hmmzBTADoJk1eMBfAaqzctzV9No6VB37yoMomPzW2xZqWSBubf91z46S2jAF5YXyZSuWcHPrVroXyq8xT",
  "key2": "63YDSe5rQFmEVsEf9bjuNNuGCbzBrUNwFyLPNGWE3ocaMZFKoHMcntStj7pqML1D7H8qntHFTJwsfAsvFoHi5Syg",
  "key3": "19YZrxk6RFtgSLbewY7khJmHW8Q1sxuEpGrNP5wMsnFiWDKU1TbdmoKwvm9VTF5sqPV2XW98uuRk8jPTQmMWaWG",
  "key4": "2VQQVsyw9y9nC8qggvy3wBQLnVnvM8QB2TFM76jFvQxL6oMCnsegPhneh4pdoc2Vp4Yj4T9KfyDwLsvz75wHbuQS",
  "key5": "65PmaasU7utx2wpNjT5kZopKMJUPivUe5P7UvKvceVPSdZYyPdxUpLvsVEwjcBJmWxFZCE2L7NRWSNZJ9ots7Mek",
  "key6": "2kwf2Fb3bJTBk7owcvcAUPNRYehbx8tLRqUaWGt7gFXY1tbX1tx6ip1PojosZ7Cehn5steKDpbhdaAndfg12x77W",
  "key7": "5mLKLskgKoDfgL2PArxkwMa8P1myLwit6AH8xtx7BQyqtiA2fjEzo8LXUuQGvyw8LbsE5jgF52AxRwM7NcdiVS6w",
  "key8": "4TTuEBUBs5eSQpXVdqoEUTmdSeqmz84rGFUNkNuUqsZBb4V3DUaife55b5buVvR8pr7wJ2eJXhekmqNeaWb1gPSD",
  "key9": "7tvdzHA5ywueNwCA9zEjZTWm1T6EHi9mbZxtjpgms6AFB3UnJpz3s455kPzZSp2Dk5Jzd1Y6cZ6iuqYNA47XBfk",
  "key10": "3QaCBxRSevpdv4bCyYnqeWbWmLxXAe7sDnNvgLmEHooFZ8rRqL4Pcq2VWY4P6RF75MxvR4DgZFNQQ9oQyT7PohB1",
  "key11": "5hYnYw7gaSV8xsUDys8DZmwqc63XMhWfLi1EuKcgMS7xdxkzJtAM6KNPtJRJLcJin35fgj14EfieWoryvHLz7hyq",
  "key12": "46k26DQz9eUMSJBnb9VAzbYK2va2qeLuzVBLExTXmULVAHm5zw2479Y5iXa9CaDvXrd9mX4LJVXbr8SVaRiCYBni",
  "key13": "29XFGE3bjew2TpnETqknqW9RLsnpAF436WWAuLTpiha3aatyehe3kX5ibDe32fZWCXyNxwK5Vyjn7iKmKB2fHiZK",
  "key14": "4fGSekMM4gTovktFWB5eS4dut4MWtPZFJrsqr4LqZ6XubDSMQaD22TrPGETRTPu8jscQJ8t2wKdpo2jkrXmg3KcC",
  "key15": "4UwHmCQe7hDT2H5PGHmcHL7MMLuMpskvTqVGmAuPVYwb26f6weJiaKUtM1PJhJ4yYGqUWvqRynqcaKbpn34nQrfC",
  "key16": "FY2rKYKaU4pcKGiYpyZyo2S9cXgcZGsD6dF2ucszzKyMEPjiR1fTUWcfLX9RDo96PP5sMDiLA6TzE8Boz2RyQT3",
  "key17": "4vBNdwNMz6ygRi2AYfQb1xS4CDyJ2aEQtLZgTE3TEbNNCJaTZKKRwKRaY7bgZa3NBbJmThMtyPCR2SxVFErGK3Ku",
  "key18": "2S543T3Zm1pavmYCp6W4L8YYV24QZNgmBiikKHHtuJheFbkfeTS8MoTFFR6wJ5yMHV5asiHSbFujjmGf95gbvgTj",
  "key19": "5enKzJrzpmQWUtFUKKNXLKZQpNZFYC6RgB6wdJcwh12rUoVwUBLdr2aPPmpRbSWnrEG1yUbvWRSCyjYZ3SUP57qG",
  "key20": "5aZzTvRz9xBqBbK9i42BCNH5zUwGW8BGni5ioBhcEVhVDw74WqYmfbWTh66ufUf1LAPPJziJn64naXUYPq5wCTM1",
  "key21": "5KCodiwXRBMJniZ8Meiwjh3MzKW5CuKSma5fjHZM97ngEJUYF1CNwYgAqdUE39EAhzf7UrozHyHHVKJxyZdgTBNi",
  "key22": "5WvpxHDj8qe5JXeZgWJyg9MTuPCQqg32YTDeWT4TkKe9SHW8xUCLqrycDshGbBdrZggkXN1ZZwxd7pKqrT5NGhhD",
  "key23": "2YgcPU9bMLg5d763iAZ9AVsaef3HCCyNeU3jRcqU8TwSTCazGbMXJfYBCHBuGxYhxTy3c12co6z62qG1ew4YqStf",
  "key24": "ryHUy475xzKKPtEiL6GZyg1N4Fuwogu49uQqBb35o9JxQKtMjx3BJT7mXNrLcpfTgUJzCBrEBfKw8v711j83rSf",
  "key25": "P5gzYQwMY4L46UNQ1wRcVTN675br1bHqy52SrnXibt6mhj1TT8SW24JVN2qzHeNwk9qS1rCMHNMWVDbHQtV224r",
  "key26": "2xQnmRbSj2n5tmEzgFy9DmnJJD4RL8FwHYug6E8a6jWS5oe4mUEA6i49NwAGACV39rd1Msx22qNqAiVUptjuiXpM",
  "key27": "5NSgFcNACH5B6yy8fjCbkTyskvQMkpqVDof66nNsfEjdxGhV9SRRc88CNYtq6M7Pq4whUf5vqFBGWpLTCziUYnDZ",
  "key28": "5VGeCbM26X4cr6t6U8uFqzyxUzLiXoguvWncmTKZtG1M1J7RSnu5eg5B1S1MMegpUP4onhFrzec1ZbPm2pQ5ZG6s",
  "key29": "2i6L9QMrhTkbALKKXvFNyu7eUytVXb7C1T3RKZrMfmN741Ao7uausQ2EZQNdVFXWsXw8g3H6g6WqdYAwoaotPcAe",
  "key30": "4db9mzcuw8zuWtxvqtAWAetAyXsSychPPhwpnwkhC6trCJ26E19BsiaTDVUCsQVMahvTCXgvdSAoakvsup1WwNa6",
  "key31": "2yzREHsY8dfSR4yDWoGBNpHwDcMBem6GprU7udrA4nQGjb3zTB6Kd4tU3egs6YfwAHvstHzdaSmxr2PzLW6hvXNW",
  "key32": "2oqBdHWfrAMDpUCVgtB5zcQsFebeMaqadyCSZ1qTDWAC4JW68SiB4gAL8CMZLtYdEro5Lid1be6C6XCmKc7ViZa",
  "key33": "3bbrKmtPEQJvi8tG1kc7SeghJStUf7DiQAvpiVtKsVf1kLcR9Te9RMfjKB9PfARWu8bfubkVpHA95EtfgrBup3we",
  "key34": "4ZXfYst4aT8QfTCBUgXU7YZ6nV45X7ksg3dXspPSLtQmDEKaFhXzD9MYAw6EUNA6Bwhq7dEt2tFkMPLpn2ftF6T6",
  "key35": "63aWWn7F21KXtN2UuppBZfs4HGpVjpHKSE8Ntow58StppFRaRYiFWqPham9vuDbCRmFHF1Z1pEZD4ZmRtcg19XHp",
  "key36": "nWwCW32n1vbyeto2ptusfhPfR5EozcBwTTvZoiZ7J3hUhoyfg8TzTEBFfgv5H6Z2uGQT5fCxDAh7xVAYresfEUE",
  "key37": "4z91cxg2XFsQj1tjmAgExuWhbWnmVFwybe3FJvZr1Emg7wpcfGpF5T6sKKficLnSEUWEoMkdGFiq8v3R5FXSZVH2",
  "key38": "5ysrgN4SdQnUhsTAP6WFKebRhKqAWxJNXkVVMy66gyHgoJ7H541Bqe7GVZcNkJuyt3zETo6GYDdMEVbDMvBjUJPT",
  "key39": "5Hx7HwaCsEnoJVVzabUYRk1PhXnqwp1kDzhcDoGSUD45gA2rgF3nhM1bEaZzBTezNcYRiGEhW8fZq7f7i9adszB5"
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
