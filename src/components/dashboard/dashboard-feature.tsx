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
    "4HmLBgLL31TFUZuk9SLdBbVw2N6hcNDiTv8gdq3Vxp8YG7aarb5qVSi9oxmWUanAMEyfJobrRPTQBW9cQRNLbcRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46VRkLJuyTwPwB7JjU9gqsmKmj8AswfDjYV7unqch7GEmrVsyNhndJkgeeREmEf8WVZSZG2uuquLns1F1PiHHoPF",
  "key1": "3ibhmwqdrdHQVh5K8dvXwjMRZrfim5kZ6Ciu95RQecuuTJnaDiKY1EAYVdrU9uPAByWPq1uqr5rdNiAqFUbLwavA",
  "key2": "57NFTQEaiSKSEn8JvhfoxPure2Q4we8szDTuSuGhpz6pTpB7goDjtAgK4ha4Loj9em6pR7NveqVf5UKakXzfZodb",
  "key3": "2b2gx2vWLwWsHksneWL5SWJpyZ5Deucc4JapYGpAe4Nzi49JZ7sHCzLAx41jJaNFNjq1jLeRpuuCxBVHUTeFMXgz",
  "key4": "3QTMraFZWtxzsKmSkXDmn3G9f4Y6tK7Tms1qKVdaTxfEHwpN4YB4GEaRGHZDrb6eXKoyTmtrxFmCC7gzwwxcdFmC",
  "key5": "38DWdhogcQ6seuKTbCWRUWRB4H8mCKMwheB7wGoPCQxUnQfLwkBc1GvXCAMopTSa6Pk6M7tGyqmkj2J9TXQfBNov",
  "key6": "5PSdxr5NtHeSspM3aak27bsezPiaFwQ6Q1t6bJZTj6hMaA64NkwAy4gccpEDyvhg1zajeKfpwfu9gB74s6PvH6UQ",
  "key7": "5udjxZL3jFmfWQxMGDcbCasA2ZqqzutmaMADq4dk7Pdo5hnZph48R6mXMD6pLLbUJFnXrvfq1EJv5EhARzc55PMH",
  "key8": "q2zyUbMnFNhWTyBoau1f3gtwxrw89pMs6ffukFLVqam5spVRmNe797PzaZxVz9wVzqK11MuTY23qutVYv2CBb8D",
  "key9": "2hba38oE9hpTG1Chnnsa5tevPmavZGV9JCHUG5iLX5P7hYaKqxmX97adz1GiU3Zv7ub2dT2rJHCUjwF9VHTG4Grw",
  "key10": "2PQQWmSjUCnGR3Fp3v8UpVuF9twUkepKw6fnKz9ub26xredqVcqFU3dCdf9u7sY7xMMXQ6y7ig747d7kh7BKBESn",
  "key11": "YYKMJKB3JUjppWm95jYVm7wLBXsLA5SonyaSSSq51rdkMJ7eSYgxQxdB2quVhjww4eS3taFjHbJiFj97ZtDBTVD",
  "key12": "3pvuiaBoV8EorhznDQzQFv8R89PYAcFNoARsLzMC5HZT3hJxZAKabFD1auMFcgJfTU9RfccMyS5YX4u2iAeF3AR1",
  "key13": "4JaU5awACiewL7JbotHvcr8nbZfWvAXwLFreBfy2KHUs1SUJ7rK3t45zwLCWVwGBskyB4Bq9VmMEwWoo6NtkkMHT",
  "key14": "3D5xz48XABPSoBSx7ViEGqwqTaHyfUDFVpfzCTW2cknTfAM8NDtXPPm514xeUsjnH6pdRENDSPBcHtUdW4FSyZem",
  "key15": "f8XX6bUZQdkPyPszsyUQaFBueFrCYoYVVcK95avhb59FbWgWB3WYz1TDu5Ua7bMQXCbYJWvvX9mwrCtNSDaAk75",
  "key16": "5DMJiWN67DTCKVhGSXoMa15vnuttvVQWuTFvauxP26ixNV5tvij3GZmfXdgojoV5uUGgGEYn2QvnZzwdkkRVig8f",
  "key17": "49E49tgVXEjudBuB4DpUhRg61jcZrg27uhYPpWrfz59isgMUvr2etMaDxtEWZxqYKC7R8GMpPEAfeHCkG2ci3nXZ",
  "key18": "4pWgR4qCp9wiJx32e3G4SRY6g2RqwH3zF6reSiiDeoG9HLYPwzaJwZT2MuKQYyMNnNKBTVBVFGfV3PSxi8MHRxWj",
  "key19": "4X22DTtRyJEErdY3Dkhij4ugALZL8YkDjvS7hk7ZJbuvALT313Ab7oe8DuQwMYHg7yyDsq7qAnQKJVJ8X9u4tPPN",
  "key20": "5AaVewNrJRaTPbLuUVDWEamwQXHTD6Q5TrDSdtHFPXpmRnpabb6z7DWdiGVURRKbo4v3sn9n3ZiF4u8Njv8rrTMB",
  "key21": "27kDG7ehLUvoe8Ekx3HDLTpo6KKW2TZXUWbjVE4T7aQ9hMME4svJvuMNFH3SzwDM2J3PQVzQkjrG3DnYfcUNoEWE",
  "key22": "28ySABLJF4LqH33KPTPWeWvFwwAv4nsU9FX9W423mmHgzL5wJ3LT3ZXv3xKqLNYchQup4Y8fbSqdTkEbU3Gws93E",
  "key23": "5L5a8stP7ZHsY86rjhoYT6gpHevs1vzLhWN1KsNAFmvagNSXCeY5fiXyyPMhNq4JqufwvSNBXUbBtvftVUYurGjr",
  "key24": "4rpKpTzoPRnnS8V6Ec1ucG1Lf6g6X4GFcgJuyV2jDkSy7qJHVibJLcvxE1TYTPZh3v14bBtF83cSoJxRhKhD4L7L",
  "key25": "PGhKdcm1JitTg7Y4MGp4vNsD2sePuBBHW2ePLqHhesDiiQHGuvMJ5heynnDwZzLhxzX7pg1RX72ujMsY7kPqoFf",
  "key26": "2WdPCH7s7KqNm7TLpx6ZhwSTwGF8NhFAajeLAdFWQfdfVuNZyFnsrQpUeFZurAWZXGh9BuRPHetLvyha8mD2sUhW"
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
