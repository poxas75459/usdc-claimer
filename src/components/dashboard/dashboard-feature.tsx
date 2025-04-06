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
    "4oFjEM45QHJ4FaA6sXMBRJjtYKZ5rjYAbRHqc2SNJvAjCa5k3GnNj5QkdxQ58ivgFKiFdou8DvbGGRhK61g8PsVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcMuvK5zdFL3KhNuecvc5erpdQay5J9GVU5ySjQ6RUBenu3Wz4PdsVTwNfbZ2XMAc8XgmPbbYmMUx3CshQe1N2S",
  "key1": "2LsajBzsfuqXvMxPJAGEudNGc5Xrbcjr7PWHGFHdLYewKZeKkhzFZoRR2DTtRGDMLMqTaeiAv1XdpaK7BGpWKTGd",
  "key2": "4fz3c8zSmKkqEy97GhoP1cST9SPgjkPEm7rxj6NAmAogEasdy5D1sPg88nGYoNPjF84saoc79nnVbuQ11mtH6FHM",
  "key3": "2SZ1F17tC2bQSkeiDxwW1PZmfpK5Ev1MinXQ3quSyX8nThukE6FG4wMScse5eNcP3z6MXUr2zvkEVyFrEu1VRUAh",
  "key4": "217RptiPPkYLvkg2TjnvQJWYw3mdTAeaDfVyFvLqFWJL99ZXdgFbbyShFPjUjm8sNRXxZBuz3q2KEraS5rPuQnj4",
  "key5": "2HhzZn7Aemmdw8qANob9d1Unme5XNWTrq6sNVQK1y9SwkTeRNnYppg8cKnx7td7TRyk4695M2eitPjpude7scwNm",
  "key6": "4Bw8NKLPmVBbnsA26g2iok7hAhuWstff3MMytaJYi27cx9MUqP5ZobiPi7vhZmaFfAbdBCtXJzhAiF4pmKktADL8",
  "key7": "5hq2CwxN5my7Ztv8BRiTRau7ToFTZCApUhx2Rw2vCPW7aTvAGwW15L2WZktLkXDwZCWJH7f89okdU5JdiV6eNyd8",
  "key8": "3uX45efG9z6TegN8mn5rso2XCt1tqPrM6mAGsYwPiA7z3dZ5acFAeuYZfpbCcUNwt7jwjHKMWYt2N6fAyZE7FGNk",
  "key9": "ogPqLtbtfQrm8Gty7GcJy369hocCqANsoyWWJpsvDJV6t64oSnLg6Jk8toeYwJEvumVaCddCA8EGqP4tVbqH5oc",
  "key10": "4kvamEWY6C96vMZX9aFMPjT5hBzu2LjiJHaKSL2gCsvL2ArAtmkN85rFu8XTQhw9Md8M3QAGEBtTmHtoLiK5E2dm",
  "key11": "2Jn6ti3ok7T9iorCKJYm6ou8cFQjjNHGrvJqetSqAWK8Eh3NagwRRKapfqZGQ2nom9sjoAtk19HYr5eH2NgbqWZB",
  "key12": "Bdi3GApvnbmiRx12KqvqDX8ogefUba5LsqyENaqApnHXw2KdbgwE1qjir7UWsD42Tpw9UB9Hetj9UQi3vJ3HqXU",
  "key13": "2N4BgbgjkgaJK3cxKgbRKHx1KswZ9oHXiWtJkF49jvNrYpGSB55YTaaaa9Z7VeybcPR7B6Z2XXn3qydfrah8Gyv3",
  "key14": "36GQBXvZPfecatwEbHpHsermAQtq6wGuPXvNvCBgD5dzMYF5PJVr7uxg5DvDzLknn1SDEjxwhhxyTT7kvNEzav5a",
  "key15": "TyCjrWWk3d9xhhKgvsp5DPDeKzH6BRqf6Hi28UkDD5iBmjjQBWgjPDLZbERdt2CBEijGWFh58iJUZfepjYVzpvu",
  "key16": "hvSdRzjJiPJpFxegwmTRnnCKpMnX7C2MTwwDQk5w7rdtP3Wn3rf9CYFdg1AK1yQyvYDtB8opy1tUsqXyyLntqWn",
  "key17": "4ztyhaQKZhw4HEcU1xzYtMM7gNCY2AwTNmhQ2YLsCWwF9jpLY248sJTRkQwGbZ4t4f792pB2pZMQFuRj2ktqMdFv",
  "key18": "2sE7hVHLQmVqBuTs4Pnr2e9oTvVc8aZkm5kNNm2upSSeBEPiprqJsWz3cMrJyFbdNtSFa3kwiDmNMFLLKQJDfiLz",
  "key19": "4AjuquUGba8fDXRnDx35mhbGBWsF2V7vQHpcMUDhRAVyMrFGWNZaEBH7a3CSmvvqHVjTW83jEMyd4QFbfZWmNhx4",
  "key20": "3xmhVQpLDDUKj7vUSQGAiXr9EHXMxiy7kfZG2rQkbDj89t9kJRyh5VZQ7xmbxvuRfxJyoxP8vT1Z6BmhQYCM7UpS",
  "key21": "aQ1J64FBjVQKLfnvLUpECKcVjefz8g4tnREayDuosTSYBkzFxNJiKooouVYXvxzGS3CLT2uBr5JcyMrQe76Cync",
  "key22": "35HRg9DpGFppycJxcfWUCkQp6QDkXoMXtukN1oqCmKNYWL51zjo9dhn3xKo1zRDG1bU2Pa9shKBfWr6WWuiyvqG9",
  "key23": "2CfSZx2RG4nYeZiXqdb4K5JrqsB8znMCv6gR5SzWTSuAV3FT1jdPiT763yzx5A7r4feQfSEfUVExnL7Huxa73QAS",
  "key24": "31KkwMMcz7WiSv1kESp73LBw2q7zaJQF3pDog71KwbXm6GDyA8ULrevN2EvagbDPpFyScmktRNAK5VZM7ZVyQs3k",
  "key25": "51ZZCjo8uQ59PqNz7mciQBkjjTSVb44aiGKi686ZCpUQLN68SSm7afgESur68QXs7p3jSefdKjmwaXQKbZ6W9fVj",
  "key26": "2U221Q912SkW8fqFTniNKuL5AcMjM9YH1YW5kBRMe5t2RJX3ZRFAt1HvZ2RHPkEw8NisdVSCCwThH76p7VdUDjZ5",
  "key27": "4ZwvS3HkKjU3yrAuJB984C5Upv8ujHnKx96KyqL5YCUMd5nvBdbpMwnGsPoWhwm14ZvdcPGMFFZkmYjeHC8RRbf5",
  "key28": "22XstU1Cd78GgLSehfup2XrUu2WNjqwP7bDKF6SGAyPuZ8rARRMKyjYLk313qo5NmzK8M2EYH2togKpPa3mT1NdX",
  "key29": "3RuBcGFrLM51oJPAi7A65KuBVMGoDGKLgRBznU9eyCA15TJnLnDVNpRBS6xx7wkP1UnjiApeF82jGweKuMPcFDx7",
  "key30": "U2jAMnChz4TZwTVG7ZnxuoYDggomjZ4EkZFuArtHG2sR4KDaeYzzaqVykuE5nhu26ivXzKd3XhfYAKRL2EYhW8c",
  "key31": "uFstFj9GCYRSMkGYgnoQCsQKg8arxdsZM5DfARLKcVxyoD3DTRcBFWvsvhoStqCuZUgD8Ziyx4srFq3cbhmho3G",
  "key32": "5q3p6smrXrTyJKkcm9nCaLB2tZ65RrfBxuVmgVmNanCJwj1WYU2MHEEersQo6meWxbai8eDUP4DhTgwAwk1csMdX",
  "key33": "4TsNExTTPQfSZXdKfhe1DkRQQTAaHcRi7Dj2pTEF36MeRjhqjFUex6Neyv2a9Acmcim8tpHR41aR7DSmHYin3yoS",
  "key34": "4RUq2PeJqjrp6jjb9ZT4RMNoM9vA3C8XFbRHyJF1uxboVQmWgxtMc1PU42ghQ2f8Ws8y64KnxbkcHr8YaUVCeWu",
  "key35": "4NXsSReQBCswwt1dD8ptAxgFcTv1PgD1UVSNkHmFVcLgUCw4zxpLykQkAMpDhmQGD5iQcbYKQeapzvt9nsHmveYt",
  "key36": "BYS9vEBvrUyEk2xoSpWQ9SQMQkbhARysTe1qshpcdnP7ZR4JqWRZUWpHe2k7CcjETDixaUTNdowsKakYeoAidee",
  "key37": "32DMzJZ5ig7LyWiKikxA6iWaUDa2yjnxyBMLNNyEPNfjckBUdUQ3q6pi8xRtXZKfT8CNSrD6tWH53Kzr2iH2h3J9",
  "key38": "rDw3CHz8aoFYHbeYXo6Y251KzWG2p3xb1tQXEbKMR6P8sFpCUuifzoJgcz7b9yRJkV7oPz1SvVVtntUJ5Dp6tEo",
  "key39": "n5fjZFpdZMCsv8nVG3fCTCXDRVXGc48DU9wR11MNHgnVhNJkaqwRQWRbKNYWcKLgU3qvFZ1GqgVXhETdbG3SXtT",
  "key40": "4H924YcecFPj1BAy4R6b6w75i1HsJNDq2K8VKjSar9UJmgUAqqAwdSxEXq8dRwCARgfZ5RLEMVubA7npqGDNKnCx",
  "key41": "28ertHwDz7mscD3tZnAmkGEUiqXf58poFBHJHPSMDhfM7YWQbEzazwhCnMZdaTAucKufBwVBrBj6Qz3kaV4uZEtu",
  "key42": "3qXcN4kpwzoptwbi8JRW4878ikPLNaLoFe7BmkCAokmM5sZZ7USHH77tswHzbMXkZGmX9xvv1LFSrRvXtmDBqZCV",
  "key43": "FagSNqATogrEMPLXu7AWN5HvKFEucjZ4HG7XXVAUXJdD9HPfnunP8ETVCfHEaWWU95grpnkpzx5oBdB95efaiKg"
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
