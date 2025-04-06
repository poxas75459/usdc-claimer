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
    "62GQXA2EMLXTKMTEnyLz3tEcA9aeN9weF6aRTRJxvPxZjkfBpse2PJmkZVCjTG1ZqEdQadbViqZJq6EwXR6GwqkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7NWsatVqEqWXbv5v4YpF2VYddsSVNe9gDBrnmUH8hoAgZ3NRbrBxmyqJvpgaQEE9vKx9tKvMXCEPF2xCCm3D4o",
  "key1": "4hwXq84GdyhXSVhsiZhfCrfPRbjj27NUYHacWVdin1mxZ4dFC7wye68QeryPFeFjxKrfatnLCFT6AMUANzFQNWtG",
  "key2": "wzkpunBzXdH5uTu2pDqbcV9YYRvkUecWFTFEKFPjrU8gpPPkuCSV79S5NFAi4rnWBmSEJpDmGV52k4Yk7Una7qf",
  "key3": "LXv67HurLJXANHmAquJefUsimo14mLrqKe9KaBqzkkwqNarGQqryvhF4SsHupazLfSSQDN5K14zSdJhwnfSaj3Y",
  "key4": "43TB5Z94softysA5m8jkN5HrFijjgc7YbRvqHY7npQypYrnqUczP8fxXZUYTzKWaDiT4JMpvt8asAk9uPEjNV8jA",
  "key5": "4tzdgjKoY2aeu26hXHCvE3e9aaVjik6aZKP4abULDYC9dzYVyimfW9DbNd4RqB7vyoUuTuaZp9CXHNKsCctxheFN",
  "key6": "2NN86hH52xQFaJyffPB53YsdRwSLdip5xaE9nSzpY5iLhYk7Vnhwgovb2GSEGfBbeJtj95u1Gjsn7Gtfz2L6od7m",
  "key7": "3ouY2iA6DFjjkwVNaUgkWuwDqZnh8D3SXHh5r4qPqVkJJNRrGpcPjWHuDBn8G34MMqknw4MJA3LqjLWfg8TCzQj6",
  "key8": "5WekDP3weqt9VUAbT65mS7yV8XS71UtgKaXPcLgLXJBZnPzKpUBFiKeNMzKUqgELsbtYURCW5oZS8BTqVtFe7hAf",
  "key9": "25edbUsggAzvBB2M3Gx9M8ckLcovpi1aFLCFXX24o9CtMnY9PBo2E5shQSuTeEYQGxX94PNTfvJ7kmdREHpP5pkS",
  "key10": "y6vnwsdBMUiTstcErD7vJhoRw8RqsnF4gZAgEQh5XDf541zKs8kiTzN6Dp2ZvLUwAMEgNY4jenbjZJCowbxrFES",
  "key11": "39uKp5khN6ETpgsu86w5Fhvvfrdas7sV68RbUQFAA1EnrUk5ffa79BFuC3xLup7yJUSc4XoNT2R9CM5zyYFc9Fye",
  "key12": "3Qyb7dH9vnHpKhHE6HFXLcpJXQNseuNP4bzM1o5QGTqP8rSKWcokrDfbCx81EGH2mVPvpWJCsAmdsH4HYRxhtD9L",
  "key13": "2cvrmwsdmQujExRaTyF2x2t5BVXRM9hXUwoty1uJ2JGFtbFmPebmNnBC8Vy3UCxMtAEXvThp6t9D8QgW6dDb3cQG",
  "key14": "5n73nv417WR7WCQ6dDnfNgLKbeTnAQ11Fxvgmt5iQ3PB7Mkun22axYw67CCaCA1hozxen1RCcPCjYDnQ3T566Fu8",
  "key15": "2N3Av4L7Qsp2zUR9vHomVo8Tkhv5jeNjD9TYHJfF7Nbom2LVA2BtDx5s8ukoUWeLGq9usvEY1i1YfQUeNfBLZV5L",
  "key16": "2gDnj9ztJS8Su4aZaesBA6FJyE8YsXQXBSQrTCeg5FVsthDYHZSHe5Apesrgo9JsRKjMPBTDZak3XY2P7hENkuWk",
  "key17": "J9SyL1C3jnocyaycf8v6GamrEuHK9LYueSaKBgxr1VeXiaREnF1dmC2txNpmG3HeJvxrjjXaUsLV1h3w57oKQaw",
  "key18": "etmYLe755SMCexusFfB5T6Q5Sngcb3bQgk1Bd6Rpd7QcmdoHi3qaLd6HruhMATMAAJAFpAWwwwrrr9C4TBjCzQG",
  "key19": "4J1spo6XnXmVdLKbGyRexPgnAevim8UhKg49y6B49zYFRisEXAVqMe3FQoHNpwTwMan6s4fXjA4Hxta8TFrUV6PP",
  "key20": "4GxE4eTCQvH5ghAARiVwPnQKHQWXNZr1Dm1nWq1NW9H1qusyrWSWLKbtLkZo7EHtQZJhn3ZtV6bN5SFBAQ9pUanh",
  "key21": "2myf7RotVbMfB4CvzE8kpi8fMkKQmsU153Sjs2t4GdhqqECxDWCmTgTsgUw7v21ooxyen2prea3AZdn95bymqmHv",
  "key22": "5mbopEK4GKPDJ7jEpRftSzcCY6Wgj8boFzGvENkjtz2ktu3qts77zJpzGCGrVcNiypHRGEYTrDgZmWDntpvjmzUL",
  "key23": "3q9okTotoY57Rp6fuz5xfQgnnYbj2FpXmrts1BPDLtkWwNq9mc5U6ZyH4qZJCA5D9papU8VKymd5j9k4X35fQ2jH",
  "key24": "hYNQFo8TGtQT2kWVXoYsppY1MwhLGFuR7VAWYj7tLfVBog2heXxw6SCCrkrnU9D7aZiUZ9Xntd8Rk2PKnohZcZk",
  "key25": "3j8dpTQVfwPAjWYk2qvNovEsR1rMa3sQs2RtgADRo8xXPx9bpZz98MNpiJ1GMK26LfzDyU2L51FnZnybJqp2B8ru",
  "key26": "2GGxicQK1mXaVT9TFahQZ9sKtw6J5xQJUDCFoaLDfDQaBm3MCh9bcTBqX5QcMbmSq2feLiTGUwf89W7uHezbnq97",
  "key27": "2nyPVC14r1LijgQykg7KJ76TeH5jRwifFVwGkeqxxBChkZkZ5M1PLKPYG3ttivWYrpZkzPybioLhvnSK1pBRAYvK",
  "key28": "2Fwu93zxQqj4UfJxQCjCd1k84RZCFqUpA8xCF1za5kcbQ8iyZVvmPD8razrivMA723ZTDxD5M8F6hLTU8GHHGMEq",
  "key29": "5BknS1RKmaYveTQcdZTLWFgunmBe8U19GnjXg8Pp6bzWj447J5ihmH9QPCyAwcQjSwLuQdkPLFTuBn9c6zTFoBfM",
  "key30": "3iDhH4h3sae65kJpNs49BQGvgJNiPYirSq5g3XPojmeYUUYRM4CiRq5RWkkBSajKjnAJnHqpUhH9nG9Dhx5dqV1B",
  "key31": "J7DjrMEt8g2Xz2jQkvKkkHXnZWXZCvnFscTVd7JPp1vFcM6BkJBsLRYT3DM1rSe7XYtVsJhUZqgAnf33awJW9Tw",
  "key32": "4wJTBaTVUsgifWa2FqEUTeQtzZ9HdAM4DNwuWRqrwXYLctcP7nC3yDABXbK68h9smEofZHTyKozSwJ9q1f4PSk29",
  "key33": "YhMiH7BLEWNLti3PVdd9tvRd6MQ9VpPwjeoXtZkJSjA91VffJfFH5N5wRkUfY345AVnoWRRq9jkAeqvMXoY61Vr",
  "key34": "5MJaYtFCiZwaMoQDQWWBS2abLdVRX7PkLqRoUG5gYcE7wc5bW38Gw4wv35ytvJJG6rviDLPdYBm9PgJJLVjWmu1p",
  "key35": "5HkkxMRRC7pdusVuvs9UhPF1nBXTfAapcRbezJV5YA385j3uAyQq1ahxxyqs9nrCHhnmYmb5cpQMSPhBjNZV1hUA",
  "key36": "35W8FdU2cEeWrFRyBRamNKdqUVdLvZjpyY6kegHcuLKyU57kiSsXDj8hSZcDiYvNXToKYSPiwN575nzj1KCBgK9C",
  "key37": "3TSpyPLDjahtJcudY7DNPqL1fWNa53w92UY5CzqLXfnZuNMoytXnRr6skgBEDtAaXD4ECaVGigWZsmCsrvu6NBAK",
  "key38": "5DcAkLgHrMyPkMdM8BFRbtip6fccghRScg1xtGtj4rUdoth2x6JXzb1oJW3oQVLQgKxX9CtmaAgm3CCdNSm1zMys",
  "key39": "54K3xVMyun9QXot5SVHJAwrCP42swspL7PZjSGPj6mchKXAVLXtR13vwGh9qH9KVrsE341mbgoDGfRFhTpm7guCn",
  "key40": "eozBndQcbr59uidvtgJ46xn92LBaTrq6naR5JCZyL4zcszxA8ycE3eHnzp1nXxiikFLSpuGxMjgkimCgRgeKQ1G",
  "key41": "Q6yTtT5XJXPgUDgCmMXGG9nfvugU2oADGNXAHNnCb5sutdPy9ey6M5CxjKJR4278767GEV4Gk72eA2Whj3qe11b",
  "key42": "4pkUjsy774Phu6UmTKtTo3Jf97DbCBFHx4xYP4tU9V63fvWm4nA3GrCG6SCDceknpL4pWYYo27TeCxmCKQjBHYKc",
  "key43": "BwdPHssVFTdafBnNYEkzLCe8DTaBmw46KK8gHN7BirpGyrXGoHEKAT9hhJFdJYPcidjNP15yajcacKGXYg2xgJu",
  "key44": "5RbxjEoqVQSAjrRr3u7vVnzp6pAYWFBaxSRABqcrAwgeFHzffoT6YwwqRRLjUXwx7NvuZzRehquLcfavkT6zNLcQ",
  "key45": "5vY3QQTFSK5EUaSrqnJWiVyq1of6ndBa5fzPtsgzrNobBEgreVLVZvkN36UXdFGN394ETZupgoPZWMCcoUddN9aa",
  "key46": "4NCgr6rhXgne8VtHmxKudLMEZTV1TJb1E8WbKWNFojm84YjS8k2GC5TTFWAfSjVggxbZJrZDhGNFDNcp4rJ7A1bz",
  "key47": "3N1ar7Sj1gVC7JKRcuAvXSMmmGZq3nLsWQhsZqJDfMbygfyRSqwFkFS8QbZgrYMmhwdAqWWnVCS8mchWejMTwmnm",
  "key48": "5jiTbU3GV6fHxNbKuSTEwKP62bPCdgNx3tP8C7YPH2Xoddpaznakh7Zk1PADhhH7jcy6kC8wNssnQS4k3U6RJWoC",
  "key49": "J2jx5GcMfCxyWcW3n2SroQTp8QZFFMCk1iLh3CWNjndZifM6qjowsqrAWmsyWuKd1W7KF9As47DaY4DmLZt49if"
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
