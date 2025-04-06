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
    "5EXzn3cYQmGGhhfRS92XYXir5xvk1faJBMf2ehMo7qTv8WyEJPVap6UBZeoVe7GEbNufr18HqBF6TBZew6uQT1J5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fjbsCEFbJEZucHXYxQ4ua9VuDwGtVMSu1TvQZ651uJmTUAV46YPxr1LXE8PhtMcdEqev8HStY7g1Wf7jiDkiq49",
  "key1": "5mfFmo8ghtxuEfNgB1VULpJUDzaH37xM5B5sfRxndVL5v1k2nE33KmP5AZnvdmykLtthe3MfKBsVCLvReEyuWEAD",
  "key2": "jTQeiVfNXFMNYcZpFNcdfQWxDaWPwkaUtHx3Wtdbmuxi2uVB2vjpRoyzQ8RNJEyH5H3ctFGKP2pWBjjyjWtPyPs",
  "key3": "3LXw4WXf5xjDprz29x4pMa3nKjW9Sxq8iYoX3SWreJZJbuGj77kyN2q1YS81znt28yu1PH5rPgcav9VLJBSCMxtz",
  "key4": "3R8Aeht4mJmEQgciibPzYcBt4dra714Lq1YeXeCLkf71hvY7HnRzAbykBGuyf3imzjcMk29GZd3juaBGiLnv4nL4",
  "key5": "4gMfro7krWJsSrqqcg9X8h9aonu7hAq2LFPLJ6ps7QHEdwjrTEhSX1AXMuJhDLkRNgH1dq6VaLs7GnQM8riash3n",
  "key6": "4QwdRu5usKCNVwbDoEAFWFnDd3MePj5P8Mwv1RFVvjvga4zZbCy5ptywthwAhwcjmif524Mr9ixoJ5i87BwjSCtM",
  "key7": "4FhsaesShjQ9XJoeoQXeQAhpYPfXSppXphgzUmr42MhBwoVKdB7ppunN3CnHQjAv25cPyCi71tzShLqy1XEQsanZ",
  "key8": "4P1PbronPf7E9EDocLMnDDkN1WpFEE4LYTnLPjqwxbrmtFAzCbHdNBDKb1W1fWkAHQ28YmsCi7fn7bHVmU2KP2wL",
  "key9": "4tir2gydYwe9j3CH6ngRFgZp8TtzqxS76i5HTiYuzTgEqu6uQUzKpEeMowHbn1KrCwGKqNeMPPyjKpkyXnMoSUgn",
  "key10": "UUUcEx4RoixH8LsfqPvVzgiK2iaCCKAeobYkXgK7HD18nuMUGNxSXDeeauYg6kC9S3bie3kXsPGkv6TiAoX97XT",
  "key11": "5ASSpXez33o4iJoQFn6nztCdCGjeJq49n5yk9MPrfsubaeXg6Xv35te1mcveKQztST9mmkoAv2YrDDEyXdd847Kj",
  "key12": "5duHBxGnkMXJNGhHJDUra1KnkDwhvdnpcEj9Jvi6NzDzZVUCjiEfqTEdUtQnNYrzFHN3droPdDJ6YkLknJT5KGH9",
  "key13": "3oF28p7YQuEvSLefV7M7RKCCCZETCFwK3iu2Pb14tyXGB8Xds9WmVHG4NDYtXjEP53QF8eFeVEw81qgWjmNYeLBz",
  "key14": "3X6F2rYoKSmzEu1fEgtiRvzaAUgeHftvAr8xm8KvGPngTkESfdQUnDr4y5BnjV2Lagwp2nMvh8fNw347wM74DKck",
  "key15": "2uYx6WLvY7ZGAcbuvCzGVK1D5uf9iZvk8hnG9pXNjzPok2u2rUTsvd9cqqHARysPyxEZe7mQiTTgZGKrcDqhCrP9",
  "key16": "5JeuctWStsjRM1Czdecb6ZjLaABGoBXR5536u7T7jPPX27AtCSybmdnktzhLXanf1tzABR7fwHKsL2Mc3YEeup6e",
  "key17": "5tH94TCkLM8PMecJvaVtvgvLEgRgreGrJtmU5jqwtGNZKayZv7pwNpMSYydp4oChKSPCCwbekh2y3YLUjgiJtsHA",
  "key18": "5T2xvvzju9bDoHTkVik9JSjGusRfr2HDNHfYmzwU2edeSG7eWKA8X76WmdRf6gUvzohrzPcQt8LJrthR3CqcVtYM",
  "key19": "3MViLw8bz1oTtfv5ecyekcm1tBLwRcFusdbXVqZWFdtYx68JTkaJFY1PYhDB5DoM2hoFymuRRBMBXSQd2Rp7kAWJ",
  "key20": "429TR43esEEzhQmrP2Wrduqd8haXnZqErpPpkrzr13tMpR5Ec7Z3eCbRNcYsyDtWG2Ty4GdxMaUnRrJG19o2Qqgs",
  "key21": "5kiXGBDkW68cNSR8SwJBEibJVqzFiDbek9Qhuu1N38kvhPKD4hLtuvasKGoVJhLazgd8S9HB7vjsm8FmYeKTPYwi",
  "key22": "2F7MuJNyGcbaiBHoBygvQ5LWE2CLgFCcGttV3a9PSiaMvYrouERVHy4HGFJH2eXsKwBBjThwqgfH5WuxMVpgritd",
  "key23": "531AauJkqmsyQ3ABZmNWpcKkTGUNmH88FG9Q5GQZg2TwaAJcYdveb7jSb9GHhucfb9KSXakCFizkkCrVj6tZThHY",
  "key24": "5Qamp2uQjQT4d4jQAM4z69Vbo68XjNxmYi3vox2WzSjdRvryFcqSBvy88W2J42BPYPyMhwUBJtLsx7XaLGLptwj7",
  "key25": "4Z3ax7oauo2NuEtvE4hrUSuCHm3n1qaoyb3wb5MLTtMbApo7kDVaEeRPeGLqYsBSLKLHeoiPcNeoZVq2yxfCqhnC",
  "key26": "2K2TXLtSw4Y31u6954pJjH44oYyQnJg2EtyEraHNyaCUgD6tcPbxwybCiG3J2TZ9NRggGB7FLxsGbbWvwCm2wmqd",
  "key27": "51UUaRRzH6CRWSa5WfkD1DXbEFYomNGuoFGJCVeuX51VJ87ZwHbBpvymYkZp6rV4rW9tXJQ991nga6r3aKYSoiXy",
  "key28": "3BuEGTRNUHhYdhg5taysCmVh95pfnpmPXr5M8RH7Zp8Tw71FRacwdXG5tD5f2UjUJSnkLHCQZZgQm4UHfWCss4rT",
  "key29": "4LwDAwii6pmDqioPnGSq2N8xPU1kd5zemc2ZWUF1J422fxopLvUh9Bj6cJLsKeTFD3Yu3HMWHfiAMyZRPMFtKrts",
  "key30": "pVm8kU6UiXSJvSKA1QJtCtKn8fRvJyH91jQ3PzkyKPyCmGS929RmEJMLLhjN1zrhwrwKWhJWsYW4RSzmFLNFTKN",
  "key31": "3JFi89vzz7PnktPoK3qbpfHN7ExRM7WQp9NHArX9NNSZySUQd3FimEh63YCrDtCtKU2Wk7Bfgehs4uKe586Jgte3",
  "key32": "46pNuyEkPQhrgw9iMtxPiW8FWL75WLym1AkWG5mrNKuWAH1HYb5Z5duP1Ry5dvnf4eL4aFqyer2VhtgJQw7yN69w",
  "key33": "XSfUj8giKqoMWq1suDnPBTE8WPKr5V5VYLjXRVkt4PHtAdUbGJ3Q1BskcsXKTsjnLUSDdWswCh937g1R9Zs4wbn",
  "key34": "5FiUp53QNhDJZQhce6WAaW6SAEFkFqirjgggsB4qBTww3qfncRGkfwXyNqJZGDZmTMbguro8GWEXy6dnEAApvDXw",
  "key35": "76BksUaMu81C81zydpMz8JGieTKDmqnzk1dBDsX3nyytft8w6g6318vggi1bbauAa52AiW2eZHrMXoVNfkLZNUA",
  "key36": "3PKNo1nEMKG6GUVM8r4LpmJvBVkggWQVDFf87n1muGBUeRTxBKqzzDYpktJpC9honqyfx2cAqeAbNRPGvkFLnPT4",
  "key37": "29KudvNQdxxbxEKRub45JVNZDRB7RvSf5fepM5ohgUo5WHuekmNg9NmhtFq3vesuHUtWCcmUUwA59cYDxuWyUjMK",
  "key38": "4XR1rQTHm137eu6g9n4sB3mVB3oAyfYixVQ9gS6N286GpmmuqZmifQ1Ly221JJe796sX9TbTigpdkafMc4WHuiH4",
  "key39": "3dmTu1nfTaSJVPbrdNEPJPCZq2v3koZFGTFGwfN1FvPgub4CRVBib3UaX59KHFR3pxDx4DBrRru8YYt38Hj9zD6v",
  "key40": "5b613hoPd13Y4fgFzMSUmhmmbgH8B9MNrkPuZM4K9hrUtTSXNa2R4iy39b7d7SeR6CtD8aXcWuVGvmUxHcRApfqF",
  "key41": "59MMGDFFFQMLw7XvKksxvCCx9P2z1a738HA2vhdkVrKUjfdjfcWuRqGT3k1qzJUKtd4ojZ6icRrx4xXjZ2cEBaJZ",
  "key42": "SoYxMjUVWNUwRWcuGavvfdCCeb8nneY2LAf5hMkefNdUacoaR3g8AJw58T2KEXjktTjwLbqYfLczXKCf7kRzrMm",
  "key43": "5XTm4ab4sceitt1muXqRMi7bnHPme7tY3vHTArWsJTEFCtCndtH3t8TeMP2FwyEqKxZcdVik5XLh426iN5J6Hcj3",
  "key44": "5PQNzfb9hhWbkX8puimxmVXQSzBMCaSzawhXMYdaGVhhANVYpSxZy3iicpF2E8r1PKvT7JkfVnTiNDHumhBCvDVM",
  "key45": "BVtSFmbx8Q713FAdcKSBCmytxw2wAspVdh88LBH7yor3BJcTHBbwuv4c8FgTwA6Y1r2DQCt4hdd7gE148YUzaP8",
  "key46": "3CQ7mU9cZzdKm9z7MucYqgLE9pZEADWxnzinMeJyFtE12huUwSr7gas2kokjyFpVos54STTbfrmLCUEBWyUZGtWB",
  "key47": "44a3oYXggGM8h64qaVhKVzWwEBGP7cpLckLkFXy79ZTWsbZrkwZGNM9NDkU9CTHSu96Wr1jK6aGaQQHuHHwDpgmK",
  "key48": "2eCtuxJABTXwEVRHcsEkGn1RZtKtUyoTJE7z99cLeRu7XLqYwSvYPhhYCSDZgwmhnxBybywD2W4fRimNVmEfYiz6"
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
