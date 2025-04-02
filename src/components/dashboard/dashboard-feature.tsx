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
    "3cFjBBbBKJr4FsMdPuwWHNEPE9PwwZb58g1EmbQvQPKqKThEYPZrJbSvE5GxkGGvHXphC68rAVw99MfaCbYXWZfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "exJ1yjf7cc6mP4URCK1VCmWAhCCFHnRLMdK6yTwo7r9VjQ3YWPosPFL5iaZExNiU1wLRFynMJ4vA4kgNhJ5izsJ",
  "key1": "5c6MDoyf8jdWVVcmU9GMVA5eN1vRmi1L4b5uRyB4Kqs6nud21aJGtb7TViUwVvZVgNYGWKDP5cgUJbjzFmwW6mhr",
  "key2": "4oEc9ZybSKQf2da4sywsSSskM6bW61PCBsYfuwzY7AqCVX1hhzkBiJeK2PNFNHKRL5FoRbMPuWue9zvkYGo9RN93",
  "key3": "D4WCgqygSpsbA917vsNgLPGVjDvbuYKC8aSfhBzruZNbB9DZvBNPKENXusnYJU6TEnum9GHD9KUDRy3v7iTj78M",
  "key4": "4KWxzmnEEnoj3xdQC4zorP6QJLEGMRpdvQ2gGc4yMjEXsmV9oBQMHotTzA6QVyRw5rFMP38PRuycwhFNu1ESNSiJ",
  "key5": "9hsHT6LSYTNeqpN4g3S7toTSsXqkZpoZe9Bayxce35qzUZV2pKKcCb9fWhNmC6KXB3CMeQFkR8ZchH4Cy7peNqU",
  "key6": "2hKCbXLLWLrQwrnvx3tEXbbaJhKhPLE3kaAwWsmkGBiLNc62TvURAs3RbiUHLM7mRBWqg4AWVApHWm73VH9FK1B7",
  "key7": "42oKRYr8UQKGmDAmCkHuyQiBt5qLHDJkKKuW1HjqizVqgDPonuVFSuW6GAcfTyjYy4pQDHsch4UxYmcRAwPASsCH",
  "key8": "5ErVeTQxLuuQq37hnWGxiDZW8EYziZaTx9QkuHAv5gthhb4rYDSCiJWvKWTEdw54ssTnKeNXUpM6UKNgmLEsVMEd",
  "key9": "PSyPTJoVjqetxxUgH7uxZJABM38KV43KJwqzTMEUrUKso4uUJ5nqG8DkaNPmKUvZ9MUZKEps1ZC2EK6pYrNTnv5",
  "key10": "5H8MYFEYZkZk7hsKGjCz9bpgFDd95BWJaA8e9iGCdJ5efxHGVhYN1TiBVCabmhaUL4mhhn4Xxdevtw27kMkDV1iS",
  "key11": "RQNKVrD49qtdW2SXESErXcnULvjwiQnKsuQxQtt79fJefB3XFjBzCayCuvF246TQBNMzxmV2kibPEZtrouzJAEp",
  "key12": "3Azr89QC4JNWQZocfwsUrxV6QQvnBQSTH5pqEaRLMnDvnqE5qJpCrwwWQsE648CrxR8z24RQ8ySxX6mxDjhsdVLe",
  "key13": "5EmxPJDSqG1UHWUkR5s8TrgKW9KtAhCxpQT8YZzgAco7EHL3d7xmpRsfE2vacxvfd7FBDrje5iPg84xESTwVRebt",
  "key14": "51G6EtRBYZWU3dTXGcojD1n3b4qZmjMbL25ECdAoBCkfwEYsEfnHZVrf4ENzU2Wr1cidFJf45Jw9X3G54XXBEioZ",
  "key15": "SFkSNiguVHSTgpednf7VfmZzuVTsxj3Kusq6yUApc91r5WMv4NvWZrSRJ13krhSUkeSBE2p5FKQE5u6j8AdmPq7",
  "key16": "5822dDMqxrTdhuwKWsqqTmassChTuEp1RrdpDPXjU3yxfyXPNCjQoeJkuT3akfrgeTsypBieEMHp8cJQyHqTvp2b",
  "key17": "2oNbYMqEhGuhSjiJdD7DBd8bXZJcVLCstSkzsSouypgFg1jFf6jLyLk4yPmN6MkmYrFoWrmDK9uKSoBQfdmNBAxo",
  "key18": "4o2J24AGpMG8s6a24srFPthxkqg1VTogN4J7pkh7pXsFFb9pLy3aXTGRyr9kfyUDGmnd2uPitKT3ExNRjm7zYqqY",
  "key19": "cp9tctXSV7CX2TanQyCjAK3gz5mpTLRRWNqcpWpNDAnTRgMoFuC6EQDvcqxbEeFBLYB3dXRmaJWhvEw44BiEqXM",
  "key20": "fstCua7Hdo6kTaVZ8QFFSgK8135euaij6Fv8nYkxpUyAxUjAxzh7hFPzjHa4eUnsPDFcaE97yTGyCQUw5xsy61t",
  "key21": "aZi822MKSP5GcUixHNj6VJLJ9r1ESCj5bAmRHJ5UjqCvBtbMXGvJ62VfG1yFACkULgAGnidkBatnV63QuGFpCUX",
  "key22": "3sojJ8VsSE6DH4CvpT2bbae8ueRaTAW4dJqMgTeVNTjhKKiBs52PJS98jLmDA12SFkPwwD3Tmo29XJGcNycZnn4M",
  "key23": "3UYygQ7BVs8mj2co6V4oX6t3PR8PJHfERXgbm1Ri1WYxn1BB6H8syyCgrQzm9WqL1CDKp6i5bDPtuppTELdxqQPZ",
  "key24": "2jpQuSKSMUvKtoMSuXJGxd2KtV2HJjJgMqLJmU1LJ1Vsdx8HBWJcbFUXYLSciHhGKxzWfxZm7FCQA4HrBBDTbgGs",
  "key25": "Cx4gS4MbpYyH5kHN9Udw9kKAiaRavwBBkvygDTfMmgUpo3FpM2YVSqH4BC4SiFpEFphsTPqaFe817i8VcHdmHTq",
  "key26": "8zwXSXfRx66ZBUHBopvYXbTaQv4A99n9E18ZXhyANDsncFPq8NN1ZYPn78WQxdC9NLeRzVPK6Et9BkEL2WSurvU",
  "key27": "5v6kYGAFPjoK95EWF3wgcetVqRR44MUvpGk77Dy8q9TkGiX6s2XdwATv5HD2i9DCLdxs8QbswfQBMqKu3rD82Lmt",
  "key28": "3ySfQqkzkxzqiB6zcPhcoPT8yzeB7X28K2BkSK8qs5QhbCyB7HAKZGBgKVHJLK7NxAGQAndq1tcFnRAMugSTCA5o",
  "key29": "atEuccD57VjLQ6kbkTUQAqCt29HeDGVXXWMRxu5DmuE4jYdXiogoC8TEMZX4v8q9HiYR2CjF8MpT9LNMYatgfVs",
  "key30": "4cyT9Nq6WWm3hBnAguxPUdHk3ZnD987nrtpNWwavKGqc7ZR33hiPFFtbxfqtpszLHzahLjev9iXWdTaDzdEvpJV6",
  "key31": "PYmxnAxWWhjNAPfBDoWb5M5DpV7bcVAfJ9E27yKsyCMH167VPAS6anGW55pQm18KivcQzeKxzQv1Vx3heHjzgna"
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
