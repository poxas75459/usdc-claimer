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
    "2LWLjpM7MKLsHYFgVjBK7hSfkGe5stmrb4ED4qoxA2ffDkDf8ZNMSiZLqJVaDjTF6ohejaRiEfn2Ey5WZT5FoUFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FPCyAqRqatmFs2jGXbnRnqZHgmPPc9t1nR6Rma7Xdk4niG6JnoqFninKLXnqwHZJEdL1f4rq9qKCfoGaAzMPP3f",
  "key1": "eB5tqDwhqv1btkxpd5hndeLB8SfnZp9tmwSjRHeYFNfTjzWytgqW4AXdxSHuHjLtvgZzpfkDfGT3VeVCF2qAXNt",
  "key2": "c2MdUvCURPwsSgfmn5R2iPAovjgkSdsxvFaZnYSVvpjKQLSyE6y2wtVDMrj8vsWwYXoVEMh2uo4j4cdwRZSWELo",
  "key3": "3qHEmjkzsW7dXYsRvPtTZ6nxMWtzWqgVFLz56jyhKfHwDBAx1vs38KY1vp912SFv5HMsMaJanomAb68r3QwzX8Xf",
  "key4": "5JQCWmJxWutfiaGshzKGBTaNP1GQgGXFyVRAAnBrHmHyes2wD871yHaLdEKrkQrQ1Vk4YP4ZX1AJw7iXMcP4STmH",
  "key5": "29Kd4PV4Wbkz2yTYcsQkufnpawnTbNiycDeCcWccFkvUpcX4GwTwfaseJyfB3SHFCFAbthZoU5qNb8fJJQTNbZwh",
  "key6": "5Nsz1egShc3zeasqiWNjt3nHFMZ9dqd1A3eVcxUtnGRsTPWQKR26WMgZTcu31A5KEdutqBYRa3cgNQGGsxiDMzES",
  "key7": "4sTGKU2xqSBU85rDTLDTzEfr3E9AqxFLjP5Zb85Q12AsGNaF2Krw4g4fGf8FgzDTNYhC9Mvj2UMDKzUxn54qHNbY",
  "key8": "3LBMdxB68GCjnontNdGbYjhkS9LBkXDAaV8JEFCNTJeDQKr1odop2fjYubM7QA9nbpGcofhBDEyaymjaD73rXjuU",
  "key9": "4yinYqmZiZsfmztWhoLCoct2BQyxg8j133yEZsNRF1crFPVQ6yTcBLxHqWUXu5sGxBkcH9qysptsKbEV1vurpmDX",
  "key10": "4ZzYSdZ3sSgRKXbfqLTHDoERHomwLB5YL4NtgPHnQbmJ5dLFVEAh5yfZK2YWXpUNbRrYjqa94Dch3yKU4u8GwMs3",
  "key11": "b18CMYTLbJuoFr4ihGHYjSmbeJkBxhWHpqokQfoNkGNBeQEMenkZ7LRv5FH97WXtfQSJn7Q53QHb6h4B1oX4R7g",
  "key12": "3o7ixp2sMQfM6g2GnWHEnZkyJpod5K1b1Yyt82kz84iFu4pSzecxPpJJUU4L4HmPeXJwjjXCLwULNscqCpovfwvu",
  "key13": "3DqU16u3byr8z27yEQ6fgcNUDQQJSQqzWcv7gYQYsBJ51ivyaqZFEQcmkvsnXEqbFHeWEdCecZ38X3NovYPL3wBC",
  "key14": "3v5hEvFvWuiEGHPwNrgsmFfuj9oXxuDft74RHBm4P26SXSHs3dJfd6nWgKAPLrK8deg2f8iNbUa5ad9St8bCrKen",
  "key15": "5mciT8Xr6iXPVfqRq1Nu5ZPdjv2RdugfmgcDDjo9TPnso37JJFWbVnT5wVDNYFjyzNQPcyxX9bJTUiE4HUnCnjMK",
  "key16": "1wZorgKaaHFRrA7sk7FWnxP6RixWZMp7NHtWBQ5Jt9ip83Cd5YPFTLAeLUKSgyttU63t1tREFaiwxNU6t7qpfaY",
  "key17": "3BaeLFmqDK4dHHenRfSPxa2zMMsWHu2Tvq7XFbdLmvT4FD7Y4psgJyKC5xHcHA7c5Tpd9kjbirSvXpDvziuDzpnm",
  "key18": "PwTmzdYAcqtmANM1v4o4SW5V5Buf9XjnwimrzM9YfrBUecZjT8MsSaEoaUx9cXZJtrKwuHhD4e5P1whnQ2QwtFg",
  "key19": "4Wh4pZHS3f2kMfKNipxjcFn9k7s1PZDfqwKceVT6ma1VyZBmLt8jhKNNdYJm2VaMLYthSa6zmiS4WybUbP3iJaBS",
  "key20": "2c8JkH8JouQSYGcX85EDvW9XhZFnGcN36Q3HDCbcsbQxh3oCsbhWRR3T3Yu6XnD1sx2RuTisb73WXCy2am4KXZsX",
  "key21": "2oU1A24it2HrEo7VHxrEj71Q165uU7yqHvWjBZexfFrePeuU54hyG4DRQKMPytGNdQ4VKK7VSopCHiHcEwN9nNaG",
  "key22": "bkjxDYbJKtFAN7nPfL898k8jfVWG5j9KDwFXwHeXL6ijBi1MnbDyGonFUkyVjErNrK5SntEUvAmS6au6kE5Pwai",
  "key23": "53KrmYXRkMuYRbstyGf9FyjNMbutZmS8ntUaPeGm4oChNLV19j2hsLNAxR3ozEcNKxLdSJ9WnFLqvqPpNXUbnQCo",
  "key24": "541Axd4tWEp72TYLLkH3Xozb4CdQaDBNLYJTXGBPUdXTX68BiCMF3UiTpXdPcjhTTB1p1XhACS8CQRiypsESAUBU",
  "key25": "4aqA49S22f7pwGbmceNU6LXBnzZMUsH62SsWKvGWLV4WEMndp1Kb27QLttWTmYhimTt5HdT1jWdumatpAbuk3mCN",
  "key26": "2BJEz9TdVm8RCKjsytpzGwNj31oUK9GnW5VokX3DgcFsEmi8VyRLzaV6t2DaZykHU435dYNnZVunQ89NWpiSv2qX",
  "key27": "5S6aLv5psRBeKwYyBWsa1emDZGN32zJriATL5TrgT8pgTD16cfZmDTuz4SRBHBZD2kqXFEQUELWVkYyyBsDS73aA",
  "key28": "4R7YxMxeKaHhmrxzVND9UZd3YgYFsoRMLNzWAUMdwcfrKbwRy28C4bj42JaZvQoHzbZYndjyeHGDCnTTgAYdw7q2",
  "key29": "52N8VVuEGuWPQbf8L7HCRKhucLijZMM3NwubG2hHZmMEZc5TPvDyhQ1BYJqAACJ3PxSxhihbBhAfyoxUF7utm2fS",
  "key30": "HBKKDKBoueiy35fzcPTHjMw9teNZN1nknjr2c9K2UPTqYLPCFe6qJsEHoWLHuT5pzir8CP76cGTqtxge5Ld1qSm"
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
