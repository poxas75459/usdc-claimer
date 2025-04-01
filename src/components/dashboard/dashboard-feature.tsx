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
    "2YLjZtUTmdkydvcK26rcS2i6YPKNax54KpMV9FGVmUeN2eauTDof3Qo14mUvcmewKgZeuBCRrJRh2bJT7cEzkpRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7DmifX4JqwsEuHCDoue1td2wqqRYwVb7CFXzXN9u7gRimR3c67aQAQH9VvXvRGABJ5wKyLL8sM9LbyHw36sCLH",
  "key1": "2Tzg9i6XNHZQ1CZX4PgEn7DuiwYsdGCPBeQEpenXU9ybJ4rMdxUz31JLisdXYmKLuSkukipj8oPrJvWQbz6M3KK6",
  "key2": "2uGvCjKMH5o149oYv6hYT18HyX4gsMbK7RSdMeW96AsLpvscqLZYNup2yNNLuyPqDhhY5oYPdBiyn7dXn9LufkYu",
  "key3": "RstpY7ok5CDDdoDNYjfJPmFJbCkgxsTLMiWmzii2Q58Qdh9vugiTJYrBbaPANKZYRhGCXskJ39FzGhtQKB52DnY",
  "key4": "38tXu7sJ49hHAeUVEMUKCYbTotcYtZtx7RWf3nwyKdgFwraFwvwmjssURdQ8akuLxuJKK54wtERcEhhyzFudTYwL",
  "key5": "4yBTo1m8M6bA5YfyCWipEftCde7zvYdJqEzVkp8gqNAwY7QMH4aDWmFkYcKzxuKab2Dsn3Ro6zdhN2AU8ppXJ5hR",
  "key6": "2NQCMG3XGKHTwY2hHUc6gSBrUYWaywdhM6jzE7qa4vQEboBmthyouRGfdUWbGSgkgZQ6dpu6M21JYmy6PweVtaSm",
  "key7": "2yXwWJ2DMbT2xdXMCwiEihznhUcpwjNPNdcwbP1SFd7FDaAiyauazWPAAuzuXJs6vAa5FDBe28iW8mhACGdbUnGU",
  "key8": "2Ai7FApqXevFZGnhKwE5FUUEDcwhZTQgQqMrKbNcUWsWdYyixY8XPX9919UPTyxdtEDsrheMYPigsMUtTqepu1uo",
  "key9": "wWHqhSus1Vd82cjuzgo46uMs74beQwWavgb5V24sn3YDcwqRPdoMBKqy92AwxZbwrC5N1hr5i6896mqizug3bUa",
  "key10": "4PNxDB3qPPNhNRMeMg9YAn5vtuuu3xaGRqNoa5F5LAhbz52WgPNEgEbojFsBBtksdjD6i32XEbN2GFNwh7RMtnaW",
  "key11": "5RNV3WmNNqnxbeS7PVQL5acP5vj1d7TNcidKUwgbcgLc2iF1zdkDeJDY7q3kuFawqerbXwVH96Euhu8j4XSLCCHa",
  "key12": "5XoHP74H4DxswAztEKR5di7vF5LRjEttK35ypwQt7V1QPWEXqu1iqiTdBZVyYzJ7pTgHNMohrQUzv3oiS6R6kbtp",
  "key13": "3fpBGQYzwUnftqpYDEm9T1FMpyP5RvenNDvfsaAdsfx3y6xBZtEJgmmNPZqRNJcP8odyRALHgsBWm6cMbxStUKDi",
  "key14": "2C3oYCLgmBvfipWB4qFwd139iGp4Ba74TctW8ZeevBZkyZJpk3iUuAssox5a7smGjvbGDPgxm6y8eqzv2yofoiid",
  "key15": "5XdMLVDZ4euUdqamDoeai2HxRsrpGZSGjbnT5WXcA1vZ7JEUVsre4Tv3bXgL74UhzzXXnrqgPoEXeS2mgCfR9p3s",
  "key16": "5Sf3YBxwYTfG3LfFYo2DUwtBVk3p37h1xLN5xRi2ayyDtgaMUgfoAKk4XjpsfarQb5FV6JhNs9iEBsNXGpszy9gT",
  "key17": "4e8we75ctGy5SdEk7PPXGj8WRsZU3wh1PrTRXsZxXMr27MEbB5XUMG6gCzjUnNGpHvuPLUMmKuGDszThB99Cpwo2",
  "key18": "2PXYsTVREeASXRSaPyqSPdNbYYjsZcDLBGNn16n6KCWBaC7hwyU8d23RaQ2Bz5QwFmaTtQoG1NazXhxtRkKkXwV6",
  "key19": "4TBrnRWGwtDbXwWDzQkC4YwwqPZUr2gzLUsTFuXqvFRowoZiHXznixPJfZRXpnNcKBsboiLZsVANrAeeDpX4QpAC",
  "key20": "bhPV9bxP9rUGeEzCU2GnWp2iR7LrV5Hk4C7esgsWu9nGL9pUhqXSHphq3y7ywRKfsUNx5NCuQPt2gZndvp3pUiX",
  "key21": "29LRpGYUScKwXVWzJxToo1JPUUgpUrqVUhp4y2qjRqVRz6K9oMUqN6WdHq3aAmfTb1X43ACVAKzu34wjHNS9vaZ2",
  "key22": "4e9rd3YiTJbr6RnhQFdeUFsoKMW4e52bM8utSfCn9ggB5DcWGi7aZug1H3M9E3SdqDLFeQimwd2SvnFh4zEPuHH7",
  "key23": "2wTRMMhBd9ZKk981f7QUtZ1SQTx2U3Wvdmz1GdxRQuG32yY3nNZKBXr6Nnf3PW78es7KK2gQ4VK366CfPCypf94n",
  "key24": "2AMPMg9vyVuT4e5vChsnoE1Azk6Q5iK2fzKY7kcgeRu7Q6tW1Dwe9KNjytfEYFgqtA9HFMQg7y9RevDyD921vTnz",
  "key25": "PpUMaEaJvwhj1E9nwxTQGeYbcbyqgbdH4hEfcA3vFLHRn3tMuqe27eAyDKfLhvXmXdVqBR2uReYHLoFZfhJwSjJ",
  "key26": "5SpoABSQ8X6nWBnMnD32CKMFRDmoqTEx15sTTJPb8eyyeS2P4buTVULxzghpdQ57NDFd7E1LFPSiWQ3hTt3GUqdP",
  "key27": "3BDbxKMiAqZXUZtL6tWjsTaXUagnRjMUSnCt9dPGsz3KqLEPRcQtv86s4AvAeL5zUb2WrhqKW9zdaKs87uixzkEH",
  "key28": "4urBPrTAMEXocCB4C7qaEJpCpcceVFZHxNygvX6d7zSRGXNaAig8Xv8yk8bj9HCCqoFsZQc7f71DFTCqjSX5Wm3M",
  "key29": "4SCJMkcQMW88JAfCc7S7tu6NbgZNdrGMuyN86x88TeuKXyowkJsoc2amcmjRMGe3GikoH37MkCUcXArPiPHbKgP1",
  "key30": "3KaUhmHbwTJ4ihycT7TUrKf3FGRMhezzz2tn3KNMUfyN914WBMfpKP8CAHBCYu6WJin7nBXXdyHjvQ9nCxmjrXhw",
  "key31": "4G1xsxoV2XW9WW2MQ1ToAAYKkzMTuW47LmscT4LA1McpXjR5yuEqM4Tz46WxPXj34cbTJv9aR284KjJjsmVHacES",
  "key32": "NhQt1CPSfkdu5uLoBFwC8G6T4wJEmgHha9oqqeWWJx4gEWKDAJqr2nwR5sedzRgtWAEgKnU2Wenj7xe6T7bbRqh",
  "key33": "121mpm31ABphnrYM8KusXjf1mRdMykCHztamXHvp68gB5bdS1FSYcCZvLbz8y9n2q7MfhA4rvSRdk4a8oKTkpntT",
  "key34": "3Habp8jCavyX7R8XF2x4gcNsC3T3B849PczGRvWbJVirP1EdTYLv64gDvah7P5zumRooSU6nb9evcJrTUYY1jX8r",
  "key35": "3B6NXHBFHW7xiBdcrMyBpiyeHtysP4CjfrvBA3X4s6u2A4ZGvKXQmJi81czVUVftuRfvmih8t4p5upVtYXeg68YR",
  "key36": "5uZ189VjS7qQjtG34Hyb273Cq4PmfeaowuhYy44bTC2vhxmeFcaYCUHo5CCY2cczfWUkfeU3NYy4fVJtL3QM96uc",
  "key37": "2V8B6e1PAnv7ciJGfquVhBfmRfpTY5xRWPrbXTAsfFGBsskiu6WRLgjE1iKZ3cdMLaNUn76MS7W66G8zNBGaeSiB",
  "key38": "5yK3e65apNt9hpbmCJaPmBD4cgqzTwWQqXcP1syFzRBtQRLjxeRUFau2UzsQZCGw6qgpdS5vNhjS2kvUyFL9c6Uu",
  "key39": "4V5vBbiWt1xDrHQNNnGuQtpZaG3uq1cWPveWWjy3X7NXfgxo9uxyr9dEshAiDSTJZZApuzidYrsMsLGqmoywgyDR",
  "key40": "GUae6muiEq7dXBobFKkwp1UUBAQ6o3piv5xi5pFDtXit1MnpCGkDQu15nr6w6Hxrf2nTRiXuWkV2TH4f83nf51q",
  "key41": "5f7PHx7GqCzLVe4AY44vr5ZwMhHKvEZX3sBcqeWVibm1q2efHWjkiMVmShk6BCbPrAgwSx33sbLtoL46iNE7d1WM",
  "key42": "2P6Vv4sgj7458V8hrZGR4Lmxe4VYWbbthAut8XQrPMGmvuCujFapx4csFc6aFtDX9qNqFB4fkLYppgYorZfGeFLz",
  "key43": "2GVq2bpnAWk2MBQsBc7QXxJ2hLsnWEabn7SE5jYaWwJwR1tM4V2jprM1ztArX68LLSivPiNFfkEcgVQxRSyjdhLH",
  "key44": "221ua9VxYEo5f7muYZ2Zi8jSwPJMn73BRiUTxFV5xDHbViAdLsDr2E25LwerPkJoTJ15W9zj1HjS9sdD8GXZw8AB",
  "key45": "2a4uBXFETjbHrDuXzERt587KqjR3JkB7qYNgQoC1inTAUuq8Lc2TTbMfgAsv3EH3JTvsSzHVd5a2fsEqDKr1yRUv",
  "key46": "4bYBeA4eG84oJi7nBL56DVB5M2QazsFVLyPcKSAtZtnJHPJ7QjXp88CVtJTygtF2UJBEfrRFu4h8w64hPXYkt4KN",
  "key47": "3fVwc63zovXedd88qcxRNetooMFLF9aTnGxFtMcTWtGji4opYEMQAT8op2i6YaBMAms7LwpxMLnTZ63JZ7ttePRQ",
  "key48": "E3hxpuoPFSbU8YTrUCBymNp5Q9X3nqJerhRULz2gKrXexuXWeXhJLxvzhqvbjYdVNysiepS2cQBxWrEAPvDt7NB"
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
