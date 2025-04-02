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
    "2qKvruh2ysJSacyLr7uK1fpWatTSV3N1ryD8DMtGWGjMoraXZrDnSRno7JCFdBnRzaFwJdpRJMxEbw9kR6G97NNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcdHkM5ZMzeDqTN7D9HH43YjndrA8BvjWrLFZXxhx1sCdojj1AWruKd8WAwfE52pair5YqeeRouyW1ibafteN92",
  "key1": "4xRD8EkjXfpKcDiEufrhPgupkcKuVdecy4LqQKYbQKHJXWQR57zD2hWzDGWZHwcNhz8hntR9sHD2tTekZ2nFdsxZ",
  "key2": "5RJ5czWbR97hFVwYaP6GorERmp4cb7YxZQH5azJutnRBPBLo1wiNqDGaezGFhZDjiNfccHrNTs4QsLCLMi159X38",
  "key3": "37a22LZNGAcdjU8CaBmCLjUq23h1ZVDBEvGqfhq5hNwt7DTU1CgmAL8gSGFTsxGegeWNyGUBsurcc5D1o1sXgzdn",
  "key4": "5ohEU8goDpwhokoCbX1yWR7oS9ewrCaeVpM3qkaK51iR1RanRyaTHHHkqAgq8BHgKgtQuKC67KpLXU9yBsmmH5Rj",
  "key5": "2UsVmRJFQ2LKekTzKauhwXtBXgpc53H7E8eVAh51LyGZsUALNv5GLwg3RhuXqd4gkxfo7k2sg24PVjEJw8PpoMhG",
  "key6": "2Nn9RoMKMJTzHxdDTKxLhKFT3sgDGts4xT7L7MVrTNNsMJsTpULXy3di744m16GR6ejUncqS75Yv9KGPohHATfkL",
  "key7": "5P1J8Ggc4XvEa2EcdLevQ9F6HGxTMKRjkbNjKb1vWUELBjpkyf4WGVsqiPH9unDmgxVm4CMNbWAqKMwL4Mu8DqYW",
  "key8": "2Boujveu3xwbcsSdUmRKatswaDRqafEg9KtpKJeTMYi5z7AaePK7x7hJ8dNVS1o5tqd11kANc2f1n8ZUwLHVdSmC",
  "key9": "3o5BoAZWFJmMx4b7657F3Tt8JVfZjyoup65DVkjCZJBjEtQbCkBer7aQyCbAWiP36NC4gGGuAw3S7cMCRShudjGi",
  "key10": "MBK9JmUWFJQUs1wUYipvKXd5H3QYp7ftCVavA9VudMyoRpnprrEbokVMYxnRwusFMFZhrMCFVADUU8estTe6cKE",
  "key11": "BA2Uar8dRYctnTRNNWLw2UxHxH9e1msdZ7uWCVMrJRb7Tam89zMzfqzV6nSRFGLiUXWo98yXisRXVT2u9FtxS6b",
  "key12": "4qZFYW6goX76zQ6yZSsczfBmseTPvfMNB5DCWAEHBFuDCTZn2furHThpqKKdtGpP89G1Q1Ep4V5B9tMD1fN5EBaF",
  "key13": "nW2woJfnAFAcu2jbXURmFxDMwEyNAGYXcFQyrVXxGL1deLbJ1AwnmymkV8Wyo4Hj8RJQ1ZpzETWNfG8Cjk8dG7P",
  "key14": "519A1Tzp5rxwsapwYBFTh4WPmfhg9U9SdpTfjNyb7mb5gBMA7pY8pHNKozitZfxH1dVjKSQNzDDNn6vpVppPS6MG",
  "key15": "4zB6UTh8cMp5WQQDQG7tJUB7doXw8CKyWHpXfB4RZNb5DaoM5FwYFBGmvvd1ZqYq2dpDhDdxNA3TXQinUSvdsJgB",
  "key16": "5MHV1KUzXBq3SPkqJPjtqvnzdCH756f6nZziz2fKF2wUdHAUBCGmHm83AhCP5sem2KtYzSC2xjE8rRXqzU8DWrJE",
  "key17": "2sbFrcN7u3YE3UBTHBqokzAzuni8FtTPgpoJoMHYAzvBACgDM8XmUiq94wkLJfQz5qetViQCT65tM44hm4QfM5ZD",
  "key18": "4bh5Whwws9i75kuHUduwrV18zcGYy8pB9QtZaBXR6hCCkqLDErBF1H4ytZxRRzHmvUzirqZc3dhgj9gGaXRDQk3q",
  "key19": "2Tknom6ujTPetMCyNH1gW3No41z9jvL28wscMP7n4e2DEoaNtJCqK8UXAr8KB4NkJJcoJBTRFaZExiKWXDzQ5NXu",
  "key20": "2BM4KNGW5RcbE2eYGKZiGGSfVniwcREebEAjWK1u5su3suiPULuNTPy1Abi1Q1hcziGCeDdM7SBLgdbRtM8EWhHV",
  "key21": "2K7cDz7LzZgf91jgZTC6dnFwnhQ5uW4mzRM9EBzB6uppsKAy9j6HCBQkhD7bCkmDra6VHTFVb84htdHtbDmgNure",
  "key22": "5nARSNJ6Upgzu993mGdFFc42UCMLEh1ZyM5hRRBFDFeykb6YoF7okeGM1aXfNWVeGwhtv1DWbaN4K1Yo8ZUmSsHs",
  "key23": "TiKfT1fbqdmC7wBEzPKrR98kutWKypT37FkNT5FCFzpb2kwYdyM2oRipVFtNfpy4bMtHgahiBtXcaVvTciXmDMc",
  "key24": "53Pk83qttdUyQXmXcWyeL9WoT4tLKAp3FqMwNC3K2ecoAvVFfA8nuQonwWB4DaU8CmmAuJcs2pzZB2Vujepe3grk",
  "key25": "43RLYjMEn1pYYMiRX6kA4BvAoEBKzEe3SFUa3jR1BVPMTJHSEWNzY3LEAfzLzABnGffR6RLm5JPGsp9NNhTX6oDA",
  "key26": "5HafwGF4As8uUqb9sqevrm54pUg7tcyMgspELBBA58MZZJEzcATooWXvMiW9keHbX5Ufuqwf9iBGKJrLhmXqE6mb",
  "key27": "4mS21dVPcWgXCNDYFQej5ZSxTfoMq5mKQEXznfSzWo3rJnEMnYcD1PzEoTBY8wJS1ueFZVeTJFEi2M2GaGATD79y",
  "key28": "3CgqheCJV7ZQs9LecWDF3qyHyEWmsctqTGQxpxKTgxcZY1kUnkDjhPRRVefAq18ZPtQb1pBGwR7rcP4NjHTB6jLW",
  "key29": "2Nzuywbh6qb2bUy7aKtqbJkrvghZMZ7WyuV3mg2WiabiDh6xX5QCN3RgEVffrZPcQ94yyeN1ijbKo5KsPqaurFCf",
  "key30": "eJcTqZQ2QYuhBhH7fGPvQN5ewbPHX19HSZhzSBtDC5Wy53hKj5nLjEGreuzneTHT7BZ3ijKybfsm43dP6Zp8vg5",
  "key31": "5CzvGGNhoz1JjsY6fzhdnSXEXJjvhRwdvhkXqQsybWk3tUBeePNRfWNYWrZW1gPQkJgNksRjuGxxr2qvJtXnAdKN",
  "key32": "MFuWq2btBA9wKKcndM6QFaNF5zfUzezkvGxbB7rRgS9QhgDfr7CSFjp3e9WaoivyhztGowBfFo4P488yrNwYjnz",
  "key33": "5nbxuhVmv1m6dZ1YSj4PzTmnhrbwdkyEuQNqcbyN73U7imfuajiveyrh5KKTiHEJhePBtYLWCmke8c1yTTQmFp48",
  "key34": "5avhh6XeZkQkTGC3DgQa1Gt4mAqB8yMf3FpaLmsSGNNjP7dJ1xbAGMGiyPwk3cS4mnW7GiVvpH3Bufu9MsJRwp3g",
  "key35": "3FbaeNzCsrWwdqxifQDXzDxCxfwTtN1dbJsVA2EQnu5La4UmjwdZqtRxb6z8p5Rw7Xtyh1Tcz7kvoETtNsejKoV5",
  "key36": "27bLppRbY2SdBQPmPmMgVmKmy2C3w5wcP5QwPXDTkuQN79zDFX2kRXukhZKM9vfA2Q1d64bwtLUtkZfDZRgdPunP",
  "key37": "49ne8ac6Y95Ne7pNHr6JuZfdiTEkPNktKFQV5Cssq3Dan8abnytD13aSEyaNDSRQBTMB5V2TcPHAyixLSqWYwj6q",
  "key38": "5oL15PGBCNNwPSm1NzVUxK2bgLAE7PJ4jXpcrMAmo6uDfEWJg1mdbG7HicbNtXm8Nan7xjihH2Nd6jMUTZ1brewF",
  "key39": "5Sjb8QjQmgSuwgxxsu4LHAn8VEDN3eN3MWUbMWvopGD6EPyxWvfWEJmqgzt8fCQAUpP5nDuDyTXRujR8GNTfQWZv",
  "key40": "2erpdeoyb1VrrGyFVTKU1dhKbV3GnPbkWEJ1paPqfPcHjtp1EGF4Qt4DXKkQ1oSsjz6iudKrrfwvRMwxEtF94Rk7"
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
