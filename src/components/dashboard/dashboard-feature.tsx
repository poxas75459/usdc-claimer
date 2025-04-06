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
    "3SMX3b5c1vk83sTjaR8VBFWWZXq7xrr9sCTChG19C5XQRpJazVJRsxBwCJQvBLEwrm24RMW1NdRFYBg1EEf3DFhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o79MyamYLtXJSwfbb6hM9edZ7fkwF4JmNKftNR9d25TkUCniFq8m6ddi8wHfqYDwq7oeaurgKrpGXQwtSY5jpCC",
  "key1": "3pBN3Yi6WzjDUtvJ5SRehtwLSCJ8FRowPDNyVwBh7nTq9nq2z59sViNskeViGuKhp6v5i5S6P8Ezf1i4uo8Zk5ma",
  "key2": "42siNK7Jg8Sm5nv9R38e6JpMEtz3StWBEq6qa2tLGYm9YFUURJXFEKWEg9ZEbMUtn2j55CDJknFBruKZc9TZve1F",
  "key3": "tqzrB1g8cY4QcgPeLcikXunXDhQCTjEsk7RvUoonUdZ4T1NdSoZ8S2cA6YuDMKgmziGn1TDe76fkwUhsN9e77KR",
  "key4": "4t5MWw9gMY5TGZ3XeNxzHgQoNFAtJjscuHAfauf2iR71UFpemcZsZTKUi7PFWScrLYhhq18L8k8Ut85S2atYKRHQ",
  "key5": "5RZE2ZrxsneNZrijvcJ5HzS96Q4eLQBY3v2KTexfe88rN6w6UNwzXV7DW4x9NTTCudSfTHPQBL4ErWsHnfNmHKXD",
  "key6": "3CggMTN5U92trT2ewyp1rNi1UP7ZaNAPn6xdoXjTKM59KZhmPvNF7J6recJ72aZpvnFfhPUmCqK4xp88bZCatK7i",
  "key7": "2j9QikPzQLdinGQxZ35aJAnTyiPgDWTLW5zMfDEgue7inzgkiiwEAAeBmj81fgyxLf1beCjPAZNv1X8jzuMzEktQ",
  "key8": "29rXBnscRJKtjvWQfh8KUS6CChXKnMxuL6KuxWbfCPNzgrEkurmMRoUy9rWzkcdfXNN6cNJkyFTgg5hDtidXqgaQ",
  "key9": "3f65FoVDsYDPtxciG4BsUDGAfJn4rQaX4SMQ5dUKkgrmLcfba4ebzBFnMVwEkvtkgfKqH7aTFFuvjHBpj9ireg37",
  "key10": "2csg7jyJs76FAJJVHh6HMMv5y5P93y91wcWxdeLyBBMqCSJRKMbz4pWZ2ZiGVKsPErESXFUxDko9Jmh51tmsdJRJ",
  "key11": "hLGfRg8M6pk3eKEsgqm8Nt7L1xQi8y16Y4Ufep8m1hmi2G6mBp8u68KFxyTT2amEr4uQwRwX8VF5dByekbV5dis",
  "key12": "47M5gtR7ZLgLXSnRq2yfJKQczB5fzPhDc9dhUQ4Yrhf3s2p2jK6TU3yGRL6AgyRH4yC1vmVTRXtsG4AWFx1Psspe",
  "key13": "CD9yEhRqk7wPSxuKSodbD7kibZ4ud1Hj8cgY8qjLrzaypE5RKFZu6AHciCmBJuJ718GTDF8a9kWeCzcqSqo5njb",
  "key14": "T22otAhwQcwEnU5DNdAZNMYV78qrSZYWdxJYxebPG2HdggQGdqBHFGh4ALEYczYQgqb1rsbPVkD5L2T8UjWRU5x",
  "key15": "5wYeHUwH3DgpGEpxJhPWG5YWZ8h8aseDKZFr3HeKs6Hs1794XztUDCohgCnsvkMegx9es7qYe7c1dGXPGYuGTv4t",
  "key16": "4yKDEpC7YnbA2JmKK51rEbkoGNwGSjTSoY3mEp9gBXqpHqxkVmheUBnn7F2pEFyntD39ezrCMVojWJvDX89y75zz",
  "key17": "23Mv47gTtgAfc7oMSsFGsvkeJ1zTm9im5nYvMncoQEi6F4b7P1t1rukuTBH7Rivu5zG4ryGwVP8zja2vFXTbmHMu",
  "key18": "36cA71KHcsKoZmFRNgQk5Z6jPAKk4zXRCrpKK8fk8Sf7moKsWuQTx7LCBDYpv6yGGBdBjBVTN3L4QSqX2ZpzY8fR",
  "key19": "3JbCNnmcGpveUCLEuEwe7FAnk7ahKVZDawwQRsyGVKVJNNj1Qhd5DfA77X2ZXAec1sRJxZympqwMx3HFSpEkGCgF",
  "key20": "HTDy6Swm5kBkWFRyseXiUtdRkFB6Mfb3tMtsWKccSs7Yed5WAn5CRG6mna2NeHZ1RGsDACHHNiwxvTWr4TJf87f",
  "key21": "1wLn4HvbS3Y1YPkLTb7TskhgS8mU8XkCgCgvG2uBfkmEvvnTppNaoFXqCxdZRmRuWebvxwRcCLYwYyy5osnVVyE",
  "key22": "jgw1ndengAjQkodsaVTf7vp2KK5Yew7EXMuwaZ8FqQm8hB1YBks41kmbXdep6c95DENqHFWoq2hwCyUr3eE3rAT",
  "key23": "31tZ4S5by5sHwUsUHgrwjxPEHhZEXmHD4d1rSFRcYgCS6DsLq6Ww5GbNMsmYV8y2sq24GyHjG6HEygVdgtawmpp4",
  "key24": "ySxPWe54VEzKZEU5cmSMLRNByV5uVuWR68pCPkpTeH3rxhntNAMt2hEweqHaQcnsvBCENxt82EQqi4YGkoaJwCY"
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
