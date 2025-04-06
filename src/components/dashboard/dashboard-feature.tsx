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
    "3YWVgwQVqL7oc9GzKbJhKCGAHf16AqW1r3BjyUxSaix1amXYaajf6oDKbRyMyqLzxx6Rb4XNX7tXBdjqc7QNBwBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FqoQSBf4xL7dDGgAjp2tMSSXHuGu31eYJDLXQkA7gJVPez6CiDpUAsQMQfQjAPvpwCtb8WhuCZ8dX7x59rbi7XZ",
  "key1": "2yztCqFJa4pt3tmm9o7XGr26vHsZWF7GTnzyAou8oL4gigZus1YXpkENyTDTVdpAUK6su1F34d8gviz77qaYGUxT",
  "key2": "17LtqH3673Ux1EWZK5cqDTQcAPH4Gy3eUVdGxkLoq5t1TuTS2Fe25LM9pmio1RFJVeeVKPogHmdGCnthjpDkAbQ",
  "key3": "5wLpuU1qEDzQzX97oMqzTqHvvTCrZhFL9G4YpWYqhDbsGuoAgdc9Qqsw8mGxxBqSa3gD1UZfzzwjN2hFq5Xizb7T",
  "key4": "4uywYeNdTtrctrGXrpwpzUBgijbGxHJxj7cGXsP11xba9vfuNzJde9GU9JiBNhGf8umRwX14mzZCX134JVP4CDcR",
  "key5": "9NFRFvCasPQAGLBrUjrU7rNutCVjQ6q518gi1bMZKfmjMgbznQo12b1borYa6V2xs8T6CsA518CauFjUvL4KFS5",
  "key6": "5ipjgNN2APXoGSRR2ypVszyUAECkuZu8MGLPjd3qD9nZJKSvaimKb4qir6ryZZwD6fQWP38Bgd1jow1nBNM5B8g3",
  "key7": "5Gb7tDssmXhkexQvAmZ6AzSYJX59sowzU5P2QNC4FCg6z53thGArsSYZXJPk5qrxixQL2zopRi2msGw5JLDyRHf1",
  "key8": "5scX3RudCtEDGQq1UASK1Gjad1s7nccGQP3gnJM87tkug1mCjkC6mjYfx1xo2XFWj2uqzxS6xvHYsS2fPFZYfubY",
  "key9": "5ipVtHfTC15qWULbboPC8ErfiGDrziwtGQoEUQx6nFprq1mhEvy88UZsn1yDok9pNi7ArSASxAkg5x3HM9eH4HYq",
  "key10": "5G366E85kP6qvULdZ2bmHstdQ5JN743zmVMXdaiTfL3uev8nzpjtcfEe7g3dhEyqzB73EbQfCNzPJd5anzRxhaEE",
  "key11": "5LuvUPD2YpHW5QspPMNnWdRT1cwKT2wKHLrcJQCf1di8thMirskV5EzKi9ZV5Z2VGBuppqqMeYXyDJRs1HH9PLEM",
  "key12": "4LUdaNkPMHScbxhixxCiVvpM2XXXRbkrzraLuWwnDi1m4DJD3rXY8avxKsAnrd8isSBnEA4Gy4kcEpgXmixc7x5Q",
  "key13": "2JGivKuNMGwgyKYhaeaKALutL5g3eiFXYvJcW4Vk9V19fUm8ndKadaCTqMuwKAtn45vnFQrJwsx9kkcWdKZjhYx2",
  "key14": "LgN4UWHzvKDbr7HMBxgtRRsZwmPPfCKR5SWxpQtG3grHAnyDeJGN2MvgKR99mb6T8oaKVvPhrpkpGQK9Ffdgf1L",
  "key15": "2UQs6PymoKwR2soZhUdNA8HTrWuQFwj17aLN8es8joDRN3DHYfn6D6D38HgkBvydnCzy2gTBoQ4rh7EichdCs6Sm",
  "key16": "wPsYLhNVXEFQp8ot7HBRLY9jQJQ8Hoayh21yv3DfAeAPqSRiv94vCbgx1kcdLSZL5MVhaucrYMhuMEE8pqRBFDs",
  "key17": "63DWPZYyomsTt1ZK8G75AYJWkpp1gFQ74iGYdpRV7dadUe3Hxhg3bpMGF1cRGu34WH6n1xfH4mZyC3wehKJEY6oQ",
  "key18": "4d88TfKzYmdX79TkezJogNVowe7LZj5WqzJJ2YTykYHxSRYpBWEFg1u3bxuQ5TC61bYqecCdVVHdn6szGpHrKm8n",
  "key19": "rcwbkFGov5REyaqmwmc5m2cGh5ubBRnAiZY3hst5Cw4Ukp8t8ekZPZp6ZXVm5kD4Q8Eaj4WDZG2EEE6wTRUMPPT",
  "key20": "49jLbiUBLBtJfSENqGDSwfGKffy7vh5XgDu32UGxpfcsxDj1iaeBGUkkW783zZK42eUZsxkiSfFbrgGnDtNtYtcK",
  "key21": "4w55ZR38R7dmbMRsqaoU3vEZZp49Zktmbvk4PVwa5YjVKDeCsN8e78HeYcsvurN1gnYW5eQvBGfCrCewBxgn63na",
  "key22": "4x6cGJvdSRiaTGY85oFRz4tS8bi7Vn8cN4nuX5ZW5szarCssGPh15GdyCZwZKE3eGfp8TuHuqWWwCJNAFZWPrEYH",
  "key23": "4Mpff4zWRcKCw9utbx4LsdM3CkUgvsECckq6FFCDVvRU2PRL8LBDzHS9oZMeqt9ob7rcnPyyoTnYPGhoa1fPvWN9",
  "key24": "21G7TGhoJTcr2Md4eb4kQzijqMTL7mx87wqonz4G55Z1TaUpB3RsX5H5vXNZxBi6T1V4YjEy4uL7oEP7oxjHayZi",
  "key25": "4BzJtFpdvxanjjKZZFgL8pHjWAATwSyvrKsGAb1H8jbVCCEdamsbx4zfcnxmx8f2UVtHrgincU2o9D2oyDzLbbve",
  "key26": "5m5NQFKyuLnEmocM6TMMQjCXGHqa5F27Dt4WwCyTFxAuBNZmy3g1yKPAF6dgYAEunqGd19XrH9oFQvNUMCrMGbhZ",
  "key27": "3YT9N7w5xr49Bjx5DnPLdnqPnMyDg3jdqtwS43CQnDk4bq2DEWjbdpabKt1WNRZFaaAM91C1qxvYNCgPo6ukhnZQ",
  "key28": "4ZVPnbgNKGbMhqNuoz1HW2xLXuCnv5Tt6cxorZLWREgiYDFYJUQQs61ytYyYLdQB5PQbhMV6w3Ce7DWUmQtGXURQ",
  "key29": "3gj53noTx2zhSYJQYFATAsZtZ68EG4hpVo5he32fxQsohBbq16PEwfSJnDYYCbx3UbpinWyBfV7QVv9rgWCzptNT",
  "key30": "57FBb7v7UjxsP5771s53Qe7fZ3QMrtxzmJh1m94GPgtVr1xgaw6cRDrHWYhVNvftHw6eKk981Awt8J6MvceLy6vh",
  "key31": "5YFcKainNjSzE7Vm4AATvWywYLSyeopdLMb1sP3D4QLjryQ89wZFVrkq4WvSEqVyEoat9GP7CrmwfTKLw5gDSszK",
  "key32": "2DxDhF5ef5AcgHYmdZh5CcDar8auSuerfKZdyDtTTdHBKpot5uGB7nwmKmNT9LjyGCoHid8TVZPq96VJawiDgPwS",
  "key33": "44DHzW1ZgkrT1vfphb5Web5dEHYXJ8gVLM2R5PXA3YZJ4zxpeqTbPVuhtVHsMLmP914FZGbWdQ1pt7XVWLDToBgn",
  "key34": "5peRXHzGgrn1uGcHudD19zgYtcSMujNaN1tXFBsb5XmN9roW619twYAcX6BZA9pepefhHuwvH7Tto8FNMjupAHZ4",
  "key35": "578h3viqPT3dTMGtNUo1N461vo6BctvqTM93UnsVCViUUMg5XNxuCmirt6j31bYqCXSPRwhJuRYHDFEsy2mBPxQF",
  "key36": "4Yz2FLXgHYdzdBHEPzNopzQkWhPaA8sCKpMhk7uQkWW1RFUqDUtWB9M118KTHo4W711Mp1EmjRDY8SWQ2p56ksMb",
  "key37": "534U7j53nhMHyopks8q9yMCAPNGx3CM5gcxGtdXcfRKsDrDLzQKV11tLRSVREmqJFB1ZyfAEYdtP7Vq2c41Q1WpF",
  "key38": "3VzzyVKPgj6pzQt1f14brqUXWfB5D4289w4RqsFhxfk3oW72ampxi9WjVQo1VmqqFhE4Undp5EzegqBvWGR8swyp",
  "key39": "2TwABJ7tepwJC26i12p8nvormynUo8ycTi1Sy3biGsWSYA44cUGbznxAVFsxJCYiVaxYDh3pUZq5fGsbk9bJH6xE",
  "key40": "iSfjtULDMfVx8WmKR3EC2CvRXrcCWaGCPFBK45CNo4tB6G8azjVyX57BYHYLQd7Q5UT96xHRJHLAuz5BCFNQkBP",
  "key41": "5JNifFgScV46uNjTuZ6oJubNfZAxACysZbM6XxAYeAAQ4pVJyzbXkFR8ekBkKxKggxopDtXqKoa5h7pqDVUxSkja",
  "key42": "q9wUkoQfQQ2pjApjTCHw8BKEnRtzFjmtPy3hmH4rxyy8Z2xkwZtGiubLbFgi9zHkdu2dePg1KCYYgPfKCz7kBcU",
  "key43": "4hDwK12ciiUuxyVseSRcaiL5j2rPdMixSJJQtNQn5Vq4QBt274Zgw44muoqHAYkg4NSwGWi8fEKeiPNFQKDhcMaF",
  "key44": "HNkaWFbb94J8RQR22kWkG69JYfALpW8Wc6K6Baz4dRirFabCcqgBPER5jSMKexaWuFQJjiMunpiD9fSwMrxEoX3",
  "key45": "5VDnjypcEPfyRFWwXCWugGeET9No12SWaTHdQvEto4hYU7vuWraAGoS91NnY1xeRvMFR1n5Se83LnPtH1M3LogCY",
  "key46": "2yFcvKEjKAmvZgdTYUS14p2e3JcTCkfjg6gntURbe6qUiSLkWercuAiFoB11rY5GQQaWAnziXPqVruPqoTGhesfp",
  "key47": "5rnvYB181y5gPEFWpgySbZBJDjFGEMZRcn2LnCE3Vt7FefimrmpaVr3VLjY7rd5VrH6XoexVgmb43HG1UC1RFCgj",
  "key48": "mby2ACKWN3sopyt1BagBNRyLqKcRGHoM9yh1WWNqCugg5Lkyrpr72uSuEVMCCPbbpT6Nwtzxf5XuDR7t8tiK9Hs"
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
