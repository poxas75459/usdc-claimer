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
    "4dUeovRRFRDySDdwEUUkVwr135FWzwGcFPvQb93xcj9etv7gqydnMgxS4wsBwGuxTGeqdB8YgT3SQ5P7G8J7yAab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uQAE8EBFcq3qGTJAV5hFjWpmmk8RusH1HkaxmCtGd3C2RHxqM2BHQp31qVfDWQVkBnqYbjthkwftyKyTJ9SoTH1",
  "key1": "5sPHCi1n22QYkfVmFMTGEhhw8GNAPGXmjAwmLE6rM7vK6AmpxGpUQQsdZGV1CRjeE21TPSBWC2cpbPcyVCiqqofQ",
  "key2": "53Fn9nKCQJhkTgQPAKzwawJMtDgxssNCLNeKycTinWC12CACQU6CTtoSC74zS5gDTFUVnAnnsq4hqMCFVYWnV7B1",
  "key3": "3ieMQGEnKy2cQrPjSFviZwjwXTD3uRLzHAMb6M2v73e5syDciFqL3Y6RRWSj1QftCipy4ppYPGue7huUfcHNH6wE",
  "key4": "66MFAo2HEPR84V8oCZba3M4komtCF1kgBTHHYGFp5gJUiNySt4NwcC6E5wYpZHC8Zo74AFUCFkVr8BbrjLc5XE67",
  "key5": "61RStqc2EKjrY5x8oGZFgSKxLAsMZBadWJX2nr2qezRh1JmzUxhrHgiwPgajKmUy9jz8h7ASC24dWzH3yAiKLuDb",
  "key6": "3qmrJpCdai23GPXuHKqryb23EYDS2EDf8E3g5DdghVnaVejj18KfBTwFMPQWAUFuydeYJeXT95TmGBSH5wSC2Ttt",
  "key7": "67QirKED4q4QgxoXvgjqrN6qVomJPSUmzkvUkmHpjd2ZKKukiDnSZT4Z4yxqM3akyWTKiRzBbg56UzWJUcqaqMVN",
  "key8": "24y3JesJiTAJ1iZi5GzjYFdMtSqnLnMV6gMRnKvxb4nZF6TNZWWX3m15PAFRiqrT6rbfXmLUC4VWiRF7FqVQFH8D",
  "key9": "QRfpnS7y4YtACSBuqqGaiFwhtaLBJXj5f6RVycQPjJNueeXrj2QiUebyr28c4bu1GabaKkMi1S5KQ74fCMrhJ9Z",
  "key10": "4SjZH1VLed4kgVcnpANzQKBPdnbqz5EPGtkhaLXfr8JxcbhrayhaxYZ4tS6GPiv729NV8gXmAzE4mnayBNnDAt4y",
  "key11": "JPQsS24y9P3VQwzR66pZAUSDN9dptA4BQre5bWSvCZgEdTqTgyoi2MuhHxZfryugXB5vaH43FfNKWYVr98ruu91",
  "key12": "3ustkiRxu6g51yC5MgwNXqWFrWu72jMvi4xtx5zb9WWNG7eXA2Lo2cfMvio7d5b2QmP5gfi1ytbvC5FabYCxMRrL",
  "key13": "4VZZD5yKUQjLe2eqiQrFumBmEQ9BTdVTwMsAuLFiMngJX2FFoduUzUpFssiwWE1fPJ8LzQo8DcQFeSX4y81ratD8",
  "key14": "dW8ZGfyPd9SN1yVGRYnDrzGZLPHAXL2TVEc8nUPd323xex82b2zBDBR9z6dmiLQqf6H9wwXh6fAw1Bdo7pzS5w1",
  "key15": "29y28tMkSYzXtxNtQiyCrzx7bzogdAw51EPkX56Xkrb11Mjr4Dxow3eQgyq7Ephk9ouXi466MvZupEBtLjKJgjSC",
  "key16": "5fnFYrUEXrb4fvHXjFCRRB8un4rmKe62sd9RNmXxfRnZpKAf5s9EM9puf2Rfe2oaeJ7cxKh6R9ZS28vFK8JbTS9c",
  "key17": "3ekMfWs3u6XPUhq3nSfMp64ptQ3jiaWf7YZyfmotPER6b8gJdQSWi8sdqRQhn5pC6b4fUnaA34hQmSTojsZ91DN9",
  "key18": "3fJK96ujmuNEzfQpbSTQdm6cgYhQfhKQVEXVisyUwGb2AYGNowBqY6LZx54Hq8epW1dwG3xSVZU1bCmcRn9ymMaT",
  "key19": "2Nsf4BtdZ2h2kP2CUUkz3YQApAWqBXs8aBpRShnkU4QSyQmi73NZNmb3RGjfz3DBLLRUB6WSoYiWbWPdgVtvLWfr",
  "key20": "5vR1kPN368wXtYN1jC2eyXcZWnqcXzf9XsrEAVD8SW1zzr8WJs73yNUYEhRCU2Exg4aJap4SVggypCNfHnyhYkdb",
  "key21": "4PfGMXvu3iSh21yMkaoKsqGj3ix3SBD4wqE68rVxNu5faGfnAsVXkgdrXqqoSB2yJVPe5ZWNW8SADAN1dU4KdZF9",
  "key22": "EBP6s4qHAPwK8b1DeW4Wi2Ynr6KVwzb6UHk5anLD6theSZSb4WS68PGormBpnVmkuYA18jTfC4UnLu2kjyW9nFx",
  "key23": "3AshFcbcSG13jx1rA5eqS2pnpfHHJp6rM1vCmY3Vnim1BDEbtRR9zZk9w3iov5MgaQ8mPVX4ARerrUeE3SGgfuyp",
  "key24": "2uuJPdVJ3CV54gmx2XjNoTW8uruRcFHTm3ngv7depLTMGjAFWxY1dsFJj2wfqUyV7iPeNbdLE2fG19cGbv4nt8CG",
  "key25": "4mp2MfDnRUAY6Zy4xFnDG6yJ73nVQt5MqA8EK481Zgu6UPLzceRm7cDNCbPGTYaUEJEbKgMhusNKhSogJMzbPnKq",
  "key26": "2YxAhHxBh4gL62caFNNxAeFgTL2K2gYdghZHKQnE7Xtf84JVgWm6TX7DVf65VdLEBk5U2qK2awczVqyPWnuGABRf",
  "key27": "m5BezYoLweHGiq7uLZ4jPB82VTRLzQufA6PFTTcTXD79Nwvgm2fJbK1q4KUB5PgYbqCJZauMy1kCxMFSR1ZPrpq",
  "key28": "jko2R4oxybpNoVBr51dTYwiN1TzY7fozEqnfN9oPhpU89UQADH9qU1BEYTrP5u7t67kgdGAYGEzwLrDZDHA7mL4",
  "key29": "3ZaBGNC6QhtDfuir1BGxZfNaGF8h2FDCQpAjVqpBdSzHVQdS1ytBuMWdik9LPajkux5yNE4p7ktrZm4vHLBGDMhr",
  "key30": "36rLGJ3tkKP26rbYFcavptJ6Ttm3EvzUXkKTXGkcQk5AnLqDURt1C92d6B5SDmejB689hgBeeK1RJwDp6FsdxwoC",
  "key31": "4dYxDTGHFd6dVBocNwmxKq9TMNyEU7oW1JYdmKD5vy9Qr2FCk4JkAg8BibCADpv9CovP1CZ68ikMKxboGqp6XGvq"
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
