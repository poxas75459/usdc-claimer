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
    "4KzhGZbr3NpicreWyMr47qZzcMUeeJZNn1LdoQx9u5gznKhzGWY6GxJ5utE1sst79GD8kwZLsXNmJ6dpSttJ6PRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPyCVmgWEff6euweKgZwVhDHb1JM48uDLvaF37633m32xhyb8USzbWQyZWzU9aaX4CFTGYw8Kz3KmqUNsMTAws1",
  "key1": "2EqhyyvrYNwXtaRnx2taz1NmkK4AU7HEhkxvLcqc12H8xHUB27e43AseiuFSxdCjQgsrBdSb8eC18FNGLroVnr5g",
  "key2": "2tu7okQ4tDLgqSZFWW1egHfqqGKj7QV1xy4TivrKx9PDZx5apB3Zt45zn9d9GVQD7miuj3R6y788RZgtGmSFf8W4",
  "key3": "FPnvio92YJHgC6mdY9moRdn9Cqmzrup9aJ2cuSJmxR8WiUsPGGDf3BrzZsEBX7zdN4vq2FTG2LtaADagHNv6SE1",
  "key4": "VaNdAs6gKshWhiQhA4umGbmPQmoKn4fZimp8cz8BU61jE5hM9YBmauuyKGythZnhC8KhuqWHTmFQbNSKXZFRLrQ",
  "key5": "3yNjaNwE7DV5Xekxa4em98d39ipxFqEEZFhfStsVy6tE4hXBnGCGSwThRK8CxKMn9BzZHHcUHW8rLHJg1KRSAALq",
  "key6": "dungHonhtRFGHpsFMpZi1GKXMeLxRcJ8oabGLoNdhnDA97MhNit6NoX2FZjWFBuxYbNAwiBjVimp9Sj7CtDgUjF",
  "key7": "4GYE4hCeBCUjcpHujjkz2WwRKfS1fETzuqihUUmGzeRZjDuNgdHx1kKxS6RAAF5XDM89G7Vqfbfx18k6G8DBGyEi",
  "key8": "5aQEF8tkJYAFkefJYQ4a8hMnnGJBFrdn3ERETVXNXw5XhVSXdCMmgsHudRS75vTTGBteS2ACs5EfYsaEQ6VJDDLQ",
  "key9": "pcX7FED46CJg9MeV1Be5we6qgdqSurA9btANwggQX7TwiL6CuaFLUmbyPjqo7KgboAcbgAEUdk325mNM2aNS7ns",
  "key10": "KUa22fTTZJBjxcXJHPneKhFT8ksMC3x92g5phrhx7SUusjhy2MM6rZRVTfvqwsvQdgQb1sQNCD38Qu1sAw5B8ZW",
  "key11": "4K71AptcLEWLK6HGYhKcEAbN53ebFStSRDj3F2p7ojhfU3vkserAhuKGBuVhSPUmKpuS2wNngBbfiaNso7h5TtHo",
  "key12": "2MgUrbxe6Su1pjXmaQqMp7Akst9KVQwSSkFsXHZ5zD8Ns7kUbmiSt7uN9RRP3LFUPPszh6qbgFrqYmvLQd1wXxSf",
  "key13": "2Ny1frfjjiPQsZzPjVM5qA9MaMKiNCfAMdrM7247XTbG8Rb5C5p8ttDB729LNGUNHRoNs3bonNsJCSRRukeLpnvG",
  "key14": "JaspXGsnp586urSTCF5L4jNmPH72cAzvEUcV4yD9Vg1g2jJkVhhtcHedTP76NKGKbVmDMzxL6dKL5HZrCtQq4NG",
  "key15": "TpJn5PZZJXco4RYH3rr61PJbeWGLL3a3oXSdg6pcZ7aunMdyrsfDsn9nCMNWwd2DEgjEDaukGnYWcEp8pt6cKAb",
  "key16": "3nQWkW2d5qT1tGKn2oZE8mQ2QXu45E93poUH42ZBrYKvYKGDdyX3Zze4ATTdR3FhXV5RCCYUqi9oPNvte7cPnYaV",
  "key17": "26XsWgnET6PnJ8e9Ttaw71EPfUHo2QE59YHyipAiEbWvdK3haAw3goiJXMPi1NfGvnv98og2JCBpgw8ezWVwDtn6",
  "key18": "5GzfXZBeuJRKa9LemthUyiSpPSHq8fzTuifNYhfJMYaDjwL9RnPGrK9khEtKM5LZJAZMvAWruC19i9MFpu6sZBrc",
  "key19": "Ak1PXs7S23qwp46iCfeVYHJz6QzMrJxQJfu8L7nbapzN2FQVTJSoiE5L2RpeUsq1dpgGJ9SwD8QifhY9BLeMqZ9",
  "key20": "5xkVA7DJJWF61dQFesQU5qwdUCRPV1xrTkrCp5JNTkK6CguPcgsLfvC3gKpMobfye7GxpZ6Xv5Lx29YutiJy473M",
  "key21": "3cpXF1pzUmHPfHKD4jYsQMfsxRvRzRabRbUDRtXuiVo3c591ScTFtZGHn44xNBZheWFZQkqhX4fAPiM9gFAgdzhm",
  "key22": "4mF53tm2dReTRJoJmz6Ds6pmv83Ef7TCSaawmyBtJQSYbMnP6aRqdLmCtNzqUA4vFn19JKGWfNC9fnKS44zvsyyw",
  "key23": "65fhoKPGsjwTdGv5JqwPefG2kXmLLoxN9xEWCyyPi158ksAjbMWCV41vMbhPhZFDy5TYHT1U8ehXnuLFavroFMP4",
  "key24": "4bWBiJsgGEfsZB7fa3SnzRFHwYoZXAQnncnssrrzkQrdPrPYiJt2hVec2iTAfo1Jrnv2bVCqun77oXhNqN8HqV2B",
  "key25": "KnySpxdxYUWJvom39VgMsuhgcq14bQr67MbmJ86QfdsgRxwLYWjnyLWKmJps6FReTjSFh7vMdsjuYze3Sr1HWYs",
  "key26": "4z8e5fM4CZN4P4i3QnCxPVKNMiXXZrcCymFqqP3G6L4Mt7dcxTUCf8a1xrDWUfQ7ZLHQPxsAbHAL96hcsAe4wvmy",
  "key27": "eEmgibWLhRCYbJpFvQ7bAPH7q3VJKCgRddb9LtJCdANhTE9MuXBhEoqLnCJBTmiKejUV7gamnVMoXojDgwJLJby",
  "key28": "yD8zguE8DdwCGNrAZzNi5jpYC4YNSNfGTviaGyixEcTQShPBDCwSGicPdxgnZzhy7jQRFUHjs7SwWCQ7Hp5KsiF",
  "key29": "37SG9HEUBJba5HpfPagJhQFaAnKFjmNUqtVe7k2cyTUqncU1rFFvxoqpnUPqZAb7cRfVgSCLhcCop5srvGsL37kG",
  "key30": "4GHGKehwqnt8h12o6vym41sMHxpC61JswcbiUSceUwNVjUbM54PFD8MMzmSiMpEVf3Mft1obVTgtHBRis2CKhmiQ",
  "key31": "3F1uQcLeGPRkBCKM92tHcsWskgm3Uurzdma4jH2M71F3ZE39dwsCHAfFb4AUofPsF9vbR51SJswUzMy7WjoL5vJD",
  "key32": "2W6vaCq19aLMJUv6wZSdpAqtKXQvdyFFgCM4voBtwHzSD9FiJt4V7pB5sVT3RKxuufM8zkGSpPxqJmV6bhaMvJs8",
  "key33": "3WctQV1aBLPnYiR1XQr3Je5PhAp7Tzg92i8kZm5CVqsNMAFVgA89acWVQ3PSbpLK7MKd9d9TQY8HUtehuyqLjSEB",
  "key34": "GMRr7heG3vgdyunnYqPAL48T6PNjGxnhmV78XPYMxhHeAy8W7vgnnSzijZJrmfMnqvQ18PGDbnTfuWHzZXTGjU1",
  "key35": "2Ap4L7FZh4UkA7Re5FeArZuxuYshviLq7ZVJ9QF9V3NTrac1xsM5r28V2f4sv9JokQvdvEgGZzW9tLAZRcETAGsK",
  "key36": "4AXiBztDATh2MJ8EGzyWSCNAb6sSP43FU5D8uMndp2XyZYiCdUysobFM8PGNzDquQLmp3tXBuNx72z313hRdaszX"
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
