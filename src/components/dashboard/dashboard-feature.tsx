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
    "2cjdXauBFdeRSDYCwLrosWGdtrQXfDUwQUT2AEWCRGZFuMQCyWoyeMJgw1dmgWYnnKLgEJ4W4oaB5N5vi38pSLda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nF2ZD35iLj3JepcPA9LTGQLwi2LcGtqqu9Ly73tiiwuftzG5Y7nmwpNnE3WBaTnZkDoR9v3XBYPbnYoDUgW26wS",
  "key1": "47zZthaKqcikM58awWjKGErayj4cR8KzpKpBB5dLVzH35MJPETwdY1PLMciz872kKv5tUuKbNWU54U65qWNacA2R",
  "key2": "5X2nDsfTr7ZGSX2TXwyUDNsx6Pbrdb2u1CUhDRqmzZQrscperSdpMS4d91reFYcboQCcCzbyYYXXwm2QJfgEkF6b",
  "key3": "oPsTwRCAxct26YMJyPLBDBE2RjotBjJ9X16JhVpc6n8h7iFhPLMpNfmzdUnuGjN4C7NuX9bYDjprGwwUnCEUSwh",
  "key4": "A9BZe9zh1mH7ZPhDMxdtjByPs9u7jGvoHVXM8L7woZZ3jG4Tb78QHxz2DuXFeoD4oqSCxRDmqBgGyBQiTwZmMmb",
  "key5": "2Jnd4cxVrADNuKoUugQTJmSwZpZ7DULq2SJPCayLtPM1mbkfa5MPWhnumcLLjwZAJiVHdXdVEF5qtK1JCLCQjnj3",
  "key6": "3MJJVEUJzukaUBihwpH4TgjWoxCiZkEWVKW8VxQRL2fNbesSRAC4dXJomvrmDSmVddGV1PAoRJhzMcTotFb1GWzd",
  "key7": "5HW2xQJHT7CztpZ3vkgqXrUv4jeq7jC6ZeSU54q9QfsUE8ma2DrbAdNdbxTJxMmJDQdvcyzaNrtwdaNLnJKfoQyB",
  "key8": "3Zt46u2Hf621pQVoUibAbhDgfjEzJrGrCmMp9SM8NFGj5isgDTvH2J66mhmjhzSgU6Avym9umA81k5JXzV2uUyLu",
  "key9": "3kk2AXWjCrbv593ngfBk28UxwsSCpGMUwb7g9ehcKUiBFPDzjbaPUcVj9bGN3t3RDLDg2Au1gJZdQAsrYpV4BuSi",
  "key10": "4jaCwK3ikCkDKxMwzCNtYhHE1aQTGQ3BnaA7dUHo6SVxhGYDY7vyXWZTbVPRRHJ9dvQedb9MiL1YCtYph3RZe1n4",
  "key11": "UVsSGoFYPkBWczHg67c1JxDVvT9CVGYKs5o7UUH13YLyixHQR1j28xCa2PX3DPeAcajzVjUfP938bKKjxE4PZUd",
  "key12": "vKW9A4J7L2wW9zErY36qxbFjXwicfVCpW6VGtXuTTB5Qu7rZZb62tdarPcHUQdmCg6xBr9Uy1ENKAnn1puDXFsL",
  "key13": "4p8b7S54yaV5S6mHytLx2BB7FFVeS7cm8Uk8G6KvGSUxY4nqcfvuuMwg9msaUDus1yVF6hDHQDqaTGAU5qfjVYWp",
  "key14": "4u5NeGP2ZYNF2zmdY5cLxgVW6Gjt7RKNUZdkfjvbGxa22nAcbBnecAnr3TfPSSR9Xjq382hsgyQrou5C3YcfTjTN",
  "key15": "4T4CQSKqeqZeNNuduP7fubKxxET9XTmQqWU1HPsjFcphQHHASWMWZRmeaJrv35N6UhoLCBwjSU5ennXYu8GDtivn",
  "key16": "3hLxghscMVjVtoU8Ww9D2PTo5eQnov7K4NcSAWeARShV86iFMuqK8hRWYorJBPSeEmAT7z4fSYwntqHJADBkNEF8",
  "key17": "PzxqntcevoNjyv7XxUNZtm51aN7kf8BGaUN8tvdzppRPh2Mi1S2tt5qKUR1h7V3AFgQVTWK7mDiM7LKbdYNi36C",
  "key18": "24ta7dM2rmbLc7zLkH2JZVF49tA5pxygQLDvcixfzfn5qu6vk7oBkseFD6xTS2rFur15kV3MEXTrTzNwu2XXYZHV",
  "key19": "4fYmegv9V8jw9N8YKWeiCs9Auo9NSZMdLQGue1stBbxqPNvZyeqWhPB7p6eJfmAMRRunE7HXhypHJtVurMY3EooG",
  "key20": "GEuiov5Wj5vcxGhCXGViDnZ1i7mSGsBUzQNzUGnHJHk7nt2pgUBptCrHFBKminsduVZwWF7VgdSuz6yZ9v9KHLt",
  "key21": "gG3j7wwd85YbaxWkhnVjr9h6g7Bqsnj1R9hypuTfaybB1q5S8XKwA7tDvbzjjtMQPpkHmn7bRL6hQsQv6az8kQW",
  "key22": "3YjYAV5CdKfa7tDHfPjbCfhpN6KceohATqDfApsYmuyipGQ4R4wpsyCTLajyLUvfYUMZtygq6o4VLtrQxu1kAoXb",
  "key23": "3ZJrRt1QgKzmiJwQxJz6HR7ektqtft6NuyxNEeQUVCVKp2AtAn8JcdFuxj53JRzvPMKG7po4qHrFSg8ZY7YkqBjb",
  "key24": "Ncxr45SU5xDauAkmNoY57x6UzvAH8H6pPbhPSu6zJjoTjcHam48aAP1hTMbWE5JUXn8M6o2M3MJe6LtLhwH4xn7",
  "key25": "5KUt8ybdxTi8a7BZ7ZktYLCiQ4w9BtxVGpMbh6cpvbToeaiiG6g69dPXQoYnzHpaWaxmZ71n22jh6ZK97PPWX81x",
  "key26": "5xjiiw1iBP5yVevNVpvjCetDsLz4pRvZ3a195JfTADcGK1PNUkJqAzksfd33Se87SG85da3C2nXBkjD1QHUBKYPV",
  "key27": "nE4w4GRmCNKJUbvCsGhGvaLVgcGZkCFWcZfK5MZiX5LMDAh64DKbamHaQCrx8qu1rojXR2n1D128S8Zk34ACSKm",
  "key28": "37RvaSNBrF4wD1iuizmc29jexGhf6A4oAWZ4mryTowbbEUwG64toQNJThyGAkdJpKMXxBTMQpppN6wQaLkeS35HV",
  "key29": "3UhqFFsrMr1SucaULyrumrhnChunkYitj1Ug7cdgAzPfxpMaKN9Bf2AqTte6f12uphHEWWb79bvWNHUxd6MHZpx1",
  "key30": "47x2p3n3qaLKDKdk1PtGCkfPEjev4cqz1Rm6cNnYcozRjwG4oNXR8rvdSzY3yHTuu2USWbthXCFHonztv9y6mmnE",
  "key31": "A8S6EPtQ3WtETNTbyFLgTfxwgn4BEVxDnzfqeCKzRAseMVatiqZYWTXnV3MVMYBdvbUx6YLxsu8uFGYDQQyt7mw",
  "key32": "mHqHH7kgSHziELxAHh1dxBD1mnpn1qfbd5PCit51FBox38K3LXHwbwMCNfUSSVke6TupV28VK45DS7RuuX24oRx",
  "key33": "5cxrWuix3bFkJEhDQQ934dd3m2zpowMuAQSiFhvsYWuZeoDh8zgzw4g822mdWMnw9gYkUUi1GViNfPpeFJNTXWXR",
  "key34": "5EuJKuqk4ibQs9YrMzAyM6WKrstvZgsYRuUKccf2o2rPapmAbcHPT5Z5HVrzbjLV2oQBFFNPrYq8u7YbHi3a2GXs",
  "key35": "3ibwNbPtFUBDocsSVC8UKjixEgmp3sDgmR4wk1sinDUqTxJ4P7DFKTQo2KbTE9gZzGPWPXGaKAK1oxrmu8aKKes8",
  "key36": "3c8UL953pLLQo1VzjX1j8B3CNST2wiG93NMzKK1vn6FEnThfp1yAXr4asLwbch1U1qed3TYwxUUaxQTTfXG3Hzzd",
  "key37": "42uPJe8gFU3M3RzzCd2djhyghyLuhYrhBGynTa8NyCt5ebw4coRLXVzDcwpVfaXzrsV2vLnFMmuFgSJ5Cyyc2Q9Z"
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
