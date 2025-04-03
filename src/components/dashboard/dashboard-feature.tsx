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
    "3jc3GRETxsFeKXY2AMctLybWqGy5SBQYaqdk4BKmAtJBfKu79DVXPu8ZiMrngZkMmoRpA5Dfwg6W6AwmHaLoZsHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61mqiraZCebtvpQ8pMC4Tpmsy35UQ5z6Ptx8UQLTiL35gamab3fPq2K37qmwpDd7ZDKDn4bSZy474cmKgLaZAJgA",
  "key1": "4AQyPBsFiAtF9sZB9QboEg8ytNP1cVZduaV5CUpVffSZvyNELtxFW9ge6otc79f95qg91ECsTXKzjv41sbDrRi8V",
  "key2": "42nHPaApU2KaoZHtNFvaLczAHwM8BsA3r1ECyuDwARqhvuoLgmBqRJ6RwivLP3yNA6YgdSHzFVhE4p5snsBpGzw8",
  "key3": "64kZhgJKs8uygALZrnjzk24V5T1zENxvVi2CVmzzgeRZrP41K74CaWisXwu2Vhi4yFDstqXjLq2eq7h9vFtfNNKr",
  "key4": "2uBeZfPJwgxPJctvDzeVS9SpM5iwSbvF4sP4xF5DYZVKiTkjMHEVNUCNtSRHXfGhDsLfgiQsFukysssTjUtQmpxm",
  "key5": "4msVfrnjBwfGu6UmmrfEZFoNAmpYUywJDPLgfpMDDwaM7TeZFq6Yzg1TLdeszd2sJXbB9UwrDRSB8GQPMCeSxemw",
  "key6": "35hBesKY3GtGaePhoH8Q9oStYdxwnnYveyn1PWseLCyAVaf1mV1evf3D3mATb75xmQkoMNFbSB31V593GLTataaP",
  "key7": "5mTwfHDaPqQTJi8BQfyXVyEEqQkuewGgvXjjrbBCXqP1MXNpZs48xaCfDtNM3TPuXuuzzCr6LqwsYH8zSExJ9UYS",
  "key8": "3aphaYVBCgFPbdfCfMWW4Uq1wb6KNc1955AkyVQtH4BtEDkt6ECQw2g3CWfeHcvNtPGxc2AmVCGXwpezQk3qAzQe",
  "key9": "cNgaM2pyF3sspkHzLgJvzY9trfQxN6f4PzMCzXHDRCA5zmotxPYe4bCLi7S5mBfNxrcrz4vinAqv3oges2TXRaS",
  "key10": "4tz4XzKsEvmLesHbKEiXZmGdPbvymt2qcwfhUVkahrrz56cTRUqv4hBMYrfkWEqvssteUyWEfpbW71ACnwnXU3Rr",
  "key11": "3n6KoqcvVSWLTBkq46gZsJW43kEm8HQfjdnsWL79rUyVCQUtyg5daBKsXkRYw9yp6jTYEmiKb5NzLjhVxLp4hZFo",
  "key12": "45BNqsatMZdYPouJaqECzfStWxKTxQypZC4juAX9GUsyTEqBn1tYhXovSWyj8FBnsKPz7GP3shtVMZWpRzTUfrUd",
  "key13": "3mbRYhHTPmfZUmmYH66tRr8SgB2A6t42ZMKBffEfpHjVK5zFqoEBvrEnsj2EDX5khwgRgy6VwpfwfXjjaixRmUHr",
  "key14": "VK3SDtaBamBu3RJwomxqukDcpfk7bkaULwHELL9mwYCLgidBHoj16bRrT7dAeKADxgeySiq2r8M8Ms8w8fixVZ4",
  "key15": "kZEQx3m9QLve8D2fMQDUF9FXyqeyjBtgxxFCEEcRXWv2WT7PYmULG3nPy8coAXfDBnPTdYKMzJGRFpJDJMqMCJe",
  "key16": "4vRhF3qetcnQzaWsS1B4nWESoUsstMPWmZHe5jDG3q3tWYnRswCppj8SUxBZVGjRMMZUhR9o12oHs53kdxRt9LqQ",
  "key17": "33kfWvopCnyf34JrGXzDjNXrjyasLnMCD2YryGiEE8w3JyutcD6kapzaxNMfa3eyZ6JV4yP3JPdMRMSu2hvC9NwL",
  "key18": "nF4GCPBcS3Gp1K7PE4C7sW45iQjxPpEtr3wmNDAumfPTtDLuvZ4qBxhHsc1CgpiKPkdSVtWtMbbrNeFQsSJa5k5",
  "key19": "3U3uuXmmX5Gf2vrSc9TRbaCB46mFr4mpVth6mu6oTPBCSwjDTWPkZfHELmXYF1N6tMZVzdaxs6YCvzRq7Pak1phd",
  "key20": "fECBtUzhkG627Xu6AkHoTgj2A5hmsu8wwnT3PPukU9jia8TysFgRsxYRQrsqLaYWi24otdDcoXTym9M9BgkTiJS",
  "key21": "2Y2XwjJ6JctCYjdsF4xJgc6YiZ4rZ2JKSRy7o4eKkeDV8AziqNNmYRkxYeCBcUAvtEmK1LeunKtc5KJrRCBkGpig",
  "key22": "4c9KS6wXycxMBw86LV6cnX5XP1qYXA9D4KF3arh5kZYn13ezNgkkmfcjWabwJR7Qtz6PnEGfS5fUuC9sfDczKEfv",
  "key23": "2hzYaQ3ff1GZpQVtBptGk3x4faZF5rAmJ4fm2YLxtctMgcN8cUhJCVzqRQhbJiMBpqANwoxQNjCmNXqzS5EVrLKA",
  "key24": "2NoE815B1gf43bYkkKKxZrnj9xzHQnYWfJuirxNpFscEMEfiBcDaWLRg1F2FEUs9YnV4iCKq9R1XT34HaG2rztMS",
  "key25": "4F3rt93GVxWWVcsY8QgTj1K3ckymf9tasFvRY3Xn11LdQKNJDVMN6iVn5S2YUe5Po7ibVPGhrcZD5e4Tz1QJ8AUk",
  "key26": "3yvHCYmSQEzSqUAs28v8rLL3YBzZJBAZdNdH9Wh9iZbNLhP4Kms7mk7vYyG7KZdSHqUSAevEJ7JYF2N6VX3mGGvH",
  "key27": "5ioLM9CfKSGUZFtZeg2cU9BdxqDMHr37gEyiw6iprGnSgpP7hKnweAdhKf46ND1B4apjHSG4AxyCm4iBPSk9S6UU",
  "key28": "5Mn7RXbeTjB91bQhKoLYf6icDMtidsTyLQG2hyD87kTB44AMCj88tWqsUewsTw95kZj6gDMUh1wXesLDMA9EAgu5",
  "key29": "4fvhj7vfs31Z2MuFZVQcnjeH7c8mDQmxMNxmZQQnqdXXGa3fWxdnN6yjPx9bMEFq3RGGJePC5y3bvRMiSyFFP1MC",
  "key30": "5iZmoFDauN8Yp1FcCWp73NaQ47qBWt5xjkoy7K4X2PknkvQ95hAYZkTufrrZHjjYjBHLWvSLUyDda12AdTs7LSBr",
  "key31": "62iRk7SNMB16Q38Fprph5ArkiSqspsb2c1EeXb9tHvCtDLHUrshdwKuc8uTrEjczBEUWvgKSBTKmD59Pqom3je6i",
  "key32": "3xnSK7tjvCjGjz5zFRKq9CshWBUwoNPGF2WFW7WtNYL4dMfTGRSESSfvSRb7rVGWGVBCxcwMVpCirNnseLMfj515",
  "key33": "33EXmMew8HaWyFJbWqENpipLbt8hwbTKNZyVQdHVNHBBk2haEjPTJDA4bEdBuDxCiNbSLHHTt5NEsMNL2LEfCaKw",
  "key34": "5Be6iXVhz6nE6wZbRB2L8Vjv5x7xo2YrtwoQhm5GmpwRDcDYfZxKdg4m7TkE4GRd43ba6B6wJFBLShCBmv5kG1p3",
  "key35": "5vpuV48wFqKH13qnoUWqbva7GC7r6ukCPstwKgMriHpzkCCMbdviMKiv8PbwCqiMMcLT5aUh7GiVyLCZtnnkHMf5",
  "key36": "4dXT1t1BKUjCjtt5WmnLKFZnRsyoznxoLsBraAqGKCTZTUn8gTqcLRAczA25GyE4ZvSBYoyEnmjTQacU35TRiLaD",
  "key37": "2JyL5THNT5Eb7ZGXALwfh1u25jSLixXxS4aQbR8zGZhG7hEddPeCKXnQeYGVBVqPvfjdwK26GSjYrUQNonebinNx",
  "key38": "2hKaTJbZJsT7gRzKxfBRC3gRwxPaLy2BzTA2EzNvvogDu8JJ7He6qLZohx9ZsVcMUCXd4NKELETR5tqPdRKEKqyT",
  "key39": "G5et995nYiGdVMXVQuzpoE3UywVJAnipCe3D45EjxbziPxubp6HxDrsX7m1HZ6CunxTR89PFq6hTeFzvR1EcFxd",
  "key40": "5Fca6rYgK9kZ3zbT5igXpfwoQwAHQst8rsrXDoCuL5FHQHPTUhsoC6MmUBBXvxV45pvLHnvRmgSyVTdrbUB7axsR",
  "key41": "5zcMQJ9qUVTM8Jkn1XkHEwJPiEmmKC1J6qQWj3kCtWrhJ6VyDW4oHFCQPie8nvf2XYy5bd5vuR2AFrfEYfuy7Z2c",
  "key42": "23K4AVKzh63JbTpAgDGjWyk35WvzsD3gk5jhb3AYubmpDoEBJyek4i373CVUKYXDBkEXdLD7gAz7rEcvYCqSJ4a2",
  "key43": "33vbxKRVZbnrBRkQY3T2XQniWoD55UybTpsMKXTvBSSVJGP9Vsv6raykmhGy4q5LGMstLjuGLGAkCct39x4AM9oa",
  "key44": "2YZEciBjydt1isyYeS3XrKCydnd2kD4ChsFhGoVomDyS4ryP7Py67xT2cMGPhPNVfmb4STUnDemYbR17GjhiZ8Ux",
  "key45": "MrTdCaDoP1RiU9xKxkKWQDezN4bRKuyydqh9dXZHRo77oTZoEzic9f8JpXq43BZHkVnGnxrpPnUeWVv5Z9Bf1hm"
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
