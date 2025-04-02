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
    "48Pycwr2GyzQTfGWCG16t71nDVCSjuB5ocDH2BKYU5Hta75Uub2KHnqW4Tich6486si7A84KQJgUM8iepTLtK63i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kui8ENsLZsRaZgELc1PSvhDdQo3QsXrVoBEJ5g3ht5waLL6di6gXLe9SChoVsPjFhqnFanHAvYEQf3jzJ1AfVFh",
  "key1": "4AEpnsd9PsposoBeY2Kx5hrHHy5WWAxt8VReMJ2HkRou5mZkSPi1Ez4b7iZLH1bFyEM9f2WoVmEiFxcDSfy3Q2qZ",
  "key2": "5RbkVSg4yti95rRvwcYJoea1ixPc5skFka9vTW9bywegQksnk8EFk1GRjTvMmKDRq8E935aXY3b4pZJHqwiD7uP1",
  "key3": "5VWuxqH7H5CZSsDtWB8eekFgYtcHEGVAxegWjnAdZwoLYjkMw2ayMH6aFog5QyzsUaCzBRQEKVEH4SUYVjxVkWUJ",
  "key4": "211UqHxVryfLGkz6Ki5Hd5XTF3H48cVNbiFJ18GhA6VKu9qNGDwKhskR6dZ9aRNPAAnEUcFtQAxpXLssfj8sTNPk",
  "key5": "57JGJqDnawpuEiCZYeiZzP8t4bKTRjB3zBBVPuBbvS77aTpvRH1FxG4EUgfcvQhRKK7Zyfav3Z56tv7vv3KryGpA",
  "key6": "4rbzv3Vdvk2oMJWtKWiirpW2ibetaU9keofRpLSmJLy1T5RqqA6qwFCMvKt1Gb4R2gkh96rfVzj8gxaHFXH7MoRN",
  "key7": "2UjfhxYxWoLcmMxejuLyb3nsPHDNyisuGS7dTivrQh9Ryb4ZKRKrK1aT9kMmfvXsxMzQaUfES2YFr88HTVVcSyg4",
  "key8": "3YD1yu5cQ1z8v5pTQ1JS7zKsem9tx7rvqDUvzgp9NgErdXu8BNEbUtFanKQb8rzQeScwVUgT8yw5uVBCQKCakffB",
  "key9": "395737ss3qKAbB6V4mYr8FpAX4BjfwyqpDkfWhPmreM8kwcJoAX4xfozH6dC9dbHpZwjfRQ97VCinC6AMwiT7Q6m",
  "key10": "3M3Lphb7x2sXh7jKTrhjYCweh8KYFBMLeBEcUxReRyXZoFJxcyh8PmtvHhNEaiPNHVqJWkk5yy32sGo8wECrgncd",
  "key11": "3rf2QwuXpQCttBwELMztZ2WFSxT5Cr6wp78tYSmxch5VhmduZ7Cc7ymuRoXwdgwvJ3SnMZMbAkdpnXGDETfusM19",
  "key12": "2TC3KYdmn9GCvHXNibDgCpoGTCovh5aLxLQKfBS7UssxN3SvGAnwoT8bJroXLY8JoqE1pZM1JoRTJos6JShQ9t77",
  "key13": "zN6QnGK6UGB2xEpKLqfqMR5Ppj8UdM2HnRdbgdcPNXmyiYHqMov87varoWGCh1gxuCyrCSYUxSxSR3z638EEPAt",
  "key14": "5GnbFYZ7Y9zCCseFnzEtNH3otdmr5qeKJLscNgzXXTmDxwuc4ntJAnG33VWuZM6fdwTVQ3Mb56cWudyU6CUvWyhX",
  "key15": "Uk2h1AArPsPMQeL27VmFmn4deCuCcyg8CxCmjUfa2r3oj8TnwK8hPUieSzn5AAWqTrAPM2cz5wQCRGL8Fxumg6V",
  "key16": "2j5a48gqkTYC2cUtSj8jCKyMymbrApzaXinpzhJPgW3giPKXxSwtwdLJt5Wd4tUktgmW66LLuRwR7bwJwXY2jj9e",
  "key17": "5YRzdyMpGQEtcyVt3FmnVbUD6dGcfLi8s1yPpqX2xkTxAmnJLaL6uRpoUPvnH1xbSrMZ67nvszP1AAvJQpSWZVaY",
  "key18": "48C4DVCCbWLRnHaJodFf62eSG49XLC8LSLRs4tg638nCAnkq6XbhPWWRdrXVcVC7vMvhn5kupGG7zAnB9Mhv9GCN",
  "key19": "5jeob5DtRVZ9zyqxn7qjgyC7PAVzg4UvtprmYqgwDgw2eh2GGw5w9SJ3HvRDB3iyhfN252BJcNVm8rz1kLzR47oQ",
  "key20": "65ktNJAtdm3XgzoEmSkgGCEpfjWXbxik1MpF3ynAEWgYCy59M52NGFpiXpY2vEddZrcWDTdEQPvqeghttLtuFLXt",
  "key21": "5L4rARoB8BLuU5xtBrCDwRT5K2W2riJ1aQnZ2Lqy94BAo67dTLXDzhSF4F3uqv6iMCYZAEzhc7d6QcCS2PCyM8ws",
  "key22": "3BDp9b5Wo6WgemKshnDLHpDL8g8hHQssGF6kgsKWEHRcZCnd37PSRJxe2WCYdhiGYcBgLk2zV7z92xetkUzUNDtQ",
  "key23": "2ZjmniTSx9vtn5XXB5KusKrCD3uSsNmfAPEsXYppyxX415CJHgHza8UnCiM2VYArzdeWkC47xQErdJZsiLFf7V5k",
  "key24": "3Jt9NAqi2d9Y798y2qJTajkV82EAPT25Moafc9gYSD7Gzgb7UKATbCrWd2SUdgpJsFghjDti7Qb15Q8Ld8gcrpc1",
  "key25": "2x5uGnf8FXCELT5ySxFKNipFjjYibFKMNCWMra2AXwp4ZShNW5Dngszj7Vmwzig6nqte5R5DEEWqcjhkGXexsVwo",
  "key26": "3wG6gLr5tPmGFebaRJ3RMcfb79jnLGyoxz3ijKKbB9bDcFsX6xRum5hDw493mcxrn3WdK1txWpdngL4R5jgvmrQV",
  "key27": "4WiWXLAb1KBUABdeRngr2DndACHFUotqGzSYfY41VVYGCRS1pJefQcgRDmZhmzknBKWPcJuAAMo66fcijB65poiB",
  "key28": "2TAbQHaTmkCagoYaPMe3SmLYk9cmGpYeLAF4rAQAF59MvrXuEAgrB7LFfQeemt4PQPoHgBV3daG9BPzTFQnyomrw",
  "key29": "5mwiUHYo2Rz3yUdnh1xhsnkLgdro6qmL4537VU4UN9NBaJSJ77sp4Coc9q9TgdxVuxTnrmTSNzpeaf8tbZD3kGYU",
  "key30": "59AiC4whaPXfHd4JunAj8qjTNJU4d5ouQ9zLNh4DzQkcgJ2aHbTGv3qwNbeKXPdLFR6YEiZSQtDCgYNjLYUafBEK",
  "key31": "2jGfUScAhsxJa6NNjqUpzMT2nFadRa5S53DBmUnHejp5UCJBqTyXAJGLteEB5Bx4p5oWd1Wk2dEWN8xk22mihit1",
  "key32": "53AFecpwEk7Sj4M4Jq9tpZBBwSj6f54KxurUqYVZx6CxwaWLdsp1zVn8rkexux1wf5NruJZC2w7GiZHu8bPF251Z",
  "key33": "28EMk8cBjD1iKCyKnsccZrE951kPQp1TGTbpDcNHmuGj6XsYQwkCjacCdsUuCgrFCzHE15CHTB49vrLnEvwoD5Mu",
  "key34": "4gMoERRYxRj7sTA9VPSox7UMCB67AMrpGWy5DBNCwWCHdF5pMvmbjy9mUuj3m2wE4xKjP5FsiMxsa31iqELDsBUi",
  "key35": "3Y79CtRRX1779hqXsQuf5MENLeUerWL2xco5FsjJR7L1Pk9VvhwWXUXXPBAnEekKgxtrvb6G1YUMDLw9JqqGeewg",
  "key36": "53MJpsontyTk9dcq2Vw6PW1ywXHxYmLRiZ7Le8JnRJ4kTMKQXMhjgTaYLtYzEtvAxSw5355NYu44HcUy8uFrfCeX",
  "key37": "4SdkFX1YeJxCqhZHsghCGvMfTJcsVL8UDgH83F175GjWi79pkmCDXQuBh27x5LiVeRocYZCU3wNujwZghWAVv7W",
  "key38": "3RSL7C3BmpPBEY14pGKeo2aYy2ovucoaADtNK5g86nqdyWjpMo6Kdxpn8yXZXfXkPpX2yRZ7viGhHQvN41aZGMXR",
  "key39": "64mxWPWu23pnhUfUGH7jyPDpuje175Xfu74inMm29at5i19B5HvPVV2w49R9kTzRB1NGzPeoGtKgxjRtdPeQgZhp",
  "key40": "3y3tsduUm9f5EyWPnXa6jCX84GXYBFCSHuygryWnCZjjsoMjWFTByCgq6ob56D1NkrTgZJLKjfdKMAJzJrCgyiUy"
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
