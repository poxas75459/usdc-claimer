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
    "29XE9M63vYa8rBsjabLyoPxGL9t3FouWaj3fJ1P1TqBFopEGHXHxtg6RUnkaafucCdqWW6xJRNjKQaZyv8YUo9jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QwpNEv98dwk3SRxMs81Zb37GmakVgqPN37jcn4pxCoqDaUXr3QeYoUy27Dk8c2EjnJ4YXhkiSovMvAGYsxtdQkT",
  "key1": "55ZZHB3j2kYghrynGyDJgohjwdzzsESiErsvK7qvpJVKMyJv4NDuE6YR1LnSLKmsLE2E3hbLKBNvkdUctwWEFFZ5",
  "key2": "cXNoMj3F6dQV1L5PXFjD2ND8qye7B5TMiBMAmDp52oFQZ23WC2w6gtJUTzbs8vXxEQEySJD6DcFtS9AJmDfxzo2",
  "key3": "4x63AqNLbmwgoTfgwN3167Ds5SAeNASqL7cJfAGFLNt8crr8w8Y54EKcfCfrFiEK6JBu3hcUGGzhM4jpqzDnJTGY",
  "key4": "5L1UmQ8A4KmzgwskJWdPPcjdiAxUTGLFdJcKT9evVCqgnGGUbaKDhyiR879qLsQmpmNxe3JrFJi29d3qSHZaTbvY",
  "key5": "4pomoXuNnFkuGmpqQpvuWMRU3WGVS6UdHzRFfd2hWSH49rCd7NRwzP39qnhWJKALU7EDNooTiLf7PnjAqD5odBtK",
  "key6": "2B8Z93fYqxgncY2dLoPEuZxr2MY4FzTkH1bWtVUVgHBx1C9oxMdZaaTxHmZo7JggyA9K1dwCfLL4SBp67j5XfisP",
  "key7": "4TB3sEqJ34peKMsWuNmzZix8DLxTr16Jd7NSX2W3ifwNsTpj7vg9MbAsgc4wHJbrY3gxNAqUZghKso4MyV3HCpuW",
  "key8": "3hw97Re3Dn5xVZiokXahWY41qHw6ir16JZdRSiU89q3RL7CHzHMpgzTjMMt39c8iDisuJF37JMWTTLEZfRQuVu51",
  "key9": "36MvPhQbGeshMQhWFrFENxZaUbMSGgF3VPcNgeXQPFtQGKYbw1uPosKppxkVEBB7kNrZcBPPrg1EBhx5TGTF8njF",
  "key10": "LphdpRnh4APGDB3A7YFCc3jQDCHBe8Ndx1jCBxikaDipgKKeGcxLagvwwWcHaiAXrCYMEXY86M4h245T3g9svWK",
  "key11": "4UWgjgRkFHrPcgEtWav7pRVmpT255fF7qXAYEXJsgB8VoNgRTnDsvNDrzykVRQyKd3Uo8aHJPncXA356m7HrEtiG",
  "key12": "5wJCkACw2u7aMFsAypzDnQvwg1QGoLwmYmQ1XqQ2j4MgDdQgcXFUdqRmSZ8k5EYiFpGqSK3T4rX2X2PHYyubBXXT",
  "key13": "EhVsW3mrLjaBx3FZgwqxb2e1EKZK8AaGnDs5hZyVieKVVc7GMT59Zaz1LtVb2N2bKdHVMdekmBEdPftTeTkRRQZ",
  "key14": "3WPJEKgqbhADF51mb1wgHMZo4jmrZWKMzHPFyoCHyTmCEw8bzfhdTicGPsR4fyy6wckefaky2sy6obN9SwyJDAN2",
  "key15": "2vdkEqZZsYpj6TkkDejc2ZCLsK6Qty7u515xBpWUsj73iYJ2T9V8Vjffkv5NK1WQY6hCmfNnB2G6GYoHsBbZdg83",
  "key16": "2zfA1YHy7agh8zJszxuyE5B6VrGbmVny6ki4se1DLdfwpC1F6rPVXUH9nhuAScVvzjn6eqpn1DGV1HZAWxnz1XMg",
  "key17": "qQQTAvG2QqXu39cXhcpUq3XsyuzwgX7M2nz9tDfcFpgfTekY2EjLDWgvGgsUhTzmmqccpYTZj1gHnSWEEApMMwk",
  "key18": "47KBFc4LYE4gRQuTbsMnhUg86Y1zcp6dJyzGNH9eDzSchSSDkwGJSoeBhDeYCZMpB5hEhswV4QzFg54ZnPN5zxYg",
  "key19": "2LxoVPVC1NP6La1LZxQaMNf6oidMaVJGVmQriaoinSc1ihntBNwmFTyKACnAyyLZVB7NRHEtvjUY2tH9JUSJSv91",
  "key20": "4DkCAo454kG2ogfyVCciJeHLpDMvK5fGAojrWDLo1RePK1nU8PbifLgX8safrt8CXg7JyFgVCwu9BS6sY8sAAvLL",
  "key21": "2kC5JtkJNcrpj7pvW9q52D1oLk5hT9dK3XiyNJ1huszNQ9jq9Ui9gE2FTMZyJZokE6Gji6LFjWJDrssigHiAc6na",
  "key22": "31A9pUg2hHiUN9WVH3Ny9ojg1ShQ5ELUrSSrnKfP2Tfn1NvAsDFBfairqvPuUh2gbN6e6ZYZ65ZjXknzeBjZRmf4",
  "key23": "5EFzrxFTS9wkdCnE2cGSqs6ZN74eHEqzdUq2XeYJ23nbAGEwMGwr4Hx5HFLEdVM8dxAy3L2EZ9YrhfypKrerELUN",
  "key24": "2HEy9UeebU52ZBxY3vcGoH6hFdCGJRhE1EQsYBoTuKSgNxVuF6uTwXBgKj5HjNCcKNFH3E4bjtNyQAfNcSTfmctH",
  "key25": "48haCn5jFsgRuzjgBhNiqmHSbDnYfgxLshV7kK8ZYRMy7Bu6cJnbaupTs1Gz9cofcNx5w4HVcu2vKCFUNQJoSJ3x",
  "key26": "3wRSxc1eMkxT92LuVbccueuRi3N1GYrtcdDJUNiR2vHQ7jiQqFFu1GgHpKe7kvGQjoxjEntV1hJqzCqu6F6haTm8",
  "key27": "3hwPkrbtAGdDGs4RQKSJnheqbT8MtRZAdWMMkSYi85NTH68gojQuDZfxHHiwLBrUc1MUzpDXEu1zbpJaZ6HbtUKe",
  "key28": "3FiGKYErk2gT1BpKxyLnEXk5JiKVBRTV5VFPTLsma2qsKKfGSjJgmgW4sEVfjXYAiQ5TQLhJreJEEYNZq4UaSSqT",
  "key29": "3dvr6JfjcUTXg7qubaSo7DDSw39UpVQcWGCGLeV7YHDzfPRSQo3qQNv9vEhQMqhMaQAst49ZUB398hLTA3zpHnPC",
  "key30": "tRcy3rjxPUq5TeWyPThEYJXmTj9UqHNE2wdQgCqRDsFFtSQ7QHUj3XSzCJ1JGb418LorqBE9zPfcwTzGQHhAAMK",
  "key31": "5oN9jLn9LWMLav3UanodndD6LrYW86PDCTfsN7egjZjU3kz8mvguP3qjWh3wf3uxQa1VzJHXZVDFKZxRw7icNDAe",
  "key32": "34qbNJenEMJ4eoRJMYRpwVpzm68F3G5dVwqSNhEjcv6CtesJ77xJEYDp6pjt6TpmXgTwT2Dqi6gT5cC6Txc7NZjT",
  "key33": "31AsAkqyy13tBZYMbrtKz1fH4Dj3ebVc87mi6zJvx5Qw3vFWs9WhUQiFwZze5SbXHGB2mgMqXxBvapCZQX3eQVMc",
  "key34": "4EkgqLVc1LDwejPtmEkjLYbSizuPrikYGNG8Mm5sSSNdHEhcrxxd8DFjwCJgJz9Ym1skQMzJiZtdK1UXqnnR98Xr",
  "key35": "4nwNmmyFaJWt4sZBiny5CJsMcw3DSy3iC4Jb5fKNvUJHDPLpzenjYJx9nMSC8jnMsojbufyqmvcjQcjYXXnsNoNx",
  "key36": "3i9YB48fbDfS86wigngJeJDbBmQR3T92Si4zUuTxeFZKsQdG5SoixaEeQ7Dr277DkAusSUepd4GA1Pk8njCnoLZA",
  "key37": "2JJR2FgzFrBQ5tKRzEbtjyDkKSkh97mD6wrRVxjhvFam5VNUYqjuAtMKW75DjKqXtGeF4qY3zEYfbFB3KZ9nR81W",
  "key38": "iigaWvNpoXhEEiYkj63mvHjfwBVWBa5P1eHJVyJmMYW1Vy3uD7ZatQZrM5qonDm25gsXo5BSxE32nYJ7WsLLmQZ",
  "key39": "3vhmMjTS3GktfQLm3aYZSnVAa5mUQPsPLeYz2iYmmn9dYh6sDzoDfscBxD2eN8Gn9V9B3X7tDKZiZLaZEkfoHrAm"
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
