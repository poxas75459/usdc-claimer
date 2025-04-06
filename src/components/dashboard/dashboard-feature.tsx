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
    "67Vt2EhePq4ZEHCej1AJ716y8U7Q3FpffBMWLcYi4vNANrepAGHE52Y3jWYBwko7eVPgvAZ1CUTeuzfbQBRukNHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HodEJpeTpCeC8easXk9MBgWscQzPSDw9YhQnU2Ln9XRHF2ssjHHR9qtpsjnzBGXdVcA3B8KgESVbw23CQFxrcqY",
  "key1": "5nKzPEXYXLJNikCwpAcNq7BV8s8syXWpNeVrs2VthrnbpHs7DRt1vjav1ZsVksNkmw3qz51RjDKVivXEKDezbwMb",
  "key2": "4dPAKHfFQSY8gwGzBL2uRMEEA5tZcuFwudN9E8DLXvWnm2MYBN3Y5s8nJv6SWwsZoiji8df6cwMryqXyHqDmSD9Y",
  "key3": "4gSrxKXBiWotuocHdBQucHxJ7eP1pzjrcBAdyGCaaG7Jxe26SHaW9i5f2AsYrxAMa3QdbYaxucLpmDNAtDBRN9ca",
  "key4": "2GJFpaSBF26P8UJqUySthPYmGmmgm2aLhJAWcsvT5axxBM19rwmFnwEEtEWL3ezyzuR8rrAqGNkgU5DcYRgpshMi",
  "key5": "5nxdCDQXANrrC8qDRZXAct3WiHbhkqLBMmCaxkjurutGp75ZLz5X3Lz7ztGgihgGn2fjwxsgijnTfgebziuudcmC",
  "key6": "5RqByXoKNQnjVwngBWuDwH2Tr4t1WxgVTDz62DD3XtTjUDH2fbrKkBopQjumPPcadk9Z5swVmmWP9m7sVKPZ53xQ",
  "key7": "5B9LvLzpE9svuuFxzr4cQhotr2Rds6rMeUb2xUThfo7Mvfbtga3TpWTfxnaZEyYxCMyDtoGbErnxHDyG3kR6hYLd",
  "key8": "4u9SVmsPLVeaCVWexzsoeqndDygzi8naxoHnPWh74moZTGSwaX7f3DXMRkJwG2QvfF6Vd7AAXkatiLa58JPf2BcM",
  "key9": "3a1NpKD33xNC2zW4aEBNctAobQhGL3XAkKF78eGudHmts4aWLUMbh5VnfK8qzzfgvdJEvLdauz2XY2c9S6McTjbB",
  "key10": "343hf6PMKgoWbCpvLGWAJvHJnYC49jCXH4sqKiQMo8obFRoBWmGoQuTWdwc98n68jgJ6JasrTqYyDXCQoPELdz76",
  "key11": "KrrfzuQE7u1FLaVTzTkxXCqT5fQuqfPs91VJe3JgKAnTRXvqFe2ozU8q5ZwGJwpbBfw8XFref4TQTVPBeFCTkS8",
  "key12": "4RNvJV3BCxWveVJvQ84bkDChigcGbL2fSha87B1YwSifV2X4Q4GYtCbTX5XPN4csqzFxkf6W8deeQ6QR2fcbMYD6",
  "key13": "5QarUY6y1fMRGtWT48jKwrQ82AHSJdnXG6QY8M15rfE4TiosHNs9VH2SzkpeFnhE5Sw63fedPKt7gPX7rH9jiXAX",
  "key14": "2Wiex5o7myZFuQrQkzzhwUkMxkZXu4iyYLzTiBH7GMkaKEvNzTaXMPr9bgzMAXMDKBxUUpeCAWx4QNFVbT1hhsGA",
  "key15": "gAQehZdt6H1edM6WYpzuuo7TpLyH6fiy1hRarU9Us2EzD3dcd8WSKjwwZ57cz6szrNNUevedacZcsk58LyWMU9C",
  "key16": "2PnMUDuwCMKvG5gkE1naLm8jV8iiKaYhbBw4r45BTj3FmUoSRSmLnm3JFei4JdtWEHNei47yvVB3H4rW92sEbtGt",
  "key17": "3EynMcdbo7Koa9EnfNsqA95HBFMwt3nLohBLnUFgAp9hwnjepz7cbECb75g9Kw2n5iG4Z4gJEPXbikyfqQxfrijk",
  "key18": "8XQ5sHm3sJCH3cXutcNXER4izPTtNuc8uLjNkfUPkNqKVnQHTm7XV4Pxz8DFeoDhbSK4jREzP8coKaQVKRJCoEg",
  "key19": "5JcJCQNcum2yVn3xQSBXjMdxRHPaUXvsqW25npKe5odLtV9TWympBwDTgjEVTsBk3yR7hWCd2s8M8fuRm3X1fB5J",
  "key20": "4Sj1D4BQcadwctGSGrpy43WCbXBXJT1cdRV2P59DqSnZsUn7GYhMoGStqbCLy4hq46mgBuvZd1YGEzphTSR7x4WD",
  "key21": "5dCLwZ3jNqeHNQQyApQ9p9AmUWGBS6xixdccH9rnKFbaWk2hTde8zZ7iTjhDVWPiWef5TKuGG8rKMQKCKAGYicTW",
  "key22": "vq3kA3zXvKPCDNEeGsTdyMfz55LTfgF3f5sr8sgSzCitwZCPtDxSs6ECWt9xhgXAXarascR4oGuNMUMjwGeZEsm",
  "key23": "4CBMXPkV7aiUGJyeuBM3AjwrB7T5MUTfudFKsU4H4e2Jiw3GbWvSj5EWahUgYNbgPabZJhPDmno5L8hSkotDNMbq",
  "key24": "2uFzhQKYxNvxHf3Yt49S6SgHvCqMYev3JxNpYM8dWGu5mEMfVrLrwcVxq9a4k1ai5MxgP5bd3hB2ErveM6dqE875",
  "key25": "4rSK9PC5i4u2ww2wDB1vq6qrjNd4LdM21SJDaEMJ65voW7oQVt1YLf2pBzyUPREegk4XVbx3N18PM9cGJ2raHmdL",
  "key26": "57tgGK27F8aF7fTrKuuJgRceGeCjgJsxrumExMoCkan5u2aqup6oeL2ikSeXv1a6NaQA4ksgyUMNG2QB6DcNpDQs",
  "key27": "3SGpxWDXKpLa711hBZS8YHJQiHzotJTesMYAPkr6STc6MX83Ygiimn8brG6o8KQXc7RFxFA8vWDAC6gMEs3qJpeN",
  "key28": "9kvYrLH4azjKPrdH8ZbCEngzvFKxmVrwyDboUVxHTKNJdM4VCq2bf7ApC6UQMRKnjYgrYWt2esUMTJGVVrr3WMu",
  "key29": "33jkb36FbX3DSgG8c66K1ToudeV44rt98Jgjn47Rhn9xf4Asm11V8WmwGf52ko2wLCazdJJchrivc5wC8NpCXgBg",
  "key30": "AGQjTpP9U4azgrgFzi4wW4sefVBaoTTMJdSk9hz5WYZZHFJ7CkCkPEJ4kQrVAZpyik1n1yqNCcZFFcEac4MQRiP",
  "key31": "36exdQRVjkmwm9hKVhcxUKG62HwdvzQR4ate8AjbbUBx3kFQfGULKw8rNMSKsQTQDvVrLAFuvSeSjMUdHkSU9Ye",
  "key32": "5DE6KxBM4cxwiCDsikmikrkZ4jQVq8vMZmkJopGHd5nFdtzu5DKKBVGnWk2X1GBTE1iVqaziSbbMsfeYwbFDJNn2",
  "key33": "3PaoZNsRgqFhx6RJyBEPAaybvc7VvTK96S9yp4sTbUkWKBJBiYPHDVjwZY1CAdNtQLSBZefnpVnWHq3dCuCx94ew"
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
