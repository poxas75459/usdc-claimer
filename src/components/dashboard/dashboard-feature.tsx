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
    "5MwqNBYi4EnHRxhnuQnHnUSc28CUFnBWjaRkuuYfhUBgg7n5K36rhRVPQyDQ3hoJhjmkDRVJ6PEADCtxYCBVLYij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rnWSC53snKWqkBFqQxdku2aq1PeG9wS2bfrbp1SdDb7PgCjSnC7RQ717TCrq9rpqezX5qjWwnEMJV6NYwC7mvjM",
  "key1": "dR4Ew1ePstLc1THoBwEVcgpXNzxWR778grtDM9r7iMbfoZccFXqC9suf4b36uPtHQtsxc3nhyGoGRjXRZza2GBm",
  "key2": "4EcLVFaokdN9ar68DtYZQCr1fqNqRx1Kw3sin2m6dwWpBkzPdAituqm8fhr8MCDCwHYJMrwNTmHsbVmgRDYhgjtH",
  "key3": "5CkVBS9USSTRjkpqE25YBffx3NkQtvcR3V9wXoYhr2HRy5tYrQBwojxw5nFPBpY392MMTy5QiNgaZmx1Xx4K9nYc",
  "key4": "4nBUPrEPhsngTsd6MMZZk6qCaXxX5R4daSXt59KeANYCFJHf5KayzGdYSPGMi5X21e1VujVBEHHBVHeqzPmjYkxd",
  "key5": "55e3BaqvCnfvb5JrX1B5BJKfkcHbqxf1A8aByr1gcsL9HqQgpKkt26MvWfRPHGGCBCdv3NZuQDXLmsvsqAqPxHN8",
  "key6": "3B6SPLSPScveLjKyRYUvf7hXr5GFowbbVu5A25jvxUFbKYkiXJC5iVszFvYpa4ExGyKKNRpgqYszYbMPSbToEMGE",
  "key7": "4N3C6VCL8iqR3BpkeSwkVtUS7YfuEwY3j1djzqyfzJrnbHAEZbcXTneXRmBdVAgjNUCMRpCyvTABi1TTLqBa9H2x",
  "key8": "crohVCFwqbG18nacRs9wTREo8juzNnjgc4nUhpojCJyy4TCqpwGeMMm6WRiGq185WvMYtbXf9cXicwq7SFT9QHb",
  "key9": "2wQJMB1V9xnqDPYpjfU1CtFbg4HgjsJ2iukmnWYD5pmgdoMuXdYaN1raKTQWa456Emsh47bLxBZQMBkZ4jV5M2fH",
  "key10": "2jA9YmsdiVAD6xxrrtg3zwmFBRosbJfaeKboiDCXYXk4x1BU2S9AJL8aJYt6g9P8sc5XkgmfSvQ8Q2JGB2D4VpYE",
  "key11": "2rtiv2mWgU4ym1FCgtEFy3NTsuRStPtPx3r7NRNzzdHb4K1s5kY9KLqy94yC8ytCNnEgxvq2W3Y6vZX5Gur8okyV",
  "key12": "5E3FPPLS81qk3b5zAWd2N2oGojzkgyU4jwHhxrL5XtF4qb7q7huF2x8ZZvC8cHQ36SVEvL3E6NA8tQcNywFgC5R6",
  "key13": "41QoeggD6wwFLkbV4cYjdK1JkPcFb1Mvd8LAh8npjWMPEXifDbRM4MtB6EBVqFMtk3XWKVxb37o9wvMp7tYkEog1",
  "key14": "2kdSTCscrCMH41E3ELvysZwn6BonCCaVLbmow6GfBJYScEu6QLMysDchLbJW5gun8twetY1zcpv6GETbwnUskhEY",
  "key15": "23yjxpUqczJaMu1YxGt3ZHvaN7DKxyHBYFXNA8vTVv1xzZw3aBKYzjkAV5Nn8sdoipmMp9KwUxNE4fWP71kytQiT",
  "key16": "4SMhe5JariMiQU6BtDbVgRzQPszPAyaDvKUR19KaDqpthfyZKQeduA47cTeHrdbRsq8ZPb7GtXjMuPqF1cWws1Zr",
  "key17": "48nVDMuyEiK8AZwgh2CQqgzfBK6dtE1oCDVzEKZmYv5wn8F1AX8wguZCyHDtqeeXmNPbv6S6u5NvBvKY8Ei58u6b",
  "key18": "2LwQwVgcASfzonb61aiTqNBnBCQBznNUDzKhtkUn7wPMAUvUsvH59V9gX8HE3HzhfXMkSMhm5gArNgA9b8kgrH82",
  "key19": "3DbUxdZ1HWH5LNHrtJdboRM5VWDVxqwgAi8Up1ShqY3SFnNZpcgVAYv3rGaL4JdefSasVnne5BRGonkjt9CPAuMi",
  "key20": "3KdtGZ4byrun8Vg7Uy88MeM8pcSXFzFr4oVRuxV8bXLcJQt3Zai3SrvM6qvF4BAxCHBDxkH7u4cP2jvg5wV61ABQ",
  "key21": "2GvJgtqVkK1Whd36dghkmnDd6cRmCPqgZjrWEYczw31CiBNsBo9fZPhBG1FuNxhc8ktCbH5AsjHVV1CWYq3pPcVk",
  "key22": "21Fm6fijou7uyVpDQr5DiSkDDEKaeyjZ5hNYSrFKuaMiu27pXtJjjHbpDMjoyuWHLUwUXsT9pz2e7gWSBM5DP543",
  "key23": "2VwKTDdrfCSoqdKURrAm7BzcMFA2Up1sc3kSzxVzxME8YdhoFWuL72v8VJvBfgndHWuvPjDErsTEwgxgV1QPSQ4e",
  "key24": "7PyUY9Vz49J84JTdML9pSSq91CvWH8AezLi1cZS3PEFzfqUSWkJHy73YpXw2gGWwHaBBRoTQcBLXWrbBfJywtDU",
  "key25": "3hGWQTU8EiPycCpwL3xQv1s2TbpSPyDVSFoTt2KKw9BmoZESSJ5vUPoSgQsTtz7Duu23Mtiwg63QDAfoK6SFGJ2C",
  "key26": "A3JcrbEm25384tK17xT21WEbGBA6uvAbLrQpEoMBU3HQ1GgYKETkY7ot7VGshxv6NYmXJeUhixNC9asb4LBFCYh",
  "key27": "2o3FgsLtGm2xdcEibE7kZxxqkUdMpXFv1BcjGgcjWiQhsSDgFsim3v4aLy5HUFms3kHSU3x6pmqaaCxCAVtv4NKS",
  "key28": "5RFuUYZo3raV2Joko5yqXbJK37N7oWDcEdmqPHMNvtiDrwqTc3iEV8m7wDoV5xDfarFwY2XnMWey1gxzKjWcqxxE",
  "key29": "3aNiSS12KqPjXx2Jjh83Bf8Dn5RLWMrVTDa3cq5z3py7q4X2FpPquP6bU3i2H4kRq35fLWCHXmBAXTmMLQewtSer",
  "key30": "5mMhNSzRzYTd4uBh1AYX1FuViN7YGi6LwKnqYrWLYePV2hFXiQUEewvRPznGAsvMibTRmHZBnX91jfFG6HCPU1X8",
  "key31": "1QXFeBR8wt6gapvGNBoNK9FGirsPLtdLiW7LdkxfHQDsUre9ep4GTB5T5hSjxir7yWpWxb4UfACbwpnWpjJYcUE",
  "key32": "5QRBWHSrhgpAiDWNHrbALnjFbxcFYE9fGEfTH1vbXiWN8pw8NACGoDhr5z8sRggbbfX5SrHrYFFEhn7q8qW6svPT"
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
