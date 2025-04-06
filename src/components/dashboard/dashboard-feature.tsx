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
    "5q2dq2XAUiXkM9LqWrjopw5DTsmxarK1w5ntFr6HQSkvtG9RwqtKVgctQwCG4eZEJWCkS1yNUUqsU7sYzociB4Ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtXwnBnvdG8XVnCBRKEwZQFNc82upcEVbHY78exwmtycZVaNimWU1nGaHU7e6EooLwqAhc2ouAbDLx565wSd8xG",
  "key1": "32feBXkDruexV8AEpsMdPRPfUahrPhsUBExHokRvu6DHbhn8JEcY5Sas83jHnBMcWsJNH3USRwgTMYB4HGDiUmh5",
  "key2": "5W8g7dFnaStxuffoYZhdcZPdhNjrZnj2ZaFhhuDztNJF1WtkGwVJar4QXwa3mc3xf9sXhCVGEMQ39VFEapL8D3j4",
  "key3": "5HPxeWZaMUXAo2gHtZ51zEaHmFeZQ58H5Uqtp66nYVsZESgqreSodMi7V8fupQZH74jsJyqw97PsqZRGN4i8MeE3",
  "key4": "VEmVZfppS6Aphb97UEkX1JwVXUW5JB22mX13o1Ti9opd3Xy2Es9dL6qjnbLT2BU4kau1CjfuwzyqwTLiWhERBFg",
  "key5": "84yGEPNhnAsfb9eAjX8bZNeezDizgWaMXbXBxXKsk8VsfUConbJz2DsDYhKYhjmorWDxou33vwnjH2QnfrDUiPW",
  "key6": "4aoE74Hi3DJ5xMfnp83e3oTrC14ge9hEVuqaHMWTBCaiAoAebmKxqM1ugBhgN5M6SU4JPE1nWZWgqcXrMQCqbbjY",
  "key7": "4qoyQZNhNkJQ4bUZJHrGutS5vksRLDQMpfGWJ77HUQuFY5wKeRhBK8WBvzLdP7ak4zy9KddRjF4CSiBtQYR4w5je",
  "key8": "3Px5Z76iAAdqZeS6Ki7fvXaf5ou6NwBT4yLJ6YnAgAxUm8V7xKfrvKaehTpBFm5EDJwJBYt8YNWiG9t2S4NeQR33",
  "key9": "48cwVk14WXZEtvuwZ6GnEeyJRhUZUKHf1vB6A14dTSjG1Gthy3LQRYJF4Kf4hqMZ25o2dPFJ1QS9erydjaUTCVd",
  "key10": "5gt2hdNswUEDq7gogUtUy8KbUVuS5nGU6AMN8aUmhTRbWhXUJRx1m1vuFPqdHktCb4m6hQjJxPzXZSj6a1sm6RHb",
  "key11": "249tUsWiNm9YzQjFCXzt7gZC7Vomtgus8YjS8LpowMsQaRVzsQChnr48DNPj98BPo3EvfygX4N66vDWJrbMG7xmP",
  "key12": "4B5Qo4XzfE6FfeNYWZ24LsZr61vLQgNGehvAyiiAABgqwRRakaWGBSXYB4nvJm6joM5QfZkmSFxzSh4VdszCTNRz",
  "key13": "3EZmG1zMgBXup4UVGoZSyPoRHnnKDLZCodQU8eg6QGgdz4A3smFhZFeoyHQF6Bnh7bMN5EFFPdp9YURCVmt6D7wX",
  "key14": "5SSrKjX5vEMj2WuGgG17wMBKh6T2Efb5VoD8ucextoP49JDmiBvFtpypaZ3isEx9fDmipi5AXUf1rryy3cy735Mo",
  "key15": "4F3GN89VwCFtZfPVRQg2KgBT3sEETnfcHnUPoiGvnsMZ6ohYvM2m9fHuzG1r3rgut9SixFFAuJ2Ng4VijcEZYdEw",
  "key16": "2mXQtz2zG5A5vzEoQKu4jxiAgfhNqsZHEmG7pZBaux2DSNvfxUFb6vC1zYzmaMqqp7hUhnjSA7bKsNZxv1QXmCVU",
  "key17": "3oxy7zfNs2ngcwEizJbCGHoycAdFNsiJpdBT5vgc1vQQcHJWU7kJFYsSxvAaxJPiZN4oHjSb2CHgFVBK7fN6gnaq",
  "key18": "5wpKEpvV4WdMmNqd2ZTSPpGGNr3rTLgxBaX9QzW7BG3Q63qmtMHGgMQ5oMDZdBHDWkAiM7iUaa7JmrTQ3JTduZRi",
  "key19": "5cWL3Ei1d1t6SMDvFotFK4taQetsRM9N8jdcew9MCcXujfD51adBsfAsp46osWsRWuo4vxtX86FsYtTWsYspTdSZ",
  "key20": "43MgFTkqhTWeU6yzFaxYhmRXadbSSWdSAGfQVwxpfz7ykRetcaLjAaMJmjhoXbegc1nN7udktodj8yAapfSH1RpQ",
  "key21": "5xr74YUD3B92fdtHu7TG3wBk7rjnA6G2hrVVNLjwkxFY6dGzz6Jbi8sSKrGgPC8KqaKGNtSuCFUYqYYuorqY1yWu",
  "key22": "xnpA3v5Z9dEYNqfxCdQAvxDXzMgiv8BopvzQGbLastTSg63QxiG4oJroo4rrAoMAXXFw1jTkwTdCJn6145rheaq",
  "key23": "23FyfdS9pjuLErE1rh1RK2Prpva2NjmEuCG4XYpKCFuiybJMoHejqSX75WyoT1XyTWtGtDPEYPx5guLCos4FwBCm",
  "key24": "2v4NCRtuHxXmDpx7DrhVLYDmfqYNbT4AgWX9UnM6HYXrLZPJbx9F3nXh2tRcogjjt4Lt3sLkBMfNBvTLzyWCQR86",
  "key25": "2Z61uQVpSBpvTd2N1WPvkPJV6EREDa5mXqRFjNt6i5Q7jbnXJrbqvsczh9TpSDVBxnUDSPUiQKC3jnDU4dV4Gm5Q",
  "key26": "5Z3sa5roCXfRwfdboKmYBfDxYqM6DykWRXjb4rG2XHrCBheduns7kbjZgWVtii8PwK4SEBS3BXHgM9CfJ1fkG9YE",
  "key27": "122zt3yQ36NGUghoG5sRdtyiEPQvvhQLj7XisbyjRY166oc2QoPYTryETxv8WsrQQGw18Rp6BRynswtYzv7KBDcg",
  "key28": "5BmSfgMwG1oqAqZEV4GwBVqkiLchNamLfAUuP339t7rbzytAsXJgWFXqTHokwUpBsTK2k85DtfStxqWcRCUTjc4t",
  "key29": "4E9oc8xh8txsQNJmre5Zkxmamzw1ywgnBDxDNQHMJJD7wecnr6maUCbizq9pxNs6XrH7Q9nWw7kmoQPPupaihqQ2"
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
