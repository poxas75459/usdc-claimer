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
    "2ikGkZ8UcrHufKyJDBr83r1bkRXWbtq7VamZZwmUPysfabN3rAhVFfHTrQdCpLmnv6WTZPHz1oVEaVv385S6T9KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjj3SDkPskBtPwyr68KEvysh6Vy1hnUJbVEjzVhBM194kz3jV844TaE6b4CCvMnC93UWiZdb5BXK59eVMAN9M44",
  "key1": "5KrHvFeAC1E9N2zz5ELEWVQZiBtXxrg55hyV7jfuTyLTWCKGQ3RDfsuh1jjj3SvL3PAZZkcparThcSpTHDcRo33d",
  "key2": "5iWNSLtSbCUmw8j2F9nrebQQf7w7Tstj1Z7vPxpjbH1si9C2g8tBaPGvyTRG3faQFufGqUfCEhA1UsFfTjf2i4ca",
  "key3": "67Ef8pbdMJcRXudscaVpT7SHPZgxg3GVYb7FSjmSwJocLtkMcCrczraBz3tzyDdHWFN1KUpr7EZnj89AZjXj7Z4p",
  "key4": "4witBRLGjCUH1QAMVZnoTgTQANxt6H38N3AWXrrNLxsKGvnnkvhtnQ2C69KiG5iWPUzg9RfbDBubCytzufS92Cxv",
  "key5": "3o8gjm4PAEWSEMfyUzY8dxpgtd2rPmfw9t3EwMA4KwgdVfso7ZKTmxvU9RofaxpXvKhM8oD5BiczLB8v52fy8beg",
  "key6": "2TJuG1EKsnsmsXJy47V9rLkdqgVwtjJ1kuRZXQzYRZLhchYDQjGCkho7s46hSrzHz1FKiYYGUj8CbCqoxqFAnDY6",
  "key7": "2aVWLGtpzDwzpsnZyv8rsBZj3aKZfN16pc3noLS4wFpNmtWSZgLHHz7fnQozDfcpYChC6Y8XfcdHKr9FQiEJGi5t",
  "key8": "3CHqJdX17aw199zWCF7e7DrU5WNokZF5fDKyi5KGJV4q3EpzByqAKw9QZUbLPh5MLrRff39TH1VyKNth6cWWTqfp",
  "key9": "2W4VLtzHXnT9rFXRTmtyavoE4AL2PhvfwQPzQyRzrLxPJTLD1GxV7HSVFBwTF4mNNLk22RAFfVuFiqHh2itcUmMT",
  "key10": "5sbqgx527zZa4QN2BBhTqk84WmR5haybakFHuNHEgpWRA6TzfgnvcKPT4TxuDThw8kEsXapW2ebkGDnJGTK5LhL",
  "key11": "4ydKbD3F31SS2nquairbFHj7rzh7tHTBVjaebCYjDNXh7q38XzbkrjcJwt1Vc6vVtAiwDogGx4uJo91aKKJiu32Y",
  "key12": "37G7AhWvyuNBWhZetMy1B1eWxEt6hwHkRqTWYTedMPwg4w8cNQLhxRSWDfzbrwRfqGhfTBoUnTztoBbdLRqFLp9x",
  "key13": "5A6setCUZio1MUmi3z6N4GyCpnozU9W9LYTmowdW3K6tok3PecEqhBc61aqzNaFPVqZKDfeZieHYoa4Z5n6zptrn",
  "key14": "57e8oPmXHfxyrwpNdN2tDS5V91nsyaNXHCZaZyhbpSYpdoyYjTC4aB3CzZXjAzf8nADXC5KMEtXjq9Bu1ZG2QrEA",
  "key15": "3khDsogh7WgvEEQDYEmvNsNsgKcdrGDayGmHRTh2cK9RLKYzwVGkkVQFpz24ZMWvXMdLJJqknt2ShgiZCExVRi8X",
  "key16": "3NFESWKtQm2ab58VAyPGYnMRtdNAoQVMR5KcnLYHEqaMY4BkQvgAjGEBD9io4vVUDT3AGCk3h2dLX2WEdSBekbUo",
  "key17": "2v9vEniRYqeV3WeXagKAKcJimjVcaiPdatAeyV7HXXPSW6u1x1fSnjYGj85a1gh82wpziSKNkx2jSv6XhD25jHk8",
  "key18": "35ca9Yno3x1h5dBCS4ih1W89n3P56Fovf3nUsFfUZS7ZBqFvLBVVKU2Erk9H7qwJ1RhUD9GkZncRLnM5subD5NG5",
  "key19": "vVf5kfZ6AAvBAuV2aRrkChKXV2DFqRanho8SGBGHdaMYfZ8rgaVJtDPindwYHJbUWhtqwufU3FFdSfUDo8NcSev",
  "key20": "e8zvwprhKyC6cMXkb4t5ijU9hWZtj2XXeYiVFAKJPeDM6bSCU61jDgS5XXqU1FBqdcbNDreZaALYxsTb7yMnCb8",
  "key21": "2dQ4fmXE3Cog1eyn4qKxP5u5fAtFcj5x8z6vKTgmM3iUMrXnkTwyBoxpcHLdorj6zXUdRdi27RxUtWC5SqWWxLk4",
  "key22": "rv9KTihZQ7381mkcXBQrFSQbtKkMc3R9h5Pu6AtF4wp9K1W1n8doBT1STPzjGBgRAVEB3mXA8AWpt9E6kVoyfEH",
  "key23": "4mcAg7VhYrTzsgv5NEKLtv1c8hGSU428yqRkx9QqDGMYxLp1JhCwzujQnpUZiaFLg26hUHg9R6U6BGq7HFJ7UX9U",
  "key24": "5YmE3Fcc1mSHULo9uASYDrovtsSciW99ocEn3vyVp3YmW9Yec5GmsYxyUJ2zTUTM51iWhodhcaAAYhbS5QALCiKh",
  "key25": "4PqVPQbxeAik2dp3vmnzGjEN5BaqPx47vVdhNaFx5m8Q2nTnXFQYqmYLTRSX5gm5uu8JRyYUVw4fTJzvErKBmYx8",
  "key26": "61nbmXbmEtj6CgwU9xEH5nsXQyJuxVMfwBdnKWEfNQvpQqHWwpLz6TJk9CMpHz2os28PWW45Pmm6PYWFp9mLDU4u",
  "key27": "4tvpRmtBPCE54N8mAmuXr3NBMHP8khBzjxeuSRCYQ63uA7Rs2Eb12idU8SoL8TdSdUFHoTyDYTWaDnTMA9FxHztV",
  "key28": "4rE8go53Y8ey2C7qEURFiKaJA9zivqQ5LsUbuBAAVA4y1J9QemfMdEzDrrjBt5bwf1gUUWTCyqU8DNvR6djuLfkN",
  "key29": "3HGcgrbudr5msGerDWK1EjZUgaWkgWZjCXESa86w85mCfyf9EVtpRmCpvgSDM1dz6QoEBQbpwpky1mCuqhchuLhY",
  "key30": "3DXBhpnf25QUegRTNeXyyx4uTRBMGkimCJzLzrXJycsAbv9C72E8murCmorwarYjfYcPbzzWXywFMYno6CHwK195",
  "key31": "5jouoHhPCDi2s6NV4seaC7dakmrAGY6wgwSrwpC8EMTbcAsH7ASkqXGU1W46UmULEqRDzLf1R4uZxbiWEZXRBpPe",
  "key32": "3KLqJeDgDk9uNTubScFncXCi83fSAddT5b9EjdTp6rSywcHmaLdkp6zmQa7ryo3hk2PKTnBm2ME9uzYNJbDu4EiG",
  "key33": "5KyjB7JRsWAdR8rmZRkLPjSYFm1iQsJMGEDmXeMbWyp1Rub8H3XMXohS5auz9AGNSTbeuWqEDsjJgFkeX2wmeHtP",
  "key34": "5SPZ43GxXWoDDeg4mVM8PTDumThvBzGKxx3cuFi9tm7PPAj55zSz1q7ikBZSAcJ2TddrMnfGnq5vixuFRktCZi4G",
  "key35": "24F6xwwDuyRNXBXqznomtNwjWzYnYjnp7YufwSzxUNtJkJ24zrTmdyuwD49xhqrfmhKzHuoaKqimW496oqBbcBh4",
  "key36": "Lgz89EbmtKUin7Qj3YZfVuryEycCZPKPXFU1ytkdPd4J7feiG5mA3VqgdpJF6m2gBR5zyrHn8gPixQmvhMH4Whh",
  "key37": "2zsVvL7xEdPaDKXJRT1PTUF8QnnEfq2zQRy7jJ7yZtg8eFn8U5V2DhA6upVJicbZdRSF5ASafDTxKtKqPvo7a2kG",
  "key38": "ac9YECLS5vJswhHFqa82rS9FRzjbm6d73SnLFX8WjVmMuybmJ8r3PYSh9xoGCSnE2TwJq99MRRifHpqy8CzdmVm"
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
