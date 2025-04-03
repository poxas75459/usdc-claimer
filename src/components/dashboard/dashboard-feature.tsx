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
    "58tmvYgkAs3u5ZFty61dHHZreQuxiKxyXkijmBpUcLqecujrF9GDoUNvEPZLSnBbvUaCoykJKb9etMhP6TYdu7YT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHwZtpzQEyxGP9YpkX8K2gh8cX84CXyiRZo8UWYsycc8WjSNS91eoT89PgFQ5Dagq8578ReGqAL81taaYAkcHtT",
  "key1": "51bCiYRMWsUHdZ8xFQCy2wXV3n6oiuM7s2o8XgT8Xyoyw65wLfQ78erqEVmz7CjgXC1ewFpVnVMMJuu2mRwj6NEs",
  "key2": "54xcYA9ZX2aTSCtDDUX3BsUqpABN6mXgCUjbyDdTWsHtQf2foTJE7R2KxUeR1rJkKvSpJrokQu8ezdfX1VzgPZ9q",
  "key3": "2TkQftj1UmjLobiLjrMH33dLN5H1CjxhPmQTGU3mwccBKv8cJNr4XpGipUDyrwLZtiUh5bzKs6LhKn6jSbUhbSfp",
  "key4": "29hwCXE4wSKVuvzXL4h3pRdPffmCsQCZJqPQVJVe27V7tKSZGDWEz5qTmBWHrvRzEddks9TYAtiiDPi3Vz2k7USC",
  "key5": "tPLAEWZhZ1xfsmUycqUwUFEx3vyMpZzjmG8Mwy5FksohV1GA1ptpnic23mrzW3aHZX4Hp5LQzP2hwg4XCmvS7Yc",
  "key6": "44oWJpLk4LGyVk9rWvcc1BJzdKLczboAbvJyXNVmZezWx3CsjLEE3vgNXSBecezDZ4X3uCM7DeRLWqTgkJq5Jon4",
  "key7": "3poZCgYt6WiEdh9t4GPWfHtMkeVJ5ESzys2BwYkd9MrFAHr19koFHbiCZrxndNP1p21vgBAhSphxuPUH1jwfKAZU",
  "key8": "Xr1xqgxjyVQRwHbZ8x1yokPkWQFHLAmsX5z3NR1uU7b2RsBHjpN4WQwe533Fw2oLWrZKPFJTiaQfvAeEnPLLECu",
  "key9": "4hJ2oQg8LFs3WZFDPDC6WkuMpZj6uXocmmqwGLMMhp3mHmz1KbGXMrKkrHme4LGrBaiVaq7fs3DzVC4tgWwETauW",
  "key10": "3cdZMwWkF2dsVCfE41gSPGWYgVbYnbBrKAKoFwui7sekXgANDUSirDPst27iaa3LNPyad899PVTpr3TQuhBR6VJE",
  "key11": "5Yqqk11ovXGEUoU6iHmiz9C9kKVZVNL7o34MmFDAbXyULvo4CvaKmjoqeDnWsVYchYwKF9AVU8UQbQEVfJAxqy39",
  "key12": "kSuJ3WzDHHpKWvys4UUASCeSUV4H2uxZMVLFEhHFTuhUHoD66rk9M3JwiHZqZvkfi5348Rab2kDQKCfxo6464La",
  "key13": "5W27P9DeewkzwxsnhNbdxMkNsHb6fpWrCQUKu3XPCbVuQouFUtWwg7GDBHcnkEyRvxcKBXNxwfbbDVMa9AM446qh",
  "key14": "32APszPs2vALoRmhi2eUf2EsC4go2JN11UZPgQCzshosYK8d7r1jHianvtmGo4NE9dLb3CDLEaNZgbvYT8wJiAnm",
  "key15": "3cgmMf2CTLJ3aCAa98REKNtKowsebLCAs3uS4swBuNNqLtg1VKJXxePp428pyMJQP5GRybuvBynX7qVmauJ5dvyY",
  "key16": "tjtwpx7p6hAbphokzcXE1Y9kDpfWd11PdNrNHBR4jZSXpGMKsN9nkHcbkaLoo1CzjKMT46g1FDcKBy7Sa9U3tYQ",
  "key17": "2yGnohzqpDkr7ZDW3pYddVRGg3PhbZvAaCxYSvWXFUmm7METvjjuxYWk1SiKRHytDX8BGH5Y1juzPWveS247bd8J",
  "key18": "3Qp2VGvg2N9FMH3Hj5bBiTkCDsYJ2SNaGgzgWszDYFQkmRKU3RG1SSAtBE4mtSSRXhnwHmypxDu2o9HMdptMyHAT",
  "key19": "4pWBeDZFgY5JpXy6dsdCNkpN2FkEobQoCadNHFyDm71TWJkMM4rLCmPBsZxb8snfA1ZvP77P3sVLrbYiZ1BTVgH5",
  "key20": "3FVaQQuyKPoW64roDE5M8VNi6F4u63cbfV9Bzbu1uCiddmXvB31KomnCgUZXZaG6fjcPqPc6y15txFikw2Ckwu5z",
  "key21": "5AtJLgJHnFf2myUZf2QXZPtZv5LzdkQGhun3zYySMWbynFrTttkVoDRehWDt3LVtgXvfWrLHH3GvduCNc3LSQN4",
  "key22": "5FQMYSfzRBmdbaoKUFknsMCnytYv34NFBM7kXi4NMwoyjM6DqWWLoxasQhwf1CE14cmVaZthxYbBVd3tVjHd9isJ",
  "key23": "2WzDAC9FiDut8fkenb5RWPFX17NfXWYoTnL5bApscBhemk6XjEQFq8twaKGgMepKRzJVLTgzKH9q5vgBbQeaQUt5",
  "key24": "446BTztE8ZMXGdBhLCKV47zzNaC18fXTyDj5ThTVWC3ier3ftqpnw4JdSi9ijMMD3nVKYUaRTHduaxg4kzM8esAf",
  "key25": "5rtAUdRsgjph5vdxnjgSoUjLsVfgPLXNr7YzWBV4b5tNrrXFAtdMywh95zSfQZoC5ecVRpqDnKtTbZUPsoCkB8QR",
  "key26": "2UsQ7PRP4NsNWtCMNcpskRGHhL7GYviSU2Jekdg8L4RytWENWYB39KpDzyy6qQyxVyaEKNVcZDuBmVpBZWy8GkA7",
  "key27": "4AmY4zHLYqWjBpP7eNsbndrhkFvuQFaHnEiTgXbRXSbdgY2QBtpJWAW6XdEbq5knFAuGoJcEQLHEp8EbHuYQTTsL",
  "key28": "3XTmzHYUnUUncVHLwuWusE6gi8VcBrQ2hpchgwjFwD6khHMvfQeYMKVHMBjS8QCwhA5qtVvx8FKoJAEa6ZmJHsq1"
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
