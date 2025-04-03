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
    "4GaabBEerVsb3jinXNvry57hqSdzPwjuN6Z6Yuh2adUTwKA6uzHXbhVoMfgkwDqfDhzQWWSBoLhpKupdwifR4Qo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P41Xx671E4koiJPZqHYbuS6ew4pVPA4gGvUoEoHwC1iQp2wdan2gwBcdFEm8WGABa3enZh4mRE9YEZkhrX6tuke",
  "key1": "5EX1aVoCrUSaFBFFBC62HBE7W6rizxCRwbqzjCr2EhDSEt6vRbXZsiRrS5YQGwNVavFxpMx3EE3WzAcT9fGLcYur",
  "key2": "4d1TW8dkjcHmPicXCxdtq2feH1GNBnJhvqrd4hdJJKwNd2zHRgiWLvQ3iTgAP9bsLr3AD3TTkGoScdPPMUfnUUfd",
  "key3": "XpnhbwsWwVPMfTyXbqB6rBddFEH7BEk5T9to69SzcrixzgH2uPzaKTvGYSrSknHuuJzmVMsuA1R2S5obx6quuF2",
  "key4": "W8Zso44vwZreff9oo737r3dN5yieEkFwhmNsMdyXEYJfTFAs64NfmZwSsR7xSucMoeSHhT9db4aCDPvAPob7Awe",
  "key5": "MSeeYZz9JEHizhMNkYQxme7e9PS87xBTYuRVtCrdFwMypDPeYLNQokTstYLmPbdbWjEVso7gpp4QoJSMKuAeNBB",
  "key6": "45b4in8kNNRj8hjdCf3jjavXkjZnDRWsnM2JNG8UMkCa9ET8S4VEib5hzNWSnAuHoCwpjmEL57G6BwXTYnakVWDR",
  "key7": "222DpQdNuZnw1uhudsRABgzESKVkqpuvuuHUBtu3SjoZEKJ9d5CMnA39g4y8tCsWCtok1BxmNZqS19H5y48f44Av",
  "key8": "4btTmWw4L2D8k2z1aZDNEhqmYYBqTWCUs17SPHSBenXa92pYoxTY9kwca3GKNZP1ZR46hmWcJrsMSvkdXbyzc8SA",
  "key9": "4FrfnGd9RXGMgxnAmb8gmAsk185miwtjceozKtMwbFD13xdr97GvQwmibie1CeGgiseHHZaMQQxDH4jFhQqxPRuT",
  "key10": "55BBUHkUD1z2V1cKhyBukLE3xnxGTH5S3rhk3egLYPDSjSHzNsWGZvRzYDDa7141E3My4oczjxRxPSXsugYUTySP",
  "key11": "jXfrpUedZbYKkrvkWvPzEaTgGZNQR7VPLPc8TBiQBkiskf9XJuYZXivtVgHStVzvzeWMXZDDpwJNqCc46vLrj9A",
  "key12": "3HVKjtQjV2tLrdFyJfvYKWua8UpvpQu94byJALHFQMN8DViMEdnQKyL81SkuK9ZhcaV88wp2b94Lv1AgPidh9cxX",
  "key13": "4gcCWBfubC9Zaon236DjB5avCaPBJ2HwA2jjPqVJDCDixUmaUY5cQSCioNScQdhGi9mYbdg71ZTUw5U1GncEiEWF",
  "key14": "5e8eKsq26qGvMdKMrtaT6ikndCDrspo56R1DToizKaHsgYd3ph1viSHwoBsLcpTBmBJHzzQiVMaowpkDY7xaKXmQ",
  "key15": "3dpssTr9PRTpiszsjkk7mWWnYDzEQT2vGdTT2nncFUAhhpCLcdjAqWKZ3TCQ7ULsDNMkUe3p69vR5y4qxCk5Nmor",
  "key16": "4vt9ownNoZoZm4EtCLiDjYtQAefxGiAytA5RS1hxDgumUWc922oYMgCAWhpgxLs46kiQfzbb8wLkmEkE1wZtogFa",
  "key17": "4SQxG9Ko2DeQQfK3JcJK8AgLVaJqFSWC635UmmZDex2rXdaUUfbB1kggQi2QAyJ7ZhWZkBxa7NFU8f9Sdseu9VZv",
  "key18": "4xVvdE41V3ZkMVrMRNg3Q1aSndzNDXmpSfZ4gFxhmJP1gcVuuKHzkQxxmVZVoUw5DyWHCQ1Vjbeaz3UR4gw4hNAZ",
  "key19": "4ExvqY5WwRYEaws1GwxGKg5yN6C9zSJvEKvMxPJN5coY877g5AimLhgRQfpUPtsF1nEdJbQ4Zrs85hqyjgG8j65b",
  "key20": "5QsyDDbD1v2wo4sJ2ikAp3A91q4gM9rxu1g9LP2YDR9Ui83xUNkgdnLHmcqfWQHVzT9aHNhb9zqYHQqTBQEoJGEW",
  "key21": "26L2WgR5QjKCMwSGGRc9CC1z8PMtxzvH2P6enBkXUTggUsvR3XoJNwej4rTGoz5V5sm3JZqVcdxwJpivZ4Fe6D3j",
  "key22": "26dKFB8xSntGZEqLi7FZTCXzyjD7hUd4VgMR9U5JvDFaJWSpsetDAVN9JwGR4YJzZnwFQcdAKFiLG19CkJsJwhqJ",
  "key23": "4dd2Mhgm3rPdyc5kR54AZELnSt2JF1ajwVzgDE4si4WZkid2NMH32XYTiCoH41ksCswm41wMoM4iGQmFQUn1rK3c",
  "key24": "2zTD49SU24TgxZgjUALBd7FoY3W5hpj8kQcp7rV16RMDZRiZdPm6BswzmDYG3JcTPyvrs1THwvPudpAPFpqGHBjJ",
  "key25": "5StX8YADiBD397rh6wyKeiSgKW64XCvaGBBJm3bAwqYLAxdGkYZQuKgXfsSNnx3dTVwUc6ZYVpVeZhhMtc3KuSgG",
  "key26": "2vauCBwjxBxeDS8LimUYpw4nHtU5yEELTRppMmTcExv7bdJX2Ts5uECbavUUqKFyejX3wsVryNBeUCJJXbsLYFDd",
  "key27": "51dQADwHixMdgs3BLEzRDFXrayc4aG7iMn2nhvigAfXEw46p5bujnjUf2Ch66zeRLf9ZYMpfriSJ8itgrzpQnEPS",
  "key28": "tkaruUBpUVbmSe35nusFzyw3GkF9bVkVkxPTwyAATDpENmPuVjwdcwbTbArDpvzTiwXvGmsLB6Lig4Y3duYhUsS",
  "key29": "54TD4uPF8tWqe6gvhh5odv9hWG4cbBY3G58wPTW6rgVehq9PmjbKzLBQ9bud6p9PywbyJ1Nat1T4pusmxmy4P2Sh",
  "key30": "3vg2qsZgiTjdVicipHZDedyCLc1stVS3mYrpDUJUpFYVoHuEKidgtk9R3yv2byqmyCsBc69MiN3iURHTXace7wbc",
  "key31": "2cgof6zQJ3X6S2iMm5EPhx7jedUQqdqkChGYLWLJkbbBPG5Kp5resuZoHwG9aNTb6V4xVEEEocGoZLjgf7Svi1ZJ",
  "key32": "3F4oRoEFDsbRjidgexHo4N62xQV12BArFQkA4VgGNAu684YCCqj3spBnyuiJS2xfjGjnhXDpsbhxu2tUopwuA7yA",
  "key33": "65r4U1GgHejiAS3vrkmWgiwHa8rtY95xkTo9aJ2FRND9kBDCBy2t9Bwcq5bV8sbB3SxmoGFKW9bugr2CMtTgwVnU"
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
