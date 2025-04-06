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
    "4ZsyWRwLrLFdUKf9w9xdBNQDatTHALocSqEqgbwJcudeQprAMmNoAMPJMgHXjBaZxSTbFVhrDcYmbXAA6izu3mGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cePjfm7PxAPDsUYzW2gK6ss5g33jRqGtw9LnqHS7w1BH2ZZnoSNXdEfX7kTrLFwy6oNWvzEibfb2pTPUiH2TmUM",
  "key1": "WLVKLh2sqCWpqz61n5AN8yP9imoU8ztWeJMBgKix8o28C9TUsqSKBk2oKo4rSoRD28Q2FzAWEXEmRrGdsbaRv3N",
  "key2": "654KWb2U8EwcHM6D9fpYeQ2wdRfQZ1rcePYU6KePgVJeFNkgLBuvHFT4Hm4PkUmPSwGiWPt2NfhW81ttKnPJzHbW",
  "key3": "3sd2B3WL7qNrXJzFkGfrjHHQGxwYuPGQp62sNdrFbbEC4AmobtSKkD31X3jqc7Ppyg4TTYM6WCQzS4FzBwbjLMQg",
  "key4": "aUPyb3WMFygHZFm6Sty9nP2guTF8MLxM8r9djiVx4GNip31rSRaPTacB5yzxoL2yZwAms8yp7TzC4MkwoY6n69N",
  "key5": "3EeZSzY2wZL9SDGGjoJvLWSYpi5Xy4pzYAZoqsxgyPb8YraXKG9PDgsyNcgSzP3yAxH2zkyZpJmuZeYJSsos2dd9",
  "key6": "3apg3ZLGZLUJ1BNkb8Y55h4eufieySoX3NVKFmkGe3PykDrYJTjaBZUHLiKGJhVU5ryJUa258ydweUBAisjDHxY2",
  "key7": "5ydczKWfTbkjsRcMHzZV5SQ1xv8SdwjVz4e3Mw8TtuXgattsH4pN4pANdnb8LsVfMwN5XhMyk3PjsjhrrqnZ6Zmo",
  "key8": "4fejNHUPajmiZeRrKgTag3WRVLzwR7YjpFVgyfYPfndhvocciSTeEjkQGffikK4iJFeNmN6zQzPkFEWgZF8T2gVY",
  "key9": "2QMCnp4aFaFHZYhoDWKvHXubxCnU4Kvvo4KNqn6hm5pLCnNHAvRgqeBLC6KSAVsDQLRYKGwQvk9ZJHj5tsHKxLSp",
  "key10": "411UYUwpjtAhWdYfzHeygrm8MjiaJTsqug9DhR2dJUCr6jXfgFDm44P8SjrGE7syqsUav3APNikwwGxkSX6SXAoe",
  "key11": "kRLgWTsi12rpw3EXeWYAHGZjRmZh8vrdKbXV4wVCx6KWFC13R3zZ1Ke8fKc7xV9FgLgS1TnDeGAtCiQD5wqCV3m",
  "key12": "4NHZ1t33H2g45FHw8bZF8394fe3E1w6SY28vUGXqmf82keKLR4RwxxDzhFfpp2R6CdFg4PFo4be3kTc9AcUvsHRJ",
  "key13": "52giWXSP35LSn3GsVvgD33Ke2xdUr1LzHBo4NMmn9wf3v63TLe7ZwMX982H5dCK1KdLmYNMSXSg1NLMZyF9qjYPa",
  "key14": "2FEZ9rj4TbVeVq7QBAYUkBCJT2yqE8oKyojni4S2p3yogkU6CCATcHEp4A3pQB9EjofDyuueXLNb8wf4VXMZNxTN",
  "key15": "22k7LoMipnEPzDVJnVc6q3wH2cgnGsrkds84YNo3yCXGmpgJn5VHaXRc1bf4o9Nh5LSYDAiHnAxN1yEN2Fccfukg",
  "key16": "5MfnEkhMED5JFUbdqZd3hSxWo8UwE18e6iEVcDWgNM5WFi2rJ55yZJJqGr9DxcpM6874CdRYVGQ4jKykaGV26K4f",
  "key17": "5HsY1tVgvuoPsa1woQz8RxfX279LkxM1WAp1cg5vibxFsHTXf5EPL2F3BWXSTc4ZymQ6ZYR1JUs6W6qX9kqzJ1yv",
  "key18": "4SAqnNjd7RQyxZqFLaU14AwXhPBVrTLGY9JfsLY1H6ooncPMuLa7fmLnLxMV5zbaJRNrrCeCKhHs2NUx5nP1ftN4",
  "key19": "2PbbviAmW3aYy6kw2mBoRFurt8WwVHh6coZQo6HhbsTAa4X6uEWy9qNkwLAbV8aWR1k6mEnpRsWWBR8bRnXq77NA",
  "key20": "3bJkoCsZ2D4yszA2RnBQVfLze7UqcfsmnsfAk2B6FhavhY5wonFryG6bXkp1dwkCdhAtDBYAkdCCCrhguiwr4FuC",
  "key21": "29VPpA2chFmy86YiCKAsiXPLTSxxVBaJzG3vKzSdABzmn7vWKLfdimrexoNsdyn8QoTFXr44EdgJGYZ4nwnyQz94",
  "key22": "5qY911vFLCqUzrbGQNowif5WQrmeHXTCoiYcHmaups6x24jkRjUopuXMJHuenniXpMgumwEUTDGpX984Lnzfu1Uo",
  "key23": "3WCB4QrTcYFwRSWts1h5wtzXpWfBBiZYNe9nkz2g6sLAgXuVaD6ZTuVCG7gUmuQG5cb8jHjqXfcm37aSGZscNC8f",
  "key24": "46LjinPNh1e8v6BpvDvNTG6yEEaxsZx2oeWKMNJ8Ur6JWWpNLp2EPMa3x6LAgz22MSuKpxrtF36jqBef3RN4Ypyo",
  "key25": "2KFFH7RgTpv1QyY3QTQUDVmj3BtmxNyMY65rwz5FEzNWiBuDNFRP49SWpmkVenzvvY6x1tNobLj4ZsX6vpZtij2",
  "key26": "3P7FMqPxEZCeUbwhsiCDrBrz8rEWRqGDUt8cc73oMo9DGb5pbxSyYC9m5Q1fJ1FNYiAmNqV1kYDMRQ4UidtJKy8s",
  "key27": "3RJWcCZj2e2HDox6sddkH3sANutrXnXtoHdjHLq7es9taP5JJCyohHpjewzoLxPtDbbhQJa3sTY6pibg2WGCpw53",
  "key28": "3r75Jmmbm93sYUNQqoLZaopz8AZapfVrUtAzxSCkk432KwakHBsGUxmMaPu6Lz1hUHoaKG5F6sUCjpuZav6g6sGb",
  "key29": "2uTC6dTNvLBSrfmffEjEyC1Lti2GHpbP15Yzci7oYNKu8zgrYmpbpDbuJgthJAg5shKmhZuAg1okxs8pMntx5obp",
  "key30": "2Mombg4V9hACpxYNTYerh3bk9FZKz1aRGBLZGEQATBBA22mQLW9rAWc3zzGoYjdks7vtVZe513DibcTjVFuYpGut",
  "key31": "4PzDyCmSkHXTJ1qw177DD9uK2xe9gjgNvwZQQ38eU8raFKqKcFoeFppnEihcVk6uTknWubN9BoScDZb7RC4Pvupz",
  "key32": "Nj4PpHLheTbJkb6Ctuhcpk6mybL4xwzcMLsKkti66u2ZzKiRzRwjTrW6vVaBuJ7nQuKGBAboMit87Fcuq7vmict",
  "key33": "cWf32nGseAG69BV7MAkbGhcYTT2oHjci37dkdhYknk8xDXPYaEQ7uYBfsbgEjSz9b8xbF49hBYvaEkt5jVNptVm",
  "key34": "WWfCDvJCGjpRwbK1enJ5zgBnCcScTMDqsCCryoyD9HBuxS29q52YV4mJUBSXG2K2CPynkvqMys5ziQuucWoU5rz",
  "key35": "5U8yEKRgtRDepuaB4CF38byUqop1LqPe2p69YYF8ykkVUFvSMrkDBnFkFazaK9NFqdxWp3tN5cGvq6JvUxxJxk9Z",
  "key36": "2hgSDkw2kGe7mrcY29FriokkUy6b4RvYP1yDfn7W6uVjrrTqETPtPEQFUFwUb6Jfedh2kMhTScimfFJhKSaPxJmJ",
  "key37": "67zhCEYRGC7iHQQuyYjfayjR9RNy7BCF1sVVmFC9VorQZwggEKqSmwerJBJzr7HYMRtwgLiWa6WBwExAAZ3KMfB",
  "key38": "66mZSdTMHzzuLdMgFJAv317EQKc8tphbFwzzyqsd6bDCEXrcxqnABwpxQERhqZDh3TWoGiDdkjW31ocP2o7RbLQ8",
  "key39": "4p2J1xvRH6aRGvsCuKLU8dYt6KBXLHXKawMwUNj4awuPCxnU6RF2mHPcxzJx9oKjHBS5WYz1oaxcwciaf7STzqmD",
  "key40": "2owbwgQnQTKHagRPBMhxki3zpAz2Ar1wohW7d1JvkYUCx8owixhpDhmjfFmgFq3hxMXRw6qAQq3rydS7RePZGZXd",
  "key41": "5LnJEDMPJaDTYgi8jC6ekR3Cj3jaLpqmeSqeruExFCdFa9KpcQ5foZdQdeUHurKmMkxDvrmy4uty8NjFV5FisFBK",
  "key42": "5CUnRovBrkHatoP3AxEu5nELZ7bA4KMREosGfnQQ7nKyc27dRjU3srpuMwezCTT7qB29jrDmpKQbbBiyzPaCdXRJ",
  "key43": "kUtkuwGnFJ3nfDEoUEukKLL6eFt1SwtN1X2kPLhRgJzsB2J2YdcK2iFZsJDcP6wwNpCu2me9Hbq9U48MNSoRX9X",
  "key44": "kpoqwFyuuZaKvjp8NxK15gQczDvfmVUfWuVE4koQP1u6amrxDeL4pe3zeMPdDMSJGBSYBV3EXZ7FJBuGFtpr5sJ",
  "key45": "5whqsTxVAHJK9BQbMX4qqiy5Uu3XbVC7dKHDjZd2j8RYc32au75Z85VWX2fa3hts7YeSnKgWsVs9WXst3Li1xw2p",
  "key46": "3azqvr9pRNhuYqutzaYtz3fAxL5tzhMmh45EVVwPXv64NzKLncPjaNENrVXT6ZeADDh5oH5P9Mv7pVAvQSGEHuqS",
  "key47": "aGmpa6aj3gm7GCyQ2SXigEfebZ6M839X8Fi7yYupf3wC1e4A77ZchfUEbESsTMcfKhzTaxNCYS1fWP6SqvLFxEF",
  "key48": "4fFCtwtAbmzpR9yKmtAkP4BVYcVH6nBmqVypPxYc3nwtMjgP6afqRvaBgrMXsoyJSuVYsGg6u2UcmPyYfhFrgnPg"
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
