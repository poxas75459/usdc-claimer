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
    "3p54QipEzrNEvwxgs7oTQHz3woFgvUt4AUUaAQjSau7BauJPmyjzBTxnpcwUH4zfyxDMfs4BRnRpVS8zfuEAoMC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YfiuY51yvPMoMfhGeRPD2AabPhsEZDK5DDXjQefT8LPzX5TRwpWttCThYnmXRStfkQGSK6yQxdT9eZeoKWJ5gDT",
  "key1": "5QFGvnsJHSqRyFfibksQC5Lo75AepGBi54nNkwYf9hKJh2gU3uc1asAP5qui7kqfU3hVPim8xMY4KVpb1mKFJ5yE",
  "key2": "2Vj7fi9DpAjjdu8ZqkmLND2jtoxdGZGdVJVbmJmovKvhgcvmyWxDgd9N718aw4TNLwEDfiG2tmMzevYXUaDH1L4n",
  "key3": "2Td1ABPYjYLSaAkcUVP1VbxSrrF4r9AYPMhkp4WeazFoE1XbMCJaHBo2FD1GCRH7SDHm3egmX6KdHfz16bEz7YHW",
  "key4": "2x26jQEAYqv7YfRgEoeGEfyLCEZVupPNB13s8r9487CMkDT9wiMa1vdnv3AW8Xwo5VZkiyUAqzP49Vjfp2rwGa8K",
  "key5": "4E6kivxSBjpLCKTdYghkhDmtd4imxyVfvKQeQc5Z4mfR3a99Cg7ua4ugYmMofn2fX5uTfKHmR3i8BnX7dowP5HYK",
  "key6": "AnCSsvwZAWHw2bJSnKNkvJZnjGVZQRdNCCphmiQhaisvP34bi2zKxCNXNpe8gJK5sKHRbTq78GH2ZcmqDKVvAu3",
  "key7": "3Ck9wJa1MXxmi3Q647bn5u4Cfe6YFEczJeRYuMrV4eeW5GqxUmPWVN2xagt2gMascn5f5tkkkVYVrviWKjciHnqy",
  "key8": "5LM71VJJwydAD14trKVJ1wUJmNjBDwTa7747TXaHZ2fwCmmNdcqibbKMKdvcWumus9Y58Azq6DwHbwvFdiCV3JkW",
  "key9": "4CVYwyjY6WX6dPrhZ1e1iTULPZ2AktrtbFBHqKgfWq8pajwJWXErHabCmj2eJqJvRKQHvyVp1j2kmo58MZLoh3Lc",
  "key10": "2itcfHLPv2EagRk9x6oLopXZDqXUgrTrbSCWZyZWZvFTtqrHSa5Z4TdgrDPXp2DUiQ2sy71E7yG8fSQkq4SE1uAT",
  "key11": "3rCKwJLH5arX4VzKzH7pDUhW2eHC6FoY8yJSKKLTcJtf8C7AxeHBxMSqHJksJccxHaaYnLv4bdAZ2ginUpjdXev2",
  "key12": "26dNhMMYt3sk9ZzkGYkwuuCmpEd4VMA7FKQ9iSeo1vqi23UZijWPPsQ59rAiTxgbF3QCRkBHGGqK9tWdPZF4bSYe",
  "key13": "3VtTaX21Em7ShYSXaFP1NCtpy9dwk2qTGpkGcyVF61vXf8zEEmiRY3QcFnhdftEsyWGtDwNEBJzuz9V2hRCusc6Z",
  "key14": "3cp85dDdjugxUaP2RpfwgPmW6nEuZ6EmHi9znZCQzyZjXFpdwvSc6RdwaJUNdYJRy1BiWgCN5gAwzgFFzuLtFUUj",
  "key15": "2ZZGecaEcwXH8eSpdW3hVuaaKnrngX8Z3FR1QhP5C9hsngyFiEu9eyS1hMzbrXk8ZZgox7pExtjWmpMHY4iLqbd3",
  "key16": "3bgjims2cqojA67v24v32eusrVhodhkocVPqQDLjQm9frvj1ZNP9n2EzWH3PZY38Gzi5p6pUDvCN229VDKBEg5BG",
  "key17": "4BDgGPCnnrkb23cs1jjiKAr9N847rKnhT9EDstpHK6JFj8zSoFKCApZ72fzVpgYFuC9ygiZjFhDbf2v1ECzWJVnP",
  "key18": "KkoFMyDb3ybf5agdvWYhBMt3d2AG5Y4krLhf3JVN42TcjZL2VGMawddzt1QLp9K9JkZEbXYR5Bq7Na2AmDaFCJx",
  "key19": "wJKiwbMrjGaHD11fmFBs9PBA1CVbZKioN1nicHXgQXVnztoBV9hkEoWNNnB3qBofCVKu8AfGefDi9WYi3gntDXj",
  "key20": "PFtoHYT2oXThieiuxricbgbEFZQ4nVeLmtnVqsHqVdpL9951NgB9HgFwaa4VgFtsesArLeispo2c5hVMjG75BKP",
  "key21": "QHgpvNDh9ArnB9sYKM9jr8fXK34j83tugcHZFi3eKDGKJCfktAimqkCYk3pGwWYA2ypPiZJHYEHXaBDnyDrvTLw",
  "key22": "4reS8SH99D9dsf3NDkDZf77dE9KcVnP7aTjZAJTXCpZv2zNNL3xna2hrayTj7Rmmd9PXEDhZphPjbkKeJkNkikhn",
  "key23": "2wSHL4zZKZqfB1TeZjos49Q615umNtbipSfvx9FqPX8PTk3SSKVZupubG9X3qHg5cxLGEX4LZ7j6no5jzbYFFXBw",
  "key24": "2Em4eooG5zN7TY8JSfnWERKkGcrdAPTbfYYcVSjiyDLBCN2yWSQaUegRe2Aop5is3K4D3oRLWwMfqmHq8VAm8w1h",
  "key25": "2B2hhHYhtuzuS96xT1VUuhGvJbAGxzxkA9xCXTyVbBqEC6aUvvtfwjXWzVagFnfMgoCCrsFMgTbZyicRogz7S2kw",
  "key26": "22Vujca3FuwZzXVyMj7wVyGnD8LB39hAzbjqbJD44WxCsRRG8jzXSZNmSR9ug3aydzM627DWq9hNiMtiMCf3CBaw",
  "key27": "33R3io4wCaA3NgMJa8NJKUKc2gpZgqY1hB8HQc1jTA79YyuBNEbBfSH1VHfaV7juuQFJ4uXXL8zXurryPFFtn2ZH",
  "key28": "GLnVkDaq7qy94qnTFTdnjGH9WL6VQxdKKTdZBxTxYYUTyDCTeXuY1jJupacey1n2sGpaULTMimjfpHd9GwjGHuh",
  "key29": "5VPk9K86TUG3EXYUyv5asVCN7baQbVgihtiVFmirgDe8cLx1fksDu3m3wPcSe2AawtatuFo2WD3rLjLTX9XRSs51",
  "key30": "3waCeDCFbYioBhYx2d9D76nArWkN6Yu7d3obu14NYJ4aQPuVUDhsgGSr97L9a4dAHEvSjknR59rUafjg7UMXNpJp",
  "key31": "D9aCX1oDvkcM1EGtxWf6D1ZLq4a16xNy5bU4bENEjj4xQsePFNXQ9ggLeK8b9sks3PVaFKVfpXCmMAomMjyw47T",
  "key32": "dhUoE1BVRVpf4XCZADnMbxfgCzm5PWE2FvrHD7QP1YYpFiMCSK4iovUbyVvCUo3YBF3eSJrjkvCQ68nvpHhCrHh",
  "key33": "62tFYMQTLBxFLVF1PWqGSzz53uuDtDHbeEow2EQoWeUxkff1BVK6iPok9JVA7gM5JbbnQqXzm69arVwHbtdCui7u",
  "key34": "5uNtqMJM5U5okWcJsBZiCjCCfCPLPTPSNSxTi7XkQ2yK1hP7x1mtVyyMJrJAwJqcwbKBt9jsYdWLkwEFMfK8Tx4w"
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
