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
    "9Cvr1X8rTi6zAexRfcNPfTDxGTy9Ji51xK6hv3BSumU9Szkf9nLxcoY3GRKb7NMg5tfdVf13gv6mQ2LpKmZZ6Ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYAis6wMC9TprBuLS3ykWvMynTBmr2ApjbejnHipbe9LasV8xsuu2BDeR8W2mdsXE3Gb6kSyXXkPzz9ksCo2e9q",
  "key1": "N1GfAfbDDTKpFxy7kWifXy9cRj7jcwkuJEBL2AjZ8dwtdEpQxFTPntJaDG384VKcKBCoGFfhMe1T6LJ6zbpHkVA",
  "key2": "5e8dpyMTSR9QTnyjrcoqJKqQvAzDXf9FdHskqRDGYFtTBTNz7KaVyyxpBTxTuuiGCkAbbYLBpQx3K7gxSKnTV5B9",
  "key3": "3Hes3Q6q6cFxzLhqN4jkRpaibXd9bU3jeTKm17tPSFsg1GjsBTNTUcope8TMCvW7t9UhkQSmeo9qhC6pofPGvpYY",
  "key4": "121Mt6YQDiBzbbsq3zbUNfF1WDMDmtdyyupHQxB2Y5DSRTgxjrbvbHkFpYqbUVCo681f2vrxqqKxRE3VXMKhSF3u",
  "key5": "5iyKxipqE1PHn51iZzJReCvT2bq1A8NYunKF4f1GiAse3nt2Pwc3kfb3CHD9w9R5Weh8zW6Xi77PhcXH1eao2nEb",
  "key6": "4dGupfHQkUfZvUwG9EFUaKpGRKeHwpPewZzRxS8zVm4Bmjh7JW5HsxVM2nweubbNHMfwQVQrVanGPVd8TQZDRjVL",
  "key7": "5564HsEuY6vQkJa3pwjyoY2kaQMnMYbiE69BKbhn34UasfDqXEbeBthni8LvfFgF8HzCcSUMcWY9Bf3GS8j78h8u",
  "key8": "tW3vMRuPh3cUosGSnJWhkVwUiQXsVbvxsw2YbEXRppCmcaHk9XkafXwSkcTVXxN8G7Ny4P6EuFoqSnpS8jmtgnz",
  "key9": "RZUBwopcJB1VT3ziF5dVPhuQ6mxCRGB4M7YirbsfknazHZbb3KtdvbhUwqZ6PHw4dqXJJ8QuMva6efXmYgTJcRy",
  "key10": "5R1JHCT3vWzqUrfLBNyC9pNSf4aebvokrU52s1c3cv4eeHPzbCaqjc9gR8f7QTTy43j9jMszuxHgzdijNLJ6SUpR",
  "key11": "27hRnAxPgDJcZeB5rgcGZk4RxALD3hKrGS2YmbTjgfmqZ3Atki8bu5z4y9eVZGhKiX2wrHsoqu76aMw7xBxCpCPf",
  "key12": "2aufks5PuXr5mxbb1wQToqg7Q2XvQhUxCyMNKyBgmUjy2DVXKdtouRF8sR3dnxZHAE5o1vfPuCwNXTuxHWK23utp",
  "key13": "36TfdAuHmQaXGQGF2y42th2fXSVoAY36AM26VdEGF6ALfQahJfWxG73FGbnxvxaq9KNgh6jNaVjt7Z3PA7rBCF9",
  "key14": "4dM1JHGSrFfLUaWXGNwPEYMnBd9oYctYhfGBPzU3ziyXgxarR7CAMQP1UKzPzEMxPcHCZDTW6DjXLWhx4p8cLrqd",
  "key15": "uWhMtijQJAX1wKz3x6pEU8q6Aaf8YHFgSoZHjMKCv6aGu3vfr5MMX6ToNcCgRHHviEd8jWTWA4yndxoLWfM93FM",
  "key16": "dCDKRHiYaZsMkEouRVGMvpyS56sCjcbyBhBXxyDjPaFkdqgAN8Yc3SHWBV3jTgkc8SDVxdJCBA12DNiL27sr88w",
  "key17": "4YLU5VufRCLEtE69EbUJXy57HACBQY3GndmtrScvHuNVbbmEFABefkuWyF3w6f3SF3JBpGD4nTWazdTtrereQXmd",
  "key18": "4RedWknxnwaf4P6hVtLyRYXG3gfQvggEhq9TFznw5uT1nQWNwcpuGqf94TiKpoweZANrKVUg9fesLGcSkQyVZQHN",
  "key19": "4GLRekCHgEXQUDLePiQCQKpkgoyNhKawKA8HGh7uhRBvoiysFP26GcgaYxCbvyZMCTZpR2uR8a8eghUXhxrgjYkQ",
  "key20": "2rtMSaWpXoZB7QU1bhrN4dHw3rhWKDysqbRzdBberntZhQYrrSb2vKkPZjbt39DndGbFDR215Ms3q7rg7uqxcrt1",
  "key21": "3iuG2PJvVMN8yAJiQ9UEt1BrvF5fo6Uh6ePADPMtEQx6jHbw6uD8ggF6mu7uxfxGA256jf8XW2fHFXJmCmW94n2C",
  "key22": "2WVfcHPhCYNMBKbs4J64bcdubX2NgEbtT6MrEdB8vgKNg4KJp8B4YZoRi5J3CehJErkaByNJ3GJTM93LSSSMCxCB",
  "key23": "2hdfgFM3oYiVGfCZEmYFRv5X8TD9uSyGuksurfPLVSJHGQsCCNJELUWRk82XQBPja2MASnn4TYLEjCByg1MWqCy5",
  "key24": "21R3q5w1vTZm5f4LtsZSeHn7qGHbHNztckePMjK1ompuKLhhJGfX6HYrQ2wftcsUd89w6oDFYkGASJQ3ccv3TXfj",
  "key25": "65PjVNWtVzWAp1BC268PRYk84Dn9kDBEfHHPXxpHETsZE98vQJedR8oiSgv9BkYuiSXhixZ1dA88jBoeye69VcAr",
  "key26": "2vduvpHB2V9RvRZSvZamCCYJU8RtMrEikaR7Rcgsqmh4iL1Mc3umFKjcREN2WxHAxGoR9qhfK2driwZf85zhr2d9",
  "key27": "YkeDTX5p8REd4Jiekuip3qsBBZAGWWJNzKjHnrTcUunPVa6H6WwxcinPGYpfTBKnWPxsaYrVx9AesZvbnvnekVi",
  "key28": "mDm9ZJi1bfdgRVEwWyZgiXs7Eq4j3NuLr3eVdcXTQVbUbfgGb7ELvhCngkqXfdAzjEhfejMRNq5XBNMfBmgsmT3",
  "key29": "PJyY1yLzkrn2bkoDKpGTUGPQdDUBpfYsSwk9CLB5AH368xeWJLKvFas3UGc3p6o7piBsSj9NmWnHJszeduDiZxb",
  "key30": "27JKLPFR1AmkefgkvvQuSVBjGFc2RWS5RrCqJrRfQt7XS99ga1NfcpEVLt9eNfYAzVzF3cx6M5TV4jFea1MKu5gZ"
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
