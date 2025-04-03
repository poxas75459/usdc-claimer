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
    "679crykvZVdh4Bs5M7h5KDrUjpvScaBsd3GPcfjuFzfwBtgcT5h7MwA3spxWRAYbyxkVpEPpgYMwiDK6aKXoRBjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecy8Y2mujCfHJaBgvkoiBDHFWcppCVEAdV16gWXyhAoiUMweqhoeuZAqNh9kyWo4amFuEe1XoUWqkB6Dmsg1BWQ",
  "key1": "5H4uvxgA8QxRdabXKrTUf6XQeg2r5p8Fzk5pXioTiht1GpEk88TwNgT5bazmXQL3bGUAbsoupaxaJ6QjpgEsjFj7",
  "key2": "5k55FTLESkBdgtdvLLAegy48fhekTGe8Ryz5abhmMhFo7BBEnMjbxgNTESBZtoVPUg8hZT3sByzdjoao9YTQ3W7P",
  "key3": "61ZepcBfEFfwKGsus2hfDnkMunMqwQzCyHxL5Dkn1mtx9pdJbWuaXWaiCJh4r4h3jsASGhdLtJ2WLait9Eu8m6A3",
  "key4": "3y3djvrnHzE7oSnKeUjfC2Mq31iaF5XWfd7H5gLJpe85qHaqTsbuidzJpMGhrfKrZCc27PjSyzerpNm8XUzY9m1",
  "key5": "5v9sQ4Y8wPV9afSsSEMLJ1weajvMcwiA2th2fR5YRhg7sj6T2HuLneStwuLm5KKvbNnS3bTVFX9MBH3vz7dEkuMq",
  "key6": "33TqDCZb4mCjGspgVmNCJ49KzCDxPuMZyaTpstNohuGXc56RLmZGzHQhFwvK3Q31iduLA7iPBAHCcm7ooNbBQJUu",
  "key7": "5gDTBnRBgcoFMughEoamCUS8q2ti94buEPEYy3ZUP7jsuNLgwLDiD1VnwRZzh7tmZXPHySiP9LrMA11UfyFcAMpW",
  "key8": "4Q1Xwj51FhnNStGRg8T3FoiPpGbgU7xiBbR9rHpTP4MFNiGgtdtnt3pgjxq6cAYgxyNFAJWZEqBL88H5n5pDF9Kh",
  "key9": "wEUBgvMJF7CjT8YrxbEqoTJy66BgjgcZon3fughdeAhv6DpGr1yGCX9ENbgshxNgFwaN6eRjMayEwfPfWtijZQf",
  "key10": "3bC9gXc5McX45enpSYSsm6x7AJBtcGWTyccEZveBni1Li6cS8EPVBbxTBLRrzbS6YMVXxZDH3v9WcSMGJDXaVveN",
  "key11": "5whXvJ1cDuSC2MVgBKNtKMNLxUS32mKWdEyzuWgDSBppsQpS98Xqh6ca8SjKuXDSghgehGyqrEYEHViy9YNTCaeL",
  "key12": "2X7rqZ1S1szwYvvbHcpVdiAGR6nZSFBFD6eM9AgGhbNsQLCffqq195wj2yDvuDrBq1QSs7o7zhPUokC7Nr4Ry3AE",
  "key13": "4hVQDm2KauSkCrkEnCbETeUdA4YvtDbKLAxAwKDLgAd7ykC28mJ1Y9K9KtcRt58sWS3sufz7DmXQ1sv9ahYvabtK",
  "key14": "4NYWtWS6DvVVQJDdSdphKgfkg7Gy6JMdEz68xHZJyi8kp2hvvw8Tryh1qpUmDXxpsXyrTYjbxcPEcgtjpiAU4MKz",
  "key15": "5JamWaJHb8azH8irFdDALNgF3xz4kue2NbULr8XJtGownt67BsKvnAuawPfPRLBytJSgAum7PuNr4X4amC3dkkPG",
  "key16": "4BtRVcfqBHrMWJrbfhAXLL27vzgk9kM2yQ7fFcCfm7VtzjeBkw9FDaGprP3nPfeEYdqUx1WS978KjVjDmpzsozQx",
  "key17": "2NkRBkzLXxvcjDv7Go3gz1UxmE2ykC59wEyanvUc7irZp1DmTqHUVsFdwizVMWcNa7zGUm3JixmGBjY8agodcwY7",
  "key18": "22N4onM1A6eQPz4CeABr48qpvb3c69Bkni8z2o9jHr8La1JQ7TnpAb3cA1RBJ2s2am9VLBtbr63nYJqsJh9axG9B",
  "key19": "61wsTZY91AubPc6eBMgEzhZNVb8fNNL13BxJD6SWwr2Zm6v1aYHVjvoY77EbnU1aFaa5frfS8nza7Dz1aJtDAWEw",
  "key20": "5sZWVX71isdJguLau61AzoQynFSDbBZEh3gwfTKg5rwbZV6uKpoAe7somJncMDiCRjoCnKi1GDzuNAp3AhXyfKER",
  "key21": "4Jxus4EHdQWp5Fn61aTtywqGWD2dZyRcJ3BLoaVzxQCahmkDzDvqoR7URsQnbaLB2YS5w8V5eM1gpMVTc4C4uEHY",
  "key22": "2R5Q6YEPoxeWR3PikDRSPigCGZueGmjs7HfHbpiJTYmjaJ3mLPS38n6Y5GKSnTBfZcsKYY3XUP3aqnpat2vhim44",
  "key23": "5CkW9LwUvMBsvmD86yu3KcstyXY84HbtKLPLGf5iTw8jXCvkKWE3b993mD9mG9ky3WEWWijD758KvypPvEP11qVa",
  "key24": "5PoZaVDkZZmthFmPrnohJpjHFkcNqHr5NUEHPmxoX9ATKaDk4bKwzxYGtHFbgi4QvtzREz9VU5s4dmtiwTjzaeRL",
  "key25": "sBfc7aWvvBdsgn4SSHEa4WyMGepHbgPLRp6DxDMRJeHojYAFqJiFjRGGi4iN8cGiZUQx2m64N3xQkzJQ4FDGESm",
  "key26": "5fJFD1hdgoyTKCxiiMi8pUQuPoxrA45gr4pSaP9R1vTqYiuBYTpNaRovjZ5bjr98KYKX7P5ZpamPNsa8RU4iPRpp",
  "key27": "3tMbMakzbUyrfRVmXM9sqmntsrxGNipvwGTTigUYEh5qUp4Kn7jYZnXM7qiHfgwkTUp393BrY4Jqg3eq9Sp6gnxs"
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
