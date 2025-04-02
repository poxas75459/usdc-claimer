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
    "58XmsXX7rTw4YjQUF6KGj97yGYqNAewqbqyutB66X2tQWdstfZBLc5pe2VFwF9AStfzxhZV19zcGo16rr1vNeLMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gD1pgunkRVUX7d1ea3u8nroY7mMUmwBqgCFnbeqx6fE4aWVgvMR3A63Bf41Zri5hkjMjx127x4gWd4jTtm8tFc7",
  "key1": "2X66yRWQAWf32scxsWBEtxDXHvTUT7YprzQ5LcmkHRRUTLTsHiNm7bPAbeFkWGXMewa4WLFo7aVKLo6JsCDH8gpW",
  "key2": "2omna7K8ZYX9SqfdhoFBoMBxZwqXqmJgJ1SYdAVRfU4FMRcPBrmUGHbNGyKuKgeVvvpzu1MkJyCWNFtcUi2URTvj",
  "key3": "3GQoYfsiNE5gzGqtmmBcDuKuYehVeEuxbi5Jxdk9Hy7UcVTYcZsFAq7E5zkdNri33P1eRbv8znaD3ZcuiRo3yRnF",
  "key4": "YekdE7MhjyWAJw5evq1wSRQ5nRk5vcViw52VLahRb2r12xwjgxzddWxK1N8tscx6DPbhKT3YTJTeqJkDhaVKJcc",
  "key5": "436avEKozceXQ9nFzhMFpXnxj2ThvxhajbEuYpsaiCx1RPMsLbNFP1X9bX4TJ8xVefarffNVTAm76FWRrQ4MmWWW",
  "key6": "3GLiWWQymHRytHQfztXVnJg94wM9xVJ5daEk5i4kfGpBHmpd2y5MDarGCpc9GuDmZ9HdMGQxmcoC5gmGyzXG9sXA",
  "key7": "zrK6WwwBepaGCpNSCWujuiZGq83EBuVMWWXzuJTyk1a91JEoELX4fScnMcGextXeTtVs5c3yiiRG47uaUa12iAQ",
  "key8": "4qe5robrC2eZcQ8hzpnEjAueC5JA63buWYjZB7LtNhaXj1kkHHTorDJPNx8RgsFoSR84YRQWfdcMZTHstZMnMaou",
  "key9": "4p55poVbY6FHzMnxpjF23Xeb88qNpeBgLvhKrcVVN8XoZztpR1NMmyMQcx3vK8F8RBjyktHcHRA46W1meGpyJz82",
  "key10": "33jaxpC8jwTTLtcuFg4eqwhTkZk1qPvqYxrS924Qt8RDt12QFnh59GsVDsGyomc372QvUNvMPwHX6zhoB5bdkaFV",
  "key11": "48LKuitgavRrrDuS1KPHsCkqmQiv3fpai8fPnuAAxNqdbaX1SjNMi1xeiH5JDN5VbMnM9XDighv8aDP8UY4Ltj3t",
  "key12": "2nNwp9GoFwCvy8kLMK57aqSb7TNX23dKyiH124Tx4aSvsy483qQRgT2jz7Yo2Z3SNEH5ZXXiJcKb1bvabP1cM4rN",
  "key13": "3iRJkNw55wUnefwiPttRQDqwqERhQsuFxbje2jZaFVsUXxEfunkYNjMKcuvX7NcLr7Mdo9KQ9mNrsx612x1rJQyY",
  "key14": "5tp2MZMcqijeQFrECGD6XoahiXpox7DjPFfMZyBdjqQF1Wda22T5WpKYh9kzVZgKDhjV2iCYPs12T2aXuFLwKp9f",
  "key15": "4EtM3551kxZ1gE15omrwANQGJKbDoib83ErL3ZSxSnd86zs6CUVAAN9NRR9cXck9eBb2X8aKHuGooDGYjYBs4Eac",
  "key16": "5rtgEZ8ZFasjTHt35ToJ1hHAjBgdtvhr95YHiUi92MwX4VUXcP45L43RRHG9ojCGRRD3bz59zGzg8EhEwgrUzzWz",
  "key17": "4awg7kZ3LD4Md4sUokmPfM699M7NCX5GpiRgB53oV9eHt1N3YV3p4tcD2oosbAry55vobywtfhGbJdgxxcJRAWUL",
  "key18": "2CwWEGkkA1xLpAsgQu6Rtyv4T1uHNaSjHF7Qq6tsDn4Jb8S52QEaMsJGwAbdPYyWZi1TcvfekhyFUzX4DE8i2RQR",
  "key19": "5dpLNYscqW25dq3iqCsTSRWRsAPsQcqDVEGx7HFHQ3TKVEwHJxuZ4tPQXEz7SXQVeUgFBf1pNHyUrcDaqoqudE3R",
  "key20": "2CoEnSCs15VzA3frzZpdR5sXutPsuDfqBS8XK6ri1csFE6QaER3NqninSqVRBLDwkXmDQKdQTKMawKqaozJAaFLF",
  "key21": "3rut2cdiQ6tkCm56gSUcfcb3ouZ5zNvEnvVF59pVW3x7FeY6FrMze8rUUrufzvqJ7jKS9tBAPD7Jjx8x2fp9yhJP",
  "key22": "4TZYmE8Cn7GqceHG88QBQEdPyUouiPoFNbT1qHWov6YCbCcmxx2vixn7Lsoa9jc44sPFD6QdtKDKaoQqNJTWvXzd",
  "key23": "4oKAsQjbCZRnPT9pGTMuwiz3qkg62JQcQdGJAeKQeQdVA1As5MvSDY5oj1MeioY5aT5dU7cEvv1NFMbMkAqg9yfM",
  "key24": "4pJ7UHsvw6AqiFugfm94Ju5qeBUC41z7vk38LpboTWp6dg9DgDgEBSb3wFVKgpaa4gmPSMwcAiYxcyf68gGXMcPZ",
  "key25": "xehSCPLEwbezG5CbWgn1szLgo4jF8Fqes2pq6xpykxoniuixUWph7guaizxFhDA7ieqoYPiANVRLMq9Sdn834SM",
  "key26": "4F497qSUFDUaTvqCsrs9d3aKpcEXVBEudpnvbYqkm9NkxSN1pCRCDFmA1E1VegxU7Eud1M43eeckve5Qtai9CFxx",
  "key27": "UxxorqBZrXi1TLWieVDr1Jqf93AU6NzJ2RmgAiE2iWXQ9yGeC7568MwVZe1eZ4spCrKZ44JVWwqjP9Y9ia3B2F1",
  "key28": "5a4XBqUkWH13iT5pFFgE5vm6NUnS4CWqdRfRMYMAZD1fwSMn6PKYdGeLi7cqd6jUDUF7LdRdvWGgbbzqYhxti9fn",
  "key29": "uKQaiNTgQ7B1deJrCkmneoYpyWrPG8vFg6gRYvBX87juX9BJ7SBLumrZpnxjyxwfBwi3MNQBmvy4KticnenAjXg",
  "key30": "Q8RJ3uPYNRqYg3ZYwZ6gPqqUxyQh7CofCdLYGS3MAUQ8Aojn7R4qqL8RnzegFqq7McaNLoKFJdw7isASgyFDwsP",
  "key31": "s1unoiwtowb6BqUTG5c4h4pZ7YoAUrvThFJFXPNoBAjG3BwgYjJgb55fqGkZc3rNSnZVkaz8wctc1TKdSH6bGtc",
  "key32": "4VSs5D1TFAqiPQRpFd7f2XxCYr1Mdxjc9ELRMtTd5CeUxcmyogQzfhUzrr61kXPbo9YfVAJFLg2zDkH9ATZ93apK",
  "key33": "4RhDXbyZyDpP65wU8tNGjoGyeiAMqWLAHKmoiogqJAwrny13MEqRC7Z7YLcHiYBPe3imFAWzL4XFPeKCqKVG9Xfa",
  "key34": "5WtWWDmTS65gzxr5xy9P9sYUH9DwwfwTLGEPtHHym1D3ezRJTFWNn4sVX2M3csz1ssZKnHVjUd9MmHyw7kFmdhXP",
  "key35": "Nw7X3fER7fpy1f3v8R9ADY24jNCWQhwKJDgo4S4J6mF12TQi5ADf7uB5xjuT65BDgmJGpjQcd5pFA5uQvmoN8DU",
  "key36": "2a9cJiiZ36eJyUUrurnjuVJDWpk4Y6ZxSbp7pHrmsx2ByyicM2kpFKu4QV1GGhCKwJr91Ej5baaGs1eRYpvHr6yu",
  "key37": "2dbLXHUNt91GnJAybfVDRa4oCWodbxVg5xr4WXCXxgH7JQEV29AYvBVhFA9googN1PHznKs6L5nv64xBGkzzvmg5",
  "key38": "3W9PdjdDEgg6dWZHSu1YQNCijXQ4H4yTfHfSyop3YiboSJeYWgUGJ3vKenhPs54ecJLdtJfiLuFmVjjH5xmKeJum",
  "key39": "5h7bEHQHKyYEHiLJ6GyUgeJhEaBRtv9m9hhTqZba4Dw4pjerJ6juBEaXYUxaraHQyb6WERbJwcVjcZGT3k6QSMii",
  "key40": "T4MDvuWo3oXiipYy1b3Gb95DxZVhZwcoTF6TGT4o2PS7D4PRQXNogG2Jrtr4oxDLJPyBsHDbh4XqG8mApsZEm3T",
  "key41": "5dU1Qx38Rg3ZRK8Qg5cVhwiNbivyYuYrp4wR1BDaYPbUBijs5YbE2DHFjuwkqxc6GNTPiMBL2X7hLnceVekxqsU2",
  "key42": "3NosPQtM2f2njnb9eevrai64aZScBs7R932ntKH94v7mELAbaALJujZA75shGAEmJMqLEL2qicvUJA5fyiFnwvcA",
  "key43": "PSv9JnKPqma7Q3ypqYQ7sZTdv5MJPUrVjSYSZy54hg5Z7ABfsZ47zvZo2Ub37oWQC6kXFYErdx67E4i1tr4LnZG",
  "key44": "5rLpJcCmUNEeEW49reu5V1jV7XBtCdLxprSH1iv93tMG11oXaNjpJCgHupUn7edDCXkGiTkd2qPwmixqTunp842i"
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
