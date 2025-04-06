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
    "5ogHFiro6fjUBSbM8geArF6U4RgxmE8Hoc47kVfkbfjrvcAF39XD423Dtqy1sd1XjASvm5AWh3fkp4MkrGfwoaPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EFDHd83PUM2kyxuBi7M8iaZvxg4LBqq2NDfs7PcouLDZA6tNcsKpax3TM6ztTpiMu7P7RHoudyFmGuErYBdExas",
  "key1": "55gD7mSWXrJ73QMioJN2JHAkPMiiNPmAsEYBv3DZhkYsVVYjseY4omrenbhRLwX5f6jPQvHMZMY3jJJbH6wnkvjc",
  "key2": "3pLXxNJBfHaeFrorXNZcaHpAQY2DLeqSeQ6ScJzCxpiXbHkS3fz4rz7ApE1HHHLEMLjt2oHTVpgmfRNcFzAYci1X",
  "key3": "AUYGQJFbWdFpGNJ9StcjnsekMbi5zTYrT8YAYzwvtAxkwtTxFXMKHD8ei6p6hxavpQvNMjzg7EkxqqJQ626FQC4",
  "key4": "5fktRzeY5Abem6SACmCtC5wYqrFVJgWZaAegqLqR9HCbhQMBtJDPutDE36sqWAcJHTtWA8qtzarCx3Eve1LK7Szn",
  "key5": "2DaLwejhsUnzkKrcumwk6b5KQyVCCPGo26bbWSuctxusmw4HkmnV6SMkwPvLqkdSvtN9bykzWDR8eAu8WJgUE9vX",
  "key6": "5QW5nWbgcN3PLgkp5GDWjBPQBeEceVAtmPAcgaW8BvAeaxTHvd998fqmmMVvdiZAZX2iREh4DDo7pVrfbwc6tDxE",
  "key7": "2N6Wubb7MKhQatQW8RWv3mko1LD81gQdZeK1a14M5RPAmDLJ7nRGmNVcA2djx3iBrZi7KA8DCiE5aRbM9sASmwwM",
  "key8": "5epBhB294DecD5gC2XZsNXeSp8LxGgM3BCZcEzcm3RRKphXRBXrjMqvy1htrup2pc5qLo1s1kDFpRE127TcrL87r",
  "key9": "429ZWAQVHkzLDDb7Hf3QGLyhkrdbVRcu2oFXVQzcXpkXJcJCEsQRLi1hTy8JUFd6wJvM2NxHC3e2xpJatVNWoAxQ",
  "key10": "3YgdBRkXirDFcdnLFwqMgdQTRtxeatM63zjCnB91RKjo9FdGXYUFFWZRtrJbJ5spWFUDT13c6wvarcrxHYmG2hn",
  "key11": "2gYoXUutcRn3zV5ArBnxWAqbaG7bqe47Vmbbdv3a3FeULfUKEfucWBKu9yxwB4JcsMd9tdFExDR2P63EThBoTibU",
  "key12": "2ZxDHNyeDTSRSMfHMiW9yP3LF5BkSej36GMQAJj53fRbShc8gyr8JsY1ZAanoHr1FmYbWLuc7fyUvRHd9vusb5or",
  "key13": "2UzuV5ANBFExp2qhbdfwxHAoQAcHdJ1M93fPEjbMkJVjrFfih8tyF3ZT35FsN7CW32Tc77Wuuc1v7UMCmy8XBHJ2",
  "key14": "5Dgcf24jouzRT41aSfqmCDUeKBEiaSzmEJ2t1mA57XUBSQiDMYYuMV3Z661obVdKtAHYq6UgXwAKhFWDf1hBAxDD",
  "key15": "3jPPzw68UnEGrZHATLDGF9UwDB1CV9tqwX9jh9asxzqK9Mfpmfn31FAtSsvYhNQBDF3YSfJSuQLanYNfbnZKKmZU",
  "key16": "2A84gx89LLJg13AdtWd6arcv1ttrujYeYzW241brbzuL8ADnGh4qpX6komzp63fHEFtPwYit1grNkr8zN4YQBrQA",
  "key17": "4gxR2DeyZw8taMDBoDjiGrKDejjLu3LHryf1hYxE7beJTD8x1ZSRX57XfEFsPj83fF52M4mVtBgjjy7PXmSeGSmn",
  "key18": "2cC5sPpoWJRiu6VrLcWEf3abcDAqn3dgJb9ueT5JH72AJVHH76pPH6114ua9yHBxUJLJLJrQQ4kWby2mGsi3poVr",
  "key19": "3GVisHKb2tyTUpZTSXoLPgWNruVrqF6vWVgozzj1eB1XpmY76us4xEnuLetuSADppDDaRkcGTPaLdbCW14mK159N",
  "key20": "3VNt3RiszXbpWRbG8KU82v4YgBtxMoo2FyWKc1NQFZ1DxSkyVsF7Es9S5fczfeuPgNS3YMjy3QC2HcGXhwpb5Qv8",
  "key21": "3snq7usca9iMDM3M8xqHUBGY2PCCreTJXyBWbo53Vio2V8GLUVviyftHPXgqvJPsqPW8Nvg55WqnE5F6KCyoZmqd",
  "key22": "4TXXpMEe3rinf9ABoXDJVxo3nS6V5he9TUBaav4v6sW3Afwpo8XidXaGbtaxuJmi6tXnubxcBBzWKsk4DuDtq8N6",
  "key23": "5iFsz8XCcLjpTxckKbi8s6F6VcPoiG3bk92R96QmypFbdNe5f5JezhG3igVH44g8fWXogAjeQnrsvpqKwubd6Mbr",
  "key24": "4L1ZoZeACBJ2cyz3rYhWpQ2pkoYpfALLqez1uGuAM1dXfRPY4CRHXrWFNszD4Y4L2ig7rkGwXRRyfEtryzRC46kT",
  "key25": "5uGQtPPmSJJUAVekJeATe41uEYUf7P4Jgr6x6KxkD1p91C8C8ckaasgKDHFJC5mgnjc6EmAthJXicenbMPMRWsqC",
  "key26": "671WFGzpd8WJA9v4YYRKVHikEeqXenbQDZB9icGJ9tLr3nQ3oz8MGfMkieqM7J6ibzVD1VNtK6LvhQVrRFfHSkVN",
  "key27": "4k5qb5z16ZuaHTeuNpPbdxVMQEJiJ43mtxsF7GEDJXdLkiCEvTRgBdNPqWUR5TK13znfMrad5MrWqenys2HE26A7",
  "key28": "5YwVHFa1Z4aZzWURCRddq9S91QWRLEdTzSoQiZZfB1cYa3NSnG2E8ikiwdhbzZY59Mhaa1XYieqcp6dwGftbzMUP",
  "key29": "4oFMeSMWX2n58dnrQ9WtTMHtKsCuidJHVaa3LzTRJq8hpNRtkNz5rBz4XFVRPH1K4o5GiuuHLijSRjkZm3L7Q46a",
  "key30": "RU559LZak7c71c3xm3HGZV69rWJG4Z1pE1Njv7SAGUA8tBzhc5gwNuHD2TTc2apis1dWuuRsjzb3fNSjBGqT3b4",
  "key31": "3LWtvewPWprpCpXk7FHcinjuXCyvmA6nKti6JNeQv59EL2CyQja2ahZevYV5s8jXsnGA3wffUom2mZW81UnhdzXB",
  "key32": "4RtyK4iK2LnC7CtVTYAUVGwqsdBttftv4ASi1F9LQQAkicJ3hW6aAkFN7sdcGzWBQktzAFLA346eoHHPkXVBHQhg"
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
