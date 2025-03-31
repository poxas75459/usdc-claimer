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
    "5eqPsMs8poj9HZEdT1z69YLK4rULzP28QcFuZuA4tMDAAKAwShLSbGPVuA1HFJmfMSbFNcwVJvBod9FTW6S8WkYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hfdwqZkckdR3UWRN9PzUxHgmMtaUaKkdbybetWvBhFsLdeuDHGzGkbVWzM8NcJv3M3wGuNiVYjXtDymvAWy2fSh",
  "key1": "2GuKhG4tJchqVNHbqVqzSzxhx9ZkRymMT33nnYNE7yXdqbo7Vcud4Q87LyMV3JwWoqzo2PQVBKwmfxJ6bzDQ5ZdH",
  "key2": "5X7DhKisBQeREFrZGPcSWLbQpnujguuxcYeZ33QzM6a48ddmp5LJSDKPjxBvSPStEwkBNFNgHwFt7U3z3vgUPehP",
  "key3": "5hBiK2J5yqbVM14Yu2CzjCYk1LwCJ6U2FCDF473mnpqQZx5rpWyLaUj5HjRztL3uPWK8zXufxgXqqJgNi9HZ9AVz",
  "key4": "2RU826XEA8sjJZFYVqz7vLWU32obcP87H1Zi2Xn8CEowaxivuLED38pRww6RFMTZJZyV9dRf1YMAcGnzSfLpPbfe",
  "key5": "3zSbu6Cx7Ko7v7nu4gkKVJGSSXsbxPzxP2qSzkcWz5ThQdeMiAmFEx9q1WusjhKs97KDjDmW3fVWCcNeYDrrjdq7",
  "key6": "5EqLuPHKqKAaHvwAXMGcKMhC5o1T1RPk2kwzXVdeV1X9RP5ed53dzCgica5wprMCZsH9ySoz3v4UcizaLx341oCJ",
  "key7": "4u5cUKpWssWh7Zg5MSAJDnRUEwp22rVueZWuXvgCzuK8FNSKD1AFZYQ7ZX9UsV83f25Rye1Cmww9Rsnnno4wV6Ee",
  "key8": "3pCFRp7J4oBbYMgBxtL4CtbR9q4M7zdbTfGMou7pTvRPPXzbfzmkPCRB2Y4hbTGT83S8PgoEvMrSqThFG8bHAqJZ",
  "key9": "33Eg1CpuLAVD1dUFcmEzexy9XDmytRKB9LHrXQZHuqQSCpbnJKPppyYc3aL8mNYSfnrHnm6rF2nCQY1uWMH8WtxY",
  "key10": "3z88oQG5HPWGStPdfM1v2Z7jTtAeQ8DP1HwqQ9CGycSMqMEZNeSEzZ2hPDGAd76LVvPacJxRx9pWFhx3Rm19kX1y",
  "key11": "5VTxisE4PEjoNhNjWdnWdzUKrrNE2RhnbmNatovF8Nn7iJxrsYh8QBxnZwECaHN4bJpHFdbGrVppmZUKciQtLwWZ",
  "key12": "4Qi15wSfsuE8swXWX9k95hhRVMrKGWRbv2Q7rQ99m2eoxR2YCfatWYawPsYmoiWT3mXm2SYf6kpqHVHYCf7BypRr",
  "key13": "56uZ7iZmbStD9PhNzJuKifhperSM9DXaV5y3bJPJ6rwj9v7VQyi8kbRzAESf94vP3k5GikJuAM2rFQchAzt5DYZg",
  "key14": "4ejqjZSghgRrYGepMJYtpHF84Nmf7xbXj2yExu7g6HYTqurtobccJGVrcuXZK5qoXHSsuQY4TU7pbpwNZAC6jp79",
  "key15": "4MFXCFSZENNNZKiPgbL9Cs8rHuZJHCE8z1UYUo9ELVjJmKmSDXoaBiJ9tjC26i6FPUmWcfCVt2orqdjgYC2JrkLd",
  "key16": "25cS5t3MB9rHvDqciBCjoaRz5wjrja8EefDP9LKE38MMdn1rcNtRQrHzjVuY5G5Y8KrWx2Ub2oxGedtetKdTSm6n",
  "key17": "4wWyXAu5fs8ynq67z8X3dGYMEc1HjvBEvxSC58S8TQkNfWYcewNSuLDSt6cq1duXYcw7kgDKXuCMVgpMC8UH8Xnb",
  "key18": "27t7CaSFYwy3d1AiooVnA18uRBPRQdysxzoBLuwuXK2DwdEhPK2d4GUBh6a3oNTR9VkQ9M44PDMREYGktXUqdFQ2",
  "key19": "CczPKASX6u6bBKb1Ef9eayVV1H7gr9MXAHwdvd7RtpcEp5x4Q9Mhc63U9Awmtys4DthHKSkU65iW7R6MUDoQkua",
  "key20": "26nyufyNf7qexyAgd5zuFxzN5w93m5YAeRVZdsYcKjK3nsLGXqk6C5b23V8RwgfmqT1tDMJGx137aZsDyDBkSNiF",
  "key21": "3SmunRWpR3PLA9AVL4o4bkfQriUFmdve7bcQCPot1q4j8WrQgkwEKUfXGUw4hYzkLtnpwMREiukYCYEKsv5LqPC5",
  "key22": "4jdKWJi9RQomq1xm8hcQrMFC4njKNHt3aVqW8CX8mvRUcuA93UEyMSe6wpAibnWSZos99nRrr99SqDuEbM5s746R",
  "key23": "5uxFwb9wZw3UCMR2ShF6JD9bP9VUMvtEtjCettTD66SbCkiCRwq59cyBwCMrYs59h2ZPkQTLaowmHwWWg8FGtEP2",
  "key24": "4mkVrm99L4kyEJqp6vuz6gkxE1K21VYxDdVzjbGRX1ReHWf8WnFaPotZ6WCQ6oHyw9M8wkicAJy7rf89ck7F1HHQ",
  "key25": "4NrCXSbsHURpSncAttDWsRSHq4P7S1Bc3CMYPEARSLuRBC3tbyoZQPFAErV5mLEDShyQ7fUzNM8NS2kJH4pkKHha",
  "key26": "FbeTx2L8jdeJMVkDtCHQo3con417SPGYHzHt8ivVt3fqrzZspmM9mvz77h8yFS4UbKLLDPJ48WL3XpJb51oML6T",
  "key27": "3bvQxHv1Y1LBViJRNky6iZTCo8UZiBxTizd52YUPWAfWC5FjfYBzBh6Cq2LKtG7og4ZbTLgHEBBKe1uFhh19TVkp",
  "key28": "3sgM15TvZBGif985JfgAjbgHChvuG42zTqgVHm9PoVFLsMK1tPJDJf8A19c7nzLvYHpDxaj5ULZx25PwKYXNhKG1",
  "key29": "9NfpTET5LerfsCvGbsHbMpSRDTDiYjTfLcFaQcWtCk39cyKZWoRJer6nHb6vYqF57kwdLGBxV7389K7dReLU9pS",
  "key30": "4MStWBuAUpYJ7hR8Czw6kdyKGwYkAcJg2PWyuGhcNypmpK5d4S6YrxwN4xZFVpqzWHkmr1sLQRtwEH9TULRHY81A",
  "key31": "55MZRJCfcmkNVhXPJH8a9jTyGoVa2uTAJoGZRAQH7XNV2Z5tzojDFWUZUcnT9VXUiYFH3o8iJUktxwyZpN8t7bck"
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
