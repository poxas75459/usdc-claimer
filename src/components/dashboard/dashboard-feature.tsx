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
    "4HFL8w9f4HE83AKKhCdFCTZbMKfeQTe4N6ZUnfvsELa6zv8tfzCy3SRPoZuZnfpgATW1c7EAk8bgPRHcgis2Nb7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LxhSkjUw6qoJ52qiyFFgiBVPVLw3UN39kCn7zCwEw3M3B5bivjDK447uubfEUU5VPL514SgxGmnb3NpvNQ7oo1L",
  "key1": "5TA9SiWG2S88RGXNPQJnmtpyQtf4WTnFRtmHx1zY4Ztx49GPXcV92yQDA8gQi9NtzpZBsSUN2H4xcfgFoduRptoM",
  "key2": "5LnfjCjqY4iW2SYFkqvkxh5649oTeJnCpSbPYKM7e9SCYvRAg7m2HFaptciSZUJGthETGm6R4dhNpdCRrvTK3yw4",
  "key3": "49R6JbUR2LB252QSMs7ReN1B32dTzxMLernkqkxzVPsSDQX8ghgxtbyT88V7MpkQiddwEsvzMf1eYep7ECVBPXWJ",
  "key4": "3QrWS2ZehcBJw79ut95yNcHTnUtvggxwRt7Z68nxZr7M9aTJzzj4eMsGFJKY773jikSaYyJiP2sK4ZHk72w6Mqpj",
  "key5": "2PUa2HUhdHJRKTaMoA3YZsNo72LcnJ3G4dTs3pq1AP6jcwW87wupBbrLyXsQ24VaZYRfZeoJNNYroTvWJpSM9Vwb",
  "key6": "55H7KKeyMxZGNpdFCwJeqWGqRY6JcqADSuUrnWWftARYbqvcka8BEi8FWhQA8svyYRC3ihLA1eNH8fDDLaj8EQz",
  "key7": "5LM7C75cyZeeEWvizVXYHjkVbTGC3EzPY99q4mQaV21EYq9NxNjYkVJCWiA43ZHgLEGUyvPmBvFTkiy24aZARt9P",
  "key8": "2Z2mqnHvxKRrtNriCDaQLd2smEopBVJ15NiF3HXo9JgU4VLFmJXpN8LPmChAqqcxPF5WSyUu8oqaH3Yhrh9aWv8x",
  "key9": "5VmBimCmifmP7n7jrGdHvJqXHW8UEo6HFtw3wCCkoJthmXjhMRw1zP19ehKZxVKXX5EbxVC9J3RRM5AQvvA19my2",
  "key10": "4JRM7ePaFZbfwEBsuSDXacV6Jkd5w8SuWLeSLezWCWcQxJCerz6PQFA56xrBzHjcmPgwGgDcNnEgcjXLkDKyhMA9",
  "key11": "5uzK1R3ak4txXr6poBgsyH6FdS9NPzTUsDs3P6M1UYG6FJngKxetDH39aa6wuZ4YS1wwGgVCYAcFVJwpVCahMfks",
  "key12": "52jjsAqaCb7kqZJeF4bD3WUoWcaAudyozVQTyhip1Ysrgm6kSCGZ23A1U9KAyk4odz9b1wYnRZRymSAWZCr5KYgH",
  "key13": "3DVEAgzjA2gQWwA7Tv7sRwSdLVM5jRUzRKdKxYHH8CapmK5rgog2bS6cjynTVUwTacpBuBvzxfWe2YwUiMYUYfxf",
  "key14": "2ePDGy4UNT2hLPRDUpxNR1MArPYe8jswSBWPrW4fbgEnE1dUthHwmVDj8YXdC3YboBXbdmqdTUEAbc7xK1BbrP7E",
  "key15": "2ykaPsFjECTYMWh6EpqdfDsNen3AXuAC1LxVJGu4eaeVGai5eNLUfeyuebjHGFFoi2bgDVmoz7dYg3gL3ZoZ94Kf",
  "key16": "23cXGUSJTXqoUCsw3ZTz9x4ZcCyR6MwQQviYViUDy8coyWxd78vCwcvvgWzfrMGyhN1o3yg4WPNnKmsfn5uVEwdQ",
  "key17": "4iEz9eowxV2wmrmquz5SQzJMRvyisGX3F8M6P72cW1s4WDUuguYaj1UL6chw8WHFzaSQNo5JAxKpr4Y9G8dAxHER",
  "key18": "vTmwUziu4eN8XCqxSvZD4vJsxtK3PP3tStQtBqCEXCjhUY8E8CWZWmciWC2a6omef6voUrMVMjeNiCs6E5Sn1zn",
  "key19": "3S3bnz5xbJXrwEGN9HhDn1LXbqRmbudLZ2gTjWn6bsyvwMth7BhaNnVDE8s24WVX5Ho2AsAJEqBPZ3jAgRDxqMny",
  "key20": "5bTxo7xz97SGmChNs94ZYSAQ6MvJ4WeXuLuQ9iv7m6nuiXy5DMis8ghHAMcp8gBb2kvSp6qs4PFaqPiY1P2gfJbZ",
  "key21": "57C8HKbAsBe8NT9TyTpHhMzVKw8JYvMKGX3p6JFgdnQmSVRE1nQFXkY2eMNx8i4fQagyQGxnRh6Bw64dWdf598Lc",
  "key22": "5sipgBsVWqJxk9g1Ey521wZ9qTx6YfCzf6brVWMcmaJMsHDiRJfquuVvXxC3fmob6h9HJ4mx9gV1RomJmNVs8uv3",
  "key23": "2Ztk6PCA9SP8PUoJBDP9SVt1WsSqRRDUHcSmM5i6oHKjSf6tpEdrvBMdaacRGMnGJTwuJSfmy6kN7JrFB7VYa4xF",
  "key24": "64D2tWCAzmJDH7BFxLENswony1DXVDwNRJr9w118hn1cs8o434Y78jg7LMFaqxLchfnQM4ENzohkrCYF8rBufAM"
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
