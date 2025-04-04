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
    "52P7vdHoFXeYPj9cXMxq7H6N5Dn46BR8TEt6z8XnC65JrJvj541UmpGjfc9XXzxdR13cTWa9qTiRFvZ9hRSSvn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mZEDKGVNo6gC5JQa1RJAqHEsMGdGfmeHe2AFSor88DtV7aE6i7medTWbxkn7GYCBYVctfMVDegDx2rsSECiG1K5",
  "key1": "5rmzrKcduK4GUUizGcKCaWTX6G25WzB6vjAtJcdXkeVuddpenFaNJivkrQgwcR2Co76tpezWWroj7tGmyvc2AezK",
  "key2": "5QreHJAU5BdbxTfGAxvybNMSGHt3ebijkFi95W6DNjvo61FkBraXxkqD1wipHoosaHDQwJmuhuEp1BwguemzdSq3",
  "key3": "5J9euMzFFTNgAxyND4Qvp6QtouvmZsFiBAW4PLwG3jxt6t7W3sv4RamPnk1iZvvfrtmZ549r1pAbHMhbMA5mrSFG",
  "key4": "bHcbPj2W94J6Q3XHqH4zo4LyFaQpDWVGC7J5BMEQ4vPZpuRTk7FWxffCeHbUXfkvWkcztwTSpkHGEHJPQYbNPdr",
  "key5": "2vfTgJrcpLufWRTepSKKiF36oEiAD2WMgezjDGKau9jSnfHeSaCyQsCYV4sekLYsuPzqm5JbQZ7KKsfmJicKwews",
  "key6": "5cjLX7DKFaGvDpbok9v3z2ncADWVvABhD1quwYR3BE41FooMRc6JuwBqnqjnfLpHrP2ZG8rTgdzv6xPiodYGTVf3",
  "key7": "3ucQqwDp3ifZhEL5ngA1QqHin6ok29M3siwHitSjnaydRG54XSwRk5GJGe56zEEe9tyKdpZcr4RSPis9bewu4LPN",
  "key8": "3trAEsY3iRjNaFEzfTPVsZnXEHz6oo5yWyyDJcu6X2psynS6eFk8BomVKsN8wZdS3w4Vj1Gg5zPKgjrWzS3hR7RK",
  "key9": "5GK43KTTjCMHJzSC5XTBu2rf5h272sRUfMc2hAXgWdr2vGfg2GAqA6o4SFS9BPRwtEeHT36Ng2B3SYZtkDj65rLJ",
  "key10": "2dLMgoYuXgaoCHm94h2gV3AweMzVWEKkQb7JRzpTTSd2Kn14LfdxeRS1ouLFAeYRtGEPwwsPUnMWxTZiGuaXGYWY",
  "key11": "2xNYwrxrkQDEQf5Bqrw8Ct5NdjuVNuJbTZ9NtnTXAqW1bW1kR5AAZQH227xvny15RoTinwN9Bjcv4RU365aQgU8y",
  "key12": "4HP2wGYn1ETgYPqxfyvTXq4MMqRd1zRP5BEW56wg2nLSjopRY4HbVpMci8ZdYApUPoBXBTa1kAM6bZLAwCTyop7N",
  "key13": "4dd3aXMmDNnqJPYDRYRhJFxmemrCRk61yLJwXSuh6oHKyZiGhjCcWDSLaLBtfoonGAftzt6z35cjXFRBmnrSkH7m",
  "key14": "4JBBJo7zCb7cdLVytPfQ3ZujBG4bLesUgMp3bwtRWvdcxqxAA8wd8v6jaCzXqEd9mr45tDXyyB74SwneDK7Q7Pmn",
  "key15": "2YXAxpD3Ygw7TVvMeLqjWWJEoXF2VRfEQXqLUHLeF6r2sWjdk8VfXN3fS9Qm3AjvCRFVLZpcCsZL9j7VT5FY11Zx",
  "key16": "tkH76jm2Sb7s3t4jLk3SjwtTBap3UEb756VbFRPoyoJwpvkmJ6jtwMxjw9iHhhDhZjhjbe3PP7oHDtE9woWk5Wc",
  "key17": "36mnEWRaLPekbdnE9CyafgP2fXkTETgFtR3QYxJjWUuDMC67PhVdsivEii9kVxThg6ou61NoMBASVSyWYDbMxKUC",
  "key18": "5QBA1kjwcVxY1vSEmDRain9cMyi6idQELzFYtmb9aKJDTPZFqCLUs4gEEjiqC4HVvjNZbnZEfQ5d7bZMtybbq3Jh",
  "key19": "44d18Ki18f5oKRcbbS2Tj4v6mvbEViQuhqimTCubpEQ9eiHxJat9Efff9KymAU9cAtDGrvBrbperqkUwP7fwpBEA",
  "key20": "2YLjcLEsMughmbJBmKpvp48AHqtD6xzFtUr2WTfBiGkEMYxkPHcwCcdjTcTwMKWr26wuDXpvSU6HKPvyMSqWMgKF",
  "key21": "GyGYrFbjpFiNioiNRyQ5V5Mw8LSKsyrwQpv53SMsTwsa9iz7TpDPcMt1K8rwFKws7RGGzTUf1mCfz6kBckW7PRg",
  "key22": "24HZKsNKK2nzgS3Ns3etk566BnAWozwaTUJQXNZLoib3TpK7R81ScSFoBPfpGGnesKNPxT3zuByaqKzU6dEYiLJi",
  "key23": "2ayqsyt7RDNZHjgXQi9VS1PpPG1i72hDqLkWqQpWL6Svo1btatdtLBZeTxSY2JkpovgqXRDZh6JPskbs1EvrsXFj",
  "key24": "4E2VBFxvzXPGC2gh86Wa9kYP7CJUgT3FfncXJyUqFzC6DofDZvz2CrMCSzqkUQKsPKByzYh3cdtNMa8XhqK4WuN5"
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
