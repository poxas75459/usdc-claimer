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
    "41W9d6bncuHdpG1D6A6GRzdMQK64Zb8g3TSbCkwWPJVCs2Uu4ziq7iJwsWfoSA1LiaN6wPKSZqmGT1VUK9GqcDM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BhFndeVsMytFYRwGkXwPmvc1J7bw5arZxeStGYtJ2G35YFGvTLpuLADYpUvztKGVvBCStQKu1xnjun4EPiccUcT",
  "key1": "56qTx2JTGiRjh7QT43rJ2yia4c5rpXrwAViorEXoRpsPYEaVp4SYomcCZJPPGEJ4b36MPaF9NWgiSv8tdseJjAEu",
  "key2": "4hkM9DuEkq34KhxLwrLunSLRW6tNcwNahxwLdiLc4BKAzJdQxNHqvQPvboVTBk8YXyDcVB7WZ6HaoHThbek1Kto5",
  "key3": "45Tt9PVJ7Y6UFYc1B8PURtURpEPt4SCPtFNxhDpvVqmpKGoQuwoLSZouXLWU1GLdb2Wpp3arJTiNWTarJVyFHLQe",
  "key4": "FnwyzTCfbfiqTEH35V5b9WtmW5FPdGVC7MTrEYupafmibpnuD7oRDCDx7k83fynVvQefnYmAqG5gAc6FRPtdxtq",
  "key5": "6bqTHH6CJTYjukDGo37VhjLk6YHKvQp3qFCqn93DrFBDUAtZzGkvUb1qt2sM5FtVcrM6QDiErAtYRBGbhJFDgsf",
  "key6": "28jeqES5b6VszAKTVFhuXrVSuwuuqpJwLraSvHdmdEcyvQFGAgLXjFkiqKVErxy6WV9NrwR1j5M3rd8cmzQJuSCm",
  "key7": "2cSVQBq2ZayxFMTA6qqJ8mSt8N627tfvn2re1jaEjLBwTJwpRegrMvT3oSqeLtaJLASGhGCqpuEPaSSEXNfSSJtn",
  "key8": "5jyfaTV4anunfcfEiEJsyGC5v7GthTDpNftvtVhdH7FNGSA1F3gb3jcuRynAPwwpW6E81aopNgNQAoWwinDD4Hzt",
  "key9": "4Jdxmot86bCuFKGybqHEzayg4avYosZnhttJvMpfqgqzp1pNwWNL7Cfakna5pCmbXDh1ga9xnWojrVM4xKw43jvx",
  "key10": "28Gj8fUehAVwU6ZE4TDXLAKBAgpsNpuqjUsDkbp4J43RKYic3AZxhhfQEvjswqMtssEXs43gD8C2zCJLu19gFaKc",
  "key11": "4vySZELqBdUxa9LzCZccZxUMVXeKHt8DzzuwrBja5tH6h6zuW2fHySjREkGDMSsdb3VS4bZ2PuuWhN8iiJtP8qFr",
  "key12": "2uVaNnwz4b25zruPMBzgNmgmhrbDPLgJuw3EnpUkfpqLMcdJBJjZdGbPCpeLaQijh7Zw8FX6jD2Q5HnmDuw9Nuvn",
  "key13": "675EGMma4ib1Lyfo4ahHZ3Vr5r22BvyJspjBn7iNGshKCJBQW7nSTGm26X85wpXy818PL8DZBjkrMx9v4PkUJqkG",
  "key14": "45hMyz1pesTNVmwT8k5K42PHZQRwi7SM2MoU6jZNPC57uSy5Motn5Qzw1frhqDamLM27YiYLf1EBehnsUcZ2G41J",
  "key15": "2vcgEeyGBTPUKXh4HeYdmBMx9wvP7xG7oppaTF1R5EeLXutoArAgs3QdTHVGfjgpH33QmpPiVbm9zQKjw9BTEDBt",
  "key16": "dErnvHSgfgBLrR5738LJEUUsCvuDmk35jHuvsTtYgp3sNvaUigQ6Bqkksm28ESdt6UJtqAUvNLrTYUxVjSL6DP3",
  "key17": "3mSwUQzwAHxeGB9WAADeSi9wQ7h1phnksiALMWbhZFS34g7MAhUAwQj9TRSYWkvdEgXRCknvNYAnbAkTisewHyE3",
  "key18": "N9zjUCxVno4DfS5tV2w6ibFrgAwev2Gx6maMbft3Pva8VPek9qwHnxzNFZWLVBAcK9mm4XEVXZCJ9FsRiApqHVZ",
  "key19": "wBXGnWCHfLc24orR944vMQJV6GgMV7y6KURvw7aRJmvsin9eq9CLs38QxRqomHhXMveQ24LwJnptnqH7WqTshkv",
  "key20": "2c8Dfk6NyUdy1Nuj3YgBXxYb8PPPieUPhCycNFDAnqdonr6X2LrWdWRuyNzZFdXjwrgKTB88cFGDZyj4FWzvRYHB",
  "key21": "2xDHu51h1PWaSQsLRp9UCNd3u132kLPKPj1YEWQYZyzgZGnWZcRDcEBcc8MVGDLBMxtXD4yDWJMUC423upwT5yd2",
  "key22": "2DKyQfHS4yC4CaPdyt6cRrCqocPKuLyCUAj4Zn6bSaTSRd3386UBdBQbe2eVmBAa27ngEtR3szDGJGp7owLfdhge",
  "key23": "4efmZsFLzoiJSrvDoaDUVnJ7aMqnPErNe64n8D5ddf64UAh5rwcgT7FCe2FXN8CwKbxXqsqPbnLRZ7kDET8BcbCe",
  "key24": "2qLiHEr6RbA29V9h7kWFLWUUYBPg6uWHpfCGBCDcQUsNsHMLwZBz2NfcpHuik6GJhhHfxtD1WHuGZV2jWCTAsq5L",
  "key25": "4fZ59Z5vSCzn4ZcRHaF6jC7CcK73ADcbqkEmaynyNgLXXttNak6ahD1ajazbvE7bWpjS9HdSFKW8Jb1bWs7N6cza",
  "key26": "2dBWD5SFM8gZvqXmfg6HecwSgL9F4s3sC358cddXueZMPsGuYV7ekue5D5bNA37zjuSTnaS4WB5mtHHyAVyziXCR",
  "key27": "5WMvrhtYDPQW94UekKkUzADABrnRMxBB6Yavh1AE5FbHxgvKcPaySCHmqG38uzytwKFMRFVWjagxTREWTsSt7zaV",
  "key28": "WeBF8LbixoSczu6yrGK7tAM6iX9Ahee29J7XNS1ZqawuX1MX6whMNSnHxFFnUDszJVQvedUkB4Fvs528Bdaitvq",
  "key29": "SHtsR3AsJDhuH1TiWMMkSaExXWsEdKDZa9XyQtMi138pQJNGxZLVM5xkXwXscXfuSidoX3BYTCudWmYpq843waa",
  "key30": "2m6DGT7LRPDQoVwfoco3KDGCqq1iE1SNUK9vhRuomH9Zo16uUigSg3GepGuoBVUjqLGtT1m4jaK68GBKVuuibsbs",
  "key31": "4tcnUR3mufvs67rQTvcASzWAjW3AneeQMKCqMedn6EwStyNMsYcAgQpdC7ekgL7wAUBuN8WFRqMWAGnRLUDR6C5q",
  "key32": "etbMUgQRJf2nqjw5S4fuYViKFTJcLfguyV1oUVRNT9QhofeFb8n3r1j8zQ8RtpGq2JapcVmHx4pUb1BYAsgEPWR",
  "key33": "dC4WTrxMfo7ghzahGvpTJshje33nAkWySVF38UZXNjhnWUsNQiQdW462dzVGxjNhm5VUWuiZnxep2xRmgTdaA9H",
  "key34": "LMQ7JcX6QbpnsVdtqVfGR6MvfJRVN8UDFxe7C1JkJznVFUQ2tfbLc1SHvsooLQXfH5WqmzoWCu1XgBLzmWoGHRX",
  "key35": "4UsgpHb9dTDgpwPTb8fDvP9vZ78eycjVimxJQy7gpDsTEFaVRLxMpub5tnYSmX1cQySH1YsaSeY3keauvSYJcrao",
  "key36": "4HxpgUDora2cXBTPhiWuNyWybpfE1v86E7prSxzeK2DsznH4Q8kroW397E2jfbsLVXSGobURxeraoMo7V9Hscde2",
  "key37": "2SAMjzX53XJEjQuWb7ddDV5gNhXDBx71oQqZ3oqHxdZHSJmH4gdRjgXf4idB5hiPVbvcrEtfHbNxCkQFxTu9fEoX",
  "key38": "21U1HG3oe713vGToF8AoFT4NyCrzrmfANaHwzkBq5cdKREyx5YnKcneou68CmafFHqCtBavxBX36yLgd2yZRtuZa",
  "key39": "3rDH12SS8x64LdZBkRDeGrQS93spfPfjGGF6RxkD3xDSxzwAQfuTM6TtxD3h12JDM8tQq2SbLoH4Yk6RFtGQ5aU8",
  "key40": "2yamtXPXjSCFiDfgsffyjfwCtj8x9F3Gm6jP1q1KCReAnHnsUMUMUobJ4pXsVuCdXy6KYApcZ76qJSg57Fg1Erk6",
  "key41": "3ba3tKVsoLWxzyxhuUsiFYk48q96zYHbzDpZrqQdq9jahK3Fqt7poxbaMGdxFbnUFDCyS497FMw3Hnk4GTDkGvT3",
  "key42": "pL5NKNZqhgzMqtCgyN86wTg7JspHdoVSkRVWdPKJe6vG94GLQdXWm4ByrvPD4o2FPF6X3mQvrnXKZAYXso4JJUs",
  "key43": "2tU8rEvRe4a1prVubXvDNH9Q9xpmL5JYao71TGMmTFWcU2D1mt9TyRQDgpPB1g4xqK6ov4dde8LiyF4MoRm4F2no"
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
