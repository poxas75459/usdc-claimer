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
    "4MGL3rPZhv2V2Mwmm7qh2oGY6ufLtWAAnZWLBEkazibzByCWhahzPtoDHNRVkZ1BzyFzqYjcwGLYi7bEMRdy8fxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N3trXuFeym2ZdQPEzt5TpYUV9txb7tf2eK2gNz8csQrqUc2uLwdod5TWSa3HnL8V1K7oDadsCQ7KP2bzaQLUusf",
  "key1": "3zphShyJLwznxKygKRDEGucp3Jq2QjPMxApuWt8CAiYdxozpAidwriq4xn3YmiqFpQf8UTKSmtfP5bgAFFUrVu7W",
  "key2": "2raYoPsG6E2Eb1nfxyHEhhakaUqpHdq1ZaKq7FRiUovgcqUJPXsGK7hFJRfVzx4TLEK1VPDvLXgEqLoBHd4CmVkN",
  "key3": "5UwvDNs5VBfN2CRTGfQ4uKVRQiDEkuA5hkydTMJXuTzAGYSmF7dtL9cEGrW5G65w9vcyfCr9T2cx9f9KqFt1sWFh",
  "key4": "2hdS3ceqWLSAx9h6cQPeYXDmeFpMu4axGYPh1mrURhT7T4NNpiqM96r6VSRgDx4UazLUFs9XCb8PAbvPEZDViFUL",
  "key5": "3KjUBXpBSLpKpy2GNVzu3TWV8c9UAN1nyXrgw1cHDa9UwCAkrPjWDT9FxM88DATcoyhabcHwmdZtagFkfD3gRsY4",
  "key6": "5g5VebhhmUUzvjRw3U2fnefnKYiynt7pEV4mx6vLLNoFFHzDWCTNRaqWQkYCscvyRpk7w8Nfn6x9gPq28tc8k5DA",
  "key7": "Gg9aYDduqEg4AuHmZdNXsQ7Tx4CqC4NPUtUaQSN3ZJmksHLLkNqKBfZbJc9ALksxXGF7gmg67X4M9RB2kQJS7u1",
  "key8": "RP517uSfTtNVGhkaoLLinmcD9m3sA8wW9udFZsPYZYwuhuWMR7bCqJA7FrYT3KjG8tmWxmAbbhy4fsuY5jLszg5",
  "key9": "4sN4m4CKF45NbAKfFs6mG65hrVCvvyZVMP35oqVhtSBaMWdy1euR8ot5eMdwDsZ2a7yUSNFPgS4PRN2hHivU7yMP",
  "key10": "3UYhWSWgY3jps4qZEoEPtnMnU9TmDMHRcvhS1nUpxuw7abJdkd6HdgTyYYY4TTPqJskdekJDJcPYZUmNZ75kA3kS",
  "key11": "4xibr48YqQDRV5pyyDXLohfpgMJSpxBYmyA9TWatjEiSTwFEzqW4JSYgLUi2LCiZT7qvg9mVtEjBjtrKHiL8SeZf",
  "key12": "A5FcXiDyUh4ozaz3n7yesQRUKUdKaairsKhCbXuDZGaVP7CoYGtvcj1ExD8bKDpprp2h3DH1oGXTajFtVSZWPPB",
  "key13": "2PXMWqhpPdLP5K2UKn7G1vrEXsCXeYA9yMuVv3thGT83zangdktzvqBGtFCEyoYebudjqHK7XnGVh8d6c6mSWmnH",
  "key14": "sLcE5jB4b4yD1FJPVXRU7SPcmRjrPw5Poms5VkuU8ar1MUMYSitq2GPGo8zGsCyjMVLYSWyNNbbPNQKH3viHdxM",
  "key15": "3hzc1WfZekwpuKHWWeeBLsVY3HCRHzeCQKUC4yS9wGQjFLZoU9hCtJJH25A931vLuRhgiUf56mgG2MebAs8Gs7ES",
  "key16": "wZLRNsPLKBodjBuuox7bePCjTE2Ur1SrNAvD4YhqkQrg67MSD786qt1k9acxM2hvJPFZ53oJiW6MEb2SwrCcJi7",
  "key17": "Bxweu9yxYAVFhFXMvv62kqRAD3YnrJV3TK8UTRdTTExWSqh68hdCiR1KAPtwYbp8FHwt5ic1ohnE5UzSkPzyjk8",
  "key18": "3AUh6PTGc1xttoUs3EdzdtoFgjnyoDL1zqQo4DijC34MH9jLhE976W1qGkZWLcnogHYi9pMzRv7L2HuZcEfJePwD",
  "key19": "5BCAdDJcPPJBWEprgHLM5koiaP5xw21UbUZZuJ6xaVJ7hfCkmd3uf91nnb1j75Q5hJXSKJgL7VMtLYLM3CZAbUNE",
  "key20": "373pbJ7zgWTCep6YQPYJuH6D5EnR8xJbhPxea76q8vRBfXWvhQmevqfhVopzeyGvYsxjRw5uKuVfPMrggwzhBFmj",
  "key21": "5PMB3acDEF1hLPKYRzi1LpWysgnQufNQXR5m6ibycZ8p3gRSWKc6UkYbj9VQijD3JQBBGTciNk2W2yPnasKiAYtr",
  "key22": "25xZt3xKSTPPmTj1LEqhmUGq6YakhJ1JWDUxP5RqhNnPjk3yaG68k1ecJD79PezUBaca4EqbPH1R2XaDKLLivpFY",
  "key23": "25UjuDBigpqmbuLURMPLLggmLaoYf6kfzGshW5ANabuvwjxvhTyZY9jWjA4BErN7AXhj2YriwjrCr6gkfajepZPH",
  "key24": "2SLvNpLu4DygWLgAHKSRrAwM3MfsPg6hct3nB38nFNLNcdpbh1KUmBA1Xd1fMmVXX4Jpqh7HpuAhd5a6oT3DJgdK",
  "key25": "2mTh6tXTK1TfbXQqig1ckRkZYhEc5SD3xu3R1VYmzRbHxx77AEJumzVbCUnNhwBfPyZbHQkqtKgTvaEJKfnY5wCr",
  "key26": "3ZAfdx2vPUW63ukxeNTieTSBvsmRpDoSey9RBLYaSyM7jhi3xFiibwZHsZCBWKL8RUFobChtFi16uu4UW5Yz7X7J",
  "key27": "3q7pWsdf6DTRQSyiqzgKPXDu7f1wfxz9fBZWPrEAgBGhBATNwK3KW5aCEQR9DHcRcSZqPjUS57MFtSgAzLxFV3q4",
  "key28": "5wmnjCNsScGiJ9v3X92nY6PUPw4cVakDs5VHF2HKSg2zuLZX2fiRR7oge8UCdnxAbJiuEEpkzeCELbx8m14RqsFy",
  "key29": "3M3LS3YpLRqqKV4zvCSEK43xLMbxsxhFPKwo6fLLgwCa5yuXvywHScAGd3kCkoX8Fn994tVXU1ArVANnbuwH3iz6",
  "key30": "3tox5xwH2FVq7fzr3u1Tg34Qhy5xhm3Dhni9SgX75qjkwaLwJ9GB9mAXTUC9XKNFMuXQ81jwtr3p3wCyNYT2cuzd",
  "key31": "2gnt2FbrHiW5hFGuDsh5V7nPzUGKuGQwsf1AiZhJ1HueDv9V1BrpX6xptFYegFSFsDyUKDXmuZZ4V5oiMURQugfv",
  "key32": "2JUgZff27FnWQtbwPtRE6qgegfMWT9DFHnKM6CDqE7yVanNgRn4hJC8JENEwc2Rha3h2WrPo33o3HktzRWFpQFcA",
  "key33": "4KiG6Eac66b2pxWDF3sXQNSJ9WFd4Pokyaov2PXW4bq7P1WnCdkYJcuckiNq7A5ci4zb55PHjURKX5fuxEGb6XDa",
  "key34": "4cBFWNPnDb7SLHWAzNN3CYDDqUYYT14YCPYRWdubTeCWwzjPbz5rfB3Br7cxo6c9puL2Cuqf2i4VRPtwkFw7eBek",
  "key35": "54nJPqj8XLMEjchsLNhEsDyQKNW6VZjnCPy4LEFD5pA2hrT2F3ZQ2mB2EnubPCqLS1WsouXYqtXEgzonj4taKBET",
  "key36": "5MVHdV3bwaJfP4wD5WEJMSLucGAPtGvmA6q3SY55WVTPWMasPsLyh8WxwMQgF52rhnPkDcWwX8Z6Wt5Jvm83b8Ka",
  "key37": "41qRpVYRpcJ3rUaV2quUtvXLjQJQMGqc1M5dd6CKTA7zufUGu2ofFAMcHZDm6Fpv8FAXfs4bhT86WMYmhBjKkvo1",
  "key38": "4PFBDHsTgPib1tMVLCF439wVXqxS3TdNPTh6sG2AEGz14JJB5MQ3SoF1dXixa4muW3MR3VGbmyquqqiodMUuZQ4A",
  "key39": "4tBuc8kUUvkN4vKuCdw68f6XTbkHBsAmw3S9T4VE8hMmqYd13MjYas2va6dXR3NouitxJUQWgNqmbotza15yKosr",
  "key40": "44ERA9up6NvX1hsr7JQknLoLJJQfEgjrhBjpD8u43Z8d7v4BhJ3znQj3BZ3ampG33TAj5rARkd1SjmbZjFkUof5p",
  "key41": "5X9oMJM54iBUUCNziJpjAmd76zxxkTfMdFZMGcz26K1kwbbHwvaeKSLd34wMK4Ei73eFaLSyPVeTv8HXFefvSaU8",
  "key42": "w1WwKcpcdTozYSjZxCXdm9pznagzvYgyr2hRBVWDhC43A3Th3PWbxEKGUXG2Tsng1CX3FGNdzQ7meiGcexU7VBP",
  "key43": "2Kf8JCY5MtUuk9n9xG8hTMdFo7QinEUqcus8BXfPZTCX6JE4vvxQ174P3VPVdYBv51D9KdNZ1REdkAJC9DFqAfzd",
  "key44": "2HJSoNezmZeWSzqfrgw2aDiebiL4mDZpWydj6YfHTVSGZHj4PtDUFiMe9p2eGCrZshD9Gw4BXxz9YjLy2QBr9EVX",
  "key45": "2LwX6GiuY5w5sTm13UJfjv8QCeULtHnyeWGZUVCx9QqawJoo19CyJfF73ejzH1nxAiFBKy3CE9cKrjG7q43oTQpd",
  "key46": "4cPRk2HX6ZUP14fosqfqLe9EdihBkjPz6xRoW9EbZLgmqvasizrBQbSJc493nGc4wt6jwh1afXpp6jBRukmmcVMK",
  "key47": "4frP5SRkgHPWvvLm5ouQuoUhwVgy1fcna981J45L85XFJntoQmeqRjgmbh5SXe3F17kzWjaDwL64Dxq2BAiiWeot",
  "key48": "uiJtCfgD5PnieE4fDmwWxNSbWwSoe7YNvwPSDBs1pkKAB3KeEExrpRvN9J7YG6jULam6ednqiYSThRErFcTVLMP"
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
