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
    "4PZ58WzHDgFMTAkZFGHKjR98MwRTP7Xhr22BmbuMGHVpy65ZrceH3qpgKThx6K1dUdgynTkx8j9G8V9xZCengd44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YgTyFTbPrZECMQ3RQNLrKE1JanJDZritroQgePKRznovbws96fymuComw6SjjkKd6UFAY5i8D9aKzdW9t3ewrsu",
  "key1": "3hrLdVH3RCzgvy4Ujy8QM9w29rLFDREfHDhsazhsnqYP8CGupbCjfhZYd8F7EiY1LXFFxxv4jmXtk7kRV4Tqyi5P",
  "key2": "ZD3qTkWi9AxfTYtTsyNpf9sKd4s584KFiPnaBZLh1LHXEA2gsYDDw8RsRBDJCWXUfsib5gQr37MiXG1Evgr415Z",
  "key3": "5K8D48KKALMizAL39htGd3nbXJcQe2hn5rrizFpBaPHAu1pVDgS2r28Ka4We8xM4dFMj1qoZoxDW36rfvnBhxay2",
  "key4": "5pXopuX9t2vLQ9TTfrPqsBVHgtPYQv7r6od1jMkA7pdgDuajRHKFwsLp5gxt5vQBZqs7eJgmwLWdBF2EQQuFB3m2",
  "key5": "2iS7TBydUmChZ5AQ4EsCoUWNPJQk7F2arpYKjeXhjKyEHtwxGCAvCDwJ9r5FK9jAPQuf6PoiMhppc5jrkmRYeBGn",
  "key6": "3cVYPKzzfjPEHtwxcn29di3VJUnyJnRWi1NvPpRL23qxJ31sow2EQBybMUythuTVFPTqX5drZnNzHzowBGd7Fet4",
  "key7": "4DeSZMsL7HWyweYWwfMcUprn2ipKRkoAU8sWaXqsKdiC2jruiDMJQrwnc1aUTGAoXp4JCNBCvnq6u6E9wUuhmKta",
  "key8": "3S2eadaheGgqBj1FzEwAUZFcbyk56BvhK1NBLMKPragA8Xukp5VhYs5d3xMBmED7ZmjBYiVE63KxwgPErFbsqDmw",
  "key9": "5r3x8WgpkRpTZ5sGeRTdMtUEMRLatyZiaFQp54L3LygYAFFzHic8cSTV3ZoVq2ciPcV1o7LGG9mECcDMWXekHFAN",
  "key10": "4rdUatU7vioCo4w4DdvpgYGUEvtdfiZQuzCeMRRi3yhf8yYcuzPXuRG5akw2oaD7N85Gk7zhXBbHEHgpGFojoXki",
  "key11": "2Dq4VNFVSCVJs5jzsJ94hMYob6NwihvogjjDZXGkcsjTJ4ipip7p81SYvLBPxuFea6gWnEwyyjdnr3Nfytv6QCC9",
  "key12": "3AEoSf1MYhPBo5ueD2aMFX2pMkhe9qWAyPxfPcpBVAaGFy9L9GUWQf8h2rjBCGNmS9qr3epdfwJER7GL2AMqSJG7",
  "key13": "3RWo8iyvy6k8QBchJFt3ANicuWyH9TszCrcoSizYkTwtmTQSXG4rWbw8qo3Strxjzy2sjn3T4xfpmM7kecgFfuZv",
  "key14": "2vpB26VWN2kQkbmUX9UpbpLcBSVKstd5GkTsin1kYw4wU12ACZ55nnHn15jMe6jMREaRoVh77nDtwe2JUEMMwMBH",
  "key15": "3EzYeKM7MTHQqnzSEyK6ig9JqK41gfRsiC72NxgrYkL2qpAjvmgVX7StWLQhe4BzpvXe3VcKgMYCJovqwgB8EB3h",
  "key16": "3XbMXoJEfKuEbgTu5PqnAgUGY7tt3gKzq7KrhFqzbrjFHNCdEZd4CSSJJpaE71eTCgxQ6r2mArse4Q1vJMr2uL4W",
  "key17": "fcXjEVemzLD3dSLj59zUczrcvsEHFdeFewTbc2xc27vRftJw5Qz5HDnb7GpYPfxR1b6wUctDcHdt26Qv3RLDX9J",
  "key18": "UKaBXpfM6NME1wgxAGLLkZZqAM7jJT7AdMDmowUB6ZfscrEVCEpfrWTFgXtK4MKEcG3VSA8pWgtXDnuaRcKSBYp",
  "key19": "4miQzaY3QhNpcXVDm8nPbvJt1tSRiFS1Xy7U8XBubaY9MUAGjbS34VfY5F3jRwPEurByLR2GDRuDTNPtQQcsi457",
  "key20": "3Defo2aSrEKXzYxroVvbdv6hzseYBLfuofDxxYx9qkJHftqkKa6rfh8uys9KZnU8cowj84kUGe37fnogRBg6YSdA",
  "key21": "stMMf5PSC5HWAtAehUYxDWojVqgMVKGPoLe693QehnxZB5ZPwv6jSk3L75V2rSJrhJbEX8rbzxftHVm8xdpzRSV",
  "key22": "5amQcAsF7anqw4SpByDDwwHqTFmCEjthFfkYHKJZHUmQxDzKahSYgr9PuL7oQuGxDi1MYNusuC9CgXxKt8YqdBq6",
  "key23": "55Tqc9MjSM9XEs2JTFCWNQk8XNFP94gL12rF5adZmLLZiTQBLG6KnMZ5Mq1dA3dEBDmNLD4eYQMGcPpto1LsVcbM",
  "key24": "4t6Cz2aXsZpo8Ej9YNCWYmMNGA2JW54SEETsA6s7MFzizPEuYDU2K5ewzfgMyDzHEEkqMP5uPD975nZw7ZApFNAU",
  "key25": "4Zbwf1TNVUqHTFsN6UsCuptB3o3vMTeyX73Tn6UJvt48yk5fujMVEZb88UZyEbEYhAJXKxKugMRS9L4986xL5YmR",
  "key26": "5bYkJAht7HGDhy1cYKjpHkR2pP9gBXq3VTgpNvEDCPQGtKdt8xayewYGzKVQVtX2m98FayXL7QwA3prx5swHt3t5",
  "key27": "41cEpW9mwG9D7hvF5d35mi5CnyfTfAXM6PnrygWidsCgiZq89LtGARDP2npyEGo5qCjPhhsML5wyc9GDKQc6BMMA",
  "key28": "4toeZ4tL3iRgQUMyVhHs4amT5ZnMcPLqtMZaz76CngFxdGdYu5sxzq2ZXLnJJwKKkmpV5qWDZNjD69V6YzoTtq9S",
  "key29": "3avkuDoNpNp3KMHm8JafNvdTk8SCBmGEhrmmf47cH3WPBrEYD2TtgF8BKET7wSSMZ8suw83HeKNq3cYohJtcXwH5",
  "key30": "2HHrortGia89MaAmUyjNbomp2yxjkaoCcvjvz6nrWMetLuae9LoBMUcGYQTwEJxVQWFNGrXJd59pzTAx9mwyb5HA",
  "key31": "3YQdMqRwjxqNpceqp7UCxndnaHxeMNRT67nd2XXruYP4NZ714gzoJTs9eSDW3P9UuZJmLXxeR4ctm9FbpEwDjjRN",
  "key32": "Eh9tjnFHYYtB4r8mdkG3yehwuMYx6KtrRqWEwfL7ShuxHFjcgwuf6vmNcCvuw6v1ymDh4Dz8TepVsPTXPd6Fyhw",
  "key33": "26AJKZECaAmZXXHXKuwGPGqBUKQcy4ZbLiF9hYL8frApdKU2o2WAChBvERYDeCnjKuLmR9qzKpPGe2um25cw8ASA",
  "key34": "2Dt9mJajP4LGb51utKGmExF7eebMWWjuwX8Bmonm16tPRmoFgTGcc6y2LZyTJFj71X1CP4QdmeoE6nb7pgqRaJcU",
  "key35": "2pdW31dLQcjWPMvu9PCihq4hzGZmr29HX4rSFGqqB7dNuuUH8deYfK64VAgcDPG52HEqQWsefpDcpbFetbaBSNSt",
  "key36": "35jSpZHikoqTFN8roWCFqwv8Hg4xfjJ7YpA8rWG916ym9a9xJ1TA2axfKkRThCzkPmd4UHKrtPWeZrg6k4qYeGxH"
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
