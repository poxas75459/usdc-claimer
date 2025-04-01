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
    "zdREuMdZjyH5AGPfP4pXrqNotTz5vyJ7b1Ae9hLxE5E4CbVan2gm3hNTKTyH742pvvxJ1iaRngVMvfVoPBXMMGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShSaJfHNb1AiGeKyJ9jGQc8JUiQMxKyBWY2fxNmAvJEtMwh5hb1sqps6DeVDWpa1EjgkNuZJ52mc8T6MavExrKK",
  "key1": "33xyc4QXfzkUGeLDmtLotWET4XYTcTwNKJVzuiD9VrFwrcGK1gasSpxvLjd4hurJEhEY3VRtzAXQhFfrNTm9jhmu",
  "key2": "5k96Au3yxPeoEq8uC5k6N1MxxA9QUAMEnH3W4sJTcwhQy8UnRpuX799QUd1H5fu5Ef2h6JxUHAZYdTUAW56jK6up",
  "key3": "4JyDvTUs5NCzjmEoaXq4CGGSDuac48bABsMxJin8o696AHe162PRC7bG1AFgHkcNHTtBSeEDLcxbLTier15xGU6M",
  "key4": "4J9jzamX3ayJDhE2LRVsUeNkuz6qbgRrp2Q5Ws6wEmeZ7DvGtMV6tGAY8FrjugkYkcB2zSYAJs3PskdVPzcE1XAW",
  "key5": "WdYRVafas7pRJcg83oFAoEcq378ZXzNKQMigKp7rxSUQV4WhQvFU9ziBwCRrXQHQkyEkZnampCwwTRU9ueJV2wS",
  "key6": "4VXawf9FwBN7BcKdsfAmLFwvS3sTzdKReYAsJhCZ3edth2MT8xRRJBbBxTsov4agh2nRd7EX85B5dbdBu4V6Vd5y",
  "key7": "3T8vTAH4aX8wGHptSgh4EnR2C36kSZTcGecp97fG9YcQ1p86pZoNRyEkwjrAdrU1WNRJ4VjdiNAHN6K6omQnFMD6",
  "key8": "36KrCG3VG4tDDjQ9hTgJpQMthGPZavuSN8LGzEqwRSvCsiayERisbBX6ikVw3t5xfAgZ9b2Hwx1ey1JChw5h43Dq",
  "key9": "3WtPNFBjp8Zmhw2gWkikuCvhG96DCUS9Ms5d4jjMUQokoHukRSJUHhBw2ngGJe6wUzRSjN3VJ8HTfufqUpRuDMfQ",
  "key10": "4h85pcvMSwdNftB63NEbDdJgLKyznm4xEtXfpWswg8pk3LQUwTJ3yfrq9xUknECt2J4yDXxDuMSeuRkrPKqBCJZw",
  "key11": "5rcuuNKhVsusQzAyyspn1bgNunUafGTnbC56bHdQstEYMFHyqqNz9za4nT7P3hjQTcorxFzttsvGaTehLwPVPuBW",
  "key12": "5qkZhAodEJ9G1bQKuDH84XTeJgwoJ1hLHudVTfSed8GJe7F5s3uQKifC7TgFRpkjFeW83KH9Hud5ZYxByeH4x6Cb",
  "key13": "3EtfgemNZuFwX63qFyvk71oVxJmsLsmsEPLz2LA1Gbg82B9vn7xKT7wPPzt7FDNnLtoNKmqFZ37XAgAZ7KCupHNR",
  "key14": "4TD21X6uWAiEDXd3uzrdyAhcov2xSXcdFH7runQ61AdDvctMPVc8kHeFvEydLHQTi11A76Gu1Sw9CSdzEd3MJ8bz",
  "key15": "2qsdisZKWi1xpzrQRijyXhBNjPdx8xKABXBi5cWzTZWFZPkenh5aQ3vK9nicnEed2Ykyk6oLxcnbM9egCaeuvCdG",
  "key16": "29M27GnnDRVpjryMBHF7eU1E1mcHHGn1P8zNWHdsaUbNgTwSHKux64zMwbhpVK7dSQLrgsFkScCunLx6jhrrMZdZ",
  "key17": "584ooBzmgYCui76xobDAe83p5aqYHx6NyX1xe7VR19TZrtBSMNR3pH51Tt9dXmV1VftPJqR26Ww2LTH6LWGB3c1e",
  "key18": "5GMZrqUtAK7Upd26wkofNbHsy6ayQYUrsXjLaNwnTecjgJbUxTDayhAHV3yYKSUKydUWUEoF8iHLvvAgSPBUt1Vo",
  "key19": "4X9SFjuw9buuiq4cDpknCbPGorRKDSX2vKAmdTDYM2xCm2ZYyfV6JanAxo5JQt7xH2Q34itwoa5z4hb4PjCecESg",
  "key20": "j3LqS1YcoJVzhLz1EUknZpzwLh54FAvA3NCqvqs4j8YKCkoeSCEnSkGzB4pKMnQFyPdyWHNxoLEM3pjgjYSiTjC",
  "key21": "4U6feiuTnXmaPTDkjTkrJv83JSPa249SSTwJ31gyeAYtG3RiWRokxTcazB8ayao6gJaPNBKDM8fgPFTLRpk9adhC",
  "key22": "52wXMUQ2qHbVdwFsxbRJc8NDF9Hit4UGgvc3HnJoM2M5W7v5wb8eUt2D3oHAvWaoRwjpzvo1bam5LzXEWzUs3YPk",
  "key23": "4anmyff1vTU5jbExXoWazL7hHjWBTiqcTea1EgznKbGLZLohd9QijQhb6ufgWihxA5roHEkPqjhBqub6KnRVcsgC",
  "key24": "kvyAKiYinkAoXztAfyB5GewUNaegcet3zoXGt3Snoof23QiRKoz7XGXo8rHq6TRFBNbzz9wnXrzpihmVWAZ8VT5",
  "key25": "3vGX5Uq4cHpxbS4EUos8FKUknPRaFsEBdmhwibSH2d8gKzBLsFxWf7eBR5YUfBrZBtTea6YdhdftrPXw6pNA74xm",
  "key26": "5yf6bzgSNTWJCNegaWBetWfYfLWfTRHXk5vEYdKRMrqHpEEE692iSYhBjhLrc1tpDZPcHTKuANDRpSTLDTGXKiDD",
  "key27": "2RgDf24rDoeamPi2xjCRCQ9xT95ZGXfPS5RNHPhaSb7GHbikh2emGcZMAQQhU97iqPNXx8JhgaBe7JxyNe9csEZD",
  "key28": "5h11ggp9hc6jPEnQs7wRxoFnaMr3MDWUnQw9NwT4VC7gCcezG55vS8V4SJPTUEnMAufKvRqcRNgbgM9xRzc3rSpC",
  "key29": "5QFDud7ZJEdh7bb3HYKp2jV9wYChkCq7mapRctaHqphYoKtYiNGAnGREgo8Vk4udsWh5WG1ks3oHh9Cdr5PqNf3w",
  "key30": "2UxWmd7vs44C2oeyF2APB35frXCwZ4jVTShmruj68emoptZyP97svSQVpCkMzcq92B6rR8nX21mdtpsea8oEoNR",
  "key31": "3LqXQ6JC6aJqf6coKb1yzygpEQWe8QgXjpRdS1kYVX6BqNBoGVZiEVQhMMxyPpnSPz1S45D58CSa6iXKxxMRMnRw",
  "key32": "42FsTS323diybqrSffiTgx7Sy7rA3iJphwKYfQTYYiKSSquCoth5dFbNvxivT85MNnvn8T6Lv3kbFzfkraPFZR4L",
  "key33": "5m6J7GGvfBv13kdDAyNGjwEVDAi2zhsbJQ6psk2i2SMej5pnXm9oBePJ7TtaE13QnDjvayewyvRNf7UA89HCWiTQ",
  "key34": "5xKMYWT3ErbXFqt2kVXktnG5t3NvJcUW2fj63AuxJ1zQrUHybwL9bjrUhZViQRdARNRz4Y3XxHRL3pvuJtMt7ENW",
  "key35": "LimzUoNzjhRKK64x4zewJdH8Q9ma177SY25QuVArpjUPNpophBNVRB5Bj9GWBmEZsz5YQavsS3B9fyK2remJvEQ",
  "key36": "4GxD5hw4iiPrzDo8s4pUrXMQzF6iG8xFfLJKUdYHu1Y4EcBaBcDvgEVVda3d4VcymNpzEbWS87ZCEBdywqpZe8Nx",
  "key37": "3AKj7ysUpWL17A5GAEWaaRfz3HsVYg4Hw5sZGNB2iGMR8asFZUmMepmZkiLxrDn5DhUmbWunbqHdUvg3hGJfb2sv",
  "key38": "3K1c96enN5RzskWCrxAx8uxmVSayBB61GFKA2Dhp9iQk19Ho2Gh88mxHdHtpTaDDcXnd2C4i9hDVM2RXxKhMC5Sb",
  "key39": "2oFPhRGL84vVzPXt55Y62oj8ksitAXcp4AfYJEMdrPTo3yyPJU6t5KVEAeUBgKZCHUGLPehpTK6E5uhoPm1TtiT5",
  "key40": "2uLJFW6zZF98zNzgDeJLLfBpgzPTWxtapYYjgX8ZFg9NevcByrijQ5oy7kq8ZrZNro9taWxwSkc3negaftRibStU",
  "key41": "4kKh7reAnUVYXEgT44WKGfQWHJhjcjVw2PAjCxT9VP6YVfm64DYduG18ALz8tEVHDfFCyq6cYNn1haTzWeUEFFnB"
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
