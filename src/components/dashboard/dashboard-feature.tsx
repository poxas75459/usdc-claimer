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
    "5MuxbANK3i3ZxLSNrRdfAkfqf4u1FxVbKFSkttduKuBGY7bdmMPFUPaBWYrsTHbR3B1gn1jfyZR2WRGFM6TxEUWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvrA6EDNKxWjFWvNu4WH8w5FpJpf3PvWC5GAtKgNJkETCyZRVP3PHBHyeQ6qVHVySzzj8SmzAhqtb2BQFRti24",
  "key1": "GPAicwduqZPNdKJPKcweSxiVUUBfq9Nh3vqzjohYgsXwgJriHJi6RrzRWZAbvpbajoxDzo5LMN96W8Bpcx9sxxE",
  "key2": "3ZByUbXSgMuzGzheaikvEzZwqG9f13dTdMyovxm5awtr4pXteGDnTtCAvuyqhsYppHKZedgyXdFru1jKstx33gvN",
  "key3": "48vsyJMo1HL7DgfD2sLA61fqg4HcgWuX7kaJHJGgnJTriJqJRKWEtsVdptj4frMGJnV8m6fMgwuDCdNkfe9fF1tc",
  "key4": "3pQLDhYSpJkghm7iXF4efUcXziUHcuSgq1J78HoYRUGffNDsKGe8GNzHvgzgb2PhFM7a3wsXUe8HGzGgZX2sBtVr",
  "key5": "5J2VCyfUorKCSg9ia4GwXXTF7LMYYsa75hbJ6CnqpduzVnZLYN92tVvAgpHrT52rgXUvU7noqVx6nBjEUdpkZm5i",
  "key6": "3WUggLbp2XunFd2KPJn7cZCjxtwZi8nfp1cVv9kUYrDQdPYVRxkWv4jSuJpyX5Fre7UmQ5nx3smYHEWUo28sfPYi",
  "key7": "2HwUDYLsnmx7RvtXfVKQQR62xePiZVKh9Q2wkg2UMWEHpfauYwEpVgi8nk7qBKDcw3xNYoMCPX6ARCxeRQoomiPS",
  "key8": "PfofuBkXF8z9MV56sybtUvL22cHPsXa2JKNbn1YR4dzGLHy8ibvVeDh8bhdTcymYcLpvFUoX8Lx5b2azWd9dH4b",
  "key9": "3sDnAQxXt6HgrzAKyddfwonK6a9GgnT1bRd3ho16PbAMAWoRYHb6Mj4siEVtPseKGstkZfbYBQH6Sxs4VXPbgT3B",
  "key10": "2sqU2qYwc7aQeJqJu3USF19ufDtnWYhgnJzWvDAyHiuMK4k746Tj4R2WTBPygLncNKhtj4jhi1AC1EQ5m4Ci8wJY",
  "key11": "4qGnWQeyUybyKNmd7TBox6rWi6FhgFvYvYSAFjT9ndvxLTHjZxtMDkVThcTD2eXC371XTTzBMVB4DzW5nTHoDgLo",
  "key12": "3YwagKXCVe5kvCUuVc1ssSjjUvSd59HZrHYcqrRRXbi48cynPTPYnePSDm9eQ9xZ7bkBMyZRUeZtzWFTkb6rbsvM",
  "key13": "4x2xrU6R97bzU4rXB2JRJxPYU8FR3KqhKGhExfAFBy3V4xzPDy1CndfhZNcydWbcihHc2UeJyYfFfnKsC7GcAi2d",
  "key14": "t45iJXj7DA5tm4x3XuymrnVd1gyhu1oVdHBhR11epduMRnyQqCo61o5hwubjx3gkyh4ta4emqAFnt4F5NLnepcP",
  "key15": "3xPYBKwGpGWMNw47MNLCvcSPDdPGWrAZgdNLXGxxyoALU4YPGZfvkBTGpsPLDW1P911SgAWkambbb8fSmE4XkgVm",
  "key16": "4EeRuTabX8UQCX8o1rHXnApZ79eS455Ar19PJVLDxtYXRQoYDQNfTK5QwvMqjKkdqfpr9sPn1h4HvhQ2zWtzSrp",
  "key17": "3tCfTSHAweuWRbAqykPSqG8NhxreoFCxvzKj8LcqUduf5ufPHsQaoE7mcAwbiSKztUyu2BtUjxjqKZRn6rrdRjGt",
  "key18": "64bhZQuWZuxQ9nes8taDbNUXK58HCNKpByhpKFH1PTNV28KztJYXQdEJiCWMiD41Cwa1r8PCzNEViEi8qFPQW2WW",
  "key19": "53RfMJUcibmRvbjXNDpJiM4cuNoqvKQHhgbBYs2KtLqUgLpSYmDSqnCYr3RH46SyoD6PGafqCKt8C7kCYoBwoE6Q",
  "key20": "5aQZJxXc8bUSjrcz12iKm6NaHe3cCYGMEYkCD8kEAU6bo32A2ftkiRfw7sgbnMk2SNK3XE8Le7QqsCG4newRMdAe",
  "key21": "5LMP1zBDaFZN1oLFxZrmZbjWSnS7akd3CmuCjx8KNjQXpEaHPvPUe8o6PRkLn8xjmVPeR5nCviTXMHrCPwMZ2EhD",
  "key22": "354zuVmizVovqan99oeN7fet8xS8QDKPNT75dRVMLYwzUTmF1S4CdjZiWzyYzqZvNAe4r69oojzVEA2HNWjDnoaV",
  "key23": "bXcXnsCxT7grJU9LpLHYGyMoRb7k7e2KuY3gTfNAnG4tA8xwy27zph7GZGFG3LvHbwPC5yniWh3qLcN3DUnH8yG",
  "key24": "2W5hFY9a3LvyeWAuytx1XziqxKQtoEo8LYtyYrDM9DnjXo1CApobd7TYPp96HwQnG99ndFPLeeUSPGrw9mVG3exB",
  "key25": "61Mg31kxMFzb9wzdatJ83qvKvk9mLwpSifn4ReDtDGwTG4hFvi9codXkyZqQw7Ecoq55pADVJSywEhmvjHVwdR2f",
  "key26": "4eesZcFMcgwzFXzdTkSx2mB76kmmqhmAF9NW2frToB81nfPLU9Kw3PoMPheSrcqNGmLxndc3sbpx4HXeP3MvTzYz",
  "key27": "WC8TUf6rqxGTfbtHHUGqrR79R83sU5oJpqdusT6wX8BWQQYyHxjvnoFECFceaQQqd7shtVbeYV7QW4RLuG6ebMH",
  "key28": "4J4vb19ryVW64R9b9dSZWJZDv3Upkuj8QKVPhhaWtnGMqGTEJuB4WwPbTyLonSYS6yZXwmRSz5XE1DGHFur9vjnu",
  "key29": "34LNdLjJUGixEHpxZRMmVAkwNM9ExPVknCXepExeivpFHExc4Ju1biwoXLSZFHQSnbUS3Wg9mUCgRRhkvs6KQgqr",
  "key30": "zVUfyskPSYQGyrqKLo2EMv6fVEdYwrYYbyaydYz3BjCT1avjenNCsgY9pEnCBPQvuQcaqhx2gkEBbabmsA6PaV6",
  "key31": "64wjYfXHtEVqW8YePnbHN9EetoYTnxtbSuuyeroJ1xPbwvgKMFjLwk1tjFbo6VfbARzoKfx54q5bfXqe1mLwrLsn",
  "key32": "4DQxx8wC9tF7oPceC8macw7CycuEwExUvunp8pPUhSSF4xsVUWRBLwSX6E73kL4QHfRfEYhHVwCHZiVfTF1REBxc",
  "key33": "5B6bvievWFYa2ZxMdZvmDDGcsYVjMQy2QTtnvVygnj4YK6mYvqornLx6KKGpQDJ4xT8mCaqBnwppM6v329JMFEgc",
  "key34": "P3FvAVnMub7b4Tjt4cT8Pbxtrwcgx9M9iQqCu6FEbof7x6kXuJSAgjq73eykx4KeYt4jobKKbCPB1UCV6BPjqtx",
  "key35": "EYjPCadwgWgVwtf46ApSgSDnxgJj2KsqEyWofffVQRKYMTtdLRc81cfY8a4wkP7t56bUcreMJs2h6XtgVveG4Aq",
  "key36": "2wuSBzGvu742BdVLtvnSrSL2eiV51nzk46J1D9c7bYRRe1fLFHpT8N3gDCmUFvNicJPzTanqupHJcaKWTCKrzdGi",
  "key37": "64oLFho7eDA4uCsvQ2qt7LY2waRmKHumvbTxG1YMphvgtVZsmH4aGDKiUU5hvgyRj24ETzHhFzeciPZnQwU2nu6C",
  "key38": "2RvZzyNrcrrxU9bnqtXoH83XUhGKDp2mFSPrciioKu2iGPX6BdhCGWNxjPwa1sB5J2Azs8mDCgNh9iSugrPLhdWK",
  "key39": "5RFtJykqw5KsBGMmq4iHfkEq2GHay9Qpv7BhvbPCBfcJGtYyxSAJQC2njZ5JTfymKG5pYgJLhznjeewemYvWNq9X",
  "key40": "4kmU9KZFxmDxaET1he7HUnctJKXqAYTJ7T4Q6Dx2UBH3QsqP93tUM1uM8ZJFVLFTLSRig1wcrEYwPXRdyoHUqbwj",
  "key41": "xxZyLBCo7pYtMQj37Htea38W5KQL7deCJGrJv2tKfRmnN9uKZDMXkfugUWGnJPcVaTVBCLJz7TpCvkfd7fCFv43",
  "key42": "4VPn8zaBAqBxCGf8YYu68caHk5Y1Rt84ZLS8qyjDqL4FHTxXYf4uKo1ESkP2DzLhmkJqQwRpFAJi5pmrdnSPqF2V",
  "key43": "517w5Cb63chV89oGnhkScAXVBg435uj5M9HsMAVgjdt988yGX1Xer8K55uCDSR9g2eyrARLeCCr6ws1vTSuYwnZK",
  "key44": "4cDNM6a24SEFKNBQRM4h5zHCU1dZxE19HCxf4oak5kz27gPgqzvwHx2YmFMCvBeVBWpPKBiR7kZwrxQsdsXMXgKM",
  "key45": "5x8cAAgnvngphRN6skZDvAikSLh5urfexcxvNFzJ2YCDx2QXhZE4utq14r8xeWe2LCqF5k6mpRFB1uJaKB14LqWi",
  "key46": "5UrMfiT3kC5QLyezGiCKsv1MrQ6SPuvEnFDqmGtzLcboLhdcM6LowgA67obU6LJgey3EsA1jb6JD2KdoqCMPm1sC",
  "key47": "2MoWxZSmHsAUcpN7B6BES6nwYjY5yjPCtdf8YcirMYq4oLxvxJV7WG8hnJ9sW2QCfbJNkc6R8CPtSsftWTmPBwgy",
  "key48": "2fhqjcE64cB6up2ZPKRTnsWikKcvGsCcR5SpvBQXZe4YAh7y7EEgYY5Q6cQMKkctJEz3HrfEbdKk1agRJErY8j6K"
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
