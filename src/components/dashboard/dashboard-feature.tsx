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
    "2DcQgjdvY3Gnv8opMUTLR7yGUonboxea3w79wwJyS8MntXNam41E8hoLMbUoFxjsNJtV57tdS7RoC5oXUbK1xzCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hdWjNYHAMuVQ4totedwhAtQe7EsVTXFVdyGGi9h3eBZT97suSscz8xjUom5UpMvNGXHe3mjgrgX5N1c8rm4q5f7",
  "key1": "5aqok5LopRk3kBJNUSBeBb61hBjmgx9Xfj9Pnp1p4Q6uJKgMYgHyHAXQ5ivXGM2BeF66K1kHG5ZJRZukeBnMM8ZK",
  "key2": "4XVqop3Q2mGmCeHK9thBfB7jeQiMmHZk1VGwYkxmLhbFZGcXSZ9xMmgvXPossN71mmYk6M4spi8Xgo2jiZiTyJp2",
  "key3": "Gpzt9GtDHwdMB8PpWmNE2P5mAtEQ6FBUhpy1FNzUi7e5rsP4WQPJmWXVzbj15BGKFwn1o4f71So5Z6fFEZJP67N",
  "key4": "4hhngxNs7TRxtHeo45gGN54xwXoiWWSmRxtYc46QGnuVcek3VdjXhZK2AUEAh1m62ZKLCqRQhuqDGcfpPJ8DsRJx",
  "key5": "m3fyHfPZDrQcM58YCk5EmTdHafibWAymya5X7YTRKCGMhEdQhRijMt2FvyAnGxjnuAuhMzDWyGYLmVFGLT1UusW",
  "key6": "3CnbHUttw9N7N9aZDNb1UyevYqNzsNtMUqVicbsuJNjsRyLDTxv4muJ33TFPLQ4WAUTRYoNQfuzdkdXXUAfpRbPJ",
  "key7": "aKn357c8NgSpNozYZfucctZ85x6FVcaZnC3CT7JwLYjChVA6WXKBN11dog6wPJoYuhJouTtNv1r65htEc8hC2rv",
  "key8": "GDf4LcSzXer97m7W3YWEXGqLGU8rsvgK9AQS3JbK9dPXLD87Ke1RQtFwsb8fyYF28roBnWgGbeTjzmYkF3MH2Gs",
  "key9": "4868ETLn66W3TAxPSKfQqnaDekYfyhMUSF1ENyCa2T2TYegf8f2cVbS5wT8engcMcXGtcFpHceKvZCUjZqgDtcK8",
  "key10": "5zCvKnvVJkPW5Fwz6pjnvLimWWRmyNVQFkbXVU7DBXzVGPqk7WMjVguCdSMdxxi8TR1ZowCNm6Nrnr817htYPecR",
  "key11": "3y61JZ9AFU2Beg7vfW2QfRqn3s1RGaXxdVGyZKQHGRwwiBdVXAEwEiFgdkv6WwDedaVFwQJBRLNHrrKUPRRxtdCG",
  "key12": "4RsEMYoCAZaKhhYewcrQ5JXy8zNA5EFJQBkPEbQMbdXGrKwDYnwJ7VZ4d8tBEwiqKSMAQQ3uBU5gLS4p79yWrAcP",
  "key13": "4cfc8n4VboU9fHREYFA6XJ8kGnymRYUG1NdRRwg4Q8dY1meFMaUVTWbjKDKcY76EaFWp8iio57mmnyuN91bjdmVw",
  "key14": "3sx22dP13yEzcnvjvAqKReduwnKCSSQqcZSvFZCxtEsFvijwUHgWDeTpvuPo9X3zD3SJarxTd9KBJwn5ndhE5ZmF",
  "key15": "5rWrgyEMCHshehaNAkJSC3rG1BcraYkudyjse8gkmVZV1VDGPYBudrKJt2wEuKmtRHp6pZeEyts6REGzqbdyvayY",
  "key16": "KZ82ussMthdWDdgLhir9v6d1QrKHuVKcXo4TyLS7Up2QV91Uue2qpWXohJ1RyFjKLGMcYJjHsJjAZDpeTDeWTVy",
  "key17": "2AvEfs28G5rvbyKqHiNSVTTq2n5otiiv5jZPi8LKniUfLQycaZpGemBHQSgtvN9RUczDZwPv3Swk5tFaqEZCC7vD",
  "key18": "3BbrvDRWLHrxdgjGdTvc1WSYFCxKzSY1Ui5KcStpj5HbT32Uzvv75HT5YiZTVT75dSjnjZWnTQuFG6iDM5QgmpXu",
  "key19": "5vEjokCRGwJa7VGMRKBoLGwXKonE3PxCDLajvSsmiw1QmGX1CCatARVKYFthcVou9TePg6grJguDzLyjFQ4f2Uei",
  "key20": "P67E4dYfCAdBdBcxBTrcUiC3MRKg3BHvW148sUpdULW2Yes99Hr7T2eDNgT1nG34RQR1YvhCgtvxtHd1W7pEkHc",
  "key21": "4CKAhMDwShhWADCcWBye3DjKp8Cd7Xo3oZVpaxzz8kK8boqW4FhHnp4khLuqqpxSdbk7jScPLqKou8t9s2YaUfPB",
  "key22": "2NaFUQTinZBPh56TYZpMKVC9CFukJefWuxYf5CeNSkJPFSK2X4PpJQiEFmpnYChd2yjUUGdae9RMgzbjmfeVyZJL",
  "key23": "3HahpUzN26bj9onLx28RgnsS7iXQjrgKhTU93UT82Tw41bfoYGZ7LhyHPYc5ucYrThemD9iGD6KQN4cKKfRgoAHA",
  "key24": "2152Mwz2WaTTCgu1hgCYDRiUYRF1GimpwXWVyTsxbjmjEEQuBAQ4HysmjX9CrkXE5AZMGeBmZbW36wk3GVg4pKKV",
  "key25": "53biAUaFSimkWdL9HKthomyhsMnsbgnVLcCNgGEETxsQF227E92VA98QmZ3RjSKxLdYk4KgDsZFCc7GTW34E1ibx"
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
