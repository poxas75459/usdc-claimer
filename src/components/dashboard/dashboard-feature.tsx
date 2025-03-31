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
    "52hbT4gxYwYnnw6712yGE2CzhLMzCRV9kRAD8AYEBaMaHCvpEkc3GhqUgF7UwBZpf3bwVpbEEkyg4hrkdQU1da4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rH4b1XprmQxYCjFdWGPxpmUDGLZHGKA4nSUdMmeXBuguGGF4GCCXTJqktmugnvaR8S12etjgHkihqfaVGbiDeti",
  "key1": "gpzhei8DMbvNBsS6FFHFpLuc5ULEW7xG44wnueM7mr3gpdndCi5R6rPrNKjvgWa3g692fUcuEhY4c4ZFrYaY1oH",
  "key2": "3cqKmvk6o5bdgXVPMMqr27UBajnCaNCQ44MfUebCHDXKQpwQ4NYh8fA9mFsbLveF1rr3G3bq1wYN43q4d5LdiVva",
  "key3": "Lm2f4TC25KYAg6bwCaW3S5Nx54SGdk3DvbJCNxuCo1pVD482CdCvB3o2mdRmdwB7inJQfwWGHUfFePKoBxtYNtw",
  "key4": "3XVCMGWG6QCDfEZEeTNwjdoHsQigExoAoqd5c2zbDbrH6w8Zu5jNCHdQtwDFM2qV1PasYDcX9Ab3sx6zAKsUi6KP",
  "key5": "3Bf9JgRjmiRjfZsQgqGgr6FjNgeTcSbL4q9Hg7gXA6GRewr7tT39guXcxZ1bYdWZbzQHdeb4p8Hmra7C1z44tgzb",
  "key6": "3Wxz61MUo3U9hPtN5o9aEg1ZH4TxbpbbKGJctecRtyvJR5wcxyn3oYkKWVczL3Jb7R612ZikjZaXhMtnQDyg8T6z",
  "key7": "2jqa48c6x6EDf3T55ieShS1CEWG71bxH85hqQdvZzwoKwPsctC2KkbzP8JU5fQMMAVMnD7fdv8ufEAM5xGjZSoGq",
  "key8": "3ghesPysqJ1a2H6fenj7TKSCyuDxUqHVG7iQBTxJ8yBMiCTiQXyqKnkTr3xmTtkpJtrsPethJdiJAYzF2F36NJwt",
  "key9": "5Smpt9rGkhSodVbzNMT12oz7Mrztmwj436nYgthDwGrvvniWsbpa7MfGJKxAakQnhhcs13PPw7wqnUNN1KA9X7Vj",
  "key10": "iNx1Lb9oZHhbDAHqyH87XNKhmbyNMDL14R59ZP1zBmpciQP4nRSDKSbMfKef7Hjwwh1PrFNnYzZRD6Zf1XUwh85",
  "key11": "3f7XnHG9PCkjhDwFCJHnRgkY2sm645hWUqQYr7A1AQbJWGMkx72zRHGZaLhzurAGhQ6pLmDHuqAhF7oeDGgCbdg8",
  "key12": "65GPWk16zJLC4hTTtD3iHnQqrMsUQGPHLn3yEL5FhsZ9Gy98pCWMELyYwPtjwe5hSZeAgTgKkHauoU8cqteELSD7",
  "key13": "55xt1jeo6DR38z88wSfqrqbfY1939EYazCKoWWLmroZRZT1k6R9MRkxVRpUEmx6nctktMLPDnnSysdQHDv5Mg8ki",
  "key14": "9VTXNTyu5CDMN7dM6EZS7HFGcNppxZjiL8D1xxpUQmF1Yo4k4jvQu1NNhG9gpKm9wvWsUTbEQqryuMmNoTM6UQ5",
  "key15": "9KgxioLwhNRYY4HGFyFKx9VPAW5SGoP4mNvFCb5DEcQ5AjtNN2Std8TyVLduGCHmVdSxPZjr59GRdV2deeksdHx",
  "key16": "MocXZQSUR4TQuiqBtZX4XC9Ep41uGC2gVshpu7rz2WYRak961HvhFrQT9HQ3ZWm5H9EcgLS7zy6Ge964SMGEQT9",
  "key17": "jRRvcKL8v54v6CtoPhu2PTwQ28HQ3Pxj1PcExvsze2Ugg1X2vaLxj2N4LjCuvXVZH2Te4GdCoTFv5Zcr7pnZ1TH",
  "key18": "3xPEKNyeFazV6ovAvUt8jCZkPo3tRrTRDAZK2vjMXpZrykS4WjamGy6Ye4FR8FtcUpdgJ895QGemHxZhTTx1urcc",
  "key19": "3BQVXDrqZw5Rgpuci3w9xQo5dQTjmFCwwwF4X3XcgquTyTv3V736hKn2T27wuRhgiZVswwP8gzbYLHPfKZHP3R9e",
  "key20": "3EjqF9sJCED7sBvUGDqy7d7aEuKfTNx213vKCqtxLYQrr8RwJTYr7EwD91XzP5sdHuiNGGX3F7zCSAes1ubHx7Nt",
  "key21": "62HfNVrLbk12haqoiBBQSaThn8wS2EGrkAZUbMqKkdvhVtfBwJXv9VVwTtWt4654PUafW7Sw9NeZ4C4vFPBH238d",
  "key22": "65x3pXiHLVEvPUtbc33iHYDNgEqqK2BLdeZpd5f8JUtBHWvkzrawHq8kzWqECxJkZ3tpSANuqfmhkKjgXzj2qJgH",
  "key23": "4ZTWduGyjhY89CpiQtsnpup6kVDrN1iFoiSBHRdX3jnNpgNxP9BwuensGhXZwSXDBTLtfVqHWKnweHCv9ksFi31B",
  "key24": "3sCiajbbHtdEyWportfLtnWEwzcDVMkuY3WdSwdkyK9zSWf9uosW6sjmjwtWXY3xRDL3rsEwHq4S7P1CMDQqSBhB",
  "key25": "2vhFS8q4hrEDsxh9GJYUFbvkPNoJxA93xvV3hSVz51nFVp7g2pAu75Jypk3NvTuM1X7RcgbwNrJP4nzEYp81QWC4",
  "key26": "3zEhrwZ517jiKDZtc2W2vinBMWN98gi3WazfNcjfjF9TVUhAE9BCXpFi5RTqjfcQ8Y66maXjVEeGCqoP4MvK3oRr",
  "key27": "2vRuVZtRuKhvKw6AEZ86PwdVZJBp9wiTc28U7EErzLrrx4xF8ziFfP6BLqMZfsa6rrqNSRm5B2PKRFaNzs9iNoEr",
  "key28": "4SvwyMJm17USJoPpVVeXmCfriwSiKtVf5LeUB9Hosf2tSVuSYtg2LnxNqPELgkgzrLmVavQHVgKFRsz2jNFqetsB",
  "key29": "3rqKfwsek5dWtmEqZ4Yrt72HArEah9CMKan3ZHycapyysQ4CumHE19BwfLZv91KAH9Xi2iX1Ux7zgYyfFte9k1yo"
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
