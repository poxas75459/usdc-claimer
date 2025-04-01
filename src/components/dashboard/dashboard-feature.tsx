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
    "31u3NNbNr1vXcuLzQPryaRveRewshjS3ofKLt3mJA2sUknvjfYTyRg2pFZSM2ZRVvF9g2hnGmh35fXY1LmnoARGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTz9gcnfVkLq8bfYmKf5aQ8gA1HHUtgAud8B7pxHzxsSVegN9e4ucUYwoL1zvSNNY4Gft7Ra3U5kqYDpqwh18m3",
  "key1": "wquUvSaNchjdodqUnAnfeahSBXmfxxJJA6Xgm6879bceCnioaA5PCi8XCYpH92iVHQP2fbn3wpqHApv85WTt9Pv",
  "key2": "2uHXqomBdC13QsEziYx9kx9hzd38UfJ8ez63qrNDbSavtqf8dDfCpX8kweaG2B59L6fukX9MR1GM7kcwAyrf3Qr2",
  "key3": "4fMMf5sf4SpFgeXaxQzW3ZhSzpg6s6cBKDpiJ5QFEKNzoVdUmkd5NmCMYUNFaUJWYDpuEn2dCwbURHWCY17N1tVu",
  "key4": "ZsrQvuaq7J5WYKM9yDMRvrSeshVWzfW9mvLFyaAcCiq2sQ7Pi15sedB4XZnXoMFSfGoXXRgYQ73iZizTZRt5SvZ",
  "key5": "3augwAjbcNdSpw1DJTfsdhErC9x6KdSBNfoywNLnGFs6PZ4mFGVtGtoUWBX9NE7M9BvwMP26u9b4C4zGax4RcMbk",
  "key6": "2Mb55JjgPCtar5AMnzXBfrKL2TvBALeZ5ixwezaJP384uJEptKKsbntTUbka2BRaE5VieT7yP2mVr3AZAJrPtY88",
  "key7": "TwQy1fLSLaFUehmGWEmY58J6pFezZMSuZf9upfvbZixTyBt2RHqDZMgVBmCeKSSLijNTCxYkueVR7WnYZWBR9vQ",
  "key8": "27Z9u2M3PoJK4FhcQ7y4TXBt8Zx4WQ4dFspfiZt9z59sE3SmAmjC9mD7c8LSpsz14AWxibwrvXhxh8cgRAgnK9MB",
  "key9": "3TD7p3Gq2hdoRsN8xJjh6Q8BcTPi1zE3DdBkcPScD4WSCRi821rx2AGXFCQAzYo4edWZpN579gDPkPqF4YhE2GFn",
  "key10": "4ga4NGhVgknGVfdsCuSGbw7teB92KhfY91Q3yimQXsucBL8VKLHuoCda3omz5Ko6f8Vg8QasWBxYHRRcjj6iB7BH",
  "key11": "4RA6iPnUWsybKS1SkXNi82uBs8VtwUfBTR8MMiak27ezyQSPXUNdt2V171WNpHVLbrZSR8Mc2YP7ztuswc6qG7Z6",
  "key12": "5bCAYa22Totnz6bSLTCFVpQG8R9bVtZyod2XmfZuD1bNNQePHJA4ia9nngz6xC4Jg8LxkUQPeENrWusjWPDLKxag",
  "key13": "52A29FxZmQCMZJBPRavAYt7dZHD4BASrqqiGxwpGNYRsdSrh3TatKkkdAzbfgPKqoCQzDpMiTBPPJu4kXnzK8uv7",
  "key14": "5C2zymviCaPBXpRaGqxoE2RhXQUEfGKtpRpxJYL6mA8bqnRzJc52vS3ndXvuNb1HR83a8iUgApZ8RqkejrQ9yJkn",
  "key15": "4rwZRwFgmNGM89xWS4xJRs8bLCWqDzqwhQPNN1uDXs2NpNpBbWFzMJy4aQaNA6LkqF73x4WyLiHEmbt1rUgsDKPm",
  "key16": "4dQ727qJTFV9976GjiMk7R4kcGx1rnpZx65XX3Av9Epm7287XnG4snTbcNrafKG3Xji8xiWwkFdA9szTEDaVjvVL",
  "key17": "245n3S4fvoSbRNskB3Q3nas7EZUXgp2dCCVj59QqsWxzF9keWobmoKz7fnQ9DLhRMmzwRck7xdi56bHRnAbQKjdi",
  "key18": "2osaURAyXzizgvc3hGge886hT3PMn38cSfHstHJhkcUmwQXa7uPucv5MLeBPZvPuFuYsGxMc7v2kheAtDX9xYMDF",
  "key19": "4tRj4RYW9ZZRcR7BCR3EVp47V6ExuFiDu5cMHJKsgXRbGR9KtToF9ga9E5Mpy2KkgyC6Gy634J4wVmYNfVSHQ7j6",
  "key20": "3E2bqBsXzZZHEgbwT3YDfWFp5m8fKmBToaCduW9fiCUHLvfpgDZhQPaqmNMB2rZMDwaFSXYYq7Hv8ozcWHYYTGWP",
  "key21": "ceHK7fMFJLJfa89pyfteqaNm5Df11KyHqRwauG9yXXovo4GTJopxctVEvv2AgskPnauv1sLCYsfpiR9BJ7WFqNA",
  "key22": "2QkM2gmBB7Uiwefov2TwQCG4QMrQLHdUVwjRDRNd83hKJDB8xfVbv3LD7UZuF4Yu75LJiWZgTMw1vJgLUqFJvaXf",
  "key23": "3XoYEc9wakBcNZhvf5qLprHG8kFWD9EhwSja58V4GuhPBwtwKzoYZkMnY79euhv9gm3hZU1naoNPVNC5Wzyhz2pn",
  "key24": "5JwSaA4siZBRsNnsof993ptEP3HQppfEfXX4aPXQevoioTQirWkSXeR49YFv47TXkqDdtJ8RWazgcTWiskxbY7S9",
  "key25": "3gykZjY9Qz8ctgCdQs1kYFJDmDjNkZJza2PJrRoWrtTJLCiEWm3xX8FhAmB2BF8yLSZNLi2DdxKB7Z2kx52a7Bbr",
  "key26": "RUYtnJNQQCy54oMv3sArkc2fcJZwo46fvaJoqGGPgp6P9o6dEJBRfRKnjSLwzwRRPhE9tTNPnKR9qxjqQ1zScZB",
  "key27": "4X1sJdzogY4aebn944bC2yGFQ8PPei5pPfqGC1BzGmDrwvCgmVYHTPdiNrHDJ9f3t6GyZYUnwkn8LVjfRckEqri9",
  "key28": "2tSyJ7cgCbiuJmwPtSvtAkLfE47kVb6adAE6UQEL2hcVcJnDoH3KAdxVBJDLoT2nfPXXVaDcwFtkDBRPh1CpK3so",
  "key29": "MfRh2HPTSsDGgQ14gd89GW2ny6TnwRKtsHmuoAnySzceMUqnpYjM35MN3juCavA4qa98KU3JXydT6UM6qjZu7bx",
  "key30": "5onZKc4RGM41oSvoRJSMvpCiAZzGL23Bv8qebSdGhJTST5xz3CPuNJzpM3kcDfzjgKcyBQaD6ioYJ53zF6bsbRjg",
  "key31": "2hSWUgGAv4jecr2cnU6FSCKH92AMrmh8t74d98SxXAAQgtYSmZEysF7pRKaPFDfNPx1EnXq6NEWy7Enten94XFBF",
  "key32": "3Vmi6vWqrXDwUoMszsscu3WrxeDdxPEuuaFTR2nnNc15maPsHJjALzFvZWywZXvF9Y37rDGjQ1yBbuvNe26XhVNf",
  "key33": "2Kxnj75gbStFh8C3g6WpJZ7Foe8CTBM6D5xzGBNTdT3kosMQ9yCYudVau6cGBdtGugj8qoyVy7VHevLbM7dviXK1",
  "key34": "2nyA58ryGYMYkss4jPCXdzwCpGGsW7rVoteSMYAdkkUfjsaV3rvYgxsFuHcXMu4RLGzXPPWsmpLdE2SmidpYsGNX",
  "key35": "5qkHK5SR7RABgjs5M96yewU2ZQ9un19zTVd46wBdu9QJMoAuxg8WcAkqrDhJ3oGVZXPZCgpJL9baYCHmmgscUGi4"
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
