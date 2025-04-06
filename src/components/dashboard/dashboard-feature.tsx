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
    "3k1mVVnoh8RSrfuM47aB8dYJLze7UgWcpscd42PMKhyVFZrigLZ74J5W3y6vDTY98YyQ3X5f2HXVdTrNh5oBPgKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JE7CYsefnjGTFrNtTLthWLxWk4dNA3kJ1P78Nyk3xeHjurAPq13VWUhsHbRgqiCanmRpdPMeDdguCmTnvQD1SY",
  "key1": "39LVVMFjtMsaFASTriNasEyh6ozBsdwcMi3GH4Xi1wapkyHQA5fpPmoF1NLcszSN5VsZLmUor2BrGZYQd98nj8XM",
  "key2": "okU9zc7vef9trrdZffXcEc4MJySrotQsc3n2bjC1DNfh71WB6LwjChwcrym1AWConovMhQ45Tj7yTxKYT4MpKFi",
  "key3": "2X6QVSVzY5Q5cuvsKAeQ6NtBMbRnoFKPnGYnfEwgdaYyqonXViCRqSFsN2gkhfMrEFSXWXjoXv8KDc22HJHK1k2f",
  "key4": "4L7aSMh3gr5LbruyLpGshEAL3n86wvUCGwxNmGRDQ7yU2yUSvh1LYxPZGyT5ZmJ5mPnz3N4i5tzJeLAaG383j8pu",
  "key5": "5aHM2U2juCy7eefkabQJ9etpbAEWQrGsZuXHx3U8iMhE677KXvzoUqLSjXYpbtxhirVsbF3Srn9EkTbv9ifXa6bo",
  "key6": "2rDpX6kAKUQdXCnKxWphEp9cAKXRCdUiCYFU9hTfnrPf7kbrZUjPbm4dr1qxKrDNfPuLzt4HCvUM3c4LjDPb9xKZ",
  "key7": "2iNP9GMLMKJAcvUDjuApB21cA9vigegj21Cpmd1ZEtL4xMuG5h7n3kF4FuLdt4uFeBxX1DLnpw7ECTT9JyreYfRL",
  "key8": "2wtRVzAe7xZN8WfujuuMMLPKBJZuCT99E5kNxYWKZDAGwLFmURfqqmYbWBLgaLdeFiZQFwWE4mBdpWfjRr55LF4T",
  "key9": "4enwWTGXjkXcbP7DijvaM4wGQgf1j39PCdK4imeWpnkZqKRheLFBfBdPPM84Wf6kecku4B6E1LKhdNRdCPR2gUvP",
  "key10": "4rrP3NfvCttvpKY8FuwutTf7UJTZxkJDwMGVUZm4UNuGMrzBygPrGfJYQAgQwvUcbDLzQrRPkvQoBfBHCHT5jD62",
  "key11": "2shR1ikBtg593ieSNddDx8Ne9aWUUKVPt2KBEhKkA7MDibmfshgMVRc3wcXDTJygqBkFPDZDukeDjF8trJLgx2dP",
  "key12": "2bfEJp72odwPNBEXSYvR4kaHtrRnb21kira2HcAZ3tcin2XW5iZnJQ1WbhAfSC1NPbrhYzaH3346f1HcqnBbeVt6",
  "key13": "3muwXf7vg22fDghcUVT1sG2pdrt47WiXsMPTGLoM7CcivXXLoEqP6JrwEfayg1EBiu8d999R3627KUmJP7SJ84Yj",
  "key14": "655D7fBp84bosSijgV173zgjVzSt71HZ7bVjN9SPJ4Tx5u3wRpuCDueHaLMtshobiBoQRSpyF7SSzZQW7dBHTW2C",
  "key15": "7Twz8g5iNGqUE3cBuphbbxo9wy9QKSdPXSN2mrkw75EHskLiXEJWFTDbbf9hK2e5i6dxZVfoRgsMefS3B5bRTxU",
  "key16": "4CkU7FxEs8Hjf8xLZneaQoavqAJnL2Uu4X31HSVD51cqENpExJ3DfKnXx46BdmWfwoTDGuM3YPidZWGufpjBYSWq",
  "key17": "3vTyTSV7qyeBjnTy4mP37LtnrP7v5MMj8qAjpWGQ5MVK97jRXXYebahqna2tMkTVqM31nzLwWR3xLXDvYsn4pezo",
  "key18": "22crBSbMK4zNjCyNPHPRyAXR8rX8L4Gy7QVSqqNfwNSscrthJrxc5He2Wbd9wihGJNg4DdTt6DSgBkWyZ4eGEH1z",
  "key19": "3RfzigojjBqUtKx9kwcLUYjCmqoN2w3GbRMiH1qW6CatXiMAvCTWYEhnE5PQNfoJh68JyqGtVoDgvEUpqbyzNM6W",
  "key20": "3exe6BnH6cp7BfBXzHTwVEiZTo7fNM3z4a7rskY72fSLhUJFrJWoMqQHdyV99Eh6NdCbwywF9PbtZXw9pPkLNJVC",
  "key21": "489DcugtxnN7L8hxJHWCPopNYCUWhtrtW12t4xHojxcZYQCn3AwTyKDrSdgnKkL1NrJaC71Lv6p62Snd6DxZbaqA",
  "key22": "4MjCcoju66FcmxjaaatyxQ8x8wXrgFSRRcVkMjsPMXqszjTczsvZbbXcezafPHi438ZeGDJ4EnNx2yqPXssoJaLH",
  "key23": "48MFBA8RmFeVrWLT5Jw7sNeY6iaCS64TEb2KH7sJ8SdwEB4i5DJEpbUV9eFRLUdpMTbS84iTKzDJWo18iC2VQLYC",
  "key24": "3v1fLwxXny8XByx5ZhU2He4QUD3gfyvZbrPe8mZNqyEBfC6i1R6EPfQip19oVTSHWPnUdDgpafD2iTSBvZakea1h",
  "key25": "2qrGftjv8FHRWWqJugSBXP9PjF6bKCSRQzEtFmKwC9HAfXeBLBVXS4m16zEnnTv8oh3QiTsziMQZDykrBPXxdtEV"
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
