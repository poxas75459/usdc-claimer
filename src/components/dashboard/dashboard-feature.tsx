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
    "rejb8Z2C2ttE8FZ5uWcJ6aCPTJHCGPcXCHVGU93oqMBBCGBmyUFsUWprx1Chd8GJprNz9PsS4riVFC28La4THKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TmyLh5dLCXHCsUSoFAr45H5QESTtvcdjurkcEQuwrovXHxjvyyeXShyNooDKJwZ84eYNfxzfVHqJS17rU5qa9aP",
  "key1": "4dR6nKwNwvMJA85G3vERLq7xw9JPveSUiyeFfKUqM6DW8bNLbeGAwmfTqD9ewZbLqah11Z9oVadWWiK7WceXH15q",
  "key2": "mkfFxWghX8UPCRmPnfj2SDMeaZYMqb69mP3pV2XrV9HhkeU8RTQUKSP182xKf43RYio9fhfogcbTx9cATsm9P6T",
  "key3": "3wN2hubp2eRPY7zAqFJif4Kok54sQbNjmoyvWkgjkRTAUD4GDbPTu8uKnSwov9rG3JLsbTbfnqX8bh4nb7MbPno",
  "key4": "USTrpU7i1oZAkWwa8QY9FW8r46yHSXi1PEGS3sDknK1rjSS1rmrAoS4ZYWy5W5mvtvn2LNNCA78ajCM6YqAGmZw",
  "key5": "4G7H8nJxGZriuWqr3dCegtvLaocEt3PjgW9uv4ZShXuna8KxTSCYbhduUyd4VYLmYfpDhofEKbVKqWCxspHJ1TDk",
  "key6": "2wQCZdVRN1ECfLfaVUqCdZZFoRBjntqMuuRtNhKKbEDvV9Skgbr4pZw4KGqxtVXnF22C6BxAHVx2MXB1WUj5MxAz",
  "key7": "kgGQty6RzA5A83ubHKQLNV6MtHCFFohjV5bfisQvegecv9EaZ78NuVmm2z1sjF8wSPshdSjtmLatMGE9JWXw2WK",
  "key8": "4uFwgWhXKmvhtWfQosjuibzCgYey2cxiE8C4oZfhNuCY9YnCG1LAbi11FUdGAyER4erei9vkHn7caT7Q7nYoXoq7",
  "key9": "Hg1WSZWz91tT6Eqy2szFmqKsujhhxYpXdzXvQkp3xZcWRY29ZTrhmxy1s3ybSKcvUMT65tUrKnrGvWAYXodp2yq",
  "key10": "2ReN38voSJd6FTcTsbS5gm7M1jo1bRgkNQE6fXwRSm6byEpd8vyXJVuYWttnJaigBTHrMS5KpWbkAHZyNEWNh4fj",
  "key11": "LrFuZoB2p4Ts78YAMgaX8GPpYzMAXRQiybyX5Y4i44LVCPd5oKv9a3MxaZLqMeC57K7e6MJojAsCecreypXpuuT",
  "key12": "2piDiGAtHKwf9nsnyzJfFEvd7RYoStna1byfpvPP7aSjXBh9QLTvp3XLsziCjJ2gEotfZZb3koW3JurnC1KkoZvY",
  "key13": "3NRV5w8Vuzpy5kDfpADG6hm5RhhKm4G9BiYq1tw4Zich21mM1JDobyFcJPkPzSpA18FsciJDZV6tta5GFbKjYGA3",
  "key14": "5mfNEKXZxWSmjETDHued13qPgRmuBQrSe65Vq8EQi64DxJ8QAMtyXwTWyHEWuFReTn9wWozyohDYC9t4zG7uCdGz",
  "key15": "3SQW12FXgm3gMzAGe4JKhgqQrueD99mYiaZvD9rnYAWBssCAZAeGTcePgB5LJ7E62AukxK6vQRGEZ3yQGPmo91Hz",
  "key16": "5ZBEMNQGCfNPsrihjftraZDLs5EhbAFPJimXCBxicjiZQVERUAjdNxk2yLMkbswkiZprVSUFMt4WLP76UjCXRvYR",
  "key17": "2kyzWpFQ5FLesd26nMp2M5JR57g69eZJe3qqUduZ5uP7eMdis7Rp5C8E8Cid92ASXxKSErvVn4aURjTfTVQZhmU7",
  "key18": "2MRXoMyT8cAB6Xb7pkH9mGCe2njszeBUHoKXWKftkFjXyCmsBgxR7TQgsLGZwxvXDjNoJD4kwLyYgiiYS8J2sZZ5",
  "key19": "2vEfuYfahK2crwYpBozTfJGkcLhqbzTjxoFRtf23qnRkWM97r4MA3WUCj4tteXkaXhGVumjwcAZRwcdgnQGVfUWB",
  "key20": "gy5u97JyMtQmvJrnuyEqvUgZpAzXRRLUWVKFj1VnmN7pPwQXnW7kkVbsfCTDVFsHnW76Z1ewX2SbuWwVD6DiooU",
  "key21": "3FFt5rpDDiZf44hmhkSd6oHXDvvA6gn22SXJWhCgPTGLpkqDbqGX4sTBr1nYYpraah33477GdT4q1nJFitoov8gA",
  "key22": "22onBDNSNdUUrJwz5BfTYTdb5E5UkDcHKUFprcHC5s8yz1iE9HZAtBoaq7zbUJgkjZVYYgZpDoaSNJ6c9PenTRpB",
  "key23": "Q6kLz82135qNCKURpb8UkUs2hESrErxZjcL3k6qBYuJHCLQ1jL1S7gn2nyaQXVrYY2CFWXfajhDUP4Hk9p7PGnD",
  "key24": "rf1CrBXmbDqxbTrEeADBKPxsk4G7umkk2Vf2RY866qaKGvNYVZDBfyP8SANA5BHDyz6VG4npHC8bW5E7pFirBtj",
  "key25": "3wFY6kErh1WM4gwZxpKG5iXFE6Ln9z5zqBFsU2SysDj8FecHYH1dBXHQungv6rntVpGvVL7KEdvaw3d1TKFwSCrZ",
  "key26": "2mKxc8jThUeaxp5845CnvJzEKj52kPcNiRTAhZBSwb578v7478T2iU6q7aQZ2G6AYQkKSHWXbcFfdspu46FL9MPp",
  "key27": "52B43eH2bskBN8GbY41T1cFM4m4UD5qQ8JR6njNMTK1ohTGNzF3sDTDBFSGrKaZd4QVkHkLddRfNmdsAkN14znP1",
  "key28": "2bmbdf5Jixm4wnwPKKUHLs8tXGXAvsCYppoyGqS7APcVdzPpTUFPwXbEVvtn3dgetP5SCapsrgPw7n4zqKxYyB18",
  "key29": "5Up4WH7Nk3MiEuZDec6WyHaGfbnncM45oF9pcDjcQ47s5oGeK5knwVxBbSPBJVrQJLEZpw5ABebzD9czzBXtF7Yn",
  "key30": "2NhETEhFr27pqkmA2fGxzgPFEYxHbA7cbc8ZHbWqgmpDdZEwPRvRygcq3vJGeuxFFg9HFVTyaUo4wxY35Co3thKM",
  "key31": "4GrSqs4uc8S7JbF2gWTodT8f4x5HkUmYM95RqNroRHAmMk3ekrYcGEDeb7DBtj6a27vo7PqwNgmvuCR9z5weXnNf",
  "key32": "2TEiuy6Jigxp2THmXeigjERzCAyCTsgCsVFWjgDtjvXgr7CADSrRXFnL1MBZ9wpjFvqdXe4roqmxpTJ4rCVoNWH4",
  "key33": "5KK3jnjRzarK5cTsSEJ7waqQaGnXwCr5U3iS4CnBje2CRGXFE55KnZVKMseDokSJ8LnckVJGM92c9hYjSSbCTeWB",
  "key34": "4XxHGmjbMwhamSqSbfLyxdVBXj6QEVLyv5QCcxtw2Fb8y9M376wdhZZdHwqNqXNTjrkcuPuiiYaLynzihD86nzn7",
  "key35": "2wHtCJpG9rS3f8RG9PcbA38DP5YaFTt1P4avGwvoKzmmZDcjRsj9gpk8dXKMUqe8wjc8qTuYj1f1QCNZpay3tsv6",
  "key36": "3G1Sm4MsfAMJ6H9Lc4eqfcQXTHxpc5YT26w32hWfMa3uMT1ww1VpA9jCrBafgCjhNbJw1CkNsCvMsJLRo1gsWmTd",
  "key37": "5i1int1JStGPmfyVPrtC5XxmrRZdeBpWokKK4nHHsaHVpEceTiYpzbHT2vfmQWHASnUJujREAEpRNKBzpvZNeeHz",
  "key38": "XK8yQnZ7ut3n3ETD5yJBBf5ZGkuZB9tuas7nXHVAtL8gz1xGDMjiLLFvjJJgaDqrL45v3YYmLC6KcetFsrYAPbP",
  "key39": "5Kt9pSUq6ccbJdCZkKKyQX4WsRM5cAx6yNccT7mN7SJ1LWfY41VmpgKCSZyPpT9qoMCae591eca2bq3Ny2AtrDZj",
  "key40": "CjDyRnZkfBU4epKzkPKjob5t5CQKSaRBU2hSgL94juwQ6HGfTzEqq15YbPGvydDBBzXeLbEFWAmCe9EFs4gPpJE"
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
