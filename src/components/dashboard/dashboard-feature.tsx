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
    "kbC8E8uPLeVQD8tBzm5yYck2ow7x59w7fMPLgJ9vidC4zdtcuWhhmtPFJkVUgX4tuSvkHrHjhK2VpjndXy9FdHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQYSHS5AhL5RxDjXwPSXgR61X2VswudPRU6r5GMz7nujarencAjWmWf3bMLH2qAXw8pMQQ2JhsCtzCV3k8U5yU1",
  "key1": "8TpVNV5RNMHp5LCvA4e8moppFDtR2oTJ8NxQ2DY59YuF7Wi51FKuUAec5uFBNw4draX37wFXTAFBiVg2rnMzMVS",
  "key2": "5wNTUUyMEiwiVTBAa2Lc7x15hZr6oB3AJkR7PHntVr4fNGdPgjzRCFEeSLsDus9xsYb8rnPGunBLy3ZXhkS7rsAG",
  "key3": "2aXzzN2ZNzMrqAHCmdzhGsdt1pwW6Ap8QaTqdqGW5B8FE5Li4cKnjk5GirZYC5uSPPpPQk85DocC72m39eU9pLqb",
  "key4": "2riRKUCVFnacGSitHgTj39vKqPHy6rrjacDgVwwD4cUKjmfXFUvMnUveFoFMh1pZG2PeLG1PYS6RDEf665iXwWnN",
  "key5": "2eizxHJjaUGc2hVjyWuzZAGF3k7xyiiNW5cDYyf3DxrHRzwaNgjSqN2GvzEXf8jAh3RB5qJFXKG9QDykvkftD2G9",
  "key6": "4WwKJmpAihJjsmKkdjathuWV9CcPBwQzrDKZeh7wk5wZ3WnE9RzN86m1uQc1Uoqj4DZAPDr2e3UiwzmCXJKoCanH",
  "key7": "2sGqxqh311qLdSfUgFW1y1fPYb2pqvE26xx8pNiuR3pyniWDzfXzh57LNd9h8y26eS7pbvw1HSVsFyLxgGezxat6",
  "key8": "3UEU2KPDmgPJBU9c3Sudgsekdrm2HuDKq5dUytSfzWNbxxagnoWygxHQ99DPrtjoi38jn1RBn51bLpNpFemoWKzc",
  "key9": "4wiGn8SJL8PdvwrJNhWUBuEkcS3AkscRhDXqhABUHS9LfHGiWkQ9t8Dbc4s9wRSCCufy4nTLb4KNc49XPoFysR1i",
  "key10": "p5wFckArP4qUm95onGSX51wKFgQ849aoCSEXwEzFMYJcswFuVigWgrAUEgCxzbH11QrNpmkV5WPCstaF3Gi3VfY",
  "key11": "VECFi5YHgE6cDQJWruKm9J5TDDZwVwpvgzTHcrnLzKenfvxeSQwmPvaTqVMfy2pKPC3vRSbeJti4Le2rGGHER4B",
  "key12": "4HddGeNJdBXUDszcvn62qkwtPGVPpC4FHvu5yL2z6TWxNxakq4TwPKoSY9WftjVYHorkXWcLA7N7hmDQU2PVDNLu",
  "key13": "5mUkYD69oBXJ9okQ4ZvesJ3BjRXiKgfVFNynHYPTUn2bu33BPyqFLzckzRPKKU7R8nRPo8wPGqpHEELfuBt2PAgp",
  "key14": "4sLkv6baiJso4naEBQ6i3HshhXbQrp4VQd7jfK8SgrN5qA3VKqBbjpsVonzTfi3cUALUpRaqdZ43mAHVhyWxzZ4Q",
  "key15": "41uUrAkwvtSEFMdHGeqSGWDHn5q5hXpr5yFwV9ECZ7eZkJSxpAk9RRPJ86bEvYHG4YBzMEc61co73SqhW6XHZowv",
  "key16": "3DT7opN7DGk34t7GynhS9NQPHNqHn4UFiQnGLGbkADHFLbZfRj15zSm2QJ1wYAzz5joWrEFbVFuLmmkLGUDEfvTB",
  "key17": "5Vuw98zB9TYTaEPuPjN1q8wLfxdhPj7Zju2sSLXZWrphNrqjDvebhdQWHipLpVqYLoAD6ThRhdFvRrFgdw93atLH",
  "key18": "vjwttM6DbsnxeABUEnGcZfQCWpdSewhFHrR3LvZDwS8wKN6CtW8qzw59HdfnGined5eZNQEqcHDfiQ3d2AfTqcn",
  "key19": "5He7cURoBUr2ZJQTrEU9jDJD5FHhF8WVUAh4Zti8uCE8e8E7WyFyTBBRcLCJK7s1RhqbrzfgMepMHgc4UeRZ6spL",
  "key20": "66shJuThmF25p56wBv9L2XYjp4adaTGEUdr7hWPzi2ryFPGFEt4MZxdkyYP65kJTN74JxWw7Fv4qXsHwMbbhVwFX",
  "key21": "4vN9MiECat4ZwcRY5SDHjN1vz9rP5nhXZ8GY8bg7iHg57g6Xdp2VthVuJg5g34Xb8Zbnz57Te21zoQRo2hctRPka",
  "key22": "5V3scwJryJ93s1zHZzt7L9t3CM5P3bGJnvRexQGcfza3XsxucTve6k3xCBtgsmeVXiAiKkrpXZkbdRYeuVQQyJbU",
  "key23": "5Aci4o8Btn9gVTNZgHTz5T2kRs7ANf9Ky4YkCHSGtYHNFmGX6JXhHQ8mPv4F3A29m3CxVPsSvyqUjRm4rtMAzveq",
  "key24": "MFKfm8CcpzDfU2x1EHDx22FbDPiprM3eZepJ8Bv1YdXWEnEA44DvMcrPkLVqTmYxGBQtdJ3nRye2rvpXHNbwcbj",
  "key25": "2VGQ517gpKEbBEr8LKBGUkQb4dHfoeNTALUFzvAR4G3ZU547ReDtuw9wcBvh48pKfDPoyLFrTDGk6CBRqBV5Sgkw",
  "key26": "3UPnGRVUauiXBPrHtoXtKVrfmTQDTDxEyK8z6JqxL4C7z9w2TWv6TKXTSUmGR11HfQWpNwGK4C7p6gQxMmZcTbDs",
  "key27": "3d1hM9XBWHu8DWHHQWFF2cT8ZkF9g5n54LVxFzYz5zu5gSa3uQt8EDezhRoUxko6c4TZyGhBcLccYuA9CdhXJ3fN",
  "key28": "56wDW6SNzAnumJqHksSUGD43N9WQ68WHoGrY8VRbEYjiUuPr8tyJq8DpBE25QXertoFeW9vC4JjSEpNCu6kG4Pfa",
  "key29": "foPGeL2ByM5HafgMaUyu4FvUCzdcSfD1yCrdvthjhqqFBk8R8e9DqxkaVsLmixMrCjPkT711bYs5rko1e1jWctX"
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
