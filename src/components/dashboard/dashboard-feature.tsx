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
    "5jcE8PksYYFZqBx6z7aHBCP8kTDxr6Vb69qaXhoLSdXkrKT3pzRPiXmb9gLsSXwL1gj9gCUXSug11WdYFneCscPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tDfHsWBEWY46GNs8DsJaxnhe98EhiY5whqMwmZAmXmhRDypTxVo2hyesbFKLWbRccnCBKqBNsqKxDACvYnxHouf",
  "key1": "28WAMHBjKrzcUxXzkf29VdURVLHg2E4ToCvxAXY89ZGqYrdx4kAW35wVt6KnhNov8DqrdJboPbmN1R7aCruupM7c",
  "key2": "46apoM3xjRBMUYiStb5bvp5ivZBSdyiwLzHsmwVfSV9x69auSDPd2dVfDFqen9KtvS4dAREFByhnRuLBqvVK2Qtu",
  "key3": "E5we176AZgZiHxte5am35XEVbdFaBFvjKpXYpp24qyavYiEkMLu2LcT5AQPBcKSdLP4omkvAc3e4XTinfTe5uzh",
  "key4": "2B7Nkpotk8pVkKfw5jU2KX6MotTCM4hRi24yLyGWLmiTsL13TXuoEqSPtg7R5JfDLvsn4E4M4TcJHxCk9ScBEd53",
  "key5": "4ZiFqgkx2rcgzmJXsqjkX3oaDTTpPKUzuuiNfP52e1DV9UDrL17WJ8joRRXma3pdHvjEqNE9eSd2PN76hqRDtv5d",
  "key6": "4Apfv8NAVJfFDHLgXL8TisPZg22NaPNvmZJ5uefexqB3PCjdnGm2oYhaau9oScjSszx7kMKzJxyMNRPjoo47w9oN",
  "key7": "46aW2jTXkEVfum3PZEPJ5tTNXRh94Cv3qP9ovsA2RrjMYnhV6ttLKP4f5eKbwhkvr2iqCQMSUxAVBZf6YNdpWx4g",
  "key8": "U3gwfDnKuukF9MemjHTqCYFfuVWR3ULsayHUdgaWytizR3o9YEj5VboP7diPeuM4fv7FsNtxtnSUuM1rGKdu524",
  "key9": "2kkEwsUnbdmFEoWHbTA6M8FRuqZwgSbVDZUQfDFyigUHT5PHM6aef1PiXFvzkEUjMMbggXDJ8aBTuLSxWyhq3FwC",
  "key10": "5WD6f6u2KgXSzJQGEZnN7EFHUB6XJC3r6WG5NHunvkcr8pzmK9ev9cbhY6BXDHzdA544WZD7Wva7YKwdgSBV4UL1",
  "key11": "4hVX2Uvq5ht8vcRXqqa9BDxAX45fps4kgRT4DD4hYnyXkHhZbjmPo3ACVAkuiH5YYaCYwbtpPmyLkn8WaP5zwhjK",
  "key12": "1EwDPhDeHKsx8pTCfiomHfRz9encYPJ6WRqVA6CE52U3BuTuQsmkeWuySzReJiEWCKQdgy9T8WXqYVsB91LacFt",
  "key13": "4yBwzEJYqDv4fKi9H2nehuFGUPcxZN4n5ZXCtJcfm1iB15QFmHmJEWnvQfhehUbaswytJ17qZBTxZQesHRTnkZCE",
  "key14": "5hr8qpqjiTQT31CbAKoCgSaUoocDZLMBVMcen3upENhRfZVT3YEwgM5ZLdbENqHCLDfaVhybmW3zV986PcvhH19U",
  "key15": "3e1GKQzEKSbuqy3uDTkHNXsH9sBZqZSwdBEAFx5C6h9hB49U3c1XAyw8MViCd4oR5MqHVJj8nNcGH4MdSBqzJfjV",
  "key16": "4LUzGXhyTRLwqHgz96FxRTFCJwWMhC5edqaTWMsx4xLGou3NwDMseFpsNdRBBxAo7DnVrrpV1sPEFv3u4ZKQY9un",
  "key17": "4BjzmqFt6Jc5TMi3AyNx7Ez6Nz72FXwqoG558kA7hiBByrWzUU5f1XxjeVHtFP9i2fxJYUdW27SykVru5pEZ42by",
  "key18": "4JjmBxV4ep9g6Br6azWHxFvhdzuMT4WW6KiRsKBBz2unYPFPBXQ5dojgEtywpjn3tkjB82NeZ6L7zt6WmrNsSHG6",
  "key19": "3JahzBdgUwUanULFPcaYLPcMZbibVyCAYWLjNbuZxhBkTt9pNfWULGqm2R6ixdLVoMNjvp9z4ERXmUvUZxS1mhxX",
  "key20": "ctvMCW6FAybnMbAWanbTvPpE5Nm4jvRdoSNb46hk42QZWa3MRQp63NSfkdm4GJDB5FuD9djLTdbMjxrZkZBuyEG",
  "key21": "47csVAA2gyRrUF7zKs57DdXiwTLpyvrdvYPv2ccavuCMvqvgTeXcZfzKkdnTrv38eHKGKUMN4LxoX8aGd24qNU8u",
  "key22": "27i9xUUq1iQebK2RQqbz4j3w494XvBoJM8JPpknSyEtDha3iVBnjNcxy7wZBpY5FtdaxtY9JxBSiFyEattewY2rL",
  "key23": "54fQudMgYyeiRuTBw1rjtWcNUzupahRirx9LcwKBXv8oH2qNkHkzVSKpxRy4yjRGJZcaC4gwU9FpJjSi711xRbvq",
  "key24": "4N16k3SSMpF1uhccs1K2A1Bj3f3CwBKW1xenADoTFA9ePGeayqYLbJFwYn73n1dfEeqJG8g9PWtGutZd9t4EhYcq",
  "key25": "3FbP7fpTVyH3SG4P5PgFbkf8ivgJsSL2WtVPkfsSigTNsZX9cLy6NTuGjADc4mYfZ5RFZbao6qFcbeNnxraVf8oo",
  "key26": "4hTvP3bpth1fcsbWMFMxrhcN1Re4Xb4okETW4zeFwS3U1YuYCssHmkgsuKSBLYk83h86vWukvt7Vcwa4iXcvtSXB",
  "key27": "5xpTzZ8x44ZqJxthGtRXkY7PgbRudqe2bXYuB8oNkR1CnSAgsuJ9yqJbgwMEEEsuCJFMss81qJc7BzW3yZiphL3B",
  "key28": "4hENtB848FF8UPJ8DHxZeoB88WkcS2tQeatxV4iDgWiX18D3wipzWPYb5H73XsVpEiRSSJziHANCpjctgJDuPANW",
  "key29": "YXFbYKqzgwM1HUQb46excDv2EiBSUbr2tYp4sZ8AxnnvCqBch1i6PKTsLuV9aRBoCNFVkKtqQLXGcrxwuLEzZVB",
  "key30": "3iW4f8KhsTBSXzq1QYUEWX4CxDQC32NugPPhUSQpUtjnJ6jfw3qUoushGqXDHUAo9HhYrKLTQB4SrN8QHeEzyQjE",
  "key31": "4dWbSKE5WFa4Qtn7LVQMw6yvgTeewunwtc5edKczj88vMckNJEs3aKxobAxHhLwnrx23Vj3RBmMX23SgPKs7cbSy",
  "key32": "8ce57ptfVF24x6QpE4hvmz576Yr9RbyfUQHPwKV5wptujF9uAjSZe178FeNXg7SqrTNEscerqoMPvFBtmheyERz",
  "key33": "5qHatv4mdVqVn9AH4mqgf8gpsrA8dMYyqPjmktHTNgn5GQwLvTCvp6ZYWGMPc2tGzKB6x1V2ipgfErrptUKeYKep",
  "key34": "f6idURhc7H52kerw6Z37tDAEsZvkpKXMbX8S1NupiEoydBHJ8bt2R7erMw4MAtaWAWPNbBWYUKEtvYW7ETqzsSL",
  "key35": "3KVYBaVZBofRmcr8pWGQpjm1Xee2MbAGkQewbxPWwZxiMEoJqN8HVLZgiGTCLPqzm5Hr2QxFVebcCo9Z1gbTuU2d",
  "key36": "2RKMgc7FpjA7EDSFzJo58pLdRBtWbjQRLkk5qDzV3Szom9sS4AH1RNB9Bd3amioujnUhdSFYs4XnX9Gti511vCBX",
  "key37": "5X3frzuqxozFHva95SrYJwFhGSxd5wnYqJqvaDtMMDcbQKM4pjYUKRFtoUZ9nj6uVDGvJA4GyJRZ8rpmLRtQBpe8",
  "key38": "4XUrfNFmjCZuYC9sQHoZPHYyakGsy5PUzGJHmDPHq7z5mXFu4pnAccbNZc6uigYS58fdoxhS2GcddR1mTqdfGLJE",
  "key39": "5vH1MK4PTj7eminPBMfDKUMmQV4sxB6aVoFiKqiAoKc5ocmygrWuX6eiVwTVRbDgxrLMgaarB8xwhUBzbu2f9hQ9",
  "key40": "3maNhorJKSABBxaameEBicvSs2eXY1L9as4FqWeAgKDJYibTyDLrTkhVhmCxMDesJobEaAtezip1KEr8rNm2Vruw",
  "key41": "38te9tL6r6RJCueJNZEARKeJciVQ2mSBSxDVi4qfQHQvQRL5LfKYRqCVAcPhkwdP8KVuSWDmjLSZj3bRVP3NrAgV",
  "key42": "64P7EKD3tuinLFJ8JUh8tcGcc2Sy1irJLKgXuu4WfhYNevB3m5BippDn2yt4rgTPsb6toVK72p6m5FNy9AcDDDTx",
  "key43": "3jkaphYLgTn1uoPYzUBakYgV7HrBhzrg2tXbsvi1KEZKtcKJxvVSN2B9xxaHRzQ6iTegE3sirCYjAvkqGYaY9fG6",
  "key44": "WAVMfypxNfGbbHVpkFAvdmspFLU4EVdAmhTiw8gk3Ge2eYEgb4MfDbquZNMzuinES25w1qdFYDArjyV3YLQyfJ6"
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
