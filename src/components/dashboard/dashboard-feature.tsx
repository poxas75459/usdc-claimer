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
    "4Kf2bvYVShczTraUA8eFk6msf6e6drDnBCCY4sEh8H9bg4rdXYE78RVkXB7CfFMfUPFkuxBVBYGbeQRBULZfYnzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53WzQzZ5ryMFpEsHHiRhhaDmXLhmLSWknsdzf2PSg4nC7H2v8Rux8gHHT79FQKwYtsCGTr5jdxEWgZrt1mmENQnp",
  "key1": "5b3sfjMLVp9KvocSGuLPgx2ZRczcF6FAEiiyHivHvq1NGQxMR8S7uAuWMsbu9x9FLZbg7hVZT4evYEuBdZDhtxVB",
  "key2": "sH3paSuqYJ2yaRSZ7fJYhHVRgVwaVCasPSXUrJD8xSF1ft7QY1XYDEL8aq5fLJBozQYCS5x3XPGq46DfosrQsbf",
  "key3": "588Ve7Xogoc5mS9Le4qisuMPZqhM4CNDqigHBmJvpqNK2i9XjZHFncYg4bCgiAxumR2EaGgR6UT8Y7XCUC6dkf3w",
  "key4": "3h8xuE6ibt2BcNNaDnmGuZM2RNxQEgJBdWZTuWGFy6Ms5keBydDzeQmRhq8CTc5jaXFAupoeGeNwR9ZwGgrRwknc",
  "key5": "2UNCGpttkTcZyZziULu7VuAEdYcTM2qtUf1sSZgUkJB9jswyhGyLmCvGwcihFMKbrTSQFFD7M6i9BRdF8dTpK8ee",
  "key6": "2Aw5Q3mgmxNGiZwjJvFuNPVhujtX77p4LEyRYWcE37Hu538PEtan3inc3w2Z4DY3vZf5qS7d4PhroPrys6rqabcp",
  "key7": "5vLozzZs2yYuaGpr281Z6fbnrzBVEuaAe2qhmDVrSxATFdyuqHotLUw2w8eSkCLzKkTHigeyHBESaz7e2bGkvELB",
  "key8": "3mCRitDocFTBQNFRazYYw5q5TDnUhbW2SvRyo9kkGf7QwQXLuYaegwCMz2UapBK7SXsngsJc4r4AjuQgqf2K1ki6",
  "key9": "4GCNuZyXKFJvSkyoy4Qk7ciLvLPtendchZrxHqVsXU4tja7yU8iUX43ksEbSg1A7rBd5zHjAYzfrmSXD7UGUEMPx",
  "key10": "57QrEmwSxvp9218Qz2etnuqtpVsTQje1DYQ1DWdSXdCobr9jy5svnMghaiJr26jRMSmJwe1RG436qbtyvPcwNsd7",
  "key11": "LmqEdAQzatHvj268kQBZk9Gwf9zihUm2fVBMg8JnvaEjcQ9yfKBZzKxVbZN5nfTRREYBa9Lnt81NJh1LpQLCJdD",
  "key12": "5pQaxQKfJDoanW63HU8KNMhs551MFMHKU9qgbY1W6vNghigVnXcwSbewD8tmPAvsXH9gyJeggdceSaZeukNNbF9x",
  "key13": "5PyNH8xqjJ8koFPq2x8NFB64TMvvZMyv78D6XKoZwGCDpW58KpsMZsuXBzTDnA6ibD2C5FbJq8rG2RxkpDnTUfxK",
  "key14": "KuTF2hVE6iYgtBbMVdjiBkMz1agnP8j2Z4jHRfgpJQWLtNmZjHWeqcf39a8EAXsTJ65QpJdNU4b1dutRfc1FAb3",
  "key15": "5JXXDk1Nc2eZHSiUpne7T6QuX9hNhAMtYVWoivahk72uaCwTqSrSYRVpyxQXScvt7dLBggi7GxQDuSsHSQFdubks",
  "key16": "4WTFe96dWKymYk2j9dQDPZtojLRqt86SFHdVSq3WVtR1j3VabnoV4w8893FMdLbd2vrmC94QV52E7MizbCnBtGyt",
  "key17": "4wffYYLv8SGtQUWpxWdQ4cxp2EhGcnXf62vDBKbCHDd2UW1MweAyUXvNDD2Txhfm4P6rLYmGWqB2ya26rNdSnuqX",
  "key18": "5oHdQddUEGcM2JxQLKNUHTerB3GZCTXzmgeyUtEghyDBAYo62TRACMvXh5bfg7PnwzHAgEDVJshKQna9iB4cKFLM",
  "key19": "5eLWF5Dr1ZkwrBNMRgGWFmwAVcGAojKRGp3MNg4bZpSymsBEM1hFnQKA9Gk6DgiQhsYWcEJeAV7WzDueMyHr9Htz",
  "key20": "4SnygjfBjVoHUbZoBLkTAp47JQkZ5oDdTZNAGLPvhmf4KnWjzgmayeAwpJYqCy5aeVPzUWtWaVGdswAgpHLvw2yP",
  "key21": "4eY6xRHUJo1phLt4hoQr9kUjXnAeRnKQwezmWDR8c88aYRBgDi7TpRtiKpCM38VDQtexmrWF3AGABGTRQbvKjfKh",
  "key22": "611JB8VNFLcURYYKo3H7fPb7xkQmnsvGLymkT5VebeA9Mg3u6XbcE5WkMXVuwUgZktzuRg8yTbAE5XSJymP4Adg6",
  "key23": "qN4QqKkGHf1qjXut6KpS4rrph2r3tUPtMUBAMZDNsCoVxzBDsFmXzkZUABctLzGKfAgZVbttZbVWPDvAi7zrGDP",
  "key24": "3xLBqvXUGAv66gLTTgHWuMnt4ozyH1b9zzSUNZbW6fZATDrPRR3kXQU22CSVfYJ9SaLhHPYGYauzpnpVG48rnZAx",
  "key25": "4hG6sR7Zncv1EV48bjg7JNWUC3kS8K842SFCuf33gCM4Mo5qDqAfFaKVGGg1fXFqvm8NaMfVuPr8ww97p2CnxtLH",
  "key26": "4aQqfd1M8riSYQ7Bq1Mtks1QUeRPCZsGMQd1EvSnMfZ2Z7twoxiNZGyy81SB1v59jUdEok6XiArRuJfbioLAooeZ",
  "key27": "429tQVmoGbKcLrkEcDRnNbKGSCE8AJUzsiYtE8rKnm1LMc2MF8qYcKnkggEHKyRXcfoHLeUUG1N8cTCJPDveqfze",
  "key28": "dgMyDLU632uhkB8ZofUsMbpwXc2z4zpedVCRWFMoryuJC6xSpgEuC96akCCogGDtuJMMuV6GDCJrBnTG4ArrbrY",
  "key29": "4ZhvjyubEYbjRsndZoYDDoaQs5Gv3YURpg2ZgrkcreT5Yjqxw2RTyrooGSSr9dX36MnBjVY1R3oihKqaGvYwTfVH",
  "key30": "2PXCyyz45k1E5nez52A9u1idQMXK374Tu6N4Z3RShi3xdYipPmXZsHMHFv8tnjPXSrkuPstWLJ9icykzD4s7U5Cz"
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
