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
    "kaWrae79atSEZEB2C3144csok5SjgHv83DStkSp7HyCyNvuCL8DKHCB1V1pcEK7vVBmBM4FA1bF8te2dakCLMWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ByaWgyKs8FmA2ZK6ycCScBUJFq4E2vATt6uECw94kNmpjCfpgCET1Uq7FSLjhxbuzz6MLG4vy1HBgs641wdq51U",
  "key1": "3Q7CX6xk6HKzcKt24LiLfUryMn2q63nL4ocDht4MudkoCXnjXHis6snMsuP6qPLXwfzsUdXz5Hbic6Sg2chQ84TF",
  "key2": "Mn25JKkTaWzREynw65cLk4Pb12Ks2zxHhdo8MsL3ciCh1kqhFB8TN23gNyoZP2t96rNYXb7KbXRFGTfDzaB7LxZ",
  "key3": "5pU9CLeNjqfWPn3j6ZwZoitghjxR1msQHo2FNfFgUnURb9FQYNkmkU5Mj2whEcHotpNemBJpcKd8o1iNsNkEQihX",
  "key4": "22qEwg2UTUiVU298cDcyWgJ11WfqUunUJmUhwNLjfpW63Y7mBPdeSxk8MGmKSvcNo73a3cDhhFRLA17ZqPtSf5Jb",
  "key5": "34QBmu1jvEpkwiggerwVHimpQ9rASsmyb4Y3g8MH2VCms93bMmPg7rt1zZ8Ww1wFjJkpGF31e9KKc226GAkWtUut",
  "key6": "2hxYMzuWX3ovAo8uiGSPnxNEcxA8miEoAdmGDLP2z7FwiThVak7RaHN8kFfbeRJtJ9sTtSsSvmzpk9oVoBxVMjwu",
  "key7": "3Mq29qHTBbTHsD698warydoPPVAKKYoBzy1eu7g4LMD7uooetKLhaw6Fwv7NpKbXdtnzb5Dwx2bzMYyuSS2j6G9E",
  "key8": "5NVXmfteyZ9YRVU8agg4ZtE7SwvvGYm5TMxFvTPvrcJS44RueBnzWWVoE4GVr9tU29PK7QjKrLPnNSQr9bZcgT3o",
  "key9": "3Quq76Xj8yd61uKpm4bwvxCzCYLqeK2xmyEuDYQKqLkAd5VgVGocEvjQkvuiGhgWyi5xt1QSyW9piDZzHgqXMF5y",
  "key10": "c3H8vpMM7yGfGmM91cSF7yaJMqdkvWAjKNpYDHYUq4UM771Dt5npCMQ86r5JV2gd9VDsbFt55Yi9VBcZjT8PbxE",
  "key11": "nuaCSJSjGmAyGJ9vkw9PDj4NU218uPb1PpShihYj6SoQHa5coJvm7b9GsT4Cy6gd5YkDsGgBkXAn81AQWaR34fC",
  "key12": "5BaxKdTRGeiTNEZBi9g56SFaVqjPvNZunQ8YrkXcTsE5qfdns2A5sC917qCW9MPQmsxZ9Aba1u383bBJwg7oZmHF",
  "key13": "4yozYv88yjsZXkgiH1cGqTnFsGmikQZgYemFMZKM62m6nW5xQ9hFUNKtk55Xc9JVFTHn8MeuUjCAN1go6QbPELtC",
  "key14": "3GCZfonyueQkEbRVikM4UgMUiYf47usG8ToLcNMGtcn2uWcssSCCbbHmaGGHNCtwH6FteEuiELAxE2Xuo1Tp3BSt",
  "key15": "MgKESfEcHNY2oBvCQYyQLU82iX37rfdfLpJsq1yvzrW5F8EUgsjAejFJpxA2kmhtmaNCBUpuXa4pX12LEeYGcVZ",
  "key16": "3kPLn7aLtyXEdZsW2qTJsHevpmriAQypinAMmuApUQfCd6972661c51ZpYCvp1C3vaDBEPHFpoKvsMeoTNu1KuFx",
  "key17": "3qHQayd2Yoy2Gy5btKSmgWAP7q4RZ31Km8SssAQmC2o3NAXdv9wUvFJtk9PSEHhMCCBu3rQAqQGgHiK1xeA1eXmR",
  "key18": "4JyhFLQbFr7o1Xqmstu1mWJJuawe8oaZUeJW9nE318vNW6b7QEERpyGvL3N8W7EWB7D8yZiqu5ET2C6oVv14dEmT",
  "key19": "SeFxUtoAnVZD3RbGaDaRbfFrNkpaU6rNETpihQ1shbmZ5NrMKiPSJVELJ34wAV92rtjbVsyFMwh42ytHqLQXSc2",
  "key20": "5Lwc8NWhp3ByzkDWNTktTb3DpuF9afr7YiJwrdQ5i3e837tRPKa3WZkxJnteiNdcVtWfoJVf3yCgNVeNLeTPKUEj",
  "key21": "54uVsrPJPZJxkZKa95HdZf3rjsJCdzkZRtcjMVJu2tbYyi4DYRRwGNjuVNzPVxf3xgiJsemH6PfRRuFJT6r75YCq",
  "key22": "2MUW621gFKsdi1J6Xry3jw48GyafAgMdMcjoT7ZuQVpdfTKiyFoVevgrLKzyp9tUVaS4fGBukXTaxz7ERYXH7kLV",
  "key23": "3hMc9RVogEnpanQmqQPJepadw3q8tFCCATPGyMjnRGuoHrnvE9Vfb1GHXrEstsRF2FQ96pvSdM8hhVS51Ag7mQC4",
  "key24": "3yXJPXs1pZbHnmdfgVSTGBgdEPrip6SRM7sjWir3vA86yswa5ky96VuzbG5rFacCo4BjjNwdxUgwcffzWahEGGxu",
  "key25": "4pAdg67FKwv8nGd6YDchdCbmhqNDdskiktF3GbEJCg7LVLnDf1392ynACqDoasb3Dqi1H27vzY117J8E1jxZVJVD",
  "key26": "3mqcBqao2T5iFuifNPGTTfVhA8EW1CqiYvzKsKhUAphRK9G5cPa1S8K4rgfFjVqnfNQshsZUNYicHki9gxKwQ5hE",
  "key27": "3p9WqY3qeWQ43RJY4d5yp4PCNFctBPHqbaCRQ1oa4ZvdCxYoh4LiYcqy6z39rveAahLawoFwsNND9SNi3neFbXZL",
  "key28": "2WTpeFNkHm9iWmeZRt72ti7vBFtzwUnruaBi3SYQkuNHXZzZNuZqDiJAqQ6jPaJxNP1AWfitXfLrxHdVywkuhehx",
  "key29": "2VufM1cL6XFPYkSs15ABL9r8pokRRFzrgwpMcV7q7iFKwH8VfxqeCPLwBA41eVqvNtnRDMSMgBDjYzLVVrNzVYXx",
  "key30": "4ugPBEEKnB3im72N6D3PqoSiCQUbjyt4JAeBSFjrQWskFnTpSfqrbrDXkPo3RTuXjoVUtJV8tLKtguohopMpdSKu",
  "key31": "3FSYhkgX8bCL1qxQBro8S3pvchviKrZEizEbkmsiKKTMoRKoZjn3BmMutPmhsvECB2tWeKqZZbgyAcDDWcvChM7Z",
  "key32": "61L83hPZGAZubRZ9GMvtvVNVNY9m13Yu4rXwFCbFAg8HdPspRuQgMDGdWqWinjdBSQ4Sk4cBBeUjQxcYgNcZo3z1",
  "key33": "4kmBW2K4bZrKuPSe4VN6RdzcKf35bnQuisGusUSdaXxUWMHHYrTBJP19Sb88L16iguyURNpmgFoXiCid8VWD4QXN",
  "key34": "C9CphHBgKgwQknJGLTPBsqdvQpQM8PfjmSYhbXLxmxygked47k276J4XVXBAaU3uS81YoB6K4k8C9zRcoR6qeeU",
  "key35": "4nqPFYC6V5MGiZA116BHX2VFqTsNP5FudDcYRqzUeR3rVMmHtpkXFyiWmt4WFDENBLVBvwvQpAW5wCp2hYmwn16f",
  "key36": "5CdtFfaCYbeJNAsEBfNz9HTvaU7MzwmTVnwczyfXoTKNXLLHUA4oDnG2FeENunUCsnuDhMmhF1jEyNzc5jt9KC43"
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
