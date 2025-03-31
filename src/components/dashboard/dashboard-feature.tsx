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
    "njK5izMC3sRV2Nzsj3Naghx7DgCRugwUZnRD2CLWfjj1unVQn7iR5dKogJkAzvWFYB3LHmQ4HLXkCi9GbtDi9gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHysUsDtztuMK6AbLDVD88ZEKMpdha7qd8rggxQ5YMVsPQnChCTkmP5bKo9Pae1Gq7Jcgte3VBk5QgM7t9WR5y1",
  "key1": "BL3J1rjb6T4vBzMa2pRGSJJqBk471am1TZ5v6bpKLSsx4yo97tWpH15cmpGrZzumrW5JhVuYX9GTmV7UT1hb4m2",
  "key2": "5ZRU9R85SapMDTSPhatHc25smtTAk8jxZ5eHSo8YJvjuaY6XVK7KU6L3YP7yRjiSv2UGqtZkqnvswn1E3xHrtfrY",
  "key3": "39rYxsoR6fpR11mJZt9CNtmmN81RZrA3fTdRgst9wYjeT5Mc7duSedjqz35wE1SryFnKxjmWLzaeZN287KjUu59Z",
  "key4": "2xMf311Q8GeZfexDBkTUe348BNEi2kDt77UHGbxRTScNRwV5PGS4fyD2cLVXbBjVj3A11gYoj58UEgMqVYkUFGQM",
  "key5": "5oPKVXDYKuaTWi1rT6KJMVUXYwLJN26ytM8RdZ6uvt9MCnjrPdPNjrpHWLkf2PLvQsr2BuQRexBF5y538oNqfBHQ",
  "key6": "214d3mRFrxL2WvqRCAavPkUZrUNi6HFLnHXye8mAZQvA7vsoMipjmZ9xDR3m5jZfa9WEtsvzGPR5btuUXX2nLQm1",
  "key7": "61yJ3tnU3SovyKzma1LKshmDvMn5YbY27sVVzdQjYXxMnSzxxT6hsUakjcfuRwBBxmAge5Uy2AeFhDmdFfTEreev",
  "key8": "4jF6dxyHFFtirBMgCiPaTUVbLZfFknDSXADcTTVqXPPzRWFyPURAhv1iZqKxmntxjWY33RBdeCXuc54QRhJg7CtR",
  "key9": "4FPixY4CNxMj6nSBv5wSo2SbsiUbLu2iQVHhQ2cYG2JF2RzUdCNY6Mc5udQeX3JfFsNM3ZRSpupT3TzX2jzBetCK",
  "key10": "2gKGPVwwpsN2BFtHPPk2vuVkxf3uu97VfqdQhR5RApvzU63fYYacD7JCN79eUWgfD7QAV7rx4NErWToMraFw7ab9",
  "key11": "wpeAxRtce7i3R4zgQeCgtHsqE9XjehaRKCRrQQyoPsiLxr1s6WhLMGKb27KampQoPVfGXW4uNJU4nU1oTZ8RXCS",
  "key12": "4Zk8K4SoAFfKHfz7EjWiPXayNXfnfCqLNhzAqaeYpHN7vajAyDxCKA9mKYjxhSBWGhDh1Uae2oDnY5BjgWeM9MNW",
  "key13": "2Pyrjkqj6QxwQ27aXeHuWDKbBvuRAuznkN7JwFof5jKSC13AWFyPjtxGY3bXV7HmWmn2hiyjnvu6BywJHjpRNVT7",
  "key14": "FCjVeJchwq2fsNUX8Kq5xDj7X5CdZWMSP6AtCaqHVgazA5pTQc3sKirHeNUfMXF615aicJfmSY477M2Ea42W5H2",
  "key15": "vECURwZ3NBy3WeSADGgFTXhNsUeKWRsgni6K9g3QxZWga7STrBVAsVgMZ6oFxBXgSPQLGgbKJffLoK76xuNvh9C",
  "key16": "2swP1DEcyTyZ5oNGvGcotDwC8CPqj6nvsMSBFWnBTEykK3KE4jYaFoAdgMTJ9gwkf75XMfmt9A1mw9QxW8HPCwjg",
  "key17": "5rMV8ft75Uk88baMpsD41jWqExfCbtBDJAXvFcE5ez7qwPJMFccH5s1a1zpUg7XvZNhgFP4Us1e21Syez9oonZMk",
  "key18": "35NvPCnbS6iydayNXpYGFy41YwtxhG2HsFNfAivfmPM9SNYzn4cFu4QVLpuB2AFquvXGas7EK3kUwHQTuUvy8JS6",
  "key19": "2t1rzDGaF1WbrZR6TNY3NAhtLzfYhZPfKGfMbbTpMaxRttuaof5SxkQGJPdXe88V6xWrFfumHQvaSqgT4WNgCS5n",
  "key20": "fZnxbvaGgWqcBj2bMruUHBED7SZpvXavbqb7cm8BZg5tfSQ7WE7DFBdJQ3b6GFeYnFEpDJeSaXSAYrqeqk1MfvG",
  "key21": "4WLSDiksZgpiYAQ9fvyjsSty4DpFecW1SR5fWwruxmWgRgE7Se2ApxsYdM8eARUne7Cb31jQDoh3PuqcTyvkiepp",
  "key22": "2S4gMXxnBoVGYb3r1byGEPPPQmqc322SjZDNHqKNkwDYnmxtGhqtENaM9f189CXoSStxL9EUC9pjTQiTp4hZE1pN",
  "key23": "4GsUm2CwgKfG1nQ9mmVoXQb8voayLZG5AaF94yJuhnLWUfDRsA18dZac3HK8NaB9TKDLvnSNseuzJizvNnxNZCLs",
  "key24": "5o36cjh9QSyNt8TQxwFb8JymeDYBmjdopf89cZa2YLhPD9kpnHcjtqPPQ98TigSjCNnonA2kk6fmtcu4qckGdKaC",
  "key25": "2REVP6QJpZx1vFTHPs8w2cArcNPeG9tpGfpTHQcKNfBK4ZBDvZHoEPWpJ9ZL83JZUyi91PdXPVezcyrbAoUC3MEc",
  "key26": "mdwGtkGhrUgZaEbaPB35XNh2qJdLHtqEa18dynkPgivdJ8B5q39KL7GLeMEnTqFnviCZGgpNDBuQKM5nJ2AdChm",
  "key27": "46pgYGVAbqXo3jJGesm5vKcDu42FBKkXQTtM3pjKbqDFsbJvHoqbMdvCYBasJAFmDFeJZPU1voCHW7HBWu3r23Qf",
  "key28": "46H7TTFGXSvz5uNHc2vgKRvgqCsxKZKra517hBaB7wCLcx5LnfHmLa2HaJ4TTrnPHap4YcZ7vQSgVHw9kwt6zHYh",
  "key29": "3V4XXWaJeR8abY9gYDbxiSqT8GMoxc8zugwbLkZ3Vo533Ms9dBZ1YPaxtK3GNLerDsooH9v4JfSBEUBuhMxpu3BU",
  "key30": "5VbnHKEYALDVywqQQHCTFCu7yNzMbzaJuE15GEYxCWfRonrPm9aTWWXRNJMR7w7zBSAPQSfeaRRg3rAkiJbpDdrQ",
  "key31": "3VAZaqVeFbPEFZuTGKXY36fA97itxqJaT7jEVKP1jcsTEKAoDHTgyfJcVaPwHg2joUiCXNNqMqwrSDK9ewX7EQsh",
  "key32": "ZjtdoSrWLKnFGeWBnQz2ErnqSg4bL8mir8MACGDt2AGj1fhFU7b8Jc7qWRkiWUAidUEXjEpgx134yT8JoFfovXJ"
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
