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
    "5bsSa5mmzCpJeQ9K3w9eBKn6KdQokDYxF4aXzy9S3EQToU5UYAmZPY1tMNnwQ9uaftvPpTnop6mBedbWrdzjBr7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeUo9yr1dGarid48oxPUgSmA56kaQwtRzJgeJxL4ryUkyG7uVZQSN1nm3XkCPAxNavDfXE1SdAtKAwF6C9FM59G",
  "key1": "64Ki3QwFVYathYWokaW8UQuVrJ5S9sJFdkSEq12MgQQmMgMw5tC318E2nFAxCnfRhTEUfxHRTxrTdpat41BVfeD3",
  "key2": "3EuzWf519UR4NsGxASKh2rUDwfSe3aQT68D28KpLnCGmK2Tju5a8E56PXRHBpFxwdL3mt8fpajFRQ2mpYtFqCc1f",
  "key3": "222GhtxuW1Stz62iFQKMuv1FEPkpyMAyw2w9zYguoJF89F28819sgnuNcDQALWM6cVxANFBCGJsAqQD8jgj5YJBA",
  "key4": "3nrYwbsUNK186Y2ZuaCLZ4B2hHRTMUKtx9mP2F9P7snhng5a7ZJq5MiomRSzcYgXkGaxvBnsbkMb3zTW68dUkc7Q",
  "key5": "3tEhFHFDiBndzwR2dBUkAwbZzFGHXqkBaA3a8fVSwtRL6UVXALrBwkx5wXtHR5BxabVVkTGa9tVn88Dpypf3B73W",
  "key6": "4Z8e1AnaxA3TcBGaC3DGyS6KgtkuChAant8amCGzbR8PcRmhDFWdB4rhZd6c3hptA7QGWgxHHku9aBqj43QKWp2a",
  "key7": "5Na6R3TfJUc2oZofB16ig6kBV4rnb78fs168ZBY7V4XxYNMym4QUDsc13ExH5ycDB9HXeo49ubjdY2YMKCyrFo4F",
  "key8": "4vNLc8UVBBxJD4zfqGvwRv34VKP3hao8JDispnWJ14LPRfFsET2TG5j5E2yhNEewiFxH3r9q2CTU3Ju56iiNhnxn",
  "key9": "GcpYWePGdWbeyvT3uuXUqHLSZ3ocsDTyAgkfkUeWegM1gKKz9W4HnARLUd9r7Ts4ZKFk63xjnoqKfdThasAHsf2",
  "key10": "X2uDqaELrPbSuzYFhvcNPxJBnBiyBk8Jug542SpbVto2rbSizV4nxue14KfUeeTucBeoqkT6HFuNgMCGpBKsCTJ",
  "key11": "5tqCdjoHh9dDNJtTPNvSjuYSwr3zajz4qjtCuzHTRktHnkPCDa7woQwqh6v3LHXMcypyMUdm8JXqfENQpLNiGe5m",
  "key12": "3jFNv8GwhtBJ1cCPJWWnDML5wKYSLkpgAezupLGScZF8SbSuvo8o7nNV19oD69b5uZVQWYUHGkenYbgdtKPcKdQV",
  "key13": "3f71kLRabUsoLQWpyAW17H3KtUNENeoAhYzKp3RVVcaWX2B4Q82t5u79NR6GiDGTfsgK5nPnz2r5RxrrwDYvKdsU",
  "key14": "5pt3TuMZirDJSgYMcxGdPAy7ERoKHy7frfR7f6f3AvNtn8Vhhb5ECXvQFKBSZ8kn57pMLLoYTEeGXAtV7YBiniTP",
  "key15": "4CbArYbfxFA2QrCBNGwzk1TAPWVetugGWEbGJM8RPWqNuQYK8K95zeobuU7BANtocDWtJc5SGTscrWdEhb69bkGT",
  "key16": "4BimdhR4BdfRrnQdmADZQQiBe4SdnMQausDuPc2xcZj9tV2CfmNykLJUk12AFZeWoAE3nhrkDuohXfMYL9y3osCr",
  "key17": "3GDYKtCB3dPzSTxc8Qw3Se542YCa5N8d24dCyvpNbU6kaU85K6RspXstJKtg2uxvFiK3jypPrWG9vYZUyQtt8jH1",
  "key18": "xbgP7sLnrxxwMPgCFRhP1m1sekAqJyuEoVLzWPAu9JWKz4Rt7CXZLbarLEMsqrHUkKtgLkaaYTv7kgg6yNoY3eg",
  "key19": "4Fw8hBF3tmYu6dpHWnuCfwtErYLdN5ynoz1qMJmdonih1LCczzp3yJGB2xU6XwZ4o3cmo3vJoiuAa2cyFvC7ouGA",
  "key20": "4oBtui3avHMkZfFp5X4qd3EK4GfLuTZUqZSvmtNBCGDTXDYVrSKsLFYVPTp4hHUA1gbs1AZRnPiwPQGiFXG77eZ7",
  "key21": "3WG1pgJEJMJsELr1985Z71qkLVx822VgVYtTgZQRhtFBoFMpZL8dhhLyeL71brLoJVag6V585kQd1hh37DjkJscU",
  "key22": "dmTeUjhNssNW6sk1wk9Dz7GnuHAmR3iEasZ1GYFBSv59o7jpy2ssdxwPu3sUVdfs7wvAueY4gCjm6566wis3g7Q",
  "key23": "2M5NoURBk4GhgPXrJehjmKbyH1ftr6YoZoPgeym9oTCGujkqTqi2JEEZvaaJagvxtZEDNXbK8djVRAoqAVkcripW",
  "key24": "3LBBrNXoWsLAagFopxtx5FZeKCDxfEisEg8a7dv3sZyJg3KconByjdziPA8Vs4suqXEAx233kpg2SkhW7VxUpMfK",
  "key25": "5nuv6XToL25EKms6nDNLvkQZAofGVws8pL48pT72FUxgYHuP42Ly8PaJqrNwbjnZdjMbh5VALPGvyVLYzqkgWn7U",
  "key26": "3hknJcb37JiEBCxFYVWmg2Bi8vM6yFfDcwYFzV2PuZPuVSxMiz5BYpQTL2UtMjUp1VmYat3YP1gpqgt7tQtbJEkg",
  "key27": "5mx9vaTftLNX2aGQ1EuDmA41bfwCQs9waocrHenK18KvGpgzk9AT5HGvTFzDMWDKS3Cdk3QF5SwVf1zd5EuTki7D",
  "key28": "5wDKgUwyxHVGvunfh8NzpHh83smaGY6oq5QqJmczwQkhhhC3QvP2fddaKxXBi89Hv8diQJwQC3RFPfTgQE9ppwhu",
  "key29": "jbuvmiDz4ZxrdzLwMTLuAw1aAgP6u2NTgeJmv5HAD9kdoK5iuypDoyaEvJKRZpCib8xrtwo65P2iFN65difRacf",
  "key30": "2CMuuUrqjBYQxzqURRiTVW8VodSsBurVd8cTtuPqYW38tWbztvY8rJttNZpXhzyG1z5CpGhbctJSnfbcctHrKMa5",
  "key31": "3SteHFcPupFdg9ZzoR19xjPp7FmfYEwm6gDG9NQGe6N9E2typ63DnM27PMC1NhZKaJxXHzzCeyXFDHTrHCZkCfjJ",
  "key32": "5p8wPfP2i8oZnDKsPKMRujstjL5uKu7wTQTbCatuHBbPfWSBuG9ADZ79d3PR6K6mHYrcdxC96JHgmX6mqwwFjubb",
  "key33": "kUVYH4Xo1jRCoYaByEYiHFKNsPWr5FGpcQvwMNgeTBgBsubBUH1sE1YVAM41DjgWDLieLvReSnqFAVHA9m3BstA",
  "key34": "2JYfskLYLq2or7paZJqKMFsicqz3ySPETJs1XZYkp5E1M2yGx41KDSinVTToPk6acUbfVKkFhbXJtW4DfEircFsk",
  "key35": "51GieT8pQx5SLAhYemrhMTgYnWPp6BnoVv3AwrgRbAkThRf35mwpYSyfMjJgUqqrSbjKTJhHxXHvFXtLPaCUvR5x",
  "key36": "4hBie5jQzmiW71QU3QpBV1sMMFuaW4iBwmYh37Pg29kRTn1xWh8MqiMkGsjZd2DuVSMx4eW771BdvDWRGHoeCYDh",
  "key37": "5AJ5anAdphzeeQunPauYAePPYDnfsUWCF7c3DuKac9BB7sNKikzQGVp6XefG1xc7LJ98kW9Rwmw8zdv1SKeSfyQU",
  "key38": "4QLjw1mMwCxJuAb1gA5oR8UVD3NaBMcPNyvi7yYriJMhU858jAZhoJiquMm4UhPpKTZVN8Ubcj3CEQGCEJpvLBvP"
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
