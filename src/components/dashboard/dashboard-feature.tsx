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
    "qXr3c7vLec6Jfrnuj7pmY9DymkeFwbPAViVQimMtALzGUkZBwc3cct4BMZyXbtrimFfDpszd3nqsGqzPuB7Pgid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J2uTR16cmatfuqSfnvizjpYEq8YAWKKicGgNxrHuvjdzXzDCMzxnABJfBUYWEkSZFHWkpMk2aJj4fuVoDCZb4Rp",
  "key1": "5mk4PV9ngvzELfmuK2SgaPKeoQnPNLiVgJVUz8JJ5h6d8UuEp4uwf8pgRR8uSp7Q7ZCQAQWRuk7RhnevHoTWZMjY",
  "key2": "g8A9kHsUqM29fD4YRatwkh2FjmC7J6d45ctWGtPNiJygoLvaxoRL2iGmJYGoH12BGBvjUuKEnqkuoMH6QaznweJ",
  "key3": "4f1rEgdZxgVoD1EKo2jb4syy8a9AmoeyRxfqP1mNDukosGc9kuiz9LpfztuJcREACSMeXPuyXBD6KDA4keaCL2pY",
  "key4": "5Ag1iqGeRx6nfkmS94fytUbFgAQrHpP7AjckWyNaNExzaRM8sa5GQQDJcf1LqFxMewZfSrSuymuTciUUZGuPFW4J",
  "key5": "5yD1chAD3k7BRhVgVc63QzhMx5j8MtRALfi2qR3FNHvk6XviCjY7SvrraDAP2YYZZst1tS6wx7y4Msn2jQ2Mpx9",
  "key6": "28bU9fjvk4SnZtzkBioaf8T9zHH8D62TBsWq9VLrQZQfagbiJzzKZ6cFeuJj1QPkquCNFFhY9HAXyDmMbAd41PKK",
  "key7": "TkX5SVcD52KmLTCpT1VjbP7b731E3YTVRrgGy5bMhHLPSe73XGpgEjorQZ9doCwTEXNxH4MQFny62Vxd2HG2kJh",
  "key8": "5tdFUs37EhY84BzNaq9dQ7Uu6sovzgfdbvgdzofQZc3MNFaVSSbpJwbzDMtgCgUJWcE7qvMjyRgUDeAPV1ZFHBkt",
  "key9": "5Qbvbayv8gs6fKEHdF3oTa2p38feYeXkcs8D843htEB3KWPBgFHT2K4VdmntJTR4BrjPE2RttRjSTQyCJXoiDyyG",
  "key10": "3UHbsiboaody9zxbCEwTbZL7HJedHu6Zgttak26pNkB9yEzyjFXvfPWAQPX5FAxsKCZW7K4dPPnUcqLaw7SoBaQR",
  "key11": "5Uykj9KDiSAxgq5ktHDXxe21mLNYRrMBAucoxt5hmn1DUfD55219Ss5znJNzmGfG7LJSP7eAdPJo5k5euCsYNfsD",
  "key12": "4xNqhyfoFaPCN1BLdocooVKb7nD9CVBU87cR3yZnwRfL4jFNBSXRpMib73KUhWreLXxqNenJrJfYdJeRgmEW2vuF",
  "key13": "3EP8vw534ZqJXKpivkFzCZJYgidkouDxtjqMTDbiEJT9YsmMyMpuzoP3ZcVrvSajCfMsMPfb9LnQmoxTbmVj2mqM",
  "key14": "NCR6vZQL8Zchk2bGoRZ9t6t2qETZQ6QZXhYPP8LswWJwuTNkeHcWVfRAVD8gHiX1FUsSCdVYeQCaWMGhd7uYGjm",
  "key15": "3wtfDfdtmfMfLs9FzZFVHr5KQQYfyMvt18SEgzuWrikVesXgf2VaPtr9JvC3iF87wrBKSAdtnfB7GR35mitgZAR2",
  "key16": "5mwmTYd9984r3wdx8PbhngrbxwCJSvvTPqpwauCjYtzB4NaFyQUWosQUb7T94aCPP3TQJtuC8EvuaUTJif2jjrna",
  "key17": "4careL8rd8woxubCqAsF8HFxxfsg3abCLNCcLqkovu5HincHcHuAHKVNFQ41zpw4HprxQrtZdFzqb5h8wm7PSLkN",
  "key18": "5TYFDeL2ffw58pEmvy9UdtxecFve8oDBMms5St3M3gFERhXzjpsTKYdt6mRBgJ24grHmpkirDnLPUnVTRUnccMmr",
  "key19": "5PqefUqMUFRZ3WAn2zAz4sZuX7DCddnJdv9FEFAS8f6oZRCobqbv6GpzZubUYpBWVvfnsMms7TJcRUm74pu9iVCH",
  "key20": "2b2uUesiJxZjxStinGbhAAQSCtYJSf8AKN3cnGFk2dwBcDd7fmguVnnzz1mD3oLiFJGZmBwXrrg3BeGzdRhnbvyG",
  "key21": "2X2J6yCYvYrPM4sLqTG9WyZvuWuGwksooDRjiRByyEjFnF3z34bt5g9KkYQrXW3b1RSpZ9VwLLaakpQygjdcM9X4",
  "key22": "2DwS4gZkXSzt6rdoKZCVT7z5xKGUezpPePa4udjbeepEN4UxmgdtT49Y6wDWwJr1tmb8cVEcen7VVQx5Xto4Qdc5",
  "key23": "4NvyacXLzppTJZYM4ekmHJaEcUjytT8rqnetxAza8rxiLfJcTbVfdvsrzotUJ2grKauJkGRoUT5WZJd8Hak97gBk",
  "key24": "5XbTPFGRvgAcLJ3VCXznNxqGnnYNuP4Ui7wA7DbXBpbVKxW3EReTwMSm5BQBoabfFrMgezDRHXHrpBvUMPeyKqKC"
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
