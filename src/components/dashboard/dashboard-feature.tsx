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
    "3qmKY7TGLN9Pt75VC8ounKY5jAzCHwV1mq2LKZeng9YMmBYnqgh7LaNA9KWqK1UB8WTX5suCz7LiWNPmrv8bw4WJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NVxXh7vZfriwKTFttPsvqrgApwqH9sDxdXW121r6Rmd9zkxhp1d9fEw79nFEJRvUKUxAXTNYdb1aDd3H5toJGs7",
  "key1": "5eRaCWbw3ZH9wRahRsLYrgSqvryxeXRi9pNHrUaECQSnCUG5yCZupywdGcJUGDd8aSRQAkw94x5SjfvoCgztXqYP",
  "key2": "5Gw2nJTub9dWHgkG7CqRMx7dr8h1SYUGxajF13REYdh3aXBQWmJA3U9Nkd84QN4gAtAMJM1X6B27rjScYkc21bDR",
  "key3": "5MY2K55zrsT5kbAyiYVY6HasQM51zSQ5KXWiz2iavJ3CCcpEVY3oHWfLpC5LkA2JtUaHmhBf7ycWKc7cWsA1bPPz",
  "key4": "4oNUoDBE7oQdhDHBNQDwc3EB42n6e2J5NjRp6oxcdWF2Vc65yTXtkbgoBSE6J5At37UF9841xWk9tFxqyHcZvZbN",
  "key5": "3AknzqQ6kNfpGXpEJUoF4BzzKsmP3KUuf46JTeau3oBgEV1deA3x1zro9BGYHcGzYS6ouXDW52GVhJvxaHS7NdUv",
  "key6": "3FaZEUrXDL55gGs6uMcBsfusjBnyK5vjJC23KYYS45wA6KfLQ1fd3J6NmeUMiZjQp1hyGgWLM2GWpdrPJJZjjBh5",
  "key7": "4HenCev4cUcrhkTC7xDuafPC53KTZgHCVJbxuYKfhCXVmGN2bjjgL5bRBNFyM1rmrr8oBSPzpht8KJvWRHFjFic9",
  "key8": "24t5LdemCPj6KEq62jrMbD7iuvvUHHnc4kLnPPyo4ZiGN1hnHpbXHNeceyewEi1CGUZtYHJYR1KBjNWeSMK14vEY",
  "key9": "548p3egNk4bsYj4ztbVkLv6L4aBcTbcYpr8PDFc5WMi3q2ukqVgXFCP96WHn8KaeyWgGfznQHDVkkrULkXRzXjth",
  "key10": "39VEFXzU5C457MHn7ti85NXw2HagZ6etJdCp2M3AmTaxhGSHnhe2ihCeUnAZpEC2nDGdujYwN7pP53tyV3h8sjWF",
  "key11": "6KiDgwi6QA3yT3wtakzDWboUSvYSxUKPsUGU39gfUkokY9xdm6oTF1tomkQGk8BtqYzazWhDcQbQDeMLVNJyov1",
  "key12": "5xSywLSoAyWBKhA8oFtTBqBR6ipor8njoKH7WQudrhW2uHk5xZCrMWMk8Mo4GbvEZhCAKDLgFfcaH5bVmVV6KGB2",
  "key13": "28BqGJfEi2Ea5BxYRXXY33vCkNNLCcWmCa3kHrvwbYqbGcmwyaYf6pQDXLUY8vt9VR5QvgQhGJRDqYbgnu98hGB2",
  "key14": "3h2wQHFPfvX1UxZ8HDqHiaiwz12nTjM2p3Nfi7ta9sjqsi2nZdmB97oUUtuAqfuT9Yc9oqDhKAsqPuKVnCQD1bVM",
  "key15": "DinRdXTrg9arB8JZaBR8JEzw4pa2kMA2cUhSPc7XwPw1JidrpicEPuHaBbeAgf4oeaZM12gV81sZnBXwce3ES3G",
  "key16": "5kJGQR4bNdjHC7YudZdaSJQwH8hXeLSFKMxaFMRmSfFX57VUQJ8qDQ3mpzaJLWnsNjPrWvTLkpp2wSfgBkxEvqk4",
  "key17": "66fNwGEjMg65hF7FyitoSkrvAnhfTmJN3Vmrkm5c3GgSBDDmeV73PW3aCuVbYDrqJS4jZBsQWgdVjjja6cHTogyH",
  "key18": "4TTfcXNBYAzTPU8CPFC2bKFZWUp3v1XDjen1hf62ruQeg3LgQNC5xnDkP1tvJkvcARgkV5u4xnW6TEcJbjTcS8L2",
  "key19": "LMbYh5R5RPACWtqukY2ZgfdLTzCEaQu9bdBdabL1ehMSHcFT3RZSxkEYCzuUJEVoTyVh6ikoFhGbB8DcZT24mDm",
  "key20": "32qyFXU77DbmvJ8DRLrq1SCHZSvAnBH2WGha9bKoHehXrDw1MNYnpzdrsBpAQeQqrvT9ERfZ4VH3eH8p1eAhnASZ",
  "key21": "5z1bCkCoaUWG45hVpwAin3SFTjz7nMkHnrjnVpBmv7ajZFm5KgTN5nzi2Je7E11AA2g28evAWBns2EnwFQnpAQxH",
  "key22": "3iQKPsDzBk6qh4azVgrqrt4V52V2AB9njS7khLuuLZqdbu1nuY7UEY9fMrQZ5p4eMoETNDvJRuqokNr2WiJhDQ5G",
  "key23": "4j5zv3g5vg6tF5cnHEnXpyhqgKHqeqEUzL5VMXuWsZuKQV9C9jRDG6zVBMdPQFm3eyHjNaurmw77x3cM53WKgVoA",
  "key24": "2v5EzqgKThXbb8BGW47zW2VY4hXyzhiojdat7a3kjS1b6s142K9REYsyBBpoZFQXgNnR73wq1UyRD59YGEfEaDAq",
  "key25": "2j6WD6DgncSVZ7B7JcZ1zZvWrYMMcyMaqYtHhtdFYVPmSCDUrJEaeLDD1LgeEjyv6ZwAZEN99iLnZPqzLZZ2osaf",
  "key26": "2nGGNdogUScoZsjEjGUnz52nV6thfisNLrdddPSfFT8dCj2PEpLdcPwqx6rbGYYwinwJE53EmiMLVuTsqbMAD5o2",
  "key27": "3FwdP6nmB8UgdwdMuaj1GcLnvYUbHLg9rofh8EbRidQc2nDAjMv2At6bSpCPZBEJuSqncsVnAaq96guDpZCfPAWW",
  "key28": "4JsvcGNLVCGnNsuUzR2bQKve2JE97d5sHWfx6gTRAM5KAipBarWZV8jojaqtfQdvSMH2ajLVHwnpkN97FnQVxqWy"
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
