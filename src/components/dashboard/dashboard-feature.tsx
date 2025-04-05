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
    "2kMLu72R9SydPSTCYm6xhuWudyajozVB9VkgAgi26w5kyYsvBa2A7q6eYjYPfLkCAW7Db77uiMiHCcLo8B3DeQkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HYqUhDmbBppJ1ZeTRrFJckh9tahrYNadpTdQ7NxDx7URxpRUoimuwcpmYGSiNgnHdk1jfXzXq5EmwZnf4QKxbTe",
  "key1": "3f5HTsdqz7VWXWAfwynoLntvTKoAn1gtCv1pFRtHUFgYVauDz2fWuzNUd8wekzaMLnhzce9WsKk3oVFWbw963T38",
  "key2": "5tRUoxpPVTLesSMXdBupYMUjkipCvkhCzYq7HnpHEp9FyPf7nVHqt3s25B5Sts4QgEe1wyHoqJoYZrtHfX2surxV",
  "key3": "48zatEd41ryJWyvqmDVkogg2eAeAuEgRp8jBQUsBJj5nfbqmrzgyYsghVpyA6iSD1DNMY6vjiurkojmYTNZzkz1Y",
  "key4": "33LRB3Lj1ncWgzFUi81yLiyhataJe95MAThjWF8MSNnhwe8U5fQofpJbFdJJhntm2o87YK3trFWzMuGtVGiWtyw6",
  "key5": "2y3hTz2U6yPqXHDyGavfHNuQoK5fueftP7dAjoXFMaZomq8n15e5LddCGEefmyuH3xT1UgFuQ621n2sgBvjHiCjF",
  "key6": "59EnvggRy6kSuJ2vUWNFFJy4PUSvuYGave6aoL5Ht5PjQm7oXnGiDaaxjNme9CE74YxUarMJLaiiCGzATzb8eMKW",
  "key7": "yWnCF4D7popyoigDHQZ1Xe7afZTtiZ3E8T1uUyMHcDB4v71FxZ4oonSJYPJRNNdbEoFT7coGhKaMhDyyoL5Rav8",
  "key8": "2UMYw5AkzMnbNnHcphvSkP4k9gCVPRbeaHqDztjw662e6D9U8uW1ComfHvHF4qHL21mZs9xDevZBQCpcHBesfbrW",
  "key9": "3AmU5ATudvvo58Zhy2CDf6BBFXkvgz9e5MJRXVkWa7gDAsEH1TE24gmCvNNTALmi3qVTeEHSC2UiVrUNBeYGpgCk",
  "key10": "2Q2um7hrxJ8DyNJTGpVoKPPZTF97c1cRAJSF6JpZ1nHHNFEbd5wJaPQoAkVEgAnVbB1gPkp32WHV4wU6tVYjPhuZ",
  "key11": "C8C6q6adfEpscGnY5mEPpGCW1Zj6fxcR7NnNqGte5vTvbbdEFFAfpLLXQSz79Ry7WyENYAzTFyvAoJj6a5811zG",
  "key12": "2iL6tqeRpJszZAgBLMW6Gpch55vBsXPD2mdsVzj45EvzAbQHyHXAmsoYkxcVHELH4T7RV1mU5unDnqqXit8XvpbH",
  "key13": "2K5oKBY2cDXeZwACWcw1HHB9Ws8wXDhgPefFgYYSdJ2UZuV8H6dx1WZhbKRw89PcuCUTQgsZmtWqL81H5nVa2k7k",
  "key14": "hPJAHgNT3XKY4kpfixWLJnqr9oBvB43CqvGj4ukNCVq9MiqHKpeGAL8qhZhJ87UHRmjeueQZ8N5fyg1BzSWjxsN",
  "key15": "H3sFYTJGSePGMjKvDk5HEoabktJJoVWLboPTAZQ8PQbTZgJmo88yiDN3RMELy6pz39FxttPimKJCkBFUsYdSn5q",
  "key16": "2pYD6EYPWnRLLtkKwgqH5fnLrtrGK3RvcPAPZnL18ncMsgpaVRzZxJz4LMkvf7teug6AtMNq8xKqCcJnJeraGtxt",
  "key17": "4PW5frBADpXNcP6BRSxSKEzdi1WFwC4HnLqYwWupjaRmpkkEYnwGwvoVzBqjcJdTCTYfypa8RcgQthi1i2G2jyG9",
  "key18": "2n6RNhTqK8vZuehqnf6KUvhE6GcfQn5PvwgMA9CWFtm8WhrLRJr3uiFVme31xf4qgKqh26rgzZtY77doRH5x1ues",
  "key19": "4bkkWZbrnBAPFF7a4WCPSmqcTGZjX1jNVVDySikogTMULeccL3NzgptPgfrit5uRBRrLewiN4x4UBm39jtPya5zp",
  "key20": "58SwX3gwiGyqwRRpKaQ8oE2GzXwNVYyUVK5gicZ2Kto16TGvTJKE2SCtkGGERsCxUw7tfca73c8GqyC2D9vxKFXX",
  "key21": "3X9VpvijeiAFLd69dPxMjae9HXzMDXUKLh7sQzXQSqxDKXGyVrBk5KTSLVXq5WvDPXzU44SkXZ28oFG176Gs7HZe",
  "key22": "2ch3n3tRtwyf31hEoJdmsV7QwvFz9gKStVfUxytNWn3JMhhX2HkhzF1zx5o6g5EUcHBy3ueedWmsXw7VNiAfSNjS",
  "key23": "5Zhm1XFCK1abdbhsu2AWmRcDwhtjJW2gH5sK2eW4R4f15T2CjRkXhYfMihFjiFe1FRhU6ux5YNSAtguEG4DDgFpQ",
  "key24": "6goJ3HMAg4YKamRebyN4QMwfpTthSPLTAGPbWP94UFgkswF8zCKsJNxXmw31WUQuHX69SiQN37BjcPsL98dQjzf",
  "key25": "3sdXVuaYy72H7uAknXXYgXMndnyE8TwszPV3Tg522gf1AiY6V16oU2zKDYJbrZj94JqXWDMtMihbpRMDka14ssUg",
  "key26": "38GMqWW9vkXBMoCotEvk5uLFCZfHxymCJdnqZHnYLchbN3KQAvZqYcGHSRoMJdVa9y3wNRqJCZ2Zvrtg5GGT6qav",
  "key27": "5utoMZm4KtXczVfpmvk37SWowZ35bgx1PgpszucbJ1HMPju5d52DefzN8HBSLb6ehqRcdmEXBtzsEu12c6oMH1RD",
  "key28": "2KdwgWnRJPhAHB7fkDTX7dQeV5kMiYzhY2wdenv5LVeUUAz6nhcfs4DZ7J8V37xuqB6pSWBzEuvXFo6awkKAsrR",
  "key29": "5wMP6RssJniPQvu6Br7a3iJraDdh23wd4rZXuE1MJiDjcDowM2PXsZqdiTKH1AfVrnvSHvatCRtBe3nM1HdKwxtC",
  "key30": "3pzLTcCUwqY1t7HL6g1VYDrMgcNnLg1f1Dtgb9ejcpfYTY3PyhNfZUM5VWy66JmUHub6Z1vpnKFirpncEU3f4yrT",
  "key31": "SB35CUqjKZCwBph76aWdWEdQsNfrbgCQVpTHWKL3MFpgXLF65g6r5wpCBX8BbARE11ABWrMbAzncjrYYyUo1SjU",
  "key32": "3AJc8BZ373FK36xvNpW2JsSwCJ8WcWJj4mFCKiuAngg1LP8T2MTqnRGwnYxVbLvk1V6tNCZmcn3FZxJ2tYpktNvM"
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
