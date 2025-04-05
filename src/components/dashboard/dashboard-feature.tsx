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
    "4jk5y45vJpuUN8woa3scLVM7ZVUPK4VzAjMfLpttFm1V1zFXZKaNE4TFkgZhgFVdv5nCTyP5REzEGWAVGjKQ7GXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AKTH1PWUgkm6cUoywB3XNZnYmwpxpT9JHqyMeuCxHBDkTUDC7pFC1RkHbnGKrXsQjGijHGTsHAmsS6ZtP6ECEVk",
  "key1": "QZQy2GLbWNS4yXeNmaeyuAMkLxDinKqGyxMFkM6u3dtMEPKtqUcbFaDa5eGEpDB7dX2ypwhhGRxai7agQ5GeEeo",
  "key2": "4z4L1EJtLfKpNWJwv66PbLZMNYW5v4EUpT6EsSt2hUh5Ze5eGAMG4W5vDjKP3j6Taj3D1HLtqVHy65Fo7oY5jut9",
  "key3": "4ninZhtj4BLYHZ17onvbzz3C3PQKAGzLic2ToMo17yWBuY9eyknC34AiycsukZVt1jTgfsCYTdhV354eMMLeb9PG",
  "key4": "5S3if8jP78bzWw7L7LJFVAXYuKPZ7d8Ps3tChQKzNPgG4Jg4tq2djE7YRampNxyHzweZ96DUDbssEbwVNNiVsrnz",
  "key5": "4P46cveoAjo3K1gqa9qd7C5TgejEJBG9SnSuUzi8R4BNixRpxVAEtCM8aQzoo312h1uvD3RgpjNLN9U1UibaXSa6",
  "key6": "fEWub5SoFxK2QGTKYW3E5nY8JgWXjCZTuu6qRopAA3WbryULx63fTBDLtXk5gM3ihxoCeXoZSt541cJDXNUSVJK",
  "key7": "5erjkahKiMfDkXRhE92NHM4cmdeMj7hhtZYBbUHews8zBx5u4Pidv1xXDV5WJfRmeTJtY2Zz99tJveyNkjrrCWS",
  "key8": "58X5FjQvncebaccxmdZXxZ4fgaN98U376vgJmuK1cJhuGFzYLG9yFZheVaavRRPxB8AfdzimwVneMKoM53jJrK5b",
  "key9": "4FcbcZ32Fh4K1Gf4Eu5aM7W7AtXj3jjPdMTNGiX5H4Gf5mB3SAurZbzhWi5afcavUwDjYFUP7YTPHfrHqjkcTDge",
  "key10": "4MZPPsv6geGpRhuncZc8HXKyBoRSDfHAr5zTmj523eoEHvTgDQrZmAnLuZAXEzYQQh5UVGW8kg4AuC5cHMMJp97t",
  "key11": "3WTWproc5KFomn7JDoBy97msa7BTkNqRJRo6Qyqb5h15an1aZZXiMYq5w1XETt4GVAEVA2NoRrGc5oryjcGFFVuA",
  "key12": "9yha4WDSUSEBFtsZYYPaR2xRJmNB3zMW5KDpMvFQNQ8ghkpJTe5NVexwfkQu9ycBy92KygHtJXwXz7bVqeX6Lvz",
  "key13": "4zzixHE4PmJRsfNb4kSAWDvW56sM2HMFKdVRMRyThsqkXN4Vtpgq94xPprdzprPpEu6KC6EtXhCJwihomVD5eWev",
  "key14": "5UMiwQ4yecMDjcMMYaJoCqx83EgvYCaQrK9ChTLMvPk6sytAfNq1Do8XH5RiBdbuNGFbiVgiUxGEXbqqo85uuVJN",
  "key15": "2P584edgSgN1dd6uccNg5qA1aPc3Yi53avG56pCQ5apEpGDGk1pQCwPdt3T486SNGaatupEdz9mUNErMhyepRQSW",
  "key16": "22HgJoeaMgpzcvLAQB8cFtzafqYaa8xwroahvJ3nGs4pVT18LfxEtBG4HrMowf4NqSc2qYCG2saqHqJcHJhN3tUX",
  "key17": "LmYxo9V7ViQvhdnhDLsVwkNJHWRLuPC8E1g3xuKnJg8hsnrPoRNWtbTYLKtdUtieRiWf4CqusiVXsUxxrV92xsu",
  "key18": "22amKPw5Ksvubn3deMHfsVFUQ4notK7Nt23dcQa5eCKYizMHKXJvouHsSDzdexZXG4g1CRFpo4hQwQbV12NRoTmU",
  "key19": "2n7NyGZ5AqUmgmVA4PAJ1wX74PUjeDvy9yKkMgwGvSzBgVH7P1rZ9Bhew82aJzJhGHwuzqFk5xXaKrcnFgfkUt24",
  "key20": "2n9kx2UU7AMQsn4hJnoxShV1DLDqNMUJ4RSRiBAT4k8WaiwLF4VyePzEX9XVTdACM8uRtSiVkiZ2gp7DvNZEdZWG",
  "key21": "5WL5ZDazVMkvhqLfqgnWk9sFyaYoKQzE1C5nDNNz9KzyJ87116w2X5iqjCyXXNBU8zC9AGsi2KwiVpxRk3L3d7ho",
  "key22": "4SCB6sfNsNLYbCtRTReYibRuwSL1G1upawZGW1qwjqkZAPudyupSj9guRTybGCbhmFGATb8WHznQdcWyN1GJTHgA",
  "key23": "5e5PXoKHoucAP9pk7Kr7kJsAdqKMJq5XyuzYNqgqfWiJkV2VuRYZ8bzUS6WNm5NwtH8SPHpAJFV53hoQhuKZWB7j",
  "key24": "2scUavZfhc18Z75CHfqaqkMjh7Hia1c9JC2eUgmLSdRjdJCfwN3JvpfvtvnjFnom1S15nirdyikUe2vRQxGdLArj",
  "key25": "21ytmpR5EfmsHZvhPxka5vpcwArqA7SKMG51WZxKhv3SpqUu8igpbTr6FPwSjEDKSw6636MzeyCZqGy68YwPWGeG",
  "key26": "5PhZn7sjHB2QfBaMLkiRVYDV7R4nGgriq13USscJGjtMNQGkpZMYV92esCe4oYfK64KnYMcZA9YRxAWhnWiozg5M",
  "key27": "3XDRGicKHZZ8TjWWv6hMB4oHH97aw7nw3dVJbjzvcY3S1kEbiJzNqmLmQn5bpLx5LFxdY3FFB4t3zDMfaKfxp434",
  "key28": "3MTeJCAWKo2bEaS9Gxb9Ds19AKPXDCpmdbA3Jorbap3XfQA6hv57tiWgJvPYgpuUZFrbyBR7SZSgRTwSwZWLRdMc",
  "key29": "56L4RNQx1WrVGoMyo5ZNe2zWzNdaS3nELy3jFCiTctadH7vkfEU6egMGQniYCh82BsV1uCna6ks87anWiAGYg14A",
  "key30": "4xjdV8sM522uxMvyKdSL65Z7V6Y3dchoEiUVVY1hjVnjyUpkTo1rytbG4KSgjwiEpummS5AyWEHHLp8wMUQQMe9p",
  "key31": "pj41wdDFLNTTreEbjJgSDT6iU4Dz7jvqHixBf5ffeY7BvLt4mJWrEP3FU2p5CWGNkcKpk2kyjNzNDTcvGfwLLgG",
  "key32": "58zwQmsPXs17v8Y1krTWq5n7UHo1kpfXGU3p6CJiYc42VrzEc74Zz4Wg2HzKKKcozAfnB8rvtze7PX7bh9oxaxDr",
  "key33": "5WnCShU7VR6qREw7tQTa1MzSHseSHs9ucBvXryccsbtANieJNRoCnGSZWcMd79TFtHYq6ALu335ELpn1vCrqvwWw",
  "key34": "4xBLC4XtpHvNxi8gKrzCcEvgCvGVdkEQ2933fRh6reqwLhTFyjmFMv177ujRXfhdumicBUXRqNDUF5zNsczQyBd7"
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
