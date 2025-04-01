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
    "4fDRwTMhXxB5xWPRE222x6rUe2G6JPXnstQRwYGQqwdn8RkZgPKRFf7gpZyd97wT4Lekx4t4WixQ3gkPaMGrsamg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSnRttVZAXpaVv2EyAU8nacFbq5LGaT7YD9VmYKm6NSmnNYgnhQk6kK2D4rMyCP5QnE8JHSAB6TwE3uTysagaRJ",
  "key1": "46zxzPQmYzEaRavvCskwdXGCL6nSgTYkChLNHejoQMr8pDxLXkGdA4SBBncMYJuHncReVDYFqEgeYSMbpkahXLmr",
  "key2": "3iBrgkJaNquzquh14Yp1BpshZZ6dntN7kJ2nsLPKSVYeZu7uUeQSuGjLeKTwNSrx7vynxXNxFvszEQWEgu4uxSQS",
  "key3": "3HQr27KfcECYBcNMeSGsL8gdUZsSk3SRzf66MZsuqFtTWTxFVNTMm76nBLSHb9uLPqAPkL6EdtoktowKKW9Q7Cei",
  "key4": "4eTSSSiH55Dtqp1i5hbtWxDgVbeUgRSziNfRAEMgE6dVEEiViFFr8g1DzejEgm8oBxyjL9uBiTfkgpjFjc6LzPxu",
  "key5": "5MEUyjPhpa224PXJPa1MKqUjvoPBKk3ZNcgg4FJssJGQqJ39WYE9MEfYsq1dFN2Eguxuu7naShsVfrawNThfsRXp",
  "key6": "d4AP7Je2sYfHC5qS1MhhxPWBTBTxRYJf2J1L6Q5CaSb5J5yCr4Uyin6vbRgQJsKPJLEtgUaJNbuxZUm1RxPHFjG",
  "key7": "4a9eUMSnp4gzcSPKips2SQqaim8BxQqfKAFX69G1zye9T2CYUMkEEFaZCMjphUezmJi2d1wJ3DxLUo1eJcTKrdP1",
  "key8": "4vqc96ehmsEFBEsJ536ZApa82EUWA9V5BWj5NKwXyceziDDheTzPVsoWzDb8SnBWwDSPegS5Tr3CQ2MQziGcmKMr",
  "key9": "5t2V6eccc6ZWmXFMq4GweHbQjn6v46TDjhQyBi9s2TGHUnijfFJSLUSxszyuCpyAzoyWyZWYb6QAHNqrBrN2gSmk",
  "key10": "65dgFEEjT1iZq6PQxtmA3YphcJWbYT6QUB1y5H7TDaLCCqRjKvdf5imnk2TqWkuyTqMeouyGAx1U5nFb8amaJtcT",
  "key11": "5sg8aKVx8AEXGTF1EPyJ8pi8ZunPmQVxsnA3yCGvzawTWJ13zn1zQuX19Joprw85PGcmDN6JTfgN8SdJ6zXqPMzP",
  "key12": "ZWs57UByjheDPCmW4AwuQ8S6QGopkCgeg9cCtvyVuazbjwG3VN5PfV1G75uRhv3dC7KLgn1GAru743MoJPW1RCA",
  "key13": "2psTo11nAv4RTD1n9d15Jb7NRGZSBdP1hCUParqGFLVgcbSupZ4Bs7CK6NSaJBZiyfRRuHoV7yV9NPnkWa2bBngW",
  "key14": "5z5Tu531v7R8TxB5juD96rHAzDdVEF2E5ubd5RTfg14dSmS8BJsnNvjPKwYV5YpYkkrDRjF26oviKmfXVvFgN4yW",
  "key15": "pTdTW4Hr5UVvzg67MmbtMNCjxhLdLQ3fR62Kkic88ghtEEajfk5zLTYDRHCLZVWBjbYmf9QH2oSk3cRqscvRYwH",
  "key16": "4R4KN9MhPx3Am3sXdkUfXsKJKACmyUq24kN3ryr4f7S17PD6X6xKSxrn9CPcLerdXBieDRD9Z875TNkkMiLTNpjy",
  "key17": "4oh9Ue3gnT8Z8EokcFUVRw2BTgDJyy7EioNdbqoCWVCDNpLg6rP2z4JZrPLfqb8LckJJ85YktUtAqh1AmQ98gxzc",
  "key18": "2wYfbe9hiXxNhs25m918biYbz1YD5u3bAJYE2mzszi4FJVAq8GV2MLepDg2Wb7oPMGN4CLQV6dEWSJxQK5VZzEgr",
  "key19": "25GYNgevJSbLXzUQiiztczdsAeuNqaLCX4g4Z9KiaTtRr8JzqtTrhD1crVFi2475Z6o7SQLX5G1Z9suDgVRADf1H",
  "key20": "3CyXikLr5h4GEYsKNrp2UdbujfpGc1CNp5vUKFm8uCiuYtM2sPLTWTzccAx81tsbieq7Ti8TQTavgHFAuBBRiPnB",
  "key21": "2QXpdcyK1LgKQAPLqtiopN5Fpe5rs5gLFQCHMkFxQ8ornwDWZwvWrMHA4Hu5Cy9FZXi6wrWPhmK3oyccxRg2uXEQ",
  "key22": "464oCi1Ds9zeyr91or4u6hLFfyJfE8WfmnYrgpupozpK9LiDmgeiCvLxdkBL2mYEi4EqcwdiKF2f1fH1UhLLs3Sp",
  "key23": "Z6WtaMNUKVzMPiwHW3nA4YcCxDcBZ2ntiCTarEwgCbHKkAGqTaLCRn76htfgRSPJGhWfwA9WT7xrKG9TfxfDR42",
  "key24": "318E2sfYdNGGs1SZX3mWFrLZFzEJku2A2TgycBCxisc4s5JnNgb1S81dzdYeusy3BL7ZgSNbnax7EtqZmuURVZjM",
  "key25": "64n4L16cHppp4yt7TJ8WkiUkrh7wnb4NpE6thtB4mMow53znL8dYagK1vLZuU93jy1XD7YGQAaXoztkyuZJWemsc",
  "key26": "3MJG4b1AH4P1FxjUmwixNRZsC4kuSA9iyjkmWcnpPnb6hPckqpCZExE9yzjcDh7k1WYaWwB8zYVKWgJoDJSjhSPq",
  "key27": "XxTxi4yArmFVtfKiPNma7AwmF4y13ExH6M7MC4rXFqhBP851QuGfe43YkWw4Vn4vKYJpEmJkxeZnm6KMicXyusM",
  "key28": "4dAELEu1RsB3jYu8V6tSxyq8Ghe7buVvryEynfi7zjrFdz9HVZmmNvmQFXRjTZ3cqhBc11V2oKqggZvbg4ydfQcM",
  "key29": "5f4hJPsjSpR6DQD8cNpCkWox3UF9oQVgJDVW5zVg15pjN51ZaL7J8Zhn14swJ8ghB2n5AWKEihPKXK7vrG9q4nGe",
  "key30": "4Xu47vvgw2p6saVrz8acfBJWxJ9UoeCxxQwQJQS8qHtD77zxd8JSaQ6U4iRDdFkwfrqUkSNjndFtFUADGWwc6FdS",
  "key31": "5N9wn1KfvRZqBamDGiqRXNs9TSHSRJtQTjqZRXtzsk99US4ccKqMKTdW7C8tZhDGywJFDGh8UaMc8HJGDXXTkPWX",
  "key32": "3q3wXfQd5Rdmv7MnrHEofrT2B95674omTKtHbXtAtj8mV1rsAg56eiXSkdB17c4xqFzfShTgLdpvaC3d3eUCe8gL",
  "key33": "5iqm2RBwkPxqyoZaSWuzR3RNXn7rjVsSPfTir22a3bTD4s9X2iQrNC2pQ7Yp27hw3LWsxy64GxpAgCdMjgZfcN9S",
  "key34": "2QuQ2ixKgpNtCyuEvebvp5DUcgD2rsUN6uJE7mra3AuK1fCLAY8iNwP4zV3bjm9RMrrgj1hK9gkHfy6oSvzrMLr6",
  "key35": "3gLXm1neojbfcsNTbjy8sxKkA7NcHuLHmiLowTnZrpeKTCogMLDTvDD71qggm6mhGvYuYg7xULqAy3bG8HTqRDv4",
  "key36": "41YKoX5knUJZhUBuBLbSCxeDofcRVsoUyFUpTsgReV5hHkk2TM5h31M6LVB2gySvvMr2NUMm65pxFdxrSNrhMu6K",
  "key37": "55MGp77gub7dMa9nL8wZCro7MxT33PbRGe1okoL6g5HN4f63GVWMMXDeJYCFwDv3Q2BsZomscJ2p5JiViHZGfUBv",
  "key38": "45B1W3jWytkHAvnJeAcQ488BvgwULdtBN4Lkf2TCEJmkhE5nQWDsY5YKjaYME7DZcQVpaM7oZnnhkKe9p3T7JRK5",
  "key39": "4ovagHSwCRY4jbycdQXreYCnAC6yS9vXzHE7gLJDeYmRhP8iBX14sCJjoRyG2FssU7WCYTBQTzXoxDesH2e2uyK7",
  "key40": "4kjK4FqMSr8Y2RH5TyXZiVuH4jFN6X4UjGveQFoXaDzPNW6EQEri1Nxq6PyrqvpEeoZWtE1J1RKbH8qqJEf77ceB",
  "key41": "Y2GroWZrep9cdNdiy8sYaRzjg2RZvhjVQRXTXapV1dcCdbetAYSCRyhB1JYucZ6t9YTEzfyfNDSvv86bAn2CdJb",
  "key42": "4aC8pZnFZ8ux7JeHvQh2Lj698y8Awuyr9rmXVJWWWhZ58JYY15VSA4gd3a1nSpua8Nq3pGRbnaFc5yg4x5cCmn3K",
  "key43": "5vDqoFCKGZeBrGXhx8z9jfsR74N7Jxzbma2s8WTig3g6JVcn8c9ex9kppWQXM2ua99NdmJxH1D4WG5x4sPWpbtvF",
  "key44": "3zmziMNJFndCPRtybau67YifUjSypM252rZatSZKLBMv6Q4jgHAHFHTKbB1mEFXrJxxM2bit62zNrCzFTMtxaXjy",
  "key45": "5KVboYeeu93TN8c9heMdYJm78d2g1Y4eJxbDbut8HMwmo2rokUau97BWA9YA6nYGeGDaxxZiDs4Pabc2wTqizqH"
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
