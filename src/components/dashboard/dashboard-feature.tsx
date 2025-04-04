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
    "3LNqoiGQUeXhbPPn5syvakc7vnnXKzzM9W9G15EWtt8vpmiwVvTb8czgcuGnJmzutaFWHd2zZr5W59ykSDMaEox9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uv1TiGMNUXqhae41xcMouVEq8waWfxbRtWGCdzdBGre7ATwARohjJME3XiDDUQQyqfRyDpM77fSP9pCAmcSJreL",
  "key1": "5W4tQLKpzEuz81F47aKMpndvHranf7j3gz4brsCjGWhpWEHhEN1omCe7aTTihRF1EwbWD43WWi2of6MfKpBc8Sfk",
  "key2": "anMALgoaRsoBhhoAHV2EdvEbVDQGf7bHgsMkjc6BaXqkiAjJzZS4jdusRq5r7696bHd4z6xAN5xvji6AwzzER3q",
  "key3": "2pCzUiaCcPPxQa4dGEHTeBpffjg3GP6MrRwGugpiKGMiyzq1DLp2T4Lbr4WmcJR8AqPAri2vZVreWuwrieWrm1LY",
  "key4": "TSqL5MTCj3dKfy5sbQxerZ3EjcfCW56d4gxmoBwgHwhBJ7KBk6DJo6ND1f3MStVgbSDXT1c3juxtudLYbfDNZ3j",
  "key5": "wwgq4ryjQdwq8apL8RwAntTUKpEZtnGQ6T2SAXTDBxLVLQrKVP39eNHjgRh3k1beDzqqJgr5Z8yL2AxkA5m779p",
  "key6": "4czo7NDkhGxawdoxBWq1UWsBaiMMus1JwA3vjnAnM2nmrUGgUFM567B93pS43tFF9A5ZxYqeuk1Ai5LphLReLyaS",
  "key7": "38ogDXNm9S9RxYQWqvFyKReJkXvH9snU3SXbApWddyMJF1nmdqGXPGABGhTinxgxXtAP74YKH1TsGm7QyX9cZt17",
  "key8": "4kvmFrcfynj1SPfmFMfqbMegMTpGwFBs7U4BdFKkW4ittSzH3WyVj9tJiiwi6eajKy8Een7NPesofVDTu1KxyssC",
  "key9": "5PybChiTdg5CJSiA2UsNCu3ebWioddSSXYokJHFiKUngSHVzwEBN1T19XaR2XnNJ3pp5Q2dE5PakzME8VGEUKrL6",
  "key10": "3MD6X7EQL5Cb89Rc7AehJAAt7GnZ296EgqRSg8nCttSZ4pdyo8m39n9V9SDA7aT53kHjovxNKQMQ12ohsc6TF7no",
  "key11": "49Y9AT7qYxmD799Sq5br3V8n5trCnvi4njqet9DqkjQ9Dw2gLvaEqdUGwAE6kmASQcheg4HNroEGEMrn9bFcDZbE",
  "key12": "2FcAmLszMjigZRtCoK8HfUgk5u7ucy6EV8M5TmRFuW2FgMHHBSoF2sNUHDze1z75Mwt9oVjUMUuhTFr5Mbdig6HN",
  "key13": "659u7c5jse6PwmgLVxgrRpZr6afRYf6DYWXRHS4BxAGNa7djEQJTAmrUgEF8J5kLWnpzn6B3ZdTHThfySUy2wnBY",
  "key14": "NCWzfTrYFHm938bokYdATX82bTti45tCqbGuH5UUAUc1j6yAamw9txRPGVUahMfnVBmYGjeTtpaWfTMiJQz8j3P",
  "key15": "ZPpT7VBru9dxr5aAp8pF4xK3ov851vdiGXYJStSepBeWBxokByRcXPqRZZaC3JY7qNby7emSPF2ABRKZzp7BVJv",
  "key16": "pvTAeNAmFQCraWyfTPXzSKhTry3Fuj3VnVvQEgaTTTT3XxWds4sdZWNBhtFXBW3516CPAbGXnCacaGVfZvD67Rh",
  "key17": "3DcekTxGbGNbfW3cft1meWtYX4vcgVo36wybtdxDuRXx6LjD5Q3LUpW3vEdBWsc1cUaJbHj1xEZowJSuv1GN44C3",
  "key18": "5zQASgKuq5UXNze7pB4CT1txJ3UbXBRJ3CEgjUMK84upiCu4bESRJZQyU1Ak2MuFi8uHrr2WEXyKkn3bzVSugye8",
  "key19": "3DmxCF8xsV6urhU1CNKntWkXCc4yQxk5987WGceT9x5RxibuHtkhv6jhB7DWVXedHbpRWtGoY7Ss3eQZM3YwvBmN",
  "key20": "YW9Bv7xmdHGbPCFy1QRd2yH4ebNkyBc1QtmWGCuiScfcqZcivKC4W2mntoKaEJAXhs9ZD81VAg5yJj68x1mFtMp",
  "key21": "5zrqJnDYsLcPeqpknAVed3CGohK3Bmimgd8TKUDRJPb4Ewc9yutDLbdpzKqgLmyDNLozUj21Vi4MZPyZbkafi3qV",
  "key22": "hap6Ysg7GMwgHjpNNaVusbH2PjeNg26uAeowTYVuRqXPbTqAP2sbeGBRPoucHHnisnXLpG8f3GqeS2YjySioV9E",
  "key23": "gxr87UvmFp9LFJCoNugc7bdcknki9SLP9oDZHhuo1o8dCHEEtbfwWSa3ibebyPajNUNUdirDrAeCMMPpbzbEm5x",
  "key24": "Zc4Bgu1BRfrFSk2Nw5xyCX4j4isUFk9m7nwu9jnwyerkwAC1wtu4pv9tRTcgTmKLz3RGjqjAFBE7L5yDNS9DgME",
  "key25": "45sbsho42Ltc5zka5SsEHe6HjSzk531X14KwDgGsLMas69gBGBHrcYDWEzX3rwUt2j5jPCotrmH5YhrnSTrQAe4e",
  "key26": "55anZxAfb3oV59WrVisufiRuHnmaTDr2P8eF7kka1kSvwqvr5cSWqeFFQbG1dmsy2PszdAZb4Lwse81D4X6Y6nzo",
  "key27": "TtJYZV64xyVbtvVQHWpxXeMEPUBvhL8FsmHPqxD5PthCeFdMbTj5Loandy3abxA3ZRYd1eKMAX8ma1W3vzuBbLV",
  "key28": "4FgaDrUJGCUuNwbamzWnWhs8e1PeVo664qjEjZj985FtR78WMqU3RkMMk1gd23m67U8Qrmf4VZnSQx44irWQy2UL",
  "key29": "2pmLcA4JVaW7RgGvzyNgjLXzuEKMhnMGBFvJRUmFMX5gLe8Hm92gf29H5w1mFDBF61A6KLLY1pjzPPKNu8WBDSoV",
  "key30": "53yDguig2zVVeuGP4myT8vUMou8PSt7qoHmBnBhok6KTvsPMmes4wwGgi48Qn5t2wCheNWbGsnAQfBPBLwct9eBt",
  "key31": "3hQ7dLXwGHRp7gRH4NHf83qfNUHFo5Ftr1sNNXmm6uT8YpMMBHHhDCauCA1qfdcKVQhyqPSLjFjMhLU4a1hk4rHW",
  "key32": "4TkSA2dTkKodgPGqGCXiBLmiBkLZjksHNLmNDkq4BrYkxBdgafTMqMdJk4N3Xm3vSHh8jPmmoppZSQUER8V2HWcW",
  "key33": "2vcTXJxh46T8XAP6mYYYJFiexwNb7iZirvcud2Y9FYJPTAxJaP7GQchWVXgsPEWBiUsWi1DKBNiGt3NG7ERKbTFp",
  "key34": "4Ay1JhRfo8zfHntxXePX2xPLqnujvFEGLCmho4VFj3chANYAddoWEMu6raCpdjbckS5tbdXWyRCUDvhuvqCzrDsB",
  "key35": "3J1RKWRQLjSXJ5Xr4dp6QxXZqtVLgSk5h3vshQkuKzfcP67XhSdtQWYUAJC1oY1Yg7GwCMsc8AGAcLYJNV7Vdzqv",
  "key36": "5TgK658kWM8925JcctdjjdRA3eQVAQsgHEEVqQozc5CJyy9T6qcTaiW8mMmsrp9K3JNoVxQvMiwm6kUtd2Q977ST",
  "key37": "H3XobuZXT2RpNpTPP81qU4LbF2xyD1CNbvTjt7aLZ8pt1HSHSNmQyV16Qwp1gGfaM9s1oVcayJpQENcCTrkZZMi",
  "key38": "2wCCC6hgD2HwZ8jMbvo1Dd615XFQVP27o2utgH5RWStaaiFDH2r7CnFdzJUH3jkhGC6zLGsGiayvewcDVE9ixLDU",
  "key39": "w57fmnaCMo3NMbf75CUEWq9uVGX1ewtEBENpCJDe6NrH6fy2mgmSL3uaYXKXEirSbEoDCbRnrXHmSRfSFFdNWpx"
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
