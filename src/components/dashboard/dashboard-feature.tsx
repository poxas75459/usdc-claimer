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
    "3j86N9hhNWguJ6oMaDAD5PaGkE7mpyYoeFA7bve2uR2GiL92EpZUEGHZaWFeNcHjt4N1dsQsfnBtyJgSNYMVcUXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MkEcNNujaUWbLeuy2BogvSeGK395K4LjXNYyHpK5ryUWWsU4s4QtPHafqYgvSuWwMAyTXzNEZtVQkq2QwsZaofB",
  "key1": "3wyvp5Rcu2xy5TL7SmzrAH6cpysVh7vCqQoMaDUDJYhHmKH129iSDwJvM2CHHTkYuKNr8h6UUcbXX1UbeY6FT6eB",
  "key2": "4CDEoM689QbAFCzx9isJWQdJgiorDdqvfBkkorMLtodTAgaiXU7a34hz2MqKnVDnbjPPLYnWmAdYQDPW6oDZotoL",
  "key3": "4QoCC37wsHKBPUChMKHpM4WiNJ7VYwoVRAP8Rd14yH1iAHqTYmFvkim2uzQFb25xyxPDa4PG3s7VNVRgmfyiQaZX",
  "key4": "4qGc6wvqKnFYRzitnQWnnrgbzXwocvYm1Tco6iyE3LvqyZ93PPooei359CqB2EV2amSUSC2W9EtfanCuRunWtCsM",
  "key5": "23qgxZLQtJfSuqCEDxcNxccYXt24T4t98obfZqZkV3aN1FoZd2wAyDoqNYrJ178cGHPuw8MdgZdbBhNw4q3h6rTb",
  "key6": "2gSN2Bcy8Hmyffewbm6DVXFyWnyo648aZRBepUuv2WT8U1ww7XMaqhzLuhMe17x39zyQmfrBgeZYeUuNhFjdCkJC",
  "key7": "2LTY2CpmbVZ7ck8vmRvqCpYAyCRTE74waVR3v7NufaDNQxphG58udH6tVHAh8bGvFXpmnGypV5EEQFpfXmqHWN39",
  "key8": "4BTV6jiBAF9tTzitFovEd5GAcwyWSBC5ABQSyAJeN393Xxo4Kasot2m6Ado8j6jw7a6XosvG6gNWwDWGLiKRLx7s",
  "key9": "4an14fZ8eGuEvdt2i22j8fKXqKPrLvkM2QkWJmFktXjsoTS4jPGmqEZ3Z9c9UNjGsfAJDNcvQnvtwQ1BrxreNxDq",
  "key10": "cXSJD49PnyhmbrPmfsjf8hNCoMSYsP79K1NGguBwqG3uSofLAxgp38FyktWKxLETKtEFGEZTc1fXtDPH1y5yS9R",
  "key11": "4tqYahvvTPs57f9wYiMZzPxxKGQEjWxv4BtDHUxJZAvXnS3WidWnTd2d2tZkvHjp9aqMmCMsokSkZYsSGpjfyRvp",
  "key12": "5oGbyLFvTYeuZL8XUubpNC3fCX5PnSXGCsC6qdJTvgm4X4D5bFNLGPsUKvkEVnKc8MgqqNtR31cnTU7YVsr2M3iN",
  "key13": "R9C9EguJkrBmdZcN8Ap7KmY7buW46VoQ16ycbsXqELLff34DzCYhSxfQaZrKDZ7w3bmjKLnamjiVLkns6vUiacc",
  "key14": "56d1jp3HJmJSEwzbL65wrDK5C6wt1Lbjd6qHEdYZh8grU32dPeVMPHT6tDg51WFdQzDhTUCqAeK4j7ieG6cYLtMZ",
  "key15": "3N8JiUna2qqdBAEjzP5YbbzfSr372iyPWKzT6RDtWss23hdwThZEnXKDvobkScqybePnSk2GhUZ3G7af4YmzYRbL",
  "key16": "5Gi3usbG2zeCFqseH6BeuGbnNUDgmf1XJaTEFuzPKErBzsJ51kyeZa7srFHKR4hUojdhZ61SWhWVXCM9VubGvHBH",
  "key17": "2HgHKNPPsmreLu1EsZDaxN8yFpaxvFwExENYWbM673zZpaSj5oEeZDDaEENroMVfpiuubENaaj9w7WhuAyEqsX2h",
  "key18": "3SkLR2Ku72fKQscxbc7RxLEuBzUCMGC13oxDMqm4Dwv5E5dfGXr34CmqLiTiDsUMwK3aWc5jY22ay8HSWv7mkry5",
  "key19": "69J4ay8rjH3r547SbWEHne2cMmY7RcNemLw41UJJh9oaPhL1n9Tmh4g667EVhtugsqEtjC4FyGL7LT2bHdEw9qr",
  "key20": "5RR6XrPMLkdb57dEiiW6YRC3HcKMG4ADqXZHfxb5D8gyNTv42PLpU45LmZNnPahC48UXqoj5aY3H59aebdyqjRHc",
  "key21": "PkQvxQ9CQvJsbnJCcAvphkzwW6mQBjcBcs9D7mrMNcud8VZDLnW6wCNC6fyctXy1N4XYE4pfEv1EoyUFm3LxaaG",
  "key22": "3P5Qhnuw7RfjCGwkkvu95pFxYvYYA5uaUKyEMcT5Szq7xR2oxia5H89gMQZgd61BEeuV21BKrRoc7Wxh3WVmq29k",
  "key23": "4M8gqsjxhfeLLmA8ZfCMMLJtLbP8RBwaE4nsJkT4stsfQ9SxW4PYcx4SV44GKguSCjP3wvcpWDx64o7vKf7yq1Vg",
  "key24": "67mg6qK2n4pnjtVMs6aHyQDRRR5p6WGvmhxjN8B1U9zxCdmfapCBsgtqAB5kj6x9d96rLDDQDmCUDLLoRtsoAvBi",
  "key25": "FKKgTSSzVdcsAJiiLdSzzRjBMVmKPA7BFshLbYgskjV7dULYt2crD6Eto6StLzuHdktchMHgjJPFVFHipAHmcQo",
  "key26": "cNxqHqaNfnURujTregi4Tp5EbME8qi6Y4bSYL573b2YkTTPBSuyQ1iuB8eYgH36YoQdV2wt1pAJRt2Vx3heKoDj",
  "key27": "2tqrwHHotFFhnQ5K7sW63Q48FMzL6ZwR65SJ3ntKPH84w1govMb1nDCtNgck4qaDmU6ukHNKWXUgekLLEUVzt7ve",
  "key28": "A9gc9f7JuX1LpSkFYPFts5NvgsyauqbYPkKRHf3C1KUDCbCvG6hF9Jr2MUnaFp2dqmKcQtwerHLyDBRkiws6zSj",
  "key29": "3j1zFyYu5V5BJoWJQaxYsRxDTLGadEdNU4Hq1B1R4ZMLs2Q7GPUPXajrGR1n2cTzGkXEWAtjscp3ZCGLjbyHBxhu",
  "key30": "HZ9Y49C12CfwokrT35Wehs7JfkwGTZ8tN7Ynh6HzQrWR6imukjeonb1R346i1bBnKCzWjRBNGzpBeErSWEj3Bjz",
  "key31": "uGfHYL2whSpuHjkqAiDxLW3PytV3ptHZkTsqBYmHHSzpgLfbNfCfrVDmmNcs2dH7oPhiYmHeqiPY7gbN1wmMRPP",
  "key32": "2Jq77VLHtdqfCtwBTghjuamLYjurrnuVL1mGNhMQgYVahD6QGrr7SzxhuKCD8K73sss7i47g5U6ioDUVGQ9MKBAU",
  "key33": "26fbGqqAt23udr2wPsQL3iSS1VeWqKjuYTkPpwyyX7W2f5MxVqErUdsWVRA6v3pY93BWSQo6Rx9hBbUK2NyrNxei",
  "key34": "3RZoenBp9QKF1iJho1y1k5qacVpkgo2qCCABPhiimUBYeh8dHZzGCwqdxGUKoz5JisqfzCYdCNUgBfYjGHPuPNsP",
  "key35": "5yHXp32V7ijxZT8o9U7FDinotKuQ4X26M1ohz8EscV8vyHyA33k5Kg74PYSvUFEurJ4y1wCAXT5cu6Dmk88ATU1y",
  "key36": "3Qrshvp2Q4imSFzeTUU8w5asZeFVngBkiPQttnYPR3muZoxjzzEq5Gbsb9viJiqWgwCAed6NobbuYAcB9smYLt1n",
  "key37": "8nU35JA6ZMaoCkf7A1C7NNreofDENLeyDsSSxvkC7qrwCtxdxNwGLZST6KNQiuFLRPcmQhfoVKkXY3QcYea5bi9",
  "key38": "2fhaKbY3ksPjUeP8YfVryHyEubQFh7DD4Ak63TCHp7iKTU6fiRc6wdmhwaSHn8ffsqQWWpS4GMzLXvMUgHP1e9Lw",
  "key39": "5cCuNh2TQU1c72j9LeVTdieMUKKG5toyGqASemmFvM2YCTz6jg6vCHVkbHe3zJqyuyTGdANjxKiXk2A2SS5KxaiC",
  "key40": "5TtT4rDNmn46xX2EoHHetgQHi8wbwyqzXWRssbJPD2A8vazW3b56W1ZmjrhPmhCJp5xzcBCVupD8MfX4SmkTJsp4",
  "key41": "5q2v1Uf9NmDD4XoVUBtEHbGvsbKtPucBWfwcqYhVh6oGeoJN3KpeobqjxfUWyEzH1uEmDcPdiqet3uJYsFFrrWbE",
  "key42": "5qnk4d9zLj7UudwrEXrWWbvsQUWiPR9hy8oDDZw8n61GsD56rDLsNnn6gfrm7Ad6XGx65nDv7yZYe7h8qzhuKYoH",
  "key43": "L2TSHeQUKcdNQobzpB6ES2SAKJoPTcqdSdjJ1cTmzwQe78fuFJZieYw9YYKouP2Rr4CnAt9hvx1pyZZTGZY9PBp",
  "key44": "5QrmXrgaaxHC9GUinGAmdoFA5SQRArQPAoT3JT3gHvdMZN8mqVoKZJ66781ZPR4JSrgynY5g6fmVgbjt2g9WwwwX",
  "key45": "2TTaFWX2M2ZpgkhK8uZ2XweTTYMLGcncQy93Pd4pQ443gjxkKqo5jAoUH3sxHFMaJsC1m7NvFpixyHG7HiKmpDvM",
  "key46": "4ppLpEAGn6oucxfow9w7P7B8wWSqAnYgTS14JuK7JFEwiFgEx9kuB3anpBSzvERrNXhsN8Krh5W3qbZ9WoJWhhgR"
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
