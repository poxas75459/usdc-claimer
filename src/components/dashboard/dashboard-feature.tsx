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
    "5FGgRdydy9NWEbNkwm3zJLPVWmdQNfuu5jaCryxqY2VPHkiTuyeJqE8GqfYA26QLjEcmwvJKM2WW2RDNYum37VXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52W6UTWVXwmPtXzwM4zq18THhwNS4XFyhFVWbwu4LP7WLpJKzgeJH2gZgYgsKY5McBv72AyP7qfTuqtaVvenVrmN",
  "key1": "2TC6uL48cMzYHz3pwrw8jmbieRngdaBivHQBU3cUscVMeg4LNtahijPMUgjBmBk2WTNCqamcFbivErjS2DeekbVd",
  "key2": "3Adhohva5W3PEL2CsCeKg374FuheWnxaaxXnfQfZJVzDLoqkPjvsGrYvDSmmDzUaLoXhJmzJUfaH3ahS4kwThi9Y",
  "key3": "5kZHk7xCTer486mNyVna5V5wFQxeKHHRLCmomN2SARexmoqEZi4152aK65ftguZcEfHHLD9HX6fjABnSdVz6uP3k",
  "key4": "vHh136vuZSHyP1sd6qi5WBAsKdD2HJnAbbftxk7Xqw2Zv5x5LS211UpAYxci2pMGTyjRdVwMjL2puhu8xuUdtXv",
  "key5": "4iSqDBibnzvzXDytEeJJhLZPAV6DFVMLtYngXofovmJwMhyhQzqt4uuqHSRVGEq44eorjQ9ggFzfytz6yDDJSdQf",
  "key6": "3BWRyy9h7Eg8sjyhZ8pHAFfDEYaZekbtsZMyWb937E4koHXo5TQNe9SV43ST545nYNHzoroC65DEEESepoFYmzwH",
  "key7": "4ug9WWYE9QJpe4Li5aTiHV7fUt5XJoYiQrbCkLQqVaEuomeWRLA57kj1Yo7MhRaeVc6fHTPMpiyGDus1sXVShGQW",
  "key8": "3Q1aQcmVYCqGpzjT9kmjLiWnQ7xbpxawV2y4iQJXg3v7qGw9nS5WZfSNQuV1tAFrf8pFHoe6VoTJGKVUaaoZCeek",
  "key9": "4ZqrKJxiUv6aSUVEpPsUX9zmBjnXmETGDFdGJCdHVGAM6bg2n2MrgWkszrWXgkaMN1Npc6EVDiRthwHvMSBYrHCm",
  "key10": "5G6jEbypmVCTUb4ZhE8KeABsdxMzWWsvJXofocKWiw6quQYQGHiS4WqpcUfCJmUVK4HEnT3eNd2j4NHYqkKFihf",
  "key11": "59XJigFCRErQ1DbNSYeTFyujymH9Wbyizue4MV26v5oDKS5yBoAVCtJaS5RcPAoP88mBEy8ZuKUaC2oYtozqk6q8",
  "key12": "3yroJsPWqMfcgUDqmY1Zk3oiiXE8CJXu4zTCHGnaU3h9Q9UDJ1LoTjgR7r3EUDAXrByQbSWnoVJzCtCBQG6EtHkB",
  "key13": "wG3PyDYSv8nG86utPsLzeCvNJMEfHSZ9Ub2qqTZnh45pkyqVQ92yipYwFxwH8WmeGc9YDVnT8yokykbfVEzPBHf",
  "key14": "32U88CnEzWURGF5q9qGjUvxgdZFjQWNDh7gXi7zQ8jeA9EeMPUhy3AxnQYMGyLK8eWNo1KPiXTtC2Ezcu8pJA8Kn",
  "key15": "3VXZzm5ewrgModtSChrN9Lw5PuLJRTdRtJJr639cfkekkexH6VFnPo7uDvFWbf8ciGkFuiMbuexP741VvNFwCw1H",
  "key16": "3anLgoGkjVqUpLrL8KKYBYtRyF86gkBzs2vTF2SQBE4SC5QW99ZYbcTmvsWaXyJndqPDz5CeUsysxrAk2yq58jMD",
  "key17": "53qeZaNtfAvKgosBv5GcZZBHHeSf7F3fMdqjo3gGThNE8VkzXybEdyaMm4tuoUPhLycyENt4AFA5cPWXwQbixLFQ",
  "key18": "2BQsHMpucnYEKgABWGosS8cZm9yTQnNEQ11Xwxvz3D1v2UNJhS8ZMSgURim82GPMLALgAHz8Np5hpMW4rCHRC8c4",
  "key19": "o3r6aD4ujFXzEjgsZrvS3oQoeARAqQHcQdRtrSkZ7ZAERpx5cd3fYsEn2GcUXpu994XNL997V4Ad6KRb4864GyG",
  "key20": "2v5oCqVm5YG3AKzTN2nT3ErqAsDhL9dnikxB6N8ZXEzfG9DVfy9eW718Bt5tYc7eqh68XRhUwo8Dk6hoPDZapr1D",
  "key21": "DxsjKCiM8turJUP5M88PpozVgNXdFu52jpSZ7Gmq39fCfVRAW1fbbXZ6RcGuWD4bdJ9ZPbzYpLfe88xD2rb3Vjv",
  "key22": "2kxqT7ZFL7TPeXL28k6uLLNSQCWQJ2odkZyCKroBntjnQyYmKdMXJ3qvyP4VZ24T231stgHXx12n9NCgGuc6HjGs",
  "key23": "LZWeXR9wBr4gXihEAdzSWkVGtjW7E38fsPHyfHwfb7Kob9QQjLAofUTu8m8bicDy3sQ5qkGBgDm9WdeDtPnZhHX",
  "key24": "2fhxgXTaoNyoqXBHuSbF3r6EysUNnAA9MF7BjiZSuLKinv5UouSBv99YVNqnwsQHZnYQuuyeQXSZQpMXs3pRHrQR",
  "key25": "52wP6JfZ4zueZ2uQxze6WmkbCgFASm4z3RmsijqWjzQMYZVJ2prT26VtUKWBYMqHPqdyTySN8wymvePBvcgNtwWT",
  "key26": "2H64YHVscuvuRbVYP4nNgAY1F4yhFQhTqQ4JChkPPzZKirUGMABuDBZM2fa7x2gS5Hm9CcBuXLZc68pFmBC9sRTY",
  "key27": "5QqfZio6WnvGcPZWoASicbXvTMoSxC76UtJiMn13Vm8yrPCc2BsmbMhmi3H1xU88aJvkb8Vkvs4mZa9UeJFDtCtq",
  "key28": "pGXbEnDZuxrqmhC12p2kWruREL9gWwJ1j9wUSTY1f6cNpz8Y53gRK3HfJQ743mrq7Gf2PDgWbAN8ivseQc1y8Pn",
  "key29": "dPnN8R8GrgykdeRWarqY978kPzk7fjk4PN3yMQVVTgdU6QPwVmvBTfhyNjTr2rk7v6vJhXvsf15PtvBxEBf2UxV",
  "key30": "2mrv7P5mqatTZQpQs3pHQ3hdpMBHzTGKxyhZorAQuJ9KMDwZ9j71nx9YkcG5LYJacbBeENQ8x5WPWbDQY3AjUiPk",
  "key31": "Y3GV7BBH8Cmd9sapjdbgHsG2n4fcMZfAgan67rDBfhTbLtPirMLNJjntCGKbWGMM1FJKcyP9kCMtzp5eQzDG9wy",
  "key32": "4rGawNLVnaGYRNB5fFJLW8hqZcsviHaSpBc5RY9RrAASEcnmU8rctHiqM2yRmgSkdsD8Ua52PLeZs5YLCWhVcN4T",
  "key33": "5LaBqNkW1ZTHURgb1195hR5fyjEfN9oQm1EbycU4ZNc26ZDBBShgsdD8JJNctvtqAG8w3odEhQ2eE1oGGQHPhz2h",
  "key34": "43GsFDnjq5nKw1yJ5suE8e366CAk8K7gKEmDfUVi31r9q74njHbViWo434Nv9t1WKVJMh2DmBZAWdAzS3SFZBtC",
  "key35": "4yNQtFxS7Xneo4W2BJ4XsdjAfACJ4kfC6pKyeW35zczboczAEWALCYryqADJ5Rd8T5wN1Q6VnmvvjDNYiaEHXYJR",
  "key36": "5c1FeFqinLF7Z9VwZTJgA6gpjBWaQbR9YWN9yZHCMJLutvSGo3HGcisSDJVM9saU7xHm7aUUufhGb9LmNgcckrxm",
  "key37": "5y1JefBZxXeumsKHtKCFKiD8m2QmoPZS9vq9V28kAC17NytA9KLnwdwuVKaARcG9pENG2xQrx2BaKhgLkVCMEZZi",
  "key38": "3fX4NvVh4gXEvSmTrLx1mcsACEy3w7ZU9kpdWGjf2SJAbnijCxCRSLhkhn7kdYQMebds37MUimFDVNb8RwcFRMaq",
  "key39": "3zDwEJs6XFCTktDwvdymA1MXBqKKF61af3vfVBPosSPKpEUknMd3myJwNTZZa8NhE6DwjqvZKK5jVNpGoCaARWiX",
  "key40": "4S2Hykjm8sqr86x3troRpuL8AMfpUi8AKn4Fh3CB8N6SNrELHwr68CWmbt8pd8WEmDRZqNqECnZLH86grs2zdW3e",
  "key41": "4EWMknLfSgXgfC6XFciXgF7g4SnTTHeXJ7PJFB4iGKAocXFWzFC1cP23pQoW8ttLp1jkVPKxwxdVSbxbPSew2N21",
  "key42": "4Jn6vWppWSe9eFQ44Bos44oWhRv2Y17t1NH3WCVtaHJGR41ER7fUBPxwF6GivS9x3qTv7iMsoYwYMeKn24LgWUfz"
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
