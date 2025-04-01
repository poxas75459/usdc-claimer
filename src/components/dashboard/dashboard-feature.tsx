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
    "58CYMHxHt3eEUd5qjVyvCw1dkSmyAzm9qipDxBEmBnVjDLzqzxwhk2HJKft8TUvA1ZYjBRrwiaomyKDMNyxpbyQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fwtfm1svyBv4s7vnZz51dabU4rTePcwz2zMyvPnYvqtreeSZmXfUdg5kjFtUzrUgXSufpfkN75QMJxtXdNgBtn7",
  "key1": "4LeHCKq83xxYn9ZGkXy7CvgRsaSbtVpqRoDwF2HwnY7BP4p2HiU2GYNRKwtDFHwHrtjRdD46XcDAFHcoo9bXgXh3",
  "key2": "476k7oEXBFzE5XsKmpQuHKYhqC2SLbDcECz2aNweKnP1EMRzMsdRC4Y3wZEQj3HLVNURc5hYYLJbubkmgZSQftMP",
  "key3": "5Cxm8tyEW59nM9DedFQwuBNkvDJuLd1Um8mgZd8oWpNczQpkE3r4HXVTywS6y3kG8gPQQ5YnMSwRLtmG6A8xdi6J",
  "key4": "39yzWxCUDu77ujc7u3q9GGq7zG828PoXDT2Va9nTZV4uDNbwdvL9aJ8n1SBFRi9kJTYbTZLL8iRBxQ9TyrNNjpSj",
  "key5": "466JpBGsfmeYv7kDtiRrTz6Q8W6ChH1CTDAAoiZYz1nnQChozownrahJcAS2sJsbS35eZGMkUYXPdifpjUCYkuRp",
  "key6": "2w74or5sLaHgpytFEaAmANNkL8G3wJNaVNLXzLr1hKzLd2trDYXTpuXe6KASwRAeQPbLxRJut6rpF677PLdTMP44",
  "key7": "3gjzLnkMiJDPBWQUWyxE8qUS4tr77wQjsvP134gqUXUc9pJSpaSxiKyZeTJ9NwbHcESvY3ia58SmbnExUs3rx6am",
  "key8": "4fYdz9JH3N4NrnaCsvHj13LHBkQ7KEwDzXXVcr2kco3eGwgGHpQZweZXzaM2pra2DMXmn8behhtzcEPBhPPWaYWi",
  "key9": "5SW5jGCiRyNNWpG4zqjFgLULCkEqDVJZPqjE3ErmT5zWAEpLY9gfdZUvduWwCeHT911CuCz3dY7o8E7DKKGBroVk",
  "key10": "4JBkFvd7Tcen4maQAF7vaaNqT2JonzjGGVVWNQcHNv15XohY6n87JuQDiqsvAj93uHaFUPRFqxDiHcsDgkb5TgMg",
  "key11": "A5qfbaVWaEp72GXxoxe7v9VWjbmgaqQC9vHWezySQXFAvfprKLeqwhGyVVrN6tLiNRw1ZCXMYhaF7tcvHSKZ6Yw",
  "key12": "eeGZndnUFgHvQhkDHPU1EkhYo7XvSZQ8eFhtP8Qjwy227jpn2N18NKNQi8cAWzhHXtkyJyq7YrfUnpgXo3akUVf",
  "key13": "xLgiTz5DxdG4KFSf8FctEYe5QULv4JuC35nYuDPCWhUoLbf9HH8xr7vkyVekRboqgQLSvFazwZfWaNbiRRBdhmH",
  "key14": "2RvwCUuecrcsVLpk4iVf1BidjVcNdPLVWUM2SFtbueHLQa9iX1HAJfqGez28GW41G8954iasA13SGkkTiHQK43Y3",
  "key15": "3RDnzT1YNDreYru8ast3z5QtyfVVLvqgTT4YhVfvyyZG2JspPPGPKx4ZMDm8X2rU2e5pCuvXYQMgENwCyqZLtzTY",
  "key16": "djhatsjRWwrykR87eqP2zkHbgCH2DgThaw1LhPkyd4Hnr8btnWq6PR2KQ1MJqCjCWyUZmy34m4ZuA5C8AKozHGs",
  "key17": "64q3oPaCScJymjv7gTXv3SZBw4qmRCtnaTjQVDqvYFhBA3r3LpoLjf6juWEFFLnUBbHgjdPE9Qp2ft1BCJxYMY7Q",
  "key18": "3NuD6pwoYoohb9Jv8ChkynKxA5xRezu7B3PC9ERVTs2RoFHZcJfXt2ZDSpq63au36SjoZiMSmaactAVdH2aVk6FC",
  "key19": "3eFUfJzYsGhFTC9s942XL5qmZqtXS8HW99stDjvBjK2sn3fAbK3XwPvgJiENFwFtdPwpAX7nycpj3W9rto2pYmBQ",
  "key20": "8sj7yMzSWfmM29yEAFY8sTCHwSFc56dx5u7kuuTRC7jSwaLMJGg5JqA6Dyw6CN6u82ptWnaa2gRi2vV5pgz4Sjo",
  "key21": "2kdMcAXtu7fBNf9FzRAQfAGkpFRLvdwrY5LoZmWCCbdyTsMPdMsY2JAgTe32LcuzLU24nM8zwFADX3H2dqdudbqF",
  "key22": "4REuyyQjdHcZCmpZN2mQTEV7h9ZxWYyk9bFLi7tuARiu4Mtg8KY19QkpxyZSxsioNVgx6sqCgWfLKp6qj7rnmt4t",
  "key23": "4og5H3KGxQSovLtLvLGGA3JDmw7qqenkdXpkB62FJxnkxsCowhgqfoFocALdtWjc6epR6MHw2oVuSQSG1yMp7eGa",
  "key24": "F3D78Mf6CzanYJ8D7CRHpHUKjNbzd8T6DV58Be6FDxbuNV9jGS1RhyyTRcjDWZhFqJDTQwEcG84d2HDft9EdXU3",
  "key25": "2ab9GbfP6N7gtcTodGEFn9723skGLqDdMcf2A3X62Z2gXUbBg8LFMmKsxgey3vTR3KCr5RktLgsSiccmQPRvjNp9",
  "key26": "3E8Pb46FWGEF8CihqHgcLpBWtBN5v7CmB3vbSWAUyCLVzCHXGtxqZmqGGsDQwmSfvk8gxiVrNyQjJ15mTi8XAKPT",
  "key27": "3Wmh1V6Q69UWKFLD36sTfSFLnghmMRhhmWbeKUgDvoPvFrbyt5inYvrPnc7Pzjx3SZ5NSXCxAoUMaZGKAMYCoJBY",
  "key28": "2qA5Xocua4UL31GDpXDDDj3uzUcGF7fGBY64o57yaSKkNTZBxmQmjC6CLFD6gZzyuyk4VRZFFuFTN9jWi9w6B4NV",
  "key29": "bxQQzWv3ZyraNcmdDPkhJhAeQKqp3SJZ57nJoYwNBRh1BUcF9nkn2zsXEejjaSaEGYSjT6Bi4xCg3hsbb4a17ja",
  "key30": "3suAcR5L6qrrC42u9pbaU8HzpcWnvpQ3ZNRNpqESmBY8jJfSy15kUr1DakNTti3i9dnwKxXxwiS3d5fg3TBwE47A",
  "key31": "2EmNT7ehafyMnixBGbygKQ98SDfGhbxEADFKLVXd8XioL4VZSV3x2riXCTdnBbpzr3Pt1GVn9JexLnPqXDYw26yz"
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
