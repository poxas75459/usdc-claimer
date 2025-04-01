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
    "4H9bbmEcS5bV2V1GTWpXEQbFqNHoQnQYmnbgm5jmXFKb6qe1YicT7gM2gGN28eg38kq2rSLw3Dun8TLjdkRk9m1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zYp1XzE6yn7hdSMTP91MgpwouE8gnj1os2F6ve387itFCaZV3P4Xix1UfKbo6Bs7PXjqTZ9KU8g19kwB9fagDEN",
  "key1": "4kJ3vomafad7M6ME8AiWNVQgVK18gLqXM4EyDPmujTvefzpuZg5g1Fq9tEiHw3NuH6ATUK7VuN63Pqzu29hpWdtQ",
  "key2": "4mhbwGK2aZQqSbqZoSfN7Y76yf1dWWgmGBRwJfYDd9etYdDCHetqM1dvrdCtnhFRiuw8rBieJzep76vCaaqrBwo7",
  "key3": "2pc5xzo41r8AmopeywCYiW8f9MWVaMqJ4A9gfa9XouRXpBfy412q7a915Kekwb1v7gh9VQh4c2WFiz4AAm1YLjFg",
  "key4": "DAfRLUARPr2yqqy9RVxTcyPFzzK2ebNBGkEFG6vS7fppbWC8tDWbfYQ3F6oYnR2Chwr3mNYNtZmPne3cSkaQNts",
  "key5": "3653uzKEB4sRAcuZ2CkmUPmS5AKdWF8AFo97Nv74bqFbF1wKwNrNTYzoYY88LhHBrmRaCUkcXB2GRr2SHghEzxdj",
  "key6": "5HmDyqawotfzPTebR3tCuKKS7P8EPpFLBB6zj9Tk1k8bADaz1TwJXxvKRwVoEqRjqDMC3BvuXbbZ2EdKHQ4Btacb",
  "key7": "5VKS31odvK3odXbXm3b6hqmYqtAKNNmrWLdJyuFu6wgbD4fphA92qtH2TJqnT1CSUar1HbxoGJRwiv1zF9b6mnb",
  "key8": "Hh2JwL1qDhoJAHEB3EPMc9dgskkdQ1c9i9JrPsFn9TvkNJJ8Cg4S94aw5DdLhU1Dt36iwJFwX31kYJxzYykYp7T",
  "key9": "Ma3cgqT1zxiTbjrCwaL99vavYj6FT3WqnGvUTdpuiSMjYiikfTzgp5husN6Z1jYvhWjKu4HJuLT4hTidoRmE5sE",
  "key10": "2hAHoPMMziH75dwTjLpWAABjxonumX9TqY6aNuW6gQgRMF8EL33mNPpfJhmNddA93vvo585QnKsTafo71pMmH3SW",
  "key11": "5LvAo8u1c3gZmuTaztyXdaUogXvuMmYHBLtBZZRWCf6wTNdMHkPJbw2H4cCfqQcQX5EqthPVpax4iVCxs52jfmv5",
  "key12": "5me8ABx9XsJTSaFwQrSZXQudqGNP4mtSgCNyDUFMEd6g4EAP6fPS1X4KTuYFYGfGyM3PGThTHvXwyxiN1MDFTYFx",
  "key13": "ow6WKgiRhZyePzD1EZZWn8C1VvH84QydV9yLEaBcQQLYJGhdLBnWafANqnNSiBQYgn3Nyxd1J4QqnTBrHa7uHb8",
  "key14": "5KRewUnzXvWN1Zg8L6cJ7NL4tB1EBLEgdbSdkxpBL7piGFFeCefjbLMnpJAGJa2V5xTGxBgo5TG4KytLecWdunzX",
  "key15": "41i8vhzAMQAuqk6bR3hdRepZqgfwqALHFyXuqXQL5phQwytvfhwawZCSP54k9mAyjetQhEDcbWfYeZvn2pMB6RLp",
  "key16": "UvyXquLSHgWUzjgMJBKetArbwjM9rBv9zTvFd98MhVaXZGAXmrUB4UoidFHrWNJLC6mYSGF6o19N5zrtYPPeErj",
  "key17": "5arRmN6tufzV7E8eE4DXHWpLZYZp9qupTQFCturHbSQ7menair2NrF63FotTY64Nyqjy3xxb15JfGg3kc5Xccjkn",
  "key18": "JW4SV5Skm1oKx9heLu9s5pYmqyc1q9Pe3Tb9iAWT7kURwNFX2oSaBsZGhYaZ8VHGpiaSZkc66mkj8q4oTKCBx5c",
  "key19": "3TkCZA9gLbtqM99FdKYKz6kcB1DyRSuVKXB1psx7QXNGEvsLXspB4vEt75hkYMvV27Vmi2CiPPwTUSUqAzLcKNwf",
  "key20": "qEj2crvxveExvPYpwo9xEEwtVC5w1uB2f21KXwAotqrJZCcHZW9erZmKQDRfFHqKe9Cx1tRRbF9Tzq863q4Vpq1",
  "key21": "3Daogso1Sep8r7xep5GzzqDVNzroe6bfXf2EmgN3Q2BJiFtaw3pHPybc98T5XXjQkq9ic18LAF1NTMmFyHsnC6ud",
  "key22": "3EXYYMBHvHqSJo45a9kJWV5rTHPhX7mTvW9LhR1kNL8jdMVepjbiEtBpv9Nqy8e5tqU489exm7Bw8r4qrLsmJR7s",
  "key23": "2jMB3Qj3uGhbicXzRrxSox1DNis76wgJgx1kG91nuxU5BjbmCpp9d2Rarwt6gU733aWhQSCCaSULcRW7o678AEDx",
  "key24": "26z8mhbLuS7bR4RYnMTKsifbpVrw9bTK98zkKVqTLTW7iW7bDhjfpZboF54pvJHXLT6rP6Qhh4hy2LFya9kinLPi",
  "key25": "4QiurXu3WFG1ggS6DhruiPHodypc2q4YUPnSG8rgMuscAosP93HVty5cRnLw9uWwyaWaWvYpRUW4sobDnPCFzQ69",
  "key26": "2G3s9bay3jMe5CNXS8Fk7rTonsKiocwQQBqA6dewEWFNS9f7JKeHST4aTWVbbjhd4EhAhxye6ygusVSSzL3ayPzE",
  "key27": "5KGrQDp56bdRcDqhg5XHrzaArPW2yjxHgMNGmz2NeenZwhmpGV7W4F3ZpqYchTvCJEQ2KbyZQhh9xQ6TJv2M7uRx",
  "key28": "2PUsy2Evg8Aqct1oHAyMY45Yn6NJpyyWq48sDw74B9X67FFgFZH4k2uhjxEf5uAqEbkGL3KhuYse61CRMCHB7wxR",
  "key29": "2wS749qPUkTfLmUH3Jcmi1Cx4Db7vqfkQYA9cy2AbJXqvWgFmxUhCmCQ6ptBdv7N8NtWQHYKMZz2k4xQtQVxionF",
  "key30": "Gg9ex4CMaUNVzCSzejQtx89XvaUHMQfbtuWaWCygP5coitYfg1qCaQzyKHzDAAhPeF3mSKgyC7grHsTGjBt41DW",
  "key31": "2nxXaYAfF3Uiw5SBvHa8XKVcTvAFRKUK2WzuVgp8E9U2K8h8Xn95X9sHXKsNJgtZT7M2dteqTF8NfSaQDACf5KBW",
  "key32": "4shPs2mmmwrpynPQN3pMfmZNhrvMshh8dbgmhaRWonk3GHHWv7yEVanT2h8BY8us2Q1xvDwGE7rU79PG2JkJof1W",
  "key33": "3YbCtrVX8ouHMUGwq9nzz4dqzrKACPaxAK8Z8TwYtMKfzLgaiKUAyPtyY2qEtEZdyBLDP9WHbgcmpzCj4JFJwhAq"
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
