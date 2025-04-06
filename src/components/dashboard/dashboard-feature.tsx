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
    "2aVmErpQzk4jptj7thF4CeGCpwpBiBjmKRzxxxquoFvr2MhexLoqR6qEDp1VmLiY2nRANU8EMpchbMbz658H3iJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MUGyKyirKP28D6Wc9YFD6rqgr4L75fNxPbWFDGHGgdF5X5pR2ugTiicykawiwc4rLSnJ3RJPvrhcirTs6UyhhRo",
  "key1": "5ddgo2cEi4REmpKbBjigGpcb3g4DsB83VDAhpBujEmqLyczipvK6hMoCvgWjk6Qszxzzri2dqALgtpjUBrPFPs74",
  "key2": "4KuKxnyf3SvscHf8PuYACz1HYsm9c1xoRVtECG73zixWK3URfNyqddBKJwdHjAxQpWY9ptSCczsUy985Xu3LG8wC",
  "key3": "3jdaAWHqrdRWk9yCisDVhSV65c8EMTmDRPQ9Atp3J2kDmKfNomf3QGrJKs8xQrZ2MbdU7tf8Pd9ujRsfjLQze9g7",
  "key4": "xskYwc2kijvvVtygwin6pr43mSRW8ubLz47SMbNED3vY2XjeBgK6R1Y4wfKVo31wZnJT8eAhzwd82sexkPDgwTs",
  "key5": "3wNnWmMnn3HRZVimSfSoidiNBcwLExWXpM7cEdZafZAvvtpiaBTusLgn2KbWBUWb7x5GfABW9ggphHfr4XiBs2eT",
  "key6": "3p6EJoHgW91YNVHuntxW5udV1RmKPVPjXVhugnivMH1aLbTCkLTrVknmQRdXgmgNLeBWBfSwZmomACkURqFYPLpu",
  "key7": "3zhJwPnxaCAQntuhk83bV9tTNvZNkVVZNkGDKCadXfg5JuYxwN574FPAv8bsutTLd2E9b8yv1XVbXAtJX3dEEMht",
  "key8": "3EntbxHw8A19vNyGCKZjwu3LHv3L1c5oTVowyxREW1WUFi6wwYU16xSU9N2c85QjFD1WwZeU4PkJZGymht1piCA",
  "key9": "5FqG2iZXqmGEzADk7me6soZ5d3xGrB7gPAaqmPKZDJGwQWkz6YUMoNJYdJFurUPbdjFBaCvp6aFhMvgoqLzFTeEZ",
  "key10": "4d9CUDyEfw9HFjTYX7C9CXGTa38RTZAh4LQQGj9jgd2r8CrjL3bSi2xygyA6uSRjVat3LkQdDREFhtrzxji5EnQK",
  "key11": "no9CEpqYFNmagkHAVeGf7SrX2c2yLJk58P74cnF975mFDWoHD95hFyRN3QnfHmFPRBn8q7tPnTfStRru2UuzMmY",
  "key12": "2MfsLyjbesgePjyn3d7A6zdjnSRCx3mcG4em8GmWKVEiwnKuQVXi64dCERUzSGQZfkSbWfeKWZLcDyeaJUq5n1w7",
  "key13": "3azYiwYS7MyRtWNgvQyFdp6pTPpGPUeYnq26LwYvywpCdEEbbkZ8ZD7J55aCpD7uFGpPYV5uYGmwDnwjBUkqUiD9",
  "key14": "2DAsXK3vJJCdnJrCCXfCUQuRqkn6wqSjKMVw8grkbFBapD7ZrqkgvuFpnk2ov6xPWkQswMA6wYXNfjohERtYZAoT",
  "key15": "3Rz9qcZENdFKSM2QvHD9rpyHpqQ3ACQEYyEYwbukVj7oZ1JUiXAoCS37UYQ6Sq1MBRwNgdVed8kcxEpXNcJCYCF6",
  "key16": "3ktff937RxXrLF2yxRDuuB3PqpP9h9FVKEK3VKw4kuRz3t5cmALdNGLx8u5NpHGuTPxGmoQMYeStydbUBsMmBoBg",
  "key17": "5piiDkPZZcfA3nSoT14mKtUx14ZPkL6TUi71FzZDSVLmKpVWQFW82XXFLgafgMe8upVM8Hm2uxGWjTPQZuC3Am5h",
  "key18": "2rpBQ128Z1GvAaQFrpT7et81ZdvVSYDJYwX7unKMijReqV46YUXWZ9R4wak86tgejUHEkTr9FFC5qbVgwMfjAwJw",
  "key19": "2BeyaYXehKwiQE9iHjHF3gS926QzxNx1dwJrDSKTnnur6zajGwM7Cwwhj51CW2XUya2osEHeKWdRUDPVD1718sfD",
  "key20": "2xaJrDXsU8fd6CRxWsW993EJYK8kVVLULbQvcv7MBwCp3cn259ggKtkDjxMgJS35za3M5CdAqSEGfRRtnYKAYwY2",
  "key21": "43V9jjVdvk8MYLLMMPZuo6jJB7yKtnpQx7qKpozcU1mq6MihYRYiHQjqCeBuJRiwXyKysYrKyBchCHicU23zRSLq",
  "key22": "4hdBjnaVpVBuBdkgxSn45T5BYd2F86yDmrwVrZn7oNgswZnVAtT8zVEamKaieepmh3v23URHMq79ya5JRweL6jyz",
  "key23": "2tRgUob7Xv6uTP68ZfJvD8ECSmUavdtttR1Z1uqiBsfTo2aGfsBQY58Ajq5LbZ1JE1PDHJWRXaWhrmFGbJvSWsik",
  "key24": "4hrijxfhsoLzjQ7Y4n3LaUBDkvgBbtDfi56Hb6DTxmvn25dGZEMXRcAoX7wECofZxSUZNnbA76LbGHVqkATwvdjR",
  "key25": "5vpJhooKXL1w8fPcb8uW9u74Crx3JWGpndQ1qQBEC6W1o9dR22yvhZVw4Le7CUH3dLsZcwcQMqV5bkMwr1cicMV1",
  "key26": "2veLrijFMPspmVp7kAcFi2pkvKT2sPec83VEHQ2dP2AXPzuQJFhF7JuCuzjjwdTfUihexhZV6rQx8rDusNx2scXb",
  "key27": "fW5Fhr1MaheGSPiG1XPovv2Ceh4eY1uGb2DiW2DGg19KZmRhYG9iDS7sJNSJaaDUjkdWsPGzm2th29kc7eCieRz",
  "key28": "4UQhh9FYguGX7NvAxjb259qfJGb4cbsn3329qLBXmRHaG9ZRQo7JdZLJ2ZmgM6U12MT2wNzERFpVY1qzErXJ9CB6",
  "key29": "i6WFPY3JnBthg5zGCqMkuf7nTLGFRwRi8b3TCMY5JXnDMLDM9k9wg3FbSsJGk75BwUn57vsNDHzWCc65M6Xoi1i",
  "key30": "4cgv4V3NbLNp59ZzyhcUHLw78ZyWD87eJsU1nNQ9LsDXtiUCpdhMFow4LbkK2emfRC61ovkCPvJTh3fREVjtR4gv",
  "key31": "291xMrBdAtJH6cSavB9yeonpzm53JRQBtTmUwCS8w1wGgrSAUaSMiuxgmqLhJp2BoxzNw3wSF8AQqs99LfCQKy2B",
  "key32": "3oJTUnuKJVZJC4XZA57KBGN2NzhYpMNRMnsaEaPi3YgAQj5Cnc3QHqh1vYaEh7rfxWg8fSVFTuLwmvLCmfEDyrEg",
  "key33": "5MVFfTSbpVTjt23RzDUKsxTw3bhVRsbkZNbhcCc42vZJF7ZpQMaJW5tzm135AbG3NxoNKdRz6jBgfNMkaiLESA4",
  "key34": "5gtYMgKsqC1diApSJj2bDfHQp7F284DQq4ZF6d3pprP93NneAy7BXcT4kdtBKMQCUuGzfNnCuacvbfL6B3Rrp1Wd",
  "key35": "3eoar6TmRtFGWPVRGGQVtMtzFnTytCswyrCLp3HceUoQoUnJvqLDJWzVSk6SvkRfkBfUAobNxLtCdANDaTjsc8Rd"
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
