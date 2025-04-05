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
    "2ESREp9MZe2Qvbzpnzo4U7tvav7YWXfJwLrTcBgQup8uhJca69ejfvX3Acm5ENUiwnx3pVayaHTbh4Ao5k43dABc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eQfJYygoGSev6nyY3nPUuKjppcomX2RE44JeuaMKaMS8RNJsuLdqD6M9wzREM2Vyvy26Jz38xG7vmemHyUkCzuP",
  "key1": "ekZQ7zEeX5ATJDWmwvpr1g57JJwZUuHemhNFjfTy9KxdyhQEXcXN2prs2AWEFE6SpLb5TPZiE5oTYuJiU7kf1YD",
  "key2": "i3q1WQKphffnLmPjPET6AE6rZFB5pkmZq23QXgBcBZtc5ikG5QoiuGG7iY539F2GKqRpadX4tPvHYcbCPRqfdgz",
  "key3": "5Ltm4d7qRJUgkyZyVbcKREJ9mUMPmxdA6jTuv5qvWMNB2FXDxh5h8DKsEL1rYaEuqrxHjP9nNcyk1cUyYXtSyekb",
  "key4": "DFwCuQSJoKF87BK1LJWjjJxtyfFK2HiyYX2GCAJxErt1oM9jgbbNhK9dBDNgj3JT759mi8ziyyZWrsrbpNC34zy",
  "key5": "WUpMggC8cjJACSYpzpWXx43YbrZ1kuJapXoLmjb4CYjcArMtTnVMGDUeuFJkNwBgVyoFuAWCUdpTv2FVHb95g3R",
  "key6": "3Hf3rAtEegPr45U6VxaAAux85cdkNPwZ5FuLqh4tYuSn8YXhkExNSJWzt7cTajPt2SsGXYR133epTA3atMmmPrZV",
  "key7": "2BrEBnLXrBWUtYJQvfJ5L2v7rAA6qaNLpUsPSSaWcJG1jmFBqW3LFVnVBBYspSK1PAusCqX14gyuUbzHBWsDMmwr",
  "key8": "4HRx8Sw9T8jk2TtptYrXekdtSvd3EZu1F5UPecMA1JmqtS3LEAue91bC8qsBnMKcLYWrd3BQVkqtkw6bRZXccwgu",
  "key9": "4wYmxfXCgpqXNBQU6bG4YSCte196RGdumz66GLDBe3NxvjhUnZrGnCFpMe3s2ADRuJ7Qg9puraVAL9whLsDFksBC",
  "key10": "3JAYrzBYmxgjnL45ts6gvCT8ExYF6ftAYv62kPdHUy4LsynaBkF4oMXzEdt6csQQEYoWbJjC2XzHU7iVMFbdvte7",
  "key11": "5LTBU6RomUgz97mHJCbR1MFD2QT4o8Wpc4JLYpQasH18WoPzwRTTPuiZzmyNVBeZvvQAWubT8sGtqYnv9MPFLjNM",
  "key12": "bzJdamSNndHrn3PkX8UUBEAPNAZbcJ1BWupsJ4B8PhahH2kTxaw9pYTFgWBXBYCjkjLXWULhhRtcVnVoqb7rT9u",
  "key13": "3PqaUfayW9EnFrNkFUU3ZQ2BZCM1k6WG8SmAQPob9CCu7yYdXRMyLLuPSM7Jb68CCR1rZrgSrogCTAxRnL92L14o",
  "key14": "3DZwTXYYTgWbUNufx7uGAg5mBqN2h6zJQJ7EpSpeWKLvt2TaKv6Zfy4xKcc1eAQSTT4V5AgH4EvF5NV63o2qSQbK",
  "key15": "DSvQSARjQAWAxt9yLWk8AQ3FCa7iZ46udCJDkah3eQw7ZoZxoq2gQpajTbKouE6vddPDZYj7jKPbgAijFxX8w1q",
  "key16": "5CH8XfMVxM9U8PWcbT2AqSyvMy4v8FjsJTYDsDyVxNZ1UY7s5wg7rCHVDtXuJNAtaXB52N4jdGhsZHaSwWe6YExN",
  "key17": "2RBo96Ugwx8K4j4nKtYVV3YCEMZRHBLoRKxQbcGhyFyDLV2pc2C1zTDnf2uPZ21gg3BLUxooHMokDv6gafvqxpT8",
  "key18": "5CCHAqtMn4pBHsFJzThb55f5xUZkspEfjDKbuNC34DYNATkFhgYeabpNiKFJBSixQxkgz2UfnkM7gNmBXv7h63G5",
  "key19": "2mC2RygK7EsfnNAxTRkYzPcjd7GXqr7tjFkHves5BanW4Wbsv48bMZA9p3r2oeM3ZkqmHwwWaH1cWGrP7UMxoR54",
  "key20": "5xNpQ8LgDqv3UStszZsK4xNzvqrburNzbz3KkHHzHEiPU2JkzmaMQi4TmGnThHR7tfgYRdEzH8SSSDsMCHYe8g9i",
  "key21": "4VZbS85WrJuCWc9fKZGgi7mTYKbnoHBiz6m8gbKDYTRDKhNaLrabEZKKBwH4PCW8o828iz2o5G4G9u1F231de7Zy",
  "key22": "61AMDSiUE3iadpNwhwrRrjr2hvEu5jezJ1SG8gkgFuxNBjgb4epGiZqywRLU3KqxFLKkRRZjy36fsRG1NjyV8gj5",
  "key23": "3uSVkkQp4kBW421GmvcAuCqBbsi1XjF8XdNtubNA7h1CGkKwoNHSwC8pDDE3oLSmognn6VWCSoaL6URypT8L7nsL",
  "key24": "VzmL4uqqtbL69GJNAgLNRVti95GXm2vEgECG9PeEZk7L9Z99JK6UwPfLnBEeSsRWD9Zd4bNUr8sSVXnGKo9b5iv",
  "key25": "5UP4kqEaCNLaJHC85grhmQXC4vTYDmqqavKqae8xT4m47ngpN9hjxQAUPVqxT4aNeyvqDCAV2ksk899dRmjFJCQf",
  "key26": "3o9HKmVLB3efc9nho8XEk7GWRYToSiCTcxaF13wukMA3hPdBFWmjKD1ShoCBPFr6A5xSBbkp19FbW6TVnQXUbfX4",
  "key27": "3eMyPjdybYjxxT3TBGLVtkByWsNuGxfhPffz837vDMwWau9AJwwLSceeEGgPHa7WtTgscThGiBcdDVZDVV4a27V5",
  "key28": "5jExHwvZV6CBgzMosPMFMQAgJpAh1wTA1t9DTJbn4jL1VkXvi1rq8HMmCLvS74iRCNX5Zt9WMshD3Ch1daQoNujf",
  "key29": "3qWZufWaZSxzQzHyqZtrUxZpEafHX8Cdw6TyKtsHntHWLWR6134wknkui7WPiU6THZ3ctmduTB7mgNuo1V2NBCjx"
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
