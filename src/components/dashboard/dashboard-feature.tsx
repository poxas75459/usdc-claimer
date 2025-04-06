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
    "4JzHVXBVRbMiU6pfA4Ua3yQuFMUh2JsfYYX8vH6ioe4tyRVzAgqNKkGGrXqPpEteSSUNPJf1dKeDteRsEJxWwYka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wch1hjyVnKe7UKw6HWN5tQczWhsSM9S3PEyfYx66Z1mQp4zZaHnXjBLfRwJZ1mTuXq76VjuVo1yvMtDkt3XF6B",
  "key1": "7W8K8qFa5jXtkL36a91fddpFxmgFZt7H35YwGFPHoUk9Cqn798SMkgMoeTW6B1j7ffyRjBFuDcnrDjPBwLb5qYz",
  "key2": "5NHrwkX8LDm5znVSPCzv8rLB7PobvKn1qQvPsq3pbotWApH8ciQiw9Goti2bwKiv19B94J736umRB7mny7gBFiFH",
  "key3": "5uNoGn218oNc6jLbJQD2W8zLgM7q4D8qfo6Wf9zPS71D44XyExM3Sdi7pQise7imNLDBUUUvCpqUmqb6aNrkivKS",
  "key4": "2PnsyQ1QAwGwh26Nc3bVCHVB6MW6qX8g7rwYufiqo9M2WiHaPU5TwMLkqtg8NE6yrjPeJWNFZsY8FvKiBp1M4izG",
  "key5": "3VdQ8Hwhr7YHQNNXHKV4FynAjQaV7p8BgFSDpAFrjFRyXpTUCrEjnpAWcpFqLQMDECHTfLpk5hXfm2wfaBHJco8B",
  "key6": "R3qNcfKz9zGHFRjsDeSAjpySUPuB2R8rpsmNkBgge2BYARp853CxDgHC2oDy54ongq1bL1MxxbYdoxeRtMmggST",
  "key7": "5PJcBNSaQbJscMKi8P8Jg6PXc7XZb6KgqJbA1eg2YQE5FZG5CEiFRWnuiSiURKAPftnd7RuW9ncDaqfuSVQ9tuAw",
  "key8": "4SjgNGuz7SB5AasEiXbcAmHFgoryNSoT2PzNqFjgJDc3unPNjsYGQov3NBoWFte7BvNY3ME9qX2a8je9msvvpw3b",
  "key9": "559rzdxBLDYXEMW2NYmBnVV9xPtksT3KkqR7KjUxDAQqp2NGepZXSFzokhupAejnJNUhWJEMutvi29qR5P4xaVnW",
  "key10": "MYEiReqjDo1wBtDpb9UC2giQrV15c2ZtxD3romrVG6Y22PwqUgoYZZaVDgvreRcDQEZYvoCJHcPKDDtxfD8mdw8",
  "key11": "43FdUABvsYJJwNR3iKEW7tuA9vyd1YLmuZ9T5fh9qLTYZeL6vtLArQD3Fhjemg4aZJ3iaa5ebtnzYHNQCJYEJdxC",
  "key12": "3tnuJHkhrK4PXV23Bx93kMC6XcLDfN4RMrSQRkssVn9WLB7ufYJA3sfe23fgVan6uDUsP7DunSSrdPoMPYCyd9Bb",
  "key13": "5WgNmo7TY7ubTsfGR9nS2QXL1UpemEGBdt474zPmdwFykjCotwvrSBK8VGCoxv1mxPAedW68rueawtM8WSdnPFnH",
  "key14": "5ThPrNpixBb4o9w3ZQ1MytJJK3mxAqPWvniQXrLirA2oFEbVEvkvRKbNSk8DBVSHDKcvcizmg4ZNzCD33Z3Scryo",
  "key15": "267gfCTLmQQXBm8ArUZ8jgSPf4cDpmAXXYrcoHsDTxZYknCXvzkEfuibcNsTjUoLUfpKns4Smwh7PJXZYFYYbNiC",
  "key16": "4hb5GzMZbGtBJhEKCy5Qe77XWJaoFLnyAp6r48N41i1vXF4kFcJBRQtZg8FWoujaUg3gN5aPMkGL67r8Z6EJDxyt",
  "key17": "41TVAi3ge4cgDKcuWb1VhU58U42FeZX7WguWo7VHCF2fL9j9jZSFngbUJ9XP5i1EZngMcndwJyZZvft1ntftgrwa",
  "key18": "4GVf39kQFNLDbxkRrngV4uE412FnBcGvyoxPnvNG3mT7r9n8kn3bB6Jap2ekVxKnxjsHCShukyFMbEyk47QZ73w4",
  "key19": "WQVew74WBg2WwfYiqep487w6Sosx31JoMydqcNsg9JKpipxpLeLgHznXG77zL4XeSXZrZcKneMbY2AQmH2DvNEL",
  "key20": "MgetavbLYN5HDUbmSDGPV9VR2wnnA5p88rbd6Y61AoSXqGLLRovEzjSW169qzY564pmJAi1ZEjwuy4eKPcrJWWU",
  "key21": "2SeQt5Fa74UPhcTH7thWuX4GA24krMpopmeQEz4RumU79nLZFinhWcaDrVAjLmhXJzzKg4eTEasWYeoDE7SL7eMe",
  "key22": "5AfJXhzaVvSofKSZWVpNrsRyQFfL9XZpYpjBtE1ztBprpi5EpSHc83VChsBuaSWPZBKqN3X2zWS52eHhUxHUNuEa",
  "key23": "5eVQciTsRbxMZZxffGTA4yf1k5zGribdBcUm5WHAFcJZFL9tkGUK9DcBJcqLzyrxPm9earx2W9Jn84dZK1p4JLrS",
  "key24": "2XXw9hvDXnJ4Wi6NahaspdnachqMGnUW4vABQy6aJpkB1e1UJukvw6TocBtRqP7yUGVbtHNVA3XqcpdPT9mBE1XR",
  "key25": "5iNEhVM7xhYN5EijZhHXoZxdzZ7FvP6iWHvvVvvyMU66psTn949uah4cVeesDtcx8SVvnFKjGGxxKVrA318cZLRn",
  "key26": "2uSt166Yc6rh699zKMjHgEU5y3D1H2d3JzSR6qvWi7YacwXSnnorCQSWuyeaKapfJyWgSDx6aJ4Le3qgtiUeRmKP",
  "key27": "2ALa6CV1dN93Gdcj7g2p2Egc4UKjWMFf9AHRBNPFS2LnQ21nfkNFeHx6ugJvWtoLgKEw3foLVUQjHSkP9m3W4cvq",
  "key28": "Uq2gM1rT2m4a1RenmGfzPoZ8h4hzXZUqXNUJtovjafiFuFeiBBnGucEfoVbHKSdciYtPeVJZcbfotqnC39dtLSo",
  "key29": "2j5yR5mb9uKjyUrvFJpKvKDGtqBDHLs3ugVycm1ktXszozpr2PSHFXB1aL1BzEjFMa2vgrsyGtnEagDNWNHzdh4q"
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
