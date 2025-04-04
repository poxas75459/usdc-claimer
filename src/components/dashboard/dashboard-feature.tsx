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
    "57DDqDTbytrmu2DpGgkur1QQ6N4MgvQMUF43asdXJys6tdZjy7bwvKBLndYMtTxhuiTs3TtFA5w8Kn4qRDtfSexC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35AxXLAnTEQmbAkWqd3hxqTX5uujbTab6bMC22rP7qdrWohgnnRXeF2B6NbAW6PLsVBtVTth8iuM4Pn3teWQdrUw",
  "key1": "4mgE2KiftUJBka1jaN9Uf6Se62dVYUTadsdvfmUgR9fikriNMmBAmS2fi7BBXggW7Xp5hcMWDkPqvQMhGDy5wkTs",
  "key2": "zmgyLauxDRDj5hdPhMokvWQWJXMdZSbwuNK6VedrJYr6MCuGq8KLV7Tdx12VSnsV7jp7JLh3CkPFnHtZ48VQa6Q",
  "key3": "5WpD4QM8s8PA3Zru9Rm7g5q1LDNJWEPSH7GdYsxdxhMLhTqkstJCKTgQWnijrsfoctNenZmJh4kuJ2SX2ZXEgAKF",
  "key4": "5KtzNcZtX7kxfgtjMVyreECCrMZxKGidjxBfxBL4vY8tXsCZ7edqtdSWmRFPEaPgavfg7V6Czb2Sk9odXrGFk1yM",
  "key5": "4avUgju7MXv21jzxHNZWqzHrh9552mTPfyUht7dWtXHoeCnkLxf7WuFg3pfMngSbvwLq8SB33ZmH3KoKqnwcXtqz",
  "key6": "hpmdH3UddrHooN3jKTtYErxRn4Raf5Ut2ddR5pViqo589iQiLbGHvNQzk7STAUn7QLQz7UqmP3SXHM7qf9ojP5h",
  "key7": "3jCtDxsMMWa91nCVhWiKYjfipDL1k5AL4JHi5fmHSMVYk1SC4z56LUEfTVyAd6aDzPsuExqFWnUch2gvLQ11iz53",
  "key8": "22qNU44MD23ys7HEotoTnjb3fiHcU947j4YVALZgzpbun8xJ2TsovChswG2QjA45rbeFy95uX6oeRmeyfjrMSQox",
  "key9": "47JhgGMRkgFPe2oy3iGQ5daBy5QiPHdXeZGD1fRY6UhTkTUKRMDn5ybqhU2VGUq7ubFcKoXidRt5DqgyipxyAuT7",
  "key10": "2vPMuBUhX4RVJytRJVcBEoJKe57EW2SCgi5PB5sRQKyRHQuMVbLLSXwG8YmJQRDVLRoFZkX6aRQda3L3c4C791T8",
  "key11": "5Q8CpeMLTsMA2NpWjxGdijxuwvqf7AHz7Fh9Y4p67KGYFv2B3PVY1fgTyfUa6rk2GhXddP4xrY8fFBWQadTjq1qk",
  "key12": "UTCYyS1hWZBfJYEvGCkDLAaqNu2kRoLUGyTZ4ip9SRtYDwxaMWepLKTYjxhWTr4aFFUk5qpDrLqRwNKSwEFSPug",
  "key13": "2wnJC4siYybBT5UWqx1CL1tRu5Qw8iZdu972UsVTbEBo4SP21sXrR6BB5e9ksPQDm8EGMJiYJNi6271jtP7Y8c4E",
  "key14": "BLBo9LPy8qnSFYWC5Xk42kpzqpKSHdizbGk7mELVK9NWxp9xyAB15uQaMWDADmbB1U3fMA2nHYSopDwT8ZwXWH4",
  "key15": "2saeWHezuyEH8StxUyZeDsKS35ohJVoq9kFWHRS1cEtL3Kjkh7dMAh5XSecP8GDvSrovR32M2W3JNUDoFXu5pFj6",
  "key16": "UY7WQd1CZpnYPMtAc6Hcc3uPudv9KzNFfFanhhmwPB7tmoyFBTdaEBzA1u8NxuTXYGQ76GDyexMsYbL7cFPPJDi",
  "key17": "64QVH72b3Vmj6gTdwBhMsrHzv7GmwvpUpd24rThq1DFDXPg1mnfVpPzv51oH48j237u7KaDBcz1ye8ny1RPKcPW",
  "key18": "4jfyHdDSZrzmJ2TDsVo3fHv49kMC9B5te6JtWSisysu4KeQh2YvVmJSoJB1zxjUpXLzcrhUU6TLAD8DbEBBGFerz",
  "key19": "3aZKB1TxrCoq9pZwWaiBz3YiW8QV48epmqikk9phA2tWRQx6C53WncB6AAkeNrcd1eXwgu4TtPS8p12AXqQa6YKC",
  "key20": "4PRrw8zEPZsspuW8TngU2r3ifimHePYoaRkhxFMKC9Ecv2Cy34abcFYUcYupocdLhPfuniZKSXhj8261mdkXzKLA",
  "key21": "4yGzdE8CifpWz221Tq3zNq77ucGuKH9AXYbqnozhf8rAqFT9jGyQTwDiCRKEWC92sFFMoMMHU8gcx8fwT3n62qbP",
  "key22": "2ycnt7mudjzHVyorZpZGDce8gqv5WBDHWG4fQZEbQCvPGydkh1NeaWq8VQ1P2AtM9Q1iXMzDrzkchneNGLrPHvUa",
  "key23": "3KPsezQ3wuEmDAAor6yHBaYEyfai3faBL4VkM5Q9yVAoF7hwQELgYDiBkJqyTMMpLnmwMdgkDuU87YXrHpfD9JR1",
  "key24": "3ou8TwXoBih1rME3mNBGSNx3eQYjmxT347qoRkuZjNbC4qp2am6g4axLqUrsDTSJPk4QK8XcU6TLDBA6WSzjVDVp",
  "key25": "3mHp9TG2WEy47C4fqqJ9UquEFTpKF3SRAkDstEN3JyyTzLnAjyWa9Ctyv1a2BTH9ZwCgcnpSAbKXuNt7zHdRhBy4"
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
