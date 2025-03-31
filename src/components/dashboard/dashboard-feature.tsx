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
    "4AboWuiHxiiwbruuQvmttY4DEawCJrCuFUVFd1UUM4c8MYf5U6cMhMYmbfHj1e6cK19H482iP3imKm75fvfzgVxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCDDaKs6ekU8Z6weB7HDrLAp8cz9J6ho22xFS5mabjjtLpvC6483Y7yZMs2ibDFhPu4hF61vx2JhLxz8kGhWSXx",
  "key1": "5EumyRmdTA42SvAztcAJFqZVkU4fBDjDKAHCVbYUiXt35JDzgKBHmFbhJy6ZnF98onqG9qctxT11128zsH8WG8JZ",
  "key2": "MztnhTxpgijnrrPPE42VjG2ob4jQxfjAnBbxVnYFmMQjpcL4dA7BKmzEBPRtHNdyzshuLZTFqBxBvB4UZdjyEtt",
  "key3": "5cDneV75ZwJqnY1Ntm6x7gW5jxrShy8MXnBUsv1Eyp9mszKjBrMAHkyPpq1mG3hPtPujZGQ7qKUkneHQEFADHAAj",
  "key4": "mRAzKoasM4G8ef19XS9wCDzg9UdHsYX9Ti3tPQCWo2vJcZj1jwd32FSY4gDuGowjGCmswjpg97HeGqr7qZdm2Xc",
  "key5": "3GchmaMZ9ZmVo618MZstTbV1MJNRTAJexTaTAEVDyQ7P8v4SJ96yTi9uidEYz8fsvYsy4hbb2oL1cA1TE92dUGY6",
  "key6": "5hyjw5KEM3ZGg2fgUrGa7sv6omn8uf4oQcnGL2ANV18mcPxoTj4CpnoYCXP2wjzBjMS8xPUCCwA5G9eK8usGrTeH",
  "key7": "3KCGhgq37VN4GZTdaeamRJXDMM9BRM1Shrgkta3C694rh9WfniUrBHZr4g6yiFc5hmS93TFgUEX5N4zwCMhLC7vH",
  "key8": "yhqWQrxRBWe7eZnKhSrzPLFoA1vnR3K82ftKbrkpHNs3WK9sZRK7iyw9dTFW1dQ8e9NagFDtvJ9uyLkCY455fuC",
  "key9": "3D5QLzU3QcX2H16K6W7Wo1ZBWCNt72WigdBJPaTDe44vkAEYRtAXL3HKGvYXGTCwXDfBVpRVsRRPUJzXdWdemNra",
  "key10": "5UTaWuamaU4Jmu5WAU88n2cZycyCRQmPFTrGxYYMmwkk4jKzFxqc3T44Gj29gHHVSn583X1YiZjLomKf3xjAUY2Q",
  "key11": "5WQsnFFwJNCBESQnf76szgmojgX7U4g8EA7qarK9haKCzMjxx34Ys8cdR8g7f4srGUXrbj2wxNJvhJb7hqU2pcD",
  "key12": "4zZ8P1YbpLDGS2RgLNucGCrQXgQ48vMWuULZXtLHEjX9HGvJp45sLutXbM5A2partruXmQGoR7EnGmLHEvjfkYua",
  "key13": "43cKpuWNYk8cXgMqsahoGDErAWRDnDYAPnJvwWm8CweVKgHTsszcUVyW4knmWcNqy1iUgXenXED1VZeE4EiyhWNj",
  "key14": "4WFZW5QC34Pin31n9pBpZbx75BEtsPpqYMtr8WpvXUWqGYgv9nwWALxgBX1yDp5s6UYkPH5n8PvB9Kc798CHi9iT",
  "key15": "48TkAjTBWsoD9w3vtgpkKKVNAjeuVk91PFT7jEKuJAAbKu81ajQJ88TXbGUgzJQcy3v3avAvjQPAeAdB86RpS7S3",
  "key16": "22GhDJUjvXBZDXQVM3UuNuQJ1PpmH4ppaidJrwqCATw2H2mk4akktkgVDFQZ6SHZVA5xVNqfbsmKwwAMMeabAHLy",
  "key17": "34ug1abYEXrt9xqcs8vkfbVo13t9cMfD5JZ5KcrUCjAtFLbeLfHRKGFGYJzguBdfw9At9nbQtfXg9rTKK6p2UnH3",
  "key18": "4AsHYtzH5sUN9jAisHLRofgaG8DigNcWX8SY4AaN1KPJaahxm5gSWtMNsapGzGhZQVrn46VhbM9u26Pjj4BZbLUg",
  "key19": "4FD8eENUb9JAEPPjosJK6LaME4wmFL1uup3jvpBJR6u22aZ9TXGSVnf3Ke5Fig5DS2Y2aG53T19D3C1UyEczt6sF",
  "key20": "2ARwEpCXaFrfhWpRvNMV7FQXB2kCtcsYdDgh97n1v4AKkpfamKBqoUEYRqenFJgGCF6GHkGeZ7V6eTZg155iDBjs",
  "key21": "3zsQUL9nDTYb8CtSCHWjm3d6go3nVwH8bNJWQqq522qkzNmju93bvoGvEkJQRM1hLS4URbRQ9EUJxHsLCPQouwAs",
  "key22": "22t6SfdRwHNGJBcm5Z7S6Bb7H73zNTbbJppLWt7Pk3e6zik5x4c4pVwyuGpKqQ3iuZZrQEKMxm8HV37BruAGb1An",
  "key23": "5REaGpxx59ZvRUjU4DBknp7cA4xK5uSpsW2W6hWyBRBQw7qqFUG95Ybwy1xNwweSRrtRDN6iR8v393FWjgC8TbDG",
  "key24": "5Y3kPcBS7XpPiPTQJxeC1MUFXrUBJe4E6rRJHAXcfmDoLJKckrZRbFEQM8zYMDSqsnw3QD5KE5Np12hdmRPk2eX1",
  "key25": "5YXp6iBMYh9FqPQYX19ZunfjSYsNfAJbU1kqAYcr7scZEE3Rw1LXWWK4eJ4cTQXsdVUYM9wf5mt6RAepYJVtmDCW",
  "key26": "2s1Eczz9dgtgdXYJvMyK7fHqjhws9BTrNsE2Zaz2tW559oPR6agfwBb7A8qRihUnXZL9ZrqnBDEHPFFYHDKoBPce",
  "key27": "3ZiU3nooDU8uJu1fHJ5sokPBvtjSkFXQLG6f9xuW5sZS1xRhe4jHnLrvbBDdWbY4QMHXRQ4tGf1SBQBN7t9JA9bq",
  "key28": "59ms42EtuVk22ZtxwhmWtVxL1uj4LmDRNaJyoJoJHAaAve57tQJci3BUr9FSDWUSVHCR5Y4x288xYWCtnFVuvY2Q",
  "key29": "5yri3CrKZoc4gfbchR3oCm4K9SfbQg3jrf84KYVbJ29VZX1Y4ooDG7FxRnx2vQCAd596a6VUfm5EXb779xnVoPtt",
  "key30": "311VFQujLrNpfkUJSPtJbAo8peBf1dKeeTySkNxG5qeLhqnW1FggBJmTC3STkeKTjx6PqDqXHc7hKxNvMEvr7FpW",
  "key31": "3Lgz9v7bNiNCyo4BRmYR3n8uXGUUveHW1fp6bP4eKq8tFfFHn3Ktx7JrA6973Xec5WT6RptTSNpArFfcqesGENd7",
  "key32": "366RzfVRQnLFTbphJyw67ptEmTsHbbnrLTzqgBg9LP3qcoFh7Z5DLpbCUY5LbLxHWr7VgmzfWr6Nq7Q6FsrNpaAA",
  "key33": "mjVDqWVV5JocofayThQkKNForzXZUinmvGY3C2DcUqQGq4Re5gFqqseDeRKjtiC3omeGTwRvbbN16HtVpEvjhHs",
  "key34": "6kpMK8MmyRBef7eDq5NSZRtaqnZoKPxxPLwcbmdqgPqhSo4ANqfGNW1x3gDnrpSp4QHVjA7b1N4DktUwTCFf7yx",
  "key35": "voQLZGEUzGwDnGw3oqteA3fcinCL5K7F62YsCk1d1TqD9YsHC5ZTUvyvymX8LkRShgWoibnDRafYphvYH8p2GQG",
  "key36": "4qkejqwsHkCwngoEQCscdggQefp3169QrXip9w6RsMXxVdziHoaWK6m7gepGj2ZGFgW8ojW1BCdznZjGY15ZLmM5"
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
