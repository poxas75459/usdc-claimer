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
    "2JTqcpAKoRT87wb4sztsK1DfpWVRdPw1mUtaLesNVbScPQkVFimWa4D3aSta5FC1mjziug3VxunWA8u2k8C9SJbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8vTdej1ruoX28R2fMqh5MdHkFq2f29aTjrSqJZ9PaE8WShsVrUibo372gs8xi5yk2FTmjizFCrcUinXPQ8VKxg",
  "key1": "3FavyCZQFJkc9iV6Y1XnMiT9AkFrnPuSXQF39xLr46ABjVEX2oJdu92kB5nPA6wRQMKVdxMUkbZnrbBs1fGaEtFo",
  "key2": "z21RJygwk1Vsy7rw4MfSM9cKNUqACUPmLYRfcpyg5SPb3hREvx4YzQh4YQSnEt8WfvmMKuNdY8uKyyEmu9wffQ4",
  "key3": "25acgsByczj9NTBN2jWFBVwWiHsmfRPy48tT19GmUbCxXjmYFJy9ZsEpW8PAqSH9hzpSs1QjrcKSXRGcNz6KuCRZ",
  "key4": "5WpraaKSfJXYwN4EDErVy8dFKPFK44rMSDt3NBtoWfqcCenkzzy9sePpHejK4DPkTizX6vAAqq75ThgS1gfqZPrf",
  "key5": "5t7rtZwxtaEWtL9shmgG3iemYuJa7quQHJJvM9rbPsRGzszifh2eHLGU3Agkeca7cxxtKRszwQFkfv1sy2xXxxkG",
  "key6": "329KMLfEot42hqkmYJx3DiCbgwq6J6u4km89TfXCY95Tom5H1K1TAjSKzx5v9Lwnxi2VRur8PNRVzbq76Egodpgf",
  "key7": "4ZpxykgxqcGg4QHVaxth6V3Yqfnm4o8rX6z8GqBpHfdwnn5QigmSEobx2wCeZXMYNxBf61C91jyRP7un5usRTM3i",
  "key8": "3ZLf7NfMDbeoUeq2bLv8xvcUamov9upYToijKeA27ugnkgfuvJxkFfMedS9p7GbyQXESML3AHAjJFPE1cHKog25H",
  "key9": "2ZwHMVs6zPJwtGK3VD9NSbzKWRYQFnk9qGnaBP8ZkakfrC6cH2gcCs1aBqShAqkMxFb2LfBvsw7QDRZPzBmdgZqm",
  "key10": "5GeSQTL4aN4SaV3b89MKZGdTG43L3cJFGzfdsAeRZ8NvVLuxYYSEgdgVaayi8yd4PzhuB2kdi1Jt9Z7topWeH4oq",
  "key11": "37ZbDZEAwRKsEPNKBJhZP6F5i3RB4TDa3U9aN8eeAmoXzFtFkkWr52Y8RUa75C6r4JMEAP8GyuSA9AAeD4FEQFLP",
  "key12": "zHN3AwsVsqfzB8N1CsL5e4aq7iXtT7H3jzu66DtfGpgYMLxjiTfYMD8ov4b7wwPayc97SB6EpiTv3ebPKr9eeB3",
  "key13": "77dzn7q2heGCJevL7ASto3kQ8D44xHYz5QNMe2HEAQ6dAhA7JV5x452syV7ohiq2qZw5QQ6g94k2wuvLWcbyz5v",
  "key14": "66wk7Eaa9LgqHsuwBaA61sz3sVmNfRg6QBsFj1PHxTp2mvfx3RVdCrzveAKMhSBKG7LXSuDX6PifAH8kYaFU4mv6",
  "key15": "2NaVVisJL7rADxXauPJMN3RqvdrXhMCbP2aNMn5CA5vuw8oZLYsfBEXqjYdqXdUYon6Bz2Cj9zT5T7bHUYBtmvni",
  "key16": "26NCYK3Nwnj4wpJZ6tcjcHBYCwtquv4gA6cXcKEwkj8ftVcfC5CtsLHFhjxD3itUQXr3wbstpjPVQx2WZk5RJdXy",
  "key17": "32oh3LL7xHenGJC8FZRe8X6abPrnAqYbzpQr8pzuHq2KjVE1VsVgRPebpXoFKH2zRqkqWVqBNbk9MxxGjvTnpnTv",
  "key18": "3fxSD82v6ptmjwCsT3e2yPk8rHUEd2pZZPJfpX63r9eweLzL5LVDSDoGtjhzpUQNrCcdKgNXRE7y8U6mSoz7dRLM",
  "key19": "23FSdC9WHrxom6aMC83HC6LG7119CNCmcJ7n31cKzgQy3aqxPzXLsfLNnDL8tYsLjKQHJUHYev2Z9ACfFsAvGBrf",
  "key20": "2kG4XwYyc86ScnaZvey6o6RXq38Ki3spRzNBBRsVu6bKESfagh9LY53LW69e3euPE9xBDqr49VfGiANTqg9Fse46",
  "key21": "3FPqF5JZTe8yFpdX3ywvBzyq19Qnhk8gGLuopw33sSUmKAu9PaaKcEcffXZntEhmrfDJbLFqqPRd9YVvtodG1TEj",
  "key22": "5pBNKSzQ13x6ipjtNddF2nZATD82dkRSvpQW2h5CS7eZwbkspPfbRDdXg3edawiTrp5Qc5m8efkK95qtg1KoWBjw",
  "key23": "4R1M1fQ4Gah2J6oygjRJwAavVSTonWRG7foFgMFkFPtQbzyGpdpuMjSiRgy9FhwZMjExTHoMp9dF7AXoc2ui3xow",
  "key24": "5Ld2TY5BLexxziyQvq6zofsmjxiRqNRLfsE2yd9gEPnu6FqzC9XdpYMmrmvE3tRVrDCzdNmA4Fb6rBA2r6VFYsfR",
  "key25": "4vWPDMVPMoyJoEhe13KxHvLanRp7oyKxCdLdnMGAT426AzBC3GSBvcqTnuqenWHsTFyTLmfF4pwfWFH5CmchtwC4",
  "key26": "4phuLYDaNx5JbvgL5BfDydeBzbsQDRtdJsYuXFPh34ta1xiNrWFN8dS73A7QAVz37sbmE7DUEbi9zH4YG2cHvFXR",
  "key27": "2CsdgjX3pBMRVT6pNB7oyet3Ypxv4oCsHBxAM4HgDk1tL4YvuJYGnooPndaBPt5n1jFYF7qjP5ooSyvSezWbJHrB",
  "key28": "rxXSX7ZjpA4KAHq4732unp7ep1mdC43DAdHg1998jHANmJCFYoH7Ebh5vEMFcNdTpSrkfK911CzZa1APge3fmjG",
  "key29": "5Nr1CxrsS4CMGZbLqCRcb6MUponaSXB134xedkxQ5cf3xoGwCqjwETyC6nXunFPUxoNBxi8HGJqGCLFaF5YEYsdn",
  "key30": "5k9kihMEMQvk5Prn3LMsPHuvAxzX7otmGmXTTuiesjqB1rcN8sWFkjgeYWvcwmDNNJijcT99n2vXgyWF5U6KVNfc",
  "key31": "4iCoTnzW93gEKJ9irz6UWAAxXQBQm78z6vHgs9VZuPuENzZo7vgKd1e3opRRebfi61cAD8hjCPWPHuzXxDc6ZZhn",
  "key32": "4r8oZuefxrnNzKF2tgN2TH21Spgi5VtRzJPSc4VyjkMavokjuZfwRM4w6PT1193MmcXwH7k4bymhYsgNSqy4nUVt",
  "key33": "2rzxow3CNVUeiVrphPy6UG3XvsJTA4kNyCSqPMjQbbXJrfomvCHS3bhWKdkcjwvfMrCEKPLWTu1qWCY68ksm4nmM",
  "key34": "258zF9LK85Yg4MnBiok8oAfgae6wPuKUc3Kf5gDV3HKHUW5WoqzhKbWE7vpD4WqBW1UCz95omZRXdPPxXXT1SkFy",
  "key35": "4aDrZ8BXwLxZCzzy2ranCiHdm5JuhvW8Yt9heLiHujxhGBrGvBugaradJ8bsG5BLTQ6biGXJY9ieeAm3tocrCEbM",
  "key36": "2QkS2RoyrvW9Ax3rAGRcyEYAFbfMjfPJS6wp1RvZ8i8H66phgxWQp86t9bphtmteLmty9RyVmbxgWnA5ZQ9gaMH4",
  "key37": "2HYw9mrNou3A9GgP3oD7wG6xdiAt25T3YEAzMBWSa2fUzoF4GxCREdhRv97cmyew54AZh6exTB5vqBF2eamwrjnA",
  "key38": "fvW6YWW5zMfnSivaV5Y92ULgixB69AUM6BjxieQg9Cywr9Nxt17nT4gLwXUhZV3Q6KwAZvBUPjb3Zwoh2XXF1Ps",
  "key39": "SQ66y8dF3fwXAGuKzwMAAatS9dT2dXGMF3RKaE6Pyg9cBxaeuRmFLgcHuFTQTh2ScSTMYTEErEAbLugL536VuJP",
  "key40": "17M16z9JWPctYCTu6BcrmZWXCz7hakHrwsgWXxXYKRGq4iG3BNkJre5rm554PvvK9aJ3Svrx1VNpbmysqVNLtaW",
  "key41": "2hiAp9CUvaSUYZfkXSC5F2ifm3UxYzhgaL1DPn58hWq4BbrKDFoTc4fdbVFKGPaapiC2RUxyeWnqfsS8bf65NNjz"
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
