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
    "4K6m9fp71sRcufqqUCRfjxDi5rBQuoWckQAvLPuJ5NDEZq9aYxHcRh7iosHcSA4UCt79Bzi74LoeDbZRA9DwDA39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNg8qRKPZf1opaNCHetuhtpZ6R99fmVkfXivfu6xe3jpdMfHg9F5KW2eqFiu4GsjEdQVxpqhzHryCEicQchBF7W",
  "key1": "4kiPt7PY27CAhzwoJdqTpxYEYs4pPSA5KN3jXR864bnBkKq5SeB5C46r6exGiapxxouY86z4L7Lc5drXCXemHnbZ",
  "key2": "5SUBKbcJ8u9Nv5KULaoXSyQphhV1PzT62b8TxfeLMqHSeEHpyqN6Pvcnj6ZYSM8XoWGuL91Bz5mnMDb7B49DhgXS",
  "key3": "HFrV2Ahip2xRJNG77HYGnrSmTmJmmiXZfXPxHGYTjFx8hXZtG95nux9YFP6Ms6TMYWzcHjVusZrVQ5vfus2g1JH",
  "key4": "2ZWrRemBSTZ39cpWsYnCrGWk9xUaLBwF33eyuHXeWRjo53EQcG9GgbMKsKVySEPmmyeCSikgqXq15FvpheWkXLdc",
  "key5": "2QGqdNkEofJRY3NGJPUtQrhwZnfwjsMfGxgVPj7Q3LVQLiswsBvhZXgASSVGTbQ2tA3Wvpwy3sVnH6EE6rrqMTaU",
  "key6": "5kg61e2Sv9w4JKJqr8FWx4JA2mvcEtbmnFsYYFZmz1AWMD3dxbkb2XyoKTHqESMTvLPC5s9jcFVeWVHAturQ7qhX",
  "key7": "31t54qd3mmdZzTgFt79GkddePffVXFEu9AHksuqyLpfCh45Ss3pbGyh8fG5SJSXFQW4HZLq8TPDybCoBC1B8ShP6",
  "key8": "4y5HFYS2EUZhsuAEe8FXXMCUvi2xKjgz9semNrJh5EmRezkf3E5SWG6CL6aLi87iD62H1SyN2cJK45bx6tVa3M49",
  "key9": "5UerMJATBhER7NAciWLu9i93eFn4heBL4Xfod259kHBa8aYPqASoR5AvGYFzGaGZ5hdrVtRT8EY1YMyZdjqxm1x7",
  "key10": "NYNBxZRqSaydm5yMAD5m1DZGa86mzsK7ycBH3JzXrS6SM4X12ww9EDw4jDg9LQcc66Q8sj5b7fS6rEANXE35sqy",
  "key11": "5v3hu8RZWXHW3k2feaC9h69U8AcPPqbH1j6X5KPByM9U7fCgrkJ18zRutZJJXvDdhBsShjtS3S1tti3Q55prJcan",
  "key12": "21KkwhSf8QjPCLBMKxT7J2XFS6CYTUvGb8Lreir6uEHLP6p6ug59YbJWBXZitogzGoDGR1fBGVkHMjwtkaagp1qg",
  "key13": "5yeRVndDbYvsiuqyt56XRjJ6wxrbDt3wydnoR3YrA6uzkW1vJscGd2KqtZF63M2r7JxKxL6KAgcmHhJaqBuCA7fc",
  "key14": "U4T9QvLL5RbA1i1suerqoDEGxVWm3yehQNeNhKkn2k13YWpBQPbvJX3V5SavPHCzSjtUst6ZWnk1cLZq7TU2izr",
  "key15": "3erMxoTa1BKVCE9q7gFM38jtZ9TMkD41i5Hdm8JMncMQUVgzpkpgbjMKKQefxmqQa2CFAVngvbzFKnkkY8tYCqsy",
  "key16": "5zRWMaKVBkfinBwEu5ZSzETRjTeBCQ5CDjQmiUYX34KYvBCreiCNKExsvPMKgkfYPgoD93UQvA1LitFV4cBYkyP2",
  "key17": "2WgxRDnenyi7MZ19HoL6au8vthf1L9NojJ3Y4VjxM4QaafFog2LfRQLf26aGs4i6mZXcrnnFLjLxzFx4V6JLvfhX",
  "key18": "5pfLA8ogQbbEUvPRqBtp2G6zXocQJ47hdwD85CeLK9QZRaob77BDWFBfQiwWLqkWckNhg8UMpUrANyW5FsmYWjQj",
  "key19": "56Jvnj1EPAhQ9SmZT8CEkr9n6Brt4YUL5G2D8hvvneBRN4kEZuVugAJzUTTMpXrrmmjRjwg5qtkRBxeHF44vRPXv",
  "key20": "woQ3itPBoFSG9uN1kZ4MdQJrMASGJu8QaXKBr7kQcJDKwqonAQo44kBJcY2rVVBGBKCRGnSJtCpmpdnr19FPFpy",
  "key21": "4PB66YjQWKVJRRRsLZfzxZN3ULTumecFmxDLwcEYpuGR7ZjVEGa3bKA6tNrti4YUfFGRZxX3kRrGE7xBYUtSMY4z",
  "key22": "4wVUa6rWueiYpskafxd7NuTR5KWtQRCiXsaPcpb9NP7XM1iTwEt3AoLZfSHda9tiUDyyE9GX6ou93q489fCKrxre",
  "key23": "4YYBMCwmd7SxxnjjcbyBTTarhF64J5PYVTphjRYaofjuXN6VugwLdASUgrmcNPFFMBFFsEFJBzsXEXq1qz9nCqcn",
  "key24": "YWYGoXZUddgUepHb3nyzp2yV1KihU83g88L7oZcrCujr8MVFWuEBHtB2BEiviJFGKnKd39sGt7h63xmSKWxXPWB",
  "key25": "5zNZC2zAD3yhCnDdbvwJCBCdbAWL24jWjpD6DzViT56Xc4h9XsY78JRDHot3Y5oMvKZU13tU8WSiXu4gRmjQkMYN"
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
