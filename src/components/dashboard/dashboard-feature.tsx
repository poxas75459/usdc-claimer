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
    "4T6bM5xNbwZ2Wdm294ZZoM7wEWYHGqdE92EeQijwKQz3MpCCnVey5zgeB77TCpKNPD6mhXFxZgf3jPbccC2gWcgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvp2kg95ycLQAHp7xkp9wst9641DPFvwTQbpCxW66yZZG2AxHoha6Lrgb19xVvxA9Zh5gegGYbGUoyCDFzYh15j",
  "key1": "5aPhTidi3jJ1AB5qGoaJucbGy5gVn1FnopkgXzU1sQxmtn24kkHkqYLWy1pNe3Ti7EcARKzMMFGkiQVW91fKeddb",
  "key2": "5wMGQyiXodSbuLc9AtUb3Bbhha3RtihCbuZnoC89tiCWYGdHb6oGRZTNVH4EEunEt94UEUHvYSugTJsiAGc7Snh5",
  "key3": "5VcS42fHXyfW77pbkmDNyjGVP5w3QP3de7MupPCeP9FJwqXZJHBrsMmjtezyYryqHFjhTuTMVSoY4HNdrkEx4eNy",
  "key4": "3HPj5Codr9mcbLHhazoDmeFFrdDK7veLk4UtyLfDpmLW1XyX89Vas5DWFT9D4YXnFpJyZdLSvEH54DEJJAiadb59",
  "key5": "5vEbc2UjfVodCXz5hUBveAuPGNRfAztcaSZATWAQPcaYrT844UM8pfDMFbiKbsXDapdJAPo5KBfw96YfLXhxUQDV",
  "key6": "4XtQN45YnHrNrw9QC2LjTPY8DtMFF1do3U6DY4SRRvCJR8xn4UM47VtXqNguh7cuQqJ9x2wAjajp7kQ93QK5TWdN",
  "key7": "5zBKu99yTbwqkh4bXfWW7JMBpEDe3HVyttLxVLSBkrxjSqFB2y5rekrY8yv6hno1TKCGTBpCELmfX3gLKtB7sAZx",
  "key8": "oDCMaZxbmzWBvKfwkT4z6jQQWmtwa55DMyhtsuYX9iY6RbhBu2sg1oc8mCPWtmf4p1PysnuyRhUasxr4myJjx5e",
  "key9": "3ajay6JVPbxBkwK8koDv33mYD8NGt6v5Wd3nsZnWvAiWdW7MB61r3uvumcZUuaJgvBJWvaztuPFeaW2QM9nmriZ3",
  "key10": "4tLTy1vZnuLS2aPFFdJFZQuhjsD5mMHo8XWqLdpckazMBKSrjRyS9RaCVDQeWK7bWcYRZpcfkD6PHYeHxnzauUyP",
  "key11": "5bP6vSFyEE5U1Zvcqzi89UEZVgNTjG8zAXQEHQSiuvDFfNBPdoCPVnxaeWqNCDPUoc69iyRvE5N89kwy3QB6AXza",
  "key12": "5NzxYCKT2WKQaMd9Q5i5ExSFLJdkNcGWBC7YcZbE7YLtdnUZJMyuQQNHVBRXDkf2rH3vBjTdv6L3yqhTsEMEAKaZ",
  "key13": "wiZdQ2mYKJf2jErYHi8CY8JsPJZaNiZtzsu863388AYuByAMeHt6WZ48mRsqp68pb1sCuXg2JowfcTA7wTutuYy",
  "key14": "3uaihXTGvZoJuA5H1F7ZBhKVUjsxMJNcPn1vHooww6Q9FmCocMH6oj7G718P6iHyAiCaQPwjHAdPxndbJHk5BdHb",
  "key15": "4JStzdrvVoraCCv9EVspbVbDX2iWr8Qf1kvppT6brTCxuQ9hj1s8JW6GdwVc1uoFHdFfCtxiCVF1fCCBYvGjGocp",
  "key16": "4Ggy9vYzdRxj82Vov9ir6YJURAwfFAEB7QwqvWxDd8YQkqsahRjpaE8NjZfC4dCZvRcfmSb9Qn2z4jwkGU87eh8R",
  "key17": "5ihkfbKgpNYdTaX842sPRo5GTmZNwrGoSDirijKxR39z7VA7KMqUmRApxz7HQCYJ2ycrPgJKLeZfJDTUrYo4EY1n",
  "key18": "3rEZCxYH7Yso4Gc94oMwP1nwnzw2KyvGTNoy1h3DGyDT6EytUQzdVkUfeNV76BK1DyNZCscxMFLfApbmC5M3RwBA",
  "key19": "3hh7tXx58uak9CdTVkb38ASp8PGmUYBYeXpNN6f6dtXQkwwFj1bcCDUWpHpX6bEuk3DuKkop6pKGCiZmdNRhsoo8",
  "key20": "3CjQ28Bv7ui5LMAwgEBxrAMbcBEmLDg2p5bLL2n5s4rcHGLdv7RAVAtBg4E7A7bXyzDDh8jpME16rJtjEi638cSf",
  "key21": "2Vimj8FtssvoUdKEvtaLPxHLoyQ6hZm8DsDYa9LafSiNS1ikJynvFJ7XWGFfkvo75K3fmRLmYLtZX4WW7cn2yVjU",
  "key22": "2yWKNagS9i6BnKQRDa3DXwDXmH2DNL6kkuaVBCXegqhsivSK5ipPmYJNd2VxVFFNCiaaDqp1ST5RHFfJojeWVfmS",
  "key23": "4ua6rHdcErmApbkfvi3NoAQ4TLsNAh9KC9w2YNNtoUAechZ9v4GQGuTpDL43fCcwZWPJysHewRLn9cDQouqJSh7n",
  "key24": "3zt3Q4WF9Q6PXyv73H6QFXmKkzkRGECPmyynfxopap9pNJjLmkgmBy7pkL9gah1vwCxbssXcmNTe2evdLcyxhHyi",
  "key25": "2PUKsSRzvgxi8WUTgm1e1JELkLrrbjshaLjhSDLStx8bRc4NEMdGdrQMCHpkMCZumq8noi128LkUYeb8P8ceDEBY",
  "key26": "VTDrAXjeyvpXk2GtDMsoLeWpdZUzgieJzFseW2MnmrKAc2b5LS4vS5zgiRQPxXHdRmZkXdEwDnkPB9uASVcaSKM",
  "key27": "actr7acXeLPPq6FY3jwkgxkfuzZeWiCANfvxLTNtKTz5J2ce9omG1hmkeG6boHoqFxzHqX6yc85taH2xP8HN5Ax",
  "key28": "46eRGbj4zacUGCHypD44x3i4usCnU9tToWEuksVGZMzBaiCa3eJ4uHRhuusk4BvKjonUYxMDcYMpc7qHJY6weMvz",
  "key29": "3WMSQufRUZgkSeoQP651m6QcMiYNYTFcXDrCvNrdyPg7FNE8kfEGZW1RP1Xi6zTkeDSsS2MHSJBEvm69gSrrCWoQ",
  "key30": "GGGjeq3CgdEQm7Wh2eRbEmcB6XGNoebVSXsaA69dXW4hZvhxDnEk8JLgpBeXLboNniCvEX5RakEyEE6v2DZTrup",
  "key31": "vox7eEsgH1mm3UkMS77u1dofyYYgfgZwgmZpDvt67gGWqv1uhBZoRGkMgCUJkUCGgscWvrXS518LEaz2Zedmbm6"
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
