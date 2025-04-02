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
    "43g8QRCWE85Noi1ahncdcLgnif1gXUshLhzcT7jxvQS5ZYU6KU3S24Vfney8B1NJdYN9iVB53kENFkjApqLMQS4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMhWmPBdt51h7pden9mw1KmxNd4Zs2oxUMfMxmavUzdv3G3Gd8pn3Rdp3dMSYUMwaGZTE4PE7UTdFtuRminG4qm",
  "key1": "414azkELRvnhjPfA5XzY7zHJwXTmdaLHifmNqqW33fyYzfTABUPNNz9qD75SuCYWfbLtrTZb4LvrbZwbySzLu7Vr",
  "key2": "636hqir4mhHhgnuvxwny6EETCakf1BJZfhQ2drNRXMu9KHuEtQtZmXTMqiYQjTmJw7KRuM1noiQHXatUTv3VWd5L",
  "key3": "21dCyAZ1pPwdWgw25gnEU1is6KneEd1Hqxw7PMTwtv4335ebEVm9oMKMoPEcCgLuwp8CHfmPTKPdhhVf1seUPh6d",
  "key4": "2kQWW6mFjCAs84ibHfaVqLydcWcWogdhaJAveWcYJqBkWoD6YdeRb7PCww8JmCWTC9NYiKkwLBuofpGfVRnpsTAW",
  "key5": "2j3Ui2cQQ7gKWNjZK1J3ua5NosihMfcP8mJ4rFvCGRsM8NwVGvdkYFH2Mv8ZXPZaFuhykwvF8ouZZ8ay3VHmP672",
  "key6": "vEjx9jpmd4Kj4U33Wgmw9N2kMDrNKv9G37a4HoiZdCNEZJY5VS9MwjkqeKZ7qk9Es3j67R5YytL31op3C56RChb",
  "key7": "39PtwSuB1ARnyjDxWPmh1dANswMYKLo6J1mWdyTTfkeF9hteFFgfs9rKuWjwaXXv1Acbp4dEMx6bwsjAKjwtXJn6",
  "key8": "5vWRCQiPJcpRvVkEZH2LuQiA1Bvbocy7Z9RSWV9fgikHurdRrF13iZCdAt2NgZaenZP2gNX9zxVLtTjcbYGvXBqH",
  "key9": "4fniU9xeREW5naWyvoE347zpHRch7mpcrstNb1jsGrPgTqVVoa3ecNjk4xU83uTfrKkiKFjPtUuHGPEaSdNyHQaV",
  "key10": "2wfWYdQ8AQKbZz21LedmZvDX3Y1sNE8dqfgmmsaiSfJvojJKUEV1BNPGE8j1kn9SBJVuEooxjo7CnHXWEXXGKYPo",
  "key11": "3H1FTHU8B89T4gpgtqBkSEDjsH529bncNK5BtkohVtMEkv8ViqaEY23Myx4SDMmfFiNiR6TYcPofkiBqpnVdykCy",
  "key12": "2A4oWfSVBsD2eXaAqRMB3E4pEE48SYF371n6PrrUemWinx75YXVay1jhakmVbXgQSuA3W7LFjBnKzztD2A384MpD",
  "key13": "3HKLbqn6xeRKZGtytzBrDXSNg275bKYAQHnQwpM1GEXuggSjKPczfDxbjjnEQTaMngGke8NTk7vvcX5xTd3jPEZ7",
  "key14": "57pmC9PrdLHn2tmiMGkarbkB4ecxyvptxhg5v7N3mPFfHp8eF8wYw2uk3Z4VqSWiRHifVauDFWYEuFZo4wXCNPsg",
  "key15": "3v46UTJj8Wk35ufYx9XBkJ37fcdiSnS6ntmFiz7U5tgTtXYXmHEzRQUjDrpfU7aJiB8fegQvVc4zg3exDTkPfcBo",
  "key16": "58HScVrzuGrvzTVJyh7zTkcvjEMj3rtrdrgVFzp4ggwwLC63VdnTzzP8KAQVmJnmdZ9NCKar2GSzKYprqhoHjpCg",
  "key17": "533E7RDcqwXBBrwnhmeGuj5c78wzfuY31uQPGU3CEvYg3TZwvyc6DFt1LzbUWcoAx4zR17hGm6nJ4qustYMEaXF7",
  "key18": "62ukAFaHCqqSrcEwM8Bt9Z12xiiXhq3k6nPyP2ZCSPXp6rGwFF1RjtYMuLJmE24BFozdbvSxt4PTZetf1eMswhfc",
  "key19": "5qWf2zjyBbBdLH48zTGFao2dNdfJYqrbiRCZJaG98bN7CZpNsHjxxsYBGrjPh2j6ZooUqymbQsMkVNwu8V3MrqXW",
  "key20": "4pPE2siHiL9bpuc2thZ8X6mBE4aSUysaxYNQmY7wvg4qqCBQFG5vUtXUFGwgEgT91yyug6nGFMi5Aq6NoqddDbd9",
  "key21": "4UqnQmzUDaMDiqCXjttG8qLCy7ZcRsX3vMuoJpFn8FvWaqETWdHdPZ8Bb7goAVMotFUj8jbbwsEo5ojiYgbhEVef",
  "key22": "35j2oV114JkTDYtJZzSLFfWJJEv8pxhLN5imsK9P4AfSTTJzMPEpaHzEAJ4vwvCcBtET9fym29VoS1nej6saZ5SK",
  "key23": "4sjJXTYAdi5Wpx9U9dJFWmKoDG9NyTosAPKAMMHbHhiJ52PrhgDCwVksataAyk31Ruh5b7BBqWUYyAfva8uK8VcD",
  "key24": "5Wf6PtFYSYhkH9VU3r5wDNQvndDhqMuHpBMa1Ddm79vzqkkm1UhqnGj3n5tSTAfE6aGxJbTAy58WgnAfqkQdywN2",
  "key25": "4QuMba1quuQGpuKCd4sK7xk4HKAhuTTsgv6v4EgBZX7sVg1yX2WWufQfXLcAgMGVbc3uduoce8LoKYwT39WBhm23",
  "key26": "4hy62sQ3Ldgt5oZKFPikVvEhpWJCrTLw6C1oT4taR45kTwnCMZ6ZJ9bfE8s6ZoWafNzoU6rSPHjz8LpfWFUrsqPT",
  "key27": "5bUgsngjJsw2ET3ufwKYasNNe4mnvUjdZKVn1GVYUNycUhZ56rQap5qmt6befU9KtvAdjyPPCkUSKFnDvkBxqUBo",
  "key28": "27inomm3wFHo47N9pdYbCc5a7KZquKWdW6eg6EXDbsv4hpk6FdsNapDKZZfqoA1gRhz8Uc7NEkeZV8JhRYMM9EYe",
  "key29": "3Dby6hcU7wHkjPzgBEbPLJhyq7SDjEU8cupbPruRhavHZdj3PiVqEXw71Fkk1jmjA3BfReoLu2QuhfS3XLtdRNGm",
  "key30": "21eNUUmkspNvf1nipXPw2925bSz8v7S66Mu4spGj4fnXmpnqhWpm14ASTeT2YgonFkyufc2M1BupHo6aCuE8qX69",
  "key31": "3HVMh3Q8R3aG4WpGwVs3ERc8aFpj233ZhtC6bJSzUDzMG4p4z1Ej9MS31kqGewT8GAWfocczgGJtUNfts5EdTn6G",
  "key32": "3EzqjyyEnDZnnYVapYaNT2xr9PNXPFsaYQyrrj2Rga6Sbo8AZBszwvZ2b1i97DC8ynjcWFHmt9ouDMR8m5XSSj3Z",
  "key33": "2qV5PZN37tan83GX6BgwTWPqv6yGVexfvv81KVbJ2aHTyYkyuUv6NrqbyE7zWrK9jPtsq3qfCKN4rdbTRVmACE5V",
  "key34": "4sW8ZTRpYskL4uV1nxzWuHWbAtfoizcbe1hbRWbF3uqHGLHVEsy94xWCj1x5W5885Pc5Uou2nnPqr9g7Hf1yx8D3",
  "key35": "5M3Uc3fNQ85UcKBP3znEXcy5JhRjc4QSmdQJ7WNzRoUXvoyXrF7uejVyvwd7YGFdAMzkczZfYGp8vLSimMJiJBiQ",
  "key36": "5pdHfD9EGzgSWQY36zDETnYJd9wHA5vtomGa9qwcyAjthpwVyBUp69BPnf9Y29cQzazURRyTPEq9qCcXoz3sTdtQ"
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
