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
    "53RGVLNfpLfucrwheSqrwNeh1VbzrNBQGBUGN18zEnRjiBwg9RXMiN1cLZ6Vv7PM1L36otUGxFMomaiGVTezbvDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Sp7EuszLUtVPU1jjWP75agJw96xtoXDvaWqvcbqyzmAX1eie5kdgk5dDiH99yaHbtjR7biXLQbhP2pZ5yDYpue",
  "key1": "3TgWaTbUqMDvMn7XPAiex4f73fZiu22AXWyF26UtjLGscfBpkYEA2gzZeKLiFk1w8RQkNzyL6GiXcR3XJiyhcP6x",
  "key2": "xkj2MT3LQLBTi5VSue5XX1Z1gMtXiC62kTihN4PgHCkJJx6HdxVQdQcsucPVh7xhDzyYgJn2nXxnSMyHtVY88yu",
  "key3": "5jhNfXLDYbUFmd6tqjTZnZm3T2DJ1DWCfFVFsH98GFbzJm1xzCBF1ihr7WTpeKdvry2uqUePpt5a6cPncHcabzBh",
  "key4": "2WVz1FVgcC46Pg3jG9SrNXudAWQW35MQGvwCQ8Ks577D9wh9BNdyeWNAu6fFoHoQDVHhX287QsVvRwv35JBdBrKh",
  "key5": "3pcofrj3eqKVRZSFqvXn183FJYC5cUnwAZMsNnKFd18Fp5wZZyjTtPJaqomYpTxQTagfogaHozEd2Pn57pBQUDXb",
  "key6": "JJVfxcLxXFtcWEZ9SoEH6XbmPw3nCAm2gE82gvWbYpS2LPqA6Tgxgm5KwdBDMRTABR4Fx3hY33hfStqDGe4ZXp8",
  "key7": "3JnnAr5idRou7737DSDLCbXGAAgCj26ubQBbSboeMqn7zDU2YgkzqxzFigneX6TXrMghEcF7XNr92HyRR7ZbQCxd",
  "key8": "3KZ5bsRBTVcMXkUwwvtm1AqyhH2pjrjKks7a5z4u99YmM73dQqJLYhBmkirQMwZgfcHKQkSxKB8DZ5AGkU7r9UTy",
  "key9": "2mo2jKsjEvuyidQWmkNPmH4Hh38T2UgcpAUvfgJagFSv9QbLXDLzHp4X8PKrJUBo6cNj58zpBxLRLcN5ByY1TWXT",
  "key10": "5YET4sPTU4BvbLw154XZ4bNRnMk4zbcuGXxdn6ZQQmmmidVvdso5B8z15oTLHSQAh6mV1hu6HxnqkaTN7CVf2qbS",
  "key11": "3Vj3HxYAbueaDvnJ9NVPqT3JmyLeWGqj8retW8i8xrPP2ne1FbpN5psovCD8mktcZHK4JKDRksp1ogrk54yQGeat",
  "key12": "2iRBFmvYktU51DBZjP8PJDwcDr5RDe7unzCEDJjkTZQhzAabtAeSUqxzNvg9xiwYTTnU82i52napNxi8TwRcKrD2",
  "key13": "5PvMv32EHG5BoKM2ALPNVLju285BoiuRHGNxSkeiRis4KEPwPMgfiQVAAatmn5KpeTs4eG1pofESSzAysWuLWihA",
  "key14": "416LybpeLcrCgtWiSeEnqubHkb1ZxnwdQiRPADVKUAzdxCR4xJ3nP7Z4hWsXPeCuMue4TQ5WQ3kZhv33zC3p5hmJ",
  "key15": "2nPgJqkfGe37zyxhCdjjFoJ5eNd6XC5aifNihu6EL5KAge7EXfykX1LKyMHVywnExyjVsdqizewJ65KgWx1MeyhF",
  "key16": "36AytoEpDLThMyuhGjMJSYwE8Dt2U5WPH3uCszcv4CRMRZR8RAWWHwHzar8DwfY7J86KzLmP1u3AoiPVbjBPjjKa",
  "key17": "52RJtFTgs4TXpQfxBtmbBpxBaBgeGjK2P3YFgYaooYqpMm37iioJAGrWKuyWYx218gZA9RYZuA1VCyWmGCp4aKzi",
  "key18": "zBGGh9KHjVJ1sE5s68tqBQPfbHFvnuPFtrk1c8E6PK9mtxR4ZAdu9jeaFedg7iefFtUa6uzMefep6gLF2v5oGej",
  "key19": "3aW9mcHU4KSwbRd3UmM1LzYQgyfGMW8xz2gh1TbiapZLEPSjkBjorpMZxqMwYAPcQdbhwNQYGcY5K2Te5zNbv6Gc",
  "key20": "4oWT55bdBjKyrMCYAhuPDksaNj5v6MM2DjD2bgP6ZX7vkExZJ1Q6P15ZRXSXALA4bNrBwaoymTWNZkVVt7AhqDDV",
  "key21": "3oZDxfdfufw4f9jsq7LmJHWNu7PJY5xr7VemNPZR9tcfmtgjTytnAo3fj9LjjZCtBc4PLVxfBPjCgzoGtrcEukWZ",
  "key22": "3uvFVTG5ukH2Q3FSYf4jTV5Ev58BE7WCv1Trd3o6ojoJq4KhVQFAfbiyrhPAqBHoDU9yLuuDYXctmw3d1iPiDQrE",
  "key23": "293oLdEymdv8yG3TZX3kW7jtpGSPiGU1YnumYh5Qi321epC1cenJ4B313ksBJgF7uXrb7ujXA2egs3LBP6oiXbZE",
  "key24": "2C34KWtZQCrrhCR5caMTPKaWNzxERhbsV6eAaXhyXbs7fLDfHyLsQcfDPjxJhvcP5qx478ejsCreUNxtii8UcFRS",
  "key25": "31wpQJxC68wBYJLKheCp2g9peXL89H3ZVKHK7AUK3MFNFr4J5SbUW2e3BUfBzH5QZQ58RQyhRUaAbj6PcfNuNWDY",
  "key26": "44txxMb1HuPbHAVibBh2a5PAPBRj3oGAay9jqcLQjEz4dYc9fhjazPnW2wFt3U6KVGv4rAVLY1j5LnfDCAo2v4cB",
  "key27": "4feQhw1kYZRqmj2vT9oUfTcmcp3ijwhvquUVWy7a9VGXCBRmWmeLKy7tRB5eLaVCUQzGppbhZFbckVfLNStDYURy",
  "key28": "3TEPoGyPMpgLL15pAr6fqKV28cQbUgHBrKMC7J2eZ9Hajw5cza4Tp2CCYiZUoyqgTvXre3X9xXUasZTCPHcDAqmo",
  "key29": "47EdSftdW9YtTSNGq4rD5MB4DeXrXha8Ntpe5PivkbfYfUwW79gMHeGBSdPBKAHsFqAk7JFjXPnuqNHEjk1vHkBP",
  "key30": "LVPuAcwyEWw3LtU3y8yEKxcHeZNAWd6Z2AtTsmMdQ9M3ZCSi2QVxUB3rfwgd152QsM3XrqfoeAVyoCqSDgb2Wm8",
  "key31": "ELLSRuujbaVTGeg6ayekPbMNRVonYAShD2nbGtruzQP8HVPm1sB82msb85qb5mxSHdorLhSEzdTCKA7ch2sWQ1u",
  "key32": "4ModH85LNpNzx42zKYaoVpkGA2cD5cnwiz9YuAkEPSaNNZbP5fe1QVb3LuhkiqgNPtgDKLgesziSdwGqYUbAnwfM",
  "key33": "4J6AZ6UcoDrCnHacTosHx9jQHVGD8DinVBCgYP3RSKPHtVqJ7EbTtqdpWRpudSXQVWXrG9z1ehNss3ajPky8Kt2",
  "key34": "5BrnCnF5Sur9Bh3NRe8n5k1HA58iWPLXJsdPHZak4Xq2nuSUjVzT4vLwiv3UZcBvfjLvHHRCpYsRDT5Srftu4PsE",
  "key35": "4hds88witLvjT6Xag1EzM3FNzdzHQN69i8vsdPYYzrF8r5QVKoHGz5qmLLD8bHzf9ER9or6vvcwPkPgjetjAoBwe"
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
