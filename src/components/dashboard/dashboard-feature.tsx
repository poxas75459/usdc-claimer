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
    "2ASENgVRdJ6BQer9se3wd2S7sfpHWEEx8oR2FRVNqaa6zC26TMdwBcMRCXHuwb8cY6U48vJG1dyM9wnWBXtp8vUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZQFXjMvGAVkB2GdXoeoLjdevVY6roinJXNaarFz3UCU5494FGkLAEczADMDzQZqYYpvxvrdntFBUENW9aPzTPi",
  "key1": "4Vb2mv3UpRq97xjkmUgNYc3uErs2eZZuK2EpY2ZYUXecSeNtgug21fbasphK4eLcghyErRbT54jfCXWzDv2ZgYsa",
  "key2": "3u2TjAPXf9UphDvqno5gPYKkwndqciLa3m3YMdH4Sbsnx67YCqT3ibXm1jqUGS7B9bnjThEs2jmjpnsxUb2z9hR1",
  "key3": "UHf4DPKn2nXcvxBvh1HUwwexDiGjZnzkaQnW2omuBcbLWtFENH1BjA4HPmmozwXPah5K7aZM3GoqqZ1R7k2iCJA",
  "key4": "jXk4hwo85CAJy3vveR3LdMHM4ZtRfmebGxgUvSp84wFvraxDBXXvDnJnw5XNkKrJgzzysdkATkJpiPv9jjmT68s",
  "key5": "3jRTKMAE46poCLCUfC2579ntr3yUhtYmTvseKbLqefuz7GHhJNSQFWJacTwSzrqfKwzso5JPD8aB1e2Z9wZjNLwQ",
  "key6": "2Jk2oYEmPKtuyKAS9k7XzTtFGd5pBd8piSg4B6wRQJKBuXiSxARCybBoC1krcoyHTAFp8AVuCfYXMS7LxRAfhNnX",
  "key7": "piD4SmCnpSojyJ9JRbXvXzNhBj95XVUvebr93APzGPq9X3UEkTaA5p66WbyWhh7at1a4mZBKgFq3qFzMqw5jCLc",
  "key8": "2xPkusQC19ZNtkaQmWh6Wmy34RcdTgvBXCRvF69fQ7ehkmF8quTkBBgpv3pCEUYErMBpMjvK9DVRPS1LcmANsy9o",
  "key9": "RzmpayMiFLotuB25SZ8tKxCh5S39D1JZTD9juEkkUVJVH6Aqa9w5RAPTVhN17q6Y3tH1inj2jy4E37xaYznh6Bo",
  "key10": "5Mk13ChJobK9Gbk6JMRzAMdjTVHVaexcQm6uGeJ4b3nMYLSZSquCH89U4cpn7jA667jQqUNgNWcQdJwwh6suMSGA",
  "key11": "3KonpApDrXCcjLzVUnUZyszxKhHJCGgFtr5TxyTFDNEh3gof1EpmUf5agb7TMfzY95hhdX2d9cJvAekHF5Lngwrn",
  "key12": "5ZhUHf9reziZFyynBq5cDm8pWLyfNrW83BPJjsDQwRzfyRVby55im1ZzXwn5Th3JRMng6NNQx2f17EW3mRsuhgk7",
  "key13": "63zTZYMsQk6G1obxEw6vLbx8iD2zuc8WCE7d5qC3QDXyM5Bfubs3PayxM5obevXpAb6wrUbgnzm7iADmnZP7xKDC",
  "key14": "4G9xeBdRdSHULfbpwsQYeC4gLWb7XMxQ86BhTSLvZ1eyFFaMXrwyPJ1SCzVdYtUTur5x8ahyNWcsNoX8ywhw1MJ",
  "key15": "4pUAAR5WqSY9hYz35rRGf7nHW6epNwbZMGJNjtnTazNJBWBpBAJxJNpBQDYdiFBLtkhZyoXbqSxA8jmhCLt2Tp7j",
  "key16": "5792cas2kaB5UsbheJqLAXdcEpNKtqTYjQkPtXeFuBGGVrDq3LcouZV9MLTqzxLPgLRPtKkau7L3KumDbNHoXEm7",
  "key17": "738b64iozBgf6EQhnnq3bW8wPmJx43X8KS4yUbApPoJ8cVKCMKHTiJeM18q7NkFFe8pTG2FdQ3yfVjW6MoHhNxE",
  "key18": "4AdPkk11NChbGNGccEhwTFprxiUa6tsxqw6ZYccPk6WyobFVjMsM5Lkpasx4mvFjsQ9bShaCzhgk1TpztzsqDnFQ",
  "key19": "4pBxxmxVRFa8BJpE4s3fw7c3U4DRxmkmgyxpYRYeX1zTYfyipTXoEQrzLz9hjAFKJedzfKAdsdVmqBNCKLxW3Y8r",
  "key20": "2hDDq49WA5fDNNe8ir6kUg5FsYrMsmFLeLJHtm19wckLmenFrpfSoe1Rvb2fhGg79FSFQ8vSHhYbKhdkw2KNFvjb",
  "key21": "icppXFQQcMQfo1NY2YAiH6wL1Qp8EXHMjsLTciLS2u4cC9XzMNbCoHqgyrkVbzcLopojZaUXPsmLRFqRGBuPANS",
  "key22": "2mSVma7brDBz5V5oppwWAtVWkkH9d4sfccVCwbrqqW9Ph3JxpxzxQyH4Zabk1s2Tkc5BnWNJKX8C29Q8iUKE35aN",
  "key23": "5KKwC5NMSbj6YhcptoPioD63Xj9FfzEds2mmKd3t8Jq4AdkZgcu41y2DwRCjGkyAGRB3ZbTJtL3c7qBwNoy4QUEC",
  "key24": "kvbok7Bk5S7s94DyfRJB8S429TwPU1hhpdcsr5zvh675uZrZrfcLnZtMe4YCjdCsjVwRsJoJStYZSg2UHTt83W7",
  "key25": "4ZBtZZLXV79uw4H32cEHKMN9S76nRXdnPK3tfqiU4vX31oAZ5eZScFGg72k17cXdYRdD1VrYmRD6rVzmr1uuSXru",
  "key26": "5cSTvfxdwdFFniAFfB4bE5bu15QobCP3HhphEw5op6HN5Tp7mhYSxCvSU9XAmqM4pjPTS41RvcoZcCpudGQUT4N3",
  "key27": "2kA4CE36U6JqRDAUS5Yi1xDhZmX4Sy9wpV7FpLHPpuqTJ4Wt6Ke1fcWbYTQmigVUXTyRcMMWuELrEXgysgZ5JyLr",
  "key28": "2BHXqgkPR2pXx6qRDjZ1DUJeFyyom3SxNbd5TS81NnxSPBe8NSphPCAE9A1AsHXBGVK6B6MVvpNMWJkCNuLr829k",
  "key29": "2dE4dSxA6ms6rRSSHVqvFzRfjPnBwknRjxpd4kzHaBDWRZkfSBsZcdt8Yur2ub98zqs18EZBKyuhQ9hFMzoiwHuB",
  "key30": "2NqZTuEdSZP28Yc49HsamBnuqDDS6Y6QUs4GPYxdTvB7c8BCg4gAuN42GA8JtNAcSpEdfPHcQJbq8MdqHvpSfPDj",
  "key31": "3yuTecBCSjPZtNYuhe2VyejJx1SPBnEKhGoAp4CiANJjENJUmUurpLEuERvhiK49d51EBRXDbbhE1FGSNRaia2xg",
  "key32": "AKpyd6AonSgEW8SRGVc8GHjkEcVbC9u4dgu7tpwhxDUhLyBJKyyJyMtJz8huarT6i4DyWtKvXfgxt4LYHRcCYxe"
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
