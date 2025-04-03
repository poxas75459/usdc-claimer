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
    "3Kwakzqt77GntVAZko35bJLGHnN9tkpkpE42LgtmMJZvHonRp343VJwjW391JU4aBNir1T9cx7c6DyudiJ3AMtnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U4BpYZ42qrmnPDr7oFYkfecMKMK7CE7Add4DRnQwRWZMx2c9yme959wDKwnkv3etpEj89y41svkcrygmTH3um6R",
  "key1": "66KTiJwq4hbbaTRUUYNTy3Rsnsr9W1QTmnngo1i2LsZ7t6iPJMbaVCtyfSdttTT7YrG7Q3Ci7JDe7dYMZTuYme2X",
  "key2": "3dtNqdCduagUkxznd4izyiQTXWKCSvXh8uSy7WRtMFYjT6ZafUaKW9pXK3i6nbDHTj8XoyfjpZyHMxE3vmLAaAFo",
  "key3": "3Ro9oX6F5nK8Nno3JW29mofbGYz7efksSF2puLhBio1rsmU7moWb1mTQfPVzsHRkJHicsQnfQkKC58RNBry2QjnK",
  "key4": "3pUcYxty7tF3sCmGSZ9ku2TGN5f6eWUear5y8fuj9JwZnHsnZ3vErHsxziV6piXwdb12rsHS2a5Z4uQDyV15NDBW",
  "key5": "3vByXo4so88f9mAwCbB7oEdorPwuDD2pwCdUyNKgJahANKtHwdxxf592VnGceTRDPQ5AgymBFfKGrAzf5beCozXz",
  "key6": "3ECCkRYj7dnL72Fo12pCLyZgk1vhPsvVkzKQ6DzfG5ntA1kSRGjCqJVEg7imtkWmuu5TT1rY6LtBXp6NZHLmbXpJ",
  "key7": "233tLAXUSBqr6cZ3NYcSFtNgir1DR6d1B6QAmcsRVDGMgUdbVXPnygUTnu5DdmZycfLNPF3oYvpbPc5eoWdqPPwf",
  "key8": "k3mwh9ag21g2TPdzxesoNSBpBj17LGKFruYFmpf5TxdmwybeSzfizU2Ag6kcXPnQYYQQQRbJRcaS5jtXkrF4NTv",
  "key9": "5GcXwRaiUgUvmKd3vV1xGe6PgktpSe2d7dbuy4Z3n1E6gZc4FGhe9sVDLRvUSzBc6ii2ifCb8UAgDctYd2UvLcEK",
  "key10": "4UgdgdzTydibqx6L2QFX1BrwYPALF6omGTYAntEtjCwPLJgCzGudBSATJCZMpLq5MikdXeGKDt7tXPr87dkJDU5c",
  "key11": "435kcVAQ7Kn38jCs6FQDAHHcwwWYzfYipcDZ8hmnsWSmo5YXa3uiY6zh7L3scALdJKF23KkiPKFsp93WXD4eE5xQ",
  "key12": "5Te9UumJSyZ7W6USMaFvumMUvZhyFJKk2Nr63GbRKeU6TVgiW2veqiu1tbu4yRkGD6VEVWTwoSiPGocwTsUrNsjZ",
  "key13": "4m4HvW2oJ1yT6qcTiHTcWtMDuLfx2gcfCxsPS6L6xVAYLKr2MFmPP9NPWKzXTGxoM2itZTAueM6mQ9WVPssyDf19",
  "key14": "41fHuYqPhnfJb6ePwe84YNBf9h9cnxG6n7RJhNH2BwZVn5TGz39FbbFNo9VLDaJmhvKfrVJmGNCh8BDyiVvh6QJU",
  "key15": "373NQLxRBFFkrbSMqtfgFew4hDJQE8XheersJbxWt6Nbd5ZNCMxTq9ttw1Hb5zKM5TFFenrubQJmukQ2SD5ENWwC",
  "key16": "3ASXDE8q6umqmiK52HtMt27RqS3g2UEVLv3RT6bweaGqh5hcNhBncVnskXr65X2QgRcLNtBXBkxWFnv58AvTxboM",
  "key17": "3jwvYqSzs1aHJkhRpNCofGA2JgDNWvSqWLrvgw8Ah78MWVSDKYDuR1oL3XcxNCLGQvB3aXxbX53x3ZXnLNcUh3KL",
  "key18": "5i5KePhSKPrNsgABqyPh3tBbonVUncoLr4TwrtFa8WBrgmiLfeCTx7PMh8jNbSuv1vrpwnkxLmiz6ENKs2VkY8sE",
  "key19": "4XH2cfeTsZ3CzGfqyYgPX2dSbxHHWz5VoWV4H2vS3eg8ec2GpNA1MZp3jXDG3nmHUfik9pJS6MJUa6ST1p4gu6o3",
  "key20": "44EDCnWyMqx2d3U3E3ebxwuU9LaFoEuyDYTqHZdiBb9SKNUn4CEwajV7EYPSuS1TieScGf66VctFdfytEsFkbakv",
  "key21": "5GhmvnMz8YqZ7YVxBSmYjV2Ytg6hrWtjvtFULxcyJZ3PXiU8GWnuMzwb3uHtcHtMYCQ6A5vm7fB71voAsdB7Uurm",
  "key22": "4hQrkfWjVarYej8pwY628aWQpitYUcQnmgQ9TBofivMWyYgtvZt1MrQiA4K9LvgRhs7Z9Urxir5oKCnxraiZcywc",
  "key23": "4ab9quVeX7Ec5FBPfEKet1XWyz1S24oVrmyv5Cre5AGeBJ6cizo7ytzFye3AiXjd43qd8bhq5MUMmztQmFuQVcWU",
  "key24": "HzwoqE9Vi1MZ39VAMqaaNhNAxpKv8CK2pjdkoN8au4Gi1UBchzyKVkTNrQcxxVPmJcgcdP87dPCuG5EFjewFMDx",
  "key25": "2QiBT6sjkr8toagbepnb28KrB6WoJv52jU9g3wT3KaUuaNGQ9FHa9bb9CDkCranULHxvyyNBMcTPkunEM94cRzC",
  "key26": "5Xx5djzGy2VK7qNuH45m6fyt7qNRWjFEetT3gQVntBjgEcwLAwniXoch7NYN8iqznERc4cVLy34YWx4bKnqxCgMj",
  "key27": "4kq3VBe78CzVPLDKBhJJjf37kiViQ4cPrVRXCFVH6TkCf4vMBFSaRwRFirVJ6RDYucTzRX7w1fenwUxZ841wdLEf",
  "key28": "5HKXa5Rdk3QuTnXvZyCMPxi7DN9JUmgUr3nqrsKDnxL4g5a41Av6roQDyLZa8kFMScJ78E8ixKq7A5x6SZYyoHz2",
  "key29": "5zKmQwvscc4hhrGUWmvETcjgeyPXPUmnwGRoLEfM7agAbCYQ3TkyjMhhnDn53D8xTZ8GEg3pQR81iQvnv1sxvwLx",
  "key30": "5FhQSekt9aZSvDEYrZ8QGrkfQWg2fcPGyTqyoVEvbuHB4VuFVtXeejHiXSx5VBNJz8mn2qisQ24TknMh8K57cDGd",
  "key31": "5q1s4cdYCFuwWnt3TPNrf1v8f613fVRTF8p23nLooDeA4dvXZpAkbh6veALg6wuAr6gny73EJPJGeydyPf7zX6Z4",
  "key32": "4CLek5TSNy6TRLjyHdWaLrCJ8gHUKxw7Y3j5TuhsSdtVQuU3N4GpnP62Yox1rBpwhzne5RUPbaxF34VLsbfdEckh",
  "key33": "A7rcc6zrsDuq46viKpuvNchwicXQ2N8bkdQsGxAYNxFvazTcnZ34cEixrY1rRjYbMzmpT7nwEQCrrAH9EVwfHCL",
  "key34": "K1RWDf7etbSn3v7fGkYhUPu9qf75ku4PH4r4vRRFGHapcLX5X7C4kngmEry2jHjVZJQosxsX4UTisJ5JMm1W2om",
  "key35": "2oPhHkkNHano4FvEVH6bKJTeaJQLY6EKeB5SXPd5h4CNtUReG5TsZ415ZuDWxCwgMJLpBi79J8PMuo6D9kQQz3jE",
  "key36": "4z6LiD6qPR6Kq8ah2YxsxGkeykbX4CTMdQytR7iz5PCNKmNZTvsD6Fb4gC6G7ec1orZPc9jyHbWmS8UaoqZPhWkZ",
  "key37": "3Zf1AtCnDLXd2roqnNHDFBXqk4Ac3i3U2oj7rYYVuUdC9bYXKFZxELuqbfgHowzYQwb3ZbMM9shBmYM7CgjeWv4L",
  "key38": "2sABkrQxFHCNUeyCczHNNL8hn9MiZJaVjXET44NPuvPtwKrQrXHwwDteSL2UGp6wUpvjcPCaX89Un1PaGibYfLHh",
  "key39": "4G2wtKNap4Ak5uLUoBDy6CUsV26SxX2uFDucgEKE2dZvTrdv7xmZBYzwrfyoKASeAdUbxVZKPe1ujHHCDQGYqhsm",
  "key40": "5vZ1oRWJWkBHVtKceUSjbt5HzKe4F9EYDfHNmiDXDkYfrGpqWfPSKrxbaRxKx5qyRsghtR9NpcbCqbw5ntq7LEtD",
  "key41": "5x2q8FGN1j5XiLfsb1TBdoJ1fEJhQ48MgaVJgJW3EGdtH3MDbvij8E1Q2PqvxN3n52y5ai9vLkrZKuzFfnD1wcsF",
  "key42": "uNpoHSfhGPGbexzo9qQPvnp1j9fGmJBFN6mJ92z6oAoe4ZT6ABFHwqeQUMuH1iTkRAzwsitZJz4D5s72Kkr6WcF",
  "key43": "39ah9fVQpjEJHmBttCocDgcFLK1mRaFk1SM9rmo3GE34Xv9nrc6FW2CSGKYUmZK8XbeT9mm9f3QCpgL2J6Y35ymc",
  "key44": "3GWFojbyt69Vjeu6ZX1dGdQ4RN6KgKBCp2PvrEkk4oY1hi56TaZ6DaJAhcAj5T5SGf2QYt3R2D8uk1Kb12NP4ULB",
  "key45": "2RmzyjyRD3TZBJvf7c2pMc8eov1dgi928bBGSscpETs87EvjWaRSpmw3bptXHxnM2d5ZBvyya95ouzYVXRqKGr4H",
  "key46": "rthBkvVEuwDubcHyWmyrYsToAyeU2vazH41mTWKYh671VtNMj3XRRBAzsVaQLzXiNXyoVxmFnn7nmHarQHVnhXW",
  "key47": "3THyMZgX3CnPVn89DXUWwTE9EKTj7b85y7CbJZzsSLvdyq33jp1VB2KuADVmnkyEfgJDecseZxJ7PfXRZppf9hJC",
  "key48": "gG9UUReN2hjUXz2pX1JobNBMh96b256evbwSWf4Yor323VPEHaZYBNrvRMr8eCnqDTQo4MZ9x7K6MnThnxDoyer"
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
