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
    "5SzMA3V5EJqGdSGiqqtkMBXWwh9PNSCsbvvSYHZ3uJvWtwpfgH7jEqa61mi2X4CTDRmeaKVs7xEz5KnWG9GRfmAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fq2yTZW3nrXTdPPjhgM81Wkuf9QYPdbPUewYm7LuxLuv4CdpoiESMiXjeH2e2Xkj1ByzLzuDhFmLbzyh6zBBrFx",
  "key1": "MKprXosPtgVVmri5R1a1qxWMmgeZj9MwdRCLrRDUJ5LjmJnmcKrcT1YH8d8Nb7nhia5pFSyYgxKptoJbbtoLFAK",
  "key2": "34mqrhdcbXyURVpCdFXevBUHgLdYzSVUpWsrVJXXnnZycqKeDSHQcbhVFdSqCmHpy9KFq3TSWidqN4CbRjfffhcV",
  "key3": "4vEZHDD3yVefRqWUcwZX5cL78XGJA2KpnXMHdwYaTmUy279Wy2ZH3BVzbChma1Kuh34pmz8HgCFuzrXvLzk75t23",
  "key4": "3Z7MmhafwnrXonshU8hGgvUzCMqmbfMRQwiaXYHQqJAfS4sXbpQx8Ab5wvxkT8a2b67a6LaT5rU2EyWBVnRnVGgj",
  "key5": "XRX9gBbQ79otCFbAu1NPRYJRdWeNREZkqnFhB8u36mX3ZJmN1XjoEE2SieLaeNmHZ3FqhBPhyqfwHjZekMq9se6",
  "key6": "5EcJJguWTR9jBzmTDHYwYbpjRNP27oSMuk7LincHpXQSEbb3QknwNLCVdxdope4WjdfTbJWBWbD7cVtQ5KYjcUEx",
  "key7": "2CkY1B4hkobuXgrK3QVGBqf8LXVTk2KMdbUGg6x1EFao2xTWMoYPUyxjd8hQhAYWLPpCcxnKj1bkGETkUyuxa2N4",
  "key8": "5tqyicNyuxLdQECcJt3oSntXcCAtDYhAC4S688VWSqwRWM9eFsCA66WNE1mQ9ZD6TgWqfVWqm3WaCNVCLuQkkPha",
  "key9": "gyDguz9hyotDJuJ5983BPFwvuogbsiRRt1tSjpvfutvAEK2s19363KHjyipKwJ2zEx7bzGCHYW6XZzt4HeHGnY7",
  "key10": "468YM4fdzrDBauWH1pSgnvaGxqeDVWAahaLuT4DrPda3S8PzKpJgjjVCSuLkPwvU3rLgSZpX8ykLVDMb16bJPksw",
  "key11": "2rUarzmxgwtamhNFgcb4ruDvs3fqTo3WMJGE8eFLC3qjRAxsPAwA3AD1n7Np7eXGtv38YJA5CUFzxaLLD4kuPVm8",
  "key12": "zJqqLwoCsnKsWjMyD3DCM8bjF7Sg3BCEyDF8zis9Qg1oPqjJe1VYek9z9xP6RRzesqRQhVTbjakrx11URn33BkU",
  "key13": "54qteToRg9z6tbiHeA96CouWnbXKsxSmHsqamZyvQXHpQ1XBFXjWfbLEoqyX8nX2GZG5nyHVoH1FSaULfzQKR94P",
  "key14": "4x22iKrrAAzbub5qKQNyokSkizD2uVJGxoWNH7hFEP3DCiSFyv54VqcjLNjyeMFH7HrhnGRaAE9AXHkG4VbwpNCv",
  "key15": "5rrJ9STa5GhWJjjGPTWG1LgM6NNw3s95T84mLv2qwY356GoLy7BVXPnLHoPN5R6wxCB67Y3f6jJtRji5p1Wf322",
  "key16": "2UPanWtCehJV9Srf4oPsmhwnthetegbGA4WGMhMo5MhwfNZGGKwJsZwtm4KXrYMn2DEAc7P7ASsk66B6H2D7Va3R",
  "key17": "3GYq5pGhfjoDcpfJFHGSAtJgrdSRYHPpbRKyPhoWceH4WCUw5e3yPEqp7SZ3sNB2JXMB5jfoQ6wjSx12TDwbT1WX",
  "key18": "65AN1SsmbrTd31eNyNxiKPy8megBAYT2GVB9jTuBxDNZjmsa7gf8kcXx4MeM2AsZ16H2HCjqnhoLN3EDovcfxxTA",
  "key19": "59uS1vypLG7ss1r7AqgfdJ5hCm5duaJv89Kc2gzJ9m786B6cRH2vHwDaj8QNcF6SQhRJtAWEapBK2BqdZYJHDrvp",
  "key20": "3aDCNxe8bxxhyizCvH4D32wupTPSAXgfXVVswaRDFJwVNhMAwgvvbFJvSXaRuFmRvoFM9TmEUqNKmCadjkG4MbmP",
  "key21": "9bs2PjQUhipDkPaTQNMqpWv8y7vhEf6XCtdX6UrLoBkU3nEj35Yf3jqUCi23u7KoZyTLLd8UYRisurSvXzTufCs",
  "key22": "4EJesVAKjXEmm5UHFY56gKF8yxmq6bw5LHfZZs7B89dtYyTkf2Q3MtPrN1jjnZVDUs6r1mEJPPPkcVpdwwjScQEx",
  "key23": "dMXVucH5JKEhtQNMVJ7huxWVDBzCs8GuWMh7F39dzBydMNhVG2sBK5Vq1C5LyxuiyjreWpGgabGrTqhePPWoAJt",
  "key24": "4nwqj6xndwGqZ9pxFNrXWqQ1zeX32chs41ti4zh4Y9Qd29D68pzho4LUuEorYJx8g6D8iH33xv2BTNtqzgg1pRCm",
  "key25": "4CBvvqpqQ2D9x8GiZ433ACyzjpM2uVkMmG3oRjGzZvGZYEeN6Ag8fxcCzUCkrF39MhozSD551NfTawbtpzS6rMxZ",
  "key26": "41TSxqUvsa9Gf4bmsCFAAbDAsg4JSoyo7aW3MRFvSMoZdM6xGgY412uVBs3VMZYGN3JXvMpuPWMqWW1q4ny7SksL",
  "key27": "38JTBKuUUkAaF7TYC8jdUVD3EYcgAW619bzitSav5taxKnz7N6EtotQ6oHVVtCxiyDfZpQ2QY7c29nh8FQAMnrfP",
  "key28": "5i1sM33cTHuJ7tdEZzvMD9VNZH4K3rokEmwiQhLqvaC8nmr8Mw2ixKHxsfx6ykRtwJ1wAPX83dTFiHZ6bk7bzfGL",
  "key29": "4TzZ1wG256PXKURRmEiwoJwhwVV9TWdu1tYHhEfuBAnJV72ERsAhzDnsmDGr55nSYhpN6NUE9LBUUcYjUUVVa2ed",
  "key30": "35eUhmsZa8uRuhNuQCeQjNrhfRJqwKDj1LEm87cJwf59nM3mpSaehPXz87UJZax3TnUuyPsCLM5pqvKWR6vQxG6W",
  "key31": "2wGAgUn6EuUvgcYgbzSWs19FhTYGzrG9GkPwQzQBPNZ51mKBkLBrbXAzwBodG2odtHUUv4kagTiTg5BJU7RC8Kzo",
  "key32": "2ovhxA358L7vQdnmYpV4FtbgBeJJE3G9LUzKDagQkQ81dfqtHfFwXaby8BvtL8xJijYoTnWTQskeJv5ZMixhdyZM",
  "key33": "4Y4VUg1KTjUpxRPSEEzKJ4Wf3RZpaxvn6LEpqiJqjXfV6hqMDPXiKh6G1YC7sMkS4uKRZFirCwSCbquyTb3MrMC1",
  "key34": "2vmJxafwQ6JCvdvZo399BPQbJdQJAPzgEez14nRY8A9DxZvxytQ4C9faXjttAuwUQoauZgQRGXPWvfGWGWRaVWce",
  "key35": "3hLziqB9em4hUivp8gZBvqnyPd1Tq28KzKbd33ypGFewPNG61vD5o7mRcWJb1szmwuJmz4NWppFD1gJrxiZkLcKS",
  "key36": "eucPxz3mD9kuZu75j4eTi8DSNU9rzyTLCB8LhEZiwuxjJp5fc5pXhjfQGCu1iop4o9s4UZscLtScsxttghjvTN5",
  "key37": "5aewP8QjFMFEvhNjoudcJzYKybzJq2dDpWQ7ocson2DMgJoGcyNXmKQgpdRmxGafumNVmfYNpSQw6PNQCnRiQFif",
  "key38": "4sY6rw1uG5Uzt67HkBywexKK7VbYB4qiyQf9716svx774bqfadpSSgA75FoA4Udc9QbxRQaWcJgdTqNHPHujyWjg",
  "key39": "52emJcgQFBM98geBwzS6fk5j5hF4cTXuwXeC5GNM2N98VGdfkmehbPyZS6DqRm9JLK2kRmeqnu8LSwo27jm2iDD2",
  "key40": "FPyGfCjcj7dbuZWsLbWH3AkUwpJxfgPAwyL6zNbdGtzjD2p6yHZ2baJNQQLkSuyNey3CGXDjWXbYK7Xa4QjCPCJ",
  "key41": "52ezg3nMo3XuMSJndqttTm8QU2ozMa5Yu7Js9Gh8GrQTCSvRn76m3JBrcqTB79kmg4wEuFLQ25kdYBRAwPTwvCRZ",
  "key42": "d85V3w8xxEpMz7ZodU7mBEhTNtARXSzq1N4Ua62uZ48jDrzYkZaKtxRCA6aQPEHdw4eySp8F5LxR38E5xFae54e",
  "key43": "5WAT7fW24APR13hE7t66XiiiU7gXiC98ngR1F75txKV7pC3U7cApQYTJZtY1YJdoREJh1A3g9tCwV3B1zeyr4PP8"
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
