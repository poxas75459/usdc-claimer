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
    "33FvJMVJBQF5ePyHQSfMgYf3mCqXajGPCSgWYDCUgHNhvD3uNwCh7putT99VG1Wi9gw3VNiYXtCXdyPhEmamnTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pAwU6sb7VSGEopbHdMvE587VvipGCTQoKKg2QtUxn3ffYoDFbsiSzKwt9oz3REHZWPZJg7udu9waH5MAR1nyyCX",
  "key1": "5m1BvfA8QDsCi8Z1Boy3xSLUsLib8WTCkLV2woLahYYVecEASDx6HC7Ld99KWmMKy7yTQKMc2YVwk7MrCzNYQ4HT",
  "key2": "5K7FZJdnL5cq5ntfxndYBKe4UWzU7ite6nYSqbAKHEbxcirFPxjy12TygnSjqjLgp2p3xCx8afQfrNRCjnBPHwSv",
  "key3": "3C42TP5tYJiS5qNTcehJeVxFQvKLrwLkzrK8RqPmdTziJWENcAedvVWhB2MoGJzhNuaVC8K2urxrFLF7WT2B8bCq",
  "key4": "48S56wBh2cojnBFNuuqp7cVtNAUQfFMi9B4H25Th6F9JoU7wNcihnLtNA4ChFEmGkwYrWvWxG2HW6qnR11J58VVZ",
  "key5": "4FEqoduKFhekCRyYRSFukmtH6Rxq3W1qrGu49Gr8JkxNsrpGTidERxVLZBBSGqNhGgkbUMTjt3nmfaTn8Hzwd6pT",
  "key6": "5LbBYw1JLZm1DJGB4EQEAkXVcyMfjpzMqyQL4w1Lct5z6whi3CJP1Rnbmab78xGELdvj7D68pdNqScDYNK867HZ8",
  "key7": "2gJy28Lb6dgYRfmkkUKKVa4yffYyVVedtdzq2o2X3a64vxhkkeFTLfrVf4KRR7Esgm8dNTm9VJhW5n6jJf7WnNrT",
  "key8": "2w7smwdgtXssSk4u18Df8unoT6Wh2CJb2rVqKbv95MjxAfpPCgphS9n8YPMB4gFv4HSqzspEmb3GVCUKhPXpfKkW",
  "key9": "2CRpkfAxxrmDVZDCzo8wmridBnj5c1zmQ2iGVuBZWSGmsdWr8DmJrbp2AEvCp5DYKoHtGV7T2BMXbsPXwqWLzgh5",
  "key10": "3DuURWnPoYukzLGsMMtoNEWFYs4j4fw1toDbgvTnpRBy3z1NG36mVZ9FjJ2a2sHKq5pCoFLcnoVkEu9u2aA2WMzd",
  "key11": "2fU9sifjsjin4A9LhhoRg5y1zE5bNJHWWwxGqQFHaRi7JVTnau64zR4ucpFfFbUSRgBytDSnmoAYVPywFKvigNhQ",
  "key12": "5werVSaiDLZqqoYZmyfoh28QY1VxK8Q6SevL9FT4FVCE6BG1eVceqe1F7otVb9rKThoYL8sa2qwFA3oR8JDZZ5Nk",
  "key13": "3HRi2BMwNdd3AL2UHUbr8BZ9FY9pzztSQ7oTiU6xQpm7JyU7bepFsJoPtKrQNkLDSSwqUEJ28zEsRLDucg2i9ek6",
  "key14": "48r1i5EhitQdWmDeUot3W8u78Jzf5VvnzNFVFn1GqT9rDC8S2GSmpTnh6XgL9nfMnj75gf5T3JKbCMGcL6FQEjEA",
  "key15": "5kg57TX83gLK6yPYu2qVyDHxDGi2W6p9wGMZn74HKZiSw2p3WgR76gNpL8DG5kGdvGPyVjk116c6MNhY9TGtGhi7",
  "key16": "2VLoVY5f8bHJeNQ5CpKcg1ENxRpJ1uyrFKk97W5SMiKfJG3FpCRd9Di5qeRnHyCdPVcpzEWstGcrJYsWUfeLtrG2",
  "key17": "46Xx3zv2MQFHH1qHLpZmXk1pziywi4Pf2AGwSF8YwKnMiiTXdrMU4WjNkc7kPkTrQAXqaZvBqHdmG9EQMu2Bz73R",
  "key18": "5G8Kg4AqrymY2MVRVGeHatxT9wwPRy5YcCQcKFqMyAQLy8M8x5pqygwJ9T37kwckcZmeYqDWJBbRojNyfiHnLNF3",
  "key19": "3CxqYgRspUrwvDu69J6p6zPBox138bqPMB9S2xcYgjW2xB3JcahF7xqB5JjRWt8oQ2cwMoSLjKJfthY3Pgz68maB",
  "key20": "2uxBjj1YJ81xSPCC6USjPVrgRxMSGvDaenF2JzQPQS8X1gC2MM4Eh68FhLiKTEMQEmMCrxBD4ZRMHpgvu5w17VQq",
  "key21": "2CYGbBP7w1kbeXpWr8SiSLkPvh2NccDLfuEbrvwaD6DoSb3yMrftUzVT8LHdQnBLvFP8tKrULQHQibMtPhcGzrSj",
  "key22": "5fCrqpNe9QZ7sR1PHubRZfYjeS59Ek87SZ7RUr3K8dkvwmi8KY3Xme4rLZq682xYpoQ2z15wSbVNr4NNSbokRiE9",
  "key23": "5pDd3ziZGqvCkn9ZmAfF3ab3SbskgEmovjBDXxhRmEiAVPqTXaRp7fRaFauKvjdiRPZhrTxyEJ4vo2icdF6u1seC",
  "key24": "5LnUNUeQNzir1Mcznz32Vt9gAAxPG1Qa11MMsQqho4z4HAr2ajwXFdR2BTcqVNnRS3CWh6CZQZntQpgTmNeXy8ge",
  "key25": "3f92sAUj1QRcwiC6os2S9UnF8EtqSzfbzd7FVFwyZ7cjZNYXhuUstBhCgHXSUKF891paUrfxNY8zGrJC4Z9gjSso",
  "key26": "4uBNouoHK3zZpaSyF38PwcZVAELWix93wScBR9d4NGdqdqCC6mqu8MbhwxcEgdsKGrMR9F1rDhyQRR3EkWymTgRw",
  "key27": "3WcS34b4HMULAQ4hoQuzyhp8mL7g7W38PzPFY7cU3VxAzo4B4TyoJUCsk2xV1KHD2WgAUVbyzA3rgcy5dWCM7z7U",
  "key28": "445bzKuKftQ2kvRJpC64EB1ZedaVPiWwQueCBEh3s87orCnrufAb8Rwmep6iAXdQcvAiEvuiqE6S92aoBFaHWuZ7",
  "key29": "2xBvxyRsYF9Ebkpzh1Dsvc7CU1gZwBBqRftV1CRjSqWPL8D1dYCNAn1miKrebj3qGap6twKpYF9MzJ2LPWtwLF9f",
  "key30": "287pz42EnAkprxpgU6HytxKxAw1XaJfpdQmtNmLgTqiEwFxMcaeCMS18FFGLroYnRj79QKV7ZZRYXVeapqnc6MZy",
  "key31": "28SuhBqHV6LQwFaevexgGmd5Caj9jJrtiX4MBGUHUmriJrBpewHX275qi6xwXb6qcAtyU8aLyakty6xcgLtdZd83"
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
