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
    "37w4KiTJaEQTdEYL1p1WGNMzZY9Ltiu7SFUbiAHwzww3xL4PUvBsMXuTXbdCfaofozu8U6ZDPyrAwy4Y1uwnTG36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3voYZkUouTdKAMPXQpUvFQeh25hr8BvbGYU8yyNtPQLeVxZ2DspLW5sMC5T3usEtzHsKwYXvKtwZjdupA669sCmJ",
  "key1": "38onNnPsbVuJw3g9jcBMqsVk4JvHhKSXqQKKc5ESaysLbAQguAM8YHLhduLrK2aRsYGDKUVeoyDtks8UHZ9usiFa",
  "key2": "4qBF8iZoEEruuCivT4BXNhHKKpn7mrb3TosqJm4MPoXZpbVVG3PKJAZ3MgTaZJhiRJzgeMNJu8fayuJGqtsGQ5mM",
  "key3": "49X5xP48hmCsRQvycUb5R6BfLmkickYdrR1phfDzHpVZWapb8ndVygUfgZURQoecpG3WAPxWDfK2GqPwVfhWVE2d",
  "key4": "oCFf5no3XUpMEQ9HuaTXgdM4WGTv1UW8tEuw4SPvxdkHUGpLsbeoNNgmB2VHk3XvHymCWUypcmxE8ozgvksG8Bz",
  "key5": "3YLB1RzUNmoQuNGPUkMMGe9bRQnmtdK8mvGBU2y2KQ85gRbF1e8qdrUDyPD39nFM3b8P2hCUJSvPt9yBDQ337pD9",
  "key6": "5cz6qFc2xqg4YXsoUuU6Fx9KmdLMmPdMqK33BEpUQoFXmqKbFtg11MdRmkkdDtjH7wb3rZgksmKNDpyraok4WuJD",
  "key7": "4EfyGHfN4uifUnmuA79dxYQLeRpG93J7mpvgY4U7KhxEzhMTSbr2NG7pqJhvwW7hZh1JnoaCu1sVmc2QDAnX3Luk",
  "key8": "5629YVXhUCSVx2yLbThLSZSZzDHrEkJ6SFYsHsLb1qDL2HWndcotfMAaDNo2c1ZSej3orx2U5s7HHafuWExyyRHK",
  "key9": "3rKTB4E9wXX3vN2xeKf7Mt52gbkUvjfwBUa9V3qyF9bSHVpEimb5SZwUDb3Yy8UmTyfQLcTfcARG71diDgba3zH6",
  "key10": "EopgYGuRYVK77sGg2BXego1mowSsR1HQWrrTQr1ydtQg8aW8fhFEgMKJ8x4APcETxNcLcbWyARd6eRnt2LereNp",
  "key11": "4KQXHsnbM6pxKoT2cwaTGDGpJuAy9YbWAsWCcmmUPsVoDiF9nM2RBx26kkEDs9tQCpqJzgGbBW6yEWA7vpDCCAqj",
  "key12": "4MdPz9WVcBgXtUUaFMTSZz13yhgwHyJipaAKQJhHgWPEhxnPnFn7Zozhuq6P6qt7hyD1B4qFPZUsQ87dHw3SSQdZ",
  "key13": "xRz8CKEqdXw9hge5sDM6LhquVpAkGCt78VP8ubjJkZzJJh9iDZBcv9XDTsiVLvc8LJYRd6ZixW1Phjav6fwXrT3",
  "key14": "5ewozVi6dupnoErah1xt6AhE5sKmnMiiJU6UQvGMpcDqSuYXZzmx8ccVRhQHp61vZfGgtrhJpL7xMSTrcphe1vCr",
  "key15": "3zpEP2ZHKMwzqtY8Y4BjBXvq1QTvoBjf3TrJ4DjxGDWRWmAroJGAJWFfPaRnytARTq2PZPNpTRWnscmT7egPmxwW",
  "key16": "2LJqSGLSUvtLfUGWpjGWVBCd99qyuzQpS2h3AxeWmZpHj3phcZAdBGzm1G8Ta7JLFvDiKQHGk65YgSK9jNBxCz6b",
  "key17": "2QBRRnPqn6r6fiucqFQ55bmvyCn71A6Yia4ry9HLK8Qy8STQxfZKPAMnBBwRNjEPzMcRMMApKFRmctmzFMfNesix",
  "key18": "4rAELYwcYVMxyXbW3E9QzJQKHAYAUy6codhpYkvz2t2h4Wv8M29V82hZ92vHiugwmBL5jk6ftZiujjHZ3nbR3M6L",
  "key19": "U68etTR5DmZJepgTY3naRfaSiFuBZDbPUHgzrtmHUj4NyxeMKazzCtmzZ5yH3dBorE6i4BvVkkpFgt5TdLX6c87",
  "key20": "4GcwQShzcQDjH8oR8xqb5PGrvScCUDdEE5k3i1bKBVc4tMvfpBc9NhGzDvfReT37Z6p3EtKnmG2nnuupej4FdNV5",
  "key21": "2yAQGHP7Kun8Mqo9UH4gHrDzsdo6TNCNZ51Xjq62hcAYuQaGVGYyuCnYhrTAtNVNwqzgq83QE9qSejLE9dKNJE1K",
  "key22": "2JjCabAdWwJ9nQXfejktRWMwQFh3AttQRZ2seGXBNmFyrv1p4GKS5svr3kmXUZXQ3BHHZqS6iLZzvNQth7Bx2aF8",
  "key23": "2XpPGhBQvztHUEDdmBjQmMe5SzcUaAgGoxGWgVhMGYKnwWSkwpYscSvW3ZnzaoUwyC1TexKDTbteo3SB13vdyaPs",
  "key24": "4ojkdZpRxxzzmywLU2FamrnCydc23dja8KEtynEqDNPFnuDo7YaardatUCiM9rBPUjmdExTo2oM8YAEJHf5wMqR3",
  "key25": "egzvoutAjsfg8nZ94VaecnZF4zRMmfpghAdUcgSCoE4Gf7o1pMDqjvoem5sYYXEsKWzJAQybKxZvcCq1vuwUQt8",
  "key26": "tweiQp1SvVzdpNnRdma4f2AzYBZ3MjHyFJW7PCoPJ9Gr8fAEkyJjSGXRLYV3bwSNVn3mQYYMdedYaU2RocqAwHc",
  "key27": "38p6TAuavT9vXaTwbTwzU7BgtK7Do1aN5qgoz125G2mmFfnDobAJwk3J446oSnNbceGYjcYkyVq8ARdxqGosPsmM",
  "key28": "3JH93pKU7bFWsCCCva5i4v4fQJ5mfGShBf8MKCnDNnvMczDhWv9uYQrszm9kprr7nCt5h3byjiVMmvpK2dyQNptD",
  "key29": "2mvwDR1Rbs2RM1LtRGRPmfp6w5QsiAcrMicv5z3VfJ7rhW6W4NyXv2Unis1h2xfnvD3FzLPuwv8FUrKjMMAbgz7t",
  "key30": "3sZdkKDTxLus8Qovczm3PCe6dc517pFPtbbYAnc3Ejtn9Esrs7aoo1W4xLSwfdKdYmbgMPFzzsaH9PqihefQAyc7",
  "key31": "fftP11d6ApAaPyiZXKZgA1eU22zNxwMK2TyTVUwdUaH1LTc34UrN3Qi4PWWsZEGCNmsvnFZdKoWcoDbxPMpf6LG",
  "key32": "kDrJratnUUBB6ttKx6suEsZ8aaZrpje2E66HtVHZ1GLS6jzBxqVU2732JFKnsDq6fJPnQfai7ATAwhHgmEj7qR4",
  "key33": "4GoRB6UqoYobPyuH6kjqwCxvrZ1EXC2JrW8fyjKAfpMKYVif5UEZxrdZ3b6qEbxETYY82KYtGZTGgJC4FjZvfEaV",
  "key34": "4nSwqEEzCn4EiLdpQ3GmPBa5S7VzhcxWMSxByeGWBfBrDu45YptJRDLu74FdfWjX5ALy8DvbNw9NNM9EegTTBKe8",
  "key35": "XgjDUbaZWeMgwrkLpXT2EmHxedrWqo6F2bd6AL1gDf5rLsLF7B1B67E2PyPkJAomPNj8RzdxsNFrob4w7xeQZKi",
  "key36": "47hpc78YFwVwdGPkygCuYqDiYrhPkwRf4MBN6bQ7ENCmi5ZM3JUSeBGnuHx2DL41eYuy2T5Bc3Uo7z2yPYjzp1rD",
  "key37": "3UkR6U78kKQj8cutRRKjhGaG4888z58x5qQPKa18U2VxM5t8GeR5UvqKnuzDCWAFERzVCthmu4xJiYmQoSUTa3sC",
  "key38": "DtS5YeVBkR27VFS7RRmp8wzvfqgYhbM3XgNPcf6kPSuWc7N9iLhiCnGffEZR7Z6m8qUETW214nQ4oPtb7kCFW4L"
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
