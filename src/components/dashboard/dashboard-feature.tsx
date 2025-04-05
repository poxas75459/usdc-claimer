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
    "2WvBCCkxiVcRb3AQ6iQ5MNpHqwr4G5NwrG4zTwVo7zqX1TA5SVhP7rKBgN2vHtR51PfRd4fhwtjJ7Yjj1YVtTQCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEmEadMvxi3ic7NjjB5LQ7onbfqhZVnrTp6bBFBbFUTMeht9ixpDjo6Y4GjaPz5JtPn82FP7C1WuNkszxywSdRP",
  "key1": "2uzWjwWCmMu5XpGuuRUrYfXMsbFGRUgf2sEffu86pyfdv442x5aBp1tgZ52kgwvKH6QYzqqw9qacnLKqQdNvi3ew",
  "key2": "4EM3rFQKVjaPVojDHPfuQAiWoD7RYRm5tzHFvUXAuAy51w2LS8JgghmvzELp8cSfpZCygKez1AiHYHheMBThrFF5",
  "key3": "5P7DPYyqbXffhoyvYkFa9fHqEP8qq8fgW32Qdy7HV9ghzV1cwZ51icY468dSGWkPYkShK78UwVixuTYuSGevLdBC",
  "key4": "5vBKue4kMjWBZgZvjXH36JFaeaLQCijsbFSJFpxWsZsJBqtrd6RpTTcE3h5JZeUibgUTiG7NdUuQzxETsg54U31Q",
  "key5": "5AAA6Wam9G4uaZnV8mmr1kNGn5nMJvrUMoJg23yoKc9ViNE563RG3PPGC21FjndCtkedS9vE4CMiGdFkqnUeXMcB",
  "key6": "2gZ7J4UKtD1heX7UCPNZXqpkbh6Gso6nsgFuCHQYE4pYGrn8faeS9HhcxbrR8r997U9rhWCAqTMkrM5Pz9d8Kp6G",
  "key7": "4gevUyHBY5WCWLeMqGcxZNnjb5vqRyBk9ojUCALaTTtSwrjhhGKyc51YQ6EnB9Y8rqv19dLrJC7oLuLjZGWPdrpG",
  "key8": "2BGALb1rZbEsHLpJhHDTGYgW2bu2HRcZfAsUiUAYoRDkCQtxn4ruLEHMVBmWqbV7V3ZVYR9Hbwqad9ZRbFnCW8aY",
  "key9": "4amuvcaDRGYe8iv2v6o43kT1v7bxGmcEgUd4EygtUBCEWZKEqiJkMNmAfMQKJMmNxeGczg6zWwSUMBmDgwZxbsYw",
  "key10": "5JZ2X5Pz19jKkrsWfeAVFNF6Y6RKLEQrGA7cf6n2Y5r1ZsE6gUVvYcvv3EhDBDeP89x18AGAdLoTqnXBwA7kdNnh",
  "key11": "4dbRCbnhbkABcSvBet6HjqSidCffRGSvKegp77utJMMQJuTxyC4cjbthJKrvV9dTPNPZcj6GPrazeWfpuN9fBhbV",
  "key12": "5ZpozMa7GnDFynpm4oWWPELfMoqdZRp8wozmEGVJhdVPwtrUgd5ej6fp32Fo71PRt5k7k9XQB2s612WDVTaPHvSb",
  "key13": "vak7sErVHVLBBp42RCanJWhJvdwXYRRc5s8GmUKsy6xmcKCkjb1ieuRbofc1rWNdivRc7ysheR5A3xv2gtCbCBk",
  "key14": "3EVHgrrGjJgUw4eHqnPFArVq8raZDgmQiJetBP6ffFy8Per9aG9FAaQf3m2VYW4HUkZSjvef4pg35GX2w8gAVB87",
  "key15": "2DUqU3Wht4mYzifQJiiUErdptrhsaLqRd34v2gEvjyUHsFoNhXJYVGmxEqfnh22w68Sp8CgtwuDSFACThBmC62pC",
  "key16": "LgVFoxpaSyNNk4xCQg2ikYxSeuRKab7VVGRkgcNmoW8JBwMUc4tpWRxg44RKsqHSwBm8YZrgHShirXeNX7vc9Hh",
  "key17": "2twXiZwKG4vXmFosVJzor7LVHwNH24B8V6CtQDnSh8PWGwXsiUVsN2jWtqeXB47B2enm8eUByq4Wnw32yJbox1kT",
  "key18": "5EiFqTw2u4avvguGjNa28EwrHb8HTE8iFfawB7hcKa49jPeRBPYDNnG26pYbH7K1AsBgLz9P8kjkpPa3GzXJvyTz",
  "key19": "2zbDF5ivbMrEzXVyiEojPBhxVe8DuVsGDWd28skSChJ2JFAhzeJKqqAh1pEbbBSFPDSruHBKKEgJ26NJNQiiyuBY",
  "key20": "63WpJRGwFozYHs3RAZ9znrqgCSCdfSqvz94JRVCdcUb61dcpjkbjg1YFEFWTc9N1HtyRWahknFvVEoRq4A3nVkQL",
  "key21": "4sQBqAjJeksJXBEJzBN625m1Dvz3sjc9wshDM7qmnzd9g7tE1xHCSH8sj8bG2gAULEzCBBkQCvtVTR1mYjhRWkkE",
  "key22": "4tS8eTLftFgeK2wj7MJFDc1xn4G6e8KQ6VLgYsrnWyAPNWVjnQge4Ep5vmmNGBLczSGiJ15gU8qazH7whSMyK7vk",
  "key23": "2a2kM32wLHRsaUJhzreuN838o1Y1hf2xsixJZWvRGcXYpHoWXos23JbVw4aX9vYmsX9aLRJyKFW8wqs9QqCmXH2E",
  "key24": "5mueVqTRdZgVLDdQqeNMy6LBJTBdTQiC5gdtUULK773czmPFMPmwNRzTRvrkpYFgkkQpy76riHPZWSj6CAvYRh6q",
  "key25": "4gwTyo1y48s96RjbeTSSok9MFaCaXV8tPospu1v7sDzxL5CtXi2TD2iK7Cs3NGWCAJavyCukgcDxEHfsQ6JGmv3A",
  "key26": "2Y4a9eMXACgCVBfkpG2FvLLGD6SWkuDMGsYQLdripc5zWCA2SiHQR5UDLXy1F8oQk8T3EaA7w5eYfrrVHvJw6XtJ"
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
