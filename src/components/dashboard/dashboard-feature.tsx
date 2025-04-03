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
    "46AFfLnLjZSYumdSJft6sM7nipumYUnv9pULFzMFonUjL2HLy5Q9WdNxsBpCxcUXMej8sep51CMFJ9qo7KeXQegm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cny3vLEAtEi6Tk217MeMCae3ftVLDhbBYQ4JuLnQJRZooZfVLfRsNmCQYMLqfYzzF7Escwgm6Mc2zCTEQqoLg3o",
  "key1": "3ccXPpJ6ZGdwqZDBMytjbL8tsDrnosNjEWj8LuWRLN7yTowxVGU6BZ5baGm4G2mYGXNv4uBH1kfCpKKxXV7cLVcs",
  "key2": "24VTTmxcQ2SwTUeQwhSnsw1CaeVkHot45GkZwy5xyd1C4zj3XxyMkeKpFuq7KshzcrHUGbFR5hrvw1qM4SEgDYtj",
  "key3": "2mNdRhMiz5YsjBfgr2n7Ge2PHBg1B5g952SNooGaSY1HEF2NKo8pND1KqxMFq7gEY4eaiLbaC1YCeHQX6pTzFVBd",
  "key4": "pCsJ3a9Atdns7VCrC62zPm52udu7AWoVnPEfxLvEVAC9PjMBruFe6b3fgBVWAFzQZWj5Zi7Rc7UQ6eVuJmYqDnC",
  "key5": "4EbadzbbwFrkzmpAxwNVZDp18Hhvf2qW7h6ryyjftCGQeKfkGxMtcqeqkgVyYbyBqku8wd4gDCCDfbhsjhvSXWMS",
  "key6": "4EsLTetAUVhB6YZW9VVZvx889J81f549U2aRLQiP3LJYyWRwhZ9ScDuWhLsQ1zorzVaeJio5SNJnQo3637Zhyzam",
  "key7": "QXZ5AkTPPeNZLU2mA2taRaPDwVdA6UxYrrAtpKNX846uNCMu2uijwERU4LVECvjJ7RXRQkqSwTzCQAgCKGLJn14",
  "key8": "2nft5azae1MMFQXPh1JZ3R5p9ThtnTtMMYbo2CJdTtPPFYbDUMCp6Q6dDY2YBT6hcDJsFsZrAUMJCqQckevFBzwP",
  "key9": "4ivKPHBSxZEGCqRmbwVq8N3Z5YsqP4oZQhqFAKSvqxKXwomRst7WC9Biz7vDgoCevHaRMPcw4YFqNqEnhgn7gbhn",
  "key10": "5TssBQ1EF8Hiztx1D7jd1Ktc9ZNvERdevS6MRay279vdypQEi2rGki9ACKBQ3FNHY5EMZpALugbBsfosBvh6Aege",
  "key11": "4fYFGDkcxcfdmyoY2jVMp3GKP5x1Pnm2VEyiNPMdHu4ECP7hLBgHeLcbHv6qoAdF2e3XyhCASrnSVvWE1nktyQaJ",
  "key12": "3sdapRNHhygUVSunjx1iNtPu44AycqyvimGBZZDGBAPAwTTtq6WWBZXrKyhEeGPGtCKX6SvMG6DMQ6b9PUTE56rk",
  "key13": "CqEsnpqzfgboTKP62FJLjYBd67UBHKj1C5FTGJ8trzDHS743qKExerQum3p12dSFf5v6zBEefuaBRy461usGoqD",
  "key14": "odVSJnwwjGuAh6VWWm3WLp2q5dCEbtL3DxHEXurbM1fTnjMXM5p5zmLGcXpDrimHdfqvwzifU13UAQXQuZfnfmX",
  "key15": "54v5DJW4Eh7hFxJCfzV1rYHErfLMqDvXMisrze6UKrphdhEhiymtHwa1Nwqx5FbWXR63ryxamVjYZuaJHTPzupdX",
  "key16": "52EWeUywPiB834ug2xhhz38qj8VfrYfSsv831sHL5MjVDnZPwjFtwRJFE2m2A1TCDupmd4jV25ui6X5f2YN4Atyo",
  "key17": "3MK6rYgPAbXUc1B6FB3R9rzpxdpqD83uyZoV8rviKryawTUxstWWmNr1VpsxQdvYDiuLhnVkpqydqjwGmXgYaTk5",
  "key18": "62x184P2tuaqWaHyLA46nPV95G1p17mrud7F75GcwEbzzLLbQebnoUiQSyNKdpxrZpvUkA3Fm8jFiwxqMUQ715rm",
  "key19": "3rNcL9YayyL9v9fHMmUwB3zFe4c1NkkDgRVmj9rznxmp4k7zCSfzo2StzqaCh6J5SCZDt62joqAF6Bg5SSp85LoW",
  "key20": "4r5erRT2nxvf7ZAgQX3PWXoj2fha3afXw2TD2MAxdcy5i3pFDm5w4uyxkfPVw32bGUdFDgerN6n6aS9b5eov2H63",
  "key21": "49Wbr4LHda9ySWCx7eRQ46MUFBTarAg4syqTxvSbjwquvyz1GJbC5GkBCa79Qh6JVDk8ffEu6YDBAMrfrva5DLkL",
  "key22": "XqBSmDv9dZggq8yMAfQhwJvjgvg1GAjAeUbGUYiCPsJdiPvot2ynHTdgXvVoFjgizUpwSK4FGsNA2aJ3GgHpEPF",
  "key23": "2q98VZNJHE7yAxXRNPR8fHr6N8zmnjtSYrckkkqAWae3ZDcvvE6RmQTAtJiuoHNa6xwXpRDUiwFw7qshi8stV4N7",
  "key24": "35NL2X1fQ43gFj3FK6Y7QaZisyAhJ9gMmAa62yu2qH3rgMVohcqUJAQ5AujKoCUZnf536wDvUgDYrFWSdq1H8Nam",
  "key25": "3nwgosGiUyyz32gGWQRrRwA4DGSge8JCXwFAKw3pfZBCWWSfyDanNvKJhedqTLrL6AQj91zDqX157giVzanETTyG",
  "key26": "5AgwgMj3sZzkJFsBDox7QGEm1T9fE98eMYd2TB1bQEwVjPsxWHkpJgqSXLakhWM9ycHc6yxXUzW8V7QRRX73kqRk"
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
