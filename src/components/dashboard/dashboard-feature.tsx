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
    "5h9d7gS76t6Rz8iQJoyVRrF9GAaQvBpPTxXW56LxhJbHLFBR6Vm9Kj8EdNpBSykjA8hJ5teAV9sSsbbxcXP4t3xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hw46Ntd98b9EpTbuQPtsEYKSBC2PtUSWqBJ8y2y4WUTZYspMUXGe45S5knpt4NXH5iaQBLyrDvoGok8giw6Cgqw",
  "key1": "2YYdygqWYuzQ2icV2EJqUQPgQcGWCytwhUkEc3PfcUej2vaw9h1wPVKJwZnr9EexyjAZcdtWEkKJcSK3W4PK6emd",
  "key2": "43tmHKPkbSKdb6ztKS8E6wjaBKR4frp2fWA7TeUfaz3SdxQiPjJhMSsohvW2MMM4xXdmv79Fnc2vrdTyxViWfYhe",
  "key3": "3eVh9cbGApQn5KtBeoxSuUNDoVosHukhvMrp2Jjdy3TpGjRQms6b1fU47uu1DukY4xLst8jGo8d7TWuetPYEtefe",
  "key4": "4Am8SS1DjhtCpuHzfEinfQcU45iXYoyEiz4ab97fcnKSmme7xeRWYuXbQssnUraFiwTTf2QYBm6ZxYoiCUTknSEe",
  "key5": "3N6EJvyJpiobDwtF1XGtpoem5Rj4GdZ8sJUVv3AECzb3QB92eko1Ed88J25k6VGgHnyFoWU9e9hL7hawUMEiExsc",
  "key6": "xDwSuimMd1CSzrMAW4KLZy4DsMAwjKdecH8WFCVgxnDACpn2fsiGT5xatHesafn72f57N6eq7QwDMk3omoyDxEo",
  "key7": "4JDxTQRqiMpmCEcLsa941M8gGRNHkTo7pH57doN8ArReQy5jq2DKvJEfLdjER8yednFKzN1w5A5XDFMcdKsYwka5",
  "key8": "27Uthw25kPci6Gr63ChNFsaNmKBZPYB7PDjDJSiwhc9P8MJgrBRdeBQE43w2H7Br1oudkzFVLAE1VbSUaNNW8vk9",
  "key9": "hTG8kXhPziWLNQ5yDwTEcjXNTxtuk2H5QmmnHJ5KJFnjqVxuj5cHSWNMSivGrzTXpdQEKfVnoMjBh59kXEASCKY",
  "key10": "568VyLDDutfpKzG82zjVAXfsfbCgk8HJSx4wV8jWtmHX8Uctz6YM9u25zFhfJ3ZuAWGjUWNf4dQjY9DEa2C7sWbn",
  "key11": "2ofDq9pLw8eX7VgRms746sa9DpJ8Ubfvn6HgncasRdhJUujBMeWhTUFuG1oRtVe3YaSi8HP4WMmzgnHpNaR8z1Nw",
  "key12": "5nu1syGpwsdjoBGQutNVvnLPbJmrRnY6GHGn8ss6tn6WV1SK31Laa2PFRLpX2AEUDaffx7WssqqihAFDDoPKhPGk",
  "key13": "4AThHnwgQ8CJCnFqEzo5V3XKWDbhPuB19AsNzUc6yxx7yq1NfjRJTiiQdE79PSohobpMhmdbk9yr8avv28TuqpnG",
  "key14": "2tT3FhJiqsPX5TRFGMoArbVy7yeqjpkFEC1coXVRvJ1VAmgcfzxoepnSzUHGeFAUFjfAVqrLmXYALovfHZdZ7XNd",
  "key15": "4dAWaox3x86tALHAugTFb47f86priu8eaNfL7kigdMP3gPvpB6UJVejgneyyxMKkpDQanprT1ZJwiA7dKYsUwqDg",
  "key16": "5sscY8p7Dr4PMVoViBRZxgYkpVH5Z61UdsdM9K3wSFm53Sp3rPxT8WEsFtYRYMuvHH6q2W6SCbRw7rJMcggtnxo",
  "key17": "21qtVDQGBraq3aLreQCiqKfeCuYcLu3g1d5gA8QjLjf5jZU574yyAKxGwiRsiBanLP733DizVsDAreNyotpMHknF",
  "key18": "5MXkkroEtj143ESdEMfA3jQtaQA9qYKwh614rdYgATZAGu6kxYS5vnYDNMgm95yE7YBod1eVHLwwGYWJi572BGNP",
  "key19": "82Y2oRUD7a6PxkxP3o1XYhovyRgGU3A9gM61QGcntxpfSwYTpqi83QtDRxCrzud1WXjGtrxy13wtHpAqYMchicg",
  "key20": "27y8njCjToYjRmLHH1CzRC4BmocNrWv1Euv9pQGokvpWf84vhyWgDaRx1ZW3zGQseV2pMmXpFtDRXv9wHwNScwyQ",
  "key21": "k1hpAZji9KqT8nApPmaVSth3gP3W5GfhSNqB6vFFyxxPfj6zTNX6AXSH8CiU6UX2kpszpCKhqxzsftRhR9DzpdS",
  "key22": "214u4xVcPrebsXYRZaHXDQJ6BXH5wD7LhF3yGdTC61XLtSeqaQf5aN6WV4YJmuDTxb62G2pDmckUEeH8ueckEqJS",
  "key23": "5rrVaNJp2PBUeHhAmRYNSGhYvxKdFcyEfqAEz8abzzpoBCpTYuWcsy2BnTzttQh934JVzQR7UaUC2vnZmUhLVt7t",
  "key24": "4UczqdxpuBL5z4Kjrc68LSeagKCmBWcdanVq5EK9upgQHNkjB3WzyWeZrrXorr41uNQuhXmDit51YiLv6BaiyKZH",
  "key25": "4rZhkS2biyDX7MZ5GBEP43n443b5MnXqVMfKHpVqt1a8co1vaVa7EgCN4zCXGpEss1rnRpKdSdxK7pT8vcfsEEnv",
  "key26": "2QBB3SYCGPkWuoDUfNKbJLuHhThc6yUkBRGbMwLz2bgbMm51zwpcEsAM5TnEdpjgm3jYtZrN1JeSFmVbgnrmeFvp",
  "key27": "pSwW4xeCny5u2eSRDZNdzCKMcWWXNrmEReXVDovvosVfbU3xr326JdyAQjTWxa3NzauKiLya9zs6XDaRfdx2oyw",
  "key28": "XatzECZaR6VAYaCz1jLQ8MDBe3PU5C34fCZe4ZcCaLozhry333ro6LQBHRDsEKZtTCzYM1AHCD3swgz1FxTjryK",
  "key29": "2mNQGRUCsNZBr95wRgZDbAE4YiifSb8t8NqK1wvfzKcyPKP7ovYzKpPdAvAUjhLXjorspcKTyV8koEikEPbBDRoF",
  "key30": "2hSx3rLjf59MjLaBbF4jDsAs19bHkR9Tbdei7uXKfHS7rzyuWbFKoRgczVE6BtkApe5TcTp7eGaYfgXahiXRDuMQ",
  "key31": "65CsWHQkctf5fm6qN5E3RQqnbFanDspM8aXximmRitQMK6mGsoirxU8ojXtfe2Y6h8n9mqRvkEdwfPHDLJFaSSog",
  "key32": "2ceqC13g5yrCnW9j38684Fa5qBaAK6ExBoXkxuWkgacwwr294nYjJm7XjzVHCv8oCNDk3NMZFqUKJZFsf98FZjoB",
  "key33": "9tEg3SHwGgBhkgnAY4e9crvjYZ5B8QtJZZ8c4CtopaBeFebGHUJFxt6KkcPuYB8B3JCB5ftcTTSWsCcfFUyqtok",
  "key34": "5c4xXTtKGYFmvqomyyLXk9B9EjtBUeCai3ZFcz2QMYb2zpv8SuK736uXLuTvTxWyU62HXGqZa9cjuGh5pXNoBcxr",
  "key35": "3BqrjnSUMVSDzx5aBvTPfQ6ByctKwxWKtwBdicsfmgjCG4Ff7Ub5p5bdjdzYmeTeUYG4sqXqGDTAwWgH9BgEEQB9",
  "key36": "3DQexx83eHQFSPbMPy64tTzYqwybuhAofTntZrDi8t36CsXSWtXuLEdsvh8B7Yus1N1L7QH3awF5KzwsEpANLTQV",
  "key37": "65UeyQqyovpFwzZWmgNMMeWaihxtwz9GjcnphzzM57QKCjmsRpLncDyM4mbewu8wgdPkSKnXBK1msGSfNTz5CZhS",
  "key38": "3u8eksk35Ffk9yJ5vWrBhnwVa5UEoyLSNpNxDPATHrtr6uMGW61nbgjnCcP2ofpKGeh9kU8WeqGH4VMTH2AB2b5D",
  "key39": "4ugDFCciwDozPoUDAR3LSPFjKk8HRJwMuFx7numDdTyGqHNLfhJEsp4BKz6cMM19AQC61zT6MUdT5Z6TEHj5Vh4K",
  "key40": "29sB2zNV1dBSFBUUt1ESRcEb2tK4CgywK3Zy2spqwDwuWd2KXcLkGHea8hPoSto7JDxsejAicWfgrQGbdmoEQ6wX",
  "key41": "2CZqES9z56jWx4HBpgPQ5mG6Hsof7rYKTQjzMbJhCmnb63dtW52zQrwpySdXR3w5deFQiSELZasNZDys72cLeANv",
  "key42": "3H81LrcwTXDvGS3saXw5QyPRhv2xZPNYtMfFcqFeELewnst8sZxkH8j5KmNee6BUhtND7nCvx988DKenf9n48kci",
  "key43": "4PAUXfvA8gUHUtvRBa4dfVd3eqaDtZzh4uV4p7NVDL5tDPTzTBEiFhRw2V7HiXgxEBtyfxSF7TLpmJjevRMxHKQm",
  "key44": "acW28P8tMwY5cHGLB1rKmfqZXoo9RdWdNrqFnvpsp3cgndMN3DCP9X1MDNbKMwjsb9m1jvQyC88C4iyAhEccP4i",
  "key45": "2Rpi49mK1h5iJnuGJqe22A1jRxHozDVsw3yrfuaZn8ppXx8TikaVaAi3mvZcqA6iw4ZhZkKWizo4xGzbR9wC8ckM",
  "key46": "4rBRitoG6y8BAqtrtiR8LTGiJCAQxxj4PqnoQFsY6PVwvMQt93EkrxRpN7cXHdL4i1vkwFH8KFBWD9i2vbbxZKqS",
  "key47": "4NbwTiZ3GJgfT5KWZuGtXKEcPtoTxoucw4CniPVeVvaUAaaCWiaEosYTRVRvisYxhZjdzDbatsz8DgyUXZVBATYe"
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
