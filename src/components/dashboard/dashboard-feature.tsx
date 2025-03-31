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
    "oWDG3ar4AUKjfLvDmvfwwm83cAVYNzSkLAHsfZ1nF5LeKxnQvwe5EWce8d1j8gSg6ZnuPJPDyLknxkZkY8Yrg2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PprnAjU62tXf4ddEU85KwrNCDYTE7PSdpgU6pzURT2BVccrw3hg7Y4u4UC8Jd9zzoquTRceW2A7memEcLnE7DRk",
  "key1": "hU6cbKU2io7b8HLqKGxpGQ3WuqaZFwQJotjwoMJikFgrLpusPfgcufmUi3SYfk9oscuggo7wgYcczZy4VdhGyAc",
  "key2": "Z1YvcaQ7Bgvpdu2QdywZ6pKNQmbUujSShdZtfoPY9acE33PtpVx8qk14LjWTviEfmKGvRhrBc7w9bvbYENfUEPv",
  "key3": "66t2recLBXvsqxWk9z6uyWXrusrJuoGaWLRXZ7dqHkv5RM8w4VRvXAgi1MSaMhe22KeHMvtf9m3bACjBYJsJ4suR",
  "key4": "2gUJve6sg2xi3MFJSV3nkJ8qXGyA9QW6ELH4bTMnsFu9DFh2UVKrFRuh9sJ2jJTLDS6vXUMGMUAV7Uc7ZJc3t9fY",
  "key5": "2nGc94WskAyr6VV2svFdh1C6yKNUJHxQL1vXpjh1GpTHtF2mtkCKEsMpVR6kpwGL6XHYeDd8C7kkM5QnfPCQxXDy",
  "key6": "49XFJdkbdcbWTujBuQXoMn8e6pJ5vvgLNX951m3He3T6X8nJ8yJVyVSSpLnpbQgcW7Yc6LViSe3PE8NqXBjGxRYp",
  "key7": "3GaMnV7FeGQufZeow5iGg9GhpAGsnRP5puN4T3ThhgAL7C2FosQkiPjXUarRWoBLRTSjKztssn6G11gm2KefPvBr",
  "key8": "62uwZd7DVzjsWBUSR582FyPqkogZJEsT4wNHEnNkeFcRVXKjwSSqPfDyYepPPX8zqXPJotwiTxYZbJpNGSRn7kVS",
  "key9": "L5uaxtbtyB4NpSqao6ein73e7whmHre8evLVa6oYPxh199GpfFEYVSDmE8ecxhn2xcuCnfYbhaPL3K7T9X2jk4e",
  "key10": "34mesmTEHEwUisL2JqQJ7xxPkCJ1xDLTv93SuVAiFSDxo2ABRn9qYM1WEyqvAfN9VVY9WpAhuyo6UjiT7SWnmHKD",
  "key11": "d517SsMQXYmBcsoguQQhSMRyiGDfSPa5AtXwEDeJcrkT5gNF8GYztGpDVVV4fa9UPP6gQCiNMMJHLg2rZ3s7MEj",
  "key12": "63F2PREkMNspHkaQNA4RSkefpaPXuGwYhWL1sa7mccYkfgThJRJoKUExcrAxfPhfRVfh9WcPjRKU7L37M1RXJiVM",
  "key13": "3moiCVCR22Sf2F9fyWoR8y6TnAYGvG8CzsLM4tYDbGzuik2GGmH16P2zw8Kg1JmaY5k5WEAQ4AwuEZSF49xhVYFH",
  "key14": "5LKKjsiZquckN1Puqmdvc81E45UxAxQMYAYhjMqToDEWKkWbJoryZivvWcb2KyAQuCE4H45XAXJy49UjVcP16uHF",
  "key15": "5UJqRUdRpcwJTs1spWTX2S7s8NcgYkEgT4yj6EcFkLmi7e916wB5p9F1mnLjHJHAmUQeA8Mvwmc7MnvdnFmpTsAR",
  "key16": "3uuQZHPXuKXmqjCFfhXMqEnkb2cYe2oQBug5gNHTuganfZodvYuvN7kjnJ2JCWKxJ3A5tVKHdrDj1Ej2vhpfBGkK",
  "key17": "5bjbmtdJa6jx4b2fEHyaaWAvyUbBt5THV4WRwWJQE8R3ZhbVxxbVnFs8y3RU77iG4XUgGePShSj6U8D4hbbgfBVJ",
  "key18": "2gmHwRmzi1rTe8giwtC6PSDBMYwsMrWwrQSpkA4kxdVoJfsDdRy9ps7tH1WyECDSV89v4D2rApm7Ezzv225fvhwe",
  "key19": "4ZdThocvm21QStfp1iAQLEso3eocJi5HASvFjGaYH5eKgSjZAjmpD9jAYp6RwadvktVgrBQZMtaT6msQnjjsTB7R",
  "key20": "4FTYxxcZdMjAZcd7Nu5Esirk6NrUyqVBwvKCKFs2McLmErsN4YiP817fT1T2nXP5UeGqtrgX42EkCjzVACPavGJS",
  "key21": "4QgEtumb38Y1YnPNoRXxBJ8RebE2fju94Ld2ZFzzcUkriEK5ArJZ8gw7pA4cQor11LC5BGMoR8ZQTRZ4wCGMonKQ",
  "key22": "3ztL7jSChRsVXzkTn4DKJHDQN65gJFv4cwBpdVVo6gV7swdvUuBirTSb6b5TSYFuSJQiWbJYfy1wP2ouquCka5Ee",
  "key23": "5F3wunrqvEp2bpmsEUA5CFTfqvCZQnfQXBXEe8R9BCCKSAwUSbUST3nCNh9YJodaTD942qwF9GyEQnWpnqgMx9bz",
  "key24": "4vYksCaknF2mAj17t6vYjgB4pHESaJQZHKqTvLUrdNctHo43tACCLz3boU7jDX3YiQrvhVu8gsXyUxRpuXSHfvow",
  "key25": "4yNHMuXo5vLQEtFejngCPcyP2ky8wkFgX6SLRMyuVBuEZAGoAugXVGZsSi4VcHUoGSip1yAYZjAGmvRJYns9CD7w",
  "key26": "CnbLK7WRARQDG8DCUajVdxjfu4rYQKp3KzTpGHPYmXocAW31wihoatCrh4M1pFa92iybgeFUFNDZASbLtdGyv8B",
  "key27": "4mKM4F9W8xNiqmLYY35RFecdm2BAsvGAaGmm6UvhWdp5pxEBh3T4DfUHBzMz1MjboafGUDWZGUwP7ru4KaHEfG6J",
  "key28": "4rCZ7fkEa9ZCw155sJ38EF484W5ZekcZ28pibj6mbEPBN8tKedHmLFPgM9Fj8FJ9GmcmbrD4hxtcoTE9ECFpFBFW",
  "key29": "579BFjTQDmH3sMaHcAgtmjwpTxBNsdkniPdf9x1jzKfyVs3PpXjZfmdK8jJBFKXfAT7unsfpn1eVwM1Gi3wSuXDk",
  "key30": "2WkQN79hg65bTca6KXfUJRbtKq9DcpcAFbdvJrs7Asec6gYfVr2JpWBAmYtFskWYURwox7jbAAk4kYrEfgKdJjQg",
  "key31": "63qgVScfczkuPig1PspBu7N9uikQEUW4q6RkLxHkfShB3mZBGxc7wboLai8jzetZvFXy3ByLKRvLEj4QRa2NArHP",
  "key32": "57kMxG6PZZbGbyGmXmrxZEM56YbjmHTA84CSeNGbV3sPgSAs4G8X3bq2D3nsEPE1XTdSff9LVhpswLjEqWAKc3yj",
  "key33": "gxRwHf691CmBNo6RLRJizgmiL5mNQpnXkJNhp8yqtvhJtWGaLxpPBWrNqDBA7fuNuJQmE18SyfvpTzoTrtRdQ6v",
  "key34": "5dnX95Yob3cCzhY55rSAuV3eghzds23LpbXQ5VJDhEFwXnGumwoPw2KGgv3j9KnVg11Yd3xG3qmVaob6H8ysdDyw",
  "key35": "39qRboDJHjLkUquSwkWgGWgRLt7kTdH8So3K5N7dyokW385XkGv7hS1NX7yVyZ6nK1f1XJ1DES3CW1aQAVXgPGU"
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
