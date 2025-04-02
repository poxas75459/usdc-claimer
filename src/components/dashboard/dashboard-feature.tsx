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
    "riGHbtUysp1EkbTSDq4v67YyUggmNhUd4RvGdr9xBN7mAACWV13GGg4dEYLLAdEgYTWpjnpEJ5CBzc3YCECCodg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yg2eTU8F88NCqeipSezN4rL86emfvHM3uzaxBuUBag2JVpAunEXTJYqWUsyLAW1VpneewNY919HMP6LgzrrfgvH",
  "key1": "4Jgt77ucEZrmYQ8m3exkyvfSUbQYK56VPPYtxcAruvd7yUJccKC9jodQcwMku64autPkntEMwCzvKGZUacckqQTL",
  "key2": "2hfydqCkKmUUX48gCiphAtZe7PoqLoKaYLat5uipTm56jGimD5KNkQv83REmtB5XMbQAgmpnWBepsQiPpstYqDAZ",
  "key3": "4wizHEYq3xHQphfRB9MGS7Sk7kXCwmPzip8VvJjqb7F4HEojCHf1NrsdbPzu7US5oYpF4gCoFTuGLUid7dNT382u",
  "key4": "4DkqFEQJUkJXP3ZfuziujTCTqKXtQefXnqffqtFhWJYzaz3h6rQh4BsJjXxEU5t7yfQRM2NMT71Hvqq6nCBco6XN",
  "key5": "3ne4j3VCJ3Bvv24Wxyt3uxzjqHY7PGfccu8o7hnBT84h3gxCDLgvbaYicDJwYHF2QRZU1H7JsfbYfuj4QWjgKJE8",
  "key6": "2z9CYwN9ABnTmjS8buCpde6qJQedGUYRTK5DTgaUE3E7c6ak8MAMxa4ib7KMCttCh6VVXzuD4pKLVHRrxYJKZDZq",
  "key7": "CmTpXRYRxZUjSvQzyDWt5xcc8eSUWRbBkW2cCy7Q8zQLoL79UcU8rdoqgn9eN15TjcfRsydgypwvbJV55AU8hVC",
  "key8": "3324611xHA16mCZfFz6d2WEt21dSkDMUgXCYSdWgX7R3aiDDDnJzodu4E8E5DmvEqogBjMFpSfjsi8ygzc4fFwwh",
  "key9": "5HxDxmjWhLtiK2gZCgJWb49CGJqvm9SMv74w4Bsb4Jns8wq4RsPs6ZzVsetHyGxQcCFmQ6Y5W3S2dCa4WXSMQ3NU",
  "key10": "3TkxTPjhdzWosMoFkuK38CAGv18qRARFbdBEYVjxbYhShodPALtNQK24DCUGxUc81QzFqPNoJ5WL4XyF5nbtnvGa",
  "key11": "2GJke57xbVRXw6hiD4EVS67q1fyfanp8nnAG1kHEkZLXXapPsuyxvRU8FauZFyYWy3K3i6793ZkBswZRMBmXxyrX",
  "key12": "2ertRCqz2MGnb5hGMzkcxLwBKm5NV1hRc24bgjv5ZWuMpfva8D94zVcUAnvhtTCGwkrdhJ5kKNP4cEJhf29jDb4P",
  "key13": "37RTtjfYySNVwJbHCseiphN1EBYSktUGEwAxQUeWfidfxZovQbi5edafm1nLsB7qnpCYwYLgTFNH8UAwSCdTVkzW",
  "key14": "53pjkwFEArsEXJawDHLcsZezG1JoExFCQcciYZ7EuVEwAtgSNcDyZ3KoxaRvuVpnENfG7CBetah3fuwWea1JNzDX",
  "key15": "5GMXYgfof63U4kj4CBj2MYZmr2rEA41mokJQPAGciYEQT4xJ1nNzajrBRdvTFZs8nhfQ8riyLLKa6QBeDJuJRowy",
  "key16": "2P6AdWiB7eucaCbdQruQSfhBsF8D2GBoaUw72Zpwr7qVe738qxVCZMqWJUZjVkQdETmzGSoJUqPukrJmvFNMkSB4",
  "key17": "5QPhdt9ZMFNESqPV13WibHNaY3f347PzXmokuH8u4erPXikgT7CBMsqJwV5ozg4BpDBZFTxHsgdrHFQDrNbJBBRV",
  "key18": "4XAPysjr7LhY5W75FsGTpjsQ2XrNvy4FRCEQvzfaMLF5Vqn5AQCEq6K5pYWdPh9prHL5phCYeTM8uaW9ecY9azuB",
  "key19": "3jBBs7dWmU82ZMtDsjiBAesHnxqoqPB7vMxbXLmLn3TkosFNEtkrf5TkmDaUmsRieCfgMh1kuZwo37WDRG83WMKB",
  "key20": "4xUeUbxtzmc3Nj5ZqSByJnZ7zgKmCi8RoNk6vbf5WZosHUGGt9VkyajrbXjaEztd96g4Mzzvow1fCTW9XJ5z3UVF",
  "key21": "4f3YPmtiUusm1iTG5JGWeyZH987oM6VbkKcmCkNepHSEnsv7R217P66M2mVGWPgzsATfNSepeburbQHrM7Vh8D1s",
  "key22": "2sz3PgMJwNKikfwiBjQ5AV2uT1JaNVaJzqNBNMptwYXq7SwiJvvV2rM4NsB8bRdLs4KwDvmaEyJAuWZ2SLiHcF4c",
  "key23": "3ePec2qfzseRSpUoWULDBdqjVYFziVxMD3aEunBcZup1HLF1L8i3dw7uzFK8JwmUKJPNyJen9xBaWs6bnwriNofa",
  "key24": "3NULEQk6sPH8zqJgGAcdzBTRpvt4grwTwFH7EtPiXTkDU5P3CfJWH2radneCgp4scjV27jGvmCwqR5EqoeRnzVeB",
  "key25": "4eUgXufoE8L5J915ncVrMb9mejsymhbGiTooZ2yw2mFCjxAQJi26EecFHWE6VGMiHEL8XQGunpsBuX8462i91fUW",
  "key26": "2ak1KoYjQdrTbYSvFEWLg51dRxzAmXHqk2j6SHrqWZPRnQGSwQvYPSaGrNyzACBM31sRvDZM6hQ8o4c9f2dUaP3j",
  "key27": "5DD5kjDRKRajmKpfpdNAx8kNJi3yAcuNxJY54SH53CH8eCENLW8BKhk5JKvTQdi5PCqP4jWpjsAY3ecKGrGBaYLt",
  "key28": "2XhXik9BeuGz88UWBBo3KzPMXhXTNbrkHhhQzUapvApUF4BYdiUKEsNkrNUSUFBuySbauonGQTu6dD8gimnDCnuw",
  "key29": "UAL1u3EP22NTpisEo4w4y2FkCRc7cyrEAHDmV47k2EYFgsCuucCG5VHF7cmK3TBesMLYDVkWVPQaercKnRP9fi6",
  "key30": "3fYaWeLuangN47YFPnNH5KBX64FBF54K1hp3YTrtyokwmxHuc5XMUF79kUdnqFMRRMboWA7N4uEeBA4u7bhG11mu",
  "key31": "3U1xFmjfkPQVAfgH7SEYP6zdJCGqWwA8q3eARRS28rWxcSeBKLF2x2NSHE4EY3uemiVvKGi4WDCAoXA9tSiZQbw7",
  "key32": "4ryVsVGGmLSNMwzxFbrDGqPUC4FjYpWKZkn1mpmv6Pz3Xre1NGq4vmWCM3Z9wrqe6F9yPsxADwrCTGqSWy3nn9J4",
  "key33": "ZqkuBNwCVrvWdyVPLFYozCZXz8Uu4tozAfRDc15W1cZJ9SLUJ7PToLM9ZoA8E15EEcT78P8yqKUiEKuuJcrzjMG",
  "key34": "5Ke9TxERDfTawjFGzKDUZd3ozpxAzZNeEFdhTFynwSrWuty16zJx7C5NejoXMUUvhZzUdpgL8LbyjvEC8kj7NrHW",
  "key35": "3cH5PCbdnxeKvHPdGtJ8n3PRcYyeyRffijhsNnZWNPq3YgqtDPExJ9BvWnmyCrj6P3D5pP9MZCvidJwcctVBwveX",
  "key36": "3SeZPV9sWbdxWb4kamw1cmKDXRAKXEkyk9WScyJVaQ66L32b5V3jQupz1VLbs5x4GNevWyC3WNTU7mhFcP5d8VHZ",
  "key37": "8mFcR1FZvZsckQM76Z5oLR3ZmtwFCQjSvVmem3q3cpP5DfrM7RbnK8hzJWq1JmXXFaaQ9WbjZCcCJYUk1wBvVuu"
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
