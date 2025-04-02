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
    "t9dme36KZZ3ZTYG5HoAzm5mXPdBk8xKCGSFjKjrupdSmc9k49HfhrKhf6innpC3WSdFeAGBmNi1Quyi89DnsbXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aeP1muso6P6uSz9AcwyPAKez6zA1EUPih6SFBWvjuZqaSUxdEC8FwKHYaHYcZ5eKxeMtkiNDY28dDceaELhyg2i",
  "key1": "2UPf9iEREMaEGEfg69N59pGFQExnNj1kv7BDhEXZXi1EA829sqedn9SxLzXWHccV6Nd14fhFtkrHf4UAAAyaNDdz",
  "key2": "3yEQkgwtjMrtcj4CY91LBABBLhae2MEoBUhKLzH8QonuAYzNTGSFPayD5gPzJuFnM8eY2pe6aSx4XzTVQEXgt9rM",
  "key3": "37qBCadzMZxPvyu2tK82siTagLgTqRVV7T3EYV1Fpbd3YCgjGPo5ckPLF79ZvhJcioVhsgehxtpXULnb4QMKCznh",
  "key4": "5DG9Z1iAPhUED5RsV9EtCVRA81gXBYxPxP2RYkofQSqssYDmx9Rcw8iFmxPntACCTbiqRaqDLso9KFtjzdpSzW83",
  "key5": "3rgaoNYq31X9nVm63ZeEhXUF2mCh2dFnf3VivCS2in5ekVZSFapHT6YxBgpqYWJQoFEGt1GsSTqepT4j3Ln3qpgC",
  "key6": "4t7CyZW9yB4b6mk16nRBV1ev1KjZ5gFxebMuBCadiiG44CVK3cexWVwCUPhEs5Vnivrt8A52q5PbE3PAKxbP3Ngs",
  "key7": "4swn1dqWgcgsHPc5Jj8UP87qPf7xmq3kX3qdjR6Td8ysxDoZ5Sj7qi4K2t4MGvYFnZNDwAhBcWkVjPhgv1FGbZGv",
  "key8": "5PCFtrnXiSKVQq8c26BGVejbEfzQmycVqWAPXydwsmvd7tYe7LEutXCNm3AmMUYhp688CK9TYJE1mkR5hd38qafQ",
  "key9": "4BxVL9QnCyip5zfn8VJYuDvvNAgEsXRVoEygeA58VmvRRELu11a9WrPGN4veKP6XAfc8YmbphG7hhY1m2JTiQtnD",
  "key10": "2ZtQHQJe3BBD6A4jToo7opNKxCiq1AHesWFAtdbeKd65chHp3Ffqe4uLadhtkVRnFLkN92Hs6XAunQrceAphsmoy",
  "key11": "5ztBzorUP2hJFyRXiYoZ7SsDF5nswBLGhTC7zXa4fh8yPyN1a4FqHYtpUmZHKiRnwYiWF6r1Vn3smgxdLpNmPMSf",
  "key12": "38eNsa8CLhkN4WAVgp1TeNBgtJo2f23axCwcvRJiGaRwbxpSqEzDzXQFvNePcgE8boTia4j4Xx7SSn2rFVCQierT",
  "key13": "2jZTyEAqSGimJd1jU5BfiFoWb42ZxRp1pMctPKGWSacNS7tAUbwFxfvf2Qy4epXYwjKn7m49E1TyvHCr5swTCmVP",
  "key14": "fmJaLyatU1k3WX7R3qeKrSwtHL7QWf3LwYNbDxspUJjrEcFkw5RSgHz2RYqNDrDm1A9CYrvYh4x6124xwmZC4Se",
  "key15": "2T9SKrvTUkeURqnyEKBZLs4guGBeWcmyY3SjQQ6dwmeiWe9urQLQApaucBatMQoXnzAP5kd32vEUsnKw6koTwisJ",
  "key16": "2bvSy8266a4d8qaLbCuPSMXGf6v4YsPEoYEzSHC3fA1AdKq8e8VQAJAaKe2yxC8MLzVZEppLFamasMnr7ebBBL6D",
  "key17": "4srJDQh3pGTJKAGoVVBqLiEYgdWbyuw1BYCwiT84ZMtxQRB8S3SZ9PoxJjBSdYmqdDkVAazZvJfF3MeR7h8zYgE2",
  "key18": "2ebA6ra1Mmrd72bvR6E661G9mL44piMhT4uZwjKLEWEpizvKqUm1qFHiz28GaQw9BQZoYPzwjyKDvQYKFYvt3SEB",
  "key19": "2i3kuvf7TqSjoH1EzsrpAi5WFpA31rmzkpniqbRHVbvbqKp9KFUsHUb5rrpA2xJFu316cs1CinxbBdXcfPQSR2qt",
  "key20": "3XN7jLHpP7qDfvpD5H3sC2PMenZx14m7byXD2tjEkyYPvfTUW8sgQHo64s3MhtUQhEL5JFvDCeKhcwBRrX3kg8Da",
  "key21": "3ZG4iAbeNxT3NxMTcEVB3ne2AQEj1fagfTX8CVThs5R4V2MLz6wBt6i67tFmbw1rrBy3yDwcaq9FXXtGbXZVTmqV",
  "key22": "3r2bYLxq53Y5M7JxzgFbwhKR2j6dJrYHoAoh5P4Yj83mNe25UdMsKy6aPSyCGPXa6SMyt7qvfz4z4rUVEE4cb9u8",
  "key23": "5EVt2geDXwyStkPcogZ2j3wENonz1SAk4xtsqXXQLn4gp2FqrwLdTvLeJkoxELqK137JjxaAwezjGBusXNS2MpU9",
  "key24": "4ik1WUyqPPRkSEbN2suDdqxyHPktLKQhquhruwSgqXSXs5fnSqA8YCxAhyse4uwnJ2FgjRNqfCAhNqC5PfeRHhWe",
  "key25": "u1fFpAokPz6XfcjF3G4xVeWH3a7HCWyydwRmheSRsqVgNyZWeo3cieXQKZgcGnueiYRA9YY9g4QnJYf7z91BCgj",
  "key26": "2YUEorw95Gvuc84KqYeE94KxnYmHXLePi5KCChghPAEGxxkNi2CSaWay6hkW14qcb3FZ8eSdeoD79AnQdXSpLYPM",
  "key27": "32QAccMSyPksenuUNNiFDfQtey1LHigwpBwbJpmP7zVhRi6vgw2xmg4GJkQ4pjRv2g5jwRttfLMr2764jUo4tY7x",
  "key28": "352Ukav8o8eiWwDF2ixwMYSn9CzEQda57F7PzFSx91XeHcHKSW764bc1vs45n3YJ3YdqvaNhfJivgueFkqYgc7o7",
  "key29": "256b6PpuqAcAKzjSkVBnG9dceVonSXKvihA9NZP2w2QHQcp8m5eAg9XTbsE8kzyX8NNxVnauvfxbKgiTsWA8Xhfz",
  "key30": "4PRghyLWbHhoZxAMF5siCjQ3uEQ7L53GExThBzqcaS1tQGP4siLdYSPPV3Zpki1CYB3YAwsnAHyaTccJGeVZNe6h",
  "key31": "4GDLMYmbpRhdHRNpxD1Ws3aGpkNHmeSRjEcEvy7LgtgtzWiwAXMFwUeSpRyis5SowVqvosTxvharxFhF9R4ihWpA",
  "key32": "5SAuhptLfJVyDJTPKqu6LJ9T9uf19Mhe24k5xccMHrRvaFEAUtUzrn2ebLXkrsR9Jid3W2goh3MvieMo1duHwjAM",
  "key33": "3uGnnwnSy7koR7Zae6yRD7ZtpoSZBwKgMbTDbLzHDv4oDKHAfQfGcFwPf8AXHyiWMkxdi9kT1tBR4V451dhD4T9p",
  "key34": "315Q7DxmePRjwpCY7QpFJ98xjtNggDGwZQ8DWyzQJ8i1UxtTGtXML7pBG68koUoJEpo4f6HTz83psq89cRVTi2UJ",
  "key35": "4SnhzjJgCzG1P3b1E9HoQ16P11tUvhWbQJR12PzEgNPr3uXoRnthhkxZuVo3fTb2MHopincBg3yiPa8UcTM9DsJQ",
  "key36": "5wMBdpodkgLB7YqbJnEN2RhWfFKXiX3oqPeWjLkyrreADqvrPTrL9qCXmHPLRqukndydUmiBG68Rs7RPGAZTfqvn",
  "key37": "5nZCteFkPRxfeELGAZCEM9pqwc5qyqzhv4ad737MoTsvspyhqFhcs4hZkUWBiTCnHjQ4wC8FtdbFkyS52Xf3mXy7",
  "key38": "9gAZBawyx7oRpkSFv4jhnZB5BRJJ2FTd8hxeDEC8jiSnxKyLbZAbhGVjHRiRiPSps5kpcMbjMukqSLG2L97sawQ",
  "key39": "55Mhrb2yUNU1533gTirL3Y3uFcjcD9iF3ycp1HuGBHFeWPBiS4HaJtP8RDvPnBU2jUXJPyE2nAH5EjRGzwEKTets",
  "key40": "4J94GWxP4nAYnGCqPdeMsDAFPbiawtP63MvsNEVDfBfA8b81MgfjtLsxCfNWXiEPvckuK5n9rwecUyJLhbUycYHT",
  "key41": "NcS7VpQ7DTkN5sdKxnFAyW8fzLETnYkC1CUfSeFYGN7e93ZA29fXSrc15VyWjtXA7RSTbhPRNLTLKtMP2yvGHMP",
  "key42": "4WCUAaBB9WcgFVSyRBXesVncvtNkh54n95Afo54dsR4tpkjcMbMjB8vpueojk5E78ejPkrtr2r3vbDNRLU3DuyMB",
  "key43": "53L7CA1pRCeEyd6n16zU7R1hjSPjTSk6VCF4WhDJiGy3Roi3atG7DzbDQsJytGHnueTN78LtHcM1kxEhVT7i3hx7"
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
