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
    "9o5nhQJbKUfJKf3eckPuWTknnYDGHpo87XELGtwCqLorkxRP15qxDpiXSj7ZykSSCkVdtVyYmnGGDGxjCYpNf8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WG9g7RXS21qz6ASWrxZhQwozxeHQUtu5PEz7ExeAHh6PDp9xzApboMLQj2oCAeLYroWq9suLX2wr2EhNov7XgqT",
  "key1": "EABP9HwJ1G5Dd1ND6jej761M5MoHhdCmN1xuANsWd3r6e6QW2HndQ98uiiwzYzXRebuwhE5DLxGw17SZyRurxjn",
  "key2": "4WGosiL8WczEfCq4gyApygmXjsk6sTxAEqK8WsVUVsFo1jSZMmRWUn44REK5VPXmS8Dz5iyxpiQGBZfTddKxaxYQ",
  "key3": "Ty1DoGTL7LayjtPVhJaPHpw2ndrf1zYaVMdeBBp6zkea9ZivG1M1iRBgmz2hZSw86ssvwdTtMkaaDpRtAg6iiq8",
  "key4": "4TQySEPWziMSXGoDf2iJFpbJs3uR4rXXgACNKMXz1dovimgrwshskQ9ktY8e43MPBXzC9ZxGXkgk8cG3txJ7BH6T",
  "key5": "25Baq6DmELLzbDwt2sK8ALfq2wWMmAqqrneq1ZmpacvUPsowsXrBNYbBuZje8mVAjgBQv11iDLYSQP8bXeyrWt4H",
  "key6": "2eApXMFZopabx9gKyizfnEyApZv4SLMA4WKFiLxemrFnErZo9bAyReVMcut4wogT7CveJ6SMbmXWrDJqzbHQZ5vL",
  "key7": "5MqEtWSmwMhLuMPFTB9VvExpULK6BxdZmApM7C6vTUghiPjdenRHxuF5uCkqmvyYmHV3Vc4paVLnpKRpWpggj7Nu",
  "key8": "5hZ7cc5ajGguhZQNacKKdPmnQbzCMA5bCmjTa89JkVtNroGYKPXo5gZkTVVA9VkHdSgfwnJmzhxH3RutQaTVTDb",
  "key9": "5p8sr8dX7FdiYntfio8aLTV6t39CzcBxpZJmYTzMMFMXJ3EwiHSoxNJVjWvF8pApekg53NRfSPqzLhhuMhRrJaEn",
  "key10": "33GWNSVnXpr7SdBnTVzANKFcVSPUZQGQaqEJJhi1ocdn6zkdnBXvNyMfaBZDC4d4sLns3puBtVwTB4kkbdrV5iZu",
  "key11": "5vnZvuepHvUmiXHSB49EBRzDL2yg6TmrHiXYnorkBAgPNwMSDzsVt1eDur8vTrRmtLEH6HoU8RU9LQLtrVt2dzFr",
  "key12": "5YyCebMkv4YfMJAuha9K5yDYGMLt6nACs3Jj9rBokRYM5zt8VJM8xrhzaYEVjeuusx4oNKPP2WSqFd5i7kw2SSe4",
  "key13": "2sYn5tgzALsUUTLuTScDCEKRe8KGgaFVS2dfrZFP9kkR5YzkVEMHyp63guBjUXjdc47fvX3aWX74mSbzP7D1Kr18",
  "key14": "2rDmWuWpKzAWzQeud12E3nYAYYYf6JRJQBUH69WdcjqeD8eY4VpPsCnfbJNJSCevXeM7NDoQjHqvc3f1vTRL4TD9",
  "key15": "3FhxVY1N3ymoQSCQ9Md2ndhQizm66TRVVxQBJxXVkW9xV4UgYSPCy774CeVnkrz2BwcckH64i9HJFogQipXrvkJg",
  "key16": "9TrErLxJsF9r1Z9QDfHcekp5cP9SkGSFY6rSqLL2tFySwHKDyvBav14xnQdMcgYSEDN1W3QFSpUcCssA3AedEJ7",
  "key17": "2f2pzHToQGggiedJid5Ypw9g8JcuS3fDJfhEkPQFbsZXUn8vp5p3afLCccwbJHpLqEgCCKAoPD7whyPpRqddEK1e",
  "key18": "Af4YQsGHjRqFwfXLbMxY556rSF3d1d4gdcuMt6j3Zdo85zrxpjiDUJPvMWXVBpACu2CzH9MhM4fsgkgCTnpQYSs",
  "key19": "3gSFC9FvQ2ZoZngB2TDgjAH999VYxfLWMsxGpgPkRB3zkehPtRXpuu1yfPKsPr139KfH8rD6FCGRCw1pqZN74BBU",
  "key20": "Gzf4cYrFpnz2fe4s7n4jgmJ44STbRJnAG3qqNF6uR3V27VGQdmS8DyNr41FEnG354iJwT3D7Ce4SoTQBA2y1J4F",
  "key21": "4LuDHsxsMPH3upr6zT1s6kf93tHJ1w2Tn71LHo3pEpi5gnXhCesp3uf3WVRzZxUMY3SAAHuHVTZv1Ahz7bYiacyZ",
  "key22": "5xcbHRrvAZxH2CTybbLFKg7YsJzXgaU5tuNfxHkXHMsvhQKrcjqFgQ6F8soiATJNnQKHALKjvqzRcCqJX1vWzWQB",
  "key23": "3YyJLyMaVTCssSwNAqAEZEPY5nkuwaKE4gp5BkqGmVXR272CMCZpWgwZYkUfQCMt8srvjmDa9jVNcnDUDG59WzSV",
  "key24": "56xssdBExfs69y5K94oUbKE7vVC9wnm6A23t9JruY766XtbfQ2MNoTB5tCRhZSw1SA3a7p5xi5GaKm81poK9WUST",
  "key25": "4d6gXXPCVjrw2VadP8pr7Xfs1GoBzv6HV3GLgV23ACyssfdohChsCDWDghTVEdccMevguAosDThavqEe74EikN8h",
  "key26": "2n45VTfpnaqGzNzYUAp8f527zoWSnkPUPyzFZSqxbyu8qRB6cPgQWNwVzXeM163NDLf9xKYcN9eTHogAfXpW4gJd",
  "key27": "41jtV1fp2XLAh5nBRSewRGWXmJbw723kGCeqT2Auryws6HjZXHk7bkz5Er71pEqu37sDD34RKazmadxpTPhHMZ7Q",
  "key28": "5ZVog47cFnsJVdsCsFhHN1aGq67a7QggeMTAmWXn4aKoLPLnUvAqVmxXqqseFSopLoDMbm4cpjf4uAx4eoTFDUZ3",
  "key29": "ZUyxCufsD4kF3KVHSRDrmf1giBtftGte46syfhH7SQmn4kBUvCd3GKneVVtsMx6ZFE4uMijCXRMipDREc2YyLjN",
  "key30": "5LLtSEyXYbusVGcg79NFEL8dJAmEJXKeTDTvu3HRcJaFojvErKbZgA8qWVaWWbNi6XJKk8G8P7vYQZBpbNBWQC3C",
  "key31": "4iF23bsHVNLgp1CUPfKn77zv55gHHoZVfRHr83BtsDxptgdiLmekk17kgxnscaxH39ereZHk8vHzcVF8wGJNL161",
  "key32": "2P5fLtvqDP2s7jmmKZwoeHvmv345s2R24dJYa9eeFyUFWdgpp5qFuHUD4X5k7rDv3ADAdXp5LGXHBhwGi1HRspfq",
  "key33": "4Q4mscy9bGqqUkMyLwVcYYfvBTrwW2LXamW3v76BB68oVqPQ5DKpp4gjz5j9N9RJsgu8evJ9uQWgLPQWEKF19fij",
  "key34": "5Z52ka8kJ3G5CSnrDognf6J223FrHPWk2Rw7AM47HzbyBA24Sh2VVnSMCrVpp14nMEbp2n8seuhKahavRPSpEAtm",
  "key35": "5a2L87mV68FWvFnEkSJhQ4udEYVmbn6FaVrt5qXe4sXKkuNPunciFQCMZ3FxRSoe4vRwSSKtcBor1iTEuWcb5UrH",
  "key36": "33ZK93azs3m8BHy1E8KpyT1a5mS1ngj8LR9FvbVu8UTjLEnVVNiiCb7tRzZUnjy3WNyraYfnMU7Gs32FnfUYQvwk",
  "key37": "2bH1eq6JMdQkxHQD2be91nDuaNDUapibiV19g1ZLgYg4Vp9WYvKsSYRBPzimSFJfq1dYLkRmSMCcb6tBuxuKpS71",
  "key38": "3jH6P5FBmnfu8MB9VjRCFhM6XfYmBH66B4MUoGLRwXFQpXXSGcnVsmVgyhhHhZvtJCXCtry5dTzvwG316NbrMoFm",
  "key39": "49Nvd9uc4nEgAJsvmLjXHczwY3psU9KhGnRvcV1qtieRD3TV6EG5TeYywjJGR5uxUwDXddu4Yysfpt61vtDpsCXx",
  "key40": "2F87sjUTiDujd1PnqqkjSNtvU6GorPYWG17GMKJGqoLbwcunrBYdA5MffvCa8T8ExR9LpYd7zwjii2w3bpUVHuoM",
  "key41": "3YryNQKPnHBRPWhxeD1sjQbPZdAq6NFEVBJmwrSkZgFEWLZ6otJwnQ26FiwfLpStmfnN2HWtHW9xJQWrXi6Ny8bi",
  "key42": "4fvP4cU2tTAJqsp1c4Hx7La8n8pUDNoWkbGDmu5zLumrEQSsy2uaRY6ZtM5vAiY489PorkjH3yRSGLUGuMngMZAP",
  "key43": "4cpcho7pPDAv7oFGWk11Kzpue4YuzeddmGXhxHQrwrNay3z3weRyuxQTVwfGeHTPExggCbDusdgjT7a28nEHVMDx"
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
