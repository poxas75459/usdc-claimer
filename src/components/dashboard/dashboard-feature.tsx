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
    "3xhekNrFvByAhztYpmjJCzL8QUZiVmUPbGs4hwHx22FW2ndh9pEPokRKdzLW9VptZw71SkP8WXw9ZGEdtY3qswwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8jy3RbwrG4k7xwJDxGXN93B1aLGHCFM6nnrH767GuLYSUr3JHkWzTHjnvhXYNkPVRHuuMoVkLupSUJ5a1kkAsW",
  "key1": "AFFhKSXewQfVhwucr96gT9TNeUmwE5v6NESSHU3E4ZPqizbVTJiS9jg2YQMf85kfwJqgQFkPh3bmVMitLSJBAXi",
  "key2": "CyXMFZZm5MrAQCE8bXotHDsUqqQ7JQoJmFPbLP9t5b1nJNmWUzc3koNFbgmTihWBXTntcTHpTLXKWqveaeYXJF1",
  "key3": "4PVgeCZgXxyp98PxJQqgWLUnuJLYAwqHmkdCjYxP9A2WfviWUr9Pvx4Xsk36M2s7YrxgAwvoFaEf6czCvCxcwSqa",
  "key4": "3kVuX9ditWS8pik7NCQbk5mkeuKknP2eRpta37pUoiN8AAUXvxtLw92pmjSY9SggVEpiJJNw79K2KKTSmncS5kSu",
  "key5": "2ihaGjFBXpc8cZ2h8PceDCJXgkB5Q67Rdq6f3NGJE6RbqyBcrR3Darp78xbURhygS8jib7XZhXhSevbPPwtF4NZv",
  "key6": "5br9sPvhoQMA7LcZzrRNa7firyF2WuRbNatMruUMducj9b4o7HBxFdPW6f9hD648ufXZ4TGixnVMeqVQW5QMtth6",
  "key7": "2W8w75JbdRBaHUowaZNphJaTj8qXNov6udfHrGHVDeBum1dfZ4hn3iLFaozoLuuVNX7pQAaFMx5ecxQHWZVTAn9D",
  "key8": "Sk9YzJX7eH5AgRgbLyEmMcA9SjH9ZWyufG8jA8hM4eYz1K92SwdER8wkAoc1aWeszECS17f5vfa8Sbc5WB8KMto",
  "key9": "5oD2izYpqorAcF1o5bqWgpYPxt1W6kfdDMwYFUcdqArwTc5YnP6fsEUC6pEx16E4JCqUCcruBS8hKmeM7x6LzvmY",
  "key10": "5QhysJNzPWAmQKEFzDWMwtqNNQRRnSrTc9bWNDo38qC6BA5G1EgKDMRa49LT6Zhc783TzvLSbBP3jTbcVaSCThnu",
  "key11": "XjpgUfkbqojp1AH85utpkb2nYSKuHe1g646KSrs9p9wnDU1uXoWC4qxfzD9NiQQUNhCc4uDZ5XuiXY1ufqafsip",
  "key12": "3MFTJU65HqzkEbJXdKTBDYhjGbrs4wJbL3C9abXpNHY8YhxG7fxQX5M7XpP3z1BCVQP4bybhQgd8HwCyftEw2cgp",
  "key13": "vchCcqLMK2SVDgRSFT6yEfDyTwF2rNLmpqkXHkVhToACZkk8L5VbH8mW9R2LbdE2vT2z4a35Q9LxHTUSQRgC7z3",
  "key14": "21h5VK1WPc5hyFMuhukvD2kSnem1H18wQsgyv7ow21pywFrC1g5MrTYebWD61cadxPxEdYAMCrMhZddHu3bqnuum",
  "key15": "4maHNQqQ6fRXL8xCH7xFoG6yzJjaiTeRCPXby2t576GzeBnLgDFVkq9Qck4cMfhp1Fh3SbdnEvAhFdHrTyLhuj6G",
  "key16": "2LQqizkZ5BM7zkG6TM68eD6MJZkYH5SxNeirdvWa3eojk4qSZxUoamkSjdueuAbKxE3KtrreM3z9UJ3Mh7TyRhQc",
  "key17": "3vkpWYqFs4uJUUrt6MGEHkWGbJm3F99nkmMksWxdYu8QcPcb6EcU3Y7nYqLGhqnJGDD8yazKDc5fK3uMJkoJzqt",
  "key18": "QVT9oSybrWATEZRSNWi4BVZraocnVy5RLqs8FFBetU5Ci1oMbptz7B8vbXhMEEm8CMMegzCqqvyqLQ8rqcTUNBL",
  "key19": "46MFFWsCWywbFoQFFj6ctF7GpyGBqkhJtWtFRgMDvWDvAkN6Ctyn8hSEJVaEYi4UJYjQvc15giPCu1VMCyiiyPY3",
  "key20": "2m6nPFEn1qMXUTZADeBGGi4d1nv6gPWyLscJxtPsMUKbGjk1omBwXKo5QoRUTuoxrZMs5BpV1WvUZTuqEsBYczSr",
  "key21": "4nBLJxzNUK65nv2SWBRR13Jikny9zqxUVU3gn8xmTmwfNVFGK8zkuvBAGwYdDa9duM1cLprkcARDQezisPR74EfW",
  "key22": "2sKvpHC74PMa1LuWEZWhZwzn2DGTML5J4tauBesC4MhSkGtArXzKvptBeNHriWxusvvnf9khFjic2Mo5LZcEnQvE",
  "key23": "2LDmMoBD89js5u7kRabw4gKeVJXo4AmAK68Kmb7s9THgCCKYwmXvg8xvejvR7yBaLSrT4HaBS5AHoz3EmgmVWXWE",
  "key24": "5aRqzpYRMXmbB9VgEVTWByRJ7gk4rYYVXYnTzKX4hD9tUATARfwoF7bsPeGYhFPxMoDsLc98D7J15ZbQgh1zdpvA",
  "key25": "5BrE36HuNbpRNjsDUzeBcBf2geGmtntK9xNGjjphGHrQ4huFpSHDtBiNCWSGaAMCUvfpLT5YmYS7YMmfxcfxnaBq",
  "key26": "59nebBH53dfkkJvxXnWyDq6JHpn26HbkTnafKS25bCDPepeY62BR77FgrsPvKSZvq4oaoaJJqaq9DDzzopZvniJd",
  "key27": "5R1KzXaE7kWMzcXuU4UnmZyHf9XNKonjP3gBmPyLFGUYZvFVBjyw2LBLhTJYwd4Wi5AGEwKqgbK9pf2jSR5yVFf4",
  "key28": "WHF6f2dtfKjbrGpFTa2Czr5X4YUk1nXiSGAK7j2hZAtwvojjZZHZKX8Ziif7zTXpS4mmPtt9XkTCM5FbzvLPvQJ",
  "key29": "2JNa4qUCv51Bwc5ZnpuTirKBxifRydGURnAPMkyPDn9NNJteydfSr6EUwdZznFaqHgLFqLtsb3RoYgJNFq7rgB9C",
  "key30": "UKuvjPS4WqeRZHE6CSxv4dYVsCyeGnvTafFjB4xsjiXPGBgcwxYEdroN3SvPvPz5i1DjzsckqGXC3YC1ENrMX79",
  "key31": "3v83HAA5QiaYemLpUmkYAncjwdHwg9GN3EiNfP54iR25VzWy8A8TB9Ji6oBQnM9Y5nVrhL3MJaDqivRZRvWcUNbc",
  "key32": "24dDn5bEdGe78nJ1JgumiUjKBbuRv8ZHsDky3LiiyWg564Q6iAk8pkhhWxTsryKV4ZL8HppN3CkjANv4c68SFJuG",
  "key33": "mqGoDghA3wzwzs8mHwSg4K7xVgqE3wP7WgNuQGmGQe8Sn7LFAyuuhcTq66ncr5j6ppiYf7FwBTsDjt4BcVYUviG",
  "key34": "5b8TAZkBxii21KW2yX5BqCHw6m6fB5aT5iZP2yCqt5a9dLLCNXuxW5Y4q9iVy5rRzcvGL93m9shzNTNoRrHjA8tK",
  "key35": "KBtUqx5wAneCBQuLTQjXQbyqLLG6rHeAkvk4z4BVyNDxRK2n2RSBSkof2rqZPeNxoWKoby4Rp2EBPV4NN6waVsb",
  "key36": "4eFjtTjfo7MN2c81TuHMTLywLJPX14QSeS2PsjEMVweiiFkJ4jBtHPK1eJ8mq4Pra4Vx6aw227SRhZMjRjoTX4fe",
  "key37": "4j9U5hGG3V2BjL79oU1mDJHjE6MwpHyVStD8QH1EVsyLVDFcmtw3kHBfmJR2ySzpx9F2Pk4tpYfja4p46XfbEQmL",
  "key38": "3AqVZtZT42gRHnpM1wNaybjyqkyThmgNJBDUmdSXagpeHfJ5bVRvjEwFtEwEg3b1RfcNs4ZQGXTEfQiZVA4GfP7E",
  "key39": "5w3rjvLzGLEb2aqeTcfNPcHkuprfhu9xSh95h84FMEUii4qUjBh2LKrUshwHJXH82dcPHaMDydu9ah2ifyvRuDfa",
  "key40": "5z2YikR4RjBMXJkixpKxo5dwANX7sWH7quswJP1eRLtYbccxQ3XpXjNoiSQH2p5fdVw9xarvyhbXpLC7D1V5pmrm",
  "key41": "4iTB9bMHJEAxKqb7sGJS2HhaCGgsmsaz51dtQxskNyPtsRs5wFD7qMbrUvAX7ZKzPsTACbajw9DYpTq72iZ6Ad2c",
  "key42": "4jr1QxNCbPyMvMvKjSRm2CgTzGreTeRahrR3zX2WgVdLrhLxFXUEnNYZbypiKuYEg7o2cErnhxMLTnzmWCfMVuXa",
  "key43": "4PkKNHyDxaQVq85GeDztLRojQMWPRihE2rfYXQ9vAS8H62WZ3wWu1EX9B96XEXiV6oRcpi7D8bhQahCipRY9CEnB",
  "key44": "5bCPmWG9AaB5PnEdqiCk7HATCXKAvHa16vWq3FCLfYVPsxjxVPHQhzSooodFFTPjnmmxWonYujTXavwZp5A7jMhT",
  "key45": "3dswGY7LvDShszt55Uxve7ddsPLYBF28vrVABT7JBaobZBdrXpdEkabGWjCKMmSv7pNqcwRmpkwvxEC6XypVvgiT",
  "key46": "5WjSiUav23Ricp4QAmNn5bxmBuo1emQAMf4LkCEnq6pty3ZAWJSy8LtNiWn4wo3tsLNtibi8ntmbgpWqeP46DGM3",
  "key47": "27stwLtQaqTCTJ1BspTDd8YK5iXz5ePoqJfkFNbmaxDSRKtZRoUGZH3f662Qodt58HkAGmoiHFECGVmYhzYsgAtt",
  "key48": "2Sm9NWuGuF3ZhR7isJjM6UWp2WuaVBTh3QteFaTji2ua6WnsGUSEgcm5dEmqVrAaeM76uspXq4UHqo5baEUXKn18",
  "key49": "3ZP7kH5XLKW2qTYQxisiBqhvm1RDpGYXam29A9NW9F8o75KcUR9Xx8dyr2To29g8VFVFdX7zxviBdwFgwdVPecTp"
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
