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
    "5LAGwonwW7xi5eWAugyzwSAJYy543PRPr8mPsZqKide9XG4eqAiUvF3QWPUTb9kvUYeQaUi1gocYs1dXvmtwy3Rf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n9LHTYRXZ6DCQB1BWTrmXaTt16TgUxAwcTLHp3i5QP3WYju53Z2mXGELPsr3mZw8kQRp3bLZqeiBdaxu2nFRnnq",
  "key1": "5xjN6DeokJXT7En6nEFVSAinrmwqb1N3dANxTeZ1YUYPcWciGzxaDp6LqJ6j6XDfDiAwZvFfLh8oGYdGxNvurEAM",
  "key2": "4oW3rVbsff8BDTF897SpEf816LFEtzB6t1RkHCnU7NajZoBuU5Etni9unjSFPbJAMbSZfSU1FN6CuNKzuzPi4cLc",
  "key3": "2bq1CwDngT4DSaWSBW5FMDDRs4pnwQHviKWQ2Md7748NownHcRgDQRwtdMFbV8qDnnM2hSZZ5rHkybRooaTS9yve",
  "key4": "ytwJ7P4hy9Nuzbf1TdUniZNfcgfmcEr9zhGzUTj8iAaadAsE1o9khoetSLNrvp3gPr7FvH7pwQvPkoKpwH6PmpN",
  "key5": "4Tjq3WERjZtX26n9oKwbGQcZRAoe7Vo9n1qX1EdM1zxpbUug1AjVPEaoE2u3cHqNWrLEEBaLF2GgC8sV2YA9LQYK",
  "key6": "2a57WwoVivqR8iqGUFzHndynDnAXWQgtvyF5PP3CPvCt8C9Axg2ry5WpshXzfFV2SU6Rquc7kt5jng71C4Gvb8me",
  "key7": "XJiVPgHnLbjRnDLnxk1TQoegTff6adR4awB2VnahaKEk2LhpmVHewcjQDebAKSfoAWHC6ZiRXbiVHFH1F1mbuma",
  "key8": "4s2vj6ycbuZ3WvCzkw7HnKD2qF93iSmZyu1UFDo4X1AE1TH3jQP7nFCAGJUBFwH2Bk796XPdGyHT7RtEWpxLSTww",
  "key9": "3twubr25MuDTg9TkVGubaL4mZzFX9hoaSfDM4mDVodTi5taAZUYoUdYjESpBypeUjTvn9StngyprgC9vZgY9RkKQ",
  "key10": "27qziYwkH2j6QVMt7c6sz4jqdWn5suoKHUNtU8pLTcWJz8BkyEvb4iy2sAR44dGtCa1jCgyDN37YSF9M1TepSN1Z",
  "key11": "3HGcuBuJYm8zcn3YiEDY4iFcNeuMNbAUFZTsQdx13u3eh5dsM4hXYawuzfmeWay6t5BGZ3zfKbqdcpa8CHS2Gcan",
  "key12": "3gMhpJ8CqEA8wgjV6W3Zk1H5vxQX92ydM6WN6v5LppuQbemRLQ56ZBeApVr6RDGR819naaVnMKuS9UNxKH7twGB3",
  "key13": "4tdQVScPzenF8YnMWu1AKxtZdRoVQ4ftsRACL64LHTzRiepXWqYd5vpFbUyHx7vfiZK7RGqnG7cS3v2HjRmc5V7L",
  "key14": "5ZXhe1iPcXhoqSzG2PxDuENVFKaG5ksLEp5MnxXkonHEd2CMK9y2gt9NoN7fxgK6CkUiijhzeBGpGhvRfLeK4htf",
  "key15": "MetSDVP8fB6ALnLuwY6DG1ZjsxmNxHnfXDZqZ7bJHo6u2GbDGCVDv3dyJkkVG7PiBJ65oy17SgdZT1B4NWPCFzG",
  "key16": "5YNh9g6k9DE6ysJ62gygYHt7h9h1uSGwxfAhasntgrQFiWb6arTK4SATVryNuDXZuGfiei47voYUqSjEqruQM3nd",
  "key17": "VRpUhNqCSyMRaFaettipDC3kLMVZGyiVuBaSkt25r8XVDTwPhmBi2NgZuCyyeqmzkYVFi4GjsT5jKLTEkqNsyyU",
  "key18": "4ehGfpqpxP19LFEpA1ESVTSrFSW11AE5wQHzhNgGQriZUbEhKR9tjx5ngoyU9YATxn13yd3YMpUsGTm8czgnQCVC",
  "key19": "MgJZAxQSFSpiwfj5hbyEaUBW3V6KqahZ5ziDr9paWBfG2x7eSLCqrQRrxub5XxuxuPS3TkLcKKuQktvbsNrQa2V",
  "key20": "LRFHDiqtQw6nJ6b9PEiS1DPLThxMzu8fwPpk6iQiNCpU9HEpepwb84VxZqrUnJXP2fktZ2VBmXnsLSq5mBfYU4u",
  "key21": "5iiwaQEs55gC6a5ZNW8ToD7zaDdwwW7vvg2U3YnXGVSNxSdazKb46mVzji29uyE2gMPVbnWHP4YcHVdfk2xG1uPT",
  "key22": "2u8kKK9pk1vqPkH7YnURSUY46hb2pNVSyigR6WxhrjA3D4JMaXht5FyqBmmgLTKvcvpTRLHmxLjNXmxbYXjtiZZh",
  "key23": "Xq346tzjGcjHkjEyByiXTPKxMwHeFLcAGVbioNJkBis8BRYgvQnBJEMPqTT7f5uHuebNSNsVtrXKFsiBpm5jqpB",
  "key24": "5VVX4shV8fsfe2kmscgH6988yPDK4pmEhhf9Lxd5QmrADNzThmnX6iNqEtVWv6G8cUNi7y5PE7S54YFrP5aPST4A",
  "key25": "5TfVKkj6Deh6mmxd3ejytHbBg9fn2uJACaufuwaoNxnMkhBQLi9iuBxscRGuZLY5zSaZBVp39mfcacjZ9DDCXrYp",
  "key26": "5MYh7sixQapkxHRhNNSkxUAJ7eFRU3sZZ9vzzwwosJwJXYtnLZUfvk3SqEGbsE2qceEjT7NgRzwv6zxnJfD2BPT3",
  "key27": "2WP9pLHMNEYWY625LHzbH44C7sgFQ3SRYs39oZBESzWU1yLmhyVWdzhz5CiusQEjVLNGJuU694fynW3LKSEEKefu",
  "key28": "2uPahvGfHT24uEk4884TR4Siyfgu5i6gdYgUfXZA6a8g1zmXDzJFx5jrBxCne8o7ckBgaPzLj3CJ9e8UrXZTxxmL"
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
