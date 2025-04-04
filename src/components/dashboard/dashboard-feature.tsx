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
    "3ntjGLZZCjowBXYHB2UBVxUKTrcrX4NfS5w3ov3EB5T75pEG1Z4ECwwEYrr14GVcjk9MUNPJqpvwwv5JmMB6Rgah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDiPg2DcmN7wY3pMAe8NpjeiXbNfboy1wYPBTMNRoUaSwZmUDSFPgpq1R8KAZzvP2LAXKPiTE7WpFMmdsnpz8Jq",
  "key1": "kAgWALr4cYmRvYkioA4rrjRadCBtX8yBZ3ytodaPeawDi5Ygffym4WeGk7gV36RZBnAv3LqKDpTFZUhuUUWuLob",
  "key2": "4NxHbXwj7RBwudFr6GKVU6t57WuRPEu7Pu1b9bEyys4Hb4To3DNYRZkouctZuma3D91a3RjdeKdiDV7csnFFwKMV",
  "key3": "5Q8hMRW9osPZ6Snnz8FuEpvFYkLHhL9NdunjgdphYksTck4fAmMYJHxYYWLRhjG1B5HQJGsBsBYUKo6NTgJZQRTF",
  "key4": "2vwwzKAcA84ZENo3VAyAftdNCiVSwx4rxE7Mn5NutstHXYLQgoctuRf2GwZAroSEWiTLQY2GhzBrWyi2FKoASoiY",
  "key5": "4XaMW7mnRgPPuFRroH36RZLjWu9xfWiqjyvkdXfimGy2QczsVsNPgocZshHNTEioqcMWYZmq2BiN7fE1LxGgGAre",
  "key6": "3F6skx6FnjspgshV83as1S4SpSDzGnjCAHNxs1bfRCGMBSzNEqsRoatrverFZubqRAuDYR7Zsw99zEpCS9C3xBEY",
  "key7": "2c7tquTK8or3tzZWdBgGPivsuYztSsDyuHDpZhc7B8C4ogUi3iataX24cBQKD4UyWmp52RVjRV3EQUsMmdntTL2f",
  "key8": "5XYjtDAJHSCEcJRzDUjuLjNa8kAcxsG6FDcmJr3kGmirpooDtecTkyA3SzkiNPFi4XFvfJzGW1QfXSd3CpRWwR7K",
  "key9": "5NycjDvZAPRENWck11RJrzaVjQoz1gW7uYkrXRVWUwUZhbmrHPaX6oKLU1c6QXWQ67U7mz5CfRypoB16tCSP8dT2",
  "key10": "41sjmR1DX173F7vTXDGAx9vcwNijaf9pErymu9nQDGoJcZZGKsYHktiuMzJxH9WfWZkAM6PQyRFoiSHfU8PeVAUF",
  "key11": "4MxH25h3X8EjmkcSj8vsg8efJQ49hnseJFNZAXBF5buwFuEx7CnUg6NTLPqBQ8zJ35HFXG2y1SQr1T3T1TaJy88o",
  "key12": "3NNSisFrL9zSrWbRiCbC24jHAiiELs7i3bAQ4D1FkMZ4UuTFM6rttG7z9VzrekDTSv5U7uo6iPbvySViH17VYPie",
  "key13": "51nofT162t4fAvnAxqHmHNCLUqWhWYbrz5Rpsqk9uW1Z4VzGS4BiDEdctaGcDxdJ2r5ZeB9WtVeKVJzJ4Bkb8rCc",
  "key14": "2ZXmQLRFEXv86f177anTV7zeRirYjeYBWy8to9cXs8YJmn1Q7phyvUpxHKoaNcCet5dahYNkzCvGWJvifDuuM2yz",
  "key15": "25DxacGpbriHyC59iv1MkqZjTA6NZMa677NPevLU1sZVNtwCLWrPyHdRoBKxi3LvZ8RjuJ5JQwGCgEqdMHvsb2HC",
  "key16": "Lx19J2eYnQBW8UKrJ4x61bpxK862cWu4wJxxY3xtEHnYrk8dmjPphdMsTz3NTzNtShZQnGnx67wHbiFk7QBz19M",
  "key17": "5gPoxciri6ahqokGycRDXZ3MEjcegKtu9HszsqRd8tuqmtJA5t4ABtag4gLyutBi7Mc4kJyqkvSvDbs6YUMMRtKQ",
  "key18": "66KRY1ru9aG2CsidSraqwALdg8DiiRZVURaWdTtzK677mLmKPHfdGpCH6dnPUd9oT1E5kexXJaYHZskiVtZnCTFD",
  "key19": "4sXjRobNtnex5PEUzCYbcyFXdMRRq4QYiUVdDDpfn3s9unAqssgcs48tjdELx35Pnjk3vx3C4XaxSCvt93RA1aeD",
  "key20": "5bV7MghJKCkngB6kjvvR1oaq92pLt2f9geEmsfQLidG3ZK3cxe2Hp59QS49HR6Zbj9y42kcFmW9jrKzvVTeH3EGP",
  "key21": "5iBogcZ6RNRwup1yzVvVnLV1Etd4mBYFQuZWW8xAQAzhutGFSjUu5jAmRyQigWnrkACB63AMH1dexdhrnC5gcEM9",
  "key22": "3rpGLbroueGz36ZRp2CZB8mwth8uLvdGsmuN7L3jTYPJFtBGfNRW1Zc1Tb2euUmc8obwtT2eEzRFACDxg6pALipR",
  "key23": "3WQ6SyYA8sVH4o36xnTPNW7QLTbasFvMcDTr4thSz8LLe9dVRifyfYB7K7Mii5WuXtaY3Ti1NuMyNSMdYXA8p3DG",
  "key24": "5K9RotYMvTXaR9UEQtkWPLXHxymtfbDtsT64uPys8NN36sqv8GMiAX18ytR4SgfZpe8YFhp1xHKRSMHaCHRADnQC"
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
