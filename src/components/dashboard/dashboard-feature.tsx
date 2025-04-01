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
    "3ks7N5K7zsbH6ZmaiksKb3Qj5dPykkFqviqbU6HiqPaPEunG7SVFv7LNrwJwRSvD27wErCe1wSJS3uHGkxM49iq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFCGVtCJjkm1iTtV7FsMuYtCosru3fZWyMvpVwE99CQz3uj57Xm8q75wauKtZBjCtzPkKmnHnjjt9eggy5hw4uk",
  "key1": "26cFJJu68miEKQAnSvAASXUXFJatfrQenKnZQ4A9WZ7XM64qrLZxtAN1nAqq5Kq6WGBo5v86AkNLVJukFc7jtsgb",
  "key2": "2iJsAheqZCwkJzUHzggxyCrGs2v5BAxnCuDWWp4Cp6DmZ5yH7MvFXwQWexMY9wP6rQqitABuJmHSb1wHZGHZ6eam",
  "key3": "4oiyfUczudqDrUfEbjUC9fJ2oYTNVzW8udaePjF8uZSbvTyXLMLsTHm2hYJnRAhxgRrwyRx95ho2CScSqkaqshGX",
  "key4": "5qVvqd7BLBXE9eNJcvoCoNnVcD9RCEnWhAfzRYTbuy7CtdZGpiVxeAaCDwcjPUeJvsSvpq9QsiDyXn5Yaa83baC1",
  "key5": "oHpjCwa1mrjh8NiQY9f8sLwDji9ThC9cYQBGc2HbzTyZ6u8yoDfvcbmfQ46Fp27dLrB8q3skSXNAYjLER4eLboj",
  "key6": "2ojZxFzWHTLE9oeGsfzrv7UvNGhH6x8L5yfP3p6XozAh8DNmSLaMrQLsu93NccCkwdwpLZpvMREtTUEwGA35oUj2",
  "key7": "217YknTJpSrMi3x8oUMDdNgHTcxo8PyVbhgof9KaTwWaorxGSaCquFSaWnVgFZGTZ6Lb6Gv7xzA58fuaoFwv3Trx",
  "key8": "33iJh8Exc971UfDHYuEv21tF1uenVQcWePo3DjZ7TXEadGJceE7EGGPBZ77U4SuCXmEriJ3Ezn5hHZpTSQoVu2BV",
  "key9": "5Pmk1byRowdu8XZkv6NWpxgsPKdnxz9c6KUWZZ86XaYRwYHm4yEryoLz7hiiT4jRhRdFdmoJN7ubFhKYdmrYECtD",
  "key10": "3uzAgGY1U6wkeygtuGA9Amx7Hz4t3q6ZLb3pUczmsAMk3kyxena5UiCmCFy3iC9P4Zj8xx6TWL8fSyb1gvW781Sq",
  "key11": "24LddG9ACdNTdJ8mnao7CsHrpNgXTcZVRd6tNTh5oRA1QTXZSThsj6PEcdPWdzWqHvaijthxSNUWWuVuFCwLo37f",
  "key12": "4i3TiapqAK283pApbsRg1MEvKWUSbhuLWJUEpT4FbBtdxjZVTadYrvt7oqLRbGbafwbDK3S3ZCH8Y93qcrTTwgwj",
  "key13": "5BqEc3SuFkYt5Ly5GAu9yduAJ4kyNmZiSY5hH7AcQPstUx3Ti1uVPBeoK7rXD4ynQ6nQj6YbKvqiQvx8TzVrureP",
  "key14": "2pyBPtrgxA4ZhqWntXrStf286xjH4gHvNhfJ5MGpQjms7yGuQ7PfFbWiiKFavYEu18WZpPGazjqAe3KtZZkf44Rp",
  "key15": "5n3SXQbfrm83FHPkeQxiKpPbVf2xy9BceMGe6UfGEKHkNbcG7pCjLqrSTsXrWq6TiA6jrRZk9weuoQpGbEGnkr6z",
  "key16": "2sTYSw4AV54xmoSX37J7yw8WMbse3XRUHKztHfH5Lyeuoeut9xxZjnpLdGZbpPp4eRNpFq3zwxcQ1VgScLkx9V5J",
  "key17": "4fJtep42YBY9os7bYRveDqhq4MhLrYkpMJFxLBvMz6PfHTVgKnDtzQG7NXTCavbAvHR1smCd9hw2KjpMdXWGrGCA",
  "key18": "bxrDegpVcKwnwWUzXxwsctgeozdpTdVsUMpjJoH1w6eU5vp8QRqLsvLcc9cUsQ1dBowL2QAxobE328bBPvpvbYH",
  "key19": "1BW8pEiAf6Gjgj5cf3zQ9WKxzJkf55cdFuXBsmxCoUsakAfYdncB7JVxCiZcWSfoynhpFYyzhR3SEq3CoVhRBh8",
  "key20": "2qmbX4xeyiAKfsGarMspztVdZrCrEsdBthnbneM9dBNy2sM5GRo89jwUcUeARAdW67W6MRfJxytHpknjPqSXHyYD",
  "key21": "5tUZfk9k979syqgG2PEbLoJDuMdJETywu9eMB8A712kZVpdEVA6QCdNAu1jHeiHpaZG1Ack5AZGXZ5ULpXeomxnC",
  "key22": "3QSML6pPUwdJfafpkZCpDWeVq3d4nXfNrrzvi4owPLgpsryvqfscVFAuzhnvq4zDJH3EicL3zWTkiazTh4gTruuB",
  "key23": "2qgYPNMJpMMDe7MaV1odH3EaZaVDAfz2PxqstPHCugTDuqezhwysjuGkJtUE6azfktQutJykE6HQ3DstRpTkrJDW",
  "key24": "3pFAVGs8BRdA7vFU745Cz2oahd5fNwFC7SMPoZfHhAS3Mj8mroX5v8Yjko2wi1erciXt9wAQUMHVojoSPEL8ZbPx",
  "key25": "5dM7j2EB7vx37yJkSmws2hK2pz85mgwZWwNbkRD3HStHKrTTpFHx9ihcHnuHRmNRDEmy4qmfkPFgZk6RkrDADYgj",
  "key26": "5KsJBq42Ct8XNxrWwZtHjtocsubv47X7atYWgkYN22h9JNSLE2GqNL13HtbyHDibnz9n8cWMe5DHts7yZjNUvpAq",
  "key27": "2gAbxSY1vv5dyARXpHz5wrWgYBgbF7RRmDhJNyDCaZtie2jokFq6i9BKsGSwa9SYeLCY3eTU6JAS8tdXtk5orwwZ",
  "key28": "32KA4Sc96DG2G6sgzxfLhoEqki9TrWfG35mXdaRJq36SCxTJNitRgTopzbudeK2v75qwi7eqHKx1nhQ44wbkVdYb",
  "key29": "4DJ52d6U6o32YmDH3FcRpXFQcCZFNwKLui5hL7k69Gf1wnn1jHthHZLDKS5z5YG9Zgone35fuRcmY4GcG8iF73qC"
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
