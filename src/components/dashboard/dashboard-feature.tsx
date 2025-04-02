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
    "5YufphEnHi7ZHdmSnSYD7G8yeaRjLp9JtZAhn1bLVupvcw4Cu7zt8foeF3n7F2SB65v114HegYwBWVvBBXAXbU79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FreYbuhNuXatLBG5GMWCf6d51cDxKaJBKWQbRmCuJHwudUtK1WAvBtM5EtSw3qQSrjHtpCny8UibcL77zP4cs91",
  "key1": "5uyuhUMoYN4v3WPuEmoCnjWJ25NvoQgBKwgKKuuJ3p6aaoZtaXk5p1j6gpdJzyX8WMDuCEPYAJSec9gdRYQrUAhj",
  "key2": "4xumL9c4Rjrf6SarQocK7kCCFFopUFadwVHtW7P7FotFqxkZqb6rT3Bzp34NQAfAEwCnyXfDXDVA6RCTDmJ8h5sN",
  "key3": "rxUgwukGc7n2U7WwDGmeJZNzDEK3rFEbGwDyfaSCxpPVM7Mso56NhxjdhzHNhEG4WEU6yymcKtrBbCvfxLkazc1",
  "key4": "36muxVsLC5pmid89FSwKhKbX9YMbzefEgUstEuJAApoEgZkaYRVE9z5ZKgehQDq238EKrz1hgtfVRuKaS6XctBab",
  "key5": "3N934FSF3okud3qMz9vMKVSxsQtPL1nRCsrdbj3Y7FWZGRFofvyS7n7mYGKwnhkwybq3VZkLFaA2QYqKVSZEV7QL",
  "key6": "HuqQsn3fJPwTUJtb8G4V3spxKeVc8B3LBdpegueYmF96PufEtGdAGsicSRjcXDpcnpptKYamr5pJ47DvE93EXo3",
  "key7": "5au9Ka75mykL4MYyaZnZYJ7GTCgwTm1eiySsRzDi3vw5cxxiuvyN9gv5sp2v2jfEZREywSoWYPDwvPKtRvzu8mPN",
  "key8": "2DBFcme19E7PVHgJRGUM4s5roE7BAtAyJQivEUTVPFTkBU5fuEkikbBydH97xBNk45ZQffC4UfXbaJcTLkkNtGNb",
  "key9": "nyQvwyv87McZvJcc5sEkjREPznY1pCE6P1Tyk1zB2kAoHKEstZ8uMaycCftxtH1yTMTLJmFV5TdbanXCydrMPz4",
  "key10": "36U3GdEjST4tx6YJSKBajvgjX4SMVGqWa3LNKLkyXBEqMR9dZ3UUkVtQP5qGREc4hpgsUFeygtNAaYhjEwMHD3Ca",
  "key11": "4CCmswfKfJ74HwNFa5rMDyfqSc1DppE6emXQ3G9bz6MNZRUBPh6rdPm39ax99qdyS3T4GwhQSqPLUzK2ccAxnaXa",
  "key12": "2oYEkoLks79VnBMYMqxaJc3Z1iKRFxmenTCPxZgpU1Yc1JDdwfAXkrqK649GfJY92N7Txe6JMtwyA4TKgJQQKuDY",
  "key13": "2cFaG8dNyrQV2s3aeDzGwq73r961YxTvJksKSz31PCi8V1FRY6UBLF6ojbSVFmdh1M6WVbyDVaeY35krc7sLWkFi",
  "key14": "2dEXPg8vsHwQs4a6zTxUMWiLN7XvdtCqwSebuqRem3bQWRAAYyvFx5NKUzhZogEYosyLbWAApSpaBaaVNfUuMZBU",
  "key15": "4zocBR494GajQDWTmisQU5wN5poMD1Nj7fdresGqVhE92DxNcib64E4ydh31hDn1MMv4yvn81QEykq1fgaKBQLr4",
  "key16": "XWRMgxRTuHroyPgj6CTWWYp76Gh6Jow95fEfjzRtUP34Wp9GosySKVXEwT5GhrgDM4siCZienyCqDtzxaDgKW29",
  "key17": "8tKDscc8tQrruSHRvWNsW1qddQ4LNprCZLe23cs29XsMGS6QNtdAiGcy74hA8P7VaXvCkqBgUsSsGvAAgdRJUPp",
  "key18": "24gNCAJLTCn1q8iHrd9hk5H3kJkPiD4rcCZQvAqbH1yHr5oerURUAHjYRF5RP66Ub7gpYaxtjFMwVb4Ry6reyMjy",
  "key19": "3Cj8PWXVZKmmhqEezztx7XkdxbQ8yLGbcEWhw8FPnG3UvcMebh3Lxg8HMaXPknNprW58LDj38GcyPo99giTTiEVp",
  "key20": "3HHojTWHq5bkVHVkJm1YC1V5wnqczxUkcMynBvF3xPxg4wG7mf6Z6GfpbMRqdrH6HuHWiUjUVwZWhkeZATJueUQd",
  "key21": "2CL7UtXiaJVPKRT2JSzgt89P54PCHjjxQ1MBhoYVfbCCpXTEjXCRXeruD26MN4WetsT3UcYhFAZYx6qhidBTw2sv",
  "key22": "49DbANAccroVS2GdNiQ7A5Nva6ZR3mz4EA7mh7ihSGw532T3KfkAtstKTLeom9nFv2JhzpbUqa6Y2CtDxjf8b2U1",
  "key23": "4GiCRQ1rH6c9QWxFu2Fh2SYpMFYJYooD1dwBC5fqpuWrTVQtufsqWcYbgedQAwehczK6vpnuHHnsiHRKT3rXmWyk",
  "key24": "KHDB9sv97au9EkqhHZZduj9B4Znsw98fTuGjMQhtB6w55xikWkmm6mN82gW1ccF7gjP7p8DjE3sxyvzD5DUuaaE",
  "key25": "5jLat84grRmSbohTCJ3yMKf6WQ1cjPKZWQ2zFaxBXoxURXbmmBVFp7JdsoCmVcvBATy63DccZ5m9ffJjENZPZboA",
  "key26": "3ucUC2ADuz5Nj3NTqG4sBnGPNUQbqqo85XMc3mkueE73DzFZzNutWhcubPgCgqFfLV2SHsjwBdZRpNJVce9MbXzz",
  "key27": "4MDQs1mUuVcnCj9X6icNwbfQKJzMsjzRiijuFH8tKzLdD3k6Mt1ojtdU85P1KfuBUQrEp6XYwijpGPTu7krsENhE",
  "key28": "4YDSycbqv7oMg2TVzuL49QzVgwApvLZqF5WNCm5eDLxusgn4ECXxjDuv5d9Ky4M26MntvwKphPkAx8NkpkQ1EMpk",
  "key29": "2XsCJvtW1jC9YYKgrak1B48bz2bAAyvjFJRLoLxidSFiwhMhLCDmQGHjCdAja3GY1VZ7thdqEHLHDsZL74MAkMwH",
  "key30": "Lf8c7U6fwNquNzxCiw2PkAMUjD7QdcgnXhjuHUPad11Sbqwsya37HmfRoUiDRwuir3ub9UHRY5WR2Hs31qbhyVU",
  "key31": "cem8QNzN64T5o39qvLuiLAqo3mCJ7Qve2LfiHMRFJhvCo1JzW7U81JRgbMZtYupESZKp7K4Q9XVj3ydjN4ACqYV",
  "key32": "5HVurEPeUZwAUpDcRbuLAGutttZJaZeQ9cDRhJPvC4LUJwQWrQvEbKgGVSFUiJerraMZkQsAdcAjrs1DHnNYhHbF",
  "key33": "4vuNqJNCDU27LdK4jnvf7bSpDmhpK1SCgpj7FK5RbLNLJuxjcGd8dgUg8GrosVr1hkvxQwdpaJfZwCD16UtUsTFn",
  "key34": "5TzVx7hoEDqZDL2qa6ccTKka5bEzxBazVxawL4bws7VdEHXXmaHyWqpFjpCpEawPj7zzKZWEwyAfBRUcvnkQ1T71",
  "key35": "4oYEq8TBtfNHiFTFow4BsEJg6Jn9CNbaNUTHNkjzNnNep94zqaqNU7KYPoGKKh16CrjwA1UPs6a2JM8Vfu2ZxBfN"
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
