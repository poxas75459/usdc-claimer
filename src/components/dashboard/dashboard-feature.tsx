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
    "59RgFdjMqWwWg1DoCqV69YbQpvXxmNQdg5iGkty7b3rRQkGwtCkEiFPxb77fnZH1sQFj4FtXtAShoDmaUTybFuR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v1KVuL65h8NugCHPytdEyjz79dJGR87KVETBnGPie3r5sagxKfGJSQLhgtr28cCvo1SRsFfniqpA2qGn8ZM2sUm",
  "key1": "4G4sdJZYFznfoYUK5fB9XTRJR79Aen61nbK831DnvXBnHLzT3d8fyoywbzQyqvuq2pUzfPRR9mK2gyGqKn536eS",
  "key2": "3J824bx1zEWT2jaB41gFUzoGArSqkj8eag8uCHUJW2ir9bmGemLzwmhzX9dynBDDack8zrXCzJwWADLPTHxtDnvC",
  "key3": "31gSSyXBW4Meij5UT6uoEuw8x4FEjTKe9btsqi1vGbihkFhpy3FyVR1E49M8EoHRv2mLkXacUZdxjREY8MTjDqe9",
  "key4": "Sw4qev2cksNASMhJDYqArWt4Q1qaPYibaG5uk6cDPyENnQo5V8jzhS9cgneib7Mj85brcTr4qLHFtcz886DNGbj",
  "key5": "2nVE8pzRiKX7YtitAaDoPxFwjuCCqeYwwmzWsLdbxxicVEkx185DiU88aLsTXTk8o69j3nAyGefaffabhCqg6bLw",
  "key6": "C3DEt6oLw75g35u4B8JQiw7HVyB8DnVZ4GbjsLdowhfgxXpS5DUPESJpFPkRXGffxUTwHYzyqg9GMjzuv6jUPH1",
  "key7": "5wPynZje29fZExYZ8qVvRNuk4gjzNobVY6dQX3yNXLctZfDAbgJGDM3CEhNCXEkE4N9fRW62QvBBwDRyLxG95Uxj",
  "key8": "7XAvWufCGacEwSbkEnC5vRQYzK78QRf4P4qt7dtnFNqhwhxa9j8fPSbSdFUDDAumYXBofdQaJe42DyYvk9LzySt",
  "key9": "t3YTPbyitMiMsXHRB9kLcWcvUf7zLrdon5bECN9Ag1KUNXBLDJgGaCMdB3uGkzCGeF5UZ5h2CDbG2ZM42o46WSE",
  "key10": "38FdJxF9vQJGayvHuv9mLT5vQSktZW5JiuEpggxeLYWW96kQnCLBwih5Dh4GAKH6HGiusVqVCN3FFaEpvjugHjAo",
  "key11": "3sVJQDH5nS2CueBdqMuJZk3MoNWEiMuLaGcJVjv7pfsZsMCaYajkU73L8saJqyevYFAegEu3Ljt9j31kBmHQz3FK",
  "key12": "2xaGf5fURANCDx6P2NtKRHPV4ZRCctzW9XtsNCC6uruNYi4DTB9SmJGr9eFaVLabuJeiWxmGgC8GqkbqEtbK4TCg",
  "key13": "54kREVpwovjsDzJfGKZVvBtiyviuMd57h3eeXermagqJfBeNe3rdwJ28uEHFgZ8JucoGf13eDsBpLh6QMWKz4Eqa",
  "key14": "Cz531Jzj5vonHYVx1z4ebBQ75AxEyHmLqqy7gv5ZXqh6iNBrwNhwwtTonDEpq6ZmrRvoEEyPEQj58J9sq8UHGXv",
  "key15": "4JJjNMNYNFQQrJEeetuWucfEAjBv1znQPDftTLitdFduEKt45gKdoqSEjU4rNoDoo9o1P4pmxcFFqSPwpWzBwmY9",
  "key16": "3cfibDwy8mShGvfGrdRwtt18Mbpc49ZFsWdQKN9VMRw4TXnvADJHfcMsQ8uCcQyTRGCQ7Zy6qpW3qYBbhJUARPxU",
  "key17": "3cdN7c4ztiUGmmwjoCz1eRxJc8PcJucPpdmfBKV6qmxm8TmDR32F1qgwZK7iEGDRyJcU6At9BJ2PHZGJ48Kyxkv",
  "key18": "hc6hN3Dhpk6DD12JsnhZ5yxBYi9EU2Fgn6w2JAPXqkdL8dvDcmmZrZD7c5CQPNuT3iddyYK4AFUNXrtevzj27kY",
  "key19": "iQWqd4jVJwJiwqt6nuN4JWqn5L6cGxc9Vr2XoH14Rp8jn2VKfu9rviQpRqRyo6LFb6PYnfQZMvoGYUAd2BEjbd7",
  "key20": "SDJqAqGFj5FUXNyr7wFQufWWqX7V52iSaBaj4ULqEixTA3GE8yD1c5NpTrnpZiaDqnhgeQT4NwcmprgTthzyz4M",
  "key21": "4ykd4sb5kNM2Lz7ZK32xy48Sre83fdgLfCrRy36owdzDTzhcDbu2uQY2EqtSdwb2jddX1oT45HDHRQyFDESJsjWN",
  "key22": "2aGqhfg2HY5sfgdDCFqAUVUnRL4SZ6xkjVywwzjm8oNfcxPAAzeAkQTCD3L6d64yzi9WfWBvb7qz6iKDguMs4Pv2",
  "key23": "39MJpB43bzUzWQTfJzVdPrNx3zNUQsAYTDEqpLVybiFDZBrhgnxUZSwvMaKDtb1uawBL8YFTWreUvXdhzcBYLg3X",
  "key24": "4dVAvmMh9KsykJczFF8xkgHXhnfYSAd7iUiYw4LBx4Ne94wQf6HbCavBBM4ENsBsuCv1Qbh4QhyvywkUVUEipQ83",
  "key25": "3NtfoCXrzEuQz7mmzo7owzvpLmxenFBSSkioXevfGP5R93SnyGspohLrgMtiQryfUfRLx8GKBBXV3MyVquQFQqGE",
  "key26": "2rLJTk7AeWMdTDaUT7E72PUMmk91725QFFRWH8wMpt2sB8JRAVnaZEuDvFxxeiiwzzx1cgcnh3V8xJyPtii2HfuB",
  "key27": "3ZxwJK3HFmRrv7eWbVfNKpjfvKfr57S546rqPPsoZg2kYk9SFtkvUh1wCHTpMVix2trYe63pPt5iT3qkZeD6Qg46",
  "key28": "21EEPCvyKaML2Yp9snR2k7r1RNqEjZ7ZJ7mdGxdj1UsBFY1LAVwH7qKqxYSfRVSjPZT4J6FpqA58SyDdiThe1g4k",
  "key29": "3MsMpGbNSw72n6m6qAjp3RiThjSKGKAoLYCnDTw649sGofm7Sa2yoVZtv3mEjXEayt7kN7TpLMqxhPCyHAPui3wv",
  "key30": "kLtXhzxMi15X5d35KrSdKjy79cALemGemt8XVRmcD2N8qY3hw3y23S4hHcpu9kZmat423REriLnnAqbihsuAkCu",
  "key31": "67mVSZNmPKg4coKv1DVyCL1ro6b4njKZF7pXh6CpCbjk9rRRDKUTPYwW4NBairsKFZATrhhhJVLUXF7DoaiwcmtS",
  "key32": "2dxoKKD7H1AmVNHajysMvzBkPNDacmnWkrDs8SSPd3xAJuQZS2p2ijAGGwov1HugcDZYbsaGLTjqD9xi8GCVHYJ4",
  "key33": "21Dtkih5wjfTedwJxD14StFJUZZeify6SkQY8UiSfv4TXp7eF9anJuf9PNui1BeNeDDTMtigpjR3iNQXGV3pbWdA",
  "key34": "2eTKJDzCGcq6jTLSFoYPRVpyvNdeqdcweYDs1GXTxQmAd8XdFd6PgFbKzwX4m7gJ7zkAGvN8ax12wu2hJXxfdCaB",
  "key35": "35o4psSrjSoSQtjw7L5YTrFwQwGUnv18Swc94ZWGk5st1HHWDmfXEcwULCjXRM3Ro4LCpkwA2MdkZa8ib1kaKVvh",
  "key36": "q16knhzSiPnRNWHLJ5HwRXdCgjPZuTt3BsTZQ4BTAjwASqMwA7qR7hDHVkrRUhEnnJYD5psahuCmMrh63kBCGcV",
  "key37": "38tCk7PsB1pg3SgbMEjn55hJZXmesjJ8v1PD4awfyiSRcfsJGEZe1E4btVBz2AwB8AMvSxNrb8CMTwJac54UgzR3",
  "key38": "4K5yypWsGWCfFDJetejFSBCMiWMUYPe12HAeX3paxPMpJNbMV6D7v3s6MKzt2yofzfQb9NEAnBLRrhjG62yXcpig",
  "key39": "5zBipGhMNxTXt52crtPEuFsgEFqGemb73DKJt36MpAiRT6mDyimAgEvAjWJJ3Zk663TXd4sZnrbPd4xnEVMCLXjB"
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
