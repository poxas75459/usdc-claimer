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
    "64dKxhudD8Zm7Z9PDK3kvwGWfN6Umq5ZiLtJc5BsCB1yRcAN1csi6YLY4XjvqjRxG3WjzVFKafC5AwTb69ihWfxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49cnvUsw9uNsDv6x1DVX7dCjidJyR2NcYDve5os98gwh2XQwsF6BMizkVv1PcBHvWvHCMYKZYjYRCdJ1agtYKzdX",
  "key1": "5QfeU9YEfrxdZJMPQdZFXVSk2PMvDBZH1kTW2gw52Y9Ukf6yEf6V7Eqi6XdZT7rxWoCunKaRVo9oLAWZYvSS2mHF",
  "key2": "4RTHYQp1vjwtxz2KsVxFpXr3GAjCYj2HyhXRAmbPNq8ehtkPfv4UDhQorj9muKEYJRa2MhGQKg2VErwQTx4chkWg",
  "key3": "4vo9pedXHpAvxPwDMhEE1sccHmEgnTQ5FR7tK9qdybNdw2Gairh6osAR3K2uhaKdYSrKLHDhSHTLENjNXr5xZ7gN",
  "key4": "55bxXDPvaMNz975Eqrqz2Xq8KkFERQ3MKiZhSVpR86pLSBPAEWrdcYzbZ4sycBfDTMvvkVqmoRAB2VshQQTcqhgE",
  "key5": "3JQ5H4fvbvLmUksLhz5uGATfyLw9mtbXXN8HGpMaUBLa2Ysq721agYPMSQqvt9dHrYffS8VQjiJjnu3dZQLTRuC1",
  "key6": "4uVGQFqMUA76c2XDVf6EWubBKJ1fSV2RmAHhVHGHtAPXa8fmQx3PKYMzJ4h9bMQ5aL5GBAHAGSWUxNjZYLYLhqf",
  "key7": "3b7NuLeEC3FMnqCeZXxHUp5VLMjbWbyrBbkCwWaj3akv1HSawuPt2pXSd7T9UbuwW4vPi3wn9uHpw68qyG8Rd1QY",
  "key8": "LZeWS9D7o5G5vxCTdYoaKDrZBwtc1uavXTac73kq37dhZ4jBMxapqmTGap6pEeAXVE6omJoivKQ3GK42xrqZ9JU",
  "key9": "3ikEs5xpwCg3gqX8YgChBGPBy8MMLhjPdCYb13HmUKAQGj1fdVLNtpMfDruJf6UoNrfuwQfVyEeAQA5auAyXQQhm",
  "key10": "5LCZaMZ42F9L4PvZL5Nn9gk7X5y9YtmvGunQ5PRdPtWyeSGHx9WKfQFDaTWRnvDmZyenreGw1iScHxyS4Co5JVN1",
  "key11": "JyJAmozHJPL3ksGjx5iDnkeNb5yXkCNWZ2Mg75FpeqsCDmR1MAPD9vD6LHsjGchCMuq5435ecV9fajUoViBxXLb",
  "key12": "5ok8r6zoyJpZmAvZZGhiDqNEVKMuPjHH5G8pW9MtFJkXMxtWjopB1nRhMDKqAuhS441yw7gtWKxhL4aRkiHqK73Z",
  "key13": "2U1CzXZ5bxpsHDRaknCfgMAFvyYF1TAQckYRK7trikVYHxKUXnT1HtBXWajVFCSHTNQyXrW1UNheku7JXUFuLUzZ",
  "key14": "4T66zy7BJEDXQjTtjdPpd5Uiym3tTtNziKgBUp7xnkibTZkJzubxP6r8EYwD8kj4oubfxykkEZ28YsVaLAHM94LY",
  "key15": "38HwXhA4yAYtpdH7xusT8LU2G6Got37Ct8fqrAQzPjgDgvrnQ6RkmANS8WzhX2sGqJhpTWwi88JoAoubYYRxZ7zN",
  "key16": "3fAvnwVEsFhi78mvkr9Kn4Hxbfa4E4afVTBCSSjQ4uxvneNdtYrPT22ySnKQcgrCmmeS2UofEHXufgJTqUmYp8YG",
  "key17": "62zM9hD6n1HN8TAnJgtDjGSBinpc1UXDqsLd1KBBFoWpvQR9P3Gfsg6GbDCHwueQ8oSnw1uaniLEmmUg9RBeiRq7",
  "key18": "3eox9zR4SBDeXv3FipsH4me51SJvzmWewZFAsgWm165ovhtHTcxuXTUq3MeU9xYAbUSwsdSVMgg6zXS2LNVJYKYp",
  "key19": "5q7EKmKrMm58fAqtRH6a1iuuCT8J4qUEmsV2MkSNyoy4rMUgCF7zHqzmjbZLjNrh3WpjBruq327NzifkjjazQf6a",
  "key20": "3VPMxgacigUQRh3v9EqTDZsp9zDMjLKAzKFbHxYQHgEVFTit7DdzCnzcyFjoXh9Zf3JJJSBW3vqNvSjiKKWgVSCF",
  "key21": "4mjmCErBPpehuz4tf9YBr43qBozPSe5pEQbdWapfLt4NNoFNG1f4r42uFhq6P2DbrFNvEirViqAhNVDmR3L76t8L",
  "key22": "4NTCQUzGSKhKYZJ5HCcFA6Lpi7tgDh9dagFubtVk2YDQrfVo66sgi56pYFduCRgenceuQeS1grWhx9Xtv8MfxWTL",
  "key23": "2m6ocgFy6HKv84sCquVrKMNziwqCiaD4CEhcgDpgR4HSFCxETtyb1g8FG2qFfKk4UdZUSPhWpnqzwQMVp448LYbk",
  "key24": "MpWJ6UKsCt5khKeFTrP7YffCdtezVktxCgYmiLfjeAsZHRJSSH7JaKk4msaRbM8quRk3ZwafttabaMWzrA1sUH6",
  "key25": "Jhy7iKEPKGJBnUtVJT19JLpik97ackEZkEvEweUgt7fsT2UU4gJSST9qbnMQSLjmKh1QSFQWQuYtw2gRzHauTkG",
  "key26": "2JjrNZwV5i5iHHgnCzgp6Yy9mFDCssxEHy9vptySTGvap4MCYCaGUpCq68XtRu3QwgDczSb1DXWLYs7R5V1CHvPk",
  "key27": "655XNVWXmsedY8VVDunwiw3Tmbg8p28tMbWUKTYb5DdnbftDfUz1yMysRKsSWf2YHgTXkzf9PBiFxRea5Z6SCgwq",
  "key28": "29XKyugqoSjyPKeT3Z73YPaLEnzzgUh7AcGbjw7p3jEdeTQ1o9NZAfkgq8pRBch15HqeHjTemDpgDQi8hLpjd9kZ",
  "key29": "5cxFoWNyY6FghyvCYZBjGUHoj8cUX4fvtaBU697nb35sQMXQTZFCWPo2KGUoeE1YBCcBB8hyryD2vZFaTLwTYH1K",
  "key30": "5Chz8V1K2mWMm6d2DACb9AQcFLice7JDbVNXZcCcmfM8eZMMWqGyURWun1wuwaBXxR6cskUef5qDaBvNtBxz4qxY",
  "key31": "4NCiCP9Nxm6CuSt4ZeV56cjWotdAym13jcZYmaqy3N37PqBb8oP3WBraGiNUkFFEKoiFwEx213jqBkcMmTAzhCu5",
  "key32": "4QABAqm5B8u4SH5aHYSgAat3Kq1hMXzRNnUZmC9N4W8deUTGsmjoSwbke53iJGhseobzfLMqjawpjNLd6Pcps5vv",
  "key33": "59iFGab7ELjB17KUmCrUBt8XeDHGzdyaAu71HuFNC2trYR9hc5QvXaEUrbCGD18Bwe4bKAtordKDxUupffVGMpNW"
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
