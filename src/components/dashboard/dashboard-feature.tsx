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
    "4WV7MRTGAyZ4nv1K6KvRA5KG4kGyWVXFsFFxKbXWcRiDz2DGkdtZVsB3BDLncjwbuGHgHnpCqJYR143ofoKkUu43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QnDyePhVsnuDaaev2bGZjPzg1Xg2SQsMDNPPZRc57hsCcx7NkFV1MBchJrKyHb1sqS2aY1e1A2DFRaomab8cyQw",
  "key1": "3gC8253Wxy963U2kNWsBgsG3cPTqzwpBAtNDqzDzFZrJuDrxXVvDofTwrbfEUzegcQJWPopzpYVAtHsLFyBLnZkG",
  "key2": "5ZdnAYbNHmhYTv7yJe1kEzQxpCLHwtEjCyVRd2gkSdTjCiDKZkh24X7ronXHw8nShViWzRMkygMRzL5cKABBJdt8",
  "key3": "3deAGhSAxTUo5cDADQPQ4w8SGTYQDYTfBoWRn6EScYqTT3ZYRtGaFuCzDEwqdTYsyb15Ai33fVTTPDjz4L79ceiw",
  "key4": "4YuWna371c2tYRfNseaUT4c7NarB4BaYA2favbp3DCWUKSVpj4FSNejmAr6PunoZLnjUf79bFvfz2yyUo1MnmDZS",
  "key5": "D31xpQci8qMJyqEfK57SnSbuzJJtEx5bpTtmbZZSrT1aMsDqaqWL3FGoqKRh8paYRLnVmKMbEj5JtfvCccF8dez",
  "key6": "5a3wx6kLetjawtFGBYJFQNRqmGh3DyEoSf8bd2LQWwZa5nN7M3X5WFED7WAmBaxoUHkTARX1qvkVRXL8HXkPRuDS",
  "key7": "3qXATzovJfgF6QF7AY2uQ1TwBv9hGvrJqtHAbKaQRxP4HxtBpwTosPgJqjENqYs2ECC6X3mZmFMpABGfEqFVyL5T",
  "key8": "2oWtheJsZfY1MAapXoNEbZ9BEx8m7jRw5cPLmqpSQy9WyGd6xRhcBnX69FnVHoKCtfdD1Lvnd5oR8EZHGXhckhfm",
  "key9": "5qUnAGupv8HA9PNdnYYCK1NhZi2Zt5k7WRfo4LTPztd5tuRakdtwkPh9tvsdKhyqtAshnhtEJ8yHaZi5fSXdomFJ",
  "key10": "2zLkj29ouo4MpxxpFdczV4anhkFBZQijCaRHVqAHMFDVCsUt5v5uSeT5a7aNG51ydu4RPpunDMDDyQbb6hNVuF1A",
  "key11": "3J93wnW46cRc8F4Pgw2bE5JMZn8ceyjXA28BN15Vwt41AbZvgdGtvECNdhBR3AxeWJwEuucwkL7dQu6fFH5wCxqy",
  "key12": "sY9iKz4Mf51xocnWGPkkCCRJaiTcT7qGAcTiJLZpKhVA34QTSSWWrG2mCXW151c2dZbZCuPsrqBRAvpx3meAuLu",
  "key13": "3vuFg2NGjubd77ASFMJgwmc11YwcKvfNk8ww6RjxF7S9D7DUYAWCfpyRSBpQoDfYMoYjnSecnqLzaEupwhwzfhTs",
  "key14": "jbEAnoxV81j8MeMcGZzH6MgiMaRfgXYgUT37S6gXnuQhVfsqBemFHFGZYoFET8jzargWyB9tKFrG7i62Ubfpy9r",
  "key15": "bzTZBG2bei4VzYFaQa9okdzo6au2z9HQ3dnKQBjTmcT8qHGfsb15a9MxicX8fVc2qTrMX9k9CnfWFvhhDFdazME",
  "key16": "C2n4xBD7r9miurhpqwSi3j5TeTXAktJGoefSSDXMBZT8yYrSRsYxHK5F3Db1w46XL8jKf9u1Lx24NtgNgXxFJZt",
  "key17": "2SSU7xYo1SW59pNriudvv85Lj7tTR9uHB542jJJvaWHveWdazdmos7cBePXvvGQfofkieWQzQnhToexLnqKm1mG3",
  "key18": "4ShQXqyQrZDEx2RvcNBXkdWarqEgGWdwUptJEJtasH3g1LobL4Sp7dAt6Nt7gwxUz3tbPJ9dAJ9SWeLs2Nia8c9D",
  "key19": "28F6y6Pir3tUQdz8inSFnsNHxJFm7WjKppCfXjyP1dN5xsdHxVTyGG8K8q2pVDt7YsZiRyKSG1EWCdMD2SfcdpZY",
  "key20": "3K8AXjSCXLpdqiaXW6KHcmF8aPQjge56xmyy9viZMaA9xPnQX3FESPopvNWRHafdSeWpoCCufJ1nZnfzfTHsoRNr",
  "key21": "39tMrHQMkyaQhqneLgpwBYsQka9d7Yqh4sTRWHfzp7oUrSoQFiNoiqDPx2u5jfQw4EzJjsMKVj49k9VVLAWsJyWP",
  "key22": "2hPiN8r1VTBvm6CASmNbTkfqcNE5YPKT2ykNZPT1wysrVugJRX6fTNxjGqpUdreX2NW6V36WQUh8dgpcEEmoSEsH",
  "key23": "64BKZJP6DtaMfqNfJtjGP45aRkNEEvWMmZZunJzyoupAGz1Bi29C7d3oku7g3SP5vDg6NVSJ4x3hHdPRSnexPPYo",
  "key24": "2zDpR2qCpGfnvgymnqTL7Ze8i3Kuv8mz8z8BpcRP4khWi5hQMZjbkAJMEQBAEW2434bD9ocuRDQ5Ay87NLQ9WXQ8",
  "key25": "5cs9CC5eiZczkzFwwq6zrhFfpJHYXVKdmZapJYB6CJENNdkiHndrYHRjmy4xkgEDX1SpjiHVmQyJLQrMixqvfnwZ",
  "key26": "3zrEZSDWXk83hwVeHEbjR8jxRreEMzwJTE3hokZRvzJgRHCytNg7SpkQjvimecBUr2mhbnqn21Kft7JmwQuLA2FF",
  "key27": "3pxr1kX2zpjoUxRejC9EPVUvjiZx441WHecTyTp8vEfLJDSTXsMzxGRKSawAMVByjQ8QHfPiEpADzHUy2HYhau76",
  "key28": "4LS8cCemaxbTke7i7MyjwjXjF1F8j2T16s2jbXycy8RpDwhaBeKM1QFFpiKEu6RLy5HZQYQsBtB7o1nDjUyXbhzT",
  "key29": "3NnDeGkcrUNmxCjLQ83mVDrGCu42t127RPFJbozE1GQAXU6W2k2Se3kUUeyi4Yp85syGiCGgFRWV18QKyBU7v6sG",
  "key30": "2kJ4gNNxdioJAEXZBtvxivXgGEZAgqA9FXM9Sy6ZVD8S5JkWr5mtHTKRDLyjTFuLgW5rdS4jstx5KUfoY4NSxZZw",
  "key31": "5ctEVvw36gfV8cGjmUzho13vV3Q8JyQht5QjF7DwPMuVfRP7xwR4BrL4yPti5JYUty5QBpktdUKq8rjsunHpXtR4",
  "key32": "43BaekKPrkcumtjQdF1DmpbsLGiPm8qnC2MhEbywf7EZx2t3ovCRQUtErZXajyq1NhzgDg4qPdPRDgfYaPAg3WtL",
  "key33": "32vTBTF4ngdoFhLxTx6gU7yFGiWFkfJ4tEzrMowovede4TjKPDwmkrbrXPe2XDSsMzi5Eye8evyf1aoSQR2KtKxj",
  "key34": "5JdUJgrAhvDzFsEYzwJYDQeZHF2f1K4Vh8e8tULqfZYzLzm4oGJVVmrngepP3H6LT68QjSt2rZ8K7MgWHLtiV4Y3",
  "key35": "3en7omhX6weq3K3PtV3VDFnJpC8bGva1LJwr2fP4X6gav9UYqmvT2oyBjARGp2eVxGSJ2XiynPQHDuW5sfrwvLcW",
  "key36": "GWF93nPqrrdbP2dFvzzo5NuZZM3PKqX9wWpZmEWyNTw6wbhqj6LV8aeSXzbig233f2SzE7qWmHoBF7sxcstquts",
  "key37": "5PpeX7KKYTMrFyncjcS2VitWae8hSpYV6KtcnemmSe8mMFekYFi7fYGTv2NVnQmo3qGQmDXYYJJ3gTZK9J5AHsSo",
  "key38": "q6BtjH9iYC9vTZMNCdRBWfYeXKobpeXHXczL4qwwYCUkoKoCjmckodss6RtYhyk3ge6pZFN9s42X1jtKWddi6ab",
  "key39": "3oytS9jfJXbiaxQZ1QxkeR5hC8TgBy1cVTdda9KZkaBuRruPfEZtX6kF1Wr1PKoEr9yGA8xGu3UoRRdVCkvp84dC",
  "key40": "2ZkpTvKyPCfStAWZXQH3GmUUopZnyed7Zpo1PcBazdEtaJgLUrppnUD8MaucTtBqu6c7em2cjnSUtTVQhsTS3q9j",
  "key41": "PVwnV5rYnqW5G6Za5z5hf6jWx9yHeDoFvJ55ZX1yHGmaKAwjTTYEyzFNLPud9n1EJEz1EdLm3fQ8MdpqypbB5BH",
  "key42": "vLJ29vEGnFuPuJJ5tEhAeDzW5fJZC39ZPFNGubJixYBWbAw1t5anN6d6CrNrd9vLWvCGMsKF6bhU32tXm6EfJsi",
  "key43": "3rv6iVyb3d24GSVsWnaDNHKoYBFv7DbAV9vpFc8L2jABqk75FFxeNdAoHK5fcoHFKrU4DmJkGNYYpKciY1peL5cs",
  "key44": "71uqyq7ugneZbNZ4ozuKBE4Kk6GHJz7JpbQujUsX8tjsmDWcFiBiPnfacr5NENG7X5tvc9Tq64ph6BNGgFzZC5f",
  "key45": "4bq8KbEswidYAJrpLjCx2BUWwAfXaFJpSRXaPq5bPP67rTaR5SNc8JY8P1Fc5rwaLQdy1CCywzxrgkXMnuf56wHq",
  "key46": "4QtVzUSb2e2v6zK3EwCdika6NH4QHgt26u4qozLiduWEcuEk3rxSQ4enCYcRyL5rn1UVbnniTm6LT8YmCSiWAwmz"
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
