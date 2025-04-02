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
    "2FkTdF1BWCbbqAUbncVwDTaHNcGMuMMntMSpqK6ghVwxDB5vDBE85jJbfJgYQWpyVkgnRE9J3XsoeNmZsvcJQ9Hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Vj7sm41Qqbd232iSmVzomJmYCiNgEtnYvj3ri2cY173V39iMJKFJPUMD2Qmr79UYHnaUmeP5tGuA5SsfpFdewo",
  "key1": "5Lbe3ynHd3Qx3VYENkGhp5TiJSSZzVcJzi33waoDtw4GjFWxAWV1jz3XGUFfrAZqEMxkVNQdSnQLZdKVPRTTas1T",
  "key2": "9AcETUgPENU4eDk1Te6rPgFb5Z7zS4YHW1TuhMgTo5YVgD14pNPffC8zEpvuqcCvuFku52nJXWYysm9wZh47nK1",
  "key3": "5d9CjRJnX6omGW7oEZNKcnVvZGoWDY6XeEpZmyWfaqqDvjasUhJrHwffp8H1ntta6Sdfsa22JgYbaqXgAzNSEHMe",
  "key4": "4uedc3cT4biAR6x9hYCyFydxrzjS72yN7s7Jg75qCEXrKBt2KjBnZ5cYjj67r4TnC23XRQnV8MFGn7QYjnW6Fq2s",
  "key5": "38Sj9HYGErk1xC7WMpbUeZApL5uaHqFZeYG7ubRr5brrYoCZS8jUKqKbKkQ5eK2hhP15Vnnt1SaMCqi5BuPToYkE",
  "key6": "4j3AFmC9fR8qbFSVadxaDy9EFm9q8qa2WQgc8TaYBHTzARoB6upQYet12UgzsABixsBUEeh3HRUP8nue8oa6a3Hd",
  "key7": "1sJerPHRwCXozg891CPLt6TAqhS7XWRFS5qYf4c2fqyb1piGa8AvVJY8FgwPCRSd3PTwbMkyb8iMaqejAQY2k2Q",
  "key8": "5fih8q2Jht2MxHmWz9np9vTt6tZzwcnq4X3jL2MzKLQb2A8GJM5bm1E8mgbmkwnYqBLH4AMFSN5esfXGTn5HraeU",
  "key9": "4YYVbGuWScfht5VPkSYgd1izfuQB3dFkTmv5YvJokmNQtbwUNA7XTLmszAxmRox9dY83CkboGcJuuAAg7TPnfq5Q",
  "key10": "5v1zek1LcHsUTrPSiFfY3abiU6bc6qutmNomnutpYQSHPn4QEs5b7yT4gqazUqtiUshP898iFbkT5ng5Cdt9X2dd",
  "key11": "2Rj6TmkfK5VcLjGA3kdLCMv1zwGUDBYF5U91eE7CgTZLi2QGginkw6CgDKc8qcFTMLEA3huUkYzRDHueNTAhESNG",
  "key12": "4R9PVcx8AAo6Me67hgRTuFTRJLwepw5ZmoLbcYFqDus9BDSLA8v8EBi5JCksxrPEZQUKmbBHG2odeh7LdVxNjVHp",
  "key13": "4BuhKBNnsp6ovQPNWqskHkKsqCLR6PPeoVayj4goyPCyDrnSvSS4TrnhtjSfqMzVnAwJFuHb2bFwLTpVDs6v42sv",
  "key14": "2j3KmNFgKAm3NKVdH9Bc72WGzLrbxAx7Pw6NCMP2c6C2sJmfS4mK3RHZJaHrhf7FXH45EmVyZ6ZH4NsRqFwaLNgU",
  "key15": "c8YToFVunW5Tfx3wLjNsg4WvgbxPs4P1fXYj9SuNbewP1SNTdmQqUQLGZ66N5bWRuHweUf6zSpwELt8u28cWfGq",
  "key16": "2Rr5aGoQ5vFddaxVPQN9MjsgZNSDx8KNtaHorSU3t3xgwEspg9HZhKSzbJYGzNwcNusF3xsQUGQe2D8yLHhyRpSh",
  "key17": "4pmm4sYcW4AAnpTGs1tjcY7Y1ZtqzcodtdD7GUGHi1bLBv7hEkcDKGsdEnrnY6yJ5CWPMa785EgV5QPyXXrBDQof",
  "key18": "4xKzBhcnt7K77MTizLNUYmAjCF13Gir5YkvfmyX1dkvELbKytbgTxErLFPKcqeU6VoEpXdv1Utb6ojN9C94mwdfz",
  "key19": "btpTNyiEuUpeCAhLQG1FwZB9CTtsNavv9x1GHcGYJfHEDGj48YypfSdiPvpNJQge4pwaDxamX7VHqeHK2D7P54o",
  "key20": "V7tQrkZANmiMAWP5xFTk3SZsRgWaBen76FtGSS5SPBZ4peoiz3fFtSCRjvwMQkmFckVpZhLJtEsatDoZe2XzRFC",
  "key21": "5UPadbwpHkzwpqs4SZKCi1kq1CqKFCGw4SvayRurXhJVTMzuisKMBgvgLUA9GshWhggdpWgA1fJYzRpMAGoPrnwH",
  "key22": "2d8KA7fKAGxGk5NmozH1jxUovqV7GFnA4w5DZaBPbTCTUCYESD9ZmBypHELx2BCBRwwtEnzKvMcKmjoYAfMsV399",
  "key23": "5JMVTB4csSQmbtcE115aGWv9zQ48iPbD6z8QLrkMz3pyobkP5gNKEd52SzRqejW21zY64VV1vTALdLAAQsFKuVZu",
  "key24": "PZfQwP8udXfnGEA4mVf2vaVEbgELCeoN78JRDswPS5Tu7C8kQ4KYWFdh5qh4NYG6bv23haEEHpLMocYA7nwENFb",
  "key25": "5qez6CtBoedgGw6e2JXh1MrCK3nPixc5aSeS1ofxYmpwA2AetBDtLVQaHmab2o2imQzUeAnkh4UU7gT1AmkKD6vj",
  "key26": "2njd1DdJ8unuvvkDaf1TH1PL8cpN4XqmPJzc3FiSLjsv3ursiU88U3MoKFmBgYPdunjXMkU1gzGpoFuxb7tXdKNM",
  "key27": "qyjPRA2S4wivdUBVaxTLdvsTVn5WsmsB4USZpyDNZozDE64qppUcNWdyPgFq9m2bjj5gydVMzd7qA2PdVU6ACNv",
  "key28": "2vB378xNyoBJJqvUQgRFrJgaeKVyT6vYNofSYCtKPX72pjpUWyYtJaFf39e8MtaLJ3hi7tX6SVTJFTXVYCCmkxH9",
  "key29": "5d8sQYpPrsXt9Y6dDyQEZyuxrYWC3DDjHFEk5UdZZSjjE7bH2ynxpEMVRSbp7LoYcbHP9Bzd1u5sJC5nHQC8xQtk",
  "key30": "dXszRWj2JXejXbCwVm7rWwMNsTfASHEoTkUqRoVm2P77kHpukFrmnrT5a9Csuf5K2A8LDS1svwjqrvpjgHJcui6",
  "key31": "67dURLojimx6aYCHm4UScUJwV17TM2i9ikqeA8Pyxp7cwaQ6VvCiXZ9XtS6t7w1dei9hbS1yfj3RrFSLPJS5n9pu",
  "key32": "eYJVfpUwGkwmbjX2KJduEZHof64TF8QQzBHrzz6Xb1CvkSkmYBkjs5fGtoCokMUKU7WsZR8yQUgsMRGG9sLTvLQ",
  "key33": "4uahRAjBcdmP5pV5HuLECADugab5HTJrZ1yRFADXMHkCzVeTjMAptPGhHc7YFiAdUJN1a9b4VTKVNYXBFZaWsjtB",
  "key34": "3CVEp4F1Fu9ACxkacGYVevZ6QV8hE58jijqpbRNeUHDJYXzDW3TQvrL2RxucDu4wr1cp3mwmWpwW2ce3dXwJEvjv",
  "key35": "3BmKvDztDV7eiYZyT9Vt3F3NHB2ztK55ZmAADEPjBXnT28s8YkHwL7ZK8PsxuvHjpsLExMZE9W6pnt4rmpZBtwkz",
  "key36": "5LwKViW8CgJ8D419ddhgtwfFepfTWP5QLTy6DQCBfzmo5WVCh84ZHj4HHyNCxMitB5vy5kGjs9EFFoiNybTFgRcZ",
  "key37": "2XYQ2e7n1E3CCRiTtqiDyaSDyKCGQymDSUATs5JwV5ds5MfoGBnckWbvTu4vsGKHN8VoXUY13eaDPiuSmoBqFnwQ",
  "key38": "5QELcyt9fj8ciHD19kjx76H7fZvNCUGbm1LBopKniHZj3G7uRYWwXLNWzu1RyfBSzRRUJcqTHVhWFqJ5MTiSc26h",
  "key39": "cb7P9QnicFbVBCrLyMAUMb53TiNVmNG8qpCfcVP6HpJidZc76VkenKibbrEgrLgxDRB1Thnqq4UQ9eCpfV3ieh7",
  "key40": "55gN46QCYty6fJk1pedQtvH5LRNrwJooStfcYF2A91DVSah29jypbJwQGMH5nW26gP5YZ7Nk5QcLZ8tQDFLFC8FJ",
  "key41": "2k2pTzjUBTHzdk9baG9fMQcHTvVdcNsUvWSqWAwED1M1nawgfTaN5UnGHoewgzLmVNRr1dzipunXaXwsz4TaxiMX",
  "key42": "2UfXYNNwgWRxtc4ZjvzEd8ocaVXan7GtACLspNs3BDEdfTiZVDBza6CsM2VrRqX8QjvCJEBJyZ6VyTRtjf8uNf78",
  "key43": "5hiZ6rpfDi592aQTFqYJVtHvo4qJZtMbBBUPDxTFRfVanXRB5hYUXDttF6JHXj5aFRwdtWuceyuurxa8HZdoRCyf",
  "key44": "3vTXuMXxBwUaBLoEuKN2Rs3u8f3aWerEtBdfu3FpHe9BJeTDUKFDBa3j63CzXB2BjqjrXA1FM2wQBtRBjUPu72Qp",
  "key45": "2w3Cs68dQqy8wVpJ2tQidsNexQu2xwQkJwshfWkqCmW7HymUo6ygnFxA5xnvNpYjz4hPNkkP7bMvJrnaCB28MmH8",
  "key46": "5EczHWnpBS2fmEnWfrTdZDTWXeDbX3wkwFCjc2tz4V8ZYLfc2jSWzC2v46ALh2gjJkZp69zJyq8mrkUyNFB2xti7",
  "key47": "4S6EdDEQEA6LsgS59aE3SBPQZpjpoLShfUhZPF4Dw45bQDHkUg45Qr3VBCNScKjQZMEseFRaHbBmt8irzfr132Zn",
  "key48": "2NKeuHrUTyR796XEAFhnY7zQ3p2gQkUSPLbnYcVHzyoNQpxX7GvMGXJZUfxsHmhvZK75RvwXjWK3Zom8ujUCADSB"
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
