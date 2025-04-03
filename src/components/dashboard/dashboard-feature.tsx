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
    "57DEJCk9LepJVc1WPT3D5hzWqtNjGpdKnyNhhc2SgfCWRRTknQqcpVUQekgHGYBJRiyyzBVWsPLnd1PK9AjnsFLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tfSPDG3PXZVbE33Vx7C7GXZ4eez8xcDnnXemcqj43vtn8BimdUjFs7PZnRGR22u72GDzLRBYr7C8xF7S5JT5UF",
  "key1": "2Rt7qeSYLiaKjf3Sc5nt6usZ8tLP4mDHfrmJA9AMvL96P3nDi3FoAqPEQSdYQJnhqCery8s3mRriNRpXGRhBRXWg",
  "key2": "pJvtKXrGTxAjCXF4rWbT4agHpZ94vsRnyARqZy6dKvrnGwJ9V2LE3dMPBTVb9Rsj5Z1sRgGcfMe3wPZUtW274A5",
  "key3": "5T8GxxvyBizUZFigC4gaEUJHmNJje7E7ojBFi8XAJBzWEhNVodoYKJyN1rLJsGdwFgiiS14u4et3CUrpEFoSrMDc",
  "key4": "4uLFiwF1M2orNvDbSh6xq6CEEeV68eoDvr1Sojd3Bw7x36o4CbrES3rdmZ67axsyWxuxxBMCTRBC81VhvErjYZ7R",
  "key5": "3Y6BpFE6dxu3BuUAiZakKsChit8H6ipkjhJvznkbyJZvm1txu81nv12ro8CjHodHUpEfAqxaPSRgeYG9LUorRpG4",
  "key6": "5gCyRvVs8sGGrQZLLw4qTxnworrxeLGJmu7xHcVvtAvoo7Z1goTFyHoFkqiPX5ptRwdbE1E25UfgUGbXrvNody5n",
  "key7": "4W8bD5tbG6xymhfPkTDhTNb9UuXzCHH1znUdaAEyiM56V8GX8XYNQWQvhz7dz9y1WqZYeyWSFbE9avHJtmhA1EsW",
  "key8": "n7eTVX1o84JUShYgiNCV3De42antRBurqPpFMCa4jusc5uagQ5Y92FxNFHpg5dz9HxXoCxkD9cu4qZwHSGMefK2",
  "key9": "5THDAJF5DVzs33srMvw1RFWcRgfXrwjTi9fwmvuWk89oi9WpHmwdoXzWYEdhgPmhxBxcenLMLUhdBNRLMiMtbYso",
  "key10": "3pjEsNEUa3NFN1CeAcR7k8SijqgJsRfFW4G1JTGwAxygHYuDX212feURnrEsQgiVMEdeio6soGajzB9dGC82LkLZ",
  "key11": "5AUjZcYHNZkv8SK5skH279jDZfQhodkmJwixYxrhNGrQ3uk7C2ZVN6YP6bEb7gSjz6sQ8STLiTPSYdxw6eGBSF52",
  "key12": "tVndpek3sqW8iiL7ACBkSNYvZvRRuPQXeoBEx48ppvewg1gwY29HBthwCAhquZ1NXJJaLNPoiUtWztYeTiwYqN8",
  "key13": "5oTx1m75uEQimNrRVrrrTDSKt8EHbmpJcoc49rJpf4QJEuYzbRQ6AdBPYFfwj8Xw9EFzkLsh1EPFp2DE67iYhBo5",
  "key14": "4t5A5TjN4sgiXBhLkvtQ2vudJDxjpLQxCFBAGiAYfH1jrf8xAWNzsqWeyHwqdejdkEyBgEyuzjidX62J5ZFnMfr6",
  "key15": "rkbooZRAT2rNK3TRgbzikr92i9rxWXpqmW1JfX9cuPAVhW8Xyf1cc65SZ3EAQX1Foo6DQaNZRGubbdmp3oRRG5n",
  "key16": "6296Ro2SUaUnwZEQsENR5gUgQvzTZeZExPz6mRAEpt5VJ21sKkTyqzcYpQToYyrFtDv16zR5tzaUydc37pJQjsWT",
  "key17": "58XVFVDyZoat6xJj5Jfqj7MBYdEmFFVDgrqgZ8HWZWkGAbeYj6D78JHCxhVcHPkSaefGAQtUWXeQX5seUR3mSCo6",
  "key18": "49baheE6snHJi93obUn4sRUNuAx3AvpoS9ipGzth5ohxThqstoa4du4xi8aCUt6wZZG2eYetYazeBU7CxeAqZx7B",
  "key19": "275Nwm4U3DG9ZJF8N2XFkeM1mMtU4uwWi3x2cm4TJVeATCCQNgppkDXHqNAMkuLiLg5UiH1Dd3XGwTuv2am9AyzC",
  "key20": "5HA55FpdN17SwzjwTHYpAZq9HYuiZ5iZY4A15eJLFnSRM7iXVYJ8MMa5pjKYVCVvxkNRu9JDFR3ZJLSAQ75WDhYc",
  "key21": "2dmw85btpCmnBydam3a4W4MBTdayitMq65vKavcMhya3bp7zRMwcVE8ASiEjCp9k6FUJPkM65HfTvD4HoydFry7E",
  "key22": "3oSntNgPnxTZWg24MP31e2GSNkvvBWAZh1ZA7KG8qTE1Q8Pqg4cYXkYwEBVQZAohqtCXJYvb9cz9fcvphgeZBoPm",
  "key23": "vAohVq46EyGmX8DHPZ7yHbUrxEXcTHKD1WZrBvH8uq2apaF9TML1DRj5r5A2wFJa6EMb3KoTP7dE3wXG9XXo9Bu",
  "key24": "4QeGeiBZerpGBuW4NBi7P8TDqjjuGgN5RQVhNo8dmsDRs2b4XYrDEW5TnF7AiLUD4VWVVNFRaKF1B5VvgCp52V3t",
  "key25": "37XGnkfHKLKy3JVJYoosBE1TdkYZLykSa17tGKhqPoLkTURvgdSdKZHF3Q6E8RSmvpJTi75FvRdf1JKA2x5xakaH",
  "key26": "4e9Qh4Rc56BHKTZQSFcz5bLdZaD71xNRpNxopRoRAKk6pSw2HND8opek7DdDproFkP21P1tpCdJ5wBuxDrfFSKQn",
  "key27": "M1EwyByKnok41WHJdVqkPXP9Mrzks1seHrDYisJ6coorFSBfcZVgHpZ7xiDtVQfP8wDN6my559VjmoTxQKtyCDb",
  "key28": "5rLtJ5kDo7acrJRCY4KRCn8HzyfcJxoyGHN1fzcz7MivKta8V431rZ9m3EPHyNjH6J4R46g276n9xXXomR2WsYmX",
  "key29": "5dyaE2QXFovoMPtDLkFyvVXHyhTBCqGEU75P94jXjxrzPve7RJRd9cxUjiDQh5S3jGyJhzzCvjN44fg5hrrqGQBv",
  "key30": "5WJqxhxW3UdTMagWChipCoPbVLcDeqJFNmg86AewdJYS7b67E6dhTGEodmE5RS3dun4TRtTCBrYxkz1hbWJSDA6N",
  "key31": "5tCBkEXnGsLpTyNFy6bVAV9L6P5SVs9Ynkc4TwriMoNpBvTNhsfpsyrgMitjmdd8woFV5DmDLwdUks8tNk6cQuuC",
  "key32": "3JCsrJsLRr92rqPwcJ4einsVRXsSokQzh8mNbh4nP22ExwzKJbGqECCA2TsZU3yRhdhDJTgbdNHDDKJqYocz3vxk",
  "key33": "D1fvpLcfPkAcqGTyH3D5UdnXqpJ8PHkVTy2J6R9HgioJPdJVWUarwo9c4EqBQCd7y95zywsymugVg9rzdDy3ugr",
  "key34": "4ncQZiz9G1DmdigViY4rYHGhsnjyR9smbS6vkhgsp9eAhp8aqotJ3Tasb9fZfj58Tb3Wpq62skGrvx1hb2R5BJvX"
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
