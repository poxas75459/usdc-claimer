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
    "38zGfdn6asVt4NjVGciw8jfff3VRicYfGWAyHL7GTJ2xb2hs4DZe5UEYnibZWM2ZHrHDc7fnoeViPsjP8U7tkmnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DwaveMGfu1KH5Y2ZpukyWYVWccWVEvQjxqBxZSCp8eTSywzSmc2AfVr3XpHaJeUQ3TDmYUNrHtDBgTvDsnwnkWV",
  "key1": "5DaJfKewhaWu3hGY5U3jLiDntm3M7W8tgPHVY2GJppdB3nVyipkkGmWVfK5kUpwhE844X9xHMMCZv75FGtxUzHfr",
  "key2": "66wXuxub6Lx1Jua87mv1Kcd1Lck7h7Xk3efMydsj7e9Bo72WUXbDfCZzbmq6yR1g7appFSSDxZiUUGHfHcV5T2cz",
  "key3": "9SHcfUU8EF7HZVbjJK8PL8cNxdUUhET6H2DttDC4FkXn2fsbfwdVaifq9dYzGzki2kUzMZkaDGnRmmT7oguSDj1",
  "key4": "2ghhRau3nb9xnfmD5ZJQ1R5mrUdh1oLkutt8BxC6LWxsHEvR95CUvT5BPVAK4r96NiLzrCTj71awfNLajSNRQyzr",
  "key5": "uCK2EhzJWBRmWn3uTxwPKexRrvqFUMdqT8AQXCFV2YBRNVRxwRwEbwozpmkYuA5ynu8W3ZTBQS5GKdKN3Y2troK",
  "key6": "4kP4sGSQvCFpPwAjBm3g3gweh1VPQXoR1D9nt7q12pfVk5vuwU18PJ8bFx1vqsC8Ymrp7c9G3ijG8HFFPZT91X9S",
  "key7": "571taVjwpHfbqx8adSx6zH5JDTwrtd4u2YapFscjNmRzeZt3sXk5GLo7ob76BmC9NM2A4YdfVWWQaYPgDRsxLU8N",
  "key8": "5dAzGFDdBXtctpgpmwuwbC8tNjy6qXPGdzxEPsXjDycos9HsiUBUYmAF1BSmUgPACA4QEaa3MRGN3DEzYH4SDdZc",
  "key9": "3AoEH7vgA57AsZxZ1FgtYm23L8GQgvihaFADKChNfLpFF3QRynwCzTY7zSwEBdtXDQ8BfQ5BjFMCN8PqHA6fywF7",
  "key10": "ZvLb5Mm6dvvMGHqgtPKXsSDniRRxK3tQEvRuh1zMKxbRNMcb6PCDiudfkntxavxeX6HEQaVHUpn5XxKkzRrS43T",
  "key11": "5neYem23HUfT13irTDKtmxCdfhZiXQJcShwsYoMnvtCmpXzu1XeKWJism1BsLuZxcLXeePqLi4YHirkSGz4AcVvh",
  "key12": "5TBiFSbrd3WhdsfoZDV9LEaTDBCMs4FWc6FFVr6dNTkPVtyMPFj2Qd98rD4kvoAttspTshcDzGkT5pBJ5UusKBLr",
  "key13": "ii2oKGSvz1ViU6z6ENEDyDBQN9yNpU3zCfLpFn1URA9iX4zSEm46oH8f3VBr6LE9Zwn8svxUWn57AwUT89Ffjg8",
  "key14": "5wtpYnk6Z7ZtgxLqohPtAb5ybbhRc9KUo8rsMv52nLp1duKonMT7pgnL8QKqSptqDQ2HLHP1e9YGiEAjGHgggzr6",
  "key15": "4Lj5CWNh52wfD9BbFcnGQ3vGXXdtjEwh9xHCnbVKzCS3xzhoCENKgysDmTzhnxbXAyh4xbbY4BNsJmEHjJqLAxdP",
  "key16": "5iP4GZKokjNzvz9b41QJsdhjj4hwVNCwguGFtWTyPdHgmF4qULF4TncEPRV3oadWYsoMAp5TvmqSJFmkvowRfhm9",
  "key17": "4a8fp7KSnznkufv3BBUanm4STD81a4YmZvAdXXFkBPa3pQSUkNLuxgwZ2D89ukhvZDGLMHCpSVx7rXvESo1a7bfR",
  "key18": "5xFtXQLU8529BNHoa8F4QvitaZrJR5Za4vdbxivvZxjgXcqFRy75xdJBPR6funXFRNFdhu4Cr4E14b1pdF6Jcjan",
  "key19": "2krE3j5V9PRJqkeu1ZQyuYinfAXuXEhJFvCmk8U7b9gVbJi8mpZSTcyVrEzcrewbZmgvLzbeLg3EWgr8L8Fxjitw",
  "key20": "3T4FQewEMZikaYXmzY2aJ9p2T5wCegyddX3LgkPJ41ufcS5HSFxn6H2ED3mRNEE1aCxULRh5eqDdQgduuHUARiDH",
  "key21": "5Jt3S2CEj1PGuXuguMw5yBybw2rmyqpFKisibYDMbg9yrHPoyvasMrgatLoTsFjcP7zvwApKo4VJULw7nhcdKyWd",
  "key22": "3Cg73VP1FVXerbmDPnjmqdZDjyq9bF2wYgX8vJz5bmVH2vWViSKpiP7mM6wR4GXLC6Xrs9Qn4Jc67m4xA1d8bzQu",
  "key23": "3cH6nBGo2AtGcXESCvCbM41NBg5H9Y9Po8VYXsByiLvvZHiqzBvTqe3AAe2Ub5E7rULZhs61eWNEioRwbrLtuzha",
  "key24": "2wuUCBRnp2P9uYzgj56HJyDQDWhJSqoSmi2tT9xk64VpLf9xYegHu95AECvrQPh5XyBT4tU5rpA7v8GyHSUUZ87U",
  "key25": "2udjKazCX722g2YGBSX1hwErazq3D1TYy4mANGWtAJU6g1SNuUfQrdr4Q6tWmYE2hPPgX12q4xfKuLZ14mqshH1x",
  "key26": "3yTbYxLbs9K5NBAcnChovSDWXiYMG5itrWq9hR1pXESJfJRbVCkhVz54e56oxoTxz6gCw5D3DXtHPrWbSEQ8WcjL",
  "key27": "2ja8BFmYU5vJ9L3nA3Fd8m1EQNP1BayR8aMVuGhp8KqAeXeVfEzvG45HiKT7gG4mZ8pjxk7nQV9zq9dwFc18VD7m",
  "key28": "2DGk6tWJdeZCkeCcgifsNRvQMVqnrDWjKUHwZd28T2n4Tu6RUKVGGXkU9VNzaGS9oRcNp6Sno9tH1q8BEx3vjgeZ",
  "key29": "66e199qM3buHQVccKgccbS75NEnL9kvp4oBLea34KCaXavkg4z35PetdUc4wP5kM4ZC4SiZWB4o8v7xPsyfwoqi8",
  "key30": "3U4jijtstfTVyP6ZJLW1hcE7drtsXyrPRuMe5QaEuR2X3ntPbAsWeaEtigBRGB9ZV2ztucwvACBQgcHQwrE5uHTv",
  "key31": "2PDvZ4SEDXMpjxXRWrAYZMqcPDNGxvhxkuPdYnYDGXn4Tzhfv8EARyGixZaANXW8rSUCuiaVbucxZsySPznYdqQb",
  "key32": "XvDKevJFgfJchHsR82KhFy7bp4qUpsroDRKxrLjKcahiZZSnzaByWmQt1qrzD2J7ZnpHkdrR7oS3Ag84Zt2vya5",
  "key33": "4221tCZd3VHAeKBdwxG3J3A4Bn5oPYsbtHuCUXyzoXrFCdbuhf4PgWiKbaT74X152LhW42TPrtDCVkaiD56j3cQ6",
  "key34": "4pwnSUjE98PNu8LUpGZ6a6W2U3u5zMfsc7S9tJYqu8ByHDFZ9AHKNoexVbwprYHVVuEDEh6T2WHhiCGM2tbyxz8M"
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
