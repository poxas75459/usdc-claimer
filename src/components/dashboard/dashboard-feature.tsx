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
    "5yTsLvUqDa9rXFsz1jugojm3yMoUdZvuKUydNeYdSK9swXzb75aRLkXU8KBjEcNSvcYqR6aw8F1HDAxDzReVLeFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kS2BM5ZZXBpxUYZgJhFpntxFDbCy26ZTctJwPS1LmM8rbJXez8QPsWWUu6Tx58AiThLHCjfbEL8UNCRuNJEiPrg",
  "key1": "44pkMgiDbwkeCDBMWuBocYdJvaxmFBxWjZhBsQ1m54XGRvH5NXYXPuvCNbF2v5kM3UEmavUL12LCdHCwgFsp6wsS",
  "key2": "5pAegZsb9GAHfbeuchnPvE5jJ2RERrc1i58wxFyxELuV3f7NuhuMHShLd7ZLkPv64WphYKr1M5ggVVonaYJxBQFq",
  "key3": "3e7ieHMnjciTWXxJzKj6GNstCS1qYRNZFHAzUMUnw3ejDKmARxM4TAjkkaTGunXjVnJMfhbKrQ8No4G638aWyThG",
  "key4": "BiyE4PqN949yXM5Apx3CSav8yoacV8c4nA7h8BrmSj2KDNu8v1wJw5hiQh7sGFBjcZHQyQL8YY2xYx1yF1fFXL1",
  "key5": "4crMx1ycJEq8pcu6JxPPNKfsySfWUQJDFjby3XQmpLkHhLvDs8SnXctWEERkpR6hqiwyg9NVEXUKXraW3FnUpGxU",
  "key6": "TMivCUJAcJjzV39wBnbtHHuY9CV42jQXnKeHH9XA8F1kEUXFAk6WYQGqs4YLmfNub8Yu4x1cRzVbKggQVzMFCfw",
  "key7": "5WQFhZwtmG1QdtVZYh4VvZvRh4uWWepo7GFt7xbqE18uEFFQ9vKaGaHzUuWDBgVioJvgEFe1FWXtUNjq3ML5JYKe",
  "key8": "4CZg9hA3oAWpETLCzf7erXaYceqifaVsVnCjp3aSBsBvF7y4p2cJDbj5M5byJYzAATA7Cu6ATC5t5jVATx4ASyM8",
  "key9": "4fzawB3Un7gtgwn4UJQazn83ghRNL3vxbSYyndJWEM1331uUd7zmRnZyRKK4fEYGBK5eB3SUXB7th9HpFx2JfoDt",
  "key10": "2bNKw63jwAhzogP8sBazzuJh285qhrpWoGPGo1yJ62NDqtWahZarYSxQ7QBFPhsQ3rG4KudxpMwQpyjqK8kMfCuU",
  "key11": "xPSf9B3vuT7RnNRaT7RfzFepUn2x4x9nVHokT1qFfhqGFa3QELAGgEUiJNBZNuwvtfrYs8RSs6THbjuyGegiXis",
  "key12": "4pVHsbMWfmnE1CnmQw4dkk2VCRfv7fvAeJrrXHoNMooV6Txv3mjCvjbLtRBkmGDcbYWuuwpzeQcyUpoQUQyS1ga3",
  "key13": "HtfdoMKCA7xh517X5V6xS7HBtMrjBKhDDPd89pBPKTDSufdmapjKoa7X3t43ZGJHqcSU4fRD5PdCF9QGXJE34uF",
  "key14": "2APQHkRptfjUPMk7JAo5JzBLxNPhhmrtNT6iTNhuEutqSoXKUnNhK6qzm6YF5s3aZwFQHWzapfdtGtyCNmENz6Yw",
  "key15": "2QcApLNofRq4tdQfgWeAixjMGKo7RB1xYyqqgxHqCB3odCo2UBzumCzUjVpbW49iPB3gCppBcWHCHoECykPqJfKg",
  "key16": "3GG7UznrMJGGhz4x2FrTGw4tCsxQBKMrniugYT7kW2fY3HY8G48V5z7ZGeurF95isohfEVFG6f2zRUN8Ee4EXxfg",
  "key17": "21Kaycv3pER4UrfBw6pnhfASmeGKUF1QqpTaqHY1WfMT2VCoiUCcBYGczaXJ9arAoDgVcjxVq71ACipP15kANt56",
  "key18": "3V92nPgUev8UJfaxaigqgLDTzWPKJsFwFogwx42AbhPqb2vEwbAn8rzDJauvWjAYxS3BAWZ9MKZXfxKmfQo2xgzS",
  "key19": "2YtC3EN34qz8Zqad2Np3Jf29FhGY9EHa7USM1NawvVbxguExDC9ua69rABH88nzrkCEXy8ibT3JtsmKQiBYuExWw",
  "key20": "6RPjFb53smRXPGhRSp5kLfnBEEepKn2aYXprtF7Qej3DKdQUTaWPWjsFMsmivCVZGw6LwWdLZxtkoD4F7wBWthE",
  "key21": "R3Lxsd8Vqd4qmAWraiXVMf8giZUM97kezzJ5Dfc1q47JGVrahH5xq9dGMV8TNwPxg4TfcvyhEtLpjWGdBzwrExC",
  "key22": "54BbjtK3FTtmKu61K74mG4M2K22hVxnjHYyzmwVLk1CunoKo6WjCkt99kWrqUvEpDe45MmgVqaFrd12YkKB1bL8",
  "key23": "5hDUcZ1e5yCnBYDFP6maFNbPfDBa4VXenbaPBuiHUzvYa6eQnmJxYSWoqs1EutTyecMdsxtU4Uadwhde26MeNnam",
  "key24": "3Hk4L3RkXf386EJvtxZUundJUjd5yaUYECSz884T1JporaZutZFkP2J2Zu1362QiMHCvrGWG1qqtiTPk6eM9KDVn",
  "key25": "BdKyf64dYdfZEGYhNiapjFDcbvcNimF3zvSiR2SDLEozsYn8HNmoyMuw54DksxZ7X5vry6TyNChEydBvSzM2788",
  "key26": "5B6jDfiCm1N54Kf9eo3xPawNP6cRDHJk4Wko6eUDszXbvoiAeUCBTXZzNBEmjTLAYCCsefW3uwQjY5gWc3Zr7H1P",
  "key27": "25STa9bdddWRmUGc8MD8YaJ8chvxh9qkCwCXDSZNHyPWr3Ke3bEdieahnLP7ozRq1kHqst79Eq3zkx4GDGsQJvqQ",
  "key28": "3RdCnxW4dbiQcbEM9uZu9SDhiza5QHYncHpU9bKRGM3Rgnu5sKxGad749A9vuTze18HotRyL6yVadfwesbVRhs1u",
  "key29": "4sY1Jc7pdZmuc7x4fShsJHJAP2G6cCbpQH9qekXU8orYLeyCG38phH1xW7fDWPwmgcz5ZSNeUmwRZ3WxxbweZ62M",
  "key30": "fypctnbySoEcC6L1wwc5L1KwpR1n7psuraHMKiXk5FP6pB6cPw5vqQ4rNvbJJ58bwHbNnRmWwYXJRgP7XugbJ4x",
  "key31": "32b3P4KgKGrxk88Z3SiG6CdMWVmGUe1DSzt3QTWvJYrvQYRhr8e6Ddkktzsi8PpLAPZDfawxuRrk3JfTRJp2xvoX",
  "key32": "3X8CtABja14iUT5Yy4RMKHoV9WmL2SJAPmMUVoucdQieXX9teZpVWH7wV3WAJAyn2hKPcEHcaWwFBQfgvNTiumbN",
  "key33": "32vcMFEuksJHfzvqqYYsshphuJH6GKBtnPCBx7534Z3DKs9VAzkU2aPiHp5Bdp4PAcVR7nBcc8KqZDMfowvVDheo",
  "key34": "5QL7gb7XWrbHmNZNwBFWGYMERxBZvaSMwXJwoocBh9iVsL7g3VdfnCEbpGhkbq4UvG4Ta8WTQbRW9ndmAbADUbdW",
  "key35": "2VwnnHQ3vMsYSaHLxUSg5qpXBR15hA6dtxaVWzuDirTXoWtMZ6vN2feVkdWhrRs8yWfateduAbVJH3YMiE2WbP4u",
  "key36": "4C3NbPpyFEF9pW6eSL1C6TwB6DjqcEwV9574GraTyG8rhR69RbRZ2Ko7J3juncMiUGnW3kig8VrDnqtTN5bCmXvJ",
  "key37": "64Xmf4iXok7Qihd3Drv9GxBzo1sPkbooLjD7hGj3SeDfyh7bxpi1qTC6j7zWZdiwvzvgytLXEzCxnz4RdvvUcuPP",
  "key38": "taWHu6Mq7oY2uzctTbKdMhfA1ow4FqQFt9L5kSBbnySe6QGoKUss7mskfTRSZQ2xWhh4VNtAsMeE4XfDFb9pdwg"
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
