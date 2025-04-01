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
    "3kzaZJDPY2bCV7SNsGT4LEUPoxwHag38vSXM1Y2DQv1JR8vgZFEjCqBdkBKfLEC5gzfHKPA9ayfLQCXU6bTnMKkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rj7mmXWyokVP2GM6WLYaG3SWVCF31aStXNGN76xKij2X5b5gDwJuaXFgX7MxkmELqREoPnzg8MCXz7SpT4rtoQC",
  "key1": "4BmXfxwAGkGcFKdsrymamKmyvKLo35q5xD1S7FhfLtpwR4MNNv6MmgZFTZWAYrvJkpNFjuRcbF2mPrxRxuTzdab3",
  "key2": "4DagzE1mucDXdSURDLW4p2c8EEhSV9jScBdCjBNfJsm7ELxZ2w8PJKn2FGnDFvtWkagwPiWWc4iSpR1EgWpB4nzF",
  "key3": "2FY67JWQ98V3j8hamteBkrBh3D7E6j5gci6SH7hLgjKmmMwF73uHEgZv7GRBB4NZP2PEuZf4sZng1STnHZdLTbWd",
  "key4": "4dRz8kewiZB8w2cd1pXZRpZ5HNLeR9yXBknniYrWe7uPFWiq1ZFC9xQN1r9v5kyL7QU8H9pHszruJpcrsAPrCkNR",
  "key5": "63du8DzrnVUoiLQW4ECBMCHBZ4T961gGWoC7Mkr2ahcP9ERhPaXpwskLvvJM2mzrjNLtUtDaA9EXCuY6zczDqthR",
  "key6": "3dhKHSbvsnmTEqTbBgaiNbdjNwXBGpU4su3WCQ3QM7opunNn7SELjg5eW3wJyvzvcbtNLns9bmxzzykAw8oWBf4A",
  "key7": "3f37zva4WHhgALeWwaYqvop1Vs9VDMhxGbnhLoqV6FozSmzg2h2Y8dbqivp3439nYJDK7cXUPxk3f9uKLbEYoNDU",
  "key8": "22zD3NwY5AchDeXGfLG6uig4jLdeQC4ZCN1TRgwGTEqTFZrUs4h6c3WnZVv537iFQTRkdgfxS8jxk4wk6daPCWyr",
  "key9": "3pNFgSVkUSRBXkKmfWCzubrSaFWgVhP4RfM8Z9QUEy1b7XuoTAUhib6uRL7ir5bxEbHVG3wgQKpToB2k7RTniptn",
  "key10": "5JWHq5xYWAPMrtQbFCbPrDLqtdNyhBxMhU785Dd3szmiUF4EMf7EaPhCvkd2K8wj2R45U2nikmYZkgS7s84Emm2q",
  "key11": "4LTHiRr4eMwdfiDn2PY2HLFN6vkRA1khSBfjGcfHWikt2TZKVGttdvCvssZs2kvFoRKdYrw8ChLNWPMBPw5Gc3CM",
  "key12": "5WJofkZQXQ2mh373wW8dCqhSAdKHAhDk19rYNSDVetnhoZXPDj12UQXrXwtrPRMxzixWxoD1VhFE1TW2QrFbCaX9",
  "key13": "2pAYjQmUNiu2HNG8rKfMAayEiV5Gkae66Wm2kHRyuSBcSUdZDnHEjX2Up3C1ZVbAB191ma411v4nqhePViEEjoRQ",
  "key14": "2VqrUjiDNsouHpUsEfrPLezHCx4x3XqtmiCuUnCSbegua1kv5JouhaXDsm1N85CfYTWTp3eqvyCiFPoP76YywBCz",
  "key15": "xAm3U37XnbcHAgpSS9RFBN6hZXp15REf4FNJMQEbwZm1sgY6jeMa3tUNY6rNADEiyuKpSHWqnerjuvKXqMfkq6b",
  "key16": "sYPXN6E4H77ZrtAtx1AeMU1PBoionKfFygW7aZLsro8KxL7Evf5GUeTPNy29aM8gbKiD5KZAzadipUbKsFXhmxd",
  "key17": "5oBSSmsywFvoE3zZccpAaQpywXszHoNG9CiYVDiuGfvf4fbZPCxskAAXxpkzjtnE9WrFEDunEAEzGg6x97kuc5kR",
  "key18": "4vWTuCXSYB32fPLeWgSLjbUhRqZQjUN4dEfe5hhoSspnvftmNqk5aesL9Uay3L16QsKEkQYaP492dHTunDLDqUZ4",
  "key19": "pTp5vyQtoWELxrejFbMY579mauEGehGYjn84TEWcGXTDM4JrepUFGNj7FMAGdYYUZqDqoSCtYnNSE9kKGyu6wLv",
  "key20": "1kx9rRdVPcCZw4meRmkDGivZg8XorxeUCC5TbL7ep8hPvZPLjQe1vh3fJzYyrDuzCHPjPw6NFUsKFrzatwZzoRQ",
  "key21": "21HpbiKuU3YxmjuTWCkWU9fDgMoYfTBSiBg1LnyD677gwXjzabT7s83BKqu3kxPSW7bDKSAA9diPkP9MPMe8Hsbx",
  "key22": "4emGpz55MpkXkqxNELbvDah3Zx3Lk5wVHs9Qb9AgzbSXYFvqBh6Nmt2u15fg5K5FN8uq93GuzDaXCJzGHr8Lg7wR",
  "key23": "X2TCXFTqVLTHpaP5n11gei4DyEApSnnkiLi4wsbGLSvuNbmP7Z8VagVxS5mSMDU4XpVfCYDjt8vow1tNcCtSdG3",
  "key24": "UzM4cvBHPEmJp8QTyDq8SBm4PCiSGsMXgbJZTwekfbKHCA4bD9si4eUn9AGCy9jzeZtewB4Fw1hLJCAGyuoPhfR",
  "key25": "5PCfwVeAwKXE45UbUgLyycesa45WwE6UQUKGDnCwJP54zhiJgWZEHFYwrBquSn6HNBhhi5HWRUaNbqjCsGWNEQ3N",
  "key26": "34RDJ9t2LvDqSdiBJm6dHPinvKehuSyDcsK8meSY36jQ4SmCi8a1YBTCKrHUX4wyELijj9iQbYumMhAjm4LBRcw2",
  "key27": "2ASzwPVxUPczKu2Ss4S82DkeA8xJDzntN78VXWPcQin5VBKGXscNrc7vhHg5hRi87JzX4TAwZLsyDyT3ju3hciAC",
  "key28": "ospqodSgyRu8bgSUPQyNQmSc2EEkJ9rJwiKSsdGbbXJ2HYfhaLwooQhJQuBrRoBMiUDFYcVhhxCr3yDhyex7Vvc",
  "key29": "5LRP6QktRNaYmev35gxciCwwyyinbtFqCJQRGNaGzZ5JfPNNHELRfpNZob7oJqjr1nkQFR2mwx97aatVsJnFp2by",
  "key30": "3B7ETCqvabYEVxKwMXoybjxtq1ZXEhiqyAaY8vJRrpTLAbUktta7QwigBdB93oCQJgTbUh6fUESEG8QY9ZLqySrt",
  "key31": "654JbLC2HavTYqHD7tieT5qMXxScKMJkVV6WmFHzkwbJyfvzeGdWHEw7ET9uNHQwmokDDFE8tQk6SaDHLbpHQ2RP"
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
