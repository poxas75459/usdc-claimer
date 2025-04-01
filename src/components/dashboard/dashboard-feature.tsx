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
    "WRLKmM618EVCR9J7hogxpd21ApGqkouRKGFvKZPSjWUjdeKUr33REuwM2haSZH3YCMisxWi6qZ18aqfSupmhq4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gspHm4r6Rz943182x3FXiT4E1YvYxSbNPNiw1p72KGTuuuj6zQ3mQiyYonypVrGgxFdd5EaYRHQXLtTN5YAtJ1m",
  "key1": "4D2gmn3dmVYCLvPjGhoDGoGVyTNKAiAXRYJG9rVKL7QE1j5EB2f39gsPDAK31XgUdqL1VgRpYqj6A5BHFUYUnPBs",
  "key2": "3i3iR5j5dhBKZPF12LXvfSfvrz33Qg6aa7mPCJbtyGWjJZdB3KKEA35Kx5hX4nTM8Eh9sNEc3zX2XdGJwQjXZkgK",
  "key3": "2nNJ2gAERrkGyZJweM3yYGbydBV4kBfo9qKk8ieAK1k2yomgGFQox5oMWetunmyyjrxp7WkjUfRGzBtfhcJQhDBn",
  "key4": "27c3upJCq3vFWn78smNsdcGRq5YNLMFgVp8jZ3AEFNbF51kJc3QidZXeo4ohTG5qRh8GZGr7rrthhQJkTHhB38ea",
  "key5": "2X8tCTq3dA9a33v2xmnK3NajS5SQjAcmLVGrukqmmX2c7PjKWfCzq3Pj5C6KrShAULkykSbh4DH9wnNz5KgomfHR",
  "key6": "4AP1sw9kGjNTh2ijUhfuL9RENctao7n7N4vmaJKvTHVF8oQrxkgAV2Byp567xxdj9WWcixs9qJsEVASozPDDncHb",
  "key7": "BeGm5Zp6oc8XidaWPDRP8KL3a74yxyLwH4s6WVvqvHHT28b2T1vQmbcTNxfwj5aX7NXz8SEAV8nWrUnNXW4LTks",
  "key8": "3krS1LW4bveZ2xE6jLgmVPnnaYZ3fX9AngrGzw2T9e62wYqvEQxwuZSxDyoD1KW6vZkfye9e5DauyKBMZidYHWEu",
  "key9": "xCTGX3g1NkPZfnthL5TExyC39tLjd5hf6vRdFe8gh54YY3WA4drbXLbQCfx6uGSm1xufKqxrJ71QXds2fx9VMjT",
  "key10": "4xwHyRDQLBoVA5T8XbgfxYhfQzjiWCvZBsZejro5ps42wQ2vneMqhAbmcyjFbGy2bHHBh339P3iC7A77RZhjnf6C",
  "key11": "66DhRGieLbRBdnzjwFMwCjYDtpy1yePZBmoLhh8wbKTD6mesaAo5wFLsaMp84WEDiWwjsyMadGeBQDsHMvQBTp5Q",
  "key12": "2VwkdXGLwNjuMyUofb5w2yRgNemLXnjUii5rpikrMhu9YmGGKYkFxZwt66NCyv4HSb8cEAyan7tcArsxb6PHUucU",
  "key13": "2FhyN8Nc1HMKv2dQxG5Y9CU2Kh7Pv8HcZRd1m5UZe7H8Qz3npeRiW5jVkWQCyYhozavgsHYivjDAHFWndGW29u22",
  "key14": "3jispmK6FXbgkSYeNGS8FFPWLNH2pGNYh52XvUnrjDkuM7k1vwZARyt97funSDrgGVouUqchA1PbbhG9RXrbvxV2",
  "key15": "2gSipGPLzzykUNXN61QJvCk6xDsxHzpvqrJgbiaNQxoTRADBYkEtycMpiMA7M94PwPdBs4yL2GdfkZcjdcCVsUZ3",
  "key16": "4TT9JR1dLBPk4X25TKbQaRu5odXHdSnLQygGv2DpCgA897pk8xFFuWR4JGYhpeCNUsxYZNbtbqP1etBkhxcQ7rx8",
  "key17": "4ujnnRiWPxKkZZAZFhc1fq12fHtd37td5t7yfrhJMNab2au6mUsZDj9q3dED3GJTDterx7q9o7kaUKGWHwX3gyPk",
  "key18": "36V2cFRudRnp4yMoDbpspjwYsw8Vk57C8XtSqiujnaLjHfvKur4TiXmgxwQjJaD9ARxr2G4C5nv22giDwiDwTLLU",
  "key19": "2Qk79fpWmet1thdjBJGYAC3jLsDdeAQoD88ieS2CnrErV7M2f7qTQiZbZhYXfspEjz34KntrdVVvHfk1NzSZ2b6Y",
  "key20": "4ibB23nCv9WCrssKQaxdQvB1HYzWjiWSn1UXbwwGjTBz1Tw5LVwWc51FYz4G3utF4A11Wi4e3ycu3FxQhKAQ4qmM",
  "key21": "4xb1fnQSRztohnKbfSGhCvophPHeZuvtVLa4StZAGRiGPddc4svNqJAe65TJFoxhQqT9o78zdSNSS94GFMPokwSj",
  "key22": "Jh4TWhQJJS56TeMQpYWBGexJpDvrz3aKds5iYaYuaWqDLFAZyqtmJjB9rvVRKfgPP4ZTnrrXZSGoywja9xTFaoN",
  "key23": "3x8298jz5MS5bDiuea7pCBmuxQnZ1dDBvuzM9wNg5xMH6PQBeJTFcx5sgpp3BtbRMFZWY7vgF3bdQnNWjhaGq69r",
  "key24": "4NZKqTzbFgL1zPhFMTreN9pwEWEsbFsdh2weYnGPYGaJh4CKS8EoQ78fPzcUftnst6aCLFL7svTwU61P47yjrqYm",
  "key25": "3crpVW9NS2u8cv7VictQAr8b2jzg4YHCU5LenCfhiADPZmJtY8noKBGwbboYE3MFEjX9JxLUvCVKLVkecpSyiSB3",
  "key26": "5fws2pWzJgoFBHreWfH2HeXJeW5XKf93XC3UBtLPhgeWLaz2eg65tt1z5FonR1kPqXqBu3ZZi8F7qnhfBWqPFEnY",
  "key27": "2wtDMLM1KrJVQGYiy5jjYosdAu3vWPZSiqVBAX6NEoaLVVtMGV7dSrh1jxEW3xuppF3LDv1fJMHEtVcjfrKqY2oS",
  "key28": "5gXWtyENg9tiu21fJF8LaoKFBrF2D9vz4qFcK6y5Gj1oTnHqafzcyFhv63mTRfkJ3HPBmYzhvHfzNUf3e7EHnPMU",
  "key29": "3vfKwqaVj9SpQNCzNYkCKAEXppqKPah4ZZidXaihCHEiR25SPNpGhejJ3n1rB8MJdxbRQakDEzEfz8bHFYuxc6fQ",
  "key30": "d2g7TXwq3ZvC9VKW5nCG3bffw1cbNXKMChMyMepbAgrJwwMxehJvdsXy83XSLMehTVv1TCcMpZJSJAkUgsUtLmz",
  "key31": "j3PPWALWuzX5Z5req6qmMvtqfHKo4iETJEHdA13tPFo3WrvtFvhDn1WpjAmyBT4XMBuA6CXKQqJ3cxXcGG4EsKK",
  "key32": "2uaDoTpBvye1mufWaF9HcEtbewWsa9X7PJmqkjbMfqgSVjvAXWJZ1AfHJb4wewE5xjbVdMNmkyUW25N1cVFzx2vS",
  "key33": "3CVo157BcQwfaHixz7tLar8tuHxVEPr98BVrYr5yNUc74R6C3FWjVs9wgPSfAxK7FV95hoewyXaNoKegPhLyHZpz",
  "key34": "2Xy9vw21FT6DY8ZvCPZjjXn923fMHfwmz72oYDP9CDFAAFyo91T4SheobfxBAqBssvJhaUJ7mfcYDNGNt45RTT6V",
  "key35": "492Ckm6gyDo3cBRCnyo5Qn71uv5zjNPgMRb4SDhfFVSRN3iBUokNv2vkYcCy3RLtrDMhb7bemJ68Tr7nqLQkEyUP",
  "key36": "4BWhumUJNpdKs5mvpEDNJYwi9mUPNX8jeemTJskMPFCTDreFtWct6AHMGd9Hr8zus4TrZkuyV1wTYf2Dt5rYkksu",
  "key37": "2QZDNUhPJQNzbi8FEgi2tJJmvgFGAeXNRprXAkqVoL2AoQFM5r7HSgz8ieAWPwXeZdVyuiknEx9HkqMCvKVNSfrG",
  "key38": "3kCJDB9aZ3xTNntEzGhhWzsppvHNwEWUGDEtpGKcY4Tfts9epW8z7y8Gay5VR8ezvd1UdWEifJB71FQu1RuN5pwK",
  "key39": "4iq1diLsMoeiUBSB33yz19AdB53AD3LSuPdmbtRZS9rRae8KrwacykVQ5dzwa6mws4mkoBjRHancxxLRaJihzMeh",
  "key40": "3voHeEJ3YgiVR56ELdijEaYoCPFREszrN6GjuYBRYHmed7nDbrNE1k95BozUd972zbUXuTxWBHkWxzmKTRMpydf",
  "key41": "2j4wTHBCkFy3byeX3o2hRVMnhR5iv6Pv9b2tsGg8MtnhQveXt1Jp5MSXcfeQGiG9ULpmicR6JwQMf4Waf8rQPq7F"
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
