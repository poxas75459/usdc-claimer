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
    "4nd9z1as4Nu527EQws4JfZuuT62maX6K5RyxTBrgqc9dnY9kPdyCH6s2AttNhqVvgRyGTneLrPgwk2cMH7TAdhMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cHR6XUkz9tvrLyhH6zvoQFjee97jv1js7fTmxxxgxLZB7DG3m9UHDTkwpjoogNFbjhBUv2JMukG7vK8hcZBzHSK",
  "key1": "2fXbyeyPhdGAL969h2Fx1Tq4x5YGZuLGcxfHXyxTKU1DAsKzqWadFNEtP9ANpmVb69xcCxYyJ5PUTMcpz4xVgn2D",
  "key2": "sKnjXcoaCoDjMBJC1A23cZmyS65hCu4F776oyGW5YQoJ8q4E5iHH7gKR6u8iD9iCpvrSGnc382Kh5yhWi5h7MgD",
  "key3": "5N6VkmxLeKaKR321sM2o6WR7b9qZ1aY1Cs8MMMqRVCVkfQP2GWgaknjgu2g4DoS7zX2gPbGonfNNYMVjKvnobztS",
  "key4": "4qhgsChgcxd49HSnAeqWu7sUNXyhWZ7TcZGkeVvSUW6hm19K2HNWWxvLwNNBHXugPq7xTj5bsS5JgZqXTT8NLtz4",
  "key5": "4kT3jmx3xo27XDdXg1qFBHDJ8yY7nLqVm2CuC1yrj58tiVoUrwn9F53uAhJ4TSNgV72Q29KV7WkDStxX7bCPL1HS",
  "key6": "3dgsm97ncUAn7WwtVCqiRrHtzvp5iiw4CMbzhAz3hHhjNF9zgvcnvBvuB8HecZZrNTaXLe9DxtWqnjQwJENTLUaj",
  "key7": "K55CWyAPm77m1unuyNucgn2sfyAYw78TdmvwTXsk8Qub7Fh55aRytG5GGxuSxN95GjuNrYWEiEah5FN4Ci1YCSu",
  "key8": "5yYk326iLjFoM8QgT8aCprGQ989tWFQEgjrzQW9d43XiD3KRdo5ZHPmTk4DrXxo7bCwoZEAPkBhs2TEqKfKNSckK",
  "key9": "2WVM5L9nuMK7ZMK7HrMQ2CdfgD76wRNmupvJm73Zt36fyxqZbRJWLM6kGaFihzVzsQN4vBeoKaEZT2pT3fio7VFf",
  "key10": "5UsExix4v9ChqdUdvKZctWxynLDEgEp7haPUqymgjg9bDpaeT5b4YRL4CqxxBDTLnw9R2qM9sAbyNJvUSD8yAiPc",
  "key11": "5x6gWxjaHhgwd4ThHSyY9DLgkZH7iE4aJQid3uuBcRwGaMHrnbsbnDtrJUzzQzQqP3qDD1QbnAW8K5M9ihR4ZwCS",
  "key12": "43MC7wxEaDCML2sew4aMdgtMh9xzy9PMAK18UvmwB6B2Nc1U6frWdGtzp3wtxtDKskPaegD4xBfbUYYh3zHnukZC",
  "key13": "4MSAcukP6VBQrWtbMMCFuGW4oHuXdhodTDQs3kRpKkBjLAG8tLCtd3Ans7ynhbE223ZxAJzRtCXrfHbpQpgerAKh",
  "key14": "2Cn9ZU8ixqp1a6ue5zYYK5MgdXKN7K9DnKP5RtZAE89kgTyYab7iJnP8APLh9NptESj6aZn9zC4XyLY3Uuah6CGh",
  "key15": "5x9T7GXdCy19Ty78Pkn4wEYifDrv5o8pKL2cVezYQs9sAenvZpjiwRRDDAfh6q4daaRfieM6QrsdUiPRv7Hk2Mw7",
  "key16": "4BzCFJCMj563DXrSggq8utsjRq8Ci9xEc7j4cXHf4VgWtvAC91c3fsBp91Dpyu9cUsB9qgeGtoP9ETn6EadXwHcq",
  "key17": "3dS4QmaHtCYhMpCS7mE3GodXnXf6v4h3xAmFEP6NNQyxQR7TYsTf6HRk16zP31ZBj4b9BdXC8fLUcRSPggZhtsBA",
  "key18": "43kXs5sviYcfGfB9RLW94FrrJCsKuiMndQhhjbUff9LyLoJdAb1AGqTVdh3Pox6T9nJXfbhPiok6QEt5WCZxfAmY",
  "key19": "23MLAVKLf65Uir6zSuVJT6fFksMy4gWNfm5c8HMsmLyt2o478Xdg3EQd6V8rZaq7aSRWZNVBoatpGKVHE8q9VaN8",
  "key20": "5ht6JdNqZPmV1jfB77sFJP4m4taiuw4gXbXkL2Sb5EfEK9WAm7256R62Y6RgzuMxNyJjr1Vsm3qhVYB1bsaVYX6e",
  "key21": "3FFodvNsMmtE8bQ5LN9yoXrWJWjNi8cNHsMqpbXPEcSrcDU1E5wYXhoZF38LaRXPxCAQDieNsFKgG4iTVwbvs9wb",
  "key22": "4qb8YXgAp9CGhqdnM5agudQ9tTrJGZPpKE8DHHdXjnL8RUeHRvtj9THJUCM2seSKoPf3Nna6DBNtQV9dCLFAhv2Z",
  "key23": "61hWA6KLFbd2V398A5i9LuKh1K84xU9v4Y3rXQisX2hr1yxi2miFhPTeWZToRFjojctfkpCicMMkofNN7k7UuLgC",
  "key24": "54pdheot53nNYJu5YJPRV9jKAtAFuELKan8EwuhKsBRY8p6EMMfe1yxaaXhsoHDWYP9NQmCgLVcwS7BM8KCodBhC",
  "key25": "4BznAoeaRrDR193DT4dTy9kUK9nnMGo29s8PLj5VHiFEAaLvqq3x7aV4QfGd2wjAjD6fANWRRUdiyyoskpfFHkUB",
  "key26": "4ZMfUM6ybBabXipUAGjz2YPBuFETiZ6TQQJdu7awqKM7X23csJgcpxedkvQQbzB29eRsMZGZmcJx8MErAaTbjKLp",
  "key27": "2VSys8uAPjoS7i21LVF4ZsVEVy6o5fnZ4ZdwNjZuzpcvySMFTtm42sGB4CyDZVumMLCsELBHCW4ajT9N6MncoaDs",
  "key28": "4V6ot9pRSJ4vHXJFmSRRELrrX6eib8edXzdUTRsgRwVXvkypgd67H1579t87aiLcDrLRPoJHYDnVY6MuumWkiMnC",
  "key29": "ET4oxzcRyAwdvWpxqjQsvGJznaFjTHBGoZahadFJEBkiE3zCNUH48iT9VHwPmacCjbKAGM81WQ2hxnMX5KZ7RWV",
  "key30": "5YVtUGwpWfDTnfZB2WAbPfN3gGER2qpBpTdu9umLToiE1BqpcnrZV72LqHBYpyCXJHSEvuuCVBCajoDUMek3XWcT",
  "key31": "5oeayrx2qJo8em69YZacguWPDCE47f9og5jA6aHDypbAWyuRygH6X6zKLY3aDHDM8Yw5WCzM9SUwEPTnvjcyv6Cu",
  "key32": "i1fZxwcwTVkxqkHUNkrNJFqc94SJjfLGKiESQ7UK1eAEyT3ziDWceChuYxnuk8uWPsfaNgHvxntLN7Qqiov1dUj"
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
