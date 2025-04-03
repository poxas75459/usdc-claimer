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
    "3fVJyWgiDQsF6J9nQAqEfa6U64qKUeE21dtfN9r3ixE8uipQBrSyUTA5fgsTjLdGFzcX7eo2asZGC2NgdV8hLRMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtqFu9szzMD9Q95utSqTcrSPCE4Em7TVJWfa4SwR3JdXiW9SW99kdPzRb7D22mmaSVLyv4u85fdnFKgs1qWyx4h",
  "key1": "3zpbcue7B9qA3JEmpHNgLy5FADCPnpctbK4PTV3PdRKZb214pLZWmxrqs4xkCEoFun5QZepiZ1FS4iXTerrEseVr",
  "key2": "2GTs3B9Jc5vEX6XcvpKysdGwGCGdAz2HBiq9v84u43AozQj5eQKisjpWWXzCjqW75dugdiHKD5Tv4GeXGjrFfGM5",
  "key3": "3pjNT3Rf3nhApByAs8Ur9uCg2VXhNns9Pd2pvXWvXXUGzaqpBtysPCeRd3pvaakgmkxBW1mwoHXYKDzkNJzCd5pv",
  "key4": "5bTpJLSgZhsDi6Td2YEggP8ENx3yYWDepQkGhpTLjVJ3zDSACCG2VGYX9jiJHXZXzqgD7Te99i4BpgN6Pw11NBxr",
  "key5": "5fyAJ6yiyh9fcccas1S3jU8E6pDo1bLdp5tv9RWrwFnsJh6XvcvanGcj5Aom8HgtaWRuiXpLi9YKnoDFxgi9mvXu",
  "key6": "42Rgic67NN7PofpaLuG1HmeXxkoPwbyxXNoMEMcHs1J1d9tT5H8k7G4vbPeWmAA4AoKuPn2QcPAabBE628oV7dWa",
  "key7": "3vdwiryzPLSd4Vh2apxpcuLN3EbkPfoUwdcn3vzuvtu8hrmDHGXUzTRmNZFu7jPD2VbMx7NS6GWdpWjap4uk3C2U",
  "key8": "4m9C3tsxXsfJEwbyPq9kxfoWChBdbRQ97mxgvRpY8JeKpQPTcaKeTVmzNZnUKaQb3WruamgGTG4rijgCVkBY3HBc",
  "key9": "HmDH1dd3BZk2JCfLbiv2VpLwqbx2QKmgaXyCexhxbXdRmzcEQKGnJ5MNVbJBUBbEwPeR9W1WLAg1DEjqVWKrE4Z",
  "key10": "23TvWSSu7nQaXLRCjF4vBAEewU4kjoD7QZF38qxeeD76wpuEFgPmhK1Qvvkj2vT8NHJrehXrojViy1iKU4tP8d6c",
  "key11": "3koDKJk3rC4wqfwhQywkypNM6ZznJVJ8KNPdC3PkbcFvXoMjzoCZBhQAavs8bDSNS5nZQnBdcTFJtjw2qSYD9iQ",
  "key12": "5YreqhYjLpmXi9dQv1b3j7Nj4NWt3XTaqhCRcxThqTDDDCNmNUYTiRZ7XouabQWPoU3LTrzKQ3tiVasJfLCh1bYn",
  "key13": "4DyExTMSyQRsbsmpBk8cF1k7Mhq7i2rnscZ94ihnXAoPPUcC9x3iDJsvDu2g542ihCcCLbuMaHeABAgbVjymDKiz",
  "key14": "3vifkc8m6w2pmo3MkcqQbxGbumUdH2RWPgQBdt4475i9EtwhX34eLPZRG5PwtMoYXF7vKjBaXworsiWjcts5s9og",
  "key15": "5eB7A7VjcfLazMk3SmWFm1h9LfKFwhSFqQFrbDrgQtf2giatNNKUDcrXuPbEnkipGfbWitoEbqhCKd8csowG78ij",
  "key16": "61hDKtkYVftTBi5CYsNi7rSRtXvBFZwD12qLm6v3MSTRhu4PfXqqEP5JgiSocomR8tGzfZgaHxhYfMsyfUM2EZsy",
  "key17": "5my4fz2n4Lz8LMmp4Dboi6DmuUBCcd1HdEdqA9Aq91siUCkboRLkNh3KhDsX6CkhheuPdNy321sw7PbBAFCGw365",
  "key18": "bbt3k8N1m2vmWVSLtqW2waSaF4WXuPQN8ByoMcZ2b1mySmMbWBf29SzJYdtbFvsUaS3eeq7jWGMnPgSRXdFgPQf",
  "key19": "3ic5dRYYSgUfY9bfXcxWnDEikwPQxzsYPCao6tjfQwaXjMHXT9GsAPV6cCt6wBxmYffpaFaCU5gFY4xKQF5tCv8j",
  "key20": "4fRakEW3exLXaECs7tKM4UAtA7N9HtgBc7Dbrfg87LxH6GoYEuNC22xfNLrWyGwjK2A4WTQjUc4t345VE1X1vey3",
  "key21": "2fWfbNgDPPX79JimkrUF5kVdRsDW7X1fy62NPGwf8QwDCsFKcu6ytccbT4fmRU3dUdeasq17A1iyKph1Es7qsXr1",
  "key22": "5FZ38G3BeWZyX2vHMRMaoxZU1YRRLUgCBy5ZTeKc5bq9oGTukp5opVds56SdBVvJVt3NtfX5sT6dmW4v23XkHMpK",
  "key23": "4PuiR29KZ8U1rTWZMQJEEHpnmsQtGEfuzswY1SkokfgiuAQh67K9RNSUfafwD2TrNBNVTTqckg33WZEqgLyo38GQ",
  "key24": "5D5ZmCctjLtcRH3yduXxi5JFFvh4CZoj2xgWiMK5RfxSeaiduCdewKdwgcR1ybWW2kyhCywuCq58t5zfnYg5nCBz",
  "key25": "2c5jCKyDfnYA3kduWGs66jdte4JzLmLAGWGYw5iGZhJcj8gk7jL2SWr62bun4sgoLdvUYieQcchgGMMG1z6teWqb",
  "key26": "4gDUngBRVqWUzFQTsiNhP1LQeewvbgZ3NnfsHDf4ZdfRDgQGurjUj9atuUvpzumdypFoaxsDec1BdBzAnSwinE3C",
  "key27": "nrwzGtWkyxQiVWkuapasoiXv2medDBNF2GwpezJztYsLRCzY1y9mEUexgdyYDyWLtoyLxZ2wAbXyaueQ6Fjkb2b",
  "key28": "37XaDS47FcgFgEHaJFT5wbF67HHjBsLJmCAUhaYZcfZuDgAevpAAv8SzLHxG9wrJmH6uXTzr2PgpBX3Ko8Mwsgoq",
  "key29": "56LiqY4fw7FrNayrYNspva6KKdmF47PCfDLgYCtKdzotW2WzXosDm91pNXyspF72UC8VaEX14eSHar9GMCAv8MVY",
  "key30": "43NiRwZyqmV7qL9Cy7FKHWYQ3kMdixFhjm5bzigTgVeyvEjVPZKpURQCYFxf6QemXbfcTh9B4zo9cLojNSEa4jDF",
  "key31": "34mSNsRUZqRHV8hiTCBATsTxjV9XVS7zrPNTpEdJsQmTSdEyxPyuo84GzanPHoeirYwUcooQQSu78544SXVaxwDe",
  "key32": "39s9ZG8oNJEbo6yxFsHchYAzauYZrjnB9pBJdjaRqxnnK6KzdegTx13Ty4f9Jz5CVrvK4VgDTvqg5uwXfWmR66tC",
  "key33": "4T4wTwuQ9QcmSD8PBpB259Xf3nmNJz7MzHoKuwdgrEAH7dq7am3joHt5pUAUq3LuHEnfopSmwhrtC15aL4DeEq4S",
  "key34": "3kr69zQKtFYka4b6kBAf5VR2c5xskhnCEm1RqRK1eqUMhzWLjxDCRVrNooYUFKJsitJjLmzx56Ch3Lzbt5agtbH3",
  "key35": "2gNuPesfxK4ZrYuxii4WLBgzm56xNRSCgQ7nubiJ93kFpjHkZh8e5NFoHnw7MfgdXKdyDPusGXtoC8sV2BQ7EPUs",
  "key36": "5v51Dpuwdy1UbcDvL4TyYneZC6AzmAW77PkHhPQrK3huQG7aQuzhXFQ27B2TqgFLqhDR7oCgbLLLpsffsfS9KPgz",
  "key37": "34U99tuM1vso3fEPfoZXpLfAQZZEMaBprwLBHXbHFPAaxSXHDyJnaJfNgaUWVEqsg3QH5JnMyNgBEfetvsvsCNHX",
  "key38": "3ciDmiKyi3CkxBVFjrB9DLQ2Qe7h8d6kXYDPMoKnruoqyuZPqzPZGWJpgUcnUbeVf8hrEexKzEUh8H8mFemW1STW",
  "key39": "evmswFQSXQM1p51Yo26NANM54jLK7qZa5P6rhXxa3XJLSLjVmtJvh7gGxtssoE4SkPLpBpUrUfkDZnuQY2SnqdY",
  "key40": "TwtcvDyb5pGn9qLVNk6kcYwMqX3RyVvM14oCmqtSGqZsVU2b1SjCsUNkTx7HX3bpckvmZ93SXdaGZmWquvXFqEp",
  "key41": "5F2YSTYGm9xc5u2B4PUtp8qrGprm9YNhcB41VkL21dryD6sgE2H8Ca9qDJfAKFLaHfVdF6a9WQqEimgCMbxF65uu",
  "key42": "2L4JGsGSo99FMvJwSAKEZzy7ZEba9jmJLWf5XNb2eAiS6ETok4ScPZoxktoS9kF5PKgTd4jV9mJQAvT8q3rYTyd6",
  "key43": "KDeuZ6t88rKEeKyzauPmT3fmetzBQB1FcTSP3Df9WfbkEQEc1b9zcJsRnLeMuR3ha193szTmnWzBgakREhXgych",
  "key44": "2w9ikQKDyv8G3ceNVn1b5ZUtsxHHoJ4JDTrpv78ARzghzpjsd4FVRByxi8mreYX1XoMRPDktKgRautbavSzZ29cS",
  "key45": "3UYu747DwoJBV9ifRStYo1Z8jHnixZBwZ9eW1WXpz8RePxSrSjgHKruE4ejos7bZJsSCPgmTpdcm1XVSj68XR6SQ",
  "key46": "221mc6H6Q71ccjGyWSpnSPnv3woTdREzad7zSeKQd3KZFcrNdnGqueTuWETykVmfx5eCebzAcLYvwpcHSo75BTyH",
  "key47": "5SMWSZbpWhCmaVHhqM5uNixaJ63aU3ZN3ahbvLMWNfEbseJEggMmPwdU7TLozRfs9GhJMkta2RUhZsauG25iqGtn",
  "key48": "42EfLukftJsAzmVgE6zFQvEcSvKfm51Pzse1nhv7hAwk4RALzXXvsXxHmH3hnxdz9jgB2Vg7Xev24EVfagyA9XhX"
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
