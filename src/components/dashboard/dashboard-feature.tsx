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
    "c32tQRqMs5JHU61yy5twWLHU96VaZNQDNuvmW1DZVNqNqrXd44mBVrJrh7XooTyLJbii3v48DcTsngzGCasyqoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RnZL1UbtMTdtwABgokqUiZLHbZuq862ESqLnSzjFQsa3dPuStB6D9AX5g757ak58j7Vz3tY72rrtnWpuzKygHv2",
  "key1": "5vUBXLQ7NyPgGGR3263xR3ZyMM1c5tvRnmfk81r9eCcQVUxY2H9zEwVNJsX6QgDvc9UHuCvP38EV8uXcbjSQumDr",
  "key2": "2zUGRjpjohVwc3XtSThAM1kqYiS8cPMLX17dhbJQjTrqDQkh98pKX55VtfFxQQ1bBg4Dv2exUCMMFY9bKPozEdgo",
  "key3": "4PybsYVrzVJu1h9bk7Zzcuc6M4gXDMWGnnrnkmwWaMJJc4886Vn6nxtB85sMnVeMetstA54ukqYmdjKfAvUap4nv",
  "key4": "6rBMLWP81v4H3FkMBBbgA3P162fFFeGWFgJ7rsPavyxsKvx9gLMimrBBJGbhnJFjXSGZhDCxvKd9uZnYPvGFbxR",
  "key5": "4Z1rz4he3HWALnNYB7vTXMvc3DZFGv9aMvsWNkpyPCzxd7tFwVHmc7yLTqNkagQvtSL7k2dnYG6yrMW8rt1mQpgB",
  "key6": "3uAbXBdv9KYFWv3MrPRYq1Znk9zmStgp3eniThTmvd1zpNPvWyLco4RpBDV81N5erXd6whx1UECbaakcxP7pAB6i",
  "key7": "5yf6Sbs7gejtGA9w4HDam9e9imQjRwiCmJvhp2J4PjzLDn8Vj2ddyuaf7Kra3HBpzhMP1uCraaakbpPffvP6YENF",
  "key8": "1JmPxWDXHLAvUdCaHxpz96vcAobPUkPU5pwPSevJ1ydcsbqSKBFkZRHJPF4Vtm7Fugd1NxSufyEy2G6erTYmtrv",
  "key9": "4g7SV41Uvwv5URkxJocwM9FAhPc7vS9jhSghHnoMCfQ8iSSUnTd99aPbihk7mciXZKGeqJoXRnRBdvsdyyG2e2eZ",
  "key10": "5gEAu9uHRDWCekr55VpzRyXSMFA3NKbNT9jPsFrvVrv5omUDPdhHwuvTgZhHuVNSfpLRzSrmZ39udgJKjrVZmunN",
  "key11": "5J8NrwceNSAThaEpL6RxDDegMtk9Q3kqPq4uYqrmshNVyypWC5EUGfcyofTBS5moFMFskCYXDSu5ixNzGC3CZ9Tt",
  "key12": "5iM8UEKcgRn1cNvr772vvvT6ac2g3BuToGCqd3MLSyKjXcWAoqbmasoFVWMecN3uB7QLaSwibRsJahitkiFEyDF4",
  "key13": "31bWUmDvDbqdeuAVkAX3KwaSq5SCrUmLTnJmQerZVoTuyGHzeg8PguP64cy6QBJ93P94zKiN8vt59V55Jgn6pVqc",
  "key14": "5xmg39ZAWgoJT3TnSYnAC5CTyHrQXmeoa9zVsatVnzrCC5K545y5eULxCfMXF486Q82zDGEtZmmw2zipDnyKfTgZ",
  "key15": "4T9CR72PvQhiLEpHYTxWA2qv1QBXtAzGR8jHfioBRmXYWFLnS6R8dBRiFYScMyEHJLZFtrw6jMGpmwRw6XJwKSTn",
  "key16": "mdU61v7owd5tAsvY4TJRGzotaVnVfKhy2aeMGJN8nRox5Z7DBsrAqMpBBSSJX4fvVXSUmSQSyfokFNEs3fyydL9",
  "key17": "2vvF5wbjgUhjJTHvWtWd8SX6BAuVrB98QeV6dyrJq8zBunCmn9wAhcsJLcavrF7JVSuZwnhziUWutexwpWnnXnVy",
  "key18": "gAvdZ9hHMepLWQTFctKks4Nu9hcmYwHdJouYYeEt9QZVG4m5XTiTMj1zCM3GbrF48vUwoyxtgWWiBv3CQ6ZFsSi",
  "key19": "4Z68S8uzjkcwXApt5xE77dsb65Cc3TPKQpE1Hu1KbGTa1XpgK32y2fzCDXNK9pYEKnWKczKe22fygpj8EbBGgabC",
  "key20": "mf9io4QbbKUUid7BXzKZ1bWUoWXpCNtrhZ1p1bB26RJbxzz5Fx9NuoEs9AFBx59gumnNs1RGfR6JG27zEez5Rs1",
  "key21": "5DV6u85nwj1jGNB6fXAmcjToDg6XGboESLawLEdcADgeBKW3R9JKkcLaLLHngAap1aWztyiAvYwoMkaGpkZBLxvV",
  "key22": "287j6S8RgT1vrMsKoxTScJxPLDa7GAa18yFZqd89i6VEKu3tGVDgrCCc79yzhTTwZtXxF5AKFkHxpdtuiGF1UfX7",
  "key23": "61oRApms1CKnZcdzjZqmnFcRBYr61sj9ENyKSv8S8CnxhCZLZFYPSTLTEEi6XSq3Wtwv9rYwDvnJowEggRpjYTQH",
  "key24": "2fYD1bNBSmUp6bmJi9XYbCyajjFshSQLN4CVFrGXH7xhobkW72BBdFTBxHVi8x1EWncK8LhxV6pp6PSyFRuk31NH",
  "key25": "5XPCPXogTwLmV97DH9g9Suk8vMYUWHmf9QWU4gFMDoDme5KWc7Hu6MWi9BKNi12Ga2r6NDGujRZgrguhAfFTSz4H",
  "key26": "4tVwtGSGa2nPVAh1VAxvh4sy6n5HXcecrvj3xNwwDBVn87hSXzqbX4VNeFK4MboasWhaMM5zb2FU7Qyu6aDQ28fY",
  "key27": "2u1tdrxWc9wA7xK5CFkJwPjg2sd9RZwBAU6DFUsVJmeTBS4iJq6pTM4k8N3r5QxaPnV95eUqAHm5fgB8MmCGUFjw",
  "key28": "2izALNJQZ11PHeRLQsEgfeGNo3rBUNkYFvoivXu4mGU3eSZAPAo4XT8shSvkE86g5HSZZ7aajjG1C5kHs5JWk6LM",
  "key29": "4Um3LHuwQhsxYR5WnGf91doasv7yd5aGMwkpgCDaEMomZqnQVZdfqexYdzaJ9dZSSZBG4h2dNGa4gnFV3hk5bwEs",
  "key30": "2LF7gL2GSGzNdfiJPrJJJkK6ByK17BBuCj3gykaa5JrAwcu3tLAmMYGUyJazTyJ31hUm7eLpK36UJikPboKRCt62",
  "key31": "24mjgSYieBwrFzMYwrHZ224jAhTtpZEgwFYAfnKyGrg7fv1zUdmCgrVow69ndoHhDncrHLDEfNuQMEEA5GEsQt4x",
  "key32": "5MVhxXg8hTNRmdXBLNBWDH2ygZVU5JDhkmfGDK9War59y4Gb8tK5s32ASRdCZ6SHgKBkfcAh1WdWgVuGGczxwqQA",
  "key33": "4TheoF4bvUUAiEidcZ98FUckD41keaCERTxGgPrX5PjFYHihWn2KLkcXpaK6RmiaEfc6M1Dbjug8MoLVq1fq6HYe",
  "key34": "264M6wsPnVzPxLjZSwyaZMHXj3ypDNvkjxJfMh3VsYonxtcyPxdZhKbRcSAoF43PVWBww5ukq5RKTx19NC9u2CoV",
  "key35": "wAruw3svYubcyVSnt9s5FhN6DsFUmvvTLuksMu1439RWYMvNKSTXVr7SPJQuoSTAQTBULAKNUG8nT22cpWDht3R",
  "key36": "4vncDgjw8dNQx2VA7yK1ywQFW31xtYC4VP2TjpTuigY4MndLRMJFW1HjxofKHYbFdrhw1A5aXJVniRZ98QVgXCZT",
  "key37": "3gBbKedYEUbnSsLWfiLnEFLf9BPGffs8XnW7cWkNY6xAMZxaTfp6RV9g2Z3V6jMbZKGj6cBmor2JRZcVJfoR8Jzt",
  "key38": "5YP8EBSroLqLGjsffcPiT3RMbGwtXwXAAtc8ARidviYzUbxGV5UVcSDkcijDk9ieyHXQ3vC9ThHLpujLU2j8WS6w",
  "key39": "HLZymrLsNNMviLx8AAsbjsTRQqiMzwntxQu4ncidUeMsWqvvqCuJK3ga3wsEJDZ7mw5Zx9V1131REaU98gWxxPj",
  "key40": "3QooKnDi4HvBLKPHDzi4J6BHnYSb9rNoqabQzemRaHoofNJb8PCdaP71qQZ53cq9ks8MERh8YMRk3ffrn52wp9Ym",
  "key41": "8iDw7GRY3kGgBeYVRT2mhFThdKH52L3j2HCpXnx3NVhtC5Gv5VRvnY9554yS6d9HrPyJJ7cUhEiR1r3vqEMQVNX",
  "key42": "5XfCSaiN15YW1jCqMVkzAUYH4eEKXkdQwFceKucGxURMKExV2nbnAwk6F6yaKCk2zkDYGRxdWEsNrtafy7XcGeaQ",
  "key43": "4oBiEk539QyZw2Bch9SszirfjfAnWnDPmtCc8cXH5Kzuubw5TBmHsvKYLFDREUUAtpxHWxPaEcPqShHYwcx43V3K"
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
