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
    "5ZjK1gNS7hNPM2nvzLTNRbxGDSmNxgSeoq3UMgDb58UXHm7HfCMLSWbNGt4ZyBQ5woHzG5SCmgSp5K3HkRaBco5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJ2MUupcQ5GUR8JuMTQUgxggWapRyiCgNShdtKcDRBMJA83h32ijmBciJg5evofvN6hdHCnCWF8Doe9y5YGytzm",
  "key1": "4ajSDRVYNiXKhf2hnKZwvREDaosEaHG6nunJuaf4FAKwkxapYEHjmDCksdgTwgnpbCLoWNv3vYfFfGn4XRMU8Tzf",
  "key2": "UbYEMCdFEF82TbvChGSL8ArtLeZALYb7p7yfjxSSEv76sapqXKpQCJv1kLNBB8ni8YCybm7BbiJSTZ2MF4kHf2h",
  "key3": "2QmyuHQQudridi4XYYJQxzdH6a9bLEzKVmMddL8g2RLpn1NxBb3vQLq6y72HptKaCwicfM1xt6xqZUJ3xhuQ7E1L",
  "key4": "59N6119fosD6jom3cbFgfcEYuGNJZq65j3rWLK2wznEtJ6Zm7MgBgphGpQGxqDft692z1cDTPKXxaksUQvMyRDCo",
  "key5": "NZiUTKBNjNqeQ8GibQB4TUKAAmYeZa3LdivaSLreuGRe6uSLxRSyX8MkjiExrqiqmmdgF7uztYBD1NpmfBNGtZE",
  "key6": "2NcRcDavpi7BvCokJdnMGS8tdcBavtvJiXLJHWsTsZKrHdczpVYbZYCq28ycMWyLiWqSXjsSzcj1W2gtofNunjuV",
  "key7": "5KBHp72WxsFUBNwE1mgFQ6QrjeV7hg2R1fBoUCFerdRkJA3w21SpvKEaDWcGLR7xzsgQDy5kDjF4UhY6PnNFgJyM",
  "key8": "3QdntueHYiYw4fkPV73FHvJpPGX9PjV9nir6qkkFdsHsNd1NymuLwkvPu9aTgSUXAhqgShEeuhhp1kfyB4J9way7",
  "key9": "4kYeX1HyWmirBgFoDmgXXHe3cTmxxrs23sqmvEptbinqsQg2FFQSvDx9bj5rc7fDfeDvGqVYYMDvfHMv49oALVK3",
  "key10": "xfkiQHCLB4Ype3AggBcRXWB2cHV9mNpe2LageLkmScZ684NantSu4EaazsY9QtKY6Pged2Bhiw7wPY4nYmh4Rkr",
  "key11": "5J82jbeVwM2rH2rMfGebNrAwWUWZV15XqgvetBkLn8CLtAN1U5FKNScujiM6PfcnNXk713nWYbzX3Px8h1Fkoer1",
  "key12": "iaX1s22uwboJ51334sXj7jn6Zact4ab3UwEYKzaLsEMihfh8hX9gTc7z7pVzMRWLCZ5d7B7e3fkHYSXVVyjiBSn",
  "key13": "3m4MisewSwCg8uB1EKk9CYhpH9Z52MpmBW14GH8eaSRC45jw5UVju3Ajftw7BXWCuCPUtFghcEmRNM82UG4ubuVN",
  "key14": "584yodyooTvXGn9SapWBgu95jqWqiZpGJyET1vc42Lox49qMi9PHPHA2x3sWeAsSt4pVRwBpv5sHJgQ9yZ9SkRw7",
  "key15": "5JVuHm5UCfRHv75843bbRNGGJxK8nfeGhiSutZ4WStfyzsuHGLM5fL5vn4r5rhVzQHZfNBjaU7wxXuv9B5wZ43ma",
  "key16": "2pXNnKFFvXa7NbP23z6dzh95BB86oWTT9XvxWB1JX7ZyFgVKZASDar1Dzy87gU83v97Yr8zm3RQZ4D3JZE1YLDay",
  "key17": "5hDBjcpmHHh6hD4q3mGKAUgrbX9ot8VkWLMKgXinK6EnyVVKNeRRpGJFaW35dn9EnZPxWmQKmVD2YYUrTRfsaNwJ",
  "key18": "Lw3cUk5v2FMXCVCZPyEiuuknt7CnGdeHG3UCDwXSG81iMbviXEUfmW1beEsN7GpLqfASewFQqg8upV5ixgCrHAF",
  "key19": "2hRmwpWX5SCRHPiWiqEiKfHBo3BXKnczH5s9wgUeQhhJ6gxytqdDPtTtFd5A3K5kEVNiD7Eht6eYmy2fXVTTb2Bt",
  "key20": "S6mWBHbDFtCVxbKcXZMw8ybRmTpxBMwYyw3WQxru78NUHFjU38WH6UoFh1KTkqtGqnVs1AykXAhkG73gfarxkgq",
  "key21": "4oBUMy8qmVAn188HCEMeeCeDum3HSsQNL8DGDedmSxdw8JHSA1Q7nTTinKKYiiCk3dzxnvBXQXbPHY62M9Xpa7Ug",
  "key22": "2sK4qEHeYyaXuzcd54KDsTzvi7QYHYfH7r72bjN4s91go79uu24zb1rUYchLv7z5Kd1Df6gL5QsRvippYzBETENv",
  "key23": "BAkBzWfEhdWwcVLL4WDVwrpSAzvet9NugtCApB1JHYwLLHWZejS5mqSgSJGH71PVg6UZqKVKMVVBxFwWSsMVNpF",
  "key24": "Q77Ge29HdueAKrMNaJeXT5UWX9r9N5ReDKZr4wSEyWwzZEwKpx5tKmFkRC464C2yfQyRUQqj6NdXGWT5Q64HscY",
  "key25": "65ejsypHjUZNjToLMy3XcVSiyCbwcDDPhfZtrW8WmGxM3wPQN2ay6NL6N1nbH3gbE3FbihtL4dfH9jFuKWdSwdw5",
  "key26": "uMubZQjvEWNFnpNE7z9pMFKpKjJBeogUhp2PwjPRU2SwSFUouyejuPQj17Szqo4fCyy7KJvkPDwHfbBwGVAHFbY",
  "key27": "HpCSVsBT2gT6LZnkcy1LXXr86RvF58S2Pmrkf21p3DSpfACzJHMUXPepghcmdKT3T5nfc7rZM5HiEs97e4atdAt",
  "key28": "5nLEXkwUJspYLTcQ8b8rdnR5io818sNtVz39UzZKKzAn7uVKWYp6SbipCDVWJNHWuZ7TRjWSrKybcgCsk3iXFoa5",
  "key29": "3TmurUujCysuV4LKs6VYa8gqt7JRGnDMzpfPsBe9qQwCr7hgBzx1vZ62ydPD52csXk8d2v3XCQjBr8MxtfmFUr6x"
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
