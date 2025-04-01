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
    "3ydi3F8EtqXrrkoirQLsxW4zkVaxhZdbYFFsAXJd4RwZiHhvdJzEXq2SyeuAhY5EDwYLvfP2kBcqDBDJs1BKPrWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WPvuENdaPgxhaevjrAwyX2V51m94DZA4m6HFsVVeuaxZttvcyJLGEcrjRKZzGY6U7sdqn14X1dURjYHSzkLUoLg",
  "key1": "2iyncDwAqpY7YDbCfpqUXgcbg73cagFJDXh3bQAEMyGVnptsNSDxJcQz6Ld72GuL8yLCNmpreRL4BGaCYBBUSszL",
  "key2": "3ogBM3rVz29gAYsJaFRu8XCMenk5kmoxqDs3nJjsmAa84P8tSg4rgG5jLMSyf2wUkrkGZ1hjotm6FGFoQxc8Nh6v",
  "key3": "4x4VopVqiB6crmiKzwHU6de5tmdcrun4SuLLqNkVKu29aKmCr5MzXhXnWK8pH6eV2aj5b7NjxtoU5D6uFTGHF1cY",
  "key4": "6414CsUJ4foiUB7PZTT2umQ4NKe9JsCvnasqGK71qf8JMyeBFHsvLZAEMhagdqYCTSJuBMZo3bAiLujQ2coe6ZT5",
  "key5": "4dnCqnGkW3T72z9zJXF4uMiTecSheu9aFy2eHpDhEw8RsWtjAZcksUngm1hPr55AxDfW8xxQHMsvzGVZQ7kZQvEV",
  "key6": "4MF3jZMgVZDa7ePRgugGQpSFeDHjzSVdoBJMzpQ2QeEB1WQncnFqTZSq4vs2B2g9NGYgR7ocnsQYbnrHox1BfCAT",
  "key7": "3R8xbu61Ep91kggY8e6YRzq5RS11J6LG7YTeQq46g2sLQAc38pQ9s59PEY2iBC3cFRv2Lss7pt9BazyBdahEbhvJ",
  "key8": "521NCe1V77BzbQ7phbsCkngdRgCDCXxRqdZu5c3mavvQUdGHGqvcQp2N78k7MjboyM9sGNAVmvqYCtJbTBAC6GZQ",
  "key9": "46DPArQ9McoZBBviHnLeD7pzMz33u2R5HbvcZs8RgZRDZFLHNLwHkxCxxfzAuiJV9GKvKYZQcwin26LvKY3YyGrQ",
  "key10": "3AoPRcJPTJLTQZFqTJPRPrpiihxazRyYzQ6bUa4dQXp2xQY1Si2T4AStLZs2dD2hjjRgDK6XhagUuaMZDptpvet8",
  "key11": "4op79GA9Sw9KDJkPPhT6wBNiZ5LmGhCzhJSwgW3GZocjeZfZrmNMegkjmmijc3YNRKGKPnKpfkep35EWedR4xgRt",
  "key12": "5tXmMkDBRaRUDC3o1a8CzoQkBJMS73ZaJq4fskgGtjTvx4KVkVoehtkRTCGcokBGd7HMKuhYhUPjmG1kq3Eq1UY8",
  "key13": "5UMqCEEpH1n1gs3V3SHwkpKL7fmRj1UkHL4imNHamTDf9bAxLs5xRoTZ9BBirfYPgBEugTAf1dMhGEoFokjUgr5b",
  "key14": "342mW6ZRdkHYeu91Mq3LBvf8XC28vUi46yVndscFEciYi3shQKVGxK1pX3R5jutddscsJpZUiG1afVQcxFNqpqEA",
  "key15": "5JduEgY1sWX1zuePiYP69tJXqT8kLBW9UrDSmpDc6xjBdUpF9uNYzNu8KdJmeph44NMQzP4HhLxdHJG5oBfXBnxA",
  "key16": "678XNRWU8myxBKgLYXM2yaiPHso671RqKdp7YUFjNjQytbaiMcsCK7oioExE8T7w5jCKZSddbYtNQYf7TLgtvj3D",
  "key17": "5F6HzcJDm2TryS3jePABXvJf97LEPhc6ivrhantGjko53QcHwt7d3BjhQNxcZYoPAHE8deqYvvSR6NgiBkZpoyWj",
  "key18": "5mb5iNWmr1Ug5UP1jpV8XrB71ZBg9Eh54aVSDACXh6jdfqUiZvcx7GDRXuVDC1TqHSZSzDE8kMrwpXWcvs6sbstV",
  "key19": "5EnxY85szNNiM1Z7D4rQYmVYy4KbAuygQHhRUg3J5JYZtdEyyjQkxRRjgWKmZcpeQjB2eEi5Q2mcpougzKbRsyyp",
  "key20": "5kzQThCYZEShRaMuVJQiXsJproN1AA4kpe61US6jno8dx2VzJ4P76BqHRebuyAr3iaTSWchKtXFTqhDM41WxTEF2",
  "key21": "5qaL1mxdikCnqetA9qWwZ264hWG9iN7xQyu6R3LmWsQ341wc1zKy4jprRNCiXZcTSsR9HayYuiovFeNaZtonMQjB",
  "key22": "3rW7t7yCoe2erXEH3wtFeYfNfAdfVof6rpPFTxm8t7SXmK8ABbQZeR3mZRShjEcuLC2MGtAkXbn5sXYexobdF4PZ",
  "key23": "48tSRmjYdnRvC2ozNhEvuFhL48eZPSoDaVhKAyFYCtrRLSr7HyQsRhwx2kshkTfqv1zn4cVs7KcLyNkYP8Xb2Bmp",
  "key24": "5zkvav5q3W6w5ZRxVVuQeHwoCoibUWi96TLfZJ2zXeK9MpLEze3CJro5FKemd7tK9Y1rBoGPoZVyztAuh5PdMZJU",
  "key25": "2RrLeZC6hDT8xrdZKyvAqgBNUDnLsUwmmtef1iFyr2jqdL5a3qdzvdHKcd9dAHR1ZAKuTZdqCKtuXru833EpnZ2f",
  "key26": "4XR81vn6sQ82bamjxGVCaKRs6wBJVnUw39MgmhHtmr3ibZToY8yP2ugVNrEhKHUuW7CEkfwsHjDySHHCZF59CyAr",
  "key27": "21xY32otrDhUqfTYsMyEoq4wFjFWsXwSbuBVNweczMtFJ2Kpa5hPjcuVKBzqnt88kgirsv3iJb3kfEFNjBKbvd7B",
  "key28": "2bQhDEzHRbQ5RHiQH8KgEveiP7hPeJ9ERwfYMJe1xZVCuYaMi4yXjyYAhojtTbbUaRPW6thh3cEcct6XgtCHvbiv",
  "key29": "2szSo5F1BBw8QAPUQjeTNXotsxgGJfZeSjAjcTPLg28hhdg7FSF6YtgaaBsoaRwoMkVCaqxE2z9iw7xWKhcqUPe",
  "key30": "57JcJgrykReMBrpQjR8VhVkFVpNxF6gNXTzf2Uo4VkkYzHznR6zk5bGaNEdJB24e67idUkAu94kt32u1HSoQidYH",
  "key31": "4hkJWDtVWTWPMEoivvZ7RAhfFo1MoBUupD8YJDjH8cBkbs42ZuDQWZmCAMJ2hHGcc2Lajz7PX3AcR4mTeMe79sXf",
  "key32": "2Z3KwmvaDgpW6x3JW5XFy6tftZGcn7FdjWe781fbvMv144cPsY5cGo3YV19oBrpwoLjggrNSA8E4hhNzHm9T3WeQ",
  "key33": "3b2QuufVy6ViUsqujr657x44UfvtTHhBtmWKAaepx4ZTSkbVvqr3F5QFsGGqFYUAMZbUTF9e2LVBoyvLTdiD42zn",
  "key34": "2s2s9QPiM2XKYVoduXpaHtGBM399J1t6kHw51SQJT4TGhveWuT7z9NKikJdgk6ucnmh7EH3NGSZrxt8LoYQazDbU",
  "key35": "2aZFDL6zUwywFV4m2JzNMf1m4Cdv7kkZZem4QaR3SRHpkNHD7zGkhMSBjoEBLWspMcPnpCDrioWQiRJ5vtFQKs4b",
  "key36": "23m74mS1mtKFytqVkgbnfS6ixicNQenYcfeunxGpFXncDvG2V3Q9KJxWrv4m4hepRTCktko14GAGQwXnavs5vj2J",
  "key37": "4QFsJkGXxFAc9CMDAHWqzXGx5iyd4HbNDw9usCaLNn2CPZKEA51ERhSeeWpPoNng5ZdEDawjj2TT3Qwy5waP7PCz"
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
