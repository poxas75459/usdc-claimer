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
    "5BHkyQnLDXhJfsWtiyiEeUdrJg2MaUkAsKBYrXBLxfWQiZzCXrDi6H6CUMQitxr1xEqGFcyYcQZLwqeK8pZbHqpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9ApfnDHVdAkjY3aTLjLLL47McsPJpPVpKmnb2wZdZzPVGw1A8r5aTG71FC7vPdA6FC2rfmaPZHxKrXZvULLzH3",
  "key1": "2PkerHxbS5qoY3UroCLEQ7BBJE5G6u5xiiA2xFJK9GaqJNVnAEF85svegZYUXQETwTF6pSALDzz81XcUvgdD38jQ",
  "key2": "X82JUsMnQRJtLbvsBVuioEsoN3YgfiBRYKm3cB7bMeoCgjunJ17DN6zpJoucrvaFP6EDzbTJTP8ka1nAKx227LU",
  "key3": "3kPTMng68Xunk8DyHDKJdgMXBZVu3CTW8JqcydHAZhMQzwvNXPSiEWKBDoygo8haS5yzQYPi6UvfHAfu2nUfxZ9C",
  "key4": "2366dt98QHwo9VWnk3nTQf4yrb5qUHejQLyrpBJ285PnBPjCJgM2AnVUxD1ibQdScrr4C4VNqnBdrbJTtWCitM6Z",
  "key5": "4YSwFYNazVMDcd6F2Ndj4ggxAcyFXD96wRRL1gmf1s88MVWWUjPs2sNWTccwotHCPjig7vhNSwpLUUo4ecALeZY1",
  "key6": "omBNSFYD35C1JCJEFZFuGcdLBbRAPSYWxDsqQ86ixyGeJPe4qC3p51NxdhxtQGj9qhrwHtYy84U6PKvmmEnGVMW",
  "key7": "2LpbBTUSxTpdpnda8zSXQfzQv4GfmXRcs4WG4kWsyWVvKLBPGhGF3N4DN2y9tcDfko1fmBBWNyJKR7FaqHtXYy6v",
  "key8": "4wh5a9rqb7mtJ7T5DEeqFmYuK4p7YxgDvzUafW3BfTGBBCNpR7E2R6YYsw7rWspVXKwPqSc12NjwEzddbpCYJvPE",
  "key9": "VBLt9oQVpSwvwdYzybJxHkMcTSQLgcqRVWf3rq6YkBYVzX77EejugxqEfaHBA8vLFx7ZEMbByHEW1mW1L6YPrUu",
  "key10": "4PoTC5Bn6wg4HVutajCN77csHLEeJ7D3nYwvr2PLs5LQFyECHo64yDGnf3XHdcG7SYeUE1xRraEM656RBeTZU1WC",
  "key11": "3dVWg2AMXz2PCCzEV7Uc8D92kSNyu2JvWpwexqWRm8E22DqHYRb85Pak4oD3C3yhB7S56JBo13tgwPbzTJMRXNE",
  "key12": "53PHGTikzn38swQ1KEnkNTv66Q3gE4sUEzw22Be418eZLB3853J38yTpGZvH6X4Jkj8tuVyDbygUL8VE6dZxcaBj",
  "key13": "48ZQi9VVBTnQMS16sCnUDEdiHDzMeek3PPNJx5zMuXVpvVaJecxKAzxuEo4moeFaZKzTjaXJTBxMsqLa45FvQFGX",
  "key14": "3BLaggsX9Gj8bHMcndyw4er7GKmz4wJJAjtbipuvRsNQH5qqpmnUzaueU3X4ihKYrhZVZ98LALrqgdvokfwqXmCP",
  "key15": "49g6fHAUyxDqqjDe5uQg2qEgAY9gNFLYnsH1L886c7A3ydYnPbnLNQdFuGvXJd174kVeKQC6ajVUUFWQgkUWBonk",
  "key16": "vzmgzAQ63h6xzfx1SVAgBJrr7MCE8VAVP1aq3pDPr796JqS4r17kkZemfK9ZMD6erBeDfzQiZo3h5pt4ctujAu4",
  "key17": "PUKJ724QmuKHkuu4261Q3nQHyY3HnUW9vhAmS1V9dLdRgNA26dKkDbKsRairJYYN1vhg2Mpxxk66XBeKWns3vf4",
  "key18": "3bnpMP1DCfSsSHNhsE6d7FWjSGhuGXeKAMZs9DzWBG8r8qBfkfrU4DbxMfPikSAt3gu1nm2fc5E9y5yP8zHdn3LQ",
  "key19": "2gAhVDVxSfazDT22PRNPM3LAJvtAhpXemqesZcVcAAoNDoSVMMPSaDrQiEFhVbBWphs5pdRfarei7iMH7rNn6bxh",
  "key20": "5oHdhC8hMi5AjRV4pLRBNqiH4HiapdpfF46kQ1mKBsNyNdVsSiCiSX9DKhK2hKzZmNfCFkYPcYAsANHkdRza3YRz",
  "key21": "5XDZYPViZdXDuCouMRgCmCgEHLooupaKmmrKc7QwbqgukTMJpgxzzdiX4iQ7BgiDZuJ8KuTAPfm2MDnXkcW8S9rD",
  "key22": "2x4DRknxPimTjvWxMjsyzvEUjbAVec69Sg8QBhhrXqPmWcuPGh8wM6yWNfqZmMsWkWwSmmZA2UtZ1LtAYsPpXAkm",
  "key23": "3zD9L53F6oMyBXWxbuXWYVeeZ7H4HhyvnmPQbTtu1saCyUKn44eywqq56kw6EFvKHX5Q7E5EykSSVnn5jkyFLBbz",
  "key24": "3igKDd6xdPd6nLCcpatHAPSTU2EoCodSa2A46ckjUbHos7hQQL9c1ce1g4zNeFB9m6F82WzyBDWWcjhvYNwAwDuY",
  "key25": "34cBVtiUUF3Bg38oc3bBRheBXgDp93bfdpGDEVtdZzjgzi7ArTNxzE7mkocu2RfCLRvdg8N6ZwpSU753AXywQKHH",
  "key26": "wLWPyyfiMR941PdSx9Nz5DzJWPoAC7e8D8tzh34xSVFtjzXLLpFQ5yWvegWeRwuegAcrR4xkd256wfn6mnfhxKk",
  "key27": "3bp8xbHXkTsPTs7VGhUyDeeEMrHigDq7PQkou4tVz7GxDcbWLQTodU97pjC3AXKXEzzVqLVnMH7rqxbeJi3c6SBy",
  "key28": "4hfhZrUhdokM4k9TPpxxdhyBm9gMhPPrWb3wHrW96m6Y1CHGPXtxbg3PAagu1koDKRtFVusSQt1hZXRoXywTuFEL"
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
