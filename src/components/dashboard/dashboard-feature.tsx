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
    "4B1smhATdziCJ8z25XJWFrZBB7QspJZHh1aTWajJ5VcBizcKuYkn3mBKpbRMPTNSqjnPnHtc4ns1zxPgG1BWtKQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T5rac9J7xnj8t89q9XzocZQHvfXu7sRm3WwkiAf556HzJNLrvgBhWs1egBML1z4UtUg4BRJ8PKiTyv7ogidugDN",
  "key1": "4LBe3czBuvhNtLKn9MsNevkYg3c4wzuuUbhkVxNcsAXkHgvUUA4LCdTe1oLFfyA53jaG1rvK8UnDZqFCxHmdTLxx",
  "key2": "TkVPu9mAtDffkqhN3dENPnTYVyVTmuEHVUMGJTrfiysAjiad2YLV7v78JtFj43ccKs6HjCBSeudKqvM1exKRhNf",
  "key3": "2hYd397u6MwJk3caLf3BQNHvH5swwUEfWQx4e1AeQpm7fL55LKSm7A3sx1HS23K67qzQyv4NdmXDRDAFmkKmL5Es",
  "key4": "3kPBAmXiCqWABxpk68sGUeAXpwqAPTJtav79BzWkjLWwKVMzfcJBJ9QtgCV6udKtmccJZ2GwAUcVNemyoMdy8v53",
  "key5": "4HYzywQAfnx5fgDjfSvqqpvNmDZKRmvDMkf4AVaQxCzhu4XC1TYGeQXH81HZPBJ6BiUccqPD23GY2Crratit7Ung",
  "key6": "5NcyB1B7tECwT9bWUrR5BjrV7FcvktLvok2Q4jR1sTgctaf3fV61WXBBQ84EGZB4TGjGzrKbdSGHaCvqx5QLRpJo",
  "key7": "5KAoC4uG3nZRH9d2jwhNNr9E5x7YkBeM2tUZn5gZwq3fBsCAdZXV1ousxcw5xBBn3gi5AHar4tDrqKBhk9zzTNw6",
  "key8": "5tTMxuHnCqLM1fS62C4WTikP6vro7kr7ngNJcjYTQQqrudDFypqaGhwMZ98quaskE3E5nKsdV4JusNQYx6rmQF5P",
  "key9": "27aomw5dwHciDvFjgkCjiAUKYPpsMDgFRSSAKZhhX4NPRS4byGCfRTExeYSBRB1cuwGhky3uas8CavPKCo4Xhhru",
  "key10": "WpQcQ85P8ibNpiw334AT8SfQx62eY4kKKvQHcHA5jfZjjhn9NguqmKiCF41oi3RTzVV62JGT4BcfDq2Jwr8yDha",
  "key11": "3GtoZjEwbEgUgt23MN39NBoSzUiJcttbyoBq5qgsDNBNAuaS8dAb4uBWucNet2weB7JiyVMdCeqKyC2Ae3c2zyQi",
  "key12": "4c1gqKgQWqQaAgAFiLF8GkZNLHzdr4cEHS2xBPSpFsMuduvd445R76EHqz2F4ih2eWFNsBzCh61EWscsJu6a3bXN",
  "key13": "26vAtHpyEU5m8WL2cBNpQjk3zMevn2HNSffCt7umnmeZiaPMSzDHhUGEfW63mPN2TZeJbTyqMKGNRPEoNogj69SL",
  "key14": "niCkAwmuYFowJmmvYewTD53LX5HYYpbvyqP9jzLRvBW5cKNhKw7V7p5Qqw8YzU6msUuKyiP2snfCuAZ6GwdAGar",
  "key15": "5jE9LWmRYSUjfguBYySW62f1up4sGT9kVT4q4d7FyZ2vgGdNaXbET67V3AGf4VMhHeeNB1s3PYh2dNVg12hEPurE",
  "key16": "2GYURz9nHbvsGRYmKKAinn6R1sqHzv8qwCExUsgNHMUEpb1tUWMKnRaNzKn5ofzWR11fgqCCA25gMCRLJbqZSW2T",
  "key17": "5Z8ATabhVWfi4ExTf2HTBLxcdHDRhX6wFzENhMro6tDn7MEceLbBU61otewN2bbwM7FAi5PjVDgYXYcY5ZNZ8Wj7",
  "key18": "3Xr89HJ2L3oW19T6UQbPrpjjUWsqEpUfAdRqKhhw6LtgRCehBzgyMqgsnktbKYriDBzJexp4Mb6knjowp6ZpoDAq",
  "key19": "ENLMgGcoK5yXhSnSpxsDYHGnSLmgMawrxsdNfUkE5PdHeo7CiY3D8QoxjZYFbaPVB3aRUgVRJNrtqahTRwAR8Pn",
  "key20": "bJZzofXZd1HknqUkR281M6zrAAq1AAUbwyna4r57s9FujNSYLkBgpdaD8r847JHicjjowBByXLsXoLWYivtGQYo",
  "key21": "vXgXoKqwUVrkJFAemz3tipLzkAgctWjVm6dhUpLsgN1RzG5mdTEWY23JWucbHoKgtfsHv6tDi4vTDqMRPvgrw3Z",
  "key22": "4UoF5ZeYYcd6xz2JW5fZ7eAZwZRkYbyPsELzUtCnLawBCbGc7TTeNkzrC4QgsjEDHk1nxFSXDBko6bkZj8rpYVxM",
  "key23": "2TeqKFJmEHwU9y8aNe9wyTins7hcejnewPp41zaQ861pYCFMYcAyMQbQMeSCL1jNddVBBXCYHGaVbEeyhTPP117P",
  "key24": "4VSpahhcoZnaBrLTzvrT89xSfBbXammDDBCuh8ApCh2jhrbfT3y7qt38Y1FCDAQmEUsFAvrtBA66HdYsPJorYwvV",
  "key25": "5bp9P8hNMyXHv7hktndX4XWtpk6WZPMgbbTJPg1P1oBz7yMDnoKURE7BLrpKFjttzHwxe6bJaTZTfQU1m1r4Yo4a",
  "key26": "4FgsGrynoK64TwZ5hVFFKixtxRQ784rHWfdKQ3MP2BFpMwfV2En2scjcgGCqCboZKxpsQyYYuJKJpPG7Cph2mQ1G",
  "key27": "4EscLp3VwHYM1pkU8ErJAtZuUhrfCSEAZd1WxnfpBUYMvuNvnbHAHnpqYMAFdVSHkvLd3eaaT9cC2XNXjNzLg1w2",
  "key28": "4NkE3pADqBg3qEcFSQuvTLcMKFKFphuxdA5uSacC7MH2Rgfwf7uoU4eYbCLCWer46UanVYeUmxJsvHFBhat3NGtj",
  "key29": "f7HeZsS6PKw6NK8uGHc4WTiJwmhxDLZth1ABbDEmdYR4ZwPisZbH36KBsjXUipNLNimddAPn4xd8Mo3A7zkvK32",
  "key30": "5KqpvP7cU6kMue7SCpCDa14nCCg5xXGhPNs4dWBYZjq5omVHcRqWV7Rq42KW2p6rszJWMvYXveXp6KbfDbujMkdz",
  "key31": "yiHpMiYaatfwA7qShy2kswmDmrL1WFG5ijFr1VTbZ5eqqHabSxaecCH91LFZ3X3tWBCNnB6HyJabPRBusv6zD5H",
  "key32": "5mgKMB4DasyP6YvrU8fDR99XP7q7HgZ5xvUQ4irEoVeFjJxVywoMHh2uhcfbtjb6rEeSrsZ11obM14bTuJfyrEMe",
  "key33": "3cduXRXBejE9H74yqgTUYXxtY3xsin1wwGEzhFdFfY95cETQSq3EM6QAeqvW4PxELV3nd5sHpNzsUCqMiETeAkUD",
  "key34": "4FzrVBauRLy9LTTDzBC65L92ubHEQUCucHzzCnhbp6m9Jtf4JMP5ynjtDuGb9Wp7oWVw5B3kDhGUPUBjoGhCWzPa",
  "key35": "5iiuSmKztepckWxiGW6wLDGurHHYZ9XaE8zBHX5B1bmGAsmPWHcKAjgS2RW9SzZ1NsZRSSau5QjJhpfrJJhj56gN",
  "key36": "61x9QmZ4YqzXxKuYMS9hd2qGFYkRgCTwRuNMJVKmGbc6hzdkGre7FhqFvU9TbvxsiuvMaPbNkRAr1Up9uEYZBFJt",
  "key37": "3CMuy7gfKCbUU3PtvLCPHPUyrqaM7tVk4U51saC75ceM6uLe95FLLU6raNrGhHpuCs3A63pL4iFNnsVaypcHar8r",
  "key38": "2SR5i5FCVV1fxufbJwSUpftQzfvVhubdTiemRRpNLL8GuxMwKqJPqb1CEGUww6drb2brbCzpy9pwdLrPDSrrQUCp",
  "key39": "4Pdm4uCRvN43MUMDsCSVdH3XtUQWx3fiNeiWtPw842s4JtcLnr35s6CFjv1iHsHHySNpc9coqXacqerNVeJXPEWh",
  "key40": "43Np7bgm5gDXTcuRSEi8UPonPX4WhTGfnKUB1jEXsCKZVFf9ezCV5rpxamawyqKmHNTN1q6ZH1ftZkZ6MfgPafXw",
  "key41": "54UYENnkAvR1M5X2Lbzgm3MbhAh3Po9YEYW49XT8h5MnLQuBCnX1aRnbGUYEroXneMo1dR26eXMwY6vbHQzGgMNt",
  "key42": "3w894opZaK1bfVo3cShNSoNfJwPx6NemQt28j1K6Po6QMAKM5gazoyXmsumRfPm4NjTbAL8Wut5oa4eE2ocxrDJb"
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
