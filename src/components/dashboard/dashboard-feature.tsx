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
    "EsHYEYcwqVeLhZz8VJdcCpRJugmRoxDJph2wbVisuKqzHku2VbiYtA4SRQoMPgG5Z6R618SKvP8DqSPDBrugvYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Xy4XSXWmiYijcPzu77HTDfFrxpLCuf6tNtccUEDAXvZSt7sxykckttudkXxsA9LkpehtNXXTE5uN8UhrNoe76C",
  "key1": "24sieghzM554YMyWRgySPnFvzKzC7k5HrEKkEicsahFo9SzCWg5bveFN2FzW5cYYXw9DbLvGGisHZG3v7WEamA5j",
  "key2": "2Ja8PcCYoYxxvAeVHP5nqULRjS3hHnPGTW3YyRq1f1CfWxyswCPazXoYe54TvT7X52anNGswPaKLkC22moJ5qcgf",
  "key3": "3NW2w1cSAcKJXZWvjBdytoHficLi5fMzU8rRXJ44Uy9FqecQB2pUgyrqzEZQRq2okmWyi1g2U6Gt75ojLQrv47BB",
  "key4": "2fegYWeEMGPD1gkCUyq9rHgaaxzuiwMVyJiEyPCGSU4hbB7AkjqX3ExmSc1sMXZ7re9GS942iA3atuPJYqF6fuDH",
  "key5": "37MiVbHoZnhN1swsbWFP3vijPX9cr4MTUmwPb8p2x4h3GKtBY12mepR3jB9ZEVSEpixeh5job9Z573RQpsCREriE",
  "key6": "292SbN2r81Xa2iK8MFch4tRrPULFUt3kYNS8i8C4ajvEZ2BxuFEuLmS8vgcu739kbtaHMb8EtHYc9J3TmvRtdoqq",
  "key7": "2wYeoBz5NBHT7wwp6MrLE7ZomXmGPiL598X4iZcqxcE6EjTnCJPwR85YiFEgoieGBQRMXSv2ALncQ6xy9eC2zGmB",
  "key8": "4xrrLAVv1AC7SAqaGwiyYb9mBXy3eXq9YbyTtpkVqiN34nhBVeE1p3CyThtUAcQc4wJM6615bZvVVEnkt4859aRS",
  "key9": "zr2ZAixVM95svPhvvBTfD53ToRmaZgBsPLEz4R3pURKB7eR8afFDYxD1nkL9VrARoNW7HF2mbbjCqM7UcNsFcvA",
  "key10": "2zanGQWcNTRGYvd6JytAMGQ8GLQrxnUuvuU7REYNPUH9BNfQRc7HFaJxjRQoihvWzHZgPxfBwYsxDPRYzs4KfRx5",
  "key11": "WL9x2DjGrvTbKJckj5GcrGdajhVdij3cRf3cjYcMcQhY3VNPfJt5Dc1C8RUhP7B3cyaHbxEUsFu7CM4x3s7roTv",
  "key12": "2Hc19zRa5LrmVZNVTK5JschxEaZDyEQhPJxgMMMfxjECQSp13wxByUgtUFAtftPZMBtCRzkHufv6BMKmsGFYt9H1",
  "key13": "NF38YyncjUgcrWCPn33nkbg6sbz5Fkq9dHqQxfXt9fEhZjpeANAXgXhmV7G7L9UoTUbnvA2pt9bYkkJXS99aWY5",
  "key14": "5R5tFRfNh2CoJgKMjR4hYkzr5UjsnsKZMmy2KnheRHefXTxJUzrRoJj9ekXVN2ANVQdphX6MLDfgwgbTohyo7eVX",
  "key15": "2Q8vYJ2vSsQ829AN4A77y2JciLEpbqByE1eZhtgQbXoza4UdfHVTX1gMmNNJpoUdiELzkqLQg2q8amLmerrBTVeL",
  "key16": "cZk5i1SsVejAiYmr9qhkmePoG2qJ6uPLvGEs5iBHKBp6dC3KW6L4YKyVzvcKvr6GbPYJpKXQzMR1uzqEFBmw9Px",
  "key17": "4QdNLm5guopwi86pjQn2FSNeX8R6qEckExwNkmiwGTsLrR6WzXARjMtCUcYhRbfAtnFz7RFwiFWvg8J8JwSBJNZc",
  "key18": "2KFgGgYjhUgzJRP9wGir7vkFoTnUJ95ZZS9XnNKhsfMRazhL2w4TkQW8wvAq95nCZ3YnEdpXN6AEb19Bcd3JdSwn",
  "key19": "2ebBrHo3nY63gtG63bJ1HsQqQeyKd4YXomjdNLnmgtxtdEZhXU1NC4gb8zPDmiq26QzQ8szKNBVP9wCYkCUFnxAc",
  "key20": "3Ci5mHVZyioXXN8nA98V5Fm5P3TxshVgit9vESzEGzVGwvonMQyjiNQDRBVWkS12Zib2Mf1LgG39MuXm7Z3nw3n2",
  "key21": "2RS893NDiWNo9GHZdEGdbZ4wnoa8TVmqeg6SPLqbn3KYghHLCTDztUudn2rpRFNFpn8EptTffsknzJNAjsbxcZ7S",
  "key22": "3uYdkQ582RR7U8kw5ythJ7PfGVtt7JcgWagh4oNT7rMN4ugffUGerFvMPdLjwDMbBsH8ZqapFKLXv6Jug3d7wzLy",
  "key23": "5By6VSUduDhUu4sY9mRioYu2PZDnx7c3E5ukadKcFn56UDyKi3cDVv1v2X9gFvNuKgu5nMBPaFexzBUmPuFXFmEr",
  "key24": "45djD8VcG5m3A77G6iDUgXh9F5CXsrUi3NWST5XzqYqEu7f3oLTtwhtQjLs1ddtQraFzJUvCVcZj91r3JfSJr2rP",
  "key25": "2sozm59rMHJnNi6yjMkMxSzawDa4dyDmyRuinTNsSJsAPTctobZqWn77idtUkibSGzzjJHjgRH7BhDZywi7FGGwn"
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
