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
    "5ZCmLdA4bjjaZpVchBzLipHRqnXFcpuJq26jd6ZipGCKCZa2hQ2DgVJdSwCZBptFHK3rNniA6WFo8x13gcjJwzBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JiWQDJWbsuCVEjgCpWZEesGD4vecit2HigqF7ZHB735ojtLC8rw9dSuvfVfkCZh7hEDtb5HtcFUrPsd99NzeGKY",
  "key1": "4PHYPMRJ84zPRC111u2jQQjRYMPxP6QibAxvgQRNyTnfMJGd1f6jGVJS7bqmipx5zsWEkWCdahvTocHfwFvzfaAt",
  "key2": "65jNF1sXa4HGkHjMJU62xXfuEC3Mf6riChrjpSc6wEWVaFUxAyX2nn1uyUooW6P7XoBqmgAQ4FtJG33TYoeMahWG",
  "key3": "3jP4QHeyzB43MqNUscnDWRriigSdCC635vj9vBujFFfW8CBQPEHrSf9V5A8u9xrVG6cX3TXhPXCdcfxb51kfLG1R",
  "key4": "4Lqma9RXtRSFeE9TygdzV984EjET1P6pHr3nNvBKAEHjeyEMZeZoMTerXDkRPVbMHkrzTdFFzAfVR6teuibKsUbS",
  "key5": "RemzS29nM15t9C4iZpjWjPQ336ifMbf91rCLzaRvvQCNTfyf57aQEBbkXiJSVCmJWWqvuDfCyNGbs4xFsvSgmc6",
  "key6": "2PiUdzUbiwCkyiqCaM1suy8wvuw4NePojEcWreRCPZh28GLGfEpjaEWm8X5mLz7Zvg1pjPNMrwawFkozuVFsTNNA",
  "key7": "3sMUiDZcZCU56MGbPzUXMUu4LBDRx69NbEC3QMj9oLHkGqVE7gbAykacNwSrjs7aPghsfUZwViJTQ4ouKoJuzqMa",
  "key8": "5hDR2vw63toSeBH9EBX1uVk5Fh66AMh7GNouRtiEaCojzAXNULdnKVDkwBpTW67U2eSr9xCEdVwv2fpHztj6SgoB",
  "key9": "44bdubbuvRhqMviFsaYapkYo6hm6DrUtiR2J5SqJVXaT573fGj8Ai9MCzSBCVJnQ7rgPTnzsmAXf2BHEUux3FEnh",
  "key10": "g3gTXDQYff1GNDvwuc7jzKG9SuwhHu8Q1ah5d9T8Ji67HTasATWstpypQXL5EU9gKXtxdGmKBwsLPr2QA4ovqYv",
  "key11": "4BfzNacktE8TjiKjaPMuZ2nLFUBGyg6JQgNnsiRPE312rWEEsWHMwVEibQ4RE1iSNBXnaBekEDag7Fv75qfJc8x",
  "key12": "zsvvhpryPVKcQGJWjTowXMvfUC2Jm66CxjhBQghxF133VNDUhxjz3Q98n7z3eUQAitWJV8i6kUpU9yGBy7ZcsnR",
  "key13": "3ksuEFXLU5cb3PYgWSARQT6TdjGcT329WdRpihvbFEEbnMbHDrrSpqGkwxjnAA2qc8dfaG1svikDEuSFQ2GyXKU",
  "key14": "4VJ2EjJbgCCFDpRwUadxURfYG8oVaAYdyTKAdtkSR1Q6cSiMLfNCYsLtDXoR3MwndUbZCJgKjwRE4jBERq8enCEc",
  "key15": "gSWT3JFAJEbFd7LrWH9fKZgwpFVuNVPkVeGNxMNvrM3fDnFfhdmnQMhZL5EQg9iUAMbn1mCsSnsCMqGDFWDiEBZ",
  "key16": "2ueVnEpiF2fCY3w25SabAoc4pNpmzjJoSefBJb9j6yagKZWrXAa2fGevbnMDnvB9r2SUi7QfwSE2ws4NnqPMdQ1",
  "key17": "36hq1sESP5NC6W8Lgs8XD45UDZEXApHDe6Xh2KcRybkTCEZV5fyPZXg632hnAL6AhnM7Ugo3gvX4HXPnf9ubi6rY",
  "key18": "3ykDa64uyK4zVpuKN4xFbSgU4aoSh22pKum4D8xhdcMZJjpxhEhXjnYSeJkh24RWGKKnDB3Zs767HHsjtdGi5WpU",
  "key19": "4cXeaNuHLxzn34sJkuLmmjRft8XVg1fQeuNZ3vJTi51dQfd2ASkqD6FQGsef2QUEk1LTabChKixGYw4bYbY6nh2P",
  "key20": "3iBoycqoa9JDQ8R8nmoH3kxuBDMRp4jFk9xYTFqPxwSGZdGfBfgd7fopreYUP9YVYbMGesoMBo3w34JnTtqtWZ7V",
  "key21": "53cj5kDJkfY9UhKRSpUy7n2KRmJ3wWUioErSNWmfr8yxEMGw5v8JzEjAZt3AdtasiNh4aj11KViou2rLRDQmYcMJ",
  "key22": "3PHC1ubB7u7emzoFLsij3giicgWJHZ38z9BAG7fcF2KFfAGaoKTBvTrKARypHcaL4msBveAU337kLt1aZM29TXAR",
  "key23": "t3VkyqxC7eycb1HSFqwVdCLoo8zQq7RtTifFy3CL6qoRCgaxuuCeJWEpL6Hx2dk4QJrcET12pMrdC1Vvr12ALiS",
  "key24": "2XAA9VT3Nb1H3utrgxwvwpytRSRJNsnEhhVU1pZwxCALzk3vqh4fVVsZUtat3XaBoLvQvHneaM5aYdfcJ3LD56BX",
  "key25": "48zezJXoUZVKwFjH8w7G8uU2bPDCP6bd2pKNHyMWdAsf1wVJVRyqXQxZPWNnVnVXCwjs3FTGrc4h7ogbrAquEMRy",
  "key26": "5LAuvpDCiB58JE7gm1oX7WTGu2rnVYoR9cc3xLJDDr6LCbTXPqBTGQTepw96BDMsiLXwjkUAc7fc69fiiwHVua1s"
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
