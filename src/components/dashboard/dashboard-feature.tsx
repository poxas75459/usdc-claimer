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
    "486UY8NPGs5f2NY36KqY4wV9rqStrFqLvhdbvBo5FRNNU5C79Wybn22wWdHgE4RMhDGtqMDgYpDCGVSaFQuAek7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vgxmuya5ZYXwTbYbCXqQ16WZBmBQH1wjk74UojQSnNDdeQBmiVX5CTC7MuTSyzCEQ8LHyn96SFnKd7AnLThEghK",
  "key1": "5EMbSqyE5zL4GytuFB487cYFLm4bsLSBmdhQdkq9i1EDUaK3zPwNaF6LZnLyjfhRiXBwj5pTvg8V3RvxjyNHN8JW",
  "key2": "5uv8XxNUqDLbzFdipHYmG4tKD6y1tKeZPXzQ2F4yQoGFrhfmfet1CPLApuSe187T3Fc6nL9Bu2bkM1fJWqZW8iGS",
  "key3": "4i8uk1Y87e1wamd9uWRi2Uj87nG5XLTbjakyxNvdUcp1KGz9TMNkKWDBarveihM3tQ1XW5fq1U5kPPk6YXBrenwh",
  "key4": "F6sVDqVD4GxHwNaFsPzFiHtxmgPmwJfYgGTcQzjGP2LG8LnJzTY42DtmNXkdL2YWf1DnQtFfTTrXbJrAtGN4NTg",
  "key5": "4aA5LeCtbHYsE6rRzn91dc6VsprC5aPQYp7KsJ28taHJMXuwcXoJouQN6FLEhovhAeoJaYFX4UzfcCwTwJSzrJES",
  "key6": "4CA26MCC7HVb5Sj3Nkn9usykCP91ZBaryWD9f7eiRWhydy2iXPTnVCwUi5bf65ERKUHM4WPWLxNUfhcUSEixQHU8",
  "key7": "5ruTNYopmFgYN737iNoFv6vht7EUk8oZwJ3cmziUESueCp3JLjnwS1P1DnaNHB1yvk4c9mX6M6tzSstYr7ip4dXt",
  "key8": "2itEVFQxAUQrhbhFUZAxut92mXfx5EjbARyYjfxTXa8UASZKsThmDgvujYxh7ntUaBPv68n96dQp9feEaUSoySW9",
  "key9": "mvjdQPsQQYrd5iYPtEPave9NUvikBs3o8WPmatPJP6BQY222oPNq7MKaxNWRwZ9n9zhHx7PT6A3puJnddPhV2qW",
  "key10": "wydQaKCHZL5F3efyxDyYHm2SooxXPdF6Wovbxeg7AsV94jQpVdK5HEceDrLGog9EtWuMejmpzwSNRVJSJjMxfRp",
  "key11": "2jhc6zFko5GywUiWqZp4zAcrapEDGdyUAFS6NBbKpXiMf6WS3XBpyxffakeA9VxtknetNcFMUKe3y7dfBjMjc1MU",
  "key12": "2m2wqCKRusQ7KZt8SCbCyN7D9LYExLoQPdE6egc9dbbTiu7krKD9wM6UmFWcKMj9FFQ3FHwMen7bT1Q7KbohugqS",
  "key13": "GZn2TjPu8PbCoCCP5ARvEQm4uDNd4djgNNs1tEgeRxxbH1AhRnLSwNddtZMqUQoFNYmT1YmfPjZR9huBaxGWZsE",
  "key14": "rDBgaLveeFHd57pcEYNqYHAGTCDe9MYdMJwL44Y1ff3RAAiWyT1hK8pXATdB6hgz4uJkN9Jqf666USRDcpLU1sC",
  "key15": "4wz4HSmuxWViGhM9ThypF95E97AtAHMosRMDKpuebUJBmezhRxSbpzjiQatn3ecotgiGwvxS39Yxvx7AJMbc9nY5",
  "key16": "C7Rgk31zz7amEQ8R4yUKpSudAVXh41d5REBNzVEwjT9SHFWUoPPJKiuyNABteWjLyX9SV5Yar7rhSSz79dZFkp6",
  "key17": "2uxPGLMVFBKrGTe7Rm8UjYwyjQ1StraDRWjDoyQtVdVtd28qkA7EMLpCJoigrypSp6hY4ruP1rR61Yd2GbMWAMde",
  "key18": "2oyPWe1HkvFiJ8AFg9JSrftEz5oisPpaPWee3NSsutwYCpv2whHuN1mjKNuqLpyhDhyZpbHC7UJRZXRxCVYMSE3d",
  "key19": "3rLee65ZL7mCP6iCS9vQu9DfEzh5Hw5Dw7yEaZ5dVZxYxRNg7tGEbB41ENNXciCayQ4X5Lbh6GT2MGPZLpEHhr3j",
  "key20": "iLrZNLxq3qqL1Lp22X6Z4ntBr7YwD4UY518p216TYUDAsLtepnACUHLMJGW1JZyJ7in1mVmFZAozZkxMcQNUn9B",
  "key21": "55TWa8FfHEwQ7JJEzKB8KFqP13ATg58SE2U1y2oxFSrYrAjnvsniBBiNEp4Q9Pi4cojpyT8b8SSpANqXwfTP8fwv",
  "key22": "2HcgyU1ZkCnGZRNUwjgTpGr3UJosDdgnDQJogmaGCCz5k9woLfiBMZF31W1wY2ug39DYhRmXcyjy63boVpYY4fbF",
  "key23": "5TkR1tsBnv6iBVB1LLTrfMf7y7Ec88thUZt4wgbpwcLVX4wU1mTm3cTCAMwrSpz3wRbTBdE1DzuKxcAKSFKYetAf",
  "key24": "5esaJJS2CEemZRyY1XYiXFpTiWzUFj1ZZtD3RWb8RhZfP9KBaKAVWKjTa3qXNPBwy2tnxJLCvH19BtUQWuwiVnuG",
  "key25": "4ycB6bQrPmQiDgyZUFrtKxKsyNgfSeMZGNCmBU8v24G2ZKTt99VcFcbM6QcavMGM9XzTFtoeLqmYFD2rwYXoGfMf",
  "key26": "5gopkz5xsuGCKaR5pPbj8vnGasmdViejch67AGg7iyFi9ZWJb4LhVXhva5cXc74AQ49MTLiPJPtApdzLmVEZvLWW",
  "key27": "4dmbsjegbrJbKPckrQvtCMUwa6mLWuyX6ACabB15VBujitGig6b8JACr6Errm6EfA1EHWxBoG4aQZ3bVZ6V5Bxuz",
  "key28": "4Jrn9X5VTgz9n4nsVyVXWkLi8daU7QD6YMeRnBZ25p42MDpAERHhKGgqLrVJF93xuJ1b8VMW9PPdZPP4C4HpRxfp",
  "key29": "49Mw9xoR6WHSduw5Uvsfs9f73tnKmttxnQQEEujTiF14xZRVjB9qD614ajixPpiLRv1jFDTkCtWVhGShQu5zw6p8",
  "key30": "2JhZsFfoAKpv5oQqf22JDJzdtdx351uQuNHAYPejssg415uZd3jcA9ZFVh78DaYQzbX7u9b3NXCnGtCJJYT3262X",
  "key31": "4AY8kNc6VF4NuvKM4Y1sC6Rvd1Lug2ev97QLy3BDhBeiQBhiAx5TmFQKi7CjHK1wJeYu52jT988dzeJdKMoaNdVp",
  "key32": "5a1ynNVsS2DtEvc9YqfEpMFbWGw5UprxvzmPFdUc8H6Y4Kd84zyNpUGg6sQhch4FTAphZgnrw1SP2KTtR8Rp49Ub",
  "key33": "uZ42rECN6rcZMVowYYrSjD4Jjju2LDAerQ2oRtGgWHb9uNNVuoXReyDBzjN9zgyXVeygFtqbCRnJ3ictfgBggNN",
  "key34": "52ixy2zgCtm7gJT4QcJtGtnwTnTHi9hhmsTgjsVYqeH2PaHnykjda7WRgH2UzWFwpi2rwQpCaFDQRShoLAct6sEP",
  "key35": "4ahmJz7Jottj8Y52U6Dux2La8YuDiutuQ8UXCUYUZnCiwta2949TRUHcjvMpc17FrqH7XS9MM2j6cDXervHxFYdY",
  "key36": "4tqLuQc5kD8PzTXQ8J8gG38jKtCKyN5rYFDhTFu4TESf8z1UgbX2YVr441HH76F8219hhomo2FXtMzpAPDbeNUeY",
  "key37": "mnmdWkuAzXr6pD7mpaDtqcdUnrz4bRbBqwmLaEQeEwvJWsaiFibrAhcuLiEiXERFt6uYBQ67JB5r4fCPcV8BNzH",
  "key38": "39f92F6tT55PVLfrzce6ZyXhjqJtuugv9mRAGG8o7WYTZw8BBwfRcxsxfRouKVrmaKFxktY6SpKpj6UqibpfHGZh",
  "key39": "hWHTXeoncqbe1eo5YA5mgxX9xPSPxfxPWJacviCnqGBPif8x5nRHEEXpdy2U6eM1M7bcKYWoqukFz9jPQYEr8oo",
  "key40": "3FdZDhmRrV1woLA66AysRg7aWBsde1UjuXP28hPDdpe1MvgsZXrb4amDgeo7Fzt92z7neZNETVci55uuk8WG2xaL"
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
