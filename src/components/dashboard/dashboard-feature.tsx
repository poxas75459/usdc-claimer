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
    "3t2NBqJAvait344KZPnCMV3WqrH4QoFRqyT5gBraGVt3Q4njWcGPpGzM4Hv1vYY9rbYertYvbZtYqBAASsQzR3VX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57W3qUuxZeuZ6kbTtNFQzmwkhUbBo6Jormq7PfXMpmEebegdyRpMFvFokFNpHkL2hCFjyXD2JCrGNQtJzEfFu7E",
  "key1": "XKfntseGJoLweVvEQSt1tZ55WNSdGWbyKJxVGZSf3HVmWWiEQR3vYW19UfzurpnfHSV949ci3168r265wZkirnk",
  "key2": "o2giwA1u5Bds1LTTrfyRByp44zMcNYkUTXgEjqEyUipntahn1i9qYiwDKqkprutmTu1o4y6frWNiKrUjGfcUQfB",
  "key3": "5BLmGJmxsbW76bwmddFeS5sq37eFcuNUBja2DgDy2TBhRmoZZE5x28P4tF2oD11FY4QSaSCN84wAJXnadrRscWpB",
  "key4": "EwAwG6Co7MueyZz9CokUyCPuPT6wcZDB5dBhXD8vcNJh8k8XVXyBFsCbio8YRYDiByWuKMbjmKhUxmWsEeyeUdK",
  "key5": "58tp4vXRF4hEVeBhU2kkzTzzrwha1DNDsT8M4S5Sby6JqBFLiZ959N5kgsoQdZoyAkAp2op3qThLQCDNjixN3Xu2",
  "key6": "5Lv7DG33jCyTfkbasxa1dvM4ivMUeD9BJ3FHaXpjsawpEU6ehTR9LmWwFEHi3ZUhXH9E4LfGhJDKoLttRGedKqXz",
  "key7": "66obbDtvqPYqkMkCM7ADCtzfDvujVGwyG9DcY1nnfZ9K5iJqfCfr5rvkZJe9BTdkFB6jfoRi1EZw5DXxRKWxdwZ8",
  "key8": "opvdotn4Bv3bQTPW7DoDPLiCyq5W5hgwFKhaLJM6yLe9nm6U4ue6Q3XUomeuVqyX15ensbJnbpADYute2AR6fy3",
  "key9": "2zcYipcxN4QCPS9PPuANpiZXKqHiWbfNUgTZauhbSV9b76W3X9qG7gVFitURvUBgnmmYMQ6NcNFYTSckd9pgxQFU",
  "key10": "4SjkXJsvLQxTX9gYtpdkqTaTGfKEHLJyKu1RTrtmtCF1R1JFxhKNTvfXjwfPmnsDdK61zXpa1k8q8GqgFuJgW12d",
  "key11": "3GczR2RQhAYNAnMYUp4yJuCPQr6cNj5ZL7TYTybQ2LnHkFo5dcSnasrnmxLQmGXxWETtZ7HmDtgREY6n3LiKu43N",
  "key12": "4H8oQSa2QczDfqzW7qCGkJWfCCPXfVdG8aYNUEiJRPEvvMv2dXmMuWtmnakT2rGgn1kXeFb5vNGuMUs1xU3jEf8s",
  "key13": "2oR3ebFMiTyHVbJiekAeNENMxHSoyWUvabS85LgWmuRW7p5bh9WEXdRNKDQnGTzQfzrAEHzLE91f6MxXvvqsT6Sr",
  "key14": "4ELEocgkG3vGSX6hGw9U7fiEbfnZwMLLMmV5kgJv6dZPbjWNj9sRFJYNX8gnbWYwU9N6CmkUsaQ56ALUck6mXPCo",
  "key15": "4heC2tYp1u1yqvuTRDeBAVyBper6HHc7Z1VcJx1wPbqDNc8K1vEvouLMghMmEoew2rMXuZWjFcLng9vzYq4BZ1we",
  "key16": "5dxpGo86vyWG8hZq9S32gf7keToz7poGdJyhEpAh8YvjsX873oPuC3hAJXVyUxmgxzbGG8JcZxcXBP7Qb3fQWGK5",
  "key17": "5Z5xeMziBE7nzzFTNTv6Te5twaeCvoCXnwtAHZqqAQadFhQ1K5Wov3WsAcW2tLVR3VZhjtHKGcBr9yDUaYAeq63P",
  "key18": "7fMede4pWpKRRQD8ZyVKEVX3rQEPodFxLoNh4RrKqUXsE9XZ8iD9yJoZmXNc2gDsBxoFnER2QNRU3QQxahrWEf8",
  "key19": "2hgSb7w5GDV11B7XJ2GyBWT4FxCqarP7df2PdViwvWbLz9zqoG7E5fCgayBsnbfom92238vbeFoQ7x9wcBVodpfk",
  "key20": "2BKgS18Y9ZivA1gk4cfpwjfoyeQaRAdyRxtER3s6NhzAeDTZrASZwfxmHPgeZgddWdMBpFkFUrC2A53HvYVqLL1v",
  "key21": "2zWQqKVDiKvLvvFLmPJDtPHYXjraKSXF9zfUxtXfUAjk3EVMnsVvg3ADyKo9NBCFD67i4Ui8SHBbK9YP2hw5arPC",
  "key22": "5uFymXkxT2nSGcNEgAuRi6CHmMtZ2ye4CxzLnZDJBJj54eXd8rvTAxEfyN2WxnTw2Fcu3UWGFzZr2oyef2QZ6YFQ",
  "key23": "3gTBc5stjVUkoMZgqYiP7XxmHfGXNFsbXvPVZbw3iAGpH26Tgm3L2ovyNyM9ZgQR4GL1ozckFapiQgFYxcvvhu4c",
  "key24": "4kNwWXYUJY7Jq5qMsQ8KKMeEqg6nKsEnpTzi6kTpasbMT6BShSKakGvJtxJhVsvQxwa28qDEdMRanTtpQ1P9uJUB",
  "key25": "3x9zpbSipCJBaSwPtco3PPJKJpkSfoVubh3eRSTAPSa6xALwTwZnpnN2nA7kt6y7HfeQ7gVBDwPMj9zssXWx1kNu",
  "key26": "58bcttmm7J2y9papQwnWfe5tNg3HCPjWwMp1t1frWTUMasMdyUaeoADcwsMDoTW2dcwLJLa8Fr8quSoJvA6fgvV6",
  "key27": "2f6frcgr34ZdPATwUs3XqdTepuQhu5kUE7zCe2ZCBVtXy4yiWKDVkwBQP55CmMpLW33GhaN3wrs4pKsRhBYMkF6b",
  "key28": "2ZzpyW7QeSybFfcRrwTGQsmPmzjouPbh3XMkJNci1iKprmscgUxazo3Xvjf4oXEoD8hm8SvZwnXzAbuzDWB5A7xu",
  "key29": "27a3EdHhw4bH9yuCFYKCGRTWQzogdHKHN5iR7sovxtxGTNKwbBAGmjeKEsqd2JsiFVCMz8vtoQx47kKtbQP34rnt",
  "key30": "4svxUZSBQBmKn9YWMjHzvUpboNcqkwWeWNK78PDwRZ1JsQVDdDVpC2WbCU3bbnbfXMjEqA8KcZnoRLrq6bcoT2SY",
  "key31": "2St8yBZrgbMUPpzXqb7LRVKRtDD48T8CcNToR2odAHPNh9NRHLyZudaEFvd4S36PzpwGu9W1R3fd6xBzLspMtHsB",
  "key32": "34dBybippE5Lkhwv4nyUPdZ3TTVKc8n44zsu3HgFYsyztuuLBrUjGDN6E4th73bvxviexpwyyyNQcKjcUXSGWmw3"
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
