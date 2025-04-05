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
    "3m2wjsoDAsi7BBeQhFPULqsXiGWe6ncu68ms6RdmtFqkH3SkjEda4cLjTwZzEMqBhat3JtgZiU3A9wFr9heBXNcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SNZmhRP2QP45af1rHj1FKWA92v9gtPAgpe2pLzNnNnd377DxS4HVbyothR1gaL2THXvaMn9uDNU4aURuRtFZeJs",
  "key1": "5DTAAroitGxLAeSRGwv4X6WEVKvTuh4khNvzVHTU3oZLxj1G5qAbfVuqUykmx47sQspjWtH3hCEBy8ZpdpowpxAF",
  "key2": "5UHtvGyb91KsF3eptpRp3mvoZEUqN42ysJ41rrV5be7ofJnQTgUHvE5JSuwTr2isDiJJ39QMneNVWUsRzzKZoGD4",
  "key3": "5n49dzBUumZUa3d8T5Fov6Q4VR6YrPmdtpPt14rGdm5QK9JKWRjhvBu4XmXtfkduvZFUonZXhLQj59et39QjBkfy",
  "key4": "4hqtmXW8kiwSVFPjTU1FVGDvNbMd2ts2H9Xv3GYPJTVjvXiJvsvU7j3cU7qatcw2DN32Qd5erAM8wGB6FR5tKoHF",
  "key5": "4GQqgkWKaQYhuPnJFuRZrCSVSJtZoQFSbzzVJHwhgT7s2HnpqnvhYHVubkWEuTo5Ms62VM7oVTqYVSBKUUGQAVsD",
  "key6": "2TuMEfRjM53nnRVwbpBuwoS96AkKc14uM3tsVvw5qgd4PeDFjQe6ZaSbBVdtaMfU58tUVHJ7gSCtc7wGkjSFTaDQ",
  "key7": "2eEbrZ7mwY15DYfuVqRkW5ZDZqsNxaxuSzXCa4UVSL1xYv1dD4122yjtSBW9BbFqn39qdNx4AopZr4tYwCWL2oNU",
  "key8": "3fchHy3E4iSyrVNs8uPr1zqjr1YyMA5NiqJ3UB53hSDEmeQ67jhagVA7Rwu435kuxBFmH32YVfh9WyRBWVqmNXcW",
  "key9": "5JQhBd2PzbH1wcXKuxrdUhCHRSFhqPNoEs8WqwnjH8R7iaKthwYvV61zQzd5RYzJ6rykptYY1zzG9RN7zGPFttS2",
  "key10": "5ot3zDGynJAC7uufeYdrnkFMrJ7UVHiLSCySTviFhouHZCrScJE9bBVJzHpQ69A4zG1Vt4dDYviwxNF3z4s15cYC",
  "key11": "Aquq6VGPTeitB8hpPxisjykE7sjxmnu2FKEaA34WcLCGSDEJNZrHf2W5Jz87J9ECnM6sauaXNJ9Yi65b9msaeX2",
  "key12": "4EGMFRoDbj6pL3FoB7z915LpUVMcBbDdv62Nk5b6XPiGgeSb39qsRvDmh7vPueZKZbMQDbQ5CwSwCPBCMFKHyukt",
  "key13": "129NC3fUNWcTWZdHDza3YYS6riUH516ABrkq65krfCFJDuChACTmLPJHZfc2TMYwdYQ4q55scDpizJp3CvU7k1vs",
  "key14": "JE2K8v73GW1PTWccxiazhRwGCCU4P7vKX1wfazfV7PH1KEv5HbzRPp1Y3cVcFmwr4pVk9ZAFvg3CsBekDx19GyE",
  "key15": "4Ec4xwdjQCQjTNMgzRuQc85b1unfHF156vpzdTisHUDvo6Ngv47QxRV62jPPQjRptJt8hDVmDGfnYGQQ5t6UWuSf",
  "key16": "3Y8pXNvBS4YonDHkUYhVS2nyv5KMwyzwXmJwxoCp6RaFJjTJDkgeZhGgZdJJFxsAoZk6XrLHrP71GAGcVgzniskm",
  "key17": "5c2ZrVfZahidNPboi8dF1ALmcdpPjBueM92AeX2jFeg4dy7X7DEQ6HWamcz51x4CTSnZQKz9XhyHYEKuJk4q1GEZ",
  "key18": "jCj8Vx1uyWWk8ir5uiRPj6M1UmkszH3b49a7K2xgB5qrGEYdXZLy1DshJ9RwQjH3c1YhSsbeSx1dbufeNJtKiee",
  "key19": "26BUk12bdXVUNesyNJPbFejK3cijvJNFQwfqPCARPVnvPW1duNUN1FHFK2ixkQNwUYoynkSymnXqVdSvciqVxpbD",
  "key20": "zNbWnCwDPBhd3jArTiwV5ZsrKGjrrvCBNrstHpnQ5VX3c1W8uLPxVyTjY2WyGjGaSRqqUKAotnxYLmL55cHDmnV",
  "key21": "4RWxX1dFx7g4L9ZX3a4d8STWrBKW1TtKDpZAX9aCB8aeCQXATjH6FH1X5CT8rVURwyX9h6cFC5bHjTaHsxuPCZDK",
  "key22": "5VD9KrYiKcdg4xT4VKxFSH12fmGULA66moX89qesjRAHgjeWuSQs4DsdrXpM4yfuAKxTpXQbMmFKLLjKMTBvu3BP",
  "key23": "3m1RDxvBuaASnHQQLdf8pUc6DssCJ4X6UJt9EDCuQWJ1nycQm68SyLRTB9Vo37j43U2s6YKNgaxPaPVKC5gDiEQZ",
  "key24": "ZP8o5q9jPWswQHyvDs7GprPMnX9CapewD2647712Bi8ZvpWUtoNM7xcVoNi1vycsV1dBRV7ix9m1AENCzQVUkaM",
  "key25": "59gdAxJ7t8wN8q2rn1PSfgTPVqFZAcbMdzcsnixxdZ8Nfg55yvEmjuuENML4a7fEtKUcyto6CvuJhTBXoy3maHHP",
  "key26": "3wBug3gm6iSMQJHKF7iGZLDQ6b7puEnE67btzsGUZck7xEFPocpWJtLDsvcoePqYYj1pEHooPmXYxKgFm7fqgh1e",
  "key27": "77otiwEAjfACtRJgg5YmTWifc34Jzf1PT1v6EZFQa6dA5Cn21xmLszRQSAoAudyBpTXpHWkqKXpMm4nWnMSiYNF"
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
