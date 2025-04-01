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
    "2Rwh1ncE2SnUTgibRnN1Kewzwef8Cxmo36UUQY5ZgtfLyiixcBeKVoBDZPccuxZ6LsSN51k3ZwuVucmHzJAqhcys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xXMdntC5fiH8NoAqstVof2hCeoYj3ndWPSMCUUh3urTdiHLBiXAP87YW8FCxohVX3KDT4ia1wauSymqCjgJu7L5",
  "key1": "e7x23DANvZ3Zvumzp4UozGGpKoKGnxmDxFYnJYnQ3Sdbv9ZhobzjRzfhhm9qEoTxajgGavM89Yzao7ifxr27S1L",
  "key2": "5aYfwvNmgVZyB7L52bvTHm1PHib9Ui4rMVRKePy93pv2ieYDDtwTmFxkscjEBC8U44Db6SxeMFb9VSPoqfYQdLsp",
  "key3": "3bkRLLCbN9GmjKP6ZnGEfUem5MQ9gBdGTLTm7suzrysJA1pAZ2TYKFQCLw95hosx4GP7QDsPKmUtkmHocQZFbUqF",
  "key4": "Si9h79iUaKz82jimyK3sdcNK8GcgWh1DXjy5kXwJ9E3Yp55grFmEusdCksf469CJuzgHfU4pt3DQpY7rLzqQeZ3",
  "key5": "2Q5snBAYH3Pi2QryM8irr7YdmHEV3F65jU6BSj6EQtmyJnRGgyf5Ce92tQg2wmM5snzoZUnXV1CNHTEpvfgn4paU",
  "key6": "2hKmC8BTQyMJQWPw1zfEhKKMdZYfsHQoomoUUezQdDj4r8JPTgwd1CRg81HDy5SMQv5Zw9fN3AMUt29i1enFiSir",
  "key7": "CezVrDYYzqxxEXGUWKUtBXh45batY3rAZVEdUpdLR1jVP4g5WuCGjqLEndebuzFScfy1M8zWMuTREWeyh4f15rA",
  "key8": "2DJoTXrrrFTWLPVA6qjXDUwkR1x7kR6PLwWNpgTvXgPoywX7KF7r5oNWBuFkBFwy3PxvR4qr395y8tEsEn2bVyQ2",
  "key9": "37x4wcVWJ9xPnuuzDehsKNdGRqiaqHoZg19mZtcCXpj1sJvVK7u884uWfzTLE6AdAmq5AxtxHhd1JbfpbMtNGRhc",
  "key10": "41aEKaLHqomxEmYhTcyGCxhG5EQvWdQQMFxWFfuJDZMEqa9fn6sjTTGKSYYanNshczvdU4FnMcCzqtHr1qAMncow",
  "key11": "3DNxVaqrJ9KopyR11cLiyNcTbGQ8qm9NcRCeH93xgLmiJf4tqpcTiunKZN2TpdgrFk9T5oDbxNxDQZYS3kMdBjXz",
  "key12": "3Sz83s7TdWfADKJRU1UA6YpDqJwCZXj4WpJWTpdyv1W9ynKbCq2SCAodyVDtxK3tnmo8JXzAMEiCAmfsQwjWEqU9",
  "key13": "22DbKeYC8kaetdX5Umq9V62ygwjay2EmEq1wBbBQtcYuKWCApiWCjJ1dfzCFjvgGbiGkKbAcAMBktHiNyerp575P",
  "key14": "1azAfMkRiRDpJtR15Uo9hBYWHSxYK3T8B31pYXTruZytkT4Npm6zTpR5KTR5y4VZjsDfsWcyHEJoLMizvNR6P7S",
  "key15": "N1hMZYkH3iK5pDkV7H9JbkZ4MQNRJVPb1ydkB26KAeBwJ5SxHjou6VbAgo39TRHzk66fP9H2ZHrriWxkYHY1pZy",
  "key16": "4BLeieoRcwFTRNwudMWN35xKZQD4xQ6e8sb9sWoFNTs7mqGLqvfyzaKr6h9DeeDDMF2hVsB9vh3xm1PtdYCd9or8",
  "key17": "sQ8qJxrc3TtZ813cjGE2ArC4DaGhFcuHFxQnorwny1x88roeiWqK4fHL2riffBXdDGqyto8Rt56Msa8cyFAq1G7",
  "key18": "5wDmqPPob7RZL9YB9eQ2oxTyGsPc2EnA8UUgYPTPUiysE4AHYtMzfGmCmoDzx792JREkEdgyKcn2TtyQt55odRKB",
  "key19": "3vwtRu43nSpvPBSzmY49nYQ3qPzfknZSthBZ5PtkLeewzddozUztfkVCEzcrZyqWSJM8Pyt5XdF8JKXdbY9y3Cqf",
  "key20": "4WRVy4CkdXMsDSFxUySnw5Ywd82rtwPUW75F5oVXCmjAqsGqzJJ6WKQJNetH6vjK6WUU2o4jPVBV5pWVhYtk2TGF",
  "key21": "qns6osxKLfyNFgoSXVXLmN5tFt69wsAC8sFFTpyYSdd7DLAasCPN9cdEY3xPEQriukAKwsiMDHouCDrVnfhVBZi",
  "key22": "4zAwrssTer69QH7WoD9D1Ng7UoS35p3fbfbSjtf36sN8soSDtntSpPKFt4diPWKZDT9HQZ4heFEn2MpBWp4psxDs",
  "key23": "2Ja2X7Fz3V9bDBs1KSBd5eA3SPGHYSfgm5jCojYTtfCb2oNpXKTAy7U3NAdLgTyk4XT6dU5PPVE8pDoxqm5HZTPQ",
  "key24": "4e4r88RPuKJCRK31bqjS6x7HvBZHnPrhLxtFwq7kcWj3SJbpe9qaacP9svABqJP2Wcy3nwXbcueZJvCVUSGyxVSn",
  "key25": "2vrkyuCPKPb9xhWDgN8WfbpiQaaXVcYWQcFhV5ELS3ioY4FKwk9CasNDNhc1SwJs7mBwNhQATcB1Szf9uVsEdeqE",
  "key26": "2LZrfnPVT2zKj7Ed1yu8V1LDs41vfazi3zQahinrYeJC8NRv8cTFFDxcSJYNauXTq8t7xMxoUnunhGLLdH8Hgdta",
  "key27": "4uEvKwMEmFhTqmJEzUfVCVsm29N1MUjQQroqCoPpebSSbPPWiTjNYHcADb7DaMZTGVXTJex4Khci8uRRjcrrGLi9",
  "key28": "5BtwuUeCRaSKk7zaEiMnKSbZ1hNRfWnngTPk2vMN2VFYcked6DLJB2hGWTnYcHeNUfMKLfb5qootA6xkSeuAbgdb",
  "key29": "2LUQUnGaMXEudx4DSNCdA4uJRcBg5KwCax6Wvm3J54uaW8vnnuGfkuCcvQgCaGf4msjqdsAwnUrTWkjpkjaZt6xC"
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
