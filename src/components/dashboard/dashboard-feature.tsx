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
    "5piNCqTmHKD9FgvU5iG7isvSsWqQ69J1A243aK34hw9vLWcPhKLn3nPo6UGBo1XhozpNpVMxY3mxdqZeK7AT8rxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rMkJ5xTNBCoxhV2wPqn33wZzs6gZu9pJhyWPzaz4iAMnZzKCkFypxxWx91vT37XMn6TnEMNuXfrqJXvXToH3MpN",
  "key1": "2tVfY4Z5oCA6nRAdVzJ1Xkp32ZBf5Ha4ivzkKkYzqpP9DK7dtvzxP14F7Tvvrtpk4NGLFrPRt37Z7ArS73EP52z1",
  "key2": "652oubf8EWwGyucQV2nvsRUGYaVmbQAD6P9SEDJEU6KVm3d9S6YfNQidUubvCkiUf5sDvTZdPK69rrBNNCgrnDLJ",
  "key3": "2tdbncWng9cZcZnwtxBiV5Uky2sUC2Jf9gwNbRf4xdV4GAMzAiPTVmNbFoLaBGY3wrWLneQCGjAg98ZubFD2DRd4",
  "key4": "3r64ZuEVdaNKyWPYZuqFtfQzCKDQmEhEwSjkHeo3zDjS63epLMCDAJSBGSwbLLpzPf9xTgK9zsVpSdZSdvhBWZQy",
  "key5": "b8xfagFUhnTB1nq5KU3WvTbC1r3cCqtjSrpDvy6u9kQ11PqYfky8t6XLizS6ytgMJzZ1YYiq4JtuJpR3UG4Qdan",
  "key6": "4Zn5dtTcsmMDgDm8eBc1sdx82wrjjmfyvGVv2u9NTTTPniYE8ybEwf3e7jUQwqp89d69yBwa3kKBPJCameB2pfXu",
  "key7": "53XE2fNoGP6BiwvtPaXADg8XtyogkaWDLPXLLxZ5jLKTXdECd2S7zdQDXaTPHU3sxzh7ry2JSBH9jS6Zc7CfKfym",
  "key8": "55bQdDpYLR7tqrsH5x6zLAniUu4qy1Engh6tgqcdzwx21Qpsesc8sm5HR4gQMEiSxvJiPvk82v9k7nur8taVssrP",
  "key9": "2hZBuCJEGkQxwM56ecfkqENrWf7gDiCGzzhro943SCuT73aj7ELkSnxGGD1Ez7293fnpLiLmvhLzTpE92B8jSHAX",
  "key10": "36HLGTsDe5PgttuCCFm8nYqe6DaceJnjzpwcub34YcdUfxzDWD5nuyUUhfic7kxcZRUpiYmiAixShEK9fvtv3J3W",
  "key11": "3zXobAoUG9qTpeZ431VWZjUcXfL2amXynm2yK9GPdvwDeW9LFH94qscEK9CZx8qVTtti3zTTdCT4ojDC9ceTio4i",
  "key12": "2PvTsbDrzj1TDQU3ivg5UL81B4voekrs3SynZdHi7GGc6iWhgKSzvX7UFtvwTgT5z5EozYzWS7NozuqFJZnyeQFy",
  "key13": "tTX9TdNPkCqLg2K988ZTf8uoLV1FBLQe7nY2Mfmtp2KG23TkdHSXZUYLnyZY42UPh9Ld5dr8D6nXWFuqSoUDWLX",
  "key14": "PgG6on2NFdwWVZ8ov3j7Dj1QWk1htFnjQAJxg29eLfKJRFtzRgtSC3HxNAhov32xK97W3wPeJMGkyAy26MYDsQv",
  "key15": "rx9e83ASaCBWvPbWiqoikpqbq2fu4uUBYFBmL1YkiUDdTJAWiS8dkmBTmpG26G54uqH5VpoKk8pUx97ZrcaeoiG",
  "key16": "47ei1NAaM6DKoCjcDM23vMG33NvoeUtDmakjMjqh2Y7cfRDGuWFceZgm9nqongKXeDzVUT9pVvGdf4NZmP3BBiE1",
  "key17": "4gbq7miHVxzRcSdAd7NzvAHNSAgx4Rhxsm39WiRqqo66W1ESmLaYTXdMamkznReEvwfhr9e8Uden2fTJLEWvwGA",
  "key18": "3Wucme7ZBq5vcsZ7f8J3XFRhjTy6kMY4RAxiDDS5nR3VR76cDmMiuPk7VonmeY5sivqhpXHbDpyUXnZ4osVc1HWT",
  "key19": "2XoUY3c7SUsqJn4UpFmTjHA9fn4Q24krRp6dEvK5yV1nYPpZpsxL2VFJvg7JnL8RZA2PTFR7TJRozicRhHZae2ga",
  "key20": "26RWxcFaKVSBt8HSS1MygZ3Li1ERAYABTQjKDnWrHjdDcv8bNP41447R9EDTt2R8NHXh2Y2f2ud9TesiM3gWkw7d",
  "key21": "3PTJz5R6Gej3wEX1g3JpxypK3ZgBVm1me6yGUmuJv1nEWT3kPJ4po3CGu3purXPqpRQNMeoBbY2mXoEGCyqTzEqP",
  "key22": "3Rg5rFrit2K1bMzTsW1rzrx3f8yVykLTDAdS7ATgJTHrCwWKeFDKr9BpTnSkodwRVJoYVm17SC2yXw8XXvNkGQd1",
  "key23": "4MSMXVbvg831LtLp83XhYFruqPENK8R3eZUPrapaw5jjZeqbV9Xdn36vuiADWABDSf3spfevegPP4obTqXiauXLL",
  "key24": "7Afnphpt1GNiMZC9fSQNJjLZmvnrj7HEXNSpApWBVD6aam3aiNsAdUt3FwmtX2pVLBG7vjSBKFszEHdCjW1DPta",
  "key25": "38s5ecqaLBatCLD4j9Y2Bzdx9QkuVVG1vSXKAx6X6HLdkK2SST8rVfiyNQc3TTWovypnnEPL3mbk8qgTW5LRispc",
  "key26": "4Ez1qqEybyc11gwaUBK7jevSwWuLQoqBG8RQ48b9hxV7npKGT1zg4LGZCkCGjpydvJVJFxFuhfqR87s2ErVRmiof",
  "key27": "AFfndXupmAh6rU8Byp4BVvgMvARJdQY8m52ERzUAFsb9ECbX2GicKWDwonZHrfbf3jFHaP295r4rvVusAE4YdwB",
  "key28": "5CXW5TB26mcsjde7dGeLbraa1LS2J5MauxdrhD4WNKE1KMW3F2WLGNXTrq7mgktqgFz7ovfXe6aWGYPgayMYqrBx",
  "key29": "5bHgbidZah5CugyKkyRXVatXCjryZaCxCi8VS1NWdjReFggVDGU3gH3732vE4hBUkDvnKxKYGhK3Lz6PiRrEXWxb",
  "key30": "yy6H8toYYeLtMFEbpfKgzQEUb1fLpM3Pg73Sa1omLUTxgfHK6cLy8uiMnbRUuB2DSjzrJv4henmCwRHYSBCwadH",
  "key31": "3DTxArK81wqCuNmCabHcfahzTX89fdj14UmobQ7RafsZsa62U2XePvoktc8888njWuMBZ6YxbEpo2NLF1P8U9UTJ",
  "key32": "3Jh3E774qRfpgp2CHtvJiPRsG92gAnJK8NcMySs899vGL78wfVnAkayJd2W8gXKf9Ge1e76XpH38jhYzDPqCRBwx",
  "key33": "3X2XaJENggkRJ5WFRpsyY15Aaj1ekLKf7cE58VagBoRacTKbsCxaGzZxraSNqLNeNzmmonRPgH6LuieDpeDtq32g",
  "key34": "38zrw5kw7vGMTKKE7hqEdFPwRCoLrjziDaRtgD52dMhPJwUuc8zZDczUSoa4m9xYHJXvex7jxT5TJE8DQ8cwc4f6"
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
