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
    "zSYuUmF6Gr5o5r8JXDYxugtJb4ysbeas7bo5mHwafJ2MS12Zg6UnLVzjDrBB73Q6wNNR3WLxABJMtiTkDeTS51f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdV7MHVqqBf6MRE3sbTB1gUZMv3w5MPVPAKnx7xvqVjTtWCsQSm3prDrhaUg2denoWF7A9TQQ9VAPypnpxe1J8N",
  "key1": "4nZNbsLoHqdeHw5HQ1EBLMKnbDL9njzBXyyQeMXHh5Zbvn9vc1CuWLKU5WSLpJ6zS7DecSynjXPh5HFT2pAf9frm",
  "key2": "5wBXDyXpHCtPSNXVhYtvjndPJTa7iLncvJ6UChJXWNCYchkuwPuCaaTiU76yNWWiQovXozpGecEqrtCV9eveFTpF",
  "key3": "4Y9ntk1FAf4av3XNVLSNGrjxCreiydNdPezwupFi23qfA4CFzqV7rv6sWSZj5BtuUQvgSxpc9yneDHFDgfydpyem",
  "key4": "61WJ3Wtpbj1qe4vAtrrSaz7REUCCc1CWjGcX4JCTxWJur71ZSEzecxB32TqhVfsdRSBgW8MeBZMEbx6vXJVRL8L7",
  "key5": "5SLWrGqpseirvgWpSUsgtWSx3UrBfLrRpzJigGhonfA8tdMwi6AZvdejCjN6ViuAhJ2WoTBMDXdRv1KQFTet9Fq6",
  "key6": "63xZBtN2ijjCGTnbkFS99CbszpRDSMs3rwALEcKwFpMavg7XjADazd2GTtPgZgtpXJJNUq96tV2SYXGvyYsnJ3Z1",
  "key7": "dY26NTQyjJgugnSiqvhRBfUngnnTzqohUdNd1FLFVFWHcyu9FangvZSxLBvDorT3hjt6SyqkdPuDaV3pDZ4DQmY",
  "key8": "2HJgm166YLfnfTYoaqb58ZDpAtGWmtxGZ18FMVQhnyMLEUiEV3BEsXe33HiN3Bs6YMoYNwA6Kk24igbP7hEhMo3g",
  "key9": "34GFR8dt31Df6WZjK54bk3p8okqTWAegxuA5Kc676JGXEQUCXGDVrtcD5BptRTRpDwpBw5CtsHMQ1Q6kdURV5b73",
  "key10": "UoeszjtA5MnnUjZPvUAr9Y5udd9G3vV32XeoYD29r7T1a8HhUGNMCYXbYKq61s4MLWET2iRzfiqjjnWAKUUX8YP",
  "key11": "QRL381hwq3QLgihWTbWEdvTq4EVTj4YAKvvpHjsFauESViN5knG7rAaDHNh1Hc9K3rMHFmVH44kx3wHouaSgjDt",
  "key12": "2jF3LgVHL5A4HAhujtLMkeWXKyainYTmqCQrrav7EfqHPTKfZaeHbMNnxtfnksfm2uBuSC1PBbGcPDF7vhzK4Zkw",
  "key13": "3pUQRYGfiqyQWHSMuS9rh4y4r5yp4kWDKY7iHDxZnVPVJMgSmwMBS6RjY8F6N4ukFVrPy6wU1z7hgS5anLHn2Yz8",
  "key14": "3Rnm9Pydx3PVbXxXm7okbRM9YgGRZnw3LnrpsVowZkmuoKoni5MtCbGqpp5GeTkr45CvnjRRSo7jroXGj4SnMV3k",
  "key15": "4ELtmYBdzVrLAxYYqgPRY2c3aviEBggWF4KFDj85MA5ww5GbgPAhr3NYKNEwTfZeM3nvRAa8fUMZgCNMcyGDHu55",
  "key16": "3R4TspR42mZih7CHGNEDv9NUL48vJWtQZ57iPz3SEC6EvLSAC5LE3JifpuLxQur1KZqfupK8mKCatNcdA8wqN3BK",
  "key17": "57xfk7fJpUswVG57vvcRywy1uukW3HvE8yq1fqXXjxrKUVZbN4wLW7WsgPUenaGE6yxDPfh5DFGWQ3CXLQrrJyBJ",
  "key18": "4oRCeAoVf4TbdZYFLFkt6qaByVNHxKcJxw45QAUXFC6w7BaScy8ick7ymiFrFfmixDZUQH3BKKjkivyU5DQW1S5p",
  "key19": "25C5CCpFSU8vabtooEAX2M1AKZ76xy3RFbZNGj5RPUPAi9vCTrocxfFthTFnef7GpaafQAjbsx1HS2mXH5nrSM1w",
  "key20": "3fBGR5R78wWa7rRvT8eiH4RE9r29L8mPPgAPGf6oW6FhLBNZvbHwQTQeXMnzkyHKMgwRZn9Rgq6eF6QzCLn5fzWo",
  "key21": "btV4jLzY9XRkL8dL4Hs5FoLJXJyZWukkV2t2r5x77qaGH8pQe1Nr2LRrPpx2jwfF9P2N7o6aAPzpQEuRzq2F86x",
  "key22": "3eaohsaggBr8ovuRyHFBwEGum9JoaSioGoidcyK57X6LiTH8m6j2LmYrpvPbyKJ9J4NXvuK46wqBWGMDjo3Gq4Sj",
  "key23": "5EHSX7P3VYzUqzSyC8Pkrfr84jaeaXuekpv3xneTpkbK4coCUBkFWJt7ttnMk325Et2Xv4GdNowNMPpkrHdmwr2V",
  "key24": "53xwVtAmWv1pjwKLVB4orXk6ScvsTTphtQ6D6mJqpCfP5PhN9GcUdeZE3mhCocpcEeWQGhHp4EaVbZSGjco9znGT",
  "key25": "3qBRRXzRZCoviUkArKcvrRJo1KJUdTEfcVBRnaQEPGekocR7hLi6j4ty4e3jEABUTGuuRcFt4kK3kpLXE3d6sXnU",
  "key26": "41AiWRV1Vzpi9ZCBXYapCBeJ3Wz7bboDqMcPmMHjdbzpycVKvrPH2iSiiz9KifBd5gyKFV759JDmsFzxpd3LS4TC",
  "key27": "4vghN13yzGH9W5rXtKQwVhLWmmN8Xjy4F2VGFGBYNtfNwiAfCnv8Cr9zMRa9X8uzjCNYCyLXgHn2CvsZUTZ5MmmG"
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
