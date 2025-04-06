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
    "4BFXjAVwNQu36uiijzLDs6ej2sivN6giKYzMgKz22RJiJhEb3XeTa3eXreLDKYi3X3RH8nrEUZjMAugZ4gaXYkF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wL8BURip7gSZJP1iujnacRxEQeFZx72Rw9hrkLX5D8SN7Au93MhCJ9YXo2rwUzWQK4kT6KHxtYdAeA2F7hqPjV4",
  "key1": "44ghjdvevHWieekVJ8LdQZtvokcEdFG9Zs4AhBPouivrie1rvrzdgkEVHWymNLchYs6BMmXG11LbtBSjNhCUZsc2",
  "key2": "4Xe2kSg1qgZ4GTjoHyiznG7TMpi9o2smse9LxGzm8xFA2NaPsHsbaPbMDsmqTZM746atbac3Av373rqh8UeigTEr",
  "key3": "63arXqrPtxgihxGE8VRPVL1m554hkDcQtuoH9D2iMWqFPCMrM6qRe8LxfHcDcFqHfs1qV5TfbcMvED54SSU79NZG",
  "key4": "fJaMHdaqaohvEzqB8wF5NhnYYdekSTkx5mG3XBhoij5NKauiR3uxvWAV3ftyt1ggggYB4JWAPEJWaS7keswsDhV",
  "key5": "3x6Mm4qGzR5QyMiaEEANbYpqFpkmZUYUfmZbtXPAm7ewG5Tw2zhCNh3BCotx8KDUDdqpLuDcCWnTdA2UGgpxR1m1",
  "key6": "2kxgqjuZRbp1BFuZA9khhfLkcAJuck9wvgjXbWEDRNveT4wN4iuuktBDqVzvgVy2Yu5D4NAw2MrELEG4ddi53fbi",
  "key7": "31pQx42CUCsoW7xhyxoHmUNtADin1ZNAy9Wmfw7n9bLEkarXw84xUQRgjpuGAAhV7YYy6LieZnRh73DHV5UQ9uPV",
  "key8": "4mMQjKRAWuCNhh8FrMf1f2i8PfDh2rMHxtUfy75CBRxM1JLN68EBT2M7zcGA1JtDHj7s58vLQQRvcY8JShjtZYrm",
  "key9": "3iAYASpxdBTNge7m4haaf9FFZ35o93AXqjk3zKw4xKiwx6d1NaWvY2oD2aYCWgk59X23Cvd45Yidx1gtz4iwUYc3",
  "key10": "2DZaHqKxdPmgAud6xWjN5731XD7Z76ZXYjda5PVq9NCz1ySTspNJ7BXHXQRJjoLzMtgbRucBoT1XV5DswH9x4rno",
  "key11": "2UxbziFMEFxyQCETkw3hsQ1Vgt19cspB5BnWsTUjoCDo9NrKAh2DgNa8B1t34Zhm31ai4YdidZE1jYJM2C3d9W5v",
  "key12": "yXyKYyfiYFDkhMu3mvUF5dMDU57aejeK81zPNobUu2jw3pnLBsiAggGng48MMfyqaLPGuQcQy5xX5vbaepzRk4M",
  "key13": "4agnqnXpqfm787sFxTU6LZRbb1M6HpTbXrbBgxKxbhFfKUn6gBQYFCoEg7E8AmwdSDCdRKwk2BudeztK9PSFvTZM",
  "key14": "DFPRjLxKHgJ1ZNrzpeT7Ph2uksARa6wqevYWk1qfSjxKaYw9kgc1RBmKfBXZR8wpYqBUX173H3R8Y3dJreY3moq",
  "key15": "482eN3CjzvHVdxrvyuCXFgTZ5vx5zJCaUxtkmGDzRo1W6URsYApdwrF9dBDmfukNVT8wk4qwiC2hRZ5TFgADsRKB",
  "key16": "2oCSQjgo5Kda3srSeTaYvU3kVWcgVQqnLJZs7m361FMtS8osUjMJoxpqP6cWhjVM9XvbzZv3CYFJLNvUufzigwt",
  "key17": "5ntVggShkQv8PkCDHi3JuEFsE18jwyxqTLDGh6rP2HteE1HmpJW4Y6CkEEQnEJ3JQocFhJQcmTzv5NPuy1TGC175",
  "key18": "65HnMXWhYjkCApJZ38xsqK4Rq99pUNSTQiH1ANpaD4JWhJiAMLUJrQQ14EYW4XFSsW5DfoJxCEecARSZ1RhYEGCT",
  "key19": "5Hg9xExtpsrFoHYUsynohvpPTutgtTqaVDqrCGVT3s5dwjFU6DtKhvCE37sm8AtVvMVs4XH5X6Xjo22QbKKFamgh",
  "key20": "3B4YTHvrWqZY14iJThk7PwpndCQJzXqjidjmWqHDNFJzkYG7LdEmGocanwGNxSNtFo73fGY6Van1sD1BiB5LkaaV",
  "key21": "36CKHi9yDhtwsuVLxMqYwAoNyvAEp5La3TupzXFDCFfm1u3hJdwtJ2EwZHpuo6Ms7L7aKm9Hu7bUGXEuU7A8PUfp",
  "key22": "3Pdaq99aFvHpgfor9t4zNF3EPQtrxcFnZbpovjT6c38LZoF9YbeibUSCsQxbcyatCXoc9dBu5q1bnvmZ6R5r7sK4",
  "key23": "3w7ugQJ6zq6pVb2TcRQpD4cWXobUoSN7rTrgZfjHjSyzxoJXM2FmD1RYPz1kWdmzBdTRd7tB2c4CfZUq6634GR3p",
  "key24": "4nwFZdcEzKQrGpyDMWUPjXjdbGphB1tpxqipsRKmL79irkxgqTzE6FHuhz8L4dQPxx68YhEJmu5VhLwe5R69b8H8",
  "key25": "2cDNXYtjsrJbE1xTrBozGCamUqiXMDzUdaAGAZpfX38LZbfECXmpMZmwV113QphBn3gyuueBVmp9N7zEGPFWSgaY",
  "key26": "4iyKr5m29aNZRCXFyJsN2t2iSUu87meNDtHBLTyFHSQdAAB1jCRV8Y2TtfVoKSqbogfyUxxj4NoPx7xwGahbVHs5",
  "key27": "3yzUPdehzuWzdCPdoBPb6uQC95mSQvQRcA2efL81ukoekpmc1feDSegBWfr8BiFZCJeBJZzb1aDCGkgLcBksCehd",
  "key28": "2tc2hNFnwQH9A395TgYF4mukQoXbJXAB5sjesQkKLoxLWM2K1LyRcHwv77jZ1UuLdeskW95VtDgEoGYjFdU8Yx9N",
  "key29": "3xKzvtdGS7oTGk3mvftbNGTQzDJEK46FaQp3pdH2qE5S6AYz6TKYtdRGcp1X1fifFsEDGZmC48QutEpEMrLoq4vR",
  "key30": "5PSnn8BMKgLqep8e9M5424vDTTZ7JhP1vqBgUtYYH6dfoA5fA8Ly4d35568S92wWnrRMRMqtL9a4KQQbaeXa5jY9",
  "key31": "34LtjEf2ggYz7cLGTVq3UUCP62irFk6u9sQoZB5wfXnbUj6qQ8zVjRLneNW4qfvYFrj4MW6SRv9qpipa8QgcmJSh"
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
