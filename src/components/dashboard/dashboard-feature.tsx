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
    "2X7hmRSX9VoTTteuz2S671MCfNit9mkpiDo2FuviCoNYVjS3UicjR2FXwDAXL36wR5mnFAp6CKyRszdtwT1x9b8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Pqxdg1TnkiLjdTBND5v24DwHeWj8nSr3YUn3gds5mXokAdLHdfnV6i7gYsx3yfugXwFgDjHX1W1TgkkiNAQLTa",
  "key1": "2h5RquDkHzrEZGDmBfcAoTCbDVsAP1UiQmiD8LVoJk3y5wNrGxvcShzYG8o26e83f6WQwzXepgG6uEbuSa9YiCVt",
  "key2": "2f6zC79Htb5sQ4P4nbbaL9mfnDHXPjSsqHyna9bm8G8KxvjtxKiuwtH17i3tb83opshm7h8GKaza6YrdmxyoGPTL",
  "key3": "5dWcj6Uw2XJ5CTeodanBsfF5omGvoXw4pXiAkMe6BnxB2bpbr4oLD7YRDXD72TXgYSqYxnTDReH2KsZ7ZpjbJqxV",
  "key4": "63NA7fR1sXedjqRkUv8BMXnM4ne53FKNQoD1JyondsQAZU68gobhUDJR2M514Q6Lyzv3aWuTkaaxfKaKVpv5Zsk8",
  "key5": "5f13gC9NUyw1JfBB51utUjgPpMdZb9a9wsKf6CdtiibSdSPsvZ3Hppygno3a6CjyYDN3J4R6Dsd7BNWegNcxuroJ",
  "key6": "5VVJPpc8VoW6Gm2iJpKfAazk7PJBpiMQjYEjeQ8ZU4Jg5CoCMkHQDRvmKitx9MmuLwaYJADTcWVAjfdX5LsUvPsi",
  "key7": "5pVm5uGwLMsQi8AEYn3umBMyfHdbfxXbHDKdka4zcxVEi2rBgYwsFup1L6sgGvUUZQF3XnxWoLUct358NnUtqWXs",
  "key8": "4vHAFFHwE7Z3PVNz7fUgmpskVQGSmwkGw4JhLQYrBTXMoxWo6k6LCtY7o8SauuyoGLfLsMxnw3dRHaVAtuEpv5WA",
  "key9": "5EFpmQ5EkHegnEWLTUuj4y3T3NBV99N2yRpJFZKpCDZxHeankrprZdBxSiqcFRKBniK51UngqkVvqLbChN91ud1x",
  "key10": "2PTvjSTRfop5XdWsMWoiAPrqrc7H6LnR7yByqG1Azmuz9NG1VABYUYXFtJyVa5KFpBMbefzFe5df3taKi9Nh8h5",
  "key11": "YZJJ4PLRmrmiChC9DshugPKq6Qg1VVJ7RCPeWnAc2ZYTCSao5GtbrJgWfz3qVxgjYfXYdVuCu3mjxCwZPhMydGR",
  "key12": "C4tWaP5ScA4FsizEhqmbmfZWMdxHn4wovFwt92Gax58eoPHDkf16CpYcs6VKyFnjhJY61SPZD7MzsNzZaKRw5cx",
  "key13": "4KHwaJCxUqY27899tSHg7jy48twmkYKcsUXRnLqMxhdGTtiU82SkhsMb2LvREmmUXV3TXVU7eKGxeHcvoQQQMupL",
  "key14": "5Ggkn6892XzejA5k57EnrFA8kzNPSHcKJ7DQv7kFxhES4bdCSyv3CuaVoXZxsoWFE6PaZyWHb2jwEbViXxV9b6Mz",
  "key15": "2pChewJwCRQPZP2QkYQg1M9XLYipGk5HKMTEd9ST6jri4H2u5U7uWzFMhfkusNADhaNdR5y7ThrZVLZnJ4ViMtTX",
  "key16": "4cPh6emmpUZynFAJ6mneNUNpJRnMeCXfuhoEWiAmUSom2Re2Wer1Xa3iioAwTXHUTXkuei6e5nqFYT2ZjrRSp9Wy",
  "key17": "36JM9LLXUi18PKh8BUfuqN7LtLoWqgwgmyEcXioLRErnudg4BKs4vWpGWKKUDrdvoJAPE4YSbze6dMnmPXzDHjWo",
  "key18": "2bgfJrgCniWhw14nT6nvqYXmhuEPBzrZx622ffz9hFHTcN3yGN8LF8LgDdthviPeUdnjoRMZczxf8VZGSUGKQ3Ck",
  "key19": "4UDe7CkBzTuitSjiTAdywm9nsWtpNQmh9Ch6ktyNe9RYgHYAsx82MsG9z7agY9QdwE36nzJiDsHg3QMk7zNkUo9e",
  "key20": "3n6fRk7SKj23CG7976zSAzPck4JWT1wHGK1gaGC1qi4kb5r1cF7wDTCvfJxkXupvXgneCijjsaFNcFVJJK3k9bSB",
  "key21": "J4g3it7gneDcL5e2meyr9GTeR43RZybnxeJhmn9f5TqXKA2rrGRyszgWjFtMmB1B4JcWXTimB75gsDoYGT12zXz",
  "key22": "644jWnKJxg28Rfm1prCuJ6yfyffmddE22Ncq1M3PWCtrEJ3UKDsH38KvJxFdeomhS9CkFPLQAwQRcSEVUqMderB3",
  "key23": "54J5nBZKmuE2vrCGfaFrv2yq9CPk54W2SS2rH7oqix3TN1Pt73reojrkY5fRECsWrzNdWGmPu73izfzvF2YfoYNS",
  "key24": "5uMfuHZTFS5mwi2WNtv7GK7CxjJfhmgjmpxFVdFhApcC9tGzFb2eKerbs83zvoXyNT4dYHuAAQw7fh5fHpe1ZPdx",
  "key25": "2STfcbMQeEiMCd86e6xaNVjwi8Z5AdKJegTDSNdCjqo2TV8JuKgbKmYhFQmQ5bpFZRKq5APpc6jEBhBtZCoxAF37",
  "key26": "BrtvYD9hCEyzMzRkm98QWZib6X2L5atfeKwGbyziwG9PA4fpAnshf3k6wJgSprAJtzpya71LRpsNkoe2ty2J6xs",
  "key27": "oSWk2KRhWN7r1uUGq1maQKc78ufojQ1Lo5qzo3AkNP27gHeVvZmiUFZb7HxZ9pX8Qyd9zoPfxXTQvUpkrGHoseP",
  "key28": "5qt63jDmrmgurgLU7qXZZQUbVWAPjfPspPMQ5genGrjJCWFVUWzTSLkwdWP9LMLSxCcVMwB9WXVx55qA6WcHEDa4",
  "key29": "4ectVZPR6P5gTeBzNhTVrwXj1d59NrofHtmPrMuPwn5rF5vtnQnUB1QhRGvZwwQao6Bkm8r4PXdNmVBSyyBuDNvh",
  "key30": "2H5piJ3w4eh2d3zmxYcVDz6HyDVKkrRh9jE1q27pV3uofC8NmM4Aw4cP4UMWshYtLppkxqgqakMHkCKxGnDrWd6A",
  "key31": "23JmVKszj9EDe2UQz1Ed17znf5dHaPhrCVrLvLgifh3FQGZF9Lq3efJD4QNuQRJg9XNw6ekQrjvLWJig8eafKXx7"
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
