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
    "4t68FbnSJsJuSb1zXGSrpMR1csaYtP5NiJBxoJDbMX3Dcw5u1b6985tyroNPD5GijBw9ajHafbAjk5A7tSyFvuAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXcLqAWGFAibr8PDVRJ1eCpYGCfnqroR5qoL4hsRxC3wufgC1m93kRgHkCGErziJQRsUQTrNbdptfnGP4zRPWKu",
  "key1": "WfsGkeFSWj2bxVvEHoexafzq3XNFvWqxMMg7wtnvJ3iiUDfe9oXNAJrsv7PPAQqkxN85JMpDMcz1xSR9yd37xvV",
  "key2": "5w2xjZaXaf5P5xPdqiNXtBRFMRHzfnJGHmrznqFnfyp4TmQbduSTgMperTcXnjdSsdNZzWYc9dM7hWPeMb3S4yTZ",
  "key3": "GqBxbyAY5W8cVBgNVpmaNh1Yh17xQ9vxmsQhJ4XXkaQWfhspZwM43Zn5vdAVPfZbvh19t724dwRzXbVChzxZiwo",
  "key4": "2WY53ToV6AhzTjBZyrfG6VxPvCvy7ftqMCahevgTje9bASNwSzNaNvNEfAb6jDZ5vbsD1sqmPdbXHzUuMhYAhCCm",
  "key5": "3Gipn3vL8hsxuPkeurWZJxB7gZExKgvhHLUAnFMjPo1BY2NUEyrXMZitAtVKRdf941vfdypy7bu5RbGzhTHY9N5e",
  "key6": "4yX478sN8ZyKd4X2DyTCYuYSEmJ2nPpmJopCRLsykqqvTV9FmdX31DiPWuUe5AuDajZnGpy798ta8yTbtCKoxAER",
  "key7": "3yz5kCxzU6TFgLPnzP2SWSyH2KCSzMDq225vnRNGTeK9zTRe7ZhE1TnABsaAoQnBRkNzmwbfAzAXTemLzkhr1uqQ",
  "key8": "3ww6LApBJmFB8yv5uz34mrm3txsYxPunUvvHao79c4greioC9gnnFA6iLxfhMM2JzuFGfAZ4UMMHYbew38P8uBRT",
  "key9": "4pH58Ed4dJbomV5HmFxe9pweJyrm9wybncuykAjMafjEFDG4CTkT7AiGXNjp3Ut31Zj9jWjx6sPDaYwySQAgYQMu",
  "key10": "2phieUe7AQJNLoNwJv5JG9aBnH1RrynmvD57xWvhKgyY9yAueYF6e3W6pNUMhnKNwa6dUqfwYu28gbqE8GL7wdtt",
  "key11": "5uyqDfiup3FQNmVAZjJkds2vS9EXUgzk18GywQGbLSH1gPtLcZZ6aVqT7yMizfmA7QtejBCBVFs8V7ufKVfpwbaY",
  "key12": "3aKufaaaH5XR2LcapjYMfsPadkwfsroH4Jxsvzra53ZFj5FG12MFe8QQAMTdrqoMSfrkdmBYmCrpUmYwpiFMEv3L",
  "key13": "4jDWJgMKMhm9m6jAWwgzBnUDxyL3sutxgsGKt6Mw3Uti81HNp45CB7umUpgud4cSeeVwr5Y3SpGtcRT3rVd2Tpeb",
  "key14": "5nTPx2rrmAfY1aq5urcSk8MccQ4UDRF1HfbJQw3nSdjxZeTJfxXqp7f319uG8tnonHdhz3CoMcEtFBukUqJjrjka",
  "key15": "35FDH3g4KDpvFGA9EwtYti81svJC6LXQ3JaKvULv4LBAthToSdptKqJ2kaasBZtuZpUQ7AXU6bmVJeaR78idRRTB",
  "key16": "2JnCdvvTRJbEVMRLJsD6xRqL3SMiP5kf24up1h88o3Mr6F8QJCRiYGEPfh5zEG67hngzJ7yUVUnaBaGdYAzBjybC",
  "key17": "5PHRyzUA5WvkyVMnyPgY9mc2LKyqf6C2hRAmdNM2KWKihhs27PbPZQU1pfyNcYzj6MT2RzeiAWJaW7K3cfmsWL1n",
  "key18": "3sw8ZsTiA5WcbgABRVsGszPr777x8PDxq7dHzutpVaAXAyBYxPtDfsuTrs9wGYrrhRPthrLo4AGehJw1xJSHch7M",
  "key19": "2Cy5ofz2KidEuAgYKsU67Jb7R2bk16Vi1GynX46ME2sRankh63hJvfw48ZdTj5GdAySEUZNBK9SB76jkVpxRSsCP",
  "key20": "26KDvrRJgTBuFQqpArPVqBEs47gFm1HWCHQv4hVscgPrJ3AX2zB3UjXmwkbn6UwMg8fWZawjCutXVqM9jQo8o2g3",
  "key21": "5ibbrD9XbnWo3gSjQDSbfWaWofdhgYFyN5pNEzUNZk9ZjA5bwS1YZB7MdfrkQzbYdbtxn6hzDRZhSiuknsQgUv91",
  "key22": "NHZVdDcCDqySALBK5AnGe9Sm7GQoNSyLcVsjAku5ZcBNH7dC5zt53vT2fRBH7c5qQVKje6YgU7yRVHkyTZitdYY",
  "key23": "679UmmGcZE9RCZKi4Np3SqrjietN1Cz5c8iCBTiiJpUHpYb5YGpb3MUB1UYuoycqruVYggGVM5rQGcQCEDSXp7nT",
  "key24": "4stRxBv8Nmy4EfTq4TGfPT7wDGL7bw2ZTQjyUhRocckKoKPrBCD5qN8u4Qn14Au85VLpn7W2tTssP5PbpJHVfvy7",
  "key25": "4zfEJYQg1pFAXA9orCAx6C6Bu2nKfXeLVmz6UXwvAhwNqTce3a9oAXizKkadY1Usezxe8NCdwWdxhFUjE8x3EEXv",
  "key26": "2bRtmx2VPzCamN77YuKWiGjDf6GytCVCWgS2tiJDrs78dTFUBLdZfZuwCpA2ApTNjEjsJ75TUNDr9xegYVBmzpoN"
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
