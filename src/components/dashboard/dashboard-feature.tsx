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
    "5rNyJ7yZND34MEthEydMSYzXcWxsaBiAwDKwAAAWkw48zjQYy17aqko9ygaQx3Uk5J7JDYHxZULvCP4euykUch1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5732uhhgipYA2CSDHCVAysMi1V8VRx2sU8k6mq4ChSHSEQy2D9vPZW4xgKysYRH9j7cPwKY9EpEj7LugL5mY5pAr",
  "key1": "4WzQrevTzGtT7Nyvcm7aqnHAPMKvMeuRFhZQhwEHyL3BJ9BWyHZkcmPCXhcJkKE3KdAAp2P7fk8tMBkaRkKjFDGY",
  "key2": "3nZpk1HJFgeoVYTnFsE6yGFQdrztTww3QSQkY1BScHC4R9LnNeKrpS9bFbUcehnpDrqT6mzuTQfWx9tihfQodu9T",
  "key3": "4EesjgwuipmNEaRs2NoE5cpsaSyst8QchAYASk3WdvPjwscPoHtaqZKtDX511qgsefmUceFbGbaSHK3fP3xWJskf",
  "key4": "3L4en6cLvc66R9fAahw3NEL9toKgSTfCrxZcEPJ9GWnnghBMhpT2qG36YkG1Zur4CzhKCLdT3bRcsCUKqPMf7yEj",
  "key5": "bok675V8zFaCe5Gp7vr61TbBbdoWWpAgumB7nW5srnErUwUvkx25MzEBzmRu95beNKtK8NybWNUzoxLanC4MKwp",
  "key6": "4sHWjWUXD9kGAjqd15gPPUoz3TW8FpDqgXBNPv71RJCE49wsGd9SfmpFGkuR5GJvJ34asdRHVGNbQKykUhPpCni2",
  "key7": "3sduM7mabPaS1N98m2BHWUhcsHNZFELTPhqtfnTh8vYefmyR5aZ2oqbaXSkrJGxEgRSQbFuEcmFdbeqNzEx7BjU9",
  "key8": "Awv1PjpqMyqcP6XJKpx16wYKjMs8ipVztXkFpDKgYUmX136nATSNnthowGPPbQ2TAyqSmdV5MfvGd82nhWe9qLg",
  "key9": "5mzBxwsPdYGmdf7m7b5a4EgPQJkR845QF1SvQpytdZxSHBRJuHyxvwH6t2tuRFzbCw8hwtvKieBdk2tprtaLEYLk",
  "key10": "wUfBDj4QVW3HP23N1zRK7YaF9ti5dF2EWjMRVKxYYmYDPwUiLWaZwspLwxZdjt1z1BQpvHAhVPzNU8bg6K8aP2H",
  "key11": "5cCNZXEJHLRCY6gSank89BDhk7uvrCjeFmEjPkEd3aUzLH3KrTRbiefTND8qj85Zc86eqDnG82uMwg4nz98C66vg",
  "key12": "321GDZJ8Zy9SjgR9Ayo6QdtV4LMwDg37SD62bEcsfnxycEU6NdPi2DpuJgcTF4rnnBAPdeBswk98MBA2FbhuSvnN",
  "key13": "4VBZDWYZ1V2f29FAZemXPoDUdnj7xGNTxroaEpyS8rqK54SBXAvKgcftA9QPdopdfJj6QnsewxyGrQrX2GSwPuJB",
  "key14": "3KgHX2jvnFZRMiC4y8wZQDiypsELbRo2FmzdEhxP5aqX2kvP2eYsyRHoejv7P8ZFvDU6kb5pdUKYUjkbq5AJnJj8",
  "key15": "5nDdkiGZrsmNnoyeQVajPHfBSnGC4veeKvUPwCkkhtsBKmTvGVr4X8ZjDsnXDymVjPbx2xhP1pfZWimd9AK9j21j",
  "key16": "5dHEYKKUoFLLNj9x73Bo9vaiWmVxwXjpjStWHWuY9rfuJ9P3XHLRZurhZi3pwiond36xwF3pCXsGEsqXDVn5FaWs",
  "key17": "39Fmt2iLPb3M3WVbgkLPWYmys1ybiNvVEJ8fA23nZwNoEigL6wc3hcxWGLpUxo2PbUygL5hB6ubFBdPkrsEpXT2Y",
  "key18": "5DKEcgb6GW6UCpkiHGgpTkPaYa8Jz52Sa9rWEEui8pa1mVy2hLprSFeoT8ayvWP1BSRriE8eUDxgQ27UDmDD85TR",
  "key19": "4K8af3z7UnzNvpGdQtphehH7iS1u4xFezvsV6TVpP5WSiWbaCAeTNV2JG1Aj9svoeENdkDUdbiFYUGnPBcpSrU3P",
  "key20": "2pzKjVBc65SFKCoqqCvP2s3ziak8YqPzQFNmhADxxjAZeZ4U5NmdaTMnCitbbjdpRqgVEULJv6iXXCQrDJmACG1r",
  "key21": "25HkzJw98LhSnK8XLYTGP425UZGoQPyv8JSGGJCfShj5tQxpFdQgNNv9ZtM4ELJoyLUVDjEqwDGzeUcSGtP5WUTN",
  "key22": "5Lvgj3RRgBYxared481FTj6faKWrMDZPxpQVYfd7AAEHvsYMmMpcKkuHKWHHgQapXgfeoydqCMcx65LByqqZfspw",
  "key23": "3Anz9p7QzR53UGzyuHUPiucGEVtKKsN8bcHUo4fx2UMsCMWKtmP1BjXoWpQpG8t9ooFJin3krv11jdMMkAJaGnk3",
  "key24": "4NFkdz94t7eeLEGWVnU8cSqLkCsS7RBtx5pPYEvZX4yNZqs7wcFv27BWmp5Etj5KAMYAe9guipqdV2HMPAc34XzD",
  "key25": "3nQbLckyLQm2qAVxtMW6ZNpFH56aUC1QSKu4z8mXvY9DFWgwnTgTfsGQxyVoHdtb8ZkgqtgT3Aw2zc9rsfWvFADa",
  "key26": "5JtAt7s92ifkxJ95BADtoPahcsFj4gJNdofXvfrPdu2W8ry8dF3rfi7usCHfXY1zLxeqUX2mh9DMmCm1C11tx9SN",
  "key27": "4ioWti4WvCDCZSqrfXDeeHZ3Sg6mLf3kh8VpnHjADN5JNWCwYeSLhj7JhQAj58gMqdiQzCTS7yxKRD6bHYenwWBd",
  "key28": "2HJ2SpnC7kuxXjFqYyaqpxFvCNKjEj3LjmfS5uuBkEefgPEq2vDdXxsV27CbUWV6CcTdamW3KjUH1zmxvgqkqeqZ",
  "key29": "5wmqkdJthuCC1NZ6Ten8ZxbCx1HsgSS7m1ffJcHZTRXb1yY4ofQ3ePtQFiUob2zTCf1tdixENXXjXxYTrnDjGWYy",
  "key30": "mTPc6dwXSJymj9Xh8QJ7t7m4VF6tTqoswUiXvZs8iVzavunr1CFCZMrbdDK3sequxt2okXehs4LnYGNCF7MStdz",
  "key31": "4X7mcFejar9uhZkmRmvmsdVcwg7SfNkhjP1cWyH1Ej2oJnwmb2DYZadfwkfjAf1avyhVExo1RiqHa6HZ7zxxhGg3",
  "key32": "5Hi2zFyxVdnb149dycd5tzj8p8cZbgaTYuo7d6iUtRpDM7pmFdUkU8rJQoDWPwZS3G4yaRiTKnqbhrdy3dQtM5kA",
  "key33": "3R7VnVYMA3QCx2mEqawtfJHf6bpu1D55NiDXGvFmbNeyM1PS65Co8pzWTj1bPvPAkJg3EBnjQAoHt489i3NrmB4i",
  "key34": "4p42yhk6Q98tGuYnmaNFEoCBP3dNyozYZUWfF2n6Ew2kU2axookWKPdFRMZn1cDxKhAX7TmfJSamCZru5aKJxq7g",
  "key35": "3rkAz1PsGMA6GqrpfSe5ttXg1SUuj7Rn8pJPthYvH23iwbJP2TmMcvtu6yQKtau1sEmqMp3Rr1VbLQAr6zVwE8Db"
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
