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
    "3gH7BcwG9ZLMtk9DaEaZtkowFYMeuV9doTGEqkDbyhGbuueiBSJYiDnBA9XWiSzmCRtyiSKTCK53RqSWBhZEXTUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eJuSzDVwd9LLmniBUgUoyjo4XYwytq8HEuuj7c9WKwXh2gcfEiR12hVYRbb5Fbe3pn6DZr61F9Q9Q6KPR9hQLfC",
  "key1": "4J43Pk66fjTv1zSt3vQqKsc8BYxXm7w2tq3VyoQk1jbjRVEx6NcTJjUThZykiEF2xUkrg3dPwS9JKKySc1CKnNv5",
  "key2": "4AWbd9oQUakxnjxVYkismXFQ4FZKi3Us6iNes2awQmhjFGLQEgtwjzqSrqbshN3HjzsancRxZdWrkNHNqLFSvMry",
  "key3": "3E1rRjEvixKHLwEZRAu9FnJXURZdGqWEJuyGL31sdoXpgfG5bAkEsANCTEt86ksNzWKv3f5HofFoLKMP6fMinD6c",
  "key4": "41aZfD9KgaFmTCcTH9dn2wo7TMP2UyjdmphZs4Dhu2u5E9KAFyphH8S3NoPXYYUJFJzLy42TgD57Bd5N2dbXuknp",
  "key5": "5xMfypTtLrwyYdcK3C37XWijKoRqobEr4RNXkK4qt4JX4o2L58H8Vi3Agubbn87EuL4drzQKgQV16ENuzMLyAsz6",
  "key6": "5dGrzF4GUQTU8RUYLpKR4VRgkWWwHFZqVyXjZkLwyNau1ebfVWggbQCQEiGKvgfPqbTVquA7ynGL5o6MzkG1HtNE",
  "key7": "29tS7azvscCmFgxpTwgXEGvK6HyzPxHvP47oCTRynYaDodZ1jz7nSZ3Mgpe5KyhBZh8EFpVY2vcqQcvk2DYSsVwU",
  "key8": "3GoVHijfNMhftd8Er1QtSB5f8xYAhc6sSNsd6WSSShnPyMLUKCmbtRE2CPQTw5TfqS1m9EVZT2rSnyvi4i1eKp4v",
  "key9": "2d9ifyWrWVWzGWE1AfmG1jCrAf6qcMD2gi7Kt9WRSW2CRDzy1mCGJA5hMAASVAgnNomp89ptEzXA92yvuJmV6yre",
  "key10": "2od5mvgbmPGrRf5LRCLuk3BVfkCkwUjaLscgfzQUALKnHA94RkkUzBAp1hXNor2oW5xZFf72NGQgH4kdT8Pz6WMB",
  "key11": "5io5TNMGRZpgt5Hgk4XpnLsgSby1BoeDft5L5rg7vYo5sMpGseZ76SA6WQcZJQAojeUjNSniVboTM2JzxF5DJi6B",
  "key12": "5onEkd6BHeD2Qfekj9qxMtSCnFWiu1f7JyGtafKmK6o8E4oSFi1ydngB3ztNp9Pm6xMDpB4xAFa3iA5uZACwRycJ",
  "key13": "3iVcjHPDsw4MFQjbo5Yae1sRwr7CSotHN9nKAkh2JmiUEKqQyUsGvqiuzrXV24UDa5nnGDP1FDMHDFWeBoi63atY",
  "key14": "2C14cAbRpZVFeF2gsCF3jTkHU41bqvGzm2A4twhtwPgWgru7b6s2DEQxDA7F4tKKVYw5bSQChhZhcwEH7oZE7abn",
  "key15": "34VSiyun2BnRsRuxFahxBRz1Kifc5YNtFyxopiSAAbJnnCTVo4fj1oXiih8y9VzmuwcLvoYDCyuzXaETEq6vHiaQ",
  "key16": "5BDjVJebpWAehgiSxYCncCBQ2ZJCQYjM1btZ1mfxGabfVGZVYHaXqEA38vmSbTNEREmBBKD3AGGb4uBuPLpkM2FH",
  "key17": "4AeoKaFR1cLtPMQ4SFChZokYxeCKDG2avhTPBYiuMDqW7iJjd3d8E1QJ6j5P2Sb2puAaYyta5hC6jSs5wRGFCxyC",
  "key18": "28BSX48YXnUYsrj5k1J5o7bULqf2DSsKmy8vFnE8HGgUBoqNqToYBmVwMU72UbcJd67h7DA3B3DbdzjvZkLf2N6R",
  "key19": "iGxnf4JqmaLzHdhHEGdCXNxfehge33gZ78uXwnuu7f3cFtzTBLqHCx2iH2zREjBwnknCE2ruG42SWkHZjnj3x1M",
  "key20": "2RiDdN5cBn6iXMFZYHCCMHcXRCuechUV3jdauaYvWtP7F9J7qjNZk5DUHX9iNVkwF7E2sdewTsbqXCQkDzACpabv",
  "key21": "41oYCJ4reTE2jzkMPH5DzMSAn9XthzTzsbU8YCbuH4RrSUnPW9jKwtyCiy4GNddprzFX2YeEXxEdHWTeMgSMGwr6",
  "key22": "4H2ZPNwYeduFrbNDisYNKeFvBgAreZdJYyMHsNQGfXhkRtTRfMF1jaVCx8uRoPA9Ztddk64y94Swai4gKiaYfZq6",
  "key23": "61c7PKZMapwvsFeGBHggxgwxqGsvU1YVVQjYEp6cNqB4VjrnEYb5QZFxHaxnLzUc3ddTgqkUFdsSpjAukmAsFKdc",
  "key24": "3q9n9T3CuguNFiV3Dtch1kHn9Vi5XnpRBdYFooxCfei9MvhLrtQmaQiWkvVAQwLWg8NiFnKocdWtpsmprtitvfyS",
  "key25": "23x5PY4asaN8r7hV47KfEVGQsSED67x9CQw5mETMoEdov3LT2zddjCNVBP5qRtpc4hVaNjCtZGuFuTwy33fAaL9Q",
  "key26": "3V2gLh4hLuZhYVLsip4cS8DLfvNXPfQS1FHWdffDQjY4KUNJvyP2aBYTiLjwsmy6AFEveQC66jGSSFm1HHofR6rt",
  "key27": "5v6cHn5S38czp3P1adLAiU6Fh2trJNcVst21WtPPAwB3JybusnXdXKP9xQwXZ7oL8CbRToGS4VsFL4nv6C7sfTFF",
  "key28": "66RBJUJUfznpcarcTy9spDrnhv4wgmJBMVmRYycBMCWQX8nMD9HvBqaqfVR5Xtctq3eRp9FfTEg69xumoQ9141K8",
  "key29": "5rbznQNWrgzWL5BgRTWAuyeY2sfTn8Nj3MJXk94fEuZ9sa1t3RSHXGSBZ9sdN13y9r1oKd6oXwWuYr3cA7GMAaak",
  "key30": "3jQP2nWmEByANX6cwSqmnwraNsmiPiqJcRApFdhgznC8Z2W4rUVmL1mDVWBMAgmPXhzyCKg3MZXneeEKZcSnTtCv",
  "key31": "26CX7N84sotBE2afDCZ4ssKi4ZDeoJjSttvH6XCSoJRFgEjryGqvJL7R6NQcK5oTx7f4RnmNL3ptPPjryrwC23gN",
  "key32": "2Ynnysr323XKArqHfoefzWDJDFR7H82QbLe5dKVfWpitL2s1vaKUGSZutLQ9tpxNmFohnyniPDNjNsjrbDqdDNeB",
  "key33": "345rUkSiUdcW3iwf6s1uN15BjW8toSKzJ1rjF9f9jRjXkf143pcmYopXbfKouS1q1s1EFQKrMZzZwsifiZtMH8U1",
  "key34": "NXnAZNzwBN4jSiTtPYwU8BujZEm78bxXGzy7P9MoSpfEfFi8iSQxMPZdzEVGFXMSKAYmZRomPiS6y6VD9RQ96pR",
  "key35": "5tPzuDFz2j3DaRmiS9J7thXmiSoqGRqdRBZAaCbuZ8gkJGEEr5g69V42q5Nj45D8kubeFiDa88cppoqwSY1h4ctw",
  "key36": "2z1Rh21fUJmmfb8WgqNdeZMuNjbCvxkR16rwrWRgDY62MtEmPA2HRsXy7XNimZ6781vSrThytQmxAD2jHWEqWuuF"
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
