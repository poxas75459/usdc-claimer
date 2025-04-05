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
    "AchKShB7siYMpiPazsrNUgiCn9yVNCECzNLNpPy5Dq7ZKYYhkCxSvrp1qtymV7R7Y1F9q623LxQK2ANo3tTxg7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Y6uueJP9KmASEkX3DJjjXbjHwj56iSRaWaMZo93ihpno1CmJ1G1uGJQMnyEtBPUPzvULm9VveniHEYfCL9XPdj",
  "key1": "55EHfkqvSFabT84yG7RiPaan9YNT8hxziBxetSHcQyp7hTSsjw5P6zQgfpbTmKDQxhNGVDPfEJeKzdaUAyYovhNj",
  "key2": "4ZaQ7nBSje9jVbGkakb8KAhFBLQDLsCgSRXVfw9Q82FDu63Kh9tu3sfhKTR3jSCFeHPcHoSseEhBibYKfj8maDS6",
  "key3": "3NbfbX75Y4BJr5QccikJy5HSzz1hP9KibEHqPNgSPudMpj7hc3MuNdkBrwJMcNxxHfxgTKkCfeKWDuzfwbbBunuS",
  "key4": "2wmvNdMJVsapkqZjYsUWUTUk8dFd1R5vpQXQH5umGoeXmGkBV4YwtRQry33k3jum8UdnBjvV573Wmcp2jYg4nPRM",
  "key5": "4eFaosC1m9MXBQjStvbGtjSpNc1WXGWzVXU7Dg5JV7e8AwH9asPdhqYiNptnEfkoLWugd3wAZ1n1rKfwzsH1GMFL",
  "key6": "2zLH1Usb3Xg3M8r8F75ThzD3VAvnxskCdqqFSQ9yHTBrHz7WjXWWDLtY4MvUQpyqS6UBh8UFYiEyBvQEs2WZx8Aj",
  "key7": "51qwLJSjB9Gw6CPU5fhjDDMuaxRZcGuYT7pwHrdWQVZB8XGBqHy1qrevvMUUvpLynuKNHeAHXPYbSeFXzZtq9ZHZ",
  "key8": "61oyRcGxnJtRispSAigLerT9qYf4kM7QdEhVZ8zGSJpf6vjxYYcULrMVsrEJzP926QEjP3zcGn9bkC9rwkJmnLCL",
  "key9": "5cWdrYymVa8RSn9UPcEGqwCAo4uT5of8Uf47kwiQxriVpuk7eEgYk4cLCoUEaTW2UFPqhyZfjVtJcFNex46B6qz6",
  "key10": "2XrKqe6xEZ6gfi8ce1nqisjL1fTWDWLm1w7pa9iJYG2Hktb5dec7RYkwM7ZRZe4thownnyETBfXcgNPY381xpv9j",
  "key11": "2BaoA4kJccMgJC91mh2tQL3bbEQsrwiPB7mQ4ukXfgRff7fnnoX9xU8vdtbHNQywVey5NCmJ5Tv8muAuwJUMCeX2",
  "key12": "43xoYwHH4r2z2RUhRyTFhTbUi3FuhQ5VNpgqtzokrXyapLdCoPrVDjwxK6fDAxbWuVVKXyKDLU9GKe3c1HkVtXED",
  "key13": "3ZRAabp19SM3MFPY6vW3a2XDkotompfXXsSpMtBGrfYYuFcUCoT6kEvjNri6dDHeeibxttdF9NTiozuQquPtPgbT",
  "key14": "4Z3xyuEY7SLwzhkqDNdNGkwQ366P1CeikEqndqLkCWTLLEPjGaYas56bsZAunUuhBwvcUqGf1xoVaXqXiQNog2AD",
  "key15": "Eq7Tvcq3Qsq95WHB4TekwWKhAxzgPFDwmSkPFFagATagD1KNUmCZMrBVfUKdWzD9Mgsiy6s5BMcTJoKLteBk1qS",
  "key16": "xP3NtUh5n13JVGej21YgDktCcRFkWCYVov7xMqqM6PWMVbPJcWA1jiWxzPDmEG5oX5wjbcCSwPT6zN9tsmvv9Kq",
  "key17": "3wY1THsuVVNxJLjxNpwMo7zDV5u41UZJkxXhjmXiUv4rKa12gxXtThEEJXPUtuKAyuDmWGwtGpeKtqXGxam68GFw",
  "key18": "29WNRJeSAPjdpNuSVDiupQay2WqJnR45mj1EsdpXxxbGKdB4bXHxchveqevM51CkYK23h1r8ez6mnVKxNeDrhX58",
  "key19": "2waKh33GgFwgn1uhtCfaK5R4MBGgRrNizE3JAyN5W1mxncS1XqA4V1z6UW7KFN3sYZx4LbtW6eBhA9r1tnbv6ZH4",
  "key20": "5UzhHiBKJdTD4EdrLGgavWC2B8UdQMKrtwPYBagMP8E7jC9q1NVsXJuV3mBD2gArMfYsMvAx8qLNzGboums5PnNx",
  "key21": "5B32Neas3BZ8L7TY5nACUCSfdKGMAowqKdX4vZwWz3wA76BF4TQQP8nXYhKrpZmmHRbtqhqK5stPUM7yGRNifPdb",
  "key22": "Dpo2ffgzA7Ry8yADU8TFuWW18qrpiSyGZBMQeb3XVqdcHQUNEEo8yioKXvZQQXvkg5h7z8snmHENVg7PVjFj6z3",
  "key23": "27V3oeCPuWxsEsYsP43TA5Q98oFtLWxPLL2V1fjhk7iDcMoy2TkAzEY15Y4Yev2c9mmdZ4BGKK8cqZDr7N5dDjVm",
  "key24": "5cQCkSUHyXyrteWE52dGkS3TtwDEvDyVFpagoHFqh8uSVdmb7Xf6rqe5SCFDGp6gZGGaSHh1YtLyk4kV76Kbyz26",
  "key25": "5YALiBT3pzrkHcQHJBXsbjhnxqoEr8gqzxw7T3ipd5XngMXaEVWK2SgbGxLHhk63MABCvKVRHVaj88tcz8KYkmJa",
  "key26": "5otBhzbcUPp6yySff6gNo7TnNePvtjKq26F6XwDbhcsU9stqYRoGh8vogqxbv4YYFr5ytNYARFUU1aqrNGzucm9T",
  "key27": "54PgXvbMe7qMCPvG4D1K7sDQu2b9maaqnCF1Sc5m2zduZFivjh5S6F1gHs8uPDSWBGrxkX4mZ2gdL1vuYo4CTWL9",
  "key28": "4QsYfEkeb2QKco5sxBhUjtXy7huUUgARRvSbyz8K692TLoVbw2m8vb9BKrLtTsN6HGoPUSq4RfYCyjGz2VbgxKtJ",
  "key29": "35yDSx9sp2sivqyaUos4MfeLJBJNn47QzDFsUcF8fw8tMhgsUB2HrXGyGQzt6KVLGTJfn5ZC3U8nh5nkjMGhnPkk",
  "key30": "PhfVMDAh16iJqJtY7P7ntg7Qh6Ga3fcMVGGBBvhTYXLZBwExff35fPCMfDhZLT4o1NMjUHSSgPULsNQzeXANYZ4",
  "key31": "5bVoW7fYchFa4Qc7EHNZzHJcrdfHmySjtHTEaEbyNjtH6AFGteYtQrD8hwfkjzEv5a82wqFjPQfQDwkRFxpWEbwY",
  "key32": "2FKnZipmjfuVQxJy6RNgiePRmrQtvp3WWCdgCtJhumkErfRMBxUJxK5TkbAGDEeG5qhTL2hjsus73t9GhjxPP8GE",
  "key33": "3gKgQVJfpAQfc944iuCND56pVdE3xWnMgNT7R8ZA5cD2GaXzwrTyC3zjp1sB4cgUrCeigkbzDYsmLHDHHDzcTF8z",
  "key34": "5a2y4qwhL6y49xUTmYay2fkKNkAnBsVFTycwYDXkpG3ognQPXuSnAycNcBjJcJ2q5Yegmu2jYbmo9viycn6hN3Sm",
  "key35": "yKaZhUCT1GET6GrC9jSfqz9MVVULVPbwV8jHcz8bzZdkBQTTbMFjoooAPzTe6FpgTUzbUycaaTGypzPeGcxm9X9",
  "key36": "2VP7otCgMxjGSJTd1Rfa3DQA4QfyemP14CT9U2FAB9nRzS5HwZJPDjK3chmDuQLqfVe1yDnxHSkfMCvEQrhhEwgK",
  "key37": "5VVmEVZj37pinCZvCsVfmUfCuKhrnUaGi2KaUXryqrC8nt2xgZQAYviAc9PWxxypBpprWGeBddCCspfeeg7xuuqN"
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
