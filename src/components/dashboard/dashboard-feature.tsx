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
    "DYHEMdei5eza4uitWF1naGaPxmhZ1vYBwdRvdu1CW623EScCxXFHSgEqxdx3DcjUop28mKcbqKwzsdcPyDUzycN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtMtnNRkjEkwudF2R5iK5vWinNQEnGUPfWHAfPPpvn83pmvMvtVfoTd2PCcuBrB7cHP93Uu66bmZu2NAcPJd7Lx",
  "key1": "5TbAwiWPTe1FVXyxV7suP29VqcoovrwqVcjCd1VSE2TfMxUuwu2yg2hXHku3oS59kgAb5CSaQ2cr8TjEAWtVGSgK",
  "key2": "4QjXv5GCcBFKg8ZKjo3PZUwM7ZQwejQsabyGg5h8CdoSNZ1BYbee1rsY5PPaNHegnPBvmSgYRZqnbBwKt72V4Kyo",
  "key3": "4RCe11eY6hERdjKXuzN3nPHjmK48o9ehxWNUwfF1g9t5pCrsFqx5XqrjggS39wX1fM74kSHrJ45Q6JmmKP5gFfQ9",
  "key4": "66HpRneBZ8Dgk1F4oGx2Wj9qtCyzqrRHf4fHo5etGjf5uo67U34V7ajw7QMtyjUnhtBxLCyZRSKPKTYUF2K5Bk6N",
  "key5": "27SPhSi3xWx1qnnVPXkRNpMM122FJZa7m4XyX2DMyF1wWCh4vjMMHAmWz9SnJ6NbjZ1p3MGBeNNNzBSof8PHktHr",
  "key6": "5bKCAPLorDB53MqVVfYCgsMrDv7Ud15EscWK7f3Ydvmtk3J22QRw4cz9voDVod33cGgEYEUGoCzSBCZ5bg9fpGvE",
  "key7": "2j7Ea7vDXqcEhW8MP5NePuvbMYPkcd86UebXHM4N7w8u2CzvVQPfnVmCJWRzMWsjyJqHjYFX1ZShmeMBFkgK72J8",
  "key8": "2aPzbhXj4PQy5fZSBAhUmvNqL8aevTAhZDhoJfrNvQEXr2awLMNAvXzeCaFJm7DDD4psc7NiFS67iNFR42b4GCZh",
  "key9": "4WFJcsYS2j1u3fMsvUTP8vEW37r1bCmgMmsr3Kya3DPdXCqLc9YMWxKNyiwfjiMCZbp8REQ6cDy76mv7H3uBVEx3",
  "key10": "DmSiXDEiEyj8gTPUWUQz3YGfud2R1jbB9UTVgbEiubyxPMKLEm9Hg4rEDchBGQ5sp6FWPknTLVWTFJn9PgcepAz",
  "key11": "4Pkm9d1j9cSSi1uuBHxTGDAVinfGAT91bwK5EuAuAyFizmrjksQkhKLN965L9WXh3kjQ8x2mCYsdAxxCLaZ2ssxn",
  "key12": "5a3iaWHRtmNXCrDReSKevDMy3b67HmsFnQHo1ZCm2cdJomji9zUzb9vvJPf5151qe5iQ8srMiK6DpSEET2vajjSD",
  "key13": "4jX9dMjWbUE8LTiXAz5QgSSaLW5dtd48SPGm196CswFujX4je2ZKX2PBubyy17yX2Dh65Y2m8ZiokFifJpev99HZ",
  "key14": "5q5hebveCmEWHc9tHTpCgz1Vg3cTABLYSKYtC1fBwYpzdj82mgUvgMQkoNmH6KzD1EzxBw9KViK8zgTeXQnCXpjC",
  "key15": "4VNDtWewgDTFaMRTEsgNFe1q3S2rSvH7FojA2oPkrQtF1KWXJdH9KqWPnGWfVK3SbjjjdRjrCPDyD8r5oywvUzPw",
  "key16": "QTQkVXNZ61Dj9bau1jCM7qp8FqbH6GeGwVAos6BRmZr7oXxo7FGbZRZr9c9pHLfeWbWFS9oRxYuSH7K8h6PBsFB",
  "key17": "3NWumwvyGZwuwQztZSLxakadp8ERgH7o8CrCCoyJfasJEbDoWUtiPAVXsXDvSzGaWGDiEMrUjWNKBGqa2rAYygvV",
  "key18": "3saq1vYGLVa1NSHTGStPwW6azYP58QZqdpifSRs3HxPtkLQQFA5PC99HPepKKb1R3Q9cGnDutL1LuJQfbpeAthoZ",
  "key19": "3p1jaUygMe3Kt3bJ8whYkmhW3kTMZJqPXizLYRgMjMgXjYxUxy9Gc83ckbKRbkwgLJMbgRoSq2ErPCJS8AWuJm1C",
  "key20": "3131CMNdnHsnEUKrqwZuUspPZykbpJLMGAUvkhVGTfpCpM3xVBRVcSkfeAKbfBQvvraqXm8L6oXY3d5YpY2UPiTe",
  "key21": "3N9ViGorgQDXzSAct8X4duAnac9ExXwfDi9Hz5kH5rURAHYhSuZ3mBkutYyTtARpxuBzV29AyiQnyNcNcGGKaVhV",
  "key22": "kGoDSXtxM3w1v8YeQZLBvuDhspCf8RJZBs8zY5njQz7CuysXq7sfWJgPfhMvbF8Zwr4aZqaQs4kDKN5Sdi2MJEm",
  "key23": "2yGHMjpJQwV9KQFDT9qfsFwL6iFnHoYJiFP3jeNVPUmKJQHNTrWs81uvE6tLv7Z2mGMc22VXAhfuRPp1VwunsnK3",
  "key24": "5LZHTaSdjEQ5SCmuRX3rNyLEKWJ4Jz8X6KrxfNuJskVLVsY3EVgkpHAVtgTVyWNcKHkYSErPGpsi8XXBfJ3EoYwd",
  "key25": "3UDHmSebz59pB4Fh5aUuBAvSPepcn43sWqLtXNmVsWDfyimZmpDKDaTiaxfNGebM4KWajDVPHQqNFPrYazrNJgeW"
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
