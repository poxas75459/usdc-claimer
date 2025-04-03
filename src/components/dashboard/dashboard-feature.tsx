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
    "3yK57WnbdMDM5jmV69rALBbtL8zxumWfz1qdVqm2gQ4oJMq5sDn88naVy5KPsf4K667Fo1yobCKFMYVPdqgWmDdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6xgzst8eg9Yn33KkLDrUj1w2hVBBzLX3gjUDSD1f441cuWPnHyasAx23aWJ4Jg1F3iUxq1RWzjKYvmZDzrP4Ne",
  "key1": "2KZshv57eNkaed7CxAg6zPoCazRb4TPdmRpgoCjC11rDBfCWuqcKhyanV3yumTThTrC6FstUpNJua7raRizoxLvE",
  "key2": "J1m9Lde4xaHh18NFPTZuvBYqjVFaipaESwVkyZLHBTLPh4NJA2fYBMy78qZvyxmyAMiFeden45MVr9JKYKBM7wn",
  "key3": "2NNjJxpuJXSiwqR1yDN2Dwvi7VH7C5Hs5YynNotTawDUX2BEi72814Kw2JJf3Y9bonJJ6SxEymxF5SfTz4ivm6Y9",
  "key4": "Rto1wkYjrhot3pnVY59YxPCXWwny8hLRxqn6LMDtGVZEdMKu9JKa9Y6hU8QrXzbH4GG5AU5j9eRyNKdZ3rGff9k",
  "key5": "5XBUPUUT6s26eXiHLENBmFBQTsRjun4eZU4P4HhMDjndJ7YumgoepMzPgDzaR7miuBKusbSk6Afr9SctPk333pcg",
  "key6": "TkoocvDQfJWNu6twrsdKGgPs7bZ4W7g534avNbjhJVGT3YRkgbquVr6416faz8v7WEhiMs1o6SMRMNinfmLUijh",
  "key7": "2C9wKuy7rsDyKv4NF14h2KTfD7bsnbri8GKdXgpjW8HAzysPnVu4YwT1qcNpyam6QTP14eoYx3mMuqu1UhtDuAVv",
  "key8": "1t2VFJku9KvGNpzbDx57dpr3uJm2ygF1YooTY7nFHf2RaQvEaB3gTCkzF2mN9EAU63Po93DwRnLoeYhWutjVk91",
  "key9": "5BHoFoEG8UekYFCqqJgcmaQFbAckR6GdQFR1kXwzMgNSoDSSHRDy7ActhxXSCt9DBUkbu1LwC2k38qcGLNhcqzYV",
  "key10": "45ioCfrqXf4msn9nvsqgcoQTGZKVbF9zxy6WZPsbTznWVjV1tp33kseQqYkBcMRr5Fs1C1hjrcuY1iMujRN2KcFF",
  "key11": "4k18oBcbM92DdBsX1rvR4ubhuDe2Uha15MUky8RqMCbqnVuSyYGEUmRF6Xkmjpm8FmwjHWHzXRbVoYVK8hrit4Ni",
  "key12": "5cEecSMXHgoVJBSPKLunjc4nFiZwFKzeUoJUot54et5Mhb9jAS63BcKaksyUcgH2GmhyoCsJoDipSALNunUS6w4w",
  "key13": "xk57Tv9diyNSA3CUgVgSZQ1keBJRZARTQwTALaeAXMbaLDsBc1WGypG3bvbuMCzEo99j6Bp9KPhqMxfVRvogbAt",
  "key14": "4iTfS93zKQRsbZgUhRfqMMMoe4vJh2HLpijps1J9UsvwpgpWwCyxND5z4GVTpoYcTsJEbMec6D3j99rkAQHAYsJZ",
  "key15": "4ikJ8oaxBKn5hYUbsiXC6EtmMoBFcMKnkTTofTH5nYfep6iPBg46aFbFnpDiawQCtWUbZoLPtV7vwURMFGN1FUZg",
  "key16": "zqjjiZHjTDapicRpBRK1XBLSJGoLuMofKJnSWZzRkzJLiDrAMrm2mi1sfAqLSMv24TT7qdqY3hDiuEHnPHtJvkj",
  "key17": "2VLNYPcxKuFupENZ6UuESeeTQ5zZfCLPxRYKwVY5UTEn7WTPX9ZdMWANKCVep3aKGuNViNTmyEZdiwoV8cUrg4z5",
  "key18": "4FeE5YxDP6Nhd5ShrQhYgxVB45AjAdw8N6DzDARMhyp12L7Y1qqSz9EnLr66U7K4tgtcpPxc1oH2HwmYQ49ebDMF",
  "key19": "4GYnTCC8QWwPudftcBhNMWY2zkcqLebq7gCx56SFJHzyvjweHNiexGaTurXsgkazwjkynAaa4iASU2h8nQmCE23v",
  "key20": "5Zv8rYLhqRFGEScV4oRSSVCSmxeqdNoXAv4eF2vZnLmyHisJpfC1LaM6EaiKi1iCje3sCz3Jxkwmt9XR71vPqSw2",
  "key21": "5u2PDiWSXrR5xu8JhLyJXzpq5jK298hcE5eyy4NAzyXtoUaB1XUKmBomZsYWaGB6SS8AE8zzFrnRV1GtybZL67iA",
  "key22": "3PBG5tv4D3ZY5jwHFj2qtG7Reg7LrkSJoKfi1skGKk5XoM3jYXD2ydntTV95s6jro1bRzfbpkNyfnEysE947m5d1",
  "key23": "49c3jXzJDd4AZXV2AvWEnXWD3nnDjuL4hgt2vAD9dwRUF4MGK7okvSy5Jd3FNp5ssRmCD4xnd3FAcQgDFyheP4AD",
  "key24": "3AnwcBN2HjVPYcQ7GYmxd9ii2j6sq5Z7T9GEyaUKwPqbCXp9ggyMFNxv3vpWYSxDdxt78euLQKCXJX9EMisX6XWh",
  "key25": "5yessuEKEWdYGmWcs9HfYpDrj34jVSoAEHaHASQPdZCjKsgad1SV2obUSYox8Yqi8T9tCuqKaYMmQr7P81oTX66y",
  "key26": "3squ9aJzRw7C6QFa8jQf2Ds6ij4vYugDY968RuL5s7Hnchy9shSmJRyCSAkErTkY2BUcUZHHKRit9VHe5eKokZuW",
  "key27": "3uERWji7MtvSY1p5ojMCrs2p9yfGLK26fJ1fcqdb3cnUikKDfdGbDN2XyXUBdcTP2jxaRko7STtvsfbhgfvatJR8",
  "key28": "2m9tK1xRfxgqjTDPAoherQ1jNRTzFW6r6M6woBPv4tLMpNeH71RL9uykgQ4LW7HAWAnJK7sQaGCR3Ktk9SrKUBTb",
  "key29": "2GHmYvxSYtBKKbZ84FnbaXobeK1FgBYPsJTHNTBc4iXSQPnSAC7dtZFU5KGKTaM5dt4HWAz8bWovDyWWcg5LtTsw",
  "key30": "451Mgox3GGeWG244T6AxzDA89DeZtFstadhAbRrJKGWxgJGYMLezqUSbt68peUsnNbEgE2VXgneyafKj5qq1h5hN",
  "key31": "4pTSVdByrVVunD5mAkiTTumEshkkerHFrcQwp4q5FApbT6Y3SnvyLA4ocbtu7k4DWLvUehPZW5iYrYZT3nhPoqK5",
  "key32": "PfQKEtDHCx8orqnJLRGwtAJs6aRr5mL3Hx7qJtQcziC3De5gEafgpP2QUvPB3h24S4Fnzt1Y8W7CUiph35aSTpo",
  "key33": "2HQf1DSxnG1DWGPiBLWcP4xe1CmMGnfokmLr5WtLL8rJcz98gw8pJNGdDyf1JAfibkNCuwsPZscmqwYt2nmF2nFF",
  "key34": "2wy4HjmqmGtrjtBE3ixqQCeC9Uiwa99BUjSjmmzgWzGBPoAzurHQoDYMd8JYG56qrchGPHCiXcJb2yXH3eAZKHHT"
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
