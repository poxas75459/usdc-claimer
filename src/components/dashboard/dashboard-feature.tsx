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
    "5JP3ms3Lh7DeVbQAgdcg5NjXP5735G39XtMccXy43ebG7wn9N9ggkJpFR5iEKErRxZR5o8H2ERSnkk4zfU6UvKVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "631NKwrsrL3BVBwmZCzbBQrW7oKHwi7z5djoPiZXPdiC74CfJjomEZLKPnoqyTs1fnF1nb6aVcXapYhtwRf3pK17",
  "key1": "2aaRPtaBFiZLK6sixc5HYnjnTh3b9abzt2Jfn6AgN4JPRt3Bu7FB3A9a2aMfZbfZBrHSSyqBeisMNKbJeCRqXNaT",
  "key2": "3gXokLDdVqeYeFCNQmwLinMxPDk6WP3AEDsh3ZteJZMQrb4CNTYWWHGnNqexTEsVRa6AgyNpjvcFkNPo27XSTn9W",
  "key3": "2JFZEFcVzRzP9YVx6F1H4bxFNxzDa4t33VZukwPZh28cWqsCRdA3C4ij5wi4dqFMdWJGa2yG8ZrRS3YrELcyYaS2",
  "key4": "c3DzDcqBv2sAPAUP72ssadEf932U3WxZVmLQDe1ibTgHAhNMFRQj3HCyDKMjJ89fwhdGur9j8aNRuwJpxdzC2vH",
  "key5": "5PzzfyG6S3eNHLMdVwbdnCx3s6KW3oZCFycU7BV59oJuvkB3amkB3tksZn53wnjfokdmcXqmxybnL6eJnSgSmpcP",
  "key6": "47RKqU8h7rSCFW2Cm1fqUSWX94K8CpEY5yfh8NWKD3GJUPrns7miuupazRnweaRcuR2pvZzTP8cTLToAHSKMyGrf",
  "key7": "2wFC85HbBomTbBiCX8aQdJkxWrWDBoLvVabi6rkwnu8HthKEjEYXuj71SyMZbh3w2dpP1uAFcixSrtan56Eudnck",
  "key8": "64xQRLMyEojtBZrCqvK9HD2ZTqkG9zxz9o1YF8tUt2qA5yFfVfd3bFF2FabkBmEDeC2rkzu3paBVJw3ayw4VmTbs",
  "key9": "5u7oEY89sGcDapZmjxS9N9exmFJww6iow29UxoxdtDpvbt8gT3KiUNYp9yAUHGPXzkqV3byJGqY2wCQvTynYiFxA",
  "key10": "2R16DGb6XgiHSfEigJfCSEM1zQKWR7Y1KnzaHpXSCDmSYTARSmSmuYDwRJuDH4nWbfHhVA2N3ZMcYjobZhq3Fufi",
  "key11": "2bp2cXJgVq12gTVYs3WWeBjCiKA2xRYEBM1GDpQy5WjmMkQSR3Z9xkWRW8RD7GvPXqrecUq1DHDdvuEiS3FXGomk",
  "key12": "5ykf8bgkhq5NCLqiUqgdt4exs9k77Sqg3FL3mA4EU7AeDZJJQp5FtK6ggriQnpdYEuogh4ksxK1ZdcvoTJr8CCE3",
  "key13": "5chsezBuYe8rhyFhUwoDhBE4ffGQcYK6vyTKJ8dQA25unL44rsdo7vhhbgw8RMKxut6G4BCsNNDj77sf8AdeiSRE",
  "key14": "433KjvskviPMacoVoAMfpj4BA2h3y4a3hAhU7CZfiKAgeucTjuqy6bo6c2Qc13UfUNNbzT1kE4eL2fwF1tWXEjWr",
  "key15": "nLxvJkoYfkZnDkVt1rr3PDRYYEet4X1uAsn6a3TP5xpRVizYobaqAjvs8caufW3DwKefm8dBhLMuK5QMKEq9bry",
  "key16": "4nD1xzTrgiUFpBDj6idcR1JvxqpoLTRkwmkU9k26bFXG3VMFAprTdshkuCAAdqkvDyCzj9LRxZJz4Ux6JzpUwksY",
  "key17": "4zPajARyvvKip5JD7Ajaaz22t1kVAJga9aWcoh993fDHuEpW6c2mLPW2fP1dG1vf2a357ETCk3teMxXHWyYmEzuY",
  "key18": "3TShAq1KxtS2aW2j4WGtHqKD5d9J3bDooAHhD88gR3KSbx8PGP9DdctmyHmvAoyqbax6dfroFEMboLpoQdNpDbjQ",
  "key19": "5bkA7xMk37Y8orTVvv4WxCr6hEtSXneKe9JXmBVVK87pqWZDk1jeYtzdY1ig8zw1UR7o1RwXjDmZnXgnPH799doS",
  "key20": "4YSBnBecjrLDCFJYkkZqm3ooTLP6SkKuZcqhrQdk1BS1Fw61ZhCPnWjCvChSU4zw7iG18jWgeUC97BLpcKXcykgq",
  "key21": "3n5b9EzSrj8wH1ipP9bWkdDSTZph5LtQ3G1KfpDHdR7hhN7MqvGjRJKksFd46C7K2uZHwEyFLcZjtguN3Yr7L5jg",
  "key22": "5ikwsJgP9CwfRB873z1uR8uzNENmTEuhvcyh7g1h5Q5paX53oPzrpQnnk8nuww4WmRYTW825jeHK9MbZXdpQRoPq",
  "key23": "3MdBQKFR9AZTzPZFVLisCi95eomGjC61Zst1Giw7e2PaTrBS7Y7aJzpZJk3uZyzKAy1qPefjCUtx3p1KG8CphGMg",
  "key24": "2dCUpt5vGxuv6DFBGAGyLBn9eLRCnDtQZCZamJYC6BPP6iXjgRuH24qTLH8PsUBwq3sg9CYF6Yw8V5oGYo91ywJ5",
  "key25": "3WNM2MSuDc3WgvsN82AqGJ8jsv4StNKJEMrupbAdtFJc392zQ6uPZuQjvnQMgP369HCjWdmUtLVFpKoQBpAsXFQM"
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
