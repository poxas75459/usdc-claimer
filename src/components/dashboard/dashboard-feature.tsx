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
    "5pNLXfJfeADDkkcfJRRNDA8VWsXEkKpoe7A3egh5LoGgSSnJobCoYDQSJiw9DnQm2ykffWewm5bGCFdUuHF9ip6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634vkFJKSPAXvyGyS7Qu6qbfFNTcFSWzRNMv1a5Fov2YR51N1sxZpzKFsZm3BnYPtFzAdixpdYcSNR6TXcURqWBD",
  "key1": "2LarNyaEdu8Pwprtu7yNpaSHW2jpT5gQRnHxzH88LrvXWZxEcrQLtJf4A99bLpL6dggqbb29g1YCbVsdjHWFceyo",
  "key2": "jvczW3X8PeX5ivFfzgxycMkS5ARJAqJY14C83QqQb7VuUahdpVNhibzWxLtfyTuuyN5TEpQG7fLcVXK3e1Ugfw2",
  "key3": "J6nhGiNR31n4BJZoZk5gQfdtnVfcuAGRGVi1azH4YzwmsM67egQgVQuWibK4P4ygvBRqNMcQ6CQeEQ2We7kVQss",
  "key4": "5FpuFYbzza21Ts8F6BEoFXWdDgTJbq767WWj8BkocdGGvZpqjwwcq6mvTSh8By7Q1NztESBRbv27Crg1zxnfSHXV",
  "key5": "2kVPHFWPstZEvmKswgaTf6TxmZyBB7aPRQhwZiFFKFNZJ5p3jcvmNPaqUJdWjj5PwhycrU4bktC4Zumwd8cewFuV",
  "key6": "562mW3M5Czr8DXT1ipnwZXu4apWAUyLSx7CLvHMCg3VqDLo9ZryoTc9Lhhogs6rEhLf7XWJP1VHBw7sPNZyDepcU",
  "key7": "4r44ocqpAR7tXoX7pjfdzBt9jLyDnt2F4XrcmdG2fa68WNBtLkcHsxxv1aqMD9iaYcFokAtyAERW2K1FC1nYs5DP",
  "key8": "5j2bUxH4GogPbDM8Nnd98bNwCprbgHAC6jtpqV6sdXZUSPDkmtUGenG1jV6rhDHSeMizQTyr9Utb1GjYU2UKhxDb",
  "key9": "5ffpd7qnBBEEnmHmXoWqd1AGxANgGzPXakcvJhVPmqhFJfjD5ZvwN12URKTZRT94tvYoSFygz745S7up4zg4RjYa",
  "key10": "318mch8NmLMoaBYT3q2rqEk3w79m4fx8y64drd5QQYXmePQAwWziPouBZhm4w8Vq3wvTzBkvLqRUxd9mErXp3LPS",
  "key11": "2P49yth3Go27Q8QuhVFLWLVEWeVD3x6oS9FR3WsqrbymWe1Fd6nvZ2VpaLyjvsppN4GYKNH15nEdeyd1VP24wvT3",
  "key12": "4bbPmocW2YDDjCqg3CEDxyviagPMw4UrLZ9poTTvpRTCVNfGN9fLgQFm39GWKU3HcSTHiLtmeSgh2gX2xeTVDADE",
  "key13": "335S3K2U8a19VN7sHJ8xJU6Jy5aEuS4zb1dhxbXGa44pwxH6DvZD4WZrBJaho6ALociL8aNWocm7w1qhZqSHfsVL",
  "key14": "aSX2C5Qav6qWtBJ5iNCLUBPokzwZvUm9UPTXw3bxnGxidTTrmZZhUtndf8SQypRtDCoLhrAjvhQz8CpenPLc3TS",
  "key15": "xySonxp6bakxuR9iEPwLUwboiUXRLaJTA9tsSHa7dYvBJE7pZ1Ur7kXcxxyur7ppHRXEXYp96saL1JmWBpgwtDz",
  "key16": "g2SUMYYinYzMKUPm71JRptN88KB5vpPNCwJUk9rFASHeMN7xazECEpkkPLxcNHqA4vsAtafbPUACgws7AqGsj7e",
  "key17": "2UwHoe17Mx1bk4YGQNvtbHcyrgEg5vW4YzZLrJKAiANSGN5HiTwsVmU37R8Qd1BPGbnZdzdjJnmCC4E5Y8N6hvut",
  "key18": "5qDhYs2fEpdaLuLqk6fUHWAtv7n3AmQ4purwzrd2t5njZ2N68pBAaMZcR4QFz498J4jwSZE2adQ1BTopY9pfZXBV",
  "key19": "2Aqh2FpyzNkATBSekVukJ5c7p7KkFcNWgWBVBaNRRiwVRN6bPN2X41CeUB9mSwUmXx4Potf5b776DCDLn6USnda9",
  "key20": "VaejivBfUBsP2iZwWjJpY4PVpqgUDo7zJHZy3NnZcM7htsyRXpLK7PCFoAiEffokCrjQR5nqmtRdfdFcXqmxb4J",
  "key21": "258B3mXB5oGm7kvNCrmc6n8cgqvxRWV7VHjmKmct2P7Xut35bPDP1Cz3jUhXaxXRyjRwLdVgFTheR4eUf9aBRavs",
  "key22": "2Yz4RkzDxbihAX7UJE75t3hV9cWXq1cUC9AE3hDYYbFxZfrW2LBpKBeSroCa2bZ8ZsVadaYr35EmC9MFzqFRxQeF",
  "key23": "26xJupZq2kP66qhd4u6g393UvMpdCQD5vySPetLB8DLnqzgii6Qg2Pvw9MwmW2SMA25Ubh3YdjkgVN8cmoC7TVi7",
  "key24": "2gveQiKPhPdtXNuFL9LJkADmfy9j3k2PKpgpbmjMGGTgLACEStEixsRzRfBtXBC2rkKbUxbxb3nS9Jnk3STMGaCy",
  "key25": "2sBUTRFVajqjUPg5uLsTgiccaN8wC25vdhG73wMKEahbT8kSQ74gzWDV9BjZr6CXxEyrf8X3L4bBXutWPCPpATop",
  "key26": "3kqnfhueSawpi3oTaMXpRtFVcA7C66yQCiqxiECP6LTL6bmkAk6UbyV8tDR6Ew6u9Z7sWC7PdYg1zdfQLWfRAZb6",
  "key27": "3tLg863TrCgetNY88WoGcA9gZ97zWnrSyrRLxyUKeCZ5Z7DZjCYaptkgUWegD6AMTUs87fA6MikEx1q65dFRkU6J",
  "key28": "sSRDRc7Lvg9kkh79pf1WjoPxkLMN7VpYwWHkTWjF1uC2DbYRXrbHAwZRRoqgAtvSYPP56RKXzpGinbLnK8JGKMz",
  "key29": "4kkqyJ8Qh2qzMSVSguJg46ZJA3gFJhpexGM4FV6htxeCbDqdMaDpJdQ33RHa1mebdpPqzZRmF4pu4Ynh3GnKRFsZ",
  "key30": "5idxxkB5jjygZxuech2285ZWYGy8kFMRj3ijUTFTfbGtStz4CisxwboCvxYPEdAyUcRqec8o1wjg8aAuWFiV7KTS",
  "key31": "4mvNFHEk2RgePB8rb6sv4DQosKdb1PFnEscQPEhVt8jJHBEgGG1LUqQ9npThQeLiipKdPNUVmAVnCyL9YeFt5dR5",
  "key32": "3mdfp8a3j5WmqGXm8Bd5HP9RuAEzYBNGh7zsRcy6gej8jhuyZB5ukvQE4HU4ZwN62XmogAKqDNSU9Qs8sLgzGrgM"
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
