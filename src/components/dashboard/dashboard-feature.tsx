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
    "5dZMUmrnEbATaLrewHN61WvwcSZq23sRpzZEpP7MaByLDvta3n18mMYC9zq7AXmGpdFrky3aq89TbRpLGbfpeTvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YvgPbiCKFfUzGoQUqmeKeE4JeqoPQPLySkAmzwwtxkV9kKanBBjcSYMYptg4YWh1izHmP6L4Frw5TwSNtq1R3wm",
  "key1": "5NPZ1ZkNdks1SM7WUjWxg2giimm1icje6qqoLtapv2uPrnChhZosKNjXwsVUSGNPFqRavffu5WFTuDzuq2YTRruc",
  "key2": "2mwHfbNdtg4xpQnD4H8g6KDAAcxXymHaGdPQaEfuh1W8zpBeuxri9xGKu1JTJjbamoByBJHLmKg61WXr42g1ypX3",
  "key3": "4FRSrt1LAUHfGNpiLweGx11F3LXf5pbK1nwd6833a4e8KEd1KwDkmp8o9R7usLmqKLVHuDH7rFtmRxRhAmxEZh7g",
  "key4": "Kb1zgRNr5TJP6qf7UXa1g9uSnRDe6WXEokWQfhsmbPrTutUN6yWEUMmAqk9iRJHrJV8Fd6FoDsP89fp7ki1MUH7",
  "key5": "3Uzp2qgUt9yJKtdm6h7wRhZzJekcf2t8BBiMK3T5brc5WjTAXcR7Qkc2VDN3sNXkXw7Vg5n6UzKjaA5d6sMP31ku",
  "key6": "jheAauFq3YUcdxxNnF9eNYa5cLcLJqVAZp83bS8KkCcfy6AgaJ6MB4a3WFHpSTcSUn22T5dDXbxSm1jry3sBXVN",
  "key7": "3htg9jaHHWvpF8ajEtMSo17S62m6Ap3PobAhQHB9DPfnSNFo9ZyWGdfUGg2V1h23oxNKkPZVJv6cpHEj7xZeq79G",
  "key8": "s3Vn2ttcejpyZne94YNEseTwYPeKdcqZgDqSRwUBPkLPWdkmHB3VDg5RUzbrgbkQm6wKy98tGDsk56vxivrG2CQ",
  "key9": "4mcH1odB12xCu5kcRUSDvD2WmhpyCZQ24QdoTwUuvqsy3XocBgbwEMnBhowQgVpa7RzXkeRY7QmXiFpDvG4H5Xfw",
  "key10": "4W9WWGKwxEYT571EyAH6acpQnddvYM9aHfRBTYKxz93yQL9xMa9g7aU83a11aUqQqQtL4c65SU9EyjQKvNmUw7ud",
  "key11": "BdMuuZuYANVyCSPWQf5LLhAooK6fWKi1i96TgdHZVoLV8rvykYcwNG1L1Gh6kmhjfkwz8hMMgTsKhvzGoFiibmb",
  "key12": "qvkcH1EMJDtHSNgwdc12qumKNbdMU6XRSCyTTr7tbsGkdB25xdbQvMVWGWZYMGyqMo4DLZ54Gr3vbjP1cMeyWKJ",
  "key13": "5ntDJYZpUX3mgPLNjcrohnsfrH7RnTCMDp6g8Xk2wr3qbqL7rvpB4MWhZAyjXAbxC4UAVYQH4h6p5n58NNHnGo5d",
  "key14": "41D7aazyx3QcGgq1K5mvGsJTZFTVRqLUTgtUdhVEcxQeQUDaq3iZhYTCiaLLnozYH9tFm2StRchrLKbC7aXLuHQx",
  "key15": "4ZZBVAp5JvCScEaGoCtpeW2u3ra3noPwz18aiPEfPaQgrNKXGU7UPeH4yGfJSihssXMkA7Gz3czQwpLKH8Pnjdwq",
  "key16": "3mbfXhGMuBJRgh41bmfQdcMKAkJT16nhPGZ6UgZXdmCU7u27mGNMsHFVVFXs1w2ifnEWG886udJ72USdkfL8fNPa",
  "key17": "236UPoZAk2ehqpoFVG9YZbXgy81xSvJDtX5yXtJMqDRp87xKLtHPymYaZGt596Pfs4pBSRa3PrftjZgxs4argEov",
  "key18": "3tP4Wt66K22xzThgQrinvhAzoy7Qj9r8DSusDaWwuXWZ7RGq4o9ABtepSZLCpYptFxP47NQrtAp2scejqP7PeG59",
  "key19": "3gdxKgjp9GcZQH1msdFf6fTzmU1kZZWoFTmrYh2j94XuGm3nifkAPhozvdyGwg9RQr34XQ4BaRMThnhsRevuRWfA",
  "key20": "WvCgrLagLqiPuuPpnmjRExxtfUTrT1cSvjW7cSEF9kfDjny8DwZNHF2AiKnVYBdbk8Bp1dTQsAVA6Grj4mDmSzk",
  "key21": "4EFyGZTDPJr7RK4wnTrDUviA2wut69ZwqDY5A38gGaMbXT9RkAgRbHA8PJy5kphqWKJCwDS9dQC27Y1KdXqQqWv2",
  "key22": "361rWuc2pihbUMHi5MR3TABCm2tsw3FTxNHED3jDsw1dgmn6V4jyLtVU4p27YgrAF9ms1xYMhx2BceA9r35DUMdY",
  "key23": "2PnYZfEiNgk2mDW2Td9s52AfU9sZnVCbgt6ZrN9eFaMCBrybCBKznBTKkCiWa25yLaiNH5nNJ1yxe6VBNLhYaJDg",
  "key24": "4uPcDZiEQ8jioKyjdF1J2UGnPBPjqt5qViWQ3YRCKX98VHzY4xqwuCk5zSuFodkemdtYoUc9tZCYsxNMbGXk6Nzz",
  "key25": "4orEJpLqgzvNrrKnv7gVqrRAPUjm8FEdcNbRATvGZSSfnLFbJSBoLUf5cN4JUWXrRT853AAhmPHWerkghQcMjUQK",
  "key26": "3UTRXd5Rk3PJQy5wWCma8QLLn2WMip1Rg8dTNNDaXTwcg5C2avLvEqiAAXjTWZnvvP8KC2MkiVjyXHAwLhbnChzC",
  "key27": "4ZsvuApDXZkjQ35W2HzKoYmdVph7uKCP7U91P1aLHFSUoiZ25WBFzYkFKeykVhcP3LQqipj7x1JQmgbXscj7q5gE",
  "key28": "4d8eu3jjCvwGNwVQCgJGNfGYxrxjtZQCN28Y912SVRDt8FKokr9BT6ymqR5z93naaf3gPgQtvCBbbDRjKA8jiTjR",
  "key29": "2rh1MzHbP2zc3RRhqBUDDYF8xtfWPahKQor9n5ifWTErmJ7yJqj4ypjJFQiwqDHrMJm4HgmKcvwyG5tYTnjEWfct",
  "key30": "65vqXi9ZPi5V9FjFeKzxweXUNYEfK24VLRSNyWnY2RYbwrvyecoy8j9oH2FLA3eev9nLR2bc9FuZMtp36J8WJirh",
  "key31": "669sjsE1bL2c6GaSyoTMoubVFtJ5jqMM5G4jgE5codKrnvWLvtZeuKpVKCZvW1CNWW1CJTriD7rFGRUrnSDUytLK",
  "key32": "3LSqHNiCeKS6A7VkT6QwgKo6HJzJ1JYBQ8jYLk4hm2utHMWh64SCa5Dp4ojC2gKjSfi9xrYRMsCrkxdtWSeDe8Ju",
  "key33": "2urzjYeMV4s6mvukPnTJWcTFeWSdKvsVMYWguxckSHRyCBi1AtHx8RCYrrNadiSLPV8tGnY2Qy5V6wHXVwm7Uy3",
  "key34": "3CQpBP82ziDMRgrrAnRRdEwGCkHE8sLoWGsCXyX1M9bF62LbxQrK5e4Qeh9nT5hbg2RLkn2H8BL66BLdGUQPrAx1",
  "key35": "59vv43mivvLdoMbpLqGERtQVcm6CbU9ZPt9TDSS7dGDnSCM2DHswzF4MuB8dAbtgdi6QzRjyrfRMQekjSDWEGB6Y",
  "key36": "5MzLYTBhEjJdiniyokPtQ71j6u1FSwCLUKKpdeavyGFUgWxkqnVsz6GwNGdfD4mbsqxBoxuMjxTrvLjF9j9zikgZ",
  "key37": "2AKpQd2q7fprPdh61mERuRcsVkJDARz28G9vCdjPQhTeCuabjMegdJjK4o4jJhnxNULh9TjRnkVYUP1N3Fi2QQFF",
  "key38": "3XjF81z7Eh5UJhh7HvSKdp8WZoKZc1hDYueqvGXZ4dfBr2K8Qfi1AZaFAaUozRYdx4NAPg5dnqE3qmexf5Dm1x9v",
  "key39": "4JGgbb7hdHR7FNQFM1VRADY7PiwtDxspQVKm46HiH6ZEw4u24KirLJHPqaE7vdQfPJ4ibz3apLubXG7tTmgYFSyL",
  "key40": "3kkSuKvBxYRoTBhJwQzNsaJoBuYxx35cTsYo4ozNJicyxPhJwCqW4s6GeVTi35iHMdbKFJRLSvkukqH7nfxufgDg"
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
