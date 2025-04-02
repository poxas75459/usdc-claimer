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
    "2vTmiKLK9xUNGNSV4oKHDuZgMhLHvDexF9PsyZNjDhy4bXb3Bj1Jnp9FY3KZymqqdXL1xG2QYU1q1FiJA1W6bNcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JZCxMC2vxtAQvRxy79jgsKJiDHRZDUtCUTdMm9FabvsDXGGjJcoWK38ewb2meDvBqFvVM2Gee6uJGprUVcfU4Fr",
  "key1": "33aGcX6YiMbxrbetjqRXyZs2xxPY7t5mLyYtMFLYUhr6nKWstV5NyR9i8b9hM2BoUPvSWM7j8XhmDsk2AevtUHuL",
  "key2": "3kdXP3ajcCwdDN3X9dz69aQZfCqJYU4KwSENppGdRQotUMytnAhMSfMijgpsF7fRmDUZDCNQF24QcGjDKACy8zAy",
  "key3": "3mUcCDoQythH7zXdAxmo2f1GyG7fPXX6rkVbbSkiiRVfVsBeHbCCfQCPpGSuLoPVXFvVuK2Bp4dC3kbZ3HCMBuzh",
  "key4": "tJU1g5Mtsi5Fi3SxSTvi5mtTBLmV6NgQoamCqVgwtsuabG21RAwfu4toGRUc5hxRLecQMrd6Ei1iogrnHxb7MLw",
  "key5": "opADK3CBSAMNu5foo5g9RpkafsQwjZUyFvYLCNnkL6uLj2T5a74ktj4a8sMQ65hLhsJ1Ni5KepzDG7Jd7nsizRE",
  "key6": "2vRbohZJ5FjMixBEsnpQ7r3WoFWW4c21Enisjyu5EaXBsNayjrm7X6Dg7H3HyHPf3jv2dCEpBg4v6eYKT8dHabH4",
  "key7": "uqDdCBZ8aAS3BFPpc8K7R7MRZyVgD94eGddoLnV8BuqgewJwKmhqMytMctNtqvribGjr1GUmETFRvJpAuUxhz4N",
  "key8": "3AhNdDFWw5Vtwqn3ZyMsr73Z3TGuJdp4Y4tYgd8jycQwW8XUhipKpfJ9pzwk6EArkSTocNuhSCRQmWhtfna27E7L",
  "key9": "3GQ3B6K5BoHwk8DmaJMd7JiNxsBvQnm15BnvBHMzhtFG5oSEh66PJcSdVFD9NpHjzQs3buWKXXDo9xLV86RokGRG",
  "key10": "3cP168iiEHSfd8gzQTUaFAo6Mxn5cKBzJaGEwYTAjLwx458gsKF1rRH4FEu87SxixgfEZqjUPt15LFZKQBT1hkPB",
  "key11": "5LCSXu4TMEdBzth8LAASRXQXiRNn8wjq5QDMYnR9H1AwSA4Uz3rPpFUJz9xMtGLPj7Aj1UvsrRRrhBxb7EVGJ1f5",
  "key12": "uiehH3oT4CTDWU4JHuNiYpxdyEGojvzZG7rsG6p12Vbysn4jnb9r7BsBGLKvUiBvxYjwFxEdVp7tEVmKZEHu61q",
  "key13": "3FWN1MCRSXwB5nTcXFSnBseDpvrEtc8rTga48ccAPrCwa47VKDGes8HNXcc1xmYP6E3qDQbMTNY3gMi1yBMZb8pR",
  "key14": "4yT8CVJShc9NRaUXQEoiije4Qt3acc3HBw5Z2yGigt85NC1oTReY5SiWP1vLZ7c2q47VZT8vUMUc2n2FweuCbPEy",
  "key15": "156oB9SGbuFsef9xQu9FXy4Vq6ZCCxykeZrLwZEe4k1QcoDLzPbTy6ic2vkBwDtkjVbHTYcVroVXHZ1XMwfe93E",
  "key16": "5MUbxWXzXT3KozYbN2MrN3ecNg9TBQ7ZEMdNtGRS7R7bF57XSXq7H4jEXhYiH9jMT9457SaCxwyUSzbjFNLXuC9P",
  "key17": "29zbEQGbgYca55dfoCEkKjh1f49HpZdFepBo62reqnnA6LtumGtyWexXH6gewkjKHE6mS3pwcrbqPZsHUejhvnuX",
  "key18": "4uMsPcRjCfzBF6oia6zCf1xiXPnMZvDNDauCAXvncwugvZhBXCxUjWjiUnMiWkRC3mjSmfqoiThHH9GsHi8Sm9ny",
  "key19": "4UnbXqG1pNuyAqdmAwGuTSn3EVk2j8eyLS3XHrsC3vrgHwdnPYxDkgycY5ztLEsnTayfMWPsepVMsKS9qn1Ry7cG",
  "key20": "56Tcw2ci21bHUpLdMHo4UYopxQ1PgmX63yfhdSf2kaMpZLfkj7uVQntSwhLAjkaeCNFmHuA8Mt2ZqqZZofk5Essr",
  "key21": "2WsiwffmPhmnP4DVpdTX3G95Mt8HuqzJUVDKHPWUBJc6rWvxpMVd4TqivRmiopUjazSwoCwhG3ghYEMRZGPFQCGq",
  "key22": "4xx6W7eAJXW7e8ZhXiuvNE7YFsyHu26Fi3Ue4x9QrdAhn4RtBTcqSLpVLz8FbpkWeNsqJB4SVtN1kHAmNf1oJaiB",
  "key23": "5cP1bevWVVLcECfBPmLtSQMzS9Fo3G6L8AG5GHvGZQ6ETpyR7gfrBGvLoxmHEbvecdbCNFGj13MydDpsdGysgW4Q",
  "key24": "iru6gPB5LVHkixvFC2BP6UHg1LtXpuQ1iiv8uSh5THv4wJJyQZpzPszAw457Vo2beFsR1UVjDPt2nzRyh9JKfiZ",
  "key25": "5b8df9himMJ7wxwkjQgE9LMKdLpKfWtjkauaYu4ZcTb9AhvLxgxUUh1bNSfzYLMTtHGHfVvyxoPTycNc4Dq6NgcL",
  "key26": "5xSAKDGXsEvUa9jskZsg6GwMhkSoC8AYRm5Ed65exPmDQiKjzxWQCXVChZHEj7mbKaZhHwN4j6YDmPgcuaydPe4Q",
  "key27": "4wsHBrFCHxWms9TRn9ZvP7RZR3qZpbtJq9iSedZCuCgLoSmwu21MkDbhr4L4TLQzSmNKmZJkp21spPbzd2bwY5Zk",
  "key28": "62qNeUwS9f4rjmMETEzrrBn1dgtEM3sBB5SfJaAASgADmmgZnGzbwDrSo5v1WggNQPFCVjDaDxJZTTcPyW7KhRdX",
  "key29": "3Mg4pTsphocdF4wHzRdnZimkn9LTJCnBWRcCtAGfKKC9KPUsNv4modwNma3GYGmp3dJ8wELgKUp59ryzvTvHQZfc",
  "key30": "Fvt57aaSzTSu4tpiF7XhfKcFh6pksX1wNnBJtoa7Py5kQJHJPgJQxNwCvjNkQ5zYvV6dAFrzFrruejWSHCjEskk",
  "key31": "4n3Jty2ztvzKw5U8pks9JFY8TBC76JELcfYEWNAKsfDtrDWJJtdMfayHotqNaGh4wBJT3wPv1vQkTM25PEwQRcJA",
  "key32": "48n85C1LYtTgSRFgdgTvhaYgYmrRLUbNTiYFQw6TCfeGn8AxRTb5S2T2GbV72wmZGzJdpspwo43ZhifanMc17yjv",
  "key33": "4NPa9Dhimy7mV7Sox36rnZKmtjW7fo6vvNzuXEqxvFWkeaFsc635oqz5pUm6qRbw9wiWznC1Esk6PVpiDFqpLmKc",
  "key34": "gDgw2mVMv4Ffj5Ck1NMsgam3CJBKZBPkSLJvKFb2ozSBHZsf39rDYqPstmJF4We2BdWRYFMsnYwJpGtxPnEi4fY",
  "key35": "4MH1Sq2f82YmPg4HdZWpbH7gFcQhkrT8RAjrXZqH2XGycgxT6sAmYVuqpUsGXcEru327kAsrJJc1bhCeNM6bGRj",
  "key36": "rhT1YTn9KozvgXkisuTonwcKEm2EbziPN9YWz79g5oPzQpgtW2pBsH8KkVcX6Wr3GJSfdaECpH6vWkaWcAVWi7h",
  "key37": "3Kdq5PrgEWaLKYACdpzUYxgRdMN97TrAMZr6XcU2xoka1cVin1F8SmFmroMXeeCdKxprABkihGsbv2kjyCdMHwC3",
  "key38": "4kTJyixneeDftJsBPYG86ggBcjjyjHY9Haz1hMG4pacseCaehw8qfSdFvHTdZhkRsFWQw4fp2bvVyx3sfGR5cDZ2",
  "key39": "4b3DciRDeryoxAoEsM8obofVBZpUK4PwFViEgo5UZqwtBGLSQgfKSSqaXTzqaYzDA7yNGuVjX13Jiotfcvt6qwn9",
  "key40": "5SUwwiqVy2zjS15xLSVp5m9tjJgfra1Pm55giDSRsSZcBJMki94GBvtNpQ9S1K8oBh1kDPBXtjjV3mSZ841oncCC",
  "key41": "L17qNrXVTorWucev7oAfR5KH5XYaeCvVA4s18oXT1GGAQ2XsfCaSWRGhvM3K5Csm3VzhwpHjLV9PZ8vf6xNqwwz",
  "key42": "4MbZ4c59fax3unFHJBQeBFtUuWYFgekzvGcJkd3rPKwP7FvK8znPPFspWb9ZFZvukFjWapEvdp7wUoutLaCJ8ZK",
  "key43": "vHW7e87JT7YuToKQPDTe5RLqfE6WZqmy47bvK5zJCX9eWxkt7NXwJQyNttawjbzFiFyCVq3d7BKprGxLAXcirXg",
  "key44": "RdzZKRK5rLDsUa8PJGistr5mLN2dNcFt5b9q64JTZ3ZfXGcHrUzS6s8B6UNFniZ4z3YPP5H9FpgPLPr9BqRYbEA",
  "key45": "2ugnjeKg3q5YEPLNeCv4cLd5LeCtM37b1nDH7RAAgeoPpXQ6yK7mhpbSEexmRqHeQWjafuhPF251gc8JEKR8ZvHp",
  "key46": "4G2RLW1om5FdxmNx6m2wnLZ89mXDsEeVvABfWwKGjYu94sqmc5Aodq3wRwvY6obcMN6V71LDpxC2rg3Re4aCeXZ5",
  "key47": "szqHHuf4UrjeWDRqeTEfzbJF9a4HkKY5T4Qq8jfHumajJdiC9ZCRKepovC1qe4nboHYWWKgnpNRzf6FDqpDxVa5"
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
