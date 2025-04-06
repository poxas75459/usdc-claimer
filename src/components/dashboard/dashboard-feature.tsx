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
    "4R66oi9boEDVFN3qEiz4uQqtchJiJfjhEkkcBRWCYPkihkGusCtqUtPMUjidMR8fF7cUyfgsS2iSPR5pEWArr54P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MQiKWux33K4vstBxqSphH1diRrEi7s9hY4YijsFqUJnB1Km2auG1vjfVoH5fDwcpBS3ehmmN9S7NXozcruwLNUr",
  "key1": "6F8KzN7mVDd1i6JQyqXyfXeQPEyg9U5zLE6NWmiaHs5SpYomheoyMXtZZKY223otpbSLXAi15yVYhMkPqtSNH36",
  "key2": "5tALyWq8gVEvdozjiCsxQkjB1pXarQLvgH8FVCwjw7N74tHhsUx4BHekRDsbbxkLxAS5kYK75swnPZQYLoGFiF9N",
  "key3": "wD4mptYTSftLszBDPG7PmVTh5FwMoPQhjCwC41fs7RcUC8GMYyDC5NABCwj4rfVqGKnRnmiMXrk5NnXZKah7oNA",
  "key4": "4v5RpJp6XmXbMCd8zx8L7DpMCJKjSTJGuzYiRH4McSWBxn8fgZ9GEbhywcrj8Qg8XnzAJv42SzQf6GBu7rRfiRMV",
  "key5": "4R8BswY3n6gXiAAyiCnUYA8KZ1gprt9JF2AEy1V8fKs9TaRsbqcnhhKdqyPun2nCb6ph5o6ADmovAV3WZ4ashnow",
  "key6": "3C93jiMoyGXFRVepy3MKqjEUpa4BJ61X86rSUV4BjKroGc2WEq7ViY4E4kSmWPmZAmHGjD3tz57t7rWEDC3H1V5c",
  "key7": "2hc6ctYCc36weAEK9xWwLxgoRgEPdPfVUUgFBak2gESmFd3bPdB3vCrPfMsfYcrpUdN2diPxmKrqZcHHpxkoVRz",
  "key8": "4hTyTFvt2oWVrocyfbUTcEWuDcmEwyAUuBZbpaBD4hY6S9M2bSX2HaWwKzvJbMcwFvf7BRrTmVuwNooCApuZLm7H",
  "key9": "3DZ4S4fm2Y7ZzZB8RKowZWHFvLLCTT5RRvStnrZk1M3H5PeAhMpMj7zeea49meENU9zbvnLSkyN4suyZbDrJD4Mr",
  "key10": "4xJfubmxu5HtyXL7qRaDthPSHJBEvUvCxsMbsTH9trQggki9xDc6C5D3ijEugk8xpNq8LvL4Gx6xY6q98bXdB6po",
  "key11": "42JwCQf8mzvLnRHgJKvZh6dGKaGc9HGY1rvxWeFXKgUABoXrAEdAToGqDsL3cyJ6WnBjknEhPw2USiHhd4hZXXLv",
  "key12": "5DGxm5zE4Gxxfj3g5ooTxUuaagwGKvedMtvevGVmhypsRhE7XxDjhW1xWwWSX4oJAm8iDCQt8vyKVbqQEKxLx8dY",
  "key13": "2vRkdyrhYYGwuVHiLKimNvEbaM7cTdBEfKv16AJ6rmqjPBwF246uZvDMtjtMhNbHZim3WqhAgb4ED3Gz2fs6VCYk",
  "key14": "5G9dvjP8t3HwyVZCc1p2kne9CoTFDbUSXCpEWpxKaXvB1jGJf37DGPshwFpQaNB6mtg6Rq4W22z8W4wduRSzg1g5",
  "key15": "5zaB5jeY8o28jq2edFiZYK67Jy8pgTX9bntvLAK7KmnQKB1oncU4uMU6Ek16GdoN1cYkHj8Ee53PpQPQLUZuWmmd",
  "key16": "4dpQPZwAijGwAKovu5a4rVsFBZLYFRg8tTep4Z1hX9fASPLMHVD4Qcooq2niLWmRz1PPwfPqkfTUQHZ9HKzAdoty",
  "key17": "UMgZ7Mkk48EFyBSMosKTRhuXLocMYWZwmW1H6BCjLkcKJtUYwKEoVGAsX3Uw4fc7GR3hvy5aKqtt9gqVBJgjkP9",
  "key18": "Kvv9eDwbN2zhV3QqYQ6pkCk98L2NCEHCkBFGZHVUqCB8npYjGqFMbE7X646VePfKr3dLLiyaLWVmNYQuqMPDmRs",
  "key19": "2XShEaqK2BVqMcHKu4arwXvnmMwXuaG7ygkv7R2VMg6GbzEfqX23cBuu7usRHei3YZ1SacovdtafnP2sVejR33eD",
  "key20": "5Dn9uKgctGivusCzD8WoVpLUSxVJCDdWBHRzX61MqUav42BSd547rJvo4FYV5TG23Pboc4j5x4omMNttsE3BXEu4",
  "key21": "4W7JQi5f2qvq7MipvxJHtbv78oqY6pSWHAyrewzzD1RczoPE2kc8Y9Ki5NgTUMdpmctGtZW2tYSpRWAQJYwfa5Pt",
  "key22": "9qasCvw2Y5Ry2RmcQaEs3VzZs2HmRxTHnbnGQQg315YTtj6GHn48ATaDoEgqAjRVubZpeArMfZyEJEAsg8jiA8K",
  "key23": "4mxk6jAsVLzFhLRyKJ16waQpYSJy2BBdR8YDvXXBbK7dNnraS4St4voxfsqxjVjvtnMqmhjQCsVVFQu86rCkYxDd",
  "key24": "4z91KNvMeb3BiVfxptyGR9MhkvZenpHUhC1EcC7Pz7bjNLirvwLHCLx6DLDcPh1vEPh1uycmMRXJRjk4baUk8FsY",
  "key25": "33vEZXvcYpuj6gK57rfvLB824CZU6CEKS3p6vv8RX6JugN4PgbdrwVenRfBA726FkDHEakCy7cnxmdKPBaiDwJ6M",
  "key26": "5xBEBQkY2rz9jRcCvzGcsJLoCnEoynQL77MrMNQi7Zcp8G6r83uTtCNjiug2byXQBMrZGU9NxAdC1usS9Jd21sUT",
  "key27": "5UkDK39bGHBy92WGb1nnqtGVsVSmBeBryj4Yz6bdPMmV7QWh95WhsAWVDwobYpLD98KzuTadL5vEseBazQgmyoLi",
  "key28": "3zR3GrZCLSXSK2o4twGmPYcEFM1GLqv2BfLtFLJvBVNVfUz1hfKZC1wzADnvrbtoSCT76eoX6QQ9mu4JG9Fue5Pm",
  "key29": "2Qiw6EPs8DoMRDppXdzsozwGJXfwviTiKtfVfVDsme2zpwjS4c4ZSgju2qE9WGX2VgphgWmP9GynEL6WXH97rm3C",
  "key30": "3juuaZnvZpbtKCq9nupNnPiJr3azSE6BjJzJHxX2S2TLG7y1xNcx2P9NtTSfRFawudyfnWAQVECKG34VR1zDLhTv",
  "key31": "2Tehzs6rJvKhj1NuV6T6R4Nmb9LZhuhhCZz3b9PjCu9HdV7ebV9NAjHKXKQ4e4GpwfPwJX9y4eeH3s8qNubgAgJB",
  "key32": "5XQZBmA5en2Qt3buRpM84JCgAHeFcQSYXFgfYBVN81FPyCE3WGeFamLsC54sQACHKU9JM1nVQyh8TtW4eNMmv5Tx",
  "key33": "3Aup4psGyzym2gMHZ2QRh4i5kAvoRN2xAFw42PqLbSYDF4maWJr6M8qerR3QY6BZ2C9S75WTS1fFp1ncZxyc778a",
  "key34": "5DXNYHWyPYViPt467UiMV8LeqEHjb1Ma24MqRrm98VTKoXCbZtqEcNTR2dhnTpYA2tTaNb8y9AmAqTyb92HaJjC9",
  "key35": "LLraA8eyiwZcRWvZ5jL6xF6oAJVjLEnynV158Nk7suiy5SQWPkgjdY5Wy2Rfp3FSonSzFMso3YnhAxm7XgKaRe3",
  "key36": "2XjzaQT1xvUFPfaEFMZBnbwQshP5VRW48tRdLpVBArGtf1X3QFAMKfQcx5FE4sNmV1RSH8GMWB7GZe6RD9r695bo",
  "key37": "4XyCZwLn8aWFsjnjKfw7FVGjKPayKHhQmCD4oaAYKVTak3Wq13tYt613dSoxvJc1TKgwhQvK9KzaXYZSPnUV5R92",
  "key38": "vcRTCT6zdrQ2kZ8x8EWZkumishc94W6rGyGcurFiSptnVWwqMAi1FRbK52RxehATpK2mfjyJjCEdfcYS53amRM1",
  "key39": "dRDNDis5xVk4fJFSsrJC6iPK9Ko4kgWy6vZJVyihEfGeiWiyScjAzgGnhdgEuZsb5ci5qUiv6PS5kUxDadDEF2c",
  "key40": "29rMkJPwzmA7KLBTN99FswTjoWZzjNTit2PsNDqL7Y4uULh6Sz5wSATR36zwHkYLHaTxZ1qmyqMfk9CayiT8ScAf",
  "key41": "3GEqLznPyyJF6axLCwvxgsgrFS4rEj3qz2NSPwLUy2CubKnHFecaAVVCj2YNnKUiLgzYmoqEj5vTu3t71QJPiHoY",
  "key42": "4B3zu5xqvG5vAwiYwTV5GipxcXX9Ymqt9aLX9ccY3QRE16t3PHqnPgBt8Na8bb2W82S2R48SHZ5EmB37d2q9JZ6R",
  "key43": "4jipEdAdFnMU4mXWacRRatuKRtA56qgdb8BfKqy97qAs61mbmypVJCUgoppqqwmkqp7cD7SzUWeZaJ328KrJ7JLh",
  "key44": "3sPc8RgkNP2RYAgLATNVDRZi2A1kEobNcPqh2gMZav1LHFZhh6vgpK1yhBGod432EvWQyUXjV6WyLCg97eQsYLhf",
  "key45": "3ncmtXrZfVLxYLu6hD5DbBKE17diRWSYF7fpAdmkdfWF5LL3YT6DrEPDQERW8RoqcGdc6jTenKbs9CQ4psp5WkYv",
  "key46": "4PVJs29AhjJEqSAuAnC3KbvDNnFLbxmZtWN6VbvEzCpm8dDFpBtWZupwxDYxPwAPEFcyna22dcWBMmK43dXZGGNN",
  "key47": "3h3LWi8dX3jKGz41LYQcmCLK59icLcuup8Crvn4T4d2SMTL73p79qcb6mnjpRifLianyNtF7V31PtgrMy1zPAM2U"
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
