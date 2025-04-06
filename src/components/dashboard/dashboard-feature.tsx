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
    "4xikKuVjgKMVtUtxCTVhmpiFRQZc7KFSCVFUfHwJ4RWjmMMCYiPBBh34JhbV9rqBoDUgMWPa5iNceiwwLZSQdBZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36JSmHKrNUX63vm65ztBCNvjvcexGqw9bdRzS4H4UZwaEACL26exKPUcUf4inpLt4EfQnNZTenJken54bP71EnPx",
  "key1": "4NtwxGqD62spNAsrqnYPSYtWX76F5MaDAQD2eH6vtRrVuDY1cjuSpyu6NV9xQjkTZDe83qQffFYUs4L3oSV5VXa5",
  "key2": "5XsCnwQ4VVzdjmabsHZfMAhCfuvK7WrWE8y3i3pongLmuFtdKr3Pah6MpFuZG5xG3WJubaXEYEZ9t8r4kHz7yQmf",
  "key3": "4TH1PizbxfVnEQh9vuZwQkwbW5wzkoKyaZZzHorv1NbZnjh2Wd1Be4SvgX1samXSv1CCwPsUxCapDoDotQA15d6w",
  "key4": "32mwdGhkCKupochStEnRg1TL79biNtg6jd1DSWaqKBRUUWVgEfnko1dJJUFXSF7mU4Br4YU59C8UoaMCrXdZyWP8",
  "key5": "SNdedbqF48YeAqxzAPXH2DVdzYpMAtYuxRyeyBcTsB4rauby84y9gyaVipngQfMhsC5vkHB3QfuGicqmdx9amRD",
  "key6": "D41Rq6B7JWmZFARsZXWgRzijsEzmNitiDdaG5E65LaymwC9oidGxPH16G1GzcndmZfM1pUZY61S4pHGhWAP1go7",
  "key7": "sgVUJnZrQGnyi1DnyNuAjwrT54CbCrG1Znv23yq9R2MCyZwZuUajfTSoszS91wCKSFc8bvVuERaXoDwvYR2bbhw",
  "key8": "26RjeWNSFr91mP2iVgSJfvGksgmE77KFmETCs6pZpgtgBoTzXwMd4obmDtKsxoFgF6sScvWxMP4vMkqqBNcEJtzh",
  "key9": "21QeE7MJsfddgtuMw1BWgBLBQLtDYXB6hR9t9vzsp9oFT9uxNba3QNhbT4M8Ujvfm3Ecb94ycMJwxxPhQR3uThgE",
  "key10": "4cfL9XGUdMYzdPmN2MdfGxSy3Df8gtPPKVS7FKhpBPfVWE1A5NSi28qZDVgpEwN5rA9aFxk3Yy1nmq7Ee683ccZU",
  "key11": "3nAfAXawP81dT3RndLU7qEZg4UMGo17yeaiTeUuVzQSMwQWBeQwFvSp5zyEU3GjvcwCvdXMa5GjbjuZsEYVeknSn",
  "key12": "4MwYQVs3n3oF2y9fKhmfddFyoMQPvfvUozaVL9zL19vmbKF9PaJEpXp33Gc5mgSj9xFPc6iWoEsubW3HGd5HGM98",
  "key13": "2U7y3PUurByt71u771y4CAzw573cUFGnAwBCTjTa6NA56k3SULVyr6wmNFopEfUewhQQnbiREd3VzNEcm22apbfU",
  "key14": "VN7ARbEfpiu9vhacgWAZUnsJyVw7KsnFBTPAx13p1LvtbV3WyKUQDWQy3NA9rRHmMdH1e5kG741sAeqpVVq9pKW",
  "key15": "5eNPw63Chnm8iAKu3HTt8Z9SVbnUowkAUsgwgvRY3ZeGtbFjTYhFWoE4rbrSX7Z8hpqgiT3j6JvnWg9DGZ7ezRUF",
  "key16": "5pUCYqf1CsBsqjvtWZXPhGugPZJGWsGbBeppfWqqZpuZdD5b9VgvpQAP9MyaYNhV9YhNdBSxBruoqExEPmhCC5Ev",
  "key17": "ugQoxEEiU961TQ1ZstBUDAh4YW93TWyuEghSC3RrTBs4DRnCo2qCZ7dW6mXPYjgBvMqoLVcefsLyFKRrVdfyLrF",
  "key18": "4JLNBCBcHV1kfPCu4dSbiEP7WkeAh1StXFBEwQSqzAdfTjnm1rSGo3wE4iyqtWmfqAQpoLvQ2agWWyrJW2vksGyC",
  "key19": "4RfB2xwfeiHZXzytQdvRVwhBP2KtyMoZzc2FEnw7enX6Eyqo3oUkPz5Lm9QHKoWx8DqwRXMPEKxFo3BDM46Q5ZnJ",
  "key20": "5P4Fdr1nLp94fmMb5ndroqk9CyPxUcM7VsidipS777qQnHHfsbfnqfT1C4Szr7CtLp4WaG3QqoVWxsiqxh4Bv21i",
  "key21": "2gSuiaB5J6xifK6v7APFy8USz7vaSVxcjMTMEUhnnQG2yXxEwf4DzSdZM235YqAyrFtULKE5JVLE8jX6XgDdxysT",
  "key22": "PBPh8ukk4J2DhzKubeNZMdyureipikHM4DrAAXb5F8c5nLWdC3baPCYLW9j4jZ4mEuUzL1B35FXQnjrZQDX5jis",
  "key23": "3wb3CFSv9BFBVWHkzt8MoZ4RJKxajLgjx5kEEqYxNk3kMiSF3cv1VTq2wdgZjwxd87vgyhC81DFTJ21ootjxtVPc",
  "key24": "28eevDch4bhfReoHYEGGkSx9X1RvuiaArXQ6PXg5PGJnfW1zv54Wg1qjEthZdpsKewUaEnmUjj1RgddgCMPV2vnX",
  "key25": "4EXoa3RdfB8kPekZtug6VcLybhSgsm9aPTmTGsb43wHwPWPNEaEyh2ndX8tzoJt9dmH48qbxuNGcLmY3j3Yp6PMt",
  "key26": "58tLmviX6C6rEgWTV7ne89WDP4tH2RnjmXMR6rQrjGuRB18Wds3Hy4qbUxSn7rCKqEX9PFc71DUChnhMEo58YDah",
  "key27": "4kbeypjzmcv6TxSkrEVqoPCBhQzoXUhPdGPCf8aWdosh8qaFq3GEGBzYYZ2TSdt2fS7Qyi7kiHDFRVZBDz6tF2Ab",
  "key28": "46Am9iHBUkoQwAYjpJfEoCZg9yZoui2ToniYhCEGgnEfyA84D9hg7CkjAiZgNuijue2tCmx3U79TQmEydYd2tu4b",
  "key29": "3G8QNzG8TRAzstB3XeXsD9WULhukBkseuEpdzURUPzaWY4jtGjMG3uuz7tdtyivwSzFmhrHag9oAq2CKwWWfgzne"
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
