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
    "51VsK4fot6oD7gE2DNMsjfyNFzjYXTzYs61fjKk9mwoSugfQJBjxPBwbEvefZB26Hn7Mht8sYJfAHV2aTe8GoNgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anRFBoEDeSekAWLGScf14NVr8z2x2UMA2G9LDwpvbFNZvJzwwH6ADAzTGrwVnmPhK7o3CbT3AR1ffmPz2MC7uoH",
  "key1": "rP6t4vYwM3K8Cs4fxFTiHzvLE7gqoZa3AsAhLYEMNB48mSLuZ4Kb2x2x2iKDDH1jze4YLqm8Em3ztMVCRGYx7Mm",
  "key2": "siPN8oimEiGMuuBFr4McQe8nmc3iR8FLjqMrHoQQZ9CMxiCU6j48C6DR2iezwcyfxJZnF8UhYv9VFB55PhXGXR1",
  "key3": "2ZBTNawi2JnadAgeMiZK8PmnFH5yLk4Z3JLoXYXj9b9cB3zFXznTgXW28nMPyWmnh56Qg6HD2GoaRepA676Exkkk",
  "key4": "39TGc46R6kYRuL1ENL3RuEvvsHCg9uaGGL6zFQQRMrj2YkrEbEj5SUKiYky7hhuyXdHYynJZmEfAaY22yjVrZfXM",
  "key5": "5L5aM9sXFzhkJociMmFtvqgKhng3CyD5MpCiiQBjfuRgTu1fSxSpWppMmzhQsMcqQPfJjmBQzCW3X255ifmGhEt6",
  "key6": "3zG5o9qm1XRPbbPeCmEdV2zgxY2Z47vx3gBeUxmeKGVY8nEgi7DUzNxoV39BPZqHkmgcQQfC5gGUPv1wUQHdGrNT",
  "key7": "m5njVaMZj4zYKwVyzyGWvLmKsmbMtVekP9P6FtHHadvSoeVyLBUQVa5pLik5rXxYnkL7aR6ivccAb2fBatCuxjR",
  "key8": "2mmEMoTRc88oDqXu9ZmgNW6J5h6yNJoiqWvvXZFuZ3stmw1tmaz4rv8arLYW5C3xKEezXndDX8PvkKsC6b9N7azw",
  "key9": "26dJS4rjNJZPXyfRX7cDDsw47CoaaamJmRKpxtsmLarDZ8b8Fy23FYWs8wbm5UBgwJe1433dkPZv4YMxtT7WzHaX",
  "key10": "4ZfWJABBZWqYVCQTGcuPxnwM4ycWDNNV71CJoXYEXcMfStdy4BV1ch6LzjrWPuKwMMZaouQXTn3wwS1M2Zh5tDUp",
  "key11": "2WTBQmeHHdgzuV137HXckKXy5dif37cFJkyAdqRCxUfvzv2kE7tsuZmxpk2QBdx4p5DLspzm5uvzL6p1gk5N98No",
  "key12": "5LTKqYm6Ue2rNTrsaUrYdYkP2a8v6cT5G3PuYfGWXj3RKX6wBVRMWa5JqJsYMqz3rPhehD6EoBwhv2FWYMnrnjaT",
  "key13": "myHFEYED1k1xerAdjcgy4uMzTUMpq1CGp3PxBBNAMbLurXRtqeJMwAEb4C7FkKVcfYbj3eeiDdpwkMqPjbW5BXP",
  "key14": "39R3nhUeCEPcutErHVzCAnzw2Z8Leh6KEDkZYshYC4T95nM1sEYnWdJUYDL1DwixvBtq2VUSZ34yWnb2C5EDJuWk",
  "key15": "2Gr2tHhMXFmkwccwAV7cCQYkQ9eEsYVPYtATPeiAU7be5Z1diJfr3KJzvNGJdySBcNuTzaLdpQLiEMcCc8gmZDyd",
  "key16": "4Ssy6uodDC9BpM35JizV6xvqUC7KKYeasTsq5kfQrXsJCLcxAEEjARa6jcMiubYzho4kVfebM9Rfe75U9UpAsJxB",
  "key17": "2YqewerTZKXwaivrBZCNFY1ormYfrrmRzYtkR2UXbKy29iDKtMTdDSEYuikzsmtvGGvL521xPdfaesanxeee25dy",
  "key18": "4iPxgJ1FNTSH5H53ViUPsoPW3fLxjzHhvMq6FQHzDsBDW8RggLswHiUg5bU2pJW5Ddoub6rZBUSHGdDCmUG6HMHs",
  "key19": "4qrbzMsw86QS71UbcipxjXBWxd7wyXrshWSm3fNBxhW3ZUhhS2wjGWYni2V6G1bNAD6WgCDxbfK5xQkzZx6HrD4s",
  "key20": "4qDsza7SaovXrekq4JamirYne8ySHouELGiZHofLBQAEwx6Yq7vKXhme7VD1NX4hrYCaqsx85EX2pN33dJzfbQzT",
  "key21": "YN444wQpfonjxurobC7jsE7BrKk5NotMF22gRgZn3HfrdJffhHx67hZkn13cEac7g36cW9KKKF7iyoppu6Zc2Pm",
  "key22": "wgzj2tDaKw1iHJakDo2KiArpgP6Fagi7Jw3GDDqSi8Gd7ipBVjYkGcnrZvzbccPgPFACHEgcMZP2aWNQo3428tQ",
  "key23": "3eZsAtKETchGSjMmmfDFFyHyMJdwE3B3o7KH8BjNCYb2oDhHHPyo1v3K4jmg5aCoY3k3tV73orMczs7XsLb1cz5L",
  "key24": "66TnikQeLhfsKoGkmnL6dHHmyYikhpodWJzu3wTgFsbawQDomveqaPLSXDvVJ4UygEw5t97d83LHQDgP7Gd1j2YC",
  "key25": "28ephERSK4sLay2T28S3r9iFrXNU3kZnJUR8MgeeBJgAgNjtQTzxqXEyb7DSdLTM3x6hqdPTNguBfCgEhJQy82Je",
  "key26": "4aX9MoYAFgWzua64MJDbtfXiMgR2oKZsENjh18LyDCpQpGxEhqgmYtarfi5nh7J278XZ8Ub6cUEBzN78T3UeBv1K",
  "key27": "3szbeJ4AqR2dtnKZLMZkBm157A4hPugRAbN4A8ZiTDkuf8HKi89csEFBFJfvp7R4LCeeg5DrvMysmmBtTUf4MJn"
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
