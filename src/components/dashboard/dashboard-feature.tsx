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
    "4jfueCDHLodYARfhaMENRdd19nEa7QKkjtKVrjfdodFFjgvVy59Q9bAa3P7YrekA2WuGY8H8AJQhzZW3wqEYWa5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rs5LX3FszvojZqVzE6zXTn4jUd4eTXGjroJUTuuaiGQTCR77qf7iKd7LnY5pdYNTpVxgt54Czmnh54ECFoQVqa4",
  "key1": "4ka8PCUqdMoDao5m595RmxDmcX4SoqAXfGgkvGb5Bzhm6PHfZPWNgHmp6ZoLH9EwmDabYxBmgby6VLPiYJ9PiE3V",
  "key2": "5Kv3cfeotuxLzGfK4pdCHj82LFDMMAY3mYkjG4CKnXykhqRGZ2irsvHqg9YTtrJt6ZVUxh26KU4L2c5dd8jQbFVw",
  "key3": "MiGUgBocRyZUkNaAKuqGgefkvzyPJbe9xBj1pkeTqgHvZCtzUzqKNox2eJP6dng71rWcFsjvzvtNwCd3LzMy3Xg",
  "key4": "3ETncuefcjd3Hg97dDhM9bz1mS7BgjDZ9H9tWjZFxdLkVha6nR4e8BaoU9S7SxcNDEuY2NBZh8rCL2TpeG7agJ3H",
  "key5": "3wSGd1LZ2QUsCUkXQaxmhtYFvuS3CPRSAj5RyfiipwKhGvvabZopKWEiTSviqVBFiLaUWJrxd2TJTTHRb4V8nDHB",
  "key6": "2mdc8k3tz44fway7QhVEpN3XYfo3pZKZ7Y4o15nfZSPJ8VgqvvDM2h8cmDetJuqnhhnGmLLxqbfcHxjsXvfhgWy4",
  "key7": "3fHPDS6MpiN8DqR8wMpCNxzdLcKKeumVCepdT12Vp9u9i8z8Gs31n4RHfTHBB5LhkrLr3fRPrxU4U35UPhWoX2s2",
  "key8": "zQ7wF6RAg1UCHK8rFNAjJeRxNNP5QeeoTp9ZXsbxdqQ2LDH7d72XvNPkuoToKjwBmKtfQgiGhLZUfi4Vgdi1qUb",
  "key9": "rhVFRd5mpm5HpRT8fSXC6wTgtFzkW7gAqvoqgtjBAz3VvYNSSkZftaFJBssTySouD7Fno9edXr9fqDNPCvheAs9",
  "key10": "4vAaSUYToGpP2T7dtUFsAcwaxZv3J7ZtGjpjSbLLVCf9U2VureWUL3vzKhJkHezZbQzjCB1JyCnKpErVSrEo6mFG",
  "key11": "42AVvwB3AzGr9qnRRmp8BW25fTPAP9Qd8iUrqTotDpMQ54zAaYViCUhaW8L27XJWECyr4y7LT3H7QRVconMveLP9",
  "key12": "2Chd4DSz42AMscknUHtQ5v3kQU5nyaf53ENLn5DE86A2WVFsoS1GcTmAk5KQvTeqRXHFmDytjhLn9UqK8J16cxr9",
  "key13": "3LLUcfCxvj3afRPUQg5Va5AMRV5r9JuvVDhUtDVEA9LNbDULfef8Uf549H1EHP4zZTTNZ4TwBJDDi3Uf9dkVHie2",
  "key14": "3FEZFT9TZDZ4wh9bm2uiKQG7C8e7C97puq2x8qEyHFRbKBohWUsAo3N6BZTB4CD9kbUaA8sBsNbXue2mR985CWcC",
  "key15": "1eJUhEDdL112DFcCNYqwnhQi2yzkuoTWLzbAkTe74Ahv9rbymkyesyvbtuyzFSTtVza2XsAz9dQycj5QiEZ1ft1",
  "key16": "3YfZmwcYyMMadqxxwV1Q63PPE8hrK2sENyt33h6BR2hgEnVLmJM2Q2sN5eG9HXNEHKVCTHckvAzD7sCSfpQmTDr",
  "key17": "3u1GC38oaWbpnTJJAb6GMV4iwAhoye1zMUNJLaBWkXu5TpY9c3k2ko6Sph3pBSPQAVGYtVgnmYVJzVnAfDdEK4Ki",
  "key18": "3drSX7KcKEGsC61Gtgbm1GBjG7s4hepj1f6J1Te1Dt5Hpsos4Q7qn3oxnQo4iUgCkrofZ8AL8qnZvsppt2Jnk54R",
  "key19": "5SYPfceH6tMngqwYMtnNF9eypzaTkV2FMst6yAtbk7WUKqSrHK7P82sXdham2L6849jXwa5PJdJaB1oH7Rb31jZv",
  "key20": "4xYpqBS4uCZWtA8oEDCKiymhNwLET83uTac5M9x6v8DVA3izsXo6wAMjYZWwXuFd77yQHs4efK5BhqwCWqkE48ge",
  "key21": "28ByBCqczKJ6vck1vqUPXZ5cwhH84j8WFrPgoJyefuhUmjU6tfVD3BCodaKoqZrjiuz2ppw2f6eT3Ux2AWVqzBT1",
  "key22": "61avKHbEmXRZKMGZ5yu5SmSbSn4fB623KAF7YMmYuecGTJ4FovAMK3fVVGYnWMXBRLETis1QV5S2nboaKTAyvdEM",
  "key23": "5uwQiHbNS4cvG25rCbJH3YeYGLaymkGQWqSUjhympuyjL496kJJS6kPehWuK25QJeLL8x6YKdWM95VB8NJoQEnCJ",
  "key24": "5hD3M3dTupRJ4KoDgkTCQF9xyJzhALuopob6jwBn2aUEDhGVgDxRgwDLkzN9BXs12hWHKfZZx7eWSVncyjpUdsgM",
  "key25": "sd5mJWcsLVz8C65jcsGqTmg4kXazyqczA9GQWB5NHAa23cuAAPt2W7v8RvAMqbMApFj4DTPoxEjcGLeUS395ZjD",
  "key26": "3JPdh3X9rqJgXhs9XLugeCoUi7wcFfeCjE2pMBkTVA7hfJKfbUw4XEwzr8W6xpjc31gCU2zjQbhTrV2fmKRdbz72",
  "key27": "3VeH9RyMqZjaeG4FH59128ZF3zhudturoUZwSyg4VYA8Df9B1PTDSextUkYbqYwmWChWfTQKiDjvPFXWN9Hd4m7G",
  "key28": "5eupBti57rV4iykbG3QGVLcTPowgsgQGudUV4ot6pVVUFaiiyJ9HTK3zBYGbY69Yp4JMSse5wHYR95TTSVczjyVy",
  "key29": "2yutYw8oMX6aYLs5tpLzprRYGnfbBsgaYFHwryJH33YyUsCXGV8Q374cgMfNCftwPdEPNtsX2Sm4GRBZ1pwaUD1U",
  "key30": "bJg5LSFA17ABQjgHLFqzhY1h1MwagHVXrmdhbYUx2ZjD9HHZWSJY7tvV3sicCRGtV7QuJVhx6B9e4fUzfdgMwUN",
  "key31": "2EYDbrt8cb2ufsuFXbWPd4qMWuuMdSRmesbkMqpLYaAYU2bzMTmAQfQDuufuwUJmDYV9rFEvbaDRxzgSJQVijQwd",
  "key32": "2miXqHd5W6CYPfTWJbwQaFs8qtHjD6bRFQNsnjJ5NBjCQH32oUcaHNahktRyxYHQWGdtALST9bUPAnEKhmmXoeAW",
  "key33": "5y3RPDA7Aeaau3XVY17EfhofsDdSPnGPGP854EtVS5bdhGEP8B1qCKnWSTBNcJvrAx4MiYaCdnhyNUMDGVNh99RD",
  "key34": "2UAEHyo82DU8CMHcGZK1UWw2SD8egXrJbRKom2rAWeYzNxAS1anQjEioPeyTGmckZQ1Fisu4xUtUdLuC6ewTYAoR",
  "key35": "2FxqzC8je268Vm8aNY269viMa5ryojc8BCjZEyfZ8T7wK2s9pmga6pwAiFRunshW1cEskLnUfbYFmBEyn5KTUDmg",
  "key36": "6rQw2WaknwufNbpmfRoxTgJ3zSUFqGMSzuwgWyDu9pPSb7TGbfBZf5sw2CnbAmDe5GkRkFv4L1TzUbPh2rZsGar"
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
