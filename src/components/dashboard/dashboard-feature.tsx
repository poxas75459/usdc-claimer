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
    "2FxyaPagH4fhCr1oc7ei3ENkG5NcHyPcjcABwocwTqN8L3z1maX5SLYmquouiTHUGLtjshuBBfXZkAx9uyZD7RTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45FrG24rLV9vQVfwwae8C7m4jPn3hacJ4VpnQgGfWy6c1NohYmcwzKh7Vpyo76DFree1294ccKwAAspPVSGpsod4",
  "key1": "3kmSjuyWyrf6LN1X9uWcDb9LN1z9hTrFnmNTuAinezchdndmC41Z9UyuD7iwmriCqf4QNLm9j5WKyRRsGcq5JCmS",
  "key2": "4cQsC6ZJUwBJ4Rbo4a5WHsTDvchrdBUoYFVZvXtVD6azMPVh93smUXHkzouJqiCzW4B2PnLALL7KKBhbhhvekqeM",
  "key3": "4RPt1mvaDvywVNZd8ijR3cgJVcZbCjG5hKKXKfMFJfa7pKxyAaUJx6suW1Nj95LxoJNkdwjM5FQrX2tC5yoEkRV8",
  "key4": "2r9NbMpe16h9tgP4aF32HqEQB8q4U5h3FgRqERy34ydtQHeyCgy6RkzdcoKrxi1k5zEHx6kaxQ5dHofrddwKkBSz",
  "key5": "46u71bxD9YmcNJz44VEBtYfGsfKDXoQzYdjJoZLoCchvpRpQ1uoFVhNuKSRbYAkgZ7FDJkLqcbaqGK7c5AayrsAV",
  "key6": "9uwFpL7ad1sxXqmsCQVdSDj3ZxGpCCmq8yYfMXwmiX5ka3LJqk2g4f2mEbqbpxdyAaca5TruxLxuiMa3hZXHjR6",
  "key7": "y6G6W12kTfs7WgssnVGbWyZovWR2SkdtpVbrgviJdbxjciHfS1XzeckgpFQKZrkyESDZ9DRkK5UbsXC2FKEiDvH",
  "key8": "4CzWD3aoWKza1ig3gHzBN547nkdWv5t4bMPLk3GdqMTiAJ82DEQGcRoLveGm9CCaLzwCFhBUDUnMYHMUER1qnaqL",
  "key9": "4Rsmpk3mokf6y7YyPF1gDnFN6ot3njVCc4tYfHuSGMv28qA6cq7ZtSHmw4C7byyGvUFNEw4fJxPWrFmf9LDVuJEX",
  "key10": "3zwbeRpK5WQdkzMGPMdYxfvbetKpJEsCGAviAV35Ns4YCpZAVmarRdCsGXrGmBXcF9sYQwtvFbxWx7TsotwkM4uZ",
  "key11": "2HBEC3Gh9hgLgs5YV99nQNxmbbzHwcyAhCDcwsYhjSorq385aYLBmpHbjrTz4XyaYAbd9S7mMZxC16eCXfctGtoT",
  "key12": "5fQj5JRXx51szzKNoPd79YEacuwMf4Bn7edtaxyusu6241uP9WMMnHJPRGbX3Ghfw47w1krJCfTBSBmu8zZX46d2",
  "key13": "kvYgczxS4sbTd9Ah3sT6DP3yfP63paUvs9TTH1yH1h36me8vqwLQkjoMsJrNaKicveHVyNLxHV5PCTkmd9f8DRd",
  "key14": "2WJ29TjC7B6HcLdL49hwhGLPVmi8SeQXTkMUZMBaqP27VAmboH9ykY9fN3hS6zDdBrW36gMiHmFJzuBVKvrKhfLa",
  "key15": "2wjpd3d2McnJRiqHTCh9WH7dBsC3xqAMDC5jSErVRmzwf3pdtXhZSCqTb3upTF8h32hRKcsVHXBDiukB2qMvnDp7",
  "key16": "5KsuuyXJpx9r5qTNZ9bUmskgfM9p34Pcjs75JBmrcNs1soK8sQMpRS2URQhBMP4uYSbLdAwCZ4qkkHedVVSCWn9D",
  "key17": "4YgvBvv9ZY7bVoHHr9xvjKrTuDM5NjFH3a2q2JKfbiZt9CF1SiNWis2ey5VnTnUzEiYe4DGPpdf7hAWziA37fNh3",
  "key18": "5PopcPYEjUPQStEzavVYzyMHseSB5Ckc6nK2aqhy7hsovgTBveGVY8tUcLMttUbZ1EaRJvj1K5oycKhQMNVDove1",
  "key19": "56P9bM6ubSqeinXCguFQenH2p7bnBvAAKTwb91SEk2dd1SXfmZaDTLHSQUe1mhKNmrg9mjMNiXse1saRCJH8RFsR",
  "key20": "5B29SSjfcsERPNU3A8VHeinVaMyqdHMbj3sXecLb9LtjbQfr2MswF7Hmmy2UouKRWENFSATm1qUH1MQJMk3uZ9Y2",
  "key21": "SUKzvpXD5WUxiHJ5PLKzcerwPDakmqD3HjPXAgjfwYdgFBDna6ej4MZhKUsnUkoES5uSixSVc46M3ffAKGw4k8f",
  "key22": "59JuBwEyU5axMKW1BfH7hbjeDZKqwcRBnWD6C1jiVjhQM2s7xcL86AiHwNJgaCwBumeEice6wB1zmH4WoQzmzY7a",
  "key23": "qNB9YXdAxvZiH1a7WRYkKU5K2SYHrjuJbKqFX9sFS3FucRvqXEYZ5LTH7FxAvxpbPpyaWKVfUoW8ob9XpRJA38R",
  "key24": "3voKUn3ehC8tH8FvC8KP12RX9WucceP7npKEz6zyYR7CWaUY7AyEGdXfDp251QbvZJ7uYhDNVm2nUve1PoRGxk2N",
  "key25": "5XZnAoDp2sgCTtfQMRvZVki9EjWoLQvpG8HR4GZnPynnAw9dBTSiDCecorXMd4UoKMpr5LdiP3E1kQS3se1rrnnC",
  "key26": "4yZd7yBmZ4prMzLBz7d8zL6TCApzA9YFoGd7y1cA2PT3QTL1LYgqoL9g6ECAbUGBJZN7NTri6Z4vd5Nz7MEakNm1",
  "key27": "3LyZQynQHznsgrkho6cnrDsXoGQHrehzFWHDfYafBfsoVLhW6Ezo54jCK28BVaiZgWSETU7atmmp3oHtCoSsdcAv",
  "key28": "288EB47mypK6WZfZob8HgZH1Skc9mg4RupJQCayF7tC71MFZZsUQSFq3YswbdDWy2hzxHuBskHbKunHGrjXwkeiK",
  "key29": "5P8RY8HwEYSeC9gveXGE8GqV7XdRg45EAFYKmhCXPq5bGAPYEQFCPTpQxET954Y4F8C7NNzqcUTtbcQdpgLppPFj",
  "key30": "VdVmZfPqmTdb2oX1aWXxBAQkVgkUvJQqPUyyvYsihPLm5rspjoy6xBrUT965CqRMv8rmE7L1tzsyQf4StpTUbYv",
  "key31": "55UPVwUuhJRv2rCtZv4ophzvnw2HDg6rBcS8kxhJdsDoBxtSKWMtieWbEkDQAqj26gnnmUwkBoFHvCD9HeGRJvTr",
  "key32": "5WdNTRBmfCxP5QJMdTW5ihie8rPazQ1VHTHcmzm1PUtW78jtj1mnENcKheP15s2wgWZStKuzWhLKRRy22b7YRnTT",
  "key33": "2Kjfyo11fmoSyJ8U5CknxvXWpycJBZAeABPCBnnVxywGMaiTF6839kmVPcxdX9tU7aLZQMwujuZWg448y9MiDyBq",
  "key34": "3BkymtA97EfLGzvHQCW1LjGuzsk4sArcyfsKRX2XsCh4JRNC11FHdduvMGr8QYQJBMmahuCfCzuAph3AEd9fhTbB",
  "key35": "21EKdAPxcEhpyMExQe9d6SwAFcMenVFF6pPJKaCktXVUp85gbAEM5cxHWwdz7iNdUHpgZPJ9ULtokqzZ1MXzzNXm",
  "key36": "6e93Zn8suZwK4LzYCfDDqu3ZypG7qfbbkXntps1cAAUP5wtMY5LGy3vpP7HUp9VKJpHfKvmfNLHJ6So5E4wQbyc",
  "key37": "ae46fC4R7aHZ8p7CipX4LF9APt5LEeGAahtFy7cvnR3eGfpS3dj1TvRq54AA1TxvhkRM3Dtf77eGrnSXq8LgZai",
  "key38": "5K8QjvgarPQd3fktEFKbCHQkw3siHWQiic1xxYrnqca2KKsQQL2jvo5HTGrXNR7ZzLcRBXaeC1Eg4PHnxQ8MhzMC",
  "key39": "3oeoC33ETLZnjcj8MvndWXyQBPkN225gS3h5UpEpd5TxpT4NsZpiY6W6mwF3hMXMF96zCujSLSqQmxTnLXvotoZd",
  "key40": "3MBo5nsV6YJw74PZUhb88izaChnVJWSBP7E69a1BbuBETykbkESTCQiELN2HifFuhkC5uomQ8xiUe3HGpvDnss9U",
  "key41": "5FZwA1u81WXVcxKNUvJNY7fRrEUGwZJWoi3GcWngtXPmhRzmRACvVDjWXdMZ2NL84HjTNW6w5pAVN3AyxPWSHzwS"
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
