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
    "4JQwNiKbubEi7eW7ezVE5KotfYr2nGC7xCdeMLMj9GSR6iddg2JCkeVyx3fWdadBABSgMGizxVsdinqKbBBizJne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bJ7259oDAVKeNbRup69eAfh1zPCJwCszFEAGxQburvzscwC8KhMm1nLHN1UFaNpL6W2SojxDYTwnef1M9AMCh4E",
  "key1": "33cXUU8jEZpWBWnAUHJsbmUeB9g8fxwSGbNr7Pq27oB8NiTodbobyK9Hh6movGtjFcNseixgnounAWfjMh1Hffs8",
  "key2": "5yfCAZJxY8tLzyvhFA8MyVVrAFQLLbjDXbtBvLdPcZVwoug7ypkHxmeqVHg4NnSPMSH7qRsc7dGSUz2igJEyXYJD",
  "key3": "5M1LpzXHwdvLizCW7H7J8d3tn6jsAteneCgcHMHXqCmQi63jupVGPsnh3HbWzzo8sSLy6WujvB31qsdaBSKPs6Gd",
  "key4": "xpdAGTPh6BEZ1Tgi9yZfsCj2UFboYAyes1oLiRRi3ctCd691vryE436J5oUXRDiGPNYhnpy46GdYeSyZ9ymC7uB",
  "key5": "51pJ5HUe2dnRUVfNz93tNXK2zihEr49JPkUCPbdsncfBwD98DpoeXDd929gkqbdjE8krMUpdTvR94MeoTUdWUjmP",
  "key6": "2gSW5x4PXVCx3PkNqQaJowvY6BXNPijR3wdL5VbqjNytLrFah7q9YJfFgqvwKaK1ojz837rDXwqestYakMFfJ5Wc",
  "key7": "52wR7tvqGs7uYnWfoVmqcVNPetueLnFEvX5gsCqFbZ7FuUxaYntUPzmzsFiLUZbzBT9Nyx4BxXp7EmLyL6iUYYeS",
  "key8": "CTTntnfUrFZddkV8f9vp4R46bwAjnPGWJZYNrTVvqbAFZTFJVMR4SpUh3ZefHFHcfCmLiXvGbDz1iGUBNMHDWrn",
  "key9": "3ZLvRevzszUVCSwLuCHhp4F5UToNzLqgntsZGGHT3yR2HahWHV6hBE7A1TwdCWiUW5SPXspkcJH62shMZjTEksYo",
  "key10": "4XQR6P2r7nZia69K83a5PsRGCV7WCvFviqopC7M3DVuZQvec3i4QCVnrbxNu9Q5QpPj71iUpebkXWKoaxpzQ6sdk",
  "key11": "2HvyUQwsmLv8PhSDvmhRiQY47dhuTMks5CDXs2yTGF3HJAiM5K3d3DPF5P8NyrLPkzMQqMT5PCRyf2deuLqmWK8G",
  "key12": "eTYEUE54RQcrREqvis3mgCsJEeazPh5SwRHRejWmDYhbykTEBT7YJbtauaf1D8K6kM1R1fwrb9Wv6ETYyNzw36p",
  "key13": "3Knghy6kSKmUXUrtqRt68BepvAfLcrijeMxbPJfjXY3UcmPDJhNUsey4mpo8KMgcjYJMNjxCZVasUgFC5p8FJJ5M",
  "key14": "4aeT7sFB1yo1PnTKouDBMajCwZ8vW7p9WsKofAF21PUNXFjEJAELvYii1WHWHZQsJeSnRj2TJ2BVjEe8TwsiKe69",
  "key15": "4ZDDpPJpUJpZBMzHiYZibihGeBkoXJ2sxJRwehxo5qPN5tR3AuZNh5C4yqTR6Ldp1ocwFDDK1mH8Vmv93kH8BD2g",
  "key16": "4AwDR328xqw5cPaddY8vAxJaUTmKTKKwtKVkCzxLAiHeERhHzAZMQwxhrxVVVSw8KjiAtqWjCT92ZKaGGTYvAyKA",
  "key17": "5KhYWranD2hQBVik5pHK7fyPWrdnSm2ZK4V3B1JojFcJvNY4rMafLrWhQaFshkUL661XsRrmsKzjanL8ofGutoqw",
  "key18": "63Dq9N1suxxh7rE5rtDYutzdXsPV6jfHMkmjMgA9wuyYujbtrdRnPyNvAZEnBZfBN5nma1k24sfNaT2L1VRW8nA",
  "key19": "4yPyNqjUSTa8ugMYbEU3Hcher7hhZtLc3LM7whE8ZmQivFDYg43gD7KEJPFA6w5ZWP5HQjbDX37k2U5CGrBsSqjD",
  "key20": "arBasFaKSz4nbQUGhAizKNSuLxS3AKTUxEgXS8K6nfVZRzMpBbJXQwShG9XN4uYQWhLW3bTFHCAY648Df6jXCTG",
  "key21": "5atP178VjSMTY2VPTeFDSXphApxvTBGUuVFRyAKsv2UW8Lbqw7yPVEhEeuezbih62ibztvyMxHVry6XUhvLy6zoG",
  "key22": "3QXkD1ZTcTZg4biHvfjbqs4XVh6ubkTcpbDbFuShvas7MpsV8FHfuJWPGtxYfFE3Dg4jKnfrXRAoZQSeyNQvVLM9",
  "key23": "2UPy15vLreMMH8Zcv95TG1XYpeaGYNxCiCLMkoTYeoRL8vkGc2DpGRiGyV3hK9vTPhdXrJcB8qHVAPpxKZJWCGo9",
  "key24": "3JqiHDMUaLjX7qiV7fhK6ggzsiiEMC4deS2jpUSjS63Lv73NjrYzvpTKucEj6Z8YDy5K6DeA56ki3o2J8z8Xf35S",
  "key25": "zJoxEoxokRzP29ykgDzCQmkiPyCtzUtBfJJULb3FtkzQFYAAEfAtCiLYrTDkH9kMcMW3kdg6jyZ27b7dx7EFT6T",
  "key26": "38rHMZPJcR8Ca2zcXw8ik1dTmtqKED85QfmmMdzPYknF91bUQQv7nRBxEPioxiME9bBsCTyrcS9Pn6ENmaTGC7ku",
  "key27": "jJqrzeUs88siGr1vrkoVGAv3c956J9vBEbskuQJAW7Wh4ZECyZRCZAD9VJ23jTVx5AuudwYy4sVd338raSYrmx1",
  "key28": "2Q6aLK2UHcmxv8HnAEWQ7y67S1eydw4YuaVoaXaywVpWvBShgTPGp1NEFd4WmawPW4XtMroV8ZCri28HcaLYMtHm"
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
