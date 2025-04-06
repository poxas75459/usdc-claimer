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
    "4FG2ZqZKNQpFWsZsxo5nJFkQGe6S4FfhykqLNCArxAd17MWHpycK7rdiGk1DHx3DrWkVDHYbvoScJHFdkDJTsuVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6cqKpWs6sovgdcS4De94YaRYBk7uXeNgTsC9cuyF9umUoNfjiupu3ZnpzS98QSZ9acgaLB21XXAVfCHGSru1Li",
  "key1": "2JWkhc4NxDU94jVHtpvYoibV9hWhHsMf27x1MfPdWYGVSfCBU1q6ZjYzrkqyQkA2JutWcXQQ32JmKsSQY7NxMbT",
  "key2": "m2RAHv8riurznKmvFZ2jmo4EZGEhcG257GNMtRyCUwuyBzcAynXExLD4SswTwgeKUoBLfsmiEZTXVXA7yVA5AWZ",
  "key3": "4rg8JSFVgEuDMEbPbGaGXUBzVU7xDYzZM3DfEiTNKWALNi9kVyXQ9khEcpG1UrWdx8TsvyQSGvsLwgMdpVt8a4rc",
  "key4": "1rbWShUREMCvBQErmtwzX9D1Emjj1XeCBgMCscYMpoxq5DT7hAySTw3Ke1A4JsuNTLBWNmuDUWtuvKJFFisZKH9",
  "key5": "5LWjRXzbaVqCpU6ise3FdkLXSyaXBKqL3L1yNLSA7CoZp2xLB2UqJZAvwYCbk8LzFM2XiEHKbEeVFMdLb7FZCnfq",
  "key6": "4St6sY971vSExk8WjnQscCV8DAAmTi4os8psaM2zhvih134Eiiuew2iSiz8sT5nhVe6vWYmHJqjZeizn17jyvwuC",
  "key7": "2yktqGnCou3Q593isnZN7grBmA7tbF8TheXsEVfoGZFZvG7qkG44SweFhCMpVZ2cUVxohrQKW4xjSDgFtYyx2U8G",
  "key8": "2ycYqb1ezifjytiBhXj2SQ23Q9ztNGC3Gi86MXqXfHQtmfCxcJVCokthy9i3KFfDd1a222w2aY6sKiCPbdxWz1B2",
  "key9": "5RfFXP1VewRPtW35US4wRNUQF7XJUiwGVETCC9PNaSQPxJZ1KwKr76e7M9XAp2jNJpAf2NjTa6MJRF9PkaowLfPm",
  "key10": "349jsNCC5WjHFWVYSGG1fzp25PuQ675KPpAHsxVwYqU64xtexbBK2R9pDVZPAr4yfWKhPQgWKb91s1QkgsJekN2C",
  "key11": "5EvpqQWWsYvWsxTAuSAhQbWSpoSf7CU5NUsowALXpA9S7mFKjqyyFS8ij9ba3pb8jd6LQLv5wc4Vt5wg7KQrJV3V",
  "key12": "3vybrdRreSHzcTnUYNXPPbD8LfwAaXKkyhoxk5DL7FRT5R4g1Lrtz7EDTKpAueFwanJS7LVwaSBGdmoPdx7pRM6h",
  "key13": "2ZktKc2Cp9YTch3fS8vULKkLc88eKNWP2XdqcNCzxCAYcGU3GSZT2rhZwyJ7JpVBxNvyw5U53KzVjMqnenyAMAp2",
  "key14": "2KbFPbLuJfxfmogSvNLukHCo1rzP6pr6dQEdPigvj6cs4GU9Q6egrv2SNehJ5RxoM5CEz45vLctrD5QZuNbqfsTC",
  "key15": "37MFcg1dGYybVLg9NpejR3infmnXUQxQkra9neJbdy2DSYxk2Tic9fe8YmPcYhvHhAKb5E6haVDr5huS673BFh3y",
  "key16": "Z3fSrvbbsHEEjC8re7Eie8jmKouybTuHx47Dw3myQTu4acwtMP9vtRASEYRiVhLtZsKcgRxsQvEwgXUADLFwHgu",
  "key17": "5eoUuQLMyXHxAGdjRSD8k4tBSBAZzBfTKrcnvk27vnKniUY1pk9PWJ9pCH18Hu6EcgrU8y6npMyGSTiNCbESg3ng",
  "key18": "66BM312K3uLTTNABqXVhYqunCDPUu4L5PFLwxMxaSk5snsuVEeKmAZWrDQXKy72HjAboF5s36FztkBKffbQXbv7W",
  "key19": "59wFoHQWrQBNxNFDPYoKAxWTnmZUL2dv6WNZjMoeKdZyzM3AjkbaYJ6HDZkh2Rj29CbP1Ao4wbjUn9Bj5EkvqPKm",
  "key20": "3kPecyxNTQRyea98ApLTGMgF2qN9doipnkytwBc6FdJ5gpbdh45HN4cwm5Ns4efH7BfXCLYgbDQTvkyJDpZwjX9E",
  "key21": "24veVMeXHEwBHGXPZ72h8M3J5dYwAue49X2aC9sayZxfFV4AJpGvxoNRjTGMfYYSvj92oqFN3z34Ez62tVXRhvHu",
  "key22": "31Uo1SzkZMyuLH66ke4JQJoDcHydo5HbQY9auBjcone2tTe4FtJGxCeeh6fZ8NdeRkp8g1Z2wTr1osqE5WEbhWEB",
  "key23": "5kmqBzbpu3vS3X4dzChRmWaKVaEWJUjvisgnUYMrAR1usPrAc9WJ3wYDc3GSe96csCmqCU7uTRHhqPhm9RbYvBHG",
  "key24": "36kpVBpGCHee5QTjuin67WHtBDqsoaaDrEzjKjdWeAKtMsMdGVJYAiaLBq4JzhkZfsLiV7oYod6bL6Gyq68CFukc",
  "key25": "2SLC4uJM97oFfX81kMSpTpd8CnELqMFLSVoQHaEbK8qVGXsfZpDZUSJCBZ7pPYPbW1stPbrZTJSJ9VSGotZLjca8",
  "key26": "2PAYf4e46FstRr9aCnLbRm9WzV8ohQ6j7RsVHzDfDUyzwuSihJGZqRdpzzZC6cX3Fh4J5ixPm9eSaMj9drYUc7eq",
  "key27": "6kkx17PAhuVRM3csKuE9BsZ2m7q6HQmwFob4XQNE7vDckYKCSuot7Ziscu9sUgg5DJSKhEGfE1eAPmJYfT5Qcyx",
  "key28": "3c2uxYdvZT7a3EW2bkm9j3xaJ9D6fscrdRdZhNbzNr2DTKT3Hrfuv6b3V79TjTwMpLRWdecv5WjbghB42PoeEaPX",
  "key29": "2hCUx3Wh9fYPb8TMDANHqzkwXou2N316UNC4ePTd7kQgAm9y8jNae3TDZQCm1a2XgtMTjksj5X4RUENgGW8aX68T",
  "key30": "2zKKh5VhiEdg3JV39YrbGipsPMvJqn9S1bbYr7WG2Gut9Hscq4CbQbjDcjosNjaSkcJ44A21UTcxXfQ86y75RKkg",
  "key31": "4ytCxJ3rshH1hkaG5TofXaCShTyahjaVHgfhTVmpSwnJ6sKwe4VK7toDTLhx9Qnt1PsXhXx78ytSxFP9CyiP4ZNH",
  "key32": "3FpbiJBHC6GX4tvmMBFQFXoELCjkGsR7C2ddQnazjYMPqCuEmFQuw2pePQ4UU44y81Lk8MnLkhZ1MV4LZYNcXEhH",
  "key33": "328VcMjWA8qWBerb4suQxFHMEkCyu9BFEywgZqL7AdSDVKCkj3ujmrv849h2B4BpHFCkytvMSSDkJp1ZQ4McTQUn",
  "key34": "5YGQkEgZJLLdBpq7ZwGJqfc4vCBKn3RoWYExpUtWFBVJ25vBYC21JZrW72CDL3LWUibwjzxo9o5bh5w7nyYK6tFo",
  "key35": "awGFi28UgvxC1F9ATeVWwjLDKZm8yhPMuDPmWuzwU9yYAXpDVQoHYnQXKzA9XhGH6PY8nXox2PrJmowrrQtcSoj",
  "key36": "fWuM4MYVM1QJcKfqH5pLeD2W6SmBMB1fdhqjt6Yy4Fn1dkSM6UTRp5A3jgdrE3aH3QTNgTiHbmFAnvekScro7Q4",
  "key37": "2zh9G4KPcwAZ415n7Nx8DFgeBHMBaPy7YHW6rzoDBiPYV541VQt8XT5cKdWfEj5FMWY3bNQAXgSU9JN9avUwUX5Y",
  "key38": "3342BGosUkdrBjhHoECW9EGbjYtJ4svtDjCEKtuJn6YDXyySuwykBEHJqpxNvpMLhdPCDQ8JfrtZ1tNdX8dtgeVs",
  "key39": "633SFsNxYrxpXBGoTWJkC8Cgbw5Pr6JhmdMXTQV3SeYCkTFbLGDGqzCEJzKhyroQsBi9Cg6YxWZbwyqXdsxgmpLQ",
  "key40": "42Lz1LV5xgobPZAf3hYZ2maXARy5Tjriu7J2kz3nx7PUto9vXehg8CwaAp9jhcR2ShdTSFgPNDiU3jTyMsvysG3W",
  "key41": "4izMGMgJEUCbM3RGL1688hQF4zQ8EzPoRkNvWEMbVZcYpaG3dvELsx42kBAzgUW257pEWVetPzQr4DddyR5g8ifo",
  "key42": "4xpdQJY1fzgx2PqKb7HC5tbdR6d9JidLmyhtKcNQnP8r2ipeiDkKqqQS8i9Zmxn6dmt4FREWj32pj3re9es39BUj"
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
