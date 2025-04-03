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
    "2UGTuDZpyGwoCMNRskAajHwBTiZMPBmopkzpVYMc3waTvYLLHvDRRTywKE3Z8boYn8JtGgBFurG4U2eXp3Csgczp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u6GLWTk7dwMf2sCnixCnmbA26rQY8fycDpmqFNzEcgBGhDNXzENNcnUZVBaGpJNUbHudT34jXLpQhT25hAK5rJF",
  "key1": "sKgndoYgLM9zY59kWK4dXhCU8Ci5u3HiwWoVYK2LywksAYtuwnqi9UUXsFGfHfCvJpsh3HeeNMXacktfUiaiWaP",
  "key2": "5QHrsEQqa2oKae9gu6xEN6rudrfmneais4rKnRsJDqbJ8oTozNE4rwBDemm3TYsZPxdgbCVkpS4GF8sxkM7z4Cxj",
  "key3": "oXWHodzJHYPjJJWtFMWvWjjZJaq15XkQtVBJp1xxTHBKASKHV7x4yed2gzBKFSxKf6DxLoSZjHfNqSqyvuwLLZh",
  "key4": "5DuG1PzeuBhug9QgM6z6cvs1DwT7GWRxFCab3mEekF3NCDhJLhjPBugDvaJCuXEfR2DmqsKJVSZWRz5hBLUsPpML",
  "key5": "4eW6VuMhvundP2amLy6MrfvzZGHJNYdzA3K6un8nvMtXd1Jtm3qYU9oqEH6HLZm5HrRQgKu8f4owkaWVjHPR5W8E",
  "key6": "388jUUithX2ho149qVzEEHkkv2eAVZbsXThBS4Rh9Voha41HKYyEt2yiCj39FjVCuVK3puqMGzJ554DBLL1un4Qc",
  "key7": "4QikNkvLCKgwWp5qF8goYWnvCbbGvZhidw6uoiifgjCf6mEpYwATfi6UU6HJJ7Xj4kZktkZtvYw9Cc38DHRWTiv7",
  "key8": "5tr9Epg3ra559VSY11nt8P5CQccr8cf2VmWiL41kpKayVYTTCHc21bbm4mjEvSdemTdTNyduTcHDAVJxE8oe9di1",
  "key9": "2wHcvdGcB5zbZiWieDnGp338X1wvorrqZrWZHDnfXtFVj1NqjG6PMDDWX5NrvBxuwr3inSXGjrFPpvbhzCQRJfLe",
  "key10": "5VE7sq945fTppmN26zXHUoEvbd6wLTjm4ycTMsHPQLw7HLyPqwr5trLTBQ8uMfK8Y1nQhs85u9yv1GNSQhhXoWnU",
  "key11": "5NeoGMEFxsLioDBnyMs3Q1uz8SwKxDG2NCqTJthJ57LLV12u53SFSUvUzkjx7zTQ8MoFyBu7zbFmt1HWqbD2uytZ",
  "key12": "493MM8SVw246eScQ7n8BWordX8Cqwuk398vpUpmhTvA2SzpRGGUE7hEdxGR9P1XxTxP5MEPHfyo2Ln7s9FkKkEPy",
  "key13": "2ZCJAUs9DH6a7Ni5jw5DB4BsEQYFqqykviJmFvqjkUMTqWoM25LsPS4VK57PGHUdfa3ttWC61wZSCpsz9wNp8p4Z",
  "key14": "4jLWLW9peRex1jJC3hemdcsuntUqppFcgBRHMaCvLKASFtXeJc1Q9hXftUMk4ju1boDMdXVWRr99AgLmiPpvDPgo",
  "key15": "33vf2XZSaeJfm3EuYXt5F4VG1zeeJ1peiXKrQqhkfM8aehGWFanZ24hFQRnSpn7DvTmkS5tmFcAPCvyghXayYcvY",
  "key16": "4WQGnuqcvxVkktvhveMepgLWh8CkEgPvsWCuHGMqYYhtZmaPvQPMJXvMNtXXXHxSdqxSJ1o32ZxzcVLJ4YugT1wD",
  "key17": "2rjTdnqQhgumyTwFJMyovVayJUmYGWNzzvopL1siAwNixJkCHCVqXgAyX82FNtXBPJarvi4mpVL4QjACeFJKwm73",
  "key18": "4mp5ekdxWEPN32zU3gHAVWVZrCJmzTx3GpXZN6qo8fwkpjtNSgAU19pLYGbr7wHQBykkTonxFLdDbWU6n7V8gP9i",
  "key19": "5usU64dJsMSxF8UTNEsq6zhz8sNxridsDoYsB6v89qcWKrJV8L1GpXv1en4AYiFF5vRnG87xuBJ9ktWJsNPif4La",
  "key20": "2R86qyrE88fQS7xu5hunyNnkfTyh8RDJtHdoqaFes3DKJ9SrnpfHYm6ksNFDTWeTNmnv1Hk51Vpnm1DXhcPiEw3P",
  "key21": "4kUtYJpGZdVixUS4HmEAUuswn4ZRgzX9cCza373qwumG3LV1NedwNqYWxS4RvwJK9UGcLDJo3mdFKJ7dhB8DaHv6",
  "key22": "3YBoYjwtV6nejyYYn94nx9m5Fdporj7KYvnq2uBAc9gC6c1K5vy7RGRpejzxAQvV5QJVvSMMwcwMLnrhtHm3VKf1",
  "key23": "63Dnycts7BSh5rtpRs4jmqDhQ78zzFv3XHgqMmpUnHNYVPAsLs7o8tjauAFV7fEmuyrR8mLqN2ST8JGefaN8zBc5",
  "key24": "GW8BQgR7wYfXrYLehR1gt9kNGaFdsuGWKmdGcCSYBtqGkRqy3RTJys96vPhJYkFv4npKo79mCKmco6eAYQUYpEZ",
  "key25": "KhZo74aZw97noQgXv3GYcd5M5qeoWjcQNWBUbbtjeKohsd1LpKhhJo16HTUU6ifCKSxEA7C1c3nNeAtmujsWc6q",
  "key26": "3TJpi8EAYi4PhKsemNb4Sq7pEbeMSMqMxPie9a6MkvjkZFpj1NuGqfmWtt79ZuePHbYHpA1jFjSZcFvJWXQ2MnT8",
  "key27": "BKGq2jqWcdPNiRVn4v6ha3ZnrsXY7G49tLje1LqkqGyqykEk9y4bqhSZA6xVFhwMZKb9BBf8chAuWTTJApgegp5",
  "key28": "sC9Br3mfVjmYJQALNNYNXMUT5A1c7QiLqHYZLjzfxP48rGNAKhhbJqgUxaGCqorbH2Hrmd7EwAZane5k7R63daC",
  "key29": "51frKtPmmEsiEhEKDVWLxsarwFFqL9kTUEB8V5MxEnNSjtccAYXz3cyqnZLgbUbJdaWUwtYjfkVNHnHeSq4kS92d",
  "key30": "suYFT3vi8GtiBq74MeJ6VwENr5XaMVLDsqKWqHSSsBEWbrzc1JZTmkMyX7ZHQTExF4LiwgHEja8eCCaywVraDUf",
  "key31": "4grQ46aKHf7UUNrB9sigFz1XyYxoXLyifY7wMD2SK5hCdWyKoE1M3YMR79to2AJTKeCW31YanjcL3TTS4vGDuEGD",
  "key32": "4ozmQd8xdGwBnmmBUU74AVCJhvYgjg6fFgPc9jdPWwG2id3CyF1WfQ8FsGegwp5PyGqKmPMX5xVaJvY2mTM44Pu5",
  "key33": "2Q9ikx5ZLxVd9Pc2GA7biprGUBSGQDP8MPWftjFDWjG7k6fp9DiSW4JoyNPmENTcdQAuMqvNGUiLAo1wyEsVd7Qz",
  "key34": "4HiaX7eXsf6LuihsNciJrxsZ2Lytx6W5yRyFnYChSDzoE1SnGueA5xfvg2DapzEtQDBCotUKwcxrS25nCc8J8inf",
  "key35": "Q6Aae1DPzgZ7KtPhxjKe6YAqyRdyJcDqhX5qws3wHWpXUegXZHDXYof48m2GRFw5rZwt3tCzu37PcvPDwMtTNG6",
  "key36": "5RuxwUNitZGwPv87tzdnUAq26wWBjaHLn1vshTfUA5iYiaFxVijPvEcCXcHnFqJVPg7awXBCrwCfZhc1LoG7Y2Y1",
  "key37": "2TwQeo4S1GV7eWKUAieMA12EEuo3JR3VNfqagvhE7xuJTYEHBemLVvHhBvcNgYa7u4K5sTfczni3tQuPxycUkGor",
  "key38": "3pNSvqsW5omfeGCSTxomvMdxRqtpkQwbjz5TtAK5xi22SpFG6y3V1j36YYtc4eWMJxTidEkcFF8XuAQy4RzNG6Gp",
  "key39": "3sS2asd5uDEhG73ABbsStjmuJ7j1cQgj1yJVGDX1uiBT6qSooxzcSeuAKW43yCGxwrckqb9XXssSqYDZeM7SP9LK"
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
