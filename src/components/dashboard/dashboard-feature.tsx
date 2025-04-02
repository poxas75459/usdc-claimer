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
    "4VR9eiWrfsybHWcF343syphCaAk67a6MYZB7erw6wPEyr7qFJ9zyEF6eTucSNU6s22j8MndjJqe3KqMUh1kpsE2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AoqpND4WsJJmEz5JmFsiGgqnrQNMFKpJvYbsPN5DBVvEf6nU2iC4pFJMpv8J8exYP4ASYeCUpUGGE6ipVtsM462",
  "key1": "ve1eqX5iuCKEbthwUnHewQPM8zhTmjpcicQ9KL8YrDfGbKU6PHDvGYnCPtVQRzVNVExxp4yjQ3JRhHaFMutNY1i",
  "key2": "45r97cda53CXev54gvXP1SrBDri7GZs8KRLdjECSqg8WU3j5kbyNfbYUvmM27dUeZ4ne9H7CCTsjfAMNxcBnfG3A",
  "key3": "3yutN5iXPUar532bZTUze5Nb5qsEhB5hmb7sH8jzYYrMynSq5u1zEUvC276b5ZN4KUUfNKx7CMKTTgb5SHhmvEFQ",
  "key4": "1geZvweJnWmeCcjcudEs8bEgrwKh9Xnxo23agbLjuJht5dnMTwr4LAq6EoGPMKiXMCUjJTwLAgdc2tsB61NDedL",
  "key5": "4opcReapa8gYMHeLRYSeBzoUudKTiSEiZfc4XnczhYQkhDnLYpvXgiCuhULUK7D3h7XnidG7J4NDAsn4Qsmnn3Jc",
  "key6": "5tNnMXd5LhGutL8t7ByjeAwitrKYsj3iwnGuyo1xd9Sh6RDu6UATXYXDUNLxrNJWGqWDhjfnYPmr9FwYpSxbKUxm",
  "key7": "674pDGXLkRZ6YJYsLByv1wY5kx7RiN2nbhokAw5hqhxPFN6NyjXBnBkXVH1XXnRSp6gZcD2t2ujy4FPDthKMWmtZ",
  "key8": "2Mi6g8vwBqmVUXqvG6sNDAX3QepxVGuRKxaqmdmCg7SzTvE7f2Reby3mVqQNojHnwbesRzZXKUNiumUohjRaykzo",
  "key9": "49BPZ7gQMkSwnph6tbRdHbNWXRojRFEyVPWHYutDENuFRt5wC6HhadfPEFjWgEsF5Et3QkRWETpgi3hDCyLnfUF4",
  "key10": "2nNEyiGj74SabWBVrMr1VqxNxRfnx4c5EoBqh62KKvvt9B6Vsxs3dbfq4WNuc3DhZ1MWwomxjrDtDfrbVSEqpTwg",
  "key11": "5bncydKELHKD1CkP5ngr9UDDtQyiQmvMPGRubQHREbbp1cCj5r7f1597hPjgo5BEwpFNE6H1rocUKd2VHfv593NF",
  "key12": "oCZGtu3Haw1ceg17cYoRZeQjcfTA2kEuK3nvZCMStViyBbrfKC6zdfQvpVTxn3EouBgn86zSteWuJp7iTavseB3",
  "key13": "36iWg2o7L8zwsGcFSYSU5T8T6sditHWtWjPLDXV2Lpe5ELiHnaD52Ff7BpkQWd5RfDkCeSPUtSBfwADZtph1dznp",
  "key14": "4kZmgNggyKmgEekvTV8efvoi8NbMaezd448xECxonUpoXHoidozQzPpMzWjGXwwQahLzzakUM23KcfoG3bosVTkT",
  "key15": "Z4zs4RRjHrnpDyYqZGRh7Z7akzWszW93poaau1JC9f5JvJVwrCcSCWFJYGZ9XRihwvMzgjbcytR5H27ZCxdW9C4",
  "key16": "SoVbfPXqHq6622ubpQSbNnMMbaKARWwabNH3kgQxB8k9FjPgJFZF21ZiZqx6cSFAekFgRfqzdkuUKWrC5Vj3wuP",
  "key17": "5iEDSHrCXijgUDTgbsCJrraZmD8bPWyeepUjn8MLw4T9yvYm7Go7Dh47hhtEbYXTwduUJiQEfKFUSUQAWzmDrciP",
  "key18": "94iL9iW1JL3Fw1M1GFNTZRjGvyhrdkWdNvf9G4dHi86pNJKHrpruPzUYdVoWBbyVxj4u8i6KLZUq2EgMAmrrvKL",
  "key19": "4xU28goKv52tBwqMqaoasym54uXT2D7TMLXGv6yzoUR3GmVx22BhWXGULUPnnHDB4FUA9sL67Q36yKmMnDbg1RqV",
  "key20": "4oQVmsXek6wMSnXFqiTu7wvWoU13pbujdjy5Wsh5uYS7AfCKehRHYoCuVLb5jXTHtpST8upgSefYjE3s8soyxk8n",
  "key21": "PLyejKSpYumQCQAi1DsvpKLKyJrRGw6CC5BiH9oCHDd3JboSqfhoCXXBjzFoTcBPR9pL87eHx72WYme3uJ8GUDg",
  "key22": "3o4BmLBQmdcYLUznihXthqNctuWmzbqGmQcJo785MLCrprvAFWoQF2aBzeYsPqE9MJ4iMHpRfHQaJA2d11GKRC4v",
  "key23": "2p92WX9fhyP8i3w5GiAnda1r2bM1qTqfPAKHsQgfJKPf4SedCGYaeQfGN5WtX7U6TNH5RnBBFYwKF3kQfRmNk7pA",
  "key24": "LtpfJBi3P9z5PpcCCgTSRqYVsS9JDzQXFuhpuP8R4U35VZEWHjNdWkTz7G4qgeQodkNrhCPdnycBbZ5ZWdrjXbZ",
  "key25": "3dojU932qxsaJb6iAoKubiWSmdS9viCq8Jbhb38YVCCkMSBugsThW7DaHWr6azs5C2KEuXHFNEJTwzh8gkbu7341",
  "key26": "2wjGzS31Gt53Vfi48yaEA7Qao5rYbGpBMqAc8R8oS2WGEj4mtTczfXGwByT3oBxaLq6V8EroJxkYzTUjxmwc8GdP",
  "key27": "6W5SGaQXFwjRt7tppe8LYWWkkFX9EFj3jotzZkyxMFac5fQjX6nVQTjVtp3E4ENKEYXmPHnXSQBKHHumSufHGFE",
  "key28": "2ThzEJWg1S2gWHYn2ACw1PTnUG7Zgvkz7QZ1KPhEZeDsD8jxLLkShwh6G3KbHCE6jG3StmFzK2bxatBuC2YRQ28B",
  "key29": "2jUNWaWbRokrNr3ZjPkHmFuVks98m5PNgeykMG5sjxabEfYTKSRniJy3XanLtCcLdCQXbPsCVA5dFmn5CjiCUoHu",
  "key30": "4mPs1xj1woC2GbTgvtkbpAVke9jvKgdb7Ss4WmAFr4gosoh9ZW194mMfbX4UQPAscxHYUfaPHDLps8HfujPTi1GZ",
  "key31": "3Ugt2bjN3CVoDLnVKfNvddZLThmaeXeJFPSw48NoDh3PDuQjqY76LbH5tLQx9R1WDbykzrqWbkr1uUUz293Y6D1b",
  "key32": "596J6q2sat4W9wMox9PzxPVdKFUHNyym688tXPtjvVRWDGqeUqCWkpawWE1f1szQhvQKyfLYKgQoafzr12ZQHdxH",
  "key33": "35vQMy8Lr1YUQa8U1KUbhAABb53ycfTGiWqZEmaKBR4CmDJN1KxoKdAz4wyXPeD6CaUHBpqzoskyEW8DPjff7VHH",
  "key34": "4mAZ8Tz2DsFU1HmxoFVRZn5TeNdjEr7jLHNKj1ieCb4Q8otFz4zdn8ju9237q5nK7ZKye5oMhqqtAhboCT26Gv8h"
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
