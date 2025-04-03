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
    "hrxqGK9GE8wPo2UfqE2LpqxibZgbTw1CnT68giJQKNmmoBsL67jHCbYV97wJdChS3CJmQW6pYWweMb6L5EQd55F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LwGFN7M523PwPw7BAsX6PJUh21zJ88ZsEYpHk7Ss57hda8xnZC2FTmnJ9Sre1JN1FMcG2efT63suxrHqxqVRvo5",
  "key1": "4Z6EMxPF1eyJuP3Y1wHeaMLQXtoQUwKhd75nbNGMsuCBqkcZmWaEqM6Za1QRdz83n7BPZoX5UF6CqBP75D1WLBa7",
  "key2": "22CtMWrZpTdh21WrdoH9zksA7Kt117LQCB48HNJFFHuucFdiWzgksJjJGmvWiVTfp9qKd9zRs8ZKQYChp8yzii1v",
  "key3": "4cni5qXNC9c4sxtQwefGzgi2zakyf7sDuueUvuYeEc1X8dF1gMAvfszWYPAGRim68QwFCz5jsrgMFb2x71cU9CeV",
  "key4": "3trT6d49dqZ8XmhTXkLRPR34gX7Q1U32t31YLSfVCVoLAc7VnKokg3tJrJT8ERVTbTT99Zfd4qiicFzyTNV1xHqR",
  "key5": "3KDhDdzSCZAkkmqGvVSrf2DJxtxRyb7uyZEGaEbK128F5xEGGVtmbHxqF36j82au3daG8KtEzx2g8rBkQv824Yys",
  "key6": "5K4C64bPsojK6rKpGhqHuFN86UCgy1duphundkPxvDZkdbM4akhyvrmgnFzZAn1DhqxyLeJQUKkYjHrUkNA17jqZ",
  "key7": "4bC2DmnUwkLdyhWm9Mg9KCfAW5nr3Biw3z3T4HmG83KFx6ATkjmdx1GTG7SutqT9GoGBF5cDXY6yZfD2nSBQwnYk",
  "key8": "3zUnV8B7h41fCYJKB9edWS63ixzpKsCYhHjfawTWjKrjibjRck1WxBxYrHjvr5DkQFfmLDbJ2EvoBwwtYYr2Nbfc",
  "key9": "2TLoKckNfTYSZxXmBopazNLp5pEDbwBSyGfZxGLcfiSMxeeowZAaMmS2VmyuMvYpL3xnfE9CycEsxuBHpckQUQhG",
  "key10": "3qUbrjSmzBKCNZmzpWS4iCX2eHDZ3FoobzizaBBy7GGC85UoRwQGws6pEHouk4PCPwX3kxrmwuxGjcFGJSoqLeyY",
  "key11": "MtqhjhuHib1rR4F3atAkmKHPMvhdvb8MuM3zuESfsZ2tqg9yNtgDrnFfzR4xXPUxrgEUbepmjnhVc4WxHuTR2ud",
  "key12": "LpgCSUL2npetToeixiFd1MA5ocHcXmYnMHX3mzRBTvEyLuWj2DeR9X8Wp4K4TMahDGw5Eqchf6AUMnhpNdBanhY",
  "key13": "LqdvnzAEPWdSQQVRhEhpVLQ2haYekon5gWKUNSJ52ySTqfQFJKR37jgeWVoBFh7wPsQXnLWmPeRn83yER6q2nXS",
  "key14": "2kLq6dPsrWPopqE9MUPLBSPYHp2KznbtfXXADw8fhfkPEwYsdRDY8jy8BW2kxt5ivE7iX5C982GTwey9ic6ZFhj7",
  "key15": "4r7Lg849PSjSF2UqnGeaQdUNQtyLuzDZYjM45LGJ5wP7xzkYEaNyqiXeErSg5rxbGLFtBBB6QnvupKh84ue7BRcd",
  "key16": "4w7BgyzhsucTBLCjjUKueHhbXHm9E2ydMLcS6i6SmxXJaxH9GMs779SoViKxWac4SUGrenPbh852Wx8V68WYzQ74",
  "key17": "2AbL2EPFSCnZBvCqrWz9RSHTxgoyPHeVgYByrokvknBqLHoM3jQ8rWg5LDNoJDXzqdxvhN4kTxhbYrscPZbBBeEK",
  "key18": "3q9XFVW59TDp4j9sGRS9SpLhEmRRV13UqXKJLCUBnNvPeDuk5a7Yp6vrbZJDcehYHqNpV5cxkq7KSsj6qeaNENL9",
  "key19": "2RXdyvq97C7sfRZz1bQg7QixnKdjMsi9EghXTwSQoXnfweWC8qs2fgRtiJ3aVSWM64j56k98pGwwv82ED5bcpnwZ",
  "key20": "eEe15BRZFNcQU74csvK8rbwNc9tiPKJqmH47KnoxNhnGb14YP7DyCMX4VevqBKfgp13GzHpVGB2q1KiUMPuMKsj",
  "key21": "LFw3F79CBE772csNeM5XkVPNmr1GuPTPL2zohQJojFhGx21rDXQMVfuZhd2dymRZxo2V45WhuhyqvBMMR4mDqnS",
  "key22": "2V5h8T1q53Kn1ULVPxESogVYjiNUamH6rR41exqUcPdxYh1GMSabV91JAqApBXc38yiZCDW9gCtpuSgLxQxecYZY",
  "key23": "27uuRWUJnbyiUENDnDgcd5xSBo27EiDeTSQxDGvzM698uoBSEQJZnNTy43Awgbp7TmZMoQnS57bQGXZChDhjfZLx",
  "key24": "5WR5xaBcv4TbvNbA79bKs3XUhmLq9ohbxnP25hRwSTgemDKgPVpWkFPLK9nt2eHVrFxwRJevY5ca9UedFUgWinb5",
  "key25": "RoeEg5U4uCc2CFYqcN4PJrKVmaMBQ33uJCm9mbw4gwCtWYHovh9WKDEfbEDkcCkyzqdSuiaZZiRrZws9mrS1fRo",
  "key26": "44S4XtVjktixhZMoRxZfbcqEwh1FR8cmfeK7vNMnvHjwxaBNVZrFkWzbWJkDuokA1zxa74HgQ1CddcceB83tHKxM",
  "key27": "62qrWoMH24FeEoutZMmR6PQX2n2NExBnpuMNjjGDLss4AXwrHFbUUgCAd21b4dGEpyM9PiMVvy7ZhSj1dFS2H14B",
  "key28": "3udh2V2XJasFReUSonzDWC7ncrkheHtyYwxaGkDtPaQD2gx8prXqAwJDDwyDLtDRiBdeGbZps4qNbbKCpYj94VmS",
  "key29": "hywAWjiAk5TydC6cUMwaAaxgZwEvunhViagd7kzkKjYsC1QtsYWypimATVmGNFnP1Nyh5ATJuFB6m8hGpQLVCQL",
  "key30": "yXhRcdWV6ohvaVUDkZqvNrHhKCURoBsbS8wBgx63nssLibxFXzsSEnSFqCK7mT5yRbkejiTUdMLUkKfAWeXTDRb",
  "key31": "JdYboNNi5DmZjFLjoNVhxjw35NtotYCAtKNa3iixK79731L2UUa9sc6Gsxj612RfjfiEPRhWbMWuMdFmq6tshej"
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
