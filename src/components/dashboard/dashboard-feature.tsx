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
    "CRJC6wra7ozkMjdDpeYgVuVXdrRzyGEXvHULzXVKCL8C8VGUXSzSVSMtrtYJbDq9MD8L3sHKL8upbiaB9916Mgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQefkeERjHZpEJNb9pdN6jUk5JgXeFhn32EArAW1XU4jD65Wp7sQh6vt92q9kshr93KfTzqeLf1wjFbdUKeK6oT",
  "key1": "4hsnJSGvUHanVkn91T9vMmeKWqcYyBScwdfiMwN2WtKzvWZU8gAkjvMpuSG6ub5Hnhfnghj6VEvLUg48ePgoRJQm",
  "key2": "3bSnM713xQSMfLtSZ6MHMyR3rGDC1UsjWZ5MT2WYMsnHgJSLpFaaSSwVnXtVuc1qQeSdNgqZspcFZZy5mQggwnni",
  "key3": "pukC49KcnjYmLF6VJbX95xurP2fHXTyTM21siQxfHnKTb216phfhszAzDoz6NrswsEjbgTzSHsJuvorWonzD7Nr",
  "key4": "3s5JcbgqepFm5vEeBiAb86xnHDKtYAKPvbBUUCqDY8mnd8moh3A1J2AQ8yw2Q1sdpT3MfKFT5fBgYQgvXdQgrwck",
  "key5": "36XS46NdRciCDguNMYqjJZ6q4hx5xcw92KGSWkU5zyMR4tFdZejVmntXC8cN1tZHXHpPXXA4aPjdhaqnuDLEAbWN",
  "key6": "5CysbWHb863DXFz8HYWRDguBdauQf9HXrurwAsMnemDKuwEs5A9dsAy1XY5tajzrc2byAy62z7GoWPxrH9okA7du",
  "key7": "3CwtDHaQ1r3XBEL68D65tvGWRPJ3THBN5CKNm4s2QLGngya57bsRqFZ43EdFZFosih3F2ErGrrKSXXJC54UZ8Dad",
  "key8": "21aynDwMfXTULb3MeEu6JXBECqiXof6ujNwcoFdmhdUdPpED1i2cV2H96W9c5MZVxqHN5Uv1gcsZwMRzf5keRz5o",
  "key9": "3zidcHQ43h9deN94eM6Bq8gXvYsXun3stkoQuzTmSfEahG1UNuyFUbsCqM4y4piDx9MufAzqqqXg7u1LVGCde6G3",
  "key10": "5jrBtNm39U79egZkDLeT4TGQm3wLEnRq4ao1gouzAFU1QkPkSCjbTjXB8buAZgzRGtnqifcC7iw8nKEa1E62k2oA",
  "key11": "3MJzyb88u7GebJYEAbYpc1p4CBhxznmGBnwJKycRH4G1nFvWxBcjRZXYTPbxTYUNLrNFPr7hBqKuvg47d3DT2TdX",
  "key12": "2TRGAL8Kg2FXfXR5c5aSBBJKMFnZzzFD5GjtgAPH9PFV8MgoRJ41rnvuEwfbuy7XXzfi3LsAzM2SNecjFR5nkTCv",
  "key13": "NLjEiezm4WnQ9srDBWRwdC8isNshi49yS9eUgSycxWk7etmbVARF7otvvKiBK7gjMph8uVHXH6BiKhsgUiXDRMY",
  "key14": "3ursVjhTZypRkVXPp3snYQsdd4fySNTpxPYASNxpKufKAeW7WoGfgAbwoHfVF2RQgQHhMCoxBegRe6PJchhuNtkh",
  "key15": "27uQngYLgpeVFbYNnDijZ6aE53pTbCdvfkANPuvYyFSmBmu9eZkeuVRYcwweELhPxtD9a1BvRaf2qdDir3VQLGXq",
  "key16": "3MshSaLDcFxCs1E8b9k5n7R48nvy87aqLRapxEnrXEJRUqXoS1rJqzznEWjEh5BXRiQfgNZX8fb5Qsk4GyFsea7k",
  "key17": "61Wppu6PdiG8yzJNk4nLTa6raJ4Ni2CSyYjptNHFCMk1B8jFxao8NUZzt7fVRSeQvpnqfMKxEkizs4NwhGdx8Umr",
  "key18": "5bLEaj95q1hSVFPFU26TzBDUBEXdaynRK5AS4amYwk2Fjc2uNctXySAozwhGAWP3FnoYtge2PkZLT4VaRVjQGBVw",
  "key19": "34RtEsQTK8puDx6LarQfrdiaBw3AxUienbLGtV11ewmfdWVH37KAivQWbb6R9TPRYRRCWFG6vKEdTNegv8krXXjY",
  "key20": "2D9HrWMHDMN8savCsutfAHFB5uMwacwd3ZkpyZB5pdJ6SZNyqzZbQ8m5tiz42oPHiX5C95sRW7AMAUyXozKdARtt",
  "key21": "4iXickrpQzFqS3F67U2EnS7v9R42aSvfGsjnx91D9wyhNaLokqZktMMkWTpd3sGXiJnCgQcHcnqxnXCaiahvPc1L",
  "key22": "51sqrLmWFZxCQ2kZ4Lst1sPxKoJV6RyqMaSrAuchvXGa5nogHWJ52SopjBDqfUhqc3mogwcL9LqSamCsu8eHoU7y",
  "key23": "5ohKu3DebNrvFp7soXTGN3uaYGtncqzhpf7XuHTutXmbeDBibwF1TKxYUpB9TNxG8DFCREUM1edxSe2ZGvcytxrN",
  "key24": "5hq6YcZRhHzv9YCxydEgkmsiax2ubnrSzKrrjB29pzBZhqwnRLbgbPXWLot6meCaJrgGh9btFyvPiUnawciWAmff",
  "key25": "2PTwdWizijV4vbZukETPxKWZaQaBhocg5UfEDS1oe81G4UYM196XQ2ZHggWB53PYtz5X958nahsKyfWKNMBEvtq",
  "key26": "3ajt7Kha6hvQB83RWj23dAArRDGTrGWD87rEms2Y9kLKGVs8cWoewLujAGa1gvLgagP5YnKaV2oLq129xjW2xgX8",
  "key27": "3uZaz84tFsHxVsMu1y4ofzYdk92TBNYgnM2SWva4XegE2W9nAAHsjnWVy9D71bLmUddy3Sv9fq4udPmivnaMBtYm",
  "key28": "5XGrt2XQeG8FFvyUL61YPwPeMCNPzSCNAXphohZdeN4JFy3VDQZUZE1Q2J5ZUXySabtEeKVSoTEh69yKTB62uz7D",
  "key29": "5m5Q5fvvP3jh1H8wxwMHb3DoPnqtYPGkxqo5zVpg8abWaCbgggiaeh9N4CGTTPDE5HrPqAuAnezBbGKojhEviXBC",
  "key30": "2t3eddrL97GUamEso1U1k3nwzL3uxoWaKqVLp1RbPBZ3ZkaVoswzzdkFDi6aTHkHyAwVeXMnznArM1MRkPymFdSf",
  "key31": "4Rry2A6mwPWGFzP2wkKdqyZsVr2ipTJ69jZ9veQgWG9TH8M2iyJQTg7yy5i5TYtW2nWcSAZCFpnjnd3QFaiQjGaZ"
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
