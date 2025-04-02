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
    "DQmxQLAkjNEBFGx87nqxo7NtMrPRNhYsu4xatMHVEtA4cejwAcnecehovneecM1u3AsKw2gsbCTwztx1BE9KrAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihdQEcWNqGrbsWNkTQeRy15JQPsE5cFqnL5GpEiEqhAP5deFrjvJHLohFSoMkKi2cnNRB14zpUaw8JeNe4KBcHp",
  "key1": "2dDgrhi7zBfhsjM9d5qwHVdg1cyAEamVWQQDkLkhEh9rG2ZqmgT33TT44d3DRDDQnX6SCpSTAQ1jAjrogXAUuctW",
  "key2": "5kxRmpgDxAjd9cf9oKk36VmEMskXSc8o486ZpPF19HycScqo2Z3V8gDX3eeM2Q7rXke51CsaZPxHsRjYS6se6swd",
  "key3": "36i8JpxdAPYTWBZrbmoCUPhgjZ3iDp248mrDomv5n5G4uo1k9MjK3NEQkVGbaJJE8oCKA78x4C7kLjdnXNmsFHGu",
  "key4": "36EhbHCpDbZzUhrS6JQEkCMnmEKEZ98HttSZN3YGcjH1fyfFqj9jXkuKR9xBSiAoJiq2DtskuNu3YD9ivx4SaSCQ",
  "key5": "3sqhS8YduuDy69TnJzv6ifer7PVhVMV35P6Ri4dBJVgpDXEzcTzW9f3mgSdJ9FACN1uzCbTbVNqAS8KrLvk9K9Si",
  "key6": "3kkRGK5E9mJsc3DVAncauDTSJrj17zW8Ho3qjCfsTR8BtJtXm8r6jRWisTMYSZovuBc2HDN9bk2GMz3yx8iR6fKU",
  "key7": "2GJPJypqsL1oC2dN1CsGXpFqovipCE5EEWanJzebAx58a9SYCQ8fMCBijwTmoPT6b7ZTa7xvhFWFbkwHqTwTGeMP",
  "key8": "5MPx7Cb7H2gk1ZTqCbuihY7R2tBf2XQewbG99HXtHELJokuHCuBpiTkVSopMeUxp43cU26CZDoaNSUEVRasGGyGG",
  "key9": "4b2g5UjadQPq3fymmJFNEEjwdf7ojjnuZq8vZnfGKHLBoSZTkhR1YLwL7Amtmk33LmfrvKMAAUrQZSLRavZ6ZkS8",
  "key10": "3nU8ssbuvmxBR4AkfyBmXkRNdyft94n72T7tQCQoQBpkT88xh9BpaSuXiZpnopfJziiZet6qV3o4qgXkzfULoAMi",
  "key11": "3zsbGL4sqmHJgc5ZwxGCVtcZCj8VpvGTmDojbC5bgupirzHaoBTFV4XSQKNXcWGahu5rrRSFyfZzj4ba2HqonWBw",
  "key12": "kSULHyqNqGrSeLrgiq24HJTKv6272UJGLp9kxmGf3cqzjWcprvi6Dhw3cw9F4dU5Tj9UPJHYDY8DoQpcrra2M6F",
  "key13": "5iy6uhUD5mDgAbWBYBzosTWE35hSeFnRYSTwZaCdRu1DxYXBASs5nBcaGFbnHeRyZc4cxYcxyJUYSwC9qP4d6JST",
  "key14": "GkZRz2iRT27QtaoasJABuRZkrMTiGKk4tzMKyQmgcEddD24v2TSoXUJ6Vqs63yvR2KAtL9ao2dpk5DM6WbvfoLJ",
  "key15": "3ximiR2fo3epgXRG34KuVTyZRjFymozn3ZcC6htRZEDTwc5fT95Z7WRfD4JuNSoRJTm23iy3CyiNyFktNNQNUeaQ",
  "key16": "2hmTnoEM1Cy4RhfVzkhrxXhAJqAWzQ86VEh2Vh7NX5nceCqp5JBzSUqw3TPhUxHHiTL9jrvP3ZH8N19ZuQqhAi1p",
  "key17": "4B5MRqhhdE27pgzbJGoVSWQaT9FfubDKcSUSxeqq3RuQJEkEtqmHezCoWfW7bm5xNzhxAGK1iES94xNCZLJYQSe6",
  "key18": "2mHZpPkJX5jGmSFfvRVZ4BoFEvsRibHkHZJsWZsvyMLtgrASEMkHA4CcCEL3o1J4SDwYdJ1k4e6oMhTPD2xV5m56",
  "key19": "4noHkiVdGTJDeqvSzr5Mm4E1We17nbNMQyeGGGzNU92Dw8qkYSvtmsrVaeohxPYvZL14yRnif2ceRwJJHNbC2hpn",
  "key20": "4zXKBfNDuKy3hoWtLXDMb2bPuKpM5UbQqom56R4coyGnUomHhhrwtWapSPXepTJYE3ttVJxZ4jG8f6S4VU36rT7M",
  "key21": "4wgy9bBNBxgrvB42cgaJcETE1xJNfuy8rKejvaDsh2jXV1pSfthrznC1E5L4w1wz1jToGK8yiZX94Wunp7uaLR2B",
  "key22": "ophieKm5K9QTw5dz9DasTvQudn1FhNziHUFxq32J64ei1hDupU1Nnpa4BX1UyBkYsMsz1yZdKuDj47wfunZEp4M",
  "key23": "5RmQdLcvWt64RPptRiyLJUdp9yngbvCsRx93vqx4txdtgYKSP2YJr4V145cg2L2bg5puA8tr5KcxPKBcVharsL7k",
  "key24": "3QXMprmUcArJTWb9Jk11FzLsBy3wKgt1ZSPiffJ4W1YzNT1pR8PZEj8fDxs7SYPVr84KvZnLM14K2wTBo73xgFkP",
  "key25": "5AroeeS9NwMaEHzsnazw6NwGTrtZmQPy9vux6pRKwUZLRwRyvCibwaDuvUHEGrT2jKQKYD67u9WpcW1HDTGE5Rf",
  "key26": "317ppZCWEoKuh8fD1oRxWyMcTKXaQxQmXxmfYkwF9FgF2vf3tyc5sSG8tuWnJf2pKLWK5iyKghF3qBCBxZrseFCD",
  "key27": "56eSbbJEKCp8o4x2Gb1tKwXYp6ejfJBsJ64HBpti34U12wurUEMEtWNAU2fAB6Dq7pkeRoCSRPuWmLUkXpNR14uu",
  "key28": "467TAGdngPbThJV3PXMdubkubBhSXs6dCcdUvsxFZs8BsgMJs5TzLhUzZUawvdYEiBY6KYv9ZDNaqcNd59zdtfZU",
  "key29": "3zKfWWesbe5Ssgpje3v3FisUdtdmY7qr2BVpctXYT8WMDE1tdMja6uVkqBUYJ929ySA66LvcNBVPCx4ycuikTy9k",
  "key30": "5LQnt7KNDYGbT8eRpL4BMaJXz4DoqrZG9ejeke9p6T3YovVtcKvrfRbj91z52bCq43XYcgwNmD14cCxLCT5T2pRh",
  "key31": "3hruiS9dsbjnk81vTbkvTCyoRTw6JSTRgrdzg2UV1VxXfz5u598kcSmkHs55GYuzj3VNPaF5DoEGv76LvYPv7htX",
  "key32": "4EVy9NsCcrEwaSbENMUAEtHWuGbiaKrpFix3fjn2DdpMBDmeMjVddQPe1Fw2tnnvWuoJq5buQufXf2MULsEuvGKV",
  "key33": "3geZh3K8Cr5iSKoTw9aKaa3uXkkgVemviEUgMPdg8NFGbodK3aAH8BJT5D9v3xkYWxuFt5L5PJvo7dimUSGsxhZJ",
  "key34": "3Xtm76an5iCXS9goNvfkYoSasZF641QiubL4LXJxy8AWo254D6ezLMHgowUYBiBsBYJ6Jy3RvjvkvkmunUFXemHJ"
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
