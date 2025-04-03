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
    "NkieJkHGZYQXqbmzLB5epPnTYccp8nH1KVhkLVJ9wjWt5GeXZ6TtXrzWUbCajThQHdQf8s7NbxFGgkX2VZpyJeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mu9HbSTCRdEKyraMkCNNngMEpquo6GJikAGzFj2eNYSzidtp5P9PUDywvCM6KJhVtNgQSztJJmyHgYUjrny7YQv",
  "key1": "2SiTP3G6j3zFVcR5q1z5nt9QWMPobdwhcN7mF973bCy1AWS4tnnEzdmkfRXqNDwtmqsQCtAD1R4iFeYsSzhA9BuP",
  "key2": "2e7BxteDewuP9F128aSPUvoXhR5zdbZMNpxS5cXBZrQVfezxEzmTZ4QiEKTz3aCxcbxW8tuuYs1HN1MJ5PMGzgjE",
  "key3": "6Juod6DsbqFGdpchvtHWSQBJ8K5Tt6oyU7iLiQsh51UyS7pUXPioMzmfpiCkaPFJh4KGkVLq1aXPC26gDSzUrTq",
  "key4": "61h55fxyFe2wiTzoExyqMnNbMRf9pt2mzQpTQpGU9itW5ADDCU8dxz9ZWtC3jaAUsdUDiEVQBsAoW67PWYKj2Ejh",
  "key5": "Y2mvedAto7UuWAWFdRFk4qnevKcPUeKTB8X8Nwv9oEBWtWeKtFycShKa5noqgdG8hjVbqhSr3LmAm3mUEJxtudK",
  "key6": "4rZ3E2hthq3htT2q5SqVewAwHqt4JRG2z8SzayQCEi1HsAbse8MPEgozYfY4TmK3nebsYWpTaUReDuP3ip6Z9KwA",
  "key7": "3BQNhxxbaDL2X3y9WNNQBgYZFztBF27H5bVgsGKEqsnRrfYA7kM3N8mRRdZsp8Cuq27c3WXkCLwV3VGFyakE3hzB",
  "key8": "3ZJL4pr1DG9N8gvqv4HGiKYQSNSshreZVNPas41ApngTyPSZit38YTrzcFtDEDyMWpFErkQZ3pvAaP78AXCs1Z6z",
  "key9": "4FMpSpJwEyP1rGtWr4HzR43vJvnAwFs7pbN9Q5z7K7g2xwuy2cjAg3f6nYeiQXUR4sjp3s1KTYQksom5ZEUC411i",
  "key10": "2KYHoKWow81CmWRBv3yD1SB2Q1ko5QeULHFeoTAMTusUo3WnSnVpXed2PPyCi4w3cmRvq9Z4QrGdfLj1GyJMpZKf",
  "key11": "41NjoZqTr5qo6MsyhtKTxdddgk7oK4aXk49bETWJye3gGpUe7tbpv8k4bCRCvEPgJavh2cksf3YcyMeUtUcBmC9a",
  "key12": "3ar8fUPGxoHKhAewg1vLwHw26bUsv15e72RfKx2Fch2isErsVbVHV7HLdEMtBLshDFJs8VNhp8Pdx2Zc8Wcmw2Eg",
  "key13": "3iZBBJHAYAgiXF4jYFWLZE7Zwta7Uoxw8Ym67UopFBaiBkzQ3A7qALwyu3NZnwBewJuqHikxReeKok3vYmxe2RNH",
  "key14": "22Kz6CF6xTszSihWY6GCBzGqC7pRqA3FdKrhy1RKuGrfMnmpjHTcRMLnKV7228MjNbfpc8XBwb8wdiuuWDcoQszS",
  "key15": "2YADwqcikqsdqNeWWhBu4FcG2FD42Lvbbt3Z2r4t6HTxNHszrcZGoAcGNLH1kqezSbQPyQ2mJ7caKe8iGWi4HjEn",
  "key16": "4t2S6jkyFEHiSopQeit73aCS3cGCnFHuAvLaxLnwSfAECQBvv1r1QgvJDWm973v3nC5tarV2pAacLyLu7UpZmSbn",
  "key17": "4MboYKr7Nk2YzNgtLexYnpt5G57S5xt33Qwq7uQPixsRzTACnqfUVegFYXxq5NderqcSym4h4tSbUtghymna5gmc",
  "key18": "2YSm7PavcjHRTDQyj8US5yDwSkTRFEN14997Dvp8U26aKiwgW1rpgWEP8U7QSdudRLKccMbZcZ7NNpRJ2H3uF1WT",
  "key19": "5TKj54kv3NFnVSxkLAHDpUThYx6b7vBx7tgSN3raUvZuA3FJcFCceyUDgLoNn5F9VbsZfwp4rm9LK7kYYsTbUP4m",
  "key20": "4NJoRJNAcgJUqzn6653fHRk17T6FRwX69hv2YHujG7DrYXuLeJtYHMeYNNp85aAwgaDLCpCAQDQU3sE8UFMbrBPU",
  "key21": "28axjCbfUoBwz6ZHfLvwxptm3FLC22FsWubQutdgtGGEbeQvHgyRUu5btb93NkVTxywW5qG414qjEXFAhzBULLu4",
  "key22": "mGFnWGhPFHqaEiGvB5cRsP1mzyQekeW1GJEW2ikL7cC9a9LyEcQcueLmkaZhwWxdbgFC8ffnTiQGBo51Hj8TD7o",
  "key23": "dndJQ9u8oGziofuzBpqvYsj5Jj2Dq6BXNQCQcKMj6HxcRjMmwZzhzFFpwaHZBGMn9Ah4LhNU8agudLChGQbyH6m",
  "key24": "541V22QZM9faeYtn5qpTiZUpDvCsJkvoduE1dmzL6Sr1z62kkcGNNXkt154j4YrEDHEQx5arY6SUrR9999D6yogB",
  "key25": "4jcaP1JAoxQS4vkUrhuKiKyHeK4HbuBJqXnRYs8XWt4FHGmeebpvjKVqLBxiogzYBbotRqv4qu1N4aNVpzhPeSvc",
  "key26": "5aEM1hKT7Dm9VPCKYhbmithLL24S8Qbm6mJ7HaUkZQFxHthKeiq1aNGt6nhVsCTRGgaogaxXQ4ydm8VYRa3W6Uai",
  "key27": "5y9Hkf1iTBSkoyNUEBKXGgiWFdWk154x12rG5B4f9JVyJmJdU7znYBs9zKiqFXoqT1nsL4yvPYhW7GeEn2UJusUX",
  "key28": "3eev8DdsjebnSG3u3dgXGKeK6K8nnpG4e6JRJq6GhyHuo2Mh2kc49syCtc5P1LvvsLmQN8we7wb8ji1XHADBMQ7A",
  "key29": "3TLtTCYwQzA1WLqjX9TmzvCK4TNhDiJBs5Sk3dA3QhGp6VemniLC8WgPaYCd2j7FD34Abmk6JiwtppnJPhway3Pw",
  "key30": "krncFQETmK3YxWUnqcKJjZvwCWCRae3DG1gvjFpUqQW6WamMeAV826z9sAie1KyeTVnY2ACRB9C3t3PU712wQSA",
  "key31": "5PE9oZsq37Ap1q2TmhPgbz1V8H3CDgUav81nntqjXN8ZDVv4mtxRbshYFQeCbmtTZ1X6oGwjkYFVJsL88YWVX8H5",
  "key32": "2qRxGShnWT7p8cLhe6vcv8ZUSj3Tqfhh2aMWyumAjA7VsbB9wRvvykHqv9tG1gcFQdo12r4jJ4KuvZxvitRyY55t",
  "key33": "37FVt3rMnf7RYqVXYR7zEDAoPW3J6AdUjMsVFN59BNyQW5TM3Ap8yBQCBew1tHv9FcyXuyJBuspkAtkNTJciVkxZ",
  "key34": "3NaNPEQBWw7J8s5sNXxbDZPB4JbiqvpyMVC7EdaPh81R9UeAi4HXc2gK7Mn7bbub9q2TKHbh3LWsEU8Gx2yLYYpu",
  "key35": "CneWy3zbRrbC7ccTPZv68DjSBBgaVqdWQcm54Heso1drrkrPnzQVes6dqxsU26RYMrTcrw9UD9CGZrGhGRLzz58",
  "key36": "4SC3MDZVV6VDHKoRM1JXHF7if7VjNeXZBijR9xZo3g8XHCiRd2zMu82d5uPsoBE38QxCrou79FwWiDfxCYWeo4Es",
  "key37": "4YybYerGJTAJKNbnXSqFraWDw46iHxHmbLRmxU38GfNt3NdLewcvuKVDkctzyHWSWTnPv9KzB9BDt5P1vt6hLwxx",
  "key38": "hD9Yjau8eFntwHScPZU8McRGyJf9tTbzaDjEyswmTpowbKaouQhvRpqihD3aWSYNzxsmvmLV2YUg6AWMwpMcHNm",
  "key39": "3Jw2ixQHt3Cn6etYEJ5MrHKNuwErPBp2g3MPPJxxG7JLMF1Y6i2n1uYasn1mHT1RS45hruRXH2Pp1of7dNAtvSqg",
  "key40": "66KPMcyJyEsgHSFYsG85JZ7cAetPXMc8VRYUiGLzsBi51KzJeLzyApPw8PkXzwPaf8HZsK2H5vHJjqgukdZhJ2oZ",
  "key41": "34LLppw23BbT2ZszDAKsRPsA4gm81GzZV2ASENgS2CBMPy3ivckmf6q8R817CnDJs1q4PYj47q7LEGnb55d1sEEd",
  "key42": "ESqSiRVcAqeQTR7VS7mfJVQHBrwHk6Q7jHkoKqSHTNRD95uT6k3WeZpp6qDV6HQJpFUKVjPukmu9MTUSkSfFhxN",
  "key43": "4YByyirLCfKSdrAbafKAJZCJoL98byuv2ixeowsE2YKGPP6JL75BSPiaCAWyczUw1MqsNH2FEPNDLxV4U8PaAUUo",
  "key44": "255ocqemamipdEBn68QyKqEg6T8bbez1vKKk7p9wd827g8z8n8qsQegKUujY9A8mDipLcr5Kz6KC4Hu6K2ua7JC3",
  "key45": "4kSjMLtBmLh9FoaDah6jWUDHXeAumqrpu2W3PrxxrnvVKpdTibtGab9PPrdDDupyPT8PwbXeRGwT6Bj1BbLKStHz",
  "key46": "5vJjCFtsD8ozBVpUYu8Cx39nxBhkwJMPTuw6hrLxrvhqEFsckcoVzewEZgjERLsuLB4BKTXgaYF4WgiNcz1Ve1yA",
  "key47": "3ftsDczeWBoTsMHo3tNXVgpCAaHiugWQSdaH1jooNFoF4giNqbFYCL2DkYGz6CnsY1pLLNVM4SSzAS5NeBRqbJh5",
  "key48": "5xPKDkZydAihR4HTxQSKuh9zgF4QVvJsMKSRRDGG1CfXcoEfuMFXpcfDNzBMYUXebt7JzNHwTFURDH8nYKWCqbdG",
  "key49": "5azgk4w7HHXAYQLKTViEFiBnxVE8dF7jKLdXv7CuC1QW69PRMr7ZzKhfoubN8cz8Homy47DQuGYyEz5dY1DXD88r"
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
