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
    "5opY5iRQ5okDYJm1qMWtSfo7gLvFqBK1XLn1J7Lcjc3h5QzppGd8P74RiYJPKUPbpSd5HRGiRUWCkqKKJvoRDvX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uuQvabFBoJkR39quWMg7erFWiaVkXPWP6qrVdRKLNTXmAADA92Ev6mmVDvNyEu4e7PJ1MknHeDjbcNJL2n7Q5FA",
  "key1": "5C9BAbJBEGio77nrmtNcL6yhDxJqE4EN537rEe9ZmaVRiPfnZz9a3krfKEK5jqedDU5ERHLs4zuHmfdnPTXMECZ3",
  "key2": "3LLuk5CTL6dDW91QXXCHDy7hXt33Ur1SzD5zUDXDzYucv2HGqcDmGxLrsT3BcMDBVyXxsdPtuxBRqYi9VLqzt5r5",
  "key3": "czn7F45imEwGNjVNSkYxbnbyLkoyi4fWqKkc1gCn55PZeZgwiwFvpgvoo4in6etv7gAvGGLCXfEcTiFGNsDsQXF",
  "key4": "zhwkEPCBPo3ZETCo8q8q1NHSgusVamPb21ghyGxdGeaiv4BYroe7H3hvfPKYsa85zB5iabWygeem4uvBje11WRN",
  "key5": "4d6UUQHQyduuj11sPB63PbpfWS5EPt8pGp2ADyyjFvNTGbjvJRBrpFHH1V9toh2GHP91JzY6JdeY7G7LCJjoMZkb",
  "key6": "3JncHMWBgzWmxGJrQW4XxXmx4bmFnHqx7fPTjgNrMPoNdwerRywxgHBEQLuBsqhgcYCxz6Aie3ovepaLLi9mTyye",
  "key7": "3H2Ha1fqmGB8Ld8Hrs23J88hfZTzvdawkotKe5gUmAzb9jkNTPnG8nU4zdmU5CCtaeJUtyg5pEXQ6qMXMonUGu3p",
  "key8": "2kwHwLuPQGn5k4uwbacXpkToTdiZ3ZZUZQ1FDkFghukaMmCQALVp7aFDtGHgHp7ZhJcGiozETpGd82sd7pZycKwe",
  "key9": "TN8X5QngAxUtCvizcDx2zLCohubAwJSFwYX9V2G5mo61yZ94g4B8Zp19wWAaTuG4Ht9xTRvi8QA1ncRYQhNbCeQ",
  "key10": "gjkcWtct538ZHjuXtEtboqvdPjHjQvccXNacmvzQKHLAGG6KYd8EVGCSKbMFdxhR7yubXCRf2s8Vs1QaCTE8pUQ",
  "key11": "28KbjqVcbtnbzn4buakxioouMjkNZMx8nBmZR1UoNr7VXyJ9NU7AZFrbY9zhh2tbUsdqmc4q3CBRnaQtCJKR6Hip",
  "key12": "5EAp7NeJncxHrsyiv99d5Qtvam8SZp1proHkNJFEKj5MHVR8efzDiGkqyPMVJrNQjuemG3bwX7unEx6tqJZEEZC9",
  "key13": "645wbEGj6Kmez6AhYfPVPhDFRqx68NLex982agCCJefhhRnaiCi9VBeG8qX7hK8WbkfGfTFawDwb2wVgtDKUsJLk",
  "key14": "273j9Trko3VQyXrVA1cDatPqts8PzCAQ8N6BznGx7eRj9Rytfpk7ADqYLRf289SbFZyDj3CVbmHWmi9a7db6Panu",
  "key15": "5VE6uYokcScnfMfbcporCzg6FWX68NxKW6vK8aCN8P5vddmxmZ5PNuV2M7xv6PZvgjcAS5958nbwhjCcJ1r9eYph",
  "key16": "3R6LEF3ZhhkT2QFNhNWnwmcnBysNDNQQC6v7gmTUz5eDWugijUBr4B5ZZSuVT2igaYJQBoVmG8bQHP27DJANCurj",
  "key17": "5qBnLexNMaM27EchYFFkcYyxV9hY2djNMggBn1WxzQdBCJVZJ5zvU6W6gdyXa6BzkZikZ5ifiHsgMRLHW6QNj5f3",
  "key18": "27UHNoH1sPHsnm15Hu9vjrcok5XTTojPnCAENuZQimd4XNDYpkZDYzGH6xF1VKKKqD1Q8mZCEuSAtLxt4LkXNshe",
  "key19": "2Qoo4x6gDNjSCcJWmq444whnmzM7u7WLugtiFRHR7D8uYmHGwNGMhQnd9Wo9ojd3NmXrxyeercht5iDv6VdykWTf",
  "key20": "5JgKgShhptEKuQ5ibMgHZshoyij5Cyxd5jKVFWvmMRVaTmVa5ZDZHmy7w4CfMetxzjGTvW7GymJUqbm5qvm79y3u",
  "key21": "3HuVAAKpbT96sRF2sze5nYsDn3cesnLVrcwL9f1AzwgDsGf9ntri8tB6t3S8pr8SGBpM9fmuxJe8D1oop3N2gA7t",
  "key22": "4zNqPu9SvfEsyEpzKBhEUoJbbMX9QvHptP1Fbw6GJ8F2Y3qEKf95dAua9eABDLyA5nsTYwoLxADncZV3kciDNPbF",
  "key23": "RJZzwsAbzzRCZSzjY8yvyowG88Q2FNiKkXJygc4gMKRs342na1AHvCjaQj4hqMuJe1epKmgy2i8KTqdT6ENqkdP",
  "key24": "48djZmJzw2y4sKC5t54q39BJTpapyoQqu4aosy4zUv6wJMiJeZwbu47QyUx2B5FYVfUetnYS9xvqNoi3gFyVnvGt",
  "key25": "336EfsrY7qFX97sXYjsxYi8RznDupkyH7A2hkibAf1AGYuVXqS2Nd5hEEmPAeUf7wF6NAkDc23CTwpJd34B9HHGv",
  "key26": "4j9NTHaf9xp5xXjDy3AfKkBfybdCA9bhzqQMDBj7moPLg2QcGxgqXSppS4wAzqCpb7eZyjQPrxG3UqWEvRNuevJK",
  "key27": "56M1bMDMHRspi6ZT6R7QNDAQRvmFD8tnLRiXQ9JM2ub1ak9TS36hzigCSB5KaJ6XxB9DUTtyabDXwKmg4HJPqqVb",
  "key28": "424FgNqxPotHK99qyiWG1MDLfyysFFm8L9jk6pqDx1PNajnYGiKoP3gt2Ec7W8UyAVCLooAgdrYpvrb4ZMk3HYSn",
  "key29": "2FAXo3PbVfbD1CY2nia7sngXi8Q23cKQnVy1nrZBnAfXbxujneunjq6N1E15eJKEWtHC99x8hA38YpyB5XG5FLsq",
  "key30": "5s9pHhCxWVmE6uYGJbPCR4syhgHFVhqYzG9bMebJZVt1P7RqXE9h4CvPPiZFgCCMU55fEXXTss8xJvDKPo8nXjRw",
  "key31": "2iY8mJ5m1GgBCQiEG7muuBERjNSxzGc6dXgjKEbLzpWKnaeSko3gtfJbVnVsZCyeFx26H4AnBArQhTc1SCEj87gk",
  "key32": "57qoKniC4vMEb9Ru6dDTNeEUHNMHZLzLAB2oe49mdN2rFenpiakcy6V6jEaySqqnwwujTydAu8o1PQMsQgBbcpyw"
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
