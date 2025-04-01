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
    "3YmQjbuhHHWr1QEMaERZNhp2uxQ81v69RxRZVxpzBsZaKWf5ppydJ6KJjZN6X1w9WcKu9PDdKVrFCmGaT73pyeCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TypFWevnbXPfKwJ2ZAo16TvVBNY7LFq2nggtMTavxKWc94kZc6Ugne8dwuzyseLkL43G5C222Mq3z7mhYdaLmdu",
  "key1": "67hjhyx6rCVC2JAHoo9MFjSo3EpAyY7HAANbnfj6m7XTRYspVzbh6cxZKyTh25kvLKHBx5LLqLMXmAMZW6B9WFBo",
  "key2": "3QyVpZooG9ZuAhS1sYTiTDR2tFHgJXHVfDyk1bnwcymjrJ3AGTeq4nQrSUdVMwf8p8dh7jK757PpvjxVYK2AXRuB",
  "key3": "fsXU5NpqgEWcVD3MpLSouw5Jv66rBpusMLUwRS8zWdbLUKf3D1uBH4g2GAqubjBppLAc2SBfUqxDbraZReWJccS",
  "key4": "5Q4GMQt7iAr97w79HzfiQ8m63dwdV6bcTBqDoZPF99nfQMMMH9xo8mbU3wvNxKQoei3Rfdhs2ZsaZmhNg5v4L6aN",
  "key5": "34oVMfGX8W35grzRVMmRckGgManEYfcMasGVopbQqc785gkBkhEvuLLHhrACNcuZfkkDQguZHZyse5QUA1RBc83c",
  "key6": "42AiBqXt8HhV8pzKiyRL6aHn46fmtxbxxuNoGr8xPfsjWW1WnvfCLx1McjNTknt7Dt8iSHkhXYtusEhF8P6CnEmV",
  "key7": "fBA3XAKQPFmrgi4uKaVzLCksmCYBfAEafNJ9kGsUWHzLTnF1XsSWS514wfyBKjRPDr1TKibhgs5hA65xJhebUNH",
  "key8": "4WWm3WK7LcjXxmXQfFFd35tZGeo6PVd3wptACygFogw9b4RZpsupYxzV2s7gichQsAfs1e3puDzM5NAVkewxTa5D",
  "key9": "4AD9pcGVduvUiWqHnS31iZ7QsSfo3xaB6b7kd1wuZhg1V7Aj7HSXRNnLMDZZdtAmZN4bYA5jn623cZDxYM4Mu256",
  "key10": "4iLGrGTyiDUChVDre6nSKGVUUfg4rEfxmYDV6YGyvVAVogEEcy53ty9x6cN3reUFx83Kv36fthnUeQigdbcmExXj",
  "key11": "5wDrMkTuLdKjSo6bAZjmPsnVTnHJPZzFYDLvGkVhckesVeQCARhXAXJqB6EMGsJsh7bvFNRypG2GR56VffobL2jd",
  "key12": "5nUNAmXCz44EnWk3ePMtYHjJXHk6Uxs1E1yrT1fHQQnjY1igyBfJdSrxzp6U2dAiGH2WVokEquNW2JbbJUXJ6G2q",
  "key13": "4MWD6dFewyjPYgyQBfDeKwGaTY6hAfqCwnunLt8m2do5bnsgiSjWfju2rppnVbjsHuorLF9cdw6Lk5Dkj2xxKpzu",
  "key14": "3DVtHFef4rFrUqvYL4bCLTsyMkDbELaYDJBb1EkedCFzDHQn74nUee32331LoF6ZXYQGiEAgtYXiRXWEUg1tmStj",
  "key15": "5ToefcJuWoaEa6A8ZQfyVzYPef3B5nwdi6ABAxjaeaV22YqMCqXdX7hNeVc4wG1gxdwG5eee45B64CKy89Mm9aBw",
  "key16": "5r4MLWz9mqdSwbaJrXTbxP9dPWyuWmvzxnSbvXWns4ks6kVU21btmearoZ3RKVY2DSgUtm7xzb3NeAdqNeUFJXx5",
  "key17": "euubepTtJmSJPACH2ezdbaAHYAtZoZmWXnQS4JfHFo3SHP8zeA8zJY24UPUbPYNC8ertaeDo4weghDV2ArrWbQA",
  "key18": "2A4wRUKL7TqMi2zAzBYJ2vgLHBU4xdxvyPChK6aPZ763eiFmGjNhn8mCuaPvhTaxaLKiTSubK76sPH9LgJKVVraT",
  "key19": "2rAd1eNwjWx9432KsUJ3EnF4ZNjhfsfCFcSpzuD5Kqj7D79RYjBQgKJcpK3fURKjqF2Wawycq8wJDXkHM7HHdBCj",
  "key20": "5YLpvwKkEb28rmdBL2CHnxWyc6KktXczCeG71QJ2gvVvotiCEiC3HiBuYapwPxixEjgXfrHEgxKJCJj8rs9vRH64",
  "key21": "5fY9JFZc3hbCm2FV5H4pJgVJEXDJ5ux8gsxvfTormmnAWe4qPpwgcPakSbJoMTDgbUo9U7AE3vftDmPKYbZUDVNb",
  "key22": "df6ntdkD5XZWDApJ6qoVx7UjQefHARewtiWG1X9fqofJpUrXonLVxnLhVFey9FRFWWDqUEPXbyWZMCySrXsiM4e",
  "key23": "2dYVComSymnqaTo28QcAEfe9rfQE5xHoFYXMq795iXQ4T8K9T6WHHWmdRrLNZjTZ3BcgGZdAkrmQvvjXe6jFt6ns",
  "key24": "BNXucty2rBHQWzTL7iZDS8H1ULTqQnHvTVkQFWDjn7mZskaZLXGz5ocT2r8iitDKmfRH7x8rjsYMWE1Pgk3av2d",
  "key25": "3szxs28nTo7FsQcqWMRxS5VvWz5htV4nEFd6ksJfA6V4NmRh7oeBR1KCFH3Bqx76NAMxgRVeP85n3Lf4cMUjprnb",
  "key26": "5XpBdSnLQsaM5sgps695HNsWiRAnrUqcGwkeTigMyKUDKpgJM7kE671m2tMpUjn3ZDY97hnQcTDViok7QMUuXCxw",
  "key27": "5sWDMEmNHCXfjgH6fLhn2CHDDrXduQTFtPCCtUYfBj9k8SpAwGJy6Zsv2CqExXC16kdnuFEX6zmvVfgfqi51aCRM",
  "key28": "4SQ1jQ1hc7UJpo5RtdL9HDhNWDJJgSBxHtRKvXC7pHA2xWsatjnToTi8zF1RdxhXGrhKpezgKwMtPenj7Q93BUUS",
  "key29": "5EBbp5rgX2HbJnxaCuHf9RogVBt87CGVFk8EHi3FAqxP2ghY4gM3tZRnvGkZUL7qRRmuXvEXHN4RjfTao2cLanE2",
  "key30": "3RzMH6x2Dzioc5RxgW676wYa6EkCRLK3zwhBGWL8JpVZsBNkPEBncsMCohec72yyNaaZQ3yTv89eUgqokAF3nERh",
  "key31": "cJwBEc8mzijp34QcfHfQECJ2FJ9HvPnE55Y6xM9sPLsvnCmsm9cpEqB4cAhN7FFcPJ37gfNErehNNQQyRXz5MZB",
  "key32": "3qkUKGEdLjgxVodrD9cusBxB6FmscT4pRkEhh5e5g44KsQ7ZLTKij4vUgUGMniekt4EE6FYCUEoTkvARSP6J4sjU",
  "key33": "2EoynGrkatvXpRgsLNGWCcYzdCPT1N5WUzS6sADEerJm2oHy6LqD9hRHZyg7obkS3EEx6jf53yVYxeDgN5hFyJU6",
  "key34": "3unYje1MAYMkARjymz22vq4VfYZ3iXfV5NfQmXpUCPxtVtXEzacu1mrTbadWGikTWP7v2s4e74RT67EW35fSf1rk",
  "key35": "3d6LEQY116KzZS772bqroRWsZJYYSEAjKpn426PFcSAmbZ74mR28Q2w6GteFzLNP5SFjuKEgNZtZboCmo8Xgticj",
  "key36": "22SsrmiwHJJN8ieczC12JMujsFs6GNFg3QhQ9RTLSJ7cYJexMcZFYDUE11hqGJ5hA1CUuG7395btaFYLPY7DaDZf",
  "key37": "USBy2AK6e5kQftw6qwz2888fT7iPbYS8BkrP6mcennEUJ1wgpQH1zxxAzftNJ3qDrgwPTiWFN3rbNZ1gMCCyHmm",
  "key38": "3F4dXQ7eSZ3PNn42FM5G3E5xpeBU96VHvxrpBvdQXXoPLqrbh9FCDFtRcY6f49Ti8qh6o3YGRibCp9eKUKpxrjcT"
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
