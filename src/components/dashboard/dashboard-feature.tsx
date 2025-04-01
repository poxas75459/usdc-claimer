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
    "56Ebx2QHq82ksrppqiNMTuvfphJri9eJEX1PKBAymcH5agjxj5iamnyN9W2WUkRMJgnSYnuqd9MSNhc9LXPteBTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ca6CpMFDDCNMw3RJ8e6oYfGXUFyfp54wPbBuyiF3m6PHQx3sWkXR1eoiToEQ6EPmkUJzpDPHs4iv3PiNnsRy64q",
  "key1": "2rr7wjpRsYKrLF77XSWrkxUwTzsH6tQkct7xAADD5rZV4PQRjzANdkpYRDpKASXr8kvP5QvtadvFFEENaYTVWyKb",
  "key2": "2AdQHWQYAHRSbqS3rPXEaRMbQntM83EyMMFpqhkw2whsfmeKwu8rdGJGX6TbTGFiDivmxGdzRDQeaNLiQivsTqap",
  "key3": "Z3vnE36tHjyoXXmGvcW4dE5Q4HCXkYGU71DUNn6FBzY7Qt3UC9eSQHMvwfBup6tEZkk58TdJADKNMVfULywTw8W",
  "key4": "3ZM67M3c7965vyMTSNFQNki5w1zY29j5LxRS2rhNaU68hUp52HiPEuniZzmVqyoJMKJZoiaVzmJy65A48ma1JSTg",
  "key5": "2QJ8Wdzqmbci44829iAFVL5Sh4yKt6CxQhhiDs3f89Fq4Pbo75K2EvyGavsJmjQKn96M9Q6PeDSr6t4kxE4fyRAg",
  "key6": "4ALsoWVEK1UFGbSf5VnDM3he8EmYuZGMquY2MgSbzerXb3zxDqQfQP2K7oaaFTBSC8bQ5SQh6P8yZnhu5u2M6Mqi",
  "key7": "bBJADQV8nj5xwtjgoGaiQgPq7DSL3f6R3i3PLdx9iUaW68YeGauFkaj4K8X2d42a72Uq6BUpsVc6gt7rbNLuWV5",
  "key8": "4bpSuDBu6G6oWrCkZ5tiESti26KC3UPaWgbnsgtBjah48rS3zjW362swgx4PtJQimHSri4dKJFTJQHataNjNivz3",
  "key9": "4f8y3Sd5x29c2TnZ5UhehdDuJfCGuW8Ccb5HyDW4LYSyEUNGqna8PMdfNgRrUCFj3291iuS1uSu4rGWwjbNEbQjF",
  "key10": "2QmJC781egLoS4H95XXbkDHBCc2bMhdTtX224Ea7U6nEXCu5NGroLDpMmwCa8gd9HxQbmC17b5Fms7mbnn21ZjdJ",
  "key11": "5kezo8kq5AjCmj7nvivcHrVB5S1SVgybqVeNGC7pbUVwW1dUQvV29reqKuBuvXQ2GGoJV53AYzGu4Aqj5Sr3v8mK",
  "key12": "Rfgf6WcYEQoafWdj4TQT35c42grXK6MHKTWdWc3AzUGDM7DcDYPrE9PhRZbUoV5w66ahDYuGU8nbgEQPUA1BmrW",
  "key13": "ysWvqiBmBZxgsbDiqcNUDyfJQYPp1JeXeRDJc2rWaBC3gubKBiZth8EkjXLhwAtLPQeTRb5rv1wxhbAym4oq21c",
  "key14": "4ymeHo7hsCrs8FjF4QK6qXZGMyovbC74mvwj4QvNavrQ7k71R7yBRfPvtqDGrBvRax1Kzb6kQjft7GxGz9mR5wCR",
  "key15": "4hxbkkmL8Trqu3Du9t2sg2Z4LYKMx74yUJqYxUX7xosVE9KiJJvhvRa6idsUrL4RF33tWj22we3s9u4w43KSz4DV",
  "key16": "4fMcUZAJfHavsK3PwWRr9H1hPRPRL14tjDJ4Aszo28JEuHdGRvdHEtWvcqbfxXYvf22HBCXKs3gdH7Y3VmkjGsPK",
  "key17": "67fQj8hkgJ77M4p2Wdosh8kagxod9dFhiFrSoxVs8FaN7X7tUduJudud8VhcVM3oeX2LNyb2c9gXHFEYhmQPuwZK",
  "key18": "2GnrvKKeYNAnnt45gTmfWmiZS2EKSTHSf3Tchy6ByhrcFViK9fMAeTtFnx2pHWoRDsSFsME9tA6mTCinNXA9G4n2",
  "key19": "3mykfJXQqzSYwQ6hMSM9GrGYQuujwDhWAAFiHCQ2WhZLVHSTAUnDVhNcHeM35EfmfdE5wJqEUQKxqsZgFRj7euj9",
  "key20": "2svJB7tEvR7seoEvWgkjwxUp91euUtvfHJwbk4W8fNqnTpEePuPpepW6HeU89cecLowv27Q4kh95aGfJQ7NA6HiU",
  "key21": "4CjVQ2ar1AT5pbm9sR2E333ZjXcimLMVRUtoXDCCPipKwomkK7HzWFnvAWHTbVGw6FdwEAbbSqNMdbaUJ1m5TRyT",
  "key22": "yBHN29bAfdVrXRJ2qduyhtQB92oY1mjq5RFoY1ZotxoUjvRhUqfHEp5HktSAB4wtFiAutCqkZFJsvCUaPj7LTXM",
  "key23": "4FpwinvpqMmv1uQtGw5KmPpCXygCQbgHKyq6fmt4UiypNFEbuCramCz6SxN93Uu7RoaodE9YPkv3ohGQDHjv3AAp",
  "key24": "6GBgAtZqyUWe2j5epPexpmbqrYRoA4aUZkHHCv43SpqSk1ur3FHQ8KsLGFPsbq7RPB5Uye1FA5ZMzgd9x39v9Tx",
  "key25": "3uvuQSRVT6J7kV5M9uMd3P6psTUHPg2L8g1eLnZBzNY8qTWSqA8gdNQfvoiz727Y1JrcMyXes1GpCCkYcVaVZXyF",
  "key26": "5iLWEU5VTcRkKagaSAw4AVeVPqGWqRxi3Lbs9mUSmb96KAZABWumGTM3Zx65EUJcrBcdA7mPeEajBER7mmkZKFx5",
  "key27": "4uEScmdSDvFmHri91i4dPREhMzY9zcd7Mcecwcr5QwkHAwVmE1BW3rK4yQJLYpeGQFAG8D2GqGtEjikxMmsS7yg7",
  "key28": "5tcaybUcgyj3YJ4qJZWX1Qb7L3NJywN3aiBNXcGEkFXC4Ldygatf5JgxFPLYVKd4schhcSrZNWAekeeiiKjBAA5d",
  "key29": "4HftzejQuTg9y4Z2ZgzV1LCNj1wSn6qLkWSPavArdpxMJvXvGdC5PrmTAZvjqz5FDoBSWhByNZrVgF2CnEA6tgG8",
  "key30": "h8x2znkSCPqT4gMkBuzxuaDFKxqghm5sCJtoDCVAE2XJyi9iZdVUDEXVcqV5w14WqjPR8iBJSTkfHCZUtx8utov",
  "key31": "3hxXcBWfz2jdHJhkL3cE9GkkmfVbRyFYEdUMCFyZC5tkYgkGgymnfTeKEbRGNXwijV4j9nhvcQu9jsmLWRvNoDrX",
  "key32": "57VxUXEnMmtaq7h9Ak7CFqbMqX5cYCo8bTgh91mMfBWo4xK9qpPXNL8hZ6rE8d2pPdjrnCMV1ZjGWikXxXpwo1YB",
  "key33": "5uzBnXqkmaYsiTvAYkXr18DaJDe8hqFVACbRn2KnRCy8aGS7eGKBW64BmDj7FpbfmUxN6a6xGTaHN3mLVcPgZB8x"
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
