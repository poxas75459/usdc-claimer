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
    "5JRzV4fGZL7KZ7LuU9JsUiD6QsckYgHryp8EKT6v3wX7wRZWaiFvaXSi4FVsCRJGFeUvHYx8CJPWBc4BPqvbhgmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uk8XT4VoEdR2Vopf7BvFr7tyhV7PhMNDyzmscLkhDtYkSowHsYbzgQ2EyzCfXYDpoi4YXhUQ2yGbNAograG61TP",
  "key1": "3gVFQvvfJtcRJGTyTMGgrn6YhvPry2BE54wZnovFaXaQSPwLybUaXB86xF6VchakzmGBBDmjK67jZjWy37FKmuFP",
  "key2": "3ZJRvmR2h4mXNYYepg8a5BNwsyqUQgAVEZAZa21Ma1dgabnDotS9wgK2NJXUaLkciEMiLrF6SnCEx8CDpL6kV6RT",
  "key3": "2gawkEhVtgXWAcc5biSwpCLgsioidWjA8sNRndNSAWRUZtARTHKonqN1xqG1oWVVDR7ch7Quqk4PBegetqbb33Ai",
  "key4": "4jKjkC1GRV8jur6yLP8SiT9oZ1QLst3GtEnQz5gw7MS1N74JrJVCGc2yVG135gkMXw4ggDPy7KnJTxo6Q6c7vNVV",
  "key5": "56knuSLGk6EmqbkWCHcoBZbYfeZrjzhzr3CWLdRWdPQeSgeLcGAVdexJWVMwQrkaRSnvYmuaniUCZ6P9SqvuAyWL",
  "key6": "ZrM74ZebPKTtsYNTypAcJ1ywtBGmzCvAUr5NvQLaytihuPMwMZiQE92amjrhp3G5jjPKSSeur386ZcngGpXpCNT",
  "key7": "2ApRbn4HV3nriXhB9nVxfXTwQS2Mp3CPGRneenWLGY3jgMjg7rMioM9xqdzUEquTZisw72VTJcVZbAt8zViE7B7z",
  "key8": "3gQZzcECcTbMCS27bV8TfaCmqmjumDVfBeGrqRhTrphjAr2sf44xruXJfPzcsnJQxGUH7y3Kq7oFRfBukxAk5qba",
  "key9": "5CdFpzn2nRQs1ynAk19QUgoSrZLo4JDhXbYPt1JjKq61Nw2WfjP94wgR45bVJJzC3EVfxMqtc9yhNQojZZ1UEkd8",
  "key10": "4rRou4VZvKpY8RuCTsRNtKPksNT8SEKhhdwABD7bcAz9zfP3vHEV8e9KHfCph57MQ9CcmJwjDcQd7LhR6azAiB2h",
  "key11": "3u22gctZb5iwVpPH5nNsH6UmHBE5T8CpEEb9DQfmmQRciRpuxoXsgMSENkuNJZh1PGpsLg6pSc5RPHDcdHf1cxci",
  "key12": "3ySCgrQoWbiUqdwNsFeTLU8fJmYKCBMMWVSFsQcDyCA13F3otvCStP4YDY2t7guvyn4PoDd7e46P2h2zq33AUbLY",
  "key13": "5jJ6dni591c2xShFa8oYZwBregvWjMDDAucRiCM4md6H47ER1dZNx2qyNjyebB6o3hQuBrJhwQZeu8SLZ6CBxzNn",
  "key14": "Sfmq24MFvLUtFU3kC6zD3dUxC2PtHChGVhesxzCqM6Cts5B9qPb4W8ktoWWYvGgM6Gxgysx3UcwtgxGEeWxkh8M",
  "key15": "5CcmixyoFf3jrFgNYq7McfxCg7BuFiqwmExUZRNa5L6Feq69HGeBCgXq2kjs4eSPUgM4VHzZT3JF7QA3YfeZerHV",
  "key16": "2AuTzyjQd8uXLnJZjtgU1rjC8xqrUMu2mi3ENB2nSVxoXv3rkcRztzMkb42929nzPo4pdhUgWJZamk8DUWS3KyLz",
  "key17": "55xoVb3XDcWnEESc3Hy2At1KkmK8jZSWQ1qm3bHfWTWSN3X2Cu6apxtxEMK87skXRtve2hFGw5gh2R792Hmv9DCc",
  "key18": "Ca9jVjsjKRst6FsCwuxRazqRRXov1ww1boHAfaX86gqefUsUzdxTg8XPpM32rQwzXL4XYvAdJU9dQGNLA45ToPH",
  "key19": "32aoDwtcYcvkfUHQcJrxRYcdcNN2MAr9vpS584agFxWvV2CxZU6BYgxFjYxT7SKi4aSikgdcqz3hxjsUfvMn5h1",
  "key20": "4h6eKNEREEY5hMvyD6NWvSkeaidpYQkewGtgdxqYpfkmLrtcHhDJvQQ92BdLoFbzgeJwd8C2Mi4GVgc72UbJfoNj",
  "key21": "3bSUuXh1KBXBAhKN3fCkwLwMSTZCjFgG4BiVof1eoiB5hQ8YxaLQguvvpCJgh6AToEDeSG6nqbLXwMmcbRN6UDKU",
  "key22": "3sSRqDbMiais86yvnUx3ajUiRtp96LnkFqy3bA8Df7jSrage7z7SWGZGxG3nJBKeR6pGKkH4pqTeJp5cRmC7kbs2",
  "key23": "N3BTbmGtM4bDVgtZBNyNqxoMeupH6KuKDXrRRbV87VD8LdWHEXCyqRjYd2MVcna5wyuHW9EJTC2fQB52MRR5iNJ",
  "key24": "Eb3Xpns692MzNBiXwUaH3tp835SpWARevHPvV2Yy5xfwJDeAEHoBgrJC6z98fkmB7EALRg9wDtrpgeu7We52ocT",
  "key25": "32aLv11JzSjwKft7ZGX2VeRk5485gwZ59MHLzi1f1hg3Rz2BP6AVGnbxi6ky1in68DPqz1Tgvkg74YbWtvD9YaSt",
  "key26": "3cwn6UMLh4ewtmEDjnH3aXUvheUCAxoG7pjoJJtjGx7zDnxveoGCoVge7Nc1Jypj1jLnk4kTEGDrT8AG3Yq4jBUY",
  "key27": "5jSzngATA9iqqhtVqEhq5j4ArR6TXzjQaqvHgRcY7CCAcwpCu6jhLTuVQxQqE1ZNuuE1kADoMSNCcKZz1Kuvhaxf",
  "key28": "2Zujs8dD6MxDVAsySGZs15V1ov9B9TWDSwHKSLphmkcaTqFYFWDUL9WEzmgXG6Me421Bnw47YztjA6VM1YZosdEe",
  "key29": "5CdsAUX1JqhKKdNXtUcVQ4UWu6nsJNRwzMaEg454wZqKfX8q6qLP5BpmTudZF9FGqziGPLrmJNXkYnLqytVpZ3o7",
  "key30": "3yy9F3SxM6d3spwMV2YAsWBghubZbhxkh2y6JgJE28eK7KfnCeRUFQPavJSTYvAzV9SxcfVQsaMJnWkD4MFYdJXb",
  "key31": "4ADqJq4Ci4dR3Sizfo3BsnsVypy3eVtrdT9qVNR1Xqbh7Qmj2LUaVE2qxHnhjgedrZaijEp8DDzpiW5HKDKrvPmh",
  "key32": "3Egw9fNvBbcdaKPjRvZe7yDa6rrbdfnJQ3pnTGVej68bsfp8mv8hGEM8kVtusPAp8f5vqhYAXZB5UDM4FQ5ccBa4"
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
