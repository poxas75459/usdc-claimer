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
    "24v595EmbF2bkk7tHghfVRQPqRAMhgLYzLrsUkje3eShBr27aiWHNqpYDZZMtcvPT8sDUqESz6fyXK7X9XMtuP2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRmVfyVoEJeb5MD4FJVmSqdS3pHGG8R8SoQd3NkRSaSxRATCmmXuDJ4ZnG9PDmu7B5vfHyALfMpoxd7KWJM6q8u",
  "key1": "2M757okJmwjUaJj1sAbtEM3uF6sJeiJ8oMbweeHHDafaWEAPG4Sohp84Rmf2Td9PXdjLYaQMvhX1Un5JrqLbpXtp",
  "key2": "DSEkbH7Vk1AdkAkfX3V3mZtR9cVg7yYE361FwXThBjjRb3yGWJWKjxtGdjUp4yTdmkg9kKaxLWQkXMPph1j5Brw",
  "key3": "2s2qMhm7QHZMP8JFXvT2PYcrx6mPg1tdHz6r6WUM7iMw9E7hKHAvY6vsfNy13j2k45AJ61gbDrFge2tRaxA4iBhZ",
  "key4": "3rSWLQ9DoWhKDZ4653otZ2pKjm1hZdbYZVTQ6wahsP6MnWuzWNtifNC95e58izJGeUktC6HUHU9nJGwbAfZY321x",
  "key5": "5GEAULRWQiSdUckZgfc2vLXb24QfxNM3T4hFPD4FWyZZ52WJWFnTRB4vTeEBytGNT3Cj4Fnt9VEKuvw4yz2TtPNK",
  "key6": "YAuHR1zs7KLsBBEcCERyrYqZb5pxXnMywNhpqMSvqMqioRy2MwzUv4biwi7czZigPfnLi4ePVrFhnqJbAAyuPXk",
  "key7": "T5VdruSk9XabyotyiQCVZaU4GuqFvKvZkQzuYcrAPdBwbzLwUyWBw1mSfqDetQsjwMSsQFH2Mz2sRrNC8RqY7tC",
  "key8": "58AVmzCVbwD7poMrmyr2uhLbuchV829eqGfPgCxct1jGgYZLjcXxJyX1DUfN6mXc4MbyvZixnWzaLFmaov8VkwzP",
  "key9": "3chxvAVrWMtjJ1nxkm4wPYD5AUGPE7kis6df8L3ACzGmXJAkJGtzw3WFE4nxDVq1bFkDPWDUgHVKUp8ENAJjyzwX",
  "key10": "35ZHrtXXxfTrJgJqfcfawPXVwjWsHW8dWwH6cQiPjrLX8e37jSuPtxhYad4j6KnQkTYfWwhqMCvk8mpPaePq5p1z",
  "key11": "4kWnSoZtjZc3dAL89Nt6skGjQ6kooamyVJs8Y5zFfHZ9HU3oASQBwS7EthjHQtU8cy3xGyRSEjzQ2EKRY8FUUwjZ",
  "key12": "2ck1FJJswp2czhroaWwozc9jnwmn5YMPyBYedXUA1w9xu94gFvyQfkznSrxNm2GQUbLDNrDA8Y3rr7efiHcNF4Zf",
  "key13": "2rfLnwYH3yGbmqd9vJPp7znfBZZDMpoEgJHcmMniW3TLVc82ntercMrhWzDJKCdQpwzWdFnFT9zFSERgL6tGeBXN",
  "key14": "2xZdbwErqkt9M6aB5h1ZZrD9BVhiH1dEUzKeEo43eh7ZJodpFohUhnj2WDiyKtLSxiDZPZcE48UiwCSabZZ4GnX",
  "key15": "4BJmxd3JhDW7fMBga3iqANFsVNs81FjuGj9ktSM197UcHgRVPnD36QrdprQ5FbZBqEdNXgotYYMP4umZPe8iTQV2",
  "key16": "2UzFYpaNmrBwB8HUxqSY32kNVVK4JnbkePTAT2zhBUp9vxd4ochmju9Vc48hKugaQQjPVdQkQfor7EhEMQw9qgwv",
  "key17": "461yDovNLkMX3A7Aee7CyrafvsJVvCtqckATw4SbBPdtPZkJDceVvQF754D9zG5PA1Md5rRJd3tuxNdwXtxbKpTe",
  "key18": "5bHiqkEJQHq4fsYi1WGturoe77kJbZYdBCfiWe3RN1cUF228gsAm25dMSZhZz91Afen5FCXZ6m6RGLbyENgz5TLP",
  "key19": "5r36RkWtPa1kowDDrWEAdnYvXLnrCZzSsN5HRu2kpaPv4wRpQ5ZoxDRG5Rypgrv6wrEsbq2fDXHfpBp1twtmUwe2",
  "key20": "4AZvxfricrTbVyQ1jNvUHUBdEfRxvTComor2H756CHv7ze9CrqGjgyoqVsrk7bsvHnRRMhpj8Wt4jm7CcALFAMgt",
  "key21": "66ZttTxyDkqVGaSbCKfDqY7EcwXtguuK2pwoe5FaygMeGubCUVBJhaNieh4H7wnNYhZKYPnTevBS9HrBiyU1TMDv",
  "key22": "2E6WMR2d9LmemyT7DmWBbPHyfkV82PxXcweoFmfhssM6iyQrpCoqx9zSinTsFbS8B9zteJ9vk9ngWsTyuvfDyVXi",
  "key23": "4WL1QhxVcDftBiERiCYTGPZPxFhyzaYMCS9mqpANRRFVLQNhevgTQ3uhDpKsHdRvAVVkuUMXqHN3Xzq3TzocsKC5",
  "key24": "4MZbbDqSrw2LxDMf3rCqkFiQ9MA7LuRHZtjBaKtxjFXoPGXEMG4t8meRwMqGpPYL615TMwarkYpYXNQwYi1EKgUF",
  "key25": "5FKDhrmDtYBPCQ6F5jaNh8AczTC7h4AGXDDwsPE6zgjSm6gXYMg7mYXEgnjEM6bv3zCrtW4qPo1Nm4N84iNYjUUm",
  "key26": "3giDWK29pM8iBLsNEM5nPqtWh8wMRcvH64szrDVDZGK3XoQDd5Hm6DFQvpo5A83r77dhhwWW8i5AVLHDtsq5RV6X",
  "key27": "3WTCkmUHWUxncrfTHDu8ZeeUnzFneesMPU6HkfpVjx8xsSHhJW6xmd5F7hxTFgwrq3nfH5pnceX6m9FbH8kTypXH",
  "key28": "5Pb4JEvjWLTPL1osRxdbj8bPcVebx61RYYSJgMqzm8vVdYM5qM21wiuZitQZSmdcwk86DUvjrpuJBpDgXn25LqDU",
  "key29": "67575bpEhzfWvYQ3bKzz1Xo6u7mXUqVSsDVjVNdw3SA373GuEGR29Ef8yMcKbAGpaGDUkKoQmpdKrNwtiU1Ytw64",
  "key30": "22NBwkvhPAnVHXQWinpP6nPXanaWA2AbzwXfcDEKVUMX4tZX7oPFWp9Tpuhhk5Bp9z8cScRuTrxGVvyJC64aZzXw",
  "key31": "2JnWtj6Q8bHGVhLF7pQN4qBpWV57hdCYJMYcurqC9y9eRCkdPSuEP72oSWr789LtiX8j4wQxCPBxAsavyZJMNKX"
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
