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
    "4EqNx1NnttwvCSBqmWU7673Jq6vEXMMknaQTTL7FnD5QgAvKBZUKusEwjm3f9awicc8UP82BkmCkfHRBPR3ZmdGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E87G71nrXQ3UR51GVAAakL7kpcQeowNLSbkx8JEG3Khthssg8SCVxTpga5VYb5MWLYJHdbF2pWSdVDJ3YvRtdS",
  "key1": "5xNFX6z7HhEiHsdfz1HWBT28LjG6DJUiSfHCd8RyZTjXPGpzwkW81kh8FPNQvh7PyZfDbL7m1anfqAgaSrEkUXmJ",
  "key2": "u2bLFb3PDLzgyMYmueH1GXQCSPawzns1SGF5Yz92tz5K92oqwsB9ZYjZHbmkByycj3WqSbzRcWW8j1fi3DyddsS",
  "key3": "76BET9d25YMiBF1vDY1rnJKpHTWpagmAuzTVgFeWks1gH9GpxmmDAc6mZqXixnaNCreQkXgyrrt61ShtvLvs5wA",
  "key4": "4JQUvQA8iAqCWoRK8fWdVG52FZM9LiMs1H1uAx6yBAZDagE8Ln1EAPPKJ2DFWtTBPVmLk9TABUfHKLGLedecfwVj",
  "key5": "5iKK7kZDoCXhVFSTAtamCkowpaYaSUKUBfpTNnnWnRQNYiGNdGa8P8ARmb3sQuZ8qva4FXWiVdq67UBFYNvyJft9",
  "key6": "1248wgpgohHLnrMXGLc4fEFedBkdLvE2jNPM8wHkn75PBtU1cHtbUJAyvQ4qnea7yPaNWH7QpCGt5E4NDbJDAxwX",
  "key7": "3YmeCTzGkQ2bSHConfe7VLLXetcVCNwDhRTEGbzL2hnffmSb9vHUAsE3HAFWXw4bgPCizfzXhyuiVbrKsBxRp6t6",
  "key8": "i8KGr5wJsznebe5zp1cTXVbRFoL9qnNRGZwfMmThGMp9j7hgzCNRFuTKAb5zZk5xfRDXii43Rw5GgfRarviKwqW",
  "key9": "sZeKFemWQoBjRE6j1tRZzPZ3RqZL5cxcN8Z9A6n4vVeAs5RKHh7dYshBwDTpWTPtPJHzg1bjNFQzpK5P3hGYXij",
  "key10": "5v3L4sdRcARDnmFgUT3JcCzraMte6ucjvRYXsewkcGHpJtUtgpNAqV4nquQnF3KjknQVXnHUUJb2aDPhmtrEigbY",
  "key11": "4ctgtzBGLRuRHiNRpGmHNJWWF1pE7kSUyE85o2FnpndfAjV6eoVnhVvpMnCJx96SZ38mhm7RTLaDk4U8NfBByjrs",
  "key12": "4tMBVEvaGFZS7gTqYDRdBsQSEibJrbWSnv7SbjBdT2FwRCoSA8etek2PK8mcTZtV2cAySGiu6wp8GYSHQsPJL2w8",
  "key13": "R2CzTyY3drhEwTxvPWjvarcESyo4vsX2kCJKqPRfYmgiSL47ZwSQFjSMoRYyGsKcGx2NhxetwcnPzHDS7asRqGk",
  "key14": "QeA3MKzwzu4oXEzJbzBrHhPkwNokHWDGVTZ8GSDacCbyZXnvYJfCNz5hR9AVfAt2DtzmrE8KQuSLXGY2EdMwJa2",
  "key15": "37RqrMRJ5TH1oY2RbLRKSaNWAf9FQN1Xyf4LjmHhXa8bEpjiPhxbHcc1aJmayBVMBCVeggAKeiXTTLf1QA8LjQDD",
  "key16": "4r9Rj7VrRYGXBPGoicVuJzMXpaLmr4Tsijwic3DL3vDBqgdFV38gogebBQYdqNW26PWJCfodnRdYcdXjmCb5kcKc",
  "key17": "nymEwjxQrC4NsaCDYwZpheqDHWxBzFAFj3KihDfDtMJCKQtiaGhEjEH5n59qKtEhSzC7EKA3QSPdomkVz3d8bcr",
  "key18": "2dHs7DJTttDwvF3h1h64VLiYVsdj63UhyxL6nTfxc4t1y27BhZuck8sj1Srd4RrghHd8EKezP51SyZ6BsJrj6yhs",
  "key19": "4mHvwzjLm11TGRwssmazKzevsdD7ouANWcWwp1LSC3jjynPb3ehEmrGziRQJ1bLACvX5SRuhgfvAhRSrA9p1D6vt",
  "key20": "3RgSC1y1aBA2pikGgXiK4CSXejTnD6znPtE7dHDoy6FeceNBJvg1KtkFH7VaEHMNM1fdnZrDqfZmBQnBy7qRHg4y",
  "key21": "5AgJbg6T1nE7V8srJWTR2k5zcG1k4SWKk3cBY3yk2d6fBYynPd5c4hEgayV5Fx1zetA2m5ZDaqU1u7vbLiSSUtea",
  "key22": "DmBGeCsq99jCP45UD3HLQ3AsTgPDi9r97EUgsUZ17dcrXHoroYBNkcV2mLYg4BfgUzv8xBauxSkG4Efo2gZcaxR",
  "key23": "3ZJ7veF9K1tK6ikFS9x8Pt3s7HB7KjuGJq2HXYFAk7is59JiT1TqVKzkKFePjHq1CNnkYg9Xb3guTAkSU7XMWw8M",
  "key24": "5JFPQ8Rf8Fyntcsgg5YN9TbwxGBquD15KuREF5tfN1KJ1Cms1nxuXsZvB87FxGFo3N29tKvQ8h5BGa5ucaGXZNNE",
  "key25": "5S4FJ1CHYvA7vCeufJsgLaExtMLVotrfvnU58SpAraiN6UYdU5nCqdPNKGWqN64hxXJTTkTyoWZAoxWESfT1XYXk",
  "key26": "2RkqYkh9fB4ZM6VbGuJcv6NsduXgSdpMAfC42gU96t9E2euYECMU4sQAHqQBtH9q6HvwoLc21f1jg3sAqp81wkQb",
  "key27": "5fpHiQ8DWpUEdYMSkqvi7NA8aK4r78CM81Dneqf7CyzyA2t3pKNpRsUH2bCbSy8t3zJZKuQTpcqxobWGHgoSNsBJ",
  "key28": "ckP1UriSwPbx6RSNhE1okEGzzZZZfUf398KGqtLuDaqaw51S8Q2edcfc5JxHt5CEokjdKKXPxjA4LL8dEYDe3WD",
  "key29": "4Qyf3Q1R3NmNAWvSoT16cx8ojED1zGCTH2iF8uXMf1eLFdGUU7ft8pavmED2Ng2nDznyKfyLc1BDHWLwGhtA1BBm"
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
