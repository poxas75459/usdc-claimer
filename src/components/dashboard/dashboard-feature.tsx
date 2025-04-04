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
    "4j6FpGToR9JuZCJCKvo81oFtsLYa2ptj4oSF6ZmQF6es573pFFqHK1zYRMoEYyB47U2ucbqq7w7h799r2hc95S77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzG1SpdpTaQRWxF72UomVvcyjNCcDoHagrQHZqJncRkggQgtHtEWzRmZZcS1ucnbsNVCraAQT2ZERSzDREjfQwz",
  "key1": "2Cb9WTx8RHGYTjysJBjBUrgvtbS2ZF2GkrVfb9nNBDyMSpUexhZ3BGYizpg8Hub4tHwTkMQaBRWBGFxuCLh6CttN",
  "key2": "3Vsrmgec2ymbhgF8NsEZc5ug5wr3mPVf55T916ZANjsmo34jvLDQZNywbmsmdCcxg85s2Rs9VKin4ehNN7hFvoCD",
  "key3": "2S1FtuF1aEF4wEAqtRbdke57ktUwsHFWpWSDzxgFKCVH4484rRqPJiNmfrQoAxGQDZywoAXgyGzrPici1bckhKia",
  "key4": "4NPLaNXoM1DxCzvhxxR9eFjPmzu9YG1YWUPYw55sKARaAiqUWDSnduLRWnDzKdmfWtjj4rwm2bsou3APER64MYwq",
  "key5": "3K88Xc6CBoYoqgPWELwqHfdHQyHHC8b24FyNNKQR6mSonGhBgzAa9vH6DiwefYiPUXP3uCMjWm4C7GBFYvD5Xk3i",
  "key6": "5GL34RyWopEu8ATJZViTMd7zGEbkmt79M9BTCCEqe5TiKKhCGmFdHWaKzzxW99XoWPUnHQkPKegoDy1t6x4T7xfp",
  "key7": "HnZ1U2u589GN166wFVyApmSm7ggB1gZpgyt8wr6VX4GH7cdDB6vvgTVSwghxX92rw5Zc6WHttPGQMT795mbyDc9",
  "key8": "51QNdtzHafK1cWkpvtdj9WXZgo2hHAmrjz1teGBChYRXjBpNbPwAz1jHc1eVgVaxDVwQhQYNjxxyXcLhjLiABwRf",
  "key9": "2L44iUcxzQaMhak4oqUzCk3sBMBeBPzKgF3u7FEbjotvXcqNC734bGg58hxbt9VZRCXxRFdmoYaHpUJejCKzMKYm",
  "key10": "2zwKPZj8Gra1QRvLQrjoBSeQepY4NZsvcd1Y8XNGw71Phoco8RsJK5aC2GUWbK9XQRnp8yGSmqZkS39w3DLdoFpt",
  "key11": "2ur2SUFJkFxDpsBgKPVyKjssg8PicRT3BGnSw6Por7isGnE4J12mzBgCqXCVgmCq6tsGVGLcC7RotH5JAyVm9qcy",
  "key12": "42MevsvU3aEEEJ7bQFjRZzTQeCU1VQiCLsXiTWNXp5JLhd73hhfS41mgmVCRXEKEPJnSzCvG1U4ZsveA7xwt4A9p",
  "key13": "4hDY9iXKQAvAYh7VoNTV1LMar7puVAgLkeg64z1ax6mXo7dtVDnXSerHSGkb7LkJaiVYe4b2AvAPkkErntMv7fvN",
  "key14": "2ZGg6RdUqZRKyGhQEymV7fk9nnoaJoc9uWnGhJ2L2qhDVSAASJV7nTwfFuP2diKJBk2ZQx8tGeAVp4NpQijrv6xM",
  "key15": "2MSTMe38ByyTGWN5zN2oeNRAx2FdkdNC6HBpVwTdHBxWQSbx4Ajw4aeeNDBeqhgYQgtcJjbMq9LCAoexCwiPcbL9",
  "key16": "2vyBxdZ12Dnf87zQr9ZdtjGH79tkdLSR9tFwsqARcSedJuuEzLQ5yetEWJDo5wR2yXk5KgxAUNQ5QW3AMJXcmwgd",
  "key17": "3fe6ZzC9PqJ9s4e21Mgd3w6KHVACx6H279xNmTYMnXnd1sXQR5JtUZD9a1BKtRavFWYrNikGYgk7WsEcSybUDwtA",
  "key18": "42fq36tYKV1cAumVcT3kC2yg5dVP7ptrP6GBCUfk7bPzG56NaMszzgSrYXcUh4DgNqeHMSa3PoT7mZaXhzDyBGTt",
  "key19": "5NNSNJYejXSyBQw9YqCNfe8p7fSJTEjBp4qRY1Q8gZcYSafoX49ptDftVHfred2MFMJ2sicQa1pSUK1UU5onnzRH",
  "key20": "MLwxWSzXbaeARE5SBDwpGYRRgGhM9e2oynZLWuEfc2fJsvUc7P61yjHGSWaoi3Hf1iq1w2CyNm3TMJuAiRRBCFn",
  "key21": "2kzSaXfVav65ti1nbwu6Et2gQYuEVF9re1pmFkPn5cQoxDi4Wm1a3AEhBzjPneyhWS8D87vPQZYt3KoHsQZgTS7S",
  "key22": "21C5cyQVeHQGB1Vyu4aq4HwiMypATvAe2FCWLK2xTkLSCZWX8dyfm57JjnWo76pvJTnoCya1Dodq2MAXs1YhMnQ2",
  "key23": "5uhzuvaUa549S8bXJCDLEXvWGs2bQm4r5i33FmmBJpUo1YNTVCB1B4pSeMLjeNrhPuXRefNFLxeS7SVQhNupyYhQ",
  "key24": "3pLfzXyw92n3ieJpVvosJquSckdst8gzxZvw2KRygxCM2z9K59LbnBtawgW7oXow5j1c1uJgKy61DyZi8gHoVtEN"
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
