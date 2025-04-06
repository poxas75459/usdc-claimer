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
    "64c4qgvAAa8Dib3xkpcscxSHMGgGAHdeBwWHfq4L8zjjhs1STgputkyUsx3F9qm7vZwKcb2JWcwta9ewQwPw87Tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7sRpV7mr8JevosW3PzkLdzqcUpMkNEzYv4UMLV5zJE9VMzE4htqb6XTxYupTjdLKv6GDcCLr6RDodw8e2Cbq87P",
  "key1": "3GYMafrUiUwzMvWGFgYCPdNUrfYBjxKjYNyH3F43jRVNPBwEkCJBv2Z9sjV2ypGJeDvuk1MRXHY4JD8tSUpVrqjP",
  "key2": "2SfUfvgBLFVeGqE3zLzZHGL16GfBaaedY8eaXE69ipVMSeXKkeKoEM6cqQWqrCiS983PQSaHAuAmqGUnMiA1ncJn",
  "key3": "33Ht3BRdF7JTMskGWDPuChKNka3GaDBxxKXckmtsaCVweTACZUaJPR6kGR1NPe6yAg6zsYx9AVFxACeNfbRhtgrq",
  "key4": "Zsnvcq9C6N24FUsUBnK8ZmTn1MJTuo83bsNnuZSBVA61ax8vyAeDKVFCwL5KgMmmVx2ci5Uj6QWcY5VCuht5GEy",
  "key5": "5n3m2wLP28r6F1MkkrdGVBy6HFAUf7H9e4vrxk4FwepE1cVCFztqrQVx3mg5sWbG2SDrnekEU7EX7966qAseEGNB",
  "key6": "3ZXwQMSan6x6XfNtiFmiYm39HT7wY7Fzw4zoMSaeh2xbiq8bi6nDq1uPGv9kwBVxYDeG4gVVRSTrp9uNhzhaK1Mr",
  "key7": "5iv5eAW4AsjLYw9Jr8NStKn6fQU1BvgrQJF6aDoCJTs7c5r5KaqWLkSgnqcRJ11gv3rPTdxamp6vyoG4YiwpgSmn",
  "key8": "5QwH5YmCJVyzKjDah2wBo4VreifPwyXws6UhUx9WHdTNzj3sDVH1hhsgXDe6mV2srm61t92ThWZe2oKDtKe3xqv3",
  "key9": "3h2TYRn1aFYNWjZuYeUQYQYUZTc1hRRju8onTsdSNze7Z9gfHy2AjRZSJF5WapnGGy26RibNkoYkBijvFrhu4gSp",
  "key10": "CmBrVKUf7jRTefMEgMTLpFxtXgyYKQRYPjGQZ1F6E61rtb69rCBKNiY6KtCp84PvVc94Q8ef5Ffb58aMkBUZVr2",
  "key11": "sEmHNDzbjVN7ktcSNwfuibvBxVTRpqGWT83HhT7zA7TVv5JkrVjBKS9iucMTig9Si758sMZqYXnagivkMyPeZdZ",
  "key12": "3RCHzFEXjRzB6zMjjQHFn74jxXuoFDb4Eyyv7nzFLhHcQhSbsCazrZwGRo8JtcM3KzptdovybtWEK6eEdaFaq1QV",
  "key13": "rrF3Xq32aM1vxY3ytNFv5wHD16boYdN5Aq1ap3sKwdWfvKU5b9ECEQSYjzP7RdnqDAroeTV2BtKBSnzj3L9wZFr",
  "key14": "4HjAC1gNVJoPpetvLArgCzPSugcre7Mv1pSdo4fihMKanuhEm4CNQTZArHvnVoW8KrxbkbtVSr8aEZyot9x4h4Cp",
  "key15": "3bQiHJgPTUboVw6AoYbzY2WUbfGpzv2ToCkqj5txxPRFyq4YQUnNL8cHeyHzdNrV2sLjCKytAde6LoiMD37JPNKX",
  "key16": "52ESMSNfWWyfdv4fUtqFEDqXH1YK5z6jTo1p9tYonpHBc58XNEAft4WPVpBessdYeCNDz2sZo512cayXxiF2G8oz",
  "key17": "4FnYAHC2tApjdsundFrpu5gGz2YbAeKj2ZvKtjnzMCEqJHKzrv7WKmNvvd7V7Lo9b58xH3SP7BfgWhr64sVh326b",
  "key18": "2ZuSv6SpGnVKZ344SbxWZ7WspoYEXpG2eiVLNFEMbxC1EvFM7He412HUkR3vaicPP8ctd3DKJprKpxFrpSY7Je2B",
  "key19": "4X4iEq5LHC48FzGjpi5oYEFqcYrrrFMUHTf5dXQZMR7AQh9FLDr3ccLpfnFwKkT5pTi2XEZoGpV1Mtgqcfcngrjy",
  "key20": "5yEkm4AvkcsGmUhqzdVrj2aDnLqLyKVj5mqfCUeNQ5quTUGAsGGwzSLsdFZQjL9cjegUW3TquTknN22xHNi55TFf",
  "key21": "3sVHg2V24LK61mNsFf6AzZQ7g8aYqDuyXHTTaem3VSBn46vqiWtrNKLgxyJm7gorsMPvJvAgzTEuu75Hfni6Ke5j",
  "key22": "4yJGoZWwZo57pf3HFESHLnWziwNdUCMX6FQc6tBw7m5gkiJvnoB9dYobQozUPgyYWjexneXtQjhTZQBKXy5LaYYe",
  "key23": "4X7WzGehrvuTGigQAGquG4GWocTe8WPD6eNYrxeZo49LzT9DDxL1XyFMZsot71fqaCLUCyYCJSTn7rmhSsbzv17j",
  "key24": "2wefE8borJep6sMb9DXKSSr82R71gsp7pmBc7C4EXomgxqKjPbQqMiU9Kpnmf4ckrT1DJs2XZjG6mT6pRNwXk7e1",
  "key25": "3HNFzo4nyNH7BLw5gp63dCn4A7NEU1vyb2w2gMYJCqw41S5vNR4JitQMgdiBFqpPsevEpzKZgi3KHca1iZE85Sg1",
  "key26": "4LvazMCUxFjWpE2yGAyjQEoX19F9W2jRtSQ5dFA4d1EUaWV4J91sPgAw28Ld4pRFWp4mnkgWz6ZBihx2XqWKBGyj",
  "key27": "3ExgEN952j3PAxMoG4R6Q8ofTf7pBdc71eVPHM48qXWBT8tmxBsPPA3og5zxje7dAoowbDquqp9NoM9ahUKbdnJG",
  "key28": "93e8zCjdaa57uwdAcJZ7qJhEmL65SxN8iMYrJJPeafbBzT1k7hRxJFnVYGUn3Fs6s5wBmn3aKCYepG5HtUXRWU9",
  "key29": "3McaNBL6U2dPRktCBPUeeA3rd8RjJaMfpAxRutMXYMYX5WHkfuAdQiwbhEunAMRB5H5qpcLgndJQada3dKqDsgoD",
  "key30": "2pWZLLSTx3XcopNWMkbh5r3qq3d2vqKnuf2n6GpNeRfHPR4Ed9SvfRpT2ndzFmaW5LySZDLe9jxie3oSixmMJbfF",
  "key31": "45JY17gtkgjYrUFArCyX4i1rdc1Lfd7T3GvYTbXjkHBeBCmxjzJAAMAR4HFavmCCWcQJhBsVQGSJDLvPDuc2FT11"
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
