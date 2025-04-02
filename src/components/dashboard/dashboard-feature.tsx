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
    "46FmntBj25pz8KZhdMy5db8VDLXjGACwUArhVwjYcTU71KwwdjQsEr8BNoNHnD3QPsBnLfngPSLzcYMcivv9CqBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3veFUjKhfw3RAhepA57fY6yNXCHJBQuAS4Vpa4TdrQ2ra1sQtdCabynQSAwCzRrasmS97zbhR1tsSdQZVERD9PGQ",
  "key1": "5zeX4tH9i1gpuNuyDmjjvFAZ3CPgnEqska3QKzRvkfjG3rbtQiz5cQw7Jv8FS88sJZ5dfTPNcH7x9C1Gw2iScSoN",
  "key2": "4NUVMb3waWT7HC2Lazuq2RCzw2NHJimp9AT7CvdAUMZjFTy3mHDcKM69MBsfb2ZpVHDG2syrJnHuHV4XRLR24MBn",
  "key3": "35xkQ6kzrPx5ek6McdLMHPUbjawfBFwnumUicY16kXAmKakK2nMhWfVq22d8f7VoUbyTN4u7gW4VBFH8zc5oWykt",
  "key4": "4vgWCWo7pZ9uGJ9UTy2Vo6rPDoUJv6m4nDgKx2hRKLmzNa2LFPzdndroTne4Cg6YGo2JJ8MCwE2yJxrRRuh1yXYd",
  "key5": "41DdK7yAXXqUqpEYM6ApJHEy1hHUi5s2cfynZKBNpFuFenVwqXzrQwRnX5g56RARafW5wKbN2QQsch4mfHkjyyAF",
  "key6": "krZatTZJfNH7v81Afwgy5WupZ57xtGpFVunB7UAqtsWEPw9U4cVxX5iVrf9NBkpY7qD3cBF4T5h375w38N8QnFG",
  "key7": "2VTohiDVbSeTTzQjhpJdLZusm3BvwUjsJc9Gx867o67HfKuCy4Vx4LHeYd53jSRp6oq2L4yzXpVd2oqeCijsqMKw",
  "key8": "3foZy2tSvoWokRFfWPT9nD5uhagsyQXTBk67hVNcnsjG5vKZBoMJJtzEHVBAwNViBbrJjwkZmUEK9aQWJETmo3HW",
  "key9": "4uzjJFTfKCTPDUEahTEEtRPz4SMvTZjE7UAVU44CUnkTuFv1e52tggdMCNCRfZCD5AsDBjYQkLdugE6SCsCgtAmd",
  "key10": "3uzu66j1ZXD8qLYr4ra1MuT4RXD9WfLCq52byPaqyoktituGvPnp2ojRRUhuzgnGjZnBpFjT6o52ZrGqzn5WaMT7",
  "key11": "4nXhEyLbipJmZYkMLh3yLJ8txWfi29TPVhpwsx44nun3jM1FLiqG5DaEL12m6Qybqm38Hsfk2Dr4KQBNN6oFgPEG",
  "key12": "GjonhxdxBzb48cf5tgNcfAvjZhXSr6XBoReFfKXu9ZnMEf27J74FkY3HFUo9V3mo8hsKFpquzDAmDn98bG7hLW1",
  "key13": "3MHJPxGBK2sZeDARJwjngzhAjnURDzuUhXx6LiCQ1gSu2gjnQ2LK35TDFJpgDptFs7rD8wghxzw2kGzub71ztnfH",
  "key14": "5dsxUy1e4iTdQ5xiCbre4UeDdZLQshoub1eFZj19BRszmFYeSCwnUBXfSH9EorGcJ3upUFhhFZ1Tw8Efgk7GmgsC",
  "key15": "4jAjmrwWzYiZ9qr83CEgkNrb5y3KTbDVYbe2VRY3DnvQ5P8bdE1r67xt2qDSfg1sMivF6qSqbFuTvn9i9wrWJoi",
  "key16": "nTuqpQT69przKBCgusAde6rJ1czHYpG4W5WboF9Bhg69kqFEkqA1u6RFs5kNgkmXWZYKfD2Do1XC5e5x23qMWhN",
  "key17": "sMgLoLRtbTuaYLKUf6GScoDxQznBWEWijYRHrBjjX4p9qsxspYtgtsDuxzVT7x3Vo6sGAfeSgVAmFoqQWD75k9Y",
  "key18": "2fE53RamjFwVGCYehLJRkQB7DiDVzzP4ps7p31CoWsxCyAey7Vxx7GZcm1j6sy5nZry5tDU84zESG81BHVqjMkDk",
  "key19": "5xVzP5naoAvss42AAb5FrkiMmppnfmMXL8DDav7MpmFf44Vq9bCrzsesyqUHKSgeURsxp6hjLEn5PDgidT33vkRW",
  "key20": "41FpULjktpdaoh7MTaAsVug7hVK5QRUUP2Awrp1hoJP2P4NHj3cYZMqqbqN8ue7qAVw3UhQxrHBMuVoVpyz6Faid",
  "key21": "52aXWYWNm5G14LxPWuLELSeP6Ks8EB5bTpZLvFDMLE1QT2f4NtPrWDHg9g7HgcNTmXxmvdQp1ZUD9DnFrrcYDB1H",
  "key22": "35ca89z44XppPV8sKnzgumooYZv192ftkoVPezbruQ3pqE5nZQMuDiwNeULaXQQAUrMLe15ifPkh4QzHAkvsyqGh",
  "key23": "35ZGzCJ7U4X1tEWg11iUvSKWi8LPBkSTAVUTnLzYErNsWNEr7Qcm8JhExDXuH34yGbFBZBsvfD8HoppggPCVguEk",
  "key24": "2ksGwMyNM7DRuSD1BwGw2GDqp8kPVnLUy7e8inSSUZQUUVmTdbmKA2FJ2HcjaHWjfedg9Gcd5A7PxKqxnEXrb2Pk",
  "key25": "2hFLXDWhNB1aXFW2auzFsFoRHCtEuVJLBn7Wq7ACWz1NynFDtX6G1gzZZMECyFfhceHFLyHXdXES9RTdBHkHGN19",
  "key26": "M6okFcxoKxkFZBUSgZTb7UmGbvf8xEKnP2Rqanb6vcMJcAPaucTWWavPaeuDJikAL1T79MCMTD23oSUVasdvx3V",
  "key27": "4xa1NtATZwW5RtdaDqtpAqeBPgDT5pp6mmdgKKYVspRTqVwAYWisLAn61vBKQYN9JHALvJjeRV6C9CCX5g5VsmUd",
  "key28": "5vhgF843F6kohV3ejnwj8yPSzqK2tBPGXHEwejoKVsj2v488jsNtUhUhK7eyA5x2UMSgq6TsNzk7t4HLwLfUcu5n",
  "key29": "nN2Ky2ADynW4rpNXPFwYh6vTQXfSHcsyafegxmoJqfNChX2K49zWncA2UhNu7phrProm2yvNbsAkv59UjJX625F",
  "key30": "2Jcxa3pqENDuWsRoZtGSGTdG7G6eCTm1QrAqNAp2ARyMYF5GSCaSUK57x7syAWjCJ9ggdrDA2fbKxQG4TRvpR9M3",
  "key31": "4n2hfxpynMii5EAdrueA2gmja8yR8hg9qPgu5sJUdWcFGdLFBmsC5EcNRh3PAPeXMpZDs1xYBeBVPSrxK8wWgANM",
  "key32": "4tNh7xFvVCM1crZvPAfBAcMNpunA3k9YSQ9m5LwEfq8FL5Tg9RzRy9WTh3csachx3L3E2Pb2oY56hMLJDpLhM2uh",
  "key33": "4MoLBP8RAJmP7nK35SggpW9wtF2LdnsbwJVuVnvGTbkqB3qnxqPQGRHtLJnAixseQqAaaLq3uXiR4VioijCuNWKa",
  "key34": "28QYFi65uH7mjZgB84xY4csAKJjmcLHG958vQVLPEazzi4Rf4CWbMQgW9QeT3p8qafpqXiFtvjLgU2rJTFZVj53E",
  "key35": "3mW1M13UYVcrwjiK6NqDA56F98c9bvEZCiST3UVLT8ihyLaxnRQdUwpkiJzVG8mPRvZQAUBm82ivSA3vuzd8z5or",
  "key36": "3Vfr4CjPRMA6aNVmpaCDGhu3Zjkoy2THYgA1JqXyHgaxdxev92eyiAWXwCi9NEFCNrQnwDFThC25GibHBzriGsS3",
  "key37": "2tzMAr86pUBSiBZWMWDTKUHwdNywGZXm43RMeFCN8Uy636BPtSsW33CCd8gZ2HjfaBn6kJzeSmjWbWSYduVV4rqW"
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
