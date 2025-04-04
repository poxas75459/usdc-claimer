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
    "2Jf3fHJXsGXqncmDTBfgyntSX8CtWHStHKtFV13NoiF6kmK48hQNoZGJEeEYtrEF8B6vmUbMKn27iCq4KnN6vUjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QEGznmSebMhqdGMMjL96zqcydML1LT6FwSPykKaVyQcUfenAZA959GYsGKHaZHusyBrqv6qwMgBBrwehUNZoJyY",
  "key1": "3kBTciE27dbm8nz7sTagDi25MSreVZuL5dKm8MFTdcZaPiCPMYeyvy3qPg6W3szY9DtmcedYJkVDTookU87Rk5qM",
  "key2": "3iWJhPMPvcyW6PShBS2zfE68uneqwiVLCMe6FxyWHQeNAvjbq6uyXykT4ndCurN9j6RabdYVUP9CX6CkXZKH4xoj",
  "key3": "33Ei9feLe4djf6gG1TaF9VDZ8uPfuWXnYW11V75dZE9SNbqV27tZjqqvZV4QtiGhUY7f1kyHMsq5uxeTVbdGKk71",
  "key4": "4Lk2JcYM7AcCbKTyTZVyXShHDozXCm7YczX2iWDSyWGbhx1r4Feh4yjDAApwha3en6G9CHN4we5Y8irxNKeq4jHh",
  "key5": "344PQTqbniD6w7yxHTvi18StUZK2ThWbi36pPcLfJoSHT4iHkfC75ncvS43RVg7w2ZwzJgjiDr1pNaTYfS24Gn8R",
  "key6": "YmYCx1yK4qj8YQuUNER2GhG8GZdCZsoKFcYaec474TXvPSGuZoEYHY3TVQ5JN6CV1bHSotcbvMXc2NFundekLV3",
  "key7": "KbgBeThYcPCe3XqLcwQzH9uD7bQdTMVtU1bWy4cAFN5og9V5fJU1w8mcL7bnxFGEBToerd6CE8KYHaCskogjnbV",
  "key8": "MAHFfeq3hkApiBrqApbEnQNMbYLoxuv9Pp8q5BEA1z7Cqfk9J9ms4yYMKCqnYYAQrQN8rwHH3h9HqmehBGkiJG1",
  "key9": "3X3rDLp5r3m3ZRHC6pLXaGw8bfgLHZgRhduQ6sWzjCBNnsHZa7vU2PJhseHxifTMFRxRmZ8R1GoYS3fqf1dVL6H1",
  "key10": "535SNcdcB26tvgGgK5Mh52tv48cR9uxJMBfoYmPBP5Pqpq4BdxsprXjBAYfNULpnND42rruNdFSUJZ14Vwzj7KQJ",
  "key11": "5oFzVnXJLkeACq5K9MBgCFNGGedy8R76rv9Knnx2bsTy14aKAhrUSBDoKFHq7dMLjznndVgsGeFV6Rov1tvoHrR6",
  "key12": "4SJC5ZLaSLfD6waojXv1PsmmyKKeWgCQG876ABfh7hXmf8sSM18ykX1TLvrtNpe8pnRteRdh9K6fLRDbDhAkoXZL",
  "key13": "5G1xABYr5LBUdqdZ8hmHrsoZNG4EcbeaogquFbw7Eq9yYWaF62oUojbGe7wWccW5txXjJwkcfFPBNGMRRLQwkNVf",
  "key14": "3HxDZ1PiyE1ydNPm7JJAoWTFAKHbUciMraLjgXMCznjEw6pAgFZvy7ESfKefgZPaDqopXNGUJDjCwj1a14dANiEP",
  "key15": "5Hio8NgrHYZ9vSQHZBjQTL8e33TGbpiVbRNQ2tvZCas8uvLA7GNmB872vW3Jy2xPfPBfVvmzcw5yayZbFvF2hcgA",
  "key16": "ba8wuEGRJJvQgJL1bdtyebpDveBnKN2JZffvU5VbBD1qiXiFcS1nV2KdbwhvSL6qKNgXyohk9N4jAXoZWKcqwUx",
  "key17": "5hvzge9SuirBvJPcis4qU7cQaRtow7SWyYjH5FzW9eDw1iVHmtambgvuC1Q5FZrzNSAudfA5kUPW98wrrJtg8nLq",
  "key18": "2g2x2Nchr47V7E1zyybtmw2UfCYdbDb1TmUb9rkaLtugpsHirTLXnoEou64UC3pxKVq5PEYeRHFuvFUmZzwpCzN6",
  "key19": "5zKAKVtTxBc1RnNNxgNe3XuWmDHNN7LPFenL5VKb137w2Ldz5Hjk5RsasUHfpemajpocTPbJ2yF4bP3y6dNZywGn",
  "key20": "WBXpaF5546fxryzidCpBzqE59XmN2zg6RkKDnDkub2u5vNoNekGqFv5uoE3epD8Hvta5KNbzkWVH1wvj7oBvfoC",
  "key21": "5oSEaaQJdcBS6nreMtpGf3TBakDq7wbGAs63N1QaNmkKFBS7oQoF96erhaU11jqvCNTbfpHsiDD7f969ADL3Q1tk",
  "key22": "65SuPuo3wuKbpDwNxAM3iz2bXU1cpFxu6YxWN1VGRcHZXMEoLXpCRqQj9QiDxCbRo7NXnkbsyQUTpbZ5i9AoVQjF",
  "key23": "5EsL3Qe8KjUqfNM7rZyQ3XYNgbCVe5UdyHpx6MBLbZZXQvzXBvJNM191g2obMyAQNkuvaspXGgCrzqURmS4aBcbQ",
  "key24": "NmTTcz8vp9djYxDf4YZijBdREQRtiP7sL4GSmwQ6Nip6vSBQjMhTwdgQvzfoW2uoNnJhNrWf5heUAFxo2zbHjyk",
  "key25": "2AfWSb2kfPqaTkipc1rc24k8hrB5uUtrCF7dttSJvTxpi8irbam8bUjSW5PDux63JaPXmgFPSFdNL6v2KYzcaqNq",
  "key26": "29sKnsZvkz3B5asBQUAeSYHgvaj9CD4obLt4zdCBY2ac8tP6Xf6cPibe74bC2jNYcyRD7UkJaizYT72p2YEs8NRg",
  "key27": "58GWnDpmncF1d1x2uUPW3w1aAcZP1mHEZUw6Fk1ov2v5h3GmMESRytxMPa2uWThKfCKSUFitHLVUmV2CWbWp5Uvc",
  "key28": "3LJoRjX1Dqzk1yyvajXwfnUAiLEw9uoDPAuztCDTqL84bgxe3fpMxkZzK4DYgPA5oguytUgUA67jSJvqXMNZi338",
  "key29": "5zqoPc4Y18rUj3fjoycaW7eGSGCndL63NEdAJSJnjkLcCmggXizyCaoghMTg9FSYNPz5TYXzoR11DKxCW76tXaEJ",
  "key30": "53cRCi93oqJXuzdvx9oV7pp4CeU9eFX5DB2yojQsvYAsCFEb53HDGL1JiZUaKcMVSjAGyFobW5NJ9fPFV5Bq5xXF",
  "key31": "22DFwL3191zY6z2bUvTtjeyaEXMskMSQakefQsfitTmtHT6AW7J1s1grKvJn85vqB6kfPgnwU7Wme8jw6MZJwDu1"
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
