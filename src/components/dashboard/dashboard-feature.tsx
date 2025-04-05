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
    "aFAPtn4bzv3QezELL6rM725xWnTK1kNkjrB3nmcr6QBnmNTgfqS6VCFGK8vNuueyzLF1aB7dqgnhPj5xUxKNLBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rJQrVi9zMQm5ZCaYL4E7qaQKNe4BiqgcwhfEWZXqS9vGE5EbEVciEefEfM3yrpJs2DQPyQNBXxmLNtU4Hx2qZUc",
  "key1": "5cer5xysqbvTtdwNDus9KKvguYiLNFfK6jomknSTRWejd4av3FpxNxiPxTPH3uS2Lhhgn4cuLCjAPf7BJXpZpTR3",
  "key2": "25LXf41FEM8D85uEQi2mmHuz9qka1mBtKo5yGxcfQJobBgHpU5SjuvJxrXQUU1bc9BKvqm2NXoQXrj2ZGdpgZ1Rs",
  "key3": "gRGqjxYh4oaUtUCXobSWkArtccEpi25xhfs3Y2xChijCzzmtZbbDqvSwFULahTscqoF2iHDS33PzqQiztjYuYK2",
  "key4": "3GHJ3Fuxhmd3vERvaLVcaAaMF6qRM9FiDrawX9gjqurieoxb1jRiJVyPvtX47EB35qCKTDRPtM3eYpGqGH1rD7at",
  "key5": "3o7rGbNXERUugkZoQVuxrMouBNiKn8e8MybYERum9jiCioz2TRfATtwydGAkBZjEwTR4SMmj81xepBLB6tpp3A8R",
  "key6": "rfYTv8JwnbCtzuSHJwTh5hh6k1dL36RCAgSp9jNgQ8BBHPh9DKdMSaej6kCtBW88SB4mT1NAyyz9pxReVLeYRDk",
  "key7": "o7rb8K7wPxEn7bMLiCgEBXoR8i9tGSgWyeCLaraC48ECiRpVxSuqpZRp1DMCZE5t3sCQYzmrCtZ5iYPpg9S9eVF",
  "key8": "3RZnh6XG2EUhFLWSdrhEqSww6ycji1FzkraSu87M1WB368kuUqtvmhTjkzyk9x2LRwX8LVnzxhEsuj1qgHxx1xH3",
  "key9": "4b4W7aLJDEf2EnkX8tZXAeZrc3XWeMHUYum3DkkikKqTg2PnnAMWbAHyWsoi3gMtXnPBTxTRYxys8T5MCXap4mcn",
  "key10": "5n1Bci1VQzFbQ2N5ky25jy6vgZDd6wRfKRy9U8HC6rJEB2ecdqXn6nLNvTnZoFi8BeTTZpc92hQi95p5RE1ADNyW",
  "key11": "2HLDtWB3NjyAu5ZS8pjoTBSRENEBjQ7DsZzbPKs1g3Co99QvKjYMMAsJUWyBA6Gva7jY5gXuR1hcTYr1FW56hiw8",
  "key12": "29SxzQjZCHbafWuJFHsAVa38anCdt6JvXefChx6cZVMDBWGHs8JQeEEUVUWRVYQzvKJrxuzycBGnnxS8Au7Xvwmu",
  "key13": "3J5ryw44VnKWL7KAmBajPbNkoiwoxBt9m6KDnQhQEkYX85VSkQ1hDVBEubTBNg7Zgt9GbogfkquSdTz2Ajfs71eW",
  "key14": "5pB6mGDAsjnuduHNTqS5o2S4czLun8Y9V8mhw6TKR42dhmYQ8DU9gS9zdYeKGSL2kspR6Hh7kaubqBqBE4psvvce",
  "key15": "4D6vfTwJrauYoVGbhx9uyDzByzSUDUSrPaPeydTCKu1dDeaZAaP2CpLW2VmZCuyK7rNvZ7xdXq9CSa6r1tnEV1ug",
  "key16": "29CXiBT4iVGkkYQuHogJ9KzZQuowTsvWrBRKNZLQiZJAcjnBBBPGdqai2AzwXaDzMertxjgeKs3N2Wpo1WsiX2JZ",
  "key17": "JzrhAknT1Yzv3AyJHx25KRLhSHnxzdZorsg44zcCxyfRk61kM4kKKucdLPeL3JWFN9bp1iUFDqcLEJSqdauTkpy",
  "key18": "64LDtKCHctxhfFVEbs1mh3UaRqCyiKMZ39zgbqAbQ8VGPnQCrCgDrtWPQW4XRsJa4axEmehUWouiqTUpcGswk6rb",
  "key19": "2bnPh5WRpBTTG4Wm82jWzCykP3ShLAmVzAz1YsBwS9hqJAjXEdroGkYJ6VdrRXxtAAVcxadQtLuodzMWkvYjvsW5",
  "key20": "36iDbXUVRsi7A7AHbgbjGmDGAp7oA6dmtDswdMGZJYpEBneTqdH19fkYj6d1NEUKmpPRWcWee9KMshNQgSRqLukB",
  "key21": "EXyCePqGcNe9F2Vt47f91d1L5wSZnmCR3kHN9hVXoiZptrTP6JUCW2XvQxBJfT6C8xpVYVPsXK4WVFFMNVods6G",
  "key22": "zUUjywN51QMNWG6ZkwUESuKfxqwLsmRfZPkgn9qS1e9czuCxL819h4EJZ9RvgEKzWH9VxXv1tsM5NcGwwaQFV8F",
  "key23": "53GgTCTvY3TMxtrB5WJN7NASX8QVgSVm1SUwfW4mobmSLnAW4jo46m15QPtMUtAT16Wp1MGqUXZyY6ZenDvfKDyr",
  "key24": "3sjqyk1NVYpMh78VH9bAVLJbsNShXtjvCs49ezJTLCfXpDWvfxe49d6t2v9RD3aHhY66zYTMp96L9BwPQwkNCehD",
  "key25": "22F8TU6MuskqmqdE2doFXYhdym9ztbeZxYfsLe48ZEzxEbsDzWDHgP3FLU6gYU1StCeBhv3YDf8RdnW1Ys3eyTxQ",
  "key26": "2SWFhMmgascX6KZBXJ4PLBtuekTr6CaD8XYNE11SGy8eiMmNwVkrxcFQFADcJKQtXe2qrbGwHhT13mi3uUeqzUNi",
  "key27": "g8UZEnk16BJRF7ToTVK9GJBmALs4Mg4b6izrJxidqFSEFD357He4V4JuxBTQEBkw5kB4nhZSx9tWJTiXEgwUtru",
  "key28": "4PQsdqJKeGhPS1GZgDi656aPpkvtdSrMm2TX9HM4DW9bQL5yaMWw6Gujdkk8S6PnwXTf8g5u3uM5CxfYXo4jhBAA",
  "key29": "4X4zM5LVEBtbH3kRc6R2t3PoQBxqD61VcgRe1qLJhLY5CnubVA9u1dy5WJK82h7uuTafDwEC8kUC5A6k9LM7hGno",
  "key30": "uTfwGxGoGrpnS4anvEuHjMVWVXFewTkNEkRUAJSdrd7WbMZRa9ZqKZGJakXUbAhnArkFryoSDRH85QmJYjousVk"
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
