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
    "2bR9JAqTAVkYVSyF5pwf9rBALTHXAKcVA6FaUjrphiqdFryPgfLWPZy55LkJ5xwUVxcm8h8rfaBnGaz4PsfFx2MP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "537ehDxUcxYkSad1ZfmgzPd6Ksged41X9XTy36iBoESk8WY58zDjDLHbTS31jtkQ39HGcG3FN4tfkV2nU9o36ZGk",
  "key1": "5tMpdXeRxAYzVeYtRhNeRfAR9jwq8emaevc7jL1HDLRwu5e1mWmbeftpfXBTPSkszaaiy1F5ZnmKpSZkfv7fxysS",
  "key2": "3XhUoVz1HCAQdrJH6EhbpVfMjRt3HADQYjriUmmt7N24VX8CDSjftNySvGvTKCt8d2Bt9VJts4cV4xcSe5tpfBYB",
  "key3": "2B152xgWHXKv71G8QKaSVooTiP2hmg2fTtKaeimQ7o4jrdWRR4daic3tmex6b3bDpwMwBie8kxm8rT4CdRbQLpUS",
  "key4": "33WtebYRXHSqyFVFmDnFHCXCtQ6cjXx2mKTEs55s7qEYW2KsP5NWJyXHfkLUNmEoh33H2MFi7QiVvDCXMBspnSo5",
  "key5": "4VdhtGoHveUcf3nqViaMonzAzMuK1LKvCrvZcjaYU7acMYXWiTGo7WSqLSrBzNo9ADYYX7zFSeTw9ZZAgZ34iqwH",
  "key6": "2rFqZo8W41x5pgzb6ZqECGWLX5Q63fhdUvxPHKqFm4sQszcXEXNwVCYAR6SzWpw69NMqe4AXX4azQvL3RHXAybXw",
  "key7": "2t3j7HrNC4LVJVbHqudCAwTdGL9uCab6Gr2tejk95hsmc5YjUhwofQHNCkiSg7TTLVc4Sfs74mmjLCbfD2E8CZwe",
  "key8": "5mvhJgBvoCxvNWNdnEfd7mCTqgyigSdCP6DHRtvSSv9M8f2vESfUm28wictjRmrHjK86tnaqyUCgYGGicyeAAkRS",
  "key9": "39hCXENvjgRL1dLXAwpjiuRYcNRqwzJ78FUmjFVeKmATJDmzWbB4NWsREB72oyna4stt3MrvEErrL9pEeVtb5fcC",
  "key10": "5hfCEsa8UAnLKxtLKNvbtBXCA686dL7d2BRQNiADCJ9UDfg9VHmSrjjuR1CmNELNvYkFCMtm4YyZqe5Db9HwbKds",
  "key11": "2DxNA1QTQp8Jj7PpLxS5kspPW2dKSfQiuWPM7dhEY7J9LnHPnnLfxHJSSUxmn4dggGXDtyJd3Tyee2btryvLPN1w",
  "key12": "5FpQtrcYW4mHY57Xcf4aLDUcZKhMg3Lt7rWuFRhGMAB6WGmnFGZVPwHfAGpExSA4rrPw2jT2VnFpUNZJYkVkTx2K",
  "key13": "2hR4N8pzKC1SmJR5ncZ7qnQMYjMkRtGyopbpVELNhozuC6bVRpaKbkodAbfbpr8jHuwxaYZAkTeQ2EbmgTrBkNzV",
  "key14": "5yTGWNFnn6Huzk6XVG6Dak9vbp54SheVkzRnLJTSdoQ3C5YMRNopAYBfdK6Cdh8hvzvsaDF5Mp7cUBoq798L3LiH",
  "key15": "LVPisUwa4di9N1FEHgqznKWPwdk9yHWdHejtD5hzLsNxTAWbNf2KKZ2LDk4hgaEWNeTGkzXFVWSuwFbdnDBsXGR",
  "key16": "4j3T12sfPGtBMZfiSmtaKsqQzJcCF21bVrzghaNrAsQEvUfU2M8qbdLFmgcjo8vjA77h8acKKVmqsrvD6hCxcevv",
  "key17": "4EGpT5MTte2AKKoac4kbP6RWdgT2gbgjn9xKFa9b8WXe9C44N3jpacqQSwXkDEAPbG4P5tuVUcgoJWwQmGxWpAMG",
  "key18": "NcC9QCE2ivwLNMyBhUmf6vP5qFQxRk9f69gWuQWjLrjbVYQ1mNvPvxGjZxZWagrRcbknRiDtxQmJqgpEtQP1dc3",
  "key19": "4mVU7RXQmSWv41h8wo7uWFjZcXpZDBVmbQgHaDCAn3GYQGmAAQSETrLrBMPPaNkviBabGHza8jsiKPnKDaQrtv4Y",
  "key20": "XfiZcmNjpwQV8X1phwK7hjhBecwuQQ3NTj9rnifwte4qkSXGLifHYrYSu2QCWtEMuceUdXZZH5rWg1XBc1XHzMd",
  "key21": "3U8KedKK6cyJQcJnZFFyL1VKvEimQdrkJpCebLWEW7PF3KYxe8bY8WfLL78yzDQ1UpvecyTpjpXs5sAK7SjmGjVv",
  "key22": "2Y2QzwGrbzsruHHhk1FiuJZzPTBfqvvCnFKwmBH5sKCGzCCNKZK11vFrwFTri8be2T9osj5BinU8zhAuE3DeHPud",
  "key23": "458gVLAcgZm5HHw995LQF1qt3ix3duxqe5jjHDnZGghsezwAEEsixXCcn8qJ5VGzJi4JXnn9gEDhAm3DQzkYzN3X",
  "key24": "3kG57XCFM1uYmKKkLB6ojWck6PqFUTDbyePc68BaDipKBdJwyFidraP9U9eWHFK7YuoMyCGZ3GGA4otzk6E2C4mF",
  "key25": "3u6MS5idUjqvtNBecnzKAchGQuSACgMYnXHUVbm2uyKnjZkaU5LCgvpnsatd6zjnA7KvG3WBdyY5718k99vr5jJo",
  "key26": "2bV79WcFR1bMeM2FpLPSxQqqJhkwNTfG5jzTPgPBaHdLb8MP9tw9B7DFcnmgXninqXVgsVkzkWRzqSKMdsGdJe3D",
  "key27": "39Sp1ZZy9jAt2QnPvAwe8NArnQgtXkayjYCDuG2Zx279svJ3EiaQKZkFDi9r1uBXXcaNHPTEAhwyCvjEnWevAYiz",
  "key28": "i7hRgkgUSck8ryg5pUqHGVpMxsSdWDKsCyMGVBCxX44m8q2s5M23HyJv34pMXpVyAeUAiwfJiQjqeLyiSHo5unm",
  "key29": "2S871R9HEFWrkTTrYzqZazK9sEhkEXQiFtbTKGQLUVJZ3zRzJaRAHgyRPP1q7oj5rdSy9pzTLisNfHJnnEfeAPih",
  "key30": "2FYxFL3PZMA3e7D13BR9qWwNzzpK24rGXejmxgDiPbydPaJtE6eRFBUFv6cvponEzsUgqQezLPX57eiPmJyHCWuK",
  "key31": "5STBnvPdvLUkZuL658qimfodTnzCdw6ZafuAQa9kJFw3unFsKbY9WV6nt5oQ8R3sRkikSgVTMPhJXiYKFoJ46AE3",
  "key32": "2APbnDuz5KqpumATG4kB9rjZeN1wg8fr4ABPH9q7kupYL3FXR14STfquzoh3sHU7uZg8jjW9GMRHxBfnxhzFy7Kw",
  "key33": "z6xR19LfFgQT5SGbrVznTY7CqGNneyfduJLQL1fcgU5cFqR7tkjwmv1izJ8Db24U9bLxpnqzZeD2eGJmjfSyfRb",
  "key34": "2WNquYUjpXgW6JgXETPQVBPz5VDYQSD2dviqjDuEJnpWwTX2QEo67UYhrAxmAjn4hCPUoYFAAQcrTzUVK6QU1hbk",
  "key35": "6Nt2TnzPtVqDfKqVQ7F7kHYjg7hFPkAmpVh6U5eo1Dpz2vTLLo7vaznAmBNhMpKh2MDZ1MW95psNeuPZHQpsxe5",
  "key36": "38sraDGZJnAzV3xCbbkDB2xsKvJu4ZC4yYM1j98y5aiDr2FCcnXxSvRePMXy2Ueuj89eugW6ZPu83gvrh8UGVryE"
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
