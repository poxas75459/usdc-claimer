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
    "P97SEiMRMxBk8n54pMy9EzRSVss26LxF6F1FU8ysKTSqEfxp3xCTWayjrBVY3Bn5UKg4KfCGgAx9C6Lun67oeAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hrAMKfjvrNFPfUyQdhe6asEc9SWs8nz4Je5sWU4nyhZqm82g3xEs5GebdnEqoQJ1Axx7D2WbebcX6pzN53u4nf5",
  "key1": "4QfwRzEm5nTSXgRL8nQn4YFy8nhapSJZmYFbvQReSrR71uYRsmwE7RJTw7phQyxg3Mu2Uueoxj7pXxFm9edUTQxA",
  "key2": "5MhQRe8gbtoZZCfqqb2iKwsmrNENmgZTNLULUuCNshBSvLrk7fN2uknQ3tpm6m9xbFEz5nC6B3yMBmj4KWP4zcib",
  "key3": "3VZHKKLQjPhvtixSc6wK7PeTomuU5EMapKfTBKkPbAoiBAbnZfxAentu4n55BdTir1kmtkQ347TJhf4hfDu4Rtqn",
  "key4": "2ruX6g8MwxoDvXPaKQjxrh3mHiokpyqj21iaWDFkGJzrofARd6KgrxdQxT1rZRZdqaKhyu8mBchjbjUw43zybsfP",
  "key5": "5zgEsTgz1ygg9MiTrxjVXEr3yhtmZxQ9vdu3wxWWjL8A3tBmtxNuAMACxwwiVfWE9c1T7scNTGVZNTgXz3UuGP5D",
  "key6": "qnEp1HWKEv1AYWZokAPMcF8irTC1VvSQXvpBWTEmYoQVWDKxjDHaNsMviMFRAZSbXzmkYaTKnNVoMXvaJmJ1he9",
  "key7": "62hJRsbJoF2cZ2xdqRKr4Ue8BqAgPrKsahrM9zEmEqP8Fo2yPPXjCc9nioMCnwSE7rDA6WAucN3LjU87S4aAGxT8",
  "key8": "46VdNss5NWX5B8JcA98xPUnPQvaoyj5bahQsZb7WihBWSiNHTJmVhBNtUnMhCRo3w7HsVEgWeJW6DDFuEfcvwhd3",
  "key9": "5xJ1nD2DtmJbPdMTSaTAujxsLAm3aozYfUX1GpjjHuyMDYAQDAF1hLLHrSr7zRtX6VEAZTTkkFysFqnH7u6Ci4Vz",
  "key10": "5GfmhAM6Ku164PaGGCfV9KEXdKoqM1RMn1Nkt8Ab63zm3heTiTCh5rvuCDgvZbcK2QtfCqXsY5trEpPHJCyrcHZp",
  "key11": "3jK6MaG5vLJgVAaXVJdS58kam9q6RDt7WQf8ZRpYnvjF4uTN6NvmCWgNdybr9AN21YESBQdoi9zc98ducu3TVTd6",
  "key12": "LPJqWrManer8P6UWfJfPqXWxkGcZBTvxdzz56CXaKiHL9qrqgqKfu2GXZHpyuFiaQ3GcAwraBchjSeh9QnLEWQn",
  "key13": "4DcRC1NuprCMNQAsyavj6pFf24Mm3wqnNycJjK5U8PV4aEvDGDQL59PwGbpgb75UVw2RtYZKSMSjPAzsjDM1CgxK",
  "key14": "G46JcvinRGygQgQJkb5S5xGxqQnzBmHMgAFbooVhWSs5xUkfDK16vu5hRX35F57FKaZAHvpggAMHGGXJc4z4Nyx",
  "key15": "4G6b6ALypPhDKChADfeChuFu6hP6PqSgEKCAV2jNDLyv94b5iAZAjYRK8gBbm2bLk5f7EWDjzhwaBWiXDbN2vFyL",
  "key16": "5fpkodWsAZJswhfn25GiLGK79g35c5ZPMka3Npa49FAQhLe6rQtMUPWP5tSxh8FtLdrD2apDhBeAy3DhXRTKjPj4",
  "key17": "3D9P8Ax2dbXRLmHFyEpWMJ6YPPpgjNXzVCEuhHQSDeVuochoib8FE4JonnXykKRJXVXx8XKrmT2xWNpgh98CEgo8",
  "key18": "2FHqZVcZvN82i9fybTZFi5gTfRzUXCsEQxMW9K9FQRqkAocP7Tk9FE2ewSQQYTN6Se3Z2KpAXAc8Vum9z6meWFMh",
  "key19": "5VKpPWaDuxohEQcBgnX9Yovko8uu5PxUsWn5Aht2QiSeMyxgxzcTSm2BATuLQi6sDLh2XnxUHFcL5785YWJY2TLP",
  "key20": "248USHADFP2agk3b836q3kit9eF1UXUPhpTAXVrDL78ZRoy8uCizH1YvuzQKahNUmaBbXVTagFjTnC5EARbVpePx",
  "key21": "hX7GYhheZmEdG85fazERyD7X4RrLusmybgYKMP8B9qBkxzJkn9EQD8u8hLaZiDT2oKzqTrtcpFaTGR3BVKcZ6e9",
  "key22": "4MJ6fsm1gMsoLBJW8sfea29syrAk4REXTGwm7hdQ2sLDsDaTDDrFA9he1UpVi8mrRjSRrsssXA8Q4LRWDq9SBhj7",
  "key23": "CaW9fstxZVyrqoqFNHbenyNxtFhbNMSVFLand3RnoUbaprwfF9x7A4qUqNZqBPv5MphJS7DSPvRGAnFWxp9yJ3j",
  "key24": "4kcLWPAYW19wG8bgZMh2aJQCvQPgDzRYVrw3LruyeKyKJtA1TSXwPuS3b6nU7jnn5Qy4uE3ERp93tnoUbvbyJin8",
  "key25": "3BREtJv5o2rV435os12grH6cHqYNPj2yweXtaFQ3VvS495Wp1EgLvxrj7LUXgyp12uWDTftDSGCM4jGeoBXPzgj",
  "key26": "5Cfpr7Y1YR7s5xJ22QiTeDrAhNX6tVhRufXLQAq3G7FYgr2i1fsLhYMZ8MYuEw82LSsu46TzsX156f4mhEn5R93M",
  "key27": "5uY1UJF4jX6PgCntJFTVyhbmvJ5joKJXyuFHTYHRD6NjAzqeDiLDqscwWHpFfaTeyzJnjd1BaZrR9N1ncA4sfRAx",
  "key28": "4iDG4GKo4TuM6aD1KMMLqk5jn3rNq9xRKRuMc3A3gT1r49e1F9JJKncdPhDXkrppfVCKXMzBCsitKrTtaQkyMU5i",
  "key29": "2Rq73RrxZ4WT5hEq5M37rUgcB97rtYUFwJNDe6hwv4qP5HVhxhZXsxPU6HxVK6w2f99GkKQnJqCfwicdWnGA2xoZ",
  "key30": "4PjBdVpE9sUta4pBDQNr48YQSHocpGyyRNAaV7Z3WGceuDJKoPjabWYiA4ovhvixno7iPXkgWh5NtnFPH4fxCtHr",
  "key31": "5LoMvHAwz1U3i8SAMpKhBt4hXqbEPKgvptdhHEgP9sizpNEwY4rBgjBL7a2ms5nfg8mw9ALPk8qeCs5ko8vXshqG",
  "key32": "3VWdn63mkUVCpEXv2FTY6RbPXETJAeqEmgTQvbnB53CcatxhGPUYHXScKEoFtehu3W73ZJhqCFCdbvsxdS54UraF",
  "key33": "5uJHk9EsGbULwFgFZusVGgV3nRXAnLnrYTZ5R9sbGrPqUsmXi5cq7yaw8ATLsj1GGwuESsUtD5hY2RiFXcZyT5fe",
  "key34": "3CPDLZMH7NfXLntVw8VCJ3GEdqFiX9mTwTVX6CGTXoMmacXCzSs1ZEjXgQQhj8sm3VVayh6w4Sr55qH3LQRK9grr",
  "key35": "3isXL183v8q7Emcf2LjSEg9rFtJFzrDo2BRyb1QVBsb3rZ8YcSwsSPSJK9PprJAn1Yk9vDCTWZaZNfJ4iWMTfb6W",
  "key36": "3nuAEjZ6bSnHgLHpqm8nYE6DAjom4rg3au7qbmzCN8URuFVLQUxpANapVut4cFk9JRyuH5VMoJkwQw3xTcxsRJM9",
  "key37": "4HvYAt98ja9xmmbgJHkFNwYhczcSex8BbE3JK7tjyhwooHSp81qDJENshiWRKgVr2uoHHM6EZ4czPC2MBxhCYghs",
  "key38": "5ZswTuQAN3DMGsZu7x8yf7YPiTNRWc7hTmk3uNCU71EahfQh23tBQkksMDkeN1gXHX6JZDTnBgfQjUxcYBKVnnhr",
  "key39": "4342TMvPwZ7YLh7bebhWzhgDHt8pRqKRj2VwpwJMauJa2LiBbSS1cRZLUCvYWKhksFqbNggEviXGhGHZ6QFgSSLR",
  "key40": "3g2RAr5bMtKomGNMUb5mBXKQbQwxm6G9BJoVK7WmCMf352LthfqXX5UHinUSVfFFYiig3N1fxGb25JaaCYMTqioN",
  "key41": "mMMwA8GqWk2RpiVb198izYQC7W6x5XZz35brTdb2tfCkqkf8DrkSoGw7uMJsaD6EhwFxnf9VEnorzea4LzdRgSa",
  "key42": "3iTjpkqCWG2Z8mZncCkFkRZre98TfmjNBLPtythh3xYNmNJEzkvH5bGfPwpJspVsPkJWsNJTjKPKN4V5KMW9qL3f"
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
