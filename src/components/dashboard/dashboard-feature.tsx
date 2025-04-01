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
    "4RuzKLD9L9FaySa1u5qaHMtFHXzMRrmgwaAGevCrEqzoNcpwPjYYerGBVhRyWemZPeKJAKPA1apbexdue71xrzMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcdH8rapRkpaiahwWoNC2Cb2Q6nnZ6URt4gMGVDo1C6Jkowj2u4sigRZPLG38JR8rzrTAfgJG9YunYJKZfF6xzt",
  "key1": "Qikg5hFq8AaoR9NpUUAXNhVUyMyuxKakuWeFXPh34Zgwxjukd9rxsZHZFaTwJtrbyHX5CGVbJbZM4HPkZQNhKFy",
  "key2": "5b1wVdS9aN6krg9phUUmqPaVc4pETwhXAR537KjuwUmWxgUVJ2uPF4ztj4q2NUpUJQ8Rw3q8DAyh1oALDDqhvVF2",
  "key3": "2EmqEBJLwQiSorwaHc7vSD5uuamiFEuyPskLJZm9FAeAMTJgXUJGwBGGcK1SBE5mu5nMv5jTiMmBTAdQqDraeJQh",
  "key4": "ivJ8zQisdZZqMqtYthjqDhLur3vpVy65mb51Ar62nwVM7yDTMtYpRyiTE1PyPG86Hhk5CZR5L4rRaAstUPdmJY4",
  "key5": "5KQn1bDVQVv2zY4uJ1A7HGWzGQRHzFhtyi5fGQo1a6YWC2m5P6UvQdgReWEZ1B6YED145Et2b46b78HUaxfzuiex",
  "key6": "61qAcobBoRyuTH8BS8uLpxdj4gNrzYKGyrzBQZVcQuZ3V5qM4usD2rh1sPh6RkLNYfBDmAiFMy5urYgJDZvkrdRE",
  "key7": "2KNvm9kVjhZsSSBag3eNvPmmy3ihocR3e92FXiBB8dweXNcUjqp5ouJCDf2i74zpzHYHBdj5D7LUKrJBmNiBnCf1",
  "key8": "3oRCq9SyRUHCnxuUeCBKWrmkhXLmRUpGncQRx4mHKURug3V6dRaoUzgACnFni7RhJUvNmhWYTVe7CbJmtmHXq8n7",
  "key9": "123kTureMQo6e2jUCMGWjUh2K8fy7d3TTmkK7guq6MSt38QSvgCqenoJHHumEQcyQmNPmUpFiCFVJUdHTLuSLyGM",
  "key10": "2Pb5FV95jMDEA71X8MjwMsL1TdyPXMW4QbLM1RdwXpMFntPphQQgMziHFBLnwdtmGeA86MzSnhmF6h9hhaV3AqP2",
  "key11": "3aGxZukw5ic1ruqPTGvTgND4C7Y39AYjta2Gw49oQP7RXNkLiLWSNra8mLttK87uqHuFJzfJSPULyZ45bTvt4gFS",
  "key12": "52rF6XshW5QQQMQLnXmRh5fvBpCUuaKzGDQDh1RHxFjG1sPXezC7R6PcG1gXHhZp7HRQawm9RLtTzVJSEaNGsTcH",
  "key13": "5B2Fo5eeAPipMsMtzNdYfpRo1A6Zmx1dXhF2dQZLv89cKiWmt1eU738ebrU6H9Go8W7p2GXpadtNn75hDyFMGgbe",
  "key14": "2gNMXapK8DKW4Fs64sRHc8JYwnpwsvJ7sG9D6U6QJUSRXcmaVbUSt7EDx4UvgtkQ6nipjYJ6ACiH2PVx6g7QDek6",
  "key15": "2BjCnKd6TWHeehAUJaYabWzBwrXpvBCZhPV4Q8iY42tnVW57sXLzm2oTTJf6K7UC6bu7fstGrZZA4289FaqBwQjf",
  "key16": "2jtHAY3qJfTnyatdVwEXTW7ba18QEc4MWCMohWYcsyPw3xDnZa6nHe5UMYmamRXgVZRii8RZbZZyHaXsscQERztY",
  "key17": "2f8FPdfdTSyppUFWtntWWcYephrWfnqMZU7XoLWy9gU5Tq6ZBMm3nuaZogiRpktd3aovGFBp8TTvWA5VB1wd3nKL",
  "key18": "4rjrUg65JrJhCfjzGC9xFvmJELDf9qRA4mKax5gjkBSjvriDXcuUNp7HRC5DgXdLxo1ezyW4NXnRC8ZM4hV3Te1J",
  "key19": "b9RUDiGijuebqfuvp1Asq3Gho1sLt7kJnYrwRNi7zhSMTP7hdsvrEcKZw8VSRor3KzmBhGd2s99SEgJ263fByBo",
  "key20": "ATj3HsW2bVWGr6cvZ1wcQMJuqKdNxEbVv6F2UZaLQWQwH8dofhyGhsSFBs8w4BCXKoU7JigVXwnFjhciHrSABoW",
  "key21": "5jBgWFUEpgty8Unkpiiur5TZUPXE93gsqBmogQLmBNHT5zSN8JJAf79Ua5vdjvWns9HejUPdQk5ZYGSb6ga7FVBv",
  "key22": "DUfaddTmAoBmPY9iFDXkb9GT3ctocu3pZFfBxTFXWBYUyKcFdihZt9hEAPsie53fpo7iPaUqQEKQEbt82QgxsTC",
  "key23": "5sPejpEN5Y6Jmc9HJARc9D2Y28xqibTQnjcUaeB3SmwbUmtvgEveUJnWJLnccfbTq3YQRQngfM5JZrGwHbyMW2Fo",
  "key24": "5fgcfnVwRfvnwWUzBvpuvpsSAjetReQXQGgbH8hhQ4ZYdVynpKqsBb7ajBVy8bj6vpbZ5yw4GpqaqmFeZXf3mk8L",
  "key25": "4pjiMhYgyZdZgrR7KDdfKCfpZmAu5fFF11LUGyetLHy9mw3YyfJjpyokxvuxwAAriXq47yEy2iy8pYS2JiPpxgXT",
  "key26": "MBKUFptdcv3UQnKbNeoumcNQN8Jro2ajr64Xdt2ffND8kGkVZXnoy3QWPRMhE8VpQAoYBaCMMYaEneuB4pEwYDB",
  "key27": "4R9L2jrb1bz96ji52VcdxZSynSYeRGLZb8Gdv8D86pffLgCneDP4RXRo7TdGDLvPuqF4VEeWanGRLRcM44Rfz6Tu",
  "key28": "BZyFigyPLh57aK8Ni4bhtcRr7zdNEtm3CruNvB5Y7gUthkJhTfGhHEiDdi78ZSLxA1f4AyvXZ4L6iEDtK5eVPfT",
  "key29": "RBAkgVhs2rUXTVkBXNR7s3wQ4rychgBbMPQsecVafTnsV9vcB82ykGqiZmZT29rbd59WYx44rbB1e6ZYhRBNmu7",
  "key30": "L5dqg4JrQBmmUtrMCRd7LPLffPvSR1qdDtnQHLb9a5SwZVtBAcviB1CjjkGiyBHTLSAcCy2cuC3PXZ1p1RfNqWL",
  "key31": "3mSwBNuFdsbN3RXuEWscuTuVDk6u5egiMrNxxjQYXM3ur2zDTpdkd2A15uvXnqTcUmaNdDWb1J8hnZ8Szc5xRnwy",
  "key32": "36vzFWyLjkE8LqXsfXfRaxwr8NNDvYca2feqkRyGAimbXweaKpzskLcBvwX7rPQV9rJPVPH9y9JGb195vLau2DGv",
  "key33": "2BsD1DTRdwofE5pp3gSmQXuw9fqAPSmLsv49yFwk4nUSALiZbzMz9T1z9cUmx1Zzhy9j4io9vV84ebV6nL5ngo64",
  "key34": "5gCEqh4RsLcXALghCBtyyUUJSQ29qToYtEASYtzJeHzLYLyoHuwYNH5msAso1fi5G4fm2AVgMd1H8WMpD87JxqKv",
  "key35": "2btSUyAcH63hhQ7KRaCK1BDs65wrBCKH6vtciae1RJ3GR4TNkbLLGDWQzz7nnFyEKrTziPLtdJsJdJFgBmAoph2y",
  "key36": "2EyfoDgUKj85NCNrXAoBzRLHtcNpw5KACr2p58ou7sBEX5B4tNQWEGeAy7kwNC3j2XrnAxiLsXA9AzpnSYspDGnX",
  "key37": "337v8Pagw9KXhtCywYtneedEqiKPvLh7BawEVTNSWSujwE66qGr1XfnfiDiWjE3NTdy2fGSCHkPe661ZgfFtRHU",
  "key38": "J4FFnmyZNDgq3ZHoWMaw2FfcUXKgKwWu3Li12J9iFhwMjCY7wBxub8h2psSw9fkvNAcEh5VY9GSJCV7LhcEoR28",
  "key39": "5FGmEo1p2PCMTdTX3VWct62Ur84nbT2bw1K37B7JGt7kjNthC6PU9Ak7ex9Aa6Bcb3q84abfm5ruVuA9VPoapemD",
  "key40": "5YMXCzQqozz9GHt1d1Bkxznf2V24FAsYjYfkd12X97CdHevJvaaceUyvkbRBhvd44UHesMgcJayjhNgtGNm9wx97",
  "key41": "2xJdorsLyE3HVMnFjeMcGTw1fpde3Lt9JyMGn7TrTsd1oi58UsK8CvSA36334S4MDsrLdusqbRrbyZjwUSXfnBKR"
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
