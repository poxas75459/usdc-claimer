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
    "2mkzx3rYKZhYWURJ5hmbe7L9CZ7TUSxfNs8yik3ZooEWySr7McyVWcBHH5nyC8MZj7pWyaz7e4PynzYwq7jQ5nFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PHMdU4VQjdf8pq66d9NejduoS9NPSW11BpWeaUw9KezqbNVQEGRLjgigGtsqC9echcHr1LsSadQU5NRUTprdUni",
  "key1": "5mie8E1rCCsdsLAtcz6uEMZ2bGJC4tcCgiqHVYfmJ3LPDK2m5b6m4VLEPK6ZsdZ2K4LSmGEDK22ZRvtah1pBLKva",
  "key2": "2D1uvXENdXNMB36W3DKjAfysvApLd6ixnoeEkgTDKoHxfqoAJxs4FgYbLw9isjstRucFcWzrFncpR3hrJVEnNjDY",
  "key3": "56oUK2Euc14mbWQXsY1EFpdhwkLUsLaoRWTEsvT1L6hs7FQEWH2Per7jKJJDs7Tws2m4VtA1Wce645ytPUhfvsC6",
  "key4": "5c7wcm4DjFeGk15J2LwZxRKaQPjj69erSQUyVSJTkUg9YAXKZxMAp4skfAD12PPVjwV9E7bT3UXirUhB9cTVnVpD",
  "key5": "3t8hg8bXjq5jgZMtR58JGcfiGEF93ngZBuXTyxq47PqnkHNyHaa5fUsTxNRY5zjta1JWdgfDWyfqTD9cKNdoADLU",
  "key6": "2t284hpXgBdFPMn25J6mQ46dYrCPYGc69DTJ83Ptv2NtMNS22931fAqrBVq2KejaCwRqQUAYBdLuX5h1a6fJ6S3v",
  "key7": "2eyXQrSoBgmYgNLvk59AAgsFaP7zzWRjjE8kwA67tWxLK1eFxmATGw7aiomWZAaRKfNEHYE5S2oz1DttVvVVufiG",
  "key8": "4twb5jRoKam426gyB6D8TUWEQCttrYMVNzKRjYZsHEaThDX1bLK5z93ChGzBNea1BT5hoSBuTmEL2wLSM2qu5LrD",
  "key9": "3UnFPyp8UZDkRThDxSAwzuLxyWQb3ipA9hX5mG5jAobJiBt1CVjqZWyWjop8C59VLYWBst53CwhrmQqgBC8MkLRe",
  "key10": "3WNdSrSiTeJoRY7x1sEeTQ9auB5qbbTHgQLLLe3EPLrcH5m6b4RGEbPusuaD1DJa6aSFEPsLcyb2Nhiq9o2F1asp",
  "key11": "2FtgpLiVAFqYcz45wuaJtyZ8mdtCtKeSTxp52ArauFWzHb3K8Srujh8HnhEVqQAHYMFhiuxpTHmpXaMrUgV5bjYh",
  "key12": "2TEgsFzdrHCweYrUafwNmCfGFyCSVpXnKBfTMpR2hszhd38zDSBupzUp2qyYJwzDcacv29nNRmC2HcYvsmSqm9qd",
  "key13": "5KJxuys5vp7NSQwFChBSaMo8MawnbToDHchUMx9TS3rGsKVLiyHTrhrQ7536U5WqJwh2v2SvwbQJrAc5aL4w76B1",
  "key14": "wGXhvE4dMEEzdYTMeja8DYP8Af5DjtF5twkwXR5pbzipHKXtaBq2DET2W9SHzX6qXWtwtGnBBths6L9w4magxNc",
  "key15": "2dUSuNzNmd9kHBDbSQiBY3WXUoAcSeJ5Wj511K4QCJHvgo8abC1Ws8eap5TX3zQHb7ANYVadrSW2Rc5sdh13CtgM",
  "key16": "2rgGZJ2ZVuF2NAaGgZTk8QMaFSgnA5cqKPkyknMo33hFdaszqZmPDd8TycH3zvSREPsKd4J2LrfyHtwEMGXGf7At",
  "key17": "4KoGDQBGUUt5nPCgqmhiXNyzqRSKUjtWexehmQcZv6pK9H98RREtCR9vCmyHjGRgpo4xqw2bN5mzbzuChv3CkEw6",
  "key18": "2bX351T9XD9hZGXqLaLHER8yJnE4AEHGUGMrG1m943NfRMq3woYL9bCrCmWD5RCySstzqT9vF2rm2AjP3DUvCZd4",
  "key19": "4mfFWGXGiBrd6yCM7R7M7QKJJAAA2wZpYD4V2TzoTdgeQgwrmppMzvCgyGYRMYyKAggkhed4Mn9xu5T9MduMsrUL",
  "key20": "3qLGE8UVFGTTtkPVmoJxWWg31QbxGt39s3hkNwfM9mcHg7ZU7Knj5p4D2YzKdZ3iNEUGGn3s3eZmihkwten3LNGe",
  "key21": "3Ki23FF5HYbbVXTPHrXwXhJMy3kxEGdaJbfPoFMbVHixtG1r5b4WFNrvkEcrJNYefPahoiFvPNaCmmdRcygzhT61",
  "key22": "5A4wxhWCnCrJRipgv9m58i9rQ57p25XsXijqUavtBRX9hAjc27KhNcR6sAEdkEvWgg3b4EmnovYaKZuVbS2QtZne",
  "key23": "21mDofX2ZPwF96bDXsz9p8eRNZWfVzeRM5x1jTyUB3UM9Q1JSj89RVEGTZyT6MjpmVqTyqFiRRs8QZ6bDxL21God",
  "key24": "5n7TRJnWDVidtDGK6SrkGAnCJo7xQHFhzRj5x5dhLw1Q9Ve6PqJAbtVvZHvGkxerZJJcnL1dEYufUeNovs4GnyeB",
  "key25": "4Eb7hSrbz95px4SvaPnhMRb8uKguTF7HcrSnWKAnJ8wpPAqEVEYTwd16zB14TL7aJHfviPbpUTsGzsToaPX5CM5o",
  "key26": "2Qtg67HxhyfQgSuWE7YpdkNJcWTksgLJ4XiuKx2nNbPBTnHiWHdgjnEPtqYMA7RMMeGKdoTE6h96thpV96WmccmK",
  "key27": "3v88bVN8PboFwGEXHhjP3ok2DtuaNHKbubjZC19FANBzVuHy5XSj8x8FYXnXSGoehXhzvAY8hDRqPN6jxMjQvCe1",
  "key28": "37tAq8LCznSneE2bjRt2vx3yAhaTPMg2CHvXMX3p33sG4rHhH93Shfv3Rv5Q8piRhemXKtWAkC8BdS91o3JPeYEx",
  "key29": "9p3KH5k9VdiweTo5iDQAMw5ZBhrT73uATnmLt6Uz4xqrFLVhDsoLW5WYtWUHvMhSbgPYPkBM94qyQyXe1bYvpSf",
  "key30": "4zHuXsidju5hpY2veYug74WrYhsw21dBhjCoJDH2q9Z3XseZVsTwtHZVQ2PitzHSCfvuUBcB1aVNhquU4tWspGGn",
  "key31": "3BMSHfcDDnJ6oBqz1UDY4hiQEKCeq9QuxLecxchNqg23wmCp2YFWDhSAU6HethDWcMtkQYgmrNkT9LAeTYfGyC7c",
  "key32": "5rZFrCAzyN9aw1zJRYGwamYjGmV9BBvfWQ7vfALjaSn9Br2GNyRxHPdQmgcFBsZoexQHYXz7M3dsoxVq6BSvUTJa",
  "key33": "24BbRTrbNGkMHm5eyPMGMoF6LM8fNmB6CZfqfdX4pajQmvhtfVnZSKbwbKRcaQgtrGh7mnbbHb3jeCxhhQtfbvao",
  "key34": "5Yyh1K4FtZ6X4jb1Hr5wHT9j1ywMyJrytoHbN26STAEVq23r8uFtfAKegs35Wdv3kTMLbze7bmhDjEG1JceyCYjw"
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
