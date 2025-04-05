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
    "boXo8cp2VcYZGd4MqvhkepwC145swQSYnJWWNaRhpFsynDbtZembEHmj3FxT8JD9tWmFH1YS439f8z6dD6jngmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFuS5K6hh3HqNjqqP1vypxkQHWiTaAj7soJGJbQk7zUrmyfomWi29L7byU7JPqqiz9s6Y5skpWCqYLFNSv76Nu9",
  "key1": "5UwkHvsHgu2P5sw5n5RE7syndhuzs848DKNh7S6ghexQXdpTXA4m3T9CxDJnnq54tmuJuH4SHVQ8HREiXDmqzvFv",
  "key2": "4C8EViwoE3gNZKTNAtUBJJFyn6h3jY9Zqz3Zcgd7pkwY5HgSp46PFiJfFTwxMUvUQUup8xj8fkK3jyx7ey2o9MnL",
  "key3": "3GEag7dCC5QedbzLic8EfWZn7fbZBZ1cv9noGjGYjZWT2XpMJjEPTZXPmSXnaK4uM2j5f5HBPRLGgbhbtGJuGnS8",
  "key4": "3G8nH8meRDBmpnXHrDMWSuZpAZkJVwprRHcJXgQu7FtauGbVQmQBqMN1Ttmtp83XodWtsDBuxgY2xWBmCj2ZGTYm",
  "key5": "JogBtjW5w6baoTCwVewcaz5RwVp6sJyGScRq3FpTFWxEtU6iHJfgG3mC2FXKXqNnQHywU4jGr68ZUm7wZGw9UEa",
  "key6": "A46RuBz3DZz8EUq7QXwhF6jJBuKajmUJK9K4p5qR1Zpmpjes7tWbvGLjTQKbXR6sERBfENptwJkiahQLMr5B7sR",
  "key7": "3Er7NwfaDNVPEnYnyNUDWxHksggG3ZN8f2dKz4dM7fySPMAgvt7euYzEhV9VTnUNkUd1DvgfaBRan3PyG94fi9fg",
  "key8": "34bejygZq7qUfawhNkUvz7pmn2RXwt93anQqrXwQmjCLpxSkfvL866aiy6dbPpGJX49TqNEJLpyDRiKQnSUJ4MPC",
  "key9": "3fknMiD7XxC4cvypXDutjq53wcE7Y6o6UGQ3tT62UotYtVkL375JN2U74pJpBpg9VvmxH7HBquTCcorycJJ8NEKd",
  "key10": "XPdPkTbMzuYHtstvagtV4fm3crXKS93ZypM4vapdxpSkQivaaTiGcW835TPU6jBJxJoU9rUqiPBmf3XUJ11pKj8",
  "key11": "3xN8JRxeNdULYfLQArxkBkz5wUBdFTrjLbvcW1pvcewncpQXJzEBJAp5MRPxvzTwnqJtuf98ymKpS3cce65Tw8p6",
  "key12": "QkJ9pDXBrSqiqbksW59qd4SXrnCGnPW9nZxjNvi6nPupdsL5iorfwAqc8SBEfqep8EkP1LS558EFo8gFUigtNPJ",
  "key13": "3AzKakiErBycRHXiZzCqCJ2toruYvXdU7n56hVLYfMJ5B5mUf3PV82oNkCUm8zXCPkHMrNS5ytYUWxw2ndRU7JZf",
  "key14": "4Mn5GhRvY3zkPFeTfYJMLpbw152G4BWFAPPwPJ41AitpE7eQdX4uQnjcGXqFVRaiP2wA8kBPYmzK6XvXXNoMeEUA",
  "key15": "36XaNWNrSuLP4u8Nxeff3o1uRhGzseZrqGLj2KGRdaP3HA58yBUU2kGkyriEza1rhyqFzmGjtfupfRdoJFFz7nr5",
  "key16": "3RHhTwMGApXeVG2pGdGzwwdFqe2CQUwQqD3yk6oYc5UhB8GxJEcJ1cHQA3yFkVAdW61oooGxGZaUGvNAHzZ85T3j",
  "key17": "4TVBinpoBbUraavzCJsRSRTSm1ff6FVfmq3Gm8pPVuZkoDMBRqoSVz5AwqC3oGtnLiV3jByejqkXyoP2tNXeX6VH",
  "key18": "3hBMfobig1aQ6NMifFsdTTa3ymJq33cTqpvUi634ghMMaCs7eHaxWMcfAfX1cjYogGLGDA8ZwMUjBwwyM8KD6d4E",
  "key19": "5HX8vsH6oKbwPFxTQDuEnkinetwT37dNrWYqvHHbcVKb1r7CL7ASjkYPkAvEURCvRcm552iFdrr6kVKaejZbonGp",
  "key20": "BmbKuX2hm9VXYEzCR4yfMpFLbZt6m6XHEyMbw9C81YNBTcswAYtUdAhA2f2vy2W1vK4ycAk3ckaoWq31G6bs9fe",
  "key21": "5GwFkZaqvuZNJsTFxUXgoYLiQUr1P4QgVFvXtWc5wJNDTTmKenjdkWRg2oUmDZsQwSXbzy3MSXJNPRFADMPkGqNz",
  "key22": "5umFR4NkAP8UisyojLjVtbm486kzayGSqJyHH1xomFa2AsmrQgaZZB2LsG4jK5S9qBcpJNhCjf5bMDCi4DSAagFX",
  "key23": "4EiiBSwaSBPbR32RhTAjwx69AR1A7DFt5yEbkP5FRyx23GXRQiYBtYHNRhSUk17DCsaUwR6zuunDfNgxLLoNxkpa",
  "key24": "3PBu5pyShBVySQPe2vPjv7zUdftdLQ8mvCwJPmyc7wV57tEnHAc7aMCdwJj3r2uSEtwGoh8ZhsZ7o6G6h4uf9BCZ",
  "key25": "2Uh7Ru2UQ56t2kRouvohvAj88pcgnKkiWE4TjHhPfR7kPuSaSs7ndvZn9qTQFBNRVEyE3LpVUVWHWFBurR2St9Dn",
  "key26": "4RQBVAzNBTr2gWL1Zk62tB8GqBjq9mokv68xV8L7GFWpUEJgtw8Ht7BwuLFk9kGWXsrHonPwhbj3zKKWkP87e5oA",
  "key27": "38s4reUYkiNRsd2eM12jpsbWazLwYhrXvosUaKYLRpTwnHiZkHdCq4k8r2EbfJ9GQrkLe9cb75LnG9eM5rg7rjsQ",
  "key28": "BvcqxrxRn3T76LYC6o7SWE36ZVkg3yuL79Sf6Kj1o7EP1LU7kg8pcyzuJ5GaeGYp9LPMhYkbQKxrPnaTZHQFzA5",
  "key29": "VysTs3twTTteg8X2ZqRuxYpaMSDFqk3LphfJKQxDL8UCFDseJvGxEpZTQb7SoPGiNCAWBYPfQDyX3adSwpwAA86",
  "key30": "5h7JDwqUxcWgCa4Svburz9GNr1niet7ZDXWCbtNe3aM9TcLy7tcMq6ZHiBus2eyvrg1RNMeC5CdcTF1cHeQmhVq5",
  "key31": "4Fks8PmSZZG1vCAikEd89yk52PtKnRLukQSJujcTmigeNYczAJhpZ77mGzCACiZxyj8AYmcsDTy3JVksKoeHFaAr",
  "key32": "28Rd7DawA3GGQtbXiCvrjzM6hy6e2xTbyCpC4AtTnWVzrHzbavAnunFfXnMYPK8aGqBwwMLopRnZ2iSBn4WgP8uJ",
  "key33": "2a2mJzYMUWJrSVAXo8VHErxXh8kn8iGJqYvpgx3QEWwT7hyyNnLGXupSuR6FDfyv3kD94W358q6V6qnexghxsn6k",
  "key34": "4FqVQ47J1STp2unH1acva6xMzF8iQ4mZufPkXCWWpLQuWecWXVRq9FxYESmfcBTffPavmLXgxCfK17ppLndG1Uav",
  "key35": "5bYGoGqoC9Xezqowg9Uqu2rFjbuPee9tFb3T1GtEjKMiKEN7L3y9hJMUD9PFtUGHWEk3taQhh4nnEegUFaR6dJYH",
  "key36": "52nJMLxJbt3MAKAbtqErd5ZWwGK2t7WVXnhkT2Di5iVhhrNL1b8bk8KAEk5id6K1JPB2QeY9wka6uAfFWbondYey",
  "key37": "3kzbVxN5wopoqbHgSrSBnMNZd54kVnKCq4JY2SQZPQ57zTmKvZmEwc8sMp1U5G7j9Mu7CZzBAuTnJbCQRAAecJUz",
  "key38": "TMspttmw8T7NcTVzixa2yYHAt4mWYmrQrtvMo2mhmC3GcuU58iQnJ4Dc4mqCZJzuYtgh2RdshdJSknfXe28ofGt",
  "key39": "5kqaDMGmUBg7eKCh2PwyHAVsmsJHPn5mGEV56oFYcb9jRB1nMB22ky3maMnhwN6pYCkx4PsVvYaJiU31JpbyeJs8",
  "key40": "5js6e4k73332sPSEq9SymHGXE7tbwRX29N2eREuLNoMCVni2JkELRbsY2mQ3uXL7pZnZyNn1efBPNSL25i6angtw",
  "key41": "qJm3M7YJy5QLC7UmxgQxZMC8kjw8xV3Qyx5RqZpHNgabMhBcZPToePi8Kvq16fpMsmweKJbdTas9MKXnGHFYAkE",
  "key42": "2k9zNwFFr7gWp8KfnwuysdeXCdi1CTFU6FeYXLRWntpcUJY1SdWzNCtvBk8oT3VKWeBerLfkHzLyGyEppEZdkfP5",
  "key43": "2iuKMfXVGWsLwXt1wtSk2mpWhPXJz59DJENKTzg9o4bPNDNJ7ySyTjZVeokycrRPHNgzATDPYuQwXNo3D9zVzP4",
  "key44": "4uH7bM1mG6p9NxymWNgnHj5WXmovPrMmVKBVt92PYGs8YA3rTwjxTiNiLkBoEBy82BkQTNBk39thvYU7edcY4nLy",
  "key45": "5ezhHJtQ31o7jNMTkJgZwzmhNR3vGs9YWnEYuP1RDSXQJCL1rbimhLNhG5LaTabfCC2i4DCP7BdV2dS7RsyhJSpn",
  "key46": "Mc51AtrZwMnVcDA8y8ge4PWqNfVru9zwegzJi8TfR7b5z8ANbLAZcBRYcZoxZb8tmxUMbEHKbvXCVtDkbKHeTYw",
  "key47": "21ZirJArYt9eQvdyPBvyzZ4QpdDQV8kTgSS4NWffYA2fUcQyKj5Loe7aSkjAscn1iBrQsYvd7HjKQonZkCUcmX2p"
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
