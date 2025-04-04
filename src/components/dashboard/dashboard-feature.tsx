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
    "4qbmQ7QznfnuHQjeSq9hdgw4PHqJRQZcyJVRGdDwGEbno7t4Y6VMWXNbszm6ziGu6RQFnuEqokppFTEQ4qrFX9pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57xvq6B7ahqzGyMs7Q5iQuek8r6mRC5zkKbDg6u5WibSRHzgVpYLCaGuJjenaurrErxLFNFJqFN5VTynZfbKoofx",
  "key1": "wcipc9sRMG1K4YRVjWBt1aLFu3j7uGNbLpB9ARBWa2AGSrDtBRSmgewVdzDySatg8ShaoorGCV3UaohGPwk5Rst",
  "key2": "ovEYUb6qSVbisd9TeCmPyBGqqztDUGHBnatt7gmjxfTnUq3sviDJARpd9Ju9Ksd7pLYWRvUNvJ8GgrEdFo9Gyyp",
  "key3": "SF8NjZY861rej4aS4HCeh18EYgErQQismjdkhscJDMe2f2CTFpK7dUgCJh7ztEMFLAc5WTcmEWebLWN8u1X655Q",
  "key4": "uG6Vq46Z8XKdHPnbW5fUzXTPAsvQwhkFwkE5TfRBdRcL3kw7LJe2AdffNj8Df3wdCYP4zWkqWeNHE5Pv7g1tkaK",
  "key5": "54VSUK1PmLf1QausMnUfGLXbHsakemKj7R5DNUNeJvx9HS4iBv7tHRsSucxkVswMHDX69YhrE632f7tYhCEGJntQ",
  "key6": "5YL6q9wMkPgC8c9BDNAsF7PkPRBWwqXXsirL2qK3RezGhf8KD7QWWNKNz1EEkEWd4F12YiLP3KXnJu24X5t9TJbL",
  "key7": "2n29jHpP23erXr26UG8GMN96KWhHiocAzkXypRTFFM6Dz2YKrZ1nUBoqwfiWzqvF5oHThjfnH3r7FC3tMzYpRSQh",
  "key8": "39Y6DSkXjCcZeei51SryaR5yAiYb1ktdJuda5odQc7oMqvw3ytMhEUN7D78RAWR2Nzppsg244nSyaQd7JSaUYddh",
  "key9": "47sbman1hySG4cBk11iarTZxbBAo1LDwhi5KUB5bZDhNw8PT2C8xbe33f5diPbuv35XkomRgfqenBEcDYmUmnXN",
  "key10": "3d7HQHVYb9ZL8ETYNTuXvaX3LFJVegrgQjPk5bgwY8MHatf3LuB1eVt8eWGECsrZh91SnPD7ivuYrfRcfGTQnmxD",
  "key11": "3uFjBtKw9ZassVmHf2Cz2BPCc2xUjCNXdHNjx2JbhTTEoz1p9W4LXmxmAcfP3U1HfZmyrWrVMsej3Trwd2iLsXUr",
  "key12": "4wJCU9Paki45oZt6Ea4dc2W55JxNHFG24dbF3ZFqVERMpJtNKPhRvtacCGjnZ7LQxvdDBu3UhWtseCYu6w2iTWEb",
  "key13": "9KaF22CFKmoCaa6sUWEURyE6LSRPVpcntPuYestGfd1VLD1AC4oX8LGB6eAJLJD9Ttdxg9XPS3Bw7YYn715cV9U",
  "key14": "3JgSGLLWhNA6Hr5nX7c6W2bEAvP91bdC9wwwkvR3uQ5RJCGTMKYnFktU9UmbcpcfHvuuoYWSVri5Pur9GRqjWmix",
  "key15": "2mQHs8Y3PKkEKFosAhctMomie6sYhdCB6zdxZbJ59YSzgEQaSDtyGE3M42tJaJrp4AjaTdspMEwgUGck4MaijqKr",
  "key16": "bf9d3ZAQ7uLTvgNgaZ3gVLCHVmTbppbgAxDDtCkw1mCGbgesB8U7TYmzzrq19PcRRp88jESNw4xRyfzcPzRVGKd",
  "key17": "LhzZtsM3RwsbavgfEyciuGeigXZQDdAbvwPJsjWACvpjphkwYQZDXSrRq8cxi9mRKtGWvMRyR4yPUR9E9GUzBwt",
  "key18": "4YfTtzXyqDE56xyvfKzgpZT3fqWbCVEFQvV47pBKW8P8Rwia8hpM3wzscSkCKahPtssP5fDigMyAeRT6k7D22onH",
  "key19": "5JnUcT8QeDv6N3kxWYF3SvR7G7cRAozeTXhAYnKu1FuhWUJCB59pjdXW98b1WjVTniroSbSXRXL7HKV6dkf9De9M",
  "key20": "4b4dcEAGQ3dMXkhHGDPRTYcw8piUvR7h9VTHF3GRKHv8vNTnkS9nL7tW21MMGdZtqWd1AHthSpBaZd8ZahwGbn8v",
  "key21": "4LNufPYvuBCjeAP3xfVznmj243UbZxMAJrjhSCjQft2BTARWNJ12xaaf5L9NF3objWtxLmiN3Ei2kgk6EaSXea1X",
  "key22": "26uE8esZdeG27pHKCXheh1x5k5t82yygFdkiZhSzfDSG5Hcn5GLGZXBo7DGtAFmBWbikGAV24XXVyJq9DBFc3GGY",
  "key23": "2GPZy7qDEGtsnsUxMuyQ9se9K4zzwk7gxKfBuAd3t5KexNGMzdG995gMqqBshrpbEcugVu6VN9wTRRiZVfnsWTR4",
  "key24": "3zZ9s6EBnYUnir1qHBRthZKMLWEiMpdpVsdiN6EBrnUyw76UWWPbZHVYAnU3GxBjihsiqGAwy92EhLvurhs8unTD",
  "key25": "61eiSoV2ENjBQ7vmuYJnEAQnJs5XifZQUQigupJgzYbPmgFntcYLPydZ2h4Z7uEYQ1vqAKSi3pFN4SWY7PKHkR1e",
  "key26": "5etwdGRn2SjvRXYiHkNnvohjV8ZH2doEgJ7HWZYXbcVLr4X6LGbeZwbTsqs6Zus9RusiVYQ3nRhP6zYrHbcZwUDC",
  "key27": "3BJ4EvPFdhTvisFCVFGwfrksTEcoFVbmgL2dzJDaUXNyQvaFQ25ydSVCkxFUmNvP3QyCAZwKvYZTBaNmKZxwNxUm",
  "key28": "3BWkVtKqoMfSh1Qn3ELoxVYCccnR3NMBUmdyAEjkxvczwXek2oPZhsUd3c2SgSZmbKdJEm8ho4z9zsrzoSogYcF5",
  "key29": "5fMyGBuijndePfCEMxd8LbiaRv7PsUgKrSDZuiGretpM73Bjmz9uL6PE9UtWuYgDHNnwYz3WATsLdCFueZ15awRm",
  "key30": "CGPf637iHwYSGyRtVunDb7eSsxwjksEhQRpnX9QoJnZrymQhFY5h3jykuAVkCTK9D1vVBfxZvQ7VruxVRqUymQm",
  "key31": "jWXfb8xcSwZkvstaTTLMMmCDch5rAwJVgprEw8hA5LPPtYwiWhKsBornRazX8FPZPn4hFUQz6Bm863SmRBD9pMm",
  "key32": "2mX1SwdbhmrugtxPazWWurpT1UW25wtfJA6ycWSPVezivJtsiEe6YiX7xGqrmDhC8hT5nJY6RFTReP3D8RxQWftw",
  "key33": "tGrtWUpzAcAAsyxu71nL6bDrfP3thM97Pxtk1QAwwpD5ZAxfAcsEfaCYLgRurDyUeWcBv5iuMppkkEHyN1QCHxP",
  "key34": "5RH65sUNVasxT6r3yVPBjoKZi4Q7CwqPyZcyyXrTHDsq1AbhGJvYUS2KTjipAFRPuamWkMGZzhrEFWB1LGNEqZpa",
  "key35": "3UVeg5BsqbfPB2rVPQWb9zq776dyC4VwXvt6Fm7iVdc6QKaVPiFr4rkdpusBjC3b8nTgMbgg4y1NyRADQ8pssgFU",
  "key36": "kSo38dqJDLPrJnejLAeX7uTnBCN5S9XeofcYaDDPLkxuQSnsvq9AqBkvCGME8ewHkcWubwgyvo12o9wx1p9pTYd",
  "key37": "2zixU8rsTb2NsRiMd1TiVSUe8kYnhVq6puMgBEY7TXEWF11UDZqfJAw7SftiacKnzUEmyhspMUHWP2boss6TcCVu",
  "key38": "4sEmFxQCL67xP3QUC7dpojtAnesRXxYvGTzjnCQLhNF1j4ePPJfdDw6XGFeoR4UaUm2CQJajt1qmdA2SCatPkVyk",
  "key39": "3Cma1KmxsambPBabzEzNSWp2QvjnGmopLp9zuUVVpoWwho9uxYGdNbPrB4uVBFxc1DpW6YGbVnDJ5ofcNosHraPf",
  "key40": "4YgNgZJPgh48ay9esuRYqGpS7mBoMaRMNSebJPFCn9HCErQAgCUEdjuLK8hBpcBfsgUMZLDwQwKJ7Et93RJRojrR",
  "key41": "2VEXxC1UNEEwQuEwvV25LNSFmimjXBaRxRJTYgxy9Sy4hgqcBtjmwA1r5X7k5cQwRtNA5KGoTbBrULRjuZDpDbGw",
  "key42": "4YjV4ng6QuhELGwUW6h53SVvwmU7Yb6CbTpkySHSrWiyBCQ23mnJtPmgfRFhknZrzqKxm5RKDwF9CXazSCE4ph8o",
  "key43": "4WCNQUV62U2LtwAGNXV24o1P1CZmYTpri35T1FF7qXfTJynfgBUCbd6oLb9WyKATXGBPRiSdMe7g2L9tvbYd49JH",
  "key44": "5WPC6JgQSf9AegBFsUpsMYnAiuDUh19EJD2jwQLuxsWAHn2aGPoD9N6VDwHuYCozoULQZ4asS8rHbdw2LiFQ9HmA",
  "key45": "5MQ4HThwY1cRLheXH7cjZtk93k6rrL9pLCSgMWpoXyZTuobkYs5ukAph8NnVVZUTgaJeyF5ZqZBHM9p3WNsymyx",
  "key46": "pXwAtoL3f5eE9Hv7MM4wpBQ1yBpqriCHc1NEjfqKUqP1CCQHEeyMTRZJKexLyDNXu65vYAxSFhyjf8teTD7iRAY"
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
