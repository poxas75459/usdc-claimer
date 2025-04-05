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
    "38z4GLCXs7yoCZRkgcTuGGQL8MonZwk2AqNZLmsRP7ksiS33BjBJU1j8pygfwhVtAhQVJSnpGF83MW5hmhazuWiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37FvyX2sZAbcDtekDGyTwbXEqHgsU78TYvGbHg1KXxv7ZF6dv8e6LRgtHJAcKiK4AVyjdC5gkcVbmbSERRXRagmL",
  "key1": "212P5icjcXXLL9XBoUiTswqTFgu5Zr5JHfosvVVNtq77kLSMwcRQxvfdTG9oDD9Lir7zTgY2qj53ppBDwzuEtkF3",
  "key2": "3bj6ohHsNJZoAo3fsb9maSw8iGcF13pTasWcB2VAeDxs7CVQNVfapondbvtirYCuKUL2omkrcXtuayimEJ2f1RYq",
  "key3": "a8yRdGHugvepE7S2uVMDoHt5zpqRhCYRdf796MwGbmQ9u9EfYsj76FzSyHH2BKf2fjPVj51tu337GJwpY7b3t1R",
  "key4": "2UFQkMsHNtGspvpC2hg8aoCDvjwySycneMQPupqPaU3mv7hMYkKZFpqGj2SZfF3csszY9Yv7XFsmXmeWKKDTKfJz",
  "key5": "4WbYQYJnZ5jBFrkWtjKjcMQQEdpXT1bJ2QVN2JbEJdnf5jWm7vVoTXP4PcFUMoQGex7dnYagGL3zeXemBbQDLZ5P",
  "key6": "2mnP6xzPQfw7PtDyYKM5UgzvKnFDRkT9Tjr1yKod1ArovXNQgfBLS1M27818wV3tjt5o2kbjoqN5dhBbm2x6Der4",
  "key7": "2awuvGb5tMvWmdmK6EMDc39q7PD7bAPyJ6qBso48FWuG48p2X8Hz5SdFH8t4terx8fWQeg1BazqcC7Unv7KcyKqb",
  "key8": "1b7HUpYKY2D1CGh4k53BK7LcJq25aa62k9NTLxVSYBegaYQd16p8b4hMBm1X8Rpzw4Rdbgmr8gngsPtVWN37Y41",
  "key9": "3x3j6JbtzBMhj7KRnJxvRUTxUdbW5zTfCiRY8BMGeiA48hccoSND6q7HJa4XVa2YoYHJmDLMTv6mcRB36CK1Xp1e",
  "key10": "43sGqShzsmkpkpp1je7oNUyXHfERaQLPdSqiKscjq24YtmWFgt6JkVGZ6RnTSr3CokVdJHLsqAw5nRFjXxTT8PL6",
  "key11": "oVMheHqo58KuLG86PBLW2ygbxemhT8jkASCei2gopBNpzuEnpULiGZQeCvVM3jhi1aVyUyWoEV92YPApscyqnXT",
  "key12": "2nAuodLvUJ6LTY6fjHPLjnRATERcSpSpxU3fRMe31HrRAwPyzQzttjssKgpExxggCYiTL4v3iiuWTZNCpobgtUet",
  "key13": "2aMWXWQBFJWjvvphj4CC44VBLsYCYLJWAw3HtCCj9nfaYwfsx5iLuAGetgvzqdiq5xUW5SB5d1eAC687rBCRbeqC",
  "key14": "5WAWQwX2JH6DrynG7KsB8bRJ9gL8pLkzB7aoBGzthgH3G6XL8u989n8uejeSdnK8SSNmTLQTDjrZTNHYRfDoaaHA",
  "key15": "26NhvCcvSinYLUYiwRjWkyQW3CotCDfThNPBeGcKhSKfBJjHZtUi4VYBam9DzHS5ktZUJzkP6C23p5RDKP2JRQeX",
  "key16": "4DPZd4J3C8MxSLa3fvVmpZdhasu3tDVWDet1MsyURjNJ9F3UVkUo7k4ApMNBdVMP3jfVzHXWSwUbwbpS9P6fcDeY",
  "key17": "587w8nGeewLMGb1Lgg73a67mYfjS4o98w6gRpQ92r2S6rwk2bi1Pi4VN7cd6VjQKQL6E2Tt7NgXNCKpywtFDbyuw",
  "key18": "4FUSq3mUZwn81tRmJoCWGFee4LdvKhu6vZVwrCh5m9NKXpNBaZy3s8kubsBVw5jYU9TA1NfPEKagc1aCnuiD9VHB",
  "key19": "5V6t4SmVHmGRZbbXSkaLyUoMCTZTUoZb6mCvhwu41DseLwuBrJHGrBeKWyuJ4isqbMx2jjAuvttfKTBeYzowxdea",
  "key20": "4XTMvYwnPWf54FwS1gJCarrFwMa3BRVyaQPiyehbGumwYsxANPfS4SY6S4hqNG6beN8VSyaMFJPNDvNRK381MVKw",
  "key21": "46RtMiRdGtM7qXXMy6p2d1xN9CwUy6xtL6xmD5A5qJWBkY5MrJPGMPShrfdSHqDDbvGczTZVp9Z1636JLw2mryJz",
  "key22": "3La46xXkEnDJMqGZNLzGDHruGJBZtk4jXrCn5Y39Y4ZQSHDUtBdz1BkDN6A4MVQzDuEY3sK9cwvuXkWGmePhrTSF",
  "key23": "5pKeUcCPnY72C62iXY12gmSLQcdRu8vLMbvu7comQBHNBAJjn3dUGnUphthKtkx8D5WFcAQr373UwoTFp77ALk93",
  "key24": "2iDMM6AL3XyPVPbiffu6TE6HsNCKkmM2NxwJfbDCZW5DDM2HEz9ZNvyw6gShfzP7T3Nu1gD2v6Nnth4z3oSxZLgp",
  "key25": "3YeX7UNWw3ATnyHSURTkjBQJ282DLcFoffoA3VK3p6Kmvw764oia7gWFkrh1gDsNW77JdHWyzFcPsbdoB5xnA1Vs",
  "key26": "2oE5ktCBErz8mh6VZkbCDVbcPBFPHxrkY5k8XgLQJq3q21fb7UafxuJGvThjUm1UL3CCPegTR7yueyCroyqGBPpH",
  "key27": "LfuSfJR45PLJ6u9HNDCYPousm9QY8DkCRn4VmfUgowcxLVWjAoGn5dBBE2R5LcmoeZL2yPe6uRzdAZU32hjniwD",
  "key28": "5S84HQUqSigMoTnxTZ8Ry92D9AgrauGnY9keC9vEpb8SdRwAYz9FUxVU9kg1cM5Jg8wiRBgXZEQCZenX7PHTgtcW"
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
