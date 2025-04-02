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
    "2jZttbir6sCrr6H4Ra897BTi6vPKVka5z1axKejiFfiiJ5hQPaGpcMUrMHYjCUJuHaN2NsDe46i3ufPLtmYH45KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mwpW8ZWV1mZF1sHGRon82b6kA6fzFpdGuTFUniHqtp1EsyMetiJgUyW4nZJYkcDdifWBa4ZJSurxG53WwZkEPwQ",
  "key1": "62W4xjYjnhAPbaaQ7E9RkdLJsHwYoJMHGSX1rScaAtVJj9f7zVfxLwz8kd7E3TMANnmecvXgfyPsQ6uaihf3QYaU",
  "key2": "z9DYFq9R9AxeMbCj683TBMRkjeSLR2wgTBUEAF1zXE5QGykcRann5RQLEpLEwuSAMdR2tEhmA88xTH2NGwNfTzF",
  "key3": "5JxgH7pW2rDpgoD9htJUCn8h5NH1Fx7WSDvg4noiPS9aux1Df6w8nZvR8sBVPAs9H9afyxDKcuMsyHfkQF2Hr2Ws",
  "key4": "Q1heB7iFtSx5BzVzsZ1ujaryD84EV3inLtR8EnuDMR56eKkWMjJJxYqdBTUUXG38qNCdRizvTmFANuFQKzmwZH3",
  "key5": "5hSQzJJ5Rc25xF2f1VjBK62Fc7MifqizyfKSwyF8N9GL73qgvKFq2XNuCiJ3m7e2hy7LHcGbBpcdN7338EbneXaU",
  "key6": "4hBCrrz3gpD7NCp1FDSa21byZZH9VDiMAGucrKWb5ufL4uTRjNG3qPatHD4RKWCAzYDfSdXNNVdbcc4GRz6a4yqt",
  "key7": "4ppT4ak1prNRfmJWSV7tnxHaS7pvV5fcnrZphK2TZTup5yNR5Datnmm2JTZa5BidhascyopGY7C1VT7txJvgPwFZ",
  "key8": "5eVJLDiDq3UJH7n2SmuFnDciWybepXmFb2CHrGvFA6N9R3taJaPGZuSwwtUtauvG2DMHuuLVcFiqnEkLEUHmj8Eu",
  "key9": "2C36hwBnxGCue5yK5T2KLmxyxKXpWaLBXoYRnVKdaNDYWcJCHSJuzp7YsedHuJ5WsFmr5p9f7G4ZczosQGWQLphs",
  "key10": "24mJMEV2EcTz2nf8hCJbpPbjdFyCvpM5xeZPZA8Y4sM5s4KBZhr5tx1Vc8a1JQr4vLgLAHTqEwabAW8PoGdaSAZj",
  "key11": "2AiHb4r6o2Jzvcs2acDDWZvD38kniEjdPTnDFxuNAvTiu7w2E5qtEgGMAp4fARXXse29YE7SoyKcoufwmi1FfYK8",
  "key12": "p1daHfc2VJ9yNtVRg2yF4NZhkBZRTEHpGkjcwzzfk7pKi81DSQDwbb89p2VvAE1UF1WqEtQ4UjVuaRGyfjjaJa9",
  "key13": "R5sKBGPrEiw4gggoCDDMhJJhCejkCNoSCAwR2n2TwDCmj7FoKUqMNaw9dhMCztEgxMkN4f3qjXnJJeQzK2Ezkff",
  "key14": "3LE34mSVded5JsvXaCKgz7rqHn8GAXDLDVMCE6Wxr5LwGLVHv7P9DYSU3XLf3TnWb5GUJtSbLhAZ2bFCkT2xcx14",
  "key15": "64CBKqUHdW2PJV1JXQJN6gXvKsi2ex6XHDiQooVTVhxyw1KqXZWnULr4dVbF4LXXNsK3byn1G5BUxsRhVqWqcGQ3",
  "key16": "NLoXgmY7o29v2gC4aH8SYYiHRbmz6PgG5kFSaFZqUCVoqHA4KzKtZ9teTu1vDCpuwSVmDZbSm5m8UTXDQ25Xd7y",
  "key17": "5NwB4QNB35amtsJV41mrC4Z8NdXNYv3oAceCYMix2TpBr6V9NMUVvz55LbnPdyYwrJ16rUa1TGFV37UQrsmkJWjx",
  "key18": "NKi2bz91kX2fLKpbkxG7frTbgM3LoGXE4sNj2MxQRu9Jxq9zjPAQeQBnp2jW8b4HaDTK4h3PZyGP7o1TQvCTrHn",
  "key19": "4XL9nGMeFR2hAZvXyyCTrbXGu9ZEUKGazHLtsy5qLVsLXKqfmNEsHhc9AKKMhtMyd2nshasocBRvrrtFznVtykwQ",
  "key20": "5TssGuwLhQqSjpWaeJp6hDhdY1xiMZdJ932i7cUfKoj33oaJw4QuCmahgSSFR38d6bnLCEYAYwTo9FswxHWeABt2",
  "key21": "3nqPF7kN9qvbRgUUgwDXY2cX1AG3XGuKWL7cvqF8fh9VUxbVwzMSui2rBch3wS16rk5xREZnehzTFNhk7M4nVbdh",
  "key22": "5AVMbpWbcmdLqk6Ng9DrPhd7bxTGgEFFZedmSFUn2SuM7WEq7343LY8UHhNzLT63AjonXoaAgR9NR78Ly8nbgC85",
  "key23": "3WWKuFBE4n39yxy64TD28tbPCB6MBiNUC9iBdqgnmHs51KGAXNwYH6q1pcvRBsknMa54WFd7PJCkapv5SeBnbV8g",
  "key24": "293MfMgHZ9anpXef8pszNMcW1Kv4gRvxQJ7RYpTSCr4kXvVW4BPmNfYD9fc1aLdxMzpd9nKnBkqRoQu3nC9Ra2LG",
  "key25": "neQk9jsJVi4ZqNWoM9ifCUKsPBCTC6VLYciTTSrmScKLh8dJ9VH9qad4heuTCWq517w2VFk1sde3DKSAA2evZip",
  "key26": "qn2iLtpWFu7D68yw6CR7mguoU5vaRH2J6MqUzbUkyzsrKoNsofwdRSZiCt9AzDq65wsPFcA9ScSEXiNmvpfnpR5",
  "key27": "4WkYuKGrQf34Zn8rLwGUZz57YEdjfPat4jPv49ckNkr9CiQXCtfJcgCoMgpVGQi5swS2RjnM9KTWi3q2rhc5tPJu",
  "key28": "3e9pAm33sdLDVX7EWJRYAQS9aqE5hHGeEgPCr1zB47GthoT1tFDFUhvfT72WyXHZZFxivP41B7WFos6JVtvwdmdg",
  "key29": "2aoHJgTgnH4vW99e14ftvqWnUV9mBb4VLweobQujEVcyiDyEJ3fxq5vyJcXTmPQFcb5o8BDXaoHKCnnJJ66jPFXW",
  "key30": "3UhPNXfKt3PjK9b1k4iUwARrUbYCtnBWa1zXnAeHurxoAMqxEvM1gNRFgG6KGM7btiH5MLFDLPzJpS4UjCKGnu2K",
  "key31": "2CLovb1aRAdjnqbhmHrP72zEP7eqQc5B1FcPoe5gYHtpaptyuyL4pPMVMCQTkCmji3fNuEoHHKyjCuJfWp8bXBan",
  "key32": "4dqneGafFVwHCrmUAiZeNHfDkedUvQiAiohpvFxVQmKiqU5LCfViVkrka1qqmPKuHZibYC2nEHKuZdi5mrBLMwqe",
  "key33": "1ZSs2NtNbpWZ3biGjgitZ2uUFGKWqd1oPHwfWhHqtxADhK51f7Ga6J53LFyPozj1n7DVSCb6geAXXY95M1SdU6K",
  "key34": "4Y4P5ci9jX7F2N3i3hGDojWQ5t8PS313fmD7bUp5H9Ziez9RWGUkv1K3K35hetFCzZ6HxRcvYNcDpnpVqcXP1v6N",
  "key35": "2XFpuAMpfwPjCYxsHLVcuaJR3n59u1a4hiLFkhGPFM7JicySVHrWHi1Bt6w9xnFxt5oHeD6NohZ5kUizdU7c6teH",
  "key36": "2Qaq7yZQGNk2RPN2tWK9n7woS7hv2w6i31WUiNUpL34ZN8uhtd9UV7ERJxMnQRFRnSAfcqJa9xCzx3svh5JfU8ap",
  "key37": "HXPJYyi8SkCtbrmM2uyReF3biMsMYhG2fMLL5X2xWXme5zsfhGJsGXS1G6UcuxFgH2Ny72o1nALtbzB64tmQGRd",
  "key38": "3Wshyd4RHQVJLqBpgiee3N4K5nN6K6rravmP7Z1wqdNagrWhmaZLUQNN1Ctrn2TQn57YykNtoobGwNBuLURitRP"
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
