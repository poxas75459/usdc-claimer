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
    "5XdYNXG2ALm64eX375q6G6nWhxzR3skpmE4pvuJ9iqtLaN7RL7Dj1Uv3mJFw9AU1C2XPTaDTCVEp2o8jaEB4VWXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vy54fgqTdf6V1fsdGVUUcZvjNnwAscjq731HKEjzkwg1iSehtqi9uZXNrEEs2ChHTU5J8xwpnjWuhmYVB6qXHAD",
  "key1": "xen1EacALUH1TUq8ZD5KXnk1TAQsftMcU5qWyNyTVfED8AEM2wNVW4YdZ53fuyk8fnCek2xaRdmBJH5jZuEN4gc",
  "key2": "35E3C4cYEAeY2EpaCLMUp65vo3ZYV288m8FL8WaeJCWgBnuptLKemTqsTLyoMavyabnPUStKQ7kvx7ZpDnZwbJFJ",
  "key3": "5Aquv1vN9JBT5eqgjTC1wod92aACTw5ffTS8ydK8bZptNcQTasoBPa9aduabD7nUrqSB4YhFBMBiYobgMJuUakSv",
  "key4": "5bxwHCDtuP9FagbmukNrBHQqyEwPiZTQw5ZKNEfVohtZZ6gsJZgWgmnzzKrpxX2m9bEjLCZUtRjkZXTrrmMu6pLR",
  "key5": "pVu6V2wmQ6v6fPh3qxumSYT96awhniNoAKV5FNGMvUbbFsH7cXHNY42sba35fviai1MCgb2VVBG7K4sXDCRjXeo",
  "key6": "2yN3h8s81ENGWUSCejdAPKrRZ6hrRnr4ud5cK8ALCfoZwGHtsPRknrEvtGCGMAKXNQXHPGg2X8i9S64Bpue5Uozw",
  "key7": "5EGiGUQeJA8WekYMSqXrzYkMvG5knqMKvV5tA4U2X69TKR8ceUqaHUCExcLfDDbx5BLvpbEsZm2YpX9LjfCGhr89",
  "key8": "2e13xRHckWZz41K6WB3fL5mGcjwRGsJnv6vHBuq2dC4vBxZ4v9cdq3CFMDhtBpiGMfEhUwyJFhGXEGdj6ZH3xGDv",
  "key9": "5xk7NNPJhNshWNh6nzj82ZgtvAB55BRHXcs82DZJhjuxzE1aBBMATvGsykVnhoSBNkDY9CxAVrgBAerqwk1V2j1g",
  "key10": "5ZBPbi4RNW1VqppsetQgxmSaVUEb4mPmRfRUK3pywEwRidZL3fECeBzsDDmv3aWqBAbS2cHh2TCw4cb2st6TYmNF",
  "key11": "3KjFykvxzThhLfD5e1XKrcy2wd6kXrSaZ5XMeL6qTS2bKXXW3xcJy2yLb7zQ1f7oPo4BDoKscJbqgWarR4nTeC4Q",
  "key12": "MGqfhxf1EyuSSyoSK7anPsyZB68CV1vSLzL5uGa7tZM1VDW4jgfQHbHhavpTJ6pRBDpfbZ23gEkPjQZu9ALzdmf",
  "key13": "ockUBeQXhwc2ESMAkepWpMCHC1qahhVS6Tixa1skcjQyxUp8jPm72qk51tKwauoLJozBgUFwnBf9LVFmdTN4Jkt",
  "key14": "4BV1PmhHKc2Jqn8aUKbG8tCKd9VSNeJbhGrC82QCFgmH7wV34Z252epXPXbLGhrCvA9zieQVEwDkURWYFTPwADne",
  "key15": "642hYTLkBQsMNLmVwjx9TmWVDgx2bGhAVK2hChKHNGoLogKY9e1vgECyx4772UHfsWgnZF6SJuar6CtBfki6KyMX",
  "key16": "5JawhJT7LEXuRmdYXAfqdgRvNs5rJz6B46QaHvV2NF4WYVzVZ2mpXYUWd8eKCZi92vJ2NA1ScfTY1Q7SBY3Ly92Q",
  "key17": "4LWPXXJddxevonWwWZBSyqrkcRVKkXsBJSZUB4vF8vY7ghju1NhHcPm8HLAVJQL3ee3gRJejAGsDGcdNHFXsW9Jg",
  "key18": "4ocGQFjEjuHppmSYz32UmEovKViigJUXCsE4xmk71UQu7vbHn1wwz1FihoiYw91vAUkfPjoYNAa86x9Zw9Bcsm39",
  "key19": "2djm7Gj3Rsd52PEDUxJ9DJ75MshQ7Z8MswBt7figCDCodvqb4gqHCi95hbTmF3MRraTNvCsXPMY8M6bYfB9H4L8i",
  "key20": "aJHMYYzXGaMu1Ch9Z9j8mAs3CkoVvbwUn3FQPK4rmSLNcesaeEYwnrqbx4diceBTSJNaUvPuPQsPWi1kSY9dLbY",
  "key21": "2Pu4GBZHmbqEz6dfossQVzbpezpTgs5ZWkFTY38XEuQusri78oLoGJ7ACEBnU2tQtwfnYKEDaaVa1cVCozmNrwEh",
  "key22": "4ZMMBJkECaUgGbDvhun4oBB9FGfdPaV8ycnitf8vng1v4Xs6ocJyzJkMNZtGmAtKhBLrwA92EGY6uvgu9n52Acjt",
  "key23": "4iNqDpb18i33D7AFECEtKxoRrvqEYjqbbyuEBjt4dRHXi7hoeoJa4HakeJq3Y9nkjB8w8NQht7QTqsdEhra8p9Fu",
  "key24": "2eLru4zdNw59z1hcYN56C8zmWMGwqahkSdEiWMpDjs9xdeTbRMGqdoRSGdFZVxbpLx9rzrec4Z9g3sRzaR3ZqKgK",
  "key25": "4baEBmQPVtYtwS17Ztt4EpnBQjkxkna6zZn3vEVQbGNkFx22kRrRq9jxPxsy9N9oa8Jui2bdMTJTpgjJmB3qkBK8",
  "key26": "vCd7mdxggBnEhmVRVJy48S8hReugb4RmXrRb9MEQ5GgS1qX64J6eBprCivh7rQHpW4sdkmUggVkfF35wnuu8NQq",
  "key27": "5NDqaAA23UvE4hvySJiaTCtvjHWyyywayDpG1ddghpizUbvYN8UtBjznnCnVhERA8oZt2p6KAfBhpZYLV7tRomUb",
  "key28": "4CMyuT9WWBgQkFKkRTT5f2TrxzY3k3vGkdM6EWyq6pVV4jsu9iKwKNwg1b9U4q47FgGQQ6sCAfjjxXrJszHrXQCS",
  "key29": "4dcv1mEqeYwkunNEGPsLLRy8q2pp5VXfRaMzFpCYfAyrMYLPosHeWuyMDgjMmrmMHvJd1VNqDxeYppMHkH7xtviT",
  "key30": "2xyremoiVmEcoaDQqBXN1zcMY1NZmMnXac5ag214tqVda7xFYfJnPA5Abke94wrxbCtUf9iQ69RRou5Jm6EeYo7A",
  "key31": "4QjEn183zC3EgSa3oNnGbx2cwBo2Gc3zR3ZerEetBjKnQmcY6ijfYxxEyfY2Egju4FpL2SEPR4oFYfSzFNHijvep",
  "key32": "5VoVQD6j5k2eu3ZiDUCqHStw96W1Aix5527EwsbnFnLFhzWsmMpTknDh7vyDFJ6voa7VCScyZRmnmd4HyhZ3SxuF"
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
