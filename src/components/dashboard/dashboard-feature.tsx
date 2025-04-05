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
    "3wCtvZHx3vF8aJ856FbkWaAKtnFwXhb3FCCydiLYmctzUpcBJhUJSAdnSZ7j6nBtMSBpmmLHZMMgitKag2c5yLnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xtty3MfYpKQqudgEEdQWGEXYLtXJJ78VQnhTywEyZAG2FfsQ7z3WCtTqiSvjJgEqE7Sxc9Ts61sWd8ha16aoTtx",
  "key1": "5CeMjxKd6NT8WNg2HveWikNn1FFTrgzsnSofEnAJNRuH6LBzdFNwQL23B2KitBEoNKDo6u5ikYpu9FMEH3dZpTP1",
  "key2": "2X3v3gh6TjhMdSRKeaqP3ffyX3mAbnbLt4HxEhNp9gE2dfxbLujVqmrmrMHqF3ajxkTmiaRzkkwswzTxYJaZ1hkM",
  "key3": "2SiXUJVWHQxmJkereeWk77esns9gkedJLGmrr6AoDCW37mbb4VDKDcCKSx7qMk8KjAbqMS85FxUSKYvjJEcZVoHN",
  "key4": "6siaZNP6oQbH2sdENpMPYzADNBPvhsyZkjynZfSvfmBY7xwowA17CQXPPXbdnVyz8kTyRP4NKRZK3i4pccvxTnZ",
  "key5": "4gEC8pcR7jsv7LK5WpjL6Xr46yNZ9QHR1kbuMAu5SXM2kv7eFTwr4u9FtYQd1vp9zLcb3moY3uxjcjYMhD7jpjxC",
  "key6": "371sHCUS1jyJUA21mv7Hdhu1vuT36Am8skFYoRxZJLkU63ZsJkuU4Tdj9A9tmSGLTzjfgd3RXAbfxKpuBUq6Fbs4",
  "key7": "4wyASjNmYqstZmsxtEV2DVxjfD6H7AsedszxqCfAaUnoxCSWaAUKa5FXnpLaD6SLFfh4fHrDc53PZSxDNACJyJEK",
  "key8": "5ewAQGTCYUS8vEZYQaHtRu8LvRpUzH7LEkwEsabLABDckMAjACyZLW82skvzEcwFvTwrCD5SyQH6xyCaQ9zzMXZD",
  "key9": "3k7yYFBv52EzKPFWeuWcP8Sfntcvv6vfGb2moTyj5R4NMvkE6VuQxDdxguy8LQ5PTsRawRkXKsye1v8ustpufi8K",
  "key10": "2Ja9RWZWDZV3YUt6Qb4CwD3wa46bAsxJfC3Jg8MfsGQZi3uu4M3g9LkEBSEsxzu6FXdbNXVuPpcGkKkQgtPA1DMr",
  "key11": "44P1eKYBn1N4B2U5MucYKi3BFjdJPYrtWgwq16RCos9tHB5nyPia66ZiJbzAAkpXPZ8cLjmMNuKLa5WExgBsa5aa",
  "key12": "5cSwQNcfrgDjsgP2ks6g3xDvaawNGwwAUjymEj9FoH91AkZCCMpH2qacn44KYDRmgC66n6NvhjQhecSVNp18UR7a",
  "key13": "3ZnXURAQcvBVbcEfPgkGE9YCRwsHMt5c9CYs4JNtVomU8a89hP2EaQCQfbNfz5wWFMkYUzvFXbsm7RVcrwB4qfhQ",
  "key14": "3HVvbsSxoDYrp7L8mTJrRdURZ15VbaAyrJypioqtjW279bSvm7Gy5G96RAyQSLc9GoHBCBVhJvdMerhoYxPR3Aav",
  "key15": "iBsxeU2AqPuQyHNqHVu46V67eAoDK3PLbz5uNUDnXKckRB3UwEcrqMmn12YrRdoSp7jtjPEokNzD3Kxb1ry3Qqq",
  "key16": "5d1c656JFoLYgXjtdJnHqjwy1YukXM2QDAHGhzoAFzd9rsu1yFV4WUYznDZ9bFnXREq3hBTU4gomnK7SVkQjPpHK",
  "key17": "Y35j5Xc1Xm7FAtpuckcFwhssGy8k8p2tTc43q8whZ2DcwAouxXgZwc2wjYP73YDattBYGHTrSgda2usRavuc1uW",
  "key18": "2tmaGzrodLzf8mZYNzhdRAaHRpJSsK3hsFoJHDEJoh2LEKEqeFXH7oA1Kd9qDdbjQYjVvCNAwamRVdwpTN3Yuqq4",
  "key19": "h8ZKfXn2Na5GwKsUJij2DWWw2sMcKFXVDV2p4LJn9kZxGvGLWUj9KKDGiSMo9u4o616Boq7gmJjndS9kPnpAGi4",
  "key20": "4YRYxEJ31r1XQkARhPHEpK6r1GfSx6JCH3zFam55gcaLPmi52iBVq6YYVhCZbv57Wmxr39fx1uoowsgvS4gJgasn",
  "key21": "crvHewfZ7oS25fXxAqkhyMvZ613PGfmvvWkEvrCVnbDFjiyCm8vQTU3L6ZpmC12UdoF13qy1uFgrh8eJjPfo6rQ",
  "key22": "2Hq6SU4gyhiU29hDw6Bd29if1YpYmHaQU7uK4CFnorUpT1rK5SxJWhiLgmgCiAmZp6UsMJMH8K87EUragQnYEjjH",
  "key23": "4yot3SDygYBAZFqVVZtLt1FAvLvnn4BnEu7PTCsDSi7KvALVkc1RgxfDFhqnRw5CsmZBU5FLgr8puPEbzmgUW5sb",
  "key24": "41tq8Lci3D8KHTGcLS2sE9tnG7PBzXs4bi6RZpmZJVMj3EoStv2iZDD27cW7mdxwWD8otzgBx9Qb6wY8d6xogPzX",
  "key25": "5GiBcPqVXdktDKNNA9HNYzihfpkXV8vR3RCRduJqageHYX4HsEXsQhjjWCC7ryJUafWm7uVfaPQFZ8Nx2pgMxyMc",
  "key26": "2jbypUuD1dxZu1UCxDB4RvWSt8uRdQCSFLSrv7v9pBVRbroWV8qpyGrUY2PjUDJnJsf8h7sXXZpDXapfcHuC7r75",
  "key27": "56KPA23kSGg33oXLBdojDgHDaUynTTZvZkSgpX4RyRcULP1fv42Px3cJ6y5HXJqUncMHayUNUrKcVGYSba36LqYf",
  "key28": "3LUiPcWrxq2fRuuPw1ReVwGwShQKr5JfR56LSUq6UuNXKAhzBFG2v1hPBhMZzNPNmTbLEBmbEejgU9AEj4BTLDHm",
  "key29": "2XYEYSK2QpcVyt1woyf8XVWoUJiLReAwKF5dPKKWAe1uBfNyGV5fxu81RpV1uoTbiGymDvcxnAy3BPSpG4pcGDPE",
  "key30": "3hMUcP4CSCxHXsC2rdYcBjNLh8UK2LEfLpVEskFrdXUK8inC6LUeEcG4EUwip3fTFwWWnrm92cwsXegyNesWWMLq",
  "key31": "2cPtB4KpUJjD15HHJdGDhfggTLH9hveFNLDwuuBicTujAvsawaGV4fpNCzgGsN59K9tjVi24KS1XvNc2QhmoTfqe",
  "key32": "2PyRJD1gdAdTav3UBpbnnYxnF22H52awZBZYu45mPX3fddaaaq3wQyukeEVcS4HagvaQBQb6A8SyuaniCCGpg6MG",
  "key33": "5h4DDER6PA3xzbwdtLJf89EgWVWiXnX95MXPyf4V7VZA5utsXuWaM1jsGmvWTPWJjL6sHD6SAhPXApJrJEutwTzA",
  "key34": "vgaoneYDJDDPuK2WJ26uUwPxCrSKYp24ZL6NFDQvqxsoPRv7PqhatnXTPrAQs27ZfnbhAYeyz4BEDuREPvvC5JY",
  "key35": "5o94XsGXjNoQKuCzvPT5PDHQpo4vgmkvxpDBzbFRZwPp3LtAa345cKve6rAaQL2ctyrdQbR6U98ZxdJces88WNLV",
  "key36": "3d72Vg1hPmSNyjZTzsQ5qudz7LvQcji2BDPu6SpuSbNskAkm1FHKx2h4FL8hhwXyZ2LfyxMY4Wc5RP7HWEah5p46",
  "key37": "35rgpXPiMbgbRBT7P8s7g8M5rQGpWyTyjXk9d16XkUHvtyCZpYgbBqPjAQVbajpkfwURNgfnW2iZ5uXDEAiMTMiK",
  "key38": "4FAWUymGiszUBb1iamVzxGFma4c3w6XtLkBe9DZ8tR9iSPNo5WyRxxGeKXbvDwzF5zUzyYzphjJ6tM4od9dZQCab",
  "key39": "3C2ruLe4ZxA99K27f8TZVZSmCcJrjJnyW3n5fPXyYWgNW2P3Bgts2tJwrmnBK7yZtm3pTfHsyEfwLraxppzudFAA",
  "key40": "283SVSz87qqZZuXKmyzBwd8Ku6uN6FiETxHerDAaWNVaU2cfKEKz49YccJ3rK1omTiLadSfcPhX6YPtksF12kSLF",
  "key41": "2gDmCeZMK2VkjSqrvSKgmKtj3tMsR5eFpN5MrcomnYjnHwT4yiZJfnx4j5AFc7qbX7eSVxmS3A9igf2WH7DzPTFb",
  "key42": "3iKWLLJj2RCW4fJ9tqVYnsmRACbUjaTijiy8ZzqEGUu6kqdA54xh5LA668VxXM997ngmTRzTczNLem9Zb6tbAtu9",
  "key43": "WBbdhrcUG1kRRJdVM6WmcK7NehK1aqbEjGFNmcQ2T4tNWArkYVpM1GCSy6Fia1jiTWDBoZq3YXtjVjpxL9nSFu4",
  "key44": "bwtWBmuiLQ8Kv5QWUFEF4R5kMMJwEZqbXfsCLRYzaYiTqnYBCR7vKpKayi57fzCebGB38DoqeVDdEs9a3eJ69Di",
  "key45": "39BFADSiGqj6YNpyXy4duqXiNm6ghUva9JmDrw1hZuJ6gMGoPSbVLLxHchnHopdfB7Kwv3yjNC7363tdM2skLkMG",
  "key46": "4skBDU2TAkDoRFbNx2Euq59vToNvS2h4wMqJF4yKVbaFiY7WDnZNU286sE5cqGjFreGUqR7c8Qjtxn8oLvjX24D7"
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
