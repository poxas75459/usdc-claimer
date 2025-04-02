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
    "59Nos3qkPTVJLQQLskpeJuQZ2AAiVF8mrokGgVnZphPHyhuUWqakFEQpm87wetgPFGQ4CY9Xf9GaCY9YsoHToe9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bqzDTtNMKpSizPp1zxAayBWZba8jWCMZTBGgEGX2Qedn2PtBwuivBeE5isqRcRcq6Wr6ivC36juVee4zRJUznSP",
  "key1": "4A65yjL5o2TU4bHYBHV9UeB232rrWGAUfVoDXnJtkSoA8xbXRa1hMjRFkkh6Y8veGoK6VpVYyVDCegYdvpEBwHLG",
  "key2": "4RdBMCXxKndYBBA7sc1PXm4uRFz2PRZ6tu6AVN6ywJorxQFZUWe4PTrN6etVoNkyxa1r436F6o7niqpKXtJxSRtq",
  "key3": "3JhXeF9Y26Hsq1AYeTJFdxxXQ5KjmHAp8YJiEkGWbQ9CBb2qWrxnzF89azYenpLGLfqBbMXWz8Y5EUuYW9BGwFfd",
  "key4": "w1Pc2pnbJ75PUizjmHixU7C8QaLgNmSpLdM8gb4PFUKTW1YiLd6FyePBpQHWnK5B88jvx1xyDJ2NYs5j6dHyzeG",
  "key5": "4fjrbsLuM5NhKCN2oCLTtU1w21r3DwQaQi7tYvS85cHVtTAQ6zn6HFAsoTYHCbax9TTuSj7ZJKcf4XMseKFC1PDS",
  "key6": "3QshiUt78P1d252du1LkghgyNJDYpVBpEqofJVwHaUqZMwBtMbTbhCePJRU7oVVKodJvJBD96FUbFzjmMpBuVzJ2",
  "key7": "5zhr3uZJNjBFujBhaXTre6pVgcejq4xy5TVsNPRaxcKfvWMwVWUvF3WvXW7Dy1s6QdBj1iEA9yuJwE1FNoFxQ6di",
  "key8": "54tDxnvn8XXkUmetgYeNMvJF87ibMWWU7BQXW3NAnMvfiaMbRgnFixBsXG2MtAGRC5KPMpg6gkM5kvEhEQyJ7Yba",
  "key9": "4Ut7EcW57fyyhx3CJWiu2YorAKkVwW9jvr5SJd75ZFJD9jXjf3kXV2NogTJiYkX2zNt2JRYPh77NdgmWNmLRz1U1",
  "key10": "5AgDyH9a8WoppYHRFWhQxifih3H8jbyBBk3KEwtQ1dVqf6zzKFWic45RZKfABT2smgVHkrZiBDAfRFFpG645EYrE",
  "key11": "4bbMxEbe48x5At9D5dW7PcWUMxmPt1cXqq9gRHfMnWTyku1SAsJLbVkzWeoZrG7HBUgrQGEnsrm9CTXx5HEpamDu",
  "key12": "2U2Rc2ZuDE4khd586AEY3tDic3LR5Ut4ULFHNutZL7RdUWvXZjca9pnFhc1hcY3cxi9FTKwUUXRZrPEMvXwJ2r81",
  "key13": "2XyNhmmsrHMyQKfPQ1AjPKCECK2s16kjsjB7vrHGvoVak79NPze6rS4fJfLwQk6Y2zJAq6eBB3aWL6NyLZWGW9ji",
  "key14": "4GSuDxS5ifJiUSeqb4DzrrS5FTdUze9XGSV1KT7zAVnMHje2Wh7YSGXjN96FDd2ZJ1MA5i4xew2Viq7WwYU2NtPQ",
  "key15": "6713LGHMG8oBtY9CbKK6MCCk9Ac9dvRrEDUtFRPCjzqEAwaW7BcqJ52xnZzaUaiM7SMEmD15DeozBQiQJTxnEq4X",
  "key16": "61Ca4D3ukJw2QqNmxaWeizzSd2YWxwog1dFWwwQ4AGyBeDo7j3R2yTQwGK4aFhVaeMs2EF6J6ezDZJy4gvgfDXCS",
  "key17": "29zAcsEhY2aMFyBqvwHNdRp5ftcLAc8czkQNenXb5XUSkdjVW539vmRPsL8c2CdDusLCZ9bwLPXpbcpHCbdTRfYv",
  "key18": "5piy3zqraQgTUKLubQYx5x7Bk3SfWka6QhCCMc4SSt99URDc7imKg94dybNERg6uz6jNom4pjQKRZDmoHAmG4U4j",
  "key19": "s1dZ2A3dXVZbJPk1pwn6ceCZGqmVHHrTLJDLhRowzGBmXdEmDiQBCojLfmpbE79ipQNeKESDyf4hSH2JxCCKR99",
  "key20": "4wnGzB5oUENdQMr3JMBRy5frWjYZT7hFGthD1hpshm5iwYo4xKrfUYctgQsd6edgDrZH5xcGtiDXFXqBH5i8xi12",
  "key21": "2BfeNaf5pvoDvbWdWcgfC5HwZgXiHdskt7anLD2Vi6SGYBgeqYPvyMzxRSSXWGhR4gzE1FHnDHxRQhGWcarbM9yA",
  "key22": "3E16edyvUsjETvTcHmGWtKboHydaNH3Un9VHt5h2JwEqCXsCUNhrZuuYdWuQaaJHNquEp2Xk8JeYcvUx2UbYuk7p",
  "key23": "45ZHW2N6nt8yJtvXWCWqm9tuXDvshrCo5zd3QRiK2QziwG9pA6UfZMR9JGY7NW2dWpGU2zqGHhFqEH3tz2txCFSL",
  "key24": "2X2mpk6xMYFUDhrrXxgUfh7QUo31fnta3S7Lqr9ynkmWHXBXCnhxp7W7VAcXjDYXMz5GhJwDVGc6p77FTz52Shb",
  "key25": "2dfjksN22FouWMzXmQQ68vQ2vztuuL27JoXrnybFATnUqUGXKA4fjN11SUTQYhF4tVxV9tfGzCnnWBe6gpU2QKYT",
  "key26": "4yNsAJDopWv2kw2HcPFpGiNbpTpTEt6oDN3pxJVJ7NZVwzJfuFeSpnpWoENCtsaTZnYQCcBBVR9RREM8taAygNaZ",
  "key27": "3L4vs73hcYTne9KwCsLnz6afBLsYXa4McUATJHCShCfXwipbD77T3Z8N3XHh8ZSHB6g8bH4DaimqihuzjS14XB16",
  "key28": "3b3sCQSc4N7KZ4Ak4CGc1UG8XNvoYKaja9hcroKZJtSURZ3DC52RetnKjYr6pBiffkoCcRMGn7D2DDiPiXgygEPs"
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
