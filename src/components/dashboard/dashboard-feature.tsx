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
    "3YAGNL87RBKjNckTJNiAXMW1FaWhPUXN3Hh4tGHvQrFHmugce6G65vgkHoSKto99er3kjsPSTAbC7orTvz1YpnuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1kJWwS3WEcsda2tciEwRDa5aJxPWvSzjXgPPfpuw47WpKeUXWf93qoE6m5wcmqEkz6ruufcppYfqewEidyfCEod",
  "key1": "5s6X3AnpEXBEfbCXtmwQszFZ7o46zpwpCMikSpbCN68YhhzNjJCkypcTHaAs5S6PmGz4a2JZi4koKQyXgeJjtVdp",
  "key2": "4fSUHKwLd1x1y9p3hj8rWFyYrS9CtnWWG5iQuy5xP22bpdidSx7kMy6aSmTGaKfsYicHsgwbnvgE6Jf2jWhXhSCp",
  "key3": "3E4P8xdTCQHZHJpv8yPpdZUqErhUhDkqPi4xUgQm5cKrPPBbXTkg7xe7qSEEQvjswKKN8HNeaU3RaVnuzRBnwmkx",
  "key4": "2cfdvVF7n5x66kEZneoJtAYn9VcN4mPb3ymGUyCFvLC4dDs6YAGy5XmfahbrQvbK4e6BQ7DpmEefm6e3rTfNaYWs",
  "key5": "ZzJ5U8Fg112NeNchC8mQzQKrXvBAGNeGaJf6iUtowiLdazWsXEjfy2RWzER5ZJgRth5CfFycDRZV6P1rnpXaQAE",
  "key6": "346FqKJopeh7fHVddzrNbfvfSimfNhdz3WoTgva2CiTEmYa5LcVq9RckaPgHFXGNRpzYj3BGtwtboqbFDwyx8p72",
  "key7": "4RWdPPiMLaPH3DcDrtGC4Lnuh3Hi28Mx9bCFhc5aRzZBJfhA6ydzFUHjNTGwS8AZWKdYad44YabaCrviBafhdN4d",
  "key8": "5t6z5x1xaT9odt5YX3r3tDmhGmTXwnQuQzXjefQAYJGwtG6DZ8qxu5zQvTspXP85jnB4fPZzqctJUW8QyHyhBPfV",
  "key9": "jwJToKQYbqxZ1Tj4vyVThMsZ7ZekrDMP4adCVpXmk7rTv1ZnNJNjHyMvohBkwPjfPr7xg3kHe1DfZ48XNDSoqB5",
  "key10": "3wGigq4SQv7gECJB8BAtkKZnHrponkAgQpHnGDZom1a8WeHGGfj1TzTwiichVyLVsQeWMfriDx6ZTM97UQ3PfTv3",
  "key11": "3TX6ojYYTUEYh7gYckhhZHbPPaiFZ52WHK5QnEd6oqAg2kwuqXRNCkNjSPbDUW6xyHM9fzB8qTE9XY9DDWi1sFMq",
  "key12": "4v8UKdLrCfLB7MdTwYPaVUJqMtZh4jxA1XMkN6xE4FrwxohvmnxWsWD97cWvoa51gVJpmkg311EVnBffJGQcMTVn",
  "key13": "S38qkuzB2m1jnyVLquUDuZmD2varXjSyuATMp7bhdjpiTrKiZySftJTgQ7B9UhxNdRYgqCp5WoeGUPF3eCkdu4d",
  "key14": "4eeim6W5mGSjxjjqe2jPF5QsQr67gifLnsHzkgwJRyC4yzFxxqwPHVB7F5A9HRpMpqYU8xcFRAmMXYTamtEX5Jeq",
  "key15": "4zBxE27Ryc85tr3eGqjWLhdn2Vmjz14AToBEiNWRXNJ22BWSRPJLTHErFkAGovqvMpnYeCsQGMFNV9vXN76rpSCJ",
  "key16": "4SN5q1d8FUFAd9s3TgXdGQGB2ujs3EXZPPXm1wrS36oURe3cwM9hddMBmFcpd4q3Piyzio9rdiozWfAxfdxYQ9xM",
  "key17": "2wP42hav3Y4GYsCJsAE811w4FmL9J8KbQVaNVkBpfdxXasHFXyKNthAAXLorgJpgojhCfV33cgbxQ6MLt3zyNMmi",
  "key18": "5Ey133tk4fdYfq2E1Qorc3eJ4oCvZ9rjkNFwNGovwAns1fjPCnDAsoV6MRcBSzxzh3JcwmZYWLKuquPLpGSroj7X",
  "key19": "2tAe5idv3vtbiz7ECd8s5DP7G4y1BjwudFiHjPGi9PW9H5byzAyzwky6nunXUVMBPYv9ERzntTKWPKbpsDM5wfZa",
  "key20": "58Z1JV8XpVnxWu6eRDs8wHaG8iunc5hJr5C5f7dcfwrddjNSCSSm2P4wR6i1xRDhQSohk4cFxtS3CwAQKxwSpDZd",
  "key21": "5jKMzaVTQLhZPx91gK3pWY45a2Nw5LuBiXFBydo9CJboJEhY65EAKwL6vRh3uAcZXFMfNAmp4TLhtinZzqkfYjLG",
  "key22": "4XaSNrDEk3CBRNiDWU1SNsgNDAKk3PQnuLtuJ5kRqEfbTbkF7FMnRW1FsxQVchE7FCgK6KsJ34C3Zry518Ss5MgA",
  "key23": "4qiad9LmBiMLbaBeZH1JREwxi4WfTr9KYgGnaV7cA7JRZtTd5FErHajiT8Zp4xWm4tU3QJjkJdY5aXtjX5iKjJpN",
  "key24": "28omzUq7snq6cnZbracDUtZSEhtjdBi4gyYNYi25rKuq2tqmLSwi2CoHfAGNskU63MnQf4WDmYVef3hoK6kkMAKi",
  "key25": "23vUGK4ogB9HGU4R4pu28Dvid2Aj9fLU9YV6zibkfDqCWvv7SiKLHUDtatFVh2LLb3vrkDscuBX24LikBooU7BXt",
  "key26": "5RGo341pJhAU3MarWeX5BRdhcGrg7chmJXcEVM6TVeD5S1RKJCCcko71kU8ReAJtUip57YeYY5mXCLEBn4bvB8uc",
  "key27": "4QBmTp3k6B4psDysQxiF2FV6mWJYLfLTE4mA4ZH1AJWQDxyGaxbgCZuRbR72NVp8mkePzjgy99nbAXLeGYdyrbU7",
  "key28": "9ThAYUeqBmv49LPgG2Boqgc2uvLzHz6TYZnHJ4j5VGsLSy2XLDaWNadMxov5JFFbs35jg1wtSqpdZ1V2nF2K2ea",
  "key29": "5ELKAQqeuyT9navJbxC84hCofpm6xJUCG28rKtk6YQkjyDosRHdfmhWodeQB4Hv2nuPnYyixLcGxspsyrtPgQUVa",
  "key30": "3uoFtCiXY6a3543YxqDyCusWB9VMTbLYcoz1Q8vC64euWFS1AScWhVLxm8cPmE5xt7o1AbFMhnYMzgg6AApKY7mz",
  "key31": "5cjszuRLRhh4uFVw9xWAzk4dQzvbx71UVQ8n7KadrhgNe7hp8DZXFRnNQSkEKyhqXfWSsvvc2Jgw7StVUFfkn8H8",
  "key32": "3v1E9vyVxiBisdr4NJNZi2tt3SpxFLKNCYCuu5qZ85xHitQZXhDT8GfaJSXuEaogoWoUqjB7bX7jJZ93FnT7bp56"
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
