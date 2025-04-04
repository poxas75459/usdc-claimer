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
    "xRhu5tU5Et1gqaLsLPoEpFqoSVwyGFsD7vzh1VUARJSRkFoyHRkMDPhNFcNtGUazpgQL53gEjCisBuEfhD1aWgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hp7cuNoHVWUJNC7hSe1C7zB7oNiu8zt2BSaM3L3HDWyNKEMaoAr3SsYKBewJRvXSNDcNE8Ka1aupPiqekToxEMZ",
  "key1": "iTz7DXxL4KJDP4tGEoQ6ktDJaAW5583mQNa9nGJipmpm72Cu5f9E9fqGLYKaMK8eKdaYhQ9Ps9VCzpRdNxNeYAp",
  "key2": "3wLq4mJ3LAgG6ygAF6PeQTL8kwMDiaYsjsuyTsf6w8MBybz8qX2pvAdJxBofwoL3jYS76bJ3vD1cAAGWjRfAwV2n",
  "key3": "3LgX4bFDKHE3Wb54Lm2rg1QFtPwaikuin5uTQeoU1VuRwhPpW85GGpL7hXfo5qJFaTsQVGiN41ADHKgMj3yymLgU",
  "key4": "23fWweqgK51ogrqTu3aGsfduwGXVEtxx1dTuQWErRXuSVvTUEdVSzPqNDrffwv5dLZ3p8svFFRQDyhGZTVkwULQ9",
  "key5": "4E6zafcN3czxwYYmrj5H3hoYN2JoyyuNsXYPKecb5Qxw19tCr1e243YoPnrv5gH9PmXdkDWLRCbZwCjhCfCJZ9zc",
  "key6": "3r24gEo5xnrpSWVjwYxuQqUbtXbtbZfNzQr5HK4GYkk6eyWQXtq7naMNVGnWEYARbZASGn4uaySGqjdLfZrB9JHv",
  "key7": "P1R3UDpAtExtVb9hqC7MwrzgN8fzgVX8qH5ypbgsZfCfcxixLZUoxz5aB9K6uJWKtEL8y4D4tLdSy2iFqJ4M8ke",
  "key8": "25VyN5RCpx94niA722WvBot1SbiPT5n99K2QtJuTddVUj1hZLPbyRUSUrbpQQwxsWpCM8VbQeBfL4eA7JBPPhgfq",
  "key9": "5EWKa6CdmSupsSWyTEBcPcTA926oFoQSQnyodTQVKL49vH7juGdCBW7rKK3TRK2PBBJWov99hCZeDnSh79ayPPPQ",
  "key10": "49J6na1vwfoZ26JXvr9jM2xjthb14idXF7SpPxXE7qGWhsNtWFAJwpP7x1BJNez7m4Tq5jEqP5soLzRC2fCScoCY",
  "key11": "5Q3wwz7mfQPE4Bzbvf9E9tCwF4wiLbW51NAuf17QMBe4xhrf4MKczokXWgWaYDN2ruZLopp1oikLthAwqbF8Rpys",
  "key12": "3GomYY1UGCSE116qKCdLYzFc1nVBA74HS9SU6GE7CX4iDbDDmD4sqmBhMkWsSp23zLqfzgJiGL1p74qrfi9pXgLH",
  "key13": "3H7EWnsihEWWbiixBrc3uGGMRcfUkG4BqpqF367PasvQDwcbEgo54S1qLAaWcVBGFULj5hUg4SLP6z2MSTc25Ris",
  "key14": "CaGybwKWqBWRbP1nrBSfwoqmQowKqmg1122ugHRmTmG6MmXdkHjBEjtWpebU6hmUufYF4oiG7zMktFD4g3KPoFx",
  "key15": "2mKUKAfqcuHTnqu9dsevFo26deckx7fmo8amAD5jnLzbPKp57nFm1sGKsn7B2VJK51NEtUVzcbFxTj84DSBREjKQ",
  "key16": "54G7f7VdE7LRY8sPdgCM7aRC76NwNGDcCwy6a2MaTYgUHfHFmt2VuJLDRLkoUnBED75aUm9FyheyEBKnwh2PtqPt",
  "key17": "5cZAgsUP2jRsips6YfVDBSCqoNzmr8dCgCdA39xVDjxYfF7LD1pGaZ3BAnKDPixJSvwEtFzvte2Na6QEsJfvnqvd",
  "key18": "3aZiWRyzhPd6Fa42wAwXgKhjVMG9TSMde6tdmL8Q5bULGgXMetT8kT4bWnPmWxG2KvmJvQFuJshPCJg1RrdSDDN8",
  "key19": "5crEYoME7vfrz9gM9EUcc5aBZuqKCU4B7WBzLdqHToUyQCFRzf7Jh4nDB2zbrHKWTiNeKn37ZG9xLBf5RKvEAbqU",
  "key20": "2QFZVrT7KHCRuDsWJWX2naexjwo3TpYtZKxBfni9vnrNoSMiK2eNEbU41WCjWSzQEfrfw3gbPZhHDEd7FqwR7hGY",
  "key21": "5GWcHreg4vmJRLDtDJ8mAnTAn1mrdcDD9d2icEaEhDMFWNsBTcvYMHuqjno9xjzW1pF6TFQwYiMF7HYDni8Yi4Dn",
  "key22": "5xuHLvubMtFLvrq5AaTZGR5sgU9Q7Ki6tj21ojLeMJLTNLn4e2nEzzHhBj7qDSRbko4xF1WHhCFBGrKJMxsGCkq3",
  "key23": "2Bp2RnRFzd7aDsJtda2H51rV918bPUdSXBPAa3DT3f8VfvPmf2QsPAFcJgE9FEb4FGwbLw8PGaWXwoPtwFJVyrmg",
  "key24": "WGinxerxBrEa2CKz7qKCcV7pGP66xTwWjymTMZxpP9suBAYrqaJKWiwzDeUvEkN1QPiTwg7WnC1VN86k4ofKXf6"
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
