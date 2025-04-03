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
    "4CYJPLgoJcej6mRsA3wkfaHD2NqM5ei9acWYLvhLExCR81mTdYfgFcxcfE4WFqdqZLJCewvSSW4MfyeBxkoVsnzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49oRbxdcRn8W71zEbwxpkwERQiAtzUHsmB4wbHBkASF6gCPbpErdk2rmb1mUKZhYb7yBFfSJtRjCQiPh9ALzasiq",
  "key1": "3P1iSktsS7UGVraZBJ7yLXhYPfXChttxz1WDN2wDdZbCvTcNEnNQ6LaTeBTP3icHTZJb3x8ykfKrGTCqo2qw2Luo",
  "key2": "4xh4Pd5A4JHM9NoDH3vRJ9XCJLjTDSYLXGvcQCjgGVqhqc6nLQQK3MhJir2CoNCShsdcsRx2vEyhCoRfk57YRvst",
  "key3": "HBPaneYbaaiRx52jeafoE93BHzMzEXrnf3ZKoMybKg3BzaJS8wCmHB4F2ye6JSzRK1ZD6kEf8Lcck1YoyL3s3RV",
  "key4": "32Dvfs6WmKiu137JVp1LqYASz5faNsB2FfCDcsbK88nMKc8Ffi8MGRWzMHD1281Utipmq83sDcebHP9e7JQKRJNz",
  "key5": "58LdtwVpvyV4iDpmSUNdH19hskxkgxSewHHQvrTeKjNuJZ4kMdn3SFXRhfL1MzCp9twBKzrWmoZH4d7EyaC3SuFE",
  "key6": "2LNkMT5JVVTCz3aZqFj5eFBF7Er8ZmvLckGig33bfGDGKuWB7DaxSTot1nQF55Ya6zdiaYon9ThZrRPKiLen1Vk5",
  "key7": "2rvQSxEZqHMxXnmiZfi4WkEHko3HzY3Ti7CUnPwCCKuH5eaYdccAfveqBXzgCbsDMfZBK38LH2zYN9W29JZGg652",
  "key8": "41Y9zaeeLd1R41mQdnZywmGeHgfDAoMwJyeSW38ATS41AWLDWHZ89HZyU8XWZiWctfKifNxVHsHWKj7HqybMxDKL",
  "key9": "25swd9Aw5roNL4nTz2iSfxbXcUrx7ApMez3RNpGVVFJ1DzEixWnd8K6qpSaQF1fewPRN3iWavcMyq1iqAJPAP9B3",
  "key10": "2ZH5qobGCib4j2REuuHFLacSnZqn5fWCcE4pHZ75YEd9fYVssPhHXePU8brpJQdqKiavNCc8R8SGoAKnrmuW4gtc",
  "key11": "5WdALyo5DTB8qFzqeMRLVkuhRV7vqVKriAWJMuFGUBLdwvg84VWzyyz9daf9q7Q77qTY2dwEX4Zyg7BTWpe52kza",
  "key12": "KebrDiGma8JK9q21yqQmNLNnNVk9pLPTN55o7p54EoTpEmy2iT7WkS1ka4niCiWxDST31Mcq5Y6b2HgzCZZXuMY",
  "key13": "2gtbLhq4rhRzYj1m1EHtZonkp9cvV2eC27cyHmYXpSVoXzUyJSBWKBzr8i3dwa5Gd8dXQk7dRTUKnUCW5yodMEij",
  "key14": "2tDQCEQkxE6GdxaTc3ZhakLxPuZ3mdbirCwUMw6yFet3LtmBfJvkWFwS6rC6tLtnXY2FZLsJ7DSfXZfPjUU4asqb",
  "key15": "4czFhZmGvpkAhAZuBBSFvQUmyE2PzsEX9zJuTxaxcmGKLqd6RtdRvV8PrcF8euSXp77xBTwJLz6TB7TW4KvdgQr4",
  "key16": "4wZBt3WJTJTDumtm4an9LwLSJWbxwJgvnLr4W5hHCfbcEaymmXMHi7VvtGffMTtydVTUeoXaqBFKRpMjSxAR4PiF",
  "key17": "tnDAtfsszrppMABBsX4LcSRqW67TbRTUCAaa7nn6tcdB6qCwzZbHbAe7J121JSLVDXuVzUtHNMY88kdAt1Zwo6k",
  "key18": "5yZHruoUYWgc2ryD6sdsH924irNPx7EVZX6217FNdnsiXFcVdTDKWAnTUhU4MD63dyK2rPwdqt8mEAa5SXZN9UeN",
  "key19": "4RSsAZvpnkY15K5arkeyC5QAjeiXuA3UcoiM4qnNLQfPhq3fjUTMRA1bks9PPeMWA9TfrJhpUYwbQcmVFry7mTrF",
  "key20": "eJNpPBfN7fdZyRnJ6Y3m1qPF7xBDGxRfPfTKCtEmyZEPkW1n8xVmWoqD513SyYChYzVMmmAanEMBCEhWghXsfef",
  "key21": "5rhBrcb5E8G5z73gZf611RrJxn5YQKt1WYiaScnTCUXbrVAugC7vBDpBHARtCw2E65gN6qHiziDh7kSimGxxTKRK",
  "key22": "5cveczhMLt2mEaQSQq7oPbxFc1cfyWJ7rKtJAVprQmvxDbX3ygd7RhjgwrgLbyhgF86jiy4g56NhWNZYV9XLmdNA",
  "key23": "2P7sXpf1FsK4Kts7JD5A7fTenNCfrziABBxk9SQcLL8HkhVChCP9enUgTsQLRV252dxNqhU2EjFqtk2rkGPPHae1",
  "key24": "3stLCLJ57tdtCP9y2DPtDWrRdksuNQUgYq4LsRGxW4ap1sNKNiLS3VhxFyoDrvL5qXQmSF26E4rP2FgmoXtdotC3",
  "key25": "5UxubJzKTi3KLgJ88jGVbTH7DhrWJFPzk7a6X7SMr4824Yec65QdwVebJZh4ntq1cm7py1uMpNZUfvD5xgXQqYpq",
  "key26": "3rpxBbXBMv28kMwDFXkFi9VcHaX4EBG3TqcAsZdwWmRjradDSJPaVVPV7AXvi3TocySLBDAX9YsbiJoaSpisM13D",
  "key27": "u5Kmx45U7FAgJdEyMDvmZLkbuxnZMDR8T8vdCkEHcaNQJyxngtiBkoUS7F9gru4bLw7MvoUBDrtwNjNWkQDKVMN",
  "key28": "4pGqsPnmmrTeuhndJSKZBit1oGvp2fCEh6RsGsNhGYSXkfyz32WFyVTXqiPHaeXWCfHT7w7HPcxqa8XCyXAcdhQD",
  "key29": "3gCn2p7QDHoZ347iNdnwpJs8MAywAPFTA1an1jDn3KSohamFhMjGtywGdsrBX8Ub4diKXNCP6ZokNjW1X44Ugvry",
  "key30": "xwCdNc21QWg5yp7pG53PSSnmLJhS9JA4VAiMfcVKxxmYjUiN2LMgtVwg4YyU5HUhrWYyYGK7eewSGynEGwAVoZY",
  "key31": "22NXGU5t2rKdV56PFfH7mVgRJDUNKqzagfWtmxpYeNMexx3DpJFUrtS7xLRM7KuMQjVPMm3bjXaniFhS5n6utkWi",
  "key32": "67g3Rma8nfLmeUeJ1vVLFGTGoCtvKAW695VRqNfSe6pBjSxay4S4zjRsLY47XjgjeZzV97JTZUsqG8V6PQtDApc7"
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
