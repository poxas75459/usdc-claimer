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
    "35XUZEj9nDggsxcSyTY9NKickZ8Egmjv4xCULH827TfTk55TW3fwr9MbvsFBbRp2DyhPLWjghfAYwjBYUdd2v7Ko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LubppR5pUXGjhhfeoWixTeSdNetJVyy4fn3s9aNapwif2da45aKqpTph3re2uJ8y1qXxqtg1PzxX1E7ByNgLaR",
  "key1": "5HCVQADS8ggWJU6n8L9JikiierarE4pqtkkEcBEVzGvSyzJSAxjKaHsyU5MSmzx7Niqm5PEBn9sigaV3g3f25M6o",
  "key2": "31Rwr1eD7z7fUvZQhDpCbd9Uoe1ZqNUL4AhRUX2bztmcRtf44WBGrX3a8qJjjdEnYj9fymkt1A4mjRvHv8YzvLVG",
  "key3": "3Mpovr7pMioGxSpHHkud2Y5CsuVKKKxXrqujfsNLDy5K3Ni7QVd9hsZReFKEh5oACFiSxohauHqiSuWztMdzLm1v",
  "key4": "Edu1dHEaiXGmcgBSYTcyUQFkP5GmN36rToPy4rsjHkkB3HCG5SBVxsCf4yeh3Dg3SBSbpRHVitJzctE4Ztxn5mK",
  "key5": "Huq69DQdsaPdXz8SoXZv1xkkXd7eE7c1VPv4yP7bWSV7PF5VM4TczsLutSJTw97mdWWkuK9XWLv4rPNFHxa3rH8",
  "key6": "3ebTck6AonfJ4zaK8PjVqJP6R4fHrNnjz75ASoYFXqeG9vX3x2wL1a7n8YmcNyZk2JdA1Rov7qWruiLK1dYe6VMv",
  "key7": "67CbUjLqEifTTuKNvcF8dbFqGJBPmAiVe8J15PWHLDRe3vDbMETYQ8WSqWZ51FX5mDDEaZLwjQWXzXTQr5ePD4iN",
  "key8": "46pTory1mLUyNukjcUVd65P3GWxMxD9hingk2sU6Gk4imS8noeYBgD6DVMqQkoqtYi32n6Akd6hffpvMcUtc9NvD",
  "key9": "3mCivwv6goLGiHF5Ye4pVreMpf5jMUkdMGbgB1LyahMFbrsKpTCcy8ycBcZFyP3FCU4ZgxBmJUxx7dssKDSkdeyz",
  "key10": "2jLiFbeT4mEDJ4n2Hq1wRgGHnaoU1SHn7BkhrSnDkbMGiEhRwwe66LSyA5Sv98CsvLjkZxKGvYEvxXJnwdbC1EUZ",
  "key11": "iwSHNhJMguFtpmduGd1m8jEJWzzHHbYfGhnk7iUpS2HuSLQUAizpwwS8ny44sbphEu6BAvyJzJsw1Aktsnv5zLy",
  "key12": "2LYZxSVzqW5cKPGA8At5N3jM245urG8n5ycEHEUra4DSnnwhhJQMoR6HRejfQdSRprbagfCC9BzAGQoJMnc4tghX",
  "key13": "xzi4g8e2JfWuCRmReScScbrgMNDY8FKWWeYaPxcXpXWRsfWMd7PByYz42SL8oj1fWC4toW1RDRmNiX5GvKgNUZt",
  "key14": "4i1BwhAGeSrTgyDCEHNsbi13UuyCjaHuLXmu1c2H7VXicnodiVmiKHFdWqym29tR9kAsXeX1DRpJDiFTnxmYLz1C",
  "key15": "5NP5EQxbTJS5UGnfV5CnHPQWJc3oS2nhdeDzzDsrDTFU1tdX5RzGoNcXL8A33VacSBnGFHFLBQJHpkZxYDtrACrf",
  "key16": "4asumFMHxsHMGx9i8qmXfCo7m8wg8M1z3xoyXkWL3Uvdvfxunn1tyqzEx7yApkkVgM1rj9pBkgmNZ3LT5uyZevu8",
  "key17": "5TZvR7ZbangK1gJPH6CVxfGyM1PkVzsUmLed6MFNZoGaRX5QKhtvKNJmJcq1u9uV38rA4vTvM1mvY8sao7tXhSt5",
  "key18": "2DaWhAUFZvtaCjxiSmKT8AUNvuQmuqs7QwvhPxQqhA8p7uouM2tJf3euKPZcuYFZem2s47jgCJto3fUH9pgFt7ik",
  "key19": "59ZpWPDKLKT8MdMAfsY1o381APvm1qRhHiF7sYvuw5fuiqnThcyWDKtUaynGdRudScRPcnUiUFM2pqp7kz13xjxP",
  "key20": "MCrmdcirY12a8G1H9yd1YMta32wAS41XM5a5onXkj19w3Jkrb3ocHDV2gZEGxMTs1k231fjQEZwJqMP7CryVYSC",
  "key21": "3CJVjCiPyfnozXsZ8sKxjPAKiJyFTHEfNY8hkMknSZwaL1FTuKz421N3j8nbZDbQLTuGkqYbourL6h2eefos5Sq2",
  "key22": "2Ff5Tk7WiahAf1vqDFo2GzD3625rdHkhPFxbZPNtojTqD7QjtA1GJ9PqFDhPbq97ph4dP8tGjqRPJKg2m7K8grK6",
  "key23": "4mTCuCpwomBofcSHZHrfc6kPtBET1vZqgGy5yzSrYguFYfouJ6pN7X93J5C74CHxdXbZN1MoJ3jQAyHKkqrAEbQC",
  "key24": "3eU5Yyv8y9aiwWNo5f14mkJpPiEopDsAxC1hKgNC86mYMNMXXL8116w7as5KbdkENN2BqM5U65J6Z86Hm6D3k8QB",
  "key25": "5fyYVAVFhKBKa1Ji2eLU1KJG23D8DBQ38ZYxVbMSjseUMgP4ykcVnN362pLwfJ2qQNECGzRhsd7d2JXe2H5SmMoR",
  "key26": "65zwYazxgG82yvAsxG6BfYjei9BE8cVnYorMBqqrGhmtcaeDGGM3QMS96Lwjbkooq1uR8Z4PofRjk7fnsq7Xh6RP",
  "key27": "5YCZWiieFbu9YZG4Q4DUp34PZYujXbetCEkYPmehj4E8FW6swGhw2xVeUz4LydKCrZPUTiP3i75RMTXpb437Vnm7",
  "key28": "zT3hTJizGHG1wH14zvYT3jPD8fCwNtaooeq4sjwqFKELtsuj7XDeSTrjcwPyPLBSPY5ABCDxR4Ee1MSGZUgPXbJ",
  "key29": "66Ak8LM1XkzQSzdVXysxeLaiz9ssUL8c8Y1S6g5yG8Czae7dZ7BhGaYRpJK1JSKCSnhccW1z8YC9YzW9q5CiBqJ2"
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
