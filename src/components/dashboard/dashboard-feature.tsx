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
    "33F14vP16WGYGBJXYd3UBY31s4martCgQyqtz2ywWNFSeNSKeag2zm1ydPhV89xcDV93xZVEJtAWkQJCWJ93xLWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wr98j1X2cUTPEytJUVTadLqdHf6Msa25usCMYU2XWoGGBzs5xXJcnbYmaUGkLrGo1H2UpzVCQUWUy3qovie96RC",
  "key1": "54eJCdt5BVkCG3GxZXL5ZHgdCC5NVmtcBNqedPetomUiuwSHxfne4tvLB13w2XfQh8nWpNn5NY8SFuTKhXvBBjy",
  "key2": "5MGsABkPqLXLZUyNuFiBda48sYG15kjwL7LkJAKg9czMpAAbphNY2PwxVuERk2E47qKRMVPu6Yy4xEbf1B59HmU1",
  "key3": "3P89wTLmPxvL3EqUnyTuLRaUjmJeHpuk2hCE8WiwqjTpoMQ728k7tLUg9noCjFaNUk9Z3mqM5fi5VsPWYnXE2FuC",
  "key4": "37pmTDw12CJgPAH5qfxQ6NRwGqWDUsJoUQWHSbdf5b2XHM4bRcWCCkgeAjPZR5e4zCxYzCzBTVg9a7Tmjgc9k2Yy",
  "key5": "3YVV2Bu5BLeLv6cU86x9A8RWreUgs1z7sJnTp19HUYEGyNZmNp9J4x6415SZQ3ya5J8CGT4mkiuHnZRKJTTAfLyw",
  "key6": "4nhg11iG1VLm8nZEEVvZYkimiR4KjgTQrJUBuoxM8MN6MKdsvEhJUeWXRwBpV6qpSDJAnkhDRGBVkFUJawJUXKq7",
  "key7": "4KLXaCRgTmvDWRvRp4VJ3XQ5uPHLTjYJpVP2QwWLjB2sZBoyw1jyn7jgvaxDjUfJXykaCo2TRJifBW52AnbMLqk",
  "key8": "5ZXocmJmJ3UrmRyTcYqgxhjWwnPTonrM7fS9DjfpnXuEuVC1SPFaHGvcYXx4XAeceCi2R4tk22sSKMezRFAycqot",
  "key9": "4VPVyXY5woNCeXYJaS3fw1283Hmsxi37R2b56BKfnsShiKUX9jSSQ29AnKq8iXd98P6cR8Qptdqc8ESNn3SSXXVh",
  "key10": "2xXqRyWU8EMXuDwXdRdEYxybjfv6v9VHotDfGaryiDjvgXFSnTmiVhZG2aeKdYifBFpizan1p8qhLWjTSPQSp5Zv",
  "key11": "5vkTCTrWMhTHRnyGgGTLcEoqzyaFjGhrpuQrV4Nj1H9DULaF3XQkg3pEHK9EaVWjkagEvY9HtDwrSuJHzv1UNbAT",
  "key12": "5DxhSyTaSr4aAV82EpsudCPuLFtRvsoSy8feRt23mU2yGcxK88tcTXoG1EU6CaadjknVccfuFjYma3qJyTnAy6iD",
  "key13": "rGYTLtEURwh3oJhNE1kwvkNTR7okcKuiW9YzBtSvpXkwB76rny8hntcncPSnYyidmQLzqbNTaeoC4SK5zKnV2Ht",
  "key14": "29M58E11uTJWJzCWjwtdVvoSzSaNcTWtTz1wERx1dXUGYwWzjvfKJ6qC4StYrvtmvVp8AchwVGgdcFjzA8nXVNqK",
  "key15": "4NrAVVzEVwcDzBfXjgyE8DdVNLa4XkE6rTJGjNjJoZgVDBQ6iQswBSfnpH6MLP3j8KM2JGf6EHMhoK87ZFU8AG9P",
  "key16": "TKqJbtRL2uZLuGZQndnL7WBZDMohXrSeJiDDvV85tkXVGMa2TTauf5rWVvopsfHEGxuika3wHsNRr3HoGd4R3aq",
  "key17": "65nUzRfnoDMQMrECXjtbbJygAPcG5gsbxdUmDCSujaHobV9fSW5G1tHq9C2aagsUv2saq2AkLgNU5hRmkqxEedCq",
  "key18": "4NfGPdftYUMz7XRbmnCfqH7GLYs31aTKxvphqXqEK6o7BkPGhTbHzXQzmaPsMoVKXVKQhVzzFYhyunzcKD6cGnPa",
  "key19": "2adj6sURWAfxN4P9JGCXTZ9T6omxegTqJZNw9WUqCZPWqzNXMpoA6cDYPJ7ikV6Lp99ePQtCtxPTcsuewBBkqsMi",
  "key20": "2SSiaesDeiroj9nZCcP9b23JrVs15x44v7NZDQQepQAnHFz79cg1CE7eC3ZXE35PRX3sU74fAqXwLDe5dx2x2UvH",
  "key21": "61y6egrPpFtMz3ZBSdgT5naAvPhZKECf38ZjqkBeiH1CBix4E55DbiRrMY3kx8vkmx5hrc5AYNceGZF4EdJUeg3d",
  "key22": "9xWDK4Sc6NpRyELfZagU7WSr5i45Sjj9XgLzz7oQ74DQCF4GbYnyLYYmQiRvhMheenDg7RnJoqTMMrmTYJVckvV",
  "key23": "ojnAtKwfZuQ21mo8jGX9SVDXS69TmTo7Qo4gkfcAxrAGRk1ReenZZ7BYuE4vvfVfkzRfQDb1rny12cbxUkaTi7x",
  "key24": "WJiRvGpn9UMyQNePeXxwgdg3EizMJzawJs2ZKmNw6fZto7nNAk8mueb8Q5HdBRhA3taj3ZpCadwWvPeFkc27sRH",
  "key25": "58UvzRxExg4BfxK2Njy1NeLacqNQXyVEnrD9u3ohh1sf8L4QC986kbJ8xVYCfpzgBxTcCmiA9Gg78L1xecmhgMZL",
  "key26": "5CPiZqtXM57tPMobY2Wq7rdZSM5MwY7CbUKYYQDdUCS8x93JCxcuUVSsskUeVgYakjK5sZvDFrysnTpCCETo5fmj",
  "key27": "5gaovUH13dmD1ueqQSpSPgEZezkw5gPpV6ctoJPXVzDUd1MnT3oKMEP6m91U9Wx6U4bZyv6sa6hkq5Lrk4v3DLPS",
  "key28": "5d8PWRZeQQXVexP4AsPe4MfrS41b84ar7h2SKdiyDk41hF9BqgDfx8aiYxkkG1NKSccirgeDLkdzktFaevxTVMNn",
  "key29": "4kzQ29pmwaEonSwKV9M1pondpfh8QjJjV4A8Ues72pbofMVcoRnHFzgV9LspkriKEE4FfuDkrjoyf9m1DjacXN5h",
  "key30": "94ccV3VWm5bsuM64cQ3ATMNgLPNCnFwqjw3EJJmgbvz6vZ1ecfSGNpzZDaVQ7JbMMj858drQzU3FAYU1nYz1kuP",
  "key31": "4jTeGWCmgJ8gn4pL72YGBBoMXqcoySd9Fx6GZMHnYajemCqsrTApCRfqs6uLv28vxaMNxmKT1rFnGv4UV9PyKUGK",
  "key32": "5Zx4Vq755fyZTVF37qnHpaxChBiXC139VnKFjTgRaevjNx4QVpJoDSqyUZY4wAv6ccYrMpGWQwfiUS3HDunrNsxN",
  "key33": "p4kfL1T9LkuuMN1LHUJLkkknTnmq4auFPRTzoh5LN76jvhJVtdoaMJDNdiz117A3PGEGijULBkiXH8YzGcFjzh4",
  "key34": "N3wjcZXdR82eJDhdnSiHY2qpbZpaStWWbjvdYdjS1ycFz4cQ9h3wqVYKsuYw8esQdoBPaWGSJGq4YFFWkkncLYF"
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
