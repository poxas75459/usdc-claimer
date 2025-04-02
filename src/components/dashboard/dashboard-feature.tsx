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
    "3TXQoZPNVb2iAD1CNEDcCCBcAT7BPH1iHeWWwNonDbaXHLi29puxnKaWXAzjt12ELj47wzwRovKViCxZ72PzBFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iv4xsxxcBWgVk7Lxb87X4evZpzFCap5P9ZrSpNUs4TJdhP8SgGWL697kMBkesriBS4GJzcWN7WRwRw81sB6tv1X",
  "key1": "2xufmQCdTs7UZLPSDDgJbrGaajL8cTKT9oP68bkoS8ATQxaV1gJ4fdCHGf87zhrkuUCy7MPx5s4EhtGzC4SKfazF",
  "key2": "AWJ1r2DZbQFvvgfhfAqr35gmrvnycHMvkCQvzqxA3WyUziWcQ6sA9hP9aSSnURADdCidkGCC5BppCrbeQ56APEj",
  "key3": "3eVyYHseX5K7BfSusjFF3Tq6LurdFVwjumjBjMuTsCDe97Ayj26WDUbwNttjLdD2Y19WkQgQ5tmZ8uvcL1MGxY3E",
  "key4": "3FK8wByhB7NMfzV753kpEBjaU2V1SzJn1Y9oS1n64ZWsXjZuj2N5bqFZc8Co4djxJVcjT3ZAcU6dTFsPuFvz2VtA",
  "key5": "4fPiEwBjPPUariGchcUwLLxpe1Bvr9hY1CRzcbmxPTnGFh3gBhfDHgiciDfXjKSBaLtxSx1Mv7qmvCfCEE8w54tv",
  "key6": "43y4gRekmx4CeFvVY3zDK32SQSsGsJuDuEGWwZvSU4FDSLpfGJVAA1XM8kGedVxL4zp8sboeEupzJc21P8Kawfhi",
  "key7": "3gBcL55zAqfzxz6o1zXvZGzKdVdE5qpcYcD3yGo7oYUkUb7KRTXU8YV7czout3kENd9bdoCXZspwuXf2aj7TPYpw",
  "key8": "3vuNYRpdAz7LPGSA4FjY5CCWyAGetKn5RZjFptCyoxAyw9z9jxiifGxvcKL5dLd5D4ywjLujeUZvri3rhgJLtT9n",
  "key9": "2ApbKbc4sUGs5rw1f5w35fHBKYNLrjzFCMjv9Xm1Bk4rURtycqtdHrrW1gJvD7FZc1KQM7J2LHGsJvqtwaUuLtQ5",
  "key10": "4kmyKc4QnKdQnBp32mCYLPQwajbAQgi9txgWVxfEJ8xmMYi2me3JPTtTJCqF6EVGpxcEGZczCY9PAxjyG9GePekw",
  "key11": "5ns2b5ywTWVwSrmGydyEnCKkYUud7sTtYrAfv7fxdbiaxaZmvgkcQQifa81wUGwFDnbfWFMqTLd7o9feH1ZXKyeQ",
  "key12": "3drhQx6wxEe6i91c9iZoeCdsVYJBH8zYp9Td1Fc7bZNFQ4XppR2noSJU2d3a3yueamzWkqbWnQtEahmyziLaT3Qp",
  "key13": "P6KjzJc7D4ELfdHc8VawzokMqoMr2PyCHs6Lw7Us46DGX2chtBqtEk9NfnJRk5dy56yMSfPGTEDPPH6woEEUTmz",
  "key14": "T3tfRCYTFk1NidTxWcDasX6VobFzh1gYu5fqcB18Kf8WaCprE6Y6Rtup44URKQ5c1AMygpqZnPrAPV5A7yiEqQx",
  "key15": "3vVEsoYAqgy2gyho7QYYDWXsK4y4zJKNMfNw9xaGSXU83A4ekDmLXyb8K7XxYRDT1d3qYJuYa26WR9cey5tP9LYZ",
  "key16": "5czojJrdkZATCK4QoBmedB8JfCNKVZw6WF8NeamFZji6DsnbQQW3VRFCo44qMjQJoByE1Q9kAgmHAdkdxdaoPK8r",
  "key17": "216HmKUkwCbViBmgn9aMRwnxhjss421Y9oYNzSGvCRNpxMSySp8ZeJFMZU2gfKw4sxAppEhn5YBpqVjgPRTBGo7e",
  "key18": "4GSa2fV3Um5eNYmDAGmJ1NL1Wf2bjR2MoihPB1mfyVp8G664ecocfHRq7wnxre8tjExeuNk3Sag1oCHH4taV7xqD",
  "key19": "4M4o17p28bRtm2xP2DTjWxHe8ZdjL4UyaYZ2WgzgcpLefZQprDR6HT9sHgcmTNo4nci1fbkR6DeQ98rzTc7u7Fyz",
  "key20": "466uzv24A7TKS3p6LBfS83byzqw9piB4nkLvhiQ4VoRj3DpH6DDrxyt8PxjGRjihT2ga2GexquPP3sfbU5FMjJHs",
  "key21": "4ue5PuGyqT1RzfteyidBWq6z95T8yim2SNxHsXkZsWRzvP5ujMtoh46SNwnfFuN9gnK7JCbqYgiCgEDEYDEbtRbV",
  "key22": "5WywAbZNfMDnvKffq1t56feBoNUYswEmNtNwubVr4vqCGGD2Yv2D16Pc7cnJz6Uj6ksNN8fuUuHcMA6P4mLea9i9",
  "key23": "3jxKKaKB1TgK5364MgdDs8iH8h7v4LCt89n7dtDNUf8zSqdPdZRv5LqpbZ1V4z3QYchihee3EMYYW6ZXGbH8nnpV",
  "key24": "5HEa85ygtuvsZCn4YNYVGzLEm1coFwbYaCouHJ1SPKyKWwmYipoq2icN7Mr5ogpCUDaRqDf56ZDS2DD3i6eRJzb6",
  "key25": "3GoTtsRe8nSv5SaLwtbLe8VbTPY5EDPEVS7yFCtm9VFEG35VFTX2NXH65taSu2rgSBeJc1igXe4XPHApeVZ6Ln6v",
  "key26": "QR62EkgN37UMEz264UtDLUtUGM5tyWvZDRusTLScup6yNSADrTzDgEoM5pT3XL3mGyamU4rEx5NyUfMzwJb39M7",
  "key27": "29C3YzgJeifSxHdw5hR8j3QD6PkupEik5NeAyu3PdyEk4KyiTaWuxYi8pi6W2E8Yv1UocN25RDBBpbu6vDVEJxup",
  "key28": "63RZujkF4NGS7nRBerhZjSUJh9FmYA9LSzn2CcvPMtmN5k8sSbcYoWV7jp5bgAS8F7mNBuFfBkc5QNZPoECp1N2i",
  "key29": "3j7tqq54oEzo3v53jopesJPnJT7dPRwsdBUvhRq1kWmiDgoLzrPYdP7t9AhSGTVyq8PK1QP5Sfm8pjx62HwnbHJs",
  "key30": "55nAC53NCT1J8WW1zEZRpzJrT1xvSpUGsaTGH6PY3G39rmnjg7FPjyeEgPFwvGjRsx2rSdoMoP3ZiLirBwv2NeLb",
  "key31": "51uPtzJd3Jc9Pf9u7YzL4dd7dGegPSvnDkU9DpDZnzARSD6gTAdTBMPrzUTkvMqjDRyXHt2sygByZWDdxmhMGaxZ",
  "key32": "3bfPJR2XUKHeij1QYzjMJrGoisyjYxs64cwsGYfiSTRb79jhCpcoe1WHpGDb98GamfMhgpJDFJwdLDDATWZtobSH",
  "key33": "3oxm6CxGP8EfjXC7G1vU347hNPniXioGSmq6GxdmefSX98AwRJ2mB4ukcBpysQVgvSkM5rUXY2Bq9h7Y85SG8Adt",
  "key34": "441upu6bLRA98fBVYiiwtqvQhCuehssuc2BBYKCjMxfLnbqkZriMkQu7QAuuxDfG5vv6LUzYtKaudcs1X5FZ1toe",
  "key35": "5iZTyJ5PeBUiFVcpY6sqC2MWD4QEXRFvrUaDAamE2M9fZS9BCEEsLirRJfbYCa697aBbF12UERDmtB3eifp58esx",
  "key36": "5hHq6K3sostmMbxVz4XxmRSL7562FiY4rDf3NdZ5EFCKkBbERh2KKMH5RDEn2exN5EWHUVyk4UVyeQcgmXhxDpTt",
  "key37": "5dcRTo7372yReBfZbnDzPyrH7iWRVwMauMoEYwPia4Tmc8jkwRn48f8h4at6iFvMBuZPa3ufYmP8DsUPJnQf3MNm",
  "key38": "HZXRpV1r6xLrW3ib11PCYhg2BN1PsU2qxBzzRaEoX7BoLqqADJjYaj228tsw5ZFUmYuJFuh3WUcVmeTRUaiE4tG",
  "key39": "3QoNb6b7Rw23oFAdhfGTfku3reWreCmgdyzYDvKzSpEgNxNqUGrMiHT1uH3J5k5RTmFbmLKNCUJa9uXoouZ9woNy",
  "key40": "LZwRiCwgaVTeLZGVSnHc59jJV5tnFsveRotk9VuU5txq1rwQNjUJsgQpLn21ZcF8eCyra3eRiLzNKe3AYAVqK1G",
  "key41": "3RN8zZG3abnfSLRA1mPJPPy7jiAWZqNBTp4BBoL7YQsUcdms5He78cqJCPeVamSquyEJcNUb6qNDPeeb7Q3wzf5V",
  "key42": "2P2NRnEzARkRSnLYfMTbVZLjMK9aGQhFmqs1F4zNDVnidukMdJGFBkodApE6kqHgccGya5jy4Du8oCAQF7fnpt9z"
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
