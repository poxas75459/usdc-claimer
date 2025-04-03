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
    "286916HWMHk8bjjhqdrPE5Co3uRXXsiESWkbTKiJLVufNtYjhX1bBtMS6eJri9xKHuayuwpEj5YjWHESkscWhV5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLozMgERD92sc7WeStxJCug7N9VsU8mbW9insdZmK656MgB1SdWUDtCNyAG8kFcyrA3jHm93sAGKyyyySiCDqQU",
  "key1": "dP7ao54H9N2dz9AKsuuUe7xwXpPtHkXxh7jZGHWsJh4eNZ6F9mMDcUo6eCap1Wjf3fEoYX5rwvmB9Vr71JG6A47",
  "key2": "4io3xntvKp8WN6jvKsENu4qpHGTSU3mhKKEuJHt212ENNfnaxwYjJ7cGqiQQ7N1ivS62oQAQzhqp2yoVBHBkBoeG",
  "key3": "3uoWUwdm6G2PXsMnxfPgzeQ48UcHteC4aRmHjSUU33VKQczok2i52AdxnRCQRGHKPsmTeF2T28kfARAqMXjQQPJv",
  "key4": "oF5AMJcLipiSm1Kf4zzu6tvsYgokM3t9Pm8z6XhXhBVduvAXDuyQfyBHNFGcaKTBArgzmJZu8ozNBihWBFzdbXt",
  "key5": "r4cJQSMKmciUCMuwzW9EHXySU66A6HmGN85mPKdPzd63LV5Cu96o3ckd5Wbt1JBgeAnJhY2dbWZRJ9XGNH8KwjT",
  "key6": "2Z2eQfWqpr2ep9yKv3jmj15tVarVtmkfMzWQ8893JCGUsQo3542Gf81DXXVUH3V7hSpWaZar5Sh6BJqWaV8RiryV",
  "key7": "qT2deKDJNXVeJyMz4BCy7XCEKp7MEaXYMakaRBHFUFoaqi47EHp2mXEUX1QgaE87SpSUcUNCNujoXe3DddYqzb1",
  "key8": "3eFr5MsmPMpiw77c7wGhk13U9QCQEQJRt7JHVsRFBG79FsgFoEmCH3n1LodbMXgtz79wyjQununVNhErHq9ZY7rR",
  "key9": "2LqgrWeSCuPvJRnq831i22G8cbAYouo7feeVB4BEv94z1Toy3hzYPtGt7gQdPjxhhZkchVR87PsZsBGjefFmnwiw",
  "key10": "5DCrbc6kkhVAEdSNwEbnABvf3Wx8S2DZC6mjrxXxpWoN5sRVX9czV8Lkztvnjm9y9uyF5aFuRF2DWkqksfTqqEas",
  "key11": "2J5wcZLPznk2x2MAg1WRR31z2VRrsfZxrr5zuN1Q4t55QBqkwpbYpnKu4G1G7mid3pMqNYmT9yK4DDVhLVYHxPWb",
  "key12": "2eXksxoJzTEaYijq9U4EzRH7WkUt6QCdMtuogY5ttyB1VKjQsS3kNJ4HUcACYzEAMPuGMcADNy3RSreebULuNodj",
  "key13": "42HztEvJq9LLYf9GmtYFmY3urVoBaDXWZGMKtvd5w6x1sdCBxe4kfiEShXVKLBZLzmxXRKba4mFZ3nJJkswT3Vjq",
  "key14": "3i2LEJGaXj14uxUHri8nYyDntyoKZPpsYonUyCLLj6cnvp3HjFHTyPX2XpwBU9BqpKDrrdD8A5UWnDtRCai3dDCD",
  "key15": "3VmdugfYVDSGCvevYLUNmQzNhHapbbejV7fmvy4FEv6qyyuAHUqmDWdCSuoQzzbXoSUQuTj8ot8PK3b6YhvN37RF",
  "key16": "3JHegQZYPYeomRbFQjrhTceJKtkXhzQpvezeKy2gZuuJ72CQLb9w984jhoUDkhECLMQVZbQWCfJkB4XVw9gpQN1X",
  "key17": "123QzkNZgQPZGUrUkVQPC9tfH79e4eY74NU9276BjRCSyigXbPTAeXVkHcgY7Fc9Jgbk4Tkgt86QG216eY5hSa66",
  "key18": "nMRDYzQ1zkynXBd9g9WR2brWpnL7Qd9KF9mGs1kWo7vWfYtHJtWuMHxaYKgqQ1CQ9a4HKLPVezvBZqPTwGztiWx",
  "key19": "2ZgdqNNUGumw8JA9XdychZEiMLfeDR6vHaqXPoMDKo8h8sAEcDfgJP96KLQmTBeFP71D9B5iJeXYE2xTNcU4VRHB",
  "key20": "3gn6EhuK4oSkCfGzg44QURSXfz51joudodgpHaYqABJ7mdqkptYARMqpeT1Hp2a1bULWW2VFTpzYtZ7i53XLABtt",
  "key21": "5vtqvWkvhmGxvbAJeVXx9hQyvR5cf5motGrZvmgmhrGQ5iHKpnPG1zJMvTtEiTZhiJQj7b9hi3rETDe1KdHbB5zv",
  "key22": "3QSArJP1MhV1GvWfz67yMNvFiwSfTVcpb7ov81GSNwDWptWRcdbMyAgz82qKjLG4aTEuPLmjS8uffhTrn3WkSLeC",
  "key23": "2HE8jYwg1yfNhMYMh6rYTQp49CNGD5radMs9bznBDsQrmKH5TxH8gsmS2sK4zjV31LtVLiVXPQnnotfM9t5zhKpr",
  "key24": "2oTfPivncX2gTGoGLo8xzvSviHFEQMumd7rHJ5SsPoCGZRmuatxrttVDbXU8KurceDaZJLhgGJAfVt1ZzcPFxXQy",
  "key25": "5yWuXDeVmZQJvzKMTqXLdqLcFN5KsXSfAkLEHbapQN5KuFvhN44Si8egwR3NKNMZVp4AdT4XZivt1zEyvkiDb3Jz",
  "key26": "3kgSwvHR6rRfrQMoKLKjtchmLLjMcrohvyfcVqYqGPruHd4sjgSyvCaVyeDqtaXUpsmd4KRdKgsFurQc8NnztHF3",
  "key27": "N5Yu8z9WkrXLE3K5PveJK9S5XUa9kmqrXgf2F2H6RsbK1TkNqGQKUsQyZJQD7W98C9fsyKj7GXACPiFP5joYdUj",
  "key28": "5WNcgYvibZuKwq4CzY5EboMQ6WXDCvjb9z3AJ5m2v1iqPNpuZp16mZw7Hsbi8KhkG2NVnBC23SywKsizoNSDNLNc",
  "key29": "436fs4HwJqqBSxzzT6H3X7XjGGwqveJvG8KxdkE6MRejwF6tdv3pSC3NggStxpsyueFAea387xb3mzcCwydLkFHp",
  "key30": "2ptKzNBeQJ4Y8ksT37pv8NMK8zVEyzTABSSaUdoiZMcpukohPbReU5SueN1kjFDPCthxDruAD4rJEgms4c32yccV",
  "key31": "63V5p3xG3Szipm4p39XXYq9eLDkVxMrHcR6kNX2UqF7S7XSND19RJaVp7u8NpsvHA234v1txEFMPFhkUQpYduybE",
  "key32": "5F8pnw7yqhMomRdinLZGuGEUv7se3pofuB2S64ghJ2FDJxMRvoG58JM1eGRraCTH9FYeod8TWi7eZsenu8JvH6Jx",
  "key33": "4RJak7BoXwMxC6e2cwzKAFMeCDC2Xc6CHX2nBYdgiXkjhzhFqadLK2Fq6ZnXSupJPnsNYXKLkT2DSGp5H7aEKzWb",
  "key34": "4ywwQzZr9mcMaWq2H8WT4WyDQwX38TsaDG8PUauPaecrwRXAq9PBFomV7qBYVUUD3vZMNjUn6SwdTxTc9o7jv8WH",
  "key35": "2ckxkEXdv3RCepkB9XMekQgP8iWVBBHiXjxVDcUxXvjAhmBgCejcUo8aVj6TbHbYfsLkZPSFY6bz3KRkw4hiWsjP",
  "key36": "2T2Rrqud7F9rRaHmtec5McFGZE8S4QYnf3zmgxuCptz26VrT66wgMBLTCz2vSGZb7t3UagpcboWi6wkskAQzhs3y",
  "key37": "4XXPQ6E6a5eESr7jzzh6APaGSf6z2KJAi2Zok3dtSvuwPpNm6SN7asnmzCDcAf2wdbE9SirxmL2PDMPp4LUkT3aa",
  "key38": "4veqh9Jv6umxKnMz8cEmLJskEpK1XWMS74Q75xVh3yb8JkoubuKWHUbYyYdagkNsgccdbuxjaD7Jq3h7qqQ58TUv",
  "key39": "3g2opi73fmHuukhDHV5nakq8E4ySLS235eoPpqguDsW1x5FMXr6HoArwV2egzDPfCci7TUdSGDYYWSJgqqkkqBth",
  "key40": "z2NhGnVEAXjvdiTy2pbh8jnHqyBeC4D17MSCEcVz97aih4VFU1S9LpD8ajJmgfAtk8LDe8rCtCQpFtHXkFRekb4",
  "key41": "3MXEdeV1zRCEXx6E7pGa1dhFy3Lfaj33Voro5mHC7FWpfC1KYUDP5cBMftNzPak4Nm1CNqRxdnJP8QhMPigcmYqB",
  "key42": "4yvRuGnmfwS2vSWQQAUsJBzD6Jueo3uisUoV93gDKk7prEPmAgKQ3HBxrY7iKqYEWwCCkubLfG1CBB5PCpnBrdPu",
  "key43": "3sGAE39fzWVzfovqp6uMCGHXTjdXcDHacX5oAf9BcLVDk4LDMDnNyjrmn28FGDkurcvttXvZ4hcodAdu2Y3prQFs",
  "key44": "42CueMR3fm3tRGYgAgSDqrqKbAAadtHHihj4tYTVJianN1osv5c6UTLXAYD7qSUohKomoUpmiqevLyyRq56aNpEs",
  "key45": "66m9hAqjFS7axP9eni7AjwDLzkZv85r9oPCtQZTfyw9RbTZ2PCx1HzQsYow9rAq84mAXTD1RbLk3YQjYZBm5enej",
  "key46": "2U6zMNUXyQwLKNXUUhhaBn9My5nBsMf9LnvHAhPXA1H67Pmu1u2fr12Q1A7og5dhVot6f9JC63TjTcPnSqqM3x5Q",
  "key47": "4Z184MZWPLqwbde6KboDnxGZ3p2e9r58E4c1gig5GoYvB7phpkhUbcZ1cp9yLEVRbRdq9BMyAiy28RyRhpj4sJ89",
  "key48": "PM8nWjsM6TaCHQh9o1Vw65yJc3F6pzTohupMtPMDweTh83pxCwMW3gcpgV5EJCDkwXkjhXJB8ymDR7KWYHM6E3d"
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
