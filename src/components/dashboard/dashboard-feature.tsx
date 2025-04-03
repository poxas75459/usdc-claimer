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
    "5rHG9qE73ZSFsyvLymxWjiEcngtLMkiUiQuhvaZYALmHBbCYBbrPiWmWTprxBMeaztaPPSrbSpVLzg6qouBqaLQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eY47LxJx9qYXzKUQdevbykixWU7yuT2K24W1NPWzHFACEvh4rmqd6336E7zgnFWyxbG4H2Qknz8j2uQCVWeuyGs",
  "key1": "3hTAcQokB4Vdh8ohpoVCH1LTWgQVKKRe5sXVwFtxFtuAks8aLJPmbSc4SfQdhR1RBLuxGLk7txEYVBHvnL4WRTQq",
  "key2": "2Z1cW42weiZ8jU2f3GYPPRB51d7j3twAUhRuSzKqnmpBFC2ZGb7zAC8ftZ9YtUqgi8htacEthju2xKwEAyHczZtX",
  "key3": "3GqBr1UatRfAAKRZ1vvhUTvUMiAvrrjWrp3ebtQujH6FnpRKToLfgsNqcEfSVDj1bi4W7VuyT7MBi1augSh3KteF",
  "key4": "3JDVjthheJoEEoiNR4EGip4SwTuoNfp5KMP5sG3SFeKACgkxL7GVqX5qkLLZyXLWiFMWjMjmVtoSja31JFRswssu",
  "key5": "4dp7Bj1AUkgiQ5WFvdwDXdhf16ZQWtkJyvo9MX9E8wg1cPRbttCsR6x2MiC1NUu4BqHpgUxCzs7H5izFRuAtZUdi",
  "key6": "sYVXfvrUf5p51T6ianRQRxK15yjcdcYtKaqeng7YDRqKbLQWbScxPYRLrSff3zwaKGncPQ97DJVrGbnCujejrmi",
  "key7": "4Xks8wA7Wvy266EyvPcUMTM73vBsSVzaBr64hTsejVgb6PKVUYUgHSQPCrXpiCyUcidXnQuGZmgRuuYfyft3QX5Q",
  "key8": "UV5syoSXndqy37W81KTThmeMFs7o8EwS4cK1Prq6QPHda9H3HjhBNPt2hkHKtr638fqfany2vA4UdNAcWSSS34p",
  "key9": "41zxf7HaxT3ta8Pv6BCinStkmScMHR8jxtkkjHFU2DJxhe3VcLYcUUsGPBL2FDEsWA5WQqGPgu3LpfxmAhSiq7Xn",
  "key10": "4ZywTNjRun94fuDtDCBuEDJwD5naaTsktpJBuUdWGYQZkxDFDVweaWKDTMZkzYQ3dQEFJzxe43h6rahW2eeHQAVs",
  "key11": "2d3ZJ6YX2dfua6bEyyKrwif3WzhTAhhNbxMXmrZ3DrNqV5bhsfeYWy8WnRFxGBiDd6J1dh9VfFmQ2guLaqDyrStf",
  "key12": "3gBFH2sQfYeLJqBdS1cUndJcPhrf3MwhFMhwePLtVcspNvYSUtarnFmmc9rCTNFRCJJZeBkwRv9EFpViixp7aPfx",
  "key13": "3gurtNMLveDirUCpuYVFauAEWiV7dWJSa74hbmgcf1231N7C9MmLiHpR1N4YipSTNe9xdH4ZkqeYXMTEF1nPoGLd",
  "key14": "xPY3QQXhBMDKRrssKAWJ7gddWuQpzwmD2amM3ci7k8w5C5U65SxnDJfLcWNkbpSuFYiZ6MoPpqYTmC5CmuyqjMG",
  "key15": "3TiVP3vX25wYdtX2WoQhDnq9mj4CRkAJxRpc5bsKdRyBiVzZms1NKCE3pktkwxHajDUvERBP1nouT1Ep63u4rWFp",
  "key16": "4CgMMbo8GvYk91BWBPUS5ZbGRiP3YsdNSdZCLfx863AEQC9BoVMthCviGE5VnnRvi6AWyGvPHWJwoNsFfbdd48Dc",
  "key17": "yRD4yeH7gPPheVPTjt9HeiJZFfjkjojaXV3gJqCLt9LuXtf2tPcEuveEKjpFo9G9k5MQ49PtnkSyWfiahxNo3cn",
  "key18": "3MiGrYmLuiSDpQ78zaeRMpPo4hs4DdWCmAhp4kjfWgQL1ZMaiizLqu76EWY5GXhQKHCyoDcLDRWiCV5wVPwaT3rL",
  "key19": "hgRgF9vhqM8xxSh18uJhbFiBpXyCBE7ykHBLe5wVQUTKzMv6aSgYPLdrnDuCG8DghyZQGsVz7kZQLqjo68JzodS",
  "key20": "4sWxZvpiESpG57th6BT1TMvVk5FNdgHrPZnW5xcGaCYmKm7q8kLCxePXnUWwKWvU7TmkcFsfYLUXurYm5SyuL8EL",
  "key21": "41Am28fUZrx1mGQ8WPErfpoBK6jpxYSDykN2B5Wmp7Ftd9wzsB5bY2uzWHk8uD2Q3SSoku4tvxfRKeStfFdM2wXU",
  "key22": "2oiEL7bYbcXrPmVPXM1nT83hXmAkGyaj6EzRNKMM6HJCmRLjo4KhE3nfttEub6tGrVgMyQwyX1PXfJeAK5SeT7oQ",
  "key23": "2YQ4UosCWbdWWdbbkyzgTQCDhjQsU39ju8UV24Xcb5fPsC8gFEe6p9ZCtC8LXhCxypuiBV5G6GTkk7jKdP2Rcg6G",
  "key24": "2vhtgu9JFMpkf3LzHsopbmgPfP3DiRPSUfqPwNA3YtpeKxsvEQgwDfyoP4WvAELwWQpmRHJdT3ZzEez2unPCSTyk",
  "key25": "4a2hxqJcDSMVCXxYKCr24NR3jm52myXzeNhcdXDd7bhdbNLdGpE8Kv8q28T7yFBrsWhzPpZogSd34QUhwUrzXbsk",
  "key26": "3bvgnGxG2SME6pLSfVeMpBaVpX21mubrH5bnFhT3dBNv6z3sLJLyuBapNpaqGZKgzG8tciRvdsqMrGmGcpwMDvZv",
  "key27": "4L5q9ouVvbeqWukEqdawyrLByxnEiBXRmy5cbzRZqZq7r981gUjkWbvzW5aSdzxi7yYbF5rM77LjaYbnyUp9nAW7",
  "key28": "66Lu1Fxkz7Q6tfQbsM7H2oNh8CJZnVKNHuppTdQwBEjW8PpCybWUSLf9RSpPdKqejRtYiaqhohGb6Vv8Ck7g3eKR",
  "key29": "5aBvti6HAqwbb9Hn67w7ckQrurvieCfsvoiQH3DNunb2FvLaPHDdeNSVNHaQAXpGZmqMZC9oAadmsnempf7zPWuw",
  "key30": "4LmUnTRQ6AMyPdkmMimmPQhTP7kyAeGAEVsrYyLmNFMVMos3yVRrtXhpC6MBRJ9JvwHb2CJ1MfTRikVs2LC1Pf7A",
  "key31": "2qyA1n7nHm4XATPNFZikwtrW5eMA8oSrudZ8SpS3isXVPzk5scb4QghvtojZAzGwzneSbLpESp3uzfTahYzkXZdR",
  "key32": "2JFMut8Kmizv56g7AGQuwctEPwMFr8FD68Xn1aSGJRd3CLQu9CHw1HHwdmtmtQMP3vDx2yF5EDSTktZWTvKduY1p",
  "key33": "3Yhboo87kK9zaCDeWLDmiZUHjBLF75rrxVYG1GBtTZa7ZJMqXHzX2yaxkVgSp1U8m5royzqJTg43p5Dqg3q18P4c",
  "key34": "122YaUdiqXJwxi7KMN35gEeFiei91hP4zqU2Da7fUbXjC835Js2SDqfZgNYuj4KbLcGVNMK7crugiprnqWYCqyNp",
  "key35": "5eCfcaCf4KAbJzid7piD4M3CZFJRTHww424dm9T7yvR2WfsVdy7Tz5tV6oX3rruauesQk6FPUmGoUrZcgQnaBMnX",
  "key36": "25e24DPUowoTuG1yBiZvVpnHfRdYT2igqCncbFX12coSkXRZbyTYsa6hZMKekrTPuM2yiaA3BEZ3s6sevNrhZHA7",
  "key37": "2zAJDUQFHvxkECcabic2NT73udMuuL43beBhQ8KSx1njRMdPGHBL6iCxWDPmc89PAB9S53f8vc8q2E6SJ2tGB3iH"
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
