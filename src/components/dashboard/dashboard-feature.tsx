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
    "2mf1Pr6n1C7b9mX47U8u6urkV5sxp3u3iehEdxm5fZyZhLghLqCzgnqSroCoEDaG5qwE8FNhaHUQP48KKm1iPjqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UnUQzrHJEzKhaDgDE87kPq4DLgfRtUPBttgPzdMTqWeMyRkTHHSJXZPs1i37ksiCx9nzjbAay1GgiWMh1Pk3uX2",
  "key1": "Rwwr9Pjkbp2qjZZ2aQekuYkXrpVvQhS4AwkKRgoiMfkwZjh5sseYNPMk28EN6NvWoy1WBbsw94kUjWdPz5hb3An",
  "key2": "3AcUo7cDfGrpJCAPrYxBKeUm6VaBdgHUZj7E8dRK12oTzwH7MoCGiXyHPEyJkyx9Pnv7NZWFC67HMX43HBZ3yYvt",
  "key3": "cy9jWdvUjrzAeitQqku5eGc4iWy9VjRjpi5FisfcbihA92Y3mR6k3y3BwrEPMFKSajdLTgrY5AEtetbGU4pCd7x",
  "key4": "49F1GPUGjR9YggbJrNg9sRDUHMV5jNs3n24Ws225G77tKWGBbZ2G678kKMrcZQW5vb854uHtY1i3fBrf41kCMZ4X",
  "key5": "43AGR3cqks42zeA6rPJTtfDeQvEywz8kv5Ftv7zoqrKyS53AYDHagjSgjx8sa7ofxY97ALgPCivSyPnFHw5UKcFp",
  "key6": "38zaMy5B7siXjyLpF8xpF9vt3pjfoyTtqT6HvAkk64Rw1Qwj5JNnmvQWL3bszbLyoPBuw3xXCKHH3WqgwsBiMPLM",
  "key7": "jmFvkJ5sCvW7GRsu32cPKhNNrQrSapw1gUFaDJ1bdAjxhCzxNsG9ZXsfRf3D12hk3wqbTQfXTE35UTbMUUNUUHB",
  "key8": "2EMJQ9LCVkEu4qi9Wkkw7DVvksAnHK9JrKNdGvdu8sNq8xAUxfZkCUbf54N9YXWCFnCVgHbawxfwZ3M9U7PGBTrr",
  "key9": "3Cb7n8qKzs5cb8wtkRujt8mvUHVzkRXF9LwjiDjciz1xcMpMF2UopVtvDUVuH5qxQfnSFi7jX9kUugg3D1PMV1gN",
  "key10": "3WAaYj2oekcKkDqR6iYvwDPbiLh79vejkJ5TQFycPijDMdntUiSouLb31aY9CdCJNUVQMmjKgv1beqyAU5CSs8VC",
  "key11": "2nHGhyvJGkiYsd6nwLnPPi5hPY29q9M7kHe11wEx9zCmzeuanFAs64kT6baL5jyxK3ka5sHbEJaMwAhY1oKaDNhL",
  "key12": "2mrv1qTK1RJ1Pcgooud3Z5sGLTHybxBKM1Z7hcm8U93WoezRHWj4kPgxBQMQNK2By81T4HisYeBWpeAZ4e3HrNUQ",
  "key13": "2ovhtpsBzgxS5nDMA3PbcPLZnRZjwde2miPUS2jWFbX9tPB9sAd783gT6DoQEm9thQWi4PGT6xm4YghsZQsLqrxG",
  "key14": "3EVhLwP1GEsPyDXtz1H9jaAHXWbRxm4mdZWBKWcU6htKMdNuCKN3j8WRj6p4rzKmiwi5SsjFSQd2ythK9Cd25NV",
  "key15": "44rFKdiEFrm7fSqayVphA7Mgq44kX6Y21ppTNKuGeA9nT18S1Mrocncg4b9Yzb5GvBkhKAGTNKXUm7k2FzSZpTkj",
  "key16": "2CrmKdP1eFKSjXrGVtvCqk84zuk6njThrFNh96aVuyAt2rCH3yFySDeBsiuast7mWrpSvyTidrvkD6TT4SSXjySq",
  "key17": "2zuWHxkgLLYEnkWJRQExCAgHmDmYVFd19jjJeTYbAscrHUTduEK9RM76yQKEjaxsGGitBVQ2dFMWJruapVyv2o7z",
  "key18": "8MWtMKMmtKM5vfCAoXpA5L92KzSdaTbQx6d4ae5c87hyrRC2ZgRHWyhiFaGxetWCxe2w1fjiwZUaZz9oPUv6m2y",
  "key19": "6v5HJf1Xqy1wJT1kP7dRGUUZkcyxmYw89ErEXHwuB1ztsb2UVGESoE8auLKSVizw8uw2qTQLF4SQrSdf7QC7tZa",
  "key20": "424B3GhzyapnJcVC1MGZypVqgaZ2qnLSF52idj6FfzFVZddk7RSG6gAH2vEmt2keYs5AHyfE6sNLr6Dfdm3aZZfc",
  "key21": "4M9cfsmVXVUZoFCRVA6sAptUP1GcKyqs6oGCEerLWy9LhSzg4nkdWsEbadSJcmNSa6LfNeEUisaebbb7tXqeGGnW",
  "key22": "47sK14xVAhJMDrrExz84J8m8L5Vw1ZjQqcGmywBwfn2rJFCpmbr1SP3AoEXaZV9o8D8rhWWZeVgjzCCjCSyiQDr9",
  "key23": "vUT7bDZy7hsVetKPwJZXEzHbF3HNaiuXc9NnBmzYSrNr6mnGCv2kCMWuJFdfzggzzHjkYHZZ5oGFESZNDR33b5e",
  "key24": "2aiYLa8QNGbbhdSLtk66SQdTQdbCZLBuZGDNjpPnBFuCBmK8z9AWk921rsGdmUEACNL3A47rM11XQR7n6oG5M1CA",
  "key25": "gFpWkrJkyLfpYm5C4HtYb4JGfhsbu4E5rWUYt6gbqb2fETWiF2VHUYqxp17BNUxazzVBrybJofcjxQZ8NUkXfQ9",
  "key26": "2Q58ovEwL8Q1wJNBPhWcNcrYnQsgQY5J1uFY66dQxFSfB5hhgVj4TJsYFqkR1p8ZrXSCGRuWAn7yGjyoL5VmvRYN",
  "key27": "4Dky5wJh79kXFcB14tidvpjXJXGhdHk84dWF2EeBfdwAPuUtbQ1LDg8sVcZmuJ2YmrRjhuSDRTGNCAoUzkS24bPy",
  "key28": "YKUPEyRcNFMY6ZpQ28vrKwqEmvxqFqrNpc5uuraXDFvLVbjuCtj8nsu9McS2xKkxWKzJy4hbzafzySD4dxMuRbn",
  "key29": "37ttiHoAbF76dF6ffGjogQPXyraDvYtXBfzsn56bBdei3LsS1Jxc7iV7Gw7V1cGiV162xjFcDBrLutM9tpfSUb1W",
  "key30": "4TFoafbxwkZPwTj27u9iM5N41RY1G8BkaZGXswFnvzDTfFhGqXMLjkoFKqjuWK23uaFDfxJnPGeu7J1my7CovFQt",
  "key31": "4mwaqwBqZGmZN8dUJUuirXYV7iSbVvUqLxocijtwXepunED9vKk4RX6cpj8257x3NtgggCRZfc8BL8BeY72SESsu",
  "key32": "4KbbyvoJrjUvhzJB88w7XTfx4ceedSRwQhNgnysHSnccsNqgSa9rXrm3k97LxDKdH3nnWT4ore2iu8ka8vt7w18m",
  "key33": "5o3a8A51JN5LzndDB6AdBs7yucMYPQbQma3VVw6CxEqjn4HXpUidtWawTAXKqkcin2eYoWFTzL2pRYrUFMrVpkFW",
  "key34": "2YHxZVJLfs7oTyZkJ1qqDCkvfpBVReU4TM1C5aMJ14rLpvXgbEvpr38EEreG7u8YfjNMECVnvwp9MzVVn6Egoha1",
  "key35": "RQmYwskFcQqV1feZWc9hmjND5euj8SWwbvKYnMakitEcZhnX4GKgZNMRZHCCqhN7TetpmmsEB5A8xyfB8Aaxc4j",
  "key36": "5T13P23MzduhKbdpfK1oyhWWLwVE1aejL7nhqF6x7d9GLohGQ5cDsWAcq4Xzfz2XVjxdzUFTcHub8xnBz1PF8ejx",
  "key37": "34fQL4f2z23r6epGLTTbMEUyxTqJtK5iSFdAHYGWyF4e76RvE39vTkSFvYWZRpWPJ6LJPYqWSswWV9bCo5Js9sHL",
  "key38": "ywwSv7imLjAeyZ6GnQy3xAbpN5ftgeLVaAbi84r3VhJf55WFS2129DHgZzJubvkuoin4gy6Y6usSSUgxHt4bJB8",
  "key39": "2r86UfoUhrcVg6Tpo4gk5XiX3ptVNF7EG29CD72scbHLFn8ghH8Aj4GUUmFw1L4RjjNGqazoCeRfnf41TLssdMYH",
  "key40": "2H6ka9Yx3TiFRZ61AcLkSARterMJinSYcLfcF1u4ZRAVRb6uLMwAwzKbbqhVoCteNJzq9goJMQvbxdHjFQRYgjvx",
  "key41": "42acjPhMvjMBivV7WEc62AQ8hBspvc9vXG363o1hTfxBQ4ZNRKHWx1ZcyMbjhdReqwTP1mJ9KLYvFUnqJPi58vmr",
  "key42": "kc8ESWyhy8VX9o2ykmGybhkxGzWraFhD6kib7hRhbsKLS4Rwjcv9Kj7q2t18RcPTQ8Zjq6ArUUmPWCgkXQqyFqt",
  "key43": "2EKb7jkZN5kijsuWKZx98whQPvoA6jusbcqT6QArVbYUJ5M7hvAKENr5F6YmBYKXwLAGYmMqZf9SPofDSHZDs6wi",
  "key44": "5VgDbcaXEjD2RU3cYSCPzEPPN1GVREGCoiQC4PELkwmQZN8fZdUEoubDWCYQuffRwzgJRhW7pTqMLeqMyYXidDSJ"
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
