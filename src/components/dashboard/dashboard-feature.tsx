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
    "5qWmPVZRSWT6kuXSUzCjqXT9jxzH9CGUGZA9W3z3f5BkNLT2zZhodufb8A2ZWmmJZApVb1CUEJyATn5q6gVHjBAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLwg4fBTEQK929PntSYzZR3DxZhmpVVHLSHyAQU6PzQAmrmkphEWykfoPHSeK1rG3vWxSUqt5Eo5p36DNi1RPoY",
  "key1": "4iWKUZGBRPyJim9TG4jNXNXUFPCyuzkjHnsQ5Kccr284BfDnrtGYm5WRB5RfvVQW5BzE7rf2YoryuR4M9N3B9rP6",
  "key2": "5Ytq63tND59eHMVqWc9ELf22rviaVwdeWjbo3dfxDdeTD4P6TbG55HvDxVLKtaPiYLomCaQX8nmLdUQM3U1AVxRu",
  "key3": "56NakA5Kw85x8wwvxJSKAVLytx9NX51Wk2KzyRQgs91Yy1tQb4W96fpixEbo8uRH1PrScEFM6JCpRxQHBaCxHp9E",
  "key4": "4bta13knZZCTjAJTCA6hh3QP49vzdkwBHZXE8ohxSoNJQMzAES8j6s5M3iPrUFUw3xhdREm9d3rSDqEhKM6PA9h3",
  "key5": "3etkv1T5qMNd9eS1NbfB21a7j8M4y37wfBg5uPTbSaDaKixcC9RDWCLWZ2d7ULbf3Pm19ieL1GV4x3TADuCSo7qw",
  "key6": "6Ja3ZHXnqUVLsoN7AN7ueeYR9aQbh33sD8dyDWfxjKjazhXmJeSppDE6RLDLVRa2U5h75HH8dEdyJbTovjnQbm5",
  "key7": "3PHB6bgWWEURLenfEyeDeRMYoVShDfyv9oafxu1CWnSVSe1fC3seFsmY8F9cGpjux9p3mxPBTcmhRnGVV9mvFn7w",
  "key8": "7fJHMWWYFsfXTuuAAdnHM7N492unqdjFiySuJGxBdiAjCzHsrSiNdiVTSqz7X4wMLJ1wwvei7XGHGbzdcsBSdD6",
  "key9": "yjYHEDe9NqAWfiuMgrEdSJQBombs7DJsHtu4Ct4PtFz1AkJbmxFjciLUgYKmSrrHohZkBxquQtsxp5cvjyFsdvR",
  "key10": "5anFbYrSaVuBzeQf2qZjzSVrD4a78GFb53bvRtvFp3rU3mcRfDaFPfqAy8WG76HVrPycWnNE1WZJxJc7VRnL4eZS",
  "key11": "5qWWtgFDiBLrgwtzeukqBKjNRvAEwLmur39xCwkxMEsJf3RUA62nfMvXZQz33wGNBReMjDGDqSkqcRnzdoti2Ewr",
  "key12": "QhUt1Pt8pnaKthw4rcQv63c31q2ePCNKFiWqs2MmGFsLJLUxQo5nmG6uSZsNYg17RjSdzfSLyZyjreb1PN2YPpx",
  "key13": "3fiiC7uf5y8DA2pYba4TTsFSJXJz9v9AnftWjGgC2DQTtTp6c5o2P8TG8VD6nJ5Yz3kKYrgRGm9JKV6YH43TYBRL",
  "key14": "61gD4VE1eGvKS4JY1L5pUpqFMFHhXcg13VWo4wK2JZims6vGfagzhtFqLY4ygBPXNRY7kDH74RT7ekAb91tqqd8r",
  "key15": "4svT2ay7sHPjQcD2ptc5HZEvzDFYz1XNDMehwS765jXJpirmByum3XWijC9pxnQ72GAbKqndGySfoWrG5NkQheaX",
  "key16": "2SoZfGrw9yPzucfyWDir7GqDVEaDLoTwvHhKzSY43yLV66Bowj8xFUW9o3C74Bg2Ecd8gJ8Q4UsVqsoB3LpNw9ka",
  "key17": "3X8LMB1hqfiXNZwUD1ihiFPzTKMkbnKdeiYw9RjTwa32KsLVmnfK6xmYMsK59atEHPwVTjC9Sb9EgJaWdNEbHreL",
  "key18": "4kCcCoA7ThmQtnFSrYcr4JiGofoKUGUk6oDuy8zgWNV7DJ2GoPxPuXE95f6UqL1qd6KtLhcvtHgfVDyfaivZuWL7",
  "key19": "67EoAg5bGHkBUhw9fE1t6VShLKxQFdeCGD26E11ucd99wtbiwL6Soz8h78jswNxgQJBQdPwXUdK5cmfPc4egJgWe",
  "key20": "5WVa3Wj65Une9S2XViXwxr35mhtfk4EYPsoXQDPkrCKX2vw2qs8Umcrv9iu49GAhfU1p1KsgrKow8wxyVyjhTA8x",
  "key21": "3TYeQd2UAS3UQH4NxDhfdYgx8rYW5MFWCszAS2fjheWYfLQzv4e1XEPPMJ1b1bs7C2oxs7ZnmRPdiDmBi1voUDCh",
  "key22": "4TB67cVNb6A98cLCWdsUaS2JTNUC7CQmYTuopj27pr6dZj9bsHRsLxaHoE8FYzZ9qCSJrC9g6sLHEZxjzw7pjkHL",
  "key23": "kyz4bdnxQYauASxaM292LTwFiniFmXBo4Xx7hSBbZQQJ5rB8trGcr2byYQeo3C5SToPuYVjWf6aQsC97Vk2dNe4",
  "key24": "4ZNdhb8JpSd2xUn4HNspry3rMZDzpSgp8r44LnhGhckJrG5JQPY8ChoxQ4aeRPhXPPTXeKK94FYCnQi4sTpWLRFy",
  "key25": "5osbhppdqgf1xSG7xzwmJjXrTkmv4KPfBD3wBVgn9GdHCmvKsfrzGNmF7NAEWB5ZBFFBK1v5ctYp8rJBhycCe1dr",
  "key26": "41Sdsi3PuUfutLvdN7xyXe24nxq3Mcmgbh9wTqXzqQvy1jH9eRYFWcN5dSmLUcydSCjZj9431pEin9UfVH9x6Xa8",
  "key27": "5bPFK2VmJdPBFQHLMP9nL1jJ9Tu68NTBwbUW7y2BiySXyEdd4q2TZvMAPomEFdtazfoDgfQw2w8eZu8cjCoKP98Q",
  "key28": "34yNiLJ6whTzvKcZ1Ezidfffuym5M8o8qd62hCE6dezXgsxDSwprBByGdaGsVzwsm3YgC7btfWceT3LKs67mNS9s"
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
