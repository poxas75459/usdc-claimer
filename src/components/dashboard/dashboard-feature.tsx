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
    "4sQ9DTCi2cW8BWuyNK1CVJ68HUoDNPoPszqncimYzo69F6jLz7YW3YCDxVQHEQK36a3VrisKy17zzBDKovFwSnXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gkFHRRNyysAfhxiUPJFEKoaLWPHVrKmFnhvMkktRVZARTh2MZCSsvHeM7e3skeswVyeQHxhkXgtkqeVjsKGzYj",
  "key1": "4uuTir3gmFfVbF4eKutAUZ5VQEEs9a6wfPKXfbrkUsbDDAHVJHU6wTuygGwhWhBFB633mWx4e2qdSvTU39gomy8J",
  "key2": "5k1b3K9A9mHv925vHhzRsy4pXRdMBVg6M6C4Lz65oC21VRDiDRMuwNyoyU8Wms99XjmbgReao1Wx1auEcvhUUW9e",
  "key3": "5bX6VBPVMAjWLfiyXNfdtKL8jBNeCkLgRYEV371i3pVCe28fSxycZZjNBhejQzWBeFzS5aB3Rp9y7Jma4usLwz2m",
  "key4": "2yPzGnVRbZTWUnMKPL8WGiXQ7Pvuw9Def9ZuRzRoVsfGP6FTT8YiD1b95dY3BEm8W7GCpQ8id81LVWuzvpWqz9ua",
  "key5": "FYaQ6x47LuahMX5zB7NchuhdN2xnNaakSYVQgXajX5UvHdkEREPFF1uYWwmnQsyL3t9iG9duj8CNdJc1SmZT34t",
  "key6": "3nXhayBP8ugvPuUX2M3jznSLBA74vigwRxWCjxGTGng73mu9yHmoeviqqXfpoqs8Lt1vcRuCrcbBewicdY6y1JMe",
  "key7": "5W9sL2H1b3UTaSQrSznGBCszcyxbCTcHup9nWJAEenFVRmGrMq5KtmsMpXVAduLy6cDo8SXksdYCAwCMVdTRUfsC",
  "key8": "4pTfiEmBvGQaE8ppUvMZDrjgBeYM5oaouxt5vd1mrmaC2yh944NtCk4rXVfnEFd5F3bsbixCfD82cJJhjeVRxzGt",
  "key9": "3Jygp4TPS6s9ri8wx8aJAKDpZ8eCD3NUdUxMM6HreJMvJNpUhRATJY3nUktgR17EFwANbf8HchovgXQrUbTAaLT8",
  "key10": "2dpWHYQ6NqyN2LUmFKfkLoedMS75gfJAxgcx9VrBHC9ptza9r9arWKWTpLTpCbQtT2E7Ajy1Pp9SLNoRbzPrTiAm",
  "key11": "4HbZjLHDNyzsJT2g7DpKzgZ6fmVyw44oZ7PsEtLwMmFJyNJ6EVQHcYpis1YzeMXaXPkWreXT2xQLoqH2D4rdPbWB",
  "key12": "3C5ECMbQfoLTcSa75DLhiy6MpskpyKYXP1SVYYEr3KRMTFppA1vonCS69XMLBV7V8f1BuMXNUTgL3uxqa6KLJ1Vw",
  "key13": "67cbGaGZEM2Lom1JxcGZyv6myvCZs72XWiz9X267RmxiSbmDoqGQipNLGNL2mcXmSXheKHuGMqpAogixNCXsr9Rd",
  "key14": "4z6enn7bGgEcf9hfgx4ZLD4PqGQLUfTEG3x96JumNCbx3i1r7Dv7LwquzZ2yuLfXGdui8hwZZotgnyfZnNGTZb5j",
  "key15": "2oztrckAXKWsTb9TgASVcXY9RoN5Y5NT3zYrz4AYviYNT53iKy4xDNi6fvGHRFb92HbSoWu4nnmFyBdRLKvU9JTZ",
  "key16": "56gYnfh4nwfUqBcEyxZoThTEuc3XLQZL5gBvHdM8QfnHyTSPupVWNWCztemnJVwAN4VzyUjnGCNysMFqj8bKx16y",
  "key17": "PB5DLBage5SVhmpH3stmtJvXPNc5EABMkkA3qhmtfazRrcqQfLtrcBqc5yrt4sxxPX76CRtW5JLrAQcSFqkYzrv",
  "key18": "Sc9X8yra3DMHpkhcyLPRescj9rnpCxyLftTqWrrHkpCYcA1cjJpFWGSubzwvc1wHfhv7vbRWSdiY5i4Hcr8EUzo",
  "key19": "5CgFun1wuNk77uug4A27V9DWbyBMfWGybwpCSN7xkfYYGeoTVRzKMLey2xs8F2a2CP7pJgfoUY3ZXFCujdVTFkEw",
  "key20": "4CT6YzMzWoi2EQczbjRHBo8NLMxNuT2fsQmBoGhrScbxCKU3tZ4ZCkPBSxS2SXP3nP8A2dNgKiRAoDJ1zymiRMfs",
  "key21": "3y88hCi6pAKWTENg3cgU5cVdm6KHm92rQ8iNscCKEW1C1zb814fzdpEnfKjBmLRHSZ2Me8TMQErPjsTJL3v5t9x3",
  "key22": "5thEdmM1X3MVDrymb6kLz9HzGppxtJaBbeMxv1bpz9FSAdWsJnpmU66pRdNj8hdHyoFQAL7ay4deFMoYmbiomHKW",
  "key23": "4j87Em6rF8JiWZ6TeXKGLJexAfzsoWTkVDd21rXPSrjmAoUYTdPtrFgkRsXQ2namdF9Z9fgqT5fb1gv24MtYUeth",
  "key24": "3bt6u9tgFpcEqDXVz3YAMgo6YiGL37nJt63tTki4jqaLsTcPnu3rdF14GEkmEApV5E1tMLjfcmFZFovS1f9wUe4E",
  "key25": "3MZfvdXXGeanWYzTDvudjmHrdYhPXJbDpdg3jXmegnYVYZyBa9bna1V3RUKB2DkP4NBVNsm7P6fQYNvjtcNrjkLr",
  "key26": "2UPEJhjc1QWUTFmn2WNo45RkmUq9ffj7EQswi5KMp7oEWprFDV7jpR6oK3NxehLYGgMnAFCMxGPHTaCdmqvL196k",
  "key27": "5Nt7zXvw2VWPFUe3fbtBPdDrMXFqPvwq3LUPoH2HLnN1Abf1uX7bDSZeLmYWeh6p9NMtUFHwUeLqixhHMqYxxpdH",
  "key28": "2CYNUAehFsVUSwyggdnYJRSfM93PfiMbasKZrymNydJziJrP4KyUYpwxrz5AiKrFD15qRqrt9bvC6dP7DEnYJ1DN",
  "key29": "2JPEJr8MtAE4dndd8avPPPHKutRCp2eMFdyrpLZDGa5BDVWpJauEPkTUgfb8gr8KM4x6Nm3esUWpgVV2ZUcYZCGU",
  "key30": "2hhhtQ77qZmUixnED99ScmggDhZDf63Yc5xtP3qxvJMT2a4rrEAeoTwrHXzwGWua8VJ2AregR18qMA6d5oGEDCDA",
  "key31": "3QzRP6PShAe1S2dxUD8323hBgm6KViD7Vf7Sji5L9kicEndqJ5GCugymnFaY4DZitRRPd3DFPFJDDBLJg6figTWQ",
  "key32": "4e5sZALm3j2p1xFeHKZSDATKfjad1kWZUb8ocTNSpkJZ2o1SBF8U3Ph7gU211vhVJXkia3BdZXNrMb1kHrZH4JVX",
  "key33": "2j7TocJaSbVCuZYsjMFJzsxWHMhRtP65k24BpruUksossQ9X8Pf5xsYaujE7iW2AWiHnUYJHSeGgd4TjdMuU3v5r",
  "key34": "apxk5U3RZjFKDu5nDyWJ1oHdDBexWybzZFWqaYh84onE32FLiGUTAZyKTiETPdG4WuhYbTeDBcVe4FjVMqpV6fY",
  "key35": "4D9tJanEzxgcsQxpiTz2TFr8nyra56FFWwCBoJnRdhsf1uagATExvCEF32yN8MjhxchiGoQTSy6tfjh311GswxEM",
  "key36": "2YbEQsk5Q7MW3ZE6kRbQksUzmEePYnMF5XPaMebiWxaNJeWAUJfN8rxwQW5hyjv2sCXBR2H4bqmnUYsZKEFisbzW",
  "key37": "3DTNKAz13sFf27ES6RCq5nwGzvXc6u4vxmi6deWwgc8NTg2yXcxGzwDMpRPXqgPD6PbP7iRdHvyurBWjNkavTqvG",
  "key38": "51ZX6PoWCZ2dSowfxZuJLrSJ94ZkNFuVyRrHnZ3vikg1b275KaiDvszzWcM1GxMXquNhaC3LGTs5NK446HFMTJEh",
  "key39": "3pPoHC7hNjfkgwESrMLqDNem1UPsiCDttUHdw4NKb45EizbfpyWiNW6Q8KPNhsBzfZ7q4jScUrDQ6V6459ksBnAV",
  "key40": "5ci7rPv5TXcriEBJstWYBrx8xxP2zC5WHZ5WzWkd6AtQdwAgL8yubcW6Phba9je7GkHubuADaZxkET9n18FXkzAi",
  "key41": "nMeXVHJwGWxpmWRxHajoexx6ipbJySkjk7iAxd67uLmqb1SkP2vKbQgd45s19mYfpujmNQintAn46CS6E68pEw3"
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
