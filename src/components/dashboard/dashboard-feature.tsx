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
    "4MsJzJ4tdpo9Pb1xAbcbhnMSusv8inbX9RKnGLDet7y25pJ4aLw7gPGXq446Du2z4arE2NL16JYV73LDqgqEP8W8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jfD2WK7efZbaxbwdKp6WCHNkMub543tm56asyJGtqeJwtxxE1GSbJ1s1eoBRbkQBcqqhXjdQv8fbbcKwjgcawBc",
  "key1": "4Judi6yVKhb4QQKvnSPWvwpWGt1ez3dzw2Qo6c1amXhmMmB8e55AJvnJzrBvfErfw33SNgBFnZFYcbwqEigRoZ7x",
  "key2": "4WDZFTHUwynPCQmafG8DNdBDzNzYCSWmMcLmygGD8mmUUZeXt6PW4LzYAu7h27WLA8GczRb969vK4fn2HaqC8D4X",
  "key3": "3MQrMFQ5uHf9shTSKmFme5d3ZWmaxa9fpeb5nKYQT7dnB2FTp5QQDutRjuj66ZvfiDQMPK4AAQm42xzo5GJQ8SGo",
  "key4": "SGW7ARbdQ1RhkVB28ojj6HmSg6msLXoZKk1XibrqY7R5aLNUrZPz1mbL9LDaTo7KpoJW5y7wVEHMLVHkgps4LxF",
  "key5": "57vHJGdQw4B4Dhyc5WswT2qsXyMSF4qBj7uHkDvNosS52xBApEr9fMWyfiL9ngpQKJdTr7pta7Gmn8wTZX259YRj",
  "key6": "cgVpB4g2vmww2syEnBPBAAwSiMQvLi5bksWMbCsjFzSAdUSmT4XobSyBxX4VSX8dbYWoKvkVsEZJZuFJM5Axiyn",
  "key7": "4NBYNM4DnnVnfdL4B8CGgRpJGxzMw3yuDaxx7zPvoEv7sXjFV4uPyTogf8dU99m9dKvFB6vmGG1gwQNRaJ3wq3db",
  "key8": "4jpQRfcMBwCnBeswYno2MLiFdmtMDqPsjJwB9Sbf9bxbLemFZsXbAKGcn33BTHHy3pydZn8KD9YtG2R2Fivvb5dW",
  "key9": "7jLkr76nSTsiQNe9HfxSLPp3EpQA9xfLzJxyWpQoNhbRSDg9Cx3gKPrfz4y38YoaijTU9ddSQD4ARYYGZ7icP9g",
  "key10": "1Fvm7D8m6ZJSMg7sek7PHVUpsP7FTz99vUDerpGELJzGhNSrCLjp5cp9wsQmDWbxiRh89HLPGzFMwmp2Y4gKoNv",
  "key11": "4KHAAynCwZcHTk64HWduRkTVhZK5o1Qpe18Rw7Zyhki296ogyS8wXtfoHVSeBEPcPM6ZcEQQJz7VfND5QeijNmnZ",
  "key12": "y7WfuqLaYsaz9A4aNW3TQQrEUxvhLPNhGVYbSciQQ8RVwi8tjPd6LJ9YCWmZR9Z99XpYSRo6tmaZZUBf1rKdTgP",
  "key13": "Q3ZvTmhkqT4wUDSXoaEmZt9Au4t2utvsz6ufTa1GDAiNwhcerAS1QswxkLCP4CJcVPgNuFdxhQQuhMcfpxPwHqt",
  "key14": "43tjkNFQ8sDY9zXbgGhVrEnJNWRXb1R4Thv1F5TNHkxCgskCZ2babCXkiuR8FMQ2NAZYkPBGaZqefWNV9yDxjVjb",
  "key15": "2o3KAbguNBqqy26q3sMjUVyQbgeXEMRQmszmqRuwsAVp8FGX8p972CnjLB5utNky5qU17aoyW3eHX5eTDvnibz7W",
  "key16": "4WBLxKQwTGJsBoDVehTfym7XT51ti3PoPHd3RU2awJLCZuy2BPYpPKPC3ACnTTSPK86jBFntSeVc6VzeCuc4s9Mi",
  "key17": "3Xv5MrFnViFo6nibPkkXDY5akJQRpFAUycBuSQzHAyjrBNbLSeg1PEkW85cMU6Lx2QQnNpxtmj3powzZrNcj1Xkj",
  "key18": "4SYErXv3R6R3dDbLsdGzKnC2sPf5PxrpdeAwB5hsjSb8e3dEZCNd8s6scZMAkSvqbxHqURdwFSiycHpMTK8hDTGS",
  "key19": "hYaUUvdqVbnYyXK8EP3X8teXp16etute2Egb38cQAz2EgaGN8VujfoB3UPXmvmHfZ3Nm5Vchj6dBMwecEBcsUGQ",
  "key20": "4NMiTxhXEfxBzHo8uHjErVgoj91Ntv338Cj5JrXYnijW3rECdCpGEu3BuXx6kVLCEzicBpHAGsn1ASdhXdmukiey",
  "key21": "41JMdvF36SeK5T5Bq5Lhisk3fh82G14ndFy6doGBsbv6p5g8eACrSgmiuboR1cXeZzwTD6zAsujJYhfjRKXA28Lu",
  "key22": "9rHRNGULui624rWk5689gqfz1w6TVNTMbH6cZ4GHrS34xAYVKMi8HFZNzTij2eFX4aCZufvqvL9KFTqymJo9sbK",
  "key23": "4t9N1Vwq3DFMX1NHzMq7CtRiiKrouRJn9qfu7S7cfcPphAABHYAF3VngzMbxF4M3EXa6DS17hVqWvQCs1jeHKErQ",
  "key24": "4YToETqFZJAuv3iasKZYNgRDoVHNe3M8Q8eJppkVqUGKhJPsxRip4osubbiRndDkrWg8nxBoexfxdWVRCkxusVXE",
  "key25": "62NtUYg8LrhFWpDTWjQM97w3vTemokEPfaZTuJLHn3pbbqXpQhXpz6jfRd1YnaNXBKxYmeKxCiQW3aNdiHm9EHsj",
  "key26": "56eVAipSU2w3qpk37RzSZmsnGjYC6uot5QUXyRvZ71t9NLuLMD922HsrS5RdeGSpWmmH4Ww8ezpJgBf5nos823Gc",
  "key27": "T6aZTefq54Sfb9d2JxpKvshXiPUkGt5DBX1n6sJqdRzoqoBUKuzbQL9pzsc3JdSifhFamh7Xr7RkTAKwGCSx8Jp",
  "key28": "4BvuzbzUTTuwtjnRyixCpKdasqC3jeb1n2wcbrzVTjSDPkMWnd8qSZVXQ28ehw2h6VEiDjYJ1Sw2BZgGstQVNJmS"
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
