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
    "1fuzSfoZrKyUdaWAhgZLg3gVHQuKLdM5scoN75Ayvndpuderr7rTR56SXPrqxRFJxa5ZysM5ot8TwVKEnq9zAJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeRsXTR24YA5FgoHxAAStVxZyWcebooJvPUx8eVT9CPiNMdSoe25uEvT2t6fE6MUMdp9atf3grMuNn8fqX3bwNR",
  "key1": "3ZQucQpXFsW9KRPz3X3keMe5Dx8xGDKhST91rQFHpnAeBBA582YMDyorBgoCVXV66WwTwN2tLTjG94Mpeg2fMiX2",
  "key2": "PZGw5VCQfVXFUNWJNAC3em6eKAeEcnouHYnTchnR5zs7dsie1BLcE1JMjcCqgdodvc3K2BkmDznkiWcDB21KXW3",
  "key3": "4weyG5AkfdjqrDPmFsK2mRBDq7Xnbiau993JUTnYGiRBrAj1sLzHviLW7283t7tdsb93QwErjS7ApwE3wt6vWgy5",
  "key4": "3wVZWA7RZNtHH1giLn7zabvtwHxy79vBSuurUzwX1cL364HxAHSzZpsi1FsREHTX6DHTZchNXS4pmJQfBx3iWPcS",
  "key5": "4gWvrTEhJCdgkUojoT4FCygJbLSV7yLeUBV6DsFgZUFAygizcfBFFRW35NTYmLmcnQPtoXzzvcxDPEQ3JnmzvMvM",
  "key6": "396e6vGxo9Qu3nUm3DiKAd2vxcaZkbakxJuw2cpsQ3DWdX7yzyrpHfQPCiruCXfmTrPmKGZrwJKmpt6DCFX8BELs",
  "key7": "3KKWAzEHxT24UFTxFyWXsrxViDSxMfVBv7vSs3hGH229aywtWJEBoR9a3pCuraQFEMzmHJaCovmPLprBaBudwDNs",
  "key8": "aws9jSa43WM9xnC9BMe2hyUqBrJFspfQU7mmoiptnFCiNs3vyksbf5vgM1Lsb21qFmwbetS5J77GaSfryg2ofc4",
  "key9": "5iWyiNiV5Jr6adGFX3m5coAecPNDtsUrx5PTFZh74crM9x55bcDUYKMmKDxXFdub5WS7DKP18T5z2oK9rB1JCqYN",
  "key10": "61JfdoZAQqVpQFDSWZo2sbM7Dp3B79u872qTgzxrirAg4UVs157njvDhiYtM4719qQaMn7bxoETKkyriMgkg1R3q",
  "key11": "5UTPu2H5vDtCzRepnRESe2vKLutUm4U8BfrwzsWSzUnkU3SvWAyS1MazkC7TKDZuUtLWBpYmaYJe6mFomUPVq7Tj",
  "key12": "3eUggAr6dPss6kPrTZMU4Q5LgZgqW8revMLQcrietGJCGzNnZN6oUxtGamuvcj2PxAsiWomerMSFYfShajLM4EyE",
  "key13": "2NPEWXFKSbUFMyCcdPW3MgYMEBaFGj9hKDScywnqdHVUwU4uZMbZDa2KKEe57Jk7QhQ8QBsUazDNCYFfroyBc1u3",
  "key14": "2KLBsFRMDXqPHb2GQ8bWG7h2Md4YyhSoXxKmEV93bdKKuj1Ne2piCJ6P2WUxavaiPorZfqXcAHuztDrPGq1tQk2Q",
  "key15": "3HgLDwPmqcTi2APScsNChyzau4DKjuxGCVX5fBUawaNzvckbBFwWQGHcZUQHDKjd7D7eAtNgZ2y4aYvm9Ktkd2aW",
  "key16": "22HzQotk4rhx6hUoUzCGFAVQB9qprHAVpG2FCNqamTrmcZL486aZLvCYS8WzsYLriFyJvKPvSTJnYPpk2WbGhqg6",
  "key17": "2abm6sNNwanS15t7DpSfv4SNe2JBVYmxQegiDhr8xt2vf3hP17E26Jdzn2cs8xfHqT3aqEjegXq1bzLD3jjwxkbx",
  "key18": "FLZd7tcnS7t3soPPHUvg2Kbz954aHurZ66zcS9RBebjiLhJ6DvizCQTurRyeEeW3KXRDPjbXA66fcTXCVqCUQgQ",
  "key19": "4sJEfmkACP9nhe3hwRKoBdiKF3jecHqZEBhk4wSajSAp3SyrSZitBskUkKdzT5aM9QiZSxgxavoQWTU8gCBeveE6",
  "key20": "5q6Ky8uma1Ex8Xbye6hq5Xihfq1JVChiSQ7xrz39dbAGVxC1VQ3tKwpR6C3DckwJVbEPnN83d6SNr3cNDzFd8GZr",
  "key21": "2sf7m4rXT9NzU8eokPRuwBBvr1tubiTpJ4i5mLfEx78N9KVPrPUrnC9Eh4KRexUZuQJLBNng3qrX3J7hgA5NSRSM",
  "key22": "3vwzteTfN5v4EkC48PJXjueWZb14qJ46mtEa4Vamwx5V2Y3RteMciE4NtdbmzuLGWDzCv6qVbr9Js1h1N8sLHP6g",
  "key23": "5pELSrFQhrw8DXDzpDxfAaXTfujti77V3txRvdftbLfd9iuEMfExbyZSNf8aGXCpXzP29MzZeyU2mirx6j5maNgW",
  "key24": "T4iTv66a1MxbmCDxrUgsVY3junMfZ8EgGMJckUsXs79Lys5iPhMxxJKFsmF7WwoV116BA964NTjwqcu89HK3P7N",
  "key25": "7oJkgqgrVnwreXchFH3cMJupAkEkmc17JfRg2XhggttbTVJXmuXvxDQYjDiFTr7MTCdNqoMAcqhZoFh1QUp25FU",
  "key26": "4wB7WwZssFZJ8xW91QNKfD2hzecSeQLetxoxkjdqwpSXiqKVXJyxBLenP4efhv7A8cTaeqANueDMmHy5DhmyDA3s",
  "key27": "43WBTvCQcoXLTb8pzTZvoRC6q1HeHxTz6Ad7KS2Rho6M139f1w64syTdHaPtnpJzVzLdQvfTTjCV3V5eteXidkcc",
  "key28": "3NQcm4SBTKcrfpjYrHeWDJ6e45j5U9vt8MSuWNa4463yjcRYqPVbdLMMpFN3sExRWDA7aSEyv8Bga8YQqxhnb1xg"
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
