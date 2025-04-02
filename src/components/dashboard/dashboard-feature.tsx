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
    "VJmjiG54oUdLmrKS5phPihmbiKgc2NNC1e2zNuTERMKom7Vn2Wasz9VKJj44QrabuiR6NmgPu7YChEYV3pjoGFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SEfcJFLkDNg8A1cvKXccKLF4rEX5mKBEdR187PzuzczKXXwNgSkkfHm7rFAzo7M4C2NW1Gv5fEyew1fXCtmJ2tf",
  "key1": "3bXgxiTeFocbudypRqg3ryHjy2ioWn6hGqh4rPVJ2Dnmwf9nbzcs6aLcNxi5G4DYJg9AWVCAkGonzWcDVSSLzrRK",
  "key2": "dDwc63wzK5eDbMfe2FcPC1XftnaJuXqBMCuJDUYe8VkJiYATSSTeS82sRgZxDKChQvVwjw9ZmcXkN9vETj4gp1g",
  "key3": "4ECeaH6v3gnaSKi2NVBnTv7odJMpRZjzUBvz7mg9yFBLhNotQZ7e9QWf1At42DPY9dNsRamYh6vWVWwGqeYsMemA",
  "key4": "5eBGUbsonW3cCHTYEXt3wC4YyRszpnR9nZsGWd2e3UBpn1n4VDtbcEXvm4z2Dw1Rb7SbmCV4gpUjR1fHsxf3QpNW",
  "key5": "4uyX2cJAn895ZmFbuBNQHCa6NfB2npKoBdMBPxrWZPzECND8SjJaWoLhZLiQPu1adhLShL3zfNFcpgrJT2vXKi4t",
  "key6": "2oSqsdKCnPmHY7GSxFFNrWevTLLUg93Rm2unNgT1QXbHKNumUbb8Ti8KRKPPjoWW2BHWpiUdkz3n9gS7GWBPju9z",
  "key7": "4xbxhJ5HYffTSYKj6bZMiJ8L4FMHYbgU5fcK8vw6eoSuLB7rKGuxEWykZxpXP1tiWgSGZ7Mbaguq8xMo9VBZ74BT",
  "key8": "uRGZLtFBvHr32myCotXe5XNB9AMv4pRDh3JshKSe9sGpcxvAkG9MJsWewsYJPk4CmxXGBzuoxT6PH4zg8wzjP2M",
  "key9": "662kHT5QsyYLmXtgWQYE3GaREh3384kye76sQTK8dp7RHufT2twENWYsGZQHEnAWMszp9D8tbvbPnkbNAskDwA13",
  "key10": "4Yid4ALq4TZxfhWMvWU1RNvRResTC91ZBPk3S83rNeJ2hUDpdvv9XfTycEVGV4h85CM5fMRDSWhiBXTQiiaJdBRt",
  "key11": "5HpUrHe3Jw7sQCnGy2wKwQBnusoVD97evSH5uqhFQYy3Bgn3JgVDhPBksSuvBmt9Z2EJJk5Xc1U3KchTyk5PFw8M",
  "key12": "UqVUYh1R8u3yHb51qNiwcPUrajDPk4dmVMwPVhwU3dUxVuXCPTawAkGy4WWK5cy8cb3NbLbEVvY5eFF3J7vE8fR",
  "key13": "Btpn26r3MXUm6ViSebjmdV7iwER5rKRsdoH2rngV8rB91Qy2WwtPrhLbaxC3gvgDz37xT5KLWK3X7ZWLQuFZRNt",
  "key14": "5iFM7Nu5qYzcUpm8dThYKJX62QFVaP6MsjisNQSjgPYKeEnFckNWQ4Lo3qRo5ut5Mv1TZALg1NM59Dci1BPzYe7",
  "key15": "RR8GbyyqB8XRYvroEvTfdyAA5FG936DMmMy5B3ZXv6nVLt8nYNHjGJg4vishZgPv68v6omJt2Lyefc2A5eRUMVx",
  "key16": "2rttoV1R7foj2vcKiksLnSnwUJWp6mUNAiwVcEKEVqqP5vXkMwxLdgdMqpH4YkLn3urq55o1jM96VjENpujqVqZa",
  "key17": "5y9Xo7kTrUL5fQkc6kxQaz5XtwqDiPBNrxDyM8ySVEuWXycXG1P5HDidJcHCZM27FViNnzF1cNUTJYBMdLWLBZwP",
  "key18": "sFZSqLtBFi2m5tG2BFKKyPqZJKnSWLYVLJJsmjy7pcLzVdUEY1TpANNUJTVjuQUGBQ39u3szChzMMvSZJLzWi7f",
  "key19": "2EDsC7QfiMjvc55NW55gvtuXKzAEd8LtAmtyzv6QkQk7j1KVqWAYbfKwWhbCipfxk6BRYtuiV7BPVjL2KGT2Nz8y",
  "key20": "TbpqCtXs1EDPv9sZLkkrrZHa1AMpqazFB26nhNXc2BsSMZrmpDLWxTqEy5vdRH4w4CTZgbTVGj2pk6GudM4zhhx",
  "key21": "3p9n8XvPDqxpwZ5Dz37DZ8yFaoqsAoCcNP4ucXMFBVmi7yV2Q187r5BvsoSFeQVC9ogLAzP5sMq6gqvRWeXB9W5Q",
  "key22": "2AkEWi8cYZh2yXiksKHCNoXyq9wFTxDFUfiMV7tPP6ku6DAvmaZ4kYx8kNSjpzEUMRn9zj9YbkSePa7ngDg5begd",
  "key23": "3twi2LHC9FbzpcbF5TXoMhsygZTcHUniqyfWLSADGGrF2TPhqrEptX26HYSLu41bgf15EqYgrNqvvfunBuCbjHfc",
  "key24": "3N3repJa8XZwABouqLT2qb1iYax9eEby78FW84CXrfk8M7yjMNUHDVER8yYQvp9AQFeXK4F49AafPr7mPjv5iN1Z",
  "key25": "AqLsjXmVQ9q2dbk6AkqdFCZjVdYpsGHCrgk3aBC9BSDieN73yqEuxeJ93kovA5JWMF4HU6ALYmmRT8hCRN7DYqV",
  "key26": "3beZfWk5J5b5D5tPTbkwMW8Y8ggoErNEocsWyHJwndAS3cvgevBnX95zYW5V8rtW5rR5tvRkV2vzdEmauo7CJNpt",
  "key27": "SbGBBPWeqN59o6s1vnAWbACKSiuySCN2X9i4RxdYUMpraHSWLnZ1TXGBJbip5DZ6qnwSAJBDpB95hxqmrTbwNEn",
  "key28": "5xUYK1tabfB3Wr24pSDgyjj6yLfq3PpeocA6cNLcEgsCUz2CpgCv9dXWu4ErXhWGMLMoQE6rEnowsAPkf5AG2XXn",
  "key29": "5Hsrr4z8WWDdu2FW8x1fT5CRWVgvDpgcSmv7aZkWcWWALsaEapLXjCtHgDriPjDfYjAXD2n6XsXwWF8MpEkL9wa6",
  "key30": "3rjnNJCSVRLGbSy9cbhBAwqXxVSvwULayu6bEyg4ZLFxWVhjBHfdPMvgVPHYB3mifGRSq96Au8TrFrjwtBwekdd1",
  "key31": "49GQjYEwoxGaVegoBJzhCVNK8BbEForSi3rgiK2ruHHjMYTEWghs18MAJ6ZnTj2CS87DGNiZJVDxd27AFsqCPraQ",
  "key32": "22CDXD4DB32jR7pgCxbRZo1BRDyqQJTkoyiTEVukvUcSAP1SiZk8a6BH9D2bzBL1TgSNwgTV35avVhBintRZcWzT",
  "key33": "4eJRXwh75xqFM8aYt2uV9pwrXJ1FQjaMTmSRGk8WK9abnCVifU8ZSG7jcuGwoBu6DKpQ335vUHwZGfzFCR4tr3rV",
  "key34": "5tJECoMUVsQrErvQWiaJJqCqPG7bkCeCSnXtQ9W6NEH2j8buEoA25NGt3kF5ZpFC1qMYbkqptNK6kCyk4eRXbvvm",
  "key35": "2vkCfbFWKk7E5B4oUhWDY7zUebp8ZL5gk1XfbfFDy3DxArS7NCoQ4geiuuybRD9wtn4ez6a65jwwUJtAwS5f3NJK",
  "key36": "487HqGCZzPjhLCNMrfnyKnKUVXvHLdCmvZpTUoLgdXThfAjkb3aEyanCGFmkrrCE8aXDqHjT3wdGRFKz1iPWveX4",
  "key37": "3N48VzwHpdB6o4drdVTV3m9t3PujqLhqLfMMeLWzy79mSn58o1Bw8yeQB8fBTpfoWMdxp3sNGSp4hd6nhWij4oJc",
  "key38": "5pcwYLRJdJdkzkVhzJLU3P1YBPnEDwTU8PTbjgyJcP2SmEb4g4Z5miZzUUfJtgJ6Wmb6aPLjBVPoVMJf8xbfHRcP",
  "key39": "2RG6vWTtWyZZe4E3PjBqLD823jef2ctXqmozQnwJMpWgQaZ2eFrdnVCCE6L7vD9ZruFXYrouTD5XTPniY5wYrM97",
  "key40": "4eRpQZbtvTjw79gjsNhRk8cArrKQMrjxfEcErTSR4jPosjgi2Gvcdj5FozxbHi1zjeYtvQjJd67FwScXVrCuErUc",
  "key41": "5bLz6RzLPAtJsd5FvV2eD3TXSEnARZ29zJPCYJNU1MCrQZjpKdnoq5oF4EDJvJeD5v4Zo3q1EPJsA3homdfCMv4J",
  "key42": "5F6ueKoih8dC8fXmJAm71rFjP6c4GBYSF3GUVefKaLR5ciHxPZ7xMGnPLjC6nAE5L2KaMAAFL6v8qKAqyP6s6X9r"
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
