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
    "22CFvaSg1pb4qAJkiXHsEjB7uck3wHqjsAWswwXek1WVZ48W2VS4EtdeEBcZGVkyvoEijsLnLRekWNS88DPe3H68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eQNvBfpnVZHb5u3eWrm8nARcDuS4sauMEcPGJTYUsnaBYU86adjjQtzk5p3drimmdZEGpgQ7j2KKyoPyikVSeAz",
  "key1": "4XYoavULta5USJjbKTrLzsCwRy2bNdvWV8Bkjfb82oNqwPgtegA9zz2BX38nxG2a4JrRg8kBENBD6q4fJTssiebu",
  "key2": "2517P9A1gkGLgc9roRCh1P8vJ6NVRcGiB2LjoA5Cg4v66p7myyzNqYoxBDJXoQMKMJ4e75pSX1qh7phwEU29tZg9",
  "key3": "2y1TcHWkz4ZwS4P87V5DhH5YBD1Ws6BMZtJQCZ4DqziAzYd14LGLtBKAojsbhXVpez16RBnY7R2RWS7DFzMJT2Et",
  "key4": "48cUxX8L71cJ1A7fNMSJuP9TUjrnojQk99MkgCgonAXZU59g8qby2kCeVYVYmDGrjmoQNxwzi5yWjtzywFVLFTco",
  "key5": "42mCNo38WdPS8guCWLJ3bkEethhjn2oqRsWSqNWVo1etPdRwcJjKHn73WF1uQeMvTF2TLaEMixUKP2LfwYWkPyaB",
  "key6": "ZEcnTRKPYbw8fZgfLt7n2cSHxuLj8qqNdPKTp3dr52cagmgepDhWxZXZvx2jC9h3HYTdwsmyN3LMRTscGsZMVKu",
  "key7": "23mEchHKnBPc27C7QaYjiSzrq9R9BLqNK2ThGfh1QKSk3sbRe26kRqaTmosqD92Z9Z9d8M6m1S6goazDHiDEwKgZ",
  "key8": "2dajLBxM3jau9wsSq7fKzKJ1rR6Kuf6uvmLhozXKzyGggbJn5rzEST8fpYNV38NEdupoq2aTgk7CDRnbEnhxxifH",
  "key9": "36D8jim4QuKmjhp3brWqnrr2A26KiBk7ousvcrWQL2UNivU26H7Vh22DuAnueoV28MvSQ176aVHWZDfJhaNcbSXr",
  "key10": "5DX986cfgRFHRWfC711nzcFQuNQnBPyBNDkTqML1ufREeCKLhZMNT8BtTW6JjS9tPijSzr1SCD3BGwzMrBauCCd8",
  "key11": "4Y2nMKEneQ9Z2Zkb1fdwCcFC7DyoUAKKLhMt2B4xgBu4Dx2HC9hFku9Mq8pz48YEDtWSsYA4NjVGo8kYhbg4JNnH",
  "key12": "R4WMXnRLUGYB58pKCDZXHt2PdhrYrTbU2kErfJXA3oTCoZu4VxtAy6nhQna5AGzCubT4dErkYYYtmBhLfo7XPKJ",
  "key13": "3PbNznAXjLbRMDfmVntrsLonmoRWumCjYZEPpjxUaP1z8qKzvZ4QBMpTeV4yjba5my51kJeXC2qmuiqCasyHDZuB",
  "key14": "46B7cNHxh9hvv1bBaYwkXs3HG8Hsdkiotqy7tstMYdbo1wHwBuRokHZDfq2JaX3h8CYnxAvcEw7MBFY3k5VEXnwb",
  "key15": "56EsJrNaHvRZ5wwa6SaW1ahMqFXNdckRLnjz7y6DdV78wZoNXaWKJdUgbPHgCMhWzjJTqTtKxQS3JQjvA3qpHF6i",
  "key16": "3rzsJYuaY5WV9R3w3YHiBCex8BjehnBp4VV5M6Jb5SBRacyWFUNebmDnnXntKgQu3KgyXTqSYkEYL2BGBckB9CHg",
  "key17": "SEA1ESNR24zuru26yu6qh92L59S5XWrFCbnoCuyX5K5s4M5yMtUGiR2pJ7oQxMZZyCXBkVNTbGKud93K43hqHMx",
  "key18": "2RAMuDDDmoYVdgbKCcGut8qqsLWdH8MvS6Go2KNqqocpwQvELWWUn9moxwxbEgjBFKUQfyUh3jqjBGPVhvC3jt4n",
  "key19": "5y8L5kGp99jeXVhH5emA13DEBAibv9hmgrdiaeDG1jGbfjKAVcuh4f6RCQtQAK4AxJ5wbELpLR7fdD7FCMwGiwp7",
  "key20": "63Ubv4wXhtcGYrW7xAPsLWRNfZQKD1rhpWDNhEJm9hsvfdxcFiKs6P5wSka8fsNkN6z2MkPSqBYkR3eESr238x8q",
  "key21": "3AQ9niXsYEaC5dfQtbWwvorutUrVBBzdHC1gvKWiTEk7gF1gTrwDukAXZ4pPSRZWkXTuYMkwTHjCofiCb1gDGx7s",
  "key22": "BphP9fAXfcPga4qSps223XkcyrQ92UFgt2jxoMrrxi3iJEoffHGRrfU9DzEd2AfrirP1sZ5P5XrG9BSgBopiyw5",
  "key23": "3SHSQgtqB9Quwae2Hp9BwpdKWyH4Mq3TMMQ7wj5XutySSTEp6bpx85hZL2NgRPdBYpyx9umvEkRxPnV78fG6ozsd",
  "key24": "3sNZJbapaBZS6dT9B15h15fNzwhJHrsUBYg4o1CfSa4G2jGw3j8anhvgEM12p577Jxpp9mQypWatpdnK1sUG66nt",
  "key25": "2Jh2csrwbaqXMbuvrU23X4cvYZo1AHqktoGtUMKHST5M9A54497fiR7TEJpnfqMMAZ8RNz3xwHVoUF8Vns48jtfH",
  "key26": "49tYeBHFQkwTS8K8W2dHZVN8oByEdEHMygAnqb3M5u4PnDpdBSer6SgkuAxHxWQgz775qcvmtyaC1HeRK6BqLV7C",
  "key27": "37WJFnALethixLawxbRTGsB2dJrY4yG6ARfwaCeUug1Vii58JBErhmg6FiqZUC7J9McEF12ecrgwEy9DMmpeh3Am",
  "key28": "3cn5YgmFLBcHT7weWr6evmy5FKNi1DJwsi25uTLrXq5BAvjSoP6MbY9eqdAKKFcqufUbUcUrdx9CCvrsPhkrw8SV",
  "key29": "EB7mapxmmoJKcqHpEcW4S4eKHDfCGqZbS2EMsQAcu5R1YJZKfnJG1ZmBAopvDWWyrSDQiMY3LR8wnGmYxaUEhVR",
  "key30": "NdSvgKCHdESDorRJs9YETaESp1SgFaMSjBP6RuvdXNXQ5JLG1eqN9y2dsZGQU4n4wYEQiHyCPsbRF4F7rEAEqpQ",
  "key31": "2swZM2UJzreEoa74io8niLtKBzhpPrh5JN8NumChjsZSZtLJSV1y2eEbvCdfYy797mdRrEwpC7kFsFsCotTF4HXD",
  "key32": "fBBRQB42eCssg1uxMXwLrnbk5cTNxnjEJD2P3G6JvfA9uq6pjDUoUzNiHowhz8QWw54AXVLgv4cD36kXr9KQeDk",
  "key33": "4gKhpUjZMihDpSLovctVKvPC9YYF3CFNBWFtuLoQ4V4pXPnYBVaJx48py4Upp4FABSGm9SZBuhrgcdosTVDfyuv",
  "key34": "2qiryV32q4k2kCG6xrnoMXkPgxrnoY79BERKpE8MQZL2QNxr9NNgWqZZnuYdnEvuXagUWRCxyZZKtN1oEXpuAqxT",
  "key35": "3PJqa2V7x2AUA5SiAYQUiK8b32m9E2ucGLRjmUDkuDid3DxKPWc7kLSLE8iJknJbHBhV7PVuTZeARthPYvSwLqen",
  "key36": "2bozUwV7iHdBuJYbqofCdiNXSpVGbH4hP8zT6D3syU74y5MgzK92e1kHJgEiS3NX5V3t9QpfJKWHZxUxCMKSjspu",
  "key37": "4M2gw595ZExZDz3EhPiG19LHvTFPmmZHpYRownyWffB7qNQhpE1cdPSVdKtTGYm6EzBsY4yEXhTcuWuLgoimfAi8",
  "key38": "5Sm34QNLQ9jzr7jFdM9ExcVHqpmdGxqwEHF44YdirtHh78XDPe9hyygZtrAjheeGApc5Ah5G5FGQmwrdxXZjRhdm",
  "key39": "3ucHwyaEZv5LhFAYZj5cG92Hybx9sPYxcTiGizuXuTBDVa27HNmoWak3vpCLQ22FQEKWapEDqU6b8vtPuVzU4Nq4"
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
