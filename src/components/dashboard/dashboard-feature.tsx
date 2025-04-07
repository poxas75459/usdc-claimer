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
    "53LZCRFfHsVXuVz6Tot16rjCBGcoAEipyA4P4azUGqDLJZcqHMi5PjyVQYUdowbjd8Zbfr1bWdD4sJaDL8joyvdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6TjGgT8eLpMhffXkQ1oc56pVEMPHBGDPeW7adxT9SS9e8oUcttHZBv42nZ5vAcJDAWACdMWMpe4T9kPbVreRsQ",
  "key1": "2W4tVhZSPNNji8TLBFGVFqiSsHAxQ5UjuqFTFsU4qQ8Km1LyygHMfK4NUcpUyPrnjMhJRzXHTyJQwEpA2QLus87b",
  "key2": "47wSdEiCCbTaE9y1VHcNsDnd5Q9tQCebm7zadSFtB7DFAtsEvrPCEoerwP3qktAfdWMjFJxkJVqn8vCHyZazxMEJ",
  "key3": "5cCkJsRL9xikA2oRuxFNs8vnq3Qz1ud8QreBN8nxmmS6vFUZq9WNAwY2yts6RPTNZEsy3XrcGiVJtqS48p1xMJvc",
  "key4": "5Z45B1wJ8EARtXaNUf32mtu9QCmCijdWFcTgAFyPhJWuPCHkEWhxpDgYaBpfmDn1sixtkhox65LgdJxoJLYs7PFF",
  "key5": "5y3BdJ7xZzrabf9enuPdD8gEF7J6MKcSGANEp94VggcffxjHjMbB3tHHtJuSR3BUEqWHvCSQbD5zdkgbbQNaZkUR",
  "key6": "4MQPge6zEAAAga87FG3rPjv4RsVZacK1Ko7TyR6iWVKPhMrFwqpwDgfEddFiSvHDdtGtr6K5L6WePDWG44bk6VCe",
  "key7": "3xWuXKCbQyoeEW6y7u2foF2zSYZds7ZcRkXRbwzwezUrJfComomqyJNK3RS2zNPbKitFGyHFsA8xE8wZJasYddeU",
  "key8": "5z64cRx4T2eqgTcxt86BS5bD6zMmhMdKuhXmo8ueK6DN4pFZDRdPaP63SKamcawo8P8NPf5VBYjHzhij8Ay1d9Cw",
  "key9": "RJMaZKRscCRWx3ezUXaBmDeaRQtdWJSvYRG9C8FN1ngW6XX88zxdVQCimN59kKFcZtFEZLsM8NsaakUUCTd1JmZ",
  "key10": "33ugq9hU6dAvwb9fghavjzQroP2MUt1uU7veFbs7jdXQQ57zCC4G8s6LNNmE5STgjvUTK96Gt8SDdA8ETw9ryxJ9",
  "key11": "2fK8eUFoJJ1x8Ukri2k4WJJYQCQRhfNQxj7XwHzAk5c92jWCpkPbADxPia5e8EYuD4L4qdk5hNWEu8s5rgLLtytM",
  "key12": "Kse3dvA123NKuyQ2rvE2F7edmZrX7Ftr4RkpmjuSEsCXdDRQwtUmL3PfwyptACxdpkD25CnUorgHJUxdKR9mUrb",
  "key13": "3wm2UidrAcs6QaxgiWmrr7gspMF7ji1sP7749uEtyXbfHMw2VQTx3Twzic7EqWXSgMsumHtnDY5i9gPTQDQmwqJf",
  "key14": "4B4aH6UPNyhqbGzNmhXokZH1SdZZp5aDimZTAVSqFWjN83sWcieDyjp8AYuMBv94Xrj8xxVu83aieUWXw3hKDKqd",
  "key15": "3t2zDGNrY5R34KCX7vsiuCK5X9UKHecx5jmPC2coVVaVWsR4Yzq9RV63rbmQGUYuNw3SvtXGCPiDd2j4UGkPhQNe",
  "key16": "5hrY6yuhkRMk13MJKy8fSKbLWtRHLmY24GrJf3D9nKHpEeAgkSJ8DEAkBxSeBmjBhkw2evYBRvDqP95Vqi7sbfzw",
  "key17": "2KzdkmabCpdcBNo7obadwYqQXozRXiZw1GXGBv4qSVqcYyuy3kFUzEmXdNiGccacJ8DowGahmt7BzNymFzmviwE1",
  "key18": "2xisyLfU17dvAn5wFYHTKdNQq2nVcMnH19e2NYhL7RT1D2fFSt9J8J9CrSJpBt391iZ8MRWrLidhULifKZw7H1kL",
  "key19": "4gUjPs5dn3YByNhMtreF7yjpbV8FbADHhMdLiiuUxbbcQ41QmrV28zSg49Cq1iizWXb5rRQH66D4ayrdZAeaehms",
  "key20": "3JVTYgJrPo7asCQSC4iE386nvBmLTA3deBdghLhWVTn7aC8KzEidbi1ueyFWx9or2DcrGzvRictR4hgD1Bh7g1W9",
  "key21": "2FF378f3GsaKcVh8ijn6T1C9TSptxQpY8dBEMKNqidpCVPxngMQ2vM277YYrq8gtzvdgyEsD3BhWsgusSxUuQaX2",
  "key22": "3RpyBBgs3ZRuQxisjoyuem1fUuqB9mXsujJmJU6DAK2LwCh92PF5YZaezt2Zaf3HT9vDUfudxwkNx2w9ASbiU6wJ",
  "key23": "3ur45TiUMC3kbLSHK8Jb4VfKVpR5iBrgX5jCpaHGSTgiPCL9fsWrumQbZUzBrY2GcUVcGuh6UGMfWpQTDUjbiTiQ",
  "key24": "BYfb2tdkv2S3jDFXVibnL2mSsPPr2HVJfQGfatcwNBDFyvDwtvc2MDHmPcJbynRUfGamPfE89LTsg3bRqdjZK44",
  "key25": "4muoFGDBoBWUzkg5VdfKowmtSxVeGvBiiL8fmEpVxD8Ed8rG7dBajBUQwfA7ExUh2J4TYdQF1ZDYNVVVoSk3v9Y7",
  "key26": "2KyM8thFoT8biPY96MN4eTkBK9QJZqwvtrSF4tPsY72KoSBuhK7axdCNgcPdqarDBE3CJwX2kVjprQpXxaKbfUHK",
  "key27": "62j7wYfJKU5VigVDVfBUtxzmgEZukhwMHxVKa84xGG7tUv7e9eJMAJbyRdmXXBebPfQ1QMWp9LrTLJcFqeMvdRCj",
  "key28": "2aRXQdawfVGpn9iBiEuvWz53kSnTikivKuigVX83twiMYkkvvjNAacGC2gGkyorMBe4ZWrfqXPuP7T1MEnZVEdzX",
  "key29": "2LHGePF7EKmi5RSQCTZEq7fdJaCmynmWgLbncEvzhgiFtq3TcqYmoLJtcQPPLgbX9nZYzHUNayR4SfPgUfCwJz9y",
  "key30": "36fPQxGgu7mZzWKMDyJanKcZikYJAvf2WkK1fYdGozvx4JY9WVb4dSKH1LkghXTU8cWsdkNpxjoC7gbCds4wXTX8",
  "key31": "4jVtC1cTq9YQTeveWjoPqrKoWRPMV9b4ju6rrGvcWqxHgCgo7dhtqk1phXVezSn8TmQob35wjkS2Cbk471jYX3p1",
  "key32": "277Ler1EkULCs6rn1SbpLxPE4iF65btqX6oM3n3dy6j5KX2gtxfufT2kCPtV8YuBah3iht9HJ2csdb4XSanWdorj"
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
