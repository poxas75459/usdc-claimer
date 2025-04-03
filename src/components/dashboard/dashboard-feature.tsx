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
    "64PdFjbiEiN9BF62cqrAeXMgm1w68NmD64LCXoFQk6udp2uZPPCVP48vt5QddfCWtJKpgJDrabQiC2i5Ro9QEZLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mta9Y58HySXVpcEA9BJVMxP6GywnBuc6FaoupMCCys2HXUR9LMNPW4yLbwqwWyRihqTdhwCeCv1RaqW3npZx6dD",
  "key1": "3aGfYuTGQigUHas5YpXMAJWAXeEV2eq6SoUiTEA2rvTE1CVg1toGhSwQQ55VuyL4QnZv9sWT7X64A9sd2FMj8hp1",
  "key2": "2C4yUnfKNEubW83oQZnc67cmabD63hBuS7f6MQZruQshD9us9gDkzbSAWfjoLFkyhrtmtnX2YCJfayruHnn15dZp",
  "key3": "5T2fpszue7qgdnv4J6LyXgiS7Ps6qCbxM3HiepGJ5Pu3Po2a6krZNjCgwZamWXbJFCEq5NAmPtvoTJPZt6koUrG1",
  "key4": "3We92yFUhpGB63Qzn3y3QdRuBfthCE8CMheiJ2CuMxCPsmeRGD1r3SnGbBSziBBf6XzhhKNw2poKmTgVGzPHKfr8",
  "key5": "4MJDZ6GmoxJYfa1AY9okXP5af2kAokwTiJqfMBagFfgP5RW4ZkPgQ8kU7vykP6ierTwPU3sfsJ1T28cBUxKqy5M7",
  "key6": "5mtcpstASqALTsghaM3S7ScpwWUWUUG1vJ1KBVLrxBADShZcCF1aHukY7LRQSjhNjYeGMfL3cWBiqwFFAburFm2h",
  "key7": "3xsAzbsv5DXqT49iyLKkCfe2g5yk3SsizHJzSw9nYmJ4PmPEaECAvXQn8dC1pHZvgyDEsc8kMRvnMSG7ABANtecf",
  "key8": "61r6D281RUmu84qjTeHyQw4wv4cvV3rewgspiDPimrCkSSAPAimN1EW2kWoVLUYf2Cy77tj98BdsAap24arF5VMh",
  "key9": "3Hcv1j1nhAR7JQhhBeSfur7j8GozsdFZEwCbyvqh5dqxUuYzQfQBQhhmz4xRqZFU7YgUoDFHcNTvkJZ5wTx7yM3T",
  "key10": "56i9voz9j52p5HXGLrXbKVJxLZP6eYBw5eNQtvXREuSg16BMvGizsuyL1oSMW1wMRDih3nrWV34SWDzSzDTxupCh",
  "key11": "3BRv1oWumVo8hoHRgDJowwFTsTwrMxHr8UuqDG8z21Rznaya1TSLBj5VmZqMqY9jmwxRc59ZpPSVisPeTC8Lsen5",
  "key12": "2b58Sug4uu5kgwdQrYdLoonk8Mv8n2ZpCt2zjhq28Jwxs7wMAVDcA5p4UTdm2R3MJr3KnWydfYZ2xjeYf1opo8kj",
  "key13": "5kqBFwUX6tL2ncmJzZsjnBU5pmDFWE3hJ68igAd8yA4cwx3zSSGz2wsudWhbMxtTsHkmRs5fmUpeGggpwtAWgUuz",
  "key14": "5HxCj4GJZaTyStfoEDiPcStemBGpSmmBLqeeE5GcM9r8JLUHfKMMZCVX9QAnKgGAVUR96kDPVZ2Siv2H6GV62fbJ",
  "key15": "4YjdcLmBXhDweY3w7HDxbJ9mTZe6URVpgpN2Ef4rudEAQLBxcwLPhZrLcoC2zXvwjFKBLL5ciMchQvDijKA3n4Jf",
  "key16": "492xWLm1U6Wqtdd52HUKVSZR5J3vL9Xwcvdo2TFvkgkZYYAzihWSRmNty1yLXDtDhh9ETK3iCs1aaJuNaVymy6F3",
  "key17": "31w1rnsoCPsS1afDpZwwgRhpuZ76uAFfHJ1vyCEthrz2achw3ESsaPdHf9Ay6jTcYRxZ5wwSErARJNNGtR4SDBJ6",
  "key18": "5goEP2mEZ2QNxgJ5Sb7KBxbJKenyHja6yjcXF1RG6UXt8KeJmTgK5285ayf6oNND82UTxnhSGj2DMe2dVMvQgwYq",
  "key19": "65yDrtCQiJtx8XqS6hQ6qrzr94RroQtjvGfof9NtjJ3ZMigfYHBCK35JT6hXh1kMQ4d2WAkzZ6rXohQzCRhbE7t4",
  "key20": "fKRZQ88FBNcY9oQ1gxZSYxGcnB7swkdUYBAE2gMorvXwSj1tfARfkU4fm9ust33qcV3njM8Aco6eH97DB52x4Y2",
  "key21": "2AjZbn4kw5Rj7iRTqC5nyU9RZoiseeQBs7HfDYJvTFzZ825Sudskfe6JKBFRc33TvsLGFfvaF6mANe5PAmELuLpF",
  "key22": "4zq1V7DZcHkA3JgmaQbV6S4qFSKFFmCq2EegGRGSEkcUFWdxiSKWYMxMUiX9v7ZD2QRw6ijdEh6Dm9nc4MyQY299",
  "key23": "4n4uLZabUB4ZeQEAgth7SxRLGNFvD8cacuGbosz7ESk8qwPP1zB26TAPgth43He5ezzKMLJNZUUW4UY6CtwrCgQo",
  "key24": "nK65UeGfxMoAYqV8CGdvTSNVjD6sEUsvBCL54G7SWC4L8QodoJEkUk58B6oabPJpXrXKmq5XfM8rkawb7qpdeNp",
  "key25": "4D3HpUSmUhteWbesEfq3x8SFoB6edyxwaB9hihcbQbjC8fMi8zhPXsDdBzMjAzTFDXGjkWpLLFic63augMfE3RZX",
  "key26": "4zgukTtGSWCGP4FXr8FmsAUd3srm8ALUYFXv6ZmxsPECGCExoBPDiPp1M4evfZrRrDYQ6Jhkq2MDhxSDDb7qNUGC",
  "key27": "5TJemLx7AqdNqsMSYgPgnSuSZmTqhvndCFyySjYQANU4ZsG39Kyj3XanJGPnT6san5jNRLCAYhmVdHSspbo3wyjX",
  "key28": "3fQuaQD2ixQM12mRojf1kWj1vg4sv6iAXPMZxsu97PicJL19YGYekQBmF4SErCvMUupWqvedAD6EBfWw3Fv7djQR",
  "key29": "3yKa9Hh5DGHM4szs4zw2iucVBcRn875cC2ULT9gHa9gWvQnTsJQRjoYK1TTnVWcnqXDJjFU2M2Jste5BHV2eUPWH",
  "key30": "2Ht1R7De4bj297KfATtf4Xn127efjz8WSRtPjQkzpHmyWSjsW6XPGSsRLE1rKGBw4PVvsiSsCC2EGSoag9dFMi78"
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
