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
    "xFTupJZ1Dcps2fDdVSRwWWu1nZyor2BknEtxP26VioT9NjTyrv7JSe3to7U254SXrHPn4Jtz6TwahsAS1tvE1a4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5anWfUb17Nqd544GoFXNhx5DnKQKiempmfVMFqQaJnZGEwCoXi8C8N3juZ4uh7cXWueNQFWUmZi3pR61PNjB9qrh",
  "key1": "y9BWENrj8y57CopbB44meWo4EQQ5jQcs8SSnDBq1SCfBTBAaAv1xeGpHVtBGfiJnUHkhLgUh6JtS6QH4K2QiipJ",
  "key2": "2E4LvZRbBSzaL7Ay7E8hkNkodNz2sGoF8tk7u3tqvoqTVxo55cx8QkzUjaTfGVcJEYmiPs1s2L3FBdAJNAKPd8gf",
  "key3": "21TkpRSyGH1dybTmxqdCxMae8hSqnAbbq8PHruKvdh7zSqEYR7KtfrdGBer9oPaujrKvJjvyiwJhYJaccNkXdq5T",
  "key4": "62Uc3NmV72KaAK1q6UiKhbuVGXeCarNJ4cvGv1KcEnUcWMT89pxd4boZZ7XdnzgNEhtqWfwt4c7w8RvQX4814pqq",
  "key5": "259SRHQWD79JZEPWUV6VBCT8Bgb56zywCrtaFiiW5JupCStfX1dfjwaMx1masAdrc13zZ7Pu8PeJ75yKHmSvw1Se",
  "key6": "4x6U28M37iaxkPKbF2rbgdDWfoT75shnww64eHesUcmGYWVaPKKJt4KCLVx36b769ydormzRXTfAyAMjF2pxhTFq",
  "key7": "32vp57T2WQNYfXJ9yq15rhzNPnMJN5fTD12idAvDy26ovF86tp1yBPPK79w1mtjK7ExbsCCe52XSqNMy1izKyUWs",
  "key8": "j1S8KQhQd12cZKXuLeZvJivqH1q2VuC7RTrbStXzAH16JJYGv5X6yDLHuyi8sdurHM1fWuGBPuK1LyQfcYNzuoH",
  "key9": "5J97mFHk7aotjNL4PCbWf8FW7pLXtednXPszG7bfvMZ4i5TS2FwLG1FVjSp3knroWdcupMa2TUL88PCi5f2Y5aK4",
  "key10": "3rwA45CPUZ39PXKbr53TuR6x9bXuDfpn3k5dDwNP8FxiEzk4zGekBHE67NZssaLPPiDMUxqN29mExrk1ffVLBCs",
  "key11": "2jhYki6bUxVQD87MpVUMzrT9pA8xtp1bFnyoBYSNz85j53HzPPGmyozAdgqoXWqz1UVhy3Ec7kr5ETXXKQyUSb1E",
  "key12": "58sySxfAuVMUJhAFEiYAoQKPQMrUYyaV7X2NkMScyZkbjtHm9UxTSq2ze4N682kjXzRcKn9ffgYEv2QEixXdDa1a",
  "key13": "3DC4bTVGuNsdZYAzq9z7qYkL4txTtULoP5jMoczZKf6WkJRTDazreBVwqbZMmdz2Q9WV2iss2cpAGXpxac81NWWH",
  "key14": "YmX5WqyVMsYDKpPWzJaAAUFB5FoEdgicSqFqaLTLtX6HX41mr17iqA6dUZPJBYLevoXA6j5Y2iyFFg8etXDBd5E",
  "key15": "335GHwXa6G1YMA1Y8oqzHrMH5KfhNaZWeXwDDPVnV2hKjGA3K8gsTh29oyF9RM4r5aMohdeUjaK7AvV99b1P1bvL",
  "key16": "5vNWDAwmWp9FsLnUSPSRXR9GhEiLeA3C9cSRMeViZgk5LzKdpZEySDUnNMNgbf9Tq5tgTLghZhRtBDpGRBQqwaVf",
  "key17": "481tLrDmjjhpkmu7y4hfRGiitDbBKrqo4dtWiLecmfBP1m8fScrtVNzULkFb93oXeA6jUqeefCxuVhzy1uJxjXWf",
  "key18": "5fgPfg9YjwxXhrwoErLprDHhmkJ7sP8JQxtYn2UBG5dFFT6GE2F7RucZUdw22nBk3uxwNUh8Q7ox5buQKrgkRfRt",
  "key19": "3m1Yk7Yw9CGaQxbyiCy3PtkZGViww87Z59ewfDDNnb8BdpZB7qsN5YVKJjqq17xVKBNgoxzkMM9cnL7kxG6r8UYE",
  "key20": "49mHTAz1k1QYzcy258YvjoR51DAoo7KZSPo9PRP6LQw6TDSyKWfZaR2dhnNtofJ4NxVno92NBs8wu2NPpAFyUWGd",
  "key21": "cYQm2hox7FSjTk2tdurH69oA9M44gTdLbYC1219HGKx28KuhAm5iqSFV6D5jY96D6MoN4ANCSiSFTZXVjwwvZz6",
  "key22": "5a8yTNtZoWrs5cyh8JDLrhcFHJcKqoqm8bZJ4fb7PFjaNPNBCK3GFgHxRrqoBouZ7Dp7cJCX87f5TkY8bswTYAjh",
  "key23": "RBXf3PUG9iWgydRPgHjfh58eQmJEg38UYorKboRi3K3BuX4YfxQkgXuQ9fxSaBncRxvPfHvJkVF5DQCgZ1EnmJw",
  "key24": "3kjV4bRCDoJmkdnCZuDRpxECRSrDWfyU7J9VaJkoszvEKD4yq3xUB1fR5YM9cNHa5yVr8bewRk4zsvKsSVHx9EJf",
  "key25": "5hHzHeh6R1xUTKbepEQ9FiSijMWXUQmz4pKVzR3CHCjjFYfVQG2XTMnzz3nZShWz9yRMunEZCdR1b9DxpaBjqS4y",
  "key26": "YkM32rrJxjAfVTaqaUrwSscvBGaDtvaexMJeDdZge4dKGtq4psT5M6UM8THwTis1yxYZp1HnDsezp2FrzuTwgHF",
  "key27": "3HsPBp8CHecLPrAbDzAuXqnkRb1qTwRRXfxTXaFBuKtBvNTN5pY4xuT7TtcataDvmMS1E8kqkKX34uJcdgTQtDfD",
  "key28": "5yzKJVxCQVQcwiigU2tpb3Wfx3g8PEE4yvYTLxdKpKRNU1CmQ6t1aznrDgkMbuQ8ekpMZ8wWWvQRKDyuTuZRBG47",
  "key29": "QrdpC4UDLxQkzFYy9onfnZtHvmSrBM4Hg3P2FE4n6Dp45FgwySa2zHnv7rcbNXDHBMMNnDcyUEUp1myJRK6hKX2",
  "key30": "3nMEW2XEF3omWDv2ejjdUT3QRSbQNVocteGA64nHt7zDWomjvu3mX3PSz7dXhGCktC3z9vR4N9PQg54qkdgYmTRw",
  "key31": "t1dTXkssdB8EdFmmre99CS9agGuN7KfdHmZFK1yqQmHbfLG9QwBHBDy4w1y3BQvppyFu3vsW5W3MtyCp6Q9tyR7",
  "key32": "K8kamcwR9TKiSaxsk6HXo2LyNnJQ6JaqTV2FrombMRSw4Jyni2GKwqUEaDbihXxj6K14BwvEK4gCXWCfhyfHoRt",
  "key33": "gav5Xb1yQykGFcK47KNj7HZRNnmnBZgU2r4nzVc14iUR72c47jJ4XiU9DTGS9teEkp7WHqkhwnVa4hfZz3bbATw",
  "key34": "5ZaBXRnCkbkMpX2My1cw6WEFZabUexmfHhzkxQ9bgMWGpqdpFbomPsCADmqE38SDeAZzvRX64E4TcwVh8NNwqSRU",
  "key35": "585tZRG41jizJhYc6r4An6ytefaPQZkzraBrbfssEqZffzVygH3pHCgkx9P6c6c7VXW6PazhHaUasLPGDAMdxBDQ",
  "key36": "5SDzLfxaMSuDsXhBUQZav3W45p8b4YD1qRY4Ph26rsLtz8Q5R8oiTSPv5JcVybTmFSjTQdV7TP9a3gTmVWnfFXQt",
  "key37": "4fKb6zpVvz6EDxBpCPxMCf1tJyjyfwXQTHuE2CdpsPXttYmC35dDfjHM6kSVEnkAvwUKVD2zQDbJx4cyfftjzr33",
  "key38": "3rzFRTmF16Zp2JegofFhLSbKgHyb5zmrDDP8TZW4jtzzggGr6NVvWw2c9uCGWE6Xv47JCZ6mQcTRtoA1TW92reUw",
  "key39": "31S6vuFZ8TKABXerXqPWDnCRtiL9g3jEsnz4M6C3V8MoNuQPZ4QzCLjZZPXGwfnnLB8vceBQFyAkEpvxSTTZX85Q",
  "key40": "4UunAwqM8tUM5hWE61Addh3VC7fwpRvJQRaU5ModNKAMax5E9GJ2yrru59Z33V8gtfVxRfBWskHabGPrr4mDX6Sk",
  "key41": "5JbupL6UqeqZCqHGY5qFaWehz22Hmn7QXfPMxMmkBoLqQqhiHFsVgABxRRhDSp93XjGiKmCwDhrcBLx5qtboFcFJ",
  "key42": "cUPgBaVBKAvXN5LanSdBQtmcAPUetE2Ee4GSnAZ8YzsQjJ6oUrfnQHnhBtbQfEqn1tyPBwjE3zUH4xDY6Lhmmsy",
  "key43": "3x4nE7mUXxKQrJBhtEpPD7KkaENLnjrDZmPLBRcPQUt9jRcddj7BL9Xt77Utyeyf9LN7aEERDneL1rb3pBwD7BTZ",
  "key44": "5VdT4qyzrVrrWUZ8wZGvXf6tDP2qqrJsU1BZjRYyZAsfAX7FydJAuABptkE3YPx9PKqQJcxSGuwSTygnKyRjZE5i",
  "key45": "4m8h9VwxMos8XUDS6bwpFNGfkt1P9u25K7EcQxkLrzC8MCP1Vfgd8fAhjaQzUKLzy6eMBn2FaaMDphorM38PSAkU",
  "key46": "4m7xftiq9pCsPiWoYgDBX4AHVD3EEcZXGuRSZueBN3VHnyPXxrxgpAqoz3ak1rf8rE7CevqJdCsg5EhoGLKQPBAQ",
  "key47": "3Rk3WiKjuyhQCWMTKN2YcKK5cCezTNemCZcpZ2QwRqbbmHJiCY5ARYj1sLXXtmYCAMp3nFQF16i5geVYVMrg4zjR"
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
