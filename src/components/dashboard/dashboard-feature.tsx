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
    "5EsV1ympeKk7BVLMvvmoGmQie9fxBNdCDQqVNRm76K9LmXsHb1cZMEPA8yxyZmHZpu9Ww3dd8PaBtqnrx2b3akic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qRgqh19wPYbQrgfAQdupNpWKv2DXKNPMnPK6jsUm6Q7ACVVDQCxbG7HpWf6eT26NLSztpbj7vfChZdR4dknZSbi",
  "key1": "YJQ1x6dp6cwZ1AgjQchxtDDqd8HLYtBeKcjQ6uPsF5KxrWfvpLLG2vnau8omkC7ujUo3GNdrSC46BGF5FKuk6B9",
  "key2": "2BBLDx5GPt61BSasffcBDZKKKbtfJYdVf4myJBUNpR85Eb2AL2Uxrgw7nG6aJPCP6mB6c8SQNnyLsfMvsDCtPNQw",
  "key3": "dszArfSvG8vQh1gQnXEkU3L6PHRFmp8uriigKMeLQhRcWviiaiDHNyCoa4BzuzYQ3pzXsXYDwSoFap5uCZbem48",
  "key4": "27h82Gs85zZusbUJoPfE6Kwcdzom6tC3wXSZyS6WnyDuDVrsMN6sXQuKVNdHZSjnYsSMix2RHpyXgnyAVWAi1zaK",
  "key5": "3ELVhbAfWJXAdFUrw4MJVYiFX4qaEuYu3gzXNwFB8UFaSQQ1h1dChEAyKYqqij2NwaJiKvvSHVieNrVSJQKfXUpX",
  "key6": "2v3puVFD3QrNu1WbFdBMq7ZAa3Uufz7KwsspSite9sAEPhpTtzFR1ja9JL9vfovRrJToEsSsUqStKnDCjjvbUww7",
  "key7": "FycZUCdGUyT2uTTk8iBYrdZX9AXYauJnSkFJAUPq7eHe6ZKEP3HmkGhdpx9k3q7oHVcqdi6NNcVsTj6JFi5VVj2",
  "key8": "27xALdJ7cALoLnuvTtURnqu8uFkkZ9E2Q94Q8MDZnxTngk2hnKhnfAw6QNeAcYzKBpiws8GaT3kqeXmadB8mjGdu",
  "key9": "5zGZqRcApMWfzChQnw1vofk9EZ2DfHfqP7n1yegtQHWxbXrc6GyFN8sHZ5XxA19pVtq1evPj2S6Q1ZSQ5cC3uK7t",
  "key10": "5he2toBFBdBda78TVNBeF1fPU4rx71QTJU55AJUzxnrbMpZSBz6zRcdWdoD1cs8TECRMbq3rdCyA28ZpqSt4ho3c",
  "key11": "geayKzncwyTKNXwMoBJL8tRzT1iw2Na3kBYMsbEp41KYy9M54u9QeScgK1qP4c1xKARzT417oYr6HdBbzrX9vMH",
  "key12": "zXfbNHxT1hQzRGX81eoZqixSpftsMe1jdo1iTixf6NMf2GsBzczgUw9YVBzU9FSmVfV4sCoDRJZEPQ7k6mwTspf",
  "key13": "66SkxvvEnpoUzqaDiL4bUFgPcMPxCeywEsBixV6VTZ9dCghCC2Vwun8uYejUXJc2bVLRS2mMhJzYuUqS2S2nBbHv",
  "key14": "2zXRz1atw3DexkSdSv5t8LvuQv2ajiqF5BMJHwQdoSJF6BSkvHCDUommtnhwns52ZkAHzqbohnknHTqYjTnM7p11",
  "key15": "5iCee54FXi5AvFgXGtM92bsCdV6Ms2kaKPXqHimCm2FbyC31G89EwGUJi8UZbvXATysXCUnyjpUoo6nMaxg3jE3j",
  "key16": "2sqDkqcRg8qC9YpUzTp9aPh3FfxBMPC58U6QuaDA7Wz1RKo13CimoWPgqAh7i7avQs9dLtEKXUozKjHfm7kcs6Sv",
  "key17": "2Qeaq9zaJHdzAucM5ABsSyS9xcVqVRrGrsKwMfKHJ6K7Vkr6xcfQDa2chk3fkbtV7qALTZaxie11XgvT9svwrgug",
  "key18": "3tw5mdNgXwW9MS9YeTWrMkQKLJgAitTcHK6stsVAM7xycLsLdFfGLVthDvHHH5GHyxtBqTpjEeabNGtQW8UineBn",
  "key19": "3mc9f6JHGUgGgLzP5yVNSNi4FpxYGaBahGSyaw1eKu3TJHxkBGrPGaK8kBo9wy2V3QVm21NuosEKEXB31Sj8dMzh",
  "key20": "iXXN53rN7ggJ5DZpUqKRPsy7Bymf8pkRhMF1aHurdSnnDE8H2AAoMiGC1VMXC5cwucwrvXaf2sXmjuXvgZEwREy",
  "key21": "4osDkF6GMrjEDoTUPCeTigjDMas4Ymfk3enn1AjdFD3W9PFsiCbGfshNfk3iL2pHTgAA1dD9YaatCoLJs4QsL4k7",
  "key22": "4NC3PDmfLUja1okYgm6njjWcA3cAZGvpzT5kHfZz68BwBhi5eEgYry3XkhwM9tr45nt6F8zsHv73BxTCZDtXkDTB",
  "key23": "Gt3u8krRitV7WgtGHHGn89bqTZCgLMStxVEs7kjHHBg9vxk4E8BGTDAx6r1grzEan7iBLffqWG2Wxro4fm5irgd",
  "key24": "5W8MK7rBxbRPugqKSKMV7gndyFCFvVNZdX7uKUnJBi3UL1b5MLJ7VqRqR1PryU3oQZ2n9GfxhLiuECjSDoW3ENBg",
  "key25": "3A7W1ASNQBxT74sdACXAKEHqYFnSMZcH8B3JcLK4DaDe3iEgws8Cipvoq6i2bpzeV3q5QdoxohNdK5zekQWKEsza",
  "key26": "3hmi4Q3dTESrCGHVpHeU9GHKTMsadZ8MvW1wePGNuuvBscdWNzwSKstmNkUGAZ7s1tCBo8tarAsghf87bRRGHi69",
  "key27": "31fvixbKHYi6e7ub9US6P44fTggDvqbdK8mjBX6NHqzGQBxYntUcGu3wAiFRLsL6598BNDGAE98LZxdRKsu2XrML",
  "key28": "4sDci9RBwgDAw7jg9rfCj6fkp17hbL62myadJwJDFHFeCmhdxxGRnmp5cqqxw7WeUCTCHE38APtjHg2C9QQ7QDqb",
  "key29": "2KsME4mzhqqZVG2qTvUV2DUSExpUKyooodpKUSJmgnJVJo8R1xhCiKwLSiJC7GXZMpKFbNrXU9ypw2w5MnHCB2EU",
  "key30": "428WMo52o5b3XHgG2LA1thjub6qq82hWGcis6pdZ6U16cP35vGcwTNMXGUEvQt7bdYNuncXduqgyqW3x4Sw2oE1R",
  "key31": "3pykiq8j11ekGhZMijm1sfkuDdtmR3yWGxXvCCD55QnaiFU2o9TV6JWMVsW15w15S6zfMnVibckoCPQ4tV2DdD3c",
  "key32": "3aSVzK1EcH3GjLBwdWyuTtLS7nBC84y4vYiuN2crGmrNPkbSSnzTJZ2VKjaTTfqxXkgHYxsXjdDxK9zURR7vvWxT",
  "key33": "Zi1kUsiqWoZopg7Cw34szUUBH6eb5tzVMz4qNCrdp99HMpBZb9s95MPnjZU8oe75ZHHg53LhyUpwWuzgAM1C2Tt",
  "key34": "3aHap3ruDA2DZD5yiDdJzGBaahL3tYq5gViAVS3jdtZVLnfs9QU5wcY1syH46WYnfLsFfTDYAFMYCkacbg8XjgTs",
  "key35": "aYYHfnZzYZtkvnVJXyjhxGLG5ZGZUq6FqvdLrheRe6HqAdUAmSyC3Mv4RChDw5LuhrgCdh8546eZCAASb9duF2d",
  "key36": "2HZFANZS29dKkNWeKJS6qT7SuLHBWsj43QEZQEJNPcmHfEz9i64DndSy6q9XjXro13L9VE7oqckmvPmyumaZAAqJ",
  "key37": "3E2YGqiF7x69HXNtLmNGs64D5YbfoB92ZAoXqE55MBhK4iuhvxs8wsHWc3kX8LDb4jgK6x6buiMZefy5ovvNL9Ct",
  "key38": "5onjfSkprFVA5UHsu7Kdfc42P4qLpWsNhEEBL6cKXDoPEf5zq7u7SuWjdd73YU9R4VFzvhWS75ppmNZ9qZRpq7UT",
  "key39": "5mzME8VKdmgJo81ATLkJLZppTEdiHnEoZRhBBgQX37VMVTBMWDejJ8xxV4grsk97vjztbnS99csUHwHRCqbrpLd6",
  "key40": "3YNMnTctiSUDo8nghKagT2Zhv8gtiNLd39FYsSQWmeHRE5eKurvviqn5hwoyvGFpV9WajPNcZedJxNXCfCN14UkK",
  "key41": "5SUhWuwMnxHPVLuQG3g1RUQdrrKRZHtjDw79pVm8TMsbkxu51UcFotvJYSQfCY8xM5LTZbNoYrRpaNqXzDT7r5rg",
  "key42": "36pivmmn2wotE9i2biwvLNWHeUv729rPmAwrEM25ohQ6DcQkWbuX7SXjUDJWoohp2cq3bbFvbWbDD3Dga8F4Bmua",
  "key43": "6kf7hv8MWswWaE7Ncf3CHLf7ak1swrmokffXQxJKATZU6uRCSkccWmkqdi2SXELfNddRFhEB5qDbpEfn3GrNEkY",
  "key44": "4KK4w1tjub3Q8HsDmHJbq5nYPx2EAFSKVkAc3o2RURR9DpnaCgEo7fgYKSKw5jBon1cgE2x4DAt36reeAcVuq2Hb"
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
