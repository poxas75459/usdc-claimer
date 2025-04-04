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
    "5ddrmyfSRPdm4wy8RLXoKnaR7fAof7HECErU7EXUei8q2hWBVL2zGbNoeSq11XujRcjsytguGfUV4RTdsmBoyFX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qshPpuv1ZL44NtshpdeksmvHhhGavVSnCPvfHYbC5YpRh2a5qABCPVbhxXn8cwWvM9yH6MKmSnvGzFnDnXWo947",
  "key1": "3gU2UMnhy3dMtVfxAtUjznXf4Ai8VhUhHaGrxLjemsapLS9fEW2gWVrh3FvWdWLUbgXP779Pe9ppuQeArZdfQiGd",
  "key2": "5RU7xfaRcN7681adMLwZVmBse1jcAqjmUt8NSXbTn2ggSWY797th4D3c3QGjBUnoGddNr7fLARk2LBTBYJ7gNjoc",
  "key3": "37dTAsdkT7x19kZKW25BNgkUfAHQUbFq4Sdq9qHfwfU8X2jmKUUsFJwbgoFKzhW2HYArE93DoxnsZmcxX7Z9zSVz",
  "key4": "2zHkKJXd7W4HgUQpeAcNjo9fb6X6qg6qfDctTre78TscR4afvgkwPq9JD3BoF5vVcbrutdcQL1F7arpcWSuGSvHJ",
  "key5": "2GPz9xbZWVR1Ubc5bYb63eRqxcGum5S6gLDaV31jm9ndVBdtB8ixzi16ARmHKb9fEtAxqzhp9ygByLzAF1A2cG3c",
  "key6": "2cCEUXNQbiKDqcrwY6U1PiwafD1YtCZ3YZMX1Mdx4QJwxSMMThLqN2UCgT7EDAtcDmjTGQ7i2XQXkRZUnWNKfMy",
  "key7": "3WoYtSyDS1nPSmRw35MBvJXeLKsSdKaetE4yAmqXdsy9MXHBRkdBY12EjeFN56PJWiz87HqRJwS9jeQSVLTsgSAk",
  "key8": "4inn6AoFuVdP87Vz1Ti4Ntd4mrfLdbmuC4Zm2zdHkxy3y6PAzpMMfUCmkA4B7bqy7amzc1XgC9VUuwePVWtX1abg",
  "key9": "5yZXXGErztUYpLpiXQn3aKGph1Q3iMjArk9ECYNPWYPD8ioCgi9hvPWyYcAvKxqJDkRY9f58KogqecnxVkfzFicL",
  "key10": "43Jpt6hJh8XDMSA7quinVV8x2obVs4SBzom7mbZ6Ph7VrSTHraRriYTA8vV9ASYnTzcKgt9kMAKHQGYZyXu95ST",
  "key11": "4h4pQT3YLLrGFU6nhnhmNtMfZSVVkLgSLrqQuFuHGSJA9zhU42R7VWzBVCGC69xBHvjqV7MkDMGQXzMaSjDtMYgG",
  "key12": "5cPGYvBGK1i1KcUPCD8azXfKtXQ2imt537nZqcioHYYgJzxFDFJ8EVehEAtMmFFp72UVNt99rH6SL3KX3vPYgih6",
  "key13": "3mYZyAiPsyYBWgiDPnivmXrNi57qph2fe8eMp42CCZsdoHKmFkmXCaMnkqatn2dKUmEBoSAkQiw4L5e7aWHGa4LK",
  "key14": "4kh7V1Zq87uD5WfgnKvpo3yCVECZYwnjcHxBio1hckFDYdKMRbVG7rPNJXDUcuoTNfvyg86z2qDDEnvCXH8HJpRK",
  "key15": "25LxWwKUB9NNTTuCpmtCN5TyNA8Rub2WWwkFNFjyeQBtiPC1DfBt5cAan1EppcLGmxVnhxyWZeSkXzFHsfnnifQq",
  "key16": "25YNvzoR6FTFCnNiiqu8r7dzJEkEhUyBH1mwuupLXUei667RUdx1fHXRfcSpQMjUxrFfFdkCc4KqEqJAxzhDWY1A",
  "key17": "2irBRf2MN7CWHq4yfpiCG89CRBhp9DBNM9Jcnj9DtaNoYBm6TQ5hFrNDHq5CZDhMkCgRNVQAXGVms9rh2BL6HJA2",
  "key18": "3UNbNe57RehtLfoYQuNrKYkup2p54zfCmTmbYUuAH7Q3ikp5ZHSN4PwaRpofqv4UmWGMwt3ik4V8ACB7B93bH1h8",
  "key19": "2oN2UJ7eTfHbmQn3jvMXGRhMrqfyPRoCXx7YXhMgLzAuu9Z2jREjDAHRoQ8BmWNHXNhtGASGKqQTeWH9BTXRYknJ",
  "key20": "3b4C5ndHiNZMr4oBzJ4V9RdnUEW9MzWwvo4cttKpk3YSRuHFzqZhp7bC5JoHb9n2hzaP67mah4aRE2Lmj7RWXQqk",
  "key21": "QCb4gXgCXeYcnjvWxv72Swod22r53k5c9b7evSkPMYsW8WKihm5zXWHMacgre1Fpxyo1GC2SWhp4EnWXhQaaHah",
  "key22": "2qkCz9GEjJakswijgHviDgRNyrYVo7Pie8b9cTJJ7HtDRbbSvjXwjfkNwbupDgAyQUNzMZH8r6S7iQDUZ7h6CvvE",
  "key23": "3jjHUXGNbVPpM4H336yme4YVNdhchZhnamraLSh3jWgM7oSQpzFVWbr11SBXk7cB5Y5AqCzAcuNDN8RoMwHZaWLF",
  "key24": "3dPT8q6rei4KsNUXZKM7GUE9SDZg26NijbUPa75dmG8Swy5a1YovcLU8rkAyTkAeZxqaDmSabawgbATTHWxrTTDR",
  "key25": "26rCQW3PomArmjK1ePgTcui3qTq5Aa4QjdeZVFsqMfmJsxUcx7dRYzhG7N4oXKokefS4dXG9DhWWGC1AfZvcXRAm",
  "key26": "4JRCQaLp8CjoGYYfBy7oat9sMXUWpd3Brt6QZeeR45TUmgDHySJ21oZK8NqzbwPRBWC8LuAxvS7fpNLYpYrVy4tQ",
  "key27": "3Vud5wooTCWzDQvng7dLc9ykm7XicKUwFsxD44ktfUE9BpuNnxzpbtbS7GTNHY99oKbtSVo2Cm5dUwAvy3TrceYb",
  "key28": "2puVkdd155Wuvtn8MbiMb1LxaxPHPfckBMm1idh4ANDqd6UbrBYRHsDta4w65Wxk7vqk9GsQ8MpugMMzrHtdNYwV",
  "key29": "5d7bn983BpveCMRqZNhLkBHYUoNh5onPdHRzmgNwzGdXZuCUa67PYF1jtfHDtQfJ389nWbzteavA5U9CqcL6iEGR",
  "key30": "4XA4PqGq9SKceyyxjzdVDCxwmBDwbZzjbNcwzycbgYZdDwCWV3BMzKHAHG8JXSd6q7cUfVHXaXoXD4oEM2txWi1c",
  "key31": "5JkE638jd1uVi1nDvbPoxKsyN6FtLaK5vtVKMRHmaMz4Qt7EmxBFECxdvWGnLAQxxj6T9nFmdUiyYs9C6a1RBAoT",
  "key32": "2DHehH1fPGj5qcWHtUfGQfUn16KmuvJCokAUnx3ipAVvaxWVXwfgFKLFKdS8MZgXyPbEg1DQtM55Ec55MwqQ6ZDw",
  "key33": "4HCmZk1tY5QJbdcRQmwMqYuzaaDG9wRut3zH4i7Z6Emr3arrdXeyx9X4G1bFuxjjtN3cwowrnBnKbZjvge4JDwd2",
  "key34": "2UwzKE1YmVarXNbqzgmXURN2WB1gkJ1DuQXrbcCmXV91qEmP7KgsgfDhzY2CJADVdYxXuhtaRcK8YoyzAMoSk8Bc",
  "key35": "2fSJS4y6UvL1JVGEdy5TCxwSRnivv9uM57DuMMyycew7wELXPvog7mF6M2wxJmXNyZSufedQKY1JzeNwcm8JoSN9",
  "key36": "2QUw5gGc1oSqevjeUVV1zgzNo5eqD9hjaio8de2ip83wWe4woVveygmvthmUTiBvrZo1xXihK87Q9vYtGCW1KrSN"
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
