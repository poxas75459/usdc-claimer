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
    "554P3uopYq8uN7ghqM47ns4bQVkpJeAvThzpLUo2XRokd3d56xa4gMqxTfu8oz4r82XyBUDQ9JXrYB1ojz9J7CKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JxVzQckoxUq59EBSqVCsuofktakkY7cC8hrSKfNscHwDosYaQHjpc6uuS2uMAMXg4dNTdtVMLXTeHffgrqEgEe3",
  "key1": "u2DMHQS5jPafm4WcbjoBioR7Q4bLFvnfiVJsMip74dAhyXuShA8LCZ8YiLXMCvKVNdYTWEms5Y8X94vtBk4MT9m",
  "key2": "2T7MfGRruUM1rTGZP5fLqDFBUYwfoGiPe1Atc2UrNwKDEKfFDVmaGausERTpvFtdkXBG7GgZes2zYXqh5WDSojxq",
  "key3": "4ixkdeYpJnWHNEgCtXCrjeTwbxBRxhWNy5ntGPUcShEXJH3CxWx6irQXehQVyPNfntoqFVC9CYqncaqepnLc44Cp",
  "key4": "5ZmTZAEwaiMKobsQMEigwm9obJoqa9VocobReCy5GATjiNpifo9Bm49mp4tNuRkyCahMR961trDRT2vuubLC3KpH",
  "key5": "29WWp5LfXGzWK1gnLDgAyZxYX6FRfv8WxeKzEHv3wL8bZb4fr2sakA6YhU8bvZquRUqR2iEF26TeHyjTMbHBpz7K",
  "key6": "WrZSke4JMvnsixLyW5QbHq6gc9fT9wWMFShCePzcLepAjT2AyhzfohvdHWu5nrEs4Bjyv1iaQiMBh7oVtgHAtVp",
  "key7": "4aRcsm9TcUUusntoEyxoSP6nbL1HhbdfC6RUSBpihzp4p1xyLTcWgGQrTUNVbb5zXDh83aKmFvBXksKLBX9k8zcb",
  "key8": "gYMppKTYAsQqUgWNrEuu94qHpFs3i8qgADSWWcNwWZYU3xgog22b3M21iRec7u7XY68G4U4HSddsTrhvBsayiX9",
  "key9": "5ko2weFxWAa4wCXrkm8X593uoxEDyytYambFtJf3oChntgQYek9Lo3gjzCJGpE2Ko1vAS8WfvcXFYsU4f5Yk7bGQ",
  "key10": "67Qa2H3mEtetSKgZ18abHKDy4sKYmUFeccs7BigDRFUj77ZiMKBdvWt8u8zK3V7SjjDEWEQ3JskXSWUX7VVk4oJz",
  "key11": "2eiLVV32NvEgCn9euCQjWbCjfH9gUcpNT79ZtzBu8skayhEv1G4r8YGzmm9PzqMM2XVhkfAPvBaqczk8PprueLDs",
  "key12": "67eA4U8ApzjyV7gQZTZB9vDVKQn2Ajs9UYL5Q97XRuf2sUNA7ND9UXbXfSCBTm4uGgaggB7esV8APhLMkJo8PtgZ",
  "key13": "2gsTyNSe6QrCEmdwkMfj8xsauFGi8LbnjAyTyBNVWqXfLf8FcRYcEvPjw5ghiXXeFPmeucV8iQRTqh7R9mcNp9XC",
  "key14": "2aYr3MFMhcREQJ1qLDws9uunkMjNG3KLWbkaG7cPCGuxw1hKW5T3RSDhnBunnfovB3wrJedgZm1jyYLRfd52u36e",
  "key15": "47ooFDkNCB9uXeU1Urfy1DkKwjvPH4P46ZCvrt2R4fDPEgPTbywfFHAmx81dcE1iKFag8bcRkJrMnvsNhETnM4Xa",
  "key16": "5D789Jutn4DCLMKFEJYm2SnfnePuiMgPJWEXFutoWjwR1UMTwBNu8YsonTFRwDRe8W3dyt41FgpVhRYwn1bZy7HS",
  "key17": "5qoE7QDk8jBEV8fa5bCfAv66MqkBHB7z1KPMFNxxsvNijCHNKgcMMCd6DHNQ6wkdWgS7jVLRrpqX9ziF3spY488k",
  "key18": "4KEWtzVAAdZhj6x89ZkrBZ57eoxDpSdas2GLxRHLTiQNQS8Wnk4NwnCyMKHCj28naKsBPug6k9LGVt62cGk8V9WX",
  "key19": "4SvZddcNXrbG8qxBxQrngGzs7Deiv6FJgECYiYzobdtNw9k7VZn42qbSiojJRuvZYmEguvkLW9bqs7mGproLnSpc",
  "key20": "4gZXHr1671Zgxu8KsnVw5RDviWrr8v1JprPDN5PM3LPAGreFUt3176TwP34GVWHiPu3Lcg61QyB3rNDQLxJUfACr",
  "key21": "427WtBkhWNxdsGyss6AnfvThKYjhqpnDP4NeQkza4EiYRtiLDJe1WrrnP4gUArpnnoyXdenMYUo9cZ4NLvcV2e2M",
  "key22": "2s15tSWBtfqfZMw3TkbvPEcfKbBCfE2yMcz1gMVfp216fRSPXapobenH9wQASFwn6f2SspQ5DyuXKoAviLjBFUkC",
  "key23": "WHgBTjWswECimb5M3eNbxSyw8zb5QohVo2AMRpFfSWHuip4ocR5b8Euv6N2CPw15BpdrSj5SFwGmB85a8Wf6WUT",
  "key24": "6XxAxtXeckE4kffEZ4PDyHgPxFbpsatibPkQ1BK8dVRXSsLXpRd6obZMenVSeSSjBuBuzjsUSG6K7t66X8ygSUs",
  "key25": "H1NHSkMqvJuAs2ZUsCsrm5aBTswVYEj9Zuh5V4xudue6DzFqeEcRo5pzwT5mmti7Toe2wLsDYrpUZmvKATRB2qs"
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
