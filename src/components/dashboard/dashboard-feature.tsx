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
    "2JA2GgDvcpw4ofJjkXh4KeE43grd4bW9f1qmfREtAHwi5b9pNuvS1MmwjWoLtRAqJamxYWMDwnirjvYNV6jkXE61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BaNRgjMVgoeysV8o7ZmWXrZ9Mjj3CzEs7fChvwo7GhZt7DFooBWBuaFKHEcqiCVToLKoah65rdti4CqMQzoaCQk",
  "key1": "4qoSao2tyZ847FBYfewMa1armvSep9hCijegrKrF1xaaazkydwUjnD7XaevCfjxeKjMbuPF8Y1cfKaxVA6Snf9sW",
  "key2": "45FdzCUVB54SrDmYX9QVoMfxt6c2YzDcaPNjQ2UXkSvoXSzSZyg2h4ezxY54Myqqec3kXE92TA6UpNyMH2fsQkkz",
  "key3": "wmDQA4CciyLXvwvGcxnaLUXuTJ5S2Rujc77tD1QTADmtiCRzWyfZsenG48vw45xLxWmV3ZF8fNb4d3bWTehjHti",
  "key4": "3Vqsb64QzFH9mHxojSrnLCTgncfvRcGzVMz99Q3CJePHhbjp3cPtdhCGfoLbHcwoEovzAwR8mjZEQNz6wCqZMTWG",
  "key5": "4JX19nzkJj5bb8P3qtK1jAMKSRjPiioV9qfFcVvcnDH7bBc2V2DRsV9Tcjp3vDvfBtt4tB7zKkGecfBxPNSLFyAD",
  "key6": "2yE8okfrSPrF8YEZBotYPEKNDwz4qz3sCS67VRuN4EiDZB3oNEB1Y2kGgATZxZhRG7KSbZwUhQZ4zn8LazkL69mF",
  "key7": "41VQTXviRNotwD39ipjowBgPoZHynYzQGXTuSULDj7ZgYds8jkba4wahucBVB2dV81w4ZoEEKrwav2DEikvNhBBV",
  "key8": "euF2p9tKamjmGaWNipv3HzmqZM5MWbd2kEW5S5a7Qmf3mcyRpT43Uz9AmDcUh8LBzRTHxWBLoPkb1ZPKnFBqHdE",
  "key9": "2tHtnuLCgqVPMgDqe8rXACR22MKBuQZnUzYgQA5wgUwBftDTrcc2bkN6exLn8nPFcVAGci8AZvgBq23AexobH7Q2",
  "key10": "66eAbPJcXb1LAQG2iqV3XK9BYBn1zzsdic3MKFVrnbgKLpB4sjNm4NHoVuAZfEUTEDPTpbign2WbboaxvH9bwf3C",
  "key11": "2LxjAEdEpAv2RkkEyc39GuYosAFij5LCQUsmdUcbYfAjoFRNY3wADCXHNMnghwbxFMU37bPPqUNJKnx6JjNhHbQL",
  "key12": "2oshuwEB6kr5nZH8K7mEGWEQRAwqBdDwsrXacxRjqbQfkEmGRXh21i3ag2hU7gTz8Gn9hAtqSo2JDHNV6dfRY55p",
  "key13": "3jKXR3qW6sdrbEGsEwiAZ4TVccWqKzQjeijhUv4vXgRAprW9JzdL4EeZZSQtPAb3XxcDrPBJC2nvw18GpiBA2eHB",
  "key14": "4mTZiiK7wf24pbSH8ngLnBmMrtcoLsUYLtPUqo1Pq2geHpApgcbpJVt13zedeZy4VbbM4CKxLXfXNggMyxCe8qCL",
  "key15": "4ZpFyE3ypXFE1gsPpB3sHppjcJGiSGjVkCEFJ8fjiZE4PjeQUYt7eHrD4YQYTdWACPHtgaZVwN48c6ofKSuH8hGm",
  "key16": "BHcyFw5bDuMNtPwSpm4buLdSVpRECkf5aWp8eMAN4KyBMhvhMjHisk3QDn29dA3Mz1DbQbVP13k9m9nn6BRNsHt",
  "key17": "w68z5JYfc4hhQMLUrsYqFQyPbsuyawmmqt9rxnQSCas7C7R2qvU7eRiQZuiTYnz1FUWSRpkuUsTyAyKPUyBEbe2",
  "key18": "2PwFgwgAi1bnirfbExCCkVpJ9XxaJWKzdMWQWmaGw2LtYZe1rfTg7L3MfC93aSVL4hPmDJQQpYxRRWw3zZgkjsbS",
  "key19": "5EYPVQZ1djDr7vnTTM2WPj5Ung1GLQuCqfATyirmaaScFzGrsbRZMCKW1NyVrBdcudQsPwpukeMckdaEZZs1aRKX",
  "key20": "4APYfW1dBrtFuvvPTZfgJwt7uN9XdaqNGGoyKofd7YKNQvuiyJaFM2BEKFnMLxWX7kVEimwgKcshanf4RyFQ6MTB",
  "key21": "55uAhesUtTbHbiSCBi23ayFSxe86Wa1dKmNLjvmdamk5ecTZuMFVhnixQL2Jfqkac5mQBeuNsmnd6c5HCMJBh5jJ",
  "key22": "2UQC3Zp2QeJRUXaGqNPG8gE6CkbzjXHXVTqxhrhwuFSwStuHcTUEvtAhok2jdAx1YXY88PbKYorGDbJYKAULq5Yj",
  "key23": "5PPQMjcTi2Ke8JBHm1JHgGk7pQR9Z7xPQQngm49tkngVaGkM1hGFrhisL9XVbvqyfhyMzAGKrpW4xnsng69Cba65",
  "key24": "3Rma4uDQHTx42Dj7LB5SCjMcsGHQ5TdJG4j8gFQUpB1tMKUGEne6zcPZzEYkZQWMnKsFA5Y9Z5WbZqJDo6Q5GQVb",
  "key25": "3m5iNy1y6p7HJsHhkKzqXrsPjz2yvzrxjLLfbsjsdP6hqaT92cgYFCz6KXxamczJiMViJJA5gb1rnUCc834v5szJ",
  "key26": "54fsYZF6uN9SqCgQMBZeGLh8bQmDhQPWigmxzVzHCzC77PpYsx55R5BSczb3DS2zB5QcdNNstjdFuxwfMJatwCWF",
  "key27": "5EJy2PE66JdfPnD9DtGoGmcoMLdn1ke4tJ2umJsrqSZYhLym1WTAoN1mPQ9RA78t8ePoqwrDrGRiDG2CjSQydwLR",
  "key28": "5uLjtrkh15VvGxzjyJKHp9uKz8Tj7nd4EdVLG9TdFM49Dkkn4AEC4Pu93FWxXiNgJPLED7pD3KYbN2yi9iPxhsZU",
  "key29": "3u6qRrZcdH4rFTH5jtTa1FxWFmuVGtXUBrxJjx3bQ3egq3v8HgT7htEatEmyYJx4KvxmMXxRocW2z4Sq7eYA741B",
  "key30": "326kWdszX6PmmnFKT6w4PGDdenAyyWLZf2zQByVoc8FK9LrHgKxHENrTxwtabpD1ojCLECTMZbjXoasHPkkpM5YD",
  "key31": "4T4xE7XY1ikR22oS9ZsUABLSKS5PmukhCs1ArSgQKofG8rmuWQPpJScRRb1HDcd7bdEGpdW4E54yFgH5Luw5xKFU",
  "key32": "2GMPnMZn4fMMeK8vTXfnvQAQG2AL4aQ12GqGxrq8FMjR4RKyUuiziKNVDUZK5A4Cz8KS6T99K9htXtnhEALegHi5",
  "key33": "5AoNHXFZd33avUHgFF2mJHZokQRMGZVEF57pDsjUwxXMDY7rGqn5zZf78rfN5G8idtAigxo2SsWCDAAyC59TPcaj",
  "key34": "2MnzyLeubAGfaNDN5WQF7Rb4Y3i5THZSiMoLHojiTyCo94BxFNnarAgcA18iNZd5951f5YCxvPL2vrMxDZB7s6cg",
  "key35": "2rVePGYNPNp1aTKL2ZexMY6xBTGkBDkJDWSVA17oNnhzcRqhBx4v1eHvM6WMBesp1sDgEJqYNDubopXAznizja5K",
  "key36": "2J2BoGhSpTPs1hNMqBUrNRUr8zsXTQ6v7ikfKpcsSfVy6G4qNhRNKTMxxccqn7WNqBHB7vgEm4BRw46HBH3V9WLD",
  "key37": "P4DN9UYgXL7Bb6Ln4CcUpnDFgNAU4Y8zySpfFSVmrHUJRPWz2WJLLVE6NxjHEC1eoU7fn5XT8QfEstXmEJ8H8G1",
  "key38": "CsKeKrVC7FvBpPZy9YHWo8ixKXubP3HxsuHKjgifjGezmtu5wwMX1yin5WXhqtT8Cc25e3xCEziWYQon7ds2vyw"
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
