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
    "2S3G1mTuJ8RaQJShJsiAUSAgx9GCi5PA6UBUEjeZrpXT6WdQc61GhieG5UKTCF9dJjNxKGSCyX5571twNLVKfsUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adAGk1HsKViHRMoWSMwh2cePeeqDAQho9deGkKdX27dbnebdPTkEnyQEurpBuQ2DNEEuj5fnGGENqZEBwfS5CMk",
  "key1": "3o8yeBUBXLbUg5ZwqAsnxxefAt68GqEuoSme7LGM5yThZUa9TS84eF7XWVujgdLNDosMgutqQu3HTaAwrFJktEn5",
  "key2": "6DRdK3LRcxf2gLwV3UBcPs9ot3kyHBF3CUY5iDmiTQVJnkiuenVKN8CpMKhBhTY2Coqk5mHBwnM374BoNDX4MLQ",
  "key3": "5kMCozstpkLtXCMBmejHFe4nXSBfuPT7mVCpPtwzYMYYgDfNYyiYD3BjKF9N8kr1ZeiJpLpjRzpgHXJAwJfx7BKE",
  "key4": "EkKP6UVPWbMKxAEYdDQwJm6TiSurb1mPKqSjHuPmE49mzmMEm9iVKbBC1eRGEdheFLo67PFv8MfRFFHmwemG6Eq",
  "key5": "4TjVXibNuSHwC9AeBbBVNXdWU3L3FpCJCu3TDzNEUwydR6qzSCswwNLEkopCC2FXmMsh1emsLCygjZuN9qGdXFfJ",
  "key6": "4TsNe8PSk7SdynRxGDGeK1mECP8t1KTzdYbS4iVYjNhYinsLP9k3XuY5axSpbB4nxAFqjhyWVyBbTrrVvxUGZdmZ",
  "key7": "5YzYMQxX7bPQNN4ooD99PA84QRstE3ZuBYcEt9HY97nVguBEotZzUwF4URLTVzuYFMnxBvNtKb6mWJJqfAQfqrcR",
  "key8": "5UzXPwb8o7UBP4xFD9733u5ppskRTFrzNxifPF5DVXN45iKqYBLrUfCwuKCFWzY6Re3gjb7gnpRBYWk8vCPV3FZF",
  "key9": "4BfJkPXNcrNKd3X9XAwMVL2DG1eFXxCN6qER1Er5kWLAbN8UvgwfzfmhcBmoPTczHB4YFVZHei7MZ96Cp53GXnAx",
  "key10": "4mmHgo3rx2e4tCgBVk8KuZozjiLUwyhPSUK6H54oNMGGETocTeQzkZ2KKZJ9U4St2WjX8SSFGrV8BUcepYkptDyf",
  "key11": "5V5L3fRUhKSZUo3hNHMRTUKEqDVK2UQCVRRBxbxtYrqXRo6U1rQ3Prk1SYSR819Sm65Lo1n81rRgQa3nAtfLEDZP",
  "key12": "61vSiva2PY1ygqJ9SuEHyyP1ySPiyQ3qj3fKqYxK4keoq4pNfuSU4XNh8jMYfEARDf1Hm2aJEJyVzyyy5mPv6xVK",
  "key13": "yCjVHweEMfgTge7ZVg1Hbv9DC9kr2MM77WgF6sb9tPMvgEQKEkZ8TGoxjpZouW2macxhCSTLCZHkmxbsTPvxBA5",
  "key14": "3hh3gipc5pLMKLtYraeNxmDQjMjMgPpM1i7uhU5kX3EpAbu4C953pC8rvE283FkJSnD75r4KaEXsTvqmNbzZ52p2",
  "key15": "4FdKQ1nsPCCozu9iEuXqw83qmwMKNeebSyvcA4zBymiqprjTnM43TXXPSXScDp5wzyvHJGwdZzD5R93sCYxrjChz",
  "key16": "5Q8gQuwvxCGeWvWPvWaWvpNVRgAJsgeryoPNCr6igVMoh4DbSaZXkYPsnqHH9BUvgKfQLcinJAcU4o44bujDY7pC",
  "key17": "2crjm3AJDk3KR2tQ5wfWMfzVV1GbKzPRAfNwhvvzmmdxv6LeDmRr5gGY4BW5M2gD6o5sqKXgq74gk1NPiuFoyHKk",
  "key18": "2s7VmUsaQzb9wwiVRruoiKPTA65spQuB3oiBFy19THXhiRhP9cP3XLTqL8fW2FAoeca4BcvYzeeLEjuHPKgP988F",
  "key19": "4Aix2Q68u9TNpaqBvfDHdRZmPCtz174S4yr46EhPqaRmZCpwHW2Pkweiph2icZkUvPsN3zPHWdkcWvi7b4DZoViS",
  "key20": "5P5A3jqS5R4i7kLazJYUHKvsxuQAXQcQZgBVpdVQ46YM2DL2TaBRJfLJAJ1CaSBpQaawZ8d9kLgSrVaQB5Uj1Cmn",
  "key21": "UoaiXGwYarGCMz4f3DL5mCBkFW3teg55LxHA2bSGXQmNBdMbNHzaXAJRbSNVCtjLSqTjWaSTDW36yKWUiVA7bTb",
  "key22": "56gjxLtUqC93dhHUq25UuV1EkyBdziv78vKs9jKs8Jo9zHkLKtBH5ibQiVZinRzd36UNC8MAYWcZCVw6KSdB2oJe",
  "key23": "uhVPVAd3cmt5wWngjgnW32aZCFSZ3kaasTZAZPKsnDbH8CyvM1PPXEYJKLyPB4McQwXL6cfZ5HSaDqXr1jpV79g",
  "key24": "2HFRXEnWntX7heAvJEBi3qihhraSWv8sYZ6N37BBfX2grheQFQoc6EtrsSs7nhZgwLYsfkW8aGbSrUkF7RtpY8fS",
  "key25": "4jKZPxFPh3cEsYnvx4wDmvE5n151HeuYuNrvKDaFqTBo5JqxPeXGZZvmgNT7JF57RymVyatw74TBVkubnfkusjWQ",
  "key26": "4WcALZkoqwhFmNvSYDnpJLJA8XTWop6Mbjvn61hFvAa1pS3Zmuq3TvNt6rCrPJsrRKR31HkwBRmWmVLSfxfTrMwk"
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
