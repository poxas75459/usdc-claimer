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
    "4YenUGoCuZckqZxrf7ExeDpcbwk7fLoPtXFnuh4bWjfuwmXLMYzQVAfQbdqsDXPZ6MhuMuSDTtf1huvKg8Nsf3nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YHi4rcUuvpTvG3B6FXhm3iLKeN1ANxd9nGgL7KVF7VUn7wo14h16N57rE51WoZ3L6f4ioyBaRYvU61WUbmRh9v6",
  "key1": "2jiMhwpVA164PPNzLGywMRGtVAZniV8RqSmHbx5P2uoHj2CbMLZELifVWc1dwS9tngxum4zBdVDwLKrEKbUZMQHk",
  "key2": "3WsoPCDusg8Pt1KQ3MRpipQJTGaBCaN6eEjrGhHuJNc5tz8aq6niwgnr1TLL3hmqBf9i8h4bknKAL7yVAB3iw4Ut",
  "key3": "XV11eSMmPWVB968Nfni4F7UTyWTSstAd4u1A7B826JdrYLpieTvbcRBNGzx1Knsx9StL7Tb5rdE7k7po3oBCe7s",
  "key4": "GtqRh5JC1gFUUc9SCLZhNcJNEoXeVKfdQFQxma4EDFi3pXcoeVdzhV5N7pZFBy5PprV2KH7DeBHRi2jHCgpp7Qm",
  "key5": "4fNHy6xHf7m5YqYbvJSoaJDMztE4kGwHbFtoA7pwz39jBerE8m54MR1QboFecssa44XwuLecRLGrikJXFhy6WzzF",
  "key6": "2XtxSGygaGbeMQoc3kmwBtDS5hyCAL2n4sC1GhzkzPH15oNAGKY9YBSQ5CJMNvGk1RjhYymLJUcqn4pbvvZ5YpW2",
  "key7": "2bHGYSExH1EZt7Mgibq9zH4xQ784Z7h3hX6rs2fm2sFa4XABqUUcyC1XY4ksbT26E4cG3fch8TstpggKGwzjt1VK",
  "key8": "3p2Pu29dP9Z2JAFPN7FtqbmQCxGvFZjJ4trb8RpbXqMNsJ34DHSvFJXmN1bRUWLcyKJKBsp7VG1dPo9upgRm7YKd",
  "key9": "4rWWgx7iiBu8LtbQZEhvi2fZNufeB71CcFGuEE9E8ncU5d7VGPpDmXjCS4Y68fvVmMM8QG4Ywwu5wMyrF7QwtKHx",
  "key10": "wCXTKQM6NzvDSEDQjidBV1ZGtTpJP6vUzFUEwK9rTKQR4wP7qz9HBvRzzRwRhZu39EpmfPdhJwHTem9WQmY5Rs1",
  "key11": "5yLhBNDyj5U3HnTcXhmPndNCHq2NUiaFNWmfzfXM71kit8SndEuEHMypbxzVx2xfCjKPzTCjhgN67qxHDt7gRDv7",
  "key12": "5syzgE7bpjAzePgi5RYRxbkw7wkqFrhTK1z7VZJYyrQxvtgtr1wuRDdqkvTsrCTncoRJMgmRQzCRLP4vqHBS8Jgc",
  "key13": "574qLAnywi4zQ6GhbiYqQADoHHPgRLAABMhDubSJwD4RRekwKoVk1bno7xrnaAU5uXS9z5DSpf2idZk8s8k1bgix",
  "key14": "Aa7a6pYuC3S8q2GDT7Hnt5fCpmu5BvhT1iPn6JMGSxoo9pZPpRtW5RPmW4tdbUiKm7Q91Ewyihy5KUSHD3g2QUJ",
  "key15": "3PCQ5cb659p1Qf2XV1P2AbTq5Ni5Ekit3HxsXSr92gHZzJVV3QLpmkaaqPgnyyyZbh74k3YrhvqHVbUfNF3Rsp4u",
  "key16": "2zWcqMekLpLeMdrLiPtJjoGiiAek2F2MbbXLpUWAhJQsqva6shscdH1GAaAU9kLZLpueLgGv4XhmfcTwz247yqVM",
  "key17": "4KjaDKhiW11WF3RpvGuptAeHh3NxsDqvpT8obxKX3T44pKpTHcdBSTrvFUgmtuqHpDGPAXrEF76GzSD4P7nzwJ9j",
  "key18": "2SKeotDKoWDL6AaKZfQgkvp1ruza9ZisMw7Nf3TichdLMHfngY8g1VzZhCLR332WfTi4usc2Q5VUbLYrqykZzuno",
  "key19": "2qDnLuC3ekqY65NDS9YyvGvSNP7EbQDD1wopjvmG45xXZG99ikHHwwerq9Ntsk3YRtRTTgygNr9r6rKfeimvV7it",
  "key20": "24pL6BJVzY9xr3G58mCdcYTjNBgLPwqqcQuzdpnbtmz7K5SZLZDRwBECFvZGvFz5ZSwefJiDR7Uk2qMA5Wi33CTZ",
  "key21": "4F6rjemYkcpZ1aXBwjAVgtCYbGXycq3rZX7GMWzNdTmkeT294FVA59qYuNEY4ppvKZ1wZrVUspFYYNGFZWASVjjc",
  "key22": "2YLDq6Wyfz4KCeBwxSxdu1cmYxZnifm3fBXvFK2LzdMoiLr3KK9HxjSeAsBKeph9hKVAAa6MzRRw3qHpt3inFK4E",
  "key23": "2iCnmzWEU6fBwWUEFziyavX3Hue9VjvPXVetsViaqAZRnzbikqNANVPh61e5xqY8ERqKGPeXCWro4syogt3GhRmw",
  "key24": "2urG4kMxeWdXY74dXCYoRmM4zpgp9Ndomgxzs57VHgx97FLYENA5QqEhC3bxvMjpUtkySKiHvspgVcjTak6rFNoD",
  "key25": "5cLwrtG4LF2QhVS2wBrsFvEfjkXttz41SieoCgVYTKeZqzRxBnuAUEWyU1D4T6D72dLmRkD1nYwVNhKFcJb4HkRs",
  "key26": "2czbkgeademhsZek5Ek5nfMsCkX8qFTWHcSeceoHpiXZHUEANCdhnxuJ5hRYRmXXvyeEde74CqAiD3eQ4rMJrETn",
  "key27": "3emKgLTk8QLCqQvrJ24Uf33bEnzedtfaVmSZvjtUxPbC4qCNvyPRNxHFJ2mFVU3YWDH5BekU2ZBFGCUcqw1DF1Va",
  "key28": "2d7jnPNdDXJvmZYyghFTy63FhiBvmXk8aaXrrkuSHCTbZf5tSy9Br2SGrJEBrsBbaTp954hjhy1hKqZaJKk1XGj5",
  "key29": "zofz6Mw5yiLVLwdbJkFGxi8sfNy8Ds3zzNoTmHFDwxayh5Z4yNMVphDwjFYM3NMrcjUVpswid4hLhLcKYNZwARY",
  "key30": "52kaZWu4vdPrYKyr5wKW4nf5ZzqHYuciYYEi1jyJATKWAoDtLEaPW1LwoKW7HBy165yi86RrDyZrcZax1MFLNLAC",
  "key31": "4seTRYyaiX5gJQL6WzVKUvEoTeck5VDNSssDwwNUtcgo7hPRrNXZPLgxjoMzb9ut6kAShZoMVgwg9bRaNKjgKMzp",
  "key32": "4FWbVQTkdsNtDtxF51tXnj3L4bMXnzny1EciR18KAPsA42ggmpT6tA5y3AeAyHQ8kBEUTuBm1nyrZHtXQftUMQg5",
  "key33": "2WBRhd6uB3784BCMHSMTuR9fFPGgUXQWA7ekLFfdffGep8wMbbxo9GTjARt2A5DnptJv5h8TKGjtFoHTShCAgc8d",
  "key34": "3pM4vmwXAQCAaJwf6dSuV3KyG6yMNPRuan47N6aec3Yq8xa8mvDnYVs93QWLMwT444YAFWHXWpGU5TqhSwQDaJRx",
  "key35": "29pUavQwBLdhA1K6mn87yM8WKp3yS4DHMZvBCkMPvx9bA7fvHGDSerTQMpRyAi9pJnyXUpfUeeomBaTsLvHop5EZ",
  "key36": "5MsYcFYrxmMYpJi1p9rccTGkAXu6396FE8RrMz7NJCMii6cyAycUC3hZGeJ1yykgrXFUbiiYB6w6JJeoeVCZAc5k",
  "key37": "4Vr7VsAx7561xjF41vrPemazqNpo3fVgLjkeuDXZjjFA3dHSje4dCdJbs3s5nfRaQjmBp3e2SSnNziuVkXvQkqPS",
  "key38": "mnML5mgpYbtdyh1z5B88nQ3dNJdCgUokWEypKvLzoBV2pgPXpMqQqb38LELof2Pc2EvanfNcMg2oZk6ijdP6r7U",
  "key39": "3Af8gaUwSTcSTZ7yUm3VmAHaVuP9FTin4zo9VfyaeDdzDWiaBmrhER2dNm72teVHPQ2ft8SPJVqaAoDqmND8v8n8",
  "key40": "3iB2KiWvvDPzKtbJwBpTDVQJajHkmXYLLtzBV5YaNRrNdWPS2AXKjvmogv9AXpAcR5puiSbeV3AUm1ocbNvUs1DT",
  "key41": "34ezDQgLZHVGaXmJPKrvxx9xc6zqHkpdW5dr33SLPsKv2qCQjMupeZ3sxLtc3YSu2BsHCxFRSvgZmvPe5pKM1B9g",
  "key42": "myL7TwBKdUiuSAL5oNkP9LA4j468NuFZzY5jXYBq6TCoWVRq2pPPmcf1DGotWeMTeEPJ2zuUYXHv5kiWMZaHRhE",
  "key43": "36dqtNz6YcSGJsbKUfZ8EzyweyEJeCezoV1zGkcFLN2wSPUNthNEsHCs7WFKuGsbU5PMytGAk9odWWCiy7wnGER7",
  "key44": "5HWrpRCGmjoHyd2R9YGMsV7W5NdmivM6ChjTwDwRyjtX75KJAoLUpqiWeVEzCoBP6HExSwnJMZLAC6jAUQvJ6C7b",
  "key45": "2VN1R863w9fzYu4kcVScWK4Z1AaNuLM1cmHYoRXmgGatx96vZSGSajGRHmzkyeTaGUsbixcjKgeXJTRipvaUuWTd",
  "key46": "5bU8iSyGowKK3f7fcHGxkKSbqi7pKhXw8Y8xtWziPxa4hwck4262bHtcG5DxgQWzZp7Ex4DjTRfaZYYsLBLQFnFS",
  "key47": "5mJoXWiQSrUnLmp4x7DZei5KyUkfMseYbZ4PBqVAQWz4zPegbNxpa8yfE2Yi1wDXoymUiHUqqoES6bo5LvEAK65P",
  "key48": "Nb9EdR8yAgnBSxU6xmRMTU1ozeEhcKJTuw41Xgt6d5yQUNTgpCU7zpjChTAZSMKFhB3tX49QT1LVWwsDubiHUXL"
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
