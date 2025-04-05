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
    "MoLyUYiQxKZiNAUp6LngkBf4At8kAECFthbW7N92VWmLizP4wjkPPcAQ9SDFba553ouY6zqEd6m2xFY1PEu3kit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PfLKLLxVjDhC2uqh5VS1GoTSF4aJp8N2RbNs8vtayVhutoyjuGAjLo8PnUXKpyZNX3mNW6Ng9E4PouaayBBmZpy",
  "key1": "3ERcWWQKvM5pBAtR9nKPhtwCsKsKgy3i8FLFMoyVUyQPag58fGvV4BHym3NGaxL3qi3KxoLxJLNR7wCrwhot2SGX",
  "key2": "2dzh33vsoasymHpuspkmLVYb6pu8jr6qqtUb8RL8PpeaCu3ssMsjEjB4z1Rny1ixeY2RZL2LdzqNTntSmvf2fFmQ",
  "key3": "3ETE8DdW99igv2xFb9HRVx9ZndrAtKEZ9tye6RbfPrK1P3v8Ym3FK6pVe8nyN3ktQBCDQxjiFzGhjymfGcqo8wCX",
  "key4": "3rP59dwKWS1KMTK332uZexg7ksfQVXKWchVhs9EdH1gpiKdfJsSLqxGPiheGKigADyuXCPDaWbz1Q366bFDj8krx",
  "key5": "61X1TBGymxa4i8obKVKAVgQLPYifwEJyyoHW83q2uidKPC9JQbYmoo7qcSaiiXKiPRNnsHs6EVaCPmFQTiTqu2nd",
  "key6": "2UQk889hMcYLrQUFsLE5mMZfCrJbEBC6aorTkGvFovHJXHDQt3GR8kcUV2AHUTaG7Np7ASaQkhaVGiDbf8Jd5EZt",
  "key7": "3K59NfDeCjUpRzrtt7nqUiWsq1CzVgrUeAA1WZSXphAeneunouPH34E369UoBvpe9cCc1wgEMZAzXEF67NLazfAb",
  "key8": "2iE7dt9oyj7Th6ZYaj8HQMUuAh5efP7n4nuoATPPrworivf74srXPbkLLALHyXdJbD2r313HdP7JNyfwRiGWPboL",
  "key9": "3ecTrVcmdqMaoKcd7YuKtxnA2MfFXPwpuVqoq9rYsb1y19rbvxqNptVrenam8czyRRF8mcJtzyXeegg31Rg3XV7B",
  "key10": "4jYFb37YSqi9jCw3ZTvBWDVHuxUGefLXjwkbQnbD2XZJQqQJ3reCwqZPDtayqYzWxp48V5pxzUWPTuPQWcv7xHvh",
  "key11": "3JCbHzhfdpsxCxk46svUsNAvQiniuzm6LXZfDLX2eMsWSZFEN9gn8wjLJNZG5kCU1SsjZgAhF2JsNemWW9YAivbf",
  "key12": "4Vam9SCWuP5ftKcA1uuuQvNmFVpNa8746uzuksBVCoPa7rn3khFoqygHkH1dDPrCMtP2KH7Uva8q75MX6fF5hEST",
  "key13": "5jF1xtdaMLM89RbLfyJSxTTNDpSX31jym6U4W4eWwVM322uTej1NA2Q8MMxbgttHE2WfKqK2gHXqZXqojvMSG7wA",
  "key14": "5kcS1wvGZPJETh3W8ag7VKxzao9Y4KwpUM3vomnM6zsziLbfvHnVdFLhbM152siRNhBaCXvbvvGzKUXM2ccgM3NN",
  "key15": "32x4qpr7NvT8bM9BGne9o1yhsPx6ru2iF9b4d4YHjhGdQiRyjXUGsvRT2yRhfDA11gDHTmvq3Ti13MgBCX96r5E9",
  "key16": "3Lx3xf5BvVoGUr6L5JXzso4RmVHMUbF81URY4pi7vwSjhavDmoWt7RGWG5tY5jANsf5tLSiqn2n8Lmjg31MvTULL",
  "key17": "o52xEFfxLkNCp9vPkXGhvZ3QGmHJ2bQervBKapZTG3rYxHganJy8LdgMVfaxYPySAQ4fSmzqDNPjjid63ZeAsrw",
  "key18": "54799SUEKJXpEMr4ksBccADHjCZ5kcS4viyyHzwHatxKDF4mMbW3SYTkxMQD1ivfaRG9gvvTdPpSRXBhNofSeQat",
  "key19": "uAJBwBHyCxbkQXvA7KzwwZePDtFBxbmzXvTtfA1KN1jG6Shka1VYkm9ynxjWdsBWhF2DmiLpE1E8qQx5RReh46R",
  "key20": "bopBsu12QUzCTCUBSYrcx8kvvsFcajLg79o7Ua8GjzaJnWL8Qe9JKcgAtSXU3T3KWtsd4W2qeCFcoH3QabLmzJJ",
  "key21": "3R6gXcGGEJJ5tDRTvMDuJ2HyZXHS4nYXGuzCgMX5RbTB8EqHmbRURMHc6PFQCoLyWB67MKQx9NrhVpzEYte3FQhC",
  "key22": "3DnSz1pS9ptZxoSzv8pZaEXxq8Nmr5RqmLcYto7wpPqQrAFGxzYc422iR3BeA8mLwHXTXQVf41mTzQmHL6LJBkaB",
  "key23": "4u6kfTkVndQNSLvWddDPsoqGnYrJboKerYMzir28kjEqXDvrYgoRJbM6mT3o8ygYdmurwxmhF5NWbg71mGYcLu7a",
  "key24": "5DDPsR5UJmj5AzGKKutz4dNJYBT8JxmWqQD1TBStRpjTAfy5jNtCow8zNLcdg7JPq3u9rA2fRCah3U12tAFEDmmw",
  "key25": "3ZAHzK69LTnjhAECEy9SNsKScvVyyNecqFy9cVKPxJCzeUe7CP3M8C9u3E2ogd2CxANuvWFZYNKRAMc84w4oq9dZ",
  "key26": "i7FCsToiRSBMgfdVYjM2SFkSPsjcbc3KYEbahoVdyYMYGaVxZQR51W15D7UP9pP9jRFUKjz2ZfbuTVxVixTfE5z",
  "key27": "45FQCBW6cXRg8ZYW4Y3QZ6DDHNvQuwAPDm8boJz8cWCC5UECqnMtvp6N4wtsHfADFHvuHgCXJ81EyUTEYfNsDKuF",
  "key28": "CRajU1pJMCmEmSjThqFUsVqeH2rhRyv4n1y6xcBiZc3KSnrarWSbmmo9y8PESorXtNCrknaqgMGcaWNGcXbz5N5",
  "key29": "61sDuTs2VC9PEcwpRNa7WPeoD4ngcMDQZUxGDDropMF4LJM2LgfB8H14GTAqix256EiPxdFHARhCwoB1tcgUNDEo"
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
