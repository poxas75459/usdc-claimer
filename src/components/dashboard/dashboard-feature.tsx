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
    "2nqnVQJZqEV5S8aCez5Cm51sRWxBBRSwHq4utbQbAf5CJvRNvG32s23PRS72rUWX3crFTPbo5ToM4L3n8wzinEYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hzzu3yoA7XVcHDv3vgmUJCsuhpMnvTNABVUKCAJjHZASx1JnyF1myYHisYE3V28qLqs334jtXyyJFaTyUM9aaRG",
  "key1": "3AcFUKnoU7z5e5Ym4mmuaXtQqqNcyNFk2Sd4Y4tHaB4tFRCb9oKrZRc9FnMcxAvkLTFNRnFYf8e9djcNFLeG6u23",
  "key2": "2K4fPg5AKTbCZBw5HFZukSzXUmNKH2B2Z1L9jiPTK6gSrUwuD2xq6CfHzeHYcreQEFAmmh1CrqXMf9FtKGDNBF8L",
  "key3": "mVgZFptbCKBdtQLKST1TAT8Sapny8DDdx7uA3UEoGKvd6TKaZCQTJbNeoXLq4KjSqtPG82ZUKcLTYcgo9t6BVYE",
  "key4": "2PiFSbSFx4FxaiJExzTdjkkAwBYtN7Ct67fVEFr4DDZj9odSY44zL4SgA4CawoPxwHEj5a5RnksdZsALcpUh3JJi",
  "key5": "2q1mU23Ei92XFwhGZ5ZevXvcdd3J4mrvTRZUDw29p2NuMH9ryWUyy11DNTTAHAK7kiSUqbBcG5JNhAwRjfMNoTi4",
  "key6": "4rrP6ejaymogSGib1a4NNJExJfmrDKjpUstiHDEnCPzbEHqXJxA9fXCm1EXG31b8BAyYVxvMbNDg9WoPb2yNkphg",
  "key7": "2biVFwGhr1ZiTKU6HYdo3KscLZT7pxXx3k3sze7rh5zd3DWSK27RcbjJwQjcxRoXCS8JhCD83eJH1j2BYtZAnkfR",
  "key8": "37Luf1Wv844LHnqFNgiJ2US2ZC6Lbd9GH9pSwRkLENTrsigNAjeraEd6mFB8y9j64Bv7do9iiePa6YhBV8gJFFiy",
  "key9": "5vamCStZaaVcBryuHgQXaabQU1VdqgUTvEtrzjH6ku3bsJuKZCwqAK2knq83d4HTbUZcRRidGgTdxaxt4E3DvvoE",
  "key10": "4Fjzbiw2sRSrybrZqHZn94pRc5Bj6TBpZ2ed2MjBbeX1E2heyjcLvuRodKU4AQqSiwUaGqZkWfTDrbYDvxW44aGf",
  "key11": "5yGH8jPH9bDiNbtTbprGChdVJ3aZPyVpdFnnczQ96KWWgGdky3BtPRcKVo5bJ8mgtvY6McRiqYsp7TUt74WtuXGc",
  "key12": "2iA7eBaANyMWw7qhC1y6tV9bWz4Xym6MhpAq5PWcA63gMhyHvtpJAGC5gLBRELwoCKN2qgM6M3wLKug6KRF8BnjL",
  "key13": "23XoYXk7o1sR9vGejrvby2HvWN1YHPjybj4QXUcJgfFNi9iZwwWaa6MBSq1bjJgucQuSPzrXz3CetECacoG1MidU",
  "key14": "4sVX7ZjWtmVbxQFZzw1eKBGAC1u4hAkUSDSiYNo8FaTe1aQM9ARNEPSNGWFNQ9GiRFnVHysLDdZGhdrtAwcjKxgD",
  "key15": "2N247skSUmDWPBPmFKyvPg3wjGbC3RKdm1JzKepuyYsvb7C8UzKCZZ7Ff65JyTS7FECFxW6JnjqaJw6XYDYVUaUa",
  "key16": "5SycDAoPJ51wBLUaCF8PtaPhHNJbAFCZ6s1qNdhGuksBhCcoiyawbDSYAP2P6KoewAXjqWD6Lh7EHyaBQjCAHm56",
  "key17": "2LXsXQqYQ6HVcg8qgjJEx1Dm7Yp1YWdNY21MveksuUdTUWqAjXvWBX8oUqCqybAksYAD2btiStVp88ehuPvp5Sj3",
  "key18": "rfzcCd5JdjScyB5hkB74Kyg82rcRexJ8pNWodUNYK6mPXn6TBJg6zMJydkpPUUJEEXn19Pii8EcpohV63issk4P",
  "key19": "2Ze6TTQ7rsXMz5b1ruDV2BFZRtcG3spZpPrVHz44HMbviPEgcfzdZZjnJnLJ1PUR8EvqFn6RGHtkU7AkPCQWDJ6F",
  "key20": "5nV6zLQS5oVkwLAsXqoXs33G5oHmqrH9ye54FDZtrUZu1LafaA9NUAbedLY5TtUd2Ye5rfo7tpiNSkjbzeUtC6td",
  "key21": "4WhRDG3ZsSkTTsLDjFDv61tViXRkRJj35BN9iRCsiA3k2uwemV6ExUjAUpg8ig5ojPzkVGqM9dpQMBCrZu7xgW5G",
  "key22": "3f7cDrUdEGrqsCtWpgEeXrjqZUMLBH1RntR29fqcEzgUG3hJyeYnHjV6GnBuniUMDJZ4LV2h2uK5FGmTe4CtzHof",
  "key23": "3AMe29UEz1WiW6zunsZoRVPCzsuQeFW6CznHgir19wRbT3GUNjVNzBQ8skBiPHDkEqpTTzdpWqwPvFkbZv6qzcE2",
  "key24": "fngn6nHcn48RaHEUdBBkeuXpe1EdXvdvWzX1B53VXzX3GSXv7Rg78f7eBaLZeUAXEFzt8bk1VCVZRSiJ21YoF49",
  "key25": "tx4WEauUfYHWj6VP1EDDYeZZc2vyk1tZXN8PsWYBNTq7wJDaq8hxjkSHibXj7w9qvbJTuywz7rKSVbcwWF4VdrW",
  "key26": "3VEr9bdvf92kBVdYcNqyJD21AT1hqPEDL6wVp5Fc5tJDQn8nNvXttrA85XnEcgrEcy8T6BbCP7sSYCgf6c1T4Auf",
  "key27": "2qUnfitW8vZriehoP7yFpkSz195wjHEjdktRqSjrgNbHYiEAgRFHaVd6dZesUdnfGaR3xpWLf7tsfArCw7tUoaoS",
  "key28": "4GoGupbKxacpHBtYzQdLXMXqTwD6x6dUpJzXBa2fQ1K94eQvJmEe42v8hc9m4ywwMYYJCerA4bQemtLkcgggUcoi"
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
