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
    "38dZDLgDcPX1CbQNrYuCfkSzc6SH9p8caGmgwuApk6cP2VvNa5qqoAwmZf2qH9oiHMTbSvUgBNFesa8bG5vG8HqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vFUghHZtX36KboqY8E7C3PhnQaBV7HVbimhS3cTD2KTzW47Py2nqt7yWWTdkn6sTXqw4r9V6JPZAJoNdoNf1Q9D",
  "key1": "6V77bHFVSYGBcm2kTnJtGtSVUb8pKCAytyoVaK9zNWevcenzGXwn94FkLwD97uq9opsydn6NeWWkSufTQjfFepy",
  "key2": "3CvcnNjUsUQLXcVR991R2icuu3pAZNJ3FSzYmgHwtoPL2jVv2NMN8SqYCbTXQLFKPMD8DbJtucEimyJuhvxk4xsw",
  "key3": "67Pi16j8UbgYMbso9rFs8JYRyEBYvjCsAvHgto3LFZrtGuhHdkHYut9URWEDXw6vuWACscuiZ4g961AuyxqX7S2z",
  "key4": "44G4i8LkyxYEUADnDyUU1RpHZANeCWzbJmq7W1CtbNfD4bMAMxtnPiSp1psGPZ4Y4yBSQHdnp8skYSCuiKSTA5CA",
  "key5": "3SqtwNUz1KRJ17HD5JQN1hjHEUMvF9JY6nbQMYKEY9E2g68aJtffyXQdGYzUEBn9Q4UkDZGBsnxJLmq7xNLYFkom",
  "key6": "4UDDaodmy5MxADpXrxttdpGgPr5vQ7KEgdsK71bEHx2sXmkxGHkx12nXf1NCvhvyXVwN2Wsfm3hsJLGvEjaj3TjN",
  "key7": "3iw4EaYF8BQGBkVdEA7i8ARMjtU8tDWvJFT3mraR2ejAJ4dmfWpqrey1oFCqaPioe56CTiewpwyJievvuwrYc7bD",
  "key8": "DGt6FKaszbdu3s4vc1PEQkdQe2uerKm8N7RTZfFPcf2Yf4jbtRbLz4UE2dqpArt4hFuezgP7DDHiijeL3b2SRhz",
  "key9": "4ThArde9mYvj5abUxuJzqvJbQj7S22G2VRMChufxbdC9RpUca8ujp4sps6v89Fcjb3XxS7TrQEDwnSzdwo5ZnTuQ",
  "key10": "dDjqXFYAW2oBLYe2VcW96LA8kRAWsVxNyVXYq9ymfSTH46gYNqKvDJ8nu3TtD6QMtDpgqtGBTHF8U9zuadFZaeh",
  "key11": "N7Vs7PEDunC3KVwrQjLE8rVmNu4izxLmNyKVn9K9gCpCQoBZxdE4zZfKRffu7DhG3je1Aidrk4mmgLMrYf398r4",
  "key12": "4rm4smHHR8QZBuV45fh6i2MFkRrWBL5pafMevyG2SymmmboBDwfbnpSKD3fwreSvv14FFN3SJZCJod9DtEhT1ziC",
  "key13": "5MpuDkTzivVqQg5ccHTLhKTvADZfttKMHCPuAPcadDZsvLj3vhYpT7RdvJVR8wEDHk16WfPRrKyQ9behi2E29wYq",
  "key14": "5CKReff3q4XCekMageJLPfmvFVgADZwaLXVEiQUNQ7yNzAMsqgHPboTj9qHCwSGtM7kCMxM48tyYHH4a5P1QwuL9",
  "key15": "QwQLefLcqFRGNx9TJKvSCBPQL6zqtSpstDVeirYkYdBj1BbTP36CshrG3SAf2YTSL78vGwJsFzp4TM4eXVzBqeM",
  "key16": "3j8ryW9JyH5zy6kquvsxZ4xSDPX4HNyZA9juqUSkmzQjFrF9ksNffaNTkwPPAB7ywaYGUCgDiYKDh6z2PzDNdvxK",
  "key17": "4pcXyQxh1qAjRcBKuX66X8KjxMq6vLc3NM6j9qUvQ2NGK1i2EvnCVCqrDD2yGPqo7F4y5BXUEm3bCuZSVkGdyu5f",
  "key18": "4pRcrCTZZ1fHMesJvA17kZN34XQKwSXCgZ9BWnbJipatwt97ziS9PVgiN91XDeRRX8eKnpw6hKHYXmxcQ9QzQLcL",
  "key19": "KXgmiD9a2kS9LDPWbXjGfMxzjQfEUaTP4d6f75N46vK2KfLz6oteYJR2inYAX1qPqo5Q6pBV2JGnmaonHA88wmP",
  "key20": "QdCgjAr94pHxhZhjTE8tHcfhHNVNi2Cxe3JD3hrQnxwpDkWDBwWx7gzpcEkE4rM2WjsKaF82SxuwFjxJGAa7vYM",
  "key21": "3QRRR38EHMcegcFjPRRF1TudqJ4dp7DqmxXG3xsniLobFz6NCAKqf7jJWc6oQvhR6WQsphJxkLeboqW3rGSqifeh",
  "key22": "483cktP2AovUsnDX6UJgRRkgTiAbwxXmkM5VSKG5QUuuGnaqVHvYt5JCNF2BKs25tgqi4jhzhxExC42FDP5jGcWp",
  "key23": "5JfUuvdqJVeEnTUGf1TYLVUmWk7pWTPWWSVVkuGxgAp8Fmqpk78C4Lv3b3WrNs4VGYKJmx2XXPgSPNGdY149LfkU",
  "key24": "38pmwbvgHEquhqcaFrxjH38urVGbrLJHna4yLUts3fh6kicLKx1zSej5U86dMhpse6CEGHA2w18LA6zWW1fzXHzU",
  "key25": "DvNhR8Z1iAqDCVvU6RYmz7gqJM6gRy18fWPbK9jyRwMPbPBL82eDcRFKLo6MG8hHQwTAhS3YJtTr1m6z3YBkZ2h",
  "key26": "4Y54TcteFFfPDenDiu9PSyEif6ffXXRD9EFS82j3nA9X4xnq8iej2kcEieWZdhbAeGSVnpyfAwb1LSjTaowgRxuX",
  "key27": "2o8WSVNoGbKBSYWmegp3RuicuTYLT9uhWu2PFF9jfGH1B98dQKxMF6KG5ix4gmjRWs5uapB2L7oap3p7xqn7a5FE",
  "key28": "4i1Y6N5Wbx4KmNUnP4wzSUZsTmkEvSJUDRigqB9vS1RBNACoS8JPJyiA8TsZn6Vhr1MDR1SAqS5gjogG1Z3QSCuG",
  "key29": "37CHKvzPs2MMdCVWbPvTBqrp1Xv9NnQfLgAXvaQ23qe2h861tb9XVopE1VnxjTRKWp7UgvotEhodPc3tvLtFX4uW",
  "key30": "9sm1vdbEpqfpbLz9s7UeETJSkkGUUkNiBYnXws5ERFT8wtncnFh4CpfnF3c9D1M7wvvi8XKFLE5sxRC8JMN5t8y",
  "key31": "3vtSXzC1daKv83Tiiu55x5fCD1yfR84pdC9pwnH71EfhpMddDnDc72VRCa8QaDuiHXqUUS7nhC5HyY415GUsbnnu",
  "key32": "53847v7v2uLJcUVmb2vQ8vZpPbeiH3gQnDjFJkYCzHfS6XApZAaFZnszbszRr7p2dVCnzJ5mzcfT5QrzGeNis7VH",
  "key33": "knXS9LWy7kJskHoDCCbQzeprs3msjst7HTg8Dcxfd1csJnEBaDngXRorqf19CJvxKW5XLhbrWaaj2bpArxacJi5",
  "key34": "51Zte1zL37tBE3aH4QCeXAfJTNXHysg1DimRK2vd4hyJmz3RE7HsCmQpCUhUjHzZiEGnhYPBUMDBPD5Ffc93k78g",
  "key35": "5pC7xogaYNj5ANLMiSDh37Lc4WpHWETi2D8FdWA5dAqj7LQ4qPWtdNh5W9K1GBA1TwgqkgEMEnQD6B8FZQMdkMNc",
  "key36": "3n5S4jGqMkhqbtmzEXA3BAC8cPEV5pw9CpeCoP4sJx14s7DQbsuafCJZshjuZeKRmavAYbaAZ6yM98ce8D37sZqC",
  "key37": "2SzGVGrz2gL8snZugJBn7vNXH3Uvo8NDDTzQj3TuCA6WwJmeS99XK792knUqPfbTXQHVbvirCBHws5Rqv2k4jrY8",
  "key38": "kp4nZ2BUGAqdXCt7ze7r1EPyzqWJqfkeM2up1iBXSx7DsLk7sK9R9UHwhPyVULLBbMMD7UWfjY6qYPJrif6bH8i",
  "key39": "4yuspfir6EaMsrjPZv6jQ5qYoPzxMvCKwnXcf4YY1WvLWrq5JCUwLwFCLbAUTA7Jetpwp9yG24TSkZJ3u2TcUGEx"
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
