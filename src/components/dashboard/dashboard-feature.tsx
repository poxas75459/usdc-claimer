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
    "3BUFKeKjN4yubaMf3rDyguHymqTd8Hc1v6PphTpoj85SbWopAdBZxoUPPdDLM42Nycv3zjQn3Wg5NjP6nYeHaJro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28bShMMCXppbWoycKrT78L3f3cwUUx47QyQa2thTjsS2c1b6n6qTwXc4jvFQ4UccE2prNpGWwu11JztRVHwxVLiN",
  "key1": "3jwnjoA5BoagBB8C1Z3GiDotVQv2oHUUEpfFjpLsKLYUFoqQU1S6SMVRzcEmywa7k4nzqw6jb9dGNEfiHE9JfVzh",
  "key2": "T7bwRrd922Sjjn3KHGUgqpT7k9LZyKRMGCUcUMHsJoSFvPtmqjpF3i2eqHVLnWQryNxfhKLbsqCRuyjn8WsX43H",
  "key3": "4fqwgBBLkH4ecDGdRDnEm7xmGmYMjCuKBURbTGg7jCDv1nRHxcLoxRY9DpWUEqjGPXqjNLyGmkJSwXKqJ6rCHtsQ",
  "key4": "3WR9LEBCgAbtMfitJsZH7TnsgJA1k7ntWHdh4vAsXSEV6ZA5xRHCbTzCu5LzVbD94zHYeqsmo667uVd8puWq378D",
  "key5": "5aH3WmFKVYAtwP8vRUAgZFn1y5n766vPQcU2hDcvupNHG6WehdodwaCrURSMWvh2Sow72LXzxq3rxxgBFoNRDoxb",
  "key6": "4AKkXqn32ygmffJamgtuXCM2swHYib89hRAgkdavM5kEetDN9Uz7qhs7nEzJFaVYgre7YhgwfrS2YKCEfnxsJVaX",
  "key7": "2KY67dincrVGjesdtFSxn5mTiXnV2KiBPAfQ5WaMtLVJh3ceQPtKAfP98xSSppXkop6oQVFZ9TtFL3e2KHXji8wc",
  "key8": "VejhBCjCDVcUqrKHzy2f68vBFAUXizCyMV8anV8Xx9FuebJeUJMeDjt57LVZWiaU1n3J44cmY1Rz9vV27oFbmWW",
  "key9": "56qfjGLqRFAPrmZVfs4KwgMP489xcm5c351AkgokTkpj9471K2gEeXkHdFpob8o9tbkPrttZnJiMLtGY7PZCKTaB",
  "key10": "61cbm2uCK8xBkmt1X2c5ooQQvrmambNHa1fTeSPFsyEafUCRSi5kEGXmwJhb4AsVD1SMDpHRqkJ3WygfoHArNDGN",
  "key11": "qdWfFzGWzkufsGBH3Z5E3BReDLxqW7bx8k7e5mw1MZbE2CvZVTfycymaXPPS3tC6c5kxRWQHwmAvn2jgWpRyket",
  "key12": "2mK4xjrGhw3v38Pnj9Nne25eW67RfMV7AFy35Z8SLdC3Q4yYMVCdN81uwoyzKnAm6pu4iEV8fHjBzdt8fF5jqULC",
  "key13": "5yqS72VSW39x7iwFjoPwJ9QCQEP4baES9WaYeijCFZBH9PF2w47kk9JTgn6EfK8iJYNBbn9FhwwYQk3Kd5M7dtTP",
  "key14": "5o7DUuHu3sM2GBEpJj7PkRNDC4WxB7vvBoWSQRTLpVirJuZepLAzX5iKBta4BsoKo7xNG1mH7vrJjb4SdVk7L9po",
  "key15": "2Ld1wwFfRCzfiHbdhGSvTRAimB9Hzq5PTjDwWveUWnebQij2jd4Pp76AQVpvacRMPaU35F9TQ2VANT5aeCjEjWQ1",
  "key16": "3MoYt8RY27ET2Hh96NeGJBDfqdV7F4bm3CmNG6o6xoDPvL2i2J6XhTB6oKmqNq8HRPh8vBYxTBWVcrBaaS2ewqea",
  "key17": "5sxEWvFT5XTCWWF3a22t96QoDorQejTzx4YX55caTfkW1HnQvwMUuM2wc1mTDvVTVwzMEhB21jMMAzVRDe4LyDp4",
  "key18": "4uperNZQVijpf4vATgZM5ypTMkdUK2PkPTtPf6u9HJmBXxFgakeTpVq1tBRLeenohwe7aNdPkxA5d1KUB99u75w8",
  "key19": "3QSFhpgMQxURqfnoTNQfwHPmBr33e3SmeYccKSYZcYSYJr9Di7Rmtosj2JKeyzNcE5c85rpk1P81mt4xh2nEPNvQ",
  "key20": "2Ze7vdchpRNWkTHeudv4zm8HG2H96ydNi1HFN4L9AKkivu9qSZ9T6ZxBZHb23xn9vP5W574pA6ppP1D9uuJktt3q",
  "key21": "jzK3F5DCETibS7uLao22iPnSkaWvjoLRLVvk6puzQfDG36ny8uuzhdZmfAKzXEBye3FAT6X4wQfKt5L5adF7xhM",
  "key22": "5GRwQy2payGYDAGWQQxgRjbgkfALd5dCKwLo8ESDQhHkijZLyqouHwTRPTaAmfG7xRXGbzRg416oZRDxqz1mMzxz",
  "key23": "4mEgJVWDadRiF8praBziq58YLHCzV8TLWhn1TP4PkrtvM59HW3Lr4on3a7mUz1VpciwoeBE4pc3qRrDJgZGXNVcM",
  "key24": "4cf3okScx9n15oocZGgiUGASLApJUtAk35qzbAvayCnNeuafdqv3QrmkxSVJhLBYMBWhwaCMugVQ2UgHRFncMfUs",
  "key25": "e1bquNQ78Fdakbf3uyBwGyrBTBWvLmtR8mXBJ574Yj433LhzSnFqL1hyyzuT4bNFbSKmjB1qKryxSC1rNvQfLEo",
  "key26": "w6js7nR6TVLuwxxz419pQfH6seBhHNm7taewaETWq9d5VdVbbQkNY7QwgXwCW9S1Tv3CMSU2WZKKjrK7AUchsHX",
  "key27": "5NBhTqne29aAcbD88a4oDAuSXdUc7efha8gDwFXh2FM2HEkrgvbWAXYWdDfNb2bhMQAX726nacU2b5Qws2tfciEY",
  "key28": "5QAZNFNXyj935wFgNBnWVhkb8YcizS5dA9xLcZQvmEs8YaT9nwK4tcBK3Zbp2DmunwvhTQDMzuPgAZD91JPrpTaA",
  "key29": "2eZzPXnU7PksyVF7zkmWanhpLDMP7jc3Dc8PsfEQyELLPhBfmaHhrFoGXzBGEo14tLGmmoMrj7GunmYyCw2xoQe1",
  "key30": "5KhLingg28gLExgqtMyoNRUx58RwojvPqHZtVBqLqYZiHtbyKkRtKgoJ2gPqvwwYHws6UAj4t7ZaRb6PsEcb6K65"
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
