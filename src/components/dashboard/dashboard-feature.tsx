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
    "2ED47s46AgMPRATWF7afyCmeHi7oLeD5K5B8GRBomVnRGRd7eZVEqgFjybmJUM1mpqSNLNVpwXySYdXR3HhC3rz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4of5qEquUeBb9c71kqKVRwPqiksPPjdixVQBtMjXnwwoVJuWaAGrjCHpoMVXsY4QFsPmA8XuVrfeRds3H7gyUrDh",
  "key1": "3BY2KjS6GRo4iNrg3iozSvk7NNi1i7Hr1aFR9PUy4CgcrTrH1aX7yBmomWF8Fm2w58ok3HDWfUsctsUqMJ7Niemc",
  "key2": "3sDSpho3bkGagfLSCezqBDhSCGgRYGiNXymWhs161Gv6atxtNWvAfU3p9gKeoQMyjeah4yu1DMt2LWyKwtLr9qUK",
  "key3": "2fdbABvxZmPYE4EKr4nkvERXQembc6JFPJKpBNfT8uidqaG3UND4DzAgDJLdJLyMiy5PVXBQDgfRqEQL2q1crmez",
  "key4": "3w8CxmuwdffSgBtLhfrukBxSd7KAPZU316yFUYwvy2SzzFucn95apvZsZHQw2vgZAjTaE3ipDLn9CR7xZXYZXtaB",
  "key5": "51JdGUgprzgzNiysvEAmmPx6dznNaqX6Mzdu1w6Rssd9V7JPXDh4RPWTNDdjPA78KzaCjrtC4FqV6ekYAkeBnn62",
  "key6": "3RtJNE9iaHnMpLmA9dif4GnFCSLaCCQ4GgnoBfK2caDm8Yc3uMT1XWVP6n8bZowCfPPdRRnfi91D35NSqLn6BKUt",
  "key7": "5CHZnVBH1dnepmbou4umX74zPxPADt4mvPFhCnSgG1YbBWny7LpE4jrET49HgcWGUHx1CppWV6L7Nhp6C2LTYP5o",
  "key8": "3TuQGCvmv8cey9okFvxrEFk8xNr2sGQHhmvdE2L5z8hxrHwE26UR2HRJrK5Cu2Zh4b2Znx8u1x9guMiqDAvHCyQs",
  "key9": "4asTRS3CgnyVQaM1UtDo1cdXXRL1f2NC6ybA3noMrC33K81NU8B8vETp3v24Qi3snBiZvKLvnZDLzcuuu2TK1toD",
  "key10": "5zycw5dRVxQxwmwZbAwFxYfhK5jBn1MMdAGSxPVbwoNRJNfZXsgtUjhPhcwDkLGhdA353h1AXwpDJBA6x6y2WrTn",
  "key11": "4bHS4EtFL2s4zvLuUd96K12efXrMyXBWhkGkeewDqHXtVjhTxcb2RSRGXVA6vRRZPffTZ8wdAG5ShHojMWXKoWqS",
  "key12": "67oVtFxsEyKsBC2C4KauT9K2TqFJPNi2aQ1SBivrSxr5f8xbWBrVWDftJwNMgYzc9CtoY8VZYtb3Jb7Ct7WyLWeY",
  "key13": "66zT3Z2nZp8oWmVfvN1NYDLWuiY8bZZ7owa2oq2o4ApgCEAoK6ZkAcGunFKMQC7zWWbXiBnCbb4gkd7mQCTNW8sE",
  "key14": "3NmfxdY8mC3gyGfVRveAdHNvfJ5wQak1HLMKmH5zhpB8e4qyCwsnRrbPR8uYVGTFqwWXxgu5kv6xuKik6EcRs76E",
  "key15": "4CpZtJtpC66pNqPAE2vFuvF6vihEWZoLfxYC4YD1anmxCuvvKrtWn3v5ZUk6GCosjYexfTNeoGENgcNKYufdpaRm",
  "key16": "26uEQWQH8KpYySsHtFE5mKsfr4U2jjPUgHgQixEQmUi5snyd6czAGZ5nUx9gbXzQawJuHNWgDjiH2Vzj25Zk8ieA",
  "key17": "33VGrqdxBxzpgdRfwJ4DUQAZ77HfMbErHhdf3aXiCEcFomvYH4YH1whAxFLi8REsEeKCZQscFEmfgD54RhadrLtd",
  "key18": "4AkdSWvk9rZHq5piR1uCjmT3ygvA7q6irhkxBZy3bNocDsh1kmbhwsNuiVo2xkrPDfdBMXB1PGKVvyqAU6sc7FM7",
  "key19": "66VB3wBQJpUhQyKRaH9E556DHusQ5JqTfJfwhxVstjXhEdpQccUNjsUxaJqNpCAZoA23z9dxQ9u1khuXE7gtbr7q",
  "key20": "2yYZtNGPAompy5bLpZnbxWfugRV9xjEJfwNya8H4yybvPytEfqH5LnqU5jB1GJD3ug3aMkxmDvBEmswWd5VauTmy",
  "key21": "5yV1qpLpFo98ou9z4FqraFeMcDFqzBDm4N5bi8zmmvsYdhvRu9W1vEEz3SegzBzEdHnmXPTFWmoytjbB1PYvPSRL",
  "key22": "4S8MKXwV6sZXkakfWutyBXDNecKXLzyGb2k2gkputhb4nrFmjnfe8s7JeDHhNFm4RKgwtrEAX6eznxNQx6wGCpVc",
  "key23": "3eJ9NMm7jHvK2g9KEsmL7rkyMpJo2MpL1dvezDqS87MRVhmMZ6DyHSq2wmY16V7bx6SQBQaojWdu11vAJNZ2toG2",
  "key24": "2hxeCCBrjwG7WRoQDqFGDi25yJ4jtJafqRwg3sL7Xzwj3iZPQ35R2KoNT2MePRocRkMDketx3bFpBxkZjNMYaibS",
  "key25": "2CyFyX2m2XBPny1vd2rbPufJA6j1w8aNjVKRmCAWR5xEaCkUijnaphvptqKwYMtKekcKzEPDuiGTmYcKu5y4sf5E",
  "key26": "2h2dZQw637NM9D2zvZC4yUmYLsJfUMhmnY9cBSr4TQiHmxUwEubgjCWvP55TmPK4DMURnKuucUfjpao8cSAtY7pq",
  "key27": "3WvTxhVDeJAsbjGrPvcCLN2QNBh8XHN7bxSWbgjKSiba3w3zz118p6iBWwMCnTwNVa2i8rD8UzxsD6TxbjbUMZnk",
  "key28": "2GPMRQfr6hWxQWNF28B6AHcJ2bbouBVgpg5wym6ezMkjZvWYxG8viKM3uW6RKAEHPm2La84oj8PC9mwgWYYnD8Hv",
  "key29": "4bFwcWXUuGdeLqPnhtdvj5i5gAGGP5ibCgUG44BNqUtLYyMrVsjZSbnjCQ8UWMN96fnL1Ez28LtxYujWbRfYBDXW",
  "key30": "656B95RXEKuJspKMktRKvsk77EM1ypKNMe9TS9G2duzGCERecFzKr2EaatKEqmSzChroVq1qNz9zr22CEruFeDGj",
  "key31": "3rVhhn9WXMy3rnEsgcDvYDE36xwsxVH7gE9vFTxAttPxQRK2NRxSCaftBfGptaMxwVaNdtngA5fC2DnYwVSxmQvS",
  "key32": "4nWnvs9iyUHR5MdPUh6fN2c6DaPXyeVTGSR4gHN6roU8i8qJDSKYqmR598YQMdXy9xPJ686mhkS8QVmwn1hYUVDr",
  "key33": "39EG8XYeUocnyWyxJRSXCeSEJViGSuNo2ZgU6TZowq6HygRsn4g9dCVQxqmgP6vow1cmaG4dpo3EwkzPRArTckJ7",
  "key34": "Yj6MrNwW5Hh584p7Lb8cHWRpHi3p5HakqbEfx3eLRVdYw3TxP26QxKvqNzpfUPxNcP2sb98swecQUtjyZdDsAjd",
  "key35": "1JcnC6N9y1oD2p5vPbKLm6KnwrbbJZoJwqsoF3R48e5xt7ecjH5ScczRXHDSRm7mpwaMpgaWErWdgfYyT6FvpHw",
  "key36": "34qr8Qt4h8F5boh9ukZzCqLEmURpEivh4yASsaAciay4F28qi4bVr7S6avnTjyZBVJhL3RCfZCxJJH3Y9YkBM5jr",
  "key37": "2VueWLNV7bV2okZEEr4QJ2EU1chsJ9uZiNKfTfyK8XJ4w92T5nanzAwSNU1FST9opYnxJZrARqS8vLZDYKmBcNvL",
  "key38": "5P2hZsy8nh3YHMVJZSES7Xf3UsQP3LUCs12WWKDzmuwgxzdqmVX15DyGiJqdWRyA3iYQCcX5HETUeTMbk9asHkF",
  "key39": "44WScx6wMT1QirjyAFs9eWenV3eGLewr4As2SNP5Lprjq36r9zDd1BYTwoC1EyTPUCXq3ojr9etjsvtppkJXzWZT"
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
