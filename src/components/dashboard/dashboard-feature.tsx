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
    "3Dn7FyutzdTfGf9FcVLAc5vnMeo5jHhRABu283wfntmY8hvgmwMpdaLS4HJbf2teWHzChRq8vrnjbnAKyWvXTEd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R12nszwgeA9xN6NrV55gqEeevvnXrZhBMwDbqggsP43wkHv1A2wdfKgDuV6T1rrypnULHVUm3aNbLvBuB4v7ZnD",
  "key1": "5MsqGq98KGm6MtLNiuTm2dSX9qVzPNwD9b6BY5ADA3baFiDZC7Nrh9vpNQmnBpnXo3fCaMVvYDMAaJRudMs2aUCR",
  "key2": "yq58QrPK9rSpGNz7xqbgnjkDU5HYTx1HjHaoYoX7usTWsUN8Pp81z753y9g6LNErx8aAFiF3WudNLJsnyn3zB2k",
  "key3": "3pe4664iVi1xmkT5tkvAVbBgmgJQuQ4wanN3SkmYXTAJ8FmptFPTrM3cDXkcfKQhUTWBF7sYrvp2uY7Pm6nbtPLa",
  "key4": "xZWZiV3WA2Bu8zMvu1WGMnNJXER1ccp45B5JhBPm9qkexgjRE8KMYKtPhktoJ9Amv6bweTgJ2DzS9bk6P4UVLmP",
  "key5": "3rv26Qm6fKahMo2EPPdQxZQ1UBSCk24g3RNEMN8ZgPJxq5JpfajA9HCc7NrQoDhhAw4SY97e2z1UX8pjVCkg7mXK",
  "key6": "kHLdQU1JYdV4AnXHHirtm2dJL7eGAc81frzoHZNQ3oTyqckeJuuRfioyGFmbAGNjeQUxMJEmsx446Gk48R1c5iq",
  "key7": "voXTieFQsqa5upYGrgiQTV4fZsRw558Qj2ayBXc5jSbHUkc66sDcRtXMZw5rC5AoGCZkZrBFt1vurKeh3gSX2PX",
  "key8": "5dPyszWpQVFbspNiYjMuvSXNXiGbXSuC75ahRrV2ApQPaSWzyEBMeatWEQzVtSvpFs5nq8GyQwML5wHZ6bNtcm1y",
  "key9": "4P91RNAgeHMHEHnFxZ6WJWZuFodmSosjTNFs85ESRi4NeHb9Zaakv8RSzaLN7QRrbFXSCdZobnqDPfi1Y115o1jk",
  "key10": "5bhvEeYRxgav4R4iK6e78fyoMgka2Lh8XkufCiCdw2y8nq3wsc1pR5rKpmhKdDkLxuM3tjS7XezNKWzNhg6q4Emg",
  "key11": "2EgjqCzk2i44DvvAokx81bckyFuMUyyrub2PRvspqDwN3C6gPua5k3T4pBTDbC1ixzbJG7HUWGMjYunKVbPh9BiH",
  "key12": "4E2KtDDh6Kx5c3uJ9zHN3uxhG9W4cEayEasdvvf4LZsc1CRrgSy4kUGunknUyr8brDvChxRGitFkK7eQ4VfawuYk",
  "key13": "62xQEmavx9EkGd5USya4RiUxreMkULATboBXvKroT5gJKYHRg5nz4DARYCiHMwd1k4YH1YUefHdjwWPqjmK1Hfrf",
  "key14": "ke6132nJiup5kXvA55jeUzNxxf1KbnzMeZZeT16MA3WKYko7NqB6xnMsyCTSeJqjAodbZXjjzgig8HCYEV58ALD",
  "key15": "41v3v7dSEE5K9TytYnwGuY2VvM37TTX9TU6AF6ZZX8gV2Ycko1NapaqK2VH9wb3urTTA84NFJB8XZxtymA5v7yJe",
  "key16": "Re3XPPFZy9RSPr12noA7VnXNbx49p4tVoTm1q1phvV9Vd4Qs1RwjrvY11v3TnM6Q4JfqFgZ24B3XAh4ytgD2oj5",
  "key17": "d237PbfjwTtTTxyZ4kkxtM5Djpvi9xyVr8sipjvpYruu6QrFGcZ2UeqYZE9fzn4gyuFsqqEpXUjRNm8Sv3Gpy4r",
  "key18": "5bBSUcRsqKcy4Wmie7gJEoUuT9A8kSGc6LQ1rVm4B4kobf12DXJpj6zqMBWjsypn7hTZPymjTgbhZ2UZ2LC2nBNQ",
  "key19": "uJPXBdbozZehXuqrH2x9LPFTRXap2cYrL7xVGuF6YGvfPzg6jZYr6KyVBKuTyPzUiCYWfn55FE2mTwpnKiXHCjb",
  "key20": "5EZE5e3GGrb2JtfDgn8BVK8xPrGCeB342RDVJLfL6PEEiouYLxgqVVH2d1fscygiPZkWgDFDdczRSf7HfoL5FBTw",
  "key21": "bfp8gdGGWUKDTqDPPYLZCCq2D7Dw62GAMUC5DUA6asxpX8FHrsPkr1AiTLQZ6qDr5MZT2hq3RTbtX63E3KGtoq6",
  "key22": "2Lpuq8QJXpZeTYa2eE4mEej7RADPFcC6c6hoRW5R9cfbicXLP3HbCtWnyWnXTRiaNDjUVGsbt4U59VhCkTSvMZub",
  "key23": "4buRgxTt3ZnzrCQqG5sz9SPGYUX8VJA2cb97fusT1siN1GVC2cCn1XNENMBRg6F41qyMS1FhnRtWx5akqDygesPU",
  "key24": "3mmK2MAGfjHnQhe5NmobaM5rnjA1kVUE7k5bpV6aqNkWLjaNeTNfDDwa3ZFThMs61mxzd4NG1iLdpsVDudmNKLb7",
  "key25": "5yWgx4D5RUQpweDu3W5EfdFk7hDEzVoTkBrXSVFQUnR93Fj2HFtN6QMsRRBVZvCwUJVY29YkcFLhvRv9Xouuvtda",
  "key26": "53icTYstZuMwGDzadhzYyXtCPH8x339oYnTrFbPDRncZPREv2R33Xu3s4QWcnViwMuJNHZoaEpCRVw9XTzy5D281",
  "key27": "5tvAgmuY44v3kyTC7FzdriZZMqdipaaidfVxup6dxTo24kp1F8b5agjmdVS6Lx1wacngyey9QCbeZ4Xm1oDdt4vc"
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
