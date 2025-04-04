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
    "2MbR6DXRry8FgWEbUsTWprJ2LRY3Zndcq5b8v2mXTrLLVkUwQksPjZzM5FJxG1F63ALoMCFaRkZTpyK5za5L8JnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RA6ikbNaVP9oxdLaF5RyqQuzCgbPCDuTra47tKgAH1umD6MUTtuLFyCD3XsrmwndQ7acdVDc39onjVnbTQtzD4o",
  "key1": "3bkrCAXE3FJiokrWp21mvjvEeyeRuy7PRoxoMT6g4DGN1ko9uiZXYtn4QJQuYjDAav8m8PmgdrbdaLuwcWDYovek",
  "key2": "4Sybhi4shwdV3m7Ej5iCKCSETmmPcAHQd99BfeRzD88JmrXsBWbmFJkSeVK7fLDWdoaqMWwpZnTaMEWQUaT5zaRC",
  "key3": "49JbYgk5oovXKjuPaHW3SaoXwKgmNRnPkxVrmnzqRAQeQqXnWBzcdgbGqyGiztojtYy2862x1FMxugwCzFaHhh1k",
  "key4": "5m7fNTDTukF9piork1WYgx69u1Dp1k9gFRY7EDhCXXf4HpEEeAYKjLKjwg48Zgpa6q9W587FPvGb4Jsqe3JnuBRT",
  "key5": "3PFDU8sccjnaVmQgcLBgnavW35LTWePt3PdSHUqfWGAXsfuWFPFf4g4XG1FfHGP2cq47ezJqCQDipLw9uJhHDkq2",
  "key6": "3SCdPK6X8QeZ9MjdKw7hx4X9VUFdsXaj6BBCUd3tQBF96BtEL1QNy6gHjRqeLkWz53BtrZnk8YXsfPh3HTzXNvJA",
  "key7": "2Zz7TbNR4X7b5gYAJUpoNEz9zecfjNWw3g6KNX3WZUcZLbTQ8FavZicpk3qvWsxMFBJi2BBy69wm28nHPv7KovQQ",
  "key8": "3GgLEwN8iTFCEno6Qoy2nVRVxGa95nzBGgtVJZKvhsrZrqqrris9mgXMKfPiAYSbYDM6qyNkkd2JXRZRrruwZ1xC",
  "key9": "5T2x4o12zTR7gp1c9itkd5XsDnvvZTQmj1mFDoBqLTBWxBA6yzEWvBNRnwRVJ1zTGzX6A1fnh3pdPDwKDAiCGXWZ",
  "key10": "2pzg3Ym5QAMvTA23azt1RNF9hUpgeTBRHCq6LYEb1jaUenY3npXCSEf98F8WsUzxNgesuEnayfiVaKAZ5jP9tFhL",
  "key11": "4BsC4hgdB74onZH8bRdUMgJ1SXZvjpzhpyfAmjV9TmL4jfXEwuBB3kgnSZE5hTX7ZXuwDqGryS2Q32rVsgGuu7tC",
  "key12": "45uDvyrdgECc8ShN9L2vnxYe92PBGtdMT9TC7wqg6a8TXUnY38ymBabwbh4uwS8mH3PDnuLHPumaMbgAtDfeg3yE",
  "key13": "41ft8YDZ46FHV5LUuHn9JC3H8Ca7kKLNE6Fe7CyEcr7GSnPwvybBbHTB67bhEUcNMLnrfDFbSUfe63AzmqHKjZis",
  "key14": "NpnszSxWe32aQ11dA5nyADrV6FrK34h3S3NShEbDyr3AhUpjkuzQqpMLDxnCbngGe7mP5nxwhZtYiiQ8DBPshF2",
  "key15": "4K5NXctkCesET1KPh5ejUJe6iZSGu48xUsKLa3ZpULxHTDuRkKoDUDem2jDKJ6GF2tZmhagKB7NRujzoA53W5JvC",
  "key16": "22Fmot1nkmQ6hDPkCRupAeaTv7kvijDtsMPtN3N7YyWCF1wWLQZe8UcsVR7d8vzs78dmUPrmqap3kRpf1Z2zDjMD",
  "key17": "4p69f3JT8MX1JagmQmPM8nyFPJnx93YxPiQ1wGAH4ggzHXoDtM9fZhFLBBis9oprmmk6KtcyeaSRgiZg6nNq6e65",
  "key18": "NruJBi6F9q9exhJUPMyn7rsBW8hnADC4o5JPVceLkBRpPXMj2c7koqqTryaCT124Mwf1gQRAPvxoez47pGwFqtW",
  "key19": "3mdbrAktv3PWXS6PkpFC6eVqcHZvd9CiNdy9AnsB2ykqcVMTWodGdbi7LU6YScWxAxABKF8R647AaN94GLoKSfgi",
  "key20": "2qa1YCyB4ZyPcN1WTfey14Vj3QorwuCqJgvAH5CjPr9nCN8Z33MqXhdq39dAvXKSXnBbv9ZsmVvKC2VTpRn8J6Th",
  "key21": "2S92Vy9NYMFtWHeArckBeDsXQMTDnvwr3dzwnEb3H3sXtCVavvA6gqQZLYLDTZDFQkwVUpBpHgTHU1nR3LUV4tZm",
  "key22": "4EWrezWztW1v96FU2jVKCitxGKymMtCCatxv6MbtrhCS38WAyxEyfyxTmrcj9B6pqy4N4BZP3BeUBsTP98MxyfS3",
  "key23": "4z6MN7NfcNQFtsHcxdgV3GoMvNEiZsqHKCDkxZ7g2a2iSvnXhbLrSkYpry4YzrqAuzvPtVgkVnWVF389sQtYi9BP",
  "key24": "pS4EPkBJSBNhBbAFwV151hF3zv981gvCCzBdv2oLiFDDc2Hc6tQNCfGXESy6TfPxU9F4dMZsPhq6xhePwehtmHQ",
  "key25": "5EbHvCB4qzGCXaoCxmtj7q9jjNoxJX7Ttc8bKa78HqzbmCHvkhnNkbWZhKydbqGoHjzHtLJNV9Fzzqiu5JBhSQRz",
  "key26": "4xQbRop38X4eGs6YgdN4izccsmtNp6scr5JFZWj7uU7icJDvkPuRsukM9EQN5rjoh2AmKM4NG3WoERz1xsaUXXyj",
  "key27": "3HHAdamdWAifkQCHWYf52jBafdjuS7A471fz9krcjbETCPinVAh4tDQpLLGE4bNUeSUe2pmwa8aYTVJLPv6xarbs",
  "key28": "4dJzPLTSefNSqeQzPuwrffnWK5y6EMjrZWx8C6nkC4E3WrpefMarWShEVQ5U62jqNDfDQaTFPGYf7zcExF5QKzDs",
  "key29": "gWXDN3ypD6S9dDvAKvVym4i1LwXRr3DV9QiVqLLPEXF51uu92k1kkDwQhVMgB3RXNfj2aWgTGBEmBuXxp92oFhK",
  "key30": "3cqMBgsQ5AsHzq8EM5Fs1YjfWHcqNtHw93iHgFAa2y1FCHpwKpXKYSha1huWkq4wyoBkHdTjYbC1wBZHKVSJMzk"
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
