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
    "2obL4JeBJRmQkTerZk68CX6TCJxvrwmSdscrbE25Wd4sptStJE11sJQqmALZBp2TvFQYvZiHuZWuJaKeGvW7eqUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9ScDussDZi2Z1XciF1VtvkoN3qdLGFRrm844fKRB6sphe1cozuGAtagEL18B5hSA9QqMKzyYzSoiTJgWx2BrdB",
  "key1": "2dNSpomvTPLAKGfHZ3KFNsWeLXgzCE3yiqm9DvbBSKwaHtEvgy9bbBoZvR9bGRRmENHr1FG5Ys39FeevMA54LhpB",
  "key2": "41dHL7q8fnu5CKRZFH5XgY1n4E9wWUXqeXhVH9A45Y3AwYVSAYnYYefQJepZYMvhZmPkSLT9rAhQF4CbHTjXp863",
  "key3": "2BWL257fPtF5A4URmKCi5MN7koM4ixboo9WwUR2nRH6J6sr5SRTTDxFLXuDpJNPyap7ztWLeds2mqRhDkA8tusMm",
  "key4": "2rt7MD8hQL9AwaRTxVfwfoiQrG3wrnwV5w4zbLH1fzTYWCcnNKiW5kBZhAK58F5GAKoumnEznJ4xSVPUFXsRV1Tg",
  "key5": "4aaDXNZBkcqrTSxvKnRcW9jABfa7pK26Nfi9Mwsu3Lt8a3n3ZZkD2wPApFzMM9M9pCBGS1jELqnhMy5ypHWCwwsH",
  "key6": "2F71AcbaiR2sNhq3r6mSh5YNmADbhsKoBfvJYuMMR6zbpCwn7pSho54WM5raoyq81QQfUgRyx3UNriiuEGjpmeff",
  "key7": "1DRGv6QJUSU2S7KX5Soy9yaBB3xJjiztubpKUb5pwhSQ9ZELVoLqKn5DeskgqJxYvpBsifVgjknkYK1GjWmQ672",
  "key8": "jVpv1htVVShaDVYVLcASu7QudgX2v7YHuooSJUr8uoDpB7qXPCZX2KqMBMEdRqRjXCdZVKjYSs5Ea5drjPxjE7F",
  "key9": "5jbMcuMpxibdL1urprNoSZ8qnyNbu8wCWt91ZiwLP1yXRYgzVetQ3HQkpSHSQkpqMnSTaZH7W3XLw8EaLT2UsGnV",
  "key10": "35uAe9CrxLvUVtuxVRuVr4MwjZzBq3JyDQeJK5SrnRa35r2V1ithhrN4q72bLxYDRkNdWgYx3AWRNvuF1VFh2YgR",
  "key11": "3A8JVVMCqqWhmbUjaN79VtN19iuXgCT7uwexWJa2zC2f3Wco4zMXcXbjZHMhNLS8g4KpEnWzkdERGD8fYtoX1rtA",
  "key12": "3B3nXMbZ8iH3A6x4pvXvntnqgim5aquBEnmAtJCsuvZyRMZAh1EPhqc7t1xPHbtV49i4qh1vXEhZbWM3R291gDFS",
  "key13": "5HUQrytiWPDkYU5dzdiKgfg24mnJNaKTqnRS6q99ARrJpRiLmc11GfQmpaXrzQJKqBwyfBk2kw7ezYRqJzTog7zZ",
  "key14": "59GrC71hEhLWVPMBznvYqGQv39coh4LCr3zcaQZbrfRetU1yUbtRKG5nN7gNcERTW87QpCFnpCAidEnZ3akrXBHr",
  "key15": "2jRfDB85HoK2atyuXxgSafBqNxZ3mhVmnPhnvu9iST1SEbxVUXNxsxAcemHPu8TfftWX5eNj3W32awvz3at6K9xi",
  "key16": "3g6LtMLZK4pAwLqqsanLXLMiQVJCCqQEajfFm7pRMHBE5pkuWLYXa3mx8oTwALcKJCShYRsC5Cp69J2NKgmES9Pq",
  "key17": "3i8hU7zN2Fepn3aTsghwvRkS7t85GQr7rnHMcy8M447FAXcnCGu8m847AttyaBfb2ZqwgaineymicNQNYfHw3M8r",
  "key18": "4rFQpHECBcDmvtvvmGKmW7oFbwfH7tCncYbffsb73EJ3mrwg8ZowUcwmDo7TVJioHpvAsvyXdbvtSoVmQoRkhA2s",
  "key19": "43WDyEDTzSRAV31kzhMH5gZbDpWMmwVgu8fp8kT63nMo7uibPGFBgRxzvjzzFbUbWrRaDWX78GC4xaaj9tXp8Yvg",
  "key20": "5jAqBF7DXcgXzwWF8NeSRqvpMabnpNRYnQJhmhd7jEWekmAmAYX6YgFLNAfCiWHckrHdqKRXWhnS7RE9eoAc75t7",
  "key21": "38ob39ZBgZR94ZT4PDPwX84nAGXyATWpiErHtXKBvR8wLWDeUzZmPo2fHb9yq6RJXwKfckGSxksq8RFaWUqEZ8aM",
  "key22": "5C3VMTxYtYMCdybwtwTWTJ95aeYLBnPbiRDeYxE25Cstw9XMoRF1ptJfFhd5vArdv7LDk3bsiURgHHNNLoimdVCA",
  "key23": "4j2i8pZ1ayJG6iXX3LGjrchtS1TPf2Uy9icU9Sjx357Gxn5eacfRjWsCLT25J4wV2k5Z9kNKUvM2fNvRSGT6YDof",
  "key24": "5FPcaMkkEu9BAH8yn6wpBuKTLgFTf7sdZuZwsNkQohuDPrDg9mpPMfkjMUGCDhyz9DdKNnjLkd6gbPqLgUPy2GBx",
  "key25": "5gxex2AVi52p4QrMUH37EZm5W4gtYbDf8fZdyFdAz3ey5tzTka78EM43NkwpVQxqix5qyT8sXFD2NAibr4RqSo9B",
  "key26": "6cdGZR2UGTVb6zQ6yDsYLkC1dnLU9RhyJRbVYbb4fJ3cVZKYe2eo3gaUZqMbcxpRR5U2nS4WJkRmNdbu9E6hGmE",
  "key27": "5D6KETHazyocgAAMcWZyVHtRzrzRE8FHLa8M6Ppkn3NdHcgiiyfsDWnGHdsrKkZaktTgoXmiGoskZgb4zqGTZ8cM",
  "key28": "PN1BwWHT3u7ADDa5MktFDABanubLo1kqhPZN3jVkiWybUrkNu2qtzYqMRpkn9hpPSp1V4YVGL7pXao4XTCXjisj",
  "key29": "RC2pSKkTeppcenR511M5dGLVimZu6K8h4vUZ5FGdpHnKaxypMAiyaH7VDubwBaPAHkceMsWF7xC1vVPGDwHikUP",
  "key30": "2rqT16RKnxBgejRSmWskbx3QV8BETDsQvgf2KDwkGQcr85JAw98rnV37GtuHSpzP6DWTACmoFoheDEPAmuPnRHjc",
  "key31": "2YaZKgyMshmnrKZMbqg1hqJwePzVHeR1rXQ9NwJGKBBKgpnS5pMdgz3SFLFPa2eBR3pCm3djnFEhbnKwd682MD4",
  "key32": "1cyuiaRRPmA43ojnKidxEGe3DTpL3mRtcocVyCrZoyGTK9c7pdwqBw9UzzwYWECoZxqQpCDQTJriXeTZpjx6tDE",
  "key33": "4Urvy32ysEHswZxJztynbJjjVo5x3J57AgJJ6gVujCzW3G4u4KPvGaksdSknoXsq5EL1kKkfGdFC9ycoP7xuJkT5",
  "key34": "LFFCjkn9DXTf29rnZ8i3FyCRbGAPoz59R3CqzvGhBtACwHjjhNdhBi2fXkqtfqRgXSATuxHRCFomHEtJgWmvUs3",
  "key35": "gbEL35M9Mytji5sroXKWLkddVwHLKdHEztyvE7fJ4wRJ27NzCuUQ6Di4RagP3nVQCF645BZxBb9zkCneJVnUM8D"
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
