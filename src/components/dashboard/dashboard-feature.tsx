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
    "3hSzjXGtxHZyXwd1kBKLTFH5F9DZixQDw1YiqxWuE1YZQRzhy2aiLzLtRR47d6VXHz4jozD47WnRvZcMKGApqBWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cr1W9JJA532e9pZEN65EEvewno1q8ADav9zoWmsD7we26QL6THAq12Rt8meinvsFjRxi8XgmZm3C1KmTWQkpxQf",
  "key1": "4p4wi1czNvWkyKXG2HMUQzX3T7fa668XQNzxcDBrpgS62QomTnnmLArJMyoeZXs7z37VxrW6HUGzVfdhBdhsmbcj",
  "key2": "2GoHqBeWmf3xdNHJekiA6TiuWHcW3U66X3vNXKMAWAAkTWKF7heMuhdyz2odz3SdT8bgEEFau44u9reQVhDEGwxr",
  "key3": "2GhZzRY8Kx1kj4wBt456hig67xQS7hZSmokR3A3JErtWCJy1Dmwf2XGMEdfEWLSNcpXh95YrzKXS2nyFrNxp3Rae",
  "key4": "22MVkMnLRb1CsGuLaEcgniNQKhFmE4cTT1v5Qc4mdiAQpExUAC7Eji1XZTnuopdUP9tKLGNzFPzefn69MdmWeu6P",
  "key5": "afZofYCpUZBivQC1241nskZmkNJEuyh9XEucvBmeRJvJt9xRUmULRtGtfeVm7SbW7yDBJgM4xTYqaW3mXAwbQtp",
  "key6": "2ZTH16TYfLPUcqw3rrYqi6fcNzSwitp6NZv3MWKVuJ1Xr83HWcduXLG4rjbHNkeBzckeqHDEVePMX51TDcRA1gXw",
  "key7": "4wVKitjsmL9q1azFdjyWyHSrtzmwt71A96aJ9jhmGcU3vvnHjoMRTmHgdDs5i5iLBeVFZB6J5E5kguHNv42fsVtU",
  "key8": "4uWcRAXHm4s48ZqpzJCYQuLYgBmmkGykwzdDaj4rskksXq5A31D2G4j8LusNDbM4SVHBYTi791NPC3R7p1ezx7g1",
  "key9": "rG7ZLeBMEkmmUqdYXYLS2w4LqgL1s8hSweDtj27ugiNrpdrssagBHmMwh4wu4gdGSafHi75iXmb6FsZ1EcjWxa4",
  "key10": "2NsxXFxmno5ZBdHV9JSvYAsijPEE2aZwRWxg67P866YTFPBHuH2vfL6rNYKWqwCe6faeLnG4Cthh1Xmf3e8YWZEx",
  "key11": "56sxf6qF5yk6uV3F5Ufz6udiwBhgE3PcqdFFjBYyd8GJXd9Vx3ahNfQF46svVKasLZxd9YCP2QXxHMHET8SmSEWP",
  "key12": "sa26vk4zzENW1xHWqKrHhu6KVaPfUtmZ3fMGH7qMM6kLfxQ6QMgUKW2TS6PdsFqC9etXfokVa8emvxBnQHiLFPX",
  "key13": "3fe6juMXTJsm646jjzHbnFpSbEXWhYk6MkJ2MjjkS86nMc1Jb4yomRko7vBHa4zbidUac3bge9XwBqu7u3SPW1L7",
  "key14": "3e88ubHfCNEkcXuy3fkFhhAAH2r2nQTddt6M7pwYN8J3DVh4RfbNX9aWQe4CbCxFJUZbNeWbeea3NnzZwof632CQ",
  "key15": "4vuMMxzJihGgh1e1JpDD6ZDmKLHyT8r7NitRP5LtRXGkVaZ9Nic5WmwkpLnhUkxbPDBRyt738dgnExPJFZeqeBA1",
  "key16": "4nk1vh3Z67ZwXxfULb8e6GZG5EAVaAefNCpxvK86fCXucxWf4nHzVozjGpitcooBfjBnuAdKv2N9T3ivMQcnQHgj",
  "key17": "4afTFMb56k31zpyd6exHSs97XqNwx6t7AuHfS86T9Y5hbcqv6oMh8aA2bT5DjPEXxAavomaAbdRadF4bWhdEbUuw",
  "key18": "3Zuiw9PvAqgxoJ87HCmJvjp9LghA1bCzqXjgiQoYERv9DN98K1Z5UHTSzCGSyrvR3BHYNY1NSaAdCWW62uuaSBcm",
  "key19": "4dRPo2RiTvJ7ZmXqSeuqs8m98iHzgYts9h4ceHXr6X2eAPEt4dufYKoGN6T6aRMn7jdsV1QAjcfqP1mZqqNmJNAH",
  "key20": "2KzvJ5G64St4sh4G2MHuXgJ1jVFfCntDjT2Sco7QPTcRWUDbCrtR2N1V7aJ26St8WWuzb91as8DSQ28igVKfVpoH",
  "key21": "RngP9HXawKc7WiZ459ZXNKJLBEfniiwUd8xgnAwFzKSMsXaiEUS4s7ET8Q1BBTxQZFZDWio43UUTkjnnfq7Sgfs",
  "key22": "2MjCD1WnW7tSMbdEB5qKznwrKPwRjXSva5TdxmVkryZPqD8K46deP47TFEReiMQsdp2vNnRFWHpFduedN2YjcyiR",
  "key23": "2z9M9PvjmGvKEVS2gzUeH3NUzYrhy9a9P5Gq9cggmaAHg3236TyLyJFx8ShgmSpKCX9SbmUrApDLVGCGBDPf7pM1",
  "key24": "58uuTXPDtKdomqartKNCz8x5mYwie67PhmCh37EMGQ8BEMXziu131zPb17VZSch23dWxvYEeokKTdFbMeVzJaSRb",
  "key25": "4UqLWbxPvYedU3QrZuRak1AhMCy4ZC4KSsN65Vy7pPYcpyti9FfzkA5vob1DqCkCKxyv5ccHReYNeUi3Efr612L1",
  "key26": "483TNv6tYbge3xziKZbq1L7T2kKbf8QfHvyuKrkxWuMjcEWzivHQkzVor1r8UqYHu5sHbaPwm362rw9AqBQaZpLi",
  "key27": "r2cjQLDdSqJrHmqtyDXV5xrrbsYKUzsYkDf8wkx3yinsSRbEnNGaXTGK575y3TY6kZFpGj4HxjSyZokYdmjHFzU",
  "key28": "4VHZ5X3xy6MKfRftuT1ZPnRn7aVDTsjfos36RfSetnpSg3pBXE4wHKh21dqCf6sKgzjzhPaMmCm8AJawyfBBBYG8",
  "key29": "2iiPBNz2STLve8jpTCLBuf6h59DRynCxyb9nDosTpzyBNCbqmBq9QMVcTLVj9RZxrqhnQgzqo275moKDrE7SWVhU",
  "key30": "5W57qfemeAxz18HJrtjcr1VfZGvAhTKfZWufcWdJobkRyV4XChf8x4uHQHDrauNrCN46cwYvcxUKNhkMW1rz9LTf",
  "key31": "2VroLLXhge9NyHgaaSfK8NAhkm7CeU9VNncEkpHbVBQHFnBiQmhzBX1aG31iFjFH6ehARasW4ZBcJfyNbcjjH8mh",
  "key32": "2Nks1GJ2dz5nooyEb2zquMrDSJqDRGc3tgiTPyRZbmddvf85VKAXktyDgofbJZeBRjSyrTEWPoz1yT8X2AzQpoAQ",
  "key33": "5YnX7R82Wb6m6zrFTaAVEatHYZRAekamk9egQFd9kQ7Xusd9xd3q91RVLad2J3jhD6JYppX5MiR2uqZFngrvMLBG",
  "key34": "5GeviEbX4hdjLn33nnw2LeAzk5qRVHeXws18jq7QmgFuvt72Hg2miMBwWj1XnSyhvtrTbh5CUkjgcEECSUGpzJdh",
  "key35": "H9J7jXyvNsVYrjvECANsNEm1haiEK8KkDGTD24x87VVmAM6ebm7BsDnmaiT8627CTZHmFNSNof2JvAo2txHyyCn",
  "key36": "2y6wtitFrFQPNP1D5QfueVxe1mwtXki9zfB4Yu6abKcamCgb7xYavQYb7nCGcHiQGE7Z6qPPHxpQP3b4Fx2SqHgq",
  "key37": "2K2MHCraqM7TP6wTztX5oMuFjUm1gwfmp1X3XX2EKM1Yi5mLDo7AxEhA45gKu8bBBD6YPj2M38Rmkns3TYLdhD7Q",
  "key38": "2MrXkcUhoWqL5vvR68AcjbML6QK1JSTa9pHTNx5ydWS8p6dS2Rgksufj8ytFKEzjgfEjFB16whqpaSSK8GMWU6jS"
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
