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
    "3NNQfquBN8iZ9LKurekr24ZRcqCB5sTxsoigEBsf8WN2HwkWfsVcozPn6G4aiMkswF82TyFeDg8CVjddL3LndQ71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdoHSZMHs9WXCiDYkgadtfAAuSCNRi2xrgzDCCYVDG3wjEEUzVtgtdBHcBVqAPS7JL6nNLMMSovvX2quT6zSYjG",
  "key1": "WWPL6oY2xzoaq1HZD1ypYxL3StNva23ckU5FBL8fdCbcz7dtvmFJK1dcUAaciZqZ6RgqNzxLs6vg7NkWU3mRokD",
  "key2": "5KLXgDdH7SJHSgCwxWLS3UEk2Kqky3ewVjbNF4tFtFvJ3gFjUzhobiKtMqVoSpvAmQf6jxGQepuVjHhuHAK7Xjjm",
  "key3": "4iRsS6yaSJDucYBu74qgCYnU1WS3Ym8rBiMySLuf8ibEedzWjDbtoAYpoMgKLR5xKrRjSvytfMf2DMgBinfbxvhE",
  "key4": "2JHc3bjDgdPdmoRgJkyfv7x4x1JUPRhyyNWb4BeBfP9rNY7iLiYYZvc7zTzJAtV3JoV68adLQkqCmbqCEERVQukC",
  "key5": "HXp9UwZmzhwVZ9kmPrJ3gfPtWjHQmWbZF1XwcsW5LSTXtZoUzQXQQe17y1PpUUDycVY4mDCbMorazJbftei7Fu4",
  "key6": "2wPY8iurwXqNyfNPEuKeuvmcRPmLnqW9dyJwzfSKnsdNQYtEQLz55dRdVDCLvFJ3PwRmQfDGnQuejLovnDETRpz8",
  "key7": "AVd1MJJUhsiC1BifzUUdKtRdqv6QYfWJjfKvPhMGbm8KADPxFXMEerXxSuPVdrnTXoV4jxkJ2GK3qfAd1bk733f",
  "key8": "2p37ikMh8oKC36pkg2DfsWSufkmA6hB7gRpQxQGrPo9bQ6tcz1UhRYPwDNhHjqKmRt51xbWAV2rs6PZgtsaerCPH",
  "key9": "3tM5637b3P1sLFmZvJxdE86rS6WWLaycY7bfSGHV3imxyv6cUyWTVxiq7ouXMS6BK4V9BAg7szTCdq8B59kDDpoH",
  "key10": "4upf7cSY2Guv5fgACx9dEgfiEcnxtw5M2X5N7JeGH7hNaL7Z5oTyvWKdvvgvo9uhRbuKUzpohTcb89rXqXiHGV82",
  "key11": "5zhv8Bf283nTKg11XcJhtZoD5TDzyLR5tdUSWSnBtFc8shsJb1uhP1k2W59hnpg3wNMu6ZRPs7mRWtnTiuZqiayD",
  "key12": "27PqNhkkQWGurTomPz4m4nLpNbLhJMrh8oE9Z42hiVTm8SiD4QwaeSbWDfQ3dRCYMmDZPdZsZ9a8VspGfnxq2aQG",
  "key13": "5B3BgvdNAUQ391Bf4X6M6d1YDFzfp1kiH3Qfme7yrrpVqwrWNwARYoHepzsyHocHePANKBeyVHhow5RkmMsatcuA",
  "key14": "2ViTHyXPefEnTURE6ashQd5nmdmGyrDfWtx2QxGmRcMnwtfPyhQVbNgjc7L55bQaC7B7ERSTXq33Levx4ePdExLW",
  "key15": "oE9b19ihZod2dChKCnw7v7wNbQn1vGRUT83Uj6WoiTFyWXsqasvXRTP7asJhdXYfgVcMs2CfiGePPjpvojhfkEW",
  "key16": "5FUMDpVpynhDrosGsEutnKUaon2KizuyA3CPaBDT4hE4qkcHPLepde3stYwwgUzS2a5dx1aeHH2Y15Q3fU3pr6uH",
  "key17": "3Amn9i8rTkk2RTr1g1YY8Gndug5Dj2vipv4gfMPt7fZc1Roz9PQFSs2FPqH9KuUvD9ZxjA6MuF5mWpwTpSMEP8Jg",
  "key18": "3ewUiWjHECoCMNE1L61ZaEZRopteSfFyMekzHxg7jJ2dpQvDccqCtPDh2AJpaAFUkArN2EzRi1tpNZFqwgEfmqRU",
  "key19": "49KYCjF43zp7hQczzswMY4QJVNVXpw9xZW69ejJzjrvswYe4JnPK8hrAq9JVs36qdeWxsouAviuq9fxGdcdJh5sh",
  "key20": "5WnRT6atyrGJFR8nLxrki8rVzB1J3Hi6qM29Y2eyXLzDrTFUYJtdxJ5YJrpH3x1cTRBJgmLGQcNX1G96yvJvsVnM",
  "key21": "an2stf9BAxeicpQs4eLcBUbwKYe8SXwRZYAPt3NPHB6MBMe5CfBmf3mbE68zY25BHjGtdp6E47Ph973jGJKcReH",
  "key22": "5BzsgEa9CRk1e4TVWj1f4dfdcGgk63ED2CVdNsDBosUDXYgguCXmU8VvcAnpPeufiGM4578rBogYvLc9dN1h3fSp",
  "key23": "5CAR4CPWpHrB52FrTd3cbsZ4qvsNmGED8i8iK4JtyowvVFRbhwYyEJNaxT38ziS2nuJFa8S1AKBXDzXzD3nSCw2y",
  "key24": "2uGZmoLo4p1ZFkrcgVC24VsuvusrbC8fsXi7Ld3KLG6XXPndw3UNHL9RsexmfkkRcxZx1GACZk1F3CEe3PABRH1i",
  "key25": "3sYKzk3LM3wNtGaBMPXmmdUTwVnHngwk6J1QWvyRwBvar4deZ4EfCNwsChfw4MJFAyLHMrcXTNg3P5V4RBsPEeRX",
  "key26": "5pVJow8czjHfAyKziHEnvKGHfs8vdPH8jz6K8Nz5m5jyvRhBPMJTh1AmD7X3EWCrG6Kz9SC1x8vT3fAwgEwSs4VD",
  "key27": "Ud5JB1JSKPKsiGM1k54rehBGXxDt3EkyLtuYN5iLGaz3ovgZJ2eG3ocUXKpaScgEDQBEnu1MZbFSCaZFtzLvc85",
  "key28": "4Hi3G7ptcKBjVo6BknR9CTgLUyDF4FLWi8RFQA7nYf89uTgcjXJEVZdCLCuXemT1Zjc2swMfgrZaX2jym4ehjGxs",
  "key29": "5e2ed4B81VG7kMJXR1U52xvxup9fKEUou4xA2RhxtRpGH2heNesGNxCt9bfFBjSQuPFNWKLgjNnxfKaAeHp2tuvu",
  "key30": "5fVxuw7HAg2WCNzHXecvwydHgBvrN1jh65ESzQ3s6RTiRkfK3QbE6qzJLnEZqa2BChZSKYxAU2RDboXza2PjWGBN",
  "key31": "5Cj1zqRZ4DBfZaKtehDbnaezgd2PK6kXckjGU9m4BEXzbr4Fg3yZUEGoQhdm8KrhwUg3X7U5Law43fFTCmXhYD7R",
  "key32": "4JXwQBPKFMFkaZBbN3KNGruH6caHf2yRcFtCE4qafDCi2wH3g52Jp7gMKG8Lenroab23zBkHzYHtDJujuQ9bbmqe",
  "key33": "5sYJ6DKiCF3VUrf7KFkqcN9zPnfESRiygFyo322rpsvqQd4RvjJphzd9yTZmq2q9TE47eu7ku8chuJjqLECN5bP8",
  "key34": "2achXSWMEro7udwgpcwYwU8HTuu29CvEequjZutQjtXbuW71uxzNNbQNuEyhHmGBFEKPwPYH9vQrzULEAYQDd6XU",
  "key35": "4KBACzsVjwkZRcxsNfBobdnrBB3xKLzdDNDE8kSBNMtpBHr9Wt1bMTnN7p2LKWcGwMUpgS7CiE5WCigMrc5WeRoQ",
  "key36": "5unaxFMCEPikGGbMw5PU1wMToqEjoMPmDRUDnjVki79Y6bAwenLkXSGKrrrMvyG1JacEjCfRM7XtrKUxZDrHzD8M",
  "key37": "4bbNFd2Vmbd5SB4wJEkSegj4HfB1HYgBFuLaiFMRFWo3btzD6E79z99uG2kDTaMqCQoC3PbKUD48heL8yrotuQ56",
  "key38": "31LYvVkgJUQ1rW8XtqZyphWpPfBUrbb4PqS79r4vGuVuBd2cpQLP5ewZ8Q5FDVkSUrzNQvjsBgfGVuVXrrHzwtb9",
  "key39": "3xXVQ3togLMkW17J9JoscFU85PT6niykkMpQDB4BTzdRgi99J2YaZomjZqp2bMdfwCbbdoM1e2tu8q61RHLk2zba",
  "key40": "AxJ59K3vgdkxQgRcMaV1AWUKJ1nceY1xkfwL9s4mqu3j49TNHHtqFT3JkLMcwFSCumzyjfzKHfgc5aF1h88dtpj"
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
