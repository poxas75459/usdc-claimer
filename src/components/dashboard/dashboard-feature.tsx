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
    "d1owGCpczGRrBjdxbLUqEXyiqnEPRma5mvYQrPaFZcHEeUBknVb8C13QCfqJGJkzKH2uwRb97R1GmydkTnumyAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EHHCL2mYpfZGZdg3cR2xbid5qoSm5VZ1dULADKS9eH5c1GBeQMq9U3yn2bFQYt6bCQa9wiuq6KjYx4fDsNM1u82",
  "key1": "2X1E3vUKRHBnUW9e91ZtsLHWisJoNr9ZRVeUmWJpGqKtzNgXQE6Jrbj9XyqUt3NMtPrmtjvi8nbKdxtugFNA7UFq",
  "key2": "3jRbTQLAd7WHycgtLkrBQi5SRZg1Kv2ijq5bkvm1XGRLGSfNoKFXuteXEboMwbidDb8YCPvSpBQiTAWK6i6cKnrg",
  "key3": "3mkRQpmSAHgH9Z5c6wiU9CczEojBYeScL4n8sctrvWDyu1z5U6GzCbWmUPi4ck49nJ2Vh8bs4CEGjYmd4azPvTYB",
  "key4": "NsA19UuV6Eb3X314wPGJx7qvPX9RXsDqmvExiZreez9P7jAtiQ9QAJiEDMmMmVJKg3XAFLydEGjuZ2LRjJ9KPCV",
  "key5": "LGdpPFuMbyJwsvpo3hiAP3jHEuHBTzs5GEugEmNrkhqCG17Z6SAjhDVYg7dnhqAkqubJgwXms3gepikyktWiatj",
  "key6": "4ZH9PEyV3CgmSFTfgNayiHqzytUDJVyZUwgR32BTECqXabcvMXULp9YntRMvozpssWZ5o3d3MF3LFEcPXFMyugdH",
  "key7": "3M2YN4f3kjZk6fzwa18puq5fv1yzvHiyzaxL2oXdh1QcQw79x2Y5X7vwLJGt5mWsfn2TugGS4SzZjW58DUxtJ3M1",
  "key8": "2gUJrJeyrvHVipKShMbrdz3Dhog9ueNcg9VuXBXfYH8a6788ih3dqa2CsZ5DFcS5Bn4P7fuSShMPPUSA3tQLWU1t",
  "key9": "2zdtpH9KPQJ9HyYkuM9X7UdeBJHBaAwgsm5qWT5GWnCYUa7ocJn6pfaG5kKpcgVkMnrq9uX2QyVftoetK7TSkiXy",
  "key10": "63eGESkP4fR4R7Tm4rNEG7DgEX2utqa62hsoR5E7N2YKSYFi9Casz3dit4Ptomst8XRaMDmqU5upB63P2hCBrz8J",
  "key11": "d5dVJUQC52nARgUXbcfDPQbvFTEDxZjcBktb4xsn1e3hiPQGjYLTzCvnEPtDbE8uymEsPtSa7d7fQRQceUStewz",
  "key12": "4PRmcJUkbcTKwmWqefzg8aMBw2cDjV1YkVtParyaFzQLtfhS49ewoSQY6p7AGAhyB724Sj5YpNDaS8fSUauAULNH",
  "key13": "2KPvMYKqVntYSih3PZg8RUfRV9SKCZ1qpPvJYUASPo8t9oNsEt6M13Yhygb1qTprDwpivQjWhZA9G6o81vKjUBVe",
  "key14": "31VbhA682Vxc51o9zXFQWa67b1jdBc4aNhMdMUY94PVLXsn5AQbtGGBQEAyyKsP6A8rnZWNYRVmZMyrDdMdJM4EN",
  "key15": "5Y2GAkdeVb5r9wnm8575jUMc4fPzu1m79B76jt1pwEeuNHEQFDutt6oco5JaTwCEtMX2Nr5MwJBbNGD2Pkp2buZH",
  "key16": "62FtZKNi4osUk7ePTaRm1hhBc9cN1iRxkhpeaavax8CXb2peBPRfaL4oDu1665oBXw5jh7obXbFUxBiEH95zRhJ4",
  "key17": "3UK14gqj6APu3KomCkuGAWb2XuKuBKYVQFNo7eC5dEaxFP3dgtug7w57XYaMXpkaSqwDVt6mzDxUtnMwkP2FhnUw",
  "key18": "rZEDRrAUUS5VrKBT9R7Z3YQ8D68XVTBNp2FtwPq2hCmfBRUcrstQSfzo3p2nX3hCHy8pX6LD5B535WtY5fjV9nQ",
  "key19": "4dKw6HdWm4HM6FboZQi1S5Jmwitcji3ScKD2CX1xm9ahFmVwi8qyytzFTqLExkz1BTTn4BYxN7JjJ9j8WEGaeiU5",
  "key20": "mocdMytFp74EAqdpRGU2TpuvZ7f8Lyd3dC1J8hNsBM7QsosSEwUgpRHiRCgtUcMRph7kuB3V7yF3zeBnRxuoDgQ",
  "key21": "a3uduyF1o32Y5JLnrta9zZosERXwC3KqrtBsPqvpo2TketL5aTJ4CoKeBAB5yQu7F2z6iJfw1x2Fk2cspGqmDnk",
  "key22": "4i66J4EEmA8bwgQrpAgiiQDpceG6s75qwntuhSrfvQ3Vt6Le1XM3NJz5t6LJ1BF9xqbi1sxqb51obhVLHSJocgK1",
  "key23": "5F8fjKQAUawEmBEvpxtPDshrBSBgKc9MnXMzzWTU6mgUGDZXLU7Q2JWGRjmcst5sdUzmVj24dcGGtoCXMkKBSKkJ",
  "key24": "3cXXVwoKFucnttMurTn53mNEUtE9J3gnj2rEXoi6x6bCwcJtsvbhWPocYWzxfQ3SGWi9mSsSwusEAbijEprQ33sq",
  "key25": "462ib1sBG9A5wQ169dE39A4Yk2oKgjMLrb3qEvNCRtiJ3X39i683Vt1V5atLmc1Msnf57pQhVLJs63WS712A99p8",
  "key26": "5J84BQNgdLYKcuYBaFXPB7fTF9HjgQRkFRxganUA7bmiop5HqCagKr4uuT7FWLXbFjDCsY2kdsfz3FU7Pu8wkPMf",
  "key27": "3pzU12FnmzPR8AKmCHYUCbu2AgTzntYkEAtMwQS35YMhEfj7uAe5B5kCrPyYtvSUpxPKy3eYVGWmwr8yqCfh37AA",
  "key28": "4vpkLKvSPp2GdL4Zitb6ofCEG829XLJti29e2vfomyFmxvrUPAyAigLvr1iJ7mgszaHyXY2atB7BKbj6XJxQp7fJ",
  "key29": "mFnJAQX9UgFrVAU7nFB465FexDvEDrk4kyy1JzidzEpHBzrdrENJxRqAkVSucx3Gym3xVCYfRuLtcsaL4k1Fc7B",
  "key30": "31Zrebo63kYZWUb9VobHf37x8VQGYciZwqSS8ktDF3r2rFgDeuBhzqiESGr1YmZrXGZSLhkMQ42ho5KjymdsJxbZ",
  "key31": "8EKQicY4aBWnoLCCmuE7bpvEx6VzvCrxFfyDQGFUwqEUWiKzqAXhbzckrbGj4LfTwxAa5dsjbH6dC27NCMkHH8U",
  "key32": "3U9qevvDLmK56HvYHXF8Wt1e64iMdco5vrVWmSJbETgVVfXS9qZyrssJcUFdnQ8SYhPLTyLqzm7bEvzdmy9UbGKo"
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
