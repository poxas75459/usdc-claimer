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
    "5yqCsp25edtHAPahVvnfeGrv5R4RuhfxcRxRHL4c9dsP6PmPaT4K3SeMP5oRkBkKTAusC8nnSGr1ouHJUDRkeDEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yDvunzLo9b7zPWaS1b87pEgCCsVPJhRkuJ4GummnJUoFNjvKfvzoojA9N3pUEMr7qcSb1qisFAdGW8xvjujwKAy",
  "key1": "5FN7ETqjJEMZQpoLU5aG5jo7EQncmufdsjkpb8q4T17XQUGA4Wyzbj1eXEtDoz1jUeP2rv14CsiE3X5dPjpuHden",
  "key2": "5sufpp3KLRXsKsMVoURwz71pUQYoHC68myEdFS2ShXkaqksDoNWdHjyPpX15R1xJQVqK9xmP4gcJZziNZRQ4tCDQ",
  "key3": "z7WKALxFKRetaaxo6ezopDwWk3Bvy4DoajGLoJx7tMmsADJDruhd3mpkCPEiwLQU6R81uS7cpgEDWpz5PPixSuN",
  "key4": "3zaJYBufVfb3awuaGtsfCWq23QENxKFeFPF6L5ZZn1PBrKCUbCivH1NHyFRT4gy5onKj6BUZfJQ2kiRAg4JqjTwh",
  "key5": "5zqQmwXB6inJAzLmiDKRaK5wkUcjQTvQKNXkELEuip3WoRTsrNhjNvFY3Yy5WmqmrbAKbE2ioZaqpJ7vzGeD32ex",
  "key6": "4jV7wdkZezsj8XoaZeUu8daqFrTpqz8frKGR1Rz88TzsjjZUi5Qxmshxgc99hZYvgweSP272XDgECDg9m9xyP1fd",
  "key7": "52SH8odBSmU9QmQB22T918ZoDXdNfyNn2KZEhna8PNEZmeKU1y7Sjf7BV91wZ9heZKM2JttabsX6WPRZ98F1xrsm",
  "key8": "3MV8DsxmRLQYf1cZffYcfo7gbyo46F6ivZ1GtAQHLqtZbZa8K5h5ixphohaRbtc1FDh444LYh8kqGXsWeL8iRCnh",
  "key9": "5hiPxWhQz1gnzSU2eLtVCy3K8r1iQZNQ5gVLbcTrHJyK6ywN2B2PcnMRae4KsQYzBoYCvLcP3KKw1yAwxdRTo4oH",
  "key10": "8FNNSeCtAKqjEyUeHTHjB21dSKpd3SCwdz4HcpDBFBgNo9mpA7L5R7wPd37s4JH2AFFSxQnhkfT4gqwPGkLjtfE",
  "key11": "XY2GTAZ3mLCgY1dScZDik4scWkYMQbDWfDsgtuFPgrhiae4DLj5LsDz7df4xoiBecQgyoBUgmuoZf944LR9qMxv",
  "key12": "5giJv5fVjjf54N56rFFjkHhvoqsRKzJoTh9pXArTFaLxzNvkejtke4on4DR5w2DfVCdr3CJzipaNZ7eJjCuc8Vqj",
  "key13": "Bs9LVSit1XzFZUcbhdvJQRxA96J5WsJ3sSCpikzM6W8Ss2So4VPRBGqAkSjygH6aaYrXWNNsY4efu1ugR1gTFKh",
  "key14": "2EpvvcVXMgfN3sCBqdVmZo6tK2dzNMRr6toYnt5UFcyHdEvqKpvkAwW1XZaWAg3Vm2UFsmB3HuB9BfTNUaRWKRnu",
  "key15": "673ayjiVknyDrGGXBo6Tw7Qq5WEEPQKaXsYW9b4oqLCrwgmRELaowXi6cTUUN8rP5auwYPrzhjquKSUS585p3Ji5",
  "key16": "2vUrH52qzaiQjXPEMBggd2rYkvrTkdehe3HvBtXXtt28KQSSfLtDgJSzbosXRbWe6hou9MfQFJKaj5HKKDyU1Gem",
  "key17": "4CxCLoVk4XdigrAyNpgwcZkqtiNoRMYGmrqD6gUwieBJQaVSeimw63QPm6B6NN5o5cFC7JKpE3uzZDgEWR4VQigf",
  "key18": "5K5ntqF6p6K2FsK2Cez9Qco3Woi996Tbzcin13PRT5zHMnaLjT5wWHdg8cFE2cUZeRcXDw7B9BPPmjxsdSFiB8K8",
  "key19": "42eD5X4nSDju9hq91LQwFWKk2o6L9wEdRKpJVcmENPXVxsevznK9BvWsX5TxXeTFYdKPVwtSZi3NkTUc7SnZVgMZ",
  "key20": "2i5twCba5YTDo4X8Kh43WPmJ74TsRLkXBhSmx3GYiNzGUtwi51dPSpfDgHrE7YUE8MxN6HLn8RmLuwb6mzsbSK9L",
  "key21": "3p7YhNvDRwYatDMNwn166VtwJ4FP5cURfQmMr7WhjRshXpZxCrinXypGSfogVzGX4ZmJBYfBjYBc4iAw9bttL94T",
  "key22": "2aQLhByEyuHG4BC9dFjYSHPyN7mFRdtS5xBWUAafFPkcZDcpef3oaJXVLyUiN9p5i9U1DemLWTYS9w2GvcuiMGG8",
  "key23": "24rsDyMDdxgENfdCZLb5NEztdSKt1YLmtNaEwgrwMD94AreoEbAKkG4eudL45m6ah5EMZxX1QF1JTyVyKvH9qrSC",
  "key24": "5n7ADqUBoVhx77Havn9YGFXux1EoYF25QWRJmuYms1s6d1nChWBaPp2NiX4chUAkuXSKoFstpz5DPGGYDdZVhBHy",
  "key25": "4CL6ScrFHQsZw2b7xfGbC5ngtuhfrwgycwEjPo6mo5MKwMTBZ5MMxzEAEz7NBhPc3YFDQmwH7P5pycAv92yE9Wta",
  "key26": "K8TLh2EPSDo1H5T1Ro3ut7YJSjdu7McwQcz4EoUMB2ETsq1v2TUfDxjyorV4fjYmyGz9gsPdcPeMGwqBWnzFrHp",
  "key27": "4coTdEQUkkLVR4Y4K5ap3NhP3buNpnwgteL1vJ48FfgAE4j8ykWVzXMRW3JNZJCHD4pzvqFejt729i2QpM2Mmyck",
  "key28": "3oQhxB97avu9Qvx41Za4mu2k5sRjeuJWaBV8rcM1Bu4FVe3DxgsoUgt2XqgjfjGkZuGQgeM4im8QYxs6122XEHHR",
  "key29": "2Q5QRUJCNGWnLV2RqPX24fF6Dc3DQb83VpjxAE3rg74HMjpNqhtcKrveTLppHXYxvd6DWcWjNNjRTxuzVq1PFm6F",
  "key30": "2413EA3tW6V2FPAthHdo4JL5CLTMAnMVVXGW4iw7Tyc3nEXowEkw1zTPfGzYpwtw1ijkX1DZtpNGTnxDNDdWSCPN"
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
