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
    "4GyYWXgwW1LB9T6kb8NTJgTtnnXcj4MUDKGtZwP6KPN6fXBXLVCHDr39gqu2wDkQWWbxtvR7TscwkYGRQfEFXunT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63w28p9XFswnFMbZxgQeMc12mFjoS242MgqqrzqQ2WdbxduEF6WLtmhcNMnpXH41HbDTYdJDqRfiYYkrdLHkZB2e",
  "key1": "oxj1B1wcVYKd1mSyQe2kjiCozarcBMwHro9ygMpmc8WaccCTKioa6djD2gwk95fQAUSjWXNExgjDzsJpMcjiPNH",
  "key2": "48B3MuwvL9MCczNhahu2eQpKPUkEarG4wLUHXXNLR9eaYdUCDKdQR8p7mEPvS3vpLwj4chFLmkkacfuTkgDwvRJR",
  "key3": "25bovH7xkwNiJ91zr6rJqdfspug47Ftk5igbNZEiJcXYYJCeUpd6xa7AfDacJAW1FrQse1KJWJyfm97L1weZX6KB",
  "key4": "4tVJiL6tFVFe3fCBJk2xJfwN16F8EW3VAtUz8D8crMYa39D8ThXLhqr2syFYtqHobGMgykns8DZhzYMFKUw88LHJ",
  "key5": "2g2rYaTMvtJ1raLKVgt82Poc4x9bfAzgZjaa4x4VZAB8CTiKR7uVLXKXuEweiwbcZqabKuhjCuRm5veEQfSZVVHW",
  "key6": "3N9Vk6JmunMLxArd6WEDUQg8uvc3gszJP5g6MRKhyZ9D4e9f6udsw7r6nwbh1cWm6hZDsmiLN1XXTbc2Z25hZvPn",
  "key7": "3UFABimYVstGBMkQGXHKgEbWN7H3g2p4gaeGaBzbW9VeRTRf39eKiafRhRvXWoKzvUV2Q8ZTyC8wyYGH3tNfiUVe",
  "key8": "4c8eDbhGdM7ytofmdaeegk5ucckWSRPicLhqByJndZcDpJjdfGrhBSNKDXfmf5ArYP4rrfxzJnVgVh42EH3XpTF4",
  "key9": "5BrGWvTcLrF3sCBUwGXCHwFnkAkvKnZtf4FKztGqJc7vgZJiYcPoPjkCVkQ4zx1CA6kaka8TKHmWETJx3i3SUD3j",
  "key10": "5kU8TfkB26q3JTXXGcF3j1ZFzKqWbdKuFb8tw8y3LkH1SbwVUFJeqbBByRBUWk5sj4WS4k2Eq7g8ihcmeyC8faJY",
  "key11": "4fis8RR3A3TogR91EsGYKU3zDmYGPdc5VSSmg2HqaN2a9zMpcZ1b91xRtY2vXDccKmHangDPBsQf3F6n8dP2Eidm",
  "key12": "3fqiScXZpbju4L7VbdSkKXUYF6H5SDNVZ9SKzS3LBt6fRGfsjMqgHHUEBXP5TVZsbbrPznvburM33ybop4vZCZrr",
  "key13": "4hr7wv2J6EdMnRtUEQtwM51Qdk7q5irK5QxDjHgaAhJR7EQpjMJABf2NyFd5iVgSPDCdrxXmXAkx4Ch9y92xe98x",
  "key14": "4MuGU9s5vEkLuy8YZ1PNNdSDfECRAs4vpwNsVTrviHbbMYmAm1aj79yX5i1zqrTKGEYwRGJMFHWtw1nnZj2MeQeC",
  "key15": "4FsGfbQ1XN3eRkVXT5ZZVv82Fr17mDZmxPLQJuTCqqieC4q4KKxwSLuVnGgNWEk1mhoTwo114M1SRyU71M7CieC3",
  "key16": "58pzDYh6486LWZDMrDyyvwiNzCsXfo2No4roEggE47VyQQJATedUFmKGdHnMJgmQVQa8duHfadakBZdRL8sBcdvN",
  "key17": "CwqnHqg4FKdYYnKaahwrDoBrNpEiqcwAkMQGmWmYTykP5RpMBeCmGWMWMnxEc22XYdgQHo2YSyj8nQ9Jugr6cwJ",
  "key18": "5i5sJdybiQfn2CAzJB9rt98CH4f2GEmrxWgvVZVeF278VEfzRe7jT5ofr1U9FLwNtdFUhs1EsnARUxNuu2D3LuJ1",
  "key19": "HCRogY3BReHvjv2JucMZuf8UUuxPshrPbUZb25VBadgrQNZXaoimgkXYGFYsuQG5krkd43tSaf76XEFNrsaH29r",
  "key20": "4MLnuBWKNRgA1JsFG5dJ3fEpTeXpAHrwR21CGR2SHshoxMZ2iBnxED5b3TmBrGv2bx2jF99bCLi5mDkD42Cv7MZB",
  "key21": "5kZQdDJGmktoebZ7VaeED3SsmWZqhCoyPPUrKaxLgoVSLSDmkWz6yGKGqoQKzuP5XRubQkBvUm1kv87dTkChvxaU",
  "key22": "tFMeiYNKfzk6qzApBuERLLAr2kDJDmdcgWX6DfpG3n8Xz6HcaNHQ14LcMgo7S13q7d9hBo4NsuKNaWVeR9ER5ZN",
  "key23": "2o2HQhKPL4rRSkX8EUZB3x3TbTrMeE4XGFWp4NUxhVKgz3VWZgKs1qHoPkMX2k6FtoeYcxRXtXNwcAUvuYH97tNt",
  "key24": "h47tDcYMMQpg14naiuAm9383RZ91hc7eENZaU4sqqy8SS8FJdqJLCY9tC7EPHocXJLKcr1PoMuHxvHeq9WQLErX",
  "key25": "5eyMVWkNpsgY1VmC1yp8mwqvrynqYTzWR91Sdomujrs5YyhuuVAfv5S5RjAJoq5W2EKEGsQibVps1m1YJJRAFRNa",
  "key26": "4Q4HpRcJUTom388be4iWa7vTjoWqbfdoWQF1K1Sf9dsDxgiA11tAGUUQQ4EseyR8aw1LWebNpiG5TMn22C27qjdE",
  "key27": "5x9LUCF29Jfn31GLYu1XxMt5ryb6zsvny7QaasWKUU93nkXKg8zTxp3Ygm9JhGEkYYBBCkmunaeThPaGWELmvxZs",
  "key28": "CqH7mvYc1sfoAaSRXNaduqLKbz4eKEuQjsS5NhkuP5VCy58jNkST8tQKszVksmGosEuEyz2xkMnutbCY77iFtP1",
  "key29": "R8Y6TC2gSjWQLvj9y1DBBxm3UtsxbQkLT5yNQrfYmf9RhfzHFmGqX1QdvhbdmuGXVRX65GuMoN7CqR6g9B9hgWD",
  "key30": "2XXUMgKiwqJxAUWtTNbCw9JS9NHuJBDYnsF43DvgKeuGmU2LGB9wgjf8HwYb9KUiyeBSA1PuSint5WbxxTLBA7pb",
  "key31": "MLaYWLmreiRTGhBhmxvdv12q9bmrBnFcMqcLQjsrkA6zkH6uEFxF6LfxTjgXcdyDbbPgTtzuonawupzkvyi82rk",
  "key32": "3t384Rs6ktv9c3XWe2Zc2STXncJdZiFHsLMXPWLxs5JrKwdkPVrpKhkLLbePiRn7gYkro3Ysc8JG3yqgpWEiMNr4",
  "key33": "5mzjxSoDt5TZ5GjbQTjz6vmECpVb6BefKQsjfW2bfp6AkZs1S2BEtqnc8GRMRUBWEfrox7EuCeuyGw4LEQH13fGb",
  "key34": "344KfeHRTk2fc3xB9jfv3ztNM4JBGCyRSF8EuBK2MuUQNNKSnJ3sHyK8z2H33iJbK7uSjFv9G35D3a3vgdE5vEBd",
  "key35": "25snhtayw59B1KidTRqkGg7NRApkrFwPX3qcjV1obAvSm6ThoKY6zsAvbB4P2CWW3peukYZDaC86LVhHACmWGnxZ",
  "key36": "3xvTM1R2D1faCGSrwBEeyr2rXyXVKwdeBGhJb3iKAcLc9Su8ohLrKrDQE2rB2jAURMK2qoFKXdCrGmN2XDk9cXGp",
  "key37": "2yr7oEgpfXUJPDvFzjAmrh3VNaZsjGmgbmUBq83TpCTm2N6nFYHNcsYte6h13ueUhxh8CpYoALYNXA1f9RhFn7Vr",
  "key38": "5Ye51JrG9eB3DNZHZrLQuRURYjJjUWC9wf6651EvFB7avoYP6EF8TaCzQhrHzRrB2b3GkKDbuEMtrHZH2mJBQcQV",
  "key39": "2bwubyi4uciGymR6iS1d4a4rmEpkq4BSZy19DzF3yykpwBafpSNvZr35frWftVDqxfdEWEeppWpsqJ7ezRfex9Je",
  "key40": "35PQdHEpBazj1jHcbLeWzWn83NbWGKktEGJgoaNseVyX9Wb9jecemq52H9XwVj8hMVxPpWoNH12NpELfimBpG4T5",
  "key41": "2quewsHdHnLNjcD6Ue4wyS8N2JcjRv39x8xebw4c7FDdpqsNjxPLbzLF8CMoxjEwui1xEu8Ly6MXoVJPvpcGWrub",
  "key42": "54xysqzVR1KZQkbJ4oAgcgyd6vaaVeTbo2swtpH5b9BzDhySfXLoSsQa2Koo17QBb1T7HA7uECWR6Y2qE7nUvHwd",
  "key43": "5mSxBntPkKg1qyy4qiNmKy8YyK6uMj2DGXQgCv97dyEZcZHyMvnQmM9JT5e6gqjViZgDypgVdL6KDYqPBWZJegX9"
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
