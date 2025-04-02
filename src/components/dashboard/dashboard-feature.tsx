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
    "4GoFq19JGy1W94NxdJUJ4d18yaXJdvDXXmuADjKfXuFyR8f2nnAU4ensbk9vTZaJcmVGRPWUfuFrEtWzpJdeMwZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bku7yjY7pUJ6Vm863BVDRm6kZRf1xp1F51YXVSoRYZX5b5H7RzsVPiAz31sDp5GQk5TDwZoSEM3tHiju5BN7AM",
  "key1": "JUXXWjaP2BnwaUK4KqpmaxtbVVgief2J963j7gKc9vssinDFNEzteXUkM2uRuAcxo44KCMjC75BADDpZGpbUoYC",
  "key2": "4eaZqMb92Lva9D8WjGA8hRHwkiiiiSB5qzDd3bafsmgEfs3EtQmfvdf1YZrUoqY1mVN6AoJKstC2rRbZmTeQuHwg",
  "key3": "2PFW854AEMaqzHiPpsoLUKf9fc58s9zagJ4rFHLGbGVodmzsBeDbjA8otEHAz1rkdrE6wcMHTr2zBoU2F8oCYEgb",
  "key4": "265eLpECgaNAfp6otbcuMvdM8xqcsbh8duAh9Xcg2gJDEG8nUdrzmha7Q46AEtuSMYjZ3LxstoUx6QT7Sb82Dgyp",
  "key5": "B1F2Jtq4WTE5Wij8V1PWcdipaccZgm657DAS7AcjGD7gPnFiuc4iBW6eSV8tVxDFffG1qupdix8qrd5kywWzDrc",
  "key6": "3TZPNocfwTdiqCAfqiNhT2wsaTqMXT4MnzpRhNWDsAEVPGpBxABYU2t7eAvZd3WjCHZtEz9kExZ4YMYkcRux4LEE",
  "key7": "2B6QDD2WDytpgn7MbFJTvJ1fvHE8PeGUYc7wtLpFKiXigsYQVTSTsvB7JMn1VuPwDbZ7562Y3xtL1wP4hSkdnDfz",
  "key8": "Bb8euQgiYWE7akG6T165G7sKEMPN6eRWHP6zrxsjKFZS9wzLFaTzSdHqieTj8gN8ztRdfAv3kodrfkPiripegPE",
  "key9": "3ayE6YkQFyhfYCgDYc5kZGRcxUUhC4uijG5efUrWTQjcfyPycr8Fm2WUmhsy9NYmEU8dzmZPEpBNxBjsm8srZw56",
  "key10": "5SGbDTHe9iscfvUGCUpMBXcrTisqvtnxyFYXvQFZmfAnCqVNYgeix2BKVZJv29hrLLEhGfB74k4sz8UAHFu98mrS",
  "key11": "3N1fnZZV4d7rP5gRJ4DN6NyXzLvmULesowYb73iFReFBT4qBiK5fHjdjT94qRhPzSGN8GjCr9Xj2EvyEzNVaqcfL",
  "key12": "3H8hvUyriTDyoVTw9zAvTKFa53JdczmRs1MMR2HsFYnW6hzkR9GLxMByGoFeLfHUauMnkH1AHc4mDLv9QZ92f8AE",
  "key13": "5AY9vMErSqPx1PDx2ii7o2WkDn6YiPRT3BhKtERAhFB8rsJ7LTGjkcPbnsq7e7uyB1929uVMRYEDHT92wLbZ79Wm",
  "key14": "4aKi7yewGNtXRo8BRBiWQUHMnpjV4BXUV3SBR6oCJntQkcDdzeVJj725RkKjGZjzdG5mQfqcyY1rgS6wPmySbiCb",
  "key15": "67dpUmJHLTWD69KYt4gyCsBqfiiLDdEFqwM7PHjxnFEWAgNqBuFdvKnzMPLfSYL4BVUUdqDbs4axdwm7yYXTmPpP",
  "key16": "VjUs8GtbDb2TJcJmg2fdxi9wh6SSsrFUYvkA1TeWNmbkXjJq1c86hTw8ATftPcDasNrH6PyKYgjna8NfSvGWBtv",
  "key17": "2zBguMzqE8L4gmvetjKq8BRckoQvRDAmJ2yQXCizEMfyzLzeGpbtHwRrTBCzL24MmyuxBhDmK8kmj6fTEUmGXqwr",
  "key18": "4xmXaXwTVsiihMxhUnanaY9rfKrNDGcnQ1JWbBaANDetyR59LEoY64QiqkghcC7Tpd2t3DzXWnXEvjyvETQhQQmf",
  "key19": "2PTsXiVBRsL2DreoJNwawo6d6JZQXM2ZGhjFvoXMkddLcaBx7z6kncvYoPFfXaL7Hc68q25saGb45yRYcjGfMQqP",
  "key20": "4PHG5a6LKskByboDhAWFC4m9YqMCv1BR13tHLZXxivwzox9CXcMKLNkaLiKJszfZGFGUw3t7DCZmPY1UALtJmzD6",
  "key21": "8LUCwDY6vQ4KPcPg593pu29QdTUc91JStB9QmG77kRF3AfdhZkDyjcyVcGaPQEbXCz3eQzJCXVxwyBU9qdmm1pu",
  "key22": "N53szizHtdrRU5m2BXmLCqSFMN4s3idfifmcaaVZdi1xRhjj6LMpWjijc7ZfEUURQjAxRAcjESz6k2mqobR7VK8",
  "key23": "4d11PqV2VTZdzEQZiFDR2MEnxq6R2ezi4T8Ud9sqNueWmZvzZewZKsMtQcTLzKK4hx2F9kCcPcPu96GkujmfKvna",
  "key24": "GgpdPCcLbQK3UsdJDsCWN9pyGxZVnZDK6NZa7sgK1yvKdDwyAJQ4HAA3W7DyzLVb8Jrf3sL7iBrvaq1doMVS1bA",
  "key25": "3V1wG5myAiZpMLwbFhQGu71gpr3zASTKcx6JkX2F2iXFV8uwDBJKN3VgCSD36y7dEJPyUjBp1nK1QELJFsJBLwDn",
  "key26": "4SgfhEqyNASrsiWcMiCCDh4vy3o5rgnoNgf92n8WcNLHkvemSB3nwgkPSRPJLkzj5xrrvV76us3p8i13AHCHaTnM",
  "key27": "e7SjaKrohLJWN7rbTVTrHEtCge6SUsj1dSPiQ9pBj82THhPxFmiMYHes6behvJirMSrcS4sG2EYNiHZozrvydLq",
  "key28": "4JW6Zk1po4iham5Zn6oHDe36EUiRmoURmai3MtUN2JfYrdh2bzojJkzvcVAjpsnGiG2S7JxeqRr8dYDAnEyR5d4u",
  "key29": "EQo5SPKGD1ERMuyfiKpXA2tckBqEy2us6qhMaMgjS1p72R1RodZVbBy4C9RaPgjYV38WQqrviz7zJ5qxup71WS6",
  "key30": "5iu8Z6DMhfyu4vgUaTiXcqKX2VzyNoSr8azZg4fdpNkMCy32AcqFvBYHXDmTGGzWmyNWSP9PWNoDJV4ToXJAzUfv",
  "key31": "GV9B7eXGULsYvidUK3VveGdXDvy184GPjNwWUqak3JZPrQQXtyRBv4LautaXUWQHKskion1gCPbKYWNgwcwxooe",
  "key32": "5Tw3x2ufL6jfWxFssAGqKpviTYzrzupNBov6bjmhVaPNr8HztuNrEVB5qYJpRZbSu2Y1a5yjaZQ75PSKFgJTxGCe",
  "key33": "275dEoRJjJae5eSp2mQ6F7iq9NGFLrRpkGUZFfpukvvT8QLk4Fxs7FmWQY1C6RSEuFKJMahHzCNQ2oW2wQWNBpZd",
  "key34": "3AFPiVjkTxjAPkoFvVBqJoTLpNh1iN11WPEHqiGNcTK2cwveRdMfa3fDe8u9SsRNWGr9akrCfrc2Qqe7nfi1W3nY",
  "key35": "4FaohoxPZZW8Tof3pwfZtQvAwmXjycYmH5qdsEJ2ycQbUDNAQem4JjivCexLtQZGgriizutqbTvDwVKe3z96yAyx",
  "key36": "5THFhLunLVqo22bFUX1a3Cz7Q171TQ5g5Tk6LVXPgAsjDzJZJ2A8vPf5XEHcjNgnfgw7eyVo96rcvrcwBoSkwMUQ",
  "key37": "2hTvg65mJ41FYneHV4m3qWTAa5uLNhrndnHP8tCocvJTB2681WDaGyWZ1YZKKGiQfztMQYW6eyrVbsNqh6TzDcFw",
  "key38": "2zpwAnYgUoi88mHb5A26tTN2Qv2rytzjpSoqTRda4omup67T4gtPEt3oLojg2cALcMXWDz274a3TkrsahaTDA3aP",
  "key39": "3TiBzyZ5G6KNpGgNH8SQHVy3fLgq8BXKk9LXHaBZyijKbyEyDmHbyECUVo2t4DczdNRqPP9JGdDXs11SdtstodXB",
  "key40": "3LvZp7QKREbBXy7Lw6cmFpi6JwNURxM6r3BGL1JJZH5bwswL8v9VzXqnkLR8ASBH6CijbtcM58ZY696ouRsGfoaQ",
  "key41": "3a3MbjtkCjrA6qofg96ksnV1gHzEqCTSp3MPZCFye1Qp2fY4NYpWJF1351rRfiFwah5mqwpDMoeEZ4JWYS84xdEy",
  "key42": "4hDG8rjPzSY2kPfrUMnKMYSdsmFTGLLwVgMrBtdndQ5c4pvrmBS4qKbAn1bh27sg3V28y79NEwXEDQFnYFc53Kzu",
  "key43": "5eANWnjuzUKZ9doe1jq9M13dahrUvSpFoNa5XVkRhutLVFkd1VyezVAbVUNo5C1MvcMZZbzQCQtstTZ1n4nD4Lfu",
  "key44": "32GziGPZtvQ9x6asLaiY8wvpgv4FhFALqRVaVh9m6iBeui3TcCR8nD5isC3qkrHAk532Qodp6PRNWRDmjgxmykxM",
  "key45": "suN34CcVZU6qDjxVqH7KKRMPkx2NVCtJon9EVR2PTt2EeSngsyEQ9y4XqvWQBcM5Nrtbdhy1UJ6EKvB8PeQycD2",
  "key46": "2kncwEfqEjs4hCuWBUGXxa1ENCDShL5e8U3mUur9cZmDBWfYTFNvP6yTLvmucA9jxWSPprW8XtPeMUbuZucihkj2",
  "key47": "4gLy9xVXB99sE71Y1fwQRNvV5mauHBU5wph6o8qrUDvB8c9qX1b86L1cqxmrJ5jLkp4w4RxSGbQmF6TZug4nGGpu",
  "key48": "4j7qvkzAtqM2Y9jJrDhzRzAvzNKqyeLK4uqyy8d2eh1FWi2UhobmQg8LnJZLhzGkMn4LFExbepq69e6e6Z1Ciib3"
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
