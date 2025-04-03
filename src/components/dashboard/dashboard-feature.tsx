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
    "2J14VmEhukD77HbW1mbr3V6hxYpWzPar4qzKc8vkYSjZxGAR8EymQu5CuxBFBdSkx8hh3qN4C6TEWEnTypmdF9vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P2kHjhfaXRiYd3UXaioAV7uqXNSeLWvDHvnMkQZ6Mgii33skwU3rtRQNga8Y5tpKTzMVoAxYtsnEy9JmnSN4wT7",
  "key1": "54Uf4MNWFbBefereTCUWAHJNctGmdVJ9eU13FHtvktngP4iPe7DohTCLL8zGBrjzKZ8DaoWBgnTmpLT2gyJA2VcL",
  "key2": "5VLCLCecH69EVueuTRVUZb86Wr2Uz7bCVP2qcjhgG4LAcR6uLGUgn9yMQBsZc81T91ujdzP9acULFVXXayBUkaQh",
  "key3": "3HwSbieBi3NhFyiSBb5k9jJGcELR3wMogTHcTvCLs776iJ9oRjGYwbQiJaQTv1ono61dZgnfHNAtMXFko47p5mgP",
  "key4": "5BCfefdTci9KzDHGzDYaxsawTyypnoen6t89PVcsnJbKqdme1HWVzZ6hAwiCQGmxcoWrKwf4DQJEi6qpxP44GVu2",
  "key5": "4TBWnTYVjJ3cTJcZu9G8Gp21ovTF9f8JgXJxTrfZnEhxcHjpcYRmGqtWLZFXLyxNg1b1REuMLsY3ccMFmwrcyhUj",
  "key6": "MqL4my9EAgwd1nZ5V6KqREAkciAw5c9Br88ryqwKqpwe5FfP5bZ6CkC4A3S5HBg2TBeJhns8WrCryAf1H3RX2FN",
  "key7": "4zyToKTjCWJp9m2bqxQE3EcwHYn5M9g2zxa6jjdyCKHywUTJSPn3PGMqB55GU6QXZHrjETx6T5rnZ3yAQk8n5zin",
  "key8": "58ou2uwBeUZrMuwBVPqHUdJZ95zGfzbnNMDyx1VYVBpZMDVEbj6KRRyfTrUcWokwHctCVkoMSxSshueD42kHsbr6",
  "key9": "snkA7ZrxT3iBxfNfAxUo8K5FfpEjDnveRfXgwAPUx5TxHfi6CBHv4cNqn6PtkVyXv9rouzDgDZMDgcEDLrpZggy",
  "key10": "5CPUFF8jqDuJt4rH36i156hxeNA8rKfbSiaeux8VAZZJAAugE7C55gYzraiqosfs9U4hPaLyRnFihZGy7ss92e2o",
  "key11": "af7qqsaYmepfJNujHPkaKLfPV5io8MULBotzfpThm2DxocwBprCinKJg1C5L8w1SDVR6FxaR2F5B9aeKJEbAK4H",
  "key12": "3QD6L9ckW1cmyH6SGPmp6E1RhqbyduQYbjL4wQUB14WXAKgKzfT2q83ZFnqNg8poF5mNKnmAoaShQ25piZKhJjfp",
  "key13": "484Pt8KorjRFKaA6eifJp8EHeepP1K8q8xS1k3YjEAkLT2Pj62C5pvhhrPYi1VVENi3n9jKQfYaJVnoCoRjrqvy7",
  "key14": "27muEGAy3xDa1HJoyrDFwL4ydSzQcUDpXW8rAmPHnDVr6rwE9vyXykBja6SWQFbQ3kUL7W3xukjGnge6jhzxVY8f",
  "key15": "kpndbW8NfPidURdY9n6hLGhjBc3HU8xabvNmFWnqj2EqErvZrZpHiGRVzA8RsKkWnxTRNjkR5LmEwhmPKG9iecw",
  "key16": "278yDaFmEDzsW7BoSkciKBz4nGjKnEwxd1ETrGbJCzqbSqo4kwe7cbbAvrZCYiFfjnYvjzy1P3A9mELQSdK141aW",
  "key17": "5CQVPPMBhtzsq6qa4GSKwFRZqq4fCLq8GhzTVwEe3abQtoVFP24ZuKaVUwoznGuJK3frnyoyY5oPEtTsEcWirsN7",
  "key18": "4NUXoECFRmFuazDzjyLfocaitkQAVy7AQmcLh5uC664YM247b9JK9r7KKrzSV1E4eDT9W7xWeJ3zhN5Wz84nr8vH",
  "key19": "5f8juBKEsPvwWF239AwNuMALWGXYpuSV1LPwfTXPKmDouxVZaxK1AGq3TnDUbK6NzjtiAPRfRgikmCLVDYMfeEyk",
  "key20": "5496hyr7R1VsawU9uxsdhz2j8P6TnD1772DFWW127XK6RZoqHrWcvDVyEzqnnuHAyhSPqG1nRfejHWrDXh4bDLiE",
  "key21": "2dPuZu7quUqRE9UuNVSBLCUSstGEkm81rU7KYtcPRKDffHKzWDew3wsqLXCPHLVrrS2H6QzjhWzX35H4yoCzmiVz",
  "key22": "dRALw9j9MYh2dgsC9EJMD6pRE4UvH8gRS7x5VKZRq26wXGsBJx6HPhhTdVcjaBPJwQUDPwGoEWwkUboaVwWYzRB",
  "key23": "3tGHBATSSsCau3F5LQPxzJTCqJL5cdmpJJdp4gWRs4DKn35sMaRU2YYgaBddzYQQqFL5ZoL9azFjaWdyvDgEvRUm",
  "key24": "3p8g9PPRExByKWDaj3BcpR3xbRMoU515tSjrJKmPzksw3EJfDMRrMoYHadpcRPfW18u2y5oCdYJLmwnNpUy8G4aa",
  "key25": "2VqPbsnHYUuK6WRuWHT63AXkryQmNh5Jbwo4rtF4eDvBem1L9Fsz4XDj3iZVNTQePRcdkS27zxTxQbLh7uVsStQB",
  "key26": "2QpCGcGG6Gxxtzdc2sNDBkCQmRFA8ffNG2Rfx41zb7USVRkJrcVJSDjq1X82aQzKo3RxyaN4pERnfKmGPm4DXLZX",
  "key27": "5jGTx2DZFqU1UeLzasCdJtTcoH4gueFjo6jL9ACKpHkdDMf8TtnRq4i9dPe8R8vyvFUsHJTDXbxbuF8u7Zxy5Jku",
  "key28": "631petJsk989zPH77HiGcJZ97UUBCzA97kMtuzLGgtkU8QjUvGFr24h9A5mVRWtJxZT3fV4EM8Y9m1m3PPB2hacD",
  "key29": "4GVn9fDK6Q1XYa9LtSdXzX4RX1gru3xTfhJpRf7o3bc5QUsGhPth6dKaSkBMjveJdm7BiAk39X41F27HetV2WGqH",
  "key30": "uhMpTDQ13uU5kKXzfwhQUqiQjcQTaVyfS2d7xH44jKQsmoJT1PMzp3GYYqy44Z1PRqkyn45JwnHj1Srpp2fDrQX",
  "key31": "5DwXvHABGQH8LjC5v94hiutzktVCp9nxwk1bDAR2uzi6KspbhqCLcW3jdpVnoGcAHyS78NKmZ5tzDbSUwbXaKghv",
  "key32": "5bKTwmo8YTE8aa7kTRdo4LH48j9BiwyofGsbQonu86rgJDCpVEejbm6aEbo5CQLy9BJne7ULXGjdmsS1oHt8NYyz",
  "key33": "3i4LdriS9d4mGoVoAUkXCLxvvuQmLpFS5ZFwRdayHqZXaLiKoWk5ShMVNaYA2y1UAm47NaafCcLprBUC3Jda1U4D",
  "key34": "4AbSZRtHPyGP5ka9qWZyodGHGkmTCCMaAxbMT4ZAhMk7gi5r47TJAXr6E6ZVS2ndQpNFdcHesimrEPPj3aydfW6F",
  "key35": "27BDxt1h1B7dapHyjy6aVbdy1xvjU9FcEFA9Xbdp2BStNif27ThpKSNh4auACtmAvyRpsvHt3YEvehKdcupSzk9Y",
  "key36": "ipmzu94apBvZDXtTnXoagtWELfVeovb5pVTX4B4kfbgru8sTwLGhCQwGRHFZiYqZjhB6xbp6FE4BAiZJFUFjyRb",
  "key37": "9hEcsoUmyrVsefdf8TqfA7dUbdqtTeJ1brAwBGYgbVAyKxPqYpaxCcz4F2ES716pysVrSFBQjcYnTUhZQbGqMNS",
  "key38": "2jajH2MXe5cBanwVw3ASdhnLGLQX2uBUtYfVjGsdbbLGod8H3WezoRhmdzoc3eNqs8ffVRu573Htm8za5bfT4J6D",
  "key39": "5V6hbsbWRTWo3Pp79BQUD2FGrUtKUkhxCpvEX9DEbrhNWatuajYBk1X2176zqpn5vAyR3ihJxsdXYe6wTgxfvwk6",
  "key40": "3kyQf8a22Vgf2ErWTZ3oL8oMBXVxRLhwxshtt9t6icnHnhUjW3Nd3MAko3z9mfn4FNufvEj8zyrszGt13UeZiB1y",
  "key41": "2XPJQZPq7t8Lw8eefmXCMBp1Z8qx8GHJQ2uFwieNnq8SaqLsYHHoYk7zX2SY92wQDrGbggr1RegXSdpADrrw3yGv",
  "key42": "3hgEsyRzmcgphcBbqpHdm2pd2cVFFVgHoaKrBaB4PPZ9vw2eevPvP1AmrguVi1UVsB47wcvJiCqmXyRSzqqWfgeA"
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
