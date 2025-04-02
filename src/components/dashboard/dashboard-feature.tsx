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
    "FFYQaz2ELvpbD2E1TqFZ9X994WDujFxtnpLqLZ3Fm2oCtNBDjzTjXQT1tJwqCqMGkiH2XSoDVZvzy5ra5HfvSJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2LLda34krU76DoL7xWSamhJQcebotjw9FHdLZNVaw2ojxH2rPZbpawa1KnhqDBDGS36LTTVXQagWmfazeH4C5u",
  "key1": "5u2WVcRLmZGmf2j4EXJDUYsBWtS6sn8qCz2sTFXZQ2gzPYPJudVQake4QFhLVxkcwaTFQQjE9BYEGuwKKvm6j9GX",
  "key2": "4cf6UdRpkZktfMcMrSNNqVYhbEceaqixFAnR939ztBbjbFX8QEm4LZ54a2FwBaRzGofL4SyVbUX33ZiDkHwsYZGF",
  "key3": "4rZNifG5Z9UcKNRm1csJm5op8C8R8fzsdPP7XBdRdNV7LCC1GctD7VRkdBgnWakczoMJyCxwRTs6a4T51gZBqV91",
  "key4": "5b6a1PnxUfLAH2sUj7XBfE99KC5WSxXPd3T9Hq7sDnWCUhgftfj6SPnJdf3dgG1upPV4ybNzy6fGNpN1FAENELeG",
  "key5": "3KqKHLVLEtRbTJDp8iUYHvc4UkydmnHDNPAdusXXfa36P7x8178TeX4BWFmz7kQNnvoLJXDbjCbu3C2DMGjoZGu7",
  "key6": "3kRE8eiyQmvsXbSLGA4fcp2geYvna2RmXiggKELi2zpc1PaDsVnE3rZb4Sgr19m9vwEZctayM2iqZPpPDr9H8TKg",
  "key7": "4xacLvLuAF8eGHhNgeq2V1dbBnvFz1JMFqN31PAZUYg4GD7CEnaHvDuKW1EhnQ247VAxQgsT3FtmvDnD4qr9pKbp",
  "key8": "PADEZxj4dZQ24jwsteKwbYEiVRRCc9LsT7CxsCftHsmsRBCdNpo38j5YcJyBpjzzBPFCS4gt9xoqq9bdvcbdTn4",
  "key9": "2at2VaxnKyw1XqjLHCf7gVREgerte6mqBgVmoQ4QRjf8NwgY468KTqJmGUFNdhwtjxSTbfFP4dzauViv9pYGL14c",
  "key10": "4h6eecp1QHC8CuarNP4VBCM4rtduw6JePWQ3b4cCug6oomzJAovAJNqwiyCQtQaw5Wt8SvACVWryJXHCrG67HV9D",
  "key11": "8kw6mLJsotuLAEmaPBDyWmDxirfRqrj5NeY7nTm7JrKaNjQeLX5yAq1EnTiG2jF3oBS8dZwgHEX4eqkpTN8qrGc",
  "key12": "sj7pJhX9ubbrCr1VAbvfEFQkvavpjzcko1yNTvZdHfd1zTm33vupmgv9B3wGXmyGbMViKyHKLgfBk8EK2NK6A7j",
  "key13": "5aBpYkn1RfZ1AfZPf4WHFQRJLqCXpedmLf3zNZw31AAQFT7KAeBvMTN86VSQDKevymwgNgZQDpUrTh6BzpK3D3A3",
  "key14": "dL6FHsKZkE5bC1efkSpqVqbBCRtV6cEcK3TRFYP4McthNQgyDSz7XdkPGVbqzwxpnSz7gxYnMkBQZriQUapaMYQ",
  "key15": "3jBdG5AgdjDVVpB2Fb3Udz4P8F8gNKQLGRdD8gJTPtGjvf3dpnMEk3VnKZ5rkSAjUpKaXJoU1AbFUPVvz74EzJfb",
  "key16": "2ZR8xseoBcaRbAe2DduXk9vx7CrCHx4K9fnvYXp88Kkg4gh7ZXCpWyrGYLEhf4nkeJ1YWEueQvRcy5EboE6aCELc",
  "key17": "4mXCXqeRWoQHWrVAbMFU6eAAvTBsJVd96XqjdR54rAMQWEf16uxGKLhgMkqMdq6BirZrqbSFTXZ4vABRiajJDoBk",
  "key18": "4h6pfpSEuxMznGywqDuWt7iUkfj4iSbcmhuo2DmWtWbAxUr4wDEKuJzeaJ2KDhGpXmyfzVevmWvcS8nZEwTET5rg",
  "key19": "8YTutbmCdor1ajK5GPWE3kDxiFD3SbCXhvu5tAJ8pMxX5ttZ9s8UtMzmimrzex79jMRnR6A74TBo91GgDigdiF9",
  "key20": "KdB62eKtn4bMk2Zxz73YeDmf29RjwndX24pdhJZeF9kRCb5iqBaDutX75u8Dk89MbkRhUm8hF3ptfB9Ws1GPW3W",
  "key21": "2VkAsjj1L4e6XTP3BALC58FMjwd4m258Dy44pbtT4NCfVej4EwDntvb2iBoWxPKJPGPkAWr7iCXv5Lrpw5VGnJA5",
  "key22": "2M4THnCEL6f38exJtn93jH6HNToovaMYiao5pUa6tovKX6aCtS87bqnrbcNttoTnz5ShjCwsd47pFahgfpJWscr9",
  "key23": "5LZRvQyToPdBnBNf2Zc64wAs3PVXfroA9jEzzCCEv9rrhAFZo1B2gZHkFnhRaMzuJbBs6fseRGhP2WHi9rf8sTQt",
  "key24": "4c6JTD6EW6tWvwSsKEUzDpKCBiaucMqLkUu3RUzyBUeLMaSFHiUbor14vNtDsgCNXoGyd6dLH1GiZ8tSYVwwZQU7",
  "key25": "3wDL76fEUPPJyfbQb8eGYWVNJ18UA3qUwUrC6jwttJ62LJ916ojstjVccNo4hRpyTLe7VantD7zMsmMo6fSgLXPS",
  "key26": "2dv2bw5hTTFMn56nkwVXdnfcHapoQrM11ohSvY2WEhBiBKVsQHrbMBYUJQW2yeSfi6Z7XbMaQhccuuja4yLq8JKJ",
  "key27": "479DjXKA2o3hFNAq5eyoNAzwPJiQ45C7zJ9WUv9cY9jsQYCifkj9q1tNF2duxKQr3th6sQ9rHpj7QvDy7qqtZDvm",
  "key28": "H8y1qdqPffNVJ9NT2YadYqY822i9R6hZuGbTWBqTRedSA3N7Mp8NY7VNvZW4Nfz1G2it3irmEAsqY2H4xaZNPXx",
  "key29": "QgvNwHoUE9tKtTMYfB1ez1CtBiiAsp88fWKSAcX6ZkTJT2eEtSahZj3AHKn4dR2wVhSP1TNCaa86MqagNhRUkya",
  "key30": "2axCmrQoCTKRWPyKiQoovg7SGDvjw5RhTHyGX2HmaXkZSoVzwavj2eSMDLEQaxmjD5GsmGdbuw9LEw2dckSwAUYu",
  "key31": "38JjLrKQN4vEZrAjGXQD1zMURcnHGjPwceFc4T1szte5n4Akmx6FKUJ53gPbo7Do2HKnyXHQSrMfYKUDa36soKDA",
  "key32": "3fFJL5KkKzZwtMaPZpFsCjHHJCaZ5PsxeRo1V2igqLBWeZc8kcfWLHZewbQLsFfpWGV528Qh1uiH1mwkwx2VU9g5",
  "key33": "3XUcZ76M6VQRQmBp3C5MMnbkqVX9RuP63ggEFrq4jzPsuNChxUQB9dqXCnVKAZSDXDGCWV44PfBEN1zezFvrPs3V",
  "key34": "4upokDV9GqLgcjg7WnSchvFsr1ogvieCUiEiN9rVRZsNtkxePXQLEHak2tM5iBeph5gANDVGZXVYdbR9rQezPSfq",
  "key35": "66gikraR21CnqDSiDy5AVDWWfd2q5HHUk4bXkMGu75Kfi2EGtCWxrEidf5pKXinrgb4ghy8bSNVem2BsgEY5ReyX",
  "key36": "3DmjM1mdjZwjdDtpYCQxHGTDRQgrG4tUG8Aq6xSdi1mmhDsXaLibC2BfskhXnR82dntSKxcJw3193pkBYWoCNbhs",
  "key37": "4cYBN2grRcgEyEXNJYBytGex5C7ABSToPix12A88Pt3AnpWRdAcTEfcAq4qojAXUK1t5SDXxVL9hGnm4EXd1739o",
  "key38": "39WJugKT5PWZJXXG4K5DRmizrMwVjyqf3AcSvmKoq8X3M1dZvXeNzJgaAnqn2xoZNj6g9RX5YGZysVx3uHS8i9Ss",
  "key39": "dc1NCsNuvUKP53yms3Ygvi64gSNYEV6vTST2KCrRyzQ38oNUAyCMiVh8NfyHG8oknbCuNprH9PMmE2NoPBoH8GS",
  "key40": "VrHxyrPR9CpLbxPCMm8xzRgx1kdVXtCtmabR7d2LYqJHErGEdymiQQgQQocuZw5tNpr3GdkJwnNQSaDHZd3iiUS",
  "key41": "yNfdDbZjjTRwKhD1Jqdu52TarJyrjrD5f935QDaipEwJ1hAac5YPCVz58U8htkYX9jp4iKpMkt29TpUCQ4ACKbG",
  "key42": "4tE928vzioWQuUgdPtfQSSm2xkqwF5RPqHD7bUQDP8pQKAzowKg4hFPcFGxPpB4XDhpNVAycbiVQHKiYnqPqCNVL",
  "key43": "4aZcgDLrDVkQDcpSrZ6BHysBJ3AySfbF74jCXT8ScJPGxMqZnFKqN3GzQZXBbpXtPf8orGo61HP2whoYFBTxCzRw",
  "key44": "DCgsEEDrVwKMJg8Hv7PvYihFbjCHcmqqzEp8kDH3QMbWHjeHvigneCGZiwnKYnVKzsZRFDSwXXeNFPeJYGjc1K6",
  "key45": "VZuLZoZzrggDP8hxNeWUECj1FznVoWznYkpjZFmjSgi7yQzaP76t9N54wLdDztr4qPRnXDoNdwMM3L3gdL487uX"
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
