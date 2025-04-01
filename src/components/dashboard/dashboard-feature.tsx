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
    "2KKLEdEomsJrnCNRtvXmdj2snDQf9jfHyAGW4Zd8EhiJeRMprjtHd4LTzmmU7UEYVSrhfvCf6huBdppQeYtaG9nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YtzvsZsYheTgJz2t6qRtkQoHUT3CkMpQUZowiE8jKgY5LDqkPaGpttfnPKwD9J99B8xC7CiJdRdt8nJTT56bF1p",
  "key1": "25XxBj12MrZssvJqEgoeLBv1jj351WWRi3DLFj5o3tD4SPNLLrAGU69Pn8SRvJ5UZw2PvemeEA2x96wqZPSotASe",
  "key2": "2EDioR1LN2KdVeisCY9HhPcj6BU7fvYW1FJhhwgrSjce7jyCyNDUUN7tbgqpS18ijjJ5uiwW1GCJHPeCn3rHiJ78",
  "key3": "3AGvfxqCKkc421f6CEL2hRvyCJ64tmDg7C7mwv6ikicK1Yt6ZZW5m3bu5fjHefuzL6jK7EToxohknakCbaYTAuwk",
  "key4": "5G6VQZ79mvb1SrdjoyV98Ve8K9bB771fSAZcSuRhk6VjgDrqXGACBhBRTgHwwocpWCGeDhdKoYNChzHbWXvMFEYM",
  "key5": "2yXmw3gaV8VwxuBz7MkTUoqgU8Pj915rLvnpT5pGk45N9JZVjADykHysqw7xDW23HXvgPXznECZBcTG4jAWf8BDB",
  "key6": "4R1iVgb2CND43KLZmMQCbtMycttGz14E63uMT6nMMeG59xgEoXVEZaYejq7nQhuDrgsU6RX8S2ttTZTo6Hp6DR48",
  "key7": "3jEQPxehAv9YHGeQPSZjhEteS815Z4Tqd8LKgenKk1E4RjVQZi13R8YgQKeXxHhtykJoNPeS55B1uUZ2vG9ekVTw",
  "key8": "2D2c621aZQCXYp4D9EV2HjC3mcV6BRzKpdM2s8SCRNLFxqCrRKiQnt8TLb6UHqsnajEZjUHNF1oFn2VQstx1F5Lg",
  "key9": "YGbE995Q3mr3qya5fZ8Nftz25qzLTiPRwZZreqEnwKgvjVHfT3RJ6vihUxqG1Xq6qeqosEuFkoy3VDb4AtbaZrw",
  "key10": "5SFXp7XfxPFSVCSyMScYFZsWumTbS4aqoSUb8zCPP4Rc6ipCWGH324PVQ3werfDkmkM8KPyenzjoYo11VLWfyqG1",
  "key11": "5gozcAaFFvcsD9EiAJSug7SsPbs2i7ruQ2WYNyN21niJQMkP5cH7raQcgQFtx7amfe6y96JNrdKrPeWFfx58EKF1",
  "key12": "7dvDZzum5yVz1226NBHeGPGuw9x8T9dHwA1K2YtoM8NgSmAjWSe6X3bxBjic2QedEB9F7h76SF1UrVttoktAiaK",
  "key13": "3iVh6qG8k39pkLdBUMfwVacdH1JUpAjfZT2YCwju9zEd7QVUxKnZJG9PQF6NCsqripVC86Z7peeLWN6F3yTLe3wj",
  "key14": "43zCWmXVxciwzUcrExeckGTesM5sAcj43GYAfHteUSN5Wk7FqQxyAdjSNSB5PQDubRaPHpgTdh3rVUuy9fspyEYk",
  "key15": "5wPX8S2z4PVx1G8tTjvBwe4K93FVJHSjC2FDUinGmdSmgu5NgsrYmYnmssVxUKKEPJ3u485EyVbNovFhe3EFcKps",
  "key16": "61P1FL6pkibTf1khRfBfUcVpdR8iaVvm6eMTx9SkkmCoiggZVijZzviPYZhFtQX3m8P5ZXXnD25qGx8p5tTzUBor",
  "key17": "o6vDTAtS5L8Jq6g85LVUDe2crnLwNtdjZav4vVirLts1k2BTzxtBhdYo3EUTHKsB7jpYyKDKHPb2uNPmM38x9vG",
  "key18": "2zEDSjm7jcuZ1bEzp8m4JCjFMKXB88BVXNCHicdzHPWmtNRkR7mAYv1KTK9h4u3uUKErjrZaeyTFtXek9us9cMj1",
  "key19": "459HRpGqTTuMhvNUjZAvjAK1Mp7kBBqbCximBEkKWiTXs7R7vSBroZAEVqgYysha1UgVn9SjmXjTBNacbfr2xBYh",
  "key20": "3igJTenHC9CFiFYLBroufrKgcjdzS8jW8opzh1WjXNNBwnVg9iLtDmVP6tZff1hz1gBP3JjXq3hwP769YxZGtT5E",
  "key21": "4w357p2ZmudMThNjjJ3bR4RtFFb5CmYBwkMgbMwXxiaeGEnf6CNtKFPa81Ai5U1CBcsqwZ3J7jmbbGbcYpQ42HyW",
  "key22": "CgRzmd4XiFGqZH8LHWUcxB48uZ7bMsEhTHMB8Ltc9b2nWAhQM1E1ebGR4VDfh8dpLc3VEhBvbfbwWCG38KFnEcw",
  "key23": "5qEUaCfHeVSoHVTwn5Aonza2v3dq9yYbXp16wL5h8m11pcUFQxLeWnNfS63mqRK377trAzmt7SKvUTuYNsBEHBJg",
  "key24": "3qgorpFDVrpXCH2AU2aWZ2AQwrzjXHXkWwQGwAkT41S7ZGqCPqU7cW2xBFgkAhNrrCsTeJhy2uFu4H9nk7HiVGDp",
  "key25": "5YsoQLYwHtt5RoLNbA6mEXqYrE6Man4Ppr9x3uRCeaNuj9GFmS56esvuLmy2Ga3jxh18Z8C1vAUZPiTKvtw4P7Ce"
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
