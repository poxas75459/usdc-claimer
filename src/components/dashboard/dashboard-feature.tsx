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
    "2aJU92XKGLkbF5qCBfBm7zGnPCNE4R2Htgs7DK9VrTrdVh79aVvAE1wiXjkRLHNbUomLBBWNRzuj2PtHbmUZEBDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nfkg4RWgbrEgvUaZ5RFy7gdYYpcrc7yukESQJhwazFSYtx9UqVNcz58yNMuz7BQdzSRvv658YJb8qedL1Lwq8Sh",
  "key1": "34EL8PEEDwXPtpxXCRonDDV8KK2jK52wRZrbjqh53xr1uDfeM7AgdJpYRqcVFQZ4XYGRhEPCBBxKsR7vTyHGDCRZ",
  "key2": "332FVrbftHRmzdHKibo789nkxMafnS5RQb2dW9No1HNeQVQB7W3XJ79uwCrGu6QBSJNe17ucBgs9vzsjbwHaGQyR",
  "key3": "3dtY6qtXWUDkaWjwXv1V9neQ2GpwKeeBX7xBAZwc9mmjQqRm4W6nhHihHnerDS8VS6Z5P8wubd6CcAU3coHyeCN4",
  "key4": "3Lo7ENeuAhNwdnmgvXjRUY5wpytUTyV5NyW3rJrx94b9KcmZEF1Hws7JzoFm8nPp9k7MxiwFqJDSMytwqPMEMvvf",
  "key5": "4AQkcaasQJMHpx2vxH78i9P5etb6muV737TGvZspFwaQu1KSRMbvjuEkKg8acDnsPeZa2PrUHFtwHjmuwwZnkJkn",
  "key6": "4pXJ7UV3bwpxHy3nrtjy4yvj4y18aypk8tnujHRhC8qK9UGDjbsPaEqaRmAkSFBwzBJpk9swRP8P11JfznMiAu7E",
  "key7": "4eiu3zvv3uPjuGkvW1Yc7XDpxdXXt79yJgoQrZBueuWSeA6vtoPZrhVyxhFDmqQqDD8ySYbg8b3Xb19Z4majdxiP",
  "key8": "2xQztxMLr8nYhcAtyTSGA9tijYHZunDj2QustzmQph3muihzTSjca69kNSCUcKnMz98PBgJwntC14TVUJiAWd3E6",
  "key9": "5krTZqfrLkd8sz3xaJtvGtcLQYwNS8tVQ1ZtJAiWqPMRwqorea1toXnea1sJdki93tYNTuVxyWH9rqF5JJCYR5Hc",
  "key10": "4e3WXcEV4wP5q513tzobYtNV229LsuTyQo4FAYojnjV1zXwcg3YiWz3y5Vu1E7FfrdphAhcfaqrEUAeh3R7Y84tp",
  "key11": "66JkdYYvGV2ajymC9aNfNithipHknZtDHpdWW3bgz5XDE4rQKXuKu6vbJ99fHp87CoxSJXZbVCAzLk1AKkoJpEPp",
  "key12": "3nEMyvdC7dt5X7zYFbDqg5sYsNRgsW4WtgmoRV86daH7nhd4qpRDedX7yFjw1SRcEwLWnrXX9PsY1QRV5LEmg3zg",
  "key13": "hN2jW3oCtEy7Cc92ARBgdqJyFANdC4pMDRQNPY7gdGLJie2XkvFHEYD1NBbZcxm5Mv6pVFmJgN2ifgotonSihgH",
  "key14": "3hbqVPDRPfk6dwh1PJsVqXUNVPvhcL5HoQ3wDgXEfETHzDzb9VpLCnEjLbUJdQPkQ9AkvXLnubtmSDLUoZDjWY1S",
  "key15": "E4SPEA72w7sAZwQaQmpWL6npZzL1X3hwNxW5mw9ZtisaQPB82Vobng1NLeLVoQeEiFvC8bgGRYgDZcQbyxiHMQP",
  "key16": "5YPCTL27wGTGjSrGdcdXkH7YpcqRFuzDvbG4LQHiN1bccYyW8tRDVsstuMeZ381RczDokpXoBaVL1zcEAF31ydEW",
  "key17": "4NvD3XmxHJ8SC1odWnBtoZjpdrWYUxB1W64dxfEQXUTDYk9vYCP82PsM2buHcCuYX5kC9CzMFkiXjUiZyRJscfsV",
  "key18": "4UhgR5i7HtTFFij4yifj4DHae3z85Mnqn2f1S7Y3GB2WXYH8afukEjM5BR3b5cXVicoU2WXJLPnf6kygwdRDBpcY",
  "key19": "4jzBr6DWnmnqKZ9soDmqAKZ5snMJs4TwSKfJNpQCnUZsETbaj8Q9gpLqbTiFtcYqtpZRtFCbpQSa3Ds1cmzery4D",
  "key20": "4QhrvTWr3tDEAY91vbVsFETC38NRWYkQCr9G7hPKb6mWzDHxYHkRY1L1vkR6pyS2X9ktczgvLCVgJVYVCH1EBswh",
  "key21": "323cqjCucDxDE6cbNm1U7BCC1PYeLEo71VKbFtwwFpX6qXBv1bkATViXBygKKhnUZHfDHPBQvMoiZzRMQPzWcjqG",
  "key22": "3jzPcSwB9zURkhVkwmf9nenL7TnBcMuAHPcdjysWZsbSKaVKTXt26sPFrNGgpVbpNuVrBAT8KQxYXbox7Qe1Mfmd",
  "key23": "U33LzwZZ4TCR82GUaujKSuZDsULVMLZe16NMwLYVAWyV9qe1R8tPdN4wbNcVQLG16uBAnH71nev5tuTupUDEkTU",
  "key24": "JdzSiS4AdDStYTWyVNJfEC3Kibv8bA9GhAHYaYoPtjN4hC7Am9HmyQhtyYgjviG9LTKdHMQ1XoCwoGHpmUDMRnm",
  "key25": "5Qfuxp78C5WH5g3ZuGri7Q5dSRwKzq6ENht8xCYjRzHKmGDRqq5TeqmRwAB3u9sFhVTYic3p1bsRiZjQ8fEzCuLY",
  "key26": "4RSKWKNRFEZcLESQroGLzkh4Cx8169R67X3tgnpcbHWs3hEwdPfcdgXu5BbmQcWFUkBL74vXPj9QXZbSwrabVbVz",
  "key27": "PAMYq76cRdmZcjsWi6TG4fwQViRH9FJqovcCMzMJfCGCv1RwrcWMPyjvgwX6nTBb3w33mEZswA5A4wsoDecetjV",
  "key28": "4cgT2Bn92JiCrps9EMxJVsz97S1gY1PqFUqCaoZHTiNn3CvnzAEuL8tSGUxV7Dk3v28ST9i9WWzJTQtdNa4wzTnN",
  "key29": "2uyFsw5ojBc6kYVLrNStuptBcFnxzBm2AtADFjTJR1sWTVW22RH8zPr55ScKvpR1JBmMmY4VdfjxsS87YnkhRE9K",
  "key30": "bjUfYTUxomh9j5bo7CZE3DzNGjgmSN8ZXZxD8YaG5E584AG6Yst6x532TrroYZXTfVtuunJ5vPjPgB3sUg6ZUWo",
  "key31": "2pNms85yBoPR2dDBu1NwoAvCSYiLKxcATaqYebyFo3yjW4Xn4o7zRywxn2dsbh1hxqDVMXCYYNn5QH6u6JeusfLw",
  "key32": "3zkY5fRLcNpw6ubt1av58HUUvvxp3RQc9Asb64LNo9KBUsReDfdJGmD33fp7pdggiZTbSKiHARu8xbSy5AkF4jNt",
  "key33": "2sTaBDzbWMzkzhD4DuSLN31qeN9iwcNdtQQ8rRcwffMeWmGCxCtLFrsbn2bCppDXQCUwukDv2c4hSKXTi1RdoXhD",
  "key34": "PMbHfexuhBQcwaCqPKA3ckHemrkUQj1F5pvL1xJTfFj6ZYbY1nBhtDyuZqp9kXWH5VwXkya7P66nMhVL4AcWn7Z",
  "key35": "2o9k5kakridXE8BjACAzwuEG87YVjMVv2JbXQSj4kGQmBvTrMXM6DTBhjh3ToAJxQncGU2sY6TTziigfzaWUrBrm",
  "key36": "2mfHSbCsNneEGWquS37cF4h2TqheYMT5P5oZpnGqzWKoHqqJLPJbuYxJobXErvMGpADSs1QWi2BbDjMv65KFWXj7",
  "key37": "3nrHn9jffVDRFs64SAGjsEVcYB1v685R7ff7N1nRNPgjbyGLiyHu3fUEJQ5s6fqJRXjbyxJJfozc5SWFQznMwp4o",
  "key38": "WapZ7GE7Z5xoVa4K3KQaWX8BZ1dnkeWUgmzEi2AWndiRqCPkZGTzmvZ6qxrJabuYeLsHL1y2kBdF5G84BqZpwyM",
  "key39": "b7BVNETHoDWi6vB88o3LxE5UgKLCZgQyDyzv482mmLxtjU7b2BHBM9TMZCUgPzshsDQdLmJnqzBwKyJCrtXWDop",
  "key40": "2i3ndFtwYyLnGv2Hv4FEivVjCMpvEVXywYRYMCAMCJGMwXSTPvxF63DigqhVqPeCLtwQKeLKp7YeCFwi6gTv7Ro8",
  "key41": "Cpry2KDUNRGKRvKQMjgf5fzrLxoFa8KTmycHc8uDoVfxvjQvaDNogXgqeyHuCJ3tJhDyDU16s6NtfJvCdgHVkTC",
  "key42": "4aZshUxGMYU1N59MSUYQkt85g5NKvzdwQ2xxyVRVW2U2c4KnTPVLBsQ8Jyb1VSoH7maRCwE159Vp2c9P6tQ4WPN8",
  "key43": "2RTh52EXSLJjkmLkg6daMp9Duzu5LVbBX3kfcXL8MRtdnC24y2qtR72KYgpMB2qxmevcdxmF4PdY1mbEnwHSKzG",
  "key44": "41cch6f3eDr5u6RLdfZxwCf9943mnBFnYYYUnerR8HZjvXtbFa5AeoMwpsqG9JUyQGMkekNyTYFbjksp3u12D6pD",
  "key45": "67HBBCkheLd98z6Z9teUjThYm6v2AkQnk5QawZvALTHkyhvKVk3YKbxvbGBVxyNsUWYsiteTPXNCCqc2koXi8pM7",
  "key46": "2dBbFoiAbpHxv4mDcAf6rWdZ2iKDWzBLRwMSeUxvWHYsmAqYisXuSmiLsxQUxpivmBtczU4ePPuV9JPZZYNEEVv7"
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
