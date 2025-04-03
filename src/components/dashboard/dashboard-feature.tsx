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
    "4Wrrp8nLaWtFotaqXjvAJ5e1Ginv8aHi7z2eX7ZXgTKv6pjvWGEhbPkSubKCway5gFtZnzdGToXWhN722AFY1eJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bMS5cA2nSzjm7swY3bykik27U5bpSkTwkRiccW23ZVbw8fsHBou5gasE3FvAqws3TAQyKsD5Yu1aR8Cx6eifiMm",
  "key1": "Q94asE5rAup1VGegfcYwbe91nYm1fWybAcSYW1qf5F3izinQU3AweBkqxPYD8Hc7RDPB7X1zRRjeyVyz1fYYfQZ",
  "key2": "5BSzhntddV3yBmEtUebGeraTRT9eyThnZ2inngezjTD6h5RhZvGYAVr52VozjEKFeZHxaorQfWnyVqWaQpJQwJ9H",
  "key3": "59x9X6VbF3F2BHofjXWC4TTSJ7tPtDCDAardV2R86vRkE21Lev827wpTqV6f4FoJSNDxCLByYEkvhjsBQ1w8Lg8i",
  "key4": "5d5kibkC9owfBCQShMgFiWiuguSn1zhzudHZJEF7BbgJpQKHu7QauZKVcM8RDWAUFnyNXgKwUL6rp2Txtx4hf4fw",
  "key5": "3NfA7RAe5FS88f6SkVHpRj53j9Zt7opUSnfBdDoKemNthqXszeaUnnjYittQfgUYr5fH1SM9UTyi3ZNf7RtpuFT1",
  "key6": "2JH8FTQE8gmzNPVWgYDoJLQz5gatLqo3DdxpvFUjD34SydwNHn9Xr2YLvhRFwgR2nTxZi6Lj23qkGUcDprcxRnpH",
  "key7": "4EL49Htefuz7q9NLDU8urCt4PB6KjA1SnQyygtZuP8tkRF2b28znG8GJRQm22Nn5SSZVJuE2GU4Yp9NGWfE4tgVF",
  "key8": "5RmufaLeiLnDmvff5Yugpb9FP5M4jZNvSTTHg3ZyZMHNs23moczXowiYNM1DNiwabdUfcRakX5h7DMweaTD4PbRb",
  "key9": "5XqTpRdtvHTmmmCFccKpWnmQU1tS78iJw7wafReLUQnJw631epw84N7q1uoz1r6jLB4qdtfL2Tu4qp54VFt6WLED",
  "key10": "3qDEcHo18HAokAbbPce12btdUZRwK8ThnC25zz7Y46wQNmqdDs21Twu8up5S1Y5RNDaN8MdsWiUtBpKa8pm4s4Pt",
  "key11": "BNMwoogbUmbDQZ8GEcKDqjm35VD87kQnRt2Lv4K4ZvNBy8i4DwkBSexrHrASQucXRGN7GfPXnSbWKESBvZ8n6qk",
  "key12": "3v4wfKrt2iKbTq2v54D9L7CxRpCjghawyPrqaFwNP7MSQRqWLCXqpQfgtLadKbzyDhwtj9RCBpMqMdEde7CJHnFY",
  "key13": "3fvJbViPA4q8N8DJbuGfKAW9rZmqDokzei5g2bKBY5P2MGnzLry9pYUj1sqNiaES5PyDicR31R38eJgEhTG7Q4rW",
  "key14": "4Xei47CDYpoS16EUrNqC5i8MbxUnp9GjaqZVnyrmfSUSHch1zH2VUXokqWSkJLrET7pQcNaBinZmCiJ6yNwnnRWb",
  "key15": "5RCYzi8LYoZvE5qu9F7dbH1E9ckARL9PdLQxjMfeuYWvqr4FWPVLS7keXFZQ16rWgGFVvk1cp7M86zAiz5dDxxAY",
  "key16": "64AMS9gBah4v5nLfcxuQknNzwCxpJLRJZ9GZDZkJsuk5dM9rSdCW615fteJrmDL1jsbRmLfgNro6QFtsEHS8giVy",
  "key17": "qzxNBgRByHvnr4bBfEiX5RTy8tPTpxCSUSiGc2zhcAZ5uAvhc3HwTRxT6gM4jtMR7NoMiAzxBqa4z7TMoj11C7r",
  "key18": "4vyCdNHMogC9MxBd3wHBz3tWKLbTi8zcB8AtnExn1miCgek33y4iF1ZeUyr4qnVmXoX5UMx7BarYVYmHDC1ebyiR",
  "key19": "59uVxxd9pLSYaPt8gHPunxzAryAbqbaaSYdCeKBz33H1CBfcXYxzpj5MX3X2aBPSqjga8eFSQshPeFWHV6vP4Fsp",
  "key20": "49TJzzWg4ww34mFLptUPLwJdXvXpF6Qcs4GDNTEXuzSQXwDdLLaVRjsAfQsNmBSwXHF2h5Qwcyniibyv9R6QKDDt",
  "key21": "NXwKKweW41x3UREyvqQuEsQ3Jb97Zi27hPf6gmNKniaAN5Jwy2V6DfSj5sPpBZ2NrKGu7k2tfzjRuJkcVi11JAP",
  "key22": "4yzdBaCpdb9RiR67TXdaRTyYCWaJp47YpFo2ezzto1VxH8toAXCP8ETRMtHRmJfJeFPuZaCGpYPq5mA6uutMoHqj",
  "key23": "htr2rZ2Eacew3wVzEr1pzzcCLLSKYaekcPWuBvLjJbPthyjouBL2bvx2nGJDSFx5X4RJL4V7qusVrJHwvFMBZV8",
  "key24": "4CgdSuKvMM2f9om5mLqV36t9PkbLjRFhnrrfnvagxPbVLuJwoumyDfypf9ygoEv578snZfVWuCUAvSAQi56B3B8H"
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
