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
    "3apn5UEUTQBVb9aq9sgKskTosWPj2NcEBpmSvM6iEDEAJ7UYrbBN1vQzRfzx3g1k7L3jimz1QRDVWRwnmWapm4hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VcAMVaAoWStCWZ8GRQpz361diMuh9G3V6ehWPnVNPAPwiWisGcgPy7pENKK5mzj2F6rLixpSTBuykFmDtUiQfXT",
  "key1": "2otWKwo6or6TghsyBHxKPwcmHocnapC3b3W7m4P9Km2YMzZwhzUBEJ4FZ3TZvNU7rVCh64C9vTqGuKVLgmC1gdi2",
  "key2": "3VwrxisxNfLBNj97HS1qmuNUxDfg3ibdDxkodto59WHX2PiT2xQc6ZRsN8LrmS3NKgK21rfJuqGin2UqonBxRWBG",
  "key3": "Hkuf9BeYHrvfjojr3KQNAXq8GpVnvrU88ENbv6WmakmzHkE3Grcneea6Kz1N4YvSnM3PiyQcymTZguAFMRmikoF",
  "key4": "99wdGTy4AtaFfWuetoDkxCzuiF9U2CAykdjKHznW9Lhv4MH2KVhPtymHGX9gNmd1vkN8PmRfuRAH4HbsHguGsTr",
  "key5": "2DvimHKMszME7NEDrBKJ5ryPfadudY8Kzzido96hdgBkL1Npk75aLY4SSdrjHjRTCL1porN7dTWjHkhW9i8ZZXo7",
  "key6": "3ticVkxVWRKaJP6DDFsDC3QBneSohtZVFKXm4ijgqJmCKBPbe74G6KSCaBpGT315AZtnramGXzswBiXkguXaepMF",
  "key7": "3RgmN2iJj8gZGHmQA4whi8cmJEnYjRQds2t63BDtjDNQuyJPQWM88YREHbnZ4CFdgCR86Kbxpxjj8rQ9nKzSAdUD",
  "key8": "4pDT4DXup9eLuu25zFXt4b3Vf2FTtBKEdTL4Y1bDGWiWq3YdWStqt4hBxuxUbVEXjtDqw6ztX9KX7GEGcj9b3T6H",
  "key9": "497AEc3UZ1NJCKmNiLMcDVJZFLbvxEqskoBFwiSQJkt422mTXRYQeoWfUC1MxJJmrQVAzqwf4bYC29fqiJa2Zujm",
  "key10": "2G8QmKGPj7oVXbjC7sgFVrVEWLGjQN5YBeoPnzvsNjD63tmU4AxivHg4ZYhBUathUqWxNxA9byK3AZQ85f2QPQUN",
  "key11": "4Q316xN8bW9DCMUNMQx2f1ysEiv1KyKANtnxCu9Vh65vWsroYyHvX6ZWDgPtC1wx7X3rezqXj5ByeHidzmTe294B",
  "key12": "63tFNiraACBJNSzictdxC3hykZxbhhZ1m6Ew3QLG1bFN31mJfsJZtt7SUKADJfVZMHPWLxLo7P8SjqSm1XtDeDiq",
  "key13": "5tcqfQfE8k6YkxTaWa5SCyaQUfG7NC8fADBkgNgvDVFzDtG4XUHBAPsMHzXiemoXCKiwB6RC5nL4ZeiLh1EFhbQK",
  "key14": "NRYJCdEucojRygzRTvuKMqY1uUg7EDacuVvyAsQ94pbNbkHKxVRpRkgDEq4UbCUQzcuYFh89M7ZirVN85MNnbzL",
  "key15": "388XkDWwTUVfiva1ReaD4xUk8VaHhQxHFUtAS4jeYFA9eSM24Gwrz9N3TfUhHWTmRhn8Bwsn4HaQgEUni2PUW7Ud",
  "key16": "Y2K2VnaEQkMy258QVr6vDXeAkk17LcpBsssp1oHnKwKb3zgDigyP26EJE1ou4MHpwMkBwQcYfmp6ziMVdp3a4h4",
  "key17": "24hTxD8na29sf8NH5jquxVULAzBsdpYc5zVJRN5XgNAum5Gg2PptjZSDPBxSygJrievCaa8MNBe8R8M7rymDsQPB",
  "key18": "CPhQnKy3opYcqAP72G8dDS9WdaZxGVr6ogKUou3ygCkr9CfYLbeNuC9qeaDEtpbG4kdy9gkUTEkwfrjEmhnTgdF",
  "key19": "2G5NpY4uEMsUBnAgkMX7PhioBJKDC7xdh35AwP8B9tPuFHor1o1SPR65Mz1uoXzYoTXCduok2pWBAmZRRKmPfFwL",
  "key20": "2G3fPa4CJScqD3QgcY7wx2PCrYzLDbRc4nNdqA8RB2JUZNrsoVcam3VBdAv2anxNj25XaRtB1gDxzDzSs6aJVk3d",
  "key21": "3xeaeCUAZjnxRtY7og7KX4b36HytxeW4SGd3ZNiGAJevS6zvdFGgaSGUPnph7xZEMJebjrStEkNXwVBh7Fo54sUC",
  "key22": "AXEPKpossRS8WhYzBLRNA8wCAN9XQc4uYdoyiCJZRrSsFuj3XBkGWBwtWVpmMfLbpgwHoQ5tx8ETtwhWHmE9LSo",
  "key23": "2f3TrheTKv89L7EUEcUtPJysSMm4z4QZCiimvFTvp5jpk9trJriGxCn7553GXBTcVrbt61GbuqKpyGSgSguYM1qn",
  "key24": "5BiX7RvhqV1y7AqRM2wWaMU9nTSS1FQjYirro489vDfQSSWrmWxpdA7iFNv8YjN97u26tKGtJ7Z7gnAbXYdvP8ir",
  "key25": "3gncmLMpp19bsiv4k2pBTFyu4BrA8a2Bwi4VaiiJSDfdtmDvgAvNF1LjgqWzH41g6Q6FL9KM22i2cmmGTeiakBds",
  "key26": "4P7CANEXaMPW6TNgAVnCd37XAXkiCmh9JJcg147XCMDd1EVwr61Pm3QfZNsFQ4YM77wrn2aSEgkdmjkGUQPowNHU",
  "key27": "41UmWvwLtaAmALnscZ63BUsxjCK9g2xaXZtMbc2CqWTsZhEihsvni73aM6TenssghVqFS9K7aXFzJNRtpwD6gaD3",
  "key28": "67EHW1GvmAoRPk2cZNnvvpM9fC2gAWF7BvfowqnEZv2ZxMDe3zaMpT1nrxEXmMbwb7Xzbo6GLXUoqWPjejABYYao"
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
