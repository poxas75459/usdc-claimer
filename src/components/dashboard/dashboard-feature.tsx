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
    "3tf3XudFWiDvWEUAcziA8JmFiwc94ECnw5WJK9QZFhgz3YmqYRCc3wiKvHZ37T9MNq7xCEk1oyipNeANK59YZ3Hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foNxrzNdV6KukVaa64W85i8z6zx8jaByZ5g3zEhHDSmBnectMNLmsLAbXDEnKG6zqYsFE6SkYZXPZTzpD7Tb4iP",
  "key1": "4PF4wNENTdFQ5Man6JzY9zV8Z9MoQxPvxAXT2hjWKr7cocc1rna5H5EsCKeYYuXShp5JAKcHXx7Ji9sjAYeLCySK",
  "key2": "2AkBqQQim8MoRyju76e2r35Tgekqwd2ehAUNMLs1VGuBTd1bD4ibgwm57mRjqk2n4LS6rFF6R7fjc3Jq1C9j52WF",
  "key3": "3iBGzZbdsALACeLLwAAKhUMRNhBxSTPL3KcHeNAy2o2TH9vSJL5JAzfVRsvo5rgUBqGibjMQb5gnpPkiBpJPAQV2",
  "key4": "5oTZth3qunNpFFfketnxcd1Jh2yZL6MAKJm6fNFRsqs9zMKEhaizueYRwiRarQtcXmmtV9eaS2uzP9h4nYauZt9F",
  "key5": "57j7GtmHzpBuH8gN54DoFG3bdzuhvZ4ei5H8QPDxbudtqjHhPPPDPkf1b4qihckf3eVsdSupy5ziJcbaAZoJoD3z",
  "key6": "3S4eZa3haU7o9ekFc7VYruvxXAHi9wAzY37QvaC6kMdYTgdTjfPVXUCHETY1TxAV1CKsqJDVmipFFog7BkWgegnh",
  "key7": "2G72Vgiwg4WQ6TW6zVbQSPoAdC7vPcPpVRLDxcrKdNnr5jpmtUoXTDuJJdKCTMeR8SU69XoFsJX1DTETL66UPZcC",
  "key8": "vQC95hVusGgNfPoReAPxmLiNr3fZsHeRA1puNBiH3mgBDi5sjPihy3E1eUfZ7DHtvZw3F2YTgecSM9XP86AeTMW",
  "key9": "av5MPzFHjMDT3Jcw8ykyopGcomaREcGmt2cPzuWEDx7tyhUxx7AeqQJDXb3PE2LwoLYYqgMExfgkxNqErRB8UYJ",
  "key10": "52VkS8qdwfLrF8o4ndNpLAsgkeSHYVtRFmgwD9N1CDyX9Yk7fxPkarxadfJbsgsNwBCCjHHUz5t2jNyhDCbnavtX",
  "key11": "4E5ZtuAH3qkV9aSjZutaGiVtfAJk7NSBr1V385eHEShinxNZSv6Zi3AW78Gwt8Hee29w19Leo5p7RripSGRKwCrP",
  "key12": "wv3nW9TCH5itdMYPcWELJwRKiy31uLnixUwWhfaDs7S194Vi4uhnvmU9Fp48xSC9qSRcrTrnSV5SkgJGHUrvzVk",
  "key13": "43Z43RQkHq5urYD33KmxD6mUp4TwCVh6StfABu5AZm5owpjim97uMqZn7cYiRBK4yDviRAHQrDxrrXuVtryEdcWx",
  "key14": "2SVNAwgpHAGx3GCKr4CcKNWi2AjWgxuSoa9eg2WLKUv9ZpBn94Kb5tLVuWwy52QVGB9DVEV9QvDDELSe1yBbDMPP",
  "key15": "4MwmKkaDi91TJuR6Y67aFFNRnSg6UW1C7DLoRzFXAsdbDEzdLpTEjVXPBgx8cCSPyet632o85yeAQyJCGj2d6M6C",
  "key16": "bXD4VK2hoJJ4U4e5kvKvR2MnzygnXadd3xq9Vzh7TXrJYf3ietkE6GJywytbSCijWqjtUihmMrt4R2t3xHtL5fg",
  "key17": "4WnxEHsxzLiZSr7GDzRRrKZEywYjRB3SyGVEfmYzrNqm5AKhtEpFjxov3NRWcAGdRH7eZC7zfTXGFXbbEwxaPXJU",
  "key18": "5HzsgRmxPJGeiSbyGLg8ydshetZy7iDbrUxJCqfn87LXsjAFKvcJkXbAHLYUiGXBNgnkZ2FJXZgUSqdodiynXAqa",
  "key19": "czM4u2T6ZKYG7PdqnKXZxp2cM8ZYm2ZPA5qzgcDyJf4BEZ111RDfzpUFNRFVQ3LKWwerjhuLngnW6bZw4Xo6eDL",
  "key20": "316DAZ9ec5fVRjLWyeRBqWvWMdMM6TSSftLKqnF6ezXvCtH5EVTjCGRZG9MM7dwzwZZme7nhhi6EihQedTEmwvzh",
  "key21": "2NZhBieRzvUmEgoz8mo4s6PmpSxFCrf1mDwg3m9cTVTfgQJHzsQdQqrvfKemRoYFdRPJeLbEwZVnjEygD2f2Yw9S",
  "key22": "51uKfwbGgq831gMjWbReVHAAuaaZZXbycYaajKjajzrTMJFm3dNjXpJEw6SEu2fMAYLCSSUm4cJKLmcjkYPtcCY",
  "key23": "4FZCG3vJdM9XUwMZm4sZiTpFbRvZjovghrknsKT4PHHybBpmNLEsHAis1FEgqsPxQJRsBmgGxaFwuVysJo7T6kDw",
  "key24": "2EWCLz9HYpxeskNAjY8gsThD41QeFg1KCGXeo2beEKLuS458f1QkG5tZV5VJC6snMnFiyGuQdvsgT3drnkMsvp6u",
  "key25": "3Hc86vy4fTzraTYZtVYWXLxkUsmfcsJdmbX2BZc1dS8wkyzigyWMtQmYHUVHyugCSYr446BLZ5snvK3H7d5wDQhj",
  "key26": "5ssi388pbFZ9xkFjcw67McjMo95N7vHZ96yjV7XL8sTM4UH761YM2Goydg2bCjNezPD6wGq7gbxxMfDbjqymB6BQ",
  "key27": "5pV2Nxv5URwSGe1THD4pREPpTkcAhwsEtzgqogHMxXQoCuw2QfpcMTFftyuHssy7gtKmzpGP9jGj7FNzo78dWY65",
  "key28": "4Kp6WQ5d6Cqf8dA5U6Fv3TNypQNrFhxfz5nhr8YCsbPVWf3ZZEURcbWjoeJerxr7eqr2E2iCCb7CLvFHCXfusiW9",
  "key29": "51CXsLk83XX6Cy1CMpo6fJUMmaZ8NfBJD1qLqG6A2oeYHpsp2zJTMMc62EAvTfmwEdqpQYL5n2YUeYLdCuaZqBvU",
  "key30": "Cz88EMhUp4mNQnNxatCj4v2McV2VaLvbe1AwD2RYvrCEoerKZP7Cj4hwCLoumggDA4V5pM7Y7FK5NPqmXhLJVWB",
  "key31": "QK96Xd7ez8eD4XL1hpPZ8fEMyTnEqbMWKU7EAVkFUKsxsLaUYHDjq2EUx9LwU3kjBRtwfyJgQW7fy7Wsf9S9iea",
  "key32": "3nDT4m8y7xpVFyqoQYxmNguvuaHzfNUfLzZ2nKiRfqYWi1meALKGkP8L9Pw3JJjtxDDeL9XaujGt3MhNUetTGqSU",
  "key33": "5S6XnupLfvBH5JkCdPan25fmcg2qPMmqzBWsWb47qZFMor8pKnxFyUZm9p9FydmYuP1trw7JuuDPsA1xNnK6K8xr"
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
