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
    "2bNa5aBEq44qZGDEeqEFgMkNYVtTirQvhiAzhsVjzbx7zL4Ae653HoJWfzjCg6EjZ8eSHZk2GhL3gmTCDNeZ3Q6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNPTmeJWoszzQDpZLeGXLEZgAW6tpd37RqkL4aSyX6Rws616N3MBWhpJGsARMGaBi3VzEMyWH5M3yPBWs8JHwoR",
  "key1": "927y6um6ePzUabmekwwGNfN3Zyygz7NrTsMrj8w5NEiRCv9ZCiK1UrzbmqMAde553LeDP4R8BBHVJ3SDyXppaRv",
  "key2": "55q5L96krv3oshF8HYtgdcxYxewjTe39jMfcdUpGJPiDWVWQ6yedRbsKN8kTYL3n95uhokrcKbYk6uBoUgq8M6Hs",
  "key3": "21yySEYpTjX479XgkBCTh7iHmmAc7fBCumvkDypNA5vCSjSxxb1eWK1JzSBmmWxJEtqGkP6Zduxtq8RgW1GkeeF4",
  "key4": "vvnkXCfmTBvjJEyxmvRpdEMeR5ND2V9FJALFJ3eXZHj3qwX9yf5TZDSKdm3iLnXSz8MnUTpqTFW1PgmJDn4A4Pf",
  "key5": "4gikXjQdeEqHv3LYGVmoCrBEfUcgWFqX1pNFmNtXRFtEabU887JzMRzYVfqFrWZz42wjt7CLhNrnFVyeMXAiPS4C",
  "key6": "N1baixoCxndbrDFnKTRqAcjJ9KHUB2JuQ6V2XfrC5PcAbqhopDnWm7EqDC8we6VMN3X5FivmhFc1Yau1uLvxo2K",
  "key7": "2GgQnzHAcojG8gpphzWJ6X2jSnASJV3fiH9arsHKouM9HT59iLd3agBxFus6Hsz8njf2G2dgMTxomRCNPmRjD9a9",
  "key8": "5YbNrXPGpqrGAPverWNcA7f3jjpsFqDrLxT642M41EReKBWAD5koTEYCW6oBNEVauMxhpLWZ2BqiC7uJbT7RzU3m",
  "key9": "hPZ1TatCynHzUX364GkS5eu1nf7nNyPsw35rXZmWAQD78pB8pMB9QSuHtNJR9qydBLLBgVgBaNLMbshaBsMZFmS",
  "key10": "ABmG4JX7553B756MzVBkrAM29sfHwBKXgcQsQ7BpRGNbNY8FZ5kKFhrwE3JNB66hjmTWhcyQz8qAgcdMTTgmu6X",
  "key11": "4Hdk14zZ2efmaT1MBdA8ySgszJtaLr6ZNbP9izPPSCbqBkh54CvieLa63fHYtBZSsVF4N7djVVhZ1Mg37Ffw6VzV",
  "key12": "3p6VzxYy88ead85AT5Mf8SGjiXpz9KrmkU5co8Me7xytsLGev1LdHP1ZH2bJRDaXEWBrxZStqTF7qdg4FbvJm7gC",
  "key13": "4cPSKSWWBvwVcuBLkrtUL89gmsupPCfZ4G6QGjubnBZywKbZP44huKUArtWGK6a1pKAZ7dvQSewr6UzUGdexC3ax",
  "key14": "FVgq72HR2Meby1hDSVCnELTAFFj6is3tH2C3DU25gfwh35kFh2MQMzgk3p4U8BgLvrDXy4gJFmibG5sJzFhc3YX",
  "key15": "3TEsuYC6oncjinS7w4bNGYDmM1mtfBZwnehpmUWqTQPQYRiXFgCQhqJ4RQRiUWeRSUn6qAAsJckck6bN1sc6ZmBA",
  "key16": "2971nuJ9mhmyMe2qxZ6VumzS3V5kVhx9oVaynA6q3TLU9SwgpDBaRDNhuHstT4V6wT32E3cD6cQuJ9a8We4tbYQ3",
  "key17": "5NK3th3e91teHtkjKgJBQoSucrCgEpcyEWBvh2an6s5pRpFU2kPaQx9BaVu9vFGWp61zmR9nQhxto3iqJDvB9Ww",
  "key18": "HUkcqdzC4VdoMW82VmaDWc1SY8M3qgSJ4UDqDLeUiH1snvVvb5fUFjHntXZajri23oLMd53uNgyYoTspJrepVJJ",
  "key19": "2Cqk1B81jHheH5i4Z1CxdhS1xw9EQkcreEiAra8cMXNVqZgX6WM8kxznoHjce41wj2h5RdHwmCwhpCBZ4qz3HxTd",
  "key20": "5wLsCJ9yJqneFjLknyiAeWhtZjufaFoSmrV3Ki1RzyqHa9vYxFAX15rX1kJcrzEqHWVTtAaeFVXxmUSBjKpcfKvG",
  "key21": "45fzkzUpHwAFGYnZ5JGBMEGTV7qtUsmFisW9Q7UoutLaMCyqt2TwmkgmkKzQsXtBFeZodAVWSyjMLkVmahuWGaZh",
  "key22": "2GkwWSMSauV88XTwcsxA3GjLz3UKSEt4vNjTbaQz8bGzrcQyBNsMqu2BH2pvzLEEwr4UH4tNoUZYdMvZm2bDTbvQ",
  "key23": "4Undp3M4wGPRLN11FimEyYsrWeeCYA2XgYWAw6MLtcpCS4rwfTB8QcDXsT7c7NA21rCtXEKDc6Eg1hVVtpHoY3hJ",
  "key24": "3D2e9JVPxUGEUxcb7tV3njqoEUkkUGei15hPZk1pTVx2DvQPuDkB4rUBA1pzqwG4cUgZasNrZ8fAwAaLLtL28pWc",
  "key25": "2ccJTt2osJVkG5pavNi2Qk2mPCSaUYV16f3XzFeyTcmS54sBUzK94782tzXXLQgBMMKys8CRcsm2ezttSBS7uveu",
  "key26": "4GEDAPGvWh7zoYfthLfu3uzuu4bFxPTCeaoBqzWiCJapvFDn8frnFsNMYqUn99PxjiYeLZ38oqvtdEcE4EZTadAN",
  "key27": "91w11CNZMxDeL28q6LkQRZbTcAib7XdfTxVmHDeHTaktpDjYDtHTdRMEvzqy7virAa6G8uwFZ7xKvycmmquy7Fh",
  "key28": "4CE6AaSDTosCHmuVBHvEKDuxkhQD8njyDpcYvGkGuN4Ro3abqKYCZtXAvPq4v6qKjAAvX5BtEBAMLSq2ZhntgjNg",
  "key29": "2W69Utic877B8B9Lwy5RK4fZkKTE2bz19NWm8c9FLDyCTmL5qFU54TV4urU67DX2fmQANwUdLrQdmWz6AeMkukTj",
  "key30": "GqcHqLsQys2oMt4w8kjqF2ZJjnavrx7QMbZBn9UtNm4esF7UaPhC3WbEqZBu6zu4uec1A3cLGosgnLQVx2msZyN",
  "key31": "58fQ7Loj6MDkavS68Si8ggtWmzLV4MAEwNYzAwsBuepAhvHMDog312321huK6nBbvqQzWQtsxJALHYHELKcnsPfG",
  "key32": "2pHzGDJVQUjHNvb2uLDTooRsotTXhyUDPXePRfxzWuBHR15i7UHkHn299SXk7GdpBzFXoC2NoRocGxHbR8rEBE5B",
  "key33": "asP9TYB5SPb6t2ksbCHiPBnwP5Ng4xTJKpWssYqEe2LiR1pJzQ4LBswV6GgxEYAnitJ14mU5ga78yE8D5BD4pY6",
  "key34": "227Rbm2rpQ1FniJmiwcMKPxypazx5iLFUhgw7GjesBLapXS7a8pHBdY3ZpBYpLFqfEe2D3CJfiSJqV6gzNRiaB3c",
  "key35": "3EuxLSdnhcREuqQzJ4k5rZdCP9JLuWHPJFKdNEihXBxiyG3xJ2Up6o1B5iq96jUfzoGzuD9NAHGxqQxCP53nXK89",
  "key36": "35xmwyDQWAmnN7DoigQEwiNCmHtPGrxsHZVVN9vsDAdKL69QuFpYQ848EYsQb5NdRkkAmziVfLbM6hKu3QQcoEJL",
  "key37": "4iJsbN1fkxZxv4ErT1g86Ta7p2zir4rby6mZdgwCe7ioevAAreHXUfvAHnsf9uEYgiSaaBAJCbZojrk9aikFfJJS",
  "key38": "3HrxmoB5BrTvLvUEs8ZavLJKxCgRNceVMrZZrXMJ1kQArD4LRJ84vRivgUa6Z3pmxoagqWdPR5xTNy9278LtCrwf",
  "key39": "4JAeehDUNHSAV7xfz2BzQGA22L3bbntKGBZa3UqpUoNNcKdWj1pFLDZYqfkbYq5ZiWukVq8Dr8FiEy1fMqmWVXfj",
  "key40": "34Dufi6EYUJDZYR56FNgS6wFoLC6nKEUeqS2i1Uat4EcAxTZbmk1nMTBvVr9m8RJ52xFZ11sDQPU1HqNGwLAkN5q",
  "key41": "3s8LrG93ja6mZ6g4SM6j2Rmc4prjcVWSUPshfQhbetKNfdyHxqMQZnyi4o5s2YNiP17WgYirHUfmwUMFxm5wjRaD",
  "key42": "2aLW6kDD2DERzWZuYnPtcbKm8SxwZi2nhxwc6TTgrYustM9ETYaxmbEYiNGxw6oAMPDBEiKrUPA7KzFyoNbjdMJL",
  "key43": "4VPMvC1NrDXBiqCHEkemdWqaU6V7bE1Wu5ofoY3FWD3yHPoy8K38HTChE6PaTKHzWxfJPQfEpLrAdLnycYXWoFk2",
  "key44": "9B4NM3Yf8EQeAQKFagn7FftVZbJZKsWBkh1Zknha9hW8qdm2BVbghxcceid5syK9Uno1aeCsezDFPp1yEi1xXxL",
  "key45": "4CAKMBKF2C48P1tdeLJHzYmQnFs5Z96WSj8X4jENfiqKobE1B5YbPzXtuTG68TcjXw9UNEwHZMgKhXnYz4fq9vHV",
  "key46": "3sket15duZnS681GEPpERQhNJh5eQHMSgLSXRpLTqg8VS5dEVeaAuCSPjiwNRboD9Dz3jZRsUnNwZ9ZyyVXXgxxY",
  "key47": "52SZxuHFTPAZKZPvyvMkdBm8bmsoWWxCgJQBiUzf7w2YzkuNdJyPALd5jhTs6Vt8XQRWhw4WJcXqqf76wXwgRDi4",
  "key48": "VzYXQPbKUbuwojy4Br2zfkA7beES6886XPrgxQDZNHbA4piMVN5fWSRioVkcCW2RLLMYLAWHnwB9UXgtybBDgr2"
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
