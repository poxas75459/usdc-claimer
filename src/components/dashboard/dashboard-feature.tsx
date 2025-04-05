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
    "5SDJt6FjGQPfXfZaFN5qqyiuUYQAZo5QjTEXXNNKXzBoidHZiwZw2rqCx8LC1hPE9tqviQBGgSFcpNfAJvajQCqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54N7dPQ7d3EspT5JR1UuuJVjiU9JfF3JWLY14ExjWRWbEgm2nZWpvKVJR13J37BS3uUvpRRF3Vd3bcYo3ixm6Mvr",
  "key1": "YZShabYwXtta3JroScVxhgATpay2X8ptAkZmYRak8vEw1tf9cMdV3Hdmx1WLtEKjqWuNfPnP2gVQM1vmJroKucF",
  "key2": "5SYqHe7T61gP6BTAhsqBEf2u2N8MeSSpB5uGVWRKzkwPajgtRxD49FYyi3DKXqidKLhJWd1hBgA8o8MCp11AMRzL",
  "key3": "2xhT4oEwPgh24rTe1TiGPQBV3FyTsrwQ4iJjCJDXVA6C7MADFVyzwdCVDCizxoYSrw6a34FoLUABD3s8UMyTuMG2",
  "key4": "4gdUfZj8xigv3wHCiduvEw3ipCrGhEwWvKpv7YPBX9RnyjWgkWmFXzXC25ic3DLyCcq4BxazV2nCtVWCEnGvhzpf",
  "key5": "5mKC1USuYPCid5KrKtVQsaUb59asxDxk7BCKPj65yDaBFx6eoZG331oD7toB47ntXANdt4RD9MYzi8AHq5X6cD1R",
  "key6": "5Wiki37uxncuHfPnnAeoYc61GBtBtHbu86ZQ7eFKMdQJzPRPgSEUyCzM8DxnbPuzugW8mWWjnGmiM1ygs4kPMJ9S",
  "key7": "Lg6thQxt1fmJMvB1k6A9oMQRACVWiXUSGKXCMXuyGDcEXTpgQQJ86aU78B2t4RxqjBkbDQukZGnwo6Se3TdmXLL",
  "key8": "qnjDTb1oYdQq7G6Z5294uAep7Yjxd5SDp9CPfGxMxuKwoLG8yDQ5r5xNmya6W7YwH8wzn2adiyVhUiUxZb5QYyu",
  "key9": "3nxhy2msXsV5smaDo9vDbLTUK9htCGAqga71MVrVwB7RekKQuxzGZh1VhsPi9x7nZboWsjm3yuJamTFUAB68Qj8L",
  "key10": "2TTToJjhPKogXGKh88KmhS8JSqK1YFuCwBiTyY3K9VVGcm4FZbdNfjPd8A7HPAYQJz8QhMdH3AN238d23dzZRFLA",
  "key11": "2qaVnmDHvr6WBMb92LjPZ4mLra7Nuz2EL5JFDWcXXQoHdfadL6jaTcwRadUSDxHzaxTtD1rXh1YwwDdVbn6ohSWv",
  "key12": "3WGHpML3bHgJorV6mBNBnkWxZaoRFn8TVedueskCt8899eiwZVnku7q4M3uj8g93LsKemJ2FM8EyJd5PntDDEjsh",
  "key13": "2xiH3uKap5BUrdBy84qRB9C5GvwFvhPd3kjZXRHy5diumS9R6ribS34fo2RRqpeGhJb39FvusoiPNW1zAearWN9P",
  "key14": "3jR7n21JtvJAcncwj5gQGQ1hN6EA14cbS5iPetxpCh8g5yW51aZVL927SEB2fBd25FhAYobqVS3CUpEMWD9yiM7i",
  "key15": "53C7FXM88j9SJ9TNnB8vDMNPWV3ajfeqYTh9yhJSDTmwqVyrzjtL7ZzL5BvUF7uvzq7UnsWyXUUdp8mj82Wq7UJZ",
  "key16": "HwgiAyLjPVqBwqUCvwCJikVY9HcZ38wjrgidYew4g42zqknPnLB6vvmjWer5L9beLor1AKKdEVeSTJcSrU4mHTd",
  "key17": "31PbAecoos1Um5rEm4FtztBFrcjmdMhy66k3cgrRmpEv98U2GYEg5WqsjoyKFad44uRLbSoFj343PnMca7gumikg",
  "key18": "5K4HNzkC9jLVzSPR8otyTpHMHLuRcwZznjFTRHwaaeBBQtc9kHGg64a641UkrVFBP1fUZFWyAaJkBjsc2NSZnGsP",
  "key19": "3oqmjH4TGaFqZ7sPH27WVMuNTopUW6h9sHVGwmFMcy49AP26FFqRTsFcN7VGioNz8pPN6ZfCmCtTtCaCBZB98EEy",
  "key20": "4PCqvQ2ECRFMqUiV3BCGHs1UhbCtWbBhDw4hcbHt8JA6nQu8aKumKEubD1u6hRSPhe1Ps4cpYdigKUKdqwZPZ5A9",
  "key21": "5YGtA934qknQUbAVnQvdk1PYMpdWPLxNyXEge6SWGjxRoFynTEk23b7JA1zkMavkDZJ4Sx7KCg3TJVLMPQ6tDJed",
  "key22": "4kMShPx8pqkbG7puGjrAJuCsoJX1h6qWXaJbTxZSURMfntgBqy6mvSztqhPbJdNnGNoe8judxbzvoPN5rBJRCPyG",
  "key23": "5KeNixssptfktazGuNEWDShyFbB3mDv3yBxn3huKWW8rjn77rY7hzdcdFoHgrSGBPZHDfo75u3AHok6hSw1V2XzE",
  "key24": "4dbDfici3zAHASzKC7JtH2UfjKacVq3nHH13W5QeKn6d399czZzDgjCY89GKPhS1Pf2JEWsJkZzajC3yDr484Nsw",
  "key25": "ZxZds786vpAPaw6KyPk98MUgL2siUmE7UZvFnWS3ig2QdRZKjUQk45wXRKxCeFHtTgR5smGQt5i8WexDCdxyViH"
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
