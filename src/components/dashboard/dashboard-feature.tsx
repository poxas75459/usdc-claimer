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
    "4mmDfDgQcmbQ4T1GmjjxMMb4T2pK3Mj23pNTbvj3hhvcxjZ2TqQS7cNuvxs6FxqohUoXvGk82s9sU8PiZeyMWVXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hTUNSazWZpGSHoiqDYpR5agVjK9kLbGf5PEvkMPa1VqCrBKZnZ7E6XgjMdkoodgVShekdramsNnd7sv9C8Wi8H2",
  "key1": "3auMDtiB1TjvWi3HbwcQLhm7XCBnuEKVE2Fwr3o4w9wC2Abyu1nzV5nF3cgCSMtf9vwk3eHKEwPXcHyfW661sg1Y",
  "key2": "4AGMyuKKkJdbbcKyMC4Bbq9URwugfj9KnqgcHLh83DnQuTHfFDKsr2WPTcPmZYiTErBRAAmJHhwVkU8wLicuRg19",
  "key3": "7BZChL6hLs9fyp1CTSNNuyS2KFeaZ23BZQSzANo7Dv8jfsydxGrHkHL2J8ZTuoCZ4G63BMmz4jpPWrCUfbMMJSd",
  "key4": "39ZoUXaaDL1FbYUvTmUuKksN3Um7FQYRP4UrbbaVB7q4bQJ13rRtf1PFqb9AbU9ZM8wuEsXhPfeAWCukwXvxNaG5",
  "key5": "47YpL2VQmDHaM7RAkVGc5myMEJvvn4hiW5aZXE7Mu2kjAcWs3M3tVSZdnBxTuSb7T1g62RUNDtvyGkVcfDqARp6T",
  "key6": "4RahYG9FAwuShXhxcdiV5WoTACJVjx1wE4BPZhpshXKTw6XT1VZdYtfWfkxJBPbo24ybPoSCWoosnZtijSbQLh8P",
  "key7": "4AhZLonUKS8EbcJ128DzrGYnMZkZeiY1TVvhW5nNW6VNV4BqAWs6xcTS5XaUerz6YK3bLKFCHa86eezUaEGD1wik",
  "key8": "4Nku37fnnwiNh1kW5hfjKw7H5cQpFsHeSEswwPyFMmQz7wNiMnrPGYsRmsiakxUNiKTJL93pEkMdXYnajQKBunUQ",
  "key9": "41sZsgvJgTYz8KLua8YV1c5EyjdKpMoyH9k5qQQd4ZhfTQdpuD8JNcNdtKzB8HvTEP9ySc24Rs7oF2tzWxQ2M7WJ",
  "key10": "3VeTKVoDQgxdEQ2bUW64jwJGsn7UHNL16fAiHThQbMc9oeDF8CmfTH6N7AwxNruQVtGNFjd7rMh212FTXGbyAski",
  "key11": "4VEbmDdFSZ9wJwYZsLdqGVq8hH2QUZ1f5bzR2wVJCT5Qgr7kzPhqYYfDJyPrXMitAh9xZXWwWynDcEcA1TCnqKM7",
  "key12": "5UgAC1sSXibPLdZG3wF46DHetHrqVYefuiDsdHMD8fwPF1REkDpXzwhXG7MKdTBkcrJiM7U6gKJGxZxDkFNzhJcY",
  "key13": "zSD7epAcKBg49wYLcjexQK34jqyxZaqoqqp4r4ULAQWi4VABTLdeit4vuZo8GmjoKty9234X67UMZxcHCyYbPX6",
  "key14": "2Kh88ZJJMWrvhToEXEyMbEP9XWZHTdJnphUJ6utJ4mAeTdPjsFNJaxscRU9rN45sC7gZunfJoz3mpmricCUthFmC",
  "key15": "2UBYvbujCaRKGnov17Yoaq8KukX4MCefMxsaayYtAptPspV6ecTBRDUT3RWB7jLG9Vv4fBEn4zPvywGhkV35zNhA",
  "key16": "3HhqSgLsbotbzkTkVhcq8wbofgF4RvyEErcVZpnhaLGKD5367x2Wwrb1QFJCbyJqPCQgMMMZeRGwCZem9YADtruf",
  "key17": "gWFxyuXFdoZiUAnXnbvSbTjgnrqPsN3pCT6fZT2AQpjPfJTM4vRk57LdmuTQBzgW4fMNQHDUTHCm4iGb5gSYzKM",
  "key18": "BM3BwRPvvtJ8AovQY5tFef3tgacquMrYsYx9BDYhE7yz55j2xTvhojepJS4nbNxWMFQgCGYmsV13VB6nahAhenM",
  "key19": "568YqpxJDVNuyfxkFijHNKMwbEZLMRxJ2snRbevTjhUF6zAd71hj8LUwqV5dFM8gka42uj6PPBbgXV4axVuUQGWz",
  "key20": "2hHvjXiSDx5JTb2GaLBam25AoDUEuxmDheSdqPE3usFDs6nr2yRgVAVKcEjp1toM6q8rK7N4sPxzdsuykdxTD474",
  "key21": "3Mw8YDqTCXYLVHwNZAVPP5B55U9WaDX7Tkss3dgMnEefE8MricxVeC8sL4HsUwSNLkGnKLGgqYo5NF1XUWJrWtq5",
  "key22": "4yeQzzBSn2d16X3dVtUjn1aZCbUPuvFqvrHMxrJwY79APYX7kQdxFWyzmgNZCA3iw8pEALK5nA8YjaYuqV4r1BCU",
  "key23": "4c5hxoe6DR5DBWQEAqLBscSS5kBnfWUs75Jhv4HxNX2DrH8mUoJgDp7tkcyYPvyRBvNHmkruABDRnStx11TjVUQe",
  "key24": "4N3EXtVo4YhmVZgbfZ4NLC4pj216B5cTbMHNBMwpNqVwkrFi5w8JRDQER9y7KiPmMfECErrnmnfhVmGGK3AKqBGU",
  "key25": "5Vbdtnkre2CQZTWkp8HUm98iDAgBLdhknFAGq9xrYo2JZMmFHd9C8g78dCKLFqcHMDG8MGSKMrcn8sAUr1ceaLiC",
  "key26": "42Nn1rMzDJPEZrQQkVvugQ7GWguxeERWxAgpqEfpTGm3tE1ptSAb6jurVouoeBSEpBj5ARuAzwxgSczn2oLqwXQV",
  "key27": "3oMqMCxYc6J72exyveUuL5J9HMy97AV6MpHeZXKo5rB5iaZ2ZHNkhqgUCpGvBA7nLm5UZVXiU9drawDi2SbuiRPR",
  "key28": "5QdSLxPHPGPCi6zhVDfULxzE56z8qbKQRCEJqKecNiJcdHmNaegB22cLo4ZUfR9oRNEgopnDtTvYwSDgAy8ZEJmJ",
  "key29": "4mSxGGfWGTEQSoeSB1FpfcrZJpw5jjbUmUSXkK4J9wedHTfr7oHVJ6eCf4wrfEB6UvZFsvTdQWm5yizQVngyParr",
  "key30": "2azxZT7uQy4xKdeKozvY3ZhX28cNmrEnBRyenHi284o8qmBfh36VTRiwDoKifLCLWwibsNknhjn4iCzA9rjxcS1F",
  "key31": "3GDc8zSwHdRf6pg7ercbfhb6jSHCwGuBCMo4jBt9eR151boz1ZD5k9924f1XXY4o9niHCYJY7gmLQjc92XH8mBQA",
  "key32": "4tsaVtj9n8LGGobygNntuSxecvVkacmPLwR7AM7B9knxfUgqSqrNAThMf3ZXopKP81AZPfeZcoRKiDAx4nVdhMUe",
  "key33": "3zWmaHmDw7WqQ4GuzUxQUfsGMQySzJg5rygDaSk27WAwZgMATk2o11HaMeN1DGu4x6bBEt5RNktNpLpuGtT3syQT",
  "key34": "5PjvkEmaZAxjCyKFHAnGipUXs13Jui1g1f6vjUCQfe3GAz2ZCbTdrJ2k3oNrE4ZcsRpnMunBLZVLEeu1BkyexMQM",
  "key35": "okvNDqVdgCaEogUoce8RfSyMMm4TnEF69BMChWpyee8Y7Er1no2SJaNm2LP4zYfU8p7ZDetAJ21eFrV8AGfaumt",
  "key36": "52jiq87ZiLcEA7tk1CBth1W2mfi9CNDTYF7SqbBWZh71FKYtMohDB1KHemckaJaZcfmsdTh2J7AZH6hTW8q63nT6",
  "key37": "2jk5zEUwuuQWxWp7VAi9mtTJsjG5sEp4pmzGYEBD8RKgz9HwJM6g8d488myVUs78vTk35k3bGJMEhtbLMHeuEK2r",
  "key38": "gAdBbYL2P7mWs1zM3Cz8nFmQA9onADBhdL3jxwjkWS2839TMqH9C52zwgknGqSt1ujrbFFV5mvRkyqV3ALTfVsw",
  "key39": "2czrJ94gupvCTQfvsNiNktXmf3qtA3Lv8p5NT9gH7NSTYPKHBAhj18UD3gKdeB2xr4G7BvG9e1neA6SZFMnuVkE5",
  "key40": "5A3FgtgmkFm7m3p4TGvr326dxsBR5ixpEZepZLyMJak2peMSPG1g6S49xtuk6yyMcdmxBA1mVNwHAd89RWKWZxBp",
  "key41": "2QP4eZ9MU3dun8CmcxykdzPt7T7JZi2zji4Xx2rgBsWkFUT5K9U1BESemqZVqUsQQBJqQhCfBQTVrppTvujMhuAM",
  "key42": "4y2ynccZqdpdH7zd4PeVVywavQ5yLKScEnaMULymtU2VhUQzq1UxMXy7eRXHnSA1vswUvDWun8gVJzRWVPn6rUme",
  "key43": "3zxqZtL6fNmp3wE5iHLS1hRorfkD7aT7YFeZgfK8YFU1apb6EjVvFmVVuRLN9VUSvYHhbZtZysBiuFP8CsCrgG4J",
  "key44": "zLLirWV3wYFFxP1TSZPEfSw8KzP7VEeLM7xjqKbcYR968sLk6wapsTg6A7TeLyCSMoiy7eG8qxrnMqQzm9VuJaC",
  "key45": "4rP5oSUD6P8TxgVaqNqystKdUkCNUSWHwnYYeijKNc7LjabfYUnYqJnS6hGtcRgF1VQJLucHcpVst6kbzdtQqdwd",
  "key46": "5iY4nt2aT6enJkBCY5nfSP9wNECSs1KJY9nuWMosBrMDkKa56nuaKCYdwhL8zsQh572ZHohDQekK1993yxwnwq7j",
  "key47": "LRGhyU3pZf4UQFBSm5xTJ2igBgnBp5iAcZ1XgUYSeFhMBjDV46vcX1suoo9J49Y5s9Y1UJjbcnJMByzQBUhbZjH"
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
