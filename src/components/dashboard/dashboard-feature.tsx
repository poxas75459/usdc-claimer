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
    "WFK2ffzCvBtR2TEd4rwkCqK5thgVDs3syiVdaTfBvsb8KKbLnSYWFfrA2dF7LrUkrdSRgLxRn2dbdvHRYou1hR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PX28vYeFMVbqCaF69VXq2t1vUX9TSD42dFNJvPRQV6VsTMoxBRQ1WRvgcHYDsV5Eq8haRCaFej1DVMjcqbWZakL",
  "key1": "381rusknKfPzZSVKMETNtzWJSHVsTQEBjW3PZeW2bEZpNZFSaT6H93qJj11UEixAQhK2CFd2Su3qFF6yu7VdCo7J",
  "key2": "3rEm46DwGAwCuY59ScPpF9YPaA7wwPYMNa1Gydc62nmj8iV4p9K5ro4XpjC526CDzQuQoANFk9nHK9AxJSfZ7Vje",
  "key3": "5BiCmwnPWp3DW61KV5B8ir143vafNV3vndKadXarzb8W435o8bY6eYKwkoPXW58K21LP8hy4EnG3MBgsd7hh3Lb",
  "key4": "5XRJtHtaHm63qHWTqThoCvaRUMwU7rJwGEm5Kvho5HnHZVaQyfA3tQugqVfrVcP8rWmg89KebPZ3EdoQ7k6fcmAG",
  "key5": "2jcWXstaFgbmo5tqPL7GHmqbVv42vdoJMP9WMsxVCsZwVVtm633Wxj6fQY7guHKQCayzNowF9xakmEqyYiBNjFdQ",
  "key6": "4dTVEanEZ7tvjfaM2EssQ6eCaEFQsdq7t9waRrqK2Uzuui6MQSniDXqYTWnuhbVCHhJwtDy2uS8H8GG1iTMBPJaN",
  "key7": "2VDGkLokR7gENoZ33zpgPVwS1oHJnsPeqEcX48iTZCGcwGTie2Q6cYHaqJvTF2o2gkaxe1oQyvfrYnmyiXb2KVgz",
  "key8": "51i9yyeEvQKYsQZNSwQRZ9rRPdyUvuvXeQcH9gbPtQsKAmTvnmkYUiV4FMEspfJgtDztTHRUoUPqfsQXxsMggFrS",
  "key9": "j8oULacaeSMScvCSGP4BkFhvfTaqBQwDVPfFJmmn9GbCMYAuKqMRMGB8LuFmCEDLqgKZD4mmXC6brPTHvCSuxkt",
  "key10": "2YkHMPL7Yhk4N4iygN48Aj1wJ16mbVb7vB1M6fbmsUwo5DUPKmuvKvVbBDVbJHJ5oAbMgtDs87Mx6r8SW9XVXen7",
  "key11": "21eUJuE2gN9HntcV6JVmo6Zn1z4ASExqvGiRNCZfXVi6ywNH1Vbe66mJbEifC7EdaxeRDQZsQXB7BqoNuFwM8v5v",
  "key12": "2rhr3qarQT1ZaHyojJW6ZCq5zrqc9Yk97DGxnfqVQZSGxhE9XksABXCT8dMxZydRbzBA4VuVj6Z4nvnVLwTitSy4",
  "key13": "2hqauDyub64CQL95JBBB3tkmMvhrrf5NzYEsR1VpLjdoaYFC3zuTRUBoR1Gd8jBo2aoHmhTcRgULGPaqjg4i8sit",
  "key14": "4jwCW1CKcYPPmkJh1kZAQs1BeXsB2UexD2aCCeFJbNFaqSgz1EmG5ceiH8n24jcusz7JPmeR1rFnd4CSu8xAMLgU",
  "key15": "K6XrtVX3riWPTtdDeJ7G7fZr9Lfh6LJdu7KeQqnQjRvac3j2tEfPehB3qTVP6diPhvTx7LpSLpSDLBvdp1x7rdv",
  "key16": "4Kx3K6uGpEfz5taYVjoQgXinusw43QuVQ387XfELazTeRikcPzydTftVzBm6JWzSTb89YNBqbZMyjJrCYHsruY65",
  "key17": "4fFo9kPvGGymZ9VAja2VQpWTcTCbaxV5gfjU7UHkUQpVgTGXQsbhpzLNzgic5zx6WVypErrpgvDNx3YRPzetXPrz",
  "key18": "2Z4VW9WPbLSCF9ug2HCQSXCGMmaw3rRt4LzLqthyrJLZa3cY131qc3z2H2e94R2xU73YVTyD9jf2Un5Z3sVA81bc",
  "key19": "2LVPAoVXTRcsn3DG29rqD1KUBRUfK1k9jSDKTmpoVNqmHhHq8aEvdVjtYwBd4agXKV4ApuuqEDYtqfM59UYfBhaZ",
  "key20": "2Z2VT8o3N4ub8SRJbnnUji5sXwPztegFZQdDpEt7PDfW1Ex8oHe5hwNWpdHuwPykJPMUs4cb5djf8D3KaM6p5ep1",
  "key21": "QLzbjZ36PVT7YXkRQMWabYK6nvx7cofZTb7d324Qtp6pe9hUHKnM5yQUyehm3sjrEd1Mp5DEChRKoxvmKayE1ML",
  "key22": "5UdtgTiYKmNoCr1nicXf6Fk3hMg36RMWhgjvWuAY5m6d4YDvYDihUe1kfYXGLQWmZfdcmek8kiGzDx6L5zwiJ5gB",
  "key23": "3ZYgo1SM7aGNgkPEEAueZZyhTsL1c2ub2kwQX8KqATA5j4vmN9AoBAMMHAvkXhwYhZ7tijz66FpBei3SWkvyShY5",
  "key24": "3pUho4gUDc5nnSS1b8bSuLzCqnB71CVQE9dkHyXZWTb7H7DNAkauTdX7Parz23ihbUoTXNLPpNKjUjmiqeAz8Pe8",
  "key25": "B1y6HjR4EtwgpzV5ETi8Nediob4MHoCQMu9AYR2YTjxqHcW4KuHpZasW9YK7GN826RqhggG5V9sEx1iMKXjxfNw",
  "key26": "5H6DY8JhmBoC83L44JKAZmTQ3ZexMWEtWSEZtmAtDyxwxBUakfaL9AnxdNdvBfjhcpJh7dGjGUGRr25r86f4bpQM",
  "key27": "4BJXfJLhwVe6GsFPnR7Hc6JdweYZ77gw8w5WAya1PnWj1cuGxvjhUfbUQXjgoqRS1ZH7Kx5gcZr6qjns3HPQcxrD"
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
