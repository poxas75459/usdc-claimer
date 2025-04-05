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
    "N17PGPLeRw9A7xxtwvhiwzBjPP2A6FodbKi6Ah4riqneEUoDXjQsbH89cofcEmYkZvEmfhfMYrdh3N5mmRc9pcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDYA7CpETwi24cdqU3LeKgaoQQWPAu8ayQ8Avofp7RG5HgSRip2KtY1J48hZ6kGP556oFPvmmCr2jmW1Scdx7Y1",
  "key1": "4ZzrRG5bykk3ZndL3VeY4cEpYLqTamm5vQEFobCPkQcHfUNrkzhke8RJzhHsoVPuq2yMAvp3WXuDn2VtRtZC7eqs",
  "key2": "4JfVv3NVyQzG9vj7ay3aJUmA3tKQecMTRbDaveRmqGATDUwHHL8pCxdvR8Xm4ejeVJJepxKDJCCxTv15E2G9y6cm",
  "key3": "5zvzpANSFwEz53qa2xRHHt39HjLPY32xA433gFTnNwHje48HyccgeMTMEze8iAVxqECLbXabohygEernVENuE5sy",
  "key4": "5cgpRVkkVLryNwF8QCW6xntqqunfh6MxQcE6BKfrwXWiFi7KXWSx6bTKLLccAVHhWkJ8cWjXYv2LKJJwNBzUkcio",
  "key5": "5YK2rfJ12Uqab3vzrm2fESz5p72wSPHZCr864FcNDUDvohMxSqVoEtxjKzDfeL3kCWwb1r9W1iKuN9AT3Rjfd3W6",
  "key6": "4ogSY7CTFvQd4HSWKHxFRbjBCosrUosaex1A9WEtqApJgT1H2fp69pTRuatJyQBh6an8EJycqFbvdGbK1L4AFNUZ",
  "key7": "3S8xUmcMCHwpoZ8SA5NTPeCiwrZ1uNqXQQJtH9gftzaUfq1ZomHqUsgNYtzXAxT3kMDxWUYdqMefjoj6YpXdXxYy",
  "key8": "4VHTLAfBmukBTZi3xsp4UFUVcsXbumEnAbfSusEZoVE5qNkRCDmAYvAHgJ2qmUEjHhjoU1Va3ULEeWorJBFjX85X",
  "key9": "ZpDXH14hdFFC8S3fbmfvNxzWzeJMKbdtbwvCtym2f9UUR8BuFiZEif4jriKA6KuvuwFv9Ta9WS9iHoEi8YfVS7B",
  "key10": "3ftw6ey9XUV3jJVYisje8VgFFSiYMSVaZf34HUycPKf9P9Y6AfTk6X2JtHdYbRCnAmV8RShC7k9NgZfDBbTzPvLs",
  "key11": "3Zf3F2TZxffJi73gPZ8sZfBdAvh5hRBdkh7YyVWsi36Zxe3Y23r3Qen3PXwREaZ8NhdggoQKuSdVdLza1XzmkHtr",
  "key12": "5n2VvK8dy9c9KETuL1ovD4DvjdS6hDNdv7SKgbzMSDBQYk1hWZ6dWqeNeo5xw3twWxF9XQR3GkUvNYvbYmhvzsYA",
  "key13": "thMwFNjVzyKo6142bJeCyHThagkkfKuLcgnxQp6nKvXpYeArEFGfxZXjRFj541MT1D1dn8vrPZ7gFhGq3wS1YD5",
  "key14": "5JPPhEADQ3frToqKDLmGS7Js8bbn3euwja4SdMoH8Z3KtRyCyNopE8Xnuv2jRm2V4Y439dQviciDb5BtH5xMnCUv",
  "key15": "5d5AdT2AvLJCvZ366qogMvFCVpxuNvoDpQR9EdTPVfq8Lqh9SuiBPCUPrGbKCQtvTXM2cwmeTAPvbZrTYHZwchze",
  "key16": "4Rj9duLCsrfAG2NXjNJhKg38uv22XxCEthLi3DPLduPADEzutBbufJtEZrLyt74hy1XfckwiUQWrsyD9LYHhfQks",
  "key17": "4XMDYVjWcT7PKGMcvzWYEgAPfDZ46YK3BJHHg9gmnAPtjCT8WzDQg1gvtvhTEASY9ZGbM7GoH1e1VAPn2nBETr6H",
  "key18": "5TsH1odrGVRBS4xNLMj3BmdxPh9UAX5gYSxwauiXozJt8vYZQAhEm82M8ky2VCizfZd93ToXMUQ7HmfcDTpXa4Um",
  "key19": "2YYsn1JA6MYfTkwhzJRRQDeGhmy6sioDTAPyLCeHuwhky2WQYcfPqyBvVT6mGdWgJtrKHFQXoJt8xr25hE7KauoC",
  "key20": "633fyLRCBKqrbm8kTgeD4sbqKd43XMAASfRz1kxrmoH8hcFhdnkxJBEBdCy9vNyZhEm8jYUPaevYEYypKRxHqYeb",
  "key21": "5Hk5soikhvpoqXYihgGL9joZ7VBarLMye2X1WM96NXCkchv7w4GUnFUEv4endpmr8yZ6sTPFatNRLvFLg7d5j4GB",
  "key22": "4cHCZu1ibo6SgTzFYJGmk7PSyr8REbRN1mqFLc5Xq2jyNoMiDmr8Go4nBoLErmegV8jokhNSG2vsQ1N9G3d9xvmx",
  "key23": "Vy4ybevUc6kNUSiR9MVBYt32bjEdboGDEsjg9oqbyzD23w8o4NH427aeqXBXoE7wP6FYKzpaR4iWsaD57whHRaJ",
  "key24": "3gSrgJoEnnHu9edY9qAb3eJ2g4KgHXUGaKuGGTHMj8Sa4UZUg1RQor2nkhkofZVwz83cS86Q3coXr4jutarT6YeM",
  "key25": "3gfmjoU99YNjjkYWMjE3mDyi7mbPR812QELMU5LAjjupswVHKkYvwj55Lg3sSTYcDM8TSWa3CDp3SiGzdxbNBdxW",
  "key26": "vPxghBNRNWpxWS4jS91PhM8wBHTBH2zo2YAsUz6QBB73n7tr9P5v5pCif1qjo4jitDthW2qGh9nvSbNcSnkWj1d",
  "key27": "4dd6C1sPG12G4FKQx6QPwggbJEmkkDVzzhxTzCETpyzkxyJUgKPrND6w9yMKoXhnBRBsJkbognNjtdYuB5qWwy14",
  "key28": "59MPgR8kbKL9pD17QNyngpk8v8nNyouVEd1k9kjSXoNLLJSCtYjKTRd5FhDdYYByKJ9U7nBudbNoSTvJscJifX45",
  "key29": "5TfTHnbzNAr3i3LRiZaAs49jryGydgFEqaFNgKsXEs9W6cCzxxKNv5toYp8kYYEnzbmhYocVsGSzVK4kjEtA561e",
  "key30": "21hC9cjGJqV4ADVmF5P8A6U9yPuzQSY17tucQzVYfqaxiLjmLU8rTud6oQRg1zsWZbt1FffEd7WHeHED52kdzcd6",
  "key31": "4t3d1YANkxmYTCFUzAKN7rBSrSdTm8XomvcX2RGjnTpCvwhjGXo3UhyKR9cahNWaURonJp5G9udDickgNT9KnfVd",
  "key32": "47o17azNi6rfrDJZ1TvaY8ZJRGGsngBVVGsAU8Fm3Rhj38QqdEurGQLb4zUNi3hwUbe4U5TNjcFo1MR7x4Q7iGSi",
  "key33": "4UJtTZuXaTcL3hQeDFCTNjFPkjQjFgKDkC3CrGuSLS8E3Syn834XwiFHGttHNkDouzZfW37S9awC5EixbK6RiCux",
  "key34": "4ev2o5z1YgCNUJa6TVTPMdzxKnWXSfewsL9sPdNn4aqV28poTR1XVRC27DLLREaupwrYBh38vDgRKLL6dGkWASCf",
  "key35": "4fVpB3UF1NT7313xTHDAsRPRoaEE4jtQKQw8gBJnY9D6iSpCziRYxSCJYu8GoqQ3rfvQsRQJZuGtX6RxAHcA83Hb",
  "key36": "NATmaz8Dj9sc7JN8cEAB8Y8pM7sJwB5SJPKcU24ZZCSPqPfeDWi6QEzEFF77MEKjjmpECpY77fhNmvJd5htagqh",
  "key37": "LSBBhGxzoFbJeaXdoUxJiBYQK34a6Digzv4r8tzjiPtYTpxfq96XhXLEnPW2NVFmVJCsitikLuG7WqD5cyhLjX1"
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
