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
    "RhxqDP7LUuhWBSDNwXA8VR5QxncZusp3SwEJvCa6MG3ZTebxSemr8DpkRJNYjppFfPgnoFGWxaQZpi6JBWohNz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrvY41QrnNuN3G55VBcVhycZ9NcTy4EispPsJuFTVfG6Ly4peQ2qtAxw5XXomfw87vsE4xJjhhHaRRu3CWwn4jN",
  "key1": "5m3wGNnbtMm3PNq1DqTitGSzmeRwbdhFEEHsVtXoSRr6sQ8QjU3R5apvXzyrjNFUVbjUQ3vpByaiWE1hLZAt3HZ4",
  "key2": "KGc7vz2i5YwNZj4MNQLqHuY3LzXDE3mj6CFNg4M3pPLP3hnakWfHz2HXTbCHkgh7J1ZE8Z5fjCoQBHremywsQXM",
  "key3": "3dQhvvQi6e55wg4w1r6eqnuPK5SL2phCwuoZdtk3SxPgFpVHqrND8g7zSE8jN35rTA984Zza1wnTRiPStHYCTy63",
  "key4": "3iVS6ggDSemLEM99b3UVvREUVt9zVL5yKjXdqWkAxVNffJQYJbptkSQUXPHzShyvgn5ELfd1fA3ZHYD1ji7DUwcg",
  "key5": "y5dxpVjByEQBgM7kV3rmRJy6PHUsCjZFTPnJvMeCvwbziMAMHNqTE1FZYj2bNJLKX1RkanCm7NkDJw2n9ZS4mAX",
  "key6": "3b8KNhQ83UfEh7d5YPVEzu3kp7Yy6WRN3kCVbzLRJqj8XdRUG6oJiVgkcfDLrYgEkp4Rw53dWAifuyyRAdWKwPsS",
  "key7": "dwY5XC1nm2EnSk6fQJbnyagpccBjBDgFW5xgYkQT9n6ozvmCwYtXSK3rsh6drWnVKGBMQibgpR41rsK1bS8DwuK",
  "key8": "4HhaxZX2NcbaxDyAB7V2UD4wbe96KNnVEoeNKmX5n4FiCrAxJ5u7sLPg4CKq5q148io28MNJuY575mxUttoh6kQ1",
  "key9": "2oVe6BkFtyHx5dfAxgUPNvbW9Ri7PnmeuG3xY11kouhX5MyMpkusNicNGZKWWVNuA5EUx9bfoX4rJnjTehWaBSJG",
  "key10": "4nant734TYesBChjSX3M2aFRuEExRNmD8L7U6zL2DtrwwNem1rVFNx6RAHkN3dsqkz5Jzt5HWv4u1XYC2qsW4AYo",
  "key11": "22ZCq4jeB1GvaXwjpV9y76u4E3YBBGY2bzeuSVM198EYYrVjf6sCYXnTDsQEsTgqbvobGfxtcX6qPCWTNpiJYMwn",
  "key12": "TjYbmfNsZVgw8LnLWPtznrm4Mv6yjgbQ752Ln1FPn9nMrK4P1FbZTP5htWMPgppJfHBLQGJJe7xzAwuVmGv8uTP",
  "key13": "29WGhKGdJzoSdQKMxdHj1fHQBNpXnHWs4FCMB8cg8aWue4jAK4mogh8w535NiZrm85zdPvGevCp9Chg5zfSR7nXX",
  "key14": "5yVegMuDZUXwDM4ga1FemkhAqS7sFRyTUiYomMgy9VMrswVwcphUvRXm2urHqpi2uvyZ3KZWuzWycmNC19qegugo",
  "key15": "37qDhB5eoe5wgUcYUsGRqfTpGgD7Vyrd6WysWTiZ5jtvEj6Ldc8kCpDC3JLPwSrvT8DcFxJXywXyHPyukwYjWYLj",
  "key16": "55TqYmvAodR1qmpfcDbwEWavXhaPmvmWzLJ3q1nkb2rfHUvhhSMJyUzZN9wiZRLmmmKgVshtNpuhnmvborT19sAE",
  "key17": "2ek9YHatNqG3FhoeiddPgSZXBTxWdMNtojSmcdVAV8A8gWQ5v678btSZGcSpzMisSL3Uqe6yk4LTZJEQwQ6RU1Qb",
  "key18": "5y71r78SRLzWDoBAMBJvtCCmze49WWPGpGXbZ9YTCWUgCL4NwXWSYMPmmtXBouyDG7D9fKVuLLr2gytDraJy7XBe",
  "key19": "4jTmvD3h1ENa178g14UbcF1KKW3p9XRUyPp7vj4rDtEy5uwMqDAp1pdPmCQSRiy6dTXKE3n3Fwcje8ENh1Afs8p5",
  "key20": "2PHgboV9XE5fKz1T2F7PMVx8r3qvhFNQnUB421zkon9hExfyjTkDfne9NwvJcfHu3ofvV2vQvPLDaPtS5G7NY4d5",
  "key21": "cSLkHX65LsRC7fKxbQPMLwYtqkW5wGUUKiYtgrdXkC6F9gS2z6F4PGJLZmcRFPDGL6YWTTHNV72P9dF28osNa3S",
  "key22": "G9kbz87P2UdVbux4mBSNfwL8JHMnVQn8MScU5jXVBE5VQJPhWwnsikP44ZHfxSTTLAQiDbrfXdVUkreETKqfVv4",
  "key23": "4BhjM74Fxn2kvzf3YzpmPehrf7Y8HMt7mPwtu3WDCAP8wKebPdfD4Ki6gDif65za2YfHyuDjgsyxrVZyjWU9wUUs",
  "key24": "2QbT8AQHbv2ghQMkb811vPExV3cgL4er3pWq5n4cEPukRhMEdYd4wSZiFw3FKhttcC2YXjHKNzVi6JJJjQi79H89",
  "key25": "4LbDBzyPuz4Jxpo1FNRrSgYxYTfCqkLVNFrMPhdkaMEimqbqAhRzvR9bsiy5inBBxbv61UGbkGk4pbsjVeGWFDKw",
  "key26": "5WB9AK4ubK2ExRjfEmRejveQLtw2yxuDEZn237PHWbomzjP1qmq4xyTvkh1BpCe434uY3ZQFtvB76Wi8xokLwxfF",
  "key27": "pXA1fThCVNQcCRnov6e3bR5g28k5AtyHRiYRU3BfmQ3aU9FUTTxH7Ti7DQJsN8qhnFESPZMGrsSRZ53xt5g6JAq",
  "key28": "4Kg1N9heS5tH1AMeW8rFWBF3889qD5PX34d4U7HKi4cjtxSRtrn3yvy6qQYrvh2Wtx13f3qA146WUFTTYDin5HrS",
  "key29": "4v3PZde8Z2XovNB9KtXSC6VbUrExreui5XZg4KcLfsXY7NTDbkiMUP3RycQq4z4j8bfWvr7hNKUZNxmLNECXHLBY",
  "key30": "4GnonmNXoyeePL1WPCGCfF82Zma6a5NBLTwbrJYLXKETpvLAGrGnjUUoLTrEgb5r3c3hsgNrjH7nNsCp2PQcMuuf",
  "key31": "2mm8Xabsdcm9mujCv4CFicCX39tw4MqSszgpPvvvasWfwfPSbo3mNynwQSE1M7LynJeeN5D61kdb233X97KxB9QZ",
  "key32": "46ZkfjigCbKujP8q1b892QncUX4vp4hkEufSeJWspgjaZsrakLHsmPetqJyJDTBrpJcorPZfU1cDbeGBqQs8fzhK",
  "key33": "33TciMzp9ECQ3SKUeXwGQBmdG8gnZ9SUBViW6AZPf7g9E2DTYocE3A56bzhNGE2cHCZya4a3AsWMEWLixnGnjJuq",
  "key34": "3QXBDXMoGktTuUkdPKDFZ2a5384w6KMbNFkZ8MXz7xbKMWaTgnCu6ihiXTKVpoiFXnKQEBjGxGzrGA94rE3umWdB",
  "key35": "5QiicVE7ELYFNFY8dWxdySJjmyhTYCetZNPABLJhav4EWAyFboXutrpCKLvcrndJUvNHLhGpzK1jGsZ2GW8SsL9t",
  "key36": "FFtxT4s2ZURLZYw91XZjapp6jCMZ8wW6J5yYGULX7Q3AF5sWsKFDTNWMgA39L9yaSDFHZZdvf2Gw3b95aTBWbib",
  "key37": "4246ekdgYqdjYwYVUGPN7EnEP32VzSM2erpNRn8gacCUporaXUqpCbwsyCp7p1pMx945512rrhxiKgUkVy8G9t8m",
  "key38": "22sNSMWorpzzfLJaRCF3v3T7kZdzeD4K71Qtb59JF761vXhEMJmJwcb4Jq2qiZ1f3xWfWwMb7uBr8aU5aZbkLHbr",
  "key39": "1EB2VevKHpgn4JVcbyP9VjxdSHTabpfNktSTZq4PnEtdFXhtP4u2cSRfpxYAoWrfkw2bYQiZq3aGGRz3j7KQ27v",
  "key40": "5XZ3BjLRgnE3eE2YtbUdYochz5knj17TqbpAwiQgB3rUFPFjt84QaQdMm7mxiBWWv291bXiS4RaxRQem1qoibEJn",
  "key41": "3j8TkSmseD6TdkyBdJrasmgTxHPWoeSBWut5JtTBYdbXusutdqFK9CZgtsdXNPkK3Z5rDUC1RxuG4B97VP3Bn5Ls",
  "key42": "3sZGAtmvWZRyko2F71JUy45ibWiR76JqqdirRHoKJ9pdHEwJbFNci5ca8LqaipoV8nS42uNHU3sH5W4kXe1HCH5d",
  "key43": "57ofE9b5zdsZjj6m6bbsoJjgDvYfQkLgdkpgNVRwfChrdhnZGGQLEGdomdy1tWrT4GpAMvZc3MiuE7de4BKxeDVs",
  "key44": "3M2gs42dwgJzaNFz9X7hAYj1CvaqiePx8Fr2hjcQAdBrLRPAzgpmB2xpMbVYReVmjEUbEeUrXSD4B6eZsRaZKUFf",
  "key45": "32yhy2zFRbzjQaVmU56KiQnjWUDGTpmWtonm16zhNNRYcycGmnTVzKj4djub8ijvQGQ8h8X5bwQUJwXJYaRV2cif",
  "key46": "tKtmjScEYTf6Bofff4wjCA2pkobDAXkKsh8mwPCfdqKfvNxQbd9om9te4QV1BGPF9xneUjvsp3QqwE9Fka52gkG"
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
