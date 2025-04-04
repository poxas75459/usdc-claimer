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
    "3MrMFGP8oMvGCM7gTcJDie5LTSuHD6xtqGosgzcxFe5SPUcsUt44SECMKg5Bo4F1WodphWtqNAbbCwTuZwUJLMGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hhKHnfoG25JmmFzCgSeMRZBu2us6rsTJgk3ePyAcHnVW8MdwuRBsuwszxtGu8ws7Qn6nasiW73de7r8JiSFDLbr",
  "key1": "3ydeVPmRSnpkMDY1wwqFC5dTRBeczKdyDPe8P3WKNRsLN3grQivs2JBJB6HXZKbdFhEKnU1ja4m7EXcdKYXiHQfe",
  "key2": "34WrgjnRiYBx5VziLUYjivyrwwB8ZaWp4gNDBdvxfTf2Lxb7d9omLr1VqyhPFsaSVkLS8rGwtkqeFZG9a5Z7J5Xs",
  "key3": "5MfJ43WXowjgPAVi2nC7FqfRNZAJxXwDBnhDKN8ui2eDcPZa6YiFyzqDRpvqkbg4UaXMm8UMe1mQ41xLHaHh3znK",
  "key4": "2rWwnoX86beS7qfGegnYFnPYzceWo57nbZo17VoL2wNfP9Yzh1pbvpDUWGaLoH6xmkUK1TnBmgaioa5yCRyxztJP",
  "key5": "etaG51Aj7UjeGisx81CsyShDFy6ATFHJtRZBNbSvNNVKsdcGt3fTYMNREq7iW92FKuENqedk7qijh2Ve14jtybz",
  "key6": "iZe35zUiv4uzZPHRfLWGUzJnoWUu6nruVKGsNGkiAhunQop1wLAPd7pfXQio4n7cjGDq8cgdfatSVemaFj8kvc4",
  "key7": "3JriE4d7uxSFtVNf1Jh8YodCiUXJhj8SSXVYPX4qZxi4jQp7nEH6gdycPatL9zk6dP4Kpgm52DmweDiykN642qNQ",
  "key8": "26uFQortQdifs8Hu1unJM4tYeb2FswbxZFRoNrjbHfdq8rfZLsbaNeQy57dfihBsSAYPrVune2K7HMNcz94u8uAf",
  "key9": "48ht7KVEWiDQfcwDdxiU5xjCsfF5hRghADJbn8696qphtixZfaGUmfeg9ERPYkCJqusnWFZbXF3BRyxNiim7t7Lx",
  "key10": "5Ven7FsyVCv3Wfyd5Np4uZgFyGGpg1dGzSuFBGkUALAetWY5GP3aqq33pfYCnMhtD3ZBTq6Cng6hB2YjWbQkWqy9",
  "key11": "5fLDn7iF4PbxHEBW9ESUxyzSpxP9VLBv9Qe8Saott715YGCNdiVwBTDXbAQ4gSFZsueHvssP5mvfyCrEJWhK55h",
  "key12": "2LDz1zojcZHYNKeH8dTgdNpUXKqRK4bdNSNPsJePVtqgLD9WEEBtiiGEqBKte5rSe1HwHCHqnbym6qexskS8T8Pd",
  "key13": "5UxcU7L6FR42fWTmdUgYeJPnsZW6W58zafz7jsYcaJEQyCHd1Hutn364Q2EzZS7EGVFXz9sBAL7vm1vi2JApfBtE",
  "key14": "42MgZkDym7VUY64BEcgCPST26sQPA4Xiv4S4kKHbuoZuk4sm6P2mmESoJC4oLyRRwFbzBB6eeU4Bz9k8Lsd1CYGr",
  "key15": "2u7DvwkPjc9hisJUKudj2vMnCbMutJenTJ4mggk4VN1xxcAjfWdwqAXpNzjxyW62dCyY8VvMPRKvSgYKQhJVBkBH",
  "key16": "53BnBgM45HhZyedriZyy2VY6rSEw6qB8vnJ6ZeYRmMu9pFhQShctGpdUvLHZouau7ZzqPWq7H3jeq4Pdd67w7GvL",
  "key17": "5cZywqMRmdZA9DZY7ePAEp39VcytoCyT7DuTzxEVsB4qQEHCVrJwVVhB1XurbusxVAWZXYJV6yK77YxQJBAEp9Su",
  "key18": "FnRG4iQnxLsXVxuvtRMiUPGTMR7RWHDBeAhQKNjoNBmHPtTpR6CnpcW3Yrig4EQ3L7AAeUbdtnq7t59U1TG5moJ",
  "key19": "66hph65q6QZ8xETVYp7qA8ennmtLRqFTzDUhYPyyxng6Y8dbwSm5FS3dAgEjVjpqob7fBUTjhGB3e9n8RUuHdGb8",
  "key20": "5bWY64CKyMSBhGTKu8e2gfzms4V6sjErt5FU1scxwD4TUBvxq73UYBWxN2gS5rawm2ELp5MnyUvvu19urYsTj1L4",
  "key21": "2yjaQSTcDduN4QNEGKaqSJnBwCkANAUBNzgtEyHFTwbhwGjRJLHiK2ByvF1xhsLuNswMoYAJ5muirT5HtEaNjwWb",
  "key22": "zy5mnPsiF7kczaS3KmEyKbGRcJ4sPdwYDvRRZyyWGjn8BhYqarjh82brb26a8eM7iETfNuvFe4EHx3i7F7abe9f",
  "key23": "cAgUbpgLi1J8GozBQwK35vJv6xz9THXoY1wFUvXZLCT2dUCrViUkRU4EYfuGNsXU2bXCNBubW8v6N7hshiWkaQV",
  "key24": "2CQqnWEhCz2xJE8NRo7W2wkk4FJsij3iHSNMd6n1LxAsezfz6wFnbD213RSNNGQYGtuRue9BUkZdpkgghWsAPNhF",
  "key25": "3ErsvPnVb6cpKfF1GksoX4SN7j1E9RVpsgnR8CcEHg2KZZmRyCwuW4Hs2f48GCiwu42ZXkhHgjBFyXk2UPcAzsVm",
  "key26": "367STSCPHJeoAVmcHyBFiVvmkTKgyR7tRpkDqgjuRcXCvJgX8DghA2NbFSxcDnvSvbEzeqjX7DzC2y6gtmGx1jJY",
  "key27": "4ABLXvGRGX1BUBS6K9ntZSUmn4wCvBmBmAVa1P7zCVQmwWGvdufbBnruBujVgVg2FSnWtnT8Qkrac5Xnh26dsRnb",
  "key28": "53PJQi7Kf45nBdAaJFXNrzTPmWGUF2UQ455EFC9GqdTg9Rg2kvw3F5QCdgeqSBzdc1LGNmFNYaJ3Nea9T1X3hNcu",
  "key29": "5rBGjXwx51oNnSRUmsyJTbfgG8Lev74A3TE1x8BAsETCVHAKoxwiuTLTwjKzmFYky7q7NepfKk2eawFKZSYQAGdU",
  "key30": "2zoa1AKvvMmgFFR3pb9f2yXrU9P7KGfyyWkJpJcgYQYUEGpU5EKv2FVYfRcKja5DLzmofzChEghXuXKk7kTejN3M",
  "key31": "BpZRzPCCcqApZU4EHiE9oWxAh8U4PWX6kjZAwZ3vj5DS2iozBYZWxM7k1hryKFehP4msy1Crwsj3JQ8pm8m8386",
  "key32": "4dyRdtzLNrJd5Q85f5fTe9ZS8WiFtuVJdDkF5M2ZUWvPYiqssQ9Bd5bJmB2bKJhynzPFSCEGgRFReYHeUhbQKXNo",
  "key33": "3b9qJn6yJcRw7XhGNTc5fdUEEiB7nwWguqF4yad51T1hGNFA8U7RwN7g1MuPM2fCVP7oVrSKUyan5x2i4DohcjF5",
  "key34": "oZ1VmBJaGRPcmf2SAiqxRJQcTphrFy3oZ9VENVK7LTutnGPLaZafxztcChP6JrEvHeCDCZgEr5AYUCzZBtsMhWf",
  "key35": "2UWNukMHLgDjhJthmMER23PY6bGNXKxUS9AZuE5DwZkuQuovhboQXGC2nNqu7h6TrCezk5WKw1p1fTpwKMZoEddn",
  "key36": "3jaFhEn9wNprWY7puvfgnKY4XR4fytDWavXLAvw4pQNZwrH7KyXjAM4TZk61Y7YYrNfLWqtxttobjQjDmby8X6fm",
  "key37": "5XBBLWtHqC2UAT4GUY9TjxSzhwXtShceFvZ5n1Uf2cNybHjssZi4jhbux7ik6kUDTPJbzBuECbiTG75Af3G7KT9P",
  "key38": "uYqwFe7d4JdKWaTBZsPffpqa46GStJKV6tH6LpVvXuTsypgKLuf7hZUNBBKAGCszC7NKy4Tvm46tYuRR3iQYxca",
  "key39": "32YCtWRgZUkzSdht2xxP5BS8HACyN6XLWUv5oDPyuGRmocRjQomihCFPA37YgUJ6Yh9WtbYuNcGVaHZbPV4CwToy",
  "key40": "5ZLnAWpAxXq2Vpkdp6jxRRNvZbYdmJpBnr6QKZWny3ES9ff9rZ1RWaQnSpPDvGJALNrfym8XmR7aStaFbkpGQrvA",
  "key41": "3UVbGNSFPtRb1Jouxmb8XccdfXu824AQfkpv6ayU69VaqjHMzsrLgtds86BwQ3RvvM2QYAsUppEidWJ3CPnXuqXL",
  "key42": "3PmQU6U2s49PqQRKM5usRL8b7pt27Yk4yvAZLV6ZJQFrHySTHJpTr47cRzH4jafx7RcFadEBXeDBGTZ1YgZFHVRJ",
  "key43": "36SEZbT6vaUJsf4dXAyfUwJe9YwCsvQN3z1qkrJ4qWdbRC5pHAjeZkqsYBQcMrkPTQN6Sg8cuFHodkzTtUypcgRK",
  "key44": "4S17AnP2h1hWkZc5rc8BF4k5JHTUm6wRYgvFqhmWEBmRbNd9t296Mjg11PQntQT515oUCYN6CBsow9XBTvrzTbCR",
  "key45": "2qBW3Ynxei9v8zsGnn6biuFULDGL9AKhob3ePcedCeMK1D4Vnqh2a1QHg415WJJEVgTa5SrJm7BHCN5fB8yrEco8",
  "key46": "3Bmvyt2oCAAzns1RhUPYK49Qzn875vUUsHpjpfm5jAxcJGZxfLCHRcH6JB1tskLe9sJxb7Ro2H5Xa3kWPMjC9fcV",
  "key47": "xXe7qXENoz5fF8E3UnoPgPmYCfDMsPR5ryH5N7bQp6vCJgtSwaX29AbfXHJQsza5ZqkVR1vodRBSBTwHL4Lb8fQ",
  "key48": "2bTPTz3FXWACLYPyPhhTUuoacytA5w46bQYgJvg6Vk5kB9H7DEgVz9t3eTqzLQ9eU7D4XWU7sc9gK6cjU82QYZBq",
  "key49": "LmWaZcMKyxkUeiSz1p9YC8urMbwPBzf88Mc1bbySU7xtNDjuLMa2ADAVnbJxFSB6Nk5xUTJbBUVfbZKP4mf4rft"
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
