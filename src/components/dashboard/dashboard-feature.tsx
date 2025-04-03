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
    "VUnAW5wUrUFVY2SdiS9NcELpq2oWuvw439wez4k76pKjW5LcgAcvBh42VWu97Qi9VEVT5eUo6Z5oeRjnt9sTMPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51yfqkyVx13X6U5FhPrbxvi4BcayucHSz9XcNCKdcuUpRAFxH2q1bixXYRdVTZUNZy2qUczZhCba4yyiDD9wksLN",
  "key1": "3ecDVaoW7kCZni2J4ZDyxq7kpYw8Rsf1mWuUvuoQwfz9ZBrSFCHdWMu8M7pw3pMwgvsN1pA7KpzfKMyWECNZYWFT",
  "key2": "JrA45TPCe2AUjebAqf4QF3SFGoKbKQ1JWw1uSN3taiSxcdezVrpSeWXm3zREZkCCtWJgWiYsSq9gWN7p2Dpg2yw",
  "key3": "ghUao2k6AjN5mo9UoFA3x8A54fcE7M5heFJVx8ZzqoPNMptKdwayCSjuPPiTc1aPCu6SBhBZJxYURE8zuvnFxtc",
  "key4": "4X2AczL5Z48QrHhFpJZk9wd943X82sEpd2goW7iFRqPvQPUi5p6A4r4qfYKXqxRpHCQHwx6X42eWuGMhyHUC1WS1",
  "key5": "3JbKPVztbHHArfroNWVSkBvEyouFwpw7EBbREr8JA3Y6uhcVmRJzYkE44tJeWzN3rgWFpsG38gPRoWFExEfj1k7o",
  "key6": "2GwovNyHfXe6D9pKauscNVyx4edexzmZ91Dv2Sk3QdDwUnmHoCF6Tr4WjGnFNKJUJzthpbCZrG1JhrX2pyu9rxoH",
  "key7": "3nUYioVofZFiHrgwqi2DK5P3ALCUuCp34b5SSM2fMk7P4kFBfsYmWTWnTm81pF3XDUfVQZvkZ1LQTWM4qrc8xGAw",
  "key8": "22g3LCU24vgYPgYRFyhFuWQozpT3Yix4rvuH6yX4RCR4UmHApcDMXCChphdUWCH8EtAMAHBCjhbJ4hGAzySLgM2f",
  "key9": "3dGTFQm26f2nKHL1DnNuU2TkMeN3NwcNfZ2va717YaRAYQoZ29MME88h1oWG2aeSwEMKkZHqjPezf8HaCdae6qRu",
  "key10": "RSD6YMEjCV9HDfnmDCog9W9Pmhn2VNVyaXmN8oWqoPe7DAxVZbfWF9p5haUExWuuk1PCTNT8QcKRTLZvAxDVpBi",
  "key11": "5eNxSfjnQ6EjvCVYBhWknJjBQBAQW98Buz6x8d8r7mU7aqUakmxkvoitzTrkvzC7gXEVE9dsJP69rPHLKnN9mV2Q",
  "key12": "4yCyJaviF5MgrVmJgiG4Hnw923NExVvAbRG123r2ydtwadh6qm987zceH52sNnGGsAKLuJd9BGRDJQmvb7LBMqWs",
  "key13": "naCDgvKtZPZsR9sgggqQqZkNMu25JGH43hFCe9GTUw6BrREwnBQNYiDvc1NTsEaEZaSBGT5iVriukfW9isNKH24",
  "key14": "4sjSXFnsvzy2jnpVLHVYsoxJKz9Ku1udXBL1oPtqocnzAHtPdAHUEQvBHpLkcMotBoAGSVLKyGjJUSsfQJwWeDfD",
  "key15": "nTC6MCaiycLeZDxZ3Cx33ftjoWRAZQZ1KMi2CGbbZWrM4YoBZy4vrhYWVn83NcG8v7M4RaQESqt59TuRcsn2cDY",
  "key16": "3n2bfsBXBEA8SEZe4HUHJhnDZVUy9aS1cAwtweQoecX9TW73JTy7cqRdFKQ35pVMTsBzLeH8Y1CSC2Sz35AobQP2",
  "key17": "3QSH141BKVeWgoKaPUec93VQrcxABEB8sbAw5sTJZkHhh1LX6aVYEsJ5U1xB61ebtPbCvwGG5XgGe7rVnqj9Nid2",
  "key18": "4kEwHBV55o8Xj5EP7A1VHAZboHh72ubYZpw8eJCVcmUTG21MrfqY997Q2NtmmjmGgHM42h4CcEtr7pQFEdCyqfVJ",
  "key19": "4HDike1winCkkNUFnFGzH4zB7jbQh1ikYDgduKtK8dHF7TV7W4RD6ZQCLp2hAoC1APaYgYp1eXMS56ZQAxHytiaY",
  "key20": "2zGKz2X1yTbCeuDL7YRNR348hfGcbnAjkSsFCrjWsPvMoY9J3muZW5m466NeGxDYiSxfdsFdz3Mm3NkMtjcPnqC3",
  "key21": "46ugqgLXY5MoBKQwf5PzKAX26uyV1u1xDX3vitBVFVwQDtrsmRzFjBnYVzrM1iAEP4pCWHcVXeVBd7BDhi9a4J8d",
  "key22": "5L1eotV4DjHrdK8dU79vAHxbPNWnStxcJUgY2kKGEF82rJVALWv4DdbFj9NphakfYeQpbHawj18FJjxNtLMKAZJo",
  "key23": "R1E89dzzt1YYEJvQv1u8PNeeQpmnwXNKqnEJ3dYzReXFYJeSHKGs7ZMNyHatRArxtDn3VNWiKWzqztuzmBPb5qQ",
  "key24": "5yRvW3DJpuy3tHp17SzV2Gx1kJvKutNjZ7ERDU6AgMzPk1Qa4M1infWaUVWDiYyRhV2Htn8droNgE3k3Kz6osZnW",
  "key25": "PDcSwaaDd2EuR8ikFk8bYj4mpyuAjksvJjvng2jCDbPJvZL5fVXwuhSBDtKs6e7RakuGx1YTNRh2DAu9UpWd2as",
  "key26": "3UYd3FCfwpdnvWWrVntqtGG86b5sh2VGsK3b9mmvowYUBqVuBNz5NosZqtmn4miExVRFp7sxnCZXzkF7xrLohp7K",
  "key27": "33fKyePP3JWbWyyJuVRRuNhVFJZv7mvHeH1XNdYPoSipf281sqPXCam5awbK7tm6muDvCwRmrRuXeXzckcn1rywZ",
  "key28": "5ayMddFDsqJ5UcZfPLxyEBtENXsAc1GS2QPjQw4z1p1Djpehk3QzpKyCvqDAbRS5tbgTRNdjG5Zqka291dkyD6kS",
  "key29": "2Bo6nCwCSu2mdsuRTR3r5vVeNhgFj7LtmNLFk3KQWWawVwvTrvzBWfyaSTRGHFcYTntxyynUj985tBBJDBsMo5bK",
  "key30": "2sAH5QhWU7ALozQUwPdqEA915jkaXzv62urs61385YXzr59V7RzE8AKpauZpKmJdaSrq2txKBbADD2bKGkrC5eLx",
  "key31": "3BPRynbwBAddvRJ7ucF6g2jSBa9GjbWCb9jL6LKCpwfgNWhX2X1n1pHvfCw4HmQ1NtoDwyDxNoxdxLeCvBHWD3uN",
  "key32": "5ZEsW9QgXc9wnVmZuHRXMqedqxZ8ZvxBgedqkpLWY7AiLGhcgxuQJ9azmxJyuapvJDY1PgCQG6mnrfngHVNnrAcG",
  "key33": "386myMJ3JMLBnQ8sTMsHCSq924baUN62hkFXvALQb9tzWGv52EDgcA3PtRSsXCWFpTQvouCRtirm75MJWZtoW45y",
  "key34": "4Zeq8ESoedBGKWCm1DT9q1BH5TU6B8J1oDG2SFuVoi14ox9HULDAKATbhhMofwfi3Xc41RtW3ZYyCjtEKxCeC48Y",
  "key35": "5Q7efCVz56cd4GiaYATggvqW8j9Co3xqmBBZu3GWhioycjBt5bhEhQKQvYadnGYdPK4ZZTfKzsi4YdSmYfw4XDu2",
  "key36": "2U91CHnCBVR1LmfEa57ppH3YKC5KYDPCdtEeGCUSBrNzPAjT1gJRGzYopqWQswu3J9HRB9hmyBzXRSDA1C9k4GpA",
  "key37": "3KuPz2GB3SLNHoAE18Ph5S2xzb1zgYfjbDRL9jPseuw4FXv1gqag3v21tBzkuXjbYGesVLfQDVXxeEGjWTjx4mqb",
  "key38": "kS1BcNaAtQqQoqK5yZfqK5FSJZZhiyx8YRbF96R47vsZ9etWqa94NWAbNRXtZH2TnrPp81mG6fdrBq2DtiogoWw",
  "key39": "now6UdCxGHeEZ7VBMSJwkVTLQHSTaWWoaBZYRNifhQkbhL2NBYXrRpxZqR4RRVV755t4kAh9LS6kpfXi2PRsUCY"
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
