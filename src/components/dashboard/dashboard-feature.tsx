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
    "4pweCQbky3xpnsHZJJDmdjmsSqTByAeNJipZfXeTAqZNhc5iXoSHJN5vbLVtjgewPH89vX1hQ6iky4F5rq1KQTfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8j4wosDHGt4nAUVEn1sUoHbXVXSsNxYEWMhzGNDdbmbNf2A5oHhWj7v1dcW3TRbmYKUAj8Axo3JutggwZf1g1J",
  "key1": "3rKnKqihC5vYw46ML4NVo2QYTKEKn8w24nkcyS21J293mt1uzSjKz2EYAbyXKTt26wdtK5Fr2YjV8qUmtV2CeHgE",
  "key2": "muMaMRz4gNHZnhHFwJt15soayWtswpy51KYYBNPpCkVVAgZHzBjQwhs8QzjzAQ2Je8nu6yYqqF4cruRSBc3WAoE",
  "key3": "36Dm3P7ZAWGLdZMnrvdSJ6uuhWcqDMxPK2uBGc8W4GqAn5chJMrWxdHPnudgUfgY2DHvFMLmieKD4ProwUKzrBuo",
  "key4": "4BmNTU4waHuTgK9qG8gza3QWYkYEKJBMyZoo3aQdjdMwn8D3FpY4Z8aa3HehrRtabNYN5V8yw1EMU9J5UHU8DcR1",
  "key5": "38ewfagKzUU8mFpZBWTcXpC3hmyzSqCUhf2jrjqTpknbC4yKXqRVBcNvchKdw9ecVEWym6WS5JAFKW3jjJpkcnFY",
  "key6": "2gMt5Do9Hm2FvJtcbpy5N6z77eBcMXiYLA4zMDNMMSox53b5Zs8AgLfbD4Qc42Ygxvu565DArf6SkmYGny7K9tyq",
  "key7": "3Rfg4t7bd8N7kiAEh5XvBWNbDXckTZHb9DwPvdC1ZBhS6HY12GXc1nvF44ypPxPm74EvrWwFTDjtzPEVgVxGJ5fp",
  "key8": "5SMoxJBM6kpTGBb9DEbDs4uHYNfPWtJfMdSepdidFq4c5D5Cjh9N3m9qqK6dCe2P4WBvSou5yAa45CHrSpreqWgk",
  "key9": "4VqSdNMmVEXKXzZCmHagRsrSA7YwL2mY9GvcV6djh1qfcNzAbg2xbK3ng6UVWSRb1yjez9JEkhSic2xsMkzxkgga",
  "key10": "2csQTX9X3cHa7Dpxvd7sVrT3ivcivpNqB5CKJbczAAD3D1VY5BT4trexrWkTJM83huAH47AyoCpW8FBHHK3KEjUF",
  "key11": "5THrkyNned5tukZ5LCrq8n8iNqMQfqGj1wnYgq9LczMvJW1w72pLhTCJpuSHhxkyc4HvAK1dQY3p9GFnmG57J8VN",
  "key12": "5MCkrPbSrTMV9E6nqXv88AbvieHKzQGpFCXaiG3KAHSuNyCHP3DQDasASBPQPpB3oyR5NNaYMUgs5dYK8ihamkbp",
  "key13": "2AMyvS2AfRdW77MLJ8WZKozmi7dAvNni1s4d8co5QMJY4seyrdTTwkJ5jw5JWVTQWyKuvGnihTeiMEpe3uEE2pU5",
  "key14": "4Nqv3AYjMkbf6x4ngbcXeSotPqSQ3AzGs5sujd1nJ3fN3dmJKT1fpb8z63QYxTKBCfyDR2cr7CETjN9prAAfDjpX",
  "key15": "3ocVbwKVaaYbEQwccZC9d72oiKt2WYNiaVAidr8E8K1LTjHgwP5sG91ewkQChzsWPLH9C6j5nfY6Gwq4e7g94SLv",
  "key16": "DUEEcqi4Ur7UXVQJa7RdqDNfpb4KhkSLRxMR9AajMCvSEno3pLboUAWRtcUc6YEkShLkYKxkhkvUEqyhxMvc1cN",
  "key17": "31zEqgtd3povmvge2XJjM7LKnX1RkND1U1dxFAjpZDjESszVRdtC7ZWJKHtCuaGB7czVAxb4cT7ttiDGak7VfLSf",
  "key18": "3GfCGsCU2XtGNnZSZ2Fvp8tBZXXwcABPayBy8anXh5KAUt2dc7sfCHjbPWBNNdfnfvaMx7TpHpo2J5x841u99ZEE",
  "key19": "5fcbjCLsafsQpvw5oxEZWT62F8VgRaXc2Mtf28EbiXRfHHtv7m5ngawNwMzKtWrYeN2SfJyczo9gotxHtV1Y4ysH",
  "key20": "39ozCjpvKK9XqJoX3sAfM8mjJ1MTLPQ4BD3Bx3rrsdotvQu3kZebMPuhkQFjsn53rHer8k2GfYbqvon5x6bZEjgr",
  "key21": "4HiZEprTqS5T9ep2bQ41gB6KQkjop1MZFyQ7TCjuHuFtPNbGwnwUQ5P5apy4vWv16WXSdcdDaBVHQYXWMH7kwckn",
  "key22": "5YqYTLN31Zbs2KbbpTZajEm7Du8KFa1mkwfb6ZyySnMjM1rP4JxABfBke867cuWpvW4J5LjsT499yNHhpAHuauCp",
  "key23": "66rW8ttd6Eb5GYoo6yidLkeSv4NwNstXXo9N4GsbCSfiDgEjkfteBsdMQ9remF9aFRqt6t4jxTJkirSfbZpxjh3W",
  "key24": "3Dot9TBCRoz1C3q4VSTfcnmuxxAiGqT6AkENbzRVrfnUNC3JMUwCsujhsoTRvCQqdeTF3LrTmehto78RE27KuiTk",
  "key25": "kuf5FgphXbtH1bUiKtBJ2EJU7gqx3kSev8ixD3dsTL9ECuZnJuTgh915rHuSrXqRNCB2nXXUvhHPy8GL9vkE9UF",
  "key26": "Y3tUJwEfWcAbxteYisPmixLH2n5XAJYWXEEZ8q5XVbj4bvacGgJCmzdfYhCBJC7MT1xyoJ5NkHPPZTmdC1CngJR",
  "key27": "H6WEeXHGryMknsBGKXeBaQdb2NDxT3EdCRAP2vFYvfCCSwKMpHMmPdmKXDPFhanrKy3KFz8rTNbup5J5PGLW5Zy",
  "key28": "2eFR1mZH73XJPsFDWwxLiqjAuy5Eyfuu9wcR3xUfYPKnXieRXibefp2PaS9baqVg4Pne1iUCTd77BcDxBMyFjXrg",
  "key29": "2ARMCPvdU5rRHysLZ73JNhbAXfF2VqoBx9L3RNswhjBKgvPXBWKSvLgJsZ1xrZpYpMsMPo66yqFafJPoZpqebkgR",
  "key30": "2smLtSV3TEmw6UkZL2S4mUVs4oCbRcdS88AdkcrmJ45K9P4WNx8HRQiLJBswp1JJuYF5xTv2mTmgoK2r56Bsp5Dj",
  "key31": "t86tYwTFZztyCvmoeqX2wm75m5sENJP9ox5VyUVzVVm9iwUC6XHpJuyBgTWhYqRmijvRjef6rvTTXxiuKWpwSN4",
  "key32": "2EVEx7m8GL94toeu6TMSkgk9gJCxmVE8gQPTYfCNx5riGe2i1QCTZ85SmBhqbbXMBh8TwVzuu85g1xTAEPoopBeJ",
  "key33": "Y6aWJrm2B7h5E9mMNK43tDu1eKM8u8enJTBcUGjVZWPqkyUhfqx1DjpwoX3giBCyQ1LBMNzijZVoKoGm67Ppnna",
  "key34": "EfG7VewCYJ1RmogMsxewsmJTFRyAKXVaRoiv41dXZ7cs2oNVZ1dQmHVBWzUtLh35s347a6r4ASXKZ3PjbARferb",
  "key35": "3Y7hr22Trf8C5Pi26B9QDTLXHqu2hQKeVqLiZpCNH66LvHSw9JfMcznGr8vcYMg3fmFNHkUnrfVPLAvse1PxA4LY"
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
