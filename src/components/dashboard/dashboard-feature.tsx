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
    "RmjRZPX2rEr4Uqs66mFd7vmGHX1nt9aCPQo5LN5NQi5MCKrg9khXMeHh6ZqSyoshoz5wrLoxovUFAcHdugo4nmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yYWhoenREdozjgjcvU54Su4c7WXnDFP4PQJAwGNZ2tmQRvQY1fQ6tLA3gwSY2MyrywMAF2Lwv1FqVynEZ7EmxfU",
  "key1": "rmmFD3Ed26WUrpdRBWB56PgKDTeUkiKJTte6T35Jngi6FGrydXHAw9K8Q6G6D7YQhrCGJBtXkZdm189trdDDzcK",
  "key2": "5D8wd8LQDKcZvfAVush6Apz9pPTpy7hhCFnwjsV3Jtd82TqjuDSgqSaCtXTF68tVmCrToqRzGbyyi4rtMyQdMeHq",
  "key3": "Qs1bi4tpXyh4hroyYBYGZqwaB1bFYESffhDZaDCfW2CzeRQiySmhyajUgWYPQmDRF2Ghao5LdvmztnX7GEta2s6",
  "key4": "2jEPUkedQQGys6bi422yACLuYegP17MF4yJEhhyfEggzKBZrSw7VRURnDpHE8QDfKNocTcvHbbeWtwAvwNEnd1X",
  "key5": "3p5tsZp9p57uMkwvhFA9tZTddNazGvtWEcKrNnaNPZvYQyXkjUm4p64FFDcnKRAjCmKt7ui2FCnPJoLVUtwraRWg",
  "key6": "4ZfsMLGNNS6i9McEoNLUcW37FkyQzGDGBm6oSBczVQdRckuBos3samohzd47KtsGEF6hb9qe186pxCVaUQDgNqno",
  "key7": "5YXAwDjVuKFKcSdT2WDbfF5iQBhvZfkEoK9WfaM53tjuQbgmgQKidmwNob8W2rreyYcErDWs7njnDRrZHgy7YyPE",
  "key8": "2QrnRrKm9GdqCnQks3x4UhiTzpVtstPznszjQGcoPszAPVt7tjbhF2D7QL6ntL35Y9droC6XT6KvdvBShkKnXsAt",
  "key9": "5QpLcHtF5MYhDJLLz6F3QE5Kw3r1FVi6svTNJi2e5ZXVcLPS1589bsWZ2fAPTCnacm2XLXwvoX7y2wgm13ZGNbqK",
  "key10": "3JpZqwFnRZhWhQQhWCNcTGRZHnCYoQNiA6fvyZFNR89JtT7DtSp6qtgxLreWxB4iZZnq63ho2nQDNHXYY3R4vvEu",
  "key11": "24MuowcfqbdgBF4PfANrgPvhQN4fb71gJq14vjNHWufrPtSuwFqaDh5y7eZNNZEubYFSahExpa5REjYxSbwJ2tcr",
  "key12": "23JdrcZMo8UXXSRaL1CNq42sztSLnNi7qokjStAcsRr9GwCnLGiw3aKdxRRYX8aEnm7zcnkGrEA3YJGpmZP4wVpA",
  "key13": "39tVpXUc35gV4gnZoHd79iUyvWstvuN4mvF8A7keCYXfQ1YFNvbrHFJu6sZEUBE35DwYM74adYVMC6GfoxJnSE3M",
  "key14": "Ji2HBe6tkciTGpkfqpAPuYR7NG5V9zXyfDidwYfgkhGpkKqwqAjK7e1LzxvSfgQNi17gk4uTMjKAG4nbipHtBJe",
  "key15": "41CvqHg7p2h4qJyxZWHQD9ief2cudPEwvAFxst1yuS56hAF84q5vPZ7fr7nn4jsSFyAz8wX3KhvRZV76gBJTYtHB",
  "key16": "2diZQLvrpAkkXaPsjTBKhk2vnWfLERUNbRUHxN61GYMTAZcJoGqZgiZ3VrY6SCUf2aRpnFn4a8PEXLddZtk5eK8e",
  "key17": "4z2uYKsw8MFgmbynzWSNgxLBhRSybXtVniffGP3gamdMgZw67R1VBJjo7kkqyhYBrMpZmnUPcWtJNHL74wpVxNcR",
  "key18": "3jiFkKYBXJAnJPWtv4K94QAPuDVBjv6W27QarWXDvfjbrF7zgoDRpfj5SLVQx16Bc6z5TmWb3uZtoJzSSBppiWv8",
  "key19": "2x2HsUpHZ35813vfBk7ZvmZ1enZmkePWHpFcJGAXYcvM8PvMHdYkXFpCWZ9ac2egzNeWvEJQxoLpposbV28jfXEV",
  "key20": "5mMdp92xsVYzcjQG7YamFyDpqCqEDi47QTCtcztAuQvfB9SCDJXFafyYKmDidGPiYehpvmsSjrvEVivf8cd7AahW",
  "key21": "vHJbbi77yFCWuxkL3CC7KvxjTqffaep125fyxgVGVWcdmokeAsLsfrhBZo5c3WdwKrGYXa8zuy74i4FSW8QEThF",
  "key22": "2zH29yYsTYvfz3fQxBxKfRcKmNPZTNv4ZMxUBxhMAPYhhH7TB2wWLARhuBHrcBoTvRcQ445bFMsfUaoUeY4BhBoP",
  "key23": "64u11mhiuh2vp2rdGm6fzTeMopcuBGVqPKN65xaihiP889nc9A4eUSU6jj1pmCgeryojJBHFBJqYQyaXsRANKVkB",
  "key24": "66uM74WMq4QGKxAsMfH451JsrVmMkmA7QC4XRng9fkBajg2gn2tMYxcneNHZLUW1dK54t6G2buDPY8P8Q2PTLmBG",
  "key25": "2W2g9KMnuWLAkkkCAynn275n7HmidAq7V2v5t6ePCh2kQdaKtYcrKv6mHaSqHDXrXyhvCZ2rdW7zbqP8pGe2nrgb",
  "key26": "2nnNq1V4vpsKpCcVw4SJ4FEF8yfCb6JYfFYnjTueH6fEU8cLT5V7u2pRCp49czrDiTtrjVioUyjKEwppb1umvSxY",
  "key27": "4eUpCg4bvshPYKgbAJm9AFGEyzxmoBpQ49pnAjG1ovcnm3hecFjobH2xWRaVXBk8eXsG4TH2yGmrYrvnqg2xJPsy",
  "key28": "3VDXk2Nm4SAVr1SHASncLotgkERHpEQNCwptuhfSNfp5n5wAgqDuRfcFK8o3jZCThe6CZttZc1EKTbLBiHTz2nCA",
  "key29": "2Q5VeEzYdW5vGvZpmpbxCAbqhtb93gaRx6UruBGSFxZoutjorz6VG2ZsNEEXQwD3qfgQvKntDthrfdtrGcb6Wi8x",
  "key30": "5pJCBP3b8YfAwLJoFVHkAYK5CUoFWLPK6Yjd3Ga6jw7pDKZL9DUko1Z5enFWpUtxbTSEZzFh5TGJriDmx3diTQL3",
  "key31": "4FC4UxAZFBszwmrXqxE41XgjebLJGbSgEcRgMnPsnWc8b37mkujtLJWSpXQ2pQKorvBeDUwRuPG4FhDyrn3BfZnE",
  "key32": "6dn8koxVoRr1Aud9sz4yEc4pxBkysGLHzFsGWHeMUnCAf2bg9qvCqDCHK3o18UACrMcKtp1DaGpB2GSchhYE9xN",
  "key33": "55gb4CDqykTyzUSfyy75GvD5RztT5yp3PedNW61h3uUMRPDgL9szc2hbbSNatHWAT1bCjoBJX1HeZeQk2Y9y8jCW",
  "key34": "Eo4aff9gxhrfM7hJauwFisdfj6n7yasJt7TTGjUmJjPAfqvmSL7Q3rZLftN94ePmGsRDQrgkidU8aVKWU2Kqsc6",
  "key35": "2j9fGvqNA24EAWB9jggAdTi17e3GPhpmqYVYmtWakmMQgARqvzvbDZkNhVfZbmzzJhrx2oFr4FLBRxXK9Xc7ziF8",
  "key36": "ogDAbK4FLe7heBmqfEQ74fAooG99ZTRt11DXLX3HQSBVKReP1Z1GC9c6h8gPqYjozVvmEj64dotcrQ7V98PFyYR",
  "key37": "5dPzwuL6PcXpvniSgUtGB5tdgej78fMKtpSRggSi41yRQiFEbAarmgH7iWRQBi8fXJN8So86X55S112wN423xyyu",
  "key38": "49yV3znGSLT8BmQC1TUkH84bsXjFscvcjRuc6yaevn9sBL7u4GoghqUGkBoVVwNbnbv1AZgDhoTQVKm4bvDorBQ5",
  "key39": "LAU7iENgz78pAzwgwHChYdxKPnwz2wNABFZj4fEQoHkhPhzQonaY7bTGtDH5o9etTf3z3NEcq3aZTM9rEkH19Gd",
  "key40": "57mEkmTcy2v4wdT1Lv2Xct3Z8hJhth38iUQNDNApJzjDessDcQgXas9jhb3QDC1rTJVzmS6Hjtja2kgStTWy7LEr",
  "key41": "3R3jgAZJPcxh6dsAZC3XTATgbNxiKWXbaX1gMM1J5MaA76HvBBzeMgUuqZpy85gA9FasBYBdzxtEfRgzb2UmG7c1",
  "key42": "5hJbvNSDMgjkcRAFfR9fZ5vjR6L2g3BK5QkyzDEmVHkPsQSVDvTz2og81p3G86eioHW5gCYReZaR5SopiCto7oMx"
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
