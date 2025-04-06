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
    "tTiHqsGNKFBaXDip8fnRoyQCuwMjCUpeTKSAgdF96Urq3y7M7p2TxMf9coBKC2GoSrv1TcdSzs78zYeq9MXH1HF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GvJfRRsaPq2h687fqpmeqZ9wbDz4ZWPPV1cxyGbK3VwWoE1mg9SUA5GktUzERMW3PgbgjdSyk8a4kt5iaPswCwf",
  "key1": "3PqCi7h7gaG353UwgJe8nE3ukgMeN1ePCWA1bscMfJNDDDNiU3hhF9PPAw3frBkXcwfVvAzcF1816Ng3RXsxuBRv",
  "key2": "3e2Rymr8Eup7iDUoxd3NGJberHBqVZX8Zg7dZfR8eieCaYPH79M8oyHzapKhodDSkya8TK89GaM3SDyoVbtr9aEU",
  "key3": "5mPac3NbLend8HG4GeiAPWxBgp2VztFJb3iUgSqvXY68gv9GE7U97LdUc4XbdKXAFWwBuiMDFaH9wSx1ZqZpxrRS",
  "key4": "5iCyKoZS7SzqmExuX6foAY6FJvE1WuA522jL3yW5mVAdfwLdZsvAT2uzaYA29xrmFarNBswZTGnHcqwWpv84cseA",
  "key5": "5g94iKSuJR93pHKLLdi9wmx5ETtBHvBwmaZDEkqP7kj1Rd9SQx5vWD6BFUBN1DeH5sgtAKBRrYFfRxG8PoZb5VTK",
  "key6": "4heCCp6miSGWcFjNakFoqcW9fHVt1cuNFyqwxHK1vmMywLPRnGvJ2mKYFH8WC8TkG11bmzZDRgKfe2s2XYddZ5D3",
  "key7": "2uVaTjBgQb5rm3SMW2NgfDKXZRPacKCHhx1yxygK8U6RTzQuq2VEA7PrmwEE6jRNtQ16Ysvk96ryCwVeCJzpFxwS",
  "key8": "Pjkw4Zevun8WZbAEweftcfdjxkAjLyeZ4xJEHLDT1QVPJhEzcUNjxbjZUmCyM9PGbcSyDFfb7pXqQivrrPP6qt9",
  "key9": "34P6tDWBLVjyzLWANGN5hrubFXwH6Yesb2gcQxQe4usEDssVS53gsutZ2BQgUE5diDTUdk62RUHh8H6n4hrMSquB",
  "key10": "2k5pvUJxArgYqZcqnAyyN6hzt8KVdSozeG4N1HMBMpwWLy86gHLwuPz9a5gUFJ2CoRhN6bMPtcupmixnvuJL5BTV",
  "key11": "dYuBSgtGSw5MtJjxdY86qLTxx6MJyXpSDw2hcgXFntQxHD1oWRdDNP7gF9QaAvne6qLZZbba1Fp7yAUPHWqUd8v",
  "key12": "3sn856Te1YTa4apEBMzaeRiEJMKSggQstyEnPXWS1ioshGzRsANcvwV8Jch9YcRYKGZo4YFjSoM6FbyNdgkxxcAB",
  "key13": "5bjecdro32yv8hfUsuS5GtqC6pNCSAXjF5qTuttq18eVN5TFiL9jXb9WaJ7xPzNMcF5hY9fbAj6iCGxUhARVzKXY",
  "key14": "2yPb6YXBNkJDS3pj9fLrUJKN74AkZkJ6qhsEpFe5tNN5uKvjPsyQbiK8LK1Tp6dNToLFXfxyN7sTAd11B41eZUD",
  "key15": "2zWTyr1eKuNuoaqi7TL6gwhPRG9BZkamLWz3aKWz6xTWxbbEWezeTPtb85hmUfRejqDYZhoRRqJwAdSn89dCGp5r",
  "key16": "BKJfnCoFLuZ9DpN7RRZnMCG3zcA3vUgcCKSBEFj4o7j9CoBExQWE6hnNoZHmFCdCmBFQjhNQ22YgziXCyiaDTAi",
  "key17": "3tPor24k89J7XfiZfVCN9Mpqwq9tWhwLoQX6FjTec4R4zp5neAT4s6NLtuvndwn6oSzJHiASuvRhPjW3pPh4E4Y2",
  "key18": "3WJHxWgFeaLQptTyMcpm7MeCtU5QCvCvpPWjVfC4Qatge2JSQ9txJTrpiThY279pEQ27PukWwFvG1iGENF5D77uF",
  "key19": "3MsFFufDYdMKPbABuVAFU94u9zGpcdyrjLh67XNsgCuzay2vi7m2jU6AgvoczQPKSKJ1aSj3mWxy7Vw5atHz7E7k",
  "key20": "2oxAUaGXqLBLPqfw314kRtkQC82HHwZHksQxY8tDM2Hct1dY1wqbiSfypwSUE34KjTcrFhHUgPiRRV8mU4Nz39hr",
  "key21": "2QEsyrSDKoKaNgFE5vN8Cgg73wjczdwMEBNqdw4Ud4FrGpZUriuAUnNiaNXKWtYJYZ4V8CWVPAy8YNwbHLYBjoXg",
  "key22": "5Zkayn3Y4yJni3ETymgWXZzbuJbHSpyY4DmqzGaMWui6AUmkqqJoYcVxk9AijMpLkYeAeopHzLvLF2r1Qi1zrJBr",
  "key23": "2VgGoGhUYr9ATDwSTMwMqhufcM1cXuQFwQPSLzuRDbqtvxNXvXNc5HSCtkGe5Uqb4dSQMLQQpn57iVv11qHMmac1",
  "key24": "KiD3haJKx1JptCM4GkyA5YmHUgBLGUET64j8G7B6Qqmk2qsBJHY95FBwdMUZqTMT2CBn61jceSWCV7ibMJZ517B",
  "key25": "2F8LpXjpv9hHik82RgAqqdeXkdUeDg9qZKNbkvivC7hxktLbw4SNBzz4yts3mmCtiB4Nw5Ek9kJU8qqkcyZFQmBz",
  "key26": "4Lhu3oDCDETUPwroYebqocwX4ZnXnh66DAtHaQMwML9z3f1SWN9BNpoCtKwvdNxuWPDT3smovnGtqxZRCULMXYJH",
  "key27": "4tJ9Bn8n2CeTa11Yk2SrzRpwCFgmCXsLhK6yu9MaD9XJVb7d65iXTGUAsVNJWiy4UkaN8yoXSknyutpRK7QnEQ7L",
  "key28": "8xefXmj6JcHgNDHeZPhzVTMbYnMb94rBsrkfBb8w88MPJ2CBeUGMSqDCWejSRwV417jryU3DurooprYr49b66BG",
  "key29": "5oBGaZiKEE6tVju8wZpbc7vJ9Yre9ZRvPLKea6kLdiW5LVh7ox1GRSFew1HKnGEz7WtLAjY8sBbGqs3xrFk2evAu",
  "key30": "2y6S4V3Bww2CkHodfcnYxi4rsE3AoWKZYk1fqoV4zyEnpeLYGQTh7kmfKjpwmidzEZfwakZG6h3EYHbtFfo7XQfs",
  "key31": "PmPtT1CV7wg9saiik79jsFsPg5FkkuGQTvkS99SqVHWEN3ypzNDVyiHepwjD5cru6M8SpBWfxJAUBbmaWehjc84",
  "key32": "2Jy9Uq7ujfcXsSvbjQSSeVksuz9FYgqi6h5F4HH2ZFU4Bss6qaAT1ou4H75pqBEYVKsJYCDGoSa7E17TAuwzMPst"
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
