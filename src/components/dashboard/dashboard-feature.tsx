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
    "33SvZM1qCCeCTiHDGyM2nUBWHNmYWdn2jLXTETnDoPBWDvdYfpx2FpYxCoe2a1FsT6mBJfKnEhGjTu1NwHNWsVVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PHkXacuXTtqJpXdDByyWeQnf582HFXTJ2nHq2Qcxesixh5JTUHTcr39ALHe45tZRUDcLA9RvbkKmKS15ruXYBkD",
  "key1": "35UgKbZ1X8S65u2QwbLD2u1QdH15B1hv7zRpVLSMNGbGH7zwwcP3EAERoaaXDLCfLcZ8CMHhP1qeN4Uh8KcoXZaT",
  "key2": "2bv15n1sbPXs7Bd5AfT7cJVKjVptkf2d1docLGw2iB38Mz2QheNgR7HeqCcpp7gucAyeiBQoASosLJbtpWfjpE98",
  "key3": "3qVyHMkEAryPaZGKDtEEw1GZsEh67F1uuhB6cQsqe6zqfpzykDSA69rTivaJEWoLiYY1SRrWLoav4ZdRGnuNY2i3",
  "key4": "4TybWXPMFi3SvNz92yp2S4Vy53ELo3NGzwqtYjbEccwDXPXMyKzpLACVhq1s85oZLWvDTgUAKy67M1CVuvAsAisd",
  "key5": "t8xHHGthjnVFtmpqxYmXtnSiNpKWhSpqMVL8igRYeknVbigprcRzV96MKXTqXnyKje8AYgwHi6m5pEuRzNDKWHV",
  "key6": "4VwhEXq8UHeg5V35RWWAXDmBBaHWuSgWs4wMFWjPgohcwUvFKcTdQPU3YJDn5h9DrAdTyKMqbf7nP6o8BQJt56Qf",
  "key7": "5YxHwo2sSgoWs1kiYiAVW6sbLkFg7QwPTxxAd6ssLNdbELR2Lmy2vEZhmVEW2DaQcRwnNfv1S1neDKLsLu1XAuqS",
  "key8": "Db3qKmAMaMTXsmEEpzGVfV4DEWHGK2ZjbtEuF8LPBMvLkcCBogEMuyAVYWnTbwdoRrfLueEnUZb6KnRa7jWGUTy",
  "key9": "5GkMeRthzxBsZrhZNPK1FbHJLNsYDQCVyJ2f5G8nHty1m8AjfMbDMqcd1FQnj7skDcL9uMjV8XArevS85Tp9jU6v",
  "key10": "2rdhjGVmNddWhs9ZZr6Rg1r6wq9V7QwdHqZbn4ZoH2v8j7SQMp7M6P1hvZLP7brj1xcBbxrqd4zHqedhLpi4yUWe",
  "key11": "cm5VHMS6e4FF8vR4URQzUpYyG2LBwHVVh6WShiGuAN7L8MiSPt9SvRoY9nSAvBb2b3XToHjh4bPVSdLAJSbYd4j",
  "key12": "jhLiQK8LnFDDpywnEkpjYLJ7QCpk97QRCTLA9o8z4xEdJ8SADDF5sPg6riddoDE79rLTUXviS5YjJUvh25JncDp",
  "key13": "3aF1oa2Gf3mJG8pjtFmmwhPwTyZuhmL25aRFAD4aVDuWq7zoJ1wUDsb2EWAEAYiKnHuMDvz9DzRwkfWkDu6kwQrq",
  "key14": "5B8GwUiAwMFZqT6JjcHF6wPePw5DB35gxgR3RBPr23G7sDApwMb9sSft2MUpwEtXBQPCr6gXd9TjoMh4FSJuRxV7",
  "key15": "4hYdFg2i7k79qdBye3EePtVrbDVLHDG1LXufRKMuudDjgdVqnccLhyDgLbuS8seNgP7K39CryYSHp1oouuZhrjNx",
  "key16": "4Rjh6bcrY981tCKBCSf58sxiwYNni7ehJHeKBJHXpRcbyvZC87tbPvJzvc5Vn37np7SaVmqMwJfNDx9SShHJZzep",
  "key17": "4szjU34xZoBq2nyAJwD8yRrDXTPR8QMmoUcs2W5ASU8t5TgpQi9zz4T5VXABMvFhwnEcGiCkHN58AN3XjdKDP2sm",
  "key18": "41T4Xj1jBz5oVAPCHNnoZyNSqvUuZaQ1HGbVvb3RgyBV1R1uqjvwgoWZ53C94Qx8FiUD2m1tCxAXEoYqrcEtiRx8",
  "key19": "4cQU7dVVkr3GWmc2ytriDG1JZtBvDUSqZVsGnQRZnZ4xGKjSZqtVus6tg3C1puFm941imBTfzYCk8ZnQFSCCqEse",
  "key20": "U1Usqzpzbx6c8aVb7yEM32H3dVZwiZWriiWJW2KZVsvL57iSYm1bdGaUcuLUDeymwW97cxAo1zyxSvsueMngPUF",
  "key21": "4AiJKQWf87XdXhB4hHkgFnGsfFXW2NKEK9JtwYncEMxvEvgNYyJPJcadT3CDHxUDNzvLmZhSW5sXfHMRAzWxoaYJ",
  "key22": "5H8nU2RDDPqu2JGbcxbMAZBRKLJ2GeKqEYctN6s7WUg6Q7G8JoWV9TaiyBjGFrFfh1XkYqcN4SLE9Kb7y7tAwR4i",
  "key23": "2PmWWu5cMtjrU6a6LmpeemAwp6a5ZsxpxQU6xUm5PrkoDo1NiTFb5sVYHn4usxHe26dSVhmWy9XyNsxVxvg6R9Q9",
  "key24": "2g7K4VCxemzsKtWe94t6jqpFeq4qB5tgbTaax81ag2Gr1FDcdomd6JDNMNBAnhxNpTLxdpHkn3e5vEhwi2yj3FK8",
  "key25": "3ZBR9R1DHgj2Ki5WdpgChmKFaf9ZQ3tR9ZkkQySQLb2bQuP2LvKyGiRs9mtaY6AUYp49vYR55Ry4rexVQM17h13D",
  "key26": "5WALrYiuZo1gwKyBEAgePo2jhFVneCNb9bzb5UX45hPXGuPjD6D7t1tJY6PtQFjPuKNwxmmyLZm75J3caGcXKqSr",
  "key27": "2wEfYJM6k8Yvk47tXu24Jp6AjJ9pbc6KftJhvQoQdUcyH3fpqU8dkgBhrzX8Z6nM65uL8GsyEYxNFcfj9M7P6vwX",
  "key28": "THqwhE5gbxFvfKnxx5eCjGPHyDLu9oAYCvzLjKqx5Kk42P44T56smpuhnr6VLxiYf8yBb1Ns9kReSxGFTmNMc2b",
  "key29": "3dc59Px6X9fayDWxiorAmh5zr5ZKMCQB3q9qsrJzzeQsvL6Shdh1Waao97MzJTsUy4siGd6SEbYvE5KwoymJHz9j",
  "key30": "4CavBToWHquuxDDVF8uBtLdTviaArP9VttxVnpvdDBpZmp2yBTGGTwsBTakHz846RqVW6nUazKJERU3M8E8wKueF",
  "key31": "5hRH6FNB49PSz3ogpf7ecwMPK2wgoV4K8jghvnNgKu4daJc1577DZtdNf5BuYCTy9i2C1fDX9KwygCybGYKqy264",
  "key32": "6485iLSfPRcNrjgjevDnqAExFC13h2Wrn2B1JSVFoU2PZni9cb9DqkPrVfE4SDYr1xr9jMq5G5GJ2TgFFJsr2bgY",
  "key33": "chRueb6qYgBL9ypTUaVkSXtWRxzGEQj6xWvz7WVT2xqV5tA9HRZwUmX94doFRjZkSAQY34qHw89ggGDAbhpMfbh",
  "key34": "5XoygjWNkXvtvU7Tu79moQkiQrAXqDBH21g8RFjG8WxmHdzUbFbWMCosh2TEU69kEDmCab2jC9Zm3pvZKGiiyKUe",
  "key35": "477GSmBdf25zRkJH7x1Qve2JeKmkTZyPfGXPdqn3RXyjYMhnZvsB5SUQiGYby3jAHb1bmREDDF1KMZJ4pZdHWtBc",
  "key36": "3vxnaZ7MTxPtvJu9HviNmBsdLPawbxLwjcgqZtEuxVDtr3WxosaW9q67ozHDyoDHy8ozpyJgDbWksyj5eo6qYe7Y",
  "key37": "4j2LXAHrEbKrgj8KR2B4QG1RXmPWDAs6WXb9QMAd3m1GRbPmwMkgwTBXoAGk2nU2Aci1t6qeuJBME8fvgbpKV37k"
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
