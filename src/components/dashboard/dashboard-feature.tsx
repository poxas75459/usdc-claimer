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
    "24ote77R9XcJXHT1a4YY6m1xEK5CgTynnoNsFAGgjwyZPDaVEVakyhUXVuQ3jv9aXGfoCSBsES3b1HXmGESBgY5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MLtuTGJTAoSAfvVW6UWee587moauBRs1JYAGDWqLcHowbpSmwkmn8yr2xUWkBAEiVsoedGw3WHcmVoLnG6Tdunz",
  "key1": "36Ky1M5j4NXcq9sXWe4X4Cb5ruM9WpokCyAGbrwkG5wHNqirg34hdCt4zT7wnnbdk9K1wvoCj6M1VbgTUpA7gByE",
  "key2": "5ZRDqqddTGnMSVUetrSoEmrUNMNtmXFXWy5DNBge1vZ3ifE7s6n8VeJF1tbELZt9dAUJSRAtUB8iiFbqhsKf4nQL",
  "key3": "N59C9Ve5zemmLzvzWnQWR12qTaERGkwvjokNzvMW79VzYRhs3ZPbtEoCaJ1hFSRiZ1gXcCK7EmxkE5zX6DWUrYT",
  "key4": "2ma8f8Wcw4sE6cGyJzJJhVrWrH8oLS6L7VVmbJgc7UwJTyt63Y1hjTfAD1dwGd1LrqH5voYXjkfDmYD7YnTbN5SD",
  "key5": "5egVg7TdRaRSkEm3zF3YpNhVPsZakVWkMbkqHQp8AhUCzbMKsqP7UqpmEvYYUw8bCLLRnrnpQReEQh7UPXo3aFA4",
  "key6": "3UYmaNNRp2VNJRH1ZrvDPNvTbhNE4WnGXPaszZ8R2sw93couSxXJvWTGMzNjjTGKAeBLJeWdbGLqhkLgivf2h48o",
  "key7": "4X2EFVdohwqz8ZtP7qoEgUvq1e5qRtsW9jvVSmCVDjy3GjhTWMtuHLXXwSn8x8FmZEfvLqQsNtnz1cUpwJ7VYeUX",
  "key8": "EyueyeFAjcMpyQstpphGmSGpZn7KaRS69FSAGoUEotjz9LELQSifZctxSheAJq1dkC5gr3HNBQjzxHSHNtiYScy",
  "key9": "24GhmVyHSxNxhC4AhVQUTGNU4GmKPXCk6LVm5cqXKyW7UEUphYDb6DEGXzCwzv2jJwscjLaeJdcs28qGgzsZCUAU",
  "key10": "2QCsK7iHiQ56xJSvoNuXhf44xyr7FBUpFqJUeWmTQrm7wKdBsbQG3grBq5jSVbAZLF6oHhrr83JVYkdNn9iRkwLm",
  "key11": "5xEnDq8ZAj8cfA4WPpNViotRs9sCPfcYqidqpo8ADAZ7gEZ71osjCotP9HRvb6PxzqqPED7v3Qj2Hs8uQuhRi9su",
  "key12": "4K4NEYPPonjy2Sk3EU27oBgfdts2U8rByzP9k2fEKBEMQ2XxrE83Mw5ZEBTsH1QNV2Zb8HZpkH4aSmpx1Kr4QLjH",
  "key13": "2ybbwwQ3JBB36XWbfjGQAdYqgQTDwnhUsh13ySLi48DQNXMAoQxfEtzDHtLpePQuNwsivkJtfTDskrM4rJEGJxUp",
  "key14": "4kdmVBWZCaDPYwJfqsz93JdSLn37rPFWXTpFboy6qqm1tSZ9ms4FJRpdQTDjMq72PyXGb8TdNKj44anJbsaC3no1",
  "key15": "9bjJTcQiz1ptEjth149BgRQ1pAu73f2YueRRmZfhNVKk3z7MYchHBKB9T1E2enNrzGVLnBi8R8via5uSJyMrmEH",
  "key16": "3MJpsb2MjpeXpg1VXnpQkE5ptq7nFAFChJ89ntB4bS25Jn9FmWExVpYzBFkj5DShdVzkaddrZwqkNDurR6KH7aMf",
  "key17": "5Ei82RhAqyNnMFbW1CD9BtfJthB6Ah2pcduYQSa5DgKZdJ4qMvWMvdeFZUxr14fBKAdp2CR8nnfxemmkEsfMAQwy",
  "key18": "38C1ANVZVTXT4jnjZL4tuvRdtvKBBg6xmVj8NmGoQpkyy7u9XTCXcvaW7fKfPXqeov9aN3UEK9Lv8hUhpDwiUX2p",
  "key19": "5qAM46fZmC82MZ64YKg5GneJrw2Rbfz8SQRHcr5rVATiq2poN7AYnq3Qfs3hY2rx7eyCyNQiz7eP2ma8bz5W9tWu",
  "key20": "mwMgw3vTrsCe6HbzivCW3n693vQHnbx15bZTB4uPWnyqq48g9chy34mDjzLRpJrnJ2cmE9ZroS72P6TAzhini5k",
  "key21": "pBPfKuLEdLX7ux78GBBeUSUdKXreUadEF9KfS2xbSoyMS84jxncMsyGU5UoLNeNSrE2zzCZaJJ4x1XqvA9metD4",
  "key22": "rakq9J6HbFcsLV3NPoBEgaKjNn8vaZKunmj9XW5td65hnP5YnGeZeMcZukvvaPehh9nVzzgBpmrbxn1ANFpxSkJ",
  "key23": "qrYeHPPSULuSidVYFR1vYt547mUGTrfic3dcgyfsX7jSLVaLsEcnSx1mcZuzenTEJyeWMwEgJmPpGR1VA7ZEPhd",
  "key24": "4Rj5cVsFpSrQsVQpQ1bEdsVUHZXTKbdhhV4vSH29cFAvUDTNyskjNzRurXJ2kW7Rxv6jugg43AxqGsaU7wnWJdco",
  "key25": "yMDmrDESaTGThunXBYzzW8GqpRN8PjUB6HRDMWrqHYv2kZEHz1A4ubkjdh7EZTLyRyqgMmuSztoEA9Dgda8DVks",
  "key26": "qKgcHcUGTHpyVar1My2tZxTkck3EYyoA9MDfVNddVX9FENSW2YEubJhwmUKzWcrrzDEsEov3YXgQerhi3qxWLvP",
  "key27": "5uCaJyLoW479rhH4wGT6aK5AniB6i1vG8EKoKwfz1ECUG69fYhYDkMrJqJRQ6JBtniKE8sakXBu1fdvj9swhNwSZ",
  "key28": "ZQkjqPRPXqCTCKXLneSAZbsKRY1XrWwjF1aFpg3hB5z73PFPoFeV2tTdb1AXXuP3LsuFo6SzHhZ6Li8Yt3dvf3s",
  "key29": "652ifSktmCHBzvdJkMdsQVgdbvPSrg8jcjGezb72d3ruiub8ru52jDNPbcugcu4Ttqo2Bz9QmEVswhor5Uz6rMYK",
  "key30": "jVtVY3N8ubachvgD89qcrCZUvah8qME2a7BpAWVnPfGqFwXC8bo6ooN64nYbFjK9rJaZMbcVEbVbVmd4FRiCXAf"
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
