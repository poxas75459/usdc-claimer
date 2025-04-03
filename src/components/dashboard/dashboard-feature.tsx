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
    "3Z3zDt1oVT6WJEMy4aGKfGRvQZmPnEn9DFNBUthnwJcaXdiYLNgifXz9gXTSFFtbySZ81JyA9PtRrfJ4XTavLkL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iu2dqcD5JsKhcRn71MpqnywhfBErcDv2wiFhvCFbnwdWBrhAz7x5kPEfFTqwDtLPjxQRVrjpHCoSCxpUHFQnW8q",
  "key1": "5psBf1t9YChNtXuJWr6RtJxY77iuFknUD98ePPLaGPkvtsZCimtA6ZvVuFPaYPMvZQUxjLLgfLs9GJWTM34Jycqn",
  "key2": "3uFzc3SMWzmVbMtGf6jS3u23eged6HwtbzaAQ8amVDMjbrcAudvujR8GcGJuad6z9nw9YL7HUyodvvP26TLwCX8V",
  "key3": "5ahBfhSXQwWv6fyR6cHurkJBR3asxdjxsPUmx2B4ytqQRsnjvAfwiTM116BSJ2pkiN5FSzAt1qAEgKJREt5GSdPP",
  "key4": "2QTPeRW8RMfx7TpoKkPYNXN115rnTBXzeG5zRddCrrtapCvh4U5HWAWgurWgc2SATacAyJfGMXGpxopdgiUE6oRi",
  "key5": "5G6NNDZsaFY61vfVqd9bemR7rbsbJ1qGYHWmvMi5EQYzv9iF72m9sp2Gtcaa2VNdu8p6YEnCMmctv6qNgraYdXYU",
  "key6": "jofy99daM5F81nvc4Ud69govZyet6YGsJCnWdap5BEAA9LYrM9GCv5rEL9g7kSPzXm48p45EFzUuTLKkSnLNfyF",
  "key7": "42LDTiCAF25hXuEYsiQa1JyYNT5MS4xGHoju4Sj9FrJswNzwN4Fp7ULbm8tRcySh9SaXFEVvA9QfGNuq4oZH4Dxt",
  "key8": "4UUSPsePFaf1ZhrkX1Nr2YtgSHv9KSkkDyJYPLKoiKxwrRU8H9ReK1ZBPucFtTihmrV3mFFViyftAuWUWJAvewLL",
  "key9": "3nfePZ82S1qZsqTYSF3ipVkUGUSKkzKxphCJgxHVdemZY5nd22MvTMvPuSczW2Fnd9wgXuxMQS7NmQhodsEgyqDk",
  "key10": "2ufyW7hAAMBv6J2E3QJj8pNLi2cfbRzY4KMMWaaCq4erbMsRkyqRa1BM7xVus4wundpCVomXBRbunnUioJGbA9Je",
  "key11": "22zAfboqj8yLVuwZb9AH4AU6681rv7RDPqEroEMHFyJ8xEutXzsnwj63uf1VVEvZgXfei7W31N4XKWtc2NHoP4G5",
  "key12": "3PBi3FVnCcBzjR8q8R9t4VQHciLGinGoTHPUkMbZe1zt17zd136UGS7u9h4FHWfnTpsehWvGAnLdeo4S77H1c4cb",
  "key13": "5sMag3fUHk9zsV7G9xG1dmmKk2aumvMU1QzWiBCsdM2wtLgutALJUbMpogpacjcuUAjF5GcFNobanpGoH7egBbjZ",
  "key14": "5xvyGnT9QjnQeMW3KrDoJ6Dfm3yCoZhZJx6MUBo9MLW4629D4rMFz99LHfrZtNJQmduURXrdBzH43powGWoobrdE",
  "key15": "qsWFiDQWH4n6jnmNMpVauH6ZjEwY4UJK2KUcpukTvw8Ztr3Ur9vczQUeAtGcCQ4chyJYWfwR4tkCFoeunE9Fhqx",
  "key16": "mraeYBF1qG6BhegWqp8CQzCv7dSwUMCSCRNaC2Qs2HCZRhuXgem7gjYP9Rkqbp9fMJKa3MuBgFTor5w3qvEDz2E",
  "key17": "67EbEbdZy7AntXCBzPuBuTQcUp5dphWyHDgfyeLXZtURgvEM6TuWrdXbyiPfNBtdw3KD9kpLqa9Y36Yvv3dUESNG",
  "key18": "4GbSu8qj8Hi2LExYAUNbff4Tns5KvarRQxmWAL3ninzUqT9664NcJ1YXEBYGNZ14gGpaYCnDRYkUiD7KxUo7J96h",
  "key19": "5Cp2LFYkGVsMVoRSYK994WYvZCwDwGWoLAkDdXguBns6PHNqb4U9VgcgS97362RqxYfXYQTfq3wWSERqJn8kq8xa",
  "key20": "54iUdFnKuHfR2x5ya4kBG1wmJP35FjHpQjTYqEcXMeWUvjikXRQtKRZqv45NRat8Qw1F2KovuRrneuvtfnghDcZQ",
  "key21": "4DQxoQbLwZZotCb2d4uvJXbNz1ntd9DGqyNcBG3u22MAb23S4ht5fHR7W3mXhUnpy8EC7EViJ721G9kU4twYMcDz",
  "key22": "2p6RWFNkMFVXsSU2yTe6iURCPjnLDEemHSerUNaTga6JH4vkcyPzHUBcvYVWai5h9LNMjVDwY3G8fsG1vtRhg29V",
  "key23": "89NG6XBijJ8zRKuHuBMFxLmJE7GvZggUjBCWrX6TeGNfJ4JFzAbbHdGq4FtoikirndD1aV1BJeXmdedMjvz7GL2",
  "key24": "1bBBtPZimP3E9BAuF2t9GrwpYTpFr2cApC4vKudU1nDZeEo9vvWxzebZ7UvHPVACbVr8MiqzkJbtuY5aSrTGzr4",
  "key25": "3PaFBtpaEpsQYH94Ja1qUmDqJ4TK9yuk5feHsjJpYSvgCe8vXd6eCNvj4WYoWw16DQTQh9vPEgpqH6j4pJP6ff7q",
  "key26": "4Drg1HpSwEWWuwz33PwasY7GpGAuy3KK9kBBHSWaa2kZUULNBzRYnmbRGKs8zpTgdSBpqTapnEu1zz9pPf3fTEe1",
  "key27": "5NN6PVQFPyNW6tYAU9UJTFqCdBc1ktwfVYKTnM7srFwRCWm1zEokmF6cJux5Wd2iDNF4m9SuSepBtX9S8e582jv9",
  "key28": "5x7xGUSYd72nqN3QT8Qd6ZjTCVLsYnsFCEnteTQwRYjGT1M7UqMvCCd3vX32ferALvwnQYvvq1Vzvon18eVXagE1",
  "key29": "127JTdxjQWZzB6GoJuMbbCXVVpKNhNBAXKYGvGqE9L7ssSLf4ipNgroqHaAA5t7AZNDG6nb1N34sFaUCKTuvFAGi"
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
