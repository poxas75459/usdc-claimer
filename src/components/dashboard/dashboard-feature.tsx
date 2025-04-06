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
    "61sTGihJXUMF2sFbfyMsfJgAaCTuP9daNwGbWT19Z1CMKiXU64p1pFzGmctUnV8zz86rTwKUqHJvczULt7PESgjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JejqnV9yevqHrFAx6gCdeu94GgfjC88HkDDmcGgGy9DX1msUUsjVu7oMCq4jcz1gUGJGf85nJNW515RLaJFAVxX",
  "key1": "2WBHGacLkJwjJzabN3kUNM5jwnr4h8MYpegZgX9GY9bDVgC2nroxK4dqsKHhD3bauR6HwkDUcNA2CTUejALrdFPw",
  "key2": "3RtdC6HitfNe6YcXHE2kvbnouqYXosEV1Wf1W2rZ4ioKzzyYiRFJ6sVCot5Pg6BMFFfdcTerPiMdfmgRmEd7TfpF",
  "key3": "3TweF2pTQbFnEtMGtAvtcAbUZmyYxZnpAQJ5zUsMhDHTHi3k5FftovwJSbwuWg5jA2cMAFQTEW5hyWF9R5Nwvu2u",
  "key4": "YpoCjhphbi99dhRxu4Xg3CJzC8zTDMMgh4uN9nAwchLCDFhZECJhFvSag1anKv3AQKFwXzH56sW1W3AQRAnKvjJ",
  "key5": "3c4qTTN1XsE51ehNmN5HSA7aZ2TVhMAsjVJLNXZ7fKCRAW1h7uJaeDmNxFDseVFi7kvkR1YibrTxHt3qfD9nG6Qf",
  "key6": "5HJrHGU5sbq6sV1rY9giUXHtFJpEMCrwWJAcsnpdouh1T4kpRt852r3LS2dG8dMfSK8iAkFkBbuh1QMMhtf3phNB",
  "key7": "5ugkFHUP5VD9NSUf673xUXryuT1jAKh9ne4LZZBsbkyBJCshNwVShFv7y7JYv7smD7daJnobapoW1Yh19tNVbLpj",
  "key8": "nFViY9Gw8wLFd4uzx8U2HNkRfDLEdnhBoUiT3aaXPteNzYwkTwcK7hdtXhYUNwYnP3c98jxfju5ucP2JSLvhZrX",
  "key9": "3AEp2CRhaZFJoauUzmTsfRDE4HqawpWNyZsMHjxsz72ZTfEqCCesA3Lz7JA9A4E2bUTwusiFSPot4R4VDxm7pyCh",
  "key10": "iVGJfJYJYjRhkAqXqjYGE3GCUFMQYk2geGf8z6fkzb38TupxbRYeCBeRfVFDTipqbQHTwxjeMi28xUpe1S3gNwr",
  "key11": "3u8REnadmDhN1THz1qrygfkx6FQHTYPbxHuF2H5psUvFJKXMcQFo9DTyFJ313SD6nf7TpS1zgY5sVzLgbLiQArPL",
  "key12": "4dMGNno7yMpksKHgaU6MYW1cULzwkyvBSwRpNZi6D7vZdsQ7UGFiaWZkQmuzGvbJAWwqeAJ9NBCtHGtPRUd17Dgs",
  "key13": "3nFUtuWiMH1pXH4KYwiSFN2mgDVRMto494RiT3JEh3Mo6wGgTQRpzeNu5QpdMKZpYeUap1pVaGSgALwbhg5EsEVr",
  "key14": "5dSQmLfwkT3gUiEqxTHbSNgT4ke42FkcsZw9DFYvtTkc9tCPf2uwUQUuwWhhaEbX4vQen2HTC8W2ANgwS4KuBnVA",
  "key15": "5LjEGQCiSAFjUnX4uubJsFLmsnQozGMMKqBdKHh1u7YVCLmJEwZfNT93uw4Bc7pRKN28NthDvg3mPGx9UVkPoRUF",
  "key16": "2rnmh8NsndyZF5kBTxtjPrTyyAWaNidsUKj9YzGLfPkCcLuLb9m4PCXCaWdXShLvrBRmoBtRhZfo2vrQ3RqJpVdC",
  "key17": "2K9ynj1rhi6GncENs6kVxBi4gK3rnAgcZjRTvnxS2kQxFwUuyt5M3VeqxxZyuEBXvaoy1rsZ3xxXf3vLQcJ2eDkW",
  "key18": "VpV3kwMByNNBpUBpoj7gCg82rSnFYaiacJpP1gn7grmudy8e3FLQdGWcx1tgxGK8U37HRwqJ3ptmbCXV6o53qay",
  "key19": "5NNaYeg4U24mL9uTQSTAqbW7xCrEnVHQrd5ApCnSUxr9aFsAvHf6iZnef5GmSKo4uPiYzQfHdjUwgpDDfwNRTdRZ",
  "key20": "5nc19xLigUHh8zP4SMVHpDdD9RktFnzzy7NcQMPqJRHV8819JAJgMj32BBwaQ3c3NGvSX7KSmbRvvzAAnb9myXbX",
  "key21": "47jamLtiryTKSdUCGJow56KiCKtGndJBYG3882PSxqFYRzepo6tLdDezj42Rsg12wb323oyqTmmdNkzKQtsYogbk",
  "key22": "67PATrVeAYx9c1LXAPpmcF4AmMHDWpuBa6r518wc6dmYVBarCwoA9dLxniJuQ8XkMCfydPrxwDZZ3ZwwqSPQcrvx",
  "key23": "58PECyzLN5LcKEerVD2vC7rjNuBg2zD39eg5BnkhXaLXMTFvHVpchkysYVDEXca8rNR2sjku3YihCe6uMH89sL43",
  "key24": "1Axzz2kCcSznhYuvDG5USwhX7LjJXH2MMtWCnDBVzvKNUR1yjNWC8R2thcmMgJ4zgbgHTRUQd4MKuMcWa2iVMzx",
  "key25": "3Hn2VRYVhcFzRbKhEs7bCjc9YR4FfnE9WmJFy6Kat8AYYzPQoscBLq9Rq99fWYf4DoUZE3t6DhLXedU5qWYQML57",
  "key26": "4wHp7RBenJcyf6GWhVCs6BAr8qu6L2v3SyBXvGCVmtxbKhvErcuoncG7Gq5hgSgBAnMiCiGBnhxiYxr3kzbkayBE",
  "key27": "4X17MskfV4YmdwASxhBbf92BKbKeGkjQhES7oet8Dr5uGnQSC3yPSJ7EMsbFoQxRou8P2QCBhhvsHtCN2jnDHZ4h"
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
