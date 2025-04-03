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
    "2TTYvQEyftFcfP1uv32uDEMS2uW59cX1cGjKKxbeYxPkezaN4x9Rnr3KPy537jssTVbv3XwuS8CUSHwxXm2i31Ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ovrWMkoUXAwgk6j3DcGSEfgZW6kNdQ3zJ9K84NxaYuPAct5d3G3pU1Jn4x3r43LazX3NNm7mjnFRUsZyNJ7jggH",
  "key1": "4S876Qm4cQq52ig4HcggRwAPCiMcHuGH7fThpXBwa1cGndRH1EBSPnWEWmL4XpUbHsyfuHNBiWn6q9Kh4Qzt5C5y",
  "key2": "3rhWkZwVoHQ82HprsmMBjYKKwqYvvw2wL5VuLvnPFuAMpSCSqTbqVQrgNnji994K3iVze9ucXER4WPWoazkSRcjt",
  "key3": "4UYZcYFp1JtJpxpKWn4gZn2fi21UJ9x9XdxHGkUCbTdBVxpzFyTCAQxWdCqjkV5Ft33iacqe538kZC2BbH9NRLt6",
  "key4": "5o7qX2KxUyaAj3x5exVoMNk9nVtxneN8CENmTKNTh8bbjhVpGDzkRLpsTKUpgPDGjag4DgZuZAZ9m7daVMa7WkZW",
  "key5": "YfWkpiGtazmsbGGUds6EAzGYkGbkg8ozF1VoyR1y8z3zSQSXRqNJErU8QQZFBHciGeMDHyFtMwCp7czjuv9RkgU",
  "key6": "4HFEQiK7NwoiW5A7qJWHLYdCichmX382ZdKYU85f4CpJexWmP4rSJaRrXW8nyF7ggkoUVvfau1xHVRxj7gfQA2fU",
  "key7": "3KgQgmNfRDYsgQ6KRKb4BSHVtQ61wCUQxiSFES17KwFZVQgCF2s61DhoMY94yP5AT7QSp9qrCMyYDxw33FfSn39B",
  "key8": "57xnMcxc5bgi8LNFRAwYmRqYzoYhrF8BtkFLVGwFkb9YTb1s1RBPwmfTNAPqob4V9diaX5FFYoQxMnhdRKo1j4Xn",
  "key9": "4hkG4Vf12EAAdYojDzbi7vYsGXKqS5N51bG3wRUzhWcr6bB5VxWAqyGNwMSDiq1RaAF2JkX34kcbDa2zfjSAzv42",
  "key10": "4zZ5f3CSmzv6PuEdPXU4h9z1EfzF6iqMk1zWHaYEBh3cfNDSGNxHiceGxPvXQRvchQvs3daXjCzDPV1GQq8jNart",
  "key11": "59CxbiWGTXAGTu1H6hbuoZaHTgCL3R1XADbrYBJeAuzLkWVcALLtHL1WuC6n3PzwxDuKANVNT1MDAkf3kbaK6njF",
  "key12": "2HtpiZtXUqAsYnspv3HmyKqmPouZ6QWNDTMJZbtzxTsYo3K9epsMWfmJC5J9YLWubkFt346girwTpkqjkFVrXgae",
  "key13": "BhWLbCwLtBxMFqVNZZqwaajvRTpiocMtzVjCvDk39GvRfoMEwu3kXFycqsPugrUd5Ye97jdLqBEeUwA8pd3NP6K",
  "key14": "3uADrEqKHf6jYNxfySTEPxKXMjTAjPeR8xx3VfRdjdhE6hNdQuKHs56VZNri3AHiUZVooiCgxNNCENy3asUshL3d",
  "key15": "3oMeWmP6jiMhMjxPCzJn3QxNSQ8ezAcg7eFaFFAMFF5FZAKpyrGLfKQfEwkwxQhpdLD5irEqjBXRNg6D3BTeFovu",
  "key16": "5Fo2WB4mtXxqz9SvgdouNm53Y9GRW9XUCy3qQmPwQGyDy7uurfdsHKVxC9BPXAkGM3UfoSqFMdXwuuQbtY3wEnQ4",
  "key17": "5CMhrdMJty4VVeCEFQbeV5U47dwT2qyZMCBSZ4gTG15XWSsLYbBGSRNwepoKBsNWU4TuYL1jF4Jfx3UgP7QuJmmb",
  "key18": "5Tc4Jc2f8WT3XCb66Jrwy6ZakVoa4PeAeR1tk83FAVj2tJhodA3ZmBdeemvSJKi7CoRfi28Sq3Bb7dEYmdVi1bSV",
  "key19": "2YWnyUY56VLcF5zJ5JX54bsLdKdHrF1diuULsRxR3ycTdSs7LhFRxR4NWGeKzNf3qjNUuHXG6QcgyFje6MR83JkF",
  "key20": "5u7Pk8FiNSEeFkRRVn6WKVRvaPUGBwDHhPMFQMN4nQXjb6kgJPVxVXS4UEK2Q9Hp53LVjmJGBMmbn5Pk5KeHbfHt",
  "key21": "3Rc7fTW8V7d2WMq7YxNrdRDf3pfFp9aLNSe7Y9NxZh5ybhmtFcgEQ3iWt1VCDPWQka46xpbQ3v1hPTEsfCBNTptc",
  "key22": "2bNjvyeLemGM4WiPUNLAsqKSHyWeBgDixrccD5iKY6opuRhF4uxRvc1MGt9dbwd59VHbvi9sEwzMcLionsRq5Ei2",
  "key23": "4K9PW7yS1jYHR1w3Msjf3CAQHX1KJ2z5J7bwMBX9G2pTZkNpmndDjFpUikyh6w9BDEnTKyEQJQYieSctGeQdjMqB",
  "key24": "5MhqkBgxSq6Ti63XMUpsb18mPwkyY8w8bQYhK3pSZwb6eoqJWLFoMukJuM9KcaiBckLFy6KKsxQtP8NSZzteQXT5",
  "key25": "2XGXsoLdTkT5DmxE2d5iQ5yex4ZEQ7b2XABJiPzR3UZjkiSpiJqhbBhyYVuJYWrPoa1umQQc1V2PcSBWFM2xbj5S",
  "key26": "4FZEynVeTvPRM9F9my4Fvp9EUsmZvBAZzMyQVxuZfJpBKESNVLhDxpR71VVzY2xeQGJGsYmr1ZP73pWf1zHYvaCC"
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
