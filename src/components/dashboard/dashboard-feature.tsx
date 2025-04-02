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
    "3xRc6CycVsKaaJtJmYo5jewiXMfLEaUS4A76Mts6wvuevgB9Rmzbe9gb9EjbzHJoivw7ofTS1eRaV9sjiYgiLk7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jf67u6ygVdfehnT4Y9Gonue3k8LnT2PkSNZe7EcCVXbLWziwsdYn3huVdiDeQghmSAef7gNe8AhMKxJDEVK8xh",
  "key1": "5aNbQ9xnc15YYFTd16TgRTvN2c46fiTkjwurkJgSw2EXunJobs8QLPU1H48nQgn4B2Kt5fjBr4vSDiy1n4zQLvKx",
  "key2": "5g3ATcbMBYjqnCrjAsHL3RJXzwCrL1rs4yqS8PV9eD5xmfrhddXgZUmaXZr3XJvmgcLCzkQjV11KQvyxFvFR924q",
  "key3": "zrWLSqyhGVhxK1oSCpvLYGoqt8h6pyCSJZYZiVRUE2r9A2dCY2xsN74XwNDQhPqX5Ahrfn7sJew22A58Hsf3D2d",
  "key4": "561PTVbpUtLXBcQUUN29JzkYn9h2tVUyU2hQoFFxzbG57JR9fpt7kEmMoTZxRhbjeQxMfmaWMxvEQjGFqNaioWbT",
  "key5": "RFHuiWApZLkUmrxYKrzDHj9HwRLaBhPANNyCVKnotGehM61HVjsu5WizJLbabw6U388ajiypGt6cG4wNBkvgSHM",
  "key6": "3VE63Xf7CUyznMFeXkVGFAghHUV76jYNWpfS4Lmu7JxcswZDFQPjivVSnxQS3WV8wAJiioD7VP5WHujZZH4dvJjL",
  "key7": "wtsinkJWMZyvZWXXTRM4mGqrU4sNf5N8hCD7XLW5emwcQmmXaXynUiukfKVopMz1L9WM4eudL7xWyBY8H1nqfz1",
  "key8": "2Ru3YxKoTgyUgxdNk97mngALzYcZgyaAcQiDwEmu7AWoeZck2thN9VYrtEQo641d7MJYuqKJEPYV7VKctJ8xJud1",
  "key9": "4JVe3zvWkC6rX4AAzwbgnnEoFy9HVS7UcthBdG3tye8YHEn8PZAgyEaJpWwhNfE9WHgqvjkkAUub7g1geLBymB56",
  "key10": "2gL242wTRTFtHGZ2gfvoJtnNWW4cuoUjaVrWpRqRSrR4zLdkYJeQXNdngVWnAg9Xv2ZuHrwRkE5RmqosoDZtd76K",
  "key11": "3UUntidXdohWpCEKw9gfUPkcdGTuyCKZCZwkn6bgYbQAE8YKSs4YqBJD1dEnfEFtjgyuAtp1N8VUEfD5MpR8AP2r",
  "key12": "2kmxtVTJ7UTwUopywN4N7RWG6ydekCjeztogobdSPrLxyHuBxwr8dUHvagDTM23fQwXdn7sBRte1JDxzGLKfLh7r",
  "key13": "53PBZCVRTX1GvsZqtmUexEziPvygfw9ZRkveztmg2wbxfMt1vT9bpQ7NvpS5zHKR227SVQMjWjerRvfHxcQpaBT6",
  "key14": "3g8iUjrPBNTitugJ2kY1CKyXvKG6Yhh7uHXRZfEM8XHJe39MXP2nfYq477m3AWGNvCuhmyg6snPfrkzELvX4NirA",
  "key15": "5WtBV19DBiUDfJderuHFhMZ43X54nhgWNjb8Q1qjgAtfBp9hT3vNtjvvSctjSBrE95gC7Kab9ZsogMYMgzKwk9zJ",
  "key16": "2TbyfeUo4WGZgkQFhhdNNDy1QBe4w8wbr35sn56CZDPkPK2fcZuPPyT847E2WBpYMfUyutXbnBaNzjstk9Rwvzzj",
  "key17": "2k6of3dbrchqdAqCybfhJApVdg9Ac59ViJUCJK5y2Kx13XVe8cqdUFDkaRSpMRvG4YUT66Eqs2JoGbTTBLr7NYE9",
  "key18": "3FeEyJopD2gfLUnpu8Uj3GF6QTELHHiqEP9LGuX23hELJAyLNGy9VJnqJvUY25cjfUmR7b6N3ZMqAwrph86AKhQ5",
  "key19": "2q31fZkKPvdfrgoDDKXXWicqoUiGtn32e7T9NDyggxcEXYo2vfqYdN5egn1fiG7sZXNasGutg2yDSTxPdBSUbvLS",
  "key20": "KfGCQPEjAvxXtPZe7g8ogiAqXmtmesTKsh6YStouZug7HygXf9zygzEKJCNP1g8fqWsyE3Cb9Du8ZfA2jhMagCW",
  "key21": "5LNVuuMwEJkSFFBG4upphEcXSV3LR4aG3Abs9V9TC6bpN3Xd92ghPjeM1mcv4RnSLb3XYNxfGCiA4y9AAWp54GjM",
  "key22": "2mteSbHLd6q1xp4kEBXrJDhUCWJF84Cn3CYpFToRcesUFrBZUECLC9gudFoGDnMrCTX5K9BzL5Dnm3YPTfYr1Uen",
  "key23": "5utr3iooPuv7EccPybNw6s5St9pMyL9VQmnTvXvseiGFzn4hDnk9soEPvjKSDCRSBLRcL3pfp2taEkamKJaty4R1",
  "key24": "46a31bVzJTXXTMmKxjZCSZhZZF1Td48Bmtpykz6mpAco8ZKa2SiMSwGzyJ4WhdWrJkTFPkg8GaD81tvka4cJeoUY",
  "key25": "9sXctkMy14UhgRFkUsahSkJybDXqMYXDTBPJrhgQeLxqUdMfD7Bb41ir3wyWN8xTsF1XkXYQb3oBgCc6shPkWkC"
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
