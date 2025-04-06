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
    "31EwjtNieQDiw1UKfwe839He6GPgkPjZUARiEPzwU7aYc8gmuhjrrpwrRy5qm2JqQLaVktbHQMsTXNdiaaDETzLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bUQabejkqaETVC6QbBPwSmLtSEcj781L2nGYFKSDhcRSgZyvN1jw9QXebtojT73uYWgEPVFLfonJiKrBHskAU6",
  "key1": "4noDbLRWrsrprch1fmjkXhaj5rXNyc9QYC3pm6MYwm2Kuk5W1ZEpoMB1kR2mo6dJ27BXrYgwxyVzYA21zsjGB2sq",
  "key2": "iypfYaqCzLqWtyFPUs4Urvah1sEKdMnKJj1tZVdYmGvDUgwZCEHMyP6R6CDpLMXAbzkcoLhVxFYh1snHZosCXnW",
  "key3": "3MWejz9GHgR1qHiwZJLw8CgM4rwNBVun4GrLKkLs9Psm2gNrnWZnTVPLQXX8iTdQyo4dFXJAPKkZtRksJ1dgAiwz",
  "key4": "WZuRJ9YLGzkwG6wWqj5w3Jz4mMmtRnkfXHfTGWCbhoroS7HudyrgG8CmFjWrWRcJVmnH2cZv7VgonUmKMZuy5vs",
  "key5": "2JkZCiLXx6ia7x2NMPecMx9WvMzpGeyce3kJpZj4VJQfCqytKMK7YY8aSrYiXG4YcznZG748gtSrdZtvnukZSmSu",
  "key6": "4Aut71JqX3QrDvCLfQvJ1WMU87c9sicQLbmwtZNBrNCmnyhZ5SYAJCBfSpvZWHUZpW7a8CUTaswiuuoBhADeFAhm",
  "key7": "4muZ54Zox6kWD83mwstaUU2zENCNqY37wr7qAXfqhoEm2dLG3ZUDLibLh3e3FrJLLDLCgQCPAqrRT2B2yXfCD7Sj",
  "key8": "KBMfbrRvEGujWhTYC6G8A2tAN4Eu1DEH1fcjffiaSVfbEDFWUqqdUAN8S7yqwvLxvKBkg9aDfHkUcu2uhxk9v95",
  "key9": "2gdAFscv2Ye2EcE74kN5673jhSEzwJ6jWBnsmTxHk7RFwmyWMLxhxGUauxMGvKKofsWH7gXxo2rsgwci5TVwYafs",
  "key10": "4WQdnavwcVTxBc5QzFY4dkNuDBdEQBEzAtJsQGGiBNPEUSS4SXEWf9Rve6tPPRcxTtrfty9Geg5whgbQZB4xKdpZ",
  "key11": "4GPAkaBpHerWwij66Mw5zsPSy7HHuBiVa1q5jVDqEdW4fUPt9r3xUVAtExWm9qTvThrTAWJ1mbWoMAYgkybUFhB4",
  "key12": "5YLaGvLzTPKdiNncgRo6GsyQqn325ZBg5eQY29pVHb9EFMdxAaqyonvsciWB5uwe8dA1qVVUsr9RAFDXDKZH6nLt",
  "key13": "598AyCmBuRNvaJwL3JX2P81pqMwC2HDrbT9TtqYvSpKHTPruwf8wgY6QqkSQySQbQsp5xXuqrJzqwPNLSMYH8zLE",
  "key14": "5amUJmY17eL6cHXLz3E38UxeVygwJ9rCwNmHyATEtCarDcbohWiTS3YuJLwmaeSnP19tUL617sf3taaW62duKn3M",
  "key15": "5NrMffCdxHS7YsLwCadSKPg8GE4NuBZWqwKZWrRfAVe5LegVLUj9u9BRsEjYA2bgpT4iz32UYCPeDPnd16q5NKTt",
  "key16": "4acRdk9UzCKWG4LusqDBtvz77mxNpmjRddZzcBwPg87bJtTZpUgZUmJTEwk4VYh26zXTwWBNwf2oNrRksNrMrnDd",
  "key17": "5hs5yyvUeveencMkdAnqQTnmNr1qYDTfgyHW1KGoMQA735j922zebLVZAyKTArDCLT3VeQAKYU3p682w13SvfXe7",
  "key18": "5HL32MwMgkugh9kZBuvX8a6wJsbbJ2rfxMgzGPwCRwnnWby5rYnCk5yidBQ8Xd9hVQVVdnhModSjBj3JZYqk2cZz",
  "key19": "5Kv7aCPsNwFmtRyZyURcL5P89wan2JKZghqA7ccLuwbTrbcjKKYRm5TyEMbXR94gEA8aFTk874wjp3RjfTG7tnN2",
  "key20": "219zJrfYrASsQ2xs3A8jwVKjcu9xDDDT6UEXgkvDy2TRzsexgemmSxjC6fScbFMg8GLcGu5zXnYJgk1JAFKS41P5",
  "key21": "5hXDj27hsJAyXScesa1bmuy7gyEv6DJnNMjcxtRqfYq5bocze4uWNjLt9Xoxi9PrroUVsMHM31CgmPz6KMWu6xBr",
  "key22": "21wY1mSN4jrmDduZwsgPmLhBZq9UfPzxNpGueEK6aeWMMPppRoQoEhRNdHnwsqxMqGattjMGEXTFnxJjXVpBw6Eh",
  "key23": "BFLTytdqA9wNbtAEVxAEkeCjBVq8KA6C2VsoqWunimNrwXQY9o3z3evbqGbyRuoUAinWbGMpjC5P8S68cptC37U",
  "key24": "52SvmYXXgS3wTdngPTxTThsCGCuhSuocoiAKXBcRhivVR73qkwCy4ptnT3Y6qyCRxiVAJWH8SAh9GRAnu79V8p8Z",
  "key25": "48cmYiVPiWgjEfyvxdtQhSvKM5hEf8Bb8Dyos8XbUqjxBzWJgSePr3qG6xspSY6oPcuUxHBMsrPqJyp9PEB8gqEJ",
  "key26": "4FTdZhxkk6kekD6oF7jYbeyf9eMDtxpGFG6B1WtRwVAujqRMX4jdxVHbH4C975Jhx7V577vEZXrdiMaxpjswmjPY",
  "key27": "61xD45wzNZBLfV8QQkMsVUGyFZxoNXd8b9pYQqwp3z2bZ29htYRzGx5aaNe8egsCd51zGrmetGmGHCX4zCRoF8e3",
  "key28": "24hq6u8dnNoTeYXGHSDCLLbXF6d3xWuCqzNieqYtyS5YpeGJcNXiR3pZJzvfPx2s27gy2kfeqdo7pnc7zb4DKHyN",
  "key29": "WYNCZKBekmGCAb12qVixrQceE7PekFeWG8dsZTYMJbrTQ6eZagHRdMF5oNyNUFnMBKSLtshgTs6xetBD9SjQmDe",
  "key30": "4k1n42fViu4XAAKyeZpBV8BsiTwcaHZyXEosdxmf2R93mJ6ynU3V8pcH9Q3wFAGnPSfqRXV4Gf61bpzu7JdiXyfv",
  "key31": "5Wi1XrrR8LzmnNPgqdzkJ3YUXiD6py9SLF48yE8ZQJfU65U7YWnRWT9s18YMKVhYsyBv6DRWxU4uwwLGoGY2pGZW",
  "key32": "3f3YbYDQgv4t7jX3BuVejZTsNvM7GTgjxMc3CqijRqePx8dtReFDnq2NpNj51DsWiFASpH5mAjrRATs72tSieRDJ",
  "key33": "5ZW1VcjVpWgbUgo47CzqbqUkixj8D1F3CXADLiD3zytbeBzwP1wsWX6UEUha5ukRAGjnm3VBp9AdYT3mwNkijjvu",
  "key34": "bcDq3qde6ch7ukaFkeXJxRduJorDLoJuoUYiyhJ5p4KRma7xovXKHb3Fox16noTn6x8jYrSbJjkRSLCCyyqkZ3v",
  "key35": "26HJvBrXbtFf2pyYfLVbSrxLSAJwCKWUVzXKEGVj2n8rvyEMaTLPoc23GNUUZQHN21oJga7iUQMVmMs8GfmqE15L",
  "key36": "39hyj9D6P4Sw9YJXd75jPi8VrK7jHe6qgoD6SS3iEG8SXqi5S68epfi5uns4fieAWyyTMvLLiT3HTKaik9DWi36G",
  "key37": "44Jn4bUHHbUybnKqAATJnNScDQisDcDfyRQV5s9E6uRvp2zJQx6nAHfo4iXpsHk8nRFbeMyXxctJG63nJpU6pZCk",
  "key38": "2vKm2NgiNtokoHGscqzrFU9PQmgTYX8YaFYBcdDYfs9Bw7vR2QoZzXtARwndz86sc381jvUZPATQBRGLLt4rrxy2",
  "key39": "ox8Q3UyZjscGBFUjfN6sj296vh75AQvdvaJYGGBixKTt5mc7QUmYchA6mrWpSRwhZWrgngPqXBNe5agotCoaEir",
  "key40": "3kRiXWhMjGeMeXT84TnbyLVTNfkRtrPE1Q5NGZVUZw2H16Acs5hPNE7k659PP3xjGdBFfXzV59fue5M6xAup5eVC",
  "key41": "2xWoz8178Lz1ALrjfRT8kPEKWiha5nv8s97Necef1bY97V1yNNTtTai9buZbnkyYgr1wxmPTGhF5j7pF4m5XG5vT",
  "key42": "4fgSGeoyihFoyLBtPhYZrPMajpRU299s7cF3zR2jpwJjegqDmMdkgRFDuJdcQYshPkuhzJ3gxGLyUGr9AuyTVhAJ"
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
