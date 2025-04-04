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
    "2HhqWPuNQUcc6ixNcYW62hnxmvN65vzGkJUCvHQHqk8MsgTiUQy7XpVoVnvNs9YxJynicyLvf8LeYwQhcG27mYQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rEirieoFBBdQt4ReykFkST4LHSsb6DrNkrh4ksXAfVLBjbLr9UvcwXngpBHWt4ZmqoD42Rz5JecpHofLov9ju3",
  "key1": "4zQGTtgo3f7szhgMbDQKnXwnA2ftWayW3c6qa2GuuFvu8GytsvVT1p3Fuu9zH5kAJrySgRRTkRs5iMSv7Jat76oH",
  "key2": "4Bzmx8APDQUzccP2PCNFm3LFbk2wqpCenrE815ZjUEU3mTi2b7drnBhPgZFMhLMHru13u5rmrwGJCmLxNS3BQVJS",
  "key3": "5tcouyzPdiuiAruSfXZtmkgkDepwVmpV3j6Cpkv1woJcH6ogaqmEKiQPuDvTbXPdH4ph5dgbfWyvDMECt6jpftCZ",
  "key4": "5vzTexgpNLaYEex3pj3ZnvAqJEEt3TJDBxdVTK8XNLKkhxTxpKRTLEx34FXwugCGdtNXTLvWxsg5GFvj19c3gf7r",
  "key5": "2g7dJuEPtjurD8cEwiGN435eFqv8ZGRF99xzutPKQAcbEE4GW2gYf9AVWVhdDtkMtw8CEyAKNHRGn24L7Bpa2Dnt",
  "key6": "4qURJaTagCCV4rTvdDXef4ZBUCimQj3F2nsfdaboZRDsQ3KaP9Z4Zfe1Ld8Um5P4UPR1tuhe8XxpxFgqZJ4QeVXn",
  "key7": "5KQDMbpQNwChVFWaM9HwYGQTcpo5esjvADu6xqZedfNdwfDRbiLejZbh4Y1GoViRsp9uUwXaSkQ5M8VVG71mG1Ue",
  "key8": "586RrzJ3YF54oexwnpoGXsH4FKM7YpjNoXRELdYmksP1JNtp3A6kTiH5bag5swTiyhKTWAxSgTtYmEjiP9fpTmi4",
  "key9": "5GDoM9YdxJ9TMnw9pTi3r7rpR7FzjisfRAN6PCJZSWpexWgsai9QqgLgBBu5FaFmb8wGX8MxUBoPB6dfVJV8YD7C",
  "key10": "1233ty8A8XJzdGN6aU9ehR6cioLz86B1eSXryukLN8mf4Co1VoUmM9Vw2gh5LHbxpYytygZzaBgUKgn9AJtWUwxX",
  "key11": "4N5KNUwdAJhjEymaBMGAcmA3zmcJaWLohNntahBz1KsXGRQ7wELzd66fnTZC4yXtjSqDq6RcAxXi1UybvN4XdfYw",
  "key12": "2ZqPpa9kQMZwPcRNnG14KGVKRjHMC6qp3nzeqVbBxFeqxei48CHXQS1qK81HXUJPjMUQbcBk3gEQTpNbTDfHSkN1",
  "key13": "4d9bPbJk31uYDgmDZCHtDfBCCBkfJSCC6UHcC67BzVfToP6iHgrpMpLjFz24yHAdHV2hQF5YBPcTW1b1N8PBQPLG",
  "key14": "4PzWivizZdbhDmq4CCH2NSEuo2fMXq2GfA4snSywJXNnX7LqxKTPuoqsD8eczQGpU3Aei7HUtEbU3L3yFubRV1XR",
  "key15": "5Yr2C8ANiaKcNBxZ3xMuQiFT2jnTGWGKqyaGw4Qgt5Ett9Fdd8KCZtHRffjxx9obKEJfSr1quGfSfDFvKEa7F22B",
  "key16": "3MjPe6nYaFuFznECquDVxho3taXA9aE4x1PzeQQ98hGbQvLsZjh2uZ78xXbwcsbp1kXFF3uXvdJgDT9AYeJiRcCh",
  "key17": "55PvCG153Fr6KwAcfi8Yvk16rrFc2G8Ac9Qb3HQB2NKc7fpN8Wsg3H35qurG5ginr2bwdB9zwPpJXQByAkBs1Zyj",
  "key18": "4Yx1tLxoEiTVi1UzjwTUs3BqMjqbjAcPUCSaounQ4LGeKDWeEbXHFfF97hYemQBzLiLTtoZgV9e8KpfyBAKo8orh",
  "key19": "49xzpiHfQ5FssCA1aFSASMEWTF1CGTHChL6SM8CSTMEcPRRz5ov6xyfN8y3QWKLyfHt3wuUzV5kboqucMA28w1tC",
  "key20": "259j55u2brwipaCU1f4CxWED4PfJgT9dsYH7D3LZTDVeS4yqjzwDJsW56xE578sP7dXf4VHeS529ZJ64SiQWbn2m",
  "key21": "asP2vr5QHx51pZ17C1vrNMbf7iZgj3BnTYuZuMqogQ1z8DDDBqVAdbaei7Bo3xgNqrGvafboPJ74rqXGNL6CmEQ",
  "key22": "49D9RGH42qHXrrT65KgB5uWCxaSgZ8hYbrQZVPFpn1ikWhWbcGeWRFBw9jfyuC8niSD9UJ1tLJ8Ap2GYZNE9oX7H",
  "key23": "5HNkmQvjDy2eWwX2DS8ST2YHR3JWEiSy9xKifWFMYiLsGWFXLy1UxVNDzGvYioC6ZkWmz3EPsyTK4HphqvqsU5QG",
  "key24": "4unEGv4ArinBRD9AYSUyCifgeJBAE5sbKv6eYg6Ro7kAfgLnwHARmdqZuBmeiExNuPosrRGk839VvBwvnHRuz9fe",
  "key25": "5RMpFMdAZ5sovvepa1E2rTQJBMfqSsQjKtYJFfZ9bCTmbn3gVU9TKJJ7HbwwMuFxusWxoYBhpuBDdFSU7aeHCpjb",
  "key26": "4cC2up5DZP9Mnc1najAX9GjZN5s9WJGoRxDLNAHrjunQLZ47JKU6oDnsHTSMv9D5TPK46SExzRHF2Yv7L1bdYBq1",
  "key27": "5sFuJM2xDZE5GtdnR1gy2MoXMC1XfPCByQ2Rc1k9VtvNY3atV2oqBoZ2CaMUDiie9VzsScRQd7KwS3DLqJAsdLVP",
  "key28": "3DJWKHQHFHRLDYNR2Y9EVYaHmZobear77fZit4GgPYRuwp53Pu6u88zDhUv1AUTHQx8tqfwyKjPXQCa5UukybXb3",
  "key29": "4wYtxen4LkkWNNGbMa15XNhpKijmKqNLD2oSipPFJjZBsNX7Bw5vmbcMpQe2YBPhpWxsniWB8J4pUAqDvdK4GD6V",
  "key30": "4m3ATBfSRYzVMTZwyNiTP6vt9p7vwyFVnS8wLSqWnh9NSZkNguNgimp8DS9TmLYuMzPgdcNYPHbF6MCtmR7jDtdc",
  "key31": "48vABbJhx4DNBL1z2325xcLfr75BJuQKhaVoLu9xExvRMj9in9v9itA89Xxk8SV7xgd81GeSt7HK5j41NzW12ix7",
  "key32": "3nnxZVNbqjyxzgnNXihCNLW59urkTnUmWvWy9K65pjV7abipt5idLM4yMfhx8srMToCMrgqLkTmUYyAfr79Nb4Wk",
  "key33": "2fUBBthTLdMLpH1bFnAkhCFAk6dJ2S7yhDCe4QpWQYyKuxCczzn9e8Ng5st5PxsjsAo5RYx9MvEaP3hoeDcx7g63",
  "key34": "3QfEr48nVSFDCKnX55AFpP4nSJdiBQEpGDC3H4xNMeutfNeEC84NzLSYT2LgNVbos5kEgYZ5E4xmB2p1QgZtJr7b",
  "key35": "3sVB5Wdj6joP3uAUXqxJYT6RY9tt1Ri9Es8i7w82ojxVEK133fGX8Qwav9iWxyGMvNPZkcArFAo8tksPgD3MCgP4",
  "key36": "3pGbZXiXUAZB2Y4V83nj5sQss9hX5tUgFs2Ytr67mxkZHX2dQAaybqzLb9pByZPD1RkymoUuxujkVrTs6S1NZfFP",
  "key37": "5x1WxeVaY6hrFFa38gwNNU4ZjXgZMdb3qqLo3s9tZ6wSTh5be9yFyxFRGdZLkw57ySgNi7FjRxobFfHqPxZmYpxy",
  "key38": "5VHqEbMDTinKdScUtXn3d6B8EZKfqbspKHhgErgeja6CLenE119bRDNY3fhxv9hWLAhztjVCQDtvkL1AewSZYjNX",
  "key39": "aGcHge6AW38NzdGB8nWM6PFVmHFdWthSsLR2xU2fbbLjmRA89oc7QzWxwDvE1pXmLLqFoDoFofcQzbRfmNgugsS",
  "key40": "2ze61YqfBf6zAckAeteMPf8cw4xQqmmsEZJmwMr4zQp8Dm5x6oRnSiarE9kwW1Ec3K2aRw16BNfHUw2f9rcCrKyP"
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
