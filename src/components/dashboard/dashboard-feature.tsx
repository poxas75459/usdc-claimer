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
    "2XEq8B5yqt9LuHQa7d192o2bD1PuqZSiCqcbR17LF4JE3g2CY9ZWtLFxungCgcdcAusB1w9eBfPssMQN9VfC5q1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bRu17ZmMidHVBKj7KRHYCuVUA8sWnjYrcVkSDa2ZMupu2jA6AFFpmsNW2V5D1R5jvuoQujJQu2SEb6W3LRadqLM",
  "key1": "3y24xxrkWmy3xzp3DuNseEP1RmBMXU4PBTHZx5wGhx3TsSdSKjhA4pBaUwZ6r2gmKMMWhRSG1dn8S3qXgWniw3ES",
  "key2": "3npEN3dHxhQ3Nh4NiPZg9KhiQNSfXfMRyrJuf3XSs3a82j6omRDcsHuqu9gtgWaYxGaaNBMV4pbmcUeRefWt2CFH",
  "key3": "3MgbHZjR1vwkKnckgiiTt733Y4E7rfEsdrmWTxBkKQeppaNFgu9qToDPxihri19uGnc3m8hewUZm36YeFZZuSHpn",
  "key4": "4PNt9cgjusWQMD7aGsEC4JtYSy14Hw8FLbBcLC2RKSe1bw7Mp8CJiFxBfZsahYQuLjUsufnETwSdah3PkhhgLRjA",
  "key5": "4m15NmcqpJzadyB6xeC1Q1FQLSVxY7iB7CWtmyTxsR16GqgncJ5Rx9sRpQyykDUGwR5UKWzenZewBHk5NTTD8JVa",
  "key6": "5o775e9brKej516T3Wf9RMBbnhYiqcDLowQBCXtAMiAqSd6y7TAY9SEkXLieai9ktmRxZLLaYJk6AcnY7DwtiNUT",
  "key7": "4W9M7DCDdpH3gYcveiahh2bFJtS75vqj7Ld3gGhpT33GikUZYVMcm11w53rgcKEo9NLRRbHDCPvwQxGXZEHKMDZ1",
  "key8": "4cEupRgKRX2uhz1sbu3SEYfQLASNP5TgXBp5pc89dom9HeMkzedjZNoNdns24avExGuinaPNNMqkjp8ezzpQ8QVV",
  "key9": "2nNMm3hbrxQRd7o14oHyjJfRTtRqMJvNb6hKmrT9aUZb953DLqozZbGjwevF3nuzPESiob1xdwRqZi44R3oRRm3j",
  "key10": "4S5ikXQuQip9uf9uMT1gZ1mBk4UtNJq6vmp3gtGBpBwm9k8udT3yhPgaHkvjf3faNjidBGYaFMc7akymmd67ZYjd",
  "key11": "3wwhSEG4n8t4q7iBxTV1Fcce4pW6x6P89Tt1cY6giDrmfPciQomLKALYDfAeNkvf9eyzZUxt7Gemud15NN6w4njF",
  "key12": "3qqWWFEceFUizfV6XYWUMcgAKDmhiRNe6FGJ7TPoVyxRn8ULnCmwTzEhC4x75U3izoNy84REfkfmEB7RL9uCaqFg",
  "key13": "5gxnd4XCeE2sfGBPiaUYdHX6mk7e6hL3qHkmUwtocgS9vn6G8vdCRK2caRjF9DBB68JbUhXwLXmHw8L89u75YtpQ",
  "key14": "2oDrdeFFqekRgfqkrXbyc3kt8wihzpE4Q7SeibkYhqqwqsi1NPVA24HnkcuY3H6UFnjQikg8z7DgA1Fa3b8wXRH7",
  "key15": "XEpchZCLsQjwCtVC1iSf2EcaMTVTo1VqXPEDBHXAU4bBYLaf1iaCBemSjjUtsBBdZUsh8iDZGZxrGQkhAPs9D14",
  "key16": "ADHu7Yxj9frRJ7TeESXQjEWXhrHVZoFyqVpm8sxzgvVTyEZE9Qo5cZ9dUMWyVYVnfXK5wA4A66iDfi3ZzU45Auh",
  "key17": "GP85APk1XFkDtuSutVykDTpM6Qjx1UHerumUeU1GSvixP7ZLkC6ZfiBmcrcygUWkXwXiM9knHJaCLNZc37Pw9v1",
  "key18": "4kut24kU6fBDnbNuqAkvuvjdgDfuWEzeZkYkvCBbQpvfsjoM4GX84FimaLnT2Do1keHCwwojMRukeMGrDfEEbP5D",
  "key19": "3gyBsebnagAyoPLCu8v4Ro7C2GztvszMeyvXvqudMp8QkUpUXdCVuLeiLgiYUBk5yKrqdNL9eSYvfbZHnCayYBP2",
  "key20": "ZGf4EoFqK1dB3TgTwvLAt4WdMda7vg6pGjcwBjhhMVURvEzmqQCY5YNHdv95HHbfzRXrVCqLRqi5aTVYtJDAyLo",
  "key21": "24RXzHYaE1Mi9aEAB9HzT7WR9r52ENoSKCW5RvSiPAyNemtjjznaYdFJeq4mzasBcBxdGrnLvWhvuKhS3jtiaiPd",
  "key22": "3duymH9qwhSzWFHcsKeLxFL4qTd1BuuCKNZd54PQNyj98H3DeKEswHfjLAKqY4GASrcZNARwP7esA4wkAcm6nSVU",
  "key23": "4rsn3P5YrdBFe4iy8TmsAzfG81tWidVY1E9yW19ose8Ej7F7VKLiTgSKp8TVopffLB9cqkZay9DRNKaDhnkMx29V",
  "key24": "4ZP4Ye34PqstG9ecJinsEhiZLZgH93yFNyft5pW8HGFSCgSnTr8NHJ5HcNNKogu6mPoHBrk75bBBssdDQVvePPEv",
  "key25": "5CvTCixL7shuYLXtqqiifoi39fmYudQMaBRsPV1QJUrn9JCBBZz4MZmHrp9FVSYAXKDueFJE59DiQb8C4PdPiyq4",
  "key26": "rPiFCEnESVo3rkcnGuVDAQLpybSUM1rnehdsh3uVawg5xWwxDeG6b2Y1qPbYFfj7SuRJVqJR7hP4tvTwsBSb29q",
  "key27": "2uSJkE3s5X2hVS21ZZjXB4Z638vBdrMCKAaKW9EUSJMDiVBNAPiJ3GXnBXtsJC64MwM9mseUqJFZrWrVbgPiyzVJ",
  "key28": "3inPWkAQ1oFhzprsvAKn8ve2MmAnjiAGrSWV5HRZpWB1ZbJQjUMzUYmrL1asQz1rUMoDPCFW1kRREdisMLRbLHWB",
  "key29": "4e4i1DsaMyfTmjvnjTdu8YVYpxtzr4cDFWfuifSzv9kf2aHEFDQg1Jn4jfYwJTm8qM3WfTCfUdx9MgTCDExbotVi"
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
