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
    "4EcaMJAPjk4kT6k2Q2Lckxg9fyG7KTTuCjRpzbmRFY6yiBjEeb8h4QijHZRHcyDSzK3TANFCJfZRk4tRmHrRnrsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRpVTwwkDVnC4BxEhNaEUuWxMtk13r4CPGmBvakfMyrfByALs2GpGzToWPpbvLEXUPUzrv9wRWFXrY4iheWUdRJ",
  "key1": "5d4Fe68shUobWUQFnn2HE2duNkqrV8CXriyjQK8Fss22mAvcp7o6AQUJbuWHgpZF1aKyKdX2ymiCcB863s1tFVVL",
  "key2": "A5KMtgqoDqTBRaLFepZJsrBQBTrRsnyhcujPccThBh8SyypuftLC8R5QvFSrqRq4qesSmLaEcaxZiZXCkuGAq2y",
  "key3": "519cLaTpejY9qemgzCQBHXjWoP6uSZSsrRHdxUihxd6fjLKZC4MUfFjt7xcnWCXYpWnWzaqD6n5iCqtxTVvWKo8k",
  "key4": "3KjyhUNroxLmBFiVvPKpJdosAJKWQ5YVv1JSAJ9pXtVW6CrkBWDMaGedHT7YkT7P1ANNr8JpZ3uuN7z6pLw7oN37",
  "key5": "2jbPtM4CqqZRJdyDQQz93MWNhysmNEvngciaU9Nq6bNcSdwGvr1nkHmbkZw5ApsvyD4GvEQJXCPVr6taYb4kEfpT",
  "key6": "3gkB7Aj9SjHpjZYBzQhnSpHrmweYyq31G4PCGVpcKF7EoS3g1HQLqnsHE6Pifx4wAhnp4ZSuYhTfnTrv7hHRHnRe",
  "key7": "5ojTdm2VsQSB9jZVoHQcH4EVL5qQT3urnPAWPtQQTgtL3Y2E7r5BTfxWLM4jgc3P4SqisXpH7MmhRPuhVEq6CAj2",
  "key8": "5kg5F6e4EJ9B9AnAMJpj7hDFQdufbn4fm4mbkHFQiYyJXGaJtc6Acjsgorx74kARgRbPpjcCZdQdnQCPcGH8qNPP",
  "key9": "xNp34sGXKXAvBc74gp7CvhVWfsyCqdN7YNhxXXmQgJxs2mxjXXDXSd5x9GjYFtH1bKVTS1ELkemMhsMpWCcsa55",
  "key10": "2ivhhfcTtiZraruqdUMpJszHbNXFhwuA6hpvS1bHd6qmTipbfQYfVVXoRYJBrsmYkgni8cy2ivC1cEb4LhACKWtk",
  "key11": "5L425WaY8GMywEyzCzkVmfUNK415Y2naiV5FhaiwTQn4KS8CDJ62sXiagij23Ts8KAt7Qzs19PRSveFJESzFGXLu",
  "key12": "25iZqd7GGiaMx9RHxLBhTUxnYHrXgD79i9XaWpuyf6JzwZcRVbAVJHSz7AXJ7ykf6oMNEXPwV2BdCyJ1twTTvb5q",
  "key13": "4kh12tzSJw49CuS61u5r8Sc8exbGM2YbuoAWz74PoAJF1siU2FXQWytME583izNNerP4oKUDufR31Ls6pijm7ssW",
  "key14": "4MNPkeHWPr2WPBKnoYVZ3oZpRpcmXcjw9evRsvTMcdoP9z6A8DZMLYjMmg1VYhb1s4bp94JLbaBdzvUPcQGphHkn",
  "key15": "5JcwSL5DTkPFSugZ8PWMi4yQ2PqrbvWWmj7GWDTzF81TzvovwRqZ576UCpyTprzuzqMXCbAVgBDK6tKMt9FntGc9",
  "key16": "2BJAL16Nfh9XdRFkthMiYZkcdRkysqKUPqP1WKbprfhgyJq7MGWY7EFuXu7QKQSmmCYzXf9DdgynzwDKfmgbeGZQ",
  "key17": "5RUpmCVRUUgGmuT5MYBoauz15YZMj8kAMh7HnznRc1QhLqWowTSokvh22ubNYuXaUhmy3C1pjiwdsKosbgFXMe3d",
  "key18": "63SghkqxxepS7Jb72qcsfP4swtTybHK15v6YM76zdcU9e3wPL2eJWrM4zuqqydwwRtuKE79mZ2Z2Gb4ewAsa5GQE",
  "key19": "4ByfjudU1zhWNEK4LLEmpz6QiQ8bZhL2KBWc7kbK7Y18xA4tRzCCS6kmHkd9tfXCS8nmWY6k7LdK4FuDbWC2c6FN",
  "key20": "2WYRcSS6ZyvSB4xhXHzcM5Aya4NjXv23Bu9zS1U3pDBWSQ7CFbJDApPPge31DyWvuba2vptPwAwNbrbhJiNR6ddn",
  "key21": "5vDSDghJNoJ3Jg6mkfG7Nk26bCovHz7kCSn2GkWzs6UM1uyiBPocaEFgEyCBNTBtmWMWNp5yRhgaYfGoNxHzB39a",
  "key22": "33BuSobUmgjobGinz5wQkE5WRpTdgQhdxYKsJZuz4X7YxcjUd3fgzdLFzj1u9rTs5UN49JWkBte6q1XAXw26mGk3",
  "key23": "3UPVESUnLvR7w89Hw63XFL6ipfY6w145qWpmdLQ3XWWGdoR2pFRpdtJaRCCV4XJzq1ctnUn4gU3nexFfWYc6s82y",
  "key24": "4H5FR8Sq2kB6Bf1QGScUKwFbJtGP9qFELaDednY4iMFnVDcXUA8zepHwT3PcBzLcBYpkCTPVAoKQAZZCnheBBwsp",
  "key25": "4yWyHfbmXZy2TXrXkVgZch5dbzaYFWYkE36kxHwpcxFoxHyM8GDFfdhoLo3vHMzJxQjcitSuYCuvv7g94gqMSvCX",
  "key26": "2EKqsFjU3fFxkFFxW6UmVP1R2fcTsdUERbooBfzVqSpCRZ9woeb8xB4NE4Agh3DUMcXkGQ7VRAibX1YnG3uiiDnp"
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
