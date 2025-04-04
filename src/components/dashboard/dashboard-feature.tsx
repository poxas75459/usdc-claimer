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
    "vnWgVShPUjssqdjCcfaP39rj7D2cB5yh44hGuokGgCeAUnSMDdgJWDwMc1WX3B72CRKDySTzJsU5SEyz5Q6NTbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uD9sDDMMNgsDhPmKSbTrHPLH82QJNLNaTKc6qNdtqPfhswSJwBRRPDZLVT8VBgaR1yaGZjAF61VpccK9B9CYKiN",
  "key1": "4pKk3tBxrfV1hMtPZ2e7UA2chpeu3JoLmECR5dUwEUXuFrX27SBwdASaohJMYedEUxAfimqSJ1yJmmhgo258Km68",
  "key2": "218pXAR2fWqR3oGyG9ZTakANZc62nbnZwvESbHVMkeyvQxisQ3YSo4cU3xCLvxxisnnnDf5eRQ7BTRv9UqthwBt6",
  "key3": "3LDFWf3oQXCkgUZBz1WZicXrpVUzV9ns1Fofg6qAExrcm4naXVhhcTQBgfWQmAJdiouQpUJVjSMnr1QBZ9wkC3sF",
  "key4": "2JHGPWZtpXsV1g2JdqxcXPnMJQvSfLCAB7up9S8BhFbsR5E3zCbADiuz9uj1keLLarEi1zHbid1LjZiRCHGiNtaX",
  "key5": "3PGo3JfDFEtt97Wcq6ayHhyjXRGZXpa2g7F98ByS8FakzLiQYLiQxGnByfvjEp93uwBa3vgNxhLgS1yoaTmMPZe5",
  "key6": "65kqEEua2xosgdNeg5K76qPZzXAdP8dyHssHhhn16mBEbsyE5Ty21iyUWqBWs8z8rTcioorPeg7X8ioiRt6RHUc3",
  "key7": "jWZHiJrUcJRmmi9hgdoXyNtXjonGRji2XqM8g3MWGG7o4dG82sPG8oMnkLx1MnAAEuPUM7DmYYLGPrYtjqZQnML",
  "key8": "nS3JyvmRcscQRz5VDSZNxxNaae3TmNg1n7sa7rJqhsK943mZv5x8BcZFzAurdU85J7N9ruueGDGz5gARDA1cKHt",
  "key9": "2Getmx95WAHiG19bxYamyWnmDhWPgqFyfErMx4zyK68zKN9zShrZS2wxXJKpszG6piFPixama53ycuunSsvtXVcP",
  "key10": "4s1HwU5jKCNwLTyXA5ZMRcnRGNYaqS6kweNEuRzNKpo5DUwBu65kjPHPCkCJoXhFgUDxTtGYSsVEgSnbh33vomW6",
  "key11": "3nssnStNNxQvMjVVYcK8AkCHuvDZpQ15P8P8o5R3YxTLuDe4iEoErEiaCtXu893GMFPmjCD991L8pye7KnkYqKaV",
  "key12": "3KFsdHQ1GquJoo7WVnmZyPvFBjL5C2xGMGFMQvvoBNVsyNL6BfxM4rzi7RS1ZDZ6ijKeU6ntQZp2ZuJ9g4fQY9YK",
  "key13": "3xTUSmSJGUQZwtazBujgh3b1fZgXGqDK7S9ujthFTkKhA592dp1ztQvc3xVZx4Pj2qmmtLnYofMdM1gkHcjjveNt",
  "key14": "5d1ikUGc3Dd9FcCK83skFL5npzHQ9BJBjfM3o55fi3ud6kuHZ55EZPRY4z5KzsNvamxf9Qa1taBWfaL8TdZQKQfD",
  "key15": "JQf276u1rebNsZyYcv9kfekA7URwedhmnNWQioM375oH75q5EEbP9HzhZqFVmsPAeDotZ3CcZ85SgQosKQftF3w",
  "key16": "BHwYM82JN5B95bvezvaRjmUxUUreirPjaeH8vSpasaRnDRR5Ns9A7NzErRBR5m4T9vD42uzEvfPLUWY9HC456Ba",
  "key17": "3rNVMsrScoGB9npxYUe451HLhBtZTpR6gWFZDi59VCGMYrLi7BgUFZZrSpKSeBgtfQ8EPZj6TK524aasDjBBvBpT",
  "key18": "cMyy6ddGqyoroY2ABBGzPVYnWdmVhk7bLZtcYurbr64CHmvuzLUHHRJedqkV9xFRWcfsQTPto3BesZoNBNHXMbd",
  "key19": "36Wz74tBU8Qr1ApWp27aNMUFHm5MZ53xS8AzoejXhtoaqSJyfyh1e8JnCuyRMfHaqZ7Ce1L7zeFPQmg1PDTcJPEA",
  "key20": "3wcDUSGb3ucG9ppD5xNUJuTHTQu8kjZsk87eCGuyPr1TF43pUzFijyYrGowBGgbn9LB93TQ5RCBgb2d4ABMRZoJM",
  "key21": "4KmDzHgNoRJFu9Fu1yXFanWm5vksfSgNuXHTCNAvrkbo22K6BdYMtQSVgLJz51PhPC7EbAxS3VcafNbDqPiugoiy",
  "key22": "326P3R4fhNaXcRfj9KUPvQjKSw96E2qEwSQXUnFaTzt3qruCexgPKvfhaW1h5n6VpgWwZPZW2eaEysdTuCjsPkwA",
  "key23": "W7qD3M47sW5r9hf7rAYj32PpwGk6qPsUybFCqVae8z9aDNNMXL9KC9W1WMxs8gpH357K4MXS7eRjVYqscKGmMkn",
  "key24": "4F4GWh68S5dTY8Xk7u2qSnU8z3sYn679nX72aysodu4S43K8xaKqgasBPDnpMcx4oR1FPLoEFrTiAsYJk3VyJdeZ",
  "key25": "3J7GPdoNRGRByswdg9xSXY2GQDvAeHwMt1fmfb2whGJjr7jQaGrvnxqptYZgQQyMJYpxLV1CRYJMjPph3F9xQyUY",
  "key26": "2pE6F4nJZgp4588cVSMsq7j3e3Zb9dYxZX83uSVL2wMrEVNbMzM5X8ResCaNHud1NmugZ2S7daLscNeqCzxck6PG",
  "key27": "2iqiLV7TGqQ6NnpgcioCttpAS6jx5LZVVcVqrprHJQHGH4rmA1TkmEDwSK5W4SpP4s5i6hUkYL6M8G31rGeJSi9F",
  "key28": "3Ee2xaE95QSyoTf5WAvLMjrKLCEcpUqpwa8saoSpoQuMHU8m2CpbSXvCUKcWrUY6m7KFrpPfBR2VsRRNnZ1qzYy",
  "key29": "34UDczaF48Sksj8j2CYWqfw44jihY8jzPGBg9xhVho77Rovp9UMjhmK12oZQwZM45on8Wa1rhpypozVAvVtwQ2RG",
  "key30": "jWSERpmxPYPH6tAtRTR5DKsqwdLiQXNzybSPNFHs5UtRzVivJWTTJ4Hm7LvzVFLiKVnwKPuJc41mzFHH5ZgRCD7",
  "key31": "2LQXNBCEK2Ydh3C4xKQXMRsnxH7j1aMRvozFXLpYVAo1XfD2TZEPNUPJSfHC7CFLqrJSQQD4xZ6dvoUCzLDPKCZ8",
  "key32": "3Aajyps7kVwfs9zXCSMSSySySku9h5pZXHGcNweq49snR1MCrNGTpfqwvDPwQkFUC1Gh3VSCSCKYEjagJvXa4YcV",
  "key33": "4GpfTMM97tkXpPB3yBU7MgYvgTVh9vVMSjun9crQEqD4JfHnfCP6ESMAoEr6mqEWYNV55qFcZ6gkUXfCVwCg2LbM",
  "key34": "44TizcRunz88gCp7wReudWB9YUBsyHwZGPidYyMAQuJPm2yPrPfXyZFEP5wpWB15PBrdkFan52NhzfyDZjq8UGzu",
  "key35": "5QF5H7DyqEAvWX3dpmwiBBfyFJZFPhbPNaXGvKoTjwd1ypgutJwj3vRL2C2ynASCWYnagVvbEatYbuTL8iYPtLuj",
  "key36": "5mE8yLZXvamp7ybfiSZAFHJjA5Aaf8sQvTyyuNeMtZJeeyhHn6WMG7nBP56cMv4dxsGn3GLZnnxAb2YGMKjoamvF",
  "key37": "7QTn3RY8TsEYD1yEVKNHLqbeEJNgii6i9JBZydiCdUHTo59H9MAq4rQSM2J4QVCNMFfomqvDq4L78cLiCTFgNAF",
  "key38": "4RoTJbRgrsn1TBraFpdHh3JCpoBxgh9idNwHSZvXpFFz82U1jobe4ieYPwesShaFsBmk4DT7ZhPSY48LH7Lr9S1x",
  "key39": "2KJ9CvGN1KpNMEhpnmj7s9o78ZnmhGBPExr5cWyq5DA1JzZkQmQkdTKLjCdfaf8k8hUYL8ufeEeL2VJFmkCygTFK",
  "key40": "4tPGtMhKni5ZvboJubAiR58EagbMhniLof6bPkkyu8a21AKc93BDHdtn3MdUHyahWcxhwBiHJZmycnn62oHQz7bv",
  "key41": "3cEUXsFn9Xo555pE8mHexn8PTz4uF3BgaUmC6ZuXSVYQoZFmBeTAmBzGVHuQ8XWXNvCEnkJmwtTwEVPKhQMKUZ5D",
  "key42": "5vEwz6R7WsipV1VCoxD8uVZviMZCdvsNQ4eysdxuubp2gXkLbGBG1gN9w4eJzsSon4ReSVDYFv3LFmjN8AQvKf8Q",
  "key43": "5Ree8uyTrnDWwLqDJtfHn3bkFVYGqkh8a62HVASfmS3jyQpif7x988onFAkJq7qhmMeqTrhfxnbeU8ZaPNXwf93g"
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
