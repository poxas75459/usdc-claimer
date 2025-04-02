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
    "2ho2tk9A1v3cuEXWcxQYFCNkFJPGnepY6GwDroowBkG5w33tVHe7nTJPfEjt2BTxC5qWQDg8BJrE6s36f7SBrHdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RzBLCu7ue3qQXPFZDo9TDy1TsxXk1oUYqbmWGNERCjhoPQFEpKBRyDJiD67kKRGcBRzsnoatDkHEM19qExJ2mh9",
  "key1": "4BerakK64ZF66uw7PL1Z6h4JpsBPu9MUwVsJfnop2fF4LzAGPk8zEjCUCA7DGyW1ommaAaGrAWMAFTfyhkS8figv",
  "key2": "5vZoK8sEZjteZgBh6uF5KtgBLKBERtXW2h8SMQ2Vr1MWBwhmBmTkfzF5Ag9Fjy7eMwSEfn4xDJm7RdxUdHZsFwak",
  "key3": "4pL4nSaTs2P3gM7U68QaEytmiX5ybN7QCRgpP71fd9SjN8BAkaZDa28vUjSPMWUvtiiEVYtdaJuB1KVLW65Btk4Y",
  "key4": "1pHo8VaJnP3J9iFhryinw4hnDk2jVTaeDEdEnsNroTi3mh1TA5TLgHCPy9P4fe3oker4TZLsowoDmhrrM4CPA7J",
  "key5": "2emhCEe1E9f4gnZhKYKu4cou9WSF2KUmmxnSBFnq4LTrwCbNK4cr9ZDQWpr7HxAtaxTzJNV5HkJ2PpE85tEkbJWo",
  "key6": "4iiJUnPSXHnYfmSvAwtgU82kk7uCZrFTs1FKnZRQQoHNrC9bM2U7gLgp54BY3o1pJsT5FvevjnqSDsLZneKBjSt4",
  "key7": "xakSGJE38FrUQu6m7oS77gSVDzDFZ7pedWE2t5burrPai7z4RG1EJhnpt74m8FL5A6NtajNmgBAUzhqq3uf261p",
  "key8": "c3zUbRjg6hqTP91rdZxxxqPXofZ1kFtN8NdrigmUhf8QqKC5FmrFrsZH88FA5kt8FozEpm44njadGrEaB4LsP5c",
  "key9": "4PDbGHWhYQ8tgszAYd8cgxpifGsNyn9EmbhBGRQG3hckdWSDRCB8WrJg4DDc89BgZ3esZ2sWVy2jSTCUYNrCMD5M",
  "key10": "4kmsPGgB7tH7S2Y1vHLTJt1wsHMKCEmoG6B8dDvd8Vmajqnsoh6Dgopv4TasqEp4UutdJkS8wxEx7oNaPauUeq2Z",
  "key11": "4UvgUAqzqZr5ve2a7h5wgWi8urWvRdQrd6gE4VX9eTixbhTeW37TbcrZXGSnroFd1GUWZujLZWNAjqKvMSVMjSPt",
  "key12": "3FJB5YHizGii2VYGCK9afUN8Q2oxjKNY4onqUfeqcbx3SXinMHtR6DZuUBTi2dMTdDc18CxRe6bwgoaCp6SrE2rr",
  "key13": "Lp7YuccyFq7FGhboAnPHQEwAA8d53kMmmL1HyZ6ZV5TNcgLMeo9ZPqig763BDqtfAmAZCxQvxyvp5ivtEVu6Fbn",
  "key14": "28fT7iYrzVVPDa2NhaTzsjSpBPfWZi54KX1swjBvfR58HNfhkfUSCqojPLoBTqhsQWC5to1vNwZPzje7txbWyLKy",
  "key15": "4FHNLPFWRLWZ6jbunVH6ZP5FbTtQSuJttjUdBS6yXAYEpcSmhSu51EacVJ7ehakAfeVvqCisLdm4JMh3zSTsnrvc",
  "key16": "2wti5gqR6qESfhz7ZTYNEVEyNnssSVvHp8HEMBVnRrKtMTWjUYT92z5vMsH5Q7LPp3LzeBKzy5TEJpw9o15vtPu6",
  "key17": "2x2S68CGe7aWsEZ9XvnVhQ54h1Nn9RsDN4C1ZYixrwV1Xh8HWgTVKsMLUo34mHdDavWwD7ZUtPweFkhXZwc5ZxW4",
  "key18": "67MWajqH7SZfrSiPA7wipusUtznxFmvWWoFExjs2WDAu8ENKpeF9ViXZFLRQ1tCgraP7CS6kQJKZc96ipx15KzW8",
  "key19": "5Q5PJ51ySJSEji22inDYMngSodD2xzP6tTxA8hUt8Dv1GKh4EfycprVRRXJYVHCvZ27XpjaohuAGUks4Da4ogtej",
  "key20": "4EJY13kEAbM3HcGrnvTzAof4HA5MJzRQYTfmFXhL8AVXYzPtTkgPcXrCZyQK5M2SwgyLXNzGUhi2LfbTw9KGVcrZ",
  "key21": "n576W3xtqD87JU6wrVikMTY363ty2iEenCwa1Mb9xiPawpyZwSKW3HfANu2DZ9sr12SXjNSu2nTVgASQW2nBpfj",
  "key22": "4EVE7Ay1ud31w1GmBvXam8dEzFpyEb8Zi3gzKoGUCBrR28JdNdPGAyETQ4c3RkpCZTYzBVk9Ui94pAcbAy69Byq",
  "key23": "4jypqwLsXtx59f9NPbZpGM8DtEPrUDVzkSda7tbRmh7SDALGmB4nhEywMKLjwLeRVsz17hcgPg7cjCxnphYxJcT9",
  "key24": "2Q3U9RNoF1sAtH62U4hcgrrEb5xfD5PLL217MjkwBJtRwMwTpnC8oH8UTBQYdjgmFzv4aqTH4aKGMbzkLkT31mgA",
  "key25": "58DWyhBFwNLo5nbpaxDyeSmPqWh31LYMpDPeX2AdcyTB57vqcwexDfDsBFZ8Go4TQed2E99Lo1AvdaHUu9E7Yvcq",
  "key26": "4vCiAwcx28dQvKeE1U4BibvFBJBzTr1RAgZpLyKXaHr2P2sAD4V2SbxhyHdL9iyytio4Cw5iDbs9P4Tb6ToJW3D3",
  "key27": "2wkcNnad49t4LZdQz1aMtHwr5japzWsiDfVrqHuJXAPhkbVo9xp5FMFKSNBBgJtdd5HrF87mvwG8tutduv6EKXMS",
  "key28": "4edWrDVuPzHgfYU7vDVmshZknnPDCD4a4K7SRGsxTWU6DMG1XRudXKtizmS4KY56KigmpjvZCxMmXmSnKj8Z1j1G",
  "key29": "55heiqRGd4yvDPcgspYxjtun4Pz2wj5bk3MKsF9vfG8LxSDCmMptQrSDSHjPZSnWCR1nb2b4ueaTVpmkGbx1DpSo",
  "key30": "28Wjy6sc8d3T8vem8Vf2LYSF5PAb98fP6Qhk3Vj9taSEbmtn7JCKp7SSGjpaKW2RDg1g3G2XDTnaDZciJ3UXCzLM",
  "key31": "3JTnxf4ArQGP7mg6xz8QwE4j6oi9uibGiNQ5LK8zTnNqdybf9MesheDyYKzJsnc3GcS5vSojoiZMsjSJXkYbfFce"
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
