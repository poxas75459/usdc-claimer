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
    "4Toec1XjJv1aoKqMrFcQEtyC7rQhveEhgioMZLyBLV4YDfNEeKyBw2pYAwtXtPJN4hMfRapeeV98Zu9D4VBtJJVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpRF8Wc2LUgLDmbuxoyQseFhDV2xg21nMoWctabsz3XcwvdJim2fdfZpJBUXnLYCBqi7u2xEPeSYReD4WoXJZi8",
  "key1": "2oyq9FpmjHuGdJnjiXX7aaxTcbQ9Mt8PuDFtpBBejDHkY6FfipdU39nUXiqmZm3vwEsZf5FbzZz2VYS47GvDqAdM",
  "key2": "NUoewt3YiaemgeE72jk2coiTmA5MLwFiVASzhW7LLWwi5EU2DEZzRND6pXZFCpS2gWc14foBkoQUk8m2JU1G7gA",
  "key3": "4wVEH81QCoq8aXT5cWPE5Z11SEB8VNNYAaXF9JbSk6xBU6ot8A96KRHpoYUQft52c2D4c3ptNgZYLdjVYfE6SEKy",
  "key4": "3mS8LMg2qAGuYTg18pdwZ1wjdvWNia8wBs616JcrmY1SerSnJuq9oBdzAr7RNgQS8k6ppZhA1UzS7oKpetZYB9Lj",
  "key5": "hwRQUmhbtW56osnuGWNk5442X9sTN9mBoEQL2sowBoiWHY2DtpVSsPJ7MzqT7YAamEgqycqw4GubFFkVzXKKRb5",
  "key6": "RSNANaxaYX1jt6NfyZGN16xGJAoxuoUXh4y1adyKiQdE1mTPALG4e7e9FKodA1AAWdwDKSUX7qxpsuTJjaV72xu",
  "key7": "3Nbgo7PqqHzYcDFqWQx1MSewrJ8gBEVUvXHhSgUFgp6GExNbQYe2wdaYWU5LuFbBncbfW9bSGQUTZ4HYBi9vxpwi",
  "key8": "5qYVXeirtdaGEbBD83XiML6KQLeJX5aspS6KohUHx2jKpxY2RY6m8dwTtZ6Eqxa5Ter1E5LY2p2HT7bmT2d1rE32",
  "key9": "3o5Y8AiZWnnqpcBU9NK14FnFw41HE3riFuZE46SVmNdLQ8Kwtu5BDy55xdW8e2cBnFbbRorxMkQfJi69tetbkFuU",
  "key10": "2Ji8PecM2hfxQaFWQjvxVJ3u3g8pFqq9BMDKQnXUoaXsofY8UhpUxAPvUobYkioiz9bT56TocZyvqPEwbkgUaQar",
  "key11": "2EbwtaxkKxTuN7Z53erpmyiTq7xdVUREjTGpqsepsARCZqLQ2RqMxRYdHGk4fTgkCKdihy96waE14vhKioQvBcPf",
  "key12": "3efQvKW8x9mmMukaxf673MxhrhaYNojHwVLbXjNZAubcpB8UL3QLc8AoxJJ8dyrNb7WwaLntwnFyGGbF91m9Ki4z",
  "key13": "66JEsPFqbfJGpHq7LFebSr8wtnfUFgkzN2W51BVJNVxGhMduJnUNsCgc7xHhGZqz3QMJrXZFWGcuXusu6Kk7RoBp",
  "key14": "36M7ELqBHChqs5LsP3D7Y5TV83GJ9vnq3AUua7Qu62yDGEK9GRj1yZ5YzoUESkJ2LjvxryejNCUJhcAr41BDxHLn",
  "key15": "3RJXebJoMCTgAkY9KnTs7BjrE9yUamSBKky6GdEKVW1WJEXgZBzonMyEkZFpHrYy3zC28akkt4dMkANJVi1GBpXs",
  "key16": "fyMHerREvLraxDU2GBVmpM6nZFR2FUaCLEZy46urmWVhWuQceFqM9mVKSomsm8abbpyya7HbArH7TWjJC9FU6D5",
  "key17": "9DY4UJshBpySwcVS8bgNAH5Zs3jYATG83Vr79Rv1vypNf8XXwshpUZKEqv9GTNw5cfSJrVdHebofJnUseVSuTHe",
  "key18": "5mT6XSvVByiLoDGWL3M82zYqWP4hFuqeeTXvfZU9jFR3z155MYxG8R6M98zWP6aQ1QsPg4Z88GAc2f4iJWh3WdSS",
  "key19": "3L6FqVxyEcSzJUVFsoEvHp6CAycFX6TY6Q8f1Pfx7ge1jFYMTR9Tp9uS3yj2ExeHN3KnQkbp23bfaVYwPo7zwpgJ",
  "key20": "S5dC3MBiCg6M9f3FngqZjuJSPDXAnrvSjyF6TArGPSLChE3CCYGPGcNQwKznZbcYaYNCfb1hcLLQXcn2nMvzR7q",
  "key21": "RePq1XUx58Dqb7aRg7S22XQviLzMkcVotrckdCVUFtDQBoToNafsvfARBHJqtZAUA5dytZUs3vUvyCBPWU8deSU",
  "key22": "2dHdWfPcZbPYBTZaFDpHn99cMRun82SmkdFSaBGczRyGhViVMkjQEwMac3RVrxJ1LbV2kTdZGMrB5GfdY6bK2hTH",
  "key23": "5WFRyRXWyEpAWnZBYrkWV4FiR3WzDRn7sFDPJAb9GXqH3N6MaLfyEVq65hacQNuNwBVgSdoSEFYg3gTLW6KEqhfM",
  "key24": "2D3LgvfxhCXU7tJbQFtKbVtxECjFF5ijsi2ehuuVxDw18nrE1NMoPJNmE8wCGgGMPaGXwdh9AEPz7hZbYLjXVryR",
  "key25": "pQ9Qp44gkS1Jo7pBSkELR4fjdpzBEaJqeK2Zc4MVdFPnME5nZbLHgTukYiPSKmoQTTbSS4eEM63QKBbwBiQv9iu",
  "key26": "CxPznXG6xA7U8ia1sjkUCwxkLhUAmnzktdzTLbBHDDHGZ7DFqe72sdx68wBvEWYFbtTBuwHw1eqyntkUuvZvShj",
  "key27": "61p4HcxBV54TeM7ENb1YMoZ6pvoVb6khyT6vHS5kSg81UVE6eAcww2UdkTDSr5prMUrM3NjvAPyxCZc3GHbxTpik",
  "key28": "ihWkFeyDRU6KmEwWJ9aJctAPWxHBF4dTgdNWN9ptbnQ5MqdFBoNaQFTNw6fg4wW5cai5zbVsQmqvNurK6nEtTGx",
  "key29": "3XaxV6o8dF522QWnDYvcDSkF5RibWxWU3MtZiGD6wGzvKSBWWf8hazWkRDEv44ZUX2AGVg13n7xqHnSUiJzpJTff",
  "key30": "5JmoTwwUjbvZuSQdGu9uET6xLTyPom1Dub9wkMgN5K7yPSWQ8fFk4eiYZaLuyLh1Pe3UZZW3hFSbR1K4EgAqvfJU",
  "key31": "5nuMv5JewiRYjXvQScewgRw4mCE9Q5ymixXCdJBNWwbyyrUiZLzVCmX5qL9NunNK9U8xQ7rgABAtYMnqC2XPT771",
  "key32": "2oGaGDq2DkdRwCGNg4LgoavpMhPNQhfubj124Axa9v6ZBwrnPHuR5cEBmVtt28Z6SD99tcCE2ogNLVMYRStasb4z",
  "key33": "4xMiDqJFbu6cCxGyArfi96wKzq5zd9kSvtDda9MsJonA2gPQniKoo15Jipc154hiNydDvV9xcayw1uf9CEVaNG4c",
  "key34": "5nuZrJK1pf62obtbozWCjUMNhi89KeK1DptZRdXiTX5omupagaFFLmZYGtDPxGAffzvajqhPu26tGtxoycoHpzye",
  "key35": "pReWVcbawC2usp4ykNFiii16drPtGPyiL5Sdq9NgyEDSEAvQhk8ALKLhgBL8AdhNrGy8mpATcFwSuZiJcbCrWZF",
  "key36": "52WeXcHR3Qhc671Q8AFQVSD4iRKCR3QwvXCbLS9zy7u3bnfbMsKNARsrFPjvHN8QGhEAYxXgMaZYDp9aVDxx3a4",
  "key37": "2c4ae8hmSDbHVw2V7hgZYoMHYFaphqxD3qevmzNSuGMAZGZTPLZgjPb5DUqN8W48SGYzX143eALkD1T3P55THbFv",
  "key38": "4PbGDduWDKBG4Maf2WD552iZKAqhxcWGSU7KTbhMrnUmdTmbHHQRUpt7hESt6WGj3fT6SPYC1J39cxY9UqNkAJid",
  "key39": "4onfkydDzktHUHX9neyGRRh5RgwwsWoAJ9haZPjzbTbJg7WriNWvmpj7LMnFTnDqhRaEVLSF7HgKH9Qm8N4ns3Pi",
  "key40": "2JQn7bTitfYjgNftDiAueThzUzaZdaem8H8yArXMWmE6pD6m2UU5iVGg5joeENBwenkrZtZhp8BoFYWDKd8LugVH",
  "key41": "3Pwm7GQtEQrYScUggnTLNjmhYEMmB9ogFrsu9d8quzkdezaQ96hEZAWWioxV7YiZ2H8jvnkDL9763JQUf2MSZS9J",
  "key42": "5saXKkvsFUQ7JaGwSTQro4aWkWmzitYosVdhXFoweRZyRZEVTGGF1gmmg5dXMTHFw298kdXu3J39iY8XvowTLyCn",
  "key43": "5Ew9SvEZoy7FuqfFLmNT7Yg4VgGYrvYsiWo6fR7hp2CAPxza6FXm3UVnDYsqdZdH8KLnx22Abbao3wRd2Q1EHPu9",
  "key44": "4ukSj2LknfafvCR5fnWiHkPxnsrxAergJt9AHYsiVymJXF3KXaHb5u7MabP4VBWJd3ofxi9Zq9Qs4EDr8dXNCpvM"
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
