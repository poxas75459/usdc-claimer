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
    "5sWbrgfyHjQMpaXzVwNvE35zfStaHKGW58sCDvYdGrx7heasXy3sTMD4iUY7Vfka561ij1QguvEcNrvy6jEa33ov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61C8cZpEiiUgM5m5tWiLfz81ZepFHFCytNEZV1hFSrATWG4RvUHkwiK2Ewunprq4pbBus6RGmPZSCBQNJTZAtgKo",
  "key1": "5hGXafAicNDBqh62FoojX3SEjoddqvP6WNoQCgYp62ty4jhN8rh7wdMsNKe7UqRq5uziQiYDX1TmWs4zYmDCKGp3",
  "key2": "2MvtmoQqR3yDqGSXjuT4j5ctBGHU6UaqXvWSvZ6Aewugu9JAZs4ovbrU3JipG4aRpfNzU7Jgz68QTXSTcUathBsZ",
  "key3": "7F5LZ7uywaz1pdKbTb8uLtKhCUkRQmU2o2txVpcVBvMrSN76Le581FnUQUX2AynjFKBMHHaesDhf6efbFp5cxfi",
  "key4": "2ywdvt52ijqUSx7JjsQFWYLj86wkr6r65KFUD6CGmQmrSTxwxfoA2EN4pbsDoDPzNHDXT4X3Aagz253G4QXKtXoX",
  "key5": "2LSXU4hUD6pS7UipGf5Qob8bATGvPfmJ3PVKUa9apLiyT6GCkiMPhafVrNjChoEezkxHwAbUPVHJBFqTDJxsCy5V",
  "key6": "1yHaTZb3E9Henz2jZEKEqCQ3CD1Retpg4SqqBwFSo42j8qZCYNBT2KejKrggXctR5NH4i1b6UFd27YLdULHhq4b",
  "key7": "4L7R3vrpKnC5zmVPzosKqt3p3RhXkGpxDw3aGTo6xiirwQYSBCiiH3CZX9Upf31TwwtqmGbQp2D4Ftzk3MwTBeYG",
  "key8": "2xXwt7h5CucK81WeN4z7tdUBEpdFfjeuoHnMWWB1cDK1xM1km2tBLGuJwrqeUq9EdkFraUot8vXH9BicRWv3K7Lw",
  "key9": "3ZgHaQ8PnoK7iZr5c2H6VsmKPEXQsUBpx9NuAtKJXqsXbB2dmorXrrGiTxGY7oHrt8F24rUdAzQw59yshRXjspib",
  "key10": "pWnohLFCNSkB1HrXoF5WC6H6PKdo3BBUSWBUnNn85G3iZ1SbAoNYgh2YRdY7Qn3zykG68b4PPxdjZksRgps39nR",
  "key11": "262bc1SHAJgHm6QS2x49zCdFSiatXoHjgFdCxrxac7Kxad8rkmNB4mM2iJDwhVTyfiHvhEfdqLLCYsefjTc74bou",
  "key12": "42VomSzYRp2K45QyFEkbRcgSw2Q9UXb23XzqdMYcAvfvHwFifMv3o9izydKEAA91nuZaQHaRhbuiXKQ7WQxkQzG5",
  "key13": "417CeKoQXpKhGqXw9yhrpBADhiDafTC8rfP4Caeyq28tWLsbDwnPVJsFjpR9ynrozcguYHhTu37mVSxyTEZ5EMFc",
  "key14": "2Uqhry67FLcEvy4ehBGVLdMDQmo8BTAhWiAC59vgrPvBgpTtWx8S34Qtmixqx2oPwZKhD2GrFyMxMnoeKvhWfwrD",
  "key15": "2mTDjVXnZ4wjurRJGwr92WsAhbXnGff3AWkY2ZXhmsuB4qYWH141WxfHtK1zHbFzEVvtCFJ8X7JRSSisXf9riWKA",
  "key16": "3ysoX3WGr8pfm816C9eSiam32ibTByMLHkorw1j79iPycXUu7zQXeLRJP3y9FdXxKGqaw4ciDrHQ5p2Gta7rFnex",
  "key17": "53LYQBdCvcNFEtxV6JNTYk6dWpoYSiBBCmsd5hkqVKEaN2mfy2utjb4UkH7z1hi9gsotwE9eCM797hiPKJgF4wQ2",
  "key18": "54TMuuEh1HYrTxiRzr9h48TdAz7KGoZ53pE5ssa7oBqLXjgvor3pgeNmqM5gaULbTpQvTZRtyNWLKNwazNbP4KfA",
  "key19": "Gb9BCd8TNW7A69fCq4w9w7vYKsCHHF1tP8Roqmjq7LrkKuqwpU4n68V2UTKTWgMrGPdieeeCXVzCi9eDreaATey",
  "key20": "5BnUsoNMHakXP9PKK4Q9G4TuybohSPfFJ3VrPzN7KoAS4mvuzkvUE3gCZLGfLscm2PAk9KcztnsQairbhrxnzfRP",
  "key21": "5aGMFqZvGHzKx79FmGEwr2dfoNEKLMTG84mGe1U6W1FgFU4nW9YhQFJXzh4ZQMBaoj7FV1TT7PJF9jJKex7vqSGn",
  "key22": "51cMSBLxpeE1KH5KgVeWgp6HQAt43v9Y95NqvCy8ipyPVAo8dVbAUqAhgCahjuU7BzEaKSu5cVpH3smptZz5mMCE",
  "key23": "3FusNfFkTbJmdoDhs5LGJHH4yGzAuYcFE4kDHc3Y5GtqJQjnajiMr5Yrx9AmgE7jhu2ysdzSf6J4NV93k4vSSwtY",
  "key24": "6Rs5u8gCLXUGRpUvDvAMuTB4iyZwjscP6x1jrEAH5MshQs8xGMdtH66fU2y8MY1vig2XGBpjj8ArYdm8yhPqb8Z",
  "key25": "3us4E99PCAbz2gFdaoD3VgRhpbcmCF5sperXWUxE4JgP33uhDc4LKamP6TYuH83XsE2LcV6j8bPzbo4vrKhzgmR7",
  "key26": "4XaT9QPukF7XW9jbcNbLQWgy3utL5dinEp9gqCHWAHDKhvroJSf8K3cUpDoSqz5Qw2Rmz9DFj4FhJovKt7XUWmJ6",
  "key27": "pPdi5fMq6BWrtG7fNaEdNQAgTcMFkW1PmbbPU5WjSGm9ZVmNhQLSrK3ad1k2xt5S2ZmPb1tQSnMNdmcYxxHDrfT",
  "key28": "3951GWXRGy5YrEtHuAv7vcWDRyex6MrB1kMLyd3Hun7sowrnyUX8xMWY8MCzejvwxyrfThf9xyKbP5sCyxj3KVY9",
  "key29": "4mYKajnmHkSwqeBBVREyk6yEQN6JcWiWjeynA7Be8Tn41TGMwZKvvgDEfTCuQ9RVGG8SzHmnXHk6k8FcuBQYwPjd",
  "key30": "4mFc3pVNRwpovjMgPRQq7ecHhhvpT6q78QtpFoq2tNRTnJS5ijE6dGD6YUSVinVaU94djcqA9VfdvRu12ukn4MCN",
  "key31": "oQgbKZzgr8twChXpV5gENNvVgG5Z74DfVdS3qLQHxbiAGS7jVQcqKihqFBNbbhb41gMbrKFpG1gvTm5PNkanNGu",
  "key32": "5bbnkJS6cLq9uAzBDfexDKp5uMccx7RetWFqS1B76XuMxPbeYiBmUTARFLo6mRJkZoe8pFgqBGGqoDFkhE8u83a8",
  "key33": "5ympXDVMZd9K7d6m772U9Fk1sxJeKxbq3ND5k3g9hebeXvT48DBgLej3NpbRYb6MmZ36nSXJdbWfLPA8uidHvvjV",
  "key34": "2TEyca7A1p4BNVvQSTU7rTH8C5z7DkSUxmFSd7JXMt4PGwshaVciM6BadsaJB8oZaRsLBbDd9Vo7sCK5tTg1piGC",
  "key35": "28JWLCTnbGjzRFC1UjLZBnr4w4a2Tzvb1b6n8WMXniFd2U1gxLxn21SXDyDXUz79H7pohWxCHxzJbWziJtk2NA9M",
  "key36": "6q4jBTn7FbkdVKYJw566m7BiUz58HMUmZhHeKSwEY96yqeR47TbCtfgX2mSnAY7GDSMjHdPcTtj54VkQr4Fsv5h",
  "key37": "5hKb7o2GqSDdRnzdahCzAMh2hBsNNTmz8yCrvQk5EmFPTtCW4oBy6ddZuYobBfwx5CgTmsw4coeaKAPbYirxvHUc",
  "key38": "31Gx9eK3PDQuCPTDtzuXtebNt4KGczF11pYqXuDiiVNTirUVohnY9rpsgdy5F6BVC981cwEBZN6qm6q2X9k5uNKX",
  "key39": "52x2uoAkqsf9JeaHWJqpH6hUA4NKHZHjatYpuwVFG1qVqezujYmDMQFDoKieBm1A4RsdqN3Tr3F2TqBgVPGjJMxr"
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
