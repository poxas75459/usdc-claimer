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
    "2Db4NCcqk83R8xXrHNqxf11wY1oEVXXiYMWWSSZdYhTzeFBmFGb2pWiH1iP5xhfxz2Ws3DsiQGDQqLrrMB4LGcgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRRCCZSyEuSx18SaFuUoHE5219Wq4MzfTaG1MXpPkcBEJWLPwhG83ajGcfDmfnV3r7eEvUcnXKWyH2hXpYoguoo",
  "key1": "36fJt1XBhp7ucBzsYwbUi82VaZAPyn9C88u18awQr91dUGBANPJFpeWSMCVhDbwHTcaZ6uzuyZfZwTjAGp5moUSE",
  "key2": "3E5hJ6tjToDDg797GTj3f75wJV4LDoXTnxCqHZZcq8StqHxYC36GxLGiBNKJSRC2xMDon4puyLvqU6RRiY51fW6o",
  "key3": "36XL8hrJeeRpg4TiTWRmawpUeYbcgcWvfqgCd87Aopr8hmo3Jvf5FojuihA5t7ze1r7h4WbUhmGwQtQCH7c1ifw8",
  "key4": "4CZA8ALzzaysZ2feXgC9iruAiiBLKmVneUc76zzVKQ91WfWPQnpVJ4dCkhB2cWmSyNVTH7fPvVoPuaLGmgJcitmo",
  "key5": "2i2NS1rarxBZF8JKwEt7cDRraRTGeCggBniaFoKXAjytgb21UhNTAXAV4qmM2x4JMTAZodFgM9Vmr7NzT44NF8E4",
  "key6": "5bfVKFX5Ap94rgSMpQ1BhwnJXLbraBh8sAdnT9u45Rioaj7U52Eh8QUBsMqXWXA8mVp96uM9RsMnYYc6VzmVyGMg",
  "key7": "3eFPGLAzRzLxP4niUjTgjbno2YKmNYBuF5ZtpixJxc8XM2U4Yt6SAAfaR8ZgEJiXKeExYxdxeYfvBtGRHtPBpS8Z",
  "key8": "cxyU3dMGy88VFTmC2VfaAeVh6LGJeisBsJsyjdYsVT36naMpQp6UmQNdt6HvVbpVT5i2diVDRRzQtRhSY9NuH2S",
  "key9": "5PL6xoTH7YM4BddDxLcwy95XxcauPCv89BvH5oTijhoqqhxoQk2ir9AYGHX6QuWmL5qJW56UN1ELsuHAWEa4z3gy",
  "key10": "2uzz1zQRiorJPfcz1bZ6erox6852USL1AqcDxndnMbZfHaWfG1op5SeYsGenRZ11eyeboSUXEbC49MdBChrtsguA",
  "key11": "56pfRLHYHJfaojSoiM5cjiVm2s94Gc2vNaa8ZWBd5LfLC2h79o3PB3PF2oUfr5iwaQ2gimqhnPh6sWDxhAy5byQV",
  "key12": "5JrseNLVe7GzL4rahFzqEaVBvUE3HDstxwjxx23Ucqw6oqnCaFBBBZajrbAYW6NUDb5QcKNZq5C2bA5dMUunvrRN",
  "key13": "46gZuXrZNR4YGmtDtFwNPurHnt9DkDMJytLc7Zx19Sn1JjyeBxphLM8ELn5Y3xtFWZ7fHjJLNhsxdDUTgXHDffcL",
  "key14": "5n6qMQWDBVndqMZ3THFWazQq7ujvG24cKvC5SVYjHceTVL4VibraJ5opZumoSWNB3j43DE2JRh2qB4cBGGEdDuoB",
  "key15": "5nKqEzaqV5vLtkayf7n9C4bNUikGxuU978ob5hRpHEa92HV1YoaMB5jBGwqb6iTryRXMkEZzZHNg2BoX7zg9gTVi",
  "key16": "4v4HHoH8pK9QVuxPWkjdpvaj3NSAqenkynhGb5LqjzFp8382MuvNj3uX24aKsPVuLqbwYk6qTPJEbmCKMcEhsPSD",
  "key17": "vUyR44zoVLPEUSnwFXgAyf7v2vcceZ1QiLm8L5hEmRsLNWUVLxhUtfbkf1TnD7jRnYVF6T22bk3e33vFRzBgaaM",
  "key18": "FDyrcEeY2LFJzuz64TLDxNpHs1kG76RNB5Lf9sYQZygFAGCCWjNddDKN78zTRcg7r9YWnrNMQMyR6TyoYfSHJfb",
  "key19": "xXEhr6X2suG2Hz3aC4CeJvZUnatow8AQjoinZcVhZzSUwNbpiBxPtCXgkNVfoi5wkeWVWTPTdGFJhF8xKkXmg2R",
  "key20": "4z5Q1zE4LFUNyKnpLzJzU5JjZPGebxJr84hq16fVsLr5dqAx6cytuYaq2bScZvtbn7CzpuE19hj3ooYRadAScZvM",
  "key21": "518eziiqZR4MiHTpv2gkySrPWbwDEPGEGMYV5f1o2uZzGtCyFDCQ1GgUNx2ARbCtwUMxB4himPm1GC7wWFLui365",
  "key22": "2H3kYgePgEvfQfmqoDepWXzHEE4wR1a8fMSJCFWqr2t94LJvPXQDEyBBttzRwoPQMkk7wT4UwXgFZ2TDsYP7drZR",
  "key23": "5BZn8VBoPMHCfj6YANPYbktt3qEfPpcu9tweh6GSfhBumtEEe5fbwXS7d75THwRLp5n6LzXCats8kg4cj3jXQiJK",
  "key24": "2avzz7Vq1fCN6Qg7wjMs1DTufUnsivJjKWMJeDXQ3gz32G276Y33mFtNgx4zXXBQye4qsKCiWrszog92cywKLMo2",
  "key25": "4TanyKoB3P8pmw6PKCC6ksmtJ7BAgbiCA8Lx7SFMaSHvQDbVWqT53sZJHJLPpNTof9svZ73tFSzXVibCe5J15Suz",
  "key26": "3w4kYuGh6TB4Q9xEyhuHnycKYtciVi7km4v29n9xthv4PhDVVUvJ64W424SogsvZ5zMzR89RfRV3gzXVeToy7JR3",
  "key27": "QzmKUZMNzxk99oCySqAzEpcA5X5MsnrGapiJgi2mT6HGFhLab4GPfNQfThkEnAtiBHNY4yrKDwhY4YJia9oVyg9",
  "key28": "4AYCWLPraean8r3nGjETvLV6jfjJNuynVe2pMLEQG5SNGPaty4sE8q4dwwShtJNR646FaXUtPSSUXc1frbwZDH9k",
  "key29": "Vn26kbjdV9pkwVYHYB3nXtwVuNWRpvT65C6h9vk4ekr6mr7ZuWXESE5Uo9PHT9Wif6GnTBiEjtwBK4hhfuYQ4fm",
  "key30": "4UoE7wgW9aiZheFfCpPMJspsyeiVEFbqr1ctFkTjMxfvg5kDRuMzHutuGX8LFM7iZS3BQPcHHCA8a78BTsNj2cNg",
  "key31": "4cWpJPhLLRNsYpM2DadEhJo5drYkTSKqBkDjTs1EPrGPiRqdMLqJPDHYLas6i2oMJrbnmmVKzG7pDTGVfCrW4V3u",
  "key32": "FVsJymrzYe5mu6k7cqeUVtEGMRCojZMp44r2Lr2JWukARj2R7zdwNTKeP7NCExSRQkbyTCTTttdwwWUoSiFBhco",
  "key33": "5TwAi3PXXC7tvBHdV71XG3ouvXNfRy5aieX1o6X6AiVpfCJ7KQtkcJgftsCrE2MdPyNzbQDEotdC3qCHhBDpajGJ",
  "key34": "2EUrxBufjv9cPPK8YfPkpgHGf3DPooFC7s6BNERm8XAvgtDD5NXpbK3YHz2XMHnP86BTbY1osCTJwLdaR2tKT9es",
  "key35": "5pv8hSVGDu2kgsrJvTwoR1vAikxAmgrZ4HHa6W4sv8BVtyK7jkxuMrhzXpA5uAbAAnUgWxvqzVFw6hvYSwMkvivj",
  "key36": "3Xbx3Dm2ZdbR1UCe2wTExyszSvyY3pfXM5fUxsrc6UeSjd98tu96nqXpCVRjHMqGibh3au4BNAb4vp74SLTfSZGN",
  "key37": "2oU6SCneu5RSeHrsRJBC5Wp5yCh2nwncb1pNQDcUVAB92Sd1a5dGgzK9GgCppisAHCdDZsLCfwv3ds1bXvkgA2Mk",
  "key38": "3emDBWWAobKcu6Cpij49qKn2nkfrcVo5GXwoDzS96naY2rVMsrkFxferU7r8DzgWcduKuBvH9qhZS4ApVicws7Rk",
  "key39": "4roL2wX2kkaSn8vaE6x3iXi2FwAoAJ8KQgh4Hc9DeYssmCw89kYeLhghUEkboN7wuNEFngoyZMHFatXRyeQRAmhP",
  "key40": "nY3vHpeR6uGFiP565eBTKMzDkkYRdGHyoBjqJv8FgKyPuKpkwHTy6YSY3yBiFHBE8PKdkDJok5f1vKwLePFN7xi",
  "key41": "2GopsDm2cpP4mDw4NqknCQ5Vq6bNLjx7JdbDCyHj8ZBTtvS2M8jpV6TJtiJpif6U5UrV8Ft3jy3Fxx7gZPvF6QRM",
  "key42": "kg3rn9rfPV9E6vaEv5u1NLTKEDNfpNjZ12heYauhL7VyEjgAUYyEunNHK2k8m8rRJwMJNfFhKcnx92zio7Ej48H",
  "key43": "43avS3qGXdeDiojCzd4oadJTHD3SQZpXH83huWkxxLmN3nou3ocGMuCdE5rf1cPkmohNzQxmX9VsttyA2gL1jdU",
  "key44": "4nJFMHZQe42BtiwMtsAvodrywRdskeKcWE5ha1tYYZahjbSv7vX7g1pgVrRttDAo6rr9UmH1UDDcxAhejffvrAuA",
  "key45": "32HjiML8gXghkWjxjon8gPbmpdjermnW3ZPWN7vkxxNTgTrPVjYjTHsXd349m8Xd6c6ujsmrAcHTCthUKPX7if8t",
  "key46": "tKzzfGzV8cfXsgH6nC4o6B33L16tWK1R9Zg9ZqX45WL3DtscVmJz1huCzaFQh4U4fNQgwgutqoDV14XyzQf6w9f",
  "key47": "5wvk36kMZ2UDy4T8qYcbHEnJLgGGxUN9NrBhcufNEKwj5aNgB642igAYHws7QMHFNZMc7tE9cdfV13npu5oFgQcw",
  "key48": "4Pv21Jb1X896782c7H6Xi5juxW8zzobVCXTAzjSPf9ssciZQvQebcQSheB8QP2hWk2FTGQPfiqZ3wc1LBUTf2VUD"
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
