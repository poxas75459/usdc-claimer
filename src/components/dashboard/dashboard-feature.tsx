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
    "QovDaNi1CgKZbvbxZUQPAXBB2mrhqboyQZaW1c2USpL8WZrhWhTGpm4d2LArzDhAU9g9wZsax6DeBFSJWjHVpqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a15X4szYXEdTmsXngbBmSb4cd7E5YPnxs3r8FQpSgDbx2mxFogj1aJtTExTPFctC8GzfnhRurxNQ9PNHbhXzVS9",
  "key1": "2ZDXkKTvWqtAezn5BoPvHVEqa81F4AG4AuGKijWrrrpicdP8z1obiRpxep6oGK2cyLGee3eySBonrQ15ygVnJMWN",
  "key2": "2dL9TWaqg2dbdQAM2Kj4ceic4KKtT4kQK63CGNjtHf8X2zzJxH1ureeMCrdukzgexCzobBEDqGi2q8Jpqfd5gfuF",
  "key3": "2bVv6zknBVHvcdUSAiVEfgdj1Lq6arA98Cu3Dh2oqAQSKSKArF2Mwg4MX66MvVBsUav1VGhaBL4MXFcdYTsxRqHQ",
  "key4": "3G79QtV3CHodBaYPNwLHvGtAn1JjBmGzjjm3E2Rww4Xrgiax3JWzyZt7sXtm1yZ9qnp98Wb5d2Yp2pufQJRPDD78",
  "key5": "5iVfBRMNQPsonXTNgMWMSWkZaZCjyLgEWmPQSxL7AdGSwpCFgh4hqkJ6ATG5BBse372dPgVdGNhAhxceQYS6vLnP",
  "key6": "4CpTMZnoZne1ADbK2X6rgum4tt4qpiRXyq4baEciEQ4LyQZ7X7tKBnWMaLJ3psvKtsV44k3kRRoDX8AxRXAL51b6",
  "key7": "43pAbnK4X4V9siWQwmWMCQ9jtUSiBjMEsRvSarT4Lk7KnETRBLVc5wYX3nGmFfyY9DXcCY8FagtWi1rwJPjDi9XH",
  "key8": "2H1Az2hfandLvva53G37hTs5k1PzsCmMpUCKwQ2Y23mr7cPpdg8JNjoNyTqAfYReX9mgS3ycMRtWQZWi48Hpo3Lu",
  "key9": "WZ5G1YMBBehp9sAqUppbZAed5tzv9FD2EEkWw9ayfbTJ3jiVPussNpS2P4xWbhYujhR2tUZV8VxNPFe7QTdH7WR",
  "key10": "3f9VtuxTE9LH7Pc25KPGS2pmwera8W59uDWcyj915ZgfFbvqFi3e7yCiZfbbuaD3MQzseTieBRWwEMwuBMD2gscf",
  "key11": "5mWpVZZ8N3TGfHzigVc87cH21xUg9RtzwFe3HZbYrcy6mrdgxppcNc5jYB2yQnnmnUiJmPMprj4uiyjmaNrtQZ8L",
  "key12": "3CSLPwXw9s7kBEUTWR22un5k5JirsdzHxDmsfq5uWY3MFCYBrqJLQ4QMyJNMNEgpiPFo7gMY4xLDVsfCEPxrxSis",
  "key13": "4k27J6j2C1DB41gzmBztFsxFqb6s8z3s4dLFEKyu8GxKhQbmTdm69eYj66p75iKeyNzeRvtp7JebKZB2Hyf2QDk5",
  "key14": "eSiHvxqt7cVYD1NEe4AUQjG4wQLyPVPwtFYnaMdgefN2XkPWeKp167tfX5soYBk5m35WeMNKFFfb9KgZjLxFsSU",
  "key15": "2CwuFBJpD5mwy5VRRJZ4DFx8WnDmpzN67ykgNBtbx5JVXfh1wR5iabXwb32STx4m5VKxfttsEfodfVnZnWrUc1Rz",
  "key16": "3UfXh3VPAynR4nCqUJCEwa55VatyjtQUBnegHBSQNUV9uKR3ajxidHT6Mt5nDu5HdgwxV2yvbVnxsAjwYwMVFkoL",
  "key17": "2uZW9iiCDT6ahTUwdbkA8KcFiX2RzwfKqePgcFwz2p3sNV9Maf1vf81YdPhAwJWLGQPd7Y3M4t4T48AeaQQM4WpW",
  "key18": "5Au4WRGcdFtnr8r5PDdJ93LyhVXGLCEN2gpfYNJJ8xekeZ4Hkf5PvsC89EhXNQpj62Eq68aQUyQ2KcYTojgXCg5n",
  "key19": "25v5dqYcV7YFea9FDyJBXLapkHz7XMqNLaym1gbqzYBF5b1HB77wBNcrvZipj8Vogacq3XxaB4QdpeP1LZgFXsCz",
  "key20": "3Y5fk42C9Xz4WA2CfQAsQWGYZqxoRMvN5Ur5YJx6t1jTbWAEnZWKX7T3g4mDM2aTG9tY9ErbcEo32u6u8hpVcnSy",
  "key21": "4LACwC8ArACkM3D2uXHbpTFyyaVxVT22uEQB2zdH8bQMHikWZcmjZ8MYwQYNT7KaMDXZ3uevZ7nJmMVqmkicN51d",
  "key22": "5UTS2iou32GKWXv9Xp63wGNqJGjK8p5CLFYEhHYrUobri1Pbat7CFK54C8PRNby2GDaHCnnNoz2HXi4AFQgr2AF2",
  "key23": "5T8vpsykGkeEjgwF8YvfM7u29XStAgYDULi6Mju828TiNczfLp3Gj1DoebEwAtKSEw1UHyVpFUL5vhBnMkfUGrW7",
  "key24": "3wfSBwEXePAdisqZifVLVRjQXSaC6Ypv28sZ32jdttg2BtxBajf3EviNYpNkX9FmJTUTay3ZRidWGJ3GKNEgdWsT",
  "key25": "67iYyEnTd6hyhvBBHoUcYeocA9CBsT3FTjc3sjPcEz2xoy1h6YAq763yo4aWfVoNm1mpPKbdLFyGtEcazK3ovtoz",
  "key26": "5wJcfWbcqDzUd4mQcWdfd7ntHGTkK752GXL2ordXK6d56h8nhS97N9VfgoVL7w6XQzpphPfg27Vn3qzbxSmxSsRF",
  "key27": "fBkzkfKmtCXgECZrQwNKV8ZgvS56vXojkMkrLQXUrgrMg6gLV6LnBSxcKGHUUHWk7ky1GSnSSoJAwdv3vVN4wYa",
  "key28": "2zvqw4RJhX47UwLgXhMaXeSXMKDarg1uDERFo7o9ia4oKWZNtnih1oiNUNLvdYBAn6r4Y7sxyH9cxRhtLQST1hz",
  "key29": "Lu4xCkm54DYdUgUSatqzZ5JYJ2KbW7iypaSXmPo4b6Yr9e4JwedZQenu1SyyudKPsx4gSMfApnCmKCxzMHF3P2X",
  "key30": "3eSuLR1iATdDYreuF2eJx7TaG4QndHidWx5S5Dk5EVENLT6W9ukdkmgxbviDwtZSdkH6dRu7p16bsXdSbs7GkRre",
  "key31": "2V3r9dom3gd45bduEQtKPwRm1HKMZNY4PMJHAkorPZcJ9swXDmt1zUVh5xwMbskjtT4Ji46dpGF1oUTAk147Yjzf",
  "key32": "3zVv79Gg5wVbFg9nqYBSxhknNUWMbKdijEHD9j4TkU2334GinsDSARfndKsRi7bmDdMxiZduof34UUKuwDbjLbJg",
  "key33": "rHjtsR2LJH7GDNe8JsHNa2LsyX4QexkZS15CGmATUJ9mnxpFbegL13ASuCz1orQLRC5cnaAspNQAWRBSzgVrfow",
  "key34": "5AjKzNRJi7M7U3trKFTKRue8ub28KnCiNt5kmtgKF8cmpdZEX3jdFpBo5FAN3sKoyxgi9NbqTsxN5yFEZBYYfUJm"
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
