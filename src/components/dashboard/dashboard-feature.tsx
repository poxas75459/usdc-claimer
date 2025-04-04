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
    "43uaKF3BGPE6QWdK6JF1HBvvioHatC21o4iEHKCCvd5cpPPb7bpYuwwyXPdry6GRZUoWxkFmohn8tMNg2rXDoKbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jaMPU1NsUnVoNR6DpEbFnBuQLu8PPXDwzDP6p65mj9FFiomzwjHZPsPheg7AE9RckuNAz8dbxsaVmFb2p2nnHXo",
  "key1": "nr5WjGGh46goG9zxUyxUjeg4ezzJhKRWdkyD8Ea8ViPfDVWM5HbDGiEUqFenZFkzsqvTvvcfHUmqb9BShd7zoZp",
  "key2": "4uJVLmt9G4DoBpQQgEdRYoKaw3qWJ1q5M4MPmhLTMTV5bFmSZXNGEbiB8QyGkzfjqJt3NMPjth9wyHn8WieE9NhE",
  "key3": "zpJLFnSASuQWFTZYDsfS9SPorWW2yLthEnh778KVG5GN935tkgiVhCGx7LNz31HneVXehcVP6LEeRJArdQWbkD5",
  "key4": "4UJwtfbEVUfXt4C6z11cubH7G69HfWYEUbgeSqGJEEjk2r1uX2EaQqCT2LUhYogqvWi64LXJooDeuztWLRoPBrEo",
  "key5": "532FNj4J4T2LwToXa3NLa6B7wo8sdWBAxzvHELgGvPa8QLneFRaB6V96xynPdWNynsLAgDEgzmuauXkwEZkLKCLa",
  "key6": "2cHsmbjbwNMio6rYBUkRDc8Rzcszsf9WL7qBe2YMB6Ab3ogrdTrGi3heDtGrx1sUNDgYJcTMxBWWBNePwFEEheYb",
  "key7": "5fSJxJqz7rYHAcwCikkLY84sdYmvhUTRogPpec837Ba6YUMyvYLB8b71573w78Ht1dTf4pgwZtdf48h7YUywjrxN",
  "key8": "5hbUzQotkZpx3JqxEnFeG2mdQLMu1SDZ4k9BV3oPRwUzkjbNrTpMhBnZikDGog4Uf7pEJ211LnvsQTpPvsK5QV8i",
  "key9": "5DAq4ZfLtKjhrJ2LbvdtAXH9PSY2kxkkfAqUGGmoNdr8s9M2hS8Lvg5QM1AHjX8KddJKgqxL9g1N6TfUsSmUsvzk",
  "key10": "58GeFJQe22CmCLrGs5ssKDoNWX7HyoEDgoHATfAFv2MXWn6SpnPjy6veyYuLoVJenUeb3E2z3rduKsN8zE53YTxC",
  "key11": "47xXHcBVPz7FS9CJFxD8hakKzr9QWqv1fsmqNoExjnYk5E4RMbuMvzvrmoEC29B2eEgyEwZBVJCyWTyRK9HSnmgw",
  "key12": "2ZzHgfmB1vEWtLywZh2kPBxBeN9rk6AXXq52omQNg6mFN7Q965ttiBi3yoigRbgonBcuzscR9RCWqCpa65gR2h22",
  "key13": "4TEyWBtnygo2Kfo3uEoh8su5VAZMmXD8TvJnbVhbzNhAPyGYEWauJh3q2f1Roi5BxpEnyppVNCRWsLsG6iPrHfSw",
  "key14": "5yqCrXNJ9rzuh7aWdGznoUBYnEPEbu8TJrA69cRTBvFyUYi44D8LeEtudTqPnfNoYhka2hByf1UdUeEmsDzLjmKw",
  "key15": "32pEF2xXZSGXWE65tATqtK45S3L2rJ2MsQCeQ31gFNuEERaBmQDDEgGztsJTJ6T49YwJx5bof4asAD2TFCQ79U7T",
  "key16": "ej46MnGwmCpCA39hoTrDw7JKJs15SGKPB5S1gye7Chg3RTrUPLFnhA2GUo9Yioh3Kjka1oxZC3xdneGpedRmRGB",
  "key17": "2fB2st7jyMRMpFryUuN1KSw4hHY1GJtNZzDAiUbhZha7QQzF689X3U4Nwri74F5dnjYZsFP8Q985FFuW36ok86A",
  "key18": "icjvy6iVFMAQEQ6c9NELwDj1vDTsYrJz74vWwMphj6jHSoGHuAtfiQchQJJkb8cCLAS9MFb5YC8s3ZGhsX2oKFa",
  "key19": "4RRidwNYEvGkQhytnMCk1oeV7nRirn5f4eTmEPNtZvRfqWCLWBADMjXBv8JpAVjzNwbk77pdrXrRie1srEoc5N5i",
  "key20": "3sJ42VoHp3Yt69qMSfQLWZrudn9J4JjwGWQh2Z2jUXSwEX9Qr9CxV2nAkvwfQUV3FHi8aQofNnDxPdnLhB2V7mZT",
  "key21": "3BTaMuUs6iEgpJHmA3d4XNFNMX4hAZt6Cb296QR1NEb9GZd2iw9wWqofw4pPCsy2WCXPvwxxEUWkphpGcgHUuior",
  "key22": "2igW4YmrkYP14L4yVks69jwDeR4AdZYsj2HyRNcbiv1TBETGW5jmVT9UEDUkirPNnD6nDGBCvCx69hWdbi17azCL",
  "key23": "3AcoakNkCunz7KTFP1NBKh9P51fgK9NDFWRpz6s8Rv4xybQh18UpUYymFqsR4RAHPobjdcDer393nXReNUZ8nxUY",
  "key24": "2aa7y23HqoahiYSFotCnN8NM8J4pxaMuGxp1x1tcFkeRgGdDq5vBovLX2bUN74g3s75BEeBHrLsNamkuf1fNTbFu",
  "key25": "3Rb17YzE9NBgyXGg9fGLgDD2EZQ9VGpsAuGoJscjZU77rviYyVJ95mrLaY4EtEtEg9QgNkZkFHZ2KwckTGjGu81o",
  "key26": "3UMSRyu8bm1a1y3r3YA8dNgVYotpeUUExUWbyrEDoS7sD4emT3jaLsbF9D6umwAZZhzNuKQr6xhuiiQ7DVr98Koc"
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
