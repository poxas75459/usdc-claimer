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
    "4aRksFRBgaPn1yZi9irBbfBR2iev8KDe4skHnG23hQr4p9Gf9LiHRdMSNAiMs5jemxH54tqdpbJF8iNsSHqcDMMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i9LPmJb7AyXyrJntR1K1uMQCkcy7FCrNjchCGVXxivP5QnM5AfE5gd9zBY9kZjuqbgWgjJk44UijHmUoLWRhCUE",
  "key1": "4FFnqHfwwb19BFEhSD32e1MtWG9jL9HGAgpSTFUBqKWfktpiFyErhMH3HjQ52RXYthnqYFL7F6jBSvJ3T911bwfm",
  "key2": "2TCkW1CFWeVRv2rVpgCNs16XvZMAU3aDjnfg6GoMBJdFQDrfHs8bhbnq8Gye3LYPoqgSZjN79msRs2PNQAnjzt22",
  "key3": "5E8yzN5KwYdGALjAaNWH6oYdyXsZuA56eGcgnAkscY4TfhQH6f4ZNHWFXHvKKhnEATt28rMEJ9krYeJ7ryiyNigz",
  "key4": "2eoxsvHSLm6ja5vgmTUYjj8ow4HF2ujhe4aKtEUSaBve4Q4fHz2obTSZfcqeAUjcfgQ834hPfD3snzAL9X3fCLua",
  "key5": "2Vnsic4WgSsMghtpATT9BzDy1KXYyxc9cm1yitUsHirgUQZno3frUHjnr7NPYyLDWCvDjHi8bM2VY6kKh2fqcUZr",
  "key6": "3h8rvzBVcHE6mWZ8C9U9L7z9sKQTXvyxsJ3ooaZLUySJsJ83dSbCGtHD4Frb3twKBqLc6LgzR7Wsa2aHkfKKER8u",
  "key7": "2RASxPZnU9nb7BFHijKNByUaNRMvQ6orZVWr51B35artRZw69BeEkBSMHD283AoJ9UNMyCrNYTPHue4ZtjTnPWAe",
  "key8": "5GcXcKCtru2sdPe5F3TgJo7zzmNWqpfJvGWuWcVSoSPzSEAduocSS2xq8sq9fHsjs4NqkV5fXAKha9cuTAuRLwxG",
  "key9": "3mJwsaj963ixHScjcfhcCiXyzZCvzM654jFZDEuexAZKSy6MfZePSj52rmc3eHf4SYvxi6NWG6qsWG4VVWwtPyAi",
  "key10": "33Cds7bGKKJJfmeMCNzoL6K69G3hT1Q3Ca4komJ4Lf7E8DBiJEbcpEjoHrQ3ZhXnYjNsgBAiDuwaCwG39Etq2nCP",
  "key11": "4pzJrE63PsweCpk745hjDtEvTF6nk1xGTtyrdjcioJTmzfgj7jc3GFRUbFuowsFfvZDffh1VvJaEWP7fKwedgKWd",
  "key12": "XzeaewzCAm2Aj6ksCHu6wxYYQL6Ed9kUpAhGrUQvAdk6KohbdU3JPf2Hk5tTwnpbLhMzBR5TGnonvhYAuKYQqbo",
  "key13": "33iGA4Sroq1HdT1wbeQkfZPTVoZuxps21FXbBKr5PVMr7dgbRTpx2m1HYAhh1GnP3VWotwbd8ka5pHiipH1yqKv2",
  "key14": "5ZAe5BYsDxZqShPLW1QYLTwCFXa89waXbAEnwJWw2DgshYfbF338P15iL3UBApj7VLXingLVt2Uex7fiiwPk4tCv",
  "key15": "2eCLf3MgN4R96FMiyjeUNBgg64SxFc5jxa87r7hEdEXZNqKx9YaaUCai5FtnZfBTUeXriX5w1oEiLuZivMB2vSCe",
  "key16": "5izbNoH6pSGpUD9Twstd4krYcb25vfSLomSw3VjSzjM9feW2mxNcS9xqi1NXxxwAqfrTLC9XMrcpB2bAH9zB1keG",
  "key17": "3EaB6MyXowMPVt1H76Zqapm6CY1aVPHvpKNwSh9Q9J7M21gYquHSDebUPJ8DU3DakfxtEuVz52UGX8NYfgkYcdcY",
  "key18": "3FsgpUHCZBPyeHrzEVML3fqonUAvxHoJuH6zubJhxg8b6jYCdYdWfgurKBskUQdCdbUocFYdVzMYqeHhnAgZWpuY",
  "key19": "Kkr8EfAbnnsdQ7jKyqVa9EeVyFwXcF4vccEE4iVAdVaPi4ZSTu3bn48py1sZPACy4edjWcQtMpnU84rmJHnBnVQ",
  "key20": "2uCk9z6xiiUksRfCVbbUghJH87yzEmaJKMpP9UkGhND8a6FTwLLrWaKtjB6Zdw12NX4StZJ9HF27LNksH5vbayJB",
  "key21": "5rwVrasXQypqnb5B9dTbJf51LNa9yXWaXbWSg3sgq7bc9A1RLTJSXgdoUjScgehN96pWYiTP8YCwrtxxUZTMahU7",
  "key22": "3brPwvGLmxUtHdQHz8XN5SQ5ovUNTiUtaS42cvMuiZNzkPZSB4KFvoygdVdD7MBMRPs2mCAAfbNDsSoqGwCfbasu",
  "key23": "5j9TVXhy6VhDZj59bi8KGpnu8JaoLeCrTPqUFBE9cfUYTeqPWw1oSCUv55GJDjWJCKUTWEpqZqYeiKpYoGjZZZux",
  "key24": "2rY5hwPYxJbCB6krXtUuNDTRUtqn3JwnqjJrMrcQE1ww6g98XTB8FaJKy2Lfs6zuZyGHQL2mbX5UWRN4yBJ8xgst",
  "key25": "5zpvMSDKE9nYoidAmyom1CuCCyUjhJjB5M594cmDtauAzVZ9uiNYgbvK2y24M2EXJDSzz7roGGrb9zfdRqNEQQFJ",
  "key26": "397to8xLnXcfhveAkdcxSJJut6U5faAnfemTPrCaKjTt6M6H4sFWnwBS62bw8izfNfxftob2oVhHbw8Vu35Uejuc",
  "key27": "4qhjkMJccDoehVDtzKQSKEUzCuXd4hQF5NXmpFAPuxJFgiNqhfu3KJq3stZpM5LtP37xBsn2ZsDeqtApLGdronhA",
  "key28": "PLLmLBzZ6eYs1jjuEHoC64fpYEQ5CeXCKWsmhRA9YNMwD89Xx5fpkgcTUow8KfC3RWHHC86qjC9HmRBrWDqrZrh",
  "key29": "2PorAkCxU1AS7uVRm5Gobae42MUxhU2tGuD1Th2j5uJ16gMqeoBDY7Sjj7ThAzSBiRPvLAPQdRDKkGa6QYCzEJkM",
  "key30": "5ZrokM6jHaYDyWx5Z4Yb65y4UDKwNiYGJMH6nwGfZAJTygRCNTzXGsJFCrXBSijcyc7zkkbgSnpFt4CRTTgkxwBv",
  "key31": "2uryD7p9NaP35uayq1cpGHd95xifr2gzuXcVdbiSPqFAi9bez76ZPVURYvEBtrVVWocbnsWqMvZJFZBHddz7Snjz",
  "key32": "4YLCnkMJqrDCRHz1BC3TT7aHZmfiTZuMdkdqJyMuQKe6EB1ZgHpFKykLsJRBYJSkCSBrmxN2oZay87ezUmj4msVb",
  "key33": "32gz7zBfhGVsFK3RwgPuazS3exfX1YAQcXNWbTrk9xg8eKy9ZR98KzkC4yWojjTd32VwZdW9TptWfgmJCTqijujS",
  "key34": "2nAuDHbRb9U7ULZ7RdQSbS6M5B1rALkDGNLuWePVkgeCaFKpVpsQReXed5uMFwpdFaKXxwrRn3khMRFPMqSZpVtT",
  "key35": "qHqKPRdXe8VSPDQK68693UCo7MGcgxpnyU6ZwUt4MqMxfYpUgWTq1X4b9AjeKcSSxnHepGxN8KbZxnTvwkxXZRL",
  "key36": "2JfSXVr2g9dAvVNai1TAMgvwqR2saWZytWcUM4NGVxnYnrvk2Gu7mkACuRyhgZoU3pEeU26XKBvNGwbBHFPPY37V"
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
