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
    "RXwXuSsrjrLvETPqo6dy7yNgwc8FToXU5nF5mp5hZ7rCPNfLEQwYJuJxf1WxVuWBTELY2kMzAtdeafvEHx38CMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfcKQKGnKKJL5LA6xMUWN2ZpKMoLiQmGvGXVP4ng4K1uquZfksPrEpvqi54uzqoktaZojx1oeQHjjULdNQeKPTf",
  "key1": "313DyZUsCofFggktPxdVYHBj6z8XXtmrjg4v9aVXbo6nL6iboPRZJTqj4vRgYeBSJbxAqWLNTHe7TqK9etJ477ai",
  "key2": "2wyhsNWtnLGSpSoMm5m2HpDwPZ1FE99GT8XUCQosfJ1ShhbDRizw11oX4BNde6MPdqQGreGXPVJonQLGZMix6KEw",
  "key3": "3oVaFpWy1QMfTPhhZZAZbZWaPP8CwHhaFRvGmNCrWDgvUCtyTbug8u3epjvd7gYLWtQ5CD91iEB563mmyMwAQB6y",
  "key4": "5wVChNpfMxuDb17gQCJgsrbbkhdyBnYiAA68NH31hJmnukvkSqyrKS7BGKG7uZUizF6TrtxBvtPsh5cqpZw5A5y1",
  "key5": "5o1Nang1FLndKoesucca8EjenUhWvBkMCbcawteYQ1eZUq2dFbi5SL3iMckjQb3H4k47Bh72ATcsrNaFzaD7DdPo",
  "key6": "3cTZhcPzoUx4eKNjvQ9TQrrGhhdiuWQUYVf35fmo3dPrU4vh2fZgFAKxKfwEQKPUmTR9pQtgKzPgi4MLUxXk9mad",
  "key7": "2LB3zm3wUHgbzxhA92g4QHHDDMyon6v7Qf9WAnDu14eHaphZhqhruMYBx6V4JQsqbkErP7aj3K7UvAAFJ7fRFMz6",
  "key8": "2kgDtyHUTCqTUZzQtUNHqH86VhBLGQa8hdv3xVGUJ4ccXHQ9QYbPeLe3Vu1v21vL4j2cMhmBcFDxWbbS7nQsvSdN",
  "key9": "ufFvBLqrAPfKt3rrvHeANL5JyyHyviop7PFSCLxJKpBYH6QnXop4iJWgQu6dDfttHM3GDnXkobFSPSVc5tpivsd",
  "key10": "5LKGiKyZogynzstADjuT4LhbLaXcfZc3B4KnMmZj2ZPJLrBUMn1W4U9z1DmmYMQfyEFF1Le1NenXpSYgnXYhip5z",
  "key11": "5pW1291y9bsAdqpPCFCVwh4jhj7SBqrvPBb4cjKNMyy7BKZJNe4gE5MvcDmEh6Eb6oyCrJzGRxKJJjsVyYHRApMW",
  "key12": "XRhSeVJbDWcy5ohr5tpGte7YbNwvV5b6KMMZhZQ2xVwVDxdLYTxbW1ary6PCRNSLS4YQNPSXeGyDayYk3CnsEMF",
  "key13": "DaBkhJaivTgYFAKsNeo4VTA7h1Spnae86R82LFWtW936UC7cWVnhtGMkabAnxMnTNodUyii7PUxquhddHKWtDmC",
  "key14": "3yDf2QaxDdwHQroAHzC7owwPGQfKafJ4zKRiUucrzy7vTSHagUfsTnAggs7NufmJWD4Aicmc67DQVhuzYE6kjXYk",
  "key15": "2BPL6adp7YHj2A7WSaF4zKpc6QfbuuzkT16gNH5Tse2ePf6YXRnxbHUXj2ZhAo9nDi99iY1D794viyGp9rJsCE7J",
  "key16": "5rS6WrkPr2A15yUPM5M15zWbH1F5RenPNVHyKg1Le2EZWDuYAoT3BG3HN5i4YfFC9pd37eHFV6GQd27UyaZw2X92",
  "key17": "3Z6bzLaS95TwtTsZQex4czMPXYnwqLhPcBRnEyJaTzLstMWATaPPFHHMPS8k9E36VZrLaq5Cpz6zqTBDVMjLLMpQ",
  "key18": "2XDdmC6LhmPC4AF8G4NASMcPFY8jNykfVr5QiPSYQVYCzTtpcwKVMgABhacU9ts25TMPsBEbGbKxLLuifxR44YNY",
  "key19": "332Z5CYfmY8Jv1dp2FzPtutUSPf1sD8iC8KxigFq9ABPZybSUtrBnXRLi4eufhJxZYDU1bj97NwmyeR2rKDGGWZR",
  "key20": "3reRQyEE47anzF5VetYqkWEvFmLefmjSYpD3Gdk6AC7PrF8nYi1rTj4dCwpQSLXHjcPtJ3g96Trf1bcBwCCEbjf8",
  "key21": "1qyXA46tnGFoiqsHpPxd8sbjBoe8V5MYimLwMpGqUDsofPVU1KuN8MgZ37RnobRk5kokej5MewEp6nvaACKmZFa",
  "key22": "47RdbgX2CdPA1RLa8zd26zghAvMBFZcSCH5yBv4fhhxR3sBgNPBrdZu3h3ZDc84vXukVGUcx1Qtcp5CgpvYdsVBF",
  "key23": "5YAfyXiNYq2xLgPxNsncYBAvj6WzvpVw7Lt44HwmocNK1jQPcSrFgKcVDA6oPaPnSQ97JZ6EbHFVfEsRE16UMa6r",
  "key24": "5EutA3jaKcGnUvBVFfH5vqHpjxCQBNQHzH7XGajAgL41ZbGKTcLCKLGWrGXJx47RPWbh3g5uHVakJQbmpobjJwGp",
  "key25": "5LmPtbroVY9seavjKv156bzw9yCo3zTmvhBVdtoX1hjM2WLCMqB9M9AnQhfyvCwjekebfQnJQM2YdAdAyQ2fFwzL",
  "key26": "2JH9ntCdhY1Dr545KaeL28rcurs9rscdJoP8eZ85es5AeTPgJjKUjnfkQj89gn3AhukHJs96JiLrxfU9TuxDiPrL"
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
