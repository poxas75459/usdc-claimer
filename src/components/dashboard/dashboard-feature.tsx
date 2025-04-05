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
    "2YQhuiwcVMoB3q13pFgZ6qZHcZVo46E8peNrM2urCxwZ36c1s8YZi9sHiJtwF9m2N5fiGdgMTyAHv9Zj8uZdFF8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1vYaALPJdjZqsEBR2XTfvF15xW2PLkfSJetFcSSbQiNxPLQC8HCYmx62BMQVdSrtCbNoHQ4qUdeKa79K9YCVE1F",
  "key1": "3wdQHvp9jKKi49CzMMwRYDcSdmJ3LeiNXQqgU4ozmpweqNPGsQ2XMGe44fbczCJnuByi5NpGqvgdZQzSTJNjcUiV",
  "key2": "3nX5PqVB9fkFCBJLvAs4V2FUWCbmP4EqqxwYztF2vGy79R3atGii855zKCEKE9xMjdaAqBA5kKKJNu6n8azpXkt5",
  "key3": "5jGzHNsJ4dWkUmBhH1W3A8D5Geim57169vGyY5V5qP1NpvshhJVWSK9iX7x4uycy6enUCtkpfKah59Zn6MPh5qrZ",
  "key4": "5sDncb7tHWiDMjATsFHizt7pwMb5GaU8CvrVLKdvCnYDXFKUeyB9NTGL5mnKrgMdn38FuEn28aXAwK7qxGBqjck9",
  "key5": "4RqDCDmEDxRBcDLb7nc2ttw7FXzF4f74M14X5Bu4TYnqzZzPJzND1ghEd7WdRXeHbygonFKafKaJeKfAjW9ddeu3",
  "key6": "2XCHj4HK1dBvy12nDgu6qoXTp6d1YvCVc2DcZDtHzFta7hBFs3ToaGhD5m1wTC6MUYLdeS6ZvCDnyB5r32hwYXMW",
  "key7": "3De7qE6Qwuq6k7zaijs4cHLg7j9zoZxipBngB8pSXsZ1LwiTxJ6jjk12GVAj7LBG7PUxR5BKYtXBQqQxT2o8eE32",
  "key8": "4SCk4x5unthnaNYNdhtChtDnq3jGK4atX9XpW37NPcmaLQNGXHNh4goSWRhS48vdEvWSXWGSFRExkX3S76iUtJF",
  "key9": "4PQ85Mk8HhntE89joK5RveVh2PR4z3oqbfZ4uAZYLLnzn3zd7YRs5zoeuXNm4eR12j1pfuJPaspWdT46wK3PDZF6",
  "key10": "4RAovGkCfDfGHsD4wdEXat64Cki8iBZM7armx3Zcf9u7pt71UD1LwNGjzass3JhYcqCvTqGN8mcZRKXojbpqhjoi",
  "key11": "468FWKJ3DWZG1DevtcPr61fdaaJwQ8FyrxNe6VKXuuEDTspKkDDvJ1sip3AQUUZWmy2EKD5ova8GFkP4zrwmM5Ja",
  "key12": "3zZ4cf3DSnRPf4gjgKkrrhWfuWwA9oSmPHk37EaB1kGb8uTc4oF6LDwstZWjKEFjX6XWWswjKdRYgLzwULwSQRx",
  "key13": "2aG7kPSysHYLRhy8w6Wch1wscWpec7kFxBTDQrTG8GnVNoYgBjQqA9Xadnq4W772FNxszLQPimGtXa9kFgme3q5m",
  "key14": "5347SVLCnHQvy5mE81ZK531Bsgd7gacwp6unDy68ABa2yetBcHkVbVr9fmim3BJTLs6PuRwELzvHaajx2Af5AVAP",
  "key15": "5GagNETxJxABsvUPnsh9ugpty6fuCs3xmjTzuhuh4ttJA7mA5H3QuqUn4DRxHPqvJDiRtTEZ1vr4UdWg9nAwboxB",
  "key16": "hL7ZZzU7V8Ni41AsWNA7YeimPpQZkDELKNZVhPo6TMrqw48DRoTqEYBHY1nmAnfvDrZzaptjPixTVkwcLScD871",
  "key17": "24yrLiLufMjgutKLGMYBJhj91z88GUjoFJEL9FqvNT3pqxjVfJEJtY3MVUPWG2gcgwCKa7VkSRiJdYZRynzf5fjo",
  "key18": "4WxRampzKRHMqSPSab1sS5ooCuCQMzAESapfwooZzK5JHW8Wvg4xWNbJAfE5La2G71VBfza5RHxNsRdkGq4xG2cg",
  "key19": "2CcGZuNxTwi5qPJmbrwnA37KmRcUr12Pjdger5R1GCfKAXTu4Y5m5qh6gcj9phXEvXiSX352SrZk5AqotbezyMsg",
  "key20": "4AC8Lj3tugHFoTnezkqfPqRCdj7bQrrTiwD2d9RWGDWVvVa1WGftKLeG4h55RwgJLBYdWJo4iTSJjgYsFQb3uhvq",
  "key21": "58WY7RtKYuqrr5wpSyCvaMCuKsc9xWB4AnrMahrW2mAgGosTcE5KXS1vR2m4BLcNmGaipj8zAqLukntXG49xjU8N",
  "key22": "3xkBA2chnKwf5RhCU6apexbAXheBAgExeD7c5uWtqM8wvVzkesti7ZddkU9CPqL9BP5QHGVX6pf2cccEjMY1FjcN",
  "key23": "n5gWJBk68EcW2c2EoUw5zZosJh3gdyY28ub53Bzz3KKR7ndJiVQnt6VoTGyC94yqNEL84ApQBCJzYiuVksJpuJW",
  "key24": "FMbLMCbhpCkM29msng9pVVvJL8HUTm5TsZiLKPDp4nXvoLrZZGRKNmJ39LbwSACkquUiXw9m2FMytQ5knq6eV7h",
  "key25": "3ZYk3UQTALU4Lvq3NbB4bfkJFxPG1bBkLaJ22gwzmDVM3pmhEQfHycP4GdgoW1iAZBvHxsuNu1pdCJsqYVdQyww9",
  "key26": "5xnkULd8kQbEzAZgCYxX2A97esLSkH8224KYv5Ng1YJhDLrxqc7L3T9GhYJ2DR9x3Fe7rnK988Ghw5oZGqECBsK6",
  "key27": "24Sktc4C79WFT2tS5u1cNVSaJwrn5Cqv7k7vy6AGcadUUhnzSTcSZUkee4V3hN1NrDCX4ndsWts2dumb8k8FW7bB",
  "key28": "545h98MNz4tXz2UftkefxQ4cV1zeejfpTm5hchbhc9oNdXG3dU6MtBwPkkEQXxV1YzxmMJzAqFsqVUodJn9naZkL",
  "key29": "4WE1EFpq3y1A5MGzMMyxuSUbGcA6m2yWCjYSKpzrmQzDFZ9WjMe1XUTvBwgJzqEYJB8H2oNW39yxMc4VMAfP96xZ",
  "key30": "2Cpg2P4YVsa3pqx8TSkufmj7PwvLnDNARxXawfUxg9FogsKfNV48oM9uQqZgWjiFQnTvqBDSa38rdBJDJy8dXtJM",
  "key31": "upUpbW3TUAoxQEJ2trsnvcZFMNE9PCXSPGg4SjWsJmz7R8Kq1wcAfYBmdem2TTTPwxD3Q9ucktTnLg2LMjM1DZv",
  "key32": "5rh8tzAcbqAKwfhcjLUTunLWMJC7Kev5wYkyb1n1d5Zd7fsnB7FCwSM5MhyTXfTWEXWCEyZ217PGbBAY4rR8QSxW"
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
