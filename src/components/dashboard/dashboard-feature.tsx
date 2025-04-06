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
    "d6S8Htt2rzhSM9LYXyMphbaz2E9y5xJAjUfDXtpUjkSKaJuFbe99o1vochZhg3xFM65nkAH9sH5g8rGW9M91ZUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T4eGYkRiTXB7oQjzjhaFVsdxCZkxSTSs9XW15JS18ENPuWssrNFGmw3z7fbn5FJvhYnDVaZT18UEZGwaSa2V11f",
  "key1": "2W2P3XvGUd4e9WccCBwYLzANydG5LwYXGbgafarTuFQaE2KKNafeMg3Z9789nCFCAEyqbQtMzjLyJzgupwQ6HYFr",
  "key2": "4FXqeCcDwJAQikK1dzuSVykxgMRTg9sxsrVGQk48MdzURgyRA4AihgorQu7QuUKQyRa78NAMkYd9zYGWB26NKC7H",
  "key3": "bTeLQb7eSwhy3XxEdH5chmoqGH9AUxApbkZD4EwqvNki8ewNdw9L3yJ5baV3FJYgphjRxZ4NwmfybFTJ5XG2Bea",
  "key4": "pBqr1dSH4pnQJjoZpaTb3czFsEYCGv4TBtrR72nrwsY8wphc5nsQPsW9GZ7wqdyhp329ecmHPWNNhWtpUBepYDP",
  "key5": "5Ufjo51QQTubPCzCpf1fhDCfkJzC4KFQkBCriAqre9eyuc1KrqVq2wMag6VJcfqVbTMUuf3nx56Q8hztA1eHcahz",
  "key6": "3RfEFrTCkKBUUL9mNq6QCJm98vZiWfaVg7WyRBm9WG27urKAZNBJoWeKA1Gp2Erg8ZtNsG2A6cBCgaRCtQdGpW1X",
  "key7": "5iq9w8SGyTWVXfzgSd4BKf92nvTrQRmYJL1FdJBpt9nrEpBkrCzNvUuTeJ8muBmKjY2vMx2XDcDxCsXUzTkDpSLG",
  "key8": "3LyFYRGRZUjrReoD1awEfqCS1aNJKC3PTWSFDRwidS4BeVkwVSojvb6aRLxfoM7SBGUMyykt7KEePvmrRW2T5SZv",
  "key9": "2g12xwLqeSP4nGMZmBsR6ydmNRvqEWNYs9re5E1mDC6eHAeKG5UzRetCjnxNky1MurAygxcJVTQgb5Lo9rsC67NH",
  "key10": "CeRdZQc2ncgknfeg4FsvqkYGe2XapEYmT56WVx81iH3JdFhZjsHrUA2qTjehbhY1e2vzG5vjXaEVvTw89S2RUv9",
  "key11": "3Gbe5tMCYL8Qc5inc9oLaUQJ18Mu1YpfyGEwxS3R8b9JdzjoLjm8zdvYFbTArQEeiiXbCxN9j1ZSjFSWQFyor9PY",
  "key12": "27ux6mm9gmh426jAhtcqevrKRggKiqSQ3HGpXELAM9NwcR9cDHHwWGNkjG6wUBwqQpU7fus3Qxw45vUmPDwATi6s",
  "key13": "4FJZQfRwX37AiqspUhe22D4eQBL18zA5p9waL2L8wsJTJBpkaqZcmh1L8QFXbCwS78SzXoUarj3TinSywTxbGwsB",
  "key14": "3BjT3VVoibg72VG9tAKiq6i7Awa8Q9w9jYus7gATE9r6ptUaAuqjCCiXu6mrZfvHgPc62QEaW8FtAB5ZP2P1hE5f",
  "key15": "3wQSt6Vt2XyGWjgz9jSgHhrKHRZjS226VchMbwwfAiBdjBukx1pgkdPjLqwaX8bit7B56FBi31Ud6CwS6Biofkk7",
  "key16": "2bXT7eBb8JRj9g3wocG2cJBGFigD6XcYiyPmFFGNswcb4jAhm9FEL5Hrxou5Kq7xpsajdmhnN8StxJvhjduiFePs",
  "key17": "22W9rSjDofB5oAeLRbthzVyrDscM8DjfqmrJYy4JGeG2yfZs79pnE4MnxLfCikbhovSeDhq4bkhuDC74416UZqJ9",
  "key18": "5v6J1jcTmHprcborGGW86Se2XFEkBHwRNv36JziSDuCTttywGapLTd7UowuVidrDkPHRAz86Q1d7w5FtPVr85DZ2",
  "key19": "5G89jb9Z82mqFMCv6gXsjDbhDRpkofUt7puudn8ADfVuK1JDSYYpBWXMcYUWtw23oYWYma5YXNfF69jBdiGUdWcD",
  "key20": "4tKdTBjSCv5fgvnnQ3rW1F93p84crhXYyRD6tMX9GTyEAaivvFEveqHzuAS1FUytHQTwcNS6vxn3xji3iLTPAE3r",
  "key21": "3PWxBbzKoffuNH8WJWm5G4ASNJ8SUKpDiMfxWVXknG6SZLio5hmBPxTdVwLSC7YgVotMP446FWeXXNiQtZzXqNUE",
  "key22": "3SQRGWMmbLBRC4Mw12zTWdygBfiPtfSwrx1kAhnDKQnJUUuPiAycR5HBuUGNVVnz35HtTdkPAE9PxvacEidLQV28",
  "key23": "3GsekD3LD341PGu3ViBLtWe2Dr1PbyM8bNsDHYHhTGKf5pcRcQY6qBE3AZmZ1fYZRBcFTw4HvRxUxQwwHRgwZfNJ",
  "key24": "jHrx6z6HhaojHeeHrdniz3r4rzNPDQQqQmNodESt1YdDao9r2YtAAUWBgfvTuUEcK1M6NaGEEndcZGgcbaGZG7U",
  "key25": "646kozXWLQtXQ7rACCcUhZu1Ma8rBVJQwzw1WKBxEojuk9CfTwb88aqYCWwQbWPbjwPa4a9TyXek11Kt6zpiMivq",
  "key26": "3ukqsBXdDAYAMMETHXZLW5T9pwAD6AREFtBAAEsiTV7EtGMN12XFKL2NVD4gJb4YQiz9EL5WzKkSYNaMY6p4HN33",
  "key27": "4DeW5QKbZ5g6RJ1tw58BadNEFzkywfrmagjPfk3KvJmNEY9R8aSHM3YSpF5xaj8zFmxm6BZ8dEVRYHy9vLhnC76k",
  "key28": "3CHJNGhPjGrTDdJmB7k1UZUFZ4FSk3vN5CmBEWFagXHh7kjLsoP8GZLqUiGC5GaczTuZkU18kbsEBrjAadsAEhna",
  "key29": "4X3fxPsW2exzfGtUJFX8K8KB5967jsvivnUCpUrcpH32G4iL8fWe79Uk1ExdDQb61fVMee5sJ5UWPw48KNHNfCPp",
  "key30": "3QtTw1WbYr73nP4EkNt9ZhavdsvNVmMzJHyTtHZEHAsdk2bp9uARQ1cYZprj82qFoi67FcrFcPcsRHFhagNsRZcC",
  "key31": "5wFFMJipMEVARsacCJkcEAS8zgWpUTW7jJWBnVKhUfyZmbGzJcR5tGxLJjyTWkD2sGAMoiF9fGrT9TRNsabEsa7D",
  "key32": "2NPeAoKFhho37q5ZRfTPRg5CfPxnFLwTj9GiKZ2SVmy1rEYtEhXsBdi5AGWBmJJEEQAGnGjNbDq2KQTACw8vUVgS",
  "key33": "5R1u3d5NncMV2XnatQoWntCi6orrEuwnyKbLR4LHaxtF33rMQxtCYbFxB35tJRdLV7fxGdNvpptokzBttvFA9ot1",
  "key34": "3nLxsVN1vGsELS8HVk8C7sQfS9Njx9aSh4Deg4wpYMfCXiJW43HAGDrt2DCKLQJvKaUJxreeVQzEgeqCsXZJmU9P",
  "key35": "5kh55t5VALDZQVceQ4KYwEtkRWypewaQoDisih6SNnMztavT2xavw7G82ropt1T3zYfYHcrYemY8AckgGvmB5mvh",
  "key36": "3zucwbFMEw4MjDmj6av7eEKHpMtCBig1vy99YaFkfVV2APdFXQhN2KZvcXQh65vnhvVbFnTjWHRVcnMeZarsyggT",
  "key37": "2JScCrCwRGGxwpkUUnsyCpyweRyeHrEDisQvv5vqCHwQ1cDKuHjkMsSsPPCJQnpdMFV9TqkSRqFXFga3Eqs4zdPu"
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
