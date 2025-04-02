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
    "3uoVtUw4NPxYmayNrEfKuGAv1cHs8TpX9ghMrHQax2KsxWx67JrmsTFR1H9RbcPQcJB7Y58F91KGFViVVJCqNKnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XC5rwCyJ2uKscQsQ2THeAW7EQ8wx57VUum8skaEg1d8do56LHKyMaDMQNhgSGrQWE2PDH4VDckvvJY5kTNGUiWF",
  "key1": "4nTRyY3UE9zA5uK8vyuis1UNRiB86UdhpQ5eYzaE42ftkFXGxkmJQ53L6Uvk4aPCmqAERqiatkHHz5nh39oGnih7",
  "key2": "53SnSPHf34raGgRT2VR95X6oaqBesr5WvgXhkdn9UFyCQZLDQ3165Levjp84usp62968tfciPieMxHmWBmd7FTuw",
  "key3": "543qKWn5zJ8JPqZ9KSqDDpaevzXCuuuwKpyV5pwNCVT7iDysPj7zg1WsjjNTNWH8nfDNZpB9vyQUYiM5iEAtEsWW",
  "key4": "4S6bZbuFL1zSNiShfh2qUttk4PCXj4HVtNRSqv64qrtLPA8tX4HsHUuHKgeYaXMkkT9dKV3j7xZgeCfsEJJYLUcA",
  "key5": "3VWMeRxLKd9ZTv6PaTpykyzmgcLkP8cR6zgocNAVmk1cjYPotYcrVBDr6q4dUZ8UWqRrcmZC5nWwnX86WzwHK9qK",
  "key6": "h9FHBDP8nMX4AGei1qSnTaR31VXTvGrQsMoRWkzRtxdqxRHnepjm3KmRtwGPJUSjmqQtZTbHbqXgtJfLGb9qhLU",
  "key7": "3oP2h1cFmgFumFJPEf8YdgnYSJ1Fwa3UHsrwreQwxE7cyrRKGxRn1Ki5H8cwiRoPBKFtSCAjF7aqTvP4N6EDqnsc",
  "key8": "44VoKJucPXzH3CXATrLzhQVDHoEoo6cW6zQxr8JkofYPNvW5yTCqiMgBs2JUgWmizuogaM37e7LJJxotYdxdNvTL",
  "key9": "2A4uFEwZ5gAjVDWSdhPp5MP2x1swFGfkxQ5YdTkw8GB1afwviNT7CtT2dxVZVsf6Kq36juqNsN15RxdK3ePwYCCr",
  "key10": "4wsu6hQnGWTmAWGBtMVLiw43axZgmev1P1NmnMSacnkFEKwMqq3kpu4UcohwjtmPYRXWeVMfuGPcixq2euw2v82t",
  "key11": "477pP1SHG1aW1NdVmZUT3Mei1CYb6FYScf9bdJuxjzb61TaoRLpQPeupFvBG3y9Un2Dt1LDD27k9epJxvLJ6o7hN",
  "key12": "4NiYQzeBmnRfhf8A7eAkbxGGRcbMKMfYUnyuKbWVCeQHp9Uu5fbxYgVzhPX9BnBfJy6FTaUe8US6fLja1nyhGqJ",
  "key13": "5s64NmZH2UVz8TfuJBpsKS1n8qS1keurNhUARRFJoUwL6Vj1Ve9E2H5LwBYtwDsCFxZvahBiXSFDXyzw139uo9AF",
  "key14": "rDbr1TJWkqXZNTEeKTGt1NUR5TXv3Sw9Vxs1FoZ8aBiohG9BbVvKxPQHBWuj8oBwkT5YsjrXVUaPTiSgTm7bdSc",
  "key15": "NnTBmxedw7prnWmz8xaCKMruigALXKpzprVuiN1aiJaKB1MQW6eZ2A3Z9YUo8DGw9hH166q56X3Q8do2CN4KEAu",
  "key16": "2o9k5yBmvnFbM81DTLwqmMpQoXx2Dp1NBFBGhgxoVN5A2UPFphSXY7eZUmAmDAycdbChJjgZ4ENbcm36yRfoosRZ",
  "key17": "2kdsmtD8tWCJcQZSg9Gd5v4jEsUEAnUEaZd8y3CJkPSvudpNhj9MqHFYjfnk42AGukbczJ4rurjUTpDda2wrX4jh",
  "key18": "5Yc2iFeH4iCUXWpRTGFxiHi33DdW4VqQM21PFf3L7VUXM6jMJbqNn8scoeh1RHr64XuEwuRSkxCG5o4BBwyQeVUm",
  "key19": "2teRCuUW81Cdi2AprymYXwqhaPBk6ULHtp15AyzV7k2hmhvzTMs8iMCeFaxYvW5GAQqEKCrEACWoSafTHf98jCD2",
  "key20": "CsNQeiZB9rGemcMBew69ZN6W67wtjAK9kWY65CHWKm9GqD8PyWsxKWWFFYkobkXDpuTXXxAVHSCUqzuYBa3SbFU",
  "key21": "4Wjbgo4TYuMGe7jUCU6SAhxhBo31bPG7ztxWRhNt692ruk38G98BGogenLkWpiu7yvVpaVaiuRTPokoJPQSG4tM7",
  "key22": "3otP8XupXLQMRT8Fo63hBgsgNpi9TvBdU7ixWMkkkjCmg68k3etha9Btc3Xj37vd42aBpYZfiUf6CMGrZR2X3mXt",
  "key23": "39nXrHUCncRRSsdNbQc5pA9jd37YHTJ43gedhoChoyLv49HLR8K4v6vVNXJoKEb8xTjTwoQbyRnT5VUTvjjuHgNe",
  "key24": "527MZAm6LvU6T1DGy34scqDeDcsqjQaPURJZRueXpjJ23ocrs9APh2dwv71xos6Dhu18GvS1RfqpU5CpNfWxhzEt",
  "key25": "2pUwxuSqb9TBuSEBr7qLeU24xDXZzKbgSAye2Hbg9RPTwpdYYPHTuiXNMGqoroQJTnXFqY5PVXtjiRy6UtdFoJ2c",
  "key26": "62SGFw25KyoxnRwdm8fYK1rv5GD3SA4jY1jV3GX5VEPsCnSg9v5Yu3Egd2GCC8uoPeJV2LGvgs6CSHieQV5NMqvW",
  "key27": "vtSHVU8Af7PyVoqWPQPL9ye5Bd6qv7gvc6s2mN4JStZSkBWyNGtH7WjSPn9Jjq7LzEpxGUJranGYouiZC26teKu",
  "key28": "5J6nGfMHcVCJYW7jTVB4Y32e1GHf3zX5WWEfAAkdYnzmSGqCgFtXq4GeaX5iVKApJjp7p3ss8Sk3dAqquD3xqe91",
  "key29": "5CiHiY4WFg72N2tZTCbmSx9Xxk1Ssn35PD8kVq3CSzGSBt2uqzmXiTguCZ8JDc3q1c1V1anvSkNh29fv4i3hrPrT",
  "key30": "zacGSXtcuYxW25u6w3D8j7BrhSxm1wiEtKHSYA5NiJNiMgJ3V9mJtLoGp4fNMZXjP3hAdxPh4jEgyk5EZ5DwpCd",
  "key31": "44YfG88faynjAvPTQqyfzKc2zGspJXwxU415vEoZwMqZUEV7ZLxHECwTxK9bX5C9LYkedx3Hubr34MkFeBcrF1Pt",
  "key32": "3Pc5oxCvpUZWT7spjZh1skhRseTMcQM6AUoSqbddmZnkHiXFvatftWmjRsH3gi9MdR3JAiwHRz5wen7n5LemWxda",
  "key33": "5qsJXGtkE8yBFjok9P8ywy3JYYVFXiEvymH7qwP7RXpjg2Qv5jiDDoRVWzpPWAAu51paCgFaFW1ahgWhvDDX8tSv",
  "key34": "2NqWs3gUkTr4tmMiFE1nV22uLUEDY1CB2882V5599b9GgxhQVTArCUoJhgYjBcEfdFrTKJCTs2TyWyA7FZXJSj4x",
  "key35": "5L8aFaxBDLr5dapgbe1C794U8aKAaA1cZKAsgR3Wxhs8t7yeD72oZSN8m5CYtRdgnNMXQ32DWmhTLvz8JUVgZf7a",
  "key36": "5oEtKK497TnqQnXu7f7xALMpwgSSmZ3he2o1C9yQ1LuSYbkcv6bEU9ZBb7okErFkLd1WbugnBegbMvf49XDHbRm",
  "key37": "32NzCRRoXtEHrZdA5w5iGfSQkYKBWGVPps9ybL97wNoRVKg7NC4QBpqhjbpT6F26dF9mStVTGD1M1Siccn6QCGCG",
  "key38": "qM1jAgccqzre1iviMacncJGbsjeC5vYA7MeSvQfTTksTgPNRyVeFsJze2MCtCXmVeH2fhEvGKzsCnyR1WstoLem",
  "key39": "5NhcK9Hh2kwGT2YJzjSubyYnrb3imnmAUseeUd8oZj3XgRFQDzQXqA4UA5nTLYZBGtaY5WLYQ6HajVWDpz3K9RSk",
  "key40": "i1VRVWJQLa9jHcRWjVeJpUrQMgusWRQb39qBk8cSqncx6RnAvcKNv2x4MoMyv3FSrnqNy3WjVakGBxN3JhdbFM2",
  "key41": "5wpxq3t1HxCNX3sxoQpme4rtTjNbpXWdsZ4WwmdZW4EBiGhb3NV4wzzHNxjQPpsuGyeCCmRKJNPaBgBgiQjfsPx9",
  "key42": "59Mkji6FdNN34Bf8igg6fUtRBqLCXGf8qBmkgPL3ZCiF7EtTSU9kBLpopVWCmhnrUSVsGGQ3m13Gevi1BcurUyBF",
  "key43": "57iEXsUPonfSAo8wk5sK3SiWaYvXPtkJ2PVimXQaXPWbHK5qNX2kaKs12zSowr5pTmGSNeVdmwZdDGuLE16S8Ght",
  "key44": "3aCZEZg3qS8LH1je2Tqwtu5hyULMrcpSR3Z8QDEVfoXHkX4R1EnVuB4itCh6yzxgampSEt2qYaStoV5XWMiMH7zZ",
  "key45": "wE2Msj5qitcaC3FLyrRQLYM6cZXbCHXoiZ9Sr8wDQAWeJyLLm1GvnY7n6wCcjsJ6m8tNi4umnyR98TWJKmk7vpA",
  "key46": "22i42e8iFtTMBzLi1baM9ynJMkrJSr3NJDZnL7Dm44VrJbJmP5mW1XUkrKiRfoE8YHBsJWRQo6dqWAib9bDq2779",
  "key47": "3owX6D36HK1J9PqbMUiCHuNr6rPcktMA5Fz7HhU4choDz4kcmUAGe1Btt3dx4k5rB5St5MPgSDSBcr6Z9FoeDpWy"
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
