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
    "4fq7VTVa4hwSNozGNvMPyywWWhtuGXVbjBYH8b93cd8iRDCPmwKAQ3gAYA6fEHRccTGCLKiu8rRoZBNm3tk5df69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWMCAMoTBNCpQUsHSvdLfczEHWxeRbQ768BtbcgG1Crs28dTqANoN5M9xdRPtDBnmwCLQiuVB48JaN69uv2ozhu",
  "key1": "2rTq87jyijB1YfVd3tHyDhBYuxaDhyzk4oSoLq1yYMopBRPLDsXDjxg8ygjXQsETZNCP662AqZY3wJ3yHHnFAnLv",
  "key2": "XCvwAvX4bbUUKsrf4VL9VFP9Dig7vt7GNpUCZcH3Tgqtmw8jQ5csuXFwCumWaiDyrAeymU2GPhKFjn8AWmboZbd",
  "key3": "cWqdkRj5e29BF9hNvRGtiXw2RKZ4YbZw4JbhPgio6wvFMUkCg1Y1CKf3r3mVggGhTfjp1iF1zUVsbrPeh32kaWx",
  "key4": "4rTxkGShkdEHw2pJBpnebfvQqwVhDdsAgYtKVYwVjp9pcv3MnAphLbz1oySSWtLDzhzcLJAwisV439NzZt6jXdht",
  "key5": "4JU3Sa2ihk61srYcvVsnSqngLoGD1Gfz2Z2ct7dMUdr5KtSFgydXbcgXG4KN7S6E5zDCLBJN4sgjzFhq9t9EFMvW",
  "key6": "2Xw3W2ZUagxRKPd8wF5CyWxYB7XWKEL2h5aDd6reDVrNNLPHtCWhZSQwrMGwpEMicPpmY2wRTv7SFGrfTz5wz7qU",
  "key7": "jSGihfhEtFs5XZ7z9gyr9Rcf8k5bEbbu7fC51nuP4CDbqbXfZbJPXLgFgHMXhWJ8Jqn1oEM7Q351qqZtRWKFKsE",
  "key8": "5gi4gcZsXYeZzbjYEvM9xZmaAUZEkBHJUo3eUpGB6PGirWUBpxq9gjRNV1LDX3cxZAvRV7SxLXQqFMWht9cBDLaK",
  "key9": "5zbCfj3r1TSewksTrnwR1crPLQvbmm1pRLwPSTNu2sMHgb9AiKtzpfqJtya7uq5BefCs1M56bdmNCezxRW8e3JQC",
  "key10": "3MynTe6NTQhKjPavHooxP16pHUtitBVwh95L5n2Qi66zcAu35eMdBpNnpooje8tqff9NnJH6uPQGjR8o5v9NSsFo",
  "key11": "4vM6vox9Uy9toEjsnoz1xBLQLNv3SUMKFR2mXsHGnBbdNq9dwV8YLFBPnruCxiLkbSShqA2sFWYQrxGJZqtCrKCp",
  "key12": "XuGLjwJJKRCJYVYeLYhQpFHVjZADBzqRcVsyJstXEGSNUDkKPNr918tRGeZgCt5MBsZ7WD2CTqeDnqrnP6epeYx",
  "key13": "dhZn9hzsFCKVKZadKan335bFb5dxGpeupeA4kjc9GkCiKmPRPhpiWF4UA4vFZxALymqwmBAykNf1cZhmxazVXe1",
  "key14": "4uvt4Z4TXhJHhsdiuFug8NRRnfBdo7DnSSPh2H91F6CiG2JVUrgH47rx2ZuFM5hJGBXCuTwYQgkSD4d9QLaXMpcJ",
  "key15": "2BbMEzSX71qpNphtYhr5y7LtRvXmkm2FmDsLmT5xDDpdJxM4W5ECie62xmdiYzZB14UeGqhAGNsUk1DGsgMXKm7L",
  "key16": "2f9sx9kcNYiYscVFANr5VxmvjVYyLgKSLH7HiWK7goDDF89Le1yVwx9ymXsNLrLHojHZFVmxMKQYUiafnYSsoese",
  "key17": "5dUm85cih46UkmuL23AQr48VipnvpyLDwMgATLnbwT7gjAxD45s3V3nuQiXhGXKmN58do1crb5MqwsmR39rTqewC",
  "key18": "4aXtKngdi9CmD28VZDCAcEv5WWYRx9op9bmLQuThRDnS3pVR7izm9FNtH85WCKEDV2J7qgT2Ri7TDo8NjsCxGBsj",
  "key19": "36Dh7eVUTkF5L43v1XUUfUWoM48DCCbVnnZs8KuTJpKhBufeNeFAyzaGsuxzXQ1KJCRp1yJwAtjB3WvdojDHqEk",
  "key20": "2iLXDsYeMHvWiGiLcD2pmZkeNRDxfqNeUc7aJmVBb6xmexQqHkjvMExJ8oyf5WV5RCzZBQM2cBVhB9sZzi4YFEtk",
  "key21": "SrzLHuUZzD8wFvahcsT1MhKokH91QtXW9F3xKyC3g2K8zGQHMiP9zvoQCp5nHgZihZmbchfMzpUmzui5GE1gF2e",
  "key22": "4Uc23xnUBGLveGNVPauFXre4kYh2n38UcZuMqHGwwN6daeREgKSLjLycWbouxq2GbkKzGXfimRqcR3R7Z5xUBGY",
  "key23": "JBZqWFXaes2P5QDmgX9bDvak21jJmu7xjbY9x7pWUEy8Px4oGCrLrpn44v3JPUTm3wmRs7asJdinkJs48oL1bK9",
  "key24": "4Cyr28FKM825EgpUsBNFDGfgf79nmaeWdmBH7XEu1WqpbetdGGd8Fsa9hPWf6MVnGRtsoUtnaoDGJxeX1f1TBjxX",
  "key25": "2upWiqjK3uPFx1FPKhzVktXeaDusGU39u4oj7SHKLZPwtERDbRZYTAFMmSGdzFUMe8CXtf9Ct7nXtMTatgcPQRuy",
  "key26": "2YbL5axfdkFJk6qLkkGHoaTZw4HRWJka5NUDKfT2hnqb7AY7tzoh9n4zpQEx1fgjZiH5k3fmeb1Ja2M6pwUD8JKh",
  "key27": "3hsK3hn6RtRhSXa9wtytHveY3P1KRu3H7ESVVX8FhLmv6EBXaRt2oTDkBAfadiwKB8aB4XuPnVtMK4fwKsG5T1EZ",
  "key28": "39mzcSaJ6aeZwM8aXpw7LkQZB1frGx6gLtsXbC8n8HEchZ2yFuyKWA41YC4SL2dDRiYtsGXJwybU1U31NufCTBQh",
  "key29": "59vMjs3xr4igd1FBA1qeQkUnf4vdprsmP3hbdQ32qFrzBKTxn3KALD9hTBfJMg1WY6KyCXn9y34UMA4H2CtWFJaS",
  "key30": "4uuvNt2heAkMt5EFBah9GrxHnEAXV1b6fpQUK3oQpUKJE4CnyCgKXL69fHkbjiQUqZPQwxcESncDVgmh5mdoSBqS",
  "key31": "47FpyBBCccxMydWhEeRh88EfBDvhiXnHqbJRSy9x7U6N6VF8A8vAEWmiSVCxiwTvoRudSukWgrbJHV34fseiUyTP",
  "key32": "38tXvw61DMtE4ZxgjjR5Yc9Lk2wFSVj2DkBktxJwdGAcgkXmEfpqTmTmxsmyirSLz31QAPdWzwVT2hU9TxHJvP2T",
  "key33": "7ysAtiWN4EAmY9VmuTtHmJX8irqRg5JvtotRLEKprGhDzDuP66kYthjSTxuefMrprxpVGDGDvW2Fbz17YfgYLwW",
  "key34": "55X1SC1juS7pc7sNkcggRXSYoroLvYdR8jinAw1DAbiChzj9HYzsNCWtj8kNkKsJKZwN41DfDmtu6SepKDWEq2WE",
  "key35": "26VF2Qeqt6LKrjBvPJNmw21eh3rAXgCpLXjxBrCMgD8o73XgE9r8f9ooDtgokwY2B2cSAXbBCVHP2zRRThJeAH7b",
  "key36": "imQ81dGS39XHsPJ1rDUAbrEn76tqih82Ze5jD1CZ8dDP6jfL78JEa2ZDybzHJhJE9jP9fEt8MAPXZ32KVkNRgyW",
  "key37": "4MfNLSHb54gcRprKaE932vTvYyLjL7smH41PXEwmnWgt5itaTdjhxCbGRSSfRm3fof66bgm7eoYPaMex9RJcTHz5"
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
