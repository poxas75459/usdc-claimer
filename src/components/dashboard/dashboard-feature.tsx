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
    "3jJ5Nd7Q7zVeepPocMWPqXyvvRGPz8uKPU5DUpHk9LPs5Y2o4bQXL9T3kYeXQupo3udQMNbGLqs1hVta7eSZSm2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HGumCkepoLSXXSfE9dS4yCGYyNCeedHm46iYaGU5RzpsdpWasGssfnARVuhFy1LxU2DUrLue9ynaLm9ML6iiRHC",
  "key1": "48QNnjh4DpvX8qUJZPQVp6en2JPhw1tDvRx2D8Dzdfj7xTwM5xasC6vxCBsTT3j8b8EcYZb4tBQM9BcHfHovbbdG",
  "key2": "43mgKkYQwuN36rGYU8Q1BJY961hGSiRNvxx3senhg7oZZztKuvAR39kphFYRQdaSMhbFV7beiZGbhts5fEKkJtUs",
  "key3": "2SFRPvUtxnrGt1yGdCd8jn5ssKfBXNQvcAjNn7EKrofkUzGr4gc1myzBtgk1GYYQNuUYbrNcCQCgEaUTnYCVmbjy",
  "key4": "4mxL2Mr9iVCQamRLpHwcWL2DnEBYNJTcHYT3WxFAdADhpMcHVFAM6bx882DfnQ2aHnK1oC4PvbS6CGg4AEoJ5RvZ",
  "key5": "zHTuL65xVALvZb44b5G4sXMPAJzDCG6RwHpUKhRSVHkdX39iFLkdvdccuQBcD3DjRRMunRWcRiYZmpaAczfVLYk",
  "key6": "5Az2tBgoQt5aBFX2zEsZJrPKy5EdGUX7Hg6ECg6XSz3BRK1DR5tmdhDqEEmuiymzor387Y8jnRZNNaWRS9CD9fkG",
  "key7": "32wJrJBHuVPeMpTGSu8MgvsggmEFpexLPWLZRZfELtRAiXcb8jqGCYbjqukncYR1Ht4PKfaxmACQ2XqPwiHcFHug",
  "key8": "4NQNC1JzdAm1QCADSNjjouhr92rnRJESKpRDGbdt6R3CVh639uKCszTBudT7A53utM8bLBoXswcGFC3oNBLfe3DG",
  "key9": "5a9JXKF45kYD3JU3xEHLbDMzByqJBnTxY4yTrqrWfSmZqb17wfT8t2VTsKz1ZbrhkEYtE9xJaUCW4nKGbBeMFe8J",
  "key10": "4TohHZs7kfRuVXwau14FVy1QGQ5i1sHESFE2W1rMiytzV3kpNteRwqL9GNwrx4WW3gUGMeBET9byYbXdAKDNLhfh",
  "key11": "2VVzKFw5y4EbVn9EEJyZzYYguhApXhv5FudMw7oW2rqhfRUAAADf4GyuQZkmu3R5YXbsmMcqgvmFsMuizY4aBemE",
  "key12": "2EpCJ9Pd9UYyAC8JJifbaEWXgyF6d9yWqWHxG5JHkMtqCeyibzB7cyoKabcr39pM7XsLfLyrtiswk2L4xZzZtSEo",
  "key13": "25sQbbQ2twnDuaYJUvZasFRMKnKhrbrPdnGBgsCLJBMKtVjA6se4Qwgy9n4GCbap2SFK4ezoKkfKgVjxUW4WstLd",
  "key14": "5LHC1TjLTyr4txbeGpPGmBUVcJJJSzMdGLdreZFhrDkZarKB9PhVxPTZMCGs2YE7jJkP99pv6AzvcvfAfCJY8Qyw",
  "key15": "5vQNsagSEcd8hUs2fsRN4vV7jN2k1NseyK5LV5zxhM12BsZqqCy7QXd6fsEp3KWdrCRRn8rRFVPQXZ7RjBNNdxTH",
  "key16": "5ixBx7sA6oSsoP7hyvdVxjCrqvrEi76uZvgTGuu81JLwsucbokE7YSFGsQYe32Zz2VAQNypmr3cHrsh1FQ6WSaaP",
  "key17": "2ySpqmBFSMnjec4pDQFzKjfvHN9F2AvoCss94k7n8rjfLyvFMBtJskXrVkbSjmTfhhsivNHry35VDJFEzbJaRvFJ",
  "key18": "5Z65AdDQSMdhH5BtF1r5kqjoUkgyB41uerHkVkNZcfpKJ4UNmXaw7eWZ7NRdSHJ2TR4Uioic6hkSWDJ1fFtxyxNs",
  "key19": "5kx1PrF5SyjdYwnzPFzPvVwkx8MnFf86M6s9q6CVyPHitx9EyNPHsVpwaNFz18NszdSy3jK9ptZKScWBRRe6Aczs",
  "key20": "4zx8dbgBbcP6aR63bXELGJSQYUTMB7PfJUBPPtcWqdetoW55jd1zsYoFKgS2LNm6PDs6gKrysBTs4advDZ6wvgtZ",
  "key21": "2MKKzttp8ocigBFGwts9xdgdWo3JgfG7g2p2W7vH4FEqh3Ls3iZHSCRQoN88S6rLaropdP1xL3ynUweXicCHTjWb",
  "key22": "SDC3oUZaJ8oijFMb9zSn431CUzGW82fKokZUDqHrYrzSU1pU5SgeMXcJx35A5g5z6mStgVm8Vgze1T4HMhGEB8Q",
  "key23": "3uZ2udYRiyTXrRVJJdFQyN5dN65WdmsBZRU5NbM534JSRRUMUDoEi5gjJnzaD2ZRCoamwMLymRWVg4Y29nxxCBFT",
  "key24": "5yiG6SWhA2XxdUpGaj1Ch1pM2Tw9quPC2Pf188vyaWophgCzPegtvhmK4wJjQnx7YTimSy5rnugh4wVznpZL3tmy",
  "key25": "2tYA6R3LZTJDukoHu4m9j9DUX3i2v3L4j6tEHcNoqjEkkx6QJAgtgokqAnGKSFrgcXu6PsGk7XWR8NapKG9hmYp6",
  "key26": "3LmrC5mvbJ3zwbajHtjbqxXL4wDFDqPUw6bqftTU3yR4GxuXzn1UMfc3q5LmbryNghascNidNENbyEa1SwiZgJ4M",
  "key27": "59aQXEbiRhENaKJqDZyyBV4Jbjx7oemAxK4LKbKxS73Tb6m7zkAS33SEsWNtdRFovPfCGCkuxiQFZHWnop6naS8B",
  "key28": "5BSezF7iPQ5YHEKB4c4RcYuefrmGGT4RQZr159ePGKQ33C2kxyrSN31vKZuNDcV9zegkaxmTySoTVk97iXYbKcRT",
  "key29": "4EsozXKheCmZxy3Gxd6iGbqbpCFkrEFZjfDZcBJMrWySErYYqkubRRfh9vNYVV5H3ZgaiAELjPLPjt1LXLtEi6qA",
  "key30": "5FWdQAD6Mqkynt8S6rncuVFoKYHZQuF8Ww9WYLyTfXusZZWPsVZuqcEBXBCt42TtTWQZUziNtFv2FYqY1MkDM65P",
  "key31": "3X7PvfxaUtLPmXPWMBaXgk4t3VFkbhQ6ewhfPCCVNKjNggFwhdmiZiJ68YE89GeWXfzafqAspgesxaq2SttAUTnQ",
  "key32": "5yGeRmSfY4ur89yCEEP33MBRwTKCgePEZiTHJN7c5Ux2GtVoR7T1h3812QJgGL6f8w3TnPgEbMtcnBeYMyXemJWe",
  "key33": "4gSU377DFXr1gnDqsjx2tgpJqjwUPKRGiZQtJTG8NhU9o5q4kevgPTVXrzFrv6xcCSogksifwfcNJexk95NpzCTd",
  "key34": "3tkbJ59D8AD9ooyjLuebtZ9uurwE6wVZtbZkZeD1PQLCy7VkawswhfomhBEnJaeNv4W2wz6cuso4sHCr5zUeT3DP",
  "key35": "3D8zmakxWkjaCahM5RnrgawmKoCcKVwFuD6VKUizACdwDXGy3K2pWDateBrxrHFusDFcKNyXkCJ4A9XV3JoqTZ6m",
  "key36": "3piYr1MmBzFA674t9kQ9Do8DXoX2BoPZtmCR1yeod79eFCdSQDihBSzSB9FdaTS4M8dCPjT5RD2oCok2FNKLex9v",
  "key37": "mAdG69dgHKpkBYNjJkCC9zeMhpYzZwzu68WVPJA37TYeEdv34mJAHPJ6kLvKYDpMfr7KDwsborKhY7TU78VVsX9",
  "key38": "5vwf2bCJ6yFkaXAtGeJFWZ776yHjsYAKpbXVqwsUFoMgJajqM9C3V5BaNQ5UKj3fWuf1qvJ3EwuQavorqPvYNm6z",
  "key39": "5Smqu8ZycAztThxrCdB8VRStaABWbHcCMQuuGSSMrt3hXTe24tuPyMjDzMzW5aX9DtpGCcSDiA7cf7cfFskSgVJL",
  "key40": "UbaDPuAZeWE3LrDLTKDhNTNRWBnQJTyF2ypnYr9rJu95NaQrgpdtCivwTcCDKm9FzkuW5CwasvX38vL7huDWCjP",
  "key41": "5MvmUZ67vcQFLKgVJ1gbAPnS2reHjdwL86tKVJwYuVXsk4edXJfq6oHmMQ9Dn29DBt6UMnbpCVC2EKWHnEAwVAVN"
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
