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
    "49jUmESPQ5Sph5JPG51yRurveJ5mq5pTqmQ6Y57pmEgqjF9LW823ViAPV3PFZaJo6wYtz4tq6YXFkgcuti7b1wqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfzdPCe5MiYn7R9z2uRch8eyKzWtwst4jf3AYbLv1nmvFryf6mmMBG1a5Wzuc7XVcNehgzcPsX3G7Ee4xxpmcYw",
  "key1": "4f29SLYoPNpt3sDeDUgHaWgwHE48ZvZohUhK67jgL368Bd7obYQTJ3id83rUGF7LeqZkd8VSQxfdWs1Y6fQdzU4w",
  "key2": "3uBm5prHyEkvCsjKQt6AjX8ep7qktvZRrMVus54MT1pX5WFot5TtzTMP5N5LNvsXcgVaj2RmS2dgKVZqPnvvwLi7",
  "key3": "3Z3WLuAom2C5iPdebqSrh7kxTi2yfJtJ42HrVmAE6e6RjsXJXqoPBrtR2LD2uWviG3hvHKCtKdhGDsx5t2Bcittv",
  "key4": "3Zvmr1vu3Tu7WdMQ8YwcwrqtavichQJb9J69MAusXKFsKf5oUg5SXBbEk3oNCAgdZebC4PtRqppWZ9k65YdiWx2e",
  "key5": "Hr6kGjY4n6Uv27XqqnRwjHoHnKBkufSgENCakXK3J8GNtDPzwpjqff5H4EfPi7D7R8HiUapKKS3gde3APL13HbC",
  "key6": "4EHwmCyoZfTghLSsShTBqQgwQWH1eD9Yc6KFQhZQgmvk7f39G5agY9ARupSx6w2Zb1wLTxH1HgSKuFMekMFP9f7N",
  "key7": "5xYwJiPfSYPJNBKX36icAWkSTE5PM6DJTTe4cAiZhzahjYKSmThWzraQgan75NURejMtfHhwufntfLeCtjF8W7vi",
  "key8": "2DaxUdDbu7KUENxZU53u23qD68nA5sJe5TY6HWwuA8fRZbMYgXygAgXUzDEpN4BQnrcLQtCNbBteyQqWChjDDnJT",
  "key9": "55RushzT3bdftUyiyQ79KHoGEmirbPxjy4s1aE7AmZed8vE5QaAL6pH899ws6yuQWxhp86jkzdidegCezSs6TtBZ",
  "key10": "5AfaZkujdhPLhL6TtaTAtJxM6MQJMKqLLvg5QMdNen3ccvobBqnA4KSoXPY3mhKwUcBuJZr4Buhj2vkMuVn39dXN",
  "key11": "5gZKd9k8YGmfPxJrWxwNmphrZ6UumykPpQLNs9MTF69M64mpuJuAXTc5CDAhKiNom5x34ZHNShxdsN7Gf5Dbh1d9",
  "key12": "2nCzu7czscqH96iykzUws5duEcoWRdz6WKDEjykbDbsGCQLBKcYyto7N3opVXkoMBjuhPx6EosNP9bJsxdUEbj5f",
  "key13": "3eVAZEcijPjLTiWQFcFTPtzSW7FnQFDSv7qhtLtXtWsT3wEuFNKB7P4dz9GKL5vNCibEL1xcM6bFcJ25r5sza7GN",
  "key14": "2wg4PWfziM3Zf7SZMPHU4sfg7UQu1BHUgJBjEfyQ5j6yJYggo1UbG8gCusVr22i4Fggxe3iveA6KMnNXxZR1NWxq",
  "key15": "5sWrWthnaBJfWGjDh8rpi1L9BX5VgeTDpeGthYwWdRn27nvrjYpGuodnRKq2Te4JGbNS1TkLcumGDt9LWjLWrU19",
  "key16": "4ejsnCjwyj6LRpGVLM31pjQ73Qzrt9uDqM3yZFmbhGTUJLf44pAWYxGLLAka4WrYWD5SSYWyXBLtDBhw2krKQBcz",
  "key17": "Gdu7faFCjsptjnUQtY5gSNr7as5XBdML9Rfyn5qCp2tkqSjHvvEwTYWLGmmaGydEahHC6vT6LpvdBQjhaqHFAXj",
  "key18": "3gB2znxb1X73gxAXUWDLCBNRbPfiNsvVK34sU62H39u4MMFri69EEsqyP7MuBrnf7MRufGnPVoBBCJvXo37d3k2o",
  "key19": "5Um5nFpiVS5xCr5KbcVn3PSFzgGzMMxLPXfdY2BHt8duAyMKLyJv6wtNqB4amFpwPQVXEr194pR7UjZ7KKCwzNwB",
  "key20": "3omc2pX9KU2qiXkgGVkdnkc8yKGNQL4CJZgJZBdut31LwpviEFc1dmiwDqZU6f5PgxeCYnNvwe7Tqqi4RonyCHUY",
  "key21": "4fJEAftpnCzYZSnJh4RSfJptXcTLJUHqHm1gskKmJ8Wk341EDxuVJVN1YRrq2inoDow3rAUpuuTiEHoSUw9HQZ2V",
  "key22": "26skXtqR8F3goU9gxyK7xQjYSKhkCLRVCT1wL4AyfmwFhMHe8aTS6aHtZRaa8gKvMzR7whg9XW3vmQfKNZiyynnc",
  "key23": "5PBUXpY4xdVczDqzMhayo1i5AyUXEYN5yy3jjMmi4hyf852bfuefPEFy6dUj3vdpug29LkEEtjkgcTBvTDS3ELzN",
  "key24": "44hWmRqx22XEVMc74rVVUuefVRwdpMDHYutz1j4dCp7tLWo43tPrbWPmHLFc8aCENmnKH5gNFjH9s1RoYCT7cJX7",
  "key25": "u3Qefs119qnbh8DuDXmwZHP5jVbFYzHRuYBfpPdPwM3sXvkRNb45U9NuXn6QcMdjsZ8QJrL7YevLgPsZgc5fTZ9",
  "key26": "9XxRusC9s8pchh7t91ejg8wopNnX81ZFNUvRN5eEAmWzGfxw4vREjat4ZLS6mqbg97VaMDKSriTcH8hWtu3GSz1",
  "key27": "3DU4QyLXzYijKiiafXreqZF1L2mZov6p448dqWzx1CxKTHdjf6BWCXD6FeDi3YDbzwvZJcEJer4ft9N5JH59AVyx",
  "key28": "NQ5jZCpzsrTgzNCPzDwjsCgw8o5FUyhGQmqFD8AoW9pDxXLhW9K4UG6xJRBQvUSaAqSkKYS3C6Wa2ZS9xhpU16p",
  "key29": "5mZLoa7HU9uyPXwSfKGvyETpFD2EXTB7oUa29M1QJ6McFcoDQq2n2rHVugtHQ4HHgqzAXBL9EgcNtX25VtWdrmjy",
  "key30": "3dJXRPxcGZdS2GpnDm6yQmKx84eNigVXZEQDnJwqyXjuBpRt9pYawPZJunj529rMzgU82xea4CKVhh4sax5p4XxK",
  "key31": "53HxkWDP6ead9tQBhJZ7fZVStfgGNiTLZJUJopbeNyruS3Dq4KveQsHGAhuhdSwAMahjwSnmqKMp7pJiLfNJ9gEX"
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
