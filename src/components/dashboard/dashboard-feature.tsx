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
    "4XTsTvcVP1iAFJPAEWcK4AuRcdMBgkmQWo5JaTBvwPuPqDNkhcHSURFPZ2fHLp8kzGnEYpEM3VdxUy7J5sLK2PwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27kPWrkesStMUYjsGs542ogJqB1kVrnSeRgpGPig2BFNfSu6MC2ZUHEVmtsi3czXyd1Q36DVPhBh5bggXNZG1e3B",
  "key1": "4VvQeXeAMpJSYPnKL6VjxC2M2ewW4xAn4hCwQdu3ZywNeLcmE7LwrBk2Lqfh1x3fjPPVhyDPbitVRDHkCXTtN6zG",
  "key2": "5B2bEyTUimQiyV1qoUfr2RcPfDeJn8XgoLj3Gk8vCq7motzYNredrxtTpv3vBvxymPK8J7XD3j37UXZ7JeNHiumT",
  "key3": "2cAxRDkJTheG1ApC1R24YP5NGHg2JMiFphhtx4KwUE5WHCsUZ8g4ghc81MQgBvJG9o9iLnD7JuYqtsREFyUf637c",
  "key4": "fDzeKePKyHFiaKkDAaRztsXDZ4UptQy1T8djVW5LzcnzYRfVyMrpjg4mLpo4nNMxncsDrq984KiJafCYii2TZ7e",
  "key5": "5Pc2Dm1aJWVvb6ogD3KBbi4H8g6zzP8ukXy4pWMiKgTR32egcwZPX1srb4hTgAF77mJ3cWxnTzcuLAC87VqW58f9",
  "key6": "4SSujwLgysuSCzE4cZt7tiyGshFNtYnQxge6GwMji5wUuDmYRLG3pQg5znxuv1yD5dzkDEyExVNcRhbqYgJtfJZS",
  "key7": "4ecXzWQJ4kSUEJ1Kr92FoLU5FJ4t3ZG81YfhYtjgknU6DHFmW7wTEy6Lo5zPijm4uWd4Fihka9qmsDXFge9R6NQg",
  "key8": "4nbjPN7aAVxV5MHxouFbM6D6vizNPxaxmGojeN4j8T1aVdtVgscbgTj1krV66T8tW2twtLYRSK2s5VCUVadq2y76",
  "key9": "4TeiWV6AJjjngYevWNFoCvd6gDAE5i2U5AmefHvxHUDkvLCTve7MaRj4RVUzUVJ2kuhdB22qTzhG7CwwuMWz8GWy",
  "key10": "jGjVydtvFddzrVcgg43qqNpNjixwk8qfAu2bempq31Enij3AAnN5VBLLVB6rWJf2toi67SuWVAWhjnm6wzVNTVB",
  "key11": "2pmfvpsCCLMRjcbzyS56Rn5xQSk1SARgJkncRqcFBju3Qf92M3UEzaGKRHc63PghLV7GuhKrGe3JSKMXfUcrSKtt",
  "key12": "8sAqTZ8bRDsMtvFRXhbiXaDbWnXsjDpUkoTjY9hu7BxeZefgTjgVHMGXLDjLeepT3w5dCHKsoPpVtYqkewM236k",
  "key13": "5WkhmmPaTfwgNJPtSNhHWaVwyRmPuCk7uZK1yF5xs1Tfo3r9wP7MniRVcXfd4YTdmE2bK6f5QCs3V8tQBK3uN7ZE",
  "key14": "kJyLQCm8KX2RgSNdQEyscfkz9SB1siSSM7KsSHGJBmpusAn23kP9nxtXUhskrkyU3gRHrd9Q4HTSE8B2PCK4gjc",
  "key15": "nvUnM5mbstCgjuzCRNsTt91ncnhXdemysopHif7ER1RUFo8fh3aFySVApgQ5UmL9us5LDA28Fd19XjMFrbBbGgN",
  "key16": "45oRGLTFK6bjgamJq56uMaWeeQep9R8podrD8oCULrcr1DvYfHVXQhMGPFk7KnuTN8E99RZjet4Ni8PEhCzi735r",
  "key17": "4zSrrkFP2HMLaHKnoxRMgn8Qne1f9Lkmfrqx15SS7Ghir6WworQsQrF8SmkEe7JYYdeS42R1JQtWVVxLipxQzbK4",
  "key18": "3eoyyWLVRWY75mvTFLkGoK1rnwjJudhE4sPcdKcDJWtFwhmHbCMFMGbouSzJQrDvEc92LFnRFwmUuzMNsQQSvUUx",
  "key19": "3vCCFvKVWiqAHjLpxRZoY6XGN7NCozqz2WmzQR5EFGoU3gwEZgjvdmu6V5vjLSQtHYXHGVtBmbUcLyqXnLSVBLh2",
  "key20": "4Vk2iqEvNsJhzmJC4JeTBryCbQA5YPNFj23BXctKAMBS12H1Qt84D1vfP5RRs397aMqcfYcK85Bj6hzPaNS8oMqg",
  "key21": "3WiEqgf8SrDcL7SYBkNq7JPNipSjwDLXZJparqkDtBoqpa112GfhyJfve2EnaGe6wtJ2KUZ7VkajUmEa67iYd3JD",
  "key22": "4aySiYtVZs2jrNethtKPRYfnU4xLkhNUNzdYHarMCPJBQrDJY6KF18hTkpbVAdBKEwCc5xE3aVZhXLxJr8kgRVMB",
  "key23": "23BSgYyZCo7XbzXYC1px6iKyYTW5puC71FRgtBcMkGWnXNtCYhAnHppyrG8scnX9x48jKcktkQZZW7WLDqobqf7y",
  "key24": "5ZR3cSidfrmjpAVKFaamGwFseYjT4Q7A3AtUMSDZCgFmUvWCoxxwPDdv8MvyWXPNP543GgCwQpcMuGPs6KmGHakX",
  "key25": "5qB7e8TmPQvu4GaGHhR4aVu1QTn1oBLYLXhUN7R2d9Pr7ichLyEy89uJmQm3J786yoPtSq9HPyD1gfTy4nnNqSht",
  "key26": "CYkQjsBRpYazbzVwd37un9jgox4CBCvEuZnAqRjHgLrjzzqSTFtQMkKCBMeuK5V8ME8tRWTYtkccT4TYzxsgG8q",
  "key27": "59SDqaCyXG48wXfNeKRVWhk9JQBNAWWNac5sgno8c8VyydF8DU4tLfrANUrqV7AzACvzzxpVHo6dYcvbHmukkRkd",
  "key28": "5YYBCTjP4kFPV9Uvpt8GYyhD11KCvfknDVFwd42w6ucsBuU3bco3FtxDxS41TUs1FUPoYguxYJCCqFVbDD3cjqHJ",
  "key29": "KahPWpjWK4inz5iuvNeFgUvEwkmrK7DY66BCRwZV9TyAYinPbHpTiVGAgFgHhjS7p161jWpcTaH1CsN13FTAo8E",
  "key30": "352JyP8RfhmxtYCwGU7ebjAAedW3gZP282LejD6KSvLKm7o4jJ5hduFzWifGsGKx8MEYLC1CyG5E6cHmoy81uj2z",
  "key31": "2WvWWd3oKQnvbQki9noSsdAwDVe1LVHxpixNkWeAED4uYsDLgNsjYEeCyW3ZKDTwtyjEpSgKt37Y2PqEDxbxCxe8",
  "key32": "3z2HrvRBwoViGbAFPQ5G3Uuoj7SjBHqxPAmGyCawmxJKCak7SCMFyUtrSB5EZqfwvSpKojHUDPf3Yb4FdPGdMpdy",
  "key33": "5usnNs6zafPftj7gtvDeWgKGWXoauWXM8DGXsTwP2SKdndAe6pgnsBeqaWbXge9cGaZTprg1NE3w7w5pjaiqVBEa",
  "key34": "y6A9MskSateYtpddk7masKxVER8voQDBoysY7HpsPLxdVXQbosC2gJmQMv5NYDebfemMLs8Ucek6trqhUJmLpUJ",
  "key35": "4J3wFQxgsPf6eqvLDu3dVzQ3uScuqev52r3DrkoEuXpgbGmFbbw73SxK4WyJ1dnmDWjzJdVE1QdP5276hAzBdRPF",
  "key36": "kuV7BDgcaLfDXMXW7QWpBxtgUXi56H1api7t68pdgVCovT6JGD1ppnVZT7ar5xAtA6echxVbwo5z276cn5WLHNZ",
  "key37": "48QXsYpkV2kTZ9nSpp2VtfmUgVKJ9LY68fK2M8EADMPHH3cC3dhYh8nSu18L71YWpWceNXNbNXkJnVVzu5pyoE2a",
  "key38": "3x49423NPJen2r2gmrspmdiAMLMQHuYfYfXxFPUA629ok9jiy8A66CaDpAE5PJyvo1AmcjHHCuyumu9WQz1ZXdvS",
  "key39": "46DPjumLm12Bf9mmQ82thRU97BRyvLH6AcNvNV9ktPq3vuZd97BufjWyV7UHZ6V9hCGo9AVm6A81jS8WwkPAGrMp",
  "key40": "4ikzf57FMn9GJcbjk6FL8c7aD4kkVRYtvJ9tehRbzF3NkQLtqHmoACgkSeoFFS8TjyL4SJKAGpW63aFXwE9gLsbz",
  "key41": "bDdcsiUb75RJ4PDMSUQMwN52epYNivxwzgRGgJSD23vguQecpLTBqGYzj5MQiR6ujTij4rcYMFrLJD77PX2WrMh",
  "key42": "Uzpxag8v9sAKWKuHBdaezzZ8ydrMWqv2MgpU2SPLhGdNaTcYGQX2Mvy6Dr8y24StVGGnuXnPa6nth5rFbhxw8Fb",
  "key43": "2R35w7Akjnb4eNofL7kiUTXQwgjLNu1zdJPmwHgRqAmSUebZG6ZYzA697wztxbRTUafC1ReTtFRSgrDdYYQjEz1h",
  "key44": "5xWNJc63mCN1VT73ppfqXDtrKxaYj596CJDry8ZicQwAPH1sN4kVRxWijSfRQAHcLFC9PA8sg4rSEr6fe5Bg1fN1"
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
