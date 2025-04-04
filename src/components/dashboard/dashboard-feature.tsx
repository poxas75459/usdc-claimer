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
    "2jw82knHiEzUK5spCaPp3hYH9zkc1dbrdW4zCiLPHE9rgYunW4fs2UZr6ViMFfFdhCb1daFPttn2zdvk6t1kpmFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBwjrgbcJUNpkV5VWDmSJkR3jyyy9XnX3tc8L4tvNGx9ZTeSeZBqCUivqBJo7pdEg8919YUQecsCGndMbyj4iRq",
  "key1": "462oPgoJKSV11g6dhsuYdeXNcvauwzNoGFMjuuVQDNcST7Ujfc8eu3dAiByQQbEHjt87QRggabZqRPdDmZYGyTVG",
  "key2": "tKwVH8PM84grvZV5aTYVBQ2MFjmG8srMWshvWwafViRBC9JhzTPTyhn3XZuiwTKc2e7ePucjWR4RQwbPREBRrBq",
  "key3": "3hcrGxAuFh3HA34pwEuXxiAu9wMvh2DjRj1357LQu9SWr3DaRNTKRFeTUjRiW5eKbA5BNonQ7m4QFhxoSfja1hED",
  "key4": "D6js3nNUjYDT9JyYvxTWX5buKBvd92caUgD1yFzby3osndJUeCrRvs6NLLJqVKLYPC4P7xb8tXXLocwvjZ1nhX6",
  "key5": "261xm4tpJNoR36HRfnToqZtAQSqb2er2nooEbCXwNF3c8xgDSJf3CtAMzdtbTeFmFEXjN4rmwpZTTKSj7KgXhzUn",
  "key6": "2h6gTXTrv2XViv7zLhfvdBH9XkYxprirsS99gqeSyuRGq5W3122ynRRKeHy12CidyykvbVW3fFRWsGoVb9VKNab7",
  "key7": "5xfXUKf7vrf4K1jxz8QxxMjeDPnAcKHgSJinevE2xQRNSVhPkieguLmMy1tSCMXEsXHim3dRRkyeF4pV5N9JhxfM",
  "key8": "7Rznms5Sf4n3BFoGzUfswhZufepL3S3ao943JefTNUkrbGxuNkoF9z7sVesuJteV54m3ZEctA6BWDSJyx1jYEj2",
  "key9": "43U2ge47FphyLD8JBbDaAunRk4CiqDa629Woq1kd7W6G1LvYEa3r5PAD3NSABgCdH3JCpkUgEEggT8PacXAead2q",
  "key10": "rdpsMKvp9p8jxq4MVFqBKpzPbFVPjAyJjJSzTwTPmAWfNgLyqM8FbyjtTGNdUN59wiH1FbKdcLA7K7Jdq5MgA5x",
  "key11": "2i5DW1i9jY3fV8jLpW2BcLWcrznPer5iVtEyTqNiqompbNXhnG9XbKbMB84jSyLcSD84NAs9qe81BKFN58ndZQ8Y",
  "key12": "3hzJpe1VeaT4p2bRQ1qoz8iUUTCkFjxxDTugazijpE17QkeV1CJPfBAEzpjMhteiENTmUmR6iwgUmoKeKxHjdgUw",
  "key13": "5HBy4LuP4ArpZbdQQSJmSZUgNoDtZuim62Lf2EbmZ61KYFYUWYKR2BEqx3wnusv8tkg2djdP2eKkTBuc63U3uq4R",
  "key14": "3NgiuS6D5VoJeSpcibvNSki7hfJtbhKGjUGLoyLfvUpTsv3Jzt7wC9LgW1jjfnQYojYeD3oHQ9hwTtszr4Szsp7d",
  "key15": "4o3bNYaVz7zJxmVTH89DuFTvJJDNtFkj1WQs1A27KoNpdEJXJ5kUoz4QADeTHBP8gmbnr6kFVxurTT1bQ8ARvtrx",
  "key16": "M1MX7cfJm4NkZhenMNxM9QdgwdXpvPJhYg7NzWssda4YBsmZK6E2vWeQPGTLuabWkeEkxPhPSCEV6aTgNncJrVs",
  "key17": "2ecWp6V9PfW7ShBpsC67g2ixhXAFwKXSw9qqspMUzL8uFwEh4XrbrBCVGLkQFZ2zimbeuS35gcQ9FXy1X3TUBkiC",
  "key18": "pKWPdtDpcm7hwQ47c4fJVY66ZMEuFnytkmums6q3wry1BpWWEfp9Kb4ERSqyNt7zRmMJMP89H3Dx3XhirUc6j6x",
  "key19": "5qCyoWHHXZ4hYwhV8jrAnoU4ceAgESvuNYuHcUi8voVs93grJ6Wtjpn4MQHzd47HQE2txuq5HijVvmCX56iqa18M",
  "key20": "2PWJRBCMc7CuHkR5TsbBRvBTNGr2SNemqU4PxM7KcTXiuCcdo85tgcPHC8RL47C1GagDGzPHP74apmKhW1FajCCZ",
  "key21": "38hbd6kJdnhTTLCfMwg76eLwNuqfA7waz2UoHEjwLxr8D5GTNyzo6CSvXfnqbab9QNRs4nzxigrwtBwQE4Mpa6tJ",
  "key22": "4Jwssztk2HoZPijF1oqh9yt5KS1hWDYExL4nFL49zYmdedxd3S5pYcGesaW8Pf5WCHWcFsow3Q88gb75ExTtqme1",
  "key23": "3euVyAHyyNkvi5qvrxisJqhAPtH9KcpAgy5oNJu4qGDgBNjgF2xvgv3CCy9W3ph6zZHzNhkzzAH3UqTdmeYnm4Nh",
  "key24": "v84fugXaxRxiV9gPzHc6Bai1gEC88YKBX9bim9tTiNc3AKW7uKGfqugKkuCZosCVBtRNDRT9X4MA7FCpCGiBhhh",
  "key25": "3ANZqnwdV7M2Wbw9frF9WKp9YFV159kGAHVXJE2b1dxomRK8fjNCkukSpeZorbhH7ZV21Er8cQvYjH1ABDVRHaqC",
  "key26": "5p29fKFLTcPSaCJkhs2szLUwr5PNNS2gs4bQfLNE9yd99HHLkapVYmLJuqKL69RvkHLWg8rFBBicsDYFTFeY7xVz",
  "key27": "5Kt4gZwHNjanUiHqNdYwkJy93WSwcug2pJPayASTWdGRNFgeUrF4ys5T7DpNVQnHNLCvokprt6ZqqNtdpRx76k2D",
  "key28": "2eGNRzH9PKHogUgvmi5QjYU5eazGHr8XZYqX2ceRGQCSqf52cedh9iSGHVbkLpAnq8iUeVeY1RLurdk683Qn3igw",
  "key29": "2AeXzrwBH2yk45wTxqucYRoAMJixF88aj1jGLUK1CwuS6PkLNJqQj9DSg1zFLDrYUvXUk8dV7RcamsmFUYnVPMKe",
  "key30": "NT7frGpTJQS1Y6xXy9giNH9KyeWpA8Wf1NpaDWVwXjKAryvbXmKc377vdsRKdvbvG2ynCdLMgHVzY2r9BduJRMY",
  "key31": "3rLNXJ16Kuabmu7dqfTd16NpqL8Jc9eLu3evpLfd5BbhCXLMYUVtX8CUgPLNkoLpAgvXsyyoRkLY6ieiTwje9jtP",
  "key32": "3AbgdrZp9haAfZBxjS3yZepWdsb5Lex87rVrUSd88Gb6VWk81VKXjfWAkrcoem3j6T15FHhzXkkw4dBea1CaSKvg",
  "key33": "xUGbvcz9i5Xn2fEzcvPuyWDZAuwLAbCbTQdEwAq1sh7TyncKAM9upT2pcxYSiEWACqbcuijDJRbU5xwZqPy9Qxf",
  "key34": "5sAQ24HNmwNM7ecRPPziu3ite2jQQ6Y4rqi6fr6AYGFRrVdTkLjgCK8JdAGruNWaFm7NAPtpKcoj15cFEG2MKYvp",
  "key35": "2jw623ea3f9A46ceSZYXmRumXR5TEQamcgeZr9CS8JA7XXaqegHHN1BcZDFQ3YUURgLK6Um3urWUa1FLSDaeSYxx",
  "key36": "41xz2j18PjV3DAfBtE5Ss6qQE3awNKQvGC7Jg7jqYGbQGfn4EpGwXHDBZtY7KkqSUiUbDPgW2q9CVBGFoGEvPr3q",
  "key37": "tbTY4wstNpJWeAG36PkLLSTd5FQLRp5MPo5Lbb9ZY7ERyYzjZrjgNZy5Vu2QrWj2KPjWUcjkoBLqnuPSRGcWMoV",
  "key38": "33DK3wv4jR4MykE69fuqgYXyur63jGVRHwMwFWe6GLPaXRrnq1xEBYhVT6buJp3Xm6XZYhBHYSfRcRuoA7JEcYB3",
  "key39": "3UwrUi1xqV4XLrjMMKE3hyxxxHzNjNusdcvm2H7ZCLsKu99wDWLFd1YQRwkbd9P5PpKB7qxWwZQwaSZtdZ7XiQqB"
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
