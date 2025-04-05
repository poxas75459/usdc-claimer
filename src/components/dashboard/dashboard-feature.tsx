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
    "JjZgE72uejdgBKRHL3iUyw5hMyQirAnFrwQ3xKf7FDph62im3YR2xvRoQWZaqYydPh8KwF6EsLsU8qBgS4SqG5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GU3fNZh4d9owVLT914jzWniaauhcuFHJidxxwig8PR8cqWy1emALGLCW1fWs13qTTBPoJo4WTfmuYTWuqbUEFB6",
  "key1": "32MNont5Z12NjwMgXTUpZWgSsivd8nBrHhMSatCLbdoRwEkrbadzicaRRKavHDewsEPdjFQ8muvZVjywLYpp6oum",
  "key2": "ySReh1njWzadBbEUd521kS5Fjcwi5eRHbWMxsv7FmJS93UATKmFTpLk8DirM3xPVdpJhhGdyFC2cq2bHQyoNF6L",
  "key3": "5sj7oAyeHcg6XduC7RwszhBoYkMWbMc9ThaTGPVmADRoW6pNa3aDNQSqjrv26owPSkFE3qn7qthydLcRgpqCPFek",
  "key4": "4Akqxf1xTpJzwrbYCq2pQF6e4NgxZK6phuuAqcQQWzT914HitXRCBMJ41YNdTWRj5tRwieWPdmto9uSADpRgS8Rc",
  "key5": "4sJyXZ6mcTy1WiDBEBridkBdb8D11E3d5rRNrYEQmudS1HB3fshw5rAuSi6rRmJ8rpr45VSzP9WNFEYpLYXfawig",
  "key6": "2UZ7kQQbPhpeUokMvup3PExCX19QKJLuUzQnX3Y6yaNXN5y6K2ssq9H4JAPjbaFa59cQCVgnXKdvQzRFenfrtcin",
  "key7": "TNxSVHdY8ERvCbc8obg1opgToKWfAowDGzbP6Kn89c9zw3mH2nDnP8N3Ly3yFgqkKszVi3BjkqKbtD3qjJJywhn",
  "key8": "aBFs2ZXFWTPgavYvUPxjkqXqMWtET8UtASDtqqqq1A3TJEQ2HPLtE5tEnL3b7HPcu9gTNicokSExAuq4xDDJd23",
  "key9": "3nXSMpkSuhjrncGfaSNEPurnAg4PLR2udCc79CeuYpdakqufCWLwpofzkqBvmg63XG1ZAMkQNmCsnkrMQoxDk5EA",
  "key10": "3H2VQUZgGpSDYGKsgNGUxhr1fsA8zfuuBchqk6XGBdEyKJjc3YtiHBNAjcm33iiSQTeqSdBiTpGfj4K3XLEGKoGK",
  "key11": "4ufgZpZRXaXYQdQgfJWxp5F2REUmcg79VQZCp55fTUbMa92cHRPiSwTq3p77sotkNzc6LUwMbyjgynexE9N6oZEh",
  "key12": "2iVbbLbCmwh7qBR4pNskx48BDwHGmmdh1PXZVzTLr5DfiwP4vZqM6RMWNemhEhHkjvCEj1b8qCvXwc36WJZkgkNS",
  "key13": "2S9Mn3HgYqnkC2gCktyvYLULqzPL8gVKii1WiYPiqUD6HLz4kRVLZEiz3bQteneoMAS3z9ucKe7VWat8yzNWHHDo",
  "key14": "2tHC2vE7gBoD2XmjncMtUrh8Qpfhya41sqMLcSpix5auuh7fJ4Dteua5XrGn9zj8ty713umEpupjeWvRKBmh2LTP",
  "key15": "5ZFaLxqUTdTkR8JNrajjGqMYts7nPjYYoQJwVJVxhhehFvDrbG2gsFiv3S1tMq6T9CQaZLbonsHiX25QbA3G6A39",
  "key16": "3fZ3ZayaBeCtatJp12hAZPxytS61XUr58mtxGnVXPMsVnbyacT87yUSQB2kd3t4fkuqkQUtjTN8wA13oa4BDiwPk",
  "key17": "58HM2fCGxmLogHqTNiL8SpseJAe3sPbQSQqQU2zEFJ2mm7QjdxLUURmYTTyTd64oCZUv4paYwmeeeBsyrFHoxJZQ",
  "key18": "2ntX4FtMjV21Cg6VwDfUq2asT3cpg53CYembNcZPCs3ttSKZM5NCDkXSbND4cSzpk2PnPnq5UxL31rKzhRTzgq6F",
  "key19": "41k7ENb3P5HVpkHUaHxwMjPYCQ4iJpDZXwBodcbjegZXw4oWMqaH9fpG1mXw3WFDE7bgdvL8KPVZeZecRVahP2nW",
  "key20": "3MYGk3PsPyYSY24kBfEmDnJ8Q4KgpveyBpr8sAa8KzPvJbH1oHUrrckN35MCYLe7eEzs6Dp1ctWW2V65fWfPg6DZ",
  "key21": "22RZRoRS3st1Dvp4NvtYGzu5fZAQrjYL6LQGBPeSBaCz96qB4MZdtPRhbahN1omQsst3bFrmAxfEu5wgiHHNT7HR",
  "key22": "5A1Z43JywsFyjV2SCkTyS3BC1a2U4PTAPqzM8DcooUW9ZFVpfJ9Ak9x7iFgNLxNfeQtQ9PTe18Jf8i3HsrMxKEMV",
  "key23": "5zvjL1q4Zf8uY6kXbA5AEVVvRBvQSAfqVFrf7qfGdfmyHqja1ouFrRwjrcS6Lfxhi3oYnwAUfrKFucW1Qiesn78L",
  "key24": "48AzG3CXwwuGDSxBpFczqcX9MtXxRraAcycPndkUWq257wuopSywCfXq46Zz57qTPjW54sxAWvGFrxPRw3qjhQSo",
  "key25": "5wnYFnJ6ExAtgGF3rtgxHn9RkVZenZ2pYK1XiLBBQbDk3gncuoDQPAY3C3gbWfZbp4epn9hFXpH6TdP8oq3McuRF",
  "key26": "sKY3FCSBbAo5C9TrLsYY9zsx3tXS8W5rjniTSgDaggRZ4Nq58zqosJhbHweVgo6VeL6uKJg1tSTDVYVDNKEBi4F"
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
