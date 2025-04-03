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
    "2QAaadneitz91VxuUoVJLxiQbXaEi7PyfiKL7AySK4mfeU9qowsNH4urQKHjdSbV65EXZv7NYjDkkaJm6nhfDzdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63V5xvpw2trwndURgiLrHporm5HajM3pcKFEtf6CZ8WowiVsnJfr5RVrfYittCdb1573TMiHM4zxzt61AdmYCwfm",
  "key1": "3opV6EfJqr9jGgq5UM7vL86Q6h5oLtpuxci79hPQfrVUfZANkizTP6Knpq6VcB51Kbhe2k36tm4S7FRYo1Px8x9e",
  "key2": "2c8bWtrfMxsr5ASNRA37SPJi1FZaRLcJAdeJN2KosZTLzufVYd2WNhyvLaZJsrJ4oB8i4rBBeSDwfTzWCGs1mR9Y",
  "key3": "3JNU9rde3xqfvDwLEXLYkCoKtYH4kgDkiET6vyJmSqEaFptiyet6fccswtUMWeKWfz2GijB8NLE4taQeiPL8S83G",
  "key4": "3BLBVD1wgnMwfE8hsKroje4ZcNTBr4G1zESCCPa1CAyZcp2qbAQBPBUwV9n2zSHutyRGKzpmtRieLczMbFA1znKA",
  "key5": "3mkjAdEUcr18sp8WBpVdSVgKYhawuWeHWrQ8aotrmXDyWQvAjHTeaz6LdCvUXbn6cun9K29r52Wn3HkHGDfDmx7B",
  "key6": "5PCTFZcUgeYksfre22iWGQ7MvSQurxpPdXy1VLqE9SUwMato6ktLSHEE8pj3Z9KpkQperXWzYy4N6B661EhvBDLg",
  "key7": "5Zi6hBADqkx4pzBkNfXYrGS1aD1H8YGFQZx635sDTCrWTNYNUFY4KEdb1xvXGTTZye1UyYuJEfQwEPoRPrEQg2uw",
  "key8": "4rhyE6oRZrcoXuxstMvnhqbWBxDLDdnjAsRFJibkhGqePfpDzuZhePsEv4gZaboAzCGNPsexegzVsU35HL832tRJ",
  "key9": "4dvN3WKcT5xVKB8fvsy4bkga21DY5dcVAhpKuRZRpK45GiPNkkkjXiVEZuaCSc5YaXTxx2HLrXQfuxzjzD6JLkAM",
  "key10": "27aQCeyezxZHd3ky8zRJv1BxRo2XNJYS5okzE2VcvwXi3ZkFq5HPrJq1JkMDDSmXthpm47p7dz3ypWgyJtgMBJvh",
  "key11": "5ge8rRuBu95MJuUCmgRdHLh6zWWvSerV7WWFv4hrYMAjvKouJ7ySvP7Mdet36PeqQsT6k59aaATFeHh37Ew5RG1q",
  "key12": "2Tdzz4QnL33eqJ33Xhg8w5fCf5p9JKYi2EmCXy6BHH76dXr2eikJoEX6vUQAfpAdBEwoo3bprZHrKaF83Y1CamCj",
  "key13": "8G9zesqLJxxR8nXr8S7FDnj3ue3vd5J9vjLJXGzdJPJKeEn8kJPHm7WNfqhuePBsGATULyiDvPSeUf6oJ451aED",
  "key14": "yTQa6oK1KnwWtVagfVojSvwprt69pTPBLbSbyc16JzYoTP5L8V6fMeSmMarrEk84xbjK15KB4F37kuiqUZPbVh4",
  "key15": "3PCLMqDCrUkn26LjpEPgcJNNjyYChdbEBryq1BK1a57jEWmEhExKmgWkss3FftD2xdmAGXP75THxs7SpnSN11z6E",
  "key16": "4mojDM4DhZWQaXCVNcT2VzKruN3bFukJaK3e747xT7J1xGmkLZ882YFFtKZXKzKTk4ZXnrC6ZvrtJyNVCGxHj2u5",
  "key17": "2EqiXmj2hWCPhCVbUU8FUYKT4TMoj27nQqbctVgGpQ6ez3MzaHiPkKN33NBjCxNaMtGKxFf2XwC715vhH9aQTaTf",
  "key18": "5qkdPyNsp5Wcy7KnGdtmqhv2p1Btdx7Kb3cDaMdhkeyDnSYNjzjkNQaXa9VYPCJrh5fRFRPbHG43ckqUzhu7zKNH",
  "key19": "Ebt2RQvPLNRDXHBNURDjbZC81FGwyrwD1WB1vDuFq5665r3dyMshGXELmLRWasNVb3PMXmi44s8R5aKkmM231nz",
  "key20": "3sA9sxQ5dgfQofR1gjbZuPShkxuGoitbgQzxvktudSuYzMpmMqx63zTpneFpYyS4b1SoVGznUpjbwKL4xyMpK2MM",
  "key21": "3wmnKfcGNXSv5WNU12eqaYFEeAaKR9qj4v1B6nZDaQ1SpyLEVzjj5y65hfSGTAJbjXMjsM57XSBG411mSuTjatoy",
  "key22": "2AJ1EAyxr5CpGW9JhqQog3NByCZbcudvjBLZPwXuF7EnDbD2AjrqJWxEQcq1rJ8RYFjavhFnaPkHJGDwuCuWuuvJ",
  "key23": "3psrdBVMTcBC4mQJkjT9dVcabrYUodPQZouuh9DfYiuiWF15UT27kTEvtwxL8ni15D3X1eFL7CtjmxDyABrv51Lq",
  "key24": "QmifSQqsTT8EQKLE6zbuqaeQ2DQf72pgEwq4ZsQtqB6iX9yoc1JyMRagFq7LohA3zpM4HeZVPdZUAqtrN93h9oJ",
  "key25": "61KXDGmjV79j68zrg1eaisUt3vTHzRu2YrQCtZwsdxzJ7Pk89CKBAGMGPZJdLApkFNGMb2D8njY6EMLRMPQvgx7e",
  "key26": "5doRbCvBRxVzJyX8bkxy1CjnQG8HoVRV1UoiQpmUNzeW5ngsfEGJRzKMTaouNotuLJPFbRwxYJWkHYKneLreakaE",
  "key27": "3MGXABJRbh4PdNbUDbwd2GPn7wQiAtmBmzdEEoNskBHwFb3iMiz3PaBevftU5neo4QtLCD5qwrZ3NXAgKEer2vM1",
  "key28": "3bkVvkRcJG9iouHAzVeFXrdKQoX79WsEGDe9bGGSKnSpbjCdwsM5At2XkvB46hDmF79yAC5MHrUudcdaGRdZKib7",
  "key29": "36iR2PhGcojEw2TGEoTqUDB2jnipyjPk1SnfezLPSzSMACBchsUreLxrgVvarSWJU1qDVKuDWUwrmE1jcZ5YYSuF",
  "key30": "Ah3YjxvhkRAGEQ1dzNnqwiU37q7VqWbsXHR9GxvnFVWZq9ADkBAiUjqq9X8CgYmcAiSYxKHtLDBPnReDd7uV5t3"
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
