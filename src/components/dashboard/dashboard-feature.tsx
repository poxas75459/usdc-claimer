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
    "4PZiPA3WFL6itTKwdKLyUxtJWRaudvpoRt7wDatDdotGVcdsNi22PAMdunWZJaaWVbiYkT6bPC3CDoxybaA7c1FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdJUoa1QqXme76A8ggN2oXrDFhS3ZwZo5exwHrRJeuzXVCAZHUWHAb6Grt6Fgsoc4Jghsqd3v1Z8SKpZ5tfRc38",
  "key1": "2A676j6XwkgsygSkkqTpFHib9xiUhUbA1rsgQAu8FCpVhSDj8DZMb21td7ixe5YG8nw4zUACsQr5hjd4V5DKm9jz",
  "key2": "Cvr4QsRcUVw1US5QBi81N7tGTfLQGPg9QfgvaXHffqdCXiDFJdbEXDZbyj4yhGX3R3kiHSsD9wzAVcXMoMfeFV8",
  "key3": "498UdBp9ARnZVwxGL6S5kSNYqPxGJcY6CFArpx8HBnq4uEfRQa5Z7tjMAQ2WWe93i7YWD2sVnSsU3vjd4wh1eoVR",
  "key4": "4FWhnrkH79p4qcUcJ3YyKVCx8XdEMYtHPax84auh3yh3baLyd6pS5WoPuELJDc18rXGh2Yc52ZuM8mVs3yACG8sC",
  "key5": "32ggg4ngj3D7gXakmaSKPRZ6dwgzueJcSJopt3HPqVCieWf5gDjVCUXxmDfFN4cBPfGpHnSRVGCbRTcPduREkyU5",
  "key6": "55xbYvqfyxaKh7yrAUgfWYHqwZPZeSH11ZutVX7d7Qi557fxV2QVwQhk83mEbxHeg6ZbVsacNwXTEByDGfowocyw",
  "key7": "iZa2sqKxKoFrDKXQmTfFG8LNaos2vcasXD1zY71rotkDfx6PX7D5pQuiXAyCU81MtS7Fid8uvkRCt3UYLFqbs4p",
  "key8": "ePyidEEZUPFetNDCXGmgVnhK4rc1T2xaUhvnxUoSB5TmWxGWMxr4hMmNk1gs98WbN45zudzxu8VuKBuQDCxBrJH",
  "key9": "nkSt89BXMf95KHydqN2UWDDE96EbnUaBH9o3PnHenZhDqmxtFyLCKTuLzo9YshjSh8LNByAV66noFwtAuooCP1a",
  "key10": "2AZ8dFj1QPWuMVumy34b9Qgq3G9DN4TYqkThtz1TEQzsJZ6nWLFU9VHPj9ToYm9eCuNs9qymwZuHs26EDSamU4LZ",
  "key11": "5iKkdton1ZccqUCDeztEhcBfAaewkgGNDX9MG1RAJoJwDGwbRhznihFcsVtQzRpSzQhqkm885nwpCM3r6tP3NXNr",
  "key12": "4NuUwMGUDhwJiExVEGN18hDhh3ChE9gbWSEJA2NWTW7eunM58oA3taZ7ujBCebNx3s8cT3DkK4pR7Z3ghJmXGEhg",
  "key13": "55VVvYRd1ewia9o5LTmrdCLPWZjiGePe312Y1ZwFD8VXyXDd2M9gdYtnMa3o8M6mJ1GPVvkbKKuDsuE7YL2LWye6",
  "key14": "38DxGvZLxkuask8qupRP9gPVnAJcG87NJ3c9SWDNzjfn1CVLHCy6nFWc9UvsKUJeUFFzry4JMfQi3ecmpcwPr8t9",
  "key15": "5Z3H71ZV5WjRF9y9RqVL6iBW1fRu8d1cDPmccnFj57EWbKkUJjK5DeDx2uBpvcerEkqavQc7XkDRim1BcEvjQuX",
  "key16": "4zoTwkxiMaWsuYhhKG85Xe8HGnjzKMWrDtWwcHvyatsYrHtX3KhVs1GLTH8JfQK3QbexGPkuEYoWeQYymx66LmFm",
  "key17": "2aoUGT4yPT5JP3D21TmzmMvo5WPLCRyccu643wR6XPhT3H8K78AsyzkuZanaWR2eAcih7q2yz1YhR7K9okJpqNhW",
  "key18": "62tdd1WbY48izV4nhhQvYvnzgAAAagCLnPyzfzxjQUTqrm89igsKBSEqfBv9xaTy7TEC1gm2vbM9v7PRkF9GExZ5",
  "key19": "65tjwgurGx4eWEQwyPf91TVWnC3iBLNJUtMATwUkq2Bgk3Cv3e5KzC69Ujfgg71TUPybwWVGh9xzfMURHBwpMwQY",
  "key20": "2JeqkbaRvzCpqVKKo76Nq7xxwdGFfrZk9fVy9ALa5pD2Z2Ka8EShVJwZ2mNV8zVwqnXwXBKfPf91BdfRJ6QsbZYD",
  "key21": "5Xts1j16zE9ivAkDwoDbqidSxnZngcA2yTayV1xxXNF3QuoUWm6e14czBv1Qig2hUuosGKo4P2BbwA7ej4PLgcjs",
  "key22": "4jisWskEypRaYE1KDNnQQNUYHx6pxS1fqdoV4bkQeopUiuuf5MfBkeyLq6DxShvxL5PDYVLqmfoSHYjnNw3aFKNb",
  "key23": "5f5hV5T6Ynew97oFkH1K92BzE62BG3M3QrDGZBktuTzXdEM7mnrhUfJqWyuUyx1aVTudFLXufrHGcPPcXz6JMsQb",
  "key24": "3NHSDDn998dDPFazBrhTLpU9temjjTbcPMxWATutcP32cZ4F1SVe8fRna1LCEL3SpvJZF1SinZk1qRkCEFwTo22Y",
  "key25": "28YxKh2EewovwCXaCtwNYJvAQhB4UVqAGdJrs3aDo1EB4o6fvsd7V8WnmjEGHWkg9EVpQsZvTbtD38rGMni67364",
  "key26": "4f5V2DT2uVyx3Z5YGyEcCTiFLGGncXxnXKXTxCngspomuVePoJG2Bdbkx1j486kVYw9pS9v8aXrB7nVnNtqzzAXM",
  "key27": "44AiHhkZmpn84s7MwhXqdt7MMsBr5aCQowMzmawqkE8eFFFq1YNqHfX3uzzPFemMRmqmKRyZP42q4mqXMWyYsYcG",
  "key28": "2HoaD7GmozE6zZxVLM3ajWR2KtQzZpDcr4WxNQxDFqCWAZuBmopzfTzumVRgx7utybNEe6XnPkqFdxQif7oa8pM8",
  "key29": "5cr1KK4rx3LMZq1GJZycGDdmjHMZdSJ3Ph2CRWx2a9qLohEnW3rYxsNNGGAB8a9b4cguxFnqB3KnB3UatBgwn3JY",
  "key30": "4cQ12MJUT8nuShRpxu9yZqef7NC1EHDAaeN4wvdkDbB8rvHRnXaiwLSbZfgm7NYs5SHKxcDjTitrCVKoFJQHntDh",
  "key31": "4TAvPjsgvwYUJ35jPoCPUctLXzpnPntVADeiLTETzfQ7FxkpzEWfHbHjDz8pYpcJmkMqFSjxJjASLRmLaTQyfDsd",
  "key32": "4KjfuUVNMoGKQqNYiA6QB36TPcSyuctzTZ8xKSj3R6QprZ227KcAEEh9aMR9hvXZR3ARV95hS688SzVCzibKC7NZ",
  "key33": "4VGMctkbvQaGhr3VrSscfrHLAf3A8F7UtdsjQ6dNGGWgNJpJnt5Q33PAfDqVBTkATgQSxGFBRJDY5SaypwdCg4MB",
  "key34": "37oUCLACk4bmqnC7ZJvQU66ZEVHugDymFX63hjvdvZYmxHc6o8efx2FuQbAZvqxSjYeq2Dg5X5JqANB7wsCxjpkf",
  "key35": "56GFsoueSjGXN6tCVUqyifriTFm3ENr8c3SECYAhyiJmq8PQkLKTemmHg2MY8urrzrGrK48ckJaMRBK4D9HhbbsQ",
  "key36": "61EqrZfgCu6iUGSRKRXNmRuqDSr8PwcAEkPxdrCqEdRvnsjSfPdBGrppfF8CH2RuPvJHP9bhgibQSWWjxkhPFRXh",
  "key37": "5dhwqL7W8KJeDQE5gb47F4ky8nWPykhAv74SSmQhWfibXyPTvX5eNf7mmgeS4WFLhQhw4VqBLEeN7YUgdxQokjmU",
  "key38": "3t34DMzKHQNPv4ZtpdqSBscQrnPSrX5Bg45RfPkRMBGjKzFshaLGABd5BdvC3tuWYsvnRVkUBA3K4CXxHKt5QDFU",
  "key39": "96FsPcokkr3uT9mph3ex43MZj95TvvSQKmJDvgFE9VqDyKh9C7Nn5e8iFGc3id8M9obGwyTWjuDZQ4FQtuy8Rza",
  "key40": "zRcCCBiLB1cpCM5zsKxY97iVHn438VmD6kuoRsueCbFJfiiyqjVgJbDodMT24FTiUKzPb2Ls4mJf6RpiHmuXcmR",
  "key41": "2Bxt3q1JEP5LQuMNLbYqyi3ruYXcySq3JQ2oUYthTDcFgEWVNF2fGF49UcCYn1UrLMzRjL5UyrV4a643HqChDohk",
  "key42": "4EQM42oyxUCYdmoAnVPSaBoyovPfHQnNouRAmhfbsScw7FDaexdfQfToUUNHhiHSqCVMzW82nTQe4Hy652mrqFbQ",
  "key43": "2CBU69dbaLZcUyFxDB4GDmZZ2Whc9YLQoymcAWjKmbjkHYemSp34N42yQbpW27vWsHWqPTsTeDNiHvg9RbqbQCWR",
  "key44": "3htc3ZPqSYtf3sjPpHadkxX9cLpcygKMwar6xRHQoaycTAneZH3x7Mzs3eCQbxJu2HpAJHMpAgBhKXyqfWKydNXd",
  "key45": "2bevNfg65GMNwYmhPtJ2AJJZ431FCRQHRT7hQ7vPxD414sAyp69vdr3NLe2coeALFLFgJAm57214pWdN9uEokn1J",
  "key46": "4TqecMnUHESwqvbQHdgCHnMRLpHHpdzkNk9X2Qu1X61ZrNGyQJjmHDPzbcPaYjZJxd251NYCh9xMdqj5h5rm9ed5",
  "key47": "2Qskg842sdJkL8aDv6gZu2tWxyt2DVPneS91NXUeVWgR5ce8cAUyfw8WAe1ymF1xzmxTxra2ddRAad2MCS5LbbMC",
  "key48": "2dfDmMHaHwSwxnmxE4Rzk1HRqGYutqNzBwnGCyhQRoHNskf7jSdxLhv6pV4um1Nu67ENwjfBAB9mvCaoBhY2vCcG"
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
