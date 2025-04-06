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
    "3g8DZrDZZAfumkpTXHYU1dhpebnXekANFduvKXD38uypMJfyYrTv8UqHNKyfbbS6bb1knnQe4uq8S1d3rMwFN3D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mC9aUBapoXTneF9HLnGEbGJxh8EjVfLJaok7aehvJBTuhrfWxyUP8CVs2LfUV5K26E23guB6vDgQwRZGwRfaoUm",
  "key1": "2SQTfZ5MoCyJGTBSsY6k8k77PQbFvWzwBcqF6kBjfjHqpyWyWd5PUodFU9gginfuYGWg3v42GhTHAMtiQmHXYAXM",
  "key2": "LfaqeYvjSpQDrPV4LRHs2fFQihCvqp6kX4NzMkAYkPcuDFi28yzHqBzn1SxFQoMMRz54Ucu9AzNcEggQw7XYDno",
  "key3": "44szN24NBAb78VUMoKejJh7VgSjCv95rb6joZx2AAF8ADvFwokEsiCSEKnk6jZ9p4cJbhEZkTe5Bi1qyWseyGq5Z",
  "key4": "5qZwo1X59Xk7QNjyrDoZcsqSxFAQqAsfNq2itv14LFarxVXMJDktZw27VCAzsh9FGwci3fjQXJv3TFJsXe4hB1ah",
  "key5": "PcBB2WU2wVEKcZbQJcyMFoUgYDcTyeztNnWZbLoDoDE6gi1Lqh37fzhtuBuzbZRJMhpqHTuFgPoFKdcn6zvvev9",
  "key6": "518gEVn652KPk1GFCvHnV9esvctqGaqD57cNfkWpJRv2pzYaXABz6WStcWZRekaMMXTrtQYmprhCvHHDaGUAufik",
  "key7": "41fuM4rd22poMAEuwU3gdYfZWxYCgMW6rRS1nJ8X5GBwCBnaP4HyE9FLnT8Kw4pf7XQetzTtxWCM7pxw8D1yR6yh",
  "key8": "4Brq3NmD7B8WGe4afpFPAkHYwoLYb1ZCS3qwQiXeifKcEgVodtre12QitoRVKiXJWZ6bGxTeZsvzAM6yVjrVntbU",
  "key9": "2SVSQ1kkse6wdCJRXfAn4EZGwF2yBgaUnrfwAHF7Ar7SzBuWaB1knSE5NJJW9wdw57jmM9JxUsttwsSoiBHKLTCK",
  "key10": "3aWYpDqjSPaLeWRvVKp6mavoPdRJUAoqa6aGNTdGqfZBQvHEvXS4AdxGAjrHTTiHnAjugA9kwpMtfPEfrhwF9b48",
  "key11": "4AstK4fNnDvv96AR4J6f84Zj8r8YZDrqUhbaMXaeBuEkHRN5PJs4tWpZXLFkw9ntYLa1ecy5y9FmVyvozTgsyCGx",
  "key12": "67BbLv1LaVMo6TVaCwv3j2PYZtUHTeo5XbEfae6qb6uKZvwLRH84M4s5Sm6vQ5ywbGumBjv9NtobwNx1jb7MLQUb",
  "key13": "q2fS41JR3Ez9UcME8HZ4HXqedF794x8ZoD8hsfXEpThf7DVwwrWqWDe78ZLyyjoBGkVybM2bsmyXuj9ZaMw8SXP",
  "key14": "4Ui8zB7ya9sBqvttpEGnsWLn6Reh8Un55Bayg83E4k2Qc8dMUaQMoXrSRajamHP525YRYsGUogRoVUYcYVr7fARU",
  "key15": "5SPAJECuCQGyV1hpHjiUiZpgFmBJ44jbzcRSQsLEeDNrSZbqtUhJNEcmsnphhMGZDLBK7iwKFCDjCC1YZWgBzpQp",
  "key16": "2UTQCPSei5YxNWd7kfQ1LdngQpkUAvCN5uc1vf13cAKGuwzbodNyGbUyNCNPcomZF4WLJjoaJiQMpqXUTd1QbQ9Q",
  "key17": "Qv7GLerhtEYVBCneyr6XDJncqSoiAfh7DyBrUPkJB64yvzuT9TFNhHWezCrupR823gf5TuK63HtjA9pM2U3bNhx",
  "key18": "2eogHWLBwGKoHS4wbaxLUpqoTTh89mu3jcghUeWjwUtuXrPkD5TyEXiHpv5LBk3uhHGELhm5PH5e4M8KF2tSHdpt",
  "key19": "tQwrfjBnd5fe6yzQpNANgLPgNnPpJMSeH8Z4n63rWvSqSeEbb1Vp9Wm5ANmRtWtEvSAWM5gwsj4KmKxtVQuv5cz",
  "key20": "21mxCsGsHMZoF4YzuEpz2pEgxR48GY3FKwJNhYfS1H41UhfSRjz7WNJGQLeijkSZrVp8cCnqbufE3mESBscRj23z",
  "key21": "8fEsB23FM1yweYc9Y6RKSwvLrCTGCNVe78NuESqzufpfB3bZRSpvkpxhMSDo8CzvZM1VCkzrNa6WdifydHY4X82",
  "key22": "3qTH7P2cC9Pskpo1kVNfshdPd2jfmK1GG9ryXnGXxjWuMAaeX83fKzuz7NDETdm8ncz838SBvfDUPj9bwRyczSo2",
  "key23": "5S1e7C7HpVXSioXk5TR34ZGiT3ebqyANVpv4CBuezX3AMQn1uebf5eih7nmciEsCQ2HnLYHGSv2HcKmdWcDSh7YD",
  "key24": "VDzt6cb3mf5ur5RgYWBhmzMFVB7jLfdP6De3A5e6VhTk5vmVm3LWD1Di6T7XZusZZtCokGNGbRAhYpHeuD8hh5V",
  "key25": "2u3mvNNC35CpmgBdCYGy1Gwg7DJDVF5xXTbLNXXvbMKpu4mNnpLfvKmqj88BoRUVg1BMRDh1hgVdUA7e1WgCYVT5",
  "key26": "5JeG6grDMFbMPaTUCppqR78hzKLFqo37tJtdue1Rw6GqyH7T6bRzZY9uLzPUyrTN6CSQLXTNeEuSaQoYR7undzQW",
  "key27": "41xaYdRY5xaLKzaoHZhkPBEr4u2dtQkaFYLi6VsAa3GRvBWd4MKbmoUcuS1j1At8UA82DC5rStrShmfMf1k8Fsqv",
  "key28": "37o8Fe1EkwBSXQvAPjNEoW4C8x2rfExhUxyDTeLQhxa6csuyzahcnu26Dcjf8vmswTXocKuGxNJpfXHoAnP49VYD",
  "key29": "yCLv7yvqLqtmHV7GnJX1U9M5LEEhNX86vbEaYRxYpAWkMK8w5tRXpDnjgEDqaqq6scox4PZteU9ZVWyTM22J83v",
  "key30": "3rGi7af7hGok4reKfoMZ3wZSVoirMoA66JJtb6RjZCPDVDAauCsVNgbaEqZv2W8A2Etmt77HywAM29HbWPW4PJuG",
  "key31": "3r5peEuqVQwTCoPuw56HKj3vzqigYXRwDw83hFttNERQG1PPoC2J4Xvcsc8sQf3iGVaY6hQ9HZtvvNSnFHjUANxR",
  "key32": "3bsdgjkrQFccANdUGMjpNVyVdV9t2D56Tf6LAmHz9oiekv7C4HZMSXeZcUyV5VsYHr1PDeEiXZhMp6D1RhKbHaSR",
  "key33": "64XtfSNpmd75Kox1VdisGttLQKN5G1hvAE8KSp4yWQ89CvvWUeQ15keeKjdwnceAKLgnvi15bujxAvqmn3C95GCy",
  "key34": "38ACZ7UwosW17HMLYiZiqtU75bUqL2QkLptMf7m4co1FdNeCLD2mgdajA1URdCt9NJ4wVcJHCo5jsDEfPnmCqSi2",
  "key35": "32wFD7ZK5MWtb3v2Megosc73taJaVEQgWBm16qHddLCjwMSbKfrrbWieAuuGvrMtW9pYAhtRJDvr2vYGxAA1wxAj",
  "key36": "5oW5ThFjfECrkXuaJb3VSGkpJCy1ma1g6mbVewQHNELPU3ddaXdHfPM21dqrGziizXKEmvE6PPsvmPk8LgwtLXj1",
  "key37": "5sN74vvDJpJxcNTtpcXsV9Jz4QyWcGBgpb8a4aNvTUGiKSceBUoWbTaFad2JcK8XQspJFckvc9t3RFf3UddAvzUE"
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
