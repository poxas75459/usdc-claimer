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
    "3e7jwrWFt6pfoj2RbG5Z8iy6487ayMUwZgkLpvcJ8r9fTBgx9Ti3sUAobced3tBXJRPtokt4oa2VWLQ67ji9vLp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d6HvKPzDiPEqinE1XWWvzMJG8u1ezxFPJYNFSkgeqvH7gqCYmMiEXJ4xPgc2MSkKqtondM92k6QbZwUpjtX4MSp",
  "key1": "5idp7ERzyfGMu1enqmVRBJp3YGMFZd5nzWdG6Mog4fb1ybbeX1qX2wtrw25y98RKb8rBfq4F8YvGEYR3f1kJGqxu",
  "key2": "4uT1jAuK3gk9biJfBTGiMMYMAZYj7jUhiEpGgpVDHCaB81X2WsWoFPbgvRip8sGG6LkKSJRdFFamYxQ133iBt4JG",
  "key3": "5LiTBUGGBJW4thbzoiN2T8SxyxnWQaEeugm2XSW2qcMzDcqqDp9QaVmVPoTsvMzX93KrVyaDPhTVKW4Vofbx8rGy",
  "key4": "2yeXxY1wiwduXeD4HWhUL4b3rFikH9vSR3JRdBFXrWfkMDykUkUWZLLskSfU7HZQKwMT9c8k2mqFxs5EfXcSCjnc",
  "key5": "uzW8VSwwj89aeB9RdKMJPaVcLyLmornaM7Gr3Bmmw3JpW3ziQT59qieSMXv8CucW98pc9xJZWTUJdQHFaYV3W64",
  "key6": "4ubDnnXgWiDRW3YzxFkJvo5Zv1qee6BVXJEytgKAYg5q63NkiaBdnuAetUaKyL2ueWt4WYn2xXCAF4dEkhcYVXUo",
  "key7": "5Xh8jAA342TarNpmCxpWist2sfRB5xpHmVs12QMtegmLsMRigpnRtML26F5xXtwwkas1oYQbFd89nLc7dNKGhLZh",
  "key8": "21YaovhoPqRfDH8GjxZPaCp863LaLTtqno18BytgXbWTo7c197N21f2pTYBVGznriyte3yuSUnH8KyaiZe8udvK1",
  "key9": "4zMy6so6jpoEbzdwrYg4U4PEb9RPTU7Q94wo4Ng2mN3BWJDdG2otrMG54AsUTaTkLMPcME5S8KWQtxgVf3gy28bh",
  "key10": "3VKAi9meV81QrMt3sbLfKfkHhmf36EbgCMxDDDP3pa4KpYXXLpZCygeKRuH7wyX4LvVtAxP8gcC9sCyw3dak5n2d",
  "key11": "29dZjMTrSohhLXSSieLh1BvbvcCtbvk6ghSLwgn64c27wa7KVgGY4KGxj4SL4LviaMcH8qbokyzLZfDtTfNABSJB",
  "key12": "cDCZsZhgjCsP86iNMK1uBxKoNTNKD8VuKAbEyD3qFdwDJ4bNBvk1JQ3JWB4YyBVcKGnzcUH2JPN4Hj1fDQ82rXx",
  "key13": "dwXGU2GXNkcQ12TgzUrvrRC9Ytac4Byn9dieQJhTCncxN5GJ38tQ2JWxtupN3sryE1y5deHsDCRNdNQnp3GWTzV",
  "key14": "39TpJqEmudPpuJEqYR95bnNeBLvBjNaoU9PVtKPzbR34wPisLEJMYX9XfERREQ2TrabAaUJcC9wmhzwMwQMBEw7i",
  "key15": "22D2eTfJuHc48BUPKGZE2iPEJG8hVUKJjvTfZp5wvwddAbB76VBdmvM6dmaCRBw98KwvLL33gz4oJw4xfkK58iXo",
  "key16": "4RGV6HFY1jn6VaYKk1JTrn6SqxMjtraH1dBziQA3SSdznbJRpmgkUoXZXHWbQxnkAaNHxagCTJGDkxijWEEBZccs",
  "key17": "59qGW514aRk2iha4cWaTQNnMyaydkTNRLgzRzRw33dnSTdMY8kjgdiRAbPC2ikbQPGwBg1VHycwfoEb2p8oaRudY",
  "key18": "5bLX61UBLhyFtA7dsu7KtUJB5sh72HEv98uMjBpWSPGcrWMBrziVo18yrZtiJtCAQwWczTeteeNhjq4tBwUCqtAB",
  "key19": "2m3Kndc7oGGhLNn3Vm4T2Tb5AbZsYrZtBr8UhYgGJZQe4B1j98oxAAHzDDJEnw5Gs7BhqfUUDX7zTktCYAvrmLd1",
  "key20": "37pfUMdTyA1DEfC1Ghh1SjC2QfiVgQT5HfyxDub6hgUJa1Ceeixk6UTXdjK6rnuLek25MRkV5cPuPQVTvGLEkemH",
  "key21": "3EWft3t2aR27bpRFqpFPxt9iZTV2PJaioEkYKCXTvjoX6BuKwkrjUmu9v6sfDBi5npK1KEYp6s7Z3Vmjs8FSS9kV",
  "key22": "5bC3uLvBAx5eBuyUG6pLu4UPobPS92evxxLTVj26rDgQyBptErAfAM6dVRCmwE9C75mPYLfRv4dVuPxKGDuMNg8f",
  "key23": "5BYwDLW2ikMM4nzdvkHc5v4jZxcSz31t2KhceiRHrroQVAU9aMRaVGXpTFcFaFQdHeQuMTTaDKXsV1MLrsGtWRMM",
  "key24": "4671jqW3Jc3ays2CPw5KkLcZupVxF4LcB9u1Hrw66XNaZ6TAHoCjGxvyziDUscDHNhkr7pQV6LtcPJnQCTTE7ofe",
  "key25": "4Umx3P1joes9wpbV8CEcKaWvikAqVigvmPes6xpHnGRJXhtCRLV2vhUyX2LjnqfQXyvAoSQ7DN7tCtf6ExGoMBsh",
  "key26": "4uPQerfjdLjJzphnYZJgPo8aVRLkEXLJYK6oTV2LMQhPqyqC5io3dURzJx8jsoGS4rix12Prs6H3QsNAQVf59PKC",
  "key27": "62CaaPZbeo7rcLmMgTMyvitr1swfbFczQQMdtB9honompqZwSs51wUa9RPnov6q4YemtATXtR3cZQ6JnU26hWQ7Z",
  "key28": "38WnR1K6GfFnjRoE6F4TGYBZaCRHiHYotNpArouffkwfzXeSntQMQMzuwyfjCeDFhjkyH6YBP887siCETNhkeUvC",
  "key29": "4P9tbuPjNsNJ7smr64Xqzq5PfUuKCkAAhGyuxV7YLmTAno8utuQc2WR7i964eLVPEXmMvagaJV3n3MTjCz7MqzbG",
  "key30": "4AW2VpC9qsF9DLDHTxNMj5rgQDeGHJMZRtu8q7wPmVuPv73Dav9WQ9ssNmErMkf8MEcQbRiFWuGddUATJwnRUS9A",
  "key31": "4b6oaurF1i6wnt4AojMj8iL4QK8Er2xqKWrKuaeB9tH5k1vePJAFyo8eXBUDCvPLzw791qSjGKp6ECXAF7LXJZV6",
  "key32": "2MUh8z8sLfZnSAeK9Cgq9zjUqDY7RixWX6HzxzaE9CHFv4Y8aZchV4RhFZaAxDoNaoDmb68t8VCNgNyfABKnstJT"
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
