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
    "4bmicJhYfit43xv1kx3iCzHvWQzY3iN6nePhtQQknRuAw1rLcKhAmyHZQHvDfeGX8sTJKSd3rpGAmk2FypPGdXNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnYS9bHS2Z8egwo9CyBUUd24pz2iDuUo3LUsy4hauoaD4254eTXFXqpRczsV9TX7hcVVdp3EK67s8f22F4HZuRp",
  "key1": "7zrQ45MTViLgxnkYnxDhq1SYcepGZDwcZo3LfVrqL964UJTmCfU31Mhd74n9WYdUfGL57VdKznVmZX9aq9xa9uG",
  "key2": "2e2anqDsVeCrjrPVmZpaP88VPWxFLGcWBBoYEBoNKRiHqSvYa2CXDBRTsnBLGA2UF9Au3bdBjkR15FSqziAjuAAq",
  "key3": "2kAZpcsci4Tr5sZ6v9xbZno9UZLHi9hgwZ3oHeRRBMhKSUfHWu4N6UJNdWZsSfbLvLnmqu1stytkJLJRBDH6ovrU",
  "key4": "U9YQZ9RN8Fjfr4yeD78LWvczQt19W1wSdBcjESosL3YKBde8u8aZcWfMARmfSRvW4nCeknYgh1NTSRneioLUaA5",
  "key5": "7KYxESE1Vd5nHeZFMfQcUpcJmFyXJrmHcxB6Nap957R37zCENSsJCsuMbwASBZcb3tvfyp59E27WeDB98nEaYLC",
  "key6": "32VJK4qLBJv1ip52vcXL31vNnm6uLAKJ65QNhw7qmaLe5UzBEKPLY9SH86dbvd3Ugj9V7TGm56VNLiXKSpsmTuXz",
  "key7": "4B14fSui26tF4eoncrovdWKr5ZhZLe7XJsjRVDkVQUZxGExsTboctY6enzHVHpZRJxz36c98nzrtywyt335ZYUqh",
  "key8": "4SJwDNTZyhzx1g863vGUTFN8B2ShWGCa2thKjW9TA9E5Tn9wCfNJJgPtj2ZMJebx5xuRSA5tjxL7GmA54iRJQgAb",
  "key9": "2guZ4i94uSqyPEmqxh7cU7bLsdMwqKCkuChP872EJXvUG77oM9BVRPkeUJaCURf2KWuL4yVHJEbMnFo4GRzfZfCA",
  "key10": "3GxzpFPRpdKxGoZ9NqKP7aXtTSwHjin1KLSv3yGSSZr9qjrKbjxFHVaSU5Tfb1AptNaEZmqvfQSkQPg67NqtUsxf",
  "key11": "z2MUGLzkdquwjKDknpqojCcunzLm5RiYt9wDyfWjha8QkTagJqXwGFT48pPM3sPadbEK6MVMjQpg1XRE1XFwB4h",
  "key12": "4XthXqdCRZRhVNUpCM9N684xah8NBgAEzth5yKAmjGAPsHZ3FnwiLzVZ2jgjXxX6z9jCGhB8BXhc27u4KJSEjAQ7",
  "key13": "3YQDaciJ1BMF73hCfWG3X3dFecWvFCXU6Y93Ps9iXfHetjbe5of4W2k6hLKuVmNLzw7nAhLrdJinyJK1SypGDJRs",
  "key14": "3TZcZyJSdE3umvdf3a8g5LW3wau8nENw5oJk2DhvGGgrRhZv7XPprWiQKmECSztz6Ljg8nfhEofMF41djpca7DVA",
  "key15": "2NfCefbRiBEeBeQ1xCc3R1BrwhH3JSkx4yPK3LpyaAz4CHzAWnNVctBNUqjui3V4Yhrue71VB5PSSUq3FZrYtswG",
  "key16": "VFqKcG8b5UKxCasd2sTHZy2NW4RpjnRZmQPhGrcuhzfPrciDQmdRWSkGoohQt35LEmrbfibhwpF9h6DibYqtGa6",
  "key17": "4Bx26t2togP4erk9dEWP2u1odfyud5aKpDamfjV6MTg16dS3Vt1kgKnJvybP9n8AUfm2bFiFoUuLh1EtVuvn47Sp",
  "key18": "4ZuGf6yMUC7jrLViefMB8yr7Eq2dhYy2HgYE1eJBCM9tpJSpSgyFdctXYhyEqfEfZdmXwC9byXZphKbvvdro8q5G",
  "key19": "4qgoVtP7CGoPGmKuJV3dxqmcenVKnMkdxdjzXLNPEea4DA9aopXRADdpEYExFBY6JPyEnxkRT5obSVWXgwLHD2Md",
  "key20": "5xwAvyrtnXFLjZCV6LJWp91f2iZUb44yg5AYyfbugAR6wWBaoCYf5quiTH9wJk79LSf3vv3gyXvnaHUaoQx7c9Hf",
  "key21": "4VAs8fwrgork5bziyjmDt9pNoKK3P8jLbM2rDKmDWdGka6wp3bhxZnqT1DjpFSzAHB5S9JCeh6uAsy5Gr7Hn6FQo",
  "key22": "fcsw8Z77CzZkhFHzYsRhaokWPMMFFXtCpxQKPL5LFQM7ZgiFA9g9PMN4pBptkEbt3VnFekpEbBPM6F1qtBuaUvu",
  "key23": "36iLjrbzSoW8BC91Wq8zrLwpHpJgUDghsLBMLjQLEqNS7JwYnofhnGmjmzQdHjPy7osuRnikrtwNR45CtRW4AuJv",
  "key24": "2Pt6ywtrTDex8Qqs9U97nE2N3sr5kx5TaCbZdmUXKRNDCntTTBmo7jJZ3U8dhDuQUWF9fYoMVwA2A8wwdLUG3Swk",
  "key25": "7qCRNRvYtHjQrrpKxPjujFx5ahJqQy9j9ZzUbQ3SJFpX3ad8P8VKsfe8CoYF5QWPDXxL8NpbJjqjX9b8XyBKwKH",
  "key26": "4d7Rvx1agAqV2JmMmj8h2tptyh74PMjWMYQNNHXExuREFwr1X7syvEtnX4AHsM3mKdBxJ6doBomCpSPoi3wJdrRz",
  "key27": "4eaMByfX2mMHmNQ4U9LPbQc1ehCaFk2SoZPE9gEmTYTFVGyWm5PsjMW2KiTDHqXXA3umpjszFZChWKq5LpCYp3Ls",
  "key28": "5M4LLxWCUx4MZfSN9Bp7M4h8V6gmPGz48KpG1poANeknSFwKoNgetuJUPxcM1JhLqTjkjkZ3eTKjXy3kg8zZJUWt",
  "key29": "4EKZJVAcrYK8bfdw4cVoCpKTq8VeiV4T8dRL3879ezDyU23A7MpcWGKLqKXLn4faA3CdAXiwR1jCk6yUmkeFZj7Y",
  "key30": "5bNGgt87oPKqnPy2QiYDw2qQJr22S5oEkgHZY5KmYRYsdDDErsAw2iEMMvM8HsMBs1SojPCmWYSxydG2adyBHw8s",
  "key31": "uJDV84Q2VSMcSfFqayQZvqx2KJUKrZu647qy1CPmqDf9yrCEsyvpKGca8rJcqEbv3Nr9oXW4yWZczgimDaVc83t",
  "key32": "8YqBBU6HUnfFCoM4j883cXYyofLfuFkcDQqygKYT5PYzWKzurZ96Hyy76vYQ852HC72TY17UnC6JvyyfFH6h3Tp",
  "key33": "5xCnQCDpmhx5d8sFPhBUuuj5W6SEJ7fQ4mzJAyp63fC5YxtYgTsB75PhRyURnxm2tz1jx68acP6hR3ohW683rgsx",
  "key34": "4vaBdcBssAFrHfPiZkB5R3accjuCQ9xA2QYq6pU9GkfMPrkm47g9pihapYuDGKqWqo5gvWrWqWwfyq1QFXr47jcM",
  "key35": "4sncdWwyaxEKU8tm83xUc8HrS8xYVWT3Nx3tELm5aLUeB56kDwprQfZKDCh9on8wCJgiPfaBBhBLkHdaij2Xb7qX",
  "key36": "2AVwxajhttUKfGvTyddBA4VKxjCJgCxpWV9NiJBTJf9jCaNW8HmerVS6t4xjnECVuMzcb4R5ZBGfK6DzgbtkA4iH",
  "key37": "3XwQ483WXoiu6cnz5RC7SdrL73srMCXLj4nBgpyWfAoQriAXyveVSEstnGecdH8QcqFnBAuRdKeWn1ihVsJpu5sB",
  "key38": "3EwNPc5sLHD2WZDpuzWosjFELmTJ7SRb1a1MZtLSquakK77RdLFoJKPXHboocAUQ3NahQMyvgZQ87wB2Bms2GDGx",
  "key39": "5cUNU8wsCwwDEZsF9Thsqyw8qjrFwN8fztpZsMA4ZSb5PKkWhhJgHmnLNzjwjg9dRGTwdMVFvC9MdrniPVZBpdyY",
  "key40": "sEsHh1Xznet43NSPLCY2NfsWqEh67HqbDtjPeV5RSJE4fixV66hBfLbnsWuht4wQ1uSikL6eRrpBmNfZ2oVw6us",
  "key41": "3J6rpv2dd1cgb5tBw9uGUEpc8qnCbf9bkzGCuv2oErXaMkfJTo8qYVZEcZkajEqEkqNFbhQJxdesPbnq3pC5nmsy",
  "key42": "4hucmXQRPR61EDe77TyddUi5S5o8KEckNhPyrWoPvtpxpwgSFz2QnAQqii9fJJGmahAuabBzoLRFJPbejTviz61T",
  "key43": "mYxYxoG9NqffoRZ1gu5hw7Y3TYjcsVUh27VXK1C5pM4ETo7jAUL6LT26bmZVkTgcSjzXrxafSggqi4rS7tdUZ6u",
  "key44": "2KawRYxwKeBVUu6wNSJ8gw9pwG1x9Sc5d8zxxkzkpxH72DXGvVFzCK7Tof5ybBMceRY8YjQWoMxzeZpaT97iCaYA",
  "key45": "3KZiwfJmwmMQRHFKWc1iDtuecN9mixpaCqqAzXdizu6zxPzW5fTFuWNYT1HH2RBAisZM6L6enxrLT517KTWv5Foe",
  "key46": "2bcRNg1bHXdoUgir8gNMpcevqcpZTTpZ8M9yMwmCo2qQ2DnfFbjeiC1xY45tSjxv8bqRxzMUF1r37X8Kmh83qxzo",
  "key47": "nrKpJfCghv72zJmQ5wi35zQvVnnYGWf8E34HjaoY2Ku9a8gLKwhJiv3WCGtd1Qu9ViBzUpzNfco1wLHYDVF7zyx",
  "key48": "2mUjEdRmzt35DMKTZNuCx4xadqrqciUdFm1AsejX2YAstUaK2Lk3kfHpWR6CwnTicttMecXsacuHCF3jXmKVSVVk"
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
