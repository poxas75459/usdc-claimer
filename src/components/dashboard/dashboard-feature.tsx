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
    "52Szj4w98z2Kzp4gbW45TeawmgUsB33EyM18vnPVPNW8By53EJ4cLZW8BPTkWvRpLfXbXpMyoLbPoEvTqo6jGwoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FYJwWAdDTEScNwgBVmbhHeTnaJe6zudmusHBP6GgP1ri9tn8o3doBgU3a8KBK9pXdSAvzYssVRmNNjFR262pYY",
  "key1": "3zPb3tFuM7kbfi3VXp7NibXe2gApbzymvzuGChZLy5V9WekxPt6ARSSVyiEY5fqxzKHE275UfYTWuuZ8VJUC8XKF",
  "key2": "2MtC1DQJkKpqWDBSEMJn5n9xtBGKnLmri2eMm5eNQmFHy8ay6PcbUQtmeiEnQ98WpjegYFfnTG2iVxQuidkjxKuK",
  "key3": "4ka78rZEcD7GqiL6BpwP4RkTAmjdDggtmt6qmvTxXrTCEZGGZp6FKXfCHZ92aghec4JD4QYH4YLHdFTGyWB1w9sb",
  "key4": "5dS2ucnV6LV3KUQhqW5TCNggVtiWGNYPNcfyd5dMmBA7PTDhwmUodjPSrzf23NYvsvfyy4ytdbkDmXJtD3UU84W8",
  "key5": "VyY619jFeCgioJSUEDuq3i1S7pw6MHPL15TXAVjoJaA65Ka3F3PrN3jSiMfYmRL5Q1FDDktjNhVJENZgtuT7voD",
  "key6": "2GZVyHTgjYsstUHKvooUdaKvkoes34KzkpD44ua8rEmevbxohae867pE8i7KMPFAFsP1cwgzzy2vHGSwCmoWSHqe",
  "key7": "HuBTe9gijsBHMUoz1nQMFMwjbDDNC9SXos2CkHUgLQWyM6X7rJyvkut2HhQSXZPycVZLqYZPg7ntYj7PEvhzXKD",
  "key8": "S326jAP98Fiz23MRxT1dwR4BMQ8ThTRBZcM7mPhNwuje989oo7C2tinwxMNHCAsMYhqeJ9NepmJNUfQjUsWv3aB",
  "key9": "4uCG5bet19MniKDiZANyALF1fczW6YKD6AGFC4vscsjqvgW2wJgxrPdTnq3Zz1MpK92HL1nQF41MpiNKS6rRDgjt",
  "key10": "4z4556eyu9LnisY42oHLcmvQBWsN7akPKZrzpTescncxmyfsXCafvHNLKhP6vGtoe7M5LmJ2CvJWYPMBAx2vQjRJ",
  "key11": "4JaP2AAmBYCthyaEpr5NxR2pYFnVGSxxQdtptBAibjFSBXJspHShkwSQhGCDjaiqv4BVD4UgM7SLT4K2BXRE8FE7",
  "key12": "2mjieiJCjBTM1iDZbx3k6XuT88uipUUxutpZyyig5WSzKNJ9G4ZhuGWYK3gRmMdeq5vWet9aGhHmNBko8gtq7ZqY",
  "key13": "3zZjo8LimbYG1PHaqWfBRmZ1ASBVLUVtbXjCqQ9wzz5i3Hevb2pMP7BVwgfdz1edRbjcmvB5fTuZEhrY95PycdKN",
  "key14": "4sVqQVvo7ogYguACs1qeMA8HRmyXNYUSdqVgxySw1vKihUcHweR8yUUaCimq3aiTb6w4Ed9HGnvCbamYxVnaDNyv",
  "key15": "4132jnxQ1boj7xBS85U11pai2cyv4xvjWP9s4URFgRAb2cFZGnvDDpxazG16V1S6qtgcNxmbyebg9im7KPXwMt3A",
  "key16": "5v4eN9u7zomCBaZQmZM8fCtoj9U4C6X9GibhbdwJNAbwe5mFq5PNwcWJRVTiHc4Dh3S8jmQQSR3Z9ucu3aCb39N7",
  "key17": "4pzMspEcv7qFRHoCZMigtdMQ7hzrz6RshopMEPkDTbbszoAxgJdh3i3zvAn9BTPN16EPjNzbpkC9coRWgfu1Ua4F",
  "key18": "SYU9sAFnSUGaHxxmxEAukPcS7iogrYuZYjmCkFLtFGDaRvpgf4gh8bZyRVjnDMAGgtT4rVcMEKrJVJDSa24bh4E",
  "key19": "4v95twpACgaPQT5HCV6uQdqKGb9oMbpEh1ACkHTf3TmbLikxDZEQrR85tveMUZvfuiahxNWKuFzv3thuJZeoTYjV",
  "key20": "mrHU7hXfFtQvAq1DP2mPPP2oTivDszMVu1navAVcBAPcFQo4iPWTergCx8YrBJJKx3umKNkUjcMeHk2N5roEoLD",
  "key21": "5q3hKzTy1mBFbW9UAkp9EiRyxQNZx7xHqkn7mw5sqy29DQspLjYUaRoeq9opNSkz86KsddE8VEB69HpKGmnKq1w6",
  "key22": "4k7PZYKDyH95yMyDscZhwBExuc5oKzZ5qnnvRH8hUPgf7FCeZQkXnpCRCh97RUJ38iPj4iEbwMURurKvCfb5Qzax",
  "key23": "46cDuXSnuoUmAfvPxPwttSFwDcP1LqqbVWupXrgUbMR5WyuziimSakGpZm2NUBHo9e1hz4B91ECWBgnxqkuF1B1L",
  "key24": "2iC2F3oJ8o88Lo4fgaRWfktmA1x8USoxsgQDhk4qcEuDDnDi5UmXgwBseMrQMdgh4ruPvFyzeSsfyzvT1zUZEeiC",
  "key25": "2co3K6tPvG3n5gtpY7p8AD8Fpo291X3jQPbodLT2KR1KwHGsF9oDN6AsGdSMZsSXb8qpNqTYFNhh58WhNcm4vaXW",
  "key26": "2DKmfvVFom39ymUoLsdGT6hvmbpWWgSUeWTxg3iNCnHmhcGZs3X8v162T3kTe9PtviPS7dyR7DCSSfwjnBYrkF3g",
  "key27": "3Sw8muTV9iBhpmiPxfx3BXFkZsKqSFbzEHbLYU6UQc2TCPdM9uSCvQj5BMZ4b3dpQBVmXVmYcxDmUoTvfTUc3d9j",
  "key28": "2G1Zu5EVY7ey43mjtaTXGwGxVgaXtkfePPCs89GbGkYyK4SeqBHpgaJRRCfPVDp8oc6SRNJxbrHsXiALxEgHUAA1",
  "key29": "oRShbJe61VYosgU1eCHT9yy93MHBDQrgkT4DZV8gPsEXS7PNBzsuMx8YyUqp4q1ZA23Tf6cnUuX5ApfV4n9uKwY",
  "key30": "4dNfHunbWoUWDQ6XuD14TL2Qs7pdh9PnQiWyr8aHdq1jgqCGM3awrG3TVec1bsMtP9JRKzwPnAJJbQTRW4mMemA4",
  "key31": "4P9J1G2FsaRJXCu2vW5uXRvTELNHntr4LE7aFEY7DGtYTuzASCdM1d9EPZKUGLyXg1mhv3mT4H4rk3t26kt77Ndc",
  "key32": "cEXHvmFaFEsKyoecvYT6NtsRw5gMQDxN5GXpGhRZvfYzm6ccXAs3iN2kKUUfYzvXzfuZCpYUpWXNAGAG4XmveyU",
  "key33": "3ZkZj8V39Aw4wFw5zdpmtqRcuSsNsmfRJvTz7PXC6qBGpP94cWGvApbVSfPYrejAbakRdp9yF7ZQ9obHsR2QWrmm",
  "key34": "udAHysBVTqhbJTqggD7aR2foEE3T8DAtX21CBHy6kJ85zhLYFtJxD7FGDKhm2Ad7f2kK3auNeTepCNdGnZ5HrhN",
  "key35": "4CxMkr4maeH7Vp17DvtaV9ZnKWKkaaYnsvwZ5p6u256WCwreMqgkdkThT953FigNq5CtduL7qLKi7XGHuc2BSpuL",
  "key36": "5rqYppNNaMt1tBsZC3FaZ2xsYUNpEi6p6hwkeJwW9P4NpBpxWyFr1E4egPMpbJ6YjvFtJJ3DthGSaZ4ZHNCbGQyE",
  "key37": "4NTe5ftnsuRYeUSxgyx6Dn2XMFLvHpxDdAbFrnc1YvvdMnwjZCzcpQJ5E76omvSWnyZb4T25iFoCriD6h1icSJV2",
  "key38": "2pmZXu3Ewz8w41DDfcdu79FaVBjuLfTcf9HpbeR4sY2zGERMkNqrfg3gSp1Nn7LM7A227bdVMf73xSuVsx8yrGHh",
  "key39": "zDvWKj9NY3zxv5oJZYnRJf88GMNSDpHQkQ8orQQUi5SMnH6kKqCQU4Mpod3Us8UF87hPzVCdnGKXaHHALF1JbRv",
  "key40": "3QCYhkUSqQWCvqXtjFk4G2wcvQjRBzir8iuzzPksBA4uvRjDtXb3Rw2FUHsrgg17z2EwezGAqScXD7Ks2jgXoboY",
  "key41": "38rUgg9bBDrcYxN5B7rksZnDBqFJrPkKHj7uyW3KoBbeGSMToro9rKjdebM6erpxidifs85e7HsQbi5Cz4XWfdGb",
  "key42": "4BRUyvTFjH5mEHwhvx89cjMVzfd755tDmfu2VrZnAGNXvqEMLNUjsJhME4ccnYVKPerJHJsn3umVoYtbtF7UN9Un",
  "key43": "eoDJghK3rxXvhh8vzGBRTqL2db3KFzHMoYhmAsgvC2ovDjmuGPFeg7UWDnwYxNhHTUBgPxnDr26dyf8UaAkKQEC",
  "key44": "59XJFrhmLWSsJUMMgqDV6cnwn6rW51RdTCX5R2rxhEtJNneracXzZQKXCdKQ2pW7Bzty5UpdNYuwjUgXf8LMHcxe",
  "key45": "3Jiwj84Dw7RCUAy7FTg7X2q4T4ArAtcmT5pSmKdNmPHYPcUesVRGdNiSykFkyTkQZcKyEySPBbQaoT66PkPFRamW",
  "key46": "2yw9WqQhDtsgcdRGUSnGNqeB93cV7FBzUGnEheswtCokS84WNATUejss62Lx6QAZtbNNGC9RgZQP4kqESscJfxse",
  "key47": "3ykbVhWqCyZwpTvjHgzbpEayyY3CcyiWvifvyC8J4cu3khBVprweCt2GmaUVwctNN9ALYSh3W4czuXa1ttjwo3tB",
  "key48": "4NpPLX8oFifHYQFSm6bnDS5Ckgu5zqsEKQVQ1U1gDCd4zWCXZMhfnScz4Z14o4MdDc63ZY4shRCZPAtuhnMGd3qh",
  "key49": "2ocamPs9sHCsHAftp6RiF2CcRhsB2u6ePD2fxCg6A3FwdnY4WnV68L44ebRnDBvZgCfPsedE41eMDLJBbEEby1Y3"
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
