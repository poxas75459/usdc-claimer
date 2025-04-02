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
    "2M38itQK92s9jryJhLZSVhcWmRqZx8CuDGZT1fbLMDgLvd8shbtykjwsF5xtpmqF43yZu2q9g5jkZtWuezCFNCmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAHUJJwBFeCtonS7MoG7Sasg3ABUMZWJAYHP9yzvsFdsKoZe3wXAtce6Yuow1seShdSAYFVLCL115C6U7hV7WAF",
  "key1": "CnGJtNZynYa1WTEbct8B4QHtooxCa3kQvtq1TsEVa1mn6WkggpRX4pdexXUdmkDUhk9u3NPvznaAiLKcv6FmgEW",
  "key2": "Pqoxb74qS8AX5wLyNU8CsRwapJPcWkfsvHYn372WT7s4AwHfDM3fzvaCXM516R23x2SRWVb8UEDcyW1kzKpgFPf",
  "key3": "2fVmemKC1wX1ZC7TXKab5zvgnnLWtftWdz7KQ9DgnHti4Jihqa8HvkJZdZaw2xXpKtpVR5gJRNFjQJiKBns7sikm",
  "key4": "5VNiyRmtLkVTQyjRdcb6peNK3Zszqj5mYr8bkpLVHqiL9w6G4gFJzcKGWxRw9AXhx5KHri35sf3EEsYqBPZMXKaX",
  "key5": "LvqyAga8ZTnP2QD5qoZK4gdcECvbCCBoaLQxwdhu1ihcSB9UYFv668a5QwaS9RN54i2n5nLcxEi7KGP2J1k42ar",
  "key6": "43sBiHXEeruK6qhNXKYisrScQhyyhBY9We72RPt4KDR3v7TKUQ9Meu2aLK9LttshYCrQyUJCXhTojiY81iTz2RLD",
  "key7": "5uvyb4eT83eVMM3HtCCkBhncxMHJKMU6SAEJcEC6qxW9UPbfZrHWyKwnYY4FiMJjnNiT8UNJMF2JPBipYssU8hmQ",
  "key8": "37CdeQ32L1yzMLzzEfx3ezfFwgma2Pcvxy8KYkDyLpDDMaj8f9WKRE1gXMenTFBtzCgF6rWiZMf4RjmXPMC15ryz",
  "key9": "3K1bUrrFKgcf5KBNboHRD9gb3sjHfShzzGJC6re5f45tMBk8HRZ1b3JoQzELGFLaHD2muxAMPSCf5TfduWd4PgDV",
  "key10": "4zsYQbRonfSGqFgaLtFHf4G1KvkvkErVtT2UkgGaQeNJ4pqYUvfMkywNRogwEa3mFFbuSodD9LPL2FuwbAe5BqRR",
  "key11": "57u1EsaVeJGNq7nEEmQMfxBZDtSM9EoACm2mGtoPuNHpEWKHfDz2S3JUZNLnhTrkFvedtrr5qrBnhrZJwViKVuCk",
  "key12": "T4FrCgubDFg7Dq5TdTrADihvRW2bwaxcqbtdzjYkx7Sm1kaU1DFrG5RFePjxwTqoirU9LpDKMpnCroa7tPwFk44",
  "key13": "2DfPPEGnLBFJrUmUZpjmkyeH1CfqY27PWZsnSbf2a955FJzZS3zaEn5626TZ5gVjg8eWJyjSgYKqUqbP2djGbvLq",
  "key14": "n7zgU19qVti3skA2VkGjauUyWE5TFDiuRMi93bRF7c3pB9HMpRKUK6bRtDGseq7Z1qgYmTvHbqTXH3CnwPK9eq4",
  "key15": "2rrq6kKwMnFz8jxNwE7fijiUpK3hyheiimqmJeiM6L1DEiC3RTKDYFDf1KadVWM2gsXi5jwuJs7FHhED5m3Cpnps",
  "key16": "32Tk9hNtDpPkfc63gcMtMasj9QH1WH8w68yR5kBpdGHnoNv7kckumhyxj4BqbWSEaGW3FWZuzVef6RLHcEhBcm14",
  "key17": "3HZBTiavw1DMaY56KDGqSFRBFBrUMiZE5F4LnyfXKiEHSsgM4vt2oomGHPVRhpMvFWf111Ar9LASfgx7cRdWsr5U",
  "key18": "4fhqCqFey4PN3DRFHpPjke6HySVdcQbveVz6zGYrWqp7yJg4938m6ioeryDoP3v4sKk2nn8HLGLj6Z1B99f867LJ",
  "key19": "2BwnHc7NYTrup2LPgFoqvVduyDRXHhZgHJWxQLiKehdWJ3tGpeCsYqqXGM59ebUdvAYRNFZ4KDatNhkgQ3dY2WZ9",
  "key20": "2VU5by9QDeVmDQTtG7FDAFHocUL1vAqyBQFDTGgsej2rPLcBwUrrM33gm4HiwaSdX4TH4cnvQDNub9hNH1m1ukpV",
  "key21": "EVFAymMXUf8S6ENFxyhftWiyNhK4QLx7cgcTiHzaQFxApSBsbJtegU3sEKEBTZWR1ztKKhRfd1gV4ufhHg5ZgWf",
  "key22": "3qPyFWCa69qvTxVngXRuovgFYKwM7T3TBrQQbhmjQgoTY3FEx8noZqnTXEmLAtDrsDVCvNjg1Vo5GRJ2dsvyjKns",
  "key23": "kung451FDu5BMZf6c8gRVr9YajEUgdAEJU5h7pJVQzzWEPoVrZHVJLv2AMAMkTsKEYsXfWfxdmSHSTKXeCPTng6",
  "key24": "2PVX7CpZ5bPdzLEAyyQzBnriHqvTGpsiCd3oKY98ExpHbB3tHn89JG3sNFyc1adN7Ar84miwUYyLCiCgpF5rd719",
  "key25": "5N5i7GQsu9qPViPeqoggnX1xjscKHcTA8QxUn1JDReU2C5hsF4La3hFEztJNaPVUMNSEaExoWeUme8HW4UaoBKH",
  "key26": "3GHHDByfoB7ZKGn7DbLHZHL2i7DEQ1h152GaoiMBoAuF51inpPcQWt2ytxsR4RwbfxxgoMsq39CAvVeGpZad7RnW",
  "key27": "658VRZutki2uj2pNyAoDNFW51SGBtLueVBNiJtW6mk6nkbut7b5DLzQBFqrqFQiXdP7xziXG1UiMhWVyrXEc9ZPE"
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
