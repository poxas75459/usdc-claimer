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
    "MrnzamUUbYre76tVngakeB3ychjU8Kn5D8XxXLgTAcdZ976D6bFeTWDaArsB926H56hLY4SZrx9fzgh2aFsbaWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQHmQNiERJvNGk1Vc4QPzx5F5bJqqdS5Pmn4wykmXuCF3QVCY5inqJ1ah4XnafRghcd6f4WsQYTYmMw46mAUqVH",
  "key1": "63hiiUTRpLtREaofgPN5Uu1TeSCM6JEuHMZvkUSLcYDiKYHk2AKacpCwFEKfXpAAHrw7VBKrDdRS2AXeYH5se7PN",
  "key2": "3RY5fuigaW6Yw7cXSPURC8gHsRDQpnYD4qEJD6oenaxHr4uYpMChoevjU5cNejHwAVDVqSZZb7Ze8mZgGyz8Skta",
  "key3": "3K3HR3ZtGoixLZtwxUJodsp86w6s9YqYLapQN4MLiqNvFkqvEQ6uhciHYJDHA8QKn2C6RxE1BHVL7UsowoLinUYc",
  "key4": "3rVWeMkVmSvUxsv5Y3Rz6JZYKXJ7maFMgkyAiG8SnPy6iEpEbMDapnYD3goGQQEYsKLnpo6TRdDZjbEVbGcofxsV",
  "key5": "K183Q9y2NeQSrsXqqxXZfbpVib5Mrwvdd48937HH5VagXnrEHpqnWkXajPXijUNYp7bPGqErrJFLWSsYAfF9ZMS",
  "key6": "5oLkpyNH4QZZpk64BKkodoXHCaoEoQwUtNJqTNK4FH3qhSkTWWjqPM4fTGSJUdDwTLg61rViQLFGgn5XmF1GAd1Z",
  "key7": "34ksyHx3rFsrZTNi8gKewaqchdZrAcPEpaNvonndjiVRVJwQo9CArcTrtYCGgvKtrYUacs4rKJc96x3wR4YSbyCt",
  "key8": "4UYBYvv2FnM5jQ6EHabbn67dQxcr7LpAp4TC7N52aAcdfpvAVF4GUKk92MAr1hs62ete7CbejdVx1dRb756DWaxe",
  "key9": "3mDrNAARW44p1TnuakKhFgjsS79g88YmfYjA8DVk31EJN7XVx5SQyLhYgAFD5VYtjq1Ke3nLVccceDk99dVTa5fG",
  "key10": "bwRmNA1BAb8XnqEW4MK3udFUReA4ny8VvmevR6L3mhfHXrWhwTkfkuP8vBb7MP4HaHn2Sp458rcBxjQ1i2UjrH9",
  "key11": "5EXZSBg4bBaMyFTpkZjACg9cMCkYgAXi5fXypwWvtULKsBBoc9hNWM5BM9VdEZ9JhBTvaPAzmFhPpvap7Ew5ggf1",
  "key12": "2CbQCyjm7nr68m1VB5Qsdym5QzVBDYVm5ivVEZxMdpRkfAUKMw8axSPTryXvekJVKZasTUCoAcPq1Vz6BLE1UPQg",
  "key13": "2i9suUBGuenuKmWUqhJwTbRKSfXQC2ZzjBw53xpMYZnCdBdaBDbjMhCtLFedhXLEqLTChEuHprkvWtKtdFb1eS8h",
  "key14": "5gXevYHTEPUA2ZRfLuxvTYR1bnqnSARAHESk3kYZysqsSdvurdJu3YA7N14UfMhRqRwDzDfg4VARPvVtsARzrCns",
  "key15": "61bCNxzckdxQ9wH66ceSydmRFe4qjgE8Sbm4zeAYPmfg9D3LEbVxyFzKhYpgNUFKVeKc8ceMtWKoR6qWoYxFaHoK",
  "key16": "4RXv7d6f8Er1YkbNaPzgeKMdaLXMRMmJ3o7d2gBNJYABXCJrs7fBfLNmPGtfJaj4zqg4M4tzLHb65seLD2NmjmV8",
  "key17": "fcT1ecZvqk1vptyghFwR9zQCqSkxTb5YeZXrJXKJPii4nD7XvYzi1mD2E4AV7777bEs38n6o8GPj8ExezJwiWJg",
  "key18": "47sbQaDxfnMBn228tTVG4Svsu6GQfU9GcyqNUkjwD9ezo4iFb7cnMM8KDpHx2utoBt5ys4MPuLZZXYA7z9RkPHGZ",
  "key19": "1xC2NDYPQuzrm5egBk9EsL3bfP7nVtmM9eRCyv26H7b1chkXbNHYsK6fPBwgaNiwV488b7ED6oTa2JSgcHeomjo",
  "key20": "RSWfiWr7BSnivTUiPjioMtbo1LGtiBUV2WndRCJXucAEddeuGK6bsyzktwufTTbPvyoitCZdxeBEfjS7wNs7zT4",
  "key21": "4Mt5ovhzt1kcRE3hDBk8wBABGEPrexrz4mexeQTDEAMhPdoxJL5KLAorRjP2kEg2cDC22GqPhTHxacnyXAx1jWrc",
  "key22": "2F785Rji2EFm8RbonNxniECQdMkH1iPx58fyree5a2x9dggQfFH9jBnu7UUTW26kWU19G3pH1GVnmbvppuYDEioD",
  "key23": "4LchrJGgMde3CAr3o579YroTY5j9CKVurtAziAoTAQehEHfTfhH1PBJrxvdz1XzgcVScD1KXPPpEqyRj59o85wdr",
  "key24": "jEGDQ3jWGCWzbSBDg5BZnAv53PUyVHAcJvt7oaNjd5iXVnRG9tQ5VPMaPu5t9GJvzWCugU4u8bfvXAJkzwt6Cy6",
  "key25": "aL4F1Bc5AhaaJ6fbrgLxsZQrUmLUy6SqLimZB1kbaf5ifLBDzYUcYT7XCBLi5vm6zJW8tBt5NuLW7qMkhmaViYS"
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
