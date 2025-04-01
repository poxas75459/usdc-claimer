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
    "5WhmoNteRhtDbSFURsTubJj2MkZLABGbiqQYKCJWgcgqRcP3T2SF75fbaZgAKqDchrXfSWtuN4JEWaV8uzGSc7jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEuz6MXCcDtc1nrV7z7gdsaU2k1zYD1MmmcX2gebcrp17coya9iMNaxPoba16WgWjXEQAHPvMBgjJcFkS1auk3e",
  "key1": "4L3uHmbitomun1Leu4rdajW391PLPv9toktDSUZC5NmrnbhvW9knLsJcRamyPgzGvZHmsC5e9xeE49AQWE7gU3Ha",
  "key2": "26m7Hg3TnPc4Gqeeq9P8mZ8ou4knEkaw7NzEStjxBFR5VS3Va5rFefi9Mw7a3j54uymMEFUUcVDksh7Vu27t6NYC",
  "key3": "bPXBFbMcRbcFc9pZWjfudgXnkQWGo6eN3CFFwAenedBw9di5h2wbkEkw96rB2wE8CFFEizYZmNJ3XBr6Z7mXTja",
  "key4": "49JxiNvqgDRR4VF3okSZHgzpweMAeDQq3XcjRD96xwLYcYdmc6Ny82FkpHBJQU5NBCg9o5WAZj1J56fGuihfpBpz",
  "key5": "33hNMgv4xPc9cDW4nDARooxZ9LjgEj4EXKJwUjSzNN51q7ACoRiXjwEuKuDpCRubiE16bPdfCRopegETBDLF8rbV",
  "key6": "4X58m6kCFhtbR3S4obnUKHS97VRaYgAPQSX6pkyLz6zREcvGs7UcgLNy2j2UC2aBpqisSY7CCiVrXjXwSkwSjZBS",
  "key7": "5eSa8SSZgnSpwfFBoymGJidrDWFai85u3CYkgu3Qbss1Dym9oSW35dzdVDjCMJxyzbWTntyk8igqDK1J1y5Mzoof",
  "key8": "2oQyVwued47BMJkh1z934rCAoLGB5BHjKPMjpbY5cWkX4M3yg6cYdMVsQ4HEQS7hxrsAMw1XhBBnqQciETXUJU1G",
  "key9": "4Eq5AyQsoSnxjgMrM4hhrnBZRim1uoWtgZS54PXaRnsjHmnK1RdahLzoPVSyX7qtwPRCHTvtXLByqPnZ1NFzwy9N",
  "key10": "9vzE5KNbAkQ2uyJThy9st8RHpZBpvZSRZTVURJJokBmk6RNbBKedGq9mM982H28pUvNsiFBL8m3ShnYjq8MGSLH",
  "key11": "drCwVQEJc5egNVqBzrFFqR3CJ953eyPHCeWoDbKR9wMAWxXLqNPBkvj3tgdFwmhFFGoi1Yy8hBdDedE2VaSEQNX",
  "key12": "yyzf7ZD52D86mLMmBNEG4DefatmrgjZEMz539sDRuFy6YeMNfuYBDQHyWePCyYmEDVmAo79iX6qi38QbTDiRr9Z",
  "key13": "4EF3DFtpY6u8FeaVAfjkygqaeTm4xEZriTv8iNPgjsrSMjiyn7CNXMi4j1CmnEvBmh27zVwKnwzqvEzfJMDxbQYs",
  "key14": "34Y5dTgpFTkhQZYwDpeibnaXU1SxhsyLt2SzQDGjFBuLPdjj4Aj3SPWF1vgmTvJihQQC8iZiL1AdZ4GMmPefzdSD",
  "key15": "5dLSpo6FoHL2ejMKZn81qKSdargfG8HJu6o44TebVPCvsyDr7SwdYaDDk3PULgmbPmD1NDNLGeaasqhidJ6TrN3V",
  "key16": "2tUWnGMcSFq3UxTK2Fkr3PU4t3JFx8GCPycDmwXgX6oReYc9MtXiuLfPEqKiX3cvE8dbp5d9Eg2pTpd85PoV2m1X",
  "key17": "2aH2vAkJM2v8HZ9QW1G5tMLJNcqhV8YCqZc8NFHD8Z9U4mVCMDb8VyYJMDLeECeqaeLY46LamdzPF5ieekQnHzt6",
  "key18": "3eEK4gZD8aa6m2sjXMh7DRdcxAkfh63H3LXLRHSbvQhSnT5Xx12JkRz9heKUtLrZx6Y6fu8Mi8xBwbJeR76vDLaa",
  "key19": "4an3hGs2hByD7crd7CEPcDK34Qf8HXpUc55uaQtR91JU45i56j3h8tdUswhS7UxJp2WVpwBWVxDPZKMBHrHG5VFJ",
  "key20": "2CDd25ttuz9rGzZfeguGr2XyRMgJS1xjwviz1oGJ3riR6SBk5uDaLEzoeYzrRJcTdSj2Za3iVEBSngu76rzL19i9",
  "key21": "3fikzSgR5ueYnNbAjtYs8jDCjEiiWwH94rdMZ7TGwZ3r6ML1ijukswywZr6Pj2EhZaSKHJamRpsZ5CNuRQCvfz6S",
  "key22": "2bgAR6ehBdGnCfvN6EVa7MTx1bmcixjAyKrgcxKgWh8hzKrmQC55pr9FFUS1rENyw4bfHzv2dbgCHk9dGa2Wxx5u",
  "key23": "65sugYgZe1xxrKLj8yNg9KqQ396GMsZdaMtbede2eZsBccpP3XNNdRokFuPHrgqpr951WaYAgYM4rVjP4Xw6hpjj",
  "key24": "5Fzok7iVzipdX2RtDLTjBRux5e2wwb3fz419wDft5UrqqjF5oytmvtCzQzspewzvXzDUPwLHE54x7WsThbsdzpSe"
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
