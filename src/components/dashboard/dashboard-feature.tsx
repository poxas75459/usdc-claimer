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
    "WpwqGMs35SoWYS1oR8wMRMpKo25JwQsF8S6UWto1SRBakLeeQApoLo5eJ5jgKeUdug85B44jMLyLFfhwzFuC5z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NzvGgt68gReHVj7vi8WnijQB3EPZpoWNeUXsPJ9PoKHdhoMzA6EjqeoUFhTB685Z7hfcQN8w8f828g2wM2QvKm1",
  "key1": "4gsjJgAue25y53rFiqYz16ZvMAyPTqaeT9vdkRA8QUzENpT6fBHP5HqBNPhmDrho4yNV9KCttASLeGPbD8pkxZbS",
  "key2": "3uSinLsqagCbAcCqr9PyhHfdmghvaE4BRmG8dn7XFtdpcGjanKWbLGbronj9c4w423CpWM3PWMXb3a9SK6FXguTU",
  "key3": "61jtiPGHMm2xECBJDwoCVoLdfVP7UApNkgTRKy86fz7D3cw728uPkn3ZTrb5CWbdMf98SA51RSTf9ZGq6aiTS78S",
  "key4": "4Y8xrW6uZ4mGsdb5fANvkRWXWTyKBqmNmCYhCT5iJRgaoFoDyCGGwLCZhKawhXaKTsWJvGf4scFMR3SjtVvSN2vv",
  "key5": "FMKTtXMiXtNqsAi84jHJ6yVSXSsDZzcuyEtD4eivqFecuxePQGYJ3yzaiBbxsvdFNmL1NXUbh72i3xyNsCbPqXV",
  "key6": "5mR8tTUS4ELKrZwSEwwFo8MAnm5nmjWPY7jzQvrFSrQALaYCv5WT8ArkRSyCGaSqJxUnN8FP1xZ6reMPB58PEGEv",
  "key7": "2udCrMgoU7KG5LPdSdkcjZdd8bhirEsFfVSPeng7MvjwpA4neLznehfpCbANBsufHNDYJ3mws7TKHgLgNBSeqCG1",
  "key8": "Au1F6pi51DPtkJHBJ4eA5XpzCfsd2vJyGeb1haVGeysTBzYSPQn4i3iRManVFyHZfxVfBdeSPcMtp4SLkGty4Vj",
  "key9": "3wdfE1TX8jaY6kQGDPWfF8qd64mFdfLpGww2KjRuDSt3GgK34NbdkXh92nCfWaVeRaRAjhVKmHCMohXH2zWF25hp",
  "key10": "mLR6nFtXdYkquyXh79nRkk3BZcvCHRFHBedaZGELfoW3tAa8xr2KthXXfKhAXZFhJPuUgXzGiVPUHCyBdWncder",
  "key11": "4gQ2SG9G1AAePoX89PLnyNFARYXXt8LS91ZkSLjd5qZqMzowvCJSFb8S6MRYBj8kMHEjC61g4cv2vobiXnk1y88i",
  "key12": "5cBywWC5EeJFCqnDa8gqeQXAj4eQ7WjoygJyVatmVAJGouSX5WF76zW4AG4Zi9BmrcJnuPj3SH2gyieJP1b3sokv",
  "key13": "jEJXeimHAwx1M62NzpeF6QHEVFTdhjVqnec8BwB828hjxTar2bHBGTfff1epEziR1z48nsbzgJ3AAp1murNpfa4",
  "key14": "nNdjBZwVnny1JAkPAsxrK2T52548cHVj5jMNqmCrcfiXYuXVYRWy93SH2dgSZAXS8chfRLekqxiLNpBTFcTXLHh",
  "key15": "3i5YyC9zBX2JurJn8dNGe4RBxSnYGfY1rkKzkLNRt5QSPT4TxmsnGWGv8GgxdrnaPXkwev4zg7j9amjSWkjJxr2x",
  "key16": "4pdu7UV8rgBYczZrn5UA1UVRZ4yz7GZcb3ug9tsm2Z3rV8AVcTixUjLRbnaZrsUUFpm1c3Y169hvHUYqJXSu7aGj",
  "key17": "281usJWGFhfUTgyrXzLDTH1zqwe4Rz3AHBrAcddzTXDApNjU9cfXyM9x8oDgvsNCv9zjW7zYRKs8Hsu8yzsjL5oa",
  "key18": "5NW6Gb58gPEmPfuCMPUqk8qRCSCpRtuEU6i73NLgo2JmS84EVRgZBVfTktgfzuRsDz5CiD8h49Uo21otAUvbBMaR",
  "key19": "5sUnsearXioRutnC6Db6XMbTjVZEsSKj4fMQ2N1V3FV3ZBUUfW38SfmSCTAZuYgdafWoL1gYqFLy2ptrpNqnmBkN",
  "key20": "3YfYJAt8uGf5XgPvTUKKyfKZTkuHPxwk716LGsDNXDmmpRRDvt32WZsNsBiAPVn1xyfbboQ1zQYyTUUiqcNQcqwV",
  "key21": "5pUjkzMBD5ea1VUCabmfbqXZajc1LKFwneS8Dry8hnU1AJ9txHzFtTnh4hD9XDxweY8ukqB67hsXJhzBtZbZLGhV",
  "key22": "R8ZunG3vDZoLbVHREmntSybxasL8UveDehJewD1jFEc23i8mUwDdkePMJVEJZsLK5q6RR6f867CW8pA8YZaYn7y",
  "key23": "5dpZv5YpFcdXzTbF2AqPc32aat1FFigNsEiHpw1YspnXTb3F1kU4XeTQygaFgqyKJDd7gMcRPhJ1EqHbqCpEkvqA",
  "key24": "5gDLn1V5eTPMDkjfCe5k9T9wTrzxcfCrgrpGwwepziAAWG7FW29soBS62W7dxDgXs29CPMq61mws6sU3okXUXL8j",
  "key25": "5Effi3ysZmXwY47PJ6Yi8sbsRjYYsr2PAUtoSfVjR5BkcYRtEQ6fhzeoL7DKcKrKp9Ek7tySqxthwMSedHr7Tcct",
  "key26": "4oSbvbvVLFT8EtspED7ZHc6qDA9RedMXbLok2ghYk8izb793DyfgwuvPeKtPiyf3P8CvK5ktCFx7cXxMdy7fCd2T"
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
