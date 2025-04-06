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
    "52J5Bj8jwt9NQD3BwW5w4sBKj5dc18bhQDwb6tZaLWKCzgKCF5TQDQs1DJKU79umemKUsQus4w9VUUad2m91hy4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q1FEYy1WJQ96DVZmoULTMLb9VFbSfJsahY4AFUs8qCe2UpP4Xvi5e2CURt76kMHJkVYvE4Smmgkou5F5C6MKroV",
  "key1": "4YhVbXqTduA27jHpUdnsUZ2jzSMKSWMwuhrcKmGg1GcYsFYUcPLWvsjf7nmvpURdoN7aoEgptfi3jNra3YZ3xbzj",
  "key2": "28DFQ6iJEStrD5Cbx9Y5MF2RHUi9Z5ZU6pdXyYhcsqiptr5a6K3a3BAKrQYHZkLj14hQrhR1dFnatkG717P1x2p3",
  "key3": "5P8o3o8aTYPLpgHtPzzDA1UxvErbmZZSi4rVayGY35pbX7eFrN8ZU9Zvrg863AoWXPuoVakuKmpx2KAqRfn7NShW",
  "key4": "2xPetkjBpRGMDkRTe21tUhGLXcgBDDNhasJ9k6eBRr6eq5mHwgVsH1KPZkkS54efHEdyzvhS6rE2JTDAApZYToHM",
  "key5": "5neSWmWXjKMsNUBGPmgErG4otmuthiJDT1Uuh1xRbDpq9nXSLP6gvqhnarxr6BcC7LUWX5MJxoZYEiewyqQb5T3x",
  "key6": "5okh4EgdLbiMuftjdm1dbgKURdjXJTcHGV6LzkbkU3cjAg2XXAWm9Jh3tDgnJrPnmPdNncJe2rA32E38FVMADptz",
  "key7": "3Y2nEzWke1SPsfUFSe3vrZW1HR3mykEmyqwDCbf7fUDELoP5kLZEPmTEiyJZHSrHYtG83HjysrcabmsAwGQJDpr5",
  "key8": "WC5Q7RUJ1TpE97DUxCWBcuu6V8hdNYRaYudiK7N39sgtZqPVBedLoBqSpkDXYowFb8YG4AiRcrij9qeKqj9xyHE",
  "key9": "5LfDjvLhzAK8g9iTySF1GFZJo1m8cnnZbR7mUjy391UWTcbVQUEc4QNW6dHaGtHoV3xKU8GvS1SZc6yj4k3b6do",
  "key10": "2x9HBknfZpJTLF2cBPy82bi121iCjXYJHeexDwxG93ea5bAZrFxEFUKPwCppDP6Um6QBg1eEEwrCmQZxkm1nE1fD",
  "key11": "4uoe5Pf91D1k65udeucAQGzZzmnrsb54Yj9XJkFFRmpSikHu4rDDXATmJSiyynoegogCSuYAy9Ud6cA983EhWxay",
  "key12": "4oKPgitcKeh2EPCVUdMLruuCiwNZsdEdZsL5zi9LWyokCvEUik2t8bvhmoH28mTnJidyHxDj1CPf3uy5kkf18wo8",
  "key13": "4PEpBdcq1Avt1p2JHHrNPA4P2U7zsQ1XCJG6Z4QPVfEcEUbGPtDsVnPPzJbBxQmMiNpcGGmd5QgXvWBkGuQuVgK4",
  "key14": "5Ev26XTV2DhWUnMUXP8sXgmDSfghtXuYMdUF38aAx2Z5DcTst2pmmTBM9uNePCEsp5HiWhmdtwn41Zie7BqCxZ64",
  "key15": "58G8QQbZXmRJ7mkfU2Si3319P1dncew2zb93QkW6hM285DQEQhJt54iXPBzzWqSxb79jSdHowMvF8gMboTbXTkJo",
  "key16": "2cCSTGxi3a12Ggr6KxsHTsJyP6ZGiyXfzJT2BkjzzgsTKCU6qDmzaKovyZGvrpDzXoYwifw8V8eb7oMJay81Lw8u",
  "key17": "5FGMoYVMN2ET2XFZFxn98hRZBZ165xzTyRZLuKiayZesA3CxyHpAoiFRwWThyvCE61c1B1JpjEfTDS2N8yw3YKAb",
  "key18": "3EAkBgPs6CpMm288M1aZ7vtSUivtofi9qCM14jEUbg9Zf8P8Fy9TEpsjg9m2akjjDHCucxUgpQjL1PJiqtrKcn5c",
  "key19": "5uesiGKspaRs8o33EzM21ruwZAx44F4WvvdyFnMpQapJaCqLnHPdFaU7XgxT4yxK1fqPdE2VodNEv9qxBKpoRYAC",
  "key20": "5qTLggJ8wdtk9Wv43pT2vSc6GuJcqrNGToHnMAATJc8JvigR7kgu6EMdxiu57HDLhNGSoCDdHDaAoZf7f5bGqsdu",
  "key21": "5ETX7wA87TS1yp8Ed5BMg8VquSDHMzzML8ECwEf2cAsRqWTCm4gcfCcuimu9HBvyxD6Sh5b5KxE3Mmru3SFAnVtS",
  "key22": "x7CXvzGWb7ZjTeg3nzTdEBcYFp2Z9GupMJb1vsrtoZcVL5eEpNYRxQY4KDJhR42mNpjazRE3nDCVukVEbMJEhWu",
  "key23": "4DtMNzhrcJaPMhcqZSxC3YX5RkQGuUT4x7kXrZ7sk9WkWcqyFVRXVd12eCMUoAyApoNMory6pYsAmLziYLAF1exY",
  "key24": "36qAMuRZqtTPEQVLywgEJY2cB6v3aJ9ND2iS1D1xshxLbjozpHmADfDMr7vxMB2iV9sWw2Xh4CogLcTSSfzACtMh",
  "key25": "4i5ZShTd2rtZjpzuiJUSXiB2fGYpBVtY9hcybZf9Vf3eiAQvTt8kMNgLBHvi6b7cUhCxyM5hnKKFZjPmmSntb4Yr"
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
