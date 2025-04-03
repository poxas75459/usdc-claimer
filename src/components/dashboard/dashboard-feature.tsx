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
    "5ejSnPKtfuHwLC2Dby4j6Lj1y1tmmXaeZ2tPY3oPmFX2NkJ64mzCFBzTvCcmrgsDCpFAku9tGAtdQdFQvgjWMRj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKfM4eb3BsdWSyY1j9voGFpGnY2CyFtAPPDWzftnArkipszjQK4FHcoEScvyiS8bkLzE6MiCfXvx6buCm1rhDUv",
  "key1": "3XUgwS3ERVF4E9xeuHzo2KM9yqSDJA5tzugz7ybcfkGwJMFASaPe4ALSkpuoLGJ5p2LKg7UJnZxFNKfF5H4VGei8",
  "key2": "vWhiuZZmQdy9NVMkFKGyBRAUxob424bLGUffLGTxuGoBTHZTUmZVj3xmdH8r1WXVofGQWfbjYAnzPdkM6xGzKFi",
  "key3": "4rxBsjDVYeMi5DMnq9Upxv9weZAAzxeLHD8XqAJJCQ9FdCnDyEZ5q7LG1H5Hn3zXWCuq9BV2ifJ7g2WFop9bkFMD",
  "key4": "4aGkkezaGWi516d3QS8zz2npR8VkRG4Bivy8yXnEvYMjtSDECTeDeMqDb2Gr7etvm9gTHN4JrKvxTqfcJ88yFttF",
  "key5": "2GfpewVUKShoXcKc7BnZAihALxyfBEu9RqM54dVCVenLbRzk12TQQAHNyAHAQZYGVfoKF7pibXEUrik622zze64Y",
  "key6": "2J7MLxuuFPkMD7R7KdJaSkLeAcQTd3yKTJHKDcmvztemgCbxK6VED3GaBoQko6XPNPzbwx2LBUzWTBWDxuB9nhsK",
  "key7": "3Wq9PMXo7eBAbbKmXwDFXzbLpjRhehcznfMvU8q9ssbkFZuxksZ8YJCPpPjt9kNWBSxQ2QVeE41exJoE6xZtvfGE",
  "key8": "3Mu6SAY6Cdi5QWSvScyv2DsST8YSBikUVHzZutuLgPLDivFM3NhF4qYj553XwWRuMrTWsq3NBae48rcX3KPmyvnY",
  "key9": "3ANNfUxwkaZNeXK2dsDdqxjQknoBzLX8VbmzgHutpYYR6x3xCXCk8zcn6XtAH45vzdkob92iJugMJJMevfpVTscG",
  "key10": "2DL7e6SQGRnuZo66298is2TiiDbfS2UWHjWNpJE9eK2zFVM2x7PFfCNNkzzUNgzj7mScoMMXZaL8tUviKjKgNXRp",
  "key11": "4mDCtqXGXKtJyhewDbp5reMMrRRwL93hVR91gSNL9roSKC12CBpvspX2fEueiZzDtgu53sn15vTiqpJUXdNHSvyb",
  "key12": "4CP6bopyFHwKyjhtZzuTgBKD97d4tNT5k3HeJniZuLzq9dBrpm8CNqH5KRFcbxrRLLbpSaho6XadgECTLGricahJ",
  "key13": "378VLL2mxyk1EbovtMsgshkXmJdGgypS1d7iy3iQTaDotXapk7JpKVfiHXESppbBCP3E53MBsUps795z39V6huHa",
  "key14": "2A2j7GcxzN42q9h7GrKbDrowdkyBAXsQ291ryDqFtr7jVSzEe7BzkbDn7e5k45a2o3B5py9fgXn8sSTZRpr7AwYY",
  "key15": "58pv86NmDkFk8hupXwgpMQLpZPHs4fWW8dxJpNT3kJtuZtpv2XXcPAT9s6qitkGDMCcou9dbfrv4mYDoL4qiri7C",
  "key16": "5EY87myL7EiZcFPGsCHZNufeq2VyZQwK88gJrKBYVfW97eTC1Vh24p99hn7PP2KZenangCWN1teCDvmNct7TLocY",
  "key17": "3iDX19CVCZ5jjqKS2LCXdPkv3nGVWEDdNb8ua22XTneXNmbDhYNneNTpCk8qSx6ugUYMoVRpQgDgoCZAxttERN7Z",
  "key18": "2SmUKuT262LR7DRQG4sHPRpGfKj9R6e416N7CLXbJH5ncW6C35xmWqbvtyhNDo8UxVUhyU57FoJMy8MLbYN57qVZ",
  "key19": "5GvbuinYc6GaHFsETypKtLNJyYiyzCq2i74Jtci2gTqsKnZZJWYf1mmH7ayH8LwuKNQswpjQaf73zGbd72x2JDmr",
  "key20": "3Ytd62SuEVMv23HB5xCKgQivX9XQx74zVvJDMjvVqE3BtusTvbAfVZseiG23TK3Ggr7juuMaXMKf3Gm3dLoPQAE6",
  "key21": "kCTxsCphKyxXfCwRgf3bW8u7hc9Qi5GWrN9iMHAwMPYABuqfgQG6gDE7YJvVcES2Tss3e1vh6bdZ5C6ryTbGccN",
  "key22": "2YNZj4MAAZXGbqbFYZTfSoUVb9LsnHZqWBwMQXKMdLT1KLzPCJwo5BpHATJcCdmHcYtbvkataBwW1apVWZi7wGPw",
  "key23": "3qMKQ91ufwKuzqQDvgmj5AnNu53DHkuSQ8wGJtqJmaCmvLFVUwkpSH8YSxQQtUsuxY5nPx3FE1hymawajt1rNTro",
  "key24": "3s9wUzq6YTCuvSs5WoamqaMHxstU5nCZtfeLerqAgV5P9sGgrfsa7y4KMZLcXJRER8HB1PDCdwvLzrTmjC8CGAiE",
  "key25": "gdxPvajijBvNT3yyCGJzDyVpRG3wEWCQxmTd5KUBem4NV37qD5RrLRHwvQxKJxtGx29WCrSbYmxTdjXrLyzZwXu",
  "key26": "5YzFfLA32mbyFii7afyiZToPY4mUwXSxRA86ahfnmoh81r3sa2YTRucajhstDN28nJCLeb9aPw7JGEvXJeHJxxW9",
  "key27": "4tLzwXKNjermw4TLPbSLL7J4PfDFHwh6sppBtuS6fzeXFEzXSh1LtWbSXkgg85sXQFUYAhLYzyvYQssxgpnmukDx",
  "key28": "4dYdcEs2WwWgYAyA1mjLoQzp1SyqwFpAEHLJum9RtDeqqWV7rMuSAevTANXCCYjhLniPN7k4boRPFfp9ke9NkymT",
  "key29": "4Ucsct8sGxxhtpu96Ro7zMwukECosbZkHaCjJYZTAzkQLEpg3CPJE39Frtwk4Zwm19XSXcjiAENKPE7BzckpLxQy",
  "key30": "5SrBeo4SQZqXXaMEESQeqihq45xF2bhhRD6xudhuMZHd4pWyLSfAYSA1gV7dJZ4pJZAVUQycrc6wfoc5eEk8SuqY",
  "key31": "yewwsPJRFLaFpni2JnNhBSVxD8eLQRXvSmLAkXHHNQRUYUxttdL4Knyvi28PPAmBXajdYAmAREWF3EBhsWpMH8t",
  "key32": "26v4FSg5EkhWmCpDhTd2TKPc6sPbkhmduoSLTniEFGATGxTMPGYdNffu2e8XnR1VDVDfrb3ftLTgUK6QfZAPdgME",
  "key33": "3MZuvkqxMbcMDGVBZfKLnf9ZJsh7p3NbMqgUDqBcgenv4confzWazrWt9L9prYRca49rrBPLYaVs3wHszqobwurx",
  "key34": "3oC4zno1tdPy8Sx7ogV6HVxrp2Fe3US2Lwhz3GCnupyWi3piwptkfvwhy9HMR3Xag1w4wPa1GJU5fMcvvEEZprXz",
  "key35": "5WVrU1u4ufA5uCkHwrTtZLPDk5xnoeDiPyE1W3A59HVYWEna9mVS9QZek85LmF56ek4JSfD9am6g8L7dksnZEfrZ",
  "key36": "Su7X6UBgN8EUkR4MafEDNhzox9etsafN23Ks8h39Tatkmc87b8t9DhGAwBkvFhbmVyR8TFS4SV7xPT4reEnD1Lc",
  "key37": "4k9q7At8Qyv3EW6Y7rtPC5G1V3Vfr442hM5cqdBsMFijnPxf7ew2DvLr56uM4AS48TasXZe3NnmBZGtScUiNN4rf",
  "key38": "K8P86ajkusVUaMQ2BbocQ9juUhu9pRaigYAQzzd9QsuHfFUnmeo6HHjyWf1cAMyxU3GQfYmc26jnaTPHM4Mjiyi",
  "key39": "5bPevpsqpeHREpTpPxsxGMPdaSWmaqxC258kiy2inHkL64WknWpEv5Nh5dM9eeFyE5ZmxsDax5XPEGxeCndWi7Lq",
  "key40": "5fUqfVQHaWUHgtZkPbMtSsqs3jWMavNi8oitwkZJGRSC3m5ByBdS9279YHLnKg8QinPW8XNHM7orHSLXkPeB5B5C",
  "key41": "3wgtexzh6S8YQBLZX96oVdEgtdjAQeY16JfGbj1p1WxBkJZbDiQ52F2NYXPLGPvrACAJH91cMxiHq1JX9F7uzVNE",
  "key42": "RCYNRfzsPd4TrnCprtwd7WuFPmq8SopxtSGYfcJZeac9dkNgTUQWrUsCdQnkvihDcDLpVkMKk6rykbhHfDFHfTE",
  "key43": "2GBr1BQKigk2gBxfWw2uXJFmHPxKWYAhPfQhcLXZLGeVnz5zrBiuxwRqTBhCJRsKtv8884uuzpSg8kapfy66sUCX",
  "key44": "63qswzvfNRyGUjr8zUMxiMvCf6iShtgLbvMJa3oUn48UrMAbRKVPMuJKhFnj7ZDZB7y3LPX1ckf11wtZSRnmoZ47",
  "key45": "34pcSj1VTgAaWxjbjmSnHRctHHwLVNknmrT51XrWRurq8RmMcwEePFaLop39X3ojhgDYB3Bv1pZ9WgyGuXMdbhB1",
  "key46": "W8Fv2qSNCZkYQQD42rEdtg2AuS6x4MKhtEejL33TL1TEhQYTyPRDSvzbhsmTY2QabR5NjtEUaNEYTe7H2mmRufM",
  "key47": "4EJRPhL9Tq92eceAFFhi1BL4AoJL4BpSdCsWGK6RfJXGZ8HrmSsaZSezGWteajGwAmKgeCnJMLbEJDxBQpMbJfr9"
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
