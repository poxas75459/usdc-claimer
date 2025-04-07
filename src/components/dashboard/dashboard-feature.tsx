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
    "3sbhk6NvxkuodcRUHnhKQR1mUAdCcqUmo7yS625ZeZnq1cmNY44JfWr21iCXWdY1cCYiJmWhwWeuuDEJmkzJkGxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cwQUD54joYvbaKNs2RW2yNkcYekkmSwxxwAZpLawrVPkY6snuP5tUfKmJSwSqatb23cUxMxRvLpvnBtpRXJXbAC",
  "key1": "26b3uenns54qU4JT4ER9sjLtHfhVXJqR6sygeRzLVukTDRaeE1Q86dHbEnC7dCf3AtcfPzuva42TThSqksEptiXo",
  "key2": "3rHxxHjt3duc3ZokuK1WEXdGCbbYKCCzpHv8cezTUo3ZjndDKUAubBU1Z8Zk8QPB5NfFzqJ4Zokst5iCeXtfp91t",
  "key3": "ZynyfnsWySXufWyXq8GBYyA59pq3dGaZZN8EJw2JW1VEu4NEycRvWpJESbb8jhH7jsGFnJa5JULda4hMiiBjv3F",
  "key4": "5hERoh1Z9PfLXjXsw1FJY3pojbUegH24XTYbbt5Xfxv4HszYgrqcj2SvMhrcxcTxpuE2AAQtNYRBhsmsDbgJNA3R",
  "key5": "3DKHtv4RwRrgzTn32Qm9GEC2rhR2LakChBrYRxLESoxMgrXEJVzwK2ZMgQMaK81qLxpLZzVdZmgs9UabnzfJeSdm",
  "key6": "2Z2zwoMJNyrJVJPSAs5yoNZ83Ngzqd6kr86winViYWtffcPjyR7D4AXAZUezK5ZcVATc6KvsQNfoQtPoZRPBwCYT",
  "key7": "5GVBLKHCMBaW9pCQJzLnTURbQ74Kg6Sdsa5zpVD8SwN9FmrtACwxKUKVkoqvJbUyrWmMPQnuS4PzaXoHPDhk7YxQ",
  "key8": "5U9t87xfrAibbjxTsF67PS5B9yeKUiuWRmf2YMegTVJ3Zw6615bWRnwbnbg1sHPxWRXPkVQEnLaA5h5EpHokrz53",
  "key9": "5K3xpC6PvWPGVgy7hxCHBqXBHwnv3FqNQHhh7DE5i37mzz7U6YaT9tpwqTP2egvQzRVLdWL6D3pBz2dmM3FxXbbk",
  "key10": "WkSbVxMv6hS9SgRuTdL2jEJ3XZyw7aYTAbngQ9TQ1KpxydRhjq1h7QgnqcfAjyCEZo6yCJEii8CrjtJ3kVPwkKR",
  "key11": "3LDyByYUWPvZ2M3cYJVpcEirVcWwveg7UEksf7cTca7gqzEBtt6pryncNf419c7jnk4Pg4N8HhqSDWDuss2FTx4U",
  "key12": "oiAG677paY5r6j2t3VfijCLUb4QxELzeY4BoSNjtZoxX8DTCQQRF2odwA1wvQHko75fVCmD2SLvQC2DinxJuoMb",
  "key13": "2xYd9J1i7JnGRUkzH9a3WW6Q6egPm63Lb57ZUVPoZsmvb2SSWC44sfMk3A5xrGmraz7B3sfeEL7hXYFf7z23k2EJ",
  "key14": "5f1U6Fuj3MEJ3FJSkaNreUPHSFBz8rfszWkfG2AmeRjh59oSHw8X3DB4kuWsNe6Gn5orrq1XQ87twE6Tmt5PPY2f",
  "key15": "4jUECM8dAUe8sPDvTboUphWfCgUVT58ZTc56CRpNJaPo8LsAiL47EApZjoFQEeXTpcqcVsekKm4tod9GrA4nWUfR",
  "key16": "3HdL7c29Nhi7zmtu7Ea95ekscexzKaciV42o5LdndcpmWfxQeDTP6agXUAYSkj79zMfr6Frs6yYXHwQ1ZHwkizTL",
  "key17": "aXDJHtdKT4ZZrmG8N7rfGhXPra7UmdFSsVFWf83y4VwQdEU53ow2C6G5pxvjhxaDTPRsbrehJPpAdMhpYyVPjCz",
  "key18": "ZKqCgX9qMzLmCKKVbMghV6hRH89BMbWcnvUTeyE8iCNaREpYEYQKrwq7Cf7zZy57X4J9YqMa8PW7N1dMssxRigu",
  "key19": "5Q44D3vLJgnC3vZPBRYze8v5NVNfMGD8WG1o5qbJuN7ygUJpNaGnspWionN5PPdJYCovTouPfmphMPmn8x5z2TzJ",
  "key20": "2xokhZzNXEhK4YUCLEKUDRbsQJVWC2ZRQYkB39TH49QUXwutF9ke5roE55PSXPyadnPbfjHqq2cgMsrorZmjxh3d",
  "key21": "4P8yb3TaX9a48Bc1QAMLRGWPG3FVCrNcbBRZ2y177GfF6LixHSvKhAn71rhb2tGwRdtW8wHxegTTvgFNUnxYpPqy",
  "key22": "5YnnSyb8hVFWG5dcreNcS4CBHJZucqXYj5UoZG5WQBguGgrKQP8p7NKB32XwdvFGdpePKo4GAGNLV4TipnK9HRmR",
  "key23": "2uVnKHM9GgjsAEvVefWSS3JimbtEvh41kHtbdRhXvi5P2o73LLrfCTn7RDpmz5ceDUMrSgURk1aNuBEEMC3gC2Ao",
  "key24": "52HfNgdHBK2H6cRgevxFAiq279xARsjtACAWLovuy79koz8MgStBJajeJMaJsafsm2w58Cj7UQJvKyMUQvh91zB1",
  "key25": "3JA9PVvjhqGLLMkHF7aUNByYSwycuGKUMGTKNYNM6Bhu78ZNYzgSm4pxey3xqPsputpsDWR8cbWbuXR6fhbucT8X",
  "key26": "QjLaCrbtHQmXLnumRw1PB744UUgUhrCc2tnntE8Q9W1fWKrRveZRGEuWgoMfhiQYNh2X4bfxnKUDWTFNpRMfw1x",
  "key27": "5BSWV43YWAvEGcMNAbhLWbnrrPM2iza5xo4ddzSkyxeUFJqzoPGbTVNuLnd4Vqex8gTy9xspEFZpvcM23pTBq1Pm",
  "key28": "3TnSApU4RBkpeb3QrX3nKP1psKGZsWLafGLC5HJbXehNRgDHsMcEubKvBVdLBC4MCoRWmAKNv2bPHojQd82VyVqQ",
  "key29": "4U3A48sLhF7cZajHZk3xTdwPmjPBFLHbmUvxVnCDaK4bmhEag5uCyDiBy82G9kSWXTTw6x2BE4hebBcQvapNZkbZ"
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
