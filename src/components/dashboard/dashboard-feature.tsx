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
    "Sr7tLs3TTXhNH5JXnGBXTGAPY29AHYhJwuiJXXouVEUTn1833mTF317sUL1v89VA9xLk5bcjBSs3NKEjFdRvrBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22pY5b5mzb4iFWXmQk3dTjstAvRNtJAYP469RYFFAKmGKF4SaePU5CoesvtFZieRME3k3TD9scefZNS7n1t4pKRs",
  "key1": "NkMwkAe1BWXmurYEkfiXKZJwexaH9caQCg2dsWyecUfm1XVqne2r7pghr679SEeZ6538kqv1XPbytras8ggAfFr",
  "key2": "3nojAoWiEJSDiuxApLX5HPGA8KQc9qEz8fSkDSR5z8AnJoR98ve236uotgRZGYt6rr82fgPx3BhYjoHR84ka3Vgf",
  "key3": "4puQ4dnCSzqDD4nsL4wDMybpHDKGCiDXq1DtFKRPj53e3Y4gDbK3V5CSedGDZ2qnKPP36uEgbiFHHX4MHEcjJQ8Y",
  "key4": "utw5XUw7eELo6FP4XE5JZbSqcKw4ipBmwvmUP3nWiyCz9CCLZSQuG342re8SXSvBtRFc757y6QT6FxMhCo9Wcdj",
  "key5": "CS8YCGFm9bsuAKL3hGLPDM1zewY8gu6EYLYcatsHj91mvgc2NHcCY5vohz3SUVFt2kHvTckK5ziT9AQ5ey8vemW",
  "key6": "2tirDfP553i3asVui3fkUwNyLzEfMXpv4oSyDZdhkVnJRCJCrDHu13UaMTZLYLhf9dyzVccZpnqWQwXbYEQXsonN",
  "key7": "5XE6yYMntwBHBXfDtTEErxo2Ji9W4chJU2WsgF9GwTx5NswqY7HAUSngskWuYTfK2CedSzmr1KyckgJ4qLimznQg",
  "key8": "3gTB9WH6U51ntszq2ChJYDCdbdHf5TZ2AvH1TBYSUXv8fWRw3zot41rTz4HuqwKmTLfgXjQrdbUyohgAa8fAiaJr",
  "key9": "4e9NCFceDVoAq4wJCAo9FznxFJ78TqrcWUG4BmHFxVv31J44KL56PfTyy3HJgaE2FYPsGaoNnKgPnWExpdVvc9cp",
  "key10": "5aThguGqL5PWpEAt26uJYPkJNCbDpF5YCUPTp7Dh57ueowhq5NFvnV1siaZ8DJXCe5isVGQKHthWLcDnaQvj7tc9",
  "key11": "3GhXq7YNtZv9a43adN26c9DAKqkC6zTvAHMQVuj6VKwFsAh6JJXHaYACCaTUEBUHm7MjCe235dfShNm9eNyWBghT",
  "key12": "2E9c5y7StmKEK2oF5QUQ8c5BqVHZFakgM5DqzmUjwfS1ZkTBtYpsYM1gb3HaNt1vitZicJvi5uo5BwV4dzsmfFtw",
  "key13": "3wuzzKpsMLDgHCXjS7Q6WUCXVj2zdFhC2sDxUeVbTJ29aUQnCx7HyQYnfooFF63TofWs8QYXZfbtz11AeFyCmhVk",
  "key14": "MiUVXgLyPNRcmS1rDP9eJEwRRQgyXMg2wqzA9YoL8uR3dMEKWAWbfcmUuYsbmevFq2r7hw9LSYUFNd4aQNEEkKx",
  "key15": "65Nz1YnwkpRfV1wk2U96K9Wc5KquQeFRMv3Akw8vxBqyWzV7Kdro1HCsgmMunmPsxA2D3uXQCfzFD7AYe8Nvr18d",
  "key16": "5pXE4pXHhcNtjr5ySPuTJTnTN2EgSGeVVHG5wV845Q41uA5fJ6zPtxdDLdrwh4BenTSQHMsZSkFmcnot3VfJYpLz",
  "key17": "3qmubUqH5tvHSjHJjT2wYQkh7ZVBotzBXY5mvStjeLyz9QXra5LYY5sHRoCGEp2YU4ZMKsauJfSDd44qYdPqF5Nf",
  "key18": "3PC9vDvvW6snTRtBDBcz13HVCxoQLevYRKKNVXFm8fdFhuM1FeQjDPSYd2RxB9CQpx2rRG9GL1sezzid8iVodYoJ",
  "key19": "5N3ByhhG9ynRfd1zkZA2tdvpKai1oQtvdUBTxuu8NJsSrMFxSFmSFfTxdP8bX1aRWpxXZ1LKdk7NLkbPjKgyTsQR",
  "key20": "4WJwviszScFj1LvVLNg2k4MNT3uPvkQjqaddZd6foyd22sjqHMGJMN2j5TyC2t1TU4gWzxiwjhLq7oWWfCzUfpV1",
  "key21": "VuwW4mfU4umxLmJGgSNnArjZ9FKjpKaW6qgbVwbzQPG3khQcXKQqJ6gyRK2ui4A8rvp3ghTiS3bPew4bepDktwT",
  "key22": "MpCpCyhpta4asQjBrXt4BN1qpkwwjZ8k7qe9sYQRgfMX3FCgdf1BRtcNCtDX5jmpNPY7CHADfiTvnRaPYJCj8ca",
  "key23": "4P2SHRwPjPqUNKyPUMsy5s8tuEgAAUwuAchB8h98Fgb4M5gSjxsqzzicHw59AuEDzcaSXctxyrdnALyMN9Qof4TK",
  "key24": "3tt8MTf9q9pAqym5Ebc9MvvxjzwEXiq9Qyzp81gVSd5mFJGtMtFErAqyL3cXmpcPDc39QywGAJZ3o9ETA7ubLD4v",
  "key25": "54UgNJSkY6RCxzVoxDbhF1QxtZiVM2hovMizfDa28RfEy7U877BMbchtGH4iz9aDW19Ff9gs9bDX4YxCiZMkvUH4",
  "key26": "5fMWxikhxpRFZeiCsMvt4yhZbG9Dbpc8erJGvC2S4cndTD5ME51fwTbYarBkpPup29AjrPE1rwunTXkKDeDpHu8B",
  "key27": "2B3qADJm3KyQgVQJNGvyPzPurbxCDWrvXKkLxbHMvKur6w9iQjQtgvvWhaVve3HPBJ8hFu1NFNSQUfs51jxVdadH",
  "key28": "5qWCEkaCmGKRLUuamYqqFsyX1Jn2yXEk5P1eP36GU37UivbsH1nNi5gjnKs5T5ewi3mybNMhGMv8Me9cNXqK3Ddw",
  "key29": "5ELRagvsN72kvRMeLhWFjxUw9MPvS1rYtKN414ifNnfuoaWmr32BvVc3j7Z53bqfZ4KitJJnxHr7kwoL4cab3R1o",
  "key30": "3izxHgQCoKP66Syyt8FZFDyhrvHJcHb7geDbzk99wBBpDYsKJ3JNKHT3zNBkJrt4K31gM2wTvmNBqtX1US5Qr2oY",
  "key31": "5iv4z387crMR4Y9wEWCLjuVCwKpUMDm49RpMkzUZshmfs3EvBhU7CWsUpbww36fQnUhicwj6FrPwhkbnQHZsPUF1",
  "key32": "5HUtNocCPLDwKFtb5qWGWbwja1wPzBmTR4YDbhBzF3xKR57vGiANZWE8Fog95PGHKoVxwwrDXSU8FeJEQvXerAiG",
  "key33": "2xj2hSB6QqteSAXsm16fYbE5XRt6bk2xVacJ8NF1BGm8h46GFjAjBioHc97mfpjUnJRRin3mNy7J3pfGBmuK6NJz",
  "key34": "4Bmq5NFxXoE2x7JwPum5c4ZJXEMo11E2FuXVxf5Rb8zb4KJYmHVxQJP5CLyU4CDAgqcanGRGkx3fV86ogKn55SV4",
  "key35": "2yGg1LnGtHLW9HAGeD9jZHiix2XqQsPmfG5dRo5oCapC6qtmgdHVhPfMyUZPieQK8az8YTW7Seaux6iCEMFEi4n8",
  "key36": "2WSEgEhLB32MWqZJvWbaKNdEJyxzZWc1ZdMnzub4iNY3AffNGnmxykKRGkVK1n2WsfQK34v9XKUEj4YWsPmDoPAp",
  "key37": "4TfNhtT4AyKXxaEvCRNQ58QQ4RPAi1XjeHUfuA88W2bCZQPQ7xS2bLgqghKVUJjdr2j1XCpa763Uq1tzfdnoZmd8",
  "key38": "pKzi4HvC5sCXMyRphQoYKBjQE8ZBqrgWqxWv5Q27XM2CcgB7n5q3iJNEURQ1tWhcCtgCCfnJxhJaUfgexEj2FZv"
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
