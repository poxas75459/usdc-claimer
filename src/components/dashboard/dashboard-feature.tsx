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
    "4SfWbManXMhrcCsGHdsJdhLNfderSdfyQJfF1qGn3xfbWFefogg3maPg8b5sgmBosU927Uf32yopGU69PeccGvLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yWU6H4dRZ7ABskZbGWeaGSr6XFp4zssDBvHHanGnkpkCHKwNLvE8LijsoLNx2qhfhHTRSkRPpsjDfF2DgHVr8te",
  "key1": "293trPYFAZ8HmeFvWzmbaSXMjmxdozS83LyUZ36rN5iMhYaYhFfHijejm6Q9K3SW8sNdPd7CXYEtVVx2czjMBiTz",
  "key2": "5vbM5ETuvbBvGrL92Jib9d9swGp8ch7yXUnHcy5q7B3SdHXrjkWj21FxLgapozySdkqN1jXiKmy1uygQxzPHfi15",
  "key3": "oRHV1tjG2HWouPMQc5jXzTqK7gDBXUYaxUhZ9SdF3Kw7w4YugDPCp8Gxy6sRJ9x3ijfF8pwHYTAqmQTmhnNR2dQ",
  "key4": "4MkuVD5i7VfdB9wJaaSoyGffYkFgo38LetnJHCxy44b6RbDN3r5gW1W2hZNS7dDzfMdwVCCAGiEYJrnGLKweYsoF",
  "key5": "45fNKuNhtmyHa1YgWybYAcV9aJewdzH93Les2hnVHH2wat11BNyvoWopbwCNfpXXwP7v7wgEUaWaYPzZPodcXP1y",
  "key6": "4tYe5xAW9wQMd4KWW7p8Edmfnuts2AfPnRD7E8mTZtxkLpzga4LDBehfhdDrdB12kkNR6HYYUb1UtXmAy48xNNpo",
  "key7": "3rQxiEc4bQbkL7sWicpwEirLQMYURJFJJ3mjEqFYGG62CvrthUWy5aWkojHwr4aLDkTFyV6DCre9kRcEgDLXY3D3",
  "key8": "6ePrX7eag91qVnQch7fruBmccTy8pX25DhoUUqWJq5gBNKEXGDfvz7nu56EifUhMXVdiZ6ASHStwf4Gp2VjxgFW",
  "key9": "fxG4mUsPEjjWPhAwvbXmSE5kXcc56q1Z3mGe7WD2ssJh59SuX3nCp16JW7L8bNzgMqLTdTcU8ssoGus867XvTNE",
  "key10": "666Ge8R38WxakJUbV4hSLZJV4QjpL4hNvrs5vBDe64Fys6P6uuF9aYBMZGg7TT7BSK36odXpB9QUCZz6oU6hbRFJ",
  "key11": "29AoTg7gWePewv4PMkosVkKkWJhDvmoHFN7L1SdThQBgNb2n5pZdkdLLpkVXEsYmqb8pQCQggHtt7b6vGs6XK984",
  "key12": "23rUjBCQvtHtjxxiwsNFpvPUVnJkT96JQRREDAZzi9cH7jTTyfzJJSQrguW8qqvBnKmQhRKvgPRLzKUCqiP8GJz1",
  "key13": "YtnAC5EmPWZuaXFUBZaUrSHv5PHSuCoMYeiyRkhaEgJ1p7wst8tv9Ny7Mf3EzEkEnTXmZE7CW6MkLargMJhCNeQ",
  "key14": "47xRPTca11APFu7TnQ8xJtibok4J53MbLRVVyejQ63A1MJ8WanVpCmQCo9g51ZoQfmd2mAhbcRivCUSKJBbfPt1c",
  "key15": "22rjvJLm61meNzmesyu4UjgokjzyJFKVLNbRiM5631SbProqDyt9x9NEEryryWPP4PquDMe16qw9bckLHuVEK1N1",
  "key16": "5QrBQxKyr4Vz2nskyY5pV2EnHFxEBjhHcrFxAyGzSDmY4GpkaEggt27oJVUH1RgHcKMqQCuWvtQkRqvrBWGP6mrg",
  "key17": "3s4nq23guh1VYoffLGL6am8Bpf8xALLUbLyxzQcDJrB2oMzdmnL1MeNksxg3LjeEDk37oeKmX9VE7KfFKhimXgv1",
  "key18": "EPrAw6Sy3Nt7MCvrMLNUo9QJtuZ39oGWM19NYZDECNSVGyLY5xiTgf1gwfXHC6rMP7FgVbzk6q4NzQc8yPp7AmT",
  "key19": "4ovFCdPgkUP8vnzquYB75ggswEFgfXjkxk7iRUvprmJYGsE1jtsoBddr3M1KkcEacgnBUfBcJ4fNTQLTzEdbf3FN",
  "key20": "5eP5YbDpxzew4ZMHWP9CKAjbXmk9pNRppGFM8eEzHKnpkMjduLFR9Wtvj6HtKp4W1SZXjuZ9NntxuYetdRRNpFEi",
  "key21": "3XNhwDLD98X6j5giJywxDt1XeZLHmJpLzzQ4pjohBbYofxdX6qYyNoG76vFH6xB8HqjnsgB7daW7WemRrAkNtKQJ",
  "key22": "4KLcJUBKvkYMpLUgrDDGK8wXHCoNc4JUfYtrDUxjFtwU8SZEkf1tWt81jKV1nhPYdpiTmSPFbSR46TNVaGSBMMfD",
  "key23": "5HcLsjXCPGCSCWCfPwqEfEx9r7iZDJs1B8oYtEreX7pkguwKd2doj5vxoLuXiQ7AH7CvFWNd4p9rPeXAf9FMgy8S",
  "key24": "52NGTrkYvjENN5GKoq7CDfMCaF7L9gBRmeHqEMZC361dHxz4EiagHGdwRXM1KM2YZKxTcZjU8Q6hwLKWUfy3MTWK",
  "key25": "3q7SNX9FyaRJ2d8yVxLsU8w3Ym5rVytqKk58cWUYxybR6GMvMex3bETcykG1mu6zYcErrvNjsk3X8LL7z6PxuBAa",
  "key26": "2HUHizbx4qM5dUKXWgSNC4gLmMwSEEuKRoJZ57RXs8KrZZMW42G2bnfjeRLpTi2sLaLkBMkzp66zW4JYbRdBtKcL",
  "key27": "hYSFnDY3VKEwzb41Ardhn2tGmhUdCFnWRVdg5Pq6bo4M3PcTFvKgsCsm3Fvz3GgGvmmiFWPWvM3PUowZRXYQg15",
  "key28": "5zTJbKd2NNG8xashdv2zhNeYdcwmqw69X5itHCFomM2gLLfvfim6aLP6GkD5MuF9GTwRvNJfK5ztmLNXCBPZYPxY",
  "key29": "23mevwG8yhhXaxq4WmjHURMRfqqNSNZV8QUXJ7Vj9wjKcpJrJ1JVUyGnVL1da68DB6fvNM3BfCQ4CRyCBF3PhZQw",
  "key30": "3XPdnRXNupMwYTTqdffW3hGuVQZAN7ihczUrfYibBV2XhyNME3rG2VnLPZyeFpMLnXpHwSeNKhqJ31cFpHQTGVKE",
  "key31": "62MiBYR95ca1DG5pkmY4Q6uxP79vTzdSQ4mn3vWviJ8Wtx7KDTLwcNEPkyKFYF9h4TRYZtGS7g7P7PYVor7xvSDE",
  "key32": "62DQHqGB1wZj7uAzG3DgAMMnFJ2sjYH5pmC6LZvGBVG9EzZRNWxia8YQ7kWw2USxsMprwvAHijVdZ7m71xjcG1a2",
  "key33": "41g8GeUhppq3TftJd65cYYkxvvuWWcjhmikZHKPANioL4Vsvmn8hwNX9xT1yYBEkoFCNQEYrg9cKawcmqv5BswjW",
  "key34": "2jyjYQpwoCQbc9DmN9feaRi8kCXoyHrAEF2xhBRtAxJnmkHut9Q7QM4cGUHq9b4a7idz8mUiw9marPCgbEEtyXco",
  "key35": "3x8FcrsX9DkCMhtax94TN1nhVEnoZYSDVuDe3eiLtcGeG9rBCzLj9qv5ebx3ZEDNBGUeSFVGQBXmYfS5VuuSaHva",
  "key36": "3CbW9p46ppjYkza3Z9J2tbATM4EiRJWSbVSLv6dmUn53JHBmayW3sPCXHxynv7CQUwiQ2DWQAw4DLyk8NgamBVTG",
  "key37": "gNBJxM8FzLkbfc14goGZWDqnrA1fu1Xn2VqbGzq1zyp9smtHiuoG2ca4NQvPRPcbLCsWDdcAZ5q79yAVo4x3EFQ",
  "key38": "4hu2yqihaiNDxcVHmyb6exhJzVtfjr2nKve5k9D3wU74xTSSmSLTfbC262vWW2tgzKi6LkXHKNrQKop4JaXFiVrB",
  "key39": "2EqaAsmR2BVdHyVDjmKh4jhsiJxeVeD1ny2UNPctzHGphwf5YenJi6JncnNpRHoncUNMdshdvyVDUubwoa55wUo8"
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
