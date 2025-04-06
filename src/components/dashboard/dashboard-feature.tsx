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
    "5GBsjLtVN7dG3K4nsT97UEeRwJtt7v5FzAxi1NoTioaxUGbMHJgDvAdRG6kNRFgqmPcLWF4xVfz4bdzSehggiJC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZRtD4et4c7HR3yC1gSwpVn197wzgsYaeyTSshn8Xkxd4MDmhnT47TEw3HS22ZPxCihmMRjSEC6zGm25RCzRe5Up",
  "key1": "543i816NuwiRB8pzP28JBs9XNfS5nCQsoXZtiprFma3eotmZ11qQUmEyT8AP3KUBmDCtGVF6Sh4icycZFHHWPpjs",
  "key2": "61dbbpwa8jSRn6sJCmwAnd1kTR6Ynh2mThQsdmLzmstamNmB214Udvq86J8N7Z1626WSQbEwxmvEHearqUPmdSkL",
  "key3": "MwRZYR2N2YoQLcBFV8yjvhFcqTpQw8e9C3TihP6w1PWrB49A8mD2d5yNabTSF25w7Lhyv7wPRGqxianeKwMioF8",
  "key4": "2Ni9TBzwBUiFmdJzjosHBmFqaYejA6DFSwPzpM9MqdDtEtThGXGWKXJiVmmKUmUbxf3JveCK6uUB166bssWstE6U",
  "key5": "5pW42ZuVmxYAXNr7wLBow458GYWJxWrRdepGDdRCyDYBZu9VXVANgq6CRrwcoNsyZZZoHPTZ8SeqH9q2cCZiLte2",
  "key6": "CR9DLTMmYypZKFvUxi5Gxtz56hZg7KbDofDmYqpaNoWQKsLseXj3BEpf4SZLSKFy6vDJXZgj67nYHyvVxZMiJWB",
  "key7": "4EUEaMUsN2xVKtZBJ2ihwAed5vrErQPCnroXZk6aAtziYhuiTgNHH8uXj4e6DJrqjDmqFZY4uotDtjCMcVT6opdo",
  "key8": "4uAh3UC153MJSNrDHheQ8Wr9qgFqWepHNmoArQPrkG9rkXVEnT5kLR9pkqtcKeKw6FCdkN6mbzh1VWHsWwBsUhd7",
  "key9": "kacYrKGydnhBd43d1JfPABsEtuQhHchpLcLrs5gJKgvqZZVDTH43jjpZaCqTwnmKikP49xHrqYspJM9osNUppjv",
  "key10": "5B8r8A9x9JBbG57ZwG6MvSXNKvf4sh1B8pSGmhgoe5THAMNuYNn5mUzFizhBEDjwPqikmgxn5GHMF6Kxd41CuDm1",
  "key11": "4PLjngmjeBSM8sNKeojAbZACUJzzqsjrWYkJhms7LR2zkub4UEK3KQZzUS4HmitLsQ5M5H5yv2DGfnmKCNPETcVK",
  "key12": "3cAqYEuiQ2hPpk3TiuxenJwNkrBsVEb37i2tmmDs4WFJd6b42j2CSVMQEXzFYukjuWAGk6KiyQy3KZFZJ7jZyxhT",
  "key13": "5K1uYAbERRfZzgDUgCAfduydcXpzf7fw65tDCvuGRquHaeNB8wmgsxP1VwjHzx9R3QSVQKttSP7Tj5dVi9uVsAtk",
  "key14": "4NqE2JSaqp5wjsxKozf1KmAsZsqLdAYjBTsByoC5FEW4gRxqFuLBfeZs63AKGUon8iXDqWnEjF6P1byj8nk9MFPZ",
  "key15": "zeqcT2h7eYpbWdLkASnAAcPRVRgnRstosXnrYsAkzjut6U9CBtSASkGFHeo9aP3Qw8CnPJLkymLPi2FgPZp4Z9L",
  "key16": "2bLc91yUsj5EJPdKMr2YvBNHFRiL2AyHxxCSYS15z2sLyh7kdtfxx71qtozRHwb3sfFjFHduTQF6h4fmAJiXndwL",
  "key17": "FbRDCdySbox4aVdx63eKwwogij5pagyyAi1eMZFycK1BpcK2rvXqYdRjWneXtFwujRwp1BZd4iwYKdHUBv2JokR",
  "key18": "4RwPU6JSqFkDUZXKCdkUD2MpAP88aTmpzH6evzoYQMeHEfPSXYsmqbSggncTss6jiyMQgwkBepPbmittNE3bp9Vf",
  "key19": "37mxCtEwtQQocXC2Rk4WWUCskyQ2JP57YGdkTCJVH8GicPenbYScxbmkS2okXCgwmKZLvqtEEn4fLEUkURGFDQ95",
  "key20": "2t1A2gW27mBmC4y1eGFZqFHWGnS7dsmUumeZfuUb4j5aMJ6SkrWoiBwzFJgsVzVeJXfxbB91cNBreqw9s15Kbbr9",
  "key21": "r3kEfptrH8FjPryxAgq8dVeBdo3anaxXjCJqFjHq1P2HsFCqATLmCgJ1hGPue66uTPLPCxKTxGbPPHbbi6ckKi8",
  "key22": "2gLBwxwis9BNMsDbq9DuJzuHX85EibmUBhaLSYfscmwkazY2KtS48PWFD6sd6vb31wwHezSYnwrJtabsrBRA7MhS",
  "key23": "4tswpKumTES3jjvSdnRp4mqU7BTSiUJcMEuFr7jSxWaDtDVV3cMqZoRU33rb2kHAD81oMVGToLPHZKGUJ4k9u5Lr",
  "key24": "67Z4sSpegwi51tz9s9zejQvHZMdyuD8hhkiWkq66eJjuh1c7U8Wqfa1185NL6Jhs7Gjx9s1J1yFXYvfC4U5u6ucY",
  "key25": "43JPsFppdBUHD3C77p7ybEXqBwVxD1gTnoFRn8Wo64moWj6EmTW9MjNyrLYwAfJjNo6S8mFKq9sD5HBaw7ksmU7d",
  "key26": "q5wvQuf5hTi6UMEm9vfnKyxweFsKDKjZkzbkwhcEjZnMTnrVQvXPSS86SRHn8a2f2ihG16ZQpBRjoDouGfZXfUR"
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
