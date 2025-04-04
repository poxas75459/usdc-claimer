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
    "23DB96gfPfxbrbk8JXTgg7t2tSmu8ePS3ELFB2bUawTW2jRHeoC8SSLRJGuvj9xPz9qw9EdEU1EDvvitZsQwFZKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePDyKEPuiUB11EPvBFyQFBdafGZsV6to4jfCXCfChZLCEFta6uzqmSRcuTp4n2T2WsWyUpEZvopKbXt83FC3h9W",
  "key1": "45cSbLZBMfhzDpnQ8VXrYzdB8x11DWBW4Sd2kbjM11cyrhu1Sd85vAp5QVCHi3tMsHNSuwaGuUu9EUDB4SwDcKXY",
  "key2": "45nT7VwUNDkiFWJF4aCuMnpx1TP5siwWZcqrLXyqc8pddvDSHLNsKpQYwmanTc3GU3Cvqz3WKnLTXpav3VqEbMce",
  "key3": "5uCN1iUsKvU2vZWRCPwQRrpRuQvidEDwX9hAGXxZ3imUemsZ8v853aFbfuhvHFkVeZSr4PHW2DBTbjjJ1VwvMTYM",
  "key4": "5bAhviq5sowyi8T7UkNPeaSUDUZnSDQXC9zzZzYzxZYFE96mFGg62xKCnfFAtjowmNctchXosgVqJHsGD68jABDo",
  "key5": "5GwnjoFECN2Cu9QDT7FqXogM22xLgeUcJMgQwMm7T3h4qJApGdqJZJQb58pGPySBPc8Y9dHDgDgENHH1nEbZCpDU",
  "key6": "2dsP5iizxDWDkuJgAoHe5oeSUZejSJGuA9T57GHdGska73CHjdKHzi5TubbkNYGVKGvVJ9FY3T2ausEqQZhYo3iJ",
  "key7": "2ZPxBW6brkZsmAWap3Bbdph2CggsGBKWp4rgmxBrQyzk3FZLXeBpHZTfsmqFZVTrBsqFm8TmyPiXzH3azDptuDW8",
  "key8": "n5zWBqpwwgmCHeG6egQtuwqSLgXvLtfyAqv5GeFxtcRV7KXGVZKKnDN2UPUY5qkuW2HYEDzKNJCffaoUeaWThYZ",
  "key9": "3UBBzUBvXBF3mqQ5SmdfbmgNNiNj5jhjFUDsw4w3vrbzs7TYCdJV6vaEnYcifYJEvFyxqruVvrccjt6rMSw1j46p",
  "key10": "4ZkLQENjAkc1dfRVreQyFTqbUhZfXRAqbGtRdEbrxSmYPbpTY4RwCTh1ZtCTpNgD3Aj1yCoM5DRa51kGMv5vQz7N",
  "key11": "9UsiXwG58zk5uoFfbKwTPWaYuWSdrgyxY8YgSyMKo9WCGcQmETJcpM5yXVTwuqZ4xhtRpQzFUmjPBmnNVsnwdts",
  "key12": "4bHGig8YULYCWkrQiXYrhV7N2p5xjJPFYfxGdFi4j9EEBecUs7xvaPitoDrgvwN5zfzrNxd3qMtAdyvJ6EpT5TjY",
  "key13": "3ChtgUavqXFMBxwrcESS7wGLyBGqHCwNwth2TDG78bqsRYRdcaMhWpcPhF36Caaj1zAV5Dks6ryH9YneiCDE4T1B",
  "key14": "LfCoqVw3KJzB4awoCte5zg5ZcZqVXvnDyumJdZL6UZskEfGnKMmWXnxeY9mYEpshznsKKmR4kpUojLqtwXRqdRn",
  "key15": "gZ6z376KQPJihNFGsxDVjf5yZqweahXBZUY63TywgjFtcwSScLWjTtqrXNa4XNbgza4VfDcWy3g1zh6e49xaSqn",
  "key16": "5cMf4E3y3aEYFrtqzv7AFdZEhXoWTJKju3BD8KnyE6Bk4cikwKfdnCNDHdsh9VEBKD5mirPzyGTANnbMac14Ppjk",
  "key17": "2rkxr27gWhwUjuPd8NNEgo8NqpNA2hw7DU8XtZWyVdEkWkHZ3nznHvhX9Jmn1j5ZovKgfH5hCwmqDVjiT5ATwyKj",
  "key18": "56qCX9CCNhYHDUHUXxFJ8ehjNuPgg28n4VLsNFS9KdsqYF6daiuWe1M1PmpEwhxGVsoYHQXotPka7REhz6AWfJab",
  "key19": "5uEpMU3vsaCqpPwS4qcemNUKATifdU6bZT45tNjPKG1SYYJ6XHcyPsHYuGQNdZLPgFUqaByA8CaxtSQjWSfT55k4",
  "key20": "W7YJh9cEXjTYaFbdgT2MEFrSEbC2iDe2pe5uaA2RvdaNSZMM9Vkg76DW8kqonbPXNc71QxCEsvWsXcSLk6zpgZ1",
  "key21": "4vH7DigCvToazTKh8w1YUCEtBTj95gW7qKtdYYfvsXmPSk2ATh9QeHrqFQVa7iggakmWVjmV2fjDq4dxRjigtX9z",
  "key22": "4BF4LiM1MjAFXsdZcbpeHG561Z2K1gFMNqqEHrkCNoSEicJCzw7esow1sugHgCrNJALhCtuRh6wLpF3ngScAG5Bo",
  "key23": "3qkBakpdncK6f4Pt47EgTkRfSnHANuy7J5FgPR1cMPsvkZVfou2FYAdurJVmzL2nqDiLUFw67v7HoNtZA37fnXdE",
  "key24": "5GnPZzZ6jBiM6vRWVuMSwmNQweL83n2Paj39Nz3sDD44JFZAz9NitPoujZdFi2VWABf2ZdhY9PpN3pzmukbbcu3G",
  "key25": "4o72X3GyVMp964Q7YD65XR6rWyfFmxotGftXiMsGcQ3rzrKyiYJuCmLVHFBGdkg5kt96Zk4R4dz6ymWRAvxLr6pb",
  "key26": "2fEPmWeXBKp4FMsVvjQ1WNyxob8Y94HYCehaUVR2RvVKaJC6YGvio9FdJKsgvkP2hu89DJCUsQVqWazFWVGJyrUr",
  "key27": "xwDpMveW5i5QgN5nUfnGUPivXxhRk5cydDLJcsJbw8s2QodbNJfg2wmCUDUtjNMwFzQ7Rnoi3smDnasiVCgokfY",
  "key28": "4SDLn2tLDYTsZof8eVJvTb6fnsiyCPmQGsuso7seg77BnQGejSQtqXyghNvcNSTMseKXc43mGkF5fbVYM1u3cRHr",
  "key29": "2ZeB9dzYafAFJcE8fNPXLfzQJ9CBGWPeazJktjkZXfDbfuk2TAULEvUBXWb1QMV3rbmuKfCfjwtPxxwZRTD3gZo1",
  "key30": "3fVxMhrtjxUgYVXevahXBtZPTVB6wSijLD7e5gctFsL2nNoWWaY3ta4pjPifrBuXosepghyCraBqVwJvbAMWJNLt"
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
