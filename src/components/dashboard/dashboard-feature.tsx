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
    "4Du72wC4LN5CoThpyMUdBszyHcbCJHp7weptZatVQU5TLdDLJazXbQHe1PPGk1G71jMw5apn11kCyu7A1RsgSzbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rntH7qAH52YNt1M4gXyNfzo9XF4Yxz4CdtpPPoM6GVXcmhdZ4XRYNTLua8zphDPNKFnxqaERUU515icxDvmGy1q",
  "key1": "2eYra6EGNDXSwDbNDNyHjRTQDf4M87x2K2Lmn7XuHWcunz1DHLZbdPcBXgxvBrZowhm81gg7uNrFv5wurdw1ru8P",
  "key2": "2mRZ1445vjvwvnya2SRBWMyZ14jBcTgiMCHkgnFpsSq4cJNykosTNDgGxJw36gCPuYmq1He4ghW1JvhfP8MrVLTC",
  "key3": "67z3z1LQEvT8dYcGrTRt84JxQDdvmUakrxoAkZX7y6a7uQKePsJ3zPkykVuBenbpRauyZsT3vUBDxzGXBRSS62M",
  "key4": "3XUc4FqGz4d7Gpe1b99FEJF2Qs1VawPsNtJXHQ7bRjPDSxaoZDkwiCaadhaSyqBDwd4yNKJT8q94gskERssCvkCP",
  "key5": "5CCyrFLTrkzNEpjveusp7fYiLhLkmn9UpqtZqaKfjph7ZWAMYchgxbctf3zmvLBB8HSYv8YvkhG2VgWH9GixBjMT",
  "key6": "2tFadkQtGW3CevZ7k7XUQjB7yfp2MJQ4fNtko8ugmSt5FEMW6ReBXKu4kHWDh8q9hCunrnsTaGCRvrTbRnJwB1oB",
  "key7": "4eW2uEshCetXwYtscF4LUZCF7wFVzZfhC9o3q764xDNF65sA4bKinc1d1pMyejK54L4Zg3HLsYYuWTHQL9xAc4PU",
  "key8": "3HkjYLhwkFP1NmmrjkNHiknDsTudzQ9zj7dCqiz6jvhbwrvx79HsDKFMST7p9AH4Ab5UivKt7PsMw2io3HY1fVNm",
  "key9": "273uXPkithqpnTiKL1R9DoWL2EZ5qyMDhFymciwg78W8FNF5NxXmLNDFEerfzNCYjqh2T6D2aB299RZkT3efsxkW",
  "key10": "647C8ReBLqsGt6iA5Am8KMeFrKh3RBDvaFzqEwHmaWgatTGcvnm32F2TNqB79Zx9AKdD9kENLNECpoDDeKw48ofY",
  "key11": "3msDtLMrLZTc6NNMTJ3dn9UonRPHK7FzgXuWiErDn9cSQLE6ZA2dbBTUq1pPhWRP6QoecYtdxSHZzEwkKm22XM5z",
  "key12": "3D395uxSw9MiPsbapNVvG3ypRF53kS2fkcfZAgog7Dub7H1255SgvTV6sdN47sScPP9YbHRPYcjanTpxuX5gE265",
  "key13": "3qAHdyL41uaRxYG8mTCnREZD3n5rzdfqJbAndjfcVNXmDHQ9zWVo1A7FdiokgqVkYiYk4JhFZMoazwZqk65DPCQa",
  "key14": "5E8XUrW6KWeXf7hKhmQb3VMQPnSh3wgNQDNQ1m2wLnT6tVvLydizJjGQaV6b1QWdnPXNgxDD9A29gadt2jmazk3g",
  "key15": "4GWfx5azASt45mzsTr6rzftDeYx5qVZVbiJ5pBrWvbTGwefGT6BHWsEPzbHF2nK1UFgjqMWEWGH2ZmxvLbKw3RMF",
  "key16": "Ja6WFnrc2b5absdjCS2hV7Q8NfCHARx1ubkmaZG3W6QmgbR9DKzhEGJMfoKaGs47Qqon5TWAUSFvgTbLnPL7uta",
  "key17": "kQ7ou6xTwL95K9VCWimhs7AVy4zaZEVpqy6XC8faopTi4kNBSvvrfEczU6vrwLqPqtuh2KmE1HXxyForupdviiJ",
  "key18": "4BVVowx6LiYBKZtuQL5zwwn3dVfp3ykxgEurQGqw3DPW3yk8pCTxaDxgVu84nGNom5AKERQRmC3zGEsKUroZK6qP",
  "key19": "3EWfJF4KVc4tXXNppsEYpGx32UEpB1o1CbYDbNW35BzeTxBN6Gd4oreg7eKim3HNFjiZR5MYTEkVfnoCq1X43tNS",
  "key20": "3yK22k6B2jMjcLt5sGgRVmXkMBAUuUdKGVfeVTwKfyabhH3FqZtmJFhtsF2mreEAXZHVEGYMzKhYExgS261PeUNr",
  "key21": "3DPw5FrZeypEdE1NgmjSDKWWnrx1JA35vJxCkX8Rsq98aD9oGipkYL2TKcDVjEDKWhDxoSu7v1MHAQDrbmKPTmrq",
  "key22": "3cNZQMRXFMXMQvZVUQB3FZqpgDJfQMFdsTRD6KJxL82RttfjPD1cWH9V4aVr6iLT72PBAVs6QZomETQbdmy1PLBu",
  "key23": "7CTWNLJsabZYFWTz1UDmnstvRKW8iAo8wURDt2SSJom1wwLbFv9uAoU8nfTwWLmC8vqFb4uCWspx2r54AYBdnNp",
  "key24": "4zBrPMJ1yda41zxieRavtX7eLhD2qUocU7o19XVmUoWT9yVyWC3TdRk8DKPXqU8AC6MvASPcZUBsACECE3SR5qBj",
  "key25": "52BmzadSZi6aqSbBgUtbUmAYxiR35extaCtBijir71j2NLMi3q8ZJ7Rpw8Hyj9N6rLdwPrEa3yfRbnwdysGQoxEB",
  "key26": "7AzjcfJPgFkVrW976bb6rbjhcpbhKH3D76UmtLnev9DLwv11aELp23XAn3bHPVP2pQWNZjjcu4pL4mACdxxWiLU",
  "key27": "vXumLKqt7i5aG6XAPoCUyLsHmEv9WnNif8kaUuKKigCYQW29m66kasJ6tmZNWQfbRsryNQgJDPXms9Loih6K9Qt",
  "key28": "2Vh7u1AzeritQbr6dps7h96QsofruXA4DzL2K7q3yvjEULQEXni4e4TRVkHpyZNBczD15k2bqhWtLHLiStFm3bgj",
  "key29": "5ii29gMC9VXZusHD66iSuHwEdRiJ8i7Rshf3e9TN1XUusUTSdZdFyX8PUU6ewca5DEu4X2XbjWHdzgSHRv9SGCVr",
  "key30": "2yAK1Qpckt95ZDP5XTr2EWBPEvSGSsqJmNYfsBSfdK9SzqpoMRptZj3seDJEefZ8oWtiUApV8WAijxnczG5195zD",
  "key31": "2J13fG86W7DHxV6cUQU91xQtQ2bAt7QNMNfMbXRAMEBYuVzJ8pQatK29qnZfHxobdHhbhiQasquseyJZRuk31u2R",
  "key32": "5kbEHtPzUQhqR4fnn6NELCHANi5vokYpMs92BYYKYtdsJ5brb88Fb9GFXJBjm59L7Ekrv5fteHGwC1Z6HSUup2Mc",
  "key33": "2RsBSsBcQF7L7PfguRbwvsV4qt28gJkaoTfLm2AG8gSTMkhRRvJKGbjNybqibV71AzwQjvmtS7a8ZeTyyrdEYtQ6",
  "key34": "KPT7aNKe8qbivtwbvWU8ZiLgR2T6KNujAkBvKFG2PFSjf4RrxDfNP1SiJ3JWD4ADTrxVg6j7wFu3RdJ6aSWaUCz",
  "key35": "49kQ7MLcVq9hL5FmzCz4FqPQDQJCsQJzxjjNnz13TJAKcxo1VrKMUR9WFB7eqcdisBUCSvRC7fQwuZbQ6Hv25WXd",
  "key36": "5cyAeeCPZcUWWnHhV1R7DVbMDo3trxAGkrD5AUT2oKA8rHLTKdzAx8i9fipSBhMmUfBtzUyCSnHEmZSuU5NrMxoS",
  "key37": "2wAr8TjKVvjkNqYCnDNumUfGb7g5PJTB2ZJuQZABxofJB45WivNSNYHad64iRXiH1R5YDk9L754oA2thvAYDeGV4",
  "key38": "3ZZs9ZD7hAnfATU5wDwH1QU6hxhx551ai4z4qJGS2p4L4q1onHdfwAXRKWFif6SCMVgu2hVLoUREAcujijZM5ScE",
  "key39": "nPFHSAZkKAygA2YGMuJWFGgtEHfzNxDAWwBQgCL87xpounYLoF3tLJMmLBgvYwAUX2KxAfCbp9RF9nUT56kFGCy",
  "key40": "Qt9J35jzYNGnnjg7H4S5a8khMVRFiBvFRyx6y4CZ7eY6jBDLigW5qScwEg4eisk9dd8Pf85f4B15CE4SgA545BJ",
  "key41": "37JjrYLBVBvTwswbiwZmHmHa9EDRYv49JCppMcUmEpMDVrF3QcfTwp49zxVMF1ckkHGacaDpnVJviUMyjgmsidHT",
  "key42": "47nNqXcme39rz5NyXssNmWL55EgXHyrvASRnKZaA1cGLXvRfRV3Pu8umbaTBzvKRZ4xyZcT6xM8QAgs6QyouLBGS"
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
