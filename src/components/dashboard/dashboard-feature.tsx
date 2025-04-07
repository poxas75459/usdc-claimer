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
    "5pDXCcvZKwA2TRAnV5no8QbZRTBJ8b1r11DRJar43ttZPK2BXuryqZ31Zx4KhJdPAwktmNhZxexQPH342q8md5fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDw4eNkSmBv8TgDAQaAT6No82tfVLEcqJKz2KoxdUJVwZoGrtX9TMrcUgcHxzqoVmwe2RwVZSRNyoJ9gdgF5ddG",
  "key1": "PU393X4hxDtKpJqiyVWZSe4vXW6izWNrBYgsC3e9smPbNSGWYPGmfzZiRoWQ2mUqSCtUwtXYDY88E185pKXcwX5",
  "key2": "2h98aHq6q85jTSfSm37CPJLjF2fcV6PXpxrBrNoshBVHoXPZxeDVQ1ZpDykZCx9P62Q85omCZKdmXSVM1Gw4UzNZ",
  "key3": "3UsYZQjxytUj3T9kuhrxjgYHYuUcLBdtNoAk1ixpZERYCV8i3mQDVgfFVSyk8ADYiSF1MYrdxvxSYLJGd9XpCNXL",
  "key4": "3UfpcgNaqZ4XxrRmxg2rAXB3jKcU2nMNSvKFu6Us2VFdingrMevbvnzCwfzKESygRhbHVKSivGgMzZZeeA2Y4WuZ",
  "key5": "3t1YUtbrXYQjtq234YzzkuqbxpTyvAn3MeHt6NbErVdtdzY6RFMa9D955txSNLVsXzFHbDuN4TUojbX3uVMp2oJv",
  "key6": "2TYoQeAbgdduidgBDjesyyEpKJGEkAKDwGWMctzXtDg4m2KwWMNjhfMTTx9qxRxRM9UmBmZmcFg8RJ6iaHZrzn6N",
  "key7": "4qNvDWgp4xzrJELa4UfENEfta5M8W79TFL7exq2Va9hMxwv7coMoJpzzEjS41jRMhvg2jEeM343jQMTrFDfsFA3G",
  "key8": "5NjQPnPXRb9cbRg2nwZs6XWyXke6LZWXdvRodt9FUvmvXq9yym9Tm8SDDToE8Kn7bNfA2K926ctfabQC3sWENbjW",
  "key9": "5XkK1APwAepbX2LBHHgwxWTt2hGHfFLN7x7XAocM8gr9VLsUGhUoVQwmUNgnXpxhxRXwVJvxrQT42T2o6PQSTZxt",
  "key10": "LHQ6ApJCeCovFficsfmM356parU5qBPFWRESnUQqGjG4ajDEry95NMYCpEVWcRBineTLarVpwk8pwmm5rTEpHTU",
  "key11": "5Yfk7Bd49b5Ca51pfES8JFEQsyDgV9Kc8nFfRPdTCT9gEuRm2ABeaRVVAJnLbUm4YTmLaLt86mpLLwyoJwrDEGs7",
  "key12": "5YdXmxjb5uPUS6iwYjyXbaAcQ16bhTcwTXsfUjzNjUGqX1EepaWUWuBHwMxrNE2rKtPk7qXeqLKuyAiBSNL297Q3",
  "key13": "2HnFRqx2ECeMZxRamHTpbU5xX5kR8AtE9YChk9xiA7nq2fyThAgtiWKia5D3gkpdnmB7jqRnEMi4H77vWyoNEuVL",
  "key14": "3c13Gn5CfhjxKNGdkoWSzoLwi9ZvYgNeET16UHsFcWiNEdbgcH4tBzeaFmM6xopma15YC4bFpiMUapT46nm3c72D",
  "key15": "4pSXoRy4DttoK55ub2oL6V8r7uh9azQjzGPJeBSsZKpaabXQArqsDY9t5juxpThDs4bDR3NwMAHmmmcDY8cBMu21",
  "key16": "c8cghUiQErWvHNxFjbaNeRYhXrrK6XgxhDuBSstPS1JJuCfivBGUpyPJcqs97jUgE3ppfFrALPD2V9838dRrbwF",
  "key17": "2UcNueaqtL3c1Wd5tFWmJvW1556R3VjykxMEcb2PXV6edkpk8V1Cdvrb3NEEzVaHUNF3Kpcd1mdpeckztZtZQJaK",
  "key18": "2MBnU5zpqh46zf6teZV7tsVNKZFvPhj7XWEYttzt6Leww6NneeUhqp6DvHuP5P54YTWcr9Rauw5TWofzCQgcEL9Y",
  "key19": "3SZpjmCFTmDMyv3xa85VVGEuh2szTqAGYDFKfZ9xyfhXeZ4t2UuN1FZrgHNtRMtYAS9dZjJzb4bX18nAfjTypEUE",
  "key20": "4u6KA1Hh7fFTYrF4dt7PCHCbiBqQ6pTenNh6b8AXRcyvEDqLiWLijA5PhXwXq1f2z4Qeo166rhZ9ZZCn95Ni7EBS",
  "key21": "439LzyMecFYGEiu34gL2GidTZbL7KUfA7vGtcM1SUWzy2n8LEMW4M2PHVw8dypck16jG39SYaz8KTG7zd2CsmXwf",
  "key22": "57CmvVn1zB6D5HFNW24gnCQ18CzuCbdtuXCfrme2WDJWUsZyy16cnL1ckN3LAUfpukatx6iq6qQ5uAaTziJs8J5U",
  "key23": "57LBsqPzF2ds7CW2PQZaqZg18wRsPgHjhBcuGf9HmLDXbfZ4hymfTp67NmWB77YNpKbDJYz2YUVLPE6N2RtVST3C",
  "key24": "2epBt84Xc81QyDxDKETDpoDnVAQX9WwxipRSmJtdbHirmer84q8X3eA7gWyeM4Ewbw4D57fXoG1CR6PZ1h8ygVDM",
  "key25": "5bbFYUWwXaRtowsu7pN9LMDg7iMbvHmYmkSgHTkDS4tfVYLyr23VB5ftemrqJLMk8hDzMT5bPZHdZ84awHD8ZEKz",
  "key26": "5iXWnKVh9Ky5euCgS2RUuRzXJzLiYgx5cP76fSiWPffFY6QbKcXpSbTQ5mY9bzoiW6RWDRvp5gW6j4erHAZU4nqU",
  "key27": "zMnrvbt2pSTJHoEpSM1ifAUX6AdCB6JtabgzX18Tf76Fzo343o3in82eECcTaWDcReMRbr3Ritv989AkmRNy3Zk",
  "key28": "2cDzFwqY9MbGJZpGrzNxpsM5XKHnnMVKcD2NXHGqRfhC9WJxENpWp3un4Fv8C4u56yza34FosetjrtSVvDVFZDoK",
  "key29": "2y3BdxCGoc6wPYBePJa5jfMHFCsSoajgHsYtNvVSyxWk3Qsdiv6d3mfr3gkgmqV9AL1GZ7cJKJZh7G5ZTy8pCE2b",
  "key30": "25ruBTHnYZbRECHc6qMAkjdBD9zXUdhbod5gQVLiGtfvJadTwDcfDeB1rWD5ub3qU6S8ts89ge12JH2DY8C5PtAq",
  "key31": "kuY5FGiL3uKhMrw1BcDx8a5Cf35VZAmzh6GviX3wd8PB28zu12JCRQ1borJpo1q2RqGL3cXdrKLH4BHTDY2Gw9P",
  "key32": "3A1dVennW9LxBFjCQdVCuZTEFnyUXdhsdtAi5nJ6bNAQKzFnA3mg5KFwL1kN4ZouMn5P7od9FY4V2q7Sr6ZeUcXe",
  "key33": "2yqJkW16s4WEqMS4r51GmpmJTZceGBo9dCjnpkSnet1TSn21S89pN9V4ULqXjvJBArxYRGM3TGwqAFoyP21QcNi4",
  "key34": "4xyUPcb7A92QL15Z1R4C3S24VVtQeFAt2MxVPcLMRD7RntXuchLJbxu9jX8TMqQu9pD9LCjXBNQEFk4ZecuvG28",
  "key35": "2XYhzLhKGbUx4sPpbNyZ6aMg8tMMWox2r9A5UNBeE2uCDGhiV1rKDC8yZu6GLRvciETMCX7nGjAjNfHioY8XFhsb",
  "key36": "52tbjvew8uk6GaJEN4KksPf16rfYJFAWTxRAdfxBmaC3P4NTFFzVEPehwt4fWyGMXvd8rXdAvukKu2ykyFtZrSmP",
  "key37": "5X7ZhQLwyP5474W2Jws1BxLchMLaRVqRXTHdd5bvpkN5aHZK5yZb7Kr2BaQ3rhbZaLKjp2TsfpK8hoAKiUWvNXAz",
  "key38": "THHVvkUHjnWbBwEk1BvxDm3aeURHNS8tBXFyBBhthkGU3jZ55CyrzkNQuvNyMfFWosbS7NBWTCaRMmKM66bxrNr",
  "key39": "3H5YWho5DmCLmoC6N6bXeHxN2uNPD3vhE53hHR2b51b7E7ExXmJ3KcEMMDzon9i29WygYTKuKSF9zRPMAJ26Nefo"
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
