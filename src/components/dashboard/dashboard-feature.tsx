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
    "53e1r6xvdJBKc13avbJtrrgpvYn5Q9osrydCdFNJxfwd6TFoavdddq8epzQwqBwFfbEyFEJEAKqAbjawKLGVrA6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2VQM1jbh7JDoHtEsBKxpePgcSdzBKGS5U4FPgP7K8uyir82LyaCQBhcjT7epkMTSp8uba43KvUgqaWwfBr5UfA",
  "key1": "MJLDoqD69y4zxdcZ6C9EcT8Angt2nuy2VG4XRD5FoQ8BZ7b8bRosi9PhpP8efcPwCrJ3s6q79A5qQEuDwRq8pmp",
  "key2": "5337cAvfJcp3qaVshCgQfunska6maiNTH5vCeMdA1kQM7V1fCaGuavafCC4R3s2iPsdPFLSNGk9kVFGqgmBcmJcF",
  "key3": "274LitzpwEc2ht2SdvcqGJGoVEKDBGB8LhE78EDXiFnPG8LfTDqL9BHLFNAyGJWwHiJyYWdCu6DkMBVyHKv131h7",
  "key4": "4aeUW7sNfRjyQc7Gupvft2uzYrmpUwhnNZx8mWeTEmrfmAGoTHast9PKtx22TXNsrBi2oupsRa3wjAsSAzXhMmii",
  "key5": "yybEXNaMttoQEZdSEdBe8Z4yz8T7kd7CAfa87dyfeoQqDsBbA3ArPhcvD3qRCSP6zG39NBW8WkUWnFLTJvV8VNa",
  "key6": "5tkdnVps3g53DsrAkMhXzdxpyLFEKM7TJdTfXFcB6P6uGHWCfFafSvtpt6iRBmsTw4xow2gipE5e6bx8UCV1waap",
  "key7": "3eoDAzmYLk7CvoA76kSxpvjbUKpN5DEeLqRNVrJ6n6YwnWCnCb214GW9QtAxbU96amdxzLSMuLDArdT3Po8AGZFk",
  "key8": "4qHt2nXTeLpo7oerJVzwn9Z9ok34br7Vu6HAKBzqgh9NRiUvv1hBseocqKTWv3PCpbu84fnRGBvxNxd4N3H46kbK",
  "key9": "5vz29TzY9vbfGxSmTv713S4dLgGkd5QGK19NUCaecbjEUWXaHZjSVykwUoc61YRD3Tx5n4agwrD23MfKmUVu3Fi7",
  "key10": "3dausbPzVQw1enqoopGrJXYmhybcVbjFrwXtkSH8Rz7nVCgTsRtBYb3wU89JQNBXMdEePczoywaM9JiY79LXrJCY",
  "key11": "53c6Web9ayZ68AoH4tWNqYBiGuXqEDPdBzTfPnc8EwEZsKxzwPWy3rThP33Qx6dRV6uouMTiucumCgJMwe5SdX2c",
  "key12": "3K9oHaPj7h7EHJDxML7gxaEuL8aHvchF5WLQP48SBEFGakgJLR1U1PPxd91A1vBKHBWhHMFR49zPuAXpBxwZwEBP",
  "key13": "4aB6bEN1TqfbSogZGPobw8LDCyEuAjj7P8NANPbmWRKLibK9MDECxd51ZiUo52fi8W5Yc37HuJTTBsaKoQoxyAyD",
  "key14": "5NzfGjbybyCpH4bnZR9cpqmf4F1CGZG19PMXgLzHWWArps5Yz5pHajTaWSqd5Qkx1W9y55UaUwe6qAg2EWv3ZuBH",
  "key15": "2pcWkNtLgZ4ZkFPvYE9nAVDueHKgBaGj41QhW8Pcs4qrTQdmwBarNGKFDUbh9KVVraSa1E1DkhnZXtXtoAfGrVc4",
  "key16": "4KGpxAn2gMH11Q8ExTxV25nuujhEyG7aDVju7GUGW8PYsKXbvNSpqGmjDZWTCdNQseLwnWZ8i5mvXXrbnF1gEXHd",
  "key17": "3Gtfrdu4HSS5WpuaiJh1Q3zzH3ua7JwatyNpXpYiFeWHLH31XFuyX33XXGNpnkVef2aMQT9Rz36iw7LzLVNTCm4U",
  "key18": "2Mixg7Vu2FTmbMej4FN2bX9i516fkadoAxhqU8p6SQrMDCauBw7GxEayaxBomzBzLaGm15Lj9zJvsyzY8ZMBPWLg",
  "key19": "55erXZxczZPWNfskL7GDB4dj69tpZPCfHe13X2qaLpdNQ4xsdbtPDCC6ZPhWkZuMj5xvTtn6f2uiwpCt3wD5QFks",
  "key20": "5vG4tq2vWKYXqReqR1XCKfWZzFQ7bim15fzq8kk21RYnKbDixoijoxqyJ58Fk7P81fBBmMfkuJLjMDmbZAcHgwvh",
  "key21": "5UBcYRP5dbtbJiH98DV5LzQymELY1Tvtgp5y3maERqSZL2sKmAq2tuorJHuqyFqMDN9by5zrAv34R8jFH2WsuRe4",
  "key22": "2iw1AYTqMYyuCFxWt6Br9v3m7MTzhhDzUVo3jgH5EZEs4ZPFgAngGcTJh9fXWhXDCPbeeYDfyZ6KtaiZJNCGFN4U",
  "key23": "Kq78CYHp3cEznowAoxYQ7M26uEQ7nEULmPZMgC5DmkBmwAa9pDCVinLQwDhy8cLM3aiCbm51Bu1kRxycknySi9M",
  "key24": "52CyLfD5wG1bQctABSfPPkVQoSvVLMWXezrvBiYdHF3Eyc1mrqqPrNH6qpAFiEuVo1qMtuNqAh1jWsQjQKVaQG8o",
  "key25": "55Fw1Pe8gNae91yg8kxi8oxDd2abomES3DtUykp2t7xLKfePQE2YSbj93UtosH6FPVEiH9s72ZpRLnWmeXdcCNxo",
  "key26": "3YGUakAUaRG7kjBP4YRCXoBRS5RjMM6mCUnxzWJr2tkPf86Yu3W7vNbPpFb38JWUcVbXykX166zSXYLfbnNEehGC"
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
