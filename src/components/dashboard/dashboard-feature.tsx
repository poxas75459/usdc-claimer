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
    "2kUvfjv7eUNiLKnN1kT6x3KetCnhY3UQakTDYemPx6Y1gUQtS84eVsKCASDrRP28ZY6o7sJNn3X6FATcSWJNsuuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJdDWqBmQ1XJWcZS5TETqaJNtcoJP86Nt8jX2PjntjYen94zPE13D5ZdA6hK29Yvr8WKhpSZawELPFnDgeHgGZX",
  "key1": "3aKTcmHbwwhv7SGDkV784Z2EsjRSnKchTRNucee2Y8j8PbsCze4TaiEph7HZBSQFZ97xMgmQAWHtUdWJBPWWDeM6",
  "key2": "2zdM1HPx2z7zBisnbufCW5DALcwjb9D9r6uJnZAktQDV3cFpJDXWCzvYToypgo4wBf89gu3cFZUSPwPkhf8guj7g",
  "key3": "5dWXQnU8qeP9sRPRHWo3HMzVLVma9yQ11VAhw3MPeXyAigW6QXnVGrcnFEMwbSVBokbfMLrwAjTwnSfuG3RHNXvQ",
  "key4": "2g8nBWgXPswRKNLXdqUvpxbCDyZm1vQwkhh8XXpkcrk1RGuN7vKvzhJvmBhiG9fpgdFUHpq4cS9UqtdjzF4D8tPY",
  "key5": "PrAxsDM3UHfc6TUTVgMcapaonT6LDdwvUQNjsfrZAL5uQvUUaazSynFbqMifq8JHjCKRoYwYtZLYsbE9cJqwEGi",
  "key6": "4Hbj49J2KvRZv1HzNRpQ8paktVizSv37A5nbhY49Z5VFXnqG9ZtKgTMWVEwofmhKGYsfFeupHWfVq1emg2Faw5ex",
  "key7": "55SW1v3gfLP6fPqHwWjM5v1yJKqq2n6GL8BCaVSKQBBfZDH1da6R1kHJfuB4Zrj2AAvujbiEvdeP14P9qZNJWczL",
  "key8": "3mojuo13Q9gPkxKA9cMZW9yDwTkuhr83QxuXUfSZZN4cUJUJykANLgZBfCLV51Hv7TzJHwaiNjKRRejZN2hEdRM7",
  "key9": "5wTXQzxV2dBmcHNPjLLCbCBcJ3RkN68oGKGGnRbHez1twqHNJMa88ySTTLoZVpD3h5mVV6icmbJHrkPqXZkSE4dT",
  "key10": "4swE9GuiERA6AbX2GJaM5AeLbE598FrHSyjzq1w6fdxcJviiQjLh5qNEZC74WntYRmUaYRcPrr59LFqsrv2pvQhU",
  "key11": "5F1hFGvLwio75vJPEVSLH5wPeevNKA3owjjruZSRcRoiLuCwp2Bgb2decHcrwP5ZRhdefqotLQYwSfgzMHk2n61b",
  "key12": "R2Anqa3B4zRaZvSvRmFbvdeGVYWskArg5quWrK1Ev3B1HRVUmupzK1FttPpfYFXUkg7TVnmfCZBPWEZf7Qsmh5p",
  "key13": "4gqB1Gn6hPRrNDjgFYCW9UXWARBxDucG9B9rfxR5geG4Crg8yyKAoxYhWUgUV7jgT752YctXfKUCVrgzmcrBfsy4",
  "key14": "5WG6kbqEvXCodMv3EffoDFhSHtNqdhkwNy15CU2sbB2dfmUwxQAagrnsPcdY66npK1fAgPFYWMMWGnhXpYqkiqXh",
  "key15": "2XUm1R23WeQNUS6E787mo1KYaijT5bUx69zUahcEnVvKrtnzTUTsM7QwJgdbQuS24jaZ3tkRDYbsTVBEh7REgHCg",
  "key16": "2U6HomS6c91JoKbeGK1ReDimBbdLaSUQhi7vKTkWMyYS4XfuNqa5Q48T54fs6YieVNr1zoCkGnLyMLYRmzC6dPmm",
  "key17": "31FVvdkar9CKHxw8KJMyAnrBHmEQgxFtANA5WutYuRasfwHeUUYwyqKYC77qtYUaDVkqrBhYaMH5kyfGSGsb5Z1p",
  "key18": "3LvEr4HWYcDMPupgpnngQyeaTdL2w7eeWhYLGLyW87Pg6EM15nS2cjc8rT5ZUBxJGkEmD9JcvpUQrUfi7Qkz3xwQ",
  "key19": "4puFhczwjMTYf2ixYgNpRXBLHZM2XLUA1twkQBwBNiG3dX27PFWAsX74X9o8NtBD5wm7fZKVAi6Cbr5L1113pp69",
  "key20": "jjuTjyB1pujQFreqwDfmoZcsAHsAza3dBCcSmKdgXeaYEXRY7QEao5ESZWCK4S9SpuMaeChPuaU8S9sdThf3DRP",
  "key21": "3jiZFM59KXVFesz3GFhiC3ftm7CfeEeQeqKk3v5Xcr83nLwZjdHo9igcBSZWBcuQKEggdA75RBeqiyGKaYX9643u",
  "key22": "5aq5ZX8LnZwo9KA6CC69xdf2GSpjsgPR682GKuSzbP3ozE6Xw556nAiQy6GVpTpg69aBLQQKNCMqtNXiyKkuXjgM",
  "key23": "291Vy3jAacnHYCrMmd1jjyb8ABDj4BaYBz3d7bm21ArNVpA1tgL1gYxUE8iG7WuKhga1upY69854p3XurMHL5xct",
  "key24": "3HZ8ew8KUYs1LggCD9uPL1zkKGRRvmMQxSXn6346pwhHk1SFK4TLURyirXfnnDLWpxiQq57pznHaWdSc2PnabTqD",
  "key25": "42KtgTKmSd1SiPgqzdtnntWmktmf6vq67BKzbcSbJZ5BC5oLCqETiDpDFcwiXhmArncAFsKkdKFHG6AgQ8Rpnfdy",
  "key26": "4rFTsmHJtezdjpEy1XyqppxQrdBnbAmVLigm4C1odni9Axn1gTin9Lyej3QwLaiv3Lg9qk4sXyZywMzUb7cCsNH",
  "key27": "3n4dJtCxdFzSFVbzPN43SdAfAy41USGRdujTakTnCm53pK3nkwtUHQwdFzH716RycSNxTW1dRWkyZrN9uuaYE67i",
  "key28": "3N4mfhRyLAAQn1S2EjTqwMK9R38tUkfRN2uCpUjDvLacHDPvyiDdY9eSifrvUxWTM14CNUNzo5rUXTRV2dUau9BK",
  "key29": "X1V3gC32XU7dXa8Was7w5v9jKJGEwK6zv8W1z2aYTzRtBTPJA8wrUfLuAbDTG5U2boMGKpZphhKQMH1rnsic3P7",
  "key30": "2MsnMQUG9HmTE52Va1axPmJcdR59bCALaqeWZAjF2ZdktfXyyqY6sZws6GwWVSFgsTJsufNShGBaZZkbUUiJEBo8",
  "key31": "5TKFza8Mb5B7zGawPTiPM6F9hpUdF5XZkoh5KV8yqMve17jtapBXVcCmhz4DpSvR4rPyposNMKoT5BZeXRKYYZYN",
  "key32": "KNSnZsr4rJWeAMndkks3jQRo26J6e74CtYUvALTXDHDwaV2mfHLYFfcePjFdbsutzs8aRq4p6qXuiyTAgXzJRDN",
  "key33": "CQzF6ZdzSNQNpBNSLPZgmm9bJtSJ49w1JBm3bUDMMGbw9dN19VRJgYEu7br98DRxaMzv3jVDKTv4BypXopatHck",
  "key34": "3mVVB55qZxLRUPUwmgyztLapuvhcqY3A7GxPxY29f3hCwoSRwNzqTbZEUHA735dDWwSyEMqNFYgCYsgve4hWnoHu",
  "key35": "2z1KsE3ZF452PQR42MqWgtBcEaA8w5scEogqNYiRBHHfnCpoJextx99nsLFmXo1vAnKke2zkF1z4iiwntQUe1eZA",
  "key36": "2XjA84YkDdd9XqPJnsptXwmMSgrQ3WRQdQ463pJUkkE9ubJMD1n7zEdNfnCrDYhHhprZ9wNGhoHSNTEfTwfuHH3H",
  "key37": "2K72JqnoGMzkjKpVis1SUnbHPGewvrMvkk99h7yKgvxeuhk9JcxN6UKnVQiXSini1WCUsHXvq4LZQkyGepkQ9NB2",
  "key38": "4bU7stCtDsFaqUCmtzrZFyJCu8PrMaKdfFpoLRvoy98TodQw8SuPp2wt1k4hBsRkimgVMSH3fh4T1VHnToSJ26c2",
  "key39": "4iwevuKFpXqAgSwvbs8xz4kGoAwCr3PEtoGwmYyrKJ3bU2KEnKdcDrmHSxa2PXf7sDxCmxdZWTon36h2TinNy12g",
  "key40": "3vtrqTVSortusUgPAFaSrt2fDaVZVLUi9tn6qrFZA4noJW34hMiD1tavm9XdXEvMHSBYebuDQNJYuKm8xixMmDwb",
  "key41": "Ysm8szB1ZsP4FGdLpsvsaLxfdEgeMLH3QLULq1NgRmoBiD1QENzPKWtJ39UHECtvRcT286fNY8Q9QgYVywUwTZM",
  "key42": "57iWbR8stEK9XmWKoRVESRRUvPzx5c6EgcGSJU8hSoxLPkvSH976K2spBzjQwKriJDt6qwwdfs4ejQaYzssvR4HP",
  "key43": "39fwnsHKaf67KurEV3SAN36gCX71LZGAp3RQE4eoMMkmWzWE4jvV8XzJvp1mUtpsXYACoCSfob5ZwKQC5kjLZEeF",
  "key44": "3xF1v5aztJahcesL2AT2usbNdopg6Q4e74wnmzLfwAoNfw2DEU7aANVv8g8CgJzNKNXzCHJehKdrPpeVZFbvxZJK",
  "key45": "4rXqBFowdKWtqyarxjjTkUP5VQPe7gDZP5fiwuarFf7GNuUCJsAF662oG3koLU4eNKaXPYT9AovhedbXkbMKVNCG",
  "key46": "2mjvRA926NsCkZ9Q17EjR1M6mAVy8tTBamd6Utm7FjpGoaSDtLsAYG1LnvVtUXc9EjUNVLy8pdtsyi3GpdVEVeyY",
  "key47": "67d7EQFzReth3wfDXvdde38ZpMDSBAX8QFSygDUrp9CRpL3DVuew7y5LTipb3uS3zMjetjEgC3M8QvoDzaHwsCpw",
  "key48": "XE7jNW9KwzXRDG3BGQ7EeKo3Z4e8eETiNHuGQebaeKgkS56PfDijnJ1uZ41WQ3YPEPPg7soAk2ZTkjyYGLvyLNg",
  "key49": "2EnMK9fEaV8dPmq65X7ck7SEawa8JmWcvuPtYULg9vAappRSEYEjbUB5bfE1u9hJfxC4j5oLGK8Y7T5rEAXkHca9"
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
