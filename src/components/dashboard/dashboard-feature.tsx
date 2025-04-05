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
    "5CWueGrbGMLjG9AfsJX7mjEZUXpFXDhRZfYrA1X1ERZNej1Ca66xtKuV8DzuBAVBS6L2y311ykfKmrNveVY1hds9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DbiYegDTFyn59rn7Ydw7n7mFKemWaZG3Vy1v91ZE7DKu9TE5fwh53fvPBsKgX5zbhrLrRd5d6afrngdbCKQGe7Y",
  "key1": "5GhKiQx7o8BajrQ97fiND44kRYy31Wj796iVbzfBj9btK6VReKNHCvmkXBAgR2oQn7VPdp7fWhxcHiP9N5nwUBJ1",
  "key2": "2Jj9QiNzJMTUwAXHqLYNfNPF8ZcmtqKHcfoErpabYaAXKVpaShDEZ4DyA3NUYJt7rSjJ2SHmK4D5YPD7sApy9ME7",
  "key3": "2yEX6XAXvKN6GSrDe5pUcZcy4AjPKMbztjZtkph4Q4edmqmfEh5dZGFnjE7uP6Zo4zFLNqLq41u75PCVXx3RfkG",
  "key4": "4F2rzbNZM4qE2WWbmS5Z8LfSQ3SgL3NPZ3eQSDy6bQ75JUKLYjSJhRWqRrBg9vp55Y7gDuK11WmKQrm8T4ZM51hs",
  "key5": "5oCqKNJDtYv3o7vRUxWNTpSYdjF3PNLJqMipRxRkAYwcto25whqaRfq9qqP1jABcoDZ2EYMQHQiucFGz2Re2eDiD",
  "key6": "39meaM8y7a3yRKvwiPo6zkDSV1rCt9o5YBaXmrdQvsanJfkiRPRRt21Vy8T5nUE3BTcdAqmQc22UEKpqXajmyxns",
  "key7": "4vhnSEHi7vhwdPovnSRgQvTo834Kaxq9wUQyKtmJUeEn6JM8aoiSnuBH1ZpsLs4JF9rwWJZpvjsKi4yHaKK71j1P",
  "key8": "2wAE5vJFJwb3R5qycnZ3VokSZCedBxZZYtny5kTPeQU9Hx9nrZvmnytkZyXZTHtc31pANj3Y3cFLDwfheCD46xXX",
  "key9": "3GGg5Q2ZbMY3qsWxebBmuXGgV6Bt8tXeBcyu36MFc7xumuSG67EaaNtQg5UUzr7YYj274rKsAR3oMTM3wGT4Wf4j",
  "key10": "z3qPmpnnq7ZC54wv28QYLuZ2s4dVjZy9e4UnoVCykufiAgGzv3iU65UrrGHsj45HSPDy1Bb6VzocXcxTEZWjxXZ",
  "key11": "sw33KBzSLxiYukYNvHBUNNCKeszxez4BrB5eoURKn4UoLVUmZzyYsAkEvLxUWkug3KsnFmB3Nvsfk7tRDgpKmkG",
  "key12": "5GcxkZrvKP4sn4qTkRdJN6ujw2M3buf2Hp4nScsk9iZ94XGEANFzxnoHxWKsVr3KNsRtC2U5eTzgUk64CSMtEDhj",
  "key13": "32Dmk5yaA1a6C2vmeHVpqxXk5uSVpr5DEfZg4Um1Q1SV6Z65fmt6Dk6SH9HKRbxUoB6i4JL99uYTXBnBiBoevRqu",
  "key14": "5VML7kbH5SMKtNuHyxEzNw5s9xCwbd4KGYvXQxDYCxg9Kf12qz4XtEVakMTGqjpq35rSrSwGSig2CZXb6Zq6jbdW",
  "key15": "2Qnk87HqH2bwVZkGCVrTTzSVhxw3QfsDxCtBBXT4hmCxhF1dUybEidc8JbJKfDAZ8ZxMp7iC1rmWFHGELk2iRHM1",
  "key16": "4L6KRbZBudjQundVki8wniCwJ3ibc4N2tdHt9R6oCv5xZhPTHzrhnf8iQy8gq8fAPBuM6jJL3CaVgrT6SJp2eVRy",
  "key17": "5cH1ALrYve4P3US9B41Diz96Bxicp5wtapf6ZZ1wQkni1DLd1SmtVSoqcbRMYHdj294dkTPN1TYXkCViUmks2spw",
  "key18": "4GAzjVVieoNRVqKzJGaJFGthAEs3KstdTxsn7TQKowbFwDjmCNpp3aMwZ2wuGTS4GqLKPTbZv6fNzUuNCWRWFSbi",
  "key19": "5oa98uMgrdchL2sDb823c9ZEBsC3e8J7xASnhrL9VpZ4qAQnC1KXGcGgrozECDXBwccQithctBm5iiX4toA5ZKq4",
  "key20": "TxCPdmvrvbwMWrrcJhKCqfEzJSPv9gc7j3xyAkQ5bpAgcRe5FXnk7kV1NeGaJv2cU4VhKY3BCFTERJnX6dx2Ntg",
  "key21": "4mXXz8Efv1tyo1t6sWP869g6Q3G2Q4jKJdq4ZB9STFd6nGiE3GM1vByniMWZfuPT5bGinsA2NFXnKxfbeZmhmoYa",
  "key22": "5LKgutC5HQgC9NDAvL1BGNT4PNwcsqXUkFawdNB9PU95gHApAuiAqk7Ku5R6gpZ5vW2qLzBedQNHon38gKh8e5po",
  "key23": "ADhCEEiY1G6duiBxKbHzML4BMMN6UvikedX46yojNnmNhLN3jkbj25XBHU2Hfg1QTdhFvdSTPqEptrvXSn3z5Ms",
  "key24": "5Kg1BFaSVGLRgHC1HkJWJEN3Zk7JfUm5SJ8XvToVGyLP4cw2Y2nBqtQerdQfQcciiRC9SyJDk81ucQfqqScoTxkg",
  "key25": "58en5BSBdKqzJzerx54WA5AUYJfBWYWYi4to9SgMKFo6Tbc9FiDmEoEbHr4KWcJMqC8p1J5h2mCDhVHWiMN48d2Q",
  "key26": "5Te3yCLkC2m7Mp5w4kLvFv853JEbibeyh9w8NFh9vp2KnhnUFxEbawQhJ3bLM9ZPDiMTr6m1pzyxNEku4raj4h4S"
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
