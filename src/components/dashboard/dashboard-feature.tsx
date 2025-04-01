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
    "4zL1mpqX7sLZKYUzENN4cHjzCCmoeABq1z8ip5FyFF2W5d7PSvvHzEqTEfvKw2LNLXd5PMF5UDcBL1qPAHqFHYE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nDqWTqhHu9KkmkQptGdLvzQVKAu8RaryAMpR1USFKkQcDFLiGDHJpgVdVDiqyKBCRDq4Enbo7TG6J9ScxmJRCpR",
  "key1": "39TQk3WwhA1wpyPrfmjuDAWuvrZugFtTffiArYvMNZEyRpEGbPNSX6RNSiFDoMi3pneyBTFZ74K5vWipQ7qhp5eY",
  "key2": "j6H9gwNA7vZKi5a987C6f9xXEDsKRG6PhRUFjoA4dV6UY1TpFJgJa3jRLNf3LFbnBRBeLkz1fKh37qhUSRz4hDH",
  "key3": "2sCKfk8cfaPZ6Ur4oSBtWkwmHjUVUDNcviRhRX8Ym6mMVLABqcBRRogpAtvXecf9WW39Eam71ZMY3JKvbLfHfuLc",
  "key4": "2BJT6LxpwQNpyCxrSCWNiiCtu56c64N7fnrgg8j6ehhV9E4USqsBzixzZ181NM8TBkPhyWJe2op7tUNza8dx2vEh",
  "key5": "6Dbx7qpb3mjWxqUsW9jzLSJmQyLNem19JS7y1R4keoWAK8C1ERULS34PRTonJYzMg8bnhqoU9CDfkhpHGXoxrP8",
  "key6": "4niE4kLdT8LKpVJgvr9JnppZB9oz47s9DhKDANM62tzW7dSbhxjPHdRresNLrNyV7o9kK6XekryB2BLvDvzVVLTp",
  "key7": "3gQciaHKR9xDAZpsGBUq9y6erJh6XgNFjSmuCBFTUhoEQ9TkWhULJRdNn8NPLWr32GqRqGnmqDsv7Jso8jMSpJRv",
  "key8": "5v2EcpY5fsq1rgH6unXmaC1eJnVaoByvJVgYpQd2m3ibaZ1SzMFKtxk3vFFqpKu2eu2JPGYcJLs2AmmDUCa93St4",
  "key9": "3wy5UaQw27sM4MHN6oJpY5Bh5on73sFxRAtLcVAJmPUn34RwoEc3gZCPkJQsFwKNCB2LawMCGaoqyLvbEtG36xeY",
  "key10": "2iHMPErCCAvpeBvToWQaBVqEWQgUUR9c4LHNNJDjVXyFFUSnk7sJC5x71vV5suhVMyNsYcPRY2krsmckxaPFnHqP",
  "key11": "5ktR8BULyFcpoEv7XLpgPg7q5S6nmCttnRMBb3rywVPDTAsEe1XU4h7tDQd3rcEW9TcemD8bqwa5qnEP7M78wLWu",
  "key12": "5ZGZePDZbCL1WbJBdW8gfsuoZauqwKAhNh2qVxSGPYkTHk9ZyGMysL4G6a566bdFTmKrWa1TpwhFo9pEQGrpqJnF",
  "key13": "3p5fPuwFSwv3wMY1k11qpy2uVHUchgsXN1LahFempUKq3BouEG5nGcwBVQMzV9RRtJNhrhWTU4QGTLv8hNgzBeMM",
  "key14": "RrJm6JEMGyN1mjV74ucetx3TQBKiLEVKnKcarmHAM2PbCD6WDdMATq3Py3M6iG3XKpZbXpKJU4P1UwcRjA5gFso",
  "key15": "5H9h8HogLAbk1tuwDTVwrkmt9BNE1nwpRx2Kvdm45bQMPiULu4rmQZMeSv1Px4J1tGRoW5rZux8V6EEzHvFjRaAb",
  "key16": "4jMeK5wFcvEKTYXtygrxFC6N3zuACjkkPxDrgvJd5tECsfccL2N665CC3KApZG9JEPpc2W9y5DToK3d5SNN8fUJG",
  "key17": "3JwpXP8qHknQqcC6GpL7nvfVxqQJRUrqN3AJruX13s3XUtAEpHifnFJpQXfQ8girAY9Qx73b81CtwPgoUcqMe3Yu",
  "key18": "3weL1MWeU9X6HtRi5LGGteLHiVi3svZ7KHc2PDT1zoH5vuzCYNHFKBtkbC3J9KBd99rgCAzwQSMrvcyid58jhyCD",
  "key19": "5fSUodf3dnnpAMqqzisMu1dvWw31U5BU6kRppoDRS2XbxzUpegMqUWkCwMtCFif87eK148wPCV7k74tK1RgLRyaq",
  "key20": "5mcG8S68wdqc8mwdqm8ZW9LQRznfZZxPidDAqrFEGgZ2tZrLggD2SKqSPxTQSwEG86MWmkv9NNP3VwPKGzmtuQE4",
  "key21": "3wYKGCi2NAdJdGHt9sqZK89gzdX1xRpFkQd2p4SVFade7yA3pVESEbRaYkb1FgaTghkjxNpFnsTskZ3caqBGdAys",
  "key22": "63HvQUeLqFKfyaEmVDDo5gRTUMbhJZNWG8Dy9B4BEsTkM37khER9cWBorRG5AkqgQ4eJb7xrjdKRsHyRdeRnNeoQ",
  "key23": "2WWASQuxVz7L7n3ZqRY3KVtTmgG5111pjckYhkNViQxGb3p63bq3PpJL7Dvqv2qbLJt5YJ8xVCLmSgiM7eoZheF2",
  "key24": "126Zgk9nCAtLttjovpxdTDDMjRGxhsKXGdPUaG39ANJK3i1ZdtdzQbnDpmYWcCcYgHbvQscUrXyjsT4hT2MYM7E3",
  "key25": "5mKgsTgMtPoAwT23iiPNfJaDDpER1C37pnBHsQbanSbYgKKJi24jjW6WLZTTJpjkfPr6FMXZPcfxFv4FsJFByTC2",
  "key26": "23GQjAsaapkypnw8WCsq65kuF3qec4UJgLKU5MnoK6xNvYKjbk3FUmcUZQsTxMgepVK6AyVB2UNYd75stcX9c5ik",
  "key27": "4TDTidiJB6BNer6HotakkQ75TvwbMr1nMauNY4QSYtmSP73DySoz4sTRXtTKBKpp3bS15GR2AzA7LPyso6YHuWJv",
  "key28": "dj3d5Ti9BhXD7txrU4e4WGFkW5BUxtFKBP974YGQhRc239mhvrC1PuuamdHboQrKttv11nP6URVtfuHu9ZLMxNr",
  "key29": "5nAJ4FHqAXfcBC6heqESDF8fYLxvqEiXVXsEPwM9Lb4Ha24yw9bWeSGuRGd7MWKVed8GBEtaou5TuW3wjnxj4b6w"
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
