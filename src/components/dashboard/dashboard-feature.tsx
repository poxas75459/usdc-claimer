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
    "5RHJxEu9v9YcqpUpbFwePGLC1FVYwuL7jEtUAGx8j4kxkyrzHvdeC77y5Ln2yu1cKMJyohDTr2M9dUS7aZfcJoQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mwats8QM2GRGsxaChXSRMSRiE4FMKjq2mgdFRmbsWwcJ6sRtqfJVrHRdUY3ybkkEZbcxf8Av9QUohbnFxzdvZKr",
  "key1": "3r2NiKc4fu69hJdBu1E66fkn5p8SVqMyNH9jE49etcXkux9WMxdaKDm5jfFv7FwdQQanh2Q6VLVtPgbGMLdspj7y",
  "key2": "Hr9m6Kpi995rwjsR1DEmGVBF25LcqsbHk2vmgZWn4HXmxYKxnKSdHX24TiXLMpimDZaEbTc28qiZXYuao8Wvs7S",
  "key3": "xNFD5WqChtizwGAawkZnxa6e1KRVrump5tCL5T93hQorWnrwaVEwGYWrUjPXSmGhnRaUaFiXUJnvsL6AWraPnvp",
  "key4": "35jw1mMyz2NMwrdeEoSp8UEtcfNtBa3jJHX48RZCwXPAznDKxF24NW1q1WphsykTqToXC9N7Gab5g8fHf5wEPnXG",
  "key5": "31XxFbZAGTuSvxu8zXZtaY2BSkmDaVoSwVyEDZcd6ErkzQaJUhvr32EEGvfUNC6kVY2E2GsXkmX48UiJdEySjv98",
  "key6": "5auGx4VwKnbnEfa1ufMwghVm1fnwShARA99yi71jMtmsRd5birf1f8s8BJiNXDboiPva5foAbJ3huJNYKSSCHXrB",
  "key7": "SFxo14DCP5NKYAJVmLbHh8qRDaygmS6FphvRBpy7PabSN3pgTYM6TixmFenTQL3UJKw5q4bffwLXzVags4eKgAu",
  "key8": "37kX3TaHAAuo3G2Gd6jxQyWeePojucDFmGtPzUnkq5NYA74BERuxJdQ3qpKUHUUqG1jnWMNUESN2pPX1Gkb1g3JM",
  "key9": "4zbAzE1jjUvZiux5VdsNWTvXcHmBBpvFbJHPGkvG2N443CNJ9fa4mVb4kAEkzF5D4DyKywfnZwQbH2Bw2UucgfAk",
  "key10": "5BnoHp2RoCYqSjhPt6GVESMnZp5eJ61bu4MEj5AGw1piu7NcfxHtPYHHcv9MNDLyq6hMSVCj3nMWkYiG6nJPWXkv",
  "key11": "3L9K9UksziMi5QkXauXU8hRcr1ZntnRn1NCh94KABAz8ufA88MT8r5pL216viFMzLeD3dKawgE8EW4MC7WZfj59H",
  "key12": "3nRMnNNdGvREimtqSCQxYjphmVgPzAF4TLDd1GT57mcVzT6UZgC6wyv93hvqDhf52fV6Nv16jx4U8ssTVUo3Yito",
  "key13": "57e2VoBW9ChuYUquRd1vYHncuKVS1hwLrp3zF9p2mUhqBnHcTeizuNwvYbCcv9hsXiwQE81otR6VKeG8LjcNoYz9",
  "key14": "4Gz6BAxhY9g26jCVAJcTyxKZdsdGXJcJqoQhPyj3SjYYPMGWEtPx8QCdMjnbTi7TGRuJ3Kvfd9E36mi14gMEkz3J",
  "key15": "y1R7RJXKj3NsxJSLeCaYZNQvkAJnGNDag6gUkun3FsKA6e68BXAC96n8puZs3j4woNynsNB9WV32oioxgn9GqxB",
  "key16": "4uVZQBfEkdV9nNWP56HypvqpHj1Hqzs1nbR8cVZTry4Zi8GR6nHLshq5ZfEZoYMJmzyHgmLkJjzSCGZGo2Vv4ycK",
  "key17": "48wd1KagrKhpZmk1zgqjJiuA5p97t7Va8vhMbTxUhnprnixbPHeb3GSWXaUJavhA4BRzvP3zKGKQb611k98KNq5t",
  "key18": "4AbcfLhGCWktEabvidF6WAkcYhS2L4quYd53rBNGhJa19uZtqrjxxrXL8mM68v4BiJ5vQnga5d4qPoM6fJurT8vZ",
  "key19": "52psEWACrhq3YsFk2jfy5xYeeMrg5Mf2gFmdMKQodhYSj5XuGNpGSjd9F3vnR2rco3EjtxvmTBq2WvfUjyGNWsNP",
  "key20": "5YbaN5NsMAuVeWh6psgV9MsLgHoeozh6VV6a5zk8xDA2JZ8G2EtVrX5mLczRF2n4UDsf2bNWeSinFfiM2aqbsks3",
  "key21": "esfpir7oQqFxb6PJPsrttPyNfabEM5jacVxeCN7mdCjLHVBmgEdjkJ1vpVTQsYANp41ohfVA1zWc95HDRAJj1md",
  "key22": "4ZGJNwDeCWAE3J56x8LndNBFPXkonqZ5E2sjD9nbb47YntyoDzaTJt6tPJ8ruQUDtAefp2ei1HuV9ZUy26bKp97a",
  "key23": "5FNgySc2yFuGzZnt1ZnKxgD3U6b7Gd1oATXpQHLYZfMonZ7VMdkNiSguufTokmZdkx1jXDNx7mW8HKSqV5i1F9LE",
  "key24": "4qMDcjee3UAMC52oznPjfuqEsrTati2qCkMti2DVTuvCHiYwg7HQxQmCTUdsxrkW3pLTcNu7jf4roxv7L2W29Ddn",
  "key25": "4ogSXN6kQuhPDUpfjFcvTveJypaVMnDpon4itWXUVZTpEJyvdCmpLmbqep92QNp9XqYSv3mtuBr99nAbiBQE6T2j",
  "key26": "48SRVK2xTq6jeb5Hw8Jz5NiFBcJDQbh6G15AGfsgYs4a1ohXsg3KibmqUutZEoKGJJ8HcpCoc9NcNiaKq6PVpLbn",
  "key27": "5dNUQ7od6WfzMD9z1GCp7NwFi6TT62DQF8BCK3qxdymXcxYNFiVrsWztrPCEzUzCtjzzqavKBsehkR6zZFadhJzn",
  "key28": "3Eno1xYDAJrnZJnYZttKWapaxQmd9Jq4gub9MTf64UVaK3qXSJdcf2iE1heucx51fM8x6ypJLwwak2g8nDLmhhg4",
  "key29": "5KeqR2z7jBo9oXcxCkkvt46JpePfHfg1L3VSRFwZ594Tpn6PHZdNY4588emnnrSAVhdRNnAKLY9zqoSv1K4r8A3a",
  "key30": "2QssNTBPK3jYkYBGJHsvYyVzcE3kv9urSkLWrGpcCBF4F2JeF3Uo9EYiYSFXDtJKjo61i9vzUtizYFTbA3aruUeJ",
  "key31": "4tWXtnUZbFFo1ZEeotB1jiJtNLJFMDGW9BZfWMcQ3r7nCA4s6ooBsuwpD7eVbY2Hr6vE9VsannhibYgxidHqdCmo",
  "key32": "3RDPw8Sr3usPf3iK6Dk8q4QvnbKuuvnPXrqrdEEFM9YRSPuPJQ1VDkwjVX7KNWrhTuhCMBizEKECRjzkeFeQHz9u"
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
