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
    "aYsmB1Xa4mdqV1rFyVS1wm5fKc94tjHmEMRshz7pKKMUmQbkrznEr7scEhJhY1UdEyyr4ocYsUkwxeshJjjYofs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mwiGKMyhTkNnuhvqszt9HjVYf8FRNQFXr1Tc2RaNPmfubRgy8BJ74KcnYiS7Q4tovgK6W74aCWrpoasLZMLUh5",
  "key1": "32YVCqS6u98X5rnadqCoxws7o59A7FMXqf9k17zhjAkmTYQvfCQ5ALDHMPWGm7jXAbWQ28M5KryvpgixLVovjyf2",
  "key2": "REKv2GjbkJP3SFKZf6PoagUuZN8STwgaH6U6x668BtBMxceusGcJqwskg9nQbEW4fZz1VoesZKERH7rnWY4F6Xx",
  "key3": "afsosvoAKFUM2Dsmk7FupCipL5NiYkgKbGyuxwuACQR5SfLxZ1AjyTEMKvRiWXzeofsbeQ5twCsspiD7q6hGJyz",
  "key4": "317sMW3Fox7kGADQoJHMkyv5J7UmpugjbtM75deW2cf2hjDmSSgXhGjGmtzhG77MHRs83kZctUxSwaqMidZr3oXd",
  "key5": "wkhBSoHPArmCs6BCGSW4v4Rf5yGM9NhdUyC3qRqgERRt9JaeYG7jSsM5KxKdpdF6BZz89xWwU9v4AfsXUUnzcVQ",
  "key6": "5zDp66oPL9QdRidvwsmBcS9GEPsByJndKX514gXMs4H5ufDF8x5zM5Y2kKpbSb5ECLvrKpssb7qzq8478ZjHu9Bm",
  "key7": "X8gbzV5EvcmDBPEupN8G75T692Kx3zcKUKBwfDBVUD2FD9vyxitCByNswjUaWmzLCY1vUTJ7icugc4LwixjuoUC",
  "key8": "5fDEeAzpnqMEcKbsD9iUJBmZvj3n2fkWg2YCqsMJWHPytiHbS2HYdiv1pcqPvkz22zfXtb5Gz8m8VnbHiLE72Cod",
  "key9": "3WFM63LDBD8rLsXJxKVRsGDrLySHqrGGaznnPAw9UhaPGh6rJBpMANPdbgMyxDdR8ptUNSbaBaiTjueGYpazuqdG",
  "key10": "3ma8w8kU1iQ3Yk9CL2FRXL9M46GsCNnno5i4Ytu7qwo4WDMNyDrwayz6V5gXy7Va8PybEeeWtS2hVyNW5kHZCbCq",
  "key11": "5TVwCZB5Jfhxim8JqAjMXkZ8RSppMrsPrJf93w3b3h1cEuQMomcXPp3QwYZxVvdDFLDJaYVN4VqWzNpkaBgMvmUP",
  "key12": "4ohQ6FvgJZQLxAJW11G7jzxuwLoW7nHG5jmSiuv8uMnvSD4z58Pe4T9TKM5ALVpoQjoxzH1N1kKBJni3RtVGVmKJ",
  "key13": "i4gX6RKvL7AtqXWHte3LdTqxwNXqU3Cifm9QWEq8dLLjEWGxnUSJoe5RFsdnGShZaBGM9LXRGGujzBZWPPYX8ih",
  "key14": "eYF9FpGNAuqqerFi9nJYiQrZwdXHAhjJXZmJ8PAUg71sPhVfsEiyZvHADNr4bxbZMHs1iAgyz8uPwRJMfKmWsNW",
  "key15": "4shFRjzppsRMyHJYJUzUYRL4tTtm41huux5hejY9MvvZXE9kzcNVgPhv7DKd9pmFpmcSb3tApcZ1QnxYoNQpcGKc",
  "key16": "5VnRGh9czzQfTsJzG1xdMcpR8AVx1VMKyMHoDBtzn3shcKgXu1X7u9PszePKKVLS66pJh7pPboNBJxVh22R39gxs",
  "key17": "5c7VhHHbtfFN49T66mk9t5hydAnYzLANbPCtLNFpMCwP8LSjSGD3mH8iytPYxWRcD1GiAZv76Hmx4qHatySevMyJ",
  "key18": "bhYML7F2iRGEomfSVFgZLhs2AWbBDdmAfNKrdbByXATHAtygKvKyBEeSe5UQ5v3jUaXsXCs73bmar3XKLR8PKBt",
  "key19": "oXHKy4KoSTjYX7mZtDA7uQoX7PbE9KvtyQKWRnrnZ1FeFNTJ4TdgsJT33dR3f6jB6QPQfxvWqjoyRwdP7Uxz6TT",
  "key20": "5mLe73NEUSneyVf1YFAD1QaU192D5nEedxAYkVpXK72Y6J1b7CGvuTzPLdjJnfPAwLiEAduL19GV8xWRArDo1eC7",
  "key21": "AUCrhNCcw6kApt3ZnEMCByPqW4ZF9ZgVQY83jDEWe7YtgSc4Q9exLttb9vbJPi3EzSCBzLEaCUVKurUfFnCbqrn",
  "key22": "48CzomEVoPD3wSLDXSvFfqYGVw7VXVRf3wkJDcYyR36uADiM6AEqQCrghhKNxVJQsYPakjqbevpWy5sYbsTPL4Tv",
  "key23": "49cgNDs5mbzcVkrcpXcTozaURDEeCg9V7AwLKD5RJ5fFfkqQ3m2xeKZvk9sLdMwqomiHhPz791GNT3kMzJbMqe7L",
  "key24": "PU6bJV7AYVrCPaDg2sy8GihDpAr5cz3SRc6AttZAzP3wXA6GV1i7RbzeGWk7MoemyKcd9dx23efp2gM7Pj5N1YF",
  "key25": "29oxGspyqx28Yfy8kjTRXTb6WSQ8hSyL5cSCxhrH7cns6UWnjqBoFGvVKNQKm4ZJ5WN8VpLj5m1BgzMksHUURqrK",
  "key26": "j2UtfShsYrsAyuW9sXdZHnmWEg1129aK7wwzsWhBUmZZAFz5isDqPP9bU2bx3y2md8W1mimLgq2ZDqCx4ZHxqZ8",
  "key27": "3oYge59cLzkgqLF9dz5gkdsAvSUvjzYhGGf3nrzHcdxQgHCZChMPvdwxbwLu4DDKh6AZL2fyHd7jmpB7YhA8Ehms",
  "key28": "4jNZVDNvabPTHSvngXtTRLpb69tp5ZRgS9kkRwpCZkRVKnKvTjPk8ijYPWeoQwoWeU34cW4A2RH31GsWJqZYQBsw"
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
