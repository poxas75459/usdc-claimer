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
    "2RB3ck7P2X7WxdjnsEhMZNKc1e8wzXYyPBwZNoZP22WJGNhXzMoRpxjuffmNZJRJtzD23dduatEhHTqZVyt8dvGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27p66dDTaDwuHHpcdVkaRitNLSw4PEbSEh4KGQPCghJNNxGJmuJZGrkiwaMqUxmXfe3A3u676Mu1Uyqn91yKW9XK",
  "key1": "2T6DUwmBWwGpgBC5zJXL3ZFaFqKK24x7F3BsZhquHNv7FaViVFHsfxi2emqcnWZr2WpLKm185mAhfCNJsjeFUYzU",
  "key2": "5fU7S8LW7ELfXovP2j13Xk5DSj7CaWjfY7p7oSgvuLdcYEQgpaijRVurBidTbZhYQvaiXtQozn6NP6h3w1tWmKeE",
  "key3": "5bwT34j5ThpR7p9ZcFwbcSkDtL8wDbK5GvenpRpjfSveCsrbXtGS9xF9EGG5Jt14nBeG1mH9vnUtjB1LznxvLzdH",
  "key4": "yeau3Gh556KbqbifCS8KngqWLwxXwzHaVMBEpdfizRBo4irj6drRiUymKNSKYFeBLZWr2XnhPrfu9gUAK1oiUuH",
  "key5": "3GcaRtsZXFGjrkw8YRsCqdAaaTVQZMvZZRNGPp5fFcjxLeaeH74R8H2uwTqw9D4i4H8RHvamiWLzSzHdcYgPRSbf",
  "key6": "3iYZwPHrtyjuaZvkBo5eckPD3rVoayvA4PtCtd7Tg6XEDrzY9HcB93Nptq6gGtuw9AHBN8apeZ6XTnYGgXsT8ATw",
  "key7": "6WwCnpTLLaiTCw8tazce9Wg8fJbJRox542B7op3Dgg29f3jAC1Rsc2HKKASgz8KP2gRJCJxjWqYxwNnVjQy3Rjp",
  "key8": "3X9AUYg22p9WpiAAccMme4gHUZsUNhgYyz37kQiwpPeYzTns5AwFXYLdmS1nVfZ6X65Tqvf3hJFPCzxRpgAr5w6a",
  "key9": "5cmxtTWPc9s6bYyzSki3yiSXNXCue8foQKrNieji5uPwkTmZxCkwmK9icAnQTzZj7mbH4XnZbVDQs2qUoDNLr2Zu",
  "key10": "5EyCPKRSgjd74gHxfxJoeSbAznDFAkVZE58vyWKS1fBrBswKrsWUNJWziMrvhALkbmCsziv3RTsFZGABQgviJcWh",
  "key11": "4tGCUJecLKn7uUCom63ddo5xBaZkGSoXrAre6nn9xvG5EULE5DNpigPDwupGhXD3ZeDf5858ETLTbWDK9ZoTmfp2",
  "key12": "2Vmza4DPBgVa326G1iNF4uTJxUgW1RnyVDSwsDMKngumq2ufUvovjR2vNj6HpqxjLwqEwjw4EL55HehuG8dJFXyB",
  "key13": "2LozGiXDMVNgBKJAWSR7KQjjrPSCnQfMzDoXPEmUDshQ6XYyXyqKiRBcGSy2zoXhQDrVZndNLSNYtqBU2hurn21U",
  "key14": "2SKG5EF54fJkcC9uFH8mK1PWMQACS6pGxCVCiKjVoziduyxipWW8RSewXZ6eoo6KvpsKZYhYgo95JK3HsYFjuXCQ",
  "key15": "3BZeZu5hDhCkZvYNzHdvghvd5BVvBzx6115sCxFsc41cnszDT1A27v4WFD6phoG8rN8tkfFVh7oebEhkYdeh6QbX",
  "key16": "3S9G2SLKX1PeQGtmrvbea8LDYefrPFZUH64NEmHuxusNnazPVHuajUr4zgVvigbRCZhJizAsRhURJ9N2jrcNDjBm",
  "key17": "5uBuJXjgdNFUuaqJu8ZQqUFmzQfmL54xe4YjcZnSgCKJnvAjM4toBpaUAGgCgGvj4rEWEFWUZ6jqJ916EcDLTjk2",
  "key18": "5ZKQSRCqcN7WfXtabU5msxvesZbYUa7Zn1jkvJNk8SgGWQemo13uZ5yPmYGUGXHCejM2gEfpbPAnrY5YG7SutHw7",
  "key19": "3GuKWJ6Vw61XVTeB2mm8fFsZoHCN4MdgXt3AFCLYHrx1yuS4JmVtVCNmB4pUwHzHdTyyRowXeKHM9coRw7PPd9FE",
  "key20": "2Exkr369CU6TXk6Uma95G62eNymLy8Gr6CctHfYi4Y7z2CwoPdN4FeN8YpFrS8TkkLxBNFKDv78UAfCiGnPqsn63",
  "key21": "4bAKnEZcoisGEk4U4xdVBnKr9oWVm22rJzjghQQHTX8dKnGaxMYSFD22dCUS96ffXsBNssEiKQs9qaQpSDd4uGep",
  "key22": "4bMfZfDeFxtwSxvFwexx3tDjhcAq1QDGAPFdwzrGk6M7Et29KMUcb8RLwHkLvwTKdmcg99xQ59E9JS8mErVKtKn2",
  "key23": "4W56c6FW1tbNDvdV7kogHdJiFfrmcULehvC4JHagp72VCrz4t3xmRdkYytevuy5FBTdK4k94vSZDkiUMHQfP2eTs",
  "key24": "47dG173EpX4MgVW4K4eyQ4YsheEZ8uJ8f3h58FAKiSAsBmLis1QuQUo4ygWbUfRc7zn2voZ5w6u618AbsyUYvcEF",
  "key25": "2iEsDNn9xP9qRJMng86sDi4LiFtqAgRUrxZMKJf77QVe71bueae1ZWRFcnxagfuGEx4PwZTuNg94FmwSGM9rysGi",
  "key26": "5gGq8BW8ZixWRTaVqeCZLgjKrbSJTFiKPP9tXTmcaYCXfRVbLnve41xKLpmfnRZWnzGKctEMwLKJBMUBNghT3BVE",
  "key27": "gY7NiJwiPoBy4Hw5jrUkxKrX2mPYcxbj1H1SAtVFBXRLACKS2D98vqvjiLa5zBwhmX6h2REgcD2LWLNdRJpffJE",
  "key28": "2cNxSXCTbbaWvzmW3cXYaWBm3h6zXbMK84KdXNnoEXy82BphYjdgurxE9F5vqeJNvTaMaKvbnZe7sT3jdNr2NC6r",
  "key29": "4qc4X4cH7DcpyGzneiFn1YqwJueGDxyHjoEkB3hDbzEGWmiGw7mSLVToNCio7qZxSZ7D7PeMKMENjyf7MZw8PznW",
  "key30": "2oqrDw5zx4sSM9brVNWiq4FjdhzXftPLiERxboUsy8XjvYnekuGeKPTu9Q4zCLw4dEQt6Pi24kMJF7yRn7kw1wxa",
  "key31": "42grDUgKPVJDHNBwsxr2Pzq6GeGFdNgFW8g6uizkHUTpBDQACHEtzZosFiVX6FLN8Qf7thpdXyTtr6VJrx4wf6fg",
  "key32": "3zCgt1jN7N5TS3u6neGNV1YBAc6ev51R5RSr3CPDkM7p6Vc2MYPaZfjSRxaEbgxXKSaTqwygQvNbGkZe93iKSkga",
  "key33": "526tk4xmVMAoLFCvYGu7YBtVuUyS7aporhU4nrS8vZ17Nt5to8WF7G51cRhDLqp21Yp8G6LvyMqh95uQ3kwYXRi5"
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
