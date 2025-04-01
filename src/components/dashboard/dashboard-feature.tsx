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
    "3WEhcBUQcXcnU3BCEVPyn7oFD2x4qQGTdUcF1hkX5Y38mTByC1i9AXVxxMfedCL26UDaxfKuGaEg8SA7Sx4kytHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4imtzgtDsE9zsT7oxB4TAt66yHg4aFAZcB87abwKoMbM242UtBMNb1LuiR8Ggu9zjj37vtZ1SQAPV4QDGvgxLTRw",
  "key1": "2i5PFdxA6v1zpXzmJ8i3am8yT331Ku1pGsWHGu2L3aTaW1kb1eKpWTEM1HXg8bKzECC24rVDNfHMi4Ro3nUsmzRb",
  "key2": "fVqofBEJv4LyHMdZr27xbaKRzk9JorMFbDwzy6to464vQq9x44vikZjZgnxzw9y3DhcEAbNyiATpC5BvUUaxAyT",
  "key3": "5HTzYmLJqaidqCqsCPsL7YypNjQNwb4udky87xVwFdfdu9yGzuVHAFpPrKDt3yC2c5W6JMgpCDKMP82Fm9ZgWLsh",
  "key4": "3VTZx8VF3RYEoyuaDKcAY7VRUEbJ36Ewu1yYJiZ2JBNpjHUZPcRgj9w5oyZrtfEUd883cLmE7UvvtxrdifQNeaJh",
  "key5": "5Ky4cyjQjb5A7ob9N8St5EWa8GNuHF7UUTDmrR5DhgN1RweSxCqhbM15aHCUj36MNuLtNDDBaxwYeHQLTqTG1mx9",
  "key6": "TLeVCbMDyUnKJedJp2ZBQzKV35KT2Z2QXnMhNyNZH5khXNopV2NNpugHpGK9hrtzDWgVNJU4jMA5d6ftSXqRE2Y",
  "key7": "26i3DzEo7N3EUJMojjzY7vjSW5oQgEB6VKYMcfRsw3kkkNnXxTpNS5tk1QGuvmYiyw76D6bzGmZJ7Ssn61Ja2Ejs",
  "key8": "oLyyVwsnKRPyuYjCeJVgW6RXnrixkMU53PGgVhqR5RbsCaaKm1ntaGX82rd9YkqbN1Z567yvmTnpxBu6UfvMdKk",
  "key9": "43D2k9P4KAKjy356PSrdSWaa64YjrbMeWbG8L1Nbne1rUub8Z2LaSJh5hVHHYbjD3VC59fZ553DFoyeefy17ivZc",
  "key10": "4hfs3AzMwLjmyhgicsMirNAedJgWTe2BHqkYAUFcmqUTCNAGCAcdFCYD5WqAeaP67TpKSGmUPYxLhhoEzqAxGjq5",
  "key11": "KC8ufbx7tj4VrCTqq3B73wFFKHsDuSkeGrMNACzETz5n7JBHDAdiykrRrADyzNz3U9MbubVp2CLCU8H6h7NrCAb",
  "key12": "kLXCZnS8rnRAM1ujNiwPw4m2dNhBpbmwwwDCUgCM1ZqNXABARA6GHS14PbZAGC3EiLKY1gz15JYwPRbGHMMMM6v",
  "key13": "4o87C9tmRZfGdHUsWS7Cqvy6KkdNaDMoDzT5XQWERSQSM5yixNMJ7w7uyddeXqHcitfjktXmx8ZJTEfLyE4LmRyB",
  "key14": "3GdSXM8M2km2dY8137GxvWNAn5daizo6TonChPKvExuP3jvp2d7ag4UtJPaefL11GnyTZYoRkVVTtrTj4FBq62SA",
  "key15": "2D3zdJXeHacb9dQ4WAtu16pNu9pAt5vEYaMGywUwjdaknFxXPoXXp2GDPJin5c4EWiHk1fd5nnqXoAMJL5fZ7CL",
  "key16": "3caUh7jDnv2ZHDRRyYPZArX7uH4qV4Hxv9XThHbUMC7q4QdyDPgD6hdNgkVowXziFuSzYWGsb4UGWNZWLgswxAPc",
  "key17": "4LEHfzFGJ8t2zWSdqwVFwjFo2ZSsTA2PXrDBCjb9XyMkedYuhAKKU9VzmeQ1YtActrFk5URcbawb2dbxtLXHVhRC",
  "key18": "2s2Lrv6gyk9vHr6vnX1wRYD7n5jFX9amAn2MEBGLRhx35aBjTQmfV2pQy6Nki9gyUYUywcEJB4P9BRfUeMnGYukg",
  "key19": "cWazu3L2FzYfBY1bqt2PkWLfsMNg86sh1uF7ccAxyXC8Vm87KQKoRAPUqJf277S4V5U79ExnMatsDDKbfcTjPXP",
  "key20": "3M1N5oWrUxhr6eChTXJRLHtwGPcbQrRof1Ege1BzeBUFjUTap4xiSQquEaeYEgwvSeybySd9CfqRuAXH1wjdtjR3",
  "key21": "2XKvu7TVGXPLRi6qSPu5vyoLcEdkPBkKzqAHpCxj5hzLQTtuRWWs4EmicnrZtb1iJuKDr4vKjufTYMeK835A2DMo",
  "key22": "5qYAiZtYMUCRkuWTqWBgFUaKP6hCW1w31ZE8TZW1Zos6EPckyTsdV446Tjixtii1Zyu2L7ZePMV6K3rr2xhftH2k",
  "key23": "4cTMuGZdm9WH35suMgsxn8erNJf5vTveK1CUXfPegVQ2YfxmNAuNLWjcHHzCnR5v8vsomRsL5vFXExtifEWaqhni",
  "key24": "5UoNmCZJVRDCVVNtRxhhfU29FbVejmZYaqu7HpNiJw3AjNAXeTj8EncGsF5SAjpxPj8xSr4WfCYrKRzyReRL22jL",
  "key25": "5KCnXezf1J8zac4wW1tMoeYc5JUxkztC31dgFSwS3R9Tcpw28qY6RrvmypqfNYGt974Qr1GQsssVcq4HjSmaqfsA"
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
