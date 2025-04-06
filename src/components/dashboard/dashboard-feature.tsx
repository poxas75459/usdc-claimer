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
    "62qYnUdk6WcPgsGG7yhaAp3hn1oepvzsGXXJaZQM3ZB1HwZrnrRKE3r7S7dHCzQdCgFoYR8s8EYdwW2VpSwCWenm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pwq9sio5vhpz3x3k14V3F6VNAyRq4kv3grpUaW16r2ExYesEGmpNNshtiHYM3vmY8K2D2UnKG6BZAiPniReV5vp",
  "key1": "wTv1i3kuqVNHCVjNGg8DFieBGVmycbrcPBa9P35pcyRSG9jwmq7arXaApy8gxQvQXJuTb78RgQMKMsrVHz3cAjN",
  "key2": "37KfrauXUFuhLVityEPiB9ZWT1caPLpM3aVizgWBkictn8VoGVJ4a1nhv7EDaaABqiZX3dWYyrjUb6ooDxXfzN3R",
  "key3": "48iN8cKDGk1yhn1k943riJMJM7opgpFU3Wpo6AxJsu12Dgb3i9tZMTvd765565xfzhQakXsp78mgsRQaddts9R1p",
  "key4": "2jMw5vXiLvhVk1cYkkwiTew3LtQAQPMLRriavmTXVUw7KDBJG4PMdxm6WNFDZTByQMZwjw2tB8KiPCAbUEF3g3J3",
  "key5": "2Z226JW2gjx4soVxvaKBEqMhzvFrsAeQfN9VhsCduV1xACztoF7KfaePTfXJzHqr2h3faUmW2TsjZGWoAL7C37Tb",
  "key6": "q39n6RAggGiqzyYNML9PKPgtEP5kwVSfximAvuGoWS4253o93G5d6s4cMdoAjTx2ZVhKEHUW6XPfgr8hxHe2iTi",
  "key7": "3LPoiZx3K1k7VCGKJAvXcFB2Du1R9K5RZJo7iyQuoJpRTLd7QAtvbrMKk2CKKZm3xSNx4aHUzT8EpzkT4fs2iDow",
  "key8": "4rNtcBx6xWbtbFYRcQy1bnwQemE2sRFKhy5EHQ1LDXYVctPwShxjGWCfJ8CtC8ugLWYqDrHwa6BeJCAXqn3D6dGc",
  "key9": "4iS25zyqREeqAZcASXT31L8j6zuherKQaizYoGZU6H6oYNgAUfM8pJW4vCFrjSjxpBfEnHv73WhrfDmi5QHCnJvN",
  "key10": "VYapNM5tkeAfVfKY38JGd1HD8WKxsgK7YcFJrqRV2UEapB6jWeVNZJUKgrQxx69Jr2kGGANabMf4ZYgCU3o9o6v",
  "key11": "2pyid4sEin6fUwMYDirZ5Njk9AW77KCDjynPPrThHAaj8VTsnkFLHCZwq6si6KbdgfKDZC397qzaMYG7utFpBagk",
  "key12": "49aQHiUaYV6mGAXtTS8BiU6xc3Rvg2izoPiYJhb6qUoFUM9BmAAft7Zc5ZNrH6KpsLp3yQ7bLn2crrfsPZJdcsVY",
  "key13": "4PMwAacFTGBukBJewnSfJdMBipoFwKaTuqeKxAUfxT1xxAY2CjaX7DieJfGwxiUi8QF9YefetnwmnvQ5c4cET9CW",
  "key14": "5fBABmnhUpqkYihhjN4wFGtvBw64FNGtQKVVqeG1TiALRJiWeKWqBdoKyeEvApEtaibzziCgFwVg6wepAhR2vFe",
  "key15": "2693QcYkyMyKLo6hwZ8s96BrFXnXdfb8noEThWZWRTCri6zdDAxnT4mLaYvCTBsg77giexXN2Yy72gBxcvP3YKcJ",
  "key16": "5dsXcXQX1iuSa7af6YsFy4kGycTCqs915THViqah8u98HLYfBZKLJBp2CyxMKYX1NDe6CWo7xzmr3c6d9zcxk7Xc",
  "key17": "5pZmRfrnTfGTCNcw3K1aaFcCS21qriZBRFdABX7HuhoKUwYQM6LczYquQRQxAUaAFJZgnDXFhdkdSJouesnCEEBV",
  "key18": "281vjz5vkVaVRRw8FwvGGFGshu9GQ5E4KSHRcmsuY7GWc6XrZtuz1gU5VQvsbcyA3qN8e3zC5jhHKkK4Tsc7xExn",
  "key19": "2UzBXmtRsUC947ERKpAvrJGKin2u3b8Dfofo7o2RPPyuevdsiuZQywQVtZb5Pe237rgSRYS4JWrEirtsWRhGM3nX",
  "key20": "21WaDpdHHwiiRvSTuacCiBD1eCb3AuyTZaSiMjp4AF3PU4R9DJhCLX7DGFuv4rFjNheaF6tiwTqQnR4vaU7tv4CG",
  "key21": "4gnwavMpjVaB2VsYxH7DGFAQFTfwjqLWQfk9DBK7UgMx5XNHt44aJ5iPJY81ucxKXqfwtSHuiyJCSXBxWfbB3uWo",
  "key22": "4weBDfT8skHkxESR7MZu5D6nH5FcYWPbk8FmLLVXDJ5v2XX6XSKStRj9FED1BPk7GLmNetuJ4fRqSZFt3tJSuDTs",
  "key23": "5P8auSYY9ssdiP9eadUeYLyVCWYxbZmrpUuvMiqmCAMyxtBUgMwWDAjrAvpC1SqZDNAkm37HTkBzXcqskyEThjKe",
  "key24": "64UJ5LFcunuXiBZZKMnaFuET8ty4mZwbkofn4ie9m3HwjidYXy3wADeasW6DX3Dbh4XpaZxeRCVVXMa69PPW2iws",
  "key25": "34apmab9cub8oh7JxBpan4m8ja6gBdAHcnU62uqUz4nRD8NXDF6M1LQJuFVie9UBnPorKF12kCeGuVN12xSqgK6A",
  "key26": "5X9h5oDgVKqoy2giGdNyPGgerTFHo9iJMDnF8iYANfDSVXREBLnY6o3KZyRKqiLgogiybQ9B4d5TWeMpcQzbFT2V",
  "key27": "5LxDahBYqvmuDGa6gQsGcFJx6LWpdo8fHDjodejf26UaJmgLefW7WJQNNn1rMvoe8ABx91pxzdU71WYgU4PFWHNB",
  "key28": "2AQ6ynVyPMWHUBQcPvdHSHDjomEHFpEWcBtSCBRgA6i8bEX3oxNFoSmX38m6NePRPp5HhXwKY2NbTgpqA4MkgRYK",
  "key29": "59d8r9EURyY44eeJ6Bn6d5Dgpx9NEWXvVrMwxt34SGznSS4VBcyqqG9sVmuYAx5onQ8VCb8HLqdovfTX99hWmp4w",
  "key30": "3gXrtqZ7k9NT929acXRwBvfLhDLKwGkf1stZcURL3vbxG4LgRR3nYHSuRiWCk2dmdX5MYgtYK3n2egSu4VFKsaz2",
  "key31": "4UBbTdQG4Ze6adc9sqfATbRD6cWyz91GmnamWdETXgdd4FF6tqn39XXXmJeVaFUvY36a8U6UHUxoPhLUkrh6ZQhd",
  "key32": "2npbTj3gGUSTwDWRJjnqcyVc9MXmdztGEof3ZXEA8hSPKGu8PJ7BuCkvgawcsuDx5a8KgKwZYMXV13kyTznaT4dK",
  "key33": "3R5tuu5yxeNYn4kRH1A3hzTvdGa4LS6hCq9HYSAsmxyJ6zij5vdzzfAwLmHLfytTWviqnWiS6fjN1bpTejAoTNzR",
  "key34": "3XbNVXXS3orpmyMAhptQgbrTYkqhwdUUWyWLfv1J2JcGayGyrLFBKscFLXwdYJjhQzgqNt62cUMSAnk645p7GTf9",
  "key35": "55wcDqusrfpkM8cbj1v1sXzDcDU78QpkWQirmkes1TVZpdujdQp9yyhQTjmE4gy1CQFmNWdfU5inHJMG8cN8nyzm",
  "key36": "5yN8DKbJ7djniZ4FhbyYs1QXDP4nXK2b6yps1CDkUCuv4RZrCinzD2WWQivrxFq51FuN48s4yqaL2bYsSQeB5hrv",
  "key37": "2rwukhW51q2eeuSqaUswzddZ1MBF8vxAmgxeR62yD83PVLUGvDMqSyYfmFZm5dvJeEJ9Js9Z75E2jFjHTfd4HhBS",
  "key38": "3HREBxjirY5CisyFR3tjzjf856xGYMbrBuLhmr25dwAKNzj9Zfxw2GHYjz8LWhU9TgyN9zntyQfCoSVefgTHAsBu",
  "key39": "4Y7VcXR7kDgMkpyRWSDuPFFApt9JWqEeGcTSWLf9XEZu8K46cBBFet4zA22442vJUAtWVBESNkUHUt29iuUipVVf",
  "key40": "5BEmdPswUG42GAC2BruW19TYhv8VfQiPoGCzbEQM3oyA2ktWKoitfxsesyL6yPQtXCeQyWuKg7zBCdSJGYWhwjRt",
  "key41": "2YcUdv37rPuw8zPmBzgBtj66vr6wzXnh9jmsiXCE7eieWPTrJqLySfxWB2FVK9Q1E868btDHs2DGiQPov7zox9gv",
  "key42": "32STR1AkYsK5qzfku5DHvbwKtSJNBP67Gf2zRsfTG6UJnnmfQV36sxXoDgrzKNrsxV5CNMRA9HJjU3vSB5peyV3u",
  "key43": "5QtJ5buUgTmNzLLYtop7UFMvKGUS8m56AWpt1oHXMABYVUsAxPqdAUgbRoZvNEG4wxdRgnNs5SRVoVUmxuHSbpS",
  "key44": "g4taS3b462yrd2rw9DpdRDyRMR5oqj9WQuWS1pj71C6voFwKScETM6fYZcESRwa6DRT3gWzCuuaSU5F9R1Bb1f1",
  "key45": "3bsL3Hr7wG73MxixybcyrGDQVb3ePRTQ3vRXrso67AyeGkVBQcnLHJMrnceNGPFkSgeLbVT338nwCLrri3wcZuKe",
  "key46": "2ZKGKmSDCJNEvDX9HV5phWuFDmC5LUEVvPoy1Wvbk3ULhLx1RM3c3uvfMqSLEQrzNxencYmrqTm3wtzbaAqMquub",
  "key47": "4ou1vDaMftJDEJ1PowF9PXswCPsmrUfBbR8XffM32DBzUsVNCwnewcFBrNtNe7oPDtPQ2jpaWvgndELWKfRP9xwt"
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
