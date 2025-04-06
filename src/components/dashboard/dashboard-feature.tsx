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
    "28S9acUHKWgR6GEzveMbVNwcF2kzLWkZEt8gpgypQ7gRe6DQxVyGprYTziBp9ZMVK4u2sLBh8ZWG2rZ5jcNyf3kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35GuFw8cCay6mjyyBAULEPysT1ocehob6t6qTPWs238o4BQWaRpjdVgZe7E1BftfZJrgh5HsJWoGTfSNiQvbQaGv",
  "key1": "3EefkCqZk98dHx6RWArYPz2jRpMEB1bkZivSy1Stxm8QQkZ1NEMc8kFUuQSVQcLdnPCDs4RvL99Dzmfw5Ff6Avm",
  "key2": "3h6kPgX3iFwVXdn8WpYTARDR9QaokNca67pgm9Ri7dZ4HJNUKtwa7X26CQLc1ToWFuQr7pUmpYEuRUMucBysVwo1",
  "key3": "8rugbPxr5x5Cd118wfTMPoqazem8kMDfMygxEUbvZMdfP7an83kBpZh3NTjXya2e6kMoxwH4SVD3zx6ji8TCXHG",
  "key4": "62mByjaqTRdLE7T7Xo6CQubeckL82K32no5AJnaSCiYw1W6DykuL9YJrgGG2g2CSVVNTqWck84knSVqxSLGd3e2h",
  "key5": "2zhuxozwf4VG4kiMBkjNNiPJUzgS7U9it8dDe4ho4kpJyt7jSydFPKpGFS1V7qz6CgaE36WBQxmmuMrrGwoaaveB",
  "key6": "5KTWFi2a9hBNhQE69UBMxjBdQwCx7Gtad8Ucgmtt92qq4gSRNKdgvB6227NUKgg4N4XxkzqvoNS1zMAaqbgNY5HR",
  "key7": "5XiWj2fRSBfZDMEM6cXynfogyFpvr8RDkt5mNxa2iZ6bYhp6dzB6cHTKuz2CoheCYdje3pmt8fADuh6X56Nmkftb",
  "key8": "56muGYC6qh8uTTARqeGU8Zrjj9CvQcodECgCVgpFvT9KFnYaP2PFexDGAZDfdzgxMekB6vEJaJFFqn63sPBTM7eV",
  "key9": "G5ma5F3qik5XhkCtSAnsYPt8aBxHZBpGmND6tAuC5BXA3SSGGk4RBz5uypGhwctvrvYq36PUMuG7fkKANdVMpzG",
  "key10": "5ihjXSQXnPCqkkH71hSEptnwJPwh2Snst4nMddvt4feQynL9ULjJYQDC83NqsxZoXbCt8bSwp4QCFHVv98KNm9EG",
  "key11": "4finmTQ2G46QFSWd2tj7THEShB22mhWxuNEkCzasjVwJiBkdDYePrUNum91HngCryrCGjWcFPa8Xm5R25XM7MvWk",
  "key12": "5EQsoMXdqKNecnErwCiyJapYYsuG3Ngzk8gZsmhWozejQuDhNvHAAHK1QNR7Zdp6mbwn4mnmfPMotN8mcMsThJzb",
  "key13": "5ZMmpaVoccmpZaTR2B7oQb4EKofehVPhgkSKFSnttsi4CAY5aqBb6NFWtAc5PCaEpaY3Lsbbbv3PG6JT98EUn9ua",
  "key14": "JuzYVqTALDV7wGL8RkzjYdKbFdzYxq2wpvXLdEG7GQMmvLCH7w9dwGGYL4MUbGp2Pgt5o5Lk4rCDykZyvPxjCPK",
  "key15": "378j3zsbjqHjmfqqLBqcuXTKvfWZJ4teFEJSzQ5yFAVViCKK5F6uZEr8SNhSv2huPUTQAvucEyM7iwqGKPRDVbx7",
  "key16": "25wA5GFHqXEfFGi7afe1Fqeb8gDdFAK9qD1k3fu2sqBCUvkYyAFnruA24vaSi4J8n7vmVyMkyRYcG13ppUHQRm7Q",
  "key17": "22ivW1fNHJirJ4oWM1rwsSy7BoHy4bchKDoihx5brgLA6kYTXqVTjFKyh6jDL3y43BvApGXYWyMUWzstVi4XyG1z",
  "key18": "3sZAtscjzRXK1DLbHZNzwVHmDUXTv4PYqxeLMCe3wdgB4sXPqnWW8D9ueZ8Vi2whAFgt5Nzq3oRJmEuSuenSWFPv",
  "key19": "2npCceGS89WEFGmbJYYvhWoynBYEaqEec7gfaJh8oD6EAsMXpro4thVSRk3k1TG3V8uFmhreWuVoc6Z3RDa7Me1u",
  "key20": "2idZKy1wfH65crSubPBAnp9ZSPEXgwVJVFm45nbB1znbWSw7YsgBWFuR3QZ2xbCZ1Du6gykTbjDjHZnU6YTswiNC",
  "key21": "5Dof4n5TJt7Dn5xzYFqTDxAMmjKjDDhEqncammZFDSy7SeoCWHsmTUNL6rKT1bCFXaphhYyBFPqJHJ6giCpHFGBJ",
  "key22": "3e4HwTH6btDCgvBNkrhGaMUmtsCCezwcLuyp6yc3kQgnafsr9myhGjqVSmCjoD7jHcW9gZP2iEw8hgUPMBVnAs5n",
  "key23": "s43TMJ827eYpqzvEhPwWJjqm7Cd6fm8XTp9WUvupVpdoJxTfmLHM2WXTEWWbExzxR5UjGcGhwt7RALptYWyyBXF",
  "key24": "4t8wGFCJ4BgTNWa9fjHRa1s7eekjM25FYpRTCAQp26n7v6srBTsN6gcdgXf7APR8qsd3ChZVN82WwxUBcj6udPEJ",
  "key25": "5ft9925FhjqSgHmUhDhsueHrCjSSdurLpbz2pfr6MR9q3JG7UAUiANFD2PeVyGfpTLaDfNAFUqz7oiL2tJsfDJYJ",
  "key26": "3FoiD7cUmeagHUkfaonzH771KbDPvLyb9hHu3mZVPE1dP8Gbun3hjysRscAvN5vKqDWkZ5a57jwZPvsPAe8imk5z",
  "key27": "3nKmXFr4vy9AEZQ1nLSox1kaCX5MqTw9WsW2aVprA4R9KpRvDPm86E8EuxiwWwYz3ueNmJ7QABYCkRoXdYqxwryU",
  "key28": "3HTvAwheskHGKWNHb8rBehDd9jn9bhzN2sd3oH8ecbrqfr8hiit1wLeK1EkjJXVkg1YtiucX2mSphNwYhyxfjGiy",
  "key29": "4c89dcF1TjaWPfwec4LrKwxjfX2qTbj238ResKhUYuZtN5rJUMn1sc2vLQ4TVfdNVesrAURFhzRZXh14AKaxZLHK",
  "key30": "47GeX7kuqfM8ZTYFddBXLdehiTy88uU8mMp8Mr57pgd25kcsfC2um7hK3toPudoZKQZJRBXvpBHyzBvsko246Ku5",
  "key31": "3LkmuRXvRcBFD1fyWFWiMRaPks18eoCqCu2JNUDT2qXC3DJCUfaaahYxypWXgEf9SinwGyJQh6cwS7jVvd3xL5it",
  "key32": "4Q2GMLXUci6GWb2MoTPKnwAHNuwa2RV5QnkGQ24GqNjKCXqJvPV9N6nUX9JbcREkzMMMnBjdnrY267KsANZX5xat",
  "key33": "3vSUHMqQ6BZr7U1mg2w3mvyatcDT1PeevmbSFM6UtZKUM8dWJYkYxQ9ETxhgAtU5qY37YiSVzd6yqLjBMwYqXmNR",
  "key34": "5NJU6VVVGJ5u4nbpFHkwmGAgk4rdzhtk9pQyFfvyhdfqAbTwBpB9hGNf89diBHYHLgbEbgpmtVDdn98BFS86HQKh",
  "key35": "66wnddkGEJaGFppHRi1fVf3WEyzyB8NAb8aVp8Ya1jEjHzf4itzvggeYoJDSgyvbUuHtFvgREbsfNAmsxQu87uuh",
  "key36": "4jcWuEw576JdrHjJapxo1MpbxsW7ZwvXkxSuNN5fYvGimanrugNdYXjGvfseRgwD8BbQPKbqo1vf97MJJiorhh2k",
  "key37": "4EcJwfDmqYpKMMwGeCtGSmNeZv6fmJarBBp4ajZzQvFs6J14DJubjmw8MqnvsUJNa8nRPUtKVvgzRADYYK31PEpJ",
  "key38": "3dpr8RDDiUFTiDrGWu1NyzsS4BnQFxKbGrLK3XQmVx2ScRoe82STRMZ3Gv5ffmrozja2o2nqV3XN2W8gPKVpmyRH",
  "key39": "2k6fxNhPZuCShSLCnH2VvpM3jrwG4Yd8RDWYMiNVoSNT1sw4a5EtSV6yVWzKuswbnywE4cE9qHvCPpEZohjqNYCx",
  "key40": "2o3hynbB9LsXjsC3tf47BPsFQqMafo4zfangLEoEx89AqrNauB9y6EeRWj7m12wyCYjz6PC3cpQwBWDgYzobZWyG",
  "key41": "5TjqaioEdmMmcJALzWiJm8XmT7SMi21u9oUqNiobGrUnLyybwa6WHoD4FTfGiRjVxDz2DGh7mLZFvaXkt7n5Fh1J",
  "key42": "61Qu9Kdkjn1WaH6DdFT8UvgFHAdYmjBydbmS9fGEhzReZZ9dEiokKLBQia1vu58voLLUGHTZfGCvJrrQGCnmkRCB",
  "key43": "jQQ4S3sg95VnEsWCDcARQpHjYpMK99Ae1HnEYf3dJ916GmMMrbWpucNwyKwvu9cyG4kH6hPCvavCGntV46vFv5f"
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
