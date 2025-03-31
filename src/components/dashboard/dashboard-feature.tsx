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
    "5EePrRmu3CoYanCogh4xzu5J8rd5GpeHsQ9uzTBDUXEUrA5faJfxKFZyRFVmNK1SfB17yPJQa6YSJxvBSBVTXTxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ofLVAWsxqCZLsEpUR6TBUgmgfJ9XrrpmKmGAF4Ji9D7Mg3Fu662F6kfLjdMxxShZRsNZ6nJHjpWpiXSFvuwk3Po",
  "key1": "5VGrgTjNUVjc7NtaAmGo9uHmKHHB1QnisnHr3aESR7MYVJCcF3aWBeGwqsq3WBCYUnHVuvKN8SmCHktbX2YBfQWe",
  "key2": "2LSBomu4AR3G1TvDbP1pMydBCJh7BNRWaWXyBrTyEge1eHpF8Gm1he9NcAgKiX2kPNXZxjjXfctRZ4uKcnjrnvTb",
  "key3": "2B8B91D1S7pb1jYRLYpLcK8x5KRSxxQQNjjQFujffsagNf5nFHYRJgSTbgZeqVmHJBMxYaaUKZSvBiryvDavJhSN",
  "key4": "4tXJ85HEgTJLRojGMgg8kHYxBrpZ1EQzwKnrqDzLxu3qrsortfYy3nmfZjqRrxiq8GB9HPampZnAAbiY67TioLme",
  "key5": "5nq5eH5cUcgE3e76LQ6XqTjuz3X8q96s2etWycdBmpt7P9tL6ywdT3ZiYhbNT94RARyPzf69E5y657AHrL8Y56MY",
  "key6": "4fU18tUdjNBoLonUht6fxcrZQ1XijtSnJD5UbFsp7XZXSJNzAKXLnN8FrtmKcdAS1Et3bDpTXdwTREjVHmeQLdrE",
  "key7": "3WfHRxqvdNTxKQrcw65VzpUhJQZuPK7ZY4opAZ5K89UB9wHLiZjBAMUf3btsSsnFjNpY2MiPsgwFPCQ5WadPmZs8",
  "key8": "b8wWMsXnhwnfW7gnd2sxnxtSd8mvgMQCMF2sGM9AYEv1bo2JMrtA4y72QURKxRDcCPwTF4FMsBH5dprit3ufsgm",
  "key9": "7fJ1AsYSxfdfyaktQz9Bgpy91J6dRsQzbrobs19teTXYtmvyiJSC1YC6D77KutCWwpUKR5A5DPoDJUegnqgiyWo",
  "key10": "5xnSDWGUnnQbKB8Sm6k8VHxUkdoR2ETvaQzdaVmyYt46W6T86AHe1kRVUMpXyRxxmJSzjGcUZLr9XdUhGv5Jt3wV",
  "key11": "3Hsthq3d42gKUjjwnHZet1XpYvsn7nP6cXa4DuTnUkesn9oG7DY8W47aCoprVvLPNsp7kZx5pPyzcMmrpFNMQVYR",
  "key12": "4YmfpoortcrG8HYfnWChYujCn6wFfaH6zfWBZavcp1Bj4rVKGFjXKGge8ALGUpJ6nHJbqdrVR8JbLyXyeUrR5kdx",
  "key13": "UYANnFQ8mhvaQiqfznCPPWRnNu1PnixX8ThsiTyiPHzY99qJMt5HA1nEWY1H5iw446xsSgVfQKK6W4XuGuGc3xt",
  "key14": "4hyJ6DvdmmxMDywWpC6SVyVu9pMhacz51vEcVi4brzxkMgsAD7z4oKZhsFpLK91FYveXEhEW6P3vuvtbNN1bK9NN",
  "key15": "4kx49BnM3bQyENb4R9TFgN597dANyyriwNhw24S3oVrCCAs1vCFDQ9Xh3WmRHYgFZEBfPSSB4gdJMPbSBSUnyzbd",
  "key16": "92sv1GXofLBzFkPDBPSJmNSkmk5DSk9k28KcM3e18xfkNsETntTpirs56WFpeE6WiKNjdzwKyA7ATh37XerjN43",
  "key17": "rqYrXQfGTheA7zvVNknJW9fZosTKVXRvaNLsSeb65tryFGev6M3d3ZsT9biNqN4CmYGDHykYm97WRf5pGZTei3S",
  "key18": "4nP3GVkkTwa8qTJ1bgxeSpx5HjdoHqvxiijZxksrJhp7dXias3amiKKUH7KJCqrK8s8bJBWwfocMmrMFJwesaxKP",
  "key19": "2dpQvB4TxdebfvV4s9KwgyRoHta1JqWqZx9jvaHX1NhvhUMQUMwtwxd1kfg4rs6tjJZZXEmG3akypz5dfoHtiJcV",
  "key20": "5HPy3vC12EXFXvMwc1VtnN4D9g5ovKtLxZ6yGT8PJvkKpbN5oCsnHd9rsdwa26YAgrbrgcKvPyMbn39MmY2TzCd5",
  "key21": "2s7cHiiCyko9TMx7bisiNemqxL7tihCcvU61nAiRKjc5dda5qHP1A2u9VEqZ6PFS8Y2bk6eHQTJCcbpz2kZFrgZQ",
  "key22": "3ex3w8pfthsDaRRtULhbcWbx1WWJ2npvJscnhkJCeEqrm13KgYEvSr3LfZFGq4kWiBKonn5eDa9oHZf9X3AMqJf6",
  "key23": "4au4tF6XnCMQaSVEsZmV4H76TheVtg4wcgpoivUvgb88V1bBYHnnxr5gNWtcWAarUc58QXu1R6242WTXJUpsYLdn",
  "key24": "4E3eRhq5ELBqoG1Utq2CwSvuRuLWF5TFQ3kJS53MNM5WevYUUz1FmcFRugzaMzLWAgJPMnYPW76heEtHfjwsem4X",
  "key25": "3xhNjWVNB7b9YPvdLqUBurrDSqudVgaGvue8drUHKgAipXtp8TU9vzUQ3qRQC3C1daFSWi52M4QxDaNzbzU28gSk",
  "key26": "3wbMa9LqRhQmKspQQrYL7sFR8U5VviyAuWtePksKbVM94Nm4ruPZQUHRNviLjM7VGCmkE1gWpeQcKUqChxqKHsH9",
  "key27": "336V1TmAyYje8XfjqQRavX8fx58V9CT4DkRq37M4P3f4n2TPxhkfQCUY7NTTYK7SocMnDuDKXrBFSARosL5HxCFH",
  "key28": "5zYWEL1q84g43xf7KbEbhcfAeGuWh4EDejN7NHdboHcSaEAyp324gPm6vsBjsUAQBQq4rAd8fw8XgsfLdfDu45JR",
  "key29": "3kvzv1yx4JmQyCMtPkoK9VFU2oMwCViTKofPaJpHFbd7JSrNUKPrS4ahtWNCyNjJN4df87qKe8T6kj5hK2p27zbx",
  "key30": "4D4e3XzF9yUoQAbgyhmENmgxuJ1ai3vcHvossUSpkU9PkahFMBmr4Y5quN4m2dcKVHSaejnd9pQ2KjBAKVvttdEq",
  "key31": "4wyBngUBZefJwAgwKjMY4SsrSbcfyED9EBagnffERxer18nyLQ5WewkYVmFYKCAX5cGnqECGwP5gVffGUSr1fA1i",
  "key32": "Fr9UPNm55a3ak2t8Jw4G9KgbxhnCpCCUSHWXXpKAKaKw7mykfhW4fAQgcMshETUCTtXzFUVp9hfgw6EjR3LMGiV",
  "key33": "5EaAxc56vN4wfdJfDdg9A7zyC37eWZFWui2dQhXNCkeZYpEvwgQ3BtW5HQ5TLPUv234TbWEPjyk1Az6vjV6haEkY",
  "key34": "2Qo1fT35AU6vmy4fRv1n647bKU6D5dE3ZmvYnfsePE8ggpxNyhhRfwn7LALRjwvTHWDJ4DMHP3m7Ya8MC3nm5agj",
  "key35": "5BPAKg5EA8w3ZRNU6T1jhWThsNLa7Th21bap229fYo9EU6RVh4QJLccysYj9zZAF7WiTZMuADTQhqksRAPqfrjQZ",
  "key36": "2gb5HnSszzqNtejNCqYfKeV62D6y7wpxRyBwfgVkpKHEbtiDTcnYPetwS4ekbQjZ6TkGcnGntiu7GZ5AtZkJFmvF",
  "key37": "5eWq7Z88uRfvBbfFBZCir3n7Xs1JS2nGJzTdj8yWw5jrtYYxtzsqWmQVJowch6mPrqgg4dvWwecRCTXbv9thFG3C",
  "key38": "XqfaAwZtcvnAFCiMC26wqKq1m7VJTSfQqSjUZUFzPuvdykfFuuFFYKcyE3xznPTaSbfrxmnmygQqN3MXq4zNahP",
  "key39": "4AFVs6QxqJitcf8t8GUhER2j41uPNCVRSYNjn9683mXEPTXyFMdzyBJRaouGSrLjciCjALV3kYSHjwjS6s2BRaha",
  "key40": "4fmcfcnUhzbnm78we8TTGh86z2xahHbYr1ZktGDm9XchtMVzZHyH1gk9X4HCiddHPyDAa4hqVv9HK9yeyfmEQZRa",
  "key41": "5zjmYiQ8Au18i1qzrS5DXi4E372jR8fhm7M9yQD45gnHMqdg8RSB1yvjN75muT2NdFZnGTHt3k9AfEi3ekFUjCCR"
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
