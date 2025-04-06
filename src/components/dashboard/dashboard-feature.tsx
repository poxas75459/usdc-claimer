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
    "5RJJrbN8hoy7XktBzWp4SRfVNeSYftxujMZ9iA1SoBWqE1Eyq7egRQEQ9BQ93qJ1oMDYX9jeJpRbvoXJgiRV5FB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QvDue5Zmc1c72PiSVt2Z8BwDdkBkzfXzAy54m6xY5XNZGV1mcAfk5bK3fVwaQErxC3HWTep6DFZTzCzqXRSS8FR",
  "key1": "27kBMsZ4vXz38viQ1GS1rBNPyM8c1gF3N9ubjdoxnt4Evf76nXmJrFKS4P7Yesq78NMa6ymH2JHzPCK2N4ce5LmL",
  "key2": "4oec4gkT5gQbCY4qtkkwd7VzHqBKSFEw7RowwQYbrFZ78vqHJpnY8e8VtcAS36NTKPjeEncFpAepahsx97XP1pMK",
  "key3": "51zTVxNTaiajBgyzxsAjTygsabwT1HKhAq2Daa5wn59Zpp3A2JkXGW3TRn2pB6WRuinCDSDVKL92VYyppj4DRAMB",
  "key4": "Lsjm5d9rGPs12TLgmdvsM599Jb2cDNfEDqQckD31VGcktoodGULqyYoDBfMj5QXpMG4N1dfPwhydKiUU2EFfysE",
  "key5": "4XnCuxtomNSLFWTAR4KKZ2MhQTAmhvYYPabC2h1mzKXtBNPth1TrUzrDWBQNWk1QqvcmtKqymdN34Z2wzdq1p9Vf",
  "key6": "4cE3fESyvQo46S5ds9aFK2GHqGjEDo28DVnuM3P6PAEhujQ62AppR7dQ9j3YmVXhm83WFBoBu8GWZ56cHJF8TtEM",
  "key7": "3JUtNGmXe9DnEPYXF71yrhG1PTh4aKY44ZrTxVsa9GvhNm75qnYHbQ3gmCDbxiSj7XiCQJ1YjDGptMc36rSJ7S84",
  "key8": "4rBgMuAY5DhMrZmz1pkQuLYZDRqqxianiUX6SgvpNvzsPLi1KU16uXnqL4Dc8Xa4n34VmAK7Tn1ftFhXQg57BYiq",
  "key9": "2tfZTk7kwvw8kHaNaAiBnxpGiQUa7SKo848N2H7oyG8zeRJi4bGZCnFSMqkF3y8F7VccpdZdWj6FtAmBKmAj1i4j",
  "key10": "2E3mUQwW9hs4Lc2ctMHM3wPT8YVjcr78toHieo8KyiJ9zvA2b7vD8aDWCczp3ejDUCuQ1FcffsUiwi187UQK7fF",
  "key11": "4gEBioKZDzV3Cz6zkEFbT5u5SQ2rscnqNKEMBvecaZwbSqM7rjHTe7hDgWy7L6ydbFRtibZTKhdLuws68HjhMfKo",
  "key12": "brLAhq1SxcN3zNNqV3fYDXUUL81Gyf2ZT1trUEqdZfopgNDVvynfQBB5LMQoxezdGsHVbqzzevn4uLKdsjGZ7ch",
  "key13": "uBALoAumhPoxJjcATToCH6x4NGBiuonQfQoCrzaznryw2ewghZ1QeVhLU4YpAoyVzwQpUCz1SGeMjbK5kPG4Hju",
  "key14": "2MnnAJdRgqWB6c9kT5rz4Q5jaoNNNYYy2cQsQGU49BxJFYwgS1uhu3TR3xAnSBcFaRJ4WhDX3sE6idqBefGj4VY3",
  "key15": "3PRvnBAPCYo48MpWVUWcbqB7utZSHw8DeEPZBZcFuF8hKj4uH3pR9FmhN3ceGuirbCLGTXqhcba143YZrMKvLDiC",
  "key16": "32sU2rZBXPGFpDDaP9MthmupU2V2CB7dUo9gpJjMCNLjbnMvXxrCaK5qvzgTaqJSP6LjtR3dxXyE4xZFzXsnSs61",
  "key17": "3kL1Je6SBJ8agSs9AeYo7ivSciVRSrZ7dsypnq4DBz1pRGi7TqLfWdWFbUT7TVgfBL91FLz7pU9WoavHS4nXVknD",
  "key18": "21oHBb45f3xsW64ae1ssaL2JoB5Hgpx5Sx4SAsVKbD1Cs84ijaBmuUBSNRT7H1CmsNqcUbwZjz55T6oZZHUN4VWE",
  "key19": "5QBprAVrr15jzwem5X2qL8gwGags3Ktni2SprbSc6iBj855j4jE3HgNtWQyN8K7StJDKtZfUgtmGjuQBXohJBW85",
  "key20": "4yZM3gNCba3pDN2uKmK4XZQuAUpAgMqB7a72ehLfP7V4Nmi6kbsArdQqJ9R3XsEYLA6FE5c4f2VMSder8eaRi6aB",
  "key21": "3WunmToXHgR6NRpVFVpzUNu7Q6b6UaDPXqSsWyoRWNZLwBoCaLwyxdcEEUCwypYvXzqGiHuN3HDBiMhr5kWSxhDH",
  "key22": "5q1zCsYtrRr7ZL2prhZapLVF3VTKtH1pm2DrmSC4qccRmRRGPwsJqd9kzo3o8hkCTHQ1p6NZ3v9hySwXrzPW7Ggu",
  "key23": "5TwtH3gBr2YVJwdroBm1G9vv4rZ4PTnjaDrw5djPgMrYW85kxspuoZm5kSkS5Z7XycChGa2ZeuihDWAEb8VHPrs5",
  "key24": "my5dqN3hTdVNgM9ZimFqSGivSHeMqbBzLDx8ycjCf6zaDyhEvLEH9945bBXUpasa2Ut6yd4dg47PGPzPH4dwPpw",
  "key25": "55bBphGcH6A5dRzwPKdWSEirQr9bYUPTsbJVJdkfbj1Vu5RXQy6SBr1LSgX2SJTymU66ZnLb6MppHmZoGhtpz7wg",
  "key26": "pNriNFCJqPT3o3Ziqssa4S7QPgFpGuKmGcAd3YtPfToc6oHYt8HArhwrz6ZkLGPd8vt72EwaXEbdjB5UwfUSNor",
  "key27": "5H9BssydEbzTc38v1oeoneQY7qzVqRo3bCk1agTEeynSfBRCsYjJYP6QbkgESkAQhdCX1fy229DvreEiYLdTa8r9",
  "key28": "5bxux6h97HeQV4cjFVWHtFXYt17mWrFor8tnm6rUMsDryDSXphQA3DDx88d2UYt9XZTpTu8xoogPhQ68wwyPGjom",
  "key29": "3kEJ1nxH5Qy4WMyqoVEnyjGNQNifRVG1uwSuz5BN6Nb3XFFtFtHmF1ZTryapoN8vZWS2n5PFeEnx1ikUqGpPabmb",
  "key30": "5ovLbUwGYFaD6DkXQAnAqFmtb51FLs1qMQHUzdArfsxebYuQHB4uQn4X8iPfiCWZJK6zd2KXF2SrqVRkf5e8nn81",
  "key31": "4pKmvVyuurB1yc7A35bnZ1S7aWtqnekgapJgpDtmJn6z1m91c5HK2hQZwF7yQXvqGdoDHF7duY2R48awrCjSrUbZ",
  "key32": "5TYQTLjtHsDhonwduE18TCaswB3Rgxh5AdzWxCN4J9BtttSukTGevYZ7fNmnrhedUS6ZNZykr6qmdRikCnVKP92p",
  "key33": "HJr9gGxe1iX8PACNbsVYRkqJjb7mNM5RMvYrmsCXmFrmuxauvQXvDyuX2Ln7UKJm9SM3FvreW9p93psX6dPYXLw",
  "key34": "5QfAcMgHbDdpSjNcw8NAQHQdTu7pnL2zUBRPvsNEMdNiinqbfCJVoVQwSprnNB4vSx8G1RSGvrxp7TQJxXKHdQ68",
  "key35": "3uQiWxJ4KcbVXbDtZbmX3xJrETGxhhai9TAGo6uJ1K3LTBxVQVeMRSZpGtwujtb58wWAu7KMFnidfZi6RiRz74Za",
  "key36": "3d3dq7EinVjdqzjsjZ52QEB2J5xdEcVg8kBeduLnPYj11dRToxHeA15y5J4CLvxcGNvEZ7Ucvq6aZsa7SV6NfDYA",
  "key37": "5vZbrTL2q7uQM4tQsnfATQqotM9vNJNUArp6M9cg22vZnzEsBPuoR3BZ8B129D78bbyZfr2bNTuUNWvn9XaXJFqs",
  "key38": "4PrmUsEMgp3RJnjYsz3oxSfxoKPJ9Fb6b8NH42AbdTy5rzfcQPFzd8A7ycqCRdezA35xEh2kbdhdvz7T26nYg4VL",
  "key39": "3ST9pDmsVGfXCKGCfdo9cQFVM1QxcPuCUq4EyuW8ANCqTXANxPXZkgjFf4nuZ1jMiTJQFitVpHYybPVvGFTkwkBZ",
  "key40": "b3Fib79n9dq6NJLifS1GQ1YrZiUfEWWPUgi38LrduLq6ZsmdhW7vuSXh86btHzChNqDR4xXBYKxsAFGGrsYRSWv",
  "key41": "w3Y6N67EHtY55myHmyczLGvepYYGbrLkb5EDcpjJ5p69JzxR2GRmyaYcS2rHqUnVnbK1id7w24gFiuBZ8ajtSiB",
  "key42": "5UzLKj29pZyRM1PkyBw1YUYs3dCQTetgcEp5jAqUZAcgbgNN7ESgKSHjtfhZwm7cN5p5XrN93HbnuN5uknQFFfob",
  "key43": "3gkRzeLJ8VevH29cvb7p8RKTaQS2Rq8nFfpMLuYnLG4S39mfLxTj6qFLiCwjvTaFDqPEPMUS1hxpLr2rWSerr5Dx",
  "key44": "2ESYMYjVebwLit4AeJwa55gwnA9UqGAaX9cJgx5sTFN6HsxumcNfG4EkUfh36oW1zvYaMjE6JtAyvRYXi5Lie2fW",
  "key45": "4Sq3FYYYkjX1ZpdmqSqBPm72jLYG5et8GP3q5zoBpzuZihfVMzPPDi4WVm94Yuhs5VLyY3adpV4rtuBD19iPjmid",
  "key46": "3Dq3HMqt71Xy4mRGa7nEfaXfyXMAEiw7UVn8R1xTbEmL6CXXhj3iFDqVaJLHjBDmPVNBXsTee5H8yJo4DcHLnQ87"
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
