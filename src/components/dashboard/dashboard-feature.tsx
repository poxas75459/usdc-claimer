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
    "2zgy9chhM2dam1PwRUrhzMPyCKTVMm5TLKdcEoVcQggKq721iMoAn699ALApCBoNcKGdHX36qifvzEb2hbmPtX1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58wd4R4x2i2Hzvz7ogfv11AG661B8NE3skeoYVcpbHcQYGAgsAttSoBGsnyqoJJgq29xHh3rW6cpkCrW4hirYwyJ",
  "key1": "21tK98GteLkUovyCdtSeC2ukyJnrEmKCdWzUFhTzVpnj6PvQXbQ6LFD5XPAwLRnhPXbu6h6exN7ggpieM3FEcERs",
  "key2": "5CGy1fioTU1RGG54iFLzj5Kuk8b6RLBcZpNvDskj58HGEPjb2Yd8SuCRMa5c6YN6G9WmekB3AwTmdv53nmpK7us1",
  "key3": "hEXLHRX43PfocvszEXFEx81ZHLRv8s52KwuGbVNiEQLqP3KwfPp4TubgtGpMYYDZvtcL6A3ec2edG73gV6Q7vQN",
  "key4": "5PMBpDFDCoy3R9Mcn3dDsYFGim6SSs49hKCtjdgSzatPT6hzZJmT74jr77xRZYfKF8Lu3Uiria49mCT7Tk97drXs",
  "key5": "4x8gcLzYK8PgAGHLNBbmo9vv51ok7hHGFjPFjA4X9EPLiELeDPnhVe5sYz7wVbbWSf1EVy5KNLj4Aum48WLiNTtJ",
  "key6": "4p1vpj9es339z5DKqnUY56p7SgeWxGzSvEWabzojy6YdcJz9nBkJuzhVdb5jibPdNyL1NZTjRxyKRpYqrcPHjC1W",
  "key7": "3ryeUFapzbkou6CM8844TTpa2jYmFrwQTnNc85B6v92yDnbMXfxAJ7VUVFC64VYHnEtLjck3ibBuGLVxqpqaccRy",
  "key8": "LWpnwbe3294qPNfK7BDnRLBJiuSgcbHMdDVicYCAAq92J4aBzFniHThJ9qJXgtBfHPuAo3HR3kEvJPBE6w36To1",
  "key9": "5ZEdWnXNLnJEP1HB8XhovSWW9JsFHqPg3ZTsX6kXQo6c2i5NGtVip5MySEefQqQAPzGDuTkFuqgaoDs7WMubqnWH",
  "key10": "3HFmWYPHsgCMYBtKw9ELLAH147XKcSkDZotc2UGin5rSBhLWMqHP2cZQ1Q3cYVvLeHoJ8h1ccb57PYHAZavAtqQu",
  "key11": "PS7ZTVx82wYvDijPtyn7Np1ghnKjLWMgVWikU5syg2rGGQBDAy2CJLXic2w4MSLkczcJGzXENND4bJ5N8ao8cYB",
  "key12": "3JVXjcy27PaXsshtTKrzU8zMd2Qk2QsRJmCmm4NVHg6dm5LGbCuPn5dJ5Jc82Ci6K12sYpNBQ2VCyyQ5Azjbi1Kt",
  "key13": "34rPdFo48ajXEdZP1rk1F5rfP8fpadCpj8G9FdEAnj2zWq8VkHytxCK4NMvS3DRUGCmSnHjHwP42TqewXoMAcmMm",
  "key14": "TUd2MZrC5xwoeVadwnvxLnxj4jW5iErZaGTquV2QQCsF3kdgJVev3ZDX36ViMbtUcGS3h2LWF6nVuteVnWUrTTg",
  "key15": "5YmTYGFJZYhPWz6HvKz8TT7cYqyBcWVoAcFL8T8ZqBixv5BshUJHkMhocdxdRUqtxDPp4iFEmJyUx9Fa5i8z7z3w",
  "key16": "2HgH2iENfQ2ZbTHmjhjM7aYPkN3svQQtPqiotZB59y3QdDCu8EkEEwcu7qnVm46xKuwRKnAKMHAaiJyYyhAcYefu",
  "key17": "3eri2sepphk6cuyxd7dXwYWACa4dKXCSKab1ZJXbCZNoECJJbeUbW4h7oCCntQ1MURXKMXVXdzQFuDD3pqLp7iT5",
  "key18": "5B18egQ1XjWvaiwYLgnjwGSSKJ9ntQwJrr1gWHMLDxRdUweX3yCnsuL6JgPzjxc2DuCoipHHnJoocB6y3u9ngecB",
  "key19": "3DfLHATq6WCyXLcaVKShP79J56gwieNBNZjT5VdiYwU7wi3vXs3c7w637RzMabaN9qK3pEcgekA6c95KXYGPVLzH",
  "key20": "HErcWiGarKacfcN4Pin2pUAQWZ7BwUuNNZj4R4shBnQC7Jg12NBCeFNW9C1er8Zdk3BmZ3PxPd19gETdJQMUusW",
  "key21": "5wtEFbVmW5asdJZqADfnx6DrqPXZZQQnMxpDs7YqmB637gx4nGQK6nyiAFHxDTByD5uHAFjLMQ7ET7TWJG54gnPj",
  "key22": "5mdBzhXYF6EUFcr7bjdEyPBc6e95aVMvC8icPUTe9cJpFHTWgGASMLLuqkMZYDE6n75rKEJnsahSjwehUp4RZUfS",
  "key23": "578byVG7BTFNH8oQ6VYdTN1fHHWDQLr7YQgZHkJYWXr7HX9zQbAfM14KYqtwbwVTFjW54mbiejJzBvBcP7Xp3xf",
  "key24": "mp1AFa9gZESefCXfqfoF3SyrJCc8mB2reUwjPji84JWFpjymkVjtHBHHgBfKLQw1q24adwucZu2gLVrkPiMuy7q"
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
