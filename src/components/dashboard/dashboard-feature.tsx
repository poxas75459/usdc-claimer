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
    "4foa9LFq2KKWGPSTdX79FSAje5WCjVkvmQ54PxsmTn3tyS3HKbsSfaP7i193ji3g3JdMurkDc5pzuaCKpSi9XtQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48EwXVqPUA5P3KDt5ULM3VCLXPnjnXj3ZVcFbMYmLN8kaY2FWAQE2y8fAZTddN4kckaypA3CaKHT3uwvTEHd9PWh",
  "key1": "xcJhYBBVzeGA7J3mUL4kXPJ1oscE2GEAY8WyuPfa3dpBcozzBmBhwSQEwLqiDEnw6o8Bs4YbRsYYXkEyyThvuY7",
  "key2": "3EyubZ5moKo51f377n3LWJA2He5ZK6KB3qiLJPvadPsiY2p2GNqhaeEUfWbAPGFZWe9WQHDerLm38vQdgCY4ZYsg",
  "key3": "QVmtQ2sEzcazzbP1GZEWEW6Mbfwfj81EkLAAF1LTg88ZE46cQCXj22fM6EQSG92xHFbZc8Soe82tJtscVP57Tee",
  "key4": "3n4AhUpejprFURpekrgEFzA3q8zmoyQ6GspdoXE5YrqjRYEtPsmTduz3nrroedxhHpgxUJEtu7ovq1CNVGXLoBzY",
  "key5": "3qoofYHbS1NSG92EKbvxErn3NBTxKYxLx5yCFzvmdpqteeJLQEH42JFrZwvdR4EVFSujUBeYxvUevGw7St4TkRfC",
  "key6": "4zVDwofm55NdT68SRmgJvdoc5dhpSeSWLh4q8Bw1azvoBdjjDjsCLMTqtaNEnGRbnhp6sHYe4GXajTr9EkhXTs6p",
  "key7": "638qgR3hU8mAGiwVS2SuHGpaDza7PtT54GTWGfJgnxN4NMukCJP5rMY8MijH3AY3KVxbKgMEw9akdhPzjWfbYiaX",
  "key8": "2nmaw5zWLnw9KRqLNw5Le69euL2qyT7SCNq2txBK6MuBatzB7M7HL27X3C9VqzxVNr9NpPE5iYFi6VpCStge58Cc",
  "key9": "2Zp39hdZHY84vxbLcjHb5UScURe9FBvEzwZPPUqrsrg7b92XbnfpShdvcgcErtFM2o9Aen6gbixRECwCxJHhuM1G",
  "key10": "2QiZdgmp9Kite3QtoycwQdQQPSaAoUmb6Vpu54n9CG7tCYiAx5MH2gmwL7mBPmT3BCFFDQG9AGW1pkHntuamSRDw",
  "key11": "64gM7KAbnTmHnbwJfAMH43ePb9QHUpWVJ6cNKAoYwP6UdrAQczy2sj1vxpJN16Job2WvihhdkUNdXuyavZRrCcyD",
  "key12": "5CMV7ce8SzDGqZi9dH5sVdTe6TLArBnKKYLzskqgVKEV7cwsYcmshHQ82RnfFWwo1JsE94GB59BnVsCywduXNvkZ",
  "key13": "2GbAodZQun2SEvd1CSQiAAGM5rddVSg1wvr9AM4BaZVrgzkFR7oFXHYexL1W3ffdEDp5Ro4kYCri5Rk4sMcrGba",
  "key14": "2JvPZ8GvVxVxiYtd6PgV7AT9vnmPVcwKGK4zujV7zRbz2ZKSLKyXxSs8bNLPhcYoBpFt6Tj2vm2eGeaf6ZTaHLWP",
  "key15": "Li4cYWrsDj8cuP4j73fSANEcbHU2dGq1F4jEf2hn4njQL5CnrSc6ZUTesQNf12rQJucjCTWwA9Y6nqo5E2aMy3o",
  "key16": "4Sk6ZZUoAN52GLRLW8845dNw3DV4WNT4C8BESmCAiTs3pXfbKq3diJWeTPbXbcK5bHg46sCrrEzwY18SfnBAZbQc",
  "key17": "2pXwvsKHQ33WwYfh5awZktq4LNMrQ6T6ZCzg4MySudPsR2mCMcvGVGQvgd4XjRHsxPXo1cbtQMi5wr12iTYu4fR7",
  "key18": "4ob2dbZcPSwdefhZV2sqsYsQzmVdkPtwf4vHfNjE2ZTpGhtGhk7Kfnwdq7cFCoTgFqNRn23ZPvUD5GXhw76qRWJJ",
  "key19": "5oTmA6z3if3okeL6wAjBYVZLR4QuLkUcJupztafuHBucJ7Vfj1v1nGXt9Z2rBsK9FTQYaXpmiwRZ4gqyuw753deK",
  "key20": "4SLDbGE3gYcUHf35pPJ9R5jMQWM28xyf9HdeZi1LiT9nNrpyzZeFhfHhwrFYzRXypcsX27y2jmhpbJAxGyKpK82e",
  "key21": "dqDKpN2LFF7bw3Mv9ewE9St8Xcv39pEwbct1d5iBJacvjHoGzyGwc6HMiRfLUzV9fsGY5NzBmF9WVLhbCk2WMUK",
  "key22": "3tPE7pi1TMCERL8cw6uKEpBG3uDw2CtLsEMVAsCoZ8bQjMBcHBeKMT2zZGEPyqJYpDXj8zkSdkarrXRvZWi66529",
  "key23": "3gtpyPV3UrPGb4UDx3NZ87c7iJpJwmMoi5FbfNwRwkf8HSooy1pwoQqCGtVSXJDURKj8hYwJZydAxkbMjrv7jQAQ",
  "key24": "QS9rohDNSBWQvhfms5TLGoNhkLcF4CN6Gi4jPeKkVmW4DqmxrXZETDPt9XSTPWkE8KbrDzMwmFdkixhSeH2TEg9",
  "key25": "2qrE8NuU3R9bJmR1GYWNnZcJara33boUZaaWUH2j13eimrJL26LJda71QhQjgQ5rWTi2T5jzZDbCbh5ERocoeYdL",
  "key26": "3wT7152QvmcDS8uehoYeoJkqDH1NNthDboCE7F6RiWrxCHYRSnbHVmTwFkhK5xF1Ewoav8x9DCi5kjDhSm2g8yoA",
  "key27": "2eiEvrjDVuZe6KCXETrotc5DAVWMGwEjPWDeqZLFfj2UoB1mxgFVSaYC6NCPfyN45ie9DdJCiB7XKJqqvE4eS4U2",
  "key28": "524SyuWircVdCE9Sb3kih17hX5sujgqXy1zkVLzwHTSoWK1d4gBMoWDAunARFCj37ysMM1YjVjhvqRVV8pYmzQ4Y",
  "key29": "5UNndt2qwnEC5ezfyVvc6vEGyANiEUVKvrLXXGSyYCj4CW6BihZZG5FGLhWFWVFESTCFeR28CmQSUeAgUHbo4RAz",
  "key30": "4mz3jZWhrumhypAjKEUGGsvNT7XYCP6dV6D93hG54iTKTkCFWTPzSg3yEjWyPzP3aEm72az9jG7rYw6X9FxSWjWz",
  "key31": "2wQYZWras4wd5P2C7vZAibG61uYEPZgm6ha9NYMfiaHKtdQKPLqQA6QYBeELfijnL1AXbNTQhxzdT1dKca3CwPJ8",
  "key32": "5L63DNuxyP8XZ4zWxN7HA3K5WyVrXxmYmsA1yfBGAD5ZdeEGDqbZi4mS9pQMpesEWowSyTcRtYmdofAJYXyeowHW",
  "key33": "64NzPoMBNsxcArNBp99KsEoRPiZSrPrFKo9VSECMnrJggSygj8Evf1S8TsTTismCAxzcRQYiKNYxVZeoAwzL3i26",
  "key34": "5YntaMVgFXoY4ju9ydcxM2997kbAjqBdWZJS9CSMd3N8z2AqpvFBrnUcxwJBMxyeMSPXh77guKkJBwCa9wJjMgWU",
  "key35": "RNKDsAEK9P5zj4kBg2JwubmappEoTkQm3tNagJAWjpZvdyAWptUsh4XS1ARd4uBtnV5Eu5B1Z1etE3GEhTbY1BS",
  "key36": "4RiFJ8hJNxUT1tZu2uE7V3qiqrb8KVZmpJN4UVyt8U8671cKJ2hNgMByHsaWHF7CPo8AACxXJkcfwr6jGKjsBuan",
  "key37": "3ZBpargh57sor5Y4nTPPZ9NEauSD6ytEe5KdCkvechNgGHRYEihp3bAVCNQQ9YxZTWyTFayTvtoQ91J7G6XdAVEo",
  "key38": "5Dx1QDmJ474HcwerVSL75iDbHfnXLyrAzJjQZSsDXts1hiPq6kzZ1EX4YTcWCnyGFN3TGXiSgP3FkhRKovyzL6r6",
  "key39": "3br6DmhAf5uCCgi9xumYva2tdsBuEd6nQ8zoC8hxFi75EyTCGShw8gvWLMYv31SaAvTqGrZYif6qxhCV7xrp11wM"
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
