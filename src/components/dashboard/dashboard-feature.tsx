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
    "2DCZtN745qhPmNmxBJY2mN1bPvtcCrubKrTy1ue8J2PpXV5tQrXPM2EuHnjFKzywHpsynYjWpz3RmiqVn2qZ6J4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cC3vv2caoKGeNwT7s8thKeECNNCYB6GWCm7niH4gFSW4qVJJigUrB9ubyEjqmjveCEdweqidGgQ6cJREnjnoKfv",
  "key1": "5FsAyZmQ1EJcTP1j8xNrev2P4D9Qhxw6FqKvgws5cqWF23tkqKz8rJx53CoCH2yc5yuSTpL4RArED7MAUoZvNneb",
  "key2": "nA1JiaUyDQpnWNaygGGzJ2kkkqGbDTyidVbz5CqMcBkebym7X6RKPetNswJEaZdGkyveKB98b1fV9oebdtVFAUG",
  "key3": "44YurvDRKXBsRqXBL1xfMVWGNLCdPKVkzmkMUdHvxBkq6XqZnLBBtJY11grYrrAj3LxcReow88Em8twbg16ewDs7",
  "key4": "31kidsa6xc6oqxYqdUi1KFPxLtst2X98FjHL9jPZWDjf8hzrkx5Bh2T99xDtsgE72TfHb9kVaVQQXM99wYEkpQSV",
  "key5": "2wYMVsH2HiaA1VRZNF3T4HwAWMcHPsG7Ki3yNYzXjGcmcZHYFwa8k5a99uuZopahE89i9fbM1LiLGhVjB6oTwFf6",
  "key6": "YQjouk2RM3ddXyTKcPDaKYFJn4LNPGXbRNECCYAYQ7q9hWdxn8nDj7jvhQcRYwenAdpng7oNUDA8ceRoJJpURFG",
  "key7": "2WaRUMdGWsPSDdw3ezWHmhDE7JbNm5s3CsXX4XvhGXcHc2pGRZaU9xtCumTegy66XPrDdNRvRwoGahzquj3VwFYD",
  "key8": "5ZY4PbXhZvSMVTAxihBGMHkNhvbf4fv9Ay1aEs32PWUxwgr3KxWZkBWfpBpCgc3JZTkDmqRVyhk1Az8agYN61cE8",
  "key9": "saNy8NVrv9guUyA9CziNBqv7mXuAktRuqRRwqPAZWZYwKFPr7YXWWnmWoDfoXbSTfEBpcSeA8qP5zcD9vSR6uuo",
  "key10": "51B5odgNtZrF7H3p49wxG9wi83JykWFiuWBAeNF5q6yvKWqL6My17NwySYo9KQb6tuoyobiF5NBrKhBdFrBiPsgU",
  "key11": "4Ze7GVa2JDZhqj9vVuMwXb1gnzjRyspnQVoL8RpSHM68ESSaYWcXwKDfpZvHc7AWhumpKBRsg3JV48gpPerWFiCK",
  "key12": "5VRRBSA8Ttcq9EgArCAuovys94RynxWWZXCuBTyo4cUxFx4nUBQE5eMJLWeKNtzTqSmhmdYUnZPrbawT4J3zjsGw",
  "key13": "2PfjePL5Fr9Hd37PzUiigLApaQw2XbMMJcdhrbH3WXZgYqyyuZj9KHcTJ7F5CVPRXNvhZWgiGSa11yAyJ1PiM8Rm",
  "key14": "5mZRozkrdNatS4wHPJm5o1TUFmFjCjZs8FoFJMXzLv32wtfgsYzaUrhCxd6VEmta35KmzcREhbRKJhht414EKzhe",
  "key15": "3P5cy7fcYP9r2MKyiP4vpPUqDK9JQsuRpc1FmWwCrwZsybdZ553DZN8KzcTghYq8zETXQCJn1NDGpcbgKDNXWnwN",
  "key16": "63ZckHmRSdE5xEqvasBQJ4W6q2YpZSqjcjXqfA5PhVTAoPpLwufxVzmZDQBJTAjUuztpR34CHtU3wtTE62qLjyos",
  "key17": "xH8K2YB31dr59GNF5Mjnuf89nnptrE88PuXgVuQs1ndZYjN1gsgHbT9ufhjEbEEkWSTtSdDRwiApTRnzxPCMkfj",
  "key18": "5gRL7S8PwqBFtwrdXhwZNPquiCKU4gZZvJ4YyPtFpdVVwmSKKtwops6CEPtNo28vHnuZ92J8ZG43rgXgGrVZhgWa",
  "key19": "cEfpwGDXMDVseXSSX5RHsQR8crkHpDwYdzj4rVT3DLRF2i8oBaxrqGrpAPSTsSfjpm8PFK8wPdSKEo7NvdnLG9Q",
  "key20": "3yvJm63S9vKbwsg4NuEpktsVJvKynAQKytvBQK1YXmxHULdZjczYSXLbR8bSY74dxyFFWroK5WgABubs6ojMQzxD",
  "key21": "DrFQCamCrvEUsa4Uezp8RAELoUFNvbn1fw3sUqLoFGBVi8o7o3t6FcNoBjKEs7wtMBYEjDXRhK6ACXGVoX6QHxP",
  "key22": "58ik3G6E9Cwg7f1SYrxuYvtwZ8ncertQ7N7vjK7LebrrnWPGV1h4j9RbP4U7UiQFSZULwZPHEHnkrNahzArNEPXC",
  "key23": "5VxSf3SEbqKB98BBt2h7wDiCFyzy4UizvHskd2aMEqsKSWdcYFDnBd7GSSYSHiZWLxET8f7mU3W2eY7i7TNJQURH",
  "key24": "5zkpHt2hSMDC6D9eFn3fccmSUHQUjxRjL18c2a187QQQGW86R5Xef7pKyeRFHWGCZ9Ri6fjLhUfYaJ3dGM3duAMY",
  "key25": "5rc5CwSUeoSeZnAwFEuEaR6J42TAABZHiBA6WwSdMppVrn62jwsPW2YPPc1ZfUsXDZobm2h7ztNgbgzRF7oLShnA",
  "key26": "2mTeLhP7h9veTM7UUdzLYUEtpiJwKgJz4XVCUphx4hDQmDfBimk8dSz5n3TgQsfkhNJK9fLy6wPKkHGW7H3MGuto",
  "key27": "5rFSoMvDiLf2ZyCiYXLTxCsGJ4vB2uRhT27vCpoQkxbTZyfnJAB1Y1m9imNMuBkEXNJNK74aB9rYQKov2xv5gHxK",
  "key28": "46UJH1zrWqGnbyECAqhiUhVdTYBapXTkSnSorqVGnWQi1n9ZvxjcpFWLaNAmjcn6LZ7or5Tg9WuZooiB6eMQJQWb",
  "key29": "5L7qDsHoUKL7oNb3nyVYvDwDS1beNiaybeQbabazEhzLd8AoPez6rRz7zb4KuGT5zW62UAEym5umts5CiaUqFh9X",
  "key30": "4fAJbSVa6zmpVahekLz4JNqH4esSZdHVUDvcPWDUagtJeiM24htYpRNFR5eqnJqCK6pDN9qPLXcEe2rfMDRqGjsf",
  "key31": "4kfsnfjKRYV6BPxvFyqh7GErLeDN1gh66ggiAJxMs6HFEHVrJTaUAC3bGR5grLkB8BuedN6n1daKw1o3K6ynojKy",
  "key32": "3VJSDLXn89gjjx3nWfmbGpA1QtiLzvodYxAu8DqT1RWCa82iDLpj9DvqLmy3tWbWhYYNAKw61Y7oucZkorT3vRTz",
  "key33": "5JWJw4wrgFHmFA7GGeqA1Xwc1nvv5MTbBmFzLKADHTjtp8aL5KuJmPHoA67v9EEEYpXQut9TQmvRZDASJtADDtnW",
  "key34": "67qGAGw2D5yxXEphHiLZc8eMvde1BDppWmAvKY7xJbPdJPVnF5Xw8bW9zeR4uiyD827dnf4s4PmJxrSFV9sDmX6Q",
  "key35": "56F9f17ASZpp9TCDGw1zaMD45zYcfskcJuMyVVx6aFomBS1X9Ayr5PWXQeWiyiNLT931eMjqThC7jrDH4JdcuM7J",
  "key36": "34qihj92cUJW5qCkdDfUh4rJFWBc8hcawaN2w8hNeNQyRzwGs32ZwKCQuiaBBbV2bEgVzESPdmsJ1sCSixQ47hRd",
  "key37": "5Giw6oaszDTkhjpr9AEdFfow7QNP8ngYK9dBwv2onPSauHjjQECa78QoCJoqvt47RVe86ZcgoaudaCH1TrCRmUEW"
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
