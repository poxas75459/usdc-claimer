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
    "G1kGf4td3cGzeS6dPMkESGUXc9mPXr58dGu3vUpiFca9uk4e2jWGu8ETeUPyECJkZtbkAwuT2v6sth5auvgHzg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtJACyka5jJeJY2A8zveQntmaVNA86aiUbx9cQTqJEW7WUN6TF77ENuJMkeEhtugckCQczTgMzUeya3pyQxGcyc",
  "key1": "26UYx8qDgYjBJM6XZiSUS45QG1PuMWbFsXEc3bvaBCatWUy7UpV3EztjTYsYc7tTEJWgbUcZd3xg7u4GgS9PmnwL",
  "key2": "R5musjH89nQvRmT2E5chXVAuDKLuXCMuReXFJdQgSsM4LnR3GZghbSbdarGJL2jCbeXA4zRvvnK1v1iDiUHZ1SP",
  "key3": "WFaK3nhXuDTpEXg9b14CuhwZHS2sCRDNSsey9ih8qnEKeP2XS66u6vRajjngaM5tYuf9KN3HAeoSGHq3TMmEWNz",
  "key4": "43YL8w7a2G9xT4RVPT8Mdp89JbFEvN1TWEUko4Ngitk6Q6GyAfY3GTHYV7xAyVyv6gNSE1dPbfmCnTG2fRtdYf82",
  "key5": "4iTpxbn8jjY4Sz6dtG39dYDwKbbxr1RPCfDyhrrV7hnVLBveRNhsPekHX2yJUV5YFFPgWBCaRy34bWMs8fkCJEWB",
  "key6": "5umgNu1mdfpdzSATRRvki1eZ4Mafs3EsrfE2ut48RqyfqsGKVXZ3AqHuUgsZoJB4khVNme7wdJXJBLtSogCkXQEw",
  "key7": "vbJBCRh3hZMkJmZTjyE7KEX1xtXQnQXzgDDGoLW1UMn9USjHgy1EouZAnwEpVPUzzvxePan2pbCPonxQTApWKcg",
  "key8": "5FZJNmZHssZx7Y5K7CvR5czSjMGmUHHaKEqhDSBw5dY7iTxyN4KJG4nb7FFEPB5kWiabicAvQKnt5Wzq2wsZmU6D",
  "key9": "3ePvppJVtrY1K11KKVd8JuCpgVKgbfL9dtR3Vj5k6RCYF2bQn6Tkpa8Dof2RdkH9Q7fjbpvyncJ6bzxuDj1Z2vVp",
  "key10": "5ZDaT2Nb8GN6Ah1BmeVkoQ5YsHxR8P7cMGZxBCN3zy9THPm4P1WMtAv2dhyrSnzG4U2J3yeaokg9fdX2RUXbPtUf",
  "key11": "2EcFBwc3t2JXii84tJ9QuLA36LCqP8aZ23QXEB3isG3jqtYxTnbJdRWcfu92L5B3Aq8L2cQmfmSWaG17HjeHAeZ7",
  "key12": "5xTW2ZkSrRPhJFZMyY4Wdd6HCYWsqzX9HUW9fX3Q2NdxL4iZu7Q36SSELvQAiUgpiopEW38NDZfFD3fnhvJ6119m",
  "key13": "5XY6gfrhami9gDF2nDs8sCkaqK8qgDbutHRXaPiUmytLU8t2QWvTamMhFWRh4CMNSKrScrFqUu8yMqo1yBRGNokb",
  "key14": "2XarxLUw9RBiCc89PJ5q3bufkc1H4aXFK7akzh33gWBLwurJaC61cJZH9Jm6CPVe4UXawboEsqx4kuWoJjCVSdN",
  "key15": "d6tvPNBnyyxxwo9QRkhxqxQh8hK46XUrjcXpD86ajMfpWHyNBNdKeBL5zzeUr9aM3cukAQZY99qKVoHu58CMXUv",
  "key16": "4PVDPrGwmFjKEShUfm9zNUZRGwL6jyJHSyBX11DLqXxqJX4YnJwq336H2k5Duk7dj78oUcKByLvqJuyzYSRKR3Cr",
  "key17": "oWL5fYY8AdKTLdN8tgbeSC8QkxEDN53ddKTBkDnBcPR988K5pKuCxVnKe9HKz65gimyhfsp5f49o7tDRe4s8CZs",
  "key18": "2kHDy7EXm16Sfj9Th5kpHNqVEMPvCJetpdksknH7dKUtRSE16vTBPYo5hQE7pGMaPSeNi8PDnWi3VELPdMTT3EWj",
  "key19": "5737Zvd8kyrxGA5tyQ1qWmDkzrzSgvDKwxbhN9g6dQbeuYymy9pN8dcb1HhBFLokx95LEzk1dE11zxnWTd22i6oU",
  "key20": "gPqdd6A8GmWUgEkEktdZ2ruYKKR3ULcRCbGfgPoiwLbEXw7Jvn1Ytn9r3LZbKeYXomB22gpXbeAwnYu5bNhqCBt",
  "key21": "2ZyCYSUiSEN5RWUmanDrt1utGp8nU6EPp57WeNNmfe74mftDJ2TzMEdj9kBNP39Z7hZaCUa73nx715B8rDSyLsjz",
  "key22": "3sNaeT6b2BmFQGtLUuHYg5im4a8Zshke9xbzG2exUn87CvattUGCmDHztpvjXDJXBuF6PfQXGiJz1qhRYYHXUkkt",
  "key23": "4jXhWhHUFNCPho3E2FzvLEkRgmkAKUvuBEGHFgehKVvd9ofdB45X16nos6oo94cPJbrVZQgXNL1ctgUqoJRBc2g9",
  "key24": "5B2SZvwNDeo4KTYB1RKT6V8x7fpiyUnRabT2bGpiuVNbxC1LW6SmetWkddvdtXN3Tnn8x5vZgfpk7Ebx1xCnMYfM",
  "key25": "3UXZjJe5RR5GiWjyHW7TWU3ciY56ehF9GmtLsW6QFjNXf3KnXc7ZYqebq9ryWbtCAZridJStqS74pfb7VsqdLhvW",
  "key26": "5CnoqcibGZk9DnatoJgUPWfVjEK8NNkmMAYnJqMBmXNwnSTH6KDasSUAoNNfai3Jsipzb6byxRcpyj7A3MVqHfKH",
  "key27": "3BV93V9SGZFrgtv8gqLXFwqRLGqawzFboArsiWybTZTSb4o7i8pXVhukA8XsGodVqLqPbyQPS6RAwidxtojDiCyo",
  "key28": "5pSRrsG2wWfFppdALXzebnz9zJMB572w8XQLgdVBpi6jR3G1hfVodtHE7dAPL6euPKnA4HeZCikuMb2kJZoFDKfz",
  "key29": "61vu1uKgpeGiw2bKe1dAympGfRwryiPCXcnodmrR9t31bHkaSP3jMxN8cXd5X91qpiYqZVNyfejfRwpZ5bZ4B5RN",
  "key30": "5aSK3AuAddq4udf69x3yd7b6Gh3HJzLaEK6gaGCpokk5apvmcmHL1YXNxNCyPPpf86BjPzgM7Z12N9fCQpBSj6iP",
  "key31": "vJqebbM9n3QQgMem2twajjL1AyRudfLir5YPu3aPknCgEAjwGMv2GrMPutKWwHbnJ9eS7eFWKY5twtDESnTPM1W",
  "key32": "5C3zoxPAPmz9Cego72CjNnymTBn6aCnU8b4XbvsQ8CjM37HsS2AY3mE56bxNTgw4tcqSiKhxKTKKn1dCTWGNMo3H",
  "key33": "xwRQUbJzmbtaZH6tDwyqD13ewJHkWhAbHrWCAMn4uDMGxYX7PDmXj1SDKZeHPcrPP37vEwJvLgmU96qBumZ66yT",
  "key34": "5CpKaTJ2ojprqd5sxb95gdc6GMVVNDuJi6kQU4pasEnZkE2CbYjswpAn6RE1TtXh3JDMtufend63Py8ReJAgzcV9"
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
