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
    "29ts4qJDUph7RyGAwvaLYxxZKCm1ZDh8BygWxab1esUYnWyEUHguFHYNaiFLYJ3q88FNe2fdSAJ8uaMo1Qa9ZGNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Je2pf66wUS29TAQCa9o9YgMEn7e3bkwMw7CgDMb4qQEM6U7Dgtivpf6eoBx3W9pvfsX9CLmUFwRqU9DNXkGJK83",
  "key1": "3KnxrS2KqsQbX3Dx18uDHhj8JPgKo2MacT6MkVcGqVALc7kAwHQc3cWe1SBZNd6eyGnAPApHEBaZiCybbymqn9uc",
  "key2": "5gLJVr7R8TMMJqFspdfAFZKwGxGajygjkHdCVHpn2zmeeCFfZJ6zH5j9J8FxR1sNEDq2Y6X35Hdy7drZWLDQ4gah",
  "key3": "3c36UcJCDhkv4S4EJmeqQ4EkRdaXbCutsug4tFcSQknUjHShf5nB14XPWmRA3gePAaamceEmuQYc2PsXENRyoEfM",
  "key4": "5A34ByMo2K75vqmDdhw3MSPBTZ1TSSfQL9JzAYvhk1oop6DyVsdLWTTQpkggCGoCuVsXAumkwvS2qzfXiBxZFtcv",
  "key5": "54CEVfKDitimkyNGSmekVTamNvuhXFPxBEfY7nNNFLiWJnfTGbeabJSbp98Xx85RCywQ5XetxmhkqLuL9pgpyxJf",
  "key6": "2CQfz6TNiCiMqhSnDPjJxVfqX3zbyEAz7nVLAQCjfUwVU7Fuv3aGLDoV6Sk6tJfw91AmPSqewR4GKnMAh9BakmeG",
  "key7": "wFPE8ZdWHkc2dL5bMJkGQt5pQV37HUFif93egxQ41EPncKJDyKuGU6MtqUcxXcWMrAZkWv4K8VNBxPGmyn9Uv7U",
  "key8": "2TxB3cmTi7LYgjuNMUGVypkoMsnVdiy5nkK9W9VmZ3fvmDQnvcRBeJ6P87VE9PZx6737KadSuthsKF9NHoKLNicX",
  "key9": "54n22b9Bo7kGnSXNCCCKRXGSnJQVRxZ65VZFoWxjahvtje47tcdkTtsP4xqydEwzM3DxxPFxaQUnXftYwCHZHxSh",
  "key10": "64TMCk2cWRfAsU41tp2hdMDakJkqFbdZA5PUMoWKaZ6y1ij1vm8sFfVK4gidotBajaSa6HAeUpFfiAT1JSSxAqRM",
  "key11": "3RAetbD9YQBBnksg8ZzXpaNEovNjxt3Bzk4MPRaSNBBoCozLvqLNqsMh3k2jmhfSrESFP2Z9mkMeaqJjqC5ogFUB",
  "key12": "4HmFnU8PKRenyTNQgS8wW1wiT5J8cB8hwJpq7YPQkE8iM4cQnLk4bwHcaqUck6SJrZwp2BGihRPsAgcgFiZPLBh5",
  "key13": "5FkAXHkHVzaCZJaTc3DGc7dHGTCNVp8rHuDFKQLW4rHTWSQoX1Be6itSmBbQasv2TRczLiMemYMa4TnRmno4nd2n",
  "key14": "5naPKFCw3LShTRRDmofrH8eqfezpNWfzrwMJymz4dFmoFhpF55kGarWNBf2WqAmhC56S6epw6bMivbarztNmztHF",
  "key15": "37v1pVkJ5LDx1eS2yHVWkMAzLG1pWHDFjuNXTSVNugP87h5RJQ6PYAJJ7Lrp197JWqjgzFpGDWmYqvMVJKff8pGk",
  "key16": "34oRc2KccH5LnnsEWPVXcTqqcnm37v5zTeSui4KtuUAq94yi51RQgeAw4tbFhxd7atW6UF4ntySWayRRVjwkfA7E",
  "key17": "62X8qpXpgug2F7yr9pPx8vFMA985ZG5BwVgBvwr3Po7P3dBSRiRPa8BovKUcg2k4nHHRE6QJ95Pu6dhE66tP4oW5",
  "key18": "5Fu6PEnZJhA9PycZr3sNc2TLnLTiR2aTy7PVJHhJhS7UHstVVY5RQyAtL1M9bKtm3x7CMqXMF9N81M1EyC4ttghp",
  "key19": "41VPX99fby9DEtwq78dC3vcRjRymymxUe1EVcyUDL5gWFFHNkmbrt1nZPepQzdAMchTPJtjUmDEypKP5JfmfMvxc",
  "key20": "5vkphgkSgyP8bHAae123WsHm3frTmaiBHqRMkWSnd2vRsiFge1Z1wNCdoGutM9LSQYmBPzrm9LPcdcbfoQ3WJBUk",
  "key21": "65itYC3tayCdomtD9gUR7Dkpdz4seRsvACk2HgZsCy48K9mG65M61okJNSepcoAFFyj4fPXcJ493Ng4aoMQgkoUd",
  "key22": "5FYnwFs1hYGskLgrSDivMqBpwnK8dtnGfRCBL6KXhCbYsrrjpSMoqbypLPbxrfmK4mHFKA54oxyfaBA3LPLafXJB",
  "key23": "2gJUus7fKFPWAoThkVfZcFBUBwyezF8sqZiqLqz6krctd791XmEn8RDbb5FcLb2jZ38kJfSNBoGMFwTPRxTcadP6",
  "key24": "zGcJvroFokhcpWQcATGX4tpbi22q6unvn9Bo249Sf3ZDP5i7R1qm7RpfF1eJKuyqYAEzT1vFGzG7W8Cwouvp9nu",
  "key25": "26fcPRyfvvCFsxLhkEijSeYQoxUeff3Qe5wTvFrm1xGLJf9Q3QrJk7CLg6L1pJeXZ1f2tzc7zgfSoeWQCNSnAdEH",
  "key26": "Cm1DqZ38azs2JgnNjudPmGnn6yumM7oRdB6TTe4tFjKcAr9j45c397MSm42b66o3mNcPQ3bMAqeW1XCNZK5UkJ4",
  "key27": "wXfAka6cdNvYXpKxhJpivD9SzJ41JBacz3MgSQstk5Q3mmgvSzsSNgMSfDexur9mduWGid67b8pkwoym8Cywd33",
  "key28": "2GDpDmLggfaXvTGjMj2BAMP6mid2s1jRynaNsJgmnJLECpzFxJc1jHwPMCTCwtv2CfshkN7FAkKwdmAHTLwPbHsQ"
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
