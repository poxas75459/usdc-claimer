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
    "YzWdPSGkt68vngVya9FFCU1t3zA3HQZAifsB11kQbpasFUn7khFzRTkuArThLJ7zhVawPDghsGoP83cKGe8nhbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P16nwV8tEXZkoy5sxkXGfZeVRnnVcyeZhyA5weTGeHtVS16anK4GdzvsZrFHCraTH53RxS4jJgvfucpetjKppgD",
  "key1": "3ZC6EEgj2CP44zccbr4qZq3os1cHM6YENzCM5gdc957ZwVdzy3mCsFeWYQgr3xJatQUszj5RQJT67E7tKFSQKmXc",
  "key2": "eywRC9ow7kuuxsGcvrYFwqEYreSSuBwTZCYrFu6C3mkuMiPw5fzVQMf7kbXbNhE7qBgcLdbjyDcztrHfJPyaweW",
  "key3": "6w2NUDZBCrwXB9Mk7vTQWxaT8LCA9zstEBWHGX1eNNwmne1Y1v2QyAuhsB6KKFfpP3M5hXjjh6KknGRfxAoUSws",
  "key4": "45Huct3dMUDV7qUq8sm6cqRfDBHPJt58pnmKux61Ej2jAweaBcN5APdfDph9dEXift7piqLSDhPDoTdDbsqJMx7N",
  "key5": "5A2vo4MDjtawpnAdZvCbGWyJLUMD7qSuhwUrrM7HC3FvWgnUk1H5ACJJUhqy1j9qoVujBKxd1Dsxyd6rBSYoQskZ",
  "key6": "2GX6ghNjR2idLZwdpk4Vgz1e1sCEwVaPMJEcdLYce5aWYav9F5DTNZFFaHKZQJpXBDi394EUauQR2sMPLBh112fJ",
  "key7": "2GN4Da1wsH841wxJVUeo9MhBFv3Ehn4SfNeEf5Lh5jK6hAzq85GwdfR7jZ3DQm84dSPksJwqmep4JJ5znr5amtpB",
  "key8": "3XgP2UUJ9yjNqaHQQ8YB9T39J1oisVCFGVqgC5d6hbModvtQ9VdqDbUEQLGpDEQCBy9HFpdnsVg6idqVssEoZr6h",
  "key9": "2FVVLsGGEofoV2FsWuknRFKZ9Ru3hBoK4JT54PMymikBEKnBAFKsvQQAcTquTTWfVEqEK3EwinuTbPdXPftdRRmG",
  "key10": "5zCpuygj56qXHVU7JWCbwVpT2LeuMAr6Y2tUcv85tBAsJxuL8zsXo7HGRVadR9FCydFULBCxoPdHXdRev1CcpxCW",
  "key11": "3x8sKApXpgiNcwsYyPgtfirwBJ2KMwTSTsE7GRER5xsgvt1FxA7L853HrhHRFdkZLJN2fTGTspm68y32N5TKvD8y",
  "key12": "4YZKWKWVHqoNtw45U43m9buG3KakCyRPKXTHmTVAHPu42Xt6usSCrhgNrDupQyrWpDwDanJg9doHf4krkwG53nx1",
  "key13": "3wh8MxDb9beSXEKRHsHUVgJXf5XYmxkzA1JktYAxkwKbAN8XfEszgaqF3AMqH2sfD8HkE76KYbAycmjoFxJdjvtd",
  "key14": "294t4xrA5bCW4Z1JBqwThbc87FdYjRjAAU8NPGbeX5Me1f9aYTBp95d6AHnr3DPnfh3Ho6X8wa8FDB5gEdTBSAFE",
  "key15": "5Vy62kVCQhVxnbE1vZhjD6j5uCD2j3XsNknJf6YAET3fd9n4GrcvfCq5CmBAR9dbhsRiRA6phz7XwPssHg9G1KfM",
  "key16": "SRDtiC2dL9J1argkvjX7v8a6JCmAjxvTtWtF43GNBn4rb3U4hNCMJBPg6ymyyeQMvZawq2tDR62nNrzvMFS2phP",
  "key17": "2Fp4dCWCrKdbumi1Di5kXrqAZErpn1KnxQvP51qrcyGyHoh2VuXQPy1kHJY2QA9ohC9fWTb2xuAGnhfxuMo23Anc",
  "key18": "eXgRPSUm7w6VcLM9Dgfk7xcg5Z6PFQUkC9sVwP3XmtaTBqySZjoKgD6LhgGcGLSuzJ8dhmH4hxyT74gLYxqA63g",
  "key19": "2TdnF8VDfd7W9xyvL1KUrcVkujn8CoYNrKzvb4QSHTo9vbU9UAPphJBhPNeYV7pAboBVeJqBJMX4xGbEAKGoPHMR",
  "key20": "4LwToS2Qd1whF6n6T4FPGBz8Vw2veHYHScSLe6XbG5KKUDJceKRZ2B42QcSyne7NjM7mEAYMyWhJtYzqX3EhymZ4",
  "key21": "yGxL9vz2cs265Z2qyZapjqXNWFnYi1hNvmtGrYdLst2y5MMh2djwwGCzrXDe3MSkkMf9cJXbUpgsqLP9EEinbiK",
  "key22": "2aY7B8cNSMDvMFFGq7ASdEZxMRrTjREVCNMJsrPRQV1kXdS8H6UXycBKAvJszj8SLS2LGsHj1W2PcR8javCQYXK1",
  "key23": "5u5ACFGmvE8CY6jTowUGVWF3vL2uCQQKB9s1zbGejuKPPohNCfFtGSf3E92VqTMfggjYMar8pL6UrJ2nakQ6zp6z",
  "key24": "2a7QAJrwVDxNPacbvksYufq3GYUD1e64pDHvcgyBYssvJn8s1MwcwvU5oksytez2GQqqrxmbVLhXEfSbCnfARnsp"
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
