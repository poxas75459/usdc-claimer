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
    "2hKfzNTsdRiLKwXau2usXh8HeAFbux8W57V8GxyzUNq2cVymTe8jkSHoQbcYc76uMFYYiRT3cecKicugPv93DsGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HCA9cHzjkyDGCt9doZR1jmnwpePokAC2mm7V6FLps6A8umNGJzZ7miY9hfou5isfRMnNwTEFqSaTFaJ2PBYg1wa",
  "key1": "3cEniJVYEYX2ZeGjuHnYm2ywwwSyudV3DP8gnB6FpJ19d3FbvfERCeWAVPo9dQSmvP5KLTs8Ug2Wis2Jqt9ixNoP",
  "key2": "5nsJW9TdRZWscKHurdoJitZF5aiqi813xQDdiivFWkR4byBtcMuQ5Y433CWFhAnWuprWE5TtberXPYxoWa38UU8Q",
  "key3": "4PsDVLcf5DRLLS3FBeGcDH3MxjLfuBS2H3WFWK63Lfcd2ZkMDmDzkYZtN1rVe5oyVH1Hhkwb3w473vxnfrRr3CM2",
  "key4": "3BCwfHTevwdw17ohEwCyvs7Kr2QuBHXgELDnN2hdrLd3EVWE1oFKV1LXEfsBngWr9fF5sNicyL8ZVr3HzFTBTPhm",
  "key5": "3b9anQfY3d7jFCx6VGfkdKuuBX1Zph3ehhe8B9aXt1HVisXGLdZm5BV5qnVpYfFdBfKh6SMK1QtLuev5oTJA3ACD",
  "key6": "3wAGw8TYPcQFeJpPjPGtbFr3TrWVcahN6D1TSXfWDFyNjEQXkPiAvX9R1XgrJJva97yNaUteAr8CVCnhu3Mw5aJF",
  "key7": "RHE82SYHr7GpeEH9XMh6VbHBAzTs2wqtJwbLGwV7RJUb8wtCfeXS3RcFEfFCgEGp3m8X8La4dnWUNt3fKNKi3Kt",
  "key8": "4jKUZHxSZrwV5FHs9MpLjcEwoeppbAMVeueq2Ed7NyoAGYgDTuWsmLRzZdRR3aErrtQmshhWMaLRqmeYoUCk3yWD",
  "key9": "2PfhEjVcK7LvgScDCsKRP27w56T1Vugo4oH7JWP8wWtv5toTKdmxsXYzjjjQTji9cY3uhnSMia6FXPuJ6KQVzz7e",
  "key10": "3WrgiW3k5xeemi3VdwjQuX1U7zCV6PXRADCWSSEmgPcVaVfVtTJyLApTuqkyrYxmGhDdX6mjQfsmm4t5knKH7J3b",
  "key11": "MsvaxoW4RUx3qEuuZiGvgX2QR477WDAhxuBsVCrzLd2arptoPopskUwZjJJmS8TB7EcxuQLCf2c9UM196fgcjua",
  "key12": "34NXzCKYy6wKUaJ3VMjjQTn9DiGsUzzniKAUNwd2c68HGy5zSLqLVkccAmMUUvRsAgpnvmqbnLKyh9yajDuRR3ZD",
  "key13": "sHENahRBZfqHFAfKEUEvnUmxA5cNQzddWmxJ6R1spCJm5CBjpGG5Ahtp5e37wTb4fhNeZWAPWJV6cLby6aJGx5W",
  "key14": "61q5tqm8bjMEBwnTWbDoWq2muwXpWeLyHJE3LVpmxVD7WNzbENBTWNmMejod6bhD7Xk4LDTbLwr6hRGekTUQyvDL",
  "key15": "44nZvDxCSJzgat5zuzi4iKPTxajsLK6NE3p7qPsg97g3P4o23z317rs4iySQeZxNEAWMPL4xyvzEgfhsmA28AVKL",
  "key16": "3o22z8toHbLQgMdKpzp9Hpho7vRtnYQqnQNfGreyfdXqiG835Gi5XKhrVqcfjC7HEEHvt97HshaocfZfbo8AJ4dw",
  "key17": "ehCTPyE3QQxYY25tX6CCVVruN7jGueNbJpnVs9MxcCUzJzKZzebXUuAsvHW7EfY55txJkrmMZgr7FUsXkEsV6CJ",
  "key18": "4bf84yHqw5zdMfDxtUNVjYfTDzBB3yyY2v8cNXiMPPiw7R2SrsLy793H1vrs9JC1Nd3c8Xtog3fMXNBu3sHwAN8P",
  "key19": "2AhG4L9PZr6NJ5iiJWsEfJaLTfvvcNMPbauPmzxJ64Rm7GhwDbU5h4rhatZaUXYGqLRqa9wWmhetjTd5CHuiYYf7",
  "key20": "4E68YG4vcWSR7znGhjTiH8Fj96kjcD5sqhvyHd96tY3Mgrhgv1Ncfa7gGQTuKcMbKe1xsdUeAnWjcf22BexAUPw8",
  "key21": "4tE49qrsqALwz1nmz5UR1AKt2WjoKNmGzqAfcS4RyicLhY97NYjsnFPdSTjQVb4LzVoHDd23c7tVPhuHqXmvnZDt",
  "key22": "5o38NJeqpM6DiASb4KWKVdAo2chpak3u9MjpwMCMrAZAEA542PF9Xm2PKnqKi7djQBZ7jbco7USqabzorDf7v4wP",
  "key23": "3zv2mmhx1J952Ns73BPdsc6ccm2kTnsjsqFyhJWjze1pNZ74D2RFj35FsJLAdY9ByT5GgZJthkLd6fSUCfd1deyQ",
  "key24": "4ohd3bptnjEzm9fw5oNX2opjMgcxune3xnumEst5ZDgLfhhNko87vfVZzAeVvk78u2AxvBNLbTgFjdadDWTZ5iA3",
  "key25": "33TAQsEsbdLNAXyBB1Nq6VcBpExMZnHWyG6havEjtCKLh53zox7kDE8zMgWhY6bH7JTcAjyxv5132ju1EUFdmBNA",
  "key26": "5pTmZapyUkBHLb7FiWWMEnBZhNrQUnuHc3A2qYAoGQwbxMpq6K8F9ygwuBMBqYHPeKQndEAXV7k4Y1DTEkSsDKnK",
  "key27": "5yBqimvey7AtC6CZp2T9FsLJ2WHuAyLpLD1znuTmicu8sXTqaNXtNCnKAEXo6jzwodYUXxHXvRxcNFCiNJZagQvR",
  "key28": "TpuDzciGAWykjZFNLGH3NW3yoVDVbpqFA2fymccAk22x3bzb2ARrDnU1AGQhsZjWdNhsrp5LDs9J6BFsNTy78G5",
  "key29": "63qKF5ewM66vvRf6yqfGwrxCeHnJLQeo2nE45mKGha3HkUAFgazLcRC9ArYLTCsoidPZFAizXv11S7AAVPVH6t1T",
  "key30": "DiuA16kxFVaWtVDQe2p77UJzPUeF5t4yyDLBJCCeBtcSchFhVXMqxPb1JzyMtW6C6bJgHtppBS2QRRqsosNZ6Jf",
  "key31": "3U99PNQnr195CffBg9211XsCAdrWd4hEUAanG8c3SXo4jrd2CeJ5L4hNh3SWubyMJGcaiYXorRfiwScF2u65goVH",
  "key32": "2asSRi5SVPprjKz3LLkJH2tYBWGbzj8pEyfD1CqVtBzH6uadyCqyJRDxWq4bkpW2J7V7DF9q4f7x4aZ6aC8gHf8E",
  "key33": "3eKUpdaGA3un9iafM8cCvYUcWZLt7bMivwPuLJrkTCneT2yBu8S8mRqSarobwyDoMAdbVPk42Rfd5fgbR2YQ3kZR",
  "key34": "dDMZ1JvtZymTGHJ8LZEbjPW36MGCA2j8ebWEGKgsxHcWnWRjpFC13CJvLSZP6vz7XqqfHJr7diCPUR3iMGTQNtX",
  "key35": "6F39coxXUsgB3Cjg8QjzUU4g3AztCmQgaEfUfjjU7HXmLLYhCur9VRB8XfEdFNmNkcwPaATEN7STrbeuEMbFtMH",
  "key36": "4fVYYcK1Y45uHfefX6Q4VyZSDfFh9JPj1mViUXpM8HNUg9of2vqefAoDzyRoSPhzK58so2pqupc8JwMUWnzs3yCT",
  "key37": "3bvm5BiYcjgLe9kQXBS6HQbjrCEJkQ1xX2wbAeWUyCNr5rnVAyCDFHRCmEXnDXKbnmCHwYCXn3uSoFj5obr6WDm8"
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
