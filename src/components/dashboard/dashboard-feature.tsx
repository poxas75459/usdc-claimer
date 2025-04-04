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
    "3PeRfPh1yRwKpuZxNYF2X8TsVcE5onJMRFP64ohzq63F6QGigHm4kxSfd2wTVQXeDRmabDvee16Y1v2nvigNDMxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBpWznB2DDH91mEHP8ZGVe1uHJUR3rE4WA42kg7ejRYGEiudFepTyvH7jFoSaRLD4xd5CeLbfi2Aqc1A241stkL",
  "key1": "4WbejfNbTff9s3XEyoj6Jgx9pFADcCW6HuFUakjrx5Vrva3hwEBVb4n2xCTKYQWguTxXGGTaGMgsitbjsPPUbRZ1",
  "key2": "4CsrATrWC4RLyV831Ve6WAwXyJWhGoxxbV9We8vUP92FHX5tP4cVmD2rpSoTxxM61u7HdjE7RSGvg44GMJoCgZaA",
  "key3": "3PN8MLqYJmnNBiY9KJgAkXUfsfcLAu6Ppe6cjJQoe2cHM9bxmwRrwTMGS6RjhXe57a9zN1TC3Cg5pDeTm4AB8tB9",
  "key4": "2tFprWZN215Q4WFC9G1ctG39181z976j1Q93NEXXTNmK2MyYYeyDmHaYAY4VZVCtaDH9jtvVkSXeG7RfZ6sbgQd2",
  "key5": "5zskhaaeJgS8AGxmpxHnXUpLvUdeE4Vqzr7su877fo2pn8u2rHBAxWx6d2TQT3is3LmbnPBq4YVPZqSk9ifZ6uiw",
  "key6": "2wxw7VU9D8beanWHEAVymbxWLCGGaEou9tzTKHqLHqE71sG7vjMrSW3rUp7q4cHBVe6PWfggtZLM7mFAZZxoiKoo",
  "key7": "4ZAKdrAb3ZGa5zAjUrp74qTLeQfrH7jCM5Ucv823AwbfZX4Pm5JZ2v4motRg6Mwv9CpgSqiEeBvDzZZZL9szowLC",
  "key8": "4GX6ocjLeuEmaREbhNbypE828oPMtjWrz25oWKMkarw4qwG1b599e6t9v3ZyaujMsB5ZwWZBRKQZafimVa9KmV3P",
  "key9": "5E4i4Ax2wL7rAKRri2eoX26Q7PWRQuMfGXHpvWNwZEW5wCAFfFWMjAfT27KipKoGRw1VThQThZ1pV4xn8PoeNKcr",
  "key10": "4MqS7AURyAoaK2hgQP9yQdeeNVjqLhN9ALLaQAxezKMnS8CHLgSu58enyphb5XHYckkWBq4F92ESFVeGGopQgtYB",
  "key11": "4xCTYxC7hFrVrEkayzC6PvgEYPbsfJmQ9vmerJELahjueM2wpvNYrSS5j4XkbXT2KcKCcaY99b1oETWvPbZvXPik",
  "key12": "3bNFBMzpgFyM8PPP59Anoig2ndQtSvnQ3Nsz6FxmmPXfAuVKXP1KmhfWbxfhSYi6PfXCxGyk3H5rTxV937qABEJ7",
  "key13": "5yGFnLyS16QLQJ4HiJAHwiSeBB1w17amJJcMqMbsAGshnhUSGCihKnfRWdmidiDnqwqm9nPqUFBUgpVTwDwM4jws",
  "key14": "3MMRMVdwoZsuLYx3dceU2rnHJgEp6TtxGcRjzGb2ECaBamabyRw1x6DbmhthT24iyCDht79XKCNH2vHjCQrHVSBY",
  "key15": "q2rnj7cSyZXp277odoWNM3AVBzKJazjAwFrngg4drLdQRGRXskX5gHGhu9bMgkGMP9Sfp73ZXhyqFpbfkXvXthB",
  "key16": "1eNEEQjgvzdmG6riP1qYz8h1GHMTebC4epccTk7LE63KcT7QnkS9TGiJDTyqDf3NrsMu6AUZRqdcEHRnTaqbSwJ",
  "key17": "4D6D5sxaMnRFFKWEnFE9B7LdnrZfiCds3XCzEtFDJD4hoGnr8fcHV67hs4ToweHnzNGk8UU88YvbGvBTjEw6phRt",
  "key18": "emtPzEBpiyqmrKjeWkF9nZyp17BY5fggSsmfhdf7oVqtzWroBn4C6t1tdmNpAzRsX5gWrYJZ1kZAooYpQD24xLw",
  "key19": "2oRG8fsct7BNmicY82UwGkYqxqg3aFoGfHJZFXehBFX7JTfaGZ7JEKB28vdVg53tUEiiXz9ud1Wq76xYQp8AU7fX",
  "key20": "FYwrm9CgxH9BriJ1XYZAX2rkHcSD6ou1wiuwKVRymH16bpHBs82ke8z8ZkFG32Bvf5Xf4TyiHpDsjBppDKccacL",
  "key21": "5AZoyPgyHL4CbXuC5PiadwVG5kUzwfjcqbHUedhMTN5ZuoXURySfKjZS8WDjBpnbPNGg2ciny3Gm2xTkJrt2cikw",
  "key22": "3JEx6AWey9vnzRFra9uKyAkkMFsBE5T835LB16QLsrNEBZcQ1TKYHkQ9RdTB68LCPyzb5sTC3bQHme9BxEupFwjC",
  "key23": "e3gakLkt1uBdr4c8qG1WTtVBemBRcavj1vQKoM7csE4wWrk4iiHaL3u7BtySV6XbvrLC5jo1F7jFR9xkG2hCLcB",
  "key24": "5toH51UsCLCERFdtTdutr4zKT5fAmZqfW8EaQANXEJdqzgujBgrXy7C2YRtz5EWsztDk2H3N8TF2PyV6iXjWXdPo",
  "key25": "2cgad49Qbm6Bwm6EjfJp4qCbGWfdqRdSb3KSo2gCw7593VrYWhm4fDB6SeyFe8s9AvsmDnai5EwFwViyn3AbbEUm",
  "key26": "5qw6d53xPcJHJ33EPdyE1wmkCPzb8NXGr2h3NwEbnumWQwJt6vsZzAADnm7siznNYue7KyVGidUv76oNSAR4euY9",
  "key27": "2AVeAUcsPfCdTgDdz1Ztt8MguhCn44f3TDACGgUb9VDyefv1d6UAxYrzMj4moZkEwHsx8G5dED4WVHMcsob4Vaie",
  "key28": "32Jisepm5KfyogjSctRMNhdpZvQYqeQyqfAvYhwz36jsRvsNJThP916LaiLYYeCYs238UGxebKYViq9gXqrHnsj",
  "key29": "3EK8ucHZTZa52yqfZtEnxF1BLmCXUw4d7NBRc5K1qJ7PfwNYCcTRSUpX8PW9VgSeWznLq3UsxrSbP6HYMNiA8giD",
  "key30": "g9z8XXmFAVrcP9XFvAF9rn3k49cmuQdBgaJmU3FpV5zkGJgRPELddrG5Gm5K3waCQAn2q1FnTYkgWQFRkXq5huG",
  "key31": "62YJsoyEVRMw1M9gfLJRvPRFoYLgwNS8CS6mSyAR9v8FFkDD1MJRyYHHxr6SUNhDnm43AhFiAJi1dcXjaA6W7JfC",
  "key32": "2SazhWmsMvk9WZ3RaqwE4DKvqyKfo9DwuFkhFJJSRdArJ8nf4sUveh8CV7XE8JdcBPkZEzS12G7vEu899qhxjYpt",
  "key33": "4prvNhzxkocAYWyPphVEQkkivXyZKEDLiiqPG3up7kLriaNGRz9gjMAhJFTkmWdTADMzRgS7f1A2rNcTLEwWSLx8",
  "key34": "DWnVVcz9n8a8qq2fkPYQomiQDxrX9656gw9sLRZYc2qcEjac1y4MWB3uKUwi1Tfd3tRvNnQ8GycvPabqz85XCGG",
  "key35": "4JuNsoph5KBmiWphZfMeZrAVzrYnD6Z4LBwk9J36wCy3o7u893VmztF38UwtRW5aXQmvCYM2Eh9FQsQ7PPPxUqEv",
  "key36": "LCg965cR8mcJL3wvWkfkYeFwAbofqXNKY7AsW9Fd1Q5gZjPKXtJLoTqwAyUGZygWFeUnr2J2ePHbpECXWWntAsz"
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
