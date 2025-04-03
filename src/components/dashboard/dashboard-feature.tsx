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
    "RoHUyrwsuPoZMMr6faeYUCsvVL1gX7dpvo9mnEEGtkHskMYoiM7h75bARhxXiBLZ3SGaBNK618tiEtsAL3qQK2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u9ncbF96P7WdBGu6PFZ5JM1AEJT5Esa4KTx33BBBf8faanukXzAW3vEuvHXCrEMmovsoTzCzZaEvwEEa1cQjwhL",
  "key1": "3gf7D25xmSWZHVjY3HR7SqptZsZiZAmG2hdg8JMoyuN1teHXFrdP29fBhWzETMZRKNvQCozVNc4TrbVCFycnVxXM",
  "key2": "TY8xYoreHcJ3fbbBF4GQ9vsMzVcX8BrJp25GrreQLct9ZiGi9cn5ML6FUENgPEtB55QwnEYfc9e71By6JGHHy4h",
  "key3": "5xio88G193xhkWBrRKSoDv5ukyssesQZc5rmGLr745n4vvJ9HXRvUeUuBcSptQb49snC4UTGpv6LNbzr6NvW8mDP",
  "key4": "5xucWvrXsGk9noDLHyw4aQQJ4aDezLKw2WwPh9XhS1sXwJsdAbt8dFZLRa1AH44vuhcoaPArPp4WWz1KwBfnpUzo",
  "key5": "4YUJVrEzdnXGGqhupvkJXsCxk8vtCZpvYYTX5EwXQhEutz4vSM86PsTWnT2DUBXQVFmVS5sN4KeUoHhhrPSPtKeP",
  "key6": "4SeGELeTmaqX57912Kv5kqXmpcorG9JZVE2vjNh19DyjyW8nE8z9L4R9F8TewmnkNYXny75cogvmxfUZjPMD9x4m",
  "key7": "b7AYz9saVy2BqzyevbtStpbyQKrrpZS1QyPBvwPVYesNnUedMc8hqrRgkX1bcet8x6af8Uy36nCkqCgwpGXBHoT",
  "key8": "4bXectniZiWGaiJ3o4Lpv3FzRkR8W8VvdLyMjc8VRVYH1NEXzMVmkCgxmAKveEhepRfUTTwc2igtDGDEEfiSwqvF",
  "key9": "28dSDuNpxMqEmzV2EwxugCyKcSz3FkC8NJCJEf4AaP2UjdqzD7vBkVAZuyLDaAr39Tx2HAGch6kcscJxTQqbeiBR",
  "key10": "257Ue2yRwcLh5CjVmwQeKWnrB1RJeNjYG94gXmUbPNnvkUDwbQLU2jFebm9otLPsP9WyuJTHLyvsXRQkmJM7uo4y",
  "key11": "2GeEpxLJhCsMjuE3xKmGnu3LP3oFXoE1imMP8qngFpQBT4DuTuPLL1xK4Dm29kW9XGQJvbmjYoabjvufuTcSirKr",
  "key12": "5cqb1K7S2RpGctdBEGnWpUBz4R2rsoQpHsiVdTZjR9ryUtFp6yVotHSF5NotBWceju2WyfinkWRnGUSvFxNxrTJv",
  "key13": "4ncpi8BwE1vtmw3ADUereT1QynGPe3omaYTxb8SF42TJPyM8B23Uo3jsRKLytw7v8STNCopuYEzV39Q3KTJPw9FK",
  "key14": "2xcEUNg9LFkvQDpNbtNKwZwpE6Y4s79rLHoBXJfxoYCqNWGRhq33CQdETkwQeHW6DJUg5kq4qKbnnc1QeRQcUaHH",
  "key15": "5yeSrzzQNFdZEk63ijBLkZo89HRMx3euYgrS9ELaLAUQve2qtB43NKGFKMymfKQaHuNizNNFj1pHcpCVcVuwjpCB",
  "key16": "4gCkCjMZg5kf8KvMTfDYSgnuG9TaXRcxxXisJs7nn47qqwzJo4zcPGcUEbU6EwsNd8HS5E5BBsRaDsQdBmJx3gh6",
  "key17": "2gdU4u4c1XU5QSzazsazDmPawc9ojs2Zy9bEX66vnHzuz1SyNL2Np8jjKDDU3KBbQL2wabBAS8dgYc73xu8ZM7nC",
  "key18": "4puMdwpKtn261eSb9R1ABsCRPXdytR5ozoQiEfKU9QUWnvtMLpzMiPpsYe1zNnCWK2H4FhgwuazbzyEuPoePcEqA",
  "key19": "3LyG7HPyWgrxve93QxUqoP1wvu4C6aFtcJCfD7T61ZiccPLePMu49xzAKHWTeA14oQXnc5VT3ta8HPabfYtNtbHX",
  "key20": "5HsKi9Gn919a8WCGPMU4YXRpzYh2fryx5GAfu2Q9Nwyg4XGD63DLALwfv1PZDqFCqn4YKYS35CruSAzdNz9Qr4Pj",
  "key21": "4vC8pQdRoXgVhdgqt8Np48SVa3WMC5zvgjbPUMgLpQdom57QtiFsExFWVNRccfJQyJyqe4Xbz4gjY87Mm2sy2zUY",
  "key22": "2Y3RHntNCwBtnYH4H9hKYKRf8CW1NoSf2WZfKwQvxJCeiw6g9KUbZfUrAsv9SowQUY1Mxa73Xj78874muRj6pnD4",
  "key23": "2vTw4Z5aisPRDksUPqvz37PqHAVtA2cruiyhd4csrjyPJ5jSMvxBA4q6Vfw8zVwXkyBG6ty6gJC12F79aoPiEcdq",
  "key24": "5xoE8UBeFE2VjiV7sRQShDm4qQqPQMfB82FFedezjaEQBM6oauPTaJPYNuyfZDYWg32arRjARfZqtTKUVMoYntGK",
  "key25": "2rgcn8KGy7pPqtQvESx8XE2AhSrFpyDemx4XsapYgp12yxgvixeHq3QSZiXzxHVEZq148bGJPwpu3LipxhCaPWx3",
  "key26": "3oTM5ai8wwhSQcFRUA6V8nvjDN4Pe11WQA5tg8QFQvj2WtHrWxzPydsU4b8FtaD7gbqLGKWYZ7q74CtDWrz42EJJ",
  "key27": "2wSFKjH8pMcQBcSjg91M39eiycdwYE26xChRgNZuB9J5zrsiqDdYAxikv7u9kHTRmBXi7SUfmxFeH7gpDmSx5DCJ",
  "key28": "1WZZ3KahKjGsw1hucnjwGqH27Csmoyviw2iB6RCZ7vRMCtvq54hmwhZqr7naMLFr6QiYPTHcY6fiwMpNVKfaXmr",
  "key29": "3xf8MMLu5KB7X6ipXySKPRWNqrsRXie8KFmSnCmQVmhykaiAnPTM66CaaFEAREx2tizndzyMGvj2q2EruRVFQ8NR",
  "key30": "2K8sQ6xf2cCzFh31CV6326sHwdRoDvhgenGvHZKgkqyc237CaPyZeSxZuPZM3yHzUg12u8iFXAsuTtN6RBU4RcW8",
  "key31": "4tpFUbXfo1VEHu6i3zpfr8gBZSMepv9Bjv5TtgQMg3L6WcvbrdTY37nXYmvo643qnEDpeef8ETYsRKJFSySBJmVJ",
  "key32": "4PScW7jQ1EVw7BkNwYwBPhpD7TzzEdoZHP5dvYf9qJdj1N3EEscdvBZAnvfRNak6hBhYPMmviJBNrXQ43quc3ucy",
  "key33": "64FNqnCrHPue99BnHe943TwoRAKCgYRTqYxuqeL25WU8EJMAGZ3G5hMsPJaENRX3uzDokKZw8EPRg9ejVwJnnj7z",
  "key34": "XjkkHCEjiqFrfquzMYysnFPWt1pdjivp4GkdyXnJGQNKtvXar2aaNCd9MWEgfoxGDBE8twMJHrSHQT3cunfJmAS",
  "key35": "3UBDNpoiwxLnw3DQTdRAefZqTiqsMpRwEqyAbkY53XZZfNUPo83smpDfYoiyHG9phxre4v9XL46BZXD1AdmCPGsT",
  "key36": "44mtheAcdJdjUZdPt5vrnVvCwzH7dTDFraj5LeXBy38QPAa31HU8Bu3dNjNGs1RnmGsbpU7hQ9CjERkd3Dkym96m",
  "key37": "JhL2rbvLucNcgPDG7tHXxyq9nBBMB6YFHf5Hjj7VwtUFDRHN6gJqwMzoEDsYbDwUciXNwFPhWBQTzuEcEjsDiRN",
  "key38": "3wZSkC165xkR13j9LsN5yjVBhKCt2jNs981aL1csvpGbmhPiyhDRFSjn6LcbSNDDVon47Dao2HdYAXfV8Egr9Ds4",
  "key39": "51xE53UGp9hj4w7BZwPUjN4yf56XZga1YgkoJ6f12LeMz4wQ86G5GgvwvCFidgdhJnojcgdGPbrp6opL9vfYEUFy",
  "key40": "4zCRopAuoWdQNRHXHp3DVXVtk7zCgc52LmvYKLrb6Nas6AYmzuntmtvimBqKTNTrJ58XB99aZdHGqxJ9AKNjuNYa",
  "key41": "3aHHbE6r2nadQyTcBfgjm5p8NDCLnwHW8M1Voaa9fwKkfBtdqjgj37CmivWRsDt1y9hrCeFpxG9NXEEyFSUWbCXY",
  "key42": "2hS19VfBc6nGJfLYzbmrcExUm5J3BFPDEWbbq4Aa9nW62C19avQcTJ3Byjx2MXCjhkfsad4WYgV19vYhd44wB7D",
  "key43": "5Bt3fRBxGUpwUbUxBM7D5bCpEvf2LwdgJXW9yEJPxrD4AoLqfuELn3yQvVQHg4UGtb1uN6mhGmTAtZoDZbLaeCS3",
  "key44": "xkKzzxEXSgdwMimLcxLpwyajPk5SLfcX4S1ncSaEhpSHwNj4XKcQRrbSM2goHu2gByiH3q3HyWQPi1xpcEao3xD"
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
