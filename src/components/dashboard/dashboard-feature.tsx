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
    "39Ya3MwRCJUZpQJNm11u4E4XioXK2Af8RSeXEPPswtU1JsMCquSthiqTbRByxciLWESZAXRqbrqG7e9tR2v51wbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bos4jDxv7ewx8nPbotgNKXSTERwnyBkNb8NtRKKMLMnpKMbDdcLBDM6CNG9Lry51M25YwSeZ9Amod3XR7UFKQze",
  "key1": "4W9Z1GDwTm7hiiiZh1FKcHDKA7iL8RjS3dTZZH7PY2gKjTBREd58yhshozHfEu6vE7LJ3XYbmYzSdsR8uXFMqptw",
  "key2": "3nqHtb5PVyEZfjcqt8EHEpDfUEQgu5xTD3sUpcxB26kiPsS57Nba5feEw6wQnnCBDzEJ5Eof9LL66TbAETatSB91",
  "key3": "4d7xiBfnFB48gkVtkEGAd87SC5sfsf6rrFwYtudUDTAL4REtBuevUJFsWpAUFd5NysMoRqGrR13bVinKhxSWweW6",
  "key4": "5ajZ1ZWRvwbtDJoGjVFJAZ7am7CdQ8yP4nsK4k2NoeemKcSn9owXJGP14c2QczwEM8vNVZvrcv1WxzcRVDW5NZpx",
  "key5": "3b81t8PUv3sM59YekG1K8ZaceWSPD1zb3DAYC1rn4v4GBMz7pCZPSgyR5vvP8TCqAQSFLZ3Mv3wNnctLupVisaP7",
  "key6": "4qxryxi5XRyjmqJGDkKN88cdztpWv459ZDKUbGu6p8YBwBEjk4Pd2VbBP9VtZZQ4wkYwR5PXskZm7SLw4Z6frmnT",
  "key7": "2nEyPJ4Zvy47HRinnYgZBkASFHTnEsPXTSumqD3mdGf11WLRqucvQR6eVU6Yfbz8obTSRP6i3uisDbDVqm7ouseH",
  "key8": "678TML8XYR8dJE5aAxnfUJKbMLm3fQrx9qCCyMB58eZKrU54F5Rv7guXLt2sVKVDWR6zwj7LpyNrmtoTY2jzGAxw",
  "key9": "425mQxr7w6VdBBeUrgXMLiqyvEGT49vF7yNReNwxAYNtG6ewnH2ShGE41KdGf9g8rHeJtB2vdfgy1P9kyDsRpsQJ",
  "key10": "5BfbZ2fRy1zxci9gYL3QFrExMa8eszojzA5iT1rRerVfwFtiB1EkTDjhRFfwXEwAEtJoSk4y8Ceesg372ahjZ7gp",
  "key11": "5ntoSWs3s8NYB6UGBiTHsY9LxHwCdmdPmkyaP5pbWg9c7xc4UW7C8imdpHdcNATVg6BSRH7xLs7Bd4WXwUzoRFAM",
  "key12": "5mdNr8KC1JJkZ7EyqNGbMsHZ76UReU1DGxsZJfkum9EH7f6Vpveu4vvxKQHFRKbexUPHBYXamTmGaoNoZkwgV3pd",
  "key13": "5bTzEDBHv6w9cCBYvYMMqBBQZJourXoyufYPZ1DRDsMkeR616neU9aehWZPkRRHbxKxoVGDdUa66pXDgyZTXxBV9",
  "key14": "57x8p4A2LwU55QKW7QwGxXPTabzeFdnhN2ETjLo8L4ZKYPWxuiAQDKvp9ZYVQ5rM1EKk7T5GMi2dzwvuYTQxoRnp",
  "key15": "3ho2L8FwoxW956vNzcJDgWcCxqUbWGw6am4kb4hyi59YhBLgSb2dR1yoAqibYVbP7ynYrd8V2ThFftqhbAtwRqQ8",
  "key16": "5mLnc2vfERVDnHEkpjrH5PBDwwKP6A9pTnPVdr4MNf6RDEeeV7Ssb4bjjSBB7QZe9Cwqe3A7xwZymdDNhecWeYN1",
  "key17": "1yAwKBce1pVdVAt9D2stBDvkBBL1jjqMVYWTGd5Y8GzFpFj8AT4iXNXokXRYb3apdmHzZN9opgBPdPTNBeofNcp",
  "key18": "5fFtrRdp4EGGc9S3sE6X7c2NY8Z5Em4D7EYLdJbxycTErypV7hx2uoiV8YbALEQGkWLXQNW9UeBGG3vSaE6zrfjA",
  "key19": "27uvW1qs5WnzYGCBgtmX2XnHMqui6GfA9mN7CweCWBhNCM7CHMedx2sdVsCvYuQ6hQaquW9bTXfVXyKKPEMX6Y3K",
  "key20": "5k6A89H8y9WURjzWT68WqWit5cwLuMS6iKt9u4kpwZm2jCbsx5kHL7EwkCzKHwj6ruGScNcBXS3xsxVvmjfxc762",
  "key21": "3tuM3ZQRcC4RsJ92DB4kbc9tURLPdAguEYqFaaC4z3FobDKRKVr2yJ7PNbQcon2jfDzUrrvqHSmDfBhrMRAZu3pi",
  "key22": "3dcYxLJ4s9HKc27rFAZkdesYGviVbaUbhAtgRViNonJaKdZxSbM3LXX3967RHhhqrAUve2ohaQhVmzLPDqAiwDeW",
  "key23": "2WzG8SqQSHLHXiSLrMEFRLDrMAKifjMJpmRuCjy5mfqk6F64eWiwsaJouMTg78G5bZvrBWdsLM6RqgUNfGoQ9CDi",
  "key24": "4td8JitVYMMJGJhMopaggFojzecBRNjMZX8nzesnGEbCMsTFeGee9aNuAZ9mr4cAwkWSy54wfEi1ZmkuVvdC5u4n",
  "key25": "3N81hNrPun719cB7iaBQay5mGCnhP5dbCYF6T5WizqgeNQNHbrMW4osk8Dbb15fSQPfDRZsZQNzakEoeyG5odknP",
  "key26": "6EYqvMRqMb8Ra7Kis8cBtuppWiJ1xobeBCydSUBPVfBHeqn52GJWiC3WDrgELmssfZ6m3XxXnbAAYwDvmwJRP71",
  "key27": "rc5PXGvfatzjVfo9vVvRF9qJrJHYVAwkXLKZ9oJETWjupKbmSqC6cHC9eh42zegTNxV7aqNRv5bvUcsM2xCEA3Q"
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
