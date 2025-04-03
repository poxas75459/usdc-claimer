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
    "3spEMiR63NUTFaN1c31eTVjGRsp4U4pvmDT5gdtgrBusobbCUYJzKnuHhwRxZ9vSLUGsGujP7xtevWrqgurKHKLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uiqsppqW1ugAMYxAVJpHHnMEneBqHMjnPktzWhfTJyW7PJyhheFZGgv9BQ5bn87i6XDhKdV7b8CCEjk7GmFFBUs",
  "key1": "5JgjVKbqr3ookmuKzrdYiKtHAeuKBftWk38RRmajjkXXn8eUsuBomeJwXzmpzZkHp1xJQzAGTgD31AMGrdkpp9hN",
  "key2": "62rn5nz1D1EiGVhksRzt7img8k9XFfVwtNU1zgKy6gF19gDBGfdZKQSazXCEo69aVJou7mM3AFSYGdB4waLvJAkK",
  "key3": "4MVmshUeVu6LFE9ZsUEcJJCq1UkKJsQzewEGNNuCvMEh58y7Qt4wqhKLrMNWu3ny5zdFXJVPiSVFuyBaQP19PUDh",
  "key4": "3so1CqUFmD24w9F1HY6zvZcAc4Yg3iExDMfTunoBQFZGPh4XnvqcL4z6eCdrfebiqWZ7XyUVTfXdwVWHdM38fuRA",
  "key5": "4JVPNvTF4KnR6yg5pz8RmLG7kLMtA7uyty7AQXDsuYQHhBKHLCokeYjeiBVG27tgqpqVtJiAykboiRDSZMxt6mk8",
  "key6": "qM3CZ8RAbZdJHvKGC6kju1EfSn5iF88Pjko4hZufmQ7VRGPwtCACppavtnBaoJWkBBkXqBPUw6p63QuGPr8UCiK",
  "key7": "dDymH7x271H8x9shre9T9xxfzeBE8HLgT1WSSuSbAfAoLAoJEiMNTTpDLF35pgTgNTK3pzhbaYn7r6JNubdRvLS",
  "key8": "3FLqb8EtzmsSsG7Kkhay82yob2BYSihw74CEW3S2Kzt5a78S5k8mRqxyxT7AMxGsgGfQ8x7nVttxS6WT6CzMAFsr",
  "key9": "57ntbhd57ErKWCZ47nsG8U4kVZzsvhX8qzHwAb6C4UC4LzNG4a5kPUSqQZccCBSiJKvEaJkZ2i3ygFi5e51RavEs",
  "key10": "2xJ3sPTgkwzexKTgdj51WSG8SFHXmg1dxcrYHjxijRfJwTTMaHCa9FJd6sQtvoo1Yr8zu2BCrkZNBXGYDMd7RvLC",
  "key11": "3ZxnwmpjHxHqaUMdELnypKJ5orsLHkWW8SSJjUuk9zgvES1hSDJ7kvKyjo8RrH5yNWgs7sT9xXB1MM4Kxjbr21ha",
  "key12": "3QXryt7tATYYwVcgiWrKS34evvQ2wmrJ5T77yQJSQZugygTwDdmSWLFtfgnxc9AdZYYsbmxGQeua3PecLh1qmzg8",
  "key13": "67REi9ubzEsvFJ73z72zjxWNxbLx6otdwvnzmdRXEepsdo9Wfy29aAweuPJmFngRCziuYS8y5KcdKDfAJEX8pzhZ",
  "key14": "5UfvkMhR4NehYdkJBvzEcR4hpFJnXkXz2JrBrqiWhGUENhGjikkNyidbrY2hFxZ9K6AcbNef27LzsXXULUahw42V",
  "key15": "3kTkdS1biS6JjYyeqbDTeGnxEUqrdnK6LbQsDSJGPhMuEZE9kowDwAzLVmn4rnUzGDWpmyr9FdWzFNTyoBk8gnN7",
  "key16": "4w5YE3GcmYKCMJA2TAqmzL8CNJ7DBp6bX57s2h15Hmr9pKp51Du6mS2v3kgfNwoo6Kywe4kVmTh71LhPEMQuSUjn",
  "key17": "5ZETeQjSCSrBSruNpxNmyFsgsVv5VHD7SUHU8KBznC1LXT2xvvtyeT1RsC2pMqq4Vm69MTLHVZf4Vjj8ENmUVaDY",
  "key18": "42YaKiMHxAeiZ2yK8yzHzr4MPQsgR3gDBGPUrmyT11fTBgozAuLybw5JGbP6VV4zJpHtns8kcB1RCHsFwXvrBD8c",
  "key19": "o6djxouczZUNW2GzgWdZYCqGi3B4VPMopiiCZ1nWShJ5DzkojQhD3in6HWzBXzwkpWcpmfa3xUCmM1jH2FKsbPY",
  "key20": "4cbJMjso6vAbm1WDrrdm7Tnp4ZBK7pHu6chvDRCUFoHPba97nykBtR3GVjFwNmxjSpWMearpg4vFCiQ5tzofYKWT",
  "key21": "51g6tdDV23uPBSqJ4BakW4aE44SbwqVJvQN5QA7y4g1VJ1TV7F6xY4WRQJEtaLkhAtDi9fzDSJeSp31rXquWUfQf",
  "key22": "3uqGAZvRrBXgQpNu6969Md6FM5wqmcGmGi2H5evUwt4GMM4YHjvoDPz4ZhWgEoBqkJuiVLWuJstwK1zxGWZA7EMZ",
  "key23": "3NYUdPqkYoQwSqmrz6myPKzaMFoAP6DCJ9cQEhXN7RBt8t2jt21ZXFqR2AiPb8g3Fm3BPBv2n4hEVFtpuYwigHvG",
  "key24": "5GzzqkMPWT4W2utrUShGzkNPtdQjyhrcDsQmTPrXqR4ph6zZYG72bk9bavR1u52qriNns9FPU1ewbyHG8RqC7ti1",
  "key25": "3ceQeYmL6q3vYT9VqcxHc6d4srZrQyTUNMz4MJC95egMom2eFBm7bqYFeHS6QGaCrgGqKVt78zEbPXcWncwkqpGU",
  "key26": "43LJthEMrVsTiWHJd5FJDJWpJucKFcaneGtaLu3nBbGsSYr95VMsznXGg7PyMdUEkA1Ene5mtR54RnwUMzqaoFBx",
  "key27": "3WEhGdEqevHJPpfCYh1UGFVY7BVVaePMxjBEutgCn7s577FpKp8t5qTKjAjxGQC9DJFqirXvLtwMjPCeV1iA6CpG",
  "key28": "WrSLdNzXBh7bMyL4NoRe4VLpxCqeETZbCKzNpZQroqq76M2awXNh5jx7XuwXDc4e2QfpkZzCWYM8kFsvjrL3Akk",
  "key29": "3BmPjWLz6NFaEqgoRFc6gcTeSyrDwSkh3VyZZ32Jte4rjvyMGzvfKXY4Mp8HjuAn3MwNn4ZV695XMCRzkDLabqSh",
  "key30": "44v7GQBvUKvHu9mdwsXVnQazyc79BfbtMaAdNbKkSL3fdjvXR7wkt5DCbovkVtEF1ogdz63c4SauA1uaxwQGfh38",
  "key31": "Qq28fnSBGkz9W4dyLupbPCF56yUU2wzsvZsmFMpo41ZNAut93LYxAf4KRELs7aLeFXVeZzQsXiry3J38D6kbR9u",
  "key32": "2UmKZ9xCi6k571TfNX5YHcbXG82Wo8NUvjPBruvhRjMAHu73T7EcE2TYPJzPUvabquQnvbhXFoztZ1ef1nntVFU",
  "key33": "3p7LuQKyy5CaPSCnRRA9B8EtGeM9woazhWDZUYZ5Bd9NJwaDYFasbJ5VCzZ7rfTLuNAGaErgJhBtt3fcW2aAA8fg",
  "key34": "2gDDP9Qiyz3byeUUAewG5RVUBtoQKiUTiwZuQpiis4gupmid8HP59b8Q2gKjKu88W4iUga3Qkd5GdKM7sTQ2a18T",
  "key35": "5vZQvGumLUA9aUp7nTJUL4FEUAYNtcasphvbLVfH9HoFFDwmTHdgXuQ9VJnKhGSB9ytr8iqAUdgzjvV9tujAsc56",
  "key36": "5yHgBW9ohURk4Mb2nUfmLPkfCkkkRsDuzZdzaQCXVbamHiFmfCLP4RCBHv9eVdQMzQ2fqQufZ9dYArZsPM7fxBm5",
  "key37": "kyVzfJS987ww2mVtJRwCnhPhHJ5uvMWFAG9tykoAxGukFoWarqo15mqLonsoMSE4w591Ki4QN9BoG9KGPYqmRiV",
  "key38": "2X21goaudapZSNgRLSikFey8qAjsggetYZwjFUEf88Cn84FMvB9eePDKE7UaVVzNKHwkYtzScCfbShmHBqkTmSuw",
  "key39": "5ZHcvrwDAzhUC9ab8m15gz2CQWhq14TMrfYVzfVgqgEygSp1vyESbrGdxU86VSQu4Nj8ahyb1n9eqYAYNu2duRfB"
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
