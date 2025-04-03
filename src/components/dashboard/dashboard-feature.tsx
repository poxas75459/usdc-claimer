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
    "2JjUFYRSnTqWQq8QLBWCBygohosRXa2WJ5hCVbr6fTef1XyEZ2s1LRkK8dAFKqPBBFFAbtuN7Kn1mskREUGvG3Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bch7eqVdN24wcaQLfUNQFMzRxJ73EEEVtXyvBFNZLkX1nPX2Nby1bMSiSew222bNjRAFTtv4cW7aS7yo7j3PxN",
  "key1": "2PfPNwdD4ZWPhUCU9MgW185SFGJAc3R6oEb8dBQXXxEtQxe87gqDrg3bzbspfrn4uayjWSAZJQxqmxwe3hhcWFMU",
  "key2": "34eN6in9ddZ3oeuMWERX23u1FKku5bfp3V12p5hHX4bD2jm1PSzZWVz18eoAh7BFg7tb2WGA4Z2MJYZjNeEqFSN9",
  "key3": "2unPgKp4AC1kB25WQ4hRKjAuQMQQWJ46QYXUgeo5sFbC9z6ERyqZvjNJp7VX6pWevyKBvq7iHb9Y9rvF21ftgvSu",
  "key4": "JvtQUts2pbg1wPdBrcN1mggVcvdH1MJsFzzRY2qMkbgVWJepBixJ9zrdNyfTUP6Qn2uV3FjdbaSpJFhML1os5PJ",
  "key5": "3To11LsU4DJkq1TCsp4PeKEvaBL48Vvss2n2SvoEtsg9pfNSztVfJmXS7fAu36kioWchbbLttivT1dBqsRgQvjxA",
  "key6": "9d4P6cLu9mc7Qgb3LayrQtHjkBdTNE31Pcm76padcm9CFHsSNzm4P7QxgT9WK3HFyTrkCNjNvJcNqiGT4s3atUY",
  "key7": "2PmibbjPAsZJp6j1Kt1hn8yyBLBK52feFQTqHetMH93BapayJjhEBbxeBNgpC2YSdNjybpWQtbcKAXZyRUpbgcQ3",
  "key8": "2GNHu7Vi29XUvrXwEvfidmUfvCycfCZHkRTZCrqwkr1Pqnw7w9721qBxipNruWic2vmRfhGX1WoyeDzK9VTx1axT",
  "key9": "5bYnu6wMjhLefWcWFNurPpkjBHdExjSNmC13qcdWNSy3SMjDNcVT3KD69AV4wWXAZXBsaRpSEf8zcZX9vGfKzRgQ",
  "key10": "HfUQtNvzpA1y7MMu4tCjLyqyyXvs5LBwTdXtK9cxXprqGwosRK5a8KB1pvLZJfjJxfJXtewmibYc9c7gxz93C9r",
  "key11": "UEpHenGXKQX24s4UXbmRiKkqTWwVoZs8KDbmTG7GbC4BehUXYYfm3rdex5bhJNWmcpX6E7G9qEtQozU9Y9AQfeR",
  "key12": "4rK2mr7ujXpNsCUEXcFpCpB1UEDjkC2QtLE3nk5ice2woQ4wYmsLLc2ka8KFNRCfKFnMUCeXX1YTR1mo5ecakWMJ",
  "key13": "5vMsuqDb94NH6ACd87e7DPqKxBHXhiRQzJi99UmAtBcTvTc8zXZnhDZxrJXHasdvt8j3meNA5Lfnys81WhYRrjVf",
  "key14": "5mt6m5Tx29mDwijXY8a53i5U2sJSXN2pmkaGGSfn2Ns4TgNXUUeDFZsgY8roLgYW3C9UDTSdQiaYkJA6HLRuk82x",
  "key15": "3mbDBbHFhyLwFFdSSCGuU5cCnoT6f5gZrZDFoQsEX59oBjLfHS2VBL2GNbisTNYGHFNZtboo4XW8ieHocCVJwzMZ",
  "key16": "3Fp6cRwnRAfLqj9DV3Sjswon4vtkFPmsnxVxdEMtwwMwooQi47wQKaPZzkBCkPWMQQNWsxLobTo78K7JoZusixcp",
  "key17": "afR9yvRnhtJxExZfyeL4gwdAS5GmVsPXoRGs6FfXjY8ssFcntEnwrSw81pbsrsHkFi396NrXFJA4jDhE9mi35f1",
  "key18": "5pnvb7emh5uU9sFch8nFLGTZLZKgTMRAcEFwmUNpiatyReBZz6McsPbuztw5abU918AUJw1pRgoWfLvu2HXNBMVZ",
  "key19": "3L5vTKiCGSBrTTkcq8TeEAJNUixmPJYHy7u8eyTaGsj4qDNV5Nhjz1vxDMZw7JvUfgKSF4PS8Toi9wuecKoZyREY",
  "key20": "393jRDuwDpqTPC1se28Tb18JcYgTn4Q5mjZHJ1sjocCJK95jstVYFWQBXdoatwvcwMFUW4C8XUM2K7rhHPpoqZXK",
  "key21": "3CK7rz39WVoUpCjhpYeKTd3PpPqJ5aTC64C3XpAZqPSprX1KhxxzqaJYKzhnW968CtELKWpnc8M2m4XKxrAx2RWC",
  "key22": "5WPwnsniWUiEW9B6YPDDx3SVBPJpxC5riuiVWXWdsw6t5n4CnXwRWnJu8w9vZh96ME7y3Avb31rppbiomkLPzrTu",
  "key23": "4gioC2zUNsBLek1Go3vAABRnNSdAdYJXo7LstJGG53H8UdEVAyfyXXaTwwLGJXGnAfdfWGQJEutDSGedwEpZTieu",
  "key24": "2m9zdgjeWUh9JY1MqNdKF1C992v2ZMqZuU8ym9AaAdMQk6dk6mG9EPPfAoyorBuf5XMgLTBr2foe7Qe5WSMKt467",
  "key25": "4b2Z4KunjpXKsyCPMCuNYpXbTrLLHVAhi6sNmZCvVdu2diuK8xeaLHpSj4wDMAWWMCiSNRWXXYEKzmC6BSBGHRU2",
  "key26": "3viVt8vKuvLozrmd4D3FMBc6i45tLswKtfPkKAto2bErTGmcKxNZ7SWHJbeEAkkujmtzJG1dyUmpJkKMonvjuZjX",
  "key27": "36ZULHDCtiMDF4u55UDAaTHbgFm7Y2aiwvvVPJysPLLwYJR62excAuMN2nWREusvJdoG2xvDWwUq3SKc7QevEbmP",
  "key28": "nrHT7EYra6tQSWRRAFLt9v9PixtnNpCWHp4zJxibXxofcPFW85oM4PXcKTZPF7F9NwfZtSznfdPPr3Jaut6eDBz",
  "key29": "3EmeQ17GtSg5YNtL9nGz8TsHZDYiuNQEGdjCcoKCXQoXb9cQos9Tids6dfpPGc4zJtLWHikYfFT5EbpdXgx4rHff",
  "key30": "3okTJzz1mdZGSRb2P9Qe28aTjbmcqS3PzhMGrv6PLx5za3XGtFge7C4RqxbusVoXDNgEcGFj9DEJdQ4fGnbQYpZo"
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
