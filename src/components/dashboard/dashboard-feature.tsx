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
    "4Dydjtowk7xbDp3GFmug3WmjbakiAaqoc12YxhY4CcSguhfMqYfGsj3x2KPms9YnhqunM27JWsysd6sSjfKgeKwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXa6e1PjK6SZPzBYW8WoE4oKBi5hNszSVtyPLVqf1VAaVLaBD5P5dkDmvcrcfqkmsTBEsjw33QXUzFCMTRDhVYC",
  "key1": "2LB4JZ9jJCBYzpzihY5C3HeAHBA9ThxwDEwddHxkYBKzECTLG1pBYUmrf6EnXscvuF2j6DvWbYE7UmBv6E2nGP8Q",
  "key2": "5Lk13p9tuJ22xxRLcVKfjxc1AV3F7jFrgybYtZoS5DSfsH63LCmwiEE98GRGD2C1VQc2PmyQ6vGdjNWFyPUNjgnv",
  "key3": "3sUvLi6BzCnET2rna4c1mCzpkmPgkAoiV5sFvc9jKM4EJefHM1ZQX9urJWdM1x8RrKDeaoS8C3seF6MmYhwR4ziw",
  "key4": "3LteXoKpT67Fn91er8GgyYQ7Ueu7HyCo4rcJW47qhj3AkcLJmWspyVahwaGPPDQQZqjT7bhrwK6pu9rw5fkEBnA2",
  "key5": "3hsFkCooMmqmCBfQwDkC2ZjiiAs8YxDVarfDh78gE3UVwBgi3Phu269Y8qZNkrGGCrQ9RPiwrGoDLqwE2e1aiSoj",
  "key6": "2NX15uih9jaVYF2XiJRZBRNEymwDA1TcgnanqxS7J4RYFhSmB9CnHecmQ7fx3qyANMRK3is4bPemqXm2STKMK5FU",
  "key7": "4onaQGWFrK3rtMeEZUcjapPytePWuffcNy31DXMohgGM5MDn5km6iDRvafYbxJ1rQgYphsK5VPpLWpFDdydbXDHT",
  "key8": "3hEQyka6span9hd29nz1BdrCzLWcuxAPtSNhssfQmMVQ9s4cBbU8QGNuHtWSVFLvC67sfa33TYcexpuSM1Ryw371",
  "key9": "4tgs27NF32ds4yGosUbf4CnWf5L66EbRGkgyv9idX7X67aZroTGV3PGkqLaEQELdE81pXeJy8sbbmiayHZaPhr94",
  "key10": "2ekdChufDeMcrRc9X8pYTsx2s6yZKNUmBti6c5AWnWT39vfRspjHq9hFZpBwoJHTW2VXtSE36sAa2ZodkV16mG1D",
  "key11": "WQ42dMPK2ekjb1CFygcGfqAQ5zjPucyKmKGwcfQX4RBiVfzZBdLG9hvw2QZxJj2CixdfsNQ8FKVZi37J2Cec9zv",
  "key12": "5ddx5sf3oCU6ej8QWLyFfLqw3xZDfi6PhgiHaoSdyQfCtoQw9jeyZDvo4pDsVrHMiw9HVhQY36KvBRoXAAbvzBez",
  "key13": "2gT525JA4Pi8VSFgymdzQCsooGpfyjnozNPxQdUTtmCz94D3oTTFE1NbN672mMzAyfKDxWET1iANpxiNxtC8TLYV",
  "key14": "3BgDDFP2frEvP7DK3nAagVsDRndreiRaFBtcu73zZHpf2Tgjo8cXdCbfHTbeHtzRHmDn6vYy42WTmiYSHExGZ6AJ",
  "key15": "2CVzNwDhFhQaAu42D1Muh7K2fq7YnFSAPCNVDHCsWPzGuZDjKnKx1CZHUjWTs3T9KnhoFJ8PJLyBzgghoaJdPpCa",
  "key16": "3uzdyKFPN89w9WGLo5HiH5NNHBFxjt6ZBaaBhjYgRhm2EHvY1tQGpc9xFEYkDUfPTwNEiFrVFSZorfWKipNJ2DN3",
  "key17": "3hRWZe4U9k83NNBS4QrUzUpGwesD7Bn5KrJEr4k9cL6fRiZwFJvwceFQ6SR5Aci84NhMn5yvgXYyE3qq6Q4agPDN",
  "key18": "3d57Qt81qEwcao4znkGdGrzC9Ln4UGpQ1wAfyknvMDwj4TBgLmwTFcqQcAFaXuZKEx71Ang1mX2Bo96kXGpuLiwQ",
  "key19": "4PEV9QSDUap1StJftojFJNAvQNKMqWMyDXecA9xHshN4HSopvc82NFGeV1boeKmKEcoKUH1i9rpDjawauv2Jjh1L",
  "key20": "2bbeaHSBwfPXpiPS4QorhWFxQ8bP3Dre9XGmqsAoVAg4U6tW9AVYHMxN7Ej5RRtFEQD3Ut29WDfBpVWA123tzSBg",
  "key21": "3WfMKP9wQc8pAe1VAbDTjmihrVoCYpB4T38NVtyhWPpVxPJW9ufqjyvG5pt7ZS4pLKFqCnZKRHnvDQHtgVDfqzs1",
  "key22": "2LmX4Agkvp4UHGJEgq9ynqrRvBLXSx3pK5JzWgJGdgCmECnK7kVD7HL6d6Yi5BrKgH5rUghcnRfQs4TfhaD2sdfN",
  "key23": "21p1LtbAhGqeswHwVGALb5j5YGTf7LUSNcCPR8P2c7U27K33BV28bAQpRpiRgSjWxHXy8wdmeibYjts86HePhjwW",
  "key24": "24mRYLfqNQpoQZVoQN4d5ULGhHrjEKyPaSEHPAUveZJdnU3z56iKnJEbGnv8utRjbvpfaK7gofhXcVX4BVxSDSK6",
  "key25": "2ccWLezGb4HM9AFeZF9TqgpLn61RTHeFotZaTzGPP6bsAk1Ch29GrX6AmnX93dqWSCS5iJ1K4327VrT5UZX7eydf",
  "key26": "foiGy1LH7xRRtRrr8K3E2SvVHyVUznF9obhMoLUzf3FtPkdEL21hm2b2VAqws3m52CYg5QRW9sJ3JoYECfNyLHE",
  "key27": "3CPgAW9aX7yThdXQYXdKdUbTknPGvBfYs7Q2j33QyS5wgwDo3Tn3sFGm5js5EVuqaymxbomgfGG8U1LmzkydjnrP",
  "key28": "2UEb5VchJUbi1nfagaHaypxQeVL9qrL1AysGfpQnbG88ziMEyhdAhDpDBZzniPPjms75oetD9dB5C7HEQU9EQEnM",
  "key29": "35E6V6GfEPoPBdg1Z6xyh79teeoPc7L7S7PoXpsrdDjop2DCUFRTsWWq1ZeEDQtM1j7wKincHmXNmUZJBBq89fQK",
  "key30": "5L7LHEa5HtR4JE4eDZYwwtV6ck7kZKBNyj2m8MwjguQaG3jPkkNw1mXPK5eWDTSN5GJbVAcnZ7dDnTCSvsP4rkdS",
  "key31": "3cHZoQMS4sSJF8Ja4vfmLqvsuAnC6EfkvZhdFn4m4uopvEQ8BgibZsmm35cwm3prZVWSN43TFshuVnajL3R5tH4o",
  "key32": "kgiRGsEWZUV9EaKLDSGkDfA8Wt2ZLZX9oq97rzordhHaXFCWsyWD5inbovSrMvRmNaVKmM4ittAmWMGeWHwiJMT",
  "key33": "Zsdd8PJQsf2fuPPdcZXFb3VtgCgYhh9mXngMZen5iGHj8mztbeiLCvNYqGBxW2ReVF3urTSnQwGWQNh2oBmNdqf",
  "key34": "39LYRyiycTHHirpj3jo3wKck1KcEzBj2y4GFMv9PJKX2RWGuJx1ZiDicJvqi4fNKyw2Qn8EcEtjdfVTHKNzSQN78",
  "key35": "67faVvVvHh7LBaWKKWAjFVhZRhiuQAKrFQruV826AzPutSXgmvKXg5xNeCXrb3X3tTYqeocGeWeoLaoEbzLFrtTH",
  "key36": "4sRQPctXrtZZg1wTpVf1k3FhtLvuW2crcmk9EC15moF3RcLdamuAZZimoMUa2sFy63RjTT372DR9bFrHuXnv95QQ",
  "key37": "5Tf5tVxkaWHzoubQqMptjMJ5y3xbhz8hWjWHM7QXKpzvsTzybNTXnUp2Pg13XgtiRkm2ZRyrthDFUVFWpqr6mgge",
  "key38": "7AhQsAn8WnaN791Ep2uVG9qRsLzTgZ1JRqUYyyFdNdmcri96caz5nh9vcDrYLanbJZHuWNogQRH5icFN3TtdjCt",
  "key39": "VYjscRs7tpXE62UTUptu2yDRu54nXuTcX4Vdm6Xm3i9GiFYpMFC7WKNGVcGyiTbLHhgrEst5zznQRq5sTueJYZC",
  "key40": "5TaqqCLHFKpWQYtd1CUY6QaYJakyPPraNSN7mS6eZNS8HEk3JVu3Su7Xtzcxne89HNa6aFFuNc6mUHUDxjNubmin",
  "key41": "2DHikbDuBNB9kgekNRGhQpT8VxwU42LQdSfAuQGSE3cUsd81AymE7vmgVVYYbS9yTgiVcf2FM2BmeJWtc7zCyKVR",
  "key42": "3Yn5zv9fbnUj7zju34EUt3rLB2yzz8Ds2c6oMTjjytydyEm17893TSHC1oFk1UVGNY94fmSnBhPYRARm4HqbTk5G",
  "key43": "2X9VhsujSU797tCGCbtAjK8aRYAp7mvPKQZ14TEFM1keEaC78Xr6ZQHTrHEmB2haDVGyig4aszyFrdvUveT9dVpD",
  "key44": "4ihRzn3KLM8GqUX1j4cgt1k1CysdD2id4dqwUAB3ANSFkmCP1foUL1FTd3fzSe7JDnfjiE4DqyddDNovwRGms5rE",
  "key45": "5EASaK23DRxRQF7B83oZvGRjZaNK2TdPTsCBJcQc37fVbwFj4DRFgMaNUGcvqEBBbtXjYyLNaSbv2GHujfNQoG9z",
  "key46": "2pRoghX6LssSVqvvDdht1UzhCnPRi3QjEXMSpY4WQyqEZ6AhprVC5ArqXMuuCgwqmfA72W5ZfQppj3FE15mvr71C",
  "key47": "3JEQCwkn57eMYcC6HUAyDJbVdgW9WH8bpnAkg34rgJqNHK1oMJq9ULqYLxrxYDnnRw18bf3YfswoupWoNn6Lk63M",
  "key48": "bmiEp3c7Q8EyysAgqfJ32SrHTtSTn1J8gsipRwuocUwiDyyPCFqB3dh3e2WVzb8Qnc1wEV4uoHjj1Wjaaehtnfc"
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
