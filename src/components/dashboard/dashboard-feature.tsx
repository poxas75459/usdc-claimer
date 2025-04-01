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
    "3mcB8DbNy43qZw7uKQm81Jk7LXuej9yLeaFDkJYvVermWrMF7ANpbSomS8PRBYrjehL7AzaT44g9WUvec4ttYXTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gd4PRaK7ECoeT6K1yNzq6ogpmWx5tCWmgtriDpEy4gbgtj4SJmpFmMvdzcovpJoUDRfm7rMxT8k3sdDXtAzDvq1",
  "key1": "vnZ2B63hmihDUet8Bv2ZpXjM2KFhVeNsYn8Vx1uzDaQy42NpARyG58GfaAuYujyAPxGpDhFsebdwbFAK4Ea3gHX",
  "key2": "3iSwDHyXpmp4z3e3hmTXXP3oq7yqra2PDnacE7HinJ21hLg1ZvBTASKnBW41HeNj29peXtsKm3C1TMHT97vCiR8q",
  "key3": "4Ti5kXTjtBiokWSs4qKbnjA1Db4Jv8JiZ76xFigdrWtqRrBNdy4syFYkU3TEmEd3Wkdv3d3tkX4LDLV2PSzx2MTF",
  "key4": "wT4p1tCtiUMeJdPzNdwhMYG6xJoqq6939aw5RLtBn8918FFeK7FfPSs5qXxgPBcpujh9rE5U8r7k7VNtbrbULDY",
  "key5": "5GYPsu4afWrLhsayHcaEdBcSYJ7EgUem86AQdJZgNRqr91MVFyQyp8hLKAHNTCpyx64UAFVpDYRSxUqC2aNM4xMc",
  "key6": "3xFXLmm5x3L5rVvNxUPQGWnzLFCCyi11oAC2DHhnZpikKcQvRjTSMbYkKVvLbpzwray3SGmKS6WhrhebbYThkegq",
  "key7": "2SbpsxwqjhzHi9vRzPXLipUFZd4rRQnUUwrLV8pjcZ5vEFsfSf5afpxbi8JsiZ78x2WNkb9FiBxSSBZ7J27Wfm9T",
  "key8": "5dBMtSMVJBXH8yuaCz2tYyUMVpnbgLyeeehf4kU3uYYHjKSBmeb8EvPwRHVgBbqEqejTnaoAX8De6jSbSdtdha5F",
  "key9": "4CQWkRqwkZPt4u6BnR47Yfwrew1m6iSdDiuoNaHimYGGyicaLwD85ztrBous8XBuCGAF3z6An1wgwMTTDwk7E1J9",
  "key10": "Ti9ZA5W1TQowpUGk96AA5XaKty1ghQPeUp4msG8agLiqbpownm8ysouPJdHrTguBSwZJtym4JmwgxPb7PzXWFAY",
  "key11": "4xgTfaTA3YSrHrWsam2HVbio5gs8K9WKbjaxChy1cSnWEQzfQTQrNMYaV6UA8yzcpCwSWxfpJ6tP4J5pyxLLx3h5",
  "key12": "4xrhcESTb2bzYSqmibErENr6QK2AMWcrkqzRsJz6VHnvZXwSWuy7mi8bNuH7ca9uz1yfvYRTk8FPj7boT7ZX2qD4",
  "key13": "33DQs8t8ujTe4jbDVuqhazj3zFnus2L5mwbhJdxnY6QpPTK79hRoatdKdQtqzLAXpw2unmfDJvbdDcDPQGTwu6Lf",
  "key14": "3DFZatCqHR8j5sibrboBAaaoR1wsSEKWXgd3Tbrjfu5e3Stt3kxa8LsAMMXubCjp9yRLSwUBEtB8JsrwFJv6RWb5",
  "key15": "SeE8unmoL1EkPWxQ4vHzsVJwaZJuLx9gVKuk4myPZ1QcszxpHSPkdMW7zMz4gcm3r4GfiVcUH775nvcxTpz6JUz",
  "key16": "UBfnXehuPTS9YLkGncKizWGdGRw1VS8zs3owVPGmhv5DwJgEgkz1tF1VGqKik3uy59tx8jw9qt9CuBfUZAbvn1R",
  "key17": "3dLwJppC74S4sdJwKvgMfsd1L52ebZHD1NaQGpDX2XjQqnsnenQzgBYnoLnbnEQVXYeTR32TAbxPUQ6mdUrHrVa6",
  "key18": "sAk2QB9nJU5P5f1gwfNCdeiSrU1JEBApbNsirk8PfTfEW2gm5TVnfze4thKn13DjBuyCNqCqpHnfA8VEwHRmGXj",
  "key19": "63Mnsh8FvsynkMWfKvuhJ37vrN84KbfC11XE97J9egJ5ccYTZPYSmi3hFEatVDxzf4TS4m2CLBY7n1sDqNkkpHKf",
  "key20": "2QsMEoNcfqTK8bdjjmGxivWph9gMsJ5PvrSxsNBCtFg9J64xMAKqBRMzW6x4mZ68bZcgUW1o2nXVqbBtXyUxTcCH",
  "key21": "RZJ2avNNjRpbvKpUTF392V85SGr92hSzTh53VPyd8oQtVoy8bte3LT7hNnZFghPc31wxvF6bsbMZqfqvN1EeFaL",
  "key22": "5hAVjhc8RMhqycLb4bLEkrQbqcAjavT3e2rHcP3WozQYMwEYVzgZxtnKRQaujyBj6ZN3Ahse1uDTizdtovthf7GZ",
  "key23": "tngSLSaouoDxJYskCvan6Fjnoy4sxFNZKPu9fYuLNTKM96QPWoeKc3sUNUDeDWedVh2JstseLsnnyk2ivgrLdDA",
  "key24": "2DcGw3dYgdReE8fpKbKqfbfbPfbBWr5nG8QAHUms5oABVvL9GVoBJ3q2SCFoJ2bVfvZ73yHG1p6xDqX6yZA3LMJQ",
  "key25": "3AiEGZELvWUADAW9CT88gaGaHfgmLXYugBpQjqyS1ohVRDVF4Xezc2jXnXZVhrhMLoXMcKJi1USU7pmrmT6hVfum",
  "key26": "4vEyhSpMjRMThqhyeCThRN3z5QVoaDsR35nY2fXNPbyhDQyTcYcpnVH8nc8xsi8sVxW4DnKapyA7Zug2JjJSiuMk",
  "key27": "4wUdLhWeuBBMs4cujfPLrEqnGjVpMs4SyQM5PPRQetABEpWxqdMs4Tyg5sqxQXyDfixYiP3W9gsrSVGAhMTvCssQ",
  "key28": "5kdjHoDxc97XqbqqgNcYivkw2VY3GMrx4NPLo1KHTqYLx2vbQoataJuu53MyDkaXg2aF5rgpztRzvbAwshQhPeFq"
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
