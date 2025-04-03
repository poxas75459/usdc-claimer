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
    "3rpbVdpwyC8EjAsNaodt4dkQQ3MLL2aVqiGxGpWQWmXu7B3fsDfE5vSst5WZ59N2rBdmrAL3CK9MZx8zcYyRZjVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PWyVAAsEragzM7itqoX3jgXoG9A1u86t5NBMT8s59V3vynKyUNBFLbtumfmMDg5UV5coENDZqtSmFkCXknxcwS7",
  "key1": "VnH2Q6pSC8zQUJGk8xDwQ7K2EtmrdjEcRPyTmsRvJCQx1GW69TeNFo7oAviWWMxG82kbJniSohsNJ1iTEhTZ93r",
  "key2": "5vverVWoahaAdVt6CSCtuBP4h3KmJoNJxiEsuiAMKxZG1SuQJ9Xa1AHqgBe2HuAYWvdstQCZYKKrWCtSeizpgNyQ",
  "key3": "4PuC3jcaFGGPDgiDW94nZqGLHNZsF88eZHV8DFmbTGizRtb8sgTs3usAs3VCL81TPZD4HEZa8ouykC7oUzQR6SMp",
  "key4": "4rgTrVs9nG1LGEKh386TShEjFijnNTSy6J7oJYTgRkkGHhQjezvEicDv3Q44quwiUAvsW5ohTz1afoHYJMpSJmX1",
  "key5": "3Xk8YhBZFey63PaY9RGYobmyLwNDxCUdePVbmVcZmTBNrgcDSUg9k55HZ3UUMtbn5cuwEkZ4woZ2ujWJYwnYdkoN",
  "key6": "4G1cMJWqto9fH2jpfnMyzC1B69GBB3eMJQqyS2ZWUZ4TkwmEMNro917w1mbjrEWDu31huo18VtLxVndcjz45qhvK",
  "key7": "5ZWDa49b9vMp28K3diTq4gKBMxATPxq75VCbAcST9Yt1yQ2U8vytXDGRir7GriK39FqUhXMzwTcG6ECo2mGyTAyo",
  "key8": "5gvEF9BH5w75wHnz7KD8CDjCNbJfjwUMw4pNSLMcRGENBN96PMGbx8y4UsxHcW9rC3Nw3SsRWC2n7puuGmAiyaij",
  "key9": "2gS53Sj9yNwTTdYQvLUj8d9esF9pyN6v3hwnGYXpSDG9Fo8bkr8R961h7tseBqYkkvBhN1wF2eAQ4QFR1Q4AtpZM",
  "key10": "sTow73PRbDUqrGgaVSKSVAm5HVVzJ7TRNhRqCf7AgaC2CJUXrfjTFQDBprUweZZyfG4boqQdouX3gdUotv5a2tH",
  "key11": "42BQPp9eboGtKkqnThLu2fCg7JnESkZ8hFRSdU19Q145jJhDRAWMQKzyy6hTjJZ8buThHNQnXkkhveBio7WVT7GS",
  "key12": "5hTRDwfUgZzbfvJiQhmDb7eH2QXn6pMHrFKbwmMMvCVi8zrF9HehJ2jQohT3Hu3WPQcdisggYsD9Qk1fek3wiZt4",
  "key13": "G6ADXQopmZFkjPwFCoFCNe8FgqYuCuDVnTua3zmQDSJtp2bjwyggykP7y2tWnsrKbRaxd6QF3c5UXfbQ53n4QQs",
  "key14": "DnAbjrJFFq75CjEEpJ8ioqSmPNzRfJo2685xr3fTDzndYTULNz2vhGGw2vSeziWPnyEc6qgz7sG7p4TptvE5c54",
  "key15": "3iPh5B84VhmJYjD7R7jxKoKsML8tEeCVkKbR8GGzkL8fSDNmC614qPTcEQ49FKSzKNhgyqKLAqN5fFhhTkthqKLt",
  "key16": "ePP6BPEP1qbjX19B9HKKW5b2JdCZ32ZTjTV7jJBfxGHXNXVGvXVU9j4pbyKo94Ra3AK9qJFkwfD956wax6oHZSY",
  "key17": "5gRNhaGyJyzDc4KBikB3sUFZPiNkrLYZMJZnAJ9g6q777wJ22LJH35UE6yTaZtBZDJ4gKxQ6dpWj5ftCjaUGnauk",
  "key18": "4QZA2bbasKwRHkyyeXewHhfK74CnQjLGp4vCTjN16oDjgJwoAMU52R8TbxrRrWgQgt3FrRJP44EJqn5C5ZRAW8rD",
  "key19": "2YXTwCX3JhjUyeTdH97xVugYd7pAwvnnePwQPNXfVx8UnU6xs33S22bzVroLfgS4NdgysLDGv4uDsxqchWMUcXQR",
  "key20": "5KGYt3rHJKof1hpn9MZDsNSq5L64hcRGMvYVkkNtXkjbEpNXhJozmg9MmwW5bLsgfDCWqgiKH4pfdZR5fVqN78zc",
  "key21": "34vvKdprA5kBZRBv1mS2sKzcEwJwCkM5eU8PXoQzEb2n7UA8ag6Dsnnsh253tzZf4soQyHbnTD9T1TqAM9rS9jXC",
  "key22": "3LAY1Git53XFLtDhij3sC1gW755KaxgnmzXnVuvvS3hFBeYiCebJwNNr3fDpMxs4Vb9Y3nSzVuTwQbAfBpkuHbZk",
  "key23": "5UykezLcLv4cPQ2YoqAyLqSs2YCsuNaiVSccTrKUjXKuqFiw14t2my2Sm2BqnrTVGSCr8xiZ93WDgf5pmQY63bqE",
  "key24": "5WHzQfWEAVsXHXDNFRfT7LwaxaUiYdHXK6PKD1URAtJbrgipwqQ2cjDtW4rrBGKn3aPJv4Tu3hFKtHXAt466dVoU",
  "key25": "33TScbe6Eia2qYNP3JdV7gt8cVWVypjUi2XVecDn5zXRFi4BBppBcANpWZTrU6NJZgCdrXdwNi7UaHVBbxACbKNn",
  "key26": "2BiT5Qnj71xDhTxsXT4iZQY5mGutHSCeSH6x3DkxtrAt26dB1hRxa8Fotg7zKCXbJDGeJ1oC5p6qLaWAGsjAb6td",
  "key27": "29GPyJkU9DwtwQZ4WWqk3TAjqVpu1aUFYq9GHxenyGHv9ehr8fhpRWMtEvY4QhMmNFJeCEQVFYfxB5LtrajJd51v",
  "key28": "2hVnt5XjeDbD2ymSEeoSvvbf8SWhYfhYcrsvN7qxW5BYLL9FkeAioR42sosyjaa8fCAVBhkqvXxeNERHcy2gDoR2",
  "key29": "3CBo6SMJmguWZTv4HJFMvBrnBqH7A5zAaLWPSo9rQrXXM2JKoH4RBftvePjyv6Aui5z27T2aaphQnZdQiBfZ9Zz9",
  "key30": "2mFA5uis8Jr6wNScKWWaAYNptWb6bb6Xm5MJSbkg8WDXm2Tg8UQzRB965cGKnYH6bgNrQ5o8VA3MszkZoJjcNuks",
  "key31": "FVFPU7XyQi77mdNyzfKJLos4CbVTtZJDj3s7NV22VhNxXcbHtcuxHeQwm1Nz9gev2LiMEJC2xqpNTaUqrB1Vkdo",
  "key32": "4m9qzReEAt6SzxoQV1xughsgMbdJ428PTJMfybmMkEveZFajk8P7rmJBbPwLhRiG5BpxwB2CyoYmR2sQ4xAz5Ezr",
  "key33": "2hA23yqqpnMUnChGpj5J2oQtbF8r6ZFHhZR5CvFweJS32Wwotm2ncZhJHhQvRnEvck4Q4keyn88vkEewaCWmgsMS"
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
