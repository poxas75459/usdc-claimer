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
    "4auuPKUyqXwzVHtRYcQmHDV6G6fTLdBGDe6g9ouu32j1Y83oHCxLpDMmPj22dcPqb5Tq71RBPD68ysLrCjEmd8BP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58w6rtXBACi4xyPEnYm2NNVpwuJ52UaWfzEfnPgEK37QudFkPjuF8HqJbJaZfpdjGRAwW9iftTtddC3v5Yk5EBsZ",
  "key1": "22MhyYHUv7qnSA5WNi58hpoj7RTFPPnwKSfeWPvmqsRhMXkrG2sP2rmA7jgU7SKHW2XJqYvD7fa2McFQK1Q83aeg",
  "key2": "2qLGPjfXjx5p967C9fLGwN17gfLEKLsnu8JSuxcqoyxQorjV6NC4s1rM9jrfjYTfgApaW1R4XiUE1EpigCoMSGNw",
  "key3": "54rts8B49oa1eMcAm4MLyaVsyaApohZe37kJ1zZSnpx8mXY1chCrE6PiZBKSQBi9P6w9YzmPcAW5zZHobBTUwmSP",
  "key4": "2X1QtZnamhWPxhTpSZP4wqE3hbS6NQRLteP3fRwh9p2tf9ChKf2JFbkDABsFaT66YumVerwmemUWfpfd5FoLt7UL",
  "key5": "6QdorZEm53Hcpe58exb1Mi8vpCFeXUVcjkmsHfBbSMnj7Wo6AK844D6rsBzJF6wRzDPgNXnct5a6vBkf8HD7nte",
  "key6": "27RFuapQd1pFEUMu8VtopseqH6uKKgCw7wconR6E7UbzLJWBipXgkqhhFtRucLuKcwZNjBBodherUoB28ajLVxsU",
  "key7": "3ammd3GmxswkvesxC4FroB5WoDPVeG6AP4NGE6geadLJ7X4bLygWpRYksK9XZkESCA8DWMLWNaUBKwgHnEz5dVej",
  "key8": "2cmNyrTe5Wg1RyN89whbDe2nSGnosNMuAZbHChxgNbsgzUchx9aWoB8qvhoEpmTt81horiwX2B5wHfKZC2trd2Pr",
  "key9": "61tMZRU9996Ei3TTG991cEzGNtfZN1SFTqP3hbsmuJYk27KDyqV2CwrVwXjveQDjYABNm2k6XSjToGEcGRi2tYVZ",
  "key10": "2tD8EgZcP9sAW8BUgs8QBH6Bpte2mAX8E9BxbF4pja2LGNgrRq5x5tzfFD4TLDgWvsbP9kNiCg5DGTmLAGQHptHg",
  "key11": "4ktVL6MeXFCDjehJSKvpnA1V7eJMjW5ySDQ6efid1W5riKyCM81ETSYUJ67oud3RRZBjKLLZSdV4cKLys8QaHef9",
  "key12": "5LH2gjNNc86aU5jKmgP6ZtXAkmnDbgKUo4Srt8x8grwAr11WmGEQ4mn6PvxPBiUsKiYoaNMt8gb3NkNZgG6jFkfd",
  "key13": "2fMCiAs4zDxUJQALt7AmYizvGrgKsrQ9BSrrQiGHpZS4Ri65K8KYhjNGS9zUkFmh8XJ7fBXWougz8fLCVVQ2UmAa",
  "key14": "2v4fHJGG3F9UouKYcKWZthUQDaiHzQaExNZFKwsjnLVeCcT427BXag3YQsSjkAJ1tWLKg5o23jC6SEQhP2bArt6x",
  "key15": "5QLE6BWGVR1WHre638b8vvp7ry1eCKdd7acLJAA99w6jf8vNG7eebiL2bHri6MNpGv6cKUpZiYrXfo6ejScne93u",
  "key16": "3wGKm9i8139G2FXjp3RppZkw2HSUF7Zc4Bavn7829rJsZzdy5xwjQxAkLtNfzMUMxDyXLHZXYmiKUY2LukE1qAaz",
  "key17": "2hcjxUYBW9t6HpFKtbZcgu6U17WYZZrvCwdmbbNinWYZSxDFcYpUN6xhrBofaKZNQBNUES1zy3SY6diCdXwQfj7Q",
  "key18": "3ZtCjbhuPwd5S9QCnXj6CyX2g8j9AtNzmhoDTPeAw974KNPpV97CdyqzYvY5ogwCLpEoirokHxRNoihPrdZtHEuJ",
  "key19": "2L1v4ETd9qfqKwgR17rVLc8Fzpmvs69yW8a54QTvmwLFTpWFC43tdB64jX9CBGYsJouWYo4B2dH3FZAWkxiU5jZw",
  "key20": "4F3uZSyurouFkX4rGNTnBAzCXNNXyAboc8r22YFmBXXqmoD8J8as7t5DM31YhZz7fpWwwaXQLEuTdTMG2hCSLpxZ",
  "key21": "3Ep94qNzietD7ife9EVf59vba4amQzCx52bxPafcATnnE7SERFT4M3wUovfPK1Lf22yvP3EZq2u6y4AmNyiZoscr",
  "key22": "2bsD22ZB3Q3qfnXckjCPoKaK5r3eRHoj2Xgc3p2D4y7PDACY8mbcY9WTrjt2CfAAw3naRg16AydiXtV2nZikf9ud",
  "key23": "2HZeuNcTnVPdAa4jQNwm8hwSRBhELQWdvYbxG4YEaUWQJQEpXDnF3ZkeJ4iDmanNnuTTzGbVY43d4yC76AmjAWX3",
  "key24": "2Do9wtnxERN2FDPNzPG9vtvgLQpzcs6qPDaQHKi5rnP52SdbjajwMABLZ5DDFC86KRTUSbNAQLZejEA55Jb9KQbo",
  "key25": "wvvYbSGEeiQgxBYAUncD74MSgk2Gr2UCoZjiP9Bck65gtw86hEs1PK4KPqAewKthexHk6hxRRDREVFtEHRPdNtJ",
  "key26": "3G7Lz8qmiBiCcbaU7uRvvNzTizwRTTK5kwnPCBNkgztCyX8zwNzoG1Sxni4RSTjLm1j7KMToSmaVzfR3SSnWehWa",
  "key27": "9yUv48sGL2V77segLuNKaqNo7VDAf8bgg8g1kTkLeezS2MiFsfx2PTR9jvu9t4wNLdFf791FUsvtJUtxbDUcycJ",
  "key28": "RXczQ4fKi94pii6gvsbcuW75M26K9Kmt3726CJh4MR2oYtZNaFgP25jf5H2x5zQtN9Atq4djs5wddLtb3D3QhnG"
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
