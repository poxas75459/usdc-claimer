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
    "5WP8dsxthYXQF4RPpWsRMHrp5XK1cdX8RiNL2kgqu5Lj3tjjcsPAZnK1j3xBFsQoSwmReHmdqhwpobMF5DWQLYHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Kg2NxQVkBYNtoBXXVnp16PCQXbmod4yvP8ALQq8xC1yi8Tx4UGyKNqMmnxifQPDoD2mwNjAhDGA7QuMSdB6XoM",
  "key1": "42vKFUmYrMtHkMSGgTeMfXA5HoUjUWNHYaWbtryG755wFUXgrjUMasD9ucXZ3PV4yMgkR3spV7EEwsJWuH1fskgB",
  "key2": "2NuFThX3S3rq8fSiALS7FBwVeCh7R2P2yAZNrC2e9YZF9odeLBd8rDgh8sUctTRB3ucATySbv7HCP3KBtwmcw5Vz",
  "key3": "5eTjEXrvMCWrPBfRd1wWbXV6N8uy2mk5hy22x1hoLYENSgCvUfSYouyRUrLF4jftkKeRyNPPtk2qWU5u3eAiH5dS",
  "key4": "37j73BDYHfeQ3sx6AFqtBqMRzyRZoJynZPUUDq418pz9rXEwdhW13Bseeu1BQunaCWi9DqwSazRPo3ifCekmEnfW",
  "key5": "YznJvtfCo1fjzpFMEUpButavDNkJWj3TFZtsmie1iqLRsW8SnvyRSnXDcG9124EnCc83jcQWDmqHebz1u5PUmr8",
  "key6": "3Gzu4wKkzcZcu6QsM8mhSDzMiK2yP9ZXgPbry9PSxZ225kJJhgnRb45oxwx31RX4M4RopsBiHq95R7AsSVWPwWah",
  "key7": "66dLddLXsLawBReFyG8prjDUqyj1xmWPGzGY7Z8SeYfCs73sKHJH6EuPErS3SH6yA7SmETpDWuGjb38aLdVUVyUj",
  "key8": "3xUQkEqKs5fsyFiLoWkNDy8jMgR1M9GZ3iXe6ME6GD934rsrkuRogPZ94Uzg9qrQrftnSrgwxBdmF4KPH49FMQFb",
  "key9": "4r6T5NdzTigBeJN4Jonvdrb7M23StVbPzmyded8pypQa4DR4ZJdA6a6dVzjomn7tzkKyJnoimRxaLu6iWbQSKb1q",
  "key10": "5QFa8juwBPZ1piQYauwGnCBKumeEW43pBz3sZJGqzKXRVWX2opVRL4hjQcCgqHtDRd7ks6mUrsrmLPGXmFBZFgh",
  "key11": "2vuDgo3bVVW6giMwanjcXY6oU5CUeySQJAXhYABRpno11tHGprSkorDetKKw2F2bVKQ4k7rKSrZvbBw5m3icXwtj",
  "key12": "3DKFHaF4buMvqoQC93KZQz7u7pndToumwaCjfJ57KuDQ8nvccW137cVZQyHbj1mZBALedpdhuJqyDSGspNQRn75N",
  "key13": "r6ZYkVAdsgcowMEGeyvs9A8RBk539AwR8HVTEKEfYoMEH6zzRFpBcUCa5Zh2jndtu6zLihgtvZPjqyYRVJyTmnV",
  "key14": "3AFxcSPgLDvFWHoeC5no8s27unuU6n92eUG1rXfTzJbr17viMwwd18G3Pv9kV9RVbGLym9qedKCf19j7Qniceszn",
  "key15": "LqdPLzQczNMyRHmb2iWoVECwBxWUUgPQon5uhoA47g3vREmASWe4kPNLJ9tDwAmx3GKVzBGHeoGSZY4ubEmABQ6",
  "key16": "5SUH8Gikd6CsmzS7FCgj5woTCoyFa2NJURfoTQ6j3J67rKrFzSkj47kL5hB2JoHcfLVUoD4gSohpD5BukEwheTdR",
  "key17": "3VDj1PskX6YZ6qToe96NF7znki9upNu5QmHL4653KY2aagmHtUScDjD5UEJWsknDMzGaS1J5jWX9mGYH9gwXyK2G",
  "key18": "Bbi37vCNWeeSTGQ6LXgspxKXZN6Su1eECeSkD9GCLUP6MGhNJoKdFHcxEMvvDyasDs7B97WvVquuQ3LX4mvF1RQ",
  "key19": "2k5TfGDDw1hXWBU3Zita15egDbKn3pVRUHfpVKpu4tMW7uJtbGnCzuFq8hZVK6a9dh6yUQbWSfArhSLjqidmaiLk",
  "key20": "31vQwsSNUK3S4MK8DQcgGSiLuhSww7FabUdDpP2aDmcHgCv1oUJanZ3sJqQyyzmChkbRGRCFsABLQpbFh6YiNQY4",
  "key21": "33r4QTd2R7rY2Fkcq6GUVGMzG5zQDswvxdkveZMDWdNtQ6jA8RHiUcKgkMd5xBezaErCdkBL8GzPict79idfBNS",
  "key22": "5YekcADaZ7iFPE3NcdQF8RcjWNjNLrjEfh1mL1unTd6TBadKQYMex6sUKET1zCs4e5YyMzuTQDiJS6Xax4wgdn3R",
  "key23": "5ToPM9xZr3DasnLeHWDSMdgTHe8CDFUqEB5D1Ji13UYpB59ccMaphEFrU9bNrqkT4y7bFADEFbeXL1cuNYoWRE68",
  "key24": "4HHxcRp5Eb9GE1nm2iWi8KnGDB7tWqF1Z3kZQyRXkJN24UtgGSRUwyi3PM24J39ecARQZXrcG9QJQJRaGkqAE5FJ",
  "key25": "41qrdmqFKMDLKS1wHtrLe57bbystPkJrpfMXsE7hmH7huv6epiNBEQxyNeas3HcuCenBounxfETrazEBoJH3JMF6",
  "key26": "3c6B9my7eKoxvndDuj58F4CZzKCuES5fQcEzWXtaxBpiogWQhKcFj2TJtGqgDpYvE1qFVeYSyEXTZtaziCxrgKuq",
  "key27": "2WmqcpcBZekTB6vZrehEMzdMRvrQXHQY5JaLVHJTzLvjfpmLwqsHB7Ucvi3rfui5sSghLbC98iZ4PFySk6LmDjya",
  "key28": "2gptJZNjHSy5JimwAf2ZfzQEM5QZF1QVFq7ZoPKHsNBMALeDyEcwdA6tnvzy6sFUaSbcWV32zsYvN6nqgRGwpiB4",
  "key29": "3k7BVD4sqphG1jYziALjMNDQoHwe2wRspKfyiTmFyVWiYF1tSG9WiAK8xSf82geZytY8B9WWgkdoUov4n2dJa3Lr",
  "key30": "4nNUHrs9faScFkHvdRXmNGPdnM33EUkeg3qhAbEZWfw4FnpJx36KAs7SeiWyGayDsXaRggMTyCj1uvjjZa4axNve",
  "key31": "KpAa7HVfRFh93zrDnNG6iZJTYtCWJFjfhPoVdUQHocqRKjns27EgFXviMQcLq2oBy8V2Ffj4JZTt67o88PkRBmg",
  "key32": "4e23NCEd4sXyyvqRj2dEZShfveonyYxdKJYSsyLXkwNcDEDEttnGt7dzLpP7NgJ68QZGUzTYpFVPEyLNXe4Yu5Kq",
  "key33": "27F8qEC17uubpoG6DEvdBgeSyz9yJ7LjCq5YtEkxt5VdFJBKditfmbMiubuLD1shvBBU2cHPKjrNDLKWKUwUcNyT",
  "key34": "4d1jZDeo8wZVgFsZ1PAR1BUccNsG8U6W2Dbqp3JYG1YGtmadFHy3ryWuTxxyY1fAsw6K5YJ1UKsjEyTsPguLkatV",
  "key35": "5obSa5i72yt1ZMGzrKR8CBSVgjymWGHz1UCT1JHqSUHmhwq5TxYJe8mbfER3BSJ7UHeSeADX77W9Dr6a6h52hyN9",
  "key36": "3RNSDFupdGLYxmHSBoGJqJS3VCRwnacBEbbKEaKoWVwTnZtgeqxnehCQYSe18hQKeet7oumrrt7ctKb6mshCxg6B",
  "key37": "3J9bGoLiFkWsk4oCoMhHrMhtxbTyMwuP8ADdyX2tpVPkGvknYbLETEmYScEqDWfpu8UtrXMGpBGyU1ybAjTz39HZ",
  "key38": "3GWfaEahULEuJ2BNajib81RNStjt8QeDwYNuByvYjPtDTj8eMCFeA2hHzsec6qwvoAPZSh9dgK9h2XroZNad4asT",
  "key39": "4eWnvHyfjcGHAkmLKVCPC7ijmYfvRroPLWxZJSjVqFXU8zzTrPjwn4cySYdxRz2gyUznPzV8WxUpK1e6nCPEiCe",
  "key40": "YNPRqfgMwqDLqTotP4zhCtBfgaUuw3ZyYeFcDaQLH9hGwxpRA9xVi77DsWJkhuDdSuhW8az8AezpDbh2CftHmxm",
  "key41": "FyXAbFmYq7oHG6utDyRkpCVD9BdB3X81Q5a4t2BfMrfZ7nu2wtQDHepNhdzJ3nsBHL2Cc1QArN6zsntwr8rbTjW",
  "key42": "5DtYJzofh6icEXr1d36Vkgd5TdVKYGEEQaLp38iBGMk7od4zERkD5kaPGqVEB9XSGNGiC77JwpS3pEcK747JVzU9",
  "key43": "3zigXFMBzW6Hz2n7hbpyJp6PRzWkNDVyjjtSBaJenZ6iPJYwCf5fWjF2cgpkKzLbUETL8wsd3V7wvteGpts9MoJa",
  "key44": "2JgWToP1AAMeLVTGpQoDr3d3Ma5fSr871AnK7F9oJH2nJvxg5cPhpb9a5wq4WPUFNcUkJ8Rm7AKxS1M12UVCY7vV"
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
