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
    "2wTptYy4iFdvLuNUXgRAuwE36a4LtwQQ6bargdaQa8RkFGwAngxiytszzD4CTTNVBeYEX6Gv2J7GHMLvHqRnsgYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGCZFxZKnkd2qsotoNLgeEGEeTdwKauryn1yq9fKaiWojczrLXVkKvcbwwwewkipQjEBi2QvLxX3UFjLV6x332J",
  "key1": "5b5payVqAUhQPQ6FTcoNo9qAvqWJ9KDMHmzBkZZ15e9HZgPLgccuWxouHARCULMGrX6jzdtKZ23PPAmcbpvAhZch",
  "key2": "37U2RutBXh1imkBYS5qBCPEhaC31xNyAGFwuYc6TWUh1YuprP2KW5HAMxntZUY5vDTVV9UVGsDFMqSoowqX7Gyrb",
  "key3": "4Mdo5Jhp3wPmaXywBiqDMCt5MyGEXqFHe5vNuX1diDvVXxP2E8HeqtLVXy8VxfjvV8w9fJz27X3YzfiTf4AxNWWL",
  "key4": "5qzkdrQAhdiEbmoth1qNECdX8iuFP4XZF5Mho4AV64azmADWi58Q4C8ZE7LXq4Su4r5W751HX1fPqBzLVihV3viu",
  "key5": "3CzxaU5jarEw4NvFNGexb6CxKDbYvFDHukE24w1oH9TcSdsnVSnh5QeGEjb9Tnjrevxo68jYx8yxjwZ883ffU6UM",
  "key6": "3eycaEMSTvswijUMMxggYK7G4AcG31vfYo8dwXmTtWrYp25UFK1LagZJgy7ssdboNsXPphJoL58sZUy9HgDByFSh",
  "key7": "4rK268oxY3quJQmefdFrrAwSS41xyZu5f6eRo5d9nyaGmGxJne15YBYGnmxzqfZiyXYfRyGtR7bbnoFsTdY6sei5",
  "key8": "3GRCiNWHEmY5uvCuPCGASW6vt1LHy4Y2XakomDFanMKry2v9WbcqS7SWJEeLTTsePLn6rChrWNyEMDcaGJKgbcGS",
  "key9": "3uBBadKNjfwKd8i74veyUPfgtSdi4sd3Ff3MN5uKG7TnomgdX3Y2KY6xa2WjoJ5Pb2xwSzR3YKoxa1yxksmBNLvE",
  "key10": "AQYs8drAXLFniidz4EC6jsu594fqK47H48BK4aSkWydiJhRNZmU7jkRu1iWfYCRnBdD4dPemeBzh3QTEwdQyG9D",
  "key11": "4kW2VqBborwKKJdrnUysKiJz8bsfPo5jCBzFwc4hgvErEyMRALWVtiQaDUK95hNgyYJtPTHLqxQed95kSB9gsnP",
  "key12": "3Px8MBRr9U5w5DrfLoMghusZ4W92oxkBEvpfah58aMx5qkN2AC41fLoyidsd8WUFH7bYsxVBwiLp19aDurefBiTn",
  "key13": "4Kw95ZoRTVr3Qrtj7E2MKthmZtQS5x9Q7SGuD39tGzkFtNSYhJYf9mKpumC6wvtFarq85fVxzncn21KEKFoVMWYb",
  "key14": "3iMugM8S9d47CL3ZRFefnK6oNRwFfEhviguqcxfUNGCNcWVYspjjmy9JJ4bQ94t1YNPbrbbsn9PoKDSUMLVdxgUW",
  "key15": "SNfB5bzwrYDZ9WVK6pQGGkCz8axi31PLqckcFi7dMezNe82CB7QXpsB2tZFn5yh2s854nRzXxj3LobkdwJeUmt6",
  "key16": "5e9qfW74cgRRfdTXZssL6NwKXdhq2JRTVU5skRdw7VripaxwDVCvFwEKWK6X7hdFhQMwRSqTgWdtTWru6Xgi4nRZ",
  "key17": "2rx1Cx6mvcYPgmLnA7hAiVTBwxKKENCKGXyFgWt4UthYt2SiwwgFziP74CiLttPQfMyfQF9zeNzxfMnddYKREMNY",
  "key18": "5ps8jViNG5k3e3Kkjkqv6sHPwsg3HAPea3wcqGEXekNv5BVKab4DkFMwQHbnWeSuKDo6dP6aFrvSmED7DsMrnPHk",
  "key19": "eyR7f2ty6Ydjn37DW8VhBzbdTT9zKpUsoeK7nCiZkc6QATVD37Zxe2eD8pU9fwn4sTKSh5D2g3eJGdC22iJZKqd",
  "key20": "4SERGWodUAFXFJwCmYoGfSkNQxTfLsc4iZjgtkNDkthr6jwVTwn1DgVABuhUmzeURQrY6ya5hWmrFfChgugvc63y",
  "key21": "2DGaibFUXYzWN71WephmA1qYnew3SzSBdV3sXrzgobkguAn9HEBCdWnnrn6SZpcgxz7JFhMz1xf4vqbdCkNbJgNF",
  "key22": "2zxZ2gv7i3xAfAiAnF83i7zCGH3Zj6sHrL4sLPuXmbq8MVATSX1ht5VyYAeCvCsDRf9n4nvTeE6m9emDyAEDg5ri",
  "key23": "4Xo3dMkdYfmCtPb8N8VFvF8tgwu4T4d7zAJ8ZQmMvgrcDXN3LZQK3FrJ4da5q3VzGCpfoGLzeE696d7AWeWekZpd",
  "key24": "2TMstXjWhBGJeq2DA4pQbSGEXhQ88mRisgQPsfshuQKeutcEZSkQqTan6VJrgSvXo6Jmdjox6mRGVuaCyL368ow6"
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
