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
    "2bajR2JpuCWzsssYGrURCAD6NGF9pNy6NY46XEsjL2S7fmmg3S27PuCHERqvJWHB4otiYbHrMbCz2NFi7V2oetuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVS42GDDsHnS5HtsPVnCyZ7QoEzo795YAwPRbinAXZVid8smppVGtoqJh28JqA9G8vwAWMHcXugBTN8bFMEbLGQ",
  "key1": "5CXbhu8ydnx9N2X99grCGkKfW4kay9TL2vwgKpgMsYM4tP1Zg1Nd5Zn4b7hVeZNeVmTx3DrAJ8qTZbMmcifP3S68",
  "key2": "C2UCrpTRXL7R5ZPpBENPDNgitydXLYhBW5ruPvHncMBuDQbEaqBvhCCcpT8a2VAyAcTJSoJV4rcBqdtVY5a5WFD",
  "key3": "4o85fNZzrDEidGx5mSoZLVjgtmFs694szCB2E9bXXftFUFELXBFvBJoSuCocRSMjURz5ZTtR9oAT31dAtXyyM4sK",
  "key4": "2Zm1G2TFpg5VQybEEK3R23FrmeAMocewQxXSgPgW9R469fM26x9YYP4rPrdm99DrddoaYS5yP1B9y3NHcEa5NiRr",
  "key5": "3y39Xa2kgLJ3Q5k6PKviXfNoZKtMUX2yd78aBrnj1a3pvx4pQm4do2e9uU9eCzP6qRk5rkmWdVcLxuAtZ6uoXFid",
  "key6": "KzGAcEkDxdiZco6WgeiAZy2TNgGHDhkGADdUiZ87s5hP1aKbGrxnTV51bDLPCC1VmDEfMaJbJDF4evjRtpTfJ96",
  "key7": "2my4MCZ4yNJqT8wYULB2gMTUwFHGVy3o8rnXvqXR6mAUaptdZXRxXDozZqcKfmUfmYxdMAEQMU2P4tYnBPYKQxZ8",
  "key8": "5hSfJ8YK1h8FPrer76TJYELBNsd621Vu16iTMpvPUAETgUxsxucVsqKdmRJYffUTL6FnaYReBgiHpzDrrVvteMW3",
  "key9": "FF1vi6ChgpAro2h1ZuvrdZFJaCu9CVsN3wsiRFY2hKLQHshhiUr2md7a31JKV9Muhwv1488yb2tMe6u3F4HbWRz",
  "key10": "3t81z4XoQpkGkaj1PwW7pmuwqEkmKhHdTNddouZq65iLfCrW3ajLYmKwSFmtpcwocSiK4dAF1EPdVS21HDTe64mB",
  "key11": "33Z2AZXMgMncqo7JC6wdThJipD8ZiTLcJ79qnBmQDixhy2YW9KcjnqK3JFWT4yJdSFSDrC7EMzwdEZewbM59T41o",
  "key12": "3KTGaobqKWfRgj1eYsTfCUHzqqkvsVwPrhaWnKGZ9QmXm7wW9UqMpEzzq9Vpu7UprREi69bWyJhmiFrotbiwbtpD",
  "key13": "4C4yeb4Q92mwJHBykMwqXmuejeQXJ13qSQrXepuG6Le2aqd8funEtkkYPbKrbh6yV36oTquRtE1gr3dAVTsUpREc",
  "key14": "3DdDfTPz5GkBrAdbbR3DvFWLbYYAzVkUcAkwB2fe5G1LoByvzn4Lk9eadpLrcfFoKW6p3MwVADvdcvUUKcnKpD2",
  "key15": "4BjR5tRmdNYdFQpiiMAomrsHSYqdVownsytbEdVkRJzKLCCdQTWE1Rsa8jHgfYAZXMaJizd3erKGUid5kQNafcDm",
  "key16": "2yr5E6eRq456haGxkmpvfnRd1VU3ePfqkR2zAtzLxHK5r7Km6ZaW2zBSfRfG7RxmqxMsmJzJVAHQ9cFE59PZU5tR",
  "key17": "5WpZahqLS3RTfHjKW2k9zWJsFdoKUYgnjdFZHW9S2GfFo36dKKJepwBPuVdiL66E5H56fPtEsevpyuaoDGR4KtFG",
  "key18": "2y9dEvYLdoTtWwtEv8oDvRvgExpCn7f5PvAWR3YJ9TuxWaoewBQa2BD3ajQpXGtDdkVdwwvDM89dSWYbvNmKAt2x",
  "key19": "5tmuLAucJn6u2B4gPdK66yybWEeU6JV1UECguc24G13jva38dMuYmkypAfgdnEQB7FfSWNfY82VcFj5kxkQmrUMH",
  "key20": "555ZMpttfLdf95TkXh2aCpwMrHoK9goc6s4dc9hKoNJgXB4XRmAeS37LXkasJY2DNryhAcyejVndcasiXYQsEg4p",
  "key21": "6585GVxzDZQRcDz556nsJJvwvKQ5KbS4SR11BBo44CpPRPRWz9GoHqyQ1QxhswYVpx31p45qh8oPLqYqAyiwiPE5",
  "key22": "2Zhifz2GEHn4isQRVcVRN8xFbEr7RXZdB6hDmc5mFFto5oZQh6uroNRsV9wG4yUn5EPkdY9LjNph46NAq8YcWzoh",
  "key23": "55tCgS79TYmNuwqpbwVuVfBs6J1qTRj1DAZtzPSMqh6jJcLL2zGtnZDJFUnQXTpXgM7hrw1CmFNcMp9e88gcXrKM",
  "key24": "ngu5t3cKsG7Yyni6zbEzmmiw4vzikLbj2ANtjCowBBQ3nQuhASYg4ZncwTHNWycqUUvt3q2n1URwE8NrNYUcvMC"
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
