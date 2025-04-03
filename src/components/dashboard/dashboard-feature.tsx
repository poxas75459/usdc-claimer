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
    "2qXAHBW68C1ac84jnrdMjD4sHgb6ajjr41d1T7w6eoXxKkXD1ghEEwPiG3See6mJqNLqhywTf9XJoececf1GZPuE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgorYKZ8MmMubDEhcUyvxKMg9qJzoLcide13tAtJ18yRYr3NkU7XkgVKbLVj3QP8tn6vHRTUL76KwVGzaxwrm85",
  "key1": "27xiYyMVh5H9vpFHUuXaarNfS13YCJEZSp4Dm5mekyNYxe9yaffAEgv72JSrXYY6U5RykfQGAEUUf5q21gFQPXB6",
  "key2": "5GGrntS7QNtL8Q786Za2RPFtD17env5tw7BCKxTZTCVLQvtrGnVZBa63nkRa5ewDhu3wzSX6y9kk7fzvhqvxWeSc",
  "key3": "5vUcM3du98yEuALHrwmwopjLaNghZii8bDKNCi7J6iSM1k35DLwHA5DvSzf4X9UrX8DgGVzUeSPGe7ddFEe6Hf4e",
  "key4": "GY6mWWXth7jYgv5uuofSuBxfz8aosxwHYS7pfrVv9iRxFxkXJVPF3sYYbtVTPe6JKXpVuL7W3Pdce5VbSJqdjHq",
  "key5": "61wepqQxdiFih6r5rg9xN5ixv8tUpaNNmgeDrZKak59YdaLT6Dpv9id8W6agYHn8HgN9ArzdHhQvqWYstkRbDvAQ",
  "key6": "43i1XPrgqVnTXWuYrtyN8xcBFS22YCMdWuUgWYtFoq4X7NyzpzDiu3QpcGdBSdeXoPL9LcvrYZLRUvKGVEuBXBTW",
  "key7": "34eio4Wq5Ra98oPKBtaz6RyvYVSMRMzTFAgWEeovaz6dL3k34cykwUvUsZ4JPfxJYMyymRhuUSCDKbxoL6ioRDMk",
  "key8": "2ZdLAtYWz5vpHvLX2xuJ8tyDdVVXce9b2Q6Zu6vewD8R87LmBs9tEgQPHvRDvhqNRQJJpjDJvmuX5poC5Zv5pVgC",
  "key9": "4UYEaFdoN2YvfkMG1n3jArZ6QMaD4KEt4u1rf3aUemJKx7NzK7y9sqBP7XrxTR1s4L1QTPXm9TfiHjqtE6cTLMHK",
  "key10": "3CiujAq4YjU2VpYnY92tB9nZb8ChYFanmEaLwZGpyaytZzVCFtGMN4jQr3CP7gVJkmGgerjtjvpFbC1wrfLyPtzF",
  "key11": "4GJKwyNCRx6gkzGHAYzqe4QNAx2dKkS1Eeyu4rFg8iwmogUxjX3x1ksAyB34MQ69cK9RGJSKtJy8KmJNC6KNUj6r",
  "key12": "5cbVfDneDSsJdBdDJmMzd34xiRNcjn6PjfA3VfH5AKaay3tbVHGeNYD3eojejBcv1VLxxQwtf42Z52a9g6tTgGDN",
  "key13": "3TBTAHfWVC3b5G2MZ17UuX7LcMAsULxezbVL3j8pzyHF6UNrqkcTghC2zEUhtJpdVbiLFM8UiwZPGgoPCZ76mda2",
  "key14": "4nxJRk7f4GVUYCofyU5hPvhbjzhNvDm4A5Y32ekx2BvzR9Wc6E8Fcri1eD2Xj6X8LbfbczBQEkxm167yNE1iQpHv",
  "key15": "4HvsLvwnqrkk2bNpMdodAgyNXiZ74F6igFasvBbxNcK5tFW9qc234smBsNj2JXWBmNtRqysA255QCpMTvBomsG4y",
  "key16": "5B1CaXWM381o9QQAXVgP1dWCZj2aSkQoz8qAeeycpeoANK1zmtK4upGDj6aNwZFdcNqRzHpwz1QyPEAuQkBpNmPZ",
  "key17": "3xTZM5sE8qtBgPYmByNGziRGYz6SuMGmh2rL1asv3mCSKhL2v3SH8WnrBtVQ1CtHdjAYAc1stRSa82PmEu2VvHo8",
  "key18": "2KcNjA9Wus7LwvYyLxRowFjUFsi3RycwmymzbFRmikmstZzcKFtBF1LCdUP5kTZR9tPUNPb8MsqGhUQdZouJ8fnY",
  "key19": "iPcubJxKUaw7q5LwPbXR3M4bUqeBHF3kiBw3wLXNBYWLX3cARZh2kzzocEiNEg5tL1yeFmbZvhyXxXC2cw92pLU",
  "key20": "2rmDgwu6tqAxeq1CDYr4ko3zHJmLG4hUdvWNYtMMv11EiypN5VGDKq7qSFWw8dMDZGp2jwgRJ4ZwFm6kgzYmTsNL",
  "key21": "AQZvuvMEaty99QAxQxMQwfB7hEbCkxSUKNVR6bAtCjGuFN65FoftK7epLhKrez1xvDazniJ9zkZSXt2hn5DSeif",
  "key22": "3o8tbQfj8Q91vsftDVJ5Urt6oxqskABnYv1vG4HntKytK1ecfDWDGy6L6zcSTBgMrxPxqjQVYqt9fVF9GiVaX2K1",
  "key23": "56H3WGKR6PAYQV9swWdVHf3wLtTFr33iABQvcwaA19NdzrB5CbRmTDyRjeaah7TNWxXw5wmcgrRheMZez1cL2Mrd",
  "key24": "3MruHPtc8M8wJscCnq6oXFrJJKeQ8Tc5q9Qp3wNTEQrP9sNN744FguLhQ74YGaqqERCA1V75rXdok89kH9DAXLut"
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
