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
    "21RGnDnQQpB2NPtXvQDgj3xcYRcjN79JHz6SYKYSZ6K3JyYScpnfcjSd3o4N5CG4nzKmGYG6yYRndYysmeEMNy1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hf1CeWZ4VRzjWHQL8MJwAhAcassWCGHeMbooTNjDgbZdJNWcPdfjyRNHK4UgLFEsD3ktsvh2z7wp1yU59K6dSQa",
  "key1": "4CaAmsTz8ERQQNVA317kJMKBbTiguoD2uSPPzPEqpjpiLA2PEKSyo2CT5oDpKd5TubyvsF8WTPWGdJ9jGCP7xF8v",
  "key2": "4tfe3Gpn8GuXk84LTsifux7gYCPtC6xMaCdpPSsdhrFWiA53iWKfWMkKktinpcyRn74QhXNExdSujcCx39gbQpTK",
  "key3": "42AYFmtmx7FiHkiBjbWzT8u73BxB5jmw86g3vhkAkWYDs2dDHoXrHCRZN26jxS7LGDxw9q7dGcTGDeDaMGmewQSZ",
  "key4": "4aqRPT17uPtaRfKMFFufbEdZ2G3WDxTYpPhNppC36w3acwpvkVcZezv1y6kbPTgYNq5Ew2uXzvqyPS7Y4W2E2jjG",
  "key5": "ppQtqF9jPY3t51TaNGexq9f7y1Pv8SmMvwdTPW5pR8SkNntv6ZAFrjMAQwpiRCdqYdmphuLrNJ5m4zKendG7CnQ",
  "key6": "4Uu8AiTvmiHZSDH4VW9HYchNQxtjrVUTCKcumBdCq7KbuLW9Q18pS2HzH5KvUU4nZF3czanan9dALK9Qg5MtYGtc",
  "key7": "65HgWJHAB2tG8vSTSHeLGh5gyNp1kwvUhP9zGWNeZQ7inQNybrSrumKGRvgWnngQuNnaLR6cCtrXmvpzNAWqFTBk",
  "key8": "59U98vNPyNQyvgh4AVU5497u7qSWdzhw8ij91HEzymtXtPPNkUvBCTTmpz7kEn5vNmRNwa9jAp3ZXemuwwRYpUf5",
  "key9": "4HWC1QsVJPm38RDnJNPqPgnwmnvqquWjSaE6Ln1qyEAoMJPn713edutKdoE4N5gbHmkRyacuKbSLQgZyw16AdqJC",
  "key10": "3XMfEhLXPZqvqqri8CmX4K8pVKSj5dvTdagQMgY7T1MpNi51fRZUoa3ae5DkNUsMx56XEdtuLGhStAQmcJda6zwR",
  "key11": "3UyxUcZYMdshgou1NWBiD7GbHeaEr9RsXd9CT94szayQ9e7VBM6JK8S3U2wpHRG2PQdVoLcAJT3uthXG1jX4wCBp",
  "key12": "4eURMJt7SFpt5QYcrYKRMniy5sXwLfQFPpwMfgLPQJZYf69ofvLNuNVDc49cP2mE2cneV3dEjdcXNph6SxY2zKZA",
  "key13": "9PhQQn7FFsJaFSsnW1GStTfgwbzYzJoNWcT7K6aoQSyZp8M92uN1BtWveepXPB6ZAjrPLfEqbkkM4e6uP19z5tv",
  "key14": "5kQegcd4mzM3aFWDdchgbCrQoTWN3e789sE91NgxaWtX1zbQR13Q5EAbkzdLmq6Vcer2XvZdEJ8R3mythrCadFiv",
  "key15": "3NBffEW7wZeA7Q4FiQiibjpCV5TmMAXkjvNKVEr4JBLkiUcRz8NmmbqgR2j5AVQHVPqe8MaEd3cnGYBDywoUtjZy",
  "key16": "2Tmf7SsTLUtyDXBjiAiSSwtdYY7GFHUUC9iAxeVtxjXT2CRPwV7J3yiYC3rWFKAXRnxpn9fx3BkjXxHBTWmQcxtW",
  "key17": "BFyBnPM5v78z2T1x5H6NDr5UtckVM3T3Et6ADXta7EPRCyyfZj3ChkcqzCnRTa6nmZ8qbtGDi39wRR215cRAyR5",
  "key18": "54V8S4mibEBAvPgmVpfAn5KNQ5zgQpiWzrZCqHfjSmzGf13ktWuk3quW3ZieQUqy5kuSeEcTiSNZ7cYAMm6W1byN",
  "key19": "5qSAfjpoz7v4CDCjHu8YYzBiuDAQQMyj4aDcGyd48ExRZYqGhqcKMqgSHCy4CMuWRPN1RBXBQ73bAKqg9SrpKNAG",
  "key20": "4VVzMm4LqXzzrSrxuCr7U55NeExhQBC7MA1qziLvdbx9yX6z7LgT6Adx1bwSEFRKe7yjSWLj776ohrWYpt4UWrCK",
  "key21": "BBtjAexy5cdPCKGUDTGPtcTbr8RJgv47Vpzb4YskznwcqtUDpwT21BUNYnQ1tJwMsb7ZTYBv1DBUgWtqSNkP1rv",
  "key22": "5gLuEfp4ZNPrw77AU3mDHXoEodja64NAQgPNMrm1FmLKrQTNB1GYCUr1KAsnFgLCHqwgy4kfhCssSxcaokApqv1t",
  "key23": "39P6ZiAK5rrp7M4s4SJnyMhZZj8MaM3T4ai2DRkW6ewqcnY5e6fHxZEpeaU2KiidGGyP3YfovS7yvX4fGsS8nja6",
  "key24": "31wioikJD54aUnvXXBvaqbRqMDfbNF25JizeY6xBitbKCsoieoE1mx6dGk2Bj8ju8dcm4LXCwVLiuMNt4CvHMtt5",
  "key25": "3oSfUvFxvN2UZF4X6AnwJq8RTzLat6SSdtHMWPrJyeehJQQUb6Jg23A9KGNnqv2no21gGvbC9BAhpiW9NJw3NH8E",
  "key26": "4RjxX3haYLaiVbLmTseGV2B6fW65MTy83Sw7brdkqqhAZsT4rrYbo6aqy6pL9CfpNPDW2eggQN8Z67QWSpGH7uuH",
  "key27": "2ovRpjG2Q2M39pCQ4WnhMh96y2PPiz3BkEzbGx11yTHbs8FBps2D6H6uw6jN5qXdbQHj5ZkC7XCbC9nUQ4XRZBY4",
  "key28": "2FQvTUqmFgt5AaUvqsJbohXP66F6AFALkGFsxqCCJA1wKhxkERLyrwr3kVXAdP4ihE8odjsJqAjnnSEBHoswBZPG",
  "key29": "5k91WrgnZao3BsUxELZrsyDAtvMNSngNQF74rRQLVVTS2V7qDYJyjcFCyZEiUom2NmKK6EYKgKeTLJpBf5rCKvAP"
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
