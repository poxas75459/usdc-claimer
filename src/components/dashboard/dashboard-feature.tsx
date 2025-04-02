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
    "VvmYtJvZJfnBL9i7J4kXZ5TAnz4573PL4XCgxMUaHdaauvvrFtETgeAX4dkogAAqEMrk3Vv7aVu7F5eazsSvQCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uXYs7YTt5q24d5JJAWz95JWYqjTpFaF2JsKGXwM1VESQm389Egafu5knmZxmNcYvRshr8GNP2ftAyUMBwYTm82t",
  "key1": "5Xthnar5DWJ1CNcpqNKUr7VjCDa6PbLNjxK1YVy5nFuqPCKT8PAGvGWL1KKZa881kMZrC6R6d7qrfGBfQS9s1FJs",
  "key2": "3bjtkCHzP4pCfR5u2yxJ1gvqbTmKFUYdMTcwxiPfPmnhi6ZgowCmYWtLAhYwJuJExD2iEW3smKdMT7vUmUUN3XfE",
  "key3": "5zvvQ9aSsW8YTThGwCSdZuQ265ffbmNx7wivEZTGxZkKJPdhHhfvWcG3GeZVCZvVpNzLJymscKrTqU6b3MLd7Jih",
  "key4": "28ssuT2nV2XHLRwoDmm9ZCPgHNQZF3DzR2NorCq7WWQFgN1k4LnqmXtLGQifAUdfJtBj1jLAbzNTEWg4SA3xqNmL",
  "key5": "3th1zxX2ipoaZSn3dACmyuJg9EmrJCDtrtpoByShgcG2ELHorFEzjvTPTNBiavQgXpP51Vf43DwceduYztAaNT7n",
  "key6": "2fyeaf7t9z9XxsM7dgyKmLKkSzsVWr7FY7gVTZwxUGQoy6HBkZ9UpbNgqKNXG3uwbZfXQcragVnNJUy5k4qBJEB8",
  "key7": "4FCjbaBESFB8B48kpaqAeRe9EUZVd3ZsEaZtT6FJNtjdZyCiK59yyVXuVVwGXitwXS6r5TCGR2uLSgAG5ABsWtBG",
  "key8": "45XJAPu2fLswzWqqnSQqsseDuuD1T1MSoCUH9LcccLp91Ls3DPUmUUufxekStfLQeU7UHLuT4MSDLViCX3epi2p3",
  "key9": "5jwLGJyNCSGWoXdC1FNkuTHVfuZqH7khUB72SwEXCqwRFakRYv56x95yNeAgx6wuorR7oyK4Qv7SdJfyHTfNBqDV",
  "key10": "5B9J8Txje8Dc1KoDxByPyWunx42TEoxG5VMAXyfF4ThYrfZ6vkABpxtAcFx2RkMTSvJcwmbXGeYbmYkmY83TW6yJ",
  "key11": "61sFjh8smXF2GhfPwPomVqxrhY7oDwoDcxsAbpvCcxTWQLn4vbqFvv1s5VxDjP2DDJtSSB2CbX3zcu8nPiSSuHcx",
  "key12": "6175eZMKJMyP2WXJxz5qjkuuCV8KERhf3fG9VCSVSAuSpLHYdybku9j4q4UaYvNLU2iU9oDYeBK8gmQXFb6rDFAH",
  "key13": "5ehB6KvFQ4mLk5ent16aczZGyz6tSMLBqSgcUssiiJgpGt1JWhB7oUkKGczuw9QrxyD8fvdghaCHPHXycBRk5HJk",
  "key14": "AmeZfqwQ2Shapj5iNQzuLFjS7Csn47Fk6U3EcW74SovkzbJdcXhLk3FzUhWMCXzmgjosdvQbXkYJJhWBU7WfmhL",
  "key15": "3s3tsvQPDiSRh1ethipo6wNrCYjrxGcH4ADwsQ7VavUktcPrSYpa4FmFsLMzqqmGSDpgQTWypgwWhFVXS8v9Ai1B",
  "key16": "3EyBrgKaVZMn8bWLDamCVozjver5octtXdXhieibiwWRKSN9ibA54QQ9ipfVgn294VfKZfUaSepBAD1yEYgACARf",
  "key17": "8SXxNuLjzjU2NuxgLN4Vj6abUNioR83gR4wBPDkKfP9N1QjboMr6PGfYVEz2hVgkpMjNqjcN89WZTXXtVyP9rDU",
  "key18": "31BGaLW3moxz9Yn9QDqcSeEd37KDbUGjx9U41Qqn7tEjvBDUnhqvwA4YAHoCiiGe7Le3PehsXtX7XgjE4hkR13CL",
  "key19": "2rKR4zsLrkkAfctFoGi84xhhwehDjUfZgf7kNKoaEccsWEkWUxyFQtcWcH36qddZVZvFCv5eiYbSa17awXdK3YBz",
  "key20": "2fZzE6xmLN7v3pTQPPJLDWz2RM4PEn1wFNLhrHePXc2sCQv8wE4i7yxmwLjMKXRpSAPhaMsCc2EsTmDh3757MmAf",
  "key21": "2omsD5gNUXJRovKnyFGNwDh1rv8pyY1kgY5G7yerBMFpWtvPxarPnyrgK1fZ6WoSZ2CKt7WgzKUELcq5fSzmeJwd",
  "key22": "1awFPjqrRHnX6mBTHLwcSNJB5eiVuCdVNt92ZP2zTJft7dVVMJ8wPw2ZbG8YWLBsnYgPFq1Zm9RYNWiqfsEW55Q",
  "key23": "2jkdmQHUa9z4tJtCHWLGKVgoSic5GjuByKya8dCqiu4DVuQuqCFFZhXeCRCdxaKPL4PJfJp4ESvYqEZLboNTzMXD",
  "key24": "aNiw9boA9sdJ6QiYtvAcj3ZdbV4t8SLZxZsLKYMXEG7G2gtxzcrdJPUowne4zSNVew85TnEo1HLY2xdcgvNM4Yb",
  "key25": "3rXBX4RXt26MtE33hQqcAGdZB4qrVDSegg6DAgtu3MuGjPeVDozeGaRmSXyfSFJeRyCcNj4rVsWp4H2VfR77Rx6U",
  "key26": "35CeYafajDgxjvwsnHBdNhTZRFAUUMnWcF4BypArUVxFERgw2Rv6KUGv9GyDpkkviBPDtG54ndmGiKJeTb3p2bvf",
  "key27": "4Hz2qJ5Rbd6kWSpmsnSGDiQNKnGk3wMfWfLuRg2WE4BmBtJuMNUcbRKjn9UzUWaFfcUYFCog9YvtPgazjNh2RTvF",
  "key28": "TtdfWMN79XmxJ5U23iYfAM2SPvp2EbYrTJi3kJPT2xzUe9ofpfysocxWTN7jSx3zuHuomifWCP6A6fJvYNQUW6s",
  "key29": "2W14QRaqQF2yE8G5bkd8RE2MMB4SyeUTcVMYdDxvc5UbEzDzswdGJR1DMsaCANxvzu5oP9K4y3rA1Wm4cHzjfzaB",
  "key30": "5DTEjzDsmcoH7BBcJb2TUppXwgJgLJQwimdqgDmiR3bwgmnLEgphouZwaNVmkc8EM48gWUxYYfUc5HTDB71QFXCb"
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
