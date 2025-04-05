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
    "47Gxu29Rx3cejhp2AgK52LM2KXvJEGQsKFqQkqMXpWHckHsmFkvimgcCVRho3kBz8eK6EFk92qwggfrJ7vmnxUg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22h3iR18VDrXuBUtsDEsbV3sh1iqFWxPa5arYPrgJf8r8az4Gk9KaXWC2b65QsXtGsf89WViau2t8zdif7M8Sips",
  "key1": "2DC8QuvXmxgPFE9vbApbfVTFSfw6Xg6JX93DbZ24x9PbHrm8y4gYg3pmx2c7bPyzRAAuVgsyk2cG1DzdxhE7u3DJ",
  "key2": "4UDg2B6V9sSA6Cudmv3rjwm7ksWnKddtrBKdsFhea8ziPXoLhKaeh8uncrv8SjcFzvLNcZQE4H2kNyKp9EQfLHpB",
  "key3": "5j1QMHWDvAYzrfMMCrGxVpgnoe8yA8n48j2km4YDgzA1u8SvTQgP9pFFqmbmTqfKy1kH6R7wSxaqPQR475Xmhkh1",
  "key4": "3E4BUuMXHJ7PprxAJhazNPrSNNrVmm7FfYzHNX3KYdpzgbwS3wu37b494FxTHuo3ojLPfuUSx3qwDqrXptaCir86",
  "key5": "4sHun3K6p3Fp2acmH8ci1G1mK6eCWJQXuzxvJCtyD614Pc8ov4A5McaD1txizFUpTYToSDugnWRMekRe4H1sphjp",
  "key6": "3WMg1YCY6e7am24WFcNv2fAiJvjEe3UGRUF8hUrjLHwP36o7EDMeBcoyjuDaVvzwDr1Guv1g772vbPSCJFJDy1dn",
  "key7": "4w1QzFfKjnVY3exPdib3H3DMYg6ssnDAcqVhtQM1Hkmjq4T7Jwis6Q29MNpbcEi8dHVZyJsXL1CZKopceczwhd5W",
  "key8": "4JjzBF32QbBJX22zUUcZhLHsNW7B8dC1uioNA9gDuwydvRNDrhfvp2V31rEss9r9nFbxcL7QS3EwjBg3XwYf9RGm",
  "key9": "4xJLqospyYmy4SKr1gxbMopbhXYPoUDe8nwjnxbuANy2h5rEt1jwzrGsa2MVrpESw489M6LgzKK9hkDHfnyNXHdZ",
  "key10": "XfMy4kBJua5rHcpZeHcW3js6Sb4dot4zEZEpExRgYLueseq7vfc7AUam3SY1gMFbz9ucbAEbFVN6Jw54H1r7vFq",
  "key11": "4Eb3dAhMESaZSgj8KNRmisBiEZEy79wDYnW2bS2d9A5zsYVHEmu4BCS3gWRueKccKFneLxih4TvGJ7oqViCjaDnC",
  "key12": "fvj3DySu1wo4W2C5kQTCP1GLdiHauaGd92k2fcaUuYjHKFwPrqVDECRBCokFgp243jwxMLUg66cGHfy6QQvKYgy",
  "key13": "44CiDwcffViYs725thBARo8canv2YiHogaayaXVsx56BwxEoBLRQFzDWMptsACNwe7dDiW3Ki7VrNiZRBTALdKkL",
  "key14": "3WNKzDyA5FDPzpeAAhqY1x7iuFoSb5P1JrqiFsDoKsZVSzY4AyGxpHMa1mxwnuSHMrVRo7iZUmas6iVjypXhtbHF",
  "key15": "3Bw2ujLJRUheHAXLdHSmYjPxCKFH7Xgr7j3XrG6Gp3m4Uz2M2scSsM8aZPDuVaYCXPZLeLgoRRNFWwdadbqtc3D2",
  "key16": "3bDsqdJSdZEmd4N8dKCPYkfRgX9mhEyFbfoy3ooDDXihZGw6QSTL78LgkSwFFT7qXngfKLnDSuQJ8tkRzASxkNwv",
  "key17": "4d857dsch6Rk3Hn8PMgYFQ3TD44RNYsSqQwwna4RRBZMhN7HH8HHtEC3UuXnf6WY8AtspT5FGUHg1t9XvBLDWyvq",
  "key18": "4ttYA3exHjP7EDPjZRn6MAKy7X3Ac8hx2KTRoYKsaEdkSL9Pwb2kGLuAPEpF54opfhePK7A4AQcFYHGJs8NcaydD",
  "key19": "5mcXwW2fkvWf1SVFjBPdHbRfet7euQrUfBF2yBqCBMG8VTGKDegV7s2d86pQL931zRTkwg7SZvgJNuqZ45F11fbY",
  "key20": "5JmUJ2Yif3zbM1hzZeeQfrSmPLzQX8tTNcff9iBXPTYufUCXQUxrcKsRCJn12GGgmumbcQGmofPGQAzqA1gj59br",
  "key21": "4iqwLCGMKZvDw8grtvDYupCe96cXAHioxzPNVf1GPZEeqCtff17NpwGGgXwfDhzoQCsh8mSm6yi5VQTK3CbtgeF9",
  "key22": "4JXLjNLD7wFqQv2VajfHhDjdbxtmuKsrK3HiAAHCdqmGruRX5o2g5xAS3upuzdpenZT7AR8qPfC5eLTPFefHNtYt",
  "key23": "2JixZ8i4RMGjDNHtzouXhnRBsSB8smLrs7ZCrbvu96CVtQspxrhPJ1aa9eNpq5DXFMv5bzHHG4H848ooj84vvZR",
  "key24": "3rve1VmgQ5jJsQVXmY7PtuH4VGyhTJQjEcmGLt2q7nKP9Xc3WQwZRVqb3kw3NMAVxjZBqhTgKPEQGHiW5YPTyL3G",
  "key25": "uSxtMPvAiMn5e3qcDNqrCxZZy4ubB1gxWNvvU5NZjHqEH31BwN2FqaUJXUVjBdvwBkb3tTC2N2GPKCVuVyhXKKF",
  "key26": "3z4cTVPofWCGUhEgzVTmuTuLrezTHKrEUmsA3zxUGueDAPMWfaALXjXxjtJ7bEfoBB5mKa7nmQvW8ifRYNKtedEc",
  "key27": "ttFaN2nAm4izCg5Veo8Dh4tUmJFmqdc8HHieHmvDc3XbNbDPCf9ANdkdjys7t1RehBSLbdjEeqvRkEVqqEUQrck",
  "key28": "2V8ZQoNVvRTniWbcBDkzSL3osLThBxbLirsbBDcSKgL4uT3FpRGXvFgC21icyC83izngia4GLbmqyGpDus4PhWeV",
  "key29": "3MegSyTXJvtxFH2SErbFC89LhmrspF5m17ibyX4AkgjzXwkSzHN4GjkAwqvwvxmiwrNqNJ1hiSevTecAWxEVgQAd",
  "key30": "A1pTojarPsTSNyeYeKqbQTvQN9PvkRnAVzLtqLdwyKXHDDHNp515Vhg7S1MKYtJn3uo4PacxnBZ8aogfFA1dMBh",
  "key31": "3S7EUtmkunQN5JNsDCbeQR7j1AuxjyJdw58Zt4md7PMhvFEsUrpxvyvURY1dRvgoLfn8WvToSXYpotPTtseTKUqv",
  "key32": "2LJ8cWBqzCsNbG3noS9kzSVB3CHQq3QbYNL4g9G7WwEkazo2t2a44veuTeKpbDoj6zFpUjymeNDgrFf6ZmMKjcP4",
  "key33": "4DcaKchRHYZJPdDTHjL7syTLjUWvmXNbqwkCbTknxxHQ2MecnnUX5w3nehWMGvefb5DVCT1wxoLJAsGRCDFoLeR3",
  "key34": "5QWxDg6ELcz5144rmTK53MYTDfK5XbYrYVjmALwXHqqZEcuXpVMKXLESKvBB7nDZedmHLbegcyteB3nRLcNCSZTH",
  "key35": "5tzUPdyArdu5nfHn4cPL5Z2nG9FmnKjWb3CMXnCJa8TJbqXVgMksucGatNoqWzG5qB8xn88fN1skRcQoq9ogCp2w",
  "key36": "52AQbPo9tLnTpgdiWe4MJAA9vxjFd6KShUukJnSFius5aruYENeopXNy19fSSjc4KvVFbLvxeH68y78HsPhrccaT",
  "key37": "3Yaq1KfyJWH5C684Cx2WCeW2mhxBPamkdC1v84qs29Zdk7kUp7oX7Yrhz6Nj1snsqfcGfpqaNoamUrLwoLBVA7jZ",
  "key38": "4Xa6GpuXMm8AojfHkx4jrvyz5u1G6FJ22VbhqV1xwRLkJNWQ6WUrnQXw4DSmAMjgEXhgK5vmb48wYpaAcgsW9huM",
  "key39": "2BB3K22d1Jb2oW1bdkiC4ePWJMRyh582yeAp3Zpb6dRi4u81UnhoSDXEH2C7BJTMTTgr7H6jhTiABhxd9nuXV7DX"
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
