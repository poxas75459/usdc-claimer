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
    "67j93vcyc4jdbWods1qgZvZokRHtkhp23gpTbkutsaB2W7awfxqSmhS2d95xXNJiyx435JA1PxYetNhvRdNewWj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kErV5VfCATh57CXyVZ7NHwXv7rNSsh8RXZXK25AbiS2xx3S3PKuAjCDdokNxjhmAEA9VEK3DAmtui7XAJD3Ndcm",
  "key1": "5bcYeCsnVsVZGncU1nhgAE838h93QansoREUkE8jawQcT67w7XvyZm3q192NvFuZHZs9wXMvCJBeTUfbaxpXzzaT",
  "key2": "4t4PEfZZFmaW6EEyBn7gaVJNFLNXPCCcuhQ14ejfvDJSQcaQoB1dPLUuvBqyv5JNsJpeepf6TmH7ybMP9KrZF9cw",
  "key3": "2ga9hwG7i5oR3D8FcxoLfTMXL2WPjf4BA5Bj3xnYfhkiUGsJLZcWXEbykFKaMjsKCr5AgY4DdUHzQf1ZchTbCvHQ",
  "key4": "2761MhM5VmZwGdxZh4f2poDaBW9eDsEmRSefaUYtFiiLmWDk1mYGsTyx7TA6mRWhyE2cyhFZMCj6hajhgNgU6dN6",
  "key5": "2gkdcvN9SVqS64kF5AxViA7uidjHWGyDseuSZTsFBL16cefmHF2N5CKPPcBSecsB3hb9QajD9WEqomX93cNuZK2j",
  "key6": "4EFD3qM51z8kSZCZJ6epGPkMPi7oKNRGSjAw27oNbY4pCtfS4zH4mfVotu5M6AV8M9jrUj89aBPeA1Kt3t7dudDe",
  "key7": "49Zfx52PBwByG1sqYN687tPvoG4s2nLB6kx9TNkCnNGe3QFr2jbWqSopthZrWJrmLEUYyr2z9Dcj3HxU4NvxA8KJ",
  "key8": "5Zy1PkUt5E6teUeKKCFwmxNHJ4qa7HCh4nbEjVSJJS7wis9KbD6UrA9xPgAnzj21kAEDhe6dmhx963oVu7dW5r68",
  "key9": "5csYz5kiNTdRxPXZepANE1uTk618S6y9rGxsgXE9e4moRRKm71wGHKBBd5nSHbwpzRMYvb2r2CbN1oF7cWbXYDnJ",
  "key10": "5fWr13YNm2wfhTFY8wRHyzaQs2vo1FgGLBA6oTohjWfJkfj4hApPsdNWqrubkD3vTkgZxMKDE88kNCw2era7JcHJ",
  "key11": "4Kws6XRpqXHeptZ1kPeAiMSSApLTpqzbgZ9GtFxZdZEAt4gfRV3dHYQdcUTVAxcsf8f2A1fyXpfNNB4HJ713cSQk",
  "key12": "t6J3a2j5EyQzy4c1tX66EqHrHaDu1dPkRJibSwt5puCtNW14Uv5nkf5AFgYtnVaFDD55Q5B8tBEmdP3VmWtnE7x",
  "key13": "2yNXoo5BAbSfPmf3JK9PB1WhLcrrjqoaXNYGmJymEJTRSx1btytjBfPTbHSMuNrW7VYFRkoh2NB4HVeZsBpZmZ99",
  "key14": "64g3h3yCci97ZCMuhpVRzspvAiPDpssbaUA83LwYh1jcWrBThcypASpzebaNPpi4Aap7D3ZJss72kAYMiGBDvuEJ",
  "key15": "3mp1xGHMH5XUaM3orV3Y7RPiSDCvtgG6LaRWzUBau5GLsF9EFmGAJk94eUD3YHsm58qeSJgCWnnh2F6snKTQQxqz",
  "key16": "3YXs33vCD2KUmVniugukAAFkR7p6Ap9FCBdMLutoqznFFzrXm5JUrS7cbfhbdNv2wZzYjLjwwaQVxok1Paq5ygf4",
  "key17": "2Gg8TiXwxh9gDzHoRgErMSokExsQw78rXCHNdBFvzHdims5LK1fR92ALYCnTc77P451GWzU4sXhVax4XZjjU5gYh",
  "key18": "57uXNE9hnLCEJP3AjgakWWKHMpg4TDDzpyCLZTNNYoxzSK7dqukSXBgwHptxXBMgvnNYsLS5ULMeNKsD2fS5wGDH",
  "key19": "3Cf9jPzRJ9XvmE7fULAUTruHk3KG5vb4e58dMaAwaZvXBFshrzWhbmcGMn7x6qhLz66k1KKeLToRnG1RJUfngSF6",
  "key20": "4PfaycWYnNoeb2FTMv4aihvjeitg7kygVt9efSbeaNmfrrHhSbyi14UxjUMDN9qVqPxZj19BtWrwHyyoduoAPeKn",
  "key21": "5eb7uPSc5H88ZLzxsoyTE4aLkByDfDRYA4XwBjGxiQN85KcJzntgnRzwMxGKeuDYcg5wKJd1HzJE7A3VDcYJu7Zv",
  "key22": "Qok4WnUQiVVd1DHMWdmu29uVPELAFinTDm4Bq36fr15FLLnwjUVwk8c2iGAoAEPfwi24JURs1JfFSCbksBtNVvn",
  "key23": "672LNiq9ctTHGbvaNQyxdvnc4Aq7HHwMaBgbtz4QyUjwEanbAYY63qdir5g2woihyb2vcSmXZ93fmoakU5xe3uBh",
  "key24": "5ZNm5QW9TjTr7BXtunEXFyCxEGyw4i6HEU3gdWaHeVSm1jpXbk95kA3JUBXX6VfUFK8w8N2PxcguGTa6Uw6b5o4o",
  "key25": "4MeWGDg4bdYa71zG9Sz8anfEbMLtNqDJ3yyDGPTBKQzGq1w7MBKgz374Ci6zJTkKbqdbgFSW34LqopuQmKMve7SP",
  "key26": "5MqSrYhWjTrqr5b8e2PrDbd7YTcaCqZUFEkqKpneYeCzWf4z6o3ammWoQ3WjjTUKVp5KC8NRSVaB5Qs4EfPtiHGK",
  "key27": "5wt9UuLPTjc5m2T7z28VuikvKCHvUVagTVhQJsGQ23dzeNinyJoyTd4YyzxEye8kXjF6NuY6cRy9vvdPE1rRrvZj",
  "key28": "Sdg7N198oohQCAXteaFkgcN4gY3RNoGvEU7H6g5xb7v2NJAR1UzS8RQW93kdfstBKuvjDFcqdUDpBX1BB6h26SN"
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
