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
    "38vRASuhdZSRdYRZufVj2GqfYTvfLTXuQuEJag1ABFWhMXCw35zQLbZ6h174YC8v6bsF4izQGfA4Asa6aZ1tfJKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyaNmvYJxFQi7CD2Jc1tG1CxG5VqEKyYf7MioTTH3jvj1xRXe5qeP11NWXVn3rcNMYnCSWPUrKGEpN3aEXSXqnd",
  "key1": "TzsxKsuReuMDzm5H5MPQmF1BGqwRNkxLict8yhjJyLsHCzotAPVNXvimFZvpKwuAAeZdKAEq3hAx18fbacNaJQs",
  "key2": "2B5qHg7NncKRzhpu655eVQYBsT2dKd1X27e2S1RcuVnb156corPksFauuMePHgYL1wGnHjbz39escgQyKeQ2pWV1",
  "key3": "21yargeXHsUpUQtjGXmvHkTWiaAEMxduwJfcA1j4iK2iCLpaSVPewh1MZ5hLNHKXcvyMpnv3h6AgLiRpq9cBjbWm",
  "key4": "5NfFwS2gh5Sqvv2e8nzYFTJRwXRUuG7JQP4kaBNVXFwgqoSjR9ou8iEksNSbgpCoGXB1Ud22qjK6xN8UrosL7nc9",
  "key5": "53oAoEWPUQGahWzssVAsPsbuM7s7H7iAXzvmqZk5wbt3nHe89nUrPg7EYTtyHV2Mze8wrBcWeso5bZ2owLJYLou8",
  "key6": "5zzeNA4cyEMadvJQx3ZL1ryNiy33uxtK3zWhPLVKbT9esDQ4Awb1Pk69fiirKC76hwBbtavPU9GHkNgipJyYuhFZ",
  "key7": "5VwyrwhTKwLcko4njKDwE8u1CBdmDLXqFPRfLPXnDHn9z2ksFKh8vYyK8PbWb7tT6TnjNGqaxGPuwrFRSYQf64xY",
  "key8": "528DDemHQZMfryoPVvt8voYn2enrMTPFPnB8co5ZcX7VvfjwRDR4QkszhXWsoRkLbGsEKgnxS1wyFn1NMBJHxjv8",
  "key9": "xXnTbNB5ffVnLjybsKuWUPuutdQo5Bkkgm4jhtNtnwAsHV4UNN43LbEtyxsgTzDdQAsPBUtJt3D4EjZantSN1SL",
  "key10": "4Bf3WF8EGL8LqK4xEYY6GzSwisCi4prskFFBtbe79m7q9RHvqZ3kDfM5FV81peTchAKBoe28Kzg3Zx5WbMdBzq44",
  "key11": "wr9woCXttWmf818sRdb5145LzYZqnQXGZNVdYbAwM2jmDNrKoXXERbqFhKDB5cERifLGiDfL5JtQH4VXhLgmjgM",
  "key12": "4Twu2cpLTHY5CUkgb6gSJ76X5Z9GERubrLUBH8HxXdfyS3kXkkyz7u7gmxLiF6i9JLJWaCWZUSeKxQBFHaeLoCZw",
  "key13": "3xveZCosbps1L6nwXDwS9pHVSEwmmRLMRWZeb2mEpNAausfKAyGDsmx12spRKoiNVAzYdJSFtKnKoCTg8BbAS57n",
  "key14": "4R5SqdLjpetAdkLC2oArhnr3wPEWvhjwmwAnjierKF2sawaPiiE4KD2HjKiBtcE9EQx2pMJKFHJXF9ejqexR3rXN",
  "key15": "3YLdVBEUM6ftaJqUrcJnZMxvRzuYhi6YLruqAj4WrzPrwXp3q4HsGCjscefBop5GLNW3gP4EktSiAYN45eqFMReh",
  "key16": "5fNnxAGjm8t46U42uc3Na8Rc7UnL3pCCXxm8GBDLKJg8maLhg8NDWjw6XTdxzxA9FWARQQ5gV26updf1vV1ZjQzx",
  "key17": "4hZiuxsbnpeqvCnC5TFYLfyxqkNjyjsCXVjXeVQSgRDrKx2tJF6Ba7rkHD56KieQcH51iiiXLJyNCqQFmFRaFt9P",
  "key18": "34tLWBdQWZ6iVR13LtGB8u6NFo836WvNpyYS2nopnKFiAuzVci2RZgPoPTfufi21jXDJBJKUmUWwMoZd1kgcS3b8",
  "key19": "4HHBtnDA7x4i3ya6jQA6BLc53xC65hzaRsF3JpeWHcnomdS5WTQuvoAeYhbSAtwMNvL7V6S4VSiDiE6YhunSXbVG",
  "key20": "42HK95osh5mQoaio716dnkyUNa3RzF3k6n7qyoehSFDNoeqMenwZbkPNXUeqNQHGspn8GZimPrK7fG7K63wsJQT5",
  "key21": "62Tw2HEDuHC94EqoVGc5CnmTUFa6ka3DjQGwRtqv38rojqYsCEEh6agqXafMiRb8p2HhkRge5wJYtgKpw75CUTvZ",
  "key22": "3vuN5mdcJrqhhjdihNCnTtCmiHfrdT7bNvDWZxJayjFEXDsEr5AGaFvDFFyZeH6SYjc6pcxqxYddzAU53zJLvxNF",
  "key23": "51ceHJecLtDNFAWKe3P2PofxBqCGKRyrY9CEUmgF4jTy9a6mrGN9CME56TwGGD8W2WVvFJmXz7HUfKajT4Cajxoo",
  "key24": "5bTPRETkks8N9JbLA9qUpVGnoiyQNc1xVd9TVjgy3HGzedKJsimiFs867XEngfcNFATw3yAmQ4PYcT2uzQ5ye9wT"
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
