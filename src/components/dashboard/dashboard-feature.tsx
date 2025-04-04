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
    "4GJMgXfqZPCMuRwVUSFqyE2MeWNSem6Px2TEJzU7FDv4VkjJFiEEEVb5nGkZoQBHsDX11sjFW9AUb9ApCPAYUWr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EVMirDozxgdPjRfZukJ1D13J4fuYAg4iVtAsERCAy5DxiP4KAaZRvNpwna2Z3ebNoWQFvDxnQKgjyZTGq2aq9u",
  "key1": "Tr4o6MMhAHeS5kaze77wkcPhN1ngCHVmm21b8Mu1tEzPobQCh5xdN5V1k5m7MmvnUsBczPwfcg9Nby3JVhrf9gL",
  "key2": "4ztnXfHvxevthVxbqpTahe82gueDVaUGvfoBVLTi6Eqh4SA5RzD36EexdqZeQZLEzYqXvayinVD668Yk6Hxh99Qa",
  "key3": "XAC986Qtqgx1zCixZfbsxYZ9dFyqekMNqPqq8B6Vy6R48b8Kx1TuecVrHdsyZqe6Wypv8PNPrzQjMU9a2peVZYh",
  "key4": "xK5QjCzB29Me6YcNuV6dsoDhNHQyn4R5rBeBp4baZV3fyjPUQXTdSm1iyT8kxiu8KrdDfXwt7U6gwzabhv9L6tS",
  "key5": "2MFhJterHaWUgMYGQCVRaJffLKPjmtjuJSfQ9EjrXKsnCVrbp81mm1sgzEjqt53D7p6V12eUkGEHE15q4uJh1FuY",
  "key6": "3kTqGL5nhTetc43oN7yCqyXgBBnR4zaYN5ss1tMam33aUyoBW7bBmMDWJBVHVU4krj8qPttiw1sZAP3JxcCyixjA",
  "key7": "7ZeKEQddjCGqWyZ1FmpYbHLCJnRrQjDywRCs9dy5FnaozRYHBdoUqBVFuXoHqYfvuN2e9jbGcQ6ZTwN3qTGdswc",
  "key8": "ZzbGJ5uPYN9FFy7hS3NqxCV8ienRMtRaqK3SgPBGJCBdphLdN7ifyHWNxv9vdf7hRfRF3V5hYZ8wsX4eEVh2tZJ",
  "key9": "2keUY3a2s2rWHKXEVYrFyxPDvzLZXeT6ZbXTMFuzdkqkQtRaHmgQbGbo6o61KQJjc5CPwxxDn5ND3qdzSqjvTs85",
  "key10": "3zwGuAvVngAQWZyq7wD1XxJzWZvy5KX6DGSWYBzedfLSCparzn9hwAhr7vMtwpM9cubWVywH4qWWFeNUsRY581Da",
  "key11": "3ifoqA3bXq6TuXvvUg7iUBJVqmUDnf1gpH4ErHPYMv5reUj39HkbADgcbzcqLLo5m3MtGYSf93ov7gMw1xzFJ2Y2",
  "key12": "4D52a2oFsspcidq5g1e61Lyk9ycmL8pcN6sPxrTGeutXUorgTkU9EYcX2GyRQ4F89d9DUohn9mUqqpH1xa3oESmk",
  "key13": "3GQPzB5Ak2FuBUf2VWB669gqYGbSSMthxLL3zJZowLREDVx2SfTrjnyArHcp1PXj1TSxc3B2QHCmnntad1JUFvyN",
  "key14": "5hMJdvcAPULVW18NtVi3kiSxWb3oaSxFcVG6f46cNLa81S2xmXkZobrezk2mZGQHBxct5QgigKGduL2nkiyzZRg4",
  "key15": "3bAyeAZXmZBptfjjwDYk8PJ8jeQyg9JBjtt7inf7Xggr2WTeu98utSxm9bJ6RVzkZd4NUt5Gg3yEhygmEBkubbca",
  "key16": "5rbfjxDaLWF8PtcKr1k9qpNyYA5mE2PpYwpgh8Aaz4cM3uiEx3hZ1vJqZRQB1WJeCLu8VMvtdFCbFQBNqhEBzBJq",
  "key17": "BxmjqvRTongehUYZUjCLAv4Z7BSEXPYFq1b9Cjyt74vyNX8P2GcbogzaaxqSU3FCd1yvQwpbFwsZ79Bd4EdyvPV",
  "key18": "YaaCSY3EvJsLaXsoQZ3pSnHDUMd1CnmDEMRNJy7FwndcwNGB4VLskiV1JRU3h7hW5uiYExznxLwpJMdHc6WiFQA",
  "key19": "5AMQJXMRVb4MV4tymJZDRoUWx6GAQVcvdbv9GCr9e7GYbsrHkVXNXyE9eCRNJddLsLZwtHe8oPonoRP2H8T7iDTg",
  "key20": "TofFEqNfo7bLKFasCykwukFsv5TnPqKXgmqjLDjPYnbtddJNAUTGeDBVh2u98YjKHb8Q1ejH89wkSHGJzRac2ji",
  "key21": "unmUGX8LdUMzqdRmxtq4VmneFamkcQVcUfHVMDn34uuaD5XEez1c7uJzx2AEeJjaxZUMcrUCyqKSvMeCrnuXMN2",
  "key22": "38aKsVg1cCddDPkkn6FDUEPxxY1rBae8JrWW9YRHCUPnDZ8buAaxDzSNLhsqbDnhCZQDpsYkRrtv4ANeo5fckvjY",
  "key23": "2o5BwADgG8Ru2D9Lrsoc2TNKngHG3iH13psefdQEo1KXESie76w2tprTfGRsfkcaxBvydaefCLr22N2Q8Tv37YWH",
  "key24": "5vGpw1rBTREbfdMJ3F7CTsjVCYgNeRUNnQkqKNF7zbZqwjVd8ZquZzmXByn1KWFF18rLo7HQYtWAxst8Q7Dm44tk",
  "key25": "wtQQEXp5ZW71wjp95FgcF2mRR2pRSnjh5kdJFqA85n8iXb3zvtdzWnVhc9Et9tNL1yYjkw2Xs2o12Q9UyymyaB9",
  "key26": "5zr7td6XX5f8HnqGPZRqYfoezzK3UL7EohTKkWo71oro8A9vBry7ciYRUGwyWBaz2Gx8u9CpHwRBhcnLSSW6UJRR",
  "key27": "nrFyNWoCokSXiUoKiFWx48XZeh9jgMA3XY6T6uvDZpcCg5mf37EZcAcBCVS9Tg2xvbzMUCGTe5wARUMP5ZrWhDQ",
  "key28": "5WZaFX6r3gskKsrTFNnRNJDmDxrdssF7WbmQtyUCSTiBd2Yp8CnVitz5Zch2qAdUJDGX3eNneeDah5AmQ2UYch88"
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
