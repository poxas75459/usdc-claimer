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
    "5y1twHbnAfbDgdifkQefkuGiVPsKwEAbqeo2r4RysCoLnWnmyGZRA3M6chjonJxs6yR8bKjiJyv3Mu8QRb2PQXRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVbTMRuJUmjTfdzzy5AQgk16uRbiNXzrX5kkcHgkScMTKkUcXqAo5VR335L1tALSABfwotuGVXFqSHxFk67R5zk",
  "key1": "5swcV8CbEFJB8YL6vG3Y6x9DQcFiR5MN91PW69NvuCxUrxnpi1yHg1MnvdzbtFuxGJezMn533nYa8mNpMmk4Rh3e",
  "key2": "3jias3XD4YzZaJ5m3Ku8jsd97PztoA71WU1uFDDJRhQKyxdq1pS3jeFYY5acxtQJadNPTtBRHQWPsHSAniZCyxJQ",
  "key3": "5HYXhXuRmcQE9YjN1SsSGYh1L1QVqcsNDqrGj5ujeWwxH86AZ45kMM4jC7rq3ibVTrQLnowKRKMSn8motKw4m1Fc",
  "key4": "3ioTKzZqcoYuz5jQZcD7ckQDQVhQszmi8rCW21mtregSfGps7FspifQ3pfzXThAX2MiLQodjStLtaA74dJqjT6pk",
  "key5": "57v5H2ZCWshis1NM3CfW2QERU7HfhSF9vRVSwJYb8dWAvK9uTSxYUZcCsvW9K3Uc1aUsN79t4GhM7YtRKNPrTWKC",
  "key6": "3DLRFJqaVwfzeCp8gypWCQTFYTCGqPohKq4YYhV31rRnEgjyGyfBDmq2hQvUKTBArjtykJ69e2YbkhDjnTaepmWp",
  "key7": "2nud2rpdhHfvxbLoFfVKuhNDWREjNcL1E8TU55osnkrHhNM8yBVKjVfdUnWfpD7SB7FJVQ8v7nTZGKckMJRzm6BK",
  "key8": "5EFeTaVogbMZP6XAAV2a3r7cFyjmKipHujjM9H1pNDP5whz5yJQg2jg6ftcpzrfMfGySg7efB2vUQda7afxeJg48",
  "key9": "38e8vqd8q7dYK2gWBpk5bnjW2LcmZqEKeL7ojb3K9pWiQx294aQQhMw5zW3VSbFjw6k1CMxSkMR2DgaauteskvyV",
  "key10": "55yNfZMio1EhJkghdRnAAxu4td27c8fLdr8EVxpBbBjEwfiZSbTtBeKHcvtMinpWBaf7aKZm6CpRVoDXP25YFvcq",
  "key11": "2GahZRgEkUMVT191AGMJeDEpajPa5zLhdyn6R4c6rQ4CNnt5LGV3vro6oxrRnpdXfAUovMeDD7TwbGwrAGHxKgNW",
  "key12": "pMA4QUMh7okhg9EPZYQ6bNXTjuZjcaqgaKkfeu7gxVX4vTLQLxhp2hyAUWEYiUHFhw2W43s2LYvYedXGUdjxunt",
  "key13": "3St7gWdrD6KLzYVTRSDTSos8aLmqNGqZqgkNdZ9RXjTnsE19H8v2PA3yshSDqLcwPxs6n8ymWypqi6vW5cJpEw18",
  "key14": "25fgEfLozMuWLYw71rSy64pAkSWXS5StREAXA7DbDQqEyMPWqGXbPPajDFM5Q5Vy6rBDT4HFyVg6jQQ5hNV8Bvyh",
  "key15": "5wgWn31Hcu7EtQcB3o7xK5aX7xsyrX4PN5xErtD4fBeQo4V7MiUsiPp14VMkLoUTfM6KBjY3ALJPJnnatSzsLUjK",
  "key16": "5Bu7yib8wqvoyJRLGY9WmB8eye1rdzvoxF7WEwP28CffDfTafsqwQRceLWbFq7ULpEHF4AcWfaBV19XJDM4beXfU",
  "key17": "5n8NmEWqt6gvSJQz36NyEBpYJPY3DrJR2oecfoWQfv1Lx2g6DRX6psZ3WfLqiRBL28sxSfrdH8yS31Nu7QkNcU9j",
  "key18": "4ZXvejvXcbzNG2hwtQLxaM9VR4yjS2X3nSztBKdUA38PEF7W6MzsJ2W7jByNBJVRLcys74NM4udwpabXeFomVinq",
  "key19": "2uoc59UykMX9nWBpXN8MKpuXVqobakqbU4HKwzLt4deYzVbwN4fuEHeqdMArmoW5CuktYePu5qvr1f9GrwvtLN8",
  "key20": "2zcm2hJLCxsDPHMfb4VWFxNWrQQb2pE6ascDWFSGYheJ8XcuC1v3k9ZUKZHeMSysxkGsuFtq2VZjHMqQrCaU6qct",
  "key21": "33vZtHFEbDCfUVur3FUUQ5weAAsQwYUDU9yvC8Dbp1Xhm54eLwp4n3TG2nn2CqfHABFUJN1sjW8fAuuSnmDBBq4W",
  "key22": "5ibrnq1b6B7R3ZWi5f6KyCJDxt7Lm6e2QAs6vZwzFNjy4EVthWBWniKqQuhD7SSuY35r9UcuqQU6d12BeaewqbVQ",
  "key23": "4j3SS2jEj3QhQMWScpusmZ5hiwjeUSf1fqQC59vzMc11w7vM8FpwzWMuSwZxTG3oLtcEdjRNtpD1eP15HTUGiiC5",
  "key24": "2pn5pjKsRGHEVfctrNLZut8GsNmScD7r3KnZdDN9ZqHUbWHzUwvKpvzFRVmTivZfkSchZr5CVoS4Jwt8xBAvN37",
  "key25": "27Tt1nw8oPmnPuUujfZraiJQ74EoP6UAtmBm7fRgK7kNc5EEBBuH8taRnpqFxy1dAP38BVBit9ZRVcUMJvQUWuXX",
  "key26": "5yQ5ceJeDzz1gMvtBzmCNxEmX1DsviUHhztCbX4LYR82SnXwu8PmhApFw8icffvFWjRJEVzEKJRBuavUN3b1wvZN",
  "key27": "3Wd8y7uqZFbneSjZo5b9xvMxhhGDHsW3VrzwmgxkWrkzvVBknStVBLLQFAnC4cN8nCwLyGhWnoq9frWCC5Q9zDs2",
  "key28": "5yRr9WXdL2ooXBXkMpY8b5miKmEV4DPKhzAZogqg1R9mCNd2kUGebzVo86wYrBTU7aQ4Szpdxe1u79DW38CDgjxe"
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
