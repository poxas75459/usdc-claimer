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
    "4KbcztRuWGPdvm9Te2g4GFJep1uSWrFCo4Mgxf26FUFPtm8HikRot2PzZ6yRkXD9hG1mEGh8TjYf6HansUp6ywGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wk84hVUgNRfNSnuG5bXtibRpcG1ct7L5q42FgT6Vok1BbYBfgHwSqb5wgbzwEvagFdgYyfJ3MsXQVfrsNDtCBqE",
  "key1": "36Fz9STH5iZHUZ3GS24rYVcwV3jhEPY9rDVTZ3m23poNm9dgSj255AJvRu19P6YbfbjwaGjxhM3k3NQKySKetg7L",
  "key2": "3hwqwtuxwcotBvAcC1asyW9ndmFvCYF7Gv6MtLMybbBqoUA1xEhsuLZRgXpj7EKdd1t93TY89pWxjAYdPJzyXYo2",
  "key3": "XuyUZrjpK42ba5HEhhfWkdsSefzQwfaUn7SWwehhBd6Zd8Hd3p4inCEWA9BBxT6yjHtPU6zpxU1EVcdmt6tbDuS",
  "key4": "4HieBAs6bpCsvRcxSsGEKY1XAvtoLpYfvnhUUCLLfPxmg9PSE9CJDLN5mbCLEj9NdTMYhbHcWXXxMYjVGRM4SxXH",
  "key5": "32hB36ADnyqLPYgPh6wQbeD57DqNaY27W9joZnGS87QgH36h19ZjToiaPRvyjqUv3S3EZazNyvMMTSWYEU4LzD9A",
  "key6": "2Ux6cgqE43pmMirqcydg1tdP9HyRihf2b3snkkncjnojAGGHTDLksrkKTEh95RfaJk4gJTDhBwUq548jRpFAu7bJ",
  "key7": "cNWgkjyPnqf3RAJmtxkT5yAKRN8RSU7iMKHpErP9gYxqAry34dhTS6PeJk8yfps89iwcs1mZbePkgsrT6Y6WGBo",
  "key8": "kU2F4nF8yoPPgNP2hS7gvcyTr5ChMUtmv9LqhmQuUcacJtpndzvVfD42J1XAsZdWDyJK9aa7W6Ps4ERerNUD9wj",
  "key9": "5HreEZJMJuvFVSwVwkJFRX7hDNcUfFmDPb2Y5AcCuPJE3jc7zwF33ZES8mPbbGorLXLD2bT7fphb6d6yvwZVoAtD",
  "key10": "yHcXzpu8xqw1fYiAhn7vt38Bx3ddUSkjQLJVKmpEsxckXMHHreJXbdn4ctERdGD2KeSHUPU9vPutJuWojfEFCyj",
  "key11": "55vSYQw4LFZ6Vn9jqcya9Pd9F9q5UCkEwKYtjRBubnqruiZoKRTiTYd296v1HxJ3iWAQuNMxK4eND1xGYBgS5Dft",
  "key12": "4LctLMkmSqRnN6s4tqDt9DqnkGSMaG6Lmt7RSLvw3W2KfY9wyrnPa8sR1jxohpJJtVJpS5NxBrJ35SZoTn9nnyBi",
  "key13": "24stQyCKdUSa73etNvhSJK6G6dDeJNkqNERjNTUTDQtHaiJMaztTiReBVk5Se4rZmtHjuDj3a5JHnQBsbZ5yuyxp",
  "key14": "Qg1XZY5tx9ZJdvxmCfYSq7Un5DG6w44PBRnBFchsetugoTdf5uznZporKhhDLqs9ByLZaqCHWLJ7yXZNboVgdfr",
  "key15": "jzTLNAdipLtmTeRzQN16Xfs8hynpSDmygwGv95Y4ij4BxMf4zXXDn9b7hAkszDDRWsBHTKQXHPEHPSVaXfE9CqT",
  "key16": "RjuQbmpZVYy35eFDgZ8WGkxepRLb4EVScitwvZXEcCX7GiPuuCJgkzdvd3uTv9TE3BLdXm53kngKZKormHEsBy9",
  "key17": "3TP1FWg1ib87ttpXp89mNthvgUhkZuWrctPATf3gMDY3iAdxVcyzNu9xhSkEkE7yWLLYybP9abnPktgGN1r1qYDF",
  "key18": "eG4G8NPiNTFDczeq8knRPJ9LtQXBxVuhFpUddTTcfcK7QPHFSdCZw9F1m3RQBmZ9CczSLn1KpzwhxXBPxATDEFf",
  "key19": "2QQMzAaiAPLH6vDrHsuDEQRboYhGHUmcNrENkU1ei9bE9b4XtXbRZjvaQkW11jx5dePFqruSK4vi3JyXkJugakhU",
  "key20": "Xp5MCc5rrc5H88KXWXm4vPG8TkmstweeT333jJr1KrqED8x9PU5quWom3t92Cw2gJ84rTTZFUeFRR1QdZZJLXCs",
  "key21": "2emcciyZaKHofrT6wL6FsZPiMCBiPG7nV8T2pFgxBc4nzkU3GeC1d6WTXQqw6jDD2Pyjd4Abqgm5ZqZv35Da3toa",
  "key22": "2Y7MM8QDiuu96fHSQxowJ1tC2Yg6VanL3iqmr445bJnUwG4LWGVrDcsbq3U9KBxDzNVfPoQm9ozPxLNX63ayZTHo",
  "key23": "32yBS6yREE8B6gkeKWmBQtJFRojyccH8vjTDWg8M2jBFPhHvQXQRorrsY3YGnAJcuH2m1myAeYUFxjxG6T2aZb1b",
  "key24": "64PE8uP6mh4DZGadnvoVuv6fAZeHoikmtYL4iF2p8Xnhf8TFH3oDrj6ZEyCNP77oF6B8aFdNfvA9DFKVCA8sT2NM",
  "key25": "3gfKBaHkhhvng8MxgfQyC4g4m4wFzJksPekWfYp4zGJsJEU37QZLWL2W2QsX723sSxvkTGMr32iqW7KmmkrW7qsR",
  "key26": "431F4iKBfEuwme2fSAbPERJGCTiPBYZg28wvu5a1ZpqF2su6FpKYXSF45Whr6JrUZz1YrzpZfxCr7JLqsgCpzYAA",
  "key27": "26p8usAwH7QkZ4oGSP1zhdrTLi55ef28YCWd14uQnMeQ8p1SxG5GdnZnKu8c5vy6yw9XvTP66KyEaGkbje5Tgjww",
  "key28": "p6Nd33BZAH4dS7XaAEnDaxJQUq2Xj947pjiTcgASVCTWkBGrfKstWdPZMB5P3JDVVUChUzGUVaxg1DijdXxEpdq",
  "key29": "2JDPeWMJSyAFJKC62js9MYZSSVVzABPKxxBMu5na5oHeThpYJf4VzMU6X7o1mAJCCGjcEgQ31RJUPu5suwWnjEFw",
  "key30": "UakhzcynDtACavSkgHJduqTqmKQ5EciRWTEV45GnbWjMU18QLe2GuowxD1JhsHdHqktXRvgMiKMKFbFT9ZELz96",
  "key31": "34VieoHCtpZPjyfshs3KdRciA82Qt6Y4dV7nMfE4nWgR6Z2zxJ6SkXWJco1vYYAGmGgU6mnJc4y2pH6zzoaczvwB",
  "key32": "UUVTGDVp89T2xvhTuf3xHB5F6ZGegHoKfQA4ok2Wo2gggiBmdoLC7rAoKAXLrU4aLXbMnEfRDrmrhX2n8ezYZ5P",
  "key33": "4HBxPPRMFDCCzd4vqrjwLMM1WNychtY8YjEryZfTqDTreULWi4fjLYR2EKR34RWrWcM1XKWYzbh1MfK87ce9ficP",
  "key34": "2LrHN7f7phvQCb94qciqQLuFyoiuJoScFP42rrgDZsYfhaZbsEjGX5c5LVjKmXpBVLimwPygKdiu1vxoDgyPZ6BX",
  "key35": "42GVEU5kxLp5gMjD9BAoZdyJzxLeEmDnz6nnv615mb8vbaRaPBVtaAdFrG79eZes4pHbwTQqtp9inDYF1FaQNWek",
  "key36": "26cdqZnAPyiYQXg7gx1uXJtGuM5w5Smbpxi9XgTTYmoReHba1nTjQfb3V7jHKBjseicvaj3z4eoEQfD3puSitHWz",
  "key37": "4am5rtyrF9SqPnbPumyqijLAKKUXeA36ANubkXe3fZG9YcA5C4doyBPoJKrQ7hxFqigSws4i8NtV9QbiBSi2VNzc",
  "key38": "V9278xMtsrvEeodYZVxmZ212jZb2rJVJ4QCehyUEHVKoG3yaShEhzxK1iB2bVoteTXJ4ix7sXLeLz9Hh1Z3QjNP",
  "key39": "5jJeygjKSjc16VW6nBgNoEJY9m6NDeGcCVYCzaPsQFq9twQac2XAwA4MrqiToVRmeaLz3NFowGv1iFNTsvgQT84k",
  "key40": "4HpzsNgXA4V2BiuD7CfbwmD4H8jAy3dvHdzV4khWRoSCcpEN6QKAsyqC6d4J9XiAdj5XtJvnRvjMXb4fDBjuzVj8",
  "key41": "poomwdpC8KyPRjB8AcBjTqwYutihwpyUMPhXFBGEyhQJaw8kwsF6Hpw589sKUyeNCaxxKjtWBee7eyjxSV3G41G",
  "key42": "5rRxAbwuijCAtrVCL9dP9i3vj4j6B4kWzVSPnM1tvF6jhs2HJ5acXFttsndxWuuRUdhed4DgAeiDxMqBokAAQDjz",
  "key43": "n5Bsw4NHQTQpQf6PUYspv8SyDGveQb43Sb66GcvZGdncNPCcTRFqfm5dttWvyHmTB8EwTcHz7PnHWzX5rGgdftQ"
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
