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
    "4xm9vZiV89ji1tikiq6ht4RX68GUGzdyuLPH2HWpurfHybkErtcw8Soe52xUpUvUr1nFd6RQYbPA273iZaZA6AiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xi6jiwuZWWZMjNtjpBUXQayojVZpHpcwBhyXo7AGKmVJjS2KrR3o7V5YUpXPoFUzXagc3X22jjt5FLENfrzMdCL",
  "key1": "3b7xEAto13i5Jxtiex1iqxgAU7yWnj8hVcTqAKriNa4se9w89489t46y8iYYBpzVQT4W3FTQieVki6mPyQJmikDV",
  "key2": "2e6JL6rYKuhvGDmgHWjMvczGwizxwvdoULbfFjiKmTHn4Q5SFE6ffjvAYwFGgGguyvwcUB835t6ruJPzj5X2kWrC",
  "key3": "xPSrKcZMsXSdzYAm3m27bSaQHDdK2nrBQv9FvKNDUPBoD5MN7eNKUxGKChEvRGtpX7hyYsVVtjTDNxwPs59h6mF",
  "key4": "4nnxaFhoL55PhnDtdHp3fNzvWeVk9jf44HgkEieLc8FLobPaNGnQGgeYJm1hadMy3CgAaYqsbeMeVT7s6eAqvZ5Q",
  "key5": "4fAgsQiAStnM7se5E5UXHPJWgDBRBeWtKBUdUd3gShfZvmjHmdZMJ9rX1y8PkrCDapSGGTAuVdy8GiqNB8x24RNJ",
  "key6": "PVtghjRPBi4maJicmX9pRuHwJsTJqAPWBN1v7mpGX27ZtwcoGvVm7qsFt7jagjtqbwYBysErFwwygxwdxkxQf4T",
  "key7": "2o6uQd8aYuSHs2F18VTsuRnJErrb4WDWmjjX3cjJ7BPx9YZspUitNk3Ppi4h4ob5vR1dgn55hm91GRjFMzNePHTh",
  "key8": "5Xf4FK5jBmG3pMoTEFJ9xBaMxc5ut6TKLt7UhyhTSoLFP1KBUV4AKQHeVBD58tKAmVg2BJ6oPoXDE6c5vxzJWwGJ",
  "key9": "35qPJGNUsBqqmdgQraekET9cFc7F5dtkG9AkYNqzdUCj4MwnLiLyAFDZk4SUzB4nyKQ6udFV4zXHGpjasTpgrPA8",
  "key10": "5XjdTQiynHi6EdEyEeuPJC1VQskc5W4rX8gz2sTTxPgmZAhgzCfZxxZfFwJZR5Sy9LB9E5x7nSqy8CPThKvKwNcB",
  "key11": "5VhFxpyNzgd377MTaiMDWRFgezdYsZr1aBiuHHg8mAnMYMKM5oP2v4SjCRTAvZpxZXw9BhYzEKp4b2BK34gG3WJy",
  "key12": "3ApcqEyZNpaCBiVJqmxxqcgQVRtRqpEzH7dtbhPMPHdmtsdaFqRNKLAPciEpnUQytbmLeKdPR1Ey9qECmwZR4LKM",
  "key13": "3qS2egEa1zpTNRCheaydLpndkCvNWH1qt5L4f95mH4ehVLhQUK3FvbzAXbSuPA5NvSUZdT44MHLrFg1mxQQ58mky",
  "key14": "3mMfBURkzVBYVwNi55hRdSAVEoMBNCEpr25LLxZFFxaVaS2JXe4QCKFYAa8VxpbfBGsitvgA7XyXaavxn3EWhPXp",
  "key15": "4t1GoffhnQCFjJbjug99tsv1Mv8WQBZ8qF2YBTpvKjebh2JBZNF3bsna5byn9uEXgooUFVTphP8YSVdAj7bcu5iB",
  "key16": "3mtLK46jPUkYcUbuFtqUH3BYD4wzeU5VwJenow8skmyJqiFKkK2PiHYP2An3gRmLJp291biDwvTgdosRQqGtt9hk",
  "key17": "Wda31WMYBHczo53282CEsrAcL8fd6UJEoRP1wo3VBsudVQ3Vm5XXsHbAJrcGpbrYRJB42NB3Uz4vK5WK2kXXo1a",
  "key18": "5pnaFextgFWzW3cww4DzHEahzbhznEHvTgSd4ZwjFu3wFyseLTVRfgw3jXiFdaPNMdJSd2n3kmd9nTPLSUZ469Kb",
  "key19": "3M8ZZpiGEw3Xmtjq95PTnkWqF5ecesffqnkntkZniTy7Z98ycWAVToSUX6o4DDmdFqSpUiEuru6vyokAKsgmJMt7",
  "key20": "542WW2ryYiT9vDDdBYoeapeBHMC81bn55Wd6aoNFWhhSG4YoNP9BdyTXrkXAzw2xgcrXPFuhZLtJneYZ4Nnt4Ypj",
  "key21": "5p9mSFNGftKa4TjNtaBmypHHeskFXEng15qmvWDThf3ULkanJQkXHDknYh69VwhiFGmHp7xh46LWZpqv62YBaQ8T",
  "key22": "92dsuDitvTq3t4WGSfqDZ5CZChNFUjw3jZiZpHhhS9bTNqgswAM667CycDGwV9vvS5oktCUFTStp2K8AfBJYp5X",
  "key23": "4BYB4XUHAhCBKyLHE2GBPrThAp31bgQL4DWQNY4Ji26cNs8yZp351UdZeaGkpGPZ8R3DZD7hMdJwvaqt7zYwirBN",
  "key24": "4kjVE9kmomRXeZ5Azikw57Ti42gfYFTAXQFJGTwoh9dmbrkoodS7LFr5xR5gnHH5THaCnxzuGobysja8sddWSc2c",
  "key25": "WAwCRtct6VFQQQhM2C41sqt6AXUYtKjfDjT5eowj8mKZRehbCee2s31syNrwppyRAQENDLP3fjMxTC4GhSrwB2Y",
  "key26": "5ZpdUabhh85oqmMNBKX7FEmRo1brXuKSZkRkj8mCtEvgvpHNBLg1Q7oSMX5RYSk4AziwdoaFMnUwHWkU6TSpbxgk",
  "key27": "2cyHY5FgGoz3qKZq23uK6meffzanqvWzVztBLiwsF6Bo3CjJJXFXjiba3dk9Bo6u9zuea1pFG5p2GdatXVaBmK39",
  "key28": "2eLqpSgv3Ygq4AXWL97NAMHPKHmQKDVktgG9FzCXnWWhNDH3a4DEM6qyrDEKJ1ZXGGpsAMxCsjNmeQ3hXkDUK5nG",
  "key29": "1LU1orHrRTMXW8mZqpah5C4Q6JRWM5ix7GEXp5SuEoyWWmTsrgc7vCBWUkMsNhGPUBsvSZEKT72rPyDWtwH8q2o",
  "key30": "4XCvDettAPhimkzoJ8e2pgzWoefN4mh53gPmLaSrUFb5WnUNmGcKtU2T8CYuGic63fm7qMRaxDLHtkXv6FyzZZxE"
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
