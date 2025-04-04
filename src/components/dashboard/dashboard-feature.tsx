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
    "3mBeTz1Z72Qy1QPRMja8pCfZMsmUVEZNXU4PE9qwNWQZFD4jUJY7svtR3gmQquHQ1Ngga3S3pwMzJkcXEiD1deso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gP4vM7h9pvizqeYaAuL2X2S7WUnqcHapnudJegtc2pXcaGsQkV8CzdLcvFA3gM72HUHRwoCAb3HdKcxFgEGm4DY",
  "key1": "4ThubZDeSD5GxfQPSNcEcRuGJ9MboPWympEnPmWRhRZ4rM4QFD5wJTRhAEvmSKpBA8QyihvHteaizXwQ4LuPX55m",
  "key2": "5GCBh1hd14a5U8m2z2SfZfonS8tCFHsB2se5j65MMnSEF2cMRUJvBzHB2jteSkNDkCts92oDdebiUc2sF6ptSkEV",
  "key3": "zum3xtMzmBXUjwLNycu7cPhsAJihYVK1bsAuw32gmp2LBqo2SCPMSL9jYkbLhKXcMAhGB9zgum2arDrGqC42GKY",
  "key4": "kDwXs2M4oMGT9Y8RD74P2i2qGUMNWPGKWRLjbJ85pBFtWLEiQUh69dK3TcYCzjG1nSzXF6PRYKVxKqyNpDZqu9F",
  "key5": "2UakkT3U2YVSzB126CPBHdt2B5VhAh7Y1nmrpbREVNAN7MG5WhAAcU7TGqT4LFv9RcEcR4y6kiWciTqJoaCRG5xh",
  "key6": "4j78njW6FXUnvRWtw97V8Hf3gXgfaN17rHb1Mrh9TdqqG9cG4nKVZnSmtm2NTUcEUfttGME8pMUgxFTAWnvMvwef",
  "key7": "2FcFFvBJMZ9xHSxRkaJemmMpVwT6e3Jhs7CsdLPNiG5hasPRTMBYxrjHd4h6bq5L9YSt5ttYPeDsUTQwYcEdc6AT",
  "key8": "5n96qtBnBZEtuaraegyzvuWchDsFA29Ya5PokVLGCKcQwkavjGEBWgv5h39ZCFZ1FhcqvnS9MRAbPMqNe5baGZHe",
  "key9": "KEALJ1yzfPjuj6znfcej5mZeKQ82tVuXUBLuJAomgHJGfYiN9chgEHzzLd5xHLemXrquqaosT7iipQDQ649ywZz",
  "key10": "4zS9PYbBGEFbymEmkVLFsf43DQcHuXPMgw3D1WcBxqvfpyya7jq6W6UG37Jd4rYEPfFA9nrwXqgKuaySgnTirSGY",
  "key11": "2wmBTMtHxkCEuT6wavvyefH8zSMEyPHCELaEzanEAxjeLdLccVmUC3RWuXMv1dU6Lx41XjadVLB2CqC57jWGFN9P",
  "key12": "EjpuwDcFTSW6KwmLR45VLFGiQ6N7Zc9ey9tP7UkHB3oLftSjktMDBpXptGELZfHEnkma5qFEKWvPXtv9t5wMEna",
  "key13": "41hJA4nRUqDru5Kq1XHVHcv6ecrNXvn662aqiBULA6kazWvrxJQt4juedmSrVCL8sXpVKT8jn2ix1rYQ7Y8wdBnE",
  "key14": "448Zef3sopaaaPTSkmU7NYaz1VVDNaT6Do5XtQtE3LRo217n3RadQgadajPKxt4KXHv4WEwDEiUrg87ozBVyeyXW",
  "key15": "4u5NMTLsRUG83GRDhWESyXMZZAbLabP2ak98TRQedEG8voQoEEeXZjRYt5LXUpFLruqS2VKM9tNEuTwAfbhsCZLQ",
  "key16": "51koGwdpQncPnFg7MWkfiJJFwU71U4KZBdpRgnyi6Qodeekqxdaa4Ve1s6P1qJVnLD84gfUtYnHLX3R6iED3K8Hy",
  "key17": "2ybqBXeSHSC439Tc6io6jB4XL7Zpagw3wTNDZZyY4dv9bCWxg2BP34KSFdRQkjwT3yaQLMuR98LzDgiqjXAtV1yQ",
  "key18": "QvH9kwZHQTSD5sCGeXAEBzGFAoR2nqVdspemgyF2ovJgzNmiKUCiEJQuWZ2qcfMLhjzE1unPdsaWGEnxa5p69WP",
  "key19": "Yqef11FEkwJvuycD742SeEixgmDQMX8zGVTeskP3napnr7g5MFxPjmPKQSBo6XohM4Fc9CYBnnKxzqeD1Buo3cD",
  "key20": "64ZQDfT5X4Egr1k1h2vzAJhpzNkCXP9pVZxVZEsLc3XCU9bMrnRXgipPPmSJf2CkrtnxyW8hRxMAs6kM9WUCo3A",
  "key21": "57MhqYvpVRNLsu1ZWKhTq66GQMLAisb8GqDuHf3MeNNZM75CfX7Xb6Jqz6gnA7i4DWgRmsRoqtpb9AzxTNPdxES7",
  "key22": "2y7jGUMQMJWsjw44MygL5Sp8RzKEsVeXS4FjjZNz6KxuEtfjZCTAFj55EY4PBFd7gtsySu3chHtm84dvEJjbfJbq",
  "key23": "3KBnQ4HjJacpg77RdLMuxxCCXBAKqBmULWxKC4aDRFxyH43rno6a2BvDvHXCcwYohaRC695xKyhG1aMQuYeMWcsP",
  "key24": "4fSDipdPxrDoyE3yMhxF4vT73qYDv9NmSafJKcjPVL7TSWpFGNRuoQYUL72QrwM7YCFrb4KzzBQQimmYmWrGi4aZ"
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
