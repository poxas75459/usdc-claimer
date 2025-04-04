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
    "5jsLc7w17CJvwZqtG7EpTnAJjBUvWDpPFBo3rhMjUV9Bx8xPuKXjyq4fg3pdbAbFe95yEMzJn8TEGjpaPNjSwWe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rC4Wp2PXc1dLKWqDQU8pctgHEgkgzN3ApSzjgUyfvR3A1xEVcdJD28vPbwaRUi6KSUBm6yCW7znJTogKVnVHF4V",
  "key1": "49Br1QCBLpsxJq5amMPMpNfQrYQcPDtNXNBWg3fja3kkFwhUtSz4sUiAaAtQF3t5K8AMCiG4aSY9WtUyJMYMoLqW",
  "key2": "5JGnzDdoPDHcHGbpBxjoyhG5dnMUGuRc8nd3xRcsKmkyJgw4bxhvD4XJ2LfwyMVZCchym8EniW2n3ZdBQ1PsV1gR",
  "key3": "4oVxwoScqiz79VTmThLCvtrxRda5K3PSHnoehBknP9k2mzLUk2DHV8Rr9p9BqpxM86emn5GHpSRRnUKPhMcedAV2",
  "key4": "5yCahYE1h93GETRzB1pof1HsnPc2xXS69pXHmBs2F1BEeqaAVjyf42LryriHQ3wpYG9xfCVMQjGYgmYiU3b35uwm",
  "key5": "691nVACewYtYeuXzuqfmPk7EzR5swABCMQ1fNkAd4527x9N3nEvxtVdYN8m6wTWJSSJHdSVZ4K7qEnZts7hF5YA",
  "key6": "4BrtVRNgznj4z34mjnkqD1a4cjAsUCCu4BkekHjkRDhmaopFQZwLo4ATEyypPm3zQ3NSSWxMh46RNogC4y3LiQka",
  "key7": "2YiPwPiT4TNbATK5524187SDQyXaSu9C3p8GnSMHaXiAcVWCaH2Pz1cBS2RiduBiWD2oXJPmMxMhDVbimV1GHmxS",
  "key8": "5CqMyxVD8HpUkqkJxwCvU5rpMTPnkMUXw21s9RTRRKbmBq7Ymg1mK1BPz4XZtkbdcYorF98ZCa49nkmkngdQN3Nu",
  "key9": "x5djedrCqzwfbCJm4REufmQ9Yu7kiDgWgwYNSVcnVTJMvpRtVRp1ZpqXSeZ4DwaG9XrXubfJrqPfVQddpca2FQn",
  "key10": "44hG2KCyPPQi1sjnQt42teNzRxW8EiMif26TxsUhr7zNhk3mpZHKAYbSyP8HnKTyuVLg6pUXDjbs6PKxBMcYYkgB",
  "key11": "2VFnRzuMfSPZFGraFboy8vJbLWhzhrFdSFhLxttSFEYr7MQgiUTkiDyzuEB2fmjD1CjjCp4i9ZaBBB9hMzm5kGHx",
  "key12": "3VXzxYbfenM1f7SHBPC2q88GcBzqXRpWgpiDYPVcywDTHVHGJJwzKFC8mG3qaHDq58QhpK4sc9cDcDDNudtrWGgY",
  "key13": "4ZLxKn3w9NTPctpBGVThtBAaMZ2a6TyBbrzWYxyK3VwwbvTDCGuN8V3EmuuXunqFYfLVfuRFdzFpJgVwEBSFkyY2",
  "key14": "5h2Rj15DizUmD5jjYjGZXU4CEwESsQCXs7H6mvGFZv1Sz7tD6WRcJQeLo91Bo3K8qdx1TEYRxrn5EMPtWT9YVCn9",
  "key15": "YnfmRbjyLX816yAMpWRxTd1qSys8NuCocLEAJ6UCCrQrHTEpFSycJxhDDHwxaZK16tG5Ep7F3hJY7PxYT4B6S54",
  "key16": "ZrhdZYCHJm5oaDdH7zPtCW1tLaY4CaPYqFA8T8WSKVNoibpTKJyQE3j87F4tacsBkDZ2VbcDaLxds9FPfLvMAjq",
  "key17": "2bpsrskjRRz8QnGaHgZmRBGFAffM6ZUzMDShEaUCh5zxynrQ737gn26gpXNjYD47AqBhhm3CNLDCgYmPrZHTcBts",
  "key18": "UnGT58xSRhRju9ykBAtu9V9vHSJUmzrmnUEcQHU9tHvQuPUSzmrn81A3X25TYDYUACaVzPaL6uQVzKAdy2FENhC",
  "key19": "5vjQca2p7vZaCBtfSqNfuyMfiNvnVLcYtAEy7tnYFdCmVfQibym19XdTdbrrrQc9NhgzBHaHqATcjSS1KTSVLJF6",
  "key20": "5AaannE3FPTZFFoTjHvT5KYieWZf1tz8yTfu7jYtf8si1rUEtpVrjuxfNa6KMKmoVzcfoVaxTBTKUaSC7q4zKBAX",
  "key21": "4Uxpfpd5iyUbqxH8BpRKax9uw1E1U8LHWvLvPJh3L2uYDSHiydHj5sbxjXoLT8iafd8Leri9mYEi3s2CfiSmQ2v1",
  "key22": "oDdyg2qVzCQaZcmdTd9UJZYekoYeSEUNT5pmsq5hi26mC9yj74WZ3yBYWNTWdH2WuPLdFZy4iWJqe893N8ieSWw",
  "key23": "4jUckBVdjAGrArhmUDrEqtZPvnSi9My3nyiugPuTrF7sbiH4iFA1fToUquQgUp5DEmctmPgz3r2m7Kij4aRSpphc",
  "key24": "5f4CbugeE5zSvLYrgVwmuwYrRor2t4dvJMBfoTwqNL4bFLKSF6m5Zu92w2WCVtdjUWnvAaRMBg3QgvDpiLJ2U78c",
  "key25": "3NQGk7AytMC8J1TUgM4HaTuDEkWktmDENwzP8VbUfqg1HeUBxQ4UEAVk5L56sKBn35Vbpkyde5BJzibfrNwUoqKB",
  "key26": "2BCN3NRd6eR1bCi1LzzNKwGAfs59tXLM1sd7DXePZqCZkpG6CqjtHerff4ZQnQWJMYwQnjDtfVnSd74EyKxx8T3S",
  "key27": "5Yzzg1GZdTxjLjnANvmGKpuZkJPm7WAAYgEsVYLwHtrpLN8phgKV8zyLXEqQt9NXegJVAihwGKk1YCkxuecBbr77",
  "key28": "5TXEgFMSArAjXP6xzwKbADpY2Zvzcmi8XVhp1UEmK8EjoA85iyK1coZZqG5BwqKHV7q7FBbktniyTnr8GvVZf7pm",
  "key29": "45EFhzbhXE32tyGib71QvSowrrfHeq76xLwSb7GbwxGgHbk8M61tfstxBipHED3sD4zBw98NWdcJQTqJ6DqKXzdq",
  "key30": "3umSUoqgsJQ17oTjWNhpWuXfWQ6LVNDstUmpTnSNsKd28sthseQ8QW1fsi6WNvCxoAhPCFmz6R44PHn6NQKpBwQr",
  "key31": "4jSfCCCQoynSCWTpLvSVPrtzb496XNg36JjqzXi4HivpPmeNK3rg99Unt3ygPiDDmqVn2baYonr2XzvVqqXpgZxp",
  "key32": "5x1UMzCo4V2NAF8Qi3ZvsQC2N4G4S9pKAcsvmK1sP65pxmYzuD82T2M5oSuPXjh62jRtdsutESKr9CT76hRfja2t",
  "key33": "4aWqhLxe1VxvC3NyrfcrZCwW6i39dggN3zqYMhaEruwUhQZYe9K1eCGVyxNWk8eNkraaTqBHbReJRifte3iima2W",
  "key34": "KXfmd4eMxoxtF9ckW3x6CTkVPLtC4oxoUAdNJYZYWJnghVuVWtMdX4d5MGXWrMur8YpYqGDsykoQ9t4PnkemZUv",
  "key35": "47UK5Avz9UGCH1st4H5M1jDoeHLXYghnHzkUY3qrnb6U71uB4Uzhwct5DyWuqUJMzW998ShcRc77qPZ52f5gtXAU",
  "key36": "5YEP9xB6eqidDnppcxrSH7dWDnT5G2UGdjUSUQPdkHDArTzcW8k6HhqGgruSeYwkoUMDi3hv85DPh1KMxmZGSJsY"
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
