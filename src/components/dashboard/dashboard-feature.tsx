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
    "ASszMJe4KUz5efsgfJ34FPQMBxCEUq69zDpNHTfQ9xHgxxhkoP1YztXmk6CjorC2XrY1oSg9H129rGbVFoeNsXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCykau2SrGuXpMkt4aSoaey2g8XH5LzpbxdbgYVL8qWXdmkdE9wKd2wM8Yavu91RqgXA7RD2A87FNafVAhoURhb",
  "key1": "4t1cpJ7tH8y83WziBakkFsbFB1mUjNwSAbnEyvof1884nGKoBVY4wsoJGvS6H7LUaE1sLk1iJpTbqh1ckZSEAVG1",
  "key2": "3JE5ud1LwK6wJFFJzzScuFvpUuGc8BZnGhqaZWXtEk8QEhCGV8EyUaXBztaPqkyYoW2cwZnyqPapuA2Ka2TEJzhD",
  "key3": "4vhKqnQ975879p1qp2hktwhLWRwasJCFxCKP29UKqUPGJVBdBNrgbWf57ibXMZTCJ8zADhSBkXYqrM3sg8rTHJGj",
  "key4": "2yCHbhVLUjFzTRgn5iBpzpMLvVLMtKpG754gs6PREQjKr6cyfsujdEMJc1Zm7bXrH4oJrwWwRmztyJa9yHMD3rkq",
  "key5": "Sb9v2zHw2RkkqJ4MBsdjPBx9Vy6rK6p38h8PukUJtGe7hUkm1AcUexDVXTL6VcmPQqL2GaDLiDvhuDo8oWQb6DL",
  "key6": "3cSbVN3vnuUPAb2b5bkbFrEMdfeNBBQ1tTFiTWDj4wpNoVZ6mUTosDtzFeBcWmPuw8hP3tfdM9StKzcZNqzGxaJY",
  "key7": "3a33FahHLQq5knckhFpHRRLY2W4G7cYNy4gr9SimFy21JBKEbgcUiGcsTQLHiejNPL1ZL76NvyjjWWxXGCPJ6WGL",
  "key8": "3hzw1qa9amcmUNCiMuAxPE1KFSmq8uX7iJEGGnMPjMLqXo3zsDG74k6kZazDQuse8ST8phf3v4q342UXPj1Skyrj",
  "key9": "4uNSNxw8qPMud87ANZp4fV24xabtcnyidBF6CDXEYdqy329EQcVG4V9jyA66bPuzi3s5FsvhTjhzzsmDSmNteEq1",
  "key10": "2xLAgyoCP1UaS8bCCLhxZz33t9AJa9FPFr6sRoeSbhVXhUP3EYMnGDZXU1CrBc3A3VCttxrcvH44Qdx8oeV6MSAt",
  "key11": "4ZKFHmhHK3jji5qWA67XkXTMvgr278EEZtfuZzPnbNZYW4ex9b34apFbE8dpLoRGWNBRFffhbpu92dZUX4HjBoD7",
  "key12": "cK6ZAdfRbkmg4eZypWMF5SR7rvPTsgjW7DMxNJkQSfQGUec2kn1vUscFJtKjCY82yMw9QJihh8VG8YXwqbZs9vr",
  "key13": "4Eus6uFkTnvWw4RjLbFzSEMnMYK5L7mg9GkDDPKtd82vxkgAzynMjekvQj77K6HxVhfJH26LPTKSRTStVgKfwsiQ",
  "key14": "43wmKb9k8NEdZKrr1zwhfHygwj587RuFz6mvTcRiFTDF7yJsKKpMHfuCx9PEQuYjoNV3yaZHdnxsWgerUg8REcdd",
  "key15": "2iYcKNF4tGeaLdtcjMa7XMhyN8NzPzEg5UmZ8mvVykegjtoiRSmz3RUQGUkWmFgYqihMEPQMbBScZqjst7tWF9qH",
  "key16": "VV6BRUoRgJLPg2aNCc6LcxkqibN2AsPuhLkybXvcGt8kULHUfWb6AwBJnkd8qCnR7U9KhPUXoxhtb3se8fL9ajK",
  "key17": "3dCSk3rmUL45BuVfrE4eueZNGCsdCqDNgzXhCxCGW1fkHszP9kwzFgrJGBuMkNUQSNnyB9gVcd1yyRtg3gta5FxR",
  "key18": "rfbmyEio1Fi9rHb4Sde9fBYpxVUTtjxmSGE92L3Ghx3e79b9E6MCvKYEh1Bok4cbE3yMoGmfQziyUVePUaxK9U7",
  "key19": "5TDN7M13vjmZtk8Na8T9XGSMoDuFgzVnWcmtPYv55cSCmkNv5E6pgoQRMxhrZdeZy2MQkd5A2Py4oYrUzLNj7Prz",
  "key20": "5FVyPiL5ahiLFsq7vLRC7mLTPToPYeBZUQoctNDEsEbXwwJuWup3RQ8jAicD2taaJrhC1q2v95uLVYoqKh1ypTF3",
  "key21": "9PxySCXe4qh1FVS3ACLgy8yrHbEq7LsDRpp44wJ7q49ipNPy8YTE61vpDgrEjKmKvRXGpYwurQrN6RJUrHsg9aR",
  "key22": "8r61KMYqQ5HeQyJNwVrCcMnnmrybhCh8wtr6CC5R1Gd4bpw2WLg3qCM6NtkqUcqDGMMeCcxb9NNPwS9153BZ4Y3",
  "key23": "5HLzo2QVCaUi9nm5d2BYQjEycCN8isLebwu36ERBgfHh4NPnHZqfvFCUBBcD7Wp8k8vsaz19oeB9oHqyqu4skJfw",
  "key24": "2DSCT66c7KwN7QETVg1fPpcftyu2xRSdHW8wYVmaakdaZ25UbSbMCszH6tnXEpfokZBZc9jSVrTqBpoYDxS2gpuo",
  "key25": "ygff5gLwfuBcVJxsYzsjwaJjMLnfQieiZwitqGVAggTi66eqiX7UPwNGWunv2s9ictbrGYjDZg9SuB8oYbyFX2p",
  "key26": "3gzznG6ipKF6azNDsY3R6kk1fSuYArJcviHrJa9yHyu2XcWUZY9wHvHXtgxarM46hctDtu1cc6Z89y1CxGhn4TF9",
  "key27": "4wjGzRqBgyQtbcLHxdYGsZboovUirotm1uXdhEinHoiuudmiJEg5ym9uwgra6iwWH73CfyTBBvUyudK4zK2hqjLm",
  "key28": "uDGYR7JzcLAStca2bmupHrTLDMa4MfvDECKEnEjEAE4LBYeCJyN1J3HHFL8r36iB4TGfddyaybucZyd3aGuoEMK"
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
