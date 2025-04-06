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
    "2dvH61oq7sPsgjFJ4FvTrEoWx4n6Fmssj7ra4f1hQQFKbPp8u4ereuXJUoiAcWH8cTBTi71rR6BxnmCYTY3DrtNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kkELJZRbx95dHbmwCVK4sDdFEKnJZF7xqBhyuAAZFJ2cWUPGornDu7qZNFdXg9vF3dbLpxn9B9n7WZuZTAdPi5i",
  "key1": "5JwpyUMKskJKffRYbXgb7BJC6MwfN3pm67cCLNWDjLgDdkGyunJqbqcuatxto21889ptpejGabFRgmm7qpKKoqw4",
  "key2": "4sLCrhUM7L2HXMKV4bYmqTY33uRWGnunQnFxhKZ3uWbkDtMwPpn3t2TeTiDP18UVLvczQLBnXvdJPQMuWgsHwdMj",
  "key3": "kM4oUNzwFKQVDhqDK8g1jWDfbw1fXDSwLVo4TigQb6zeVcakToQo37iCDc7hmewU4vXA2Sack4D75LLrFgNnVVp",
  "key4": "5aJ1y8MXoe6v6aiUJnLgihNvEMS1SyebecumzhoJBKuwauhzzXqbCm9wGk5wdHEDpgErQ96RrCq8w2EyCdzdtLXK",
  "key5": "Zb3TbUCqBiGkayzYEuyk63vLoo2fYB9rffEMmWY5qevCdiKgDtHuFqRAkevhiUDkEaaiqAxnY1XLUt3tjEmEiHU",
  "key6": "3odkyGyJyWMV2vbUcRfmzvK74bKeAKgGBTFwJ7bipLJ1Z6FFLVBfN3CC6FbxWvFNHxGuKLwmRq137NbZzV3TYi1e",
  "key7": "2uG4ffxVc3Y6B9hkGt52h53LRBBGHTw5mP6yJUr8rbX3oAj1LnNu4zcuNbdXMxifkY5cmktfNqq3v55nMxXehcrN",
  "key8": "4uAzJNXszPaCEvMLEzSFibQWEHy7kuWjnT1ciQhq3vJTCkqjsGpTVz9FTZZFaLPDTnDoKNr43znUab7YMNfYAyUb",
  "key9": "294it91v3PQtqi6M5PbqFHW9WoexKdguDEXKBRScMDv5pe7o6S3BBdeCVph3b1mEr2L7zQtbJNwfZVMLuZKWtJke",
  "key10": "3nFQRBPyZbjzDUXphsqEQxazPufTwP42ETYyw6KFHYcivjmqWrbnybJcU1aT6BMMrdtzDtZQoZjCav9ChDvxVK35",
  "key11": "3i87oqd2niL7PzYoGU42NDzzzndj16iaM7hgLfjvrc7xi6h8pJj4k8KWipcGWeTdcuV8kfvHV8PVHfNvNoJz3wML",
  "key12": "53pjMTurYxC5T4293irYWDnyz7JSdT64LzeWjEemTJsSKZMwhgSKBvbSfN4D9QCCdjbQGNW1755Dyui3WpbJgtFQ",
  "key13": "4DayxmgDNuvfJqsuQk9iYQuN5Qe1CoVVSKbkbPu3HMxuY3fp4F4PS2kJRpm4QxA8S2Lh8vPzvtugXoWzrS76EUCz",
  "key14": "6ZAvLTmzWPh2tpEQrfVeA1njfZGozxuS7HF2XNVjLvzFXX15oQn54Gm7F63hSqEoVckSSkRE3tGAmzzRsgNKBpJ",
  "key15": "2joQVWLu2BMtAZvoDDDSuvgBPeX2uHTAUwh388HfttrKoNtBXMSrxZdapWN8t8JLyGoE1ZKcuRoCX6LxF1Vz2fsF",
  "key16": "3td1fHZau3RUtFtraDjJ1mWDZG8z5nhDCnNRDTPXenJpsE4UBcsFdiwnrtkzMK3jdNV5ZVdeV4AaHvgFcyQ7sHDc",
  "key17": "2QSqigmVVCGqx51z7QwQGm17mg3XayajvinLvPbtCpwbSh9B4hkUrZdtMzubnqsAM3TQ5Cu9JhyZQZ6XnEVddcTc",
  "key18": "3uBy6DVVeS2LgeGY14j78tPs4AfvD5Tod4xEAQNE64CqBzWNtG1RwjmxNcthnH2FrpvtM14hNQrp72TYMCCtAh2J",
  "key19": "3A7jP91egmnk2KmvbcRBpuddQby4LE5vTmGz3mpeQ3gzVLEbFJ7Yu1iy2Ghkou2tD8Rf9P7X6x4WZG1NAPHnSkbZ",
  "key20": "58BfChkkYTgPmrVBfJxLbMc97pVpCrZDhAi4YPpm84pkSfWEPAhwy3RR4ww7pvHsfpi7SiSCwpfp6ofpi4qzdiB7",
  "key21": "2SpBhU2VxfcVew1YASxxYsiknb2igaxeSCNBZVdKqc6Wr4DcLy9a7P383UAzABP8QuuxysgA1T2ixXozV5ZPL4a9",
  "key22": "3m7GtvnckoEEExTpVoCrABVam34ncbpvUGaKAFoSKwoai8hGZaQdke2EMiMz7jEN5diweTUW6pr9cTuo47yVH1HP",
  "key23": "38KCs2Qn7M2RHrSHipZMF1y99KvC6DMSFRA4g42VMcju4pLxjAcGTfFAthhifHJefmaryw95aoVFWwAzZHGwr9nC",
  "key24": "s4RZkZLtXGQ2KCvXF9KXR8qFoCHR6aBwQoRgyEuX1xvswFnVrAXWhEYCvjRQSBALk5UUMq9ydaHWS3iJS7fBCX1",
  "key25": "5pw3vNNzGDViPKXrBRmJFaiufyhfqsfrogSwgGYoULSqdytgfSHb8T6WQseNJ8V9AmwL2WqcftsGiJUftT2mTghD",
  "key26": "5egPvDwfnvaFUUjB5jqS9sbFWg6Vqc9sSW8fF3oU1yBvxKCZ8cop2nLhnJVRqs9JWNon6jMuSvCCtMVPtpTjv5AL"
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
