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
    "a46dnP8Pm5rJQF17kg3XRPLJScCUu2ZANSHWFamaWZNPcFz1qPnkyPfaZ2G26gdwGWRkiF5LGndESwD4gAfros2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAzhXEZnWYmmuZxW5wxm3DrkYgQjDuwhaeXxJ2hn4ugtaTJ8roWQ476U4zcnCHsM6XjobpntD8YMBartLTMMTGY",
  "key1": "5SeqnstS9YMqH62zzw7qDbZ23DfJ6DUeEDb4uPVPxwzj3TgoyGjpQmd7dcgyn2jDscdd1kytZWaRko5hXJWJcnWG",
  "key2": "9uv8nL9eEP8EU8X9MAMADrTWtqQYzJSQ5QkGEZS8JBMyVeerLrTnmjb3A2RcuciZYkwFCFg45rZchuFBYPSRJ1c",
  "key3": "514NAX943jdxdT5orX3JQ1sbDnUBKwe71Hp6uajjNpu7cW7fTXLvzcZi9YoBNFaytohczZhZ87WDpP5DRxV8Nrhe",
  "key4": "55HQZCJPVYkq1pvex2Yyxyf8TQxaBWYCVayh5MY3QbUgsUJUHmSu6RVeFMCWW4rbm8oQ7VDt58YUV1q2Gr75HK4o",
  "key5": "5sWnER1aNpY1LTavvBJj3cUMpUsactZgicfsT6CBV8HDzKmWxaABMFaaGumHNpd6rojzwpsoeY77Y7mnSHq754f1",
  "key6": "v6Lv54vQ7EqqNbmhQkB3iq5qWPBkUdSwYZMPNMkq2oGKKJo9WLNpygb8Q13EJxKpLhU9BTri4iSZpJM3txUUcRC",
  "key7": "4oEkXiJE9ZxtqiMTfyfF6mCFZu2hDghF8hNpxDXZ6vmZun6qjfow39vUz2pHWhiSBczKPv1hyzAebTJLerHxaeGL",
  "key8": "g8zefACdBz8ojPL6ea4P6hy9CaJd9Yys7UbQSs4cxVuD9kCFsySvEWZ39vdTy5x4HV5Myg4eqwWLR3iWtaC4iFT",
  "key9": "3U7s6187xbZgWticM3BwucBuEhq3kbL9K33U2ZSzafur3u3mc8EaE2c6x1XAy6LWrXDWc9RvQ1wdsksWUWMkAHCY",
  "key10": "5VkXi1FmaNw2KHfREtgNubM4FK7pTMcaLh3gnHZP26T3QT8vgbQxSecqqM8qNTMU1LvGvebx3XdiVVvZPDYfz5HQ",
  "key11": "bn5JGemDMxESA6syE6wHhrsfc8HCPgNfZQEUTgNfwTqJY89bTWUD3YZaDoW5uoJ2FbdndrZF9u7A6pUhq9UunES",
  "key12": "62GjDi8ghWwjFNFZYDABdPKtp5gpiwjkTS4atBcQ3ktX9Zq782xmgyA7br7x5PVyBMyxsW5PyrN8iVAwtymg5wVw",
  "key13": "5F4wEjHMR3xrn3mH9pa4YGoHKD8VKLVeLUWg33kzrkPxGNon2XeZfeKkpHAH8uvqrTz7diHxv14r4b4WnmDnwoaH",
  "key14": "425LtNSBgP9bybWZH41GNoEaNv71NeMrXZZJ7NCnqp5RVZsnDshGdhebNLLyqMfzac6Bi7Z7bjVWjqzooEnid1fT",
  "key15": "3c8orG9UnVo3CCbtZpBcyNXa6pigZXUz2qHYLQraWfCCEmNWiH7rsisLqsrpHVxxiqByjLxdscSQmxWgFSH2jYTo",
  "key16": "3W3VvGKJgYar2ske3HfPXWpmhFC4RDj4BQ8gnhFebhEcMwiAd11TJjgQKDuR8oXVZVGqHQBzGwjtHjkE9Ho37mVm",
  "key17": "5oxS2eTg6LF9tZugopEP4quvPEWv76anUj7wuedjdATu21KdA8gPejpLB5ZsJcqkCqZ84WuvQ2ux1tXDwAXoz3RQ",
  "key18": "4rAhbC3eaxR6tsBAVrLPC3oqigWKSHJNKowUKHvsBRMYhA2Y5ZSteNdgAZLX1MGb3EiWkLFgzkZxcmb4jbuVTZ3s",
  "key19": "24jzRddYGFcsCQ9gpcicymtnE1CVFhtrah7bM1cMRhTTsx8aHtUfWVUcbcMn34m6hs3Aen3pLdHZ4sBnSZJSKtXw",
  "key20": "59CDQ9AzCQPLhQ3wTVVrZJpThKp65h2W2BPpgHRbMTs2HckfcLfMbDcfDwX2hPtawUrYzBN26fEkaeNwYWupzcKS",
  "key21": "4MnR2r6dwz7em7h4KBFifLRPoEW2PLpA99TvPXagZQmgBPoAUxrruVrpFRRSJcLXcCPHTW18YctqV9U7RxJMb7d2",
  "key22": "2Ws8kRLeF8xBo3dRbVGLysAMvrzJVrPEcSqHrT2SUg5YVumASc6tqAeLxisspA55abKwFcZtph35mkNutojSqu3Z",
  "key23": "2L9NiTKhQPyRehr3t9P7izvWhFTWcpFAJvLkwvABPwUc8td7oQ4j5vq3Vr9LJFuRsmWx2q8UB3qBVtETzBr5mbGz",
  "key24": "2PEdnuhVtC7h1tdrHnRb46HPVVYV1XYL8K6pJkNxMdnmNY7Qaw2NFA82zQR44m4qPqQyYRC9zPsNmBkBEB56H9rq",
  "key25": "5HmDMQCYmGpoPSXwc5wfYQ8nsAwMsnFoa6Wm8cohDLPp9X3gJiqxtbzvDU1ig2SvoSEcx6CVdXiTUkffCMXqmbzJ",
  "key26": "3otz3fL7mvmoKY1GepyfUToqDQNV3LXLK8S1amsTkiDZVoosBFHeMRWEQgFWXNJ3kemvByi4en3g6ko59ga3dGrP",
  "key27": "4DjZLbYAzMaN8SBKqG9JCLbtbvLWFhn1skmpy4T7wbPQYPUqzg1kByEBadQSurg23utbProrpwGF1YutK76LEA22",
  "key28": "3RExxZuE3MDfGiCBs8L7RMxiAG8zztxq2kjEyTyx5odS7fvrVSefmotYApZvPptwhv8MLZDJdTnpMSui9KdnNj4X",
  "key29": "4hb3rUnRMYJd5NRtgB4Z98h5Xi1gnGV9sqtM77bDbWrtw64ZFHLWB6CWVLTkN1vH4ZxAg8gc66HL7Ku2JUgnQ3Tb",
  "key30": "JuDE1895WKJPzPUijKtjeWFwKuquhscUjjMHdgRnF8MQ8YnQHbDaGircL4PYExeqRyFJTprZWJ1ugFjLMwGoNAF"
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
