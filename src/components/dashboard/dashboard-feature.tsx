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
    "4U5BwrAuYzye7hyckEZiFw61opx7WcP5GCjmwem1g7PeDuuvA7fv2VbhSrfKc6UXNhtMFLUXcKN4ofNFyY42a8Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZ84A7qsSfvMvFSE9TbzmhEC2mxZ86w33Ctc5hoCE2jQx32CMh4AK3BTBZ6Cc6cEeStD9mmhcexKMvw8LB7ZNSS",
  "key1": "MnNAjnd2cwbu4m7M4DAAMq6rtt8uJf87jir8wRPouW3L1tcghhN47tj6Ze1oK6J94J26PMugDK4SD2b8EoMjy52",
  "key2": "5YqTV5S2uhycWqPUhKV7GJu4oqT17gKc24gVP4MsN4qfJKi9tF1mPHz2qzDPugv5t4tiBeRfhEF7DWSjEnFJNwfa",
  "key3": "3Awn2uLf4z2cAcNfcxhaXFyRmNSQJ8pSVYz6VXRfZuvSA639SWv7r7TGLdMS9x8Q8YeEHMjH4G2JxzACDwwjZKMU",
  "key4": "2KvcStijiRGRwicDw2zmfs9PWEP5ECeGptisZR9wjcpsWiz4zMRKsXGNNUms3N8Dj38oZLD4sj4HL9PU9bdQjtZF",
  "key5": "5epoojnUVvLureuMQjKVnJ1XKWVMVYQ5T8zQnufrCiHUviJvgskV5PJFZ4WS9bR58siMMnW58bbUpmGK9wLxZRUq",
  "key6": "2twbVuTEDY74p6RSoVqvppnM8kMjBxnNbaRpB72hUHo13LBg7z4QKKqWwLZDAcrMXb6Ppo2AiNgujstFwEoLMpUD",
  "key7": "PgmikzeBfxKBaeyaTTQVeYHYdNnmm98pAZnDfrqMBPP5t6tBVPaQJfwc68nds9uRBfixT3EjsEna4anMhrzijRp",
  "key8": "58GTKK9e3ZsGLUecTQuyPxsRPjbh4rTtqixZcSPpToTXKV3K3skibk4GZvM3YKptUrspm9nnhqPdtrmHTjc5qbWz",
  "key9": "4saPzfNc5NhQy2x5eJqwDimqb9aAro22xqCcrrv8oJ1DgNsVGGUNXvsmmTd9VQhCG4Xx5X1kAGWEFbGH5MdYc4Wm",
  "key10": "2BUnjYw9QBcnziwSxnyvbzdLDptyR68jjjJJfAPkncKUMa2k3tboU43j2Ad7J843qBb6f1gHJgSDmwLkqWXz97d2",
  "key11": "344ickPUPmCdgpXpUTjU68Ch8izNoRaEz3cnQWXKpdsi4gVn65VjR6eHnACfeDYPfgefVUMarUy8YdQe7ooQTxQ",
  "key12": "3GAjrjVRfcxftRnDbG59XeW4LZva4shUmhSkZMtvP5v5tThFe8SxiSuBCWUfz4duQHkhj4VdYTskSMGwVCcFGNyx",
  "key13": "zch2Ex6FySq2jnPqRBKDzKZL98jaZkZwk6kWPH7wFwULSN9pMLkqRK7r9k1mc4homPtgT3xqLTGSEqGc9veEhMi",
  "key14": "3Vhdcx7iTcb8JsC8akLSzKSbYmsFshwv1C45XLGi4JHFe8hLfHKzLVAExybtVQLi1Cv5ZLiDUgV96N49go2dxVbv",
  "key15": "1k8YbiYSmfg8m8QqCHDrE94NAc9Ztey2mXJD7z4GiN39vK3TVa5rpkjuDynV8rsDXXZimXiVb4veNeW4QCEX2gZ",
  "key16": "2FNxJc7DYwp7JagNL7uGDnU1QtAXERnCm9Fcw9bBxtB6Ag3mZpcKScFTmVeWgEV9o81vaHTiHHhYqPib2zqcgLKL",
  "key17": "2bCY1UWbcWjXt3z52p3Fm5aNUpEGDu8vCJDXtRhPp4CuAUCDe9qcEhwruSosXaccN11N5irgYX4YgXDe3pBM1joY",
  "key18": "5YKSskrja5V5wLZr4t9Wii9hCoF39uDiHW1SXxa3GFpsnM6zVm1Z2BAKprdJ4VZSMNoVYxtVdrtw9nqUX3smHhu2",
  "key19": "581WQKY4TXJzKDL97AQtYNMURHWxfZLSrdhbrDzfEee97Dyc66gL6wG1DkzaD9qBWWZCzGmb4kmcmvEEEHWnft4H",
  "key20": "4mQVc2XYqEeZMsGwbNrjtnU2ErQs9ZQ2jBi3X1dKvJuKgdzvFkkTepWRuJhbqWkWKhQopxtMhcCQauWsgZ6iQj1e",
  "key21": "eaetGovbhq2KTAWWZVETkVbyZHtWDv252wWydEGaVn1Ja83Pgvzk74UAe2eAVQ2DQb8o9i4HPmNdk5zGJZ6omKo",
  "key22": "3CawLLKsnjmpxs1QgErBuGtcvepWTDtdNjA9z64jc7s9T3wVpY9TPUW9VPCKPa1uG56VrJPbEySnuKN2DV17XQtd",
  "key23": "p5edEPzo31FBXr9QVdc8HY83TU39areNUxAMKQBf88atvyVCGswQe9A1iMuckAYHgFeJgcTmSoppMMSSUb5ceVr",
  "key24": "5hf2vGqXS8fQkpmBFnpc9A2c6zsDs2YLxxLnG2rZx4XtuttSEr1Ppz7gdW4MFty3Zom1ewtrAsLbVg5d7PjMESEK",
  "key25": "2NG59qwUQZRQdsekfjKyDvwYZVYemizNQ5vFrbmChnPiXBhbNUHdrZfi73YBVc1zhCxbVghjM9XxELopDC1zmpRW"
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
