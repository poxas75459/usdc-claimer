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
    "4pkZwhPDyKRRLg2Nf2ZKzG6tNPQdYYNtfP2VoAtgafbqnUWPWFwxU87oPt4PxL9suheMHFVcmvKVYyEQPDXuH9yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oLfZtMXFbRdHw4tk4SrV8dqyRQ3gcZ6ekvvGYN4PJxJPdKETJ9VbDo7EKjdeqbmcH3ypBwGgv1amLs7PqtLpWHX",
  "key1": "PNiqz31VjqJrMtWS36Z3rsYd7WK4sfRC74U3WZ6XoE3M4TJrQLq4v3VPMNqwjiJkskfYM5fsLBhdjEpvXp59Zcb",
  "key2": "5sh5eSPhcZxGCH3ptfUL2KTKLSZDZmoQmC5sWiNGmM5s6mPsiAfMi4sHYj7hZz7qtoRrgAmACVsGg9ScQBxwfDyA",
  "key3": "3HZAgHqHoRWq4QX8FkrjV422YmNeq2jFKzZ4oZgFqfuTLuvzF6nTqdiX2GrfxafrZMdt73LTEN95ZeT3kBeiX66A",
  "key4": "4UsJ7pybxkXdzHL4YoGA9Es59Lnqynj7FAyzTiZspUqQw37en1wbBEDgQrBnHnFhxPv6wRKCjL3WmGeavTBw5Ahm",
  "key5": "5RvfFqybZruoyhXwdCabnZmpacM64zffFXpoBwZYyLyD1uK8Mhf2S6xoxTXapJT9JfkjNteiFpLo6tEemM8E8yN",
  "key6": "JZXSfb3LSh2PaNUKTqKxaepdRc6zL3tXyNbLGFP1iNdxKczQwqQbDTSFo145G7MKwFQ75E4oAD84Tu8TDuCvG1Y",
  "key7": "3UiEf7XkL7VcrJZuGu7JPV5BHXL5qhz1sZ8ggcwtNkMPZSmZR8qRvfyswNtDo8XwaVjgFXn5tCdMW7kZmT2RQpiD",
  "key8": "rxu5K13KQBjkk6nzoEQyJnevvn9CDYRNZU1fLcafEVGWyoX2R4NsTUVmd3doqpknu2w48JvC2XsmXmteeBPoaYj",
  "key9": "5eNkqBBSoaf4JDkshGyc6vdajAkuzxWqxQFAtQcHNE6omwaf7kpYPLswBVdbyuauv5yZrqdVyJYyg55hNq1DAcSN",
  "key10": "25B4WuNKZjF2pRLMa2CrX4FSxapzBRXAdkAK52jEEj3LoH7muErdgyfvpNvekD6J1fL4V5DoCVnmiBtpAK9qCiyA",
  "key11": "5ZeLk83oEaNqQP2CPfHVWj3DdckY2AcVmJuRcaZFJBncct17Gc6ydqYm2aEwxk9VnusHJFVzc1dktwjmuCCWTDn2",
  "key12": "4NGiVyyMMvvY8ALYFU7xt2eB9d8hwqhhxsBoLQYq4bP5baULW8CTRoQteHs9GRpytPMbQ7rcAqWUChXf3sGQ4ULc",
  "key13": "35nKKziPzDWQMMqyFsN7wK4BuTe9A3uWKd9vuChPKv1KUzBGnrg4CwT4LcKx7VeEBassnKBhGDnamEGeYpyNaZ1J",
  "key14": "3jiyRdTUJi4djXTxdGeRwd5FxWvBM7ooYorTi1RKYmjrWUKMCEmpZaNj7dJjAHHVCWKgy6sbXt882e2TZrRK655m",
  "key15": "4f5ku9YM7LLL1W5yz3SB6RPZMKonpmYfgWNpr5eWLz4sp3a7MwD4ZPNxde9EjULMCKMnyxxEboSaAuNZsUtT6Adw",
  "key16": "2hBgWfGLeVZHXp6vYdvf2jp8iJEbKcy9rvGmRLhdgsjxfciSVqgJjXUADnuUGKiSyeNdiiwEaraZu4dR6FkH5fuC",
  "key17": "66dXuEVe7zT8Z3sUGKxKbp3AyoprG3qm2cKNurtRh2kcjZigp4fw8BNWRsRgS4zEwkgeYbdGtszZUcjKNPj5zGRz",
  "key18": "3WZjziGLhTmRWjVqNQpAKFiUVhAe9bVFL6goZ7nFFTcGauZ6ZeszGMmosBYWbTDu62ryrc8e8QbnX8K9rLszxxVK",
  "key19": "5EC5AqhANu8DFnPc28Z77Ysg9q1HjZZYBEETDMmfXVNETTMAH5MsRXqbGuo1b9qcmEPePWfvcMt2CtyJX1bAQ2xb",
  "key20": "2opTgrzMvo6Sns1g7hF3uznej2FTpUSTPFx5DTaTEbPa4gbnXYxo3aSVYSiY1B7mmsSo15Y4j99Txe6bXXsxKgM7",
  "key21": "rvkSkkHdByqyaDY1Ccv3DDokTci9ub2cNKWFsAvfjUjpPaxto1LvA2SiV1BsJHT2wrdBDhrDtdRWpqBW3dqNKi8",
  "key22": "3t2S7ke6qvjXdmzFmvMBJEgjisyAVh4ceAPbSipeye2jEUvU9YR6JaTmXrZb45pH4iuM5ZdNyyXdmicgGy7c7RB5",
  "key23": "4iSDUPXfvvHeoXc2jGEGRkZrygRWaBxEd6VjdbtHW11nbz5waJQ3XXRbKPyxvn7VF3JfQxAmVXe2FLnJg727wkuq",
  "key24": "2qPhUEA9be1HHAvcqJ3sWKkUfKGax3FYbovRTzzYNNDquPXkZ69EdxS427AMXAyL9ADTM8EEVcRPGvCQuymWascc",
  "key25": "5VaUjchpwAgsuCoEaGkNYe8rGF11WsZotD6HvEB8bHtjLwtJYKHxpGvD5wGPsEjt8ZA6B8GMr4q3KSLdX7nQHXYf",
  "key26": "64ATLBjyfTtsMVGsr2QuhnvyXgkAUa6sfbgN8JNRfPbSvNUrudKRprJPeBW4uDCZHG76kg38Uke53ajN1MW3pMtx",
  "key27": "3o3KGLiRVKKiZaKiLFfPhTooU6ggt2NBwqmzDDKPnoGVHzy6pkMkrKFKbkBNaDTD4upVNKSRwbTXfdi8RcsBMswg",
  "key28": "3rTaDaLVcSxnqCPdysKWHwYJ5XBkVNiKGSfNT9sLpTWunBgu4epp3BLjB5ZbqeJineZCjk2bnGZFUT4Yh4A9xc6U",
  "key29": "4o3Ed8rQhRTxCin6He2yzkv9hM2SC4MuLduoWRH6YuvKB7cBo8hFZpLaXK7yULf8tjQT7KBkZ5W4m3pjnogTaAYT",
  "key30": "4dg5CqxgJU4hXfzcvgexDmxepmgFvB1nJNJ4NGB4YfpSB4mLZXaV3jHkw12ZWWSqfspEadEG4NyK4pbrx9ufC4DJ",
  "key31": "48FYjRSUNJDRWCi6Ng2vEf5GTDPdCwWmgA76QJ2DuDYEHZXiMUop6Kp5e8GnqzE78rh2myY6RmxbG7VSFXgLY3TL"
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
