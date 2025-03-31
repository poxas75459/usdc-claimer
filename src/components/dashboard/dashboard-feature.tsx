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
    "5sEkP2BmMvh2bBeDHWZP19codSi3wZcihcqawd7LqhB8JL3CGFrWr1W5vbHdS6LuZqb8bpTSwiyU5qZiAWcVwPHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Sj1CAmqLju5NRCMZgJGTz2gimC42K6DtfsdQQTeeZHugL9ai78fftLT7Hejxnn7sUKP5wrFnsY4MUQqf3wtDiB",
  "key1": "W3MidKCq9voRDiXt1Ry4qiM5NRhjbfWVyDL3Acxu6qTATWUvD4mjcGWiz1KcKYQDVUKxB4zvs4zEWFkb1YGgMFi",
  "key2": "5Sk7gb9Axttc7gAQjqutvBthyjzQ5tjnPRHX9p4cRvmDGczkfoN8dmiDWbpP2ZghFvHQz5LXxJe5bvKeAjHUhfSG",
  "key3": "28emC6h1dtKyBRu4FrGscVYPup8NpLdfNRcZYQ7cSoLNaD87k8xjTUqGzokpAG1as61WwLKZAy48nBE85eNazbLp",
  "key4": "21FGMyWu3EpMX3PJSb4pd8U857GJLRTrbDHd6Ecza6Kro2cAUVfACXQEzrDoKz3yWtiQYqQ25Vsux6UxdMo1svM3",
  "key5": "CmV6MG6PgLLntJhdqn1LtC69QUkU9NDZXQKpeosPCGHASfnZZ2q3XKHqH21xpoDVucAv7yN8jC2HsrSw3BXUWUL",
  "key6": "3RHrK4E8ojnW5r1ZydpFHrdBjZ2egx3cdm9Q4g7FX4oedtnpGpm7grJYmhLRTtuAdpAhsf1A1wnVM7Te3YcM9Qmg",
  "key7": "4amiGJcvgfDEtLfepiDSvmoWf93MtwJdKid8iKPwcN42JQZSXuN7hxDTLZEmeWnPFDRzbg645Bzmie3PxFiFeE1j",
  "key8": "WoMeQHNUjCnjM6vShzRjZqKmxKt4oh5fEEPnP3WbEyfPcQqcJ78h1ibaQRKfX2mbEESULHzGsEcjJBviTbTTeFn",
  "key9": "A1oayHauUaCrkUnHY4hJ3B7upiswXQfW1qHdS6qKqe28k3ju36hjmTXaCL1VfWWcaEVBn5xaH9uxXPxYzybfEL4",
  "key10": "4ziWZ3LX3kMYLnqQr8jtNKqwq62NFjGvkD52LFcD4wSsgDNKquns6czkTYYPCGJAEZKi8cWjFTzFXFxMLD4D9GN3",
  "key11": "312D55N88L3xdMSHm5Afb6MZKWWc7znSrjqmVUhEefkScg3qk9JDSBJnuRmc5m4Sv9q5oZv1q22wo9SL9ia4euoe",
  "key12": "5roAtgnHyzHZM6871prKRjP9oAwdoPwYdgGizKV4u5caddAnQ6WUmTov5s6dyrJ9uLnLYPiRLp5PMNWKDvGVU61m",
  "key13": "3jm1yq4Q8iBgwhNt7Tg81eYf7cvvjCB8dEBy84wTUT5ryuBsFFkmFQpVJ1o4QMoJCQ5S1TkaKHLwpktKNjhKejnr",
  "key14": "5abt58UBfYiFGCQB543eKRStm9GiUiiKtHeo3vSMk48fuVNC6Pe8mLDWNcM9HumKU9JGGzAW6u1FDApirv76VLUr",
  "key15": "5jt58Jar7KC2C9tGHoWrdJV6PXfyDFzooA7DLJUyPcGCgN25VrLKkjyfc628Moxrm21CFcfjQ8ZK9GQaF2ZjgqsB",
  "key16": "5PjfVnc4UT4sSEXuvFigBgyzYuAUX7kn7dPXj6wsPsbzfvU3QL3qnQuMoGBDAJByoFYjUKnbW2c33LW3NKc6Um3t",
  "key17": "2kTujGfVXyn9HWvpvN4Rx8V6kmb2SxVqQwGqiArFQbrama9n1G2CUJrfHWSmBvDDkCjJU3L9tckQWuZHQwniK8an",
  "key18": "2juKquWuaPmrmLAu446cvsmM9BCMButBk2NSqwCKyrwBJSZuh78wYXM3QWYDFRoc4hiQNy4bwgEbbyjeDuAsRz75",
  "key19": "5YT5GcJvTUy9LRQmjJ7jcxjKZf5oTn3r51PKLyzLN55urDDL78MPRk4zubTTT9oCG8fvZbLvKUpqjKhjjhw8bYbG",
  "key20": "2wf71j7MjhUDh5rmKSEKRiLSbGfzFRurpjKvNZcEQvTEPrj27b1hEdB1vRUR9dxHfF3JRB17HyhviPQZrZrZvgWw",
  "key21": "5rf6rdXHr9Ft7essxaVtndNmcgXWcTWoQ8B8HmEXqQjiwzchVpsyde7qsLsyxwGwfNdL3EaE5Z4tMQgtumPB2R4c",
  "key22": "2Bzm8T2uQWjBCLzpwtsENL4JJTQNvzaQdyFUdyAP44oF9Z2SRtfhRf77anQQNixttbzDXbQUGGbyH1X9kNKQuof",
  "key23": "328HZLWVNrrjWCYQxSFShMp2Kv1mfTrKhddeXC38wR2qv1365sfFJitekTrHqrn61keWypBq5MHXPDGgnn4XPXgq",
  "key24": "52bz6gxCawfjR8FJsCJ8J5FGiZHbGxuoTf4ajAtCRk94sBV2pWQgprQ5Fwd6nskzhHR5hxWXEJLSqG3nsL2EArkY",
  "key25": "2td5F5yaoCNfFezWDNzYEYNVfRepWTZbDnbsqSfwwtD3dw5f9PSJHvHXNsyJhotb84xrALhNdGGmhKFYk7jWDcrJ",
  "key26": "VhGZ6rnPzcNoDmzS2KitBhBJvPM6swWatamRS3qBYpiiqyycgecmk4SU5dDNTd6aREiLEAwMNfDt8aXJZjHSMbU",
  "key27": "38fadydhgjZ9dK4QWgyTjCUyv6skBAujLa3MoVeed1betCzYvEWDMo2QRfjWASUK9PB917KqxomYSptbrS16GFcK",
  "key28": "kUx3PWLt5Q9RNUUbjPyZy8kZxREAxHWr4nBt7e9VgpZDUUXnD7QodqnAZxtpHksdzDwPkYDhkhvjgJ2nFt519up",
  "key29": "VpbPW6zoyUDuLP5yJ4vbvwF58gQPvHgpCu3nCrDYMakGVksgJQ2tNeRpg1ZYU9vCJ1jcaEX58j1qhZqCskSAHec",
  "key30": "44WsDdLSC8SbhaRb6LR8wHU9gqtWch2U83jwwqdNPAhSB6eTuhAdXypqYiwmivQthwqUe8E2crXYdvMuFi4zVeso",
  "key31": "53T2jfJ2BfEs8M89hZNDBjstvJevXPwMYJFovaUrFWVi1pFMaEqBrTnqVevzX9acLYpxALTE4RaGUMrTDWFkhVAs",
  "key32": "2AsuCqSmuUWbKWfi4yhKbHdEfFaJdFrh2r6hMaCobbKbhUf3itWNDhsPnVyjvrB1JWnR6kFVsUWLzG8Nh3EZy9jm"
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
