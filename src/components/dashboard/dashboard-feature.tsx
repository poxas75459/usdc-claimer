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
    "4Wh9TPvSCGaZ7ChGZ5WWEHKrT8rbWbJwWbtLJmyNDgodXmVHfSXkVsoY5p2CKsQmNVDCDyryHeUuiXNVnWWYHthP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mhq4kDnHnNGBqVgoCs5UhfLmeE1PCKjFRN689nR6CMvSpXZzdUhyYeUnkesQqxWyy6PqmrFhzoNgUXkq5MXWWuH",
  "key1": "4WRyKeqhtnfeNdC2BSN8gmH1Ckx7XPpoJsTJbzFqcgS1ckYkBrMfHwQR8Jd2oPPNk7RNgwnp94BbhWku4CGHxxjA",
  "key2": "3auWZRttcCFqXU3bDVihSCwYzLnkj9MYv4nbCL6bgva1RWFbqcH3YLZU1Z1aXR56cDyfY4DTdG8tYBqR9u39LAWM",
  "key3": "4BJ5BSWdpG8M4ZUcSzgUsvTEjPZ6MVhBUDL45aMn1dNNzLkYBX5WzC9bWxkkRnQ72vSpd1icpTymwxSve2Mtfz4c",
  "key4": "3GWbJkmoJ9Qd36ihXTEJk222qfmSPvaPU6Uut7ZYj917o6PCvvuH1M2Ugegu3WcdqpgesNzujtRfeUyJD4hcn611",
  "key5": "52KjbLUn61gTmx7qALbQUnZVM8omgpRE9DRr73j3WTFgrj9rhc1bVMn8Zfa4zMHLv2DnNh7MhYR3z3hjezyQfU1",
  "key6": "4Cf4FZUdJAfc2hJF9EfcMcbWqrKaKqPyg5ymwZhiN3CvpYKFWH3862pTfzbjPi2VZMcGokD1tw8WpbU6QUeJTzAJ",
  "key7": "3aUd2Dq39DHdWZiFLVLXF67ZcSzJSZ72xHWMRdxZL7aytYA8gZhiCaxEsQckQzGgV12SCFGpZyM81uXTKwavrgst",
  "key8": "3bKtY7pDhY1o2vyzb4TWmW3hjYPBhmcWebVo8C98uVuHiDiQKkZaqiakyppfosqmpyU2eksP9n8DCXrzJuLD3Ne6",
  "key9": "5gSzNUkW6wiov3tgQj4fhPwXu5ssrUHwN9Dsd3Wwk1jcFi4dHvUgkwZ9gHCcqPrW2ET2EqXsgnHQA1By6QW9rdKU",
  "key10": "3dytApzVSTsLAwnzhFBUSPfU4nJWAX7W2jVZxy1FocVt3WHwvUKA72rRDhKHuALUuTXc6d1s6o3uRRJZKgExfuXN",
  "key11": "3x99FPPyaFBQknz6itMVt9ABmQmFtGAioeUnrq44H4FYbTCoqrvBCVYrLNmoJmEDQWMT5QLS9GAsauZgjUaxWcmt",
  "key12": "5Xd3yANktUhhvmrWDLgBoFq8tvsU2t3CuBHrkj8cW2f1chRKse7nwRtBvxWpNKvKEKfzKnyZrSGC9vASTYe4EBJq",
  "key13": "2awDPLrtcyCbVmWcgvtBb79RWzu1ibByvyffNqUsZEXB4NYmpnjjAATogtCz5TcomVS13WdhvhWbFW8ZShhTP8B",
  "key14": "3JH3YsUffftLYFmJqsPthmKPnKtN7JYBtZ2c78wm71VST2EQvpKriShbTiM8RBMdkUFdtc9fF4qaCU6kt96wg4Zt",
  "key15": "3qELpmqCk2wWrLatiyNHsVYtMF2WDhBrW43z7qh22czoj9taxVjpVa68kahe8Y78WQk1dZQPYtsdySb1uFAXdQM1",
  "key16": "4om8mMvkNQQaiBcZDz2SuxuvUxnhPfnMoqCbReo6JLsNRRSErM6NccigvQgg6ZSSRhkgJDoYYmw54zftacmfuJDk",
  "key17": "3nji9VaqboMwnxfK9MnhkR8viLmWaDmQaR6QDSBT9EUZTihbtK3q5L7oUH1oZ1DSv5MwBEfkJvBeTreCP3K7XnpU",
  "key18": "22AQDVMZxuAWV5uZCEasr1Gzu4Ck9QtcKgcn4eMMEgtYv3WhB8SMxiAn9SheRsi9MqytZ6yVYQTdffkhzzjhSpQo",
  "key19": "4RvGwPqZeUWWtND3gPHn5PUTY9q41QrppZBSCzPDp44Fecu5PcMi8z4Cmf4hWBiFhZ8x6Hieq2BrHH2r5frZR4Jf",
  "key20": "2VsNHinm2R8RZ3qJfGmtZKja4yzYRfFz74BV1eMDtQAhVjtH4VRj38wJCeioAu8r97dDvRuvESRpY596QSRGdceq",
  "key21": "5epo3Je86piiWgkaXLnd9BrLabYWaapwXYQJo78qPSBUvsEPSg4NhkUW3rxH7dNGASaEhnogRjUhKUQVXoKjcGe9",
  "key22": "65vHHF6ZrP77idwFBKA1PcgT8vb3ZMDiQk66Ly2dUmMbYg2R3QDPo1eJwQiv6TVT2bRHuDZ9ECXnTcCYKxPLiyEB",
  "key23": "5JCU2N9MVtjnWo2rj5vmaBtcVNY6gzKaNQZFaDmroQpNhP6uUmLsjxZEemGRr4Qv3HRELoEPcN8UcZyXDgVhaqAs",
  "key24": "5sMXfjR4AGCQk9my6GLwn5L6zHbqAyFQiGMagc4NVv2w6eg6gUBVkNBxtNjJWWHRmXgHJUETQpxjtEwdrgZcCEmd",
  "key25": "TVQRvLsqqv4UuEoXjnaUe8ieuQNrU7CKJRM3xakRi5kULZdmw5Yr3HbKHmDECLPfcp4RbaXy9bA9v9XeDx49pex",
  "key26": "5NE5SfTbeQBxyYnb21bEMucQSXrnxaeu63wyBytCr7pw98DMWNwyJ2CjsJ6xeiE6ZAiFrjC8AkiohFCKqHNipgkT",
  "key27": "5piVo7sW8uEZZdkyTQudSarqG23jviaS2y7HEw95bhNdbQpxd4xcuf5BXSM2jXpanw95BHg5RcaokHa41g49RNH5",
  "key28": "3BDBuULEcf4wUzRGSuT6B3ZK6pzRdgFD1fCxg4Udnzbu39UEGnpcjevCJc625HrYEwr3stszHz6KCTYF27PLnRpk",
  "key29": "5L7kFNG1JtLWi8R6hpJk67v7ZKXKCdtTueKnzRKz2pWBLuUegyFTDpDfkXB1v26joE77YeFFHj8VNNFAVcC9W6rH",
  "key30": "3QwcLUaTxWLiWmhQxLv1bVLv8nEiFMpbMpU3fgf5YQhwzbd3hwLFigcTYBC6yE6xy6xTQJeXnY98cVHv5icdKwF4",
  "key31": "51mzai8K99NZJ9XNKUb4Fv4jVHipXkq9bL3ZxMFpZHdogzpArc5T3Nyw5HAZtXBe18FQNdffdzQdPFPW8XDYD91j",
  "key32": "5FEtV386Q4u36T1taWvCcKmNjV4dcrgubf5JeE1m4cwpWeRsHh1J1CKp8VDJ2RT9RoSz9LG1y8kMiChmpTJPGVU6",
  "key33": "2dgqoVfgNhWztJGghhvU2gEwkiDZchLquAuV4wwyfCsyiTwZvP3pgUtekwuFdDneHCPoHSHVTgbuzHNufQkisxNN",
  "key34": "2Eor5n53S5m5p7FkveqMB7FA7pEFiLibYNnm7o82FGvC2dAFQeqS1k8e8jb16XLscf2uvfHAfvb84yoDkiTBEWy4",
  "key35": "3i9D8tfBiDSmage1YYRfEmDn2JmX3ix1SpwKWi65wYhFLBApdWZDBS32qvZZxFj7Uv7aLrNwwabGVRAL3SU4Wamz",
  "key36": "66GMDZe18djgfGDhwXMqhtV1KfZdACNgudEAquNEGJ4m9SAvXAnKe4VUg4DMokz5uMGQ2efZWekY5dg4sEceSURH",
  "key37": "465Q2SwHHuBpadQ9Pqx9PnYE3N3KqW3pG6igvKsB8EcuKo8edFnopmMTCrskcAjSwyGJqeCtm7GU75ipzjznPYnt",
  "key38": "2wSshU4r8fsMUcGg6mr3hcWtsjkBQU2YFaigWGmx6ZtrUgzjWsnzdAD3pwUEYCNXjqxY13ExMPS9S6pPTYFodJvY",
  "key39": "4uHnEe5EZtscVjihAgLC8ufqnp7L9KjrJjiaXFaWyE29HXpVqxypUmtPbQh1NmYP3qRDRu46nAizxukW5aR9VvRA",
  "key40": "2pJa82LsKtPuPGDp8cgdNAfDnHXMQUB3ok6X8x3reL2jPnAqK6noTXJNUpdULASL84JPgk1rzCoyuXFYEFn8o9ur",
  "key41": "P6TJFbpvsCiZvcVG1oqeR7AGPzHRmK2U53nYgU4SQ1XoBRqdGtUaVZiCxM5wL6JrSEzfQitA2DH3bxA2FMZbbrr",
  "key42": "xdmsnT2y9g3FqYsk6ZcAXosAPv3qdjM9Km95ZbWJEtrF2oFCBW1h9iD9yhHotyKmbhWt2jznHtg94NRHQwNoyx2"
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
