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
    "3HsaFkFkHDKcBeEyeKrzpfaGziL1FXLU7d6LiPrTvK9Zr2A5V2tVBzo6F69TJ5sYqfEKG5eg8fojyctNydrXepYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnsk78oUtdrTFN6a2Heq5WpJpxx864huVXEYyu1z1GddqwruiX1aB1f7CqkzThL541yfrVg8hjwSJD4iwzKskY5",
  "key1": "L9M51wFTitcuP1JsuTpcWsTBYEL8MXv7g7Hs3GTHozwRPa4L115Vb584GX8zmY43SK2ZQavowxN3qBG62fVi5Qt",
  "key2": "47vKDMaEz81LnWvXWfP4pRTpzDboPLwwhFJhPj8BHXyQ7W6R27xgsDkrnJXXNGm1WYnEx9obCucgSXPG6VMm6SrC",
  "key3": "3hmQJSXcqUf4hdvt1pZ2JRYgPoisb4BYhVk6o3ac7oZeWGEp2mMKBKsCfQAKMF1jF228EHjJiYvP6pnvPBdUsxsz",
  "key4": "4Uf8RsSw3EAasWUQP1zXGLkNiCEyfnD7KpCXe1ZrpbgtEMVPcHCwzfSxATVGrK7Ltxuzkynvi8e8Fe52PiFTPnSm",
  "key5": "5uRCCwvNUNtd65FrnXjgm2nir9A8qyPonbr15g3CZZ52ZF4T9vBXfgvxaWt8LCB62zUqdKDfXv3p8dGmHABpR9NH",
  "key6": "4XerZULeusFbpAhGLkzwqUEKKweeX3RTYKdQewWYA3WTfuTC9crrd9vYDGHssjMQe6VAie1n6SfrS7BiNvqg5vun",
  "key7": "2ZpiN28Sei4UPTjFCjU9AVnkpAjTMjqRCarTtLG9TEPufs2pEKU3iquXFELewr9fAmLNLWSrSsxPbpLKzY9r5XXx",
  "key8": "xXQZfZhuYAfFXTT6sWQS4uvwSmAmc1KPPLY5yw7LL2TdLTNadQGFdyMLTSRCGNipCWwfdwyzTvkRXNNMApSWm7W",
  "key9": "6eyNdY3B6JsaZ8VsAQyire99oSw6pahnCmZVKMZHFuk1yNerLQyZtYn8zRcPigm2dwnThhsLGP15JSEvqRJXL5e",
  "key10": "5wnR4Cx6hsEkN3omTkWtmeCE6fkpjyVM1CiFuc1DaYG7GF4Vc7p54ipWbtNoiNDo47kwmRwkzdn9426ng3ZPFRpv",
  "key11": "F2XG26MsiyAkETpVZcr1pyZf1DKitXLZXGRZprjf8qUUoMnhS8v3UhncwCbzFcj2V7shiCKDVpwKNHLKvee9wJb",
  "key12": "4K1XnxzswcGktFrMyxn5i7dpA9HbCPXk6iYTnP3E64t4iN8SYjUAdGsCwdpzSiQX2oEDYtwuYKPc89WjiyKbXTZ8",
  "key13": "5TUmtG1dWpBVQ5bpJ5QenJgCYtdFw9WmP6ifjVwziSjHa5MnuNuvDdYnpyNJiPBBTXnWQYJtaHaoC95YdY7Fdgqn",
  "key14": "2oBBwmKbmSRib6HYMrrtJkqJnt2LJoMP4RZeVZKgbEgjpP1rzr3qZpnEWgV7PMAh6sc5GBoK3qRY5BHPMbzhh4wk",
  "key15": "2khvDUhkWaBoMobJvg7Kr89jq6QDukNiRzLeBm1iX9Drkk3kBoFpsjuVJmuRZjZwdEYtGVAV5Q8CBqV9rsmtvQpK",
  "key16": "3HVLyvS52iZJkczF3aBzqVuk9hxyd9rNYbQDxMjQh3g3r9RBPsjepzFMhb54imF4PiWxzbktq98g2CVbrPfrwCRx",
  "key17": "xG7UCRfJFWP6mG8NJPkoAw14W72gJ9bgcmoVWxpxpBKLAPiUDQN3ArCvbHRkswJB1MtMwRDbZA846yJHMf7zkWk",
  "key18": "YoLjuNECnT29KX7cmuMsFtChXsHcJ7XZqipk7936M6y9CBFNJgz4gP7M5uca39LiR9EAnhDEifucVTs3t8ZMBye",
  "key19": "3yjoVLqJxJpPBce3Jku2mnFHoeMBok1EzWM4medWRNYJVoq1GHKWuVt3Cj3QP96VLJmVA8v6cyPTUkrcUbEzuFfQ",
  "key20": "4YMTydiUkx1KxFGRfitLdHZE6am66YmJDmwKk9Rbvx6UuVAFCh3utoDeMwaZHdDJEkbdWHJTzdvohbhqg4ZuQSwW",
  "key21": "4Q9qs4KXSWPNyd1eZKAqk2CWzEzZABichs4QadbVGYDwDEkvHJLvHQntTEC9peeMnrscSjNMdRzSW6QVuqqu2PfC",
  "key22": "9n7LqpAKxjzWWFoRtp5urQfXvW4DzeUUuXCC5bqwrHaUWVRjE5UybwfsPyWFbnqJwBLmXL4iwThru2CzCr96zvk",
  "key23": "4U2vE8AGQwgYy3odw1CarAPrXkNfHTW7LVf1JvuMYWxVVv8J3xzXkDV7aqzqupoW5oeBedYfcBf6hNaadoByATDn",
  "key24": "3EjgrmEizFSNE5gpmscc9e4gTVxSxT9S3kZtwavpJskpaPW1Ro9UhxeTXwJig2z2BwAX7dTeRMVPZGMmuKggcDq3",
  "key25": "26ugP1n8hK8kXbsh6TYePiotCepJY6j886nncYuVCbo32EVGtyeNMbisSiHgbYNgcNLU1Jx9jLjshTRssF8oGohC",
  "key26": "4S1DJsLNb4nTduaEWX1gswDDzEz2soQVJ46KBXC2Vd28wNh8WL1YKDn9zyciAad7pEWV2fA6C1EigipLjbCd9uf3",
  "key27": "5PyRYNiHRUkcJap4Ym2TnfYajHxrgAPSJKyQbCjUtesP8XEhJRTNdCtJeHfQ8j7gqjPJj3fNEuP8CeLVQuVgR33s",
  "key28": "hxfWHncEBsWKsPUkk3aZq5y2idXNsf1VN2ZazA2Nfu8rNx1fmiwUgN6tNiz3h5sGWoh912ohUS6fahwZ2CgmiaB",
  "key29": "2dVDCRBCxrcvG82cdGovNLoXCZ3J8RhXcy1YHmgWvvGk5yBGxZeS9M7dosNmphwE6RqCtBDQuW1fSGBRmEDrXKbd",
  "key30": "3AKZWJe3uqZG1Keo9meqjQubPhUaMdmy9hfuTqKRr5PUhLHFJ2BLp2rrFC6hDK1sddKVWYGEEBhES2xDfPznuswG",
  "key31": "3eqMiz6AucCC3gBgXnfMYckGBNFYLrfyTigemUFJJbVFw1fYvDdhbf7Hc4vRTpsLFaBn5TPPmLJVh2hj8H7xdBey",
  "key32": "zLiqBxPad1oMGusMSJn118CnCdzF5AhqSeogHqK3YZ6M28V2aAATPCBm6cfuE8FqWNmy182UQhN57fPPsS6Abk2",
  "key33": "5xVVAxDe1UStXBa4jjhoKcgestxUufSS1o2A7JHuzB5LaTGPUBjdUWvah1UzUDmHSsHK8WALcUxEAJfJC98Kqz43",
  "key34": "VAg3ZD1mcbULxfFCKNMBboReEJzDxW9DJKd6DWwbtbfHT18bH6x9UkbUBmBgTtgN1K58YMCfjkgiU5WTdi8B1YG",
  "key35": "3Ky8PJkGf7NjJnkmoxACHLft6XTaMeQYcRwrprRvHS9mRVqSDW2YPLGzGpmCKPXBCRdHd2B5PGNi9snQQVPf85Qj"
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
