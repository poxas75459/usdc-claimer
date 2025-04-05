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
    "5orf3huVse9pLA3MBkd1WxuE84yirKzTBgQYMMz4pYdqE8S1Etf2vs7W6KygzRYoePDPsjkX4otNkB24Y8z95rBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkNNRJ2CppqDixxgXUNuduMPEHiZHPoYCxaettGGCymoLrYNkzFSico7ypqYCf2wtPUxNCAiFuGsUui3TuKECCQ",
  "key1": "4QxBPJ3RYQh7WR6qXhhdUrKQCTYCebMa235XSRdRtMtCnkBHtJ4qe45oCY4VyfMVm8S93Jsgj5Kb9a2hZTz3X6sM",
  "key2": "3b4f1Q8bug6TrMsZHj3geL9XrxxGCS8pG7Rsaj3bzs3i5NGRQdhBXHKUoz3cjydqF1MctRBo3yjqh5nYrc1Zqoqr",
  "key3": "4ADWuhG8fhE9c49J5SJMnhsxzmEud5Gk4uXNnaNb2SA4n7XyyUJQ6svvLpHVcWuTPXaD17dWMxgf7dfxbzVu31ps",
  "key4": "LDxR5UVbR8DyT1Xtf2s112b3LpGVxMvpsm9SUURJkQ4tNGVE6uyR4MrRHmYnLBusGk4nHh6HZyxoXmVa6hggH6E",
  "key5": "5Uu8VVFiXDNufxjtzcdvGYjJKpnK48KoJVKRhZbZvtDkiFPUPuv7TL5QucZj1dTyVf3xBFiRxKJommVWqdyDThc3",
  "key6": "42AjacB7CGCPTkwKmWgsULg6tRNPsy7NU8vArwfPumqmpRd3a7Q49ypGjk4HvrXsZ3yqm7NYigeq8NiirwLG6C7b",
  "key7": "4yhBicgASf8msTPV9BSokVkAV8wViiQ2HfH7iWFLczTM9VmeJ5FTYAXQA3durHWrME2h2TwaHx2dV8JJYweQXZqZ",
  "key8": "3JWLhkctVRi8EBBkRZ27MjBEZH4jmt61WGQ9EAYAvP9WDLUjxmyvc8DGRN1j4Qqgen4s9KMrV43aXydx22Y5Tz3D",
  "key9": "3HjAH6MVoRNi9J5YvYiDzRkesH3grXnufsRKn4Ac4NUWrTKd3nyUNT3c4YcUm8ae3iL7BjkzBmvMHEoah7ekjUdG",
  "key10": "5N6MDUEynckagHeYhSLiazHMrwena4Tix5wnttD4fje9NwhRABTVLFgGE1DUGsxubz3KMjUyPh8aCMkFJheqfGwF",
  "key11": "ujGo1zdELo6oKd8dTU14K3zMpLC296J64XdWSk3VUqnn6gqeRrrbMpm9ZLyjqugBDmxPCjjtpuxKamukAXCcghz",
  "key12": "4aetmxP7tf8DduaitzMJCdhBpZn3NZ3gXdabPfEy7r8wRue3dTx8sEXiccfkGDUtfVoUJD6WfiEciZVT5aa4ZAXj",
  "key13": "3LZgGFJ5d7WrNwsFWvaCULkfgtywQTXE898ph7BvrGD2KyL58scpFfR6WV95yu9bDCgSAmkTyV9radV5qZ9u5FPx",
  "key14": "39Zh4j6FaddDR8paF2EUAzRWkmypQsytLdKU9a37thHjHTztFyKERMzxTqHUWyj9YkHfgzQNGQyzVqMxxH1pWyZo",
  "key15": "4aTCPjWdgXN9oQBCnEAvtu6VgaZ2c4s4mGnGgTatdp7FcwDaFUEo7TYikTspbCdXAcfqA5G7z11BWRTfTT5rXyyi",
  "key16": "3SijbUThcRn6LVkLnqxiEJVrR9ZpYVKaAZCmuCh3G5uwxuuC82awgi5RS8znUGgDLN9fKJnw5BpVUrV8w4sXBeqy",
  "key17": "2DEz1MobWAhPhFSKqTN9dD1GrSTkrtYekLprR7jAqHt68mQYAFpW4K2xgsVh5zQXHV5Qu1DTFuxYyoEQGggEF5Sb",
  "key18": "5vzrMN64UwLhJdkRuSL5c8MW9WuTncWx5EXBoY1AbkuSubx4Qf7GbYv19KvvrVTxrGaFkDzXdhTZgpb93nuqFyUK",
  "key19": "3mQ8cHpdv7uzYiJXNvVMyuwynMS8mA1fspTH8AHMtZsRwR15q97JwiTQfN1FDUyZhLhdwyjL9mQ2JT2rKbtLwWri",
  "key20": "65pBwGeKweEuwAUtcJ78VMA8VcafQohLmusjjUxu54iBNLh5bXKRsDoF6T29UBh8vZaeHxHxvfVtF3YZXgQ5qpyg",
  "key21": "4eWgoCTXSL7ejY7qaDJLAiXPXbBZMBTppsiSEmqnhcMgtTQTd8D9uV7S7b5bDd84Cf699eLRAGPujRFBBUapFj1n",
  "key22": "2EUrrL1CBcoht2heXe3vXyj5bPQKhaatLFGYDsWDhpk4eEmRxEpsnVdBjF7NCEiNCv7EhJDhRF83gNznn8JWfjrn",
  "key23": "4SyrxYY8i8eSrWCPS3BVb5SRHbcy6RzCqKbGVHR4dRCiDT4hu3NaT8wCThou8sKXByEuX9A6efG9YHcSftUVrhLA",
  "key24": "3qA25H5RmdyMwWGSruvXhCD9yTpsPfY7jUaBWqKQc7Jy7qgrUpHufyNzbJZXm7Ayns7wktVW4V2sVrorp8MUWVkb",
  "key25": "4tviL8xUpp38eTgC82mmNxTQiU7w1GUJGUE2sEW1D8ePK21timS9DjytN9qbguLN6igJkZNUTe9PGGhjTnBhT4bK",
  "key26": "3JKcdeVP55A1mStMGN3zfSPT1qgEMY7m6mQXUeBArnctmDezzry229ywDVHoReDjN25odcKwnzYxh3vRmUxdjhFq",
  "key27": "3Q9KHuJZvZaXRhnw5GdosUEcVGD91r1GUuFcyJ4SVAyCzmbLHF8nMceUxRCvn7ytABGVkweeTkLN2Uskq9rLZzVR",
  "key28": "aAQMiYHbfvxw7iCMhFjpEkCErdyNeeb8h42Gy9VnWXHDfx9WE2Qi2NEeEeuGn8AsYaovpQ8JvRRv4pXBSA182bN",
  "key29": "5v16byGbgj1UedxdV7pWJbYUDZcLmHZNaJ3UjEnwmo3B7bPdodAusB8sXw77fF1Crsg1D3RLMUyPCL8WKT8apxUY",
  "key30": "5PnigpTJ14wBb7DN5v3DZAdWUyzjhWZzEoZLEheJ4pYhVWvww5fPMRSUxKgihnJPoPLaQyRdneJdxrGWBTpW7EkT",
  "key31": "xKStzLgqpU92pLFBu2z8SqVW13SbvvTvfVkT3jPHrwou57NKCkyVeEknmx2tJbHTVMeDrtfFn5o41Tv1AqPMqbU",
  "key32": "4xntBoFRhp1CXPo72wx1HRBNvF1zTWpQNv2YXwQzDyTJ8LusypZLxRpgbRyDCYdnRrCoLaNjEKW842RDXDKGrM7B",
  "key33": "3JZpzAGHLYRWfap6hN3MkEPLwebgV3SHQqyXnp4STFuEy4Ld4KXpJ2LcQsEvJX5k1uvmm1bstbmai5upYYSoVahu",
  "key34": "67oJ1QKrA9L1JzGm3Gsp3SZeE3dPANmxFD7YgkutyYkrx7XCUr2b4h6Jv2RAjSr9UusL3AfZszGW6kVHgmmK6zMD"
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
