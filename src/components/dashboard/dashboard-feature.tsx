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
    "2h9oxRY929jxgzVGA1uKd1uZGarjWP54PyZLRPdSr5cVcr8J5wAmb7GhZ69V8kcntau7E3HPKgTY3aN4Gjkzje8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RDnm8QEeUgJdiwVUZ551eojVsdZSr4iSNELy5eCZ38veoUdsq48nyXQYnFuckxbeXHUxW2S4xTHJpBpu3hvYbC",
  "key1": "2jSGd8vJkjaBFVWGePT2dCxHKtyBQ6ZpdmuzWUgD6CnJCT8zBsGETzLes5SaWg4nXsGWp4SK6AnqSfP891kxqDyy",
  "key2": "3B3gAnSjysseiQMGnHyTttxoMy7ez7itdqaEsqUEyngcyLkkR2oLTo2m8zMScoWC5tsuZSAizrS8aDyS4abQhX2k",
  "key3": "4zEUMzSHnxBnchFuUfZbqg5VBy6E9NYMRDCpemNRRs7iFnJTqDwgNW4a5oggJfuj1XavFt3nkXD44TCAyCpeaTm5",
  "key4": "3aHT9jZq3srx3JsN21gzhpKJCc1wEq7tmRxLGCMLfB2p4UrcqCpJP9MuSd8RXE267sFX3uc4Zv2uHQYupj8QbHyT",
  "key5": "2kLZbc7muCHqv6QSfs1rUhUgshX8ny8THVUQtqxxLrYXHJsce5b7qEe75rrdbtCurkz2gQYBbv2RY5q9DybgYCEA",
  "key6": "3D2KorcXmyuaCF2W5umH6oQrWXBwF2MG7LJofFrAvy7gYekeQaAc4gjtUNsfs3UpockFDVdm4kVG7QTbLvcsxUW2",
  "key7": "5EXJCMxZrL7kUJvEygpUdwNuXJiv7RXkEj8DbLXMc6DR9ujYSF8HzqomZAenGUNPVaMQoFXYKsG2hrzuaKY2WbHR",
  "key8": "4Vnwqm7aSpNntR5NRoxXgAMwwTRVagJ2kfGj72UR9xUA7t8RG4984tuz7ZasK6EuoJihvt1noh872cCymaWMtf5W",
  "key9": "5di2CCZAkVAEetG1DumDSbM7ggSY5hV6fSTomfapfyqzYE9zJ56T2UWFUo518TY3PjduU48PJqXrqdR4M8F8vNdk",
  "key10": "gPw7ZAfg92aEfAaXugRj2yCKG21iA3GVu2vHpVFPAXDpeEXwesyJMejBYYdEMNTtqsv27kkrkpxiMgGTwqxaY3a",
  "key11": "23sqvewbrijKeYFNfoaaYbxvtvn6ZyaBXdDMs8FB9hYmDYFW1PmgncQdbuL9QK9o7G9YNJYrjQRbiR7usfpuKLxY",
  "key12": "2f6C5VY67S23ND74g9YgYFLSrPpLMYg9AwzFvi4AG64cszZFsrQ2DHcN72HCoednDyxAd1PZpQdEn5VnTvSDdohg",
  "key13": "2UQ4tJ5G41LWsxifQgdZnZcpKKAYyxYkL1AQyiTth81Jh4Jgd3nkBetyb6oJEhrynspbgRwxQBc8h5p17m7Umowj",
  "key14": "3dpSCqhc6bDusM2u9StdZ4mNDvSfSoWH9YoYwMwxVej3ex2rvzZQuKHWuKGSk1jMJufq3e31TNDguALrzSpajJMe",
  "key15": "3fDZNF61xq2ti35hdESYjg6iG2n12ETEXhhhqbBtNZ3LhWQhyDhWZJTodUdbcndsBYW6KMkfP1e4X87eVY9pnRij",
  "key16": "5BytLE1DuU7qigxbxGYShb1BsnqeS2f11fSYJdPNkJit4Aw1yQ9QYgNmGBeLDceQkUjPbdcxpbDTrowrjr3gRNSW",
  "key17": "3AzfNkXbPYwUS2YUmrJrScY1mkCnbzY8q4GZtLHKyZZfNnbebMRLcXZLyXKmmPi2GJLaWKqGjd42cB2zARNkpqGr",
  "key18": "49UMNeiEhbt43vDZRQXcHzkwDTLCyAaL32KZBNXE3N3mYimivPugpWALfJnu4BvLuGboSLF9v9ZyG9ZF4UsZiP8u",
  "key19": "5f2kBUetfsHiRgqa6c11r4Ndpkg6V7uycernpSebq9iYG6jCH9GG5xftzcjLAheF1p5nfkZuxU2SddqkHh6YaS6c",
  "key20": "5AYdLb2FUJLfa74uj7fy3YqWRsi3qqhPEHHuTPZWtZNjhuDrAUN7ieeAFXtAK7aKEXpTwNPWv12nkbMMru6KEshr",
  "key21": "2Ad3T5S1WjCtFBGjSoeoq1hFg39UFvrzLHvbkA9S8Q6sRfceQBxcfn3HET8fTaTPdWcZsmdNG1dbSaSd4Z15NrHk",
  "key22": "aHd8GL8rzsCkHhm85efYXaFwxTtdhHsTjat5qgugFRswj9fJH5R5DHHBF6F6rBgmZ7zLQFwfjo4psxAbAmT1SJP",
  "key23": "3WxnV8DqHJvtj3fDSpK7h55mdw2bDgsBBZHCQfHPrygmQasU1G4HA9hvsFAfhSdJPKx2UkG2qycST4q3So15E3aJ",
  "key24": "54FkupgbiSa4M4w17Regeg8eYWgqvavAq4bEEyPgqDLigwfyjXTWkuoJScuSCYSYanhpneWHSdpQJKDfAQpeToKV",
  "key25": "DVouw6Z51sXrZhQVUgUgyfwMjsKwwx7gDeBbemSVKEDfhfxXkh7dhJgQ9ypWmfmP3TnN4J74NFBSh2WZudnfDwU",
  "key26": "Ec7651mRpq2eSxJDaLagajgTbhXyK9iDjg8ouNkVKVPvY9SQKLVh7Wew5djnLMRJ6AvgTnq8dGFAL9w5weiCGfQ",
  "key27": "2Bxn4UgVkWJXPXXXTVxZK7UdZynqp5Vsah5YpYHKZotEMMbxYGBZztv1u84HZzmhrc7Qcrba4iVKUMAfRp9LzUc5",
  "key28": "2KenRLs3g5GSbfErv8xfxcNKxumHbxpgzdbeXjrMFT3MLhGMP4yeSnU51QeHbhWZs86xZuy7dEyYmzJADcoeoPwY",
  "key29": "2ZR8QkyRkGrLkGZFD9JYMyTZQUbKkrMjsTQi8qnL2qoZwj4gsKHz1ezUknmfY64KQb13wVn9rqFwwDVENyfuf9VY",
  "key30": "5BxvgMXkLsRmUAifoBXe8rM1PfgovscT4WN79JLm1Hdwi2vndhBiNeEG4WcB9PXeiGiNQ1PKCVxrZ9fsnrttTEKX",
  "key31": "GkMypZRiUUAiYXUYqwezSP23MMRqApWNJAJHvAWJNjzPPSRbVcrFkqoP8yh3sQ7xkEoek3avCMxMDKnyyrYjA3d",
  "key32": "2UWKzXDhSfjpAJGGq9yds7QLt43P9Tyi937kaVwMoYuNDXi3RyGbNLK8G4xiGaDHrLGtT4cuiLcuNUBNwMyeHfJ5",
  "key33": "37G9iheD5qBJGBoQMPacujZ37AvFevsvvWPcfFUcr8hioetp7yX9YMAsk9DnZME4YChZ2weAYkcM9kZ63CarK6EZ",
  "key34": "4gP4XF1HR3BkoxCodDy1oRWQqNkgBeFBVDjXu4rfm5pppFV39vYfwKYxceZwa79qvn4wh2GpUaSa7WVVrExbdU7F",
  "key35": "2Kju8A6HsivpNkVJMfTSnPj529PTypjVZMGt4mgHKbm4PcqvjH2KokhTU3M7xSM44Cdq1acEvTCLMopoocXNyh42",
  "key36": "SzXFKUfaW3NR6AifUn7zJLkijL7eRAFpQjH7h8YtfJgVRebbD31XoYzgTx4us4uRWDuFrD95daVVUoGuHq2tKwH",
  "key37": "5dQkBshy5FE7fykzHUzVWWCdYYGLguTDj2ZyEDZMRfiS3YYt3qh6WETq3CkiVQBneJbZZjAXkPWT5vZFHFvf6PyV",
  "key38": "2UmTUEEwSdvkDBB1bjr19NZztkUVmJbteCLx172BQw5KBrAQQrEkhSeguCy8J4cHYNz3whvw3s9unHak76HrvK2F",
  "key39": "4dXLJbURTEYxoZ1khdwqrMUEZmg8pUATdbvRhFdaudsaT8VqVg8hB11G17PvTVJw1FuyecwsNU6Uj9WrKJoBk2vv",
  "key40": "4mtUTxFycNyafQrknThKnJnSmpwjNVh6sgoUbL4yK7deBVgNnQFLFetd7rqGvk14rZVrHV5GeaaBa5W68wSjNhA4"
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
