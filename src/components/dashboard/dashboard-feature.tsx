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
    "51qadwDtiyLg3sFHSNwACgwjBdWacvbmvkAbKhHDjzHaw5Z7zEXjwJ7goTLiRdYaZcK8CUNDQ6Fhj5DhZ91fKyU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JSUmmXTeVdgeifCwvqWFcTKTFhhF8t7GTp2ehQvzoweyb1Lymhr2c1cXRPfeJ6BbNFPPqpAy2oZ3V2YgSRusrC",
  "key1": "nA2jKQ5GutHHawvyjh62DdeXUh5a9Mmc2bNiYC1uurdEgtdmuBiLRiSRyzJgzTZHUjNncpuWwQNzJR6YSidJxcm",
  "key2": "5N6zVP2dfWdzxkyzZy4fWa5wgfcrCZvkc2YAxFT7zBDBYXk6GjvE54AWg7SWSRJRq3XVkj7KTG8z1vsv3NewwASU",
  "key3": "5Bseuo9CQ38rS23CTEscLigJ4enRaveGNbgxo8kpBXopc4T6sbEuysV6hD5XdLF9EUJkuPRANrMZW6RxdDPdjsrY",
  "key4": "448LHC2SZuysA64eHQpTXBCM5droP8ymXsMnNqS44Q3MoKbbN3TXMf5vpm474Mqu26Dezj5d3fAVaRuPSKfE57zd",
  "key5": "46Qg2UksMBjnUA9pCREEvoVvU7QyV1GYNfrg1PQBetfUcK8Bz4bUYErhM8K3GBSZJpsh8s3A9bnbPh6DUX5YbKBE",
  "key6": "2mTuB5sVGUDGsoZJLATSVjQp8rjXrzCZJygE789J2ejzW7fuUA2MzEBzEqjQbT317UeLgegQiX5AWX6CuLVRQjcF",
  "key7": "5WGfaczhEKHsE7xy8GjRVKvE1CVv1Ax9DqBoJwzscSc22GahUwHpmLs4oAuWzNffn2P2Az7tB2FLW5Ba7RF3U2zX",
  "key8": "soWdgXk89pVhu6MXB5SgnmH4QaQgY1xGL6AMaJ4nniSFiLWHkzU79aq6QS98GDHYCvCFkVVPQBfXNF9ciYSECN4",
  "key9": "3fjwFLiHPioXCjXViPRNMugG926rw9xXDv8cU4qQXTmQqmcMpAU1jQqSdppzDvyLediYYnsHY2PypdkD7LxTh2xz",
  "key10": "Nr7nVMrG3o2ZEaY4uFAMbTuZEWAfy19ifCKovjAFbUBirVV1piy3yty9dwGP7FpLw76yxmjJczLPUSkmES6RsVF",
  "key11": "EMV4oFztzqyxNTjur8wk5zVVFqwFbpWgJEuzFvrXmBkHZRQ5QFEWoewtDarrYFdDu4eeVvmt7TgCZ7mY5azPaux",
  "key12": "5zRM1B6y6a5HoABw2GTrAGGy81r4qyyqEmC9zpVKL1Ab2F5RskWrhtB3TwvTc9u7VfsZM3UPDyDkqp3bE5NXuNJ",
  "key13": "5wg9a64wv4G22L1veY7wSMUsSayouu1n8EXQ9WS2jKPrP34y2W2vEV79duxbCi2BPFHTk8yqYAEoADbU9sEemXHR",
  "key14": "59wFR3vxpPVr6JfiwCQXKZG6antdoraxtx6DS8xhQvzsDGcontgY4jbPBB9pj5mSWGHSqmiGDi1Y3cyuZzPQj5Mg",
  "key15": "2q9NAiGGKNk8ewpj1MR7YdKfSQH2zzwe9KHTvqcPAooa6h2A2mHboESUFUtMx9Rn9RnjFZTZhVaVibvqUi1Lc5sj",
  "key16": "WvJJgRrEsWxv4CVeowTQpWYniK3NvTvqEnoeaMD2iHzBs841ipgT32hX982BDQyHVtgbDGriKM9y4iru9DaBKb1",
  "key17": "2YhDF44WzRQrzaPTcFhFWvAzuzLuAstAYdmsG9XrAoVVJn17oGdbKCRHcB3EgL3BY84ZFWeQ9oe6wTa6cERTT38j",
  "key18": "5CmvqQPnFridDgfr86boEx3gXND7DnzuwhBSRJsVM1XXZARFCQGDycfuL3hr1g36nqEG64PfCsTLof2sQ5GQAW2A",
  "key19": "ofosovGJdF25SB9cdTL8S26sMW9CzeUjaaHnqXRsAEKuqj26iAL1F5Q5WLvQZE1hViutcFguHdL85KzSWVyprB1",
  "key20": "5qjzmUFkheq748pwfqTRsPvpQsBzWiPbo4iLVXppvUr72keF7h2eutqnTTC8tiMYyhvULAbzG8zVBgSoJvVigNxm",
  "key21": "3dtwxqycJd2CUj4EnPGHJVrBkKGKSEJMruNhq2RRE2pMp7hdr392QLtY4VR5ihWgLFAQUwGDxBu6MkTQMJuSNhhp",
  "key22": "2cGp1n76tUEQPo4Dmfz3aaHGpgi7xGhK2Kx5uCFF8MawMdndpzm18oPwDCfHDMm9dqWZ22mpL2Vox6Q24GUxEFpU",
  "key23": "5vooNWDGPvpcGkED64AadYWS4e17sj65xnWfkVvJ5x4Kc39YcmmWuW3tseTwJ8PNVVXGxcfVq1MCK9rTtp4dnVh5",
  "key24": "3v1aGgAmcDZo7Pmw5gYp94DNiViyFn9kvqU2m4iZm48m5UqZWv9LrmGLT1BffAMyQQAfnthrJk78ZcjFfocS3LUm",
  "key25": "2J55CtMk3WosrwvuCaLpfHbbyr36bLmTx2JaE3iuR7ckHERFyqCVSiu7NuzJroKxWCYbSQAeWCmvwPGAaiXXDUhC",
  "key26": "5mmU1RpRYuuevTeF4XpjXkmm6UABNcgfdx2r7u4Ct8sfQAGwqdxGL2kGo1WmCQV75jkE8sCkqcHazzga1yKbt4AM",
  "key27": "o1MefgoDmwLQ1ppeJnaVCbq6TFqYGvCFabChBW5BhhJ7PFm8k9FNKu5k7kP22s26LVZzipar8YdiisDkVMT5QL7",
  "key28": "4dKXDLDNbZK11Q8fuULV4EEXBbuvL3S5gtDRwGPvye97WgKA5gCpPraYttC1189SG9nyQFQrV11C57U4jea1nfZF"
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
