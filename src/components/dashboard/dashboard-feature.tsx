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
    "51KL1Yiqv5kqoyGDat4jKz1STjZR3tcywhLQkgadAYymeC9oSydK9xgHfhpzkMn8gNjTgCPML7wcWDcnm8Yi8BD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u8SU2GehFt6azPxajuzi6JHp7L81xA44JYGVc4j51vGHe3xDv5y15LZqaQvrShZswhNkj3PM21vygNisK6eg8RM",
  "key1": "3AnM7UG9GsDQCRLbPrM6jaYd9M16wuFHopRV5UEHjLdiQyzj9pRJ4jRrF2pJ9AXgWppiqvXyUoRn2XreFsgc2YQn",
  "key2": "Nk1K2meDL4WXznZ1HKJofGj86BjYDTwc8bVTLMLhpx6rZSNxsSRg72oyUr2MAVBufHYNEduAzbUW6hNDZEMqsyY",
  "key3": "nyyi1LUqAmGEzxhX7wD5yQVLXm1P82yqFtXX6Ba5ES7WrVS5WsGi78dbk4xVu244iPs2D8Q1YPfgA7637cJsA6Q",
  "key4": "3QqHs4vrqm27aCkrtg2Kowq4YJhdFzstUEGDY43sUT6DisodtHGdyS7M4MgqXqBjFXYQsPKMiQu6CiUFpFmL1RDh",
  "key5": "4ULt4sgKRyZKtWDTpT9Zuj69kN3z4hTdNEEfJjotZgBUsXhw3cPKymjitbnNhV1VgzMd6tCpwzaBba3ND1TpoZ96",
  "key6": "4PB9fCG3Q5vJH3DiZFb1j9YV1oGWa17KvdemQVya3Ai6qWqHMZXKaT54V1rzpufV6CRpY7sLrghp7Wuf9g4mTJ55",
  "key7": "JGaAVLNfh4R5NjVbLXpFXBx74eowkBaF1EN7ev7uLkvEVg8ZqTY23C12aXPhvqgqgrdzqgAT7ykFKYvcAJ4y6jU",
  "key8": "28iT37fRgRpiVNWmDfFyzkfgKVFv27ATnShNHn1bRvNPkjPL4281XYwpAEFuayrLWoin56USVBPivsC8ympRuLiR",
  "key9": "5GzDZ9c4TwM4N873RtnwXmqNSLnbLJMvRMJEAWUMaNAfWudwFmJ8jpmxEbtkW9e5ayjFJYuJC4X8NV4CYwyjhWr9",
  "key10": "2F5hyczsKoKqxkw4fpSH1LBJHxBefy1LPNq6uQChXGur5Ykqe2Dboc7UDrJGkQv7epvMJCt8Uzu1Usn6KkQvuHNG",
  "key11": "49Y1kGwnWTrMBtuZyTTn6t76CDG6AjA3jFwvSFC6dTfVqNssX9MtECmJW7QHRCShvHWPdDM6mhWD9qaqQsTLF46K",
  "key12": "FCrKrKkx8VFS4GHTzSeeywJfFPtfPUmsEzsPZH6kHHgZtxho3mYbdxJnkr7e4GMfUNdZsz46wDyqkpXK4Fq8Nis",
  "key13": "c65fCcsDfDzbadd91sbUMCfJdp8PXWQbVivgY5LchmqjrGPJmvditZykYmgatCJqnaZ1UXnPtHZq4cok3tjrqB4",
  "key14": "4QqrkxiyWyyhBB6aA83fR8c3xdboDNRpzoymH4rM3UL4NTf2qTBq9WRQEzgo4VjVZUv8Y8CPR1imsXCAKM2PjTyy",
  "key15": "2ZYYqGuk2kaxFdLucK6cxD8jH3iV6Da34aBgGbjQhSMMKiSCFDXyRx2grrVkLP1Yj1i2mD1jJiSeKtpz1wsKMQfJ",
  "key16": "VhBodcZ6cGXFHhG3KKz6tCJ1uKbyfc8ANM1AApu5W3QrUQGMH9W6HyNZNarZuVE6mQ4kYvASsDZTXKMoxYwuQhW",
  "key17": "PrQDkWoTNcaCoGLHpsTFWsYLzse93WBUGuop9gkiNFVtBujwyTvqtNDhr9ot471biHtXRpeE2uCoii6qLFD6Q6c",
  "key18": "5vRkE4BYXVeP3krGbnhDwqb9QLPHZ3hU2rPx5RyDR33jTS6hE4Rtpr4rFzKWRUWB66s9VsUe4y4Cy8Rdd3PAo2Gs",
  "key19": "2DuuTgJbeJwkgD5JivTV257xXpM2GKP8HcYeoqaYjDmtsuEuw31NyMxHPLjgZJvbdSmXRq4Jox9mAD85rvL3eF1L",
  "key20": "YX6AVaK4MjVRcx4BDsZ6hPVZuFy17QuQHA3J7dsND2uZrzP3jxmqHGWHoJ32qSRh3CTPge4fCbwGwqmTgcXs1M5",
  "key21": "2Xd5EuXFwVdgod87gXmPfu5Mofp7XkAASSPpknyuD1wf6pukWa5KvuQyKvFw4me8cmWs7MfR2daxt7oHqyAUqRUJ",
  "key22": "4fuPVKwd4cHoj3gHpN7PddLr3houy2RkBpCQejr6wf4PGpSggKQ8hV4JLa6iM8KNR9zYmNknE5nNnH4acHXjj9LC",
  "key23": "3MszMSUNe7oG8pshZYD5eTvqKboMJieZykZUTuM4AZybtww9HkiPTzSoTSfk1G8PRpbNeoAMNQEcxY6njsEuJ8iK",
  "key24": "5pC4rNfHvt54emJW1eTYxHjMarggeNjpyMmZiwg4FGQGF4pAS1zHJiMqGSVabsi3LzfC8Tdq48B2LpDLWjMfW4QS",
  "key25": "3ZEZyQeKM6TdrsUo66kuBfxARkB5hSRZ4eYW1Nqx2jxdQ8K9vSQJLmzZp5yqgAfFR3zcR9QXmkYoKAuftma8K2dQ",
  "key26": "rBRGPdeUnrLxWuQrrdSD2GmKpkVV4eg3vNJ3LgnZUmdirsUXkkxaKt8DDW6MNyRFSMKKM9VqECU8T6pEKTLUhB1",
  "key27": "2Yk9cMS4Ko5R5SG3vrPyRhcNZChf9uRGEzV6VpeFPK2xpwmWpnpEcw2G5N3gHS7YnY8MjmgXCqqpQ4ijoxCYjpQH",
  "key28": "3tBZcdz5anU9wP87MsFiQbbmJW5KxA13sxmg8H5rjXg4iPGJZwfuvGdzyXmcZjMMt8r44nRJ6RWNqyra2GvFX9tD",
  "key29": "2Kdc4EUxxhg3VeE4pqcW2iMAScioYs4oN9Gf16CrKqDWhq4q3b6JSqBkmZ9Zg1qovdhgAdZxWdK95G7E3XQpngee",
  "key30": "2zST3Y9E15d8r82Vnui8UHrB3zmmK9ZjtXyAAh9zK9vDkC76jpJpLrBopYCAftB4yRYR8wFjEgFKyU4wwpZyqL4D"
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
