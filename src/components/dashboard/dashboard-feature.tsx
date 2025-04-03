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
    "5BVtD1NwUE9guGyPwPQQqLoBaun9k7UKTuuXcoLJkscaEtKhQkCdVFHbWK6tvCafx81rv6tzZLuJnmxNPzyftHrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "521DhqZVxSJeXC6gqA29ejnsXybuDL552fDM6UbmEFrGQtcmHkjCkrHk4z491R698S1G61GhSvgu6mo3vkfcZGv2",
  "key1": "3BCDgVKMQ6ZuivYW4i1M3EaqfitfCqQWMP21Ybkrbct6pPKcvcPR5xQXZQNT347RANoHnxYLfoVC2R1hJTKq2J7J",
  "key2": "3hoUR9UcPuaHcCZAGE7RnxURfQHFyJyjK4MfVvJGgcNzks3rBfMxviUtBKGbb9B3GhPUD9fg9Lfvu7mX4Lvi6EdG",
  "key3": "4X37EdFbDWbkqTynXz4nApdPRTi5DkTNWiTJVd6vdJymX7wSVU4i6U8EVHBYhakSsfbz9ZsiREQHPxRwmhWRE1mD",
  "key4": "5akhcF4dLAR6dktfnYn3YpMqyTVkAYoos99zvHvHmwTvLWPN6RwVuSVWgYhCTztziCjShThCRjmAFMCLnNre5MHY",
  "key5": "46K4YKjZyr1broVAF8nV8EshmnAHpgioHCdzwXdFcH8yXDLw8v1yTrhoRFJWhDwgjUcNq91ahmuf1Ua7PNQuT4S",
  "key6": "3ztpMx9p3wwzZHdwe5HEsux5KK6GM9EQaMYNrqQN7DkPHk3UZYsHvZPGU3gwTGRtEH8uZaKzVUJtkdKauQ7F9LvN",
  "key7": "2d44XDrTmzmzQMNwNo1KnhTjE8M4wg5vDUo1vFKGugp6eGjohwe5bxAjfnaQQD4oUad83hxQ6KacAeNoXHJwMn35",
  "key8": "24voJkdbr3jAvTpakDhZwF9oS24ZCjA443w5hD7Dq2LHFt8yT43Gx5h4bkTSFDbcGDFvoL4d1hB4bgKJdpiA9vty",
  "key9": "4XR2uALEJUmuR9B9gxD1Yi2AiJUGyc8dHRshuqyiyuVvwK5rsCdH37HZNgmqLEhZPuHTYgrfogGSD62PpV7DKBsg",
  "key10": "3WbYgALJqETJck7U3wqWhLmrQCViCTDkA8hS4pN3dsuPWRB91jwbsHyb4B26msfmqQ2WfxydWwC6yBS57TVo4UeT",
  "key11": "25hYsq1z4P37RyESS6pFZ5RFx5DyEuR8ygGhPRQZnjShr8NLxnjx6Et26khUGGAtTadTnVWpeQbyerip1V9d8Tdj",
  "key12": "5qxR6kwHbjZkfu9w8VejrWZvgAT1rVDqjhBMuFLJqBKZ1irbvdcpTuV73szY3GnP5vLSCVrgHqSxGQ9dtNC4RUN2",
  "key13": "g6XbgaUHzu42qeV9XPFD1p4nQZ4HNPkXPcpPNrPvLJ6pyZSCzp9oR74adCrjfayVMo3Wyx3EETm2acqjqb1BfGr",
  "key14": "44PaVVSQLrvasBmdhyqhHBmuXjrtjVTNMS6zH3zr3o8u2fYmxCQ2t1XVur9zAYauTVDVeMEubgi3BeYBVVHuMXFo",
  "key15": "24LeQGAk2Q1e1KocAEKvG65C6rg6uPeUU8uJQRM36Yb3MnpoP6VXV4gtqPo7ayBzMEaAyYKYUr6YmMPBRbg8Y563",
  "key16": "5nQbYSxr6KsfQVfqPU2RfNK7zyE4CJuha7yz7AoJQbGviGnLNNLXyfntoEjsXpqTric5ux7W2moryTQV4vMk1Ukr",
  "key17": "2cTcdksRdZWyvzEY7PV1mcwsTEKeypdzj8hADHXrMdTYgKpzhBFLXc6wXK18wNJgpZ6sdWpvNxYCQtn2qCkctW5t",
  "key18": "2YB5pVXcQz3qS2psJUWbfs9VdPnkicMdyhZKF8nsE1ydrks1d2FE1yBd1cMTzzcVZfqWevnNMz9HjAD1D859hrYP",
  "key19": "24GwoiqAQaP5kTWDXzcLaHhAfFpfAw4CJvqp3Bn1D43U6ntG3qaEPRi8pLLZydiMSVqHGTrdDtnBDzB4ZF6oa4u3",
  "key20": "2HHexZk1jN6NR4fsMafp3HK2BxKmhutN832PYeqxCBWh3KgVozz9bR9e6PbPwWDJe3rdZmSrwqjGs8NBkiRmLyyy",
  "key21": "2RVx9jKvhe3ueY35kQjvqj3bJWMKJbSBMyRB2crCmE4cSmMNi5FNZXpUL9U1HpKpEpdxXFAC2CZrJxnhYJLE8XnA",
  "key22": "3JLAB8GLwVXzGZ7mZFahfVj9iFeZE3Lvi8ZdeYnHQLNQbcRfT3x2iJFGUgt9yL5D5aFoyLavz5tSdvWKnVgzkTLz",
  "key23": "3v49U6uZ9WX6YKbZRU9eisReBBwS1fr6xyYPYKJhTbGJVgSENweebzMZ7XYQn2apaF54GQ7G6i3VC2BtxVbdD25c",
  "key24": "31brQdh5c87GRN1twm5Rp6ttBBZqgA2FuW3hbfMKP2aaGmwqG6ApzYmYcW8rgRvpF6tZTTkewEiPjLFfLWgB5Fs9",
  "key25": "Y2TXpiXP34VCfuoWeDhKCCu4J3hWsf5EGiCh78J2nc67x7sjqXmnKWKvnmjDHKY8sBSY7MgaGYgfnaJhRu3yap5",
  "key26": "2JKU5czfS6e26WU1W77ydYoQWUc5kJbHY1aUEpSQ24fDhN6DjVmRAEYvFnw9XAvdkwdLAtxjyQbBRfPWk2HNjsFT",
  "key27": "5zZYauQcTXYRf63kqPjQdNgc3vP5ygoAt1eMk7dAd68Lyx8P88As9tsGruPrRb4J8WjiYneMsxZjvTXxBVV3AzWS",
  "key28": "37x6nywXvw6cv35p6swgRqCXasGjN8btr7HhuLh1BsRP6xyRKwA5KAjhnPpn9hiuMRh9KQzus9FBY6VqPDEhSpay",
  "key29": "HBrsQ4er5GyfEzhLNbcbC2RePzwfrWCVtnytxYmGAZFq64gZt1E2GLugupDiEr2H68fEFaWDhg9iCk6cPZTog6j",
  "key30": "4nYQD81sDXSNzQAUxRnKEadpg8jpdWnMqfZvHtKXQmFagzdcBdYQoJGYB3eUwVeUC33qdaKWGvsYQpCyYqvuCjP5",
  "key31": "4vuMWjtdx1LsS3zLGiidtik36mCNmetB8y7w7wngxin2AEYB4CwhCmNqnpyk3ihJa7mqGe5jyqMMuX5DgHWZcN93",
  "key32": "PogkRQiwcRkhDcr5mYMpRKG5WnqbqjS5MNKQ3svpEorjrwReD4iSor6uXjW8T7fiZV6MDKFM7SmXvgdsRSCyzmi",
  "key33": "5VSsAp5mjqurqzQL9RnA655PmFZuBaqfuzVAsf3ZyXY9oQF36XfmHk6jvUV18TFgwj4MfYjKg2ZGFUQxQ8iX9GCY",
  "key34": "5y4aempabDVHL79nZKopdYHRdVjVuYpBsLT5P7G2ofkWNFSKD2AiYwe8yoAH1RDaXaAwaH7fRa7BxESAk7JiaWSt",
  "key35": "56uwVAEdyGJzFzJqYRnYYaYm4FxbgdeHKzicA7YcedMbUE5kBMwgVLsx8UY5bBLNSS6fUfZfuuvw1ZZYBDRL8x7K",
  "key36": "4EL4TUeiFdaMVv3BpYMR8qioXqFUGnMS81tL5GtPFbwT8hWmVYJSj1Qd6H1tCb7PxVPoi6zB5BbaqZJcAyYSSikd"
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
