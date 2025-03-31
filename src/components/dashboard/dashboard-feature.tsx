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
    "3NymrWt6BCrq1fDaTNxjzjgxXqevLZ111y6gEdeTwzK9HQR74ekrNcrfQEHYtXZEDhroGR1quvXXUb6zi3RWMahg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJAVgPQNvhRZw9862oMQMpZUZ7Qew3x8umUNPDEsUpWfUsH4h63vjVtpBg34KkG9LctRieNq2zurhquN5agysxC",
  "key1": "5mVdNQ4TpUCCjFuiSYETs12NWYaveWzXZRKJ6GMHgGhN8bwo3EvvCN97RHe8rUkAgZgqhtFKPJupTvodStqxvvth",
  "key2": "4ioresUnozn7Kfk838nnF4SFX2ieDf7AW6bfDusXxo9uqmeAfhSYMQXhBH1cPR2PDo9RqAyMvwCqtrLfJ3riQ1iL",
  "key3": "2J51NaqnjB8HjenMwjDoi23gMVQnWF1BpJKkweNhu4uzRRZ2wJxq3568mwVGxqBTaLhQqgJ4pmvtMTEafGt6rvKc",
  "key4": "46rgcG9pbsjimd8AQuEbFPV88LnSMspeDBf1jaTko3CHhhvo6vJuaxHTP7qhMFLe4vzH6igMACrsPdjZsvS9BAcM",
  "key5": "JXAYsTNFBD3bnmE1vF1nbWXgWeaXuYw2qSFQJ3kvao8LkncMBszefmpJeZ6s6PqJH9saimYsfAawyuAeR2AfZWu",
  "key6": "3A6ekKpk5zCnkKKmeVvNqq2DUDMyuEp2YwRGyTVNRPERVxcgeb6vPXkoWsPXRRaVjmP7dzmL9PMJ2H3Q4cLmpnuv",
  "key7": "46mrUZCL61ncRPg5C2LkyFhLauCrwSRo72K22Qg8qQym5NJHteEFijT55dVN8xQuxvPCQ7AxLfhsbf2XbqqUs5TQ",
  "key8": "3tfgj1Aj6YunsVg1FsyaS96chpc62wzFc8RjR6aaahHGYVZNRQBKAMuXN7STKVfpxzHyMWxTWuu77PVNciZ2w9JH",
  "key9": "5NquoskoTeeP5sckgL9WMarcyscumiMbNGzVLHsqd1otmbZAFicsr4hHz763yGCdWAmv4zvjVZTKM7BdG4Dkt5E7",
  "key10": "4zUARXc7gMScPHH7JyrDzYEaCiivJk8YFxoQET4uhBbeeA4kocS7fxE6nA5YAGLtKcZzMkbAmBGojGxrfWYb6Fe",
  "key11": "4zaMH1egPJkhTS5Mm3WnGaRBzGbxPgFV2BcRtJ2bSw9opsLYRfkxbmMadMmkLbR3aedzk1EoCfdXnat75MWuqrrt",
  "key12": "37o1tZXUS998yBgngY94TqUgV1a1rhtveHkxAXDbc2AspRFxeLgfNzy2DBMc5xUuvctwoNkhwj7qaTrkNgZt8j9z",
  "key13": "4dC4CfZn8cFxAE3MJUBxH2wQDi9HmzS2fY3QzNMjVYBJTNTpm5rrCYtzqSUYry6LSo28LuTUhpE1eAbBpkpiEWXi",
  "key14": "WScoxUv7rGvtWZFb21SvaaoLDLzBcZ2EB4H7DXsb8PMxhufWP8YBuDWt9KSutJnwfFxHrG9EbQi9XmXDaqWHaaZ",
  "key15": "3ofRTmo3mQXHPkaSA3bMi7B5VtNnFszA5wCtC4wNMHaQ9XTrh3DpfdcFh1d8pe3JuGtNW86Aor6PvP8jTZgeAvss",
  "key16": "5pfr2x7vDnFHxdEjPb54yTkafmDhuPogDtQcR3DQuqkeBz8cTvkne46h4cGqHQ9NL5YTVx9mLexaeRcncbTyt1YL",
  "key17": "5RbyTpn6SVJQiBQREMr5R9SHkda5c8miLd1zXqDceKFDvTBimWD39byK7aVRFvncqub1iriqGN8sjXy5P9DbATiF",
  "key18": "4RmA2wTUxsBCdm83voyJSA2Gx3TEB8ETPgskNX3VSskiskTAjdBdBba7AfximQ4c6f4rMF9ZmK5eEPDRjeVzafJ4",
  "key19": "3YePkoVZRaTKqPUhqWgBSqsvLQBeFztc2sSVueW1YS4jpyo5nZhFQrcNhjUEbBnbKLQtoRrbXXhvBMndR1z7PvZY",
  "key20": "3LpjESv6yP9fyb8Xst6zN448qy3SsKn6zxDfhft5SfTQm1xGPtTsFzCW25gPXztov9DqHpPT6fbGz4C8zhZGyKn3",
  "key21": "2fe1NuQ5Jy99gwGhdznt39J2jjzqW99SZpv6Fjq7u6zpAqZYdbz87WZoDZAYTiNpEvWohyfjUiA1VNaP1QqmaVX3",
  "key22": "3CAwT3ovrjwXJ9qN1VTnE1x9GKwRa1wgdfKn6HJqqqJUxmT7GfymDdK1qeu3GakaC4wDP2oJjgGGNfDhyU9SgAbz",
  "key23": "234RTgDQdyhs1NCNazkLxGcsAhAtDeNDjJRwAq5cqC7mEX8Rgv3EZb55z9nrF7WQCswi8JWAaShJUtR23agqcAeo",
  "key24": "4JBZ3mNk2CynrzeTUn7op6mxeC9915t8zhoKn1eKHgVk6JpvY4mp8rhsEptREtpgFDhCN5SAyyBkG5RbNwSLV6Gz",
  "key25": "5eiZTYXM8Mk9NDuLJvHER7122Nf9QATKCh2ksePhXMkfwNNpcuHGeKVHpmgf5rBNrPzQyCrqyeLMSYQv8Xo9m3M7",
  "key26": "3HKbF1eBHDw8MydToYWi6XCp4PCwXPi6YkvPzLTS7kpnu9JQdsCe15fNRDoSuYgvLbwy4phikQi4ai2FqNh68iKV",
  "key27": "3gPrJ6BU7akZgakV2evWzXuaQ6KKRyENmGM7RuFJcYy3MCaN91V22ZP8cDWCEpe5QbAoRMXAJXFbgazQWZZ5qWSP",
  "key28": "2PbaXtLYhEirPCGUPwd9mvHB8kSyNpgmJWipFbx3NqKSMUE1nXGzeEyZMdyS3UCWhqi5z8pU6xDav8nLpDh6NZ2",
  "key29": "BZMShhC7ko5RhSzeouHh2HKTBtEW32NJAmHhZeK3zY1JGhPciPQR6Z48abdL1itPy6bjqW6Skumu3Awx94GysJF",
  "key30": "3jYYpV4fFhQuhRpnZsbpBuTMcViwhrP5Vszwh8cgLo5hbbkWARnKaikuEZeDVgQgnrWHJn1nCBwM8oTRE3Ppvaua",
  "key31": "fxM4dBr82xpsXfjYHL3Vy1TbkCajsJJbrF63S9muTqBkw6pcW4JSrXxQqutrEJcijN49cPjsAJWQxVeVXjbsJoY",
  "key32": "z4VMm3hK9wGBU455vcbxBNseidZpdtDX87gVEjufkcnuDE7WFj662iYUxW4brDQchUZh5c7JJJeXjaM2vv3ybJs",
  "key33": "3BCpRvEpZxDrQrz9KQDtrHGY1MPbLSm5UrFLQCLff9SenE2NmpBXNDyKSq2YaXYUvhtSQ2e8oJHtcAHiHGDKWQpF",
  "key34": "5Ln5u8T6kfir9tLqnb7xheBLkBkynrT9JVwtzemJT7JxTbisRTp2bdBEn8JfP84Q4n3Lm6dotFv4EeftotUAkkP6",
  "key35": "4PvH4Cm7ivuQVQsU9ThpJ9Ky4emSGM2qKo7BJCp8YcY4fQbq5VmCnGNjkaQJy5HbykPxzWsmQE6ithTQHEgm7iJs",
  "key36": "qgRqK2uZzpogcgKhg7RECFbjTQkaGpDxSZE1HP58coCngxJ2w46VHPpsKeGufPd25FDXpAq7Qcyn6uCUedD1bax",
  "key37": "2MDzcW6ecous15B34PGkhw3sgwQw7WFJwBEzKcsHrLD2VGTiQg5Q3BJMrWK6PGhQQU8XjcD4ddynBnZ46hPmvsyU"
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
