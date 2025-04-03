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
    "4SRMfDJZ8AdoBPJVoEScu4KgLuaqpFWiSF2SMZ7cJWYeMQmJ9ou6iGFvnnpi3TPgoiNDQ433gfqTpvTV3LhT5WHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JzAP9d7wtckWo58uicuvoU9oFPg18EhDwM4wFagXZfbsSgBaVNqdU31L7Cq3uDHBFsW7DBeFp1YQ7iKRbsQ9nT4",
  "key1": "2PnzKtkNYdhoLLBqQnJmKZMqpisZHvipFyZfx4HG6dVEG6iD6tMawQRDXYd3WwpxufxSkhfK6gKqcyMJ2mXw1C53",
  "key2": "3r8npz7NYXWCkv2UtLRGTR7iyJLwkB1LhGW7Fktb7PkZNsHPByPnHz6co3PaLHhRKEkyNHxUoz3A9Xy58hfPxXAX",
  "key3": "4nxqLeLSKZp16PFB67eMhsf2HadMR5DA4xKAA4RWaRH9BMhhzxoZg4iiZsoJriCzNktxP6oVAPPBdgFRv3EfMSWG",
  "key4": "5pWYCmmfBxHeKJ35nxDzo5f62MBBr9gj4srbYZfR7q7mf6iPNGfgchXphwSsbnDf8jTzk6ewdjYMxvxD2ciWzkM4",
  "key5": "5iKi1oUpGPM4esHhm14Be8uMhjfvTonbSxjjCv4ka7ir8ufxiTqhgyPFSHthyUsjRUCHssBJCbwFYa5LfU1PRbmR",
  "key6": "5DtyWxCM9BKqELFwggAeukmADzYrYjKk3CazF6YvDvHUTUhuEFwZmYqaU7zgYRdAuh5mc7Ayn8h9KbX1mB2eSmXi",
  "key7": "4Q9ySGRYEZb5inDkwWNzr9whrPrzcAaYvdg423hwvPyjQZKWHHobRogGvkSVVwhKUr8XJRSzb5R85zhHBDtKpFxr",
  "key8": "537FycBasfE6JTZ4AwRwp8PeF22sYFhhkc6hVqGr5L1rE5ARBBRyWaiaZjzQQPz2fSRiUk7XBkaUvxKC3npBSyP6",
  "key9": "JTyGX12GEBeA7Q8vi6Xu1hbVYsYD51osDgN64HqPL6ormWLrYqKQuDDPU6bnNbbk2upZ8tNKVYoJCsXmptjmyn2",
  "key10": "5ef6HcqhLzm6wab48FPhp8mgCiuqCExx3c4tyvugEZz3grCwwUxauFM8nKWRNZWFV5SLNfmGgqDfUhX6nWJbwCMB",
  "key11": "2JrPa5UdMosardGAs1NoieeJmwDsgeMBmPHo5ZG8CQ2qEa8aV5PYaispZYk4rPMt1wNTuKWDZmdS6Ep8gGWmq31q",
  "key12": "MKu3QDpGgDWUH7MjFxoffUGN8eFGEs5LR6z25x3FuXzyVawN8bJPet6YS2R3ZgBPvKTpsibAdHkh5fnrb4trMks",
  "key13": "4XXxgXnb48TwpnmMqopJrwW2JXpRtrSiA3zKVeQ9SDrbJM8gJokmUzT1TjEr9jvLhSD7625yepUH4hEtytXobA6J",
  "key14": "49KxvtYkVUjbczCzCWacAMKGhaWqUZu4DAgaseQrqjUQvje4bHNVC8brLd9spWdUdBYKu4ngSoHB5BFX8TitkD3R",
  "key15": "4Pkh1LFNwJWHzGJtT9HpfvC2rWzYrFPcjibuS2W5NVSR5rHevAr8MWMt9t2dP7rSQ4k6Ww3PEnbPhadYDw6YNz4",
  "key16": "2jijXcxrXXsLjtRTAp2e6375xUWXaLFKedBgDxByFPrBpg5qnX7vkTTGMGocUegbx9xXr43VdXbT6br5txS2ekkN",
  "key17": "2m95qbFPddupRbeyDHT2afC8mcmkPoPDq8DNtqNrvZKahpQnGu4S91sFc5JxfdGmsS97w6impFREUDeuBWj52Q4z",
  "key18": "4zjRUrBP35ifdnPN56TDmt2PP4xQ8iwQ8STiNTiratD9fMPgH14rnak56N3p7v9yPGmKWzEPJMkq3vGrnbm1SiM",
  "key19": "2brpC2a89MMDBS2KjPTih1BCmpHaq62GRmeAcsxVzAwmfTxzEwLAmCYoW63DWe4rdYB5wSw5TBkuSyvj2vLkWKKt",
  "key20": "Qn1ASacgGuiz1GFxT7xqx1sTn5Gxf5fobnBxatbWmW6u2gZrKRhWpn4H8PQW6pxX2pytqecMTMYBUcF2rVbQowj",
  "key21": "SqVaKcHWdXMNtwh6Sx9fWR6ruyvh2HrmvBLxbAKfPawtwV1NpbdFzztKoAkd6vira7d8SdTq3WfDcoaXcCgjst5",
  "key22": "4Jm6t3hShUYdwgsiEjhnL2tse5McTddyJozTEmDwFoVUo6WmCV6Jq3ZSLPszqJ4hLcgRUbWteUeuCxiuYo8h1keL",
  "key23": "4WEUiUihaSBnahazfZdaNb9BJ98rhgPjfKS3CeAdna4ZF9YJj5ksfxUaiSAUyw1zAJ6j4TDKs55C7byCzhwR1vQM",
  "key24": "5m1bB77mEN1AgyErhg33aEX4v5pcV8scDsUckr3FYJ6GQFjLsFzJ82p2HRr1hsLyHwYBU6y5bzJtsA86roe6N6jr",
  "key25": "4ELhBsWb14j52AgNSf4L2b9YN37bT35FhkQPxPAaKkagRF3E1uJ5nQc4cDh7FVxkxRe3A74fASZyepaYkWaYC2eC",
  "key26": "21Agn4Vi2XxR13G2fArQeysNXBT5em49FbiPbuCqWHPfcwdLdYmhFHWkzFf6H9nJatvJK3Fpjb39nZ6z5UxhCTqb",
  "key27": "4NzkJSroXDhFjroj9Vz9V5Utr5S7Y7cSRncNAL5Zt1PeCBVDGKLqDDCmwvXQaqgL1iywN7keh78TtovQHWwWSejC",
  "key28": "4vwAPcwJmjEF9A4uQsUZsqumxrXBxc5pqcYgYvis7yihgDJiKBvDuaQi5TMXTA18mKELWPC1K9efCjD1y4dGMYfb",
  "key29": "23tM4NDvXR4v1sAAf1F6g5CoWREHVkxDxeXu2y53LH86CNwCtZBqUFAGszFpSVeV2aXUysB14boDcmW9czdk1Vyz",
  "key30": "5c32m8a3gZdzn83GhA1uNq3Mo85jgM2A3QwMNYmyQgcDSASrP1ARab3ymakhduTKvZUvUs6FV4qEgz81DShW7X2P",
  "key31": "5JXCwy8jhdE3UZkqzB5Cx27KudFLNZPRCrCQ4qe7Yt9Fk4neaLoPfHPgmEu8vXgrvmHj97BWi2x5CuqR6QVLEYit",
  "key32": "4AkiVLzxZechYkBJJtAnbdtfNqhEUzAMZ1bbvC8hSRP746xinFKXbae7BgSU1GSnXMTnN535P9DszCChwoHMgNbx",
  "key33": "4Z5SBwcwqYzKouQ9WbYAjbJs3SwaAZQLAdfCAumQyef1roFb8k9XUBitvDXKfioTWHDvuHqfbBn2BVPhfkmwMdeC",
  "key34": "4S9zvcqntesoyRnKDHLXR64NqjtFCqfnAWhpesVSpcet1vchAJCa4XhjfJkW5dj1nEy6kK42DgAGFNcZaBeAZYrb",
  "key35": "3XcHDxWSHyaUd9Lg9z8GsZhptZ3gsUqcsXCxzgp1PhJ2pw4sfFq8UzC9yHPgrLz8gN5dRpnCvx3EAdyTCrzKVsfb",
  "key36": "TXikYRx63USCPBFqEs9b8nZmn51DPZscfFbZH3Jpn9iXHhygjM2FxrEHHm8vAyxijcXihnMxsaDMQQdAady4pVm",
  "key37": "2Vqyo6z8bw8gzeLLPi72TM1f2ukRA1TodyiW6ZJYz2gXsQLyvgDignmarVGrL9DwSQ6MQrmdPZC5Ej7G5K96xBjp",
  "key38": "2HX2X9NTdbj5aSs9gBnxdYeTBKBiw65hPARpMRdYPYb94BuZw1oy248Zepzg75HQGndkJpWkwkeFv7XsytHAy6Ya",
  "key39": "57ytCMt2MAXmebbT7GEznc7few3kw2LosUfQHFA6tMyEAagUS7a5x3FhdRiLG8p7RwbCCLwLP1KUfU8C6J66VPy2",
  "key40": "4Cnz66wDYjjH5N9uZuzXpkrn9wTtPqdxVJcCN4zEpxWq9MQ5hZSa9wpX2PsEZU1VThD7KeQyTnaqemjK5Xi2LCfN",
  "key41": "55EZZMsLMe32Xfe6sbttxu612Eqfb81qG3yJLyyYZxAB85k9hGkqPjVpp4x5fpX85FkrCuc4TyvSckpwHCY1TbzX",
  "key42": "4VHoDW4bPZwd4FigCWBFhm5vYyXLXWomsbxKGWP5N3sg4wVDFo6vXTPnFC4AGZhBkwAfsarmSmHh5hKEtNJvgSHu",
  "key43": "3DiyNZCkR8HkPFMcTVtEYBFY7qfGZfqx4V39MFRME8KLkobQBYZbiu9TVAfpExcjRHLynW9ZQDmA5GAo4WZ1x5UC",
  "key44": "Miicqor5AjikSZnBygRDZn56hFD1px5n6roa58FBiMSbfwGxCrwboVerdtGAsd2uMgsPhbCi7RutueGCPCpfXsV"
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
