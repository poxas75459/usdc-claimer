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
    "4dMJpehgDHLKcGPnUW7wRTWHhE7efUeKjAbgvcn64Bsw3SyRrtr1XsCR4DPSg1eExpioKTHJ5ncSBKgWfTgeMFbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GVA5LeHfdB4Skj6x14PURHiX6esaNWV5WbMN5Dafbjg1aXjByZsFuYJkwDXPqEACevvGZi6ADMaW6FtEap8iWvZ",
  "key1": "uGXyWUvkUuwMTaK6FF2924j2Xn3BozGvvPdXxbdhpxsbLq9NsGx7T9idH18r4PJ89kJvgGrCsamR9oEbR7Ly5Sr",
  "key2": "55YwNg6q9R3JTrpKcY4LzJ5nwEZztrrYQ38osSRANyupngL2AA5x3dxFHiyhK6ojnmC39WEYZvKrXq5Wsbs6xCDk",
  "key3": "5LTUG3Y6QbrKEF3jJQUSAezLgsRcwUYRB2oBXisgkqdarts9vMjLSt1LPsEi1bGvgw4NrJei3EjVc9J4ZLzqEm6C",
  "key4": "56wPqCmeJESdfwG78scqVFr3q8udBV1fauB7fGtvSmCWiZC5Zvs1S2kBWLFdUrEqdJB84saE5zgt5PiVRo8NSqem",
  "key5": "4JaDiY4Sn4Hp2X8evNQir7QHnfzk57TohLzmoMBGWGCNk5U8TARWebAdh5tChaAAfBjZ1iWF1BMmp385HXXXwc36",
  "key6": "5uGcEpSoLWg93QsPbEATnkRwdetn5D832LPh7s6omaCC8TaaVG5nSdicPNeXU1R6eJpGqH2WqZDqRTzBvVGYmxi1",
  "key7": "2pkXSLu1ApRpo3fzLzTXASSZGjZ3HUHJ8dAzumwrKLJeExtbqwLcQPPzgxEfLGdDiPbe1H6mZ2dsTAXVhoyz95ee",
  "key8": "3oYVwwb71jpVwqRvDY2W3CaPDdX46PhwcHqBUWhUGHPgTqWAWoZFspsUgwWu37wc3HQfkwxvm77uZ9ZzyiQwmSea",
  "key9": "3sdNjwb7b1CyR8egRnCadEF461Auyt6xpRMZdLB7f6rdb5LCQ578vVoQKoMsJwF4E7Xj6kEDKyMyZPwgMsm2nsAY",
  "key10": "4WGSkmURY84fCKi173HxFKhoLgKw9GW516Sa9QMw1jwxNEJpZgaJLHNe8pX79pVpt7KPNczRdYb9DjsdioYvhPSp",
  "key11": "2C1heCzqtiCKJr7wZ2nP57tZB2vRNYjgnSK6kJvfMCdCtjTrVTqoePQzYmdSau6ZtsR1AGHZbTGSJuQJxLUpFFTY",
  "key12": "3mufoPCXjpcuWwJ1uL4Xxd8C5xRatwhgQ8CeEeW7tDWCXSyLvuJwRVSmBbCPXChamcjUvhzRwUmAu34p2Ks2KxNk",
  "key13": "54URw1mvJo4SZTgZBttawp3nk8qcW5UMikyEw4djxzhY8D2Ain7LnoFfgSP5iDWFAWf2PRMsKo24zNk8xJqP4Hhk",
  "key14": "2PBk4uCHzjYMyJfX1cuxtgEw2Sm5LyJrTcgBHqbz3bsXR5ePQeAdQ7Ayvimto9DeWG23JHrxxQK9aotqsvSEDSBo",
  "key15": "3rs8FDDKR5SjAnrtRYUVCktDssMrCYhinxKdJNR8mTDJ4DLazpTDtUBt4JrkgrJVRZQV5SDD98VLGMcqtjjunJkm",
  "key16": "ZKYPjaf1E9yZ3RDFwjJATstJYop8t7FxEBAXiHN7kE6pCPU8aZLuhUyFapy4uBUNWQSN2tsmP4GooVosgcGWsUs",
  "key17": "hFsZQRxFDVTdE1iWa5Y4cUfRMi2izPkJdMZ8sLEbaBNFM3pSD12hi2D8CyXiRrDcHH6P3fNBsReq1DztYeV8hn9",
  "key18": "62388zMwwNPu8vpRGf8yrJXRc2fczGswWruFJUDCCkr7nZTMGtjsBnyjKYRMtQxycaWybgerYmKwcT6KhH91S6T8",
  "key19": "2eWEMHDBDcnGi6S4wXxfyNuPZ7jcL7Sm7f2BX2mFkQES4k4Vf28n8wZ9REogWmmyQGkBsSzsCrpvf2eBMqeznBMX",
  "key20": "3sN65ndNCjqkEqR6HrnKmrMuMG2ZjX9gEdckmy2wbUo4SRNMXWUrqzfNJGhy8gNNueEzwiAV3JTHWD7qiqfxgawC",
  "key21": "65LaAstb36wuFCqaeQVMRruTMuWPy4bsAMK2ecaAPyDcRZXUz3KSZi1h8hgbNiKCdhm7FQHnsDJUugVc643FzCYh",
  "key22": "65rE2sVF5GGXNHVzccg28UJuLnXAqADRVP62Uaii5i4GuPD7qTjwhf29TLFmdvRrtYKdfaHtfraDdoBPXobmnrSm",
  "key23": "5d6QicvCnhsupmuea7TxQJzBXBtkfXJwpryAwK7SNAareM6GK8vGV41cUUqFeaJ5hwSGEgfTdhrywDKgw4vwP9x9",
  "key24": "v3ZjSfKNaWHsJtwv67j4QMRmAdjSP16fDwA5kEd2R9YQRHfXvwQPUtDJFQi7QZaPQAvHoPS6LAABRsRsjJSuwRq",
  "key25": "4ZH1P8KY9akKAEwVGrBFVx5sSHQtpKqmthaz32zGaQrGWpYrLtWaDGSHTC7EBgPdf73jz83j6WmE94QCUTTEAaTR",
  "key26": "2qvHdQwNv4dXS5dS5EAEwB2PAhjncJkUg4GRnLzK1dMNHT5LYdNKsDaB8RUe4c219urBywk9VwQWf7bhGkQ7js7F",
  "key27": "Zan9FBS2V5Dr9dhvpNc38vX1NJqAZfzXnXmmifP2G83ALv5nQyZrVJSjzWch8y3qZv4ss7W9sCMtgkXLCvFJjLv",
  "key28": "2pakwDcH8B3RBLDzqt6nmAjdZXRPHiWFag39UH7dZniFUAdQgRGMS5EftxUhGRCv3hGaJy4gAidFFvqyCkfdd3r",
  "key29": "2D16GN9y9ouZGoEgeBysA8HeVGu8Brx5Cip4SB6kNxqTbeEAs7D3p2RpvcayuzKMHXXCddeRHVFx5egs4a3U2Rk5",
  "key30": "4DrHaDshKBC1xrS3yH9HeyRE3gYLeyTzMQpxXRQhjHnGhWEkqh58t6s9DszQJ6aBptMd6Zmq9k9ShyxkPVQ9Svym",
  "key31": "4SerV9srmGTe9N52mLvtexRwEAwpKWoj1GRnApkovvhGgtFti4YpPRZZ9NYJ7vPb8DPrPD8qyysxrXKo8xkrSE6J",
  "key32": "4RYhNN1uCfGmR33Sta9UASHNdN1h4Jvkb1Btux2sEXHJQfEDKgi8gASCvXvRuEGNFCDCdEwxTKRmv5kwYr2ADvi3",
  "key33": "U5wq2j9oRcqeXppVpqrUXK5mXXvvoZR1D6ZB9BPx5wjesuCF4eh26MHYoz2E8Lq4KazfcqnwHux22QwZwAbXC7h",
  "key34": "3TLB8j6vBi6WQnUtnPbe3P9Gx8MZkZk7MCpdTjU8qARbdxhehc29DCRxbmSbt8fLtea3VgLnM8S3FT4XFNff1HzZ",
  "key35": "2xPqDokrDaorN8jkS8XwuoGG74Yse7QhAuB82hogPTRJz9mN48Kmy7sRQ5uZGLfdiUjU97MSARQMrkM9V2JNmcUD",
  "key36": "3EuDQA3ySq4o23juALEtNJTkynCRMctLNq4S6DC5ukyfvjDNbm79GDc7Sk7XNYbyUHyzZ24C5hQ2BQYWcoBR9YJZ",
  "key37": "4MhMZqPAS6ZPcDrgkzwfSxk2PAy58ScccFWsg4Sy5rp1F6iFdGf6R9srG1ZDPMEjhtL3mKHwKggmLUQmk6QDHagc",
  "key38": "4VYJaxr7kyLSEJCZbkMGeSgbUQxJ5WBdVXXXbCBCQsaXZzwbUaCcjw5PsNuUF4xaTQdb4smxSZKZonhhBdieqSCN",
  "key39": "3AiLuLUoRmWn5C9W8THarsBYPNLsL8hjA5e1diR83Y22k6CZ3w2RMjKnCfpZrGSVYmRxhM4ZakQRvuiXNXz2iuMk",
  "key40": "5BCiT7a31sAF3Lbx8n9sudRgAF26dVcwsn173CP8rHkszazMxJoCoPD1BKxBQSbPspb7C769spnYDnCnnjJhbkB5",
  "key41": "CqUcHuLtgneTkjCAtnxWVPZMGXxSTWaj6Jzwd4UMRZL2WpESR33hkXBBwZ3GakporzHhPxBJywssPJYemeJzbRN",
  "key42": "2J9M9octgjfo8q49pDq2njaHuebWYFe3nEqCW5es5BxdA4k3YkJXyhPRWEQow6uBnvUJcmGiw1cMctFFDNNSNPd3",
  "key43": "66B22wp9jF3ph46kpxc1HEy3DFzscV5yrYFmH26rviim7ruzCvNVwHsmNpUPHdey4U4mtqY6QdT7FCvWmFJ9zz7V",
  "key44": "3r7c9tNGHbL4kpjpHMkmP8jeynzy83bwqMAs59gP4pJguTZxgk7wmbDEUbZJNjmZakQa9BAuDTUbzzFMpLFrNUkD",
  "key45": "3BUUcjteSmhiQffTt3nwiUx2nQQVJUpUXdhzfMah7E6gTAJzV8dEgXTthoHnyqyPUN3wy3upge5roibdW4Ag7qqX",
  "key46": "4syk12QhkkrfaNUcDdz6rDU7eionWRMKKUCaDj2YuEAVZMMf9HPirpm3fvEWgcAK5r4NNn1bAoyQVwSbXzrHEZxS"
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
