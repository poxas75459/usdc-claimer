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
    "41LpnZGgW4Drm4vFwMz3wXMopV8MyairqtbvbGUiZNJ49NWSSmq3dzMM5EBA9wui3g5fm46JrA8T4VpYTpCcEBYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R5CDeFVBJquQxZRuxTLxcKxwospxhWszDVmgcCtLCyvBDhPN7EngzkHN1gG7Qf2UJw7BbWDDRv4PiJrx4cXivwe",
  "key1": "2zBdYHAquP72eEjJKmuqLpgf1zS8a1b1ycEWMQL8F9BuceHeavn4EZesnXCZMo9gHp42qKtFZGzB3mw1U24qKZ5e",
  "key2": "67A7KZmgszmpZ12gjyWiYopeDYnPrT4NmVm94Ux7jnz8ccrs1vUGYqUpW1rytyxEFo1j5npqQgVyR59H58uu1yKz",
  "key3": "5Mv5NZBWjquHLEFREVZLjLUxa74QUMoEJ6ujWVrxanUEYyiv9AVehiXAzKUmU6X6uLJFCTXNftcEcehE3i2XpgTy",
  "key4": "5hVsrkXNF3Cv5MceSeTy2FPsPA5vGLHsptNWcc2NjVxcojxtkj68tJ2rsctpyyoMUUagkxZ6ocBqSCt6d5h2eToT",
  "key5": "hFCdZiGmvZs87WJgmSwHwM9LeJBXAA5Wg4PfW2QNnPry8txe4ScFGATRdbGAfCJBTVZng9cmEYPt7H1rJKG6To1",
  "key6": "2vNAEQbFKTvi3s11phTkPqeQ8NSt1CN7m5qtZT8ZkaEexKj7JNhYH5nw18gaqTtgzgTUMfPP5ipny3NovhrYmv9H",
  "key7": "Q3a5FoED6VAZvDS26N9AEJ2oCriFhnM8YLZFZE8BkHpvYEiPTWs1qcghSz1oy7KPoxfWXxU3SPctVSMAkR5xqTy",
  "key8": "BKLjVX1ySCqmCsPNEZWKL2K216ZeouTXsbwv8QmLiW5dtWyYx4g7T4L4KkCCsj5MKq8LLxVhXbzcPy97FsMSKcH",
  "key9": "2X7834uua2EPFhvQDQkGkRdnRS7PFEaGYChDBMStY1Npmg4Gk7pZb79EYwys5KPDC1gcfxcNP9xvdoSeJXPt2GPW",
  "key10": "3ywkjnniq9k8j8UkfqSc2FQp57T6aMy9C2vXc2FMWE19Y8KEscviQeJDrEdzKvb1WV6dVG2VDRvbWuUvC84USkMP",
  "key11": "TZdL4vdCuXgx3i9D2unDYQuMFUB6E5SZgwrz8JpfBUhzsa2RhjiSZk7v4eCKUZfuxZ3saGC346aoxmKSUZK7aEU",
  "key12": "2M33t7wzWCvYJfQ1511oY9q6RASMhdwit2BDuTesKt27oESiRYBmo9bJvBZpqgNfVYQTj7K6NqggRzQ7xf9SwSJC",
  "key13": "56gj4TLX6irtfk9tfYRwqohP6BVdhYKLbqbJ5iHprGd1Yhyi56mpP5sVS9m7TugJMJuHMZKNPX8uXXQn9XEw2Z5c",
  "key14": "2QS8YVigAv9dixBE84MmRDaxqRJwwFej4CN5td3tZd3RqgFyupph6TZqHWXvfc1GZsdfiCZvA4N9YVtNeLqZqVDj",
  "key15": "8N2ky57DjuMLENqoQXNDZBrRAkwJt9VNyd9KigzPnnSkEyDgyCu9gJqfuAz6xBhfNWtmvKhgtMWjkKze4s7pv9N",
  "key16": "3bYkfFsoUCnt6zeP2gC4zRMCwfm4N9cZP5ND32bnm9JEDdzEEhiKRpHdnn7GxyymxCiAHNeQmLhs2fHDBz69ccQJ",
  "key17": "56MsLKzUURGBF5Nk9egL9x87DZTnoPJc8VfQb8gYKbraDeEiKGtdqjQLauu175Sa7aBdybr1nJ1Difzj7oVimQtE",
  "key18": "26da77XUCWyZqFNoRskmkYdPnZhcaJZ1ZfNZeuGsGxpaxEtcektw51wjv76PWbyET2LY1id68pqg2eVKvkaE8AUV",
  "key19": "3J7wsNvJoCsDSj6MN6Dpr2M3hV24oLaXTxAiZFa6VdrBzHkg9fRKqFHz9hPmhS73MuKNCv5ZWt4zTpjUzNJEvD7H",
  "key20": "3Bn1LRYcyTAdQYWmu6nA5NsqvxP6y59JGnUdn1xuxy5AGaJgQt1cpqf3apUzkq6RB2QS65bpL2LbgypUbA6USuNJ",
  "key21": "2AaeQRZhMHBFJ85853i1mhnZjSRKH8u7ST8pGFCUXG1DSyo6SftMhAm3rN9hqthUMEmZabnxawoP9yfrVktZVVVu",
  "key22": "2dfzPi3BMFNVz8UWwHziAnJurWW6auPUiAqMNRnnsHkJ9k4XD6ob8ukG56Ftq7GBgFevYCRVLrjrZ8PmqxtkvkQS",
  "key23": "2cwnjgdgyZRjDL4egRJmypok4gMAzhuPH3pxTUjBiimtvCR251gnijtS4N8FLeFnLo5EtQdLtDfQQUaTcbE4phFp",
  "key24": "51RCNLBr7qjW4pGwfzz1RwJL48vSeXAdfyth1wkCcpi3FcHNcfDz4xYuLnYPLPwruupT5GGBE9yesdDXFERdaEmh",
  "key25": "23gVE4R69rLp6KgJLnZrqhW5X7qFtnriEXqaKybs6ComSp8KYYzx8Dof7A7QcKhzfkekYr2e2wN8n279HSrzo2xU",
  "key26": "25ufe4n4ZZGuaBQJ4UBcxDb958U4AQmNx4bMEmrW566uGtqkEzH1CzT5u3Twn1irdsmJNkWmTaVNPtnGdsp5Q3Zx",
  "key27": "5qpsnMzfHUYjPqZpuqpH5v1TVczR8z9Z7q4wbPnhrmvtrYSTsoq9GExgHoVRT7APYUh6kMCPysP6bcgC937rYJu6",
  "key28": "3qBTsUPJckLxdoUS4VNDLQjZnQ3qajBxE6hMUpYikdbH7Vr6o7W73GGnWteZcaZEjAFYcwMfQ3Chj8ewLWTQjUgs",
  "key29": "3oLUPqYtTdhP2CQFDMhvDrq1MRtwtNsi6K2G4P3rynQChBdPVEUmwdZGeX8rQLahFNnFnToNE71wmnjaU6CdCHxB"
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
