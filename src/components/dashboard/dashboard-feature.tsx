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
    "gNuuhdcGHoW4t16kb4PnkvYtCPHSKnjQCyh62LgPSuRA2MCNWYngQRQEbbkAE6R4uaNbiUzBrwRVwaNRLtDMUvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cAgLvAVvsccuKwpzJJb4NeTKYUuXCFyTXQiSGRrPLoxaibz2pwWMbe2MoDH3rziaQG2UAsgPnVBuoYXsFsi6g5",
  "key1": "7s9AiKt3bY6ENpLAaPLRZSYExh3zuL85THhrizNxPRaWtA5f3aHwuUkthwKMBUadAv2TJwwUPJ8226iitEVVm5Z",
  "key2": "4mEkAExvojTMzKa6nWhwj7MiZUQzkcDkxp47TcVQfRFbjxdMKGwuLf2CanF4wi4uEaQpNpfxs8hzkscWNwgUykY1",
  "key3": "62ycZnF46UxDwdsARzWeUJZbAp7QTcoVySb6Jve2rvxmLg3kgq8FHupu9nFAgVhN2NP3ToWiqoYsw4SFSe4z8kgR",
  "key4": "4XsqiYZ8dQBYdPuxr5Joj2hBU4HnEtZMbNAWFmwVZsEw2HkW9uBXG1WtbxozttGh4WKnQ6Ga6QPqoxdBHcuAf4aJ",
  "key5": "2wVk549qUee8yBQPy4Lo9sBDSq7hjDsGZ2HQkQv6UQCwmFDpTG6n5wDwPTNjHkRgRi35Nx2SZ45antCET8AcQt2v",
  "key6": "rkHsNANW8FLjZKca3BaPohFdqxN4yHT375L6WFEVtmtW3oya9BB39T9tA1ANcQKKFkqDfaxfn5Zx2hU7PXLqCoU",
  "key7": "5FEGu5dEVyGX6fryUJS1y7LZuSqvVth4wjEoja49Q57KPkoj99AUtmHnNGpRs8wwmbZRcCUSEUWtMt8FMuCHhTpz",
  "key8": "4Sf2FbvZUtVwUUk4jEooENNDzGob5pcTRNRddJ62buUnHiXcXBhYqCTi4C58UZM943MJkLjbyTaSd51DRFfMmtvg",
  "key9": "VE6S12gpKdvsx9Qnt55gaydW3bRYFSgDq681Cb2TzierE1zds4tYEV7vrKJwmSiALPcUjeTx5YLvE89SnQj13yu",
  "key10": "gYcidCxSQathruLi2ihW4inZapvS6i7qPNCkVxmcwBSF6DPfq2opMpEZja2QC8HYUNs85F42vXKpG39eMkgYu6H",
  "key11": "49ZxVRKGgSSbvFGYpp5mrvqJAqKXnGTV2USnxrhPLrxVFKAddHWT1Bk18ewVHt4W4BLrqaHXDsByo7ZwSH44xR4v",
  "key12": "2uf4Ma8ZM927LUq8f9YqpjqpynGT22kxyuga1vojj61wzyxCHLEr8on7JZ5h7KbpZi9NxnSEyDEtnaSL68YtawYN",
  "key13": "3aZvY7Aj5HSpJ9HNFwyik42Eks1neZBa9nHh9i1d6v3qomagcPhZFP8NooggUiSMkuGs1qFidx1gBMbsRAaNaPWN",
  "key14": "56xY9rxxpzbQCo195JRbyPUAzPzW5FDpotCVx66bGAs7xGVsdHDwFNAycfXtHG9EeveLXS2RbNS4QsQBwjDnbKUi",
  "key15": "2XMTApgnvLZrFBmTQAZeUaDouDuBRNnvPJMwYWS71NzRNhBiZGoDCuS6Qt9n3RrFa7DqT4R49o96bNyqpvq45kdA",
  "key16": "4nsoBerwTwEBdgLzC3hfvkBkitKToFu4XsoG7FR3aCP7aRjun8BuyYALZ37wdCBDzHabkdesbj13C7TjR8azCW9R",
  "key17": "3uMEgo8RCAwvMzFMCbqzwE8d1ru3PtHjxrTcs8kJuJydF9VUsosdBRB3Hy1Df3B7D4PTmjBFpJWFVjpDdnosGznM",
  "key18": "5zkDDmyE1nrwuhYEXhgAiHWK6fh3ucq9FuYM1Thqs4TUwHU9awXmxBxP8UqPDjnHPE7KiaauUvUWsEGAVCTni6yc",
  "key19": "61grYou6cUz3SeXFcbygXymZSRDc59ACLXQkW179pojzT1ptSmMu3eVf2wm8WNNHnDQmS8mknuJcsu5NFUoSq98n",
  "key20": "A4RnxFGQ9yNYFVEuvYbZhFYVnbPVd73s48uVm8QjbUpuPTtaqzV3oiHLtnZLgdadBjNoM1mzNu2EHAyoMJQweo8",
  "key21": "JFUYPxMYZBhZSrewFTz3YdFL6vCqEFuB6mfddT73yrgyo9CZtWk77GqRVVaRRdnxP2GJC2kXr5AfGKNrTkDD6Zp",
  "key22": "2hdQcAYSefWSqewHvhzZozaNRCvGcMwZCo1nvED9kMqNqPJvpx1ewuqaqeAZYGBTJ6it9qerrd1KEQPdR6oWFmsu",
  "key23": "L5gV4wFum5zA4XHHTN5VEb3ffay7UDo97UpQp3PkBioMWQcVLENUxjJsk98YMHWdwCXAD33QtfMRFd5tGcMFDtX",
  "key24": "3uZ8CpVFRd3sr4HV9Z5NRgpG9Xdny9sgo3vqbXSHSFzmFRakvcUqEis1bvZhxtxVZUwEKZWdQD61Mt1vCg6s6Mma"
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
