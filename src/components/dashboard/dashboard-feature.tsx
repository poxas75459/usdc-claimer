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
    "2rLSbM3iu712r2KwGN8JT36EREZmXJgwfZXd5kePuJZcp1bN863E8mqb5ffEKu6k3YfSmCQHiV6E8N2yJMWhfjf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445ENnAEFrGRfoMWroRhNB15fKqZyPZjjbo9aLCj9hyUdJtHFfNGdp12FosF7Fd2ySARmsu2VDTDzmimBLuSmpio",
  "key1": "5Rp5AinLtP9JbVoPN6MxyS7LbbdynAgCHdWxZsVkNb53qis1t8jsgWR9rKPFRnL3iVPsNcaJ7jXHEeGCXfJsi5AV",
  "key2": "2R9WbeEjnTVuzpx5szTJen9zZdYg1U1d5bemhz3RDzh9ABztfgj2EmAzJVpEWfVQ26oTvNFSh24Eq3uLdr6HMhKg",
  "key3": "49mVR1cB5BVsFBAZLpNyBwtdFpgC3miwWXcymTe1KKfBHbptUeBP6DXSBZcjxUtE2Ekq6B4jLR37v73PfWZycCVQ",
  "key4": "edHRyeWnMNrcX3AdoUmxHyFCGkrMifcG3m9oFC3rHFLPn3tPAScvo9PuAxFcSqWNjUmenucnaz6LoVwvvCzmsmU",
  "key5": "4RU9JfbjNL4umu8H2hBb4XGLJSm7nQBiCkdzXaSiRdcYrnhLMN7X9TzxypoDc1hiJQPjUyVNyo7mgurugB65Zxko",
  "key6": "3Eo3kT4kEHSi7e7i2dHCNgzJRCpvyS1D5dpNd4LnsRDrpiBUD5dFi91jvCDXwafAfjaQSXW7TRqrzSbta1Z1jddg",
  "key7": "hK1KZSgJBTexmcJRx6w4axSVW8VHyB95H1CjCBJutBwHND1Kk1zP8FUGk1LZicWctUKGoCpRLyCSBNxmusJdPFR",
  "key8": "gMeYzg8BTude1qrEd22oH2ShfuRg41iWbJx3zPG3TnqFSUZiumfVmqxekfc2SFPSaysLujHWSGVkYch3ZhnyV9j",
  "key9": "56zpMdzsmcEDLoBCidmGPYpQjNX9d6SyKBmvN2shnGbpLbzQ1BU4ZJEauXVBLh2sEeptZjRxhS8NodR5vsZ9ua5h",
  "key10": "3qTaAccvMKQ1uFSzkh8QyLTpJU1urZ4cpxa6tGBcycfG7c9Es8GQPHHXMjiK39cMx7Yi334K2dr5GHDBgS9rYTnF",
  "key11": "5eAgJSgZYtWtsAuFb2TYSDABmcSUxpbEbbLwpcoRvQG7j9SYkk8ZHRun9eZ3mPbTFSmQpSoGVovEwczC16QZSud",
  "key12": "2QRa55gymXUZbiR72uXTB633AiXhzzEyBJ9XprNJ6geS9A2y3Rbf2DN44xnihPU7VTQJAAKnvMBSdTKxk37vvu4T",
  "key13": "3d5azm1U9uWdUEbF8q2Yk5j57T4kEZs917r3KCGRDRuH2bEotsDj5HfyJoz7Xvo3bxBHsupVvTuWCnfVmbAv1qz1",
  "key14": "3dDG9roXbNomtaSg3vH83t9QvNo3e5B4WnWEaTxQ7uLWhEsPaVT7wpZ6Qhsx4VViesaiUT9CpDdiJpgzgirzgUuo",
  "key15": "4VHuVv5vUKWgfB1uWx4iF8nvXvUw57kwZuPztZbNc6Mm6iGaauGNRcnFCubxBNztPzYUtwrbDG68Ezp5SRubsd8p",
  "key16": "2X5macxhSVyFveu6fWuModHoRaEEozxMEWp7vvMs712pXTzQ2kfjNw45cvzM7k6sK3Fwsx3AJsx4qfCT9vxDr5Ew",
  "key17": "4jiAdhF4F41DxUSSSGmZV4QiMRsbSYmAEA285dbFfAaf16LyWwYzVcdgPxiL5embNNUk8fngGJptmGLMV6yug722",
  "key18": "42cndyQ6CCroCTMFMC3jjuhpKqHqUfU4haH3NJVCibgcWRmKKdqdHniDw5BTKNZe4rTsx3pcGTnwmrWC7tisDeNo",
  "key19": "24PPMuazx9cTErezcKh8maa88Y26qJzUiqdBpKckDnhNm2sXurFzmezwkiAjByzAgtW3TFnaNy4MbhHdw6puN6Xp",
  "key20": "4h4Zz3GJiU6mmTiEsQsSujbV7FBHpCHtW8FB6kBd2GmWRUVjJKtPfnor5TNTVSphC6t9JtbSfwaibcLWkV1Nq8dQ",
  "key21": "396gBcWeufad6j64wTTywZtQ7P6kVT5oVAooLzTQxc1bXVwjuTvQuRXGtSo5LjEREMWeLzrec2Q6hnWwjqBNN49M",
  "key22": "5xK88uA4PAdEWmzwENJF6Ae1DgAQutrmX6gV3JkyYvBpujxxfkZXiK6mPenvPTxc3kfXjHi34CCE4Lo7GhoHfYZ4",
  "key23": "5gLmdvJAbwNmDgZEYkKKvXTGzGb5TU985s9MUmG4ertWnvFdxJAiXWBMNV3WYRMA81FYswgPTb1jiuEvUKFohi4F",
  "key24": "mMxhCMAtJW9DCp8sitVHtmv814UmQ7Ade3FZoLrTZA3zfhgzdWijUjcwXTkDUH3oSjTHaeFznYRCPwyCeVBdmMV",
  "key25": "4FTWKd8CLNYGDKTeDzUWrz6q3h7S6oiBhMeZdfUXbYgC3W7FouxXDFzaEYTEMRniJDxUogcMnXEHx9u6wMNe7vVe",
  "key26": "29P5j2sNKqMV4w2sv23en62YsPrrsxTDge7MACUrxKNnKEbuPUeYqYTxbDTYhKN9jwBRMFb2uZGZv7TtmfJmxYYF",
  "key27": "5LYcgQsKv7WxCrsnyK3pJmCWTLCpYsMReoRKiYbpXybYedd7DdV2BFJhKBkC5cya8YSsJSzDgyshkufo1vQaN6G3",
  "key28": "3YzkXnBYFGMVCYVdHNDgL4EfbQekPnMx72DVmgp5KszfYdgyQKrDpa7Mq27DHYNNh3DFy9bLhgYGHvJre7K1tGPp",
  "key29": "41ciD5sQJsWM4hHcJz23TAZbdoxphFXAvfh9ehhuaAUfocfbqqyE73APBVyhkVBfBGBQPY6zHbmNNyPfudsQn99X",
  "key30": "5BrJbXeiVoSK68o2A287f9qUKfhL5hyjbf1yFA9gMeZjwDpQPFpWw7pvXBQMWFQ5YGbf1bNZnipi7g2hQFGwesP",
  "key31": "2xAVLCaGqaLFpJFBbDBpzjUvCVpxKDbyoxvp8uavduG52aUnvmMR7V5z9cSwviT1iXE7Qega4qPk6oAzXULAnpki"
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
