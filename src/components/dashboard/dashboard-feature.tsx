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
    "3267ZY4RbVJ5kJ35pPqDM6dBfqyAyCAUsEpbqfMgZh1xmkQiSYFascEr3sMyRqvJnN8Wnb4dGfApDAmaxQUtLDvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1CnW6r8uKcHDZjuQ8UT7Ljikv8nvzJojHZ4goVj2uBZmFmRK1pdXiSg8WopwsGownq47zvY4FmT89JnXBv7cHJ",
  "key1": "3Zdmygp79xTiheBhrkvQUnuqzLjk7E11kxGcmU79vKNSzDVzcLkLxWHnjuZAK97Uxcz7Nb7ZbSiX5eATVKemJrKb",
  "key2": "5jD2dyzRss5Q42MTi5EsocGdTkevEVjjDuwmfgrXCgKHoe7gkZ14KTzjrezc38u6S4rtXPeiiuR9oYLa46C7tHiw",
  "key3": "4WzTvwVgQM9SjWevHB94jReDUCJiSKm1ryp8FpogGXeJhjwUZ73NhccweuHS9d5ZUQGT5b3wyCaLzBBmzVNJBFrT",
  "key4": "2evo4WN3FV2ei2uZvp5Yz2fHysvudFwzK6LgpYm4PBxTjfNqqNQQkBhi2Wa1VJNR4obzv8LF4i4PTVM4ZmqyAwFL",
  "key5": "qfsmyMLTA5HCc1TtN19PTXfd9zWZjcECB9ED4QEJQYWznA3dBKkqggiX2ATuKuZSqUDAhABahJA6rDaaSoiFmTm",
  "key6": "3sYCriGRzBTnNbLoUzJhjsuPNYQfwsdwMHruatxmTqsHhf4L8VAqxQzMbxE2vyfNNc1qoBNZpchrXUuEn1brzdgC",
  "key7": "5QzogNsN7FBpcAsMsBQYF4LgBj1kuyz4qPzRN2oJQCkYZ4HdMS9zmL22x1mdGwMY4EqSZ7DFVbAHFz5HMDNSY3EP",
  "key8": "KWaH9FmcqCRS4WpukcvNHufFBdbnxmL3cgEz3NGFj8qfZWJyfSuinBPjNwJeKKX9nDmTKyvMMpiBJDM1fSswhE1",
  "key9": "2QcP9pHKadb8EHmL7YCyKLg1ZbNNBtFs3iB6UcXCtcRF6JP5iY6qX2uVEpqTM5hBCwcuG3XkvtWBgcyE1TaRjbBT",
  "key10": "askaMvebReSJzHgC3Y2mMbbp4auix3gkMEUwWqJMU8drhUbdvqVcqW78Gozgba4G3HxXFGdHLAEhRMsTJrMuNcb",
  "key11": "3SanStGF2M5NHEJYoUnF5f1Tn68dKcFrMEw1qEk6MvqbjsKiWF65T85JbdZMdioBamrK8k1vkdPN5e9Tt98eVqVg",
  "key12": "5xcfR5cg5MffYE6gGcp9Nn4icE1wYHjSfHHGYmniCRREh8CkUGeUYxpY6oNSdcXxUm57rc7C1izfT3DLUNPo7KbW",
  "key13": "4LWot3WG5kbpKPmF49svKuN7sBdcAUGi1dYKriCctc1rW3ypoDfQgDkEDmNwTn1dsiBJuPLkwdxTaTcFJRBxWbJi",
  "key14": "2GWTWxb7pMozjH3qRZTtFEGNpWEi5t9f9cHjrNE3Y3RQLNcwgFKCywL566kd4wdDgZACt4Ggmiamn9u6k2SZS6s1",
  "key15": "2v2eAHZYbHFWro2x5SLwMovbRibTdxKSJBzR4oVzuCMuZgsKkMRAM9kj543ah848Ly5cwPe5nWkYsTwn2155WAeS",
  "key16": "c4H4RbRt7qC9Ei7WGUVRafnBXErAteineXRMhxLKiNCVXcXK4Yv7PQVDLKKzsMBSvKfxuZ92knZSRaXFWbndo7a",
  "key17": "3bfgsawQDGv2diYCB7sFsTruXi8hKqVPPXs8XFvUMKoHiAmm3A2GuMDhJWe3QKzNYc9vJ8gkEdRapQpCNNVSqUfw",
  "key18": "47HCxuqpvJxQiLHnqTdHfe7rd5mUZmsXt4Wuv5769qqwHHpzpzUvakzpeZok9jx3oQHnNW9KW3dBerfSM2tw39PP",
  "key19": "4uh5Y9Zzjo6SQwLcHFDXtFbUdy6BejjchvMoazjRvT3cimzX46op4Vcu9kEV2UHT9SqojoyAPRPVA9i1om8WM2yj",
  "key20": "5N3XnVWSKZSEz7eP3dhFLkWDWGmCaLKtFCoKf1DCs93Zu3QDLvGJM8taSL1UtQeg11V2cQQRNdNR1GNrwTEHwFUU",
  "key21": "1KzZmKyZL9jvKCqxSFpTD8UcHQo4M7Ni3vnWShnieJvqV3Pu7dmscbLayJjeSyQkHYw9UkuZBDr7XNrmhFCLLY1",
  "key22": "31VA1Tuf8zHJEAxtBPwtCRRbZsknrFrx89by8fjhqfZHyuMvXaXzkE5c2VnXf8u3aWodqs75RBzAZrF7Ut3Z8jUG",
  "key23": "4qxY1UB3PNvfwdAgfZWE1YZhsEa8qbxid4DASNV7EpMVYYJ35yQxdmKqg5JA93VYGvwr5XNvzp1C1jNjZXbwHAyu",
  "key24": "47diBSc5imw59zUPv5D8WVfS3tWpk9c8gBZxLCkbje5XfWJ9UWS4T8merXwp9uf9Lk9rXgFmmRcAR4iAnj2rS3s9",
  "key25": "3zrXFsUP5Z65nATC9KKQ1usMCjQY6MoWU9U2PyniJt1bsZ9ohBGrUbyfhsvRVFYSXcnxfVchFPtwe49WorS6kMDv",
  "key26": "4gihAekbNpc2TbLjQazPvmSooTW7neN1DkqxTCDGfMLRg3ELbx47fB25Q5k14A3MLoj41S7dYfNjYKCEWMZKF2sn",
  "key27": "4fmHZoJdHxWPKRsDsvFMNcYjfKAdkW5KLHA2sxjVMXvGcXct95nJHzfZnyrdWQiw8dvAve3YW4ywwiVkRpro57q1",
  "key28": "fRax2u8q8iYzqdLZ7fmJ7HcnszZK6V94AL5vCvwbcgHRuBAG5aed4emrymC4N36bPiwUxZ48QzSsMZL9fi9TDVD",
  "key29": "YR4crvmU7dXrgyze7b3coczZ2MYTZF2RxQuH6VYuvBtan2YYgP37qNLEE8pRqajQRhUijBMpfsr6pKtuet2sERd",
  "key30": "59ybkiKk11rRA46VhcjX9Xk4L28eLkHaCzeG8ZEuQBsYAdP3TQTMq6ZFw1GfSa4ikNjyiwD6eQ5KYD31UUTTfs9w",
  "key31": "cTEwK14ftdDepznaAfhSB8VhCzHNJysRAvz4eSJeFRgAhevu8GbYz8VB7r2xPJEYC51a9aFCJxRQvcfbc2U3kYm",
  "key32": "22YYPZxr3WZhzYJSZgxE5bd6wXoNk1XXRtvTb4VxiEF4yYfYCRuz8a8eQn4ZMhzPCzkX5kuPPaq7VMgvTyUJt4Pa",
  "key33": "WrYWgYNLub9t87xPsd3wpGsTaBWwtFkG5tgRicyUjaXVRWzEZ9o5goBBSgEH1RiaaP99azvvv612XtkTgLGd3gf",
  "key34": "656x383xgB8379cAFoU9zAyC3wsvxFFdUqfL59ioAx3wageiz8W1MfzWNUtCdTfCbphk47zoFXCd2KHX87AMdw3C"
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
