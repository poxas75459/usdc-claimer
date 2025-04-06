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
    "4qNfRgRvUgAx6ntQhP6TbjxgBXNGeiRXYLEfhbUZW4gosemRs4vr9Trhyj56QcGF7QW31upJeuv1JrRjwKwtTmT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XW1eA8VEwLXEeXvNNu9a18cVCn16fhv15NeAq8YHmCtirtH6xca7WvLKRehfAyGcJKi4qES3iUk69sF9RC9kwDR",
  "key1": "4FjswJ1AE2ULxemgGoS6q4BtFrbkAsrZjK1F7hVvVAQuQg22fwgaByuEyFYXtqTZdkUntDGwr3rMrf2171uQGepb",
  "key2": "4tET13iYoKDk5HmwAk3KgnGd4EwhhaSkfzEij3zvuMqY8xqgfmd4wrkyB4heDcCEUdS5yNcF6kUbim4QkrmP5CZX",
  "key3": "2xkT8WvRetupZAA5g5Mejkbkc7Z1yCSgfLFv5bZFE8hYGFBVCdzmSQkLQhJwyWcHMckKPdvSMRV4ZR6Fck6bfH14",
  "key4": "4F54cagtv42PEYyoJpQTdTM9Qu3d4cdkncoSHskKyRc13mvP6t5YeLdBgU5oNPQKLYKCD1WRTWfBzZc87mEWA6Lm",
  "key5": "3F6Z4CizjPjhkNQCvuhXEWpTd1UP1zVJTGMaKU7z3uUe9ULg8YvD2EjJzp2cB1ZxwV8zNKvycNCLHsQwJRncxWxB",
  "key6": "2MhePjdxVzPKwLsWtENAewzSyhUch4hbhMNffd3sUCSq5tPgscAaKgWUVeHwQShfLPVa82L2bbiUTwFQ4h4Z8cHW",
  "key7": "51ifsLD2sFR8AW9PDPG4GXcXVfKwwrhES9oFDbFUb8pnJXtebBVtzFqvVfNwe9jTyqcTeEJ8KJ4ZELxDe73wsUwn",
  "key8": "5pKixmmYAs1rQzaYaNyfsWAh9GLnJPgqUxySg1y1KgMuddMtYMB2XXG588J7wGoBVXmMSNKVjBMRFYY8BwcsJEnJ",
  "key9": "3P5r1din1Zws45YdSdAHQfvjzUBmjjw777hMtgdB6tHhijDiiQW9n6VaRzRiLUvuxTL3AoQBNhmPhqVurLUWEakj",
  "key10": "64NJQfkni3rpRSo8YFR5n8q8PZSqxmTJh8qibF2xsfEj4Vsmb17i4vcfkzYGutYCs1wd22bgxdRp8R4beXm3JT5o",
  "key11": "52daSzHUekfbo1zPaJ27dpyxmSaKfRmJXLdSLxoR25GeDEDrnStafCcXu1yteJuRvobuGEMfxs5QFSfEqg7QA5Sc",
  "key12": "TH9WrpiLWNvboeK52ovvibjqSvuSqSTfSeq7LVXtAs57EoGeu2oQKBU7k1VwvsJML9YE3Xvy7LvVCpf9ZLJKuMW",
  "key13": "FNBvxrUzA9LtuTUtdkyNPFHa3BZVWsA9dcG2cjUXrf5yhA7RLcZY1QEX4QT4cPx2aS2TBsg2DdyVvsXCsgjJJ9x",
  "key14": "5btRatnafkDFWfrGPHeZdesuEW9Jrpnx8JXjVfP2tALL6vp9a1yjToarcTNzBqmXpdSZd28ajKsMqvrpUcKQyi9r",
  "key15": "4jymcckfptCsbWj3D8jtg7oyzFrvfjZAz2XtKNeUSEHpXkHqVKMRtyrSMuEMwapujKgi1TPyhDYy1GPdmRXdfT7D",
  "key16": "3D1zec1pWXfgx5MQRqG1avuJP4rm8J8qXXZnDomUxn5PU4BLV8n1Fx9SpTDqiHNJuMAH6A5wiqMRwp2U8HD8uHRm",
  "key17": "4D1Wz6LBRuZzSiXWHqwRDQ1uEuEq5hyVXYGMD6AjvmnXkTW9m8NQGSnPRZgFybx8QR7pdiuXL2pgy8uzmunBgEPj",
  "key18": "3uQ2E4MmDZ6UCUpDAnMEyfSRpkmpP4j1SAyRRSpjskMVwvhtrGeEjx1k2mjdKqc13daryy9yhdPmECRuUxz3opeM",
  "key19": "4CamqCadcFCYcg5u3mAg7H9gAXuxxS1T8SAeg4RuoaAFBJSWzSDeqUVxMd19Mpw81MHNWQzvX5R5E9MiHXeeR3qa",
  "key20": "4LbUZaQfed8WY6jc94LZC2U94B2RPUMNH5zwYTTdqTf3rydMSi3cw5Mw1oDxQuNYhSyS4EE6DKhDzvTmcXhSTh6K",
  "key21": "hY8E7pAt6ArEkXJM2mZ7WTqNzFVzJDWdKfcjBoSQSAesvHMjsNw9cJ3uVyAACCLHDPbTMRrcgxnaZKDdcjENpDn",
  "key22": "5g6Sdb9hgDKYL7V2Fccsm2MVLw8L7WQs3UVs5uz5B8Z6yCm4ubnMvKyVQ1HaJ8YG5LpGsZkTtsWDwt6DiLtSsL7k",
  "key23": "ECejgbGeAaKrW4bNXUufDTj9ba7miy77ERxZxorwTn58ZGpnYGAcUE9oZuBVmo52ou7xHXmoEfG1fHHsHmYKWDz",
  "key24": "518tWDupp6R4d6wEWYJuux1aTwM3utSPnMHq8XhMQr9vvvCahHGHiEj97Sw8AwaAj1VCpGfLcVUaJJrigc9XBwCc",
  "key25": "2fRQQ8FkpfbaFUTbzZ8TvFYmzJArptKFF1uRFwkFtYdY5tBfGonm2ce6cwckzT9nqch5L81duuoGNFdPMUbNLf6s",
  "key26": "4mfSBv14su1vbgMLNBXisdFPNH73MccCxZwsFnNyshk3JzNPbtXYdmQ7XnQEVxfSfYTaAC4zBgVVixEejUuUWbGH",
  "key27": "XnxGegNL1iW3kyhhpkYpNZzmipap6hM7fzPhhkKJpRHkDW3ehAvNkyy9SxvUAwPoovGnuXb88UnsMLyS1nkfHZx",
  "key28": "278aBk8keHdtgxy1Gt1UcUKeeM3K6Ymv1EYtpHiQRhhMeyB3VLgqcfALXb4U7dVxG57WYjCaLgmpKc4CKnUxMQEf",
  "key29": "WqnquSPmo8xYHuruwiCEweifQwLo65uJomHPd3CdSNNyhPK6RPaNDhkGRdaf5Q4Ysy7rE68FUHia7d8E56kBUE3"
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
