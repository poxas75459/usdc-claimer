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
    "4ThGoESusnNaRn8F16sRogxrFxxu6YPmfKqzF82DK7hHHxLsWRizqfTWE54CHFpcXG2LGXQVm91waUzJvEvrBXNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5c1j43ouXzhAjrr2ECv8R6L7Nfappq1ZFjAwrgtvQNDqejgwCBWVUDyRep8Z5qNZJQS6hzJNT1EXGvrAZVhV4r",
  "key1": "3xY76W18ekBYx1hSsy75pnGkawNEGZcqyD2YyYEbFD512kAw3pMQb42fSFSWfsCtdfZjnFUi4XD4YLhjVojj3fht",
  "key2": "47Fvu88ufXebs13L5jFuPMe1Mm4yhagSbXLt5kMsSivzoBWVgoYXTtTr3Ckii718EiDKigbEChNT5e3S5aMNQbZN",
  "key3": "4we1dyzB3CEN2NMz3UnNxERT6hnHRCd4wHD3amM5dEFr6XL1fZ8e2qufqhdxmJEx7SagzRiRtXi7WgVsEP5GLgG8",
  "key4": "dHUzq3LyWyn7Lnx5u3EsQAYySNkmVL7Le9wWRjBfrXJQhittWARDRaRaimp5afyixKkgzcmnDxiXB7DfMeKyCDb",
  "key5": "3FwQ9CYPVMKA2EdY9cwNmWgMveV7uVHBGhh2rS7ZzvXiu7EZNaQABpLTPF2zuQZR6vSRT4LYKiWT3tS4ZtUDH7pQ",
  "key6": "4ng4MWSkvCdZQ5VjKVNVRomEnjxEiK6L1WDxFwV9TMSFVvWhrdSefp3PiaBGngMpWMCeHx7WaVrdiNzBJRdY5Rhc",
  "key7": "3tCGpQLg46Sr6WSbEDfhyEo4BNiBaSr2kdcSs42ufDjz3pFCoWLW2hpu6rcjzqzrKW4EBEo1DY1oeWbkvSu1vZPN",
  "key8": "p2SAmsnzvAqnQsYRagp4BjuFRY7Zq5gWou5E4T294fqPDbcETFD9Va3zQqCbqx4sZPSzZrMe8Eaf3xjPEZrJCtf",
  "key9": "5DR2AuPE7jVQ8yAoE7gswJp7kXuXNscMmPYagiJPkAh2EA3C3nysoB8FXANvP9RgegCnAvG7T1kGW7xUEdq92qyK",
  "key10": "2KM9R5YuAH5CZLpYZq2jZxj99tAXBQ2TghwNsF6ZBFptNE5N8L76KE31cRdT14B62XtEMSq9XFY5JbVpuJwYwqs5",
  "key11": "4s6eVEWRvSYxoGQoZ1jTxeiPDV89bH1Vx8RiyQdtEFfeTRp5URphEMzeJDfcnA9KNQUza8v8xZ6aeMKfAzi5gqf3",
  "key12": "2Wib9rd12pToWAidiL4gkbxDS2KZ8nzCTvb5BFqc5mkcVRMwkYRFRWqWqyDm7GirxkiMts478ugLQaVgyfdBf9bp",
  "key13": "4ztvVPgnWD1tYdm2mBtZAdQERUHdqzJQwowCbprgCZaSGgcwNsB1aB2VuyXGL7Nsctk6e4J1Dcx74d3MS9Q41ysP",
  "key14": "kAS1UgpTwRSVGSBGptRYKdbDzxL1owxmPKVRRGS7uoYFPS6zSHk4KKHbW3nTo7BZChpwFBv69sGsTKTdD2jh28R",
  "key15": "49fNKC7fJ2NGaW6W6Vfia1sLhHSiXwzxjph6c3zwnbj1D5QXerYS8NwKzDNgGADoKHYasotmGBE298iQbvkLwCoa",
  "key16": "TGVBFRD68HG6ziiuX7wcynwEwbdMmuATMfPotac3NWnEeatAiUwMUUg4S3UxdXXXDQW151DXB85xsy8bYiexkag",
  "key17": "Yrmr6uo6Svrf5Fz26tjwcxMW8Lw8j78xAQptLa5bQ4TsdcNtpyxcnrWKFBgaQNDnSPDNafn89UuwJHqjmWxqU7E",
  "key18": "5VBeErLRtjCjYF1jphasJTLyXXqWsMhbukB52Rc5Hr2tW5GtkdUkWFNjubRYGBBz5dGqCxvFQLEDrmAFMpXw32V6",
  "key19": "3wsDVciVfEPxACtXemd1c2hdaDt5fxNtNLGRATFTgi2eaXruhUz1iFqtN45idk5BpTFmqvUoeNWjjPZcnsLzAEAh",
  "key20": "2pN89ipMxQLi1aygrmSHUYWzNEHJGtCbQeoi52QKvRGDLv9XCcSBrtYMC8AEfF48pFAUEa2aiGJb1LJC1HSSomKh",
  "key21": "3h1gMUhnRs2we24EuCemHiuinivsiHsBE9v4fs3bKr5UQBsdNEr5WfxCzt9LiKs8U6Tukf8rwWKYTfyLggaKGBK8",
  "key22": "4a2VqXXd9oC994BJK8qsJbqSi5ptmqeLR4xR6JdzcaAmbx4dK2NTc63UWcyjCySy42Y2HQ8BokFS8HPAMoMT21Pz",
  "key23": "5eXLcwnbkymFjW9afyxznYNYuaEhuuTgHGXckbZcwjuVQcMpe4aY6b1LTbCAjpb2ohTXhWUsNnG2EHdUMopKbmdK",
  "key24": "hKGrcRgXf92DaXRF8Ty8ScgCXhf46tABMbLD2t8V3M3pVHd4BgBLoidRjofxhu9DeEgjaB8p1P1DtyN9yiRmWvQ",
  "key25": "5bqtGNX9WRb56T1RjTSF23rMQZLADP3MZs8L44bgonMtxijUm14ceNkjxofcnt4bUZDxy8JhPBbEaw36UmGM2ztJ",
  "key26": "RmfzLiGCdEBB69wkpGicoU9wMumptzToSLZeEK5SN81Hr3QDAYCPZvnJKZUeHwtUsYLhAt28YHAw8STHMGottze",
  "key27": "1AcUT4igoe7CFewuuYujs3cT27FFtN48U8T4rtiCjF9pjdiWWKSQ1WKw1tdzY9o59KvUcn5HcH733abtMjxDuBi",
  "key28": "5suVQ6bcKLTQXzdVhLe4taeR233tFFu7XZ1ENysRAswb2bkgGVWqgEEfsxf8fwLPeQ8bbNA7FsFEkYWq15foJGdg",
  "key29": "24eQBTf3eDGJtscid3urK4BxSxdWt3SoqhpkgqqCUVjB8df2XZzazzDiB1qWsNRcZjytMzdgbDKx5ma7Mytoc88M",
  "key30": "2AMY3wgTnm64M41F5251RQLy96XhNRk5a1sG86tjkPYcmocmmz9HH5sNHKf89p5LYcVhhf8g73pS5iQ2YHhTS7QV",
  "key31": "XiUEi9ex5YhkH14tCW4dRr26hS57JDGiNvBhjaAfsXHNEmVdBaWkTWfpU7qbKNTAoKhh666ccWUTKTrCVhVdfB4",
  "key32": "5MsmFpCXUi7sRBGM86myMR8uT9jeHNoDpcLRgubo5LC3WCJKeUmpRh9KVPtGnFMmsodR9rGf3HMWLnh7gCPZJtDU",
  "key33": "59ew4AUAJbPCAP47wKxvjytC4tNWH5ZeKodpNYa4wSK4oCboXP3yGBsj2XDbPr1jam7yjbVow1KzGUpGMwvoZWta",
  "key34": "4m9ofNGjt8hNtB7ZfzVJiDmWWizUoi58pH9E6jyG2taFW9sDeDd1HP2fWZjGBAyJTBG2gza8jR4YDk66w5NWigUG",
  "key35": "4FEJYsCd4BSXd26CUbCnXG7xVechLchirUDk4mXgHYFvhF8gMNCnU3oLukQvevY4SBCZvxmLBWCa3UFsnsC3zMxk",
  "key36": "4iuemu7sTSawe9AB271JZMHsnmBTpzyptkLvAQKfzPmHsWV7edkcCJZm123BzEUijNuWQbqzLszeJyNdC3rLUcSt",
  "key37": "5DRpTYnhGJ2H9QzfU9igZZrC8RwhdD4xKfmJjnasowAcBCaQqJiQvye2oyZi2GeYqhdNKf2q2VmY7HAmqkYppy69"
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
