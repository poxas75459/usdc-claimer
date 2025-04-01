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
    "3XpiBjJ8Q8uDJh7uN3AGRCrPrAZ5RSDpnMQAwMVpTadThX3wRXhdhzXyCrEQpKATzGu17tjDdYJgKcisWorRWi7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sj9Q2bKCw7359EJ7ZxUhyUXRqqYXeKto4qJ1dva2U8LtMg8dYPQKRHdkm9yjRGhvBQZY5wj9Yv1kELZaJjZ8g1F",
  "key1": "2xbMqMEkPJiTtDGd7wXmcF7pQ8R6PxHwNAoejaND3YqdFPvFPtcEKAF5nreB8YrHb4HohHS56UpfY4EGGyMmEzNF",
  "key2": "5TE1kcTRqJnZfhgG84XdVWnBPw2Qb3NgNT4vH4zio94RCUMc9JRuJ21XDJNW3FPLWH7FMVZEerCAsnZFm6mz7afs",
  "key3": "3pgUkgP6jzjwm9bFtXtdBiH6UFLQqT3urnteYYgzqNcxNjHLUAezuDrRnAR7kFRvUHRCjK26DKxBH119KjF4Lv61",
  "key4": "23LV4bkSYkGZcxGgvkBNcNXsLfgAVHafupVKAyuoStLwHZNyixtST5e9PsjVSgP6UwcN89w88Kq5PMykdy3TbGK4",
  "key5": "3WH97akbrW9cm9cpFz1PbTEXt8EHXThfNGybDiLAsQoXEKDMe8qnsVg8WFWZkUppSpyU1SM8SpCHUHH94jnKVakZ",
  "key6": "5MTBcYtdyEnPGQUBkD6AVeKUMMiJgYzfezCGZZgMJsb8BndcydeGGQfzt5LgLwQz5Q8atdoic6jTF34ra8J6VH2L",
  "key7": "2eiMLfYqYcjH8jGyopon1gqCyJSsMB7DuyQZ4ywwzkTebVGgurbELxKNtLjYzqMcTauHvSiyFbZ2YWRm4TR7CB1e",
  "key8": "4NECSB8cctv7UMthkpshoJyPZC9NQMLNqEZGguMFF9zfG2maTkVv4RcptsVDNbnuzmSSWEs6fw4SQG9MrhvdF2Q1",
  "key9": "4ugBXqfXaoUWTDSATqZisxabaAC4vg52FvbW4HwzoUZgU3piAdJAssebC3mJp14f3mT6ESCuCioeW6nUacWqKaxp",
  "key10": "36rPFY1netyGekGevqAdfLjsehUcdi8NHY1u6SLPrAYbCSynAzpZjCrv8dNkPEymLcxznfgMdqrjB8om6btZume9",
  "key11": "3Qn3CVH1JwrS6ukbW1AWfzxYUsiMGBFkCTkm84PjFZifP84HsH1BJDTotf529saEKRnkx1ZsxoD6cWuHgyTaL6bq",
  "key12": "F3mMZNBS5QUBn4pM1gX3QJ4kfrtf8uh66HyJkBS5aHKNkED9cEc4e5HtcABdXBjtTbDCjnWGWKi9NMyTS1XTucA",
  "key13": "4L5wxLX4rtJTHKCis1EaqDUmkxuyeM55FJjbFdxJbhnwQS3KyQvwZhPAjedTFZbiNL1FRtvmgHsTxXffet1SCF5r",
  "key14": "5G7bbhkrVTC5kzfy4io4W5XTxaxpvnbMifR6EJZ8DDRdeTL4xt5DTRkdC3LwC4e5fa8DbdgF9BxHKFCKUy2ZiUmn",
  "key15": "2xSMDL7Ci84teBFYB68Jaj3N5EUa4MjagsHd8LfDuUmS9PZeennwdCWPRWQLjKvf1KL1BoDiJ2A5dWrESawhH5L1",
  "key16": "o3qNu7JWY6uE3izaDowLGj4CkBE3aWSwSj4YBbTtKn67Rp7pPwuPMfy4vvnBzwyGQ5sBKNCkiLsUCVfc2somY6Y",
  "key17": "3CpUdpKXcyE4erLJd4hMzvXb6oUbFkFmGSfwMpSL6y3GJNPLy2T1mJtaVp8ZP5N4RZMtW1hMbjigUJ5SXGDeeeib",
  "key18": "2TLJPfAdm4txBHfjQAYnoqqSNGPfyA7ZbWaMGHLX2a42arJ84HAiPTiXsAzRyvYFxVtKZbrpH5ht5893VvjW6ez6",
  "key19": "67NzLskBsE2dy2JyFJjTTr6JUx7wAvAJSZUvPXqw6godutovUnUk4uuiK2RULunfKYbA52TuK6s1XNzsYXoH3Svv",
  "key20": "4nvf999SMh3C7EwvmU81xVpYr9MLcyY5GWD9WTVqSFBkCmcBWaA6SfVKwExk7smUZ88Zq6bNESTLVpHsqWnrhUnN",
  "key21": "4i227ngiSZikx6d57BMExvK227obUM3qq8Mk7XeezMgUG5fntZoBNURs3oYrKJKFWwn798eFza7mrbX6rXi3JdYB",
  "key22": "5D5kuM69Pm19ic4dF7ZbJLEi4E5o3ro1ZyMoXx8LRqS5pzEu2qP4Hp6DPs7nmPFB1q5wRNKm17h5SB5cwNvZhWpt",
  "key23": "MEEdzwQwMiJk1cUwnPHTi9tBJgkiiCxxWr1MHynBtVmPbJXU4MppRoubX3J73HxNfQLSjYjHEgeoipDhNVeMHzN",
  "key24": "oR3TLkzqsmh2kBUFRz8KY1kaRHCgvoEADUEbte5Ks958ux8VJcRfrwHTqquzZkV99pe7SyABXpb8toftPhM3wqP",
  "key25": "2115VD1RG5vriovaAv84wTKFXfNfjWdmfhivMXS1wge3rBcke5Hv6QdjoJyo7U6nQcbMc3z4t5ufbQYUkWzmTw1W",
  "key26": "USKf2GfCjn2eUGQSFrHpdDTsWGpjB7XH6HdtnAoRgmQdKA9rL5rXVeZSvn5aRZ5D7bj3VSKxDHVgsHFx5RAq4SW",
  "key27": "26wL2frsicGhwcPbemTkBKBzN1mXwKAaqMDXDvb74Zx5oiADAEQy2goAcc46jPc7a8fSeJ7r4qBmyaK59moCEMhq",
  "key28": "27h28DnxGxGu1ifWRmzt9LdymZUpwzFPmJvnawZyhUeou1CHeuXWH2SkRHtTTqoYtCdiJKbHP3cuDv6vYSfe6knw",
  "key29": "3bDFU7hha34hLDwGMqxyWWRcQbq6W7FoFWYeuFS9saBAaPKrohBhEqnCAD57aSJuJJNuUHCmAPamADv14nyqFfma",
  "key30": "5zkmWXgvyZ9pak4TYkirkJbfHEMLnnHyCsXSuB3X8ik3shVCeGmxpFx11M75zEmKmFLro3hAJcs17kqbicHSsMej",
  "key31": "47A4NLh3FtHerCzbMWhxpozMdp4tVRGS4KRMz8KyTPBHRqpRoNjtsyB5HUtyU6roDumWXx9epfdUfLt57TJfeS8J",
  "key32": "PgFwWgC1Qeb6ayjPv2a48HaS8EDn5yzkTgKEV6m4nDgmipMrjaek71w4uznHnaiHJT7cC5SCbdLzA8BuoVsCuKY",
  "key33": "3A7eZSbSzCeLAPM8G4UoVx1RCn78CXMr8RM2ZcMqxpKV6qxR7HzdyqV129EGTSV2MggcbsnRGyQJCvnbY6j5kfnC",
  "key34": "3sHMkbr9EawmWEJgLkXHD96auw5CPMyPkPkTuzTivEc4yum9LSQQxtZ1xpxrf63jvJBF6ffSanX5f3CKxQQ49vS5",
  "key35": "5TXGtu5awPkV8neh97xRMbyzBcq8ouhM2qnAh42W41YokCioQRX8BhURFHA3wmfwZYS3d7cm6QGfvBHiEDz8s5gi",
  "key36": "5yQePJbpsQAziigDZzNno65HdFbYg6k51cjL3X22jUmYxqeTNPQqvXsJ5k7tXGVbue17GjeH8fa3TLmgMenh47T1",
  "key37": "2uB25e8raBivYUVK1HipYqhiPKxbn6kz2Mr4imvVS1FPdvBYBguUEKgCUfeh3PZ9vVGXCD8WEh41H6AFj6d8AhK3",
  "key38": "4YZ2dNd7QNd7v4Hhav81J3hSJHiZTX4ar7Ew51fkSGyxZ26JFDVKzXt5emdmjzdbwimxJPLivGHvaEmmMbmc88z6",
  "key39": "56TvFyuwfE9SZfzG5XbTE2FDJjoSFshCPJ3k6DRbKBwXRoUYd83CT5XcfcLBfXnGNMu8qSgBwKKofYtuaercXFh8",
  "key40": "28nb43UKUEirkvGF8wMsTqqeGkiQEVDQNqs3oE61Mh15XVNigcahJkUFQQ89CTcnLKQUPFwrwhyXTJmN5TWd4ZFf",
  "key41": "3GgvxV37q447JRgRFA52URaC8JKjQbBabswMthuSji3c1HWh34rypxzXwog3oMZGN1qS5VxCS3iQAszugs8QaAaS",
  "key42": "5zX1dm3SGgamAtqHQLh4u8UGmFkB31W6ch5r3e2LafqtiKMZ8htvKqeJwgjw8HFkSGtoZuYLmmtSAudDJxnhS83C",
  "key43": "2Axq9nEaC1AA2ZGrh6LWbgY7UCZExPL4Q62MKJEKE9xqDAHpcdL4qvxwfw7pEF4DnzodnN1Sb8L2GPevFN8YhxK4",
  "key44": "4tntvwcZHmUCUizeUgWaTWLwYWRgeXMaTHFe7EKFS8JBtuegrTBrnpVpsvtjZNAFkrNgMBnsajAru6EtnhEyvNH6"
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
