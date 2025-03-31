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
    "219dNSmm4LbyvPHPEaGyRqmK1tUri2DwAvW2AdMBfAa1v6VbSdfNLJmZgmedwEBsuDTkbU9nKHw6kZJTjPzuyi4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5coQ9gNGjAR9txWpeTN2E1Ap4mo3v3A1JXhMMtvNgfb4V33Jx83cuVgzHJdF4Pb7bds6J1zpggVVpbFsrGWHGRNp",
  "key1": "2HuNscEQEsXuyhc2c4rjhgZt7zuekWEczGWC51twRK7wPGXiKFtcYUKNjkwYdVh8H2BsELqaAF9kMbxbXD6LHo5C",
  "key2": "NBNb74pmvUC5ACzcdJ6pwL8774t9TdrPorDs6LRQMGAa5q3x5JSbLJ5dRqbwNYtQog81DQrwkZLy2A9jFFnccY9",
  "key3": "5kPerk22SVFYGQPy6gqcXdegPWsjfbP1A5QLrmAHeESVQ4fuWzHUNMzgouD51ujbbLSHJUbkMpYU9TiyspHS6hPc",
  "key4": "59xpMWyrgNHXyZfzBNBzKYndyWkGL24qa1EMpLc1zpFT6ezmRJ4FKsUYkUviiJdZdQ6fS9gx8nVGYTk6Z74qyRW8",
  "key5": "hXinKZmSPX3m8Q4zdVxcapcGQMcokA8z9ve2WUHEUD1tfg1Vx4MomSyJk1hymt4QFgV5kyYuDtPKDsJbD2FfsUH",
  "key6": "5QfZzgUCr5wmyGRmyB1ZDQCyq8Qnqykqbi9D9zTGHK4FK5twADEEyyajLrwCjpuguMHrU63huQCpe4z6KWmvUFS9",
  "key7": "3rfMAmyDrxL6PC3uBr9aLc3sovay6pNSvXin1bRKxE6HLqL6pZCWpqj4y4vCh5bm7RLdmyyo2QBxLMFBYv4Wi3TP",
  "key8": "26TxZfjFMbx4g3FxHnjmoeSDJan1gyyVftzQhFb1Bhb8mJDDBnDuonpcpz8fDXn3C3tWoQ6RHsyuNfS5cNUKcEus",
  "key9": "4ozPFGAstYuNpvAbjhde1h9adsRWt3uJEZ5xxHcBEkojaH9ZCbYLb2Dpb1dvPegRsizfT63sQQeYUxZZqZzjmhCm",
  "key10": "2suwD315p16YfzwRRHuXWthTE5nzGHWdhAB3ZSovukrYSFA3AhnBmF8aDHWfUQ5Bpkz7aAAYMLV2WQPLAuvVKAX1",
  "key11": "bzMrQ3hTMmfwXrE7khvAtncj26xxE2DjFe65drZjid9UNemXcm3XT5P6WS4gyb1AzrsxuKacZxCGjWpv6P8smVv",
  "key12": "2sggSHhgr8AECNrwMQPUcggBYUDDALF3vZkeoqotXC881MFR8BHJMNiyR8dtTidSbs3ooFLh8hBmdyPV1u4E3XxM",
  "key13": "4A5j3qH29svkxN4SqCUE4fKKADr3EDXb1fcEPMRR8tVc3f39xZCpY3tuiMUXLQPi6R3eqMTyY6bdWJB5k4EArbgY",
  "key14": "5yWWfUez7RVBViBpHEk3vaV4hcezJw5zxEYZRWzuj7BeMyTnsWfSVSYcCowRNTcrmWCNBGZg1XX2wu5LiQoK55r4",
  "key15": "5LhvPAXuykxbv4Wa46ubaG9S1KxX1nEfzn87XfnUN7N5ALk5Am1qJFs3SqwQSys8i2TWzFb1uKq5kBGBPhx9ZcvT",
  "key16": "TENWQBJMdz9sQVy95QpzTJovjiEUgfZGu4SeNJRdDa12FBXJhJxSHMHo7PgUe9eRtkxLDNMYSxNN4aj2TLaXRwC",
  "key17": "5hJcQSV7pwsQCwxkgnVWfRpoS9BmefiWpFPfnwvvDAuUgqZ6w1EAsHKbo8KDmcCNgn97tRi2g6enZMgMZ1VeSRFQ",
  "key18": "627fFRXhgN2WM4ex9Gd4KstJS89sFRN8zxGRSM3fwuCnQ5u4Byx3z8ZkbCcUCgqLS4cW6cmz3xtJytzBHy7wCpx5",
  "key19": "3LAsVBgWMUwpP1LJfuNyvvGhmyjshdkFHs6P1QUQDLYus7yveQSpJ5q8tUUtYQNV2F5yGz8QZQ3oXt7x2eKXugf3",
  "key20": "aUeS2Ed8sKJVD8Fp13mHEBvsTSEY9GQXkkBY1zGGUgweHddmkUBAnr5a2Zr1k7Tc8YPuGXHnGzs698ZqxxSAoFF",
  "key21": "3ivww9osRPUr2qa5ybXUDWsCnPafKXdhZeLAsBN7r7P6p9fQLKkQuGvAC9KieLzyYkDnv4E2HNj4vbsFdD4GZreG",
  "key22": "38Eq3MzFk6k4G86vZa4yKupyQBduZN9WftSKtqXmWfJEfx5iMcMSxPLWsxDWLpDgXBHX5Ex4KMaR9FEBPA9ukYsh",
  "key23": "22EqWEoTjHZ9BZd1maxD75HxVesa7N3rKbWZRB9d1odcSeZd9naUTFKbaDn3gCLZF1riKHz2MxmvKKWA79uEAyJN",
  "key24": "5zjzu1ghzWNhbfBfWattxEaLZsuukNJLLRGNCsw684eV8dH3YCezFQKebqemDkDcPRsui8La7DyoFUJuSTy54Z6x"
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
