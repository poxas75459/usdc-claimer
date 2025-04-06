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
    "PMnyK6dukzEfUVjuVCR3KpGQuqsYE9Q9kVUiYTaPfN75amuawxUeTs6jk1nEdhQ78dvVsAkpJi869YEHiodDvvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JeFYgdc5vkeu6BeMPKsJwZ6Qe9y6kA7gEcGhX7MU2Usi6S9PYeEsLFnjQbL9vdqVneg4sW7q7tRbe6FECsEG35h",
  "key1": "21cxcZTzQMR5uNQkqT5M3zLWGguoNc1JaeJXAEq9A1kcZ6pEN12fidaDknsM8d3x6t7NdehAvWe8pAciqicaRwJn",
  "key2": "3phS1zrMGyHDG1Ne7pymVKHNafSs8yeiqoBBfCvR5QyxkRwEL2woZwLiwfzj866o4i3aFgSdMsazBCy4XM5EWUJ2",
  "key3": "5E5p7XFG843mKM4BuMPrEQdmz1Y4kfE9wsMHmiY3pPRhHjU32VAx8wmuL1oK3FZ2RtdWwZK3U6vdaYS1SaVk2M22",
  "key4": "3E1Qqs2ffJMhr4VBaf7VxRbpipitQ1rFeGAMXRVQZR9q35Pa7tPrgAbuBkwGmJx9XTjJRskgQNojVnU1b6coEfAA",
  "key5": "HTZrhLNgd8L6T2jAQviomnJwsuHYyr1dYAeS31rvqtKZoYYcsGd3uXbdxoTcECu1adyTSkYUh3MiLoroVKuK15Z",
  "key6": "miMQzfhspCwX3XQxQfkECZJwUkuMbmFuEAZmTvsMyx3RaoMzuBrmhhrK4e9uaXFZAeo3ekr95FFviYdRKMEvgU3",
  "key7": "2d6W8JnBSBTpZM4zhXkHQP2jQghCoTYJcE8YR7ZWiBWxwRoV1JBQ9qjto6YUiJShSf75vPTyferdsiw9e5waSDxE",
  "key8": "4Xry8Yh8qCCQGYArsKcFLKo98RjL9SraXCNf496CSCvofbR9Rursw5Mpe2EpxeBi7FYx7W3aKXJ6he3P6xb7RkCw",
  "key9": "4MRvPUaTj4Fvfhq3RJqdkzxUDDC3RjC7e7h1QWyeHbfCaJX4qdoDsBfHyaJU96QLTUv4XSC6j9sx4zFNQt99sBaX",
  "key10": "4kpmw2CTFC6BnebveNN55umwMaLfeoHSbHhDQE1p4H5H91yWMH1BCEntqzptsnjuC3ZwjW8f7nuQeHrCYnPvwphA",
  "key11": "34chTCw5xX4TYe5WzvQefjaw2jEoCtt8iR5CtBgQpsXLzDc8sDc224Hp9pufNhkDF9LbaT4u4TowpgEYvim8koLq",
  "key12": "5RkUtUcfmgPVPyb9yxj7CJydYdL6BUSz4bcQqgVrzCXmmDpxSxSka1tScj4kycY4Xr7VEahb5MN7p452ZavXLPNx",
  "key13": "2BZqUFg3DXax5nRZknB6qQrEfnbDsvaYPw26ecdYjnYizMu3wa8GTxbDiJp6KVVtXUrYgu5VVFDkcT274Cg1FLej",
  "key14": "2VLqLCRAYTZuz2wgVNjSGFumVNXGBBz5Uttx4CnJ3qbo1S3fPddY2JRTLRss4eWAqX9g67VHNkT4TYxRfKdE8343",
  "key15": "4KwVr7P7r7QqpEv23Wb99TiBMRix8qpBvh1GqXbr7KKpzwhWn896VApKMrsr38v7h3FRYJmTDMcXrk8ad7CPgdcG",
  "key16": "5dz9equY7w4Vhfc3QnoitT76diWREv43cbYDN4fsCrCkjAwtoKgyTzDiYdyobGybxZxiJv7g6JvYk9cEcvCf3BYE",
  "key17": "5oCtinR8cP35wehaVL1Du3y454rHKjJC8kL3NvHiHKrP9HSCErTT7FgkJXaXSfVcrUpYohUb9S96UUmfEqUocRk9",
  "key18": "2MUpMai6aLNsuF3vZBetwZoriTEhDtMCpkXJupTFq5wYbT4nFZwPjc8zb8G1u8MfKAG7wiTVLD7CRYHpNtwhHp8D",
  "key19": "3PiWBSC4NzUn6JWve9uuHviwqyz9rqNYnYNor4TpffDyCDioYAKfbhrzxrd4PHm8JHJfEB3SCQvygUe4BzwVvc5f",
  "key20": "5DCty7ndBZQGZdBLLwPoEn2w55HbbAm4qKDRZpTBkE1QmSxnoXK5YC8nXR4qaj7Z4tVM5E8wXEbaYG2Qe9rEfv5T",
  "key21": "3TXdNPJ33YuyHZM7PNbXSCE91ozBWWNubtyQHPRqyXagVsn1jaoEqoSxRKcs2P4qSDnjKdruNmvep8kbY7k2biUA",
  "key22": "5gr17gfYkMAaSjsQHe6rpG5cFwAwKGzacnSNzwV2214Bv7m3DY3ddeKogkPhapTMoQJLCPjDduRBNWkyQUVAMnw",
  "key23": "5nca3NJSzJEmEUfUfLEif7wRk3R2hyzGLY14yfdr6DBPAEAhQMvHSzS4EEmuMdVHzDExkwBYq34wKfYsyYdw3EZw",
  "key24": "4cspZYdEjfqMatRttWr6ocsqYEpXSjN4Toc12JZQZgvSSK4Z9jSg74oxe4ZHDJjJKMBcvUBKAGXiMX8fkn33zqxd",
  "key25": "4ctHyuShowuw8Cb31UAeLioijCXK5dciZHEpJLkMt2A1PFBReZcZ7deo7CYWw6bcGoP7Kkgy14KobiV23T6XeYp1",
  "key26": "3zGA3Ubr3m9p2FjGyzzq3D6MYrrPyPH9YKAbKtHTafmWmFtJj8QS8AuXxbDFmhNkr2LxZp7dzVj4GkxuUMNKXW5z",
  "key27": "2BD5YKvVK5RvZPztPFgo1ss5t3SUkMEMvuWD2QKihW3cZvP71Jhb3aiBU4D3SeSH4VhfJdj68jPrV7UWqzKJAAjF",
  "key28": "3vDAGszkLextqdvEVYY83VYdgaUg5CaRnaLx5AzQD6HR64neA3zDMmHCbsQ3ub8kW9vWbFJwj2xgrGkctCVsFVz2",
  "key29": "2YyLpPK2H7b8DQmnawXZf65EtVsHDsJq847xgLeZgpSbZaVBgqSkDnfn14LBGq2TKbEp1X2EQ2ywYy7mpsPRdSMG",
  "key30": "2JECceGbMwwUzXLUsivj6siYoVAJ1wLT5uTvQ5DUZzsGe5uv3SLM1LUJ4yusat4W8tjdnQsjuqy5bYhBscuHmNUJ",
  "key31": "26E77YpV5K9egbd5ivpUdMa5q78kmz4fkmwdexJGWJMnyM4oQSqoT6woTdd1WZAc5v6qykBCEDAW2HDTbbVymWq2",
  "key32": "3PJpQNVC92PyRg8S2BYJqdCe4VPXBPC34c4zKeZrBwwdJQcM2gHKbCncpaG3MoULa2w2Z7rfkKMctPuWweuhZipa",
  "key33": "5DWn8RDhKsySX65rxU7gBiQC7d2RtiNZF73CAksDSdB3oWYmXXS3TMEJZH9vVkEwf9e1nkxaiqjnDTnVzVxWgYpE",
  "key34": "yLB8Vm68yCcNBQqTQvKz119dA2qCDKm7Lo5aV7VJvwQ6xxDPnuLWEFmNtKweErWKSnuAyRnUYq2ooeHNxUkokUH",
  "key35": "2SQoLsg5grAejErsX23JdebyWTTtiE1X7uB7sxVeQSAFrC7L8mbknYmuqaYKSV8JsWyutAvE1nSxHh1z9tJwRaG2",
  "key36": "rRQ1YEMrcpda6f8SDLWHd4YEPDy4BACxwNP2nAgoEgs7sX7iZeqh6ryTYoFgDea4JdtGXq5qjDiDba3HuuWb37p",
  "key37": "4nFnjoJo19vPZKyqripDnE8vxjPVbtpHVL5askkKPeYVpc3Zff5vee2p8kYUCD6NYU279TbKTRsFUqsSjcWW4p6K",
  "key38": "2D5sE5D6WoMRwr7jtJyHvQixK9KjGjMybVHjyPD5vLpSNn9YMdheB31TqRRZj9gwi3nhw8NHdDKVX2TexEj2EFhe",
  "key39": "NFhkKVu7Hsy5BVvutzydb6w4G8kbPJA38aJq8AQADagoVnyqg5UTKegrzogLCbp8ygbd9FaCW7hh5SG3YFm3ZWE",
  "key40": "2WrGjmubgWZA8x9hAzFuhwUaSaNXjeFUFcfsXhUa4ohxFnTvprTKpsGihaVeysKzRWUTX4Qg5v8L4yqsxuFNrUMp",
  "key41": "4JDnCFctbHEaJwgvMJosUnj6VFhzdaAEEMUcbL8Jj8x2Bc6bQNP9AZxB2kLkVkybZpqCD2zGSaFzeZZudYeeNmoa",
  "key42": "2TBG4ubhzHDX6rSZggikz58nAohqyaFmUTxUwsMhhfKbyabvE3FcmTbDwqaSFXCc9uVeNiDnV7oGRRYKX1TrXCsV",
  "key43": "3evyDGLbc6cKQ1a1z1ggerqxQsLty8s9TdTFX6ewiyP7XgMj5Fo22MJfV8EAc1WeDWpQ3f6YvL899Vb4Wzd3dBCG",
  "key44": "2THiJiS8c7rv2aCmX62So4q9AVytmP91FbCNw1bKtf6osv15iZjqbh3H4Q1s1Si5WQsjLGUYdcZgJymHvYj4JKRU",
  "key45": "2bcY7mzB3kS2LhDQTaFN37pqRZYfnahfpTkEKJKUWp21bgsqqjKhCs94MAW2zLGZMGRnA5PQSt6e2Xwr5tuAhYad",
  "key46": "4BmjaaSnUDpE7sbmUvKQfLu1Uwp1Du8dZeLVvY6kgtPKRUhZ72RiBygJ1RdJfaFT3w2mfUy7wTTn1SDfGnR862WA",
  "key47": "5CzxnJM93ZHcJLtjAJphEnGfFeTHwB7Dd8JEPCjxPAAwePAh1ttCeKWaxdMhKQnZisoCb3yigWwsahmit217GRRr"
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
