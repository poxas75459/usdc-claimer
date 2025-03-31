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
    "5G6LqfiLisgndNDXLQzHtAfuijpWtAE3GuJGBoMqV8ntyi8r5vE5rE4Zw5AxfSZ5JNyVfxuts6Ne6aKxRRhFSjF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GUqd4i2Wg2ZSpuAtYVk49WMCVTQ4ULcsbMC73dvXYmN2iiLCchjywppNPA5mv3noyP5xvKBjgBgb78vrAiGvDJ",
  "key1": "4oxaUM33aALH7Z3DGAunSRsn7zCdGffmvmouUiyUWpoBuedmjpgo33PVcxM3RvuhLiArz9c3QUTL3yF1LW71Sn1i",
  "key2": "2xWK2hjiPXXxeb1GTWn9YtJQEtgGecvmgbRXwzfQ5Vmi3BmP3A6TxBaTcUMBJiqJjfQAUNnZ3ne5HJMdi1z1fx3F",
  "key3": "3FdvBupgk5h5y1Xmu2QbinMT6p7KoPS8uTdQ2DiaADBgFUSwy5vqUMPC94nxpbfCF6QetipkubkUNACapQ2v86dQ",
  "key4": "2x8nmLdTuaqjS4dCnESGBdonShiQDmVYqHbLE2nLeco9iYxrUp8CwWzoWUazAdVLVsBnJyh6chSG8tbbAYMvGFFZ",
  "key5": "ocdJf6bPoGVtS4a1j8RupW4wiWRsj9ySGZva8pM1jfa9hT4YigvNFPT2VzpKXoZDN3Y9ezMRTvED5fQjPqMDNe7",
  "key6": "5aZb8i6wSAbobQcWAYzaGhgFWU7g8BLV4dHpSy7CnRUSFgrqH3tGhmAUcqDxZsHe8nqdsiuenb3tQ5PZsZ35wHMH",
  "key7": "5hNuQnKKHxqeiFGfBfHniiZ8RpGc1ykvcKYfpPL6tdj3DdspaZY3VqW22LvVoES6YMKS2nrGefUqRAhBKhakVbcv",
  "key8": "5EvH8WsbF9DeLxSUU92zUCehdTvpfyy8gdEAoF2s9yCGLaM2F2mGatVvpLAt83Es9TrfATPtj8F6eCRwT7Z2GRK9",
  "key9": "2GdEe2ckCcuLD4tsWETf1wRsjC6p4iZviX75Ai41A6cQZTeVYC6vJXMVthFettwtmZ27Bv9TBuHsNnx6u7rjAaWZ",
  "key10": "3n2fXQsNNk7qCkwiBBmgSke9yF6gcNfSsHZaL8Ngu1LWcK364Luxyyc56svrF3ebSXTirWS4UZcWA2Gy1y94ZyuK",
  "key11": "4ZTxeRoM6gK8iZ4bAWHNa6cvNy6hokpNY7z3we1BYtZYTCEsNSBKNnRcRfp6URfCF6LBiwSgRmitchQywNtBwyVx",
  "key12": "5diJePauk41dqaS3nb3fhPsjTG1JpJ66zjtEvJS7sGscFK9RdP77fNzDkMV8EEggFZBTcVKmphFmfPCb6y3TUSfd",
  "key13": "49dDmD2DTg2tSxYCaYQNntQtMyDVmB766qNvTivjPpwk8Ri23Ybq8Qes3ybupDX2kzWEJK7zvn1jREyFj6iTUkhA",
  "key14": "NUy3GPfKfzqbqrTk9vpBMNG8vk3Msx221TcymFvQUQZBH2iMg1aSZZrxMWyZKDGYkKWc74w1Muk7b5huX3uTDZV",
  "key15": "bJEnpY2DEsdNr995NTLMaS9azJHKXZ8zcTvqXyioC3yEpyFGgKKoFjaoRCXBxP9zLnZyqZvgaibqTqcNKnMAoi6",
  "key16": "5C4TYg6V1hs8WtyFMVEadHByonGLppHbZsqcFzD3EoTXidHL9CSw8egjsHmk36LosEsM6RMHD8fnAi814p7Bbxbj",
  "key17": "5fRjez5T353jvZaRofsqAefpYjWzbRd4VAUz5inpuM6S3CfysRonqMwAZi42QC1XFLuauQ9dmoEXFpCA2Q5qYe51",
  "key18": "3BvaexoN1GGdrZvy6Bp81PjmUnZpdHVQk5NkGKWTEyRhjco71CZUg3dFeBpZimQ5Yqp6sb7dZEoe3FaP6nwAnuXe",
  "key19": "5P1jeFhTFnf5BAsAwHjyEd8Z2rRar3EheEQYhDkH1dcQGNtEtsnPbga188PWB8nvPYmhyasG7Bq1iNwcgBQQp5mg",
  "key20": "43PAswtEEHTKp7DNo2aRjkssqSmp3XPTQDFafmHeDbhtnFXwoNUzZpEzebBvPXjvCkfw6MB3gw4TfYZVA1nRguqZ",
  "key21": "3wrkwXG7MA6qjU8nstB36bWQtNFExwGuUrcWcRAupw6tdJiAkC6ErzcPpQRU9oEy6bnNxv8vNApxUv5UyTWDtwnX",
  "key22": "73EkpjUZcqTZfYVR6epfKA8y7xVBfLWqAvaq78rQmHVdRkpwpTtdbG5bdfwdkNHWqW7dhiWR1HGhhYfpV8ynKEc",
  "key23": "3Yy4oEWCynKxJaXbmkPZvqTfKPjZcHHZDeaULQMQn7sKunNdFNWvZJzGb4VxHb1BJ3w3NNPEKARuTqaXQ5f1XyGx",
  "key24": "Ff8ok4fbJic7JMkxpGhLzkrh5i38tia8ymxQ2ik2DuR9fwsQvLpUczoYGkwvv7XHS2jsaNtREqWAwsfBNtCwn8p",
  "key25": "uo54Wr3479xfMbjNrkHRkepVqxyU5NmswANc9kaeUUCFrWCaA8WyyurKkwi2htCzdMAeiRh5g2FdLLoB7Qikq3D",
  "key26": "3ZtKBjZy7zmAvW6ANi9CQuJcoLV9CwL5JcBMWiKijdfsk8RHVguZ9ki71PLaJ5X57ukyCdkiH5aKpJjgNQGMMTnP",
  "key27": "56yqcCExzf55SDaYwRzDog6cqt3pwx5uiByjuhJL3r4XuqBJGPXwwFtfgCJUtLQsMKsta74amh2ZFUPucV4yePnF",
  "key28": "5p6PWBPyS2nmzNBgLQUhwrD92EcvZ8nMT7dTddiAQGNgBZEygUQTZeewKTKK17t33LsDXxQ8WdAaSbbRawbGSuWV",
  "key29": "6vB2KdSZQnwjWEqVv92WgypWeYZ8PsUHW9jVaqS5Kjp7Buoqs6zsfTPhwfvDtwTsFBZnX59pAUE18wR7wpHiZnt",
  "key30": "2sksCHZBGXtFXkWA6Fq7ogKBEtAwFPt52NFywYNLEULnM1kQv66EjgVv3Bj81xt9tikDP366X3uqUHLjtGQgQHkw",
  "key31": "62SXAwXwYSx99TFhkxAUSCcoF5i5s1Qf6ykq4iDXYVoxW1qwfdrsS16c4uChs3KA1R3kh4EcQRgYFyPFjNftV3cR",
  "key32": "4s5bCUyfhSGibUaNa7AcqmGzaoGJkc6aWgdhtnSwkph3WyCjv2PP265HVwey53gozGGG49y3qMcoV7bJUjyfsy6o",
  "key33": "3duwoPcdHp8MEZdNCrYMG34Uy2AtGTkQfxcKJwa4vz9T6maCsmqRzsHovgEoqgyegRRNvXMD1HaNzuukjs4kA6tt",
  "key34": "3tdrKsurPhRVAjeQnBmCbLBY3dSRwYVyM7miZbYSk1PCQx3Ps6VvMkJs8PMzBg6YdA3nseLcEssJrH8LihZHenXR",
  "key35": "Vi48RWWceECgp75VdX1pt9n3D5FGEKsCDCyUZJb8dJHLfGd7HHbGyapQtXwtKoVTeH1AL8pR2WbpRikPnpZpHfL",
  "key36": "1iggALvsWnWPQ4ZcrnBYkMtJYk8ogQCAuQfsQpUPy74ERuW4eMN2kyqk5qSWtfRvJZgyBM1WMdL8xxcqSQpQh42",
  "key37": "4fLWoiKJWMx3XnJ1MAmG1iwWbMjH3LxgM3Xt1GUCzLH91MivfBu3BbThdtndXgnDRZ42XX1vigwSKwCi7uF1vtT3",
  "key38": "4kftGjmVk19p5fwUkFUFZrKXX7FcNjJYxnNvGBnH449C55c2LfvccyCUENVv4sj4ZGWhj5J3ntURCRcNpsjo2RR3"
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
