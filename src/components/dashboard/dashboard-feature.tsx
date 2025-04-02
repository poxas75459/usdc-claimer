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
    "2pk9M1y7pj6TtAeoqUpG1FjUnMTccJHeVeBPnDjWxxJvsD1XPYTSJWUj5KhAss5HvnZ3gMAJiDCaPvTWp7q46r9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmfPhAxCFmaQBXXXrpqusubJtywJafjUJf7MUJgivu4zNLjVFtC6jxgVeAFjBpt1LsAU5smgie3VepLwxbp6SGV",
  "key1": "3xP7wmzV5w3mZA9pQ3i3CRkh9K7tvBJdM8R6w9h2fdkcPetRaZSaaqkszb6RLuQjWZ3V5xxeM9ZY4hiRS37Dj8CB",
  "key2": "3umtM7hz2mxqqNumKHPTy1nfgy1RcG1xvxEDNLNfdxZSaut3BjUSFpqKEM151e2VZEz2RHoLJWFC2rn15TA4DGpN",
  "key3": "5B5EgxrN7snwHsfygNFFPrCAV6X8VYNBjt5dyQ47NmvR4NgN2HiDYJsKMkYCwBZ58bUsyPJczfJ3SVHitMeCchX6",
  "key4": "5KsqigiamoekhjSbf7cZMkko9GMsxx3aN9so77ufwSCTWiPYMK3roeAaeBdyhF4kNyTtM8cdZn6648LXRoZ4Kft4",
  "key5": "2VoHZaZk9Z8rG5ocY6WHrpR7hPpTU9JSoeejwaz2Mtc2CoV3q5jN3HbH6y7qKEMaWpCrbAdL1oa6BmpcmyC2gvGb",
  "key6": "36Cy5YKj3oJ9KTeKFAgbmpukPCg1Gb3sQdegNyD8PtynJBwyMvv6FsMRQDjoymjoMRmakjtX1Yj1YWKBFUnGj6aV",
  "key7": "25P5iSF6ArC364PDncPCuyvEu7uZ11mkKpobgQbqrkLaqKHPeUvHvSibGGeZJikcy1FqY3t95qUB7RyzLbK3E59P",
  "key8": "2LaHe5GXVJetKCKDJytyZ7EzWMiqAnDYPWXqXh5p3rARgCxmugp8mLuTRUVARfJzG5UyT92tgZgYWXQyKuE28gjt",
  "key9": "5wkLQXfnSt8RJePTcQoePCFHUwdnaJL8c4D4RGX15uuV925pBGJsJiFT7VUtvxH8tFCfBo6CrZNutn5t6RYtdP13",
  "key10": "4y1swradxYuBSTzCWSP82NDvh84MgonX8UYprND3NnDUZpqyYYTvcY2SXEja8Q3A1pRoGcnsHyHAQUDqSHp9Bzyi",
  "key11": "2JqR1WAuJy63gLtrqCqNCQobFJCXbnuFs2Jmku8b8nLRQGNRaP4wFWK3xCxWyvasWBKUWHzmEcbZ4aMPaCYpxWtL",
  "key12": "3hj1yydBAEeLLACxb4zboaqHSBU62iF4hyaTQyKV4UKh1LjY4TGXGA7LuJksZyFj4eRZdwGqSoKtkBx9UYFRscvm",
  "key13": "ED2mNojqsyB4pJaeaBKmDPvKoko85FsM9id2koc83aTuhssqb7BftQ2MRVu421FXRVr1SJipnjA3M6bXBkptJXi",
  "key14": "5Bn5gXR3QTjFNkT3fCfUeXoXtxVrKDyXqMMfS1ty4r1wr3ndfN7hTU7MKtq26WBdiCFCCuToFzBPiQv1jVWXaLdB",
  "key15": "31JXo9UqCU7Ui4a5HkVoqiZxZwHnijUW9LmCjXSR1UEupf9cgGd841erKNBqsy6KpvKHDSVMunwMZCru59dHMRwo",
  "key16": "51fc8mw7L2VBXA1GfaxHdk1a1MorDGhGGDKthH3N4xtRYWwMwkBubhHidM2WrM1y7qKBh1n4ECt4M4SCdzpKq4jB",
  "key17": "4eBHDrRhJixtb3Sg41UNgc9ovBk8N8N7AeZva87PNmoVZNvYhNCyXjEWWxEnoQes7ym5SrVmjfwp3SF7B4SE8y5E",
  "key18": "28xjdeyqyDGPQhgSoi1KwHXZBj1qvxLxcHCdskNWKszYbahRTeteW174zRazzad74hRCwVCEJog8nN27XYb9mezf",
  "key19": "DJJVqYG28kSExSsfR2nFJsoBb7oBLAMyhn4aYpAu9kTwCc3ngxqrJXA19dLfDM3CuvWfTfVoCm6DNXa8eQaka8E",
  "key20": "4KrBnGomXSyZcUGWM9UyTnX2p9qxNQMixeb2nt98kPFXPneK88GjGmzjxmtGz5s7xYgGnAq1M8KttizRbTtqjVfg",
  "key21": "23DZhnWazEjixcgJ9zgA6JJuJfbhQxdy7rZeGhSaA9rN7LQK6xKCeVbRPa4HJdxLecTvCrueQJ3hCVX1BHJhpkSN",
  "key22": "rdYqbMkjXuFUuDqPEPBEWgXMDfZbnQs7ZNqbZiWiZKZtgupibXKtYspgcwgTkumGbps8KpVw6UqiHbnbF23cAQC",
  "key23": "3hvj1TYMPu6ZZbt1ydHZV9r8QFLtBuKtA42xwiv53AnZXMVosVBTDzZdmrHVxz6p6T7RWnXUdZX1GvUDoynqCMRN",
  "key24": "NPWV9ziLd2mPakVLZsk4qKbJgKjzJP3g1AzMnw5NdKdmzekzpooLQ4HM7fHctSzTGevVUuXuNDYAR6S8vHxwrqG",
  "key25": "2M4Ee2mGoeLqvAHNL8kkZpaao6Mz7xWiwcntJsMgmSmR8wyD6AG8DBSte3x526VzYG6BRE1AUbYFh7NEnJjEF6Zz",
  "key26": "4X4WsyZYAQxfat9c4xVAFQT8ZBXoaqEAtQjXr7K5NTGnjWcvN23VJR6CcEAQigyG14rh2vLWwxiV55XHLhfD3tHX",
  "key27": "24jdmnoMtDjKGY94QVwaCa8bqUsZPgv3YVWiEryiSA9Cw2ivnowWh15NweasAYKyUtiqrhvcjMP3kGAfkvK9ELnH",
  "key28": "5t6mxCzZHjmTXdmDeGTFBRV8ANcPSxGz5tMG6vTs9qT67gwj34nxi5jt1YsxPUhPhccbwosEDpAzG4RFwSR6mpTW",
  "key29": "7E34ZnzNSm7NEafR1JsyGWzSxvbF7VCnB6oNxSW2xHCZ7UjVmEiMazYu2x5tFsh5yL2Facj1hr4ZPb31cSf6B2M"
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
