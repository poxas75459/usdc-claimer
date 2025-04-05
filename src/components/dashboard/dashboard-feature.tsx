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
    "2go5JAVAWUbDbe2Wvrpc8MN82oBNEgCPXEHtpYHsVCjJnam345sN2mUkTxeUQUaji8aaurtMi8dk4sPTaa6AR4ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33K4SW3yBWjmRicmi59Aw6z15UdaJ5h4rsjBhPWyo84TTwV5gv5dGnVvsCC5hzHRRzxbZSA1ZvHrz95oK8C5AwDU",
  "key1": "5Y27rwpy93XwB9YYuLsGy6WUCKmN5NyRxDDCatvsBRTVQUhdQ5i8meXYqj5UjUyAv73V2afTNC75h9QMdCxY341M",
  "key2": "4qWfzfz8aJLbZPuViHvveJuTp29LP7Nxhip8C3cgv2NT3BNj9d19utJXUWX8E23kYUDEYzFW6onArjQqrTWRxWpr",
  "key3": "2DeK2TzWMBaT64YyapVYe5bK4cJ81GXSZbdGFmWX3FLpQcAJ7qtKQYbf2uXoE13D2YLUKnqv1r6LsrAxAKXhHh15",
  "key4": "5UBbmnvZcCRUmENq3TuoL13XKM7hpcfBPwhJ4XHbYJKHx9CwKDY2muXfR1Cr5uXJCv4ifNmaVBQiPmmWEsmevjWM",
  "key5": "3KTCVcm16KhA8ctovjpiaBAiq5GDYjQ3hxPbLdFf5U2JWdpjMvwrYmjVexMsi4n3gBWLcx26fpNWXShKAitWrJbY",
  "key6": "4wdAHiM6Km99DN7oBTY8rbCRU4nQrm7LxToubVYm1fdE9gU2ZCN7Va5rx6NcHREqHQWHWyxhkTmgrzTSeiJ9TDKu",
  "key7": "4FrACAyjZYDyCZkmNThXvUSugqFmj6gtKqmox17PFWSisK4UjVMyWeGti6FnZP77fe5nqZ4amBDRPsRVikTMArrY",
  "key8": "3SPaiBiKygjLitrVu2SiA8GsNkUETQRCYPhHVns9sHsCfrtfCmjjs3XvzFy9fDqj7ntyFaAVdnJYYjoaLwDfqSkt",
  "key9": "5r2vJeM582g1axG2ePAQ4cK77GTfdHhoNGFprddDce9F75SRf5Q8qxcjEay5RXC6h2KL59opJCnWZjw1deyy74om",
  "key10": "49EtyunrGMGxjG1VnSdSC3zyZvuNaQpJ2rwibX6wA4g6Udt6hidHhdiYzMkULQabYqM5jr9ZxRs4z7nWFVVBsKSV",
  "key11": "4XPfVdvJB3TjoVfr8AsCcFerwR1e7bTRPRRWCqB95Gv58C1ekKRbQiy3TCRVGFukUaGZwEisMFt4FVNZRGtmYYd7",
  "key12": "4F97MDSekZfXQZG8ipGeeYpG6DfHHhgoSDiUUSUAS94naFvUrm3FqeusHR5buQde9866EjeewdyRHpNSdkZt8mek",
  "key13": "51dgqYwAx5qU8RFgvYetawdwEiFqS3uAnag4wQJxcRPoBNiZo6b1R7bqkCYBqu3jwvPtnQjbSEEVmVvR5WHNfyGM",
  "key14": "4J1FbGpA99JHBLxKfDLZipTsMwzTDvWiear3vdVAi5V3fumm5Spe75KygujubjitmDMFSRj3comKZdVFjfW53Wn9",
  "key15": "1aN7kb6da8T1Cb5CPuhcmmJ8szJvUXy5hNRbqaVncw9DJuSwaGLMfuuoqLwWv57rccxRbxtwNtMM6KRJGqs6ZyB",
  "key16": "fcJhZjZczmrrCgBG1sb9wWLgWKvNYRs3TPtHDg1Wpmp8mbse5ZaXiMczk9bYcvP4LAVSCk2NfkZFXjfnH5WuhMJ",
  "key17": "5xB9yid2RPhVZ2RMpZnxntsqLZuV5jQrFNfUbzaEG3oEQvXU9qi58XDWGnMWDBNEbk7ScSNrwvZUJFZ8C3zFddGy",
  "key18": "2cYqr5ZohXvridTtzXmrZhN11Cb1H7vThw5vRExmc3LQLptULeVgQw2akNQRKBTULznvcGdz7pgTxJQGq35wif9t",
  "key19": "2hyMvdq2bxTcKxM4QyWLTcYpR6t1UmHQW3LhEiDf3ZkEeto5pJu7At6QmgtqdXzg4PuxYnTXMiRZfD9rgMeRQrd7",
  "key20": "W7Z3ckdNtijAbEukcWbwbFRfob43zULDT8qztgLqDHzJQtNwCicWoakBwoUVLon9ncUnobC4aw7PhaaSo4FyHc4",
  "key21": "5WfMDGKzYxsVbQJkVzATtqTMMCdrhNcbbCPkkPZ1X6tKZPnGvFqSH3YxKA1Y3itZrrY7W5TfPXEWcreYvVuAtSuU",
  "key22": "dc29NYKMB1BHobwnAx5V9tG4oiPSoGa5V13rVDZQFxL2JdXcmArwfitA6xwsFKEhPTVR74WTfzqsYmv1roxmCCY",
  "key23": "3M4tbiGNei1dkbPUPRs3mmXPpZSMNJeKZpVCww9bFFDJ459UfVnQqiJcyg9vuBrzVXSrmXRgvv57iBWLnGEvugwc",
  "key24": "2NBWRxQ9fasSyp3VQKonAiBPoHFvYJcTwjLQNm3NZ2KHLac1XwWSrx4LayLYzZqE4C2TQM1g9y3bDg6tmNgC3gZJ",
  "key25": "REZKacGw3pdkevcfAFxF73zVsJPEgo5dma5D8of2ps1aGD4vCh41QWCMU8nvSygFeEt6ENhW7ZvugzRdkFvwnh8",
  "key26": "4VCpBDL2pL4aiYgdwcnHXNQbTmJDWDykRmQZ6DhnuaTW6qWbEcrpen3dx4mKDgaWfdzz5k1TKeL8EjkbiZnwoMap",
  "key27": "5Q65zU8DVha2Ho63QccKWts7evrgoA75QY9fMkZemkgUtTjTUJxKvXn6i9qixTrVUkeZgt2bojthBUvQRZ7gELqn",
  "key28": "2sp8u3fSGdgXNiTDS2vQGiTqKkdvpC1JUvWYtNqAxU22ZHC26m4gWJj6CdQy9dzAfeBANFe7g2oHWAtMsPKdzWh1",
  "key29": "4S5JakEo7YcCRHoYDhsURhCKiSBrGJ3VSwTzg57ijr347RkspfU9ob7qs31LyvK5EYcvX882QtDCq3DQjX62RMMq",
  "key30": "dfEmpU2RwwDPzyUbEKkPh82wzqD2koqLaR8L165TaEkuTYubASft1YE7hVzbqEzTTcS8xcRv6qYpPfr5zQqk2VA",
  "key31": "4i6CPU9nAcyHE6S8tigjuTW3q6GoZvLYabGZxH2wiukiBUPYgmb4LFuEHSNtWkFNcigts9dQZ28wySaSVxmYPKXi",
  "key32": "Y7EhEPW2mWEmNjp74MCfRbRPTWBRS3v2GAnvuYhkPr6CSDVksAW1uaUXuB87e1nEPKnDozdwqqraYShzgJSQFWt",
  "key33": "35aMJjEMZEkF56e1W88WFRLUZxqLw37EaHeVYowt9m9jeoeoEoAbcxrhPdPhQv56M7d1pAtDR2uB7dmkuGPyXFoF",
  "key34": "3qYmSwjtX8a5Bi66D3Bijoi6eHw5iZN8L4biqqCv71LWosmApJAoeHZWxRigisGqCqfLmySji89cWMVfibzWmEbn",
  "key35": "4ccLsPxzXXrqJtTPhNoAvawvrK894UJDGFu4vMCnNWwwa6GAbAVEsYAXJuDijJRjQfxA7G4WZDvsqSyzP8xDUfeF",
  "key36": "3qfFCVhZ6ZmrpcpHTUvsRpmvp1oqMSmwN2SgPpZHA5YuSiRLMWaJCqMXC8Aq7MWG8wY3JkU64bqVe3vGREcHcE91",
  "key37": "5WtZQvc1J6AfrqFdK285FAYnTqYKqHsBVLuhVpyUa7pMmaBa8uqsR4uUmaLsVxGAeixfqET39KDEWTLpRKt4VHBw",
  "key38": "2tW9UL6pyGAAaLkN5xZojbrH2uf5zP6uSzZLgGSk3YnCmMKmTfHV8ePEwziE8iHEouFbXETH2Yc2tzjDxtq67Pam",
  "key39": "2unhpBt7UaM7Lws2eebvQ1r4mDEWgHNahoQuW5bdJWQgJr5NZxGHbEwVCJUgfumv827HMaAZZiEhbg4XUyeJqZAR",
  "key40": "4v3cPFo8qY7GQvoMupHVaQAd2abijiYmmrhHH3EDadVnKBWSxTmEi1uY5a19W28pFRux3uNctoK9TPpGdka2dFFG",
  "key41": "5eTXD2GysrQKsWo2KuvhnD3BGWJ41MKtBDMj56AehdUieuiDwVgEf77MB6AQgegr1M8zr2f4Azx3sRCrKiku2NKf",
  "key42": "4Wwu3uayfqVAkwZD3NmiLyhn28KbnUpsYKSraTAK2ZSp1g2uzeZpBRDmKoX484b5izys9nhKcR1YLGRkH3my2ZAL",
  "key43": "5w1JURRS83gzPyQJnZ2cdKMi7ocPYXDg9bmaUXFkpud71DjceW7SpEPDLVc6ykSvP8e1FWqJq4VK5BJhkvGk7nQF",
  "key44": "4v3XurNimGwayk6NZgk9ryD7bWMi7SvwN91q4XvWNkBhWfr1vu6ytXp4bUNuf6rvMGLsxwVrmWZfdeu8YPNm6pZb",
  "key45": "3ETEkshRHRCStLZuxugUCiNsTbZYRdAAyBaS11EMsxNd1UzyKnh7T5TH9tDN8hSVpADoW6nwEuqPmHwWnDje2FAX",
  "key46": "3botKS93FtuZhjodm4qRKEpRHem12taP9KLNigQ3peyxofUrMxh9wkeC7PeQ2hJyXmEYPrUcQo8UAytMfTGBZuW",
  "key47": "2mRTW3vVRWyWpusffpJuAcPhPJncCQTXytt2pgYmQfVaLuMyXBqtD6ZFHhBxsMZoepmhMxBdEkgYiYaGRYTHnquV",
  "key48": "5AQeCYkd1cpYhwVQCmNExKqL2bUDcrgtKE4MG8F6gVGvruf36uzcDC2GG5WWfVBXTjezb3mpbMWqerU4nNynwUPM",
  "key49": "2EKtxnKQnaT6q3EepV6aN84izSmCa35vF5Hw498Ay41CTrn8x3qNLHyfhGGUcm9SGtaUVsgRpcMvJHH6TLouF5pP"
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
