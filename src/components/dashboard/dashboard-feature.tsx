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
    "hNV7QtgdEZsYSqGLkKV3D1VYa4JMYgjVM6cvKNkDSnt8UnvRuMm9PNt6n8Ni3m5YTiHqxhV9vopFAfx34XHwsFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzfJJuRmPDQC7AMxftKBKaYE62G8wEobiYELJJnb2QVacondVpdBDizb73kAPDQBapB7cLXjEsgN6xS3dWfbVdi",
  "key1": "47fsmT4fvpHwqHwhQJCruJmDrK5dBR1rNTWJTG8TjHnRm8FZt73yADpXFq3K6wE51ZyMhAzp2v4LTccYrt99ygTi",
  "key2": "38cqaJKiQhkxRqW2FvPyZfn7HYi2JgKcmrBM491uMtHBX3Jyng8Hj6RQtXtWSaLFzK8tJzsHXedZMHrSrB995DAn",
  "key3": "3u5MkWyLjHP5S5EGjZJdxcrCi1foJMBTUaivYwrEt2j24qDbgGdtLfqffXv2NtkGeqNmoCUyisZeenMJwBv3KN6o",
  "key4": "ymnmNfxvyrR8ihX6CoTe2NnzubxWoC2Eqw8hCpMymamzw6hK9JnGjStqERR48DrH4Lv7x4BRkDcg8pMEsKwfBXb",
  "key5": "2WakGDsPEZaHvobQWmY6ELwSPMQdWpnwXNywPKgksvtjrsUR5pKCAdviuM4ssRJwvFTWznvfNVyKyUANU1r5kuFX",
  "key6": "5AedGnP2nTXznMUpKGnFR4JvEhNDbxSrP8SLMMsEVGkQQ7tJRWgZvEcJdpLcN4YBxr7TW3oaWs5wUZJDVLKxnhzg",
  "key7": "3TY75LKx3BBMaFnKaB6sq2i3R1ks2s3KwPfb12QKkytauvVcLsy9pSvwBUnR3mWZjcZ6DFZ6CydNxBzw9MHcTj6z",
  "key8": "UMZfnGiYWG3xwbScBWhMy8KgdvoaEbp9nemTANn6E48qbAPX4gfyzPcVUYxp7ib7C9QARnqb6G837AUvAoUn6pm",
  "key9": "5YEs4fHuX56XffNG4HiBRsfuHNtWeX4kEbVxRa4whEmarCNVCis6THsdQ4gcKYH5o4MsWCeZgmZmV4mW549afoAB",
  "key10": "4ATMYMXxkBGrxXe9X5ZPBMVWFwhaRvqDXZwWSYGMwteWvkwsX8uJRUu2Ssox1bn84vXP79V4sYan6U8tCXLQCiz1",
  "key11": "33yhVAyjcYKu64JAS1vQECGAaFsmYXPhXnrC72VSY5Qheayx5s3B1ofmxH9nQx4ujz7DALGZ3VKL7n49GyD1PXfG",
  "key12": "66bY8DLTjKwfDu3srEBsMs3oHWLZ81T7QG6rFFn2oH3YBS7aUPdNL73ggX53ZBQdnVx29QCZEcLjUGqoirZszJyh",
  "key13": "2uZnqohbiPmozX7gJgWSFPxFzXY5S4D7PafUJLSNVDpwqNRji6r7WKdNKguTyX4CbDnyH1h5pkFqQfA4qpBF1mLh",
  "key14": "4T8MqUjBDh5sEMr55rMvt5wtLkxR3Su7W2AUScySZWVcWymUJWjKvxnf2wgJyWE4hHTa7q5xwN4hGpv2FSSsg7ur",
  "key15": "48Z73WSCeQCGKBjy7fFzqvFJZd8hfLmhRpXFoLo5XnLERcu5xkvEzvKUmxcwAhZKHDgb8DeVMnadRmf2BmZ3fTcA",
  "key16": "3igvgKWf3PmsJv1cGaMRcZ9sABGhbeigfBGtt3k3DhVmW68PYs8t9AteCRG6U52cLGpK6tjmrMBWzZfn2CDL3ece",
  "key17": "3QEqmBpZVpDnUe9Cm2DC64Mc3oqMeRugWk77KsKRDt1PX5vbqEqTUZpgbk82uxcMcSsdmMZLdNFaofTzopQkorB5",
  "key18": "3fuPgXCPmrFtgm3s1S72SNt3Kq5SHmYpdhA3HNvTrGvGLPwd2JB1NXxdevsRf6rvDWkrLSQPQc1ncfQwc3uQThm7",
  "key19": "5aTSwZndBPmzPATe2UUUu8uxzfbS5zjw4adZhQtLCtxcwNhc1t9LxSem1Vw74HFnqo8Mz3mH8RvSkUvtdKU2REuz",
  "key20": "p7zpNitvRVR9gtDJjbDN7P5mD3LAhtdeCbzTyyJBafFNQbiSPHkVYLJjefhCN1V17zX3awJuXBFpLQtnTcaGi6F",
  "key21": "5Dg7UxqiaqYA1vwnABb4pZorK8YhVttiETgnPMuUpSc1AJkxuTkBmkG4522HbBr3NzHY7MLoufqAE3i4VvTuctLb",
  "key22": "3AqmgRsydh9PFdLEgLyoTvmumjBPGupH61thyJtrWK21yFPmBqJWzUxihDwp6yrBJKBZ3PrMs2xrXFyKH3F3AbXE",
  "key23": "54USCMfybFgsCRq7rjXh7QLvHKHXor9t1ixKHgQd884yVP5jdxv4jpMnzE3CAD7GR5rincR3JMWW3g1cFhHuAFF",
  "key24": "5R76FnseQxMKwSoAPqBusfdxA3P3y9Qc9RjM6JstGuzfvmuHWGPzDydBoqXgf5R2EsDR7z7pHpaY1cEDSVbmSmt9",
  "key25": "613oVWSjZ6U9ePZK41BZkowfopbSnASDKYyRPnT3fiWzdn8bjN6y3pdnvGgt6LJyugmufxUNeKwiRbJjWQenrxoq",
  "key26": "5Hn4n8ERv1SjvHaTYmVKKe7r5vbdA3i35HyoDQxuBPBv1qgkaZhVDDFrzQAqGhxM4b8MiJCqQxR5RbrTdFatdLsT",
  "key27": "3mxTxqHk5P33RaqLt9p7wRpfhejoYGfXyw2uxvuzaPHs1YwnEsqABtvRxQkFedamkS8Zj1HAC5vv8wiF1sUPVkRs",
  "key28": "5xnvnBTYR2ieXm7YHZCAjDe6HQ2cbb8XFHFYirVHAjPBHDX7Gyu1mUigk1PdKHghqMpGFv62PGxCZaAKzVmvaTk5",
  "key29": "3vG86L7cH3cv8takrReEXgVUyR5t9voo6Et8uXiUo7C9bJ8NrZRig3Da5ec8fb2Q4YGNEUhoj2apL6h6WFoaGfsU",
  "key30": "2hGCK1AjzTsjm53AWGYD4QF6oBUsJPcXP1LmBgDPu3W3w7QBssRLeTTQbNpSUsZAFCDxPZkjZRKTEv4RVcbky2Ki",
  "key31": "2qR9Apr9RRJc4nBwMsBedAh8DyfXGS5sbNSAE1qUSMTPkLaQZzeSTMXYxDomizVJUeXsdyw5XiXBfTgNwczMMsuY"
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
