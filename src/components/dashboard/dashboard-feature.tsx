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
    "31mvxYieLQ64R96JDbTVodUFmtpTkgW5WLst6uZfVEYkhJxMyDvqdsvX9Mdn3HSV7juVQQWdxoXaFYP3ryE8BVQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aiuftWsMruFwg9aYWpKmiYJrQstkmUxEaNz71ceEG9CcBG7LC95GRdP2YadzpSWoScZtAkvde2117DZ4NqmXN1a",
  "key1": "ikaBkJa3KiiKNfrYm8tyBSrZH7EXoGbgF8jnzj3dTgiZkmFuTHK4JTqseRWgHLX38AEtH1acis3168A5MK8FFD2",
  "key2": "2Y7uzcJHodjofzACVRnLbU724g9TS3VVnQHRkNRp4kVhno2t1oGBh7xPPViNH9uRvbaRBCVe6AU6gsrLKhnaQtL5",
  "key3": "3XrdpVptDNmgNAemRrAaWLMVLfRFq3ZoY8zYf431iMk8pXhGT81LQ9WrAvt7BP5maU8eEhrJc7zaEg98tg4iacBt",
  "key4": "5YcoTMN4rs6qg2NfxHUBKuGezSmduubNoYBxyQLi4i374m57nQFAbR8N6s5MbK3YVD5yoAuMGSMaFKXNKLLnyP7Y",
  "key5": "5jE4A7ZpRUmkrahVGKNweQW54nPUiH769sKT7diqSPS961h7goTnj11DseEkmUNKkM8qcYjx3bhhampRpGBwxgpf",
  "key6": "2MFjHDYPx2jGEAbasvogPjZRkSJ4vuvLKP2smo3EZDnPzsUfYMXeYCAmgTHDb3tDzuqxD2cA9m6yJrZTMG1MFvfi",
  "key7": "3PE3j7gyNrjfUuvLmA6b9PnQ2Ns1LkNXDgM45RC6H2vqeMXZkVwSAxRPLvrePogHVqoHBd4FCQvhBCCKrssyuzB6",
  "key8": "3P8skfR3PB1jMfwGzoomXpEqVQfkUvMRgkGWkdbygkvSTEpxNUwkQKRbyTR2JwLQaWRudeosWMnYFgsTWtYAmbZK",
  "key9": "5ok2rnGUdy3Pj5pun5Wc8WiLc9kfi8PBxU1j2oFJGucn1mEgPsuXJTkEHdNohLGTR4ez3jLkoeWqBCYdGcUq2Xsh",
  "key10": "3ZRDM7V69ttH2Tr2eTzRhUrzr4eYtJXeuQZ8Pdw9A4Y8KuedfaYDxuNUE1JxvJ6gvdaWAF5KkpnGZxv4ceoJmPfh",
  "key11": "9jg8KXBfhcgXehCF3quRu4NTQhpRvSj7cimwEAwzBR3maobjKNkbqruY5WYLwLtNQUTq6tFoyy4XbvPU5DGiNDq",
  "key12": "48gTJ9f8zSdkC5T8LnrZm7536YhorSfAN64MqQVyvRRKySUqQp9h2eEfUB2GjSPqAd6Ctwn7p4ugW2QN2xLRw76X",
  "key13": "2fR6MV8ibmJbMnaAcnnEjoBz5puoCECEteGajziUGSM1h8qDtwWLu1E6XkYQSggQ9vMohyQZV4CxUNUyfaprNohS",
  "key14": "4nnHxs2TLwTGhYTk72zF51CEi54pnfwDZ86tjUGphhYHnArFjeuiCSqCwXxjLfcPFaffRAbex3umr6s6QdQgu7A3",
  "key15": "2SC7WEQ8XsnqYcUyAi1Xt6hG8krbQpmrKiTmruwsedXH2cXdxPZVt3HSfv73VXTTiBKg4j5b3ANQCs25hqyUkrEb",
  "key16": "2LLUHs4jWKTbL5QXPA8tcZWsinQYxJ5fzosrW31PqmDiJRwHmYopY7FJxfebaCwGkqGhedRd4itGp2ZrYNouu2zr",
  "key17": "5PAewftoVyqsxd4L33xcimFWZDpXBi712uw1p4vb1LxaWEvJN6T7HaWYRXPbEFvKdK3RVNdgHB9q2PouCtuK52MN",
  "key18": "5MCtMDhF5ZeyxbZtnbvHaRnrGo6Bn9tbPYT3bGygR1jjNPYTyBsMgrGzgreHM47ephYkW9WMSKn2cUvshC7smfbj",
  "key19": "53UPc6w4HmbyQfWD5E27pZTaEKsG7m3jTfmRz3D9SRvpKfmCUoRTGA2883xp9yfDVP8mW7WMwQCkoAqXqcK11zLs",
  "key20": "4oawLcFSJKCU7hQ2wt9NPUFr5CGAAfkLK8sC3WipLujAqFZnMWFT2sSztKpdZYYkjKRY92QEbDM2p8CRcHGV5CCy",
  "key21": "pJW5taEo96iVbZLyp3Auq3RRZBDkEQW7Px9fQ98C9kbnjNtsWeEqtrKSc7UupvZGwUfTHaYNwvKNe78FB3De6Xi",
  "key22": "2iwuYb7QiSATEaH7dDaasgaKFRFYssQL53z6arsxQ1BFwUKWFQx9DM3xSAdJoKYzpLmaVH91TaYZd1PYRXgeY7CS",
  "key23": "3BLoaR8vuketmJ7iVFsgGCKqN81jncymM6FzhQZWiZ4wfiUn5xZttRwxv6c57DaTtaRVL8rQGWyFDM6dU6wFVEWN",
  "key24": "6rhEn9rhXMqtBwShX2zkEdw1EZjj1o4RVPcChyUqmz3T4cQJNd3zCHTxsHHiEwqpy23pR7R65jabdXYWQP1E2Rp",
  "key25": "4ovs89m7gVLeenUw5hAdN1eHZmcUqH56R7bVJDcT6y4Y1Z3MhgLE2jz3mSYaLvxVurTss8Kn9brti4MDHY7kmVBa",
  "key26": "3gN2QBWXX9KPSmwHM2qEogopixLLp6dyyXZryn2qPGFjtxcPa6SwzCfEfvcfUjF4YaojWDQDuMpiBkrr5h3S8gZn",
  "key27": "2FjYB7LXEZTAeLMPXeWpAHDFGqJaAPshmxHpn8yLkoSiYVYDG1gjZVM5fSPPzudZRjKMeXoYLK7CwQyp7oibWdJz",
  "key28": "3ywVPigmojppc9rKZQeoMrmv2eFLn3TQ56VEXB41HfdJ5F4ntM3tTijZq1pwbHaAsu9d7f8CjMhpfjzZSHWKQZaW",
  "key29": "2X1epPTrArBgNqogiA2HCcSMTksP9FCKzAHvLzKBWDxZCoo9a2CDdEXxMEu9DuJrfEa42tFG1aenw4KFYwEoTGeq",
  "key30": "2nKD47N2F8tDTs2gSSbEf4XF3V9dRHrPMPMoPPVLUu2tWrC5BaLtKWtoEFS8W6gcawCaU562Tw4WDczvWC4VfSJf",
  "key31": "3GkRPcZjNBAK1VjMEYSWjngAurXdrM3yWGj8632dxPGFBuwpo6qT7r77Arzi1bD2X8PLLG2mQpgTHZMEEjVgWmeG",
  "key32": "2FRq2b15sEzAsr1azagv2MLwgrK1iNvocTGhvXC8AWLDH7dpbB53jxm8wJ3xZkU1iWHwXRdRhVvUAvvXgLPy5PbU",
  "key33": "58yXdnSQ2gWvoYWms21iWCvH7KuH4CKDWsEMGMyHVkuXrezfHZBoamXcSvor2EeqCwrrxCTZJSUbrpSzVxPcrV1H",
  "key34": "3XArs5i5jnUMPDRujV94QM3mgQMXbSew82pErX3QsZjXQeKDUPUgheerRHtmrdDrrSfUcyhKLGZRZvtvcQT1h5G6",
  "key35": "3SHoCu6fhs3iVaoTRswEGkq3hSCsLNKmMpiLsNNc8x4uW52ddwXEV6xo8XRhbHUphVeRnWCY3EfnMS25pa2eMLtS",
  "key36": "4bDYCcZuiXn3Cc1jnDoYfZRJLDSYwFyq21QdzkscpiYKy39qjBVmu82e3Fxrv2bVdawYmACb5mmgvdFDQKryQaKx",
  "key37": "5GBmpvgY76z5Qq2SzCRYRbBGWgdKSMZUuAK6EjvuhBwyczbmGJVEWsgBanuNb8YFRepmBaaae3z3TK5tLzDPDdoG",
  "key38": "4qZExqRCWpyoiJSEz6ErgYwhCsrmMtjMR9LXg9WPQPXhDziXnQZ17WXL6jf3fTzsBLsd6vZLKWR6zRfwyCvAWzh5",
  "key39": "5xSj13B3ex1FJ48L8XrKLLEDaz5AribgAvT82UoJznzmtTPd5BW6jRjtLcTHgKFNDQWv6jzWbTu4gxMVGr6CuyoK"
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
