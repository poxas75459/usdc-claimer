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
    "4u2eBQN2y92iQAXwHYZurTaKaeS2pZqANZrG6F2PW2sDxikpEgoTLLNoxyj9BdqzMSx7eq6eFvoVYKmsLcZdeGiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wbh6HdvahYPTyk6PiLEU4k9RJzWWv63EArQxPE5u8VVVe5MAsEd3txa7wpSNcE6XxNZs7smPWCkoF23RzSVENi",
  "key1": "33rUaLDge4PEgdtcwcDQJ4zqhfv5XiqPD9kZKLPRPV2AHQWeZrGK9LXQ4FX8AscUZxWopaBq6mRXP7htv41TRnan",
  "key2": "fWeCgscxVoDcVwTStZ6XmmyGy8De1YSHsHirb4vaUr7HoHufEAPysATrJ3UzkKv5byyg54K7DoMYtf2mTwHoQ9z",
  "key3": "5uQDvpyNK8nGiddjwMWjaX2xsRKAowM2GXTvGby4VWcTBUf22WWJxSyePQ8k4v9KGWCeXVRt7PDdMYQWt1UQDWb2",
  "key4": "46GfSvEw3CQr8sMVN2WBnHTobVzWeEwFwnWo6yqhAxUPxmVUL6Q58CxQRmAJtynjRN8NbxwraiVfBHLD5HiAHZ6F",
  "key5": "438D1GMEZRLHfacbyySdKgpUHiq9vqmPU3Wx5SZjEFS152b29NNrvbsQpbQpyFAocH75gvnUK73gwKMqyrdxEf4G",
  "key6": "3RV8EovXgeFoF2AVtQoipwTRED8cB5dbtYQmhvA3AKqHm6ZuD6Eab2vCjkujUQdyBwF2jM8k9xGrbJc95EE5DR6o",
  "key7": "5SksqAsYKAE5t2k6vY7mAWAFou4j9X6Qn7FLwCH8CNpsmZs6f1FxgDjKFj3NCYTfuXjj6YkxdbFz1YVMSB57TMfm",
  "key8": "2cUHDf1wVRxcCaSz96oYuCHjfYpwfPjfvBdp1vtKYeP4qP2YDozNsMjLbfovHfnfJge2HpG4qc4b813v4Gop8Hte",
  "key9": "34LuQ4TFsDdB9NgAXaUDtCXJ4kos2RJWTES24fb3Di2Zfc81w2cGLfhSZPUChQVhtCniGiSfrKcmrq5CPeY5xqy6",
  "key10": "1F8mCkjzwvALjvnkLgoC4zYwm5fopJPjzbcEs3SzPm3A9LYv46CNRD4jxwBAiryq6QVNjyxiLNomocqvsQHpD7M",
  "key11": "2B7QCFmVAyK4qZJDv3DtjnW8ft3EAiCY4rxJE5doZBYwEpWQHbkv7rHmiEBWVQQUTbdC1jmS6k5f6tm8Nh4uXoBS",
  "key12": "37zMsUqC3XPNP88EZiVDtizMuxG8tHWCtzvAwiN1Jc3SCW4HSEQwcq6Z4SKFkPUXbyEz1QuURDN67CUUJSkj6uho",
  "key13": "3ZjguGQXF98AfgEgVe6JR6e8fWBKpR5MKdfRm2mW9MbnWwyy96i4K4SbmGti2QFRe97Xt9937EhMkHA9eFuktZVF",
  "key14": "8ixauBvtNRtGVpw1i8BYQp9GBnxjzjoCJ9TmkChe3KhmdzAhQEeecCqgQQr6LKo8c7Ptb6GBLPXRCKJC8Fr4Qwg",
  "key15": "27sSq7hzQj7L7Z4HVAyMijvZ8d2NRtycatQWLGZayuj6WzYPGKraTkAya4gNtat1xm21ZMKXsoLm9CRYgpXd7j3K",
  "key16": "51Ce1nkXhrMqmHFZYeUojk2LqMk7JwfhmrJp8jRwEbQHbfD6Cej63DboPDG3WU97JKbNiSp2e23vDnS2Vmh18dVA",
  "key17": "43WUVX9dkmJPiWvgmhAdvBc3qRTZhndqT7i4HboyjkKoscmR5EAPACSAH8xgmGKhdSA94wVHihSKpcMp354jbiH3",
  "key18": "2PCy1ZrBQ2uxKLY8MYUbtQhwDAe3vQQAu9eNzrjC7JMKS4pWjVmRcLHwjSf8uaVbNcjD2wYLRvgjbmadEUW74Wnp",
  "key19": "5RC6qWajuDS8g9YmFPWHSugjWsmhyPuSxZ2tHQfJKBWqBQFEThGn3ri8Y3xaURQwGt49dTpdiEhYGpeRFy3k9BP7",
  "key20": "52APFobnJEPGgGLVe6d7jaXygq4b5jSA8DjWchZqDjNwCak1rZupyaHk22YU874LAAuPUaneewr3HbQDoBssRFe7",
  "key21": "4hqqQJBufk3EgRuuArLYPG73gcFBJqXj2QXJ1LTmrFz543xrpFgzkdpPxVvMm9Yjxzhoo968fWareefqrQLNLBqB",
  "key22": "7MgcAazrHjDQrRBHNWE3z7QESWWnP6rZ99DygG7dxUrNVwgX7WAAWKuLKAK6qsXKPzZPjTqwdn9jqMM3wbQZz8j",
  "key23": "3zPLJLBSZfWasdAN7CzvfgPwJuAgazravxR2bugRLHuwJRbUdPQcJxWQ4USYLVjKM57dprSpBg5ChVU7CWwv8dcf",
  "key24": "2NwaPLCdkRMX4nMuCwtxd5AotUJq9umuqbKBXCmZM632t2oRm1aM2GG5QpFY3iL8dPYWs8UMDqjwa4FqJisqXXQo",
  "key25": "3eivUJ1fCsEDCFcyoHetD2xNfi9QkssrANCCvwrCNt5FcnP2FDLUAnrpTmeqCKsTPWQfSu7FJVoPJ7VEVFx1XAvC",
  "key26": "5h6XpmWRsSRgvqFDYfUn5R6uWSsaSFpvcqZ842fn64csPMcJZqjt9r5rJN65nVWDxxD1QenJwhXDHNTyGSHSJ4sD",
  "key27": "3Uh9JrHv3dBQ3w66K6gv8raWk8msSs8U82BzgzqXkmjuMPT86wFxZFDdLxkYtzyXCFb2Be2Wy64NkYUHJX2gyRzT",
  "key28": "7TFjrg5Yd5wtdWvH8hkUGCH2uxf3dTDjZx6fnCYquaRe1dTQa1fKkLsPuz1xmbHatTS1vPLGFZfq3Z23bCwZm99",
  "key29": "43SxyEhs1mQKCBsjR68Q4yLx4qMH1bo9jrqQbk99pRgZAbGeLXjpdu3VMdXDpYPcGdCfvZ13izyUTR7P1JuSaKJx"
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
