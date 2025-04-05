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
    "37QDuAL5AQh88NwqGwTosjKJQeZfffwP91XVeyEz7L4tXQWhbQPS8wgi4pFCspo4SNdyZYffPSbyn1pPDXSKfGkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59X69ahRUk2BNFVAcJq5CicbqqSoZfSGhCwp2ftuQFAbckc9JYS56ZFgbf7HLjPcAWvFsktP1tFzdsuY8SCmWJUY",
  "key1": "9u3qBeH2nUptYDKhdum7jL2sPfnswRFGM5nGrE5iLEmWLmxHexKBJoubZaJYknV1yusBw2vZnaVEXfZtuBAxteT",
  "key2": "4ZbE9Y2uXTuvTAKkzNME2dnXeuDeKXZJeRA7tNUiqTGQ1Vokr4jHqMXnoPrR2NUafP2dyjxqT8b6gecHLMqw2u6c",
  "key3": "5qsHcfHptWyGV9HN4rRnSPb6VoF1cDox3NG3AdiNs6jRyqExkendnYCvag9XTnUyX2PiKwZsPbRtagS5FkzXDRWp",
  "key4": "rRueuGyx24hMxT8Wy3fVWjutNBETLpeJBgtfVVhaijzNYNfnbgWmWcii7mw9wVTu3JdGpHKqHNe1GA2WtcYwJ9N",
  "key5": "2gXCEvKMaASo3K2seQWMKmuw6BwvwCZzvtVcv5YLpxNDXbBhuj7oHztePp3AhZK5V3HzJugmndzXUPvChvKR7Kti",
  "key6": "5yrstnKn6xsBnxwSWne2QUBxam1BnoQgoSzDeQ3a3qTbrcxiYigcHE5YrCtWjzUkZLBxRg1HgHfXbPG5DMcVgwjb",
  "key7": "3ppZLDRBHodQ8vhV2eeRSVUVSTHr768hue731VdCGUF9GC9QhK7kcCagosu5tyx4MTGbMN3X7tSeUib72LJYzY1N",
  "key8": "4CXWpHxyruwRRt3jCnC9kBa9mJ7hmK1Mj5t97Xaffr3fxV21ZpxMk5dsKSwj9ET8ZDRPU4aCfCRg8s6jdsrX1RvQ",
  "key9": "44AJ7xuU9WzGrdcfhofcPwzUCgvDsxh8yvpV1pSCi3eDUcvWDsGDaWM2rkFj3Kj4n2XpJkBXtqJ2hdKQv73U17kx",
  "key10": "5y9GTJ33tSScYBDJN4mv1VQaA4dmjP221tWLR5FfHssDU5r1ELFLSjZFeKw9mJPwY8AJyC1RDbdp4jfCWNyjXCN1",
  "key11": "2kFuDT7ZMwC5MHmpQSr3DwozgrPQckrzY1q1jchgYfRHwQxmWLqXso82mEor8nTFHHj8dZGZkGzGbWVRanBSBHS7",
  "key12": "2QFkvC3rMziguBWw7b8FnVVxRERja8ZEYJFiUmnG2Gjh4nTrMYuWtRui1HaGNTttexk21xUzGAnwhifnnr9YefcV",
  "key13": "5KgNZPeQuEgFTQZVwBvkim8zyYNdmpT7KWChvM3gSRKdi3MLWV2P7W8XbUBLdp9aLtPWQcRegLWgNYwbq5iYB5o6",
  "key14": "2efNzv3NJkkvU3nQkTugugyRcEeLa1ZZ6fUBFz6JNMukv6ceMxPyviDJs9NSJeFNkmHLtGHRqmcjoj9hFHDnE7H7",
  "key15": "5v2RozHz8L3tcebJZpgHhs8jymGGPjGNxvS8kUiYNbrag9CWzvY8kGH9waSmyWZYB68MWfpzUhc7snLEMFDxKg2L",
  "key16": "3zNjFUs3ccmopj6aB6B6ECpYmmtsKVH6RBd1KrDJLrTLMc4tJzqJcpn2pdGnn51Wiyby1pvyJ52uiCYyjwApmNHf",
  "key17": "3T4NvdWf3LEfFHkeRDgSTd7aFoFSRZDVCurroST7r4Tvy2fmwNPUbBfVVNKLKjQts6yyEvbopVecBLJbBaAgD9Xg",
  "key18": "22g7MpNxEoDQaJbr7k15MkemCFZ8odjhCE7aU1JvoWTvJBC5LkjipaqW9B72d7NyTRegSG92bNP8T2ExBjAje9yY",
  "key19": "2uo51RH4vFhQZU53tm4muXWKbZpUheQuZxR8PW25rpoCdRsKXhgeJm7wz92gxvUJXi8gCoqfuPdSXyZcbaqqyTFP",
  "key20": "63SxsqvAEPsUkTmUD2QbyV3XjgGrsCeoMShaTo1NDo9T7KnjWoJ761UvxNoRAoU6M8DJCieMo15yniH1dXBhcMNY",
  "key21": "224EEdig9YTVodEiUSjE88GJV2PVvBsP6bGhsnrmzk33cNFBrVZRiXJUqP7nUbGCbs5WEwi4b44YFkWGF73VV3wu",
  "key22": "4JxZK79LDGLY19h4gYSwac9z8q23rV9eg4wWWYRuxihYSj9XcHsufZUdAd7ABYinrJinoktS6vyUuM2t4sXE49mq",
  "key23": "4MLPHCPPZKnTM1fySpvpE5RqPASjgYrqrdchoW72iJmZkW3RsHqXyCZBgRCRCGgzAJnnqaCMfviXZT9VFqhJn1Gf",
  "key24": "4AoNH9Y97TuaRdGYKspTUPSnnfr1aRkGTDyUE8K5qjExiRLPs2PP9WYorFxUEXuQyYZ6brnm96igpMNAc7d5ed2j",
  "key25": "3uNmv4mSM2Smb7ygCnvXNQkTkGEhYmHBag2cWbYLo1jhrQZf6GqTeFPkBctDvCaRX3UshDBhbuf8ChvMaHMcaGzx",
  "key26": "3s7apmCuJMZ9WYYctTxSheYjaGLvMR8QpCEtxUF1KSVovpY5zBytvdYcWr1ZTYDbV4VUcK8tjZBw5KeRWb8XJ6zW",
  "key27": "3rF3PyvpmUDuQauFQqdz26veMWJwJmcTHX9pVFyVTCd67m3ERY6ZvDwURNNjwbnrHZsTnfpuBEPmdfxNdhq816zB",
  "key28": "4EBKsmPQwCrnSADAsGap7XQyfUnxgLBuZA9YArsuEX3KCVk1wiUvkoqKHyhx2Zk22y6HXcB3SJGuF35UH4TBEyNY",
  "key29": "5NCwaKKAHGgQK76CbC4jPfKxGv1s29QBgyXhv1omQVZCg38N3kAx6Zyut4X9avoGr4VmWBh9Jonv2TiZRpnxEkHA",
  "key30": "55fo2KDBT2L3CdcJ2NNhNMzYaWcTnzM2Z6wTNWFh9xUJk8jyMsAEcxa1kT7Ed5rtwKgYDjsUf2WcoK12BbG7j9aB",
  "key31": "29QxLXG1yqLkskSDamPV9FzUZF6ZMmvo6zSuKX2gdBUyeUj3o28x6jQSiB7SGCRzs2USm8x3PbzGpAfiXPpZb3iP",
  "key32": "5aV7Lh7Bwtg8mEwt5f8RjknWpNbRQ7bDNLrD14R5sL9K3fpN2kKimkeuooM8XaRKovQBfhjYC6mQVbfJRUrm9nLT",
  "key33": "275gNGmXU28VU5HLCgt6fB9q8D5oQWTVpW8PuKPjjsQNRmddd22bkYqUh71SaJ6R413yAw9F5ZJq1HAjak3GRwVf",
  "key34": "67piBUagCjqbXe2n7mNQm1fFtgn6YPK8zMNHT8PvCkMrckKPq7vcEAVdwSQaSp9i7PFKw2Vnh9uQEwuAK336X17M",
  "key35": "8K4Xn9xfcwCZbuiPJFUq8k4qLhyUQtWNKGXgHYAZvCMurgQWRhQj65XNFVK7DhytbMAo5gURRPB1kAuavQW9tT3",
  "key36": "RAw6NBz6fzm55R2LxfSYFmX9UoHbKFrYj5zmGpQVRyyvxRTxDB4nVxD4bSK5RJvwnowFjcqhQTGnJw14JZf1Yok"
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
