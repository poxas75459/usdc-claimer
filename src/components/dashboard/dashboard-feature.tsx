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
    "2GGib2JvYU4UrreVaFTLfuRxFgoxTQz4nxkK3J5PM4prURzfbJt9ygrZCi9a8U9N79wwio5hD7FNJ6daYnDhVaBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gyPakdFAJwsypvyAo3UdoWehZryBEj9eLWQeJyiU4htkqQhdxwyFEV88qNWK7nBn8bQ2w9u7u23qCiZJ51bNfLu",
  "key1": "5Rz96CFm6jE9m5ScEQZowqD6T8ovWMmXddCwzq5j4yFEqAjgH3vZZbFBbSeMFiaveG91RpNHCxtMfFzAcXRsfT91",
  "key2": "4KSWnUeCJe4z11ftBnMq19GwcVpWC2YksZyFnvawC6A2AhshZCEhSHX4SsiZjV5HQw286sGgz9qCjLA6fx43657j",
  "key3": "3NHxGLcBPQHQqTHfUwKEMrSYKGRqSHNMLDpXrJeWjnkcaFnEYVjBkj7gbahipXk5Zn1MahrHhPtnNdGPV6YodQCK",
  "key4": "5ahbvr5hrgyE31orpPGop8Cs7UbYWYtnCDMhALfuscir1bnptGhtxW1VsJLeCgnWG2CzRb1RdLJd8TC8dDp7tjFb",
  "key5": "5tsrG23TzD34WS8wf6kS9VVYefdaXxRjyaRBJprSEft4EEqvpZqoBMhipaiMzBNAPZ6ZhZdxzrdLgCWANBpG6bs3",
  "key6": "2y5Cu79DN1TotZoG4awY752pgbsYqvY4xyN15NkoBomvKJ4AnnN8oYnHz3b5pFrbtBbqUtvF4hX4uNnDiXydck4r",
  "key7": "VZsQ6GqKy3WYuiLtZk8A1Vvp4n3MhksPd9ZiK9iHta3ehEaM7RYs3PGvaifjYerVyvtBtJmgFRXkMBGtNDKN1bP",
  "key8": "22xzKb8nAAXyyyEKJhBTf8UCGSxm8d7JPp73GCDV4wQ5EwqeAsspvu2FfK4HNxZN5a3RXX5p9W3wT4QaSsWR9XDQ",
  "key9": "CN21B9eDNZ7r1oyz6WMb2CQLETh21iFd288dEBCx5DWUrbMXgXxg1mNYGTyWpqDQEtpHYjkrct6xh4ErZccqU3y",
  "key10": "3B9zkJsoky6rriovJH8h9C2pzuSBz8JYEP4gsuZ3inKSxc1R1ceVhZPHWNckVF9WZ3JeYcvLDDtYrbjrPDZaukou",
  "key11": "5ihVAFJj94P8Ej32XBvAkZ4pRw2yV2UnR2inxvoFgftxRjDiZ82QDAWDi9kjXDHi9E5zM3uh8CWZfWxpqoX6SMBR",
  "key12": "wZCRA2t2ASYqwU7MCjoanFvhb9ojLEkh8vwE2QLyuqcn28Y8oURBaXRhs5Hn777E6ky9fh861yxRQfzT8uR2Mm6",
  "key13": "2cnRGhoe4HBBwKtUsoECwCk4JGHVeDffsrm23779teJK2BZwWpG2stFLqL1miSPiT7TDzXtw1QyD36LwEd6CPsG7",
  "key14": "31DG8axEFnDEeqd83cDpffY1P27uwCqrHunKrz1SHaWC39HMreax5PxHWsH883A3D9socFGMJ6vkAnQWaUWwDMYP",
  "key15": "4Rz8yFZWYxmV8eMLssgUNBdV6ZuhF81H7A2RztDmwRgLodGm858SufktUhQyy1VPXxgXxdbBdqg4t9ALEAddgUmG",
  "key16": "2hPbFJghU78dYEXm3ikCTHzgFAgVdcJY4TfB5gQKdL9q4eZtqXYPcHjk1EEpxsk2KCz9TBJfkoJR9bUfsPBWcciU",
  "key17": "63ZJFtmYEdE9aMcX2WK9ryBHgi4b3xAfEFyYvnR1wzUVvc2Kq4Mv1TFpQFgxpCBs1FiW2c1524Xp2DHzd7JpCHTm",
  "key18": "43i5dRUCmLcKWe7Exr5hom3XRW1FoMmQY1B3gCwinUytr7xnHSBuev2Yq7A1zCvLMazAX5xNL4pJKYCzuw2zgNHm",
  "key19": "2QyUEpCbZe6vD3Tbc3sdF7tqmn8hyxkZRixxWioiqWYZDx5f9urF3h8A96iCHjDq46KnVyWTtneNLErbVkfLwV54",
  "key20": "4RfGALvXnQHMRkGyCnsa6wwCZ15jvVnSn2bija2i7RQnyjQWVzmvfGgwiEDZupSyzgA8B2cQWGLDrbUzK1pEFKdN",
  "key21": "2pvp5rb7DQAGdZMwozNhZTMgraqJz9ERP5Bh6p4e5H3P9QnmM8eA9BVUgpJY8Wg121A4TUKpP71xPsqAVF1wPtbX",
  "key22": "2sLmFpxxKYzUtZz8zqsSKTgA286Cty6e3TmNZ1fJm68sTYui31pR1qrZuXa5MFsm65RnLAoJYLpEcEvEnQPdDXSX",
  "key23": "21fJt7Y4Hd6LEuTaRCzpkQNt4fSvcSa1PoUK1ogMPjmb7ZNtDErVwFHQSWdfpFqdHpZqvVQoNVnyjozsFiS44q17",
  "key24": "3BfZSvEteT2Gcw635NbmGPohkuU7yGRayCDSYr6eWET5GQbRkavZfcpods5D2hR1Ht6qtaPbjEDeixjBk7m7vsmZ",
  "key25": "jZyZRr4SD4sFawQapZLhLouxQFMAsbz9NnUCD82UQjdSMQTWG85TFMbzjYJKdnKkGgBrq1pR9XwHTziuXzmTgkb",
  "key26": "DpsjH2ynYvUsFYjUHZZzmhzZKGfje5eChgy7sPYWWGASjjNfZF1ynJ34iAeD7ENCsrGLEvjs1L3vH36JAnW1NmD",
  "key27": "3TP5cyz69jye8oVSXKq8cioVg5pAgnPCSNt1J2cs9uG4To7z5rhx9uQW6urapMoNjRweLKo62FNVndr7WLQoHF9Y",
  "key28": "35UVkTDnTkntv9aWizoJ54d3VcgmogWSJhuZCScDPmcW1ro8jZmCFcYaH6kSGdwwRKMbE7ztFmd3TT9HNzpoZJKg"
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
