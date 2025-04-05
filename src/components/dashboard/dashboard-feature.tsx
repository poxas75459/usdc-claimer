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
    "4kd6zhm4thWPZQXvWqFbzbmbg7sSi4N1itZt6bsVLN6i3wwRYV3qSsPiHzBJGZ58g49oXHVYDnk11wbU4jm6TEh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zdEynCh5UGCyzPDgAectXZA8RuPPxtSyTK3F6cj21Jy5F2QfKuuCRdHgyxdontbNdPfio1y9TR7ocEny15akP2f",
  "key1": "38AvyFyFMxoHG9KUyMVwWDmZpuVvfLhuZi4FkZec8VreYQ83wTzYds2bAaePBLjBdgvqh8XmjxZVg7eiQazaWcMH",
  "key2": "2Ui439yRawSdBRNiP631q6WWqvcthMRMweJBkCRvRCJDAmACKo7QBNhF1WqX6bo6t87rehB63DL7d68hExgYWVn9",
  "key3": "5xKZ8ypY7FPrUh28h7uKVHtA2LMpeVxizGoAbNh1ZQq8fN8FD7cVPmdqwneyrrevE6k3np26oUxussbduQMQUCvt",
  "key4": "5kbEpwhqxZRQqqim9CARfxcKgt7fksBBkogmy7YxCVESmFHMkfv12oWmtDWoBaY2kHXA4VMggT5Cy4VCsTnredxm",
  "key5": "2g1pnGeXyv6SmpmfMiNf97Gq8hrravnB3FzNA9bNs81iyN3ayxwmVfxjv95B1uquYdVVJ2GrgcGB9dPdEh36bZGD",
  "key6": "8mS5cs7dcCLo1ok1sjBQXGB82y4meDL9yoXiugivYb4ohQAeSy3aAcuHX46qSNauBVd3EW12h2EitSLvX1MxUXV",
  "key7": "4vakgYWtmEhNGZ6GhJjMX8XRNd5wiu9yrc3dCgkibN9TUoQ1GQUHpKwdWMRo3V4jY3fj4zGWfAhR6zeQ8gwmFiLe",
  "key8": "3UtC1afmYuDz5YZeFufoysMjEEwFWMKkrEDvWxRT6iDx1ibXqCTdrs1gGAcLxJy2HvwWzV2PGNHRFTYzewEMvosi",
  "key9": "4LeZ3qesPPsqYFU794cYvMSzwMm53kjhwDVAoSV56VcbNFrS6CYF1KaVe2dCFUcvD8t5z7zsWozC9vpa2BXchk5F",
  "key10": "3VN1tBpkzL56czXiMPwKnusk7MYoAY9urAEHCa3LrBhbumochUvXFS4NjJzDzaUxf1zvE4KBFAGFgpooHntWHnsx",
  "key11": "37pe4dd95zzzMegoxAievbXGje5Pb83oEm2dkqYetshqzeWUxrGU82ginTASCJpbLGmQPHN32vfpYUiDBh5XJNUf",
  "key12": "2RamX3KNhoAr2zy4NkPeaMYnTEgDvhRhinWB1KPsMAERABB1TgxbKJq1LYYy5Ni87pmysD8npokmpJAGpnVdJtyZ",
  "key13": "4gpMBzMcWVBsiWheJjE1qqEX7bJN9ZDfu6X6mr5KzsDPonMt7FcaxvsDameoELLVm2eGGm2r9TRsYM7UvQicn8AB",
  "key14": "3CXQaRXT9tre5n26nbVEBeEqJidY6UaCbaFRcQXyV91u17J47SVCdyKhh8xZzoAVFDJGnCCqYoTMoDDUrbm3tWsj",
  "key15": "33CTimJeewsMQ7vKLiAtzQV3fTpvkUtVGPrzn1mC8CgGVdfyvH7Hn31r6QnD5MxcCniyPenSEoFGo1peLZee9rwP",
  "key16": "ZWjYpt7wyGojihY6ZN26F6hNarVwGBDqqT62b4d4cg77E2i77quq8A9TXSs5E6KFcSspztPsexqUEQzLQmkb58e",
  "key17": "4unyAjSPYMspknyQe4bUGSxVBaxN4wXoFsF9C4x7LtUFN4x39rmgh61AV34fMa1sBLsjYLnoH9rfzJeX8eFbHsKy",
  "key18": "2LDUVdoL8XPcPtLMitbkPFZLKCr81XVYa9aXP2jVwWyFPxcqFiJZtiiMqjpUTmMej2TMDszbxMR88HByzGtVH9Au",
  "key19": "2FnFkgsVNH6Qt6Drw4S9zPQJavNuCS8EKjPb6o3qtP3NERtiPfyytMXaJFQLgjQ1CLeExuvVSVhQyCJ8pM3eUKTq",
  "key20": "3gjqh6wzNdqUnC4DzcSju5nsgaFXhxQRZuM4KzXRc1guAyaq42Pka8NzYz2CRqgWQPRS1gBHFs9RD5cji7gTgTM1",
  "key21": "5fdQrGov7G5pnZpmoqwsG6gwvBUu9PeRFZaVaY9ABHs72BPZnPMQwme4GEqGbJv7rdFRNCPtwxrm7kaA9VmPZMqu",
  "key22": "3KqNFqzMQSotxN4bEQKBgCF3ZfztFbTMctAZgypGJpXcbRA7WEJSNt4r4EzBNRHoR3kHRpWeRRt9iGvtZibjAJp1",
  "key23": "28EYum3CCahtm73Rz8fAfYukcerFjY2eZS1GtP36TKLx8CCuK3DTh1xyXx6vksqHxNzgu1q7rXwxapdv3pdmei8C",
  "key24": "4TskKa1oa57fSTV8ZhGxvCaX5pWBzK1wGVGwDUSKu57T6zbKtHD3ey4YWQsRoyzwkQmk3Y3oSWCr7kbvsWxoGTGC",
  "key25": "43NV9KKnzzF7Pf38G6yP9s2a4T9wqjeYvB43m9kseMeaJSfVYaCdaVdhbou3yJcivq4Bqrhar6ie3yPSCD9Dr7v1",
  "key26": "44NtFFXAutBdBznsDX7EFb2CGJFKNdxPLUA3B65QWfn2XLg89jPQ6M6tJ8FwUBF1wx6jutVixh8nw75p4fEg2Sdm",
  "key27": "2jc7EsxAFV31Ny7fz51uHivZ5w8ub2zvknQKZDAndwBaQe2J455Lb5tqnhXeWDM7xx6K8pWC7xyeomTR1zQz48jL",
  "key28": "2oa4pjJcfaTRyvAvVwsLSP5xp5wtHwg4bUisjnqcNkito3wGtv5i6dGecGNcmn8YnitqZGFXm43vBdmZvfGspzFF",
  "key29": "2UGi5jdzKzNVspo68mn7yjXWTwYPxNdk77E4UhAZ3NCCgx1h46V2CL7f4oCzepHQsgbiDef3KKZWNnRaTPYPkf4p",
  "key30": "1PZVyRsgTnwJNadNi2uEvoS7R37EXxDzySaM9DfkmGdAtFQWWF1nnHR82nqg7pAaRdBszqvC8YeHr4rt7hjfzH6",
  "key31": "DiKcvMetEiVE2tS51wzkKzt5SRoTmyr8JoZi8w4LEt3jKQUCtAJ9YWRsUfZkGkXG42gMYj6E6EBBhWtCMpHLXww",
  "key32": "3yM9rR1wBDKQ2uNUgADPZ9vDMjJLUtd3KTqJaL3A8dhAPRNiT4DfeZHDhABUCaPysa9dRMCCNmGHPCshiXQV6MqV",
  "key33": "5junRrNQjHv61sk3NRfiCc5oev7Tua8guKMWid8q9CWHQn9k9bX7LtaH2Vd1HzugCUnT3XxyBuWW67PwGDbWUANy",
  "key34": "4PDDJSHgGoRR7zzqU339jp4Y6eSQn2o3Yt3vF1nQQBV8ogZc2SxzxS2wcWH1J81QPMZij88zQAjpfW6vhPMErCzd"
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
