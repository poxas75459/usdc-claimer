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
    "3EF2JukTtJYoCW3NcrARMTYCnWQnke2RkKS6Tz1G8D9uEfEUp44g6sRPnLgCaFiq9w8bXA59ym836HCVaQEgDvru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529DAL2kFB4KtTY2Ndub2xNnn6i4iPMJ2gKHZ8M7bmG8LzmD9YzE538gxZmAnHYqk2eW8BfjCPbKEQ9BWWMWNYdx",
  "key1": "3AkW9bnYgYQ9kXu7fp4AWevg3tMv1ubz24Cfn9a9ZuAxvpFtC5akgC1TKA7zQsx8bugZLjQ27wPXKJYBmZ8pudrm",
  "key2": "5nnH7PZnPTm1UtDrwgdZ4yDGg6rGaP2pr7UqgufNpt6MgvWyBMd86iPvrVZXUA6PW82zMQ8cXVsVviJWhr9pzisc",
  "key3": "4mthTqGYbp7B4DeB2PmTUAgQy4B9SJQNchWGbtYDzvNEZeescBpEAfqChfZzNhZosRgnxj6sYiUpA5J6smaKTNND",
  "key4": "2qLPxoYty9JTZYBBUV4oXYccfW6AG3ejbdD2Z9MYg9N6A2or1aveCU31aj38Ra5sMr73XQeJXbSZRSsud8BHv1ZP",
  "key5": "5xUoZU52JWobXjZAatrWAmcKCrYb9n6nyF7eh5Tk1tcmr2ZJXE54J8vdsLjgPsWYTwJjqG7TChL9iMb552svR4nj",
  "key6": "5fJ3MYADPpnSrNS5JspFaNMBuePaKVaLwFNLxfqGhYmk3krft75GJw5rtipz8zPuDuUVDyQcamaSD5nCfc5qm2X2",
  "key7": "4qtjy1QuoRiMJoH2pUaTKjHVpQkkpRjWbwuYpjzKjhkHQVrFKvG5GbjnA9Cfnjzm5cijmz8pvofVS8u1HtGqXywx",
  "key8": "4KqkyWNjN9PgbviBugsovUkVkozPQeKYD57tP1zzvKpWLSewZHt3TiDpFFhJHjXCgwDJK8oykoRMG1audqseiihQ",
  "key9": "5ZifgeY5SEvNu2BNBxhWaeXNC9mvmYbKPKvMfZZzweS3cVnjdN9vWXDqqEKWzk8QakwXmeFswYoDRvfP1DJ42Ez3",
  "key10": "LNPqnfohh8WVVM19vWgxDe73ZqFM61Sc79o6AZUauQqXtUnBTp9CGcxe8dRMt4MTrTdkKDCW8b7AGBAunyU5jdj",
  "key11": "4hWhW38tK3nEGfBBSF31af5z9gxEwHSWupGu1prpyMbcNF2rqRyJkEDtZVvppr3tEwq3nnSwguYXRXeEnHJ2x5Lk",
  "key12": "63BAxR5GZZE1FhxymMCiqurYEXEL68u2syUwfWFZxdoRge24cTDV1ftk3ej7dX2eTc9BL5s11LSifGghSJaoRoMn",
  "key13": "3jjDRESkFg9i1CNAhiSZdH5LgR8wX4w8KbC9i7M36zt7v8DKxKz1vokQiwZ617pJEb7kg2DFrHJZyaW38kxqvhZX",
  "key14": "vm7aw5D7ungYAaceCDbX5vCmKVzRvEtsUH6v9KC2abYBA17hD5363CHm48CN1fesY9kHgENC2BhkmFbc6JSJ3Dj",
  "key15": "2N24NTWLADjZH7gsGPqWFb2PWuC3MNg9RYHiguS4DQj4gBc8x5sfkKLZPr9kKB5RfjPGDN44kzUDSqJkzajdBsig",
  "key16": "3pGdmExXKdywgzqmXHmJaX6FEJjGXKJf8uGxVdnFKsfw4huRMMkLt7oHuTAKFDCyN4SvKgY53bYzWEiTmt98CRUw",
  "key17": "2QBrZ8hF5oQBzUWbZLBeEazcovQ2QX7hVdA6DGrwW6gP7LusDBNq9qS6f4N7fHU9eKdEHApmN6RgR4PkGyhBsJDU",
  "key18": "34TysL3fMwESURajAT25BsZeBC5iJPDWo9PDGgy7NMtD8jXLvimR4u6ca53hzkoRVPTC4PFz8FaaJLj2RVAA1Bp6",
  "key19": "3J5P2MhpSCvMX7eKpgyYW8Xqwbg1YkeNbWMSn6DcuPWFvF2qe1ZpkcW8f8razmibAxT9ZFJRYxeBrGunfZGSsBZk",
  "key20": "7wWvAqkdVbTBwDKLtBc1Db1HT956ggZEE9GgeByh1p8AB39ffPfmjXqnEgPf1Sw9jX1YWrk6yFbSGQ4hDhmRfQV",
  "key21": "2SYtiJxe4RPMt9m86nHuJY2QTwUFyPUWiDZR8aws5i6h72Smbqf2JZVeqRiCiVYp25ZDeWLYGLsmCUubGhKMhf3s",
  "key22": "5K1dQHXEqaeJWXB4Fv6wvpRJQHZgHinyVcGhGcRkdALkSM1SsnZMR5yWjGjeg1PEgnGa6hdDMBpLQmQmBkruahen",
  "key23": "Uc6UNckWrXD7NQvdrmiR6tjApT3iHCTBEn7NkB9HDsRrntYTA83jRKAbGUt1VYRRR4JRJnb9uRLV1G1X47ha9ux",
  "key24": "5NU1HDkTA9p7t7EYsXNUm5m1EykfWtfKMdhVCH9fBWgC5h25jnmSi1oPrSaa57bJczGnm5RsDBLwS1ruiQjdvsnZ",
  "key25": "2rsCAGyVx1EomrwA25RAvLVxtaAsPsUtEeRsSnNJ6tBp5BkULXq4PEHQ2a2TJawT9zukTUKURf4ECdioHTmGGSzb",
  "key26": "5MUwfCAmBcgHfzNzM1UUDSwjHzuPNpkZcgSZxkuaUAWZAQTgNx4KaVjoKAahnaGBziADUTeA5mFfr6wqjUNTUP18",
  "key27": "5T8XyU8WzxQxKntF41E8P7D2PHUufs2z2iicW2jtUYi3rF5tDqaDAZXCVD4Dx93w4emBvnR4JyiZ57bpYmMAfxGA",
  "key28": "5kzwh9EsruGP7yehNz7PMWBUBoXMFyUNmQAX3N39ZRWE31NCkbs4eYyjukKTt5Vjg3kj8zj4Mnxvm17qc2TTawH9",
  "key29": "3vcPmN518jpvggPwVoAHgLVuKgyq7fBatcuLVmioUYES3Yv4exaVYKfnCXef1bpHZVxwNeMVNHeUqu1H8YYsn19b",
  "key30": "vWvZPw4qoZw1BL79aRN2hyRSWnFmgLU8hgo1G2pdi8CDiCLhN5rQYUfdGPMouDwJ43dNUZ9CP9i1YPu5cEqQkW5",
  "key31": "4xCRh6UyrzK5WZ9mDVUia7RsS1ZYszKMonXnMGmdBbvNLD1NA2MSBbAQLS4XZL6QUe5jkNggwt6WCguGLoFvokKc",
  "key32": "5fTDfsPUD4MqqVvd69xkfQZhPjvvcmd7Jxw363DxWCoXkiGvsFWTJW3Wnv4i1gwXqVLZefEZvykK6rA1sob8Duhq",
  "key33": "3VqV5WQdnD2KJmJkZvmd9Ftbzzgs4SYPEJTvqLHdKGfmckeNQ3QWMqNZ1CdT85NdPBbL3g1NA5VRvwjYinfRqX3t",
  "key34": "3bL9BJxCwg3FDE82ArS2QJHjJPsGUQSotqcaf19xqadrENdMb3NymhMbCuveGWkU2wMQJCBt4qY2bkAyAMZx7ta4",
  "key35": "iStfS1yaxYtH1uJbHJ7VpzZcAEfyKVX2rNx6XVa6jLZxJp3UxU9mqH7dmtA9VJxrXWzGEG5gNf1pZ1d9wRUq6xX",
  "key36": "VoL832RgfAnTke4ePgSVccWNRY4dX6zkccET77toWmfM3K6MmL8MsTKxcCx8d59woZq5bEnes8dqpCpAaJY3i6t",
  "key37": "4Mh2GPXjJ18ZdzR2oxkicATMhbghVD31uZ5xR97AA4j3weyxEW6WSjHAwff8sbTX9eNtLTKHvFtwM5G1r9Z1ount",
  "key38": "H2G8h7BHemkmx6rxEXArtWkk1BtgnMqUsBbAspnsitMmzDzpaTa35EGMrrUqQxJMRaBcXmTCjqaXxPuH5hiEYgg",
  "key39": "DbQeqY4W7STfSTgPxyjpWMGSzmNLqrobxWsJpP1CR4ohMwgqYGBWr3e3bTtBXCBCgv38XkJVQjrHCqxZY7ZwnSL",
  "key40": "8ZBq26jcgrpKG6ZWq7Gsuf2orc1yxSof8EndN5eWpjmcTcRwWg632Z7764VZeJNqqkznjERh4d1PnDwtee6kkg5",
  "key41": "FoS42EgcpthftyoYaJ5dbmtm4TaZm4RjUBCohB13qJR9uDN5E1af3fu6W4GgerjXqqRJKp9hL5BoArBvKcVWdQN",
  "key42": "5ucJYnmFKtSgmjpWSrzSWC3Y3eJp6R8ScHFFaU12WCwCcpzxKkeHy1o38TwFhVUykYxqk3wdfd4Ew8u33WAVcyCt",
  "key43": "2fm7g6oFJVVvJ76jLaPX8K2jy81Qejmn13EtaUq1kvtbJqaQ3rLN2ttd9pzNM4quYNGaZpR5eoDTDMJ7zHRpau3b",
  "key44": "3PURtd4Z5DeiXLGysRpydqHf41eUgDxUwKbg2jnFtJFZGFmf3eSLQdm8nmELJsSSnXRB313pEiF5XVqognreAmys",
  "key45": "2ciBj1CDLbnCBXfb829YvknGaHPnsppMS7iybsJ7LpMoZJqKapmjq9TdW63qCo5vFQrkW5mBuGuMmdfjTgXqSjNL"
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
