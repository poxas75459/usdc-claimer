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
    "2EFiRz8WXgFotsMrXj9A8fMVNiq11twCgs298GPTgnaGYsB9VLcUXzuUb8ykL87UYnaZetznCV3n76To3pPCyJoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43PEXyLk6x6rnuqybR6My4eMJKcCRfHJvCRtRtma1GnHHzXo62CLVrJoTLUNJnX66odHhkwZa1gvgEYs9G8MHSzn",
  "key1": "qU1JBRZJ74hwmodCbPh4U5aTBsNpZ8WrLDwxXDeCpv1aZwnLYejc6ctK5QssQLgVJ9gAqcUfxF6wPsXHuZvBCZ2",
  "key2": "3VFvMZX2TAgZZ5Cn4pm7ws9NUiEXRDHUKtk2A4VwLaffedXq3nz2bQ13inKQCVVxjsGntx77JPtsKTwUTq5wfZrf",
  "key3": "49JweevC11CcVQinWA2pWnYQ58u5mqKDNategvCfJtdwSDSJB87jFYyFGqygcemnFNtou5CU2pH5g9doYJipctnc",
  "key4": "4SbWRfphUYA9838AAfS4jMDvyxU2W2W54edwjzZk5pQQsQgxc5BoSd2x6csZKEsJU7nNko9XQMGaxF6BuTET8V8A",
  "key5": "3wUKVYYTgJRwbzSjSZXP62mKWnmkjXSrdeE1j2YJTLkCdzsBvS8hqCiRuZgciFxJ8mtq6djbkS1yKtKgJ5SktTU5",
  "key6": "4QqYzzJA3bAiB6dJimwfQAmJ7Bj5PiE5FApPjDSFK7WsMvYF8GXK6VTij1jhL8obaAERsmQz5JjoDFNMiGNkEN3A",
  "key7": "HAuQUjzR7sXVpbPCW1vbXvZh6UmoVso8APrkD76cHqutz4bgGF1v71L8XLyz8RaMj96k6ENYTApkESwgP6yd8M4",
  "key8": "2m1hJjPGa1J6UvQrCgzNidaUVHAVZoLYGd3yRa5ruEQHzWtMaKSZos4XwzUsVxbX1hCmB6WX7tc9oyNE8iqPJEG4",
  "key9": "55MczDLDTjDKkobd1aRJ751uaF8CW5V5j1w7N3LVqDqyhSMyCtgZiUsRSYs3vMnW54psFyoVf6XPzW5R9pkdFB1j",
  "key10": "2UP9Rn6R1hWSRCUTfBri1NCc6kxJSN9TJuZxgYFsw4kyBB8seSqtu2avxArAPWndViw2aZGuQvwzFDf4FVhe6cto",
  "key11": "h5kt11qg9wwwEusSzx5Q4KkJQsZUb6EfcpZqLotCfU6JgpvSB43z4mDfiFL7E5makP4rtvhvkF2cv15E7NM8Uqv",
  "key12": "56EiYsMhZyg5nk1jPLXyEkTPaA1w852wDmpUqXTh2Vv174cXjtgTg1h6rV4bAGjGFY65TLuDSh6yNuBsPrFzjg3C",
  "key13": "5MK9zYgk8oS3cp2qSC5wPYgxSFMJu6hpAngtXpzPNRnYbLwTKUVp9gTeR2RAWuz7zfD5x6JhgS6oM39R4dk1STE5",
  "key14": "44XKXiiiLkFcFCrSSiKxEgbtRDA6jYwJaugj9FJpFWHdqRAxDcAB6YvonGgsqL64eaLGwDre6VURgzkgTiEkPzo3",
  "key15": "3zT7XDDo4Aj1Y78aYZv7iUcjh6eFgsu4a9fg1AqKvnV9Z9Ui1WmnHBPHf7NpyV8qFSV9EyBGcdd37ArJ78MiRrNn",
  "key16": "2sNwHiZiy8cKgZQMRpcmjVdwfoAfgBav6fWdjesbYgbVfT3NAzRtvMZrNqPVAP9EnGVP6yxoJQCG2RZiLTE4eZkr",
  "key17": "Xg4kcdcy3RjhnqAWQLDS62c3Y9U7hEdy4NqqmwzCKUYWA4BWrJ8VEucx88gVz2ZPAiSVYar1hLm4oMp3JZ9csNZ",
  "key18": "jSFikJyuqQr5HSN7Y7ctsnYBYBPkJnUzjrzwFb1bCB7SeWxKisFkja8MbtiJnaE6yackny48FNA2ivYJxsoBoLd",
  "key19": "47F9NaKqqL5VsSHRW3YQUSYjdoBpVBhRhDA6HCpuUZ1PSqPCwsHDv34cFgjJx8CnopszwNVX14AWFRtG8jiwiQ8i",
  "key20": "3dHLhuhDG3r5vnTfTCiBRWVGhFQ2Xsr1kC31MMGDZC97kq88xckEcjpc3QgQVoZnHKFGR1gSByjghbQTj26jcFFX",
  "key21": "2daePZpqWUMkho2Bga53ckgQzAQFGBp5LkpCXu5N3PJek5psRaubpjy7NW7K3KdsppD2vXdtKgDBjU6Lpr5BEj3Z",
  "key22": "2WH5zumHgsUZnmrAqBXesjbRAWR24Bw4umYjehG6xQca4JHyYuoMg1ubMsUZp1PTbihJ9BYKCxMBqucC2ySKH8Vz",
  "key23": "UnqFBUScrNiCukgGcNjSrAZ8N12rcArHXvvmC9PQLMfUoNyx9rJXQGVXqN2p2DX28R1CZeJxb6Gb6QhZ8icSUL5",
  "key24": "3TzXurrDfnjavQRMLPt4f2H1sggiWMX4tYT7ANrzYqndm8jgRNfoFZqdXi9kLMcUsgtaCWxCWQCrgNmtRSLwioTE",
  "key25": "2cQCCC8A3yfoDjGD5RLWehBtTJdYJHU97ua93JXSPuxTnesbeaQ1RMBEbpne48tDueaKiN77NQLMdhYTGUnsU9qd",
  "key26": "4ee6Ki4yCZSvRjAZHKj6ZcubRR1kDQVPmfPUwhApdidRctTvaesZgTyomrLUCwGAqpw4V3bCjYkMhvX4xmbMUSwq",
  "key27": "32RiDqqLbSJd4rzB4p5qhCj9gRRoWnXepood9oYZxY1umjuSe6HDSszpAG4s7zSRvfwu214pUeGiwkynj147vv47",
  "key28": "2Sx8XqU14caK6Rxu7gJbo2Up4Yn63b8ULuGTiUkEmhpYRh3JZMFZXSUwHb5km4GgboiWvVfrfe1Z7FwKDCg6tKcF",
  "key29": "4zCiVDPdQFdL8zamfDBhqnDEkr7czSzAJiCLQ7LkCj7aLcE3WmHb4AZCXmvjdgHiLodYhjKdsv5LJJxjkQA7StkZ",
  "key30": "RuqvrAvWSo1MoerjVviKtC76Eys4ALXLykUbfZccaBuj6BZP5urvWNaCfCnrUzoXNjsUEDCTxrjUHeEfoGX6bK1",
  "key31": "4YVxr8aKEsD2FWFhJjk6JiVKs1aJwujmLxq6SAUSGr9RG1YLxfwhuwDimpP1hd8ez5pLa6LzSSmKbbZp9EmrWZta",
  "key32": "3GLrrokeci9NFHsFkoe2L1KCoKYECYupHqmALQUPnHepyNLWTpfPJVaujh2WwAhEdXkpXRdbV1kQoZKg4sDA7rre",
  "key33": "4yywYy6DddKqv5wRYks3xqveCtJ7y8d1e8V7o1REVQgpepwqJ57NgjzR1YggpWsMustErBkRtzZfavFfLzPU65EC",
  "key34": "5GvrQ6LYd5sLd53GLtD9GvoxHdmsVUrtx4nVLjmq8s76xRUK8H8PXf3qPugspqKc9fwVcofE5TNzwsQ739jBSMxJ",
  "key35": "3SdPCC9Wqb27B3zmSCW46PNDqyRNU7rKzjGCh2WUda2HRpwmbSrGwr9kSdZKbkybpKki1kvQ6DZUtYqHCi8aQXf5",
  "key36": "5VeqejyvPyEEiU5RTrYsoSj5f6PTTaD8xGuTQDAP8cLWgJp1LbSeRMabPsezwo3c1ZaJwW7GH63oBF93m63CtuDR",
  "key37": "594VbTsuefG6129sT9m47m6SgVP4Fndp9Cp17JYatXkbrp63Vu8fzjvbFA4X5YdSVyMpJ6QfwYT6cXkq6rwxd27V",
  "key38": "2m1eZ9We59LCydwxZvqJfHfGCezW5Nhag3YrCnUh4isMKyjww54YPdDX48TZzkKKHz8ZtKuvayRc7wwXssQSjaFv",
  "key39": "5du4JXnv5rx7StRyrXaWENFnqnP47PTPEE1XiJCsLrQbVvNkqCcgJD2wi2haPEsC5syUJhCNb9GELtnSR2CZUZks",
  "key40": "34EMaVY8g5wTmdZbwix4tVwgJcvY8xGJ5P47pnW71HsV1ygCus944ALjYKazohdMH35wnyNzdC7mrxZTBXnQ6aNw",
  "key41": "xnd3c6rjkpndGkcjpWcDuVEK7dHfDmKUKxpYNTg9h8538G7ZtAzRuJgR5Vim3nXAhi8my6gsyKk3Ae6XuzL4a6E"
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
