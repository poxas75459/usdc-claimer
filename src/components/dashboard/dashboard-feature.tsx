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
    "3pSxkxJ5adR2vBHtWTwZwuXAiqSHcEUtwy41KFi7vGyv7nrTqRAvo93TvHymeckhYXEEZX3XxodepNogoP1FQiVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nREh4PWabkRcwx6Bh4LeC7rp1CuqgH8hUMQZzuTGYGQQTFhr4ZmqhubPGHNTCBkbsr2tHPRVqUUGKeUZxPmf69u",
  "key1": "52RPKP7gnBZEK2ZokQmtREG5X2U2MV2S5dEBw4qfaGLEEG1YJ96oJoqphtqNyGY7Rtv1vSrerkkbDusUshTiQRS9",
  "key2": "5bXfKUpZii3WBoJ8KPipDJyg6Z9ac4gPZNc2Zi6PnUFXnvkBafgMQ6wpq1BiPJYa3bb4JCZ3oTDkqY3FByfvFkjP",
  "key3": "4XGu3NhdqC2T4PP68xEuwHYyZz5DUqyLodp365xUkAqmtLMRXJgU2TgH7om2D4guQcgqTmBqiuhnL2RXxdTmQXsc",
  "key4": "4CpUPae1qQ7YEY7Se9FgiqiBFrn9bPvV6fXQ5PFt9i4Q4Lx2q8aPutsVSzdmCSWmRhgP2eqwveQ4NpsZEMfG5qu7",
  "key5": "5UzfjzVETB92YRW1zwMAvAYeoitJ48eeLfbXe4qNXqKx1at9FhTtNoK58G4oHXq5EjK14eVF9vUNNR2L9pmwYqPi",
  "key6": "4Rg4nKZt3n61zDaAXJGJdcbR7wtDEZ3FxF3VgAuCVXU4ixusrh8DmPZ6U4MSwDrWrDMLoYgDh34csSNBS6jxiG9g",
  "key7": "4pAkUKYz5aHKpDSXDTtKw2hhHr3eQr9mPKVpaJvscH5DT39pjpNzoD5aQEAVnEBtW1Mwc4qMVkKqjL6md3xi5WHz",
  "key8": "2sjFBzXc2HQdP4jgWDUyg3Yz1qFyyVSuRxMV4e668fVYmRpePsDLSaGiydChAEykdxsfBNd89MFCmAQMK4x9L5Cz",
  "key9": "2RXDxA6rraafeKsDXtKu1PnXb2L5ns52UWQ6ydtfCJ4Xbad4xgWwKDTRCpVbP9gS8ntmCvNKscGJj325189G9epf",
  "key10": "sa98PhV7BMgKg5U52PMTMJD5L6ySFjRSgBB1KVwYi7MGpVqv5qsS8p3RFZWjkZ9D3W8Z5dA5fgNCxcdpFUX1EQU",
  "key11": "Qpn7i8SD9AHD9vh3o68VdqKVD7Am6EBNgqA5LWZ8pk3APvPz8MA5g8Moe6mC5MnszJp5xar1K1hvGojrDbKUYXt",
  "key12": "5A8tMVAchjwE16wJvNAe7Vc4LeWCeRCniSohQE3tKF4Uo1pWRdkKukRJnb3SEPTgNYh57BJxZtwQRbHa9fbXPWUW",
  "key13": "3Ceh7n2MidBi4fR7HpjE1aYfUypTQVMpvYKqhCCmjdzmCb6q38gsEUt3SJEnCoiACM6HiASxm4RYa8HGqw9r84Yc",
  "key14": "37syvuuzi5pmC2w8TibM6N64w2WQth767acrX8gDPCCb9oo4hBc4972L5qoA8SDjopMu3RjNgbhq49c6ZTY1LW5D",
  "key15": "2xovFSmhQYx1aRv5HmEynEqBP15ncTrJVSFhLawPMSJt7MT5SKfXTA5Hv78GwQMs1wDnGM4nrfhQ3W4SVCs1SSJn",
  "key16": "4QH8vPTeVFrpE11bB124tiJ7zivz9JSrAfQjFDXuXYQiVcH7x7bVWnoCfEAyoE9AQvL2W9gtxBkmWmkPW7YdwpWp",
  "key17": "5tcyjjfmJgrwQWetRRzoRGHBX7TgMUd1wVxC3mvKb1E785o9MvJHXTpfxwX1uq6n4GNDUEQBcR64K9HDLdoyaXRx",
  "key18": "4peGqBvgNo7BrRJtS2V43UgjovACobGcpbtGGAtwNpwXYZ1uiBPZYuHhJjHwZfJUjLb6DkFaJpdDQNGEarwZ8oeo",
  "key19": "48AZisunzTyGcpmNdT9Z1arXef57pfRMow2JS4xK8sRbQVH8kY4w5tDnyaBorcmwEzptFuoS5Q3K6SDvL2z6cPyt",
  "key20": "3NzcK9ixAqPft1tu6XMYAEaxAW8Qh6Znx4VU8HQTDZze2sJ14t3bDUCHN4ZHcpvchBfYrho3DgkuXLgtyQ69XAdK",
  "key21": "4k5SqyCQSRVJzxj7t4DzwyZkj48HcrPfyN2M7jLqoKg2NEdsGamnLeV4whrTWVycZF9g9HaUvbqck8sThbKdRLEz",
  "key22": "2kBXqMir9setaKmxL2ZrPadENuvdQfuzJy71CS7PnHSW38enD2pHcP6J7tjfptpy4pLXf1nawYTHPDKUKbcwg8NT",
  "key23": "5H82uB7a3UP3iT8eJhQDEunWgtjQC5RffjxU98jDbANJYqhHUsxa9DVJn17WC6Dwz8KTZ5XdEv6MYqY2Ey7uxoGs",
  "key24": "5UjWM5ZKw5FuiU3ntJdpVhVqdo6ck49n3L3Ku4adhqyyKmP85EBgBSnhvRVvrGabcJkDKCW2vbARutSk1U24Qtnc",
  "key25": "5sR3ED17kCGdd3WziRsBSFrfFzFZFwVZeyBs9vozEtEa1PCTD9hWshx66ddybNM1nozMSM3pav4K4qxtAAXKqZiM",
  "key26": "3TUV4HuDMscBq8TfGdeE39ikzSozye9nGheZznzJTJTPhKapFE8aSL2B8w5NizUxGcga364NGhx3xwURY2aFbz4g",
  "key27": "NyiWsMxYfesowqxDxecjYoekUJqpU9PDxn7BBLLgNr5i7AsWu8KaV9QM87rrjKK2wQuon95aaorRnh3sgbxmtF7",
  "key28": "2g328BWtQoVg47cNABDW8v5MCoQAFPHvsJuimM5jMnK2shgYyJJHdcUixnKmNyTeWwLpvdCcrZSqJkkArnKvveCL",
  "key29": "4gFchtxu68f9PegFKK5qLXJd7iZJKbq8GsDggZJuLop3dFXyDn119Tm8ryNDCcfKe27jajYLGUYrqRL4XPtJvjqi",
  "key30": "4D6Vo1uBX2v3qPZTBE9jXAXxXSZwSHRR7y6AZVuyMFAoNREXaD7AzZY6zWWZ2CQDMFSQn4juVbogrJco3CiCJ56a",
  "key31": "57748nocct4yjLGd7QAXm9ShGRr7rGm9UmSvv54sTjb9yMC3EPLstd7ov3GAmWiQrrgsH7CgnYkyt9WRM1Rfyder",
  "key32": "25FrTEuMkR1NucfnM4MpM9SznJWY9Q3FwA1psfNbJkcTiU1eKPWcc3Uvwszbj7vqJYoaRE6HB99T2AUFKJtm9LYJ",
  "key33": "yGaFEaCBMgfP1kiUQ2jSPYzoWnJ33tGcg2CRNhQcV98VegNVnr9B6c1DZvZ2v8owCmLVBPFikdeq7arJPGwtCZ9",
  "key34": "3TzrMnZ1Y7e6z5RUJMSRzBoeGZSxjK8K3sNmW9gh2zxmufwqewNEGyTVnsAzTJcLKL6vVuYXA9KZtaVc6T2NyFZt",
  "key35": "61xjEhnQYhUDZUJeC4cvqSjz7WhnZsLYwFs9S581JAwNQwP1JJkveF7KDPA1BViZYhgVg3c94ZAppnT18jwxh6np",
  "key36": "5636mjSZX6UMouSidQo7xr8jkMb6es7KPQRM5hcUwNs8rDVyKEhfUfDYKBQZmHvjhYWigpnrhHLUexWrhY4wpspE",
  "key37": "4NRxDMM26zTqXY69oKsaNKR5B3enzTov2DEivwmPSLYRq5HCrqFvvB6SReJ5SSqx4yE4csX12M7d2fHupbBYThVw",
  "key38": "3Fdafbyq7PkArjdZNnS9diH1ENtwgQ7AQjeiD9t3ffYKaT4Ug97xVwHX9REmAEreEEpcNKarQP1kMFjSPwE62pf1",
  "key39": "5yobDSGCLbaimzuAXZMjEripGuUrvNN4UQTpkwVRtksydxKDmbtaoaSLzgPqcMjLTzCfW3ZN9GA27apTT6ApTHgP",
  "key40": "3reBnXXL36wBxazTHagDu3iJxPMVbK733AJvK7HTFRiz1K5MaQyKuJPWthz1o2RunffwwyuqoY2F2EQZ1MbLmD13",
  "key41": "5mxKSrKz7WgfNzzSWqrZ26ZrVLn5dnZAtprNBnH36hh4UT7ESKiq32oLMxvdBC5emN8J1EukgkdpCdbYBbUQSijz",
  "key42": "3Fm8gx8AZqgJwFnh97SvRyrTtzgmcuhTbGWBQA4uxfn9Xhs8sxyJqfq3Z39hzeW66qwpubtQFqbfJg6mxkQhnqrG"
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
