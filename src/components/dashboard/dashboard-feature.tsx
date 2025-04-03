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
    "4mKKGmzQpkYESmpbTnEaN8oj4rfTsTRB67CVKN6ZvUuqFxqfUuwJtdeMhnesW4QvGnPCuY6spwLmeMjpiTfbjS2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21CfrgAdcCGg4Y9pKzbikJr9Apg21LV1awNYdjxrr8NkJMdREZHKWXnCpCMUEcxSgQnvc9qBrxvBd2AKdXqbEMd3",
  "key1": "4PK7qTAKtd8YhBe41juNrqK7EgrtKt3bbxVp9vSeE5k3UDUBWh4PpnKHmFLtwsLxGjMz9aawdqV58SLGfiEQ6PYD",
  "key2": "563CRrerMHStce5TPfrTtYkgkn6RJXHyJfDgdSzmkhsyWZgekQGCgeJrBq1x2xxskmmuj4B7wKN88fkv11WN9j3Q",
  "key3": "NhT7GbuLvwoBHHG7FBqot216RGmZBH8b8emLSFL243CaNrLnurfuc9qwHV1qBxK6r4ebsNkPyGEdozFfGYu8Hjj",
  "key4": "xWeNWYvb5wuxVJKuLqXTozFCPu9w4Y4xAyE83Nmh98rzsSNCYK2QtrGC1E4NG4TKQWHYZuvBcFKbeLGnpdyUqQh",
  "key5": "FDLJrb2rAzcQJT19agQ3Zvbge4sbde8Rn7LTFyYPBgbgf7njWN4VAdPHFF3eJWysdbKr4M5rjC9RheUzJNZrPxH",
  "key6": "2c5shvkvmfSRnbEGqEjRTVLTk3w1BE4cSzcMiTFUJRnTbjphB5Pa6FrB5FQgYvFrtgUB7Dk7Dr1XiUQmW3RR2rgL",
  "key7": "2tWxtXh2UTd1mFomrrt5HXc9SzdaNpfn7dZ9jVY2zgk9bHzws9KMi1Uh4avYyUx2XPzy7RdR6PWtku9cvDm3farB",
  "key8": "5K3QXwxThk8nZCGEeiitBTmUZcup2pYLG1rFPLjvn6HaV22uCMRdAmsSSC9esFDNGWoCnwoUxTutLf3JhYLYGggP",
  "key9": "5oFnC9Ffs9gSwHJXt6KAwQ65XajBGgC75VHS8TnbTLSre7Ng1oyogz6BAm3PnUuNdci4K4x5kPNidH4Un5MJk9r",
  "key10": "5J63CeVtH1Y5J8eUgiHz8AdqgyVYV9NjLn29XcGx5kLAGiHrQ3FaYZqrNfvdrfpzcZpWj5xpgyrniZ6b2wHw3zH7",
  "key11": "5rygPNxUtxH4aNd587nEuNcqZCFeGWNhiiC1uFNcbKsjC1ZQpfvYLrTTg84zvLjZaEUanUDPBSRWCPjjKGM5gh1N",
  "key12": "bqbwMwtyZNj9XHPzcXBFFZZcexL3nV3WQaVevvZ8wmLjaByxWqXXTnb27bNaAVphAKNczZU58vykxauMyziSHCf",
  "key13": "k67p6gcDFk4daHuDLs8aJJHXfKdnJYNKACdtmHsSnof8Jr7H8b3hfaDS61GygvyvtNv3aVkPuXEm88qXLbRxbLm",
  "key14": "5mdAipf11fcHXq8LYfJgXtBhNkULU8vJgQdfyaim2SpGrrB4oBNTaWMwukydhS28Vk9mPbP6CDAM5JYkmkReBvQV",
  "key15": "45fxBSsA7WnLyLcfLkSfdMbWxL9DFsK4GEa7htosvfyXuYQFFPdEVTpL2wrFLsUqkWLpqn4ZTHNWvYFHYwZsRojh",
  "key16": "2sS7X3WRVEhdnKm2zC1wKRytDTPZKGL9ooBXA1M62zDrxmcuffqyNsKpRSNgGFoASpZWpLTCh4PkQ71VHLjXRic3",
  "key17": "4MHiFNz9bkenpmpsuLYiLrBiesp2YQqw71utQZDNu3zHPx8ffXCqCwePVWmTnqhGcp8axndRf7nhnYwFdpbypxRi",
  "key18": "48RvF4GySsqbzVomhnRQGkPXC9QxUrNZygpTQf6kD9ooB9uC4JKbGGQnK1km75Cb1kjDX9Dwae7mX9xTgFXz7WfX",
  "key19": "4G4GgdGBwdxcar866CywG1HRDmi79EfxPDb1qzjHDVwTtSznwAyt7MpMPz2kxoD9VWMj2iZbZ4F72wY6ko7zf542",
  "key20": "5aY2zSZTS4kU2EtPNqLbVTPXQHFAdHixge3qKhqQHrrRtDfoG7xy7dMsMfA9jNcHbtMRzjNhLQf9ANuPsd9wyKpQ",
  "key21": "4ULHZGcuWbYWB6Z4BZHcjJaApR878uhr8KzYnXsCu3kuGbXx2F8q6sGa9x8LMsD8xitJJzNSy1M97ehHB9jTFiL9",
  "key22": "4YRCq83TFvEFshNcRCRETGo5VTxJiWfvtZuMS9nHVR5oGPCyGfvLm1J1GWypoDq8n7S54sVeeQAWDsiWTWt6NMGy",
  "key23": "2fvR7GDENuQLZuSTnegTKR69i56DQjXJWJdWBaStvhJZCzaTZZeX3UfF8pBqK1tmDrutJkxSP9X1gFz8qBJwk95i",
  "key24": "GjXR4Su4EALxP9r97yCCMpxop7BqjsAMGeGPzM59P9TaeanCMd6a4G53WBbEEcRTCax6AZgQPG6aUEeML1tu3qA",
  "key25": "4sxZy588nD6Sxm9P4yi6C5P2vex435VNwVZFaxeZRKUTqew2cE588TTFY7p8mgDSntZHksXqq8ztYjwgo5GzD54Q",
  "key26": "pXZo1kJTD7qsX8bZ32wKXZS428HE4PdecGURHMLruiDqSqWcnRN7NPp2feg1q2XwRiFcpgjjs9Kym7NZtJU5AwW",
  "key27": "3b93gjTYgh6eQnGSuAETsDrsk7e8xNU1cSvYQukHmmJkrWofcWLixEMSta8wWLKeUmxEHdWoBUYwGkHYo7gNPCM7",
  "key28": "3ffLHNYoW1aZdfPUy8DGsmmVLc9EtoMHcey1XfZzeFB1XnSia5Y9B9Q8JS17dUqqUaYQc2S9SgSe459Ry9TChgiK",
  "key29": "38NwXrPEz9r5idAX1xap5WKJ2iLSpc4aSuVnA2Po9kc3wbHEFae3PbEVv11BKbPsjHgJCdeQ3UFJCxsMVP9EXab3",
  "key30": "5w3MkHQF2U9BL9ZzBA3rizMWbPSqGfGeHtwizXGQjFpHTzKihFW6aFuzrioBYSatEXTNLWLyzTQm2tSx9SL2VGoo",
  "key31": "3o8GGQgTzy3nseTUT4Xokbb7Vvsrk1dt7mo5mJWiBRth1o81xw29ywBXZjhFWrkSBp6iqPXFiZMPcWg682HkKV3R",
  "key32": "2tTPbE4KWHHiezWe55XFKPWMikV9bbJXrpqqvKQAe5Vo1GgfPrMZu1tq5ba6PHfEFC8b3L8DBCYP9XJjfSb9bU5W",
  "key33": "5G7WW9pAN3LuweDy5BjcWUN1G4rJm1o1YzsMWkJDuHzvmfBQJAazeT3QBCjncjFrzexhmW6bqqDbJoHGRbe9jNJq",
  "key34": "5vA8sjTD72QPaTVbNh9xm6g7fFW2ANQq1h9NXeeXvt5BLNiM7dSKUPmCWpxF4znaeBoFQ4BTdDkchp5e5feNUdUk",
  "key35": "36BkHQ5GxSXMhHx3iFyyBMbwcKymEwSiugV6AWUHMCTyMhdoRX2Zx8cnQ5PGnX2xas5jH71kpRvX5GQheC2cojpp",
  "key36": "2y7vJnyUMjnrXGCBArCwD3R3ebc3YeekwhVbFxWXtvPA4hzZrPjAVasf9WhKRgWVUYGd7J1wK4K6ZXhEdwGTqrK1",
  "key37": "3W1zcxTYui65TuKEKQE1AmvyfXCQ94zXcdctea48CpjRNLXuTg7xzzyTcCcicZNPzHExrRftQhLCMR26YQ63MSNB"
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
