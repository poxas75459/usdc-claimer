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
    "Nm53TUFBH3KMwHuvE5uVhZ69RFQh3sq6oRFydNf61QqR83UgzrcNRao42uamf7y1S8tAP73DGozU8X5cx8c4HmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUwP7qsAyDnfqE48uj37q9rGB45WnttRvNTZ7uWZ5E7p2pGwuyQEhAefe4ykR7QEnPLENWWx6UfFn6ZvBfPbU7g",
  "key1": "8cNnDoauq9Tm6tNK52nnVirXUGpLy6BFT6msKXHJpLdznEPeFVR9nBEydzGCRaLtEbvt3erQ97r7HYmrwdSYocD",
  "key2": "sTrNgbAvc1gFe75CNFEM8dmDDmaMhcUsUbDPM8uAJ8jGoXwdboWJfCMXAPJNDD4DzHC2WGmkUvg8uRxKLn4rHXy",
  "key3": "3J6NVdH9vXB5x5rTsfAeiuGjKD7bQZRPT7YrmAMo7kYAQRe3TLcPuf3rY6UzhqT4J4nQwnKw2f46MW5hTazqY1yy",
  "key4": "8BfVUy1otqc5YUFNZHTkeGEex3oKRBNiHjCvEnsptLwZtBnoYLkVAxjNbfaTkVeT2MPChc9B3YaXed8HQ52akue",
  "key5": "pnYkPtwoWQKtjgXMRp2qVyPn146UP4WAaidUZoRACNgnmJbj3VYk4wKVjiwLFQeiKTcVLv5JJgWvmnUqWoSASbh",
  "key6": "2Hii3tA8sqRJMvauUSxJwiifByyKchd2DS8Jw7Sdfy8k2PiGunuuCEXa7AXV8QxpZLVq6N5Evu5C6SBrfaDpnUfh",
  "key7": "2w9CihSCHowgVhp5FRgQWhVH1QvuEhb3gMwiTWR9xX5wmoTkQUFWSzHd82XheQqMEN9VyskCA2wnkBvSRkUuDZ5m",
  "key8": "4hZJzoiVsoAQFSLw5r8ksZmoqn9ZQxfrygQGTjt2HLnJMhmirtr1kKVzwAnKVLtrvtw93Gz3epDk7pdjLFnTx8Ze",
  "key9": "3zfBhT3u7u13WziHxjedxhSaKoWxHoa9dSWSzzzGXeDQHypuhUVQS8nmW6afFQAL8HG72dR95Zt6jM71Ciw98c6F",
  "key10": "5SpMXr5TFmCPa8MWa91ovmd9Z4DS5D1weGFixpJ8NEPxGrWXifHr5tuk6mzAP5RDNfr1yeR4f99Q5Dn79nCyPJW5",
  "key11": "2pWDRkp7AjkNjpHx4snJUe5AApBspDVBPQkwkQg3vdggWjYLJfzd6eXrmhfFsvNaFoyLPHJEdqefv6UFFLH7Ex2H",
  "key12": "2NCqtngXqHZu9bkNMy31w93awtkB2EwCrahAyifPU1x5y3rdepoAS6VeucE6yPrGkrHEoeSCaZBaT19x7vrYUEf2",
  "key13": "5FEuiLaGiPwwx21Fy9M3LcMLh4jtXbBZmTTTdE94AWwF8FTRfjAD9bYp15vkjiyTkGAQsgu7EMCuJvpDSaU8KQid",
  "key14": "2QwUsQYRGCNDrXBoqwq4QrdtfsixYHjwriP74ibofg3dk46ZqpveH7a2mHaGyi8MP8J1U27AZyfDH6FuigzQJWoa",
  "key15": "44Dew5oWVkmspdsMZYEtSzG7UDNdMyeZpgYW7GZo3VuvkQ5s3tGem1rDdcbXvh6ShCap5mAMxnj6amsrLRMPNXmm",
  "key16": "t74sLiiHg5BCCLLj7uvDqUTCaxcH8aArH8Wph5x3fn43GocLRa66mtA8ERPi5A3JguimPcPQyafDq2zTc9xcWeK",
  "key17": "2NjkZ1KPgoQ2xdHttWev37SpNQQE9vjzhXF9XomwDUwJsuR6QjUCM88tqK94EY7yvsbzGGdd6WuoKvi2Juh4XFBm",
  "key18": "2PCTRNCxT59gSyXmwmP79oUHPaTxH1fX3KNTXkVZM1Bs8jNCDA9hLsBVXNAE6dc9MHAB2dyNAqF8NzmDFLMAb8zb",
  "key19": "2g6cPybRAkBYFJzwe7qRZY8ttJeyhUL1vSdBWFAuaj44cH9NzLknBuxfyRuSXisaGMU52zsJD27MYSzdWFjXtH8N",
  "key20": "bWXZjYbpo7jLCNK4jGNj5neDakSRGhfV1DxArdxEZZVQQoR4nKREE4SN8fWBjjjF6SifaPauquncbsAZNutzRVC",
  "key21": "3hr29mExTUAdCPXTZLGu9sGdc8wExJMKu5wzMwiZZQkWHgD2HMDuoN7YhCa2Lu41rUkbQdWaqWkbZuwFZgqD588i",
  "key22": "5vxEt2vAWDrbZaBCkJaYiUxwXNZ3AEqnHHJHbDDJZqsRY226eiGRHia41tVDSqKZ53D2rGaQZRDXZnXeBWKqb1pQ",
  "key23": "22mrL18GJ3wiY63tPeBSUv6CBcDQUx83xpvSRZX656LzLzvwaFjkF9V27eZXhweDFeHTTUoru9DR4TwMG2RAB9F5",
  "key24": "eYuiXzwAMBLuNptQbzLSUsKtrGiLrXRnLwuFNZ467rQCFfxS3sk8sktyBoyRg2BRJQWtSGwj2sBCwZnsQ5mmem3",
  "key25": "5nzfmXujHJSZejeSFHLNFUZNRoq9QMuMn9mSTqXsXbZ4TnzSJhEWKdbLuL2NmfzXne4CNymdhhJt6WsRze6TraM5",
  "key26": "3DPvvRFzEwJKVW6oXCxcqiZpX4BFviocUeuLdtfAAcdkGBhSZg3ZnKHWbZjFQuYHcsvSXSJieLFFLp86JZ5Vt3d9"
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
