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
    "48pVZKbkPnhE6ifN3jhZb9ChRHz6SzhUkhtNPPVB2TjFn2y68Z7LTNvAo9TtM9bqo5WVnTBbtt7vrkWYPAbbduNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bCaFjnKzP17juZGc3z2Z7zwTHD7ioH2xt6SFqZZvxNGJP366a9iUWBLUueabJaj1cxVs3BL5RuBHyRFbi8zsS7q",
  "key1": "4tMfmEnkjmLeZ7st2e5P8TM3WDnebzx5pDdF3jnXfrnEU1KQDqmQmmFUwUxFPQ5bL48pFKzYK9ApeRvfwpJBss78",
  "key2": "35bnnSg8PfaQm7ibaUqKoD51FoKH5LspcasvZLfzFyLSfRNsyB2nViHcjwNVPq2ZBaHXVHdg8zWTsTpM4hX6BG71",
  "key3": "2Y8i5rj5Ja1oygGJ9pck3pdzzbbANQK771SUcAC2cdAW1armKaSYwbQ6jzmEF1ojDLyiMKzRq6adHh3TSxZBKz67",
  "key4": "2AbmuBzkzgG3ZyngvB3FwRNSMntr3UD2QBznZGTEF8qnbuqMa7mgkdGWD7PmwVrHcjQiHCez6DWYJA2sZJxBZVcK",
  "key5": "ZyYQrVHTA1dWqm57rHJKHnjLdVnMagoiimHXaExU4ZGLDm6oR4xyhVqkgn9mvDVNowzv4DfJPpn5CMf3ctE5GxE",
  "key6": "5pZscf4V5rB6rm9GRp32CrvCD36yay8K8g4SkZbYt4bUKXCcirGqNZ7ir2HcLsFFGaALTcpEhgmK7XLmhSNj8vn5",
  "key7": "5U9HftqiQ5q4gf5KVZf8bMA1oNCXTvKkT7LpZ7QcRdtrBWz7CB3BihRgW6pDPp5maFZaMiZUQ9TF3CB51dUPvPCG",
  "key8": "2DD3Co8Y2Pedfy7mV5qDsECoXJ7bGuUNwofYoRPHrAAmMjL39NM7v45fbvurpbv9vt49Mkf6TSJ7KkV3TJycUd7z",
  "key9": "5bSTe59Hx1XsT3sRnoTvC8HMPkAyeGegpwqxU4rqJ7URsZ8sNVJuNKhceYn4U5nm36UXAdPkDmqVNwi1959v9mkR",
  "key10": "4cw4rh7113AMhbe13GxgdDwKUTFZWEeWJEbevVJXPQmS9LyunoEucGSfnt8TiUZ5Tnq117c258iUboeYu2ESR4i9",
  "key11": "6qCmbjA5KgsmjkCx8fT7QCVVH9uS4wbxhicynHZpEU9s1K1B26XZQiaxwGE4TFs4gAsYSqmE132Gf7cs3NoShUb",
  "key12": "4j9sjNnDLGxDDa4jEWRfJgj9amkWULJ5ZSMV3w5Jkdjw9T2vN1yb8K66PkAMgzS85SdHg4rCf2448YdYCMHGzrqj",
  "key13": "3SKMTjYgexkANUDjWz8rWpB6643HLno7LrqNdBPnoLuMEBhMSA646obv4PGwf6z4haeuBURZ8kvPx3y2mp711CuY",
  "key14": "3tJf9jxbi7jXDvvarZhtqj2X2igLVsfiGsU1YCUhcjui79HyMPXxrG9nbW67yrd1DekkVTr4Nw738PwX3KjGdsay",
  "key15": "2WYt4zorXkyCjSCbmMzKZCAsXRXjgJdjqt1i1yba4w5FgesZKKw1HmHPc1YaVPE1aK2hKssBHbjpi97UZRocsvni",
  "key16": "3A6VT9qgWwKyeLnMAPqQK628k9dLN4w85XH3UMa4U1N3ZS3oAMaMAPW1VsV7w6SxK8V2D8rzMA6fics3ej41uhRc",
  "key17": "4QAgXCxhzyyQjtdQVoqEYmZxDEahySzrTkY8YZBmXsaFoY2eipqD54j9Hb9SjHaUnnhHFhf9wK7YToCyRziKTL3e",
  "key18": "2PEM2Arg6TuYTZCzTmLzMQjYFUTXi3tCXJo2XUDVTdbqAbqUrfsBxeQP191rJAFPb6YqFDq1UzJfd7TTpSJKQsTB",
  "key19": "2Gp1dsMjAD5smKqdczkCocCA4e8cBMfAsGkR289LkNcy3NbYWoHB9QavuCnnHnNA7DnKcpQm1UJnVP8cShx6aDq5",
  "key20": "496LnZFZUHxqH2oGstVVAH5JsX8vn726wME653BpsE9TcYRrXFqFfyGfXgAn1bEpT4dXykm55RjtA7RNrGbk5JVf",
  "key21": "5UvEjiDnNirki7T4NGu9pqw8CfX72Z48R7odzXiLAk1pkuTucEpdbrGnNyk9RaSGtDVbTjVUpwmiUjnNoKNzD9x",
  "key22": "3QB4QXrAroSiHfKcL2xNb6EeXmBrCPmurD881YVfYLKd4Ciam9H7xQYmRyXEv28bnPp2t9Qpt3YJEgruMdZ59kBF",
  "key23": "5sJF2CZGwH9gwyLRMxreVP2iCYnSG7YKtC3BSXnwx397w3Y3UvAFmDCy8KE5a4VgLGSmbdLGdW7tcciD5hnb9eAe",
  "key24": "pP4EeDkp2EZ1KpakWn56wTgJ8A2smEqeDfFAhpDgzVFPLKub7pAYRq48bVngrq4yttXbSfzYZz82YR3w66uUmTd",
  "key25": "4Fw6EDUXELs5PbcTgF7qSGhYFXFjnfRVykDApXrAC3WqKk7GBpkr6rwLDUKoCqx9HjVkZtywtvA2GNn2GgQvepPM",
  "key26": "2Y7m3WRarYX3MnSANsTHfviBPGS9qmxkermnjUFeXJg2oAmVMLiPHECMxTD1wUMNwSP3vMszgSkDUdrHeBrjY2Qf",
  "key27": "4MXFCbZQgT4bHENpT3T2pgousUU9Zm2pRV7t2nC6hzjBCnuVUbDkib6iD41utGTQ7VQk3dM3EQfgf6J7vJLv61yy",
  "key28": "5gYptVswAEMMvrHdRxqJbiyaY4ssTNkhvbSRUVyziitQdivnvvehmCY12nzrLZT1GiG9XkVfFYuGG8M8Y73mEknt",
  "key29": "638XhS1PpngfmADUvZNkyBoChKnBGiqVLsiyBnGZutyYT1Vh7cGKc2mYJExWMsc4kuCsXNB8wfCo3EPEzdJrzDcD",
  "key30": "4EHTHUZzqufrfvQUJTcnJUMLbP8bKQ4KZJkCp8YLtWBPPHK3ZCFrQ3ZvzoFekFQuEJkjTeqBLifLzsc6Ku2fzhRs",
  "key31": "nifEMUq8xGCK6dcNby4v2pqfeyR5SEmr7dmmhh3tkcr5Ccu9dB94PooYXtF59NyrGqEoUVefY5gMKM4Lrfa1SA6",
  "key32": "3r5aSD4VYMVVEoYXcPyb15GJmGKJE4obZrU7cXDjxBAD6sGb7feFAL2sfZWbRFSRnkjrAN5deHQDYtYCDjvVNRUy",
  "key33": "2yLmKUgLjdbHTQTwr5vv3XneYAJCwEzUwpy9J2pbs1BUs5uXNTAjyxyb9m1irNzgwgf8Vg9USZ32g5noZ9farHby",
  "key34": "4f6FEcspjq6GwYqSAzvNrSDPz6FbempgwEK1Ux8uYzvLZ1XHxPzwSZFtjTjonQ3Cebsh1CgBtVvebrHLbiMGjVh2",
  "key35": "4zGSk6b3jPFB1caCDq59yMsXJVaNEe6S7EXsk6AxQpCh2CsocTBRu5nh9EDbTjbYPdwzjvvCDYjUhJvWQTpPgojc",
  "key36": "37SWTaanBR1thnLiKYbsbn9kEH51Zcgsu7yTmr8cutcuJW6EFEHr9PucR9vnwMNQ8o9hixzSm7nJT3ZDnkhmNQme",
  "key37": "25hvyDh6NQQbpuU7nCanGV7ZZuAEtjjZNz73pGNfUg1yFTfs9qL9pUDDXCTUj3qGr91UHqE1DtJBzo1YoFXowxjW",
  "key38": "2d8Zgcv9QnHLygMQVnnp9apLQHGvq21CmHBSaYD6aXyReCA3bcMXJVCb55FDMREjwwK2bdyyd9y4KX87L8GmJSKn"
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
