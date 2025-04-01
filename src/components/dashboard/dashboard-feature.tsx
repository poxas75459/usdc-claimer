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
    "5LzxuWyatQggpKSWrxfEdZSs2DTyikAL68Qg77jbb1CmdGDLdfKpM2kNDUy5AvncDik9GmgnuFz1kkmpPXYgrHj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCufYqc8Mj88zTiYmukEbqWmZAJ6oppvh839LpLSsx2EyBe5pne4fS5KyMTH9uuQopvyX9PuktatnqvvaiZBaWu",
  "key1": "51bnJFL31SeETBGsXkyGLMMphVDE2Ac9KNi1GCMFxY9Xa8sGdxMbUKYzFxS4dDUFSno4dKLQGHxbYXWdPV5Ar7oD",
  "key2": "5dhmu66YmrJrG5gmvqDxb7Xi9iKnwq43YsLazq1hYDRXpYhuPKkoBVdcfo3c5w8ahnpQZBdG2jZRdzedXMNb8T6c",
  "key3": "9NMimuuq5B9tLGrynVNwDgZbdqH7JQDjtQgp8NeHZZaWK9Ckfd8vxuR4CisMZStsDvMsTmPNf7yguZpKdL1Qt86",
  "key4": "5dK1j7L2EyNvdS4S5xN4EL5L5QjnN3q1UAX8vFzfmk1nH3k16AkgKThDZz58W1YTtPyRmdbYA1gNaf2yBxTgTrQ8",
  "key5": "6167oNhvFfUj3WLLwpiUgnaiiyZFqd823CyKRrMTd3ASsTzKQRqyxgXJXQnZ8GHTV8kmp3AWBe6s7SM2JR9sYKbZ",
  "key6": "2GW9EYVQ7HMc7QX8nix6DYc7j7PF1dawPYWzsUAHmqN9NfSDBS95KBeh1mRr2WbzBtiHzAR2H2k7juwkqDv7z3Xp",
  "key7": "5QtN2kQuNAr8kBnwNSHC6BZGGr8bs1Fnhosk78cWovgtMWR1AqUmKDhRbX1qaAPgLcnVP1mS8U8kaYTptUyZbxYJ",
  "key8": "5UeYM789Dk3JL1i4USEEXs2FiL9426L8nH36SKyHbHe2XXoVayBHsV4g4FVGMzdV7BURPt3RWd1GaNBBAKDF1tBE",
  "key9": "3cG1BPyUh8fkGbgoPz2x2MbN6LF8LJT8hbqDyQouNzUtHjc3XFz2fmXEXVJudf9wMqnVUbjc5aZNZvee9VjkeuPB",
  "key10": "2vhEQjAkgZqtN9rPfyJmptu4Hi2KquShigffExVm3EXUn1hxSB2wPrWVR7vZ5g4TANeEpfUwm6r8GViAJ6ZhKDbo",
  "key11": "4qTNMEnVE9QcSMxcH2Ltn5nbVRP7Sv8SG77G6a9W7nTqRjeTZwvRss2KzGYewndqXgkbSb83fPsZpBJrmFS7z8pg",
  "key12": "bGRGRNCLatg8mN419d2VHcSxerZYBXrHcp9fqtK7hMK7sCTPgTnsw19AhZTM3VPz6cRaziiv5HcTo1hUvtuMu2y",
  "key13": "4mj9nuVSkd1GTW6A7KtPxh8egxuHhEut1uquCfH7FBrmDL9LWjsP3DSm5pVqHMV9QhQsMsr4Mt4k6Zp3d3q9iNZP",
  "key14": "3sHR1tH1J2HNBhchBQJqgZF5iLBf2w42FFwKugrN941EGmeTsUA7nzs5TQomZfKfFa4DcZE421svNi4bKDsxfbuX",
  "key15": "3oHHsY6R6xNGGULJBCwUkx6MHGzQsd8fyvghsuhqtFxvi9UKYMo8RMssQVfvtJ8QYUp4pEWpMufbJ6S3DhBVXdzR",
  "key16": "76PtvxAmRxgjfG8sYiFYicF7ha862ahMTu1mK8Qm5utEPcF3Mueaq6CvEyJwMbrZu5axEmu5pgQEj1iRsFQT4Jp",
  "key17": "5t9qAaEf4HUnYbGHVcijBvtxv2nz6zJF6KNgRsGCNbrPFLzzHZe89VTK1LmWbyTq9u7qxvkFEP4g5nzxBV6DqxKQ",
  "key18": "3B5kW6S9hP2Upv5yW1p2EWYxUdd2MELgFHyS5ekJntzMiwGY1QPLwgcA4xuDUcFrRSgZTc9tRBbAe4mmkU9WEP7j",
  "key19": "4RsrGcjZJGUKDYnJq1jWJmLh2bD36AYwNushuhvi6J4Rn4GhLiWR32DeWL55FRcKHiY1QNcaHnvNQ2EEco81idwQ",
  "key20": "4wVLAgWo1qPesHsMoNfJrHhcFrCetkURfqNV62FNw2w9FbAjcE35twdSnPdFkNEEz1qadKToo9tr1nyNr3NyESDi",
  "key21": "pPsrwbNsxkxP85Y4WCLVU5WiSPDi7g69chGvSJbmJxvmpbr7rBUkMyYSumEQs91N3V9whVn3FELWLs9Yzt3SEvW",
  "key22": "2xELMHEM6BwZNMVoU2h6ZknrhDqBr8aJLNbbif8Y9HdHcZ1tmDYuxmwKrAv2EUHqKNaJ6tsUbH7RoBUhD151nmTB",
  "key23": "RGVpidrPoYwTf6wHKHy5KqtZYECuVQd9PZdcexFRkSDBPDGgdUmxcgX5X9t3S1F8egtGKFmD7v879CBrxraNqRd",
  "key24": "2ULPEykvygRMV8NUb7pnWeVLgMTYJXgYTroBuCCTxtbcBVzJbuJReS7bEFgfYRBgbPfMs6GRJqJ8kzwABow9UFc2",
  "key25": "T5fRMLqdcUE3aCWAjLwgCQaR9ZjbkwAk6axzLs56driVsP7D39mFGxUZYphx3yWXHarkbsDzbvTgCPynJ5ASGCP",
  "key26": "5LxBcQ7YN9W2EbskmUrdCaDih4oaqYQs7Bxw9vFo915NywWkZ5u78eEh5ku3RMYFnvFoPAdz5vMfDPp8geHRtYH",
  "key27": "4xNeLb9ehGHfBeyAJJZhvBHFkv5TBRu2BqLWucvsniYWdyktX987JVwqhcK84roSv2Sp5SaHecgF8yeCzxxukQdr",
  "key28": "4j4pmo6MuSPrvRTAv5h9mZj2S7aDw36HN5TLQxxQiWNWXVmNPonRciPqFAXfAXxXzAFYY5PjutWDew3k66RRtfcf",
  "key29": "3acce8EuxCfmiaKQKDxbRFAtAquWb8tjdKEat2zQAqXFsNXc3arHdE2ezds7jcLZSC3jwmfg7Y9LkFaWNvU9m4tZ",
  "key30": "4r7QvPKVaiaVAihqoD3QoTGoVpQGyEDqTgGZZpmRWtV1DoJaVSQDe39Ao73wxhn3CArCp7ndbUZBWb9ufmmuFSVZ"
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
