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
    "2ooqL13cvDUNzqT9mD6ThKmJ5QFhBYngW3oopWmrgnx4okhjRiRSP6L3uKjVQZCfo9xuxQasdbdFNymEbdyLMSYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PdjjJXSCYExE6AepJrYRS9LdYPRYKmmANXzmtjNNTVXfadW8c8uQ5pWhYbLinUiYXcvAiAM2TyvERbyTqSNbrdr",
  "key1": "39zWeGFX43w8a8MGhCA9xKX1bkez1Vi7UokpJuvb4zLBQP2dqHtvSMpz54obXqjrAm14cQjhLpp2Radi9mj8Md4Y",
  "key2": "4dC5ubuJmdupozWsMBKaVuAthTrSohg1TMoBXzdrZUTmTEUf7rBPH4LLp9kuEqLeomX7vfSaSLpHcJrCgh6ujSVG",
  "key3": "2Qh74Fo4WRHVVydWT2EMN2dgwD41i3GrA1eUPMjZ4YDyzbhhvDAZp48EmduT91GET2S54dBj8HiKoVzts2ZJQETi",
  "key4": "FWY3826oqYpPbNG7eFjfSTLxY8p1m6gH2t3TT5VPc4zcwszWafXR7ztK8QEt5krp2S1NLEqbD8SGXVU35FAyJPZ",
  "key5": "641cDTbebVzYTo4tekuTqk2JDHUfb7DkDsvPwkVw5Aoaf5BuPYGchMcNx4vsMBWahHYCUZS82cNzWU8yToPy2Daa",
  "key6": "58Lx3pXwnmxWHnMMpgExA5KreE9pEzhYQpRbWwuZa3gPgzNiY2KH5HoFjXzau5RkWEwbxPeTLneQUAAe2r7Q5SAn",
  "key7": "KnrJpVv8g36NRNvBRw9LxC7GN3Rpzc8y5tupMWX2dYvgDmQxf1nK1HisXczJqaxPe97gYSa9vxACVSWX7nSTtRS",
  "key8": "24m288RNQeYixXjvpx18CoaTeGC3LDiHo9vFeq5bEuNYPnCxKXRTVPaiQKDvmEREUsbu7QJNkYAkHw7b7ijcKeZG",
  "key9": "5VhDSWssAKGbgSmREaBEJzMgXbHhnXPFBza5zWXfmedtmfHr6SRZbPmrYaSkrb7gk12Q3hASPtGJQqH2mNtfBvQf",
  "key10": "2WFD5JrLAzBWHc56Cp9zkxqMueP671tXi8FDbn6MWzVhHdBMurQnSnuvDYYHc6Buf3QTEm4jzMkeerXEhTbu1bcx",
  "key11": "3P5FdzKxonSZsDgnRu4HYsUDbT5eTPwb1o2qvC9NqA5KNiSuhd7XsD5VgPLKu66cKCX2147xbjzjeXZVSUBfmtz",
  "key12": "2YQGMK7ZGMATcqb19CSReArKk27nbt2HYFcSj15CJzCeSF5mcD734wcNKK192MD1vxJmWSu1hxxCBEh1hMPQ76Mf",
  "key13": "4VqDui2fZ6mvM5uBZEUWuNwbehCfGv5qCFdjJWP4dqBm1TXtsV8oC28sCRgVTuApbSPTUkud6WSwj8Xy1HrccjmH",
  "key14": "3j28uvKaysRszTG663kLP7jTmoFZWGUSQduiQF1N4XXgAWRBo3VAEv9DR7PVXjEZboUjWyXFknfA7GjgQ6Xkt3YH",
  "key15": "3jq3weiyhdNcQvEmniqEe7wNddgmHDRwp4zbjPe54t9uPwMLxN28SnwDbrUFDfWn6n5adjR69N51NR9GnxhtyThE",
  "key16": "4Nzyo6ANEfYjrmPfMaZdpsQowa8BYRiqmrnazrxExq4zbpsjicCRM8PoC5i5nzDzGHsj5ya5HbfdG72w4uiGPgJQ",
  "key17": "23h7GrNsC46Dk7oikCqsifSdsF2P2vq32Lm1n7AKVZRG5b6wkbJ73i36wH34XkTvdvMvSugKvr91nkvAzPwvW57H",
  "key18": "2SmUBcS6tSux7mwMzqsdYdmDTS8yZFCje9FuhUMcXCfgFLYKWjQixNYB1VuMnKyXhQisxdBiNYpeNY4GQpCpYDGe",
  "key19": "3bq2gJm32muSPzWEcAA7CtcqmYxN8U8sEkoe8rWQbKaMEXGPtk79i1LNyWD6ER4BsgCxChDtNH67ePnWb4zfZ9Gx",
  "key20": "ZSB4ecorPiwt6FtVXGwoR9kRZ8yHzak5ePmQuGVLradSq96tLG3LRQ3GXjx9EuXoPQF87owQVNg13QP9sXhGRH9",
  "key21": "BcUHjcHTENx94iusJ6HMhPxvKwXnL6SV2iGVZUn5TxK6XePishuQLAkj1jGV1hEqErDr7Q5hBNqY3Bpuhg3Ru7G",
  "key22": "2kr77LEdB1obb96GqEo8ZXusNxQe3de3RY2TZmqn8gzpHWA6rJLBAacXkPyseL2qhsAYx2ipx6BMM6H3wTZ5imHg",
  "key23": "QqmibjpRrJV9ptKsHKhghZvMUkRu5zQBW7ydPVpuQgVmAznPjvGNX2uG7QRyafnwEmZyzjoqNLAF4JubBM6xE97",
  "key24": "Qb69AJ1GZpbEVEZ5sB984doMzHAPkhEPFST2Q2pj2cwNf2ecxRRrTxccqsN42AFFwoymE7ptNmSdjqN6TwMv4sr",
  "key25": "2WKvcNx4Xyvzm5GpX37E6UQj6sbWL4YkHxGVjepBuSjg4EN9pHpSe2H8S1Euxv1DmA3EPAnPVyYNge4bnnBDXFTR",
  "key26": "3sZBNkzXZrqHqHXvNkLyr7z5R7m3rczia578dD1L31CmPcBN4fbkHDpHMyxyqj12afBDu8oVmJPCyCxMDmnN55Bt",
  "key27": "2WUVqfFhZEY7ALocH75CzB5UouUD1fdsMq1WvS9BhDAgvqpKnrMw8Brastc4GzZvfmujEGWgxFseSo8diBtH6yPd",
  "key28": "wqfSg9Bfiw6XuTbKTW9Y4phuyNXfoWBFwAMf2fTS7upLMVMDXTsUANJecgDXo66xFvSzfJz2uDt8W7LQR5AmmBq",
  "key29": "3WnYKM1n4rGUsfATuK1HPu34GEL1QXfkuhZLnfsAqb5LWiFEpihBLnCZpnkF6Vfas4nY6fYbf8iVRLWtqCTVz9oh",
  "key30": "4C8aWNFVPAfx5g4uaBp6gx9PAfjwGWNjcmvDmXs9tLXZWTa9mfXasrLo7CwnJMzGortFJarYgNpXSaDkvP2pCLob",
  "key31": "5WPwb95rTjvua3ESUaTAs8i8ovLzik9SenoPGfbKz9pctc7tLDtp9UQpmDGZnqPku9GB86Rv6pzi5Ebsx7oUK2T5",
  "key32": "23GkLeBnhBBn896FQAp2JUuPZUrykTDFoB1AyvwAkZHj63fmkyVYu5idrAsZMCJWirmMfFnXwrtnjpkj226GSZ3W",
  "key33": "3L3uwFVdZRTdKHKEuY9yaeS8nTeDp4TN7UX9CkUBXShqhSbwLog7iSfRoPsZonFBY99pFhX9KzUxHX8SSbJS38JR",
  "key34": "3GRT9gq2uddK14tMSLyMHtbU6zr1T15gJLRoLTAtKPFSPs9CEPdPni12o4KQEtnhBfQrGR2ZL9dduVieqn7uiqDd",
  "key35": "3xoQzfgCqQLrs1jXDP3cUtfPGgtaqM18AAbrJbub89Bpd4TGnKwNBX4GiX36QwMzi9fvwMBWz2c5WPDLWJG2rnPM",
  "key36": "4j3dN5mwn26BXRB5ZoXXMPZHwrKz6UdfbyrF7zQvZsHZA6FYAdRjuGbFxc9zz9fZuvy7xJjcQax2EAY5ZqwWn6L2"
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
