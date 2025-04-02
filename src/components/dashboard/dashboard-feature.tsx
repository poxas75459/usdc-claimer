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
    "46dccJbDvt8GxTt4A5Fo8wWma2nVxDvHVJ3342CiZJiVXVbYAc51Nx6uYq8MHfyN2o89WdZzyagL6FnmK4BYcP5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RshEKXBzddJ5QUYpBkA37MRipt4SFiJUpcL4JYbQsEUUYL19qnAXaf2TMFHRP1GoV16VsTTtSWSSFi3PA9tVmMm",
  "key1": "5Ge2KXADjWBo68dyHPK4hDPXYPzrHf4fU8BrcNuHzQwbNZryEuajCfHkHvkqB3xuTfDKwmZkrqSokas3xMUvSUio",
  "key2": "3paBucMeh1hhhBZmbHuYsFFCSWqZPZrHiL8KdDCYXFDzhTBq7ZgzGbKK8jRq6s5RRfE6UWy5QhTNhcuzCqj8s8sZ",
  "key3": "435SbhNUH1KRbqNvkwYUko1XsSVjFWFYLA3Ltdi3VW61M7J5SAZwnWYyXtpUHECWQQhcyG91U922PFXKbAqW31V9",
  "key4": "2qhmkL9M8P1qozXDKgoMa7HDEjUXhoVaMM7Be842CMkfaFMCgpkfRcvcWgPE8gxzqiKquAXXXphxjJfJanoPWYnc",
  "key5": "2yFj5P9wKgtWTQ2WQpfSKzgxWTrwKeUiPnrEDTQrirMqLVkwewUNUqThYv4RhD1S7Lb4mnH8pj1WyBASPfzGxcb4",
  "key6": "2MQUkyA6KkhaSPvQ7nmBqmox1hVgRS1F9Lh8B8NgcRKfyMgNX3EjXdQ9LQP9RdevjBs6nGpgWesmU4AFhrxsHMk3",
  "key7": "HbeDztJ2yiC4kMRvVwFL7R8A961mpd2DDE4uAxy6gWyNgJXsteStXyeyvaRSpKEYiFsvVroUDUHoQmGj1fnUWms",
  "key8": "3cVNvLU86SXyyccNQvkKzApiP5gx934MmLp5jSCHBXsi7SqiwMBuw1p3f51oF75ARjRB5HAHaoGMVbZK34RGFxjF",
  "key9": "JL3G7oxMujNn1Ak6hSHGjb4FQTMjLDWepxESuPs8CDELV7UrqHrnFSzdDiNMgyi2KtWTCUXp1qt3NLEUbHKQAnW",
  "key10": "36eAdLXHNNHhERR38qPgdDMiasfHe51M9z5nfSV6VNn9GM2HWnMAA2Ubi6uBPLnFrvBNAWhpWmQfQ8nHePxTzEnY",
  "key11": "2mTBRtYXCgfYHVnCGRZZtwofN4JDMepC4aUfEgtR2S9t1GKMWCc9q2tm7Ccr3Vzkr9CKgmAGbPCg6vdfFBMwsQgY",
  "key12": "4oDsMhXSVwN7CLhDnayy1RP9cMpymQGxDcbWXpdQmsNbh3C3mqNsAkSrkGkmzA6v7uo5Cnob7EtDYfMCctGTmeqD",
  "key13": "WCpW9Lu6aQ2gKgH8AKn9TByo7N9PYERjpMhz8JfLpByNry7t6cmCULTgvbHJhHgu3qRJDK5ptg1AfDbvLaGh5ws",
  "key14": "51WB67DBJrBu152unxLUhyRSoAbGT98pz1D4v1WVbyT3TqSXs6zuRHHGaWLehLtvEx3AYECzmfmLTE69UfpxgGjw",
  "key15": "3afS22EM5wHARUh7ud4FQg1esga8xcfdRR5rXaGwfPmFPT7VrzZd5oh3g9Epx6PEKvnoVX7oz26n7U5RHHEZAsHp",
  "key16": "X2ZfUMvCo8RgCziduPh7urQWn5d2T7EhjJ1rxvhLxSL5ym5navhLQBHLc4R6sUE1ebvoRdo26XrkfJpF4K2Dafh",
  "key17": "2n5wSsU2n55coVZWct5azzQgfXbrqDtvtFNfboWNC4TrujwbnTo7Yn26Q194KuLgGVvQKtEdiPiTRSKm9FzBKfFJ",
  "key18": "52YVSC7YefN8MjXjZfPKFkdoqpc5W5PBBXhyHY4V5QQirN9y2mu9eurBcNqHWHeBa1rApCyhwrEpCs9czv8gCLur",
  "key19": "5Y1Uej5UujeoTsJXdeaso3n4YmKnpsKLLoAy231JZmoJ9BY9yfa6iiRJr7cq1Xr1GVPMw5EwzLTJUNcMG55TNg5b",
  "key20": "36ebteQgsT2yHeoMR2xMyBMgrb2nEo3q1BhPDSrQ1mHQep4QNcLX5jCAVUDRhodt3o1sw8crb7PRQGQEjfodtYse",
  "key21": "5XAbUvf1jjy8X79tyW2bHrmpREDWMWK2XiDzC6SZ8a9gssS7Cp3bdzpN8u1b7TjwU2c3xyMc2V5U16rbowLaoALX",
  "key22": "5YFBPQsABzHu8Pvnwq3hBbqVvxumcfz74ovhUhSGT3Mapdcsj7CmAYbvFQGek5SvNCy9oWaNBii8x7hoXr375RrK",
  "key23": "31uQRPJz8DvWA7822m31kzAcJP71TUH5e4CVrNyY3m82U4uMcBuUm5vB6jqidLCzaPnauuA3P9gAWioesrb2LkxK",
  "key24": "5sh8izUrQd1pNFeUdsW7YLsD1RsmJY1JrJeDGec9V7jChBFNrrvFvR6bLganwhtUSURHaUQ418DYg4qf5DfU5k3M",
  "key25": "3UHVjXQX4xDJ452PZD2mztEdbWKwiAEUJV6iLmRfKJVJ6yAdWAAtTezgjv84RxfD1V7boBQUKqULRdqibkhhBtNU",
  "key26": "3MM9JAWLG4qgRWF9C3T86WbtBnYba8CJB1Uo674dN6oxmi66kZY7RXoR167FY8cu7fxdPucTTK4cg6u8nSrc4J8V",
  "key27": "67KuMqTjkC3SFmEoxxPsEpXEcubH8WDTnUhRs3apR9q4JwFvDDXZzQRr31HQka9zmHBMVvN9i3BQGDnzEsJnZm3t",
  "key28": "XLgsY2QDtBWjF5bPUsqEox93oUwsZnShH4p8LVxpexbdGD11WWttJT1cMURutMy5WQAXnj7nCDC9kcSE6pMraoW",
  "key29": "4da6kpnuQCVVdJqQTJXqi2bpLEcHWKukBKFWiZ3utkfar9oFWo5ELxHJfqDvMTKmHRCwzHFzkst63Mgrv5RiA3rY",
  "key30": "2BugCMChXw67rf72pqSX8atW7VEu1MmaV8vRqkKM7kdL2vK9kERbBDj428DLYL38RMPaSkW3CPVzTM4v8N4ZDHPh",
  "key31": "2F1gh1Mmp1aEnjBbw75JyMPDX99jkPCvxiBu1mr79UoDPyJaRky4xtkvwBcA8Zz4vrPvrqMXPm8hNLVcsjEQXG41",
  "key32": "5nedtFT1tiM9DJzLRhsuTjxivuUbiaVHeCy7ZS8DrZMVRnPtSZHtNgABP4YHnBhHncLbzrf14Ry2xv5U2B3cvYmm",
  "key33": "2stuy77Txnaxi8f8GY4cyvrDzHydmw6QuBWDoKY77eSRot3gJtSEVwJYgSnyhy2UdbaDJBctKfBvfAAitfeZMHv1",
  "key34": "4vUd9ip8sUsEksTdfsUiHGmQ1Zzp2abZNs4P37koorkqZiNp5LcUgZJ2abZo1rrfnG4uWBppSuN3Lx1UCesoMAyb",
  "key35": "5ejyfzJ71QpFw8tGLUSCWsUVdEY5xXqgepNcrDQ5tfZw7ZCLSRuR2DjwjB65eebAw5KYJyCSwnVT3rJ4wReXsiZV",
  "key36": "YawWhUVpCAnqWBys85PMuaC96qdPh8Mue35Lz4f3stTM4FdPBoFVNdkdVmH4c6R3yhtB5JwXrF98GddqTcad4Yz",
  "key37": "2sQcKYFYCPXLUEZiTnq62Kb2ajDufWhB6nNYFdWeVc8FSJuhFC6NkYcCEi64vYfpyaCcQtUv4nUrDjkatzbVfJci",
  "key38": "37S9i1V6Rn8TmVQB9x84T2rrf6h3GHdSso1VEjxE6y9DKA3Ui5v46dRXmBV91jbciY9ZQAkMKhVE9EQWFxG9rGnX",
  "key39": "3rjCK6XSzHX8kGBhXmB6ZBHQpPQTZj5pXmoaqBEtCwLWCT6pTpaoJAvJdNx52svtvnwSSRkc16wW3tquGYsrBDS3",
  "key40": "48MGxhbDFv4Y6WCqa7nq3Wf7GZZhC1dzeXz46FxE8P7H6bSdp8FrqbcT2AY6HnMrtqRYL3Av2Mhqttcio6mthfcK",
  "key41": "4UDPPKTQ6EdYCCe5PXJCV4cvoGe8HiZa91Mc33DT9XhiNkZU7jvbA4S36YcZb3bZeu8o1pKYFmbjp1AvTSXSiQFS",
  "key42": "4YWWkhURHq3qRh1LsXCBNNzvgXt7LVpzA9L7dEiRLdn4gsLp15RhySr8HwujCTSq1brLxrg9uimnVM4AsG77e5dA",
  "key43": "3TuyV8f7TL6TCqKSqG96e8xwoRv51PnWQMxCMfQeZcwt8dfwEpU8HnHyDfoaShXBuHcxTp7mwTwD1UxKbsH2cdrU",
  "key44": "2XELxvTXHxNLsqQpU573qnYDSXdCNFyxnJ61vQY4k2XpRTTQaooVwYUK3YZ9gUxapU3RhYnbUbNE33hd5FK8r9mz",
  "key45": "4Vw9YPKj5MY7mX2o9nxn4m3UN45o6MJ8isXo3pX73DuLMiPwSYughirQeHmVFaBruhHoPzth8pcpHfJ93tjzW4qT",
  "key46": "2KBbzHjxe4JnMeZpFWyGZN5yfU2UTY2xy89gS3oXw4aZahqRBpWxxYf6GB9rcf9ZohAGTDwY2XtrZoB2hSoLFThe",
  "key47": "5xGB6deVQHBuReAVTA2HFvXXuEYHDt2fTXAxWBKdeMKY8KByPwmUEhZf8QvRjy3XCiizrthwJCvv9QSJEk2tKS4g",
  "key48": "67VWQ1UVZirMuq8LHUM4eTRmPz2bups9q3Sayz13htY1kv9MV4FT4mUxPd2yEAsZhJ8bzCv6PyrjDWU7grZTiu8j"
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
