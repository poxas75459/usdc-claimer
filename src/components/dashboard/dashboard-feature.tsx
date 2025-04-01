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
    "2tDrGzpW3XsQBBjF9eWEire2Q8evLc7x8jyUR2WjW9J9rAc3XBh6HTDJAgf7TmyKu7F95KU2XNxFkAKqoGwbZDcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GmvZ2Ahf45cdZZ3bX7mj2CsqjQXz3UhUHhEJM7ogtvkMGhGWkfQYotLzw9K4fAwRAxjCM3rSJYqnaHdUjSoNA6Y",
  "key1": "4kT9Te7R4HkvNB2qx618ZunRy6m2x9U2MkEhjCR9vEgMrVv2Hm1pZLowJB3dkDtFb9xstqx71nvpREvaRxLBS6SH",
  "key2": "2KZ6TpyH7QifyWyoymCPmvSSKcif6DjhPe91RkM7Spf1UU5sMxcg9y9yWuCddV2YztKioUtf5NigLfgBhzxPfhHN",
  "key3": "i5MN3DNdbVp6Pe9pdN5TkVEQZ2dNCeMZD3A2VFS4Zfvh3yRsiv6hcRBpRhEeNz2JZTtrR5y2mcpNzqH3gRQQ3xt",
  "key4": "2Dn3fXMcqD7WUQXKpXEXnfHaMYF6UxNqDc9CULNFUbMvSx2WDRLRoFGJSpYzGJpuT3Q46tRGZ2uYDn9jx8NWFLom",
  "key5": "5pvinUWvagNZ6F4EaSeLzRGXKSNjn5GsLn8UkK5fnB6kyw6sAAj197bpLtLoGm1JAB5Tbuf2jei3wcxyyo6C5Exy",
  "key6": "Yms4UAoHWoTzvTvAiXSivLD2Zztq61mRvRP7kK8hNdk5ED1qEe4T5tSteyv67rnYvCgJPUUqTWCexgWFksLFiXM",
  "key7": "4KFnBug8SL2Em5oGLfiV59h6UwTJq3TxnFQuBzPQsXfVFa6d4SXhCsfQUHeHyVeUgJVBnQMPfE3L5iSWWziJ9Tsz",
  "key8": "3LpNE795iQa7V4PpQtREQ5xTrdsraN36Saz5SHsJxDosTrhR46NxSqSUD8LgFG5YYX1rSrkrAN3c1UvkPmPYDaiM",
  "key9": "3ArWqReTpmqQRA1gBf7g5bpbUVzzbDa42eJvTo39MjFKXg8BHqWitkmta4YFJ5Yph1YUAjeCqNuGUfDpVGKppg75",
  "key10": "5JQ42GkbSz7cbs2LhvdA9QHoHZuz56BLq4beaqXAPi248LhmBkmggjw5kstk2XsEsUC7HQhEYPVRsDCPZsZa6EYC",
  "key11": "2gL7KCYoK5TfhtpbiQNLbxX3D4dvfEchYHuTiG313G3RCDXV981crahNr3DSDJCWvRzwgJddJBe3bgSRFGdj4YTh",
  "key12": "2QJrN6Hfp5UiyFdXaMDPmPKyPFaaPCzRrjZMGG27XDofgxvAvGpv38RjgMmGr3q89Tmyk3cp7RPcZhVAJjgwFTDT",
  "key13": "3xErxdMHyessXveWcBEe7gdLa3gUujuAxaMYDY3Cc5RXxGTuYdPPW5K1bVEqozrMKDhmBz4KwH1kpKgRAm8FBr2r",
  "key14": "4UxQpY5vRAkusGUS494mFiK9YB4gyjM5MRUQqHGSap6bYZfyoTiS6H62BH5CkSiCz3b1VSLq93BoV2wSVwSvjjEg",
  "key15": "4XoYCZUKhmVXdf9tXT1RF3HJGWAkiBiHX8ug8H717PKeCLPyrYjG867jxZjkuUGadTnTLHLaNJBLEeWA5R8Yz9Mc",
  "key16": "9vS3JD7E3Mn6SAPqCpnj5EeZ2bkKvdve6tVFLdJMk57zqxkfibU3m6vGLvYHNfQrdwVTj9ShbUxTeiusXWkRaB3",
  "key17": "3poBkiwdJfX8xPCpdk4FpDw9F6odDHvPw4iogiH45LAQDqh1eDDBxzTNoGu7mtDwtkeuLSMsTU3AzoQTGThLWPNr",
  "key18": "48FUMYyp7XNqnTr5wDMrguehRKKPuNDRGWzRjQ9ADAwf6S3CFnwAsT6doSLJcvZgnyeQUVEG1fZD4HwprVA1tKMC",
  "key19": "JReWTJXVps95vbd2Nvxg9zfrpHwMKwB8qowUfohX7ETfPeBbLjwqokqfcy6BGrRq7XsShMgt1hc9dbmeFTif2zb",
  "key20": "2vKo4JHBQJ2mnazPNM684MEyDHFwLxmnPaj9rMXtPZv6TCSEq3EiQkvPSYuS2rxUj8AusPaNCRjpcC1xa1PEJXJ4",
  "key21": "4TYg3zgkt3KutCoNoKTujDAnmRdar9skPzXU2z8ZStAKRwuRxtb631inh78rrA5FZvefNEmBCCgxV8CREk5ZYdNS",
  "key22": "5MepjpPTtqE2aGC14gvfR4sQsxmXtuhoUcZ243icwjcVEZ5pMBQH2Ao9ovrchh7VhHew9KSh1fx3rUpydjTdNoQh",
  "key23": "2U98xkXL26nmkyAHRHLtut6TaPQx6RzSxSm47EoVQN13L2Y6aeLcr71aM1913rTYJgJANqu7fuE88XuumJ85wt2c",
  "key24": "5m2P3kJoquwkoGsibg3Hra7x3W41wtMiuP4n189t9TXXSnTXiAqP53KTw9uXD1WPVvyUa5mHuL575KahieriWyvY",
  "key25": "8tpoNuYkmuyXgzrwHmxKMwPP99dH29zjsaym757ta6GGRTdPKPrizjuzELTCHNmDPTW9xgEcEYTjtrPRtBhSwaQ",
  "key26": "5tm1vRJofPymnKRSu2EWS98RWXqXZWMpPcFmvRGWLMvfwfq2RxE9gfYAHUDptS3XkfjEivSCktDwZ3nZfmLdsDbw",
  "key27": "3Tr3R3oUpvesLubn7R7gpBVGuw3U9PywUAQbBohS83nfD3TXAj8zsXyLE1ANL3mssBSjE3uBddwoHQ76QQrrtJSB",
  "key28": "5eLtXwSq83r8peRdNBEm18Cn4xBrxbWxEAD1z2MRGPBHY4zvkQmveMkh4V96oYAGZRxc5HbCrqvzss3jRtBzAZPo",
  "key29": "tsXx2WTYmSw2EZNW3QcAeo4RHbTtmGdxxM1nKMRi8DtuKCzfByq83cHhkm8aVQjALXXm7ujAJu4BCTzntkmNXGp",
  "key30": "3gcyTevqvQaU2VTDjEqXwu7bZz8EnnfPywgrtUZpY8MuhvVe9iG9iEaWngXxeLUwoHCyHmXCzJo8MjXeQhNhP2VP",
  "key31": "cCdpTXcnC38ZMrXeDz2o6VKhGV33PSocyAr78D7QyjMdkNRsvmbKXcpzvAaiVMq36vQ9GXoqCgXb95M48LxYprc",
  "key32": "5g5hYqwwHFrFXxGEvFbk24Lr6LrUT3ty1uBE9j9ztrTLTrDtdxC5xiMmLr1Vq6LF8LDM2BpS5HvR3ePNWVswRM3f",
  "key33": "2bpMQQHBXH8ouP3Ww3Lh6uSdznTnY4MDsE5ALU737FECuLQVdkuxFqgR43D9YJ8RkZR9oVqajJg6EEo71AnVckrp",
  "key34": "66K6TrVcFoRbap5tyDbqPAZ38DZ43arCoKeQDCRJpd3k6SQeqopZ5oWzg35p5pxNpdQw7Ba9akGABjefvQu3eKoR",
  "key35": "QmeuKpkZgCjBLjZzmD7huk5zBS6pY1AM4SPbmaifEqi83uJFSUMzyhHhMzHDTz1DrcXL1y6Y8XmahKKWdDYfB6R"
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
