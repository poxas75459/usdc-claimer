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
    "3ejjdY9MEhrCqi6PhheygyWzbqWsLC2gy4uFjptzgwjxSFwWZQhb6jpGDPby91H61YWDyNNRgy2TtHPje8zAPVEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S52Vu5z4c6X9hkh8tDnsfQ2B7XGqpkB5iSWb9oacbzpndPDnNJ7k8W4xFYquMTkNs5ASNv9fUbiJn5NsYVA5khx",
  "key1": "5NtUEVpqzLdngpmK3Hesf1osFup2rRcAt3BtPRAXdqfucksfJUsjTDyF4UaF5EvsBFGEBW8Em8uEd6Z3QY4b5F2W",
  "key2": "2e5sJE4jiiFayTwLL2BomUPy76HchoR48Ba8W7ju5t1eyPuPXphYckD6dNDUh3u9AArz55ci86VmrPYp5zXtzK2h",
  "key3": "ZxuEX5uE49p5gJxSZKbKsy1W4m5nUq7oU2SrgFHZ46xmxoNy37x4Ew9T8g3vQr6g1SxtE53v2bEosc4p2eszfXF",
  "key4": "2tux3ddvmEPLqE2wZsqGLS7bWHyVR15WuT8AzZddAdgzyTDGsq74gbaB6DrtX9FP5khNe3KW72Q6wrWU1THgnjSF",
  "key5": "HYxUJYrwVBidEf1V7V8Shv36bGfW52oLi1YrJe1Fq8C424WQEGF6BYXmgKz3o6Tc3ykaUnHeHR6fmnDRsFDftyJ",
  "key6": "4fX7WHxDLQxK2YB6V4hgU5BvwApLdkvturEWV9DNepyBca2aEbYqwVRvRskNM8SHN63irC51No5HD8K1dgZPT2rZ",
  "key7": "4ViAbYt29UqJnLaPixiTToeFiyCpUnorPvkhNaoTgVY5ApFKosKiNt2TsUbB6ZHm5Z9kffkJLP8v9pnuBoRcfMwy",
  "key8": "5n6oM17z6Tpzbb9paa1PFZtLm148RTEJWXAf94PbaSc5ghrb8r2n8RpHR1wo6fJjeNuU2EFuYXkLMZ6cfYVfogse",
  "key9": "5nQPPVmUiAPcMuhRAdYehv9KQfgDAMNbtVRiaUkVBZESbXeuzVnCVHQNrz5MXXtQsdR8sUG4hLzu3j4VU4d8E2JN",
  "key10": "4YZTrtk9RTFJgKe2LARkSbATo47p88iXFrwQM49VGaUh4k5Vjhp9SAK59UU41Ead18xX9cB3omm3csaZoAsrRFVR",
  "key11": "4Sq4BjEK6c2JnFTjVrNvfDFauDZHf58LeiAod1dmu2d5CJGKbhoNjhfTY6KR7nTRY6KmZb9Fvwq92b4VVBe77Fpj",
  "key12": "2VBSbzT8epMpsUA3CYhv2hzXxxnvPqbRPQYyUrcgywe3Zu28o77F9UxRBeWyJrBS3UBDCVgcLuZ9Ubu2GkGcz6Q9",
  "key13": "52nJUE7v3keB34ZCANAVNXX9sB42fptGhTvnrjVRjMkbL88V1tAKQe5FQpYikYoUpJ583pK11kvBoucxkuhnAH8h",
  "key14": "2BMosD97WoKJrzSTJEQmYuh25aTPEfUB9fzrrqY6beop345go7wy5aJfJjrJZGEnKPTfQvkj8SLtieLvfyYqtGiM",
  "key15": "3E6xa56hwWFTRuDM5eNENTnue1rgX8CcwxWLetsJj6BSUAmpQvnt2NYf2DF1B8Bio72j9yqCyMnW9FJTkt7ZrZru",
  "key16": "2qT1gbFc961Yy6B9LkcsPCrerSsTZEKboUFFwCr9dDqhFjibQvteeE57YLEVDKcRD9wxYrYVcZ6VvyQK9UcUHQpo",
  "key17": "Ft9PCxMEHZzeuad4QQqqvfnuFsTKre65SN5sGz3E6fPJeda6BSd4YpnmKSsRHh5F9KvczBX89GVwxAnpMphzhBR",
  "key18": "282jvEST3v1ZjWrs4GpmaNNAGd91StyV9sA48u52vd8QDJeSbZBFFH1iwhpsFzwqp5x63NwEcZ1E9ktvjAnrohGn",
  "key19": "3EhZomHwxnwEuUwG3bvKZt3p6hta4S4HxinV2rnzLgcMyzL81e8QPZaRNHXzTDWgFTn5v9uDKNAuYCkozd8zKqNn",
  "key20": "5Rt9M9ypVaCkuhhgKVyPHRbS1CdX9GhkT35VRffUPjdRVXDsGPY33hvMVcEBj5vs2gfa7VDvTfpUvX5MFnkKnich",
  "key21": "5KaQrLW8d7syKf3w2mWvT3B6enEnzCfiqvwweaMtfZpnX6jy8RYrjrCXQHQ5vLZD2V4XihwkkWe6hdN5nyxuP62w",
  "key22": "67Ui7o4TG8mZv9D3EUVatDFYHhEvDDuh4D9SvUVTcfHsQvykoDg4drh8ShVjeE5FsnFxTdKzmtLaC9BtVHa1LTmk",
  "key23": "2GFQq7NsnhfPj4EMUoW8ybeJYo5KHxq3aMw5yeEizUP41xKgNqcsMMsLSWeLVBQBLiauxoNUF6irVaFBpihrHDvY",
  "key24": "3bwU6UdRP7SzZTZicGKfLuPAtL4wAJEJvqNAfi3CjqxUmKzPakhCJ9MFkuABpaQXmtXGeD2Q9WhoA1XDL6RAekSD",
  "key25": "3AKj82rtZ61wuRHbajQgrZwd3vPqsQTvhWyvuhy99awfuQvdCtdH5npeRgzzfoWgauKiWnBHdA5PSpVff5WuAzy5",
  "key26": "63gr1iZujCoaa7B9Qfwtc4QCum6NuBUYL9rrqtMGtBzpjJntAdxpeWPoFao5MyqjaLZR2TqCLdQKTNtBABBJefoy",
  "key27": "5KzZk9YcWNJUTPwdWhfCUUSDaoXmBP1Dzu4PP2RtmUs8sJukSRLA4mmnmVdPxFngFdxmiTg2i9QQoh2izJEXWwQt"
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
