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
    "3gM5nipgNxbkyTt7Niwu6Hb89V1cTXC2cHahFbLRqkuEVg7qKPGqDDkmu7XCrxDnZzJiKZppwPQPWVHDyPm2awwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcET6gdrcJXsZ1hF4ivrtgA5V2QngdTNuxoKQctXKATtmWUrP7xvNCPJAc6n37FMH442TmqLG1R9yJAHC5eJood",
  "key1": "FRuoxvTVDhpmPaTASYqzRQ9mX7nvg71jbVF6ertdsixzUL4BibEcyMfDjoaqGxnTjzD4SZYCVsxoCzyevKiCVnv",
  "key2": "2KWCkTvYTAMjGBJ6kJvGAF9J7tXySpdCxqRQvQXq4mUbLD7ABkuHtmgEXQ8bmX6w4KCp5dz5ATv5mWpvZrPwH8Lu",
  "key3": "38uvveXQx4fGhQJ7oWhtCFdfna5oALtbUCFTbsxrM6UjtoFDUutPCpX7YcP2rbCcYrwcjfsNNMcAmqchisTE5a7P",
  "key4": "5whjQGqRcKc6xqZN8eo9WCJcwqhUwry6kPkyybGuWpNGKjcE69QrjL9crUH8VjgoHVcdcohuJqheB92911a2AT4g",
  "key5": "2y2jm269RiuzxUBiUD8kVEBcG286KRS8BBgysRWi1S4eLcYKkvDHfZgaxCyai4k9jNgm9fuKSrjuGL7djRBsTfV1",
  "key6": "3HujZjXp6B5U8HH8h9pNFLMUpHFXB6HRMZyEQVt2ZbyPrZtLGp92uzn4C3evojxmn7aBKT394EwzbZXgM3jXGQab",
  "key7": "3c9SXxRVGCnS1K3LdLq5h2hmj2vueQxRk3R7tC2nuj4R3eDdXS5JnYrWrqf2ndtniESC5vcQxpFtAvKpfcqQinrR",
  "key8": "4UXvRFHwnMT2wGLCbtHypBJSfZBLpTxL2mxfcYFUHm2S8wi85FU2Gcn9crcbbttPTVnsDRrwT734WvqPh7sJhcqR",
  "key9": "4Ba9iDmuqGuZ3DzfmE57nbj2Yza6ttaSqpHfkNXknFyC549uVaMjqG2thXYZAHrEzYjoh8XhFjv1XSqj4HypowXt",
  "key10": "4cHzFPPF6ZyG3dxnBq7KEJ6x2ctrbE9URGDdqQBPesdWNAtq3bVvmW3kxN6NqsxUApgnV2FrcYx9V8J3jXZV5TWx",
  "key11": "5sxjTwqgarpKqv4ir6Q5PccwPe5TBmBb2PwGYoLu6naipnakNv5qe54JyWNr3TtL91TGjAD95t8wHHH17CViHAk7",
  "key12": "2iVDRWGdQMLFhLeQ9HkWSosFYLz4hk9xfwvCAo2sgDCCxKCpMVM4sXE4ByCc2ewu235TXk38KcvCu9m6jH7AeVtt",
  "key13": "23XU1PS2CcSJbmrroMo5Af12L2xJNrAFfCUYUNZDEGBQtV3nCTtFJ7TirzX6m6FytKrUV2WRfpZ4JpCmAi9kD6HQ",
  "key14": "5XP7JrC87bMRnt4RZ9DunrNcofTErmRdvekPsCZmW1ks8jsTksjFAqSE5g2MaeVLdRcTK6ESXCXCcB4wbP7Skzpw",
  "key15": "4SvxhW4T61GhUkdqW1BhoffhyAgQ6nQw5k4Rvch9yHisutzzFXW9wpd1UXC5azzDaHcFSumAFQEygsRg9baFpsJr",
  "key16": "2ugyUJtmDGNw5jmqWVff4awW8wzXs9CYvu58CfjzrymD1XVBDzGi3SM6VGS1PpgJ9e53wtYizWagNuNEV4AuttxC",
  "key17": "Wat5VQTKWeEVbuZycjLZRvzEvGT1cjqGyrPg1DR3m3XoFx6hWZ6aFh9XZUyktb8pZWXktaToeXUcu7AaXENoDMD",
  "key18": "5foQWryDhcx6QxrqCnDHuTVKEyiph9vfxwQG11zkVaXpd2dZTtgkCXQ5uGf2U1irKqBi4KRDFqpUvtDeMeNTzZgQ",
  "key19": "3x4G6wsQkzvtXquCnoXsbk8iEyveNppPR9qrTpQ7bBfLCaB3Q13DLSqopSjE2VMLGgemT3Hy2KuCFQPFtKu9u5ta",
  "key20": "2cA5rJtWXuWLcZsMmYvF2o9wvgvJL2U3hTowGtc2JYSYyC6acvNLkT8rsuBZXHB8r146qn2BCKDdZGGdmVq8KBWZ",
  "key21": "33Ht4oLCXi4DzK365amuawoHwEctDnb4SwNX7uUmavEqhqE5rpRJApgWnL9bcs1koZtaSXZ8mAzNi4Z3hbRdVKYi",
  "key22": "2tSVD6KRsKoc7yjANFPCbPBqriyUHtwShExrhweoNfJ1NaUXGknh4sLcuZVP5Q3QMt2RMY8sqWGpfVV4byFvwfzb",
  "key23": "5j8F3qQHmvXZUjikUDFDoT4oWqJVve2GbY6bTREk5HUMDroq3xSsAFMLj6p8fQaLBAj1Tp3nb4W1zBKCzsYCK3ZW",
  "key24": "BW9XMwNkpvC39vxbeB3VuaYodQBn97qMQczzFZmmqxSWyVFFupnJsbHyH3DERvQ5cvN3cUmdaD3FdSdowsSrpHv",
  "key25": "5FobDoP46cNAJuoQzKHms2S62EMkrZoKrFm8btmhnjyZRdcwef6Sx8TAb93wNpVGYEsJhq9rTh5vwgxoHjc5899E",
  "key26": "3qC2j6opscSWwrW6zyUJmeTJX943pkMpwsgtZbV2macXis1kv97Nv4WTq8FPBAmw7qxA6mZSJ8NkXkfuBnzZB1Em",
  "key27": "imh3W3m6b7njgdLWgQZW9avJ25EfiRnr1dJvFacTdXwi68x219LcoF5kyBpvtAC7F3BN7TeUqaPEgtRRbykJnsF",
  "key28": "ezbaA51fR7pMcA5UqRU52McKVk5CNovqyz4KkafXcBGy6roqffm1TJAZvWWRsn1kaMnfwTbGdkAm5qQtnAoR15w",
  "key29": "5zZaygLTDLaE3xAAsLDExJwmaRLHCtn4gtRh7CfjRoWNs58oCwfCgqVHmL5CxTJrDKAkytQPQPxe1Cn1mU5qUdbt",
  "key30": "4P4AcrRf86o8ZGEA3s1HFkCbBJbmd5onWn3qisToRE4f5Ej6PVgWXdjJHyjevomCn5k59ZNBJfw1Q1S1GEE2bxzh"
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
