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
    "5ANM2hDKZDT7WNV9MJPL8tqNw6TuftVkyaDz2afTmcY9NdgQDHtCW23VMZqntMQxmMyqBU6djTz6iDuMdMsCdFPR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22L5fZDPvywq7xZYgWZnoitUUmcHrakd4SnjZPgF7QaCSCkLzjvdQTWjLprmx9Bh81obzxqUoJqkRjmx368MB44b",
  "key1": "2CcYNYwyGjjar9J3SKgvXqLDx7E7Rmgn5KAsS6K5Xgnob1waj9XuR7FhgNsa8HY2bZMqhCiXsoEu9EkAbJqB4uJ4",
  "key2": "4vCjiKVbb8zv2w3U7kHEdF3psqxzT7D3zhPR1wY6XTWW6g9Nn3YRAPy4jYstZzNr7GkWnXXipaffNxuPvZjSFu26",
  "key3": "aZjwuhM5vKcDwvn9QVTQSxfhbt3wKgTBcLwZS2Q7Ef2k23bBuaNLfdaKgSpU7pjKYRdSZfbjCjnCnmiVXdBi49w",
  "key4": "4csQYMF9riNRK751B6gYpPbrHaiPQKhL7mvmMgcq8tSy1f4rn6Ns3P39r1ttX3fo48JxqNAPqN6HxWQpo11GJsox",
  "key5": "MZDUvUVKvSPvUNb56sdNGXwQMtAppWctsiVD8uyHHVbAaSnwHvNSYzuupNZFA75punYaMubNHwQ2qj6qNNPVpNq",
  "key6": "64G31UTwkDE6WrMe9Y26EJxtaUF2AmmXDgsUgyZn2ZFdiBvFurehwguCqLAS3iVTB2edUV4J4osHeZZ4U6tk86uJ",
  "key7": "DFfEWuA4HCzLF25dZqbYF1jTzRPeTt5Mz1Jj4rnnkPfdP7BNbMfx75bgvx2Ddv5kM77Fo912NzjeWyyuCiBCbuR",
  "key8": "4jL3pymYGgDBGXnn2QZG4HP99THb2LAgAwUsxwuABTDXCr2Cs4n1wiLtXWAKQmHUvNrskMKFdiGqovj5zq442gj9",
  "key9": "25SViaLsqixzDNHqwYQ1LJRBQsDEDyWTLKMCJ7iztLyvFMxYLUmQKAJczTuAsgAqWiEUNuzr9QCnUaNfvXR8wsMf",
  "key10": "NzLZySxUD71sLFtLvtFVF7tFaRdL8ft1HrnpzKKzG61nihmxfddWZjn3hd8N2xmDgkc4YwvmV7gbtFN94JFrxHz",
  "key11": "4u55kUbgTVJCJ3ptw2t92YzshamNPxh8TP176YF2Q6eYaq9Hru3pUfV9CLH2YL3poo7ko258Yj9oJa1xMVgssN7L",
  "key12": "4DpfM3PzRhmGK1nfkKN3oWk6FZE3FAZSh2MEE7DqY9ad64QPjdfqaQt14oute7kUJovbS6xkWJpvbWnnLKBkdtPZ",
  "key13": "4dR3qBiPdnx3WH7GPCFygyS41NKTpJjpck2BysfRZGyNNu9QhfDyvwu1kKJbTefEiDLBM4P2ud7rw3KdqnXXgU5z",
  "key14": "MSseACUs4gn2PsDSsKPFzJMBtaakpRDgMJ4EFjo9G1EqhGyFGyUvucpDSHnZCQA77zQCLZzJZVSbsdLFxyVLRhY",
  "key15": "4xUntW5Gd7xZGznGwjxVVuG76zJQs1BjLmsPwHaUVsaRMz1sa8YnMyUEw5cGEHqM2RH4cTFJzeevWMtTWzUVmK4b",
  "key16": "2LZz9tmGQ1C5nJBdHKfZQS8G9RuJ9ujquqszoxrqLXS7E7qXBbdTSLojZsysJznkP7sz2RCnB1Zi3uwdYZ5LPo4s",
  "key17": "3j3ZcYg5MF9Aj8zraXqifAakNawskZU977s4i5xhbyGG22W62977eocVXHdj5jVAnqKaJpKQ8oMd3ESXrLQ5VgLL",
  "key18": "2ajp887KDpZmLrCJjGziJadkvhkrrKZq7V9BQi4HWMYqtNBcVJnmz8SjiChpYNY3z6JexDFqjLtD9UuopURZRMko",
  "key19": "5kZ8TMdya1farZNg6qgEMJbfyrXpCqj9wQM7D8LCVBdZK7nV8ebrCdJCYbQBjXdMnxpTNEzfhhPMM1RXcDbVTrX7",
  "key20": "5zrKz45atx5tMKJEmRmi6pKPT845gNuBFKv7mNFRnXxWxV1cuvx9hGjjFryEfLWhfPshTexVxXmBEbFPj7Cmp2tK",
  "key21": "3HXqY3qVCaEcbEyd5mUk8qJwMqfP3Z66kwqDv8mGAnAJAquu8aDFwNVTnpoKSXDKAa7U1pfiTxLKH3QWT37xzeJp",
  "key22": "5EbnR5uMNYNhGvbsJhw5HvsjppwnoaX2bfeiwUaFfaVPnByj7DJLcncWMd9QdxuRBtWmqJMV3KNV7aMcDn56SW6m",
  "key23": "2kheXei754gaXqxSSii3VjnHWdjfnAfJ2Y9ALXaXfKXfLjxQ9PUzHSXES7LZCCrk84smEccJZH6ettSHhVr8wsXN",
  "key24": "5Tp11KySSkMigReoGk852aDd9H9dFdbTQGHLyRT3PsDQNtvC6tAKpkSP96ovyv6nCtDf63VE5Tn3ZF56EmViciCw",
  "key25": "3JNa6Q2mtTvucmkuY977ctFxGvTVFJ1gcsCpnFXcbKecBRDcTXVGqRszGhvx5p2PE57qz5LNRoZecgBczYR6S6r7",
  "key26": "4jm67aAV2PEarfme1oWSQEBuMD99Aw1wdA5Gx98SmJf1EamycUHovj3dGMX2ou3U4r2Hp1h7Hf95sNPsSgkJjR59",
  "key27": "3BsEebXnde3ydeASdTYVshpuDcY7M4XVU6fpjYEpP3aBznzrdL7srG8WmiWA14FE4BjAy21C97k1mayMZYbZSAe1",
  "key28": "BoYFo6EPo163fKmZTQSvoq9GdprkXTW35UcLqDqDsgPjMGuBtcLdAe1yZjHcQCdHsHXt3s27K2tS73VLYtpyGtu",
  "key29": "X4vxTyQpKzjinApcWMa5tJV52nfQVsGdpVQVUpQU8GBoYz12KHWTQAxBtUduzji46o2jtjHdU3A4u8XmkBW26AB",
  "key30": "2e6heRyoWk3YyLrNik5NmwCfLmoLyYZQLazmE1XxoVy3TnuLQNAxJgvbXYSimTStWvntLmByyFf1V6MEZxjAjD5g",
  "key31": "3RDJZ8mhX45uKKGn7zMDLAf5Cw2DzDMB1NUxe8kkWLjnKosDi6qkjvuGepBJaRbkiwWjBMs7KCRqdxqnMAFK245i",
  "key32": "55Bc5Z6QNytDNZegsXK64ytQ79TrLdZHtfcUbjgwa94UqXc2B4F8hpg9SYNdGYoch6H8QDVxovwCLPSXLMJMQwDj",
  "key33": "4Tw2g39z9Ym5VDbEt6sw5wVbrTXuVfPXJVXYZrXtgFmtpiTJ1Bh49mHTmNq2kKNeGkwpxYVZYzkXW2u1AwGEaNvb",
  "key34": "XaAcLumdXWn9BD8bw5DwLLSyv8JyMturVr9xjFLpSoNuXx282LfRGSiWPwFWL6mVwpQmF6BxRNeQyH6ad5dpku4",
  "key35": "3NUL9aM7ny7SebBDVP3ZcTzNaCmaRR8ZCWS7fhfERAMGLaKRvui4XNZgziPdsDeBoECahj72AWkMPx9wv8DqNE5i",
  "key36": "5ca7K26MSfXSBU6YUM2mEaoUh7ksTs8gtVwgPgTJczMwos14ZgMKAHcCT5v5P5jhkEEU2EjT3cYT5WWVKDGPDh3y",
  "key37": "2vjeQYLm5PUki2kz5EeDCfvsK68Uc2mmWRHxANZfUDUU6EikF8L5nHPpiXUWotPd882QkZqgn9kQkqeZ9bQdrMj8",
  "key38": "2HoVz1oDE4B17wXbvDxodMRfdrbXKCtyGjaKmcG3hz1QciSYgmVBfFhjgw7zUhGrrRAqkkLjpVeK745JmJfYVhU8",
  "key39": "CJmNxozXfMF35Nhd6sd74B1k9mCceEV9gekfdUER915nqfivawU6jnL8aym9SKVyfDBQrmGdnaf7caGRhDSa32x",
  "key40": "59FnUEzkYEzRXxGvSd71Hme7g3kdtmS2LCyRdEcb6b298kzkXFHsuv6zXg8w2FUU8ePbHHFusC2kBEx8gRFPv8c4",
  "key41": "4GFyiJSxc7UkXban1Tw77REsS8DLoou26YQevsAq42NgnPYkrGxZ69qEoXnuKvWQmDZDNzbVQctDTm99LyYBGa3X",
  "key42": "2i6v3cjMaECeADyht68CRgozmBo4t8A8fksD5FHwFgTE9dWzzAyBrk3drMFemMR3Uf7fjrtus3i6g1C31uiUUU4H"
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
