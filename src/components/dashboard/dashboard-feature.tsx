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
    "2xGk4eVm1mNX1DK3mzAfpVuXSwro4iLc2RqBaVq964fxLPdFp5RoDjuCx8UWFgDQG58gbUCDU3XdbMVJSP2PSq4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCbXbzDKA4HGW5mFFbEwwEd7tDcL6AXNNVLW5SYEDGJ9X92jMRHtLGctNeaPtXQ4k4KWtXAhgNUFUEHGZCrNucB",
  "key1": "5RR4qSSzWTjS7iwG4HjNd7xGibibrrG2X1i3WoxvGrBziAmDu1ay6qCYvLXpuZhx8Q1htYHYnH93Z3nBR9xosJUg",
  "key2": "3F5he85TYr8pSiFWtKKThDP8uL9bCTZqgLoPTc837vGofTrBBuhHeqJjcX3GtV12SC7BCPivRiRtR7qT5gKY9krZ",
  "key3": "4JUo4fxTGoWghmHT1Ykj5mRS5e5h9UTkhVLynFxKatxynYSueZhSuAP9swzzfiTP5c91vpQr7JvLDHwtRrCL3E6i",
  "key4": "5igpoEfwd9TxmHisUSk8stCoAGJka7m13ZaBWueWoaRpEXAbtDZP4TU2WMQwoE36NRLgojrfZ2qYtUvBg5bBoRYR",
  "key5": "5tLeeyPHc57QtXZdG2P8VhLSPSQG2iqxFTsMNB3uqmUnYNtyJekYAs3u4W1Qbs9AAmgHqGTJXGX9NNiCCwY4j7Jw",
  "key6": "5jCKHhsC43pChbYmFgPCKDYMvLJoWktBfRQEBoqK7aDRjt2qKHmW98Aqradqmq8nYaWMtxAAKsUDEhTmUzus3Vkh",
  "key7": "2j1pbWHSsiDsdtysV8YU4zrv38Wgfhtb7DzhkKH5aTPtMq9qJG7SuMiYEkibehoEpAPCHsf26VATbzfghiREkfnK",
  "key8": "2tJ3Wr56VPhQ7xFTrJy7kMXPMh8rXP1taZ22JScUfygpcbvj4HSVgu1vw5u16DBqKMkVYXkHQSYknFTziXxV9ss5",
  "key9": "drroRGdQKpGcDzrt1dYUwocFx6adf827DvnrguxV64tYRbEWoLwbnGcrqPFb6ecx8Qz6N1E8ZsZGRzSUjrHTCnc",
  "key10": "4DYmEatXLBw9cHHWpVT7Kp9Nkt9q2hVMxYg7FfmyDTRJf3gPt5geHyszVk48LH8CuvWpd1eEwJM7NJemKAQ4sigh",
  "key11": "3xb4D8naQ69gE82TC1VRQg5F91jxQCb358Rk5azj6URf3ncGovWri6Vww4BmF6CurmpdNvquEcorZohBgsVLR8GU",
  "key12": "2omVCY4P3x9CcziSgdXC45aqab7xFhiHsLookyQYAGYh6taQwPZpSTVNLmtUYipJAhMYurwS81AuKnnRfvhmt6U1",
  "key13": "2Bpj2fndBFzStA83txssUaJpgdRsENiBtPANBYezurtSV5XYMMFEXjVxMi3Fh35tCc9rRjArt5PZ9dqygKxK9QKH",
  "key14": "WgvY7wqe6RjozfLLwAY1dab8ZS1Xr7yrTtaj7zS4Tz233NVtZmf5LomWA7Fm7pqJ9g4q11Hg8afmdVzAri5ECyX",
  "key15": "3jhrP7ejz2BH1d7d6xueiipymvp844JdkREpReXNCR8W82hTvDZKdbJMZPs8uDNvTqmTJdchpkUdj1ME5XuWoCQ",
  "key16": "2dHNSiBVc3U9cW1RmyNhvcMuz4nDAjb2dFawGiQxUeaqQvseC6vWLtXd9TzSqYhLtstykHsBVtWX7BC8ibsxKHF2",
  "key17": "4vv1Y2ooHobm3T1pjoDb97pXReGzmrRoC7CGjNapyozaWFqupHVoqJuScStvYVZNGcHEtfpeuKt2BBDP2xMvkAkA",
  "key18": "4Qdp33emepiwG3SERKAbyAgf5M7wQezTabdH6t21GywZffV7xM2jGonXeMcmYLgPJ6uY1uqxgvMtVndaHDwvhDKd",
  "key19": "2jb1dcs9JA3iXGhjQ8JhgpFjKMiHGTPZcXrnBx9zmwEtQ5XFrL7y7fPKziiW73U48gEpSe9EZVmNScuSkUfkiu8f",
  "key20": "4wy4cL2FM5L9iX2rCJ5oUShwMhHwTiMvZeXeTrcExGdqNMdkSGRpxyfa7C1TszZebrhPeRfDS2gYmQSQNivNdCMU",
  "key21": "269urDFmgzA8vNRv1ii5oSxLfwbrzhKeFga1Y2ufowv3PPRQsjsn5SLuAbZBt5Wp6F8Qwm1rH7rVriKKo8QpuLYy",
  "key22": "371LhxxxhdCcDjRohWbPska3AgJtPjaHu77Ht6r2hxnwDkXKFWukUj6HgWW5AgWtZrgbmcv8f9ukBP11Fwdno9Ku",
  "key23": "omf6xVe4o5hW2bdRFDUNEbsYPnZYVdEMppF1Z4s352Ux5XwujCEDZWqotbN1ixgMbjF6jUram95iiksMDP3Mobh",
  "key24": "2U3c93Z47VxiseKvEUZn6QmPrsRisfEwqYm1wBX2jjA5rrwRbuJ4pt8ovz7NH6dPhye8k1x7c6bUNj9yBXomimnu",
  "key25": "52YKcMQqKDtVFZxd4FKf296dEW8tPshBxF1kcBjX82yFeS3FPhpMe2EX7uLnTvS1p1Uy2HutQx6xfmYhooUvaEFi",
  "key26": "vcrJfbiNNmV2iQ6NFpySoSkK21jiJFuEjLpjjVei2BVgfjKZXhq8SNn95vLsZRHw5PTgxE2NXpdWZaSoSNXDrcK",
  "key27": "3LFfwKNrvzcaGnx8Gm5BxSUPQtqu824daK8uU2NrnuHuE3A7edskEtUxbfi278ZE9DRwMGFUQruX4uQKjKWwm6aC"
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
