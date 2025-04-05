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
    "2MBGDskGmpBjZU1kR6gjfPQPAM7d4bmn5hG3h4c9L3WZHb5xDFauY4AmXBxp7XAVduxEDwrVFQzbcFSJ2azL8G4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CET7KMiDDdBLGq6Mr12EbFxLtbjUcB2qpXg9kWs6YpVbeH4NqY5DpJtmHELUzW8m8ayUbEWey1TBgn1YhB1aJdW",
  "key1": "3tuBXQzKrcEEm9Dy3Gtf8wiSS3YHG6NMxdDw7Ejjk722ZBv4Gqxn3jfyBoeEHVWVgUYfXSpsSBmWf1RQkRwjvYVR",
  "key2": "4Jm1Hfe2tiNbjVX11e3SGqdQDJHpJ44i655JsDxZYr5TEvNW5m6kvCegjFQXjFriun49rwdMzDY5H5BKmT2LBX6N",
  "key3": "2fWocUpR1zBTrHtatJuCXPGxqsbzUeGiSgrQ66QWrWoiEjNfU2uqe9czuMymVKtvu5vPHYM4CfRogbwuonTQXuXp",
  "key4": "4WSJ867yrufvNZWGJnwqAHvyCRvpxHJQT6XayWZwWAbjkh8tXhXUKxmKjiUjJL6yBEM86u374QsWjfFG3d5Au3As",
  "key5": "5wDwfzM1hRde4HHa98toRYEBbdcUfyoueMvVRDA3fx6R97c5Hp2rt2J3K2ygVF8rsBK2rWLvE9d9NexfCvDeeRVP",
  "key6": "5NwLNnBoFyMRhS3M2QwaCCQeKW9P4u9WAvRvGvv3aLNPzkvQZbXMDA1fjKHpuUB7VAqFoeAhX2bPdjMRBAn7jZXi",
  "key7": "4snHEaaEnmu5xGbumbYa4HQssQcwGNQ3WzLaeRUKc7rqMCFNSW7p9LozquqcqxQXswbTGT6dMYyFy2dKvJ4jd2SN",
  "key8": "3Co25zkX7rmEmkxL4PqQCUvuWtVi6eaKaAkRGYkKytYZjbjGsZbFLK6JUooCHycGHuc5z8M9vnrUAH2WZ7tSmdVg",
  "key9": "5ybwZBpRgqqUf9x4ekFsS4VH5sh7CwPCg4rnwDijmq5NHigWX2i8pTPoyWbyRFHpHQvESkfh62kt3Fb6C6dw4JZk",
  "key10": "4KEgHYd7uTgfLTNVQSXmodAEQpHL5KtgVufxHasq4Tjgb5gPEpKJkybnU6tEx6iZvqsrUwZj2yMr6dZgtBH1iXAn",
  "key11": "58VBB6NDe8FXuy1hq18wCfj2j55ws8S2xw98S3r4eErnAGZDjKCGsMBSH8Cf2aDsKNSFs228VSKko5dkVwcDYHea",
  "key12": "WAcnnyHpwcofgKEJJQxQB4Nv8pwJiJkmRuMLabz7a3BdsS63M5YaSTGF9YhUjWpPtYQxadxzQc24o1qiVowaqir",
  "key13": "pWp7eJ7eZU5WhCXw2WZuRinjyq3wzQLjnQ5Ru9b9r3TGAoL3xMP6kqopCUfbAMLsvTBR8XayMu9XfyWCas4zSNs",
  "key14": "4RyCdEtmBWvtAbR3CD6p4L3oYEPnZX4zuXZftjf9cvQFZMJm3V7e1teU6jJ1HCx6Nfm2ByXs5A4irGrssNg5Ea1s",
  "key15": "adyFZoUiWGJqpWJha5BjGoKWPqbHrBhcKZBAYQwMnF6pgXfwuE87c3oCVBQE5AxKMdPKVoa3LF148v3yTTugpzw",
  "key16": "dXHBEW5RfKHbYiaF616j5s27giRpfP79zS5kk9rAZ8SDjKFXGgBPzbiPHm4J8CNGJ7KHvFmsZLo6CjZLGdQDynb",
  "key17": "3PoYLifhTo1gNwYLAHC6xxRqcEYw39BuCqBCm9zrbkQJ1iULfZ7y8Gd57UozdyMK4RBiWGJdEzHtpE4YidhLzf5W",
  "key18": "5guLoQneCWsxLb1CwMsf8hKR2cvD46SrjoabM2W8Ur3VtEwnUnRE6rN5o6buEaMHw9hGbDRZNiVBtaBJkMzQvH3i",
  "key19": "5pv3ScxFVFbCzRVkW6rSgSnyxKvZgL7q2K1mv6iJgWKQuwCR87YuDBqvkRWmyTNtsBzBWbrESnhBAbUwzb3xAdFF",
  "key20": "ckQ5jJaBNp99v2UnUeoU5cRchYb8wThFxQZrdcPA5u6FiHNS5NCXwGS4ArxHTLF5UopBg2Ue8QAtqdjLcbk7x6G",
  "key21": "4PxWvqbpqwkaB4tcSoo1ve2hpCPH1hT9zeSMbivvJgXNKZzhTYdzasmmDNuPAp1sRF2i3koE7LgzBrYaMg7s3nia",
  "key22": "UqkpCFgz7mCNSyiADi1wU2U2JjX72Fc4r1jUBdENNJczwChk3EgxtmzXgkDv3M1GFBC4nMTVKtG2ANnW2E4HeWo",
  "key23": "4GTmp6ScuvBh56pgg2pVaNcDihBtHqHETu27t2ANzkYYqxp4haiMtKhXMfTP96HcsKeG7uJPUzoWbYrhDqtCwzF6",
  "key24": "5RMJ2VJwyr1XCjsPLYNH2zAEVntvU9UwgSBayFn52zJtkRG4jMYYrPZgyHdxSDcp8oEwi3X7KsJdxTe1uzXz8sQ",
  "key25": "4orRvA92xeiAotT6H48Xmkr31dU67g254mWexE9bGG2Sp6WXwCREKaXwuyVzvpbL4esa1UxRaum9x53ekbBZeMKo",
  "key26": "568eognMZ6fRGK2eCMnDZBj3kq9sT1DKvyZS233tqYpoGWtrNEqs1obVb2QQJiGZQyZYk8r45gft3aox3sSZAkYu",
  "key27": "2WHHTeWnhU7DSijNHteygu9UA9sSRpFPM9qyXmZunMPfgiLEy85uwYLC8JJBkPJMtBCkraNqUo3HNYpsdQLwszvK",
  "key28": "2Ve4HFCCZsDQoMnBzzuZGT9WJY6YsvNMGdFWrSLboggjPzFL5Yv1Pa2eVzof6fnQKrf4Z36frH8KxLCRyQheTvpq",
  "key29": "5DNDRQ9USWJGc8ro5GvfECKTMLDYWcVPGFX1efwfC6SgP1YTPJNLU6DcucWK7iWP523StkhbrJk9RYqt2FNPARfW",
  "key30": "39HgTDJXoheDfBahhGAzTXjiorsyPsjXzWhMBEk2qUyrD9Uu3WjQXzztAuy3zN8f5GUMaUQyKt4MmSh835hJD74q",
  "key31": "qEKwc5EtmyV6pf6729xqcpJCVijs6ExZyUF32rUqKBRZ5EQZLTmEEWYWLS8Rzn9HwycJi134dJBNL3e5tzd9Pbs",
  "key32": "4q7QynimhoUiynmdqKduTLRuBrgwCWWDMafboAs4yCgnbajRBUJ5thjoBnSbxBFtjeB8bp16aZqRDQhm8HDnG28U",
  "key33": "3Y5UBytGBrg6VRQ4QihBMrRAVG5mp5FiXAKr7p5UMb1NRNYaQzHCaMGqFcHyiTVLbKUaf8qj3Rut7efzHBiaF7x6",
  "key34": "2ant8NA9VoZgE5Wkk17QKh6ayBKbsaGrpSsdVnZejoivUgDE78ho2Ss1DiqAhEX2VHrJKV8JjDvF1v9EmmEec6Ub",
  "key35": "4e4dKeK2o2mGiZva7HYNr9EtZ6CKRhN26kkzVkiGHy44h2c2Z8qNGdPphfS9aGpirKw12Ednomn5P9LViyehTNLH",
  "key36": "2NnC2faHT8T5CVagjJSi6YSyNnVNs1S9Y5bCfgWrunSbN4ZToyyTdSQn15AUavwL22PpAgScngm9haNiPy2xBbpv",
  "key37": "5kyCqLnnEgYRjbNadr6KxQVuZB23pqrKX7HAz2HugAe7KxPQ624kmcn2FpxSW5zzYznTxbdUgfRMFASvRns1DKjE",
  "key38": "3wUxMyQQc1RnVyjyzQ9SjMNN44pPapv3Bot1QCxMLLtYjnWUkNERXbu4qKdCh1pTMZtoX2kkQT35zBSBANnxbzBj",
  "key39": "53gVQiHnrZLe2VuDgu1tYWE4BGjuqqqdLgnpHzG54Y1w5q6pN61ePLYWZ54HxNEgqs8L7PHk3BpZV6i198RAAibw",
  "key40": "574keitAc7ihnSdkXinZurobgoNJbm34RuMrDYx1TpYsJ9dPSgVibT9cEgrKPAbMpfbRu6Myvvz3GmWJP2d4qnnz",
  "key41": "5ehdWdSPLSGsQmg1b7VjgpNRa5NR2hPQcLMKC1BhVtjke7HgWfzQkbET7c2yszWXrMCjXW8kebWxPHMV93PVQDMQ",
  "key42": "2bmfbxMZYVmXK8mQ8TudCE6sQfWTjXN8P5PJebpXQkKENcvjDCwHEGqWWiT7FkSfd2QLYvzHfDR9qi1DK36u54TZ",
  "key43": "2FYzbWPUrwL7wgNhtA7H8xNZqtoLasgqphJN13YfMhJCqiPP9t7NEbsc4CNJscHiaAeDmrQ9ZZ3kRpAS6rJHdSJk",
  "key44": "2BtcAjXcCcfQn4Euat5TvhP8kLb3mbph8k72Xc2MkpjnLvWoyHQjfkDY8tX9Nbb3zk2wr5tZVadxLRL5Gb5e3EBd",
  "key45": "2Ksd1muuwoi2Rb8J8PXLrMjj2MKY8tL9nP679dA3ipuFjiF4RM9PTDbuEB1hzUSN9hPHoUrr3Jsud7WN2LsQmWFN",
  "key46": "4xyC5Rgr3MoaH1PSATEmxXmfcYjYoGuLDp62vMWJXCXgiKoRwfY4U7aizNH6AHMKfiNbhYv8EveZnjyEvW9Xi3QY",
  "key47": "3V7fDdmtRTN4Q7wD3kGNFN1pyj7zK5QbHSB6KPpadVJbm3SFTGn8K3xGYaR4a5Vi4g6jMnA6RAZNzDDuYVeydRDh",
  "key48": "4DEPt16cmKuHy5kSXrphy56RpjwQJqpkzd2xVXuBziXVoioB4VDMGW25GczgaYLe1WLPpssE2DkwdM8tAD5pBBWE"
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
