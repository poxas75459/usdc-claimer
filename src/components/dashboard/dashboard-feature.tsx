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
    "8CUoRWqNW65H4LvZrYFmWRq8wgnBVM8QuwcX84jnjjxy6QSsRh6eDMXQaeMctZMbz6XmHa3C1BaSuW2Rz1muai5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VjyCbU2foEhpan4a5pYRfDN62VzRyne6NJbxRYqE4A6f84ZUtZyUX5xEufpyxqLEzhNeFuYvzEMA2m6m6cWbnKc",
  "key1": "28Ec8B4chKrVRGctU86PEJAcyBndxFmgcUX639z7ajbmhZrd8Hw7G9suwmK11q4fsYrLt8ribCrqPy7dZYMMDXeP",
  "key2": "oqApoWzrgtWoowmES5ASpKLwafuT4jGjZhFsVfX1mPwJPoPNT3G88aVHoWvnGBa4XrjqfAiWyE2yoBMeVMK8du8",
  "key3": "bswgvccLmbR76bJJwVvRpvi2a4ekhUoesYxdpGFj6dK5soX92Ceswo7pEEheqUeSWqZcPNWJQ8cZAfJgN5tXxnz",
  "key4": "21ER88eBmdVqt8Vm4Aure3KUtKbTLARXQGV6nC3FZfLnUGrgL6eu2rbP42ABURxrtDhtoiu9NduNLQaAnWU7dr28",
  "key5": "nbwTAS8SuN6fHEBg2jwVuSFWvL63vEVkaGzBSVNamjW48a2xqcmRwXQUZu4qH17JzyoovrRAyRbbNeBNhJQ53FL",
  "key6": "2y5PMwy8yNpCjYKrLmT66wvnjMdWidSwzi6kFBbBwYBfwcC1exPqxA3PYyaFS1fTYdW4b3abVZ7afP4VG7rXBAKi",
  "key7": "5aXkcWSMbE98k9fcFB63pgawzjKtR5kic5tkCV7babUuQMMJaDoDbQ93khFZYPJ6oARYjRh1f2JrHfYoN5LudULD",
  "key8": "2scTWxphjVjYGW5S1RvvLbDnrRg7j4wKwwk7WRH8gHcAbow3ww4bgBDKYBpCSWG1LrQYm5Lgx5J6wqUx59h8pAj9",
  "key9": "251oktdjBjNgUSFLAHrjNQRoioYsaGFhmFHzmjDPAJuvxuLDk71Tq2U7Y9aaTT5VHRN6rE5PQPNusXb5K7TA1FzX",
  "key10": "5WGq5JZbyeCRtUXSPQ13HYZCeohWYVcnVnPvxgrfLLmx9t39w89Ez6ft43hJr2UAVxJbEiRagt78NJezMSabhHrw",
  "key11": "7XATVFunVegYfXEvNMT66tHXpwzC5C1hKso22qpojviAd9nUF1SQXsxD4FZgpfsPggHiNdXxNT2Waes22ZkkGtn",
  "key12": "2bP3vSusk2HcZNttBp4hJa3GjjLFr13AEcw3MjGroqmzLN9TD6Sm6gyqvNNZqYdePbtdvrB2ktvcKpoC26MPGjAv",
  "key13": "4qdyFsdMTJR1TYAqFwU5m7BMzVwBsvgHn6V8ue6XHwmFHkAW97W76raSHr88CsHhcisURCxeztHWByZdtZag23Ac",
  "key14": "5yPKQVciNJ4b5WpUUo1PVhHyc5wfbT1i96GREsecr18DN6p27DhcUfbE6HDSGREhmADGJEdASGr8sWiNLnMZW3ck",
  "key15": "4Qrwv9ZsZFWSYmRM7eaQPxk32ZMmJh9WEvGqwxEbVzHwoKmyJVXbLTQCs83nsYfi8yBKLtHzWfGfs17kQsGhqmGA",
  "key16": "3ygamtNLbwdpb59wpVgqRCMPRtsPeubBFzZASNHcSRhtb7bD2eRYkJfagDM4JvDyen4vYBbHiURaV3ezRM8jsj39",
  "key17": "SGy6tpn7envEsLL42XcMrRVXhtLyVpcnHEoM9ZTrE247rVynkV2kr5D8opG6kgpjntCrQNktRMh4ar4WgzuNvzg",
  "key18": "bRSwYjNfnEGSmBMisjazwT1nyawtF629Q36wcZjkFkuguEcBNKSNV8GVdYrSBBVLVHkEsYZDrUpoHDXcQQKzTNx",
  "key19": "4q6ZM8zpkjbnmMwpvP7ntixiMaWtgJEcrxGse9Ew25CysvfZUuaVUYhXwTCekxX7iRnK8jm9rAYonn2CFnPtGuAU",
  "key20": "5D4x4H73oTTPjekb3NxGPShtAK8ae9ipziUAMyj1kb1XTWTykjzcbRfptvPWfx9qSJpEeVDCZ9PetMnmujH2yvJM",
  "key21": "2mC1TJaFEffSdm7TKdF1FztBKu77Ahmfz62Rx5fRPwRtW1i6eR4wggz7v1wG92BjYt1q7TUbM5YwCCX1iB9ZFGAu",
  "key22": "3nizobZg7q9q2vnLjGR65XbvPXczbQxrqwzfmRzytxQXyMjGxSU93mmn9CkLvT9BTqSAnHhmZ1u5CBFFihvdE5Py",
  "key23": "488Zqf1r3i3LFqSzZ5W22LhjKotChr4V9LKiRkj78od8rakdBF196D9NLvvkxPZuG4ciFiFxnBzUQAZS3cyEh8cn",
  "key24": "4VWtXRpg7cf92f6YgqiV6dxyfTSEtv8QMvhipHbbDe8JRvrN6Vssqjc6qhZLhZLLDP4tESkAdgexcFPpVR6DCZPq",
  "key25": "2zmN9eL589dpLMSEf6tEKPioMqmiZxjuuAzM623DN78z5tWySyJBeHFYeqjkRUTM8mTTQtPgJGGQGrghPKAbMoPa",
  "key26": "yhfwHNig2bQGnDzpLDoV2YvtPXwb8TVYC2P9jNi3fqctFcmkyozE77wk2RaSq9bN56M7pykaBHrRyiiicCJULMx",
  "key27": "5gJBCwP5c38zgPddDQb322bMsqHNRnisT25fUTdeXBfco91HbRGfytcv4P94HN3oRZQRRmZrf3RdnYNM1RVocR2Q",
  "key28": "587hCiTK5tvYFYULourXXT5r1R2mwSAEt9qYcpFBNCzyZ5RACJFNvbnfqZp8ssoBfXQFFcLwXE1Vx2hkws6sy3vr",
  "key29": "3Q1kS6sZKNtk3V1XvTrVKuUx1kEnbh8iLTfUEiE9JA4YR8Dx4xFxjF4FK47g1xtZv7VtG4zQgAzcrjdVQFUJ6XDx"
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
