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
    "2Gdo4SK65ZZqdtpCiw9paY7ynrSVdzDrnwmTKMP7RSJfU4SvpQD8TzscQKemNEWM8jaSEcd4hqosnLJ9JSyEewBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Uq41b69An3FUG4gdX9eS69Y4ky8Kbzx9PtzhncrEpV72e9YfaBkEFi5N9xC1PjeHRhUiK2Nu5rJyagZDQwvZsr",
  "key1": "xyuSZEgLX37oyYii86GdQmrVK7fCCs11SJU3pQoPdFKu7yhduFx9q6QezjHTiMJeDZCnKUc9ivLfUQzERVscH3n",
  "key2": "2xoypsQyd7NFjB6ndJzLbipRJFBLz9k4UsjBQdk6xAzpt9Ls8s4CQ9sT9DjrurV8tMNWp7ootHWKeHNjjSuRR3Wf",
  "key3": "2gEoPoavN6xadZEmFFci6aBfPwwR84S1JjewrL4NYVZ4XJZt17hu77mfpqNGo8jnWWxRbpPkfA7zVA8ebawjG5e7",
  "key4": "2ffwukr7QsPB2pn2APLTu6iRaXAvsB9rKKKsaWvtJNcRUYwb75Fkdf1QerHKkkWN7guvCu8ncQ6UM89eSqS8VJgX",
  "key5": "2Snvn7ejzefJFTGiMHaCXJUX4GhuEuPzK8SCoZNJ5r3ZJmW5mJ3sDzLpseDg9JYZNrq1Hr1vv7uUjY385dUphvUN",
  "key6": "2LVkd3PdGE1JjzSrTSebvQWrtj7s2zcYozfVoHuzQkKa61q8Nw9v7JYpb9ACsFPb1Y8iZCyYEuJxTygbtVw63FU4",
  "key7": "2LucudvoR34oAc41F3jZXnr7uT3brdfyftRV2Wrx5tha5geXdfg5wdroK75XJtZJa4sirfTByiu1nvvdgwU3tP99",
  "key8": "4pZWSHe6L4kgHAYd5Z9h8tEKVs2rRpaRw1wRnAi1RjrK3NqvB1GK4Fqc4F7JFZXHy3jpQcswViPCqKig3VP5DdNe",
  "key9": "GExt6nmMShCNd61kGNpJwUwxxSxEgLtuX5sZEeLFpCNbxtekU2L6jmSChgkxKwMLuGUiThrzT3n6QCBcMq16Sbb",
  "key10": "5V626ZL8zRjxnERYtdvACbd765SJhUMEgseJxZeGqEa4Qgznx8orDoFZRFXUSq8UBEeNH5VYMBCFkAzH69rGGLaw",
  "key11": "4Jtma7Ng6rP4aS3Wo8KVt9rokgnRYoSYHYvXLGeQfsrNSLkhoM4BcuUtr3zgE1izsjc5jowpBEhanPJcmbKD6u5P",
  "key12": "3t2zGxfTnMYQjdfCv9WAZLD3M1uJKapagZSVYSoLS4b7qaJtfQpeYBRRoRgW3zT9EdLhedxnVBzkqD9AXLq96eJP",
  "key13": "5MWSuGRrrii9Zo6E6L9P4wWpY1qky89whvfcueT8GmCzpoNM8gTmyzAPK9vdPhvjbM4gKSV2mGPzZn9393YB8Vbe",
  "key14": "Y5WqkhLSBwS8wsALF3RsrHqYbFHf2xX3etezUJoPRuqP6g7qr4S5AYyKw3vV8N5EyAFfLJsT3aS3UyfSnsoCPDs",
  "key15": "4m5dL3ZDvCeohQMCSFEg6D5RXXDwdwtMrRv7XCAefz62iYJyhu6N7RfnbUzPmodHx6i7YEf9AxwZ3d83N2A7dktN",
  "key16": "1UDN5143GBUr7Km2S3FXWYDUGWnqHyxi5HJWVhezTvfw5jNLEBABfLjrgdZ7hkZFjx4jc8TWRW3gQdAykm8311C",
  "key17": "VTKJAtH9SvTU7J9jDnCHQ8uMQgAQQofu52fUFit3o5VL4easAH6Vy4wpX3XK37BiLqo9sTjbiAG9Bx5QXYYtHeU",
  "key18": "3jyUaR8bdHP5jVk5jGH1czyZhjhwFmywYkL3YsBnftaM9AJk2LApgMNR5S7xNdFZnmmik83MJdmMMLPLqibH854U",
  "key19": "5iVBK3b3cSDVaYRB35bVMm8dts2QpqPuCRaYCi6zGc7c34YKa3aGteAvkFueRPEUcRvZPeQrufMVkYem6mQgA6c1",
  "key20": "2hBZ1vztkzDKffE3dGRsVkSCf34RTQVxLTtD9xuK9798U6Tfbp2iK31njmN2DykHkmEefp9eGspA2G9sAqTkCde6",
  "key21": "M4uFD8wiPZcLSqZavDPPu4Cp4WCLszZAF9dvcmAWzftZZBWCgRxCFBDKDHwriA6C3WyfScion3bEd1W7zfJe5DN",
  "key22": "iExgPjpxv5oU5rA8VLPENEK2hkmndmfXHVQVzx5SCQzC3NWXNkmTPaPsVU2omsaodQdUenWs7UCDNxc2Ty4Nu1W",
  "key23": "25fD9qNUsZVw5N28j4481pVR4aVYyV3e4PP15vWaYqY1jNpYAk1X6gW1xRG7koNud1hNjvECJojSTrjDpnzmdDuA",
  "key24": "qF7TqquT4vPWbBpfWfgCtYGbCKRPqzLYNknNGmM71kCJ3PFVKnTsSTbX5ShbDY7pUFcdTJLuqhFFvoz7AUq6v7R",
  "key25": "5VZHQHHZQ4xHo6difSDZDwWDQLEo1g2Dqa6GRhLMHCPLUP82R1sezMd4AiLfibCSy2Yqczb9RBfLtHxZTqbD2iZ1",
  "key26": "21vyhSHcrB5bwLrAyDYXgXEchjNwS6Z3wUR1Vpnpq1zcZtJztKhLTjpmxf6vPRy8qGftpc66Nuom6A3Ptf9dtafs",
  "key27": "UczPkd9zdCCD6ZK3n48chbRQhixhqA1gWvvH1rPkD9vizfRy8JGmS3k2risJj4iqTzkTvk9g7B9tvhnssfzrRGj",
  "key28": "55HvPgXRSrLon8v5vtMZCFdheyUGvy4NiN8H2x5D7oVNsLSFewt7iRicpuCicmfhAuWWkFVVjU3pfP55psrJzTJk",
  "key29": "2jh98kQ2yeWxteFAr3efBQMjVYJ927P1G2Qdu26mGrcrGnqRbL7RN9kJpJesAk1FpVTbU5m7y6dYVFjhCMHDkcK6",
  "key30": "44yHSjM7uTVr37xjCv4C6Kp22j1UuXyvNHKNydbSJjyk4jKZqJPBXqJCe4HjWP7Ga1dsnDxguAktppA7ExCn1HaR",
  "key31": "3t8wDtQ7moDHeVckWor2FCmNBWKyt7EXGPV43EjkvMPNJ6m524AGC2zkvfcn14Vraai9eNn2zaCH3mMs67c479pU",
  "key32": "2FqcquCQLKzar3dsaftnuSKFMcadsMz6GxBeJmWmafattN5u5inLQ3AsiDwL44A6DdVsxU5ekejkd1e1Ds2Gh1Fq",
  "key33": "58i9HnQkkrt52ANAggK4jGyqdCfiUi7ETb9FEGwHb1YrJR2CWPi7CiaNiW3VwMNwffzG23yC7NcPzBUTPMAjcNHF",
  "key34": "2aZXs5sp8UjGMG5EDG4ng3vvF5gCtBo264D9r8eJ11WQX3yp6DKZcoDpC8eNToKuNnt93BcTqPbLHUL16PGE8DPN",
  "key35": "4GeGkZSQ8DD351ZFARF9kdRnQQH76YcjkchZtfuhy5K7LsPAYbffLqhsTyA9yzC6XkYFir5Z6njSyDtJ4cNhEfij",
  "key36": "44oMsBQBW7oLKMLWUbJ68vpxY5TGx3M1tYnDEnfsc4hTkvkRj2v5ZMdWGqBKKyPJ1kzjU2Q5re7d5V4mcZMewaiA",
  "key37": "3boz422L3NHWr169rYCdsxpT7j93HAKyPNTyTaKAkYKWM9oR9oQMfiSFn62c7uJQSaeS7YzosPXiC3fMMadMyfFJ",
  "key38": "4nzZE3vzQqt2gsAkMuDapLryENhzchyaVthL1SLjUWR6vtYoW4c9Vg95ux4iCeh9ehLi3Ut1rT8gm5YV5TVp5Mj8",
  "key39": "4df4SEMpoUMwQWU3Nr11AVmCfB4pXHpPR9jz5MqutT1Tb3b4LPAEnrpXWZj4BpEa37ADAypBRBtQpiZRP91UKxHC",
  "key40": "3VCCBpyWKTthP7Jqwg3ZB5TvhMY41QCtRoEqho9tSCCxxVbg9HtoG18Bh8DuiKz8Z49YvbTzVEd8mvNhNRBLh8Ny",
  "key41": "3NGrNWttqxKGDxLSLu31BGb8beygNMGs6R1id7Se3doK4MgTJsM6nvTBwU2izyVbVkpNYbKSUTD49VTRnt5JSjzV",
  "key42": "LD5ARsvM4u2z57EiCZCaDsyAiDFceN5MjRYf95F3baCrbwc4tJTMJjypPLwWCSxbUkBHKKvf8jZgvN74jy1ktGu",
  "key43": "3M7daDqrnGAgPGGtyMgUFVKmcG96AcB2VCxrTDNGasKX1BznxPieciur3GswH9jt3AQWdpvuiNwgBVSoxDwDRtfJ",
  "key44": "2qHh6Q1aMWQN594zPWakJ32L5Lc2LAKq3sDc8UdxD2gdiWCWQuUpPea8Qx9SBN1H8Mqvktm2Wxpa6vcjSpdpApCH",
  "key45": "3aoKHS8ncC8gYAivP7AgZZuoXCHiBpSdkB6LxkL7paQk8DiYaeFA4oYPXrVa91uaXsQ2XzhdddqEn2WLvUiPS8xh",
  "key46": "23sVKjBHGNshf8rgvcEG731LyNLwGDxL2cUSC1fSGTiNYg7xYuo8tVfBRTf7MsdjeUwjWYZajYqj3esUQDBFz5Cz",
  "key47": "25CAkFnidYrzFBk6u6r34BFM3PAMcHGAFY2PUe1x5Su5tovcGHGmo3r5TkSbS8Yv5XVUepRv4QfwV5d1j67ypsmi"
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
