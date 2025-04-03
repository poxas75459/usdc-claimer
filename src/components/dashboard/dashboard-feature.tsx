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
    "2MxVHV71y3tr6gzHMnooYZanE7GBFpNEaSKCmmHCzxy4M6akcKMMCgroa9LSbMEv3P9XEBdjbe78rASQchsgTYBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Satm7bvun8xBVUUWxF7NcKpa88UsB2gJudYbq4ypPeEc8n8iTew7yKJuB4KUMdQogYTt3mxbbpzNJKeASYykAtt",
  "key1": "4Bs4SdzTbmvfB1EC9dHmZDvjUu7Xzw1vCpcy6yxMBBVob3XACJsYTs8stxBGByipfY3Z71bYQJTtK2mPCaGJd8Fz",
  "key2": "me2FDYYpf2pEdpUBBKBpFeYqjfgGL6zTq9GPEG2uvwZsujHXXxuX64gJ4NvfYnpyVmBaaHCZSiWEyhf9MNibuyy",
  "key3": "3UuePHny1NZiTZ3nJbJtHpxvY2naCX3F7aZiFMJarNJpt7B38Uut7K3z3RRDiAvrcJzJfnENAcv4pk7EEv7Mgczq",
  "key4": "2jrt72JjdntL2HtUZsUU27XFc1knrgg3a5jAvxeig9tfbDjSv4EXY2K1pYJvs9ZmXQZApVPtuJ9eh4vNyRsHfN17",
  "key5": "5CxDxGAyj9UFaoxo5gCJEjVYMHXTEGCi77qhvhQJ7zeUANQQQUdv9MN8kfqQTuc4jJVpm9j73XWNDLqudgDXSxnD",
  "key6": "5ZtWASUFyLoZcc4jNbHqk2krpTEPE3soN5axe3HRFSKLSt7CRRFTHU6HkRqoK1EkUF51HtT53eWZet6oYYHh7d4P",
  "key7": "4xb1RERU5iS7KXCxSZTgsLJc3q1UB4H53tzf8H2mJ2WVpwttb99qRgmkJBc7BPePReqcWvfM295o6v5j27yoGdsB",
  "key8": "3PwjygtZwem1aumBkiCTRP9pouuGc4E5U2R9HJMakzsmqmR7zGJoyJBm5FmkUriZpbjnH11kSACjRBV7ssR6krCH",
  "key9": "2YpfKRX5fPP4E9xcp7g5hLuXeuAK3HQvh53QpHCq18zzQ47Tc43qLrSHnSVX4Bhj2uuopW2vSGqSyKapCRs6iste",
  "key10": "59ofRKu2YmjtcV2yNNhwZmbXKGA7YuHJngNpBaA3x9ED9gwC8Z9vdTYeAte7RxTcbyu8aeZTT7FqXzoxTHVUbQuB",
  "key11": "2dzYW9qsUMGgxUzgKdKorunwbHBmXpPE7RYQDGY13e7o5XfvDgmPsTBWH5zZffwDuVftAEzRjQu1Wbo8hHwpExrF",
  "key12": "3XvEav84BieyvoEYD1SUnGwZfXQ6osBLgEbbFa5Tf6ZYwiqsZSTGRicRPWWuuHwfxhGV83LPQfjobcBY638yvw2u",
  "key13": "mWTdiyXCdeFBCcvDX6q4csV2sCNUiGE2m93mEL4GUubNTi9NkW2Ynkq9eGxG3ySp3Y9uwoDbvBgf6d5oA58nNPq",
  "key14": "51UZujkAEdhh318TZSsBkZyYnWQF44HfjE88v8NVsDiCU3k2fUq7N9rgkA48eEaoLuWcGAcWGMGFE68W1e2dXzEc",
  "key15": "4a7uVs8CN4P7o5nQB4ccyPKzbKAEnwFqR6tx1EeUBVxMHxyHL5tPHhBS7KFhZseU89SDvPpeMBd7eEFjsUJGsyf",
  "key16": "5XpocLp95MtXaeXksV22uooHNU1ko7DtPPwjP43AtfPpZUdyKPcs28o23Pu658whBNi2NBQt1MHyM2mh6ZXKgNWH",
  "key17": "2HjasFWWiUcJgK6DQL6h5h8DAEXb7V6K2sWzEebyxQMxuieLbDABXwTCXqmWc7UqYChHkWrvdtPQEYyxqwFkF74r",
  "key18": "4LLwATWT9zJCdX9qkwHGff558eXDzXXHinCQ6swAiVG4u3wm2NMuBZXZWnLMwXgSSmLwCGpSfb1mY3YH9qS1XzkB",
  "key19": "5MMo5LGsimm8cvpfe4A3cEyYyfjXbULzm8Bh4J2H7uvrKomP3CjwruzrUs945uU7T3JMmJnGgMUk1mwqeRSLfTrK",
  "key20": "5PSvWwyGWyxcuoU1ceDVLkEpnYQKT7APaQVpdxs5K5cRoMrCnaTFdkZL1usq75DgXGDzHhp1mzVUNPue9mJ6rUwS",
  "key21": "2MFCVchRiLeg2crG6yPNEgvk4gSzBsJkUQ3Cuski1kSL9U1XetmhyA1GEvbqH8cu5CKoiRRwCC5RFCyZw8BXg2Qw",
  "key22": "2fPGt2qzUBp8RWnEuA3oRKMWqiZALUprbTzz6siHbE9NBZ8QYeQ4hBy345c5qWjb94FXCZ8U6x287TpSz9metTAP",
  "key23": "5Q4pMK5wWaR39HNXNdMeDDF6TWw5tVKXPZkR44H8dUHh2JC54A6KuKtfUJXfZxZ4dL5HSypdpr2Ccnj6gdVgZ4DM",
  "key24": "5Hbma7ENRhmAkKSyqxLd9GgVdLJdw4yJzyRGozb7w4wk4CkNXsN6WdL2CkwGNLJtpfhj9BC8fUsCmcD5teExNDj3",
  "key25": "5VB8btDYRkW2Fp7Q51YuAtzxjpq4qDJtSF6nmnoCB6LHoqHrZoX7zohMhzftyo1RfE2SUk2sEPe7jaVA1BH35tc4",
  "key26": "5msiAV7wX2Kv7meaPHiuvxL44kiVUw9AsX6T56DxrNVvZPxUd4TVj79SAkW8D9DJVm6U8vGpizoPQku6tMatMzik",
  "key27": "4oZBV6bNeiQqbxTbksmyGPoANV3knP8sKVwUbMsTovoEe5hbZ9ZdM7fSWufEccrEUhc1eLD3uc4TC3mwLYkfHYXZ",
  "key28": "2BxHDb49C4k27rZ4K2g9BmEYVZCruAHAyHFjMbub5hEXGqVzp88aTNKAuipfL5f23uqCKgnTCGnspkiKdtV2otAi",
  "key29": "ebpcks1Mo9NRBch8cU53ShxoLTvzJny8D92mN4xufhsQWZSgCJ352GMpLZwoYiECLTwFfBspa5hDn4ZC8usqnoR",
  "key30": "E76WPHX6NmwAue6ZXbbVs78MRinZHtaxmPEGyJUP2BspJyQYzv2VarSbM1MC3CqnxRpAXvFo86M4KUncaEjviDu",
  "key31": "4QK9UTH1CC5tEsVtJGYVH6siPLJyD2nw5oiQue2WtjwWEs2FRwBEwj7dspgDkYwJuoDd86HHRromgukeiVDmmYq2"
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
