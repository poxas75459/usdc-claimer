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
    "66UafoPz98c8U96eTub8qcPPnQtzT1RAjY7xvcK2jF2bNk77KZFT5FhA2Lm9DTsqMfezoHKGs7ih13qhA6Le3mk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rzAVxyVrK4uYNaxmq8vcpqcMcerPT2mUybTAkioZrYcK6AMcqefPEgk5sknu18ch8BHPYGTWLTS5YVurKEkMcCa",
  "key1": "5dQsqShcQ5ch2KZvakEqnPYtUuNRVfQsFPvQWwmuBREqNNGayNCniJYT34vJgh9pYpqBscDskMTxYzMDd3VvqHt9",
  "key2": "5v3GrXta4SenjUPJx1aJAkB8NMH2tcLGoKacgrnSxBDqRPk7rgFsfQGFppaFTWidgNN6dRUNPKzHxqLijMmujxrB",
  "key3": "4FMM7rGYrwX4xCLpyS5KTQZsFmTfgUhgDq5feWyLtqs3p7s2zAMxkYW6irH3oGCoMrVem7xMuUcNJ9omKtoixiWh",
  "key4": "61N9ZW9rcVeEtr9KJ8HgSrRkJgw5yLbvdEDrrk4c2S6dH5KHqquyccpkCCc2ZDeykS7k2hUnHQiSaLgBdbUQ62Wv",
  "key5": "5r56ZMjeu5EtpADE1EufWYaHuTmXgv9gu98wF6vQCBejqBzHeAhxkRPyCuG8mERajLzVSJbaWJ8fzLsiYeHcT8kc",
  "key6": "3meMKyPcZTuughbeWNYYyePZkWVKDK5k3woZ1hb3ufiyXQWdqnBwwbBfqjhheXwqpfRJfDvk5MMzrpP8x8qQKqzd",
  "key7": "6295gUirp5JXfaYhGeXNAcEE8CKwyuFvamCLt6DtjmYKuQGFJHzRLXmv77Qcz6tYzXFbThWPvqh6BJJ3gWMkEirv",
  "key8": "4Cfympic2TBPGmS3xSVzv77bB84BtZAHYhWsjmuPjRC9ZZpXt1jddXHuRfdNPRfdXvGgoHrdihhmrm95KCddbdVe",
  "key9": "3kJpzhhZoFdQfFMnExzLdv3QyiVM55Pjs8HG35DsjxXj29BWXXWnYzVeyh5W71u8N5dnv1pT5EM15xAqi5Q2fQEx",
  "key10": "5rWdcJB8tys4PmFhK36qQLDzPqGNbnB8d8i9SiuYN1vmBnKA9dtwJZSBMcaMvsfCjQg5nYZC5mG1Y3XVimXjo6HE",
  "key11": "5UfxkvNVwMKLwN913oveyJEFLweEK8PXHCMZqySADAgLL6mpc8TZaZZcYkMRszozquPpxz8kt4na5r64xkwTg9r3",
  "key12": "fCMszqb1uNdAa78Zo68racnz7fTx7FhWF65kFpd58CPwkM1xUcJBmr2jvXN2iGtBeXAkSBFfAuatdtF8MamiyLy",
  "key13": "sjTpo7DM1qoHof1CCjmyRtnG1jSDxatiXGm6cMLXTMEsfhNSabLgf2wyZu9JtXiGsCjptA3XjpBPCXUyc14bxA8",
  "key14": "5fad2bqaTFxajNkeFZvDV9raeVi5oTApZea4HgUKHgJY6UXi1ETssihR63rc6Uu3oBJBfgoCabEjnTeLHBLQWv5U",
  "key15": "6omkrr3z2fNV7ggWRkpupE2GLKsFsQVNFsQJfHw8MDqKebx2VPjAihckoJ88AW8n7vr4ZGWQDABdfgBGrdRik1S",
  "key16": "4UrjKVArT5HejpYVbEmQYE3BMHKZDNTLUcFeperHjaQrSzA6rAEGZ4HDbysapeigAirqS2brzDdRuJprASiAak41",
  "key17": "2bBAnNfQ64dJ9n4P71j7EmeuVaQw2wPcQTyWHVV8kKLGYPfPDSahbZizGwkLGtyegEihuKHgR93vaiwd4ETMq8i8",
  "key18": "2N1FX54TdLdpiFNg74rfGC5Cw9yxDCSomeoK9yKvrkgCnoTjV6sGLLcr68LK4sZuDkVxzXffddFbt6njfPWdm5Bj",
  "key19": "YFDhxSqPcwmHUdZey6apnkPB8vyTvYx8zHf9C76F1UfL2XhDJECSSpQUST3h3cXJKRhMKzwvnwiZv6BfdHgBu2i",
  "key20": "2Y5cwG6txiFDpCJf6unUD8mbDTiQF89KwXj85o7HNnbiFr8NxpC4szEWiisSBpkFENk5kPyer7CvY2cftkzGTjvo",
  "key21": "2WtthTjsYa28UGiYS816XkeXxCqi8tmwfJ2LpM3J1qa6dkbU2DhjL2c4TTeLvNxPQJUJ2tkuzbj3hQy4UuiCjxoE",
  "key22": "5iDAR2J5QaFsMjG2Xm152pf9EQ6CkZJyhZLVL48ScqmrmroK6qub3pK2DAUhSHw6hZSdoKpfSH4ivMmdD3vnywhd",
  "key23": "35ch5BWRMNY3QRcfGWYJnAsAqj8P4KVwe1PfmkqGXarZxUGFcLRFMG3VAu8AQ1MvKJwDL5nHPa7S8e4Gghn8jFp3",
  "key24": "2ecLe1uuHszG5y6A3MdNdKfEE2XUp5k8qMi1UbAaw2sjJXhMVQdX79W4CULUQbXSzR9c2ZEFsFE8hJrtGbHpm9qP",
  "key25": "3ZpnKUdGFHUBBxZeJfZQvYesnT3432qUKqGRZ3GX6iGc5ABv3kyq4MoePWUu5MsjgnvtWPUB6Erv383NXTE4V593",
  "key26": "5kKNo9YQCchHzqU4wcdVVJFwGocsbiwuDWMUFoSsyqWE4Eiyx4rheLJN9JhaiU46pfRgeVNbFze7W5CrTx5NYdww",
  "key27": "3qQwfYqanKoQ6eaikXW9DoKaqeSX9UkRxjpoNE2M9yEcRP2PWUGSJehSXX8ybJ1dVCBC2hukjXdzqhjYvJbffLat"
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
