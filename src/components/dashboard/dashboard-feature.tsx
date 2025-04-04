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
    "3SSw8Pt8JAGEpWMsqEWYzYc1oppLerdkLszw4HLLTesuMGTfRnCgni6bVEbMn4ftUtnkWyDrosRK1QG2CNotB1ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BP1yEST3fp1mcpBZrGzuVtqmdMT6JWcRq4uk3954NfEgYwddH7sHY9feu1kwADwZVrFYY8RauF3BFvB5YddioEF",
  "key1": "33q6akesQiogvtFLiNZ92hRoWwXAdygMDQFZkBxmPiNEQ7TPshzW11fGbH3tNgoJz9YRc2Y5YZ8GEjgFjW98Nds3",
  "key2": "5QN58Q67YeoSrMH7ugkaUPA8RisttNe3TL141MD9gr6WZC1ST3SvQdDpjXK1SnR6en8iGcRCp8H61MoBAkGc9DuU",
  "key3": "5Zje1wjTjw5gRBSkW11XSNWMKRvYyWz6TyrE15uWzozKQaHQVqUsxbu53Nzg4dJRQpCU43XuhCvwns6mVx2LZy2A",
  "key4": "4N3sMNQRh7kq6SCJTb87gzzU8Ep7iE62VyTMz65wp3mEqD2baJBsscvhPKMoG52aBTmxrz2NhRYMpLzochNmXho7",
  "key5": "3G3x1oemxtP4613xui8wXiXAWtecjZKydXjpPz2UqvKnJnfzKSbsMdNHtP3TDrL37TZPozJ4yXjXFDj9YqpbW6m",
  "key6": "5PKPZafxDYn96hYbG97zQhpCpMqEKzysBzWurQrATVnk8LvWXgQ9qsi7yJKHLEinXNpJkb8h2HQgXx9ZhFTAajSs",
  "key7": "ADgGzxhv5jcsUquQ1oRTLhAt9M5ZpXeYc3ttTfu83K8NAC3CZmSmcjFhLckGsmjpxozUyZu9DXdGX7cdmHKNA6e",
  "key8": "2wtmzUC8ko4ucvqbCbEb1NQGgCUP21S97xaXrAQ1LG1xHjYd4rqKhGShaW1a84imTYTzuXDKNUJvgaE9QSEoGWu6",
  "key9": "5XVsS4BLZGxfSooHDGwUgPqMLsfMwXw44zzWYLjPhhew3VMSiT64j9tucg3RA7XZLRYvZCU2a8EpN3pL8fBXkNa1",
  "key10": "3E1DbKk9U5ZgX9eG68URzbiwA6r4FSULTsgb6WdXrQFEvTe83NvrYZVrgTUmscPgVZZjaBHAnmsRVCSup1hZSZ4q",
  "key11": "3YVDnjqbzdCVSqrZ53qpF82DjnnUyDLXhtAvbnPhxqtXVD2N4GHij9FSKQfci8uMmG15s8pnRFzouSifLWuEqj67",
  "key12": "U6cfgcS8kghn9WQdvAcouwyhCL3kXCwoH8VtCoiK2iYi4qVEDmWPWC2V7gNcuje6a9DmAxAjfV14yPD45L9wLTG",
  "key13": "3FA5usdMterHYkz6HpYJB4vL2nU18hjnRt9LXR4nY2mNcik1zijUWHE2N9wR3Gm23ScrMXD35BwSxGsMMu7Uv8d",
  "key14": "W6QANQDmBATuePvYU398y83PEvJgyEaeAshFZUBy3wPkXRiVaFhk4jxRKzhEEofXPEFmLxFFsxMQK9hnvZS8bBW",
  "key15": "3vdYDAKAbw83vuSrwU4ABiH9dwh4w8jZpqFPu1KLDezoE8LaUj5hcsfsSJ8JHjnmvcaRn3mZnSb7gSzvVSpgTNiJ",
  "key16": "55XiPNT1NCDuGUooBNcjaTfABtz9ZpxEgQhguAJsLybQKJj1YrgTZ1xZyZay8U5vXbVAcgKPmS1j75nMYVEzREMC",
  "key17": "5HDADfeZ7s8GsKbPmEAkDLNe4bR38HgFmCwv77JCHpyEhVr3wxPVKH61eYB7MCnyavwGPQPXRsxPJ5sUZuSyjxsA",
  "key18": "4D76mHfBxqGuAJ3MfDM5jvpwyL7CCpTSsC2D3FDARpLCb3Q9RYNN8rAN19tub2UJx3M5QwzYEuohYWZtAfXjV732",
  "key19": "XRtshBh6fnp1wWXrXVRJ4Uscrwtx2ArW5kEefaHWE7cK1TBu3grNgcZeHT6X4aPVsA6WCfjd3Vsc95dTxaRexJe",
  "key20": "pVU224P9ziY4Nz2WBxkmBEJXjVT2pjQiaGgzfoZh69vefxGXQuVWWhYAaYuAhXqakHEcaSyknewPUAwBbBziEFG",
  "key21": "3FqtndC7fCVuqiwmRgNvXDCPuBizrtNRFWgygXQJDGRgXMB2Y6yp2EHDjdqZR4buUKKTBJyWqTnMD3ECxryLe57S",
  "key22": "2isz4JCg5C97RcknbQ3Zco52d24jUhx9y44uEiRcvA23rzqTr4L9zMSmopredN8r8JaUSyEzVebSPCcgjP4LvPP1",
  "key23": "4pQh3GE4BeqZimA3mkMUCLh7rCsSWZpKpKfLHNoPXqp7WYPubrDpA1yZqs68AZgrQZ8rzymiWCZsMuNM23xZwkxx",
  "key24": "4JVKZWc6kTintBMjMFTCCLH4LWXNXJFaAUPm6cWpZDqzUkcFvsS4fn2xDmpEawg57xxzciqhmcwNrf9fBtP19ZqD",
  "key25": "dkEh9Xk3YDRTGfho3dMmmQP1gJaSxiZ9FMWFFczbKcbL3dgL115DrsdwAqPCFF7NU4S4MuRRa9JKQ2brxLq7go8",
  "key26": "5dzDN8CBThowTyqNLibiRDRS5ijPfPwFAGDDFEe9KWpu25AmgFRWCu8gMfJc7P6RgVg5zbAXUFkBZSNN18TBjotS",
  "key27": "34nUPCCE4xMXa9cde8TdKoNUA64kTCVACwjLZq5z8zJNLvL43v461yN5gb3vDYm4aFxPQGwFXxAKHifxoSFJbKjX",
  "key28": "4SzVim8hBVU4V3ticveKA7XPpGfF96gbyUy5eR8kzL1BmqMDt96rrjAXnsEKafzN1GxtC9nJKD8mkEEhCMUYdwK4",
  "key29": "213yEC2CeYDvdVUbTEVzEgCBcCDb48FXpdBgTHEdP6dZbaCm68fByqGFZj4TRJZE1aQtayWwh8kLf7QyGaRvyyGJ",
  "key30": "56qDGhqPgVogtGEuEe6KWxYmnv3fC3pLL3WNLTRTrTnbsbXwJCfWt2PnJ41vGfCq5xnoZ3yFfKJ2RehkF2hej8Ma",
  "key31": "5n9syb1CtwuGBcsQWJVyp8122Htw3h46mMGarSPY3BQdhkC1ZZsb3GN4L5RHD3qZ4zzXq9Qe8FPL43bk5SLchDYZ",
  "key32": "Z97QRe5tr3HVtuaKBiYgsmEeFbS3kqngYmZoARcKBJvExN3L7b25A6JxWb8B4ZudiTHwvaS83JUgPbUd4upAptq",
  "key33": "5g2sh7k5M22kanYiQUu1Sw2qC8syLGa1JFwxwSNhX8DiGfe39xoQcuZhkioUEBP4idtphKek1CiWLRSCLVRpaDhk",
  "key34": "2rtEWnrK2Q4FPsEz9vqj3w92r9w1h1PrXMr5ttoDchpmfRABMV8pQBuo7PMswpA1LD1uiAZf2HD4nU8iELJUmDAq",
  "key35": "2EBagyhaFcxg7z6cWxCZq9oRUMWxqVQsY515YkEvX3aG5NmRroqTHCJhXjGEq1MVWjdLFxxYDACBaxTEvG9dYwPk",
  "key36": "2Bi2MEQTgfCW4ReLBC5zqDUvA38bAZyNeRuWB6Tk6QdU9pEq2eSRGgVzumnufVS8UTw2kfXJMkoorcG8AcGzHqS8",
  "key37": "5iksZiFhjvKCKHpEivWR9vaFD6hQZt9q9ZtAs8ySKBti2gyZ3ofQxYs5Gd8VNURhTihM8YiLztrzw5NZUbMnPtA",
  "key38": "3i2uPxLNXyKL8YUcG61NgEiXrPWLvKca4oxTC4RnoyynF8ZULoPBtsCuCYXArxxSW9H6SDRVzmc3errnm77LwWfx",
  "key39": "3C8npW1v3TZfwNnzHNSwRdsh34CZ2RSCb9fkyofYfbny82AoA5poyUS72SpWFEDeA4ZQewDMJcGpaEWvJnYRixtP",
  "key40": "5HmVnnn1r4ba8Csr7YU8jzeja2porF4PytV3j2iWmVQvHZ6dU7qyVmx3DfbdrbM4Gs4sV9VAHGkvACztzacQcbhV"
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
